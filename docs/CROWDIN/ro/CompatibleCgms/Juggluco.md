# Setări Juggluco

Dacă nu este deja configurat, atunci descărcați [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Urmați instrucțiunile [](https://www.juggluco.nl/Jugglucohelp/introhelp.html) pentru a conecta senzorul.

## Setări de bază pentru toate sistemele CGM

### Dezactivați încărcarea în Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Dezactivați orice încărcător activ în Nightscout din Juggluco.

![Dezactivați încărcarea în Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco în AAPS

Juggluco poate trimite glicemia direct la AAPS, activând SMB întotdeauna dacă folosiți un senzor [de încredere](#GettingStarted-TrustedBGSource).

Atunci când se utilizează un senzor Libre 2/2+/3/3+, citirile de minut cu minut vor fi trimise la AAPS, dar nu vor declanșa calcule de la minut la minut în AAPS.

Activați transmisia xDrip în Juggluco (nu activați aplicație Libre modificată) confirmați și salvați informațiile pachetului AAPS. Select the xDrip BG data source in AAPS.

Aplicați suficientă [netezire](./SmoothingBloodGlucoseData.md) în AAPS.

![Juggluco în AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip) =

## Juggluco to xDrip

Juggluco can send blood glucose to xDrip which will then send them to AAPS.

Activați aplicație Libre modificată în Juggluco (nu activați transmisia xDrip), confirmați și salvați informațiile pachetului dexdrip. Select the xDrip BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary, when using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute to 5 minutes readings and [also smoothen](#libre2-value-smoothing-raw-values) them.

![Juggluco to xDrip](../images/juggluco/Juggluco-xDrip+.png)
