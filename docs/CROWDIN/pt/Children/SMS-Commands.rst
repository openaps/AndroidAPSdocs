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
   * Resposta: Para parar a basal temporária responda com o código EmF [Nota: o código EmF é apenas um exemplo]
* BASAL 0.3
   * Resposta: Para iniciar a basal 0.3U/h por 30 min responda com o código Swe
* BASAL 0.3 20
   * Resposta: Para iniciar basal 0.3U/h por 20 minutos responda com o código Swe
* BASAL 30%
   * Resposta: Para iniciar a basal 30% por 30 min responda com o código Swe
* BASAL 30% 50
   * Resposta: Para iniciar a basal 30U/h por 50 minutos responda com o código Swe

Bólus
--------------------------------------------------
Bolus remoto não permitido durante 15 min após último comando bolus ou outros comandos remotos! Portanto, a resposta depende da altura em que foi dado o último bolus.

* BOLUS 1.2
   * Resposta A: Para dar bolus de 1.2U responda com código Rrt
   * Resposta B: Bolus remoto não disponível. Volte a tentar mais tarde.
* BOLUS 0.60 MEAL
   * Se você especificar o parâmetro opcional MEAL (Refeição), este configura um objetivo temporário para Refeições (os valores padrão são: 90 mg/dL, 5,0 mmol / l para 45 mins).
   * Resposta A: Para dar bolus de 0.60U responda com código Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Resposta: Para inserir 5g às 12:45 responda com código EmF
(Nota 12:45 são as horas de envio da mensagem)
* CARBS 5 17:35/5:35PM
   * Resposta: Para inserir 5g às 17:35 responda com código EmF
* EXTENDED STOP/CANCEL
   * Resposta: Para parar o bolus estendido responda com código EmF
* EXTENDED 2 120
   * Resposta: Para iniciar o bolus estendido 2U para 120 min resposta com código EmF

Profile
--------------------------------------------------
* PROFILE STATUS
   * Resposta: Perfil1
* PROFILE LIST
   * Resposta: 1.`Perfil1` 2.`Perfil2`
* PROFILE 1
   * Resposta: Para mudar o perfil para Perfil1 100% responda com código Any
* PROFILE 2 30
   * Resposta: Para mudar o perfil para Perfil2 30% responda com código Any

Outro
--------------------------------------------------
* TREATMENTS REFRESH
   * Resposta: Atualizar tratamentos do NS
* NSCLIENT RESTART
   * Resposta: NSCLIENT REINICIAR 1 receptores
* BOMBA
   * Resposta: Última ligação: 1 min atrás Temp: 0.00 U/h @11:38 5/30min IOB: 0.5 U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Resposta: Para desativar o Serviço de Comandos SMS responda com código Any. Atenção que apenas o poderá reativar somente a partir do telemóvel que corre o AAPS.
* TARGET MEAL/ACTIVITY/HYPO   
   * Resposta: Para definir os objetivos temporários para REFEIÇÃO/ATIVIDADE/HYPO responda com o código Any
* TARGET STOP/CANCEL   
   * Resposta: Cancelar o objetivo Temp responder com código Any
* HELP
   * Resposta: GLICEMIA, LOOP, TRATAMENTOS,.....
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
