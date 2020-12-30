Comandos SMS
**************************************************
Segurança Em Primeiro Lugar
==================================================
* O AndroidAPS permite que você controle um telefone remotamente através de SMS. Se os comandos por SMS estiverem ativos, lembre-se sempre de que o telemóvel configurado para estes comandos remotos pode ser roubado. Então, proteja-o sempre pelo menos através de um código PIN. A strong password or biometrics are recommended.
* Additionally it is recommended to allow a `second phone number <#authorized-phone-numbers>`_ for SMS commands. So you can use second number to `temporary disable <#other>`_ SMS communicator in case your main remote phone gets lost or stolen.
* O AndroidAPS responderá com uma mensagem de texto se os comandos remotos - como um bolus ou uma mudança de perfil - foram corretamente realizados.0//0. É aconselhável ao configurar que textos sejam enviados para, pelo menos, dois números de telefone distintos, para o caso de um dos telefones ser roubado.
* ** Se o bolus for realizado através de Comandos SMS os hidratos de carbono (carbs) devem ser introduzidos através do Nightscout (NSClient, Website ...)! ** Se não o fizer a insulina ativa (IOB) seria correlacionada com hidratos restantes (COB) muito baixos, podendo levar o AAPS a não realizar um bolus de correção por assumir que insulina ativa (IOB) está demasiado elevada.
* As of AndroidAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.

Setup SMS commands
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: Configuração de Comandos SMS
      
* A maioria dos ajustes de alvos temporários, de acordo com AAPS etc. can be done on `NSClient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Os Bólus não podem ser enviados através do Nightscout, mas pode usar comandos SMS.
* If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.

* Na configuração do seu smartphone Android vá a: Aplicações > AndroidAPS > Permissões e habilite SMS

Authorized phone numbers
-------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +6412345678;+6412345679) 
* Enable 'Allow remote commands via SMS'.
* Se quiser usar mais de um número:

  * Insira inicialmente apenas um número.
  * Teste o número enviando e confirmando um comando SMS.
  * Insira o(s) número(s) adicional(es) separados por ponto e vírgula, sem espaço.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS Commands Setup multiple numbers

Minutes between bolus commands
-------------------------------------------------
* You can define the minimum delay between two boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
-------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* PIN rules:

   * 3 to 6 digits
   * not same digits (i.e. 1111)
   * not in a row (i.e. 1234)

Authenticator setup
-------------------------------------------------
* Two-factor authentication is used to improve safety.
* You can use any Authenticator app that supports RFC 6238 TOTP tokens. Popular free apps are:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Install the authenticator app of your choice on your follower phone and scan the QR code shown in AAPS.
* Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Example:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020
   
* The red text "WRONG PIN" will change **automatically** to a green "OK" if the entry is correct. **There is no button you can press!**
* The time on both phones must be synchronized. Best practice is set automatically from network. Time differences might lead to authentication problems.
* Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again)

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands <../Children/SMS-Commands.html#commands>`_ below. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Example:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020

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
