(client-master-control)=
# Master ↔ Client control (signed remote control)

From **AAPS** version 4, a follower phone running **AAPSClient** can do much more than *announce* treatments through Nightscout: once it has been **paired** with the main phone, it can send **signed commands** that the main phone (the **master**) checks, confirms and executes — including delivering an **insulin bolus** on the master's pump.

This page explains how it works, and how to set it up and use it.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Master** = the main **AAPS** phone that owns the pump and runs the loop (the `full` app).
- **Client** = an **AAPSClient** phone with no pump that follows and now also *controls* the master.
- Both phones must be connected to the **same Nightscout** site. All communication still travels through Nightscout — no direct connection between the phones is needed.
```

---

## How it works

```{admonition} Coming from AAPS v3?
:class: note
In **AAPS** v3, **AAPSClient** could only write unsigned care-portal treatments to Nightscout, and could not deliver a bolus. Remote control now needs a one-time [pairing](#client_master_master_setup). See also [What changed in AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 uses a dedicated **Client-Control** channel. It still rides on your Nightscout site (in the `settings` collection), but every message is **cryptographically signed** with a secret that is exchanged once, during **pairing**, and never leaves the devices in clear text.

The guiding principle is **the master is in charge**:

1. The client sends an *intent* (“bolus 2 U”, “start the Exercise scene”, “set this temp target”…).
2. The **master** re-computes and **caps** the action against its **own** live data (profile, IOB, COB, current temp target, pump), and **authors the exact confirmation** the user will see.
3. The client (or watch) shows the **master's** confirmation text — it never builds its own.
4. On confirmation the master **executes once** and reports the result back to the client.

What this means for you:

- **Signed commands**: only the clients you paired can send commands (per-client pairing secret and signature). Old or replayed commands are rejected.
- **Insulin bolus from a client**: the master delivers it on its pump, and the client shows the delivery progress.
- **The master decides**: it caps every action against its own constraints and writes the confirmation shown on the client.
- **Master offline**: actions are blocked with a clear message.
- **Revoking a client** takes one tap (per client), or use the master's switch to stop all clients.

Actions that can be triggered from a client: **bolus**, **carbs / eCarbs**, **temporary target** (set & cancel), **profile switch**, **loop / running-mode** change, **temp basal** (set & cancel), **extended bolus** (set & cancel), **insulin selection**, and **[scenes](../DailyLifeWithAaps/Scenes.md)**. A subset of bidirectional **preferences** is also kept in sync between master and clients.

---

## Roles and prerequisites

```{admonition} Before you start
:class: important
- The **master** runs the normal `full` **AAPS** build and is connected to your pump.
- The **client** runs **[AAPSClient](AapsClient.md)** (or **AAPSClient2** / **AAPSClient3** for further patients — see [AAPSClient vs AAPSClient2](#remotecontrol-aapsclient-versions)).
- **Both** phones use **NSClientV3** pointed at the **same** Nightscout, and are showing *connected*.
- **Websockets** must be enabled on the **master** — without them the master cannot receive client commands at all, and your clients will see it as *not accepting commands*. Enable websockets on the client too for fast, near-instant round-trips.
```

Pairing and synchronization are two different things:

- **Synchronization** (data: BG, treatments, profile) is set up exactly as before — see [Synchronization](#RemoteControl_aapsclient).
- **Pairing** (control: the signed command channel described here) is the new step below.

---

## Setting it up

(client_master_master_setup)=
### 1. On the master — enable control and add a client

On the master, open the **Manage** screen and choose **Authorized clients**.

Turn on **Allow client control** (it is **off** by default). This is the master kill-switch: with it off, no client can send commands, but your paired clients are kept so you can turn it back on later. The same switch is also available in the master's **NSClientV3** settings, under **Remote control**.

```{admonition} Websockets are required on the master
:class: important
Client commands only reach the master through the **websockets** connection of **NSClientV3**. If websockets are turned off, the **Authorized clients** screen shows a warning: *"Websockets are turned off, so commands from clients cannot be received. Clients see this master as not accepting commands until you turn websockets on."* Turn websockets on in the NSClientV3 settings to make client control work.
```

![Authorized clients screen on the master](../images/v4/ClientMaster/authorized_clients_master.png)

Tap the **+** button (bottom right) to add a client and enter a **device name**, so you can recognize it in the list:

![New client dialog on the master: enter a name for the client device](../images/v4/ClientMaster/new_client_master.png)

Tap **OK**: the master then displays a short **pairing PIN**. This PIN is **one-time** and **expires after about two minutes**.

![Master pairing screen showing the one-time PIN (the PIN shown here is expired)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
The PIN protects the pairing secret that is exchanged through Nightscout. Share it only with the device you are pairing, do not post it publicly, and let it expire if you do not use it. A fresh PIN can always be generated by tapping **+** again.
```

(client_master_client_setup)=
### 2. On the client — pair with the master

On the client, open **Manage → Pair with master**, **enter the 8-digit PIN** shown on the master and tap **Pair**. The client uses the PIN to securely retrieve the pairing offer through Nightscout, then asks "**Pair with this master?**" and shows the master's identifier. Tap **Pair** to confirm (see [Pairing with the master](#aapsclient-pairing-with-the-master) for a screenshot).

![Pair-with-master screen on the client before pairing — enter the PIN here](../images/v4/ClientMaster/pair_with_master_unpaired.png)

Once a client is paired it sends a **Hello** to the master and appears in the master's **Authorized clients** list as **Active**, with a *“last seen”* time. A client can be paired with **one** master at a time; to pair with a different master, **Unpair** first.

![Pair-with-master screen on the client (already-paired state)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Managing clients

From the master's **Authorized clients** screen you can, at any time:

- **Revoke** a single client — tap the **trash** icon next to it. The client can no longer send commands until it is paired again.
- **Stop all control** without losing the pairings — turn off **Allow client control**.

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

Connection details that are unique to each device — most importantly the **NSClient Nightscout URL / access token** — are *not* synced and are set on each phone individually.

### Profiles

Your **profile list** is also kept in sync between the master and its paired clients. On a paired client, **Manage → Profile** shows the same profiles as the master; you can **edit** a profile or **activate** one, and — like every other command — the change is sent to the **master**, applied there, and synced back.

The first time you activate a profile on a newly installed client, the client may show "*No insulin is in use yet*" and ask you to **select the insulin**. Choose the insulin that is active on the master (**Manage → Insulin settings** on the master shows it).

On a client that is **not paired**, the Profile screen is still available but **view-only**: the client shows the profiles it receives through Nightscout (it needs them for its own calculations), but there is no edit or activate button — there is no master to send the change to.

### Preferences

A subset of **preferences** is **bidirectional**: you can change them on the **master or on a paired client**, and the change is synchronized to the other side. When you change such a preference on a client, it is sent to the master over the signed channel, applied there, and the authoritative value is sent back — so what you see on the client is always what the master stored. If the same preference is changed on two devices at almost the same time, the **most recent edit wins**.

Inside the settings, the same small **mobile icon** marks the individual preferences that are synced. In the example below *Absorption cutoff* is synced (mobile icon), while settings without the icon are device-local:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Because the master is the authority for the stored value, editing a master-controlled configuration item or a bidirectional preference from a client requires the master to be **reachable**. When the master is offline those controls are disabled on the client (see [When the master is offline](#when-the-master-is-offline)).
```

---

## Security notes

```{admonition} How the channel is protected
:class: tip
- **Pairing secret** is exchanged once during PIN-based pairing and stored encrypted on each device; it never travels through Nightscout in clear text (it is protected by the PIN).
- **Every command is signed** (HMAC). The master rejects anything whose signature does not match a paired client.
- **Replay is prevented** by a per-client monotonic counter, and every command **expires** after a short time-to-live.
- **You stay in control**: revoke a client with one tap, or disable everything with **Allow client control**.
```

```{admonition} After restoring a backup
:class: warning
If a client is restored from a backup that rolls its command counter backwards, the master will reject its next commands as replays. Simply **unpair and pair again** to recover.
```

---

(client-master-control-troubleshooting)=

## Troubleshooting

| Symptom | What to check |
|---|---|
| Client says the **master is offline** | Master phone awake and running **AAPS**; both phones connected in **NSClientV3**; **websockets** enabled on both; same Nightscout site. |
| Client says it is **not paired** | Pair again from **Manage → Pair with master**. Confirm the client is **Active** in the master's **Authorized clients** list. |
| Command **rejected** by the master | The master re-validates against its current state — e.g. the chosen profile no longer exists, or the pump type does not match. Re-check on the master. |
| Commands work but are **slow** | Enable **websockets** on both phones (otherwise the apps fall back to slower polling). |
| Nothing happens after pairing | Make sure **Allow client control** is ON on the master, and that **websockets** are enabled on the master — without them the master cannot receive commands (the master's **Authorized clients** screen shows a warning). |

For Nightscout / synchronization problems first see [Troubleshooting NSClient](../GettingHelp/TroubleshootingNsClient.md).

---

<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Authorized clients list, Active client)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - new_client_master.png               (master: New client name dialog)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
