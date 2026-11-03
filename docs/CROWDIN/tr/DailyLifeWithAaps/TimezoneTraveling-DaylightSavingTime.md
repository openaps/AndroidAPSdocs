# Saat dilimi değişikliği ve yaz saati uygulaması

Telefonunuzun saat dilimi değiştiğinde **AAPS**, değişiklikten yaklaşık 10 saniye sonra geçmişe ait **AİNS**, bazal ve duyarlılığı baştan yeniden hesaplar. Bu sırada ana ekrandaki grafiklerin ve değerlerin güncellenmesi biraz zaman alabilir.

(timezone-traveling-with-pumps)=

## Omnipod Dash için saat dilimi değişikliği

* Pompa durumunu **Yönet → Pompa** içinde yenileyin
* Geçici olarak farklı bir **Profil** seçin, ardından asıl veya istediğiniz **Profil**e geri dönün

## DanaR, Kore DanaR için saat dilimi değişikliği

Pompa geçmişi kullanmadığı için telefonda saat dilimini değiştirmekle ilgili bir sorun yok

(timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS, Dana-i için saat dilimi değişikliği

Bu pompalar özel dikkat gerektirir, çünkü **AAPS** pompanın geçmişini kullanır, ancak pompadaki kayıtlarda saat dilimi bilgisi yoktur. **Bu, telefonunuzda saat dilimini değiştirirseniz kayıtların farklı bir saat dilimiyle okunacağı ve iki kez görüneceği anlamına gelir.**

Bunu önlemek için iki olasılık vardır:

### Seçenek 1: Yerel saati koruyarak profilde zaman kaydırma

* Telefonunuzun ayarlarında 'Otomatik tarih ve saat' özelliğini kapatın (manuel saat dilimi değişikliği).

* Telefonunuz tüm seyahat boyunca evdeki standart saatinizi korumalıdır.

* **Profil**inizi ev saatiniz ile varış yerinin saati arasındaki farka göre zaman kaydırın.
   
   * [Profil ekranını](#ProfileSwitch-manage-v4) açmak için ana ekranda **Profil** adına dokunun
   * **Profil**inizi seçin ve **▶ Etkinleştir** düğmesine dokunun
   * '**Zaman kaydırma**' değerini varış yerinize göre ayarlayın ve **Etkinleştir** düğmesine dokunun.
   
   ![Zaman kaydırmalı profil değişimi](../images/ProfileSwitchTimeShift2.png)
   
   * ör. Viyana -> New York: **Profil değişimi** +6 saat
   * ör. Viyana -> Sidney: **Profil değişimi** -8 saat

### Seçenek 2: Pompa geçmişini sil

* Telefon ayarlarınızda 'Otomatik tarih ve saat' özelliğini kapatın (manuel saat dilimi değişikliği)

Uçaktan indiğinizde:

* pompayı kapatın
* telefonda saat dilimini değiştirin
* telefonu kapatın, pompayı açın
* pompadaki geçmişi temizleyin
* pompadaki zamanı değiştirin
* telefonu açın
* telefonun pompaya bağlanmasına ve saatin ince ayarını yapmasına izin verin

(timezone-traveling-insight)=

## Insight için saat dilimi değişikliği

Sürücü, pompanın saatini telefonun saatine göre otomatik olarak ayarlar.

Insight ayrıca saatin hangi anda ve hangi (eski) saatten hangi (yeni) saate değiştirildiğini geçmiş kayıtlarına yazar. Böylece saat değişikliğine rağmen **AAPS** doğru zamanı belirleyebilir.

Bu, **GTD** değerlerinde hatalara neden olabilir. Ama sorun olmamalı.

Böylece Insight kullanıcısının saat dilimi değişiklikleri ve saat değişiklikleri konusunda endişelenmesine gerek kalmaz. Bu kuralın bir istisnası vardır: Insight pompasının esas pilini değiştirirken zaman vb. bilgileri hafızasında tutması için küçük bir dahili pili vardır. Pil değişimi çok uzun sürerse bu dahili pilin enerjisi biter, saat sıfırlanır ve yeni pil taktıktan sonra sizden tarih ve saati girmeniz istenir. Bu durumda, doğru zaman tam olarak belirlenemediği için pil değişiminden önceki tüm kayıtlar AAPS'teki hesaplamada atlanır.

## Accu-Chek Combo için saat dilimi değişikliği

[Combo sürücüsü](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), pompanın saatini otomatik olarak telefonun saatine göre ayarlar. Combo saat dilimlerini saklayamaz, yalnızca yerel saati saklar. Sürücünün pompaya yazdığı da tam olarak budur. Ayrıca pompanın yerel saatini, saat dilimi farkını içeren tam bir zaman damgasına çevirebilmek için saat dilimini yerel AAPS tercihlerinde saklar. Kullanıcının herhangi bir şey yapmasına gerek yoktur; Combo'daki saat, telefonun geçerli saatinden çok fazla saparsa, pompanın saati otomatik olarak ayarlanır.

Bununla birlikte, yalnızca genellikle yavaş olan uzak terminal modunda yapılabildiğinden, bunun biraz zaman aldığını unutmayın. Bu aşılamayan bir Combo sınırlamasıdır.

## Medtrum için saat dilimi değişikliği

Sürücü, pompanın saatini telefonun saatine göre otomatik olarak ayarlar.

Saat dilimi değişiklikleri geçmişi bozmaz, yalnızca GTD etkilenebilir. Telefondaki saati elle değiştirmek geçmişte ve **AİNS** değerinde sorunlara neden olabilir. Saati elle değiştirirseniz **AİNS** değerini iki kez kontrol edin.

Saat dilimi veya saat değiştiğinde çalışan **GBO'lar** (geçici bazal oranları) durdurulur.

(time-adjustment-daylight-savings-time-dst)=

## YAZ SAATİ UYGULAMASI (DST)

Yaz saati uygulaması için saat ayarı.

Pompanıza ve CGM kurulumunuza bağlı olarak, saatteki ani değişiklikler **AAPS**'in doğru çalışmasında sorunlara yol açabilir. Bazı pompalarda saat dilimi ayarlarını gece değil, yaz saati değişikliğinden önce uyanıkken yapmak daha iyidir.

### Çoğu pompa için yaz saatine otomatik uyum

* Ancak yaz saati değişikliği gerçekleştikten (genellikle saat 01:00'den itibaren) SONRA **Döngü** 3 saat boyunca devre dışı kalır ve **AAPS**, **Profil**inizde seçili olan temel bazala döner. Bu, güvenlik nedeniyle yapılır: yaz saati değişikliğinden önceki bolus iki kez sayılabileceği için **AİNS** çok yüksek olabilir.
* Yaz saati değişikliği gerçekleştikten sonra **Döngü**'yü etkinleştirmek için istediğiniz **Profil**e bir **Profil değişimi** yapın: ana ekranda profil adına, ardından yuvarlak **▶** düğmesine dokunun (bkz. [Bir profili etkinleştirme](#ProfileSwitch-manage-v4)).
* Yaz saati değişikliğinden önce **AAPS** ana ekranında **Döngü**'nün geçici olarak devre dışı bırakıldığına dair bir bildirim de alırsınız. Bu mesaj bip sesi, titreşim veya benzeri bir ses olmadan görünür.

**AAPS** hesaplayıcısı ile bolus yapıyorsanız, bu verilerin kesinlikle doğru olduğundan emin değilseniz **AKRB** ve **AİNS** verilerini kullanmayın. Dikkatli olun ve yaz saati değişikliğinden sonraki birkaç saat boyunca bu özelliği kullanmayın.

### Accu-Chek Insight için yaz saati

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

### Accu-Chek Combo için yaz saati

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

### Medtrum için yaz saati

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

### Omnipod Dash için yaz saati

* Ya yukarıda açıklandığı gibi yaz saati değişikliğinden sonra **AAPS**'in geçici olarak temel bazala dönmesine izin verin.
* Ya da **AAPS**'in gece boyunca geçici olarak temel bazala dönmesini istemiyorsanız, gece kesinti olmaması için saat dilimini yaz saati değişikliğinden bir gün önce değiştirebilirsiniz. BU SEÇENEĞİN POD'UNUZUN ERKEN SONA ERMESİNE NEDEN OLABİLECEĞİNİ UNUTMAYIN. AŞAĞIDAKİ ÖZELLİĞİ SEÇERSENİZ LÜTFEN YANINIZDA YEDEK MALZEME BULUNDURUN.

#### Saat değişmeden önce yapılması gerekenler

1. Telefonun saat dilimini otomatik olarak ayarlayan tüm telefon ayarlarını KAPATIN. Böylece yaz saati uygulamayan istediğiniz bir saat dilimine geçebilirsiniz. Bunu nasıl etkinleştireceğiniz telefonunuza ve Android sürümünüze bağlıdır.
   
   * Bazı telefonlarda iki ayar vardır: biri saatin otomatik ayarı için (ideal olarak açık kalmalıdır), diğeri saat diliminin otomatik ayarı için (bunu KAPATMALISINIZ: aşağıdaki ekran görüntüsünde **Time zone** (Saat dilimi) altındaki **Set automatically** (Otomatik olarak ayarla)).
   * Ne yazık ki bazı Android sürümlerinde hem saatin hem de saat diliminin otomatik ayarı için tek bir anahtar vardır. Bunu şimdilik kapatmanız gerekecek.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Bulunduğunuz yerle aynı saati kullanan, ancak yaz saati uygulamayan bir saat dilimi bulun.
   
   * Bu ülkelerin listesi mevcuttur [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Orta Avrupa Saati (CET) için bu, "Brazzaville" (Kongo) olabilir. Telefonunuzun saat dilimini Kongo olarak değiştirin.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. **AAPS**'te pompanızı yenileyin ve istediğiniz **Profil**e geçin.

4. **AAPS**'in **AİNS** ve **AKRB** değerlerini kontrol edin. Doğru değilse **Döngü**'yü en az bir İES süresi veya en uzun karbonhidrat emilim süresi (**Emilim max süre**) boyunca devre dışı bırakın; hangisi daha uzunsa onu esas alın.

5. Actions to take after the clock change. Yerel saat dilimine geri dönmek için iyi bir zaman, **AİNS** değerinin düşük olduğu zamandır. Örneğin kahvaltı gibi bir öğünden bir saat önce. İdeal olarak **AKRB** ve **AİNS** değerlerinin ikisi de sıfıra yakın olmalıdır.