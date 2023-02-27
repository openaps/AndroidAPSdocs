# Accu Chek Combo Pompa

Bu talimatlar, 3.2 sürümünden itibaren AndroidAPS'in bir parçası olan yeni combov2 sürücüsünü kullanarak Accu-Chek Combo pompasını kurmak içindir. Bu sürücü eskisinden tamamen ayrıdır.

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

## Donanım ve yazılım gereksinimleri

* Roche Accu-Chek Combo pompa(tüm pompa yazılımlarında çalışır).
* Pompayı yapılandırmak için 360 Yapılandırma Yazılımı ile birlikte bir Smartpix veya Realtyme cihazı. (Roche, Smartpix cihazlarını ve konfigürasyon yazılımını talep üzerine müşterilerine ücretsiz olarak göndermektedir.)
* Uyumlu bir telefon. Android 9 (Pie) veya daha üzeri zorunludur. LineageOS kullanıyorsanız desteklenen minimum sürüm 16.1'dir. Ayrıntılar için [sürüm notlarına](https://androidaps.readthedocs.io/tr/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) bakın.
* Telefonunuzda yüklü olan AndroidAPS uygulaması.

Bazı telefonlar, Bluetooth desteğinin kalitesine, çok agresif güç tasarrufu mantığına sahip olup olmadıklarına bağlı olarak diğerlerinden daha iyi çalışabilir. Telefonların listesini [AAPS Telefonlar](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) sayfasında bulabilirsiniz. Lütfen bunun tüm telefonların bir listesi olmadığını ve kişisel kullanıcı deneyimini yansıttığını unutmayın. Siz de kendi deneyiminizle katılmaya ve böylece başkalarına yardım etmeye teşvik ediliyorsunuz (bu projeler tamamen ileriye dönük ödeme yapılmasıyla ilgilidir).

(combov2-before-you-begin)=
## Başlamadan önce

**ÖNCE GÜVENLİK** - bu işlemi bir hatadan kurtulamayacağınız bir ortamda denemeyin. 360 Konfigürasyon Yazılımı ile birlikte Smartpix / Realtyme cihazınızı el altında bulundurun. Her şeyi ayarlamak ve her şeyin düzgün çalışıp çalışmadığını kontrol etmek için yaklaşık bir saat ayırın.

Aşağıdaki sınırlamaların farkında olun:

