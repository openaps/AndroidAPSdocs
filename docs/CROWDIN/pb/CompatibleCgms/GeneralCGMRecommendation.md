# Recomendações gerais para CGM

## Higiene do CGM

Seja qual for o sistema de CGM que você usa, se você for fazer calibração com sangue, há algumas regras muito claras que você deve seguir, quer use um software de CGM DIY ou os apps oficiais.

-   Garanta que as mãos e o kit estejam limpos.
-   Tente calibrar quando houver uma série de pontos com seta reta (normalmente 15–30 minutos são suficientes)
-   Evite calibrar quando os níveis de glicose estão subindo ou descendo.
-   Faça calibrações "suficientes" – nos apps oficiais, você será solicitado a fazer verificações uma ou duas vezes por dia. Em sistemas DIY isso pode não acontecer, e você deve ter cuidado ao continuar sem calibrações.
-   Para sensores que não precisam ou não permitem calibração, verifique a glicemia real (no sangue) pelo menos uma vez por dia. O AAPS será tão seguro quanto as leituras do seu sensor forem confiáveis.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Aplicação do sensor (G6)

Ao aplicar o sensor, é recomendado não apertar o aplicador com muita força, para evitar sangramento. Os contatos do sensor não devem entrar em contato com sangue.

Depois de aplicar o sensor, o transmissor pode ser encaixado no suporte do sensor. Cuidado! Primeiro encaixe o lado quadrado e depois pressione o lado redondo.

(general-cgm-troubleshooting)=
## Resolução de problemas

### Problemas de conexão

A conexão Bluetooth pode ser perturbada por outros dispositivos Bluetooth próximos, como medidores de glicose, fones de ouvido, tablets ou aparelhos de cozinha como fornos de micro-ondas ou cooktops de vitrocerâmica. Neste caso, o xDrip não mostra nenhum valor de BG. Quando a conexão Bluetooth é restabelecida, os dados que faltam são preenchidos (backfill).

### Erros do sensor

Se ocorrerem erros do sensor repetidas vezes, tente escolher outro local do corpo para aplicar o sensor. Os contatos do sensor não devem entrar em contato com sangue.

Muitas vezes um "Sensor Error" pode ser corrigido bebendo água imediatamente e massageando ao redor do sensor!

### Valores instáveis

Você pode tentar mudar as configurações de bloqueio de ruído no xDrip (Settings - Inter-App Settings - Noise Blocking), por exemplo "Block Very High noise and worse". Veja também [Suavização dos dados de glicose](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Idade do sensor negativa

![Idade do sensor na linha Sensor do painel de status expandido](../images/main/main_status_row_expanded.png)

A idade do sensor é mostrada na linha **Sensor** do painel de status na tela principal (toque na seta para expandir). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Abra **Histórico de tratamentos** (menu ☰), selecione a aba **CarePortal** e apague o registro errado.
