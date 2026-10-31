# DanaR

*Ces instructions décrivent la configuration de l’application et de votre pompe si vous avez une DanaR. Consultez [DanaRS, Dana-i et Dana-i2](./DanaRS-Insulin-Pump.md) si vous avez plutôt la DanaRS, sortie en 2017.*

## Fonctionnalités de la pompe avec AAPS

* Communique avec **AAPS** par le Bluetooth intégré de votre téléphone, sans appareil de communication supplémentaire.
* Les changements de fuseau horaire et d'heure d'été ne demandent aucune action particulière, car la pompe n'utilise pas son propre historique.

## Configuration

* Dans la pompe, allez dans Main Menu > Setting > User Option
* Activez "8. Extended Bolus"

![Pompe DanaR](../images/danar1.png)

* Allez dans Main Menu > Setting > Discovery
* Dans les paramètres du téléphone, allez dans Bluetooth, recherchez les appareils à proximité, choisissez le numéro de série de votre DanaR et saisissez votre mot de passe (le mot de passe d'appairage est 0000). Si la DanaR n'apparaît pas dans la recherche, redémarrez le téléphone, retirez la pile de la DanaR, remettez-la et refaites ces deux étapes.

* Dans **AAPS**, ouvrez le **menu** (☰) en haut à gauche, allez dans **Configuration** > **Pompe** et choisissez votre type de DanaR (**DanaR**, **DanaR Coréenne** ou **DanaRv2**).
  
  ![Configuration > Pompe avec les plugins DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Ouvrez l'écran de la pompe : touchez **Ouvrir le plugin** sur la carte DanaR (ou allez dans **Gestion** > **Pompe**).

* Touchez **Appairage**. Sur l'écran d'appairage : 
  * Saisissez le mot de passe de votre pompe dans **Mot de passe pompe** (le mot de passe par défaut est 1234).
  * Dans **Sélectionnez le périphérique jumelé**, touchez le numéro de série de votre DanaR. Si la liste est vide, touchez **Ouvrir les paramètres Bluetooth** et appairez d'abord la pompe avec votre téléphone (voir l'étape ci-dessus). Quand vous revenez dans **AAPS**, la pompe apparaît dans la liste. Sinon, touchez l'icône d'actualisation.
  * Touchez **Appairage**. **AAPS** se connecte à la pompe et vérifie le mot de passe.
* Pour modifier les paramètres du pilote, touchez **Paramètres** sur la carte DanaR dans **Configuration** > **Pompe** : 
  * **Vitesse du bolus** (DanaR et DanaRv2) : modifie la vitesse de bolus par défaut (12 s/U, 30 s/U ou 60 s/U).
  * **Utiliser les bolus étendus pour > 200%** (DanaR et DanaR Coréenne) : activez cette option si vous voulez qu'**AAPS** autorise un débit basal supérieur à 200 %. Notez que cela signifie que vous ne pouvez pas boucler avec des DBT élevés pendant que vous utilisez des bolus étendus pour les repas.
* Réglez le pas basal de la pompe sur 0,01 U/h
* Réglez le pas de bolus de la pompe sur 0,1 U. **AAPS** lit le pas de bolus dans la pompe et l'utilise pour chaque bolus.
* Activer les bolus étendus dans la pompe

## Voyager avec différents fuseaux horaires avec la pompe DanaR

Pour les voyages avec changement de fuseau horaire, voir la section [Voyager avec changement de fuseau horaire avec les pompes](#timezone-traveling-danarv2-danars).

## Où obtenir de l'aide

Le pilote DanaR est développé par la communauté, de manière **bénévole**. Avant de demander de l'aide, merci de :

1. **Lire** la section de cette documentation qui concerne votre problème, pour vérifier comment la fonction doit marcher.
2. **Demander** sur le canal *#AAPS* sur [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md).
3. **Signaler un bug** en cherchant dans les [tickets existants](https://github.com/nightscout/AndroidAPS/issues) ; si le vôtre n'y est pas, ouvrez un [nouveau ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez vos [fichiers log](../GettingHelp/AccessingLogFiles.md).

Pour demander de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, la version d'**AAPS** et une description simple du problème (ce qui a changé, quand cela a fonctionné pour la dernière fois).