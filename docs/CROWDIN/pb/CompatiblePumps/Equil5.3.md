# Equil

Estas instruções são para configurar a bomba de insulina Equil.

```{contents} Table of contents
:depth: 1
:local: true
```

## Recursos da bomba com o AAPS

* Bomba de patch sem tubo que se comunica com o **AAPS** pelo Bluetooth do próprio celular, sem um dispositivo de comunicação adicional.
* O **AAPS** trata a Equil como uma bomba de patch com reservatório de 200 U: a tela principal mostra as luzes de status de bomba de patch, e **Purgar/Preencher** e **Troca de Bateria da Bomba** não são oferecidos. O preenchimento, a purga e a troca de bateria são feitos nos assistentes da bomba.
* Enquanto a bomba está suspensa ou parada, o **AAPS** registra uma basal temporária de 0 U/h, para que nenhuma insulina basal seja contada no IOB.
* As mudanças de horário de verão e de fuso horário devem ser feitas manualmente.

## Requisitos de hardware e software
* **Hardware Equil compatível**

  No momento, as versões Equil 5.3 e 5.4 são compatíveis.

* **AAPS** compilado e instalado seguindo as instruções de [Compilar o APK](../SettingUpAaps/BuildingAaps.md)

## Configuração

### Selecione a bomba Equil

