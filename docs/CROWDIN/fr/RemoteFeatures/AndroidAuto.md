# Android Auto

**AAPS** peut vous envoyer des informations sur votre état actuel sous forme de message, directement dans Android Auto dans votre voiture.

## Prérequis

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

Cela veut dire que :

* Android doit autoriser **AAPS** à afficher des notifications et
* Comme **AAPS** n'est pas une application officielle, autorisez les « sources inconnues » dans Android Auto.

![Données MGC AAPS sur Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Vérifier qu'AAPS peut afficher des notifications

**AAPS** affiche toujours une notification d'état avec votre glycémie actuelle, votre IA et vos GA. C'est cette notification qu'Android Auto affiche dans la voiture. Il n'y a rien à activer dans **AAPS**, mais Android doit autoriser **AAPS** à afficher des notifications.

Sur votre téléphone, ouvrez **Paramètres** > **Applications** > **AAPS** > **Notifications** et vérifiez que **Toutes les notifications AAPS** est activé.

![Toutes les notifications AAPS activées](../images/android_auto_notifications_all.png)

Faites défiler vers le bas et vérifiez que **État en cours** est activé : c'est le canal de la notification d'état.

![Canal de notification État en cours activé](../images/android_auto_ongoing_channel.png)

Vérifiez maintenant que vous voyez la notification d'état d'**AAPS** sur le téléphone avant d'aller à votre voiture !

![Notification AAPS sur le téléphone](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Autoriser les « sources inconnues » dans Android Auto

Comme **AAPS** n'est pas une application officielle pour Android Auto, les notifications doivent être activées pour les « sources inconnues » dans Android Auto. Cela se fait avec le mode développeur, que nous allons vous montrer ici.

Go to your car and connect your mobile with the car's audio system.

Vous devriez maintenant voir un écran comme celui-ci.

![Activer le mode développeur](../images/android_auto_05.png)

Appuyez sur l'icône **paramètres** pour démarrer la configuration.

Faites défiler jusqu'en bas de la page et choisissez **see more in the phone** (voir plus sur le téléphone).

![Activer le mode développeur](../images/android_auto_06.png)

Maintenant, sur le téléphone, nous allons activer le mode développeur.

Le premier écran ressemble à ceci. Faites défiler jusqu'en bas de la page.

![Activer le mode développeur](../images/android_auto_07.png)

Vous y voyez la version d'Android Auto. Appuyez 10 fois (dix fois) sur la version d'Android Auto. Avec cette combinaison cachée, vous avez maintenant activé le mode développeur.

![Activer le mode développeur](../images/android_auto_08.png)

Confirmez que vous voulez activer le mode développeur dans la fenêtre « Allow development settings? » (Autoriser les paramètres pour les développeurs ?).

![Activer le mode développeur](../images/android_auto_09.png)

Dans les **paramètres pour les développeurs**, activez « Sources inconnues » (Unknown sources).

![Activer le mode développeur](../images/android_auto_10.png)

Vous pouvez maintenant quitter le mode développeur si vous le souhaitez. Pour cela, appuyez sur le menu à trois points en haut à droite.

## Afficher les notifications dans la voiture

Dans Android Auto, dans votre voiture, appuyez sur l'**icône avec un nombre** en bas à droite.

![icône avec un nombre - Android Auto dans la voiture](../images/android_auto_11.png)

Vos données MGC seront affichées comme ceci :

![Données MGC AAPS sur Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Dépannage :

* Si vous ne voyez pas la notification, vérifiez que vous avez [autorisé AAPS à afficher des notifications](#androidauto-check-that-aaps-can-show-notifications) dans Android et qu'[Android Auto a accès aux notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).