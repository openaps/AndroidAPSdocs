# Come configurare un telefono Huawei

**Which phones this page covers:** Huawei phones running **EMUI 12 to EMUI 15**. All of these are based on Android 12, the minimum for the current version of **AAPS**. On a phone with an older EMUI version, you can only use an [older AAPS version](#maintenance-android-version-aaps-version).

```{admonition} Telefoni con HarmonyOS NEXT / HarmonyOS 5 :class: warning

I telefoni Huawei recenti venduti in Cina usano HarmonyOS NEXT (HarmonyOS 5 e successivi). This system is not Android anymore and cannot run **AAPS**. ```

Huawei phones close apps running in the background very aggressively. Apply all the settings below to **AAPS** and to your CGM app (for example xDrip+ or Juggluco), otherwise the loop and glucose readings may stop when the screen is off.

Menu names can differ slightly between models. If you can't find a setting, type its name in the search bar at the top of **Settings**.

The screenshots below come from an older EMUI version. Le impostazioni sono le stesse su EMUI da 12 a 15.

## Ignore battery optimization

1. Open **Settings > Apps > Apps**.
2. Tap the menu **⋮** in the top right corner and select **Special access > Battery optimization**.
3. Tap the arrow at the top of the list and select **All apps**.
4. Select **AAPS** and choose **Don't allow**. Huawei won't optimize apps in this list anymore.
5. Repeat for your CGM app.

![Huawei - ignore battery optimization](../images/Huawei_BatteryOptimization.png)

## App launch: allow running in the background

1. Open **Settings > Battery > App launch** (or **Settings > Apps > Apps >** select the app **> Battery > App launch**).
2. Find **AAPS** and turn off **Manage automatically**.
3. In the **Manage manually** window, turn on all three options: 
    - **Auto-launch**
    - **Secondary launch** (can be launched by other apps)
    - **Run in background**
4. Repeat for your CGM app.

![Huawei - opzioni della batteria](../images/Huawei_BatteryOptions.png)

## Lock AAPS in the recent apps

Locked apps are not closed when you clear the recent apps list.

1. Open the recent apps list.
2. Scorri verso il basso sulla scheda di **AAPS**. A lock symbol appears on the card.
3. Do the same for your CGM app.

![Huawei - lock app](../images/Huawei_LockApp.png)

## Modalità risparmio energetico

Keep **Power saving mode** and **Ultra power saving** turned off (**Settings > Battery**). They close background apps regardless of the settings above.

## Se AAPS si ferma ancora in background

See [Don't kill my app](https://dontkillmyapp.com/huawei) for more Huawei-specific solutions.

## Telefoni Honor

Honor is a separate brand now and its phones run MagicOS instead of EMUI. The background settings are very similar: look for **App launch** in the app's battery settings, turn off **Manage automatically** and allow all three options, then remove the app from battery optimization.