(medtrum-nano-300u)=
# Medtrum Nano 200U / 300U

Estas instruções servem para configurar a bomba de insulina Medtrum.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funções da bomba com o AAPS
* Todas as funções do loop são suportadas (SMB, basal temporária, etc.)
* Mudança de hora (hora de verão) e fuso horário tratados automaticamente
* O bólus prolongado não é suportado pelo controlador do AAPS

## Requisitos de hardware e software
* **Bases de bomba e patches de reservatório Medtrum compatíveis**
    - Atualmente suportadas:
        - Medtrum TouchCare Nano 200U com as referências de base da bomba: **MD0201** e **MD8201**.
        - Medtrum TouchCare 300U com a referência de base da bomba: **MD8301**.
        - Se tiver um modelo não suportado e quiser doar hardware ou ajudar nos testes, contacte-nos no Discord [aqui](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **AAPS compilado e instalado** com as instruções de [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md).
* **Telefone Android compatível** com ligação Bluetooth BLE
    - Consulte as [Notas das Versões](../Maintenance/ReleaseNotes.md) do AAPS

## Antes de começar

**SEGURANÇA EM PRIMEIRO LUGAR** Não faça este processo num ambiente em que não consiga recuperar de um erro (patches extra, insulina e dispositivos de controlo da bomba são obrigatórios).

**O PDM e a app Medtrum não funcionam com um patch ativado pelo AAPS.** Antes, talvez tenha usado o PDM ou a app Medtrum para enviar comandos à bomba. Por razões de segurança, só pode usar o patch ativado com o dispositivo ou a app que o ativou.

*Isto NÃO quer dizer que deva deitar fora o seu PDM. Recomenda-se guardá-lo num local seguro como reserva para emergências, por exemplo se perder o telefone ou se o AAPS não funcionar corretamente.*

**A bomba não para de administrar insulina quando não está ligada ao AAPS** As taxas basais predefinidas são programadas na bomba conforme o perfil ativo atual. Enquanto o AAPS estiver a funcionar, envia comandos de basal temporária com uma duração máxima de 120 minutos. Se, por algum motivo, a bomba não receber novos comandos (por exemplo, porque a comunicação se perdeu devido à distância entre a bomba e o telefone), a bomba volta à taxa basal predefinida programada na bomba quando a basal temporária terminar.

**O perfil do AAPS não suporta intervalos de 30 minutos na taxa basal** Se é novo no AAPS e está a configurar o perfil basal pela primeira vez, tenha em conta que taxas basais que começam à meia hora não são suportadas. Terá de ajustar o perfil basal para começar à hora certa. Por exemplo, se tiver uma taxa basal de 1,1 unidades que começa às 09:30 e dura 2 horas, até às 11:30, isto não funciona. Terá de mudar esta taxa basal de 1,1 unidades para o intervalo 9:00–11:00 ou 10:00–12:00. Embora o hardware da bomba Medtrum suporte intervalos de 30 minutos no perfil basal, o AAPS ainda não os consegue ter em conta nos seus algoritmos.

**Taxas basais de 0 U/h no perfil NÃO são suportadas no AAPS** Embora a bomba Medtrum suporte uma taxa basal zero, o AAPS usa múltiplos da taxa basal do perfil para decidir o tratamento automático e, por isso, não funciona com uma taxa basal zero. A taxa basal mínima do perfil é 0,05 U/h.

Pode obter uma taxa basal temporária de zero com a função «Desligar bomba» ou com uma combinação de Desativar loop/basal temporária ou Suspender loop/basal temporária.

## Instalação

```{caution}
Quando ativa um patch com o **AAPS**, **TEM** de desligar todos os outros dispositivos que podem comunicar com a base da bomba Medtrum, por exemplo um PDM ativo ou a app Medtrum.
```

### Passo 1: Selecionar a bomba Medtrum

#### Opção 1: Novas instalações

Se está a instalar o **AAPS** pela primeira vez, o **Assistente de Configuração** guia-o na configuração. Selecione **Medtrum** quando chegar ao passo **Bomba**.

Se tiver dúvidas, também pode selecionar **Bomba virtual** e selecionar **Medtrum** mais tarde, depois de configurar o **AAPS** (ver opção 2).

![Passo da bomba no Assistente de Configuração](../images/setup-wizard/Wizard-Pump.png)

#### Opção 2: O ecrã Configuração

Numa instalação existente, pode selecionar a bomba **Medtrum** em [Configuração > Bomba](#Config-Builder-pump):

Abra o **menu** (☰) no canto superior esquerdo, toque em **Configuração** > **Bomba** e selecione o cartão **Medtrum**. Só pode estar ativa uma bomba de cada vez.

![Configuração > Bomba com o plugin Medtrum](../images/v4/Configuration/configuration_pump_list_4.png)

Depois de selecionado, o cartão **Medtrum** mostra dois botões, **Definições** e **Abrir plugin**:

![O plugin Medtrum selecionado em Configuração > Bomba](../images/v4/Pumps/medtrum_enabled.png)

**Abrir plugin** (ou **Gerir → Bomba**) abre o ecrã da bomba Medtrum. Use-o para mudar patches e ver o estado da bomba. Antes de ativar um patch, o ecrã tem este aspeto:

![Ecrã da bomba Medtrum antes do emparelhamento](../images/v4/Pumps/medtrum_pump_screen.png)

(medtrum-step-2)=
### Passo 2: Alterar as definições Medtrum

Toque em **Definições** no cartão **Medtrum** em **Configuração** > **Bomba**. Também pode tocar no ícone da roda dentada no canto superior direito do ecrã da bomba Medtrum. Abrem-se as **Definições da bomba Medtrum**:

![Definições do controlador Medtrum](../images/v4/Pumps/medtrum_settings.png)

```{note}
Já não existe a definição **Número de Série**. O **AAPS** encontra a base da bomba com uma procura Bluetooth na primeira vez que ativa um patch (ver [Passo 3](#medtrum-activate-patch)) e guarda o número de série. Para usar outra base da bomba, consulte [Desemparelhar](#medtrum-unpair).
```

#### Definições de alarme

***Predefinição: Bip.***

Esta definição muda a forma como a bomba o avisa quando há um aviso ou um erro.

- **Bip**: o patch emite um bip nos alarmes e avisos.
- **Silencioso**: o patch não o avisa nos alarmes e avisos.

Nota: no modo silencioso, o **AAPS** continua a tocar o alarme, conforme as definições de volume do telefone. Se não responder ao alarme, o patch acaba por emitir um bip.

#### Notificação de aviso da bomba

***Predefinição: Ativado.***

Esta definição muda a forma como o **AAPS** mostra notificações para avisos não críticos da bomba. Quando ativada, é mostrada uma notificação no telefone quando há um aviso da bomba, incluindo:
- Bateria fraca
- Reservatório baixo (20 unidades)
- O patch expira em breve

Recomendamos manter esta definição ativa quando os alarmes da bomba estão definidos como **Silencioso**. Em ambos os casos, estes avisos também são mostrados no ecrã da bomba Medtrum em [Alarmes ativos](#medtrum-active-alarms).

(medtrum-patch-expiration)=
#### Expiração do patch

***Predefinição: Ativado.***

Esta definição muda o comportamento do patch. Quando ativada, o patch expira após 3 dias e dá um aviso sonoro se tiver o som ativo. Após 3 dias e 8 horas, o patch deixa de funcionar.

Se esta definição estiver desativada, o patch não o avisa antes de parar. Com o firmware recente da base da bomba, um patch funciona no máximo 5 dias.

#### Aviso de expiração da bomba [horas]

***Predefinição: 72 horas.***

Esta definição muda a hora do aviso de expiração. Quando a [Expiração do patch](#medtrum-patch-expiration) está ativa, o **AAPS** mostra uma notificação este número de horas após a ativação.

#### Insulina máxima por hora [Unidades]

***Predefinição: 25 U.***

Esta definição muda a quantidade máxima de insulina que pode ser administrada numa hora. Se este limite for excedido, o patch suspende e dá um alarme. Pode repor o alarme com o botão **Repor alarmes** no ecrã da bomba, ver [Repor alarmes](#nano-reset-alarms).

Defina um valor sensato para as suas necessidades de insulina.

#### Insulina máxima diária [Unidades]

***Predefinição: 80 U.***

Esta definição muda a quantidade máxima de insulina que pode ser administrada num dia. Se este limite for excedido, o patch suspende e dá um alarme. Pode repor o alarme com o botão **Repor alarmes** no ecrã da bomba, ver [Repor alarmes](#nano-reset-alarms).

Defina um valor sensato para as suas necessidades de insulina.

#### Procurar em caso de erro de ligação

***Predefinição: Desligado.***

Encontra-se em **Definições avançadas**.

Ative isto apenas se tiver problemas de ligação. Quando ativado, o controlador procura a bomba novamente antes de tentar voltar a ligar-se a ela. Confirme que a permissão de Localização do **AAPS** está definida como «Permitir sempre».

### Passo 2b: Definições de alerta do AAPS

Estas definições não fazem parte do controlador Medtrum. Abra-as com o ícone **Definições** (roda dentada) no canto superior direito do ecrã principal. Consulte [Definições](../SettingUpAaps/Preferences.md) para mais informação.

#### Watchdog BT

Abra **Definições** > **Bomba**:

![Definições > Bomba](../images/preferences/settings_pump.png)

O **Watchdog BT** desliga o Bluetooth do telefone durante um segundo se o **AAPS** não conseguir ligar-se à bomba. Pode ajudar em alguns telefones onde o Bluetooth bloqueia.

Ative esta definição se tiver muitas vezes problemas de ligação com a bomba.

#### Alertas local

Abra **Definições** > **Alertas locais**:

![Definições > Alertas locais](../images/preferences/settings_local_alerts.png)

##### Alertar se a bomba estiver inacessível

***Predefinição: Ativado.***

Esta definição é ativada à força quando o controlador Medtrum está ativo. Avisa-o quando a bomba está inacessível. Isto pode acontecer quando a bomba está fora de alcance ou quando não responde por causa de um patch ou de uma base da bomba com defeito, por exemplo quando entra água entre a base da bomba e o patch.

Por razões de segurança, esta definição não pode ser desativada.

##### Limiar de bomba inacessível

***Predefinição: 30 min.***

Esta definição muda quanto tempo o **AAPS** espera antes de o avisar de que a bomba está inacessível.

Pode mudar esta definição ao usar a bomba Medtrum, mas por razões de segurança recomendamos mantê-la em 30 minutos.

(medtrum-activate-patch)=
### Passo 3: Ativar o patch

**Antes de continuar:**
- Tenha à mão a base da bomba Medtrum e um novo patch de reservatório.
- Desligue os outros dispositivos que podem comunicar com a bomba Medtrum (PDM e app Medtrum).
- Idealmente, confirme que o **AAPS** está configurado e que um [perfil está ativado](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Se nenhum perfil estiver ativo, a ativação começa com um passo **Perfil necessário**, onde escolhe o perfil a ativar.

#### Iniciar a ativação

Abra o [ecrã da bomba Medtrum](#nano-overview) (**Gerir → Bomba**) e toque em **Mudar patch**. Se configurou a [proteção das definições](#Preferences-protection), tem de introduzir primeiro a sua senha ou PIN.

Se já houver um patch ativo, é-lhe pedido que o desative primeiro, ver [Desativar o patch](#nano-deactivate-patch).

A ativação é um assistente passo a passo. Siga as instruções para encher e ativar um novo patch. Toque em **Cancelar** em qualquer passo para parar.

```{important}
Só coloque o patch no corpo e insira a cânula quando o assistente o indicar (depois de a purga estar concluída).
```

Os primeiros passos que vê dependem da sua configuração:

1. **Perfil necessário**: só se nenhum perfil estiver ativo. Selecione o perfil a aplicar e continue.
2. **Procurar bomba**: só na primeira vez ou depois de usar [Desemparelhar](#medtrum-unpair). Ligue a base da bomba a um patch novo para a pôr a funcionar. O **AAPS** procura bases de bomba Medtrum próximas (os nomes começam por `MT`). Toque na sua na lista. O **AAPS** guarda o número de série e passa diretamente ao enchimento do patch.

   ![Passo Procurar bomba à procura de uma base de bomba Medtrum](../images/medtrum/activation/FindPump.png)

3. **Ativar patch**: só quando o **AAPS** já conhece a base da bomba. O ecrã diz «Nenhum patch ativo. Prima **Seguinte** para iniciar o processo de ativação.» Confirme que a base da bomba **ainda não** está ligada ao patch e depois toque em **Seguinte**.

![Iniciar a ativação](../images/medtrum/activation/StartActivation.png)

#### Ligar e encher o patch

![Encher o patch](../images/medtrum/activation/FillPatch.png)

Ligue a base da bomba ao patch, remova o ar residual e encha o patch com insulina. São necessárias pelo menos 70 unidades para a ativação. O ecrã mostra o nível do reservatório. Ainda não coloque o patch no corpo.

Quando o patch é detetado e está cheio, aparece o botão **Seguinte**. Toque nele.

#### Selecionar insulina

Este passo só aparece se tiver mais de uma insulina configurada no **AAPS**. Selecione a insulina com que está a encher o patch. O **AAPS** aplica uma troca de perfil com esta insulina após a ativação.

#### Purgar o patch

![Premir até meio](../images/medtrum/activation/HalfPress.png)

**Não** retire o bloqueio de segurança. Prima o botão da agulha do patch até meio e depois toque em **Seguinte** para iniciar a purga.

![Progresso da purga](../images/medtrum/activation/PrimeProgress.png)

Aguarde até a purga terminar.

![Purga concluída](../images/medtrum/activation/PrimeComplete.png)

Quando a purga estiver concluída, toque em **Seguinte** para continuar.

#### Rotação dos locais

Este passo só aparece se gerir os locais da bomba com a [Rotação dos locais](#Aapsscreens-site-rotation) (definição **Gerir a rotação dos locais da bomba**). Escolha onde coloca o patch no corpo ou salte este passo.

#### Colocar o patch

![Colocar o patch](../images/medtrum/activation/AttachPatch.png)

Limpe a pele e retire os autocolantes. Retire o bloqueio de segurança, coloque o patch no corpo e prima o botão da agulha para inserir a cânula.

Toque em **Seguinte** para ativar o patch.

#### Ativar o patch

![Ativar o patch](../images/medtrum/activation/ActivatePatch.png)

O **AAPS** ativa a bomba e define a taxa basal inicial. Aguarde. Quando a ativação estiver concluída, aparece o seguinte ecrã:

![Ativação concluída](../images/medtrum/activation/ActivationComplete.png)

```{admonition} Older screenshot
:class: note
Exceto **Procurar bomba**, as capturas de ecrã da ativação acima são de uma versão anterior do **AAPS** e podem ter um aspeto diferente no **AAPS** 4.
```

Mostra quantas unidades restam no patch. Toque em **OK** para voltar ao ecrã da bomba.

```{tip}
Após uma nova ativação, [exporte as suas definições](../Maintenance/ExportImportSettings.md). Assim pode recuperar esta sessão do patch mais tarde, por exemplo num telefone novo.
```

(nano-deactivate-patch)=

### Desativar o patch

Para desativar o patch ativo, abra o [ecrã da bomba Medtrum](#nano-overview) (**Gerir → Bomba**) e toque em **Mudar patch**.

![Desativar o patch](../images/medtrum/activation/DeactivatePatch.png)

É-lhe pedido que confirme que quer desativar o patch atual. **Isto não pode ser desfeito.** Toque em **Seguinte** para desativar ou em **Cancelar** para voltar ao ecrã da bomba.

![Progresso da desativação](../images/medtrum/activation/DeactivateProgress.png)

Se o **AAPS** não conseguir desativar o patch (por exemplo, porque a base da bomba já foi retirada do patch), toque em **Descartar** para esquecer a sessão do patch atual. Depois pode ativar um novo patch.

![Desativação concluída](../images/medtrum/activation/DeactivateComplete.png)

Quando a desativação estiver concluída, recolha a agulha e retire o patch do corpo. Retire a base da bomba e elimine o patch usado. Toque em **OK** para voltar ao ecrã da bomba ou em **Seguinte** para começar a ativar um novo patch.

(nano-resume-interrupted-activation)=

### Retomar uma ativação interrompida

Se a ativação de um patch for interrompida, por exemplo porque a bateria do telefone acabou, pode retomá-la. Abra o [ecrã da bomba Medtrum](#nano-overview) (**Gerir → Bomba**) e toque em **Mudar patch**.

![Retomar uma ativação interrompida](../images/medtrum/activation/ActivationInProgress.png)

Toque em **Seguinte** para retomar a ativação. Toque em **Descartar** para repor o estado da ativação e poder ativar um novo patch.

![A ler o estado da ativação](../images/medtrum/activation/ReadingActivationStatus.png)

```{admonition} Older screenshot
:class: note
As capturas de ecrã em **Desativar o patch** e **Retomar uma ativação interrompida** são de uma versão anterior do **AAPS** e podem ter um aspeto diferente no **AAPS** 4.
```

O controlador lê o estado da ativação na bomba. Se isto funcionar, o assistente continua no passo onde parou.

(nano-overview)=

## Ecrã da bomba

O ecrã da bomba Medtrum (**Gerir → Bomba**) mostra o estado atual do patch Medtrum. Também tem botões para mudar o patch, repor alarmes e atualizar o estado. Uma faixa no topo mostra estados importantes, por exemplo **Patch não ativado** ou **A bomba está suspensa**.

![Ecrã da bomba Medtrum com um patch ativo](../images/v4/Pumps/medtrum_pump_screen_active.png)

O ecrã pode mostrar estas linhas. Algumas linhas só aparecem quando têm um valor.

- **Última ligação**: há quanto tempo o **AAPS** se ligou à bomba pela última vez.
- **Último bólus**: o último bólus administrado.
- **Bateria**: a tensão atual da bateria do patch.
- **Reservatório**: o nível atual do reservatório.
- **Número de Série**: o número de série da base da bomba.
- **Estado da bomba**: o estado atual da bomba. Por exemplo **Ativo** (o patch está ativado e a funcionar normalmente) ou **Parado** (o patch não está ativado).
- **Taxa Basal de base**: a taxa basal do seu perfil que está a correr agora.
- **Basal temporária**: a taxa basal temporária, se houver uma a correr.
- **Bólus ativo**: o bólus que está a ser administrado neste momento.
- **Alarmes ativos**: ver [abaixo](#medtrum-active-alarms).
- **Tipo de bomba**: o modelo da base da bomba.
- **Versão FW**: a versão do firmware da base da bomba.
- **Patch n.º**: o número de sequência do patch ativado. Aumenta um valor cada vez que ativa um novo patch.
- **Ativação**: a data e a hora em que o patch foi ativado e há quanto tempo foi.
- **Patch expira**: a data e a hora em que o patch expira. Mostra **Não ativado** se a [Expiração do patch](#medtrum-patch-expiration) estiver desligada.

(medtrum-active-alarms)=
### Alarmes ativos

Esta linha mostra os alarmes ativos neste momento, por exemplo reservatório baixo ou patch a expirar.

### Atualizar

Este botão atualiza o estado do patch. Só está disponível quando há um patch ativo e o **AAPS** não está ligado à bomba nesse momento.

### Mudar patch

Este botão inicia o assistente para mudar o patch. Consulte [Ativar o patch](#medtrum-activate-patch) para mais informação.

(medtrum-unpair)=
### Desemparelhar

Este botão só aparece quando o **AAPS** conhece uma base da bomba. Apaga o número de série guardado da base da bomba e desliga a ligação. Na próxima vez que ativar um patch, o **AAPS** procura de novo uma base da bomba (o passo **Procurar bomba**). Use isto se mudar para outra base da bomba. Faça isto apenas quando não houver nenhum patch ativo.

(nano-reset-alarms)=

### Repor alarmes

O botão **Repor alarmes** só aparece no ecrã da bomba quando o patch se suspendeu sozinho, por exemplo após um alarme de insulina máxima diária. Toque nele para repor os alarmes e retomar a administração de insulina.

![Repor alarmes](../images/medtrum/ResetAlarms.png)

```{admonition} Older screenshot
:class: note
A captura de ecrã acima é de uma versão anterior do **AAPS**. No **AAPS** 4 o ecrã da bomba tem um aspeto diferente, mas o botão **Repor alarmes** funciona da mesma forma.
```

## Mudar de telefone, exportar/importar definições

Quando mudar para um telefone novo, faça o seguinte:
* [Exporte as definições](../Maintenance/ExportImportSettings.md) no telefone antigo.
* Transfira o ficheiro de definições do telefone antigo para o novo e importe-o no **AAPS**. Marque **Substituir também as definições da bomba** no ecrã de importação; caso contrário, a sessão do patch não é transferida para o telefone novo.

O ficheiro de definições importado tem de ser da sessão do patch que está a usar agora; caso contrário, o patch não se liga (ver [Bombas sem tubo](#ExportImportSettings-tubeless-pumps)).

Após uma importação de definições, o controlador sincroniza o histórico com a bomba. Isto pode demorar algum tempo, conforme a idade do ficheiro de definições. O progresso («A sincronizar registos, faltam ...») é mostrado no ecrã principal:

![Progresso da sincronização](../images/medtrum/SyncProgress.png)

(medtrum-nano-troubleshooting)=

## Resolução de Problemas

### Problemas de ligação

Se tiver tempos de ligação esgotados ou outros problemas de ligação:
- Nas definições da app Android para o **AAPS**, defina a permissão de Localização como «Permitir sempre».
- Experimente ativar **Procurar em caso de erro de ligação** (definições Medtrum > **Definições avançadas**) e o **Watchdog BT** (**Definições** > **Bomba**), ver [Passo 2](#medtrum-step-2).

### Problemas de Bluetooth
Para problemas conhecidos com ligações Bluetooth, perdas de ligação a bombas/Pods, ou problemas de ativação e de ligação, veja [Problemas relacionados com o Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

### Ativação interrompida

Se a ativação for interrompida, por exemplo por a bateria do telefone ter acabado ou por o telefone ter falhado, pode retomá-la. Toque em **Mudar patch** no ecrã da bomba e siga os passos em [Retomar uma ativação interrompida](#nano-resume-interrupted-activation).

### Evitar falhas do patch

O patch pode dar vários erros. Para evitar erros frequentes:
- Confirme que a base da bomba está bem encaixada no patch e que não se vê nenhuma folga.
- Ao encher o patch, não faça força excessiva no êmbolo. Não tente encher o patch acima do máximo do seu modelo.

## Onde obter ajuda

Todo o trabalho de desenvolvimento do controlador Medtrum é feito pela comunidade em regime de **voluntariado**; pedimos que se lembre disso e siga estas orientações antes de pedir ajuda:

-  **Nível 0:** Leia a secção relevante desta documentação para ter a certeza de que compreende como deve funcionar a função com que está a ter dificuldades.
-  **Nível 1:** Se continuar a ter problemas que não consegue resolver com este documento, vá ao canal *#Medtrum* no **Discord** com [este link de convite](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AAPS/issues). If it exists, please confirm/comment/add information on your problem. Se não, crie um [novo problema (issue)](https://github.com/nightscout/AndroidAPS/issues) e anexe [os seus ficheiros de registo](../GettingHelp/AccessingLogFiles.md).
-  **Seja paciente - a maior parte dos membros da nossa comunidade são voluntários de boa vontade, e resolver problemas exige muitas vezes tempo e paciência, tanto dos utilizadores como dos programadores.**