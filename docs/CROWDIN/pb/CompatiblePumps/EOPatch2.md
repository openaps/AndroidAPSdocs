# EOPatch2

O patch precisa de insulina de ação rápida U-100, como NovoRapid ou Humalog. Use a insulina de ação rápida que o seu médico receitou para você.

A menor dose que o patch pode aplicar é 0,05 U. Defina todas as taxas basais do seu **Perfil** com pelo menos 0,05 U/h, em passos de 0,05 U/h. Caso contrário, o **AAPS** arredonda cada taxa para o valor de 0,05 U/h mais próximo (nunca para 0) e usa as taxas que o patch realmente aplica, então o total de insulina por dia fica um pouco diferente do seu **Perfil**. Da mesma forma, os bólus devem ser de pelo menos 0,05 U.

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio celular, sem um dispositivo de comunicação adicional.
* As mudanças de horário de verão e de fuso horário devem ser feitas manualmente.

## Configuração da bomba

1. Abra o **menu** (☰) no canto superior esquerdo da tela principal do **AAPS** e selecione **Configuração**.
1. Na seção **Bomba**, selecione **EOPatch2**.
1. Pressione a tecla Voltar para retornar à tela principal.

![O menu com a opção Configuração](../images/v4/Configuration/configuration_menu.png) ![Configuração > Bomba com o plugin EOPatch2](../images/v4/Configuration/configuration_pump_list_3.png)

Depois de selecionado, o cartão **EOPatch2** mostra dois botões, **Configurações** e **Abrir plugin**:

![O plugin EOPatch2 selecionado em Configuração > Bomba](../images/v4/Pumps/eopatch2_enabled.png)

## Configurações

Abra as configurações do EOPatch2 de uma destas duas formas:

* pressione **Configurações** no cartão **EOPatch2** em **Configuração**, ou
* abra a tela da bomba (**Gerenciar** → **Bomba**) e pressione o ícone de engrenagem no canto superior direito.

Há três configurações:

![Configurações do EOPatch2](../images/v4/Pumps/eopatch_settings.png)

### Alertas de Reservatório Baixo

Um aviso aparece quando a insulina restante no patch cai para esta quantidade ou menos. Você pode definir de 10 a 50 U, em passos de 5 U. O padrão é 10 U.

### Lembrete de Expiração do Patch

Lembra você de quanto tempo falta para o patch atual expirar. Você pode definir de 1 a 24 horas, em passos de 1 hora. O padrão é 4 horas.

### Lembrete do sinal sonoro do patch

Quando esta opção está ligada, o patch emite um bipe quando um bólus, um bólus estendido ou uma basal temporária começa e quando termina. Ela não tem efeito sobre a sua basal normal. O padrão é desligado.

## Ativar um novo patch

### Abrir o assistente de ativação

Abra a tela da bomba com **Gerenciar** → **Bomba** (ou pressione **Abrir plugin** no cartão **EOPatch2** em **Configuração**). Quando nenhum patch está ativo, a tela mostra **Não ativado** e um botão **Ativar patch** na parte de baixo.

Pressione **Ativar patch** para iniciar o assistente.

![A tela da bomba EOPatch2 com o botão Ativar patch](../images/v4/Pumps/eopatch_pump_screen.png)

O assistente guia você em cada etapa. A linha de pontos na parte de cima mostra em que ponto você está.

```{note}
Se você nunca ativou um **Perfil** no **AAPS**, o assistente mostra primeiro uma página **Perfil necessário**. Selecione o perfil a usar e pressione **Ativar perfil**.
```

### Preencher com insulina

Insira a agulha da seringa na porta de preenchimento de insulina do patch. Empurre o êmbolo devagar para encher o patch. Quando houver mais de 80 U no patch, ele emite um bipe e liga (inicializa).

Quando ouvir o bipe, pressione **Iniciar pareamento**.

![A etapa Preencher com insulina com o botão Iniciar pareamento](../images/v4/Pumps/eopatch_activate_filling.png)

