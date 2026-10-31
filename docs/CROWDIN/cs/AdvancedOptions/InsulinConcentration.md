(Insulin-Concentration)=
# Koncentrace inzulínu

```{warning}
Všechny komerční pumpy jsou určené **POUZE** pro inzulín U100. Použití inzulínu s jinou koncentrací v pumpě může být nebezpečné. I když stále více uživatelů používá AAPS s jinými koncentracemi, přepočet se musí vždy hlídat a často vede k chybám (i u velmi zkušených uživatelů!).
```

## Připomenutí základů o inzulínu

Tato kapitola popisuje základní pojmy měření a podávání inzulínu.

### Jednotka inzulínu: míra účinku

Inzulín se měří v **mezinárodních jednotkách (IU)**. Ty vyjadřují jeho biologickou aktivitu (schopnost snižovat glykémii), ne jen jeho fyzickou hmotnost.

- **Definice:** 1 IU odpovídá aktivitě určitého množství inzulínu, standardně **přibližně 0,04167 mg**.
- **Hlavní bod:** „Jednotka“ znamená stejný biologický účinek u všech typů inzulínu, a proto je dávkování konzistentní.

### Koncentrace inzulínu

Inzulín se vyrábí v různých silách. Síla je určena počtem jednotek v jednom mililitru (ml).

- **U100:** Celosvětový standard, obsahuje **100 IU/ml**.
- **U200–U500:** Koncentrovanější inzulíny (např. U200 obsahuje 200 IU/ml) pro menší objem při podání.
- **U40/U50:** Less common, historical concentrations (40 IU/ml and 50 IU/ml). **U40 vyžaduje stříkačky určené pro U40.**
- **Ruční ředění:** Klinický postup, kterým se připravuje velmi zředěný inzulín (např. U50, U10) pro vzácné případy, jako je použití u novorozenců nebo extrémní citlivost. Vyžaduje to velmi pečlivou přípravu v lékárně.

```{admonition} Critical Warning
:class: danger
Použití koncentrace s nevhodným zařízením je extrémně nebezpečné a může způsobit vážné předávkování nebo poddávkování. **Vždy třikrát zkontrolujte, že koncentrace inzulínu odpovídá parametrům stříkačky, pera nebo pumpy.**
```

## Kdy se používá nestandardní koncentrace?

Inzulínové pumpy jsou určené pro inzulín U100, ale některé zvláštní zdravotní situace vyžadují nestandardní koncentrace. Tyto situace vyžadují extrémní opatrnost a velmi pečlivé řízení.

### Případ 1: zředěný inzulín pro velmi nízké dávky

- **Situace:** Léčba diabetu 1. typu u velmi malých kojenců a batolat.
- **Problém:** Jejich potřeba inzulínu je tak nízká, že nejmenší dávka, kterou pumpa umí podat (např. 0,05 U), může být stále příliš velká. To ztěžuje přesnou kontrolu glykémie a znamená vysoké riziko hypoglykémie.
- **Řešení:** Použít velmi zředěný inzulín (např. U10, tedy 10 IU/ml).
- **Účinek:** Zvýší se objem tekutiny podaný na jednu jednotku inzulínu. Když jsou „balíčky“ inzulínu větší objemem, ale slabší koncentrací, umožní to mnohem jemnější úpravy a větší přesnost dávkování se stávajícím nastavením pumpy.

```{admonition} Critical Safety Note on Dilution
:class: danger
Ředění inzulínu je vysoce rizikový postup. Nikdy se o něj nepokoušejte doma bez zvláštního zaškolení a lékařského dohledu. Musí ho provádět zdravotník nebo zaškolený pečovatel pomocí sterilního ředicího roztoku, který je určený přímo pro daný typ inzulínu. **Nikdy nepoužívejte vodu z kohoutku, fyziologický roztok ani žádnou jinou tekutinu**, protože to může inzulín inaktivovat, změnit jeho účinek a vnést do něj nebezpečné nečistoty.
```

### Případ 2: koncentrovaný inzulín při vysoké potřebě inzulínu nebo výrazné inzulínové rezistenci

