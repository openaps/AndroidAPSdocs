(bluetoothtroubleshooting-bluetooth-related-issues)=

# Bluetooth related issues

Некоторые пользователи сталкиваются с проблемами при активации Omnipod DASH, запуском Medtrum Nano и другими ошибками патч-помп, которые связаны с работой Bluetooth. Большинство этих проблем связаны с причинами, описанными ниже.

Некоторые из этих проблем, вероятно, могут возникнуть и у других помп, использующих Bluetooth. Например, и у Medtrum Nano и у Omnipod DASH наблюдается проблема, связанная с разрешениями для устройств поблизости.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Невозможно запустить Omnipod на Android 16
- Минимальная версия **AAPS**, требующаяся для корректной работы Omnipod DASH на Android 16 - 3.3.2.1, так как в ней устранены специфичные проблемы Omnipod, появившиеся в Android 16.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Оптимизация энергопотребления Bluetooth-устройств

В новых версиях Android для системных Bluetooth-приложений включена оптимизация энергопотребления. Известно, что это может вызывать проблемы с Bluetooth помпами и НМГ.

Если вы следовали инструкциям [Мастера установки](../SettingUpAaps/SetupWizard) и выполнили настройки из раздела [Оптимизация энергопотребления Bluetooth](#setup-wizard-bluetooth-battery-optimisation), то этот параметр должен быть установлен правильно. Однако если вы следовали более ранней версии этого руководства, возможно, вы не меняли этот параметр.

Убедитесь в правильности этой настройки если ваша помпа или НМГ регулярно отключается.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Приложения, использующие разрешение "Устройства поблизости", могут вызывать потерю соединения или проблемы активации подов

Android allows you to control what each app is able to do or access on your phone via a permission model. For each app installed you can choose to allow or deny specific permissions, e.g. access files on the device, access to Bluetooth, scan for nearby devices etc.

**AAPS** requires a number of specific permission to function, one which is required ensure that Pods work is the "Nearby devices" permission. There are many other applications which also require this permission, the community is finding that a number of applications when they are granted this permission can cause issues with activating new Pods on some devices.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Apps that use "Nearby device" permissions and are known to have caused problems:

Приложения из этого списка неоднократно обсуждались в сообществе как вызывающие проблемы в работе Omnipod DASH, а в некоторых случаях и Medtrum Nano.

```{admonition} Updating the list
:class: note
Обратитесь к @XiTatiON на канале #omnipod-dash в Discord, чтобы обсудить добавление новых приложений в этот список.
```

- **myBMW** MyBMW interrupted Medtrum Nano and Omnipod DASH. The MyBMW app prompts regarding permission for "find nearby devices" only once, if you don't grant it, it still works absolutely OK

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IOT devices

- **MINI app**  Appears the app is based on myBMW app and might mirror it's behavior as a result

- **BM2** Solar Battery Monitoring app, used in a some camper van and camping solar setups, when the app is running it prevented activation of a new Pod. Force Stopping the app while activating an new pod is a workaround to the issue. Running the app after that didn't appear to interfere with Dash functionality (On a Pixel 8 Pro running A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### How to revoke "Nearby device" permissions for other apps:
Если у вас возникли проблемы с активацией нового пода и вы используете правильную, поддерживаемую версию **AAPS**, совместимую с вашей версией Android. На время активации нового пода может потребоваться отозвать разрешения у других приложений.

Выполните следующую инструкцию для отзыва разрешения "Устройства поблизости" для всех приложений кроме **AAPS**:

```{admonition} Menus and settings
:class: note
Скриншоты и инструкции в этом руководстве даны для ванильного Android 16 на смартфоне Google Pixel 8 Pro. Перевод на русский сделан в соответствии с локалью Samsung S25. Другие производители и устройства могут выглядеть несколько иначе, адаптируйте инструкцию под свое устройство, а если возникнут непреодолимые сложности обратитесь к разделу [Где получить помощь с дешем](#omnipod-dash-where-to-get-help-for-dash), чтобы понять, как обратиться к сообществу для помощи.
```

1. Откройте настройки Android на телефоне, прокрутите вниз и выберите раздела **Безопасность и конфиденциальность (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Прокрутите вниз и выберите **Другие настройки конфиденциальности (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Выберите **Диспетчер разрешений (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Прокрутите вниз и выберите **Устройства поблизости (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Посмотрите список приложений и выберите те, для которых хотите отозвать разрешение **Устройства поблизости**.

   В этой инструкции мы отзовем разрешение у приложения **Android Auto (1)**.

   Чтобы избежать "окирпичивания" подов мы рекомендуем отозвать разрешение у всех приложений, кроме **AAPS**.

```{admonition} Which app to select?
:class: tip
Если вы не уверены, какое именно приложение вызывает проблему, отзовите разрешение у всех (сперва отзовите разрешение у известных проблемных приложений) и если вы можете позволить себе загубить несколько подов - возвращайте разрешение по одному перед каждой новой активацией пода до тех пор, пока не выясните какое именно приложение вызывает проблему с подами у вас. Если вы обнаружили новые проблемные приложения, пожалуйста, дайте нам знать о них на канале #omnipod-dash в Discord.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Чтобы отозвать разрешение, нажмите на **Запретить (1)**, затем нажмите **Все равно запретить (2)**. Если все сделано правильно, будет выбрана опция **Запретить (3)**. Теперь вы можете вернуться в меню **Устройства поблизости**, нажав **стрелку "Назад" (4)** и изменив это разрешение в других приложениях.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### How to re-enable "Nearby device" permissions for system apps and other apps:

1. If required Reference the **"How to revoke "Nearby device" permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

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

5. Follow the guidance in **"How to revoke "Nearby device" permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15 Frequent Bluetooth connection problems

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. If you use an **Omnipod DASH** and your phone runs Android 15, turning on the **Bluetooth bonding** setting may help improve the stability of the Bluetooth connection. To turn it on:

```{admonition} Android 16
:class: warning
Only turn on **Bluetooth bonding** on Android 15, and only if you experience connectivity issues. DO NOT turn on bonding on Android 16.
```

1. Open the [Dash settings](#omnipod-dash-settings): open the DASH pump screen with **Manage** > **Pump** and press the **Settings** (gear) icon in the top-right corner.

   ![The DASH pump screen](../images/v4/Pumps/dash_pump_screen.png)

2. Open the **Advanced Settings** section and turn on **Bluetooth bonding**.

   ![Bluetooth bonding in the Advanced Settings section](../images/v4/Pumps/dash_settings_advanced.png)

3. If the phone shows a pairing request, accept it.

4. Restart your phone.
