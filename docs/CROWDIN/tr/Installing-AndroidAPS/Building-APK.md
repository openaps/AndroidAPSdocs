# APK oluşturma

## Programı İndirmek yerine kendiniz oluşturun...

**AAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Please use **[Android Studio Giraffe" (2022.3.1)](https://developer.android.com/studio/)** or newer to build the apk.
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

Click "Next" on the "Verify Settings" dialog.

![Ayarları doğrulayın](../images/studioSetup/06_Overview.png)

Click on all three license agreement parts and select "Agree". When you have agreed to all, the "Finish" button will be enabled and you can "Finish".

    ![Agree license agreements](../images/studioSetup/07_LicenseAgreement.png)
    

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/studioSetup/08_Downloading.png)

(Building-APK-download-AAPS-code)=

## AAPS kodlarını indirin

* On the Android Studio welcome screen select "Projects" (1) on the left and then "Get from VCS" (2).
    
    ![Android Studio wizard](../images/studioSetup/20_ProjectVCS.png)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1) > New (2) > Project from Version Control... (3)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * We will now tell Android Studio were to get the code from:
    
    * Make sure you have selected "Repository URL" on the left (1).
    
    * Check if "Git" is selected as version control (2).
    * Copy and paste the URL ```https://github.com/nightscout/AndroidAPS``` to the main AAPS repository into the URL textbox (3).
    * Choose the directory where you want to save the cloned code (4).
        
        ![Clone Git](../images/studioSetup/21_CloneURL.png)

* Click button "Clone" (5).
    
    ![Clone repository](../images/studioSetup/22_Cloning.png)

* Do not click "Background" while repository is cloned!

* After the repository is cloned successfully, Android Studio will open the cloned project.

* You will be asked whether you want to trust the project. Click on "Trust project"!
    
    ![Trust project](../images/studioSetup/23_TrustProject.png)

* In the status bar at the bottom you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/studioSetup/24_GradleSyncRunning.png)

* Windows only: Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see an error saying that errors occurred (1) or (2) or (3).
    
    ![SDK licence](../images/studioSetup/25_SyncFailed.png)
    
    Don't worry, this will be solved soon!

(Building-APK-set-git-path-in-preferences)=

## Set git path in preferences

Make sure [git is installed](../Installing-AndroidAPS/git-install.md) on your computer and you have restarted your computer since installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.md).

* Menüde Dosya (1) > Ayarlar (2) (veya Mac'te Android Studio > Tercihler) seçeneğine gidin.
    
    ![Ayarları aç](../images/studioSetup/30_Settings.png)

* Double-click "Version Control" (1) to open the sub-menu.

* Click Git (2).
* Make sure update method "Merge" (3) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4).
    
    ![Android Studio settings](../images/studioSetup/11_GitPath.png)

* If automatic setting is successful git version will be displayed next to the path.
    
    ![Git version displayed](../images/studioSetup/12_GitVersion.png)

* Eventually git.exe cannot be found automatically or the Test will result in an error (1):
    
    ![Git not found](../images/studioSetup/13_GitVersionError.png)
    
    In this case click on the folder icon (2).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where git has been installed. You are looking for a file named "git.exe", located in **\bin** folder.

* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3) and click "OK" (4).
    
    ![Select git manually](../images/studioSetup/14_GitManualSelection.png)

* Check your selected git path again with the "Test" button as described above.

* When the git version is displayed next to the path (see screenshot above), close settings window by clicking "OK" button (5).

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

(Building-APK-download-android-sdk)=

## Android SDK'i indirin

* Menüde Dosya (1) > Ayarlar (2) (veya Mac'te Android Studio > Tercihler) seçeneğine gidin.
    
    ![Ayarları aç](../images/studioSetup/30_Settings.png)

* Languages & Frameworks tıklayarak menüyü açın (1)

* Android SDK (2)'yi seçin.
* "Android 9.0 (Pie)" (3) (API Level 28) öğesinin solundaki kutuyu işaretleyin.
    
    ![SDK ayarları](../images/studioSetup/31_AndroidSDK.png)

* Ok tıklatarak değişiklikleri onaylayın.
    
    ![SDK değişikliklerini onaylayın](../images/studioSetup/32_ConfirmSDK.png)

* Wait until the SDK download and installation is finished.
    
    ![Wait during SDK installation](../images/studioSetup/34_DownloadSDK.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.
    
    ![Finish SDK installation](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This will lead to difficulties!

* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "upgrade" (1).
    
    ![Gradle güncellemesi yok](../images/studioSetup/36_GradleUpdateRequest.png)

* In the dialog box the select "Don't remind me again for this project" (2).
    
    ![Gradle güncellemesi yok](../images/studioSetup/37_GradleUpdateDeny.png)

* Restart Android Studio before you continue.

(Building-APK-generate-signed-apk)=

## İmzalı APK oluştur

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Android Studio başlatıldıktan sonra tüm arka plan görevleri bitene kadar bekleyin.
    
    ![Arka plan görevlerini bekleyin](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Uyarı:*** Hata oluşursa, aşağıdaki adımlara devam etmeyin. \ Bilinen sorunlar için [sorun giderme bölümüne](../Installing-AndroidAPS/troubleshooting_androidstudio) bakın!
    
    ![Gradle Sync Hatası](../images/studioSetup/41_GradleSyncError.png)

* Menü çubuğunda "Build"a (1) tıklayın ve "Generate Signed Bundle / APK..." (2) öğesini seçin.
    
    ![Apk derleme](../images/studioSetup/42_MenuBuild.png)

* "Android App Bundle" yerine "APK"yı (1) seçin ve "İleri"ye (2) tıklayın.
    
    ![Bundle yerine APK](../images/studioSetup/43_Apk.png)

* Make sure that module is set to "AndroidAPS.app" (1).

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

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Sorun giderme

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).