# Changement de fuseau horaire et heure d'été

Quand le fuseau horaire de votre téléphone change, **AAPS** recalcule depuis le début l'**IA**, le débit basal et la sensibilité pour le passé, environ 10 secondes après le changement. Pendant ce calcul, les graphiques et les valeurs de l'écran principal peuvent mettre un peu de temps à se mettre à jour.

(timezone-traveling-with-pumps)=

## Changement de fuseau horaire pour l'Omnipod Dash

* Actualisez l'état de la pompe dans **Gestion → Pompe**
* Choisissez temporairement un autre **Profil**, puis revenez à votre **Profil** d'origine ou souhaité

## Changement de fuseau horaire pour DanaR, DanaR coréenne

Il n'y a aucun problème avec le changement de fuseau horaire dans le téléphone car la pompe n'utilise pas l'historique

(timezone-traveling-danarv2-danars)=

## Changement de fuseau horaire pour DanaRv2, DanaRS, Dana-i

Ces pompes demandent une attention particulière, car **AAPS** utilise l'historique de la pompe, mais les enregistrements dans la pompe n'ont pas d'information de fuseau horaire. **Cela veut dire que si vous changez le fuseau horaire de votre téléphone, les enregistrements seront lus avec un autre fuseau horaire et seront en double.**

Pour éviter cela, il y a deux possibilités :

### Option 1 : Garder l'heure du domicile et décaler temporairement le profil

* Désactivez l'option « Date et heure automatiques » dans les paramètres de votre téléphone (changement manuel du fuseau horaire).

* Votre téléphone doit garder l'heure normale de votre domicile pendant tout le voyage.