- **Situace:** Léčba dospělých nebo dospívajících s výraznou inzulínovou rezistencí nebo lidí, kterým přísady ve standardním inzulínu způsobují místní bolest.
- **Problém:**
  1. **Vysoká potřeba:** Velmi vysoká denní potřeba inzulínu může překročit maximální bolus nebo denní limity podání pumpy.
  1. **Bolest:** Konzervační látky v inzulínu mohou při podání způsobit pálení nebo podráždění.
- **Řešení:** Použít koncentrovanější inzulín, například U200 (200 IU/ml).
- **Účinek:** Potřebná dávka inzulínu se podá v polovičním objemu. Uživatel musí upravit vnitřní nastavení pumpy (např. snížit bazální dávky a bolusy na polovinu) kvůli dvojnásobné koncentraci, aby se podal správný počet jednotek. Tím se také sníží objem případně dráždivé tekutiny podané pod kůži.

## Jak řídit koncentraci inzulínu v AAPS (AAPS 3 a starší)?

Použití jiného inzulínu než U100 ve smyčce AAPS vyžaduje velmi pečlivé nastavení, aby výpočty aplikace odpovídaly skutečně podávanému inzulínu. Jedna běžná metoda je „Použití upraveného profilu“.

### Použití upraveného profilu

Tato metoda AAPS „oklame“, aby si myslel, že pacient potřebuje méně inzulínu, než ve skutečnosti potřebuje. Tím se vyrovná to, že pumpa podává koncentrovanější inzulín, než pro jaký je určena. Níže uvedený příklad platí pro inzulín U200 v pumpě určené pro U100.

- **Hlavní problém:** Pumpa určená pro U100 je nastavená tak, aby na **1 jednotku** podala **10 µl**. Pokud ji naplníte inzulínem U200 (1 jednotka U200 odpovídá **5 µl** inzulínu), pak když na pumpě zvolíte **1 jednotku**, podá **10 µl** inzulínu, ale tento objem teď obsahuje **2 jednotky inzulínu U200**. To vede k předávkování o 100 %.
- **Řešení „Přepnutí profilu 50 %“:** Aby se to napravilo, celý léčebný profil pacienta se v AAPS upraví tak, aby byl „dvakrát slabší“.
  1. Uživatel vytvoří nový profil ze svého standardního profilu pro U100 pomocí funkce „Přepnutí profilu **50 %**“.
  1. Tím vznikne nový profil, ve kterém:
     - se **bazální dávky** sníží na polovinu.
     - se **inzulínosacharidový poměr (IC)** zdvojnásobí (např. 1:10 g se změní na 1:20 g).
     - se **citlivost na inzulín (ISF)** zdvojnásobí (např. 1 jednotka snižuje glykémii o 50 mg/dl (2,8 mmol/l) se změní na 1 jednotka ji snižuje o 100 mg/dl (5,6 mmol/l)).
- **Opravený výsledek:** AAPS si teď myslí, že pacient potřebuje jen polovinu inzulínu. Když vypočítá a pošle bolus **1 jednotky**, pumpa (určená pro U100, ale naplněná U200) podá **10 µl**, které obsahují **2 skutečné jednotky inzulínu U200**. Protože AAPS tuto dávku vypočítal podle profilu s „poloviční silou“, je toto podání **2 skutečných jednotek** správná, zamýšlená dávka. Výpočty smyčky s „poloviční silou“ odpovídají podání pumpy s „dvojnásobnou silou“.

