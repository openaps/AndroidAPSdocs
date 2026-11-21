# Suavizar os dados da glicose

Se os dados da **glicose** forem instáveis ou tiverem ruído, o **AAPS** pode administrar insulina de forma errada, o que leva a hiperglicemias ou hipoglicemias. Se vir erros ou dados instáveis no seu CGM, é importante desativar o loop até o problema estar resolvido. Conforme o seu CGM, estes problemas podem vir da configuração do CGM no **AAPS** (ver mais abaixo) ou de um problema no local do sensor CGM (que pode exigir a troca do sensor).

## Suavizar os dados no AAPS

O **AAPS** permite suavizar os dados dentro do **AAPS**, em vez de na app do CGM. Abra o **menu** (☰), selecione [**Configuração**](../SettingUpAaps/ConfigBuilder.md) e depois **Suavização**. Há quatro opções e só uma pode estar ativa de cada vez: **Sem suavização**, **Suavização exponencial**, **Suavização por média** e **Unscented Kalman Filter**.

![Configuração > Suavização](../images/v4/Configuration/configuration_smoothing.png)

### Suavização exponencial

Em geral, esta é a opção recomendada para começar, porque é a mais agressiva a eliminar o ruído e reescreve o valor mais recente. No entanto, veja na tabela abaixo outras recomendações específicas.

### Suavização por média

Esta opção funciona de forma parecida com a suavização retroativa (back smoothing) que existia antes em algumas plataformas de CGM. Reage mais às mudanças recentes do valor da glicose e, por isso, tem mais tendência para reagir de forma errada a dados de CGM com ruído.

### Sem suavização

Use esta opção apenas se os dados do seu CGM já forem bem suavizados pela app coletora antes de serem enviados para o **AAPS**.

### Unscented Kalman Filter (UKF)

Esta opção usa um modelo estatístico para estimar continuamente o seu valor real de glicose e a sua taxa de variação a partir das leituras recebidas (que podem ter ruído). Adapta-se automaticamente ao nível de ruído atual do seu sensor. Também deteta e rejeita leituras isoladas que mudam de repente (valores atípicos). É uma alternativa mais avançada à suavização exponencial e por média. É útil se quiser que a suavização se ajuste sozinha ao nível de ruído do sensor, que vai mudando, em vez de usar um método fixo.

(smoothing-xdrip-dexcom-g6)=

## Sugestões para usar a suavização

Também pode mudar o método de suavização automaticamente, por exemplo conforme a idade do sensor, com a [ação de Automatização](#automations-automation-action) **Alterar suavização**.

|               |  Exponencial   |  Average   | Sem suavização |
| ------------- |:--------------:|:----------:|:--------------:|
| G5/G6/ONE     | Se tiver ruído |            |  Recomendado   |
| G7/ONE+/Stelo | Se tiver ruído | Se estável |                |

Os sensores Libre têm ruído e podem precisar de suavização. Ao usar a ligação direta do xDrip ou a fonte de dados de app modificada (que recebe de outra app, incluindo o Juggluco), a [suavização já é feita dentro da app](#libre2-value-smoothing-raw-values).

| Sensor / Fonte de dados | Juggluco | xDrip direto | xDrip bridge | xDrip app modificada |
| ----------------------- |:--------:|:------------:|:------------:|:--------------------:|
| Libre 1/14 dias/Pro     |   N/D    |     N/D      |   Average    |         N/D          |
| Libre 2/2+ (UE)         | Average  |     None     |   Average    |         None         |
| Libre 2/2+/3/3+         | Average  |     N/D      |     N/D      |         None         |
