# Freestyle Libre 3

Freestyle Libre 3 sistemi, tehlikeli kan şekeri düzeylerini otomatik olarak bildirebilir. Libre3 Sensörü, mevcut kan şekeri seviyesini her dakika bir alıcıya (okuyucu veya akıllı telefon) gönderir. Alıcı, gerekirse bir alarmı tetikler. [Juggluco uygulamasının](https://www.juggluco.nl/Juggluco/mgdL/index.html) yardımıyla sensörü doğrudan başlatabilir ve Xdrip+'a, AAPS veya Libreview'e bağlayabilirsiniz. Bu sayede kan şekeri değerleri direkt olarak iletilebilir. Juggluco'ya gönderilmek üzere sensörün belleğinden geçmiş verileri (iki saatlik anlık glikoz ve iki haftalık 5 dakikada bir geçmiş verileri) almak bile mümkündür.

Artık Libre3 uygulamasına ihtiyacınız yok. Juggluco ile kullanabilirsiniz, Juggluco'yu kullanmadan önce Libre 3 uygulamasını kapattığınızdan emin olun.

Xdrip+ kullanıyorsanız, sensör, glikometre ölçümleri ve sensör okumaları arasındaki farkları ayarlamak için -40 mg/dl ila +20 mg/dl (-2.2 mmol/l ila +1.1 mmol/l) aralığında kalibre edilebilir.


### 1. Adım: Juggluco'yu kurun & ayarlayın

Şimdi ([bu bağlantıdan](https://www.juggluco.nl/Juggluco/download.html)) Juggluco Uygulamasını indirip & yükleyin. Bu uygulamanın yardımıyla, kan şekeri okumaları doğrudan Xdrip ve AAPS'e gönderilebilir. Bu amaçla Juggluco, içinde aktif sensör (Libreview'de kayıtlı) kullanılır. Bu aynı zamanda bir Libreview hesabının neden zorunlu olduğunu da açıklar.

Juggluco'yu kurduktan sonra birkaç mesaj görünebilir. Juggluco'nun yakındaki cihazları bulmasına, aramasına ve bağlanmasına izin verin.

```{image} ../images/libre3/17.jpg
:alt: Juggluco bağlantılarına izin ver
```

Pil optimizasyonunu devre dışı bırakma isteği de görünebilir. "İzin Ver"e dokunun. Bu, uygulamanın arka planda çalışmasını sağlamak için önemlidir.

```{image} ../images/libre3/18.jpg
:alt: Juggluco pil optimizasyonunu devre dışı bırakın
```

Juggluco tanıtıldığında Tamam'a dokunun.

```{image} ../images/libre3/19.jpg
:alt: Juggluco pil optimizasyonunu devre dışı bırakın
```

Şimdi Juggluco ana ekranını göreceksiniz. Sol üst yarıdaki boş alana tıklayın. Burada yaklaşık konumu görebilirsiniz.

```{image} ../images/libre3/20.jpg
:alt: Juggluco Menüsünü Aç
```

Bu menü açılacaktır. Burada "Ayarlar"ı seçebilirsiniz.

```{image} ../images/libre3/21.jpg
:alt: Juggluco Menüsü
```

Bu sayfa daha sonra görünecektir. "1." seçimde iki seçeneğiniz var:

1. "xDrip'e gönder" -> Bu ayarla, kan şekeri okumaları xDrip'e gönderilir. xDrip içinde alıcı olarak "yamalı Libre2" veya "Libre 2 (yamalı uygulama)" seçeneğini seçin.
2. "xDrip yayını" -> Bu ayarla, anlık kan şekeri okuması doğrudan AAPS'e gönderilir. AAPS içinde Kan Şekeri kaynağı, "xDrip+" olarak ayarlanmalıdır.

Sensörü başlatmak için "2."yi seçin "Libreview" onay kutusu.

```{image} ../images/libre3/22.jpg
:alt: Juggluco ayarları
```

Bir sonraki ekranda Libreview için oturum açma verilerinizi girmelisiniz. Bu, sensörün etkinleştirildiği hesap olmalıdır. Ardından "Hesap Kimliği Al" seçeneğine tıklayın.

```{image} ../images/libre3/23.jpg
:alt: Libreview'i Bağlayın
```

Her şey yolunda giderse, artık "Verileri yeniden gönder" butonunun altında çok basamaklı bir sayı görünmelidir. Bu işlem biraz zaman alabilir - numara hala görünmüyorsa internet bağlantınızı kontrol edin ve önceki adımları tekrar deneyin.

**Not:** Kan şekeri okumalarını Libreview'e yüklemek istiyorsanız, "Libreview'e Gönder" onay kutusunu işaretleyebilirsiniz.

```{image} ../images/libre3/24.jpg
:alt: Libreview'i kontrol edin
```

Şimdi sensörü yeniden başlatma zamanı! Juggluco ana ekranına geri dönün ve önceden etkinleştirilen sensörünüzü tarayın. Sensör başlar ve tekrar 60 dakikalık bir ısınma süresine girebilir. 60 dakikadan sonra, okumalar Juggluco ana ekranında görünüyor olmalıdır.

```{image} ../images/libre3/25.jpg
:alt: Libreview'i kontrol edin
```

Bitti, işte bu kadar! Değerler görünmüyorsa "Deneyimler ve sorun giderme" bölümünde daha fazla bilgi bulabilirsiniz.

### 2. Adım: xDrip'i ayarlayın

Kan şekeri değerleri akıllı telefonda xDrip+ uygulaması tarafından alınır.

- Henüz kurmadıysanız, xDrip+ uygulamasını indirin ve [buradan](https://github.com/NightscoutFoundation/xDrip/releases) en son derlemelerden birini yükleyin.
- xDrip+'da veri kaynağı olarak "Libre2 yamalı" ya da "Libre 2 (yamalı Uygulama)"yı seçin
- pil optimizasyonunu devre dışı bırakın ve xDrip+ uygulaması için arka plan etkinliğine izin verin
- Gerekirse, Gelişmiş Ayarlar-> Ekstra Günlük Ayarları-> Günlük için ekstra etiketler altında "BgReading:d,xdrip libre_receiver:v" girin. Bu, sorun giderme için ek hata mesajlarını günlüğe kaydeder.
- xdrip'te Ayarlar -> Yerel-Uygulama ayarlarına gidin ve -> Verileri Yerel Olarak Yayınlayını AÇIK seçin.
- xDrip+'da Ayarlar -> Uyg.lar-arası ayarlar -> Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
- AAPS'nin xDrip+'tan kan şekeri düzeylerini (sürüm 2.5.x ve üstü) almasını sağlamak için lütfen xdrip+'ta şu ayarı yapın: Ayarlar -> Uyg.lar-arası ayarlar -> Alıcıyı Tanımla "info.nightscout.androidaps".
- Kalibre etmek için AAPS'i kullanabilmek istiyorsanız, xdrip'te Ayarlar -> Uygulamalar Arası Uyumluluğu -> Kalibrasyonları Kabul Et'e gidin ve AÇIK'ı seçin. Ayarlar -> Daha Az Ortak Ayarlar -> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.

```{image} ../images/Libre2_Tags.png
:alt: xDrip LibreLink oturum açma
```

### Adım 3: Sensörü xDrip içinde başlatın

xDrip'te sensörü "Sensörü başlat" ve "bugün değil" ile başlatın. Cep telefonunu sensör üzerinde tutmak gerekli değildir. Aslında "Sensörü Başlat" herhangi bir Libre 3 sensörünü fiziksel olarak başlatmayacak veya hiçbir durumda onlarla etkileşime girmeyecektir. Bu sadece xDrip+'ın yeni bir sensörün kan şekeri seviyelerini ilettiğini anlamak içindir. Varsa, ilk kalibrasyon için iki ölçümlü glikometre değeri girin. Şimdi kan şekeri değerleri her 5 dakikada bir xDrip+'da görüntülenmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz zamanlar için, doldurulmayabilr.

Hala veri yoksa en az 15-20 dakika bekleyin.

Bir sensör değişikliğinden sonra xDrip+ yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kanlı KŞ'nizi kontrol edebilir ve yeni bir başlangıç kalibrasyonu yapabilirsiniz.

### 4. Adım: AAPS'i yapılandırın

- AAPS'de Konfigürasyon ayarları > KŞ Kaynağı'na gidin ve 'xDrip+' seçeneğini işaretleyin
- AAPS, telefon uçak modundayken kan şekeri değerlerini almıyorsa, "Alıcıyı tanımla"yı kullanın

Halihazırda, Libre 3'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 3'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir.

### Juggluco'dan Libre uygulamasına geri dönün

Alıcı olarak Juggluco'dan Libre 3 uygulamasına geri dönmek mümkündür. Aşağıdaki adımlar gereklidir:

1. Libre 3 uygulamasını yeniden yükleyin (Veya ayarlardaki verileri temizleyin)
2. Libre 3 uygulamasını, sensörün etkinleştirildiği Libreview hesabıyla kurun.
3. Talimatlardaki Libre 3 uygulamasına benzer şekilde ayarlarda Juggluco uygulamasını durdurun.
4. Libre 3 menüsünde "Sensörü Başlat"a tıklayın, "Evet", "İleri"yi seçin ve sensörünüzü tarayın.
5. Ardından 60 dakikalık ısınma süresi başlamalıdır. Bu, her değişiklikten sonra gereklidir ve atlanamaz.


### Androidaps eksik FL3 okumaları

Bazı Freestyle Libre 3 sensörleri glikoz değerlerini her dakikada (60s) göndermez, biraz farklı zamanlarda gönderebilir. (58s, 59s, veya 61s, 62s). Juggluco, yeni glikoz değerini ne zaman olursa olsun doğrudan sensörden alır ve yayınlar. Değerleri kalibre etmek veya yumuşatmak için Xdrip+'a ihtiyacınız varsa ve bunların daha sonra AAPS'e aktarılmasını istiyorsanız, bu noktada bir sorun mevcuttur.

Xdrip+'ta, belirli bir eşiğin - bu durumda 60 saniyelerin - altındaki değerlerin yayınlanmasını önleyen bir mantık kontrolü vardır.

Bu, AAPS'in Xdrip'ten dakika değerleri almamasına neden olabilir!
```{image} https://camo.githubusercontent.com/72863950f3062716319362ba087877134d23fa9566c81e7ea6af266056dc5e1c/68747470733a2f2f696e73756c696e636c75622e64652f636f72652f696e6465782e7068703f6174746163686d656e742f32303136302d30356466383031392d343435642d343338652d383233362d3665396231633762333438622d6a7065672f
:alt: xDrip+, FL3 okumalarını AAPS'e yayınlamıyor.
```
Değerleri her zaman AAPS'e almak için [bu Xdrip+](https://github.com/blaqone/xDrip) sürümünü kullanmanız gerekir.

(Libre3-experiences-and-troubleshooting)=
### Deneyimler ve Sorun Giderme

#### Başarılı sensör başlatma için zorunlu ayarlar

- NFC etkin / BT etkin
- Depolama ve konum izni etkin
- Konum hizmeti etkin
- Otomatik saat ve saat dilimi ayarı

Konum hizmetinin merkezi bir ayar olduğunu lütfen unutmayın. Bu, aynı zamanda ayarlanması gereken uygulamanın konum izni ile ilgili değildir!


#### Sorun Giderme Libre3'de okuma yok

- Android konum hizmeti verilmedi - lütfen sistem ayarlarında etkinleştirin
- Otomatik saat ve saat dilimi ayarlanmadı - lütfen ayarları uygun şekilde değiştirin
- Bluetooth kapalı - lütfen açın¨
- Libre 3 sensörünün başka bir cihaza bağlı olmadığından emin olun.

#### Sorun Giderme; Juggluco KŞ değeri okumuyor

- Libre 3 uygulamasının durup durmadığını kontrol edin.
- Juggluco uygulamasında Libre 3 sensörünü yeniden tarayın
- Sensörün mevcut Libreview hesabıyla etkinleştirildiğinden emin olun
- Juggluco'da bir sensör numarasının görünüp görünmediğini kontrol edin
- Sensör genellikle 3 dakika içinde akıllı telefona bağlanır, ancak daha uzun da sürebilir.
- Bluetooth bağlantısı kurulamazsa, akıllı telefonu yeniden başlatmayı deneyin.
- Libre 3 sensörünün başka bir cihaza bağlı olmadığından emin olun.

#### Kan şekeri ölçümlerinin Libreview'e yüklenmemesiyle ilgili sorun giderme

- İnternet bağlantını kontrol et
- Juggluco'nun kan şekeri okumaları aldığından emin olun
- Juggluco->Ayarlar->Libreview içinde "Libreview'e Gönder" onay kutusunun işaretlendiğinden emin olun

#### Daha fazla yardım

Orijinal talimatlar: [jkaltes web sitesi](http://jkaltes.byethost16.com/Juggluco/libre3/)

Ek Github deposu: [Github bağlantısı](https://github.com/maheini/FreeStyle-Libre-3-patch)
