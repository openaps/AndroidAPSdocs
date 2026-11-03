# CareLevo

The CareLevo is a tubeless patch pump made by CareMedi. Each patch holds up to 300 U of insulin and is worn for up to 7 days (168 hours). It communicates with **AAPS** over your phone's Bluetooth, with no additional device.

```{admonition} New driver
:class: warning
Driverul CareLevo este nou în **AAPS**. Read this whole page before you activate your first patch, and keep the pump's own instructions for use at hand.
```

The smallest dose the patch can deliver is 0.05 U. Set your basal rates in the **Profile** to a minimum of 0.05 U/h in steps of 0.05 U/h, otherwise the insulin the **Profile** expects and the insulin the patch delivers differ slightly. **AAPS** folosește ratele bazale acceptate de plasture.

```{contents} Table of contents
:depth: 1
:local: true
```

## Capacități pompă cu AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Bolus in steps of 0.05 U.
* Basal rates from 0.05 U/h to 15 U/h in steps of 0.05 U/h, with 30-minute basal segments.
* Rate bazale temporare setate ca rată absolută, până la 12 ore.
* Extended bolus up to 8 hours.
* DST and timezone changes must be handled manually. Plasturele vă anunță când se schimbă fusul orar.

## Configurare pompă

1. Deschideți **meniul** (☰) din colțul din stânga sus al ecranului principal **AAPS** și selectați **Configurație**.
1. Selectați **Carelevo** în secțiunea Pompă.
1. Apăsați tasta Înapoi pentru a reveni la ecranul principal.

![Modulul Carelevo selectat în Configurație > Pompă](../images/v4/Pumps/carelevo_enabled.png)

## Setări

Deschideți ecranul pompei cu **Gestionați → Pompă** (sau **Configurație → Pompă → Deschideți modulul**).

Open the CareLevo settings by pressing the **Settings** (gear) icon in the upper right corner. Sunt disponibile trei setări:

