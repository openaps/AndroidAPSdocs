# Smartwatches e o AAPS

Vários smartwatches podem ser usados para mostrar parte da informação disponível no **AAPS** ou para fazer ações remotas.

Para controlar o **AAPS** (bomba e sensor) diretamente a partir de um smartwatch, é preciso um relógio Android completo (considerado como um pequeno [smartphone](./Phones.md)).

Alguns smartwatches permitem introduzir tratamentos, ou mais, mas é o próprio telefone que continua a gerir o **AAPS**.

Os smartwatches são cada vez mais usados com o **AAPS**, _tanto_ por adultos com diabetes como por cuidadores/pais de crianças com diabetes.

## Vantagens gerais de usar smartwatches com o **AAPS**


Os smartwatches, conforme o modelo, podem ser usados de muitas formas diferentes com o **AAPS**. Podem ser usados para controlar o **AAPS** total ou parcialmente, ou apenas para ver à distância os níveis de glicose, a insulina ativa e outros parâmetros.

Ligar um smartwatch ao **AAPS** pode ser útil em muitas situações, por exemplo ao conduzir um carro ou uma (moto)bicicleta e durante o exercício. Algumas pessoas acham que olhar para um relógio (numa reunião, numa festa, à mesa, etc.) é mais discreto do que olhar para um telefone. Do ponto de vista da segurança, um smartwatch também pode ser útil quando está fora de casa: o utilizador pode manter o telefone com o **AAPS** guardado fora da vista (por exemplo, dentro de uma mala) e usar o smartwatch para o controlo remoto.

## Vantagens específicas para pais/cuidadores que usam o **AAPS**

No caso de uma criança, se o telefone com o **AAPS** estiver perto, o cuidador pode usar um smartwatch para acompanhar ou fazer alterações sem precisar de usar o telefone com o **AAPS**. Isto pode ser útil, por exemplo, se o telefone com o **AAPS** estiver guardado numa cinta da bomba.

Um smartwatch pode ser usado _em conjunto com_ as opções baseadas no TELEFONE para controlo remoto ou para [apenas seguir](../RemoteFeatures/FollowingOnly.md), ou _em alternativa_ a elas.

Além disso, ao contrário dos telefones de seguimento dos pais/cuidadores (que dependem da rede móvel ou do Wi-Fi), os smartwatches ligados por Bluetooth podem ser úteis em locais isolados, como numa gruta, num barco ou a meio de uma montanha. Se os dois dispositivos (telefone com o **AAPS** e smartwatch) estiverem na mesma rede Wi-Fi, também podem usar o Wi-Fi.

## Diferentes tipos de interação entre smartwatch e AAPS

Há atualmente cinco formas principais de usar smartwatches em conjunto com o **AAPS**. Estão indicadas na tabela abaixo: 

| Configuração do relógio  | Funcionalidades                                        | Requisitos                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autónomo                 | AAPS sem telefone                                      | Smartwatch Android completo (verificar a versão mínima do Android)</br> Com a **app-fullRelease**                                                                                                                                                                                                                                                       |
| Controlo remoto completo | A maioria das funções do AAPS                          | Relógio Android **Wear OS** (verificar Android/API)</br>Com a **wear-fullRelease**                                                                                                                                                                                                                                                                      |
| Controlo remoto          | Funções do AAPSClient                                  | Relógio Android **Wear OS** (verificar Android/API)</br>Com a **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                                                           |
| Controlo remoto          | Algumas funções do AAPSClient                          | Relógios Garmin</br>(apenas configurações antigas Samsung Tizen e Fitbit, não recomendadas)</br>Ver abaixo.                                                                                                                                                                                                                                             |
| Visualização             | Glicose, tendência, IA, HCA, estado do loop e da bomba | Muitos smartwatches, através de uma aplicação complementar no telefone com o **AAPS** que recebe a difusão de [Aplicações externas complementares](#watches-external-companion-apps): [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>Ver abaixo. |

## Antes de comprar um smartwatch…

O modelo exato de smartwatch a comprar depende da(s) função(ões) que pretende. Pode encontrar informação útil na [página Telefones](#Phones-list-of-tested-phones), incluindo uma lista de telefones testados que também contém alguns smartwatches.

Algumas marcas de relógios populares são Samsung Galaxy, Garmin, Fossil e Mi Band. As diferentes opções resumidas na tabela acima são explicadas com mais detalhe abaixo, para o ajudar a decidir qual o smartwatch certo para a sua situação.

Se vai ligar um smartwatch ao **AAPS** num telefone para interagir com o **AAPS** à distância, também tem de verificar se os dois dispositivos são compatíveis entre si, sobretudo se tiver um telefone antigo ou pouco comum.

Em geral, se só quiser seguir os valores de glicose e não interagir com o **AAPS**, há uma gama maior de relógios mais baratos e mais simples que pode usar.

A melhor forma de escolher um smartwatch é procurar publicações sobre «watch» nos grupos do **AAPS** no Discord ou no Facebook. Leia as experiências de outras pessoas e publique as suas perguntas específicas se as publicações antigas não responderem à sua dúvida.

## Android completo

Parece uma opção atraente, não é? No entanto, de momento, só alguns entusiastas estão a fazer experiências com o **AAPS**  num relógio autónomo. Há poucos smartwatches com uma interface razoável que também funcionem bem com o uso autónomo do **AAPS** e da sua aplicação de CGM. Alguns modelos populares são o LEMFO LEM 15 Pro e o 16. Tem de instalar no relógio o apk «full» do **AAPS** (o apk que normalmente se instala num smartphone) e não o apk «wear» do **AAPS**.

Embora não haja uma especificação clara que lhe diga se um relógio vai funcionar bem para usar o **AAPS** de forma autónoma, os parâmetros seguintes ajudam:

1)  Android 12 ou mais recente. 2)  Poder tirar a watchface do modo «quadrado» para tornar o texto maior e mais fácil de ler. 3)  Bateria com muito boa autonomia. 4)  Bom alcance Bluetooth.

