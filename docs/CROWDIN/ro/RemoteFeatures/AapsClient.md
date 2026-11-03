(aapsclient-app)=
# Aplicația AAPSClient

**AAPSClient** is the accessory app of **AAPS**: a companion app for a second phone — typically a caregiver's — that **follows** the person using **AAPS**. From **AAPS** version 4, the caregiver can also **control** the loop remotely through signed commands. Ambele telefoane comunică prin site-ul dumneavoastră **Nightscout**; nu este nevoie de o conexiune directă între telefoane.

```{admonition} Wording used on this page
:class: note
- **Client** = un telefon pe care rulează **AAPSClient**.
- **Master** = the main **AAPS** phone that owns the pump and runs the loop.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## What AAPSClient is (and is not)

**AAPSClient** arată și se folosește ca **AAPS**, dar **nu are o buclă proprie**:

- It contains **no APS algorithm**, no **Objectives**, and **no pump drivers** — it never doses on its own.
- The plugins used only by the main app (**SMS Communicator**, **Tidepool**, **Open Humans**) are not included either.
- What it *does* contain: **NSClientV3** synchronization, the BG-source plugins, **xDrip+** broadcasting, and the **Wear OS** / **Garmin** connectors — everything needed to follow and to relay commands. A **Garmin** watch connected to a client can show the data, but carbs it sends are not entered and it cannot connect or disconnect the pump: the client shows a message, and you enter them in **AAPS** instead.

Everything you trigger from **AAPSClient** is checked, capped, confirmed and **executed by the master** (the phone with the pump). The dedicated [Master ↔ Client control](ClientMasterControl.md) page explains how this works: how to pair the two phones, how the master writes the confirmation text you see, how a bolus started on the client is delivered, and what happens when the master is offline.

## Versiuni: AAPSClient, AAPSClient2 și AAPSClient3

Up to three client apps can be installed side by side on the same follower phone, each following a **different** person: **AAPSClient** (yellow owl icon), **AAPSClient2** (blue owl) and — new in **AAPS** version 4 — **AAPSClient3** (green owl). They are functionally identical. Diferă doar numele și culoarea (pictograma aplicației, fundalul widgetului și secțiunea de stare de pe ecranul principal), ca să le puteți deosebi. Fiecare aplicație este asociată cu propriul dispozitiv principal. See [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions) for details.

(aapsclient-platforms)=
## Obținerea aplicației

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| Dispozitiv              | File to download                    | Note                                                                                                                                                                                         |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | niciunul                            | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

**Following two people?** Each file above also exists as *aapsclient2* / *AAPSClient2*. It is a second client app that installs next to the first one, so one device can follow two people (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** is not in the release assets: build it yourself ([build variants](#browserbuild-variant)).

**Files to ignore:** the *pumpcontrol* files (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) are not a client. Leave them out.

**Mac: the first start.** The app is not notarized by Apple, so macOS blocks it the first time you open it. Click *Done*, then open *System Settings → Privacy & Security*, scroll down and click *Open Anyway*.

**Computer: how to connect.** A computer has no camera, so the QR code cannot be scanned. Set up **Nightscout** in the client, then on the master add the client with a **PIN** and type the 8-digit PIN in the client (**Pair with master**). See [Pairing with the master](#aapsclient-pairing-with-the-master).

**Same version everywhere.** The master and all its clients must run the same **AAPS** version. When you update the master, update the clients too.

(aapsclient-iphone)=
### AAPSClient on an iPhone

There is no **AAPSClient** in the App Store and no ready-made file to download, so you build the app yourself:

- You need a Mac with **Xcode** and an Apple developer account.
- The project is the `ios` folder of the [AndroidAPS repository on GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- A build for a real iPhone is signed with your own Apple developer team. A build for the iPhone simulator does not need one.
- There is no step-by-step guide yet. This page will be updated when there is one.

The iPhone version pairs with the master like the others. Unlike the computer versions, the iPhone can scan the master's QR code with its camera.

## Prima pornire: un Asistent de configurare mai scurt

On first start **AAPSClient** runs the same **Setup Wizard** you know from **AAPS**, but with far fewer steps — there is no profile, insulin, pump, APS or objectives configuration on a follower:

1. **Welcome**, **license agreement**, **permissions** and **master password** — identical to the main app, see the [AAPS Setup Wizard](../SettingUpAaps/SetupWizard.md).
2. The client does **not** ask for **units** or the **low/high marks**: it takes them from the main phone as soon as it is connected to Nightscout. You can see them later in **Settings**, where a small **phone icon** shows that they are [synchronized with the main phone](#client-master-config-prefs). They can only be edited while the master is reachable.
3. **Set up from the master** — on the master, open **Manage → Authorized clients**, add this phone with a **QR code** and tap **Scan the QR code** here. One scan sets up Nightscout with a token of this phone's own and, with a code that pairs, also pairs the phone. The phone also takes the name it was added with on the master as its instance name (letters with accents become plain letters, "Miloš" becomes "Milos"). **După scanare, configurarea este terminată**: asistentul se închide, deoarece pașii următori ar arăta doar ce a făcut codul. Without a QR code, skip this step. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![Pasul Configurare de pe dispozitivul principal, cu butonul Scanați codul QR](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Communication** — the plugin list only offers what a follower needs (NSClientV3, xDrip+, Wear, External Companion Apps, Garmin). If you did not scan a QR code, enable **NSClientV3** and enter the **same Nightscout URL** as on the main phone and an access token, with **websockets** enabled — exactly as described in [Synchronization](#RemoteControl_aapsclient).

   ![Pasul Comunicare pe client](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Asociați cu dispozitivul principal** — acest pas există **doar** pe client. It connects this device to the master over the secure command channel, with the PIN, and takes the name the phone was added with on the master, like the QR code. **After the pairing, the setup is finished.** You can also skip it and pair at any time later from **Manage → Pair with master**.

   ![Pasul Asociați cu dispozitivul principal în asistentul clientului](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Cine folosește acest telefon?** — doar dacă nu ați făcut asocierea în asistent: numele persoanei care folosește acest telefon. It tells this instance apart in reports and synchronization.

(aapsclient-pairing-with-the-master)=

## Asocierea cu dispozitivul principal

Pe **dispozitivul principal**, deschideți **Gestionați → Clienți autorizați** și adăugați un client. Există două moduri de asociere:

- **With a QR code** (the quickest, if the phone has a camera): scan the code in the wizard step "**Set up from the master**" or from **Manage → Pair with master → Scan QR code**, and confirm with "**Use**". It sets up Nightscout too.
- **With the PIN**: on the **client**, open the wizard step above (or **Manage → Pair with master**), type the one-time PIN shown on the master and press "**Pair**". The client then shows who it is about to trust — confirm with "**Pair**":

![Confirmarea pe client înainte de finalizarea asocierii](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Din asistent, o asociere reușită încheie configurarea și deschide ecranul principal. Pe dispozitivul principal, clientul apare ca **Activ** în lista [Clienți autorizați](#client_master_master_setup). După aceea, **Gestionați → Asociați cu dispozitivul principal** afișează „*Deja asociat*”, rolul telefonului și dacă modul securizat este activ:

![Gestionați → Asociați cu dispozitivul principal pe un client asociat: Deja asociat, Rol: Îngrijitor, Mod securizat activ](../images/v4/ClientMaster/pair_with_master_client.png) The full pairing procedure, security details and troubleshooting are on [Master ↔ Client control](#client_master_client_setup).

After pairing, the client gets a Nightscout token of its own from the master (if the master has an admin token), with only the rights a client needs, and stops using the token you may have entered. **AAPSClient** never writes treatments or BG to Nightscout itself: everything it does is sent to the master, which writes it. See [The client's own Nightscout token](#client-master-control-own-token).

The master decides what this phone may do with its **[role](#client-master-control-roles)** (Read-only, Meals, Caregiver or Admin). **Gestionați → Asociați cu dispozitivul principal** afișează rolul telefonului.

## Ecranul principal

Ecranul principal al clientului reflectă bucla urmărită:

![Ecranul principal AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **BG, graphs, IOB/COB and profile** come from Nightscout, just as the master uploaded them.
- **Starea buclei** afișată este cea a **dispozitivului principal** (un client nu are o buclă proprie). Until the client has received the master's running mode from Nightscout, the running mode chip shows a **question mark** (unknown).
- The **status card** shows the **followed pump's** reservoir and battery and the uploader battery, taken from the Nightscout device status — a client has no pump, so there is no local pump status and no pump management anywhere in the app.
- Bara de jos oferă **Tratamente**, **Scenarii** și **Gestionați** după ce clientul este asociat (înainte de asociere doar **Gestionați**) — nu există file pentru pompă sau obiective.

## Tratamente și acțiuni

Everything under **Manage** works like on the main app, with one important difference: on a client, actions that would change therapy (bolus, carbs, temp targets, scenes…) are **hidden until the device is paired**, and once paired they are **relayed to the master** for confirmation and execution — see [Using remote control](#client-master-control).

The **Profile** entry is the exception: it is shown even on an **unpaired** client, but opens **view-only** — the client shows the profiles it receives through Nightscout (it needs them for its own calculations), without edit or activate buttons. Once the client is **paired**, the profile list is synchronized with the master and you can edit and activate profiles from the client like any other remote action.

Pe un client **neasociat**, **Gestionați** oferă doar **Profil** și **Asociați cu dispozitivul principal**:

![Ecranul Gestionați pe un client neasociat: doar Profil și Asociați cu dispozitivul principal](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Bannerul roșu „*Dispozitivul principal nu este accesibil. Editarea este dezactivată până când conexiunea este restabilită.*” apare și pe un client neasociat. This is expected: there is no master to reach yet. Bannerul dispare după ce clientul este asociat și dispozitivul principal este online.

Once the client is paired, the therapy actions appear:

![The Manage screen on a paired client, including the Pair with master entry](../images/v4/AapsClient/aapsclient_manage.png)

There is **no Pump entry** — a client has no pump.

If the master is not reachable, the same banner appears on a paired client: the therapy actions are greyed out, and anything you try is blocked before it is sent. The client notices that the master is offline when you try an action, and re-enables the actions once the master is back online.

![The Manage screen on a paired client while the master is offline: actions greyed out under the banner](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Setări sincronizate cu dispozitivul principal

The active plugin **configuration** and many **preferences** are kept in sync between the master and its paired clients; synced items are marked with a small **phone icon** and are disabled (with a "*Master device unreachable*" banner) while the master cannot be reached. Acest lucru este descris în [Modificarea configurației și a preferințelor](#client-master-config-prefs).

## AAPSClient pe un ceas inteligent

A Wear OS watch can be paired with the **client** phone; its actions are relayed through the client to the master. See [Wear OS](../WearOS/WearOsSmartwatch.md) and the [smartwatch options in Remote control](#RemoteControl_smartwatches).
