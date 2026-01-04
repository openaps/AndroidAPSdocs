(bluetoothtroubleshooting-bluetooth-related-issues)=

# **Bluetooth related issues**

Some users have been running into issues with Omnipod DASH activation failures, Medtrum Nano connectivity problems, and other pod errors related to Bluetooth. Many of these issues can be traced to one of the following issues.

Some of these issues likely apply to other Bluetooth Insulin pumps too, the Medtrum Nano has known issues with nearby device permission as well as the Omnipod DASH.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Cannot start Omnipod with Android 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this versions has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps that use the "Nearby devices" Android permission can cause connection drops and Pod activation problems

Android allows you to control what each app is able to do or access on your phone via a permission model. For each app installed you can choose to allow or deny specific permissions, e.g. access files on the device, access to bluetooth, scan for nearby devices etc.

**AAPS** requires a number of specific permission to function, one which is required ensure that Pods work is the "Nearby devices" permission. There are many other applications which also require this permission, the community is finding that a number of applications when they are granted this permission can cause issues with activating new Pods on some devices.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### **Apps that use "Nearby device" permissions and are known to have caused problems:**

Apps in this list have been discussed in one or more places in the community as causing problems for Omnipod DASH devices and in some cases Medtrum Nano too.

```{admonition} Updating the list
:class: note
Ping @XiTatiON on #omnipod-dash Discord channel to discuss apps to be added to this list.
```

- **myBMW** MyBMW interrupted Medtrum Nano and Omnipod DASH. The MyBMW app prompts regarding permission for "find nearby devices" only once, if you don't grant it, it still works absolutely OK

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IOT devices

- **MINI app**  Appears the app is based on myBMW app and might mirror it's behavior as a result

- **BM2** Solar Battery Monitoring app, used in a some camper van and camping solar setups, when the app is running it prevented activation of a new Pod. Force Stopping the app while activating an new pod is a workaround to the issue. Running the app after that didn't appear to interfere with Dash functionality (On a Pixel 8 Pro running A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### **How to revoke "Nearby device" permissions for other apps:**
If you are facing issues activating a new Pod and you are running on the correct supported version of **AAPS** for your version of Android. It may be necessary to revoked the permission for other apps while activating a new Pod.

Follow this procedure to revoked the "Nearby device" permission for all apps except **AAPS**:

```{admonition} Menus and settings
:class: note
The screenshots and instructions in this guide are from a Vanilla Android 16 install on Google Pixel 8 Pro. Other manufactures and devices will likely not exactly match these menus and settings descriptions, adjust the steps to suit the device you have and if you are stuck see [Where to get help for dash](#omnipod-dash-where-to-get-help-for-dash) section on how to reach out to the community for support.
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

### **How to re-enable "Nearby device" permissions for system apps and other apps:**

1. If required Reference the **"How to revoke "Nearby device" permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

2. Browse the list of apps and press on the app you wish to allow **Nearby devices** permissions for.

   In this guide **Android Auto (1)** is the app we will allow the permission on.

   You will notice that **Android Auto (1)** is missing in the app list after the permission is revoked. This is because the **Android Auto** app is a **System app** and by default system apps are hidden.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. To show hidden system apps Press on the **Three Dotted Lines (Hamburger) (1)**, then Press on **"Show System (1)"**. You should now be able to see the hidden system app in the list **Android Auto (3)**.

```{admonition} Find your app
:class: tip
If an app is revoked you will need to scroll down until you see the list of revoked apps lower down in the list.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Follow the guidance in **"How to revoke "Nearby device" permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15 Frequent Bluetooth connection problems

Nach einem Android-Upgrade oder dem Umzug auf ein neueres Smartphone verliert **AAPS** häufig die Bluetooth-Verbindung zur Pumpe. Mit einem Neustart des Smartphones verschwindet das Problem vorübergehend. If the phone runs Android 15. Enabling the **Bond BT device on Android 15+** setting within **AAPS** settings may help improve stability of Bluetooth connections, follow guide below to enable this:

```{admonition} Android 16
:class: warning
Only enable the **Bond BT device on Android 15+** option on Android 15, and only if you experience connectivity issues. DO NOT enable bonding option on Android 16.
```

1) **Öffne die Einstellungen** durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm.

   ![Einstellungen öffnen](../images/Pref2020_Open2.png)

2. Scrolle ganz herunter und öffne das **Bestätigungstöne** / **Erweitertes**-Untermenü. Aktiviere **Verbinde BT-Gerät bei Android 15+**.

   ![BondBT](../images/troubleshooting/BondBT.png)


3. Wenn die Pumpe eine Koppelungsanfrage schickt, nimm Sie sie an.

4. Starte dein Smartphone neu.
