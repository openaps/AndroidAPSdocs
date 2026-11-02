# Freestyle Libre 2 e 2+

O sensor Freestyle Libre 2 agora é um CGM de verdade, mesmo com o app oficial. Mesmo assim, o LibreLink não pode enviar dados para o AAPS. Há várias soluções para usá-lo com o AAPS.

## 1. Usar uma ponte Bluetooth e o OOP

Transmissores Bluetooth podem ser usados com o Libre 2 (EU) ou 2+ (EU) e um app com algoritmo fora do processo (OOP, out of process). Você pode receber leituras de glicose a cada 5 minutos, como com o [Libre 1](./Libre1.md).

Verifique se a ponte e o app que você quer usar são compatíveis com o seu sensor e com o xDrip.

O OOP do Libre2 (veja [aqui](#Libre2_OOP2)) gera as mesmas leituras de glicose que o leitor original. O AAPS com o Libre 2 faz uma suavização de 10 a 25 minutos para evitar alguns saltos. Veja abaixo [Suavização de valores e valores brutos](#libre2-value-smoothing-raw-values). O OOP gera leituras a cada 5 minutos com a média dos últimos 5 minutos. Por isso, as leituras de glicose não são tão suaves, mas correspondem ao leitor original e seguem mais rápido as leituras de glicose "reais". Se você tentar usar o loop com o OOP, ative todas as configurações de suavização no xDrip.

Há alguns bons motivos para usar um transmissor Bluetooth:

-   Você pode escolher várias estratégias de calibração do OOP2 (1): ter os valores do leitor com "no calibration", calibrar o sensor como um Libre 1 com "calibrate based on raw" ou, por fim, calibrar os valores parecidos com os do leitor com "calibrate based on glucose".  
  Deixe o OOP1 desativado (2).

    → Menu hambúrguer → Settings → Less common settings → Other misc. options

![Calibração do OOP2](../images/Libre2_OOP2Calibration.png)

-   O sensor Libre 2 pode ser usado por 14,5 dias, como o Libre 1
-   O preenchimento de 8 horas de dados (backfill) é totalmente suportado

Observação: o transmissor pode ser usado junto com o app LibreLink sem interferir nele.

### Start sensor

- → Menu hambúrguer (1) → Start sensor (2) → Start sensor (3) → Responda "Not Today" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Isto não inicia fisicamente nenhum sensor Libre2 e não interage com ele de nenhuma forma. Isto serve apenas para avisar o xDrip de que um novo sensor está enviando valores de glicose. Se disponível, insira dois valores medidos no sangue para a calibração inicial. Agora os valores de glicose devem aparecer no xDrip a cada 5 minutos. Valores perdidos, por exemplo porque você estava longe demais do seu telefone, não serão preenchidos depois (backfill).

Depois de uma troca de sensor, o xDrip detecta o novo sensor automaticamente e apaga todos os dados de calibração. Você pode verificar sua glicose depois da ativação e fazer uma nova calibração inicial.

### Configurar o AAPS (somente para o loop)

-   No **AAPS**, abra o **menu** (☰) no canto superior esquerdo, vá em **Configuração** > **Fonte de BG** e selecione **xDrip+**

![Configuração > Fonte de BG com xDrip+ selecionado](../images/v4/Configuration/configuration_bg_source.png)

-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as described on [xDrip settings page](#xdrip-identify-receiver).

## 2. Usar a conexão direta do xDrip

```{admonition} Libre 2 EU only
:class: warning
O xDrip não suporta conexão direta com o Libre 2 US e AUS.
Somente os modelos Libre 2 e 2+ **EU**.
```

- Siga [estas instruções](./Libre2MinimalL00per.md) para configurar o xDrip, porque a documentação original aponta para uma versão obsoleta do OOP2.
- Siga as instruções de configuração na [página de configurações do xDrip](../CompatibleCgms/xDrip.md).

-   Selecione xDrip+ em [Configuração > Fonte de BG](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Suavização de valores e valores brutos

Tecnicamente, o valor atual de glicose é enviado ao xDrip a cada minuto. Por padrão, um filtro de média ponderada calcula um valor suavizado dos últimos 25 minutos. Você pode mudar o período no menu NFC Scan features.

→ Menu hambúrguer → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)

Isto é obrigatório para usar o loop. As curvas ficam suaves e os resultados do loop são ótimos. Os valores brutos, nos quais os alarmes se baseiam, oscilam um pouco mais, mas correspondem aos valores que o leitor também mostra. Além disso, os valores brutos podem ser mostrados no gráfico do xDrip para que você possa reagir a tempo a mudanças rápidas. Ative Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" e "show Sensors Infos". Então os valores brutos também são mostrados como pequenos pontos brancos, e mais informações do sensor ficam disponíveis no menu do sistema.

Os valores brutos ajudam muito quando a glicose muda rapidamente. Even if the dots are jumpier you would detect the tendency much better than using the smoothed line to make proper therapy decisions.

→ Menu hambúrguer → Settings → Less common settings → Advanced settings for Libre 2

![xDrip advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)



#### Calibração

You can calibrate the Libre2 **with an offset of -40 mg/dL to +20 mg/dL \[-2.2 mmol/L to +1.1 mmol/L\]** (intercept). A inclinação (slope) não pode ser alterada. Verifique com uma medição na ponta do dedo depois de colocar um novo sensor. Lembre-se de que ele pode não ser preciso nas primeiras 12 horas após a inserção. Como pode haver grandes diferenças em relação às medições no sangue, verifique a cada 24 horas e calibre se necessário. Se o sensor estiver totalmente errado depois de alguns dias, ele deve ser substituído.

## 3. Usar o Diabox

- Instale o [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). Em Settings, Integration, ative Share data with other apps (compartilhar dados com outros apps).

![Diabox](../images/Diabox.png)

- Selecione xDrip+ em [Configuração > Fonte de BG](#Config-Builder-bg-source).

## 4. Usar o Juggluco

Veja [aqui](./Juggluco.md).
