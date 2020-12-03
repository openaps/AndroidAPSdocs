Manual Installation of Google Play Service for  Sony Smartwach 3
#####################################################################

The Sony Smartwach 3 is one of the most popular watches to be used with AAPS. Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS and above. 

The following workaround should extend the time the Sony Smartwatch 3 can be used but keep in mind that the need to switch to a new smartwatch will come sooner or later.

1. Download the latest GService for Wear OS
--------------------------------------------------------
* Using apkmirror website you can find the latest apk for "Google Play Services (Wear OS)".
* `This link <https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/google-play-services-android-wear-20-21-17-release/google-play-services-wear-os-20-21-17-050300-316502805-android-apk-download/>`_ will give you the page of GService v20.21.17 which is the latest available on 2020-06-25.
* You must ensure 2 things:

   * Is it the latest version?
   * Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

* Soon or later, Google will definitely drop android 6.0. When this will happen, the latest version will not be available anymore for android 6.0+, therefore it will be the end.

2. Download/Install adb debugging tools on your computer
--------------------------------------------------------
* There are multiple ways to install the adb debugging tool.
* One of the easiest ways to have it installed and working: Just download and install `'15 seconds adb installer v1.4.3' <https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/>`_

3. Enable ADB Debugging options on your watch
--------------------------------------------------------
* Enable developer mode by going to Settings --> About --> Build number
* Click it 7 times.
* Now go to Settings --> Developer Options --> ADB Debugging (enable)

4. Connect your watch to your computer
--------------------------------------------------------
* Then plug your smartwatch to PC.
* Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
* Place this APK to C: and open Windows PowerShell window in that location (Shift + Right Click).
* Then using the terminal, type "adb devices".
* After a moment, you should get a prompt asking for debugging permission on your watch: accept.
* In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
* If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
* If you struggle at this step, you may need specific drivers or else for your watch. Google will be your best friend at this point.
* Then wait, the installation can take several minutes. 

5. Send the app to your watch
--------------------------------------------------------
* In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).
* Wait for about 4–5 minutes for installation to complete. 
* Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.

6. More
--------------------------------------------------------
* You can follow this step and install any apk you want, but it is not recommended installing apk not made for Wear OS even if it works ;)
* More apps installable this way on your watch if you don't want to wait for app sync:

   * `Google Messages (SMS), latest is v6.1.095 on 2020-06-25 <https://www.apkmirror.com/apk/google-inc/android-messages-android-wear/android-messages-android-wear-6-1-095-release/messages-wear-os-6-1-095-yeti_rc09-wear_dynamic-android-apk-download/>`_
   * `Google Maps, latest is v10.35.2 (android 6.0+) on 2020-06-25 <https://www.apkmirror.com/apk/google-inc/maps-navigation-transit-android-wear/maps-navigation-transit-android-wear-10-35-2-release/google-maps-navigate-explore-wear-os-10-35-2-android-apk-download/>`_

* The GMaps is a good example about obsolete versions: 

   * On 2020-06-25, the real latest available is v10.43.2
   * But it's android 7.0+ only
   * So don't expect GMaps to work indefinitely for your watch, it will stop working soon or later.
