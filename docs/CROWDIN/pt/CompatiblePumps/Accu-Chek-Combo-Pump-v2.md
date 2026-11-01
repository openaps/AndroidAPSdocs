# Accu-Chek Combo

**Este software faz parte de uma solução DIY («faça você mesmo») e não é um produto: exige que o PRÓPRIO UTILIZADOR leia, aprenda e compreenda o sistema, incluindo a forma de o usar. Não é algo que faça a gestão total da sua diabetes, mas permite melhorá-la, bem como a sua qualidade de vida, se estiver disposto a utilizar o seu tempo para isso. Não tenha demasiada pressa, permita-se ter tempo para aprender. Só o utilizador é responsável pelo que faz com ele.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

A Roche vai sair do mercado das bombas de insulina para concentrar a sua oferta para a diabetes no CGM Accu-Chek SmartGuide. A Roche anunciou o fim das vendas das bombas Accu-Chek Combo e Accu-Chek Insight; a sua última bomba, a microbomba Accu-Chek Solo, também está a ser descontinuada (últimas entregas na Alemanha no final de 2025). A mudança está a ser feita por região, a começar pela Alemanha; espera-se que outros mercados europeus se sigam. Se depende desta bomba, planeie com antecedência a passagem para uma bomba suportada.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Funções da bomba com o AAPS

* Comunica com o **AAPS** através do Bluetooth do seu telefone, sem outro dispositivo de comunicação.
* Tratamento automático da hora de verão e do fuso horário.

## Requisitos de hardware e software

