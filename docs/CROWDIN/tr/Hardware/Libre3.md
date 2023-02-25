# Freestyle Libre 3

Freestyle Libre 3 sistemi, tehlikeli kan şekeri düzeylerini otomatik olarak bildirebilir. Libre3 Sensörü, mevcut kan şekeri seviyesini her dakika bir alıcıya (okuyucu veya akıllı telefon) gönderir. Alıcı, gerekirse bir alarmı tetikler. Juggluco uygulamasının yardımıyla sensör, başlatmanın ardından devralınabilir ve Xdrip+, AndroidAPS veya Libreview'e bağlanabilir. Bu sayede kan şekeri değerleri direkt olarak iletilebilir. Juggluco'ya gönderilmek üzere sensörün belleğinden geçmiş verileri (iki saatlik anlık glikoz ve iki haftalık 5 dakikada bir geçmiş verileri) almak bile mümkündür.

Sensör, glikometre ölçümleri ve sensör okumaları arasındaki farkları ayarlamak için -40 mg/dl ila +20 mg/dl (-2.2 mmol/l ila +1.1 mmol/l) aralığında kalibre edilebilir.

## Mevcut kısıtlamalar

- Rootlu bir sisteminiz varsa, onu gizlemeniz gerekir. Talimatları [Burada](https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3) bulabilirsiniz.

  (Akıllı telefonun rootlu olup olmadığını öğrenmek için birkaç uygulama vardır, bunlardan biri [Root Checker Uygulaması](https://play.google.com/store/apps/details?id=com.joeykrim.rootcheck)'dır)

- Juggluco uygulaması yalnızca İngilizce, Felemenkçe ve İtalyanca dillerini destekler.

### 1. Adım: Libre3 uygulamasını indirin ve kurun

Install the Libre 3 app from the Playstore and open it. On the home screen, click Sign In. Registration with your Libreview account is mandatory - if you don't have one yet, you can create one.

```{image} ../images/libre3/1.jpg
:alt: Libre3 start screen
```

```{image} ../images/libre3/2.jpg
:alt: Libreview login
```

You must then accept Abbott's Terms of Service. The last one is optional and can also be rejected.

```{image} ../images/libre3/4.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/5.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/6.jpg
:alt: Libre 3 Term
```

Adjust the app step by step according to your needs. If you see this message about disabling battery optimization, tap "Allow".

```{image} ../images/libre3/10.jpg
:alt: Libre 3 battery optimization
```

After setting up the Libre 3 app, you can already activate your first sensor. To do this, scan the sensor as shown and wait for the sensor to warm up within the next 60 minutes.

```{image} ../images/libre3/12.jpg
:alt: Enable Libre 3 Sensor
```

### Step 2: Stop Libre 3 app

After the sensor has started successfully and the first sensor reading is visible, you can continue. Now open the settings and select the menu option for "Apps".

```{image} ../images/libre3/13.jpg
:alt: App settings
```

You then search for the Libre 3 app. Once you have found it, tap on it.

```{image} ../images/libre3/14.jpg
:alt: Libre 3 app settings
```

Now tap "Stop" or "Force stop". The exact button may vary depending on the Android version.

```{image} ../images/libre3/15.jpg
:alt: Exit Libre 3
```

If there is another request, you can confirm it with "OK".

```{image} ../images/libre3/16.jpg
:alt: Exit Libre 3
```

### Step 3: Install & set up Juggluco

Now download & install the Juggluco App from [here (link)](https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk) or [here (mirror)](http://jkaltes.byethost16.com/Juggluco/download.html) (version 4.0.1 or higher). With the help of this app, the blood sugar readings can be sent directly to Xdrip and AndroidAPS. For this purpose, the active sensor (which is registered on Libreview) is used within Juggluco. This also explains why a Libreview account is mandatory.

After installing Juggluco, several messages may appear. Allow Juggluco to find, locate and connect nearby devices.

```{image} ../images/libre3/17.jpg
:alt: Allow Juggluco connections
```

A request to deactivate the battery optimization may appear as well. Tap "Allow". This is important to keep the app running in the background.

```{image} ../images/libre3/18.jpg
:alt: Disable Juggluco battery optimization
```

Tap OK when Juggluco is introduced.

```{image} ../images/libre3/19.jpg
:alt: Disable Juggluco battery optimization
```

Now you will see the Juggluco home screen. Click onto the empty space within the upper left half. You can see the approximate position here.

```{image} ../images/libre3/20.jpg
:alt: Open Juggluco Menu
```

This menu will open. Here you can select "Settings".

```{image} ../images/libre3/21.jpg
:alt: Juggluco Menu
```

This page will then show up. In the selection "1." you have two options:

1. "Send to xDrip" -> With this setting, the blood sugar readings are sent to xDrip. Select "Libre2 patched" or "Libre 2 (patched app)" as the recipient within xDrip.
2. "xDrip broadcast" -> With this setting, the minutely blood sugar reading are sent directly to AndroidAPS. The blood glucose source must be set to "xDrip+" within AndroidAPS.

To start the sensor, choose "2." the "Libreview" checkbox.

```{image} ../images/libre3/22.jpg
:alt: Juggluco Settings
```

In the next screen you have to enter your login data for Libreview. It must be the account with which the sensor was activated. Then click on "Get Account ID".

```{image} ../images/libre3/23.jpg
:alt: Connect Libreview
```

If everything went well, a multi-digit number should now be visible below the "Resend data" button. This process may take some time - if the number still doesn't appear, check your internet connection and try the previous steps again.

**Note:** If you want to upload blood sugar readings to Libreview, you can check the "Send to Libreview" checkbox.

```{image} ../images/libre3/24.jpg
:alt: Check Libreview
```

Now it's time to restart the sensor! Go back to the Juggluco home screen and scan your previously activated sensor. The sensor will start and may enter a 60 minute warm-up period again. After the 60 minutes, the readings should be visible on the Juggluco home screen.

```{image} ../images/libre3/25.jpg
:alt: Check Libreview
```

Done, that's it! If the readings are not visible, you can find more information in the "Experiences and troubleshooting" section.

### Step 4: Set up xDrip

Kan şekeri değerleri akıllı telefonda xDrip+ uygulaması tarafından alınır.

- If not already set up then download xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
- In xDrip+ select "Libre2 patched" or "Libre 2 (patched app)" as data source
- disable battery optimization and allow background activity for xDrip+ app
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Bu, sorun giderme için ek hata mesajlarını günlüğe kaydeder.
- In xDrip+ go to Settings -> Interapp Compatibility -> Broadcast Data Locally and select ON.
- In xDrip+ go to Settings -> Interapp Compatibility -> Accept Treatments and select OFF.
- to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set Settings -> Interapp Settings -> Identify Receiver "info.nightscout.androidaps".
- If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings -> Interapp Compatibility -> Accept Calibrations and select ON. You may also want to review the options in Settings -> Less Common Settings -> Advanced Calibration Settings.

```{image} ../images/Libre2_Tags.png
:alt: xDrip LibreLink oturum açma
```

### Adım 5: Sensörü xDrip içinde başlatın

xDrip'te sensörü "Sensörü başlat" ve "bugün değil" ile başlatın. Cep telefonunu sensör üzerinde tutmak gerekli değildir. Aslında "Sensörü Başlat" herhangi bir Libre 3 sensörünü fiziksel olarak başlatmayacak veya hiçbir durumda onlarla etkileşime girmeyecektir. Bu sadece xDrip+'ın yeni bir sensörün kan şekeri seviyelerini ilettiğini anlamak içindir. Varsa, ilk kalibrasyon için iki ölçümlü glikometre değeri girin. Şimdi kan şekeri değerleri her 5 dakikada bir xDrip+'da görüntülenmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz zamanlar için, doldurulmayabilr.

Hala veri yoksa en az 15-20 dakika bekleyin.

Bir sensör değişikliğinden sonra xDrip+ yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kanlı KŞ'nizi kontrol edebilir ve yeni bir başlangıç kalibrasyonu yapabilirsiniz.

### 6. Adım: AndroidAPS'i yapılandırın

- AndroidAPS'de Konfigürasyon ayarları > KŞ Kaynağı'na gidin ve 'xDrip+' seçeneğini işaretleyin
- AndroidAPS, telefon uçak modundayken kan şekeri değerlerini almıyorsa, "Alıcıyı tanımla"yı kullanın

Halihazırda, Libre 3'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 3'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir.

### Juggluco'dan Libre uygulamasına geri dönün

Alıcı olarak Juggluco'dan Libre 3 uygulamasına geri dönmek mümkündür. Aşağıdaki adımlar gereklidir:

1. Libre 3 uygulamasını yeniden yükleyin (Veya ayarlardaki verileri temizleyin)
2. Libre 3 uygulamasını, sensörün etkinleştirildiği Libreview hesabıyla kurun.
3. Talimatlardaki Libre 3 uygulamasına benzer şekilde ayarlarda Juggluco uygulamasını durdurun.
4. Libre 3 menüsünde "Sensörü Başlat"a tıklayın, "Evet", "İleri"yi seçin ve sensörünüzü tarayın.
5. Ardından 60 dakikalık ısınma süresi başlamalıdır. Bu, her değişiklikten sonra gereklidir ve atlanamaz.

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
