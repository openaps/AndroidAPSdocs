# CareLevo

A CareLevo é uma bomba patch sem tubo, feita pela CareMedi. Cada patch comporta até 300 U de insulina e é usado por até 7 dias (168 horas). Ela se comunica com o **AAPS** pelo Bluetooth do seu telefone, sem nenhum dispositivo extra.

```{admonition} New driver
:class: warning
O driver CareLevo é novo no **AAPS**. Leia esta página inteira antes de ativar o seu primeiro patch e tenha à mão as instruções de uso da própria bomba.
```

A menor dose que o patch consegue administrar é 0,05 U. Defina as taxas basais no **Perfil** com um mínimo de 0,05 U/h, em incrementos de 0,05 U/h; caso contrário, a insulina que o **Perfil** espera e a insulina que o patch administra ficam um pouco diferentes. O **AAPS** usa as taxas basais que o patch aceitou.

```{contents} Table of contents
:depth: 1
:local: true
```

## Recursos da bomba com o AAPS

* Comunica-se com o **AAPS** pelo Bluetooth do próprio celular, sem um dispositivo de comunicação adicional.
* Bólus em incrementos de 0,05 U.
* Taxas basais de 0,05 U/h a 15 U/h, em incrementos de 0,05 U/h, com segmentos basais de 30 minutos.
* Taxas basais temporárias definidas como taxa absoluta, até 12 horas.
* Bólus estendido de até 8 horas.
* As mudanças de horário de verão e de fuso horário devem ser feitas manualmente. O patch avisa você quando o fuso horário muda.

## Configuração da bomba

1. Abra o **menu** (☰) no canto superior esquerdo da tela principal do **AAPS** e selecione **Configuração**.
1. Selecione **Carelevo** na seção Bomba.
1. Pressione a tecla Voltar para retornar à tela principal.

![O plugin Carelevo selecionado em Configuração > Bomba](../images/v4/Pumps/carelevo_enabled.png)

## Configurações

Abra a tela da bomba com **Gerenciar → Bomba** (ou **Configuração → Bomba → Abrir plugin**).

Abra as configurações da CareLevo tocando no ícone **Configurações** (engrenagem) no canto superior direito. Há três configurações:

