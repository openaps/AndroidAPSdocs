# Detekce citlivosti

## Algoritmy detekce

V současné době máme 3 modely pro detekci citlivosti:

* Sensitivita AAPS
* Sensitivita vážený průměr
* Sensitivita Oref1

### Sensitivita AAPS

Citlivost se počítá stejným způsobem jako v Oref1 s tím rozdílem, že čas můžeme zadat i do minulosti. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení.

### Sensitivita vážený průměr

Citlivost je vypočítaná jako vážený průměr z odchylek. Můžete zadat čas do minulosti. Novější odchylky mají větší váhu. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení. Tento algoritmus je nejrychlejší při následujících změnách citlivosti.

### Sensitivita Oref1

Citlivost je vypočítaná z údajů 8 hodin do minulosti nebo od poslední výměny kanyly, pokud k ní došlo méně než 8 hodin zpět. Sacharidy (pokud nejsou absorbované) se odříznou po době určené v předvolbách. Pouze Oref1 algoritmus podporuje "neohlášené jídlo" (UAM, un-announced meal). To znamená, že časy s odhalenými UAM jsou vyjmuty z výpočtu citlivosti. Takže pokud používáte SMB s UAM, musíte si vybrat Oref1 algoritmus, aby výpočet citlivosti fungoval správně. Více informací najdete v [OpenAPS Oref1 dokumentaci](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Souběžné sacharidy

Při použití citlivosti AAPS, váženého průměru a Oref1 jsou výrazné rozdíly. Pluginy Oref předpokládají, že se vždy vstřebává pouze jedno jídlo. To znamená, že druhé jídlo se začne vstřebávat až poté, co je první jídlo již zcela vstřebáno. Citlivosti AAPS + Vážený průměr začnou počítat vstřebávání ihned, jakmile zadáte sacharidy. Jestliže jste snědli více než jedno jídlo, minimální rychlost vstřebávání sacharidů se nastaví podle velikosti jídla a max. doby absorpce. Minimální absorpce bude v porovnání s pluginy Oref vyšší.