```{warning}
- Não gire a alavanca de inserção da agulha até que o assistente peça. Girar a alavanca cedo demais pode causar problemas sérios durante o preenchimento ou a verificação de segurança.
- O patch comporta de 80 a 200 U. Se você colocar menos de 80 U, o patch não funciona.
- Tire a insulina da geladeira 15 a 30 minutos antes de preencher, para que ela fique em temperatura ambiente. A insulina deve estar a pelo menos 10 °C.
```

### Pareamento do patch

O **AAPS** agora tenta parear com o patch automaticamente. Durante o pareamento, aparecem dois pedidos de pareamento Bluetooth do Android. Pressione **OK** no primeiro. Pressione **OK** de novo no segundo, que mostra uma chave de acesso (passkey).

```{warning}
- Mantenha o patch e o seu celular a no máximo 30 cm um do outro durante o pareamento.
- Depois que o patch inicializa, ele emite um bipe a cada 3 minutos até que o pareamento termine.
- Você deve terminar a ativação do patch em até 60 minutos depois que ele inicializa. Se não conseguir, descarte o patch.
```

![Etapa Pareamento do patch](../images/EOPatch/Bild6.png) ![Primeiro pedido de pareamento Bluetooth](../images/EOPatch/Bild7.png) ![Segundo pedido de pareamento Bluetooth com a chave de acesso](../images/EOPatch/Bild8.png)

```{admonition} Older screenshot
:class: note
As duas capturas de tela do pareamento Bluetooth são de uma versão anterior do **AAPS**: a tela do **AAPS** por trás do pedido de pareamento do Android é diferente no **AAPS** 4.
```

### Select insulin

Selecione a insulina com que você preencheu o patch e pressione **Seguinte**. **AAPS** applies a profile switch with this insulin after activation.

### Prepare-se para colocar o patch

Retire a fita adesiva do patch e pressione **Seguinte**.

Se uma agulha estiver para fora, ou se o patch estiver molhado, sujo ou com a fita adesiva dobrada, pressione **Descartar** e use um patch novo.

![Etapa Prepare-se para colocar o patch](../images/EOPatch/Bild9.png)

### Local

Esta etapa só aparece se **Gerenciar rodízio do local da bomba** estiver ativado nas configurações de rotação do local. Toque no lugar do desenho do corpo onde você vai colocar o patch e pressione **Seguinte**, ou pressione **Ignorar**.

### Colocando o patch

A insulina deve ir para um local com tecido gorduroso sob a pele, mas com poucos nervos ou vasos sanguíneos. O abdômen, o braço ou a coxa são boas escolhas. Limpe e seque o local e depois cole o patch na pele.

Verifique o local de infusão e depois pressione **Iniciar verificação de segurança**.

```{warning}
- Pressione as bordas da fita do patch de forma uniforme, para que todo o patch fique bem colado na pele.
- Se o patch não colar por completo, pode entrar ar entre o patch e a pele. Isso enfraquece o adesivo e a resistência à água do patch.
```

![Etapa Colocando o patch](../images/EOPatch/Bild10.png)

### Verificação de segurança

A verificação de segurança leva cerca de 30 segundos. Quando ela termina, o patch emite um bipe. Se ela falhar, pressione **Tentar novamente**.

```{warning}
Para um uso seguro, não gire a alavanca de inserção da agulha até que a verificação de segurança esteja concluída.
```

![Etapa Colocando o patch com o botão Iniciar verificação de segurança](../images/EOPatch/Bild11.png) ![Verificação de segurança em andamento](../images/EOPatch/Bild12.png)

```{admonition} Older screenshot
:class: note
As capturas de tela de **Prepare-se para colocar o patch** até **Verificação de segurança** são de uma versão anterior do **AAPS** e podem ser diferentes no **AAPS** 4.
```

### Inserindo a agulha

Segure o patch com firmeza. Gire a alavanca de inserção da agulha para cima em mais de 100° para inserir a agulha. O patch emite um bipe quando a agulha é inserida corretamente. Depois, continue girando a alavanca até o fim para removê-la. Press **Next**.

