(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detecção de sensibilidade

## Algoritmo de sensibilidade

O **AAPS** oferece atualmente 3 modelos de detecção de sensibilidade:

* Sensibilidade AAPS
* Média ponderada da Sensibilidade
* Sensibilidade Oref1

### Sensibilidade AAPS

A sensibilidade é calculada do mesmo jeito que no Oref1, mas você pode definir o período de tempo analisado para trás. A absorção mínima de carboidratos é calculada a partir do tempo máximo de absorção de carboidratos definido nas preferências.

### Média ponderada da Sensibilidade

A sensibilidade é calculada como uma média ponderada dos desvios. Você pode definir o período de tempo analisado para trás. Os desvios mais recentes têm um peso maior. A absorção mínima de carboidratos é calculada a partir do tempo máximo de absorção de carboidratos definido nas preferências. Este algoritmo é o mais rápido em acompanhar as mudanças de sensibilidade.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilidade Oref1

A sensibilidade é calculada a partir das últimas 8 horas de dados, ou a partir da última troca de cânula, se ela foi há menos de 8 horas. Os carboidratos (se não forem absorvidos) são cortados depois do tempo definido nas preferências. Apenas o algoritmo Oref1 é compatível com refeições não anunciadas (UAM). Isso significa que os períodos com UAM detectado ficam fora do cálculo da sensibilidade. Então, se você usa o SMB com UAM, precisa escolher o algoritmo Oref1 para que ele funcione corretamente. Para mais informações sobre UAM, veja a seção [Super Micro Bólus (SMB)](#Open-APS-features-super-micro-bolus-smb).

O Oref1 é a opção recomendada: ele é o único que consegue detectar UAM e funcionar com o [SMB OpenAPS](#Open-APS-features-super-micro-bolus-smb), o algoritmo mais recente.

## Carboidratos simultâneos

Há uma diferença importante entre os algoritmos Sensibilidade AAPS e WeightedAverage, de um lado, e o Oref1, do outro, quando várias refeições se sobrepõem.

* O Oref1 espera que apenas uma refeição seja absorvida por vez: a segunda refeição começa a ser absorvida depois que a primeira foi absorvida por completo.
* Sensibilidade AAPS e WeightedAverage começam a absorção logo que você registra os carboidratos. Se houver mais de uma refeição ativa, a absorção mínima de carboidratos se ajusta conforme o tamanho da refeição e o tempo máximo de absorção. Por isso, a absorção mínima será maior em comparação com o Oref1.