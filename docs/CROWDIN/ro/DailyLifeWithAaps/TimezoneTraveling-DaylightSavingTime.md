# Schimbarea fusului orar și ora de vară

When the time zone of your phone changes, **AAPS** calculates **IOB**, basal and sensitivity for the past again from scratch, about 10 seconds after the change. While this runs, the graphs and values on the main screen may take a moment to update.

(timezone-traveling-with-pumps)=

## Schimbarea fusului orar pentru Omnipod Dash

* Actualizați starea pompei în **Gestionați → Pompă**
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

(timezone-traveling-danarv2-danars)=

## Schimbarea fusului orar pentru DanaRv2, DanaRS, Dana-i

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **Aceasta înseamnă că, dacă schimbați fusul orar pe telefon, înregistrările vor fi citite cu alt fus orar și vor fi dublate.**

Pentru a se evita acest lucru, există două posibilități:

### Option 1: Keep home time and timeshift profile

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Tap the **Profile** name on the main screen to open the [Profile screen](#ProfileSwitch-manage-v4)
   * Select your **Profile** and tap **▶ Activate**
   * Set '**Time shift**' according to your destination and tap **Activate**.
   
   ![Profile switch with time shift](../images/ProfileSwitchTimeShift2.png)
   
   * e.g. Vienna -> New York: **Profile Switch** +6 hours
   * e.g. Vienna -> Sydney: **Profile Switch** -8 hours

### Option 2: Delete pump history

* Turn off 'Automatic date and time' in your phone settings (manual time zone change)

Când coborâți din avion:

* opriți pompa
* schimbați fusul orar pe telefon
* opriți telefonul, porniți pompa
* ștergeți istoricul din pompă
* schimbați ora în pompă
* porniți telefonul
* lăsați telefonul să se conecteze la pompă și să ajusteze fin ora

(timezone-traveling-insight)=

## Schimbarea fusului orar pentru Insight

Driverul reglează automat ora pompei la data telefonului.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. Dar nu ar trebui să fie o problemă.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. în timp ce schimbați bateria „reală”. If changing battery takes too long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Schimbarea fusului orar pentru Accu-Chek Combo

The [Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the driver programs into the pump. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

## Schimbarea fusului orar pentru Medtrum

Driverul reglează automat ora pompei la data telefonului.

Time zone changes keep the history intact, only TDD may be affected. Schimbarea manuală a orei pe telefon poate cauza probleme cu istoricul și cu **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBRs** are stopped.

(time-adjustment-daylight-savings-time-dst)=

## ORA DE VARĂ (DST)

Time adjustment for daylight savings time.

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctly. For some pumps it is better to make time zone adjustments while awake before DST takes place and not during the night.

### DST automatic adjustment for most pumps

* However, the **Loop** will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, make a **Profile Switch** to the desired **Profile** to enable the **Loop**: tap the profile name on the main screen, then the round **▶** button (see [Activating a profile](#ProfileSwitch-manage-v4)).
* You will also receive a notification on **AAPS** main screen prior to DST change that the **Loop** has been disabled temporarily. This message will appear without beep, vibration or similar sound.

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* Trecerea la ora de vară se face automat. Nu este necesară nicio acțiune.

### DST for Accu-Chek Combo

* Trecerea la ora de vară se face automat. Nu este necesară nicio acțiune.

### DST for Medtrum

* Trecerea la ora de vară se face automat. Nu este necesară nicio acțiune.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default to background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day before DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Actions to take before the clock change

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a desired time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF: **Set automatically** under **Time zone** in the screenshot below).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * O listă a acestor țări este disponibilă la [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Congo). Change your phone's timezone to Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. In **AAPS** refresh your pump and switch to your desired **Profile**.

4. Verificați **IOB** și **COB** din **AAPS**, iar dacă nu sunt corecte, dezactivați **Bucla** pentru cel puțin o durată DIA sau pentru timpul maxim de absorbție a carbohidraților (**Timpul maxim de absorbție**), oricare este mai lung.

5. Acțiuni care trebuie întreprinse după schimbarea ceasului. A good time to make revert to local time zone is with low **IOB**. De exemplu, cu o oră înainte de o masă, cum ar fi micul dejun. Ideally your **COB** and **IOB** should both be close to zero.