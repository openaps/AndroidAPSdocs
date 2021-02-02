# Changement de profil

Lors du démarrage de votre AndroidAPS et de la sélection de votre profil, vous devrez faire un événement « Changement de profil » avec une durée nulle (ceci est expliqué plus tard). En faisant cela, AAPS commence à suivre l'historique des profils et chaque modification du profil nécessite de faire un "Changement de profil" même lorsque vous modifiez le contenu du profil dans NS. Le profil mis à jour est poussé vers AAPS immédiatement, mais vous devez faire le changement de profil à nouveau (dans NS ou dans AAPS) pour commencer à utiliser ces changements.

En interne, AAPS crée une capture instantanée du profil avec la date et la durée et l’utilise dans la période sélectionnée. La durée zéro signifie infinie. Ce profil est actif jusqu'à ce qu'il y ait un nouveau "Changement de Profil".

Pour effectuer un changement de profil, faites un appui long sur le nom de votre profil ("Tuned 03/11" dans l'image ci-dessous).

![Faire un changement de profil](../images/ProfileSwitch_HowTo.png)

Si vous faites un « Changement de profil » avec une durée, le précédent profil activé est remis à la fin de la période.

Si vous utilisez des profils AAPS locaux, vous devez appuyer sur le bouton "Activer le profil" pour appliquer ces changements (cela crée un événement "Changement de profil").

Dans le "Changement de profil", vous pouvez choisir deux paramètres supplémentaires qui font partie du profil circadien :

## Pourcentage

* Ceci applique le même pourcentage à tous les paramètres. 
* Si vous le définissez à 130% (cela signifie que vous êtes 30% plus résistant à l'insuline), il augmente le débit de basal de 30%. Il réduira également la SI et le G/I en conséquence (divisé par 1,3 dans cet exemple).
  
  ![Exemple de changement de profil avec pourcentage](../images/ProfileSwitchPercentage.png)

* Cela sera envoyé à la pompe et sera ensuite le débit basal par défaut.

* L'algorithme de la boucle (ouvert ou fermé) continuera de fonctionner au dessus du profil au pourcentage sélectionné. Ainsi, par exemple, des pourcentages différents peuvent être mis en place sur un profil pour différentes étapes du cycle hormonal.

## Décalage horaire

![Changement de profil avec pourcentage et décalage horaire](../images/ProfileSwitchTimeShift2.png)

* Cela permet de tout décaler (sur 24 heures tournantes) du nombre d'heures renseigné. 
* Par exemple, lorsque vous travaillez de nuit, vous décalez de combien d'heures plus tard/plus tôt vos heures de couché ou de réveil.
* La question est toujours de savoir comment le décalage horaire du profil doit remplacer l'heure actuelle. Cette heure doit être décalée de x heures. Soyez donc attentif aux instructions décrites dans les exemples suivants : 
  * Heure actuelle : 12:00
  * **Positif** décalage horaire +10h 
    * 2:00 **+10 h** -> 12:00
    * Les paramètres à partir de 2:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire positif.
  * **Négatif** décalage horaire -10h 
    * 22:00 **-10 h** -> 12:00
    * Les paramètres à partir de 22:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire négatif.

![Changement de profil et sens du décalage horaire](../images/ProfileSwitch_PlusMinus2.png)

Ce mécanisme de prise de photos du profil permet des calculs beaucoup plus précis du passé et la possibilité de suivre les changements de profil.

## Dépannage des erreurs de profil

### 'Profil incorrect' / 'Valeurs des débits de basal non alignées sur des heures'

![Débits de basal non alignés sur les heures](../images/BasalNotAlignedToHours2.png)

* Ces messages d'erreur s'affichent si vous avez des débits de basal ou des ratio G/I qui ne sont pas sur des heures. (Les pompes DanaR et DanaRS ne prennent pas en charge les changements d'une demi-heure par exemple.)
  
  ![Exemple de profil non aligné sur les heures](../images/ProfileNotAlignedToHours.png)

* Notez bien la date et à l'heure indiquées dans le message d'erreur (26/07/2019 5:45 pm dans la copie d'écran ci-dessus).

* Allez dans l'onglet Traitements
* Sélectionnez Changement Profil
* Faites défiler jusqu'à ce que vous trouviez la date et l'heure du message d'erreur.
* Utilisez la fonction Supprimer.
* Parfois, il n'y a pas qu'un seul changement de profil défectueux. Dans ce cas, supprimer aussi les autres.
  
  ![Supprimer un changement de profil](../images/PSRemove.png)

Vous pouvez également supprimer le sélecteur de profil directement dans mLab comme décrit ci-dessous.

### 'Changement de profil reçu de NS mais le profil n'existe pas localement'

* Le profil demandé n'a pas été correctement synchronisé depuis Nightscout.
* Suivez les instructions ci-dessus pour effacer le changement de profil

Vous pouvez également supprimer le changement de profil directement dans mLab :

* Allez dans votre collection mLab
* Recherches le changement de profil dans les traitements
* Delete the profile switch with date and time that was mentioned in the error message. ![mlab](../images/mLabDeletePS.png)

### 'DAI 3h trop court'

* Le message d'erreur apparaîtra si votre durée d'action de l'insuline dans votre profil est à une valeur que AndroidAPS ne pense pas être exacte. 
* Lisez la section [sélection de la valeur de DAI](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) et modifiez-la dans votre profil, puis faites un [Changement de profil](../Usage/Profiles) pour continuer.