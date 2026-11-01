(Sensitivity-detection-and-COB-sensitivity-detection)=

# Deteção de sensibilidade

## Algoritmo de sensibilidade

O **AAPS** oferece atualmente 3 modelos de deteção de sensibilidade:

* Sensibilidade AAPS
* Média ponderada da Sensibilidade
* Sensibilidade Oref1

### Sensibilidade AAPS

A sensibilidade é calculada da mesma forma que no Oref1, mas pode definir o intervalo de tempo a analisar para trás. A absorção mínima dos hidratos de carbono é calculada a partir do tempo máximo de absorção dos hidratos definido nas preferências.

### Média ponderada da Sensibilidade

A sensibilidade é calculada como uma média ponderada dos desvios. Pode definir o intervalo de tempo a analisar para trás. Os desvios mais recentes têm um peso maior. A absorção mínima dos hidratos de carbono é calculada a partir do tempo máximo de absorção dos hidratos definido nas preferências. Este algoritmo é o mais rápido a acompanhar as alterações da sensibilidade.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilidade Oref1

A sensibilidade é calculada a partir dos dados das últimas 8 horas, ou desde a última mudança de local da bomba, se esta foi há menos de 8 horas. Os hidratos de carbono (se não forem absorvidos) são cortados após o tempo definido nas preferências. Só o algoritmo Oref1 suporta refeições não anunciadas (RNA). Isto significa que os períodos com RNA detetadas são excluídos do cálculo da sensibilidade. Por isso, se usa SMB com RNA, tem de escolher o algoritmo Oref1 para que funcione corretamente. Para mais informações sobre RNA, veja a secção [Super Micro Bólus (SMB)](#Open-APS-features-super-micro-bolus-smb).

O Oref1 é a opção recomendada: é o único que consegue detetar RNA e funcionar com o [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), o algoritmo mais recente.

## Hidratos simultâneos

Há uma diferença importante entre os algoritmos Sensibilidade AAPS e WeightedAverage (média ponderada), por um lado, e o Oref1, por outro, quando várias refeições se sobrepõem.

* O Oref1 espera que apenas uma refeição seja absorvida de cada vez: a absorção da segunda refeição só começa depois de a primeira refeição estar totalmente absorvida.
* Os algoritmos Sensibilidade AAPS e WeightedAverage começam a absorção logo que introduz os hidratos de carbono. Se houver mais do que uma refeição ativa, a absorção mínima dos hidratos ajusta-se de acordo com o tamanho da refeição e o tempo máximo de absorção. Por isso, a absorção mínima será mais alta em comparação com o Oref1.