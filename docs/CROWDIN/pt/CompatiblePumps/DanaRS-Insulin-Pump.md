# DanaRS, Dana-i e Dana-i2

*Estas instruções servem para configurar a app e a bomba, se tiver uma DanaRS de 2017 ou mais recente, uma Dana-i ou uma Dana-i2. Se tiver a DanaR original, veja antes [Bomba de insulina DanaR](./DanaR-Insulin-Pump.md).*

**A Dana-i2 pode ser usada a partir da versão 4.0 do AAPS.** Usa o mesmo controlador **Dana-i/RS** que a Dana-i.

* Na bomba DanaRS/i/i2, a app usa o "BASAL A". Os dados que lá estão são substituídos.

    {contents} Índice
    :depth: 1
    :local: true

## Funções da bomba com o AAPS

* Comunica com o **AAPS** pelo Bluetooth do próprio telefone, sem um dispositivo de comunicação adicional.
* A hora de verão e as mudanças de fuso horário têm de ser tratadas manualmente (veja [Viajar entre fusos horários](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Emparelhar a bomba

* Abra o **menu** (☰) no canto superior esquerdo do ecrã principal do **AAPS** e selecione **Configuração**.
* Toque em **Bomba** e selecione **Dana-i/RS**.
    
    ![Configuração > Bomba com o plugin Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Depois de selecionado, o cartão **Dana-i/RS** mostra dois botões, **Definições** e **Abrir plugin**:
    
    ![O plugin Dana-i/RS selecionado em Configuração > Bomba](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Definições** abre as definições do controlador Dana-i/RS:
    
    ![Definições do controlador Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Abrir plugin** (ou **Gerir** > **Bomba**) abre o ecrã da bomba Dana-i/RS. Antes de a bomba ser emparelhada, o ecrã tem este aspeto:
    
    ![Ecrã da bomba Dana-i/RS antes do emparelhamento](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* No ecrã da bomba, toque em **Emparelhamento**. O **AAPS** procura bombas próximas.

* Toque na entrada da sua bomba na lista.
    
    ![O ecrã de emparelhamento com uma bomba Dana encontrada na pesquisa](../images/DanaRS_i_Pairing.png)

* **Tem de confirmar o emparelhamento na bomba!** Funciona da mesma forma que outros emparelhamentos Bluetooth que talvez conheça (por exemplo, entre o telefone e o rádio do carro).
    
    ![Confirmação do emparelhamento da Dana RS](../images/DanaRS_Pairing.png)

* Siga o processo de emparelhamento conforme o tipo e o firmware da sua bomba:
    
    * Na DanaRS v1, o **AAPS** pede a **Senha da bomba (apenas v1)**. Introduza a senha da bomba (veja [Senha predefinida](#DanaRS-Insulin-Pump-default-password)).
    * Na DanaRS v3, o **AAPS** pede-lhe para premir OK na bomba e escrever as 2 sequências de números e letras que a bomba mostra. Mantenha o ecrã da bomba ligado premindo o botão de menos até terminar. Depois toque em **Concluído**.
    * Na Dana-i e na Dana-i2 aparece a janela normal de emparelhamento do Android. Introduza o número de 6 dígitos que a bomba mostra.

* Quando aparecer **Emparelhamento bem-sucedido!**, toque em **Concluído**.
    
    ![Emparelhamento bem-sucedido!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Volta ao ecrã da bomba, que agora mostra o estado da sua bomba.
    
    ![Ecrã da bomba Dana-i/RS depois do emparelhamento](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* Em **Definições**, selecione **Velocidade do bólus** para alterar a velocidade predefinida do bólus (12 s/U, 30 s/U ou 60 s/U).

* Defina o passo da basal na bomba para 0,01 U/h no menu do médico (Doctors menu; veja o manual da bomba).
* Defina o passo do bólus na bomba para 0,05 U no menu do médico (Doctors menu; veja o manual da bomba). O **AAPS** lê os passos da basal e do bólus da bomba e usa-os em todos os bólus, para que um bólus corresponda sempre ao passo definido na bomba. O ecrã da bomba mostra-os na linha **Passo basal/bólus**.
* Ativar bólus prolongado na bomba

### Opções mostradas só em alguns modelos

* **Bloqueio automático**: na Dana-i2, o ecrã **Opções do utilizador** (no ecrã da bomba, **Gerir** > **Bomba**) tem um interruptor **Bloqueio automático** para a definição de bloqueio automático da bomba. Prima **Gravar opções para a bomba** depois de o alterar.
* **Modo fácil**: nos modelos de bomba que têm um modo de menu fácil, o ecrã da bomba mostra uma linha **Modo fácil** com **Ligado** ou **Desligado**.
* Se uma Dana-i2 recusar um bólus, o **AAPS** mostra o motivo, por exemplo *A bomba não foi purgada*, *Insulina insuficiente no reservatório* ou *O modo Easy sleep está ligado na bomba*.

(DanaRS-Insulin-Pump-default-password)=

### Senha predefinida

* Na DanaRS com firmware v1 e v2, a senha predefinida é 1234.
* Na DanaRS com firmware v3 ou na Dana-i, a senha predefinida é obtida a partir da data de fabrico, no formato MMDD, em que MM é o mês e DD é o dia em que a bomba foi produzida (por exemplo, '0124' representa o mês 01 e o dia 24).
    
    * No MAIN MENU selecione REVIEW e depois abra SHIPPING INFORMATION no submenu
    * O número 3 é a data de fabrico. 
    * Na v3/i, esta senha só serve para bloquear o menu da bomba. Não é usada para a comunicação e não é preciso introduzi-la no AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Alterar a senha na bomba

* Prima o botão OK na bomba
* No menu principal, selecione "OPTION" (mova para a direita premindo várias vezes o botão de seta)
    
    ![DanaRS Main Menu](../images/DanaRSPW_01_MainMenu.png)

* No menu de opções, selecione "USER OPTION"
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Use o botão de seta para descer até "11. password"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Prima OK para introduzir a senha antiga.

* Introduza a **senha antiga** (para a senha predefinida, veja [acima](#DanaRS-Insulin-Pump-default-password)) e prima OK
    
    ![DanaRS: introduzir a senha antiga](../images/DanaRSPW_04_11PWenter.png)

* Se introduzir aqui uma senha errada, não aparece nenhuma mensagem de erro!

* Defina a **nova senha** (altere os números com os botões + & - / mova para a direita com o botão de seta).
    
    ![DanaRS: nova senha](../images/DanaRSPW_05_PWnew.png)

* Confirme com o botão OK.

* Prima OK para guardar a definição.
    
    ![DanaRS: guardar a nova senha](../images/DanaRSPW_06_PWnewSave.png)

* Desça até "14. EXIT" e prima OK para sair.
    
    ![DanaRS: sair](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Erros específicos da Dana RS

### Erro durante a administração de insulina

Se a ligação entre o AAPS e a Dana RS se perder durante a administração de um bólus (por exemplo, se se afastar do telefone enquanto a Dana RS está a administrar insulina), verá a mensagem seguinte e ouvirá um alarme.

![Alarme de administração de insulina](../images/DanaRS_Error_bolus.png)

* Na maioria dos casos é apenas um problema de comunicação e a quantidade correta de insulina é administrada.
* Verifique no histórico da bomba se foi dado o bólus correto. Pode fazê-lo na própria bomba ou no **AAPS**, no ecrã da bomba (**Gerir** > **Bomba**) > **Histórico da Bomba** > **Bólus**.
* Se quiser, elimine a entrada com o erro nos [tratamentos](#screens-bolus-carbs).
* A quantidade real é lida e registada na ligação seguinte. Para forçar isto, toque em **Atualizar** no ecrã da bomba, ou espere simplesmente pela ligação seguinte.

## Nota especial ao trocar de telefone

Ao mudar para um telefone novo, são necessários os passos seguintes:

* [Exportar definições](../Maintenance/ExportImportSettings.md) no telefone antigo
* Transferir as definições do telefone antigo para o novo

### DanaRS v1

* **Emparelhe manualmente** a Dana RS com o novo telefone
* Se marcar **Substituir também as definições da bomba** ao importar, as definições de ligação à bomba também são importadas e o AAPS no novo telefone já "conhece" a bomba, por isso não inicia uma pesquisa Bluetooth. Por isso, o novo telefone e a bomba têm de ser emparelhados manualmente.
* Instale o AAPS no novo telefone.
* [Importar definições](../Maintenance/ExportImportSettings.md) no telefone novo

### DanaRS v3, Dana-i, Dana-i2

* Inicie o processo de emparelhamento como descrito [acima](#DanaRS-Insulin-Pump-pairing-pump).
* Por vezes pode ser preciso apagar primeiro as informações de emparelhamento no **AAPS**. No ecrã da bomba (**Gerir** > **Bomba**), toque em **Desemparelhar** e confirme **Repor as informações de emparelhamento?**. Depois toque de novo em **Emparelhamento**.

## Viajar entre fusos horários com as bombas DanaRS, Dana-i e Dana-i2

Para informações sobre viagens entre fusos horários, veja a secção [Viajar entre fusos horários com bombas](#timezone-traveling-danarv2-danars).

## Onde obter ajuda

O controlador da DanaRS/Dana-i/Dana-i2 é desenvolvido pela comunidade em regime de **voluntariado**. Antes de pedir ajuda:

1. **Leia** a secção relevante desta documentação para confirmar como a funcionalidade deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou num dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Comunique um erro**: procure primeiro nos [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo problema](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [ficheiros de registo](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, indique a marca e o modelo do telefone, a versão do Android, a versão do **AAPS** e uma descrição clara do problema (o que mudou, quando funcionou pela última vez).