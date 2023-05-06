# APK oluşturma

## Programı İndirmek yerine kendiniz oluşturun...

**AAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Apk'yi oluşturmak için lütfen **[Android Studio Sürüm 2020.3.1](https://developer.android.com/studio/)** veya daha yenisini kullanın.
* [Windows 10 32-bit sistemler](troubleshooting_androidstudio-unable-to-start-daemon-process) Android Studio 2020.3.1 tarafından desteklenmez

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## apk dosyası oluşturmak için önerilen bilgisayar özellikleri

<table class="tg">
  
<thead>
  <tr>
    <th class="tg-baqh">İşletim Sistemi (Sadece 64 bit)</th>
    <th class="tg-baqh">Windows 8 veya üstü</th>
    <th class="tg-baqh">Mac OS 10.14 veya üstü</th>
    <th class="tg-baqh">Herhangi bir Linux, Gnome, KDE veya Unity DE;&nbsp;&nbsp;GNU C Library 2.31 veya sonraki sürümünü destekler</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">CPU (Sadece 64 bit)</td>
    <td class="tg-baqh">x86_64 2. nesil CPU mimarisi Intel Core veya daha yenisi ya da<br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a> desteğine sahip AMD CPU</td>
    <td class="tg-baqh">ARM tabanlı yongalar veya <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a> desteğine sahip 2. nesil Intel Core veya daha yenisi</td>
    <td class="tg-baqh">x86_64 CPU mimarisi; 2. nesil Intel Core veya daha yenisi veya AMD Sanallaştırma (Virtualization) (AMD-V) ve SSSE3 desteğine sahip AMD işlemci</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Bellek(RAM)</td>
    <td class="tg-baqh" colspan="3"><p align="center">8Gb veya daha fazla</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Depolama alanı</td>
    <td class="tg-baqh" colspan="3"><p align="center">En az 30GB boş alan. SSD önerilir.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Çözünürlük</td>
    <td class="tg-baqh" colspan="3"><p align="center">Minimum 1280 x 800 <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">İnternet</td>
    <td class="tg-baqh" colspan="3"><p align="center">Geniş bant</td>
  </tr>
</tbody>
</table>

Lütfen hem **64 bit CPU hem de 64 bit işletim sisteminin zorunlu koşul olduğunu unutmayın.** Sisteminiz bu koşulu karşılamıyorsa, etkilenen donanımı veya yazılımı veya tüm sistemi değiştirmeniz gerekir. **APS kurulum apk dosyasını oluştururken daha az zaman alacağından HDD (Sabit Disk Sürücüsü) yerine SSD (Katı Hal Diski) kullanılması şiddetle tavsiye edilir.** Sadece tavsiye edilir ancak zorunlu değildir. Bununla birlikte, apk dosyası oluştururken yine de bir HDD kullanabilirsiniz, ancak oluşturma işleminin tamamlanmasının uzun zaman alabileceğini unutmayın, ancak bir kez başlatıldığında, gözetimsiz çalışır durumda bırakabilirsiniz.

* * *

### Bu makale iki bölüme ayrılmıştır.

