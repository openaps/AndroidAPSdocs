# Freestyle Libre 1

Pour utiliser votre Libre comme un MGC qui reçoit une nouvelle glycémie toutes les 5 minutes sans devoir scanner le capteur, vous devez acheter un pont NFC vers Bluetooth (appareils vendus dans le commerce, basés sur l'ancien projet [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Vérifiez que le pont et l'application que vous voulez utiliser sont compatibles avec votre capteur.  
```

Certains ponts sont encore disponibles sur le marché :

-   [Lecteur MiaoMiao](https://www.miaomiao.cool/) (version 1, 2 ou 3), aussi disponible sur AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) chez des vendeurs européens ([BubbleShop](https://bubbleshop.eu/)) ou, pour les utilisateurs russes, [ici](https://vk.com/saharmonitor/). Aussi disponible sur AliExpress.
-   Atom pour les utilisateurs russes.

## 1. Utiliser xDrip

-   xDrip prend en charge Miaomiao, Bubble, Blucon, Atom et LibreAlarm.
-   Vous pouvez télécharger sans risque la [dernière APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), sauf si vous avez besoin de fonctions récentes. Dans ce cas, utilisez la dernière [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Suivez les instructions de configuration sur la [page des paramètres xDrip](../CompatibleCgms/xDrip.md).
-    Vous avez aussi besoin de OOP2 pour le Libre 1 US (et le Libre 2 EU).
-   Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

## 2. Utiliser Diabox

- Diabox est l'application du fabricant de Bubble.
- Installez [Diabox](https://t.me/s/DiaboxApp). Dans Diabox, allez dans Settings, Integration (Paramètres, Intégration) et activez Share data with other apps (partager les données avec d'autres applications).

![Diabox](../images/Diabox.png)

- Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).
