# AndroidAPS dokümantasyonuna hoş geldiniz

![Image](images/modules-female.png)

AndroidAPS, android akıllı telefonlarında yapay pankreas sistemi (APS) görevi gören, insüline bağımlı diyabetle yaşayan kişiler için açık kaynak kodlu bir uygulamadır. Ana kompanentler ile amacı, farklı openAPS yazılım algoritmaları kullanarak canlı bir pankreasın yaptığı gibi otomatik insülin dozlama (AID) yaparak kan şekeri seviyelerini sağlıklı sınırlar içinde tutmaktır. Ek olarak, yazılımın desteklediği ve FDA/CE onaylı bir insülin pompasına ve sürekli şeker ölçüm cihazına ihtiyacınız olacaktır.

Uygulama kendi kendine öğrenen yapay zeka KULLANMAZ. Bunun yerine, AndroidAPS'in hesaplamaları, kullanıcının tedavi profiline manuel olarak koyduğu bireysel dozaj algoritmasına ve karbonhidrat alımına dayanır, ancak bunlar güvenlik nedenleriyle sistem tarafından doğrulanır.

Uygulama Google Play'de bulunmaz - yasal nedenlerle onu kaynak koddan kendiniz oluşturmanız gerekir.

:::{admonition} Ask for help - Writing Docs
:class: note

Lütfen utanmayın, belgeleri oluştururken desteğe ihtiyacımız var. Bir çekme isteği oluşturmak nispeten basittir. Hiçbir şeyi bozamazsınz. Serbest bırakma prosedürleri var. Nasıl yardımcı olabileceğinizi görmek için başlangıçta konuşmak istiyorsanız, Discord veya Facebook'ta bize ulaşın. Günümüzde ve çağımızda, hızlı bir şekilde iletişim kurarak en iyi nasıl dahil olabileceğinizi ve size ilk adımları nasıl gösterebileceğimizi tartışabiliriz.
:::

## Dokümantasyon nasıl okunur?

Dokümantasyonun bu alt başlığını özellikle Kendin-Yap-APS (Yapay-Pankreas-Sistemleri) kavramına yeni başlayanlar için en önemli olduğunu düşündüğümüz bilgilerle nasıl tanışacaklarını en iyi şekilde göstermek için, özellikle AAPS yolculuğunuza ilk başladığınızda belirlenen "sınırların" arkasındaki nedenleri anlamak açısından derledik. Bu güvenlik sınırları, yeni kullanıcıların AndroidAPS'yi ilk kez kurmayı, oluşturmayı ve ardından başarılı bir şekilde döngü yapmayı öğrenirken yanlışlıkla yapmaları muhtemel olan hataların gözlemlenmesiyle uzun yıllar boyunca geliştirilmiştir. Kullanıcılar sistemi kullanmaya başlamak için o kadar heyecanlılar ki, çoğu zaman oturup bu dokümantasyondaki bilgileri tam olarak anlamak için gereken zamanı ayırmayı unutuyorlar. Hepimiz bu aşamalardan geçtik!

"Her şeyi oku" yaklaşımı değerlidir ve kesinlikle doğrudur. Bununla birlikte, yeni gelenlerin, bir kerede anlamaları beklenen yeni bilgi hacmi ve çeşitliliği karşısında hızla bunalmaları olasıdır! Dolayısıyla bu sonraki birkaç alt başlık, kendi seçtiğiniz kurulumu mümkün olduğunca az aksaklıkla başarılı bir şekilde yürütmek için gerekli olan bilginin en önemli temellerini ortaya koymayı amaçlamaktadır. Yeni kullanıcılar, sistemin henüz aşina olmadıkları yönleriyle karşılaştıklarında bu kılavuza başvurabilirler; ve gerektiğinde daha derinlemesine bilgi bulmak için dokümantasyonda nereye gideceklerini kendilerine hatırlatılacak. It is also important to lay out the capabilities of AndroidAPS in an up-front manner, as sometimes it can be disappointing to discover in the middle of reading the documentation that certain necessary tools are currently not available for use (due to constraints on which types of insulin pumps or CGMs are available in some countries vs. other countries etc.) or simply offers less/different functionality than first assumed. Son olarak, bu dokümantasyondaki deneyimle ilgili birçok yönün yalnızca AAPS'i gerçek zamanlı olarak kullanmaya başladığınızda uygun hale geldiğini kabul etmek önemlidir. Sadece kuralları okuyarak bir sporu mükemmel bir şekilde oynamayı öğrenmek neredeyse imkansız olduğu gibi, önce AAPS'i güvenli bir şekilde çalıştırma kurallarının temellerini öğrenmenin ve ardından AndroidAPS ile döngü adımlarında gezinirken bu kuralların en iyi nasıl uygulanacağını öğrenmeye zaman ayırmanın bir kombinasyonunu gerektirir.

