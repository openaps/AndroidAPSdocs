# Uzaktan İzleme

```{image} ../images/KidsMonitoring.png
:alt: Çocukları izleme
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## Fonksiyonlar

- Kid's pump is controlled by kid's phone using AAPS.
- Ebeveynler, telefonlarında **NSClient uygulamasını** kullanarak KŞ seviyeleri, AKRB, AİNS gibi ilgili tüm verileri görerek uzaktan takip edebilirler. Settings must be the same in AAPS and NSClient app.
- Ebeveynler, telefonlarında **xDrip+ uygulamasını takipçi modunda** kullanarak KŞ uyarılarını alabilirler.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- NSClient uygulaması aracılığıyla uzaktan kontrol, yalnızca senkronizasyonunuz iyi çalışıyorsa önerilir (yani, GH "geçici hedef", GBO değişimleri gibi veri değişikliklerini görmüyorsanız), [Daha fazla ayrıntı için Sürüm 2.8.1.1 için sürüm notlarına bakınız](Releasenotes-important-hints-2-8- 1-1).

## Uzaktan izleme için araçlar ve uygulamalar

- Web tarayıcısında [Nightscout](https://nightscout.github.io/) (Ana veri ekranı)
- NSClient uygulaması, takip özelliği olan, profil geçişleri yapabilen, Geçici Hedefleri ayarlayan ve karbonhidratları girebilen AAPS'nin sadeleştirilmiş bir sürümüdür. İndirilebilir 2 uygulama vardır: [NSClient & NSClient2](https://github.com/nightscout/AndroidAPS/releases/). Tek fark uygulama adıdır. Bu şekilde aynı telefona iki kez uygulamayı yükleyebilir, 2 farklı kişiyi/nightscout'u takip edebilirsiniz.
- Orijinal Dexcom uygulamasını kullanıyorsanız, Dexcom follow uygulaması (yalnızca KŞ değerleri)
- Takipçi modunda [xDrip+](../Configuration/xdrip.md) (esas olarak KŞ değerleri ve **alarmlar**)
- iOS'ta [Sugarmate](https://sugarmate.io/) veya [Spike](https://spike-app.com/) (esas olarak KŞ değerleri ve **alarmlar**)

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## Dikkat edilmesi gereken önemli noktalar

- Doğru [tedavi faktörlerini](FAQ-how-to-begin) (bazal oran, İES, İDF...) ayarlamak, çocuklar için özellikle büyüme hormonları söz konusu olduğunda zor olmaktadır.
- Settings must be the same in AAPS and NSClient app.
- AAPS ana telefonunun yalnızca döngü çalıştırıldıktan sonra karşıya bilgi yükleyeceğini, bunun yanı sıra yükleme ve indirme süresi nedeniyle ana ve takipçi arasında bilgide zaman farkının oluşacağını da göz önünde bulundurun.
- Bu nedenle, uzaktan izleme ve uzaktan tedaviye başlamadan önce, bunları doğru bir şekilde ayarlamak için zaman ayırın ve çocuğunuz yanınızdayken test edin. Okul tatilleri bunun için iyi bir zaman olabilir.
- Uzaktan kontrol çalışmadığında acil durum planınız nedir (örn. ağ sorunları)?
- Anaokulu ve ilkokulda uzaktan izleme ve tedavi gerçekten yardımcı olabilir. Ancak öğretmenlerin ve eğitimcilerin çocuğunuzun tedavi planından haberdar olmalıdır. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
