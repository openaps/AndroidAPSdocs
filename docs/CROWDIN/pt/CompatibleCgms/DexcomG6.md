# Dexcom G6 e ONE

## O básico primeiro

-   Siga as recomendações gerais de higiene do CGM e de colocação do sensor [aqui](../CompatibleCgms/GeneralCGMRecommendation.md).

## Dicas gerais para usar o loop com o G6 e o ONE

- Os transmissores recentes chamam-se Firefly. Os sensores não podem ser reiniciados sem retirar o transmissor, que por sua vez não pode ser reposto; também não geram dados brutos.

- Se reiniciar sensores, esteja pronto para calibrar e vigie a variação.

- A pré-imersão (pre-soak) do G6/ONE com calibração de fábrica pode dar variação nos resultados. Se fizer pré-imersão (pre-soak), para ter os melhores resultados, provavelmente terá de calibrar o sensor.

Leia mais no [artigo](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado por Tim Street em [www.diabettech.com](https://www.diabettech.com).

## Se usar o G6 ou o ONE com o xDrip

- Se ainda não o fez, transfira o [xDrip](https://github.com/NightscoutFoundation/xDrip) e ajuste as suas definições seguindo a [página de definições do xDrip](../CompatibleCgms/xDrip.md).
- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).
- Os transmissores Dexcom G6 e ONE podem estar ligados ao mesmo tempo ao recetor Dexcom (ou, em alternativa, à bomba t:slim) e a uma app no seu telefone.
- Se usar o xDrip como recetor, desinstale primeiro a app Dexcom. **Não pode ligar o xDrip e a app Dexcom ao transmissor ao mesmo tempo!**
- Se precisa do Clarity e quer aproveitar os alarmes do xDrip, use a [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (só G6) com transmissão local para o xDrip.
- Também pode usar o xDrip como app complementar da app oficial Dexcom, mas pode ter atrasos nas leituras de glicose.
- Com os transmissores atuais, o xDrip usa sempre o [algoritmo nativo](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) do transmissor; não há razão para o desativar. Os [reinícios preventivos](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) só funcionam em transmissores antigos (firmware 1.6.5.25 ou anterior), onde são precisos para evitar que o sensor pare ao fim de 10 dias; os transmissores recentes (Firefly) ignoram-nos. Veja [Reiniciar um sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) antes de tentar qualquer reinício.
- Tudo o que diz respeito ao próprio sensor e transmissor está documentado na [página Dexcom do xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Se usar o G6 com a Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
A Dexcom BYODA é agora uma versão muito antiga da app e não pode ser atualizada.
```

-   A [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) suporta transmissão local para o AAPS e/ou o xDrip

-   Esta app permite usar o seu Dexcom G6 com qualquer smartphone Android.
-   Desinstale a app original da Dexcom ou a app Dexcom modificada, se usou uma delas antes (**não pare** o sensor que está a funcionar)
-   Instale o apk transferido
-   Introduza o código do sensor e o número de série do transmissor na app modificada.
-   Nas definições do telefone, vá a apps > Dexcom G6 > permissions > additional permissions e carregue em 'Access Dexcom app'.
-   Pouco tempo depois, a BYODA deve captar o sinal do transmissor.

### Definições do AAPS

-   Selecione **BYODA** em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

-   Se não receber valores, selecione outra fonte de dados e depois selecione de novo **BYODA** para que sejam pedidas as permissões que estabelecem a ligação entre o AAPS e a transmissão da BYODA.

### Definições do xDrip

-   Selecione '640G/Eversense' como fonte de dados.
-   O comando 'start sensor' tem de ser executado no xDrip para receber valores. Isto não afeta o sensor atual, controlado pela Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Resolução de problemas do G6 e do ONE

### Resolução de problemas específicos do Dexcom G6/ONE

-   Desça até **Troubleshooting** [aqui](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Resolução de problemas geral

A resolução de problemas geral para CGM está [aqui](#general-cgm-troubleshooting).

### Transmissor novo com sensor em funcionamento

Se tiver de mudar o transmissor durante uma sessão de sensor em curso, pode tentar retirar o transmissor sem danificar o suporte do sensor. Pode encontrar um vídeo [aqui](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Se preferir [esta solução](https://youtu.be/tx-kTsrkNUM), tenha cuidado para não [danificar os contactos do sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) com a tira.
