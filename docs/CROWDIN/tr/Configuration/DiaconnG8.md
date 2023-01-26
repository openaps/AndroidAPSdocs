# Diaconn G8 İnsülin Pompası

## İnsülin Pompası Bluetooth Eşleştirme

- Click on the hamburger menu in the top left corner.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Hamburger menü
  > ```

- Click on Config Builder.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Konfigürasyon ayarları
  > ```

- After selecting the Diaconn G8 Pump click on the Settings icon (cog wheel).

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Ayarlar
  > ```

- Choose Selected pump.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Pompa seçimi
  > ```

- Select your insulin pump’s model number once it appears in the list.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Pompa eşleştirme
  > ```

- There are two options to check your model number:

  > 1. Pompanın arkasındaki SN numarasının son 5 hanesi.
  > 2. Click on O button > Information > BLE > Last 5 digits.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: check model no.`

- Once you select your pump, a window appears asking for a pin code. Bağlantıyı tamamlamak için pompanızda görüntülenen pin numarasını girin.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: PIN kodu
  > ```

## Pompa durum kontrolü ve günlük senkronizasyonu

- Once your pump is connected, click on the Bluetooth symbol to check the status and to synchronize logs.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: Bluetooth durumu
  > ```

## Bluetooth Sorun Giderme

**What to do in the case of an unstable Bluetooth connection with the pump.**

### Yöntem 1) AAPS uygulamasını yeniden başlattıktan sonra pompayı tekrar kontrol edin.

- Click on the 3 dots button on the top right.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Tercihler menüsü
  > ```

- Click on Exit.

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Çıkış
  > ```

### Yöntem 2) İlk yöntem işe yaramazsa, Bluetooth bağlantısını kesin ve ardından yeniden bağlanın.

- Press and hold the Bluetooth button at the top for about 3 seconds.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bluetooth butonu
  > ```

- Click on the Setting button on the paired Diaconn G8 Insulin pump.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Ayar butonu
  > ```

- Unpair.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Eşleştirmeyi kaldır
  > ```

- Repeat the Bluetooth pairing process for the pump (see above).

## Daha fazla bilgi

### Diaconn G8 İnsülin pompası seçenek ayarları

- Config manager > pump > Diaconn G8 > Settings
- DIACONN G8 at the top> 3 dots button on the top right > Diaconn G8 Preferences

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Diaconn G8 pompa seçenekleri
```

- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Not: Pili değiştirmek için lütfen önce devam eden tüm enjeksiyon işlevlerini durdurun.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Diaconn G8 eylemler menüsü
```

### Yayma Blosu fonksiyonu

- If you use extended bolus it will disable closed loop.
- See [this page](../Usage/Extended-Carbs.md#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.
