# İnsülin pompasıyla farklı zaman diliminde seyahat

## DanaR, Koreli DanaR

Pompa geçmişi kullanmadığı için telefonda saat dilimini değiştirmekle ilgili bir sorun yok

(timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AAPS is using history from the pump but the records in pump don't have timezone stamp. **Bu telefonda saat dilimini basitçe değiştirirseniz, kayıtların farklı saat dilimleriyle okunacağı ve iki katına çıkacağı anlamına gelir.**

Bunu önlemek için iki olasılık vardır:

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
* Probably not an option if using [patched LibreLink app](#libre2-patched-librelink-app-with-xdrip) as automatic time zone must be set to start a new Libre 2 sensor.

### Seçenek 2: Pompa geçmişini sil

* Telefon ayarlarınızda 'Otomatik tarih ve saat'i özelliğini kapatın (manuel saat dilimi değişikliği)

Uçaktan inerken:

* pompayı kapatın
* telefonda saat dilimini değiştirin
* telefonu kapatın, pompayı açın
* pompadaki geçmişini temizleyin
* pompadaki zamanı değiştirin
* telefonu açın
* telefonun pompaya bağlanmasına ve zaman ince ayarının yapmasına izin verin

(timezone-traveling-insight)=

## Insight

Sürücü, pompanın saatini telefonun saatine göre otomatik olarak ayarlar.

Insight, aynı zamanda, hangi andaki zamanın ve hangi (eski) zamandan hangi (yeni) zamana değiştirildiği geçmiş girdilerini de kaydeder. Böylece saat değişikliğine rağmen AAPS'de doğru zaman belirlenebilir.

GTD'larda yanlışlıklara neden olabilir. Ama sorun olmamalı.

Böylece Insight kullanıcısının saat dilimi değişiklikleri ve saat değişiklikleri konusunda endişelenmesine gerek kalmaz. Bu kuralın bir istisnası vardır: Insight pompasının esas pilini değiştirirken zaman vb. bilgileri hafızasında tutması için küçük bir dahili pili vardır. Pilin değiştirilmesi uzun sürerse bu dahili pilin enerjisi biterse saat sıfırlanır ve yeni pil taktıktan sonra saat ve tarih girmeniz istenir. Bu durumda, pil değişimi öncesindeki tüm girişler, doğru zaman tam olarak tanımlanamadığı için AAPS'deki hesaplamada atlanır.

## Accu-Chek Combo

The [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. Combo, saat dilimlerini depolayamaz, yalnızca yerel saati depolayabilir. Dolayısıyla yeni sürücü pompaya bunu programlar. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. Kullanıcının herhangi bir şey yapmasına gerek yoktur; Combo'daki saat, telefonun geçerli saatinden çok fazla saparsa, pompanın saati otomatik olarak ayarlanır.

Bununla birlikte, yalnızca genellikle yavaş olan uzak terminal modunda yapılabildiğinden, bunun biraz zaman aldığını unutmayın. Bu aşılamayan bir Combo sınırlamasıdır.

Ruffy tabanlı eski sürücü, zamanı otomatik olarak ayarlamaz. Kullanıcının bunu manuel olarak yapması gerekir. Değişikliğin nedeninin saat dilimi / gün ışığından yararlanma olması durumunda bunu güvenli bir şekilde yapmak için gerekli adımlar için aşağıya bakın.

## Medtrum

Sürücü, pompanın saatini telefonun saatine göre otomatik olarak ayarlar.

Timezone changes keep the history in tact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and IOB. If you change time manually double check the IOB.

When the timezone or time changes running TBR's are stopped.

(time-adjustment-daylight-savings-time-dst)=

## Yaz saati uygulamasında (DST) zaman ayarı

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

### Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

#### Saat değişmeden önce yapılması gerekenler

1. Saat dilimini otomatik olarak ayarlayan herhangi bir ayarı KAPATIN, böylece istediğiniz zaman saat değişikliğini zorlayabilirsiniz. Bunu nasıl yapabileceğiniz, akıllı telefonunuza ve Android sürümünüze bağlı olacaktır.
   
   * Bazılarının iki ayarı vardır, biri saatin otomatik ayarlanması (ideal olarak açık kalması gerekir) ve diğeri saat diliminin otomatik ayarlanması için (KAPALI konuma getirmeniz gerekir).
   * Ne yazık ki bazı Android sürümlerinde hem saatin hem de saat diliminin otomatik olarak ayarlanmasını sağlayan tek bir anahtar bulunur. Bunu şimdilik kapatmanız gerekecek.

2. Sizinle aynı saate sahip ancak DST kış ve yaz saati arasında geçiş yapmayan bir saat dilimi bulun.
   
   * Bu ülkelerin listesi mevcuttur [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Orta Avrupa Saati (CET) için bu "Brazzaville" (Kongo) olabilir. Telefonunuzun saat dilimini Kongo olarak değiştirin.

3. In AAPS refresh your pump.

4. Tedaviler sekmesini kontrol edin... Yinelenen tedaviler görürseniz:
   
   * "İleriki tedavileri sil" düğmesine basmayın
   * İlerideki tüm tedavilerde "kaldır"a basın ve tedavileri çoğaltın. Bu tedavileri kaldırmak yerine geçersiz kılmalıdır, böylece artık AİNS için dikkate alınmayacaktır.

5. Ne kadar AİNS/AKRB ile ilgili durum net değilse - kendi güvenliğiniz için lütfen en az bir İES ve Max-Carb-Time (Maksimum Karbonhidrat Süresi) için döngüyü devre dışı bırakın - hangisi daha büyükse.*

#### Saat değişikliğinden sonra yapılacak işlemler

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Android saat dilimini tekrar geçerli konumunuza değiştirin ve otomatik saat dilimini yeniden etkinleştirin.
2. AAPS will soon start alerting you that the Combo’s clock doesn’t match. Bu nedenle, pompanın ekranı ve düğmeleri aracılığıyla pompanın saatini manuel olarak güncelleyin.
3. On the AAPS “Combo” screen, press Refresh.
4. Ardından Tedaviler ekranına gidin ve gelecekte olabilecek olayları arayın. Çok fazla olmamalı.
   
   * "İleriki tedavileri sil" düğmesine basmayın
   * İlerideki tüm tedavilerde "kaldır"a basın ve tedavileri çoğaltın. Bu tedavileri kaldırmak yerine geçersiz kılmalıdır, böylece artık AİNS için dikkate alınmayacaktır.

5. Ne kadar AİNS/AKRB ile ilgili durum net değilse - kendi güvenliğiniz için lütfen en az bir İES ve Max-Carb-Time (Maksimum Karbonhidrat Süresi) için döngüyü devre dışı bırakın - hangisi daha büyükse.*

6. Normal şekilde devam edin.

### Accu-Chek Insight

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

### Medtrum

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

### Other pumps

* This feature is available since AAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.