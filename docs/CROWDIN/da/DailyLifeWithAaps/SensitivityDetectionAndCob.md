(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detektering af følsomhed

## Følsomhedsalgoritme

**AAPS** har i dag 3 modeller til detektering af følsomhed:

* Følsomhed AAPS
* Følsomhed Vægtet Gennemsnit
* Følsomhed Oref1

### Følsomhed AAPS

Følsomheden beregnes på samme måde som i Oref1, men du kan angive, hvor langt tilbage i tiden der skal ses. Den minimale kulhydratabsorption beregnes ud fra den maksimale absorptionstid for kulhydrater, som er sat i indstillingerne.

### Følsomhed Vægtet Gennemsnit

Følsomheden beregnes som et vægtet gennemsnit af afvigelserne. Du kan angive, hvor langt tilbage i tiden der skal ses. Nyere afvigelser vægter mere. Den minimale kulhydratabsorption beregnes ud fra den maksimale absorptionstid for kulhydrater, som er sat i indstillingerne. Denne algoritme er den hurtigste til at følge ændringer i følsomheden.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Følsomhed Oref1

Følsomheden beregnes ud fra data fra de sidste 8 timer, eller fra det sidste skift af infusionssæt, hvis det er mindre end 8 timer siden. Kulhydrater (hvis de ikke er absorberet) fjernes efter den tid, der er angivet i indstillingerne. Kun Oref1-algoritmen understøtter uanmeldte måltider (UAM). Det betyder, at perioder med registreret UAM ikke tælles med i beregningen af følsomheden. Så hvis du bruger SMB med UAM, skal du vælge Oref1-algoritmen, for at det virker korrekt. Du kan læse mere om UAM i afsnittet [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 er den anbefalede mulighed: Det er den eneste, der kan genkende UAM og virke sammen med [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), den nyeste algoritme.

## Samtidige kulhydrater

Der er en stor forskel mellem algoritmerne Følsomhed AAPS og Følsomhed Vægtet Gennemsnit på den ene side og Oref1 på den anden side, når flere måltider overlapper.

* Oref1 regner med, at kun ét måltid bliver absorberet ad gangen: Det andet måltid begynder først at blive absorberet, når det første måltid er helt absorberet.
* Følsomhed AAPS og Følsomhed Vægtet Gennemsnit begynder at absorbere kulhydraterne med det samme, når du indtaster dem. Hvis der er mere end ét måltid om bord, tilpasses den minimale kulhydratabsorption efter måltidets størrelse og den maksimale absorptionstid. Den minimale absorption vil derfor være højere end med Oref1.