# Voyager avec différents fuseaux horaires avec une pompe

## DanaR, DanaR coréenne

Il n'y a aucun problème avec le changement de fuseau horaire dans le téléphone car la pompe n'utilise pas l'historique

## DanaRv2, DanaRS

Ces pompes ont besoin d'une attention toute particulière, car AndoridAPS utilise l'historique de la pompe, mais les enregistrements de la pompe ne prend pas en compte le changement de fuseau horaire. **Cela signifie que si vous changez simplement de fuseau horaire dans le téléphone, les enregistrements seront lus avec un fuseau horaire différent et seront doublés.**

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
* Probablement pas une option si vous utilisez [l'application LibreLink patchée](../Hardware/Libre2#changement-de-fuseau-horaire) car la Date et heure automatique doit être activé pour démarrer un nouveau capteur Libre 2.

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

## Insight

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

L'Insight enregistre également dans l'historique quand l'heure a été modifiée, à partir de quelle (ancienne) heure et vers quelle (nouvelle) heure. Ainsi, l'heure correcte peut être déterminée dans AAPS malgré le changement d'heure.

Cela peut causer des inexactitudes dans les DTI. Mais cela ne devrait pas être un problème.

L'utilisateur Insight n'a donc pas à s'inquiéter des changements de fuseau horaire et des changements d'heure. Il y a une exception à cette règle : la pompe Insight a une petite batterie interne pour sauvegarder l'heure, etc. lorsque vous changez la pile "réelle". Si le changement de la pile prend trop de temps, cette batterie interne peut manquer d'énergie, l'heure sera remise à zéro, et il vous sera demandé d'entrer un nouveau la date et l'heure après avoir mis la nouvelle pile. Dans ce cas, toutes les entrées avant le changement de la pile sont ignorées dans les calculs de AAPS car l'heure exacte ne peut pas être identifiée correctement.

# Changements heure d'été / heure d'hiver

En fonction de la pompe et de la configuration de MGC, les changements d'heure peuvent entraîner des problèmes. Avec la Combo par ex., l'historique de la pompe est lu à nouveau et cela conduirait à des entrées dupliquées. Donc veuillez faire l'ajustement pendant que vous êtes éveillé et non pendant la nuit.

Si vous faites un bolus avec la calculatrice, veuillez désactiver les GA et IA à moins que vous ne soyez sûr qu'ils sont absolument corrects - mieux vaut ne pas les utiliser pendant quelques heures après le changement d'heure.

## Accu-Check Combo

AndroidAPS émettra une alarme si l'heure entre la pompe et le téléphone est très différent. En cas de changement d'heure (été ou hiver), cela arrive au milieu de la nuit. Pour éviter cela et profiter de votre sommeil, suivez ces étapes :

1) Désactiver l'option 'Date et heure automatiques' dans les paramètres de votre téléphone (changement de fuseau horaire manuel). 2) Trouver un fuseau horaire qui est l'heure cible, mais qui ne fait pas de changement d'heure. Pour l'Europe Centrale (CET), cela pourrait être "Brazzaville" (Kongo). Changez le fuseau horaire de votre téléphone à Kongo. 3) Dans AndroidAPS actualisez votre pompe. 4) Vérifiez l'onglet Traitements... Si vous voyez des traitements en doublon :

* NE PAS appuyer sur "Supprimer les futurs traitements"
* Appuyez sur "supprimer" sur tous les traitements futurs et les doublons. Cela devrait invalider les traitements plutôt que de les enlever, donc ils ne seront plus pris en compte pour l'IA. 5) Si la situation n'est pas claire - veuillez désactiver la boucle pour au moins une DAI ou la durée d'absorpsion max des glucides - (le plus grand des deux).

Un bon moment pour faire ce changement serait avec des IA faibles. Par ex., une heure avant un repas.

## Accu-Chek Insight

* Le changement d'heure est effectué automatiquement. Aucune action requise.

## Autres pompes - nouvelles depuis AAPS version 2.2

**Vous devez mettre à jour AAPS pour utiliser cette fonctionnalité !**

* Pour éviter toute difficulté, la boucle sera désactivée pendant 3 heures APRES le changement d'heure. Ceci est fait pour des raisons de sécurité (IA trop élevée à cause d'un bolus dupliqué avant le changement d'heure).
* Vous recevrez une notification sur l'écran principal 24 heures avant le changement d'heure pour vous informer que la boucle sera temporairement désactivée. Ce message apparaîtra sans bip, vibration ou quoi que ce soit.