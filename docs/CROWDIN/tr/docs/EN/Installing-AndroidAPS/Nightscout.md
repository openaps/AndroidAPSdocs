# Nightscout

(Nightscout-security-considerations)=

## Güvenlik Hususları

Nightscout raporlamanın yanı sıra AAPS'i kontrol etmek için de kullanılabilir. Yani Geçici hedefler belirleyebilir veya gelecekteki karbonhidratları ekleyebilirsiniz. Bu bilgiler AAPS tarafından alınacak ve buna göre hareket edecektir. Bu nedenle Nightscout web sitenizi güvence altına almalısınız.

Exercise maximum caution if using Nightscout as your AAPS data source.

### Nightscout ayarları

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security): make sure you only share your URL with a `readable` token, never with an `admin` token.

Nightscout `API_SECRET` is your site main password: don't share it publicly.

### AAPS Ayarları

You can setup AAPS to accept Nightscout commands (profile changes, treatments, ...), or fully disable it.

* Access the NSClient or NSClientV3 plugin settings with either 1) Main view -> Config Builder -> Synchronization -> NSClient Cog icon 2) NSCLIENT tab -> Three dots menu -> Plugin preferences
* Enable all data upload to Nightscout (3) as this is now the standard method unless your BG data source is Nightscout.  
  If your AAPS BG data source is Nightscout **do not** enable Upload BG data to NS (3).
* Do not enable Receive/backfill data (4) unless Nightscout is your BG data source.

![Nightscout upload only](../images/NSsafety.png)

#### Do not sync from Nightscout

Disabling these options makes sure no Nightscout change will be used by AAPS.

![Nightscout upload only](../images/NSsafety2.png)

#### Accept changes from Nightscout

Enabling these options allow you to remotely change AAPS settings through Nightscout, like profiles modifications and switch, temporary targets and adding carbs that will be taken into account by AAPS.  
Note that insulin treatments will only be used for calculations like "Do not bolus, record only".

![Nightscout upload only](../images/NSsafety3.png)

### Diğer güvenlik ayarları

[Önce güvenlik](../Getting-Started/Safety-first.md) bölümünde açıklandığı gibi telefonunuzu güncel tutun.

(Nightscout-manual-nightscout-setup)=

## Manuel Nightscout kurulumu

Zaten bir Nightscout siteniz olduğu varsayılır, kurulumla ilgili tüm talimatlar için [Nightscout](http://nightscout.github.io/nightscout/new_user/) sayfasını ziyaret edebilirsiniz. Aşağıdaki talimatlar, Nightscout sitenize eklemeniz gereken ayarlardır. Your Nightscout site needs to be at least version 15 for AAPS 3.2, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

* [Edit your variables](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Değişkenleri aşağıdaki gibi ekleyin veya düzenleyin:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * [Pompayı izlemek](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) için çeşitli alarmlar ayarlanabilir, özellikle pil yüzdesi önerilir: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Save the modifications. Your Nightscout site should now allow you to display the pills. You can force default display adding them in `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout Pills](../images/nightscout1.png)

## Nightscout as a paid SaaS (Software as a Service)

Use the vendor web interface to set the variables. Contact the vendor support service if necessary.