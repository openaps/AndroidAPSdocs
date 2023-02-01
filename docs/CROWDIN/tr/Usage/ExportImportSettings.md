# Export & import settings

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

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](../Configuration/Config-Builder.md#local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](../Usage/Objectives.md#objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](../Configuration/Preferences.md#nsclient)

## Şifreli yedekleme formatı

Settings backup is encrypted by a master password that can be set in [Preferences](../Configuration/Preferences.md#master-password) .

(export-settings)=
## Dışa aktarma ayarları

- Hamburger menu (top left corner of screen)
- Bakım
- Dışa aktarma ayarları

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS dışa aktarma ayarları 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](../Configuration/Preferences.md#master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS dışa aktarma ayarları 2
```

(import-settings)=
## Ayarları içe aktarın

**Do not import settings while on an active Pod session** - see [Omnipod page for details](../Configuration/OmnipodEros.md#import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- Bakım
- Ayarları içe aktarın

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS içe aktarma ayarları 1
```

- All files from folder AAPS/preferences/ on your phone will be shown in the list.
- Select file.
- Confirm import by clicking 'OK'.
- Enter [master password](../Configuration/Preferences.md#master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS içe aktarma ayarları 2
```

- Details on the preference file will be shown.
- Last option to cancel import.
- Click 'Import'.
- Confirm message by clicking 'OK'.
- AAPS will be restarted in order to activate imported preferences.

### Dana RS kullanıcıları için not

- Pompa bağlantı ayarları da içe aktarıldığından, yeni telefonunuzdaki AAPS pompayı zaten "bilir" ve bu nedenle bir bluetooth taraması başlatmaz.
- Please pair new phone and pump manually.

### Ayarları önceki sürümlerden içe aktarın (AAPS 2.7'den önce)

- The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
- Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
- You will find the "old" file on the bottom of the list in the import dialogue.

## Ayarlar dosyasını transfer etme

- Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- If you experience problems with the transferred file try another way to transfer file.
