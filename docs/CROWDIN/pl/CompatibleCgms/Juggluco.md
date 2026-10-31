# Ustawienia Juggluco

Jeśli jeszcze go nie masz, pobierz [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Połącz sensor według [instrukcji](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Podstawowe ustawienia dla wszystkich systemów CGM

### Wyłącz uploader Nightscout

Nie pozwalaj żadnej innej aplikacji wysyłać danych (glikemii i leczenia) do Nightscout.

Wyłącz w Juggluco każde aktywne wysyłanie danych do Nightscout.

![Wyłącz wysyłanie do Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco do AAPS

Juggluco może wysyłać glikemię bezpośrednio do AAPS. Jeśli używasz [zaufanego sensora](#GettingStarted-TrustedBGSource), SMB są wtedy dozwolone zawsze.

Przy sensorze Libre 2/2+/3/3+ odczyty co minutę są wysyłane do AAPS, ale nie powodują obliczeń w AAPS co minutę.

Włącz w Juggluco xDrip broadcast (nie włączaj Patched Libre), potwierdź i zapisz informacje o pakiecie AAPS. Wybierz w AAPS źródło danych BG xDrip.

Ustaw w AAPS odpowiednie [wygładzanie](./SmoothingBloodGlucoseData.md).

![Juggluco do AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco do xDrip

Juggluco może wysyłać glikemię do xDrip, który potem przesyła ją do AAPS.

Włącz w Juggluco Patched Libre (nie włączaj xDrip broadcast), potwierdź i zapisz informacje o pakiecie dexdrip. Wybierz w AAPS źródło danych BG xDrip.

W razie potrzeby ustaw w AAPS odpowiednie [wygładzanie](./SmoothingBloodGlucoseData.md). Przy sensorze Libre 2/2+/3/3+ xDrip uśrednia odczyty co minutę do odczytów co 5 minut i [dodatkowo je wygładza](#libre2-value-smoothing-raw-values).

![Juggluco do xDrip](../images/juggluco/Juggluco-xDrip+.png)
