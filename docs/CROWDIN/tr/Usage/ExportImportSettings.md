# Dışa aktarma & içe aktarma ayarları

## Ayarları ne zaman dışa aktarmalıyım?

Öngörülemeyenlere hazırlıklı olun. Önemli ayarları yanlışlıkla değiştirebilir ve değişiklikleri geri almakta sorun yaşayabilirsiniz. Telefonunuz kırılabilir veya çalınabilir. Bulunduğunuz duruma kolayca geri dönmek için ayarlar düzenli olarak dışa aktarılmalıdır.

En iyi zamanlama, ayarların değiştirilmesinden veya bir hedefin tamamlanmasından sonra dışa aktarmaktır.

Dışa aktarılan ayarlar, telefondan bir buluta veya bilgisayarınıza kopyalanmalıdır, en iyisi iki farklı konuma da kopyalamaktır. Böylece AAPS telefonunuzun kaybolmasına veya zarar görmesine hazırsınız ve sıfırdan başlamak zorunda değilsiniz.

Bir Windows 10 bilgisayarında şöyle görünür:

![AAPS Preferences phone connected to computer](../images/AAPS_ExImportSettingsWin.png)

## Export Path
The exports will be placed in this folder on your phone:

/Internal Storage/AAPS/preferences

This storage location cannot be changed in the AAPS settings.

## Dışa aktarılan bilgiler

Diğerlerinin yanı sıra aşağıdaki bilgiler, dışa aktarılan ayarların bir parçasıdır:

- [ Otomasyon ](../usuge/automation.md) olayları
- [Konfigürasyon ayarları](../Configuration/Config-Builder.md)
- [Yerel profil](Config-Builder-local-profile) ayarları
- [ Görevler ](../usuge/objectives.md) ve [ sınav sonuçları ](objective-sjective-3-prove-your-nowledge) durumu
- [Tercihler](../Configuration/Preferences.md) ["NS Client ayarları"](Preferences-nsclient) dahil

## Şifreli yedekleme formatı

Ayar yedeği, [tercihler ](preferences-master-password) içinde ayarlanabilen bir ana parola ile şifrelenir.

(ExportImportSettings-export-settings)=
## Dışa aktarma ayarları

- Hamburger menü (ekranın sol üst kısmında)
- Bakım
- Dışa aktarma ayarları

![AAPS export settings 1](../images/AAPS_ExportSettings1.png)

- Dışa aktarma tarihi ve saati dosya adına otomatik olarak eklenecek ve yol ile birlikte görüntülenecektir.
- 'Tamam'ı tıklayın.
- [Ana şifre ](preferences-master-password)'yi girin ve 'Tamam'ı tıklayın.
- Ekranın alt kısmında başarılı dışa aktarma görünecektir.

![AAPS export settings 2](../images/AAPS_ExportSettings2.png)

(ExportImportSettings-import-settings)=
## Ayarları içe aktarın

**Etkin bir POD oturumunda ayarları içe aktarmayın** - [Detaylı bilgi için Omnipod sayfasına bakın](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menü (ekranın sol üst kısmında)
- Bakım
- Ayarları içe aktarın

![AAPS import settings 1](../images/AAPS_ImportSettings1.png)

- Telefonunuzdaki AAPS/preferences/ klasöründeki tüm dosyalar listede gösterilecektir.
- Dosyayı seçin.
- 'Tamam'ı tıklayarak içe aktarmayı onaylayın.
- [Ana şifre ](preferences-master-password)'yi girin ve 'Tamam'ı tıklayın.

![AAPS import settings 2](../images/AAPS_ImportSettings2.png)

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
