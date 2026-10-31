(aapsclient-app)=
# The AAPSClient app

**AAPSClient** is the accessory app of **AAPS**: a companion app for a second phone — typically a caregiver's — that **follows** the person using **AAPS**. From **AAPS** version 4, the caregiver can also **control** the loop remotely through signed commands. Both phones communicate through your **Nightscout** site; no direct connection between the phones is needed.

```{admonition} Wording used on this page
:class: note
- **Client** = a phone running **AAPSClient**.
- **Master** = the main **AAPS** phone that owns the pump and runs the loop.
```

```{admonition} iPhone version in development
:class: note
**AAPSClient** currently runs on Android phones. An iPhone version of **AAPSClient** is being developed and is in early testing. It is not released yet: there is no App Store listing and nothing to download. This page will be updated when it becomes available.
```

```{contents} Table of contents
:depth: 2
:local: true
```

## What AAPSClient is (and is not)

**AAPSClient** looks and feels like **AAPS**, but it has **no loop of its own**:

- It contains **no APS algorithm**, no **Objectives**, and **no pump drivers** — it never doses on its own.
- The plugins used only by the main app (**SMS Communicator**, **Tidepool**, **Open Humans**) are not included either.
- What it *does* contain: **NSClientV3** synchronization, the BG-source plugins, **xDrip+** broadcasting, and the **Wear OS** / **Garmin** connectors — everything needed to follow and to relay commands. A **Garmin** watch connected to a client can show the data, but carbs it sends are not entered and it cannot connect or disconnect the pump: the client shows a message, and you enter them in **AAPS** instead.

Everything you trigger from **AAPSClient** is checked, capped, confirmed and **executed by the master** (the phone with the pump). The dedicated [Master ↔ Client control](ClientMasterControl.md) page explains how this works: how to pair the two phones, how the master writes the confirmation text you see, how a bolus started on the client is delivered, and what happens when the master is offline.

## Versions: AAPSClient, AAPSClient2 and AAPSClient3

Up to three client apps can be installed side by side on the same follower phone, each following a **different** person: **AAPSClient** (yellow owl icon), **AAPSClient2** (blue owl) and — new in **AAPS** version 4 — **AAPSClient3** (green owl). They are functionally identical. Only the name and the color differ (app icon, widget background and the status section on the home screen), so you can tell them apart. Each app is paired with its own master. See [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions) for details.

## Getting the app

