Monitorização remota
**************************************************

.. imagem: ../images/KidsMonitoring.png
  :alt: Monitorizando crianças
  
AndroidAPS oferece várias opções para monitorização remota de crianças e também permite enviar comandos remotos. É claro que também é possível usar a monitorização remota para seguir o seu parceiro ou amigo.

Funções
==================================================
* A bomba da criança é controlada pelo telefone da criança usando o AndroidAPS.
* Os pais podem seguir remotamente vendo todos os dados relevantes, como níveis de glicemia (BG), hidratos de carbono ativos (COB), insulina ativa (IOB), etc. utilizando **app NSClient** no seu telefone. Settings must be the same in AndroidAPS and NSClient app.
* Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see `release notes for Version 2.8.1.1 <https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for further details.

Ferramentas e aplicativos para monitorização remota
==================================================
* `Nightscout <http://www.nightscout.info/>`_ no navegador da web (principalmente de visualização de dados)
*	NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  `NSClient & NSClient2 to download <https://github.com/nightscout/AndroidAPS/releases/>`_. The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
* O Dexcom Follow se estiver a usar a app original da Dexcom (apenas valores BG)
*	`xDrip+ <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Considerações a ter
==================================================
* Definir os rácios corretos <../Getting-Started/FAQ.html#como começar>`_ (Basal, Fator de Sensibilidade...) é difícil nas crianças, especialmente na fase das hormonas de crescimento. 
* Settings must be the same in AndroidAPS and NSClient app.
* Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
* Vai ser necessário algum tempo para configurar e confirmar os rácios corretamente, sempre próximo da criança, antes de iniciar a monitorização e tratamento remoto. As férias escolares podem ser uma boa ocasião para isso.
* Qual é o seu plano de emergência para quando o controle remoto não funcionar (ex. problemas de rede)?
* A monitorização e o tratamento remoto podem ser muito úteis entre o infantário e o ensino básico. Mas certifique-se de que os professores e educadores estão a par do plano de tratamento da sua criança. Exemplos de tais planos podem ser encontrados nos arquivos do AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ no Facebook.
