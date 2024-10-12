# Temel kullanım için Accu-Chek Combo İpuçları

**NOT:** AAPS sürüm 3.2'den itibaren [yeni Combo sürücüsü](../Configuration/Accu-Chek-Combo-Pump-v2.md) (bazen "combov2" şeklinde anılır) eklendi. Eski sürücüye "Ruffy tabanlı sürücü" de denir. Bu dokümanın bazı bölümleri yalnızca eski sürücü için geçerlidir. Bunlara göre açıklama yapılacaktır.

## Sorunsuz kullanim nasıl sağlanır

* Her zaman **akıllı telefonunuzu yanınızda bulundurun**, geceleri yatağınızın yanında bırakın. Siz uyurken pompanız vücudunuzun arkasında veya altında durabileceğinden, daha yüksek bir konum (bir raf veya tahta üzerinde) en iyi sonucu verir.
* Always make sure that the pump battery is as full as possible. See the battery section for tipps regarding the battery.

* (Only applies to the old driver) It is best to **not touch the app ruffy** while the system is running. If the app is started again, the connection to the pump can break off. Once the pump is connected to ruffy, there is no need to re-connect. Even after a restart of the phone, the connection is automatically re-established. If possible, move the app to an unused screen or in a folder on your smartphone so you do not accidentally open it.

* Döngü sırasında yanlışlıkla uygulamayı açarsanız, akıllı telefonu hemen yeniden başlatmak en iyisidir. (Yalnızca eski sürücü için geçerlidir)
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Sadece rezervuar veya pilin değiştirilmesi gerektiğinde pompanın düğmelerini kullanmak gerekir. 

![Keylock](../images/combo/combo-tips-keylock.png)

## Pompaya erişilemiyor. Ne yapmalı?

### Pompaya ulaşılamıyor alarmını etkinleştirin

* In AAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes.
* Bu telefonunuz masanın üzerindeyken odadan çıkarken alarmı tetiklememek için size yeterli süreyi verir, ancak geçici bir bazal oran süresini aşan bir süre boyunca pompaya ulaşılamazsa sizi bilgilendirir.

### Pompanın erişilebilirliğini geri yükleyin

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AAPS. Çoğunlukla iletişim tekrar çalışır.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones.

### Sık sık yapılan iletişim hatalarının temel nedenleri ve sonuçları

* On phones with **low memory** (or **aggressive power-saving** settings), AAPS is often shut down. Ana ekrandaki Bolus ve Hesap Makinesi düğmelerinin, sistem başlatılmakta olduğu için AAPS'yi açarken gösterilmemesinden anlayabilirsiniz. Bu başlangıçta "pompa ulaşılamaz alarmlarını" tetikleyebilir. In the **Last Connection** field of the Combo tab, you can check when AAPS last communicated with the pump.

![Pump unreachable](../images/combo/combo-tips-pump-unreachable.png)