![Setările driverului Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Setare notificare nivel scăzut de insulină

The patch notifies you when the insulin remaining in the reservoir reaches the chosen amount. It can be set from 20 U to 50 U in 5 U steps. The default is 30 U. Independently of this setting, the patch raises a critical alarm and stops delivering insulin when less than 10 U remain.

### Setare notificare utilizare plasture

Plasturele vă anunță când a fost purtat numărul de ore ales, ca să puteți planifica schimbarea. It can be set from 24 to 167 hours. Valoarea implicită este 116 ore.

### Alarmă informații plasture

When this is on, the patch beeps when a bolus, extended bolus or temporary basal starts and when it ends. The default is off.

## Ecranul pompei

![Ecranul pompei Carelevo fără plasture activ](../images/v4/Pumps/carelevo_pump_screen.png)

The pump screen shows the **Bluetooth status** (No Active Patch, Disconnected or Connected), the **Serial No.** of the patch, its **Activation Time** and **Expiration**, the current **Basal Rate** and **Temp basal rate**, the **Insulin Remaining** (remaining / filled), the **Patch Time Remaining** and the **Total insulin delivered**.

Butoanele depind de starea plasturelui:

* **Activați plasturele**: pornește activarea unui plasture nou, vedeți mai jos.
* **Insulin Guide**: shows the twelve steps for filling a patch with insulin.
* **Suspend Infusion** / **Resume Infusion**: pauses and restarts insulin delivery, see below.
* **Discard Patch**: stops the current patch so a new one can be activated.

## Activarea unui plasture

Before you start, make sure a **Profile** is active in **AAPS** and that Bluetooth is on. The patch must be activated within a limited time once it is switched on; if the time runs out, the patch raises a **Patch Application Timeout** alarm and cannot be used.

Apăsați **Activați plasturele** pe ecranul pompei și urmați pașii. You can cancel at any time before the needle is inserted; what you have entered is discarded.

### Selectați insulina

Confirmați insulina pe care o folosiți. Plasturele necesită insulină cu acțiune rapidă U-100.

### Umpleți plasturele cu insulină

Fill the patch with 50 to 300 U, considering how long you will wear it. Apăsați **Ghid insulină** dacă aveți nevoie de instrucțiunile de umplere. Then tap the fill amount and select the amount you filled; **AAPS** uses it to show the insulin remaining.

### Conectați plasturele

1. Scoateți plasturele din blister și îndepărtați capacul acului.
1. Apăsați butonul de pornire al plasturelui mai mult de o secundă. După semnalul sonor, apăsați **Căutați plasturele**.
1. When the patch found is the right one, tap **Confirm**. Tap **Rescan** if it is not.

### Verificare de siguranță

După ce plasturele este conectat, apăsați **Verificare de siguranță**. Plasturele se testează singur și se amorsează. Check that a droplet of insulin has formed at the needle tip. Dacă nu se vede nicio picătură, apăsați **Reîncercați**. When the check is complete, press **Next**.

### Locul de aplicare și atașarea plasturelui

1. Selectați locul unde veți purta plasturele.
1. Curățați bine locul cu un tampon cu alcool.
1. Remove the backing tape and attach the patch to your skin with the marked dot facing upward.
1. Apăsați **Următor** după ce plasturele este lipit.

### Inserați acul

1. Turn the safety cap in the direction of the arrow and remove it.
1. Press the applicator push button all the way down and hold it for 10 seconds. A beep sounds when the needle is inserted.
1. Îndepărtați aplicatorul și apăsați **Confirmați inserarea**.

Dacă inserarea eșuează, **AAPS** vă spune câte încercări au mai rămas. When no attempt is left, the patch raises a **Needle Insertion Error** alarm and must be replaced.

Administrarea insulinei începe imediat ce inserarea este confirmată.

## Bolus messages

Dacă plasturele refuză un bolus, **AAPS** vă spune de ce. For example *Bolus can't be delivered. Bolus disponibil: 2,8 U* înseamnă că plasturele poate administra acum doar această cantitate.

If you stop a bolus and the patch does not confirm the stop, **AAPS** waits for the bolus to end and records the amount the patch reports. If a bolus was not recorded (for example because it was stopped while it was running), **AAPS** adds it from the patch total and asks you to check IOB before you try again.

## Suspendarea și reluarea administrării insulinei

Press **Suspend Infusion** on the pump screen and select how long delivery should pause: from 30 minutes to 4 hours in 30-minute steps. Delivery does not resume by itself: when the pause is over, the patch raises a **Start Insulin** alert. Press **Resume Infusion** on the pump screen, or **Start Insulin** on the alert, and confirm.

## Eliminarea unui plasture

Apăsați **Eliminați plasturele** pe ecranul pompei și confirmați. Administrarea insulinei se oprește și plasturele nu mai poate fi folosit. Scoateți plasturele de pe corp și activați unul nou.

When a critical alarm has stopped the patch, the alarm offers **Deactivate Patch** instead. Apăsarea lui elimină plasturele în același mod.

(carelevo-alarms-and-notifications)=

## Alarme și notificări

Plasturele raportează evenimente pe trei niveluri. Toate sunt afișate ca notificări **AAPS**.

### Alarme critice

Administrarea insulinei s-a oprit. Act now:

* **Low Insulin**: less than 10 U remain. Dezactivați plasturele și schimbați-l.
* **Patch Expired**: the patch reached the end of its life. Dezactivați plasturele și schimbați-l.
* **Baterie aproape descărcată**: eliminați plasturele și schimbați-l.
* **Temperatură ridicată/scăzută**: mergeți într-un loc cu temperatură potrivită, între 40 ℉ și 99 ℉ (4,4 ℃ și 37,2 ℃).
* **Auto-Off**: the patch stopped because the Auto-Off alert was ignored. Press **Start Insulin** to restart basal delivery.
* **Timpul de aplicare a plasturelui a expirat**, **Autodiagnosticare eșuată**, **Eroare plasture**, **Ocluzie** și **Eroare la inserarea acului**: dezactivați plasturele și schimbați-l.

### Alerte

Administrarea insulinei continuă, dar ceva necesită atenția dumneavoastră:

* **Low Insulin**: the reservoir reached the amount set in **Low Insulin Notification Setting**. Pregătiți-vă să schimbați plasturele.
* **Plasturele va expira în curând** și **Durata de funcționare a plasturelui a expirat**: schimbați plasturele.
* **Baterie aproape descărcată**: pregătiți-vă să schimbați plasturele.
* **Temperatură ridicată/scăzută**: administrarea este oprită temporar până când plasturele revine între 40 ℉ și 99 ℉ (4,4 ℃ și 37,2 ℃).
* **Auto-oprire**: apăsați **OK**. Dacă este ignorată, alerta devine alarmă critică și administrarea se oprește.
* **Activarea plasturelui nu este finalizată**: apăsați **OK** pentru a finaliza activarea.
* **Start Insulin**: the pause you set has ended. Apăsați **Porniți insulina** pentru a relua administrarea.
* **Porniți Bluetooth** și **BLE neconectat**: telefonul nu poate comunica cu plasturele. Porniți Bluetooth sau verificați conexiunea cu plasturele.

### Notices

For information only: **Low Insulin**, **Patch Usage Time Notification** (the time set in **Patch Usage Notification Setting** has passed), **Patch Check Notification**, **Time Zone Change** and **Check Blood Glucose** (a set time after a bolus).

The patch also reports when its own low glucose suspend (**LGS**) function starts or ends. **AAPS** nu folosește această funcție; bucla gestionează singură glicemia scăzută.

## Unde să obțineți ajutor

Report problems with the CareLevo driver on the [AAPS GitHub issues page](https://github.com/nightscout/AndroidAPS/issues) or in the AAPS community channels, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
