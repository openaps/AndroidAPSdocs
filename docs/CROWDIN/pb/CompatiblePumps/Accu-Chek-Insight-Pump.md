# Accu-Chek Insight

**Este software faz parte de uma solução de pâncreas artificial "faça você mesmo" (DIY) e não é um produto, mas exige que VOCÊ leia, aprenda e entenda o sistema, inclusive como usá-lo. Ele não faz todo o controle do seu diabetes por você, mas permite que você melhore o seu diabetes e a sua qualidade de vida, se você estiver disposto a dedicar o tempo necessário. Não tenha pressa, dê a si mesmo tempo para aprender. Só você é responsável pelo que faz com ele.**

```{admonition} O Accu-Chek Insight está sendo descontinuado :class: note

A Roche está saindo do mercado de bombas de insulina para concentrar o seu portfólio de diabetes no CGM Accu-Chek SmartGuide. Ela anunciou o fim das vendas das bombas Accu-Chek Combo e Accu-Chek Insight; a sua última bomba, a micro bomba Accu-Chek Solo, também está sendo descontinuada (últimas entregas na Alemanha no fim de 2025). A mudança está sendo feita por região, começando pela Alemanha; outros mercados europeus devem vir depois. O suporte ao Insight já consta como encerrado (veja [Bombas que não são mais vendidas](./Future-possible-Pump-Drivers.md)). Se você depende desta bomba, planeje com antecedência a troca para uma bomba suportada.

    <br />```{note}
    Antes de o **AAPS** ter um driver próprio para o Insight, o Insight era controlado pelo aplicativo separado [SightRemote](https://github.com/TebbeUbben/SightRemote). O SightRemote não é mais necessário nem mantido: se você ainda o tem instalado daquela época, desinstale-o e use uma versão atual do **AAPS**.
    

```{contents} Índice :depth: 1 :local: true

    <br />## Recursos da bomba com o AAPS
    
    * Comunica-se com o **AAPS** pelo Bluetooth do próprio telefone, sem um dispositivo de comunicação extra.
    * Ajuste automático de horário de verão e de fuso horário.
    
    ## Requisitos de hardware e software
    
    * Uma bomba Roche Accu-Chek Insight (qualquer firmware, todos funcionam)
    
    Nota: o AAPS sempre grava os dados no **primeiro perfil de taxa basal da bomba**.
    
    * Um telefone Android com Android 12 ou mais novo (veja [Telefones](../Getting-Started/Phones.md))
    * O aplicativo AAPS instalado no seu telefone
    
    ## Configuração
    
    * A bomba Insight deve estar conectada a só um dispositivo por vez. Se você já usou o controle remoto do Insight (medidor), precisa remover o medidor da lista de dispositivos pareados da sua bomba: **Menu** > **Settings** > **Communication** > **Remove device**.
    
       ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)
    
    * Em [Configuração > Bomba](#Config-Builder-pump), selecione o cartão **Accu-Chek Insight**. Só uma bomba pode estar ativa por vez.
    
       ![Configuração > Bomba com o plugin Accu-Chek Insight](../images/v4/Configuration/configuration_pump_list_1.png)
    
       Depois de selecionado, o cartão **Accu-Chek Insight** mostra dois botões, **Configurações** e **Abrir plugin**:
    
       ![O plugin Accu-Chek Insight selecionado em Configuração > Bomba](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       **Configurações** abre as configurações do driver Accu-Chek Insight (veja [Configurações no AAPS](#Accu-Chek-Insight-Pump-settings-in-aaps)).
    
       **Abrir plugin** (ou **Gerenciar → Bomba**) abre a tela da bomba Accu-Chek Insight. Antes de a bomba ser pareada, ela fica assim:
    
       ![Tela da bomba Accu-Chek Insight antes do pareamento](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### Pareamento
    
    * Na tela da bomba, toque em **Pareamento Insight**. O assistente de pareamento abre e procura dispositivos Bluetooth próximos (parte de cima da imagem abaixo).
    * Na bomba Insight, vá para **Menu** > **Settings** > **Communication** > **Add Device**. A bomba mostra a tela abaixo (parte de baixo da imagem abaixo) com o número de série da bomba.
    
       ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)
    
    * De volta ao telefone, toque no número de série da bomba na lista de dispositivos Bluetooth. Se o Android pedir para confirmar o pareamento, toque em **Parear**.
    
       ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)
    
    * A bomba e o telefone mostram um código. Verifique se os códigos são iguais nos dois dispositivos. Confirme na bomba e toque em **Sim** no telefone. (Toque em **Não** se os códigos forem diferentes.)
    
       ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)
    
    * O telefone mostra **Pareamento concluído**. Toque em **Sair** para voltar à tela da bomba.
    
       ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)
    
    * Para verificar se está tudo certo, olhe a tela da bomba (**Gerenciar → Bomba**). Depois de pareada, ela mostra informações sobre a bomba, como **Número de série**, **Data de fabricação**, **Versão do software (release)** e **Endereço Bluetooth**.
    
       ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)
    
       ```{admonition} Captura de tela antiga
       :class: note
       Com exceção da parte de cima da primeira imagem, as capturas de tela de pareamento acima são de uma versão anterior do **AAPS** e podem ser diferentes no **AAPS** 4.
       ```
    
    * Para remover o pareamento, toque em **Desfazer pareamento** na tela da bomba e confirme **Redefinir informações de pareamento?**. O botão **Pareamento Insight** aparece de novo.
    
    Nota: não existe uma conexão permanente entre a bomba e o telefone. O **AAPS** só se conecta quando é necessário (por exemplo, para definir uma taxa basal temporária, dar um bólus ou ler o histórico da bomba). Caso contrário, as baterias do telefone e da bomba acabariam rápido demais.
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## Configurações no AAPS
    
    Abra as configurações com **Configurações** no cartão **Accu-Chek Insight** em **Configuração** > **Bomba**, ou com o ícone de engrenagem no canto superior direito da tela da bomba.
    
    ![Accu-Chek Insight driver settings](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    In the Insight settings in **AAPS** you can enable the following options:
    
    * **Log reservoir changes**: automatically records an insulin cartridge change when you change the cartridge in the pump.
    
    * **Registrar trocas de tubo**: adiciona uma nota no banco de dados do **AAPS** quando você executa o programa "tube filling" (preencher tubo) na bomba.
    
    * **Registrar trocas de local**: adiciona uma nota no banco de dados do **AAPS** quando você executa o programa "cannula filling" (preencher cânula) na bomba. **Nota: uma troca de local também reinicia o Autosens.**
    
    * **Registrar trocas de bateria**: registra uma troca de bateria quando você coloca uma bateria nova na bomba.
    
    * **Registrar alterações do modo de operação**: adiciona uma nota no banco de dados do **AAPS** sempre que você inicia, para ou pausa a bomba.
    
    * **Registrar alertas**: adiciona uma nota no banco de dados do **AAPS** sempre que a bomba emite um alerta (exceto lembretes e cancelamento de bólus e de TBR, que não são registrados).
    
    * **Ativar a emulação TBR**: a bomba Insight só consegue definir taxas basais temporárias (TBRs) de até 250%. Para contornar esse limite, a emulação de TBR manda a bomba administrar um bólus estendido para a insulina extra quando uma TBR acima de 250% é pedida.
    
      **Nota: use só um bólus estendido por vez. Vários bólus estendidos ao mesmo tempo podem causar erros.**
    
    * **Desativar vibrações na entrega manual de bólus**: impede que a bomba Insight vibre quando administra um bólus manual (ou um bólus estendido). Disponível só com o firmware 3.x do Insight.
    
    * **Desativar vibrações na entrega automática de bólus**: impede que a bomba Insight vibre quando administra um bólus automático (SMB ou basal temporária com emulação de TBR). Disponível só com o firmware 3.x do Insight.
    
    * **Duração mínima da recuperação [s]** e **Duração máxima da recuperação [s]**: quanto tempo o **AAPS** espera antes de tentar de novo depois de uma tentativa de conexão que falhou. Você pode escolher de 0 a 20 segundos. Se você tem problemas de conexão, escolha um tempo de espera maior.
        <br><br>Exemplo com duração mín. de recuperação = 5 e duração máx. de recuperação = 20
        <br><br>sem conexão -> espere <b>5</b> s.
          <br>  nova tentativa -> sem conexão -> espere <b>6</b> s.
          <br>  nova tentativa -> sem conexão -> espere <b>7</b> s.
          <br>  nova tentativa -> sem conexão -> espere <b>8</b> s.
          <br>...
          <br>nova tentativa -> sem conexão -> espere <b>20</b> s.
          <br>nova tentativa -> sem conexão -> espere <b>20</b> s.
          <br>...
    
    * **Atraso de desconexão [s]**: quanto tempo (em segundos) o **AAPS** espera antes de se desconectar da bomba depois que uma operação termina. Você pode escolher de 0 a 15 segundos. O valor padrão é 5 segundos.
    
    Nos períodos em que a bomba estava parada, o **AAPS** registra uma taxa basal temporária de 0%.
    
    ### A tela da bomba
    
    A tela da bomba Accu-Chek Insight (**Gerenciar → Bomba**) mostra o estado atual da bomba, por exemplo **Status**, **Última conexão**, **Modo de funcionamento**, **Bateria**, **Nível do reservatório**, as doses diárias totais de hoje (**TDD de bólus**, **TDD basal**), as taxas basais e o último bólus. Depois de pareada, a bomba tem estes botões:
    
    * **Atualizar**: atualiza o estado da bomba.
    * **Ativar notificação do fim da basal temporária (configuração da bomba)** / **Desativar notificação do fim da basal temporária (configuração da bomba)**: uma bomba Insight padrão toca um alarme quando uma TBR termina. Este botão liga ou desliga esse alarme sem precisar de um software de configuração.
    * **Desfazer pareamento**: remove o pareamento com a bomba (veja [Pareamento](#accu-chek-insight-pairing)).
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)
    
    ```{admonition} Captura de tela antiga
    :class: note
    A captura de tela acima é de uma versão anterior do **AAPS**. No **AAPS** 4, a tela da bomba é diferente e também tem um botão **Desfazer pareamento**.
    

## Configurações na bomba

Configure os alarmes na bomba assim:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound
* Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remova todas as barras)
* Menu > Modes > Signal mode > Quiet

