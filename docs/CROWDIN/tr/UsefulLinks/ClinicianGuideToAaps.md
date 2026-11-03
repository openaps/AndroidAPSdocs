# Klinisyenler İçin – AAPS'e Genel Giriş ve Kılavuz

```{note}
Bu sayfa, klinisyenler için genel bir giriş niteliğindedir. En son Haziran 2026'da gözden geçirilmiştir. AAPS sürekli gelişir; bu yüzden en doğru ve güncel ayrıntılar için her zaman [ana AAPS dokümantasyonuna](../index.md) bakın.
```

Bu sayfa, AAPS gibi açık kaynaklı yapay pankreas teknolojisine ilgi duyan klinisyenler veya bu bilgileri klinisyenleriyle paylaşmak isteyen hastalar için hazırlanmıştır.

Bu kılavuz, kendin yap (DIY) kapalı döngü sistemleri ve özellikle AAPS'in nasıl çalıştığı hakkında genel bilgiler içerir. Bu konuların hepsi hakkında daha fazla ayrıntı için lütfen [çevrimiçi kapsamlı AAPS dokümantasyonuna](../index.md) bakın. Sorularınız varsa, lütfen daha fazla ayrıntı için hastanıza sorun veya sorularınızı iletmek için her zaman topluluğa ulaşmaktan çekinmeyin. (Sosyal medyada değilseniz (örn. [Twitter](https://twitter.com/kozakmilos) veya Facebook), developers@aaps.app adresine e-posta göndermekten çekinmeyin). [Ayrıca en son araştırmalardan bazılarını ve sonuçlarla ilgili verileri burada bulabilirsiniz](https://openaps.org/outcomes/).

## Kendin Yap (DIY) Kapalı Döngü oluşturma adımları:

AAPS'i kullanmaya başlamak için şu adımlar izlenmelidir:

* Bir [uyumlu pompa](../Getting-Started/CompatiblePumps.md), bir [uyumlu Android cihaz](../Getting-Started/Phones.md) ve bir [uyumlu CGM kaynağı](../Getting-Started/CompatiblesCgms.md) bulun.
* [AAPS kaynak kodunu indirin ve yazılımı oluşturun](../SettingUpAaps/BuildingAaps.md).
* [Yazılımı, diyabet cihazlarıyla iletişim kuracak şekilde yapılandırın; ayarları ve güvenlik tercihlerini belirleyin](../SettingUpAaps/SetupWizard.md).

## Kendin Yap (DIY) kapalı döngü nasıl çalışır

Kapalı döngü sistemi olmadan, diyabetli bir kişi pompasından ve CGM'sinden veri toplar, ne yapacağına karar verir ve harekete geçer.

Otomatik insülin iletiminde sistem aynı şeyi yapar: pompadan, CGM'den ve bilgilerin kaydedildiği diğer yerlerden (örneğin Nightscout) verileri toplar. Bu bilgilerle hesaplama yapar ve ne kadar daha fazla veya daha az insüline ihtiyaç olduğuna karar verir (temel bazal oranın üstünde veya altında). KŞ'yi hedef aralıkta tutmak veya zamanla hedef aralığa getirmek için gerekli ayarlamaları geçici bazal oranlarla yapar.

AAPS'i çalıştıran cihaz bozulursa veya pompanın menzilinden çıkarsa, son geçici bazal oran bittiğinde pompa, önceden programlanmış bazal oranlarla çalışan standart bir pompaya geri döner.

## Veriler nasıl toplanır:

AAPS'te bir Android cihaz, hesaplamaları yapmak için özel bir uygulama çalıştırır; cihaz, desteklenen bir pompa ile Bluetooth üzerinden iletişim kurar. AAPS, ek bilgi toplamak ve hastaya, bakım verenlere ve yakınlarına ne yaptığını ve nedenini bildirmek için Wi-Fi veya mobil veri üzerinden diğer cihazlarla ve bulutla iletişim kurabilir.

Android cihazın şunları yapması gerekir:

* pompa ile iletişim kurma ve geçmişi okuma - ne kadar insülin verildi
* CGM ile iletişim kurmak (doğrudan veya bulut aracılığıyla) - KŞ'lerinin ne olduğunu/ne yaptığını görmek için

Cihaz bu verileri topladıktan sonra algoritma çalışır ve ayarlara (İDF, karbonhidrat oranı, İES, hedef vb.) göre karar verir. Gerekirse, insülin iletim oranını değiştirmek için pompaya komutlar verir.

Ayrıca, insülin iletim oranlarının hesaplanmasında kullanmak üzere pompadan veya Nightscout'tan boluslar, karbonhidrat tüketimi ve geçici hedef ayarlamaları hakkında her türlü bilgiyi toplayacaktır.

## Ne yapacağını nasıl biliyor?

