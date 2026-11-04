# EOPatch2

The patch needs rapid-acting U-100 insulin, such as NovoRapid or Humalog. Use the rapid-acting insulin your doctor has prescribed for you.

The smallest dose the patch can deliver is 0.05 U. Set every basal rate in your **Profile** to at least 0.05 U/hr, in steps of 0.05 U/hr. Otherwise **AAPS** rounds each rate to the nearest 0.05 U/hr (never down to 0) and uses the rates the patch really gives, so the total insulin per day differs slightly from your **Profile**. In the same way, boluses must be at least 0.05 U.

```{contents} Table of contents
:depth: 1
:local: true
```

## Capacități pompă cu AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually.

## Configurarea pompei

1. Deschideți **meniul** (☰) din colțul din stânga sus al ecranului principal **AAPS** și selectați **Configurație**.
1. În secțiunea **Pompă**, selectați **EOPatch2**.
1. Apăsați tasta Înapoi pentru a reveni la ecranul principal.

![Meniul cu intrarea Configurație](../images/v4/Configuration/configuration_menu.png) ![Configurație > Pompă cu modulul EOPatch2](../images/v4/Configuration/configuration_pump_list_3.png)

Once it is selected, the **EOPatch2** card shows two buttons, **Settings** and **Open plugin**:

![Modulul EOPatch2 selectat în Configurație > Pompă](../images/v4/Pumps/eopatch2_enabled.png)

## Setări

Deschideți setările EOPatch2 în unul din două moduri:

* apăsați **Setări** pe cardul **EOPatch2** din **Configurație**, sau
* open the pump screen (**Manage** → **Pump**) and press the gear icon in the top-right corner.

Există trei setări:

![Setările EOPatch2](../images/v4/Pumps/eopatch_settings.png)

### Alerte rezervor aproape gol

A warning appears when the insulin left in the patch drops to this amount or less. You can set it from 10 to 50 U, in steps of 5 U. The default is 10 U.

### Memento de expirare plasture

Reminds you how much time is left before the current patch expires. You can set it from 1 to 24 hours, in steps of 1 hour. Valoarea implicită este 4 ore.

### Memento audio plasture

When this is on, the patch beeps when a bolus, extended bolus or temporary basal starts and when it ends. It has no effect on your normal basal. The default is off.

## Activarea unui plasture nou

### Deschideți asistentul de activare

Deschideți ecranul pompei cu **Gestionați** → **Pompă** (sau apăsați **Deschideți modulul** pe cardul **EOPatch2** din **Configurație**). When no patch is active, the screen shows **Not activated** and an **Activate Patch** button at the bottom.

Apăsați **Activați plasturele** pentru a porni asistentul.

![Ecranul pompei EOPatch2 cu butonul Activați plasturele](../images/v4/Pumps/eopatch_pump_screen.png)

Asistentul vă ghidează prin fiecare pas. The row of dots at the top shows how far along you are.

```{note}
If you have never activated a **Profile** in **AAPS**, the wizard first shows a **Profile required** page. Select the profile to use and press **Activate profile**.
```

### Umplere insulină

Insert the syringe needle into the insulin fill port on the patch. Împingeți încet pistonul pentru a umple plasturele. Once there is more than 80 U in the patch, it beeps once and starts up (boots).

Când auziți semnalul sonor, apăsați **Începeți asocierea**.

![Pasul Umplere insulină cu butonul Începeți asocierea](../images/v4/Pumps/eopatch_activate_filling.png)

```{warning}
- Do not turn the needle action lever until the wizard tells you to. Turning it too early can cause serious problems during filling or the safety check.
- The patch holds 80 to 200 U. If you put in less than 80 U, the patch does not work.
- Take the insulin out of the refrigerator 15 to 30 minutes before filling, so it reaches room temperature. Insulina trebuie să aibă cel puțin 10°C.
```

### Asocierea plasturelui

**AAPS** încearcă acum să se asocieze automat cu plasturele. During pairing, two Android Bluetooth pairing requests appear. Press **OK** on the first one. Press **OK** again on the second one, which shows a passkey.

```{warning}
- Țineți plasturele și telefonul la cel mult 30 cm unul de celălalt în timpul asocierii.
- After the patch has booted, it beeps every 3 minutes until pairing is complete.
- You must finish activating the patch within 60 minutes of it booting. Dacă nu reușiți, eliminați plasturele.
```

![Pasul Asocierea plasturelui](../images/EOPatch/Bild6.png) ![Prima cerere de asociere Bluetooth](../images/EOPatch/Bild7.png) ![A doua cerere de asociere Bluetooth, cu cheia de acces](../images/EOPatch/Bild8.png)

```{admonition} Older screenshot
:class: note
The two Bluetooth pairing screenshots are from an earlier **AAPS** version: the **AAPS** screen behind the Android pairing request looks different in **AAPS** 4.
```

### Selectați insulina

Selectați insulina cu care ați umplut plasturele și apăsați **Următor**. **AAPS** applies a profile switch with this insulin after activation.

