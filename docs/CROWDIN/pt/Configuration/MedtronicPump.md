# Bombas Medtronic

**>>>> O controlador para a bomba Medtronic está incluído na AndroidAPS (mestre) desde a versão 2.5. Apesar disso, o controlador da Medtronic ainda deve ser considerado como software versão beta. Por favor, instale apenas se for um utilizador experiente. De momento ainda estamos a tentar resolver o erro de Bólus duplo (2 bólus são registados em tratamentos e por conseguinte no cálculo do IOB (se experienciar este erro, por favor active o registo de Bólus Duplo na configuração Medtronic e forneça os seus registos)), que esperamos ser corrigido numa próxima versão. <<<<**

* * *

Funciona apenas com bombas Medtronic mais antigas (ver detalhes abaixo). Não funciona com Medtronic 640G ou 670G.

* * *

Se começou a utilizar o controlador Medtronic por favor adicione-se a esta [lista](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit). Isto é simplesmente para que possamos ter um registo de quais os telefones que funcionam bem e os que funcionam menos bem (ou não funcionam) com este controlador. Existe uma coluna identificada como "BT restart". Esta coluna é para verificar se o telefone suporta activar/desativar BlueTooth (BT), que pode ser utilizado quando a bomba não é mais capaz de se conectar, o que pode acontecer de tempos em tempos. Caso note qualquer outro problema, por favor, registe-o na coluna "Comments".

* * *

## Requisitos de hardware e software

- **Telefone:** O controlador para a Medtronic deverá funcionar com qualquer telefone que suporte BLE. **IMPORTANTE: apesar do controlador funcionar corretamente em todos os telefones, a activação/desactivação do Bluetooth nem sempre funciona (necessária quando se perde a conexão com o RileyLink e o sistema não consegue recuperar automaticamente - poderá acontecer de quando em vez). É necessário um dispositivo com o Android 7.0 ou superior. Na pior das hipóteses poderá ser instalado no telefone o LineageOS 15.1 (requerido 15.1 ou inferior). Em telefones com Android 9 poderão existir alguns problemas de recuperar a ligação para o qual ainda não foi encontrada uma solução (a ativação/desativação do Bluetooth não parece funcionar em todos os modelos de telefone).**
- For communication with your pump you need an additional device that converts BT commands from phone into RF commands that pump understands. See list of [additional communication devices](../Module/module#additional-communication-device). Para um funcionamento correto, o RileyLink terá de ter a versão de firmware 0.9 ou superior (versões anteriores poderão não funcionar corretamente). Para o RileyLink/OrangeLink existem atualizações da versão de firmware disponíveis no site. Se pretender construir o seu Módulo BT/RF poderá tentar o Gnarl ([aqui](https://github.com/ecc1/gnarl)), que é um clone do RileyLink. 
- **Bomba:** O controlador funciona apenas com os seguintes modelos e versões de firmware: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ou inferior)
    - 554/754 versão UE (firmware 2.6A ou inferior)
    - 554/754 versão Canadá (firmware 2.7A ou inferior)
