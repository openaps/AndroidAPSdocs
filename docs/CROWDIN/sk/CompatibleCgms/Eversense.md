# Eversense

K hodnotám z Eversense sa dá dostať štyrmi rôznymi spôsobmi:

- ESEL v režime Companion
- ESEL v režime Patched (upravená aplikácia)
- Sprievodná aplikácia xDrip (Companion)
- Čítačka notifikácií (zabudovaná v **AAPS**)

## ESEL

Stiahnite a nainštalujte [aplikáciu ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) podľa tohto [návodu](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- V ESEL otvorte ponuku s tromi bodkami (⋮) vpravo hore a vyberte **Settings** (dostupné aj z ponuky ☰). V nastaveniach:
  - Zapnite „Send to AAPS and xDrip“
  - **Vypnite** „Send to Nightscout“
  - Keďže údaje glykémie z Eversense môžu byť zašumené, odporúča sa v ESEL zapnúť „Smooth Data“.

![ESEL Broadcast](../images/ESEL.png)

### Režim Companion

Číta dáta z notifikácií aplikácie Eversense (funguje so štandardnou aplikáciou Eversense, dostupné od verzie ESEL 3.0.1).

1. Použite oficiálnu aplikáciu Eversense z Obchodu Google Play
   - Voliteľné, ale potrebné na doplnenie chýbajúcich dát (backfilling): prihláste sa do svojho účtu Eversense
   - V časti Sync zapnite Auto synchronization
2. Konfigurácia ESEL:
   - Vypnite nastavenie „Get data from patched Eversense App“
   - Na doplnenie chýbajúcich dát: zapnite „Fill missing data from eversensedms.com“
   - Ako e-mailovú adresu a heslo zadajte svoje prihlasovacie údaje do Eversense
3. V [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source) nastavte ako zdroj glykémie „MM640g“.

### Upravená aplikácia Eversense

 Vyžaduje upravenú verziu aplikácie Eversense (funguje úplne offline, vrátane doplnenia chýbajúcich dát).

1. Odinštalujte aplikáciu Eversense (Upozornenie: vaše lokálne historické dáta (staršie ako 1 týždeň) sa stratia!)

2. Nainštalujte [upravenú aplikáciu Eversense](https://cr4ck3d3v3r53n53.club) a používajte ju podľa pokynov jej autora

   - Spustite aplikáciu Eversense, prihláste sa, pripojte sa k vysielaču a používajte ju ako bežnú aplikáciu.

3. Konfigurácia ESEL:

   - Zapnite nastavenie „Get data from patched Eversense App“



![ESEL Broadcast](../images/ESELpatch.png)

If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. V [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source) nastavte ako zdroj glykémie „MM640g“.

## xDrip

xDrip vie čítať notifikácie z aplikácie výrobcu, podobne ako ESEL. Doplnenie chýbajúcich dát nie je dostupné.

- Stiahnite a nainštalujte xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Ako zdroj dát v xDrip musí byť vybraná „Companion App“.
- Vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).
- Upravte nastavenia xDrip podľa vysvetlení na stránke [Nastavenia xDrip](../CompatibleCgms/xDrip.md).
- V AAPS zapnite [Exponenciálne vyhladzovanie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## Čítačka notifikácií

**AAPS** vie čítať hodnoty glykémie priamo z notifikácií oficiálnej aplikácie Eversense, bez akejkoľvek inej aplikácie medzi nimi. Doplnenie chýbajúcich dát nie je dostupné.

- Vyberte **Čítačka notifikácií** v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source) a keď sa vás aplikácia opýta, povoľte **AAPS** prístup k notifikáciám.
- Uistite sa, že aplikácia Eversense zobrazuje aktuálnu hodnotu glykémie vo svojej notifikácii.

```{warning}
Hodnoty glykémie neprichádzajú vždy každých 5 minút a môžu sa vyskytnúť duplikáty.
```