The [Getting started](Getting-Started/Safety-first.md) subsection is a must read to understand the general concept of what an artificial pancreas system is designed to do; and is especially pertinent for users of AndroidAPS.

The subsection [What do I need?](Module/module.md) specifies the CGMs (Continuous Glucose Monitors) and insulin pumps which are are available for use with AndroidAPS. Bu alt bölümün anlaşılması önemlidir, böylece AndroidAPS sisteminiz ilk seferde doğru şekilde kurulabilir ve oluşturulabilir ve gerçek anlamda iyi çalışır.

The subsection [Where to go for help?](Where-To-Go-For-Help/Connect-with-other-users.html) should help direct you to the best places to go to find help depending upon your levels of experience with AAPS. Bu, özellikle başlangıçta kendinizi dışlanmış hissetmemeniz ve başkalarıyla olabildiğince çabuk iletişim kurabilmeniz, soruları netleştirebilmeniz ve olağan tuzakları olabildiğince çabuk çözebilmeniz için çok önemlidir. Deneyimler, birçok insanın halihazırda AndroidAPS'i başarıyla kullandığını gösteriyor, ancak herkesin bir noktada kendi başlarına çözemeyecekleri bir sorunu var. Ancak güzel olan şu ki, çok sayıda kullanıcı nedeniyle, sorulara yanıt verme süreleri genellikle çok hızlıdır, genellikle yalnızca birkaç saattir. Aptalca soru diye bir şey olmadığı için yardım istemekten çekinmeyin! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz. Sadece deneyin lütfen.

In the subsection [Glossary](Getting-Started/Glossary.md) we have compiled a list of the acronyms (or short-term names) used throughout AAPS. Örneğin, İDF veya GH terimlerinin daha yaygın (daha uzun) terimlerinin ne anlama geldiğini öğrenmek için bu sayfaya gidilir.

For parents who want to build AndroidAPS for their children, we recommend the subsection [AndroidAPS for children](Children/Children.md) , as there you will find more advanced information specifically tailored for learning the extra steps necessary in order to remotely control your child's AndroidAPS app as well as a more comprehensive safety profile as compared to adults. Çocuklarınızı destekleyebilmeli ve başarılı olmanıza yardımcı olmak için AndroidAPS'in sunduğu tüm gelişmiş kavramları anlayabilmelisiniz.

