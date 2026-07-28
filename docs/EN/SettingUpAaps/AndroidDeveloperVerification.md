(android-developer-verification)=

# Android developer verification

Google is introducing **Android developer verification**: on most Android phones, apps will only install if they were registered with Google by a verified developer. This also applies to apps installed from an APK file ("sideloading") — which is how you install the **AAPS** app you built yourself.

This page explains what changes, when, and the **free** ways to keep installing and updating **AAPS** on your phone.

```{contents} Table of contents
:depth: 1
:local: true
```

## What is changing

Today, you install **AAPS** by copying the APK file to your phone and tapping it. In the future, when you do this on a phone with Google services (a "certified" Android device — virtually every phone sold with the Play Store), Android will check whether the app comes from a developer registered with Google. If not, the normal installation is blocked.

**The check happens when an app is installed or updated.** It does not remove apps that are already installed and running.

Google is rolling this out gradually:

| When | What happens |
|------|--------------|
| August 2026 | Free "limited distribution" developer accounts open worldwide |
| September 30, 2026 | Verification is enforced in **Brazil, Indonesia, Singapore and Thailand** |
| 2027 | Enforcement expands to the **rest of the world** |

Details are published by Google on the [Android developer verification](https://developer.android.com/developer-verification) pages, including a [FAQ](https://developer.android.com/developer-verification/guides/faq). Google may still adjust dates and details; this page will be updated as the rollout progresses.

## Does this affect me?

- **Building AAPS is not affected at all.** The [browser build](#browser-build), the [Android Studio build](ComputerBuild.md) and the [CLI build](CLIBuild.md) work exactly as before, and your keystore does not change.
- **Your current AAPS keeps running.** Verification is only checked when installing or updating an app.
- **If you live in Brazil, Indonesia, Singapore or Thailand:** installing or updating **AAPS** by tapping the APK file will be blocked from September 30, 2026. Use one of the [free installation methods](#android-developer-verification-free-methods) below.
- **If you live anywhere else:** nothing changes for you before 2027. You have time, but it is worth reading this page so the change does not surprise you when you update **AAPS**.

(android-developer-verification-free-methods)=

## Free ways to install AAPS

You do **not** need to pay Google anything to keep using **AAPS**. There are three free methods; pick the one that matches your situation.

```{admonition} Which method should I use?
:class: tip
- You built **AAPS** with **Android Studio or the command line** (so you have a computer): use [ADB](#android-developer-verification-adb). It is exempt from verification, has no limits, and needs no Google account.
- You built **AAPS** with the **browser build** and have no computer available: use the [advanced flow](#android-developer-verification-advanced-flow) on your phone.
- You prefer to register with Google so the normal "tap the APK" installation keeps working: use a [free limited distribution account](#android-developer-verification-limited-account) (available from August 2026).
```

(android-developer-verification-adb)=

### Option 1: Install with ADB (computer needed)

ADB (Android Debug Bridge) is Google's official tool for installing apps from a computer onto a phone with a USB cable. Google has confirmed that **apps installed with ADB do not require verification** — there is no waiting period, no device limit and no registration.

One-time preparation:

1. On your phone, enable the hidden developer options: go to **Settings** > **About phone** (on some phones **Software information**) and tap **Build number** seven times, until the phone confirms you are a developer.
1. Go back to the main **Settings**, open the new **Developer options** entry and enable **USB debugging**.
1. On your computer, make sure ADB is available:
   - If you use **Android Studio**, ADB is already installed with it.
   - Otherwise, download Google's free [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) and unzip the folder. No installation is needed; ADB is the `adb` program inside that folder.

Installing (and later updating) **AAPS**:

1. Connect the phone to the computer with a USB cable.
1. On the phone, accept the **Allow USB debugging?** prompt (the first time only).
1. On the computer, open a terminal (command prompt) in the folder containing ADB and the **AAPS** APK file, and run:

   ```
   adb install -r app-full-release.apk
   ```

   Replace `app-full-release.apk` with the actual name of your APK file. The `-r` option updates an already installed **AAPS** while keeping all its data and settings.

1. Wait for `Success` to be displayed. **AAPS** is now installed on your phone.

The same command is used for every future update. The [Wear OS pages](../WearOS/WearOsSmartwatch.md) already use ADB in the same way to install the watch app.

(android-developer-verification-advanced-flow)=

### Option 2: The "advanced flow" on your phone (no computer needed)

Google provides an escape hatch for experienced users who understand the risks of installing unverified apps, called the **advanced flow**. It is a one-time setup on the phone itself:

1. Enable **Developer Mode** in the phone settings (see step 1 of the ADB method above).
1. Confirm on the phone that you want to allow installing apps from unverified developers, and that nobody is pressuring or guiding you to do this (this is a protection against scammers).
1. The phone imposes a **one-day waiting period**, after which you confirm again with your fingerprint, face unlock or PIN.
1. You can allow unverified installations for 7 days or indefinitely.

After this setup, installing the **AAPS** APK works as it does today, with one extra warning that the app is from an unverified developer — choose **Install anyway**.

```{note}
The advanced flow becomes available on phones when verification is enforced in your region. Google may still change the exact screens and steps; this section will be updated with screenshots once the final version is available.
```

(android-developer-verification-limited-account)=

### Option 3: Register with Google (free limited distribution account)

Google offers a **free** developer account type for hobbyists and personal use, called a **limited distribution account**:

- You only need an email address — **no government ID** and **no fee** (unlike the paid developer account, which is not needed for personal **AAPS** use).
- You register your app and authorize the phones it may be installed on, up to **20 devices**, through a handshake with a QR code or link between the phone and Google's Android Developer Console.
- Once registered, the normal installation (tapping the APK file) works again on the authorized phones.

```{warning}
Limited distribution accounts open worldwide in **August 2026** (early access is currently closed). Google has also not yet explained how registration will work when many people build the same open-source app: every self-built **AAPS** uses the same package name (`info.nightscout.androidaps`) with a different signing key, and Google's FAQ states that a package name already in use by others may require additional review.

For these reasons, step-by-step instructions cannot be written yet. This section will be completed when the registration is open and has been tested with **AAPS**. In the meantime, ADB and the advanced flow above are reliable alternatives.
```

## What does not change

- Building **AAPS** yourself, with any of the three [build methods](BuildingAaps.md).
- Your GitHub account, your fork and your keystore.
- Your installed **AAPS** app, your settings and your [objectives](CompletingTheObjectives.md).
- Phones without Google services, and [ADB installations](#android-developer-verification-adb) in general.

## Where to get help

1. **Read** Google's [developer verification FAQ](https://developer.android.com/developer-verification/guides/faq) for questions about the verification itself.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md), if an installation is blocked.
3. When asking for help, include your phone make and model, Android version, your country, and the exact message displayed when the installation fails.
