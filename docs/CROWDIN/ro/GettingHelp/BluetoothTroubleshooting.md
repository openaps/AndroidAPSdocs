(bluetoothtroubleshooting-bluetooth-related-issues)=

# Probleme legate de Bluetooth

Some users have been running into issues with Omnipod DASH activation failures, Medtrum Nano connectivity problems, and other pod errors related to Bluetooth. Many of these issues can be traced to one of the following issues.

Some of these issues likely apply to other Bluetooth Insulin pumps too, the Medtrum Nano has known issues with nearby device permission as well as the Omnipod DASH.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Cannot start Omnipod with Android 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this version has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Optimizarea bateriei pentru Bluetooth

Newer versions of Android have enabled Battery optimisation for the system Bluetooth app. This is known to cause some issues for Bluetooth pumps and CGMs.

If you followed the [Setup Wizard](../SettingUpAaps/SetupWizard.md) and followed the configuration settings in the [Bluetooth Battery Optimisation](#setup-wizard-bluetooth-battery-optimisation) section then this setting should be correct, however if you followed an older version of this guide it's possible you have not changed this setting.

Verify this is correctly configured if you have pump and CGM disconnections.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps that use the "Nearby devices" Android permission can cause connection drops and Pod activation problems

Android allows you to control what each app is able to do or access on your phone via a permission model. Pentru fiecare aplicație instalată puteți alege să permiteți sau să refuzați anumite permisiuni, de exemplu accesul la fișierele de pe dispozitiv, accesul la Bluetooth, căutarea dispozitivelor din apropiere etc.

**AAPS** requires a number of specific permissions to function, one which is required to ensure that Pods work is the "Nearby devices" permission. There are many other applications which also require this permission, the community is finding that a number of applications when they are granted this permission can cause issues with activating new Pods on some devices.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Apps that use "Nearby device" permissions and are known to have caused problems:

Apps in this list have been discussed in one or more places in the community as causing problems for Omnipod DASH devices and in some cases Medtrum Nano too.

```{admonition} Updating the list
:class: note
Ping @XiTatiON on #omnipod-dash Discord channel to discuss apps to be added to this list.
```

- **myBMW** MyBMW interrupted Medtrum Nano and Omnipod DASH. The MyBMW app prompts regarding permission for "find nearby devices" only once, if you don't grant it, it still works absolutely OK

- **Amazon Alexa**  Eliminarea permisiunii „Dispozitive din apropiere” pentru aplicația Alexa a rezolvat problema pentru unele persoane, dar după aceea nu mai puteți asocia dispozitive IoT Matter

- **MINI app**  Appears the app is based on myBMW app and might mirror its behavior as a result

- **BM2** Aplicație de monitorizare a bateriei solare, folosită în unele rulote și sisteme solare de camping: când aplicația rula, a împiedicat activarea unei pompe noi. O soluție temporară este oprirea forțată a aplicației în timp ce activați o pompă nouă. Running the app after that didn't appear to interfere with Dash functionality (On a Pixel 8 Pro running A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Cum retrageți permisiunea „Dispozitive din apropiere” pentru alte aplicații:
If you are facing issues activating a new Pod and you are running on the correct supported version of **AAPS** for your version of Android, it may be necessary to revoke the permission for other apps while activating a new Pod.

Follow this procedure to revoke the "Nearby device" permission for all apps except **AAPS**:

```{admonition} Menus and settings
:class: note
The screenshots and instructions in this guide are from a Vanilla Android 16 install on Google Pixel 8 Pro. Pe alte dispozitive și la alți producători, meniurile și setările probabil nu vor fi exact la fel. Adaptați pașii la dispozitivul dumneavoastră. Dacă nu reușiți, citiți secțiunea [Unde primiți ajutor pentru Dash](#omnipod-dash-where-to-get-help-for-dash) pentru a afla cum cereți ajutor comunității.
```

1. Open Android settings on your phone, scroll down and press on **Security and privacy (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Scroll down and press on **Privacy controls (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Press on **Permission manager (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Scroll down and press on **Nearby devices (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Browse the list of apps and press on the app you wish to revoke **Nearby devices** permissions for.

   In this guide **Android Auto (1)** is the app we will revoke the permission on.

   To avoid bricking more pods we advise everyone initially to revoke the permission on all apps except **AAPS**.

```{admonition} Which app to select?
:class: tip
If you are unsure which app is causing you an issue, disable them all (remember to check the list of known problem apps too and start with those) and if you can spare a few bricked pods on the way, enable the permission on one new app before every new Pod activation, until you can narrow down which app specifically causes your Pod issues. If you do identify new problematic apps please let us know on the #omnipod-dash Discord channel.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. To revoke the permission Press on **Don't allow (1)**, then Press on **Don't allow anyway (2)**. If done correctly you should see **Don't allow (3)** as the selected Toggle option. You can now go back to the **Nearby device** menu by pressing the **Back arrow (4)** and change this setting on other apps if required.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### How to re-enable "Nearby device" permissions for system apps and other apps:

1. Dacă este nevoie, citiți secțiunea **„Cum retrageți permisiunea «Dispozitive din apropiere» pentru alte aplicații”** pentru a afla cum ajungeți la setările de confidențialitate ale aplicațiilor. Apoi, în configurarea **Dispozitive din apropiere**, continuați cu pasul 2.

2. Browse the list of apps and press on the app you wish to allow **Nearby devices** permissions for.

   In this guide **Android Auto (1)** is the app we will allow the permission on.

   You will notice that **Android Auto (1)** is missing in the app list after the permission is revoked. This is because the **Android Auto** app is a **System app** and by default system apps are hidden.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. To show hidden system apps press the **three-dot menu (⋮) (1)** in the top right corner, then press **"Show system" (2)**. You should now be able to see the hidden system app in the list **Android Auto (3)**.

```{admonition} Find your app
:class: tip
If an app is revoked you will need to scroll down until you see the list of revoked apps lower down in the list.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Urmați în ordine inversă instrucțiunile din **„Cum retrageți permisiunea «Dispozitive din apropiere» pentru alte aplicații”** pentru a activa din nou permisiunea pentru fiecare aplicație.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: probleme frecvente de conexiune Bluetooth

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. If you use an **Omnipod DASH** and your phone runs Android 15, turning on the **Bluetooth bonding** setting may help improve the stability of the Bluetooth connection. Pentru a o activa:

```{admonition} Android 16
:class: warning
Only turn on **Bluetooth bonding** on Android 15, and only if you experience connectivity issues. DO NOT turn on bonding on Android 16.
```

1. Open the [Dash settings](#omnipod-dash-settings): open the DASH pump screen with **Manage** > **Pump** and press the **Settings** (gear) icon in the top-right corner.

   ![Ecranul pompei DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Deschideți secțiunea **Setări avansate** și activați **Asociere Bluetooth**.

   ![Asociere Bluetooth în secțiunea Setări avansate](../images/v4/Pumps/dash_settings_advanced.png)

3. If the phone shows a pairing request, accept it.

4. Reporniți telefonul.
