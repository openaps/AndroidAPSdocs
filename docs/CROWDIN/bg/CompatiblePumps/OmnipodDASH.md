# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**. The DASH driver is a well-established way to loop with Omnipod.

```{contents} Table of contents
:depth: 1
:local: true
```

## Спецификации на Omnipod DASH

Key characteristics of the **Omnipod DASH** ('DASH'):

- The DASH pods are identified by a **blue needle cap** (the older EROS pod has a clear needle cap). Пачовете иначе са идентични по физически размери.
- DASH не изисква BLE връзка/устройство мост (bridge) (не е нужен RileyLink, OrangeLink или EmaLink).
- Bluetooth връзката на DASH се използва само при изпращане на команда (напр. болус) и се прекъсва веднага след изпращането на командата.
- **AAPS** ще изчака достъпността на пача, за да изпрати команди.
- При активиране на пач, **AAPS** ще открие и свърже нов DASH пач.
- Очакван обхват от телефона: 5-10 метра (може да варира).

(omnipod-dash-constraints)=

## Известни ограничения/проблеми на AAPS с Omnipod DASH
- General advice is to run **AAPS** on Android 14 or 16. Android 15 has many reported [issues](https://github.com/nightscout/AndroidAPS/issues/3471) from the community. However, if you do run on Android 15 you will likely need to turn on **Bluetooth bonding** (in the **Advanced Settings** section of the [Dash settings](#omnipod-dash-advanced-settings)) to successfully activate and use Pods, see [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) for more info on the Bonding settings.
- DST and timezone changes are not applied automatically. After a clock change you must update the pod manually: press **Refresh** on the DASH pump screen, then press **Set time** (shown when the pod and phone time zones differ) or perform a **Profile Switch** (see [Timezone change for Omnipod Dash](#timezone-traveling-with-pumps)).
- Dash поддържа базален темп само със стъпки от 0.05 U/h. Ако се опитате да зададете базал със стъпки от 0.01 във вашия **AAPS профил**, AAPS няма да покаже предупреждение, въпреки че пачът ще закръгли темпа до стъпки от 0.05. If you open **Pod History** on the DASH pump screen, it will display that 0.05 basal was set. Това също означава, че най-ниският базален темп, позволен от DASH в **AAPS**, е 0.05U/h.
- The settings file contains the active Pod session. Export your settings after each Pod activation, and see [Export and import settings](#omnipod-dash-export-import) before importing settings.
- При задаване на нов профил на базалния темп, DASH ще спре доставката, преди да зададе новия базален **Профил**. Ако възникне прекъсване или грешка в комуникацията, базалният профил няма автоматично да се рестартира. Вижте раздел [Възобновяване на доставката на инсулин](#omnipod-dash-resuming-insulin-delivery) за подробности.
- Ако предупрежденията (alerts) са конфигурирани и пачът наближава изтичане на срока, пачът ще продължи да издава звуков сигнал, докато предупрежденията не бъдат заглушени – вижте [Заглушаване на предупрежденията от пача](#omnipod-dash-silencing-pod-alerts) за подробности.
- Съществуват редица известни проблеми с Bluetooth, които могат да причинят проблеми с активирането на пача.  (вижте Отстраняване на проблеми за съвети относно други Bluetooth проблеми), по-специално раздела Проблеми, свързани с Bluetooth.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## Hardware and software requirements

- Omnipod DASH се разпознава по синята капачка на иглата.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **Съвместим Android телефон** с Bluetooth Low Energy (BLE) (вижте [Phones](../Getting-Started/Phones.md) за повече информация); допълнително следната информация ще ви помогне да разберете други ключови съображения относно успешното активиране и използване на DASH на съвместим телефон:
    -  Драйверът на **AAPS** за Omnipod Dash се свързва с DASH пача чрез Bluetooth. **AAPS** автоматично ще установява нова Bluetooth връзка с пача всеки път, когато трябва да изпрати команда (напр. болус), а след изпращането на командата Bluetooth връзката веднага се прекъсва.
       - **NOTE:**
         - Bluetooth връзката може да бъде прекъсвана/смущавана от други Bluetooth устройства, свързани към телефона, на който работи **AAPS**, като слушалки и др... Такива устройства могат да причинят грешки във връзката или проблеми с активирането на пача при някои модели телефони. It's a good idea to review the [tested hardware setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) list for known working configurations when choosing the phone for an Omnipod DASH setup.
         - Съществуват редица известни проблеми с Bluetooth, които могат да причинят проблеми с активирането на пача (вижте [Отстраняване на проблеми](#troubleshooting) за съвети относно други Bluetooth проблеми), по-специално раздела [Проблеми, свързани с Bluetooth](#omnipod-dash-bluetooth-related-issues).
    - The phone must run **Android 12 or newer**, with **AAPS** built and installed using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions. Always run the latest released version.
- Поддържано [**устройство за непрекъснато следене на КЗ (CGM)**](../Getting-Started/CompatiblesCgms.md)

По-долу инструкциите обясняват как да активирате нова сесия на пач с помощта на **AAPS**. Трябва да изчакате текущият ви пач да наближи изтичане на срока, тъй като ще трябва да активирате нов пач с **AAPS**. След като пач бъде деактивиран, той не може да бъде използван повторно/реактивиран – деактивирането е окончателно.

## Before you begin

Уверете се, че сте прочели и разбрали цялото това ръководство, сте прочели и разбрали раздела **Преди да започнете**, както и **[Ограничения и проблеми на Omnipod и AAPS](#omnipod-dash-constraints)**, за да избегнете попадането в познат проблем.

### **НА ПЪРВО МЯСТО БЕЗОПАСНОСТ** - **НЕ СЛЕДВА** да опитвате да свържете **AAPS** с пач за първи път, без да имате достъп до всичко следното:
1. Резервни пачове (3 или повече)
2. Резервен инсулин и писалка
3. Работещ Omnipod PDM (в случай че **AAPS** откаже)
4. Поддържан телефони – задължително! (вижте [Изисквания към хардуера/софтуера](#hardware-software-requirements))
5. Правилната версия на AAPS, компилирана и инсталирана

### Вашият Omnipod Dash PDM ще стане излишен, след като драйверът на AAPS за Dash активира пача ви.
- Преди да използвате **AAPS**, вие или вашият болногледач сте управлявали пача с помощта на Omnipod PDM (или в някои региони – приложение за телефон), за да изпращате команди към DASH (напр. болус).
- DASH може да поддържа връзка само с едно Bluetooth устройство (напр. PDM или телефон) за управление и изпращане на команди.
- Устройството, което успешно активира пача, е единственото устройство, на което е позволено да комуникира с този пач от този момент нататък. Това означава, че веднъж активирате ли DASH с вашия Android телефон чрез **AAPS**, **вече няма да можете да използвате своя PDM с този пач!** Докато пачът е активен, драйверът на **AAPS** за Dash, работещ на вашия Android телефон, е новият PDM за вашия пач.
- **НЕ ИЗХВЪРЛЯЙТЕ своя PDM!** Препоръчително е да го запазите като резервен вариант и за спешни случаи, например когато изгубите телефона си или **AAPS** не работи правилно.

### Вашият пач **НЯМА** да спре да доставя инсулин, когато не е свързан с AAPS.
Стандартните базални темпове се програмират на пача при активиране, както са дефинирани в текущо активния [**Profile**](../SettingUpAaps/YourAapsProfile.md).  
Докато **AAPS** е работоспособен, той ще изпраща команди за корекция на базалния темп, които се изпълняват максимум 120 минути.  
Ако по някаква причина пачът не получи нови команди (например заради загубена комуникация поради разстояние между пача и телефона), пачът автоматично ще се върне към стандартните базални темпове, дефинирани в неговия [**Profile**](../SettingUpAaps/YourAapsProfile.md).

### Профилите на AAPS не поддържат 30-минутни времеви интервали за базалния темп
Ако сте нови в **AAPS** и настройвате своя [</strong>Профил</0>](../SettingUpAaps/YourAapsProfile.md) за базалния темп за първи път, имайте предвид, че базални темпове, започващи на половин час, не се поддържат. Например, на вашия Omnipod PDM, ако имате базален темп от 1.1 единици, който започва в 09:30 и има продължителност 2 часа, завършваща в 11:30, не е възможно да възпроизведете точно този базален **Профил** в **AAPS**. Ще трябва да промените този базален темп от 1.1 единици на времеви диапазон 9:00-11:00 или 10:00-12:00. Въпреки че самият хардуер на DASH поддържа 30-минутни интервали за базалния **Профил**, **AAPS** НЕ поддържа тази функционалност.

### Базални темпове от 0U/h в профила НЕ се поддържат в AAPS
Въпреки че DASH поддържа нулев базален темп, **AAPS** използва кратни на потребителския базален темп от **Profile**, за да определя автоматизираното лечение; той не може да функционира с нулев базален темп.  
Вместо това, временен нулев базален темп може да се постигне чрез функцията "Disconnect pump" или чрез комбинация от Disable Loop/Temp Basal Rate или Suspend Loop/Temp Basal Rate.  
**ЗАБЕЛЕЖКА:** Най-ниският базален темп, позволен от DASH в **AAPS**, е 0.05U/h.

## Избор на Dash в AAPS

There are **two** ways to select the Omnipod DASH driver in **AAPS**:

### Опция 1: Нови инсталации

When you install **AAPS** for the first time, the **Setup Wizard** guides you through the key features and installation requirements of **AAPS**. When you reach the **Pump** step, select **Omnipod Dash**.

![The Pump step of the setup wizard with Omnipod Dash](../images/setup-wizard/Wizard-Pump-Omnipod.png)

If you are not sure yet, you can select **Virtual Pump** for now and select **Omnipod Dash** later, after setting up **AAPS** (see Option 2).

(omnipod-dash-option-2-config-builder)=
### Option 2: The Configuration screen

On an existing installation you can select the **Omnipod Dash** pump from the **Configuration** screen:

1. Open the **menu** (☰) in the top-left corner of the main screen and select **Configuration**.
2. Tap **Pump** and select the radio button of **Omnipod Dash** (*"Pump integration for Omnipod Dash (the new, Bluetooth-enabled model with a blue needle cap)"*).

3. Once it is selected, the **Omnipod Dash** card shows two buttons:
   - **Settings** opens the [Dash settings](#omnipod-dash-settings).
   - **Open plugin** opens the [DASH pump screen](#omnipod-dash-tab).

   ![The Omnipod Dash plugin enabled in Configuration > Pump](../images/v4/Pumps/dash_enabled.png)

### Проверка на избора на драйвер за Omnipod

To check that **Omnipod Dash** is selected, open **Manage** (bottom navigation of the main screen) and tap **Pump**. The DASH pump screen opens, as shown in the next section.

(omnipod-dash-tab)=

## The DASH pump screen

The DASH pump screen is where you manage your pods: activate and deactivate them, refresh the pod status, silence alerts and look at the pod history. Open it with **Manage** > **Pump**, or with **Open plugin** on the **Omnipod Dash** card in **Configuration** > **Pump**.

This is the screen without an active pod:

![The DASH pump screen without an active pod](../images/v4/Pumps/dash_pump_screen.png)

And this is the screen with an active pod:

![The DASH pump screen with an active pod](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

The **Settings** (gear) icon in the top-right corner opens the [Dash settings](#omnipod-dash-settings).

***NOTE:** If a field on the pump screen shows (uncertain), press **Refresh** to update the pod status.*

### Полета

- **Bluetooth Address:** The Bluetooth address of the pod.

- **Connection quality:** How reliably **AAPS** connects to the pod, shown as *successful connections / all connection attempts :: success rate*, for example `412/420 :: 98.10 %`. After more than 50 successful connections, the value turns yellow below 90 % and red below 70 %. A low value points to a Bluetooth problem (see [Bluetooth related issues](#omnipod-dash-bluetooth-related-issues)).

- **Delivery Status:** The raw delivery status reported by the pod. This field is shown only in engineering mode builds.

- **Unique ID:** The unique ID **AAPS** gave to the pod during activation.

- **LOT Number:** The production lot number of the pod.

- **Sequence Number:** The sequence number of the pod.

- **Firmware Version:** The firmware and Bluetooth versions of the pod.

- **Time on Pod:** The current time on the pod, with its time zone. The text turns red when the time zone of the pod is different from the time zone of the phone, and yellow when the pod time is more than 10 minutes off.

- **Pod Expires:** The date and time when the pod expires (72 hours after activation). The text turns yellow in the last 4 hours before this time. It never turns red, because the pod keeps delivering insulin after it.

- **Pod Hard End:** The end of the pod's grace period (8 hours after **Pod Expires**, for a maximum pod life of 80 hours). The text turns yellow when the grace period starts (at **Pod Expires**) and red in the last 4 hours before the hard end. During the grace period it also shows the time left, for example *(17m remaining)*. The pod stops delivering insulin at the hard end and must be changed.

- **Pod Status:** The state of the pod: **No Active Pod**, **Setup in progress**, **Running**, **Suspended** or, after a pod fault, **ALARM**.

- **Last Connection:** How long ago **AAPS** last communicated with the pod.

  - *Moments ago* - less than 10 seconds ago.

  - *Less than a minute ago* - between 10 and 60 seconds ago.

  - *XX minutes ago* - more than 1 minute ago (and *X hours and XX minutes ago* after an hour).

- **Last bolus:** The amount of the last bolus sent to the pod and how long ago it was given. An unconfirmed bolus is marked (uncertain).

- **Base Basal Rate:** The basal rate programmed for the current time in your basal **Profile**.

- **Temp Basal Rate:** The temporary basal rate (TBR) that is currently running, with its start time and duration. This field is only shown while a TBR is running.

- **Reservoir:** Shows *Over 50 U left* when more than 50 units are left in the reservoir. Below 50 units, the exact amount is shown. The value turns red below 20 units.

- **Total Delivered:** The total amount of insulin delivered from the reservoir. This includes the insulin used for priming.

- **Active Pod Alerts:** Alerts that are currently active on the pod, for example *Pod will expire soon* or *Low Reservoir*.

- **Errors:** The pod fault, if the pod has failed, shown in red as *Pod Fault:* followed by the fault code and name, for example *Pod Fault: 020 ALARM_OCCLUDED*. Review the [Pod History](#omnipod-dash-view-pod-history) and the log files for past errors and more detailed information. See [Pod Failures](#omnipod-dash-pod-failures).

- **PDM Notification:** Shown only after a pod fault. It shows the fault the way the Omnipod PDM would have shown it: a title (for example *Occlusion Detected*, *Empty Reservoir* or *Pod Expired*), what happened (for example *Insulin delivery stopped. Change Pod now.*) and a *Ref:* code.

### Бутони

The buttons at the bottom of the pump screen change with the state of the pod. Only the buttons that make sense at that moment are shown.

- **Refresh:** Asks the pod for its current status.
  - *Use it to update the pod status and to clear fields that show (uncertain).*
  - *See the [Troubleshooting](#omnipod-dash-troubleshooting) section below for more information.*

- **Silence Alerts:** Stops the pod alert beeps (for example pod expiry or low reservoir). Shown only while the pod has an active alert. See [Silencing Pod Alerts](#omnipod-dash-silencing-pod-alerts).

- **Resume Delivery:** Resumes insulin delivery on a suspended pod. Shown only when delivery is suspended. See [Resuming Insulin Delivery](#omnipod-dash-resuming-insulin-delivery).

- **Set time:** Updates the pod to the time zone of your phone by sending your basal **Profile** again. Shown only when the time zone of the pod differs from the time zone of your phone.

- [**Activate Pod**](#omnipod-dash-activate-pod): Подготвя (prime) и активира нов пач. Shown when no pod is active.

- [**Deactivate Pod**](#omnipod-dash-deactivate-pod): Deactivates the active pod. Shown as soon as a pod is paired with **AAPS**, also when an activation stopped part-way (for example because the pod failed during activation). **AAPS** asks you to confirm before it deactivates the pod.

- **Play Test Beep:** Makes the pod play a single test beep.

- [**Pod History**](#omnipod-dash-view-pod-history): Shows the activity history of the active pod.

- **Discard Pod:** Removes an unfinished pod from **AAPS**. Shown only when a pod activation stopped part-way. **AAPS** asks you to confirm. After discarding, **AAPS** can no longer communicate with that pod: remove it from your body.

![The Pod Management menu](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version, which had a separate **Pod Management** menu. In **AAPS** 4 all these actions, including **Activate Pod**, **Deactivate Pod**, **Play Test Beep** and **Pod History**, are buttons with text labels directly on the pump screen.
```

(omnipod-dash-activate-pod)=

## Активиране на пач/под

1. Open the DASH pump screen (**Manage** > **Pump**) and press **Activate Pod**. The activation wizard opens.

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

   ```{admonition} Older screenshot
   :class: note
   The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 **Activate Pod** is a button directly on the DASH pump screen instead of in the **Pod Management** menu.
   ```

   If you have never activated a **Profile** in **AAPS** before, the wizard first shows the **Profile required** step: select the profile to apply on activation and continue.

2. The **Fill Pod** step is shown. Fill a new pod with enough insulin for 3 days, **at least 80 units**. Listen for two beeps from the pod: they mean the minimum amount of 80 units has been filled. Empty the fill syringe completely, even after hearing the two beeps. Do not remove the pod's needle cap yet.

   ***NOTE:** When you calculate the amount of insulin you need for 3 days, remember that priming the pod uses about 3-10 units.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Make sure that the new pod and the phone running **AAPS** are close to each other and press **Next**.

3. If you use more than one insulin in **AAPS**, the **Select Insulin** step is shown. It shows the **Currently active** insulin. If you filled the pod with a different insulin, press **Change** and select it. **AAPS** applies a **Profile Switch** with this insulin when the activation is finished. Press **Next**.

   ![The Select Insulin step](../images/v4/Pumps/dash_wizard_select_insulin.png)

4. On the **Initialize Pod** step, **AAPS** pairs with the new pod and primes it. You hear a click followed by a series of ticking sounds as the pod primes itself. When this has finished successfully, the **Next** button appears. Press **Next**.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

   ***NOTE**: If an error message such as _Scan failed_ or _'Could not find an available pod for activation'_ appears (this can happen), do not panic. Press **Retry**. In most cases the activation then continues successfully.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

   If the pod has failed (for example because its activation time was exceeded), **Deactivate Pod** is shown instead of **Retry**. Use it and start again with a new pod.

   If you press **Cancel** before the activation is finished, **AAPS** asks you to confirm that you want to exit. Press **OK** to leave the wizard, or **Cancel** to stay.

   ![The Exit confirmation](../images/v4/Pumps/dash_wizard_exit_confirm.png)

5. If you manage pump site rotation in **AAPS** (**Manage pump site rotation** in the [Site Rotation](#Aapsscreens-site-rotation) settings), the **Site location** step is shown. Select where you are going to place the pod on the body diagram and press **Next**, or press **Skip**.

   ![The Site location step](../images/v4/Pumps/dash_wizard_site_location.png)

6. Next, prepare the infusion site for the new pod. Wash your hands to avoid any risk of infection. Clean the infusion site with soap and water or an alcohol wipe, and let the skin air dry completely before you continue. If the adhesive irritates your skin, consider using a barrier wipe or barrier spray.

   On the **Attach Pod** step, remove the pod's blue plastic needle cap. If the cannula or anything else sticks out of the pod, or it looks unusual, **STOP**: press **Cancel** and start again with a new pod. If everything looks **OK**, take off the white paper backing from the adhesive and stick the pod to the chosen site on your body.

   When finished, press **Next**.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

7. A confirmation dialog appears: *When you press OK, the cannula will be inserted.* **Press OK ONLY if you are ready to insert the cannula!**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

8. On the **Insert Cannula** step, **AAPS** sets your basal schedule and the pod inserts the cannula. This can take some time (1-2 minutes maximum). **Бъдете търпеливи!**

   ***NOTE:** It is good practice to pinch the skin near the cannula insertion point before the cannula is inserted. This helps the needle go in smoothly and lowers your chance of occlusions (blockages).*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

9. When the cannula has been inserted successfully, the **Next** button appears. Press **Next**.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

10. The **Pod Activated** step is shown. Check that the cannula has been inserted correctly, and change the pod if you think it has not.

    Press **Finish**.

    Поздравления! Вече сте стартирали нова сесия на пач/под.

    ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

11. You are back on the DASH pump screen. It now shows the information of your active pod, including the current basal rate, reservoir level, insulin delivered, pod errors and alerts. **Activate Pod** is replaced by **Deactivate Pod**: you cannot activate another pod without deactivating the active pod first.

    ***NOTE:** For more details on the information shown, see [The DASH pump screen](#omnipod-dash-tab).*

    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

    ***NOTE:** It is good practice to export your settings AFTER activating the pod. Export your settings after each pod change and once a month. Copy the exported settings file to a cloud storage location (for example Google Drive) or somewhere off your phone in case you lose your phone (see [**Export settings**](../Maintenance/ExportImportSettings.md)).*

If an earlier activation stopped after the pod was primed, pressing **Activate Pod** continues from the **Attach Pod** step.

(omnipod-dash-deactivate-pod)=

## Деактивиране на пач/под

Under normal circumstances, a pod lasts three days (72 hours), plus a grace period of 8 hours after the pod expiry warning: 80 hours in total.

To deactivate a pod (either because it expired or because it failed):

1. Open the DASH pump screen (**Manage** > **Pump**) and press **Deactivate Pod**.

   ![The Deactivate Pod button on the DASH pump screen](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

2. On the **Deactivate Pod** step, press **Next**. A dialog asks *A deactivated Pod can not be used again. Deactivate this Pod now?* Press **OK** to start deactivating the pod, or **Cancel** to keep it. Deactivation suspends all insulin delivery and cannot be undone.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

3. The **Deactivating Pod** step is shown while **AAPS** deactivates the pod. The pod beeps to confirm that deactivation was successful.

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the wizard shows its progress as a row of dots at the top instead of a progress bar.
   ```

   When deactivation has finished successfully, the **Next** button appears. Press **Next**.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

   If deactivation fails, an error message and a **Discard Pod** button are shown. See [Discarding a pod](#omnipod-dash-discard-pod) below before you use it. You can also press **Cancel** and try **Deactivate Pod** again later.

4. The **Pod Deactivated** step is shown. Remove the pod from your body and press **Finish**.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. You are back on the DASH pump screen. Check that the **Pod Status** field shows **No Active Pod** and that the **Activate Pod** button is shown again.

   ![The DASH pump screen showing No Active Pod](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

(omnipod-dash-discard-pod)=

### Discarding a pod

Only discard a pod when all communication with it keeps failing. If **AAPS** can still communicate with the pod, use **Deactivate Pod** instead.

- **AAPS** asks you to confirm before it discards the pod.
- After that, **AAPS** can no longer communicate with that pod.
- **Insulin delivery has NOT been suspended**, because the pod was not deactivated properly. **Remove the pod from your body!**
- The **Pod Discarded** step confirms that the pod state has been discarded. Press **Finish**. You can now activate a new pod.

(omnipod-dash-resuming-insulin-delivery)=

## Възобновяване на доставката на инсулин

**NOTE**: During **Profile Switches**, like when using the PDM, **AAPS** must suspend delivery on the pod before setting the new basal **Profile**. If communication fails between the suspend and resume commands, delivery can stay suspended. Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

When insulin delivery is suspended, you need to tell the pod to resume insulin delivery. When the command has been processed successfully, the pod delivers insulin again using the basal rate for the current time from your active basal **Profile**. The pod again accepts commands for bolus, **TBR** and **SMB**.

1. Open the DASH pump screen and check that the **Pod Status** field shows **Suspended**. Press **Resume Delivery** to tell the pod to resume normal insulin delivery.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)

2. When the command was successful, the **Pod Status** field shows **Running** and the **Resume Delivery** button disappears.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   The screenshots above are from an earlier **AAPS** version, which showed a confirmation dialog. In **AAPS** 4 you confirm the result on the DASH pump screen: the **Pod Status** field shows **Running** and the **Resume Delivery** button is gone.
   ```

   If the command fails, **AAPS** shows a warning dialog starting with *Failed to resume delivery*. Press **Refresh** and try again.

   ![The Failed to resume delivery warning](../images/v4/Pumps/dash_resume_failed.png)

(omnipod-dash-silencing-pod-alerts)=

## Заглушаване на предупрежденията от пача

This section explains how to stop the pod beeps when the pod approaches the end of its life. When these beeps start depends on the **Alerts** settings (see [Dash Settings](#omnipod-dash-settings)):

- **Reminder at hours before expiry (72 Hours):** how many hours before the 72-hour expiry the pod starts to beep.
- **Alert at hours before shutdown (80 Hours):** how many hours before the 80-hour shutdown the pod beeps again.

The maximum life of a pod is 80 hours (3 days 8 hours). However, the pod manufacturer recommends not going beyond 72 hours (3 days).

***NOTE**: The **Silence Alerts** button is only shown on the DASH pump screen while the pod has an active alert, for example pod expiry or low reservoir. If the **Silence Alerts** button is not shown but you hear the pod beeping, press **Refresh**.*

1. When the reminder time is reached, the pod beeps to tell you that it will expire soon and that you need to change it. On the DASH pump screen, the **Pod Expires (1)** field shows the exact time the pod will expire (72 hours after activation). The text turns yellow 4 hours before this time. After it, **Pod Hard End** turns yellow and shows the time left until the pod stops delivering insulin. The **Active Pod Alerts (2)** field shows **Pod will expire soon**, and the **Silence Alerts (3)** button is shown.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Press **Silence Alerts**. **AAPS** sends the command to the pod to stop the expiry beeps.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

   ```{admonition} Older screenshot
   :class: note
   The screenshot above is from an earlier **AAPS** version, where this screen was the **DASH** tab. In **AAPS** 4 the **Silence Alerts** button is on the DASH pump screen (**Manage** > **Pump**).
   ```

3. When the alerts have been silenced, the alert is no longer shown in the **Active Pod Alerts** field, the **Silence Alerts** button disappears, and the pod stops its expiry beeps.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

   ```{admonition} Older screenshot
   :class: note
   The screenshot above is from an earlier **AAPS** version, which showed a confirmation dialog. In **AAPS** 4 you confirm the result on the DASH pump screen: the alert is gone from the **Active Pod Alerts** field.
   ```

   If the command fails, **AAPS** shows a warning dialog starting with *Failed to silence alerts*. Press **Refresh** and try again.

The low reservoir alert works the same way. When the insulin left in the pod drops to the **Number of units** set in the **Alerts** settings, the pod beeps. The **Reservoir** field shows the amount left, the **Active Pod Alerts** field shows **Low Reservoir**, and the **Silence Alerts** button is shown. Press **Silence Alerts** to stop the beeps, and plan your next pod change.

![The DASH pump screen with a Low Reservoir alert](../images/v4/Pumps/dash_low_reservoir_alert.png)

(omnipod-dash-view-pod-history)=

## Преглед на историята на пача

This section explains how to look at the history of your active pod and filter it by type of action. The pod history shows the commands sent to your active pod and their results during its three-day (72 - 80 hours) life.

It is useful to check the boluses, TBRs and basal commands that were sent to the pod. The other categories help with troubleshooting and show the order of events that led up to a failure.

***ЗАБЕЛЕЖКА:** **Само последната команда може да бъде „несигурна" (uncertain)**. New commands *are not sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. To 'fix' an uncertain command, press **Refresh** on the DASH pump screen.*

1. Open the DASH pump screen and press **Pod History**.

   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

   ```{admonition} Older screenshot
   :class: note
   The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 **Pod History** is a button directly on the DASH pump screen instead of in the **Pod Management** menu.
   ```

2. The **Pod History** screen opens with the **All** filter selected. It lists every command with its time and result, newest first, grouped by day. Use the filter buttons at the top (for example **Boluses** or **Basals**) to show only one type of command. Press the back arrow to return to the DASH pump screen.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   The second screenshot above is from an earlier **AAPS** version, where you picked the type of command from a **Type** list. In **AAPS** 4 you use the filter buttons shown in the first screenshot.
   ```

   For boluses, the amount is followed by the bolus type when it is not a normal bolus, for example *0.05 U (SMB)* or *0.05 U (Basal correction)*. A basal correction is a very small bolus (one pod pulse, 0.05 U) that the driver sends by itself; you did not request it.

   ```{admonition} Why basal corrections happen
   :class: note
   The pod delivers basal insulin in pulses of 0.05 U, timed by an internal clock. Each time the basal rate changes (for example when the loop sets a new **TBR**), the pod restarts this clock, and the pulse it was counting towards is lost. Because the loop changes the basal rate often, especially overnight, the pod can end up delivering less basal insulin than expected.

   **AAPS** compares the basal insulin the pod reports as delivered with what it should have delivered. When the shortfall reaches half a pulse or more, the driver delivers one extra pulse as a basal correction, so you still get the basal insulin your profile and the loop asked for. No correction is sent while the pod is suspended, or while a zero **TBR** is running.
   ```

(omnipod-dash-settings)=

## Настройки на Dash

There are two ways to open the Dash driver settings:

- Press the **Settings** (gear) icon in the top-right corner of the [DASH pump screen](#omnipod-dash-tab).
- Open the **menu** (☰) in the top-left corner of the main screen and select **Configuration** > **Pump**. On the **Omnipod Dash** card, press **Settings**.

The settings are grouped into four expandable sections: **Confirmation Beeps**, **Alerts**, **Notifications** and **Advanced Settings**. Tap a section to open it:

![The Dash settings](../images/v4/Pumps/dash_settings.png)

Most settings are on/off switches.

### Confirmation Beeps

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Confirmation beeps from the pod for bolus, basal, SMB and TBR delivery and changes.

**Bolus beeps enabled:**    The pod beeps when a bolus is delivered. On by default.

**Basal beeps enabled:**    The pod beeps when a new basal rate is set, or when the active basal rate is canceled or changed. Off by default.

**SMB beeps enabled:**  The pod beeps when an SMB is delivered. On by default.

**TBR beeps enabled:**  The pod beeps when a TBR is set or canceled. Off by default.

### Предупреждения (Alerts)

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 these settings are in the expandable **Alerts** section.
```

Pod alerts for pod expiry, shutdown and low reservoir. When you change these settings while a pod is active, **AAPS** sends the new alert settings to the pod.

***NOTE:** An **AAPS** notification is ALWAYS shown for any alert once **AAPS** has communicated with the pod after the alert was triggered. Dismissing the notification does NOT stop the pod alert. To stop the alert, open the DASH pump screen and press **Silence Alerts**.*

**Expiration reminder enabled:**    When this is on, the pod beeps when the reminder time is reached. On by default.

**Reminder at hours before expiry (72 Hours):** How many hours before the 72-hour pod expiry the reminder starts (1 to 24 hours; default 4).

**Expiration alert enabled:**   When this is on, the pod beeps when the alert time is reached, and again 1 hour before shutdown. On by default.

**Alert at hours before shutdown (80 Hours):**  How many hours before the 80-hour pod shutdown the alert starts (1 to 8 hours; default 8).

**Low reservoir alert enabled:**    The pod alerts you when the insulin left in the reservoir drops to the value in **Number of units**. On by default.

**Number of units:**    The number of units at which the low reservoir alert is triggered (5 to 50 units; default 20).

### Известия (Notifications)

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

Choose whether **AAPS** plays a sound with its notifications when it is uncertain whether a TBR, SMB or bolus was delivered, and when delivery is suspended.

***NOTE:** These are phone notifications only; the pod itself does not beep.*

**Sound for uncertain TBR notifications enabled:**  Plays a sound with the notification when **AAPS** is uncertain whether a TBR was set.

**Sound for uncertain SMB notifications enabled:**  Plays a sound with the notification when **AAPS** is uncertain whether an SMB was delivered.

**Sound for uncertain bolus notifications enabled:**    Plays a sound with the notification when **AAPS** is uncertain whether a bolus was delivered.

**Sound when delivery suspended notification enabled:**     Plays a sound with the notification when insulin delivery is suspended.

(omnipod-dash-advanced-settings)=

### Advanced Settings

![The Advanced Settings section](../images/v4/Pumps/dash_settings_advanced.png)

**Bluetooth bonding:**  Bonds the pod with the phone over Bluetooth. Try it only if the pod cannot keep a stable connection, for example on Android 15 (see [Omnipod DASH known AAPS constraints/issues](#omnipod-dash-constraints)). When it is on, the phone shows pairing requests that you must accept. Leave it off if the pod connects fine. It has no effect below Android 15. Off by default.

## Insulin and cannula age

The [status row](#screens-sensor-level-battery) on the main screen shows the age of your insulin and cannula. With Omnipod, these work a little differently than with tube-based pumps.

**AAPS** records a cannula change and an insulin change automatically each time you activate a pod. This resets the **Insulin** and **Cannula** ages to zero after every pod change. You do not need to record them yourself with **Prime/Fill**. This is because the pod inserts the cannula directly into the skin where it is attached: Omnipod does not use a tube.

**Pump battery** age is not reported: the battery and the insulin reservoir are built into each pod, and the battery always lasts longer than the pod itself (maximum 80 hours).

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version, where these ages were shown in the **Careportal** section of the **Actions** tab. In **AAPS** 4 they are shown in the status row on the main screen.
```

### Ниво (Level)

**Ниво на инсулина**

The insulin level shown is the amount reported by the pod. However, the pod only reports the actual reservoir level when it is below 50 units. Until then, *Over 50 U left* is shown. The amount reported is not exact: when the pod reports 'empty', in most cases the reservoir still has a few units of insulin left.

The DASH pump screen shows the level as follows:

  * **Over 50 U left** - The pod reports more than 50 units in the reservoir.
  * **Below 50 units** - The exact amount of insulin left in the reservoir, as reported by the pod.

Допълнителна забележка:
  * **SMS** - Returns the value, or 50+U when over 50 units, in SMS responses.
  * **Nightscout** - Uploads a value of 50 when over 50 units to Nightscout (version 14.07 and older). Newer versions report a value of 50+ when over 50 units.

(omnipod-dash-troubleshooting)=

## Отстраняване на проблеми

Този раздел обхваща често срещани известни проблеми и решения за използването на Omnipod DASH с AAPS. В документацията има и раздел [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md), който също трябва да бъде прегледан, тъй като покрива теми, релевантни и за някои проблеми с пача.

---

(omnipod-dash-bluetooth-related-issues)=

## Проблеми, свързани с Bluetooth

За известни проблеми с Bluetooth връзките, прекъсвания на помпата/пачовете, или проблеми с активирането и връзката вижте [Отстраняване на проблеми с Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(omnipod-dash-delivery-suspended)=

### Спряна доставка

  - Вече няма бутон за спиране (suspend). Ако искате да „спрете" пача, можете да зададете нулев **TBR** за x минути.
  - По време на **смени на профил (Профил Switches)**, DASH трябва да спре доставката, преди да зададе новия базален **Профил**. Ако комуникацията между двете команди се провали, доставката може да остане спряна. Когато това се случи:
     - Няма да има доставка на инсулин – това включва базал, SMB, ръчно болусиране и т.н.
     - Може да има известие, че една от командите е непотвърдена: това зависи от момента, в който е настъпил проблема.
     - **AAPS** ще опитва да зададе новия базален профил на всеки 15 минути.
     - **AAPS** ще показва известие, информиращо, че доставката е спряна, на всеки 15 минути, ако доставката все още е спряна (възобновяването на доставката се е провалило).
     - The [**Resume Delivery**](#omnipod-dash-resuming-insulin-delivery) button is shown on the DASH pump screen if you want to resume delivery manually.
     - Ако **AAPS** не успее сам да възобнови доставката (това се случва, ако пачът е недостъпен, звукът е заглушен и т.н.), пачът ще започне да издава 4 звукови сигнала на всяка минута в продължение на 3 минути, а след това ще се повтаря на всеки 15 минути, ако доставката все още е спряна за повече от 20 минути.
  - For unconfirmed commands, press **Refresh** on the DASH pump screen to confirm or deny them.

***</strong>ЗАБЕЛЕЖКА:</0> Когато чуете звукови сигнали от пача, не приемайте, че доставката ще продължи, без да проверите телефона – доставката може да остане спряна, ***затова трябва да проверите!******

---
(omnipod-dash-pod-failures)=

### Повреди на пача

- Пачовете от време на време се повреждат поради различни причини, включително хардуерни проблеми със самия пач.
- Добра практика е да не подавате рекламации за замяна към Insulet, тъй като AAPS не е одобрен метод за използване на пачовете.
- Списък с кодове за грешки може да бъде [**намерен тук**](https://github.com/openaps/openomni/wiki/Fault-event-codes), за да ви помогне да определите причината.

When a pod fails, it stops delivering insulin and beeps continuously. **AAPS** shows a notification on the main screen with the fault code and name, and the *Ref:* code, for example *Pod Fault: 020 ALARM_OCCLUDED*. Press **Dismiss** to close the notification. This does not stop the pod beeping.

![A pod fault notification](../images/v4/Pumps/dash_pod_fault_notification.png)

On the DASH pump screen, the **Pod Status** field shows **ALARM**, the **Errors** field shows the pod fault, and the **PDM Notification** field explains it, for example *Occlusion Detected. Insulin delivery stopped. Change Pod now. Check your BG*.

![The DASH pump screen after a pod fault](../images/v4/Pumps/dash_pump_screen_pod_fault.png)

A failed pod cannot be used again. Check your blood glucose, then [deactivate the pod](#omnipod-dash-deactivate-pod) and activate a new one.

---
### Предотвратяване на повреди с грешка 49 на пача

Тази повреда е свързана с неправилно състояние на пача за дадена команда или грешка по време на команда за доставяне на инсулин. Това се случва, когато драйверът и пачът не са съгласни относно реалното състояние. Пачът (от вградена мярка за безопасност) тогава реагира с невъзстановим код за грешка 49 (0x31), завършвайки с това, известно като „screamer": дълъг дразнещ звуков сигнал, който може да бъде спрян само чрез пробиване на отвор на съответното място на гърба на пача. Точният произход на „повреда 49 на пача" често е трудно да се проследи. В ситуации, за които се подозира, че могат да предизвикат тази повреда (например при срив на приложението, работа с версия за разработка (development version) или преинсталиране).

---

### Предупреждения за недостъпност на помпата (Pump Unreachable Alerts)

Когато не може да се установи комуникация с пача за предварително конфигуриран период, ще се задейства предупреждение „Pump unreachable". Pump unreachable alerts can be configured by pressing the **Settings** (gear) icon on the top right of the main screen, then selecting **Local Alerts** ➜ **Pump unreachable threshold**. Препоръчителна стойност е предупреждение след **120** минути.

---
(omnipod-dash-export-import)=
### Export and import settings

Exporting **AAPS** settings lets you restore all your settings and Objectives, for example after reinstalling **AAPS** or on a new phone. **Export your settings right after each Pod activation** and copy the file to a safe place off your phone (for example Google Drive), so the active Pod can be restored too. See [Creating and restoring back-ups](#ExportImportSettings-Settings-Export).

```{admonition} Importing settings can end your active Pod
:class: warning
On the phone that is already running the Pod, leave **Also replace pump settings** unticked: the Pod session is kept and only the other settings are imported. Tick it only on a new phone, with a file exported during the Pod you are wearing now. See [Tubeless pumps](#ExportImportSettings-tubeless-pumps).
```

If the imported settings contain a Pod that is no longer active, see the next section.

---
### Импортиране на настройки, съдържащи статус на пач от неактивен пач

При импортиране на настройки, съдържащи данни за пач, който вече не е активен, AAPS ще опита да се свърже с него, което очевидно ще се провали. You cannot activate a new Pod in this situation.

За да премахнете старата сесия на пача:
1. On the DASH pump screen, press **Deactivate Pod**. The deactivation will most likely fail.
2. When it fails, press **Discard Pod** and confirm (see [Discarding a pod](#omnipod-dash-discard-pod)).
3. Once the old pod is removed, you can activate a new pod.

### Обща грешка: java.lan.illegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

Ако получите тази грешка при опит за инициализиране на нов пач, **AAPS** отказва, защото все още има съхранени настройки за стар пач в конфигурацията.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

Това може да се случи, ако възстановявате от backup, или ако деактивирането на пач се провали.

To resolve it, press **Cancel** to leave the activation. On the DASH pump screen, press **Discard Pod** if it is shown. Otherwise press **Deactivate Pod**, and when the deactivation fails, press **Discard Pod** (see [Discarding a pod](#omnipod-dash-discard-pod)).

Сега трябва да можете да активирате нов пач.

---
### Преинсталиране на AAPS

При деинсталиране на **AAPS** ще загубите всичките си настройки, цели и текущата сесия на пача. **За да ги възстановите, уверете се, че имате наличен скорошен експортиран файл с настройки!**

When on an active Pod, use an export made during the current Pod session (see [Export and import settings](#omnipod-dash-export-import)).

1. Експортирайте настройките си и запазете копие на сигурно място (напр. Google Drive).
2. Деинсталирайте **AAPS** и рестартирайте телефона си.
3. Инсталирайте новата версия на **AAPS**.
4. Импортирайте настройките си.
5. Проверете всички настройки(по избор импортирайте настройките отново).
6. Активирайте нов пач.
7. Когато приключите: Експортирайте текущите настройки.

---
### Обновяване на AAPS до по-нова версия

В повечето случаи не е необходимо деинсталиране. Можете да направите инсталация „на място" (in-place), като стартирате инсталацията за новата версия. Това е възможно и при активна сесия на пач.

1. Експортирайте настройките си.
2. Инсталирайте новата версия на **AAPS**.
3. Проверете дали инсталацията е успешна
4. ВЪЗОБНОВЕТЕ (RESUME) пача или активирайте нов пач.
5. Когато приключите: Експортирайте текущите настройки.

---
### Предупреждения от драйвера на Omnipod

The Omnipod Dash driver presents a variety of unique alerts on the **main screen**, most of them are informational and can be dismissed while some provide the user with an action requiring their input to resolve the cause of the triggered alert.

По-долу е обобщение на основните предупреждения, които може да срещнете:

- *Pod Fault: XXX NAME*, followed by *Ref: ...*: the pod has failed and stopped delivering insulin. Change the pod. See [Pod Failures](#omnipod-dash-pod-failures).
- *No Active Pod*: no pod session was found. This notification keeps coming back until you activate a new pod. Once a pod is activated, it disappears automatically.
- *Insulin delivery suspended*: the pod has suspended insulin delivery. See [Resuming Insulin Delivery](#omnipod-dash-resuming-insulin-delivery).
- *Setting basal profile might have failed. Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed.* Setting the basal **Profile** on the pod may have failed. Press **Refresh** on the DASH pump screen (the message still says "Omnipod tab"), and press **Resume Delivery** if it is shown.
- *Unable to verify whether SMB bolus (X U) succeeded. Refresh pod status to confirm or deny this command.* **AAPS** could not confirm that the **SMB** was delivered. Press **Refresh** on the DASH pump screen and check the **Last bolus** field.
- *Bolus delivery status uncertain. Refresh pod status to confirm or deny.* The same for a normal bolus: press **Refresh** on the DASH pump screen.
- *Timezone on pod is different from the timezone on phone. Basal rate is incorrect. Switch profile to fix* See the DST and timezone note in [Omnipod DASH known AAPS constraints/issues](#omnipod-dash-constraints).

(omnipod-dash-where-to-get-help-for-dash)=

## Къде да получите помощ

Цялата разработка за DASH се извършва от общността на **доброволни начала**; моля, имайте това предвид и използвайте следните насоки, преди да поискате съдействие:

-  **Ниво 0:** Прочетете съответния раздел от тази документация, за да сте сигурни, че разбирате как трябва да работи функционалността, с която изпитвате затруднения.
-  **Ниво 1:** Ако все още срещате проблеми, които не можете да разрешите с помощта на този документ, моля, отидете в канала *#Medtrum* в **Discord**, като използвате [тази покана](https://discord.gg/4fQUWHZ4Mw). Има и много Facebook и други социални мрежи, в който може да попитате (вижте във [**Получаване на помощ**](../GettingHelp/WhereCanIGetHelp.md))
-  **Ниво 2:** Претърсете съществуващите issues, за да видите дали проблемът ви вече е докладван в [Issues](https://github.com/nightscout/AndroidAPS/issues), ако е направено можете да потвърдете/коментирайте/добавите информация за проблема. Ако не, моля, създайте [нов issue](https://github.com/nightscout/AndroidAPS/issues) и приложете [вашите лог файлове](../GettingHelp/AccessingLogFiles.md).
-  **Бъдете търпеливи – повечето от членовете на нашата общност са добронамерени доброволци, а решаването на проблеми често изисква време и търпение както от потребителите, така и от разработчиците.**

Когато молите за помощ, подгответе следната информация, за да помогнете на общността с конкретните ви въпроси и проблеми:
- Марка и модел на Android телефона
- Версия на Android (напр. 15,16)
  - Наскоро ли обновихте версията на Android OS?
- Версията на **AAPS**, която използвате
- Ясно описание на проблема, с който се сблъсквате, като имате предвид следните неща
   - Работеше ли преди?
   - Кога е работило или не е работило?
   - Направихте ли някакви промени в конфигурацията или настройките на профила?
   - Did you pair a new Bluetooth device?
   - Обновихте ли или инсталирахте ли ново приложение?
   - Колко дълго е работило, преди да спре да работи?
