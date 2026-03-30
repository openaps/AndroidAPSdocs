# Timezone Change and Daylight Saving

## Voyager avec différents fuseaux horaires avec une pompe

## Timezone change for Omnipod Dash

* Refresh the Dash tab
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

Il n'y a aucun problème avec le changement de fuseau horaire dans le téléphone car la pompe n'utilise pas l'historique

## Timezone change for DanaRv2, DanaRS

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

Pour éviter cela, il y a deux possibilités :

### Option 1 : Garder l'heure du domicile et décaler temporairement le profil

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Long-press **Profile** name (middle of top section on homescreen)
   * Select '**Profile Switch**'
   * Définissez le 'Décalage horaire' en fonction de votre destination.
   
   ![Changement de profil avec décalage horaire](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: **Profile Switch** +6 hours
   * i.e. Vienna -> Sydney: **Profile Switch** -8 hours

### Option 2: Supprimer l'historique de la pompe

* Désactiver l'option 'Date et heure automatiques' dans les paramètres de votre téléphone (changement de fuseau horaire manuel)

Quand vous sortez de l'avion :

* éteignez la pompe
* modifiez le fuseau horaire sur le téléphone
* éteignez le téléphone, allumez la pompe
* effacez l'historique de la pompe
* changez l'heure de la pompe
* allumez le telephone
* laissez le téléphone se connecter à la pompe et ré-ajuster l'heure

## Timezone Change for Insight

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

L'Insight enregistre également dans l'historique quand l'heure a été modifiée, à partir de quelle (ancienne) heure et vers quelle (nouvelle) heure. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. Mais cela ne devrait pas être un problème.

L'utilisateur Insight n'a donc pas à s'inquiéter des changements de fuseau horaire et des changements d'heure. Il y a une exception à cette règle : la pompe Insight a une petite batterie interne pour sauvegarder l'heure, etc. lorsque vous changez la pile "réelle". Si le changement de la pile prend trop de temps, cette batterie interne peut manquer d'énergie, l'heure sera remise à zéro, et il vous sera demandé d'entrer un nouveau la date et l'heure après avoir mis la nouvelle pile. Dans ce cas, toutes les entrées avant le changement de la pile sont ignorées dans les calculs de AAPS car l'heure exacte ne peut pas être identifiée correctement.

## Timezone Change for Accu-Chek Combo

The [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. Le Combo ne peut pas stocker les fuseaux horaires, seulement les heures locales, ce qui est précisément ce que le nouveau pilote programme dans la pompe. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. L'utilisateur n'a rien à faire; si l'heure sur le Combo s'écarte trop de l'heure actuelle du téléphone, l'heure de la pompe est automatiquement ajustée.

Notez toutefois que cela prend du temps, car cela ne peut être fait qu'en mode terminal distant, ce qui est généralement lent. Il s'agit d'une limitation Combo qui ne peut pas être contournée.

L'ancien pilote basé sur Ruffy n'ajuste pas l'heure automatiquement. L'utilisateur doit le faire manuellement. Voir ci-dessous les étapes nécessaires pour le faire en toute sécurité en cas de changement de fuseau horaire ou de changement d'heure été / hivers.

## Timezone Change for Medtrum

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBR's** are stopped.

## DAYLIGHT SAVING (DST)

Time adjustment daylight savings time

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctlyy. For instance with the Combo pump, the pump history is read twice leading to duplicate entries. For some pumps it is better to make time zone adjustments while awake and not during the night.

### DST automatic adjustment for most pumps

* This adjustment feature is available for **AAPS** version 2.2 onwards.
* Howeever, the fully closed Loop will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, select **Profile Switch** to user's desired **Profile** to enable fully closed Loop.
* You will also receive a notification on **AAPS** main screen prior to DST change that the Fully Closed Loop has been disabled temporarily. This message will appear without beep, vibration or anything.**

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### DST for Medtrum

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Actions à faire avant le changement d'heure

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. Vous devrez désactiver cette option pour le moment.

<img width="576" height="1289" alt="Screenshot_20260329-110315 (1)" src="https://github.com/user-attachments/assets/ca40c1c6-1697-4832-ae10-5cf6a1dc0bce" />

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Une liste de ces pays est disponible : [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pour l'Europe Centrale (CET), cela pourrait être "Brazzaville" (Kongo). Changez le fuseau horaire de votre téléphone à Kongo.

<img width="576" height="1289" alt="Screenshot_20260329-111830" src="https://github.com/user-attachments/assets/b7b7f738-f91e-40df-ad79-f404fbfb9ae6" />

3. **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the Fully Closed Loop for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.

### DST for Accu-Chek Combo

This section is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

**AAPS** will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

#### Actions à faire avant le changement d'heure

1. Désactivez tous les paramètres qui définissent automatiquement le fuseau horaire, de sorte que vous pouvez forcer le changement d'heure quand vous le souhaitez. La façon dont vous pouvez le faire dépendra de votre smartphone et de la version Android.
   
   * Certains ont deux paramètres, un pour le réglage automatique de l'heure (qui idéalement devrait rester activé) et un pour le réglage automatique du fuseau horaire (que vous devez désactiver).
   * Malheureusement, certaines versions d'Android n'ont qu'un seul paramètre pour activer le réglage automatique de l'heure et celui du fuseau horaire. Vous devrez désactiver cette option pour le moment.
   
   Screenshot_20260329-110315 (1)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Une liste de ces pays est disponible : [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pour l'Europe Centrale (CET), cela pourrait être "Brazzaville" (Kongo). Changez le fuseau horaire de votre téléphone à Kongo.

3. In **AAPS** refresh your pump.

4. Vérifiez l'onglet Traitements... Si vous voyez des traitements en doublon :
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

#### Actions à faire apès le changement d'heure

A good time to make this switch would be with low **IOB**. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your **COB** and **IOB** should both be close to zero.)

1. Remettez le fuseau horaire Android de votre lieu actuel et réactivez le fuseau horaire automatique.
2. **AAPS** will soon start alerting you that the Combo’s clock doesn’t match. Mettez à jour l’heure de la pompe manuellement via l’écran et les boutons de la pompe.
3. On the **AAPS** “Combo” screen, press Refresh.
4. Allez ensuite à l'écran Traitements et cherchez des événements dans le futur. Il ne devrait pas y en avoir beaucoup.
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

6. Faites comme d'habitude.