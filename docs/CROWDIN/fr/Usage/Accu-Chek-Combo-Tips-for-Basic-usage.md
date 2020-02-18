# Accu-Chek Combo conseils pour une utilisation de base

## Comment assurer les opérations en douceur

* Toujours **porter le smartphone avec vous**, laissez-le à côté de votre lit la nuit.
* Toujours vérifiez toujours que la batterie de la pompe est aussi complète que possible. Reportez-vous à la section de la batterie pour obtenir des conseils concernant la batterie.
* Il est préférable de **ne pas toucher à l'application Ruffy** pendant que le système fonctionne. Si l'application est redémarrée, la connexion à la pompe peut s'arrêter. Une fois que la pompe est connectée à la Ruffy, il n'est pas nécessaire de la reconnecter. Même après un redémarrage du téléphone, la connexion est automatiquement rétablie. Si possible, déplacez l'application vers un écran inutilisé ou dans un dossier de votre smartphone afin de ne pas l'ouvrir accidentellement.
* Si vous ouvrez involontairement l'application Ruffy pendant le bouclage, il est préférable de redémarrer le smartphone immédiatement.
* Dans la mesure du possible, n'utiliser la pompe que via l'application AndroidAPS. Pour faciliter cela, activez le verrouillage sur la pompe sous **Réglages pompe / Verrouillage des touches / On**. Ce n'est que lorsque vous changez la pile ou la cartouche qu'il est nécessaire d'utiliser les touches de la pompe. ![Verrouillage des touches](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Pompe inaccessible. Que faire ?

### Activer l'alerte pompe inaccessible

* Dans AndroidAPS, accédez à ** Paramètres / Alertes locales ** et activez **Alerte si la pompe est hors de portée** et paramétrez **Seuil alerte pompe hors de portée [min]** à **31** minutes. 
* Cela vous donnera suffisamment de temps pour ne pas déclencher l'alarme quand vous quittez une pièce en laissant le téléphone sur le bureau, mais vous informe si la pompe n'est pas joignable pour une durée supérieure à celle d'un d'un débit de base temporaire.

### Restaurer l'accessibilité de la pompe

* Quand AndroidAPS signale un alarme **pompe injoignable**, deverrouillez d'abord la pompe et **appuyez syr n'importe quelle touche de la pompe** (par ex. le bouton "bas"). Dès que l'affichage de la pompe s'est étient, appuyez sur **ACTUALISER** dans **l'onglet Combo** dans AndroidAPS. La plupart du temps la communication fonctionnera à nouveau.
* Si cela ne marche pas, redémarrez votre smartphone. Après le redémarrage, AndroidAPS et ruffy seront réactivés et une nouvelle connexion sera établie avec la pompe.
* Les tests avec différents smartphones ont montré que certains smartphones déclenchaient l'erreur "pompe injoignable" plus souvent que d'autres. La [liste des téléphones testés](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) liste les smartphones testés avec succès avec AAPS. 

### Causes racines et conséquences des fréquentes erreurs de communication

* Sur les téléphones avec **peu de mémoire** (ou des réglages **aggressifs d'économie d'énergie**), AndroidAPS est souvent fermé. Vous pouvez le constater par le fait que les boutons Bolus et Calculatrice sur l'écran d'accueil ne sont pas affichés lors de l'ouverture d'AAPS car le système est en cours d'initialisation. Cela peut déclencher une alerte "Pompe hors de portée" au démarrage. Dans le champs **Dernière connexion** de l'onglet Combo, vous pouvez vérifier quand AndroidAPS a communiqué pour la dernière fois avec la pompe. 

![Pompe hors de portée](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![Aucune connexion à la pompe](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Cette erreur peut vider la pile de la pompe plus rapidement car le profil basal est lu à partir de la pompe lorsque l'application est redémarrée.
* Cela augmente également la probabilité de provoquer l'erreur qui amène la pompe à rejeter toutes les connexions entrantes jusqu'à ce qu'un bouton de la pompe soit enfoncé. 

## Echec de l'annulation du débit de base temporaire

* Occasionnellement, AndroidAPS ne peut pas annuler automatiquement une alerte **DBT ANNULEE**. Dans ce cas, vous devez soit appuyer sur **ACTUALISER** dans **l'onglet Combo ** de AndroidAPS soit confirmer l'alarme sur la pompe.

## Considérations relatives à la pile

### Changer la pile

* Après une alarme **Pile pompe faible**, la pile doit être changée le plus rapidement possible pour toujours avoir l'énergie nécessaire à une communication Bluetooth fiable avec le smartphone, même si le téléphone se trouve à une grande distance de la pompe.
* Même après une alarme **Pile pompe faible**, la pile peut être utilisée pour une durée significative. Il est cependant recommandé de toujours avoir une pile neuve avec vous après une alarme "Niveau Batterie Bas".
* Pour ce faire, faites un appui long sur **Boucle Fermée** dans l'écran principal et sélectionnez **Suspendre la Boucle pour 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth activé](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Déverrouillez les touches de la pompe, mettez la pompe à l'arrêt, confirmez si nécessaire l'annulation du débit de base temporaire changez la pile.
* Ensuite, redémarrez la pompe, faites un appui long sur **Suspendu** dans l'écran principal d'AAPS et sélectionnez **Reprendre**.
* AndroidAPS redéfinira si nécessaire un nouveau Débit de Base Temporaire lors de l'arrivée de la prochaine glycémie. 

### Type de pile et causes de faible autonomie

* Comme la communication Bluetooth intensive consomme beaucoup d'énergie, n'utilisez que des **piles de haute qualité** comme Energizer Ultimate Lithium, les "power one" du service pack Accu-Chek "étendu", ou si vous utilisez des batteries rechargeables, utilisez les batteries Eneloop. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Les durées de vie standards des différents types de batterie sont les suivantes :

* **Energizer Ultimate Lithium** : 4 à 7 semaines
* **Power One Alcaline** (Varta) à partir du servcie pack : 2 à 4 semaines
* Batteries **Eneloop rechargeables** (BK-3MCCE) : 1 à 3 semaines

Si la durée de vie de votre pile est significativement inférieure à celle indiquée ci-dessus, vérifiez les causes possibles suivantes :

* Die latest version (March 2018) of the [ruffy App](https://github.com/MilosKozak/ruffy) significantly improved pump battery lifetime. Make sure you are on that version if you have issues with a short battery lifetime.
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, only a replacement of the pump by Roche will help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Changement d'heure (été ou hiver)

* Actuellement, le pilote combo ne prend pas en charge l'ajustement automatique de l'heure de la pompe.
* Pendant la nuit d'un changement d'heure, l'heure du smartphone est mise à jour, mais l'heure de la pompe reste inchangé. Cela conduit à une alarme en raison du décalage des heures entre les systèmes à 3 heures du matin.
* Si vous ne souhaitez pas être réveillé la nuit, **désactivez Date et heure automatiques sur le téléphone mobile** dans la soirée avant le changement d'heure et ajustez-vous les heures manuellement le lendemain matin.

## Bolus étendus, bolus mixtes

L'algorithme OpenAPS ne prend pas en charge un bolus carré étendu ou un bolus mixte. Mais un traitement similaire peut être réalisé à l'aide de l'alternative suivante :

* Entrez les glucides mais pas le bolus correspondant. L'algorithme de boucle réagira plus agressivement. Si nécessaire, utilisez **eCarbs** (glucides étendus).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you wth disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Boucle désactivée après bolus mixte](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarmes à l'administration du bolus

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If you really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the first bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Background is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Bolus annulé](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)