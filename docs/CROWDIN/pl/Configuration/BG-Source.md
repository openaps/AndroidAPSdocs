# Ogólne zasady używania systemów CGM

## Higiena CGM

Niezależnie od tego, jakiego systemu CGM używasz, jeśli zamierzasz korzystać z kalibracji opartej na krwi, istnieją pewne bardzo jasne zasady, które powinieneś zastosować, niezależnie od tego, czy używasz oprogramowania DIY CGM, czy oficjalnych aplikacji.

* Upewnij się, że ręce i akcesoria do glukometru są czyste.
* Spróbuj kalibrować, gdy masz w miarę stabilny cukier (seria kropek z płaską strzałką, zwykle wystarcza 15-30 minut).
* Unikaj kalibracji, gdy poziom glukozy zmienia się w górę lub w dół. 
* W oficjalnych systemach CGM wykonaj „wymaganą” kalibrację - w aplikacjach pojawi się monit o sprawdzenie BG raz lub dwa razy dziennie. W systemach DIY możesz nie być poproszony/poproszona o wykonanie kalibracji i powinieneś/powinnaś uważać na kontynuowanie pracy systemu bez kalibracji.
* Jeśli to możliwe, wykonaj kalibrację z niektórymi odczytami w niższym zakresie (4–5 mmoli / l lub 72–90 mg / dl), a niektóre na nieco wyższym poziomie (7-9 mmoli / l lub 126–160 mg / dl), taki sposób wykonania kalibracji zapewni lepszy zakres dla kalibracji punkt / nachylenie.

# Źródła danych o poziomie cukru we krwi (BG) - CGM/FGM

## Dla użytkowników Dexcom

### Dexcom G6: Ogólne wskazówki dotyczące zapętlania

Szczegółowe informacje na temat ustawiania sensora [Dexcom G6](../Configuration/Dexcom.md) i rozwiązania typowych problemów z Dexcom G6 można znaleźć na stronie Dexcom G6.

Oczywiste jest, że korzystanie z G6 jest być może nieco bardziej skomplikowane niż wygląda to na początku. Aby bezpiecznie z niego korzystać, należy pamiętać o kilku punktach:

* Jeśli używasz natywnych danych z kodem kalibracji w xDrip lub Spike, najbezpieczniejszą rzeczą do zrobienia jest niedopuszczenie do ponownego uruchomienia czujnika.
* Jeśli musisz użyć ponownego uruchomienia, upewnij się, że wykonasz kalibrację o tej porze dnia, w której możesz obserwować zmianę i skalibrować, jeśli to konieczne. 
* Jeśli ponownie uruchamiasz sensor, zrób to bez kalibracji fabrycznej, aby uzyskać najbezpieczniejsze wyniki w dniach 11 i 12, lub upewnij się, że jesteś gotowy do kalibracji i kontroluj zmiany.
* Tak zwane „wstępne namaczanie” (sensor zamocowany wcześniej bez nadajnika, dzięki czemu „przyzwyczaja się” do płynu tkankowego) z kalibracją fabryczną może prowadzić do odchyleń w poziomach glukozy. Jeśli pracujesz z namaczaniem wstępnym, aby uzyskać najlepsze wyniki, prawdopodobnie będziesz musiał skalibrować sensor.
* Jeśli nie chcesz zwracać uwagi na odchylenia, które mogą mieć miejsce, może być lepiej wrócić do ustawień bez kalibracji fabrycznej i korzystać z systemu tak jak z G5 (z „obowiązkową kalibracją”).