* Yayma bolus ve çoklu yayma bolus şu anda desteklenmemektedir (bunun yerine [Yayma Karbonhidratları](../Usage/Extended-Carbs.rst) kullanabilirsiniz).
* Yalnızca bir temel profil (ilki) desteklenir.
* Pompadaki o anda etkin olan profil, profil no.1 değilse döngü devre dışı bırakılır. Bu profil no.1 aktif olana kadar devam eder. Aktif yapıldığında ve AAPS bir dahaki sefere bağlandığında (ya bir süre sonra kendi kendine ya da kullanıcı combov2 kullanıcı arayüzünde Yenile düğmesine bastığı için), profil no.1 geçerli olur ve döngüyü tekrar etkinleştirebilirsiniz.
* Döngü çalışan bir GBO'nun iptal edilmesini talep ederse, Combo bunun yerine 15 dakika boyunca %90 veya %110'luk bir GBO ayarlayacaktır. Bunun nedeni, bir GBO'nun fiilen iptal edilmesinin pompa üzerinde çok fazla titreşime neden olan bir uyarıya neden olması ve bu titreşimlerin devre dışı bırakılamamasıdır.
* Bluetooth bağlantı kararlılığı, farklı telefonlara göre değişir ve artık pompaya bağlantının kurulmadığı durumlarda "pompaya erişilemiyor" uyarılarına neden olur. Bu hata oluşursa, Bluetooth'un etkinleştirildiğinden emin olun, bunun kesintili bir sorundan kaynaklanıp kaynaklanmadığını görmek için Combo sekmesindeki Yenile düğmesine basın ve hala bağlantı kurulmazsa, genellikle bunu düzeltmesi gereken telefonu yeniden başlatın.
* Yeniden başlatmanın yardımcı olamayacağı başka bir sorun, pompa telefondan tekrar bağlantıları kabul etmeden önce pompadaki bir butona (pompanın Bluetooth'unu sıfırlar) basılması gerektiğidir.
* Döngü GBO'ların kontrolünü üstlendiğinden, pompada herhangi bir GBO ayarlamaktan kaçınılmalıdır. Pompada yeni bir GBO'nın algılanması 20 dakika kadar sürebilir ve GBO'nın etkisi yalnızca algılandığı andan itibaren hesaba katılır, bu nedenle en kötü durumda, Aktif İnsüline yansıtılmayan 20 dakikalık bir GBO olabilir.

Ayrı Ruffy uygulamasına bağlı olan eski Combo sürücüsünü kullanıyorsanız ve bu sürücüye geçmek istiyorsanız, eşleştirmenin yeniden yapılması gerektiğini unutmayın - Ruffy ve yeni Combo sürücüsü eşleştirme bilgilerini paylaşamaz. Ayrıca, Ruffy'nin _çalışmadığından_ emin olun. Şüpheniz varsa, durum menüsünü açmak için Ruffy uygulama simgesine uzun basın. Bu menüde, "Uygulama Bilgisi" üzerine basın. Yeni açılan kullanıcı arayüzünde "Zorla durdur"a basın. Bu şekilde, etkin bir Ruffy sürücüsünün yeni sürücüye müdahale etmemesi sağlanır.

Ayrıca, eski sürücüden geçiş yapıyorsanız, yeni sürücünün bir bolus komutunu Combo'dan tamamen farklı ve çok daha hızlı bir şekilde ilettiğinin farkında olun, bu nedenle dozaj ne olursa olsun bir bolus hemen başladığında şaşırmayın. Ayrıca, Ruffy eşleştirme ve bağlantı sorunlarıyla ilgili genel öneriler, ipuçları ve püf noktaları vb. burada geçerli değildir, çünkü bu eskisiyle hiçbir kodu ortak olmayan tamamen yeni bir sürücüdür.

## Telefon Kurulumu

Pil optimizasyonlarının kapalı olduğundan emin olmak çok önemlidir. AAPS, bu optimizasyonlara ne zaman tabi olduğunu zaten otomatik olarak algılar ve kullanıcı arayüzünde bunların kapatılmasını ister. Ancak, modern Android telefonlarda Bluetooth _kendisi_ bir uygulamadır (bir sistem uygulaması). Ve genellikle, bu "Bluetooth uygulaması" _varsayılan olarak pil optimizasyonları açıkken_ çalışır. Sonuç olarak Bluetooth, telefon güç tasarrufu yapmayı amaçladığında Bluetooth uygulamasını kapattığı için yanıt vermeyi reddedebilir. Bu, söz konusu Bluetooth sistem uygulamasının ayarlarında pil optimizasyonlarının da kapatılması gerektiği anlamına gelir. Ne yazık ki, Bluetooth sistem uygulamasının nasıl bulunabileceği telefonlar arasında farklılık gösteriyor. Stok Android'de Ayarlar -> Uygulamalar -> Tüm N uygulamayı görün (N = telefonunuzdaki uygulama sayısı). Ardından, sağ üst köşedeki menüyü açın, "Sistemi göster" veya "Sistem uygulamalarını göster" veya "Tüm uygulamalar" üzerine dokunun. Şimdi, yeni genişletilmiş uygulama listesinde bir "Bluetooth" uygulaması arayın. Onu seçin ve "Uygulama bilgisi" kullanıcı arayüzünde "Pil" üzerine dokunun. Burada, pil optimizasyonlarını devre dışı bırakın (bazen "pil kullanımı" olarak adlandırılır).

## Combo kurulumu

* Accu-Chek 360 Yapılandırma Yazılımını kullanarak pompayı yapılandırın. Yazılıma sahip değilseniz, lütfen Accu-Chek yardım hattınızla iletişime geçin. Genellikle kayıtlı kullanıcılara "360° Pompa Yapılandırma Yazılımı" ve bir SmartPix USB kızılötesi bağlantı cihazı içeren bir CD gönderirler (eğer varsa Realtyme cihazı da çalışır).

  - **Gerekli ayarlar** (ekran görüntülerinde yeşil olarak işaretlenmiştir):

     * Menü yapılandırmasını "Standart" olarak ayarlayın/bırakın; bu yalnızca pompada desteklenen menüleri/eylemleri gösterecek ve desteklenmeyenleri (yayma/çoklu yayma bolus, çoklu bazal oranları) gizleyecektir, bu da kullanıldığında döngü işlevselliğinin kısıtlanmasına neden olur çünkü kullanıldığında döngüyü güvenli bir şekilde çalıştırmak mümkün değildir.
     * _Hızlı Bilgi Metni_'nin "HIZLI BİLGİ" olarak ayarlandığını doğrulayın (tırnak işaretleri olmadan, _İnsülin Pompası Seçenekleri_ altında bulunur).
     * GBO _Maksimum Ayarı_ %500 olarak ayarlayın
     * _Geçici Bazal Oranının Sonu Sinyali_'ni Devre Dışı Bırakın
     * GBO _Süre artışını_ 15 dk olarak ayarlayın
     * Bluetooth'u Etkinleştirin

  - **Önerilen ayarlar** (ekran görüntülerinde mavi olarak işaretlenmiştir)

     * Rezervuar düşük alarmını istediğiniz gibi ayarlayın
     * Yazılımdaki hatalara karşı koruma sağlamak için tedavinize uygun bir maksimum bolus yapılandırın
     * Benzer şekilde, bir koruma olarak maksimum GBO süresini yapılandırın. Pompayı 3 saat ayırma seçeneği 3 saat için %0'ı ayarladığından, en az 3 saat bekleyin.
     * Özellikle pompa daha önce manuel kullanıldığında ve hızlı bolus verme bir alışkanlık olduğunda, pompadan bolus vermeyi önlemek için tuş kilidini etkinleştirin.
     * Ekran zaman aşımını ve menü zaman aşımını sırasıyla minimum 5.5 ve 5 olarak ayarlayın. Bu AAPS'nin hata durumlarından daha hızlı kurtulmasını sağlar ve bu tür hatalar sırasında meydana gelebilecek titreşim sayısını azaltır

  ![Kullanıcı menüsü ayarlarının ekran görüntüsü](../images/combo/combo-menu-settings.png)

  ![GBO ayarlarının ekran görüntüsü](../images/combo/combo-tbr-settings.png)

  ![Bolus ayarlarının ekran görüntüsü](../images/combo/combo-bolus-settings.png)

  ![İnsülin rrezervuar ayarlarının ekran görüntüsü](../images/combo/combo-insulin-settings.png)

## Sürücüyü etkinleştirme ve Combo ile eşleştirme

* [Konfigürasyon ayarlarında](../Configuration/Config-Builder)'da "Accu-Chek Combo" sürücüsünü seçin. **Önemli**: Listede "Accu-Chek Combo (Ruffy)" adlı eski sürücü de mevcuttur. Bunu _seçmeyin_.

  ![Combo'nun Konfigürasyon ayaraları ekran görüntüsü](../images/combo/combov2-config-builder.png)

* Sürücü ayarlarını açmak için dişli tekerleğe dokunun.

* Ayarlar arayüzünde, ekranın üst kısmındaki 'Pompa ile eşleştir' butonuna dokunun. Combo eşleştirme arayüzü açılır. Eşleştirmeyi başlatmak için ekranda gösterilen talimatları izleyin. Android, telefonu diğer Bluetooth cihazlarına görünür kılmak için izin istediğinde "izin ver"e basın. Sonunda Combo, ekranında 10 haneli özel bir eşleştirme PIN'i gösterecek ve sürücü bunu isteyecektir. Bu PIN'i ilgili alana girin.

  ![Combo Eşleştirme UI 1 ekran görüntüsü](../images/combo/combov2-pairing-screen-1.png)

  ![Combo Eşleştirme UI 2 ekran görüntüsü](../images/combo/combov2-pairing-screen-2.png)

  ![Combo Eşleştirme UI 3 ekran görüntüsü](../images/combo/combov2-pairing-screen-3.png)

  ![Combo Eşleştirme UI 4 ekran görüntüsü](../images/combo/combov2-pairing-screen-4.png)

  ![Combo Eşleştirme UI 4 ekran görüntüsü](../images/combo/combov2-pairing-screen-5.png)

* Sürücü Combo'da gösterilen 10 haneli PIN'i istediğinde ve kod yanlış girildiğinde şu gösterilir: ![Combo Eşleştirme UI 3 ekran görüntüsü](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Once pairing is done, the pairing user interface is closed by pressing the OK button in the screen that states that pairing succeeded. After it is closed, you return to the driver settings user interface. The 'Pair with pump' button should now be greyed out and disabled.

  The Accu-Chek Combo tab looks like this after successfully pairing:

  ![Eşleştirilmiş Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-with-pairing.png)

  if however there is no pairing with the Combo, the tab looks like this instead:

  ![Eşleştirme olmadan Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-without-pairing.png)

* To verify your setup (with the pump **disconnected** from any cannula to be safe!) use AAPS to set a TBR of 500% for 15 min and issue a bolus. Pompanın şimdi çalışan bir GBO'su ve geçmişte bolus olması gerekir. AAPS ayrıca aktif GBO'yu ve iletilen bolusu göstermelidir.

* On the Combo, it is recommended to enable the key lock to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit.

## Notes about pairing

The Accu-Chek Combo was developed before Bluetooth 4.0 was released, and just one year after the very first Android version was released. This is why its way of pairing with other devices is not 100% compatible with how it is done in Android today. To fully overcome this, AAPS would need system level permissions, which are only available for system apps. These are installed by the phone makers into the phone - users cannot install system apps.

The consequence of this is that pairing will never be 100% without problems, though it is greatly improved in this new driver. In particular, during pairing, Android's Bluetooth PIN dialog can briefly show up and automatically go away. But sometimes, it stays on screen, and asks for a 4-digit PIN. (This is not to be confused with the 10-digit Combo pairing PIN.) Do not enter anything, just press cancel. If pairing does not continue, follow the instructions on screen to retry the pairing attempt.

(combov2-tab-contents)=
## Accu-Chek Combo tab contents

The tab shows the following information when a pump was paired (items are listed from top to bottom):

![Eşleştirilmiş Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-with-pairing.png)

1. _Driver state_: The driver can be in one of the following states:
   - "Disconnected" : There is no Bluetooth connection; the driver is in this state most of the time, and only connects to the pump when needed - this saves power
   - "Bağlanıyor"
   - "Checking pump" : the pump is connected, but the driver is currently performing safety checks to ensure that everything is OK and up to date
   - "Ready" : the driver is ready to accept commands from AAPS
   - "Suspended" : the pump is suspended (shown as "stopped" in the Combo)
   - "Executing command" : an AAPS command is being executed
   - "Error" : an error occurred; the connection was terminated, any ongoing command was aborted
2. _Last connection_: How many minutes ago did the driver successfully connect to the Combo; if this goes beyond 30 minutes, this item is shown with a red color
3. _Current activity_: Additional detail about what the pump is currently doing; this is also where a thin progress bar can show a command's execution progress, like setting a basal profile
4. _Battery_: Battery level; the Combo only indicates "full", "low", "empty" battery, and does not offer anything more accurate (like a percentage), so only these three levels are shown here
5. _Reservoir_: How many IU are currently in the Combo's reservoir
6. _Last bolus_: How many minutes ago the last bolus was delivered; if none was delivered yet after AAPS was started, this is empty
7. _Temp basal_: Details about the currently active temporary basal; if none is currently active, this is empty
8. _Base basal rate_: Currently active base basal rate ("base" means the basal rate without any active TBR influencing the basal rate factor)
9. _Serial number_: Combo serial number as indicated by the pump (this corresponds to the serial number shown on the back of the Combo)
10. _Bluetooth address_: The Combo's 6-byte Bluetooth address, shown in the `XX:XX:XX:XX:XX:XX` format

The Combo can be operated through Bluetooth in the _remote-terminal_ mode or in the _command_ mode. The remote-terminal mode corresponds to the "remote control mode" on the Combo's meter, which mimics the pump's LCD and four buttons. Some commands have to be performed in this mode by the driver, since they have no counterpart in the command mode. That latter mode is much faster, but, as said, limited in scope. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing at the bottom. When the driver switches to the command mode however, that field is left blank.

(The user does not influence this; the driver fully decides on its own what mode to use. This is merely a note for users to know why sometimes they can see Combo frames in that field.)

At the very bottom, there is the "Refresh" button. This triggers an immediate pump status update. It also is used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](combov2-alerts)).

## Tercihler

These preferences are available for the combo driver (items are listed from top to bottom):

![Accu-Chek Combo tercihlerinin ekran görüntüsü](../images/combo/combov2-preferences.png)

1. _Pair with pump_: This is a button that can be pressed to pair with a Combo. It is disabled if a pump is already paired.
2. _Unpair pump_: Unpairs a paired Combo; the polar opposite of item no. 1. It is disabled if no pump is paired.
3. _Discovery duration (in seconds)_: When pairing, the drivers makes the phone discoverable by the pump. This controls how long that discoverability lasts. By default, the maximum (300 seconds = 5 minutes) is selected. Android does not allow for discoverability to last indefinitely, so a duration has to be chosen.
4. _Autodetect and automatically enter insulin reservoir change_: If enabled, the "reservoir change" action that is normally done by the user through the "prime/fill" button in the Action tab. This is explained [in further detail below](combov2-autodetections).
5. _Autodetect and automatically enter battery change_: If enabled, the "battery change" action that is normally done by the user through the "pump battery change" button in the Action tab. This is explained [in further detail below](combov2-autodetections).
6. _Enable verbose Combo logging_: This greatly expands the amount of logging done by the driver. **CAUTION**: Do not enable this unless asked to by a developer. Otherwise, this can add a lot of noise to AndroidAPS logs and lessen their usefulness.

Most users only ever use the top two items, the _Pair with pump_ and _Unpair pump_ buttons.

(combov2-autodetections)=
## Autodetecting and automatically entering battery and reservoir changes

The driver is capable of detecting battery and reservoir changes by keeping track of the battery and reservoir levels. If the battery level was reported by the Combo as low the last time the pump status was updated, and now, during the new pump status update, the battery level shows up as normal, then the driver concludes that the user must have replaced the battery. The same logic is used for the reservoir level: If it now is higher than before, this is interpreted as a reservoir change.

This only works if the battery and reservoir are replaced when these levels are reported as low _and_ the battery and reservoir are sufficiently filled.

These autodetections can be turned off in the Preferences UI.

(combov2-alerts)=
## Alerts (warnings and errors) and how they are handled

The Combo shows alerts as remote-terminal screens. Warnings are shown with a "Wx" code (x is a digit), along with by a short description. One example is "W7", "TBR OVER". Errors are similar, but show up with an "Ex" code instead.

Certain warnings are automatically dismissed by the driver. These are:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main tab
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main tab
- W3, W6, W7, W8 : these are all purely informational for the user, so it is safe for the driver to auto-dismiss them

Diğer uyarılar otomatik olarak _yok sayılmaz_. Ayrıca, hatalar _asla_ otomatik olarak reddedilmez. Both of these are handled the same way: They cause the driver to produce an alert dialog on top of the AAPS UI, and also cause it to abort any ongoing command execution. The driver then switches to the "error" state (see [the Accu-Chek Combo tab contents description above](combov2-tab-contents)). This state does not allow for any command execution. The user has to handle the error on the pump; for example, an occlusion error may require replacing the cannula. Once the user took care of the error, normal operation can be resumed by pressing the "Refresh" button on the Accu-Chek Combo tab. The driver then connects to the Combo and updates its status, checking for whether an error is still shown on screen etc. Also, the driver auto-refreshes the pump status after a while, so manually pressing that button is not mandatory.

Bolusing is a special case. It is done in the Combo's command mode, which does not report mid-bolus that an alert appeared. As a consequence, the driver cannot automatically dismiss warnings _during_ a bolus. This means that unfortunately, the pump will be beeping until the bolus is finished. The most common mid-bolus alert typically is W1 "reservoir low". **Don't** dismiss Comnbo warnings on the pump itself manually during a bolus. You risk interrupting the bolus. The driver will take care of the warning once the bolus is over.

Alerts that happen while the driver is not connected to the Combo will not be noticed by the driver. The Combo has no way of automatically pushing that alert to the phone; it is always the phone that has to initiate the connection. As a consequence, the alert will persist until the driver connects to the pump. Users can press the "Refresh" button to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**IMPORTANT**: If an error occurs, or a warning shows up that isn't one of those that are automatically dismissed, the driver enters the error state. In that state, the loop **WILL BE BLOCKED** until the pump status is refreshed! It is unblocked after the pump status is updated (either by manual "Refresh" button press or by the driver's eventual auto-update) and no error is shown anymore.

