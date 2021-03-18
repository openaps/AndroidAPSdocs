# Bombas Medtronic

**>>>> O controlador para a bomba Medtronic está incluído na AndroidAPS (mestre) desde a versão 2.5. Apesar disso, o controlador da Medtronic ainda deve ser considerado como software versão beta. Por favor, instale apenas se for um utilizador experiente. De momento ainda estamos a tentar resolver o erro de Bólus duplo (2 bólus são registados em tratamentos e por conseguinte no cálculo do IOB (se experienciar este erro, por favor active o registo de Bólus Duplo na configuração Medtronic e forneça os seus registos)), que esperamos ser corrigido numa próxima versão. <<<<**

* * *

Funciona apenas com bombas Medtronic mais antigas (ver detalhes abaixo). Não funciona com Medtronic 640G ou 670G.

* * *

Se começou a utilizar o controlador Medtronic por favor adicione-se a esta [lista](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit). Isto é simplesmente para que possamos ter um registo de quais os telefones que funcionam bem e os que funcionam menos bem (ou não funcionam) com este controlador. Existe uma coluna identificada como "BT restart". Esta coluna é para verificar se o telefone suporta activar/desativar BlueTooth (BT), que pode ser utilizado quando a bomba não é mais capaz de se conectar, o que pode acontecer de tempos em tempos. Caso note qualquer outro problema, por favor, registe-o na coluna "Comments".

* * *

## Requisitos de hardware e software

- **Telefone:** O controlador para a Medtronic deverá funcionar com qualquer telefone que suporte BLE. **IMPORTANTE: apesar do controlador funcionar corretamente em todos os telefones, a activação/desactivação do Bluetooth nem sempre funciona (necessária quando se perde a conexão com o RileyLink e o sistema não consegue recuperar automaticamente - poderá acontecer de quando em vez). É necessário um dispositivo com o Android 7.0 ou superior. Na pior das hipóteses poderá ser instalado no telefone o LineageOS 15.1 (requerido 15.1 ou inferior). Em telefones com Android 9 poderão existir alguns problemas de recuperar a ligação para o qual ainda não foi encontrada uma solução (a ativação/desativação do Bluetooth não parece funcionar em todos os modelos de telefone).**
- **RileyLink/Gnarl/Emalink/OrangeLink:** Para comunicar com a bomba é necessário um Módulo BT/RF, conhecido por RileyLink (RL), que converte os comandos BT do telefone em comandos RF (Radiofrequência) da bomba. O RileyLink/OrangeLink e o Emalink são exemplos de Módulos BT/RF e podem ser obtidos aqui [getrileylink.org](https://getrileylink.org/) e [ aqui](https://forms.gle/P87HucuygA2UZs5C7), respetivamente. Para um funcionamento correto, o RileyLink terá de ter a versão de firmware 0.9 ou superior (versões anteriores poderão não funcionar corretamente). Para o RileyLink/OrangeLink existem atualizações da versão de firmware disponíveis no site. Se pretender construir o seu Módulo BT/RF poderá tentar o Gnarl ([aqui](https://github.com/ecc1/gnarl)), que é um clone do RileyLink. 
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

- **Do not pair RileyLink with your Phone.** If you paired your RileyLink, then AndroidAPS won't be able to find it in configuration.
- Desative a rotação automática no seu telefone (em alguns dispositivos a rotação automática reinicia as sessões de BT, o que não é desejável).
- Poderá configurar a bomba no AndroidAPS de duas formas: 

1. Utilizando o Assistente (numa nova instalação)
2. Diretamente nas Configurações (seleccionando configuração do controlador Medtronic)

Se fizer uma nova instalação o Assistente iniciar-se-à automaticamente. Por vezes, se a conexão BT não estiver a funcionar correctamente (incapaz de se conectar à bomba), poderá não ser possível concluir a configuração. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![MDT Settings](../images/Medtronic01a.png)

Necessita configurar os seguintes itens: (ver foto acima)

- **Número de Série da Bomba**: O número de série pode ser encontrado na parte de trás da bomba a seguir a SN. Necessita apenas de obter os 6 números do número de série.
- **Modelo de Bomba**: O modelo de bomba que vai ser utilizada (por exemplo 522). 
- **Frequência da Bomba**: Existem duas versões de cada modelo de bomba Medtronic que transmitem em duas frequências distintas (se não tem certeza qual a frequência utilizada pela sua bomba, veja [FAQ](../Configuration/MedtronicPump#faq)): 
    - para os EUA & Canadá, a frequência utilizada é 916 Mhz
    - for Worldwide, frequency used is 868 Mhz
- **Máximo Bólus na Bomba (U)** (numa hora): Configure com o mesmo valor que foi inserido na bomba. Limita a quantidade de insulina do Bólus por hora. If you go over this, Bolus won't be set and error will be returned. Max that can be used is 25, please set correct value for yourself here so that you don't overdose.
- **Máxima Basal na Bomba (U/h)**: Configure com o mesmo valor que foi inserido na bomba. Limita a quantidade de Basal por hora. Por exemplo, se pretender ter o máximo DBT configurado para 500% e o valor mais alto de Basal é de 1.5 U/h, então necessita de configurar a Máxima Basal de pelo menos 7.5 U/h. Se esta configuração não estiver correcta, i. e., se um dos valores de Basal for superior ao valor máximo definido a bomba retorna um erro.
- **Tempo de espera para iniciar Bólus (s)**: Tempo de espera antes do valor do Bólus ser comunicado à bomba, para que possa ser cancelado se necessário. O cancelamento do Bólus quando está em execução na bomba não é suportado (em caso de necessidade suspender o Bólus directamente na bomba).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.
- **Configure Basal temporária neutra** activar para prevenir um sinal sonoro e/ou vibração. If enabled if will cancel a temp basal before the hour end to prevent this from happening.

## Separador MEDTRONIC (MDT)

![MDT Tab](../images/Medtronic02.png)

No separador MEDTRONIC encontram-se várias linhas que mostram o estado actual da bomba e respectiva conexão.

- **Estado RileyLink**: Mostra o estado da conexão entre a AndroidAPS, o RileyLink e a bomba. O telefone deve estar conectado o tempo todo ao Módulo BT/RF.
- **Estado da Bomba**: Indica o estado da conexão da bomba, podendo apresentar vários valores: o símbolo "dormir" indica uma conexão existente não ativa; "A acordar" indica que a AndroidAPS está a tentar conectar com a bomba antes da execução de um comando; ou outra indicação (ex.: Obter Tempo, Ativar DBT, etc.).
- **Battery**: Shows battery status depening on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pump History

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Ações

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Important notes

### OpenAPS users

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arrise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Perguntas Frequentes (FAQ)

### Can I see the power of RileyLink/GNARL?

Não. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Sim. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")