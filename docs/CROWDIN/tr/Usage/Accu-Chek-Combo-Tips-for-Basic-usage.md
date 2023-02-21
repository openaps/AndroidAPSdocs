# Temel kullanım için Accu-Chek Combo İpuçları

**NOTE:** Starting with AAPS version 3.2, a [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) (referred to as "combov2" sometimes) has been added. The old driver is also referred to as the "Ruffy-based driver". Some parts of this document only apply to the old driver. These will be annotated accordingly.

## Sorunsuz kullanim nasıl sağlanır

* Her zaman **akıllı telefonunuzu yanınızda bulundurun**, geceleri yatağınızın yanında bırakın. Siz uyurken pompanız vücudunuzun arkasında veya altında durabileceğinden, daha yüksek bir konum (bir raf veya tahta üzerinde) en iyi sonucu verir.
* Her zaman pompa pilinin mümkün olduğunca dolu olduğundan emin olun. Pille ilgili ipuçları için pil bölümüne bakın.
* (Only applies to the old driver) It is best to **not touch the app ruffy** while the system is running. Uygulama yeniden başlatılırsa pompa bağlantısı kesilebilir. Pompa ruffy'ye bağlandıktan sonra tekrar bağlanmaya gerek yoktur. Telefon yeniden başlatıldıktan sonra bile bağlantı otomatik olarak yeniden kurulur. Mümkünse, yanlışlıkla açmamak için uygulamayı kullanılmayan bir ekrana veya akıllı telefonunuzdaki bir klasöre taşıyın.
* (Only applies to the old driver) If you unintentionally open the app ruffy during looping, it's best to restart the smartphone right away.
* Mümkün olduğunda, pompayı yalnızca AndroidAPS uygulaması aracılığıyla çalıştırın. Bunu kolaylaştırmak için pompa üzerindeki tuş kilidini **POMPA AYARLARI / TUŞ KİLİDİ / AÇIK** altında etkinleştirin. Sadece rezervuar veya pilin değiştirilmesi gerektiğinde pompanın düğmelerini kullanmak gerekir. ![Tuş kilidi](../images/combo/combo-tips-keylock.png)

## Pompaya erişilemiyor. Ne yapmalı?

### Pompaya ulaşılamıyor alarmını etkinleştirin

* AndroidAPS'de, **Ayarlar / Yerel Alarmlar**'a gidin ve **pompaya ulaşılamadığında alarmı** etkinleştirin ve **pompaya erişilemiyor sınırı [Min]**'i **31** dakika olarak ayarlayın. 
* Bu telefonunuz masanın üzerindeyken odadan çıkarken alarmı tetiklememek için size yeterli süreyi verir, ancak geçici bir bazal oran süresini aşan bir süre boyunca pompaya ulaşılamazsa sizi bilgilendirir.

### Pompanın erişilebilirliğini geri yükleyin

* AndroidAPS bir **pompaya erişilemiyor** alarmı bildirdiğinde, önce tuş kilidini kaldırın ve **pompadaki herhangi bir tuşa basın** (ör. "aşağı" düğmesi). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AndroidAPS. Çoğunlukla iletişim tekrar çalışır.
* Bu işe yaramazsa, akıllı telefonunuzu yeniden başlatın. After the restart, AndroidAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.
* Farklı akıllı telefonlarla yapılan testler, bazı akıllı telefonların "pompa ulaşılamaz" hatasını diğerlerinden daha sık tetiklediğini göstermiştir. [AAPS Telefonları](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) başarıyla test edilmiş akıllı telefonlar listesi. 

### Sık sık yapılan iletişim hatalarının temel nedenleri ve sonuçları

* **Düşük bellek** (veya **agresif güç tasarrufu** ayarları) olan telefonlarda, AndroidAPS genellikle kapatılır. Ana ekrandaki Bolus ve Hesap Makinesi düğmelerinin, sistem başlatılmakta olduğu için AAPS'yi açarken gösterilmemesinden anlayabilirsiniz. Bu başlangıçta "pompa ulaşılamaz alarmlarını" tetikleyebilir. Combo sekmesinin **Son Bağlantı** alanında, AndroidAPS'nin pompayla en son ne zaman iletişim kurduğunu kontrol edebilirsiniz. 