* Genel bakış bölümünde, APK dosyasını oluşturmak için hangi adımların gerekli olduğuna dair bir açıklama vardır.
* Adım adım izleme bölümünde, somut bir kurulumun ekran görüntülerini bulacaksınız. APK'yı oluşturmak için kullanacağımız yazılım geliştirme ortamı olan Android Studio'nun sürümleri çok hızlı değişeceğinden, bu sizin kurulumunuzla aynı olmayacak ancak size iyi bir başlangıç noktası sunacaktır. Android Studio ayrıca Windows, Mac OS X ve Linux üzerinde çalışır ve her platform arasında bazı yönlerden küçük farklılıklar olabilir. Önemli bir şeyin yanlış veya eksik olduğunu fark ederseniz, lütfen "AAPS kullanıcıları" facebook grubuna haber verin veya Discord chat sohbet grubu altında [Android APS](https://discord.gg/4fQUWHZ4Mw)'a bir göz atabilirsiniz.

## Genel Bakış

Genel olarak, APK dosyasını oluşturmak için gerekli adımlar:

1. [Git yükleyin](../Installing-AndroidAPS/git-install.md)
2. [Android Studio'yu yükleyin](Building-APK-install-android-studio)
3. [Android Studio tercihlerinde git yolunu ayarlayın](Building-APK-set-git-path-in-preferences)
4. [AAPS kodlarını indirin](Building-APK-download-AAPS-code)
5. [Android SDK'i indirin](Building-APK-download-android-sdk)
6. [Uygulamayı oluşturun](Building-APK-generate-signed-apk) (imzalı apk oluşturun)
7. [Telefonunuza apk dosyasını aktarın](Building-APK-transfer-apk-to-smartphone)
8. [Eğer xDrip+ kullanıyorsanız, alıcıyı tanımlayın](xdrip-identify-receiver)

## Adım adım izlenecek yol

APK dosyasını oluşturmak için gerekli adımların ayrıntılı açıklaması.

## Git'i kurun (eğer yüklü değilse)

[git kurulum sayfasındaki](../Installing-AndroidAPS/git-install.md) kılavuzu izleyin.

(Building-APK-install-android-studio)=

## Android Studio'yu yükleyin

Aşağıdaki ekran görüntüleri Android Studio Arctic Fox | 2020.3.1 Versiyonu. Android Studio'nun gelecekteki sürümlerinde ekranlar değişebilir. Ama üstesinden gelebilmelisiniz. [Topluluktan yardım](../Where-To-Go-For-Help/Connect-with-other-users.md) alınabilir.

Android Studio'yu kurarken en önemli şeylerden biri: **Sabırlı olun!** Kurulum ve kurulum sırasında Android Studio, zaman alacak pek çok şey indirecektir.

[Android Studio'yu buradan](https://developer.android.com/studio/install.html) indirin ve bilgisayarınıza kurun.

İlk çalıştırmada kurulum sihirbazıyla karşılaşacaksınız:

Daha önce kullanmadığınız için "Ayarları içe aktarmayın" seçeneğini seçin.

![Ayarları içe aktarmayın](../images/studioSetup/01_ImportSettings.png)

Google ile veri paylaşmak isteyip istemediğinize karar verin.

![Google ile veri paylaşın](../images/studioSetup/02_DataSharing.png)

Aşağıdaki ekranda "İleri" ye tıklayın.

![Hoşgeldin ekranı](../images/studioSetup/03_Welcome.png)

"Standart" kurulumu seçin ve "İleri"ye tıklayın.

![Standart kurulum](../images/studioSetup/04_InstallType.png)

Beğendiğiniz kullanıcı arayüzü için temayı seçin. (Bu kılavuzda biz "Light" kullandık.) Ardından "İleri" ye tıklayın.

> ***Not:*** Bu yalnızca renk şemasıdır. İstediğinizi seçebilirsiniz (yani karanlık mod için "Darcula"). Bu seçimin APK oluşturma üzerinde hiçbir etkisi yoktur, ancak aşağıdaki ekran görüntüleri farklı görünebilir.

![UI renk şeması](../images/studioSetup/05_UITheme.png)

"Ayarları Doğrula" iletişim kutusunda "Bitir" butonunu tıklayın.

![Ayarları doğrulayın](../images/studioSetup/06_Verify.png)

Android Studio ek bileşenleri indirirken bekleyin ve sabırlı olun. Her şey indirildikten sonra "Finish" düğmesi maviye döner. Şimdi butona tıklayın.

![Bileşenlerin indirilmesi](../images/studioSetup/07_Downloading.png)

(Building-APK-set-git-path-in-preferences)=

## Git yolunu tercihlerde ayarla

Bilgisayarınızda [git'in kurulu olduğundan](../Installing-AndroidAPS/git-install.md) ve kurduktan sonra bilgisayarınızı yeniden başlattığınızdan emin olun.

Android Studio karşılama ekranında soldaki "Customize" (1) (Özelleştir) öğesini tıklayın ve ardından "All settings..." (Tüm ayarlar...) bağlantısını seçin (2):

![Karşılama ekranından Android Studio ayarları](../images/studioSetup/10_WizardSettings.png)

### Windows

* Windows kullanıcısı olarak, [Git'i yükledikten](../Installing-AndroidAPS/git-install.md) sonra bilgisayarınızı yeniden başlattığınızdan emin olun.

* Alt menüyü açmak için "Version Control" (1) (Sürüm Kontrolü) üzerine çift tıklayın.

* Git (2)'e tıklayın.
* Güncelleme yönteminin "Merge" (3) (Birleştir) seçili olduğundan emin olun.
* "Test" (4) düğmesini tıklayarak Android Studio'nun git.exe yolunu otomatik olarak bulup bulamayacağını kontrol edin.
    
    ![Android Studio ayarları](../images/studioSetup/11_GitPath.png)

* Otomatik ayar başarılı olursa, yolun yanında git sürümü görüntülenecektir.
    
    ![Git sürümü görüntülendi](../images/studioSetup/12_GitVersion.png)

* Sonunda git.exe otomatik olarak bulunamaz veya Test bir hatayla (error) (1) sonuçlanır :
    
    ![Git bulunamadı](../images/studioSetup/13_GitVersionError.png)
    
    Bu durumda klasör simgesine (2) tıklayın.

* Git'in nereye kurulduğundan emin değilseniz, "git.exe"yi bulmak için Windows Gezgini'nde [arama işlevini](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) kullanın. **\bin** klasöründe bulunan "git.exe" adlı bir dosya arıyorsunuz.

* git.exe yolunu seçin ve ** \bin\ ** klasöründe (3) olanı seçtiğinizden emin olun ve "OK" (4) Tamam'a tıklayın.
    
    ![Git'i manuel olarak seçilmesi](../images/studioSetup/14_GitManualSelection.png)

* Seçtiğiniz git yolunu yukarıda açıklandığı gibi "Test" düğmesiyle tekrar kontrol edin.

* Yolun yanında git sürümü görüntülendiğinde (yukarıdaki ekran görüntüsüne bakın), "OK" düğmesini (5) tıklayarak ayarlar penceresini kapatın.

### Mac

* Herhangi bir git sürümü çalışması gerekir. Örneğin <https://git-scm.com/download/mac>.
* Git'i kurabilmek için homebrew kullanın: ```$ brew install git```.
* Git'i yüklemeyle ilgili ayrıntılar için [resmi git belgelerine](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) bakın.
* Git'i homebrew aracılığıyla kurarsanız, herhangi bir tercihi değiştirmenize gerek yoktur. Her ihtimale karşı: Android Studio - Tercihler altında bulabilirsiniz.

(Building-APK-download-AAPS-code)=

## AAPS kodlarını indirin

* Android Studio karşılama ekranında soldaki "Projects" (1) projeler ve ardından "Get from VCS" (2) VCS'den Alın öğesini seçin.
    
    ![Android Studio sihirbazı](../images/studioSetup/20_ProjectVCS.png)
    
    * Android Studio'yu zaten açtıysanız ve artık hoş geldiniz ekranını görmüyorsanız, Sürüm Kontrolünden Dosya (1) > Yeni (2) > Proje'yi seçin... (3)
        
        ![Android Studio içindeki sürüm kontrolünden projeye göz atın](../images/AndroidStudio_FileNew.PNG)
    
    * Şimdi Android Studio'ya kodu nereden alacağını söyleyeceğiz:
    
    * Solda (1) taraftaki "Repository URL"ni seçtiğinizden emin olun.
    
    * Versiyon kontrolü (2) olarak "Git"in seçili olup olmadığını kontrol edin.
    * URL'yi kopyalayıp yapıştırın ```https://github.com/nightscout/AndroidAPS``` ana AAPS deposuna URL metin kutusuna (3) kopyalayıp yapıştırın.
    * Klonlanmış kodu (4) kaydetmek istediğiniz dizini seçin.
        
        ![Git'i Klonla](../images/studioSetup/21_CloneURL.png)

* "Klonla" (5) düğmesine tıklayın.
    
    ![Klon deposu](../images/studioSetup/22_Cloning.png)

* Depo klonlanırken "Arka Plan"a tıklamayın!

* Depo başarıyla klonlandıktan sonra, Android Studio klonlanan projeyi açacaktır.

* Projeye güvenmek isteyip istemediğiniz sorulacak. "Trust project" (Projeye güven) üzerine tıklayın!
    
    ![Projeye güven](../images/studioSetup/23_TrustProject.png)

* Alttaki durum çubuğunda, Android Studio'nun arka plan görevlerini çalıştırdığı bilgisini göreceksiniz.
    
    ![Arkaplan işlemleri](../images/studioSetup/24_GradleSyncRunning.png)

* Güvenlik duvarınız izin istiyorsa erişim izni verin.
    
    ![Güvenlik duvarı izni Java](../images/AndroidStudio361_18.png)

* Arka plan görevleri bittiğinde, muhtemelen (1) veya (2) veya (3) hataların oluştuğunu söyleyen bir hata göreceksiniz.
    
    ![SDK lisansı](../images/studioSetup/25_SyncFailed.png)
    
    Endişelenmeyin, bu yakında çözülecek!

(Building-APK-download-android-sdk)=

## Android SDK'i indirin

* Menüde Dosya (1) > Ayarlar (2) (veya Mac'te Android Studio > Tercihler) seçeneğine gidin.
    
    ![Ayarları aç](../images/studioSetup/30_Settings.png)

* Alt menüsünü (1) açmak için "Appearance & Behaviour" üzerine çift tıklayın.

* System Settings'e (2) çift tıklayın ve Android SDK'yı (3) seçin.
* "Android 9.0 (Pie)" (4) (API Level 28) öğesinin solundaki kutuyu işaretleyin.
    
    ![SDK ayarları](../images/studioSetup/31_AndroidSDK.png)

* Ok tıklatarak değişiklikleri onaylayın.
    
    ![SDK değişikliklerini onaylayın](../images/studioSetup/32_ConfirmSDK.png)

* Lisans sözleşmesini (1) kabul edin ve "Next"ye (2) tıklayın.
    
    ![SDK lisansını kabul et](../images/studioSetup/33_ConfirmLicense.png)

* SDK indirmesi ve kurulumu tamamlanana kadar bekleyin.
    
    ![SDK kurulumu sırasında bekleyin](../images/studioSetup/34_DownloadSDK.png)

* SDK kurulumu tamamlandığında "Finish" düğmesi maviye döner. Bu düğmeye tıklayın.
    
    ![SDK kurulumunu tamamlayın](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio, gradle sistemini güncellemenizi önerebilir. **Gradle'ı asla güncellemeyin!** Bu zorluklara yol açacaktır!

* Android Studio pencerenizin sağ alt tarafında Android Gradle Plugin'in güncellemeye hazır olduğuna dair bir bilgi görürseniz, "güncelleme" (1) metnine tıklayın.
    
    ![Gradle güncellemesi yok](../images/studioSetup/36_GradleUpdateRequest.png)

* İletişim kutusunda "Bana bu proje için bir daha hatırlatma" (2) öğesini seçin.
    
    ![Gradle güncellemesi yok](../images/studioSetup/37_GradleUpdateDeny.png)

* Devam etmeden önce Android Studio'yu yeniden başlatın.

(Building-APK-generate-signed-apk)=

## İmzalı APK oluştur

İmzalama, uygulamanızın kendi eseriniz olduğunu, ancak uygulamanın içinde bir tür dijital parmak izi olarak dijital bir şekilde belirtmeniz anlamına gelir. Bu gereklidir, çünkü Android'in güvenlik nedenleriyle çalıştırmak için yalnızca imzalı kodu kabul ettiğine dair bir kuralı vardır. Bu konu hakkında daha fazla bilgi için [bu bağlantıyı](https://developer.android.com/studio/publish/app-signing.html#generate-key) izleyin.

* Android Studio başlatıldıktan sonra tüm arka plan görevleri bitene kadar bekleyin.
    
    ![Arka plan görevlerini bekleyin](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Uyarı:*** Hata oluşursa, aşağıdaki adımlara devam etmeyin. \ Bilinen sorunlar için [sorun giderme bölümüne](../Installing-AndroidAPS/troubleshooting_androidstudio) bakın!
    
    ![Gradle Sync Hatası](../images/studioSetup/41_GradleSyncError.png)

* Menü çubuğunda "Build"a (1) tıklayın ve "Generate Signed Bundle / APK..." (2) öğesini seçin.
    
    ![Apk derleme](../images/studioSetup/42_MenuBuild.png)

* "Android App Bundle" yerine "APK"yı (1) seçin ve "İleri"ye (2) tıklayın.
    
    ![Bundle yerine APK](../images/studioSetup/43_Apk.png)

* Modülün "AAPS.app" (1) olarak ayarlandığından emin olun.

* Kendi "key store" oluşturmaya başlamak için "Create new..." (2) öğesini tıklayın.
    
    ***Not:*** Bu durumda bir key store imzalama bilgilerinin depolandığı bir dosyadan başka bir şey değildir. Şifrelenir ve bilgiler şifrelerle güvence altına alınır.
    
    ![Key store oluştur](../images/studioSetup/44_KeystoreNew.png)

* Anahtar deponuz için bilgisayarınızda bir yol seçmek için klasör sembolüne tıklayın.
    
    ![Key store oluştur](../images/studioSetup/45_KeystoreDialog.png)

* Key store'un kaydedileceği yolu seçin (1).
    
    ![Key store oluştur](../images/studioSetup/46_KeystorePath.png)
    
    ***Uyarı: Proje ile aynı klasöre kaydetmeyin. Farklı bir dizin kullanmalısınız!*** İyi bir konum, Ev klasörünüz olacaktır.

* Key store (2) için bir dosya adı yazın ve "OK" (3) ile onaylayın.

* Key store parolasına girin (2) ve onaylayın(3). ![Key store yolunu seçin](../images/studioSetup/47_KeystoreDialog.png)
    
    ***Not:*** key store ve key için parolaların çok karmaşık olması gerekmez. Bunları hatırladığınızdan veya güvenli bir yere not aldığınızdan emin olun. Gelecekte şifrelerinizi hatırlamayacaksanız, [kayıp key store için sorun giderme](troubleshooting_androidstudio-lost-keystore) konusuna bakın.

* Key için bir takma ad alias (4) girin. Ne isterseniz seçebilirsiniz.

* Girin (5) ve key parolasını onaylayın (6)

* Geçerlilik Validity (7) varsayılan olarak 25 yıldır. Varsayılan değeri değiştirmeniz gerekmez.

* Adı ve soyadı girilmelidir (8). Diğer tüm bilgiler isteğe bağlıdır.

* İşiniz bittiğinde "OK"yi (9) tıklayın.

* Şifreleri hatırlama kutusunun işaretli olduğundan emin olun (1). Böylece, apk'yi bir sonraki oluşturduğunuzda (yani yeni bir AAPS sürümüne güncelleme yaparken) bunları tekrar girmeniz gerekmez.

* "Next"i (2) tıklayın.
    
    ![Parolaları hatırla](../images/studioSetup/48_KeystoreSave.png)

* Derleme varyantını seçin "fullRelease" (1) seçin ve "Finish"e basın.
    
    ![Derleme varyantı seçin](../images/studioSetup/49_BuildVariant.png)

* Android Studio, altta "Gradle Build running" gösterecektir. Bu, bilgisayarınıza ve internet bağlantınıza bağlı olarak biraz zaman alır. **Sabırlı olun!**
    
    ![Gradle Çalışıyor](../images/studioSetup/50_GradleRunning.png)

* Android Studio, derleme tamamlandıktan sonra "Generate Signed APK" bilgisini görüntüler.
    
    ![Derleme tamamlandı](../images/studioSetup/51_BuildFinished.png)

* Derlemenin başarılı olmaması durumunda [sorun giderme bölümüne](../Installing-AndroidAPS/troubleshooting_androidstudio) bakın.

* Genişletmek için bildirime tıklayın.

* "Bul" bağlantısını tıklayın.
    
    ![Derleneni bul](../images/studioSetup/52_BuildLocate.png)
    
    * Bildirim kaybolursa, her zaman "Olay günlüğü"nü açabilir ve orada aynı bağlantıyı seçebilirsiniz. ![Başarıyla Derlendi - event log](../images/studioSetup/53_EventLog.png)

* Dosya yöneticiniz (Windows Gezgini) açılacaktır. "full" (1) > "release" (2) dizinine gidin.
    
    ![Apk dosya konumu](../images/studioSetup/54_APKlocation.png)

* "app-full-release.apk" (3) aradığınız dosyadır!

(Building-APK-transfer-apk-to-smartphone)=

## APK'yı akıllı telefona aktarın

App-full-release.apk dosyasını telefonunuza aktarmanın en kolay yolu [USB kablosu veya Google Drive](https://support.google.com/android/answer/9064445?hl=en) kullanmaktır. Lütfen posta yoluyla transferin zorluklara neden olabileceğini ve tercih edilen yol olmadığını unutmayın.

Telefonunuzda bilinmeyen kaynaklardan kuruluma izin vermelisiniz. Bunun nasıl yapılacağına ilişkin kılavuzlar internette bulunabilir (yani [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)).

## Sorun giderme

[Android Studio'da sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) sayfasına bakın.