* Uma bomba Roche Accu-Chek Combo (qualquer firmware; todos funcionam).
* Um dispositivo Smartpix ou Realtyme, juntamente com o software de configuração 360, para configurar a bomba. (A Roche envia gratuitamente os dispositivos Smartpix e o software de configuração aos seus clientes, se estes o pedirem.)
* Um telefone compatível com Android 12 ou mais recente. Veja as [notas das versões](#maintenance-android-version-aaps-version) para mais detalhes.
* A app **AAPS** instalada no seu telefone.

Alguns telefones podem funcionar melhor do que outros, conforme a qualidade do suporte Bluetooth e se têm ou não uma lógica de poupança de energia adicional e muito agressiva. Encontra uma lista de telefones no documento [Telefones](#Phones-list-of-tested-phones). Tenha em atenção que esta não é uma lista completa e reflete a experiência pessoal dos utilizadores. Também é incentivado a registar a sua experiência e assim ajudar os outros (estes projetos baseiam-se em retribuir a ajuda recebida).

(combov2-before-you-begin)=
## Antes de começar

**SEGURANÇA EM PRIMEIRO LUGAR** – não faça este processo num ambiente onde não possa recuperar de um erro. Tenha à mão o seu dispositivo Smartpix / Realtyme e o software de configuração 360. Conte com cerca de uma hora para configurar tudo e verificar que tudo funciona corretamente.

Tenha em conta as seguintes limitações:

* O bólus prolongado e o bólus multionda não são suportados neste momento (em vez disso, pode usar [hidratos de carbono prolongados](../DailyLifeWithAaps/ExtendedCarbs.md)).
* Só é suportado um perfil basal (o primeiro).
* A taxa basal mais baixa no seu **Perfil** é 0,05 U/h. O **AAPS** recusa um **Perfil** com uma taxa mais baixa. A Combo arredonda as taxas basais aos seus próprios passos (0,01 U/h abaixo de 1 U/h, 0,05 U/h até 10 U/h, 0,1 U/h acima disso). O **AAPS** usa as taxas que a bomba dá realmente.
* As basais temporárias estão limitadas a 500 % da taxa basal atual. O **AAPS** tem este limite em conta.
* O loop fica desativado se o perfil ativo na bomba não for o perfil n.º 1. Isto continua até o perfil n.º 1 passar a ser o ativo; quando isso acontecer, na próxima vez que o AAPS se ligar (sozinho, passado algum tempo, ou porque tocou em **Atualizar** no ecrã da bomba Accu-Chek Combo), vai reparar que o perfil n.º 1 é o atual e volta a ativar o loop.
* Se o loop pedir para cancelar uma basal temporária em curso, a Combo define em vez disso uma basal temporária de 90 % ou 110 % durante 15 minutos. Isto acontece porque cancelar de facto uma basal temporária provoca um alerta na bomba com muitas vibrações, e estas vibrações não podem ser desligadas.
* A estabilidade da ligação Bluetooth varia entre telefones e pode causar alertas de «bomba inacessível», em que deixa de ser possível estabelecer a ligação à bomba. Se esse erro ocorrer, verifique se o Bluetooth está ligado e toque em **Atualizar** no ecrã da bomba (**Gerir** > **Bomba**) para ver se foi um problema passageiro; se mesmo assim não houver ligação, reinicie o telefone, o que normalmente resolve isto.
* Há outro problema em que reiniciar não ajuda e é preciso carregar num botão da bomba (o que reinicia a pilha Bluetooth da bomba) antes de a bomba voltar a aceitar ligações do telefone.
* Deve evitar definir uma basal temporária na bomba, porque o loop assume o controlo das basais temporárias. Pode levar até 20 minutos até ser detetada uma nova basal temporária definida na bomba, e o efeito dela só é contado a partir do momento em que é detetada; no pior caso, pode haver 20 minutos de basal temporária que não estão refletidos na IA.

Neste momento, o driver suporta os seguintes idiomas na Combo. (Isto não tem nada a ver com o idioma do AAPS – é o idioma mostrado no próprio ecrã LCD da Combo.)

* Inglês
* Espanhol
* Francês
* Italiano
* Russo
* Turco
* Polaco
* Checo
* Húngaro
* Eslovaco
* Romeno
* Croata
* Neerlandês
* Grego
* Finlandês
* Norueguês
* Português
* Sueco
* Dinamarquês
* Alemão
* Esloveno
* Lituano

**Importante**: se a sua bomba estiver configurada num idioma que não faz parte desta lista, contacte os programadores e mude o idioma da bomba para um desta lista. Caso contrário, o driver não funciona corretamente.

## Configuração do telefone

É muito importante garantir que as otimizações da bateria estão desligadas. O AAPS já deteta automaticamente quando está sujeito a estas otimizações e pede na sua interface que sejam desligadas. Mas, nos telefones Android modernos, o próprio Bluetooth _também_ é uma app (uma app do sistema). E, normalmente, essa «app Bluetooth» funciona _com as otimizações da bateria ligadas por predefinição_. Por isso, o Bluetooth pode deixar de responder quando o telefone quer poupar energia, porque o telefone fecha a app Bluetooth. Isto significa que, nas definições dessa app Bluetooth do sistema, as otimizações da bateria também têm de ser desligadas. Infelizmente, a forma de encontrar essa app Bluetooth do sistema é diferente de telefone para telefone. No Android padrão, vá a Definições -> Aplicações -> Ver todas as N aplicações (N = número de apps no seu telefone). Depois abra o menu no canto superior direito e toque em «Mostrar sistema», «Mostrar apps do sistema» ou «Todas as apps». Agora, na lista de apps alargada, procure uma app «Bluetooth». Selecione-a e, no ecrã «Informações da app», toque em «Bateria». Aí, desligue as otimizações da bateria (por vezes chamadas «utilização da bateria»).

## Configuração da Combo

* Configure a bomba com o software de configuração Accu-Chek 360. Se não tiver o software, contacte a linha de apoio da Accu-Chek. Normalmente, enviam aos utilizadores registados um CD com o «360° Pump Configuration Software» (software de configuração da bomba) e um dispositivo de ligação USB-infravermelhos SmartPix (o dispositivo Realtyme também funciona, se o tiver).

  - **Definições obrigatórias** (marcadas a verde nas capturas de ecrã):

     * Defina ou mantenha a configuração do menu como «Standard». Assim a bomba só mostra os menus e ações suportados e esconde os que não são suportados (bólus prolongado/multionda, várias taxas basais). Se forem usados, estes limitam a função de loop, porque nesse caso não é possível executar o loop de forma segura.
     * Verifique se o _Quick Info Text_ (texto de informação rápida) está definido como «QUICK INFO» (sem as aspas; encontra-se em _Insulin Pump Options_, opções da bomba de insulina).
     * Defina o _Maximum Adjustment_ (ajuste máximo) da basal temporária para 500 %
     * Desative _Signal End of Temporary Basal Rate_ (sinalizar o fim da basal temporária)
     * Defina o _Duration increment_ (incremento da duração) da basal temporária para 15 min
     * Ative o Bluetooth

  - **Definições recomendadas** (marcadas a azul nas capturas de ecrã)

     * Defina o alarme de cartucho baixo como preferir
     * Configure um bólus máximo adequado à sua terapia, para se proteger contra erros no software
     * Da mesma forma, configure a duração máxima da basal temporária para sua segurança. Permita pelo menos 3 horas, porque a opção para desligar a bomba durante 3 horas define 0 % durante 3 horas.
     * Ative o bloqueio de teclas na bomba para impedir bólus dados na bomba, sobretudo se a bomba já era usada antes e dar bólus rápidos era um hábito.
     * Defina o tempo limite do ecrã e o tempo limite do menu para os mínimos de 5,5 e 5, respetivamente. Isto permite que o AAPS recupere mais depressa de situações de erro e reduz a quantidade de vibrações que podem ocorrer durante esses erros

  ![Captura de ecrã das definições do menu do utilizador](../images/combo/combo-menu-settings.png)

  ![Captura de ecrã das definições da basal temporária](../images/combo/combo-tbr-settings.png)

  ![Captura de ecrã das definições de bólus](../images/combo/combo-bolus-settings.png)

  ![Captura de ecrã das definições do cartucho de insulina](../images/combo/combo-insulin-settings.png)

## Ativar o driver e emparelhá-lo com a Combo

* Abra o **menu** (☰) no canto superior esquerdo, vá a [**Configuração** > **Bomba**](../SettingUpAaps/ConfigBuilder.md) e selecione **Accu-Chek Combo**.

  ![Configuração > Bomba com o plugin Accu-Chek Combo](../images/v4/Configuration/configuration_pump_list_1.png)

  Depois de o selecionar, o cartão **Accu-Chek Combo** mostra dois botões, **Definições** e **Abrir plugin**:

  ![O plugin Accu-Chek Combo selecionado em Configuração > Bomba](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Definições** abre as definições do driver Accu-Chek Combo (veja [Definições](#combov2-preferences) abaixo):

  ![Definições do driver Accu-Chek Combo](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Abrir plugin** (ou **Gerir** > **Bomba**) abre o ecrã da bomba Accu-Chek Combo. Antes de emparelhar uma bomba, mostra **Não emparelhado com a bomba**:

  ![Ecrã da bomba Accu-Chek Combo antes do emparelhamento](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* No ecrã da bomba, toque em **Emparelhamento**. Abre-se o ecrã **Emparelhar com bomba**. Siga os passos mostrados no ecrã e depois toque em **Iniciar o emparelhamento**. Quando o Android pedir autorização para tornar o telefone visível para outros dispositivos Bluetooth, toque em **Permitir**. Por fim, a Combo mostra no seu ecrã um PIN de emparelhamento de 10 dígitos e o **AAPS** pede esse PIN. Introduza esse PIN no campo **PIN de 10 dígitos**.

  ![O ecrã Emparelhar com bomba com o botão Iniciar o emparelhamento](../images/combo/combov2-pairing-screen-1.png)

  ![O Android pede para tornar o telefone visível para outros dispositivos Bluetooth](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Emparelhamento da Combo em curso, à procura da bomba](../images/combo/combov2-pairing-screen-2.png)

  As imagens seguintes são de uma versão mais antiga do **AAPS**. Os passos e os textos são os mesmos, mas os ecrãs têm um aspeto um pouco diferente.

  ![Captura de ecrã da interface de emparelhamento da Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Captura de ecrã da interface de emparelhamento da Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Captura de ecrã da interface de emparelhamento da Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Se o PIN for introduzido de forma errada, o **AAPS** mostra **O PIN não funcionou. Verifique se havia um erro de digitação. Se continuar a acontecer, cancele e tente novamente.**

  ![Captura de ecrã da interface de emparelhamento da Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Quando aparecer **Emparelhamento bem sucedido**, toque em **OK**. Volta ao ecrã da bomba, que agora mostra o estado da bomba (veja [Conteúdo do ecrã da bomba Accu-Chek Combo](#combov2-tab-contents) abaixo). O botão **Emparelhamento** é substituído por **Desemparelhar**.

* Para verificar a configuração (com a bomba **desligada** de qualquer cânula, por segurança!), use o AAPS para definir uma basal temporária de 500 % durante 15 min e dê um bólus. A bomba deve agora ter uma basal temporária em curso e o bólus no histórico. O AAPS também deve mostrar a basal temporária ativa e o bólus administrado.

* Na Combo, recomenda-se ativar o bloqueio de teclas para impedir bólus dados na bomba, sobretudo se a bomba já era usada antes e usar a função «bólus rápido» era um hábito.

## Notas sobre o emparelhamento

A Accu-Chek Combo foi desenvolvida antes do lançamento do Bluetooth 4.0 e apenas um ano depois do lançamento da primeira versão do Android. Por isso, a sua forma de emparelhar com outros dispositivos não é 100 % compatível com a forma como isso é feito hoje no Android. Para resolver isto por completo, o AAPS precisaria de permissões ao nível do sistema, que só estão disponíveis para apps do sistema. Estas são instaladas no telefone pelos fabricantes – os utilizadores não podem instalar apps do sistema.

Por isso, o emparelhamento nunca vai funcionar 100 % sem problemas. Em particular, durante o emparelhamento, a janela de PIN Bluetooth do Android pode aparecer por instantes e desaparecer sozinha. Mas por vezes fica no ecrã e pede um PIN de 4 dígitos. (Não confunda com o PIN de emparelhamento da Combo, que tem 10 dígitos.) Não introduza nada, toque apenas em cancelar. Se o emparelhamento não continuar, siga as instruções no ecrã para tentar emparelhar de novo.

(combov2-tab-contents)=
## Conteúdo do ecrã da bomba Accu-Chek Combo

Para abrir o ecrã da bomba, vá a **Gerir** > **Bomba**. Depois de emparelhar uma bomba, o ecrã mostra as seguintes informações (de cima para baixo):

![Captura de ecrã do ecrã da bomba Accu-Chek Combo com emparelhamento (versão mais antiga do AAPS)](../images/combo/combov2-tab-with-pairing.png)

1. **Estado do driver**: o driver pode estar num dos seguintes estados:
   - **Desligada**: não há ligação Bluetooth; o driver está neste estado a maior parte do tempo e só se liga à bomba quando é preciso – isto poupa energia
   - **A ligar**
   - **A verificar a bomba**: a bomba está ligada, mas o driver está a fazer verificações de segurança para garantir que está tudo bem e atualizado
   - **Pronto**: o driver está pronto para aceitar comandos do AAPS
   - **Suspenso**: a bomba está suspensa (na Combo aparece como «parada»)
   - Uma descrição do comando em execução, por exemplo **A definir perfil basal** ou **A obter estado bomba**
   - **Erro**: ocorreu um erro; a ligação foi terminada e qualquer comando em curso foi interrompido
2. **Última ligação**: há quantos minutos o driver se ligou com sucesso à Combo; se passar de 30 minutos, este item aparece a vermelho
3. **Bateria**: nível da bateria; a Combo só indica **Cheia**, **Fraca** ou **Vazia** e não dá nada mais exato (como uma percentagem), por isso só aparecem aqui estes três níveis
4. **Reservatório**: quantas UI estão neste momento no reservatório da Combo
5. **Último bólus**: há quantos minutos foi administrado o último bólus; se ainda não foi administrado nenhum desde que o AAPS arrancou, não aparece
6. **Basal temporária**: detalhes da basal temporária ativa; se não houver nenhuma ativa, não aparece
7. **Taxa Basal de base**: taxa basal de base ativa neste momento («de base» significa a taxa basal sem nenhuma basal temporária ativa a alterar o fator da taxa basal)
8. **Número de Série**: número de série da Combo indicado pela bomba (corresponde ao número de série que aparece na parte de trás da Combo)
9. **Endereço Bluetooth**: o endereço Bluetooth de 6 bytes da Combo, mostrado no formato `XX:XX:XX:XX:XX:XX`

Enquanto o driver está a fazer alguma coisa (por exemplo, a definir um perfil basal), uma caixa por baixo da lista descreve a atividade atual, com uma barra de progresso fina que mostra o andamento.

A Combo pode ser controlada por Bluetooth no modo de _terminal remoto_ ou no modo de _comandos_. O modo de terminal remoto corresponde ao «modo de controlo remoto» no medidor da Combo, que imita o ecrã LCD e os quatro botões da bomba. Alguns comandos têm de ser feitos pelo driver neste modo, porque não existem no modo de comandos. Este último modo é muito mais rápido mas, como foi dito, faz menos coisas. Quando o modo de terminal remoto está ativo, o ecrã atual do terminal remoto aparece no campo situado logo acima do desenho da Combo. No entanto, quando o driver muda para o modo de comandos, esse campo fica vazio.

(Não tem influência sobre isto; é o driver que decide sozinho que modo usar. Isto é só uma nota para saber porque é que por vezes vê imagens da Combo nesse campo.)

Em baixo, existem estes botões:

- **Atualizar**: faz uma atualização imediata do estado da bomba. Também serve para informar o AAPS de que um erro encontrado antes já está resolvido e de que o AAPS pode verificar de novo se está tudo bem (mais informação abaixo, na [secção sobre os alertas](#combov2-alerts)). Só pode tocar neste botão quando o driver está desligado, suspenso ou no estado de erro.
- **Desemparelhar**: desemparelha a Combo emparelhada do **AAPS** e do Android, depois de confirmar **Quer mesmo desemparelhar a bomba?**. Quando não há nenhuma bomba emparelhada, este botão é substituído por **Emparelhamento**.

(combov2-preferences)=
## Definições

Estas definições estão disponíveis para o driver da Combo (**Configuração** > **Bomba** > **Accu-Chek Combo** > **Definições**, ou o ícone das definições (roda dentada) no ecrã da bomba). Os itens estão listados de cima para baixo:

1. **Duração da procura (em segundos)**: durante o emparelhamento, o driver torna o telefone visível para a bomba. Isto controla durante quanto tempo o telefone fica visível. Por predefinição, está selecionado o máximo (300 segundos = 5 minutos). O Android não permite que o telefone fique visível por tempo ilimitado, por isso é preciso escolher uma duração.
2. **Detetar automaticamente e inserir alteração de reservatório insulina**: se estiver ativo, o driver regista a «mudança de reservatório» que normalmente registaria em **Gerir** > **Purgar/Preencher**. Isto é explicado [com mais detalhe abaixo](#combov2-autodetections).
3. **Autodetetar e inserir automaticamente a mudança de bateria**: se estiver ativo, o driver regista a «mudança de bateria» que normalmente registaria em **Gerir** > **Troca Bateria Bomba**. Isto é explicado [com mais detalhe abaixo](#combov2-autodetections).
4. **Ativ. registo detal. Da Combo**: aumenta muito a quantidade de registos feitos pelo driver. **ATENÇÃO**: não ative isto, a não ser que um programador lho peça. Caso contrário, isto pode encher os registos do **AAPS** de informação inútil e torná-los menos úteis.

O emparelhamento e o desemparelhamento são feitos no ecrã da bomba, não nas definições (veja acima).

(combov2-autodetections)=
## Detetar e registar automaticamente as mudanças de bateria e de reservatório

O driver consegue detetar mudanças de bateria e de reservatório, acompanhando os níveis da bateria e do reservatório. Se, na última atualização do estado da bomba, a Combo indicou a bateria como fraca e agora, na nova atualização do estado, o nível da bateria aparece como normal, o driver conclui que o utilizador trocou a bateria. A mesma lógica é usada para o nível do reservatório: se agora estiver mais alto do que antes, isto é interpretado como uma mudança de reservatório.

Isto só funciona se a bateria e o reservatório forem trocados quando estes níveis são indicados como baixos _e_ se a bateria e o reservatório estiverem suficientemente cheios.

Estas deteções automáticas podem ser desligadas nas [definições](#combov2-preferences) do driver.

(combov2-alerts)=
## Alertas (avisos e erros) e como são tratados

A Combo mostra os alertas como ecrãs do terminal remoto. Os avisos aparecem com um código «Wx» (x é um algarismo), junto com uma descrição curta. Um exemplo é «W7», «TBR OVER». Os erros são parecidos, mas aparecem com um código «Ex».

Alguns avisos são fechados automaticamente pelo driver. São estes:

- W1 «reservoir low»: o driver transforma isto num aviso de «reservatório baixo» mostrado no ecrã principal do AAPS
- W2 «battery low»: o driver transforma isto num aviso de «bateria fraca» mostrado no ecrã principal do AAPS
- W3, W6, W7, W8: são todos apenas informativos para o utilizador, por isso o driver pode fechá-los automaticamente com segurança

Os outros avisos _não_ são fechados automaticamente. Além disso, os erros _nunca_ são fechados automaticamente. Ambos são tratados da mesma forma: o driver mostra uma janela de alerta por cima da interface do AAPS e interrompe qualquer comando em curso. O driver passa então para o estado de «erro» (veja [o conteúdo do ecrã da bomba Accu-Chek Combo acima](#combov2-tab-contents)). Neste estado não é possível executar nenhum comando. O utilizador tem de resolver o erro na bomba; por exemplo, um erro de oclusão pode exigir a troca da cânula. Depois de o utilizador resolver o erro, pode retomar o funcionamento normal tocando em **Atualizar** no ecrã da bomba Accu-Chek Combo. O driver liga-se então à Combo e atualiza o seu estado, verificando, por exemplo, se ainda aparece um erro no ecrã. Além disso, o driver atualiza automaticamente o estado da bomba passado algum tempo, por isso não é obrigatório tocar nesse botão.

Os bólus são um caso especial. São dados no modo de comandos da Combo, que não informa a meio do bólus que apareceu um alerta. Por isso, o driver não consegue fechar avisos automaticamente _durante_ um bólus. Infelizmente, isto significa que a bomba vai apitar até o bólus terminar. O alerta mais comum durante um bólus é normalmente o W1 «reservoir low» (reservatório baixo). **Não** feche manualmente os avisos da Combo na própria bomba durante um bólus. Corre o risco de interromper o bólus. O driver trata do aviso quando o bólus terminar.

Os alertas que acontecem enquanto o driver não está ligado à Combo não são notados pelo driver. A Combo não tem forma de enviar esse alerta para o telefone por si própria; é sempre o telefone que tem de iniciar a ligação. Por isso, o alerta continua até o driver se ligar à bomba. Pode tocar em **Atualizar** no ecrã da bomba para iniciar uma ligação e deixar o driver tratar logo do alerta (em vez de esperar até o próprio AAPS decidir iniciar uma ligação).

**IMPORTANTE**: se ocorrer um erro, ou se aparecer um aviso que não seja um dos que são fechados automaticamente, o driver entra no estado de erro. Nesse estado, o loop **FICA BLOQUEADO** até o estado da bomba ser atualizado! O loop é desbloqueado depois de o estado da bomba ser atualizado (tocando em **Atualizar** ou pela atualização automática do driver) e de já não aparecer nenhum erro.

## Cuidados a ter ao usar a Combo

* Lembre-se de que isto não é um produto: sobretudo no início, o utilizador tem de vigiar e compreender o sistema, as suas limitações e a forma como pode falhar. Recomenda-se fortemente NÃO usar este sistema se a pessoa que o usa não for capaz de o compreender por completo.
* Devido à forma como funciona o controlo remoto da Combo, várias operações (sobretudo definir um perfil basal) são lentas em comparação com outras bombas. É uma limitação da Combo que infelizmente não se pode ultrapassar.
* Não defina nem cancele uma basal temporária na bomba. O loop assume o controlo das basais temporárias e não consegue funcionar de forma fiável de outra maneira, porque não é possível saber a hora de início de uma basal temporária definida pelo utilizador na bomba.
* Não carregue em nenhum botão da bomba enquanto o AAPS comunica com ela (enquanto está ligada ao AAPS, a bomba mostra o logótipo do Bluetooth). Se o fizer, a ligação Bluetooth é interrompida. Só faça isso se houver problemas a estabelecer a ligação (veja [a secção «Antes de começar» acima](#combov2-before-you-begin)).
* Não carregue em nenhum botão enquanto a bomba está a dar um bólus. Em particular, não tente fechar alertas carregando nos botões. Veja [a secção sobre os alertas](#combov2-alerts) para uma explicação mais detalhada do motivo.

## Lista de verificação quando não é possível estabelecer ligação com a Combo

O driver faz o possível para se ligar à Combo e usa alguns truques para tornar a ligação o mais fiável possível. Mesmo assim, por vezes as ligações não são estabelecidas. Seguem-se alguns passos para tentar resolver esta situação.

1. Carregue num botão da Combo. Por vezes, a pilha Bluetooth da Combo deixa de responder e já não aceita ligações. Ao carregar num botão da Combo, para que o ecrã LCD mostre alguma coisa, a pilha Bluetooth é reiniciada. Na maior parte dos casos, este é o único passo necessário para resolver os problemas de ligação.
2. Reinicie o telefone. Isto pode ser necessário se houver um problema na própria pilha Bluetooth do telefone.
3. Se a tampa da bateria da Combo for antiga, pense em trocá-la. Tampas de bateria antigas podem causar problemas na alimentação da Combo, o que afeta o Bluetooth.
4. Se as tentativas de ligação continuarem a falhar, pense em desemparelhar e depois emparelhar de novo a bomba.

(combov2-tips-for-basic-usage)=
## Dicas para a utilização básica

### Como garantir um funcionamento sem problemas

* **Ande sempre com o smartphone consigo** e deixe-o ao lado da cama durante a noite. Como a bomba pode ficar atrás ou por baixo do seu corpo enquanto dorme, uma posição mais alta (numa prateleira ou tábua) funciona melhor.
* Garanta sempre que a bateria da bomba está o mais cheia possível. Veja a secção sobre a bateria para dicas sobre a bateria.
* Sempre que possível, controle a bomba apenas através da app AAPS. Para facilitar isto, ative o bloqueio de teclas na bomba em **PUMP SETTINGS / KEY LOCK / ON**. Só é preciso usar as teclas da bomba para trocar a bateria ou o cartucho.

![Bloqueio de teclas](../images/combo/combo-tips-keylock.png)

### Bomba inacessível. O que fazer?

#### Ativar o alarme de bomba inacessível
* No **AAPS**, toque no ícone **Definições** (roda dentada) no canto superior direito do ecrã principal, vá a **Alertas locais**, ative **Alertar se a bomba estiver inacessível** e defina **Limiar de bomba inacessível** para **31** minutos.
* Assim tem tempo suficiente para não disparar o alarme quando sai da sala e deixa o telefone na secretária, mas é avisado se a bomba não puder ser contactada durante mais tempo do que a duração de uma basal temporária.

#### Voltar a contactar a bomba

* Quando o AAPS indicar um alarme de **bomba inacessível**, primeiro desbloqueie as teclas e **carregue em qualquer tecla da bomba** (por exemplo, o botão «para baixo»). Logo que o ecrã da bomba se desligue, toque em **Atualizar** no ecrã da bomba Accu-Chek Combo (**Gerir** > **Bomba**). Na maior parte dos casos, a comunicação volta a funcionar.
* Se isto não ajudar, reinicie o smartphone. Depois de reiniciar, o AAPS volta a ficar ativo e é estabelecida uma nova ligação com a bomba.

* Os testes com vários smartphones mostraram que alguns smartphones provocam o erro «bomba inacessível» com mais frequência do que outros. Veja [Telefones](#Phones-list-of-tested-phones) para conhecer os smartphones testados com sucesso.

#### Causas e consequências de erros de comunicação frequentes
* Em telefones com **pouca memória** (ou com definições de **poupança de energia agressiva**), o AAPS é muitas vezes fechado. Pode reparar nisso porque os botões de tratamento (barra QuickLaunch) no ecrã principal não aparecem quando abre o AAPS, uma vez que o sistema está a iniciar. Isto pode provocar alarmes de «bomba inacessível» no arranque. No campo **Última ligação** do ecrã da bomba (**Gerir** > **Bomba**), pode ver quando é que o AAPS comunicou com a bomba pela última vez.

![Sem ligação à bomba](../images/combo/combov2-tips-no-connection-to-pump.png)

* Este erro pode gastar a bateria da bomba mais depressa, porque o perfil basal é lido da bomba quando a app é reiniciada.
* Também aumenta a probabilidade de provocar o erro em que a bomba rejeita todas as ligações até se carregar num botão da bomba.

### O cancelamento da basal temporária falha
* Por vezes, o AAPS não consegue fechar automaticamente um alerta **TBR CANCELED**. Nesse caso, tem de tocar em **Atualizar** no ecrã da bomba Accu-Chek Combo ou confirmar o alarme na bomba.

### Considerações sobre a bateria da bomba

#### Trocar a bateria
* Depois de um alarme de **bateria fraca**, a bateria deve ser trocada o mais depressa possível, para haver sempre energia suficiente para uma comunicação Bluetooth fiável com o smartphone, mesmo que o telefone esteja mais longe da bomba.
* Mesmo depois de um alarme de **bateria fraca**, a bateria ainda pode durar bastante tempo. No entanto, recomenda-se ter sempre uma bateria nova consigo depois de soar um alarme de «bateria fraca».
* Antes de trocar a bateria, toque no símbolo **Loop** no ecrã principal e selecione **Suspender loop** durante 1 hora.
* Espere que o telefone comunique com a bomba e que o logótipo do Bluetooth na bomba desapareça.

![Bluetooth ativado](../images/combo/combo-tips-compo.png)

* Desbloqueie as teclas da bomba, ponha a bomba em modo de paragem (stop), confirme uma eventual basal temporária cancelada e troque a bateria rapidamente.
* Não precisa de acertar de novo o relógio da bomba depois de trocar a bateria: o AAPS atualiza automaticamente a data e a hora da bomba.
* Depois volte a pôr a bomba em modo de funcionamento (run) e selecione **Retomar** ao tocar no ícone **Loop suspenso** no ecrã principal.
* O AAPS volta a definir uma basal temporária necessária quando chegar o próximo valor de glicose.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Tipo de bateria e causas de baixa duração da bateria
* Como a comunicação Bluetooth intensa gasta muita energia, use apenas **baterias de alta qualidade**, como as Energizer Ultimate Lithium, as «Power One» do kit de serviço Accu-Chek «grande» ou, se quiser uma bateria recarregável, as baterias Eneloop.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Intervalos de tempo de vida habituais dos diferentes tipos de bateria:
* **Energizer Ultimate Lithium**: 4 a 7 semanas
* **Power One Alkaline** (Varta) do kit de serviço: 2 a 4 semanas
* Baterias **recarregáveis Eneloop** (BK-3MCCE): 1 a 3 semanas

Se a duração da sua bateria for muito mais curta do que os intervalos acima, verifique as seguintes causas possíveis:
* Existem algumas variantes da tampa de rosca da bateria da bomba Combo que provocam um curto-circuito parcial na bateria e a gastam depressa. As tampas sem este problema reconhecem-se pelos contactos metálicos dourados.
* Se o relógio da bomba não «sobreviver» a uma troca rápida de bateria, é provável que esteja avariado o condensador que mantém o relógio a funcionar durante uma breve falta de energia. Neste caso, pode ajudar a substituição da bomba pela Roche, o que não é problema durante o período de garantia.
* O hardware e o software do smartphone (sistema operativo Android e pilha Bluetooth) também afetam a duração da bateria da bomba, embora os fatores exatos ainda não sejam totalmente conhecidos. Se tiver oportunidade, experimente outro smartphone e compare a duração das baterias.

### Bólus prolongado, bólus multionda
O algoritmo OpenAPS não suporta um bólus prolongado ou um bólus multionda em paralelo. Mas pode conseguir um tratamento parecido com as seguintes alternativas:
* Use **hidratos-e** ao introduzir hidratos de carbono ou ao usar o assistente de bólus: introduza os hidratos de carbono da refeição completa e a duração em que espera que esses hidratos de carbono cheguem ao sangue como glicose. O sistema calcula então pequenas quantidades de hidratos de carbono distribuídas por igual ao longo de toda a duração, o que faz o algoritmo dar doses de insulina equivalentes, enquanto continua a verificar a subida ou descida geral da glicose. Para um bólus parecido com um bólus multionda, também pode combinar um bólus imediato mais pequeno com hidratos-e.
* Before eating, set a temporary **Eating Soon** target of 80 mg/dL (4.4 mmol/L) for several hours (press the target on the main screen, or **Manage** > **Temp Target**). A duração deve basear-se no intervalo que escolheria para um bólus prolongado. Assim o seu alvo fica mais baixo do que o normal e por isso aumenta a quantidade de insulina administrada.
* Depois use o **Assistente de Bólus** para introduzir todos os hidratos de carbono da refeição, mas não aplique diretamente os valores que ele sugere. Se quiser dar um bólus parecido com um bólus multionda, reduza a dose de insulina. Conforme a refeição, o algoritmo tem agora de dar SMB adicionais ou basais temporárias mais altas para contrariar a subida da glicose. Aqui, deve experimentar com muito cuidado os limites de segurança da taxa basal (U/h máx., IA basal máxima) e, se for necessário, alterá-los temporariamente.

* Não use o bólus prolongado nem o bólus multionda diretamente na bomba. O driver não os suporta (veja [Antes de começar](#combov2-before-you-begin)); se mesmo assim for dado um bólus multionda na bomba, o **AAPS** regista-o a partir do histórico da bomba como um bólus normal mais um bólus prolongado, por isso é contado na IA. Um bólus prolongado não funciona num ambiente de loop fechado (veja [esta página](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) para mais detalhes).

### Alarmes na administração de bólus
* Depois de cada bólus, o driver lê o histórico de bólus da bomba. É um mecanismo de segurança para calcular corretamente a insulina ativa (IA), mesmo quando um bólus é dado diretamente na bomba.
* Antes de um bólus, se o histórico da bomba tiver um bólus que o **AAPS** não conhecia (por exemplo, um bólus dado diretamente na bomba), o bólus pedido **não é administrado**, porque foi calculado sem essa insulina. O **AAPS** mostra **O histórico da bomba tem um bólus que o AAPS não conhecia. O bólus pedido não foi administrado...** Verifique o histórico de bólus na bomba e a sua IA. Se ainda for preciso um bólus, calcule-o de novo. Isto também se aplica quando o bólus desconhecido é encontrado numa nova ligação.
* Se o bólus foi administrado, mas o histórico da bomba também tinha outros bólus que o **AAPS** não conhecia, estes são registados agora e o **AAPS** pede-lhe que verifique a IA antes do próximo bólus.
* Se a ligação à bomba se perder **durante** um bólus, o **AAPS** não regista 0 U: mostra quanto a bomba já tinha dado até esse momento e avisa que a bomba ainda pode dar o resto. **Não dê outro bólus.** O **AAPS** lê a quantidade real no histórico da bomba na ligação seguinte.
* Se a ligação se perder enquanto o **AAPS** envia o bólus, não se sabe se a bomba o recebeu. Verifique o histórico de bólus na bomba antes do próximo bólus.
* Se o **AAPS** não conseguir confirmar que um bólus foi administrado, mostra **Administração de bólus falhou. Nenhum bólus parece ter sido administrado. Para confirmar, por favor verifique a bomba de forma a evitar uma dupla administração de bólus e programe novamente o bólus.** Os bólus nunca são repetidos automaticamente.

## Onde obter ajuda

O desenvolvimento do driver da Combo é feito pela comunidade, de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a secção relevante desta documentação para confirmar como a função deve funcionar.
2. **Pergunte** no canal *#AAPS* no [Discord](https://discord.gg/4fQUWHZ4Mw) ou num dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Comunique um erro**: procure nos [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo problema](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [ficheiros de registo](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, indique a marca e o modelo do telefone, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).