## Combo kullanırken dikkat edilmesi gerekenler

* Özellikle bu sürücünün bir ürün olmadığını unutmayın. Başlarken, kullanıcının sistemi, sınırlamalarını ve başarısız olabileceğini izlemesi ve anlaması gerekir. Kullanan kişi sistemi tam olarak anlayamamışsa bu sistemi KULLANMAMANIZ şiddetle tavsiye edilir.
* Combo'nun uzaktan kumanda işlevselliğinin çalışma şekli nedeniyle, bazı işlemler (özellikle bazal profili ayarlamak) diğer pompalara kıyasla yavaştır. Bu, Combo'nun üstesinden gelinemeyecek talihsiz bir sınırlamasıdır.
* Pompa üzerinden bir GBO (geçici bazal oran) ayarlamayın veya iptal etmeyin. Döngü, GBO'nun kontrolünü programda üstlenir. Aksi takdirde kullanıcı tarafından pompada ayarlanan bir GBO'nun başlangıç zamanını belirlemek mümkün olmadığından güvenilir şekilde çalışamaz.
* AAPS pompa ile iletişim kurarken pompa üzerinde herhangi bir düğmeye basmayın (AAPS bağlandığında pompada Bluetooth logosu görünür). Bunu yapmak, Bluetooth bağlantısını kesecektir. Bunu yalnızca bağlantı kurmayla ilgili sorunlar varsa yapın (yukarıdaki ["Başlamadan önce" bölümüne](combov2-before-you-begin) bakın).
* Pompa bolus yaparken herhangi bir butona basmayın. Özellikle uyarıları pompa butonlarına basarak kapatmaya çalışmayın. Sebebiyle ilgili daha ayrıntılı bir açıklama için [uyarılar hakkındaki bölüme](combov2-alerts) bakın.

