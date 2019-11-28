# Nejčastější otázky uživatelů APS

Jak sem přidat další otázky: Postupujte podle těchto pokynů: [odkaz](../make-a-PR.md)

# Obecné

## Mohu si prostě stáhnout instalační soubor AndroidAPS?

Ne. Pro AndroidAPS neexistuje žádný stažitelný soubor apk. Musíte si jej sami [sestavit](../Installing-AndroidAPS/Building-APK.md). Zde je odůvodnění:

Systém AndroidAPS slouží k ovládání vaší pumpy a dávkování inzulinu. Podle současných předpisů jsou v Evropě všechny systémy klasifikované jako IIa nebo IIb zdravotnickými zařízeními, která vyžadují regulační schválení (označení CE) a která potřebují různé studie a schválení. Distribuce neregulovaných zařízení je nezákonná. Podobná nařízení platí také v ostatních částech světa.

Toto nařízení se netýká pouze prodeje (ve smyslu získat za něco peníze), ale platí pro jakýkoli způsob distribuce (i kdyby byla zdarma). Sestavit si zdravotnické zařízení sám pro sebe je jediným způsobem, jak se tomuto nařízení vyhnout.

Proto nejsou soubory APK k dispozici.

## Jak začít?

Za prvé, musíte si **opatřit kompatibilní hardwarové komponenty**:

