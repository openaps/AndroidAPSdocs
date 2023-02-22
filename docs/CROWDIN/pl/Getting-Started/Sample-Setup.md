# Sample setup: Samsung S7, Dana RS, Dexcom G6 and Sony Smartwatch

![Przykładowa konfiguracja](../images/SampleSetup.png)

## Opis

W tym zestawie, telefon Samsung Galaxy S7 jest wykorzystywany jako centrum sterujące loopa. The slightly modified Dexcom App reads glucose values from the Dexcom G6 CGM. AndroidAPS is used to control the Dana RS insulin pump from Korean manufacturer SOOIL via bluetooth. Dodatkowe urządzenia nie są wymagane.

Ponieważ aplikacja Dexcom oferuje ograniczone możliwości ustawienia alarmów, do tego celu używamy dodatkowej aplikacjai typu open source - xDrip +, może być ona używana nie tylko do określenia alarmów dla niskich i wysokich stanów cukrów ale również określenia dodatkowych alarmów zgodnych z indywidualnymi potrzebami.

Dodatkowo można skorzystać z zegarka z systemem Android wear do pokazywania wartości cukrów oraz innych informacji dostepnych w AndroidAPS (w tym przykladowym zestawie korzystamy z Sony Smartwatch 3 (SWR50)). Zegarek może nawet służyć do sterowania AndroidAPS (tj. podawanie w sposób dyskretny bolusa na posiłek).

System działa w trybie offline. Oznacza to że dla prawidłowego dziłania nie ma potrzeby posiadania połączenia do Internetu na telefonie.

Niemniej jednak, dane są automatycznie przesyłane do Nightscout "w chmurze" po nawiązaniu połączenia do Internetu. W ten sposób można zapewnić kompleksowe raporty podczas wizit u lekarza lub współdzielić bieżące wartości z członkami rodziny. Można również ograniczyć możliwość wysylania danych do Nightscout tylko do sytuacji w której aktywne jest połączenie do zdefiniowanych sieci WI-FI, w ten sposób możesz wciąż korzystać z różnych raportów dostepnych w Nightscout.

## Wymagane elementy

1. Samsung Galaxy S7
    
    * Alternatives: see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Inne pompy: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Pompa Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Some old Medtronic pumps (additionally needed: RileyLink/Gnarl hardware, Android Phone with bluetooth low energy / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Other pumps might be available in the future, see [future possible pump drivers](Future-possible-Pump-Drivers.md) for details.

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatives: see list of possible [BG sources](../Configuration/BG-Source.md)

4. Opcjonalnie: Sony Smartwatch 3 (SWR50)
    
    * Alternatives: All [watches with Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) should work fine, for details see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS (OS must be Android Wear)

## Konfiguracja Nightscout

Szczegóły znaidują się pod [Ustawienia Nightscout](../Installing-AndroidAPS/Nightscout.md)

## Ustawienia komputera

Aby móc skompilować AAPS z dostępnego publiczne kodu żródłowego potrzebujesz na swoim komputerze lub notebooku aplikacji Android Studio (jest ona dosępna dla tych systemów operacyjnych: Windows, Mac, Linux). Szczegółową instrukcje można znaleźć w [jak stworzyć APK](../Installing-AndroidAPS/Building-APK.md).

Prosimy o cierpliwość podczas instalacji Android Studio, aplikacja ta pobiera wiele dodatkowych komponentów, po zainstalowaniu na komputerze.

## Konfiguracja telefonu

![Telefon](../images/SampleSetupSmartphone.png)

### Sprawdź wersje oprogramowania na telefonie

* Menu > Settings > Phone info > Software info: At least "Android-Version 8.0" (successfully tested up to Android version 8.0.0 Oreo - Samsung Experience Version 9.0) 
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

Oryginalna aplikacja Dexcom ze sklepu Google Play nie będzie działać, ponieważ nie rozgłasza wartości BG do innych aplikacji. W związku z tym wymagana jest wersja aplikacji nieco zmodyfikowana. Tylko ta zmodyfikowana wersja może się komunikować z AAPS. Dodatkowo ta wersja aplikacji może być używana z telefonami z Androidem które nie znaidują się na [liście zgodności Dexcom](https://www.dexcom.com/dexcom-international-compatibility).

To do this perform the following steps on your smartphone:

1. Jeśli oryginalny aplikacji Dexcom jest już zainstalowana: 
    * Zastopuj sensor
    * Uninstall app via Menu > Settings > Apps > Dexcom G6 Mobile > Uninstall
2. Download and install the [BYODA Dexcom ap](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)
3. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
4. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgent low `55mg/dl` / `3.1mmol/l` (cannot be disabled)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## Instalacja AndroidAPS

1. Follow the instructions to [build the APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)
2. [Transfer](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) the generated APK to your phone
3. [Skonfigurować AndroidAPS](../Configuration/Config-Builder.md) zgodie z własnymi potrzebami używając Asystenta ustawień lub ręcznie
4. W tej przykładowej konfiguracji używamy (m.in.)

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.md))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client activated (see [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## Instalacja xDrip +

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Korzystając ze swojego telefonu pobierz najnowszą wersję APK xDrip + <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - nie używaj wersji z Google Play Store!
2. Zainstaluj xDrip + wybierając pobrany plik APK.
3. Uruchom xDrip + i dokonaj następujących ustawień (wejdz do menu w lewym górnym rogu) 
    * Ustawienia > Alarmy i Alerty > Glukozy poziomu listy alertów > Stwórz alarm (niski i wysoki poziom) zgodnie z własnymi potrzebami.
    * Obecne alarmy mogą zostać zmienione przez naciśnięcie i przytrzymanie ustawionego alarmu.
    * Ustawienia > Alarmy i Alerty > Alarmy kalibracji: wyłączone (przypomnienie o kalibracji ralizowane jest z wykorzystaniem aplikacji Dexcom)
    * Ustawienia > Sprzętowe żródła danych > 640G / EverSense
    * Ustawienia > Inter-app settings > Accept Calibrations > `ON`
    * Menu > Start sensor (is only "pro forma" and has nothing to do with the running G6 sensor. ,jes ont wymagany gydż w innym przypadku regularnie będzie wyświetlany informacja o błędzie). 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.md).

### Przykład ustawienia alarmu

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Wyłącz opcję oszczędzania energii

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Opcjonalnie: Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Zegarek może nawet służyć do sterowania AndroidAPS (tj. podawanie w sposób dyskretny bolusa na posiłek). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Zainstaluj aplikację "Android Wear" na smartfonie za pośrednictwem sklepu Google Play i podłącz smartwatch zgodnie z instrukcjami.
* W AAPS wybierz menu hamburgera (lewy górny róg)> Konfiguracja> Ogólne (u dołu listy)> Oprogramowanie Wear> aktywuj po lewej stronie, kliknij koło zębate> Ustawienia Wear ` Sterowanie z zegarka`
* Na zegarku smartwatch: naciśnij i przytrzymaj ekran, aby zmienić watchface i wybierz `AAPSv2`
* W razie potrzeby ponownie uruchom oba urządzenia.

## Ustawienia pompy

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)