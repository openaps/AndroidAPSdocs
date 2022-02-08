# Accu Chek Combo Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

## Donanım Gereksinimleri

- Roche Accu-Chek Combo pompa(tüm pompa yazılımlarında çalışır)
- Pompayı yapılandırmak için 360 Yapılandırma Yazılımı ile birlikte bir Smartpix veya Realtyme cihazı. (Roche, Smartpix cihazlarını ve konfigürasyon yazılımını talep üzerine müşterilerine ücretsiz olarak göndermektedir.)
- Uyumlu bir telefon: LineageOS 14.1 (eski adıyla CyanogenMod) veya en az Android 8.1 (Oreo) çalıştıran bir telefona sahip bir Android telefon. AndroidAPS 3.0'dan itibaren Android 9 zorunludur. Ayrıntılar için [sürüm notlarına](https://androidaps.readthedocs.io/tr/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) bakın.
- LineageOS 14.1 ile Combo pompayı eşleştirmek için gereken değişiklik Haziran 2017'de tanıtıldığından en az bu sürüm veya daha üst sürümleri olmalıdır. 
- Telefonların listesini [AAPS Telefonlar](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) sayfasında bulabilirsiniz.
- Lütfen bunun tüm telefonların bir listesi olmadığını ve kişisel kullanıcı deneyimini yansıttığını unutmayın. Siz de kendi deneyiminizle katılmaya ve böylece başkalarına yardım etmeye teşvik ediliyorsunuz (bu projeler tamamen ileriye dönük ödeme yapılmasıyla ilgilidir).
- Android 8.1, Combo ile iletişime izin verirken, 8.1'de AAPS ile ilgili hala sorunlar bulunmaktadır.
- İleri düzey kullanıcılar için, eşleştirmeyi root'lu bir telefonda yapabilir ve yine rootlu ruffy/AAPS ile kullanan bir telefona aktarabilirler. Bu işlem Android < 8.1 olan telefonların kullanılmasındaki sorunları kaldırabilir, ancak geniş çapta test edilmemiştir: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Sınırlamalar

