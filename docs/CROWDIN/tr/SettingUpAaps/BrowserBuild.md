(browser-build)=

# Tarayıcı ile oluşturma

AAPS'i GitHub Actions ile oluşturma.

**Desteklenen en düşük AAPS sürümü 3.3.2.1'dir.**

## İndirmek yerine kendiniz oluşturun

**Tıbbi cihazlarla ilgili düzenlemeler nedeniyle AAPS uygulaması (bir apk dosyası) indirilemez. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz!**

Ayrıntılar için [SSS sayfasına](../UsefulLinks/FAQ.md) bakın.

(Building-APK-without-a-computer)=

## Oluşturma yöntemini seçin

Oluşturmayı yaptığınız cihaza uyan yöntemi seçin:

### Android telefonda: AAPS Builder (önerilen)

Bir kurulum sayfası, GitHub'da size özel bir oluşturma deposu (repository) açmanız için size adım adım yol gösterir. Yüklenecek bir şey yok, hazırlık dosyası yok ve her oluşturmayı kendiniz başlatırsınız. Uygulamayı doğrudan GitHub'dan indirirsiniz. Google Drive isteğe bağlıdır.

Bu yöntem bilgisayardaki bir tarayıcıdan da çalışır.

**→ [AAPS Builder ile tarayıcıda oluşturma](BrowserBuildAapsBuilder.md)**

### Bilgisayarda veya iPhone / iPad'de: fork ve hazırlık dosyası

GitHub'da AAPS kaynak kodunun bir kopyasını (fork) oluşturursunuz, anahtar deponuzu (keystore) bir hazırlık dosyası ile oluşturursunuz ve oluşturulan uygulama Google Drive'ınıza kaydedilir. Aşağıdaki dört adımı izleyin.

```{note}
**Zaten bir fork ile mi oluşturuyorsunuz?** [Tarayıcı ile güncelleme](../Maintenance/UpdateBrowserBuild.md) bölümünde anlatıldığı gibi güncellemeye devam edin veya AAPS Builder'a geçin. Geçiş yapmak için önce fork'unuzdan anahtar deponuzun bir kopyasını alın: bkz. [Önceki tarayıcı ile oluşturmadan gelenler](#aaps-builder-from-fork).
```

Tarayıcınızda birden fazla sekme kullanmanız ve birinden diğerine geçmeniz gerekecek. Chrome örneği:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Sekmeden sekmeye geçmeniz gerekecek: birinden diğerine geçerken kaybolmamak için tüm sekmeler kapalıyken başlayın.
```

#### Neye ihtiyacınız var

- Oluşturulan uygulamanın Google Drive'ınıza kaydedilebilmesi için bir **Google hesabı**.
- Bir **GitHub hesabı** (ücretsiz) – bunu Adım 1'de oluşturursunuz.
- Aynı anda birkaç sekmeyi açık tutabilen bir **web tarayıcısı** (aşağıda Chrome kullanıldığı varsayılmıştır).
- **Hazırlık dosyasını çalıştırmak için küçük bir yardımcı program**. Hangisine ihtiyacınız olduğu, oluşturmayı yaptığınız cihaza bağlıdır – şimdi yüklenecek bir şey yok, Adım 2 cihazınıza göre size yol gösterir:
  - **Bilgisayar (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** ek uygulama gerekmez – yerleşik Dosyalar uygulamasını ve tarayıcıyı kullanırsınız.

#### Adımlar

Tarayıcı ile oluşturma bir dizi seçimden oluşur. Bu adımları sırayla izleyin:

1. **[GitHub fork'unuzu oluşturun](BrowserBuildFork.md)** – AAPS kaynak kodunun kişisel kopyanızı oluşturun.
2. **[İmzalama anahtar deponuzu oluşturun](BrowserBuildKeystore.md)** – en önemli karar: yeni bir anahtar deposu oluşturun (Seçenek 1) veya mevcut anahtar deponuzu yükleyin (Seçenek 2), sonra cihazınıza uygun sayfayı izleyin.
3. **[Google Drive'ı yetkilendirin](BrowserBuildGoogleDrive.md)** – GitHub'ın oluşturulan uygulamayı Google Drive'ınıza kaydetmesine izin verin.
4. **[APK'yı oluşturun](BrowserBuildAPK.md)** – GitHub Actions iş akışını (workflow) çalıştırın, sürümünüzü ve varyantınızı seçin.

Sorun yaşarsanız **[Tarayıcı ile oluşturma: sorun giderme](../GettingHelp/BrowserBuildTroubleshooting.md)** sayfasına bakın. Fork ile yapılan isteğe bağlı işlemler için bkz. [anahtar deponuzu dışa aktarma](#ci-keystore-export) veya [bir commit'i cherry-pick ile ekleme](#github-cherry-pick).

----

**[Adım 1 – GitHub fork'unuzu oluşturun](BrowserBuildFork.md) ile başlayın →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Adım 1: Fork'unuzu oluşturun <BrowserBuildFork.md>
Adım 2: Anahtar deponuzu oluşturun <BrowserBuildKeystore.md>
Adım 3: Google Drive'ı yetkilendirin <BrowserBuildGoogleDrive.md>
Adım 4: APK'yı oluşturun <BrowserBuildAPK.md>
```
