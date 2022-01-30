# Nightscout

## Güvenlik Hususları

Nightscout raporlamanın yanı sıra AAPS'i kontrol etmek için de kullanılabilir. Yani Geçici hedefler belirleyebilir veya gelecekteki karbonhidratları ekleyebilirsiniz. Bu bilgiler AAPS tarafından alınacak ve buna göre hareket edecektir. Bu nedenle Nightscout web sitenizi güvence altına almalısınız.

### Nightscout ayarları

[kimlik doğrulama rollerini](https://nightscout.github.io/nightscout/security) kullanarak Nightscout sitenize genel erişimi engelleyebilirsiniz.

### AndroidAPS ayarları

AAPS ayarlarında yalnızca NS yükleme (senkronizasyon yok) işlevi vardır. Bunu yaparak AAPS, Nightscout'ta yapılan geçici hedefler veya gelecekteki karbonhidratlar gibi değişiklikleri almaz. [NS profili](../Configuration/Config-Builder#ns-profile) kullanıyorsanız, "yalnızca yükle" ayarına rağmen profiller AAPS ve Nightscout arasında senkronize edilecektir.

* AAPS ana ekranınızın sağ üst köşesindeki 3 noktalı menüye dokunun.
* "Tercihler"i seçin.
* Aşağı kaydırın ve "NSClient"e dokunun.
* Senkronizasyon sekmesinde "Verileri NS'a yükleyin"i etkinleştirin.

![Nightscout upload only](../images/NSsafety.png)

### Diğer güvenlik ayarları

[Önce güvenlik](../Getting-Started/Safety-first.rst) bölümünde açıklandığı gibi telefonunuzu güncel tutun.

## Manuel Nightscout kurulumu

Zaten bir Nightscout siteniz olduğu varsayılır, kurulumla ilgili tüm talimatlar için [Nightscout](http://nightscout.github.io/nightscout/new_user/) sayfasını ziyaret edebilirsiniz. Aşağıdaki talimatlar, Nightscout sitenize eklemeniz gereken ayarlardır. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Go to https://herokuapp.com/

* Click your App Service name.

* Click Application settings (azure) or Settings > "Reveal Config Variables (heroku)

* Add or edit the variables as follows:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Click "Save" at the top of the panel.

## Semi-automated Nightscout setup

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Benefits**

* You can install Nightscout with a few clicks and use it directly. 
* Reduction of manual work as Martin tries to automate the administration.
* All settings can be made via a user-friendly web interface. 
* The service includes an automated basal rate check using Autotune. 
* The servers are located in Germany and Finland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.