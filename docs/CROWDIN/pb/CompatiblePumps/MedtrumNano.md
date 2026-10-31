(medtrum-nano-300u)=
# Medtrum Nano 200U / 300U

Estas instruções são para configurar a bomba de insulina Medtrum.

```{contents} Table of contents
:depth: 1
:local: true
```

## Recursos da bomba com o AAPS
* Todas as funções do loop são suportadas (SMB, TBR etc.)
* Ajuste automático do horário de verão e do fuso horário
* O bólus estendido não é suportado pelo driver do AAPS

## Requisitos de hardware e software
* **Bases de bomba e patches de reservatório Medtrum compatíveis**
    - Suportados atualmente:
        - Medtrum TouchCare Nano 200U com bases de bomba ref.: **MD0201** e **MD8201**.
        - Medtrum TouchCare 300U com base de bomba ref.: **MD8301**.
        - Se você tem um modelo não suportado e quer doar o hardware ou ajudar com testes, entre em contato conosco pelo Discord [aqui](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **AAPS compilado e instalado** com as instruções de [Compilar o APK](../SettingUpAaps/BuildingAaps.md).
* **Telefone Android compatível** com conexão Bluetooth BLE
    - Veja as [Notas de versão](../Maintenance/ReleaseNotes.md) do AAPS

## Antes de começar

**SEGURANÇA EM PRIMEIRO LUGAR** Não faça este processo em um ambiente onde você não consiga se recuperar de um erro (patches extras, insulina e dispositivos para controlar a bomba são obrigatórios).

**O PDM e o app Medtrum não funcionam com um patch ativado pelo AAPS.** Antes, você pode ter usado o PDM ou o app Medtrum para enviar comandos à sua bomba. Por motivos de segurança, você só pode usar o patch ativado com o dispositivo ou app que foi usado para ativá-lo.

*Isso NÃO significa que você deve jogar fora o seu PDM. Recomendamos guardá-lo em um lugar seguro como reserva para emergências, por exemplo, se você perder o telefone ou se o AAPS não estiver funcionando corretamente.*

**Sua bomba não para de aplicar insulina quando não está conectada ao AAPS** As taxas basais padrão são programadas na bomba conforme definido no perfil ativo atual. Enquanto o AAPS estiver funcionando, ele envia comandos de taxa basal temporária que duram no máximo 120 minutos. Se por algum motivo a bomba não receber novos comandos (por exemplo, porque a comunicação foi perdida devido à distância entre a bomba e o telefone), a bomba volta para a taxa basal padrão programada nela quando a taxa basal temporária terminar.

**O perfil do AAPS não suporta intervalos de 30 minutos na taxa basal** Se você é novo no AAPS e está configurando o seu perfil de taxa basal pela primeira vez, saiba que taxas basais que começam na meia hora não são suportadas. Você precisará ajustar o seu perfil de taxa basal para começar na hora cheia. Por exemplo, se você tem uma taxa basal de 1,1 unidades que começa às 09:30 e dura 2 horas, terminando às 11:30, isso não vai funcionar. Você precisará mudar essa taxa basal de 1,1 unidades para um intervalo de 9:00–11:00 ou 10:00–12:00. Mesmo que o hardware da bomba Medtrum suporte intervalos de 30 minutos no perfil basal, o AAPS atualmente não consegue considerá-los em seus algoritmos.

**Taxas basais de 0 U/h no perfil NÃO são suportadas no AAPS** Embora a bomba Medtrum suporte uma taxa basal zero, o AAPS usa múltiplos da taxa basal do perfil para decidir o tratamento automático e, por isso, não consegue funcionar com uma taxa basal zero. A taxa basal mínima do perfil é 0,05 U/h.

Uma taxa basal zero temporária pode ser obtida com a função "Desconectar bomba" ou com uma combinação de Desativar loop/Basal temporária ou Suspender loop/Basal temporária.

## Setup

```{caution}
Quando você ativa um patch com o **AAPS**, você **PRECISA** desligar todos os outros dispositivos que podem se comunicar com a base da bomba Medtrum, por exemplo, um PDM ativo ou o app Medtrum.
```

### Passo 1: Selecionar a bomba Medtrum

#### Opção 1: Novas instalações

Se você está instalando o **AAPS** pela primeira vez, o **Assistente de Configuração** guia você pela configuração. Selecione **Medtrum** quando chegar ao passo **Bomba**.

Se tiver dúvidas, você também pode selecionar **Bomba virtual** e selecionar **Medtrum** depois, ao terminar de configurar o **AAPS** (veja a opção 2).

![Passo Bomba do Assistente de Configuração](../images/setup-wizard/Wizard-Pump.png)

#### Opção 2: A tela Configuração

Em uma instalação existente, você pode selecionar a bomba **Medtrum** em [Configuração > Bomba](#Config-Builder-pump):

Abra o **menu** (☰) no canto superior esquerdo, toque em **Configuração** > **Bomba** e selecione o cartão **Medtrum**. Só uma bomba pode estar ativa por vez.

![Configuração > Bomba com o plugin Medtrum](../images/v4/Configuration/configuration_pump_list_4.png)

Depois de selecionado, o cartão **Medtrum** mostra dois botões, **Configurações** e **Abrir plugin**:

![O plugin Medtrum selecionado em Configuração > Bomba](../images/v4/Pumps/medtrum_enabled.png)

**Abrir plugin** (ou **Gerenciar → Bomba**) abre a tela da bomba Medtrum. Você usa essa tela para trocar patches e ver o status da bomba. Antes de um patch ser ativado, ela fica assim:

![Tela da bomba Medtrum antes do pareamento](../images/v4/Pumps/medtrum_pump_screen.png)

(medtrum-step-2)=
### Passo 2: Alterar as configurações da Medtrum

Toque em **Configurações** no cartão **Medtrum** em **Configuração** > **Bomba**. Você também pode tocar no ícone de engrenagem no canto superior direito da tela da bomba Medtrum. Isso abre as **Configurações da Bomba Medtrum**:

![Configurações do driver Medtrum](../images/v4/Pumps/medtrum_settings.png)

```{note}
Não existe mais a configuração **Número de série**. O **AAPS** encontra a base da sua bomba com uma busca Bluetooth na primeira vez que você ativa um patch (veja o [Passo 3](#medtrum-activate-patch)) e memoriza o número de série dela. Para usar outra base de bomba, veja [Cancelar pareamento](#medtrum-unpair).
```

#### Configurações de alarme

***Padrão: Bipe.***

Esta configuração muda a forma como a bomba avisa você quando há um aviso ou erro.

- **Bipe**: o patch emite bipes em alarmes e avisos.
- **Silencioso**: o patch não avisa você em alarmes e avisos.

Observação: no modo silencioso, o **AAPS** ainda toca o alarme, dependendo das configurações de volume do seu telefone. Se você não responder ao alarme, o patch acaba emitindo bipes.

#### Notificação de aviso da bomba

***Padrão: Ativado.***

Esta configuração muda a forma como o **AAPS** mostra notificações de avisos não críticos da bomba. Quando ativada, uma notificação é mostrada no telefone quando ocorre um aviso da bomba, incluindo:
- Bateria fraca
- Reservatório baixo (20 unidades)
- Patch expira em breve

Recomendamos deixar esta opção ativada quando os alarmes da bomba estiverem definidos como **Silencioso**. Em ambos os casos, esses avisos também são mostrados na tela da bomba Medtrum em [Alarmes ativos](#medtrum-active-alarms).

(medtrum-patch-expiration)=
#### Expiração do patch

***Padrão: Ativado.***

Esta configuração muda o comportamento do patch. Quando ativada, o patch expira após 3 dias e dá um aviso sonoro se o som estiver ativado. Após 3 dias e 8 horas, o patch para de funcionar.

Se esta configuração estiver desativada, o patch não avisa você antes de parar. Com firmware recente da base da bomba, um patch funciona por no máximo 5 dias.

#### Aviso de expiração da bomba [horas]

***Padrão: 72 horas.***

Esta configuração muda o momento do aviso de expiração. Quando a [Expiração do patch](#medtrum-patch-expiration) está ativada, o **AAPS** mostra uma notificação este número de horas após a ativação.

#### Insulina máxima por hora [unidades]

***Padrão: 25 U.***

Esta configuração muda a quantidade máxima de insulina que pode ser aplicada em uma hora. Se este limite for ultrapassado, o patch é suspenso e dá um alarme. Você pode redefinir o alarme com o botão **Redefinir alarmes** na tela da bomba, veja [Redefinir alarmes](#nano-reset-alarms).

Defina um valor razoável para a sua necessidade de insulina.

#### Insulina máxima diária [unidades]

***Padrão: 80 U.***

Esta configuração muda a quantidade máxima de insulina que pode ser aplicada em um dia. Se este limite for ultrapassado, o patch é suspenso e dá um alarme. Você pode redefinir o alarme com o botão **Redefinir alarmes** na tela da bomba, veja [Redefinir alarmes](#nano-reset-alarms).

Defina um valor razoável para a sua necessidade de insulina.

#### Buscar em caso de erro de conexão

***Padrão: Desligado.***

Fica em **Configurações Avançadas**.

Ative esta opção somente se você tiver problemas de conexão. Quando ativada, o driver busca a bomba novamente antes de tentar reconectar-se a ela. Verifique se a permissão de localização do **AAPS** está definida como "Permitir o tempo todo".

### Passo 2b: Configurações de alerta do AAPS

Estas configurações não fazem parte do driver Medtrum. Abra-as pelo ícone de **Configurações** (engrenagem) no canto superior direito da tela principal. Veja [Configurações](../SettingUpAaps/Preferences.md) para mais detalhes.

#### Monitor BT

Abra **Configurações** > **Bomba**:

![Settings > Pump](../images/preferences/settings_pump.png)

O **Monitor BT** desliga o Bluetooth do telefone por um segundo se o **AAPS** não conseguir se conectar à bomba. Isso pode ajudar em alguns telefones em que o Bluetooth trava.

Ative esta configuração se você tem problemas de conexão frequentes com a sua bomba.

#### Local alerts

Abra **Configurações** > **Alertas locais**:

![Settings > Local alerts](../images/preferences/settings_local_alerts.png)

##### Avisar se a bomba estiver inacessível

***Padrão: Ativado.***

Esta configuração fica sempre ativada quando o driver Medtrum está ativo. Ela avisa você quando a bomba está inacessível. Isso pode acontecer quando a bomba está fora do alcance ou quando não responde por causa de um patch ou base da bomba com defeito, por exemplo, quando entra água entre a base da bomba e o patch.

Por motivos de segurança, esta configuração não pode ser desativada.

##### Limite de bomba inacessível

***Padrão: 30 min.***

Esta configuração muda quanto tempo o **AAPS** espera antes de avisar você que a bomba está inacessível.

Você pode mudar esta configuração ao usar a bomba Medtrum, mas recomendamos manter 30 minutos por motivos de segurança.

(medtrum-activate-patch)=
### Passo 3: Ativar o patch

**Antes de continuar:**
- Tenha à mão a base da sua bomba Medtrum e um novo patch de reservatório.
- Desligue os outros dispositivos que podem se comunicar com a bomba Medtrum (PDM e app Medtrum).
- O ideal é que o **AAPS** esteja configurado e que um [perfil esteja ativado](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Se nenhum perfil estiver ativo, a ativação começa com um passo **Perfil necessário**, em que você escolhe o perfil a ser ativado.

#### Iniciar a ativação

Abra a [tela da bomba Medtrum](#nano-overview) (**Gerenciar → Bomba**) e toque em **Trocar patch**. Se você configurou a [proteção das configurações](#Preferences-protection), primeiro precisa digitar a sua senha ou PIN.

Se um patch já estiver ativo, você precisa desativá-lo primeiro, veja [Desativar o patch](#nano-deactivate-patch).

A ativação é um assistente passo a passo. Siga as instruções para preencher e ativar um novo patch. Toque em **Cancelar** em qualquer passo para parar.

```{important}
Só coloque o patch no corpo e insira a cânula quando o assistente pedir (depois que a purga estiver concluída).
```

Os primeiros passos que você vê dependem da sua configuração:

1. **Perfil necessário**: somente se nenhum perfil estiver ativo. Selecione o perfil a ser aplicado e continue.
2. **Encontrar bomba**: somente na primeira vez ou depois que você usou [Cancelar pareamento](#medtrum-unpair). Conecte a base da bomba a um patch novo para ligá-la. O **AAPS** busca bases de bomba Medtrum próximas (os nomes delas começam com `MT`). Toque na sua na lista. O **AAPS** salva o número de série dela e vai direto para o preenchimento do patch.

   ![Passo Encontrar bomba buscando uma base de bomba Medtrum](../images/medtrum/activation/FindPump.png)

3. **Ativar patch**: somente quando o **AAPS** já conhece a base da sua bomba. A tela diz "Nenhum patch ativo. Pressione **Próximo** para iniciar o processo de ativação." Verifique se a base da bomba **ainda não** está conectada ao patch e toque em **Próximo**.

![Iniciar a ativação](../images/medtrum/activation/StartActivation.png)

#### Conectar e preencher o patch

![Preencher o patch](../images/medtrum/activation/FillPatch.png)

Conecte a base da bomba ao patch, retire o ar que sobrou e preencha o patch com insulina. São necessárias no mínimo 70 unidades para a ativação. A tela mostra o nível do reservatório. Ainda não coloque o patch no corpo.

Quando o patch for detectado e preenchido, o botão **Próximo** aparece. Toque nele.

#### Selecionar insulina

Este passo só aparece se você tiver mais de uma insulina configurada no **AAPS**. Selecione a insulina com a qual você está preenchendo o patch. O **AAPS** aplica uma troca de perfil com essa insulina após a ativação.

#### Purgar o patch

![Pressionar até a metade](../images/medtrum/activation/HalfPress.png)

**Não** retire a trava de segurança. Pressione o botão da agulha no patch até a metade e toque em **Próximo** para iniciar a purga.

![Progresso da purga](../images/medtrum/activation/PrimeProgress.png)

Aguarde a purga terminar.

![Purga concluída](../images/medtrum/activation/PrimeComplete.png)

Quando a purga estiver concluída, toque em **Próximo** para continuar.

#### Rotação do local

Este passo só aparece se você gerencia os locais da bomba com a [Rotação do local](#Aapsscreens-site-rotation) (configuração **Gerenciar rodízio do local da bomba**). Escolha onde você coloca o patch no corpo ou pule este passo.

#### Colocar o patch

![Colocar o patch](../images/medtrum/activation/AttachPatch.png)

Limpe a pele e retire os adesivos. Retire a trava de segurança, coloque o patch no corpo e pressione o botão da agulha para inserir a cânula.

Toque em **Próximo** para ativar o patch.

#### Ativar o patch

![Ativar o patch](../images/medtrum/activation/ActivatePatch.png)

O **AAPS** ativa a bomba e define a taxa basal inicial. Aguarde. Quando a ativação estiver concluída, aparece a seguinte tela:

![Ativação concluída](../images/medtrum/activation/ActivationComplete.png)

```{admonition} Older screenshot
:class: note
Exceto por **Encontrar bomba**, as capturas de tela da ativação acima são de uma versão anterior do **AAPS** e podem parecer diferentes no **AAPS** 4.
```

Ela mostra quantas unidades restam no patch. Toque em **OK** para voltar à tela da bomba.

```{tip}
Depois de uma nova ativação, [exporte as suas configurações](../Maintenance/ExportImportSettings.md). Isso permite recuperar esta sessão do patch depois, por exemplo, em um telefone novo.
```

(nano-deactivate-patch)=

### Desativar o patch

Para desativar o patch ativo, abra a [tela da bomba Medtrum](#nano-overview) (**Gerenciar → Bomba**) e toque em **Trocar patch**.

![Desativar o patch](../images/medtrum/activation/DeactivatePatch.png)

Será pedido que você confirme que quer desativar o patch atual. **Isso não pode ser desfeito.** Toque em **Próximo** para desativar ou em **Cancelar** para voltar à tela da bomba.

![Progresso da desativação](../images/medtrum/activation/DeactivateProgress.png)

Se o **AAPS** não conseguir desativar o patch (por exemplo, porque a base da bomba já foi retirada do patch), toque em **Descartar** para esquecer a sessão atual do patch. Depois você pode ativar um novo patch.

![Desativação concluída](../images/medtrum/activation/DeactivateComplete.png)

Quando a desativação estiver concluída, recolha a agulha e retire o patch do corpo. Retire a base da bomba e descarte o patch usado. Toque em **OK** para voltar à tela da bomba ou em **Próximo** para começar a ativar um novo patch.

(nano-resume-interrupted-activation)=

### Retomar uma ativação interrompida

Se a ativação de um patch for interrompida, por exemplo, porque a bateria do telefone acabou, você pode retomá-la. Abra a [tela da bomba Medtrum](#nano-overview) (**Gerenciar → Bomba**) e toque em **Trocar patch**.

![Retomar uma ativação interrompida](../images/medtrum/activation/ActivationInProgress.png)

Toque em **Próximo** para retomar a ativação. Toque em **Descartar** para redefinir o status da ativação, para que você possa ativar um novo patch.

![Leitura do status da ativação](../images/medtrum/activation/ReadingActivationStatus.png)

```{admonition} Older screenshot
:class: note
As capturas de tela em **Desativar o patch** e **Retomar uma ativação interrompida** são de uma versão anterior do **AAPS** e podem parecer diferentes no **AAPS** 4.
```

O driver lê o status da ativação na bomba. Se isso funcionar, o assistente continua no passo em que parou.

(nano-overview)=

## Tela da bomba

A tela da bomba Medtrum (**Gerenciar → Bomba**) mostra o status atual do patch Medtrum. Ela também tem botões para trocar o patch, redefinir alarmes e atualizar o status. Um aviso no topo mostra estados importantes, por exemplo, **Patch não ativado** ou **Bomba suspensa**.

![Tela da bomba Medtrum com um patch ativo](../images/v4/Pumps/medtrum_pump_screen_active.png)

A tela pode mostrar estas linhas. Algumas linhas só aparecem quando têm um valor.

- **Última conexão**: quanto tempo faz desde que o **AAPS** se conectou à bomba pela última vez.
- **Último Bólus**: o último bólus que foi aplicado.
- **Bateria**: a tensão atual da bateria do patch.
- **Reservatório**: o nível atual do reservatório.
- **Número de série**: o número de série da base da sua bomba.
- **Estado da Bomba**: o estado atual da bomba. Por exemplo, **Ativo** (o patch está ativado e funcionando normalmente) ou **Parado** (o patch não está ativado).
- **Taxa Basal de base**: a taxa basal do seu perfil que está em execução agora.
- **Basal temporária**: a taxa basal temporária, se houver uma em execução.
- **Bólus ativo**: o bólus que está sendo aplicado neste momento.
- **Alarmes ativos**: veja [abaixo](#medtrum-active-alarms).
- **Tipo de Bomba**: o modelo da base da sua bomba.
- **Versão do FW**: a versão do firmware da base da bomba.
- **Nº do patch**: o número sequencial do patch ativado. Ele aumenta em um a cada vez que você ativa um novo patch.
- **Ativação**: a data e a hora em que o patch foi ativado e há quanto tempo isso foi.
- **Patch expira**: a data e a hora em que o patch expira. Mostra **Não ativado** se a [Expiração do patch](#medtrum-patch-expiration) estiver desligada.

(medtrum-active-alarms)=
### Alarmes ativos

Esta linha mostra os alarmes que estão ativos neste momento, por exemplo, reservatório baixo ou um patch prestes a expirar.

### Atualizar

Este botão atualiza o status do patch. Ele só está disponível quando um patch está ativo e o **AAPS** não está conectado à bomba naquele momento.

### Trocar patch

Este botão inicia o assistente para trocar o patch. Veja [Ativar o patch](#medtrum-activate-patch) para mais informações.

(medtrum-unpair)=
### Cancelar pareamento

Este botão só aparece quando o **AAPS** conhece uma base de bomba. Ele apaga o número de série salvo da base da bomba e desconecta. Na próxima vez que você ativar um patch, o **AAPS** busca uma base de bomba de novo (o passo **Encontrar bomba**). Use isso se você mudar para outra base de bomba. Faça isso somente quando nenhum patch estiver ativo.

(nano-reset-alarms)=

### Redefinir alarmes

O botão **Redefinir alarmes** só aparece na tela da bomba quando o patch se suspendeu sozinho, por exemplo, após um alarme de insulina máxima diária. Toque nele para redefinir os alarmes e retomar a aplicação de insulina.

![Redefinir alarmes](../images/medtrum/ResetAlarms.png)

```{admonition} Older screenshot
:class: note
A captura de tela acima é de uma versão anterior do **AAPS**. No **AAPS** 4 a tela da bomba tem outra aparência, mas o botão **Redefinir alarmes** funciona da mesma forma.
```

## Troca de telefone, exportar/importar configurações

Quando você mudar para um telefone novo, faça o seguinte:
* [Exporte as configurações](../Maintenance/ExportImportSettings.md) no telefone antigo.
* Transfira o arquivo de configurações do telefone antigo para o novo e importe-o no **AAPS**. Marque **Substituir também as configurações da bomba** na tela de importação; caso contrário, a sessão do patch não é transferida para o telefone novo.

O arquivo de configurações importado precisa ser da sessão do patch que você está usando agora; caso contrário, o patch não vai se conectar (veja [Bombas sem tubo](#ExportImportSettings-tubeless-pumps)).

Após importar as configurações, o driver sincroniza o histórico com a bomba. Isso pode demorar, dependendo da idade do arquivo de configurações. O progresso ("Sincronizando registros; faltam ...") é mostrado na tela principal:

![Progresso da sincronização](../images/medtrum/SyncProgress.png)

(medtrum-nano-troubleshooting)=

## Resolução de problemas

### Problemas de conexão

Se você tiver timeouts de conexão ou outros problemas de conexão:
- Nas configurações do app Android para o **AAPS**, defina a permissão de localização como "Permitir o tempo todo".
- Tente ativar **Buscar em caso de erro de conexão** (configurações da Medtrum > **Configurações Avançadas**) e o **Monitor BT** (**Configurações** > **Bomba**), veja o [Passo 2](#medtrum-step-2).

### Problemas de Bluetooth
Para problemas conhecidos com conexões Bluetooth, quedas de conexão de bombas/pods, ou problemas de ativação e de conexão, veja [Problemas relacionados ao Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

### Ativação interrompida

Se a ativação for interrompida, por exemplo, por bateria do telefone descarregada ou por um travamento do telefone, você pode retomá-la. Toque em **Trocar patch** na tela da bomba e siga os passos em [Retomar uma ativação interrompida](#nano-resume-interrupted-activation).

### Como evitar falhas do patch

O patch pode apresentar vários erros. Para evitar erros frequentes:
- Verifique se a base da bomba está bem encaixada no patch e se não há frestas visíveis.
- Ao preencher o patch, não aplique força excessiva no êmbolo. Não tente preencher o patch além do máximo que vale para o seu modelo.

## Onde obter ajuda

Todo o trabalho de desenvolvimento do driver Medtrum é feito pela comunidade de forma **voluntária**; pedimos que você lembre disso e siga as orientações abaixo antes de pedir ajuda:

-  **Nível 0:** Leia a seção relevante desta documentação para ter certeza de que você entende como deveria funcionar a função com a qual você está tendo dificuldade.
-  **Nível 1:** Se você ainda tiver problemas que não consegue resolver com este documento, vá ao canal *#Medtrum* no **Discord** usando [este link de convite](https://discord.gg/4fQUWHZ4Mw).
-  **Nível 2:** Pesquise as issues existentes para ver se o seu problema já foi relatado em [Issues](https://github.com/nightscout/AAPS/issues) se ele existir, confirme/comente/adicione informações sobre o seu problema. Se não, crie uma [nova issue](https://github.com/nightscout/AndroidAPS/issues) e anexe [os seus arquivos de log](../GettingHelp/AccessingLogFiles.md).
-  **Tenha paciência - a maioria dos membros da nossa comunidade são voluntários de boa vontade, e resolver problemas muitas vezes exige tempo e paciência tanto dos usuários quanto dos desenvolvedores.**