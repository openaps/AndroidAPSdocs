# Accu-Chek Combo

**Este software faz parte de uma solução DIY ("faça você mesmo") e não é um produto. Ele exige que VOCÊ leia, aprenda e entenda o sistema, incluindo como usá-lo. Ele não faz todo o controle do seu diabetes por você, mas permite melhorar o controle do seu diabetes e a sua qualidade de vida, se você estiver disposto a dedicar o tempo necessário. Não tenha pressa; dê a si mesmo tempo para aprender. Você é o único responsável pelo que faz com ele.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

A Roche está saindo do mercado de bombas de insulina para concentrar o seu portfólio de diabetes no CGM Accu-Chek SmartGuide. Ela anunciou o fim das vendas das bombas Accu-Chek Combo e Accu-Chek Insight; a sua última bomba, a micro bomba Accu-Chek Solo, também está sendo descontinuada (últimas entregas na Alemanha no fim de 2025). A mudança está sendo feita por região, começando pela Alemanha; outros mercados europeus devem vir depois. Se você depende desta bomba, planeje com antecedência a troca para uma bomba suportada.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Recursos da bomba com o AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio celular, sem um dispositivo de comunicação adicional.
* Tratamento automático do horário de verão (DST) e do fuso horário.

## Requisitos de hardware e software

