# Yeni bir ana sürüme veya yan sürüme güncelleme

## Programı İndirmek yerine kendiniz oluşturun...

**AndroidAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Lütfen yeni bir sürüm çıktıktan sonra mümkün olan en kısa sürede güncelleyin. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes.md#release-notes) about the new version.
* 2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. Git'e aşina değilseniz, güncellemenin en kolay yolu, AndroidAPS dizini kaldırmak ve [yeni bir klon](../Installing-AndroidAPS/Building-APK.md) oluşturmaktır.
* Apk'yi oluşturmak için lütfen **[Android Studio Sürüm 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** veya daha yenisini kullanın.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio.md#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Mevcut sürüm için [Sürüm Notlarını](../Installing-AndroidAPS/Releasenotes) okuduğunuzdan emin olun

## AndroidAPS sürümünüzü güncellemeye genel bakış

1. [Export your settings](../Usage/ExportImportSettings.md#export-settings) from the existing AAPS version on your phone. İhtiyacınız olmayabilir, ancak üzülmektense kurtarmış olmak daha iyidir.
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [İmzalı APK Derleyin](../Installing-AndroidAPS/Update-to-new-version.md#build-the-signed-apk)
4. [Transfer the built apk](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) to your phone and install it
5. AndroidAPS'de [sürümü kontrol edin](#check-aaps-version-on-phone)
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](../Configuration/xdrip.md#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app).

Sorun yaşamanız durumunda, [Android Studio'da sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) konusu için ayrı sayfaya bakın.

## 1. Ayarlarınızı dışa aktarın

See the [Export & import settings](../Usage/ExportImportSettings.md#export-settings) page if you don't remember how to do this.

## 2. Yerel kopyanızı güncelleyin

2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. Git'e aşina değilseniz, güncellemenin en kolay yolu, diskinizdeki AndroidAPS ile dizini kaldırmak ve [Yeni klon](../Installing-AndroidAPS/Building-APK.md) yapmak için talimatları takip etmektir.

URL'yi zaten değiştirdiyseniz veya 2.8.x sürümünden güncelleme yaptıysanız, şu adımları izleyin:

* Mevcut AndroidAPS projenizi Android Studio ile açın. Projenizi seçmeniz gerekebilir. AndroidAPS projesine (Çift) tıklayın.
    
    ![Android Studio - Proje Seç](../images/update/01_ProjectSelection.png)

* Android Studio'nun menü çubuğunda Git -> Fetch'i seçin
    
    ![Android Studio Menüsü - Git - Fetch](../images/update/02_GitFetch.png)

* Sağ alt köşede Fetch'in başarılı olduğuna dair bir mesaj göreceksiniz.
    
    ![Android Studio Menüsü - Git - Fetch başarılı](../images/update/03_GitFetchSuccessful.png)

* Menü çubuğunda şimdi Git -> Pull'u seçin
    
    ![Android Studio Menüsü - Git - Pull](../images/update/04_GitPull.png)

* Tüm seçenekleri olduğu gibi bırakın (Origin/master) ve Pull'u seçin
    
    ![Android Studio - Git - Pull iletişim kutusu](../images/update/05_GitPullOptions.png)

* İndirme devam ederken bekleyin, bunu alt çubukta bilgi olarak göreceksiniz. Tamamlandığında, bir başarı mesajı göreceksiniz. Not: Güncellenen dosyalar değişiklik gösterebilir! Bu bir gösterge değildir
    
    ![Android Studio - Git - Pull başarılı](../images/update/06_GitPullSuccess.png)

* Gradle Sync, bazı bağımlılıkları indirmek için birkaç saniye çalışacaktır. Tamamlanana kadar bekleyin.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

## 3. İmzalı APK'yı Derleyin

Kaynak kodunuz artık yayınlanan güncel sürümdür. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk).

## 4. Apk dosyasını aktarma

Yükleyebilmeniz için apk'yı telefonunuza aktarmanız gerekir.

See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone)

## 5. Apk dosyasını kurun

Telefonunuzda bilinmeyen kaynaklardan kuruluma izin vermelisiniz. Bunun nasıl yapılacağına ilişkin kılavuzlar internette bulunabilir (yani [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)). Not: Derlemeyi Android Studio'da aynı mevcut anahtar deposuyla tamamladıysanız, telefonunuzdaki mevcut uygulamayı kaldırmanız gerekmez. Apk'yi kurduğunuzda, güncellemeleri yüklemek için talimatları izleyin. Android Studio'da yeni bir anahtar deposu oluşturarak imzaladığınız apk senaryosu için, apk'yi yüklemeden önce eski uygulamayı silmeniz gerekecektir.

## 6. Telefondaki AAPS sürümünü kontrol edin

Yeni apk'yı yükledikten sonra, sağ üstteki üç nokta menüsüne ve ardından Hakkında'ya tıklayarak telefonunuzdaki AAPS sürümünü kontrol edebilirsiniz. Mevcut sürümü görmelisiniz.

![Yüklü AAPS sürümü](../images/Update_VersionCheck282.png)

# Sorun giderme

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Ardından, sorununuz zaten belgelenmişse, [Android Studio sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) sayfasına bakın!