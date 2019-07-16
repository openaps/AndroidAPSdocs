# Nejčastější otázky uživatelů APS

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

## AndroidAPS nastavení

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
  The grams of carbohydrate for each unit of insulin.<br /><br />Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR. Best is to eat food your normally eat at that time of day and count its carbs precicely.
</td>

<td class="tg-0pky">
  Lower CR = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.<br /><br />Higher CR = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.<br /><br />If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.
</td></table> 

### APS algorithm

#### Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3h](../../images/Screenshot_AMA3h.png) In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to connected to the DIA. Now, it means, 'in whích time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

### Profile

#### Proč se nyní používá 5 h jako dolní limit DIA (doba působnosti inzulínu) namísto 2–3 h?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

#### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). If it is correct, this behaviour is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

#### What causes high postprandial preaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

## Other settings

### Nightscout settings

#### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

### CGM settings

#### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS openAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pumpa

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.
* for DanaR/RS pumps the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and canulas

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump, and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Hygiena

### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Práce

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a profile switch for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a time shift of your profile when standing up much earlier or later than regular. If you are using Nightscout profiles, you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Volnočasové aktivity

## Sporty

## Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Požívání alkoholu

Drinking alcohol is risky in closed loop mode as the algorythm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Vypnout režim uzavřené smyčky a provést nezbytné zásahy ručně nebo
* nastavit vyšší dočasný cíl a vypnout funkci UAM, aby smyčka nezvyšovala váš IOB kvůli neoznámenému jídlu nebo
* provést přepnutí profilu a nastavit profil na výrazně nižší hodnoty než 100 % 

When drinking alcohol you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

## Spánek

### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

## Cestování

### How to deal with timezone changes?

With DanaR and DanaR Korean you don't have to do anything. For other pumps see [timezone travelling](../Usage/Timezone-traveling.md) page for more details.

## Pobyt v nemocnici

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

## Kontrola u vašeho diabetologa

### Reporting

You can either show your nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)