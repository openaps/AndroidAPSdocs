Objetivos
**************************************************

A AndroidAPS possui uma série de objetivos que precisam ser completados para o encaminhar pelos recursos e configurações de um loop seguro.  Eles garantem que configurou corretamente tudo o que foi detalhado nas seções acima e que entende o que o seu sistema está a fazer e por que assim pode confiar nele.

Se está **a mudar de telemóvel**, então pode `exportar as suas configurações <../Usage/ExportImportSettings.html>`_ para manter o seu progresso através dos objetivos. Não será só o seu progresso através dos objetivos que será salvo, mas também as suas configurações de segurança como o bólus máximo, etc.  Se não exportar e importar as suas configurações então irá precisar de iniciar os objetivos desde o primeiro.  É uma boa ideia fazer o `backup das suas configurações <../Usage/ExportImportSettings.html> ` _ frequentemente precavendo-se.

Se quiser voltar atrás nos objetivos, veja `abaixo como fazê-lo <../Usage/Objectives.html#go-back-in-objectives>`_.
 
Objetivo 1: Configurar a visualização e monitorização, analisando basais e rácios
====================================================================================================
* Selecione na configuração a fonte de glicose no sangue correta.  See `BG Source <../Configuration/BG-Source.html>`_ for more information.
* Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.  
* If using DanaR pump then ensure you have followed `DanaR Insulin Pump <../Configuration/DanaR-Insulin-Pump.html>`_ instructions to ensure the link between pump and AndroidAPS.
* Follow instructions in `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ page to ensure Nightscout can receive and display this data.
* Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see `NSClient settings in Preferences <../Configuration/Preferences.html#nsclient>`__.

*Pode ser necessário esperar que a próxima leitura de glicose no sangue chegue antes da AndroidAPS a reconhecer.*

Objetivo 2: Aprenda a controlar a AndroidAPS
==================================================
* Perform several actions in AndroidAPS as described in this objective.
* Clique no texto laranja "Não concluído ainda" para aceder ao que é para fazer.
* Links will be provided to guide you in case you are not familiar with a specific action yet.

  .. imagem:: ../images/Objective2_V2_5.png
    :alt: Captura de ecrã do Objetivo 2  

Objetivo 3: Prove o seu conhecimento
==================================================
* Passe um teste de escolha múltipla testando o seu conhecimento da AndroidAPS.
* Click on the orange text "Not completed yet" to access the page with the question and answering options.

  .. imagem:: ../images/Objective2_V2_5.png
    :alt: Captura de ecrã do Objetivo 3

* Serão fornecidos links para guiá-lo caso ainda não tenha a certeza sobre as respostas corretas.
* As perguntas para o objetivo 3 foram completamente reescritas por falantes nativos a partir da AAPS 2.8. Os novos cobrem os mesmos tópicos básicos e mais alguns novos.
* Estas novas perguntas levarão a algumas perguntas não respondidas mesmo tendo concluído com sucesso o objetivo 3 em versões anteriores.
* perguntas não respondidas só o afetarão se iniciar um novo objetivo. Por outras palavras: Se já completou todos os objetivos, pode esperar e responder às novas perguntas mais tarde, sem perder as funções da AAPS.

Objective 4: Starting on an open loop
==================================================
* Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
* Work through the `Preferences <../Configuration/Preferences.html>`__ to set up for you.
* Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Ensure this data shows in AndroidAPS and Nightscout.
* Enable `temp targets <../Usage/temptarget.html>`_ if necessary. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo. 

Reduce number of notifications
--------------------------------------------------
* To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.
* You might even want to wider upper limit (or disable Open Loop) at night. 
* In Preferences you can set a minimum percentage for suggestion of basal rate change.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Open Loop minimal request change
     
* Also, you do not need to act every 5 minutes on all suggestions...

Objective 5: Understanding your open loop, including its temp basal recommendations
====================================================================================================
* Start to understand the thinking behind the temp basal recommendations by looking at the `determine basal logic <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ and both the `forecast line in AndroidAPS homescreen <../Getting-Started/Screenshots.html#prediction-lines>`_/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
 
You will want to set your target higher than usual until you are confident in the calculations and settings.  System allows

* a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl) 
* a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
* a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

The target is the value that calculations are based on, and not the same as where you aim to keep your blood glucose values within.  If your target is very wide (say, 3 or more mmol [50 mg/dl or more] wide), you will often find little AAPS action. This is because blood glucose is eventually predicted to be somewhere in that wide range and therefore not many fluctuating temporary basal rates are suggested. 

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol [20 mg/dl or less] wide) and observe how the behavior of your system changes as a result.  

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in `Preferences <../Configuration/Preferences.html>`__ > Range for Visualisation.
 
.. image:: ../images/sign_stop.png
  :alt: Stop sign

Stop here if you are open looping with a virtual pump - do not click Verify at the end of this objective.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: blank

Objective 6: Starting to close the loop with Low Glucose Suspend
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Warning sign
  
Closed loop will not correct high bg values in objective 6 as it is limited to low glucose suspend. High bg values have to be corrected manually by you!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Select Closed Loop either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Open Loop button in the top left of the home screen.
* Set your target range slightly higher than you usually aim for, just to be safe.
* Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
* You don't have to change your settings. During objective 6 maxIOB setting is internally set to zero automatically. This override will be reversed when moving to objective 7.
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  

  .. image:: ../images/Objective6_negIOB.png
    :alt: Example negative IOB

* If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.
* You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.

Objective 7: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets
====================================================================================================
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  This recommendation should be seen as a starting point. If you set to the 3x and you are seeing moves that push you to hard and fast then lower that number. If you are very resistant raise it a very little at a time.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: max daily basal

* Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.


Objective 8: Adjust basals and ratios if needed, and then enable autosens
====================================================================================================
* You can use `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ as a one off to check your basals remain accurate or do a traditional basal test.
* Enable `autosens <../Usage/Open-APS-features.html>`_ over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* `this form <https://bit.ly/nowlooping>`_ *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*


Objective 9: Try additional features for daytime use and gain confidence in your closed loop system
====================================================================================================
* Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`__.
* As `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`__ is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.


Objective 10: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)
====================================================================================================
* You must read the `SMB chapter in this wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ and `chapter oref1 in openAPSdocs <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ to understand how SMB works, especially what's the idea behind zero-temping.
* Then you ought to `rise maxIOB <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see `objective 7 <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_ for an illustration)
* min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually.


Objective 11: Automation
====================================================================================================
* You have to start objective 11 to be able to use `Automation <../Usage/Automation.html>`_.
* Make sure you have completed all objectives including exam `<../Usage/Objectives.html#objective-3-prove-your-knowledge>`_.
* Completing previous objectives will not effect other objectives you have already finished. You will keep all finished objectives!


Go back in objectives
====================================================================================================
If you want to go back in objectives for whatever reason you can do so by clicking at "clear finished".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Go back in objectives
