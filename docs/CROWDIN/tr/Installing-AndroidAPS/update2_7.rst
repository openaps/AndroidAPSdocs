AndroidAPS 2.6'dan güncelleme sonrası gerekli kontroller
***********************************************************

* AAPS 2.7'ye geçilirken program kodu önemli ölçüde değiştirildi. 
* Bu nedenle güncellemeden sonra bazı değişiklikler yapmanız veya ayarları kontrol etmeniz önemlidir.
* Yeni ve genişletilmiş özelliklerle ilgili ayrıntılar için lütfen `sürüm notlarına <../Installing-AndroidAPS/Releasenotes.html#version-2-7-0>`_ bakın.

KŞ kaynağını kontrol edin
-----------------------------------------------------------
* Güncellemeden sonra KŞ kaynağının doğru olup olmadığını kontrol edin.
* Özellikle `xDrip+ <../Configuration/xdrip.html>`_ kullanıldığında KŞ kaynağının Dexcom uygulaması (yamalı) olarak değiştirilmiş olabilir.
* `Konfigürasyon ayarları<../Configuration/Config-Builder.html#bg-source>`_ açın (ana ekranın sol üst tarafında hamburger menüsü)
* "KŞ kaynağı"na ilerleyin.
* Değişiklik gerekliyse doğru KŞ kaynağını seçin.

.. image:: ../images/ConfBuild_BG.png
  :alt: KŞ kaynağı

Sınavı bitir
-----------------------------------------------------------
* AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for `automation <../Usage/Automation.html>`_.
* You have to finish exam (`objective 3 and 4 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_) in order to complete `objective 11 <../Usage/Objectives.html#objective-10-automation>`__.
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Objectives.html#objective-10-automation>`__. 
* Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

Ana parola tanımlama
-----------------------------------------------------------
* Sürüm 2.7'den itibaren şifreli oldukları için `ayarları <../Usage/ExportImportSettings.html>`_ dışa aktarabilmek için gereklidir.
* Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
* "Genel" altındaki üçgeni tıklayın
* "Ana-Parola" ya tıklayın
* Parolayı girin, onaylayın ve Tamam'a tıklayın.

.. image:: ../images/MasterPW.png
  :alt: Ana parola tanımlama
  
Dışa aktarma ayarları
-----------------------------------------------------------
* AAPS 2.7, yeni bir şifreli yedekleme formatı kullanır. 
* 2.7 sürümüne güncelledikten sonra `ayarlarınızı <../Usage/ExportImportSettings.html>`_ dışa aktarmalısınız.
* Önceki sürümlerdeki ayar dosyaları yalnızca AAPS 2.7'de içe aktarılabilir. Dışa aktarma yeni formatta olacaktır.
* Dışa aktarılan ayarlarınızı yalnızca telefonunuzda değil, aynı zamanda güvenli bir yerde (bilgisayarınız, bulut depolama...) sakladığınızdan emin olun.
* AAPS 2.7 apk'yi Android studio ile önceki sürümlerle aynı anahtar deposuyla kurarsanız, önceki sürümü silmeden yeni sürümü yükleyebilirsiniz. 
* Tüm ayarlar ve tamamlanan görevler önceki sürümde olduğu gibi kalacaktır.
* Anahtar deponuzu kaybetmeniz ve 2.7 versiyonunu yeni anahtar deponuzla oluşturmanız durumunda, önceki sürümden içe aktarma ayarları ile nasıl kurulumun yapılabileceğini `sorun giderme bölümünde <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_ bulabilirsiniz.

Otoduyarlılık (İpucu - herhangi bir işlem gerekmez)
-----------------------------------------------------------
* otoduyarlılık, referans tasarımı kopyalayan dinamik bir anahtarlama modeliyle değiştirildi.
* Otoduyarlılık artık hassasiyeti hesaplamak için 24 ve 8 saatlik bir aralıkta geçiş yapacak. Hangisinin daha hassas olduğunu kendi seçecektir. 
* Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.

Dana RS için Pompa Parolasını Ayarlayın (Dana RS kullanılıyorsa)
-----------------------------------------------------------
* `Dana RS <../Configuration/DanaRS-Insulin-Pump.html>`_ için pompa şifresi önceki sürümlerde kontrol edilmedi.
* Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
* Aşağı kaydırın ve "Dana RS" yanındaki üçgene tıklayın.
* "Pompa şifresi (yalnızca v1)"e tıklayın
* Pompa şifresini girin (`Varsayılan şifre <../Configuration/DanaRS-Insulin-Pump.html#default-password>`_ aygıt yazılımı sürümüne göre değişir) ve Tamam'ı tıklayın.

.. image:: ../images/DanaRSPW.png
  :alt: Dana RS şifresini ayarlayın
  
Dana RS'de şifreyi değiştirmek için `DanaRS sayfasındaki <../Configuration/DanaRS-Insulin-Pump.html#change-password-on-pump>`'daki talimatları izleyin.
