## Development branch

<font color="#FF0000"><strong>Dikkat:</strong></font>
Development branch yalnızca AndroidAPS'in daha da geliştirilmesi içindir. <font color="#FF0000"><strong>Tedavi amaçlı döngü için değil</strong></font> test etmek için ayrı bir telefonda kullanılmalıdır!

Kullanılacak en kararlı AndroidAPS sürümü, [Master branch](https://github.com/nightscout/AndroidAPS/tree/master) sürümüdür. Tedavi amaçlı döngü için Master branch sürümünü kullanmanız önerilir.

AndroidAPS'nin Development sürümü yalnızca yığın izleriyle uğraşan, günlük dosyalarına bakan, hata ayıklayıcıyı çalıştırarak hata raporları oluşturabilen ve diğer geliştiricilere yardımcı olan geliştiriciler ve test uzmanları içindir. (kısaca: yardım almadan ne yaptıklarını bilen insanlar!) Bu nedenle birçok tamamlanmamış özellik devre dışı bırakılır. Bu özellikleri etkinleştirmek için /AAPS/extra dizininde `engineering_mode` adlı bir klasör oluşturarak **Mühendislik Modu**'na girin. Mühendislik modunu etkinleştirmek döngüyü tamamen bozabilir.

Bununla birlikte, Dev branch, hangi özelliklerin test edildiğini görmek ve hataları gidermeye yardımcı olmak ve yeni özelliklerin pratikte nasıl çalıştığı hakkında geri bildirimde bulunmak için iyi bir yerdir. Çoğu zaman insanlar Dev branch'ı kararlı olduğundan emin olana kadar eski bir telefonda ve pompada test eder - tüm kullanımın riski size aittir. Herhangi bir yeni özelliği test ederken, hala geliştirilmekte olan bir özelliği test ettiğinizi unutmayın. Kendinizi güvende tutmak için özen göstererek & riskin size ait olduğunu bilerek yapın.

Dev branch kullanırken bir hata bulursanız veya yanlış bir şey olduğunu düşünüyorsanız, aynı sorunla karşılaşan herhangi birinin olup olmadığını kontrol etmek için [sorunlar sekmesini](https://github.com/nightscout/AndroidAPS/issues) görüntüleyin. Eğer yoksa kendiniz ekleyebilirsiniz. Burada ne kadar çok bilgi paylaşırsanız o kadar iyi olur (unutmayın, [günlük dosyalarınızı](../Usage/Accessing-logfiles.md) paylaşmanız gerekebilir. Yeni özellikler ayrıca [discord](https://discord.gg/4fQUWHZ4Mw)'da tartışılabilir.

Bir geliştirme sürümünün bir son kullanma tarihi vardır. Bu, versiyonun tatmin eden bir kullanımı olduğunda rahatsız edici görünüyor, ancak bir amaca hizmet ediyor. Tek bir geliştirici sürümü kullanılırken, insanların bildirdiği hataları takip etmek daha kolaydır. Geliştiriciler, bazılarında hataların giderildiği, diğerlerinin giderilmediği aynı zamanda insanların hata raporlarını bildirmeye devam ettikleri üç sürümünün olduğu karmaşık bir konumda olmak istemiyorlar.