```{admonition} Critical Risks and Common Errors
:class: caution

Tato metoda přináší velká rizika, protože vytváří trvalý nesoulad mezi daty v aplikaci a fyzickou skutečností.

**Hlavní chyba: nesoulad u „externího bolusu“**

Nejčastější chyba nastává, když se inzulín podává a zapisuje **mimo** systém AAPS a pumpy.

- **Situace:** AAPS s upraveným profilem vypočítá bolus **5 jednotek** na jídlo. Uživatel tuto dávku aplikuje perem s inzulínem U200.
- **Dvojí chyba:**
  1. **Volba špatné dávky:** Uživatel si myslí „AAPS vypočítal 5 jednotek“ a kvůli peru s U200 čeká, že podá **5 skutečných jednotek U200** bez jakéhokoli přepočtu. Protože je ale profil snížený na polovinu, tělo ve skutečnosti potřebuje **10 skutečných jednotek**. To je **poddávkování o 50 %**, které může vést k hyperglykémii.
  1. **Špatný výpočet aktivního inzulínu (IOB) (nadhodnocený IOB):** Když uživatel tento externí bolus zapíše do AAPS, zapíše **5 jednotek**. To je špatně. Protože profil v AAPS je pro U200, **1 jednotka v AAPS se rovná 2 skutečným jednotkám**. Proto by se 5 skutečných jednotek podaných perem mělo v aplikaci zapsat jako **2,5 jednotky**. Zápisem 5 jednotek uživatel nadhodnotí IOB o 100 %. AAPS si teď myslí, že je aktivních 5 „koncentrovaných jednotek“ (to odpovídá 10 skutečným jednotkám), i když ve skutečnosti působí jen 5 skutečných jednotek. Smyčka pak může omezit bazální inzulín nebo snížit další bolusy, a tím ještě zvýšit riziko hyperglykémie z původního poddávkování.

**Další rizika:**

- **Zavádějící data a reporty:** Všechna data v AAPS nebo Nightscoutu – včetně IOB, celkové denní dávky (CDD) a historických reportů – jsou v „koncentrovaných jednotkách“. To dává uživateli i jeho lékařskému týmu zkreslený obraz. Lékař, který prochází report, může vidět CDD 30 jednotek a neuvědomit si, že pacient ve skutečnosti dostal 60 skutečných jednotek. To vede k nesprávnému hodnocení léčby.
- **Změněné myšlení:** Po delším používání si uživatel začne „myslet“ v hodnotách aplikace snížených na polovinu. Zvykne si, že jeho ISF je 100 mg/dl (5,6 mmol/l) nebo jeho bazál je 0,5 U/h, a zapomene, že jde o „koncentrované“ hodnoty. Vzniká tak nebezpečná závislost na systému a ztráta přehledu o skutečné potřebě inzulínu. To je zásadní pro bezpečnost při poruše pumpy nebo problémech s aplikací.

**Závěr:** Tato metoda vyžaduje naprostou ostražitost a nutí uživatele neustále přepočítávat mezi „koncentrovaným světem“ v aplikaci a skutečným světem. Každé podání inzulínu mimo systém nebo kontrola dat tento způsob myšlení naruší a představuje vážné riziko. Zásadně to mění význam každého čísla v systému.
```

## Použití parametru koncentrace (nová funkce v AAPS 4.0)

Aby se snížila rizika použití upraveného profilu, nová funkce řídí koncentraci inzulínu přímo v AAPS. Tato funkce provádí přepočty automaticky, takže hlavní aplikace může vždy pracovat ve **skutečných mezinárodních jednotkách (IU)**.

### Jak to funguje: automatický přepočet

Hlavním principem je jasné oddělení logiky aplikace od komunikace s pumpou:

- **AAPS používá mezinárodní jednotky:** Hlavní databáze AAPS, algoritmy, reporty a logy **vždy používají skutečné IU**. To znamená, že váš IOB, CDD a nastavení léčby (bazál, ISF, IC) odpovídají skutečným biologickým jednotkám inzulínu.
- **Ovladač pumpy používá koncentrované jednotky:** Všechny hodnoty odeslané do ovladače pumpy nebo z něj přijaté se automaticky přepočítají na „koncentrované jednotky“ v ovladači pumpy, podle zvolené koncentrace.
  - **Příklad s U200:** Když uživatel požádá o **bolus 1 jednotky**, ovladač pumpy dostane **0,5 CU (koncentrované jednotky)** a ty pošle do pumpy. Pumpa (nastavená pro U100) pak podá **5 µl**, které obsahují **1 IU inzulínu U200**.

### Výhody a zbývající rizika

**Výhody:**

- Odpadá potřeba upraveného profilu a s ním spojené chyby při přepočtech v hlavě.
- Uživatelé mohou vždy „myslet“ ve skutečných IU.
- Pro externí bolus perem stačí na peru nastavit požadované množství inzulínu (bez ohledu na použité pero a koncentraci inzulínu). Žádný přepočet není potřeba, protože pera U100 i U200 vždy nastavují dávku v IU.
- Všechny reporty a data v AAPS (CDD, IOB) jsou ve skutečných IU, takže jsou jasné pro uživatele i jeho lékařský tým.
- Odpadá riziko špatného výpočtu externích bolusů, protože se zapisují ve skutečných IU.

**Zbývající rizika:**

