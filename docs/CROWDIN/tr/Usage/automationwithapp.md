# Üçüncü taraf Android Automate Uygulaması ile otomasyon

**Bu makale AndroidAPS sürüm 2.5'ten önce yazılmıştır. AndroidAPS sürüm 2.5 ile [AndroidAPS içinde bir otomasyon eklentisi](./Automation.rst) vardır. Bazıları için burası hala yararlı olabilir, ancak yalnızca ileri düzey kullanıcılar tarafından kullanılmalıdır.**

AndroidAPS hibrit bir kapalı döngü sistemi olduğundan, yine de bazı kullanıcı etkileşimi gereklidir (örneğin, döngüye yürüdüğünüzü, birazdan yemek yediğinizi, koltukta uzandığınızı söyleyin...). En son AndroidAPS işlevselliğini genişletmek için sık manuel kullanıcı girişleri, Otomatikleştirme veya IFTTT gibi harici araçlar aracılığıyla otomatikleştirilebilir.

## Android Otomatikleştirme Uygulaması

Ücretsiz Android™ uygulaması Automate, akıllı telefonunuzdaki çeşitli görevleri otomatikleştirmenize olanak sağlar. Akış şemaları ile otomasyonlarınızı oluşturun, cihazınızın Bluetooth, Wi-Fi, NFC gibi ayarları otomatik olarak değiştirmesini sağlayın veya bulunduğunuz yere, günün saatine veya diğer herhangi bir “olay tetikleyicisine” göre SMS, e-posta gönderme gibi işlemleri gerçekleştirin. Cihazınızdaki hemen hemen her şeyi otomatikleştirebilirsiniz, Tasker ve Locale için yapılmış eklentileri bile destekler.

Bu aracı kullanarak diyabetinizi çeşitli koşullara göre otomatik olarak tedavi etmek için iş akışlarını 'eğer bu (if this..) şeklinde kolayca oluşturabilirsiniz... ve bu... bunu değil... o zaman şunu yap... ve şu...'. Konfigüre edebileceğiniz binlerce olasılık vardır.

Şimdiye kadar **Nightscout Profili üzerinden döngü yapmak gerekliydi**, Automate, komutları HTTP isteği aracılığıyla doğrudan nightscout web sitenizde yürütür ve ardından onu AndroidAPS uygulamanızla eşitler.

**Çevrimdışı döngü (Automate ve AndroidAPS uygulaması arasında doğrudan iletişim) henüz desteklenmemektedir**, ancak teknolojik olarak mümkündür. Maybe there will be a solution in future. If you have figured out a way to do this, please add it to this documentation or contact a developer.

### Basic requirements

#### Automate App

Download Android Automate in Google Play Store or at <https://llamalab.com/automate/> and install it on your smartphone where AndroidAPS runs.

In Automate, tap on hamburger menu on the upper left of the screen > Settings > Check 'Run on system startup'. This will automatically run your workflows on system startup.

![Automate HTTP request](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'.

Be aware of the [security issues](../Installing-AndroidAPS/Nightscout#security-considerations) that might occure and be very careful if you are using an [Insight pump](../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps).

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Workflow examples

#### Example 1: If activity (e.g. walking or running) is detected, then set a high TT. And if activity ends, then wait 20 minutes and then cancel TT

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bicycle present, then Automate will set a user specified high temporary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Set high TT
2. = Go back to normal target 20 minutes after the end of activity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The high TT value (top and bottom should be the same value)
* duration: The duration of the high TT (after time it will fallback to regular profile target unless activity goes on). 
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 2: If xDrip+ alerts a BG high alarm, then set a low TT for ... dakika.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temporary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for firing the trigger. It should be unmistakable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

Threshold: BG value that should fire the high alert.

Default Snooze: Insert the duration you are planning to set for your low TT here, as the alert will come up again and maybe extend the duration of the low TT.

![xDrip+ alert settings](../images/automate-xdrip2.png)

##### Automate

Secondly, download the Automate script <https://llamalab.com/automate/community/flows/27809>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

'Bildirim yayınlandı mı?' tetikleyiciyi başlatmak için 'TITLE' öğesini, tetikleyiciyi tetiklemesi gereken xDrip+ uyarınızın adına ayarlamanız ve bu addan önce ve sonra bir * değişkeni eklemeniz gerekir.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Düşük GH değeri (üst ve alt aynı değer olmalıdır)
* süre: Düşük GH'in süresi (bir süre sonra normal profil hedefine geri döner). xDrip+ uyarısı 'Standart erteleme' ile aynı süreyi kullanmanız önerilir
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Örnek 3: Sizin tarafınızdan eklenecek!!!

Lütfen .flo dosyasını Automate topluluğuna yükleyerek ('Nightscout' anahtar kelimesi altında) başka iş akışları ekleyin ve bunu [AndroidAPSdocs deposunda Çekme İsteği](../make-a-PR.md) yaparak burada açıklayın.

## Eğer buysa, o zaman (IFTTT)

PR ile bir Howto eklemekten çekinmeyin...