Abra o **menu** (☰) no canto superior esquerdo, escolha **[Configuração](#Config-Builder-pump)** e, em **Bomba**, selecione **Equil**.

Depois de selecionado, o cartão **Equil** mostra dois botões, **Configurações** e **Abrir plugin**:

![O plugin Equil selecionado em Configuração > Bomba](../images/v4/Pumps/equil_enabled.png)

**Abrir plugin** (ou **Gerenciar** → **Bomba**) abre a tela da bomba Equil. Antes de a bomba ser pareada, ela fica assim:

![Tela da bomba Equil antes do pareamento](../images/v4/Pumps/equil_pump_screen.png)

### Configurações

Abra as configurações da Equil com **Configurações** no cartão **Equil**, ou com o ícone de engrenagem no canto superior direito da tela da bomba.

![Configurações do driver da Equil](../images/v4/Pumps/equil_settings.png)

* **Alarme de bateria fraca**: avisa quando a bateria da bomba está fraca.
* **Alarme de baixo nível de insulina**: avisa quando há pouca insulina no reservatório.
* **Tom do alerta**: como a bomba alerta você: **Silencioso**, **Somente vibração**, **Somente som** ou **Vibração e som**.
* **Velocidade do bólus**: a velocidade com que um bólus é aplicado: **1,5 U/min (padrão)**, **3 U/min**, **6 U/min** ou **12 U/min**. Um bólus mais rápido pode causar mais alarmes de oclusão.

![As opções de Velocidade do bólus nas configurações da Equil](../images/v4/Pumps/equil_bolus_speed.png)

```{admonition} Max basal and max bolus on the patch
:class: note
O próprio patch recusa qualquer taxa basal acima de um máximo que o **AAPS** programa nele. O **AAPS** usa o maior valor entre a sua [configuração](../SettingUpAaps/Preferences.md) de **basal máxima** e a maior taxa basal por hora do seu **Perfil**, para que o patch sempre aceite o seu perfil e as basais temporárias que o loop pede. O **AAPS** também envia o seu bólus máximo permitido para o patch.

Quando você muda a sua **basal máxima** ou o seu **bólus máximo**, o **AAPS** envia os novos valores para o patch automaticamente. Eles também são enviados a cada troca de perfil. Não há nada para configurar no próprio patch.
```

### Parear a bomba

Na tela da bomba, pressione **Parear**. Um assistente guia você em cada etapa. A linha de pontos na parte de cima mostra em que ponto você está.

Se o Android perguntar se o **AAPS** pode encontrar e se conectar a dispositivos próximos, pressione **Permitir**. O **AAPS** precisa disso para encontrar a bomba.

![Android pedindo permissão para encontrar dispositivos próximos](../images/Equil/activate1.png)

O assistente tem estas etapas. Pressione **Seguinte** para continuar ou **Cancelar** para sair do assistente.

1. **Perfil necessário**: só aparece se você nunca ativou um **Perfil** no **AAPS**. Selecione o perfil a usar e pressione **Ativar perfil**.
1. **Montar a bomba**: junte a bomba, o reservatório cheio e a bateria carregada.

   ![Etapa Montar a bomba](../images/Equil/activate2.png)

1. **Encontrar bomba**: o **AAPS** procura bombas Equil próximas. Selecione a sua bomba na lista.

   ![Etapa Encontrar bomba com uma bomba Equil na lista](../images/Equil/find_pump.png)
1. **Parear dispositivo**: você pode digitar uma senha de pareamento em **Definir senha de pareamento**. Ela deve ter 4 caracteres, escolhidos entre `ABCDEF0123456789`. Pressione **Parear**.

   ![Etapa Parear dispositivo com a senha de pareamento](../images/Equil/activate3.png)

1. **Selecionar insulina**: só aparece se você tiver mais de uma insulina configurada. Selecione a insulina que está no reservatório.
1. **Purgar / Preencher**: a bomba **não** pode estar na placa de base. Pressione **Purgar/Preencher** e purgue o reservatório até aparecer uma gota de insulina na ponta da agulha. Pressione **Seguinte**.

   ![Etapa Purgar / Preencher](../images/Equil/prime_fill.png)
1. **Rotação do local**: só aparece se **Gerenciar rodízio do local da bomba** estiver ativado nas configurações de rotação do local. Toque no local onde você vai colocar a bomba ou pressione **Ignorar**.
1. **Conectar a bomba**: encaixe a bomba na placa de base.

   ![Etapa Conectar a bomba](../images/Equil/attach_pump.png)
1. **Purgar a cânula**: depois que a bomba estiver na placa de base, pressione **Purgar ar** para tirar o ar da cânula. Pressione **Seguinte**.

   ![Etapa Purgar a cânula com o botão Purgar ar](../images/Equil/prime_cannula.png)

1. **Confirmar**: coloque a bomba no corpo e pressione **Finalizar**.

   ![Etapa Confirmar com o botão Finalizar](../images/Equil/confirm.png)

```{warning}
Se você definir a sua própria senha de pareamento (recomendado para a sua segurança), guarde-a em um lugar seguro. A senha fica salva na bomba. A bomba pede a senha a cada novo pareamento, até que você desfaça o pareamento corretamente no **AAPS**. Até lá, a bomba também não pode ser usada com o controlador original (PDA).
```

### Tela da bomba depois do pareamento

Depois que a bomba estiver pareada, a tela da bomba mostra estes botões:

* **Atualizar**: lê agora o estado e o histórico da bomba.
* **Suspender** / **Retomar administração**: para ou reinicia a administração de insulina.
* **Trocar reservatório**: guia você para desconectar a bomba, colocar um novo reservatório (e, se necessário, uma nova bateria), purgar e conectar a bomba de novo. A primeira etapa pergunta *Você também vai colocar um novo conjunto de infusão (base e cânula)?*
  * **Sim, novo conjunto de infusão**: você escolhe o local, a cânula é purgada e o **AAPS** registra uma troca de insulina e uma troca de cânula.
  * **Não, somente reservatório ou bateria**: a cânula não é purgada e o **AAPS** registra somente uma troca de insulina.

  Depois de uma troca de reservatório, o nível da bateria mostra **-** até que o **AAPS** o leia de novo da bomba.

  ![A primeira etapa de Trocar reservatório pergunta sobre um novo conjunto de infusão](../images/Equil/change_reservoir_question.png)

* **Histórico**: mostra os eventos registrados pela bomba.
* **Desfazer pareamento do dispositivo**: guia você para desconectar a bomba e desfazer o pareamento com o **AAPS**. Isso interrompe a administração de insulina, move o êmbolo da bomba de volta para o fundo e apaga o pareamento.

### Alarmes

* O alarme de pouca insulina toca uma vez em cada nível (10 U, 5 U e 2 U) e quando o reservatório fica vazio. O alarme de bateria fraca toca uma vez em 10% e uma vez em 5%. Cada nível só gera alarme uma vez até a próxima troca de reservatório.
* Os alarmes e paradas da bomba também são registrados como anúncios nos tratamentos, no horário em que a bomba os registrou, para que você possa ver depois quando e por que a bomba parou.
* Se o reservatório ficar vazio durante um bólus, o **AAPS** registra somente a insulina aplicada até aquele momento e informa as duas quantidades.

## Onde obter ajuda

O desenvolvimento do driver da Equil é feito pela comunidade de forma **voluntária**. Antes de pedir ajuda:

1. **Leia** a seção correspondente desta documentação para confirmar como a função deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Informe um bug** procurando nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu celular, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).
