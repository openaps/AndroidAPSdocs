(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detekce citlivosti

## Algoritmus citlivosti

V současnosti máme 3 modely detekce citlivosti:

* Citlivost AAPS
* Citlivost váženého průměru
* Citlivost Oref1

### Citlivost AAPS

Citlivost se počítá stejným způsobem jako Oref1, ale můžete specifikovat čas do minulosti. Minimální vstřebávání sacharidů se počítá z maximálního času vstřebávání sacharidů z předvoleb

### Citlivost váženého průměru

Citlivost se počítá jako vážený průměr z odchylek. Můžete specifikovat čas do minulosti. Novější odchylky mají vyšší váhu. Minimální vstřebávání sacharidů se počítá z maximálního času vstřebávání sacharidů z předvoleb. Tento algoritmus je nejrychlejší v sledování změn citlivosti.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Citlivost Oref1

Citlivost se počítá z dat za posledních 8 hodin nebo od poslední změny místa, pokud to bylo méně než před 8 hodinami. Sacharidy (pokud nejsou absorbovány) jsou odečteny po čase uvedeném v předvolebních nastaveních. Jedině algoritmus Oref1 podporuje nenahlášené jídla (UAM). To znamená, že časy s detekovanými UAM jsou vyloučeny z výpočtu citlivosti. Pokud používáte SMB s UAM, musíte zvolit algoritmus Oref1, aby správně fungoval. Pro více informací si přečtěte [dokumentaci OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Současné sacharidy

Existuje významný rozdíl při používání AAPS, WeightedAverage vs Oref1. Pluginy Oref očekávají pouze jedno jídlo, které se rozpadá v jednom okamžiku. To znamená, že druhé jídlo začne decaying poté, co první jídlo je úplně rozpadlé. AAPS + Zvážený průměr začne okamžitě decaying, když zadáte sacharidy. Pokud je na palubě více než jedno jídlo, minimální rozpad sacharidů se přizpůsobí velikosti jídla a maximálnímu času vstřebání. Minimální vstřebání bude v souladu s tím vyšší ve srovnání s pluginy Oref.