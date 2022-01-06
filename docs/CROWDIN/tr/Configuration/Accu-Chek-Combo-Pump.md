# Accu Chek Combo Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

## Donanım Gereksinimleri

* Roche Accu-Chek Combo pompa(tüm pompa yazılımlarında çalışır)
* Pompayı yapılandırmak için 360 Yapılandırma Yazılımı ile birlikte bir Smartpix veya Realtyme cihazı. (Roche, Smartpix cihazlarını ve konfigürasyon yazılımını talep üzerine müşterilerine ücretsiz olarak göndermektedir.)
* Uyumlu bir telefon: LineageOS 14.1 (eski adıyla CyanogenMod) veya en az Android 8.1 (Oreo) çalıştıran bir telefona sahip bir Android telefon. AndroidAPS 3.0'dan itibaren Android 9 zorunludur. Ayrıntılar için [sürüm notlarına](https://androidaps.readthedocs.io/tr/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) bakın.
* LineageOS 14.1 ile Combo pompayı eşleştirmek için gereken değişiklik Haziran 2017'de tanıtıldığından en az bu sürüm veya daha üst sürümleri olmalıdır. 
* Telefonların listesini [AAPS Telefonlar](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) sayfasında bulabilirsiniz.
* Lütfen bunun tüm telefonların bir listesi olmadığını ve kişisel kullanıcı deneyimini yansıttığını unutmayın. Siz de kendi deneyiminizle katılmaya ve böylece başkalarına yardım etmeye teşvik ediliyorsunuz (bu projeler tamamen ileriye dönük ödeme yapılmasıyla ilgilidir).
* Android 8.1, Combo ile iletişime izin verirken, 8.1'de AAPS ile ilgili hala sorunlar bulunmaktadır.
* İleri düzey kullanıcılar için, eşleştirmeyi root'lu bir telefonda yapabilir ve yine rootlu ruffy/AAPS ile kullanan bir telefona aktarabilirler. Bu işlem Android < 8.1 olan telefonların kullanılmasındaki sorunları kaldırabilir, ancak geniş çapta test edilmemiştir: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Sınırlamalar

