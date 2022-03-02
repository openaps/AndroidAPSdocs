Kapalı Döngü Sistemi Nedir?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS AAPS sanki bir otopilot gibidir

Yapay pankreas kapalı döngü sistemi, diyabet yönetimini sizin için daha kolay hale getirmek için farklı bileşenleri birleştirir. 
Açık kaynaklı kapalı döngü hareketinin kurucularından biri olan Dana M. Lewis, `Otomatik İnsülin İletimi <https://www.artificialpancreasbook.com/>`_ adlı harika kitabında, onu "diyabetiniz için otomatik pilot" olarak adlandırıyor <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Ama bu ne anlama geliyor?

**Uçakta otopilot**

Otopilot, işin tamamını yapmaz ve pilotun tüm uçuş boyunca uyumasına imkan vermez. Pilotların işini kolaylaştırır. Onları uçağın ve uçuş durumunun sürekli olarak izlenmesi yükünden kurtarır. Bu pilotun hava sahasını izlemeye ve otopilotun işlevlerini kontrol etmeye konsantre olmasını sağlar.

Otopilot çeşitli sensörlerden gelen sinyalleri alır, bir bilgisayar bunları pilotun özellikleriyle birlikte değerlendirir ve ardından gerekli ayarlamaları yapar. Pilotun artık sürekli ayarlamalar hakkında endişelenmesine gerek yoktur.

**Kapalı Döngü Sistemi**

Aynısı yapay bir pankreas kapalı döngü sistemi için de geçerlidir. Bütün işi yapmıyor, yine de şeker hastalığınızla ilgilenmeniz gerekiyor. Kapalı döngü sistemi, bir CGM/FGM'den alınan sensör verilerini bazal oran, insülin duyarlılık faktörü ve karbonhidrat oranı gibi diyabet yönetimi spesifikasyonlarınızla birleştirir. Buradan diyabetinizi hedef aralıkta tutmak ve sizi rahatlatmak için tedavi önerilerini hesaplar ve bu kalıcı küçük ayarlamaları uygular. Bu diyabetin "yanında" hayatınız için daha fazla zaman bırakır.

İnsan gözetimi olmadan sadece otopilotun uçtuğu bir uçağa binmek istemediğiniz gibi, kapalı döngü sistemi diyabet yönetiminizde size yardımcı olur, ancak her zaman desteğinize ihtiyaç duyar! **Kapalı döngüde bile diyabetinizi unutamazsınız!**

Otopilot, pilotun özelliklerine olduğu kadar sensör değerlerine de bağlı olduğu gibi, bir kapalı döngü sistemi de sizi başarılı bir şekilde desteklemek için bazal oranlar, ISF ve karbonhidrat oranı gibi uygun girdilere ihtiyaç duyar.


Açık Kaynaklı Yapay Pankreas Kapalı Döngü Sistemleri
===================================================
Şu anda üç ana açık kaynaklı kapalı döngü sistemi mevcuttur:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS `bu belgelerde <./WhatisAndroidAPS.html>`_. içinde ayrıntılı olarak açıklanmıştır. İnsülin pompanızın hesaplanması ve kontrolü için bir Android Akıllı Telefon kullanır. OpenAPS ile güçlü bir işbirliği içindedir (ör. algoritmaları paylaşırlar).

Uyumlu `pompalar <../Hardware/pumps.html>`_ şunlardır:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS & Dana-i <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Diaconn G8 <../Configuration/DiaconnG8.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_ / Omnipod Dash
* bazı eski `Medtronic pompaları <../Configuration/MedtronicPump.html>`_

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ ilk Açık Kaynak Kapalı Döngü Sistemidir. Raspberry Pi veya Intel Edison gibi küçük bir bilgisayar kullanır.

Uyumlu pompalar şunlardır:

* Bazı Eski Medtronic pompalar

IOS için Loop
--------------------------------------------------
`iOS için Döngü <https://loopkit.github.io/loopdocs/>`_, Apple iPhone'larla kullanılabilecek Açık Kaynaklı Kapalı Döngü Sistemidir.

Uyumlu pompalar şunlardır:

* Omnipod Eros
* Bazı Eski Medtronic pompalar
