# Nejčastější otázky uživatelů AAPS

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

* Pokud nechcete, aby někdo mohl snadno upravit vaše nastavení, pak můžete celou nabídku Nastavení chránit heslem tak, že v nabídce Nastavení vyberte možnost „Heslo do nastavení“ a zadáte své zvolené heslo. Při příštím vstupu do nabídky Nastavení budete muset zadat heslo, abyste mohli pokračovat dál. Pokud budete později chtít ochranu heslem odstranit, přejděte v nabídce do „Heslo do nastavení“ a odstraňte text.

* Pokud máte v úmyslu používat aplikaci prostřednictvím hodinek s Wear OS na bolusy nebo změnu nastavení, pak je třeba zajistit, aby v systému Android nebyla blokovaná oznámení z AndroidAPS. Potvrzení různých akcí přicházejí prostřednictvím oznámení.

* Pokud si sundáte pumpu před sprchováním/koupáním/plaváním/sportem atd., přidržte prst na textu „Otevřená smyčka“ / „Uzavřená smyčka“ vlevo nahoře na hlavní domovské stránce a vyberte možnost „Odpojit pumpu na…“, následně vyberte počet hodin, po které plánujete mít pumpu odpojenou. Na dané časové období se tím váš bazál nastaví na nulu. Minimální délka doby odpojení je odvozena z minimální délky dočasného bazálu, kterou lze nastavit na pumpě, takže pokud si ji přejete odpojit na kratší časové období nebo připojíte svou pumpu dříve, než se očekávalo, pak přidržte tlačítko „Pozastaveno (X min)“ a vyberte „Uvolnit“. Po opětovném připojení pumpy tak bude váš IOB přesně odpovídat skutečnosti.

* Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Proto pokud jste některá měření ze senzoru nezachytili, může trvat nějakou dobu, než AndroidAPS nasbírá potřebná nová data a než pak znovu smyčku spustí.

* Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky:
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Jaké vybavení pro případ nouze se doporučuje brát s sebou?

Především s sebou musíte mít vybavení pro případ nouze, jako každý jiný pacient s DM1 na inzulínové pumpě. V případě, že používáte smyčku se systémem AndroidAPS, je důrazně doporučeno mít u sebe nebo v dosahu následující doplňkové vybavení:

* Powerbanku pro dobití vašeho smartphonu, hodinek a (případně) BT čtečky
* Zálohu používaných aplikací v cloudu (Dropbox, Google Drive…): nejnovější soubor APK aplikace AndroidAPS a vaše heslo k úložišti klíčů, soubor s nastavením aplikace AndroidAPS, soubor s nastavením aplikace xDrip, upravená aplikace Dexcom…
* Baterie do pumpy

## Jak bezpečně zajistit CGM/FGM?

Můžete ho přelepit tejpem: K dispozici jsou již vystřižené přelepky určené pro nejběžnější CGM systémy (hledejte na Googlu nebo eBay). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

Můžete ho zafixovat: K dispozici jsou speciální krytky, které zafixují CGM/FGM na ruce pomocí gumového pásku (hledejte na Googlu nebo eBay).

# Nastavení AndroidAPS

