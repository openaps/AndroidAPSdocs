# Accu Chek Combo Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

(Accu-Chek-Combo-Pump-hardware-requirements)=

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

- Yayma bolus ve çoklu yayma bolus desteklenmez (bunun yerine [Yayma Karbonhidratlar](../Usage/Extended-Carbs.md)'a bakın).
- Yalnızca bir bazal profil desteklenir.
- Pompada birden farklı bir bazal profil ayarlamak veya pompadan yayma bolus veya çoklu yayma boluslar iletmek, TBR'leri (geçici bazal oranları) etkiler ve döngü bu koşullar altında güvenli bir şekilde çalışamayacağından döngüyü 6 saat boyunca yalnızca düşük askıya alma moduna zorlar.
- Şu anda pompada saat ve tarihi ayarlamak mümkün değildir, bu nedenle [yaz saati değişiklikleri](Timezone-traveling-accu-chek-combo) manuel olarak yapılmalıdır. (Gece alarm vermemesi için, akşam telefonun otomatik saat güncellemesini devre dışı bırakabilir, pompa saati ile birlikte sabah tekrar değiştirebilirsiniz).
- Şu anda sadece 0,05 ila 10 Ü/st aralığındaki bazal oranlar desteklenmektedir. Bu aynı zamanda bir profili değiştirirken de geçerlidir, örn. %200'e çıkarken, en yüksek bazal oran iki katına çıkacağı için 5 Ü/s'i geçmemelidir. Benzer şekilde, %50'ye indirildiğinde, en düşük bazal oranı en az 0,10 Ü/s olmalıdır.
- Döngü, çalışan bir GBO'nin iptal edilmesini isterse, Combo bunun yerine 15 dakika için %90 veya %110'luk bir GBO ayarlayacaktır. Bunun nedeni, bir GBO'nın iptal edilmesinin pompada çok fazla titreşime neden olacak bir uyarıya neden olmasıdır.
- Ara sıra (birkaç günde bir) AAPS, kullanıcının daha sonra ilgilenmesi gereken bir GBO İPTAL EDİLDİ uyarısını otomatik olarak iptal etmede başarısız olabilir (uyarıyı AAPS'e aktarmak için AAPS'deki yenile düğmesine basabilir veya pompadaki uyarıyı onaylayabilirsiniz).
- Bluetooth bağlantı kararlılığı, farklı telefonlara göre değişir ve artık pompaya bağlantının kurulmadığı durumlarda "pompaya erişilemiyor" uyarılarına neden olur. 
- Bu hata oluşursa, Bluetooth'un etkinleştirildiğinden emin olun, bunun kesintili bir sorundan kaynaklanıp kaynaklanmadığını görmek için Combo sekmesindeki Yenile düğmesine basın ve hala bağlantı kurulmazsa, genellikle bunu düzeltmesi gereken telefonu yeniden başlatın. 
- Yeniden başlatmanın yardımcı olamayacağı başka bir sorun, pompa telefondan tekrar bağlantıları kabul etmeden önce pompadaki bir butona (pompanın Bluetooth'unu sıfırlar) basılması gerektiğidir. 
- Bu noktada bu sorunlardan herhangi birini giderebilmek için yapılabilecek çok az şey var. Bu nedenle, bu hataları sık sık görüyorsanız, şu anda tek seçeneğiniz AndroidAPS ve Combo ile iyi çalıştığı bilinen başka bir telefon almaktır (yukarıya bakın).
- Pompadan bolus verilmesi her zaman zamanında algılanmayacaktır (AAPS pompaya her bağlandığında kontrol eder) ve en kötü durumda 20 dakika kadar sürebilir. 
- Pompadaki boluslar her zaman yüksek bir GBO'dan veya AAPS tarafından verilen bir bolustan önce kontrol edilir, ancak sınırlamalar nedeniyle AAPS, yanlış öncüller altında hesaplandığı için GBO/Bolus vermeyi reddedecektir. (-> Pompadan bolus vermeyin! See chapter [Usage](Accu-Chek-Combo-Pump-usage) below)
- Döngü GBO'ların kontrolünü üstlendiğinden, pompada herhangi bir GBO ayarlamaktan kaçınılmalıdır. Pompada yeni bir GBO'nın algılanması 20 dakika kadar sürebilir ve GBO'nın etkisi yalnızca algılandığı andan itibaren hesaba katılır, bu nedenle en kötü durumda, Aktif İnsüline yansıtılmayan 20 dakikalık bir GBO olabilir. 

## Kurulum

- 360 yapılandırma yazılımını kullanarak pompayı yapılandırın. 
- Yazılıma sahip değilseniz, lütfen Accu-Chek yardım hattınızla iletişime geçin. Genellikle kayıtlı kullanıcılara "360° Pompa Yapılandırma Yazılımı" ve bir SmartPix USB kızılötesi bağlantı cihazı içeren bir CD gönderirler (eğer varsa Realtyme cihazı da çalışır).
- **Gerekli ayarlar** (ekran görüntülerinde yeşil olarak işaretlenmiştir):
    
    - Menü yapılandırmasını "Standart" olarak ayarlayın/bırakın; bu yalnızca pompada desteklenen menüleri/eylemleri gösterecek ve desteklenmeyenleri (yayma/çoklu yayma bolus, çoklu bazal oranları) gizleyecektir, bu da kullanıldığında döngü işlevselliğinin kısıtlanmasına neden olur çünkü kullanıldığında döngüyü güvenli bir şekilde çalıştırmak mümkün değildir.
    - *Hızlı Bilgi Metni*'nin "HIZLI BİLGİ" olarak ayarlandığını doğrulayın (tırnak işaretleri olmadan, *İnsülin Pompası Seçenekleri* altında bulunur).
    - GBO *Maksimum Ayarı* %500 olarak ayarlayın
    - *Geçici Bazal Oranının Sonu Sinyali*'ni Devre Dışı Bırakın
    - GBO *Süre artışını* 15 dk olarak ayarlayın
    - Bluetooth'u Etkinleştirin

- **Önerilen ayarlar** (ekran görüntülerinde mavi olarak işaretlenmiştir)
    
    - Rezervuar düşük alarmını istediğiniz gibi ayarlayın
    - Yazılımdaki hatalara karşı koruma sağlamak için tedavinize uygun bir maksimum bolus yapılandırın
    - Benzer şekilde, bir koruma olarak maksimum GBO süresini yapılandırın. Pompayı 3 saat ayırma seçeneği 3 saat için %0'ı ayarladığından, en az 3 saat bekleyin.
    - Pompadan bolus yapmayı önlemek için pompada tuş kilidini etkinleştirin, özellikle pompa daha önce manuel kullanıldığında hızlı bolus yapmak bir alışkanlıktır.
    - Ekran zaman aşımını ve menü zaman aşımını sırasıyla minimum 5.5 ve 5 olarak ayarlayın. Bu AAPS'nin hata durumlarından daha hızlı kurtulmasını sağlar ve bu tür hatalar sırasında meydana gelebilecek titreşim sayısını azaltır

![Kullanıcı menüsü ayarlarının ekran görüntüsü](../images/combo/combo-menu-settings.png)

![GBO ayarlarının ekran görüntüsü](../images/combo/combo-tbr-settings.png)

![Bolus ayarlarının ekran görüntüsü](../images/combo/combo-bolus-settings.png)

![İnsülin rrezervuar ayarlarının ekran görüntüsü](../images/combo/combo-insulin-settings.png)

- AndroidAPS'yi [AndroidAPS viki](https://androidaps.readthedocs.io/) deki açıklandığı gibi yükleyin
- AndroidAPS'in nasıl kurulacağını anlamak için viki'yi okuduğunuzdan emin olun.
- Bu noktada Combo eklentisinin eşleştirme işlemi sırasında ruffy ile çakışmasını önlemek için AndroidAPS'deki MDI eklentisini seçin, Combo eklentisini değil.
- [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy)'den git aracılığıyla ruffy'yi klonlayın. Şu anda birincil branch `combo` branch dir, sorun olması durumunda 'eşleştirme' branch'ini de deneyebilirsiniz (aşağıya bakın).
- Ruffy'yi derleyin ve kurun ve pompayı eşleştirmek için kullanın. Birden çok denemeden sonra çalışmazsa, `eşleştirme` branch geçin, pompayı eşleştirin ve ardından orijinal branch'e geri dönün. Pompa zaten eşleştirilmişse ve ruffy ile kontrol edilebiliyorsa, `combo` branch'in kurulması yeterlidir. Eşleştirme işleminin biraz hassas olduğunu (ancak yalnızca bir kez yapılması gerektiğini) ve birkaç deneme gerektirebileceğini unutmayın; istemleri hızlı bir şekilde onaylayın ve Bluetooth ayarlarından önce yeniden başlatırken pompa cihazını çıkarın. Denenecek başka bir seçenek de eşleştirme işlemini başlattıktan sonra Bluetooth menüsüne gitmektir.(bu menü görüntülendiği sürece telefonun Bluetooth'unun keşfedilebilir olmasını sağlar) ve pompa yetkilendirme kodunu görüntülediğinde, pompadaki eşleştirmeyi onayladıktan sonra ruffy'ye geri dönün. Pompayı eşleştirmede başarısız olursanız (10 denemeden sonra diyelim), pompada eşleştirmeyi onaylamadan önce (pompada telefonun adı görüntülendiğinde) 10 saniye kadar beklemeyi deneyin. Menü zaman aşımını 5sn üzeri olacak şekilde ayarladıysanız tekrar arttırmanız gerekir. Bazı kullanıcılar bunu yapmaları gerektiğini bildirdiler. Son olarak, yerel radyo paraziti durumunda bir odadan diğerine geçmeyi düşünün. En az bir kullanıcı, sadece oda değiştirerek eşleştirme problemleminin üstesinden geldi.
- AAPS ruffy kullanırken, ruffy uygulaması kullanılamaz. En kolay yol sadece eşleştirme işleminden sonra telefonu yeniden başlatın ve AAPS'in arka planda ruffy'yi başlatmasına izin verin.
- Pompa tamamen yeniyse, pompa üzerinde bir bolus yapmanız gerekir, böylece pompa bir ilk geçmiş girişi oluşturur.
- AAPS'de Combo eklentisini etkinleştirmeden önce profilinizin doğru ayarlandığından ve etkinleştirildiğinden(!) ve AAPS bazal profili pompayla senkronize edeceğinden bazal profilinizin güncel olduğundan emin olun. Ardından Combo eklentisini etkinleştirin. Pompayı başlatmak için Combo sekmesindeki *Yenile* düğmesine basın.
- Pompa **bağlantısı kesilmiş** durumdayken kurulumunuzu doğrulamak için, 15 dakika boyunca %500'lük bir GBO ayarlamak için AAPS'yi kullanın ve bolus verin. Pompanın şimdi çalışan bir GBO'su ve geçmişte bolus olması gerekir. AAPS ayrıca aktif GBO'yu ve iletilen bolusu göstermelidir.

(Accu-Chek-Combo-Pump-why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Pompayla eşleştirme neden "ruffy" uygulamasıyla çalışmıyor?

Bunun birkaç olası nedeni olabilir. Aşağıdaki adımları deneyin:

1. Pompaya **yeni veya dolu bir pil** takın. Ayrıntılar için pil bölümüne bakın. Pompanın akıllı telefona çok yakın olduğundan emin olun.

![Combo telefonun yanında olmalı](../images/Combo_next_to_Phone.png)

2. Eşleştirme devam ederken telefonla bağlantı kuramamaları için diğer bluetooth cihazlarını kapatın veya kaldırın. Herhangi bir paralel bluetooth iletişimi veya bağlantı kurma istemi, eşleştirme sürecini bozabilir.

3. Pompanın Bluetooth menüsünde önceden bağlı cihazları silin: **BLUETOOTH AYARLARI / BAĞLANTI / KALDIR** **CİHAZ YOK** gösterilene kadar.

4. Bluetooth aracılığıyla telefona hali hazırda bağlı olan bir pompayı silin: Ayarlar / Bluetooth altında, eşleştirilmiş "**SpiritCombo**" cihazını kaldırın
5. AAPS'in döngüyü arka planında çalıştırmadığından emin olun. APPS'de Döngüyü Devre Dışı Bırakın.
6. Bağlantıyı kurmak için [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) deposundaki '**pairing**' dalını kullanmayı deneyin 
7. Şimdi telefonda ruffy uygulamasını başlatın. Sıfırla'ya (Reset) basabilirsiniz! ve eski bağlantıyı kaldırın. Ardından **Bağlan!**'a basın.
8. Pompanın Bluetooth menüsünde **CİHAZ EKLE / BAĞLANTI EKLE** seçeneğine gidin. *BAĞLAN!**'a basın 
    - Sonraki üç adım zamanlamaya duyarlıdır, bu nedenle eşleştirme başarısız olursa farklı duraklamalar/hızlar denemeniz gerekebilir. Denemeden önce tam diziyi okuyun.

9. Şimdi Pompa, eşleştirme için seçilecek telefonun BT Adını göstermelidir. Burada Pompa üzerindeki seçim düğmesine basmadan önce en az 5sn beklemeniz önemlidir. Aksi takdirde Pompa, Eşleştirme talebini Telefona düzgün şekilde gönderemez.
    
    - Eğer Combo pompası 5s Ekran zaman aşımı olarak ayarlandıysa, 40s (orijinal ayar) ile test edebilirsiniz. Deneyimlenen pompanın telefonda görünme süresi, pompadan telefonun seçilmesinden itibaren 5-10s civarıdır. Diğer birçok durumda, eşleştirme başarız olur ve zaman aşımına uğrar. Daha sonra, AAPS Combo ayarları ve bağlantıları hızlandırmak için tekrar 5s'ye ayarlamalısınız.
    - Pompa, telefonu bir eşleştirme cihazı olarak göstermiyorsa, telefonunuzun Bluetooth yığını muhtemelen pompayla uyumlu değildir. Yeni bir **LineageOS ≥ 14.1** veya **Android ≥ 8.1 (Oreo)** çalıştırdığınızdan emin olun. Mümkünse başka bir akıllı telefon deneyin. Halihazırda başarıyla kullanılan akıllı telefonların listesini [AAPS Telefonları] altında bulabilirsiniz. (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Bazen telefon, daha sonra pompada gösterilen 10 haneli PIN ile ilgili olmayan (tipik olarak 4 haneli) bir bluetooth PIN numarası ister. Genellikle, ruffy bu PIN'i otomatik olarak ayarlar, ancak zamanlama sorunları nedeniyle bu her zaman çalışmaz. Pompada herhangi bir kod gösterilmeden önce telefonda Bluetooth eşleştirme PIN'i isteği görünürse, PIN olarak **}gZ='GD?gj2r|B}>** girmeniz gerekir. Bu en kolay şekilde eşleştirme adımları başlamadan önce bu 16 karakterlik metni panoya kopyalayıp bu adımda iletişim kutusuna yapıştırarak yapılır. Ayrıntılar için ilgili [Github sorununa](https://github.com/MilosKozak/ruffy/issues/14) bakın.

11. Daha sonra pompa 10 haneli bir güvenlik kodu göstermeli ve telefonda kodun girileceği Ruffy ekranı görünmelidir. Öyleyse kodu Ruffy'ye girin ve başlamaya hazır olun.
12. Eşleştirme başarılı olmadıysa ve pompada bir zaman aşımı yaşadıysanız, işlemi sıfırdan yeniden başlatmanız gerekecektir.
13. Ruffy uygulamasını oluşturmak için ''Pairing' dalını kullandıysanız, şimdi bunun üzerine 'combo' dalından sürüm derlemesini yükleyin. Tüm ayarları ve verileri saklayabilmek için uygulamanın iki sürümünü imzalarken aynı anahtarları kullandığınızdan emin olun, çünkü bunlar bağlantı özelliklerini de içerir.
14. Telefonu yeniden başlatın.
15. AAPS programını yeniden başlatabilirsiniz.

(Accu-Chek-Combo-Pump)=

## Kullanım

- Bunun bir ürün olmadığını unutmayın, özellikle başlangıçta kullanıcının sistemi, sınırlamaları ve nasıl hata yapabileceğini izlemesi ve anlaması gerekir. Kullanan kişi sistemi tam olarak anlayamamışsa bu sistemi KULLANMAMANIZ şiddetle tavsiye edilir.
- AndroidAPS'in temel aldığı döngü algoritmasını anlamak için https://openaps.org OpenAPS dokümantasyonunu okuyun.
- AndroidAPS hakkında bilgi edinmek ve anlamak için çevrimiçi dokümantasyonu okuyun https://androidaps.readthedocs.io/
- Bu entegrasyon, Combo ile birlikte gelen kumandanın sağladığı aynı işlevselliği kullanır. Kumanda, pompa ekranını yansıtmaya ve düğme basışlarını pompaya iletmeye izin verir. Pompaya bağlantı ve bu yönlendirme, ruffy uygulaması tarafından yapılır. Bir `scripter` bileşeni ekranı okur ve bolus, GBO vb. girişlerin doğru şekilde işlendiğini kontrol eder ve otomatikleştirir. AAPS daha sonra döngü komutlarını uygulamak ve bolusları yönetmek için komut dosyası oluşturucuyla etkileşime girer. Bu modun bazı kısıtlamaları vardır: nispeten yavaştır (ancak ne için kullanıldığına göre yeterince hızlıdır) ve bir GBO (geçici bazal oran) ayarlamak veya bolus vermek pompanın titreşmesine neden olur.
- Combo'nun AndroidAPS ile entegrasyonu, tüm girişlerin AndroidAPS üzerinden yapıldığı varsayımıyla tasarlanmıştır. Doğrudan pompaya girilen boluslar AAPS tarafından algılanır, ancak AndroidAPS'in böyle bir bolustan haberdar olması 20 dakika kadar sürebilir. Doğrudan pompaya iletilen bolusların okunması bir güvenlik özelliğidir ve düzenli olarak kullanılması amaçlanmamıştır (döngü karbonhidrat bilgisi gerektirir, pompaya girilemez, bu da tüm girişlerin AndroidAPS'de yapılmasının bir başka nedenidir). 
- Pompa üzerinden bir GBO (geçici bazal oran) ayarlamayın veya iptal etmeyin. Döngü, GBO'nun kontrolünü programda üstlenir. Aksi takdirde kullanıcı tarafından pompada ayarlanan bir GBO'nun başlangıç zamanını belirlemek mümkün olmadığından güvenilir şekilde çalışamaz.
- Pompanın ilk bazal oran profili, uygulama başlangıcında okunur ve AAPS tarafından güncellenir. Bazal oran pompada manuel olarak değiştirilmemelidir, ancak bir güvenlik önlemi olarak algılanacak ve düzeltilecektir (varsayılan olarak güvenlik önlemlerine güvenmeyin, bu pompada istenmeyen bir değişikliği algılamak içindir).
- Pompa önceki standart kullanımında "hızlı bolus" özelliğinin kullanılması bir alışkanlık olduğu ve pompadan bolus yapmayı önlemek için pompada tuş kilidinin etkinleştirilmesi önerilir. Ayrıca, tuş kilidi etkinleştirildiğinde, yanlışlıkla bir tuşa basılması ENGELLENECEK ve AAPS ile pompa arasındaki aktif iletişim kesilmeyecektir.
- Bolus yapma veya bir GBO ayarlama sırasında pompada bir BOLUS/GBO İPTAL EDİLDİ uyarısı başladığında, bu pompa ile telefon arasındaki zaman zaman meydana gelen bir bağlantı kesilmesinden kaynaklanır. AAPS yeniden bağlanmaya ve uyarıyı onaylamaya çalışacak ve ardından son eylemi yeniden deneyecektir (güvenlik nedenlerinden dolayı boluslar yeniden denenmez). Öyleyse, AAPS genellikle 30 saniye içinde otomatik olarak onaylayacağından buna benzer bir alarm yoksayılabilir.(iptal etmek sorun değildir, ancak mevcut etkin eylemin, pompaya yeniden bağlanmadan önce pompanın ekranının kapanmasını beklemesi gereklidir). Pompanın alarmı devam ederse, otomatik doğrulama başarısız olur ve bu durumda kullanıcının alarmı manuel olarak onaylaması gerekir.
- Bolus sırasında düşük rezervuar veya düşük pil alarmı verildiğinde, bunlar onaylanır ve AAPS'de bir bildirim olarak gösterilir. Pompaya bağlantı açık değilken oluşurlarsa, Combo sekmesine gidip Yenile düğmesine basmak, bu uyarıları onaylayarak devralacak ve AAPS'de bir bildirim gösterecektir.
- AAPS, GBO İPTAL EDİLDİ uyarısını onaylayamadığında veya farklı bir nedenle uyarı verildiğinde, Combo sekmesinde Yenile'ye basmak bir bağlantı kurar, uyarıyı onaylar ve AAPS'de bunun için bir bildirim gösterir. Bu uyarılar zararsız olduğundan, bu güvenli bir şekilde yapılabilir - bir sonraki döngü yinelemesi sırasında uygun bir GBO yeniden ayarlanacaktır.
- Pompa tarafından iletilen diğer tüm uyarılar için: pompaya bağlanmak, Combo sekmesinde uyarı mesajını gösterecektir, örn. "Durum: E4: Tıkanma" ve ayrıca ana ekranda bir bildirim gösterir. Bir hata acil bir bildirime neden olur. AAPS, pompadaki ciddi hataları hiçbir zaman onaylamaz, ancak kullanıcının harekete geçmesi gereken kritik bir durum hakkında bilgilendirildiğinden emin olmak için pompanın titreşmesine ve çalmasına izin verir.
- Eşleştirmeden sonra ruffy doğrudan kullanılmamalıdır. (AAPS gerektiğinde arka planda başlatacaktır) Çünkü AAPS ile aynı anda ruffy kullanımı desteklenmemektedir.
- AAPS ve pompa iletişim kurarken (ruffy kullanarak) AAPS çökerse (veya hata ayıklayıcı tarafından durdurulursa), ruffy'yi kapatmaya zorlamak gerekebilir. AAPS'yi yeniden başlatmak tekrar ruffy'yi başlatacaktır. Bir uygulamayı nasıl zorla kapatacağınızı bilmiyorsanız, telefonu yeniden başlatmak da bunu çözmenin kolay bir yoludur.
- AAPS pompa ile iletişim kurarken pompa üzerinde herhangi bir düğmeye basmayın (pompada Bluetooth logosu görülür).