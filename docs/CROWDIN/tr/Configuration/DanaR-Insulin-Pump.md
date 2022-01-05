# DanaR Pompa

*Bu talimatlar bir DanaR'ınız varsa uygulamak ve pompanızı yapılandırmak içindir. Bunun yerine ilk 2017'de piyasaya sürülen DanaRS'ınız varsa [DanaRS İnsülin Pompası](./DanaRS-Insulin-Pump)'nı ziyaret edin.*

* Pompada Ana Menü > Ayarlar > Kullanıcı Seçeneği'ne gidin
* "8'i açın. Yayma Bolus"

![DanaR pompa](../images/danar1.png)

* Ana Menü > Ayarlar > Keşif'e gidin
* Telefon ayarlarında Bluetooth'a gidin, yakındaki cihazları tarayın, DanaR serinumaranızı seçin ve şifrenizi girin (Eşleştirme şifresi 0000'dır). Taramada DanaR görünmüyorsa telefonu yeniden başlatın ve DanaR pilini çıkarın, değiştirin ve bu iki adımı yeniden deneyin.

* In AndroidAPS go to Config Builder and select the type of DanaR you have (DanaR, DanaR Korean, DanaRv2)

* Select Menu by tapping the 3 dots in the top right. Select Preferences.
* Select DanaR Bluetooth device, and click your DanaR serial number.
* Select Pump password, and input your password. (Default password is 1234)
* If you want AndroidAPS to allow basal rate above 200%, enable Use extended boluses for >200%. Note this means you cannot loop with high TBRs whilst using extended boluses for food.
* In Preferences under DanaR pump settings you can change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).
* Set basal step on pump to 0.01 U/h
* Set bolus step on pump to 0.1 U/h
* Enable extended boluses on pump

## Dana R pompasıyla farklı zaman diliminde seyahat

Saat dilimleri arasında seyahat hakkında bilgi için [Pompayla seyahat ederken saat dilimleri](../Usage/Timezone-traveling#danarv2-danars) bölümüne bakın.