**AAPSClient** is obtained the same way as **AAPS** — see [Download and installation of AAPSClient](#RemoteControl_aapsclient), and install it like the main app ([Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md)).

## First start: a shorter Setup Wizard

On first start **AAPSClient** runs the same **Setup Wizard** you know from **AAPS**, but with far fewer steps — there is no profile, insulin, pump, APS or objectives configuration on a follower:

1. **Welcome**, **license agreement**, **permissions** and **master password** — identical to the main app, see the [AAPS Setup Wizard](../SettingUpAaps/SetupWizard.md).
2. The client does **not** ask for **units** or the **low/high marks**: it takes them from the main phone as soon as it is connected to Nightscout. You can see them later in **Settings**, where a small **phone icon** shows that they are [synchronized with the main phone](#client-master-config-prefs). They can only be edited while the master is reachable.
3. **Set up from the master** — on the master, open **Manage → Authorized clients**, add this phone with a **QR code** and tap **Scan the QR code** here. One scan sets up Nightscout with a token of this phone's own and, with a code that pairs, also pairs the phone. The phone also takes the name it was added with on the master as its instance name (letters with accents become plain letters, "Miloš" becomes "Milos"). **After the scan, the setup is finished**: the wizard closes, because the next steps would only show what the code did. Without a QR code, skip this step. (Android only: the scanner is not available on iOS yet.)

   ![The Set up from the master step with the Scan the QR code button](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Communication** — the plugin list only offers what a follower needs (NSClientV3, xDrip+, Wear, External Companion Apps, Garmin). If you did not scan a QR code, enable **NSClientV3** and enter the **same Nightscout URL** as on the main phone and an access token, with **websockets** enabled — exactly as described in [Synchronization](#RemoteControl_aapsclient).

   ![Communication step on the client](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Pair with master** — this step exists **only** on the client. It connects this device to the master over the secure command channel, with the PIN, and takes the name the phone was added with on the master, like the QR code. **After the pairing, the setup is finished.** You can also skip it and pair at any time later from **Manage → Pair with master**.

   ![Pair with master step in the client wizard](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Who is using this phone?** — only when you did not pair in the wizard: the name of the person using this phone. It tells this instance apart in reports and synchronization.

(aapsclient-pairing-with-the-master)=

## Pairing with the master

On the **master**, open **Manage → Authorized clients** and add a client. There are two ways to pair:

- **With a QR code** (the quickest, if the phone has a camera): scan the code in the wizard step "**Set up from the master**" or from **Manage → Pair with master → Scan QR code**, and confirm with "**Use**". It sets up Nightscout too.
- **With the PIN**: on the **client**, open the wizard step above (or **Manage → Pair with master**), type the one-time PIN shown on the master and press "**Pair**". The client then shows who it is about to trust — confirm with "**Pair**":

![Confirmation on the client before completing the pairing](../images/v4/AapsClient/aapsclient_pair_confirm.png)

From the wizard, a successful pairing finishes the setup and opens the home screen. On the master the client appears as **Active** in the [Authorized clients](#client_master_master_setup) list. Afterwards, **Manage → Pair with master** shows "*Already paired*", the phone's role and whether hardened mode is on:

![Manage → Pair with master on a paired client: Already paired, Role: Caregiver, Hardened mode on](../images/v4/ClientMaster/pair_with_master_client.png) The full pairing procedure, security details and troubleshooting are on [Master ↔ Client control](#client_master_client_setup).

After pairing, the client gets a Nightscout token of its own from the master (if the master has an admin token), with only the rights a client needs, and stops using the token you may have entered. **AAPSClient** never writes treatments or BG to Nightscout itself: everything it does is sent to the master, which writes it. See [The client's own Nightscout token](#client-master-control-own-token).

The master decides what this phone may do with its **[role](#client-master-control-roles)** (Read-only, Meals, Caregiver or Admin). **Manage → Pair with master** shows the phone's role.

## The home screen

The client's home screen mirrors the followed loop:

![AAPSClient home screen](../images/v4/AapsClient/aapsclient_home.png)

- **BG, graphs, IOB/COB and profile** come from Nightscout, just as the master uploaded them.
- The **loop status** shown is the **master's** (a client has no loop of its own). Until the client has received the master's running mode from Nightscout, the running mode chip shows a **question mark** (unknown).
- The **status card** shows the **followed pump's** reservoir and battery and the uploader battery, taken from the Nightscout device status — a client has no pump, so there is no local pump status and no pump management anywhere in the app.
- The bottom bar offers **Treatments**, **Scenes** and **Manage** once the client is paired (only **Manage** before pairing) — there are no pump or objectives tabs.

## Treatments and actions

Everything under **Manage** works like on the main app, with one important difference: on a client, actions that would change therapy (bolus, carbs, temp targets, scenes…) are **hidden until the device is paired**, and once paired they are **relayed to the master** for confirmation and execution — see [Using remote control](#client-master-control).

The **Profile** entry is the exception: it is shown even on an **unpaired** client, but opens **view-only** — the client shows the profiles it receives through Nightscout (it needs them for its own calculations), without edit or activate buttons. Once the client is **paired**, the profile list is synchronized with the master and you can edit and activate profiles from the client like any other remote action.

On an **unpaired** client, **Manage** only offers **Profile** and **Pair with master**:

![The Manage screen on an unpaired client: only Profile and Pair with master](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

The red banner "*Master device unreachable. Editing is disabled until the connection is restored.*" also appears on an unpaired client. This is expected: there is no master to reach yet. The banner disappears once the client is paired and the master is online.

Once the client is paired, the therapy actions appear:

![The Manage screen on a paired client, including the Pair with master entry](../images/v4/AapsClient/aapsclient_manage.png)

There is **no Pump entry** — a client has no pump.

If the master is not reachable, the same banner appears on a paired client: the therapy actions are greyed out, and anything you try is blocked before it is sent. The client notices that the master is offline when you try an action, and re-enables the actions once the master is back online.

![The Manage screen on a paired client while the master is offline: actions greyed out under the banner](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Settings synchronized with the master

The active plugin **configuration** and many **preferences** are kept in sync between the master and its paired clients; synced items are marked with a small **phone icon** and are disabled (with a "*Master device unreachable*" banner) while the master cannot be reached. This is described in [Changing configuration and preferences](#client-master-config-prefs).

## AAPSClient on a smartwatch

A Wear OS watch can be paired with the **client** phone; its actions are relayed through the client to the master. See [Wear OS](../WearOS/WearOsSmartwatch.md) and the [smartwatch options in Remote control](#RemoteControl_smartwatches).
