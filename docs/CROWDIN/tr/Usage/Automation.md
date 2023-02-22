# Otomasyon

## Otomasyon Nedir?

Aynı sıklıktaki olaylar için her zaman aynı ayarları değiştirmeniz gerekebilir. Bundan kaçınmak için, olayı yeterince iyi tanımlayıp otomatikleştirmeyi deneyerek, sizin için otomatik olarak yapmasına izin verebilirsiniz.

Örneğin KŞ'niz çok düşük olduğunda, otomatik olarak yüksek bir geçici hedefe sahip olmaya karar verebilirsiniz. Veya fitness merkezinizdeyseniz, otomatik olarak geçici bir hedef alırsınız.

Otomasyonu kullanmadan önce, manuel [geçici hedeflerden ](./temptarget.html) veya profil değişimlerinden emin olmalısınız.

İlk basit kuralınızı oluşturmadan önce otomasyonun nasıl çalıştığını gerçekten anladığınızdan emin olun. **Eylem yerine AAPS'nin önce yalnızca bir bildirim görüntülemesine izin verin.** Otomasyonun doğru zamanda tetiklendiğinden emin olduğunuzda, bildirimi gerçek eylemle değiştirin.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Otomasyon koşulu + eylem
```

## Bu nasıl kullanılır

Bir otomasyon kurmak için ona bir başlık vermeniz, en az bir koşul ve bir eylem seçmeniz gerekir.

(Automation-important-note)=
### Önemli Not

**Döngüyü devre dışı bıraktığınızda otomasyon hala etkindir!**

Bu nedenle, gerekirse bu durumlarda otomasyon kurallarını devre dışı bıraktığınızdan emin olun. Bunu otomasyon kuralınızın adının solundaki kutunun işaretini kaldırarak yapabilirsiniz.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Otomasyon kuralını etkinleştirin ve devre dışı bırakın
```

### Otomasyon nerede bulunur

