# AAPS'i akıllı telefonunuza aktarma ve yükleme

Önceki bölümde, [**AAPS**'i oluşturma](../SettingUpAaps/BuildingAaps.md) bölümünde, **AAPS** uygulamasını (bir .apk dosyası) bilgisayarda oluşturdunuz.

Sonraki adımlar, **AAPS** APK dosyasını (ve ihtiyacınız olabilecek diğer uygulamaları, örneğin BYODA, xDrip veya başka bir CGM alıcı uygulamasını) Android akıllı telefonunuza **aktarmak** ve ardından uygulama(lar)ı **yüklemektir**. **AAPS**'i akıllı telefona yükledikten sonra [**AAPS döngüsünü yapılandırma**](../SettingUpAaps/SetupWizard.md) adımına geçebilirsiniz.

Bu sayfa ayrıca, Google'ın Eylül 2026'dan itibaren kullanıma sunduğu ve kendi oluşturduğunuz uygulamaların yüklenmesini etkileyen bir değişiklik olan [Android geliştirici doğrulamasını](#android-developer-verification) ve bu değişiklikten sonra da çalışmaya devam eden [ücretsiz yükleme yöntemlerini](#android-developer-verification-free-methods) açıklar.

```{contents} Table of contents
:depth: 1
:local: true
```

## AAPS'i APK dosyasına dokunarak yükleme

Bugün **AAPS**'i, APK dosyasını telefonunuza aktarıp açarak ("dokunarak") yüklersiniz. **AAPS** APK dosyasını bilgisayarınızdan akıllı telefona aktarmanın birkaç yolu vardır. Burada iki farklı yolu açıklıyoruz:

* Seçenek 1 - Google Drive'ınızı (Gdrive) kullanın
* Seçenek 2 - USB kablosu kullanın

E-posta ile aktarımın sorun çıkarabileceğini ve önerilmediğini lütfen unutmayın.

```{admonition} Android developer verification
:class: warning
Google, Eylül 2026'dan itibaren [Android geliştirici doğrulamasını](#android-developer-verification) kullanıma sunuyor (önce Brezilya, Endonezya, Singapur ve Tayland'da; 2027'de tüm dünyada). Bu kuralın uygulandığı yerlerde, APK'yı dosyaya dokunarak yükleme (aşağıdaki iki seçenekte anlatıldığı gibi) engellenir. Bu durumda, bu sayfanın aşağısındaki [ücretsiz yükleme yöntemlerinden](#android-developer-verification-free-methods) birini kullanın.
```

### Seçenek 1. Dosyaları aktarmak için Google Drive kullanın

Web tarayıcınızda [Google.com](https://www.google.com/) adresini açın ve Google hesabınızla oturum açın.

Sağ üstte Google menüsünden Drive uygulamasını seçin.

![Drive uygulamasını başlatın](../images/GoogleDriveInWebbrowser.png)

Sol üstteki **New** (Yeni) düğmesine tıklayın (veya dosya ve klasörlerinizin altındaki boş bir alana sağ tıklayın) ve **File upload** (Dosya yükleme) seçeneğini seçin.

![APK dosyasını Google Drive uygulamasıyla yükleme](../images/GoogleDriveUploadFile.png)

Apk dosyası artık Google Drive'a yüklenmiş olmalıdır.

#### Apk dosyasını yüklemek üzere çalıştırmak için Google Drive uygulamasını kullanın

Telefonunuza geçin ve Google Drive uygulamasını açın. Önceden yüklü bir uygulamadır; diğer Google uygulamalarının bulunduğu yerde veya uygulamanın adını aratarak bulunabilir.

![Google Drive uygulamasını başlatın](../images/GoogleDriveMobileAPPLaunch.png)

Telefondaki Google Drive uygulamasında dosya adına dokunarak APK yüklemesini başlatın.

![APK yüklemesini başlatın](../images/GoogleDriveMobileUploadedAPK.png)

Şu anda Google Drive'dan uygulama yüklemenize izin verilmediğini söyleyen bir güvenlik uyarısı alırsanız, "Settings" (Ayarlar) seçeneğine dokunun ve bu kısa süre için izin verin. Sonra izni tekrar kapatın, çünkü bunu sürekli açık bırakmak bir güvenlik riskidir.

![Google Drive güvenlik uyarısı](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Google Drive güvenlik uyarısı](../images/GoogleDriveMobileSettingSecuritySetting.png)

Yükleme bittiğinde bu adım tamamlanmış olur.

**AAPS** simgesini görmeli ve uygulamayı açabilmelisiniz.

```{warning}
**ÖNEMLİ GÜVENLİK UYARISI**
Google Drive'dan yüklemeye verdiğiniz izni geri almayı unutmadınız, değil mi?
```

Lütfen [AAPS döngüsünü yapılandırma](../SettingUpAaps/SetupWizard.md) ile devam edin.

### Seçenek 2. Dosyaları aktarmak için USB kablosu kullanın

AAPS APK dosyasını aktarmanın ikinci yolu bir [USB kablosu](https://support.google.com/android/answer/9064445?hl=en) kullanmaktır.

Dosyayı bilgisayarınızdaki konumundan telefondaki "İndirilenler" (downloads) klasörüne aktarın.

Telefonunuzda bilinmeyen kaynaklardan yüklemeye izin vermeniz gerekir. Bunun nasıl yapılacağına dair açıklamaları internette bulabilirsiniz (_örneğin_ [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)).

Dosyayı sürükleyerek aktardıktan sonra telefonda "Downloads" (İndirilenler) klasörünü açın ve AAPS APK dosyasına dokunun:

![Downloads (İndirilenler) klasöründeki APK dosyası](../images/install/install_01_downloads_apk.png)

İlk seferde Android, telefonun bu kaynaktan bilinmeyen uygulamaları yüklemesine izin verilmediğini söyler. "**Settings**" (Ayarlar) seçeneğine dokunun:

![Bilinmeyen uygulamalar için güvenlik uyarısı](../images/install/install_02_unknown_apps_notice.png)

"**Allow from this source**" (Bu kaynaktan izin ver) seçeneğini açın, sonra geri gidin:

![Allow from this source (Bu kaynaktan izin ver) açık](../images/install/install_04_unknown_apps_allowed.png)

APK dosyasına tekrar dokunun ve "**Install**" (Yükle) seçeneğini seçin:

![Yükleme sorusu](../images/install/install_05_install_prompt.png)

Yükleme bittiğinde **AAPS**'i başlatmak için "**Open**" (Aç) seçeneğine, daha sonra açmak için "**Done**" (Bitti) seçeneğine dokunun:

![Uygulama yüklendi](../images/install/install_07_app_installed.png)

```{warning}
**ÖNEMLİ GÜVENLİK UYARISI**
Yüklemeden sonra "Allow from this source" (Bu kaynaktan izin ver) seçeneğini tekrar kapatmayı unutmayın, çünkü bunu sürekli açık bırakmak bir güvenlik riskidir.
```

Lütfen [AAPS döngüsünü yapılandırma](../SettingUpAaps/SetupWizard.md) ile devam edin.

(transferring-installing-play-protect-warning)=
## Google Play Protect uyarısı

**AAPS**'i yüklerken Google Play Protect, uygulamanın güvenli olmadığı, Android'in eski bir sürümü için oluşturulduğu ve en son gizlilik korumalarını içermediği konusunda sizi uyarabilir.

![Google Play Protect uyarısı](../images/troubleshooting/InstallGPP.png)

Kendi oluşturduğunuz bir uygulama için bu beklenen bir durumdur. **More details** (Diğer ayrıntılar) seçeneğine, ardından **Install anyway** (Yine de yükle) seçeneğine dokunun.

Yükleme, doğrulanmamış bir geliştirici hakkında bir mesajla **engellenirse** (yalnızca bir uyarı değilse), aşağıdaki [Android geliştirici doğrulaması](#android-developer-verification) bölümüne bakın.

(android-developer-verification)=

## Android geliştirici doğrulaması

Google, **Android geliştirici doğrulamasını** kullanıma sunuyor: çoğu Android telefonda uygulamalar yalnızca doğrulanmış bir geliştirici tarafından Google'a kaydedilmişlerse yüklenecek. Bu, bir APK dosyasından yüklenen uygulamalar ("sideloading", yandan yükleme) için de geçerlidir. Kendi oluşturduğunuz **AAPS** uygulamasını da bu şekilde yüklersiniz.

### Neler değişiyor

**AAPS**'i Google hizmetleri olan bir telefona ("sertifikalı" bir Android cihaz; Play Store ile satılan hemen hemen her telefon) yüklediğinizde, Android uygulamanın Google'a kayıtlı bir geliştiriciden gelip gelmediğini kontrol edecek. Gelmiyorsa, APK dosyasına dokunarak yapılan normal yükleme engellenir.

**Kontrol, bir uygulama yüklendiğinde veya güncellendiğinde yapılır.** Zaten yüklü ve çalışan uygulamaları kaldırmaz.

Google bunu adım adım kullanıma sunuyor:

| Ne zaman      | Ne olur                                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ağustos 2026  | Ücretsiz "limited distribution" (sınırlı dağıtım) geliştirici hesapları tüm dünyada açılır ve "advanced flow" (gelişmiş akış) telefonlara gelmeye başlar |
| 30 Eylül 2026 | Doğrulama, Google Play'den ve birkaç başka uygulama mağazasından yüklenen uygulamalar için **Brezilya, Endonezya, Singapur ve Tayland**'da zorunlu olur  |
| 2027          | Zorunluluk **dünyanın geri kalanına** ve APK dosyaları dahil **tüm yüklemelere** genişler                                                                |

Ayrıntılar, Google tarafından [Android developer verification](https://developer.android.com/developer-verification) (Android geliştirici doğrulaması) sayfalarında, bir [SSS](https://developer.android.com/developer-verification/guides/faq) ile birlikte yayınlanır. Google tarihleri ve ayrıntıları hâlâ değiştirebilir. Kullanıma sunma ilerledikçe bu sayfa güncellenecektir.

### Bu beni etkiler mi?

- **AAPS'i oluşturma hiç etkilenmez.** [Tarayıcı ile oluşturma](#browser-build), [Android Studio ile oluşturma](ComputerBuild.md) ve [komut satırı ile oluşturma](CLIBuild.md) tam olarak eskisi gibi çalışır ve anahtar deponuz (keystore) değişmez.
- **Mevcut AAPS'iniz çalışmaya devam eder.** Doğrulama yalnızca bir uygulama yüklenirken veya güncellenirken kontrol edilir.
- **Brezilya, Endonezya, Singapur veya Tayland'da yaşıyorsanız:** 30 Eylül 2026'dan itibaren doğrulama, Google Play'den ve birkaç başka uygulama mağazasından yüklenen uygulamalar için zorunludur. Google, bir APK dosyasını doğrudan yüklemenin bu ilk adımın kapsamında olmadığını belirtiyor, bu yüzden **AAPS** hâlâ her zamanki gibi yüklenmelidir. Yine de, bu durum değişirse hazırlıksız yakalanmamak için aşağıdaki [ücretsiz yükleme yöntemlerinden](#android-developer-verification-free-methods) birini şimdi hazırlayın.
- **Başka bir yerde yaşıyorsanız:** 2027'den önce sizin için hiçbir şey değişmez ve şimdilik hiçbir şey yapmamak geçerli bir seçimdir. Ama her şey çalışırken aşağıdaki [ücretsiz yükleme yöntemlerinden](#android-developer-verification-free-methods) birini kurun: engeli bir güncellemenin reddedildiği gün fark etmek, önünüzde [gelişmiş akışın](#android-developer-verification-advanced-flow) 24 saatlik beklemesi varken, yanlış bir zamandır.
- **Eski telefonlar:** doğrulama Android 7 veya üstü çalıştıran telefonlar için geçerlidir. Bu, **AAPS** çalıştırabilen her telefon demektir.

(android-developer-verification-free-methods)=

## AAPS'i yüklemenin ücretsiz yolları

**AAPS**'i kullanmaya devam etmek için Google'a hiçbir şey ödemeniz **gerekmez**. Birkaç ücretsiz yöntem vardır. Durumunuza uyanı seçin.

```{admonition} Which method should I use?
:class: tip
- Bir **bilgisayarınız** var (**AAPS**'i hangi yolla oluşturmuş olursanız olun): [ADB](#android-developer-verification-adb) kullanın veya komut satırından kaçınmak istiyorsanız [web yükleyicisini](#android-developer-verification-web) kullanın. İkisi de doğrulamadan muaftır, sınırı yoktur ve Google hesabı gerektirmez.
- **Hiç bilgisayarınız yoksa**: telefonunuzda [gelişmiş akışı](#android-developer-verification-advanced-flow) kullanın.
- Normal "APK'ya dokunma" yüklemesinin çalışmaya devam etmesi için Google'a kayıt olmayı tercih ediyorsanız: [ücretsiz bir sınırlı dağıtım hesabı](#android-developer-verification-limited-account) vardır, ancak **AAPS** ile test edilmemiştir.
```

(android-developer-verification-adb)=

### Seçenek 1: ADB ile yükleme (bilgisayar gerekir)

ADB (Android Debug Bridge), uygulamaları bir bilgisayardan USB kablosuyla telefona yüklemek için Google'ın resmi aracıdır. Google, **ADB ile yüklenen uygulamaların doğrulama gerektirmediğini** doğruladı: bekleme süresi, cihaz sınırı ve kayıt yoktur.

Bir kerelik hazırlık:

1. Telefonunuzda gizli geliştirici seçeneklerini açın: **Settings** (Ayarlar) > **About phone** (Telefon hakkında) (bazı telefonlarda **Software information**, Yazılım bilgileri) bölümüne gidin ve telefon geliştirici olduğunuzu onaylayana kadar **Build number** (Yapım numarası) satırına yedi kez dokunun.
1. Ana **Settings** (Ayarlar) ekranına geri dönün, yeni **Developer options** (Geliştirici seçenekleri) girişini açın ve **USB debugging** (USB hata ayıklama) seçeneğini açın.
1. Bilgisayarınızda ADB'nin kullanılabilir olduğundan emin olun:
   - **Android Studio** kullanıyorsanız ADB onunla birlikte zaten yüklüdür.
   - Aksi halde Google'ın ücretsiz [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) paketini indirin ve klasörü zip'ten çıkarın. Yükleme gerekmez. ADB, o klasördeki `adb` programıdır.

**AAPS**'i yükleme (ve daha sonra güncelleme):

1. Telefonu bilgisayara bir USB kablosuyla bağlayın. APK dosyasını önce telefona aktarmanız gerekmez: ADB onu doğrudan bilgisayardan gönderir.
1. Telefonda **Allow USB debugging?** (USB hata ayıklamaya izin verilsin mi?) sorusunu kabul edin (yalnızca ilk seferde).
1. Bilgisayarda, ADB'yi ve **AAPS** APK dosyasını içeren klasörde bir terminal (komut istemi) açın ve şunu çalıştırın:

   ```
   adb install -r app-full-release.apk
   ```

   `app-full-release.apk` yerine APK dosyanızın gerçek adını yazın. `-r` seçeneği, zaten yüklü olan **AAPS**'i tüm verilerini ve ayarlarını koruyarak günceller.

1. `Success` yazısı görünene kadar bekleyin. **AAPS** artık telefonunuza yüklendi.

Gelecekteki her güncelleme için aynı komut kullanılır. [Wear OS sayfaları](../WearOS/WearOsSmartwatch.md), saat uygulamasını yüklemek için ADB'yi zaten aynı şekilde kullanır.

Kablo kullanmak istemiyorsanız: Android 11 ve sonrasında **wireless debugging** (Kablosuz hata ayıklama, yine **Developer options** altında) telefonda gösterilen bir kodla bir kerelik eşleştirmeden sonra aynı işi Wi-Fi üzerinden yapabilir.

(android-developer-verification-web)=

### Seçenek 2: Bir web sayfasından yükleme (bilgisayar, komut satırı yok)

Komut satırı size göre değilse, bir web sayfası ADB'nin yaptığının aynısını doğrudan tarayıcınızdan yapabilir. Telefonla ADB ile aynı yöntemle konuştuğu için **doğrulamadan aynı muafiyete** sahiptir. Ancak indirilecek bir şey, zip'ten çıkarılacak bir klasör ve yazılacak bir komut yoktur.

[Tarayıcı ile oluşturma](#browser-build) yöntemini kullandıysanız ve hiç komut satırı açmadıysanız en kolay yol budur.

1. Telefonda **USB debugging** (USB hata ayıklama) seçeneğini açın (yukarıdaki [ADB yönteminin](#android-developer-verification-adb) 1. ve 2. adımları; bir kerelik kurulum).
1. Tarayıcınızda **[AAPS web yükleyicisini](#web-installer)** açın.
1. Telefonu bir USB kablosuyla bağlayın ve sayfadaki talimatları izleyin: bağlanın, APK dosyanızı seçin ve yükleyin.

Bilmeniz gereken üç şey:

- Yalnızca **Chrome, Edge veya Opera** ile çalışır. Firefox ve Safari USB cihazlarla iletişim kuramaz.
- Telefonun ADB bağlantısını aynı anda yalnızca bir program kullanabilir, bu yüzden bağlanmadan önce **Android Studio'yu kapatın** (veya ADB kullanan başka her şeyi).
- Bu şekilde bağlanan bir web sayfası telefonunuzun tam kontrolünü alır. **Yalnızca yukarıdaki adresi kullanın**, yani **AAPS** dokümantasyonundaki adresi. Asla bir arama motoruyla bulunan bir yükleyici sayfasını kullanmayın. **AAPS** web yükleyicisi tamamen tarayıcınızda çalışır: APK dosyanız hiçbir yere yüklenmez.

```{admonition} No computer? A second phone works too
:class: tip
Web yükleyicisi, USB-C - USB-C kablosuyla **başka bir Android telefondaki Chrome** ile de çalışır. Böylece bir ebeveyn, evde hiç bilgisayar olmadan **AAPS**'i çocuğunun telefonuna yükleyebilir.
```

(android-developer-verification-advanced-flow)=

### Seçenek 3: Telefonunuzda "gelişmiş akış" (bilgisayar gerekmez)

Google, doğrulanmamış uygulamaları yüklemenin risklerini anlayan deneyimli kullanıcılar için **advanced flow** (gelişmiş akış) adlı bir çıkış yolu sunar. Google bunu, zorunluluk başlamadan önce, Ağustos 2026'da telefonlara sunmaya başladı. Bu yüzden şimdi kurabilirsiniz. Telefonun kendisinde yapılan bir kerelik bir kurulumdur ve tamamlanması **24 saat sürer**:

1. Gizli geliştirici seçeneklerini açın (yukarıdaki ADB yönteminin 1. adımına bakın), sonra **Settings** (Ayarlar) > **Developer options** (Geliştirici seçenekleri) > **Apps from unverified developers** (Doğrulanmamış geliştiricilerden uygulamalar) bölümünü açın.
1. **Allow apps from unverified developers** (Doğrulanmamış geliştiricilerden uygulamalara izin ver) seçeneğini açın. Telefon, siz olduğunuzu doğrulamak için ekran kilidinizi ister.
1. Telefon, birinin sizden bu ayarı açmanızı isteyip istemediğini sorar ve bankaların, devlet kurumlarının veya polisin sizden asla bunu istemeyeceğini açıklar. Uyarıyı okuyun ve kimsenin size baskı yapmadığını veya sizi yönlendirmediğini onaylayın (bu, dolandırıcılara karşı bir korumadır).
1. **Telefonunuzu yeniden başlatın.** Bu, bir kerelik **24 saatlik bekleme süresini** başlatır.
1. 24 saat sonra kurulumu bitirmek için tekrar **Settings** > **Developer options** > **Apps from unverified developers** bölümüne gidin.
1. Doğrulanmamış uygulamalara **7 days** (7 gün) için mi yoksa **indefinitely** (süresiz) mi izin vereceğinizi seçin. **AAPS** için **indefinitely** (süresiz) seçeneğini seçin, aksi halde 7 gün geçtikten sonra bir sonraki güncellemeniz engellenir.

Bu kurulumdan sonra **AAPS** APK'sını yüklemek veya güncellemek bugünkü gibi çalışır. Yalnızca uygulamanın doğrulanmamış bir geliştiriciden geldiğine dair ek bir uyarı çıkar: **Install anyway** (Yine de yükle) seçeneğine dokunun.

Bilmekte fayda var:

- Sonrasında **Developer options** (Geliştirici seçenekleri) ayarını tekrar kapatabilirsiniz: gelişmiş akış açık kalır. Google ayrıca uygulamalara (örneğin bankacılık uygulamalarına) gelişmiş akışın açık olduğunu algılamak için hiçbir yol vermez.
- Gelişmiş akışı kapatırsanız, **AAPS**'i yüklemek **veya güncellemek** yeniden engellenir (yüklü **AAPS**'iniz çalışmaya devam eder). Tekrar açmak için 10 dakikanız vardır. Bundan sonra 24 saatlik bekleme süresi yeniden başlar.
- Telefonun saatini değiştirmek bekleme süresini kısaltmaz ve ADB de bunu atlayamaz.
- Google, seçiminizin Google hesabınızla birlikte diğer cihazlarınıza da geçtiğini belirtiyor. Bu yüzden yeni bir telefon, yeniden 24 saat beklemek anlamına gelmemelidir.
- Geliştirici seçeneklerinde **Apps from unverified developers** (Doğrulanmamış geliştiricilerden uygulamalar) bölümünü bulamıyorsanız, telefonunuz bu özelliği henüz almamıştır. Bu özellik, Google'ın Play Store üzerinden adım adım dağıttığı **Android Developer Verifier** adlı bir sistem bileşeniyle gelir. Play Store'da **Android Developer Verifier** uygulamasını açarak bunu hızlandırabilirsiniz.

```{note}
Google bunu ilk sürüm olarak tanımlıyor ve ekranları ve adımları hâlâ değiştirebilir. Son sürüm çıktığında bu bölüm ekran görüntüleriyle güncellenecektir.
```

(android-developer-verification-limited-account)=

### Seçenek 4: Google'a kayıt olma (ücretsiz sınırlı dağıtım hesabı)

Google, hobi ve kişisel kullanım için **limited distribution account** (sınırlı dağıtım hesabı) adlı, Ağustos 2026'dan beri herkese açık, **ücretsiz** bir geliştirici hesabı türü sunuyor:

- **Resmi kimlik belgesi gerekmez** ve **ücret yoktur** (kişisel **AAPS** kullanımı için gerekli olmayan ücretli geliştirici hesabının aksine). Yine de 2 adımlı doğrulamalı bir Google hesabına, yasal adınızı ve adresinizi içeren bir Google ödeme profiline ve bir iletişim e-posta adresine ihtiyacınız vardır.
- Uygulamanızın paket adını Google'ın Android Developer Console'una kaydedersiniz ve uygulamanın yüklenebileceği telefonları, **20 cihaza** kadar, telefon ile konsol arasında bir QR kod veya bağlantı ile yapılan bir el sıkışma yoluyla yetkilendirirsiniz.
- Kayıttan sonra normal yükleme (APK dosyasına dokunma), yetkilendirilmiş telefonlarda ADB ve gelişmiş akış olmadan yeniden çalışır.
- Sınırlı dağıtım hesabı daha sonra tam bir hesaba yükseltilebilir, ama tersi yapılamaz.

```{warning}
Google, birçok kişi aynı açık kaynaklı uygulamayı oluşturduğunda kaydın nasıl çalıştığını açıklamadı: kendi oluşturulan her **AAPS** aynı paket adını (`info.nightscout.androidaps`) farklı bir imzalama anahtarıyla kullanır ve Google'ın SSS'si, başkaları tarafından zaten kullanılan bir paket adının doğrudan alınamayacağını ve ek bir inceleme gerektirdiğini belirtir. Böyle bir incelemenin sonucu bilinmiyor ve ücretli geliştirici hesabı (25 $ ve resmi kimlik belgesi) burada yardımcı olmaz: ödeme yapmak yalnızca 20 cihaz sınırını kaldırır, paket adı incelemesini değil.

Bu nedenle adım adım talimatlar henüz yazılamıyor. Kayıt **AAPS** ile test edildikten sonra bu bölüm tamamlanacaktır. Bu arada, yukarıdaki ADB, web yükleyicisi ve gelişmiş akış güvenilir seçeneklerdir.
```

## Neler değişmiyor

- Üç [oluşturma yönteminden](BuildingAaps.md) herhangi biriyle **AAPS**'i kendiniz oluşturmanız.
- GitHub hesabınız, oluşturma deponuz (AAPS Builder) veya fork'unuz ve anahtar deponuz.
- Yüklü **AAPS** uygulamanız, ayarlarınız ve [görevleriniz](CompletingTheObjectives.md).
- Google hizmetleri olmayan telefonlar ve genel olarak [ADB ile yüklemeler](#android-developer-verification-adb).

## Nereden yardım alabilirsiniz?

1. Doğrulamanın kendisiyle ilgili sorular için Google'ın [geliştirici doğrulaması SSS](https://developer.android.com/developer-verification/guides/faq) sayfasını **okuyun**.
2. Bir yükleme engellenirse [Discord](https://discord.gg/4fQUWHZ4Mw)'daki *#AAPS* kanalında veya diğer [topluluk kanallarından](../GettingHelp/WhereCanIGetHelp.md) birinde **sorun**.
3. Yardım isterken telefonunuzun markasını ve modelini, Android sürümünü, ülkenizi ve yükleme başarısız olduğunda gösterilen tam mesajı ekleyin.

```{toctree}
:hidden:

AAPS web yükleyicisi <WebInstaller.md>
```
