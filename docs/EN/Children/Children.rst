Remote monitoring
******************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitoring children
  
There for severval different methods to remotely monitor AndroidAPS and/or  blood glucose levels of children, a partner or even a friend. The ability to send commands remotely, esp to children, is possible with AndroidAPS.

Methodology
=========
* A child's pump is locally controlled by AndroidAPS, that has been installed on the child's Android phone.
* A parent/carer can remotely follow the child's AndroidAPS app using the **NSClient app** on their phone.
* **NSClient app** allows the visulization of glucose levels, carbs on bard (COB), insulin on board (IOB), temporary targets, basal rates, etc of AdroidAPS, lacking only in the controlling of the pump.
* Remote profile switch and temp targets can be done through **NSClient app**.
* Remote control of AndroidAPS on the child's phone using `SMS Commands <../Usage/SMS-Commands.html>`_ is possible.
* A parent/carer can be alarmed by using **xDrip app in follower mode** on their Android phone.


Other Tools and Apps for Partial Monitoring(other than NSClient app)
------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ in web browser (mainly data display)
*	Dexcom Follow app if you are using the original Dexcom app on iPhone or Android (BG values and limited alarms)
*	`xDrip <../Configuration/xdrip.html>`_ in follower mode on Android (mainly BG values and **alarms**) 
*	`Spike <https://spike-app.com/>`_ on iPhone (mainly BG values and **alarms**)
* Dexcom Follow app can also be used from xDrip+ (xDrip+, Settings, Cloud Upload, Dexcom Share Server Upload, check Upload BG values as Dexcom Share, enter login for Dexcom Account login, enter Dexcom Account Password). This option will allow a larger number of followers from Dexcom follow. However please consider XDrip+ in a follower mode for android or Spike on iPhone as alternatives.

Things to consider
==================
* Setting the correct `treatment factors <../Getting-Started/FAQ.html#how-to-begin>`_ (basal rate, DIA, ISF...) is difficult for children, especially when growth hormones are involved. 
* So take your time to set those correctly and test them in real life with your child next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
* What is your emergency plan when remote control does not work (i.e. network problems)?
* Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the `files section of AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ on Facebook.
