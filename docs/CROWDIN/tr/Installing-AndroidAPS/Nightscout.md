# Nightscout

(Nightscout-security-considerations)=

## Güvenlik Hususları

Nightscout raporlamanın yanı sıra AAPS'i kontrol etmek için de kullanılabilir. Yani Geçici hedefler belirleyebilir veya gelecekteki karbonhidratları ekleyebilirsiniz. Bu bilgiler AAPS tarafından alınacak ve buna göre hareket edecektir. Bu nedenle Nightscout web sitenizi güvence altına almalısınız.

### Nightscout ayarları

[kimlik doğrulama rollerini](https://nightscout.github.io/nightscout/security) kullanarak Nightscout sitenize genel erişimi engelleyebilirsiniz.

### AndroidAPS ayarları

AAPS ayarlarında yalnızca NS yükleme (senkronizasyon yok) işlevi vardır. Bunu yaparak AAPS, Nightscout'ta yapılan geçici hedefler veya gelecekteki karbonhidratlar gibi değişiklikleri almaz.

* AAPS ana ekranınızın sağ üst köşesindeki 3 noktalı menüye dokunun.
* "Tercihler"i seçin.
* Aşağı kaydırın ve "NSClient"e dokunun.
* Senkronizasyon sekmesinde "Verileri NS'a yükleyin"i etkinleştirin.

![Yalnızca Nightscout yüklemesi](../images/NSsafety.png)

### Diğer güvenlik ayarları

[Önce güvenlik](../Getting-Started/Safety-first.md) bölümünde açıklandığı gibi telefonunuzu güncel tutun.

(Nightscout-manual-nightscout-setup)=

## Manuel Nightscout kurulumu

Zaten bir Nightscout siteniz olduğu varsayılır, kurulumla ilgili tüm talimatlar için [Nightscout](http://nightscout.github.io/nightscout/new_user/) sayfasını ziyaret edebilirsiniz. Aşağıdaki talimatlar, Nightscout sitenize eklemeniz gereken ayarlardır. Nightscout sitenizin en az sürüm 10 (0.10... olarak görüntüleniyor) olması gerekir, bu nedenle lütfen [en son sürüm](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version)ü çalıştırdığınızı kontrol edin. Aksi takdirde AAPS uygulamanızda bir hata mesajı alırsınız. Bazı insanlar döngü kullanımları için izin verilen azure ücretsiz kotasından daha fazlasını ararlar, bu nedenle heroku tercih edilen seçimdir.

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

Martin Schiftan, yarı otomatik Nightscout kurulumunu uzun yıllar boyunca ücretsiz olarak sundu. Kullanıcı sayısı arttıkça maliyet de arttı ve bu nedenle Ekim 2021'den itibaren aylık 4,17 €'dan başlayan küçük bir ücret talep etmeye başladı.

**Faydaları**

* Nightscout'u birkaç tıklama ile yükleyebilir ve doğrudan kullanabilirsiniz. 
* Martin yönetimi otomatikleştirmeye çalışırken manuel işler azalır.
* Tüm ayarlar, kullanıcı dostu bir web arayüzü üzerinden yapılabilir. 
* Hizmet, otoduyarlılık kullanılarak otomatik bir bazal hız denetimi içerir. 
* Sunucular Almanya ve Finlandiya'da bulunmaktadır.

<https://ns.10be.de/en/index.html>

Bir alternatif te <https://t1pal.com/> olabilir - aylık 11,99 ABD dolarından başlayan fiyatlarla.