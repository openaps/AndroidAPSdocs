# Phones

[List of tested phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

You can use filters to display particular pumps or phones but please set back to
view all when you've finished looking, ready for the next person to view all.

## Choosing the right phone

Having a wide selection of available Android phones, it's not always easy to
make the right choice. For looping purposes a good battery life is a must and
it's never a bad idea to carry an extra battery and a charging cable with you in
case you need to charge your phone.

Some people prefer bigger screens, faster processors and more memory. If
you belong to that group, [GSMArena](https://www.gsmarena.com/) is a good place
to compare the hardware.

## LineageOS

AndroidAPS will not work with stock Android 7, which is still the operating
system of choice in many smartphones. Android still being open source software,
there are many different Android flavors one can install. The most successful
and trustworthy of them is LineageOS, which has steady updates and very active
development community.

If the phone of your choice requires a LineageOS to work with AndroidAPS, it is
a good idea to also see if it is [officially
supported](https://download.lineageos.org/) by the LineageOS team. Even if the
phone is not listed in the official page, there are usually unofficial builds to
be downloaded from the [XDA Forums](https://forum.xda-developers.com/). Just be
aware there might be no updates for the unofficial build, and in some cases
there might be harmful software included that may cause trouble later on.

LineageOS comes in different versions:

* 14.0 is Android 7.0
* 14.1 is Android 7.1
* 15.0 is Android 8.0
* 15.1 is Android 8.1

If possible, go with the latest version to get security updates and support a bit
longer.

The installation instructions are available for the official builds. Read all
the documentation carefully, but here are the steps in general:

### Platform Tools

To modify phone software, Google provides the [Android platform
tools](https://developer.android.com/studio/releases/platform-tools). From the
setup, we need [adb](https://developer.android.com/studio/command-line/adb) and
[fastboot](https://elinux.org/Android_Fastboot) for Android installations. Both
applications are used from command line and require a little bit of knowledge
how command line tools work. If not sure, it is a good idea to ask help from
people with knowledge how these tools work.

### Developer Mode and USB Debugging

To be able to use `adb`, Android has a secret developer mode that is activated
by tapping a certain item in your phone menu. The item to tap is different
depending on the Android flavor, so search for instructions for your phone and
Android version. When developer mode is enabled, the important setting is USB
debugging, that should be turned on. When connecting the phone to the
computer, the phone should ask to allow this computer to run debugging commands.

To test your setup:

```bash
> adb devices

List of devices attached
4e16981d        device
```

If the device is not listed or it says `Unauthorized`, unplug and plug the
phone, wait for the message to allow debugging and answer yes.

### Unlocking

WARNING: Create backups before doing anything alse. Your data will be lost
otherwise.

The phone has a locked bootloader which prevents any modifications to the system
files. Depending on the manufacturer, unlocking the bootlader can be easy or it
can take days of hard work and frustration. In some cases the phone is
subsidized by having certain 3rd party applications the manufacturer don't want
you to remove, making the process as complex as possible. Normally the
process requires a registration on manufacturer's site asking for unlocking
code, and getting lots of warnings how warranty will be void.

All your data will be deleted and the phone will go back to factory settings, so
the developer mode should be re-enabled and USB debugging turned on again from
the settings.

### Custom bootloader

After unlocking the phone following manufacturer's instructions, it's time to
install a custom bootloader. The most popular is [TWRP](https://twrp.me/),
and it is important to download the right version for your phone. TWRP allows
installation of custom Android systems and is in general a very useful tool to
debug issues and clear a broken installation.

Follow the installation instructions from the TWRP site. You can boot to TWRP
any time from Android by using `adb`:

```bash
> adb reboot recovery
```

### LineageOS

After successfully installing TWRP, format the whole system deleting all data,
copy the installation files for LineageOS, wipe caches and in general follow the
instructions for your phone from LineageOS documentation.

The installation files can be copied to the formatted phone with `adb`:

```bash
> adb push file.zip /sdcard/
```

### Google Apps

LineageOS doesn't include any official application from Google. It is usually a
good idea to go with the minimal Google applications to save battery.
Luckily a project called [The Open Gapps](https://opengapps.org/) provides
packages of different sizes to enable Play Store and needed services to run
Android applications.

If using a secondary phone to run AndroidAPS, it might be a good idea to not
install any Google apps to gain more battery life (and prevent Google's tracking).
