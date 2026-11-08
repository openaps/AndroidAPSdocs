# Dexcom G7, ONE+ e Stelo


## Importante antes de começar

Vale notar que os sistemas G7, ONE+ e Stelo, ao contrário do G6, não suavizam os valores, nem no app, nem no receptor. Mais detalhes sobre isso [aqui](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Leia as sugestões de [Método de suavização](../CompatibleCgms/SmoothingBloodGlucoseData.md) para usar com Dexcom G7/ONE+/Stelo
```

## 1. xDrip (conexão direta com G7, ONE+ ou Stelo)

- O xDrip se conecta ao próprio sensor: desinstale o app da Dexcom, pois só um app pode se conectar ao sensor. Para manter o app da Dexcom, use o [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Siga as instruções aqui: [xDrip G7, ONE+ e Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). É necessária uma versão recente do xDrip — veja a versão mínima na página do link.
- Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).

- Ajuste as configurações do xDrip conforme as explicações da página [Configurações do xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (só G7)

```{admonition} Old app version
:class: warning
O Dexcom BYODA é agora uma versão muito antiga do app e não pode ser atualizado. Não disponível para ONE+ ou Stelo.
```

-   O [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) suporta envio local (broadcast) para o AAPS

-   Este app permite usar o seu Dexcom G7 com qualquer smartphone Android.
-   Desinstale o app original da Dexcom
-   Instale o apk baixado
-   Digite o código do sensor no app modificado
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ e Stelo)

O app oficial da Dexcom continua conectado ao sensor. O xDrip lê os valores de glicose das notificações do app da Dexcom e os envia para o **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Ler as notificações do app da Dexcom

- Mantenha o app da Dexcom instalado e conectado ao sensor. As notificações dele devem continuar visíveis: não silencie nem oculte essas notificações.
- Baixe e instale o [xDrip](https://github.com/NightscoutFoundation/xDrip). Use no xDrip as mesmas unidades de glicose do app da Dexcom.
- No xDrip, vá em **Settings** > **Hardware Data Source** e selecione **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- O xDrip pede permissão para ler as notificações. Toque em **OK**, depois selecione **xDrip** na lista e ative **Permitir acesso a notificações**.

  ![Lista de acesso a notificações](../images/xDrip_Companion_NotificationAccess1.png)

- Se **Permitir acesso a notificações** estiver em cinza (*Controlado por configuração restrita*), o Android bloqueia o acesso porque o xDrip não foi instalado pela Play Store:

  ![Acesso a notificações controlado por configuração restrita](../images/xDrip_Companion_Restricted.png)

  Abra as informações do app xDrip (toque longo no ícone do xDrip > **Informações do app**), toque no menu de três pontos no canto superior direito e selecione **Permitir configurações restritas**. Depois volte à tela de acesso a notificações e permita o acesso.

  ![Informações do app: Permitir configurações restritas](../images/xDrip_Companion_AllowRestricted.png)

  ![Acesso a notificações permitido para o xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- As leituras aparecem no xDrip quando o app da Dexcom mostra um novo valor. Se nada aparecer, talvez seja preciso iniciar um sensor no xDrip: isso não tem efeito no sensor real. Neste modo, o Stelo envia uma leitura a cada 15 minutos.

### Companion Bluetooth (G7)

Quando o app da Dexcom está conectado a um sensor G7, o xDrip também pode escutar por Bluetooth as leituras que o sensor envia ao app da Dexcom. O xDrip não pareia com o sensor e você não precisa digitar o código do sensor: o app da Dexcom continua no controle.

Com o **Companion Bluetooth**, o xDrip recebe do sensor a hora exata e a tendência de cada leitura, em vez da hora em que a notificação apareceu, e preenche lacunas de quando o telefone estava fora de alcance (backfill).

- No xDrip, vá em **Settings** > **Less common settings** > **Bluetooth Settings** e ative **Companion Bluetooth**.

  ![Configurações de Bluetooth do xDrip: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Isso não funciona em todos os telefones e versões do Android. Desative se você notar problemas.
- Se um sensor Dexcom antigo ainda estiver na lista de Bluetooth do telefone, o xDrip pode escutar o sensor errado: no Android, em **Configurações** > **Dispositivos conectados**, esqueça os sensores que você não usa mais.
- O Companion Bluetooth foi feito para o G7. Com ONE+ e Stelo, use as notificações.

### Configuração no AAPS

- Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).
- Ajuste as configurações do xDrip conforme as explicações da página [Configurações do xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 e ONE+)

Necessária a versão 9.0 ou superior

- Desative o app que estava conectado ao sensor antes: desinstale o app ou use "Forçar parada". Desative a permissão "Dispositivos próximos" nas configurações do app. Restrinja o uso da bateria pelo app.

- Esqueça o sensor nas configurações de Bluetooth: nas configurações do Android, encontre o sensor nos dispositivos pareados e selecione "Esquecer". Os nomes dos sensores Dexcom G7 começam com DXCM.

- Evite interferência de outros sensores: mantenha os sensores Dexcom antigos fora do alcance do Bluetooth.

- Conecte o sensor G7 ao Juggluco: abra o Juggluco → menu à esquerda → Photo. Escaneie o data matrix no aplicador do sensor G7. Aguarde até 5 minutos para o Juggluco encontrar o sensor.

- Requisitos para parear: aceite parear o sensor com o Juggluco. Garanta que a tela não esteja bloqueada durante o pareamento. Se o pareamento falhar, aguarde 5 minutos antes de tentar novamente.

- Exceção: relógios Wear OS podem parear sem apertar um botão para aceitar.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

O app oficial da Dexcom continua conectado ao sensor. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G7, ONE+ and Stelo apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to the other methods on this page, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.
- Stelo gives a reading every 15 minutes.

### Set up the Dexcom app

- Mantenha o app da Dexcom instalado e conectado ao sensor.
- Make sure the Dexcom app shows the current glucose value in its notification. As notificações dele devem continuar visíveis: não silencie nem oculte essas notificações.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuração no AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Depois volte à tela de acesso a notificações e permita o acesso.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
