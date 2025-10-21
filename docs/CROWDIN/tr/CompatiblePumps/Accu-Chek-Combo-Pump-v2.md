# Accu Chek Combo Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

## Donanım ve yazılım gereksinimleri

* Roche Accu-Chek Combo pompa(tüm pompa yazılımlarında çalışır).
* Pompayı yapılandırmak için 360 Yapılandırma Yazılımı ile birlikte bir Smartpix veya Realtyme cihazı. (Roche, Smartpix cihazlarını ve konfigürasyon yazılımını talep üzerine müşterilerine ücretsiz olarak göndermektedir.)
* Uyumlu bir telefon. Android 9 (Pie) veya daha üzeri zorunludur. LineageOS kullanıyorsanız desteklenen minimum sürüm 16.1'dir. See [release notes](#maintenance-android-version-aaps-version) for details.
* Telefonunuzda yüklü olan AndroidAPS uygulaması.

Bazı telefonlar, Bluetooth desteğinin kalitesine, çok agresif güç tasarrufu mantığına sahip olup olmadıklarına bağlı olarak diğerlerinden daha iyi çalışabilir. A list of phones can be found in the [AAPS Phones](#Phones-list-of-tested-phones) document. Lütfen bunun tüm telefonların bir listesi olmadığını ve kişisel kullanıcı deneyimini yansıttığını unutmayın. Siz de kendi deneyiminizle katılmaya ve böylece başkalarına yardım etmeye teşvik ediliyorsunuz (bu projeler tamamen ileriye dönük ödeme yapılmasıyla ilgilidir).

(combov2-before-you-begin)=
## Başlamadan önce

**ÖNCE GÜVENLİK** - bu işlemi bir hatadan kurtulamayacağınız bir ortamda denemeyin. 360 Konfigürasyon Yazılımı ile birlikte Smartpix / Realtyme cihazınızı el altında bulundurun. Her şeyi ayarlamak ve her şeyin düzgün çalışıp çalışmadığını kontrol etmek için yaklaşık bir saat ayırın.

Aşağıdaki sınırlamaların farkında olun:

* Extended bolus and multiwave bolus are currently not supported (you can use [Extended Carbs](../DailyLifeWithAaps/ExtendedCarbs.md) instead).
* Yalnızca bir temel profil (ilki) desteklenir.
* Pompadaki o anda etkin olan profil, profil no.1 değilse döngü devre dışı bırakılır. Bu profil no.1 aktif olana kadar devam eder. Aktif yapıldığında ve AAPS bir dahaki sefere bağlandığında (ya bir süre sonra kendi kendine ya da kullanıcı combov2 kullanıcı arayüzünde Yenile düğmesine bastığı için), profil no.1 geçerli olur ve döngüyü tekrar etkinleştirebilirsiniz.
* Döngü çalışan bir GBO'nun iptal edilmesini talep ederse, Combo bunun yerine 15 dakika boyunca %90 veya %110'luk bir GBO ayarlayacaktır. Bunun nedeni, bir GBO'nun fiilen iptal edilmesinin pompa üzerinde çok fazla titreşime neden olan bir uyarıya neden olması ve bu titreşimlerin devre dışı bırakılamamasıdır.
* Bluetooth bağlantı kararlılığı, farklı telefonlara göre değişir ve artık pompaya bağlantının kurulmadığı durumlarda "pompaya erişilemiyor" uyarılarına neden olur. Bu hata oluşursa, Bluetooth'un etkinleştirildiğinden emin olun, bunun kesintili bir sorundan kaynaklanıp kaynaklanmadığını görmek için Combo sekmesindeki Yenile düğmesine basın ve hala bağlantı kurulmazsa, genellikle bunu düzeltmesi gereken telefonu yeniden başlatın.
* Yeniden başlatmanın yardımcı olamayacağı başka bir sorun, pompa telefondan tekrar bağlantıları kabul etmeden önce pompadaki bir butona (pompanın Bluetooth'unu sıfırlar) basılması gerektiğidir.
* Döngü GBO'ların kontrolünü üstlendiğinden, pompada herhangi bir GBO ayarlamaktan kaçınılmalıdır. Pompada yeni bir GBO'nın algılanması 20 dakika kadar sürebilir ve GBO'nın etkisi yalnızca algılandığı andan itibaren hesaba katılır, bu nedenle en kötü durumda, Aktif İnsüline yansıtılmayan 20 dakikalık bir GBO olabilir.

Ayrı Ruffy uygulamasına bağlı olan eski Combo sürücüsünü kullanıyorsanız ve bu sürücüye geçmek istiyorsanız, eşleştirmenin yeniden yapılması gerektiğini unutmayın - Ruffy ve yeni Combo sürücüsü eşleştirme bilgilerini paylaşamaz. Ayrıca, Ruffy'nin _çalışmadığından_ emin olun. Şüpheniz varsa, durum menüsünü açmak için Ruffy uygulama simgesine uzun basın. Bu menüde, "Uygulama Bilgisi" üzerine basın. Yeni açılan kullanıcı arayüzünde "Zorla durdur"a basın. Bu şekilde, etkin bir Ruffy sürücüsünün yeni sürücüye müdahale etmemesi sağlanır.

Ayrıca, eski sürücüden geçiş yapıyorsanız, yeni sürücünün bir bolus komutunu Combo'dan tamamen farklı ve çok daha hızlı bir şekilde ilettiğinin farkında olun, bu nedenle dozaj ne olursa olsun bir bolus hemen başladığında şaşırmayın. Ayrıca, Ruffy eşleştirme ve bağlantı sorunlarıyla ilgili genel öneriler, ipuçları ve püf noktaları vb. burada geçerli değildir, çünkü bu eskisiyle hiçbir kodu ortak olmayan tamamen yeni bir sürücüdür.

Bu yeni sürücü şu anda Combo'da aşağıdaki dilleri desteklemek için yazılmıştır. (Bunun AAPS program dili ile ilgisi yoktur - Combo pompanızın LCD ekranında gösterilen dildir.)

* İngilizce
* İspanyolca
* Fransızca
* İtalyanca
* Rusça
* Türkçe
* Polonyaca
* Çekçe
* Macarca
* Slovakça
* Romence
* Hırvatça
* Flemenkçe
* Yunanca
* Fince
* Norveçce
* Portekizce
* İsveççe
* Danca
* Almanca
* Slovakça
* Litvanyaca

**Önemli**: Pompanız bu listede olmayan bir dile ayarlanmışsa, lütfen geliştiricilerle iletişime geçin ve pompanın dilini bu listedeki bir dile ayarlayın. Aksi takdirde, sürücü düzgün çalışmayacaktır.

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

* Select the "Accu-Chek Combo" driver in [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md). **Önemli**: Listede "Accu-Chek Combo (Ruffy)" adlı eski sürücü de mevcuttur. Bunu _seçmeyin_.

  ![Combo'nun Konfigürasyon ayaraları ekran görüntüsü](../images/combo/combov2-config-builder.png)

* Sürücü ayarlarını açmak için dişli tekerleğe dokunun.

* Ayarlar arayüzünde, ekranın üst kısmındaki 'Pompa ile eşleştir' butonuna dokunun. Combo eşleştirme arayüzü açılır. Eşleştirmeyi başlatmak için ekranda gösterilen talimatları izleyin. Android, telefonu diğer Bluetooth cihazlarına görünür kılmak için izin istediğinde "izin ver"e basın. Sonunda Combo, ekranında 10 haneli özel bir eşleştirme PIN'i gösterecek ve sürücü bunu isteyecektir. Bu PIN'i ilgili alana girin.

  ![Combo Eşleştirme UI 1 ekran görüntüsü](../images/combo/combov2-pairing-screen-1.png)

  ![Combo Eşleştirme UI 2 ekran görüntüsü](../images/combo/combov2-pairing-screen-2.png)

  ![Combo Eşleştirme UI 3 ekran görüntüsü](../images/combo/combov2-pairing-screen-3.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-4.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-5.png)

* Sürücü Combo'da gösterilen 10 haneli PIN'i istediğinde ve kod yanlış girildiğinde şu gösterilir: ![Combo Eşleştirme UI 3 ekran görüntüsü](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Eşleştirme yapıldıktan sonra, eşleştirmenin başarılı olduğunu belirten ekrandaki Tamam butonuna basılarak eşleştirme arayüzü kapatılır. Kapatıldıktan sonra, sürücü ayarları arayüzüne dönersiniz. 'Pompa ile eşleştir' butonu artık grileşmeli ve devre dışı kalmalıdır.

  Başarılı bir şekilde eşleştirmeden sonra Accu-Chek Combo sekmesi şöyle görünür:

  ![Eşleştirilmiş Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-with-pairing.png)

  Ancak Combo ile eşleştirme yoksa, sekme şöyle görünür:

  ![Eşleştirme olmadan Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-without-pairing.png)

* Kurulumunuzu doğrulamak için (güvenli olması için pompanın herhangi bir kanülden **bağlantısı kesilerek**!) AAPS'i kullanarak 15 dakika boyunca %500'lük bir GBO ayarlayın ve bir bolus verin. Pompanın şimdi çalışan bir GBO'su ve geçmişte bolus olması gerekir. AAPS ayrıca aktif GBO'yu ve iletilen bolusu göstermelidir.

* Combo'da pompada özellikle bolusu önlemek için tuş kilidinin etkinleştirilmesi önerilir. Özellikle pompa daha önce manuel kullanıldığında ve hızlı bolus verme bir alışkanlık olduğunda.

## Eşleştirme hakkında notlar

Accu-Chek Combo, Bluetooth 4.0 piyasaya sürülmeden önce ve ilk Android sürümünün piyasaya sürülmesinden sadece bir yıl sonra geliştirildi. Bu nedenle, diğer cihazlarla eşleştirme yöntemi, bugün Android'de yapıldığı şekliyle %100 uyumlu değildir. Bunun üstesinden gelmek için AAPS'in yalnızca sistem uygulamaları için mevcut olan sistem düzeyinde izinlere ihtiyacı olacaktır. Bunlar, telefon üreticileri tarafından telefona yüklenir - kullanıcılar sistem uygulamalarını yükleyemez.

Bunun sonucunda, bu yeni sürücüde büyük ölçüde geliştirilmiş olmasına rağmen, eşleştirme hiçbir zaman %100 sorunsuz olmayacaktır. Özellikle eşleştirme sırasında, Android'in Bluetooth PIN iletişim kutusu kısa bir süreliğine görünebilir ve otomatik olarak kaybolabilir. Ancak bazen ekranda kalıyor ve 4 haneli bir PIN istiyor. (Bu, 10 haneli Combo eşleştirme PIN'i ile karıştırılmamalıdır.) Hiçbir şey girmeyin, sadece iptal düğmesine basın. Eşleştirme devam etmezse, eşleştirme girişimini yeniden denemek için ekrandaki talimatları izleyin.

(combov2-tab-contents)=
## Accu-Chek Combo sekmesi içerikleri

Sekme, bir pompa eşlendiğinde aşağıdaki bilgileri gösterir (öğeler yukarıdan aşağıya doğru listelenir):

![Eşleştirilmiş Accu-Chek Combo sekmesinin ekran görüntüsü](../images/combo/combov2-tab-with-pairing.png)

1. _Sürücü durumu_: Sürücü aşağıdaki durumlardan birinde olabilir:
   - "Bağlantı Kesildi" : Bluetooth bağlantısı yok; sürücü çoğu zaman bu durumdadır ve yalnızca gerektiğinde pompaya bağlanır - bu güç tasarrufu sağlar
   - "Bağlanıyor"
   - "Pompa kontrol ediliyor" : pompa bağlı, ancak sürücü şu anda her şeyin yolunda ve güncel olduğundan emin olmak için güvenlik kontrolleri yapıyor
   - "Hazır" : sürücü, AAPS'den gelen komutları kabul etmeye hazır
   - "Askıya alındı" : pompa askıya alınır (Combo'da "durduruldu" olarak gösterilir)
   - "Komut yürütülüyor": bir AAPS komutu yürütülüyor
   - "Hata" : bir hata oluştu; bağlantı sonlandırıldı, devam eden herhangi bir komut iptal edildi
2. _Son bağlantı_: Sürücü kaç dakika önce Combo'ya başarıyla bağlandı; bu 30 dakikayı aşarsa, bu öğe kırmızı renkle gösterilir
3. _Mevcut aktivite_: Pompanın şu anda ne yaptığıyla ilgili ek ayrıntılar; Burası aynı zamanda ince bir ilerleme çubuğunun, bir temel profil ayarlamak gibi bir komutun yürütme ilerlemesini gösterebileceği yerdir.
4. _Pil_: Pil seviyesi; Combo yalnızca "dolu", "düşük", "boş" pili gösterir ve daha net bir şey sunmaz (yüzde gibi), dolayısıyla burada yalnızca bu üç seviye gösterilir
5. _Rezervuar_: Combo'nun rezervuarındaki insülin miktarı (Ü)
6. _Son bolus_: Son bolusun kaç dakika önce iletildiği; AAPS başlatıldıktan sonra henüz teslim edilmediyse bu boştur
7. _Geçici bazal_: Şu anda etkin olan geçici bazal ile ilgili ayrıntılar; hiçbiri şu anda aktif değilse burası boştur
8. _Temel bazal oran_: Şu anda etkin olan bazal oran (Herhangi bir GBO olmaksızın "temel" bazal programınız anlamına gelir)
9. _Seri numarası_: Pompa tarafından belirtilen combo seri numarası (bu, Combo'nun arkasında gösterilen seri numarasına karşılık gelir)
10. _Bluetooth adresi_: Combo'nun `XX:XX:XX:XX:XX:XX` biçiminde gösterilen 6 baytlık Bluetooth adresi

Combo, Bluetooth aracılığıyla _uzak terminal_ modunda veya _komut_ modunda çalıştırılabilir. Uzak terminal modu, pompanın LCD ekranını ve dört düğmeyi taklit eden Combo sayacındaki "uzaktan kumanda modu"na karşılık gelir. Komut modunda karşılıkları olmadığı için bazı komutların sürücü tarafından bu modda gerçekleştirilmesi gerekir. Bu ikinci mod çok daha hızlıdır, ancak söylendiği gibi kapsamı sınırlıdır. Uzak terminal modu aktif olduğunda, alttaki Combo çiziminin hemen üzerinde bulunan alanda mevcut uzak terminal ekranı gösterilir. Ancak sürücü komut moduna geçtiğinde bu alan boştur.

(Kullanıcı bundan etkilenmez; sürücü hangi modun kullanılacağına tamamen kendi karar verir. Bu, kullanıcıların neden bazen o alanda Combo çiziminde çerçeveler gördüğünü bilmeleri için bir nottur.)

En altta "Yenile" düğmesi var. Bu anında pompa durumu güncellemesini tetikler. It also is used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](#combov2-alerts)).

## Tercihler

Bu tercihler combo sürücüsü için mevcuttur (öğeler yukarıdan aşağıya doğru listelenmiştir):

![Accu-Chek Combo tercihlerinin ekran görüntüsü](../images/combo/combov2-preferences.png)

1. _Pompa ile eşleştir_: Bu Combo pompası ile eşleştirmek için basılabilen bir butondur. Bir pompa zaten eşleştirilmişse devre dışı bırakılır.
2. _Pompa eşleştirmesini kaldır_: Eşleştirilmiş bir pompanın eşlemesini kaldırır. Hiçbir pompa eşleştirilmemişse devre dışı bırakılır.
3. _Keşif süresi (saniye olarak)_: Eşleştirme sırasında, sürücüler telefonun pompa tarafından bulunabilir olmasını sağlar. Bu keşfedilebilirliğin ne kadar süreceğini kontrol eder. Varsayılan olarak maksimum (300 saniye = 5 dakika) seçilidir. Android, keşfedilebilirliğin süresiz olarak devam etmesine izin vermez, bu nedenle bir süre seçilmelidir.
4. _İnsülin rezervuarı değişikliğini otomatik olarak algıla ve otomatik olarak gir_: Etkinleştirilirse, normalde "rezervuar değişikliği" işlemi kullanıcı tarafından Eylem sekmesindeki "hazırla/doldur" butonuyla yapılır. This is explained [in further detail below](#combov2-autodetections).
5. _Pil değişikliğini otomatik olarak algıla ve otomatik olarak gir_: Etkinleştirilirse, normalde "pil değiştirme" işlemi kullanıcı tarafından Eylem sekmesindeki "pompa pili değiştirme" butonu aracılığıyla gerçekleştirilir. This is explained [in further detail below](#combov2-autodetections).
6. _Ayrıntılı combo günlük kaydını etkinleştir_: Sürücü tarafından yapılan günlük kaydını büyük ölçüde artırır. **DİKKAT**: Bir geliştirici tarafından istenmedikçe bunu etkinleştirmeyin. Aksi takdirde, AndroidAPS günlüklerine çok fazla gürültü ekleyebilir ve bunların kullanışlılığını azaltabilir.

Çoğu kullanıcı yalnızca en üstteki iki öğe, _Pompa ile eşleştir_ ve _Pompa eşleştirmesini kaldır_ butonlarını kullanır.

(combov2-autodetections)=
## Pil ve rezervuar değişikliklerini otomatik algılama ve otomatik olarak girme

Sürücü, pil ve rezervuar seviyelerini takip ederek akü ve rezervuar değişikliklerini tespit edebilir. Pompa durumu son güncellendiğinde pil seviyesi Combo tarafından düşük olarak bildirildiyse ve yeni pompa durumu güncellemesi sırasında pil seviyesi normal görünüyorsa, sürücü kullanıcının pili değiştirmiş olması gerektiği sonucuna varır. Rezervuar seviyesi için de aynı mantık kullanılır: Şimdi öncekinden daha yüksekse, bu rezervuar değişikliği olarak yorumlanır.

Bu yalnızca, pil ve rezervuar seviyelerinin düşük olarak bildirildiği durumlardan sonra değişim yapılıp _ve_ batarya ve rezervuarın da yeterince dolu olduğu durumlarda çalışır.

Bu otomatik algılamalar, Tercihler arayüzünde kapatılabilir.

(combov2-alerts)=
## Alarmlar (uyarılar ve hatalar) ve bunların nasıl işlendiği

Combo uyarıları uzak terminal ekranları olarak gösterilir. Uyarılar, kısa bir açıklama ile birlikte bir "Wx" kodu (x bir rakamdır) ile gösterilir. Bir örnek "W7", "GBO OVER". Hatalar benzerdir ancak bunun yerine bir "Ex" koduyla gösterilir.

Belirli uyarılar sürücü tarafından otomatik olarak reddedilir. Bunlar:

- W1 "rezervuar düşük" : sürücü bunu AAPS ana sekmesinde gösterilen bir "düşük rezervuar" uyarısına dönüştürür
- W2 "pil zayıf" : sürücü bunu AAPS ana sekmesinde gösterilen bir "düşük pil" uyarısına dönüştürür
- W3, W6, W7, W8 : bunların tümü kullanıcı için tamamen bilgi amaçlıdır, bu nedenle sürücünün bunları otomatik olarak reddetmesi güvenlidir

Diğer uyarılar otomatik olarak _yok sayılmaz_. Ayrıca, hatalar _asla_ otomatik olarak reddedilmez. Bunların her ikisi de aynı şekilde ele alınır: Sürücünün AAPS Kullanıcı Arabirimi üzerinde bir uyarı iletişim kutusu oluşturmasına ve ayrıca devam eden herhangi bir komut yürütmeyi iptal etmesine neden olurlar. The driver then switches to the "error" state (see [the Accu-Chek Combo tab contents description above](#combov2-tab-contents)). Bu durum, herhangi bir komut yürütülmesine izin vermez. Kullanıcının pompadaki hatayı halletmesi gerekir; örneğin, bir tıkanma hatası sebebiyle kanülün değiştirilmesini gerekebilir. Kullanıcı hatayı giderdikten sonra, Accu-Chek Combo sekmesindeki "Yenile" düğmesine basarak normal çalışmaya devam edilebilir. Sürücü daha sonra Combo'ya bağlanır ve durumunu günceller, ekranda hala bir hata gösterilip gösterilmediğini vb. kontrol eder. Ayrıca, sürücü bir süre sonra pompa durumunu otomatik olarak yeniler, bu nedenle bu butona manuel olarak basmak zorunlu değildir.

Bolus özel bir durumdur. Bir uyarının göründüğünü bolus ortasında rapor etmeyen Combo'nun komut modunda yapılır. Sonuç olarak, sürücü bir bolus _sırasında_ uyarıları otomatik olarak kapatamaz. Bu ne yazık ki, bolus bitene kadar pompanın bip sesi çıkaracağı anlamına gelir. En yaygın bolus ortası uyarısı tipik olarak W1 "rezervuar düşük" uyarısıdır. Bir bolus sırasında pompanın kendisindeki Combo uyarılarını manuel olarak **kapatmayın**. Bolusu kesintiye uğratma riskiniz vardır. Bolus bittiğinde sürücü uyarıyı dikkate alacaktır.

Sürücü Combo'ya bağlı değilken meydana gelen uyarılar, sürücü tarafından fark edilmeyecektir. Combo'nun bu uyarıyı otomatik olarak telefona göndermesinin bir yolu yoktur; bağlantıyı her zaman telefonun başlatması gerekir. Sonuç olarak, sürücü pompaya bağlanana kadar uyarı devam eder. Kullanıcılar bir bağlantıyı tetiklemek için "Yenile" düğmesine basabilir ve sürücünün uyarıyı hemen halletmesine izin verebilir. (AAPS'in bir bağlantı başlatmasını beklemek yerine)

**ÖNEMLİ**: Bir hata oluşursa veya otomatik olarak kapatılanlardan biri olmayan bir alarm görüntülenirse, sürücü hata durumuna geçer. Bu durumda, pompa durumu yenilenene kadar döngü **DEVRE DIŞI OLACAKTIR**! Pompa durumu güncellendikten sonra (manuel olarak "Yenile" düğmesine basarak veya sürücünün otomatik güncellemesiyle) bloke kaldırılır ve artık hiçbir hata gösterilmez.

## Combo kullanırken dikkat edilmesi gerekenler

* Özellikle bu sürücünün bir ürün olmadığını unutmayın. Başlarken, kullanıcının sistemi, sınırlamalarını ve başarısız olabileceğini izlemesi ve anlaması gerekir. Kullanan kişi sistemi tam olarak anlayamamışsa bu sistemi KULLANMAMANIZ şiddetle tavsiye edilir.
* Combo'nun uzaktan kumanda işlevselliğinin çalışma şekli nedeniyle, bazı işlemler (özellikle bazal profili ayarlamak) diğer pompalara kıyasla yavaştır. Bu, Combo'nun üstesinden gelinemeyecek talihsiz bir sınırlamasıdır.
* Pompa üzerinden bir GBO (geçici bazal oran) ayarlamayın veya iptal etmeyin. Döngü, GBO'nun kontrolünü programda üstlenir. Aksi takdirde kullanıcı tarafından pompada ayarlanan bir GBO'nun başlangıç zamanını belirlemek mümkün olmadığından güvenilir şekilde çalışamaz.
* AAPS pompa ile iletişim kurarken pompa üzerinde herhangi bir düğmeye basmayın (AAPS bağlandığında pompada Bluetooth logosu görünür). Bunu yapmak, Bluetooth bağlantısını kesecektir. Only do that if there are problems with establishing a connection (see [the "Before you begin" section above](#combov2-before-you-begin)).
* Pompa bolus yaparken herhangi bir butona basmayın. Özellikle uyarıları pompa butonlarına basarak kapatmaya çalışmayın. See [the section about alerts](#combov2-alerts) for a more detailed explanation why.

## Combo ile bağlantı kurulamadığında kontrol listesi

Sürücü, Combo'ya bağlanmak için elinden gelenin en iyisini yapıyor ve güvenilirliği en üst düzeye çıkarmak için birkaç numara kullanıyor. Yine de bazen bağlantı kurulamayabilir. İşte bu durumu düzeltmek için atmanız gereken bazı adımlar.

1. Combo'da bir düğmeye basın. Bazen, Combo'nun Bluetooth aygıtı yanıt vermemeye başlar ve artık bağlantıları kabul etmez. Combo üzerindeki bir düğmeye basıp LCD'nin bir şey göstermesini sağlayarak, Bluetooth aygıtı sıfırlanır. Çoğu zaman bağlantı sorunlarını çözmek için gereken tek adım budur.
2. Telefonunuzu yeniden başlatın. Telefonun Bluetooth bağlantısıyla ilgili bir sorun varsa bu gerekli olabilir.
3. Combo'nun pil kapağı eskiyse değiştirmeyi düşünün. Eski pil kapakları, Combo'nun güç kaynağında Bluetooth'u etkileyen sorunlara neden olabilir.
4. Bağlantı denemeleri hala başarısız oluyorsa, eşleştirmeyi kaldırıp ardından pompayı yeniden eşleştirmeyi deneyebilirsiniz.
