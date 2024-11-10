# Development branch

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. <font color="#FF0000"><strong>Tedavi amaçlı döngü için değil</strong></font> test etmek için ayrı bir telefonda kullanılmalıdır!

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Tedavi amaçlı döngü için Master branch sürümünü kullanmanız önerilir.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Bu nedenle birçok tamamlanmamış özellik devre dışı bırakılır. Bu özellikleri etkinleştirmek için /AAPS/extra dizininde `engineering_mode` adlı bir klasör oluşturarak **Mühendislik Modu**'na girin. Mühendislik modunu etkinleştirmek döngüyü tamamen bozabilir.

Bununla birlikte, Dev branch, hangi özelliklerin test edildiğini görmek ve hataları gidermeye yardımcı olmak ve yeni özelliklerin pratikte nasıl çalıştığı hakkında geri bildirimde bulunmak için iyi bir yerdir. Çoğu zaman insanlar Dev branch'ı kararlı olduğundan emin olana kadar eski bir telefonda ve pompada test eder - tüm kullanımın riski size aittir. Herhangi bir yeni özelliği test ederken, hala geliştirilmekte olan bir özelliği test ettiğinizi unutmayın. Kendinizi güvende tutmak için özen göstererek & riskin size ait olduğunu bilerek yapın.

Dev branch kullanırken bir hata bulursanız veya yanlış bir şey olduğunu düşünüyorsanız, aynı sorunla karşılaşan herhangi birinin olup olmadığını kontrol etmek için [sorunlar sekmesini](https://github.com/nightscout/AndroidAPS/issues) görüntüleyin. Eğer yoksa kendiniz ekleyebilirsiniz. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). Yeni özellikler ayrıca [discord](https://discord.gg/4fQUWHZ4Mw)'da tartışılabilir.

Bir geliştirme sürümünün bir son kullanma tarihi vardır. Bu, versiyonun tatmin eden bir kullanımı olduğunda rahatsız edici görünüyor, ancak bir amaca hizmet ediyor. Tek bir geliştirici sürümü kullanılırken, insanların bildirdiği hataları takip etmek daha kolaydır. Geliştiriciler, bazılarında hataların giderildiği, diğerlerinin giderilmediği aynı zamanda insanların hata raporlarını bildirmeye devam ettikleri üç sürümünün olduğu karmaşık bir konumda olmak istemiyorlar.