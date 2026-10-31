# Configurações do Juggluco

Se ainda não estiver configurado, baixe o [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Siga as [instruções](https://www.juggluco.nl/Jugglucohelp/introhelp.html) para conectar o seu sensor.

## Configurações básicas para todos os sistemas de CGM

### Desativar o envio para o Nightscout

Você não deve deixar nenhum outro app enviar dados (glicose e tratamentos) para o Nightscout.

Desative no Juggluco qualquer envio ativo para o Nightscout.

![Desativar o envio para o Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco para o AAPS

O Juggluco pode enviar a glicose diretamente para o AAPS, o que permite SMBs sempre se você usa um [sensor confiável](#GettingStarted-TrustedBGSource).

Com um sensor Libre 2/2+/3/3+, as leituras de cada minuto são enviadas ao AAPS, mas não fazem o AAPS calcular a cada minuto.

Ative xDrip broadcast no Juggluco (não ative Patched Libre), confirme e salve as informações do pacote do AAPS. Selecione a fonte de dados de BG xDrip no AAPS.

Aplique [suavização](./SmoothingBloodGlucoseData.md) suficiente no AAPS.

![Juggluco para o AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco para o xDrip

O Juggluco pode enviar a glicose para o xDrip, que depois a envia para o AAPS.

Ative Patched Libre no Juggluco (não ative xDrip broadcast), confirme e salve as informações do pacote dexdrip. Selecione a fonte de dados de BG xDrip no AAPS.

Se necessário, aplique [suavização](./SmoothingBloodGlucoseData.md) suficiente no AAPS. Com um sensor Libre 2/2+/3/3+, o xDrip faz a média das leituras de cada minuto em leituras de 5 minutos e [também as suaviza](#libre2-value-smoothing-raw-values).

![Juggluco para o xDrip](../images/juggluco/Juggluco-xDrip+.png)
