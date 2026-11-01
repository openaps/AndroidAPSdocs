# Freestyle Libre 2 e 2+

O sensor Freestyle Libre 2 é agora um verdadeiro CGM, mesmo com a app oficial. Mesmo assim, o LibreLink não consegue enviar dados para o AAPS. Há várias soluções para o usar com o AAPS.

## 1. Usar uma ponte Bluetooth e OOP

Os transmissores Bluetooth podem ser usados com o Libre 2 (EU) ou 2+ (EU) e uma app com algoritmo fora do processo (OOP, out of process). Pode receber valores de glicose a cada 5 minutos, como com o [Libre 1](./Libre1.md).

Verifique se a ponte e a app que quer usar são compatíveis com o seu sensor e com o xDrip.

O Libre2 OOP (encontra-o [aqui](#Libre2_OOP2)) cria as mesmas leituras de glicose que o leitor original. O AAPS com o Libre 2 faz uma suavização de 10 a 25 minutos para evitar certos saltos. Veja abaixo [Suavização dos valores e valores brutos](#libre2-value-smoothing-raw-values). O OOP gera leituras a cada 5 minutos com a média dos últimos 5 minutos. Por isso, as leituras de glicose não são tão suaves, mas correspondem ao leitor original e seguem mais depressa os valores de glicose "reais". Se quiser usar o loop com OOP, ative todas as definições de suavização no xDrip.

Há boas razões para usar um transmissor Bluetooth:

-   Pode escolher várias estratégias de calibração do OOP2 (1): obter os valores do leitor com "no calibration", calibrar o sensor como um Libre 1 com "calibrate based on raw" ou, por fim, calibrar os valores semelhantes aos do leitor com "calibrate based on glucose".  
  Deixe o OOP1 desativado (2).

    → Menu hambúrguer → Settings → Less common settings → Other misc. options

![Calibração do OOP2](../images/Libre2_OOP2Calibration.png)

-   O sensor Libre 2 pode ser usado 14,5 dias, como o Libre 1
-   O preenchimento (backfill) de 8 horas é totalmente suportado

Nota: o transmissor pode ser usado ao mesmo tempo que a app LibreLink, sem interferir com ela.

### Start sensor

- → Menu hambúrguer (1) → Start sensor (2) → Start sensor (3) → Responda "Not Today" (4).

![xDrip: Start Libre Transmitter e sensor 3](../images/xDrip_Libre_Transmitter03.png)

Isto não inicia fisicamente nenhum sensor Libre2 nem interage com ele de forma nenhuma. Isto serve apenas para indicar ao xDrip que um novo sensor está a enviar valores de glicose. Se possível, introduza dois valores medidos no sangue para a calibração inicial. Agora os valores de glicose devem aparecer no xDrip a cada 5 minutos. Os valores em falta, por exemplo porque estava demasiado longe do telefone, não serão preenchidos depois (backfill).

Após uma mudança de sensor, o xDrip deteta automaticamente o novo sensor e apaga todos os dados de calibração. Pode verificar a sua glicose após a ativação e fazer uma nova calibração inicial.

### Configurar o AAPS (apenas para o loop)

-   No **AAPS**, abra o **menu** (☰) no canto superior esquerdo, vá a **Configuração** > **Fonte da Glicose** e selecione **xDrip+**

![Configuração > Fonte da Glicose com xDrip+ selecionado](../images/v4/Configuration/configuration_bg_source.png)

-   Se o AAPS não receber valores de glicose quando o telefone está em modo de voo, use 'Identify receiver' como descrito na [página Definições do xDrip](#xdrip-identify-receiver).

## 2. Usar a ligação direta do xDrip

```{admonition} Libre 2 EU only
:class: warning
O xDrip não suporta a ligação direta ao Libre 2 dos EUA e da Austrália.
Apenas modelos Libre 2 e 2+ **EU** (europeus).
```

- Siga [estas instruções](./Libre2MinimalL00per.md) para configurar o xDrip, porque a documentação original aponta para uma versão obsoleta do OOP2.
- Siga as instruções de configuração na [página Definições do xDrip](../CompatibleCgms/xDrip.md).

-   Selecione xDrip+ em [Configuração > Fonte da Glicose](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Suavização dos valores e valores brutos

Tecnicamente, o valor atual da glicose é enviado para o xDrip a cada minuto. Um filtro de média ponderada calcula, por omissão, um valor suavizado dos últimos 25 minutos. Pode mudar o período no menu NFC Scan features.

→ Menu hambúrguer → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![Definições avançadas do xDrip para o Libre 2 e valores brutos](../images/xDrip_Libre3_Smooth.png)

Isto é obrigatório para usar o loop. As curvas ficam suaves e os resultados do loop são ótimos. Os valores brutos em que os alarmes se baseiam oscilam um pouco mais, mas correspondem aos valores que o leitor também mostra. Além disso, os valores brutos podem ser mostrados no gráfico do xDrip, para poder reagir a tempo a mudanças rápidas. Ative Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" e "show Sensors Infos". Depois, os valores brutos são também mostrados como pequenos pontos brancos e há mais informação do sensor no menu do sistema.

Os valores brutos são muito úteis quando a glicose está a mudar depressa. Mesmo que os pontos saltem mais, vê a tendência muito melhor do que com a linha suavizada, para tomar decisões de terapia corretas.

→ Menu hambúrguer → Settings → Less common settings → Advanced settings for Libre 2

![Definições avançadas do xDrip para o Libre 2 e valores brutos](../images/Libre2_RawValues.png)



#### Calibração

Pode calibrar o Libre2 **com um desvio de -40 mg/dl a +20 mg/dl \[-2,2 mmol/l a +1,1 mmol/l\]** (intercept). O declive (slope) não pode ser alterado. Depois de colocar um sensor novo, verifique com uma picada no dedo. Lembre-se de que pode não ser exato nas primeiras 12 horas após a inserção. Como pode haver grandes diferenças em relação às medições no sangue, verifique a cada 24 horas e calibre se for preciso. Se o sensor estiver completamente errado após alguns dias, deve então ser substituído.

## 3. Usar o Diabox

- Instale o [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). Em «Settings», «Integration», ative «Share data with other apps».

![Diabox](../images/Diabox.png)

- Selecione xDrip+ em [Configuração > Fonte da Glicose](#Config-Builder-bg-source).

## 4. Usar o Juggluco

Veja [aqui](./Juggluco.md).