Artık AndroidAPS'in kullandığı kavramları sağlam bir şekilde anladığınıza, APS'nizi oluşturmada gerekli araçlar için nereye gideceğinizi bildiğinize ve acil bir durumda nereden yardım alacağınıza aşina olduğunuza göre, artık uygulamayı oluşturmaya başlamanın tam zamanı! The subsection [How to install AndroidAPS?](Installing-AndroidAPS/Building-APK.md) shows you this in detail. Gereksinimler geçmişte kurmuş olabileceğiniz herhangi bir şeyden çok farklı olduğundan, uygulamayı ilk birkaç kez oluştururken talimatları adım adım uygulamanızı öneririz, böylece tüm yönergeler tam olarak izlendiğinde uygulama oluşturma sürecinin nasıl davranması gerektiğine dair daha güçlü bir fikir sahibi olursunuz. Lütfen zaman ayırmayı unutmayın. Daha sonra, uygulamayı yeni bir sürüm için yeniden oluşturduğunuzda bu süreç daha hızlı olacaktır. Bu şekilde, diğer yüklemelerinizde çok fazla adımın dışına çıkmadan bir şeylerin planlandığı gibi gitmediğini fark etme şansınız daha yüksek olacaktır. Anahtar deposu dosyanızı (uygulamanızı imzalamak için kullanılan .jks dosyası) güvenli bir yere kaydetmeniz önemlidir, böylece her yeni güncellenmiş sürüm oluşturmanız istendiğinde her zaman aynı anahtar deposu dosyasını ve parolayı kullanabilirsiniz. Bu dosya, uygulamanın her yeni sürümünün, uygulamanın önceki sürümlerinde kendisine sağladığınız tüm bilgileri "hatırlamasını" ve böylece güncellemelerin olabildiğince sorunsuz gitmesini sağlayan anahtardır. Ortalama olarak, yılda bir yeni sürüm ve 2-3 gerekli güncelleme olacağını varsayabilirsiniz. Bu sayı deneyime dayanmaktadır ve değişebilir. Ama en azından size ne olabileceği konusunda genel bir bilgi vermek istiyoruz. Güncellenmiş AndroidAPS uygulama sürümlerini oluşturma konusunda daha deneyimli olduğunuzda, güncellenmiş bir uygulama oluşturmak için gereken tüm adımlar ortalama olarak yalnızca 15-30 dakika sürer. Ancak, bu adımlar her zaman yeni kullanıcılar tarafından sezgisel olarak bilinmediğinden, başlangıçta oldukça dik bir öğrenme eğrisi olabilir! Bu nedenle, güncelleme sürecini tamamlamadan önce topluluktan biraz yardım alarak yarım gün veya tam bir gün sürdüğünü fark ederseniz sinirlenmeyin. Çok sinirli veya sabırsız olduğunuzu fark ederseniz, kısa bir ara verin ve çoğu zaman bir veya iki blok etrafında bir gezintiden sonra soruna yeniden denemenin daha iyi olduğunu göreceksiniz. Ayrıca, SSS bölümünde yer alan ilk birkaç güncellemede ortaya çıkması muhtemel tipik hataların çoğuna ilişkin bir soru ve yanıt listesi hazırladık; yanı sıra "Sorun Giderme" alt başlığında "AndroidAPS nasıl kurulur?" kısmı da ek bilgi sağlar.

The subsection [Component Setup](Configuration/BG-Source.md) explains how to properly integrate each of the various different separate component parts into AndroidAPS, as well as how to set them up to work as seamlessly as possible together. Tüm bileşenler ayrı bölümler altında listelenmiştir: CGM/FGM, xDrip Ayarları, Pompalar, Telefonlar, Nightscout kurulumu ve Akıllı saatler. İnsülin pompasının sensör (KŞ) değerleri ve kontrolü, özellikle anlaşılması gereken önemli bilgilerdir. The subsection [Configuration](Configuration/BG-Source.md) describes the best pump configurations to use in AndroidAPS.

This is followed by a particularly important subsection [AndroidAPS Usage](Getting-Started/Screenshots.md), in which you are slowly introduced to the full usage of what AndroidAPS has to offer via a safe and carefully calibrated step-by-step gradual process designed to make sure that you/your child are thoroughly familiar and comfortable navigating all the different levels and menu configurations before graduating on the next phase, each commonly referred to as the next Objective, until you are have enough experience to begin using the more advanced options available within the app. These Objectives are specially designed in such a way that will gradually unlock more possibilities of AndroidAPS and switch from Open Loop to Closed Loop.

After that there is a subsection [General Hints](Usage/Timezone-traveling.md) with e.g. information on how to deal with the crossing of time zones as well as knowing what to do during the Spring Forward - Fall Back daylight saving time changes which will occur twice a year while using AndroidAPS.

