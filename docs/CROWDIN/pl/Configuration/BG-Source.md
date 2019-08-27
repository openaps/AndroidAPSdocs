**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Upewnij się, że ręce i akcesoria do glukometru są czyste.
* Spróbuj kalibrować, gdy masz w miarę stabilny cukier (seria kropek z płaską strzałką, zwykle wystarcza 15-30 minut).
* Unikaj kalibracji, gdy poziom glukozy zmienia się w górę lub w dół. 
* W oficjalnych systemach CGM wykonaj „wymaganą” kalibrację - w aplikacjach pojawi się monit o sprawdzenie BG raz lub dwa razy dziennie. W systemach DIY możesz nie być poproszony/poproszona o wykonanie kalibracji i powinieneś/powinnaś uważać na kontynuowanie pracy systemu bez kalibracji.
* Jeśli to możliwe, wykonaj kalibrację z niektórymi odczytami w niższym zakresie (4–5 mmoli / l lub 72–90 mg / dl), a niektóre na nieco wyższym poziomie (7-9 mmoli / l lub 126–160 mg / dl), taki sposób wykonania kalibracji zapewni lepszy zakres dla kalibracji punkt / nachylenie.

# Źródła danych o poziomie cukru we krwi (BG) - CGM/FGM

## Smoothing blood glucose

AAPS działa najlepiej, jeśli otrzymane dane dotyczące poziomu glukozy we krwi są "gładkie" i spójne. Niektóre funkcje, takie jak "Wlącz SMB (Super Mikro Bolusy) zawsze" i "Włącz SMB po węglowodanach", mogą być używane tylko z silnie filtrującym źródłem BG.

### DexcomG5 App (patched)

Podczas korzystania z aplikacji Dexcom G5 (patched) twoje dane BG są gładkie i spójne. Nie ma ograniczeń w korzystaniu z SMB.

### xDrip+ z Dexcom G5

Odpowiednio wygładzone dane są dostarczane tylko wtedy, gdy korzystasz z xDrip G5 "OB1 collector in native mode".

### xDrip + z Freestyle Libre

Używając xDrip+ jako źródła danych z Freestyle Libre jak dotąd nie możesz aktywować opcji "Wlącz SMB (Super Mikro Bolusy) zawsze" i "Włącz SMB po węglowodanach", ponieważ wartości BG nie są wystarczająco wygładzone. Jednak istnieje kilka sposobów, dzięki którym możesz zmniejszyć poziom szumu w danych.

**Smooth Sensor Noise.** W xDrip+ Settings > xDrip+ Display Settings Upewnij się, że Smooth Sensor Noise jest włączony. To ustawienie pozwala zastosować wygładzanie zaszumionych danych.

