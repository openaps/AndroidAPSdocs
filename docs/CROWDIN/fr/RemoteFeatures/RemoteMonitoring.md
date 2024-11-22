# Surveillance à distance

![Le suivi des enfants](../images/KidsMonitoring.png)

AndroidAPS offre plusieurs options pour la surveillance à distance des enfants et permet également d'envoyer des commandes à distance. Bien sûr, vous pouvez également utiliser la surveillance à distance pour suivre votre partenaire ou votre ami.

## Fonctions

- La pompe de l'enfant est contrôlée par le téléphone de l'enfant grâce à AAPS.
- Les parents peuvent suivre à distance toutes les données pertinentes telles que les glycémies, les glucides actifs, l'insuline active, etc. en utilisant l'application **AAPSClient** sur leur téléphone. Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Les parents peuvent recevoir des alarmes en utilisant l'application **xDrip+ en mode suiveur** sur leur téléphone.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## Outils et applications pour la surveillance à distance

- [Nightscout](https://nightscout.github.io/) dans le navigateur web (principalement affichage des données)
- L'application AAPSClient est une version réduite d'AAPS capable de suivre quelqu'un, de faire des changements de profil, de régler des CTs et d'entrer des glucides. Il y a 2 applications: [AAPSClient & AAPSClient2 que vous pouvez télécharger](https://github.com/nightscout/AndroidAPS/releases/). La seule différence est le nom de l'application. De cette façon, vous pouvez installer l'application deux fois sur le même téléphone, pour pouvoir suivre 2 personnes/nightscout différentes.
- Dexcom Follow si vous utilisez l'application officielle Dexcom (glycémies uniquement)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) ou [Spike](https://spike-app.com/) sur iOS (principalement les valeur de glycémies et les **alarmes**)
- Certains utilisateurs trouvent que des outils comme [TeamViewer](https://www.teamviewer.com/) sont d'une grande aide afin d'être dépanné à distance

## Utiliser une montre

Une montre peut être un outil très utile pour aider à gérer AAPS avec les enfants. Plusieurs configurations différentes sont possibles:

- Si AAPSClient est installé sur le téléphone des parents, l'application [AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/) peut être installée sur une montre compatible connectée au téléphone des parents. Ceci affichera l'état actuel de la glycémie, le statut de la boucle et autorisera l'entrée des glucides, des cibles temporaires et des changements de profil. Cela n'autorisera pas les bolus depuis l'application WearOS.
- Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Cela inclut toutes les fonctions listées ci-dessus, ainsi que la capacité d'injecter un bolus. Cela permettra au parent d'injecter un bolus sans utiliser le téléphone de l'enfant, pas toujours facilement accessible.

## Points à considérer

- Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Considérez un décalage de temps entre le maître et le suiveur dû au temps de téléchargement, et parce que le téléphone principal AAPS ne remontera les données qu'après l'exécution de la boucle.
- What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use temporary profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.