```{caution}
Se você for para a próxima etapa sem ouvir o bipe, aparece um **Erro de inserção da agulha**. Confira o bipe e pressione **Tentar novamente**. Se o erro continuar, pressione **Descartar** para desativar o patch.
```

### Ativação do patch concluída

A última página confirma que o patch está ativo e que ele vai lembrar você quando estiver perto do prazo de expiração. Pressione **Finalizar** para voltar à tela da bomba.

## Descartar o patch

Troque o patch quando ele estiver com pouca insulina, quando expirar ou se estiver com defeito. Recomendamos usar cada patch por no máximo 84 horas depois que ele inicializa.

1. Abra a tela da bomba (**Gerenciar** → **Bomba**). Enquanto um patch estiver ativo, pressione **Descartar patch**.
1. A página **Descartar patch** mostra o tempo restante e a insulina restante no patch. Pressione **Descartar patch**.
1. Uma caixa de diálogo pede que você confirme. Pressione **Descartar patch** de novo.
1. Quando o patch for desativado, o assistente mostra **O descarte do patch foi concluído.** Retire o patch do corpo e pressione **Confirmar**.

Depois disso, o assistente segue direto para a ativação de um novo patch (veja acima). Pressione a seta de voltar se quiser parar aqui.

Enquanto nenhum patch estiver ativo, o **AAPS** mostra a bomba como suspensa e registra uma basal temporária de 0 U/h, para que nenhuma insulina basal seja contada no IOB até que o próximo patch seja ativado.

