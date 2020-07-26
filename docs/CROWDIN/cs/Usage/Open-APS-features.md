# Funkce OpenAPS

## Autosens

* Autosens je algoritmus, který sleduje odchylky glykémie (pozitivní/negativní/neutrální).
* Pokusí se zjistit, jak citlivý(-á)/rezistentní jste na základě těchto odchylek.
* Realizace algoritmu oref v ** OpenAPS ** pracuje s kombinací dat za 24 a 8 hodin. Používá ta, která jsou více senzitivní.
* AndroidAPS pouze pracuje s daty za 8 (pro umožnění UAM) nebo 24 hodin (uživatelská volba).
* Výměna kanyly nebo změna profilu automaticky nastaví Autosense zpět na 0%.
* Autosense upravuje váš bazál a ISF za vás (tzn. napodobuje to, co dělá změna profilu).
* Pokud budete nepřetržitě po delší dobu jíst sacharidy, Autosense bude během této doby méně efektivní, protože období se sacharidy jsou vyloučena z výpočtů odchylek glykémie.

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

**Musíte zahájit plnění cíle 9, abyste mohli používat tuto funkci**

Více informací najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max. povolený bazál U/h (OpenAPS "max-basal")

Toto bezpečnostní nastavení zabraňuje systému AndroidAPS vydat nebezpečně vysokou bazální dávku a omezuje dočasnou bazální dávku na x U/h. Doporučuje se nastavit na rozumnou hodnotu. Doporučuje se vzít z vašeho profilu nejvyšší hodnotu bazálu, a vynásobit ji 4 a alespoň 3. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 1,0 U/h, dostanete po vynásobení 4 hodnotu 4 U/h. Nastavte tedy 4 jako svůj bezpečnostní parametr.

Nemůžete si vybrat libovolnou hodnotu: Z bezpečnostních důvodů je tato hodnota omezena v závislosti na věku pacienta. 'Pevný limit' pro maxIOB jev algoritmu AMA nižší než v SMB. Pro děti je hodnota nejnižší, zatímco pro dospělé pacienty s rezistencí na inzulin je největší.

Pevně zadané parametry v AndroidAPS jsou:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12

### Maximální hodnota IOB, kterou OpenAPS může vydat \[U\] (OpenAPS "max-iob")

Tento parametr omezuje maximální bazální IOB, kde AndroidAPS stále funguje. Pokud je IOB vyšší, zastaví se výdej dalšího bazálního inzulínu, dokud je IOB z bazálu pod limitem.

Výchozí hodnota je 2, tento parametr byste však měli měnit postupně, abyste viděli, jak velký má efekt a která hodnota se hodí nejlépe. Nastavení je individuální a mj. vychází i z výše celkové denní dávky inzulínu. Z bezpečnostních důvodů jsou nastaveny limity vycházející z věku pacienta. 'Pevný limit' pro maxIOB jev algoritmu AMA nižší než v SMB.

* Děti: 3
* Dospívající: 5
* Dospělí: 7
* Dospělí s vyšší rezistencí na inzulín: 12

### Povolit AMA Autosense

Zde si můžete vybrat, zda chcete používat [detekci citlivosti](../Configuration/Sensitivity-detection-and-COB.md) autosense nebo ne.

### Autosense upravuje také cílovou glykémii

Pokud máte tuto možnost povolenou, může autosense upravovat i dočasné cíle (kromě bazálu, ISF a IC). AndroidAPS tak může být více či méně 'agresivní'. Aktuálně nastaveného cíle lze s touto funkcí dosáhnout rychleji.

### Rozšířená nastavení

**Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot** Jestliže povolíte tuto funkci, AndroidAPS bude používat krátkodobý průměrný rozdíl (delta) glykémií za posledních 15 minut, což je obvykle průměr z posledních tří hodnot. AndroidAPS tak bude moci pracovat stabilněji při použití zarušených zdrojů glykémie, jako např. xDrip+ nebo Libre.

