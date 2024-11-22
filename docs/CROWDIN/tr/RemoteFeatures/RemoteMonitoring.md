# Uzaktan İzleme

![Monitoring children](../images/KidsMonitoring.png)

AAPS, çocukların uzaktan izlenmesi için çeşitli seçenekler sunar ve ayrıca uzaktan sms komutları göndermeye izin verir. Elbette, partnerinizi veya arkadaşınızı takip etmek için de uzaktan izlemeyi kullanabilirsiniz.

## Fonksiyonlar

- Çocuğun pompası, AAPS kullanılarak çocuğun telefonu tarafından kontrol edilir.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient app** on their phone. Settings must be the same in AAPS and AAPSClient app.
- Ebeveynler, telefonlarında **xDrip+ uygulamasını takipçi modunda** kullanarak KŞ uyarılarını alabilirler.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## Uzaktan izleme için araçlar ve uygulamalar

- Web tarayıcısında [Nightscout](https://nightscout.github.io/) (Ana veri ekranı)
- AAPSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Tek fark uygulama adıdır. Bu şekilde aynı telefona iki kez uygulamayı yükleyebilir, 2 farklı kişiyi/nightscout'u takip edebilirsiniz.
- Orijinal Dexcom uygulamasını kullanıyorsanız, Dexcom follow uygulaması (yalnızca KŞ değerleri)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- iOS'ta [Sugarmate](https://sugarmate.io/) veya [Spike](https://spike-app.com/) (esas olarak KŞ değerleri ve **alarmlar**)
- Bazı kullanıcılar, gelişmiş uzaktan sorun giderme için [TeamViewer](https://www.teamviewer.com/) gibi uzaktan erişim aracını daha faydalı bulur.

## Akıllı saat seçenekleri

Akıllı saat, çocuklarla AAPS'nin yönetilmesine yardımcı olmak için çok yararlı bir araç olabilir. Birkaç farklı konfigürasyon mümkündür:

- If AAPSClient is installed on the parents phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. Bu, mevcut KŞ'yi, döngü durumunu gösterecek ve karbonhidrat girişi, geçici hedefler ve profil değişikliklerine izin verecektir. WearOS uygulamasından bolus kullanımına izin VERİLMEZ.
- Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Bu uygulama yukarıda listelenen tüm fonksiyonların yanı sıra bolus insülin yeteneğini de içerir. Bu sayede ebeveyn çocuğun telefonuna dokunmadan insülin gönderebilir.

## Dikkat edilmesi gereken önemli noktalar

- Settings must be the same in AAPS and AAPSClient app.
- AAPS ana telefonunun yalnızca döngü çalıştırıldıktan sonra karşıya bilgi yükleyeceğini, bunun yanı sıra yükleme ve indirme süresi nedeniyle ana ve takipçi arasında bilgide zaman farkının oluşacağını da göz önünde bulundurun.
- What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use temporary profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.