* Décalez votre **Profil** selon la différence d'heure entre votre domicile et votre destination.
   
   * Appuyez sur le nom du **Profil** sur l'écran principal pour ouvrir l'[écran Profil](#ProfileSwitch-manage-v4)
   * Choisissez votre **Profil** et appuyez sur **▶ Activer**
   * Réglez le « **Décalage horaire** » selon votre destination et appuyez sur **Activer**.
   
   ![Changement de profil avec décalage horaire](../images/ProfileSwitchTimeShift2.png)
   
   * par ex. Vienne -> New York : **Changement de profil** +6 heures
   * par ex. Vienne -> Sydney : **Changement de profil** -8 heures

### Option 2 : Supprimer l'historique de la pompe

* Désactiver l'option 'Date et heure automatiques' dans les paramètres de votre téléphone (changement de fuseau horaire manuel)

Quand vous descendez de l'avion :

* éteignez la pompe
* modifiez le fuseau horaire sur le téléphone
* éteignez le téléphone, allumez la pompe
* effacez l'historique de la pompe
* changez l'heure de la pompe
* allumez le téléphone
* laissez le téléphone se connecter à la pompe et réajuster l'heure

(timezone-traveling-insight)=

## Changement de fuseau horaire pour l'Insight

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

L'Insight enregistre également dans l'historique quand l'heure a été modifiée, à partir de quelle (ancienne) heure et vers quelle (nouvelle) heure. Ainsi, **AAPS** peut trouver l'heure correcte malgré le changement d'heure.

Cela peut créer des imprécisions dans les **DTQ**. Mais cela ne devrait pas être un problème.

L'utilisateur Insight n'a donc pas à s'inquiéter des changements de fuseau horaire et des changements d'heure. Il y a une exception à cette règle : la pompe Insight a une petite batterie interne pour sauvegarder l'heure, etc. lorsque vous changez la pile "réelle". Si le changement de pile dure trop longtemps, cette batterie interne se vide, l'horloge est remise à zéro et on vous demande de saisir l'heure et la date après avoir mis une nouvelle pile. Dans ce cas, toutes les entrées avant le changement de la pile sont ignorées dans les calculs de AAPS car l'heure exacte ne peut pas être identifiée correctement.

## Changement de fuseau horaire pour l'Accu-Chek Combo

Le [pilote Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) règle automatiquement l'heure de la pompe sur l'heure du téléphone. Le Combo ne peut pas enregistrer de fuseau horaire, seulement l'heure locale. C'est exactement ce que le pilote programme dans la pompe. De plus, il enregistre le fuseau horaire dans les préférences locales d'AAPS. Ainsi, il peut convertir l'heure locale de la pompe en un horodatage complet avec un décalage de fuseau horaire. L'utilisateur n'a rien à faire ; si l'heure sur le Combo s'écarte trop de l'heure actuelle du téléphone, l'heure de la pompe est automatiquement ajustée.

Notez toutefois que cela prend du temps, car cela ne peut être fait qu'en mode terminal distant, ce qui est généralement lent. Il s'agit d'une limitation Combo qui ne peut pas être contournée.

## Changement de fuseau horaire pour Medtrum

Le driver Insight ajuste automatiquement l'heure de la pompe à l'heure du téléphone.

Les changements de fuseau horaire gardent l'historique intact, seule la DTQ peut être touchée. Changer l'heure du téléphone à la main peut créer des problèmes avec l'historique et l'**IA**. Si vous changez l'heure à la main, vérifiez bien l'**IA**.

When the time zone or time changes running **TBRs** are stopped.

(time-adjustment-daylight-savings-time-dst)=

## HEURE D'ÉTÉ (DST)

Réglage de l'heure pour l'heure d'été.

Selon votre pompe et votre MGC, les sauts d'heure peuvent empêcher **AAPS** de bien fonctionner. Pour certaines pompes, il vaut mieux faire les réglages de fuseau horaire avant le changement d'heure, quand vous êtes éveillé, et pas pendant la nuit.

### Réglage automatique de l'heure d'été pour la plupart des pompes

* Mais la **Boucle** sera désactivée pendant 3 heures APRÈS le changement d'heure (en général à partir de 1 h du matin), et **AAPS** utilisera par défaut le débit basal de fond choisi dans votre **Profil**. Cela est fait pour des raisons de sécurité : l'**IA** peut être trop élevée à cause d'un bolus en double avant le changement d'heure.
* Après le changement d'heure, faites un **Changement de profil** vers le **Profil** souhaité pour activer la **Boucle** : appuyez sur le nom du profil sur l'écran principal, puis sur le bouton rond **▶** (voir [Activer un profil](#ProfileSwitch-manage-v4)).
* Avant le changement d'heure, vous recevrez aussi une notification sur l'écran principal d'**AAPS** indiquant que la **Boucle** a été désactivée temporairement. Ce message apparaît sans bip, sans vibration ni autre son.

Si vous faites un bolus avec la calculatrice d'**AAPS**, n'utilisez pas les données de **GA** et d'**IA**, sauf si vous êtes sûr qu'elles sont tout à fait correctes. Soyez prudent et n'utilisez pas cette fonction pendant quelques heures après le changement d'heure.

### Heure d'été pour l'Accu-Chek Insight

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### Heure d'été pour l'Accu-Chek Combo

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### Heure d'été pour Medtrum

* Le changement d'heure est effectué automatiquement. Aucune action requise.

### Heure d'été pour l'Omnipod Dash

* Either allow **AAPS** to temporarily default to background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day before DST is due to take place to avoid overnight disruption. ATTENTION : CETTE OPTION PEUT FAIRE EXPIRER VOTRE POD PLUS TÔT. AYEZ DU MATÉRIEL AVEC VOUS SI VOUS CHOISISSEZ LA FONCTION CI-DESSOUS.

#### Actions à faire avant le changement d'heure

1. Désactivez tous les paramètres du téléphone qui règlent automatiquement le fuseau horaire. Ainsi, vous pouvez choisir un fuseau horaire qui n'utilise pas l'heure d'été. La façon d'activer cela dépend de votre smartphone et de votre version d'Android.
   
   * Certains téléphones ont deux réglages : un pour le réglage automatique de l'heure (qui doit de préférence rester activé) et un pour le réglage automatique du fuseau horaire (que vous devez DÉSACTIVER : **Set automatically** (Définir automatiquement) sous **Time zone** (Fuseau horaire) dans la capture d'écran ci-dessous).
   * Malheureusement, certaines versions d'Android ont un seul bouton pour activer le réglage automatique de l'heure et du fuseau horaire en même temps. Vous devrez désactiver cette option pour le moment.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Trouvez un fuseau horaire qui a la même heure que votre lieu actuel, mais qui n'utilise pas l'heure d'été.
   
   * Une liste de ces pays est disponible : [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pour l'heure d'Europe centrale (CET), cela peut être « Brazzaville » (Congo). Changez le fuseau horaire de votre téléphone pour le Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. Dans **AAPS**, actualisez votre pompe et passez au **Profil** souhaité.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the **Loop** for at least one DIA or the maximum carb absorption time (**Absorption max time**), whichever is longer.

5. Actions à faire après le changement d'heure. Un bon moment pour revenir au fuseau horaire local est quand l'**IA** est faible. Par exemple, une heure avant un repas comme le petit-déjeuner. Idéalement, vos **GA** et votre **IA** doivent être tous les deux proches de zéro.