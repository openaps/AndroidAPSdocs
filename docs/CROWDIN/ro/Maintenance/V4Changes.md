(v4-changes)=
# Ce s-a schimbat în AAPS v4

This page collects the notable **changes in behavior** between **AAPS** v3 and v4 — things that work differently, have moved, or have been removed — so existing users know what to expect when they update. See also the [Release Notes](ReleaseNotes.md) and the [update manual](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 a fost eliminat

**AAPS** v3 shipped **two** Nightscout synchronization plugins:

- **NSClient** — the legacy client (the old Nightscout REST / socket.io API, also called *“v1”*), and
- **NSClientV3** — the client for the newer Nightscout **API v3**.

In **AAPS** v4 the legacy **NSClient (v1)** plugin has been **removed**. Pentru sincronizarea cu Nightscout a rămas doar **NSClientV3**.

```{admonition} What you need to do
:class: important
If you (or your **AAPSClient** follower) were still synchronizing with the old **NSClient (v1)** plugin, switch to **NSClientV3** before/after updating:

- Open **[Configuration](../SettingUpAaps/ConfigBuilder.md) → Communication → NSClientV3**.
- Enter your **Nightscout URL** and an **access token** (NSClientV3 uses an access token, *not* the old API secret — see [creating a token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Site-ul dumneavoastră Nightscout trebuie să accepte **API v3** (Nightscout 15 sau mai nou).
- If you use **websockets**, enable or disable them on **both** the master and the follower — never on only one.
- Websockets are **mandatory** for remote control from **AAPSClient**, on both phones.
```

This affects only how the app talks to Nightscout; your data on Nightscout is unchanged.

---

## The bottom navigation: Treatments, Scenes and Manage

In **AAPS** v3 you moved around the app with a row of **tabs** (Overview, Actions, Treatments, …), and several features were **plugins** you enabled in the Config Builder (**Actions**, **Automation**, **Food**, …).

In **AAPS** v4 the tabs are gone, and so is the eye checkbox in the Config Builder that showed a plugin as a tab. The main screen is the **Overview**, and a **bottom navigation** gives you three sheets. **Actions, Automation and Food are no longer plugins** — there is nothing to enable in [Configuration](../SettingUpAaps/ConfigBuilder.md) (the renamed Config Builder); their functions now live in these sheets.

(v4changes-treatments)=
### Tratamente — introducere și administrare

The **Treatments** sheet is where you record or deliver a treatment: **Bolus wizard**, **Insulin** (manual bolus), **Carbs**, **Treatment** (insulin + carbs together), **Calibration**, **CGM** (open your CGM app, when one is configured), and your **[QuickWizards](../DailyLifeWithAaps/QuickWizards.md)**.

![The Treatments bottom sheet](../images/v4/BehavioralChanges/treatments_sheet.png)

On a **Wear OS watch** the same treatments are entered from the watch's **AAPS menu** (Bolus wizard / Calculator, eCarbs, Treatment, …):

![Acțiunile pentru tratamente din meniul AAPS al ceasului](../images/v4/BehavioralChanges/treatments_watch.png)

### Scenarii

Your situation presets — see [Scenes](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Gestionați — gestionare și activare

The **Manage** sheet is where you manage and activate everything else: **[Profile](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Insulin settings** (your insulin configurations), **[Temp Target](../DailyLifeWithAaps/TempTargets.md)**, **[QuickWizard](../DailyLifeWithAaps/QuickWizards.md)** presets, **[Scenes](../DailyLifeWithAaps/Scenes.md)**, **Automation**, **Food**, **Site Rotation**, **Pump**, **[Authorized clients](../RemoteFeatures/ClientMasterControl.md)** — plus the pump actions that used to be on the *Actions* tab (**Extended Bolus**, **cancel temp basal**, **Prime/Fill**, **Sensor Insert**, **Pump Battery Change**).

![The Manage bottom sheet](../images/v4/BehavioralChanges/manage_sheet.png)

All of your existing automation rules and food entries are kept; only the way you reach these features has changed.

(screens-action-tab)=
#### Unde a dispărut fila Acțiuni?

**AAPS** 3.x avea o filă „Acțiuni”. In **AAPS** 4 its functions live in other places:

* **Profile switch** and **Profile Percentage**: tap the [profile name](#aaps-screens-profile--target) on the main screen, or **Manage → Profile**. Vedeți [Schimbarea procentajului profilului](#ProfileSwitch-change-percentage).
* **Țintă temporară**: apăsați [ținta](#aaps-screens-profile--target) pe ecranul principal sau **Gestionați → Țintă temporară**.
* **Prime/Fill**, **Sensor Insert**, **BG check** and the other careportal entries: in the expanded [status panel](#aaps-screens-careportal), in **Manage**, or as [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) buttons.
* **History browser**, **Statistics** (TDD): in the **menu** (☰).

```{admonition} Profile switch and profile percentage
:class: note
In **AAPS** v3, a long press on the profile name opened the profile switch dialog (percentage, duration, Activity temp target). In **AAPS** v4, **tap** the profile name (or **Manage → Profile**), then tap the round **▶** button at the bottom right to open the same settings. See [Change the Profile Percentage](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Protecția setărilor blochează acum și ecranele de gestionare

In **AAPS** v3, [Settings protection](#Preferences-settings-protection) asked for your password only when you opened the settings. You could still add or edit profiles in the **Local Profile** tab without it.

In **AAPS** v4, Settings protection also covers editing on the management screens: **Profile**, **Insulin settings**, **Temp Target** and **QuickWizard**. Dacă setările dumneavoastră sunt blocate, aceste ecrane se deschid **doar pentru citire**:

- You can browse the entries and **▶ Activate** or use them.
- Butoanele **Adăugați / Editați / Clonați / Ștergeți** sunt **ascunse**. Doar **✏️ creionul** din bara de sus arată că puteți debloca editarea.

![The read-only Profile screen — only Activate at the bottom, pencil in the top bar](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
To add, edit, clone or delete an entry, tap the **✏️ pencil** in the top bar and enter your settings password (or use biometrics). Butoanele apar.

If you don't need to protect your settings, you can turn Settings protection off in **Settings → Protection**.
```

---

(v4changes-active-insulin)=
## The insulin in use can't be edited

In **AAPS** v3, you could change the DIA of the insulin you were using at any time.

In **AAPS** v4, the insulin marked **ACTIVE** in **Manage → Insulin settings** is greyed out: you cannot edit or delete it.

When you upgrade, **AAPS** keeps the insulin and DIA that your v3 profile switches already stored. Dacă găsește înregistrări mai vechi la care insulina este cunoscută, dar DIA nu, folosește pentru ele un DIA implicit și afișează o singură dată un mesaj, de exemplu *Înregistrările mai vechi nu aveau durata de acțiune a insulinei, așa că pentru Lyumjev s-au folosit 9,0 ore. Check your insulin settings — already migrated records are not updated afterwards.* Check your insulin settings when you see it.

```{admonition} What you need to do
:class: important
To change the DIA or peak, add a new insulin with **+**, adjust it, save it and **▶ Activate** it. See [Changing the insulin in use](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## AAPSClient remote control needs pairing

In **AAPS** v3, **AAPSClient** controlled **AAPS** by writing care-portal treatments to Nightscout, and could not deliver a bolus.

În **AAPS** v4, clientul și telefonul principal sunt **asociate** o singură dată, iar fiecare comandă este semnată. The main phone checks and confirms each command, and a client can now also deliver a bolus.

- Each client has a **[role](#client-master-control-roles)** that limits what it may do.
- While client control is on, the main phone is in **[hardened mode](#client-master-control-hardened-mode)**: treatments and changes typed directly into Nightscout (the website, other apps) are no longer applied.
- Each client gets a **[Nightscout token of its own](#client-master-control-own-token)** with only the rights it needs.

```{admonition} What you need to do
:class: important
Pair each **AAPSClient** with the main phone: see [Master ↔ Client control](#client-master-control). With an admin token on the main phone, the main phone shows a QR code that sets up and pairs the client in one scan. If you used to enter treatments on the Nightscout website, enter them on a paired client instead.
```

---

## Datele de glicemie duplicate trec acum bucla în Suspendare la glicemie scăzută

When **AAPS** receives the same BG reading twice (a red warning badge on the BG source shortcut in the bottom bar), it cannot calculate your trend reliably, so it stops giving correction insulin.

In **AAPS** v3 this happened quietly in the background: your loop still showed as **Closed Loop**, even though it could no longer correct.

In **AAPS** v4 the change is visible. A closed loop is switched to **Low Glucose Suspend** mode, and the loop dialog tells you why: *"LGS mode due to doubled values in BG source"*. **AAPS** can still reduce or suspend your basal to protect you against lows.

```{admonition} What you need to do
:class: important
Find and remove the duplicate readings — see [BG warning sign](#aaps-screens-bg-warning-sign).

Once they are gone, **AAPS** stays in **Low Glucose Suspend**. It does not go back to **Closed Loop** on its own: press and hold the loop icon and select **Closed Loop** again.
```

---

(v4changes-tidepool)=
## Tidepool: datele apar acum sub numele de dispozitiv AAPS

In **AAPS** v3, the data uploaded to [Tidepool](../SettingUpAaps/Tidepool.md) was shown in Tidepool under another device name.

In **AAPS** v4, the data is shown under the device name **AAPS**. After the update, **AAPS** starts a new data set in Tidepool. Your older data stays in Tidepool under the old device name.

```{admonition} What you need to do
:class: important
De obicei nu trebuie să faceți nimic: datele noi apar pur și simplu sub **AAPS**.

**Nu** rulați „**Sincronizare completă**” cât timp datele vechi sunt încă în Tidepool: aceleași date ar apărea atunci de două ori. Dacă doriți toate datele sub noul nume, folosiți mai întâi butonul „**Ștergeți toate datele**” de pe [ecranul Tidepool](#tidepool-menu) (acesta șterge și datele vechi încărcate de **AAPS**), apoi rulați „**Sincronizare completă**”. Only the data still stored in **AAPS** on your phone can be uploaded again.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
