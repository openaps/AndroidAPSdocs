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
* a [continuous glucose monitoring system](../Configuration/BG-Source.rst). 

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

Tato tabulka vám pomůže optimalizovat nastavení. Nejlepší bude, když ji projdete odshora dolů. Cílem je mít dané nastavení správně, předtím než začnete měnit další. Postupujte po malých krocích a neprovádějte velké změny najednou. Jako vodítko můžete použít nástroj [Autotune](https://autotuneweb.azurewebsites.net/), ale nesmíte mu slepě věřit: ve vašem případě nebo za všech okolností nemusí fungovat správně. Myslete na to, že jednotlivá nastavení se navzájem ovlivňují – můžete mít „špatné“ nastavení, které bude za určitých okolností fungovat dobře (např. vysoký bazál a současně nízký sacharidový poměr), ale nebude tak fungovat vždy. To znamená, že musíte vždy zohledňovat všechna nastavení a ověřovat, zda fungují společně za různých okolností.

<table>
  <tr>
    <th>
      Setting
    </th>
    
    <th>
      Description & testing
    </th>
    
    <th>
      Impact
    </th>
  </tr>
  
  <tr>
    <td>
      Duration of insulin activity (DIA)
    </td>
    
    <td>
      The length of time that insulin decays to zero.<br /><br />This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.
    </td>
    
    <td>
      Too short DIA can lead to low BGs. And vice-versa.<br /><br />If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.<br /><br />Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.
    </td>
  </tr>
  
  <tr>
    <td>
      Basal rate schedule (U/hr)
    </td>
    
    <td>
      The amount of insulin in a given hour time block to maintain BG at a stable level.<br /><br />Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.<br /><br />If BG is dropping, basal rate is too high. And vice-versa.
    </td>
    
    <td>
      Too high basal rate can lead to low BGs. And vice-versa.<br /><br />AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.<br /><br />So a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.<br /><br />Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.
    </td>
  </tr>
  
  <tr>
    <td>
      Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)
    </td>
    
    <td>
      The drop in BG expected from dosing 1U of insulin.<br /><br />Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.<br /><br />Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.<br /><br />Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.
    </td>
    
    <td>
      Lower ISF = a smaller drop in BGs for each unit of insulin (also can be called ‘more severe / aggressive’ or ‘stronger’). If too low, this can lead to low BGs.<br /><br />Higher ISF = a bigger drop in BGs for each unit of insulin (also can be called ‘less severe / aggressive’ or ‘weaker’). If too high, this can lead to high BGs.<br /><br />An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.<br /><br />Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.
    </td>
  </tr>
  
  <tr>
    <td>
      Carbohydrate to insulin ratio (CR) (g/U)
    </td>
    
    <td>
      The grams of carbohydrate for each unit of insulin.<br /><br />Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR. Best is to eat food your normally eat at that time of day and count its carbs precicely.
    </td>
    
    <td>
      Lower CR = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.<br /><br />Higher CR = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.<br /><br />If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.
    </td>
  </tr>
</table>

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