- **Přechod ve způsobu myšlení:** Uživatelé, kteří přecházejí z metody „upraveného profilu“, musí svůj profil vrátit na správný skutečný profil (tj. dvakrát silnější, pokud přecházejí z U200) a potřebují čas, aby si přizpůsobili **způsob myšlení**. Po době, kdy byli zvyklí na „koncentrované“ hodnoty v aplikaci, se musí znovu naučit věřit **skutečným, neskrytým hodnotám v IU**, které se zobrazují všude. Toto přechodné období nese riziko chybného výkladu.
- **Ruční bolus z pumpy:** Použití vlastní funkce bolusu na pumpě (mimo AAPS) vede k předávkování o 100 %, protože pumpa podává inzulín U200 s výpočtem objemu pro U100.
- **Obecné varování:** Použití nestandardních koncentrací zůstává pokročilým postupem s riziky a oficiálně se nedoporučuje.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Nalepte si na pumpu trvalý štítek **„Inzulín U200“** jako připomínku, abyste na to nikdy nezapomněli!
```

### Zobrazení v uživatelském rozhraní

Aby bylo vše jasné, uživatelské rozhraní tam, kde je to důležité, zobrazuje skutečné i koncentrované jednotky. Pokud je aktuální inzulín U100, uživatelské rozhraní zůstává beze změny.

**Příklady zobrazení:**

- **Dialog průběhu bolusu:**
  - Dialog průběhu bolusu je součástí hlavní aplikace AAPS, takže se zobrazují jen informace v IU (v souladu s volbou uživatele): **`2.50 U / 10.00 U delivered`**
- **Rozhraní ovladače pumpy (aktuální stav):**
  - V přehledu pumpy se podané množství zobrazuje v obou jednotkách; například pokud je zvolena koncentrace `U200`: **`Last Bolus: 10 U (5 CU) (10')`**

**Upozornění:** Obě jednotky (U a CU) jsou vidět jen v hlavním přehledu pumpy. Podle vaší pumpy můžete mít i jiné obrazovky, kde se zobrazují jen koncentrované jednotky. Historická data v ovladačích pump obvykle zůstávají v „koncentrovaných jednotkách“.

### Zapnutí funkce

Kvůli bezpečnostním rizikům není tento parametr ve výchozím stavu zapnutý. Pro aktivaci splňte Cíl 3 a v obecném nastavení zapněte **Podpora koncentrace inzulínu**.

### Vytvoření nového inzulínu s jinou koncentrací

Pro vytvoření inzulínu s jinou koncentrací nejdříve otevřete **Spravovat → Nastavení inzulínu**.

- Klepněte na ikonu „+“ v dolní části obrazovky.
- V rozbalovací nabídce vyberte novou požadovanou koncentraci (k dispozici jsou U10, U20, U50, U100, U200).
  - Diluted concentrations like U10, U20 or U50 are for children with very low basal rates.
  - U200 je spíše pro dospělé s vysokou potřebou inzulínu.

  ![Rozbalovací nabídka koncentrace v Nastavení inzulínu](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Upravte čas vrcholu, dobu působnosti inzulínu (DIA) a případně si nastavte přezdívku inzulínu (volitelné).
- Použijte tlačítko pro uložení vpravo nahoře na obrazovce.

V tomto kroku je inzulín vytvořený, ale nedá se vybrat přímo v **Nastavení inzulínu**.

### Přepnutí koncentrace z U100 na Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Z bezpečnostních důvodů AAPS zaznamená změnu koncentrace jen při výměně zásobníku nebo výměně patche/podu.
```

Pokud začínáte s inzulínem U100, celý váš profil, historická data i reporty odpovídají standardu mezinárodních jednotek, takže je přepnutí velmi „snadné“:

- U patch/pod pumpy máte při výměně pumpy zvláštní krok, ve kterém vyberete inzulín, který do ní dáváte.
- U pumpy s hadičkou klepněte v Přehledu (rozbalený stavový řádek) na tlačítko Plnění/doplňování (pro výměnu inzulínu) a pak klepněte na tlačítko „Změnit“.

1. V rozbalovací nabídce vyberte cílovou koncentraci (např. `U200`).
1. Pak níže vyberte správný inzulín. Dokud volbu nepotvrdíte, popisek nad jeho názvem ukazuje **Bude aktivován** (místo **Aktuálně aktivní**).

   ![Vybraný, ale ještě nepotvrzený inzulín: Bude aktivován](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Důležité:** Změna koncentrace se v AAPS zaznamená až po tom, co se přepnutí profilu použije v pumpě.
   - Tento krok je povinný u všech patch/pod pump.
   - U pump s hadičkou počkejte, až se přepnutí profilu použije v pumpě, nebo až se použije v **Spravovat → Profil** či v **Nastavení inzulínu**.

To je vše!

Pokud při změně inzulínu běží dočasné **Přepnutí profilu** (s nastaveným trváním), nový inzulín dostane také profil, který se vrátí po skončení dočasného přepnutí. Starý inzulín se nevrátí.

### Přepnutí koncentrace pro uživatele s inzulínem U200 a profilem 50 % (AAPS 4)

Pokud už v pumpě používáte U200, ale s profilem 50 %, musíte oproti standardnímu přepnutí z inzulínu U100 udělat další kroky.

Pamatujte, že nejtěžší asi nebude správně provést přepnutí v AAPS, ale znovu naučit svůj mozek myslet v „IU“ místo v „CU“. Všechny obvyklé hodnoty bolusů (snídaně, oběd, večeře...) budou dvakrát vyšší, stejně tak vaše CDD, bazální dávky atd. Během prvních několika týdnů musíte být velmi opatrní, abyste neudělali chybu, dokud zase nebudete „myslet“ v mezinárodních jednotkách.

- Nejdříve si připravte nový profil, ve kterém všechny hodnoty odpovídají mezinárodním jednotkám:
  - Proveďte dočasné přepnutí profilu na 200 % vašeho standardního běžícího profilu.
  - Otevřete nabídku (☰) → **Ošetření**, přejděte na kartu **Přepnutí profilu** a naklonujte nový profil 200 % (viz [Klonování přepnutí profilu](#your-aaps-profile-clone-profile-switch)).
  - Až do další výměny zásobníku nebo patche se přepněte zpět na svůj standardní profil.
  - Přejděte do **Spravovat → Profil** a přejmenujte tento nový profil na jasný název (bude to váš budoucí profil spojený s inzulínem U200 nastaveným v AAPS 4).
- Pokud používáte funkci Dynamická ISF (DynISF), musíte ji alespoň na jeden týden vypnout:
  - Celá vaše historie zaznamenaná v AAPS nebo Nightscoutu je ve špatných jednotkách (CU), tedy poloviční oproti skutečné hodnotě v mezinárodních jednotkách. Než ji znovu zapnete, počkejte alespoň jeden týden s běžícím inzulínem U200.
- Teď jste připraveni přepnout inzulín (s novým U200 definovaným v **Nastavení inzulínu**) při příští výměně inzulínu nebo výměně podu.
- Až se nový inzulín U200 správně použije, nezapomeňte aktivovat nový standardní profil připravený v prvním kroku.

## Jak řešit externí bolusy s různými pery?

### S inzulínem U200 a profilem 50 % (AAPS 3)

Pamatujte, že dílky na všech perech jsou v mezinárodních jednotkách. Bez ohledu na použité pero (U100, U200) proto musíte při externím bolusu perem přepočítávat oběma směry:

- Z AAPS do pera: pokud kalkulačka navrhne bolus, nebo máte na mysli určité množství, vynásobte ho při nastavení na peru 2 oproti stejnému bolusu podanému přes AAPS.
- Z pera do AAPS: pokud jste na peru nastavili množství pro externí bolus, vydělte ho 2 a toto množství zapište do AAPS (tlačítko Inzulín, externí bolus), aby byl výpočet IOB v CU (koncentrovaných jednotkách) správný.

### S inzulínem U200 a řízením koncentrace přímo v AAPS 4

S řízením koncentrace přímo v AAPS je vše mnohem jednodušší: stačí na peru nastavit požadované množství (bez ohledu na pero a odpovídající inzulín) a zapsat ho do AAPS.

- Pokud v tlačítku Inzulín zvolíte externí bolus, můžete vybrat jakýkoli typ inzulínu definovaný v **Nastavení inzulínu** (hlavně U100, U200 pro pera). Tak dostanete velmi přesně vypočítaný IOB, i když se vrchol/DIA inzulínu v peru hodně liší od vrcholu/DIA inzulínu v pumpě.