* Uma Roche Accu-Chek Combo (qualquer firmware, todos funcionam).
* Um dispositivo Smartpix ou Realtyme junto com o 360 Configuration Software para configurar a bomba. (A Roche envia gratuitamente dispositivos Smartpix e o software de configuração aos seus clientes, se eles pedirem.)
* Um telefone compatível com Android 12 ou mais recente. Veja as [notas de versão](#maintenance-android-version-aaps-version) para mais detalhes.
* O app **AAPS** instalado no seu telefone.

Alguns telefones podem funcionar melhor que outros, dependendo da qualidade do suporte a Bluetooth e de terem ou não uma lógica adicional de economia de energia muito agressiva. Uma lista de telefones está no documento [Telefones para o AAPS](#Phones-list-of-tested-phones). Por favor, esteja ciente de que esta não é uma lista completa e reflete a experiência pessoal do usuário. Você também pode adicionar a sua experiência e assim ajudar outras pessoas (estes projetos vivem de passar a ajuda adiante).

(combov2-before-you-begin)=
## Antes de começar

**SEGURANÇA EM PRIMEIRO LUGAR** - não faça este processo em um ambiente onde você não consiga se recuperar de um erro. Tenha à mão o seu dispositivo Smartpix / Realtyme e o 360 Configuration Software. Planeje cerca de uma hora para configurar tudo e verificar se tudo está funcionando corretamente.

Conheça as seguintes limitações:

* Bólus estendido e bólus multionda não são suportados no momento (você pode usar [Carboidratos estendidos](../DailyLifeWithAaps/ExtendedCarbs.md) em vez disso).
* Só um perfil basal (o primeiro) é suportado.
* A menor taxa basal no seu **Perfil** é de 0,05 U/h. O **AAPS** recusa um **Perfil** com uma taxa menor. A Combo arredonda as taxas basais para os seus próprios passos (0,01 U/h abaixo de 1 U/h, 0,05 U/h até 10 U/h, 0,1 U/h acima disso). O **AAPS** usa as taxas que a bomba realmente administra.
* As taxas basais temporárias são limitadas a 500% da taxa basal atual. O **AAPS** leva esse limite em conta.
* O loop é desativado se o perfil ativo na bomba não for o perfil nº 1. Isso continua até que o perfil nº 1 seja o ativo; quando isso for feito, na próxima vez que o AAPS se conectar (sozinho depois de algum tempo ou porque você tocou em **Atualizar** na tela da bomba Accu-Chek Combo), ele vai perceber que o perfil nº 1 é o atual e vai ativar o loop novamente.
* Se o loop pedir o cancelamento de uma TBR em andamento, a Combo define em vez disso uma TBR de 90% ou 110% por 15 minutos. Isso porque cancelar de fato uma TBR causa um alerta na bomba, que vibra muito, e essas vibrações não podem ser desativadas.
* A estabilidade da conexão Bluetooth varia entre telefones e pode causar alertas de "bomba inacessível", quando não é mais possível estabelecer uma conexão com a bomba. Se esse erro ocorrer, verifique se o Bluetooth está ativado e toque em **Atualizar** na tela da bomba (**Gerenciar** > **Bomba**) para ver se a causa foi um problema passageiro. Se ainda assim nenhuma conexão for estabelecida, reinicie o telefone, o que normalmente resolve o problema.
* Há outro problema em que reiniciar não ajuda, mas é preciso pressionar um botão na bomba (o que reinicia a pilha Bluetooth da bomba) antes que a bomba aceite de novo conexões do telefone.
* Evite definir uma TBR na bomba, pois o loop assume o controle das TBRs. Detectar uma nova TBR na bomba pode levar até 20 minutos, e o efeito da TBR só é contado a partir do momento em que ela é detectada. Assim, no pior caso, pode haver 20 minutos de uma TBR que não aparece no IOB.

No momento, o driver suporta os seguintes idiomas na Combo. (Isto não tem relação com o idioma do AAPS - é o idioma mostrado no próprio LCD da Combo.)

* Inglês
* Espanhol
* Francês
* Italiano
* Russo
* Turco
* Polonês
* Tcheco
* Húngaro
* Eslovaco
* Romeno
* Croata
* Holandês
* Grego
* Finlandês
* Norueguês
* Português
* Sueco
* Dinamarquês
* Alemão
* Esloveno
* Lituano

**Importante**: Se a sua bomba estiver configurada em um idioma que não está nesta lista, entre em contato com os desenvolvedores e mude o idioma da bomba para um desta lista. Caso contrário, o driver não vai funcionar corretamente.

## Configuração do telefone

É muito importante garantir que as otimizações de bateria estejam desativadas. O AAPS já detecta automaticamente quando está sujeito a essas otimizações e pede na sua interface que elas sejam desativadas. Mas, nos telefones Android modernos, o próprio Bluetooth _também_ é um app (um app do sistema). E, normalmente, esse "app Bluetooth" roda _com as otimizações de bateria ativadas por padrão_. Como resultado, o Bluetooth pode deixar de responder quando o telefone tenta economizar energia, porque ele encerra o app Bluetooth. Isso significa que, nas configurações desse app do sistema Bluetooth, as otimizações de bateria também devem ser desativadas. Infelizmente, a forma de encontrar esse app do sistema Bluetooth é diferente em cada telefone. No Android padrão, vá para Configurações -> Apps -> Ver todos os N apps (N = o número de apps no seu telefone). Depois, abra o menu no canto superior direito e toque em "Mostrar sistema", "Mostrar apps do sistema" ou "Todos os apps". Agora, na lista de apps que aumentou, procure um app "Bluetooth". Selecione-o e, na tela "Informações do app", toque em "Bateria". Ali, desative as otimizações de bateria (às vezes chamadas de "uso da bateria").

## Configuração da Combo

* Configure a bomba com o Accu-Chek 360 Configuration Software. Se você não tem o software, entre em contato com a central de atendimento da Accu-Chek. Eles geralmente enviam um CD para usuários registrados com "Software de Configuração da Bomba 360°" e um dispositivo de conexão SmartPix USB-infravermelho (o dispositivo Realtyme também funciona se você tiver).

  - **Configurações obrigatórias** (marcadas em verde nas capturas de tela):

     * Defina/deixe a configuração do menu como "Standard" (Padrão). Assim a bomba mostra só os menus/ações suportados e oculta os que não são suportados (bólus estendido/multionda, várias taxas basais). Se eles forem usados, a função do loop fica restrita, porque não é possível executar o loop de forma segura.
     * Verifique se o _Quick Info Text_ está definido como "QUICK INFO" (sem as aspas; fica em _Insulin Pump Options_).
     * Defina o _Maximum Adjustment_ da TBR como 500%
     * Desative _Signal End of Temporary Basal Rate_
     * Defina o _Duration increment_ da TBR como 15 min
     * Ativar o Bluetooth

  - **Configurações recomendadas** (marcadas em azul nas capturas de tela)

     * Defina o alarme de cartucho baixo como preferir
     * Configure um bólus máximo adequado à sua terapia para se proteger contra bugs no software
     * Da mesma forma, configure a duração máxima da TBR como medida de segurança. Permita pelo menos 3 horas, porque a opção de desconectar a bomba por 3 horas define uma TBR de 0% por 3 horas.
     * Ative o bloqueio de teclas na bomba para evitar dar bólus pela bomba, principalmente se a bomba já era usada antes e o bólus rápido era um hábito.
     * Defina o tempo limite da tela e o tempo limite do menu no mínimo, 5,5 e 5, respectivamente. Isso permite que o AAPS se recupere mais rapidamente de situações de erro e reduz a quantidade de vibrações que podem ocorrer durante tais erros

  ![Captura de tela das configurações de menu do usuário](../images/combo/combo-menu-settings.png)

  ![Captura de tela das configurações de TBR](../images/combo/combo-tbr-settings.png)

  ![Captura de tela das configurações de bólus](../images/combo/combo-bolus-settings.png)

  ![Captura de tela das configurações de cartucho de insulina](../images/combo/combo-insulin-settings.png)

## Ativar o driver e parear com a Combo

* Abra o **menu** (☰) no canto superior esquerdo, vá para [**Configuração** > **Bomba**](../SettingUpAaps/ConfigBuilder.md) e selecione **Accu-Chek Combo**.

  ![Configuração > Bomba com o plugin Accu-Chek Combo](../images/v4/Configuration/configuration_pump_list_1.png)

  Depois de selecionado, o cartão **Accu-Chek Combo** mostra dois botões, **Configurações** e **Abrir plugin**:

  ![O plugin Accu-Chek Combo selecionado em Configuração > Bomba](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Configurações** abre as configurações do driver Accu-Chek Combo (veja [Configurações](#combov2-preferences) abaixo):

  ![Configurações do driver Accu-Chek Combo](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Abrir plugin** (ou **Gerenciar** > **Bomba**) abre a tela da bomba Accu-Chek Combo. Antes de uma bomba ser pareada, ela mostra **Não pareado com uma bomba**:

  ![Tela da bomba Accu-Chek Combo antes do pareamento](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* Na tela da bomba, toque em **Pareamento**. A tela **Parear com a bomba** abre. Siga os passos mostrados na tela e depois toque em **Iniciar pareamento**. Quando o Android pedir permissão para tornar o telefone visível para outros dispositivos Bluetooth, toque em **Permitir**. Depois de algum tempo, a Combo mostra na tela um PIN de pareamento de 10 dígitos, e o **AAPS** pede esse PIN. Digite esse PIN no campo **PIN de 10 dígitos**.

  ![A tela Parear com a bomba com o botão Iniciar pareamento](../images/combo/combov2-pairing-screen-1.png)

  ![O Android pedindo para tornar o telefone visível para outros dispositivos Bluetooth](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Pareamento da Accu-Chek Combo em andamento, procurando a bomba](../images/combo/combov2-pairing-screen-2.png)

  As próximas imagens são de uma versão mais antiga do **AAPS**. Os passos e os textos são os mesmos, mas as telas são um pouco diferentes.

  ![Captura de tela da tela de pareamento da Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Captura de tela da tela de pareamento da Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Captura de tela da tela de pareamento da Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Se o PIN for digitado errado, o **AAPS** mostra **O PIN não funcionou. Verifique se houve um erro de digitação. Se isso continuar acontecendo, cancele e tente parear novamente.**

  ![Captura de tela da tela de pareamento da Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Quando aparecer **Pareamento com a Bomba Accu-Chek Combo realizado com sucesso!**, toque em **OK**. Você volta para a tela da bomba, que agora mostra o status da bomba (veja [Conteúdo da tela da bomba Accu-Chek Combo](#combov2-tab-contents) abaixo). O botão **Pareamento** é substituído por **Desfazer pareamento**.

* Para verificar a sua configuração (com a bomba **desconectada** de qualquer cânula, por segurança!), use o AAPS para definir uma TBR de 500% por 15 min e dê um bólus. Agora a bomba deve ter uma TBR em andamento e o bólus no histórico. O AAPS também deve mostrar a TBR ativa e o bólus administrado.

* Na Combo, recomenda-se ativar o bloqueio de teclas para evitar dar bólus pela bomba, principalmente se a bomba já era usada antes e usar a função "bólus rápido" era um hábito.

## Notas sobre o pareamento

A Accu-Chek Combo foi desenvolvida antes do lançamento do Bluetooth 4.0 e apenas um ano depois do lançamento da primeira versão do Android. Por isso, a forma como ela pareia com outros dispositivos não é 100% compatível com a forma como isso é feito no Android hoje. Para resolver isso por completo, o AAPS precisaria de permissões de nível de sistema, que só estão disponíveis para apps do sistema. Esses apps são instalados no telefone pelos fabricantes - os usuários não podem instalar apps do sistema.

Por isso, o pareamento nunca vai ser 100% sem problemas. Em especial, durante o pareamento, a janela de PIN Bluetooth do Android pode aparecer por um momento e sumir sozinha. Mas, às vezes, ela fica na tela e pede um PIN de 4 dígitos. (Não confunda com o PIN de pareamento da Combo, de 10 dígitos.) Não digite nada, apenas toque em cancelar. Se o pareamento não continuar, siga as instruções na tela para tentar parear novamente.

(combov2-tab-contents)=
## Conteúdo da tela da bomba Accu-Chek Combo

Para abrir a tela da bomba, vá para **Gerenciar** > **Bomba**. Depois que uma bomba é pareada, a tela mostra as seguintes informações (os itens estão listados de cima para baixo):

![Captura de tela da tela da bomba Accu-Chek Combo com pareamento (versão mais antiga do AAPS)](../images/combo/combov2-tab-with-pairing.png)

1. **Estado do driver**: O driver pode estar em um dos seguintes estados:
   - **Desconectado**: Não há conexão Bluetooth; o driver fica neste estado na maior parte do tempo e só se conecta à bomba quando necessário - isso economiza energia
   - **Conectando**
   - **Verificando bomba**: a bomba está conectada, mas o driver está fazendo verificações de segurança para garantir que tudo está OK e atualizado
   - **Preparado**: o driver está pronto para aceitar comandos do AAPS
   - **Suspenso**: a bomba está suspensa (mostrado como "stopped" na Combo)
   - Uma descrição do comando em execução, por exemplo **Configurando perfil basal** ou **Atualizando status da bomba**
   - **Erro**: ocorreu um erro; a conexão foi encerrada e qualquer comando em andamento foi interrompido
2. **Última conexão**: Há quantos minutos o driver se conectou com sucesso à Combo; se passar de 30 minutos, este item aparece em vermelho
3. **Bateria**: Nível da bateria; a Combo só indica **Cheia**, **Baixa** ou **Vazia** e não oferece nada mais preciso (como uma porcentagem), por isso só esses três níveis são mostrados aqui
4. **Reservatório**: Quantas UI há no momento no reservatório da Combo
5. **Último Bólus**: Há quantos minutos o último bólus foi administrado; se nenhum foi administrado ainda depois que o AAPS foi iniciado, este item não aparece
6. **Basal temporária**: Detalhes sobre a basal temporária ativa no momento; se nenhuma estiver ativa, este item não aparece
7. **Taxa Basal de base**: Taxa basal de base ativa no momento ("de base" significa a taxa basal sem nenhuma TBR ativa influenciando o fator da taxa basal)
8. **Número de série**: Número de série da Combo, como informado pela bomba (corresponde ao número de série que aparece na parte de trás da Combo)
9. **Endereço Bluetooth**: O endereço Bluetooth de 6 bytes da Combo, mostrado no formato `XX:XX:XX:XX:XX:XX`

Enquanto o driver está fazendo algo (por exemplo, definindo um perfil basal), uma caixa abaixo da lista descreve a atividade atual, com uma barra de progresso fina que mostra o andamento.

A Combo pode ser operada por Bluetooth no modo _remote-terminal_ (terminal remoto) ou no modo _command_ (comando). O modo terminal remoto corresponde ao "modo de controle remoto" no medidor da Combo, que imita o LCD e os quatro botões da bomba. Alguns comandos precisam ser executados pelo driver neste modo, porque não existem no modo de comando. O modo de comando é muito mais rápido, mas, como dito, tem funções limitadas. Quando o modo terminal remoto está ativo, a tela atual do terminal remoto aparece no campo logo acima do desenho da Combo. Porém, quando o driver muda para o modo de comando, esse campo fica vazio.

(Você não influencia isso; o driver decide sozinho qual modo usar. Esta nota serve só para você saber por que às vezes aparecem telas da Combo nesse campo.)

Na parte de baixo, há estes botões:

- **Atualizar**: Faz uma atualização imediata do status da bomba. Ele também serve para avisar o AAPS que um erro encontrado antes já foi resolvido e que o AAPS pode verificar novamente se está tudo OK (mais sobre isso abaixo, na [seção sobre alertas](#combov2-alerts)). Você só pode tocar nele quando o driver está desconectado, suspenso ou no estado de erro.
- **Desfazer pareamento**: Desfaz o pareamento entre a Combo e o **AAPS** e o Android, depois que você confirma **Você realmente deseja desfazer o pareamento da bomba?**. Quando nenhuma bomba está pareada, este botão é substituído por **Pareamento**.

(combov2-preferences)=
## Configurações

Estas configurações estão disponíveis para o driver da Combo (**Configuração** > **Bomba** > **Accu-Chek Combo** > **Configurações**, ou o ícone de configurações (engrenagem) na tela da bomba). Os itens estão listados de cima para baixo:

1. **Duração da busca (em segundos)**: Durante o pareamento, o driver torna o telefone visível para a bomba. Isto controla quanto tempo essa visibilidade dura. Por padrão, o máximo (300 segundos = 5 minutos) está selecionado. O Android não permite que a visibilidade dure para sempre, por isso é preciso escolher uma duração.
2. **Detectar automaticamente e inserir alteração de reservatório de insulina**: Se ativado, o driver registra a "troca de reservatório" que normalmente você mesmo registraria com **Gerenciar** > **Purgar/Preencher**. Isso é explicado [com mais detalhes abaixo](#combov2-autodetections).
3. **Autodetectar e inserir automaticamente a mudança de bateria**: Se ativado, o driver registra a "troca de bateria" que normalmente você mesmo registraria com **Gerenciar** > **Troca de Bateria da Bomba**. Isso é explicado [com mais detalhes abaixo](#combov2-autodetections).
4. **Ativar log detalhado da Accu-Chek Combo**: Isso aumenta muito a quantidade de log gerada pelo driver. **CUIDADO**: Não ative isto, a menos que um desenvolvedor peça. Caso contrário, isso pode adicionar muito ruído aos logs do **AAPS** e torná-los menos úteis.

O pareamento e o desfazer do pareamento são feitos na tela da bomba, não nas configurações (veja acima).

(combov2-autodetections)=
## Detectar e registrar automaticamente trocas de bateria e de reservatório

O driver consegue detectar trocas de bateria e de reservatório acompanhando os níveis da bateria e do reservatório. Se a Combo informou o nível da bateria como baixo na última atualização do status da bomba e agora, na nova atualização, o nível da bateria aparece como normal, o driver conclui que o usuário trocou a bateria. A mesma lógica é usada para o nível do reservatório: se agora ele está mais alto que antes, isso é interpretado como uma troca de reservatório.

Isso só funciona se a bateria e o reservatório forem trocados quando esses níveis são informados como baixos _e_ se a bateria e o reservatório estiverem suficientemente cheios.

Essas detecções automáticas podem ser desativadas nas [configurações](#combov2-preferences) do driver.

(combov2-alerts)=
## Alertas (avisos e erros) e como eles são tratados

A Combo mostra os alertas como telas do terminal remoto. Os avisos aparecem com um código "Wx" (x é um dígito), junto com uma descrição curta. Um exemplo é "W7", "TBR OVER". Os erros são parecidos, mas aparecem com um código "Ex".

Alguns avisos são descartados automaticamente pelo driver. São eles:

- W1 "reservoir low" (reservatório baixo): o driver transforma isso em um aviso de "reservatório baixo" mostrado na tela principal do AAPS
- W2 "battery low" (bateria fraca): o driver transforma isso em um aviso de "bateria fraca" mostrado na tela principal do AAPS
- W3, W6, W7, W8 : todos são apenas informativos para o usuário, por isso é seguro o driver descartá-los automaticamente

Outros avisos _não_ são descartados automaticamente. Além disso, os erros _nunca_ são descartados automaticamente. Os dois são tratados da mesma forma: o driver mostra uma janela de alerta sobre a interface do AAPS e também interrompe qualquer comando em execução. Então o driver muda para o estado de "erro" (veja [o conteúdo da tela da bomba Accu-Chek Combo acima](#combov2-tab-contents)). Neste estado, nenhum comando pode ser executado. O usuário precisa resolver o erro na bomba; por exemplo, um erro de oclusão pode exigir a troca da cânula. Depois que o usuário resolver o erro, a operação normal pode continuar tocando em **Atualizar** na tela da bomba Accu-Chek Combo. Em seguida, o driver se conecta à Combo e atualiza o status dela, verificando, por exemplo, se ainda há um erro na tela. Além disso, o driver atualiza automaticamente o status da bomba depois de algum tempo, por isso não é obrigatório tocar nesse botão manualmente.

O bólus é um caso especial. Ele é feito no modo de comando da Combo, que não informa durante o bólus que um alerta apareceu. Por isso, o driver não pode descartar avisos automaticamente _durante_ um bólus. Infelizmente, isso significa que a bomba vai apitar até o fim do bólus. O alerta mais comum durante um bólus é, em geral, o W1 "reservoir low" (reservatório baixo). **Não** descarte manualmente os avisos da Combo na própria bomba durante um bólus. Você corre o risco de interromper o bólus. O driver cuida do aviso quando o bólus terminar.

Alertas que acontecem enquanto o driver não está conectado à Combo não são percebidos pelo driver. A Combo não tem como enviar esse alerta automaticamente ao telefone; é sempre o telefone que precisa iniciar a conexão. Por isso, o alerta continua até o driver se conectar à bomba. Você pode tocar em **Atualizar** na tela da bomba para iniciar uma conexão e deixar o driver tratar o alerta na mesma hora (em vez de esperar até que o próprio AAPS decida iniciar uma conexão).

**IMPORTANTE**: Se ocorrer um erro, ou aparecer um aviso que não está entre os descartados automaticamente, o driver entra no estado de erro. Nesse estado, o loop **FICA BLOQUEADO** até que o status da bomba seja atualizado! Ele é desbloqueado depois que o status da bomba é atualizado (tocando em **Atualizar** ou pela atualização automática do driver) e nenhum erro aparece mais.

## Cuidados ao usar a Combo

* Lembre-se de que isto não é um produto. Principalmente no começo, o usuário precisa monitorar e entender o sistema, os seus limites e como ele pode falhar. Recomendamos fortemente NÃO usar este sistema se a pessoa que o usa não for capaz de entendê-lo por completo.
* Por causa da forma como funciona o controle remoto da Combo, várias operações (principalmente definir um perfil basal) são lentas em comparação com outras bombas. Esta é uma limitação da Combo que infelizmente não pode ser contornada.
* Não defina nem cancele uma TBR na bomba. O loop assume o controle das TBRs e não consegue funcionar de forma confiável de outro modo, porque não é possível saber a hora de início de uma TBR que o usuário definiu na bomba.
* Não pressione nenhum botão da bomba enquanto o AAPS se comunica com ela (o logotipo do Bluetooth aparece na bomba enquanto ela está conectada ao AAPS). Isso interrompe a conexão Bluetooth. Só faça isso se houver problemas para estabelecer uma conexão (veja [a seção "Antes de começar" acima](#combov2-before-you-begin)).
* Não pressione nenhum botão enquanto a bomba estiver administrando um bólus. Em especial, não tente descartar alertas pressionando botões. Veja [a seção sobre alertas](#combov2-alerts) para uma explicação mais detalhada do motivo.

## Lista de verificação para quando não é possível estabelecer conexão com a Combo

O driver faz o possível para se conectar à Combo e usa alguns truques para aumentar a confiabilidade. Mesmo assim, às vezes, as conexões não são estabelecidas. Aqui estão alguns passos para tentar resolver esta situação.

1. Pressione um botão na Combo. Às vezes, a pilha Bluetooth da Combo deixa de responder e não aceita mais conexões. Ao pressionar um botão na Combo e fazer o LCD mostrar algo, a pilha Bluetooth é reiniciada. Na maioria das vezes, este é o único passo necessário para resolver os problemas de conexão.
2. Reinicie o telefone. Isso pode ser necessário se houver um problema na própria pilha Bluetooth do telefone.
3. Se a tampa da bateria da Combo for velha, pense em trocá-la. Tampas de bateria velhas podem causar problemas na alimentação de energia da Combo, o que afeta o Bluetooth.
4. Se as tentativas de conexão continuarem falhando, pense em desfazer o pareamento e depois parear a bomba novamente.

(combov2-tips-for-basic-usage)=
## Dicas para o uso básico

### Como garantir um funcionamento sem problemas

* Sempre **leve o smartphone com você** e deixe-o ao lado da cama à noite. Como a bomba pode ficar atrás ou embaixo do seu corpo enquanto você dorme, uma posição mais alta (em uma prateleira ou tábua) funciona melhor.
* Sempre garanta que a bateria da bomba esteja o mais cheia possível. Veja a seção sobre a bateria para dicas sobre a bateria.
* Sempre que possível, opere a bomba só pelo app AAPS. Para facilitar isso, ative o bloqueio de teclas na bomba em **PUMP SETTINGS / KEY LOCK / ON**. Só é necessário usar as teclas da bomba ao trocar a bateria ou o cartucho.

![Bloqueio de teclas](../images/combo/combo-tips-keylock.png)

### Bomba inacessível. O que fazer?

#### Ative o alarme de bomba inacessível
* No **AAPS**, toque no ícone de **Configurações** (engrenagem) no canto superior direito da tela principal, vá para **Alertas locais**, ative **Avisar se a bomba estiver inacessível** e defina **Limite de bomba inacessível** como **31** minutos.
* Assim você tem tempo suficiente para não disparar o alarme ao sair do cômodo deixando o telefone na mesa, mas é avisado se a bomba não puder ser alcançada por um tempo maior que a duração de uma taxa basal temporária.

#### Restabelecer o acesso à bomba

* Quando o AAPS mostrar um alarme de **bomba inacessível**, primeiro libere o bloqueio de teclas e **pressione qualquer tecla da bomba** (por exemplo, o botão "para baixo"). Assim que a tela da bomba apagar, toque em **Atualizar** na tela da bomba Accu-Chek Combo (**Gerenciar** > **Bomba**). Na maioria das vezes, a comunicação volta a funcionar.
* Se isso não ajudar, reinicie o seu smartphone. Depois de reiniciar, o AAPS é reativado e uma nova conexão com a bomba é estabelecida.

* Os testes com diferentes smartphones mostraram que certos smartphones causam o erro "bomba inacessível" com mais frequência que outros. Veja [Telefones para o AAPS](#Phones-list-of-tested-phones) para os smartphones testados com sucesso.

#### Causas e consequências de erros de comunicação frequentes
* Em telefones com **pouca memória** (ou com configurações de **economia de energia agressivas**), o AAPS é encerrado com frequência. Você percebe isso porque os botões de tratamento (barra de ferramentas QuickLaunch) na tela principal não aparecem ao abrir o AAPS, porque o sistema está inicializando. Isso pode disparar "alarmes de bomba inacessível" na inicialização. No campo **Última conexão** da tela da bomba (**Gerenciar** > **Bomba**), você pode ver quando o AAPS se comunicou com a bomba pela última vez.

![Sem conexão com a bomba](../images/combo/combov2-tips-no-connection-to-pump.png)

* Este erro pode gastar a bateria da bomba mais rápido, porque o perfil basal é lido da bomba quando o app é reiniciado.
* Ele também aumenta a chance de causar o erro que faz a bomba recusar todas as conexões até que um botão da bomba seja pressionado.

### O cancelamento da taxa basal temporária falha
* Às vezes, o AAPS não consegue descartar automaticamente um alerta **TBR CANCELED**. Então você precisa tocar em **Atualizar** na tela da bomba Accu-Chek Combo ou confirmar o alarme na bomba.

### Considerações sobre a bateria da bomba

#### Troca da bateria
* Depois de um alarme de **bateria fraca**, a bateria deve ser trocada o quanto antes, para sempre ter energia suficiente para uma comunicação Bluetooth confiável com o smartphone, mesmo quando o telefone estiver mais longe da bomba.
* Mesmo depois de um alarme de **bateria fraca**, a bateria ainda pode durar bastante tempo. Mesmo assim, recomenda-se ter sempre uma bateria nova com você depois que um alarme de "bateria fraca" tocar.
* Antes de trocar a bateria, toque no símbolo do **Loop** na tela principal e selecione **Suspender loop** por 1 hora.
* Espere o telefone se comunicar com a bomba e o logotipo do Bluetooth na bomba desaparecer.

![Bluetooth ativado](../images/combo/combo-tips-compo.png)

* Libere o bloqueio de teclas da bomba, coloque a bomba no modo de parada (stop), confirme uma taxa basal temporária que possa ter sido cancelada e troque a bateria rapidamente.
* Você não precisa acertar o relógio da bomba de novo depois da troca da bateria: o AAPS atualiza automaticamente a data e a hora da bomba.
* Depois, coloque a bomba de volta no modo de funcionamento (run) e selecione **Retomar** ao tocar no ícone **Loop suspenso** na tela principal.
* O AAPS vai definir novamente uma taxa basal temporária necessária quando chegar o próximo valor de glicose.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Tipo de bateria e causas de baixa duração da bateria
* Como a comunicação Bluetooth intensa consome muita energia, use só **baterias de alta qualidade**, como Energizer Ultimate Lithium, as "power one" do kit de serviço Accu-Chek "grande" ou, se você preferir uma bateria recarregável, baterias Eneloop.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

A duração típica dos diferentes tipos de bateria é a seguinte:
* **Energizer Ultimate Lithium**: 4 a 7 semanas
* **Power One Alkaline** (Varta) do kit de serviço: 2 a 4 semanas
* Baterias **recarregáveis Eneloop** (BK-3MCCE): 1 a 3 semanas

Se a duração da sua bateria for bem menor que os valores acima, verifique as seguintes causas possíveis:
* Existem algumas versões da tampa de rosca da bateria da bomba Combo que causam um curto-circuito parcial nas baterias e as descarregam rápido. As tampas sem esse problema podem ser reconhecidas pelos contatos metálicos dourados.
* Se o relógio da bomba não "sobrevive" a uma troca rápida de bateria, provavelmente o capacitor que mantém o relógio funcionando durante uma breve falta de energia está quebrado. Nesse caso, a troca da bomba pela Roche pode ajudar, o que não é problema durante o período de garantia.
* O hardware e o software do smartphone (sistema operacional Android e pilha Bluetooth) também influenciam a duração da bateria da bomba, embora os fatores exatos ainda não sejam totalmente conhecidos. Se você tiver a oportunidade, teste outro smartphone e compare a duração das baterias.

### Bólus estendido, bólus multionda
O algoritmo OpenAPS não suporta um bólus estendido ou bólus multionda em paralelo. Mas um tratamento parecido pode ser feito com as seguintes alternativas:
* Use **eCarbs** ao inserir carboidratos ou ao usar o Assistente de Bólus, informando os carboidratos da refeição inteira e o tempo que você espera que esses carboidratos levem para chegar como glicose no seu sangue. O sistema então calcula pequenas quantidades de carboidratos distribuídas por igual ao longo de toda a duração, o que faz o algoritmo administrar uma dose de insulina equivalente, enquanto continua verificando a subida/descida geral da glicose. Para algo parecido com um bólus multionda, você também pode combinar um bólus imediato menor com eCarbs.
* Before eating, set a temporary **Eating Soon** target of 80 mg/dL (4.4 mmol/L) for several hours (press the target on the main screen, or **Manage** > **Temp Target**). A duração deve se basear no intervalo que você escolheria para um bólus estendido. Assim o seu alvo fica mais baixo que o normal e, por isso, a quantidade de insulina administrada aumenta.
* Depois, use o **Assistente de Bólus** para inserir todos os carboidratos da refeição, mas não aplique diretamente os valores que ele sugere. Se quiser um bólus parecido com o multionda, reduza a dose de insulina. Dependendo da refeição, o algoritmo então precisa administrar SMBs adicionais ou taxas basais temporárias mais altas para compensar a subida da glicose. Aqui, você deve testar com muito cuidado os limites de segurança da taxa basal (Max U/h, Maximum basal IOB) e, se necessário, mudá-los temporariamente.

* Não use o bólus estendido ou multionda diretamente na bomba. O driver não os suporta (veja [Antes de começar](#combov2-before-you-begin)); se mesmo assim um bólus multionda for dado na bomba, o **AAPS** o registra a partir do histórico da bomba como um bólus normal mais um bólus estendido, para que ele seja contado no IOB. Um bólus estendido não funciona em um loop fechado (veja [esta página](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) para mais detalhes).

### Alarmes na administração de bólus
* Depois de cada bólus, o driver lê o histórico de bólus da bomba. Este é um mecanismo de segurança para calcular corretamente a insulina ativa (IOB), mesmo quando um bólus é administrado diretamente pela bomba.
* Antes de um bólus, se o histórico da bomba tiver um bólus que o **AAPS** não conhecia (por exemplo, um bólus dado diretamente na bomba), o bólus solicitado **não é administrado**, porque foi calculado sem essa insulina. O **AAPS** mostra **O histórico da bomba tem um bólus que o AAPS não conhecia. O bólus solicitado não foi administrado...** Verifique o histórico de bólus na bomba e o seu IOB. Se ainda for necessário um bólus, calcule-o novamente. Isso também vale quando o bólus desconhecido é encontrado em uma nova conexão.
* Se o bólus foi administrado, mas o histórico da bomba também tinha outros bólus que o **AAPS** não conhecia, eles são registrados agora e o **AAPS** pede que você verifique o IOB antes do próximo bólus.
* Se a conexão com a bomba for perdida **durante** um bólus, o **AAPS** não registra 0 U: ele mostra quanto a bomba tinha administrado até então e avisa que a bomba ainda pode administrar o restante. **Não dê outro bólus.** O **AAPS** lê a quantidade real no histórico da bomba na próxima conexão.
* Se a conexão for perdida enquanto o **AAPS** envia o bólus, não se sabe se a bomba o recebeu. Verifique o histórico de bólus na bomba antes do próximo bólus.
* Se o **AAPS** não conseguir confirmar que um bólus foi administrado, ele mostra **A administração do bólus falhou. Nenhum bólus parece ter sido administrado. Para evitar uma dupla administração do bólus, por favor verifique a informação de bólus na bomba e se preciso administre o bólus novamente.** Os bólus nunca são repetidos automaticamente.

## Onde obter ajuda

O desenvolvimento do driver da Combo é feito pela comunidade, de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a seção correspondente desta documentação para confirmar como a função deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Informe um bug** procurando nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu celular, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).