- Yayma bolus ve çoklu yayma bolus desteklenmez (bunun yerine [Yayma Karbonhidratlar](../Usage/Extended-Carbs.rst)'a bakın).
- Yalnızca bir bazal profil desteklenir.
- Pompada birden farklı bir bazal profil ayarlamak veya pompadan yayma bolus veya çoklu yayma boluslar iletmek, TBR'leri (geçici bazal oranları) etkiler ve döngü bu koşullar altında güvenli bir şekilde çalışamayacağından döngüyü 6 saat boyunca yalnızca düşük askıya alma moduna zorlar.
- Şu anda pompada saat ve tarihi ayarlamak mümkün değildir, bu nedenle [yaz saati değişiklikleri](../Usage/Timezone-traveling#accu-chek-combo) manuel olarak yapılmalıdır. (Gece alarm vermemesi için, akşam telefonun otomatik saat güncellemesini devre dışı bırakabilir, pompa saati ile birlikte sabah tekrar değiştirebilirsiniz).
- Şu anda sadece 0,05 ila 10 Ü/st aralığındaki bazal oranlar desteklenmektedir. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. Similarly, when reducing to 50%, the lowest basal rate must be at least 0.10 U/h.
- Döngü, çalışan bir GBO'nin iptal edilmesini isterse, Combo bunun yerine 15 dakika için %90 veya %110'luk bir GBO ayarlayacaktır. Bunun nedeni, bir GBO'nın iptal edilmesinin pompada çok fazla titreşime neden olacak bir uyarıya neden olmasıdır.
- Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
- Bluetooth bağlantı kararlılığı, farklı telefonlara göre değişir ve artık pompaya bağlantının kurulmadığı durumlarda "pompaya erişilemiyor" uyarılarına neden olur. 
- Bu hata oluşursa, Bluetooth'un etkinleştirildiğinden emin olun, bunun kesintili bir sorundan kaynaklanıp kaynaklanmadığını görmek için Combo sekmesindeki Yenile düğmesine basın ve hala bağlantı kurulmazsa, genellikle bunu düzeltmesi gereken telefonu yeniden başlatın. 
- There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
- Bu noktada bu sorunlardan herhangi birini giderebilmek için yapılabilecek çok az şey var. Bu nedenle, bu hataları sık sık görüyorsanız, şu anda tek seçeneğiniz AndroidAPS ve Combo ile iyi çalıştığı bilinen başka bir telefon almaktır (yukarıya bakın).
- Pompadan bolus verilmesi her zaman zamanında algılanmayacaktır (AAPS pompaya her bağlandığında kontrol eder) ve en kötü durumda 20 dakika kadar sürebilir. 
- Pompadaki boluslar her zaman yüksek bir GBO'dan veya AAPS tarafından verilen bir bolustan önce kontrol edilir, ancak sınırlamalar nedeniyle AAPS, yanlış öncüller altında hesaplandığı için GBO/Bolus vermeyi reddedecektir. (-> Pompadan bolus vermeyin! Aşağıdaki [Kullanım](#usage) bölümüne bakın)
- Döngü GBO'ların kontrolünü üstlendiğinden, pompada herhangi bir GBO ayarlamaktan kaçınılmalıdır. Pompada yeni bir GBO'nın algılanması 20 dakika kadar sürebilir ve GBO'nın etkisi yalnızca algılandığı andan itibaren hesaba katılır, bu nedenle en kötü durumda, Aktif İnsüline yansıtılmayan 20 dakikalık bir GBO olabilir. 

## Kurulum

- 360 yapılandırma yazılımını kullanarak pompayı yapılandırın. 
- Yazılıma sahip değilseniz, lütfen Accu-Chek yardım hattınızla iletişime geçin. Genellikle kayıtlı kullanıcılara "360° Pompa Yapılandırma Yazılımı" ve bir SmartPix USB kızılötesi bağlantı cihazı içeren bir CD gönderirler (eğer varsa Realtyme cihazı da çalışır).
- **Gerekli ayarlar** (ekran görüntülerinde yeşil olarak işaretlenmiştir):
    
    - Menü yapılandırmasını "Standart" olarak ayarlayın/bırakın; bu yalnızca pompada desteklenen menüleri/eylemleri gösterecek ve desteklenmeyenleri (yayma/çoklu yayma bolus, çoklu bazal oranları) gizleyecektir, bu da kullanıldığında döngü işlevselliğinin kısıtlanmasına neden olur çünkü kullanıldığında döngüyü güvenli bir şekilde çalıştırmak mümkün değildir.
    - *Hızlı Bilgi Metni*'nin "HIZLI BİLGİ" olarak ayarlandığını doğrulayın (tırnak işaretleri olmadan, *İnsülin Pompası Seçenekleri* altında bulunur).
    - GBO *Maksimum Ayarı* %500 olarak ayarlayın
    - Disable *Signal End of Temporary Basal Rate*
    - Set TBR *Duration increment* to 15 min
    - Enable Bluetooth

- **Önerilen ayarlar** (ekran görüntülerinde mavi olarak işaretlenmiştir)
    
    - Rezervuar düşük alarmını istediğiniz gibi ayarlayın
    - Yazılımdaki hatalara karşı koruma sağlamak için tedavinize uygun bir maksimum bolus yapılandırın
    - Benzer şekilde, bir koruma olarak maksimum GBO süresini yapılandırın. Pompayı 3 saat ayırma seçeneği 3 saat için %0'ı ayarladığından, en az 3 saat bekleyin.
    - Pompadan bolus yapmayı önlemek için pompada tuş kilidini etkinleştirin, özellikle when the pump was used before and quick bolusing was a habit.
    - Ekran zaman aşımını ve menü zaman aşımını sırasıyla minimum 5.5 ve 5 olarak ayarlayın. Bu AAPS'nin hata durumlarından daha hızlı kurtulmasını sağlar ve bu tür hatalar sırasında meydana gelebilecek titreşim sayısını azaltır

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- AndroidAPS'yi [AndroidAPS viki](https://androidaps.readthedocs.io/) deki açıklandığı gibi yükleyin
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Bu noktada Combo eklentisinin eşleştirme işlemi sırasında ruffy ile çakışmasını önlemek için AndroidAPS'deki MDI eklentisini seçin, Combo eklentisini değil.
- [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy)'den git aracılığıyla ruffy'yi klonlayın. Şu anda birincil branch `combo` branch dir, sorun olması durumunda 'eşleştirme' branch'ini de deneyebilirsiniz (aşağıya bakın).
- Ruffy'yi derleyin ve kurun ve pompayı eşleştirmek için kullanın. Birden çok denemeden sonra çalışmazsa, `eşleştirme` branch geçin, pompayı eşleştirin ve ardından orijinal branch'e geri dönün. Pompa zaten eşleştirilmişse ve ruffy ile kontrol edilebiliyorsa, `combo` branch'in kurulması yeterlidir. Eşleştirme işleminin biraz hassas olduğunu (ancak yalnızca bir kez yapılması gerektiğini) ve birkaç deneme gerektirebileceğini unutmayın; istemleri hızlı bir şekilde onaylayın ve Bluetooth ayarlarından önce yeniden başlatırken pompa cihazını çıkarın. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. Pompayı eşleştirmede başarısız olursanız (10 denemeden sonra diyelim), pompada eşleştirmeyi onaylamadan önce (pompada telefonun adı görüntülendiğinde) 10 saniye kadar beklemeyi deneyin. Menü zaman aşımını 5sn üzeri olacak şekilde ayarladıysanız tekrar arttırmanız gerekir. Bazı kullanıcılar bunu yapmaları gerektiğini bildirdiler. Son olarak, yerel radyo paraziti durumunda bir odadan diğerine geçmeyi düşünün. En az bir kullanıcı, sadece oda değiştirerek eşleştirme problemleminin üstesinden geldi.
- AAPS ruffy kullanırken, ruffy uygulaması kullanılamaz. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- Pompa tamamen yeniyse, pompa üzerinde bir bolus yapmanız gerekir, böylece pompa bir ilk geçmiş girişi oluşturur.
- AAPS'de Combo eklentisini etkinleştirmeden önce profilinizin doğru ayarlandığından ve etkinleştirildiğinden(!) ve AAPS bazal profili pompayla senkronize edeceğinden bazal profilinizin güncel olduğundan emin olun. Ardından Combo eklentisini etkinleştirin. Pompayı başlatmak için Combo sekmesindeki *Yenile* düğmesine basın.
- Pompa **bağlantısı kesilmiş** durumdayken kurulumunuzu doğrulamak için, 15 dakika boyunca %500'lük bir GBO ayarlamak için AAPS'yi kullanın ve bolus verin. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Pompayla eşleştirme neden "ruffy" uygulamasıyla çalışmıyor?

Bunun birkaç olası nedeni olabilir. Aşağıdaki adımları deneyin:

1. Pompaya **yeni veya dolu bir pil** takın. Ayrıntılar için pil bölümüne bakın. Pompanın akıllı telefona çok yakın olduğundan emin olun.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Eşleştirme devam ederken telefonla bağlantı kuramamaları için diğer bluetooth cihazlarını kapatın veya kaldırın. Herhangi bir paralel bluetooth iletişimi veya bağlantı kurma istemi, eşleştirme sürecini bozabilir.

3. Pompanın Bluetooth menüsünde önceden bağlı cihazları silin: **BLUETOOTH AYARLARI / BAĞLANTI / KALDIR** **CİHAZ YOK** gösterilene kadar.

4. Bluetooth aracılığıyla telefona hali hazırda bağlı olan bir pompayı silin: Ayarlar / Bluetooth altında, eşleştirilmiş "**SpiritCombo**" cihazını kaldırın
5. Make sure, that AAPS not running in background the loop. APPS'de Döngüyü Devre Dışı Bırakın.
6. Bağlantıyı kurmak için [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) deposundaki '**pairing**' dalını kullanmayı deneyin 
7. Şimdi telefonda ruffy uygulamasını başlatın. Sıfırla'ya (Reset) basabilirsiniz! ve eski bağlantıyı kaldırın. Ardından **Bağlan!**'a basın.
8. Pompanın Bluetooth menüsünde **CİHAZ EKLE / BAĞLANTI EKLE** seçeneğine gidin. *BAĞLAN!**'a basın 
    - Sonraki üç adım zamanlamaya duyarlıdır, bu nedenle eşleştirme başarısız olursa farklı duraklamalar/hızlar denemeniz gerekebilir. Denemeden önce tam diziyi okuyun.

9. Şimdi Pompa, eşleştirme için seçilecek telefonun BT Adını göstermelidir. Burada Pompa üzerindeki seçim düğmesine basmadan önce en az 5sn beklemeniz önemlidir. Aksi takdirde Pompa, Eşleştirme talebini Telefona düzgün şekilde gönderemez.
    
    - Eğer Combo pompası 5s Ekran zaman aşımı olarak ayarlandıysa, 40s (orijinal ayar) ile test edebilirsiniz. From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Yeni bir **LineageOS ≥ 14.1** veya **Android ≥ 8.1 (Oreo)** çalıştırdığınızdan emin olun. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Reboot the phone.
15. Now you can restart AAPS loop.

## Kullanım

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).