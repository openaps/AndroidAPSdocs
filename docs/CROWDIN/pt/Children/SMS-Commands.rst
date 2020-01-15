Comandos SMS
**************************************************
Segurança Em Primeiro Lugar
==================================================
* O AndroidAPS permite que você controle um telefone remotamente através de SMS. Se os comandos por SMS estiverem ativos, lembre-se sempre de que o telemóvel configurado para estes comandos remotos pode ser roubado. Então, proteja-o sempre pelo menos através de um código PIN.
* O AndroidAPS responderá com uma mensagem de texto se os comandos remotos - como um bolus ou uma mudança de perfil - foram corretamente realizados.0//0. É aconselhável ao configurar que textos sejam enviados para, pelo menos, dois números de telefone distintos, para o caso de um dos telefones ser roubado.
* ** Se o bolus for realizado através de Comandos SMS os hidratos de carbono (carbs) devem ser introduzidos através do Nightscout (NSClient, Website ...)! ** Se não o fizer a insulina ativa (IOB) seria correlacionada com hidratos restantes (COB) muito baixos, podendo levar o AAPS a não realizar um bolus de correção por assumir que insulina ativa (IOB) está demasiado elevada.

Como funciona
==================================================
* A maioria dos ajustes de alvos temporários, de acordo com AAPS etc. pode ser feito na ` app NSclient <../Children/Children.html> ` _ num telefone Android com ligação à internet.
* Os Bólus não podem ser enviados através do Nightscout, mas pode usar comandos SMS.
* Se utiliza um iPhone como seguidor não conseguirá utilizar o NSclient.Temcomandos adicionais de SMS disponíveis.

* Na configuração do seu smartphone Android vá a: Aplicações > AndroidAPS > Permissões e habilite SMS
* No AndroidAPS vá a Preferências> Comunicador de SMS e introduza o numero de telefone que quer permitir que envie os comandos SMS .
* Se quiser usar mais de um número:

  * Insira inicialmente apenas um número.
  * Teste o número enviando e confirmando um comando SMS.
  * Insira o(s) número(s) adicional(es) separados por ponto e vírgula, sem espaço.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup


* Envie um SMS para o telemóvel com o AndroidAPS a partir do seu número de telefone(s) aprovado, usando qualquer um dos comandos abaixo, o telemóvel responderá com uma SMS para confirmar o sucesso do comando ou status solicitado. Confirme o comando enviando uma SMS com código enviado do smartphone com o AAPS (quando pedido).

**Dica**: Pode ser útil ter SMS ilimitados em ambos os telefones se um número elevado de SMS for enviado.

Comandos
==================================================

É indiferente enviar os comandos em maiúsculas ou minúsculas.

Os comandos têm de ser enviados em inglês, a resposta será no idioma selecionado se a tradução já tiver sido realizada <../traduções.html#traduzir-cordas-de-androidaps-app>`_.

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
   * Resposta: Para enviar calibração 5,6 responda com Rrt
   * Resposta após o código correto ter sido recebido: Calibração enviada (**Se xDrip estiver instalado. Aceitar calibração deve estar habilitado no xDrip+**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code EmF [Note: Code EmF is just an example]
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code Swe
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code Swe
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code Swe
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code Swe

Bólus
--------------------------------------------------
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Perfil
--------------------------------------------------
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Outro
--------------------------------------------------
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* BOMBA
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Resolução de Problemas
==================================================
Multiple SMS
--------------------------------------------------
If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not uploads treatments to NS. 

If the other app is installed on multiple phones make sure to deactive upload on all of them.

SMS commands not working on Samsung phones
--------------------------------------------------
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
