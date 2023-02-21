# Uzaktan İzleme

```{image} ../images/KidsMonitoring.png
:alt: Çocukları izleme
```

AndroidAPS, çocukların uzaktan izlenmesi için çeşitli seçenekler sunar ve ayrıca uzaktan sms komutları göndermeye izin verir. Elbette, partnerinizi veya arkadaşınızı takip etmek için de uzaktan izlemeyi kullanabilirsiniz.

## Fonksiyonlar

- Çocuğun pompası, AndroidAPS kullanılarak çocuğun telefonu tarafından kontrol edilir.
- Ebeveynler, telefonlarında **NSClient uygulamasını** kullanarak KŞ seviyeleri, AKRB, AİNS gibi ilgili tüm verileri görerek uzaktan takip edebilirler. Ayarlar AndroidAPS ve NSClient uygulamasında aynı olmalıdır.
- Ebeveynler, telefonlarında **xDrip+ uygulamasını takipçi modunda** kullanarak KŞ uyarılarını alabilirler.
- [SMS Komutları](../Children/SMS-Commands.md) kullanılarak AndroidAPS'in uzaktan kontrolü, iki faktörlü kimlik doğrulama ile güvence altına alınmıştır.
- NSClient uygulaması aracılığıyla uzaktan kontrol, yalnızca senkronizasyonunuz iyi çalışıyorsa önerilir (yani, GH "geçici hedef", GBO değişimleri gibi veri değişikliklerini görmüyorsanız), [Daha fazla ayrıntı için Sürüm 2.8.1.1 için sürüm notlarına bakınız](Releasenotes-important-hints-2-8- 1-1).

## Uzaktan izleme için araçlar ve uygulamalar

- Web tarayıcısında [Nightscout](https://nightscout.github.io/) (Ana veri ekranı)
- NSClient uygulaması, takip özelliği olan, profil geçişleri yapabilen, Geçici Hedefleri ayarlayan ve karbonhidratları girebilen AAPS'nin sadeleştirilmiş bir sürümüdür. İndirilebilir 2 uygulama vardır: [NSClient & NSClient2](https://github.com/nightscout/AndroidAPS/releases/). Tek fark uygulama adıdır. Bu şekilde aynı telefona iki kez uygulamayı yükleyebilir, 2 farklı kişiyi/nightscout'u takip edebilirsiniz.
- Orijinal Dexcom uygulamasını kullanıyorsanız, Dexcom follow uygulaması (yalnızca KŞ değerleri)
- Takipçi modunda [xDrip+](../Configuration/xdrip.md) (esas olarak KŞ değerleri ve **alarmlar**)
- iOS'ta [Sugarmate](https://sugarmate.io/) veya [Spike](https://spike-app.com/) (esas olarak KŞ değerleri ve **alarmlar**)

## Dikkat edilmesi gereken önemli noktalar

- Doğru [tedavi faktörlerini](FAQ-how-to-begin) (bazal oran, İES, İDF...) ayarlamak, çocuklar için özellikle büyüme hormonları söz konusu olduğunda zor olmaktadır.
- Ayarlar AndroidAPS ve NSClient uygulamasında aynı olmalıdır.
- AAPS ana telefonunun yalnızca döngü çalıştırıldıktan sonra karşıya bilgi yükleyeceğini, bunun yanı sıra yükleme ve indirme süresi nedeniyle ana ve takipçi arasında bilgide zaman farkının oluşacağını da göz önünde bulundurun.
- Bu nedenle, uzaktan izleme ve uzaktan tedaviye başlamadan önce, bunları doğru bir şekilde ayarlamak için zaman ayırın ve çocuğunuz yanınızdayken test edin. Okul tatilleri bunun için iyi bir zaman olabilir.
- Uzaktan kontrol çalışmadığında acil durum planınız nedir (örn. ağ sorunları)?
- Anaokulu ve ilkokulda uzaktan izleme ve tedavi gerçekten yardımcı olabilir. Ancak öğretmenlerin ve eğitimcilerin çocuğunuzun tedavi planından haberdar olmalıdır. Bu tür bakım planlarının örnekleri, facebook'ta [AndroidAPS kullanıcılarının dosyalar bölümünde](https://www.facebook.com/groups/AndroidAPSUsers/files/) bulunabilir.
