# Recommandations générales MGC

## Hygiène de la MGC

Quel que soit le système MGC que vous utilisez, si vous souhaitez faire un calibrage avec une glycémie capillaire, il existe des règles très claires à respecter, que vous utilisiez ou non un logiciel DIY MGC ou les applications officielles.

-   Assurez-vous que vos mains et le kit sont propres.
-   Essayez de calibrer lorsque vous avez une série de points avec une flèche horizontale (15–30 minutes suffisent en général)
-   Évitez de calibrer lorsque la glycémie monte ou descend.
-   Faites « assez » de calibrations : dans les applications officielles, une vérification une ou deux fois par jour vous sera demandée. Sur les systèmes DIY, vous pouvez ne pas être sollicités pour calibrer, mais soyez prudents si vous continuez sans calibration.
-   Pour les capteurs qui ne demandent pas ou ne permettent pas de calibration, vérifiez votre vraie glycémie au moins une fois par jour. AAPS sera aussi sûr que les valeurs de votre capteur sont fiables.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Réglage du capteur (G6)

Lors de la pose du capteur, il est recommandé de ne pas appuyer trop fort sur l'applicateur pour éviter les saignements. Les contacts du capteur ne doivent pas entrer en contact avec du sang.

Après la pose du capteur, le transmetteur peut être enclenché dans le support du capteur. Attention ! Enclenchez d'abord le côté carré, puis appuyez sur le côté rond.

(general-cgm-troubleshooting)=
## Dépannage

### Problèmes de connexion

La connexion Bluetooth peut être perturbée par d'autres appareils Bluetooth voisins tels que des lecteurs de glycémie, des casques, des tablettes ou des appareils de cuisine tels que des fours à micro-ondes ou des plaques vitrocéramique. Dans ce cas, xDrip n'affiche aucune valeur de glycémie. Quand la connexion Bluetooth est rétablie, les données manquantes sont complétées (backfill).

### Erreurs de capteur

Si des erreurs de capteur récurrentes se produisent, essayez de positionner votre capteur ailleurs sur votre corps. Les contacts du capteur ne doivent pas entrer en contact avec du sang.

Souvent, une « Erreur de capteur » peut être corrigée en buvant tout de suite et en massant autour du capteur !

### Saut de valeurs

Vous pouvez essayer de changer les paramètres de blocage du bruit dans xDrip (Settings - Inter-App Settings - Noise Blocking), par ex. « Block Very High noise and worse ». Voir aussi [Lissage des données de glycémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Âge du capteur négatif

![Âge du capteur sur la ligne Capteur du panneau d'état développé](../images/main/main_status_row_expanded.png)

L'âge du capteur est affiché sur la ligne **Capteur** du panneau d'état de l'écran principal (appuyez sur le chevron pour le développer). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Ouvrez **Historique Traitements** (menu ☰), sélectionnez l'onglet **Careportal** et supprimez la mauvaise saisie.
