# Surveillance à distance

![Le suivi des enfants](../images/KidsMonitoring.png)

AndroidAPS offre plusieurs options pour la surveillance à distance des enfants et permet également d'envoyer des commandes à distance. Bien sûr, vous pouvez également utiliser la surveillance à distance pour suivre votre partenaire ou votre ami.

## Fonctions

- La pompe de l'enfant est contrôlée par le téléphone de l'enfant grâce à AAPS.
- Les parents peuvent suivre à distance toutes les données pertinentes telles que les glycémies, les glucides actifs, l'insuline active, etc. en utilisant l'application **AAPSClient** sur leur téléphone. Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Les parents peuvent recevoir des alarmes en utilisant l'application **xDrip+ en mode suiveur** sur leur téléphone.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Maintenance/ReleaseNotes.md#version-2811) for further details.

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
- Alternatively, the [AAPS WearOS app](../UsefulLinks/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Cela inclut toutes les fonctions listées ci-dessus, ainsi que la capacité d'injecter un bolus. Cela permettra au parent d'injecter un bolus sans utiliser le téléphone de l'enfant, pas toujours facilement accessible.

## Points à considérer

- Setting the correct [treatment factors](../UsefulLinks/FAQ.md#how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Considérez un décalage de temps entre le maître et le suiveur dû au temps de téléchargement, et parce que le téléphone principal AAPS ne remontera les données qu'après l'exécution de la boucle.
- Alors prenez le temps de les configurer correctement et de les tester dans la vrai vie avec votre enfant à côté de vous avant de commencer la surveillance et le traitement à distance. Les vacances scolaires pourraient être un bon moment pour cela.
- Quel est votre plan d'urgence lorsque le contrôle à distance ne fonctionne pas (par ex. en cas de problèmes réseaux)?
- La surveillance et le traitement à distance peuvent vraimpent être très utiles à la crèche et à l'école primaire. Mais assurez-vous que les enseignants et les éducateurs sont au courant du plan de traitement de votre enfant. Des exemples pour ce type de prise en charge peuvent être trouvés dans la [section fichiers des utilisateurs AAPS](https://www.facebook.com/groups/AndroidAPSUsers/files/) sur Facebook.
- Il est important de garder en permanence le téléphone de l'enfant à proximité de la pompe et du capteur MGC. Cela peut être difficile, spécialement pour les enfants en bas âge. Plusieurs solutions existent, comme la ceinture [SPI Belt](https://spibelt.com/collections/kids-belts)
