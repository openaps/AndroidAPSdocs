# Freestyle Libre 1

Per fer servir el vostre Libre com un CGM que rep valors nous de glucèmia cada 5 minuts sense haver d'escanejar el sensor, heu de comprar un pont NFC a Bluetooth (dispositius comercials, basats en el projecte obsolet [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Comproveu que el pont i l'aplicació que voleu fer servir són compatibles amb el vostre sensor.  
```

Encara hi ha alguns ponts al mercat:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versió 1, 2 o 3), també disponible a AliExpress.
-   Bubble / Mini / Nano from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). També disponible a AliExpress.
-   Atom per a usuaris de Rússia.

## 1. Ús de xDrip

-   xDrip supports Miaomiao, Blucon, Atom and LibreAlarm.
-   Podeu descarregar sense problemes l'[últim APK (estable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), tret que necessiteu funcions recents; en aquest cas, feu servir l'últim [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Seguiu les instruccions de configuració de la pàgina [Configuració de xDrip](../CompatibleCgms/xDrip.md).
-    També necessiteu OOP2 per al Libre 1 dels EUA (i per al Libre 2 europeu).
-   Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).

(libre1-diabox)=
## 2. Ús de Diabox

- Diabox és l'aplicació del fabricant de Bubble.
- Instal·leu [Diabox](https://t.me/s/DiaboxApp). A «Settings», «Integration», activeu «Share data with other apps».

![Diabox](../images/Diabox.png)

- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).
