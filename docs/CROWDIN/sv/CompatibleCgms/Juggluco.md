# Inställningar för Juggluco

Om du inte redan har gjort det: ladda ned [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Följ [instruktionerna](https://www.juggluco.nl/Jugglucohelp/introhelp.html) för att ansluta din sensor.

## Grundinställningar för alla CGM-system

### Stäng av uppladdning till Nightscout

Låt ingen annan app ladda upp data (blodsocker och behandlingar) till Nightscout.

Stäng av all aktiv uppladdning till Nightscout i Juggluco.

![Stäng av uppladdning till Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco till AAPS

Juggluco kan skicka blodsockervärden direkt till AAPS. Om du använder en [pålitlig sensor](#GettingStarted-TrustedBGSource) är SMB då alltid tillåtna.

Med en Libre 2/2+/3/3+-sensor skickas värden varje minut till AAPS, men de startar inte beräkningar varje minut i AAPS.

Slå på xDrip broadcast i Juggluco (slå inte på Patched Libre), bekräfta och spara paketinformationen för AAPS. Välj BG-källan xDrip i AAPS.

Använd tillräcklig [utjämning](./SmoothingBloodGlucoseData.md) i AAPS.

![Juggluco till AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco till xDrip

Juggluco kan skicka blodsockervärden till xDrip, som sedan skickar dem till AAPS.

Slå på Patched Libre i Juggluco (slå inte på xDrip broadcast), bekräfta och spara paketinformationen för dexdrip. Välj BG-källan xDrip i AAPS.

Använd vid behov tillräcklig [utjämning](./SmoothingBloodGlucoseData.md) i AAPS. Med en Libre 2/2+/3/3+-sensor räknar xDrip om minutvärdena till ett medelvärde var 5:e minut och [utjämnar dem också](#libre2-value-smoothing-raw-values).

![Juggluco till xDrip](../images/juggluco/Juggluco-xDrip+.png)
