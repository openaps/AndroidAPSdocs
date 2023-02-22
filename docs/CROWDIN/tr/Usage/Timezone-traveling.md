# İnsülin pompasıyla farklı zaman diliminde seyahat

## DanaR, Koreli DanaR

Pompa geçmişi kullanmadığı için telefonda saat dilimini değiştirmekle ilgili bir sorun yok

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

AndroidAPS, pompanın geçmişini kullandığından ancak pompadaki kayıtların saat dilimi damgasına sahip olmadığı için bu pompalar özel bir bakıma ihtiyaç duyar. **Bu telefonda saat dilimini basitçe değiştirirseniz, kayıtların farklı saat dilimleriyle okunacağı ve iki katına çıkacağı anlamına gelir.**

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
* Yeni bir Libre 2 sensörünü başlatmak için eğer [yama uygulanmış LibreLink uygulaması](Libre2-time-zone-travelling) kullanıyorsanız, otomatik saat dilimi ayarlanmalıdır ve bu seçeneği kullanamazsınız.

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

(Timezone-traveling-insight)= 

## Insight

Sürücü, pompanın saatini telefonun saatine göre otomatik olarak ayarlar.

Insight, aynı zamanda, hangi andaki zamanın ve hangi (eski) zamandan hangi (yeni) zamana değiştirildiği geçmiş girdilerini de kaydeder. Böylece saat değişikliğine rağmen AAPS'de doğru zaman belirlenebilir.

GTD'larda yanlışlıklara neden olabilir. Ama sorun olmamalı.

Böylece Insight kullanıcısının saat dilimi değişiklikleri ve saat değişiklikleri konusunda endişelenmesine gerek kalmaz. Bu kuralın bir istisnası vardır: Insight pompasının esas pilini değiştirirken zaman vb. bilgileri hafızasında tutması için küçük bir dahili pili vardır. Pilin değiştirilmesi uzun sürerse bu dahili pilin enerjisi biterse saat sıfırlanır ve yeni pil taktıktan sonra saat ve tarih girmeniz istenir. Bu durumda, pil değişimi öncesindeki tüm girişler, doğru zaman tam olarak tanımlanamadığı için AAPS'deki hesaplamada atlanır.

## Accu-Chek Combo

[Yeni Combo sürücüsü](../Configuration/Accu-Chek-Combo-Pump-v2.md), pompanın saatini telefonun saatine göre otomatik olarak ayarlar. Combo, saat dilimlerini depolayamaz, yalnızca yerel saati depolayabilir. Dolayısıyla yeni sürücü pompaya bunu programlar. Ek olarak, pompanın yerel saatini saat dilimi farkı olan tam bir zaman damgasına dönüştürebilmek için yerel AndroidAPS tercihlerinde saat dilimini saklar. Kullanıcının herhangi bir şey yapmasına gerek yoktur; Combo'daki saat, telefonun geçerli saatinden çok fazla saparsa, pompanın saati otomatik olarak ayarlanır.

Bununla birlikte, yalnızca genellikle yavaş olan uzak terminal modunda yapılabildiğinden, bunun biraz zaman aldığını unutmayın. Bu aşılamayan bir Combo sınırlamasıdır.

Ruffy tabanlı eski sürücü, zamanı otomatik olarak ayarlamaz. Kullanıcının bunu manuel olarak yapması gerekir. Değişikliğin nedeninin saat dilimi / gün ışığından yararlanma olması durumunda bunu güvenli bir şekilde yapmak için gerekli adımlar için aşağıya bakın.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

# Yaz saati uygulamasında (DST) zaman ayarı

Pompa ve CGM kurulumuna bağlı olarak, zaman atlamaları sorunlara yol açabilir. Combo ile örn. pompa geçmişi tekrar okunur ve yinelenen girişlere yol açar. Bu yüzden lütfen ayarlamayı gece değil, uyanıkken yapın.

AKRB ve AİNS'in kesinlikle doğru olduğundan emin olana kadar bolus hesaplayıcıyı tekrar kullanmayın. DST Saat değişikliğinden sonra muhtemelen birkaç saat kullanmamak daha iyidir.

(Timezone-traveling-accu-chek-combo)=

## Accu-Chek Combo

**NOT**: Yukarıda bahsedildiği gibi, bu bölüm yalnızca Ruffy tabanlı eski sürücü için geçerlidir. Yeni sürücü tarih, saat ve DST'yi otomatik olarak ayarlar.

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