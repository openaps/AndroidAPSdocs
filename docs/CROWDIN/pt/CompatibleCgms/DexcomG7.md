# Dexcom G7, ONE+ e Stelo


## Fundamental antes de começar

É de notar que os sistemas G7, ONE+ e Stelo, ao contrário do G6, não suavizam os valores, nem na app nem no recetor. Mais detalhes sobre isto [aqui](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Leia as sugestões em [Suavizar os dados da glicose](../CompatibleCgms/SmoothingBloodGlucoseData.md) sobre o método a usar com Dexcom G7/ONE+/Stelo
```

## 1. xDrip (ligação direta ao G7, ONE+ ou Stelo)

- O próprio xDrip liga-se ao sensor: desinstale a app da Dexcom, porque só uma app pode estar ligada ao sensor. Para manter a app da Dexcom, use antes a [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Siga as instruções aqui: [xDrip G7, ONE+ e Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). É necessária uma versão recente do xDrip — veja a versão mínima na página indicada.
- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

- Ajuste as definições do xDrip de acordo com as explicações da página [Definições do xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (só G7)

```{admonition} Old app version
:class: warning
A Dexcom BYODA é agora uma versão muito antiga da app e não pode ser atualizada. Não está disponível para ONE+ nem Stelo.
```

-   A [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) suporta o envio local (broadcast) para o AAPS

-   Esta app permite usar o seu Dexcom G7 com qualquer smartphone Android.
-   Desinstale a app original da Dexcom
-   Instale o apk transferido
-   Introduza o código do sensor na app modificada (patched)
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ e Stelo)

A app oficial da Dexcom continua ligada ao sensor. O xDrip lê os valores de glicose das notificações da app da Dexcom e envia-os para o **AAPS**.

```{admonition} Not a trusted data source
:class: note
O **AAPS** não considera o xDrip no modo Companion App uma [fonte de dados de glicose fiável](#GettingStarted-TrustedBGSource): os SMB não são permitidos em todas as situações.
```

### Ler as notificações da app da Dexcom

- Mantenha a app da Dexcom instalada e ligada ao sensor. As notificações da app têm de ficar visíveis: não as silencie nem as oculte.
- Transfira e instale o [xDrip](https://github.com/NightscoutFoundation/xDrip). Use no xDrip as mesmas unidades de glicose que na app da Dexcom.
- No xDrip, vá a **Settings** > **Hardware Data Source** e selecione **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- O xDrip pede permissão para ler as notificações. Toque em **OK**, depois selecione **xDrip** na lista e ative **Permitir acesso às notificações**.

  ![Lista de acesso às notificações](../images/xDrip_Companion_NotificationAccess1.png)

- Se **Permitir acesso às notificações** estiver a cinzento (*Controlado por uma definição restrita*), o Android bloqueia-o porque o xDrip não foi instalado a partir da Play Store:

  ![Acesso às notificações controlado por uma definição restrita](../images/xDrip_Companion_Restricted.png)

  Abra as informações da app xDrip (toque longo no ícone do xDrip > **Informações da app**), toque no menu de três pontos no canto superior direito e selecione **Permitir definições restritas**. Depois volte ao ecrã de acesso às notificações e permita o acesso.

  ![Informações da app: Permitir definições restritas](../images/xDrip_Companion_AllowRestricted.png)

  ![Acesso às notificações permitido para o xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- As leituras aparecem no xDrip quando a app da Dexcom mostra um valor novo. Se nada aparecer, pode ser preciso iniciar um sensor no xDrip: isto não tem efeito no sensor real. Neste modo, o Stelo dá uma leitura a cada 15 minutos.

### Companion Bluetooth (G7)

Quando a app da Dexcom está ligada a um sensor G7, o xDrip também pode ouvir por Bluetooth as leituras que o sensor envia para a app da Dexcom. O xDrip não emparelha com o sensor e não precisa de introduzir o código do sensor: a app da Dexcom continua a controlar o sensor.

Com **Companion Bluetooth**, o xDrip recebe do sensor a hora exata e a tendência de cada leitura, em vez da hora em que a notificação apareceu, e preenche as falhas de quando o telefone esteve fora de alcance (backfill).

- No xDrip, vá a **Settings** > **Less common settings** > **Bluetooth Settings** e ative **Companion Bluetooth**.

  ![Definições de Bluetooth do xDrip: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Isto não funciona em todos os telefones e versões do Android. Desative-o se notar problemas.
- Se um sensor Dexcom antigo ainda estiver na lista de Bluetooth do telefone, o xDrip pode ouvir o sensor errado: nas **Definições** do Android > **Dispositivos ligados**, esqueça os sensores que já não usa.
- O Companion Bluetooth foi feito para o G7. Com ONE+ e Stelo, use as notificações.

### Configuração no AAPS

- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).
- Ajuste as definições do xDrip de acordo com as explicações da página [Definições do xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 e ONE+)

É necessária a versão 9.0 ou superior

- Desative a app que estava ligada ao sensor antes: desinstale a app ou use «Forçar paragem». Desative a permissão «Dispositivos próximos» nas definições da app. Restrinja o uso da bateria da app.

- Esqueça o sensor nas definições de Bluetooth: nas definições do Android, encontre o sensor nos dispositivos associados e selecione «Esquecer». Os nomes dos sensores Dexcom G7 começam por DXCM.

- Evite interferências de outros sensores: mantenha os sensores Dexcom antigos fora do alcance do Bluetooth.

- Ligue o sensor G7 ao Juggluco: abra o Juggluco → menu à esquerda → Photo. Leia o código Data Matrix no aplicador do sensor G7. Aguarde até 5 minutos até o Juggluco encontrar o sensor.

- Requisitos para o emparelhamento: aceite emparelhar o sensor com o Juggluco. Garanta que o ecrã não está bloqueado durante o emparelhamento. Se o emparelhamento falhar, aguarde 5 minutos antes de tentar de novo.

- Exceção: os relógios Wear OS podem associar-se sem premir um botão de aceitar.
