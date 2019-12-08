Recommandations générales MGC
*****************************

Hygiène de la MGC
=============

Quel que soit le système MGC que vous utilisez, si vous souhaitez faire un calibrage avec une glycémie capillaire, il existe des règles très claires à respecter, que vous utilisiez ou non un logiciel DIY MGC ou les applications officielles. 

* Assurez-vous que vos mains et le kit sont propres.
* Essayez de calibrer lorsque vous avez une série de mesures avec une flèche horizontale (15-30 minutes sont habituellement suffisantes)
* Évitez de calibrer lorsque les glycémie montent ou descendent. 
* Faites "assez" de calibrations - sur les applications officielles, vous serez invité à effectuer des vérifications une ou deux fois par jour. Sur les systèmes DIY, vous pouvez ne pas être sollicités pour calibrer, mais soyez prudents si vous continuez sans calibration.
* Si c'est possible, calibrez avec certaines de vos lectures dans une plage basse (4-5mmol/l ou 72-90mg/dl) et d'autres à un niveau légèrement plus élevé (7-9mmol/l ou 126-160mg/dl) car cela offre une meilleure gamme pour le calibrage des points par rapport à la pente.

Réglage du capteur (G6)
==============

Lors de la mise en place du capteur, il est recommandé de ne pas appuyer trop fermement sur le serteur pour éviter les saignements. Le fil du capteur ne doit pas entrer en contact avec le sang.

Après la mise en place du capteur, l'émetteur peut être cliqué dans son support. Attention ! Cliquez d'abord sur le côté carré, puis appuyez sur le côté rond.

Dépannage 
================

Problèmes de connexion
--------------------

La connexion Bluetooth peut être perturbée par d'autres appareils Bluetooth voisins tels que des lecteurs de glycémie, des casques, des tablettes ou des appareils de cuisine tels que des fours à micro-ondes ou des plaques vitrocéramique. Dans ce cas, xdrip n'affiche aucune valeur de Gly. Lorsque la connexion bluetooth est rétablie les données sont comblées.

Erreurs de capteur
----------------
Si des erreurs de capteur récurrentes se produisent, essayez de positionner votre capteur ailleurs sur votre corps. Le fil du capteur ne doit pas entrer en contact avec le sang. 

Souvent une "erreur de capteur" peut être corrigée en buvant immédiatement et en massant autour du capteur !

Saut de valeurs
----------------------------------------
Vous pouvez essayer de modifier les paramètres de blocage du bruit dans xdrip (Paramètres - Inter-app settings - Noise Blocking) par ex. "Block Very High noise and worse".  Voir également `Lissage des glycémies <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_.

Negative Sensor Age
-----
.. image:: ../images/Troubleshooting_SensorAge.png
  :alt: Negative sensor age

This occurs if there is either a double "CGM Sensor Insert" entry in careportal or a sensor insert with wrong date. Go to treatments tab > careportal and delete the wrong entry.

