
# Release notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

```{admonition} Upgrading from AAPS v3?
:class: tip
See [What changed in AAPS v4](V4Changes.md) for the notable behavioral changes — features that have moved, been renamed, or been removed.
```

You will receive a notification like this when a new update is available:

![Update info](../images/AAPS_LoopDisable90days.png)

If you do not update until expiration date **AAPS** will switch to Open Loop.

See [End of life](EndOfLife.md) for AAPS version end dates.

**Do not ignore the notification.** New versions of **AAPS** provide important safety fixes. Therefore, every **AAPS** user must update to the latest version as soon as possible. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Thank you for your understanding.

(maintenance-android-version-aaps-version)=

## Android version and AAPS version

If your smartphone uses an Android Version older than Android 12 you will not be able to use AAPS v3.4 and up as it requires at least Android 12.

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. No other improvements are included.

Find your Android version in the table below and use the matching **AAPS** version. The code is downloaded from <https://github.com/nightscout/AndroidAPS> using the branch shown.

| Your Android version | AAPS version to use | Branch to download                                               |
| -------------------- | ------------------- | ---------------------------------------------------------------- |
| Android 12 and up    | Latest version      | [master](https://github.com/nightscout/AndroidAPS) (default)     |
| Android 11           | **3.3.2.1**         | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**         | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**         | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**           | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS version

- AAPS requires WearOS 3.0, 3.2 or 3.5 (Android 11, API level 30) or newer. WearOS 2 watches are not supported.

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Version 4.0.0**

Release date: 31-10-2026

**New features**

- New user interface: phone app rebuilt in Jetpack Compose @MilosKozak
- [Global search](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Kotlin Multiplatform migration, client for Windows, Mac, Linux desktop and iOS @MilosKozak
- [Scenes](../DailyLifeWithAaps/Scenes.md): save a set of actions and run them together @MilosKozak
- [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md): send commands from a client phone to the master @MilosKozak
  - [Client roles](#client-master-control-roles): Read-only, Meals, Caregiver or Admin for each client @MilosKozak
  - [Hardened mode](#client-master-control-hardened-mode): with client control on, the master takes changes only from paired clients @MilosKozak
  - Pairing with a QR code that also sets up Nightscout on the client, or with a PIN; the pairing secret is replaced right after pairing @MilosKozak
  - [Own Nightscout token](#client-master-control-own-token) for each client, with only the rights a client needs @MilosKozak
- [Insulin concentration](../AdvancedOptions/InsulinConcentration.md) support (U200, U500) across pumps, wizard and profiles @Philoul @MilosKozak
- Insulin management: insulin catalogue, nicknames, selection in profile and wizard @Philoul
- Calibration plugin @MilosKozak
- [Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Site rotation](#Aapsscreens-site-rotation): track and rotate infusion sites @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) rework @Philoul
- New [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accessibility: the phone app works with a screen reader - named controls, spoken status, graph descriptions and headings to skim @MilosKozak
- [Settings import](../Maintenance/ExportImportSettings.md): can keep the pump settings @MilosKozak
- Persistent notification uses Android live updates, with Samsung Now bar support and the delta @premnirmal
- BG graph: [press and hold](#aaps-screens-graph-press-and-hold) to see the values at a reading, on every graph of the overview @t1dude @olorinmaia
- Performance improvements @MilosKozak
- Automatic e-carbs in Bolus wizard @MilosKozak

**New devices**

- **CareLevo**: new [pump driver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: support @MilosKozak
- **Instara**: new CGM source @leohunt

**Pump Driver Improvements**

- Pump overview screens rebuilt for Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn and Equil @MilosKozak
- **Omnipod Dash**: PDM style Ref codes and readable fault descriptions, drift compensation always on, better bolus type reporting @nl-ruud
- **Omnipod**: hard-end date for Dash & Eros @mcnelson
- **DanaR, RS**: pump emulator for testing @MilosKozak
- **Equil**: pump emulator for testing @MilosKozak
- Many pump and loop fixes @MilosKozak and others

**Wear OS**

- [Watch app](../WearOS/WearOsSmartwatch.md) rebuilt in Compose, new tiles and complications, automatic watch face install (Watch Face Push) on Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface available for WearOS 6.0 (GW7, GW8, GW9...) with a WFF dedicated watchface @Philoul @olorinmaia
- CustomWatchface can now include 5 Complication slots you can customize (new feature only available for older watches) @Philoul
- New [WFF watchface based on AAPS complications](#wearos-complications-watchface-setup) @olorinmaia
- Corrections in Bolus wizard and Quick wizard result @olorinmaia
- New BG graph and Running mode activity in main menu @olorinmaia
- Bolus wizard: [meal type](#WearOsSmartwatch-wizard-meal-type) page that splits the carbs like the phone wizard, and [carb time](#WearOsSmartwatch-wizard-carb-time) with the *time to eat* reminder on the watch @olorinmaia
- [Phone alarms on the watch](#WearOsSmartwatch-phone-alarms): the watch shows the alarm and offers Silence and Mute 5 min @olorinmaia

**Build**

- CI workflows for tag/branch builds, JDK version mapping @Angus-repo

**Contributors**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full changelog: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Version 3.4.2.6**

- Equil: improve stability @MilosKozak

---

(version3321)=

**Version 3.3.2.1**

Release date: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Fix mmol-mgdl conversion
- Fix wrong time selection in dialogs in some timezones
- Fix reading keys in simple mode
- Fix missed predictions on wear
- Improved ConfigBuilder
- Improved NSCv3 full sync

---

(version3300)=

**Version 3.3.2.0**

Release date: 27-03-2025

**How to upgrade**

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  You'll receive warning/notifications less often:
   - 28+ days remaining: every 7 days
   - 27-14 days remaining: every 3 days
   - then once a day
   - Notification will be generated after noon to not bother you during nights
* There are only 2 kinds of notification
   - New version available (has no effect on AAPS)
   - Application is expiring on some date in the future (still no effect on AAPS) / has expired (AAPS will turn into LGS mode)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Release date: 27-02-2024

This version is the last one supporting Android 10. If you cannot upgrade to Android 11, [update AAPS to 3.2.0.4](#update-aaps-3204).

**Changes**

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

---

**Version 2.8.2**

Release date: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

The first test version started in 2015 and the first release was in 2016.

The exact chronology of these releases is not available at the moment but as this question has been asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
