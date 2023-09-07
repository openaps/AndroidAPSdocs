# Recommandations générales MGC

## Hygiène de la MGC

Quel que soit le système CGM que vous utilisez, si vous allez utiliser un calibrage effectué sur le sang, il existe des règles très claires que vous devriez appliquer, que vous utilisiez ou non le logiciel DIY CGM ou les applications officielles.

-   Assurez-vous que vos mains et le kit sont propres.
-   Essayez de calibrer lorsque vous avez une série de mesures avec une flèche plate (15-30 minutes sont habituellement suffisantes)
-   Évitez de calibrer lorsque les glycémie montent ou descendent.
-   Faites "assez" de calibrations - sur les applications officielles, vous serez invité à effectuer des vérifications une ou deux fois par jour. Sur les systèmes DIY, vous pouvez ne pas être sollicités pour calibrer, mais soyez prudents si vous continuez sans calibration.
-   Si c'est possible, calibrez avec certaines de vos lectures dans une plage basse (4-5mmol/l ou 72-90mg/dl) et certains à un niveau légèrement plus élevé (7-9mmol/l ou 126-160mg/dl) car cela offre une meilleure gamme pour le calibrage des points par rapport à la pente.

## Réglage du capteur (G6)

Lors de la mise en place du capteur, il est recommandé de ne pas appuyer trop fermement sur le serteur pour éviter les saignements. Le fil du capteur ne doit pas entrer en contact avec le sang.

Après la mise en place du capteur, l'émetteur peut être cliqué dans son support. Attention ! Cliquez d'abord sur le côté carré, puis appuyez sur le côté rond.

(GeneralCGMRecommendation-troubleshooting)=
## Résolution de problèmes

### Problèmes de connexion

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### Erreurs de capteur

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Saut de valeurs

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Âge du capteur négatif

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](Config-Builder-actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
