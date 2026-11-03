(github-cherry-pick)=

# Tarayıcı ile oluşturma: bir commit'i cherry-pick ile ekleme

```{note}
Bu isteğe bağlı, ileri düzey bir işlemdir. Yalnızca bir **fork** ile oluşturuyorsanız çalışır ([Tarayıcı ile oluşturma adım 1–4](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder** depolarında bu iş akışı (workflow) yoktur.
```

Bunu yalnızca bir geliştirici, yayımlanmış bir sürüme girmeden önce belirli bir değişikliği test etmenizi istediğinde kullanın (size bir veya daha fazla commit hash'i verir).

## Başlamadan önce

- [Fork'unuzu senkronize edin](#Update-to-new-version-update-your-repo): bu iş akışı dalınızın (branch) şu anki durumunu oluşturur, listeden seçtiğiniz bir sürümü değil.
- Google Drive yetkilendirilmiş olmalıdır ([Adım 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): oluşturulan uygulama normal bir oluşturmada olduğu gibi oraya kaydedilir.

## İş akışını çalıştırın

1. AndroidAPS'in GitHub fork'unuzda **Actions** sekmesini açın.
2. **All workflows** bölümünü genişletin ve **Cherry Pick CI (Pre-release Feature Backport)** seçin.
3. **Run workflow** düğmesine dokunun ve şunları doldurun:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: commit'lerin ekleneceği dal, normalde `master`.
   - **Upstream repository**: commit'lerin geldiği yer. Geliştirici başka bir şey söylemediyse `nightscout/AndroidAPS` olarak bırakın.
   - **Commit hash(es) to cherry-pick**: size verilen hash veya hash'ler, aralarında boşluk bırakarak.
   - **Select Build Variant**: [varyantlara](#browserbuild-variant) bakın (normalde `fullRelease`).
4. **Run workflow** (iş akışını çalıştır) düğmesine dokunun. İşlem bitince uygulama, [normal bir oluşturmadan](../SettingUpAaps/BrowserBuildAPK.md) sonra olduğu gibi Google Drive'ınızdadır.
