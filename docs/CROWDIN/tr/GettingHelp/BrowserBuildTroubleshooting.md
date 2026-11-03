(aaps-ci-troubleshooting)=

# Tarayıcı ile oluşturma: sorun giderme

```{note}
Bu sayfa, [Tarayıcı ile oluşturma](../SettingUpAaps/BrowserBuild.md) için sorun giderme ipuçlarını toplar.

**AAPS Builder** mı kullanıyorsunuz? Önce onun kendi [sorun giderme bölümüyle](#aaps-builder-troubleshooting) başlayın. Aşağıdaki Google Drive bölümleri onun için de geçerlidir.
```

## AAPS-CI sorun giderme

(aaps-ci-read-the-logs)=
### Önce: neyin yanlış gittiğini bulun

Bir oluşturma başarısız olduğunda GitHub her adımın günlüğünü tutar. Günlük, hangi adımın neden başarısız olduğunu söyler. Başka bir şey denemeden önce günlüğü okuyun: bu sayfada aradığınız şey ve yardım edenlerin sizden isteyeceği şey hata mesajıdır.

1. AndroidAPS'in GitHub kopyanızda **Actions** sekmesini açın. Başarısız bir oluşturmanın yanında kırmızı bir çarpı vardır. Adına dokunun.

   ![Actions listesinde başarısız çalıştırma](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. Çalıştırma özeti **Failure** (başarısız) durumunu ve altında başarısız olan işi gösterir (**Build AAPS**, kırmızı çarpıyla).

   ![Çalıştırma özeti](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. **Annotations** (açıklamalar) bölümüne kaydırın ve kırmızı **Build AAPS** satırına dokunun.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. İş açılır. Gri onay işaretli adımlar başarılı oldu. Kırmızı çarpılı adım başarısız olan adımdır: GitHub onu sizin için açar. Ondan sonraki adımlar atlandı (gri daire).

   ![İşin adımları](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. `Error: Process completed with exit code 1.` satırının hemen üstündeki satırları okuyun: bu satırlar sorunu açıklar. Bu örnekte **Retrieving Google Drive access token** adımı `invalid_grant` ve `Token has been expired or revoked.` ile başarısız oldu, [Google yenileme belirtecinin süresi doldu](#aaps-ci-google-token-expired) bölümüne bakın.

   ![Günlükteki hata](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Yardım mı istiyorsunuz? Başarısız adımın adını ve hata satırlarını paylaşın (yukarıdaki gibi bir ekran görüntüsü yeterlidir). Secret'larınızın içeriğini asla paylaşmayın.
```

(aaps-ci-update-secret)=
#### Bir secret'ı güncelleme

Birçok düzeltme, bir secret'ın değerini değiştirmek anlamına gelir. AndroidAPS'in GitHub kopyanızda **Settings** → **Secrets and variables** → **Actions** yolunu izleyin ve secret'ın yanındaki kaleme dokunun.

![Secret listesi](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Yeni değeri girin veya yapıştırın ve **Update secret** düğmesine dokunun. GitHub eski değeri asla göstermez: alan her zaman boştur.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Bir düzeltmeden sonra oluşturmayı yeniden çalıştırma

Nedeni düzelttikten sonra baştan başlamanız gerekmez: başarısız çalıştırmayı açın, **...** (sağ üst) öğesine, ardından **Re-run failed jobs** seçeneğine dokunun.

![Re-run menüsü](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

**Re-run jobs** düğmesine dokunun. Her zamanki gibi **Run workflow** ile yeni bir oluşturma da başlatabilirsiniz.

![Re-run penceresi](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### aaps-ci-preparation web sayfası
  - Hazırlık sayfası geçici bir yerel sunucu tarafından gösterilir (örneğin bir bilgisayarda Simple Web Server). Bu sunucu Google yenileme belirtecini de alır.
  - Aşağıdaki ekranı görüyorsanız yerel sunucu durmuştur veya ona ulaşılamıyordur.
  - Hazırlık sayfasını kapatın, yerel sunucunun çalıştığını kontrol edin, sonra aaps-ci-preparation.html dosyasını 2. Adımdaki gibi yeniden açın ve kalan adımları tamamlayın. Bu, özellikle kurulum sırasında ilk Google bağlantısını oluştururken gereklidir.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google yenileme belirtecinin süresi doldu
  - Google OAuth2 yenileme belirteçlerinin süresi, 6 ay kullanılmazsa dolar. Belirteçler başka durumlarda da geçersiz olabilir (ör. Google hesabınızın parolasını değiştirdiyseniz veya erişimi elle iptal ettiyseniz). Daha fazla bilgi için [Google OAuth2 dokümantasyonuna](https://developers.google.com/identity/protocols/oauth2) bakın.
  - [Oluşturma günlüğünde](#aaps-ci-read-the-logs) **Retrieving Google Drive access token** adımı `invalid_grant` ve `Token has been expired or revoked.` ile başarısız olur:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Oluşturmanız süresi dolmuş veya iptal edilmiş bir Google yenileme belirteci yüzünden başarısız olursa, yeni bir `GDRIVE_OAUTH2` belirteci almak için [Google Drive yetkilendirmesi](#aaps-ci-google-drive-auth) adımlarını yeniden yapmanız, GitHub deponuzda [secret'ı güncellemeniz](#aaps-ci-update-secret), sonra [oluşturmayı yeniden çalıştırmanız](#aaps-ci-rerun) gerekir.
  - Yetkilendirme yine başarısız olursa veya Google artık onayınızı istemiyorsa, önce Google hesabınızdan mevcut AAPS erişimini kaldırın, [aşağıya](#aaps-ci-google-remove-access) bakın.

(aaps-ci-google-remove-access)=
### AAPS erişimini Google hesabınızdan kaldırın ve yetkilendirmeyi yeniden başlatın
  - Google Drive yetkilendirmesi sürekli başarısız oluyorsa veya temiz bir durumdan yeniden başlamak istiyorsanız, önce AAPS'e daha önce verdiğiniz erişimi kaldırın, sonra yetkilendirmeyi yeniden yapın.
  - Telefonunuzda [https://myaccount.google.com](https://myaccount.google.com) adresini açın, **Security** (Güvenlik) seçeneğine dokunun, **Your connections to third-party apps & services** (Üçüncü taraf uygulama ve hizmetlerle bağlantılarınız) bölümüne kaydırın ve bağlı uygulamalar listesini açın. Doğrudan [https://myaccount.google.com/connections](https://myaccount.google.com/connections) adresine de gidebilirsiniz.
  - Listede **AAPS** öğesine dokunun.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - Sayfa, AAPS'e verdiğiniz erişimi gösterir (uygulamayla kullanılan Google Drive dosyaları). Bağlantıyı kaldırmak için **Delete all** (Tümünü sil) seçeneğine veya önce incelemek için **See details** (Ayrıntıları göster) seçeneğine dokunun.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Ayrıntılar sayfasında **Remove all access** (Tüm erişimi kaldır) seçeneğine dokunun.

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - **Confirm** (Onayla) düğmesine dokunun.

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google, AAPS'in artık erişimi olmadığını onaylar. AAPS artık bağlı uygulamalar listesinde görünmez.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Şimdi yetkilendirmeyi temiz bir şekilde yeniden başlatın: hazırlık sayfasını ve dosya yöneticisi uygulamasını **ikisini birden** kapatın, aaps-ci-preparation.html dosyasını dosya yöneticisinden yeniden açın ve [Google Drive yetkilendirmesi](#aaps-ci-google-drive-auth) adımlarını yeniden yapın. Google sizden yeniden erişim izni isteyecek ve sayfa yeni bir `GDRIVE_OAUTH2` belirteci verecektir.
  - GitHub deponuzda [`GDRIVE_OAUTH2` secret'ını yeni belirteç ile güncelleyin](#aaps-ci-update-secret), sonra [oluşturmayı yeniden çalıştırın](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### OAuth doğrulamasını engelleyebilecek yazılımları devre dışı bırakın
  - OAuth anahtarını almaya çalışmadan önce telefondaki tüm VPN veya güvenlik uygulamalarını (güvenlik duvarı, kötü amaçlı yazılım koruması vb.) devre dışı bırakın.

(aaps-ci-actions-permission)=
### GitHub Actions izin ayarlarını kontrol edin
  - GitHub Actions ilkelerinin “Allow all actions and reusable workflows” olarak ayarlandığından emin olun (Settings → Actions → General). Değiştirirseniz seçeneklerin altındaki **Save** düğmesine basın.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### GitHub iş akışı (workflow) izin ayarlarını kontrol edin
  - Oluşturma, aşağıdakine benzer bir "Invalid workflow file" hatasıyla hemen başarısız olursa, deponuzun varsayılan iş akışı izinleri çok kısıtlayıcıdır:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Workflow permissions ayarının “Read and write permissions” olduğundan emin olun (Settings → Actions → General → Workflow permissions). Sonra kaydedin ve oluşturma iş akışını yeniden çalıştırın.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Oluşturma, anahtar deposu parolası kontrol edilirken başarısız oluyor
  - [Oluşturma günlüğünde](#aaps-ci-read-the-logs) **Validating keystore, alias and password** adımı `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect` ve ardından `Keystore was tampered with, or password was incorrect` ile başarısız olur. Oluşturma burada durur: anahtar deposu ve parolalar AAPS oluşturulmadan önce kontrol edilir.

  ![Oluşturma günlüğünde yanlış anahtar deposu parolası](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - Oluşturma iş akışı, parolalarınızdaki her karakteri olduğu gibi korur. `KEYSTORE_PASSWORD` ve `KEY_PASSWORD` değerlerini tam olarak oldukları gibi girin; ters eğik çizgi veya başka bir kaçış karakteri eklemeyin. Ters eğik çizgi eklediyseniz, [secret'ları parolanın tam haliyle güncelleyin](#aaps-ci-update-secret). Aşağıdaki örnek yanlıştır: parola `Example2026`, ters eğik çizgi sonradan eklenmiş.

  ![Ters eğik çizgi eklenerek girilmiş parola](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Parolanız doğru olduğu halde oluşturma APK imzalanırken hâlâ başarısız oluyorsa ve parola `$`, ters tırnak (backtick), `"` veya `\` içeriyorsa, fork'unuzdaki iş akışı dosyası Eylül 2026'dan eskidir ve bu karakterleri hâlâ yorumluyordur. [Fork'unuzu](#Update-to-new-version-update-your-repo) en son dev ile senkronize edin, sonra oluşturma iş akışını yeniden çalıştırın.
  - Dikey çizgi `|` özel bir durumdur. [Seçenek 1](#aaps-ci-option1)'in hazırlık sayfası; anahtar deposunu, parolaları ve takma adı `|` ile ayrılmış tek bir `KEYSTORE_SET` secret'ında birleştirir. İş akışı bunu bu karakterden böler. Hazırlık sayfasının oluşturduğu parola yalnızca harf ve rakam içerir, bu yüzden Seçenek 1 ile bu durum oluşamaz. Bu durum yalnızca `|` içeren bir paroladan kendiniz bir `KEYSTORE_SET` secret'ı oluşturduysanız olabilir. Bu durumda `KEYSTORE_SET` secret'ını silin ve bunun yerine [Seçenek 2](#aaps-ci-option2)'nin ayrı secret'larını girin.
