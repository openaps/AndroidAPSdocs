(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detekcia citlivosti

## Algoritmus citlivosti

**AAPS** v súčasnosti ponúka 3 modely detekcie citlivosti:

* Citlivosť AAPS
* Citlivosť vážený priemer
* Citlivosť Oref1

### Citlivosť AAPS

Citlivosť sa počíta rovnako ako v Oref1, ale môžete nastaviť, aké dlhé obdobie sa má spätne vyhodnotiť. Minimálna absorpcia sacharidov sa počíta z maximálnej doby absorpcie sacharidov nastavenej v nastaveniach.

### Citlivosť vážený priemer

Citlivosť sa počíta ako vážený priemer odchýlok. Môžete nastaviť, aké dlhé obdobie sa má spätne vyhodnotiť. Novšie odchýlky majú vyššiu váhu. Minimálna absorpcia sacharidov sa počíta z maximálnej doby absorpcie sacharidov nastavenej v nastaveniach. Tento algoritmus najrýchlejšie sleduje zmeny citlivosti.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Citlivosť Oref1

Citlivosť sa počíta z údajov za posledných 8 hodín, alebo od poslednej výmeny miesta vpichu, ak bola pred menej ako 8 hodinami. Sacharidy (ak nie sú vstrebané) sa vynulujú po čase nastavenom v nastaveniach. Iba algoritmus Oref1 podporuje neohlásené jedlá (UAM). To znamená, že časy so zisteným UAM sú z výpočtu citlivosti vylúčené. Ak teda používate SMB s UAM, musíte zvoliť algoritmus Oref1, aby to fungovalo správne. Viac informácií o UAM nájdete v časti [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 je odporúčaná možnosť: ako jediný dokáže zistiť UAM a pracovať s [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), novším algoritmom.

## Súčasne prebiehajúce jedlá (sacharidy)

Keď sa viac jedál prekrýva, je veľký rozdiel medzi algoritmami Citlivosť AAPS a WeightedAverage na jednej strane a Oref1 na druhej strane.

* Oref1 počíta s tým, že sa naraz vstrebáva iba jedno jedlo: druhé jedlo sa začne vstrebávať až po úplnom vstrebaní prvého.
* Citlivosť AAPS a WeightedAverage začnú vstrebávanie počítať hneď, ako zadáte sacharidy. Ak je aktívnych viac jedál, minimálne vstrebávanie sacharidov sa upraví podľa veľkosti jedla a maximálnej doby absorpcie. Minimálna absorpcia bude preto vyššia v porovnaní s Oref1.