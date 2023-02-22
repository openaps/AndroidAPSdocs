# AndroidAPS 2.6'dan güncelleme sonrası gerekli kontroller

- AAPS 2.7'ye geçilirken program kodu önemli ölçüde değiştirildi.
- Bu nedenle güncellemeden sonra bazı değişiklikler yapmanız veya ayarları kontrol etmeniz önemlidir.
- Yeni ve genişletilmiş özelliklerle ilgili ayrıntılar için lütfen [sürüm notlarına](Releasenotes-version-2-7-0) bakın.

## KŞ kaynağını kontrol edin

- Güncellemeden sonra KŞ kaynağının doğru olup olmadığını kontrol edin.
- Özellikle [xDrip+](../Configuration/xdrip.md) kullanılırken KŞ kaynağı Dexcom uygulaması (yamalı) olarak değiştirilebilir.
- [Konfigürasyon ayarları](Config-Builder-bg-source)'nı açın (ana ekranın sol üst tarafında hamburger menüsü)
- "KŞ kaynağı"na ilerleyin.
- Değişiklik gerekliyse doğru KŞ kaynağını seçin.

```{image} ../images/ConfBuild_BG.png
:alt: KŞ kaynağı
```

## Sınavı bitir

- AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for [automation](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](Objectives-objective-3-prove-your-knowledge)) in order to complete [objective 11](Objectives-objective-10-automation).
- If for example you did not finish the exam in [objective 3](../Usage/Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation).
- Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

## Ana parola tanımlama

- Necessary to be able to [export settings](../Usage/ExportImportSettings.md) as they are encrypted as of version 2.7.
- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
- Click triangle below "General"
- Click "Master-Password"
- Enter password, confirm password and click ok.

```{image} ../images/MasterPW.png
:alt: Ana parola tanımlama
```

## Dışa aktarma ayarları

- AAPS 2.7 uses a new encrypted backup format.
- You must [export your settings](../Usage/ExportImportSettings.md) after updating to version 2.7.
- Önceki sürümlerdeki ayar dosyaları yalnızca AAPS 2.7'de içe aktarılabilir. Dışa aktarma yeni formatta olacaktır.
- Make sure to store your exported settings not only on your phone but also in at least one safe place (your pc, cloud storage...).
- AAPS 2.7 apk'yi Android studio ile önceki sürümlerle aynı anahtar deposuyla kurarsanız, önceki sürümü silmeden yeni sürümü yükleyebilirsiniz.
- Tüm ayarlar ve tamamlanan görevler önceki sürümde olduğu gibi kalacaktır.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](troubleshooting_androidstudio-lost-keystore).

## Otoduyarlılık (İpucu - herhangi bir işlem gerekmez)

- Otoduyarlılık, referans tasarımı kopyalayan dinamik bir anahtarlama modeliyle değiştirildi.
- Otoduyarlılık artık hassasiyeti hesaplamak için 24 ve 8 saatlik bir aralıkta geçiş yapacak. Hangisinin daha hassas olduğunu kendi seçecektir.
- Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.

## Dana RS için Pompa Parolasını Ayarlayın (Dana RS kullanılıyorsa)

- Pump password for [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) was not checked in previous versions.
- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
- Scroll down and click triangle next to "Dana RS".
- Click "Pump password (v1 only)"
- Enter pump password ([Default password](DanaRS-Insulin-Pump-default-password) is different depending on firmware version) and click OK.

```{image} ../images/DanaRSPW.png
:alt: Dana RS şifresini ayarlayın
```

To change password on Dana RS follow instructions on [DanaRS page](DanaRS-Insulin-Pump-change-password-on-pump).
