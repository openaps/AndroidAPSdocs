Careportal (discontinued)
*******************************
Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records. But careportal did not issue any commands to the pump! So, if a bolus was added using this screen it simply made a note of this on your Nightscout record, the pump wasn’t instructed to deliver a bolus. This led to a lot of misunderstandings.

The code originally used to add offline support for careportal did not harmonize with the development of AAPS and was really blocking further coding. **Therefore, decision was made to remove careportal in AAPS version 2.6.**

Most functions of careportal can still be found either in actions or the start screen. The actions can be reached either via actions tab or hamburger menu - depending on your settings in `config builder <../Configuration/Config-Builder.html>`_.

This page will show where you can find the functions previously available in careportal.

Activity & feedback
==============================
.. image:: ../images/Careportal_25_26_1_IIb.png
  :alt: Careportal activity & feedback
  
* Age information was moved to actions tab / menu.
* BG check was moved to actions tab / menu.
* Temporary target was moved to actions tab / menu.
* Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section `carbs & bolus <#id1>`_ on this page).

Carbs & bolus
==============================
.. image:: ../images/Careportal_25_26_2_IIa.png
  :alt: Careportal carbs & bolus
  
* To note a bolus - no matter if for snack, meal or correction - use the insulin button on the homescreen **and make sure to tick "Do not bolus, record only"!**
* Option to backdate insulin - i.e. if you forgot to register insulin given by syringe - will only be available if checkbox "Do not bolus, record only" is ticked.

   .. image:: ../images/Careportal_25_26_5.png
     :alt: Backdate insulin via insulin button

* For carbs correction use the carbs button on the homescreen.
* Temporary basal rates can be started and stopped through the button in actions tab / menu. Please note that the button changes from "TEMPBASAL" to "CANCEL x%" when a temporary basal rate is set.

CGM & OpenAPS
==============================
.. image:: ../images/Careportal_25_26_3_IIa.png
  :alt: Careportal CGM & OpenAPS
  
* CGM sensor insert can now be found in the actions tab / menu.
* All other functions from this section have been removed. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section `carbs & bolus <#carbs-bolus>`_ on this page).

펌프
==============================
.. image:: ../images/Careportal_25_26_4_IIb.png
  :alt: Careportal Pump

* Pump site and insulin cartridge change can be reach by using the button "prime/fill" in actions tab / menu.
* Profile switch was moved to actions tab / menu.
* Pump battery change was moved to actions tab / menu.
