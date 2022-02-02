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
* some old [Medtronic](../Configuration/MedtronicPump.md)

pompaları. AndroidAPS ile çalışma potansiyeline sahip olabilecek diğer pompaların durumlarının ayrıntıları [Gelecek (olası) Pompalar](Future-possible-Pump-Drivers.md) sayfasında listelenmiştir.

Yükseltmek veya satın almak için bir pompa seçmeniz gerekiyorsa, insanlar genellikle hangisini seçeceklerini sorar. Çeşitli distribütörlerin ayrıntıları [bu e-tabloda](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0) yer almaktadır, henüz listelenmemişse lütfen bilgilerinizi paylaşın.

Combo ve Insight, sağlam pompalardır ve döngüde kullanılabilir. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... Combo ile bu o kadar kolay değildir. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)

* Initial pairing is simpler with the DanaRS/-i. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.

* Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Yine de bağlantınız uzun zaman alabilir, bu nedenle BT bağlantısının kopabileceği yerlerde bağlantı için daha fazla zamana ihtiyaç var, bu da bolus yaparken veya yemek yerken telefonunuzdan uzaklaşırsanız o kadar kolay değil.

* Combo, GBO'larin sonunda titreşir, Dana* R, SMB'de titreşir (veya bip sesi çıkarır). Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir. Dana* RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.

* RS'deki geçmişi birkaç saniyede karbonhidratla okumak, çevrimdışıyken telefonları kolayca değiştirmeyi ve bazı CGM değerleri girer girmez döngüye devam etmeyi mümkün kılar.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir".

Combo elbette çok iyi bir pompadır ve döngüye alınabilir. Ayrıca standart bir luer kilidine sahip olduğu için daha birçok infüzyon seti tipi arasından seçim yapma avantajına da sahiptir. Ve pil, herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan çalabilir/ödünç alabilirsiniz ;-)