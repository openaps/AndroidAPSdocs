# Kapalı Döngü Sistemi Nedir?

```{image} ../images/autopilot.png
:alt: AAPS AAPS sanki bir otopilot gibidir
```

Yapay pankreas kapalı döngü sistemi, diyabet yönetimini sizin için daha kolay hale getirmek için farklı bileşenleri birleştirir. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Ama bu ne anlama geliyor?

**Autopilot in an aircraft**

Otopilot, işin tamamını yapmaz ve pilotun tüm uçuş boyunca uyumasına imkan vermez. Pilotların işini kolaylaştırır. Onları uçağın ve uçuş durumunun sürekli olarak izlenmesi yükünden kurtarır. Bu pilotun hava sahasını izlemeye ve otopilotun işlevlerini kontrol etmeye konsantre olmasını sağlar.

Otopilot çeşitli sensörlerden gelen sinyalleri alır, bir bilgisayar bunları pilotun özellikleriyle birlikte değerlendirir ve ardından gerekli ayarlamaları yapar. Pilotun artık sürekli ayarlamalar hakkında endişelenmesine gerek yoktur.

**Closed Loop System**

Aynısı yapay bir pankreas kapalı döngü sistemi için de geçerlidir. Bütün işi yapmıyor, yine de şeker hastalığınızla ilgilenmeniz gerekiyor. Kapalı döngü sistemi, bir CGM/FGM'den alınan sensör verilerini bazal oran, insülin duyarlılık faktörü ve karbonhidrat oranı gibi diyabet yönetimi spesifikasyonlarınızla birleştirir. Buradan diyabetinizi hedef aralıkta tutmak ve sizi rahatlatmak için tedavi önerilerini hesaplar ve bu kalıcı küçük ayarlamaları uygular. Bu diyabetin "yanında" hayatınız için daha fazla zaman bırakır.

İnsan gözetimi olmadan sadece otopilotun uçtuğu bir uçağa binmek istemediğiniz gibi, kapalı döngü sistemi diyabet yönetiminizde size yardımcı olur, ancak her zaman desteğinize ihtiyaç duyar! **Even with a closed loop you can't just forget your diabetes!**

Otopilot, pilotun özelliklerine olduğu kadar sensör değerlerine de bağlı olduğu gibi, bir kapalı döngü sistemi de sizi başarılı bir şekilde desteklemek için bazal oranlar, ISF ve karbonhidrat oranı gibi uygun girdilere ihtiyaç duyar.

## Açık Kaynaklı Yapay Pankreas Kapalı Döngü Sistemleri

Şu anda üç ana açık kaynaklı kapalı döngü sistemi mevcuttur:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). İnsülin pompanızın hesaplanması ve kontrolü için bir Android Akıllı Telefon kullanır. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Raspberry Pi veya Intel Edison gibi küçük bir bilgisayar kullanır.

Uyumlu pompalar şunlardır:

- some old Medtronic pumps

### IOS için Loop

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Uyumlu pompalar şunlardır:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
