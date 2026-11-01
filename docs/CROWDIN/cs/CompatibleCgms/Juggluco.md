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

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco do xDrip](../images/juggluco/Juggluco-xDrip+.png)
