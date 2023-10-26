# Nejčastější otázky uživatelů APS

Jak sem přidat další otázky: Postupujte podle těchto pokynů: [odkaz](../make-a-PR.md)

# Obecné

## Can I just download the AAPS installation file?

Ne. There is no downloadable apk file for AAPS. Musíte si jej sami [sestavit](../Installing-AndroidAPS/Building-APK.md). Zde je odůvodnění:

AAPS is used to control your pump and give insulin. Podle současných předpisů jsou v Evropě všechny systémy klasifikované zdravotnickými zařízeními jako IIa nebo IIb, vyžadují regulační schválení (označení CE) a potřebují různé studie a schválení. Distribuce neregulovaných zařízení je nezákonná. Podobná nařízení platí také v ostatních částech světa.

Toto nařízení se netýká pouze prodeje (ve smyslu získat za něco peníze), ale platí pro jakýkoli způsob distribuce (i kdyby byla zdarma). Sestavit si zdravotnické zařízení sám pro sebe je jediným způsobem, jak se tomuto nařízení vyhnout.

Proto nejsou soubory APK k dispozici.

(FAQ-how-to-begin)=

## Jak začít?

Za prvé, musíte si **opatřit kompatibilní hardwarové komponenty**:

- podporovanou [inzulínovou pumpu](./Pump-Choices.md) 
- an [Android smartphone](Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- [systém pro kontinuální monitorování glykémie](../Configuration/BG-Source.md). 

Za druhé, musíte **nastavit hardware**. Viz [příklad nastavení s podrobným návodem](Sample-Setup.md).

Thirdly, you have to **setup your software components**: AAPS and CGM/FGM source.

Za čtvrté, musíte se seznámit s funkcí **systému OpenAPS a pochopit jej, abyste mohli kontrolovat parametry zásadní pro vaši léčbu**. Základním principem uzavřené smyčky je, že máte správně nastavené dávkování bazálního inzulínu a inzulíno-sacharidový poměr. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících určité jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provést, byly z důvodu bezpečnosti omezené (viz maximální povolená dávka dočasného bazálu v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete plýtvat změnou v dávkováním dočasného bazálu, abyste opravili špatně nastavený bazál. Pokud jste například často příliš nízko ještě před jídlem, pak pravděpodobně vaše bazální dávky potřebují upravit. Můžete použít [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig), které vám připraví řadu návrhů, zda a které bazální dávky a/nebo citlivosti inzulínu byste měli upravit, a také to, zda je nutné změnit inzulíno-sacharidový poměr. Nebo můžete vyzkoušet a nastavit vaše bazály [postaru](https://integrateddiabetes.com/basal-testing/).

## Jaká jsou praktická doporučení pro provoz smyčky?

### Ochrana heslem

Pokud nechcete, aby někdo mohl snadno upravit vaše nastavení, pak můžete celé menu nastavení ochránit heslem tak, že vyberete v menu Nastavení "Heslo do nastavení" a zadáte své zvolené heslo. Při příštím vstupu do menu nastavení po vás bude heslo vyžadováno, abyste mohli pokračovat dál. Pokud budete později chtít odstranit ochranu heslem, pak běžte v menu do "Heslo do nastavení" a odstraňte text.

### Chytré hodinky Android Wear

If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AAPS are not blocked. Potvrzení akce přichází prostřednictvím oznámení.

(FAQ-disconnect-pump)=

### Odpojit pumpu

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](Screenshots-loop-status).

### Doporučení nejsou založena pouze na jediné hodnotě ze senzoru CGM

Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Therefore, if you miss some readings it may take a while after getting data back before AAPS kicks in looping again.

### Další čtení

Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky:

- [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Jaké vybavení pro případ nouze se doporučuje brát s sebou?

Je potřeba, abyste u sebe měli stejné nouzové vybavení, jako všichni ostatní DM1 pacienti s inzulínovou pumpou. When looping with AAPS it is strongly recommended to have the following additional equipment with or near to you:

- Náhradní baterie a nabíjecí kabely pro nabití Vašeho chytrého telefonu nebo hodinek (je-li to potřeba). BT čtečku nebo zařízení na propojení.
- Baterie do pumpy
- Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## Jak mohu bezpečně a spolehlivě upevnit CGM/FGM?

Můžete ho přelepit. K dispozici je několik předperperforovaných "přelepů" pro běžné CGM systémy (najdete na Google, eBay nebo Amazonu). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

Můžete to opravit. Můžete si zakoupit speciální náramky na paži, které upevňují CGM/FGM pomocí pásku (hledejte na Googlu, eBay nebo Amazonu).

# AAPS settings

Následující seznam vám pomůže s optimalizací nastavení. Nejlepší bude, když ji projdete odshora dolů. Cílem je mít dané nastavení správně, předtím než začnete měnit další. Postupujte po malých krocích a neprovádějte velké změny najednou. Jako vodítko můžete použít nástroj [Autotune](https://autotuneweb.azurewebsites.net/), ale nesmíte mu slepě věřit: ve vašem případě nebo za všech okolností nemusí fungovat správně. Myslete na to, že jednotlivá nastavení se navzájem ovlivňují – můžete mít „špatné“ nastavení, které bude za určitých okolností fungovat dobře (např. vysoký bazál a současně nízký sacharidový poměr), ale nebude tak fungovat vždy. To znamená, že musíte vždy zohledňovat všechna nastavení a ověřovat, zda fungují společně za různých okolností.

## Celková doba aktivity inzulínu (DIA)

### Popis & testování

Doba, za kterou se inzulín zcela rozloží.

Tato doba je poměrně často nastavena jako příliš krátká. Většina lidí bude mít nastaveno 5 hodin, v některých případech 6 nebo 7 hodin.

(FAQ-impact)=

### Dopad

Příliš krátká hodnota DIA může vést k nízkým glykémiím. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

Je-li hodnota DIA příliš krátká, AAPS si bude příliš brzy myslet, že váš předchozí bolus je již zcela spotřebován, a, v případě, že je vaše glykémie stále vyšší, přidá vám více inzulinu. (Systém ve skutečnosti nečeká tak dlouho, ale počítá predikce toho, co by se mohlo stát, a bude přidávat inzulin). Tímto dochází k "hromadění inzulinu", o kterém však AAPS neví.

Příkladem příliš nízké hodnoty DIA je vysoká glykémie následovaná přehnanou korekcí AAPS, která vede k nízké glykémii.

## Základní bazální dávka (U/h)

### Popis & testování

Množství inzulínu v daném hodinovém úseku sloužící k udržení stabilní glykémie.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

### Dopad

Too high basal rate can lead to low BGs. A naopak. Pokud glykémie stoupá, bazální dávka je příliš nízká.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Korekční faktor / citlivost na inzulin (ISF) (mmol/l/U nebo mg/dl/U)

### Popis & testování

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Dopad

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**Příklad:**

- BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
- So, you want correction of 90 mg/dl (= 190 - 110).
- ISF = 30 -> 90 / 30 = 3 units of insulin
- ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Inzulínovosacharidový poměr (IC) (g/U)

### Popis & testování

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **POZNÁMKA:**
> 
> V některých evropských zemích se používaly chlebové/výměnné jednotky pro stanovení toho, kolik inzulínu je na dané jídlo potřeba. Z počátku odpovídala 1 výměnná jednotka 12 g sacharidů, později se to změnilo na 10 g sacharidů.
> 
> V tomto modelu bylo množství sacharidů fixní a měnilo se množství inzulinu. („Kolik inzulínu je zapotřebí k pokrytí jedné výměnné jednotky?“)
> 
> Při používání inzulino-sacharidového poměru je naopak fixní množství inzulinu a mění se množství sacharidů. („Kolik g sacharidů lze pokrýt jednou jednotkou inzulínu?“)
> 
> Příklad:
> 
> Faktor výměnných jednotek (VJ = 12 g sacharidů): 2,4 U/BJ -> potřebujete 2,4 jednotky inzulínu na jednu výměnnou jednotku.
> 
> Odpovídající inzulino-sacharidový poměr: I:C - 12 g / 2,4 U = 5,0 g/U -> 1 jednotka inzulinu pokryje 5,0 g sacharidů.
> 
> VJ faktor 2,4 U / 12 g ===> IC = 12 g / 2,4 U = 5,0 g/U
> 
> Převodní tabulky jsou k dispozici online, např. [zde](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Dopad

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# Algoritmus APS

## Proč se na kartě "OPENAPS AMA" zobrazuje "dia:3", i když mám ve svém profilu nastavené jiné DIA?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Profil

### Proč se nyní používá 5 h jako dolní limit DIA (doba působnosti inzulínu) namísto 2–3 h?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Co způsobuje, že smyčka často snižuje mou glykémii až k hranici hypoglykémie bez COB (žádné aktivní sacharidy)?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. Příliš nízká citlivost typicky vypadá takto:

![Příliš nízká citlivost](../images/isf.jpg)

### Co způsobuje výrazné vrcholy po jídle při používání uzavřené smyčky?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. Je-li vaše glykémie vysoká, když máte aktivní COB, a příliš nízká poté, co jsou všechny sacharidy stráveny, zvažte ve spolupráci se svým lékařem zvýšení sacharidového poměru a také bolusování s adekvátním předstihem.

# Další nastavení

## Nastavení Nightscoutu

### AAPSClient says 'not allowed' and does not upload data. Co mohu dělat?

In AAPSClient check 'Connection settings'. Možná zrovna nejste na povolené síti WLAN nebo jste aktivovali možnost 'Pouze při nabíjení' a nabíjecí kabel není připojen.

## Nastavení CGM

### Why does AAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AAPS OpenAPS-tab. Více podrobností viz [Vyhlazování glykémií](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## Pumpa

### Kam pumpu umístit?

Existuje bezpočet možností, kam pumpu umístit. Nezáleží na tom, zda používáte smyčku nebo ne.

### Baterie

Smyčka může vybíjet baterii rychleji než v normálním režimu. Je to proto, že systém s pumpou komunikuje přes bluetooth mnohem víc, než by toto uživatel dělal ručně. Nejlepší je vyměnit baterii už při 25%, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k tomu nastavit varovný alarm pro vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P své Nightscout stránky. Mezi triky, jak zvýšit životnost baterie, patří:

- Zkraťte časový interval pro podsvícení LCD displeje (v menu nastavení pumpy).
- Zkraťte časový interval pro podsvícení (v menu nastavení pumpy).
- Nastavte upozorňování tak, aby se namísto vibrace ozýval zvukový signál (v menu nastavení pumpy).
- only press the buttons on the pump to reload, use AAPS to view all history, battery level and reservoir volume.
- AAPS app may often be closed to save energy or free RAM on some phones. When AAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. To vybíjí baterii. Abyste zjistili, jestli k tomu dochází, běžte do Nastavení > NSClient a zapněte 'Logovat spuštění aplikace do NS'. Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, whitelist AAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    Chcete-li například zakázat úsporu energie na telefonu Samsung se systémem Android Pie:
    
    - Přejděte do Nastavení -> Údržba zařízení -> Baterie 
    - Scroll until you find AAPS and select it
    - Zrušte označení možnosti „Přepnout aplikaci do režimu spánku“
    - ROVNĚŽ přejděte do nabídky Nastavení -> Aplikace -> (Tři tečky v pravém horním rohu) vyberte „zvláštní přístup“ -> Optimalizovat využití baterie
    - Scroll to AAPS and make sure it is de-selected.

- očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistota z výroby.

- V případě pump [DanaR/RS](../Configuration/DanaRS-Insulin-Pump.md) při spouštěcí sekvenci protéká baterií velký proud, aby záměrně přerušil ochranný povlak (který zabraňuje ztrátě kapacity baterie při skladování), ale přerušení ochranného povlaku se nedaří vždy ve 100 % případů. Buďto baterie 2krát až 3krát vyjměte a znovu vložte (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přiložením k oběma pólům baterie na zlomek sekundy).
- viz také další tipy pro [konkrétní typy baterií](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life) při použití pumpy Combo

### Výměna zásobníků a kanyl

The change of cartridge cannot be done via AAPS but must be carried out as before directly via the pump.

- Long press on "Open Loop"/"Closed Loop" on the Home tab of AAPS and select 'Suspend Loop for 1h'
- Now nnect the pump and change the reservoir as per pump instructions.
- Doplňování a plnění hadičky a kanyly můžete udělat také přímo na pumpě. In this case use [PRIME/FILL button](CPbefore26-pump) in the actions tab just to record the change.
- Jak budete mít pumpu znovu připojenou, obnovte smyčku dlouhým stiskem na 'Pozastaveno (X min)'.

Při výměně kanyly nicméně nepoužívejte "plnění infuzního setu" na pumpě, ale pro plnění infuzního setu a/nebo kanyly použijte bolus, který se neobjeví v historii bolusů. To znamená, že se nepřeruší běžící dočasná bazální dávka. Chcete-li zadat množství inzulínu k naplnění infúzního setu a spustili plnění, použijte na záložce Akce tlačítko [PLNĚNÍ/DOPLŇOVÁNÍ](CPbefore26-pump). Pokud množství není dostatečné, opakujte plnění. Můžete si nastavit výchozí množství pro plnění v Nastavení > Jiné > Hodnoty plnění/doplňování. Podívejte se do příbalového letáku kanyly, kolik jednotek je nutné do kanyly naplnit podle délky jehly a hadičky.

## Pozadí

You can find the AAPS wallpaper for your phone on the [phones page](Phones-phone-background).

## Každodenní používání

### Hygiena

#### Co dělat při sprchování a koupání?

Při sprchování a koupání si můžete pumpu sundat. Na tak krátkou dobu to sice není třeba dělat, ale měli byste AAPS dát vědět že jste pumpu odpojili, aby byly výpočty IOB správné. Viz [popis výše](FAQ-disconnect-pump).

### Práce

V závislosti na druhu vaší práce se můžete rozhodnout, že v pracovních dnech budete mít jiné nastavení. Jako uživatel smyčky byste měli zvážit, zda pro váš typický pracovní den nevyužít [přepnutí profilu](../Usage/Profiles.md). Například, můžete přepnout na profil větší než 100% v případě, že vaše práce spočívá v sezení za kancelářským stolem, nebo naopak nižší než 100%, jste-li aktivní a celý den na nohou. You could also consider a high or low temporary target or a [time shift of your profile](Profiles-time-shift) when working much earlier or later than regular, of if you work different shifts. Můžete si také vytvořit druhý profil (např. "doma" nebo "pracovní den"), a přepnout se na ten, který momentálně potřebujete.

## Volnočasové aktivity

(FAQ-sports)=

### Sporty

Budete muset změnit své staré sportovní návyky z doby, kdy jste ještě nepoužívali smyčku. Pokud budete při sportu dokrmovat sacharidy jako dříve, systém uzavřené smyčky to pozná a bude se snažit je korigovat.

Takže byste sice měli více zkonzumovaných sacharidů, ale smyčka by na ně zároveň vydala inzulin.

Při používání smyčky byste měli vyzkoušet tyto kroky:

- Proveďte [přepnutí profilu](../Usage/Profiles.md) < 100%.
- Nastavte [dočasný cíl Aktivita](temptarget-activity-temp-target), který bude vyšší než vaše běžná cílová hodnota.
- Jestliže používáte SMB, zkontrolujte, že máte vypnuté možnosti [„Povolit SMB s vysokými dočasnými cíli“](Open-APS-features-enable-smb-with-high-temp-targets) a [„Vždy povolit SMB“](Open-APS-features#enable-smb-always).

Provedení změn před sportem a po sportu je velmi důležité. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell AAPS so that the IOB calculations are correct. Viz [popis výše](FAQ-disconnect-pump).

### Požívání alkoholu

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AAPS:

- Deactivating closed loop mode and treating the diabetes manually or
- setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
- do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Spánek

#### Jak mohu provozovat smyčku během noci bez mobilního a WIFI záření?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Základní nastavení komunikace mezi aplikacemi Identify receiver](../images/xDrip_InterApp_NS.png)

### Cestování

#### Jak se vypořádat s cestováním přes časové zóny?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Lékařská témata

### Pobyt v nemocnici

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Kontrola u vašeho diabetologa

#### Výkazy

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Frequent questions on Discord and their answers...

## My problem is not listed here.

[Information to get help.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## My problem is not listed here but I found the solution

[Information to get help.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS stops everyday around the same time.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## How to organize my backups ?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## I have problems, errors building the app.

Please

- check [Troubleshooting Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) for typical errors and
- the tipps for with a [step by step walktrough](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## I'm stuck on an objective and need help.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## How to reset the password in AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## How to reset the password in AAPS v3.x

You find the documentation [here](update3_0-reset-master-password).

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Před Rebuild Project proveďte Build->Clean Project. Spusťte File->Invalidate Caches, a následně restartujte Android Studio.

## Upozornění: Běží dev verze. Uzavřená smyčka je zakázána

AAPS is not running in "developer mode". AAPS zobrazí následující zprávu: "běží dev verze. Uzavřená smyčka je zakázána".

Make sure AAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Dokud bude libovolný správně pojmenován, bude to fungovat. Make sure to restart AAPS for it to find the file and go into "developer mode".

Tip: Vytvořte su kopii existujícího souboru s logy, a přejmenujte ho na "engineering_mode" (poznámka: bez přípony souboru!).

## Kde najdu soubory s nastavením?

Soubory s nastavením jsou uloženy v interním úložišti telefonu v adresáři "/AAPS/preferences". VAROVÁNÍ: Ujistěte se, že znáte své heslo, protože bez něj nebudete moci šifrovaný soubor s nastavením naimportovat!

## How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Pump unreachable alerts several times a day or at night.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.