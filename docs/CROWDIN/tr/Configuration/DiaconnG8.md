# Diaconn G8 İnsülin Pompası

## İnsülin Pompası Bluetooth Eşleştirme

- Sol üst köşedeki hamburger menüsüne tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Hamburger menü
  > ```

- Konfigürasyon ayarlarına tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Konfigürasyon ayarları
  > ```

- Diaconn G8 Pompayı seçtikten sonra Ayarlar simgesine (dişli çark) tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Ayarlar
  > ```

- Pompa seçimi'ne tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Pompa seçimi
  > ```

- Listede model numarası görünen insülin pompanızın seçin.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Pompa eşleştirme
  > ```

- Model numaranızı kontrol etmek için iki seçenek vardır:

  > 1. Pompanın arkasındaki SN numarasının son 5 hanesi.
  > 2. Pompa üzerinden O düğmesi > Bilgi > BLE > Son 5 basamak.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: model no kontrolü.`

- Pompanızı seçtiğinizde, pin kodunu soran bir pencere açılır. Bağlantıyı tamamlamak için pompanızda görüntülenen pin numarasını girin.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: PIN kodu
  > ```

## Pompa durum kontrolü ve günlük senkronizasyonu

- Pompanız bağlandıktan sonra, durumu kontrol etmek ve günlükleri senkronize etmek için Bluetooth sembolüne tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: Bluetooth durumu
  > ```

## Bluetooth Sorun Giderme

**Pompa ile Bluetooth bağlantısının düzensiz olması durumunda yapılması gerekenler.**

### Yöntem 1) AAPS uygulamasını yeniden başlattıktan sonra pompayı tekrar kontrol edin.

- Sağ üstteki 3 nokta butonuna tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Tercihler menüsü
  > ```

- Çıkış'a tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Çıkış
  > ```

### Yöntem 2) İlk yöntem işe yaramazsa, Bluetooth bağlantısını kesin ve ardından yeniden bağlanın.

- Üstteki Bluetooth düğmesini yaklaşık 3 saniye basılı tutun.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bluetooth butonu
  > ```

- Eşleştirilmiş Diaconn G8 İnsülin pompasındaki ayar butonuna tıklayın.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Ayar butonu
  > ```

- Eşleştirmeyi kaldır.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Eşleştirmeyi kaldır
  > ```

- Pompa için Bluetooth eşleştirme işlemini tekrarlayın (yukarıya bakın).

## Daha fazla bilgi

### Diaconn G8 İnsülin pompası seçenek ayarları

- Yapılandırma Yöneticisi > pompa > Diaconn G8 > Ayarlar
- Üstte DIACONN G8> sağ üstte 062 nokta düğmesi> Diaconn G8 Tercihleri

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Diaconn G8 pompa seçenekleri
```

- **Rezervuar değişikliğini günlüğe kaydet** seçeneği aktif ise, bir “İnsülin Değişimi” olayı meydana geldiğinde ilgili detaylar bakım portalına otomatik olarak yüklenir.
- **İğne değişimini kaydet** seçeneği aktif ise “Set Değişikliği” olayı gerçekleştiğinde ilgili detaylar otomatik olarak bakım portalına yüklenir.
- **Hortum değiştirmeyi günlüğe kaydet** seçeneği aktif ise, “Hortum Değiştirme” olayı gerçekleştiğinde ilgili detaylar otomatik olarak bakım potalına yüklenir.
- **Pil değişimini kaydet** seçeneği aktif ise “Pil Değişikliği” olayı gerçekleştiğinde ilgili detaylar otomatik olarak bakım portalına yüklenir ve EYLEM sekmesindeki POMPA BATARYA DEĞİŞİMİ butonu devre dışı bırakılır. (Not: Pili değiştirmek için lütfen önce devam eden tüm enjeksiyon işlevlerini durdurun.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Diaconn G8 eylemler menüsü
```

### Yayma Blosu fonksiyonu

- Yayma bolus kullanırsanız, kapalı döngü devre dışı bırakılır.
- Yayma bolusun kapalı döngüde neden çalışmadığına ilişkin ayrıntılar için [bu sayfaya](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) bakın.
