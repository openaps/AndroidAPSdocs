(client-master-control)=
# Master ↔ Client-Steuerung (signierte Fernsteuerung)

Ab **AAPS** Version 4 kann ein Follower-Smartphone mit **AAPSClient** viel mehr, als Behandlungen nur über Nightscout *anzukündigen*: Sobald es mit dem Haupt-Smartphone **gekoppelt** ist, kann es **signierte Befehle** senden, die das Haupt-Smartphone (der **Master**) prüft, bestätigt und ausführt. Dazu gehört auch die Abgabe eines **Insulinbolus** über die Pumpe des Masters.

Diese Seite erklärt, wie das funktioniert und wie Du es einrichtest und nutzt.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Master** = das Haupt-Smartphone mit **AAPS**, das mit der Pumpe verbunden ist und den Loop ausführt (die „ganze“` App).
- **Client** = ein Smartphone mit **AAPSClient** ohne Pumpe, das dem Master folgt und ihn jetzt auch *steuert*.
- Beide Smartphones müssen mit **derselben Nightscout**-Seite verbunden sein. Die gesamte Kommunikation läuft weiterhin über Nightscout. Eine direkte Verbindung zwischen den Smartphones ist nicht nötig.
```

---

## So funktioniert es

```{admonition} Coming from AAPS v3?
:class: note
In **AAPS** v3 konnte **AAPSClient** nur unsignierte Careportal-Behandlungen in Nightscout schreiben und keinen Bolus abgeben. Für die Fernsteuerung ist jetzt eine einmalige [Kopplung](#client_master_master_setup) nötig. Siehe auch [Änderungen mit AAPS Version 4](#v4changes-remote-control).
```

**AAPS** v4 verwendet dafür einen eigenen Kanal **Client-Control**. Er läuft weiterhin über Deine Nightscout-Seite (in der Collection `settings`), aber jede Nachricht ist mit einem Secret **kryptografisch signiert**, das nur die beiden Smartphones kennen. Das Secret wird einmal bei der **Kopplung** übergeben und gleich danach durch ein neues ersetzt. So wird es nie im Klartext übertragen.

Der Grundsatz lautet: **Der Master hat das Sagen**:

1. Der Client sendet eine *Absicht* („Bolus 2 IE“, „Szene Sport starten“, „dieses temporäre Ziel setzen“ …).
2. Der **Master** berechnet die Aktion neu und **begrenzt** sie anhand seiner **eigenen** aktuellen Daten (Profil, IOB, COB, aktuelles temporäres Ziel, Pumpe). Er **formuliert die genaue Bestätigung**, die der Nutzer sieht.
3. Der Client (oder die Smartwatch) zeigt den Bestätigungstext des **Masters** an und erstellt nie einen eigenen.
4. Nach der Bestätigung **führt der Master die Aktion einmal aus** und meldet das Ergebnis an den Client zurück.

Was das für Dich bedeutet:

- **Signierte Befehle**: Nur Clients, die Du gekoppelt hast, können Befehle senden (eigenes Kopplungs-Secret und eigene Signatur je Client). Alte oder wiederholt gesendete Befehle werden abgelehnt.
- **Eine Rolle für jeden Client**: Du legst fest, was jeder Client darf, von *Schreibgeschützt* bis *Administrator*. Siehe [Client-Rollen](#client-master-control-roles).
- **Insulinbolus vom Client**: Der Master gibt ihn über seine Pumpe ab, und der Client zeigt den Fortschritt der Abgabe an.
- **Der Master entscheidet**: Er begrenzt jede Aktion anhand seiner eigenen Grenzwerte und formuliert die Bestätigung, die der Client anzeigt.
- **Nur gekoppelte Clients ändern die Therapie**: Solange die Client-Steuerung eingeschaltet ist, übernimmt der Master keine Behandlungen oder Änderungen mehr, die direkt in Nightscout eingegeben werden. Siehe [Geschützter Modus](#client-master-control-hardened-mode).
- **Jeder Client bekommt ein eigenes Nightscout-Token** mit genau den Rechten, die ein Client braucht. Siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token).
- **Master offline**: Aktionen werden mit einer klaren Meldung blockiert.
- **Einen Client sperren** geht mit einem Tippen (je Client). Alternativ stoppst Du mit dem Schalter am Master alle Clients.

Diese Aktionen kann ein Client auslösen: **Bolus**, **Kohlenhydrate / eCarbs**, **temporäres Ziel** (setzen und abbrechen), **Profilwechsel**, Wechsel von **Loop / AAPS-Modus**, **temporäre Basalrate** (setzen und abbrechen), **verzögerter Bolus** (setzen und abbrechen), **Insulinauswahl** und **[Szenen](../DailyLifeWithAaps/Scenes.md)**. Außerdem wird ein Teil der **Einstellungen** in beide Richtungen zwischen Master und Clients abgeglichen.

---

## Rollen und Voraussetzungen

```{admonition} Before you start
:class: important
- Auf dem **Master** läuft die normale `full`-Version von **AAPS**, und er ist mit Deiner Pumpe verbunden.
- Der **Master** nutzt **NSClientV3** mit Deinem Nightscout und zeigt *verbunden* an. Gib ihm ein **Admin-Token** Deines Nightscout: Damit kann der Master für jeden Client ein eigenes Token erstellen und es dem Client als QR-Code zeigen.
- Auf dem **Client** läuft **[AAPSClient](AapsClient.md)** (oder **AAPSClient2** / **AAPSClient3** für weitere Patienten, siehe [Über AAPSClient, AAPSClient2 und AAPSClient3](#remotecontrol-aapsclient-versions)). Er muss **dasselbe** Nightscout verwenden. Wenn Du ihn mit dem QR-Code des Masters einrichtest, bekommt der Client Nightscout-Adresse und Token vom Master. Andernfalls richte zuerst selbst **NSClientV3** auf ihm ein.
- Auf beiden Smartphones werden **Websockets** gebraucht: Befehle erreichen den Master nur über die Websocket-Verbindung. Solange die Client-Steuerung eingeschaltet ist, lässt **AAPS** die Websockets auf dem Master und auf gekoppelten Clients eingeschaltet.
```

Kopplung und Synchronisation sind zwei verschiedene Dinge:

- Die **Synchronisation** (Daten: BZ, Behandlungen, Profil) richtest Du wie bisher ein, siehe [Synchronisation](#RemoteControl_aapsclient). Das kann der QR-Code des Masters auf dem Client für Dich erledigen.
- Die **Kopplung** (Steuerung: der hier beschriebene signierte Befehlskanal) ist der neue Schritt weiter unten.

---

## Einrichtung

(client_master_master_setup)=
### 1. Auf dem Master: Steuerung einschalten und Client hinzufügen

Öffne auf dem Master das Fenster **Bearbeiten** und wähle **Autorisierte Clients**.

Schalte **Client-Steuerung erlauben** ein (standardmäßig ist das **aus**). Das ist der Hauptschalter des Masters: Ist er aus, kann kein Client Befehle senden. Deine gekoppelten Clients bleiben aber erhalten, sodass Du ihn später wieder einschalten kannst. Beim Einschalten wird auch der [Geschützte Modus](#client-master-control-hardened-mode) aktiviert. Er wird als „*Geschützter Modus aktiviert*“ angezeigt, mit einem **(i)**, das ihn erklärt. Im [Einfachen Modus](#preferences-simple-mode) ist die Client-Steuerung immer eingeschaltet, deshalb wird der Schalter dort nicht angezeigt.

![Authorized clients screen on the master](../images/v4/ClientMaster/authorized_clients_master.png)

Tippe auf den Knopf **+** (unten rechts), um einen Client hinzuzufügen. Im Dialog **Neuer Client**:

1. Gib einen **Gerätenamen** ein, damit Du den Client in der Liste wiedererkennst.
2. Wähle, **wie das Smartphone eingerichtet wird** (siehe Tabelle unten).
3. Wähle seine **[Rolle](#client-master-control-roles)**. Es ist nichts vorausgewählt: Welche Rolle passt, hängt davon ab, wer das Smartphone benutzt.

![New client dialog on the master: device name, how the phone is set up, and its role](../images/v4/ClientMaster/new_client_master.png)

| Weg                                  | Was das neue Smartphone bekommt                                                              | Verwenden, wenn                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **QR-Code: Nightscout und Kopplung** | die Nightscout-Adresse, sein eigenes Nightscout-Token und die Kopplung, alles mit einem Scan | das neue Smartphone eine Kamera hat: der schnellste Weg, nichts muss eingetippt werden                                      |
| **QR-Code: nur Nightscout**          | die Nightscout-Adresse und sein eigenes Nightscout-Token, keine Kopplung                     | das Smartphone Daten nur **anzeigen** und nie Befehle senden soll                                                           |
| **PIN**                              | nur die Kopplung; die vorhandenen Nightscout-Einstellungen bleiben                           | das Smartphone keine Kamera hat (oder der Master keine Token erstellen kann); es muss bereits mit Nightscout verbunden sein |

Für die beiden QR-Code-Wege braucht der Master ein **Admin-Token** in seinen **NSClientV3**-Einstellungen, weil er das Token des Clients in Nightscout erstellt. Ohne Admin-Token werden die QR-Code-Optionen zwar angezeigt, lassen sich aber nicht auswählen, und der Dialog nennt den Grund. Die **PIN** funktioniert immer.

#### Mit einem QR-Code

Tippe auf **OK**: Der Master erstellt das Nightscout-Token des Clients und zeigt einen **QR-Code** an. Ein Code, der auch koppelt, gilt etwa **zwei Minuten**. Der Bildschirm zählt herunter und schließt sich von selbst, sobald der Client gekoppelt ist. Scanne ihn auf dem neuen Smartphone, wie unter [Auf dem Client](#client_master_client_setup) beschrieben.

```{admonition} The QR code is a secret
:class: warning
Wer den QR-Code sieht, kann Dein Nightscout lesen. Ein Code, der koppelt, enthält außerdem die Kopplung. Zeige ihn nur dem neuen Smartphone. **AAPS** blocks screenshots while the code is on screen.
```

![The master's QR code screen with its countdown (code blurred)](../images/v4/ClientMaster/qr_code_master.png)

#### Mit einer PIN

Tap **OK**: the master displays an 8-digit **pairing PIN**, shown in two groups of four (for example `1234 5678`). This PIN is **one-time** and **expires after about two minutes**.

![Master pairing screen showing the one-time PIN (the PIN shown here is expired)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
The PIN protects the pairing secret that is exchanged through Nightscout. Share it only with the device you are pairing, do not post it publicly, and let it expire if you do not use it. A fresh PIN can always be generated by tapping **+** again.
```

(client_master_client_setup)=
### 2. On the client — pair with the master

#### Scanning the QR code

You can scan the master's QR code in two places:

- in the client's **Setup Wizard**, on the step "**Set up from the master**", which comes before the Nightscout step. One scan then sets up Nightscout and, with a code that pairs, also the pairing, so the setup is finished: the wizard closes and the home screen opens;
- at any time later from **Manage → Pair with master → Scan QR code**.

The first time, **AAPSClient** asks for the **camera** permission. If you refuse it, the screen says that the camera is needed, and you can allow it with **Try again** or pair with the PIN instead.

Point the camera at the code. The client shows what the code does — the Nightscout address and, for a code that pairs, the master it pairs with — and asks "**Use this code?**". Tap **Use**: the client turns on **NSClientV3**, replaces its Nightscout address and token with the ones from the code and turns on websockets. A code that pairs also pairs the phone; it says hello to the master as soon as it has connected to Nightscout.

![The client's Set up from the master wizard step](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
The scanner is not available on iOS yet, and a desktop has no camera: use the PIN there.
```

#### Entering the PIN

On the client, open **Manage → Pair with master** (or the wizard step **Pair with master**, after the Nightscout step), **enter the 8-digit PIN** shown on the master and tap **Pair**. The client uses the PIN to securely retrieve the pairing offer through Nightscout, then asks "**Pair with this master?**" and shows the master's identifier. Tap **Pair** to confirm (see [Pairing with the master](#aapsclient-pairing-with-the-master) for a screenshot).

![Pair-with-master screen on the client before pairing — enter the PIN here](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### After pairing

Once a client is paired it sends a **Hello** to the master and appears in the master's **Authorized clients** list as **Active**, with a *“last seen”* time. The client knows its [role](#client-master-control-roles) from the pairing, so it shows the right buttons at once. A pairing made in the Setup Wizard finishes the wizard. In the same step the two phones replace the pairing secret with a new one that never travelled (see [Security notes](#client-master-control-security)), and a client that was set up with the PIN gets its own Nightscout token (see [The client's own Nightscout token](#client-master-control-own-token)). A client can be paired with **one** master at a time; to pair with a different master, **Unpair** first.

![Pair-with-master screen on the client (already-paired state)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Managing clients

From the master's **Authorized clients** screen you can, at any time:

- **Change the role** of a client with the row of four buttons under its name. The new role takes effect at once, without pairing again.
- **See which Nightscout token** a client writes with: "*Own Nightscout token*" is what you want. A red line "*Uses the Nightscout token …, which has more rights than a client needs*" means the client still uses a token with more rights, usually your admin token — see [The client's own Nightscout token](#client-master-control-own-token).
- **Revoke** a single client — tap the **trash** icon next to it. The client can no longer send commands until it is paired again. Its own Nightscout token is deleted too, so it can no longer read your Nightscout either.
- **Stop all control** without losing the pairings — turn off **Allow client control**.

Phones set up with **QR code: Nightscout only** are listed below the clients, under "**Read Nightscout only**". For each of them you can show the QR code again (to set up the same phone again) or delete its token, which ends its access to your Nightscout.

![Authorized clients with a paired client (role buttons, own Nightscout token) and a phone under Read Nightscout only](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Client roles

Each paired client has a **role**. The master checks it for every command, and the client shows only what its role allows. A new role takes effect at once, without pairing again. The roles build on each other: each one can do everything the one before it can.

| Role          | The client may                                                                                                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Read-only** | only show data. It stays paired, so it is ready when you give it a higher role.                                                                                                                                               |
| **Meals**     | give a bolus, use the bolus wizard and QuickWizard, enter carbs, and stop a running bolus. Carbs entered here can make the loop give more insulin.                                                                            |
| **Caregiver** | do everything a user does in **AAPS**: temp targets, profile and insulin switches, loop mode, temp basal, extended bolus, scenes, careportal events, calibrations and removing records. It cannot change settings or presets. |
| **Admin**     | do everything, settings and presets included (QuickWizard, temp target presets, scenes, profiles, automation, insulin).                                                                                                       |

The **(i)** at the top of the **Authorized clients** screen shows the same explanation. On the client, **Manage → Pair with master** shows the phone's own role.

---

(client-master-control-hardened-mode)=
## Hardened mode

When **Allow client control** is on, the master is in **hardened mode**: it takes changes only from paired clients. It does **not** take treatments, temp targets, profile changes, running mode changes or deletes that are made directly in Nightscout, for example on the Nightscout website or in other apps.

- The settings for accepting data from Nightscout (**NSClientV3 → Synchronization**) are hidden while hardened mode is on; **AAPS** uses them as if they were off.
- The master still **uploads** all its data to Nightscout, BG included, and keeps **websockets** on.
- If the master gets its **BG from Nightscout**, it still takes BG from there.
- To load the history on a **new** master, use **Full sync** in **NSClientV3**: it takes everything that is in Nightscout, profiles included.
- [SMS commands](SMSCommands.md) are not affected.

A paired client follows the master's hardened mode: it keeps websockets on, and the same Nightscout settings are hidden on it. An unpaired client keeps its own settings.

[Simple Mode](#preferences-simple-mode) always turns hardened mode on. To turn it off, leave Simple Mode and turn off **Allow client control** on the master.

```{admonition} Why hardened mode
:class: note
Everything a paired client sends is signed, checked and confirmed by the master. A treatment typed into the Nightscout website is not: anybody with write access to your Nightscout could add it. In hardened mode only signed commands can change what the master does.
```

---

(client-master-control-own-token)=
## The client's own Nightscout token

A client does not need an admin token. It only reads your Nightscout and sends its commands to the master through it; it uploads nothing itself. So the master gives each client a Nightscout token of its own, with just these rights:

- read everything,
- write to the `settings` collection, the channel to the master,
- snooze Nightscout alarms.

The token belongs to a Nightscout role named **`aaps-client`**, which the master creates the first time it needs it. You can see the role and the tokens (named `aaps-` and the client's name) in the **Admin tools** of your Nightscout site. If the role is changed there, the master sets it back the next time it makes a token or you open **Authorized clients**.

How a client gets its token:

- **Set up with a QR code**: the token is in the code.
- **Paired with the PIN** (or paired before this existed): after pairing, the master sends the client its own token through the paired channel, encrypted. The client first checks that a login with it works, then uses it instead of the token it had. This needs an admin token on the master; without one, the client keeps its token, and its card on the master shows the red line.

**A client keeps its own token.** Once the master has seen a client write with its own token, it takes that client's commands only with that token. A command written with another token (for example an admin token typed into the client later, or another client's token) is refused, even though the client is paired, and the client says "*The master refused it: this phone writes to Nightscout with another token than its own*". Its card on the master says so in red. The client still shows as online, so you can see what is wrong. To fix it, remove the client on the master and add it again.

The master never deletes or changes a Nightscout token it did not make (one with other roles than `aaps-client`): those are yours. It deletes a client's own token when you remove the client.

---

## Using remote control

### Triggering an action from the client

Use the client exactly as you would the phone itself: open **Carbs**, **Insulin**, **Temp Target**, **Profile**, **Scenes**, the **Manage** sheet, etc., and fill in the values.

When you confirm, the client briefly shows **“Contacting master…”**, the **master** computes and caps the action, and the client then displays the **master's own confirmation** — the exact lines, values and colors the master would show on its own screen. Review them and tap **OK** to go ahead.

![A scene confirmation authored by the master and shown on the client](../images/v4/ClientMaster/confirmation_master_authored.png)

The same applies to a simple carbs entry — the amount shown for confirmation is the one the master computed:

![Carbs confirmation authored by the master](../images/v4/ClientMaster/carbs_confirmation_client.png)

After you confirm, the master executes the action once and the result is reflected back on the client.

### Insulin bolus from a client

This is the main new capability in v4. A bolus started on a client is **delivered by the master on its pump**; the master caps it against its own constraints, and the client shows **live delivery progress** while it runs (and an alarm if the pump reports a failure).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
A client never decides the delivered amount on its own. The master recomputes and caps it, you confirm the master-authored amount, and only then is it delivered.
```

(clientmastercontrol-when-the-master-is-offline)=
### When the master is offline

If the master is not reachable (its phone is off/asleep, not connected to Nightscout, or websockets are down), control actions on the client are **blocked before anything is sent**, and you get a clear message. Nothing is half-applied.

![Client message when the master is offline](../images/v4/ClientMaster/master_offline_error.png)

The client re-checks reachability automatically and re-enables control once the master is back online.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (watch) on a client

A watch paired to a **client** phone relays its actions through the client to the master (watch → client → master). The watch shows the **master's** confirmation lines and the real result, just like the phone. Setting up the watch is unchanged — see [Wear OS](../WearOS/WearOsSmartwatch.md).


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

### Profiles

Your **profile list** is also kept in sync between the master and its paired clients. On a paired client, **Manage → Profile** shows the same profiles as the master; you can **edit** a profile or **activate** one, and — like every other command — the change is sent to the **master**, applied there, and synced back.

The first time you activate a profile on a newly installed client, the client may show "*No insulin is in use yet*" and ask you to **select the insulin**. Choose the insulin that is active on the master (**Manage → Insulin settings** on the master shows it).

On a client that is **not paired**, the Profile screen is still available but **view-only**: the client shows the profiles it receives through Nightscout (it needs them for its own calculations), but there is no edit or activate button — there is no master to send the change to.

### Einstellungen

A subset of **preferences** is **bidirectional**: you can change them on the **master or on a paired client**, and the change is synchronized to the other side. When you change such a preference on a client, it is sent to the master over the signed channel, applied there, and the authoritative value is sent back — so what you see on the client is always what the master stored. If the same preference is changed on two devices at almost the same time, the **most recent edit wins**. For a setting with a slider, the new value is sent when you lift your finger.

Inside the settings, the same small **mobile icon** marks the individual preferences that are synced. In the example below *Absorption cutoff* is synced (mobile icon), while settings without the icon are device-local:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Because the master is the authority for the stored value, editing a master-controlled configuration item or a bidirectional preference from a client requires the master to be **reachable**. When the master is offline those controls are disabled on the client (see [When the master is offline](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Security notes

```{admonition} How the channel is protected
:class: tip
- **Pairing secret**: the master hands it to the client once — protected by the PIN in a Nightscout document, or inside the QR code — and both store it encrypted.
- **A new secret right after pairing**: the client's first message after pairing starts a key exchange, and from then on both phones use a secret that never travelled. A secret that someone may have seen (a photographed QR code, a PIN offer read from Nightscout) is of no use afterwards. Phones paired before this existed do the same once after the update.
- **Every command is signed** (HMAC). The master rejects anything whose signature does not match a paired client.
- **Replay is prevented** by a per-client monotonic counter, and every command **expires** after a short time-to-live.
- **Least rights in Nightscout**: each client has its [own Nightscout token](#client-master-control-own-token), which can only read and write to the client-control channel. Once it has used it, the master takes its commands only with that token. Removing the client deletes it.
- **Only signed changes**: in [hardened mode](#client-master-control-hardened-mode) the master ignores therapy changes typed directly into Nightscout.
- **The master signs what it shares**: the settings, the client list and the "master is alive" sign that the master puts in Nightscout for its clients carry the master's signature. A client takes them only when the signature is the master's, so another client's token cannot change them. The client learns the master's key when it pairs, or from the QR code for a phone that only reads Nightscout. A refused document shows in the NSClient log as "*✕ SETTINGS … refused*".
- **You stay in control**: give each client the [role](#client-master-control-roles) it needs, revoke a client with one tap, or disable everything with **Allow client control**.
```

```{admonition} After restoring a backup
:class: warning
If a client is restored from a backup that rolls its command counter backwards, the master will reject its next commands as replays. Simply **unpair and pair again** to recover.
```

---

(client-master-control-troubleshooting)=

## Problembehandlung

| Symptom                                                                                                    | What to check                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client says the **master is offline**                                                                      | Master phone awake and running **AAPS**; both phones connected in **NSClientV3**; **websockets** enabled on both; same Nightscout site.                                                                                                                                                                                      |
| Client says it is **not paired**                                                                           | Pair again from **Manage → Pair with master**. Confirm the client is **Active** in the master's **Authorized clients** list.                                                                                                                                                                                                 |
| Command **rejected** by the master                                                                         | The master re-validates against its current state — e.g. the chosen profile no longer exists, or the pump type does not match. Re-check on the master.                                                                                                                                                                       |
| Commands work but are **slow**                                                                             | Enable **websockets** on both phones (otherwise the apps fall back to slower polling).                                                                                                                                                                                                                                       |
| Pairing is cancelled with *"The pairing secret could not be stored"*                                       | Nothing was changed. Start the pairing again; if it keeps failing, restart **AAPSClient** and try once more.                                                                                                                                                                                                                 |
| Nothing happens after pairing                                                                              | Make sure **Allow client control** is ON on the master, and that the master is connected to Nightscout.                                                                                                                                                                                                                      |
| The QR code options cannot be chosen in the **New client** dialog                                          | The dialog says why. *Not an admin token*: give the master an admin token of your Nightscout, or add the client with the **PIN**. *Not connected*: wait until the master shows *connected* in **NSClientV3**.                                                                                                                |
| *"Nightscout has a token with this name and other rights"*                                                 | One of your own Nightscout tokens is called `aaps-` and this name. Choose another name for the client.                                                                                                                                                                                                                       |
| *"A client with this name is in the list already"*                                                         | Choose another name, or remove that client first.                                                                                                                                                                                                                                                                            |
| The client says *"This code is from another AAPS version"*                                                 | Master and client must run the **same** version of **AAPS**. Update the older one.                                                                                                                                                                                                                                           |
| The client says *"This code has expired"*                                                                  | A code that pairs works for about two minutes. Add the client again on the master to get a new code.                                                                                                                                                                                                                         |
| The client says *"This phone is paired already"*                                                           | Unpair it first (**Manage → Pair with master → Unpair**), then scan again. A **Nightscout only** code works on a paired phone too.                                                                                                                                                                                           |
| The client says *"The master refused it: this phone writes to Nightscout with another token than its own"* | The client used its own Nightscout token before and now writes with another one, for example after a token was typed into its Nightscout settings. Remove the client on the master and add it again (see [The client's own Nightscout token](#client-master-control-own-token)).                                             |
| The NSClient log on the client shows *"✕ SETTINGS … refused"* and its settings no longer follow the master | Somebody else wrote the master's settings document, or the master has a new key (for example after its data was cleared). A paired client takes a new key by itself the next time it connects to Nightscout. A phone that only reads Nightscout needs the master's QR code again (**Read Nightscout only → show the code**). |
| The client's card shows *"Uses the Nightscout token …"* in red                                             | The client still writes with a token that has more rights than it needs. The master sends it its own token after pairing, but only if the master has an admin token. Check the master's token, or set the client up again with a QR code.                                                                                    |
| A client can no longer read Nightscout                                                                     | Its token was deleted, for example because the client was removed on the master. Add it again.                                                                                                                                                                                                                               |
| Treatments entered on the Nightscout website are not applied                                               | Expected in [hardened mode](#client-master-control-hardened-mode): enter them on a paired client instead.                                                                                                                                                                                                                    |

For Nightscout / synchronization problems first see [Troubleshooting NSClient](../GettingHelp/TroubleshootingNsClient.md).

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
