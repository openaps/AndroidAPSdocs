# Tarayıcı ile güncelleme (fork)

```{tip}
AAPS'i **AAPS Builder** ile mi oluşturdunuz? Bu sayfaya ihtiyacınız yok: [AAPS'i AAPS Builder ile güncelleme](#aaps-builder-updates) bölümüne bakın.
```

## İndirmek yerine kendiniz oluşturun

Tıbbi cihazlarla ilgili düzenlemeler nedeniyle **AAPS** indirilmeye hazır olarak sunulmaz. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../UsefulLinks/FAQ.md) bakın.

```{note}
**AAPS**'i ilk kez tarayıcı ile yükseltmek istiyorsanız: yedek anahtar deposu dosyanızı Google Drive'ınıza kopyalayın. Ardından bu kılavuz yerine [Tarayıcı ile **AAPS** oluşturma yöntemini](../SettingUpAaps/BrowserBuild.md) izleyin. Yeni bir anahtar deposu oluşturmak yerine bilgisayarınızdan kopyaladığınız anahtar deposunu seçmelisiniz.
Bu işlem yalnızca ilk seferde zorunludur. Sonraki yükseltmelerde bu kılavuzu izleyebilirsiniz.
```

```{tip}
**AAPS Builder'a mı geçiyorsunuz?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) daha basit bir tarayıcı ile oluşturma yöntemidir: senkronize edilecek bir fork yoktur ve uygulamayı doğrudan GitHub'dan indirirsiniz. Geçmek zorunda değilsiniz: bu kılavuz çalışmaya devam eder. Geçerseniz, önce [Önceki tarayıcı ile oluşturmadan gelenler](#aaps-builder-from-fork) bölümünde anlatıldığı gibi fork'unuzdan anahtar deponuzun bir kopyasını alın. Aksi halde yeni oluşturulan uygulama telefonunuzdaki AAPS'i güncelleyemez.
```

## Tarayıcı ile AAPS'in yeni bir sürümüne güncellemeye genel bakış

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Sorun yaşarsanız [Tarayıcı ile oluşturma: sorun giderme](../GettingHelp/BrowserBuildTroubleshooting.md) ayrı sayfasına bakın.

### Export your settings

Telefonunuzdaki mevcut **AAPS** sürümünden ayarlarınızı dışa aktarın. Belki gerekmez ama tedbirli olmak daha iyidir.

Bunu nasıl yapacağınızı hatırlamıyorsanız [Ayarları dışa ve içe aktarma](ExportImportSettings.md) sayfasına bakın.

(Update-to-new-version-update-your-repo)=
### GitHub deponuzu güncelleyin

[GitHub'a giriş yapın](https://github.com/login).

1. Repositories seçin.
2. Aşağı kaydırın ve kendi AndroidAPS deponuzu seçin.

![AndroidAPS deposunu seçme](../images/update/CI/GitHubUpdate1.png)

3. AndroidAPS'in kendi kopyanızı kullandığınızı doğrulayın (Forked from nightscout/AndroidAPS)
4. Güncellemek için Sync Fork'a dokunun (geride olan commit sayısı resimdekinden farklı olabilir)



![AndroidAPS deposunu senkronize etme](../images/update/CI/GitHubUpdate2.png)

5. Update Branch'e dokunun

![AndroidAPS deposunu güncelleme](../images/update/CI/GitHubUpdate3.png)

Not: AndroidAPS kopyanızı yanlışlıkla değiştirdiyseniz bu ekranı görürsünüz. Yayınlanmış sürüme dönmek için tüm değişiklikleri (commit'leri) silin (Discard).

![İstenmeyen değişiklikleri silme](../images/update/CI/GitHubUpdate4.png)

Artık kendi kopyanızı **AAPS**'in en son sürümüyle senkronize ettiniz (güncellediniz). Tebrikler.

![Depo senkronize edildi](../images/update/CI/GitHubUpdate5.png)

### İmzalı APK'yı oluşturmak için iş akışını (workflow) çalıştırın

1. AndroidAPS'in GitHub kopyanızda Actions seçin.
2. All Workflows'u genişletin.
3. AAPS-CI seçin

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Aşağı kaydırın ve Run Workflow'a dokunun.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Dalı master olarak bırakın. **Select AAPS Version** alanında, listenin en üstündeki en yeni sürüm olan **4.0.0**'ın seçili olduğunu kontrol edin. Fork'unuz güncel değilse, önceden seçilen sürüm daha eski bir sürümdür: iş akışını form açıldığı haliyle çalıştırırsanız bu eski sürümü yeniden oluşturursunuz ve uygulamanız güncellenmez. [Varyantı](#browserbuild-variant) (fullRelease) seçin ve ardından Run workflow'a dokunun.

   ```{note}
   Sürüm listesi, fork'unuzdaki iş akışının bir parçasıdır. **4.0.0** listede yoksa fork'unuz henüz senkronize edilmemiştir: [GitHub deponuzu güncelleyin](#Update-to-new-version-update-your-repo) adımına geri dönün.
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Workflow run was successfully requested mesajını göreceksiniz. Tarayıcı sayfanızı yenileyin, ardından oluşturma ilerlemesini izleyebilirsiniz. İşlem bittiğinde AAPS CI işleminin yanında yeşil bir onay işareti görünür. **AAPS**'in güncellenmiş sürümünü başarıyla oluşturdunuz. Bu, Master ve Wear apk'sının artık doğrudan Google Drive'ınıza kaydedildiği anlamına gelir (aşağıdaki gibi). AAPSClient apk'sını Github > nightscout > AndroidAPS sayfasından, [buradan](https://github.com/nightscout/AndroidAPS/releases) indirebilirsiniz


![İş akışını izleme](../images/update/CI/GitHubActions4.png)


### AAPS APK'sını yükleyin

1. Google Drive'ınızı açın
2. AAPS klasörüne girin, yeni sürüm klasörünü seçin. Orada hem telefon hem de Android Wear sürümlerini bulacaksınız.

![Google Drive konumu](../images/update/CI/GitHubActions5.png)

```{note}
Eylül 2026'dan itibaren Google'ın [Android geliştirici doğrulaması](#android-developer-verification), ülkenize bağlı olarak APK'yı dosyaya dokunarak yüklemeyi engelleyebilir. Ücretsiz çözüm yolları o sayfada açıklanmıştır.
```

[Buradan](#Update-to-new-version-check-aaps-version-on-phone) devam edin

(update-browser-build-troubleshooting)=

## Troubleshooting

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Ardından sorununuzun zaten belgelenip belgelenmediğini kontrol edin: **AAPS Builder** ile oluşturuyorsanız [AAPS Builder sorun giderme](#aaps-builder-troubleshooting), aksi halde [Tarayıcı ile oluşturma: sorun giderme](#aaps-ci-troubleshooting) bölümüne bakın.

Daha fazla yardıma ihtiyacınız olursa lütfen [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) veya [Discord](https://discord.gg/4fQUWHZ4Mw) üzerindeki diğer **AAPS** kullanıcılarına ulaşın.
