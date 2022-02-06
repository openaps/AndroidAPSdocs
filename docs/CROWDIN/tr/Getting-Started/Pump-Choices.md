# Pompa Seçimi

AndroidAPS şu anda aşağıdaki pompalarla çalışabilmektedir.

* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* Bazı eski [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Yükseltmek veya satın almak için bir pompa seçmeniz gerekiyorsa, insanlar genellikle hangisini seçeceklerini sorar. Çeşitli distribütörlerin ayrıntıları [bu e-tabloda](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0) yer almaktadır, henüz listelenmemişse lütfen bilgilerinizi paylaşın.

Combo ve Insight, sağlam pompalardır ve döngüde kullanılabilir. Bununla birlikte, tercih edilen pompa olarak DanaR/RS/-i'nin avantajları şunlardır:

* Dana*R/RS/-i, lineage yükleme gerektirmeden Android >= 5.1 olan hemen hemen her telefona bağlanır. Telefonunuz bozulursa, hızlıca Dana*R/RS pompalarıyla çalışan herhangi bir telefonu kolayca bulabilirsiniz... Combo ile bu o kadar kolay değildir. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)

* DanaRS/-i ile ilk eşleştirme daha kolaydır. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.

* Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Yine de bağlantınız uzun zaman alabilir, bu nedenle BT bağlantısının kopabileceği yerlerde bağlantı için daha fazla zamana ihtiyaç var, bu da bolus yaparken veya yemek yerken telefonunuzdan uzaklaşırsanız o kadar kolay değil.

* Combo, GBO'larin sonunda titreşir, Dana* R, SMB'de titreşir (veya bip sesi çıkarır). Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir. Dana* RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.

* RS'deki geçmişi birkaç saniyede karbonhidratla okumak, çevrimdışıyken telefonları kolayca değiştirmeyi ve bazı CGM değerleri girer girmez döngüye devam etmeyi mümkün kılar.

* Insulet Omnipod Eros, RileyLink/Orangelink vb. gibi bir pod iletişim cihazı gerektirir. Daha yeni omnipod DASH, telefonunuzla doğrudan Bluetooth üzerinden iletişim kurduğu için gerek duymaz.

* All pumps AndroidAPS can talk with are waterproof on delivery. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir".

Combo elbette çok iyi bir pompadır ve döngüye alınabilir. Ayrıca standart bir luer kilidine sahip olduğu için daha birçok infüzyon seti tipi arasından seçim yapma avantajına da sahiptir. Ve pil, herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan çalabilir/ödünç alabilirsiniz ;-)