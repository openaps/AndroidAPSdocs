# Önce Güvenlik

**Kendi yapay pankreas sisteminizi oluşturmaya karar verdiğinizde, her zaman güvenlik ve emniyet hakkında düşünmek ve tüm eylemlerinizin etkisini anlamak önemlidir**

## Genel

- AndroidAPS, şeker hastalığını yönetmenize yardımcı olacak bir araçtır, programı yükleyip KŞ takibini unutabileceğiniz tam otomatik bir sistem değildir!
- AndroidAPS'in hiçbir zaman hata yapmayacağını varsaymayın. Bu program, insülin iletiminizin kontrolünü ele alıyor. Her zaman izleyin, nasıl çalıştığını anlayın ve eylemlerini nasıl yorumlayacağınızı öğrenin.
- Telefonun pompa ile eşleştirildiğinde, pompaya her türlü talimatı verebileceğini unutmayın. Bir çocuk tarafından kullanılıyorsa telefona yalnızca AndroidAPS yükleyin ve iletişim için kullanın. Truva atları, virüsler veya sisteminize müdahale edebilecek botlar gibi kötü amaçlı yazılımları bulaştırabilecek gereksiz uygulamalar veya oyunlar (!!!) yüklemeyin.
- Telefon üreticiniz ve Google tarafından sağlanan tüm güvenlik güncellemelerini yükleyin.
- Kapalı döngü sistemi kullanarak tedavinizi değiştirirken diyabet alışkanlıklarınızı da değiştirmeniz gerekebilir. Örneğin bazı insanlar, AndroidAPS otomatik insülini azalttığı (veya durdurduğu) için daha az hipo tedavisine ihtiyaç duyduklarını rapor ediyorlar.

## SMS Kominikatör

- AndroidAPS, çocuğunuzun telefonunu kısa mesaj yoluyla uzaktan kontrol etmenizi sağlar. Bu SMS kominikatörü etkinleştirirseniz, uzak komutlar verecek şekilde ayarlanmış telefonun çalınabileceğini unutmayın. Bu yüzden her zaman en azından bir PIN kodu ile telefonu koruyun.
- AndroidAPS ayrıca bolus veya profil değişikliği gibi uzak komutlarınızın gerçekleşip gerçekleşmediğini kısa mesajla size bildirecektir. Alıcı telefonlardan birinin çalınması durumuna karşı en az iki farklı telefon numarasına onay metinleri gönderilecek şekilde ayarlamanız önerilir.

## AndroidAPS, görme engelli kişiler tarafından da kullanılabilir

Android cihazlarda TalkBack, işletim sisteminin bir parçasıdır. Ses çıkışı yoluyla ekran yönlendirmesi için bir programdır. TalkBack ve AndroidAPS blind ile telefonunuzu yönlendirebilirsiniz.

Kullanıcılar AndroidAPS uygulamasını Android Studio ile kendileri oluşturuyor. Birçoğu, TalkBack'e benzer bir Ekran Okuyucunun bulunduğu Microsoft Windows'u bu amaç için kullanır. Android Studio bir Java uygulaması olduğundan, Kontrol Panelinde "Java Access Bridge" bileşeni etkinleştirilmelidir. Aksi takdirde, PC'nin ekran okuyucusu Android Studio'da konuşmayacaktır.

Bunu yapmak için lütfen aşağıdaki şekilde ilerleyin:

- Klavyede WINDOWS butonuna basın ve arama alanına "Denetim Masası" yazın ve Enter ile açın. "Tüm Kontrol Paneli Öğeleri" açılır.
- E harfine basarak "Erişim Kolaylığı Merkezi"ne girin, Enter ile açın.
- Ardından Enter ile "Bilgisayarı ekransız kullan"ı açın.
- Aşağıda "Enable Java Access Bridge" onay kutusunu bulacaksınız, onu seçin.
- Bitti, pencereyi kapatın! Ekran okuyucu şimdi çalışmalıdır.

```{note}
** Önemli güvenlik bildirimi **

Bu dokümantasyonda anlatılan AndroidAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bir AndroidAPS sistemi oluşturmak veya çalıştırmak için bozulmuş, değiştirilmiş veya kendi kendine yapılmış insülin pompaları veya CGM alıcıları bulursanız veya size teklif edilirse *kesinlikle kullanmayın*.

Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.

Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
```
