# Temel kullanım için Accu-Chek Combo İpuçları

## Sorunsuz kullanim nasıl sağlanır

* Her zaman **akıllı telefonunuzu yanınızda bulundurun**, geceleri yatağınızın yanında bırakın. Siz uyurken pompanız vücudunuzun arkasında veya altında durabileceğinden, daha yüksek bir konum (bir raf veya tahta üzerinde) en iyi sonucu verir.
* Her zaman pompa pilinin mümkün olduğunca dolu olduğundan emin olun. Pille ilgili ipuçları için pil bölümüne bakın.
* Sistem çalışırken **ruffy uygulamayasına dokunmamak** en iyisidir. Uygulama yeniden başlatılırsa pompa bağlantısı kesilebilir. Pompa ruffy'ye bağlandıktan sonra tekrar bağlanmaya gerek yoktur. Telefon yeniden başlatıldıktan sonra bile bağlantı otomatik olarak yeniden kurulur. Mümkünse, yanlışlıkla açmamak için uygulamayı kullanılmayan bir ekrana veya akıllı telefonunuzdaki bir klasöre taşıyın.
* Döngü sırasında yanlışlıkla uygulamayı açarsanız, akıllı telefonu hemen yeniden başlatmak en iyisidir.
* Mümkün olduğunda, pompayı yalnızca AndroidAPS uygulaması aracılığıyla çalıştırın. Bunu kolaylaştırmak için pompa üzerindeki tuş kilidini **POMPA AYARLARI / TUŞ KİLİDİ / AÇIK** altında etkinleştirin. Sadece rezervuar veya pilin değiştirilmesi gerektiğinde pompanın düğmelerini kullanmak gerekir. ![Tuş kilidi](../images/combo/combo-tips-keylock.png)

## Pompaya erişilemiyor. Ne yapmalı?

### Pompaya ulaşılamıyor alarmını etkinleştirin

* AndroidAPS'de, **Ayarlar / Yerel Alarmlar**'a gidin ve **pompaya ulaşılamadığında alarmı** etkinleştirin ve **pompaya erişilemiyor sınırı [Min]**'i **31** dakika olarak ayarlayın. 
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

### Restore reachability of the pump

* When AndroidAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, press **UPDATE** on the **Combo Tab** in AndroidAPS. Mostly then the communication works again.
* If that does not help, reboot your smartphone. After the restart, AndroidAPS and ruffy will be reactivated and a new connection will be established with the pump.
* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones. 

### Root causes and consequences of frequent communication errors

* On phones with **low memory** (or **aggressive power-saving** settings), AndroidAPS is often shut down. You can tell by the fact that the Bolus and Calculator buttons on the Home screen are not shown when opening AAPS because the system is initializing. This can trigger "pump unreachable alarms" at startup. In the **Last Connection** field of the Combo tab, you can check when AndroidAPS last communicated with the pump. 

![Pompa ulaşılamıyor](../images/combo/combo-tips-pump-unreachable.png) ![No connection to pump](../images/combo/combo-tips-no-connection-to-pump.png)

* This error can drain the pump's battery faster because the basal profile is read from the pump when the app is restarted.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed. 

## Cancellation of temporary basal rate fails

* Occasionally, AndroidAPS can not automatically cancel a **TBR CANCELED** alert. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Pump battery considerations

### Changing the battery

* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* If the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

### Battery type and causes of short battery life

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the servcie pack: 2 to 4 weeks
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Daylight saving time changes

* Şu anda birleşik sürücü, pompanın zamanının otomatik olarak ayarlanmasını desteklememektedir.
* Gün ışığından yararlanma saati değişikliği gecesinde, akıllı telefonun saati güncellenir, ancak pompanın saati değişmez. Bu sistemler arasında saat 3'te farklılık gösterdiği için bir alarma yol açar.
* Geceleri uyandırılmak istemiyorsanız, akşam saat geçişinden önce **cep telefonunda otomatik yaz saati geçişini devre dışı bırakın** ve ertesi sabah saatleri manuel olarak ayarlayın. Yaz saati değişiklikleriyle başa çıkmanın iyi bir yolu, bulunduğunuz boylamda bulunan ancak ekvatora daha yakın olan ve genellikle yaz saatinin gözlemlenmediği farklı bir saat dilimine geçmektir. Örnek: Yaz Saatinde Orta Avrupa (CEST/GMT+2) için, kış saatine geçmeden önceki gece telefonunuzda Zimbabve saat dilimine geçebilir ve ardından ertesi sabah aynı anda pompanızın saatini değiştirirken Orta Avrupa Saati CET/GMT+1'e geri dönebilirsiniz. Diğer taraftan, CET/GMT+1 Kış Saatinde Nijerya saat dilimine geçin ve yaz saatine geçişin ertesi sabahı Orta Avrupa Yaz Saati'ne (CEST/GMT+2) geri dönün ve buna göre pompa saatini değiştirin. Uygun bir ülke bulmak için https://www.timeanddate.com/time/map/ adresine bakın.

