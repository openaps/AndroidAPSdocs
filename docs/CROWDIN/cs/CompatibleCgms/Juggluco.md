# Nastavení Juggluco

Pokud ještě nemáte Juggluco nastavené, stáhněte si [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Pro připojení senzoru postupujte podle [návodu](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Základní nastavení pro všechny systémy CGM

### Vypněte nahrávání do Nightscoutu

Nedovolte žádné jiné aplikaci nahrávat data (glykémii a ošetření) do Nightscoutu.

V Juggluco vypněte veškeré aktivní nahrávání do Nightscoutu.

![Vypnutí nahrávání do Nightscoutu](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco do AAPS

Juggluco umí posílat glykémii přímo do AAPS, takže pokud používáte [důvěryhodný senzor](#GettingStarted-TrustedBGSource), jsou SMB povoleny po celou dobu.

Při použití senzoru Libre 2/2+/3/3+ se do AAPS posílají hodnoty každou minutu, ale AAPS kvůli nim nepočítá každou minutu.

V Juggluco zapněte xDrip broadcast (Patched Libre nezapínejte), potvrďte a uložte informace o balíčku AAPS. V AAPS vyberte zdroj dat glykémie xDrip.

V AAPS použijte dostatečné [vyhlazování](./SmoothingBloodGlucoseData.md).

![Juggluco do AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco do xDrip

Juggluco umí posílat glykémii do xDrip, který ji pak pošle do AAPS.

V Juggluco zapněte Patched Libre (xDrip broadcast nezapínejte), potvrďte a uložte informace o balíčku dexdrip. V AAPS vyberte zdroj dat glykémie xDrip.

V případě potřeby použijte v AAPS dostatečné [vyhlazování](./SmoothingBloodGlucoseData.md); při použití senzoru Libre 2/2+/3/3+ xDrip zprůměruje minutové hodnoty na 5minutové a [také je vyhladí](#libre2-value-smoothing-raw-values).

![Juggluco do xDrip](../images/juggluco/Juggluco-xDrip+.png)
