# Przykładowy zestaw: Samsung S7, Dana R, Dexcom G5 i Sony Smartwatch

![Przykładowa konfiguracja](../images/SampleSetup.png)

## Opis

W tym zestawie, telefon Samsung Galaxy S7 jest wykorzystywany jako centrum sterujące loopa. Zmodyfikowana aplikacja Dexcom odczytuje wartości glukozy z Dexcom G5 CGM. AndroidAPS jest używany do sterowania pompą insulinową Dana R od koreańskiego producenta SOOIL przez bluetooth. Dodatkowe urządzenia nie są wymagane.

Ponieważ aplikacja Dexcom oferuje ograniczone możliwości ustawienia alarmów, do tego celu używamy dodatkowej aplikacjai typu open source - xDrip +, może być ona używana nie tylko do określenia alarmów dla niskich i wysokich stanów cukrów ale również określenia dodatkowych alarmów zgodnych z indywidualnymi potrzebami.

Dodatkowo można skorzystać z zegarka z systemem Android wear do pokazywania wartości cukrów oraz innych informacji dostepnych w AndroidAPS (w tym przykladowym zestawie korzystamy z Sony Smartwatch 3 (SWR50)). Zegarek może nawet służyć do sterowania AndroidAPS (tj. podawanie w sposób dyskretny bolusa na posiłek).

System działa w trybie offline. Oznacza to że dla prawidłowego dziłania nie ma potrzeby posiadania połączenia do Internetu na telefonie.

Niemniej jednak, dane są automatycznie przesyłane do Nightscout "w chmurze" po nawiązaniu połączenia do Internetu. W ten sposób można zapewnić kompleksowe raporty podczas wizit u lekarza lub współdzielić bieżące wartości z członkami rodziny. Można również ograniczyć możliwość wysylania danych do Nightscout tylko do sytuacji w której aktywne jest połączenie do zdefiniowanych sieci WI-FI, w ten sposób możesz wciąż korzystać z różnych raportów dostepnych w Nightscout.

## Wymagane elementy

