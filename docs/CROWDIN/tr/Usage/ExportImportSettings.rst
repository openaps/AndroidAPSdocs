Dışa aktarma/içe aktarma ayarları
**************************************************

Ayarları ne zaman dışa aktarmalıyım?
==================================================
Öngörülemeyenlere hazırlıklı olun. Önemli ayarları yanlışlıkla değiştirebilir ve değişiklikleri geri almakta sorun yaşayabilirsiniz. Telefonunuz kırılabilir veya çalınabilir. Bulunduğunuz duruma kolayca geri dönmek için ayarlar düzenli olarak dışa aktarılmalıdır.

En iyi zamanlama, ayarların değiştirilmesinden veya bir hedefin tamamlanmasından sonra dışa aktarmaktır. 

Dışa aktarılan ayarlar, telefondan bir buluta veya bilgisayarınıza kopyalanmalıdır, en iyisi iki farklı konuma da kopyalamaktır. Böylece AAPS telefonunuzun kaybolmasına veya zarar görmesine hazırsınız ve sıfırdan başlamak zorunda değilsiniz.

Bir Windows 10 bilgisayarında şöyle görünür:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: Bilgisayara bağlı AndroidAPS telefonda Preferences klasörü

Dışa aktarılan bilgiler
==================================================
Diğerlerinin yanı sıra aşağıdaki bilgiler, dışa aktarılan ayarların bir parçasıdır:

* `Otomasyon <../Usage/Automation.html>`_ olayları
* `Konfigürasyon ayarları <../Configuration/Config-Builder.html>`_
* `Yerel profil <../Configuration/Config-Builder.html#local-profile>`_ ayarları
* `Görevler <../Usage/Objectives.html>`_ durum dahil. `durumları dahil <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_
* `Tercihler <../Configuration/Preferences.html>`__ NS Client ayarları `NS Client settings <../Configuration/Preferences.html#nsclient>`_

Şifreli yedekleme formatı
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`__ .


Dışa aktarma ayarları
==================================================
* Hamburger menu (top left corner of screen)
* Bakım
* Export settings

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`__ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
İçe aktarma ayarları
==================================================
**Do not import settings while on an active Pod session** - see `Omnipod page for details <../Configuration/OmnipodEros.html#import-settings-from-previous-aaps>`_.

* Hamburger menu (top left corner of screen)
* Bakım
* İçe aktarma ayarları

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`__ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

Note for Dana RS users
------------------------------------------------------------
* As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. 
* Please pair new phone and pump manually.

Import settings from previous versions (before AAPS 2.7)
------------------------------------------------------------
* The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
* Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
* You will find the "old" file on the bottom of the list in the import dialogue.

Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
