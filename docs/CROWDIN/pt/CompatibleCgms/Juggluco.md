# Definições do Juggluco

Se ainda não estiver configurado, transfira o [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Siga as [instruções](https://www.juggluco.nl/Jugglucohelp/introhelp.html) para ligar o seu sensor.

## Definições básicas para todos os sistemas CGM

### Desativar o envio para o Nightscout

Não deve deixar nenhuma outra app enviar dados (glicose e tratamentos) para o Nightscout.

Desative no Juggluco qualquer envio ativo para o Nightscout.

![Desativar o envio para o Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco para o AAPS

O Juggluco pode enviar a glicose diretamente para o AAPS, o que permite ativar SMB sempre se estiver a usar um [sensor fiável](#GettingStarted-TrustedBGSource).

Com um sensor Libre 2/2+/3/3+, as leituras de minuto a minuto são enviadas para o AAPS, mas não fazem o AAPS calcular minuto a minuto.

Ative xDrip broadcast no Juggluco (não ative Patched Libre), confirme e guarde a informação do pacote do AAPS. Selecione no AAPS a fonte de dados de glicose xDrip.

Aplique uma [suavização](./SmoothingBloodGlucoseData.md) suficiente no AAPS.

![Juggluco para o AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco para o xDrip

O Juggluco pode enviar a glicose para o xDrip, que depois a envia para o AAPS.

Ative Patched Libre no Juggluco (não ative xDrip broadcast), confirme e guarde a informação do pacote dexdrip. Selecione no AAPS a fonte de dados de glicose xDrip.

Se necessário, aplique uma [suavização](./SmoothingBloodGlucoseData.md) suficiente no AAPS. Com um sensor Libre 2/2+/3/3+, o xDrip calcula a média das leituras de minuto a minuto para leituras de 5 minutos e [também as suaviza](#libre2-value-smoothing-raw-values).

![Juggluco para o xDrip](../images/juggluco/Juggluco-xDrip+.png)
