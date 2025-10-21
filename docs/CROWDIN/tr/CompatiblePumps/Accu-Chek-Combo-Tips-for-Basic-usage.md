# Temel kullanım için Accu-Chek Combo İpuçları

## Sorunsuz kullanim nasıl sağlanır

* Her zaman **akıllı telefonunuzu yanınızda bulundurun**, geceleri yatağınızın yanında bırakın. Siz uyurken pompanız vücudunuzun arkasında veya altında durabileceğinden, daha yüksek bir konum (bir raf veya tahta üzerinde) en iyi sonucu verir.
* Always make sure that the pump battery is as full as possible. See the battery section for tipps regarding the battery.
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Sadece rezervuar veya pilin değiştirilmesi gerektiğinde pompanın düğmelerini kullanmak gerekir. 

![Keylock](../images/combo/combo-tips-keylock.png)

## Pompaya erişilemiyor. Ne yapmalı?

### Pompaya ulaşılamıyor alarmını etkinleştirin

* In AAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes.
* Bu telefonunuz masanın üzerindeyken odadan çıkarken alarmı tetiklememek için size yeterli süreyi verir, ancak geçici bir bazal oran süresini aşan bir süre boyunca pompaya ulaşılamazsa sizi bilgilendirir.

### Pompanın erişilebilirliğini geri yükleyin

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AAPS. Çoğunlukla iletişim tekrar çalışır.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. See [AAPS Phones](#Phones-list-of-tested-phones) for successfully tested smartphones.

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
* When using the old driver, if the clock on the pump did not survive the battery change, re-set the date and time on the pump to exactly the date/time on your phone running AAPS. (Yeni sürücü, pompanın tarihini ve saatini otomatik olarak günceller.)
* Ardından ana ekranda **Askıya Alınan Döngü** simgesine basarken pompayı tekrar çalışma moduna getirin **Devam et** öğesini seçin.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Pil tipi ve kısa pil ömrünün nedenleri

* Yoğun Bluetooth iletişimi çok fazla enerji tükettiğinden, yalnızca Energizer Ultimate Lithium gibi **yüksek kaliteli piller** kullanın, "büyük" Accu-Chek hizmet paketinden "güçlü olanlar" veya şarj edilebilir pil için Eneloop pilleri kullanın. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 ila 7 hafta
* **Power One Alkaline** (Varta) from the service pack: 2 to 4 weeks
* **Eneloop şarj edilebilir** piller (BK-3MCCE): 1 ila 3 hafta

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* Pilleri kısmen kısa devre yapan ve hızlı bir şekilde boşaltan Combo pompanın vidalı pil kapağının bazı çeşitleri vardır. Bu sorunu olmayan kapaklar, altın metal kontaklardan tanınabilir.
* Pompa saati kısa bir pil değişiminde "hayatta kalmazsa", kısa bir elektrik kesintisi sırasında saati çalıştıran kapasitör arızalı olabilir. Bu durumda, pompanın Roche tarafından değiştirilmesi yardımcı olabilir, bu garanti süresi boyunca bir sorun teşkil etmez. 
* Akıllı telefon donanımı ve yazılımı (Android işletim sistemi ve bluetooth stack), tam faktörler henüz tam olarak bilinmese de, pompanın pil ömrünü de etkiler. İmkanınız varsa, başka bir akıllı telefon deneyin ve pil ömürlerini karşılaştırın.

## Yayma bolus, çok dalgalı bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Karbonhidrat girerken veya tam öğünün karbonhidratlarını ve karbonhidratların kanınıza glikoz olarak gelmesini beklediğiniz süreyi girerek Hesap Makinesini kullanırken **y-Karb** kullanın. Sistem daha sonra, tüm süre boyunca eşit olarak dağıtılan küçük karbonhidratları hesaplayacak ve bu da, algoritmanın eşdeğer insülin dozunu sağlamasına ve aynı zamanda kan şekeri seviyesinin genel yükselişini/düşüşünü sürekli olarak kontrol etmesine neden olacaktır. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would choose for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Ardından öğünün tam karbonhidratını girmek için **HESAP MAKİNESİ**'ni kullanın, ancak bolus hesaplayıcı tarafından önerilen değerleri doğrudan uygulamayın. Çoklu dalga benzeri bir bolus verilecekse, insülin dozunu azaltın. Yemeğe bağlı olarak, algoritmanın artık kan şekerindeki artışı önlemek için ek SMB'ler veya daha yüksek geçici bazal oranlar sağlaması gerekiyor. Burada, bazal oranın (Max IE/h, Maximum bazal IOB) güvenlik sınırlaması ile çok dikkatli bir şekilde denenmeli ve gerekirse geçici olarak değiştirilmelidir.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Bolus iletiminde uyarılar

* If AAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical number of insulin units. If your really want to bolus the same insulin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interrupted or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Alarm, bir bolus doğrudan pompadan iletilse bile, aktif insülini (AİNS) doğru bir şekilde hesaplamak için yeni bir bolus göndermeden önce pompanın bolus geçmişini okuyan bir güvenlik mekanizmasıdır. Burada ayırt edilemeyen girişler engellenmelidir.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Bu mekanizma, hatanın ikinci bir nedeninden de sorumludur: Bolus hesaplayıcının kullanımı sırasında pompa aracılığıyla başka bir bolus verilirse ve bu nedenle bolus geçmişi değişmiş olur, bundan dolayıda bolus hesaplaması temelinden eksik olur ve bolus iptal edilir. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)