* podporovanou [inzulínovou pumpu](Pump-Choices.md) 
* [smartphone s operačním systémem Android](Phones.md) (Apple iOS není systémem AndroidAPS podporován – podívejte se na [iOS Loop](https://loopkit.github.io/loopdocs/)) a 
* [systém pro kontinuální monitorování glykémie](../Configuration/BG-Source.rst). 

Za druhé, musíte **nastavit hardware**. Viz [příklad nastavení s podrobným návodem](Sample-Setup.md).

Za třetí, musíte **nastavit své softwarové komponenty**: AndroidAPS a zdroj CGM/FGM.

Za čtvrté, musíte se seznámit s funkcí **systému OpenAPS a pochopit jej, abyste mohli kontrolovat parametry zásadní pro vaši léčbu**. Základním principem uzavřené smyčky je, že máte správně nastavené dávkování bazálního inzulínu a inzulíno-sacharidový poměr. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících určité jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provádět, byly z důvodu bezpečnosti omezeny (viz maximální povolený dočasný bazál v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete „plýtvat“ povolenými změnami dávkování dočasného bazálu na to, abyste jimi opravovali špatně nastavený základní bazál. Pokud jste například často příliš nízko ještě před jídlem, pak pravděpodobně vaše bazální dávky potřebují upravit. Můžete použít nástroj [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig), který vám připraví řadu návrhů, zda a které bazální dávky a/nebo citlivosti na inzulín byste měli upravit, a také to, zda je nutné změnit inzulíno-sacharidový poměr. Nebo můžete vyzkoušet a nastavit své bazály [postaru](http://integrateddiabetes.com/basal-testing/).

## Jaká jsou praktická doporučení pro provoz smyčky?

### Ochrana heslem

Pokud nechcete, aby někdo mohl snadno upravit vaše nastavení, pak můžete celou nabídku Nastavení chránit heslem tak, že v nabídce Nastavení vyberte možnost „Heslo do nastavení“ a zadáte své zvolené heslo. Při příštím vstupu do nabídky Nastavení budete muset zadat heslo, abyste mohli pokračovat dál. Pokud budete později chtít ochranu heslem odstranit, přejděte v nabídce do „Heslo do nastavení“ a odstraňte text.

### Chytré hodinky Android Wear

Pokud máte v úmyslu používat aplikaci prostřednictvím hodinek s Wear OS na bolusy nebo změnu nastavení, pak je třeba zajistit, aby v systému Android nebyla blokovaná oznámení z AndroidAPS. Potvrzení různých akcí přicházejí prostřednictvím oznámení.

### Odpojit pumpu

Pokud si vezmete pumpu do sprchy/na koupání/do bazénu/na sport atd. musíte dát AndroidAPS vědět, že žádný inzulín není podáván, aby počítal IOB správně.

* Dlouze stiskněte tlačítko 'Uzavřená smyčka' (v případě, že ještě nepoužíváte uzavřenou smyčku, bude na tlačítku 'Otevřená smyčka') v horní části domovské obrazovky. 
* Vyberte možnost **"Odpojit pumpu na XY h"**
* Na dané časové období se tím váš bazál nastaví na nulu.
* Minimální doba pro odpojení závisí na minimální délce TBR, který lze nastavit na pumpě. Takže pokud se chcete odpojit na kratší dobu, musíte použít nejkratší dobu pro odpojení pumpy a pak se ručně znovu připojit, jak je popsáno níže.
* Barva tlačítka 'Uzavřená smyčka' (nebo 'Otevřená smyčka') se změní na červenou a na tlačítku bude napsáno 'Odpojeno (xx m)' a bude zobrazena zbývající doba odpojení.
* AAPS se po zvoleném čase automaticky znovu připojí a vaše uzavřená smyčka bude opět fungovat.
    
    ![Odpojit pumpu](../images/PumpDisconnect.png)

* Pokud byl vybraný čas příliš dlouhý, můžete se znovu připojit ručně.

* Dlouze stiskněte červené tlačítko 'Odpojeno (xx m)'.
* Vyberte možnost 'Znovu připojit pumpu'
    
    ![Znovu připojit pumpu](../images/PumpReconnect.png)

### Doporučení nejsou založena pouze na jediné hodnotě ze senzoru CGM

Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Proto pokud jste některá měření ze senzoru nezachytili, může trvat nějakou dobu, než AndroidAPS nasbírá potřebná nová data a než pak znovu smyčku spustí.

### Další čtení

Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky:

* [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Jaké vybavení pro případ nouze se doporučuje brát s sebou?

Především s sebou musíte mít vybavení pro případ nouze, jako každý jiný pacient s DM1 na inzulínové pumpě. V případě, že používáte smyčku systému AndroidAPS, je důrazně doporučeno mít u sebe nebo v dosahu následující doplňkové vybavení:

* Powerbanku pro dobití vašeho smartphonu, hodinek a (případně) BT čtečky
* Zálohu používaných aplikací v cloudu (Dropbox, Google Drive…): nejnovější soubor APK aplikace AndroidAPS a vaše heslo k úložišti klíčů, soubor s nastavením aplikace AndroidAPS, soubor s nastavením aplikace xDrip, upravená aplikace Dexcom...
* Baterie do pumpy

## Jak bezpečně zajistit CGM/FGM?

You can tape it: There are getting sold pre-perforated 'overpatches' for common CGM systems (ask Google or ebay). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

You can fix it: There are getting sold upper arm bracelets that fix the CGM/FGM with a rubber band (ask Google or ebay).

# Nastavení AndroidAPS

Následující seznam vám pomůže s optimalizací nastavení. Nejlepší bude, když ji projdete odshora dolů. Cílem je mít dané nastavení správně, předtím než začnete měnit další. Postupujte po malých krocích a neprovádějte velké změny najednou. Jako vodítko můžete použít nástroj [Autotune](https://autotuneweb.azurewebsites.net/), ale nesmíte mu slepě věřit: ve vašem případě nebo za všech okolností nemusí fungovat správně. Myslete na to, že jednotlivá nastavení se navzájem ovlivňují – můžete mít „špatné“ nastavení, které bude za určitých okolností fungovat dobře (např. vysoký bazál a současně nízký sacharidový poměr), ale nebude tak fungovat vždy. To znamená, že musíte vždy zohledňovat všechna nastavení a ověřovat, zda fungují společně za různých okolností.

## Celková doba aktivity inzulínu (DIA)

### Popis & testování

Doba, za kterou se inzulín zcela rozloží.

Tato doba je poměrně často nastavena jako příliš krátká. Většina lidí bude mít nastaveno 5 hodin, v některých případech 6 nebo 7 hodin.

### Dopad

Příliš krátká hodnota DIA může vést k nízkým glykémiím. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

Je-li hodnota DIA příliš krátká, AAPS si bude příliš brzy myslet, že váš předchozí bolus je již zcela spotřebován, a, v případě, že je vaše glykémie stále vyšší, přidá vám více inzulinu. (Systém ve skutečnosti nečeká tak dlouho, ale počítá predikce toho, co by se mohlo stát, a bude přidávat inzulin). Tímto dochází k "hromadění inzulinu", o kterém však AAPS neví.

Příkladem příliš nízké hodnoty DIA je vysoká glykémie následovaná přehnanou korekcí AAPS, která vede k nízké glykémii.

## Základní bazální dávka (U/h)

### Popis & testování

Množství inzulínu v daném hodinovém úseku sloužící k udržení stabilní glykémie.

Svůj bazál můžete otestovat tak, že vypnete smyčku, nebudete přijímat potravu, počkáte řekněme 5 hodin po jídle a budete sledovat, jak se glykémie mění. Toto je třeba několikrát opakovat.

Pokud glykémie klesá, základní bazální dávka je příliš vysoká. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

### Dopad

Příliš vysoký bazál může vést k nízkým glykémiím. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

Výchozí výpočty AAPS se drží těchto výchozích bazálních dávek. Je-li bazál příliš vysoký, „dočasný nulový bazál“ bude započítán jako větší záporný IOB, než by měl být. To povede k tomu, že AAPS bude provádět více následných korekčních zásahů, než by měl, aby v konečném důsledku dosáhl nulového IOB.

Takže příliš vysoký bazál povede k nízkým glykémiím jak v době základní bazální dávky, tak několik hodin potom, protože AAPS provádí korekce k cílové hodnotě.

Podobně příliš nízký bazál může vést k vysokým glykémiím a následně může být obtížné vrátit glykémie zpět k cílové hodnotě.

## Korekční faktor / citlivost na inzulin (ISF) (mmol/l/U nebo mg/dl/U)

### Popis & testování

Očekávaný pokles glykémie po podání 1 jednotky inzulinu.

Za předpokladu, že máte správně nastavený bazál, ho můžete otestovat tak, že pozastavíte smyčku, zkontrolujete, že IOB je nulový, a vezmete si pár glukózových tablet, abyste se dostali na stabilní vyšší glykémii.

Poté si aplikujete adekvátní množství inzulinu (podle aktuálního nastavení citlivosti), abyste glykémii dostali na cílovou hodnotu.

Buďte opatrní, protože tato hodnota je často nastavena příliš nízko. Příliš nízký znamená, že vám 1 jednotka sníží glykémii rychleji, než jste očekávali.

### Dopad

**Nižší citlivost** (tzn. 1,5 namísto 2,5) = více agresivní / silnější – vede k větším poklesům glykémie s každou jednotkou inzulinu. Pokud je příliš nízká, může to vést k nízkým glykémiím.

**Vyšší citlivost** (tzn. 2 namísto 1,5) = méně agresivní / slabší – vede k menším poklesům glykémie s každou jednotkou inzulinu. Pokud je příliš vysoká, může to vést k vysokým glykémiím.

**Příklad:**

* Glykémie je 10,5 mmol a cílová glykémie je 5,5 mmol. 
* Chcete tedy provést korekci o 5 mmol (= 10,5 - 5,5).
* ISF = 1,5 -> 5 / 1,5 = 3,3 jednotky inzulinu
* ISF = 2,5 -> 5 / 2,5 = 2 jednotky izulinu

Je-li tato hodnota nastavena příliš nízko (není neobvyklé), může způsobovat ‘přehnané korekce’, protože systém AAPS si bude myslet, že ke srovnání vysoké glykémie je třeba použít více inzulinu, než kolik je ve skutečnosti potřeba. Toto může vést k efektu ‘horské dráhy’ (zejména při hladovění). Pokud se to děje, musíte zvýšit svou hodnotu citlivosti. Bude to znamenat, že AAPS bude používat menší korekční dávky a zabrání se tak přehnaným korekcím vysokých glykémií, které by vedly k příliš nízkým glykémiím.

Pokud je citlivost naopak nastavena příliš vysoko, bude docházet k nedostatečným korekcím a vaše glykémie bude zůstávat nad cílovou hodnotou – to je patrné zejména v noci.

## Inzulínovosacharidový poměr (IC) (g/U)

### Popis & testování

Kolik gramů sacharidů pokryje jedna jednotka inzulinu.

Někteří lidé také používají I:C jako zkratku místo IC nebo mluví o carb ratio (CR).

Za předpokladu, že máte správný bazál, můžete tento parametr otestovat tak, že zkontrolujete, že IOB je nula a vy máte dobrou glykémii, zkonzumujete přesně odměřené množství sacharidů a aplikujete si příslušnou dávku inzulinu podle aktuálního sacharidového poměru. Ideální je k testu využít jídlo, které v danou denní dobu běžně jíte a přesně spočítat obsah sacharidů.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using IC the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Příklad:
> 
> Bread unit facor (BU = 12g carbs): 2,4 -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12 / 2,4 = 5,2 -> 5,2g carbs can be covered with one unit of insulin.
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Dopad

**Nižší inzulínosacharidový poměr** = menší množství jídla na jednotku inzulinu, tzn. dostanete více inzulinu pro dané množství sacharidů. Lze také označit za „agresivnější“.

**Vyšší inzulínosacharidový poměr** = větší množství jídla na jednotku inzulinu, tzn. dostanete méně inzulinu pro dané množství sacharidů. Lze také označit za „méně agresivní“.

Jestliže po strávení jídla a poté, co se váš IOB vrátil na nulu, zůstává vaše glykémie vyšší než před jídlem, máte pravděpodobně nastavenu příliš vysokou hodnotu sacharidového poměru. A naopak, pokud je vaše glykémie nižší než před jídlem, sach. poměr je příliš nízký.

# Algoritmus APS

## Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3 h](../images/Screenshot_AMA3h.png)

V AMA režimu ve skutečnosti DIA neznamená „doba působnosti inzulínu“. Je to parametr, který dříve souvisel s DIA. Parametr nyní znamená, „do kdy by měla být korekce dokončená“. Nemá to žádnou souvislost s výpočtem IOB. V režimu OpenAPS SMB už tento parametr není potřebný vůbec.

## Profil

### Proč se nyní používá 5 h jako dolní limit DIA (doba působnosti inzulínu) namísto 2–3 h?

Je to dobře vysvětleno [v tomto článku](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Nezapomeňte po úpravě svého DIA `AKTIVOVAT PROFIL`.

### Co způsobuje, že smyčka často snižuje mou glykémii až k hranici hypoglykémie bez COB (žádné aktivní sacharidy)?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně, pak je toto chování obvykle způsobeno příliš nízkou citlivostí. Příliš nízká citlivost typicky vypadá takto:

![Příliš nízká citlivost](../images/isf.jpg)

### Co způsobuje výrazné vrcholy po jídle při používání uzavřené smyčky?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně a vaše glykémie se po strávení všech sacharidů vrátí do cílového rozmezí, zkuste před jídlem použít dočasný cíl „Před jídlem“ v AndroidAPS nebo se se svým lékařem poraďte, jak dlouho byste měli po bolusu čekat, než začnete jíst. Je-li vaše glykémie po jídle vysoká a je-li vysoká i poté, co jsou všechny sacharidy stráveny, měli byste se svým lékařem zvážit možnost snížení sacharidového poměru. Je-li vaše glykémie vysoká, když máte aktivní COB, a příliš nízká poté, co jsou všechny sacharidy stráveny, zvažte ve spolupráci se svým lékařem zvýšení sacharidového poměru a také bolusování s adekvátním předstihem.

# Další nastavení

## Nastavení Nightscoutu

### NSClient v AndroidAPS hlásí 'není povoleno' a nenahrává žádná data. Co mohu dělat?

V části NSClient zkontrolujte 'Nastavení připojení'. Možná zrovna nejste na povolené síti WLAN nebo jste aktivovali možnost 'Pouze při nabíjení' a nabíjecí kabel není připojen.

## Nastavení CGM

### Proč AndroidAPS hlásí 'Zdroj glykémií nepodporuje pokročilé filtrování'?

Pokud v nativním režimu xDripu používáte jiný CGM/FGM než Dexcom G5 nebo G6, zobrazí se vám na kartě openAPS v AndroidAPS toto upozornění. Více podrobností viz [Vyhlazování glykémií](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpa

### Kam pumpu umístit?

Existuje bezpočet možností, kam pumpu umístit. Nezáleží na tom, zda používáte smyčku nebo ne. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Baterie

Smyčka může vybíjet baterii rychleji než v normálním režimu. Je to proto, že systém s pumpou komunikuje přes bluetooth mnohem víc, než by to uživatel dělal ručně. Nejlepší je vyměnit baterii už při 25 %, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k tomu nastavit varovný alarm pro vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P své Nightscout stránky. Mezi triky, jak zvýšit životnost baterie, patří:

* zkraťte časový interval pro podsvícení LCD displeje (v menu nastavení pumpy)
* zkraťte časový interval pro podsvícení (v menu nastavení pumpy)
* nastavte upozorňování tak, aby se namísto vibrace ozýval zvukový signál (v menu nastavení pumpy)
* na pumpě používejte tlačítka pouze pro výměnu inzulínu, jinak k prohlížení historie, stavu baterie a stavu zásobníku používejte raději AndroidAPS.
* Aplikace AndroidAPS může být na některých telefonech často ukončována systémem kvůli úspoře energie nebo paměti RAM. Pokud se však AndroidAPS při každém startu znovu inicializuje, tak pokaždé znovu navazuje spojení s pumpou prostřednictvím Bluetooth a znovu načítá aktuální bazální dávky a historii bolusů. To vybíjí baterii. Abyste zjistili, jestli k tomu dochází, přejděte do Nastavení > NSClient a zapněte možnost 'Zaznamenávat spuštění aplikace do NS'. Nightscout pak obdrží událost při každém restartu AndroidAPS, čímž tento problém snadno odhalíte. Abyste tomuto chování zabránili, udělte aplikaci AndroidAPS výjimku, aby ji systém nevypínal v době nečinnosti (v menu úspory baterie na vašem telefonu).
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* Očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistoty z výroby.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Buďto baterie 2krát až 3krát vyjměte a znovu vložte (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přiložením k oběma pólům baterie na zlomek sekundy).
* viz také další tipy pro [konkrétní typy baterií](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) při použití pumpy Combo

### Výměna zásobníků a kanyl

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Dlouze stiskněte "Otevřená smyčka"/"Uzavřená smyčka" na hlavní obrazovce AndroidAPS a vyberte 'Pozastavit smyčku na 1 h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Jak budete mít pumpu znovu připojenou, obnovte smyčku dlouhým stiskem na 'Pozastaveno (X min)'.

Naproti tomu pro výměnu kanyly se nepoužívá funkce „naplnit infúzní set“ na pumpě, ale set a/nebo kanyla se plní bolusem, který se nezobrazuje v historii bolusů. To znamená, že se nepřeruší běžící dočasná bazální dávka. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Pozadí

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Každodenní používání

### Hygiena

#### Co dělat při sprchování a koupání?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Práce

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Volnočasové aktivity

### Sporty

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Požívání alkoholu

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Spánek

#### Jak mohu provozovat smyčku během noci bez mobilního a WIFI záření?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Objevily se problémy s lokálním odesíláním dat (AAPS nepřijímal nové hodnoty BG z xDrip+) v případě, že byl zapnutý mód letadlo. Jděte do Nastavení > Komunikace mezi zařízeními > Identify reciever, a vložte hodnotu `info.nightscout.androidaps`.

![xDrip+ Základní nastavení komunikace mezi aplikacemi rozpoznání přijímače](../images/xDrip_InterApp_NS.png)

### Cestování

#### Jak se vypořádat s cestováním přes časové zóny?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Lékařská témata

### Pobyt v nemocnici

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Kontrola u vašeho diabetologa

#### Výkazy

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).