![No connection to pump (as shown in the old driver's tab)](../images/combo/combo-tips-no-connection-to-pump.png)

![No connection to pump (as shown in the new driver's tab)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Uygulama yeniden başlatıldığında bazal profil pompadan okunduğu için bu hata pompanın pilini daha hızlı tüketebilir.
* Ayrıca pompa üzerindeki bir düğmeye basılana kadar pompanın gelen tüm bağlantıları reddetmesine neden olan hataya neden olma olasılığını da artırır. 

## Geçici bazal oranın iptali başarısız

* Occasionally, AAPS can not automatically cancel a **TBR CANCELED** alert. Then you have to either press **UPDATE** in the AAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Pompa pili ile ilgili hususlar

### Pili değiştirme

* Bir **pil zayıf** alarmından sonra, akıllı telefon pompadan daha uzakta olsa bile akıllı telefonla güvenilir bir Bluetooth bağlantısı için yeterli gücün olduğundan emin olmak için pil mümkün olan en kısa sürede değiştirilmelidir.
* Bir **düşük pil** alarmından sonra bile pil önemli bir süre kullanılabilir. Ancak "düşük pil" alarmı verdikten sonra her zaman yanınızda yeni bir pil bulundurmanız önerilir.
* Pili değiştirmeden önce, ana ekrandaki **Döngü** sembolüne basın ve **Döngüyü 1 saat askıya al** öğesini seçin. 
* AndroidAPS'nin pompayla iletişimini bitirmesini ve pompadaki Bluetooth logosu kaybolmasını bekleyin.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Pompa üzerindeki tuş kilidini serbest bırakın, pompayı durdurma moduna getirin, muhtemelen iptal edilmiş bir geçici bazal oranı onaylayın ve pili hızlı bir şekilde değiştirin.
* Eski sürücüyü kullanırken, pompanın üzerindeki saat, pil değişiminden sonra sıfırlandıysa, pompadaki tarih ve saati, AAPS çalıştıran telefonunuzdaki tarih/saat ile aynı olacak şekilde ayarlayın. (Yeni sürücü, pompanın tarihini ve saatini otomatik olarak günceller.)
* Ardından ana ekranda **Askıya Alınan Döngü** simgesine basarken pompayı tekrar çalışma moduna getirin **Devam et** öğesini seçin.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Pil tipi ve kısa pil ömrünün nedenleri

* Yoğun Bluetooth iletişimi çok fazla enerji tükettiğinden, yalnızca Energizer Ultimate Lithium gibi **yüksek kaliteli piller** kullanın, "büyük" Accu-Chek hizmet paketinden "güçlü olanlar" veya şarj edilebilir pil için Eneloop pilleri kullanın. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 ila 7 hafta
* Hizmet paketinden **Power One Alkaline** (Varta): 2 ila 4 hafta
* **Eneloop şarj edilebilir** piller (BK-3MCCE): 1 ila 3 hafta

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* [ruffy Uygulamasının](https://github.com/MilosKozak/ruffy) Mart 2018'den sonraki sürümleri, pompa pil ömrünü önemli ölçüde iyileştirdi. (Yalnızca eski sürücü için geçerlidir) Kısa pil ömrüyle ilgili sorunlarınız varsa en yeni sürümde olduğunuzdan emin olun.
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
* Before eating, on the **Actions tab** in AAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. Süre, yayılmış bir bolus için seçmeniz gereken aralığa dayalı olmalıdır. Bu hedefinizi normalden daha düşük tutacak ve dolayısıyla iletilen insülin miktarını artıracaktır.
* Ardından öğünün tam karbonhidratını girmek için **HESAP MAKİNESİ**'ni kullanın, ancak bolus hesaplayıcı tarafından önerilen değerleri doğrudan uygulamayın. Çoklu dalga benzeri bir bolus verilecekse, insülin dozunu azaltın. Yemeğe bağlı olarak, algoritmanın artık kan şekerindeki artışı önlemek için ek SMB'ler veya daha yüksek geçici bazal oranlar sağlaması gerekiyor. Burada, bazal oranın (Max IE/h, Maximum bazal IOB) güvenlik sınırlaması ile çok dikkatli bir şekilde denenmeli ve gerekirse geçici olarak değiştirilmelidir.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Bolus iletiminde uyarılar

* If AAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. Aynı insülini arka arkaya iki kez gerçekten bolus yapmak istiyorsanız, iki dakika daha bekleyin ve ardından bolusu tekrar gönderin. İlk bolus kesintiye uğradıysa veya başka nedenlerle iletilmediyse, AAPS 2.0'dan itibaren bolusu hemen yeniden gönderebilirsiniz.
* Alarm, bir bolus doğrudan pompadan iletilse bile, aktif insülini (AİNS) doğru bir şekilde hesaplamak için yeni bir bolus göndermeden önce pompanın bolus geçmişini okuyan bir güvenlik mekanizmasıdır. Burada ayırt edilemeyen girişler engellenmelidir.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Bu mekanizma, hatanın ikinci bir nedeninden de sorumludur: Bolus hesaplayıcının kullanımı sırasında pompa aracılığıyla başka bir bolus verilirse ve bu nedenle bolus geçmişi değişmiş olur, bundan dolayıda bolus hesaplaması temelinden eksik olur ve bolus iptal edilir. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)