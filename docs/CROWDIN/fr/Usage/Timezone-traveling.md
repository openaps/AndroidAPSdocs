# Voyager avec différents fuseaux horaires avec une pompe

## DanaR, DanaR coréenne

Il n'y a aucun problème avec le changement de fuseau horaire dans le téléphone car la pompe n'utilise pas l'historique

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AndroidAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

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
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Option 2: Supprimer l'historique de la pompe

* Désactiver l'option 'Date et heure automatiques' dans les paramètres de votre téléphone (changement de fuseau horaire manuel)

When get out of plane:

* éteignez la pompe
* modifiez le fuseau horaire sur le téléphone
* éteignez le téléphone, allumez la pompe
* effacez l'historique de la pompe
* changez l'heure de la pompe
* allumez le telephone
* laissez le téléphone se connecter à la pompe et ré-ajuster l'heure

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Chek Combo

The [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AndroidAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

# Changements d'heure

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions à faire avant le changement d'heure

1. Désactivez tous les paramètres qui définissent automatiquement le fuseau horaire, de sorte que vous pouvez forcer le changement d'heure quand vous le souhaitez. La façon dont vous pouvez le faire dépendra de votre smartphone et de la version Android.
   
   * Certains ont deux paramètres, un pour le réglage automatique de l'heure (qui idéalement devrait rester activé) et un pour le réglage automatique du fuseau horaire (que vous devez désactiver).
   * Malheureusement, certaines versions d'Android n'ont qu'un seul paramètre pour activer le réglage automatique de l'heure et celui du fuseau horaire. Vous devrez désactiver cette option pour le moment.

2. Trouvez un fuseau horaire qui a la même heure que la votre actuellement mais qui n'a pas de changement d'heure.
   
   * Une liste de ces pays est disponible : [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pour l'Europe Centrale (CET), cela pourrait être "Brazzaville" (Kongo). Changez le fuseau horaire de votre téléphone à Kongo.

3. Dans AndroidAPS actualisez votre pompe.

4. Vérifiez l'onglet Traitements... Si vous voyez des traitements en doublon :
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

### Actions à faire apès le changement d'heure

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Remettez le fuseau horaire Android de votre lieu actuel et réactivez le fuseau horaire automatique.
2. AndroidAPS va bientôt vous avertir que l'heure du Combo ne correspond pas. Mettez à jour l’heure de la pompe manuellement via l’écran et les boutons de la pompe.
3. Sur l'écran « Combo » d'AndroidAPS, appuyez sur Rafraîchir.
4. Allez ensuite à l'écran Traitements et cherchez des événements dans le futur. Il ne devrait pas y en avoir beaucoup.
   
   * NE PAS appuyer sur "Supprimer les futurs traitements"
   * Appuyez sur "Supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA.

5. Si la situation concernant la quantité d'IA/GA n'est pas claire - veuillez désactiver la boucle pour au minimum la DAI ou la durée d'absorpsion max des glucides - (la plus grande des deux).

6. Faites comme d'habitude.

## Accu-Chek Insight

* Le changement d'heure est effectué automatiquement. Aucune action requise.

## Other pumps

* Cette fonctionnalité est disponible depuis la version 2.2 d'AndroidAPS.
* Pour éviter toute difficulté, la boucle sera désactivée pendant 3 heures APRES le changement d'heure. Ceci est fait pour des raisons de sécurité (IA trop élevée à cause d'un bolus dupliqué avant le changement d'heure).
* Vous recevrez une notification sur l'écran principal avant le changement d'heure pour vous informer que la boucle sera temporairement désactivée. Ce message apparaîtra sans bip, vibration ou quoi que ce soit.