There is a subsection for the [clinicians](Resources/clinician-guide-to-AndroidAPS.md) who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

Finally, in the subsection [How to help?](make-a-PR.md) we would like to provide you with information so that you are able to suggest small or larger changes to the documentation yourself and work together with us on the documentation. We further need support for [translation of the documentation](translations.md) By the way, it also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. Bu şekilde, diğer kullanıcılar da gelecekte aynı tür sorulara yanıt bulmaya çalışırsa, doğru bilgiler kolayca yeniden bulunabilir.

:::{admonition} Ask for help - Translators Neeeded!!!
:class: note

The documentation is written in English and translated in different languages. We are searching help by the translation of a) the app and b) the documentation.

The documentation process is explained [here](translations.md).

If your brwoser will not display all icons in once please press refresh. Theses are a lot of static images the browser requests from the internet. The badges are generated with new status every hour.

(translation-help-needed)= State of the **app** translations per language (country code, percentage translation, percentage proofreading).
| Language | Translated                                                                                                                                                                                                                              | Proofread                                                                                                                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AF       | ![af translation](https://img.shields.io/badge/dynamic/json?color=blue&label=af&style=flat&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![af proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=af&style=flat&logo=crowdin&query=%24.progress.0.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| KŞ       | ![bg translation](https://img.shields.io/badge/dynamic/json?color=blue&label=bg&style=flat&logo=crowdin&query=%24.progress.1.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![bg proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=bg&style=flat&logo=crowdin&query=%24.progress.1.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| CA       | ![ca translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ca&style=flat&logo=crowdin&query=%24.progress.2.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![ca proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ca&style=flat&logo=crowdin&query=%24.progress.2.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| CS       | ![cs translation](https://img.shields.io/badge/dynamic/json?color=blue&label=cs&style=flat&logo=crowdin&query=%24.progress.3.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![cs proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=cs&style=flat&logo=crowdin&query=%24.progress.3.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| DA       | ![da translation](https://img.shields.io/badge/dynamic/json?color=blue&label=da&style=flat&logo=crowdin&query=%24.progress.4.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![da proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=da&style=flat&logo=crowdin&query=%24.progress.4.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| DE       | ![de translation](https://img.shields.io/badge/dynamic/json?color=blue&label=de&style=flat&logo=crowdin&query=%24.progress.5.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![de proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=de&style=flat&logo=crowdin&query=%24.progress.5.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| EL       | ![el translation](https://img.shields.io/badge/dynamic/json?color=blue&label=el&style=flat&logo=crowdin&query=%24.progress.6.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![el proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=el&style=flat&logo=crowdin&query=%24.progress.6.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| es-ES    | ![es-ES translation](https://img.shields.io/badge/dynamic/json?color=blue&label=es-ES&style=flat&logo=crowdin&query=%24.progress.7.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)  | ![es-ES proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=es-ES&style=flat&logo=crowdin&query=%24.progress.7.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)  |
| FR       | ![fr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=fr&style=flat&logo=crowdin&query=%24.progress.8.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        | ![fr proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=fr&style=flat&logo=crowdin&query=%24.progress.8.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)        |
| ga-IE    | ![ga-IE translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ga-IE&style=flat&logo=crowdin&query=%24.progress.9.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)  | ![ga-IE proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ga-IE&style=flat&logo=crowdin&query=%24.progress.9.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)  |
| HE       | ![he translation](https://img.shields.io/badge/dynamic/json?color=blue&label=he&style=flat&logo=crowdin&query=%24.progress.10.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![he proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=he&style=flat&logo=crowdin&query=%24.progress.10.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| HR       | ![hr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=hr&style=flat&logo=crowdin&query=%24.progress.11.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![hr proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=hr&style=flat&logo=crowdin&query=%24.progress.11.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| HU       | ![hu translation](https://img.shields.io/badge/dynamic/json?color=blue&label=hu&style=flat&logo=crowdin&query=%24.progress.12.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![hu proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=hu&style=flat&logo=crowdin&query=%24.progress.12.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| IT       | ![it translation](https://img.shields.io/badge/dynamic/json?color=blue&label=it&style=flat&logo=crowdin&query=%24.progress.13.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![it proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=it&style=flat&logo=crowdin&query=%24.progress.13.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| JA       | ![ja translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ja&style=flat&logo=crowdin&query=%24.progress.14.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![ja proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ja&style=flat&logo=crowdin&query=%24.progress.14.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| KO       | ![ko translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ko&style=flat&logo=crowdin&query=%24.progress.15.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![ko proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ko&style=flat&logo=crowdin&query=%24.progress.15.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| LT       | ![lt translation](https://img.shields.io/badge/dynamic/json?color=blue&label=lt&style=flat&logo=crowdin&query=%24.progress.16.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![lt proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=lt&style=flat&logo=crowdin&query=%24.progress.16.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| NL       | ![nl translation](https://img.shields.io/badge/dynamic/json?color=blue&label=nl&style=flat&logo=crowdin&query=%24.progress.17.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![nl proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=nl&style=flat&logo=crowdin&query=%24.progress.17.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| NO       | ![no translation](https://img.shields.io/badge/dynamic/json?color=blue&label=no&style=flat&logo=crowdin&query=%24.progress.18.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![no proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=no&style=flat&logo=crowdin&query=%24.progress.18.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| PL       | ![pl translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pl&style=flat&logo=crowdin&query=%24.progress.19.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![pl proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pl&style=flat&logo=crowdin&query=%24.progress.19.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| pt-BR    | ![pt-BR translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-BR&style=flat&logo=crowdin&query=%24.progress.20.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) | ![pt-BR proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pt-BR&style=flat&logo=crowdin&query=%24.progress.20.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) |
| pt-PT    | ![pt-PT translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-PT&style=flat&logo=crowdin&query=%24.progress.21.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) | ![pt-PT proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pt-PT&style=flat&logo=crowdin&query=%24.progress.21.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) |
| RO       | ![ro translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ro&style=flat&logo=crowdin&query=%24.progress.22.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![ro proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ro&style=flat&logo=crowdin&query=%24.progress.22.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| RU       | ![ru translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ru&style=flat&logo=crowdin&query=%24.progress.23.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![ru proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ru&style=flat&logo=crowdin&query=%24.progress.23.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| SK       | ![sk translation](https://img.shields.io/badge/dynamic/json?color=blue&label=sk&style=flat&logo=crowdin&query=%24.progress.24.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![sk proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=sk&style=flat&logo=crowdin&query=%24.progress.24.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| sr-CS    | ![sr-CS translation](https://img.shields.io/badge/dynamic/json?color=blue&label=sr-CS&style=flat&logo=crowdin&query=%24.progress.25.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) | ![sr-CS proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=sr-CS&style=flat&logo=crowdin&query=%24.progress.25.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) |
| sv-SE    | ![sv-SE translation](https://img.shields.io/badge/dynamic/json?color=blue&label=sv-SE&style=flat&logo=crowdin&query=%24.progress.26.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) | ![sv-SE proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=sv-SE&style=flat&logo=crowdin&query=%24.progress.26.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) |
| TR       | ![tr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=tr&style=flat&logo=crowdin&query=%24.progress.27.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       | ![tr proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=tr&style=flat&logo=crowdin&query=%24.progress.27.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json)       |
| zh-CN    | ![zh-CN translation](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-CN&style=flat&logo=crowdin&query=%24.progress.28.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) | ![zh-CN proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=zh-CN&style=flat&logo=crowdin&query=%24.progress.28.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-309752.json) |

State of the **documentation** translations per language (country code, percentage translation, percentage proofreading).
| Language | Translated                                                                                                                                                                                                                              | Proofread                                                                                                                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CS       | ![cs translation](https://img.shields.io/badge/dynamic/json?color=blue&label=cs&style=flat&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![cs proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=cs&style=flat&logo=crowdin&query=%24.progress.0.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| DE       | ![de translation](https://img.shields.io/badge/dynamic/json?color=blue&label=de&style=flat&logo=crowdin&query=%24.progress.1.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![de proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=de&style=flat&logo=crowdin&query=%24.progress.1.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| EL       | ![el translation](https://img.shields.io/badge/dynamic/json?color=blue&label=el&style=flat&logo=crowdin&query=%24.progress.2.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![el proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=el&style=flat&logo=crowdin&query=%24.progress.2.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| ES       | ![es-ES translation](https://img.shields.io/badge/dynamic/json?color=blue&label=es-ES&style=flat&logo=crowdin&query=%24.progress.3.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)  | ![es-ES proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=es-ES&style=flat&logo=crowdin&query=%24.progress.3.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)  |
| FR       | ![fr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=fr&style=flat&logo=crowdin&query=%24.progress.4.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![fr proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=fr&style=flat&logo=crowdin&query=%24.progress.4.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| HE       | ![he translation](https://img.shields.io/badge/dynamic/json?color=blue&label=he&style=flat&logo=crowdin&query=%24.progress.5.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![he proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=he&style=flat&logo=crowdin&query=%24.progress.5.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| KO       | ![ko translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ko&style=flat&logo=crowdin&query=%24.progress.6.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![ko proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ko&style=flat&logo=crowdin&query=%24.progress.6.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| LT       | ![lt translation](https://img.shields.io/badge/dynamic/json?color=blue&label=lt&style=flat&logo=crowdin&query=%24.progress.7.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![lt proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=lt&style=flat&logo=crowdin&query=%24.progress.7.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| NL       | ![nl translation](https://img.shields.io/badge/dynamic/json?color=blue&label=nl&style=flat&logo=crowdin&query=%24.progress.8.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![nl proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=nl&style=flat&logo=crowdin&query=%24.progress.8.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| PL       | ![pl translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pl&style=flat&logo=crowdin&query=%24.progress.9.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        | ![pl proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pl&style=flat&logo=crowdin&query=%24.progress.9.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)        |
| PT       | ![pt-BR translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-BR&style=flat&logo=crowdin&query=%24.progress.10.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json) | ![pt-BR proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pt-BR&style=flat&logo=crowdin&query=%24.progress.10.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json) |
| pt-BT    | ![pt-PT translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-PT&style=flat&logo=crowdin&query=%24.progress.11.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json) | ![pt-PT proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=pt-PT&style=flat&logo=crowdin&query=%24.progress.11.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json) |
| RO       | ![ro translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ro&style=flat&logo=crowdin&query=%24.progress.12.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       | ![ro proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ro&style=flat&logo=crowdin&query=%24.progress.12.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       |
| RU       | ![ru translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ru&style=flat&logo=crowdin&query=%24.progress.13.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       | ![ru proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=ru&style=flat&logo=crowdin&query=%24.progress.13.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       |
| SK       | ![sk translation](https://img.shields.io/badge/dynamic/json?color=blue&label=sk&style=flat&logo=crowdin&query=%24.progress.14.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       | ![sk proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=sk&style=flat&logo=crowdin&query=%24.progress.14.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       |
| TR       | ![tr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=tr&style=flat&logo=crowdin&query=%24.progress.15.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       | ![tr proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=tr&style=flat&logo=crowdin&query=%24.progress.15.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13588158-310610.json)       |

=======
Lütfen utanmayın, belgeleri oluştururken desteğe ihtiyacımız var. Bir çekme isteği oluşturmak nispeten basittir. Hiçbir şeyi bozamazsınz. Serbest bırakma prosedürleri var. Nasıl yardımcı olabileceğinizi görmek için başlangıçta konuşmak istiyorsanız, Discord veya Facebook'ta bize ulaşın. Günümüzde ve çağımızda, hızlı bir şekilde iletişim kurarak en iyi nasıl dahil olabileceğinizi ve size ilk adımları nasıl gösterebileceğimizi tartışabiliriz.
:::

:::{toctree}
:caption: Change language

Change language <./changelanguage.md>
:::

:::{toctree}
:caption: Getting started

Safety first <./Getting-Started/Safety-first.md>
What is a closed loop system <./Getting-Started/ClosedLoop.md>
What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.md>
Docs updates & changes <./Getting-Started/WikiUpdate.md>
:::

(what-do-i-need)=

:::{toctree}
:caption: What do I need?

CGM/FGM choices <./Configuration/BG-Source.md>
Pump choices <./Getting-Started/Pump-Choices.md>
Module <./Module/module.md>
:::

:::{toctree}
:caption: How to Install AndroidAPS

Building the APK <./Installing-AndroidAPS/Building-APK.md>
Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>
Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>
Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>
Install git <./Installing-AndroidAPS/git-install.md>
Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>
Release notes <./Installing-AndroidAPS/Releasenotes.md>
Dev branch <./Installing-AndroidAPS/Dev_branch.md>
:::

(component-setup)=

:::{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>
xDrip Settings <./Configuration/xdrip.md>
Pump choices <./Getting-Started/Pump-Choices.md>
Phones <./Hardware/Phoneconfig.md>
Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
Smartwatch  <./Hardware/Smartwatch.md>
:::

(configuration)=

:::{toctree}
:caption: Configuration

Config builder <./Configuration/Config-Builder.md>
Preferences <./Configuration/Preferences.md>
:::

:::{toctree}
:caption: AndroidAPS Usage

AndroidAPS screens <./Getting-Started/Screenshots.md>
Objectives <./Usage/Objectives.md>
OpenAPS features <./Usage/Open-APS-features.md>
COB calculation <./Usage/COB-calculation.md>
Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
Profile switch <./Usage/Profiles.md>
Temp-targets <./Usage/temptarget.md>
Extended carbs <./Usage/Extended-Carbs.md>
Automation <./Usage/Automation.md>
Careportal (discontinued) <./Usage/CPbefore26.md>
Open Humans Uploader <./Configuration/OpenHumans.md>
Automation with 3rd party apps <./Usage/automationwithapp.md>
Android auto <./Usage/Android-auto.md>
:::

:::{toctree}
:caption: General Hints

Crossing timezones with pumps <./Usage/Timezone-traveling.md>
Accessing logfiles <./Usage/Accessing-logfiles.md>
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Export/Import Settings <./Usage/ExportImportSettings.md>
xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>
:::

:::{toctree}
:caption: AndroidAPS for children

Remote monitoring <./Children/Children.md>
SMS commands <./Children/SMS-Commands.md>
Profile helper <./Configuration/profilehelper.md>
:::

:::{toctree}
:caption: Troubleshooting

Troubleshooting <./Usage/troubleshooting.md>
Nightscout client <./Usage/Troubleshooting-NSClient.md>
:::

:::{toctree}
:caption: FAQ

FAQ <./Getting-Started/FAQ.md>
:::

:::{toctree}
:caption: Glossary

Glossary <./Getting-Started/Glossary.md>
:::

:::{toctree}
:caption: Where to go for help

Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
Docs updates & changes <./Getting-Started/WikiUpdate.md>
:::

:::{toctree}
:caption: For Clinicians

For Clinicians <./Resources/clinician-guide-to-AndroidAPS.md>
:::

:::{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>
How to translate the app and docs <./translations.md>
How to edit the docs <./make-a-PR.md>
:::

:::{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
:::

:::{note}
**Disclaimer And Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AndroidAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- Use of code from github.com is without warranty or formal support of any kind. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Please note - this project has no association with and is not endorsed by: [SOOIL](https://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/) or [Medtronic](https://www.medtronic.com/)
:::
