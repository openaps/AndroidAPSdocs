(Profiles-profile-switch)=

# Changement de profil

Documentation about profiles in general can be found at [Config Builder - profile](Config-Builder-profile).

On starting your AAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period.

* La durée zéro signifie infinie. Ce profil est actif jusqu'à ce qu'il y ait un nouveau "Changement de Profil".
* La durée de x minutes signifie x minutes d'utilisation de ce profil. Après cette durée, le profil est basculé vers le précédent "Changement de profil" valide.

If you edited your profile inside the "local profile" tab you can activate the profile there which makes an implicit profile switch too.

To do a profile switch long-press on the name of your profile ("Tuned 03/11" in the picture below) on the homescreen of AndroidAPS.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## Pourcentage

* Ceci applique le même pourcentage à tous les paramètres. 
* Si vous le définissez à 130% (cela signifie que vous êtes 30% plus résistant à l'insuline), il augmente le débit de basal de 30%. Il réduira également la SI et le G/I en conséquence (divisé par 1,3 dans cet exemple).
  
  ![Exemple de changement de profil avec pourcentage](../images/ProfileSwitchPercentage.png)

* Cela sera envoyé à la pompe et sera ensuite le débit basal par défaut.

* L'algorithme de la boucle (ouvert ou fermé) continuera de fonctionner au dessus du profil au pourcentage sélectionné. Ainsi, par exemple, des pourcentages différents peuvent être mis en place sur un profil pour différentes étapes du cycle hormonal.

(Profiles-time-shift)=

## Décalage horaire

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

* Cela permet de tout décaler (sur 24 heures tournantes) du nombre d'heures renseigné. 
* Par exemple, lorsque vous travaillez de nuit, vous décalez de combien d'heures plus tard/plus tôt vos heures de couché ou de réveil.
* La question est toujours de savoir comment le décalage horaire du profil doit remplacer l'heure actuelle. Cette heure doit être décalée de x heures. Soyez donc attentif aux instructions décrites dans les exemples suivants : 
  * Heure actuelle : 12:00
  * **Positif** décalage horaire +10h 
    * 2:00 **+10 h** -> 12:00
    * Les paramètres à partir de 2:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire positif.
  * **Négatif** décalage horaire +10h 
    * 22:00 **-10 h** -> 12:00
    * Les paramètres à partir de 22:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire négatif.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

(Profiles-troubleshooting-profile-errors)=

## Dépannage des erreurs de profil

### 'Profil incorrect' / 'Valeurs des débits de basal non alignées sur des heures'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* Ces messages d'erreur s'affichent si vous avez des débits de basal ou des ratio G/I qui ne sont pas sur des heures. (Les pompes DanaR et DanaRS ne prennent pas en charge les changements d'une demi-heure par exemple.)
  
  ![Exemple de profil non aligné sur les heures](../images/ProfileNotAlignedToHours.png)

* Notez bien la date et à l'heure indiquées dans le message d'erreur (26/07/2019 5:45 pm dans la copie d'écran ci-dessus).

* Allez dans l'onglet Traitements
* Sélectionnez Changement Profil
* Faites défiler jusqu'à ce que vous trouviez la date et l'heure du message d'erreur.
* Utilisez la fonction Supprimer.
* Parfois, il n'y a pas qu'un seul changement de profil défectueux. Dans ce cas, supprimer aussi les autres.
  
  ![Supprimer un changement de profil](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'Changement de profil reçu de NS mais le profil n'existe pas localement'

* Le profil demandé n'a pas été correctement synchronisé depuis Nightscout.
* Suivez les instructions ci-dessus pour effacer le changement de profil

Alternatively you can delete the profile switch directly in mLab:

* Allez dans votre collection mLab
* Recherches le changement de profil dans les traitements
* Supprimez le changement de profil ayantla date et l'heure mentionnées dans le message d'erreur. ![mlab](../images/mLabDeletePS.png)

### 'DAI 3h trop court'

* Le message d'erreur apparaîtra si votre durée d'action de l'insuline dans votre profil est à une valeur que AndroidAPS ne pense pas être exacte. 
* Lisez la section [sélection de la valeur de DAI](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) et modifiez-la dans votre profil, puis faites un [Changement de profil](../Usage/Profiles) pour continuer.