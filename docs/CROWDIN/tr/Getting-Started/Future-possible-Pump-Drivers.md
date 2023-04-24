# Gelecekteki (olası) Pompa Sürücüleri

Burada üretimde olan bazı pompaların listesi ve herhangi bir döngü sistemindeki destek durumu ile AAPS'deki durumu anlatılmaya çalışılacaktır. Bölüm sonunda bir pompanın "Döngü özellikli" olması için gerekli olan bazı bilgiler vardır.

## Döngü yapılabilen Pompalar

* * *

### EOPatch2 ([Ana sayfa](http://www.eoflow.com/eng/main/main.html))

** Döngü durumu: ** Yeni bir döngü adayıdır. Kullandıkları uzaktan kumanda aslında değiştirilmiş Android cihazıdır. (Pompa şu anda yalnızca Kore'de mevcuttur). Söz vermiyoruz ancak AAPS 3.2'ye bakabilirsiniz.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin görünüyor.

* * *

### Ypsomed Pompası ([Pompa ana sayfası](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Döngü durumu:** Sürüm 1 - 1.5 (2018/2Ç) döngü adayı değildir. BT iletişimine sahip olsalar da, iletişim çok sınırlı ve tek yönlüdür: Pompa->Uygulama. Haziran 2022'de (Almanya'da) şirket, uygulamalarından bolus ve GBO ayarlamaya olanak tanıyan DOSE (1.6) adlı yeni sürümünü yayınladı. Kendi Döngülerini uygulama planları iptal edildi ve CamAPS (destek zaten uygulandı) ile ortak olmaya ve döngü çözümlerini kullanmaya karar verdiler. Daha fazla bilgi için bu [sayfaya](https://www.mylife-diabetescare.com/en/loop-program.html) bakın

**AAPS için donanım gereksinimi:** Yok. BT etkin.

**Yorumlar:** Pompanın doz sürümüne çok ağır şifreleme eklenmiştir. Bu nedenle bu pompa yakın gelecekte (veya hiçbir zaman) büyük bir olasılıkla AAPS tarafından desteklenmeyecektir. Ypsomed ile çalışan ve tıbbi denemelere yardımcı olan geliştiricimiz vardı, bu yüzden belki onun sürücüsünün yayınlanmasına izin verilir, ancak bu küçük bir olasılıktır. Hakkında daha fazla bilgiyi discord "ypsopump-talk" kanalında bulabilirsiniz.

* * *

### Kaleido ([Ana Sayfa](https://www.hellokaleido.com/))

**Döngü durumu:** Şu anda herhangi bir döngü sistemi tarafından desteklenmiyor. Pompa bir döngü adayıdır, fakat protokol bilinmediğinden bu pompanın çok yakında destekleneceğini zannetmiyoruz.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin.

* * *

### Medtrum A6/P6/C6 ([Ana Sayfa](https://www.medtrum.com/product/nanopump.html))

**Döngü durumu:** Bir Döngü adayıdır. Şirketin kendi sınırlı yarım döngü sistemi çalışıyor (A6). Iphone Uygulaması ile kontrol edilebilir. Şu anda mevcut bir Android uygulaması yok.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin görünüyor.

**Yorum:** Bu pompanın AAPS'de kolayca desteklenip desteklenemeyeceğini görmek için bazı araştırmalar başlatıldı. Hakkında daha fazla bilgiyi discord "medtrum" kanalında bulabilirsiniz.

* * *

### Equil (Aidex/GlucoRx/MicroTechMD) ([Anasayfa](https://www.glucorx.ie/glucorx-equil/))

**Döngü durumu:** Bir Döngü adayıdır.

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

**Yorum:** Bazı kişiler AAPS'de pompa desteğini araştırmaya başladı, ancak bu henüz başlangıç aşamasında. Hakkında daha fazla bilgiyi discord "equil" kanalında bulabilirsiniz.

* * *

### Accu-Chek Solo ([Ana Sayfa](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Döngü durumu:** Bir Döngü adayıdır.

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

**Yorumlar:** Protokolün kodunu çözmek isteyen bazı geliştiriciler var, ancak şu ana kadar bu yalnızca ön aşamalarda.

* * *

### Tandem: t:slim X2 ([Ana Sayfa](https://www.tandemdiabetes.com/))

**Döngü durumu:** Henüz Döngü yapılabilir değil.

Geçmişte şirket, pompalarının harici cihazlar tarafından kontrol edilmesine izin vermemeye karar vermiş olsa da, son birkaç yılın oyunun kurallarını değiştirdiği görülüyor. Şirket, t:slim X2 pompasını uzaktan kontrol edilebilmesi için yükseltmeye karar verdi (t:connect uygulaması aracılığıyla), bu da gelecekte pompanın AAPS aracılığıyla kontrol edilmesini dört gözle bekleyebileceğimiz yolların açıldığı anlamına geliyor. Yeni pompa donanım yazılımının yakında piyasaya sürülmesi planlanıyor (bu veya gelecek yıl, hortumsuz pompaları t:sport çıkmadan önce). t:connect'ten hangi operasyonların mümkün olacağı hakkında henüz ayrıntı yok, (Bolus kesinlikle var, diğerleri bilinmiyor).

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

* * *

### Tandem: t:Mobi & t:slim X3 & t:Mobi hortumsuz ([Ana sayfa](https://www.tandemdiabetes.com/about-us/pipeline))

**Döngü durumu:** Tüm 3 pompa da döngü adayıdır.

İlk olarak t:Mobi'yi (eski adıyla t:sport) 2022'nin sonunda veya 2023'te piyasaya sürmeyi planlıyorlar. Daha sonra t:slim X3 (belki 2023) ve ondan sonra t:Mobi hortumsuzu piyasaya sürecekler. t:mobi'ler yalnızca telefon uygulaması üzerinden kontrol edilebilirken, X3 bazı yeni şık özelliklerle (ürün yazılımının uzaktan güncellenmesi, telefon uygulaması üzerinden uzaktan kumanda vb.) X2'ye benzer görünecek.

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

* * *

### Medtronik Bluetooth

**Yorumlar:** Bu önümüzdeki birkaç yıl içinde çıkacak olan ve Tidepool Loop yazılımında desteklenmesi planlanan pompadır. ([bu makaleye bakın](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare İnsülin pompası ([Ana Sayfa](http://shinmyungmedi.com/en/))

**Döngü durumu:** Şu anda döngü adayı değil, ancak çalışanları tarafından bizimle iletişime geçildi ve pompalarını döngüye dahil olacak şekilde genişletmekle ilgilendiler (şu anda yalnızca get/set profile komutlarının eksik olduğunu düşünüyorum).

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

**Yorumlar:** Şirket, AAPS ile entegrasyonla ilgilendiğinden, uygulamayı kendileri yapabilir.

* * *

## Pompalar artık satılmıyor (şirketler artık çalışmıyor)

### Cellnovo Pompa ([businesswire.com'a bakın](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Döngü durumu:** Şu anda herhangi bir döngü sistemi tarafından desteklenmiyor. Pompa bir döngü adayıdır, fakat protokol bilinmediğinden bu pompanın çok yakında destekleneceğini zannetmiyoruz.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin.

**Ürünle ilgili not:** Görünüşe göre şirket, Pompa İşinden ayrılmaya karar verdi. Bu [makalede](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU) daha fazlasını görebilirsiniz

## Döngü yapılamayan pompalar

### Animas Vibe

**Döngü durumu:** Döngü yapılamıyor. Uzaktan kumanda imkanı yok. **Not:** Pompa artık satılmamaktadır. Şirket, Pompa işinde (J&J) çalışmayı durdurdu.

* * *

### Animas Ping

**Döngü durumu:** Döngü yapılamıyor. Bolus imkanı var ama GBO yok. **Not** Vibe çıktığında satışı durduruldu.

## Döngü yapılabilecek pompalar için gereksinimler

**Ön Şart**

- Pompanın bir çeşit uzaktan kumandayı desteklemesi gerekir. (BT, Radyo frekansı, vb)
- Saldırıya uğramış/dokümante edilmiş/vb. protokeller.

**Minimal requirement**

- Geçici Bazal Oranı Ayarla
- Durum Al
- Geçici Bazal Oranı İptal Et

**Oref1(SMB) veya Bolus için:**

- Bolusu Ayarla

**Bulunması daha iyi,**

- Bolus iptal Etme
- Bazal Profili Alma (ne zaman gerekirse)
- Bazal Profili Ayarlama (olması güzel)
- Geçmişi Okuma 

**Diğer gereksinimler (gerekli değil, ancak kullanılırsa iyi olur)**

- Yayma Bolusu Ayarlama
- Yayma Bolusu iptal etme
- Geçmişi Okuma
- GTD'yi okuma

* * *

### Diğer pompa destekleri

Durumunu görmek istediğiniz başka pompalarınız varsa lütfen discord üzerinden bizimle iletişime geçin.