# Detekce citlivosti

## Algoritmy detekce

V současné době máme 4 modely pro detekci citlivosti:

* Citlivost Oref0
* Citlivost AAPS
* Citlivost váženým průměrem
* Citlivost Oref1

### Citlivost Oref0

Citlivost je počítaná za posledních 24 hodin. Trávení sacharidů (pokud nejsou absorbované) se v simulaci zařezává na mezní dobu, která je uvedená v nastavení. Tento model pracuje obdobně jako OpenAPS Oref0, popsaný v [OpenAPS Oref0 dokumentaci](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html).

### Citlivost AAPS

Citlivost se počítá stejným způsobem jako v Oref0 variantě, ale můžete zadat čas do minulosti. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení

### Citlivost váženým průměrem

Citlivost je vypočítaná jako vážený průměr z odchylek. You can specify time to the past. Novější odchylky mají větší váhu. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení. Tento algoritmus nejrychleji reaguje na změny citlivosti.

### Citlivost Oref1

Citlivost je vypočítaná z údajů 8 hodin do minulosti nebo od poslední výměny kanyly, pokud k ní došlo méně než 8 hodin zpět. Sacharidy (pokud nejsou absorbované) se odříznou po době určené v předvolbách. Pouze Oref1 algoritmus podporuje "neohlášené jídlo" (UAM, un-announced meal). To znamená, že časy s odhalenými UAM jsou vyjmuty z výpočtu citlivosti. Takže pokud používáte SMB s UAM, musíte si vybrat Oref1 algoritmus, aby výpočet citlivosti fungoval správně. Pro více informací si přečtěte [OpenAPS Oref1 dokumentaci](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

## Souběžné sacharidy

Zde je oproti použití citlivosti AAPS, váženému průměru a Oref0, Oref1 výrazný rozdíl. Pluginy Oref předpokládají, že se vždy vstřebává pouze jedno jídlo. To znamená, že druhé jídlo se začne vstřebávat až poté, co je první jídlo již zcela vstřebáno. Citlivosti AAPS + Vážený průměr začnou počítat vstřebávání ihned, jakmile zadáte sacharidy. Jestliže jste snědli více než jedno jídlo, minimální rychlost vstřebávání sacharidů se nastaví podle velikosti jídla a max. doby absorpce. Minimální absorpce bude v porovnání s pluginy Oref vyšší.