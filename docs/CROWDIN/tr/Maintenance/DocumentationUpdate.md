- - -
tocdepth: 1
- - -

# Doküman güncellemeleri & değişiklikleri

## October 2026

- [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): oluşturma iş akışı sürüm 8, artık AAPS geliştiricileri tarafından [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) deposunda sürdürülüyor. Kurulum bir adım daha kısa: [kurulum sayfasının](#aaps-builder-setup) [1. adımı](#aaps-builder-step1), özel deponuzu o deponun bir kopyası olarak, oluşturma iş akışı içinde hazır şekilde oluşturur. Bu nedenle artık eklenecek bir iş akışı yoktur. Bundan sonra oluşturma adımları sizin için güncellenir: deponuz her oluşturmada AAPS geliştiricilerinin yayınladığı sürümü çalıştırır, sizin tarafınızda hiçbir değişiklik gerekmez (ve hâlâ otomatik oluşturma yoktur). Oluşturmanın kendisi değişmez ve mevcut deponuz çalışmaya devam eder. Bu otomatik güncellemeleri almak için `.github/workflows/build.yml` dosyanızı [AAPS'i güncelleme](#aaps-builder-updates) bölümünde anlatıldığı gibi bir kez değiştirin. `KEYSTORE_SET` secret'ınız olduğu gibi kalır. İsteğe bağlı [Google Drive adımı](#aaps-builder-google-drive) artık kurulum sayfasının kendisinde, telefonda veya bilgisayarda çalışıyor: hazırlık dosyası gerekmez @psonnera
- [Akıllı saatler ve AAPS](#watches-external-companion-apps): **Samsung Tizen** bölümü **Harici yardımcı uygulamalar** oldu ve **AAPS** yayınını okuyan uygulamaları listeliyor (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 ve sonrası, xDrip+ olmadan doğrudan **AAPS**'e bağlanır: kurulum adımları eklendi, ayrıca [Konfigürasyon](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) ve [Uzaktan İzleme](../RemoteFeatures/RemoteMonitoring.md) sayfalarında özetlendi. Bluejay saatleri: GTS artık üretilmiyor, güncel model güncellendi @psonnera
- [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): oluşturma iş akışı sürüm 6. Oluşturma adımları artık GitHub araçlarının ve oluşturma makinesinin tam, incelenmiş sürümlerini kullanır. `KEYSTORE_SET` secret'ına yanlış metin yapıştırıldığında oluşturma bunu açıkça bildirir. [Kurulum sayfası](#aaps-builder-setup) artık dokümantasyonun bir parçası ve çevriliyor. GitHub kullanıcı adınızı kontrol ediyor ve secret, "Page not found" (404) ve GitHub uygulaması için daha açık yardım içeriyor. `.github/workflows/build.yml` dosyanızda sürüm 5 veya daha eskisi yazıyorsa, dosyayı [AAPS'i güncelleme](#aaps-builder-updates) bölümünde anlatıldığı gibi değiştirin @psonnera
- [AAPS web yükleyicisi](#web-installer): artık diğerleri gibi çevrilen bir doküman sayfası. Eski adres hâlâ çalışıyor @psonnera
- [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): oluşturma iş akışı sürüm 3, `aapsclient3Release` varyantını ekler (**AAPSClient3**, AAPS 4.0 ve sonrası). Bunu oluşturmak için `.github/workflows/build.yml` dosyanızı [AAPS'i güncelleme](#aaps-builder-updates) bölümünde anlatıldığı gibi değiştirin @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): yeni kurulumlarda artık çalışmayan yamalı Dexcom G7 uygulaması (DiaKEM) kaldırıldı @psonnera
- [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): oluşturma iş akışı sürüm 2. Otomatik haftalık oluşturmalar kaldırıldı (zamanlama yok, `AUTO_BUILD` / `AUTO_VARIANT` değişkenleri yok, `built/…` etiketleri yok): her oluşturmayı seçtiğiniz sürüm ve varyantla siz başlatırsınız ve iş akışının deponuzda yalnızca okuma erişimi vardır. `.github/workflows/build.yml` dosyanızda sürüm 1 yazıyorsa, dosyayı [AAPS'i güncelleme](#aaps-builder-updates) bölümünde anlatıldığı gibi değiştirin. Her adım için ekran görüntüleri eklendi @psonnera
- [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): oluşturma iş akışı artık bu dokümantasyonun bir parçası. Şablon depo yok: boş bir özel depo oluşturursunuz ve iş akışını kurulum sayfasından eklersiniz (yeni 2. adım). İş akışı artık güncellemeler için dışarıdaki bir depoyu kontrol etmiyor. Deponuzu önceki şablondan oluşturduysanız, `.github/workflows/build.yml` dosyasını [AAPS'i güncelleme](#aaps-builder-updates) bölümünde anlatıldığı gibi kurulum sayfasındaki iş akışıyla değiştirin @psonnera
- Yeni sayfa [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder): AAPS'i bir Android telefondan, bu sitede barındırılan bir kurulum sayfasıyla oluşturun. Otomatik haftalık oluşturma vardır ve hazırlık dosyası gerekmez. Tarayıcı ile oluşturmanın Android talimatlarının yerini alır (File Manager Plus sayfaları kaldırıldı). AAPS Builder'ı @dio99 oluşturdu, dokümanlar @psonnera

## Ağustos 2026

- [AAPS'i aktarma ve yükleme](../SettingUpAaps/TransferringAndInstallingAaps.md): *Android geliştirici doğrulaması* sayfası kurulum kılavuzuyla birleştirildi, [web yükleyicisi](#android-developer-verification-web) (APK'yı doğrudan tarayıcıdan yükleme, doğrulamadan muaf) ve kablosuz ADB eklendi @psonnera

## Temmuz 2026

- [Giriş](../Getting-Started/Introduction.md): APS bölümünün doğruluk incelemesi. Frontiers kaynağının başlığı ve bağlantısı düzeltildi; güncel bir pazar rehberi olarak değil, arka plan bilgisi olarak sunuldu. Çift hormonlu sistem ve tam kapalı döngü ifadeleri güncellendi, kontrol biriminin her zaman bir telefon uygulaması olmadığı açıklandı, ticari marka adları ve kaynaksız kullanıcı sayıları kaldırıldı ve OS-AID, *Open-Source Automated Insulin Delivery* olarak düzeltildi @psonnera
- [Sözlük](../UsefulLinks/Glossary.md): **AID**, **FCL**, **HCL** ve **OS-AID** girdileri eklendi, **APS** ve **Closed Loop** girdilerinden bağlantı verildi @psonnera
- Yeni sayfa [Android geliştirici doğrulaması](#android-developer-verification): Google'ın yaklaşan doğrulama zorunluluğunun kendi oluşturduğunuz uygulamaları yüklemeye etkisi ve ücretsiz yükleme yöntemleri (ADB, gelişmiş akış, sınırlı dağıtım hesabı) @psonnera

## June 2026

- [Tarayıcı ile oluşturma](#browser-build): önce karar verilen, çok sayfalı bir akışa dönüştürüldü (Fork → anahtar deposu Seçenek 1/Seçenek 2, her cihaz için ayrı sayfa → Google Drive → Oluşturma → Sorun giderme); iç içe sekmeler kaldırıldı ve File Manager Plus kurulumu belirgin bir adım yapıldı @psonnera
- [Giriş](../Getting-Started/Introduction.md): terim *DIY* yerine *OS-AID* (Open-Source Automated Insulin Delivery) olarak değiştirildi, Trio ve Stelo eklendi, pompa/CGM uyumluluk tablosu güncellendi @tmhastings

## March 2026

- [Komut satırı ile oluşturma seçeneği eklendi](../SettingUpAaps/CLIBuild.md) @je-l
- *Bilgisayarda oluşturma (Computer Build)* adı *Android Studio ile oluşturma (Android Studio Build)* olarak değiştirildi. URL'ler için dosya adları korundu.

## January 2025

- [3.4](#version3400) sürümü ve toplu doküman güncellemesi (Sihirbaz, Android Studio ile oluşturma sürümleri, Konfigürasyon)
- CGM listesi güncellendi. Dexcom G5, Tomato, Glimp kaldırıldı.
- [Bölge rotasyonu arayüzü](#Aapsscreens-site-rotation)
- [Running mode](#AapsScreens-running-mode)
- [OtoAyar](../AdvancedOptions/Autotune.md)

## December 2025

- @robrub tarafından [profil ayarlama](../GettingHelp/ProfileTuning.md)

## October 2025

- DiaKEM: sunucu güncellemesinden sonra yeni kurulumlar çalışmıyor @psonnera
- Yamalı Libre 2 uygulaması kaldırıldı (artık kullanılmıyor): yeni sensörlerle çalışmaz @psonnera
- Omnipod DASH sayfası yeniden düzenlendi @XiTatiON

## August 2025

- Sürümler ve Android Studio ön gereksinimleri güncellendi
- [3.3.2.1](#version3321) sürümü eklendi, Android 16 ile ilgili notlar kaldırıldı (düzeltildi)
- [Tarayıcı ile oluşturma](#browser-build) eklendi @Angus

## May 2025

- [3.2.0.4 güncelleme sayfası](#update-aaps-3204) eklendi @psonnera

## January 2025

- Hızlı Asistan [uzun basma özelliği](#Preferences-quick-wizard) @emilise
- [Dinamik İDF](../DailyLifeWithAaps/DynamicISF.md) sayfası yeniden yazıldı @emilise

## December 2024

- [3.3 sürümünün](#version3300) dokümantasyonu @emilise

## November 2024

- [AAPS profiliniz](../SettingUpAaps/YourAapsProfile.md) güncellendi @emilise
- [Wear OS akıllı saatler](../WearOS/BuildingAapsWearOS.md) içeriği yeniden düzenlendi @psonnera

## October 2024

- Birkaç sayfa güncellendi:
  - [Ne kadar sürer](#preparing-how-long-will-it-take), [Bileşenlere Genel Bakış](../Getting-Started/ComponentOverview.md), [Görevleri tamamlama](../SettingUpAaps/CompletingTheObjectives.md), [AAPS profiliniz](../SettingUpAaps/YourAapsProfile.md), [Konfigürasyon](../SettingUpAaps/ConfigBuilder.md) & [Tercihler](../SettingUpAaps/Preferences.md), [AAPS ekranları](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [AKRB hesaplaması](../DailyLifeWithAaps/CobCalculation.md), [Dinamik İDF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Android Studio Ladybug için oluşturma talimatları](../SettingUpAaps/BuildingAaps.md) @tanja
- Teknik çalışma (dokümantasyonun yayınlama süreci, dosya düzeni...) @psonnera & @emilise

***

Mart 2022 ile Eylül 2024 arasındaki geçmiş eksik

3.2 sürümündeki yeniden düzenleme ile bazı eski bilgiler kaldırıldı. Bu bilgileri önceki doküman sürümünde bulabilirsiniz:

AAPS 3.1 dokümantasyonu [burada](https://androidaps.readthedocs.io/en/3.1/index.html) bulunabilir.

***

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
