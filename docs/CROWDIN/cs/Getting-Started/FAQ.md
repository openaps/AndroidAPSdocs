# Nejčastější otázky uživatelů APS

Jak sem přidat další otázky: Postupujte podle těchto pokynů: [odkaz](../make-a-PR.md)

## Obecné

### Jak začít?

Za prvé, musíte ** si opatřit kompatibilní hardwarové komponenty**:

* Podporovanou [inzulínovou pumpu](Pump-Choices.md) 
* [smartphone s operačním systémem Android](Phones.md) (Apple iOS není systémem AndroidAPS podporován – podívejte se na [iOS Loop](https://loopkit.github.io/loopdocs/)) a 
* [systém pro kontinuální monitorování glykémie](../Configuration/BG-Source.md). 

Za druhé, musíte **nastavit hardware**. Viz [příklad nastavení s podrobným návodem](Sample-Setup.md).

Za třetí, musíte **nastavit své softwarové komponenty**: AndroidAPS a zdroj CGM/FGM.

Za čtvrté, musíte se seznámit s funkcí **systému OpenAPS a pochopit jej, abyste mohli kontrolovat parametry zásadní pro vaši léčbu**. Základním principem uzavřené smyčky je, že máte správně nastavené dávkování bazálního inzulínu a inzulíno-sacharidový poměr. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících určité jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provádět, byly z důvodu bezpečnosti omezeny (viz maximální povolený dočasný bazál v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete „plýtvat“ povolenými změnami dávkování dočasného bazálu na to, abyste jím opravovali špatně nastavený základní bazál. Pokud jste například často příliš nízko ještě před jídlem, pak pravděpodobně vaše bazální dávky potřebují upravit. Můžete použít nástroj [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig), který vám připraví řadu návrhů, zda a které bazální dávky a/nebo citlivosti na inzulín byste měli upravit, a také to, zda je nutné změnit inzulíno-sacharidový poměr. Nebo můžete vyzkoušet a nastavit své bazály [postaru](http://integrateddiabetes.com/basal-testing/).

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

### Jaké záchranné vybavení se doporučuje brát s sebou?

Především s sebou musíte mít vybavení pro případ nouze, jako každý jiný pacient s DM1 na inzulínové pumpě. V případě, že používáte smyčku systému AndroidAPS, je důrazně doporučeno mít u sebe nebo v dosahu následující doplňkové vybavení:

* Powerbanku pro dobití vašeho smartphonu, hodinek a (případně) BT čtečky
* Zálohu používaných aplikací v cloudu (Dropbox, Google Drive…): nejnovější soubor APK aplikace AndroidAPS a vaše heslo k úložišti klíčů, soubor s nastavením aplikace AndroidAPS, soubor s nastavením aplikace xDrip, upravená aplikace Dexcom…
* Baterie do pumpy

### Jak bezpečně připojit CGM/FGM?

Můžete ho přelepit tejpem: K dispozici jsou již vystřižené přelepky určené pro nejběžnější CGM systémy (hledejte na Googlu nebo eBay). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

Můžete ho zafixovat: K dispozici jsou speciální krytky, které zafixují CGM/FGM na ruce pomocí gumového pásku (hledejte na Googlu nebo eBay).

## AndroidAPS nastavení

### APS algoritmus (princip výpočtu)

#### Proč se zobrazuje "dia:3" na kartě "OPENAPS AMA", i když mám jiné DIA nastavené ve svém profilu?

![AMA 3 h](../../images/Screenshot_AMA3h.png) V AMA režimu DIA ve skutečnosti neznamená „doba působnosti inzulínu“. Je to parametr, který dříve souvisel s DIA. Parametr nyní znamená, „dokdy by měla být korekce dokončená“. Nemá to žádnou souvislost s výpočtem IOB. V režimu OpenAPS SMB už tento parametr není potřebný vůbec.

### Profil

#### Proč se nyní používá 5h jako dolní limit DIA (doba působnosti inzulínu) namísto 2-3h?

Je to dobře vysvětleno [v tomto článku](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Nezapomeňte po úpravě svého DIA `AKTIVOVAT PROFIL`.

#### Co způsobuje, že smyčka často snižuje mou glykémii až k hranici hypoglykémie bez COB (žádné aktivní sacharidy)?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně, pak je toto chování obvykle způsobeno příliš nízkou citlivostí. Příliš nízká citlivost typicky vypadá takto:

![Příliš nízká citlivost](../images/isf.jpg)

#### Co způsobuje výrazné vrcholy po jídle při používání uzavřené smyčky?

Ze všeho nejdřív ověřte své bazály a proveďte „hladový test“ bazálu (bez příjmu sacharidů). Je-li bazál nastaven správně a vaše glykémie se po strávení všech sacharidů vrátí do cílového rozmezí, zkuste před jídlem použít dočasný cíl „Před jídlem“ v AndroidAPS nebo se se svým lékařem poraďte, jak dlouho byste měli po bolusu čekat, než začnete jíst. Je-li vaše glykémie po jídle vysoká a je-li vysoká i poté, co jsou všechny sacharidy stráveny, měli byste se svým lékařem zvážit možnost snížení sacharidového poměru. Je-li vaše glykémie vysoká, když máte aktivní COB, a příliš nízká poté, co jsou všechny sacharidy stráveny, zvažte ve spolupráci se svým lékařem zvýšení sacharidového poměru a také bolusování s adekvátním předstihem.

## Other settings

### Nastavení Nightscoutu

#### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

### Nastavení CGM

#### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS openAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pumpa

### Kam pumpu umístit?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Baterie

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site. Tricks to increase battery life include:

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

## Hygiena

### Co dělat při sprchování a koupání?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Práce

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a profile switch for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a time shift of your profile when standing up much earlier or later than regular. If you are using Nightscout profiles, you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Volnočasové aktivity

## Sporty

## Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right. Stiskněte pole „Otevřená smyčka“ / „Uzavřená smyčka“ vlevo nahoře na hlavní obrazovce. Vyberte možnost **'Odpojit pumpu na XY min'** podle plánované doby odpojení. Jakmile pumpu znovu připojíte, můžete přidržet stejné tlačítko s vybrat možnost „Znovu připojit pumpu“ nebo prostě počkat, až uplyne vybraná doba odpojení. Smyčka bude automaticky pokračovat.

## Požívání alkoholu

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

### Reporting

Můžete ukázat své výkazy z Nightscoutu (https://ADRESA-VAŠEHO-NS.com/report) nebo vyzkoušet nástroj [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)