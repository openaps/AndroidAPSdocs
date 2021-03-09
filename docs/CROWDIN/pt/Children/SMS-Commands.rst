Comandos SMS
**************************************************
Segurança Em Primeiro Lugar
==================================================
* O AndroidAPS permite que você controle um telefone remotamente através de SMS. Se os comandos por SMS estiverem ativos, lembre-se sempre de que o telemóvel configurado para estes comandos remotos pode ser roubado. Então, proteja-o sempre pelo menos através de um código PIN. Uma palavra-passe forte ou dados biométricos são recomendados.
* Adicionalmente é recomendado permitir um `segundo número de telefone<#authorized-phone-numbers>`_ para comandos SMS. Assim pode usar o segundo número para ` desativar temporariamente <#other> ` _ comunicador de SMS caso perca, ou seja roubado, o seu telefone remoto principal.
* O AndroidAPS responderá com uma mensagem de texto se os comandos remotos - como um bólus ou uma mudança de perfil - foram corretamente realizados.0//0. É aconselhável ao configurar que textos sejam enviados para, pelo menos, dois números de telefone distintos, para o caso de um dos telefones ser roubado.
* ** Se o bólus for realizado através de Comandos SMS os hidratos de carbono (carbs) devem ser introduzidos através do Nightscout (NSClient, Website ...)! ** Se não o fizer a insulina ativa (IOB) seria correlacionada com hidratos restantes (COB) muito baixos, podendo levar o AAPS a não realizar um bólus de correção por assumir que insulina ativa (IOB) está demasiado elevada.
* A partir da AndroidAPS versão 2.7 é necessária uma aplicação autenticadora com uma senha de utilização única usada para aumentar a segurança ao usar os comandos SMS.

Configuração dos comandos SMS
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: Configuração de Comandos SMS
      
* A maioria dos ajustes de alvos temporários, de acordo com a AAPS etc. pode ser feita na app "NSClient  <.../Children/Children.html>` num telemóvel Android com conexão à Internet.
* Os Bólus não podem ser enviados através do Nightscout, mas podem usar comandos SMS.
* Se usa um iPhone como seguidor não conseguirá utilizar o NSClient. Existem comandos de SMS adicionais disponíveis.

* Na configuração do seu smartphone Android vá a: Aplicações > AndroidAPS > Permissões e habilite SMS

Números de telefones autorizados
-------------------------------------------------
* No AndroidAPS vá a Preferências> Comunicador SMS e introduza os números de telefone que quer permitir que enviem os comandos SMS (separados por vírgulas, por ex. +351123456789; +351123456789) 
* Ative Permitir comandos remotos via SMS'.
* Se quiser usar mais de um número:

  * Insira inicialmente apenas um número.
  * Teste o número enviando e confirmando um comando SMS.
  * Insira o(s) número(s) adicional(is) separados por ponto e vírgula, sem espaço.
  
    .. imagem: ../images/SMSCommandsSetupSpace2.png
      :alt: Configuração de Comandos de SMS com múltiplos números

Minutos entre comandos de bólus
-------------------------------------------------
* Pode definir tempo mínimo entre dois bólus emitidos via SMS.
* Por razões de segurança tem de adicionar pelo menos dois números de telefone autorizados para editar este valor.

Adicionalmente um PIN obrigatório no final do token
-------------------------------------------------
* Por razões de segurança o código de resposta deve ser seguido por um PIN.
* Regras do PIN:

  * 3 a 6 dígitos
  * sem ser dígitos iguais (ou seja, 1111)
  * não em sequência (ou seja, 1234)

Configuração do Autenticador
-------------------------------------------------
* A autenticação de dois fatores é usada para melhorar a segurança.
* Pode usar qualquer aplicativo de autenticação que suporte tokens TOTP RFC 6238. Aplicações populares e gratuitas são, por exemplo:

  * `Authy <https://authy.com/download/>`_
  * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
  * `LastPass Authenticator <https://lastpass.com/auth/>`_
  * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Instale a app de autenticação que escolher no seu telemóvel de seguidor e digitalize o código QR mostrado na AAPS.
