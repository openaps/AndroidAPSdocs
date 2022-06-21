# Klinisyenler için – AndroidAPS Klavuzu ve Genel Bir Giriş

Bu sayfa, AndroidAPS gibi açık kaynak kodlu yapay pankreas teknolojisine ilgi duyduğunu ifade eden klinisyenler veya bu tür bilgileri klinisyenleriyle paylaşmak isteyen hastalar için hazırlanmıştır.

Bu kılavuz, DIY kapalı döngü ve özellikle AndroidAPS'in nasıl çalıştığı hakkında bazı üst düzey bilgiler içerir. Tüm bu konular hakkında daha fazla ayrıntı için lütfen [kapsamlı AndroidAPS dokümantasyonunu çevrimiçi olarak](../index.rst) inceleyin. Sorularınız varsa, lütfen daha fazla ayrıntı için hastanıza sorun veya sorularınızı iletmek için her zaman topluluğa ulaşmaktan çekinmeyin. (Sosyal medyada değilseniz (ör. [Twitter](https://twitter.com/kozakmilos) veya Facebook), developers@AndroidAPS.org adresine e-posta gönderebilirsiniz). [Ayrıca en son araştırmalardan bazılarını ve sonuçlarla ilgili verileri burada bulabilirsiniz.](https://openaps.org/outcomes/).

### Kendin Yap (DIY) Kapalı Döngü oluşturma adımları:

AndroidAPS'i kullanmaya başlamak için aşağıdaki adımlar izlenmelidir:

* [Uyumlu bir pompa](../Hardware/pumps.md), [uyumlu bir Android cihaz](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) ve [uyumlu bir CGM kaynağı](../Configuration/BG-Source.rst) bulun.
* [AndroidAPS kaynak kodunu indirin ve yazılımı derleyin](../Installing-AndroidAPS/Building-APK.md).
* [Yazılımı diyabet cihazlarıyla konuşacak ve ayarları ve güvenlik tercihlerini belirleyecek şekilde yapılandırın](../index#configuration).

### Bir KENDİN YAP Kapalı Döngü Nasıl Çalışır

Kapalı döngü sistemi olmadan, diyabetli bir kişi pompasından ve CGM'sinden veri toplar, ne yapacağına karar verir ve harekete geçer.

Otomatik insülin iletimi ile sistem aynı şeyi yapar: pompadan, CGM'den ve günlüğe kaydedilen diğer bilgilerden (örneğin Nightscout aracılığıyla) verileri toplar. Bu bilgiyi hesaplamaları için bir temel olarak kullanır ve ne kadar daha fazla veya daha az insülin gerektiğine karar verir (geçici bazal oranlarını üstünde veya altında). KŞ'yi sabit veya hedef aralıkta tutmak için gerekli ayarlamaları yapmak için geçici bazal oranlar kullanılır.

AndroidAPS çalıştıran cihaz pompanın bağlantısını koparırsa veya menzil dışına çıkarsa, en son geçici bazal oranı sona erdiğinde, pompa, önceden programlanmış bazal oranları çalıştıran varsayılan programa geri döner.

### Veriler nasıl toplanır:

AndroidAPS ile, bir Android cihaz matematik yapmak için özel bir uygulama çalıştırır, cihaz desteklenen bir pompa ile Bluetooth kullanarak iletişim kurar. AndroidAPS, ek bilgi toplamak ve hastaya, bakıcılara ve sevdiklerine ne ve neden yaptığı hakkında rapor vermek için diğer cihazlarla ve bulutla wifi veya mobil veriler aracılığıyla iletişim kurabilir.

Android cihazın şunları yapması gerekir:

* pompa ile iletişim kurma ve geçmişi okuma - ne kadar insülin verildi
* communicate with the CGM (either directly, or via the cloud) - to see what BGs are/have been doing

Cihaz bu verileri topladıktan sonra algoritma çalışır ve ayarlara (İDF, karbonhidrat oranı, İES, hedef vb.) göre karar verir. Gerekirse, insülin iletim oranını değiştirmek için pompaya komutlar verir.

Ayrıca, insülin iletim oranlarının hesaplanmasında kullanmak üzere pompadan veya Nightscout'tan boluslar, karbonhidrat tüketimi ve geçici hedef ayarlamaları hakkında her türlü bilgiyi toplayacaktır.

### Ne yapacağını nasıl biliyor?

Açık kaynaklı yazılım, insülin iletiminin nasıl ayarlanması gerektiğini hesaplamak için insanların yaptığı işi (manuel modda) cihazın yapmasını kolaylaştırmak için tasarlanmıştır. Önce tüm destekleyici cihazlardan ve buluttan veri toplar, verileri hazırlar ve hesaplamaları çalıştırır, sonraki saatlerde beklenen KŞ seviyelerine ilişkin tahminler yapar ve KŞini hedef aralıkta tutmak veya geri getirmek için gerekli ayarlamaları hesaplar. Ardından gerekli ayarlamaları pompaya gönderir. Sonra verileri geri okur ve tekrar tekrar yapar.

En önemli girdi parametresi CGM'den gelen kan şekeri seviyesi olduğundan, yüksek kaliteli CGM verilerine sahip olmak önemlidir.

AndroidAPS, topladığı tüm girdi verilerini, ortaya çıkan tavsiyeyi ve gerçekleştirilen herhangi bir eylemi şeffaf bir şekilde izlemek için tasarlanmıştır. Bu nedenle, günlükleri gözden geçirerek. “Neden X yapıyor?” Sorusuna herhangi bir zamanda cevap vermek kolaydır.

### AndroidAPS algoritması karar verme örnekleri:

AndroidAPS, OpenAPS ile aynı çekirdek algoritmayı ve işlevselliği kullanır. Algoritma, gelecekte neler olabileceğine dair farklı senaryoları temsil eden (ayarlara ve duruma göre) birden fazla tahminde bulunur. Nightscout'ta bunlar “mor çizgiler” olarak görüntülenir. AndroidAPS, bu [tahmin satırlarını](../Installing-AndroidAPS/Releasenotes#overview-tab) ayırmak için farklı renkler kullanır. Günlüklerde, bu tahminlerden hangisinin ve hangi zaman diliminin gerekli eylemleri yönlendirdiğini izlenebilir.

#### İşte mor tahmin çizgilerinin örnekleri ve bunların nasıl farklı olabileceği:

![Purple prediction line examples](../images/Prediction_lines.jpg)

#### İnsülin iletiminde gerekli ayarlamaları etkileyen farklı zaman dilimlerine ilişkin örnekler aşağıda verilmiştir:

#### Senaryo 1 - Güvenlik için Sıfır Geçici

Bu örnekte, KŞ kısa vadede yükseliyor; ancak, daha uzun bir zaman diliminde düşük olacağı tahmin edilmektedir. Aslında, hedef *ve* güvenlik eşiğinin altına ineceği tahmin edilmektedir. For safety to prevent the low, AndroidAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

#### Senaryo 2 - Güvenlik için sıfır geçici

Bu örnekte, KŞ'nin yakın vadede düşeceği, ancak sonunda hedefin üzerinde olacağı tahmin edilmektedir. Ancak, kısa vadeli beklenen değer güvenlik eşiğinin altında olduğundan, AndroidAPS, beklenen KŞ değeri artık herhangi bir zamanda eşiğin altında kalmayana kadar tekrar "sıfır geçici" kullanır.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Senaryo 3 - Daha fazla insülin gerekli

Bu örnekteki tahmin, yakın gelecekte hedef değerin altına bir düşüş beklemektedir. Ancak güvenlik eşiğinin altında olması beklenmiyor. Nihai KŞ hedefin üzerindedir. Bu nedenle, eklenen insülin tahmini eşiğin altına getireceğinden, AndroidAPS kısa vadeli hipoya katkıda bulunacak insülin vermekten kaçınacaktır. Daha sonra, güvenli olduğunda, nihai olarak tahmin edilen KŞ'nin en düşük seviyesini hedefe indirmek için insülin eklenmesini değerlendirecektir. *(Gereken insülinin ayarına ve miktarına ve süresine bağlı olarak, bu insülin geçici bir bazal oran veya SMB (Süper Mikro Bolus) yoluyla iletilebilir).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Senaryo 4 - Güvenlik nedenleriyle insülin dozunun azaltılması

Bu örnekte, AndroidAPS, KŞ'i hedefin oldukça üzerinde arttığını görüyor. Bununla birlikte, insülinin zamanlaması nedeniyle, vücutta zaten KŞ'i sonunda aralığa getirmek için yeterli insülin vardır. In fact, BG is predicted to eventually be below target. Bu nedenle, AndroidAPS orta vadede hipoglisemiye neden olmamak için herhangi bir ek insülin vermeyecektir. KŞ yüksek ve yükseliyor olsa da, AndroidAPS'nin böyle bir senaryoda bazal oranı düşürmesi daha olasıdır.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Ayarları optimize etme ve değişiklik yapma

AndroidAPS veya DIY kapalı döngülerle deneyimi olmayan bir klinisyen olarak, hastanızın ayarlarını optimize etmesine veya sonuçlarını iyileştirmek için değişiklikler yapmasına yardımcı olmakta zorlanabilirsiniz. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](../index)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)