- Verifique o firmware como descrito em [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) e [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Configuração da bomba

- **Ative o modo remoto na bomba** (Utilitários-> Ligar dispositivos->Opção Remoto, Seleccione Act e no próximo ecrã seleccione Acrescentar ID e introduza um número (111111 ou qualquer outro). Precisa de pelo menos um identificador na lista de ID Remoto. As opções acima podem parecer de forma diferente para modelos diferentes de bomba. A etapa acima descrita é importante, pois quando configurado, a bomba vai "escutar" mais frequentemente a o canal de comunicação remota.
- **Configure Índice Basal máximo** na sua bomba insira como "Índice de Basal máximo" o valor de Basal máximo por hora do seu perfil padrão de Basal multiplicado por 4 (no caso de pretender 400% DBT como máximo). O valor deve ser inferior a 35 (valor máximo permitido pela bomba).
- **Configure Bólus máximo** na sua bomba (máximo permitido é 25)
- **Seleccione o perfil de Basal Standard**. Este será o único perfil que será utilizado. Este perfil de Basal também poderá ser desativado.
- **Configure o tipo de DBT** (em "tipo basal temp") para Índice insulina (e não Percentagem de Basal)

## Configuração do Telefone / AndroidAPS

- **Não emparelhe o RileyLink com o seu telefone.** Se emparelhar o seu RileyLink com o telefone, a AndroidAPS não será capaz de encontrá-lo durante a configuração.
- Desative a rotação automática no seu telefone (em alguns dispositivos a rotação automática reinicia as sessões de BT, o que não é desejável).
- Poderá configurar a bomba no AndroidAPS de duas formas: 

1. Utilizando o Assistente (numa nova instalação)
2. Diretamente nas Configurações (seleccionando configuração do controlador Medtronic)

Se fizer uma nova instalação o Assistente iniciar-se-à automaticamente. Por vezes, se a conexão BT não estiver a funcionar correctamente (incapaz de se conectar à bomba), poderá não ser possível concluir a configuração. Neste caso selecione bomba virtual e, após o Assistente terminar, utilize a opção 2 para conectar a AndroidAPS à bomba.

![Definições do MDT](../images/Medtronic01a.png)

Necessita configurar os seguintes itens: (ver foto acima)

- **Número de Série da Bomba**: O número de série pode ser encontrado na parte de trás da bomba a seguir a SN. Necessita apenas de obter os 6 números do número de série.
- **Modelo de Bomba**: O modelo de bomba que vai ser utilizada (por exemplo 522). 
- **Frequência da Bomba**: Existem duas versões de cada modelo de bomba Medtronic que transmitem em duas frequências distintas (se não tem certeza qual a frequência utilizada pela sua bomba, veja [FAQ](../Configuration/MedtronicPump#faq)): 
    - para os EUA & Canadá, a frequência utilizada é 916 Mhz
    - para o resto do mundo, Internacional, a frequência utilizada é 868 Mhz
- **Máximo Bólus na Bomba (U)** (numa hora): Configure com o mesmo valor que foi inserido na bomba. Limita a quantidade de insulina do Bólus por hora. Caso tente administrar uma quantidade superior ao máximo definido, o Bólus não será administrado e um erro será retornado. O valor máximo admissível é 25. Por favor, defina o valor correcto para evitar o risco de sobredosagem.
- **Máxima Basal na Bomba (U/h)**: Configure com o mesmo valor que foi inserido na bomba. Limita a quantidade de Basal por hora. Por exemplo, se pretender ter o máximo DBT configurado para 500% e o valor mais alto de Basal é de 1.5 U/h, então necessita de configurar a Máxima Basal de pelo menos 7.5 U/h. Se esta configuração não estiver correcta, i. e., se um dos valores de Basal for superior ao valor máximo definido a bomba retorna um erro.
- **Tempo de espera para iniciar Bólus (s)**: Tempo de espera antes do valor do Bólus ser comunicado à bomba, para que possa ser cancelado se necessário. O cancelamento do Bólus quando está em execução na bomba não é suportado (em caso de necessidade suspender o Bólus directamente na bomba).
- **Codificação Medtronic**: Esta é configuração que determina, se a codificação 4b6b utilizada para enviar comandos para a bomba será feita na AndroidAPS ou no RileyLink. Se tiver um RileyLink com uma versão firmware 2.x, por defeito será usada a codificação por Hardware (dispositivo conversor). No caso de versões de firmware 0.x esta configuração será ignorada.
- **Tipo de Bateria (Visualização detalhada)**: Para visualizar tensão e a percentagem de energia na bateria da sua bomba, seleccione o tipo de bateria em utilização (atualmente são suportadas baterias de lítio, Alcalinas, NiZn e NiMH).
- **Configuração do RileyLink**: Permite procurar e emparelhar a AndroidAPS com o RileyLink.
- **Configure Basal temporária neutra** activar para prevenir um sinal sonoro e/ou vibração. Quando ativada, cancela a basal temporária antes de perfazer uma hora para evitar que as bombas Medtronic emitam um sinal sonoro e/ou vibrem quando a basal temporária se estende por mais de uma hora.

## Separador MEDTRONIC (MDT)

![Separador MDT](../images/Medtronic02.png)

No separador MEDTRONIC encontram-se várias linhas que mostram o estado actual da bomba e respectiva conexão.

- **Estado RileyLink**: Mostra o estado da conexão entre a AndroidAPS, o RileyLink e a bomba. O telefone deve estar conectado o tempo todo ao Módulo BT/RF.
- **Estado da Bomba**: Indica o estado da conexão da bomba, podendo apresentar vários valores: o símbolo "dormir" indica uma conexão existente não ativa; "A acordar" indica que a AndroidAPS está a tentar conectar com a bomba antes da execução de um comando; ou outra indicação (ex.: Obter Tempo, Ativar DBT, etc.).
- **Bateria**: Mostra o estado da bateria baseado na configuração. Um símbolo "bateria" mostra a quantidade de energia na bateria (o símbolo é apresentado a vermelho para valores de energia inferiores a 20%).
- **Última conexão**: Mostra o tempo decorrido desde a última conexão bem-sucedida com a bomba.
- **Último Bólus**: Mostra o tempo decorrido desde o último bólus.
- **Dose de Basal de Base**: É a dose de basal de base actual utilizada pela bomba.
- **Basal temporária**: Apresenta o valor da basal temporária quando activa.
- **Reservatório**: Quantidade de insulina no reservatório (atualizada no mínimo a cada hora).
- **Erros**: mensagem de erro em caso de problemas (mostra principalmente a existência de erros na configuração).

Na parte inferior do ecrã existem 3 botões:

- **Atualizar** para atualizar o estado da bomba e do RileyLink. Deve ser utilizado somente após uma longa falha na conexão, uma vez que esta ação irá redefinir o estado da bomba (recuperar o histórico, obter ou definir hora, obter perfil, obter estado da bateria, etc).
- **Histórico da bomba**: Mostra o histórico da bomba (veja [abaixo](../Configuration/MedtronicPump#pump-history))
- **Estatísticas RL**: Informação da conexão RileyLink (ver [abaixo](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Histórico da Bomba

![Histórico da Bomba](../images/Medtronic03.png)

O histórico da bomba é recuperado a cada 5 minutos e armazenado localmente. O histórico é mantido por 24 horas. As entradas mais recentes são adicionadas em detrimento das entradas mais antigas. Algumas entradas do histórico da bomba podem não ser exibidas, por não serem relevantes (como por exemplo configuração de funções que não são utilizadas pela AndroidAPS).

## Estatísticas RL (Estado do RileyLink)

![Estado do RileyLink - Definições](../images/Medtronic04.png) ![Estado do RileyLink - Histórico](../images/Medtronic05.png)

A caixa de diálogo tem dois separadores:

- **Configurações**: Mostra as configurações do RileyLink, tais como Endereço (MAC), Nome (do RileyLink conectado), Nível da Bateria, Estado da Conexão, Erro de Conexão e Versões de Firmware (do RileyLink); Mostra as configurações da bomba, tais como Tipo de Bomba (always Medtronic Pump), Modelo de Bomba Configurado, Modelo de Bomba Conectado, Número de Série da Bomba, Frequência da Bomba, Última Frequência Utilizada (mostra o valor da frequência), Último Contacto com a Bomba.
- **Histórico**: Mostra o histórico de comunicação entre o RileyLink e a Bomba, entre os quais os comandos enviados para a bomba.

## Ações

Quando o controlador Medtronic é selecionado, 3 ações possíveis podem ser adicionadas ao separador Ações:

- **Acordar e Sintonizar** - Se a AndroidAPS não comunicou com a bomba por mais de 5 minutos (a comunicação entre a AndroidAPS e a bomba ocorre a cada 5 minutos), a comunicação pode ser forçada utilizando a ação Acordar e Sintonizar. Esta ação tentará comunicar com a bomba, procurando todas as sub-frequências conhecidas. No caso conseguir comunicar com a bomba configura a frequência utilizada como frequência padrão. 
- **Reiniciar configuração RileyLink ** - Utilize esta ação para reiniciar e reconfigurar o RileyLink (define frequência, tipo de frequência e codificação).
- **Limpar Bloqueio de Bólus** - Ao iniciar o Bólus, o estado Bloqueio de Bólus é activado para impedir que outros comandos sejam enviados para a bomba. Ao suspender a bomba e retomar (para cancelar bolus), o bloqueio é removido. Esta opção só visível durante a ação Bólus. 

## Notas importantes

### Utilizadores de OpenAPS

Ao utilizar a AndroidAPS, o controlador primário é a AndroidAPS e todos os comandos devem ser acionados através da AndroidAPS. Os Bólus devem ser acionados na AAPS e não na bomba. Apesar da AAPS detectar qualquer comando efectuado na bomba, estes devem ser evitados (inconsistências de sincronização entre o histórico da bomba e da AAPS podem ocorrer, especialmente se a AAPS não for utilizada como previsto). Com exceção da mudança de reservatório, não é necessário aceder à bomba para a utilizar.

### Registo

Uma vez que o controlador Medtronic é recente, é aconselhado activar o registo para que seja possível depurar e corrigir eventuais problemas e erros. Clique em ícone no canto superior esquerdo, selecione Manutenção e Definições de Registo. As opções Pump, PumpComm, PumpBTComm precisam de ser selecionadas.

### RileyLink/OrangeLink/Emalink/GNARL

Quando o RileyLink é reiniciado, é necessário re-sintonizar (ação "Acordar e Sintonizar") ou reenviar os parâmetros de comunicação (ação "Reiniciar configuração RileyLink"), para restabelecer a comunicação com a bomba.

### MCGs

Atualmente, os MCGs Medtronic NÃO são suportados.

### Uso manual da bomba

Deve ser evitado fazer ou introduzir tratamentos diretamente na bomba. Todos os comandos (Bólus, DBT) devem ser acionados na AndroidAPS. No caso de introduzir comandos diretamente na bomba, NÃO os execute com uma frequência menor que 3 minutos, isto é, se por qualquer motivo for necessário administrar 2 Bólus, o segundo Bólus deve ser iniciado pelo menos 3 minutos após o primeiro.

## Mudança de Fuso Horário, DST (Horário de Verão) ou Viajar com Bomba Medtronic e AndroidAPS

IMPORTANTE: o loop nunca deve ser desativado enquanto estiver a viajar (excepto se o MGC não suportar modo offline). A AAPS detecta automaticamente mudanças do Fuso Horário e enviará a actualização da hora para a bomba assim que ocorrer no telefone.

Se viajar para Leste, a atualização do Fuso Horário incrementará a hora do telefone (por exemplo de GMT+0 para GMT+2) e o histórico da bomba não será corrompido. No entanto se viajar para Oeste, a atualização do Fuso Horário decrementará a hora (por exemplo, de GMT+2 para GMT+0) e o histórico da bomba poderá deixar de ser coerente por 24 horas, como por exemplo valores duplicados. Isso implica que nas horas seguintes deverá ser prestado cuidado redobrado, porque principalmente a IA e HCA poderão apresentar valores incorrectos.

Este é um problema conhecido para o qual ainda não existe uma solução automática. Uma de duas soluções manuais podem ser implementadas: manter o Fuso Horário e fazer um deslocamento temporal do perfil de basal; remover todas as entradas duplicadas em Tratamentos.

## Perguntas Frequentes (FAQ)

### É possível ver o estado da bateria do Módulo BT/RF?

Não. O nível da bateria pode ser consultada somente para o OrangeLink e Emalink, em Estatísticas RL no separador Configurações.

### O GNARL é um substituto para o RileyLink?

Sim. O autor do GNARL incluiu todas as funções utilizadas pelo controlador Medtronic. Toda a comunicação Medtronic é suportada (Junho / 2019). O GNARL não pode ser utilizado para comunicar com o Omnipod. A desvantagem do GNARL é que é necessário que o utilizador o construa, sendo necessária a aquisição de uma versão compatível do hardware.

**Nota do autor:** O software GNARL ainda é experimental e não completamente testado, e como tal não deve ser considerado seguro para usar como um RileyLink.

### Onde posso obter um Módulo BT/RF?

Como mencionado anteriormente os módulos podem ser obtidos aqui:

- RileyLink/OrangeLink - Pode ser adquirido em - [getrileylink.org](https://getrileylink.org/).
- EmaLink - Pode ser adquirido em - [ emalink](https://forms.gle/P87HucuygA2UZs5C7). GNARL - Pode obter as informações necessárias aqui, mas o dispositivo precisa ser adquirido noutro local ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### O que fazer no caso de perder a conexão com RileyLink e/ou bomba?

1. Execute a ação "Acordar e Sintonizar", para tentar encontrar a frequência correcta para comunicar com a bomba.
2. Desligue o Bluetooth do telefone, aguarde 10s e ligue-o novamente. Isto irá forçar a reconexão com o RileyLink.
3. Reinicie ou desligue e ligue o RileyLink, após o qual deve ser executada a ação "Reiniciar configuração RileyLink".
4. Tente a operação 2 e 3 em conjunto.
5. Reinicie ou desligue e ligue o RileyLink e o telefone.

### Como determinar a frequência utilizada pela bomba

![Modelo de Bomba](../images/Medtronic06.png)

Na parte de trás da bomba do lado direito está inscrito um código especial de 3 letras. As duas primeiras letras determinam a frequência e a última a cor da bomba. Os valores possíveis para a frequência são:

- NA - América do Norte (na "Frequência da Bomba" selecionar "EUA & Canadá (916 MHz)")
- CA - Canadá (na "Frequência da Bomba" selecionar "EUA & Canadá (916 MHz)")
- WW - Internacional (na "Frequência da Bomba" selecionar "Internacional (868 Mhz)")