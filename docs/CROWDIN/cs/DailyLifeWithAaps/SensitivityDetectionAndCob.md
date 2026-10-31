(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detekce citlivosti

## Algoritmus citlivosti

**AAPS** v současnosti nabízí 3 modely detekce citlivosti:

* Sensitivita AAPS
* Sensitivita vážený průměr
* Sensitivita Oref1

### Sensitivita AAPS

Citlivost se počítá stejně jako u Oref1, ale můžete nastavit časové období, které se má zpětně vyhodnotit. Minimální vstřebávání sacharidů se počítá z maximální doby vstřebávání sacharidů nastavené v předvolbách.

### Sensitivita vážený průměr

Citlivost se počítá jako vážený průměr odchylek. Můžete nastavit časové období, které se má zpětně vyhodnotit. Novější odchylky mají vyšší váhu. Minimální vstřebávání sacharidů se počítá z maximální doby vstřebávání sacharidů nastavené v předvolbách. Tento algoritmus nejrychleji sleduje změny citlivosti.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivita Oref1

Citlivost se počítá z dat za posledních 8 hodin, nebo od poslední výměny kanyly, pokud proběhla před méně než 8 hodinami. Sacharidy (pokud se nevstřebaly) se po době nastavené v předvolbách odříznou. Neoznámená jídla (UAM) podporuje jen algoritmus Oref1. To znamená, že doby, kdy byla zjištěna UAM, se do výpočtu citlivosti nezahrnují. Pokud tedy používáte SMB s UAM, musíte zvolit algoritmus Oref1, aby vše správně fungovalo. Více informací o UAM najdete v části [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 je doporučená možnost: jako jediná dokáže rozpoznat UAM a pracovat s [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), novějším algoritmem.

## Současné sacharidy

Když se několik jídel překrývá, je velký rozdíl mezi algoritmy Sensitivita AAPS a vážený průměr na jedné straně a Oref1 na druhé straně.

* Oref1 počítá vždy jen s jedním vstřebávajícím se jídlem: druhé jídlo se začne vstřebávat, až když se první jídlo úplně vstřebá.
* Sensitivita AAPS a vážený průměr začnou se vstřebáváním hned, jakmile zadáte sacharidy. Pokud je v těle více než jedno jídlo, minimální vstřebávání sacharidů se upraví podle velikosti jídla a maximální doby vstřebávání. Minimální vstřebávání proto bude ve srovnání s Oref1 vyšší.