**Smooth Sensor Noise (Ultrasensitive).** Jeśli nadal widzisz zaszumione dane w xDrip_ możesz zastosować bardziej agresywne wygładzanie, używając ustawienia Smooth Sensor Noise (Ultrasensitive). To spróbuje zastosować wygładzanie nawet przy bardzo niskim poziomie wykrytego szumu. Aby to zrobić najpierw [włącz tryb inżynieryjny w xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Następnie przejdź do Ustawienia> xDrip + Ustawienia wyświetlania i włącz Smooth Sensor Noise (Ultrasensitive).

## Dla użytkowników Dexcom

### Dexcom G6: General hints for looping

See [Dexcom G6 page](../Configuration/Dexcom.md) for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

Oczywiste jest, że korzystanie z G6 jest być może nieco bardziej skomplikowane niż wygląda to na początku. Aby bezpiecznie z niego korzystać, należy pamiętać o kilku punktach:

* Jeśli używasz natywnych danych z kodem kalibracji w xDrip lub Spike, najbezpieczniejszą rzeczą do zrobienia jest niedopuszczenie do ponownego uruchomienia czujnika.
* Jeśli musisz użyć ponownego uruchomienia, upewnij się, że wykonasz kalibrację o tej porze dnia, w której możesz obserwować zmianę i skalibrować, jeśli to konieczne. 
* Jeśli ponownie uruchamiasz sensor, zrób to bez kalibracji fabrycznej, aby uzyskać najbezpieczniejsze wyniki w dniach 11 i 12, lub upewnij się, że jesteś gotowy do kalibracji i kontroluj zmiany.
* Tak zwane „wstępne namaczanie” (sensor zamocowany wcześniej bez nadajnika, dzięki czemu „przyzwyczaja się” do płynu tkankowego) z kalibracją fabryczną może prowadzić do odchyleń w poziomach glukozy. Jeśli pracujesz z namaczaniem wstępnym, aby uzyskać najlepsze wyniki, prawdopodobnie będziesz musiał skalibrować sensor.
* Jeśli nie chcesz zwracać uwagi na odchylenia, które mogą mieć miejsce, może być lepiej wrócić do ustawień bez kalibracji fabrycznej i korzystać z systemu tak jak z G5 (z „obowiązkową kalibracją”).

Aby dowiedzieć się więcej o szczegółach i powodach tych zaleceń, przeczytaj [ kompletny artykuł ](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) opublikowany przez Tima Street na stronie [ www.diabettech.com ](http://www.diabettech.com).

### If using G6 with xdrip+

* Jeśli jeszcze nie jest zainstalowany, pobierz [ xdrip ](https://github.com/NightscoutFoundation/xDrip) i postępuj zgodnie z instrukcjami dla nightscout ([ G4 bez udostępniania ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [ G4 z udostępnianiem](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [ G5 ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support) ).
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.
* Dostosuj ustawienia w xDrip+ zgodnie ze stroną ustawień [ xDrip+ ](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 with xdrip+

* Jeśli jeszcze nie jest zainstalowany, pobierz [ xdrip ](https://github.com/NightscoutFoundation/xDrip) i postępuj zgodnie z instrukcjami dla nightscout ([ G4 bez udostępniania ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [ G4 z udostępnianiem](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [ G5 ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support) ).
* W Xdrip przejdź do Ustawienia> Zgodność z aplikacją Interapp> Lokalna transmisja danych i wybierz WŁ.
* W xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> Zatwierdzaj terapię i wybierz WYŁ.
* Jeśli chcesz używać AndroidAPS do wprowadzania kalibracji, wówczas w xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> > Akceptuj Kalibracje i ustaw na WŁ. Możesz również przejrzeć opcje w ustawieniach > mniej typowe ustawienia > Zaawansowane ustawienia kalibracji.
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using G5 or G6 with patched Dexcom app

* Pobierz apk z [ https://github.com/dexcomapp/dexcomapp ](https://github.com/dexcomapp/dexcomapp) i wybierz wersję, która pasuje do twoich potrzeb (mg/dl lub mmol/l, G5 lub G6).
* Zatrzymaj działanie sensora i odinstaluj oryginalną aplikacje Dexcom - jeśli jeszcze do tej pory tego nie zrobiłeś.
* Zainstaluj ściągniętą aplikację.
* Uruchom sensor
* W zakładce AndroidAPS Konfiguracja > Źródło BG zaznacz DexcomG5 App (patched).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Pobierz aplikację Nightscout Uploader z Play Store i postępuj zgodnie z instrukcjami na [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* W Ustawieniach AndroidAPS w części dotyczącej NSClient wpisz adres swojego serwera Nightscout i tajny klucz API.
* W zakładce AndroidAPS Konfiguracjia > Źródło BG zaznacz NSClient.

## Dla użytkowników Libre z nakładką Bluetooth  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* czytnik MiaoMiao <https://www.miaomiao.cool/>
* czytnik Blucon Nightrider <https://www.ambrosiasys.com/howit>
* czytnik BlueReader <https://bluetoolz.de/blueorder/#home>
* zegarek Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Jeśli jeszcze nie jest zainstalowany, pobierz i zainstaluj xdrip i postępuj zgodnie z instrukcjami na [ LimiTTEer ](https://github.com/JoernL/LimiTTer), [ Libre Alarm ](https://github.com/pimpimmi/LibreAlarm/wiki) lub [ BlueReader ](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([ Sprzęt ](https://bluetoolz.de/wordpress/)).
* W Xdrip przejdź do Ustawienia> Zgodność z aplikacją Interapp> Lokalna transmisja danych i wybierz WŁ.
* W xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> Zatwierdzaj terapię i wybierz WYŁ.
* Jeśli chcesz używać AndroidAPS do wprowadzania kalibracji, wówczas w xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> > Akceptuj Kalibracje i ustaw na WŁ. Możesz również przejrzeć opcje w ustawieniach > mniej typowe ustawienia > Zaawansowane ustawienia kalibracji.
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.
* Ustawienia w xDrip+ ze zrzutami ekranu znajdziesz na stronie [ ustawień xDrip+ ](../Configuration/xdrip.md)
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

### If using Glimp...  


* Jeżeli nie masz zainstalowanego i skonfigurowanego programu Glimp - pobierz aplikację i stosuj się do wskazówek zawartych na stronie [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> Glimp.

## Dla użytkowników Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Dla użytkowników pomp serii MM640G lub MM630G  


* W pierwszej kolejności należy pobrać, zainstalować i skonfigurować [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) zgodnie z instrukcjami zawartymi na stronie [http://nightscout. pl/aplikacje/uploader-640g/](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* W aplikacji 600 Series Uploader wybieramy Ustawienia > Wyślij do xDrip+ i zaznaczamy jako włączone.
* W zakładce AndroidAPS Konfiguracja -> Źródło BG zaznacz MM640G.

## Dla użytkowników PocTech CT-100  


* Zainstaluj aplikację PocTech
* W zakładce AndroidAPS Konfiguracja > Źródło BG zaznacz PocTech.

## Jeśli masz inny zestaw CGM, który wysyła dane do Nightscout wtedy  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* W Ustawieniach AndroidAPS w części dotyczącej NSClient wpisz adres swojego serwera Nightscout i tajny klucz API.
* W zakładce AndroidAPS Konfiguracjia -> Źródło BG zaznacz NSClient.