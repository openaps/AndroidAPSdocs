# APK oluşturma

## Programı İndirmek yerine kendiniz oluşturun...

**AndroidAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Apk'yi oluşturmak için lütfen **[Android Studio Sürüm 2020.3.1](https://developer.android.com/studio/)** veya daha yenisini kullanın.
* [Windows 10 32 bit sistemler](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process), Android Studio 2020.3.1 tarafından desteklenmemektedir.

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
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Disk</td>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD önerilir.</td>
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
* Adım adım izleme bölümünde, somut bir kurulumun ekran görüntülerini bulacaksınız. APK'yı oluşturmak için kullanacağımız yazılım geliştirme ortamı olan Android Studio'nun sürümleri çok hızlı değişeceğinden, bu sizin kurulumunuzla aynı olmayacak ancak size iyi bir başlangıç noktası sunacaktır. Android Studio ayrıca Windows, Mac OS X ve Linux üzerinde çalışır ve her platform arasında bazı yönlerden küçük farklılıklar olabilir. Önemli bir şeyin yanlış veya eksik olduğunu fark ederseniz, lütfen "AndroidAPS kullanıcıları" facebook grubuna haber verin veya Discord chat sohbet grubu altında [Android APS](https://discord.gg/4fQUWHZ4Mw)'a bir göz atabilirsiniz.

## Genel Bakış

Genel olarak, APK dosyasını oluşturmak için gerekli adımlar:

1. [Git yükleyin](../Installing-AndroidAPS/git-install.rst)
2. [Android Studio'yu yükleyin](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Android Studio tercihlerinde git yolunu ayarlayın](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [AndroidAPS kodlarını indirin](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Android SDK'i indirin](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Uygulamayı oluşturun](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (imzalı apk oluşturun)
7. [Telefonunuza apk dosyasını aktarın](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Eğer xDrip+ kullanıyorsanız, alıcıyı tanımlayın](..//Configuration/xdrip#identify-receiver)

## Adım adım izlenecek yol

APK dosyasını oluşturmak için gerekli adımların ayrıntılı açıklaması.

## Git'i kurun (eğer yüklü değilse)

[git kurulum sayfasındaki](../Installing-AndroidAPS/git-install.rst) kılavuzu izleyin.

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

"Ayarları Doğrula" iletişim kutusunda "Finish" düğmesini tıklayın.

![Ayarları doğrulayın](../images/studioSetup/06_Verify.png)

Android Studio ek bileşenleri indirirken bekleyin ve sabırlı olun. Her şey indirildikten sonra "Finish" düğmesi maviye döner. Şimdi düğmeye tıklayın.

![Downloading components](../images/studioSetup/07_Downloading.png)

## Set git path in preferences

Make sure [git is installed](../Installing-AndroidAPS/git-install.rst) on your computer and you have restarted your computer after installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.rst).

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
* If you install git via homebrew there is no need to change any preferences. Her ihtimale karşı: Android Studio - Tercihler altında bulabilirsiniz.

## AndroidAPS kodlarını indirin

* On the Android Studio welcome screen select "Projects" (1) on the left and then "Get from VCS" (2).
    
    ![Android Studio wizard](../images/studioSetup/20_ProjectVCS.png)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1) > New (2) > Project from Version Control... (3)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * We will now tell Android Studio were to get the code from:
    
    * Make sure you have selected "Repository URL" on the left (1).
    
    * Check if "Git" is selected as version control (2).
    * Copy and paste the URL ```https://github.com/nightscout/AndroidAPS``` to the main AndroidAPS repository into the URL textbox (3).
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

* Güvenlik duvarınız izin istiyorsa erişim izni verin.
    
    ![Güvenlik duvarı izni Java](../images/AndroidStudio361_18.png)

* Arka plan görevleri bittiğinde, muhtemelen (1) veya (2) veya (3) hataların oluştuğunu söyleyen bir hata göreceksiniz.
    
    ![SDK lisansı](../images/studioSetup/25_SyncFailed.png)
    
    Endişelenmeyin, bu yakında çözülecek!

## Android SDK'i indirin

* Menüde File (1) > Settings (2)'ye gidin.
    
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
    
    ![No gradle update](../images/studioSetup/36_GradleUpdateRequest.png)

* In the dialog box the select "Don't remind me again for this project" (2).
    
    ![No gradle update](../images/studioSetup/37_GradleUpdateDeny.png)

* Restart Android Studio before you continue.

## Generate signed APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* After Android Studio is started, wait until all background tasks are finished.
    
    ![Wait for background tasks](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Warning:*** If errors occur, do not continue with the following steps. \ Consult the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio) for known problems!
    
    ![Gradle Sync Error](../images/studioSetup/41_GradleSyncError.png)

* Click "Build" (1) in the menu bar and select "Generate Signed Bundle / APK..." (2).
    
    ![Build apk](../images/studioSetup/42_MenuBuild.png)

* Select "APK" (1) instead of "Android App Bundle" and click "Next" (2).
    
    ![APK instead of bundle](../images/studioSetup/43_Apk.png)

* Make sure that module is set to "AndroidAPS.app" (1).

* Click "Create new..." (2) to start creating your key store.
    
    ***Note:*** A key store in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords.
    
    ![Create key store](../images/studioSetup/44_KeystoreNew.png)

* Click the folder symbol to select a path on your computer for your key store.
    
    ![Create key store](../images/studioSetup/45_KeystoreDialog.png)

* Select the path where your key store shall be saved (1).
    
    ![Create key store](../images/studioSetup/46_KeystorePath.png)
    
    ***Warning: Do not save in same folder as project. You must use a different directory!*** A good location would be your home folder.

* Type a file name for your key store (2) and confirm with "OK" (3).

* Enter (2) and confirm (3) the password for your key store. ![Select key store path](../images/studioSetup/47_KeystoreDialog.png)
    
    ***Note:*** Passwords for key store and key do not have to be very sophisticated. Make sure to remember those or make a note in a safe place. In case you will not remember your passwords in the future, see [troubleshooting for lost key store](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).

* Enter an alias (4) for your key. Choose whatever you like.

* Enter (5) and confirm (6) the password for your key

* Validity (7) is 25 years by default. You do not have to change the default value.

* First and last name must be entered (8). All other information is optional.

* Click "OK" (9) when you are done.

* Make sure the box to remember passwords is checked (1). So you don't have to enter them again next time you build the apk (i.e. when updating to a new AndroidAPS version).

* Click "Next" (2).
    
    ![Remember passwords](../images/studioSetup/48_KeystoreSave.png)

* Select build variant "fullRelease" (1) and press "Finish".
    
    ![Select build variant](../images/studioSetup/49_BuildVariant.png)

* Android Studio will show "Gradle Build running" at the bottom. This takes some time, depending on your computer and internet connection. **Be patient!**
    
    ![Gradle Running](../images/studioSetup/50_GradleRunning.png)

* Android Studio will display the information "Generate Signed APK" after build is finished.
    
    ![Build finished](../images/studioSetup/51_BuildFinished.png)

* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio).

* Click on the notification to expand it.

* Click on the link "locate".
    
    ![Locate build](../images/studioSetup/52_BuildLocate.png)
    
    * If the notification is gone, you can always open the "Event log" and select the same link there. ![Build successfully - event log](../images/studioSetup/53_EventLog.png)

* Your file manager/explorer will open. Navigate to the directory "full" (1) > "release" (2).
    
    ![File location apk](../images/studioSetup/54_APKlocation.png)

* "app-full-release.apk" (3) is the file you are looking for!

## Transfer APK to smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

Telefonunuzda bilinmeyen kaynaklardan kuruluma izin vermelisiniz. Bunun nasıl yapılacağına ilişkin kılavuzlar internette bulunabilir (yani [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)).

## Sorun giderme

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).