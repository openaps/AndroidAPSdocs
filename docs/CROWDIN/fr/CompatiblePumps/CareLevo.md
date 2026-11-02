# CareLevo

La CareLevo est une pompe patch sans tubulure, fabriquée par CareMedi. Chaque patch contient jusqu'à 300 U d'insuline et se porte jusqu'à 7 jours (168 heures). Elle communique avec **AAPS** par le Bluetooth de votre téléphone, sans autre appareil.

```{admonition} New driver
:class: warning
Le pilote CareLevo est nouveau dans **AAPS**. Lisez toute cette page avant d'activer votre premier patch, et gardez à portée de main le mode d'emploi de la pompe.
```

La plus petite dose que le patch peut injecter est 0,05 U. Réglez les débits basaux de votre **Profil** à 0,05 U/h minimum, par pas de 0,05 U/h. Sinon, l'insuline prévue par le **Profil** et l'insuline injectée par le patch sont un peu différentes. **AAPS** utilise les débits basaux acceptés par le patch.

```{contents} Table of contents
:depth: 1
:local: true
```

## Fonctionnalités de la pompe avec AAPS

* Communique avec **AAPS** par le Bluetooth natif de votre téléphone, sans appareil de communication supplémentaire.
* Bolus par pas de 0,05 U.
* Débits basaux de 0,05 U/h à 15 U/h par pas de 0,05 U/h, avec des segments basaux de 30 minutes.
* Débits basaux temporaires en débit absolu, jusqu'à 12 heures.
* Bolus étendu jusqu'à 8 heures.
* Les changements d'heure d'été et de fuseau horaire doivent être faits à la main. Le patch vous avertit quand le fuseau horaire change.

## Configuration de la pompe

1. Ouvrez le **menu** (☰) en haut à gauche de l'écran principal d'**AAPS** et sélectionnez **Configuration**.
1. Choisissez **Carelevo** dans la section Pompe.
1. Appuyez sur la touche Retour pour revenir à l'écran principal.

![Le plugin Carelevo choisi dans Configuration > Pompe](../images/v4/Pumps/carelevo_enabled.png)

## Paramètres

Ouvrez l'écran de la pompe avec **Gestion → Pompe** (ou **Configuration → Pompe → Ouvrir le plugin**).

Ouvrez les paramètres CareLevo en appuyant sur l'icône **Paramètres** (roue dentée) en haut à droite. Trois paramètres sont disponibles :

