# Freestyle Libre 1

Para usar o seu Libre como CGM que recebe novos valores de glicose a cada 5 minutos sem precisar escanear o sensor, você precisa comprar uma ponte NFC para Bluetooth (dispositivos à venda, baseados no projeto [LimiTTer](https://github.com/JoernL/LimiTTer), que está obsoleto).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verifique se a ponte e o app que você quer usar são compatíveis com o seu sensor.  
```

Algumas pontes ainda estão à venda:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (versão 1, 2 ou 3), também disponível no AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) de vendedores europeus ([BubbleShop](https://bubbleshop.eu/)) ou, para usuários na Rússia, [aqui](https://vk.com/saharmonitor/). Também disponível no AliExpress.
-   Atom para usuários na Rússia.

## 1. Usando o xDrip

-   O xDrip é compatível com Miaomiao, Bubble, Blucon, Atom e LibreAlarm.
-   Você pode baixar com segurança o [APK mais recente (estável)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), a menos que precise de funções recentes. Nesse caso, use o [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) mais recente.
-   Siga as instruções de configuração na [página de configurações do xDrip](../CompatibleCgms/xDrip.md).
-    Você também precisa do OOP2 para o Libre 1 US (e o Libre 2 EU).
-   Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).

## 2. Usando o Diabox

- O Diabox é o app do fabricante do Bubble.
- Instale o [Diabox](https://t.me/s/DiaboxApp). Em Settings, Integration, ative Share data with other apps (compartilhar dados com outros apps).

![Diabox](../images/Diabox.png)

- Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).
