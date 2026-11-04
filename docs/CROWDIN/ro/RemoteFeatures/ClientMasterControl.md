(client-master-control)=
# Controlul dispozitiv principal ↔ client (control de la distanță semnat)

From **AAPS** version 4, a follower phone running **AAPSClient** can do much more than *announce* treatments through Nightscout: once it has been **paired** with the main phone, it can send **signed commands** that the main phone (the **master**) checks, confirms and executes — including delivering an **insulin bolus** on the master's pump.

Această pagină explică cum funcționează, cum se configurează și cum se folosește.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Master** = the main **AAPS** phone that owns the pump and runs the loop (the `full` app).
- **Client** = an **AAPSClient** phone with no pump that follows and now also *controls* the master.
- Ambele telefoane trebuie să fie conectate la **același site Nightscout**. All communication still travels through Nightscout — no direct connection between the phones is needed.
```

---

## Cum funcționează

```{admonition} Coming from AAPS v3?
:class: note
In **AAPS** v3, **AAPSClient** could only write unsigned care-portal treatments to Nightscout, and could not deliver a bolus. Remote control now needs a one-time [pairing](#client_master_master_setup). Vedeți și [Ce s-a schimbat în AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 folosește un canal dedicat **Client-Control**. It still rides on your Nightscout site (in the `settings` collection), but every message is **cryptographically signed** with a secret that only the two phones know. The secret is handed over once, during **pairing**, and replaced by a new one right after it, so it never travels in clear text.

Principiul de bază este **dispozitivul principal decide**:

1. The client sends an *intent* (“bolus 2 U”, “start the Exercise scene”, “set this temp target”…).
2. The **master** re-computes and **caps** the action against its **own** live data (profile, IOB, COB, current temp target, pump), and **authors the exact confirmation** the user will see.
3. The client (or watch) shows the **master's** confirmation text — it never builds its own.
4. On confirmation the master **executes once** and reports the result back to the client.

Ce înseamnă acest lucru pentru dumneavoastră:

- **Comenzi semnate**: doar clienții pe care i-ați asociat pot trimite comenzi (secret de asociere și semnătură pentru fiecare client). Comenzile vechi sau retrimise sunt respinse.
- **A role for each client**: you decide what each client may do, from *Read-only* to *Admin* — see [Client roles](#client-master-control-roles).
- **Insulin bolus from a client**: the master delivers it on its pump, and the client shows the delivery progress.
- **The master decides**: it caps every action against its own constraints and writes the confirmation shown on the client.
- **Only paired clients change therapy**: while client control is on, the master no longer takes treatments or changes typed directly into Nightscout — see [Hardened mode](#client-master-control-hardened-mode).
- **Each client gets its own Nightscout token** with only the rights a client needs — see [The client's own Nightscout token](#client-master-control-own-token).
- **Master offline**: actions are blocked with a clear message.
- **Revoking a client** takes one tap (per client), or use the master's switch to stop all clients.

Actions that can be triggered from a client: **bolus**, **carbs / eCarbs**, **temporary target** (set & cancel), **profile switch**, **loop / running-mode** change, **temp basal** (set & cancel), **extended bolus** (set & cancel), **insulin selection**, and **[scenes](../DailyLifeWithAaps/Scenes.md)**. A subset of bidirectional **preferences** is also kept in sync between master and clients.

---

## Roles and prerequisites

```{admonition} Before you start
:class: important
- **Dispozitivul principal** rulează versiunea normală `full` a **AAPS** și este conectat la pompa dumneavoastră.
- The **master** uses **NSClientV3** with your Nightscout and is showing *connected*. Give it an **admin token** of your Nightscout: with it the master can make a token of its own for each client and show it to the client as a QR code.
- The **client** runs **[AAPSClient](AapsClient.md)** (or **AAPSClient2** / **AAPSClient3** for further patients — see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). Trebuie să folosească **același** Nightscout. If you set it up with the master's QR code, the client gets its Nightscout address and token from the master; otherwise set up **NSClientV3** on it yourself first.
- **Websockets** are needed on both phones: commands only reach the master over the websocket connection. While client control is on, **AAPS** keeps websockets on, on the master and on paired clients.
```

Asocierea și sincronizarea sunt două lucruri diferite:

- **Synchronization** (data: BG, treatments, profile) is set up as before — see [Synchronization](#RemoteControl_aapsclient). The master's QR code can do it for you on the client.
- **Pairing** (control: the signed command channel described here) is the new step below.

---

## Configurare

(client_master_master_setup)=
### 1. On the master — enable control and add a client

Pe dispozitivul principal, deschideți ecranul **Gestionați** și alegeți **Clienți autorizați**.

Turn on **Allow client control** (it is **off** by default). This is the master kill-switch: with it off, no client can send commands, but your paired clients are kept so you can turn it back on later. Activarea lui pornește și [Modul securizat](#client-master-control-hardened-mode), afișat ca „*Mod securizat activ*”, cu un **(i)** care îl explică. In [Simple Mode](#preferences-simple-mode) client control is always on, so the switch is not shown.

![Authorized clients screen on the master](../images/v4/ClientMaster/authorized_clients_master.png)

Tap the **+** button (bottom right) to add a client. În dialogul **Client nou**:

1. Enter a **device name**, so you can recognize it in the list.
2. Alegeți **cum este configurat telefonul** (vedeți tabelul de mai jos).
3. Choose its **[role](#client-master-control-roles)**. Nothing is selected for you: the right role depends on who uses the phone.

![Dialogul Client nou pe dispozitivul principal: numele dispozitivului, cum este configurat telefonul și rolul său](../images/v4/ClientMaster/new_client_master.png)

| Way                                | Ce primește telefonul nou                                                     | Use it when                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Cod QR: Nightscout și asociere** | the Nightscout address, its own Nightscout token and the pairing, in one scan | the new phone has a camera: the quickest way, nothing to type                                                                  |
| **Cod QR: doar Nightscout**        | adresa Nightscout și propriul cod de acces Nightscout, fără asociere          | telefonul trebuie doar să **afișeze** date și să nu trimită niciodată comenzi                                                  |
| **PIN**                            | the pairing only; it keeps the Nightscout settings it has                     | telefonul nu are cameră (sau dispozitivul principal nu poate crea coduri de acces); trebuie să fie deja conectat la Nightscout |

The two QR code ways need an **admin token** in the master's **NSClientV3** settings, because the master makes the client's token in Nightscout. Without one, the QR code options are shown but cannot be chosen, and the dialog says why; the **PIN** always works.

#### Cu un cod QR

Tap **OK**: the master makes the client's Nightscout token and shows a **QR code**. A code that also pairs works for about **two minutes**; the screen counts down and closes by itself when the client has paired. Scan it on the new phone as described in [On the client](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Anyone who sees the QR code can read your Nightscout, and a code that pairs also carries the pairing. Arătați-l doar telefonului nou. **AAPS** blocks screenshots while the code is on screen.
```

![The master's QR code screen with its countdown (code blurred)](../images/v4/ClientMaster/qr_code_master.png)

#### Cu un PIN

Tap **OK**: the master displays an 8-digit **pairing PIN**, shown in two groups of four (for example `1234 5678`). Acest PIN este **de unică folosință** și **expiră după aproximativ două minute**. La fel ca la codul QR, dispozitivul principal refuză un nume de client care se află deja în lista sa: fiecare client primește propriul cod de acces Nightscout, sub numele său.

![Master pairing screen showing the one-time PIN (the PIN shown here is expired)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
The PIN protects the pairing secret that is exchanged through Nightscout. Share it only with the device you are pairing, do not post it publicly, and let it expire if you do not use it. A fresh PIN can always be generated by tapping **+** again.
```

(client_master_client_setup)=
### 2. On the client — pair with the master

#### Scanarea codului QR

Puteți scana codul QR al dispozitivului principal în două locuri:

- în **Asistentul de configurare** al clientului, la pasul „**Configurare de pe dispozitivul principal**”, care vine înaintea pasului Nightscout. One scan then sets up Nightscout and, with a code that pairs, also the pairing, so the setup is finished: the wizard closes and the home screen opens;
- oricând mai târziu, din **Gestionați → Asociați cu dispozitivul principal → Scanați codul QR**.

Prima dată, **AAPSClient** cere permisiunea pentru **cameră**. If you refuse it, the screen says that the camera is needed, and you can allow it with **Try again** or pair with the PIN instead.

Îndreptați camera spre cod. The client shows what the code does — the Nightscout address and, for a code that pairs, the master it pairs with — and asks "**Use this code?**". Tap **Use**: the client turns on **NSClientV3**, replaces its Nightscout address and token with the ones from the code and turns on websockets. A code that pairs also pairs the phone; it says hello to the master as soon as it has connected to Nightscout.

![The client's Set up from the master wizard step](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
A computer without camera: use the PIN there.
```

#### Introducerea PIN-ului

On the client, open **Manage → Pair with master** (or the wizard step **Pair with master**, after the Nightscout step), **enter the 8-digit PIN** shown on the master and tap **Pair**. Clientul folosește PIN-ul pentru a prelua în siguranță oferta de asociere prin Nightscout, apoi întreabă „**Asociați cu acest dispozitiv principal?**” și afișează identificatorul dispozitivului principal. Tap **Pair** to confirm (see [Pairing with the master](#aapsclient-pairing-with-the-master) for a screenshot).

![Pair-with-master screen on the client before pairing — enter the PIN here](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### După asociere

Once a client is paired it sends a **Hello** to the master and appears in the master's **Authorized clients** list as **Active**, with a *“last seen”* time. The client knows its [role](#client-master-control-roles) from the pairing, so it shows the right buttons at once. O asociere făcută în Asistentul de configurare încheie asistentul. In the same step the two phones replace the pairing secret with a new one that never travelled (see [Security notes](#client-master-control-security)), and a client that was set up with the PIN gets its own Nightscout token (see [The client's own Nightscout token](#client-master-control-own-token)). A client can be paired with **one** master at a time; to pair with a different master, **Unpair** first.

![Pair-with-master screen on the client (already-paired state)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Gestionarea clienților

Din ecranul **Clienți autorizați** al dispozitivului principal puteți oricând:

- **Change the role** of a client with the row of four buttons under its name. Noul rol se aplică imediat, fără o nouă asociere.
- **See which Nightscout token** a client writes with: "*Own Nightscout token*" is what you want. A red line "*Uses the Nightscout token …, which has more rights than a client needs*" means the client still uses a token with more rights, usually your admin token — see [The client's own Nightscout token](#client-master-control-own-token).
- **Revoke** a single client — tap the **trash** icon next to it. The client can no longer send commands until it is paired again. Its own Nightscout token is deleted too, so it can no longer read your Nightscout either.
- **Stop all control** without losing the pairings — turn off **Allow client control**.

Phones set up with **QR code: Nightscout only** are listed below the clients, under "**Read Nightscout only**". For each of them you can show the QR code again (to set up the same phone again) or delete its token, which ends its access to your Nightscout.

![Clienți autorizați cu un client asociat (butoane de rol, cod de acces Nightscout propriu) și un telefon la Doar citire Nightscout](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Rolurile clienților

Fiecare client asociat are un **rol**. The master checks it for every command, and the client shows only what its role allows. Un rol nou se aplică imediat, fără o nouă asociere. The roles build on each other: each one can do everything the one before it can.

| Rol               | Clientul poate                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Doar citire**   | doar să afișeze date. It stays paired, so it is ready when you give it a higher role.                                                                                                                                          |
| **Mese**          | give a bolus, use the bolus wizard and QuickWizard, enter carbs, and stop a running bolus. Carbohidrații introduși aici pot face bucla să administreze mai multă insulină.                                                     |
| **Îngrijitor**    | do everything a user does in **AAPS**: temp targets, profile and insulin switches, loop mode, temp basal, extended bolus, scenes, careportal events, calibrations and removing records. Nu poate schimba setări sau presetări. |
| **Administrator** | do everything, settings and presets included (QuickWizard, temp target presets, scenes, profiles, automation, insulin).                                                                                                        |

The **(i)** at the top of the **Authorized clients** screen shows the same explanation. On the client, **Manage → Pair with master** shows the phone's own role.

---

(client-master-control-hardened-mode)=
## Mod securizat

When **Allow client control** is on, the master is in **hardened mode**: it takes changes only from paired clients. It does **not** take treatments, temp targets, profile changes, running mode changes or deletes that are made directly in Nightscout, for example on the Nightscout website or in other apps.

- The settings for accepting data from Nightscout (**NSClientV3 → Synchronization**) are hidden while hardened mode is on; **AAPS** uses them as if they were off.
- The master still **uploads** all its data to Nightscout, BG included, and keeps **websockets** on.
- If the master gets its **BG from Nightscout**, it still takes BG from there.
- Pentru a încărca istoricul pe un dispozitiv principal **nou**, folosiți **Sincronizare completă** în **NSClientV3**: aceasta preia tot ce este în Nightscout, inclusiv profilurile.
- [SMS commands](SMSCommands.md) are not affected.

A paired client follows the master's hardened mode: it keeps websockets on, and the same Nightscout settings are hidden on it. Un client neasociat își păstrează propriile setări.

[Simple Mode](#preferences-simple-mode) always turns hardened mode on. To turn it off, leave Simple Mode and turn off **Allow client control** on the master.

```{admonition} Why hardened mode
:class: note
Tot ce trimite un client asociat este semnat, verificat și confirmat de dispozitivul principal. Un tratament introdus pe site-ul Nightscout nu este: oricine are drept de scriere în Nightscout-ul dumneavoastră l-ar putea adăuga. În modul securizat, doar comenzile semnate pot schimba ce face dispozitivul principal.
```

---

(client-master-control-own-token)=
## Codul de acces Nightscout propriu al clientului

A client does not need an admin token. It only reads your Nightscout and sends its commands to the master through it; it uploads nothing itself. So the master gives each client a Nightscout token of its own, with just these rights:

- read everything,
- write to the `settings` collection, the channel to the master,
- snooze Nightscout alarms.

Codul de acces aparține unui rol Nightscout numit **`aaps-client`**, pe care dispozitivul principal îl creează prima dată când are nevoie de el. You can see the role and the tokens (named `aaps-` and the client's name) in the **Admin tools** of your Nightscout site. If the role is changed there, the master sets it back the next time it makes a token or you open **Authorized clients**.

Cum primește un client codul de acces:

- **Set up with a QR code**: the token is in the code.
- **Paired with the PIN** (or paired before this existed): after pairing, the master sends the client its own token through the paired channel, encrypted. The client first checks that a login with it works, then uses it instead of the token it had. This needs an admin token on the master; without one, the client keeps its token, and its card on the master shows the red line.

**Un client își păstrează propriul cod de acces.** După ce dispozitivul principal a văzut un client scriind cu propriul cod de acces, preia comenzile acelui client doar cu acel cod. A command written with another token (for example an admin token typed into the client later, or another client's token) is refused, even though the client is paired, and the client says "*The master refused it: this phone writes to Nightscout with another token than its own*". Its card on the master says so in red. The client still shows as online, so you can see what is wrong. To fix it, remove the client on the master and add it again.

The master never deletes or changes a Nightscout token it did not make (one with other roles than `aaps-client`): those are yours. It deletes a client's own token when you remove the client.

---

## Using remote control

### Triggering an action from the client

Use the client exactly as you would the phone itself: open **Carbs**, **Insulin**, **Temp Target**, **Profile**, **Scenes**, the **Manage** sheet, etc., and fill in the values.

When you confirm, the client briefly shows **“Contacting master…”**, the **master** computes and caps the action, and the client then displays the **master's own confirmation** — the exact lines, values and colors the master would show on its own screen. Review them and tap **OK** to go ahead.

![A scene confirmation authored by the master and shown on the client](../images/v4/ClientMaster/confirmation_master_authored.png)

The same applies to a simple carbs entry — the amount shown for confirmation is the one the master computed:

![Carbs confirmation authored by the master](../images/v4/ClientMaster/carbs_confirmation_client.png)

După ce confirmați, dispozitivul principal execută acțiunea o singură dată, iar rezultatul este afișat înapoi pe client.

### Bolus de insulină de pe un client

This is the main new capability in v4. A bolus started on a client is **delivered by the master on its pump**; the master caps it against its own constraints, and the client shows **live delivery progress** while it runs (and an alarm if the pump reports a failure).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Un client nu decide niciodată singur cantitatea administrată. The master recomputes and caps it, you confirm the master-authored amount, and only then is it delivered.
```

(clientmastercontrol-when-the-master-is-offline)=
### When the master is offline

If the master is not reachable (its phone is off/asleep, not connected to Nightscout, or websockets are down), control actions on the client are **blocked before anything is sent**, and you get a clear message. Nimic nu este aplicat pe jumătate.

![Client message when the master is offline](../images/v4/ClientMaster/master_offline_error.png)

The client re-checks reachability automatically and re-enables control once the master is back online.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (ceas) pe un client

A watch paired to a **client** phone relays its actions through the client to the master (watch → client → master). Ceasul afișează rândurile de confirmare ale **dispozitivului principal** și rezultatul real, la fel ca telefonul. Setting up the watch is unchanged — see [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Changing configuration and preferences

Pairing does more than relay one-off actions — it also keeps the **configuration** and many **preferences** aligned between the master and its clients.

### Configuration (which plugins are active)

The active **plugins** (APS algorithm, sensitivity, smoothing, …) are chosen on the **master** and **mirrored** to every paired client. On a client these selections are marked with a small **mobile icon** in the [Configuration](#configuration_sync_icon) screen — change them on the master and the clients follow automatically and vice versa.

On a client, the mobile icon appears on *Smoothing*, *Calibration*, *Sensitivity detection* and *APS* (synced from the master), but not on *Communication*:

![Configuration list on a client — the mobile icon marks the categories synced with the master](../images/v4/ClientMaster/configuration_client.png)

Connection details that are unique to each device — most importantly the **NSClient Nightscout URL / access token** — are *not* synced. Each phone has its own; on a client they come from the master's QR code, or you set them yourself.

### Profiluri

Your **profile list** is also kept in sync between the master and its paired clients. On a paired client, **Manage → Profile** shows the same profiles as the master; you can **edit** a profile or **activate** one, and — like every other command — the change is sent to the **master**, applied there, and synced back.

The first time you activate a profile on a newly installed client, the client may show "*No insulin is in use yet*" and ask you to **select the insulin**. Choose the insulin that is active on the master (**Manage → Insulin settings** on the master shows it).

On a client that is **not paired**, the Profile screen is still available but **view-only**: the client shows the profiles it receives through Nightscout (it needs them for its own calculations), but there is no edit or activate button — there is no master to send the change to.

### Preferințe

A subset of **preferences** is **bidirectional**: you can change them on the **master or on a paired client**, and the change is synchronized to the other side. When you change such a preference on a client, it is sent to the master over the signed channel, applied there, and the authoritative value is sent back — so what you see on the client is always what the master stored. If the same preference is changed on two devices at almost the same time, the **most recent edit wins**. For a setting with a slider, the new value is sent when you lift your finger.

Inside the settings, the same small **mobile icon** marks the individual preferences that are synced. In the example below *Absorption cutoff* is synced (mobile icon), while settings without the icon are device-local:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Because the master is the authority for the stored value, editing a master-controlled configuration item or a bidirectional preference from a client requires the master to be **reachable**. When the master is offline those controls are disabled on the client (see [When the master is offline](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Note de securitate

```{admonition} How the channel is protected
:class: tip
- **Pairing secret**: the master hands it to the client once — protected by the PIN in a Nightscout document, or inside the QR code — and both store it encrypted.
- **A new secret right after pairing**: the client's first message after pairing starts a key exchange, and from then on both phones use a secret that never travelled. A secret that someone may have seen (a photographed QR code, a PIN offer read from Nightscout) is of no use afterwards. Telefoanele asociate înainte să existe această funcție fac același lucru o dată, după actualizare.
- **Fiecare comandă este semnată** (HMAC). The master rejects anything whose signature does not match a paired client.
- **Replay is prevented** by a per-client monotonic counter, and every command **expires** after a short time-to-live.
- **Drepturi minime în Nightscout**: fiecare client are [propriul cod de acces Nightscout](#client-master-control-own-token), care poate doar să citească și să scrie în canalul de control al clientului. Once it has used it, the master takes its commands only with that token. Removing the client deletes it.
- **Doar modificări semnate**: în [modul securizat](#client-master-control-hardened-mode), dispozitivul principal ignoră modificările de terapie introduse direct în Nightscout.
- **The master signs what it shares**: the settings, the client list and the "master is alive" sign that the master puts in Nightscout for its clients carry the master's signature. A client takes them only when the signature is the master's, so another client's token cannot change them. The client learns the master's key when it pairs, or from the QR code for a phone that only reads Nightscout. Un document refuzat apare în jurnalul NSClient ca „*✕ SETTINGS … refused*”.
- **You stay in control**: give each client the [role](#client-master-control-roles) it needs, revoke a client with one tap, or disable everything with **Allow client control**.
```

```{admonition} After restoring a backup
:class: warning
If a client is restored from a backup that rolls its command counter backwards, the master will reject its next commands as replays. Simply **unpair and pair again** to recover.
```

---

(client-master-control-troubleshooting)=

## Depanare

| Simptom                                                                                                    | Ce trebuie verificat                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client says the **master is offline**                                                                      | Master phone awake and running **AAPS**; both phones connected in **NSClientV3**; **websockets** enabled on both; same Nightscout site.                                                                                                                                                                                      |
| Clientul spune că **nu este asociat**                                                                      | Asociați din nou din **Gestionați → Asociați cu dispozitivul principal**. Verificați că clientul este **Activ** în lista **Clienți autorizați** a dispozitivului principal.                                                                                                                                                  |
| Comandă **respinsă** de dispozitivul principal                                                             | The master re-validates against its current state — e.g. the chosen profile no longer exists, or the pump type does not match. Verificați din nou pe dispozitivul principal.                                                                                                                                                 |
| Comenzile funcționează, dar sunt **lente**                                                                 | Enable **websockets** on both phones (otherwise the apps fall back to slower polling).                                                                                                                                                                                                                                       |
| Asocierea este anulată cu *„Secretul de asociere nu a putut fi salvat”*                                    | Nu s-a schimbat nimic. Start the pairing again; if it keeps failing, restart **AAPSClient** and try once more.                                                                                                                                                                                                               |
| Nu se întâmplă nimic după asociere                                                                         | Verificați că **Permiteți controlul clientului** este ACTIVAT pe dispozitivul principal și că dispozitivul principal este conectat la Nightscout.                                                                                                                                                                            |
| Opțiunile cu cod QR nu pot fi alese în dialogul **Client nou**                                             | The dialog says why. *Not an admin token*: give the master an admin token of your Nightscout, or add the client with the **PIN**. *Not connected*: wait until the master shows *connected* in **NSClientV3**.                                                                                                                |
| *„Nightscout are deja un cod de acces cu acest nume și cu alte drepturi”*                                  | One of your own Nightscout tokens is called `aaps-` and this name. Alegeți alt nume pentru client.                                                                                                                                                                                                                           |
| *„Un client cu acest nume este deja în listă”*                                                             | Alegeți alt nume sau eliminați mai întâi acel client.                                                                                                                                                                                                                                                                        |
| Clientul spune *„Acest cod este de la o altă versiune AAPS”*                                               | Dispozitivul principal și clientul trebuie să ruleze **aceeași** versiune de **AAPS**. Update the older one.                                                                                                                                                                                                                 |
| Clientul spune *„Acest cod a expirat”*                                                                     | A code that pairs works for about two minutes. Adăugați din nou clientul pe dispozitivul principal pentru a obține un cod nou.                                                                                                                                                                                               |
| Clientul spune *„Acest telefon este deja asociat”*                                                         | Unpair it first (**Manage → Pair with master → Unpair**), then scan again. Un cod **doar Nightscout** funcționează și pe un telefon asociat.                                                                                                                                                                                 |
| The client says *"The master refused it: this phone writes to Nightscout with another token than its own"* | The client used its own Nightscout token before and now writes with another one, for example after a token was typed into its Nightscout settings. Eliminați clientul de pe dispozitivul principal și adăugați-l din nou (vedeți [Codul de acces Nightscout propriu al clientului](#client-master-control-own-token)).       |
| The NSClient log on the client shows *"✕ SETTINGS … refused"* and its settings no longer follow the master | Somebody else wrote the master's settings document, or the master has a new key (for example after its data was cleared). A paired client takes a new key by itself the next time it connects to Nightscout. A phone that only reads Nightscout needs the master's QR code again (**Read Nightscout only → show the code**). |
| The client's card shows *"Uses the Nightscout token …"* in red                                             | The client still writes with a token that has more rights than it needs. The master sends it its own token after pairing, but only if the master has an admin token. Verificați codul de acces al dispozitivului principal sau configurați din nou clientul cu un cod QR.                                                    |
| Un client nu mai poate citi Nightscout                                                                     | Its token was deleted, for example because the client was removed on the master. Adăugați-l din nou.                                                                                                                                                                                                                         |
| Tratamentele introduse pe site-ul Nightscout nu sunt aplicate                                              | Este normal în [modul securizat](#client-master-control-hardened-mode): introduceți-le în schimb pe un client asociat.                                                                                                                                                                                                       |

Pentru probleme cu Nightscout / sincronizarea, vedeți mai întâi [Depanare NSClient](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