## Yayma bolus, çok dalgalı bolus

OpenAPS algoritması paralel yayma bolusu veya çok dalgalı bolusu desteklemez. Ancak aşağıdaki alternatiflerle benzer bir tedavi sağlanabilir:

* Karbonhidrat girerken veya tam öğünün karbonhidratlarını ve karbonhidratların kanınıza glikoz olarak gelmesini beklediğiniz süreyi girerek Hesap Makinesini kullanırken **y-Karb** kullanın. Sistem daha sonra, tüm süre boyunca eşit olarak dağıtılan küçük karbonhidratları hesaplayacak ve bu da, algoritmanın eşdeğer insülin dozunu sağlamasına ve aynı zamanda kan şekeri seviyesinin genel yükselişini/düşüşünü sürekli olarak kontrol etmesine neden olacaktır. Çok dalgalı bir bolus yaklaşımı için, daha küçük bir acil bolusu y-karbonhidratlarla da birleştirebilirsiniz. 
* Yemekten önce, AndroidAPS'deki **Eylemler sekmesinde**, birkaç saat boyunca hedef glikoz 80 ile geçici bir **Yakında Yemek** hedefi olarak ayarlayın. Süre, yayılmış bir bolus için seçmeniz gereken aralığa dayalı olmalıdır. Bu hedefinizi normalden daha düşük tutacak ve dolayısıyla iletilen insülin miktarını artıracaktır.
* Ardından öğünün tam karbonhidratını girmek için **HESAP MAKİNESİ**'ni kullanın, ancak bolus hesaplayıcı tarafından önerilen değerleri doğrudan uygulamayın. Çoklu dalga benzeri bir bolus verilecekse, insülin dozunu azaltın. Yemeğe bağlı olarak, algoritmanın artık kan şekerindeki artışı önlemek için ek SMB'ler veya daha yüksek geçici bazal oranlar sağlaması gerekiyor. Burada, bazal oranın (Max IE/h, Maximum bazal IOB) güvenlik sınırlaması ile çok dikkatli bir şekilde denenmeli ve gerekirse geçici olarak değiştirilmelidir.

* Yayma veya çok dalgalı bolusu doğrudan pompa üzerinde kullanmak isterseniz, AndroidAPS, fazla insülin dozunun hesaplanmamasını sağlamak için sonraki altı saat boyunca kapalı döngüyü devre dışı bırakarak sizi cezalandıracaktır.

![Çoklu Dalga bolus'tan sonra döngü devre dışı bırakıldı](../images/combo/combo-tips-multiwave-bolus.png)

## Bolus iletiminde uyarılar

* AndroidAPS, aynı bolusun aynı dakikada başarıyla iletildiğini algılarsa, aynı sayıda insülin ünitesiyle bolus iletimi engellenir. Aynı insülini arka arkaya iki kez gerçekten bolus yapmak istiyorsanız, iki dakika daha bekleyin ve ardından bolusu tekrar gönderin. İlk bolus kesintiye uğradıysa veya başka nedenlerle iletilmediyse, AAPS 2.0'dan itibaren bolusu hemen yeniden gönderebilirsiniz.
* Alarm, bir bolus doğrudan pompadan iletilse bile, aktif insülini (IOB) doğru bir şekilde hesaplamak için yeni bir bolus göndermeden önce pompanın bolus geçmişini okuyan bir güvenlik mekanizmasıdır. Burada ayırt edilemeyen girişler engellenmelidir.

![Çift bolus](../images/combo/combo-tips-doppelbolus.png)

* Bu mekanizma, hatanın ikinci bir nedeninden de sorumludur: Bolus hesaplayıcının kullanımı sırasında pompa aracılığıyla başka bir bolus verilirse ve bu nedenle bolus geçmişi değişmiş olur, bundan dolayıda bolus hesaplaması temelinden eksik olur ve bolus iptal edilir. 

![Bolusu iptal Et](../images/combo/combo-tips-history-changed.png)