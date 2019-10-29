Καλώς ήρθατε στην τεκμηρίωση AndroidAPS
==============================================

AndroidAPS είναι ένα open source εφαρμογή για τους ανθρώπους που ζουν με ινσουλίνο-εξαρτώμενο διαβήτη, η οποία ενεργεί ως ένα τεχνητό πάγκρεας system (APS) σε Google Android smartphones. Τα κύρια συστατικά είναι διαφορετικοί αλγόριθμοι λογισμικού openAPS που στοχεύουν να κάνουν ό, τι κάνει το ζωντανό πάγκρεας: διατηρώντας τα επίπεδα του σακχάρου στο αίμα μέσα σε υγιή όρια χρησιμοποιώντας αυτοματοποιημένη δοσολογία ινσουλίνης (AID). Επιπλέον, χρειάζεστε τουλάχιστον μια υποστηριζόμενη από την FDA / CE εγκεκριμένη αντλία ινσουλίνης και έναν συνεχή μετρητή γλυκόζης. Η εφαρμογή ΔΕΝ χρησιμοποιεί αυτο-μάθηση στην τεχνητή νοημοσύνη. Αντ 'αυτού, οι υπολογισμοί του AndroidAPS βασίζονται στον ατομικό αλγόριθμο δοσολογίας και την πρόσληψη υδατανθράκων που ο χρήστης θέτει χειροκίνητα στο προφίλ θεραπείας του, αλλά επαληθεύονται από το σύστημα για λόγους ασφαλείας. Η εφαρμογή δεν παρέχεται στο Google Play - πρέπει να το κατασκευάσετε από τον πηγαίο κώδικα μόνοι σας για νομικούς λόγους.

Κύρια συστατικά είναι:

.. εικόνα::../images/modules-female.png
  :alt: Συστατικά

Για περισσότερες λεπτομέρειες, παρακαλούμε διαβάστε εδώ.

Ξεκινώντας
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Πρώτα η ασφάλεια <./Getting-Started/Safety-first.rst>
   Τι είναι ένα κλειστό σύστημα κυκλώματος <./Getting-Started/ClosedLoop.rst>
   Τι είναι ένα κλειστό σύστημα κυκλώματος με AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Wiki ενημερώσεις και αλλαγές <./Getting-Started/WikiUpdate.rst>
   
   
* `Τι χρειάζομαι 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Module <./Module/module.rst>

   
Πώς να Εγκαταστήσετε AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Χτίζοντας το APK <./Installing-AndroidAPS/Building-APK.md>
   Ενημέρωση σε νέα έκδοση ή υποκατάστημα <./Installing-AndroidAPS/Update-to-new-version.md>
   Σημειώσεις έκδοσης <./Installing-AndroidAPS/Releasenotes.md>
   Dev υποκατάστημα <./Installing-AndroidAPS/Dev_branch.md>
   
   
Ρυθμίσεις συστατικών
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Ρυθμίσεις <./Configuration/xdrip.md>
   Αντλίες <./Hardware/pumps.rst>
   Τηλέφωνα <./Hardware/Phoneconfig.rst>
   Ρύθμιση Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

Ρύθμιση παραμέτρων 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   Προτιμήσεις <./Configuration/Preferences.md>
   
   
AndroidAPS Χρήση
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS οθόνες <./Getting-Started/Screenshots.md>
   Στόχοι <./Usage/Objectives.rst>
   OpenAPS χαρακτηριστικά <./Usage/Open-APS-features.md>   
   Υπολογιστής COB <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Αλλαγή προφίλ <./Usage/Profiles.md>
   Προσωρινοί στόχοι <./Usage/temptarget.md>   
   Εκτεταμένη υδατάνθρακες <./Usage/Extended-Carbs.md>
   Αυτοματοποίηση <./Usage/Automation.rst>
  
 
Γενικές Συμβουλές 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Διασχίζοντας ζώνες ώρας με αντλίες <./Usage/Timezone-traveling.md>
   Πρόσβαση σε αρχεία καταγραφής <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo συμβουλές για την βασική χρήση <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Εισαγωγή/Εξαγωγή Ρυθμίσεων <./Usage/ExportImportSettings.rst>
   

AndroidAPS για τα παιδιά
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   * "Εξ αποστάσεως παρακολούθηση <./Children/Children.rst>
   Εντολές SMS <./Usage/SMS-Commands.md>
   

Για προχωρημένους 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   

Αντιμετώπιση προβλημάτων
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumps <./FGT/Troubleshootingpumps.rst>


Συχνές ερωτήσεις 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
Γλωσσάριο
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glossary <./Getting-Started/Glossary.md>
  

Where to go for help 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Wiki updates & changes <./Getting-Started/WikiUpdate.rst>

For Clinicians
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app and wiki <./translations.md>
   How to edit the wiki <./make-a-PR>


.. σημείωση:: 
	** Αποποίηση ευθύνης και προειδοποίηση **

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
