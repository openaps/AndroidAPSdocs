# İnsülin pompasıyla farklı zaman diliminde seyahat

## DanaR, Koreli DanaR

Pompa geçmişi kullanmadığı için telefonda saat dilimini değiştirmekle ilgili bir sorun yok

(danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AndroidAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

### Seçenek 1: Yerel saati koruyarak profilde zaman kaydırma

* Telefon ayarlarınızda 'Otomatik tarih ve saat'i özelliğini kapatın (manuel saat dilimi değişikliği).
* Telefon, tüm seyahat süresi boyunca standart saatinizi yerelde olduğu gibi tutmalıdır.
* Ev konumunuz ile varış noktanız arasındaki zaman farkına göre zaman kaydırmalı bir profil değişikliği gerçekleştirin.
   
   * Profil adına uzun basın (ana ekranın üst ortası)
   * 'Profil Değiştir'i seçin
   * 'Zaman farkını' varış noktanıza göre ayarlayın.
   
   ![Zaman kaydırmalı profil değişikliği](../images/ProfileSwitchTimeShift2.png)
   
   * ör. Viyana -> New York: profil değiştirme +6 saat
   * ör. Viyana -> Sidney: profil değiştirme -8 saat
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2.md#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Seçenek 2: Pompa geçmişini sil

* Telefon ayarlarınızda 'Otomatik tarih ve saat'i özelliğini kapatın (manuel saat dilimi değişikliği)

When get out of plane:

* pompayı kapatın
* telefonda saat dilimini değiştirin
* telefonu kapatın, pompayı açın
* pompadaki geçmişini temizleyin
* pompadaki zamanı değiştirin
* telefonu açın
* telefonun pompaya bağlanmasına ve zaman ince ayarının yapmasına izin verin

(insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

(time-adjustment-daylight-savings-time-dst)=

# Zaman ayarı yaz saati uygulaması (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(accu-chek-combo)=

## Accu-Chek Combo

Pompa ve telefon arasındaki süre çok farklıysa AndroidAPS bir alarm verir. Ne yazık ki, DST zaman değişikliği gece yarısında olacaktır. Bunu önlemek ve bunun yerine uykunuzun tadını çıkarmamak için kendinize daha uygun bir zamanda saat değişikliğini yapmaya zorlamak için şu adımları izleyin:

### Saat değişmeden önce yapılması gerekenler

1. Saat dilimini otomatik olarak ayarlayan herhangi bir ayarı KAPATIN, böylece istediğiniz zaman saat değişikliğini zorlayabilirsiniz. Bunu nasıl yapabileceğiniz, akıllı telefonunuza ve Android sürümünüze bağlı olacaktır.
   
   * Bazılarının iki ayarı vardır, biri saatin otomatik ayarlanması (ideal olarak açık kalması gerekir) ve diğeri saat diliminin otomatik ayarlanması için (KAPALI konuma getirmeniz gerekir).
   * Ne yazık ki bazı Android sürümlerinde hem saatin hem de saat diliminin otomatik olarak ayarlanmasını sağlayan tek bir anahtar bulunur. Bunu şimdilik kapatmanız gerekecek.

2. Sizinle aynı saate sahip ancak DST kış ve yaz saati arasında geçiş yapmayan bir saat dilimi bulun.
   
   * Bu ülkelerin listesi mevcuttur [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Orta Avrupa Saati (CET) için bu "Brazzaville" (Kongo) olabilir. Telefonunuzun saat dilimini Kongo olarak değiştirin.

3. AndroidAPS'de pompanızı yenileyin.

4. Tedaviler sekmesini kontrol edin... Yinelenen tedaviler görürseniz:
   
   * "İleriki tedavileri sil" düğmesine basmayın
   * İlerideki tüm tedavilerde "kaldır"a basın ve tedavileri çoğaltın. Bu tedavileri kaldırmak yerine geçersiz kılmalıdır, böylece artık AİNS için dikkate alınmayacaktır.

5. Ne kadar AİNS/AKRB ile ilgili durum net değilse - kendi güvenliğiniz için lütfen en az bir İES ve Max-Carb-Time (Maksimum Karbonhidrat Süresi) için döngüyü devre dışı bırakın - hangisi daha büyükse.*

### Saat değişikliğinden sonra yapılacak işlemler

Bu geçişi yapmak için iyi bir zaman, düşük AİNS ile olacaktır. Örneğin. kahvaltı gibi bir yemekten bir saat önce (pompa geçmişindeki son boluslar küçük SMB düzeltmeleri olacaktır. AKRB ve AİNS'nizin her ikisi de sıfıra yakın olmalıdır.)

1. Android saat dilimini tekrar geçerli konumunuza değiştirin ve otomatik saat dilimini yeniden etkinleştirin.
2. AndroidAPS yakında Combo'nun saatinin eşleşmediği konusunda sizi uyarmaya başlayacak. Bu nedenle, pompanın ekranı ve düğmeleri aracılığıyla pompanın saatini manuel olarak güncelleyin.
3. AndroidAPS "Combo" ekranında Yenile'ye basın.
4. Ardından Tedaviler ekranına gidin ve gelecekte olabilecek olayları arayın. Çok fazla olmamalı.
   
   * "İleriki tedavileri sil" düğmesine basmayın
   * İlerideki tüm tedavilerde "kaldır"a basın ve tedavileri çoğaltın. Bu tedavileri kaldırmak yerine geçersiz kılmalıdır, böylece artık AİNS için dikkate alınmayacaktır.

5. Ne kadar AİNS/AKRB ile ilgili durum net değilse - kendi güvenliğiniz için lütfen en az bir İES ve Max-Carb-Time (Maksimum Karbonhidrat Süresi) için döngüyü devre dışı bırakın - hangisi daha büyükse.*

6. Normal şekilde devam edin.

## Accu-Chek Insight

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

## Diğer Pompalar

* Bu özellik, AndroidAPS sürüm 2.2'den beri mevcuttur.
* Zorlukları önlemek için Döngü, DST anahtarından SONRA 3 saat süreyle devre dışı bırakılacaktır. Bu güvenlik nedenleriyle yapılır (DST değişikliğinden önce yinelenen bolus nedeniyle AİNS çok yüksek).
* DST değişikliğinden önce ana ekranda, döngünün geçici olarak devre dışı bırakılacağına dair bir bildirim alacaksınız. Bu mesaj uyarı, titreşim veya herhangi bir şey olmadan görünecektir.