**Max. násobitel denního nejvyššího bazálu** Toto je důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně nebude potřeba upravovat) je 3. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 3x nejvyšší bazální dávka ve vašem profilu naprogramovaném v pumpě. Příklad: jestliže vaše nejvyšší bazální dávka v profilu je 1,0 U/h a max. násobitel denního nejvyššího bazálu je 3, pak může AndroidAPS nastavit maximální dočasný bazál 3,0 U/h (= 3 x 1,0 U/h).

Výchozí hodnota: 3 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Max. násobitel současného bazálu** Toto je další důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně také nebude potřeba upravovat) je 4. To znamená, že AndroidAPS nikdy nebude moci nastavit dočasnou bazální dávku, která je vyšší než 4x aktuální bazální dávka ve vašem profilu naprogramovaném v pumpě.

Výchozí hodnota: 4 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Dělitel bolus snooze** Funkce “bolus snooze” funguje po bolusu na jídlo. AAPS nenastaví nízký dočasný bazál po jídle během doby, která trvá DIA děleno parametrem “bolus snooze”. Výchozí hodnota je 2. To znamená, že s DIA 5 h by trvání parametru „bolus snooze“ bylo 5 h : 2 = 2,5 h.

Výchozí hodnota: 2

* * *

## Meal Assist (MA)

### Max. povolený bazál U/h (OpenAPS "max-basal")

Toto bezpečnostní nastavení zabraňuje systému AndroidAPS vydat nebezpečně vysokou bazální dávku a omezuje dočasnou bazální dávku na x U/h. Doporučuje se nastavit na rozumnou hodnotu. Doporučuje se vzít z vašeho profilu nejvyšší hodnotu bazálu, a vynásobit ji 4 a alespoň 3. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 1,0 U/h, dostanete po vynásobení 4 hodnotu 4 U/h. Nastavte tedy 4 jako svůj bezpečnostní parametr.

Nemůžete si vybrat libovolnou hodnotu: Z bezpečnostních důvodů je tato hodnota omezena v závislosti na věku pacienta. 'Pevný limit' pro maxIOB jev algoritmu MA nižší než v SMB. Pro děti je hodnota nejnižší, zatímco pro dospělé pacienty s rezistencí na inzulin je největší.

Pevně zadané parametry v AndroidAPS jsou:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12

### Maximální hodnota IOB, kterou OpenAPS může vydat \[U\] (OpenAPS "max-iob")

Tento parametr omezuje maximální bazální IOB, kde AndroidAPS stále funguje. Pokud je IOB vyšší, zastaví se výdej dalšího bazálního inzulínu, dokud je IOB z bazálu pod limitem.

Výchozí hodnota je 2, tento parametr byste však měli měnit postupně, abyste viděli, jak velký má efekt a která hodnota se hodí nejlépe. Nastavení je individuální a mj. vychází i z výše celkové denní dávky inzulínu. Z bezpečnostních důvodů jsou nastaveny limity vycházející z věku pacienta. 'Pevný limit' pro maxIOB jev algoritmu MA nižší než v SMB.

* Děti: 3
* Dospívající: 5
* Dospělí: 7
* Dospělí s vyšší rezistencí na inzulín: 12

### Rozšířené nastavení

**Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot** Jestliže povolíte tuto funkci, AndroidAPS bude používat krátkodobý průměrný rozdíl (delta) glykémií za posledních 15 minut, což je obvykle průměr z posledních tří hodnot. AndroidAPS tak bude moci pracovat stabilněji při použití zarušených zdrojů glykémie, jako např. xDrip+ nebo Libre.

**Dělitel bolus snooze** Funkce “bolus snooze” funguje po bolusu na jídlo. AAPS nenastaví nízký dočasný bazál po jídle během doby, která trvá DIA děleno parametrem “bolus snooze”. Výchozí hodnota je 2. To znamená, že s DIA 5 h by trvání parametru „bolus snooze“ bylo 5 h : 2 = 2,5 h.

Výchozí hodnota: 2