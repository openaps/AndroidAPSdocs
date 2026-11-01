# Recomendações Gerais de CGM

## Higiene CGM

Seja qual for o sistema CGM que usa, se for usar calibração com sangue, há algumas regras muito claras que deve seguir, quer use software CGM DIY quer as apps oficiais.

-   Garanta que as mãos e o material estão limpos.
-   Tente calibrar quando tiver uma série de pontos com uma seta plana (15–30 minutos costumam ser suficientes)
-   Evite calibrar quando os níveis de glicose estão a subir ou a descer.
-   Faça calibrações «suficientes» – nas apps oficiais, será pedido para verificar uma ou duas vezes por dia. Nos sistemas DIY pode não ser pedido, e deve ter cuidado ao continuar sem calibrações.
-   Com sensores que não precisam de calibração ou não a permitem, verifique pelo menos uma vez por dia a glicose real no sangue. O AAPS só é tão seguro quanto as leituras do seu sensor são fiáveis.
-   Se possível, calibre com algumas leituras numa faixa mais baixa (4–5 mmol/l ou 72–90 mg/dl) e algumas num nível um pouco mais alto (7–9 mmol/l ou 126–160 mg/dl), porque isto dá uma faixa melhor para a calibração do ponto/declive.

## Colocar o sensor (G6)

Ao colocar o sensor, recomenda-se não premir o aplicador com demasiada força, para evitar sangramento. Os contactos do sensor não devem entrar em contacto com sangue.

Depois de colocar o sensor, o transmissor pode ser encaixado no suporte do sensor. Atenção! Primeiro encaixe o lado quadrado e depois pressione o lado redondo.

(general-cgm-troubleshooting)=
## Resolução de Problemas

### Problemas de ligação

A ligação Bluetooth pode ser perturbada por outros dispositivos Bluetooth próximos, como medidores de glicose, auscultadores, tablets ou aparelhos de cozinha como micro-ondas ou placas vitrocerâmicas. Neste caso, o xDrip não mostra nenhum valor de glicose. Quando a ligação Bluetooth for restabelecida, os dados em falta são preenchidos (backfill).

### Erros do sensor

Se ocorrerem erros do sensor repetidos, experimente colocar o sensor num local diferente do corpo. Os contactos do sensor não devem entrar em contacto com sangue.

Muitas vezes um «Sensor Error» pode ser corrigido bebendo de imediato e massajando à volta do sensor!

### Valores com saltos

Pode tentar alterar as definições de bloqueio de ruído no xDrip (Settings - Inter-App Settings - Noise Blocking), por exemplo «Block Very High noise and worse». Veja também [Suavizar os dados da glicose](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Idade do sensor negativa

![Idade do sensor na linha Sensor do painel de estado expandido](../images/main/main_status_row_expanded.png)

A idade do sensor é mostrada na linha **Sensor** do painel de estado no ecrã principal (toque na seta para o expandir). Uma idade negativa ocorre se houver uma entrada [Careportal](#aaps-screens-careportal) «Inserção do sensor» em duplicado ou uma inserção de sensor com a data errada. Abra o **Histórico de tratamentos** (menu ☰), selecione o separador **Careportal** e apague a entrada errada.
