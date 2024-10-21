# Necessary checks after update coming from AAPS 2.6

- AAPS 2.7'ye geçilirken program kodu önemli ölçüde değiştirildi.
- Bu nedenle güncellemeden sonra bazı değişiklikler yapmanız veya ayarları kontrol etmeniz önemlidir.
- Please see [release notes](../Installing-AndroidAPS/Releasenotes.md#version-270) for details on new and extended features.

## KŞ kaynağını kontrol edin

- Güncellemeden sonra KŞ kaynağının doğru olup olmadığını kontrol edin.
- Especially when using [xDrip+](../CompatibleCgms/xDrip.md) it might happen, that BG source is changed to Dexcom app (patched).
- Open [Config builder](../SettingUpAaps/ConfigBuilder.md#bg-source) (hamburger menu on top left side of home screen)
- "KŞ kaynağı"na ilerleyin.
- Değişiklik gerekliyse doğru KŞ kaynağını seçin.

![KŞ Kaynağı](../images/ConfBuild_BG.png)

## Sınavı bitir

- AAPS 2.7, [otomasyon](../Usage/Automation.md) için yeni görev 11'i (sonraki sürümlerde görev 10 olarak yeniden numaralandırıldı!) içerir.
- You have to finish exam ([objective 3 and 4](../SettingUpAaps/CompletingTheObjectives.md#objective-3-prove-your-knowledge)) in order to complete [objective 11](../SettingUpAaps/CompletingTheObjectives.md#objective-11-enabling-additional-features-for-daytime-use-such-as-dynamic-senstivity-plugin-dynisf).
- If for example you did not finish the exam in [objective 3](../SettingUpAaps/CompletingTheObjectives.md#objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](../SettingUpAaps/CompletingTheObjectives.md#objective-11-enabling-additional-features-for-daytime-use-such-as-dynamic-senstivity-plugin-dynisf).
- Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

## Ana parola tanımlama

- 2.7 sürümünden itibaren şifrelenmiş oldukları için [ayarları dışa aktarabilmek](../Usage/ExportImportSettings.md) için gereklidir.
- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
- "Genel" altındaki üçgeni tıklayın
- "Ana-Parola" ya tıklayın
- Parolayı girin, onaylayın ve Tamam'a tıklayın.

![Ana parola tanımlama](../images/MasterPW.png)

## Dışa aktarma ayarları

- AAPS 2.7, yeni bir şifreli yedekleme formatı kullanır.
- Sürüm 2.7'ye güncelledikten sonra [ayarlarınızı dışa aktarmalısınız](../Usage/ExportImportSettings.md).
- Önceki sürümlerdeki ayar dosyaları yalnızca AAPS 2.7'de içe aktarılabilir. Dışa aktarma yeni formatta olacaktır.
- Dışa aktarılan ayarlarınızı yalnızca telefonunuzda değil, aynı zamanda güvenli bir yerde (bilgisayarınız, bulut depolama...) sakladığınızdan emin olun.
- AAPS 2.7 apk'yi Android studio ile önceki sürümlerle aynı anahtar deposuyla kurarsanız, önceki sürümü silmeden yeni sürümü yükleyebilirsiniz.
- Tüm ayarlar ve tamamlanan görevler önceki sürümde olduğu gibi kalacaktır.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore).

## Otoduyarlılık (İpucu - herhangi bir işlem gerekmez)

- Otoduyarlılık, referans tasarımı kopyalayan dinamik bir anahtarlama modeliyle değiştirildi.
- Otoduyarlılık artık hassasiyeti hesaplamak için 24 ve 8 saatlik bir aralıkta geçiş yapacak. Hangisinin daha hassas olduğunu kendi seçecektir.
- Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.

## Dana RS için Pompa Parolasını Ayarlayın (Dana RS kullanılıyorsa)

- Pump password for [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) was not checked in previous versions.
- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
- Aşağı kaydırın ve "Dana RS"in yanındaki üçgene tıklayın.
- "Pompa şifresi (yalnızca v1)"e tıklayın
- Enter pump password ([Default password](../CompatiblePumps/DanaRS-Insulin-Pump.md#default-password) is different depending on firmware version) and click OK.

![Set Dana RS password](../images/DanaRSPW.png)

To change password on Dana RS follow instructions on [DanaRS page](../CompatiblePumps/DanaRS-Insulin-Pump.md#change-password-on-pump).
