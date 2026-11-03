# Setări Juggluco

Dacă nu este deja configurat, atunci descărcați [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Urmați [instrucțiunile](https://www.juggluco.nl/Jugglucohelp/introhelp.html) pentru a conecta senzorul.

## Setări de bază pentru toate sistemele CGM

### Dezactivați încărcarea în Nightscout

Nu permiteți niciunei alte aplicații să încarce date (glicemie și tratamente) în Nightscout.

Dezactivați orice încărcător activ în Nightscout din Juggluco.

![Dezactivați încărcarea în Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco în AAPS

Juggluco poate trimite glicemia direct la AAPS, activând SMB întotdeauna dacă folosiți un senzor [de încredere](#GettingStarted-TrustedBGSource).

Atunci când se utilizează un senzor Libre 2/2+/3/3+, citirile de minut cu minut vor fi trimise la AAPS, dar nu vor declanșa calcule de la minut la minut în AAPS.

Activați „xDrip broadcast” în Juggluco (nu activați „Patched Libre”), confirmați și salvați informațiile pachetului AAPS. Select the xDrip BG data source in AAPS.

Aplicați suficientă [netezire](./SmoothingBloodGlucoseData.md) în AAPS.

![Juggluco în AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco în xDrip

Juggluco can send blood glucose to xDrip which will then send them to AAPS.

Activați „Patched Libre” în Juggluco (nu activați „xDrip broadcast”), confirmați și salvați informațiile pachetului dexdrip. Select the xDrip BG data source in AAPS.

Aplicați suficientă [netezire](./SmoothingBloodGlucoseData.md) în AAPS, dacă este necesar. Când folosiți un senzor Libre 2/2+/3/3+, xDrip face media citirilor de la minut la minut în citiri la 5 minute și [le și netezește](#libre2-value-smoothing-raw-values).

![Juggluco în xDrip](../images/juggluco/Juggluco-xDrip+.png)