A maioria das frustrações com relógios **AAPS** autónomos vem de usar um ecrã muito pequeno e do facto de a interface atual da aplicação AAPS completa não ter sido feita para um relógio. Por causa do ecrã pequeno, pode preferir usar uma caneta (stylus) para alterar as definições do **AAPS**  no relógio, e alguns botões do AAPS podem não ficar visíveis no ecrã do relógio.

Outras dificuldades: é difícil ter bateria suficiente, e os relógios com bateria suficiente são muitas vezes grandes e grossos. Os utilizadores relatam lutas com o sistema operativo e com as definições de poupança de energia, dificuldade em iniciar sensores no relógio, fraco alcance Bluetooth (para manter a ligação ao sensor e à bomba) e resistência à água duvidosa. Há exemplos nas fotografias abaixo.

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Se tiver interesse em configurar um relógio autónomo, leia as publicações e os comentários no grupo do **AAPS**  no Facebook (boas palavras de pesquisa são «standalone» e «Lemfo») e no Discord para mais informações.

## Wear OS

O código do **AAPS** inclui uma extensão da aplicação que pode ser instalada em [smartwatches **Wear OS**](https://wearos.google.com/#oem-carousel).

![Configuração > Comunicação com Wear ativado](../images/v4/Configuration/configuration_communication_wear.png)

Verifique se o seu smartwatch cumpre os [pré-requisitos](#maintenance-android-version-aaps-version) do **AAPS**.

### O que _é_ o Wear OS?

As três primeiras opções de smartwatch exigem que o smartwatch tenha o **Wear OS** instalado.

O **Wear OS** é o sistema operativo que funciona em alguns smartwatches Android modernos. Se a descrição do smartwatch indicar apenas _compatibilidade_ com Android e iOS, isso não significa que tenha o Wear OS. Pode ser outro sistema operativo específico do fabricante, que não é compatível com o **AAPS**. Para instalar e usar qualquer versão do **AAPS** ou do **AAPSClient**, o smartwatch tem de ter o **Wear OS 3.0, 3.2 ou 3.5** (Android 11, nível de API 30) **ou mais recente**. Cada versão do Wear OS corresponde à versão do Android em que se baseia: o **Wear OS 3** é o Android 11 (nível de API 30), o **Wear OS 4** é o Android 13 (nível de API 33), o **Wear OS 5** é o Android 14 (nível de API 34) e o **Wear OS 6** é o Android 16 (nível de API 36). Os relógios com Wear OS 2 não podem executar o **AAPS**.

Se instalar o wear.apk do **AAPS** num relógio **Wear OS**, pode escolher entre várias watchfaces personalizadas do **AAPS**. Em alternativa, pode usar uma watchface normal do smartwatch, com a informação do **AAPS** em pequenos blocos chamados «complicações» no mostrador. Uma complicação é qualquer elemento mostrado numa watchface além da hora.

```{note}
As alterações recentes do **Wear OS** estragam progressivamente as watchfaces personalizadas do **AAPS** (quanto mais alta a versão do Wear OS, mais graves os problemas), mas as **complicações** continuam a funcionar. Antes de comprar ou atualizar um relógio, leia [Alterações das watchfaces no Wear OS](#wearos-watchface-changes).
```


### Como pode ser o aspeto do meu smartwatch?

Depois de [instalar o **AAPS** no seu relógio](../WearOS/WearOsSmartwatch.md), pode logo escolher a sua watchface preferida entre estas watchfaces próprias do **AAPS**. Na maioria dos relógios, basta tocar sem soltar no ecrã inicial até o ecrã encolher e deslizar para a direita para escolher outro ecrã:

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Estes são os ecrãs básicos incluídos no **AAPS**. Há [mais watchfaces](#WearOS_changing-to-AAPS-watchface) e também pode usar [complicações](#Watchfaces-complications).

### Como usar um relógio Wear OS no dia a dia?

Pode encontrar mais detalhes sobre as watchfaces e o uso diário, incluindo como criar (e partilhar) a sua própria watchface personalizada, na secção [Usar o AAPS Wear num smartwatch](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## Aplicações externas complementares

O **AAPS** pode difundir o seu estado para outras aplicações instaladas no mesmo telefone: glicose e tendência, IA, HCA, basal e basal temporária, nome do perfil, estado do loop, bateria do telefone e da bomba, nível do reservatório e progresso do bólus. Várias aplicações complementares para relógios leem esta difusão e mostram os dados em relógios que o **AAPS** não suporta diretamente. Para enviar os dados, ative **Aplicações externas complementares** em **Configuração** > **Comunicação** (veja [Aplicações externas complementares](#external-companion-apps) na página Configuração). A difusão é enviada com cada novo valor e não pode ser pedida: um botão de atualizar na aplicação complementar não tem efeito no **AAPS**.

![Configuração > Comunicação: o cartão Aplicações externas complementares](../images/v4/Configuration/configuration_external_companion_apps.png)

Aplicações complementares que usam esta difusão:

- [WatchDrip+](https://bigdigital.home.blog/) para relógios Xiaomi e Amazfit, veja [Relógios Xiaomi e Amazfit](#watches-xiaomi-amazfit) abaixo.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) para relógios Wear OS, como complicação ou widget. É uma boa alternativa nas versões do Wear OS em que as watchfaces do **AAPS** não são fiáveis, veja [Configurar o AAPS no seu relógio Wear OS](../WearOS/WearOsSmartwatch.md). A sua aplicação complementar GlucoDataAuto mostra os mesmos dados num carro com Android Auto.
- [Aplicação G-Watch](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) para relógios Samsung Tizen, e a sua versão posterior para Wear OS. Em versões anteriores do **AAPS**, o plugin chamava-se **Samsung Tizen**, por causa desta aplicação.

```{warning}
A **aplicação G-Watch** e a sua versão para **Wear OS** já não têm manutenção, e a Samsung passou os seus smartwatches de Tizen para Wear OS. O G-Watch só interessa para configurações antigas que já existem e não é recomendado para uma nova instalação. Veja o [grupo do Facebook](https://www.facebook.com/groups/gwatchapp) dedicado para as últimas novidades.
```

(Watchfaces-garmin)=

## Garmin

Há algumas watchfaces para Garmin que se integram com o [AAPS](https://apps.garmin.com/search?keywords=androidaps), na loja Garmin ConnectIQ.

![Configuração > Comunicação: o cartão Garmin](../images/v4/Configuration/configuration_garmin.png)

O [AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) integra-se diretamente com o **AAPS**. Mostra dados do estado do loop (insulina ativa, basal temporária) além dos valores de glicose e envia a frequência cardíaca para o **AAPS**. Está disponível na loja ConnectIQ; ative o plugin **Garmin** em **Configuração → Comunicação**. ![Watchface AAPS Glucose Watch com campos numerados](../images/Garmin_WF-annotated.png)

1. Valores de glicose mais alto e mais baixo no gráfico
2. Variação da glicose por minuto
3. Insulina ativa (IA)
4. Tempo desde o último valor de glicose (minutos:segundos)
5. Basal temporária, em percentagem da basal do perfil
6. Gráfico da glicose das últimas 2 horas
7. Valor atual da glicose



## Fitbit

```{warning}
A Google está a passar a Fitbit para o Google Health e está a retirar as aplicações e watchfaces de terceiros dos relógios Fitbit na UE. Por isso, as watchfaces Fitbit **já não são uma opção recomendada**, e não se recomenda comprar um Fitbit para usar com o **AAPS**.
```

Para relógios Fitbit que já tem, as [páginas web do Nightscout](https://nightscout.github.io/nightscout/wearable/#fitbit) indicam algumas opções só de monitorização, como o [Glance](https://glancewatchface.com/). Estas também são watchfaces de terceiros, por isso aplica-se a mesma restrição da UE.

## Apenas seguir

Estes smartwatches mostram alguma informação do **AAPS**; alguns precisam de outras aplicações.

Há uma grande variedade de smartwatches baratos que permitem apenas visualizar dados. Se usa o Nightscout, encontra [aqui](https://nightscout.github.io/nightscout/wearable/#) uma boa visão geral de todas as opções

Seguem-se algumas opções de relógios apenas para seguir, populares entre os utilizadores do **AAPS**:

(watches-xiaomi-amazfit)=
### Relógios Xiaomi e Amazfit

O **WatchDrip+** é uma aplicação complementar feita pela comunidade que mostra os dados da glicose e do loop em vários modelos de smartwatch, sobretudo das marcas Xiaomi (_p. ex._ Mi Band) e Amazfit:

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Desde a versão 0.5, o **WatchDrip+** lê os dados diretamente do **AAPS**, sem o xDrip+ como intermediário. No telefone com o **AAPS**:

1. Ative **Aplicações externas complementares** em **Configuração** > **Comunicação**, veja [acima](#watches-external-companion-apps). Fornece a glicose atual, o delta, a seta de tendência, a IA e o estado da bomba.
2. Ative o plugin **xDrip** em **Configuração** > **Comunicação** e ligue **Enviar estado para xDrip+** nas definições dele. Fornece a linha de estado IA/HCA, e o gráfico da glicose no relógio fica preenchido depois de alguns valores.
3. Se o xDrip+ estiver instalado no telefone, desative o seu **Broadcast Service API** (xDrip+ > Settings > Inter-app settings) para que o relógio não receba os dados duas vezes. Se o xDrip+ servia apenas para passar os dados para o relógio, pode desinstalá-lo.

O botão de atualizar do WatchDrip+ não tem efeito com o **AAPS**: os dados chegam com cada novo valor.


Pode ler mais sobre eles, incluindo como os configurar, no [site do WatchDrip+](https://bigdigital.home.blog/). A vantagem destes relógios é serem pequenos e relativamente baratos. São uma opção popular sobretudo para crianças e para quem tem pulsos mais finos.

### Relógio Pebble

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Os relógios Pebble ([já descontinuados](https://en.wikipedia.org/wiki/Pebble_(watch))) estiveram à venda de 2013 a 2016 e ainda podem estar disponíveis em segunda mão. A Fitbit ficou com os ativos da Pebble. Os utilizadores do Pebble podem usar a watchface Urchin para ver os dados do Nightscout. Os dados que podem ser mostrados incluem a IA, a basal temporária ativa e as previsões. Em loop aberto, pode usar o IFTTT para criar um applet que, quando é recebida uma notificação do **AAPS**, envia um SMS ou uma notificação pushover.

### [Relógios Bluejay](https://bluejay.website/)


![Relógio BlueJay U3](../images/watches/bluejay_u3.png)


São equipamentos únicos que podem receber os dados da glicose **diretamente** do transmissor Dexcom. Poucas pessoas sabem que os transmissores Dexcom G6/G7 enviam na verdade os dados atuais da glicose em _dois_ canais separados: um canal para o telefone e um canal médico. Os relógios Bluejay podem ser configurados para receber os dados da glicose em qualquer um dos canais. Assim, se o **AAPS** usar o canal do telefone, os relógios Bluejay podem usar o canal médico.

A principal vantagem é que o relógio é independente do telefone e do sistema de loop. Assim, por exemplo, se desligar a bomba e o telefone com o **AAPS** na praia ou num parque de diversões e ficar fora do alcance do telefone com o **AAPS**, pode continuar a receber os valores do seu Dexcom diretamente no relógio Bluejay.

O **Bluejay GTS** original foi descontinuado e não consegue ler o Dexcom G7. Os modelos seguintes (U1 e depois o atual **U3**, vendido em acesso antecipado no momento em que este texto foi escrito) são relógios Android completos com o xDrip, que recebem os dados diretamente do Dexcom G6 e G7. O fabricante descreve o relógio como uma ferramenta de investigação, não para uso médico. As desvantagens relatadas são que nem sempre recebe um valor a cada 5 minutos e que a bateria tem de ser carregada muitas vezes. Veja o [site da Bluejay](https://bluejay.website/) para o modelo atual e a disponibilidade.

### Apple Watch

Veja [Nightscout no seu relógio](https://nightscout.github.io/nightscout/wearable/#).

O Apple Watch suporta agora a ligação direta ao G7 e pode ser usado ao mesmo tempo que o **AAPS**.

