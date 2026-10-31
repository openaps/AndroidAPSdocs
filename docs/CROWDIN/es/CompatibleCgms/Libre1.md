# Freestyle Libre 1

Para usar tu Libre como MCG que recibe nuevos valores de glucosa cada 5 minutos sin tener que escanear el sensor, necesitas comprar un puente de NFC a Bluetooth (dispositivos que se venden en tiendas, basados en el proyecto obsoleto [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Comprueba que el puente y la app que quieres usar son compatibles con tu sensor.  
```

Algunos puentes todavía se venden:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versión 1, 2 o 3), también disponible en AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) de vendedores europeos ([BubbleShop](https://bubbleshop.eu/)) o, para usuarios de Rusia, [aquí](https://vk.com/saharmonitor/). También disponible en AliExpress.
-   Atom para usuarios de Rusia.

## 1. Usar xDrip

-   xDrip es compatible con Miaomiao, Bubble, Blucon, Atom y LibreAlarm.
-   Puedes descargar sin riesgo el [último APK (estable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), salvo que necesites funciones recientes. En ese caso, usa la última [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Sigue las instrucciones de configuración de la [página de ajustes de xDrip](../CompatibleCgms/xDrip.md).
-    También necesitas OOP2 para Libre 1 US (y Libre 2 EU).
-   Selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).

## 2. Usar Diabox

- Diabox es la app del fabricante para Bubble.
- Instala [Diabox](https://t.me/s/DiaboxApp). En Settings, Integration, activa Share data with other apps (ajustes de Diabox: compartir datos con otras apps).

![Diabox](../images/Diabox.png)

- Selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).
