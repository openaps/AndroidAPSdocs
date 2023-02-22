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

- AAPS 2.7, [otomasyon](../Usage/Automation.md) için yeni görev 11'i (sonraki sürümlerde görev 10 olarak yeniden numaralandırıldı!) içerir.
- [görev 11](Objectives-objective-10-automation) başlayabilmek için ([görev 3 ve 4](Objectives-objective-3-prove-your-knowledge)) tamamlanmalı.
- Örneğin, [3. görev](../Usage/Objectives-objective-3-prove-your-knowledge)'deki sınavı henüz bitirmediyseniz, [11. göreve](Objectives-objective-10-automation) başlayabilmek için sınavı tamamlamanız gerekir.
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

- AAPS 2.7, yeni bir şifreli yedekleme formatı kullanır.
- Sürüm 2.7'ye güncelledikten sonra [ayarlarınızı dışa aktarmalısınız](../Usage/ExportImportSettings.md).
- Önceki sürümlerdeki ayar dosyaları yalnızca AAPS 2.7'de içe aktarılabilir. Dışa aktarma yeni formatta olacaktır.
- Dışa aktarılan ayarlarınızı yalnızca telefonunuzda değil, aynı zamanda güvenli bir yerde (bilgisayarınız, bulut depolama...) sakladığınızdan emin olun.
- AAPS 2.7 apk'yi Android studio ile önceki sürümlerle aynı anahtar deposuyla kurarsanız, önceki sürümü silmeden yeni sürümü yükleyebilirsiniz.
- Tüm ayarlar ve tamamlanan görevler önceki sürümde olduğu gibi kalacaktır.
- Yeni anahtar deposu ve içe aktarma ayarlarına sahip anahtar deposu sürüm 2.7'nizi kaybetmeniz durumunda [sorun giderme bölümünde](troubleshooting_androidstudio-lost-keystore)ki açıklamalara bakabilirsiniz.

## Otoduyarlılık (İpucu - herhangi bir işlem gerekmez)

- Otoduyarlılık, referans tasarımı kopyalayan dinamik bir anahtarlama modeliyle değiştirildi.
- Otoduyarlılık artık hassasiyeti hesaplamak için 24 ve 8 saatlik bir aralıkta geçiş yapacak. Hangisinin daha hassas olduğunu kendi seçecektir.
- Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.

## Dana RS için Pompa Parolasını Ayarlayın (Dana RS kullanılıyorsa)

- Önceki sürümlerde [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) için pompa şifresi kontrol edilmemişti.
- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)
- Aşağı kaydırın ve "Dana RS"in yanındaki üçgene tıklayın.
- "Pompa şifresi (yalnızca v1)"e tıklayın
- Pompa parolasını girin ([Varsayılan parola](DanaRS-Insulin-Pump-default-password) aygıt yazılımı sürümüne göre farklıdır) ve Tamam'ı tıklayın.

```{image} ../images/DanaRSPW.png
:alt: Dana RS şifresini ayarlayın
```

Dana RS'de şifreyi değiştirmek için [DanaRS sayfasındaki](DanaRS-Insulin-Pump-change-password-on-pump) talimatları izleyin.
