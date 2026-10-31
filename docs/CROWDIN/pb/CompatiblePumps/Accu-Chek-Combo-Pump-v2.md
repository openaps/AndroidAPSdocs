# Accu-Chek Combo

**Este software faz parte de uma solução DIY ("faça você mesmo") e não é um produto. Ele exige que VOCÊ leia, aprenda e entenda o sistema, incluindo como usá-lo. Ele não faz todo o controle do seu diabetes por você, mas permite melhorar o controle do seu diabetes e a sua qualidade de vida, se você estiver disposto a dedicar o tempo necessário. Não tenha pressa; dê a si mesmo tempo para aprender. Você é o único responsável pelo que faz com ele.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

A Roche está saindo do mercado de bombas de insulina para concentrar o seu portfólio de diabetes no CGM Accu-Chek SmartGuide. It has communicated the end of sales of both the Accu-Chek Combo and Accu-Chek Insight pumps; its remaining Accu-Chek Solo micropump is also being wound down (last deliveries in Germany at the end of 2025). The change is being rolled out by region, starting in Germany, with other European markets expected to follow. If you rely on this pump, plan ahead for a transition to a supported pump.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio celular, sem um dispositivo de comunicação adicional.
* Automatic DST and timezone handling.

## Hardware and software requirements

* Uma Roche Accu-Chek Combo (qualquer firmware, todos funcionam).
* Um dispositivo Smartpix ou Realtyme junto com o 360 Configuration Software para configurar a bomba. (A Roche envia gratuitamente dispositivos Smartpix e o software de configuração aos seus clientes, se eles pedirem.)
* A compatible phone running Android 12 or newer. Veja as [notas de versão](#maintenance-android-version-aaps-version) para mais detalhes.
* The **AAPS** app installed on your phone.

Alguns telefones podem funcionar melhor que outros, dependendo da qualidade do suporte a Bluetooth e de terem ou não uma lógica adicional de economia de energia muito agressiva. Uma lista de telefones está no documento [Telefones para o AAPS](#Phones-list-of-tested-phones). Por favor, esteja ciente que esta não é uma lista completa e reflete a experiência pessoal do usuário. Você também pode adicionar a sua experiência e assim ajudar outras pessoas (estes projetos vivem de passar a ajuda adiante).

(combov2-before-you-begin)=
## Antes de começar

**SEGURANÇA EM PRIMEIRO LUGAR** - não faça este processo em um ambiente onde você não consiga se recuperar de um erro. Tenha à mão o seu dispositivo Smartpix / Realtyme e o 360 Configuration Software. Planeje cerca de uma hora para configurar tudo e verificar se tudo está funcionando corretamente.

Conheça as seguintes limitações:

* Bólus estendido e bólus multionda não são suportados no momento (você pode usar [Carboidratos estendidos](../DailyLifeWithAaps/ExtendedCarbs.md) em vez disso).
* Só um perfil basal (o primeiro) é suportado.
* The lowest basal rate in your **Profile** is 0.05 U/h. **AAPS** refuses a **Profile** with a lower rate. The Combo rounds basal rates to its own steps (0.01 U/h below 1 U/h, 0.05 U/h up to 10 U/h, 0.1 U/h above). **AAPS** uses the rates the pump really gives.
* Temporary basal rates are limited to 500% of the current basal rate. **AAPS** takes this limit into account.
* O loop é desativado se o perfil ativo na bomba não for o perfil nº 1. This continues until profile no. 1 is made the active one; when that is done, the next time AAPS connects (either on its own after a while or because you tap **Refresh** on the Accu-Chek Combo pump screen), it will notice that profile no. 1 is the current one, and enable the loop again.
* Se o loop pedir o cancelamento de uma TBR em andamento, a Combo define em vez disso uma TBR de 90% ou 110% por 15 minutos. Isso porque cancelar de fato uma TBR causa um alerta na bomba, que vibra muito, e essas vibrações não podem ser desativadas.
* A estabilidade da conexão Bluetooth varia entre telefones e pode causar alertas de "bomba inacessível", quando não é mais possível estabelecer uma conexão com a bomba. If that error occurs, make sure Bluetooth is enabled, tap **Refresh** on the pump screen (**Manage** > **Pump**) to see if this was caused by an intermittent issue and if still no connection is established, reboot the phone which should usually fix this.
* There is another issue where a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth stack), before the pump accepts connections from the phone again.
* Evite definir uma TBR na bomba, pois o loop assume o controle das TBRs. Detectar uma nova TBR na bomba pode levar até 20 minutos, e o efeito da TBR só é contado a partir do momento em que ela é detectada. Assim, no pior caso, pode haver 20 minutos de uma TBR que não aparece no IOB.

The driver is currently written to support the following languages on the Combo. (Isto não tem relação com o idioma do AAPS - é o idioma mostrado no próprio LCD da Combo.)

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

* Open the **menu** (☰) in the top-left corner, go to [**Configuration** > **Pump**](../SettingUpAaps/ConfigBuilder.md) and select **Accu-Chek Combo**.

  ![Configuration > Pump with the Accu-Chek Combo plugin](../images/v4/Configuration/configuration_pump_list_1.png)

  Once it is selected, the **Accu-Chek Combo** card shows two buttons, **Settings** and **Open plugin**:

  ![The Accu-Chek Combo plugin selected in Configuration > Pump](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Settings** opens the settings of the Accu-Chek Combo driver (see [Settings](#combov2-preferences) below):

  ![Accu-Chek Combo driver settings](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Open plugin** (or **Manage** > **Pump**) opens the Accu-Chek Combo pump screen. Before a pump is paired it shows **Not paired to a pump**:

  ![Accu-Chek Combo pump screen before pairing](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* On the pump screen, tap **Pairing**. The **Pair with pump** screen opens. Follow the steps shown on screen, then tap **Start pairing**. When Android asks for permission to make the phone visible to other Bluetooth devices, tap **Allow**. Eventually, the Combo shows a 10-digit pairing PIN on its screen, and **AAPS** asks for it. Enter that PIN in the **10-digit PIN** field.

  ![The Pair with pump screen with the Start pairing button](../images/combo/combov2-pairing-screen-1.png)

  ![Android asking to make the phone visible to other Bluetooth devices](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Combo pairing in progress, scanning for the pump](../images/combo/combov2-pairing-screen-2.png)

  The next pictures are from an older **AAPS** version. The steps and texts are the same, but the screens look slightly different.

  ![Captura de tela da tela de pareamento da Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Captura de tela da tela de pareamento da Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Captura de tela da tela de pareamento da Combo 4](../images/combo/combov2-pairing-screen-5.png)

* If the PIN is entered incorrectly, **AAPS** shows **PIN did not work. Check if there was a typo. If this keeps happening, cancel and retry pairing.**

  ![Captura de tela da tela de pareamento da Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* When **Successfully paired with Combo** is shown, tap **OK**. You return to the pump screen, which now shows the pump status (see [Accu-Chek Combo pump screen contents](#combov2-tab-contents) below). The **Pairing** button is replaced by **Unpair**.

* Para verificar a sua configuração (com a bomba **desconectada** de qualquer cânula, por segurança!), use o AAPS para definir uma TBR de 500% por 15 min e dê um bólus. Agora a bomba deve ter uma TBR em andamento e o bólus no histórico. O AAPS também deve mostrar a TBR ativa e o bólus administrado.

* Na Combo, recomenda-se ativar o bloqueio de teclas para evitar dar bólus pela bomba, principalmente se a bomba já era usada antes e usar a função "bólus rápido" era um hábito.

## Notas sobre o pareamento

A Accu-Chek Combo foi desenvolvida antes do lançamento do Bluetooth 4.0 e apenas um ano depois do lançamento da primeira versão do Android. Por isso, a forma como ela pareia com outros dispositivos não é 100% compatível com a forma como isso é feito no Android hoje. Para resolver isso por completo, o AAPS precisaria de permissões de nível de sistema, que só estão disponíveis para apps do sistema. Esses apps são instalados no telefone pelos fabricantes - os usuários não podem instalar apps do sistema.

The consequence of this is that pairing will never be 100% without problems. Em especial, durante o pareamento, a janela de PIN Bluetooth do Android pode aparecer por um momento e sumir sozinha. Mas, às vezes, ela fica na tela e pede um PIN de 4 dígitos. (Não confunda com o PIN de pareamento da Combo, de 10 dígitos.) Não digite nada, apenas toque em cancelar. Se o pareamento não continuar, siga as instruções na tela para tentar parear novamente.

(combov2-tab-contents)=
## Accu-Chek Combo pump screen contents

To open the pump screen, go to **Manage** > **Pump**. Once a pump is paired, it shows the following information (items are listed from top to bottom):

![Screenshot of the Accu-Chek Combo pump screen with pairing (older AAPS version)](../images/combo/combov2-tab-with-pairing.png)

1. **Driver state**: The driver can be in one of the following states:
   - **Disconnected**: There is no Bluetooth connection; the driver is in this state most of the time, and only connects to the pump when needed - this saves power
   - **Connecting**
   - **Checking pump**: the pump is connected, but the driver is currently performing safety checks to ensure that everything is OK and up to date
   - **Ready**: the driver is ready to accept commands from AAPS
   - **Suspended**: the pump is suspended (shown as "stopped" in the Combo)
   - A description of the command being executed, for example **Setting basal profile** or **Updating pump status**
   - **Error**: an error occurred; the connection was terminated, any ongoing command was aborted
2. **Last connection**: How many minutes ago the driver successfully connected to the Combo; if this goes beyond 30 minutes, this item is shown with a red color
3. **Battery**: Battery level; the Combo only indicates **Full**, **Low** or **Empty**, and does not offer anything more accurate (like a percentage), so only these three levels are shown here
4. **Reservoir**: How many IU are currently in the Combo's reservoir
5. **Last bolus**: How many minutes ago the last bolus was delivered; if none was delivered yet after AAPS was started, this is not shown
6. **Temp basal**: Details about the currently active temporary basal; if none is currently active, this is not shown
7. **Base basal rate**: Currently active base basal rate ("base" means the basal rate without any active TBR influencing the basal rate factor)
8. **Serial number**: Combo serial number as indicated by the pump (this corresponds to the serial number shown on the back of the Combo)
9. **Bluetooth address**: The Combo's 6-byte Bluetooth address, shown in the `XX:XX:XX:XX:XX:XX` format

While the driver is doing something (for example, setting a basal profile), a box below the list describes the current activity, with a thin progress bar showing the progress.

A Combo pode ser operada por Bluetooth no modo _remote-terminal_ (terminal remoto) ou no modo _command_ (comando). O modo terminal remoto corresponde ao "modo de controle remoto" no medidor da Combo, que imita o LCD e os quatro botões da bomba. Alguns comandos precisam ser executados pelo driver neste modo, porque não existem no modo de comando. O modo de comando é muito mais rápido, mas, como dito, tem funções limitadas. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing. Porém, quando o driver muda para o modo de comando, esse campo fica vazio.

(You do not influence this; the driver fully decides on its own what mode to use. This is merely a note for you to know why sometimes you can see Combo frames in that field.)

At the bottom, there are these buttons:

- **Refresh**: Triggers an immediate pump status update. It is also used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](#combov2-alerts)). You can only tap it when the driver is disconnected, suspended or in the error state.
- **Unpair**: Unpairs the paired Combo from **AAPS** and Android, after you confirm **Do you really want to unpair the pump?**. When no pump is paired, this button is replaced by **Pairing**.

(combov2-preferences)=
## Configurações

These settings are available for the Combo driver (**Configuration** > **Pump** > **Accu-Chek Combo** > **Settings**, or the settings icon (cog wheel) on the pump screen). Items are listed from top to bottom:

1. **Discovery duration (in seconds)**: When pairing, the driver makes the phone discoverable by the pump. Isto controla quanto tempo essa visibilidade dura. Por padrão, o máximo (300 segundos = 5 minutos) está selecionado. O Android não permite que a visibilidade dure para sempre, por isso é preciso escolher uma duração.
2. **Autodetect and automatically enter insulin reservoir change**: If enabled, the driver enters the "reservoir change" that you would normally enter yourself with **Manage** > **Prime/Fill**. Isso é explicado [com mais detalhes abaixo](#combov2-autodetections).
3. **Autodetect and automatically enter battery change**: If enabled, the driver enters the "battery change" that you would normally enter yourself with **Manage** > **Pump Battery Change**. Isso é explicado [com mais detalhes abaixo](#combov2-autodetections).
4. **Enable verbose Combo logging**: This greatly expands the amount of logging done by the driver. **CUIDADO**: Não ative isto, a menos que um desenvolvedor peça. Otherwise, this can add a lot of noise to **AAPS** logs and lessen their usefulness.

Pairing and unpairing are done on the pump screen, not in the settings (see above).

(combov2-autodetections)=
## Detectar e registrar automaticamente trocas de bateria e de reservatório

O driver consegue detectar trocas de bateria e de reservatório acompanhando os níveis da bateria e do reservatório. Se a Combo informou o nível da bateria como baixo na última atualização do status da bomba e agora, na nova atualização, o nível da bateria aparece como normal, o driver conclui que o usuário trocou a bateria. A mesma lógica é usada para o nível do reservatório: se agora ele está mais alto que antes, isso é interpretado como uma troca de reservatório.

Isso só funciona se a bateria e o reservatório forem trocados quando esses níveis são informados como baixos _e_ se a bateria e o reservatório estiverem suficientemente cheios.

These autodetections can be turned off in the driver [settings](#combov2-preferences).

(combov2-alerts)=
## Alertas (avisos e erros) e como eles são tratados

A Combo mostra os alertas como telas do terminal remoto. Warnings are shown with a "Wx" code (x is a digit), along with a short description. Um exemplo é "W7", "TBR OVER". Os erros são parecidos, mas aparecem com um código "Ex".

Alguns avisos são descartados automaticamente pelo driver. São eles:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main screen
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main screen
- W3, W6, W7, W8 : todos são apenas informativos para o usuário, por isso é seguro o driver descartá-los automaticamente

Outros avisos _não_ são descartados automaticamente. Além disso, os erros _nunca_ são descartados automaticamente. Os dois são tratados da mesma forma: o driver mostra uma janela de alerta sobre a interface do AAPS e também interrompe qualquer comando em execução. The driver then switches to the "error" state (see [the Accu-Chek Combo pump screen contents above](#combov2-tab-contents)). Neste estado, nenhum comando pode ser executado. O usuário precisa resolver o erro na bomba; por exemplo, um erro de oclusão pode exigir a troca da cânula. Once the user took care of the error, normal operation can be resumed by tapping **Refresh** on the Accu-Chek Combo pump screen. Em seguida, o driver se conecta à Combo e atualiza o status dela, verificando, por exemplo, se ainda há um erro na tela. Além disso, o driver atualiza automaticamente o status da bomba depois de algum tempo, por isso não é obrigatório tocar nesse botão manualmente.

O bólus é um caso especial. Ele é feito no modo de comando da Combo, que não informa durante o bólus que um alerta apareceu. Por isso, o driver não pode descartar avisos automaticamente _durante_ um bólus. Infelizmente, isso significa que a bomba vai apitar até o fim do bólus. O alerta mais comum durante um bólus é, em geral, o W1 "reservoir low" (reservatório baixo). **Don't** dismiss Combo warnings on the pump itself manually during a bolus. Você corre o risco de interromper o bólus. O driver cuida do aviso quando o bólus terminar.

Alertas que acontecem enquanto o driver não está conectado à Combo não são percebidos pelo driver. A Combo não tem como enviar esse alerta automaticamente ao telefone; é sempre o telefone que precisa iniciar a conexão. Por isso, o alerta continua até o driver se conectar à bomba. You can tap **Refresh** on the pump screen to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**IMPORTANTE**: Se ocorrer um erro, ou aparecer um aviso que não está entre os descartados automaticamente, o driver entra no estado de erro. Nesse estado, o loop **FICA BLOQUEADO** até que o status da bomba seja atualizado! It is unblocked after the pump status is updated (either by tapping **Refresh** or by the driver's eventual auto-update) and no error is shown anymore.

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
## Tips for basic usage

### How to ensure smooth operations

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under your body while you sleep, a higher position (on a shelf or board) works best.
* Always make sure that the pump battery is as full as possible. See the battery section for tips regarding the battery.
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Only when changing the battery or the cartridge, it is necessary to use the pump's keys.

![Keylock](../images/combo/combo-tips-keylock.png)

### Pump not reachable. What to do?

#### Activate pump unreachable alarm
* In **AAPS**, tap the **Settings** (gear) icon at the top right of the main screen, go to **Local alerts**, activate **Alert if pump is unreachable** and set **Pump unreachable threshold** to **31** minutes.
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

#### Restore reachability of the pump

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, tap **Refresh** on the Accu-Chek Combo pump screen (**Manage** > **Pump**). Mostly then the communication works again.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. See [AAPS Phones](#Phones-list-of-tested-phones) for successfully tested smartphones.

#### Root causes and consequences of frequent communication errors
* On phones with **low memory** (or **aggressive power-saving** settings), AAPS is often shut down. You can tell by the fact that the treatment buttons (QuickLaunch toolbar) on the main screen are not shown when opening AAPS because the system is initializing. This can trigger "pump unreachable alarms" at startup. In the **Last connection** field of the pump screen (**Manage** > **Pump**), you can check when AAPS last communicated with the pump.

![No connection to pump](../images/combo/combov2-tips-no-connection-to-pump.png)

* This error can drain the pump's battery faster because the basal profile is read from the pump when the app is restarted.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed.

### Cancellation of temporary basal rate fails
* Occasionally, AAPS cannot automatically cancel a **TBR CANCELED** alert. Then you have to either tap **Refresh** on the Accu-Chek Combo pump screen or the alarm on the pump will need to be confirmed.

### Pump battery considerations

#### Changing the battery
* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop** for 1 hour.
* Wait for the phone to communicate with the pump and for the Bluetooth logo on the pump to fade.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* You don't need to re-set the pump's clock after the battery change: AAPS automatically updates the pump's date and time.
* Then put the pump back in run mode and select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Battery type and causes of short battery life
* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:
* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the service pack: 2 to 4 weeks
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period.
* The smart phone hardware and software (Android operating system and Bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

### Extended bolus, multiwave bolus
The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:
* Use **e-Carbs** when entering carbs or using the Bolus wizard by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in your blood. The system will then calculate small carbs equally distributed over the whole duration which will cause the algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs.
* Before eating, set a temporary **Eating Soon** target with glucose 80 for several hours (press the target on the main screen, or **Manage** > **Temp Target**). The duration should be based on the interval you would choose for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Then use the **Bolus wizard** to enter the full carbs of the meal, but do not directly apply the values it suggests. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max U/h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* Don't use the extended or multiwave bolus directly on the pump. The driver does not support them (see [Before you begin](#combov2-before-you-begin)); if a multiwave bolus is given on the pump anyway, **AAPS** records it from the pump history as a normal bolus plus an extended bolus, so it is counted in IOB. An extended bolus does not work in a closed loop environment (see [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details).

### Alarms at bolus delivery
* After each bolus, the driver reads the pump's bolus history. This is a safety mechanism to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump.
* Before a bolus, if the pump history has a bolus that **AAPS** did not know about (for example, a bolus given directly on the pump), the requested bolus is **not given**, because it was calculated without that insulin. **AAPS** shows **The pump history has a bolus that AAPS did not know about. The requested bolus was not given...** Check the bolus history on the pump and your IOB. If a bolus is still needed, calculate it again. This also applies when the unknown bolus is found on a new connection.
* If the bolus was given but the pump history also had other boluses that **AAPS** did not know about, they are recorded now and **AAPS** asks you to check IOB before the next bolus.
* If the connection to the pump is lost **during** a bolus, **AAPS** does not record 0 U: it shows how much the pump had given by then and warns that the pump may still give the rest. **Do not bolus again.** **AAPS** reads the real amount from the pump history at the next connection.
* If the connection is lost while **AAPS** sends the bolus, it is not known whether the pump got it. Check the bolus history on the pump before the next bolus.
* If **AAPS** cannot confirm that a bolus was delivered, it shows **Bolus delivery failed. It appears no bolus was delivered. To be sure, please check the pump to avoid a double bolus and then bolus again.** Boluses are never retried automatically.

## Where to get help

Development of the Combo driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Leia** a seção correspondente desta documentação para confirmar como a função deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Informe um bug** procurando nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu celular, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).