Následující seznam vám pomůže s optimalizací nastavení. Nejlepší bude, když ji projdete odshora dolů. Cílem je mít dané nastavení správně, předtím než začnete měnit další. Postupujte po malých krocích a neprovádějte velké změny najednou. Jako vodítko můžete použít nástroj [Autotune](https://autotuneweb.azurewebsites.net/), ale nesmíte mu slepě věřit: ve vašem případě nebo za všech okolností nemusí fungovat správně. Myslete na to, že jednotlivá nastavení se navzájem ovlivňují – můžete mít „špatné“ nastavení, které bude za určitých okolností fungovat dobře (např. vysoký bazál a současně nízký sacharidový poměr), ale nebude tak fungovat vždy. To znamená, že musíte vždy zohledňovat všechna nastavení a ověřovat, zda fungují společně za různých okolností.

## Celková doba aktivity inzulínu (DIA)

### Popis a testování

Doba, během níž se veškerý inzulin vstřebá/spotřebuje.  
Tato hodnota je často nastavena jako příliš nízká. Většina lidí bude mít nastaveno 5 hodin, v některých případech 6 nebo 7 hodin.

### Efekt

Příliš krátká hodnota DIA může vést k nízkým glykémiím. Pokud glykémie stoupá, bazální dávka je příliš nízká.

Je-li hodnota DIA příliš krátká, AAPS si bude příliš brzy myslet, že váš předchozí bolus je již zcela spotřebován, a, v případě, že je vaše glykémie stále vyšší, přidá vám více inzulinu. (Systém ve skutečnosti nečeká tak dlouho, ale počítá predikce toho, co by se mohlo stát, a bude přidávat inzulin). Tímto dochází k "hromadění inzulinu", o kterém však AAPS neví.

Příkladem příliš nízké hodnoty DIA je vysoká glykémie následovaná přehnanou korekcí AAPS, která vede k nízké glykémii.

## Základní bazální dávka (U/h)

### Popis a testování

Množství inzulínu v daném hodinovém úseku sloužící k udržení stabilní glykémie.

Svůj bazál můžete otestovat tak, že vypnete smyčku, nebudete přijímat potravu, počkáte řekněme 5 hodin po jídle a budete sledovat, jak se glykémie mění. Toto je třeba několikrát opakovat.

Pokud glykémie klesá, základní bazální dávka je příliš vysoká. A naoak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

### Efekt

Příliš vysoký bazál může vést k nízkým glykémiím. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

Výchozí výpočty AAPS se drží těchto výchozích bazálních dávek. Je-li bazál příliš vysoký, „dočasný nulový bazál“ bude započítán jako větší záporný IOB, než by měl být. To povede k tomu, že AAPS bude provádět více následných korekčních zásahů, než by měl, aby v konečném důsledku dosáhl nulového IOB.

Takže příliš vysoký bazál povede k nízkým glykémiím jak v době základní bazální dávky, tak několik hodin potom, protože AAPS provádí korekce k cílové hodnotě.

Podobně příliš nízký bazál může vést k vysokým glykémiím a následně může být obtížné vrátit glykémie zpět k cílové hodnotě.

## Korekční faktor / citlivost na inzulin (ISF) (mmol/l/U nebo mg/dl/U)

### Popis a testování

Očekávaný pokles glykémie po podání 1 jednotky inzulinu.

Za předpokladu, že máte správně nastavený bazál, ho můžete otestovat tak, že pozastavíte smyčku, zkontrolujete, že IOB je nulový, a vezmete si pár glukózových tablet, abyste se dostali na stabilní vyšší glykémii.

Poté si aplikujete adekvátní množství inzulinu (podle aktuálního nastavení citlivosti), abyste glykémii dostali na cílovou hodnotu.

Buďte opatrní, protože tato hodnota je často nastavena příliš nízko. Příliš nízko znamená, že vám 1 jednotka inzulinu sníží glykémii více, než jste očekávali.

### Efekt

**Lower ISF** (i.e. 40 instead of 50) = more aggressive / stroger leading to a bigger drop in BGs for each unit of insulin. Pokud je příliš nízká, může to vést k nízkým glykémiím.

**Higher ISF** (i.e. 45 instead of 35) = less agressive / weaker leading to a smaller drop in BGs for each unit of insulin. Pokud je příliš vysoká, může to vést k vysokým glykémiím.

**Příklad:**

     * BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
     * So you want correction of 90 mg/dl (= 190 - 110).
     * ISF = 30 -> 90 / 30 = 3 units of insulin
     * ISF = 45 -> 90 / 45 = 2 units of insulin
    

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Inzulino-sacharidový poměr (CR) (g/U)

### Popis a testování

The grams of carbohydrate for each unit of insulin.

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR. Best is to eat food your normally eat at that time of day and count its carbs precicely.

### Efekt

**Lower CR** = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher CR** = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.

# Algoritmus APS

## Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to connected to the DIA. Now, it means, 'in whích time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## Profil

### Proč se nyní používá 5 h jako dolní limit DIA (doba působnosti inzulínu) namísto 2–3 h?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Co způsobuje, že smyčka často snižuje mou glykémii až k hranici hypoglykémie bez COB (žádné aktivní sacharidy)?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behaviour is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Co způsobuje výrazné vrcholy po jídle při používání uzavřené smyčky?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Další nastavení

## Nastavení Nightscoutu

### NSClient v AndroidAPS hlásí 'není povoleno' a nenahrává žádná data. Co mohu dělat?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## Nastavení CGM

### Proč AndroidAPS hlásí 'Zdroj glykémií nepodporuje pokročilé filtrování'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS openAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pumpa

### Kde nosit pumpu?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Baterie

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site. Tricks to increase battery life include:

* Zkraťte časový interval pro podsvícení LCD displeje (v menu nastavení pumpy).
* Zkraťte časový interval pro podsvícení (v menu nastavení pumpy).
* Nastavte upozorňování tak, aby se namísto vibrace ozýval zvukový signál (v menu nastavení pumpy).
* Na pumpě používejte tlačítka pouze pro výměnu inzulínu, jinak k prohlížení historie, stavu baterie a stavu zásobníku používejte raději AndroidAPS.
* Aplikace AndroidAPS může být na některých telefonech často ukončována systémem kvůli úspoře energie nebo paměti RAM. Pokud se však AndroidAPS při každém startu znovu inicializuje, tak pokaždé znovu navazuje spojení s pumpou prostřednictvím Bluetooth a znovu načítá aktuální bazální dávky a historii bolusů. To vybíjí baterii. Abyste zjistili, jestli k tomu dochází, přejděte do Nastavení > NSClient a zapněte možnost 'Zaznamenávat spuštění aplikace do NS'. Nightscout pak obdrží událost při každém restartu AndroidAPS, čímž tento problém snadno odhalíte. Abyste tomuto chování zabránili, udělte aplikaci AndroidAPS výjimku, aby ji systém nevypínal v době nečinnosti (v menu úspory baterie na vašem telefonu).
* Očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistoty z výroby.
* V případě pump DanaR/RS při spouštěcí sekvenci protéká baterií velký proud, aby záměrně přerušil ochranný povlak (který zabraňuje ztrátě kapacity baterie při skladování), ale přerušení ochranného povlaku se nedaří vždy ve 100 % případů. Buďto baterie 2krát až 3krát vyjměte a znovu vložte (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přiložením k oběma pólům baterie na zlomek sekundy).
* Viz také další tipy pro [konkrétní typy baterií](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) při použití pumpy Combo.

### Výměna zásobníků a kanyl

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Dlouze stiskněte "Otevřená smyčka"/"Uzavřená smyčka" na hlavní obrazovce AndroidAPS a vyberte 'Pozastavit smyčku na 1 h'
* Nyní odpojte pumpu a vyměňte zásobník podle instrukcí pumpy.
* Jak budete mít pumpu znovu připojenou, obnovte smyčku dlouhým stiskem na 'Pozastaveno (X min)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Každodenní používání

### Hygiena

#### Co dělat při sprchování a koupání?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

### Práce

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a profile switch for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a time shift of your profile when standing up much earlier or later than regular. If you are using Nightscout profiles, you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Volnočasové aktivity

### Sporty

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

### Alkohol

Drinking alcohol is risky in closed loop mode as the algorythm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Vypnout režim uzavřené smyčky a provést nezbytné zásahy ručně nebo
* nastavit vyšší dočasný cíl a vypnout funkci UAM, aby smyčka nezvyšovala váš IOB kvůli neoznámenému jídlu nebo
* provést přepnutí profilu a nastavit profil na výrazně nižší hodnoty než 100 % 

When drinking alcohol you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Spánek

#### Jak mohu provozovat smyčku během noci bez mobilního a WIFI záření?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

### Cestování

#### Jak se vypořádat s cestováním mezi časovými pásmy?

With DanaR and DanaR Korean you don't have to do anything. For other pumps see [timezone travelling](../Usage/Timezone-traveling.md) page for more details.

## Lékařská témata

### Pobyt v nemocnici

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Kontrola u vašeho diabetologa

#### Výkazy

You can either show your nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)