![Configurações do driver Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Configuração de notificação de insulina baixa

O patch avisa você quando a insulina restante no reservatório chega à quantidade escolhida. Ela pode ser definida de 20 U a 50 U, em incrementos de 5 U. O padrão é 30 U. Independentemente desta configuração, o patch dispara um alarme crítico e para de administrar insulina quando restam menos de 10 U.

### Configuração de notificação de uso do patch

O patch avisa você quando foi usado pelo número de horas escolhido, para que você possa planejar a troca. Ela pode ser definida de 24 a 167 horas. O padrão é 116 horas.

### Alarme de informações do patch

Quando esta opção está ligada, o patch emite um bipe quando um bólus, um bólus estendido ou uma basal temporária começa e quando termina. O padrão é desligado.

## A tela da bomba

![Tela da bomba Carelevo sem patch ativo](../images/v4/Pumps/carelevo_pump_screen.png)

A tela da bomba mostra o **Status do Bluetooth** (Nenhum patch ativo, Desconectado ou Conectado), o **Nº de série** do patch, a **Hora de ativação** e a **Expiração**, a **Taxa basal** e a **Taxa basal temporária** atuais, a **Insulina restante** (restante / preenchida), o **Tempo restante do patch** e o **Total de insulina administrada**.

Os botões dependem do estado do patch:

* **Ativar patch**: inicia a ativação de um novo patch, veja abaixo.
* **Guia de insulina**: mostra os doze passos para preencher um patch com insulina.
* **Suspender infusão** / **Retomar infusão**: pausa e reinicia a administração de insulina, veja abaixo.
* **Descartar patch**: para o patch atual para que um novo possa ser ativado.

## Ativar um patch

Antes de começar, verifique se há um **Perfil** ativo no **AAPS** e se o Bluetooth está ligado. O patch deve ser ativado dentro de um tempo limitado depois de ligado; se o tempo acabar, o patch dispara o alarme **Tempo limite de aplicação do patch** e não pode ser usado.

Toque em **Ativar patch** na tela da bomba e siga os passos. Você pode cancelar a qualquer momento antes de a agulha ser inserida; o que você digitou é descartado.

### Selecionar a insulina

Confirme a insulina que você usa. O patch exige insulina de ação rápida U-100.

### Preencher o patch com insulina

Preencha o patch com 50 a 300 U, levando em conta por quanto tempo você vai usá-lo. Toque em **Guia de insulina** se precisar das instruções de preenchimento. Depois, toque na quantidade de preenchimento e selecione a quantidade que você colocou; o **AAPS** usa esse valor para mostrar a insulina restante.

### Conectar o patch

1. Tire o patch da embalagem (blister) e remova a tampa da agulha.
1. Pressione o botão liga/desliga do patch por mais de um segundo. Depois do bipe, toque em **Buscar patch**.
1. Quando o patch encontrado for o correto, toque em **Confirmar**. Se não for, toque em **Buscar novamente**.

### Verificação de segurança

Depois que o patch estiver conectado, toque em **Verificação de segurança**. O patch faz um autoteste e é purgado. Verifique se uma gota de insulina se formou na ponta da agulha. Se nenhuma gota estiver visível, toque em **Tentar novamente**. Quando a verificação terminar, toque em **Próximo**.

### Local e fixação do patch

1. Selecione o local onde você vai usar o patch.
1. Limpe bem o local com um algodão com álcool.
1. Remova a fita protetora e cole o patch na pele com o ponto marcado virado para cima.
1. Toque em **Próximo** depois de colar o patch.

### Inserir a agulha

1. Gire a tampa de segurança no sentido da seta e remova-a.
1. Pressione o botão do aplicador até o fim e segure por 10 segundos. Um bipe soa quando a agulha é inserida.
1. Remova o aplicador e toque em **Confirmar inserção**.

Se a inserção falhar, o **AAPS** informa quantas tentativas ainda restam. Quando não resta nenhuma tentativa, o patch dispara o alarme **Erro na inserção da agulha** e deve ser trocado.

A administração de insulina começa assim que a inserção é confirmada.

## Mensagens de bólus

Se o patch recusar um bólus, o **AAPS** informa o motivo. Por exemplo, *O bólus não pode ser administrado. Bólus disponível: 2,8 U* significa que o patch só consegue administrar essa quantidade agora.

Se você parar um bólus e o patch não confirmar a parada, o **AAPS** espera o fim do bólus e registra a quantidade que o patch informa. Se um bólus não foi registrado (por exemplo, porque foi parado enquanto estava sendo administrado), o **AAPS** o adiciona a partir do total do patch e pede que você verifique o IOB antes de tentar de novo.

## Suspender e retomar a administração de insulina

Toque em **Suspender infusão** na tela da bomba e selecione por quanto tempo a administração deve ficar pausada: de 30 minutos a 4 horas, em passos de 30 minutos. A administração não é retomada sozinha: quando a pausa termina, o patch dispara o alerta **Iniciar insulina**. Toque em **Retomar infusão** na tela da bomba, ou em **Iniciar insulina** no alerta, e confirme.

## Descartar um patch

Toque em **Descartar patch** na tela da bomba e confirme. A administração de insulina para e o patch não pode mais ser usado. Remova o patch do corpo e ative um novo.

Quando um alarme crítico parou o patch, o alarme oferece **Desativar patch** no lugar. Tocar nele descarta o patch da mesma forma.

(carelevo-alarms-and-notifications)=

## Alarmes e notificações

O patch informa três níveis de eventos. Todos são mostrados como notificações do **AAPS**.

### Alarmes críticos

A administração de insulina parou. Aja agora:

* **Insulina baixa**: restam menos de 10 U. Desative o patch e troque-o.
* **Patch expirado**: o patch chegou ao fim da sua vida útil. Desative o patch e troque-o.
* **Bateria fraca**: descarte o patch e troque-o.
* **High/Low Temperature**: move to a suitable temperature, between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Desligamento automático**: o patch parou porque o alerta de desligamento automático foi ignorado. Toque em **Iniciar insulina** para reiniciar a administração da basal.
* **Tempo limite de aplicação do patch**, **Falha no autodiagnóstico**, **Erro do patch**, **Oclusão** e **Erro na inserção da agulha**: desative o patch e troque-o.

### Alertas

A administração de insulina continua, mas algo precisa da sua atenção:

* **Insulina baixa**: o reservatório chegou à quantidade definida em **Configuração de notificação de insulina baixa**. Prepare-se para trocar o patch.
* **O patch expirará em breve** e **Vida útil do patch expirada**: troque o patch.
* **Bateria fraca**: prepare-se para trocar o patch.
* **High/Low Temperature**: delivery is paused until the patch is back between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Desligamento automático**: toque em **OK**. Se for ignorado, o alerta passa a ser um alarme crítico e a administração para.
* **Ativação do patch incompleta**: toque em **OK** para concluir a ativação.
* **Iniciar insulina**: a pausa que você definiu terminou. Toque em **Iniciar insulina** para retomar a administração.
* **Ativar Bluetooth** e **BLE não conectado**: o telefone não consegue alcançar o patch. Ligue o Bluetooth ou verifique a conexão do patch.

### Avisos

Só para informação: **Insulina baixa**, **Notificação de tempo de uso do patch** (o tempo definido em **Configuração de notificação de uso do patch** já passou), **Notificação de verificação do patch**, **Alteração de fuso horário** e **Verifique a glicemia** (um tempo definido depois de um bólus).

O patch também informa quando a sua própria função de suspensão por glicose baixa (**LGS**) começa ou termina. O **AAPS** não usa essa função; o loop cuida da glicose baixa por conta própria.

## Onde obter ajuda

Relate problemas com o driver CareLevo na [página de issues do AAPS no GitHub](https://github.com/nightscout/AndroidAPS/issues) ou nos canais da comunidade AAPS, veja [Onde posso obter ajuda?](../GettingHelp/WhereCanIGetHelp.md).