### Pregătiți-vă pentru atașarea plasturelui

Îndepărtați banda adezivă de pe plasture, apoi apăsați **Următor**.

If a needle sticks out, or if the patch is wet, dirty or its adhesive tape is folded, press **Discard** instead and use a new patch.

![Pasul Pregătiți-vă pentru atașarea plasturelui](../images/EOPatch/Bild9.png)

### Locul de inserție

This step only appears if **Manage pump site rotation** is turned on in the site rotation settings. Tap the place on the body diagram where you will attach the patch and press **Next**, or press **Skip**.

### Se atașează plasturele

Insulin should go into a spot with fatty tissue under the skin, but few nerves or blood vessels. Abdomenul, brațul sau coapsa sunt alegeri bune. Clean and dry the site, then attach the patch to your skin.

Check the infusion site, then press **Start safety check**.

```{warning}
- Press down the edges of the patch tape evenly, so the whole patch sticks firmly to your skin.
- If the patch does not stick completely, air can get between the patch and your skin. This weakens the adhesive and the water resistance of the patch.
```

![Pasul Se atașează plasturele](../images/EOPatch/Bild10.png)

### Verificare de siguranță

Verificarea de siguranță durează aproximativ 30 de secunde. When it is finished, the patch beeps once. Dacă eșuează, apăsați **Reîncercați**.

```{warning}
For safe use, do not turn the needle action lever until the safety check is complete.
```

![Pasul Se atașează plasturele cu butonul Începeți verificarea de siguranță](../images/EOPatch/Bild11.png) ![Safety check in progress](../images/EOPatch/Bild12.png)

```{admonition} Older screenshot
:class: note
The screenshots from **Prepare for attaching the Patch** to **Safety check** are from an earlier **AAPS** version and may look different in **AAPS** 4.
```

### Introducerea acului

Hold the patch firmly. Rotiți maneta de acționare a acului în sus cu mai mult de 100° pentru a introduce acul. The patch beeps once when the needle is inserted correctly. Then keep turning the lever all the way to remove it. Apăsați **Următor**.

```{caution}
If you go to the next step without hearing the beep, a **Needle insertion Error** appears. Check for the beep and press **Retry**. If the error remains, press **Discard** to deactivate the patch.
```

### A fost finalizată activarea plasturelui

The last page confirms that the patch is active and that it will remind you when it nears its expiration time. Apăsați **Finalizați** pentru a reveni la ecranul pompei.

## Eliminarea plasturelui

Înlocuiți plasturele când are puțină insulină, când expiră sau dacă este defect. We recommend using each patch for no more than 84 hours after it boots.

1. Deschideți ecranul pompei (**Gestionați** → **Pompă**). Cât timp un plasture este activ, apăsați **Eliminați plasturele**.
1. Pagina **Eliminați plasturele** arată timpul rămas și insulina rămasă în plasture. Apăsați **Eliminați plasturele**.
1. A dialog asks you to confirm. Apăsați din nou **Eliminați plasturele**.
1. When the patch has been deactivated, the wizard shows **Discarding the patch is completed.** Remove the patch from your body and press **Confirm**.

After that, the wizard continues straight on to activating a new patch (see above). Press the back arrow if you want to stop here.

While no patch is active, **AAPS** shows the pump as suspended and records a 0 U/hr temporary basal, so no basal insulin is counted in IOB until the next patch is activated.