[Konfigürasyon ayarlarındaki ayarlarınıza](Config-Builder-tab-or-hamburger-menu) bağlı olarak [Otomasyonu](Config-Builder#automation) ya hamburger menüsünde veya sekme olarak bulacaksınız.

### Genel

Bazı sınırlar vardır:

- Glikoz değeri 72 ile 270 mg/dl arasında veya 4 ile 15 mmol/l arasında olmalıdır.
- Profil yüzdesi %70 ile %130 arasında olmalıdır.
- Yürütmeler (ve ilk yürütme) arasında 5dk. zaman sınırı vardır.

**Lütfen dikkatli olun:**

- **-2'den küçük şu anlama gelir: -3 ve altı (-4,-10, vb.)**
- **-2'den büyük şu anlama gelir: -1 ve üstü (-1, 0, +10, vb.)**

### Şart

Birkaç koşul arasından seçim yapabilirsiniz. Burada yalnızca birkaçından bahsedilmiştir, ancak çoğu kendi kendini açıklayıcı niteliktedir ve bu nedenle burada açıklanmamıştır:

- bağlantı koşulları: birkaç koşula sahip olabilirsiniz ve bunları aşağıdakilerle bağlayabilirsiniz

  - "Ve"
  - "Veya"
  - "Dışlamalı veya" (bu koşullardan yalnızca birinin geçerli olması durumunda, eylem(ler) in gerçekleşeceği anlamına gelir)

- Zaman ve yinelenen zaman

  - zaman = tek seferlik olay
  - yinelenen zaman = düzenli olarak gerçekleşen bir şey (yani haftada bir, her iş günü vb.)

- konum: konfiguration oluşturucuda (Otomasyon), kullanmak istediğiniz konum hizmetini seçebilirsiniz:

  - Pasif konum kullan: AAPS, yalnızca diğer uygulamalar talep ettiğinde konum alır
  - Ağ konumunu kullan: Wifi'nizin konumu
  - Use GPS location (Attention! Aşırı pil tüketimine neden olabilir!)

### Eylem

Bir veya daha fazla eylem seçebilirsiniz:

- geçici hedefi başlat

  - 72 mg/dl ile 270 mg/dl (4 mmol/l ve 15 mmol/l) arasında olmalıdır
  - yalnızca önceki geçici hedef yoksa çalışır

- geçici hedefi durdur

- bildirim

- profil yüzdesi

  - %70 ile %130 arasında olmalıdır
  - yalnızca önceki yüzde %100 olduğunda çalışır

Eyleminizi ekledikten sonra, varsayılan değerlere tıklayarak **varsayılan değerleri ihtiyacınız olanla **değiştirmeyi unutmayın.

```{image} ../images/Automation_Default_V2_5.png
:alt: Otomasyon varsayılanı ve ayarlanan değerler
```

(Automation-sort-automation-rules)=
### Otomasyon kurallarını sıralama

Otomasyon kurallarını sıralamak için ekranın sağ tarafındaki dört satırlı düğmeyi basılı tutun ve yukarı veya aşağı hareket ettirin.

```{image} ../images/Automation_Sort.png
:alt: Otomasyon kurallarını sıralama
```

### Otomasyon kurallarını silme

Bir otomasyon kuralını silmek için çöp kutusu simgesine tıklayın.

```{image} ../images/Automation_Delete.png
:alt: Otomasyon kuralını silme
```

(Automation-good-practice-caveats)=
## Alıştırma & uyarılar

- Otomasyonu kullanmaya başladığınızda veya yeni bir kural oluşturduğunuzda, önce kuralın iyi çalıştığından emin olana kadar sadece bir bildirim ekleyin.

- Kural sonuçlarını izleyin.

- Koşulları çok kolaylaştırmaya çalışmayın (yani: EĞER KŞ> 80 mg/dl VE KŞ< 180 mg/dl)

  **İşlem bir profil değiştirme ise iki kat önemlidir!**

- Profil değiştirme yerine Geçici Hedefleri kullanmayı deneyin. Geçici Hedefleri, [Otoduyarlılık](Open-APS-features-autosens) 0'a sıfırlamaz.

- Profil değiştirmeyi az miktarda ve tercihen son çare olarak yapıldığından emin olun.

  - Profil değiştirme, [Otoduyarlılığı](Open-APS-features-autosens) en az 6 saat süreyle işe yaramaz hale getirir.

- Profil değiştirme, profili temel profilinize geri döndürmez

  - Geri döndürmek için başka bir kural yapmalı veya manuel olarak ayarlamalısın!
  - Profil değiştirme sona ermezse veya temel profile dönüş olmazsa hipoglisemi riski artabilir.

## Örnekler

Bunlar sadece otomasyon örnekleridir, tavsiye değildir. Gerçekte ne yaptığınızın veya neden ihtiyaç duyduğunuzun farkında olmadan onları uygulamayın.

- Coğrafi konum, wifi, zaman vb. kullanarak günlük aktiviteleriniz (okul, spor salonu, hafta sonu, iş günü gibi) için profil değiştirme.
- Zamana, konuma, bluetooth cihazına bağlantıya dayalı etkinlikler için geçici hedef belirleme...
- Zamana, konuma göre yakında yemek yeme geçici hedeflerinin belirlenmesi...

### Düşük Glikoz Geçici Hedefi

```{image} ../images/Automation2.png
:alt: Otomasyon2
```

Bu, düşük glikoza sahipken otomatik olarak hipo geçici hedefi'ne geçmek isteyen biri tarafından yapılır.

### Öğle Yemeği Geçici Hedefi

```{image} ../images/Automation3.png
:alt: Otomasyon3
```

Bu örnek, hafta boyunca her gün aynı saatte işyerinde öğle yemeği yiyen biri tarafından yapılmıştır. Eğer kişi öğle yemeği vaktinde aynı lokasyonda belirli bir zaman aralığında kalıyorsa, otomasyon öğle yemeğini beklerken düşük geçici hedef (yakında yemek yeme) belirleyecektir. "Ve" bağlantısı nedeniyle, yalnızca seçilen zamanda ve seçilen yerdeyse gerçekleşir. Yani bu lokasyondan başka herhangi bir zamanda veya kişinin evde kaldığı bu saatte çalışmaz.

### Otomasyonun yanlış kullanımı

Otomasyonu yanlış kullanmadığınıza lütfen dikkat edin. Yanlış kullanım sağlığınızı tehlikeye atabilir. Yanlış kullanım örnekleri:

- Yalnızca yardım almak yerine algoritmayı geçersiz kılmaya çalışmak (yani bazal, IC vb. ayarlamak yerine profili değiştirmek)
- Yiyecekleri telafi etmek için profil ayarlama
- Süresiz profil ayarlama
- Tek yön kuralları oluşturma (örn. bir şey yapın ama başka bir kuralla geri almayın)
- Uzun süreli kurallar oluşturmak

## Alternatifler

İleri düzey kullanıcılar için, IFTTT veya Automate adlı üçüncü taraf Android uygulamasını kullanarak görevleri otomatikleştirmenin başka olanakları da vardır. Bazı örnekleri [burada](./automationwithapp.html) bulabilirsiniz.
