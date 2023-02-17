# Nightscout

(Nightscout-security-considerations)=

## Güvenlik Hususları

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Nightscout ayarları

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### AndroidAPS ayarları

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* AAPS ana ekranınızın sağ üst köşesindeki 3 noktalı menüye dokunun.
* "Tercihler"i seçin.
* Aşağı kaydırın ve "NSClient"e dokunun.
* Senkronizasyon sekmesinde "Verileri NS'a yükleyin"i etkinleştirin.

![Nightscout upload only](../images/NSsafety.png)

### Diğer güvenlik ayarları

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Manuel Nightscout kurulumu

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* https://herokuapp.com/ adresine gidin

* Uygulama Hizmeti adınızı tıklayın.

* Uygulama ayarları (azure) veya Ayarlar > "Yapılandırma Değişkenlerini Göster'i (heroku) tıklayın.

* Değişkenleri aşağıdaki gibi ekleyin veya düzenleyin:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * [Pompayı izlemek](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) için çeşitli alarmlar ayarlanabilir, özellikle pil yüzdesi önerilir: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Panelin üst kısmındaki "Kaydet"i tıklayın.

## Yarı otomatik Nightscout kurulumu

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Benefits**

* Nightscout'u birkaç tıklama ile yükleyebilir ve doğrudan kullanabilirsiniz. 
* Martin yönetimi otomatikleştirmeye çalışırken manuel işler azalır.
* Tüm ayarlar, kullanıcı dostu bir web arayüzü üzerinden yapılabilir. 
* Hizmet, otoduyarlılık kullanılarak otomatik bir bazal hız denetimi içerir. 
* Sunucular Almanya ve Finlandiya'da bulunmaktadır.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.