## Nejčastější otázky uživatelů AAPS

Jak sem přidat další otázky: Postupujte podle těchto pokynů: [odkaz](../make-a-PR.md)

## Obecné

### Mohu si prostě stáhnout instalační soubor AndroidAPS?

Ne. Pro AndroidAPS neexistuje žádný stažitelný soubor apk. Musíte si jej sami [sestavit](../Installing-AndroidAPS/Building-APK.md). Zde je odůvodnění:

Systém AndroidAPS slouží k ovládání vaší pumpy a dávkování inzulinu. Podle současných předpisů jsou v Evropě všechny systémy klasifikované jako IIa nebo IIb zdravotnickými zařízeními, která vyžadují regulační schválení (označení CE) a která potřebují různé studie a schválení. Distribuce neregulovaných zařízení je nezákonná. Podobná nařízení platí také v ostatních částech světa.

Toto nařízení se netýká pouze prodeje (ve smyslu získat za něco peníze), ale platí pro jakýkoli způsob distribuce (i kdyby byla zdarma). Sestavit si zdravotnické zařízení sám pro sebe je jediným způsobem, jak se tomuto nařízení vyhnout.

Proto nejsou soubory APK k dispozici.

### Jak začít?

Za prvé, musíte si **opatřit kompatibilní hardwarové komponenty**:

