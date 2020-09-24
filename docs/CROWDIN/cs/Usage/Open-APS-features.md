# Funkce OpenAPS

## Autosens

* Autosens je algoritmus, který sleduje odchylky glykémie (pozitivní/negativní/neutrální).
* Pokusí se zjistit, jak citlivý(-á)/rezistentní jste na základě těchto odchylek.
* Realizace algoritmu oref v ** OpenAPS ** pracuje s kombinací dat za 24 a 8 hodin. Používá ta, která jsou více senzitivní.
* In versions prior to AAPS 2.7 user had to choose between 8 or 24 hours manually.
* From AAPS 2.7 on Autosens in AAPS will switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
* Changing a cannula or changing a profile will reset Autosens ratio back to 0%.
* Autosens adjusts your basal, I:C and ISF for you (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

## Super Micro Bolus (SMB)

SMB je zkratka Super Micro Bolus a jde o nejnovější funkci OpenAPS (od r. 2018) pracující s algoritmem Oref1. V porovnání se starší funkcí označovanou jako AMA je hlavní rozdíl v tom, že při řízení hodnoty glykémie pomocí dávkování inzulínu nepoužívá změny bazálního inzulínu, ale především velmi malé bolusové dávky (mikrobolusy). V situaci, kdy by AMA přidala 1 U inzulínu jako dočasné zvýšení bazální dávky, SMB aplikuje jednotlivě několik mikrobolusů v **5minutových intervalech**, např. 0,4 U, 0,3 U, 0,2 U a 0,1 U. Z bezpečnostních důvodů pak ve stejném okamžiku SMB nastaví na určitou dobu dočasný bazál na 0 U/h jako prevenci proti nadměrné dávce inzulínu. Tento postup umožňuje ovlivnit hodnotu glykémie rychleji než při změně dávkování bazálního inzulínu, kterou používá AMA.

Díky SMB tak teoreticky pro jídla s nízkým obsahem sacharidů může stačit pouze zadat do systému předpokládaný obsah sacharidů a dávkování inzulínu plně ponechat na AAPS. Absence bolusové dávky před jídlem však může vést k vyšším vrcholům glykémie po jídle. V případě, kdy je bolusová dávka vhodná, je také možné aplikovat jen její **startovací část**, která pokryje sacharidy **pouze z části** (např. ve výši 2/3 předpokládané celkové dávky) a zbytek již opět ponechat na SMB.

SMB zahrnuje určité bezpečnostní mechanismy:

1. Největší jednotlivý mikrobolus může být pouze nejmenší hodnota z:
    
    * hodnota aktuálního bazálního inzulínu (upravená pomocí automatické detekce citlivosti) pro dobu přednastavenou ve volbě „Maximální počet minut bazálu, ke kterým se limituje SMB“, např. bazální dávka inzulínu pro následujících 30 minut, nebo
    * polovina aktuálně požadované dávky inzulínu, nebo
    * zbývající část nastavené hodnoty maxIOB.

2. Pravděpodobně bude často docházet ze strany AAPS k dočasnému snížení hodnoty bazálního inzulínu nebo bude dávkování bazálního inzulín vypnuto úplně. Dochází k tomu z bezpečnostních důvodů a při správném nastavení systému to nemá negativní vliv na hodnoty glykémie. Křivka IOB je pro vyhodnocení očekávaného vývoje důležitější než nastavení bazálního profilu.

3. Dodatečné kalkulace zaměřené na odhad vývoje glykémie pomocí funkce UAM (detekce neoznámených jídel). I bez zadání hodnoty sacharidů do systému detekuje UAM automaticky výrazný vzestup glykémie způsobené jídlem, adrenalinem nebo jinými vlivy a pomocí SMB na ně reaguje. V zájmu zachování bezpečnosti to funguje i opačně a deaktivuje SMB dříve, pokud dojde k neočekávanému poklesu glykémie. To je důvod, proč by funkce UAM měla být při používání SMB vždy aktivní.

**Musíte zahájit plnění cíle 10, abyste mohli začít používat SMB.**

Viz také: [Dokumentace k OpenAPS pro oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) a [Timovy informace o SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Pro množství dočasné bazální dávky inzulínu U/h lze nastavit maximální hodnotu (OpenAPS "max-basal")

Toto bezpečnostní omezení stanoví maximální výši dočasné bazální dávky inzulínu, která muže být pumpou aplikována. Hodnota by měla být nastavena shodně jak v pumpě, tak i v AAPS a měla by být minimálně třikrát vyšší než je nejvyšší hodnota ze standardního bazálního profilu.

Příklad:

Váše nejvyšší bazální dávka během dne je 1,00 U/h. Potom je doporučeno nastavit hodnotu "Maximální povolený bazál" na hodnotu 3 U/h.

Není však možné nastavit jakoukoliv hodnotu. AAPS stanovuje pevný limit vycházející z věku pacienta, který se stanovuje v nastavení. Nejnižší povolená hodnota je pro děti a nejvyšší pro dospělé pacienty s vyšší rezistencí na inzulín.

Limity jsou nastaveny takto:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12

### Nastavenou maximální hodnotu IOB nelze překročit (OpenAPS "max-iob")

Hodnota udává, jaké maximální IOB je pro AAPS pracující v uzavřené smyčce limitující. Pokud je aktuální IOB (např. po bolusové dávce) nad nastavenou hodnotou, smyčka nenavýší dávky inzulínu, dokud se hodnota IOB pod tuto hodnotu nesníží.

Při použití OpenAPS SMB se maximální IOB počítá jinak než s OpenAPS AMA. AMA využívá jako bezpečnostní prvek maximálního IOB pouze bazální inzulín, zatímco SMB zohledňuje i inzulín z bolusových dávek. Pro začátek je vhodné vyzkoušet

    max IOB = průměrná hodnota bolusů podávaných před jídlem + 3násobek nejvyšší hodnoty v bazálním profilu
    

Při hledání ideálního nastavení buďte opatrní a trpěliví a hodnoty měňte postupně. Nastavení je individuální a mj. vychází i z výše celkové denní dávky inzulínu. Z bezpečnostních důvodů jsou nastaveny limity vycházející z věku pacienta. Pevný limit pro maximální IOB je u SMB v porovnání s AMA vyšší.

* Děti: 3
* Dospívající: 7
* Dospělí: 12
* Dospělí s vyšší rezistencí na inzulín: 25

Viz také [Dokumentace k OpenAPS SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Povolit AMA Autosense

Zde si můžete vybrat, zda chcete používat [detekci citlivosti](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' nebo ne.

### Povolit SMB

Zde můžete povolit nebo zcela zakázat funkci SMB.

### Povolit SMB se sacharidy

SMB pracuje, i když zbývají aktivní sacharidy.

### Povolit SMB s dočasnými cíli

SMB pracuje, když je nastaven vysoký nebo nízký dočasný cíl (před jídlem, aktivita, hypoglykémie, vlastní)

### Povolit SMB s vysokými dočasnými cíli

SMB pracuje, když je nastaven vysoký dočasný cíl (aktivita, hypoglykémie). Tato možnost může omezit některá další nastavení SMB, např. je-li povolena možnost ‘Povolit SMB s dočasnými cíli’ a možnost ‘Povolit SMB s vysokými dočasnými cíli’ je zakázána, SMB bude pracovat pouze s nízkými dočasnými cíli, nikoli s vysokými. Totéž platí pro aktivní možnost Povolit SMB se sacharidy: je-li zakázána možnost 'Povolit SMB s vysokými dočasnými cíli', nebudou SMB s vysokými dočasnými cíli fungovat ani v případě zbývajících aktivních sacharidů.

### Vždy povolit SMB

SMB pracují vždy (nezávisle na aktivních sacharidech, dočasných cílech a bolusech). Z bezpečnostních důvodů je tato možnost dostupná pouze u zdrojů glykémie s dobrým filtrováním zarušených dat. V současné době funguje se senzorem Dexcom G5, používáte-li upravenou aplikaci Dexcom nebo “nativní režim” v xDripu+. Jestliže má hodnota glykémie příliš velkou odchylku, G5 ji nepošle a počká 5 minut na další odečtenou hodnotu.

V případě ostatních CGM/FGM, jako je Freestyle Libre, je možnost ‘Vždy povolit SMB’ zakázána, dokud nebude mít xDrip+ lepší plugin pro vyhlazování zarušených glykémií. Více informací najdete [zde](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Povolit SMB po jídle

SMB pracuje 6 h po jídle, i když už nezbývají žádné aktivní sacharidy. Z bezpečnostních důvodů je tato možnost dostupná pouze u zdrojů glykémie s dobrým filtrováním zarušených dat. V současné době funguje se senzorem Dexcom G5, používáte-li upravenou aplikaci Dexcom nebo “nativní režim” v xDripu+. Jestliže má hodnota glykémie příliš velkou odchylku, G5 ji nepošle a počká 5 minut na další odečtenou hodnotu.

V případě ostatních CGM/FGM, jako je Freestyle Libre, je možnost ‘Vždy povolit SMB’ zakázána, dokud nebude mít xDrip+ lepší plugin pro vyhlazování zarušených glykémií. Více informací najdete [zde](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Maximální počet minut bazálu, ke kterým se limituje SMB

Jedná se o důležité bezpečnostní nastavení. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Tímto nastavením lze zvýšit agresivitu funkce SMB. Pro začátek byste měli začít s výchozí hodnotou 30 minut. Až získáte nějaké zkušenosti, můžete zvyšovat hodnotu po 15minutových krocích a sledovat, jaký mají tyto změny efekt.

Nedoporučuje se nastavovat vyšší hodnotu než 90 minut, protože by to mohlo vést ke stavu, v němž již algoritmus nedokáže zkorigovat klesající glykémii pomocí nulového dočasného bazálu. Zejména v případě, že stále ještě testujete nová nastavení, měli byste si nastavit výstrahy, které vás upozorní na blížící se hypoglykémii.

Výchozí hodnota: 30 min.

### Povolit UAM

Je-li tato možnost povolena, algoritmus SMB dokáže rozpoznat neoznámená jídla. To je užitečné, pokud zapomenete systému AndroidAPS říci o zkonzumovaných sacharidech, v případě, kdy špatně odhadnete jejich množství nebo v případě, když se jídlo s velkým obsahem tuků a bílkovin vstřebává delší dobu, než se očekávalo. Aniž by bylo nutné zadávat jakékoli sacharidy, UAM dokáže rozpoznat rychlý vzestup glykémie způsobený sacharidy, adrenalinem atd. a pokusí se o korekci pomocí SMB. Funguje to také opačně: pokud dojde k rychlému poklesu glykémie, dokáže dříve zastavit SMB.

**Proto by měla být při používání SMB funkce UAM vždy povolena.**

### Vysoký dočasný cíl zvýší senzitivitu

Je-li tato volba aktivní, citlivost na inzulin se při nastavení dočasného cíle nad 5.6 mmol/l (100 mg/dl) zvýší. To znamená, že ISF se zvýší, zatímco IC a bazál se sníží.

### Nízký dočasný cíl sníží senzitivitu

Je-li tato volba aktivní, citlivost na inzulin se při nastavení dočasného cíle pod 5.6 mmol/l (100 mg/dl) sníží. To znamená, že ISF se sníží, zatímco IC a bazál se zvýší.

### Rozšířená nastavení

**Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot** Jestliže povolíte tuto funkci, AndroidAPS bude používat krátkodobý průměrný rozdíl (delta) glykémií za posledních 15 minut, což je obvykle průměr z posledních tří hodnot. AndroidAPS tak bude moci pracovat stabilněji při použití zarušených zdrojů glykémie, jako např. xDrip+ nebo Libre.

**Max. násobitel denního nejvyššího bazálu** Toto je důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně nebude potřeba upravovat) je 3. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 3x nejvyšší bazální dávka ve vašem profilu naprogramovaném v pumpě. Příklad: jestliže vaše nejvyšší bazální dávka v profilu je 1,0 U/h a max. násobitel denního nejvyššího bazálu je 3, pak může AndroidAPS nastavit maximální dočasný bazál 3,0 U/h (= 3 x 1,0 U/h).

Výchozí hodnota: 3 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Max. násobitel současného bazálu** Toto je další důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně také nebude potřeba upravovat) je 4. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 4x aktuální bazální dávka ve vašem profilu naprogramovaném v pumpě.

Výchozí hodnota: 4 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

* * *

## Advanced Meal Assist (AMA)

AMA je zkratka pro "advanced meal assist", což je funkce OpenAPS od roku 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně.

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max. povolený bazál U/h (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12

### Maximální hodnota IOB, kterou OpenAPS může vydat \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. Nastavení je individuální a mj. vychází i z výše celkové denní dávky inzulínu. Z bezpečnostních důvodů jsou nastaveny limity vycházející z věku pacienta. The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Děti: 3
* Dospívající: 5
* Dospělí: 7
* Dospělí s vyšší rezistencí na inzulín: 12

### Povolit AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosense upravuje také cílovou glykémii

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Rozšířená nastavení

**Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot** Jestliže povolíte tuto funkci, AndroidAPS bude používat krátkodobý průměrný rozdíl (delta) glykémií za posledních 15 minut, což je obvykle průměr z posledních tří hodnot. AndroidAPS tak bude moci pracovat stabilněji při použití zarušených zdrojů glykémie, jako např. xDrip+ nebo Libre.

**Max. násobitel denního nejvyššího bazálu** Toto je důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně nebude potřeba upravovat) je 3. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 3x nejvyšší bazální dávka ve vašem profilu naprogramovaném v pumpě. Příklad: jestliže vaše nejvyšší bazální dávka v profilu je 1,0 U/h a max. násobitel denního nejvyššího bazálu je 3, pak může AndroidAPS nastavit maximální dočasný bazál 3,0 U/h (= 3 x 1,0 U/h).

Výchozí hodnota: 3 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Max. násobitel současného bazálu** Toto je další důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně také nebude potřeba upravovat) je 4. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 4x aktuální bazální dávka ve vašem profilu naprogramovaném v pumpě.

Výchozí hodnota: 4 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2