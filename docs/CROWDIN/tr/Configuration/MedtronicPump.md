# Medtronic Pompaları

**>>>> Medtronic pompa sürücüsü, AndroidAPS'in 2.5 (ana) sürümüne dahil edilmiştir. Durum böyleyken, Medtronic sürücüsü yine de beta yazılımı olarak kabul edilmelidir. Lütfen yalnızca deneyimli bir kullanıcıysanız kurulum yapın. Şu anda hala çift Bolus sorunuyla mücadele ediyoruz (Tedavilerde IOB hesaplaması yapan 2 bolus alıyoruz (bu hatayı yaşıyorsanız, lütfen Medtronic yapılandırmasında Çift Bolus Günlüğünü etkinleştirin ve gönderim sağlayın)) gelecek sürümde bu sorun düzeltilecektir. <<<<**

* * *

Yalnızca eski Medtronic pompalarıyla çalışır (ayrıntılar için aşağıya bakın). Medtronic 640G, 670G veya 780G ile çalışmaz.

* * *

Medtronic sürücüsünü kullanmaya başladıysanız, lütfen kendinizi bu [listeye](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit) ekleyin. Bu dosya sadece bu sürücü için hangi telefonların iyi olduğunu ve hangilerinin doğru çalışmadığını (veya kötü olduğunu) görebilmemiz içindir. Tabloda "BT yeniden başlatma" adlı bir sütun mevcuttur. Bu seçenek telefonunuzun zaman zaman gerçekleşen, pompa artık bağlanamadığında kullanılabilen BT etkinleştirme/devre dışı bırakma özelliğini destekleyip desteklemediğini kontrol etmek içindir. Başka bir sorun fark ederseniz, lütfen bunu tabloda Yorumlar sütununa yazın.

* * *

## Donanım ve yazılım gereksinimleri

