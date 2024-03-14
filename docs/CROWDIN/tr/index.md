# AAPS dokümantasyonuna hoş geldiniz

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## Overview of the AAPS documentation ("The docs")

Under "Getting Started", the [Introduction](introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. The **Setting up AAPS** section contains step-by-step instructions to do this. It covers choosing and [setting up your reporting server](setting-up-the-reporting-server.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. It also covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app, and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You then progress through the objectives, which will help you to optimise your settings as you unlock the full functionality of the **AAPS** app.

The [Remote control and Following](remote-control.md) section highlights a real strength of **AAPS**, which is that there are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android auto so you can view glucose levels in the car.

[Yardım için nereye gitmeli?](Where-To-Go-For-Help/Connect-with-other-users.html) alt başlığı, AAPS deneyim seviyenize bağlı olarak yardım bulabileceğiniz gidilecek en iyi yerlere yönlendirilmenize yardımcı olacaktır. Bu, özellikle başlangıçta kendinizi dışlanmış hissetmemeniz ve başkalarıyla olabildiğince çabuk iletişim kurabilmeniz, soruları netleştirebilmeniz ve olağan tuzakları olabildiğince çabuk çözebilmeniz için çok önemlidir. Deneyimler, birçok insanın halihazırda AAPS'i başarıyla kullandığını gösteriyor, ancak herkesin bir noktada kendi başlarına çözemeyecekleri bir sorunu var. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz.

[Sözlük](Getting-Started/Glossary.md) alt başlığında, AAPS'de kullanılan kısaltmaların (veya kısa adların) bir listesini derledik. Örneğin, İDF veya GH terimlerinin daha yaygın (daha uzun) terimlerinin ne anlama geldiğini öğrenmek için bu sayfaya gidilir.

  Gereksinimler geçmişte kurmuş olabileceğiniz herhangi bir şeyden çok farklı olduğundan, uygulamayı ilk birkaç kez oluştururken talimatları adım adım uygulamanızı öneririz, böylece tüm yönergeler tam olarak izlendiğinde uygulama oluşturma sürecinin nasıl davranması gerektiğine dair daha güçlü bir fikir sahibi olursunuz. Lütfen zaman ayırmayı unutmayın. Daha sonra, uygulamayı yeni bir sürüm için yeniden oluşturduğunuzda bu süreç daha hızlı olacaktır. Bu şekilde, diğer yüklemelerinizde çok fazla adımın dışına çıkmadan bir şeylerin planlandığı gibi gitmediğini fark etme şansınız daha yüksek olacaktır. Anahtar deposu dosyanızı (uygulamanızı imzalamak için kullanılan .jks dosyası) güvenli bir yere kaydetmeniz önemlidir, böylece her yeni AAPS güncellenmiş sürüm oluşturmanız istendiğinde her zaman aynı anahtar deposu dosyasını ve parolayı kullanabilirsiniz. Bu dosya, uygulamanın her yeni sürümünün, uygulamanın önceki sürümlerinde kendisine sağladığınız tüm bilgileri "hatırlamasını" ve böylece güncellemelerin olabildiğince sorunsuz gitmesini sağlayan anahtardır. Ortalama olarak, yılda bir yeni sürüm ve 2-3 gerekli güncelleme olacağını varsayabilirsiniz. Bu sayı deneyime dayanmaktadır ve değişebilir. Ama en azından size ne olabileceği konusunda genel bir bilgi vermek istiyoruz. Güncellenmiş AAPS uygulama sürümlerini oluşturma konusunda daha deneyimli olduğunuzda, güncellenmiş bir uygulama oluşturmak için gereken tüm adımlar ortalama olarak yalnızca 15-30 dakika sürer. Ancak, bu adımlar her zaman yeni kullanıcılar tarafından sezgisel olarak bilinmediğinden, başlangıçta oldukça dik bir öğrenme eğrisi olabilir! Bu nedenle, güncelleme sürecini tamamlamadan önce topluluktan biraz yardım alarak yarım gün veya tam bir gün sürdüğünü fark ederseniz sinirlenmeyin. Çok sinirli veya sabırsız olduğunuzu fark ederseniz, kısa bir ara verin ve çoğu zaman bir veya iki blok etrafında bir gezintiden sonra soruna yeniden denemenin daha iyi olduğunu göreceksiniz.


  Ayrıca, SSS bölümünde yer alan ilk birkaç güncellemede ortaya çıkması muhtemel tipik hataların çoğuna ilişkin bir soru ve yanıt listesi hazırladık; yanı sıra "Sorun Giderme" alt başlığında "AAPS nasıl kurulur?" kısmı da ek bilgi sağlar.

[Bileşen Kurulumu](Configuration/BG-Source.md) alt başlığı, çeşitli farklı bileşen parçalarının her birinin AAPS'e nasıl düzgün bir şekilde entegre edileceğini ve aynı zamanda mümkün olduğunca birlikte sorunsuz çalışacak şekilde nasıl kurulacağını açıklar. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. [Yapılandırma](Configuration/BG-Source.md) alt başlığı, AAPS'de kullanılacak en iyi pompa yapılandırmalarını açıklar.

Bunu özellikle önemli bir alt bölüm olan [AAPS Kullanımı](Getting-Started/Screenshots.md) takip eder. Uygulama içinde mevcut olan daha gelişmiş seçenekleri kullanmaya başlamak için yeterli deneyime sahip olana kadar, güvenli ve dikkatli bir şekilde kalibre edilmiş adım adım aşamalı bir süreç aracılığıyla AAPS'in sunduğu özelliklerin tam kullanımına yavaş yavaş tanıştırılırsınız. Bu aşamaların her biri genellikle bir sonraki görev olarak adlandırılır. Siz/çocuğunuz, bir sonraki aşamadan mezun olmadan önce tüm farklı düzeylerde ve menü yapılandırmalarında gezinebilirsiniz. Bu Görevler, AAPS'in özelliklerini kademeli olarak ortaya çıkaracak ve Açık Döngüden Kapalı Döngüye geçiş yapacak şekilde özel olarak tasarlanmıştır.

Bu başlıktan sonra AAPS kullanılırken yılda iki kez gerçekleşecek olan yaz saati uygulaması değişiklikleri sırasında zaman dilimlerinin kesişmesiyle nasıl başa çıkılacağı hakkında bilgileri içeren [Genel İpuçları](Usage/Timezone-traveling.md) içeren bir alt başlık vardır.

AAPS gibi açık kaynak kodlu yapay pankreas teknolojisine ilgi duyduğunu ifade eden veya bu tür bilgileri klinisyenleriyle paylaşmak isteyen hastalar için [klinisyenler](Resources/clinician-guide-to-AAPS.md) alt başlığı mevcuttur.

Son olarak, [Nasıl yardımcı olurum?](make-a-PR.md) alt başlığında, dokümantasyonda küçük veya büyük değişiklikleri önerebilmeniz ve dokümantasyon üzerinde bizimle birlikte çalışabilmeniz için size bilgi veriyoruz. We further need support for [translation of the documentation](translations.md). It also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. Bu şekilde, diğer kullanıcılar da gelecekte aynı tür sorulara yanıt bulmaya çalışırsa, doğru bilgiler kolayca yeniden bulunabilir.

 Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

:::{admonition} SAFETY NOTICE
:class: danger The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user.

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels.
:::

:::{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır.
- Use of code from github.com is without warranty or formal support of any kind. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

:::

(AAPS-Documentation-Index)=

## AAPS Documentation Index

```{toctree}
:caption: Dili değiştir

Dili değiştir <./changelanguage.md>
```
```{toctree}
:caption: Getting started

Introduction to AAPS <./introduction.md>

Preparing for AAPS <preparing.md>

```

```{toctree}
:caption: Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration<./Installing-AndroidAPS/change-configuration.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: Remote control and following

Remote control <remote-control.md>
Following-only <following-only.md>
Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Advanced Setting up APPS

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

```

```{toctree}
:caption: Tam Kapalı Döngü

Tam Kapalı Döngü <./Usage/FullClosedLoop.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

```{toctree}
:caption: AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

OpenAPS features <./Usage/Open-APS-features.md>

Dynamic ISF <./Usage/DynamicISF.md>

COB calculation <./Usage/COB-calculation.md>

Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>

Profile switch <./Usage/Profiles.md>

Temp-targets <./Usage/temptarget.md>

Extended carbs <./Usage/Extended-Carbs.md>

Automation <./Usage/Automation.md>

Autotune (dev only) <./Usage/autotune.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>



Custom Watchface reference document <./Usage/Custom_Watchface_Reference.md>

Exchange Site Custom Watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: Genel İpuçları

Pompalarla saat dilimlerini aşmak <./Usage/Timezone-traveling.md>

Günlük dosyalarına erişim <./Usage/Accessing-logfiles.md>

Temel kullanım için Accu-Chek Combo ipuçları <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Ayarları Dışa/İçe Aktarma <./Usage/ExportImportSettings.md>

xDrip mühendislik modu <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Sorun Giderme

Sorun Giderme <./Usage/troubleshooting.md>

Nightscout client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: SSS

SSS <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Sözlük

Sözlük <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Yardım için nereye gitmeli?

Başlamadan önce okumanız gereken yararlı kaynaklar <./Where-To-Go-For-Help/Background-reading.md>

Yardım için nereye gitmeli <./Where-To-Go-For-Help/Connect-with-other-users.md>

Doküman güncellemeleri & değişiklikler <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Klinisyenler için

Klinisyenler için <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

How to edit the docs <./make-a-PR.md>

State of translations <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Legacy

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```
