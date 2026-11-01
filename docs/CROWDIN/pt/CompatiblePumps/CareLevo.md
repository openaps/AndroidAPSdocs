# CareLevo

A CareLevo é uma bomba patch sem tubo, fabricada pela CareMedi. Cada patch leva até 300 U de insulina e é usado até 7 dias (168 horas). Comunica com o **AAPS** pelo Bluetooth do telefone, sem nenhum dispositivo adicional.

```{admonition} New driver
:class: warning
O controlador CareLevo é novo no **AAPS**. Leia esta página toda antes de ativar o seu primeiro patch e tenha à mão as instruções de utilização da própria bomba.
```

A dose mais pequena que o patch consegue administrar é 0,05 U. Defina as taxas basais no **Perfil** com um mínimo de 0,05 U/h, em passos de 0,05 U/h; caso contrário, a insulina que o **Perfil** espera e a insulina que o patch administra são um pouco diferentes. O **AAPS** usa as taxas basais que o patch aceitou.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funções da bomba com o AAPS

* Comunica com o **AAPS** através do Bluetooth do seu telefone, sem outro dispositivo de comunicação.
* Bólus em passos de 0,05 U.
* Taxas basais de 0,05 U/h a 15 U/h, em passos de 0,05 U/h, com segmentos de basal de 30 minutos.
* Basais temporárias definidas como taxa absoluta, até 12 horas.
* Bólus prolongado até 8 horas.
* As mudanças de hora (hora de verão) e de fuso horário têm de ser feitas manualmente. O patch avisa quando o fuso horário muda.

## Configuração da bomba

1. Abra o **menu** (☰) no canto superior esquerdo do ecrã principal do **AAPS** e selecione **Configuração**.
1. Selecione **Carelevo** na secção Bomba.
1. Prima a tecla Voltar para regressar ao ecrã principal.

![O plugin Carelevo selecionado em Configuração > Bomba](../images/v4/Pumps/carelevo_enabled.png)

## Definições

Abra o ecrã da bomba com **Gerir → Bomba** (ou **Configuração → Bomba → Abrir plugin**).

Abra as definições da CareLevo tocando no ícone **Definições** (roda dentada) no canto superior direito. Há três definições disponíveis:

