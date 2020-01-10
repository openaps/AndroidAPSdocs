Careportal (discontinued)
*******************************
Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records. But careportal did not issue any commands to the pump! So if a bolus was added using this screen it simply made a note of this on your Nightscout record, the pump wasn’t instructed to deliver a bolus. This led to a lot of misunderstandings.

The code originally used to add offline support for careportal did not harmonize with the development of AAPS and was really bloking further coding. **Therefore decision was made to remove careportal in AAPS version 2.6.**

Most functions of careportal can still be found either in actions or the start screen. The actions can be reached either via actions tab or hamburger menu - depending on your settings in `config builder <../Configuration/Config-Builder.html>`_.

This page will show where you can find the functions previously available in careportal.

Activity & feedback
==============================
.. image:: ../images/Careportal_25_26_1.png
  :alt: Careportal activity & feedback
  
* Age information was moved to actions tab / menu.
* BG check was moved to actions tab / menu.
* Temporary target was moved to actions tab / menu.
* Excercise is no longer available but you can use the note field in the dialogue box when performing an action like giving bolus etc.
