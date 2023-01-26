# Bakım portalı (sonlandırıldı)

Bakım portalı, Nightscout ekranınızda göreceğiniz fonksiyonları, kayıtlarınıza not eklemenizi sağlayan “+” sembolü altına kopyalamıştır. Ancak bakım portalı, pompaya herhangi bir komut vermiyor! Dolayısıyla, bu ekran kullanılarak bir bolus eklendiyse, bunu Nightscout kaydınıza not eder, pompaya bolus iletimi talimatı verilmez. Bu birçok yanlış anlaşılmaya neden oldu.

Başlangıçta bakımportalı çevrimdışı destek eklemek için kullanılan kod, AAPS'in geliştirilmesiyle uyumlu değildi ve daha fazla kodlamayı engelliyordu. **Therefore, decision was made to remove careportal in AAPS version 2.6.**

Bakım portalının çoğu işlevi hala eylemlerde veya başlangıç ekranında bulunabilir. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../Configuration/Config-Builder.md).

Bu sayfa, daha önce bakım portalında mevcut olan işlevleri nerede bulabileceğinizi gösterecektir.

## Activity & feedback

```{image} ../images/Careportal_25_26_1_IIb.png
:alt: Careportal activity & feedback
```

- Age information was moved to actions tab / menu.
- BG check was moved to actions tab / menu.
- Temporary target was moved to actions tab / menu.
- Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs-bolus) on this page).

## Carbs & bolus

```{image} ../images/Careportal_25_26_2_IIa.png
:alt: Careportal carbs & bolus
```

- To note a bolus - no matter if for snack, meal or correction - use the insulin button on the homescreen **and make sure to tick "Do not bolus, record only"!**

- Option to backdate insulin - i.e. if you forgot to register insulin given by syringe - will only be available if checkbox "Do not bolus, record only" is ticked.

  ```{image} ../images/Careportal_25_26_5.png
  :alt: İnsülin düğmesi aracılığıyla insülinin tarihini geri alın
  ```

- For carbs correction use the carbs button on the homescreen.

- Temporary basal rates can be started and stopped through the button in actions tab / menu. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇİCİ BAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Careportal CGM & OpenAPS
```

- CGM sensor insert can now be found in the actions tab / menu.
- All other functions from this section have been removed. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs-bolus) on this page).

## Pompa

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Bakım Portalı Pompa
```

- Pump site and insulin cartridge change can be reach by using the button "prime/fill" in actions tab / menu.
- Profile switch was moved to actions tab / menu.
- Pump battery change was moved to actions tab / menu.