![Definições do controlador Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Definição do aviso de insulina baixa

O patch avisa quando a insulina que resta no reservatório chega à quantidade escolhida. Pode ser definida de 20 U a 50 U, em passos de 5 U. O valor predefinido é 30 U. Independentemente desta definição, o patch dá um alarme crítico e para de administrar insulina quando restam menos de 10 U.

### Definição do aviso de tempo de uso do patch

O patch avisa quando já foi usado durante o número de horas escolhido, para que possa planear a troca. Pode ser definida de 24 a 167 horas. O valor predefinido é 116 horas.

### Alarme de informação do patch

Quando esta opção está ligada, o patch emite um bip quando um bólus, um bólus prolongado ou uma basal temporária começa e quando termina. O valor predefinido é desligado.

## O ecrã da bomba

![Ecrã da bomba Carelevo sem um patch ativo](../images/v4/Pumps/carelevo_pump_screen.png)

O ecrã da bomba mostra o **Estado do Bluetooth** (Nenhum patch ativo, Desligado ou Ligado), o **N.º de série** do patch, a sua **Hora de ativação** e **Expiração**, a **Taxa Basal** e a **Taxa basal temporária** atuais, a **Insulina restante** (restante / enchida), o **Tempo restante do patch** e o **Total de insulina administrada**.

Os botões dependem do estado do patch:

* **Ativar patch**: inicia a ativação de um novo patch, veja abaixo.
* **Guia da insulina**: mostra os doze passos para encher um patch com insulina.
* **Suspender infusão** / **Retomar infusão**: pausa e reinicia a administração de insulina, veja abaixo.
* **Descartar patch**: para o patch atual para que se possa ativar um novo.

## Ativar um patch

Antes de começar, confirme que há um **Perfil** ativo no **AAPS** e que o Bluetooth está ligado. O patch tem de ser ativado num tempo limitado depois de ser ligado; se o tempo acabar, o patch dá o alarme **Tempo de aplicação do patch esgotado** e não pode ser usado.

Prima **Ativar patch** no ecrã da bomba e siga os passos. Pode cancelar a qualquer momento antes de a agulha ser inserida; o que introduziu é descartado.

### Selecionar a insulina

Confirme a insulina que usa. O patch precisa de insulina de ação rápida U-100.

### Encher o patch com insulina

Encha o patch com 50 a 300 U, tendo em conta quanto tempo o vai usar. Prima **Guia da insulina** se precisar das instruções para encher. Depois toque na quantidade de enchimento e selecione a quantidade que encheu; o **AAPS** usa-a para mostrar a insulina restante.

### Ligar o patch

1. Tire o patch da embalagem blister e retire a tampa da agulha.
1. Prima o botão de ligar do patch durante mais de um segundo. Depois do bip, toque em **Procurar patch**.
1. Se o patch encontrado for o correto, toque em **Confirmar**. Se não for, toque em **Procurar novamente**.

### Verificação de segurança

Depois de o patch estar ligado, prima **Verificação de segurança**. O patch faz um autoteste e purga. Verifique se se formou uma gota de insulina na ponta da agulha. Se não vir nenhuma gota, prima **Tentar Novamente**. Quando a verificação estiver concluída, prima **Seguinte**.

### Local e colocação do patch

1. Selecione o local onde vai usar o patch.
1. Limpe bem o local com um toalhete com álcool.
1. Retire a película de proteção e cole o patch na pele com o ponto marcado virado para cima.
1. Prima **Seguinte** depois de colar o patch.

### Inserir a agulha

1. Rode a tampa de segurança no sentido da seta e retire-a.
1. Prima o botão do aplicador até ao fundo e mantenha-o premido durante 10 segundos. Ouve-se um bip quando a agulha é inserida.
1. Retire o aplicador e prima **Confirmar inserção**.

Se a inserção falhar, o **AAPS** indica quantas tentativas restam. Quando não resta nenhuma tentativa, o patch dá o alarme **Erro na inserção da agulha** e tem de ser substituído.

A administração de insulina começa logo que a inserção é confirmada.

## Mensagens de bólus

Se o patch recusar um bólus, o **AAPS** indica porquê. Por exemplo, *Não é possível administrar o bólus. Bólus disponível: 2,8 U* significa que o patch só consegue administrar essa quantidade agora.

Se parar um bólus e o patch não confirmar a paragem, o **AAPS** espera que o bólus termine e regista a quantidade indicada pelo patch. Se um bólus não foi registado (por exemplo, porque foi parado enquanto estava a decorrer), o **AAPS** adiciona-o a partir do total do patch e pede-lhe para verificar a IA antes de tentar de novo.

## Suspender e retomar a administração de insulina

Prima **Suspender infusão** no ecrã da bomba e selecione quanto tempo a administração deve ficar em pausa: de 30 minutos a 4 horas, em passos de 30 minutos. A administração não é retomada sozinha: quando a pausa termina, o patch dá o alerta **Iniciar insulina**. Prima **Retomar infusão** no ecrã da bomba, ou **Iniciar insulina** no alerta, e confirme.

## Descartar um patch

Prima **Descartar patch** no ecrã da bomba e confirme. A administração de insulina para e o patch já não pode ser usado. Retire o patch do corpo e ative um novo.

Quando um alarme crítico parou o patch, o alarme oferece **Desativar patch** em vez disso. Premir este botão descarta o patch da mesma forma.

(carelevo-alarms-and-notifications)=

## Alarmes e avisos

O patch comunica três níveis de eventos. Todos são mostrados como notificações do **AAPS**.

### Alarmes críticos

A administração de insulina parou. Aja já:

* **Insulina baixa**: restam menos de 10 U. Desative o patch e troque-o.
* **Patch expirado**: o patch chegou ao fim da sua vida útil. Desative o patch e troque-o.
* **Bateria fraca**: descarte o patch e troque-o.
* **High/Low Temperature**: move to a suitable temperature, between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Desligar automático**: o patch parou porque o alerta Desligar automático foi ignorado. Prima **Iniciar insulina** para reiniciar a administração da basal.
* **Tempo de aplicação do patch esgotado**, **Autodiagnóstico falhou**, **Erro do patch**, **Oclusão** e **Erro na inserção da agulha**: desative o patch e troque-o.

### Alertas

A administração de insulina continua, mas algo precisa da sua atenção:

* **Insulina baixa**: o reservatório chegou à quantidade definida em **Definição do aviso de insulina baixa**. Prepare-se para trocar o patch.
* **O patch vai expirar em breve** e **Tempo de vida do patch expirado**: troque o patch.
* **Bateria fraca**: prepare-se para trocar o patch.
* **High/Low Temperature**: delivery is paused until the patch is back between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Desligar automático**: toque em **OK**. Se for ignorado, o alerta passa a alarme crítico e a administração para.
* **Ativação do patch incompleta**: toque em **OK** para concluir a ativação.
* **Iniciar insulina**: a pausa que definiu terminou. Toque em **Iniciar insulina** para retomar a administração.
* **Ligue o Bluetooth** e **BLE não ligado**: o telefone não consegue comunicar com o patch. Ligue o Bluetooth ou verifique a ligação ao patch.

### Avisos

Apenas para informação: **Insulina baixa**, **Aviso do tempo de uso do patch** (o tempo definido em **Definição do aviso de tempo de uso do patch** já passou), **Aviso de verificação do patch**, **Mudança de fuso horário** e **Verificar a glicose** (um tempo definido depois de um bólus).

O patch também indica quando a sua própria função de suspensão por glicose baixa (**SGB**) começa ou termina. O **AAPS** não usa esta função; o loop trata ele próprio da glicose baixa.

## Onde obter ajuda

Comunique problemas com o controlador CareLevo na [página de problemas (issues) do AAPS no GitHub](https://github.com/nightscout/AndroidAPS/issues) ou nos canais da comunidade AAPS; veja [Onde posso obter ajuda?](../GettingHelp/WhereCanIGetHelp.md).