1. Samsung Galaxy S7
    
    * Inne telefony: sprawdź [listę sprawdzonych telefonów i zegarków](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

2. pompa insulinowa [DanaR](http://www.sooil.com/eng/product/) lub Dana RS
    
    * Inne pompy: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * Inne pompy mogą być dostępne w przyszłości, sprawdź [sterowniki do przyszłych pomp](Future-possible-Pump-Drivers.md).

3. [Dexcom G5](https://dexcom.com)
    
    * Alternatives: see list of possible [BG sources](../Configuration/BG-Source.rst)

4. Opcjonalnie: Sony Smartwatch 3 (SWR50)
    
    * Inne zegarki: sprawdź [listę sprawdzonych telefonów i zegarków](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) dla AndroidAPS (tylko zegarki z Android Wear są wspierane)

## Konfiguracja Nightscout

Szczegóły znaidują się pod [Ustawienia Nightscout](../Installing-AndroidAPS/Nightscout.md)

## Ustawienia komputera

Aby móc skompilować AAPS z dostępnego publiczne kodu żródłowego potrzebujesz na swoim komputerze lub notebooku aplikacji Android Studio (jest ona dosępna dla tych systemów operacyjnych: Windows, Mac, Linux). Szczegółową instrukcje można znaleźć w [jak stworzyć APK](../Installing-AndroidAPS/Building-APK.md).

Prosimy o cierpliwość podczas instalacji Android Studio, aplikacja ta pobiera wiele dodatkowych komponentów, po zainstalowaniu na komputerze.

## Konfiguracja telefonu

![Telefon](../images/SampleSetupSmartphone.png)

### Sprawdź wersje oprogramowania na telefonie

* Ustawienia > Informacje o telefonie > wersja androida: "Wymagana przynajmniej wersja Android 7.0" (przetestowano pomyślnie do wersji Android 8.0.0 Oreo - Samsung Experience Wersja 9.0) 
* Aby przeprowadzić update oprogramowania: Ustawienia -> Informacje o telefonie -> Aktualizacja systemu

### Zezwól na instalację aplikacji z nieznanych źródeł

Menu > Ustawienia > zabezpieczenia urządzenia > Nieznane żródła > suwak po prawej stronie (= aktywny)

Ze względów bezpieczeństwa to ustawienie powinna być ustawione ponownie na nieaktywne po zakończeniu instalacji wszystkich aplikacji tu opisanych.

### Włącz Bluetooth

1. Menu > Ustawienia > Połączenia > Bluetooth > suwak po prawej stronie (= aktywny)
2. Menu > Ustawienia > Połączenia > Lokalizacja > suwak po prawej stronie (= aktywny)

Usługa lokalizacyjne ("GPS") musi być aktywna aby Bluetooth działał poprawnie.

### Instalacja aplikacji Dexcom (w wersji zmodyfikowanej)

![Aplikacja Dexcom patched](../images/SampleSetupDexApp.png)

Oryginalna aplikacja Dexcom ze sklepu Google Play nie będzie działać, ponieważ nie rozgłasza wartości BG do innych aplikacji. W związku z tym wymagana jest wersja aplikacji nieco zmodyfikowana. Tylko ta zmodyfikowana wersja może się komunikować z AAPS. Dodatkowo ta wersja aplikacji może być używana z telefonami z Androidem które nie znaidują się na [liście zgodności Dexcom](https://www.dexcom.com/dexcom-international-compatibility). Wersję mmol/l i mg/dl zmodyfikowanej aplikacji Dexcom są dostępne pod adresem https://github.com/dexcomapp/dexcomapp?files=1.

Aby zainstalować tą wersje postepują zgodnie z poniższymi krokami:

1. Jeśli oryginalny aplikacji Dexcom jest już zainstalowana: 
    * Zastopuj sensor
    * Odinstaluj aplikacji za pomocą Menu > Ustawienia > Aplikacje > Dexcom G5 Mobile > odinstaluj
2. Pobierz zmodyfikowano aplikację Dexcom (wybierz wersje mg/dl lub mmol/l w zależności od potrzeby): <https://github.com/dexcomapp/dexcomapp?files=1>
3. Zainstaluj zmodyfikowano aplikacje Dexcom na telefonie (= wybierz pobrany plik APK)
4. Uruchom zmodyfikowaną aplikacje Dexcom, wystartuj sensor zgodnie z podanymi instrukcjami od producenta i poczekaj, aż zakończy się faza rozgrzewania.
5. Jak tylo dwie pierwsze kalibracje zostaną wprowadzone poprawnie i zmodyfikowana aplikacja Dexcom zacznie pokazywać wartości cukrów, ustaw alarmy (menu w lewej górnej stronie ekranu) zgodnie z tymi zaleceniami: 
    * Pilne niskie `55 mg/dl` / `3.1mmol / l` (nie może być wyłączone)
    * Niskie `Wył`
    * Wysokie `Wył`
    * Szybokość wzrostu `Wył`
    * Poziom spadku `Wył`
    * Utrata sygnału `Wył`

## Instalacja AndroidAPS

1. Postępuj zgodnie z instrukcjami [jak zbudować plik APK](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Przenieś](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) przygotowany plik APK do telefonu
3. [Skonfigurować AndroidAPS](../Configuration/Config-Builder.md) zgodie z własnymi potrzebami używając Asystenta ustawień lub ręcznie
4. W tej przykładowej konfiguracji używamy (m.in.)

* BG source: `Dexcom G5 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.rst))

![Ustawienia G5](../images/SampleSetupG5Settings.png)

* NS Client aktywowany (zobacz [NS Client](../Configuration/Config-Builder#ns-profile) i [konfiguracja Nightscout](../Installing-AndroidAPS/Nightscout.md))

## Instalacja xDrip +

xDrip + jest kolejną dojrzało aplikacją typu open source która oferuje dużo możliwości. W naszej konfiguracji przeciwnie do tego do czego został stworzony xDrip+, nie jest on używany do odczytywania wartości cukrów z Dexcom G5, ale służy on do alarmowania oraz do wyświetlania obecnej wartości glukozy wliczając w to krzywą pokazywane na głównym ekranie twojego telefonu z Androidem za pomocą widgetu. Dzięki xDrip+ alarmy mogą być bardziej indywidualnie ustawione niż jest to możliwe z wykorzystaniem aplikacji Dexcoma, AAPS lub Nightscout (nie ma ograniczeń w doborze dźwięków, różnych alarmów w zależności od pory dnia i nocy).

1. Korzystając ze swojego telefonu pobierz najnowszą wersję APK xDrip + <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - nie używaj wersji z Google Play Store!
2. Zainstaluj xDrip + wybierając pobrany plik APK.
3. Uruchom xDrip + i dokonaj następujących ustawień (wejdz do menu w lewym górnym rogu) 
    * Ustawienia > Alarmy i Alerty > Glukozy poziomu listy alertów > Stwórz alarm (niski i wysoki poziom) zgodnie z własnymi potrzebami. 
    * Obecne alarmy mogą zostać zmienione przez naciśnięcie i przytrzymanie ustawionego alarmu.
    * Ustawienia > Alarmy i Alerty > Alarmy kalibracji: wyłączone (przypomnienie o kalibracji ralizowane jest z wykorzystaniem aplikacji Dexcom)
    * Ustawienia > Sprzętowe żródła danych > 640G / EverSense
    * Ustawienia > Inter-app settings > Accept Calibrations > `ON`
    * Menu > Start sensora (jest wykonywany tylko "pro forma" i nie ma nic wspólnego z faktycznym uruchomieniem sensora G5. ,jes ont wymagany gydż w innym przypadku regularnie będzie wyświetlany informacja o błędzie). 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.rst).

### Przykład ustawienia alarmu

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Wyłącz opcję oszczędzania energii

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G5 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Opcjonalnie: Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Zegarek może nawet służyć do sterowania AndroidAPS (tj. podawanie w sposób dyskretny bolusa na posiłek). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Zainstaluj aplikację "Android Wear" na smartfonie za pośrednictwem sklepu Google Play i podłącz smartwatch zgodnie z instrukcjami.
* W AAPS wybierz menu hamburgera (lewy górny róg)> Konfiguracja> Ogólne (u dołu listy)> Oprogramowanie Wear> aktywuj po lewej stronie, kliknij koło zębate> Ustawienia Wear ` Sterowanie z zegarka`
* Na zegarku smartwatch: naciśnij i przytrzymaj ekran, aby zmienić watchface i wybierz `AAPSv2`
* W razie potrzeby ponownie uruchom oba urządzenia.

## Ustawienia pompy

see [DanaR pump](../Configuration/DanaR-Insulin-Pump.md)