* Teste a senha única inserindo o token mostrado na sua app de autenticação e o PIN que definiu na AAPS. Exemplo:

  * O seu PIN obrigatório é 2020
  * TOTP token da app de autenticação é 457051
  * Digite 4570512020
   
* O texto vermelho "WRONG PIN" mudará ** automaticamente** para um "OK" verde, se a entrada estiver correta. **Não há nenhum botão para pressionar! **
* The time on both phones must be synchronized. Best practice is set automatically from network. Time differences might lead to authentication problems.
* Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again)

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands <../Children/SMS-Commands.html#commands>`__ below. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Example:

  * O seu PIN obrigatório é 2020
  * TOTP token da app de autenticação é 457051
  * Digite 4570512020

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

Comandos
==================================================
Commands must be sent in English, the response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: Exemplo de comandos SMS

Loop
--------------------------------------------------
* LOOP STOP/DISABLE
  * Resposta: Loop foi desativado
* LOOP START/ENABLE
  * Resposta: Loop foi ativado
* LOOP STATUS

  * Resposta depende do status atual

    * Loop desactivado
    * Loop activado
    * Suspenso (10 min)
* LOOP SUSPEND 20
  * Resposta: Loop suspenso por 20 minutes
* LOOP RESUME
  * Resposta: Loop foi retomado

Dados do CGM (Monitor Contínuo de Glicemia)
--------------------------------------------------
* GLIC
  * Resposta: Última BG: 5,6 há 4 min, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
  * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
  * Resposta após o código correto ter sido recebido: Calibração enviada (**Se xDrip estiver instalado. Aceitar calibração deve estar habilitado no xDrip+**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
  * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
  * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
  * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
  * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
  * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bólus
--------------------------------------------------
Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

* BOLUS 1.2
  * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
  * Resposta B: Bolus remoto não disponível. Volte a tentar mais tarde.
* BOLUS 0.60 MEAL
  * Se você especificar o parâmetro opcional MEAL (Refeição), este configura um objetivo temporário para Refeições (os valores padrão são: 90 mg/dL, 5,0 mmol / l para 45 mins).
  * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
  * Resposta B: Bolus remoto não disponível. 
* CARBS 5
  * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
  * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
  * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
  * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Perfil
--------------------------------------------------
* PROFILE STATUS
  * Resposta: Perfil1
* PROFILE LIST
  * Resposta: 1.`Perfil1` 2.`Perfil2`
* PROFILE 1
  * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
  * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Outro
--------------------------------------------------
* TREATMENTS REFRESH
  * Resposta: Atualizar tratamentos do NS
* NSCLIENT RESTART
  * Resposta: NSCLIENT REINICIAR 1 receptores
* BOMBA
  * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
  * Response: Pump reconnected
* PUMP DISCONNECT *30*
  * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
  * Resposta: Para desativar o Serviço de Comandos SMS responda com código Any. Atenção que apenas o poderá reativar somente a partir do telemóvel que corre o AAPS.
* TARGET MEAL/ACTIVITY/HYPO   
  * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
  * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
  * Resposta: GLICEMIA, LOOP, TRATAMENTOS,.....
* HELP BOLUS
  * Resposta: BOLUS 1.2 BOLUS 1.2 REFEIÇÃO

Resolução de Problemas
==================================================
Múltiplos SMS
--------------------------------------------------
Caso receba repetidamente a mesma mensagem, provavelmente foi configurada um circulo entre aplicações. Como por exemplo o xDrip+, If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

Problemas com comandos SMS em telemóveis Samsung
--------------------------------------------------
Uma atualização ao Samsung S10 em alguns casos provocou erros com os Comandos SMS. Could be solved by disabling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Desativar o SMS como mensagens de chat
