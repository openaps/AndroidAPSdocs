# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**. The DASH driver is a well-established way to loop with Omnipod.

```{contents} Table of contents
:depth: 1
:local: true
```

## Omnipod DASH specificaties

Key characteristics of the **Omnipod DASH** ('DASH'):

- The DASH pods are identified by a **blue needle cap** (the older EROS pod has a clear needle cap). Verder zijn de pods qua afmetingen gelijk.
- DASH heeft geen BLE-brug (link) nodig (GEEN RileyLink, OrangeLink of EmaLink nodig).
- De Bluetooth-verbinding van de DASH wordt alleen gebruikt bij het sturen van een opdracht (bijv. een bolus) en wordt direct daarna verbroken.
- **AAPS** wacht tot de pod bereikbaar is om opdrachten te sturen.
- Bij het activeren van een pod zoekt **AAPS** een nieuwe DASH-pod en maakt er verbinding mee.
- Verwacht bereik vanaf de telefoon: 5–10 meter (dit kan per situatie verschillen).

(omnipod-dash-constraints)=

## Bekende beperkingen/problemen van Omnipod DASH in AAPS
- General advice is to run **AAPS** on Android 14 or 16. Android 15 has many reported [issues](https://github.com/nightscout/AndroidAPS/issues/3471) from the community. However, if you do run on Android 15 you will likely need to turn on **Bluetooth bonding** (in the **Advanced Settings** section of the [Dash settings](#omnipod-dash-advanced-settings)) to successfully activate and use Pods, see [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) for more info on the Bonding settings.
- DST and timezone changes are not applied automatically. After a clock change you must update the pod manually: press **Refresh** on the DASH pump screen, then press **Set time** (shown when the pod and phone time zones differ) or perform a **Profile Switch** (see [Timezone change for Omnipod Dash](#timezone-traveling-with-pumps)).
- Dash ondersteunt alleen basaalstanden in stappen van 0,05 E/u. If you try to set Basal with 0.01 steps in your **AAPS profile**, AAPS will not give a warning even though the pod will round up the rate into 0.05 steps. If you open **Pod History** on the DASH pump screen, it will display that 0.05 basal was set. Dit betekent ook dat de laagste basaalstand die de DASH in **AAPS** toestaat 0,05 E/u is.
- The settings file contains the active Pod session. Export your settings after each Pod activation, and see [Export and import settings](#omnipod-dash-export-import) before importing settings.
- Bij het instellen van een nieuw basaal profiel onderbreekt DASH de toediening voordat het nieuwe basale **Profiel** wordt ingesteld. Bij een onderbreking van de communicatie of een fout start het basale profiel niet vanzelf opnieuw. Zie het deel [Insulinetoediening hervatten](#omnipod-dash-resuming-insulin-delivery) voor details.
- Als waarschuwingen zijn ingesteld en de pod bijna verloopt, blijft de pod piepen tot de waarschuwingen zijn stilgezet. Zie [Pod-alarmen stilzetten](#omnipod-dash-silencing-pod-alerts) voor details.
- Er zijn een aantal bekende problemen met Bluetooth die problemen bij het activeren van een pod kunnen geven. Zie [Bluetooth-probleemoplossing](../GettingHelp/BluetoothTroubleshooting.md) voor de bekende problemen en oplossingen.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## Benodigde hardware en software

- Omnipod DASH herken je aan de blauwe naalddop.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **Een compatibele Android-telefoon** met Bluetooth Low Energy (BLE) (zie [Telefoons](../Getting-Started/Phones.md) voor meer info). De volgende informatie helpt je ook bij andere belangrijke punten om de DASH goed te activeren en te gebruiken op een compatibele telefoon:
    -  De Omnipod Dash-driver van **AAPS** maakt via Bluetooth verbinding met de DASH Pod.  
      **AAPS** maakt automatisch een nieuwe Bluetooth-verbinding met de Pod elke keer dat het een opdracht moet sturen (bijv. een bolus). Na het sturen van de opdracht wordt de Bluetooth-verbinding direct verbroken.
       - **Opmerking:**
         - De Bluetooth-verbinding kan worden onderbroken of verstoord door andere Bluetooth-apparaten die gekoppeld zijn aan de telefoon waarop **AAPS** draait, zoals oordopjes enz. Zulke apparaten kunnen op sommige telefoonmodellen verbindingsfouten of problemen bij het activeren van een pod geven. It's a good idea to review the [tested hardware setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) list for known working configurations when choosing the phone for an Omnipod DASH setup.
         - Er zijn een aantal bekende problemen met Bluetooth die problemen bij het activeren van een pod kunnen geven (zie [Probleemoplossing](#troubleshooting) voor advies over andere Bluetooth-problemen), vooral het deel [Problemen met Bluetooth](#omnipod-dash-bluetooth-related-issues).
    - The phone must run **Android 12 or newer**, with **AAPS** built and installed using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions. Always run the latest released version.
- Een ondersteunde [**Continue glucosemonitor (CGM)**](../Getting-Started/CompatiblesCgms.md)

De instructies hieronder leggen uit hoe je met **AAPS** een nieuwe pod-sessie activeert. Wacht tot je huidige Pod bijna verloopt, want je moet met **AAPS** een nieuwe Pod activeren. Als een pod is gedeactiveerd, kan hij niet opnieuw worden gebruikt of geactiveerd. Het deactiveren is definitief.

## Voordat je begint

Zorg dat je deze hele handleiding hebt gelezen en begrijpt, en ook het deel **Voordat je begint** en **[Beperkingen en problemen van Omnipod en AAPS](#omnipod-dash-constraints)**, zodat je geen bekend probleem tegenkomt.

### **VEILIGHEID VOOROP** - Je **MOET NIET** proberen **AAPS** voor het eerst met een pod te verbinden zonder dat je al het volgende bij de hand hebt:
1. Extra pods (3 of meer als reserve)
2. Reserve-insuline en spullen voor MDI (pen of spuit)
3. Een werkende Omnipod PDM (voor het geval **AAPS** niet werkt)
4. Een ondersteunde telefoon is een must! (Zie [Hardware-/softwarevereisten](#hardware-software-requirements))
5. De juiste versie van AAPS gebouwd en geïnstalleerd

### Je Omnipod Dash PDM is niet meer nodig nadat de Dash-driver van AAPS je pod heeft geactiveerd.
- Voordat je **AAPS** gebruikt, heb jij of je verzorger de Pod beheerd met de Omnipod PDM (of in sommige regio's een telefoon-app) om opdrachten naar je DASH te sturen (bijv. een bolus).
- De DASH kan maar met één Bluetooth-apparaat (bijv. PDM of telefoon) verbonden zijn om te beheren en opdrachten te sturen.
- Het apparaat dat de pod activeert, is vanaf dat moment het enige apparaat dat met die Pod mag communiceren. Dit betekent dat als je een DASH met je Android-telefoon activeert via **AAPS**, **je je PDM niet meer kunt gebruiken met die pod!** Zolang die Pod actief is, is de Dash-driver van **AAPS** op je Android-telefoon de nieuwe PDM voor je pod.
- **GOOI JE PDM NIET WEG!** Bewaar hem als reserve en voor noodgevallen, bijvoorbeeld als je telefoon kwijt is of **AAPS** niet goed werkt.

### Je pod stopt **NIET** met insuline toedienen als hij niet verbonden is met AAPS.
Bij het activeren worden de standaard basaalstanden in de pod gezet, zoals ze in het huidige actieve [**Profiel**](../SettingUpAaps/YourAapsProfile.md) staan.  
Zolang **AAPS** werkt, stuurt het opdrachten om de basaalstand aan te passen die maximaal 120 minuten lopen.  
Als de pod om een of andere reden geen nieuwe opdrachten krijgt (bijvoorbeeld omdat de verbinding verloren is door de afstand tussen Pod en telefoon), gaat de pod automatisch terug naar de standaard basaalstanden uit je [**Profiel**](../SettingUpAaps/YourAapsProfile.md).

### AAPS-profielen ondersteunen geen basale tijdblokken van 30 minuten
Als je nieuw bent met **AAPS** en je basale [**Profiel**](../SettingUpAaps/YourAapsProfile.md) voor het eerst instelt: basaalstanden die op een half uur beginnen worden niet ondersteund. For example, on your Omnipod PDM, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this exact Basal **Profile** in **AAPS**.  
You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Hoewel de DASH-hardware zelf basale **Profiel**-blokken van 30 minuten ondersteunt, ondersteunt **AAPS** dit NIET.

### Basaalstanden van 0 E/u in het profiel worden NIET ondersteund in AAPS
De DASH ondersteunt wel een basaalstand van nul, maar **AAPS** gebruikt veelvouden van de basaalstand uit het **Profiel** van de gebruiker om automatische behandelingen te bepalen. Het kan daarom niet werken met een basaalstand van nul.  
Een tijdelijke basaalstand van nul kun je wel krijgen met de functie "Verbreek verbinding met de pomp", of met een combinatie van Loop uitschakelen/tijdelijke basaalstand of Onderbreek loop/tijdelijke basaalstand.  
**LET OP:** De laagste basaalstand die de DASH in **AAPS** toestaat is 0,05 E/u.

## Dash selecteren in AAPS

There are **two** ways to select the Omnipod DASH driver in **AAPS**:

### Optie 1: Nieuwe installaties

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

### Controleren of de Omnipod-driver is geselecteerd

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

### Velden

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

### Knoppen

The buttons at the bottom of the pump screen change with the state of the pod. Only the buttons that make sense at that moment are shown.

- **Refresh:** Asks the pod for its current status.
  - *Use it to update the pod status and to clear fields that show (uncertain).*
  - *See the [Troubleshooting](#omnipod-dash-troubleshooting) section below for more information.*

- **Silence Alerts:** Stops the pod alert beeps (for example pod expiry or low reservoir). Shown only while the pod has an active alert. See [Silencing Pod Alerts](#omnipod-dash-silencing-pod-alerts).

- **Resume Delivery:** Resumes insulin delivery on a suspended pod. Shown only when delivery is suspended. See [Resuming Insulin Delivery](#omnipod-dash-resuming-insulin-delivery).

- **Set time:** Updates the pod to the time zone of your phone by sending your basal **Profile** again. Shown only when the time zone of the pod differs from the time zone of your phone.

- [**Activeer Pod**](#omnipod-dash-activate-pod): Vult en activeert een nieuwe pod. Shown when no pod is active.

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

## Activeer Pod

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

8. On the **Insert Cannula** step, **AAPS** sets your basal schedule and the pod inserts the cannula. This can take some time (1-2 minutes maximum). **Wees geduldig!**

   ***NOTE:** It is good practice to pinch the skin near the cannula insertion point before the cannula is inserted. This helps the needle go in smoothly and lowers your chance of occlusions (blockages).*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

9. When the cannula has been inserted successfully, the **Next** button appears. Press **Next**.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

10. The **Pod Activated** step is shown. Check that the cannula has been inserted correctly, and change the pod if you think it has not.

    Press **Finish**.

    Gefeliciteerd! Je hebt nu een nieuwe pod-sessie gestart.

    ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

11. You are back on the DASH pump screen. It now shows the information of your active pod, including the current basal rate, reservoir level, insulin delivered, pod errors and alerts. **Activate Pod** is replaced by **Deactivate Pod**: you cannot activate another pod without deactivating the active pod first.

    ***NOTE:** For more details on the information shown, see [The DASH pump screen](#omnipod-dash-tab).*

    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

    ***NOTE:** It is good practice to export your settings AFTER activating the pod. Export your settings after each pod change and once a month. Copy the exported settings file to a cloud storage location (for example Google Drive) or somewhere off your phone in case you lose your phone (see [**Export settings**](../Maintenance/ExportImportSettings.md)).*

If an earlier activation stopped after the pod was primed, pressing **Activate Pod** continues from the **Attach Pod** step.

(omnipod-dash-deactivate-pod)=

## Deactiveer Pod

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

## Insulinetoediening hervatten

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

## Pod-alarmen stilzetten

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

## Pod Historie bekijken

This section explains how to look at the history of your active pod and filter it by type of action. The pod history shows the commands sent to your active pod and their results during its three-day (72 - 80 hours) life.

It is useful to check the boluses, TBRs and basal commands that were sent to the pod. The other categories help with troubleshooting and show the order of events that led up to a failure.

**NOTE:** **Only the last command can be uncertain**. New commands *are not sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. To 'fix' an uncertain command, press **Refresh** on the DASH pump screen.

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

## Dash-instellingen

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

### Waarschuwingen

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

### Notificaties

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

### Niveau

**Insulineniveau**

The insulin level shown is the amount reported by the pod. However, the pod only reports the actual reservoir level when it is below 50 units. Until then, *Over 50 U left* is shown. The amount reported is not exact: when the pod reports 'empty', in most cases the reservoir still has a few units of insulin left.

The DASH pump screen shows the level as follows:

  * **Over 50 U left** - The pod reports more than 50 units in the reservoir.
  * **Below 50 units** - The exact amount of insulin left in the reservoir, as reported by the pod.

Extra opmerking:
  * **SMS** - Returns the value, or 50+U when over 50 units, in SMS responses.
  * **Nightscout** - Uploads a value of 50 when over 50 units to Nightscout (version 14.07 and older). Newer versions report a value of 50+ when over 50 units.

(omnipod-dash-troubleshooting)=

## Probleemoplossing

Dit deel behandelt bekende problemen en oplossingen bij het gebruik van Omnipod DASH met AAPS. Er is ook een deel [Algemene probleemoplossing](../GettingHelp/GeneralTroubleshooting.md) in de documentatie. Lees dat ook, want het behandelt ook onderwerpen die voor sommige Pod-problemen belangrijk zijn.

---

(omnipod-dash-bluetooth-related-issues)=

## Problemen met Bluetooth

Voor bekende problemen met Bluetooth-verbindingen, het wegvallen van pomp/pods, of problemen met activeren en verbinden: zie [Bluetooth-probleemoplossing](../GettingHelp/BluetoothTroubleshooting.md)

---

(omnipod-dash-delivery-suspended)=

### Toediening onderbroken

  - Er is geen knop meer om te onderbreken. Als je de pod wilt "onderbreken", kun je een **TBR** van nul instellen voor x minuten.
  - Bij een **Profiel wissel** moet DASH de toediening onderbreken voordat het nieuwe basale **Profiel** wordt ingesteld. Als de communicatie tussen de twee opdrachten mislukt, kan de toediening onderbroken blijven. Als dit gebeurt:
     - Er wordt geen insuline toegediend, ook geen basaal, SMB, handmatige bolus enz.
     - Je kunt een melding krijgen dat een van de opdrachten niet bevestigd is: dit hangt af van het moment waarop de fout gebeurde.
     - **AAPS** probeert elke 15 minuten het nieuwe basale profiel in te stellen.
     - **AAPS** toont elke 15 minuten een melding dat de toediening onderbroken is, zolang de toediening nog onderbroken is (hervatten van de toediening is mislukt).
     - The [**Resume Delivery**](#omnipod-dash-resuming-insulin-delivery) button is shown on the DASH pump screen if you want to resume delivery manually.
     - Als het **AAPS** zelf niet lukt om de toediening te hervatten (dit gebeurt als de pod niet bereikbaar is, het geluid uit staat enz.), gaat de pod 3 minuten lang elke minuut 4 keer piepen. Dit herhaalt zich elke 15 minuten als de toediening langer dan 20 minuten onderbroken blijft.
  - For unconfirmed commands, press **Refresh** on the DASH pump screen to confirm or deny them.

*****LET OP:** Als je de pod hoort piepen, ga er dan niet van uit dat de toediening doorgaat zonder op de telefoon te kijken. De toediening kan onderbroken blijven, ***dus je moet het controleren!******

---
(omnipod-dash-pod-failures)=

### Pod-storingen

- Pods falen soms door allerlei problemen, ook door hardwareproblemen met de Pod zelf.
- Het is beter om geen ondersteunings- of vervangingsverzoeken bij Insulet in te dienen, omdat AAPS geen goedgekeurde manier is om de Pods te gebruiken.
- Een lijst met foutcodes is [**hier te vinden**](https://github.com/openaps/openomni/wiki/Fault-event-codes), om de oorzaak te helpen bepalen.

When a pod fails, it stops delivering insulin and beeps continuously. **AAPS** shows a notification on the main screen with the fault code and name, and the *Ref:* code, for example *Pod Fault: 020 ALARM_OCCLUDED*. Press **Dismiss** to close the notification. This does not stop the pod beeping.

![A pod fault notification](../images/v4/Pumps/dash_pod_fault_notification.png)

On the DASH pump screen, the **Pod Status** field shows **ALARM**, the **Errors** field shows the pod fault, and the **PDM Notification** field explains it, for example *Occlusion Detected. Insulin delivery stopped. Change Pod now. Check your BG*.

![The DASH pump screen after a pod fault](../images/v4/Pumps/dash_pump_screen_pod_fault.png)

A failed pod cannot be used again. Check your blood glucose, then [deactivate the pod](#omnipod-dash-deactivate-pod) and activate a new one.

---
### Pod-storingen met fout 49 voorkomen

Deze fout heeft te maken met een verkeerde pod-status voor een opdracht, of met een fout tijdens een opdracht voor insulinetoediening. Dit gebeurt als de driver en de Pod het niet eens zijn over de werkelijke status. De Pod reageert dan (als ingebouwde veiligheidsmaatregel) met een onherstelbare foutcode 49 (0x31). Dit eindigt in wat bekendstaat als een “screamer”: de lange, irritante pieptoon die alleen stopt als je op de juiste plek aan de achterkant van de Pod een gat prikt. De precieze oorzaak van een “49 pod-storing” is vaak moeilijk te vinden. In situaties waarin deze fout waarschijnlijk optreedt (bijvoorbeeld bij crashes van de app, bij het gebruik van een ontwikkelversie of bij een herinstallatie).

---

### Waarschuwingen ‘Pomp niet beschikbaar’

Als er gedurende een ingestelde tijd geen verbinding met de pod kan worden gemaakt, verschijnt een waarschuwing “Pomp niet beschikbaar”. Pump unreachable alerts can be configured by pressing the **Settings** (gear) icon on the top right of the main screen, then selecting **Local Alerts** ➜ **Pump unreachable threshold**. De aanbevolen waarde is een waarschuwing na **120** minuten.

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
### Importing settings that contain Pod state from an inactive Pod

Als je instellingen importeert met gegevens van een Pod die niet meer actief is, probeert AAPS daarmee verbinding te maken. Dat mislukt natuurlijk. You cannot activate a new Pod in this situation.

Om de oude pod-sessie te verwijderen:
1. On the DASH pump screen, press **Deactivate Pod**. The deactivation will most likely fail.
2. When it fails, press **Discard Pod** and confirm (see [Discarding a pod](#omnipod-dash-discard-pod)).
3. Once the old pod is removed, you can activate a new pod.

### Generic error: java.lang.IllegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

If you receive this error when attempting to Initialize a new pod **AAPS** fails as it still has settings for an old pod stored in configuration.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

This can happen if you restore from a backup, or a pod deactivation fails.

To resolve it, press **Cancel** to leave the activation. On the DASH pump screen, press **Discard Pod** if it is shown. Otherwise press **Deactivate Pod**, and when the deactivation fails, press **Discard Pod** (see [Discarding a pod](#omnipod-dash-discard-pod)).

You should now be able to Activate a new pod.

---
### Reinstalling AAPS

Als je **AAPS** verwijdert, verlies je al je instellingen, doelen en de huidige Pod-sessie. **Zorg dat je een recent geëxporteerd instellingenbestand hebt om ze terug te zetten!**

When on an active Pod, use an export made during the current Pod session (see [Export and import settings](#omnipod-dash-export-import)).

1. Exporteer je instellingen en bewaar een kopie op een veilige plek (bijv. Google Drive).
2. Verwijder **AAPS** en herstart je telefoon.
3. Installeer de nieuwe versie van **AAPS**.
4. Importeer je instellingen.
5. Controleer alle instellingen (importeer eventueel de instellingen opnieuw).
6. Activeer een nieuwe pod.
7. Als je klaar bent: exporteer de huidige instellingen.

---
### Updating AAPS to a newer version

Meestal is verwijderen niet nodig. Je kunt een installatie “over de bestaande heen” doen door de installatie van de nieuwe versie te starten. Dit kan ook tijdens een actieve Pod-sessie.

1. Exporteer je instellingen.
2. Installeer de nieuwe versie van **AAPS**.
3. Controleer of de installatie is gelukt
4. HERVAT de Pod of activeer een nieuwe pod.
5. Als je klaar bent: exporteer de huidige instellingen.

---
### Omnipod driver alerts

The Omnipod Dash driver presents a variety of unique alerts on the **main screen**, most of them are informational and can be dismissed while some provide the user with an action requiring their input to resolve the cause of the triggered alert.

Hieronder staat een overzicht van de belangrijkste waarschuwingen die je kunt tegenkomen:

- *Pod Fault: XXX NAME*, followed by *Ref: ...*: the pod has failed and stopped delivering insulin. Change the pod. See [Pod Failures](#omnipod-dash-pod-failures).
- *No Active Pod*: no pod session was found. This notification keeps coming back until you activate a new pod. Once a pod is activated, it disappears automatically.
- *Insulin delivery suspended*: the pod has suspended insulin delivery. See [Resuming Insulin Delivery](#omnipod-dash-resuming-insulin-delivery).
- *Setting basal profile might have failed. Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed.* Setting the basal **Profile** on the pod may have failed. Press **Refresh** on the DASH pump screen (the message still says "Omnipod tab"), and press **Resume Delivery** if it is shown.
- *Unable to verify whether SMB (X U) succeeded. Refresh pod status to confirm or deny this command.* **AAPS** could not confirm that the **SMB** was delivered. Press **Refresh** on the DASH pump screen and check the **Last bolus** field.
- *Bolus delivery status uncertain. Refresh pod status to confirm or deny.* The same for a normal bolus: press **Refresh** on the DASH pump screen.
- *Timezone on pod is different from the timezone on phone. Basal rate is incorrect. Switch profile to fix* See the DST and timezone note in [Omnipod DASH known AAPS constraints/issues](#omnipod-dash-constraints).

(omnipod-dash-where-to-get-help-for-dash)=

## Waar je hulp kunt krijgen

Al het ontwikkelwerk voor de DASH wordt door de community gedaan op **vrijwillige** basis. Houd hier rekening mee en volg deze richtlijnen voordat je om hulp vraagt:

-  **Niveau 0:** Lees het betreffende deel van deze documentatie, zodat je begrijpt hoe de functie waarmee je problemen hebt hoort te werken.
-  **Niveau 1:** Als je nog steeds problemen hebt die je met dit document niet kunt oplossen, ga dan naar het kanaal *#AAPS* op **Discord** met [deze uitnodigingslink](https://discord.gg/4fQUWHZ4Mw). Er zijn ook veel Facebook- en andere groepen waar je vragen kunt stellen (zie [**Hulp krijgen**](../GettingHelp/WhereCanIGetHelp.md))
-  **Niveau 2:** Zoek in de bestaande issues of je probleem al gemeld is, op [Issues](https://github.com/nightscout/AndroidAPS/issues) als het al bestaat, bevestig het dan, reageer erop of voeg informatie over jouw probleem toe. Zo niet, maak dan een [nieuw issue](https://github.com/nightscout/AndroidAPS/issues) aan en voeg [je logbestanden](../GettingHelp/AccessingLogFiles.md) toe.
-  **Wees geduldig - de meeste leden van onze community zijn vriendelijke vrijwilligers, en het oplossen van problemen kost vaak tijd en geduld van zowel gebruikers als ontwikkelaars.**

Als je om hulp vraagt, zorg dan dat je de volgende informatie bij de hand hebt. Zo kan de community je beter helpen met je vragen en problemen:
- Merk en model van je Android-telefoon
- Versie van Android (bijv. 15 of 16)
  - Heb je onlangs je Android-versie bijgewerkt?
- De versie van **AAPS** die je gebruikt
- Een eenvoudige beschrijving van je probleem, met aandacht voor de volgende punten
   - Werkte het eerder wel?
   - Wanneer werkte het wel of niet?
   - Heb je iets veranderd in de configuratie of in de profielinstellingen?
   - Did you pair a new Bluetooth device?
   - Heb je een nieuwe app bijgewerkt of geïnstalleerd?
   - Hoe lang werkte het voordat het stopte?
