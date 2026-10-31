# Surveillance à distance

![Le suivi des enfants](../images/KidsMonitoring.png)

__AAPS__ offre plusieurs fonctions pour la surveillance à distance des enfants avec un diabète de type 1. Il permet aussi d'envoyer des commandes à distance, qui donnent des instructions à __AAPS__. De la même façon, __AAPSClient__ peut aussi servir à la surveillance à distance pour suivre l'__AAPS__ de votre partenaire ou d'un ami.

## Fonctions

- La pompe de l'enfant est contrôlée par le téléphone de l'enfant avec __AAPS__.
- Les aidants peuvent suivre à distance toutes les données utiles, comme la glycémie, les glucides actifs, l'insuline active, etc., avec l'**apk AAPSClient** sur leur téléphone Android (une version iPhone d'**AAPSClient** est en développement, voir [AAPSClient](AapsClient.md)). Les paramètres modifiés dans __AAPS__ se synchronisent avec __AAPSClient__ et inversement.
- Les aidants peuvent recevoir des alarmes avec l'**application xDrip en mode suiveur** sur leur téléphone Android, si le mode compagnon de xDrip est configuré.
- Le contrôle à distance d'__AAPS__ par [Commandes SMS](../RemoteFeatures/SMSCommands.md) est sécurisé par une authentification à deux facteurs.
- Le contrôle à distance par __AAPSClient__ utilise le canal de commandes signées introduit dans **AAPS** 4 : le client doit d'abord être **associé** au maître (avec un QR code ou un code PIN), et chaque commande est confirmée et exécutée par le maître. Chaque téléphone d'aidant peut avoir son propre [rôle](#client-master-control-roles), de la lecture seule au contrôle complet – voir [Contrôle maître ↔ client](#client-master-control).

## Outils et applications pour la surveillance à distance

- [Nightscout](https://nightscout.github.io/) dans un navigateur web (surtout pour afficher les données).
- [__AAPSClient__](AapsClient.md) est une version allégée d'__AAPS__. Il peut suivre l'__AAPS__ maître et, une fois **associé**, envoyer des commandes à distance : glucides, __Cibles temporaires__, __Changements de profil__ et même des bolus (voir [Contrôle maître ↔ client](#client-master-control)). Il existe 3 applications : [AAPSClient, AAPSClient2 et AAPSClient3 à télécharger](https://github.com/nightscout/AndroidAPS/releases/). Un aidant peut ainsi suivre jusqu'à trois personnes différentes depuis le même téléphone (par ex. deux enfants avec un diabète de type 1, chacun avec son propre compte Nightscout et son propre __AAPS__ maître).
- Dexcom Follow si vous utilisez l'application officielle Dexcom (glycémies uniquement).
- [xDrip](../CompatibleCgms/xDrip.md) en mode suiveur (surtout les glycémies et les **alarmes**).
- [Sugarmate](https://sugarmate.io/) ou [Spike](https://spike-app.com/) sur iOS (surtout les glycémies et les **alarmes**).
- Certains utilisateurs trouvent qu'un outil complet d'accès à distance comme [TeamViewer](https://www.teamviewer.com/) est utile pour un dépannage avancé à distance.

## Utiliser une montre

Une montre connectée peut être un outil très utile pour gérer __AAPS__ chez les enfants avec un DT1. Plusieurs options sont possibles :

- Option 1 - Si __AAPSClient__ est installé sur le téléphone de l'aidant, l'[application AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/) peut être installée sur une montre connectée compatible, reliée au téléphone de l'aidant. Elle affiche la __glycémie__ actuelle, l'état de la boucle et l'historique des bolus. Elle permet aussi de saisir des glucides et de modifier les __Cibles temporaires__ et le __Profil__. Si le client est **associé** au maître, la montre peut aussi lancer un **bolus** : la commande passe par le client jusqu'au maître, qui la confirme et l'administre (voir [Contrôle maître ↔ client](#client-master-control)).
- Option 2 - L'[application AAPS WearOS](../WearOS/WearOsSmartwatch.md) peut aussi être compilée et installée sur une montre connectée compatible, reliée au téléphone de l'enfant mais portée par l'aidant. Cela comprend toutes les fonctions citées plus haut, et en plus la possibilité de faire un bolus d'insuline directement, sans devoir prendre le téléphone de l'enfant.
- Option 3 - Affichage seul : une montre qu'**AAPS** ne prend pas en charge directement (Xiaomi, Amazfit, ou une montre Wear OS qui affiche une complication) peut afficher la glycémie, l'IA, les GA et l'état de la boucle avec une application compagnon comme WatchDrip+ ou GlucoDataHandler. Cette application reçoit les données du plugin **Applications compagnon externes** du téléphone **AAPS** ou **AAPSClient** auquel la montre est reliée. Voir [Applications compagnon externes](#watches-external-companion-apps).

## Points à considérer

- Tenez compte du décalage de temps entre le maître et le suiveur, dû au temps d'envoi et de téléchargement. De plus, le téléphone __AAPS__ maître n'envoie les données qu'après l'exécution de la boucle.
- Quel est votre plan d'urgence si le contrôle à distance ne fonctionne pas (_par ex._ problèmes de réseau ou perte de la connexion Bluetooth) ? Réfléchissez toujours à ce qui se passera avec **AAPS** si vous ne pouvez pas envoyer votre prochaine commande. **AAPS** remplace le débit basal, la SI et le G/I de la pompe par les valeurs du profil actuel. N'utilisez des changements de profil temporaires (_c.-à-d._ avec une durée définie) que si vous passez à un profil d'insuline plus fort, au cas où votre connexion à distance serait coupée. La pompe reviendra alors au profil d'origine à la fin de la durée.
