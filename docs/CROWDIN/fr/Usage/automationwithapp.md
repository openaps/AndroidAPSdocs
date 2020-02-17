# Automatisation avec une application Android Automate tierce

**Cet article a été écrit avant la version 2.5 d'AndroidAPS. Il existe un plug-in d'automatisation [dans AndroidAPS](./Automation.rst) lui-même à partir de la version 2.5. Pour certains, ceci peut être encore utile, mais ne doit être utilisé que par les utilisateurs avancés.**

Comme AndroidAPS est un système à boucle fermée hybride, une certaine interaction avec l'utilisateur est nécessaire (par ex. dites à la boucle si vous marchez, mangez bientôt, restez couché sur le canapé...). Les entrées manuelles fréquentes peuvent être automatisées via des outils externes tels que Automate ou IFTTT pour étendre la fonctionnalité récente d'AndroidAPS.

## Application Android Automate

L'application gratuite Android™ Automate vous permet d'automatiser diverses tâches sur votre smartphone. Créez vos automatisations avec des diagrammes, faites que votre appareil change automatiquement les paramètres tels que Bluetooth, Wifi, NFC ou exécute des actions comme l'envoi de SMS, d'e-mail, en fonction de votre localisation, de l'heure du jour, ou de tout autre "déclencheur d'événement". Vous pouvez automatiser presque tout sur votre appareil, Automate même en charge les plug-ins conçus pour Tasker et Locale.

A l'aide de cet outil vous pouvez facilement créer des workflows pour traiter votre diabète à l'aide de plusieurs conditions selon le principe de 'si ... et ... et pas ..., alors fait ... et ...'. Il y a des milliers de possibilités que vous pouvez configurer.

Jusqu'à présent, il est **nécessaire de boucler via un profil Nightscout**, car Automate exécute les commandes via des requêtes HTTP directement dans votre site Web nightscout qui le synchronise ensuite avec votre application AndroidAPS.

**La boucle hors ligne (communication directe entre Automate et AndroidAPS) n'est pas encore prise en charge**, mais est techniquement possible. Il y aura peut-être une solution à l'avenir. Si vous avez trouvé un moyen de le faire, veuillez l'ajouter à cette documentation ou contacter un développeur.

### Exigences de base

#### Application Automate

Téléchargez Android Automate dans Google Play Store ou sur <https://llamalab.com/automate/> et installez la sur votre smartphone où AndroidAPS s'exécute.

Dans Automate, appuyez sur le menu hamburger en haut à gauche de l'écran > Settings > Cochez 'Run on system startup'. Cela exécutera automatiquement vos Workflows au démarrage du système.

![Automatiser requête HTTP](../images/automate-app2.png)

#### AndroidAPS

Dans AndroidAPS appuyez sur le menu trois points en haut à droite de l'écran et accédez à Paramètres > NSClient > Paramètres de connexion > Décochez la case "Utiliser uniquement la connexion WiFi" et "Uniquement si en charge" comme Automate ne fonctionne que lorsque AndroidAPS a une connexion avec Nightscout.

![Paramètres de connexion Nighscout](../images/automate-aaps1.jpg)

Dans AndroidAPS appuyez sur le menu trois points en haut à droite de l'écran et accédez à Paramètres > NSClient > Paramètres avancés > Décocher 'Remonter uniquement vers NS (sync désactivée)' et 'Pas de téléchargement vers NS'

![Paramètres de téléchargement Nighscout](../images/automate-aaps2.jpg)

### Exemples de Workflow

#### Exemple 1: Si une activité (par ex. marche ou course) est détectée, définir une CT élevée. Et si l'activité se termine, attendre 20 minutes puis annuler la CT

Ce workflow écoutera les capteurs du smartphone (pédomètre, capteur de gravité...) qui détecteront le comportement de l'activité. Si il est récent activité comme la marche, la course ou du vélo, alors Automate définira une cible temp élevée d'une durée spécifiée par l'utilisateur. Si l'activité se termine, votre smartphone le détectera, il attendra 20 minutes, puis il fixera la cible à la valeur normale du profil.

Téléchargez le script Automate <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Personnaliser le workflow en fonction de vos souhaits comme ceci :

![Automate sling](../images/automate-app6.png)

1. = Set high TT
2. = Go back to normal target 20 minutes after the end of activity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The high TT value (top and bottom should be the same value)
* duration: The duration of the high TT (after time it will fallback to regular profile target unless activity goes on). 
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 2: If xDrip+ alerts a BG high alarm, then set a low TT for ... minutes.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temporary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![Réglages d'alerte xDrip+](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for firing the trigger. It should be unmistakable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

Threshold: BG value that should fire the high alert.

Default Snooze: Insert the duration you are planning to set for your low TT here, as the alert will come up again and maybe extend the duration of the low TT.

![Réglages d'alerte xDrip+](../images/automate-xdrip2.png)

##### Automate

Secondly, download the Automate script <https://llamalab.com/automate/community/flows/27809>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Personnaliser le workflow en fonction de vos souhaits comme ceci :

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The low TT value (top and bottom should be the same value)
* duration: The duration of the low TT (after time it will fallback to regular profile target). It is recommended that you use the same duration as in xDrip+ alert 'Standard snooze'
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 3: To be added by you!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...