![A tela da bomba EOPatch2 com o botão DISCARD/CHANGE PATCH](../images/EOPatch/Bild13.png) ![Página Descartar patch](../images/EOPatch/Bild14.png) ![Caixa de diálogo de confirmação de Descartar patch](../images/EOPatch/Bild15.png) ![O descarte do patch foi concluído](../images/EOPatch/Bild16.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. No **AAPS** 4, você abre a tela da bomba em **Gerenciar** → **Bomba**, e o botão nela se chama **Descartar patch**.
```

```{admonition} If the patch does not respond
:class: warning
Se o **AAPS** não conseguir se comunicar com o patch, pode aparecer uma página sobre desligar o alarme do patch manualmente: retire o patch do corpo, descole a fita adesiva e use um clipe para pressionar com firmeza o furo ao lado da porta de preenchimento de insulina.

A página **Descartar patch** também tem um botão **Redefinição forçada**. Ele apenas remove o patch do **AAPS**, sem enviar nenhum comando ao patch. O patch continua aplicando insulina até a bateria acabar ou até você desligá-lo manualmente. Use-o somente se o descarte normal falhar, e retire o patch do corpo.
```

## Suspending and resuming insulin delivery

Suspending insulin delivery also cancels any extended bolus and temporary basal. When you resume, these are **not** restarted. While insulin delivery is suspended, the patch beeps every 15 minutes.

### Suspender a administração de insulina

1. Open the pump screen (**Manage** → **Pump**) and press **Suspend pump**.
1. A dialog explains what will be suspended. Press **Confirm**.
1. In the **Basal Suspending Time** dialog, choose how long to suspend: 30 min, 1 hr, 1 hr 30 min or 2 hr. Press **Confirm**.

Insulin delivery is suspended for the time you chose.

![The EOPatch2 pump screen with the SUSPEND button](../images/EOPatch/Bild17.png) ![Suspend confirmation dialog](../images/EOPatch/Bild18.png) ![Basal Suspending Time dialog](../images/EOPatch/Bild19.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. In **AAPS** 4 you open the pump screen from **Manage** → **Pump**, and the button on it is labelled **Suspend pump**.
```

### Retomar a administração de insulina

1. Open the pump screen (**Manage** → **Pump**) and press **Resume pump**.
1. In the **Resume insulin delivery** dialog, press **Confirm**.

![The EOPatch2 pump screen with the RESUME button](../images/EOPatch/Bild20.png) ![Resume insulin delivery dialog](../images/EOPatch/Bild21.png)

```{admonition} Older screenshot
:class: note
The screenshots above are from an earlier **AAPS** version. In **AAPS** 4 you open the pump screen from **Manage** → **Pump**, and the button on it is labelled **Resume pump**.
```

```{warning}
When the suspend time ends, **AAPS** shows an **End of insulin suspend** warning. Insulin delivery does **not** restart until you confirm it. If you do not, you could develop hyperglycemia.
```

(eopatch2-alarms-and-warnings)=

## Alarms and warnings

### Alarmes

Alarms are for urgent, top-priority situations and need your action straight away. **AAPS** sounds an alarm that keeps going until you acknowledge it, and shows the message as a notification on the **Overview** screen. An alarm means there is a problem with the patch in use. In many cases the patch has to be discarded and replaced with a new one.

When you press **Confirm** on the notification, **AAPS** handles the alarm. For most alarms, this deactivates the patch. For an **Inappropriate temperature** alarm, the button is **Retry**.

![EOPatch2 alarm](../images/EOPatch/Bild22.png) ![EOPatch2 alarm after the patch was deactivated](../images/EOPatch/Bild23.png)

```{admonition} Older screenshot
:class: note
The alarm screenshots are from an earlier **AAPS** version and may look different in **AAPS** 4.
```

The different alarms are explained below.

| Alarme                      | Explicação                                                                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reservatório vazio          | The patch has run out of insulin.                                                                                                                              |
| Patch expirado              | The patch's usage time is over, and it cannot deliver any more insulin.                                                                                        |
| Oclusão                     | The patch's insulin path seems to be blocked.                                                                                                                  |
| Falha no autoteste ao ligar | The patch found an unexpected error during its self-test after booting.                                                                                        |
| Temperatura inadequada      | The patch is outside its normal operating temperature while you activate or use it. Move the patch to a place with a suitable temperature (4.4 to 37°C).       |
| Erro de inserção da agulha  | The needle was not inserted correctly during activation. Check that the needle insertion edge of the patch and the needle action lever are in a straight line. |
| Erro na bateria do patch    | The patch's internal battery is about to run out and the patch will power off.                                                                                 |
| Erro na ativação do patch   | The patch was not fully activated within 60 minutes of booting.                                                                                                |
| Erro do patch               | The patch found an unexpected error while being activated or used.                                                                                             |

### Avisos

Warnings are for medium- or low-priority situations. A warning appears as a notification on the **Overview** screen.

![EOPatch2 warning shown on the Overview screen](../images/EOPatch/Bild24.png)

```{admonition} Older screenshot
:class: note
This screenshot is from an earlier **AAPS** version: in **AAPS** 4 the warning appears on the main screen, which looks different.
```

The different warnings are explained below.

| Aviso                        | Explicação                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Fim da suspensão de insulina | The suspend time you chose is over. Press **Resume pump** on the notification to restart insulin delivery.                    |
| Reservatório baixo           | The insulin left in the patch is below the amount set in **Low reservoir Alerts**.                                            |
| Vida útil do patch expirada  | The patch's usage period is over.                                                                                             |
| O patch expirará em breve    | The patch must be discarded in 1 hour.                                                                                        |
| Ativação do patch incompleta | Patch activation was interrupted for more than 3 minutes after pairing. Open the pump screen and finish activating the patch. |
| Bateria do patch fraca       | The patch's battery is low.                                                                                                   |

## Where to get help

Development of the EOPatch2 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Leia** a seção correspondente desta documentação para confirmar como a função deve funcionar.
2. **Pergunte** no canal *#AAPS* do [Discord](https://discord.gg/4fQUWHZ4Mw) ou em um dos outros [canais da comunidade](../GettingHelp/WhereCanIGetHelp.md).
3. **Informe um bug** procurando nos [issues existentes](https://github.com/nightscout/AndroidAPS/issues); se o seu não estiver na lista, abra um [novo issue](https://github.com/nightscout/AndroidAPS/issues) e anexe seus [arquivos de log](../GettingHelp/AccessingLogFiles.md).

Ao pedir ajuda, informe a marca e o modelo do seu celular, a versão do Android, a versão do **AAPS** e uma descrição simples do problema (o que mudou, quando funcionou pela última vez).
