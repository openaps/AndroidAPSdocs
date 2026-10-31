# Smoothing blood glucose data

Se os dados de **BG** estiverem instáveis ou com ruído, o **AAPS** pode dosar insulina de forma errada, o que causa hiperglicemias ou hipoglicemias. Se você observar erros ou dados instáveis no seu CGM, é importante desativar o loop até o problema ser resolvido. Dependendo do seu CGM, esses problemas podem vir da configuração do CGM no **AAPS** (como explicado abaixo) ou de um problema no local do sensor do CGM (que pode exigir a troca do sensor do CGM).

## Smoothing data within AAPS

O **AAPS** oferece a opção de suavizar os dados dentro do **AAPS**, em vez de no aplicativo do CGM. Abra o **menu** (☰), selecione [**Configuração**](../SettingUpAaps/ConfigBuilder.md) e depois **Suavização**. Há quatro opções, e somente uma pode estar ativa por vez: **Sem Suavização**, **Suavização exponencial**, **Suavizar média** e **Filtro de Kalman Unscented**.

![Configuração > Suavização](../images/v4/Configuration/configuration_smoothing.png)

### Exponential smoothing

Em geral, esta é a opção recomendada para começar, porque é a mais agressiva para eliminar o ruído e reescreve o valor mais recente. Porém, veja a tabela abaixo para outras recomendações específicas.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Use esta opção somente se os dados do seu CGM já forem suavizados corretamente pelo seu aplicativo coletor antes de serem enviados ao **AAPS**.

### Filtro de Kalman Unscented (UKF)

Esta opção usa um modelo estatístico para estimar continuamente o seu valor real de glicose e a velocidade de mudança dele a partir das leituras recebidas (que podem ter ruído). Ela se adapta automaticamente ao nível atual de ruído do seu sensor. Ela também detecta e descarta leituras discrepantes repentinas. É uma alternativa mais avançada às opções Suavização exponencial e Suavizar média, útil se você quer que a suavização se ajuste sozinha ao nível de ruído variável do seu sensor, em vez de usar um método fixo.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

Você também pode mudar o método de suavização automaticamente, por exemplo de acordo com a idade do sensor, com a [ação de Automação](#automations-automation-action) **Alterar suavização**.

|               | Exponential |  Average   | No Smoothing |
| ------------- |:-----------:|:----------:|:------------:|
| G5/G6/ONE     |  If noisy   |            | Recommended  |
| G7/ONE+/Stelo |  If noisy   | Se estável |              |

Os sensores Libre têm ruído e podem precisar de suavização. Ao usar a conexão direta do xDrip ou a fonte de dados de aplicativo modificado (recebendo de outro aplicativo, incluindo o Juggluco), [a suavização já é feita dentro do aplicativo](#libre2-value-smoothing-raw-values).

| Sensor / Fonte de dados | Juggluco | xDrip direto | xDrip bridge | xDrip aplicativo modificado |
| ----------------------- |:--------:|:------------:|:------------:|:---------------------------:|
| Libre 1/14 dias/Pro     |   N/A    |     N/A      |   Average    |             N/A             |
| Libre 2/2+ (UE)         | Average  |     None     |   Average    |            None             |
| Libre 2/2+/3/3+         | Average  |     N/A      |     N/A      |            None             |
