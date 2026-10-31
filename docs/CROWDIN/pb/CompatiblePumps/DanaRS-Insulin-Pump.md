# DanaRS, Dana-i e Dana-i2

*Estas instruções são para configurar o aplicativo e a sua bomba se você tem um DanaRS de 2017 ou mais novo, um Dana-i ou um Dana-i2. Se você tem o DanaR original, veja [DanaR](./DanaR-Insulin-Pump.md).*

**O Dana-i2 pode ser usado a partir da versão 4.0 do AAPS.** Ele usa o mesmo driver **Dana-i/RS** que o Dana-i.

* Nas bombas DanaRS/i/i2, o aplicativo usa a "BASAL A". Os dados existentes são sobrescritos.

    {contents} Índice
    :depth: 1
    :local: true

## Recursos da bomba com o AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio telefone, sem um dispositivo de comunicação extra.
* Mudanças de horário de verão e de fuso horário devem ser feitas manualmente (veja [Viagens entre fusos horários](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Parear a bomba

* Abra o **menu** (☰) no canto superior esquerdo da tela principal do **AAPS** e selecione **Configuração**.
* Toque em **Bomba** e selecione **Dana-i/RS**.
    
    ![Configuração > Bomba com o plugin Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Depois de selecionado, o cartão **Dana-i/RS** mostra dois botões, **Configurações** e **Abrir plugin**:
    
    ![O plugin Dana-i/RS selecionado em Configuração > Bomba](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Configurações** abre as configurações do driver Dana-i/RS:
    
    ![Configurações do driver Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Abrir plugin** (ou **Gerenciar** > **Bomba**) abre a tela da bomba Dana-i/RS. Antes de a bomba ser pareada, ela fica assim:
    
    ![Tela da bomba Dana-i/RS antes do pareamento](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* Na tela da bomba, toque em **Pareamento**. O **AAPS** procura bombas próximas.

* Toque na sua bomba na lista.
    
    ![A tela de pareamento com uma bomba Dana encontrada na busca](../images/DanaRS_i_Pairing.png)

* **Você precisa confirmar o pareamento na bomba!** Isso funciona da mesma forma que outros pareamentos Bluetooth que você talvez conheça (por exemplo, celular e som do carro).
    
    ![Confirmação do pareamento do Dana RS](../images/DanaRS_Pairing.png)

* Siga o processo de pareamento conforme o tipo e o firmware da sua bomba:
    
    * Para o DanaRS v1, o **AAPS** pede a **Senha da bomba (apenas v1)**. Digite a senha da sua bomba (veja [Senha padrão](#DanaRS-Insulin-Pump-default-password)).
    * Para o DanaRS v3, o **AAPS** pede que você pressione OK na bomba e digite as 2 sequências de números e letras mostradas na bomba. Mantenha a tela da bomba ligada pressionando o botão de menos até terminar. Depois, toque em **Concluído**.
    * Para o Dana-i e o Dana-i2, aparece a janela padrão de pareamento do Android. Digite o número de 6 dígitos mostrado na bomba.

* Quando aparecer **Pareamento concluído!**, toque em **Concluído**.
    
    ![Pareamento concluído!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Você volta para a tela da bomba, que agora mostra o estado da sua bomba.
    
    ![Tela da bomba Dana-i/RS depois do pareamento](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* Em **Configurações**, selecione **Velocidade do bólus** para mudar a velocidade padrão do bólus (12 s/U, 30 s/U ou 60 s/U).

* Defina o incremento da basal na bomba como 0,01 U/h no menu do médico (Doctors menu, veja o manual da bomba).
* Defina o incremento do bólus na bomba como 0,05 U no menu do médico (Doctors menu, veja o manual da bomba). O **AAPS** lê os incrementos da basal e do bólus da bomba e usa-os em todos os bólus, assim um bólus sempre corresponde ao incremento definido na bomba. A tela da bomba mostra-os na linha **Incremento basal/bólus**.
* Habilitar bólus estendido na bomba

### Opções mostradas só em alguns modelos

* **Bloqueio automático**: no Dana-i2, a tela **Opções do usuário** (na tela da bomba, **Gerenciar** > **Bomba**) tem uma chave **Bloqueio automático** para a configuração de bloqueio automático da bomba. Depois de mudá-la, pressione **Gravar opções para a bomba**.
* **Modo fácil**: nos modelos de bomba que têm um modo de menu fácil, a tela da bomba mostra uma linha **Modo fácil** com **Ligado** ou **Desligado**.
* Se um Dana-i2 recusar um bólus, o **AAPS** mostra o motivo, por exemplo *A bomba não foi purgada*, *Insulina insuficiente no reservatório* ou *O modo Easy sleep está ativado na bomba*.

(DanaRS-Insulin-Pump-default-password)=

### Senha padrão

* Para o DanaRS com firmware v1 e v2, a senha padrão é 1234.
* Para o DanaRS com firmware v3 ou o Dana-i, a senha padrão vem da data de fabricação e é calculada como MMDD, onde MM é o mês e DD é o dia em que a bomba foi produzida (por exemplo, '0124' representa o mês 01 e o dia 24).
    
    * No MAIN MENU, selecione REVIEW e depois abra SHIPPING INFORMATION no submenu
    * O número 3 é a data de fabricação. 
    * Para v3/i, esta senha é usada só para bloquear o menu da bomba. Ela não é usada para a comunicação e não é necessário digitá-la no AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Alterar a senha na bomba

* Pressione o botão OK na bomba
* No menu principal, selecione "OPTION" (vá para a direita pressionando o botão de seta várias vezes)
    
    ![Menu principal do DanaRS](../images/DanaRSPW_01_MainMenu.png)

* No menu de opções, selecione "USER OPTION"
    
    ![Menu de opções do DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Use o botão de seta para descer até "11. password"
    
    ![DanaRS 11. Senha](../images/DanaRSPW_03_11PW.png)

* Pressione OK para digitar a senha antiga.

* Digite a **senha antiga** (para a senha padrão, veja [acima](#DanaRS-Insulin-Pump-default-password)) e pressione OK
    
    ![DanaRS digitar a senha antiga](../images/DanaRSPW_04_11PWenter.png)

* Se você digitar a senha errada aqui, não haverá nenhuma mensagem de erro!

* Defina a **nova senha** (mude os números com os botões + & - / vá para a direita com o botão de seta).
    
    ![DanaRS nova senha](../images/DanaRSPW_05_PWnew.png)

* Confirme com o botão OK.

* Pressione OK para salvar a configuração.
    
    ![DanaRS salvar a nova senha](../images/DanaRSPW_06_PWnewSave.png)

* Desça até "14. EXIT" e pressione OK para sair.
    
    ![DanaRS sair](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Erros específicos do Dana RS

### Erro durante a administração de insulina

Se a conexão entre o AAPS e o Dana RS for perdida durante a administração de um bólus (por exemplo, você se afasta do telefone enquanto o Dana RS está administrando insulina), você verá a seguinte mensagem e ouvirá um alarme.

![Alarme de administração de insulina](../images/DanaRS_Error_bolus.png)

* Na maioria dos casos, é só um problema de comunicação e a quantidade correta de insulina é administrada.
* Verifique no histórico da bomba se o bólus correto foi administrado. Você pode fazer isso na própria bomba ou no **AAPS**, na tela da bomba (**Gerenciar** > **Bomba**) > **Histórico da Bomba** > **Bólus**.
* Se quiser, exclua a entrada de erro em [tratamentos](#screens-bolus-carbs).
* A quantidade real é lida e registrada na próxima conexão. Para forçar isso, toque em **Atualizar** na tela da bomba, ou simplesmente espere a próxima conexão.

## Nota especial ao trocar de telefone

Ao trocar para um novo telefone, os seguintes passos são necessários:

* [Exportar configurações](../Maintenance/ExportImportSettings.md) no telefone antigo
* Transferir as configurações do telefone antigo para o novo

### DanaRS v1

* **Pareie manualmente** o Dana RS com o novo telefone
* Se você marcar **Substituir também as configurações da bomba** ao importar, as configurações de conexão da bomba também são importadas e o AAPS no novo telefone já vai "conhecer" a bomba e, por isso, não vai iniciar uma busca Bluetooth. Por isso, o novo telefone e a bomba devem ser pareados manualmente.
* Instale o AAPS no novo telefone.
* [Importar configurações](../Maintenance/ExportImportSettings.md) no telefone novo

### DanaRS v3, Dana-i, Dana-i2

* Inicie o processo de pareamento como descrito [acima](#DanaRS-Insulin-Pump-pairing-pump).
* Às vezes, pode ser necessário apagar primeiro as informações de pareamento no **AAPS**. Na tela da bomba (**Gerenciar** > **Bomba**), toque em **Desfazer pareamento** e confirme **Redefinir informações de pareamento?**. Depois, toque em **Pareamento** novamente.

## Viagens entre fusos horários com as bombas DanaRS, Dana-i e Dana-i2

Para informações sobre viagens entre fusos horários, veja a seção [Viagens entre fusos horários com bombas](#timezone-traveling-danarv2-danars).

## Onde obter ajuda

O desenvolvimento do driver DanaRS/Dana-i/Dana-i2 é feito pela comunidade de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a seção desta documentação sobre o assunto para confirmar como o recurso deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Relate um bug**: primeiro procure nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe os seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu telefone, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).