![Pump unreachable](../images/combo/combo-tips-pump-unreachable.png) ![No connection to pump (as shown in the old driver's tab)](../images/combo/combo-tips-no-connection-to-pump.png) ![No connection to pump (as shown in the new driver's tab)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Uygulama yeniden başlatıldığında bazal profil pompadan okunduğu için bu hata pompanın pilini daha hızlı tüketebilir.
* Ayrıca pompa üzerindeki bir düğmeye basılana kadar pompanın gelen tüm bağlantıları reddetmesine neden olan hataya neden olma olasılığını da artırır. 

## Geçici bazal oranın iptali başarısız

* Bazen AndroidAPS bir **GBO İPTAL EDİLDİ** uyarısını otomatik olarak iptal edemez. Ardından AndroidAPS **Combo sekmesinde** **GÜNCELLE** tuşuna basmanız gerekir veya pompadaki alarmın onaylanması gerekir.

## Pompa pili ile ilgili hususlar

### Pili değiştirme

* Bir **pil zayıf** alarmından sonra, akıllı telefon pompadan daha uzakta olsa bile akıllı telefonla güvenilir bir Bluetooth bağlantısı için yeterli gücün olduğundan emin olmak için pil mümkün olan en kısa sürede değiştirilmelidir.
* Bir **düşük pil** alarmından sonra bile pil önemli bir süre kullanılabilir. Ancak "düşük pil" alarmı verdikten sonra her zaman yanınızda yeni bir pil bulundurmanız önerilir.
* Pili değiştirmeden önce, ana ekrandaki **Döngü** sembolüne basın ve **Döngüyü 1 saat askıya al** öğesini seçin. 
* AndroidAPS'nin pompayla iletişimini bitirmesini ve pompadaki Bluetooth logosu kaybolmasını bekleyin.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Pompa üzerindeki tuş kilidini serbest bırakın, pompayı durdurma moduna getirin, muhtemelen iptal edilmiş bir geçici bazal oranı onaylayın ve pili hızlı bir şekilde değiştirin.
* When using the old driver, if the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS. (The new driver automatically updates the pump's date and time.)
* Ardından ana ekranda **Askıya Alınan Döngü** simgesine basarken pompayı tekrar çalışma moduna getirin **Devam et** öğesini seçin.
* AndroidAPS, bir sonraki kan şekeri değerinin gelmesiyle gerekli bir geçici bazal oranını yeniden ayarlayacaktır. 

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Pil tipi ve kısa pil ömrünün nedenleri

* Yoğun Bluetooth iletişimi çok fazla enerji tükettiğinden, yalnızca Energizer Ultimate Lithium gibi **yüksek kaliteli piller** kullanın, "büyük" Accu-Chek hizmet paketinden "güçlü olanlar" veya şarj edilebilir pil için Eneloop pilleri kullanın. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 ila 7 hafta
* Hizmet paketinden **Power One Alkaline** (Varta): 2 ila 4 hafta
* **Eneloop şarj edilebilir** piller (BK-3MCCE): 1 ila 3 hafta

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* (Only applies to the old driver) Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Kısa pil ömrüyle ilgili sorunlarınız varsa en yeni sürümde olduğunuzdan emin olun.
* Pilleri kısmen kısa devre yapan ve hızlı bir şekilde boşaltan Combo pompanın vidalı pil kapağının bazı çeşitleri vardır. Bu sorunu olmayan kapaklar, altın metal kontaklardan tanınabilir.
* Pompa saati kısa bir pil değişiminde "hayatta kalmazsa", kısa bir elektrik kesintisi sırasında saati çalıştıran kapasitör arızalı olabilir. Bu durumda, pompanın Roche tarafından değiştirilmesi yardımcı olabilir, bu garanti süresi boyunca bir sorun teşkil etmez. 
* Akıllı telefon donanımı ve yazılımı (Android işletim sistemi ve bluetooth stack), tam faktörler henüz tam olarak bilinmese de, pompanın pil ömrünü de etkiler. İmkanınız varsa, başka bir akıllı telefon deneyin ve pil ömürlerini karşılaştırın.

## Gün ışığından yararlanma saati değişiklikleri

**NOTE**: The new driver automatically sets date and time and handles daylight saving time changes on its own. The steps below all only apply to the old driver.

* Şu anda birleşik sürücü, pompanın zamanının otomatik olarak ayarlanmasını desteklememektedir.
* Gün ışığından yararlanma saati değişikliği gecesinde, akıllı telefonun saati güncellenir, ancak pompanın saati değişmez. Bu sistemler arasında saat 3'te farklılık gösterdiği için bir alarma yol açar.
* Geceleri uyandırılmak istemiyorsanız, akşam saat geçişinden önce **cep telefonunda otomatik yaz saati geçişini devre dışı bırakın** ve ertesi sabah saatleri manuel olarak ayarlayın. Yaz saati değişiklikleriyle başa çıkmanın iyi bir yolu, bulunduğunuz boylamda bulunan ancak ekvatora daha yakın olan ve genellikle yaz saatinin gözlemlenmediği farklı bir saat dilimine geçmektir. Örnek: Yaz Saatinde Orta Avrupa (CEST/GMT+2) için, kış saatine geçmeden önceki gece telefonunuzda Zimbabve saat dilimine geçebilir ve ardından ertesi sabah aynı anda pompanızın saatini değiştirirken Orta Avrupa Saati CET/GMT+1'e geri dönebilirsiniz. Diğer taraftan, CET/GMT+1 Kış Saatinde Nijerya saat dilimine geçin ve yaz saatine geçişin ertesi sabahı Orta Avrupa Yaz Saati'ne (CEST/GMT+2) geri dönün ve buna göre pompa saatini değiştirin. Uygun bir ülke bulmak için https://www.timeanddate.com/time/map/ adresine bakın.

## Yayma bolus, çok dalgalı bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Karbonhidrat girerken veya tam öğünün karbonhidratlarını ve karbonhidratların kanınıza glikoz olarak gelmesini beklediğiniz süreyi girerek Hesap Makinesini kullanırken **y-Karb** kullanın. Sistem daha sonra, tüm süre boyunca eşit olarak dağıtılan küçük karbonhidratları hesaplayacak ve bu da, algoritmanın eşdeğer insülin dozunu sağlamasına ve aynı zamanda kan şekeri seviyesinin genel yükselişini/düşüşünü sürekli olarak kontrol etmesine neden olacaktır. Çok dalgalı bir bolus yaklaşımı için, daha küçük bir acil bolusu y-karbonhidratlarla da birleştirebilirsiniz. 
* Yemekten önce, AndroidAPS'deki **Eylemler sekmesinde**, birkaç saat boyunca hedef glikoz 80 ile geçici bir **Yakında Yemek** hedefi olarak ayarlayın. Süre, yayılmış bir bolus için seçmeniz gereken aralığa dayalı olmalıdır. Bu hedefinizi normalden daha düşük tutacak ve dolayısıyla iletilen insülin miktarını artıracaktır.
* Ardından öğünün tam karbonhidratını girmek için **HESAP MAKİNESİ**'ni kullanın, ancak bolus hesaplayıcı tarafından önerilen değerleri doğrudan uygulamayın. Çoklu dalga benzeri bir bolus verilecekse, insülin dozunu azaltın. Yemeğe bağlı olarak, algoritmanın artık kan şekerindeki artışı önlemek için ek SMB'ler veya daha yüksek geçici bazal oranlar sağlaması gerekiyor. Burada, bazal oranın (Max IE/h, Maximum bazal IOB) güvenlik sınırlaması ile çok dikkatli bir şekilde denenmeli ve gerekirse geçici olarak değiştirilmelidir.

* Yayma veya çok dalgalı bolusu doğrudan pompa üzerinde kullanmak isterseniz, AndroidAPS, fazla insülin dozunun hesaplanmamasını sağlamak için sonraki altı saat boyunca kapalı döngüyü devre dışı bırakarak sizi cezalandıracaktır.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Bolus iletiminde uyarılar

* AndroidAPS, aynı bolusun aynı dakikada başarıyla iletildiğini algılarsa, aynı sayıda insülin ünitesiyle bolus iletimi engellenir. Aynı insülini arka arkaya iki kez gerçekten bolus yapmak istiyorsanız, iki dakika daha bekleyin ve ardından bolusu tekrar gönderin. İlk bolus kesintiye uğradıysa veya başka nedenlerle iletilmediyse, AAPS 2.0'dan itibaren bolusu hemen yeniden gönderebilirsiniz.
* Alarm, bir bolus doğrudan pompadan iletilse bile, aktif insülini (AİNS) doğru bir şekilde hesaplamak için yeni bir bolus göndermeden önce pompanın bolus geçmişini okuyan bir güvenlik mekanizmasıdır. Burada ayırt edilemeyen girişler engellenmelidir.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Bu mekanizma, hatanın ikinci bir nedeninden de sorumludur: Bolus hesaplayıcının kullanımı sırasında pompa aracılığıyla başka bir bolus verilirse ve bu nedenle bolus geçmişi değişmiş olur, bundan dolayıda bolus hesaplaması temelinden eksik olur ve bolus iptal edilir. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)