# For Clinicians – A General Introduction and Guide to AAPS

```{note}
This page is a high-level introduction for clinicians. It was last reviewed in June 2026. AAPS develops continuously, so for the most accurate and up-to-date detail always refer to the [main AAPS documentation](../index.md).
```

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Sorularınız varsa, lütfen daha fazla ayrıntı için hastanıza sorun veya sorularınızı iletmek için her zaman topluluğa ulaşmaktan çekinmeyin. (If you’re not on social media (e.g. [Twitter](https://twitter.com/kozakmilos) or Facebook), feel free to email developers@aaps.app). [Ayrıca en son araştırmalardan bazılarını ve sonuçlarla ilgili verileri burada bulabilirsiniz.](https://openaps.org/outcomes/).

## Kendin Yap (DIY) Kapalı Döngü oluşturma adımları:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## Bir KENDİN YAP Kapalı Döngü Nasıl Çalışır

Kapalı döngü sistemi olmadan, diyabetli bir kişi pompasından ve CGM'sinden veri toplar, ne yapacağına karar verir ve harekete geçer.

Otomatik insülin iletimi ile sistem aynı şeyi yapar: pompadan, CGM'den ve günlüğe kaydedilen diğer bilgilerden (örneğin Nightscout aracılığıyla) verileri toplar. Bu bilgiyi hesaplamaları için bir temel olarak kullanır ve ne kadar daha fazla veya daha az insülin gerektiğine karar verir (geçici bazal oranlarını üstünde veya altında). KŞ'yi sabit veya hedef aralıkta tutmak için gerekli ayarlamaları yapmak için geçici bazal oranlar kullanılır.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basal rates running.

## Veriler nasıl toplanır:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via Wi-Fi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Android cihazın şunları yapması gerekir:

* pompa ile iletişim kurma ve geçmişi okuma - ne kadar insülin verildi
* CGM ile iletişim kurmak (doğrudan veya bulut aracılığıyla) - KŞ'lerinin ne olduğunu/ne yaptığını görmek için

Cihaz bu verileri topladıktan sonra algoritma çalışır ve ayarlara (İDF, karbonhidrat oranı, İES, hedef vb.) göre karar verir. Gerekirse, insülin iletim oranını değiştirmek için pompaya komutlar verir.

Ayrıca, insülin iletim oranlarının hesaplanmasında kullanmak üzere pompadan veya Nightscout'tan boluslar, karbonhidrat tüketimi ve geçici hedef ayarlamaları hakkında her türlü bilgiyi toplayacaktır.

## Ne yapacağını nasıl biliyor?

Açık kaynaklı yazılım, insülin iletiminin nasıl ayarlanması gerektiğini hesaplamak için insanların yaptığı işi (manuel modda) cihazın yapmasını kolaylaştırmak için tasarlanmıştır. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of what BG levels are expected to do during the next hours in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. Ardından gerekli ayarlamaları pompaya gönderir. Sonra verileri geri okur ve tekrar tekrar yapar.

En önemli girdi parametresi CGM'den gelen kan şekeri seviyesi olduğundan, yüksek kaliteli CGM verilerine sahip olmak önemlidir.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Bu nedenle, günlükleri gözden geçirerek. “Neden X yapıyor?” Sorusuna herhangi bir zamanda cevap vermek kolaydır.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Algoritma, gelecekte neler olabileceğine dair farklı senaryoları temsil eden (ayarlara ve duruma göre) birden fazla tahminde bulunur. Nightscout'ta bunlar “mor çizgiler” olarak görüntülenir. AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). Günlüklerde, bu tahminlerden hangisinin ve hangi zaman diliminin gerekli eylemleri yönlendirdiğini izlenebilir.

### İşte mor tahmin çizgilerinin örnekleri ve bunların nasıl farklı olabileceği:

![Mor tahmin satırı örnekleri](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### İnsülin iletiminde gerekli ayarlamaları etkileyen farklı zaman dilimlerine ilişkin örnekler aşağıda verilmiştir:

### Senaryo 1 - Güvenlik için Sıfır Geçici

Bu örnekte, KŞ kısa vadede yükseliyor; ancak, daha uzun bir zaman diliminde düşük olacağı tahmin edilmektedir. Aslında, hedef *ve* güvenlik eşiğinin altına ineceği tahmin edilmektedir. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Senaryo 1](../images/Dosing_scenario_1.jpg)

### Senaryo 2 - Güvenlik için sıfır geçici

Bu örnekte, KŞ'nin yakın vadede düşeceği, ancak sonunda hedefin üzerinde olacağı tahmin edilmektedir. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Senaryo 2](../images/Dosing_scenario_2.jpg)

### Senaryo 3 - Daha fazla insülin gerekli

Bu örnekteki tahmin, yakın gelecekte hedef değerin altına bir düşüş beklemektedir. Ancak güvenlik eşiğinin altında olması beklenmiyor. Nihai KŞ hedefin üzerindedir. Therefore, AAPS will refrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Daha sonra, güvenli olduğunda, nihai olarak tahmin edilen KŞ'nin en düşük seviyesini hedefe indirmek için insülin eklenmesini değerlendirecektir. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMBs (super micro boluses)).*

![Senaryo 3](../images/Dosing_scenario_3.jpg)

### Senaryo 4 - Güvenlik nedenleriyle insülin dozunun azaltılması

In this example, AAPS sees that BG is spiking well above target. Bununla birlikte, insülinin zamanlaması nedeniyle, vücutta zaten KŞ'i sonunda aralığa getirmek için yeterli insülin vardır. Aslında, KŞ sonunda hedefin altında olacağı tahmin edilmektedir. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. KŞ yüksek ve yükseliyor olsa da, AndroidAPS'nin böyle bir senaryoda bazal oranı düşürmesi daha olasıdır.

![Senaryo 4](../images/Dosing_scenario_4.jpg)

## Ayarları optimize etme ve değişiklik yapma

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. Toplulukta hastaların ayarlarını iyileştirmek için küçük, test edilmiş ayarlamalar yapmasına yardımcı olabilecek birden fazla aracımız ve [kılavuzumuz](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) mevcuttur.

Hastaların yapması gereken en önemli şey, her seferinde bir değişiklik yapmak ve başka bir ayar değişikliğine gitmeden önce 2-3 gün boyunca etkisini gözlemlemektir (böylelikle yapılan değişikliklik işleri kötüleştirdi ise, bu durumda hemen önceki ayara dönülebilir). İnsan eğilimi, tüm düğmeleri çevirmek ve her şeyi bir anda değiştirmektir; ama eğer biri bunu yaparsa, o zaman gelecek için daha fazla optimal olmayan ayarlarla karşılaşabilir ve bilinen iyi bir duruma geri dönmeyi zorlaştırabilir.

Ayar değişiklikleri yapmak için en güçlü araçlardan biri, bazal oranlar, İDF ve karbonhidrat oranı için otomatik bir hesaplama aracıdır. This is called “[Autotune](#autotune-how-autotune-calculates-adjustments)”. It is designed to allow the data to guide you or your patient in making incremental changes to settings. Ayarlarda manuel ayarlamalar yapmaya çalışmadan önce, ilk olarak Otoayar raporlarını çalıştırmak (veya gözden geçirmek) topluluktaki en iyi uygulamadır. Autotune is built into AAPS as a plugin (**Configuration** → **General** → **Autotune**); see [Autotune](../AdvancedOptions/Autotune.md). It can be run on demand or automatically. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adjustment of these parameters would be the natural link to the clinician.

Ek olarak, manuel diyabet tedavisinde öğrenilen insan davranışı, bir DIY kapalı döngü ile bile sonuçları sıklıkla etkiler. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dL (3.9 mmol/L). Bununla birlikte, birçok durumda, birileri daha fazla karbonhidratla (örneğin 15 kuralına bağlı kalmak) tedavi etmeyi seçebilir, bu da hem ekstra glikozdan daha hızlı bir artışa neden olur hem de insülin zaman çerçevesinde azaltıldığından, düşük seviyeye yol açabilir.

## OpenAPS

**This guide was adapted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Özet

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Ek önerilen dökümanlar:

* The [full AAPS documentation](../index.md)
* OpenAPS'in güvenlik için nasıl tasarlandığını açıklayan [OpenAPS Referans Tasarımı](https://OpenAPS.org/reference-design/): https://openaps.org/reference-design/
* [Tam OpenAPS belgeleri](https://openaps.readthedocs.io/en/latest/index.html) 
  * See [how AAPS turns predictions into a dosing decision](#aaps-screens-how-predictions-become-a-dosing-decision) in this documentation, or [OpenAPS's determine-basal documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) for the underlying algorithm in full technical detail