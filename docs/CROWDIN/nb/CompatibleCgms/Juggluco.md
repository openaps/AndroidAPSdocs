# Juggluco

Hvis Juggluco ikke allerede er satt opp, laster du ned [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Følg [instruksjonene](https://www.juggluco.nl/Jugglucohelp/introhelp.html) for å koble til sensoren din.

## Grunninnstillinger for alle CGM-systemer

### Deaktiver Nightscout-opplaster

Du bør ikke la noen annen app laste opp data (blodsukker og behandlinger) til Nightscout.

Deaktiver all aktiv opplasting til Nightscout i Juggluco.

![Deaktiver opplasting til Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco til AAPS

Juggluco kan sende blodsukker direkte til AAPS, noe som alltid gjør SMB-er mulig hvis du bruker en [pålitelig sensor](#GettingStarted-TrustedBGSource).

Når du bruker en Libre 2/2+/3/3+-sensor, sendes målinger hvert minutt til AAPS, men de utløser ikke beregninger hvert minutt i AAPS.

Aktiver xDrip broadcast i Juggluco (ikke aktiver Patched Libre), bekreft og lagre pakkeinformasjonen for AAPS. Velg xDrip+ BS som BS-kilde i AAPS.

Bruk tilstrekkelig [utjevning](./SmoothingBloodGlucoseData.md) i AAPS.

![Juggluco til AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco til xDrip

Juggluco kan sende blodsukker til xDrip, som så sender det videre til AAPS.

Aktiver Patched Libre i Juggluco (ikke aktiver xDrip broadcast), bekreft og lagre pakkeinformasjonen for dexdrip. Velg xDrip+ BS som BS-kilde i AAPS.

Bruk tilstrekkelig [utjevning](./SmoothingBloodGlucoseData.md) i AAPS om nødvendig. Når du bruker en Libre 2/2+/3/3+-sensor, lager xDrip et gjennomsnitt av målingene hvert minutt til 5-minutts målinger og [jevner dem også ut](#libre2-value-smoothing-raw-values).

![Juggluco til xDrip](../images/juggluco/Juggluco-xDrip+.png)
