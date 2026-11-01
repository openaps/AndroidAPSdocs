# Comandos SMS

```{contents} Table of contents
:depth: 2
```

A maioria dos ajustes remotos (alvos temporários, carboidratos, trocas de perfil e, depois de o cliente ser pareado, bólus) pode ser feita com o [app **AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) em um telefone Android com conexão à internet, veja [Controle dispositivo principal ↔ cliente](#client-master-control) (uma versão do **AAPSClient** para iPhone está em desenvolvimento, veja [AAPSClient](AapsClient.md)). Os comandos SMS continuam sendo uma alternativa que funciona sem internet, e são a única opção remota se você usa um iPhone como seguidor e ainda não tem o **AAPSClient**.

**Os comandos SMS são muito úteis:**
1. Para o controle remoto do dia a dia

2. Se você quiser aplicar bólus de insulina a distância sem um **AAPSClient** pareado

3. Em uma região com sinal de internet fraco, onde as mensagens de texto chegam, mas a recepção de dados/internet no telefone é limitada. Isso é muito útil quando você vai para lugares isolados (por exemplo, acampar, esquiar).

4. Se o seu outro método de controle remoto (**AAPSClient**) não estiver funcionando temporariamente

## Segurança em primeiro lugar

Se você ativar o **Comunicador SMS** no **AAPS**, lembre-se de que o telefone configurado para enviar comandos remotos pode ser roubado e/ou usado por outra pessoa. Sempre bloqueie o seu telefone com pelo menos um PIN. Uma senha forte e/ou um bloqueio biométrico são muito recomendados; e garanta que esta senha seja diferente da Senha mestra do APK (a senha necessária para exportar as configurações do **AAPS**).

Além disso, é recomendado permitir um [segundo número de telefone](#SMSCommands-authorized-phone-numbers) para os comandos SMS. Assim, você pode usar o segundo número para [desativar](#SMSCommands-other) o Comunicador SMS, caso o seu telefone remoto principal fique comprometido.

O intervalo mínimo padrão entre comandos de bólus é de 15 minutos. Por motivos de segurança, você precisa adicionar pelo menos dois números de telefone autorizados para mudar isso para um intervalo menor. Se você tentar aplicar outro bólus remoto dentro de 15 minutos após o bólus anterior, vai receber a resposta “O bólus remoto não está disponível. Tente novamente mais tarde.”

O AAPS também vai informar você por mensagem de texto se os seus comandos remotos, como um bólus ou uma troca de perfil, foram executados. É recomendável configurar tudo de forma que as mensagens de confirmação sejam enviadas para pelo menos dois números de telefone diferentes, para o caso de um dos telefones que as recebem ser roubado.

**Se você aplicar bólus por comandos SMS, precisa inserir os carboidratos separadamente (segundo SMS, AAPSClient...)!** Se não fizer isso, o IOB vai estar correto, mas o COB vai estar baixo demais, e isso pode fazer com que um bólus de correção não seja aplicado, porque o **AAPS** acha que você tem insulina ativa demais.

Para os comandos sensíveis, é preciso usar um app autenticador com uma senha de uso único baseada no tempo, para aumentar a segurança.

Se você quiser tirar de um telefone de cuidador a possibilidade de enviar comandos SMS, use o botão de emergência “[Redefinir Autenticadores](#sms-commands-authenticator-setup)” no **AAPS** ou envie o comando SMS “[SMS stop](#SMSCommands-other)”. Ao redefinir os autenticadores, você torna inválidos TODOS os telefones dos cuidadores. Você vai precisar configurá-los novamente.

## Configurar os comandos SMS

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Configuração do Autenticador

A autenticação de dois fatores é usada para aumentar a segurança.

No telefone do cuidador, baixe (da App Store ou do Google Play) e instale um app autenticador. Apps gratuitos populares são:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Esses apps autenticadores geram uma senha de 6 dígitos, de uso único e com tempo limitado, como em apps de banco ou de compras. Você pode usar outro app autenticador, desde que ele suporte tokens TOTP RFC 6238. O Microsoft Authenticator não funciona.

### Verifique as configurações do telefone

No seu telefone, vá em **Apps > AAPS > Permissions** (Apps → AAPS → Permissões). Verifique se **SMS** e **Phone** (Telefone) estão permitidos.

![imagem](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
O Android pode bloquear a permissão de **SMS** para apps que não foram instalados de uma loja de apps, como o **AAPS**. Se você vir esta mensagem ao conceder a permissão de **SMS**, abra **Settings > Apps > AAPS** (Configurações → Apps → AAPS) no telefone, toque no menu **⋮** (canto superior direito) e selecione **Allow restricted settings** (Permitir configurações restritas). Depois, conceda a permissão de **SMS** novamente.
```

![O acesso do app a SMS foi negado](../images/sms_permission_restricted.png)

### Sincronização de data e hora

A hora nos dois telefones precisa estar sincronizada. O melhor é definir a hora automaticamente pela rede. Diferenças de hora podem causar problemas de autenticação.

Tanto no telefone com **AAPS** quanto no telefone do cuidador, verifique se a data e a hora estão sincronizadas. A forma exata de fazer isso depende do seu aparelho; talvez você precise testar configurações diferentes.

Exemplo (para Samsung S23): **Settings > General management > Date and time** (Configurações → Gerenciamento geral → Data e hora): verifique se **Automatic date and time** (Data e hora automáticas) está marcado.

Algumas opções podem aparecer em cinza, porque precisam de um administrador por meio de uma conta familiar, se o telefone foi configurado como conta de criança. No iPhone do cuidador/dos pais, essa configuração de data e hora se chama “set automatically” (definir automaticamente). Se você não tem certeza de que os aparelhos estão sincronizados, não se preocupe: você pode configurar os comandos SMS e resolver o problema depois, se ele parecer causar problemas (peça ajuda se precisar).

### Configurações do AAPS

Agora que as configurações do telefone foram verificadas, no próprio app **AAPS**, vá em [**Configuração** → **Comunicação**](../SettingUpAaps/ConfigBuilder.md) e ative o plugin **Comunicador SMS**.

Abra as configurações do **Comunicador SMS**.

Ative **Permitir comandos remotos via SMS**. As opções **PIN adicional obrigatório no fim do token** e **Configuração do Autenticador** só aparecem depois que isso for ativado:

![Configurações do Comunicador SMS](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Números de telefone permitidos

Insira o(s) número(s) de telefone do cuidador. Inclua o código do país e tire o primeiro “0” do número de telefone, como nestes exemplos:
* Número de telefone do Reino Unido: +447976304596
* Número de telefone dos EUA: +11234567890
* Número de telefone da França:  +33612344567
* _etc._

Observe que o “+” na frente do número pode ser necessário ou não, dependendo da sua localização. Para descobrir isso, envie um texto de teste, que vai mostrar o formato recebido na tela do plugin **Comunicador SMS** (**Configuração** → **Comunicação** → **Comunicador SMS** → **Abrir plugin**).

Se você tiver mais de um número de telefone para adicionar, separe-os com ponto e vírgula, **SEM espaço entre os números** (isto é muito importante!). Selecione **OK**:

![Números de telefone permitidos](../images/sms_allowed_numbers.png)

#### Distância mínima para bólus remoto

- Você pode definir o intervalo mínimo (em minutos) entre dois bólus enviados por SMS.
- Por motivos de segurança, você precisa adicionar pelo menos dois números de telefone autorizados para alterar este valor.

#### PIN adicional obrigatório no fim do token

Por motivos de segurança, o código de resposta precisa ser seguido de um PIN. Escolha um PIN que você (e os outros cuidadores) vão usar no fim do código do autenticador ao enviar o comando SMS.

Os requisitos do PIN são:

* pelo menos 6 dígitos
* somente dígitos

Para um PIN mais seguro, não use o mesmo dígito muitas vezes (_por exemplo,_ 111111) nem uma sequência (_por exemplo,_ 123456).

![PIN adicional obrigatório no fim do token](../images/sms_pin.png)

#### Configuração do Autenticador

* Toque em **Configuração do Autenticador** e siga as instruções passo a passo na tela.
* Abra o app autenticador instalado no _telefone do cuidador_, configure uma nova conexão e
* Use o telefone do cuidador para escanear o código QR mostrado em **Escaneie o QR Code para configurar os códigos OTP do AAPS**.

![Configuração do Autenticador com código QR](../images/sms_authenticator_setup.png)

* Em **Testar a senha de uso único**, insira em **Código para verificar** a senha de uso único do app autenticador do telefone do cuidador, seguida do seu PIN:

Exemplo:
* O token do app autenticador é 457051
* O seu PIN obrigatório é 2401
* Código para verificar: 4570512401

Se o código estiver correto, o texto vermelho “PIN incorreto” muda automaticamente para um “OK” verde. **Não há nenhum botão para tocar!** O processo está concluído; não há nenhum botão “OK” para tocar depois de inserir o código:

![Testar a senha de uso único e Redefinir Autenticadores](../images/sms_authenticator_test.png)

Agora os comandos SMS devem estar configurados.

Use o botão **Redefinir Autenticadores** no final da tela **Configuração do Autenticador** se você quiser remover os autenticadores configurados. (Ao redefinir o autenticador, você torna inválidos TODOS os autenticadores já configurados. Você vai precisar configurá-los novamente.)

## Uso dos comandos SMS

### Primeiros passos com os comandos SMS

1)  Para verificar se configurou tudo corretamente, teste a conexão enviando “bg” como mensagem SMS do telefone do cuidador para o telefone com **AAPS**. Você deve receber uma resposta parecida com esta:

![imagem](../images/remote-control-06.png)

Se você não receber nenhuma resposta, veja a seção [Resolução de problemas](#SMSCommands-troubleshooting) abaixo.

2)  Agora tente um comando SMS que exige o autenticador, _por exemplo,_ “target hypo”. O telefone do cuidador vai receber uma mensagem de volta, pedindo que você insira a **senha de seis dígitos do autenticador** do app autenticador, seguida do **PIN** secreto adicional, que só os cuidadores/seguidores conhecem (no total, uma sequência de doze dígitos, se o seu PIN tiver 6 dígitos).

Quando você enviar um comando SMS pela primeira vez, faça isso perto do telefone com **AAPS**, para ver como funciona:

![imagem](../images/remote-control-16.png)

O telefone do cuidador vai receber um SMS de resposta do **AAPS** para confirmar se o comando SMS remoto foi executado com sucesso.

Se o comando der certo, você vai receber uma resposta que confirma isso. Se houver um problema, você vai receber uma mensagem de erro. Veja [Resolução de problemas](#SMSCommands-troubleshooting) abaixo para os erros comuns.

**Dica**: pode ser útil ter SMS ilimitado no seu plano de telefone (para cada telefone usado) se muitos SMS forem enviados.

### Bólus de refeição por comandos SMS

O bólus de insulina a distância pode ser feito por **Comandos SMS** ou por um **AAPSClient** pareado (veja [Controle dispositivo principal ↔ cliente](#client-master-control)); ele não pode ser feito pelo site do Nightscout. Os carboidratos também podem ser informados por SMS ou pelo **AAPSClient**. Com SMS, não é possível enviar comandos de carboidratos e de insulina em uma única mensagem SMS. Esses comandos precisam ser enviados separadamente, assim:

1)  Envie o bólus de insulina (_por exemplo,_ “bolus 2” comanda um bólus de 2 unidades) por comandos SMS; isso equivale a **Tratamentos** → **Insulina** no **AAPS**. 2)  Envie os carboidratos (_por exemplo,_ “carbs 20” informa 20 g de carboidratos). Isso equivale a **Tratamentos** → **Carboidratos** no **AAPS**.

Para evitar hipoglicemias, é uma boa ideia começar de forma conservadora, aplicando **menos insulina** do que seria necessário pela sua relação de carboidratos, porque você não está levando em conta o nível de glicose atual nem a tendência da glicose.

**A ordem em que você envia esses comandos é importante**. Se você informar uma grande quantidade de carboidratos por qualquer meio e tiver os SMBs ativados, o **AAPS** pode reagir imediatamente com um bólus parcial de insulina. Então, se depois você tentar enviar um bólus de insulina _após_ informar os carboidratos, pode ter um atraso frustrante e uma mensagem de “bólus em andamento”, e depois vai precisar verificar o que foi aplicado como SMB. Ou, se você não perceber que um SMB está sendo aplicado e o seu próprio bólus seguinte também der certo, pode ser aplicada insulina demais para a refeição no total. Por isso, se você aplicar bólus de refeição a distância, envie sempre o bólus de insulina _antes_ de informar os carboidratos. Se preferir, você pode combinar o **AAPSClient** com os comandos SMS: os carboidratos inseridos em um **AAPSClient** pareado não precisam de código de autenticação e por isso são mais rápidos que os comandos SMS. Os carboidratos ou outros tratamentos inseridos no site do Nightscout **não** são aplicados enquanto o controle do cliente estiver ligado; nesse caso, o **AAPS** está no [modo reforçado](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Comandos

```{contents} List of command groups
:depth: 1
:local: true
```

Os comandos precisam ser enviados em inglês; a resposta vem no seu idioma se o texto da resposta já estiver [traduzido](#translations-translate-strings-for-AAPS-app). Os comandos não diferenciam maiúsculas e minúsculas; você pode usar letras minúsculas ou maiúsculas.

![Exemplo de comandos SMS](../images/SMSCommands.png)

As **tabelas de comandos SMS** abaixo mostram todos os comandos SMS possíveis. _Valores de exemplo_ são dados para ajudar a entender. Os comandos aceitam a mesma faixa de valores possíveis (alvos, porcentagem do perfil etc.) que o próprio app **AAPS** aceita.

(authentication-or-not)=
### Com ou sem autenticação?

Alguns comandos SMS dão uma resposta imediata, e alguns comandos SMS exigem uma **autenticação** forte pelo app autenticador. Uma consulta simples como “**BG**” (que pede uma atualização da glicose atual) é rápida de digitar, não precisa de autenticação e retorna as informações de status do **AAPS** mostradas abaixo:

![imagem](../images/remote-control-06.png)

Os comandos que precisam de mais segurança exigem que um código seja inserido, por exemplo:

![SMS autenticado](../images/remote-control-07.png)

A coluna *Autent.* nas tabelas abaixo indica se essa autenticação forte é exigida para cada comando.

### Dados do CGM

| Comando    | Autent. | Função e *Resposta*                                                                                                                                                                              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BG         | Não     | Retorna: última glicose, delta, IOB (bólus e basal), COB<br/>*Último BG: 5,6 4min atrás, Delta: -0,2 mmol, IOB: 0,20U (Bólus: 0,10U Basal: 0,10U)*                                         |
| CAL 5.6/90 | Sim     | Calibra o CGM com o valor 5,6/90<br/>(use o valor adequado à sua unidade de glicose)<br/>Só funciona se estiver configurado corretamente no **AAPS**.<br/>*Calibração enviada* |

### Bomba

| Comando              | Autent. | Função e *Resposta*                                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| BOMBA                | Não     | Última conexão: 1 min atrás<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Bateria: 100 |
| PUMP DISCONNECT *30* | Sim     | Para desconectar a bomba por *30* minutos                                                                       |
| PUMP CONNECT         | Sim     | Bomba reconectada                                                                                               |

### Basal

| Comando           | Autent. | Função e *Resposta*                        |
| ----------------- | ------- | ------------------------------------------ |
| BASAL 0.3         | Sim     | Para iniciar a basal de 0,3 U/h por 30 min |
| BASAL 0.3 20      | Sim     | Para iniciar a basal de 0,3 U/h por 20 min |
| BASAL 30%         | Sim     | Para iniciar a basal de 30% por 30 min     |
| BASAL 30% 50      | Sim     | Para iniciar a basal de 30% por 50 min     |
| BASAL STOP/CANCEL | Sim     | Para parar a basal temporária              |

Algumas bombas aceitam basal temporária somente em porcentagem, outras somente em U/h. Se você usar a outra forma, o **AAPS** responde *"Esta bomba aceita basal temporária somente em porcentagem, não em U/h."* (ou o contrário) e não define nada. A duração precisa ser um múltiplo do passo de duração da basal temporária da sua bomba.


### Loop

| Comando           | Autent. | Função e *Resposta*                                                                                                                                                                                                                                 |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STATUS DO LOOP    | Não     | A resposta depende do status atual:<br/> - *Loop Desativado* se o loop estiver desativado ou em LGS<br/> - *Loop ativado* se o loop estiver fechado ou aberto<br/> - *Suspenso (10 m)* se o loop estiver desconectado ou suspenso |
| LOOP STOP/DISABLE | Sim     | A bomba volta para a taxa basal programada.<br/>*Loop foi desativado*                                                                                                                                                                         |
| LOOP SUSPEND 20   | Sim     | *Loop suspenso por 20 minutos*                                                                                                                                                                                                                      |
| LOOP RESUME       | Sim     | *Loop retomado*                                                                                                                                                                                                                                     |
| LOOP CLOSED       | Sim     | *Modo de operação atual: Loop fechado*                                                                                                                                                                                                              |
| LOOP LGS          | Sim     | *Modo de operação atual: Suspensão por glicose baixa*                                                                                                                                                                                               |

### Bólus

O bólus remoto não é permitido dentro de 15 min (este valor só pode ser alterado se 2 números de telefone forem adicionados) após o último comando de bólus ou comandos remotos! Nesse caso, a resposta seria *O bólus remoto não está disponível. Tente novamente mais tarde.* Essa resposta também é enviada quando a bomba está aplicando um bólus no momento.

| Comando              | Autent. | Função e *Resposta*                                                                                                                                                                 |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Sim     |                                                                                                                                                                                     |
| BOLUS 0.60 MEAL      | Sim     | Aplica o bólus indicado de 0,60 U<br/>**e** define o [Alvo temporário Comer em breve](#TempTargets-eating-soon-temp-target)                                                   |
| CARBS 5              | Sim     | Para inserir 5 g, sem bólus                                                                                                                                                         |
| CARBS 5 17:35/5:35PM | Sim     | Para inserir 5 g às 17:35.<br/>O formato de hora aceito depende<br/> da configuração de hora (12 h/24 h) do telefone.                                                   |
| EXTENDED 2 120       | Sim     | Para iniciar um bólus estendido de 2 U por 120 min.<br/>Somente para [bombas compatíveis](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Sim     | Para parar o bólus estendido                                                                                                                                                        |

### Perfil

| Comando        | Autent. | Função e *Resposta*                                                                                                                                    |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PROFILE STATUS | Não     | Perfil atual e porcentagem                                                                                                                             |
| PROFILE LIST   | Não     | A lista atual de perfis no **AAPS**, por exemplo:<br/>1. Perfil1<br/> 2. Perfil2                                                           |
| PROFILE 1      | Sim     | Para trocar para o perfil 1 da lista.<br/>Use os números retornados pelo **PROFILE LIST**,<br/>não os nomes dos perfis como você os salvou |
| PROFILE 2 30   | Sim     | Para trocar para o perfil Perfil2 com 30%                                                                                                              |

A porcentagem precisa estar entre 30 e 250%, como no app. Um valor fora dessa faixa é recusado antes de você ser solicitado a inserir o código de autenticação.

### Alvos temporários

| Comando                   | Autent. | Função e *Resposta*                               |
| ------------------------- | ------- | ------------------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Sim     | Para definir o Alvo temporário MEAL/ACTIVITY/HYPO |
| TARGET STOP/CANCEL        | Sim     | Para cancelar o Alvo temporário                   |


(SMSCommands-other)=
### Outro

| Comando          | Autent. | Função e *Resposta*                                                                                                                                                                                                                                                           |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESTART          | Sim     | Reinicia o AAPS. Útil se você tiver problemas que normalmente se resolvem com uma reinicialização.                                                                                                                                                                            |
| SMS DISABLE/STOP | Sim     | Para desativar o Serviço Remoto SMS, responda com o código.<br/>Lembre-se de que você só poderá reativá-lo diretamente<br/>no smartphone principal com **AAPS**.                                                                                                  |
| HELP             | Não     | Retorna todas as funções que podem ser consultadas:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Envie depois o comando ***HELP ***FUNÇÃO****** para listar<br/>todas as opções disponíveis nesta seção. |
| HELP BOLUS       |         | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                                          |

(SMSCommands-troubleshooting)=
## Resolução de problemas e perguntas frequentes

```{contents} List of questions and issues
:depth: 1
:local: true
```

### O que _não_ podemos fazer com os comandos SMS?

1)  **Você não pode definir uma troca de perfil _temporária_** (por exemplo, definir "profile exercise" por 60 minutos), mas pode trocar permanentemente para “profile exercise”. Em vez disso, as trocas de perfil temporárias podem ser feitas pelo **AAPSClient**.

2)  **Você não pode cancelar automações** nem **definir alvos personalizados**, mas há soluções aproximadas: Como exemplo, imagine que o alvo normal do perfil é 5,5. Você criou uma automação no AAPS para sempre definir um alvo alto de 7,0 entre 14h30 e 15h30, por causa de uma aula de esporte na escola, e uma condição da automação é que “não exista alvo temporário”. Nesta semana, você foi avisado em cima da hora que a aula de esporte foi cancelada e substituída por uma sessão de pizza, mas o seu filho já está na escola com o telefone com **AAPS**. Se o alvo temporário alto de 7,0 for iniciado pela automação e você o cancelar (no telefone com **AAPS** ou a distância), as condições da automação ainda são atendidas e o **AAPS** simplesmente vai definir o alvo alto de novo um minuto depois.

**Se você tivesse acesso ao telefone com AAPS**, poderia desmarcar/alterar a automação ou, se não quiser fazer isso, poderia simplesmente definir um novo alvo temporário de 5,6 por 60 min tocando no alvo na tela principal, ou por **Gerenciar** → **Alvo temporário**. Isso impediria a automação de definir o alvo alto de 7,0.

**Se você não tem acesso ao telefone com AAPS**, os comandos SMS podem ser usados para uma solução aproximada: por exemplo, com o comando “target meal” para definir um alvo de 5,0 por 45 min (os outros alvos padrão são 8,0 para atividade ou hipoglicemia, veja a tabela). Mas, com os comandos SMS, você não pode indicar um valor de alvo _específico_ (de 5,6 por 60 minutos, por exemplo); para isso, você precisaria usar o **AAPSClient**.

### O que acontece se eu mudar de ideia sobre um comando que acabei de enviar?

O **AAPS** só executa o comando mais recente. Então, se você digitar “bolus 1.5” e depois, sem autenticar, enviar um novo comando “bolus 1”, ele vai ignorar o comando anterior de 1,5. O **AAPS** sempre envia ao telefone do cuidador uma resposta para confirmar qual é o comando SMS antes de pedir o código de autenticação, e também uma resposta depois da ação.

### Por que não recebi resposta a um comando SMS?

Pode ser por um destes motivos:

1)  A mensagem não chegou ao telefone (problemas de rede). 2)  O **AAPS** ainda está processando o pedido (_por exemplo,_ um bólus, que pode levar algum tempo para ser aplicado, dependendo da sua velocidade de bólus). 3)  O telefone com **AAPS** não tem uma boa conexão Bluetooth com a bomba quando o comando chega, e o comando falhou (isso normalmente gera um alarme no telefone com **AAPS**).

### Nenhuma resposta aos comandos SMS

No telefone do cuidador e/ou no telefone com **AAPS**, tente desativar as seguintes opções:
* **Send as chat message** (Enviar como mensagem de chat) ![Desativar o envio de SMS como mensagem de chat](../images/SMSdisableChat.png)
* Se você usa o app Android Messages ou o Google Messages, desative as mensagens RCS:
  - abra a conversa de SMS específica no app Mensagens
  - Selecione o menu de opções (três pontos) no canto superior direito
  - selecione "Details" (Detalhes)
  - Ative "Only send SMS and MMS messages" (Enviar apenas mensagens SMS e MMS) ![Desative o RCS como mensagem de chat](../images/SMSdisableRCS.png)

### Erros ao executar comandos

Há vários motivos possíveis para o comando não dar certo:

* A configuração dos comandos SMS não está completa/correta
* Você enviou um comando com formato errado (como “disconnect pump 45” em vez de “pump disconnect 45”)
* Você usou um código do autenticador errado ou expirado (normalmente é bom esperar alguns segundos por um código novo, se o atual estiver para expirar)
* O código+PIN estava certo, mas houve um atraso no envio/chegada do SMS, e por isso o **AAPS** calculou que o código do autenticador tinha expirado
* O telefone com **AAPS** está fora do alcance/sem contato com a bomba
* O sistema já está ocupado aplicando um bólus

Os erros comuns são mostrados nos exemplos abaixo:

![imagem](../images/remote-control-17.png)

### Como posso parar um comando depois que ele foi autenticado?

Você não pode. Mas você pode cancelar um bólus enviado por SMS no próprio telefone com **AAPS**, simplesmente cancelando-o na janela de bólus, se for rápido. Muitos comandos SMS (exceto bólus e informação de carboidratos) podem ser facilmente desfeitos, ou você pode agir para diminuir os efeitos indesejados se cometer um erro.

Para erros em bólus e na informação de carboidratos, você ainda pode agir. Por exemplo, se você informou 20 g de carboidratos, mas o seu filho só come 10 g, e você (ou um cuidador presente) não consegue apagar o tratamento diretamente no telefone com **AAPS**, você pode definir um alvo temporário alto ou um perfil reduzido, para fazer o **AAPS** ficar menos agressivo.

### Vários SMS

Se você receber a mesma mensagem várias vezes (_por exemplo,_ uma troca de perfil), pode ter criado sem querer um ciclo com outros apps. Pode ser o xDrip, por exemplo. Se for o caso, verifique se o xDrip (ou qualquer outro app) não envia tratamentos ao Nightscout.

Se o outro app estiver instalado em vários telefones, desative o envio em todos eles.

(sms-commands-too-many-messages)=
### Estou recebendo mensagens de texto demais dos comandos SMS. Posso diminuir a frequência ou fazer elas pararem?

Usar comandos SMS pode gerar muitas mensagens automáticas do telefone com **AAPS** para o telefone do cuidador. Você também vai receber mensagens, por exemplo “Perfil Basal atualizado na bomba”, se tiver automações configuradas no **AAPS**. Pode ser útil ter SMS ilimitado no plano do telefone com **AAPS** (e de cada telefone de cuidador usado) se muitos SMS forem enviados, e desativar as notificações, alarmes ou vibrações de SMS em todos os telefones. Não é possível usar comandos SMS e não receber essas atualizações. Por isso, talvez você queira outra forma de se comunicar diretamente com o seu filho (se ele tiver idade suficiente), em vez de SMS. Apps de comunicação alternativos comuns usados pelos cuidadores do **AAPS** incluem Whatsapp, Lime, Telegram e Facebook Messenger.

É possível desativar o SMS "Profile changed" (perfil alterado), quando a troca de perfil veio do Nightscout. Para isso, crie um arquivo com o nome **exatamente**  `do_not_send_sms_on_profile_change` na pasta `extra` do seu Diretório do AAPS.
