# Gelecekteki (olası) Pompa Sürücüleri

Burada üretimde olan bazı pompaların listesi ve herhangi bir döngü sistemindeki destek durumu ile AAPS'deki durumu anlatılmaya çalışılacaktır. Bölüm sonunda bir pompanın "Döngü özellikli" olması için gerekli olan bazı bilgiler vardır.

## Döngü yapılabilen Pompalar

### Ypsomed Pompası ([Pompa ana sayfası](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Döngü durumu:** Sürüm 1 - 1.5 (2018/2Ç) döngü adayı değildir. While they do have BT communication, communication is very limited and uni directional: Pump->App. In June 2022 (in Germany) company released, new version nicknamed DOSE (1.6), which allows setting bolus and TBR from their App. This pump is slowly getting available around Europe, but it will take some time to be available everywhere. Plan to implement their own Loop was cancelled and they decided to partner up with CamAPS (support already implemented) and use their loop solution. Daha fazla bilgi için bu [sayfaya](https://www.mylife-diabetescare.com/en/loop-program.html) bakın

**AAPS için donanım gereksinimi:** Yok. BT etkin.

**Yorumlar:** Şu anda sürücü üzerinde çalışan 2 grup var, bu nedenle yeni sürüm yayınlandıktan sonra yakında AAPS desteği almayı bekleyebiliriz. Bir grup YpsoMed tarafından destekleniyor ve Avustralya'da gerçekleşen Tıbbi denemelere yardımcı oluyor, 2. grup ise tersine mühendislik orijinal uygulamasıyla bağımsız olarak çalışıyor.

* * *

### Kaleido ([Ana Sayfa](https://www.hellokaleido.com/))

**Döngü durumu:** Şu anda herhangi bir döngü sistemi tarafından desteklenmiyor. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin.

* * *

### Medtrum A6/P6/C6 ([Ana Sayfa](https://www.medtrum.com/product/nanopump.html))

**Döngü durumu:** Bir Döngü adayıdır. Şirketin kendi sınırlı yarım döngü sistemi çalışıyor (A6). Iphone Uygulaması ile kontrol edilebilir. Şu anda mevcut bir Android uygulaması yok.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin görünüyor.

* * *

### EOFLOW ([Ana Sayfa](http://www.eoflow.com/eng/main/main.html))

**Döngü durumu:** Bir Döngü adayıdır. Kullandıkları uzaktan kumanda aslında değiştirilmiş Android cihazıdır. (Pompa şu anda yalnızca Kore'de mevcuttur).

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin görünüyor.

* * *

### Accu-Chek Solo ([Ana Sayfa](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Döngü durumu:** Bir Döngü adayıdır.

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

**Yorumlar:** Protokolün kodunu çözmek isteyen bazı geliştiriciler var, ancak şu ana kadar bu yalnızca ön aşamalarda.

* * *

### Tandem: t:slim X2 ([Ana Sayfa](https://www.tandemdiabetes.com/))

**Döngü durumu:** Henüz Döngü yapılabilir değil.

Geçmişte şirket, pompalarının harici cihazlar tarafından kontrol edilmesine izin vermemeye karar vermiş olsa da, son birkaç yılın oyunun kurallarını değiştirdiği görülüyor. Şirket, t:slim X2 pompasını uzaktan kontrol edilebilmesi için yükseltmeye karar verdi (t:connect uygulaması aracılığıyla), bu da gelecekte pompanın AAPS aracılığıyla kontrol edilmesini dört gözle bekleyebileceğimiz yolların açıldığı anlamına geliyor. Yeni pompa donanım yazılımının yakında piyasaya sürülmesi planlanıyor (bu veya gelecek yıl, hortumsuz pompaları t:sport çıkmadan önce). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

* * *

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

They plan to release t:Mobi first (previously called t:sport) at end of 2022 or in 2023. Afterwards they will release t:slim X3 (2023 maybe) and after that t:Mobi Tubeless. t:mobi's will be controlable only over phone app, while X3 will look similar as X2, with some new nifty features (remote update of firmware, remote control over phone app, etc).

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**AAPS için donanım gereksinimi:** Yok. BT etkin görünüyor.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Döngü durumu:** Şu anda herhangi bir döngü sistemi tarafından desteklenmiyor. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**AAPS için donanım gereksinimi:** Muhtemelen yok. BT etkin.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumps that aren't Loopable

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Döngü yapılabilecek pompalar için gereksinimler

**Prerequisite**

- Pompanın bir çeşit uzaktan kumandayı desteklemesi gerekir. (BT, Radyo frekansı, vb)
- Saldırıya uğramış/dokümante edilmiş/vb. protokeller.

**Minimal requirement**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.