* Podporovanou [inzulínovou pumpu](Pump-Choices.md) 
* [smartphone s operačním systémem Android](Phones.md) (Apple iOS není systémem AndroidAPS podporován – podívejte se na [iOS Loop](https://loopkit.github.io/loopdocs/)) a 
* [systém pro kontinuální monitorování glykémie](../Configuration/BG-Source.md). 

Za druhé, musíte **nastavit hardware**. Viz [příklad nastavení s podrobným návodem](Sample-Setup.md).

Za třetí, musíte **nastavit své softwarové komponenty**: AndroidAPS a zdroj CGM/FGM.

Za čtvrté, musíte se seznámit s funkcí **systému OpenAPS a pochopit jej, abyste mohli kontrolovat parametry zásadní pro vaši léčbu**. Základním principem uzavřené smyčky je, že máte správně nastavené dávkování bazálního inzulínu a inzulíno-sacharidový poměr. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících určité jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provádět, byly z důvodu bezpečnosti omezeny (viz maximální povolený dočasný bazál v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete „plýtvat“ povolenými změnami dávkování dočasného bazálu na to, abyste jimi opravovali špatně nastavený základní bazál. Pokud jste například často příliš nízko ještě před jídlem, pak pravděpodobně vaše bazální dávky potřebují upravit. Můžete použít nástroj [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig), který vám připraví řadu návrhů, zda a které bazální dávky a/nebo citlivosti na inzulín byste měli upravit, a také to, zda je nutné změnit inzulíno-sacharidový poměr. Nebo můžete vyzkoušet a nastavit své bazály [postaru](http://integrateddiabetes.com/basal-testing/).

### Jaká jsou praktická doporučení pro provoz smyčky?

* Pokud nechcete, aby někdo mohl snadno upravit vaše nastavení, pak můžete celou nabídku Nastavení chránit heslem tak, že v nabídce Nastavení vyberte možnost „Heslo do nastavení“ a zadáte své zvolené heslo. Při příštím vstupu do nabídky Nastavení budete muset zadat heslo, abyste mohli pokračovat dál. Pokud budete později chtít ochranu heslem odstranit, přejděte v nabídce do „Heslo do nastavení“ a odstraňte text.

* Pokud máte v úmyslu používat aplikaci prostřednictvím hodinek s Wear OS na bolusy nebo změnu nastavení, pak je třeba zajistit, aby v systému Android nebyla blokovaná oznámení z AndroidAPS. Potvrzení různých akcí přicházejí prostřednictvím oznámení.

* Pokud si sundáte pumpu před sprchováním/koupáním/plaváním/sportem atd., přidržte prst na textu „Otevřená smyčka“ / „Uzavřená smyčka“ vlevo nahoře na hlavní domovské stránce a vyberte možnost „Odpojit pumpu na…“, následně vyberte počet hodin, po které plánujete mít pumpu odpojenou. Na dané časové období se tím váš bazál nastaví na nulu. Minimální délka doby odpojení je odvozena z minimální délky dočasného bazálu, kterou lze nastavit na pumpě, takže pokud si ji přejete odpojit na kratší časové období nebo připojíte svou pumpu dříve, než se očekávalo, pak přidržte tlačítko „Pozastaveno (X min)“ a vyberte „Uvolnit“. Po opětovném připojení pumpy tak bude váš IOB přesně odpovídat skutečnosti.

* Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Proto pokud jste některá měření ze senzoru nezachytili, může trvat nějakou dobu, než AndroidAPS nasbírá potřebná nová data a než pak znovu smyčku spustí.

* Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky:
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Jaké vybavení pro případ nouze se doporučuje brát s sebou?

Především s sebou musíte mít vybavení pro případ nouze, jako každý jiný pacient s DM1 na inzulínové pumpě. V případě, že používáte smyčku se systémem AndroidAPS, je důrazně doporučeno mít u sebe nebo v dosahu následující doplňkové vybavení:

* Powerbanku pro dobití vašeho smartphonu, hodinek a (případně) BT čtečky
* Zálohu používaných aplikací v cloudu (Dropbox, Google Drive…): nejnovější soubor APK aplikace AndroidAPS a vaše heslo k úložišti klíčů, soubor s nastavením aplikace AndroidAPS, soubor s nastavením aplikace xDrip, upravená aplikace Dexcom…
* Baterie do pumpy

### Jak bezpečně zajistit CGM/FGM?

Můžete ho přelepit tejpem: K dispozici jsou již vystřižené přelepky určené pro nejběžnější CGM systémy (hledejte na Googlu nebo eBay). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

Můžete ho zafixovat: K dispozici jsou speciální krytky, které zafixují CGM/FGM na ruce pomocí gumového pásku (hledejte na Googlu nebo eBay).

## Nastavení AndroidAPS

### Efekt jednotlivých nastavení

Tato tabulka vám pomůže optimalizovat nastavení. Nejlepší bude, když ji projdete odshora dolů. Cílem je mít dané nastavení správně, předtím než začnete měnit další. Postupujte po malých krocích a neprovádějte velké změny najednou. Jako vodítko můžete použít nástroj [Autotune](https://autotuneweb.azurewebsites.net/), ale nesmíte mu slepě věřit: ve vašem případě nebo za všech okolností nemusí fungovat správně. Myslete na to, že jednotlivá nastavení se navzájem ovlivňují – můžete mít „špatné“ nastavení, které bude za určitých okolností fungovat dobře (např. vysoký bazál a současně nízký sacharidový poměr), ale nebude tak fungovat vždy. To znamená, že musíte vždy zohledňovat všechna nastavení a ověřovat, zda fungují společně za různých okolností.<table class="tg" border=1> 

<th class="tg-0pky">
  Nastavení
</th>

<th class="tg-0pky">
  Popis a testování
</th>

<th class="tg-0pky">
  Efekt
</th>

<td class="tg-0pky">
  Celková doba aktivity inzulínu (DIA)
</td>

<td class="tg-0pky">
  Doba, během níž se veškerý inzulin vstřebá/spotřebuje.<br /><br />Tato hodnota je často nastavena jako příliš nízká. Většina lidí bude mít nastaveno 5 hodin, v některých případech 6 nebo 7 hodin.
</td>

<td class="tg-0pky">
  Příliš krátká hodnota DIA může vést k nízkým glykémiím. A naopak.<br /><br />Je-li hodnota DIA příliš krátká, AAPS si bude příliš brzy myslet, že váš předchozí bolus je již zcela spotřebován, a, v případě, že je vaše glykémie stále vyšší, přidá vám více inzulinu. (Systém ve skutečnosti nečeká tak dlouho, ale počítá predikce toho, co by se mohlo stát, a bude přidávat inzulin). Tímto způsobem pak dochází k „hromadění inzulinu“, o kterém však AAPS neví.<br /><br />Příkladem příliš krátkého DIA je situace, kdy je vysoká glykémie přehnaně korigována AAPS a glykémie následně poklesne příliš nízko.
</td>

<td class="tg-0pky">
  Základní bazální dávka (U/h)
</td>

<td class="tg-0pky">
  Množství inzulinu vydané v daném časovém okamžiku, aby zůstala glykémie stabilní.<br /><br />Testujte své bazály tak, že pozastavíte smyčku, nebudete konzumovat sacharidy, počkáte cca 5 hodin po jídle a budete sledovat, jak se glykémie mění. Tento test několikrát zopakujte.<br /><br />Pokud glykémie klesá, bazální dávka je příliš vysoká. Pokud glykémie stoupá, bazální dávka je příliš nízká.
</td>

<td class="tg-0pky">
  Příliš vysoký bazál může vést k nízkým glykémiím. Totéž platí i naopak.<br /><br />Výchozí výpočty AAPS se drží těchto výchozích bazálních dávek. Je-li bazál příliš vysoký, „dočasný nulový bazál“ bude započítán jako větší záporný IOB, než by měl být. To povede k tomu, že AAPS bude provádět větší počet dílčích korekcí, než by měl, aby dostal IOB zpět na nulu.<br /><br />Příliš vysoký bazál tedy bude způsobovat nízké glykémie nejen v době, kdy je daná bazální dávka naprogramována, ale také následně, protože AAPS se bude snažit zkorigovat jej na nulu.<br /><br />Stejně tak příliš nízký bazál může vést k vysokým glykémiím a také k následnému neúspěchu při jejich snižování zpět na cílovou hodnotu.
</td>

<td class="tg-0pky">
  Korekční faktor / citlivost na inzulin (ISF) (mmol/l/U nebo mg/dl/U)
</td>

<td class="tg-0pky">
  O kolik mmol sníží glykémii 1 jednotka inzulinu.<br /><br />Za předpokladu, že máte správný bazál, můžete citlivost otestovat tak, že pozastavíte smyčku, zkontrolujete, že IOB je nula, a vezmete si pár glukózových tablet, abyste se dostali na stabilní ‘vyšší’ glykémii.<br /><br />Poté si aplikujete dané množství inzulinu (podle aktuálního korekčního faktoru), abyste se dostali na svou cílovou glykémii.<br /><br />Buďte opatrní, protože korekční faktor bývá často nastaven příliš nízký. Příliš nízký znamená, že vám 1 jednotka sníží glykémii rychleji, než jste očekávali.
</td>

<td class="tg-0pky">
  Nižší citlivost = každá jednotka inzulinu způsobí menší pokles glykémie (někdy se označuje jako ‘agresivnější / silnější’). Pokud je příliš nízká, může způsobovat nízké glykémie.<br /><br />Vyšší citlivost = každá jednotka inzulinu způsobí větší pokles glykémií (někdy se označuje jako ‘méně agresivní / slabší’). Je-li tato hodnota příliš vysoká, může způsobovat vysoké glykémie.<br /><br />Citlivost na inzulin, která je nastavena příliš nízko (není neobvyklé) může způsobovat ‘přehnané korekce’, protože systém AAPS si bude myslet, že ke srovnání vysoké glykémie je třeba použít více inzulinu, než kolik je ve skutečnosti potřeba. Toto může vést k efektu ‘horské dráhy’ (zejména při hladovění). Pokud se to děje, musíte zvýšit svou hodnotu citlivosti. To znamená, že systém AAPS bude používat menší korekční dávky, čímž se předejde přehnané korekci, kdy by vysoké glykémie střídaly propady do nízké glykémie.<br /><br />A naopak, pokud je citlivost nastavena jako příliš vysoká, korekce mohou být nedostatečné, tzn. vaše glykémie bude zůstávat nad cílovou hodnotou – to je patrné zejména v noci.
</td>

<td class="tg-0pky">
  Inzulino-sacharidový poměr (CR) (g/U)
</td>

<td class="tg-0pky">
  Kolik gramů sacharidů pokryje jedna jednotka inzulinu.<br /><br />Za předpokladu, že máte správný bazál, můžete tento parametr otestovat tak, že zkontrolujete, že IOB je nula a vy máte dobrou glykémii, zkonzumujete přesně odměřené množství sacharidů a aplikujete si příslušnou dávku inzulinu podle aktuálního sacharidového poměru. Ideální je k testu využít jídlo, které v danou denní dobu běžně jíte a přesně spočítat obsah sacharidů.
</td>

<td class="tg-0pky">
  Nižší sacharidový poměr = menší množství jídla na jednotku inzulinu, tzn. dostanete více inzulinu pro dané množství sacharidů. Nižší sach. poměr je označován také jako ‘agresivnější’.<br /><br />Vyšší sacharidový poměr = větší množství jídla na jednotku inzulinu, tzn. dostanete méně inzulinu pro dané množství sacharidů. Vyšší sach. poměr je označován také jako ‘méně agresivní’.<br /><br />Jestliže po strávení jídla a poté, co se váš IOB vrátil na nulu, zůstává vaše glykémie vyšší než před jídlem, máte pravděpodobně nastavenu příliš vysokou hodnotu sacharidového poměru. A naopak, pokud je vaše glykémie nižší než před jídlem, sach. poměr je příliš nízký.
</td></table> 

### Algoritmus APS

#### Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3 h](../../images/Screenshot_AMA3h.png) V AMA režimu ve skutečnosti DIA neznamená „doba působnosti inzulínu“. Je to parametr, který dříve souvisel s DIA. Tento parametr nyní znamená, „dokdy by měla být korekce dokončená“. Nemá to žádnou souvislost s výpočtem IOB. V režimu OpenAPS SMB už tento parametr není potřebný vůbec.

### Profil

#### Proč se nyní používá 5 h jako dolní limit DIA (doba působnosti inzulínu) namísto 2–3 h?

Je to dobře vysvětleno [v tomto článku](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Nezapomeňte po úpravě svého DIA `AKTIVOVAT PROFIL`.

#### Co způsobuje, že smyčka často snižuje mou glykémii až k hranici hypoglykémie bez COB (žádné aktivní sacharidy)?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně, pak je toto chování obvykle způsobeno příliš nízkou citlivostí. Příliš nízká citlivost typicky vypadá takto:

![Příliš nízká citlivost](../images/isf.jpg)

#### Co způsobuje výrazné vrcholy po jídle při používání uzavřené smyčky?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně a vaše glykémie se po strávení všech sacharidů vrátí do cílového rozmezí, zkuste před jídlem použít dočasný cíl „Před jídlem“ v AndroidAPS nebo se poraďte se svým lékařem, jak dlouho byste měli po bolusu čekat, než začnete jíst. Je-li vaše glykémie po jídle vysoká a je-li vysoká i poté, co jsou všechny sacharidy stráveny, měli byste se svým lékařem zvážit možnost snížení sacharidového poměru. Je-li vaše glykémie vysoká, když máte aktivní COB, a příliš nízká poté, co jsou všechny sacharidy stráveny, zvažte ve spolupráci se svým lékařem zvýšení sacharidového poměru a také bolusování s adekvátním předstihem.

## Další nastavení

### Nastavení Nightscoutu

#### NSClient v AndroidAPS hlásí 'není povoleno' a nenahrává žádná data. Co mohu dělat?

V části NSClient zkontrolujte 'Nastavení připojení'. Možná zrovna nejste na povolené síti WLAN nebo jste aktivovali možnost 'Pouze při nabíjení' a nabíjecí kabel není připojen.

### Nastavení CGM

#### Proč AndroidAPS hlásí 'Zdroj glykémií nepodporuje pokročilé filtrování'?

Pokud v nativním režimu xDripu používáte jiný CGM/FGM než Dexcom G5 nebo G6, zobrazí se vám na kartě openAPS v AndroidAPS toto upozornění. Více podrobností viz [Vyhlazování glykémií](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpy

### Kde nosit pumpu?

Existuje bezpočet možností, kam pumpu umístit. Nezáleží na tom, zda používáte smyčku nebo ne. Pokud byste raději měli bezhadičkovou pumpu a používáte se smyčkou pumpu Dana, vyzkoušejte 30cm set s originálním břišním pásem.

### Baterie

Smyčka může vybíjet baterii rychleji než v normálním režimu. Je to proto, že systém s pumpou komunikuje přes bluetooth mnohem víc, než by to uživatel dělal ručně. Nejlepší je vyměnit baterii už při 25 %, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k nastavit alarm upozorňující na vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P ve svém Nightscoutu. Mezi triky, jak zvýšit životnost baterie, patří:

* Zkraťte časový interval pro podsvícení LCD displeje (v menu nastavení pumpy).
* Zkraťte časový interval pro podsvícení (v menu nastavení pumpy).
* Nastavte upozorňování tak, aby se namísto vibrace ozýval zvukový signál (v menu nastavení pumpy).
* Na pumpě používejte tlačítka pouze pro výměnu inzulínu, jinak k prohlížení historie, stavu baterie a stavu zásobníku používejte raději AndroidAPS.
* Aplikace AndroidAPS může být na některých telefonech často ukončována systémem kvůli úspoře energie nebo paměti RAM. Pokud se však AndroidAPS při každém startu znovu inicializuje, tak pokaždé znovu navazuje spojení s pumpou prostřednictvím Bluetooth a znovu načítá aktuální bazální dávky a historii bolusů. To vybíjí baterii. Abyste zjistili, jestli k tomu dochází, přejděte do Nastavení > NSClient a zapněte možnost 'Zaznamenávat spuštění aplikace do NS'. Nightscout pak obdrží událost při každém restartu AndroidAPS, čímž tento problém snadno odhalíte. Abyste tomuto chování zabránili, udělte aplikaci AndroidAPS výjimku, aby ji systém nevypínal v době nečinnosti (v menu úspory baterie na vašem telefonu).
* Očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistoty z výroby.
* V případě pump DanaR/RS při spouštěcí sekvenci protéká baterií velký proud, aby záměrně přerušil ochranný povlak (který zabraňuje ztrátě kapacity baterie při skladování), ale přerušení ochranného povlaku se nedaří vždy ve 100 % případů. Buďto baterie 2krát až 3krát vyjměte a znovu vložte (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přiložením k oběma pólům baterie na zlomek sekundy).
* Viz také další tipy pro [konkrétní typy baterií](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) při použití pumpy Combo.

### Výměna zásobníků a kanyl

Výměnu zásobníku nelze provést přes AndroidAPS, výměna musí být provedena přímo na pumpě jako dřív.

* Dlouze stiskněte "Otevřená smyčka"/"Uzavřená smyčka" na hlavní obrazovce AndroidAPS a vyberte 'Pozastavit smyčku na 1 h'
* Nyní odpojte pumpu a vyměňte zásobník podle instrukcí pumpy.
* Jak budete mít pumpu znovu připojenou, obnovte smyčku dlouhým stiskem na 'Pozastaveno (X min)'.

Pro výměnu kanyly se však nepoužívá funkce „naplnit infúzní set“ na pumpě, ale set a/nebo kanyla se plní bolusem, který se nezobrazuje v historii bolusů. To znamená, že se nepřeruší běžící dočasná bazální dávka. Na kartě Akce, použijte tlačítko Plnění/Doplňování, abyste nastavili množství inzulínu k naplnění infúzního setu a plnění spustili. Pokud množství není dostatečné, opakujte plnění. Můžete si nastavit výchozí množství pro plnění v Nastavení > Jiné > Hodnoty plnění/doplňování. Podívejte se do příbalového letáku kanyl, kolik jednotek je nutné do kanyly naplnit v závislosti na délce jehly a hadičky.

## Hygiena

### Co dělat při sprchování a koupání?

Při sprchování a koupání si můžete pumpu sundat. Na tak krátkou dobu ji obvykle nebudete potřebovat. Ale zároveň byste o tom měli systému AAPS říct, aby byly výpočty IOB správné. Stiskněte světle modré pole „Otevřená smyčka“ / „Uzavřená smyčka“ vlevo nahoře na hlavní obrazovce. Vyberte možnost **„Odpojit pumpu na XY min“** podle plánované doby odpojení. Jakmile pumpu znovu připojíte, můžete přidržet stejné tlačítko s vybrat možnost „Znovu připojit pumpu“ nebo prostě počkat, až uplyne vybraná doba odpojení. Smyčka bude automaticky pokračovat.

## Práce

V závislosti na druhu vaší práce, možná používáte různé nastavení v pracovních dnech. Jako uživatel smyčky byste měli přemýšlet o změně profilu pro svůj odhadovaný pracovní den (např. více než 100% na 8h při sezení kolem nebo méně než 100% při aktivní činnosti), vysoké nebo nízké dočasné cíle nebo časový posun Vašeho profilu, pokud vstanete mnohem dříve nebo později než pravidelně. Pokud používáte Nightscout profily, můžete také vytvořit druhý profil (např. "domov" "pracovní den"), a přepnout se na profil, který skutečně potřebujete.

## Volnočasové aktivity

## Sporty

## Sex

Můžete odpojit pumpu, aby nepřekážela, ale měli byste to říci AAPS, aby výpočty IOB byly správné. Stiskněte světle modré pole „Otevřená smyčka“ / „Uzavřená smyčka“ vlevo nahoře na hlavní obrazovce. Vyberte možnost **„Odpojit pumpu na XY min“** podle plánované doby odpojení. Jakmile pumpu znovu připojíte, můžete přidržet stejné tlačítko s vybrat možnost „Znovu připojit pumpu“ nebo prostě počkat, až uplyne vybraná doba odpojení. Smyčka bude automaticky pokračovat.

## Alkohol

Požívání alkoholu je v režimu uzavřené smyčky poměrně riskantní, protože algoritmus uzavřené smyčky nedokáže správně předpovědět, jak bude glykémie alkoholem ovlivněna. Musíte si najít vlastní způsob, jak podobné situace řešit, a to pomocí následujících funkcí v AndroidAPS:

* Vypnout režim uzavřené smyčky a provést nezbytné zásahy ručně nebo
* nastavit vyšší dočasný cíl a vypnout funkci UAM, aby smyčka nezvyšovala váš IOB kvůli neoznámenému jídlu nebo
* provést přepnutí profilu a nastavit profil na výrazně nižší hodnoty než 100 % 

Jestliže požíváte alkohol, je nezbytné průběžně sledovat CGM a ručně předcházet hypoglykemii příjmem sacharidů.

## Spánek

### Jak mohu provozovat smyčku během noci bez mobilního a WIFI záření?

Mnoho uživatelů na noc přepíná telefon do režimu letadlo. Pokud chcete provozovat smyčku během spánku s telefonem v režimu letadlo, postupujte následovně (toto bude fungovat pouze se zdrojem glykémií xDrip + nebo upravená Dexcom aplikace. Nebude to fungovat pokud získáváte glykémie přes Nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

Nebudete moci přijímat telefonní hovory ani nebudete mít přístup k internetu. Ale smyčka poběží.

## Cestování

### Jak se vypořádat s cestováním přes časové zóny?

S DanouR a korejskou verzí DanyR nemusíte dělat nic. Pro ostatní pumpy viz další podrobnosti na stránce [Cestování mezi časovými pásmy](../Usage/Timezone-traveling.md).

## Pobyt v nemocnici

Chcete-li svému lékaři (lékařům) předat nějaké informace o AndroidAPS DIY smyčce, můžete si vytisknout část [Příručka k systému AndroidAPS pro lékaře](../Resources/clinician-guide-to-AndroidAPS.md).

## Kontrola u vašeho diabetologa

### Výkazy

Můžete ukázat své výkazy z Nightscoutu (https://ADRESA-VAŠEHO-NS.com/report) nebo vyzkoušet nástroj [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)