![Paramètres du pilote Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Réglage de l'alerte insuline basse

Le patch vous avertit quand l'insuline restante dans le réservoir atteint la quantité choisie. Vous pouvez la régler de 20 U à 50 U, par pas de 5 U. La valeur par défaut est 30 U. Quel que soit ce réglage, le patch déclenche une alarme critique et arrête l'injection d'insuline quand il reste moins de 10 U.

### Réglage de l'alerte de durée d'utilisation du patch

Le patch vous avertit quand il a été porté pendant le nombre d'heures choisi, pour que vous puissiez préparer le changement. Vous pouvez la régler de 24 à 167 heures. La valeur par défaut est 116 heures.

### Alarme d'information du patch

Quand cette option est activée, le patch émet un bip quand un bolus, un bolus étendu ou un débit basal temporaire commence et quand il se termine. Par défaut, elle est désactivée.

## L'écran de la pompe

![Écran de la pompe Carelevo sans patch actif](../images/v4/Pumps/carelevo_pump_screen.png)

L'écran de la pompe affiche l'**État du Bluetooth** (Aucun patch actif, Déconnecté ou Connecté), le **N° de série** du patch, sa **Date d’activation** et son **Expiration**, le **Débit basal** actuel et le **Débit basal temporaire**, l'**Insuline restante** (restante / remplie), le **Temps restant du patch** et l'**Insuline totale injectée**.

Les boutons dépendent de l'état du patch :

* **Activer le Patch** : lance l'activation d'un nouveau patch, voir plus bas.
* **Guide insuline** : montre les douze étapes pour remplir un patch avec de l'insuline.
* **Suspendre l'injection** / **Reprendre l'injection** : met en pause et redémarre l'injection d'insuline, voir plus bas.
* **Jeter le patch** : arrête le patch actuel pour pouvoir en activer un nouveau.

## Activer un patch

Avant de commencer, vérifiez qu'un **Profil** est actif dans **AAPS** et que le Bluetooth est activé. Le patch doit être activé dans un temps limité après sa mise en marche. Si ce temps est dépassé, le patch déclenche l'alarme **Délai de pose du patch dépassé** et ne peut pas être utilisé.

Appuyez sur **Activer le Patch** sur l'écran de la pompe et suivez les étapes. Vous pouvez annuler à tout moment avant l'insertion de l'aiguille ; ce que vous avez saisi est alors supprimé.

### Choisir l'insuline

Confirmez l'insuline que vous utilisez. Le patch nécessite une insuline rapide U-100.

### Remplir le patch avec de l'insuline

Remplissez le patch avec 50 à 300 U, selon la durée pendant laquelle vous allez le porter. Appuyez sur **Guide insuline** si vous avez besoin des instructions de remplissage. Ensuite, touchez la quantité de remplissage et choisissez la quantité que vous avez remplie ; **AAPS** l'utilise pour afficher l'insuline restante.

### Connecter le patch

1. Sortez le patch de son emballage (blister) et retirez le capuchon de l'aiguille.
1. Appuyez sur le bouton marche du patch pendant plus d'une seconde. Après le bip, touchez **Rechercher le patch**.
1. Si le patch trouvé est le bon, touchez **Confirmer**. Sinon, touchez **Rechercher à nouveau**.

### Contrôle de sécurité

Une fois le patch connecté, appuyez sur **Contrôle de sécurité**. Le patch se teste lui-même et fait l'amorçage. Vérifiez qu'une goutte d'insuline s'est formée au bout de l'aiguille. Si aucune goutte n'est visible, appuyez sur **Réessayer**. Quand le contrôle est terminé, appuyez sur **Suivant**.

### Site et pose du patch

1. Choisissez le site où vous allez porter le patch.
1. Nettoyez bien le site avec une lingette d'alcool.
1. Retirez le film de protection et collez le patch sur votre peau, avec le point marqué vers le haut.
1. Appuyez sur **Suivant** quand le patch est collé.

### Insérer l'aiguille

1. Tournez le capuchon de sécurité dans le sens de la flèche et retirez-le.
1. Appuyez à fond sur le bouton-poussoir de l'applicateur et maintenez-le pendant 10 secondes. Un bip retentit quand l'aiguille est insérée.
1. Retirez l'applicateur et appuyez sur **Confirmer l'insertion**.

Si l'insertion échoue, **AAPS** vous indique combien d'essais il reste. Quand il ne reste plus d'essai, le patch déclenche l'alarme **Erreur d'insertion de l'aiguille** et doit être remplacé.

L'injection d'insuline commence dès que l'insertion est confirmée.

## Messages de bolus

Si le patch refuse un bolus, **AAPS** vous dit pourquoi. Par exemple, *Bolus ne peut pas être injecté. Bolus disponible : 2,8 U* signifie que le patch ne peut injecter que cette quantité pour le moment.

Si vous arrêtez un bolus et que le patch ne confirme pas l'arrêt, **AAPS** attend la fin du bolus et enregistre la quantité indiquée par le patch. Si un bolus n'a pas été enregistré (par exemple parce qu'il a été arrêté pendant l'injection), **AAPS** l'ajoute à partir du total du patch et vous demande de vérifier l'IA avant de réessayer.

## Suspendre et reprendre l'injection d'insuline

Appuyez sur **Suspendre l'injection** sur l'écran de la pompe et choisissez la durée de la pause : de 30 minutes à 4 heures, par pas de 30 minutes. L'injection ne reprend pas toute seule : à la fin de la pause, le patch déclenche l'alerte **Démarrer l'insuline**. Appuyez sur **Reprendre l'injection** sur l'écran de la pompe, ou sur **Démarrer l'insuline** dans l'alerte, puis confirmez.

## Retirer un patch

Appuyez sur **Jeter le patch** sur l'écran de la pompe et confirmez. L'injection d'insuline s'arrête et le patch ne peut plus être utilisé. Retirez le patch de votre corps et activez-en un nouveau.

Quand une alarme critique a arrêté le patch, l'alarme propose à la place **Désactiver le Patch**. Ce bouton retire le patch de la même façon.

(carelevo-alarms-and-notifications)=

## Alarmes et notifications

Le patch signale trois niveaux d'événements. Ils sont tous affichés comme notifications **AAPS**.

### Alarmes critiques

L'injection d'insuline est arrêtée. Agissez tout de suite :

* **Insuline faible** : il reste moins de 10 U. Désactivez le patch et changez-le.
* **Patch expiré** : le patch est arrivé en fin de vie. Désactivez le patch et changez-le.
* **Batterie faible** : jetez le patch et changez-le.
* **High/Low Temperature**: move to a suitable temperature, between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Arrêt automatique** : le patch s'est arrêté car l'alerte Arrêt automatique a été ignorée. Appuyez sur **Démarrer l'insuline** pour relancer l'injection basale.
* **Délai de pose du patch dépassé**, **Échec de l'autodiagnostic**, **Erreur du patch**, **Occlusion** et **Erreur d'insertion de l'aiguille** : désactivez le patch et changez-le.

### Alertes

L'injection d'insuline continue, mais quelque chose demande votre attention :

* **Insuline faible** : le réservoir a atteint la quantité réglée dans **Réglage de la notification d'insuline faible**. Préparez le changement du patch.
* **Le patch va bientôt expirer** et **Durée de vie du patch expirée** : changez le patch.
* **Batterie faible** : préparez le changement du patch.
* **High/Low Temperature**: delivery is paused until the patch is back between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Arrêt automatique** : touchez **OK**. Si elle est ignorée, l'alerte devient une alarme critique et l'injection s'arrête.
* **Activation du patch incomplète** : touchez **OK** pour terminer l'activation.
* **Démarrer l'insuline** : la pause que vous avez réglée est terminée. Touchez **Démarrer l'insuline** pour reprendre l'injection.
* **Activez le Bluetooth** et **BLE non connecté** : le téléphone ne peut pas joindre le patch. Activez le Bluetooth ou vérifiez la connexion du patch.

### Avis

Pour information seulement : **Insuline faible**, **Notification de durée d'utilisation du patch** (la durée réglée dans **Réglage de la notification de durée d'utilisation du patch** est dépassée), **Notification de vérification du patch**, **Changement de fuseau horaire** et **Vérifiez la glycémie** (un temps réglé après un bolus).

Le patch signale aussi quand sa propre fonction d'arrêt sur glycémie basse (**AGB**) commence ou se termine. **AAPS** n'utilise pas cette fonction ; la boucle gère elle-même les glycémies basses.

## Où obtenir de l'aide

Signalez les problèmes du pilote CareLevo sur la [page des tickets GitHub d'AAPS](https://github.com/nightscout/AndroidAPS/issues) ou dans les canaux de la communauté AAPS, voir [Où puis-je obtenir de l'aide ?](../GettingHelp/WhereCanIGetHelp.md).
