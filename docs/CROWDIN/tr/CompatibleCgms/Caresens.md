# CareSens

CareSens verilerini **AAPS** ile kullanmanın farklı yolları vardır:

- xDrip
- Juggluco

**Not:** AAPS'e bağlanmak için Sens365 takipçi uygulamasına gerek yoktur.

## 1. xDrip

1. Resmi CareSens uygulamasını yükleyin ve ayarlayın.
2. CareSens uygulamasında settings -> Manage Data and Connections bölümüne gidin -> xDrip anahtarını açın. İsterseniz "others" bölümünde CareLevo, DIA:CONN, CloudLoop vb. veri bağlantılarını kapatın.

![CareSens uygulamasının veri bağlantıları](../images/eversenseapp-dataconnections.png)


2. xDrip'i yükleyin: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. xDrip'te settings -> hardware data source bölümüne gidin, veri kaynağı olarak `Companion App` seçin.
4. **AAPS**'te [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde xDrip'i seçin.


## 2. Juggluco

1. Juggluco uygulamasını yükleyin.
2. Juggluco'da sol menüyü açın ve `Photo` seçeneğini seçin
3. Sensör paketinin üzerindeki QR kodu tarayın.
4. Sol menü -> settings -> exchange data bölümünde xDrip broadcast seçeneğinin açık olduğundan emin olun.
5. **AAPS**'te [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde xDrip'i seçin.
