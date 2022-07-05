# İnsülin pompasıyla farklı zaman diliminde seyahat

## DanaR, Koreli DanaR

Pompa geçmişi kullanmadığı için telefonda saat dilimini değiştirmekle ilgili bir sorun yok

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
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Option 2: Delete pump history

* Turn off 'Automatic date and time' in your phone settings (manual time zone change)

When get out of plane:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

Bu geçişi yapmak için iyi bir zaman, düşük IOB ile olacaktır. Örneğin. kahvaltı gibi bir yemekten bir saat önce (pompa geçmişindeki son boluslar küçük SMB düzeltmeleri olacaktır. COB ve IOB'nizin her ikisi de sıfıra yakın olmalıdır.)

1. Android saat dilimini tekrar geçerli konumunuza değiştirin ve otomatik saat dilimini yeniden etkinleştirin.
2. AndroidAPS yakında Combo'nun saatinin eşleşmediği konusunda sizi uyarmaya başlayacak. Bu nedenle, pompanın ekranı ve düğmeleri aracılığıyla pompanın saatini manuel olarak güncelleyin.
3. AndroidAPS "Combo" ekranında Yenile'ye basın.
4. Ardından Tedaviler ekranına gidin ve gelecekte olabilecek olayları arayın. Çok fazla olmamalı.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Normal şekilde devam edin.

## Accu-Chek Insight

* DST'ye geçiş otomatik olarak yapılır. Herhangi bir işlem gerekmez.

## Diğer Pompalar

* Bu özellik, AndroidAPS sürüm 2.2'den beri mevcuttur.
* Zorlukları önlemek için Döngü, DST anahtarından SONRA 3 saat süreyle devre dışı bırakılacaktır. Bu güvenlik nedenleriyle yapılır (DST değişikliğinden önce yinelenen bolus nedeniyle IOB çok yüksek).
* DST değişikliğinden önce ana ekranda, döngünün geçici olarak devre dışı bırakılacağına dair bir bildirim alacaksınız. Bu mesaj uyarı, titreşim veya herhangi bir şey olmadan görünecektir.