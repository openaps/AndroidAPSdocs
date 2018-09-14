# Detekce citlivosti a volby COB

* V současné době máme tři modely pro detekci citlivosti: 
  * Citlivost Oref0
  * Citlivost AAPS
  * Citlivost váženým průměrem

### Citlivost Oref0

Tento model pracuje obdobně jako Oref0 popsaný v [Oref0 dokumentaci](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html). Citlivost je počítaná za posledních 24 hodin. Trávení sacharidů (pokud nejsou absorbované) se v simulaci zařezává na mezní dobu, která je uvedená v nastavení.

### Citlivost AAPS

Citlivost se počítá stejným způsobem jako v Oref0 variantě, ale můžete určit čas do minulosti. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení.

### Citlivost váženým průměrem

Citlivost je vypočítaná jako vážený průměr z odchylek. Novější odchylky mají větší váhu. Minimální absorpce sacharidů se počítá z maximální doby trávení sacharidů z nastavení. Tento algoritmus je nejrychlejší při následujících změnách citlivosti.

### COB příklady

Oref0 - nestrávené sacharidy jsou odříznuty po určené době

![COB z Oref0](../images/cob_oref0.png)

AAPS, vážený průměr - absorpce se počítá tak, aby bylo `COB == 0` po určité době

![COB z AAPS](../images/cob_aaps.png)

Jestliže je použitá minimální absorpce sachardiů namísto hodnoty vypočtené z odchylek, tak se v COB grafu objeví zelená tečka