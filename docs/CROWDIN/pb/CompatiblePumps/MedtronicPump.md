# Bombas Medtronic

O driver não funciona com modelos mais novos, incluindo todos os modelos que terminam em G (530G, série 600 [630G, 640G, 670G], série 700 [770G, 780G] etc.).

As seguintes combinações de modelo e firmware são compatíveis:

- 512/712 (qualquer versão de firmware)
- 515/715 (qualquer versão de firmware)
- 522/722 (qualquer versão de firmware)
- 523/723 (firmware 2.4A ou inferior)
- 554/754 versão europeia (firmware 2.6A ou inferior)
- 554/754 versão canadense (firmware 2.7A ou inferior)

Você pode ver como verificar o firmware das bombas na [documentação do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) ou na [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Índice
    :depth: 1
    :local: true

## Recursos da bomba com o AAPS

* Requer um dispositivo compatível com RileyLink para se comunicar com o **AAPS**.
* Tratamento automático do horário de verão (DST) e do fuso horário.

## Requisitos de hardware e software

- **Telefone:** O driver Medtronic deve funcionar com qualquer telefone Android que tenha suporte a conexões Bluetooth. **IMPORTANTE: A implementação do Bluetooth muda de um fabricante de telefone para outro, por isso o comportamento de cada modelo de telefone pode ser diferente. Por exemplo, alguns telefones tratam a ativação/desativação do Bluetooth de forma diferente. Isso pode afetar a experiência do usuário quando o AAPS precisa se reconectar ao seu dispositivo do tipo Rileylink.**
- **Dispositivo compatível com RileyLink:** Telefones Android não conseguem se comunicar com bombas Medtronic sem um dispositivo separado que faça a comunicação. Este dispositivo se conecta ao seu telefone por Bluetooth e à sua bomba por uma conexão de rádio compatível. O primeiro dispositivo deste tipo se chamava Rileylink, mas hoje existem várias outras opções, que podem oferecer funções extras.
    
    - Rileylink disponível em [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink disponível em [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (vários modelos) disponível em [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (exige um pouco mais de trabalho DIY): detalhes em [github.com](https://github.com/ecc1/gnarl)

Uma tabela que compara os vários dispositivos compatíveis com Rileylink está em [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuração da bomba

As seguintes configurações devem ser feitas na bomba para que o AAPS possa enviar comandos remotamente. Os passos para fazer cada mudança em uma Medtronic 715 aparecem entre parênteses em cada configuração. Os passos exatos podem variar conforme o tipo de bomba e/ou a versão do firmware.

- **Ative o modo remoto na bomba** (na bomba, pressione Act e vá em Utilities -> Remote Options, selecione On e, na tela seguinte, use Add ID e adicione qualquer ID aleatório, por exemplo 111111). Pelo menos um ID deve estar na lista de IDs remotos (Remote ID) para que a bomba aceite comunicação remota.
- **Defina a basal máxima** (na bomba, pressione Act e vá em Basal e depois selecione Max Basal Rate). Por exemplo, definir este valor como quatro vezes a sua maior taxa basal padrão permite uma taxa basal temporária de 400%. O valor máximo permitido pela bomba é 34,9 unidades por hora.
- **Defina o bólus máximo** (na bomba, pressione Act e vá em Bolus e depois selecione Max Bolus). Este é o maior bólus que a bomba vai aceitar. O valor máximo permitido pela bomba é 25.
- **Defina o perfil como Standard**. (Na bomba, pressione Act e vá em Basal e depois em Select Patterns) A bomba só precisa de um perfil, pois o AAPS gerencia os diferentes perfis no seu telefone. Nenhum outro padrão (pattern) é necessário.
- **Defina o tipo de taxa basal temporária** (na bomba, pressione Act e vá em Basal e depois em Temp Basal Type). Selecione Absolute (não Percent).

## Configuração Medtronic no telefone/AAPS

- **Não pareie o dispositivo compatível com RileyLink pelo menu Bluetooth do seu telefone.** Parear pelo menu Bluetooth do telefone impede que o AAPS encontre o seu dispositivo compatível com Rileylink quando você seguir as instruções abaixo.
- Desative a rotação automática da tela no seu telefone. Em alguns aparelhos, a rotação automática da tela faz as sessões Bluetooth reiniciarem, o que causa problemas com a sua bomba Medtronic. 
- Há duas formas de configurar a sua bomba Medtronic no AAPS:

1. Usando o assistente de configuração em uma instalação nova
2. Em **Configuração** > **Bomba**, selecionando **Medtronic**
    
    ![Configuração > Bomba com o plugin Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Depois de selecionado, o cartão **Medtronic** mostra dois botões, **Configurações** e **Abrir plugin**:
    
    ![O plugin Medtronic selecionado em Configuração > Bomba](../images/v4/Pumps/medtronic_enabled.png)
    
    **Configurações** abre as configurações do driver Medtronic:
    
    ![Configurações do driver Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Abrir plugin** (ou **Gerenciar** > **Bomba**) abre a tela da bomba Medtronic. Antes de a bomba ser pareada, ela fica assim:
    
    ![Tela da bomba Medtronic antes do pareamento](../images/v4/Pumps/medtronic_pump_screen.png)

Ao configurar a sua bomba Medtronic com o assistente de configuração, pode acontecer que você não consiga concluir a configuração por causa de problemas com o Bluetooth (por exemplo, não consegue se conectar à bomba). Se isso acontecer, selecione a opção de bomba virtual para concluir a configuração e permitir mais análise de problemas usando a opção 2.

Ao configurar o AAPS para funcionar com a sua bomba Medtronic, você precisa definir os seguintes itens em **Configurações** (veja a imagem das configurações acima):

- **Número de série da Bomba**: Aparece na parte de trás da sua bomba e começa com SN. Digite somente os 6 números mostrados, sem nenhuma letra (por exemplo, 123456).
- **Tipo de Bomba**: O modelo de bomba que você usa (por exemplo, 522). 
- **Frequência da Bomba**: Há duas opções, conforme o local onde a sua bomba foi distribuída originalmente. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select: 
    - para EUA e Canadá, a frequência usada é 916 MHz
    - para o resto do mundo, a frequência usada é 868 MHz
- **Máxima Basal na Bomba (U/h)**: Deve ser igual ao valor definido na sua bomba (veja Configuração da bomba acima). Mais uma vez, escolha este valor com cuidado, pois ele define quanto o AAPS pode administrar pela sua taxa basal. Na prática, isso define a taxa basal temporária máxima. Por exemplo, definir este valor como quatro vezes a sua maior taxa basal padrão permite uma taxa basal temporária de 400%. O valor máximo permitido pela bomba é 34,9 unidades por hora.
- **Bólus máximo na bomba (U)** (em uma hora): Deve ser igual ao valor definido na sua bomba (veja Configuração da bomba acima). Pense bem neste valor, pois ele define o maior bólus que o AAPS pode definir.
- **Atraso antes que o Bólus seja iniciado (s)**: O número de segundos entre o pedido de um bólus e o envio real do comando para a bomba. Esse tempo permite que o usuário cancele o bólus caso um comando de bólus tenha sido enviado por engano. Não é possível cancelar pelo AAPS um bólus que já começou. A única forma de cancelar um bólus que já começou é suspender a bomba manualmente e depois retomá-la.
- **Medtronic Encoding**: Determines where the Medtronic encoding is carried out (hardware or software). É preferível selecionar a codificação de hardware (ou seja, feita pelo dispositivo compatível com Rileylink), pois assim menos dados são enviados. Selecionar a codificação de software (ou seja, feita pelo AAPS) pode ajudar caso ocorram desconexões frequentes. Esta configuração será ignorada se os seus dispositivos Rileylink tiverem a versão de firmware 0.x.
- **Tipo de Bateria (Visão Detalhada)**: Para calcular corretamente o nível restante da bateria, selecione o tipo de pilha AAA que você usa. Quando um valor diferente da visão simples é selecionado, o AAPS mostra o percentual calculado de bateria restante e a tensão (volts). As seguintes opções estão disponíveis:
    
    - Não selecionado (Visão simples)
    - Alcalina (Visão estendida)
    - Lítio (Visão estendida)
    - NiZn (Visão estendida)
    - NiMH (Visão estendida)
- **Usar escaneamento**: Ativa a busca por Bluetooth antes de conectar aos seus dispositivos compatíveis com Rileylink. Isso deve melhorar a confiabilidade da conexão com o dispositivo.

- **Mostrar o nível da bateria reportada por OrangeLink/EmaLink/DiaLink**: Esta função só funciona com dispositivos link mais novos, como o EmaLink ou o OrangeLink. O valor aparece como **Bateria RileyLink** na tela da bomba Medtronic.
- **Definir as basais temporárias neutras**: Por padrão, as bombas Medtronic apitam a cada hora cheia quando uma taxa basal temporária está ativa. Ativar esta opção pode reduzir o número de bipes, pois interrompe a basal temporária na mudança de hora para evitar o bipe.

(pairing-your-rileylink-compatible-device)=

### Parear o seu dispositivo compatível com RileyLink

O seu dispositivo compatível com RileyLink é pareado pela tela da bomba Medtronic, não pelo menu Bluetooth do seu telefone:

- Abra a tela da bomba (**Gerenciar** > **Bomba**, ou **Abrir plugin** no cartão Medtronic em **Configuração** > **Bomba**).
- Toque em **Parear RileyLink**. O **AAPS** procura dispositivos compatíveis com RileyLink por perto.
- Toque no seu dispositivo na lista. Quando aparecer **RileyLink pareado com sucesso**, toque em **OK**.

## Tela da bomba Medtronic

Para abrir a tela da bomba Medtronic, vá em **Gerenciar** > **Bomba**. A tela da bomba mostra as informações atuais de status da bomba e algumas ações específicas da Medtronic (veja a imagem da tela da bomba acima).

- **Status do RileyLink**: O status atual da conexão entre o seu telefone e o dispositivo compatível com Rileylink. Ele deve mostrar Conectado o tempo todo. Qualquer outro status pode exigir uma ação do usuário. 
- **Bateria RileyLink**: O nível atual da bateria do seu EmaLink ou OrangeLink. Só aparece se **Mostrar o nível da bateria reportada por OrangeLink/EmaLink/DiaLink** estiver ativado nas configurações da Medtronic.
- **Status da bomba**: O status atual da conexão com a bomba. Como a bomba não fica conectada o tempo todo, aqui aparece principalmente o ícone de sono. Há vários outros status possíveis, incluindo "Acordando" quando o AAPS está tentando enviar um comando, ou outros comandos da bomba, como "Obter horário", "Definir TBR" etc.
- **Bateria**: Mostra o status da bateria com base no valor escolhido em **Tipo de Bateria (Visão Detalhada)** nas configurações da Medtronic.
- **Última conexão**: Há quanto tempo aconteceu a última conexão bem-sucedida com a bomba.
- **Último Bólus**: Há quanto tempo o último bólus foi administrado com sucesso.
- **Taxa Basal de base**: É a taxa basal de base que roda na bomba nesta hora, conforme o seu perfil ativo.
- **Basal temporária**: A basal temporária que está sendo administrada agora, que pode ser de 0 unidades por hora.
- **Reservatório**: Quanta insulina há no reservatório (atualizado pelo menos a cada hora).
- **Erros**: Texto de erro, se houver um problema (aparece principalmente quando há erro na configuração).

Na parte de baixo da tela há estes botões:

- **Atualizar** serve para atualizar o status atual da bomba. Use apenas se a conexão ficou perdida por muito tempo, pois isso exige uma atualização completa dos dados (ler o histórico, obter/definir a hora, obter o perfil, obter o status da bateria etc.).
- **Parear RileyLink**: Encontra e pareia o seu dispositivo compatível com RileyLink (veja [acima](#pairing-your-rileylink-compatible-device)).
- **Histórico da Bomba**: Mostra o histórico da bomba (veja [abaixo](#MedtronicPump-pump-history)).
- **Status RL**: Mostra as estatísticas do RL (veja [abaixo](#MedtronicPump-rl-status-rileylink-status)).
- **Acordar e Configurar** e **Redefinir RileyLink**: Veja [Ações](#medtronic-actions) abaixo.
- **Limpar Bloco de Bólus**: Só aparece por pouco tempo depois de um bólus, enquanto o **AAPS** espera a bomba terminar de administrá-lo. Tocar nele encerra essa espera.

(MedtronicPump-pump-history)=

## Histórico da bomba

![Tela do histórico da bomba com os botões de filtro](../images/Medtronic03.png)

O histórico da bomba é lido a cada 5 minutos e guardado localmente. Somente o histórico das últimas 24 horas é guardado. Assim você pode ver de forma prática o comportamento da bomba, se for necessário. Só são guardados os itens relevantes para o AAPS; funções de configuração sem relevância não são incluídas.

Toque em **Histórico da Bomba** na tela da bomba para abri-lo. Por padrão, **Todos** está selecionado. Toque em um dos botões de filtro no topo (por exemplo **Bólus**, **Basais** ou **Alarmes**) para mostrar só um tipo de registro.

(MedtronicPump-rl-status-rileylink-status)=

## Status RL (Status do RileyLink)

![Status do RileyLink - Configurações](../images/Medtronic04.png) ![Status do RileyLink - Histórico](../images/Medtronic05.png)

A janela Status RL tem duas abas:

- **Configurações**: Mostra as configurações do dispositivo compatível com RileyLink: endereço configurado, dispositivo conectado, status da conexão, erro de conexão e versões do firmware do RileyLink. Tipo de dispositivo é sempre Bomba Medtronic, Modelo é o seu modelo, Número de série é o número de série configurado, Frequência da Bomba mostra qual frequência você usa e Última frequência é a última frequência usada.
- **Histórico**: Mostra o histórico de comunicação. Itens com RileyLink mostram mudanças de estado do RileyLink, e itens com Medtronic mostram quais comandos foram enviados à bomba.

(medtronic-actions)=

## Ações

Quando o driver Medtronic é usado, há duas ações extras na tela da bomba (**Gerenciar** > **Bomba**):

- **Acordar e Configurar** - Se o AAPS não se conectou à sua bomba por muito tempo (ele deve se conectar a cada 5 minutos), você pode forçar um Tune Up (ajuste de frequência). Isso tenta se comunicar com a sua bomba, procurando em todas as frequências de rádio que a sua bomba pode usar. Se uma conexão for bem-sucedida, a frequência que funcionou será definida como padrão. Enquanto o ajuste (tune-up) está em andamento, o status do RileyLink na tela da bomba mostra isso. Se um ajuste (tune-up) falhar (por exemplo, porque a bomba estava fora de alcance), o **AAPS** tenta de novo sozinho mais ou menos a cada 10 minutos.
- **Redefinir RileyLink** - Se você reiniciar o seu dispositivo compatível com RileyLink, pode precisar usar esta ação para que o dispositivo seja configurado de novo (definir frequência, tipo de frequência e codificação).

## Observações importantes

### É preciso atenção especial na configuração do NS

O AAPS usa o número de série para a sincronização, e o número de série fica exposto no NS. Como quem conhece o número de série de uma bomba Medtronic antiga pode controlar a bomba remotamente, tome cuidado especial para proteger o seu site do NS e evitar o vazamento do número de série (SN) da sua bomba. Veja https://nightscout.github.io/nightscout/security/

### Usuários do OpenAPS

Usuários do OpenAPS devem notar que o AAPS com Medtronic usa uma abordagem totalmente diferente da do OpenAPS. Com o AAPS, a principal forma de interagir com a bomba é pelo seu telefone. No uso normal, é provável que você só precise usar o menu da bomba ao trocar o reservatório. Isso é bem diferente do OpenAPS, em que pelo menos parte de um bólus normalmente é administrada pelos botões de bólus rápido. Se a bomba for usada para administrar um bólus manualmente, podem ocorrer problemas se o AAPS tentar administrar outro ao mesmo tempo. Há verificações para tentar evitar problemas nesses casos, mas mesmo assim isso deve ser evitado sempre que possível.

### Logs

Se você precisar resolver problemas com a sua bomba Medtronic, selecione o ícone de menu no canto superior esquerdo da tela, depois selecione Manutenção e Configurações de logs. Para resolver qualquer problema com a Medtronic, verifique Pump, PumpComm e PumpBTComm.

### CGM Medtronic

O CGM Medtronic NÃO tem suporte no momento.

### Uso manual da bomba

Evite dar bólus ou definir TBRs manualmente na sua bomba. Todos esses comandos devem ser enviados pelo AAPS. Se forem usados comandos manuais, deve haver um intervalo de pelo menos 3 minutos entre eles, para reduzir o risco de problemas.

### Mudanças de fuso horário e horário de verão (DST) ou viagens com a bomba Medtronic e o AAPS

O AAPS detecta automaticamente mudanças de fuso horário e atualiza a hora da bomba quando o seu telefone muda para o novo horário.

Viajar para o leste significa que você vai adicionar horas ao horário atual (por ex. de GMT+0 para GMT+2), o que não causa problemas, pois não haverá sobreposição (ou seja, não é possível ter a mesma hora duas vezes). Já viajar para o oeste pode causar problemas, pois na prática você volta no tempo, o que pode gerar dados de IOB incorretos.

Os problemas ao viajar para o oeste são conhecidos pelos desenvolvedores, e uma possível solução está em desenvolvimento. Veja https://github.com/andyrozman/RileyLinkAAPS/issues/145 para mais detalhes. Por enquanto, saiba que esse problema pode acontecer e acompanhe com atenção quando mudar de fuso horário.

### O GNARL é um dispositivo totalmente compatível com Rileylink?

O código GNARL tem suporte completo a todas as funções usadas pelo driver Medtronic no AAPS, ou seja, é totalmente compatível. Saiba que isso exige trabalho extra, pois você terá que conseguir um hardware compatível e depois carregar o código GNARL no dispositivo.

**Nota do autor:** O software GNARL ainda é experimental e pouco testado, e não deve ser considerado tão seguro quanto um RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### O que fazer se eu perder a conexão com o RileyLink e/ou a bomba?

Há várias opções para tentar resolver problemas de conexão.

- Toque em **Acordar e Configurar** na tela da bomba (**Gerenciar** > **Bomba**), como descrito acima.
- Desative o Bluetooth do seu telefone, espere 10 segundos e ative-o de novo. Isso força o dispositivo Rileylink a se reconectar ao telefone.
- Reinicie o dispositivo Rileylink. Depois você deve tocar em **Redefinir RileyLink** na tela da bomba (**Gerenciar** > **Bomba**).
- Outros usuários descobriram que os passos a seguir ajudam a restaurar a conexão quando outros métodos não funcionaram: 
    1. Reinicie o telefone
    2. *Enquanto* o telefone reinicia, reinicie o dispositivo Rileylink
    3. Abra o AAPS e deixe a conexão ser restaurada

### Como descobrir qual frequência a minha bomba usa

![Modelo da bomba](../images/Medtronic06.png)

Na parte de trás da bomba há uma linha com o número do modelo e um código especial de 3 letras. As duas primeiras letras indicam o tipo de frequência, e a última indica a cor. Estes são os valores possíveis para a frequência:

- NA - América do Norte (na seleção de frequência, você precisa selecionar "EUA & Canadá (916 MHz)")
- CA - Canadá (na seleção de frequência, você precisa selecionar "EUA & Canadá (916 MHz)")
- WW - Mundial (na seleção de frequência, você precisa selecionar "Mundial (868 MHz)")

(MedtronicPump-pump-unreachable)=

### Como corrigir o erro "pump unreachable" (bomba inacessível)

Algumas bombas Medtronic mostram o erro "pump unreachable" (bomba inacessível) depois de uma atualização do **AAPS**. Para corrigir, mude o tipo de codificação:

1. Vá em **Configuração** > **Bomba** e toque em **Configurações** no cartão **Medtronic**.
2. Defina **Codificação Medtronic** como **Codificação 4b6b de hardware**.

## Onde obter ajuda

O desenvolvimento do driver Medtronic é feito pela comunidade, de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a seção desta documentação sobre o assunto para confirmar como o recurso deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Relate um bug**: primeiro procure nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu telefone, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).