Aby dowiedzieć się więcej o szczegółach i powodach tych zaleceń, przeczytaj [ kompletny artykuł ](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) opublikowany przez Tima Street na stronie [ www.diabettech.com ](http://www.diabettech.com).

### Jeśli używasz G6 z xdrip+

* Jeśli jeszcze nie jest zainstalowany, pobierz [ xdrip ](https://github.com/NightscoutFoundation/xDrip) i postępuj zgodnie z instrukcjami dla nightscout ([ G4 bez udostępniania ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [ G4 z udostępnianiem](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [ G5 ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support) ).
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.
* Dostosuj ustawienia w xDrip+ zgodnie ze stroną ustawień [ xDrip+ ](../Configuration/xdrip.md)

### Jeśli używasz G5 z xdrip+

* Jeśli jeszcze nie jest zainstalowany, pobierz [ xdrip ](https://github.com/NightscoutFoundation/xDrip) i postępuj zgodnie z instrukcjami dla nightscout ([ G4 bez udostępniania ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [ G4 z udostępnianiem](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [ G5 ](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support) ).
* W Xdrip przejdź do Ustawienia> Zgodność z aplikacją Interapp> Lokalna transmisja danych i wybierz WŁ.
* W xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> Zatwierdzaj terapię i wybierz WYŁ.
* Jeśli chcesz używać AndroidAPS do wprowadzania kalibracji, wówczas w xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> > Akceptuj Kalibracje i ustaw na WŁ. Możesz również przejrzeć opcje w ustawieniach > mniej typowe ustawienia > Zaawansowane ustawienia kalibracji.
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.

### Jeśli używasz G5 lub G6 ze zmodyfikowaną aplikacją Dexcom  


* Pobierz apk z [ https://github.com/dexcomapp/dexcomapp ](https://github.com/dexcomapp/dexcomapp) i wybierz wersję, która pasuje do twoich potrzeb (mg/dl lub mmol/l, G5 lub G6).
* Zatrzymaj działanie sensora i odinstaluj oryginalną aplikacje Dexcom - jeśli jeszcze do tej pory tego nie zrobiłeś.
* Zainstaluj ściągniętą aplikację.
* Uruchom sensor
* W zakładce AndroidAPS Konfiguracja > Źródło BG zaznacz DexcomG5 App (patched).

### Jeśli używasz Dexcom G4 z kablem USB OTG (wysyłka danych do Nightscout)  


* Pobierz aplikację Nightscout Uploader z Play Store i postępuj zgodnie z instrukcjami na [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* W Ustawieniach AndroidAPS w części dotyczącej NSClient wpisz adres swojego serwera Nightscout i tajny klucz API.
* W zakładce AndroidAPS Konfiguracjia > Źródło BG zaznacz NSClient.

## Dla użytkowników Libre z nakładką Bluetooth  


Aby używać sensora Libre w charakterze pełnoprawnego systemu CGM przekazującego odczyt glukozy co 5 minut należy zakupić oddzielny adapter NFC-Bluetooth. Kompatybilne urządzenia to:

* czytnik MiaoMiao <https://www.miaomiao.cool/>
* czytnik Blucon Nightrider <https://www.ambrosiasys.com/howit>
* czytnik BlueReader <https://bluetoolz.de/blueorder/#home>
* zegarek Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Jeśli używasz xdrip...  


* Jeśli jeszcze nie jest zainstalowany, pobierz i zainstaluj xdrip i postępuj zgodnie z instrukcjami na [ LimiTTEer ](https://github.com/JoernL/LimiTTer), [ Libre Alarm ](https://github.com/pimpimmi/LibreAlarm/wiki) lub [ BlueReader ](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([ Sprzęt ](https://bluetoolz.de/wordpress/)).
* W Xdrip przejdź do Ustawienia> Zgodność z aplikacją Interapp> Lokalna transmisja danych i wybierz WŁ.
* W xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> Zatwierdzaj terapię i wybierz WYŁ.
* Jeśli chcesz używać AndroidAPS do wprowadzania kalibracji, wówczas w xdrip przejdź do Ustawienia> Zgodność z aplikacjami interapp> > Akceptuj Kalibracje i ustaw na WŁ. Możesz również przejrzeć opcje w ustawieniach > mniej typowe ustawienia > Zaawansowane ustawienia kalibracji.
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> xdrip.
* Ustawienia w xDrip+ ze zrzutami ekranu znajdziesz na stronie [ ustawień xDrip+ ](../Configuration/xdrip.md)

### Jeśli używasz Glimp...  


* Jeżeli nie masz zainstalowanego i skonfigurowanego programu Glimp - pobierz aplikację i stosuj się do wskazówek zawartych na stronie [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Wybierz w AndroidAPS> Konfiguracja> Źródło BG> Glimp.

## Dla użytkowników Eversense  


Najprostszym sposobem użycia Eversense z AndroidAPS jest zainstalowanie zmodyfikowanej aplikacji Eversense (i odinstalowanie oryginalnej aplikacji Eversense).

**Ostrzeżenie: Odinstalowanie starej aplikacji spowoduje utratę lokalnych danych historycznych (starszych niż tydzień)!**

Aby korzystać z danych Eversense w AndroidAPS, musisz zainstalować aplikację ESEL i aktywować tam „Wyślij do AAPS i xDrip”. W konfiguracji AndroidAPS > źródło BG wybierz „MM640g”. Ponieważ dane glukozy z Eversense mogą być czasami „zaszumione”, w ESEL należy włączyć „gładkie dane”. Jest to lepsze niż wybranie opcji „Zawsze używaj krótkiej średniej delty zamiast prostej delty” w AAPS.

Możesz znaleźć inną instrukcję do używania xDrip z Eversense [ tutaj ](https://github.com/BernhardRo/Esel/tree/master/apk).

## Dla użytkowników pomp serii MM640G lub MM630G  


* W pierwszej kolejności należy pobrać, zainstalować i skonfigurować [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) zgodnie z instrukcjami zawartymi na stronie [http://nightscout. pl/aplikacje/uploader-640g/](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* W aplikacji 600 Series Uploader wybieramy Ustawienia > Wyślij do xDrip+ i zaznaczamy jako włączone.
* W zakładce AndroidAPS Konfiguracja -> Źródło BG zaznacz MM640G.

## Dla użytkowników PocTech CT-100  


* Zainstaluj aplikację PocTech
* W zakładce AndroidAPS Konfiguracja > Źródło BG zaznacz PocTech.

## Jeśli masz inny zestaw CGM, który wysyła dane do Nightscout wtedy  


Jeśli masz inny zestaw CGM, który wysyła dane do [ Nightscout ](http://www.nightscout.info) wtedy  


* W Ustawieniach AndroidAPS w części dotyczącej NSClient wpisz adres swojego serwera Nightscout i tajny klucz API.
* W zakładce AndroidAPS Konfiguracjia -> Źródło BG zaznacz NSClient.