# Freestyle Libre 1

Para usar o seu Libre como CGM que recebe novos valores de glicose a cada 5 minutos sem ter de ler o sensor, precisa de comprar uma ponte NFC para Bluetooth (dispositivos comerciais, baseados no projeto obsoleto [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verifique se a ponte e a app que quer usar são compatíveis com o seu sensor.  
```

Algumas pontes ainda estão disponíveis no mercado:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versão 1, 2 ou 3), também disponível no AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) de vendedores europeus ([BubbleShop](https://bubbleshop.eu/)) ou, para utilizadores russos, [aqui](https://vk.com/saharmonitor/). Também disponível no AliExpress.
-   Atom para utilizadores russos.

## 1. Usar o xDrip

-   O xDrip suporta Miaomiao, Bubble, Blucon, Atom e LibreAlarm.
-   Pode transferir com segurança o [APK mais recente (estável)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), a não ser que precise de funções recentes. Nesse caso, deve usar o [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) mais recente.
-   Siga as instruções de configuração na [página Definições do xDrip](../CompatibleCgms/xDrip.md).
-    Também precisa do OOP2 para o Libre 1 dos EUA (e para o Libre 2 europeu).
-   Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

## 2. Usar o Diabox

- O Diabox é a app do fabricante para o Bubble.
- Instale o [Diabox](https://t.me/s/DiaboxApp). Em «Settings», «Integration», ative «Share data with other apps».

![Diabox](../images/Diabox.png)

- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).
