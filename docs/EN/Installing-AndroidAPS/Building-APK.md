# Installing AndroidAPS - Build the APK

This article is divided in two parts.
* In the overview part you will get the explanation on what steps are necessary in general to build the APK file.
* In the step by step walkthrough part you will find the screenshots of a concrete installation. Because the versions of Android Studio - the software development environment which we will use to build the APK will - change very quickly this will be not identical to your installation but it should give you a good starting point. If you find something important wrong or missing please inform the facebook group "AndroidAPS" users though can have a look on this.

## Overview

In general description of the steps necessary to build the APK file.

* Install Android Studo the software development environment used for building the AndroidAPS app.
* Use git to clone the source code from the central Github repository where the developer put the actual code for the app.
* Open the cloned project in Android Studio as active project.
* Configure the build variants.
* Build the signed APK.
* Transfer the signed APK to you smartphone.

## Step by step walkthrough

Detailed description of the steps necessary to build the APK file.

--
* Install [Android Studio](https://developer.android.com/studio/install.html).
* Configure Android Studio during first start

Select "Do not import settings" as you have not used it before.
![Screenshot 1](../../images/Installation_Screenshot_01.png)

Click "Next".
![Screenshot 2](../../images/Installation_Screenshot_02.png)

Select "Standard installation" and click "Next".
![Screenshot 3](../../images/Installation_Screenshot_03.png)

Select "Intellij" as UI (user interface) theme and click "Next".
![Screenshot 4](../../images/Installation_Screenshot_04.png)

Click "Next" on the "Verify Settings" dialog.
![Screenshot 5](../../images/Installation_Screenshot_05.png)

* Use git clone in Android Studio as shown in screenshot below.

![Screenshot 6](../../images/Installation_Screenshot_06.png)
![Screenshot 7](../../images/Installation_Screenshot_07.png)
![Screenshot 8](../../images/Installation_Screenshot_08.png)
![Screenshot 9](../../images/Installation_Screenshot_09.png)
![Screenshot 10](../../images/Installation_Screenshot_10.png)

![Screenshot 11](../../images/Installation_Screenshot_11.png)
![Screenshot 12](../../images/Installation_Screenshot_12.png)
![Screenshot 13](../../images/Installation_Screenshot_13.png)
![Screenshot 14](../../images/Installation_Screenshot_14.png)
![Screenshot 15](../../images/Installation_Screenshot_15.png)
![Screenshot 16](../../images/Installation_Screenshot_16.png)
![Screenshot 17](../../images/Installation_Screenshot_17.png)
![Screenshot 18](../../images/Installation_Screenshot_18.png)
![Screenshot 19](../../images/Installation_Screenshot_19.png)
![Screenshot 20](../../images/Installation_Screenshot_20.png)

![Screenshot 21](../../images/Installation_Screenshot_21.png)
![Screenshot 22](../../images/Installation_Screenshot_22.png)
![Screenshot 23](../../images/Installation_Screenshot_23.png)
![Screenshot 24](../../images/Installation_Screenshot_24.png)
![Screenshot 25](../../images/Installation_Screenshot_25.png)
![Screenshot 26](../../images/Installation_Screenshot_26.png)
![Screenshot 27](../../images/Installation_Screenshot_27.png)
![Screenshot 28](../../images/Installation_Screenshot_28.png)
![Screenshot 29](../../images/Installation_Screenshot_29.png)
![Screenshot 30](../../images/Installation_Screenshot_30.png)

![Screenshot 31](../../images/Installation_Screenshot_31.png)
![Screenshot 32](../../images/Installation_Screenshot_32.png)
![Screenshot 33](../../images/Installation_Screenshot_33.png)
![Screenshot 34](../../images/Installation_Screenshot_34.png)
![Screenshot 35](../../images/Installation_Screenshot_35.png)
![Screenshot 36](../../images/Installation_Screenshot_36.png)
![Screenshot 37](../../images/Installation_Screenshot_37.png)
![Screenshot 38](../../images/Installation_Screenshot_38.png)
![Screenshot 39](../../images/Installation_Screenshot_39.png)
![Screenshot 40](../../images/Installation_Screenshot_40.png)

![Screenshot 41](../../images/Installation_Screenshot_41.png)
![Screenshot 42](../../images/Installation_Screenshot_42.png)
![Screenshot 43](../../images/Installation_Screenshot_43.png)
![Screenshot 44](../../images/Installation_Screenshot_44.png)
![Screenshot 45](../../images/Installation_Screenshot_45.png)
![Screenshot 46](../../images/Installation_Screenshot_46.png)
![Screenshot 47](../../images/Installation_Screenshot_47.png)
![Screenshot 48](../../images/Installation_Screenshot_48.png)
![Screenshot 49](../../images/Installation_Screenshot_49.png)
![Screenshot 50](../../images/Installation_Screenshot_50.png)

--


* Run Android Studio and select 'Open an existing Android Studio project', selecting the location of the extracted files.

* You might get an error message about not finding build tools - click on the links Android Studio provides to download all the software updates suggested.
 
* Go to Build Menu and click on Generate Signed APK

* Select 'app' as Module
![Select 'app' as Module](https://user-images.githubusercontent.com/9692866/38299495-8885e446-37fa-11e8-9d19-cb05fd1bb506.png)

* Set a keystore and password, if this is your first time then Create new, or fill in the details of your existing one.  For more information about using the keystore see [https://developer.android.com/studio/publish/app-signing.html#generate-key](https://developer.android.com/studio/publish/app-signing.html#generate-key)

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png]]

* 'Release' should be your default choice for "Build Type", 'Debug' is just for people coding.
* Select the build type you want to build. 
    * full (i.e. recommendations automatically enacted in closed looping)
    * openloop (i.e. recommendations given to user to manually enact)
    * pumpcontrol (i.e. remote control for pump, no looping)
    * nsclient (i.e. looping data of another user is displayed and careportal entries can be added)

*   Select V1 "Jar Signature" (V2 is optional) and click Finish. 

![release full signatuer](https://user-images.githubusercontent.com/9692866/38299493-8838e38a-37fa-11e8-8c28-3fa6071e7a76.png)

* Please wait for some time until the APK is created. You will get the pop-up below when the process is done.

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png]]

* Click on 'Show in Explorer'. You'll find the APK is generated, sometimes it may take time to display.

* Copy the APK with the same filename as the buildtype you chose to your android phone, and install it.  If the apk does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so.