Isso silencia todos os alarmes da bomba e deixa o AAPS decidir se um alarme é importante para você. Se o AAPS não confirmar um alarme, o volume dele aumenta (primeiro bipe, depois vibração).

(Accu-Chek-Insight-Pump-vibration)=

### Vibração

Dependendo da versão do firmware da sua bomba, o Insight vibra rapidamente toda vez que um bólus é administrado (por exemplo, quando o AAPS dá um SMB ou quando a emulação de TBR administra um bólus estendido).

* Firmware 1.x: sem vibração, por projeto.
* Firmware 2.x: a vibração não pode ser desativada.
* Firmware 3.x: o AAPS administra o bólus sem vibração.

A versão do firmware pode ser vista no menu.

## Troca da bateria

Battery life for Insight when looping ranges from 10 to 14 days, maximum 20 days. O usuário que relatou isso usa pilhas de lítio Energizer.

A bomba Insight tem uma pequena bateria interna que mantém funções essenciais, como o relógio, funcionando enquanto você troca a bateria removível. Se a troca da bateria demorar demais, essa bateria interna pode ficar sem carga, o relógio será zerado e você terá que digitar uma nova data e hora depois de colocar a bateria nova. Se isso acontecer, todas as entradas do AAPS anteriores à troca da bateria não serão mais incluídas nos cálculos, pois a hora correta não pode ser identificada.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Erros específicos do Insight

### Bólus estendido

Use só um bólus estendido por vez, pois vários bólus estendidos ao mesmo tempo podem causar erros.

### Tempo limite

Às vezes, a bomba Insight não responde enquanto o **AAPS** estabelece a conexão. O **AAPS** então mostra a notificação "Tempo esgotado durante o handshake - reinicie o Bluetooth".

![Insight: reiniciar Bluetooth](../images/Insight_ResetBT.png)

Se isso acontecer, desligue o Bluetooth na bomba E no telefone por cerca de 10 segundos e depois ligue-o de novo.

## Viagens entre fusos horários com a bomba Insight

Para informações sobre viagens entre fusos horários, veja a seção [Viagens entre fusos horários com bombas](#timezone-traveling-insight).

## Onde obter ajuda

O desenvolvimento do driver Insight é feito pela comunidade de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a seção desta documentação sobre o assunto para confirmar como o recurso deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Relate um bug**: primeiro procure nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu telefone, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).