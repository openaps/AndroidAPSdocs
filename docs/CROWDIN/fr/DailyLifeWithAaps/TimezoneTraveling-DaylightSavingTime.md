# Voyager avec différents fuseaux horaires avec une pompe

## DanaR, DanaR coréenne

Il n'y a aucun problème avec le changement de fuseau horaire dans le téléphone car la pompe n'utilise pas l'historique

(timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AAPS is using history from the pump but the records in pump don't have timezone stamp. **Cela signifie que si vous changez simplement de fuseau horaire dans le téléphone, les enregistrements seront lus avec un fuseau horaire différent et seront doublés.**

Pour éviter cela, il y a deux possibilités :

### Option 1 : Garder l'heure du domicile et décaler temporairement le profil

* Désactiver l'option 'Date et heure automatiques' dans les paramètres de votre téléphone (changement de fuseau horaire manuel).
* Le téléphone doit conserver votre heure normale comme à la maison pendant toute la période de voyage.
* Faites un décalage horaire de votre profil en fonction de la différence de temps entre l'heure de la maison et l'heure de destination.
   
   * Faites un appui long sur le nom du profil (au milieu de la section du haut sur la page d'accueil)
   * Sélectionnez "Changement de profil"
   * Définissez le 'Décalage horaire' en fonction de votre destination.
   
   ![Changement de profil avec décalage horaire](../images/ProfileSwitchTimeShift2.png)
   
   * par ex. Vienne -> New York : Changement de profil +6 heures
   * par ex. Vienne -> Sydney : Changement de profil -8 heures
* Probably not an option if using [patched LibreLink app](#libre2-patched-librelink-app-with-xdrip) as automatic time zone must be set to start a new Libre 2 sensor.

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

(timezone-traveling-insight)=

## Insight

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

L'Insight enregistre également dans l'historique quand l'heure a été modifiée, à partir de quelle (ancienne) heure et vers quelle (nouvelle) heure. Ainsi, l'heure correcte peut être déterminée dans AAPS malgré le changement d'heure.

Cela peut causer des inexactitudes dans les DTQ. Mais cela ne devrait pas être un problème.

L'utilisateur Insight n'a donc pas à s'inquiéter des changements de fuseau horaire et des changements d'heure. Il y a une exception à cette règle : la pompe Insight a une petite batterie interne pour sauvegarder l'heure, etc. lorsque vous changez la pile "réelle". Si le changement de la pile prend trop de temps, cette batterie interne peut manquer d'énergie, l'heure sera remise à zéro, et il vous sera demandé d'entrer un nouveau la date et l'heure après avoir mis la nouvelle pile. Dans ce cas, toutes les entrées avant le changement de la pile sont ignorées dans les calculs de AAPS car l'heure exacte ne peut pas être identifiée correctement.

## Accu-Chek Combo

The [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. Le Combo ne peut pas stocker les fuseaux horaires, seulement les heures locales, ce qui est précisément ce que le nouveau pilote programme dans la pompe. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. L'utilisateur n'a rien à faire; si l'heure sur le Combo s'écarte trop de l'heure actuelle du téléphone, l'heure de la pompe est automatiquement ajustée.

Notez toutefois que cela prend du temps, car cela ne peut être fait qu'en mode terminal distant, ce qui est généralement lent. Il s'agit d'une limitation Combo qui ne peut pas être contournée.

L'ancien pilote basé sur Ruffy n'ajuste pas l'heure automatiquement. L'utilisateur doit le faire manuellement. Voir ci-dessous les étapes nécessaires pour le faire en toute sécurité en cas de changement de fuseau horaire ou de changement d'heure été / hivers.

## Medtrum

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

Timezone changes keep the history in tact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and IOB. If you change time manually double check the IOB.

When the timezone or time changes running TBR's are stopped.

(time-adjustment-daylight-savings-time-dst)=

## Changements d'heure

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

### Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

#### Actions à faire avant le changement d'heure

1. Désactivez tous les paramètres qui définissent automatiquement le fuseau horaire, de sorte que vous pouvez forcer le changement d'heure quand vous le souhaitez. La façon dont vous pouvez le faire dépendra de votre smartphone et de la version Android.
   
   * Certains ont deux paramètres, un pour le réglage automatique de l'heure (qui idéalement devrait rester activé) et un pour le réglage automatique du fuseau horaire (que vous devez désactiver).
   * Malheureusement, certaines versions d'Android n'ont qu'un seul paramètre pour activer le réglage automatique de l'heure et celui du fuseau horaire. Vous devrez désactiver cette option pour le moment.

2. Trouvez un fuseau horaire qui a la même heure que la votre actuellement mais qui n'a pas de changement d'heure.
   
   * Une liste de ces pays est disponible : [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pour l'Europe Centrale (CET), cela pourrait être "Brazzaville" (Kongo). Changez le fuseau horaire de votre téléphone à Kongo.

3. In AAPS refresh your pump.

4. Vérifiez l'onglet Traitements... Si vous voyez des traitements en doublon :
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

#### Actions à faire apès le changement d'heure

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Remettez le fuseau horaire Android de votre lieu actuel et réactivez le fuseau horaire automatique.
2. AAPS will soon start alerting you that the Combo’s clock doesn’t match. Mettez à jour l’heure de la pompe manuellement via l’écran et les boutons de la pompe.
3. On the AAPS “Combo” screen, press Refresh.
4. Allez ensuite à l'écran Traitements et cherchez des événements dans le futur. Il ne devrait pas y en avoir beaucoup.
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

6. Faites comme d'habitude.

### Accu-Chek Insight

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### Medtrum

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### Other pumps

* This feature is available since AAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.