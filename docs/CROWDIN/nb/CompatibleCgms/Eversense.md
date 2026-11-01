# Eversense

Det finnes fire ulike måter å få tak i målingene fra Eversense på:

- ESEL i companion-modus
- ESEL i modifisert modus
- xDrip som hjelpeapp (companion app)
- Varslingsleser (innebygd i **AAPS**)

## ESEL

Hent og installer [ESEL-appen](https://github.com/BernhardRo/Esel/tree/master/apk) ved å følge disse [instruksjonene](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- I ESEL åpner du menyen med tre prikker (⋮) øverst til høyre og velger **Settings** (innstillinger; finnes også i ☰-menyen). I innstillingene:
  - Slå på «Send to AAPS and xDrip» (send til AAPS og xDrip)
  - **Slå av** «Send to Nightscout» (send til Nightscout)
  - Siden BS-dataene fra Eversense kan ha mye støy, anbefales det å slå på «Smooth Data» (jevn ut data) i ESEL.

![ESEL-kringkasting](../images/ESEL.png)

### Companion-modus

Leser dataene fra varslingene til Eversense-appen (fungerer med den vanlige Eversense-appen, tilgjengelig fra ESEL versjon 3.0.1).

1. Bruk den offisielle Eversense-appen fra Google Play Store
   - Valgfritt, men nødvendig for å fylle inn hull (backfill): Logg inn på Eversense-kontoen din
   - Under Sync (synkronisering) slår du på Auto synchronization (automatisk synkronisering)
2. Konfigurasjon av ESEL:
   - Slå av innstillingen «Get data from patched Eversense App» (hent data fra modifisert Eversense-app)
   - For å fylle inn hull: Slå på «Fill missing data from eversensedms.com» (fyll inn manglende data fra eversensedms.com)
   - Skriv inn innloggingsdataene for Eversense som e-postadresse og passord
3. Velg «MM640g» som BS-kilde i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).

### Modifisert Eversense-app

 Krever en modifisert versjon av Eversense-appen (fungerer helt uten nett, også utfylling av hull).

1. Avinstaller Eversense-appen (Advarsel: de lokale historiske dataene dine (eldre enn 1 uke) går tapt!)

2. Installer den [modifiserte Eversense-appen](https://cr4ck3d3v3r53n53.club) og bruk den slik leverandøren beskriver

   - Start Eversense-appen, logg inn, koble til senderen din og bruk den akkurat som den vanlige appen.

3. Konfigurasjon av ESEL:

   - Slå på innstillingen «Get data from patched Eversense App» (hent data fra modifisert Eversense-app)



![ESEL-kringkasting](../images/ESELpatch.png)

Hvis du kjører ESEL med en ny installasjon av Eversense for første gang, kan det ta opptil 15 minutter før de første verdiene dine vises i xDrip!

4. Velg «MM640g» som BS-kilde i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).

## xDrip

xDrip kan lese varslinger fra leverandørens app, slik ESEL gjør. Ingen utfylling av hull (backfill) er tilgjengelig.

- Last ned og installer xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Som datakilde i xDrip må «Companion App» velges.
- Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).
- Juster xDrip-innstillingene etter forklaringene på siden med xDrip-innstillinger: [xDrip](../CompatibleCgms/xDrip.md).
- Slå på [Eksponentiell utjevning](../CompatibleCgms/SmoothingBloodGlucoseData.md) i AAPS.

## Varslingsleser

**AAPS** kan lese blodsukkerverdiene direkte fra varslingene som den offisielle Eversense-appen viser, uten noen annen app imellom. Ingen utfylling av hull (backfill) er tilgjengelig.

- Velg **Varslingsleser** i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source) og gi **AAPS** tilgang til varslinger når du blir spurt.
- Pass på at Eversense-appen viser den gjeldende blodsukkerverdien i varslingen sin.

```{warning}
BS-verdiene kommer ikke alltid hvert 5. minutt, og duplikater kan forekomme.
```