# Uzaktan İzleme

![Çocukları izleme](../images/KidsMonitoring.png)

AAPS, çocukların uzaktan izlenmesi için çeşitli seçenekler sunar ve ayrıca uzaktan sms komutları göndermeye izin verir. Elbette, partnerinizi veya arkadaşınızı takip etmek için de uzaktan izlemeyi kullanabilirsiniz.

## Fonksiyonlar

- Çocuğun pompası, AAPS kullanılarak çocuğun telefonu tarafından kontrol edilir.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient app** on their phone. Settings must be the same in AAPS and AAPSClient app.
- Ebeveynler, telefonlarında **xDrip+ uygulamasını takipçi modunda** kullanarak KŞ uyarılarını alabilirler.
- [SMS Komutları](../Children/SMS-Commands.md) kullanılarak AAPS'in uzaktan kontrolü, iki faktörlü kimlik doğrulama ile güvence altına alınmıştır.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Uzaktan izleme için araçlar ve uygulamalar

- Web tarayıcısında [Nightscout](https://nightscout.github.io/) (Ana veri ekranı)
- AAPSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Tek fark uygulama adıdır. Bu şekilde aynı telefona iki kez uygulamayı yükleyebilir, 2 farklı kişiyi/nightscout'u takip edebilirsiniz.
- Orijinal Dexcom uygulamasını kullanıyorsanız, Dexcom follow uygulaması (yalnızca KŞ değerleri)
- Takipçi modunda [xDrip+](../Configuration/xdrip.md) (esas olarak KŞ değerleri ve **alarmlar**)
- iOS'ta [Sugarmate](https://sugarmate.io/) veya [Spike](https://spike-app.com/) (esas olarak KŞ değerleri ve **alarmlar**)
- Bazı kullanıcılar, gelişmiş uzaktan sorun giderme için [TeamViewer](https://www.teamviewer.com/) gibi uzaktan erişim aracını daha faydalı bulur.

## Akıllı saat seçenekleri

Akıllı saat, çocuklarla AAPS'nin yönetilmesine yardımcı olmak için çok yararlı bir araç olabilir. Birkaç farklı konfigürasyon mümkündür:

- If AAPSClient is installed on the parents phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. Bu, mevcut KŞ'yi, döngü durumunu gösterecek ve karbonhidrat girişi, geçici hedefler ve profil değişikliklerine izin verecektir. WearOS uygulamasından bolus kullanımına izin VERİLMEZ.
- Alternatif olarak, [AAPS WearOS uygulaması](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) çocuğun telefonuna bağlı ancak ebeveynleri tarafından takılabilen uyumlu bir akıllı saat üzerine kurulabilir. Bu uygulama yukarıda listelenen tüm fonksiyonların yanı sıra bolus insülin yeteneğini de içerir. Bu sayede ebeveyn çocuğun telefonuna dokunmadan insülin gönderebilir.

## Dikkat edilmesi gereken önemli noktalar

- Doğru [tedavi faktörlerini](FAQ-how-to-begin) (bazal oran, İES, İDF...) ayarlamak, çocuklar için özellikle büyüme hormonları söz konusu olduğunda zor olmaktadır.
- Settings must be the same in AAPS and AAPSClient app.
- AAPS ana telefonunun yalnızca döngü çalıştırıldıktan sonra karşıya bilgi yükleyeceğini, bunun yanı sıra yükleme ve indirme süresi nedeniyle ana ve takipçi arasında bilgide zaman farkının oluşacağını da göz önünde bulundurun.
- Bu nedenle, uzaktan izleme ve uzaktan tedaviye başlamadan önce, bunları doğru bir şekilde ayarlamak için zaman ayırın ve çocuğunuz yanınızdayken test edin. Okul tatilleri bunun için iyi bir zaman olabilir.
- Uzaktan kontrol çalışmadığında acil durum planınız nedir (örn. ağ sorunları)?
- Anaokulu ve ilkokulda uzaktan izleme ve tedavi gerçekten yardımcı olabilir. Ancak öğretmenlerin ve eğitimcilerin çocuğunuzun tedavi planından haberdar olmalıdır. Bu tür bakım planlarının örnekleri, facebook'ta [AAPS kullanıcılarının dosyalar bölümünde](https://www.facebook.com/groups/AndroidAPSUsers/files/) bulunabilir.
- Çocuğun telefonunu her zaman pompasının ve CGM'inin menzilinde tutmak önemlidir. Bu, özellikle çok küçük çocuklarda zor olabilir. Pek çok çözüm mevcuttur, popüler bir seçenek [SPI Kemeri](https://spibelt.com/collections/kids-belts)'dir.
