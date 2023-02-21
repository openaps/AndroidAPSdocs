# Dışa aktarma & içe aktarma ayarları

## Ayarları ne zaman dışa aktarmalıyım?

Öngörülemeyenlere hazırlıklı olun. Önemli ayarları yanlışlıkla değiştirebilir ve değişiklikleri geri almakta sorun yaşayabilirsiniz. Telefonunuz kırılabilir veya çalınabilir. Bulunduğunuz duruma kolayca geri dönmek için ayarlar düzenli olarak dışa aktarılmalıdır.

En iyi zamanlama, ayarların değiştirilmesinden veya bir hedefin tamamlanmasından sonra dışa aktarmaktır.

Dışa aktarılan ayarlar, telefondan bir buluta veya bilgisayarınıza kopyalanmalıdır, en iyisi iki farklı konuma da kopyalamaktır. Böylece AAPS telefonunuzun kaybolmasına veya zarar görmesine hazırsınız ve sıfırdan başlamak zorunda değilsiniz.

Bir Windows 10 bilgisayarında şöyle görünür:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: Bilgisayara bağlı AndroidAPS telefonda Preferences klasörü
```

## Dışa aktarılan bilgiler

Diğerlerinin yanı sıra aşağıdaki bilgiler, dışa aktarılan ayarların bir parçasıdır:

- [ Otomasyon ](../usuge/automation.md) olayları
- [Konfigürasyon ayarları](../Configuration/Config-Builder.md)
- [Yerel profil](Config-Builder-local-profile) ayarları
- [ Görevler ](../usuge/objectives.md) ve [ sınav sonuçları ](objective-sjective-3-prove-your-nowledge) durumu
- [Tercihler](../Configuration/Preferences.md) ["NS Client ayarları"](Preferences-nsclient) dahil

## Şifreli yedekleme formatı

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## Dışa aktarma ayarları

- Hamburger menu (top left corner of screen)
- Bakım
- Dışa aktarma ayarları

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS dışa aktarma ayarları 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS dışa aktarma ayarları 2
```

(ExportImportSettings-import-settings)=
## Ayarları içe aktarın

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Bakım
- Ayarları içe aktarın

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS içe aktarma ayarları 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS içe aktarma ayarları 2
```

- Aktarılacak dosyaya ilişkin ayrıntılar gösterilecektir.
- İçe aktarmayı iptal etmek için son şansınız.
- 'İçe Aktar'ı tıklayın.
- 'Tamam'ı tıklayarak mesajı onaylayın.
- İçe aktarılan tercihleri etkinleştirmek için AAPS yeniden başlatılacak.

### Dana RS kullanıcıları için not

- Pompa bağlantı ayarları da içe aktarıldığından, yeni telefonunuzdaki AAPS pompayı zaten "bilir" ve bu nedenle bir bluetooth taraması başlatmaz.
- Lütfen yeni telefonu ve pompayı manuel olarak eşleştirin.

### Ayarları önceki sürümlerden içe aktarın (AAPS 2.7'den önce)

- "Eski" ayarlar dosyası ('AndroidAPSPreferences' olarak adlandırılır - dosya uzantısı olmadan) akıllı telefonunuzun kök klasöründe olmalıdır (/storage/emulated/0).
- "Eski" dosyayı yeni dışa aktarılan ayarlarla (AAPS/tercihler) aynı klasöre koymayın.
- İçe aktarma iletişim kutusundaki listenin en altında "eski" dosyayı bulacaksınız.

## Ayarlar dosyasını transfer etme

- Ayarlar dosyasını yeni bir telefona aktarmanın en iyi yolu USB kablosu veya bulut hizmetidir (örn. Google Drive).
- Kılavuzları web'de bulabilirsiniz, [ Android yardım sayfaları ](https://support.google.com/android/answer/9064445?hl=en).
- Transfer etmeyle ilgili sorun yaşıyorsanız, dosya transferinin başka bir yolunu deneyin.
