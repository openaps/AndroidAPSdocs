# Choix de la pompe

AndroidAPS fonctionne actuellement avec les pompes

* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod Dash](../Configuration/OmnipodDASH.md)
* quelques anciennes [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Si vous devez choisir une pompe pour une mise à niveau ou pour acheter, vous vous demandez souvent laquelle choisir. Les détails des différents distributeurs sont dans [ cette feuille de calcul ](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), veuillez partager les détails des vôtres s'ils ne sont pas déjà répertoriés.

La Combo et l'Insight sont des pompes solides, compatibles avec la boucle fermée. Cependant les avantages de la Dana R/RS/-i comme choix de pompe sont :

* La Dana*R/RS/-i* se connecte à presque n'importe quel téléphone avec Android > = 5.1 sans avoir besoin de flasher le code. Si votre téléphone se casse, vous pouvez trouver facilement n'importe quel téléphone qui fonctionne avec les pompes Dana*R/RS/-i* en remplacement rapide... ce n'est pas aussi facile avec la Combo. (Cela pourrait changer à l'avenir quand Android 8.1 sera plus populaire)

* L'appairement initial est plus simple avec la Dana*RS/-i*. Mais en général, vous ne le faites qu'une seule fois, cela n'a d'impact que si vous voulez tester une nouvelle fonctionnalité avec des pompes différentes.

* Jusqu'à présent, le Combo fonctionne avec l'écran en veille. En général, cela fonctionne bien, mais c'est lent. Pour le bouclage, cela n'a pas d'importance car tout fonctionne en arrière-plan. Vous devez être connecté beaucoup plus de souvent, c'est d'autant plus de risque que la connection Bluetooth échoue, ce qui n'est pas facile si vous vous éloignez de votre téléphone tout en faisant un bolus et en cuisinant.

* La Combo vibre à la fin des DBT, la Dana* R vibre (ou bipe) sur les SMB. La nuit, vous êtes susceptibles de plus utiliser les DBT que les SMB. Le Dana * RS est configurable pour ne pas émettre de bip ni vibrer.

* La lecture de l'historique sur le RS en quelques secondes avec des glucides permet de changer facilement de téléphone en mode hors connexion et de poursuivre la boucle dès que des valeurs de MGC sont lues.

* Insulet Omnipod Eros nécessite un périphérique de communication pod tel que le RileyLink/Orangelink etc. La nouvelle DASH omnipod n'en a pas besoin car elle communique directement avec votre téléphone via Bluetooth.

* Toutes les pompes avec lesquelles AndroidAPS peut parler sont indiquées résistantes à l'eau. Seules les pompes Dana sont également "étanches par garantie" en raison du compartiment de batteries scellées et du système de remplissage du réservoir.

La Combo est bien sûr une très bonne pompe, et utilisable pour la boucle. Elle offre également l’avantage d'avoir un choix parmi beaucoup plus de sets d’infusion, car il est doté d’un verrouillage Luer standard. Et elle a une pile standard que vous pouvez acheter dans n’importe quelle station-service, un magazin ouvert 24/24 et si vous en avez vraiment besoin, vous pouvez "emprunter" la pile la télécommande de votre chambre d’hôtel ;-)