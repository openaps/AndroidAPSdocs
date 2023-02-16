# Önce Güvenlik

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Genel

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Bu program, insülin iletiminizin kontrolünü ele alıyor. Her zaman izleyin, nasıl çalıştığını anlayın ve eylemlerini nasıl yorumlayacağınızı öğrenin.
- Remember that, once paired, the phone can instruct the pump to do anything. Bir çocuk tarafından kullanılıyorsa telefona yalnızca AndroidAPS yükleyin ve iletişim için kullanın. Truva atları, virüsler veya sisteminize müdahale edebilecek botlar gibi kötü amaçlı yazılımları bulaştırabilecek gereksiz uygulamalar veya oyunlar (!!!) yüklemeyin.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Örneğin bazı insanlar, AndroidAPS otomatik insülini azalttığı (veya durdurduğu) için daha az hipo tedavisine ihtiyaç duyduklarını rapor ediyorlar.

## SMS Kominikatör

- AndroidAPS allows you to control a child's phone remotely via text message. Bu SMS kominikatörü etkinleştirirseniz, uzak komutlar verecek şekilde ayarlanmış telefonun çalınabileceğini unutmayın. Bu yüzden her zaman en azından bir PIN kodu ile telefonu koruyun.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Alıcı telefonlardan birinin çalınması durumuna karşı en az iki farklı telefon numarasına onay metinleri gönderilecek şekilde ayarlamanız önerilir.

## AndroidAPS, görme engelli kişiler tarafından da kullanılabilir

Android cihazlarda TalkBack, işletim sisteminin bir parçasıdır. Ses çıkışı yoluyla ekran yönlendirmesi için bir programdır. TalkBack ve AndroidAPS blind ile telefonunuzu yönlendirebilirsiniz.

Kullanıcılar AndroidAPS uygulamasını Android Studio ile kendileri oluşturuyor. Birçoğu, TalkBack'e benzer bir Ekran Okuyucunun bulunduğu Microsoft Windows'u bu amaç için kullanır. Android Studio bir Java uygulaması olduğundan, Kontrol Panelinde "Java Access Bridge" bileşeni etkinleştirilmelidir. Aksi takdirde, PC'nin ekran okuyucusu Android Studio'da konuşmayacaktır.

Bunu yapmak için lütfen aşağıdaki şekilde ilerleyin:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. "Tüm Kontrol Paneli Öğeleri" açılır.
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! Ekran okuyucu şimdi çalışmalıdır.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.

Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
```
