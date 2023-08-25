(Smoothing-Blood-Glucose-Data-in-xDrip-smoothing-blood-glucose-data)=

# Lissage des données de glycémie

Si les glycémies sont instables/bruitées, AAPS peut mal doser la quantité d'insuline, entraînant des hyper ou hypo. Pour cette raison, il est important de désactiver la boucle jusqu'à ce que le problème soit résolu. Selon votre MGC, de tels problèmes peuvent être dus à la configuration de la MGC ou à des problèmes de capteur ou de site. Vous devrez peut-être remplacer votre capteur MGC pour résoudre ce problème.

Certains systèmes de MGC ont des algorithmes internes pour détecter le niveau de bruit dans les lectures et AAPS peut utiliser cette information pour éviter de donner des SMB si les données de glycémie sont trop peu fiables. Cependant, certaines MGC ne transmettent pas ces données et, pour ces sources de glycémie, 'Activer le SMB toujours' et 'Activer le SMB après les glucides' sont désactivés pour des raisons de sécurité.

## Capteurs Dexcom

### Construisez votre propre application Dexcom (BYODA)

Lorsque vous utilisez [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) vos glycémies sont lissées et cohérentes. De plus, vous pouvez profiter du lissage arrière Dexcom. Il n'y a pas de restrictions à l'utilisation des SMB, car les données sur le niveau de bruit sont partagées avec AAPS.

### xDrip+ avec Dexcom G6 ou Dexcom ONE

Les niveaux de bruit et les glycémies lissées ne sont partagées avec AAPS que si vous utilisez xDrip+ [mode natif](https://navid200.github.io/xDrip/docs/Native-Algorithm). En utilisant le mode natif, il n'y a aucune restriction dans l'utilisation des SMBs.

### Dexcom G6 ou Dexcom ONE avec le mode compagnon xDrip+

Les niveaux de bruit ne sont pas partagées avec AAPS en utilisant cette méthode. Par conséquent, 'Activer SMB toujours' et 'Activer SMB après les glucides' sont désactivés.

## Capteurs Freestyle Libre

### xDrip+ avec FreeStyle Libre

Aucun des systèmes FreeStyle Libre (FSL1, FSL2, ou FSL3) ne diffuse d'informations sur le niveau de bruit détecté dans les lectures, et donc 'Activer SMB toujours' et 'Activer SMB après glucides' sont désactivés pour toutes les configurations utilisant FreeStyle Libre.

En outre, de nombreuses personnes ont signalé que FreeStyle Libre produit souvent des données bruitées. Dans xDrip+, il y a quelques options pour vous aider :

**Lissage des données capteur** Allez dans xDrip+ Paramètres > xDrip+ Paramètres d'affichage, et vérifiez que "Smooth Sensor Noise" est activé. Cela va essayer de lisser les données bruyantes.

**Lissage des données capteur (Ultra sensible).** Si vous voyez toujours des données bruitées dans xDrip+, vous pouvez appliquer un lissage plus agressif en activant "Smooth Sensor Noise (Ultrasensitive)". Cela essaiera de lisser même si de faibles niveaux de bruits sont détectés. Pour ce faire, vous devez d'abord [activer le mode ingénierie dans xDrip+](Enabling-Engineering-Mode-in-xDrip.md). Ensuite, allez dans Paramètres > xDrip+ Paramètres d'affichage et activez "Smooth Sensor Noise (Ultrasensitive)".