- **Telefon:** Medtronic sürücüsü, BLE'yi destekleyen bir telefonla çalışmalıdır. **ÖNEMLİ: Sürücü tüm telefonlarda düzgün çalışırken, Bluetooth'un etkinleştirilmesi/devre dışı bırakılması çalışmaz (bu, RileyLink ile bağlantınız koptuğunda ve sistem otomatik olarak kurtarılamadığında gereklidir ve zaman zaman olabilir). Bu yüzden Android 7.0 - 8.1'e sahip bir cihaz edinmeniz gerekiyor, en kötü senaryoda telefonunuza LinegaeOS 15.1'i (15.1 veya daha düşük gerekli) kurabilirsiniz. Android 9 ile ilgili sorunu araştırıyoruz, ancak şu ana kadar bir çözüm bulamadık (bazı modellerde çalışıyor, diğerlerinde çalışmıyor gibi görünüyor. Bazen de çalışmayanlarda ara sıra çalışabiliyor.)**
- Pompanızla iletişim için, telefondan gelen BT komutlarını pompanın anlayacağı RF komutlarına dönüştüren ek bir cihaza ihtiyacınız vardır. Ek iletişim cihazlarının [listesini burada bulabilirsiniz.](../Module/module#additional-communication-device) Aygıtın kararlı yazılım sürümünde olması gerekiyor. Eski modeller üretici yazılımı 0.9 iken (eski sürümler düzgün çalışmayabilir) daha yeni modeller 2.2 olabilmektedir. (RL sitesinde yükseltme seçenekleri vardır). Bu konuda farklı bir deneyim yapmak istiyorsanız, bir çeşit RileyLink klonu olan Gnarl'ı da([buradan](https://github.com/ecc1/gnarl)) deneyebilirsiniz. 
- **Pompa:** Sürücü yalnızca aşağıdaki modeller ve pompa yazılımı sürümleriyle çalışır: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (pompa yazılımı 2.4A veya altı)
    - 554/754 AB sürümü (pompa yazılımı 2.6A veya altı)
    - 554/754 Kanada sürümü (pompa yazılımı 2.7A veya altı)
- Pompa yazılımı kontrolü için [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence içinde açıklanmıştır -of-pc-connect) ve [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Pompa Konfigürasyonu

- **Pompa'da uzaktan kontrol modunu etkinleştir** (Araçlar -> Uzaktan kontrol Seçenekleri, Evet'i seçin ve sonraki ekranda Kimlik Ekle'yi seçin ve sahte kimlik ekleyin (örn. 111111). Bu Uzak Kullanıcılar listesinde en az bir kullanıcının bulunması gerekiyor. Bu seçenekler farklı pompa modellerinde farklı görünebilir. Bu adım önemlidir, çünkü ayarladığınızda pompa uzaktan iletişim için frekansı daha sık dinler.
- **Maks Bazal'ı** Pompanızda "STD profilinizdeki maksimum bazal girişinizde" ayarlayın * 4 (maks. %400 Geçici Bazal Oranı istiyorsanız). Bu sayı 35'in altında olmalıdır (pompadan da görebilirsiniz).
- **Maks Bolus'u ayarlayın** (maks. 25)
- **STD profili ayarlayın** Bu kullanacağımız tek profil olacak. Devre dışı da bırakabilirsiniz.
- **Geçici Bazal Oran tipini ayarlayın** Mutlak olacak (Yüzde değil)

## Telefon/AndroidAPS Konfigürasyonu

- **RileyLink'i Telefonunuzla eşleştirmeyin.** RileyLink'inizi telefonunuzun bluetooth ayarlarından eşleştirdiyseniz, AndroidAPS onu yapılandırma ayarlarında bulamaz.
- Telefonunuzda Otomatik Döndür'ü devre dışı bırakın (bazı cihazlarda Otomatik döndürme, BT oturumlarını yeniden başlatır, bu bizim istediğimiz bir şey değil).
- Pompayı AndroidAPS'de iki şekilde yapılandırabilirsiniz: 

1. Sihirbaz Kullanımı (yeni kurulumda)
2. Doğrudan Konfigürasyon ayarları sekmesinde (Medtronic sürücüsündeki Dişli simgesi)

Yeni kurulum yaparsanız, doğrudan sihirbaza yönlendirileceksiniz. Bazen BT bağlantınız tam olarak çalışmıyorsa (pompaya bağlanamıyorsa) yapılandırmayı tamamlayamayabilirsiniz. Böyle bir durumda sanal pompayı seçerek, sihirbaz tamamlandıktan sonra pompa algılamayı atlayarak 2. seçeneğe geçebilirsiniz.

![MDT Settings](../images/Medtronic01a.png)

Aşağıdaki öğeleri ayarlamanız gerekir: (yukarıdaki resme bakın)

- **Pompa Seri Numarası**: Bunu pompanın arkasında, SN kısmında bulabilirsiniz. Sadece seri no daki 6 numaraya ihtiyacımız var.
- **Pompa Tipi**: Sahip olduğunuz pompa tipi (ör. 522). 
- **Pompa Frekansı**: Medtronic pompasının pompa frekansına göre iki versiyonu üretilmiştir. (pompanızın hangi frekansı kullandığından emin değilseniz, [SSS](../Configuration/MedtronicPump#faq) bölümüne bakın): 
    - ABD & Kanada için (NA-CA) kullanılan frekans 916 Mhz
    - Dünya çapında (WW) kullanılan frekans 868 Mhz'dir.
- **Pompadaki Maks Bolus (Ü)** (bir saat içinde): Bu, pompadakiyle aynı şekilde ayarlanmalıdır. Bolus yapabileceğiniz insülin miktarını sınırlar. Bu değeri aşarsanız, Bolus giremezsiniz ve hata verir. Kullanılabilecek maksimum değer 25'tir. Doz aşımına uğramamak için lütfen burada kendiniz için doğru değeri ayarlayınız.
- **Pompadaki Maks Bazal (Ü/s)**: Bu, pompadakiyle aynı şekilde ayarlanmalıdır. Bir saat içinde ne kadar bazal alabileceğinizi belirler. Örneğin, maksimum GBO'nun %500'e ayarlanmasını istiyorsanız ve günlük bazal şablonunuzda en yüksek değer 1,5 Ü/s ise, Maks Bazal'ı en az 7,5Ü/s'e ayarlamanız gerekir. Bu ayar yanlışsa (örneğin, bazal şablonunuzdaki değerlerden biri bunu aşarsa) pompa hata verir.
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. Cancelling bolus when bolus is running is not supported by pump (if you want to stop bolus when running, you have to suspend pump and then resume).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.
- **Set neutral temp basals** is an option which can help prevent Medtronic pumps from beeping on the hour. If enabled if will cancel a temp basal before the hour end to prevent this from happening.

## MEDTRONIC (MDT) Tab

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. Phone should be connected to RileyLink all the time.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is being executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depending on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pump History

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored locally. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Eylemler

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Important notes

### OpenAPS users

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintenance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Can I see the power of RileyLink/GNARL?

No. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")