# Nastavenia Juggluco

Ak ho ešte nemáte, stiahnite si [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Pri pripojení senzora postupujte podľa [návodu](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Základné nastavenia pre všetky systémy CGM

### Vypnite nahrávanie do Nightscoutu

Nedovoľte žiadnej inej aplikácii nahrávať dáta (glykémiu a ošetrenia) do Nightscoutu.

V Juggluco vypnite akékoľvek aktívne nahrávanie do Nightscoutu.

![Vypnutie nahrávania do Nightscoutu](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco do AAPS

Juggluco môže posielať glykémiu priamo do AAPS, čo pri použití [dôveryhodného senzora](#GettingStarted-TrustedBGSource) povolí SMB stále.

Pri senzore Libre 2/2+/3/3+ sa do AAPS budú posielať hodnoty každú minútu, ale AAPS nebude podľa nich počítať každú minútu.

V Juggluco zapnite xDrip broadcast (nezapínajte Patched Libre), potvrďte a uložte informácie o balíku AAPS. V AAPS vyberte zdroj glykémie xDrip.

V AAPS použite dostatočné [vyhladzovanie](./SmoothingBloodGlucoseData.md).

![Juggluco do AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco do xDrip

Juggluco môže posielať glykémiu do xDrip, ktorý ju potom pošle do AAPS.

V Juggluco zapnite Patched Libre (nezapínajte xDrip broadcast), potvrďte a uložte informácie o balíku dexdrip. V AAPS vyberte zdroj glykémie xDrip.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco do xDrip](../images/juggluco/Juggluco-xDrip+.png)
