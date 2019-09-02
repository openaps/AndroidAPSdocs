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

**Nižší citlivost** (tzn. 1,5 namísto 2,5) = více agresivní / silnější – vede k větším poklesům glykémie s každou jednotkou inzulinu. Pokud je příliš nízká, může to vést k nízkým glykémiím.

**Vyšší citlivost** (tzn. 2 namísto 1,5) = méně agresivní / slabší – vede k menším poklesům glykémie s každou jednotkou inzulinu. Pokud je příliš vysoká, může to vést k vysokým glykémiím.

**Příklad:**

* Glykémie je 10,5 mmol a cílová glykémie je 5,5 mmol. 
* Chcete tedy provést korekci o 5 mmol (= 10,5 - 5,5).
* ISF = 1,5 -> 5 / 1,5 = 3,3 jednotky inzulinu
* ISF = 2,5 -> 5 / 2,5 = 2 jednotky izulinu

Je-li tato hodnota nastavena příliš nízko (není neobvyklé), může způsobovat ‘přehnané korekce’, protože systém AAPS si bude myslet, že ke srovnání vysoké glykémie je třeba použít více inzulinu, než kolik je ve skutečnosti potřeba. Toto může vést k efektu ‘horské dráhy’ (zejména při hladovění). Pokud se to děje, musíte zvýšit svou hodnotu citlivosti. Bude to znamenat, že AAPS bude používat menší korekční dávky a zabrání se tak přehnaným korekcím vysokých glykémií, které by vedly k příliš nízkým glykémiím.

Pokud je citlivost naopak nastavena příliš vysoko, bude docházet k nedostatečným korekcím a vaše glykémie bude zůstávat nad cílovou hodnotou – to je patrné zejména v noci.

## Inzulino-sacharidový poměr (CR) (g/U)

### Popis a testování

Kolik gramů sacharidů pokryje jedna jednotka inzulinu.

Za předpokladu, že máte správný bazál, můžete tento parametr otestovat tak, že zkontrolujete, že IOB je nula a vy máte dobrou glykémii, zkonzumujete přesně odměřené množství sacharidů a aplikujete si příslušnou dávku inzulinu podle aktuálního sacharidového poměru. Ideální je k testu využít jídlo, které v danou denní dobu běžně jíte a přesně spočítat obsah sacharidů.

### Efekt

**Nižší sacharidový poměr** = menší množství jídla na jednotku inzulinu, tzn. dostanete více inzulinu pro dané množství sacharidů. Lze také označit za „agresivnější“.

**Vyšší sacharidový poměr** = větší množství jídla na jednotku inzulinu, tzn. dostanete méně inzulinu pro dané množství sacharidů. Lze také označit za „méně agresivní“.

Jestliže po strávení jídla a poté, co se váš IOB vrátil na nulu, zůstává vaše glykémie vyšší než před jídlem, máte pravděpodobně nastavenu příliš vysokou hodnotu sacharidového poměru. A naopak, pokud je vaše glykémie nižší než před jídlem, sach. poměr je příliš nízký.

# Algoritmus APS

## Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3 h](../images/Screenshot_AMA3h.png)

V AMA režimu ve skutečnosti DIA neznamená „doba působnosti inzulínu“. Je to parametr, který dříve souvisel s DIA. Parametr nyní znamená, „dokdy by měla být korekce dokončená“. Nemá to žádnou souvislost s výpočtem IOB. V režimu OpenAPS SMB už tento parametr není potřebný vůbec.

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

### Kde nosit pumpu?

Existuje bezpočet možností, kam pumpu umístit. Nezáleží na tom, zda používáte smyčku nebo ne. Pokud byste raději měli bezhadičkovou pumpu a používáte se smyčkou pumpu Dana, vyzkoušejte 30cm set s originálním břišním pásem.

### Baterie

Smyčka může vybíjet baterii rychleji než v normálním režimu. Je to proto, že systém s pumpou komunikuje přes bluetooth mnohem víc, než by toto uživatel dělal ručně. Nejlepší je vyměnit baterii už při 25%, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k tomu nastavit varující alarm pro vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P vaší Nightscout stránky. Mezi triky, jak zvýšit životnost baterie, patří:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.
* for DanaR/RS pumps the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Výměna zásobníků a kanyl

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump, and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

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

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

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