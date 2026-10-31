# Eversense

Są cztery różne sposoby odczytu danych z Eversense:

- ESEL w trybie Companion
- ESEL w trybie zmodyfikowanej aplikacji (patched)
- xDrip w trybie Companion App
- Odczyt powiadomień (wbudowany w **AAPS**)

## ESEL

Pobierz i zainstaluj [aplikację ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) według tych [instrukcji](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- W ESEL otwórz menu z trzema kropkami (⋮) w prawym górnym rogu i wybierz **Settings** (dostępne też z menu ☰). W ustawieniach:
  - Włącz „Send to AAPS and xDrip” (wysyłaj do AAPS i xDrip)
  - **Wyłącz** „Send to Nightscout” (wysyłaj do Nightscout)
  - Dane BG z Eversense mogą mieć szumy, dlatego zalecamy włączenie w ESEL opcji „Smooth Data” (wygładzanie danych).

![ESEL Broadcast](../images/ESEL.png)

### Tryb Companion

Odczytuje dane z powiadomień aplikacji Eversense (działa ze standardową aplikacją Eversense, dostępne od wersji ESEL 3.0.1).

1. Używaj oficjalnej aplikacji Eversense ze Sklepu Google Play
   - Opcjonalnie, ale potrzebne do uzupełniania brakujących danych (backfill): zaloguj się na swoje konto Eversense
   - W sekcji Sync włącz automatyczną synchronizację (Auto synchronization)
2. Konfiguracja ESEL:
   - Wyłącz ustawienie „Get data from patched Eversense App” (pobieraj dane ze zmodyfikowanej aplikacji Eversense)
   - Do uzupełniania brakujących danych: włącz „Fill missing data from eversensedms.com” (uzupełniaj brakujące dane z eversensedms.com)
   - Jako adres e-mail i hasło podaj swoje dane logowania do Eversense
3. Ustaw „MM640g” jako źródło BG w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).

### Zmodyfikowana aplikacja Eversense

 Wymaga zmodyfikowanej wersji aplikacji Eversense (działa całkowicie offline, także z uzupełnianiem brakujących danych).

1. Odinstaluj aplikację Eversense (Ostrzeżenie: Twoje lokalne dane historyczne (starsze niż 1 tydzień) zostaną utracone!)

2. Zainstaluj [zmodyfikowaną aplikację Eversense](https://cr4ck3d3v3r53n53.club) i używaj jej zgodnie z opisem dostawcy

   - Uruchom aplikację Eversense, zaloguj się, połącz z nadajnikiem i używaj jej jak zwykłej aplikacji.

3. Konfiguracja ESEL:

   - Włącz ustawienie „Get data from patched Eversense App” (pobieraj dane ze zmodyfikowanej aplikacji Eversense)



![ESEL Broadcast](../images/ESELpatch.png)

If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Ustaw „MM640g” jako źródło BG w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).

## xDrip

xDrip może odczytywać powiadomienia z aplikacji producenta, tak jak ESEL. Uzupełnianie brakujących danych nie jest dostępne.

- Pobierz i zainstaluj xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- W xDrip jako źródło danych (data source) musisz wybrać „Companion App”.
- Wybierz xDrip w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).
- Dostosuj ustawienia xDrip według opisu na stronie [Ustawienia xDrip](../CompatibleCgms/xDrip.md).
- Włącz w AAPS [Wygładzanie wykładnicze](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## Odczyt powiadomień

**AAPS** może odczytywać wartości glukozy bezpośrednio z powiadomień oficjalnej aplikacji Eversense, bez żadnej innej aplikacji pośredniej. Uzupełnianie brakujących danych nie jest dostępne.

- Wybierz **Odczyt powiadomień** w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source) i zezwól **AAPS** na dostęp do powiadomień, gdy pojawi się prośba.
- Upewnij się, że aplikacja Eversense pokazuje aktualną wartość glukozy w swoim powiadomieniu.

```{warning}
Odczyty BG nie zawsze przychodzą co 5 minut i mogą pojawić się duplikaty.
```