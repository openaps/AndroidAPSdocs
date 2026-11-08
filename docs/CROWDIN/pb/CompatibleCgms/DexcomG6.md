# Dexcom G6 e ONE

## Primeiro o básico

-   Siga as recomendações gerais de higiene do CGM e de colocação do sensor [aqui](../CompatibleCgms/GeneralCGMRecommendation.md).

## Dicas gerais para usar o loop com G6 e ONE

- Os transmissores recentes se chamam Firefly. Os sensores não podem ser reiniciados sem remover o transmissor, que por sua vez não pode ser redefinido. Eles também não geram dados brutos (raw).

- Se você reinicia sensores, esteja pronto para calibrar e fique atento às variações.

- A pré-imersão (pre-soak) do G6/ONE com calibração de fábrica provavelmente vai causar variações nos resultados. Se você faz pré-imersão (pre-soak), para ter os melhores resultados você provavelmente vai precisar calibrar o sensor.

Leia mais no [artigo](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado por Tim Street em [www.diabettech.com](https://www.diabettech.com).

## Se você usa o G6 ou ONE com o xDrip

- Se ainda não estiver configurado, baixe o [xDrip](https://github.com/NightscoutFoundation/xDrip) e ajuste as configurações dele seguindo a [página de configurações do xDrip](../CompatibleCgms/xDrip.md).
- Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).
- Os transmissores Dexcom G6 e ONE podem ser conectados ao mesmo tempo ao receptor Dexcom (ou, como alternativa, à bomba t:slim) e a um app no seu telefone.
- Ao usar o xDrip como receptor, desinstale primeiro o app da Dexcom. **Você não pode conectar o xDrip e o app da Dexcom ao transmissor ao mesmo tempo!**
- Se você precisa do Clarity e quer aproveitar os alarmes do xDrip, use o [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (somente G6) com transmissão local (local broadcast) para o xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- Com os transmissores atuais, o xDrip sempre usa o [algoritmo nativo](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) do transmissor; não há motivo para desativá-lo. Os [reinícios preventivos](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) só funcionam em transmissores antigos (firmware 1.6.5.25 ou anterior), onde são necessários para evitar que o sensor pare após 10 dias; os transmissores recentes (Firefly) os ignoram. Veja [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) antes de tentar qualquer reinício.
- Tudo o que se refere ao próprio sensor e ao transmissor está documentado na [página Dexcom do xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Se você usa o G6 com o Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
O Dexcom BYODA é agora uma versão muito antiga do app e não pode ser atualizado.
```

-   O [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permite transmissão local (local broadcast) para o AAPS e/ou o xDrip

-   Este app permite usar o seu Dexcom G6 com qualquer smartphone Android.
-   Desinstale o app original da Dexcom ou o app Dexcom modificado, se você usava um deles antes (**não pare** o sensor que está em uso)
-   Instale o apk baixado
-   Digite o código do sensor e o número de série do transmissor no app modificado.
-   Nas configurações do telefone, vá em apps > Dexcom G6 > permissões > permissões adicionais e toque em 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Configurações do AAPS

-   Selecione **BYODA** em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).

-   Se você não receber nenhum valor, selecione qualquer outra fonte de dados e depois selecione **BYODA** de novo para disparar o pedido de permissões que estabelece a conexão entre o AAPS e a transmissão do BYODA.

### Configurações do xDrip

-   Selecione '640G/Eversense' como fonte de dados.
-   O comando 'start sensor' precisa ser executado no xDrip para receber valores. Isso não afeta o seu sensor atual, que é controlado pelo Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. As notificações dele devem continuar visíveis: não silencie nem oculte essas notificações.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuração no AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Depois volte à tela de acesso a notificações e permita o acesso.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Resolução de problemas do G6 e ONE

### Resolução de problemas específica do Dexcom G6/ONE

-   Role para baixo até **Troubleshooting** [aqui](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Resolução de problemas geral

A resolução de problemas geral para CGMs está [aqui](#general-cgm-troubleshooting).

### Novo transmissor com sensor em uso

Se você precisar trocar o transmissor durante uma sessão de sensor em andamento, pode tentar remover o transmissor sem danificar a base do sensor. Há um vídeo [aqui](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Se você escolher [esta solução](https://youtu.be/tx-kTsrkNUM), tenha cuidado para não [danificar os contatos do sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) com a tira.
