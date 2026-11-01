# Bombas Medtronic

O controlador não funciona com nenhum modelo mais recente, incluindo todos os modelos que terminam em G (530G, série 600 [630G, 640G, 670G], série 700 [770G, 780G], etc.).

As seguintes combinações de modelo e firmware são compatíveis:

- 512/712 (qualquer versão de firmware)
- 515/715 (qualquer versão de firmware)
- 522/722 (qualquer versão de firmware)
- 523/723 (firmware 2.4A ou inferior)
- 554/754 versão europeia (firmware 2.6A ou inferior)
- 554/754 versão Canadá (firmware 2.7A ou inferior)

Pode ver como verificar o firmware das bombas na [documentação do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) ou na [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Índice
    :depth: 1
    :local: true

## Funções da bomba com o AAPS

* Exige um dispositivo compatível com o RileyLink para comunicar com o **AAPS**.
* Tratamento automático da hora de verão e do fuso horário.

## Requisitos de hardware e software

- **Telefone:** O controlador Medtronic deve funcionar com qualquer telefone Android que suporte ligações Bluetooth. **IMPORTANTE: A implementação do Bluetooth varia entre fabricantes de telefones, por isso cada modelo de telefone pode comportar-se de forma diferente. Por exemplo, alguns telefones tratam de forma diferente a ativação/desativação do Bluetooth. Isto pode afetar a experiência do utilizador quando o AAPS tem de voltar a ligar-se ao seu dispositivo do tipo Rileylink.**
- **Dispositivo compatível com o RileyLink:** Os telefones Android não conseguem comunicar com as bombas Medtronic sem um dispositivo separado que trate da comunicação. Este dispositivo liga-se ao seu telefone por Bluetooth e à sua bomba por uma ligação de rádio compatível. O primeiro destes dispositivos chamava-se Rileylink, mas agora existem várias outras opções que podem oferecer funções adicionais.
    
    - Rileylink disponível em [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink disponível em [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (vários modelos) disponível em [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (exige algum trabalho DIY adicional): detalhes em [github.com](https://github.com/ecc1/gnarl)

Pode encontrar uma tabela comparativa dos vários dispositivos compatíveis com o Rileylink em [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuração da bomba

As definições seguintes devem ser configuradas na bomba para que o AAPS possa enviar comandos remotamente. Para cada definição, os passos necessários numa Medtronic 715 são indicados entre parênteses. Os passos exatos podem variar conforme o modelo da bomba e/ou a versão do firmware.

- **Ativar o modo remoto na bomba** (Na bomba, prima Act e vá a Utilities -> Remote Options, selecione On e, no ecrã seguinte, use Add ID e adicione um ID qualquer, por exemplo 111111). Tem de existir pelo menos um ID na lista Remote ID para que a bomba aceite comunicação remota.
- **Definir a basal máxima** (Na bomba, prima Act e vá a Basal e depois selecione Max Basal Rate). Por exemplo, definir este valor como quatro vezes a sua taxa basal normal máxima permite uma basal temporária de 400 %. O valor máximo permitido pela bomba é 34,9 unidades por hora.
- **Definir o bólus máximo** (Na bomba, prima Act e vá a Bolus e depois selecione Max Bolus). É o maior bólus que a bomba aceita. O valor máximo permitido pela bomba é 25.
- **Definir o perfil como Standard**. (Na bomba, prima Act e vá a Basal e depois Select Patterns) A bomba só precisa de um perfil, porque o AAPS gere os diferentes perfis no seu telefone. Não são necessários outros padrões.
- **Definir o tipo de basal temporária** (Na bomba, prima Act e vá a Basal e depois Temp Basal Type). Selecione Absolute (não Percent).

## Configuração do telefone/AAPS para a Medtronic

- **Não emparelhe o dispositivo compatível com o RileyLink no menu Bluetooth do seu telefone.** O emparelhamento no menu Bluetooth do telefone impede o AAPS de ver o seu dispositivo compatível com o Rileylink quando seguir as instruções abaixo.
- Desative a rotação automática do ecrã no seu telefone. Em alguns dispositivos, a rotação automática do ecrã faz reiniciar as sessões Bluetooth, o que causa problemas com a sua bomba Medtronic. 
- Há duas formas de configurar a sua bomba Medtronic no AAPS:

1. Usar o assistente de configuração numa instalação nova
2. Em **Configuração** > **Bomba**, selecionando **Medtronic**
    
    ![Configuração > Bomba com o plugin Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Depois de selecionado, o cartão **Medtronic** mostra dois botões, **Definições** e **Abrir plugin**:
    
    ![O plugin Medtronic selecionado em Configuração > Bomba](../images/v4/Pumps/medtronic_enabled.png)
    
    **Definições** abre as definições do controlador Medtronic:
    
    ![Definições do controlador Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Abrir plugin** (ou **Gerir** > **Bomba**) abre o ecrã da bomba Medtronic. Antes de a bomba ser emparelhada, o ecrã tem este aspeto:
    
    ![Ecrã da bomba Medtronic antes do emparelhamento](../images/v4/Pumps/medtronic_pump_screen.png)

Ao configurar a sua bomba Medtronic com o assistente de configuração, pode não conseguir concluir a configuração por causa de problemas de Bluetooth (por exemplo, não consegue ligar-se à bomba). Se isto acontecer, selecione a opção de bomba virtual para concluir a configuração e permitir resolver o problema mais tarde com a opção 2.

Ao configurar o AAPS para funcionar com a sua bomba Medtronic, tem de definir os seguintes itens em **Definições** (ver a imagem das definições acima):

- **Número de série da Bomba**: Está indicado na parte de trás da sua bomba e começa por SN. Introduza apenas os 6 algarismos indicados, sem letras (por exemplo, 123456).
- **Modelo de Bomba**: O modelo da bomba que usa (por exemplo, 522). 
- **Frequência da Bomba**: Há duas opções, conforme a região onde a sua bomba foi distribuída originalmente. Consulte as [Perguntas frequentes](#MedtronicPump-faq) se não tiver a certeza da opção a selecionar): 
    - para EUA e Canadá, a frequência usada é 916 MHz
    - para Mundial, a frequência usada é 868 MHz
- **Basal Máxima na Bomba (U/h)**: Tem de ser igual ao valor definido na sua bomba (ver Configuração da bomba acima). Mais uma vez, esta definição deve ser escolhida com cuidado, porque determina quanto o AAPS pode administrar através da taxa basal. Na prática, isto define a taxa basal temporária máxima. Por exemplo, definir este valor como quatro vezes a sua taxa basal normal máxima permite uma basal temporária de 400 %. O valor máximo permitido pela bomba é 34,9 unidades por hora.
- **Bólus Máximo na Bomba (U)** (numa hora): Tem de ser igual ao valor definido na sua bomba (ver Configuração da bomba acima). Esta definição deve ser bem pensada, porque determina o tamanho máximo de um bólus que o AAPS pode alguma vez definir.
- **Tempo de espera para iniciar Bólus (s)**: O número de segundos entre a ordem de um bólus e o envio real do comando para a bomba. Este tempo permite ao utilizador cancelar o bólus caso um comando de bólus tenha sido enviado por engano. Não é possível cancelar pelo AAPS um bólus que já começou. A única forma de cancelar um bólus que já começou é suspender a bomba manualmente e depois retomá-la.
- **Codificação Medtronic**: Define onde é feita a codificação Medtronic. É preferível selecionar a codificação por hardware (ou seja, feita pelo dispositivo compatível com o Rileylink), porque assim são enviados menos dados. Selecionar a codificação por software (ou seja, feita pelo AAPS) pode ajudar se houver muitas desconexões. Esta definição é ignorada se o seu dispositivo Rileylink tiver a versão de firmware 0.x.
- **Tipo de Bateria (Visualização Detalhada)**: Para determinar corretamente o nível restante da bateria, deve selecionar o tipo de pilha AAA que usa. Quando é selecionado um valor diferente de «Visualização simples», o AAPS mostra a percentagem e a tensão (volts) restantes calculadas da bateria. Estão disponíveis as seguintes opções:
    
    - Não selecionado (Visualização simples)
    - Alcalina (Visualização estendida)
    - Lítio (Visualização estendida)
    - NiZn (Visualização estendida)
    - NiMH (Visualização estendida)
- **Usar Pesquisa**: Ativa a pesquisa Bluetooth antes de ligar aos seus dispositivos compatíveis com o Rileylink. Isto deve melhorar a fiabilidade da ligação ao dispositivo.

- **Mostrar o nível de bateria reportada pelo OrangeLink/EmaLink/DiaLink**: Esta função só é suportada em dispositivos mais recentes, como o EmaLink ou o OrangeLink. O valor aparece como **Bateria RileyLink** no ecrã da bomba Medtronic.
- **Definir basais temporárias neutras**: Por defeito, as bombas Medtronic emitem um bip a cada hora certa quando está ativa uma basal temporária. Ativar esta opção pode reduzir o número de bips, porque interrompe a basal temporária na mudança de hora para evitar o bip.

(pairing-your-rileylink-compatible-device)=

### Emparelhar o seu dispositivo compatível com o RileyLink

O seu dispositivo compatível com o RileyLink é emparelhado a partir do ecrã da bomba Medtronic, e não no menu Bluetooth do seu telefone:

- Abra o ecrã da bomba (**Gerir** > **Bomba**, ou **Abrir plugin** no cartão Medtronic em **Configuração** > **Bomba**).
- Toque em **Emparelhar RileyLink**. O **AAPS** procura dispositivos compatíveis com o RileyLink que estejam por perto.
- Toque no seu dispositivo na lista. Quando aparecer **RileyLink emparelhado com sucesso**, toque em **OK**.

## Ecrã da bomba Medtronic

Para abrir o ecrã da bomba Medtronic, vá a **Gerir** > **Bomba**. O ecrã da bomba mostra informações sobre o estado atual da bomba e algumas ações específicas da Medtronic (ver a imagem do ecrã da bomba acima).

- **Estado do RileyLink**: O estado atual da ligação entre o seu telefone e o dispositivo compatível com o Rileylink. Deve mostrar sempre «Ligado». Qualquer outro estado pode exigir uma ação do utilizador. 
- **Bateria RileyLink**: O nível atual da bateria do seu dispositivo EmaLink ou OrangeLink. Só aparece se **Mostrar o nível de bateria reportada pelo OrangeLink/EmaLink/DiaLink** estiver ativado nas definições da Medtronic.
- **Estado da Bomba**: O estado atual da ligação à bomba. Como a bomba não está sempre ligada, aqui aparece sobretudo o ícone de repouso. Há vários outros estados possíveis, incluindo «A acordar» quando o AAPS está a tentar enviar um comando, ou outros comandos da bomba, como «Obter Hora», «Definir basal temporária», etc.
- **Bateria**: Mostra o estado da bateria com base no valor escolhido em **Tipo de Bateria (Visualização Detalhada)** nas definições da Medtronic.
- **Última ligação**: Há quanto tempo foi feita a última ligação bem-sucedida à bomba.
- **Último Bólus**: Há quanto tempo foi administrado o último bólus bem-sucedido.
- **Taxa Basal do Perfil**: É a taxa basal que corre na bomba nesta hora, segundo o seu perfil ativo.
- **Basal temporária**: A basal temporária que está a ser administrada; pode ser 0 unidades por hora.
- **Reservatório**: Quantidade de insulina no reservatório (atualizada no mínimo a cada hora).
- **Erros**: Mensagem de erro, se houver um problema (aparece sobretudo quando há um erro na configuração).

Na parte de baixo do ecrã existem estes botões:

- **Atualizar** serve para atualizar o estado atual da bomba. Só deve ser usado se a ligação se perdeu durante muito tempo, porque exige uma atualização completa dos dados (ler o histórico, obter/definir a hora, obter o perfil, obter o estado da bateria, etc.).
- **Emparelhar RileyLink**: Encontra e emparelha o seu dispositivo compatível com o RileyLink (ver [acima](#pairing-your-rileylink-compatible-device)).
- **Histórico da Bomba**: Mostra o histórico da bomba (ver [abaixo](#MedtronicPump-pump-history)).
- **Estatísticas RL**: Mostra as estatísticas RL (ver [abaixo](#MedtronicPump-rl-status-rileylink-status)).
- **Acordar e Sintonizar** e **Repor RileyLink**: Ver [Ações](#medtronic-actions) abaixo.
- **Limpar Bloqueio de Bólus**: Só aparece durante pouco tempo depois de um bólus, enquanto o **AAPS** espera que a bomba termine de o administrar. Tocar neste botão termina esta espera.

(MedtronicPump-pump-history)=

## Histórico da Bomba

![Ecrã do histórico da bomba com os botões de filtro](../images/Medtronic03.png)

O histórico da bomba é lido a cada 5 minutos e guardado localmente. Só é guardado o histórico das últimas 24 horas. Permite ver de forma prática o comportamento da bomba, se for necessário. Só são guardadas as entradas relevantes para o AAPS; não são incluídas funções de configuração sem relevância.

Toque em **Histórico da Bomba** no ecrã da bomba para o abrir. Por defeito está selecionado **Tudo**. Toque num dos botões de filtro no topo (por exemplo **Bólus**, **Basais** ou **Alarmes**) para mostrar só um tipo de entrada.

(MedtronicPump-rl-status-rileylink-status)=

## Estatísticas RL (Estado do RileyLink)

![Estado do RileyLink - Definições](../images/Medtronic04.png) ![Estado do RileyLink - Histórico](../images/Medtronic05.png)

A janela Estatísticas RL tem dois separadores:

- **Definições**: Mostra as definições do dispositivo compatível com o RileyLink: Endereço configurado, Dispositivo ligado, Estado de Ligação, Erro de Ligação e versões do firmware do RileyLink. Tipo de dispositivo é sempre Bomba Medtronic, Modelo é o seu modelo, Número de Série é o número de série configurado, Frequência da Bomba mostra a frequência que usa, Última Frequência Usada é a última frequência usada.
- **Histórico**: Mostra o histórico da comunicação; as entradas RileyLink mostram as mudanças de estado do RileyLink e as entradas Medtronic mostram os comandos enviados para a bomba.

(medtronic-actions)=

## Ações

Quando é usado o controlador Medtronic, existem duas ações adicionais no ecrã da bomba (**Gerir** > **Bomba**):

- **Acordar e Sintonizar** - Se o AAPS não se ligar à sua bomba durante muito tempo (deve ligar-se a cada 5 minutos), pode forçar uma sintonização. Tenta contactar a sua bomba, procurando em todas as frequências de rádio que a bomba pode usar. Quando a ligação é bem-sucedida, a frequência que funcionou fica definida como predefinida. Enquanto a sintonização decorre, o estado do RileyLink no ecrã da bomba mostra-o. Se uma sintonização falhar (por exemplo, porque a bomba estava fora de alcance), o **AAPS** tenta de novo sozinho cerca de 10 em 10 minutos.
- **Repor RileyLink** - Se reiniciar o seu dispositivo compatível com o RileyLink, pode ter de usar esta ação para que o dispositivo seja configurado de novo (definir a frequência, o tipo de frequência e a codificação).

## Notas importantes

### É preciso especial atenção na configuração do NS

O AAPS usa o número de série para a sincronização e o número de série fica visível no NS. Como o número de série de uma bomba Medtronic antiga pode ser usado para controlar a bomba remotamente, tenha especial cuidado em proteger o seu site NS, para impedir a fuga do número de série da sua bomba. Ver https://nightscout.github.io/nightscout/security/

### Utilizadores de OpenAPS

Os utilizadores do OpenAPS devem saber que o AAPS com a Medtronic usa uma abordagem completamente diferente da do OpenAPS. Com o AAPS, a principal forma de interagir com a bomba é através do seu telefone. No uso normal, é provável que só precise de usar o menu da bomba para mudar o reservatório. Isto é muito diferente do OpenAPS, onde pelo menos parte de um bólus é normalmente administrada com os botões de bólus rápido. Se a bomba for usada para administrar um bólus manualmente, podem surgir problemas se o AAPS tentar administrar um ao mesmo tempo. Há verificações para tentar evitar problemas nestes casos, mas isto deve ser evitado sempre que possível.

### Registo

Se precisar de resolver problemas com o funcionamento da sua bomba Medtronic, selecione o ícone do menu no canto superior esquerdo do ecrã e selecione Manutenção e Definições de registo. Para resolver problemas com a Medtronic, deve verificar Pump, PumpComm e PumpBTComm.

### CGM Medtronic

O CGM Medtronic NÃO é suportado de momento.

### Uso manual da bomba

Evite dar bólus ou definir basais temporárias manualmente na bomba. Todos estes comandos devem ser enviados pelo AAPS. Se forem usados comandos manuais, tem de haver um intervalo de pelo menos 3 minutos entre eles, para reduzir o risco de problemas.

### Mudanças de fuso horário e hora de verão (DST) ou viajar com a bomba Medtronic e o AAPS

O AAPS deteta automaticamente as mudanças de fuso horário e atualiza a hora da bomba quando o seu telefone muda para a nova hora.

Viajar para leste significa que vai adicionar horas à hora atual (por ex. de GMT+0 para GMT+2), o que não causa problemas, porque não há sobreposição (ou seja, não é possível ter a mesma hora duas vezes). Viajar para oeste, no entanto, pode causar problemas, porque na prática está a voltar atrás no tempo, o que pode resultar em dados de IA incorretos.

Os problemas ao viajar para oeste são conhecidos pelos programadores e está a ser procurada uma solução. Ver https://github.com/andyrozman/RileyLinkAAPS/issues/145 para mais detalhes. Por agora, tenha em atenção que este problema pode acontecer e vigie com cuidado quando mudar de fuso horário.

### O GNARL é um dispositivo totalmente compatível com o Rileylink?

O código GNARL suporta totalmente todas as funções usadas pelo controlador Medtronic no AAPS, o que significa que é totalmente compatível. Note que isto exige trabalho adicional, pois tem de arranjar hardware compatível e depois carregar o código GNARL no dispositivo.

**Nota do autor:** O software GNARL ainda é experimental e pouco testado, e não deve ser considerado tão seguro de usar como um RileyLink.

(MedtronicPump-faq)=

## Perguntas frequentes (FAQ)

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### O que fazer se perder a ligação ao RileyLink e/ou à bomba?

Há várias opções para tentar resolver problemas de ligação.

- Toque em **Acordar e Sintonizar** no ecrã da bomba (**Gerir** > **Bomba**), como descrito acima.
- Desative o Bluetooth no seu telefone, espere 10 segundos e volte a ativá-lo. Isto obriga o dispositivo Rileylink a voltar a ligar-se ao telefone.
- Reinicie o dispositivo Rileylink. Depois tem de tocar em **Repor RileyLink** no ecrã da bomba (**Gerir** > **Bomba**).
- Outros utilizadores conseguiram restabelecer a ligação com os passos seguintes, quando outros métodos não resultaram: 
    1. Reinicie o telefone
    2. *Enquanto* o telefone reinicia, reinicie o dispositivo Rileylink
    3. Abra o AAPS e deixe a ligação restabelecer-se

### Como saber que frequência a minha bomba usa

![Modelo de Bomba](../images/Medtronic06.png)

Na parte de trás da bomba encontra uma linha com o número do modelo e um código especial de 3 letras. As duas primeiras letras indicam o tipo de frequência e a última indica a cor. Os valores possíveis para a frequência são:

- NA - América do Norte (na seleção da frequência tem de escolher «EUA e Canadá (916 MHz)»)
- CA - Canadá (na seleção da frequência tem de escolher «EUA e Canadá (916 MHz)»)
- WW - Mundial (na seleção da frequência tem de escolher «Mundial (868 MHz)»)

(MedtronicPump-pump-unreachable)=

### Como corrigir o erro «pump unreachable» (bomba inacessível)

Algumas bombas Medtronic mostram o erro «pump unreachable» (bomba inacessível) depois de uma atualização do **AAPS**. Para o corrigir, mude o tipo de codificação:

1. Vá a **Configuração** > **Bomba** e toque em **Definições** no cartão **Medtronic**.
2. Defina **Codificação Medtronic** como **Codificação 4b6b por hardware**.

## Onde obter ajuda

O desenvolvimento do controlador Medtronic é feito pela comunidade em regime de **voluntariado**. Antes de pedir ajuda:

1. **Leia** a secção relevante desta documentação para confirmar como a funcionalidade deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou num dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Comunique um erro**: procure primeiro nos [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo problema](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [ficheiros de registo](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, indique a marca e o modelo do telefone, a versão do Android, a versão do **AAPS** e uma descrição clara do problema (o que mudou, quando funcionou pela última vez).