Açık kaynaklı yazılım, insülin iletiminin nasıl ayarlanması gerektiğini hesaplamak için insanların yaptığı işi (manuel modda) cihazın yapmasını kolaylaştırmak için tasarlanmıştır. Önce tüm destekleyici cihazlardan ve buluttan veri toplar, verileri hazırlar ve hesaplamaları çalıştırır, farklı senaryolarda KŞ seviyelerinin sonraki saatlerde nasıl değişmesinin beklendiğine ilişkin tahminler yapar ve KŞ'yi hedef aralıkta tutmak veya geri getirmek için gerekli ayarlamaları hesaplar. Ardından gerekli ayarlamaları pompaya gönderir. Sonra verileri geri okur ve tekrar tekrar yapar.

En önemli girdi parametresi CGM'den gelen kan şekeri seviyesi olduğundan, yüksek kaliteli CGM verilerine sahip olmak önemlidir.

AAPS, topladığı tüm girdi verilerini, bunlardan çıkan öneriyi ve yapılan her işlemi şeffaf bir şekilde kaydedecek şekilde tasarlanmıştır. Bu nedenle günlüklere bakarak “Neden X yapıyor?” sorusuna her zaman kolayca cevap verilebilir.

## AAPS algoritmasının karar verme örnekleri:

AAPS, OpenAPS ile aynı temel algoritmayı ve özellik setini kullanır. Algoritma, gelecekte neler olabileceğine dair farklı senaryoları temsil eden (ayarlara ve duruma göre) birden fazla tahminde bulunur. Nightscout'ta bunlar “mor çizgiler” olarak görüntülenir. AAPS, bu [tahmin çizgilerini](#aaps-screens-prediction-lines) birbirinden ayırmak için farklı renkler kullanır. Günlüklerde, bu tahminlerden hangisinin ve hangi zaman diliminin gerekli eylemleri belirlediği açıklanır.

### İşte mor tahmin çizgilerinin örnekleri ve bunların nasıl farklı olabileceği:

![Mor tahmin çizgisi örnekleri](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### İnsülin iletiminde gerekli ayarlamaları etkileyen farklı zaman dilimlerine ilişkin örnekler aşağıda verilmiştir:

### Senaryo 1 - Güvenlik için sıfır geçici bazal

Bu örnekte, KŞ kısa vadede yükseliyor; ancak, daha uzun bir zaman diliminde düşük olacağı tahmin edilmektedir. Aslında, hedef *ve* güvenlik eşiğinin altına ineceği tahmin edilmektedir. Hipoglisemiyi önlemek ve güvenliği sağlamak için AAPS, eventualBG (nihai KŞ) değeri (herhangi bir zaman diliminde) eşiğin üstüne çıkana kadar sıfır geçici bazal (%0 geçici bazal oranı) uygular.

![Doz senaryosu 1](../images/Dosing_scenario_1.jpg)

### Senaryo 2 - Güvenlik için sıfır geçici bazal

Bu örnekte, KŞ'nin yakın vadede düşeceği, ancak sonunda hedefin üzerinde olacağı tahmin edilmektedir. Ancak yakın vadedeki düşüş aslında güvenlik eşiğinin altında olduğu için AAPS, tahmin çizgisinin hiçbir noktası eşiğin altında kalmayana kadar sıfır geçici bazal uygular.

![Doz senaryosu 2](../images/Dosing_scenario_2.jpg)

### Senaryo 3 - Daha fazla insülin gerekli

Bu örnekteki tahmin, yakın gelecekte hedef değerin altına bir düşüş beklemektedir. Ancak güvenlik eşiğinin altında olması beklenmiyor. Nihai KŞ hedefin üzerindedir. Bu nedenle AAPS, yakın vadede düşük KŞ'ye katkıda bulunacak insülini eklemekten kaçınır (yani tahmini eşiğin altına indirecek insülini eklemez). Daha sonra, güvenli olduğunda, nihai olarak tahmin edilen KŞ'nin en düşük seviyesini hedefe indirmek için insülin eklenmesini değerlendirecektir. *(Ayarlara ve gereken insülinin miktarına ve zamanlamasına bağlı olarak, bu insülin geçici bazal oranlarla veya SMB'lerle (süper mikro boluslar) verilebilir.)*

![Doz senaryosu 3](../images/Dosing_scenario_3.jpg)

### Senaryo 4 - Güvenlik için düşük geçici bazal

Bu örnekte AAPS, KŞ'nin hızla hedefin çok üzerine çıktığını görür. Bununla birlikte, insülinin zamanlaması nedeniyle, vücutta zaten KŞ'i sonunda aralığa getirmek için yeterli insülin vardır. Aslında KŞ'nin sonunda hedefin altına ineceği tahmin edilmektedir. Bu nedenle AAPS, daha uzun vadede bir düşüşe katkıda bulunmamak için ek insülin vermez. KŞ yüksek veya yükseliyor olsa da burada büyük olasılıkla düşük bir geçici bazal oran uygulanır.

![Doz senaryosu 4](../images/Dosing_scenario_4.jpg)

## Ayarları optimize etme ve değişiklik yapma

AAPS veya kendin yap (DIY) kapalı döngüler konusunda deneyiminiz olmayan bir klinisyen olarak, hastanızın ayarlarını optimize etmesine veya sonuçlarını iyileştirmek için değişiklik yapmasına yardımcı olmak size zor gelebilir. Toplulukta hastaların ayarlarını iyileştirmek için küçük, test edilmiş ayarlamalar yapmasına yardımcı olabilecek birden fazla aracımız ve [kılavuzumuz](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) mevcuttur.

Hastaların yapması gereken en önemli şey, her seferinde yalnızca bir değişiklik yapmak ve başka bir ayarı değiştirmeden önce etkisini 2-3 gün gözlemlemektir (değişiklik açıkça kötüyse ve durumu kötüleştiriyorsa bu kural geçerli değildir; bu durumda hemen önceki ayara dönmelidirler). İnsanlar tüm düğmeleri çevirip her şeyi aynı anda değiştirme eğilimindedir; ancak bunu yapan biri, ileride daha da kötü ayarlarla karşılaşabilir ve bilinen iyi bir duruma geri dönmekte zorlanabilir.

Ayar değişiklikleri yapmak için en güçlü araçlardan biri, bazal oranlar, İDF ve karbonhidrat oranı için otomatik bir hesaplama aracıdır. Buna “[OtoAyar](#autotune-how-autotune-calculates-adjustments)” (Autotune) denir. Verilerin, ayarlarda adım adım değişiklikler yaparken size veya hastanıza rehberlik etmesini sağlamak için tasarlanmıştır. Ayarlarda elle değişiklik yapmaya çalışmadan önce, ilk olarak OtoAyar raporlarını çalıştırmak (veya gözden geçirmek) topluluktaki en iyi uygulamadır. OtoAyar, AAPS'e bir eklenti olarak dahildir (**Konfigürasyon** → **Genel** → **OtoAyar**); bkz. [OtoAyar](../AdvancedOptions/Autotune.md). İstendiğinde elle veya otomatik olarak çalıştırılabilir. Bu parametreler hem standart pompa tedavisinde hem de kapalı döngü ile insülin iletiminde ön koşul olduğundan, OtoAyar sonuçlarının ve bu parametrelerin ayarlanmasının konuşulması, klinisyenle doğal bir bağlantı noktasıdır.

Ek olarak, manuel diyabet tedavisinde öğrenilen insan davranışı, bir DIY kapalı döngü ile bile sonuçları sıklıkla etkiler. Örneğin, KŞ'nin düşeceği tahmin edildiğinde AAPS düşüş sırasında insülini azaltırsa, KŞ'yi 70 mg/dL'den (3,9 mmol/L) yükseltmek için yalnızca az miktarda karbonhidrat (örn. 3-4 g) yeterli olabilir. Ancak çoğu durumda kişi çok daha fazla karbonhidratla tedavi etmeyi seçebilir (örn. 15 kuralına bağlı kalarak); bu da hem fazladan glikoz nedeniyle hem de düşüşe giden süre içinde insülin azaltılmış olduğu için daha hızlı bir KŞ yükselmesine neden olur.

## OpenAPS

**Bu kılavuz, [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) (klinisyenler için OpenAPS kılavuzu) kaynağından uyarlanmıştır.** OpenAPS, küçük bir taşınabilir bilgisayarda (genellikle "rig" (teçhizat) olarak anılır) çalıştırılmak üzere geliştirilmiş bir sistemdir. AAPS, OpenAPS'te uygulanan tekniklerin çoğunu kullanır ve mantığın ve algoritmaların büyük bölümünü onunla paylaşır; bu yüzden bu kılavuz orijinal kılavuza çok benzer. OpenAPS hakkındaki bilgilerin çoğu AAPS'e kolayca uyarlanabilir; temel fark, her yazılımın çalıştığı donanım platformudur.

## Özet

Bu sayfa, AAPS'in nasıl çalıştığına dair genel bir bakış sunmak için hazırlanmıştır. Daha fazla ayrıntı için hastanıza sorun, toplulukla iletişime geçin veya çevrimiçi olarak erişilebilen tam AAPS dokümantasyonunu okuyun.

Önerilen ek kaynaklar:

* [Tam AAPS dokümantasyonu](../index.md)
* OpenAPS'in güvenlik için nasıl tasarlandığını açıklayan [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) (OpenAPS referans tasarımı): https://openaps.org/reference-design/
* [Tam OpenAPS belgeleri](https://openaps.readthedocs.io/en/latest/index.html) 
  * Bu dokümantasyonda [AAPS'in tahminleri nasıl doz kararına dönüştürdüğüne](#aaps-screens-how-predictions-become-a-dosing-decision) veya temel algoritmanın tüm teknik ayrıntıları için [OpenAPS'in determine-basal dokümantasyonuna](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) bakın