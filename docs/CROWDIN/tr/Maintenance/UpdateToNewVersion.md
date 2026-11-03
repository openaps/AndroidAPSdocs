# Yeni bir sürüme veya dala güncelleme

## İndirmek yerine kendiniz oluşturun

Tıbbi cihazlarla ilgili düzenlemeler nedeniyle **AAPS** indirilmeye hazır olarak sunulmaz. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../UsefulLinks/FAQ.md) bakın.

## Önemli notlar

- Yeni bir sürüm yayınlandıktan sonra lütfen **AAPS**'i mümkün olan en kısa sürede yeni sürüme güncelleyin.
- Yeni bir sürüm yayınlandığında **AAPS** uygulamasının içinde yeni sürümle ilgili bir bilgi bandı göreceksiniz.
- Yeni sürüm, yayınlandığı anda Facebook'ta da duyurulur.
- Sürüm yayınlandıktan sonra, güncellemeye başlamadan önce lütfen [Sürüm notlarını](ReleaseNotes.md) ayrıntılı okuyun ve sorularınızı Facebook veya Discord'da toplulukla netleştirin.
- **AAPS** 3.x'ten mi güncelliyorsunuz? Önce [AAPS v4'te neler değişti](V4Changes.md) sayfasını okuyun: taşınan, adı değişen veya kaldırılan özellikleri listeler.
- [Ayarlarınızı dışa aktarmayı](ExportImportSettings.md) unutmayın. Güncellemeden sonra bunları yeniden içe aktardığınızda, pompa ayarlarının da değiştirilip değiştirilmeyeceğini siz seçersiniz.

## AAPS'i tarayıcı ile oluşturarak güncelleme

AAPS uygulamanızı zaten tarayıcı ile mi oluşturdunuz? Kullandığınız yöntemin talimatlarını izleyin:

- **AAPS Builder**: uygulamayı özel deponuzun (genellikle `my-aaps` adlıdır) **Build AAPS** sayfasından oluşturur ve GitHub'dan indirirsiniz. [AAPS'i AAPS Builder ile güncelleme](#aaps-builder-updates) bölümündeki adımları izleyin. Senkronize edilecek bir fork yoktur.
- **Fork ve hazırlık dosyası**: **AAPS-CI** iş akışını AndroidAPS'in kendi kopyanızda (fork), yani GitHub hesabınızdaki `AndroidAPS` adlı depoda çalıştırırsınız ve uygulama Google Drive'ınıza gelir. [Tarayıcı ile güncelleme (fork)](./UpdateBrowserBuild.md) sayfasındaki adımları izleyin.

## AAPS'i Android Studio ile güncelleme

[Bu talimatları](./UpdateComputerBuild.md) izleyin.

## AAPS'i komut satırı ile güncelleme

AAPS'i daha önce oluştururken kullandığınız [talimatların aynısını](../SettingUpAaps/CLIBuild.md) kullanın, ancak yeni değişiklikleri git ile çekin (pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## Güncellemeden sonra

Bu adımlar her oluşturma yöntemi için aynıdır. Güncellemeden sonra özel talimatlar olup olmadığını [Sürüm notlarında](../Maintenance/ReleaseNotes.md) kontrol edin.

Yeni apk'yı yükledikten sonra:

- sol üstteki **menüyü** (☰) ve ardından **Hakkında**'yı açarak telefonunuzdaki **AAPS** sürümünü kontrol edebilirsiniz (aşağıdaki ekran görüntüsünde olduğu gibi). Güncel **AAPS** sürümünü görebilirsiniz;
- ayarlarınızı içe aktardığınızdan emin olun; ve
- lütfen **Ayarlar** altındaki **AAPS** ayarlarınızı kontrol edin ve hâlâ doğru olduklarından emin olun.

![Yüklü AAPS sürümünü gösteren Hakkında iletişim kutusu](../images/about_dialog_version.png)