![Ecranul pompei EOPatch2 cu butonul DISCARD/CHANGE PATCH](../images/EOPatch/Bild13.png) ![Pagina Eliminați plasturele](../images/EOPatch/Bild14.png) ![Discard Patch confirmation dialog](../images/EOPatch/Bild15.png) ![Eliminarea plasturelui s-a finalizat](../images/EOPatch/Bild16.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. In **AAPS** 4 you open the pump screen from **Manage** → **Pump**, and the button on it is labelled **Discard Patch**.
```

```{admonition} If the patch does not respond
:class: warning
If **AAPS** cannot reach the patch, it may show a page about turning off the patch's alarm by hand: remove the patch from your body, peel off the adhesive tape, and use a clip to press firmly into the hole next to the insulin fill port.

Pagina **Eliminați plasturele** are și un buton **Resetare forțată**. It only clears the patch from **AAPS**, without sending any command to the patch. The patch keeps delivering insulin until its battery runs out or you turn it off by hand. Use it only if a normal discard fails, and remove the patch from your body.
```

## Suspendarea și reluarea administrării insulinei

Suspendarea administrării insulinei anulează și orice bolus extins și orice bazală temporară. When you resume, these are **not** restarted. Cât timp administrarea insulinei este suspendată, plasturele emite un semnal sonor la fiecare 15 minute.

### Suspendarea administrării insulinei

1. Deschideți ecranul pompei (**Gestionați** → **Pompă**) și apăsați **Suspendați pompa**.
1. A dialog explains what will be suspended. Apăsați **Confirmați**.
1. In the **Basal Suspending Time** dialog, choose how long to suspend: 30 min, 1 hr, 1 hr 30 min or 2 hr. Apăsați **Confirmați**.

Administrarea insulinei este suspendată pentru timpul ales.

![Ecranul pompei EOPatch2 cu butonul SUSPEND](../images/EOPatch/Bild17.png) ![Suspend confirmation dialog](../images/EOPatch/Bild18.png) ![Basal Suspending Time dialog](../images/EOPatch/Bild19.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. In **AAPS** 4 you open the pump screen from **Manage** → **Pump**, and the button on it is labelled **Suspend pump**.
```

### Reluarea administrării insulinei

1. Deschideți ecranul pompei (**Gestionați** → **Pompă**) și apăsați **Reluați pompa**.
1. In the **Resume insulin delivery** dialog, press **Confirm**.

![Ecranul pompei EOPatch2 cu butonul RESUME](../images/EOPatch/Bild20.png) ![Resume insulin delivery dialog](../images/EOPatch/Bild21.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. In **AAPS** 4 you open the pump screen from **Manage** → **Pump**, and the button on it is labelled **Resume pump**.
```

```{warning}
When the suspend time ends, **AAPS** shows an **End of insulin suspend** warning. Administrarea insulinei **nu** repornește până când nu o confirmați. If you do not, you could develop hyperglycemia.
```

(eopatch2-alarms-and-warnings)=

## Alarme și atenționări

### Alarme

Alarms are for urgent, top-priority situations and need your action straight away. **AAPS** sounds an alarm that keeps going until you acknowledge it, and shows the message as a notification on the **Overview** screen. O alarmă înseamnă că există o problemă cu plasturele folosit. In many cases the patch has to be discarded and replaced with a new one.

When you press **Confirm** on the notification, **AAPS** handles the alarm. Pentru majoritatea alarmelor, aceasta dezactivează plasturele. For an **Inappropriate temperature** alarm, the button is **Retry**.

![EOPatch2 alarm](../images/EOPatch/Bild22.png) ![EOPatch2 alarm after the patch was deactivated](../images/EOPatch/Bild23.png)

```{admonition} Older screenshot
:class: note
The alarm screenshots are from an earlier **AAPS** version and may look different in **AAPS** 4.
```

The different alarms are explained below.

| Alarmă                        | Explicație                                                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rezervor gol                  | Plasturele a rămas fără insulină.                                                                                                                                         |
| Plasture expirat              | The patch's usage time is over, and it cannot deliver any more insulin.                                                                                                   |
| Ocluzie                       | The patch's insulin path seems to be blocked.                                                                                                                             |
| Autotestul la pornire a eșuat | The patch found an unexpected error during its self-test after booting.                                                                                                   |
| Temperatură necorespunzătoare | Plasturele este în afara temperaturii normale de funcționare în timp ce îl activați sau îl folosiți. Move the patch to a place with a suitable temperature (4.4 to 37°C). |
| Eroare la inserarea acului    | Acul nu a fost introdus corect în timpul activării. Check that the needle insertion edge of the patch and the needle action lever are in a straight line.                 |
| Eroare baterie plasture       | The patch's internal battery is about to run out and the patch will power off.                                                                                            |
| Eroare de activare plasture   | Plasturele nu a fost activat complet în 60 de minute de la pornire.                                                                                                       |
| Eroare plasture               | The patch found an unexpected error while being activated or used.                                                                                                        |

### Atenționări

Warnings are for medium- or low-priority situations. O atenționare apare ca notificare pe ecranul **Prezentare generală**.

![Atenționare EOPatch2 afișată pe ecranul Prezentare generală](../images/EOPatch/Bild24.png)

```{admonition} Older screenshot
:class: note
This screenshot is from an earlier **AAPS** version: in **AAPS** 4 the warning appears on the main screen, which looks different.
```

The different warnings are explained below.

| Atenție                                       | Explicație                                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Sfârșit suspendare insulină                   | The suspend time you chose is over. Apăsați **Reluați pompa** pe notificare pentru a reporni administrarea insulinei.                     |
| Rezervor pe terminate                         | Insulina rămasă în plasture este sub cantitatea setată în **Alerte rezervor aproape gol**.                                                |
| Durata de funcționare a plasturelui a expirat | The patch's usage period is over.                                                                                                         |
| Plasturele va expira în curând                | Plasturele trebuie eliminat în 1 oră.                                                                                                     |
| Activare plasture incompletă                  | Activarea plasturelui a fost întreruptă mai mult de 3 minute după asociere. Deschideți ecranul pompei și terminați activarea plasturelui. |
| Baterie plasture pe terminate                 | The patch's battery is low.                                                                                                               |

## Unde să obțineți ajutor

Driverul EOPatch2 este dezvoltat de comunitate, pe bază de **voluntariat**. Înainte de a cere ajutor, vă rugăm:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Întrebați** pe canalul *#AAPS* de pe [Discord](https://discord.gg/4fQUWHZ4Mw) sau pe unul dintre celelalte [canale ale comunității](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
