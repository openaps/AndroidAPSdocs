# Dexcom G6 e ONE

## O básico primeiro

-   Siga as recomendações gerais de higiene do CGM e de colocação do sensor [aqui](../CompatibleCgms/GeneralCGMRecommendation.md).

## Dicas gerais para usar o loop com o G6 e o ONE

- Os transmissores recentes chamam-se Firefly. Os sensores não podem ser reiniciados sem retirar o transmissor, que por sua vez não pode ser reposto; também não geram dados brutos.

- Se reiniciar sensores, esteja pronto para calibrar e vigie a variação.

- A pré-imersão (pre-soak) do G6/ONE com calibração de fábrica pode dar variação nos resultados. Se fizer pré-imersão (pre-soak), para ter os melhores resultados, provavelmente terá de calibrar o sensor.

Leia mais no [artigo](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado por Tim Street em [www.diabettech.com](https://www.diabettech.com).

## Se usar o G6 ou o ONE com o xDrip

- Se ainda não o fez, transfira o [xDrip](https://github.com/NightscoutFoundation/xDrip) e ajuste as suas definições seguindo a [página de definições do xDrip](../CompatibleCgms/xDrip.md).
- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).
- Os transmissores Dexcom G6 e ONE podem estar ligados ao mesmo tempo ao recetor Dexcom (ou, em alternativa, à bomba t:slim) e a uma app no seu telefone.
- Se usar o xDrip como recetor, desinstale primeiro a app Dexcom. **Não pode ligar o xDrip e a app Dexcom ao transmissor ao mesmo tempo!**
- Se precisa do Clarity e quer aproveitar os alarmes do xDrip, use a [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (só G6) com transmissão local para o xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- Com os transmissores atuais, o xDrip usa sempre o [algoritmo nativo](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) do transmissor; não há razão para o desativar. Os [reinícios preventivos](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) só funcionam em transmissores antigos (firmware 1.6.5.25 ou anterior), onde são precisos para evitar que o sensor pare ao fim de 10 dias; os transmissores recentes (Firefly) ignoram-nos. Veja [Reiniciar um sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) antes de tentar qualquer reinício.
- Tudo o que diz respeito ao próprio sensor e transmissor está documentado na [página Dexcom do xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Se usar o G6 com a Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
A Dexcom BYODA é agora uma versão muito antiga da app e não pode ser atualizada.
```

-   A [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) suporta transmissão local para o AAPS e/ou o xDrip

-   Esta app permite usar o seu Dexcom G6 com qualquer smartphone Android.
-   Desinstale a app original da Dexcom ou a app Dexcom modificada, se usou uma delas antes (**não pare** o sensor que está a funcionar)
-   Instale o apk transferido
-   Introduza o código do sensor e o número de série do transmissor na app modificada.
-   Nas definições do telefone, vá a apps > Dexcom G6 > permissions > additional permissions e carregue em 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Definições do AAPS

-   Selecione **BYODA** em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

-   Se não receber valores, selecione outra fonte de dados e depois selecione de novo **BYODA** para que sejam pedidas as permissões que estabelecem a ligação entre o AAPS e a transmissão da BYODA.

### Definições do xDrip

-   Selecione '640G/Eversense' como fonte de dados.
-   O comando 'start sensor' tem de ser executado no xDrip para receber valores. Isto não afeta o sensor atual, controlado pela Build Your Own Dexcom App.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. As notificações da app têm de ficar visíveis: não as silencie nem as oculte.
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

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Depois volte ao ecrã de acesso às notificações e permita o acesso.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Resolução de problemas do G6 e do ONE

### Resolução de problemas específicos do Dexcom G6/ONE

-   Desça até **Troubleshooting** [aqui](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Resolução de problemas geral

A resolução de problemas geral para CGM está [aqui](#general-cgm-troubleshooting).

### Transmissor novo com sensor em funcionamento

Se tiver de mudar o transmissor durante uma sessão de sensor em curso, pode tentar retirar o transmissor sem danificar o suporte do sensor. Pode encontrar um vídeo [aqui](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Se preferir [esta solução](https://youtu.be/tx-kTsrkNUM), tenha cuidado para não [danificar os contactos do sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) com a tira.
