# Surveillance à distance

![Surveillance des enfants](../images/KidsMonitoring.png)

AndroidAPS offre plusieurs options pour la surveillance à distance des enfants et permet également d'envoyer des commandes à distance. Bien sûr, vous pouvez également utiliser la surveillance à distance pour suivre votre partenaire ou votre ami.

## Fonctions

- La pompe de l'enfant est contrôlée par le téléphone de l'enfant grâce à AAPS.
- Les parents peuvent suivre à distance toutes les données pertinentes telles que les glycémies, les glucides actifs, l'insuline active, etc. en utilisant l'application **AAPSClient** sur leur téléphone. Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Les parents peuvent recevoir des alarmes en utilisant l'application **xDrip+ en mode suiveur** sur leur téléphone.
- Le contrôle à distance d'AAPS avec les [commandes SMS](../Children/SMS-Commands.md) est sécurisé par l'authentification à deux facteurs.
- Le contrôle à distance via l'application AAPSClient n'est recommandé que si votre synchronisation fonctionne bien (vous ne voyez pas de changement de données indésirables comme la modification automatique de CT, DBT, etc.) voir les [notes de version pour la version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) pour plus de détails.

## Outils et applications pour la surveillance à distance

- [Nightscout](https://nightscout.github.io/) dans le navigateur web (principalement affichage des données)
- L'application AAPSClient est une version réduite d'AAPS capable de suivre quelqu'un, de faire des changements de profil, de régler des CTs et d'entrer des glucides. Il y a 2 applications: [AAPSClient & AAPSClient2 que vous pouvez télécharger](https://github.com/nightscout/AndroidAPS/releases/). La seule différence est le nom de l'application. De cette façon, vous pouvez installer l'application deux fois sur le même téléphone, pour pouvoir suivre 2 personnes/nightscout différentes.
- Dexcom Follow si vous utilisez l'application officielle Dexcom (glycémies uniquement)
- [xDrip+](../Configuration/xdrip.md) en mode suiveur (principalement les valeurs de GLY et les **alarmes**)
- [Sugarmate](https://sugarmate.io/) ou [Spike](https://spike-app.com/) sur iOS (principalement les valeur de glycémies et les **alarmes**)
- Certains utilisateurs trouvent que des outils comme [TeamViewer](https://www.teamviewer.com/) sont d'une grande aide afin d'être dépanné à distance

## Utiliser une montre

Une montre peut être un outil très utile pour aider à gérer AAPS avec les enfants. Plusieurs configurations différentes sont possibles:

- Si AAPSClient est installé sur le téléphone des parents, l'application [AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/) peut être installée sur une montre compatible connectée au téléphone des parents. Ceci affichera l'état actuel de la glycémie, le statut de la boucle et autorisera l'entrée des glucides, des cibles temporaires et des changements de profil. Cela n'autorisera pas les bolus depuis l'application WearOS.
- Alternativement, l'application [AAPS WearOS](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) peut être construite et installée sur une montre compatible et connectée au téléphone de l'enfant mais portée par le parent. Cela inclut toutes les fonctions listées ci-dessus, ainsi que la capacité d'injecter un bolus. Cela permettra au parent d'injecter un bolus sans utiliser le téléphone de l'enfant, pas toujours facilement accessible.

## Points à considérer

- Définir les bons [paramètres de traitement](FAQ-how-to-begin) (débits de basal, DAI, SI...) est difficile pour les enfants, surtout lorsque les hormones de croissance sont impliquées.
- Les paramètres doivent être les mêmes dans AAPS et AAPSClient.
- Considérez un décalage de temps entre le maître et le suiveur dû au temps de téléchargement, et parce que le téléphone principal AAPS ne remontera les données qu'après l'exécution de la boucle.
- Alors prenez le temps de les configurer correctement et de les tester dans la vrai vie avec votre enfant à côté de vous avant de commencer la surveillance et le traitement à distance. Les vacances scolaires pourraient être un bon moment pour cela.
- Quel est votre plan d'urgence lorsque le contrôle à distance ne fonctionne pas (par ex. en cas de problèmes réseaux)?
- La surveillance et le traitement à distance peuvent vraimpent être très utiles à la crèche et à l'école primaire. Mais assurez-vous que les enseignants et les éducateurs sont au courant du plan de traitement de votre enfant. Des exemples pour ce type de prise en charge peuvent être trouvés dans la [section fichiers des utilisateurs AAPS](https://www.facebook.com/groups/AndroidAPSUsers/files/) sur Facebook.
- Il est important de garder en permanence le téléphone de l'enfant à proximité de la pompe et du capteur MGC. Cela peut être difficile, spécialement pour les enfants en bas âge. Plusieurs solutions existent, comme la ceinture [SPI Belt](https://spibelt.com/collections/kids-belts)
