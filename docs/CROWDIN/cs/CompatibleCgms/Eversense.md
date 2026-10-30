# Eversense

Hodnoty z Eversense můžete získat čtyřmi různými způsoby:

- ESEL v režimu doprovodné aplikace
- ESEL v režimu upravené aplikace
- xDrip jako doprovodná aplikace
- Čtečka oznámení (součást **AAPS**)

## ESEL

Stáhněte a nainstalujte [aplikaci ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) podle tohoto [návodu](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- V ESEL otevřete nabídku se třemi tečkami (⋮) vpravo nahoře a vyberte **Settings** (je dostupná také z nabídky ☰). V nastavení:
  - Zapněte „Send to AAPS and xDrip“
  - **Vypněte** „Send to Nightscout“
  - Protože data glykémie z Eversense mohou být zašuměná, doporučuje se v ESEL zapnout „Smooth Data“.

![Vysílání ESEL](../images/ESEL.png)

### Režim doprovodné aplikace

Čte data z oznámení aplikace Eversense (funguje se standardní aplikací Eversense, k dispozici od verze ESEL 3.0.1).

1. Použijte oficiální aplikaci Eversense z Obchodu Google Play
   - Volitelné, ale nutné pro doplňování chybějících dat: přihlaste se ke svému účtu Eversense
   - V části Sync zapněte Auto synchronization
2. Konfigurace ESEL:
   - Vypněte nastavení „Get data from patched Eversense App“
   - Pro doplňování chybějících dat: zapněte „Fill missing data from eversensedms.com“
   - Jako e-mailovou adresu a heslo zadejte své přihlašovací údaje k Eversense
3. Nastavte „MM640g“ jako zdroj glykémie v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).

### Upravená aplikace Eversense

 Vyžaduje upravenou verzi aplikace Eversense (funguje zcela offline, včetně doplňování chybějících dat).

1. Odinstalujte aplikaci Eversense (Varování: vaše místní historická data (starší než 1 týden) budou ztracena!)

2. Nainstalujte [upravenou aplikaci Eversense](https://cr4ck3d3v3r53n53.club) a používejte ji tak, jak popisuje její autor

   - Spusťte aplikaci Eversense, přihlaste se, připojte se k vysílači a používejte ji stejně jako běžnou aplikaci.

3. Konfigurace ESEL:

   - Zapněte nastavení „Get data from patched Eversense App“



![Vysílání ESEL](../images/ESELpatch.png)

​       Pokud spouštíte ESEL s novou instalací Eversense poprvé, může trvat až 15 minut, než se v xDrip objeví první hodnoty!

4. Nastavte „MM640g“ jako zdroj glykémie v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).

## xDrip

xDrip umí číst oznámení aplikace výrobce, stejně jako ESEL. Doplňování chybějících dat není k dispozici.

- Stáhněte a nainstalujte xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Jako zdroj dat musí být v xDrip vybráno „Companion App“.
- Vyberte xDrip v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).
- Upravte nastavení xDrip podle vysvětlení na stránce [Nastavení xDrip](../CompatibleCgms/xDrip.md).
- Zapněte v AAPS [Exponenciální vyhlazování](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## Čtečka oznámení

**AAPS** umí číst hodnoty glykémie přímo z oznámení oficiální aplikace Eversense, bez jakékoli další aplikace mezi nimi. Doplňování chybějících dat není k dispozici.

- Vyberte **Čtečka oznámení** v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source) a na vyžádání povolte **AAPS** přístup k oznámením.
- Ujistěte se, že aplikace Eversense zobrazuje v oznámení aktuální hodnotu glykémie.

```{warning}
Hodnoty glykémie nepřicházejí vždy každých 5 minut a mohou se objevit duplicity.
```