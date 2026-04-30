# Medtrum Nano / 300U

These instructions are for configuring the Medtrum insulin pump.

Această aplicație face parte dintr-o soluție DIY (do-it-yourself/ o aplicație pe care o construiți singur) și nu este un produs finit; și necesită ca dumneavoastră să citiți, să învățați și să înțelegeți sistemul, de la construcție pana la modul de utilizare. You alone are responsible for what you do with it.

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS
* All loop functionality supported (SMB, TBR etc)
* Automatic DST and timezone handling
* Extended bolus is not supported by AAPS driver

## Cerințe hardware și software
* **Compatible Medtrum pumpbase and reservoir patches**
    - Currently supported:
        - Medtrum TouchCare Nano with pumpbase refs: **MD0201** and **MD8201**.
        - Medtrum TouchCare 300U with pumpbase ref: **MD8301**.
        - If you have an unsupported model and are willing to donate hardware or assist with testing, please contact us via discord [here](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **Version 3.2.0.0 or newer of AAPS built and installed** using the [Build APK](../SettingUpAaps/BuildingAaps.md) instructions.
* **Compatible Android phone** with a BLE Bluetooth connection
    - See AAPS [Release Notes](../Maintenance/ReleaseNotes.md)
* [**Continuous Glucose Monitor (CGM)**](../Getting-Started/CompatiblesCgms.md)

## Înainte să începeți

**SAFETY FIRST** Do not attempt this process in an environment where you cannot recover from an error (extra patches, insulin, and pump control devices are must-haves).

**The PDM and Medtrum App will not work with a patch that is activated by AAPS.** Previously you may have used your PDM or Medtrum app to send commands to your pump. For security reasons you can only use the activated patch with the device or app that was used to activate it.

*This does NOT mean that you should throw away your PDM. It is recommended to keep it somewhere safe as a backup in case of emergencies, for instance if your phone gets lost or AAPS is not working correctly.*

**Your pump will not stop delivering insulin when it is not connected to AAPS** Default basal rates are programmed on the pump as defined in the current active profile. As long as AAPS is operational, it will send temporary basal rate commands that run for a maximum of 120 minutes. If for some reason the pump does not receive any new commands (for instance because communication was lost due to pump - phone distance) the pump will fall back to the default basal rate programmed on the pump once the Temporary Basal Rate ends.

**30 min Basal Rate Profiles are NOT supported in AAPS.** **The AAPS Profile does not support a 30 minute basal rate time frame** If you are new to AAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the Medtrum pump hardware itself supports the 30 min basal rate profile increments, AAPS is not able to take them into account with its algorithms currently.

**0U/h profile basal rates are NOT supported in AAPS** While the Medtrum pump does support a zero basal rate, AAPS uses multiples of the profile basal rate to determine automated treatment and therefore cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.

## Instalare

CAUTION: When activating a patch with AAPS you **MUST** disable all other devices that can talk to the Medtrum pumpbase. spre exemplu telecomandă activă și aplicație Medtrum. Asigurați-vă că aveți baza pompei dumneavoastră și numărul de serie al bazei pompei pregătit pentru activarea unui nou plasture.

### Pasul 1: Selectați pompa Medtrum

#### Opțiunea 1: Instalări noi

Dacă instalați AAPS pentru prima dată, **Asistentul de configurare** vă va ghida în instalarea AAPS. Selectați "Medtrum" când ajungeți la selecția pompei.

Dacă aveți dubii puteți selecta "Pompa virtuală" și selecta "Medtrum" mai târziu, după ce ați configurat AAPS (vedeți opțiunea 2).

![Asistent de configurare](../images/medtrum/SetupWizard.png)

#### Opțiunea 2: Configurator

Pe o instalare existentă, puteți selecta pompa **Medtrum** în [Configurator > Pompa](#Config-Builder-pump):

În colțul din stânga sus **meniu hamburger** selectați **Configurator**\ ➜\ **Pompă**\ ➜ \ **Medtrum**\ prin selectarea butonului **Activare** intitulat **Medtrum**.

Selectarea **casetei de selectare** lângă **Roata Zimțată de Setări** va permite privirii de ansamblu asupra Medtrum să fie afișată ca o filă în interfața AAPS intitulată **Medtrum**. Bifarea acestei casete vă va facilita accesul la comenzile Medtrum atunci când folosiți AAPS și este recomandată în mod special.

![Configurarea Sistemului (Config Builder)](../images/medtrum/ConfigBuilder.png)

### Pasul 2: Modificați setările Medtrum

Introduceți setările Medtrum prin atingerea **Rotiței zimțate a Setărilor** din modulul Medtrum în Configurator.

![Setări Medtrum](../images/medtrum/MedtrumSettings.png)

#### Număr de serie:

Introduceți aici numărul de serie al bazei pompei dumneavoastră așa cum este înscris pe baza pompei. Asigurați-vă că numărul de serie este corect și că nu există spații adăugate (puteți folosi litere mari sau mici).

NOTĂ: Această setare poate fi schimbată doar când nu există un plasture activ.

#### Setări alarmă

***Implicit: semnal sonor.***

Această setare schimbă modul în care pompa vă va alerta atunci când există un avertisment sau o eroare.

- Semnal sonor > Plasturele va suna la alarme și avertismente
- Silențios > Plasturele nu vă va alerta prin alarme și avertismente

Notă: În modul silențios, AAPS încă va suna alarma în funcție de setările de volum ale telefonului. Dacă nu răspundeți la alarmă, în cele din urmă plasturele va emite un semnal sonor.

#### Notificare la avertizarea pompei

***Implicit: Activat.***

Aceste setări schimbă modul în care AAPS va afișa notificarea în cazul avertismentelor non-critice ale pompei. Când este activată, o notificare va fi afișată pe telefon atunci când apare un avertisment al pompei, inclusiv:
    - Baterie slabă
    - Rezervor redus (20 de unități)
    - Avertizare de expirare a plasturelui

În orice caz, aceste avertismente sunt afișate și în ecranul privire de ansamblu al Medtrum sub [Alarme active](#medtrum-active-alarms).

(medtrum-patch-expiration)=
#### Expirare plasture

***Implicit: Activat.***

Această setare schimbă comportamentul plasturelui. Când este activat, plasturele va expira după 3 zile și va emite un avertisment sonor dacă aveți sunetul activat. După 3 zile și 8 ore, plasturele va înceta să funcționeze.

Dacă această setare este dezactivată, plasturele nu vă va avertiza și va continua să ruleze până când bateria plasturelui sau rezervorul se vor termina.

#### Avertizare de expirare pompă

***Implicit: 72 de ore.***

Această setare schimbă ora de expirare când [Expirare plasture](#medtrum-patch-expiration) este activată, AAPS va notifica la o oră după activare.

#### Insulină maximă pe oră

***Implicit: 25U.***

Această setare modifică cantitatea maximă de insulină care poate fi administrată într-o oră. Dacă această limită este depășită, plasturele se va suspenda și va da o alarmă. Alarma poate fi resetată prin apăsarea butonului de resetare din meniul general vedeți [Resetați alarmele](#nano-reset-alarms).

Stabiliți aceasta la o valoare rezonabilă pentru necesarul dumneavoastră de insulină.

#### Insulină maximă zilnică

***Implicit: 80U.***

This setting changes the maximum amount of insulin that can be delivered in one day. Dacă această limită este depășită, plasturele se va suspenda și va da o alarmă. Alarma poate fi resetată prin apăsarea butonului de resetare din meniul general vedeți [Resetați alarmele](#nano-reset-alarms).

Stabiliți aceasta la o valoare rezonabilă pentru necesarul dumneavoastră de insulină.

#### Scan on Connection error

***Default: Off.***

Located under **Advanced Settings**.

Only enable if you have connection problems. If enabled the driver scans for the pump again before trying to reconnect to the pump. Make sure you have Location permission set to "Always allow".

### Step 2b: AAPS Alerts settings

Go to preferences

#### Pump:

##### BT Watchdog

Go to preferences and select **Pump**:

![BT Watchdog](../images/medtrum/BTWatchdogSetting.png)

##### BT Watchdog

This setting will try to work around any BLE issues. It will try to reconnect to the pump when the connection is lost. It will also try to reconnect to the pump when the pump is unreachable for a certain amount of time.

Enable this setting if you experience frequent connection issues with your pump.

#### Local Alerts:

Go to preferences and select **Local Alerts**:

![Local Alerts](../images/medtrum/LocalAlertsSettings.png)

##### Alert if pump is unreachable

***Implicit: Activat.***

This setting is forced to enabled when the Medtrum driver is enabled. It will alert you when the pump is unreachable. This can happen when the pump is out of range or when the pump is not responding due to a defective patch or pumpbase, for example when water leaks between the pumpbase and the patch.

For safety reasons this setting cannot be disabled.

##### Pump unreachable threshold [min]

***Default: 30 min.***

This setting changes the time after which AAPS will alert you when the pump is unreachable. This can happen when the pump is out of range or when the pump is not responding due to a defective patch or pumpbase, for example when water leaks between the pumpbase and the patch.

This setting can be changed when using Medtrum pump but it is recommended to set it at 30 minutes for safety reasons.

### Step 3: Activate patch

**Before you continue:**
- Have your Medtrum Nano pumpbase and a reservoir patch ready.
- Make sure that AAPS is properly set up and a [profile is activated](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
- Other devices that can talk to the Medtrum pump are disabled (PDM and Medtrum app)

#### Activate patch from the Medtrum overview Tab

Navigate to the [Medtrum TAB](#nano-overview) in the AAPS interface and press the **Change Patch** button in the bottom right corner.

If a patch is already active, you will be prompted to deactivate this patch first. see [Deactivate Patch](#nano-deactivate-patch).

Follow the prompts to fill and activate a new patch. Please note - it is important to only connect the pumpbase to the reservoir patch at the step when you are prompted to do so. **You must only put the pump on your body and insert the cannula when prompted to during the activation process (after priming is complete).**

##### Start Activation

![Start Activation](../images/medtrum/activation/StartActivation.png)

At this step, double check your serial number and make sure the pumpbase is not connected to the patch yet.

Press **Next** to continue.

##### Fill the patch

![Fill the patch](../images/medtrum/activation/FillPatch.png)

Once the patch is detected and filled with a minimum of 70Units of insulin, press **Next** will appear.

##### Prime the patch

![Half press](../images/medtrum/activation/HalfPress.png)

Do not remove the safety lock and press the needle button on the patch.

Press **Next** to start prime

![Prime progress](../images/medtrum/activation/PrimeProgress.png)

![Amorsare finalizată](../images/medtrum/activation/PrimeComplete.png)

Odată ce amorsarea este finalizată, apăsați **Următorul** pentru a continua.

##### Atașați plasturele

![Atașați plasturele](../images/medtrum/activation/AttachPatch.png)

Curățați pielea, îndepărtați autocolantele și atașați plasturele pe corpul dumneavoastră. Îndepărtați piedica de siguranță și apăsați pe butonul acului de pe plasture pentru a introduce canula.

Apăsați **Următorul** pentru a activa plasturele.

(medtrum-activate-patch)=
##### Activați plasturele

![Activați plasturele](../images/medtrum/activation/ActivatePatch.png)

Când activarea este finalizată, va apărea următorul ecran

![Activare completă](../images/medtrum/activation/ActivationComplete.png)

**OK** pentru a reveni la ecranul principal.

(nano-deactivate-patch)=

### Dezactivați plasturele

Pentru a dezactiva un plasture activ, accesați [fila Medtrum](#nano-overview) din interfața AAPS și apăsați butonul **Schimbați plasture**.

![Dezactivați plasturele](../images/medtrum/activation/DeactivatePatch.png)

Vi se va cere să confirmați că doriți să dezactivați plasturele curent. **Vă rugăm să rețineți că această acțiune nu este reversibilă.** Când dezactivarea este finalizată, puteți apăsa **Următorul** pentru a continua procesul de activare a unui nou plasture. Dacă nu sunteți gata să activați un nou plasture, apăsați **Anulați** pentru a reveni la ecranul principal.

![Dezactivați progres](../images/medtrum/activation/DeactivateProgress.png)

Dacă Android APS nu poate dezactiva plasturele (de exemplu, pentru că baza pompei a fost deja scoasă din plasturele rezervor), puteți apăsa **Renunțați** pentru a uita sesiunea curentă a plasturelui și pentru a face posibilă activarea unui nou plasture.

![Dezactivare finalizată](../images/medtrum/activation/DeactivateComplete.png)

Odată ce dezactivarea este finalizată, apăsați **OK** pentru a reveni la ecranul principal sau apăsați **Următorul** pentru a continua procesul de activare a unui nou plasture.

(nano-resume-interrupted-activation)=

### Reluați activarea întreruptă

Dacă activarea unui plasture este întreruptă, de exemplu pentru că bateria telefonului se oprește, poți relua procesul de activare prin [fila Medtrum](#nano-overview) în interfața AAPS și apăsați butonul **Schimbați plasturele**.

![Reluați activarea întreruptă](../images/medtrum/activation/ActivationInProgress.png)

Apăsați **Următorul** pentru a continua procesul de activare. Apăsați **Aruncați** pentru a renunța la sesiunea curentă a plasturelui și pentru a face posibilă activarea unui nou plasture.

![Se citește starea activării](../images/medtrum/activation/ReadingActivationStatus.png)

Driverul va încerca să determine starea actuală a activării plasturelui. Dacă operațiunea a reușit, procesul de activare va continua de la pasul curent.

(nano-overview)=

## Privire de ansamblu

Vederea de ansamblu conține starea curentă a plasturelui Medtrum. Conține de asemenea butoane pentru a schimba plasturele, pentru a reseta alarme și a actualiza starea.

![Vederea de ansamblu Medtrum](../images/medtrum/Overview.png)

### Stare BLE:

Aceasta afișează starea curentă a conexiunii Bluetooth cu baza de pompă.

### Ultima conexiune:

Aceasta arată ultima dată când pompa a fost conectată la AAPS.

### Stare pompă:

Aceasta arată starea curentă a pompei. Spre exemplu:
    - ACTIV: Pompa este activată și rulează normal
    - OPRIT: Plasturele nu este activat

### Tip bazală:

Aceasta arată tipul bazalei curente.

### Rată bazală:

Acesta arată rata bazală curentă.

### Ultimul bolus:

Acest lucru arată ultimul bolus care a fost administrat.

### Active bolus:

This shows the active bolus that is currently being delivered.

(medtrum-active-alarms)=
### Active alarms:

This shows any active alarms that are currently active.

### Reservoir:

This shows the current reservoir level.

### Battery:

This shows the current battery voltage of the patch.

### Pump type:

This shows the current pump type number.

### FW version:

This shows the current firmware version of the patch.

### Patch no:

This shows the sequence number of the activated patch. This number is incremented every time a new patch is activated.

### Patch expires:

This shows the date and time when the patch will expire.

### Refresh:

This button will refresh the status of the patch.

### Change patch:

This button will start the process to change the patch. See [Activate patch](#medtrum-activate-patch) for more information.

(nano-reset-alarms)=

### Reset alarms

The alarm button will appear on the overview screen when there is an active alarm that can be reset. Pressing this button will reset the alarms and resume insulin delivery if the patch has been suspended due to the alarm. E.g. when suspended due to a maximum daily insulin delivery alarm.

![Reset alarms](../images/medtrum/ResetAlarms.png)

Press the **Reset Alarms** button to reset the alarms and resume normal operation.

## Switching phone, export/import settings

Când treceți la un telefon nou, sunt necesari următorii pași:
* [Exportați setările](../Maintenance/ExportImportSettings.md) pe telefonul tău vechi
* Transfer settings from old to new phone, and import them into AAPS

The imported settings file has to be of the same patch session that you are currently using, otherwise the patch will not connect.

After a settings import the driver will sync history with the pump, this can take a while depending on the age of the settings file.

From AAPS version 3.3.0.0 onwards, the sync progress is shown in the the home screen: ![Sync progress](../images/medtrum/SyncProgress.png)

## Depanare

### Connection issues

If you are experiencing connection timeouts or other connection issues:
- In Android application settings for AAPS: Set location permission to "Allow all the time".

### Bluetooth issues
Pentru probleme cunoscute cu conexiunile Bluetooth, întreruperile pompei, activarea și problemele de conexiune [Depanarea Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

### Activation interrupted

If the activation process is interrupted for example by and empty phone battery or phone crash. The activation process can be resumed by going to the change patch screen and follow the steps to resume the activation as outlined here: [Resume interrupted activation](#nano-resume-interrupted-activation)

### Preventing patch faults

The patch can give a variety of errors. To prevent frequent errors:
- Make sure the pumpbase is properly seated in the patch and no gaps are visible.
- When filling the patch do not apply excessive force to the plunger. Do not try to fill the patch beyond the maximum that applies to your model.

## Where to get help

Toată munca de dezvoltare pentru driverul Medtrum este realizată de comunitate pe bază **voluntară**; vă cerem să vă amintiți acest lucru și să utilizați următoarele recomandări înainte de a solicita asistență:

-  **Nivelul 0:** Citiți secțiunea relevantă a acestei documentații pentru a vă asigura că înțelegeți cum ar trebui să meargă funcționalitatea cu care aveți dificultăți.
-  **Nivelul 1:** Dacă încă întâmpinați probleme pe care nu le puteți rezolva folosind acest document, apoi vă rugăm să mergeți la canalul *#Medtrum* pe **Discord** folosind [această legătură de invitație](https://discord.gg/4fQUWHZ4Mw).
-  **Nivelul 2:** Căutați problemele existente pentru a vedea dacă problema dumneavoastră a fost deja raportată la [Probleme](https://github.com/nightscout/AAPS/issues) dacă există, vă rugăm să confirmați/comentați/adăugați informații despre problema dumneavoastră. Dacă nu, vă rugăm să creați o nouă problemă [](https://github.com/nightscout/AndroidAPS/issues) și să atașați [fișierele de jurnal](../GettingHelp/AccessingLogFiles.md).
-  **Fiți răbdători - majoritatea membrilor comunității noastre sunt voluntari bine-voitori, și rezolvarea problemelor necesită adesea timp și răbdare atât din partea utilizatorilor cât și din partea dezvoltatorilor.**