## Combo ile bağlantı kurulamadığında kontrol listesi

Sürücü, Combo'ya bağlanmak için elinden gelenin en iyisini yapıyor ve güvenilirliği en üst düzeye çıkarmak için birkaç numara kullanıyor. Yine de bazen bağlantı kurulamayabilir. İşte bu durumu düzeltmek için atmanız gereken bazı adımlar.

1. Combo'da bir düğmeye basın. Bazen, Combo'nun Bluetooth aygıtı yanıt vermemeye başlar ve artık bağlantıları kabul etmez. Combo üzerindeki bir düğmeye basıp LCD'nin bir şey göstermesini sağlayarak, Bluetooth aygıtı sıfırlanır. Çoğu zaman bağlantı sorunlarını çözmek için gereken tek adım budur.
2. Telefonunuzu yeniden başlatın. Telefonun Bluetooth bağlantısıyla ilgili bir sorun varsa bu gerekli olabilir.
3. Combo'nun pil kapağı eskiyse değiştirmeyi düşünün. Eski pil kapakları, Combo'nun güç kaynağında Bluetooth'u etkileyen sorunlara neden olabilir.
4. Bağlantı denemeleri hala başarısız oluyorsa, eşleştirmeyi kaldırıp ardından pompayı yeniden eşleştirmeyi deneyebilirsiniz.