* Yayma bolus ve çoklu yayma bolus desteklenmez (bunun yerine [Yayma Karbonhidratlar](../Usage/Extended-Carbs.rst)'a bakın).
* Yalnızca bir bazal profil desteklenir.
* Pompada birden farklı bir bazal profil ayarlamak veya pompadan yayma bolus veya çoklu yayma boluslar iletmek, TBR'leri (geçici bazal oranları) etkiler ve döngü bu koşullar altında güvenli bir şekilde çalışamayacağından döngüyü 6 saat boyunca yalnızca düşük askıya alma moduna zorlar.
* Şu anda pompada saat ve tarihi ayarlamak mümkün değildir, bu nedenle [yaz saati değişiklikleri](../Usage/Timezone-traveling#accu-chek-combo) manuel olarak yapılmalıdır. (Gece alarm vermemesi için, akşam telefonun otomatik saat güncellemesini devre dışı bırakabilir, pompa saati ile birlikte sabah tekrar değiştirebilirsiniz).
* Currently only basal rates in the range of 0.05 to 10 U/h are supported. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. Similarly, when reducing to 50%, the lowest basal rate must be at least 0.10 U/h.
* If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
* Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
* Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 
* If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. 
* There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
* There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
* Issuing a bolus from the pump will not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. 
* Boluses on the pump are always checked before a high TBR or a bolus issued by AAPS but due to the limitations AAPS will then refuse to issue the TBR/Bolus as it was calculated under false premises. (-> Don't bolus from the Pump! See chapter [Usage](#usage) below)
* Setting a TBR on the pump is to be avoided since the loop assumes control of TBRs. Detecting a new TBR on the pump might take up to 20 minutes and the TBR's effect will only be accounted from the moment it is detected, so in the worst case there might be 20 minutes of a TBR that is not reflected in IOB. 

## Setup

* Configure the pump using 360 config software. 
* If you do not have the software, please contact your Accu-Chek hotline. They usually send registered users a CD with the "360° Pump Configuration Software" and a SmartPix USB-infrared connection device (the Realtyme device also works if you have that).
* **Required settings** (marked green in screenshots):
    
    * Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    * Verify the *Quick Info Text* is set to "QUICK INFO" (without the quotes, found under *Insulin Pump Options*).
    * Set TBR *Maximum Adjustment* to 500%
    * Disable *Signal End of Temporary Basal Rate*
    * Set TBR *Duration increment* to 15 min
    * Enable Bluetooth

* **Recommended settings** (marked blue in screenshots)
    
    * Set low cartridge alarm to your liking
    * Configure a max bolus suited for your therapy to protect against bugs in the software
    * Similarly, configure maximum TBR duration as a safeguard. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    * Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
    * Set display timeout and menu timeout to the minimum of 5.5 and 5 respectively. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

* Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.md).
* Make sure to read the docs to understand how to setup AndroidAPS.
* Select the **MDI plugin** in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
* Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
* Install ruffy and use it to pair the pump.
    
    * If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch.
    * Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. 
    * Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code.
    * If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). 
    * If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. 
    * Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.

* When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.

* If the pump is completely new, you need to **do one bolus on the pump**, so the pump creates a first history entry.
* Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump.
* Then activate the [Combo plugin](../Configuration/Config-Builder#pump). 
* Press the *Refresh* button on the Combo tab to initialize the pump.
* To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus.
* The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump not work with the app "ruffy"?

There are several possible reasons. Try the following steps:

1. Insert a **fresh or full battery** into the pump. Look at the battery section for details. Make sure that the pump is very close to the smartphone.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.
3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.
4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Make sure, that AAPS not running in background the loop. Disable Loop in AAPS.
6. Şimdi telefonda ruffy uygulamasını başlatın. Sıfırla'ya (Reset) basabilirsiniz! ve eski eşleştirmeleri kaldırın. Ardından Bağlan'a basın!
7. Pompanın Bluetooth menüsünde **CİHAZ EKLE / BAĞLANTI EKLE** seçeneğine gidin. *BAĞLAN!**'a basın
    
    * Adım 6 ve 7 kısa bir süre içinde yapılmalıdır.

8. Şimdi Pompa, eşleştirme için seçilecek telefonun BT Adını göstermelidir. Burada Pompa üzerindeki seçim düğmesine basmadan önce en az 5sn beklemeniz önemlidir. Aksi takdirde Pompa, Eşleştirme talebini Telefona düzgün şekilde göndermez.

* Combo Pompa ekran zaman aşımı 5s olarak ayarlanmışsa, 40s (orijinal ayar) ile test edebilirsiniz. Deneyimlenen pompanın telefonda görünme süresi, pompadan telefonun seçilmesinden itibaren 5-10s civarıdır. Diğer birçok durumda, eşleştirme başarız olur ve zaman aşımına uğrar. 
* Daha sonra, AAPS Combo ayarları için ekran zaman aşımını tekrar 5s'ye ayarlamalısınız.
* Pompa, telefonu bir eşleştirme cihazı olarak göstermiyorsa, telefonunuzun Bluetooth yığını muhtemelen pompayla uyumlu değildir. Yeni bir **LineageOS ≥ 14.1** veya **Android ≥ 8.1 (Oreo)** çalıştırdığınızdan emin olun. Mümkünse başka bir akıllı telefon deneyin. Halihazırda başarıyla kullanılan akıllı telefonların listesini [AAPS Telefonları] altında bulabilirsiniz. (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit). 

9. Bir sonraki adımda, Pompada 10 haneli bir güvenlik kodu ve telefonda kodun girileceği Ruffy ekranı görünmelidir. Öyleyse kodu Ruffy'ye girin ve başlamaya hazır olun.
10. Telefonu yeniden başlatın.
11. AAPS programını yeniden başlatabilirsiniz.

## Kullanım

* Bunun bir ürün olmadığını unutmayın, özellikle başlangıçta kullanıcının sistemi, sınırlamaları ve nasıl hata yapabileceğini izlemesi ve anlaması gerekir. 
* Kullanan kişi sistemi tam olarak anlayamamışsa bu sistemi KULLANMAMANIZ şiddetle tavsiye edilir.
* AndroidAPS'nin temel aldığı döngü algoritmasını anlamak için https://openaps.org OpenAPS dokümantasyonunu okuyun.
* AndroidAPS hakkında bilgi edinmek ve anlamak için [AAPS dokümantasyonunu](../index.rst) okuyun.
* Bu entegrasyon, Combo ile birlikte gelen kumandanın sağladığı aynı işlevselliği kullanır.
* Kumanda, pompa ekranını yansıtmaya ve düğme basışlarını pompaya iletmeye izin verir. 
* Pompaya bağlantı ve bu yönlendirme, ruffy uygulaması tarafından yapılır. 
* Bir 'scripter' bileşeni ekranı okur ve bolus, TBR vb. girşlerini ve girişlerin doğru şekilde işlendiğini kontrol eder ve otomatikleştirir.
* AAPS daha sonra döngü komutlarını uygulamak ve bolusları yönetmek için komut dosyası oluşturucuyla etkileşime girer.
* Bu modun bazı kısıtlamaları vardır: nispeten yavaştır (ancak ne için kullanıldığına göre yeterince hızlıdır) ve bir GBO (geçici bazal oran) ayarlamak veya bolus vermek pompanın titreşmesine neden olur.
* Combo'nun AndroidAPS ile entegrasyonu, tüm girişlerin AndroidAPS üzerinden yapıldığı varsayımıyla tasarlanmıştır. Doğrudan pompaya girilen boluslar AAPS tarafından algılanır, ancak AndroidAPS'nin böyle bir bolustan haberdar olması 20 dakika kadar sürebilir. 
* Doğrudan pompaya iletilen bolusların okunması bir güvenlik özelliğidir ve düzenli olarak kullanılması amaçlanmamıştır (döngü karbonhidrat bilgisi gerektirir, pompaya girilemez, bu da **tüm girişlerin AndroidAPS'de yapılmasının** bir başka nedenidir). 
* Pompa üzerinden bir GBO (geçici bazal oran) ayarlamayın veya iptal etmeyin. Döngü, GBO'nun kontrolünü programda üstlenir. Aksi takdirde kullanıcı tarafından pompada ayarlanan bir GBO'nun başlangıç zamanını belirlemek mümkün olmadığından güvenilir şekilde çalışamaz.
* Pompanın ilk bazal oran profili, uygulama başlangıcında okunur ve AAPS tarafından güncellenir.
* Bazal oran pompada manuel olarak değiştirilmemelidir, ancak bir güvenlik önlemi olarak algılanacak ve düzeltilecektir (varsayılan olarak güvenlik önlemlerine güvenmeyin, bu pompada istenmeyen bir değişikliği algılamak içindir).
* Pompa önceki standart kullanımında "hızlı bolus" özelliğinin kullanılması bir alışkanlık olduğu ve pompadan bolus yapmayı önlemek için pompada tuş kilidinin etkinleştirilmesi önerilir.
* Ayrıca, tuş kilidi etkinleştirildiğinde, yanlışlıkla bir tuşa basılması ENGELLENECEK ve AAPS ile pompa arasındaki aktif iletişim kesilmeyecektir.
* When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (**boluses are NOT retried** for safety reasons). 
* Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). 
* If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
* When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. 
* If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
* When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
* For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen.
* An error will raise an urgent notification. 
* AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
* After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
* If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again.
* Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
* Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).