# Lissage des données de glycémie

Si les glycémies sont instables/bruitées, AAPS peut mal doser la quantité d'insuline, entraînant des hyper ou hypo. Pour cette raison, il est important de désactiver la boucle jusqu'à ce que le problème soit résolu. Selon votre MGC, de tels problèmes peuvent être dus à la configuration de la MGC ou à des problèmes de capteur ou de site. Vous devrez peut-être remplacer votre capteur MGC pour résoudre ce problème. Certaines fonctionnalités comme 'Activer en permanence les SMB' et 'Activer SMB après injection de glucides' ne peuvent être utilisées qu'avec une source de glycémie bien filtrée.

## Application Dexcom G5 (patchée)

Lorsque vous utilisez l'application Dexcom G5 (patchée) vos données de glycémie sont lisses et cohérentes. Il n'y a aucune restriction à utiliser les SMB.

## xDrip+ avec Dexcom G5

Les glycémies ne sont suffisament lissées avec XDrip+ et G5 que si vous utilisez 'OB1 collector in native mode'.

## XDrip+ avec Freestyle Libre

Lorsque vous utilisez xDrip+ comme source de données avec le Freestyle Libre, vous ne pouvez pour l'instant pas activer 'Activer en permanence les SMB' et 'Activer SMB après injection de glucides' car les valeurs de glycémies ne sont pas assez lissées. Sauf qu'il y a deux choses que vous pouvez faire pour aider à réduire le bruit dans les données.

**Smooth Sensor Noise.** Allez dans xDrip+ Paramètres > xDrip+ Paramètres d'affichage, et vérifiez que "Smooth Sensor Noise" est activé. Cela va essayer de lisser les données bruyantes.

**Smooth Sensor Noise (Ultrasensitive).** Si vous voyez toujours des données bruitées dans xDrip+, vous pouvez appliquer un lissage plus agressif en activant "Smooth Sensor Noise (Ultrasensitive)". Cela essaiera de lisser même si de faibles niveaux de bruits sont détectés. Pour ce faire, activez d'abord le mode ingénierie dans xDrip+. Ensuite, allez dans Paramètres > xDrip+ Paramètres d'affichage et activez "Smooth Sensor Noise (Ultrasensitive)".