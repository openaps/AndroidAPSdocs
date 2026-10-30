# Nejčastější otázky uživatelů APS

Jak přidat otázky do častých dotazů: postupujte podle těchto [pokynů](../SupportingAaps/HowToEditTheDocs.md)

## Obecné

### Mohu si prostě stáhnout instalační soubor AAPS?

Ne. APK soubor obsahující AAPS volně ke stažení neexistuje. Aplikaci si musíte [sestavit](../SettingUpAaps/BuildingAaps.md) sami. Zde je odůvodnění:

AAPS slouží k ovládání vaší pumpy a podávání inzulínu. Podle současných předpisů jsou v Evropě všechny systémy zařazené do třídy IIa nebo IIb zdravotnickými prostředky. Ty vyžadují regulační schválení (označení CE), ke kterému jsou potřeba různé studie a schválení. Distribuce neregulovaných zařízení je nezákonná. Podobná nařízení platí také v ostatních částech světa.

Toto nařízení se netýká pouze prodeje (ve smyslu získat za něco peníze), ale platí pro jakýkoli způsob distribuce (i kdyby byla zdarma). Sestavit si zdravotnický prostředek sám pro sebe je jediný způsob, jak aplikaci používat v souladu s těmito předpisy.

Proto nejsou soubory APK k dispozici.

(FAQ-how-to-begin)=

### Jak začít?

Začněte stránkou [Příprava na začátek s AAPS](../Getting-Started/PreparingForAaps.md): podrobněji vás provede vším, co je popsané níže.

Za prvé, musíte si **opatřit kompatibilní hardwarové komponenty**:

* [podporovanou inzulínovou pumpu](../Getting-Started/CompatiblePumps.md), 
* [chytrý telefon s Androidem](../Getting-Started/Phones.md) (Apple iOS AAPS nepodporuje – můžete se podívat na [iOS Loop](https://loopkit.github.io/loopdocs/)) a
* [systém pro kontinuální monitorování glukózy](../Getting-Started/CompatiblesCgms.md). 

Za druhé musíte **nastavit softwarové komponenty**: [AAPS](../SettingUpAaps/BuildingAaps.md), [zdroj CGM/FGM](../Getting-Started/CompatiblesCgms.md) a [reportovací server](../SettingUpAaps/SettingUpTheReportingServer.md).

Za třetí se musíte naučit a **pochopit referenční návrh OpenAPS, abyste mohli zkontrolovat své parametry léčby**. Základním principem uzavřené smyčky je, že vaše [bazální dávka a sacharidový poměr](../SettingUpAaps/YourAapsProfile.md) jsou přesné. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících určité jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provést, byly z důvodu bezpečnosti omezené (viz maximální povolená dávka dočasného bazálu v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete plýtvat změnou v dávkováním dočasného bazálu, abyste opravili špatně nastavený bazál. Pokud například smyčka často nastavuje nízké dočasné bazály před jídlem, pravděpodobně potřebujete upravit bazál. Můžete použít [Autotune](#autotune-how-autotune-calculates-adjustments), který z velkého množství dat navrhne, zda a jak upravit bazály a/nebo ISF a zda je potřeba změnit sacharidový poměr. Nebo si můžete bazál otestovat a nastavit [tradičním způsobem](https://integrateddiabetes.com/basal-testing/).

### Jaká jsou praktická doporučení pro provoz smyčky?

#### Ochrana heslem

Pokud nechcete, aby šlo vaše nastavení snadno změnit, můžete ho chránit heslem, PINem nebo biometrickým ověřením telefonu (otisk prstu, obličej). Otevřete **Nastavení** > **Ochrana** > **Ochrana nastavení** a zvolte typ ochrany. Na stejném místě můžete chránit také celou aplikaci nebo jen bolusy. Podrobnosti viz [Ochrana nastavení](#Preferences-settings-protection).

#### Chytré hodinky Android Wear

Pokud používáte aplikaci AAPS pro hodinky k podání bolusu nebo ke změně nastavení, musíte každý požadavek potvrdit na hodinkách: po odeslání hodinky zobrazí souhrn s tlačítkem **POTVRDIT**. Viz [Ovládání AAPS pomocí chytrých hodinek s Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Odpojit pumpu

Pokud si pumpu sundáte kvůli sprchování, koupání, plavání, sportu nebo jiným aktivitám, musíte AAPS dát vědět, že se nepodává žádný inzulín, aby byl výpočet IOB správný.

Pumpu můžete odpojit pomocí [ikony smyčky](#AapsScreens-loop-status) na hlavní obrazovce AAPS: stiskněte ji a zvolte **Odpojit pumpu** s dobou, kterou potřebujete. Pokud aktivita trvá déle, než jste plánovali, stiskněte ikonu znovu a zvolte novou dobu: pumpu nemusíte nejdřív znovu připojit. Jak se vyhnout nedostatku inzulínu při dlouhém odpojení, najdete v části [Odpojení pumpy při sprchování nebo aktivitě](#pumps-cannulas-disconnecting).

#### Doporučení nejsou založena pouze na jediné hodnotě ze senzoru CGM

Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Proto pokud nebyla některá měření ze senzoru zachycena, může trvat nějakou dobu, než AAPS nasbírá potřebná nová data a pak znovu smyčku spustí.

#### Další zdroje ke čtení

Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky. Některé z nich už nejsou online: odkazy níže označené „archivovaná kopie“ otevřou kopii uloženou v Internet Archive.

    * [Doladění nastavení](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archivovaná kopie)
    * [Proč na DIA záleží](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archivovaná kopie)
    * [Omezení vzestupů glykémie po jídle](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormony a autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archivovaná kopie)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Jaké vybavení pro případ nouze se doporučuje brát s sebou?

Je potřeba, abyste u sebe měli stejné nouzové vybavení, jako všichni ostatní DM1 pacienti s inzulínovou pumpou. Pokud používáte smyčku systému AAPS, je důrazně doporučeno mít u sebe, nebo v dosahu, následující vybavení:

* Powerbanka a kabely k nabíjení chytrého telefonu, hodinek a (pokud je potřeba) BT čtečky nebo zařízení Link
* Baterie do pumpy
* Přístup ke svým zálohám v telefonu i v cloudu (např. Disk Google, Dropbox), abyste mohli AAPS znovu nastavit na jiném telefonu (viz [Vytváření a obnova záloh](../Maintenance/ExportImportSettings.md)): 
  * aktuální [apk](../SettingUpAaps/BuildingAaps.md) AAPS a všech dalších aplikací, které používáte (např. xDrip, Juggluco, BYODA).
  * soubor úložiště klíčů (ze sestavení apk) a jeho heslo,
  * poslední soubory s exportem nastavení z AAPS a z dalších aplikací,
  * hlavní heslo **AAPS**: bez něj soubor s nastavením nenaimportujete.

(FAQ-organize-backups)=

#### Jak uspořádat zálohy?

Exportujte nastavení velmi pravidelně: po každé výměně podu nebo zásobníku, po úpravě profilu, po splnění cíle, při změně pumpy… I když se nic nemění, exportujte jednou za měsíc. Vždycky si ponechávejte několik starších exportů.

**AAPS** to umí udělat za vás: dokáže exportovat nastavení automaticky (například pomocí [automatizace](#ExportImportSettings-Automating-Settings-Export) po každé výměně podu) a uložit export přímo do cloudové složky (Disk Google). Viz [Vytváření a obnova záloh](../Maintenance/ExportImportSettings.md).

### Jak mohu bezpečně a spolehlivě upevnit CGM/FGM?

Můžete ho přelepit. K dispozici je několik předperperforovaných "přelepů" pro běžné CGM systémy (najdete na Google, eBay nebo Amazonu). Někteří uživatelé používají levnější standardní kineziologické tejpy nebo Rocktape.

Můžete to opravit. Můžete si zakoupit speciální náramky na paži, které upevňují CGM/FGM pomocí pásku (hledejte na Googlu, eBay nebo Amazonu).

## Algoritmus APS

### Proč OpenAPS AMA ukazuje „dia: 3“, i když mám v profilu jinou DIA?

Když je v **Konfigurace** > **APS** zvolen **OpenAPS AMA**, zobrazí **Otevřít plugin** data odeslaná do algoritmu. V jeho části **Profil** je `dia` vždy 3.0 nebo méně:

![Obrazovka pluginu OpenAPS AMA s dia 3.0 v datech profilu](../images/screens/openaps_ama_plugin.png)

V AMA režimu ve skutečnosti DIA neznamená „doba působnosti inzulínu“. Je to parametr, který dříve souvisel s DIA. Parametr nyní znamená, „do kdy by měla být korekce dokončená“. Nemá to žádnou souvislost s výpočtem IOB. V režimu OpenAPS SMB již tento parametr není vůbec potřebný.

## Další nastavení

### Nastavení Nightscoutu

(FAQ-nsclient-blocked)=

#### AAPSClient (nebo AAPS) nenahrává data: „Zablokováno…“. Co mohu dělat?

Stav NSClienta ukazuje, proč se data neposílají:

* **Zablokováno možností připojení**: nastavení připojení nedovoluje současné připojení. Například jste na mobilních datech, ale povolená je jen Wi-Fi, nebo nejste připojeni k žádné z povolených sítí Wi-Fi (SSID).
* **Zablokováno možností nabíjení**: nastavení připojení povoluje synchronizaci jen při nabíjení telefonu (nebo jen na baterii) a to teď neplatí.
* **Žádné připojení**: telefon nemá připojení k internetu.

Zkontrolujte [nastavení připojení NSClienta](#Preferences-nsclient): **Používat mobilní data**, **Používat roaming**, **Používat WiFi**, **WiFi SSID**, **Synchronizovat na baterii** a **Synchronizovat při nabíjení**.

### Nastavení CGM

(FAQ-advanced-filtering)=

#### Proč AAPS hlásí „SMB vždy a po jídle zakázáno, protože zdroj glykémie nepodporuje rozšířené filtrování“?

**Povolit SMB vždy** a **Povolit SMB po sacharidech** lze použít jen s [důvěryhodným zdrojem glykémie](#GettingStarted-TrustedBGSource): senzorem a aplikací CGM, které umí **AAPS** sdělit, ze kterého senzoru hodnoty pocházejí. S jakýmkoli jiným zdrojem glykémie **AAPS** tyto dvě možnosti vypne a zobrazí tuto zprávu. Zkontrolujte seznam důvěryhodných zdrojů. Pokud je v něm váš senzor, ujistěte se, že používáte jednu z aplikací CGM, které jsou u něj uvedené. Viz také [Vyhlazování dat glykémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pumpa

#### Baterie

Smyčka může vybíjet baterii pumpy rychleji než běžné používání, protože systém komunikuje přes Bluetooth mnohem častěji než uživatel při ručním ovládání. Nejlepší je vyměnit baterii už při 25%, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k tomu nastavit varovný alarm pro vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P své Nightscout stránky. Mezi triky, jak zvýšit životnost baterie, patří:

* Zkraťte časový interval pro podsvícení LCD displeje (v menu nastavení pumpy).
* Zkraťte časový interval pro podsvícení (v menu nastavení pumpy).
* Nastavte upozorňování tak, aby se namísto vibrace ozýval zvukový signál (v menu nastavení pumpy).
* tlačítka na pumpě používejte jen k výměně zásobníku; celou historii, stav baterie a objem zásobníku sledujte v AAPS.
* Na některých telefonech systém aplikaci AAPS často zavírá, aby šetřil energii nebo uvolnil RAM. Když se AAPS při každém spuštění znovu inicializuje, naváže s pumpou spojení přes Bluetooth a znovu načte aktuální bazální dávku a historii bolusů. To vybíjí baterii. Abyste zjistili, zda se to děje, zapněte **Zaznamenat spuštění aplikace** v **Rozšířená nastavení** NSClienta: Nightscout pak dostane událost při každém restartu AAPS, takže problém snadno sledujete. Aby se to stávalo méně, vypněte pro AAPS optimalizaci baterie, aby ji telefon přestal zavírat: viz [úspora baterie](#FAQ-battery-savings) níže.
* očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistota z výroby.
* u [pump Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) postup při spuštění záměrně odebírá z baterie vysoký proud, aby prorazil pasivační vrstvu (ta brání ztrátě energie při skladování), ale ne vždy ji prorazí na 100 %. Buďto baterie 2krát až 3krát vyjměte a znovu vložte (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přiložením k oběma pólům baterie na zlomek sekundy).
* viz také další tipy pro [určité typy baterií](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Výměna zásobníků a kanyl

Zásobník se musí vyměnit přímo na pumpě, potom se výměna zaznamená v **AAPS**. Postupujte podle podrobného [návodu na výměnu zásobníku a kanyly](#pumps-cannulas-changing-reservoir-and-cannula).

### Tapeta

Tapetu AAPS pro svůj telefon najdete na [stránce o telefonech](#Phones-phone-wallpaper).

### Každodenní používání

Mnoho z níže uvedených situací si můžete jednou připravit jako [scénu](#scenes): předvolbu, která jedním klepnutím přepne profil, dočasný cíl a další nastavení. **AAPS** nabízí hotové šablony, například *Cvičení*, *Spánek*, *Alkohol* nebo *Koupání*.

#### Hygiena

(what-to-do-when-taking-a-shower-or-bath)=

##### Co dělat při sprchování a koupání?

Při sprchování a koupání si můžete pumpu sundat. Na tak krátkou dobu ji možná nepotřebujete, ale měli byste AAPS dát vědět, že jste pumpu odpojili, aby byly výpočty IOB správné. Viz [popis výše](#FAQ-disconnect-pump). Šablona [scény](#scenes) *Koupání* to udělá za vás.

#### Práce

V závislosti na druhu vaší práce se můžete rozhodnout, že v pracovních dnech budete mít jiné nastavení. Jako uživatel smyčky byste měli zvážit [přepnutí profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) pro svůj typický pracovní den. Například, můžete přepnout na profil větší než 100% v případě, že vaše práce spočívá v sezení za kancelářským stolem, nebo naopak nižší než 100%, jste-li aktivní a celý den na nohou. Pokud pracujete mnohem dříve nebo později než obvykle, nebo pokud pracujete na směny, můžete zvážit také vysoký nebo nízký dočasný cíl nebo [posun času profilu](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile). Můžete si také vytvořit druhý profil (např. „domov“ a „pracovní den“) a každý den přepnout na profil, který zrovna potřebujete, nebo si nastavení pro pracovní den uložit jako [scénu](#scenes).

### Volnočasové aktivity

(FAQ-sports)=

#### Sport

Budete muset změnit své staré sportovní návyky z doby, kdy jste ještě nepoužívali smyčku. Pokud budete při sportu dokrmovat sacharidy jako dříve, systém uzavřené smyčky to pozná a bude se snažit je korigovat.

Takže byste sice měli více aktivních sacharidů, ale smyčka by zároveň působila proti nim a vydala inzulín.

Při používání smyčky byste měli vyzkoušet tyto kroky:

* Proveďte [přepnutí profilu](#ProfileSwitch-change-percentage) na < 100 %: klepněte na název profilu na hlavní obrazovce, klepněte na kulaté tlačítko **▶** a pak nastavte **Procento** a **Trvání**.
* Nastavte [dočasný cíl Aktivita](#TempTargets-activity-temp-target) nad svým běžným cílem. Při procentu pod 100 % a zadané době trvání nabízí stejná obrazovka **Aktivovat** přepínač **Dočasný cíl / Aktivita**, který spustí obojí najednou.
* Pokud používáte SMB, ujistěte se, že [„Povolit SMB při vysokém dočasném cíli“](#Open-APS-features-enable-smb-with-high-temp-targets) a [„Povolit SMB vždy“](#Open-APS-features-enable-smb-always) jsou vypnuté.

Provedení změn před sportem a po sportu je velmi důležité. Proveďte změny v čase před sportem a zvažte vliv svalového plnění.

Šablony [scén](#scenes) *Cvičení* a *Noc po cvičení* tato nastavení spojují, takže je spustíte jedním klepnutím. Pokud sportujete pravidelně ve stejnou dobu (např. lekce v posilovně), můžete ke spuštění přepnutí profilu a dočasného cíle, nebo scény, použít [automatizaci](../DailyLifeWithAaps/Automations.md). Bylo by možné použít automatizaci na základě polohy, ale obtížně se pak kontroluje včasné provedení změny nastavení.

Procentuální hodnota přepnutí profilu, hodnota pro váš dočasný cíl Aktivita a optimální čas pro změnu nastavení jsou velmi individuální. Při zjišťování správných hodnot se v zájmu bezpečnosti držte při zdi (začněte raději s nižší procentuální hodnotou a vyšším dočasným cílem).

#### Sex

Pumpu si můžete sundat, abyste byli „volní“, ale měli byste to AAPS oznámit, aby byly výpočty IOB správné. Viz [popis výše](#FAQ-disconnect-pump).

#### Pití alkoholu

Požívání alkoholu je v režimu uzavřené smyčky poměrně riskantní, protože algoritmus uzavřené smyčky nedokáže správně předpovědět, jak bude glykémie alkoholem ovlivněna. Svůj vlastní postup musíte vyzkoušet pomocí těchto funkcí AAPS:

* Vypnout režim uzavřené smyčky a provést nezbytné zásahy ručně nebo
* nastavit vyšší dočasný cíl a vypnout funkci UAM, aby smyčka nezvyšovala váš IOB kvůli neoznámenému jídlu nebo
* provést [přepnutí profilu](#ProfileSwitch-change-percentage) na znatelně méně než 100 % 

Šablona [scény](#scenes) *Alkohol* je výchozí bod, který si můžete přizpůsobit svému postupu.

Jestliže pijete alkohol, musíte stále sledovat CGM a ručně předcházet hypoglykémii jídlem sacharidů.

#### Spánek

##### Jak používat smyčku v noci bez mobilního a Wi-Fi záření?

Mnoho uživatelů zapíná v noci telefon v režimu letadlo. Pokud chcete, aby vám smyčka pomáhala i ve spánku, postupujte takto (funguje to jen tehdy, když vaše aplikace CGM běží na stejném telefonu jako AAPS, např. xDrip, Juggluco nebo BYODA; NEBUDE to fungovat, pokud glykémie dostáváte přes Nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte, až bude režim Letadlo aktivní.
3. Zapněte Bluetooth.

Nebudete schopni přijímat telefonní hovory ani nebudete mít přístup na internet. Ale smyčka poběží.

Někteří lidé zjistili problémy s místním vysíláním (AAPS nedostává hodnoty glykémie z xDripu), když je telefon v režimu Letadlo. V xDripu jděte do Settings > Inter-app settings > Identify receiver a zadejte `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Pokud chcete v noci jiné nastavení (například vyšší cíl), je šablona [scény](#scenes) *Spánek* dobrý výchozí bod.

#### Cestování

##### Jak se vypořádat se změnou časového pásma?

S DanouR a korejskou verzí DanyR nemusíte dělat nic. U ostatních pump najdete více podrobností na stránce [Změna časového pásma a letní čas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

### Lékařská témata

#### Pobyt v nemocnici

Pokud chcete se svými lékaři sdílet informace o AAPS a DIY smyčce, můžete si vytisknout [průvodce AAPS pro lékaře](../UsefulLinks/ClinicianGuideToAaps.md).

#### Kontrola u vašeho diabetologa

##### Reporty

Můžete ukázat své reporty z Nightscoutu (https://YOUR-NS-SITE.com/report – místo YOUR-NS-SITE použijte adresu svého Nightscoutu) nebo vyzkoušet nástroj [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Časté dotazy na Discordu a jejich odpovědi...

### Můj problém zde není uveden.

Viz [Kde mohu získat pomoc?](../GettingHelp/WhereCanIGetHelp.md). Pokud jste řešení našli sami, **připomeňte nám, ať ho přidáme do tohoto seznamu!**

### Sestavení a instalace

(FAQ-build-errors)=

#### Při sestavení aplikace mám problémy a chyby.

Podívejte se na stránku řešení problémů pro způsob, jakým **AAPS** sestavujete (viz [Sestavení AAPS](../SettingUpAaps/BuildingAaps.md)):

* sestavení v prohlížeči: [Sestavení v prohlížeči: řešení problémů](#aaps-ci-troubleshooting),
* sestavení v Android Studiu: [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Chyba sestavení: název souboru je příliš dlouhý

Tato chyba se může objevit při sestavení v Android Studiu: sestavení se zastaví s chybou, že název souboru je příliš dlouhý. Možná řešení: Přesuňte zdrojové kódy do složky blíže ke kořenové složce disku (např. „C:\src\AndroidAPS“).

Z Android Studio: Ujistěte se, že "Gradle" po otevření projektu a stažení z GitHubu dokončil synchronizaci a indexování. Před Rebuild Project proveďte Build->Clean Project. Spusťte File->Invalidate Caches, a následně restartujte Android Studio.

(FAQ-running-dev-version)=

#### Výstraha: Běží vývojová verze (dev). Uzavřená smyčka je zakázána

**AAPS** zobrazí tuto zprávu, když používáte vývojovou (dev) verzi bez inženýrského režimu: ve vývojové verzi funguje uzavřená smyčka jen v inženýrském režimu.

Vývojová verze je určená k testování, ne ke skutečnému používání smyčky: než budete pokračovat, přečtěte si [Vývojová větev](../AdvancedOptions/DevBranch.md).

Inženýrský režim zapnete takto:

1. Do podsložky `extra` ve vašem adresáři AAPS (složka, kterou jste zvolili v průvodci nastavením, obvykle `AAPS/extra`) vložte soubor s názvem `engineering_mode`. Stačí jakýkoli soubor, pokud má správný název.
2. Restartujte **AAPS**, aby soubor našel.

Tip: Vytvořte si kopii existujícího souboru s logy a přejmenujte ji na "engineering_mode" (poznámka: bez přípony souboru!).

### Cíle

#### Zasekl jsem se na cíli a potřebuji pomoc.

Nejdřív si přečtěte [Plnění cílů](../SettingUpAaps/CompletingTheObjectives.md). Pokud stále nevíte, jak dál, udělejte snímek obrazovky s otázkou a odpověďmi a pošlete ho na kanál AAPS na Discordu. Nezapomeňte napsat, které možnosti jste vybral (nebo ne), a proč. Následně dostanete tipy a pomoc, ale odpovědi si budete muset najít sami.

### Nastavení, hesla a zálohy

(FAQ-reset-master-password)=

#### Jak resetovat hlavní heslo?

Pokud jste zapomněli hlavní heslo, můžete ho resetovat na sériové číslo pumpy:

1. Vytvořte prázdný soubor s názvem `PasswordReset` (bez přípony) v podsložce `extra` vašeho adresáře AAPS (obvykle `AAPS/extra`).
2. Restartujte **AAPS**. Pumpa musí být připojená: **AAPS** zobrazí „Čekání na pumpu…“ a musí přečíst sériové číslo pumpy do 30 sekund.
3. **AAPS** zobrazí „Heslo nastaveno!“: vaše hlavní heslo je teď **sériové číslo pumpy**. Soubor `PasswordReset` se automaticky smaže.
4. Otevřete **Nastavení** > **Ochrana** > **Hlavní heslo** a nastavte nové heslo.

Pokud se pumpa včas nepřipojí, nic se nezmění: zkontrolujte připojení pumpy a zkuste to znovu.

Resetuje se tím jen hlavní heslo. Heslo nebo PIN pro nastavení, aplikaci nebo bolus se neresetuje, ale místo nich můžete vždy použít hlavní heslo.

    {admonition} Staré soubory s nastavením
    :class: warning
    Soubory s nastavením exportované se starým hlavním heslem lze importovat jen s tímto starým heslem.

(FAQ-where-are-settings-files)=

#### Kde najdu soubory s nastavením?

Soubory s nastavením se ukládají do podsložky `preferences` v adresáři AAPS, který jste zvolili v [průvodci nastavením](#SetupWizard-StoragePermission) (například `/internal storage/AAPS/preferences`). Pokud jste nastavili cloudovou složku (Disk Google), můžete exporty ukládat i tam. Viz [Vytváření a obnova záloh](../Maintenance/ExportImportSettings.md).

VAROVÁNÍ: Ujistěte se, že znáte své heslo, protože bez něj nebudete moci šifrovaný soubor s nastavením naimportovat!

(FAQ-import-settings-earlier-versions)=

#### Jak importovat nastavení ze starších verzí AAPS do AAPS v3 nebo v4?

Do AAPS v3 nebo v4 můžete importovat jen nastavení, která byla exportována v AAPS v2.8x nebo novější. Pokud jste používali verzi AAPS starší než v2.8x, nebo potřebujete použít exporty nastavení starší než v2.8x, musíte nejdřív nainstalovat AAPS v2.8. Importujte starší nastavení z v2.x do v2.8. Až zkontrolujete, že je vše v pořádku, exportujte nastavení z v2.8. Nainstalujte aktuální verzi AAPS a importujte do ní nastavení z v2.8.

Pokud ke staré i nové verzi použijete stejný klíč, nemusíte nastavení ani importovat. Novou verzi můžete nainstalovat přes starou.

Byly přidány nové cíle. Budete je muset splnit.

(FAQ-delete-treatments)=

#### Kde mohu smazat ošetření?

Otevřete **nabídku** (☰) a zvolte **Historie ošetření**. Dlouhým stiskem položku vyberte, podle potřeby klepněte na další položky, pak klepněte na ikonu **koše** a potvrďte. Viz [Historie ošetření](#aaps-screens-treatments).

### Problémy s telefonem a připojením

(FAQ-aaps-stops)=

#### AAPS se každý den zastaví zhruba ve stejnou dobu.

* Na některých telefonech může Google Play Protect každé ráno vypnout **AAPS**. Pokud se to stane, otevřete možnosti Google Play a vypněte **Google Play Protect**.
* Zkontrolujte, zda nemáte „čisticí“ aplikace (např. CCleaner atd.), a odinstalujte je.
* Vypněte pro **AAPS** všechny optimalizace baterie (viz [úspora baterie](#FAQ-battery-savings) níže).

(FAQ-battery-savings)=

#### Jak nastavit úsporu baterie?

Telefon může **AAPS** a související aplikace (aplikaci CGM, Bluetooth) uspat, když je nepoužíváte. **AAPS** pak nemůže dělat svou práci a připojení Bluetooth k senzoru a pumpě (nebo k RileyLinku) se může ukončit. To způsobuje výstrahy „Pumpa nedostupná“ a chyby komunikace.

Vypněte optimalizaci baterie pro **AAPS**, aplikaci CGM (např. xDrip) a systémovou aplikaci Bluetooth. Postup závisí na značce, modelu a verzi Androidu telefonu:

* pro telefony Pixel, Samsung a Huawei viz [Optimalizace baterie](#generaltroubleshooting-android-related-issues),
* v **AAPS** otevřete **nabídku** (☰) > **O aplikaci** a klepněte na **Nezabíjet mou aplikaci?**, nebo pro jiné značky navštivte [Don't kill my app](https://dontkillmyapp.com/).

Pokud si nejste jistí, že problém způsobuje úspora baterie, můžete v telefonu dočasně vypnout všechny úspory baterie: baterie se bude vybíjet rychleji, ale rychle uvidíte, zda problém zmizí.

(FAQ-pump-unreachable-alerts)=

#### Výstrahy „Pumpa nedostupná“ několikrát denně nebo v noci.

Telefon možná uspává **AAPS** nebo i Bluetooth, a tím se ztrácí spojení s pumpou nebo RileyLinkem (viz [úspora baterie](#FAQ-battery-savings) výše).

Můžete také změnit, kdy se výstraha spustí: stiskněte ikonu **Nastavení** (ozubené kolo) vpravo nahoře na hlavní obrazovce a zvolte **Místní výstrahy** > **Práh nedostupnosti pumpy** (30 až 300 minut). Podívejte se na stránku své pumpy: u některých je doporučená hodnota, např. 120 minut pro [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Můj link/pumpa/pod nereaguje (RL/OL/EmaLink…)

U některých telefonů dochází k odpojování Bluetooth od zařízení Link (RL/OL/EmaL...).

U některých zařízení Link se také stává, že nereagují (AAPS hlásí, že jsou připojená, ale Link se k pumpě nedostane nebo jí nemůže posílat příkazy.)

Nejdřív zkuste tlačítko **Resetovat RileyLink** na obrazovce pumpy (viz stránku vaší pumpy: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Pokud to nepomůže, nejjednodušší způsob, jak všechny tyto části znovu zprovoznit, je:

1. Vypněte Link.
2. Ukončete **AAPS** (**nabídka** (☰) > **Konec**).
3. Dlouze stiskněte ikonu **AAPS**, otevřete **Informace o aplikaci** v Androidu, klepněte na **Vynutit ukončení** a pak na **Úložiště** > **Vymazat mezipaměť** (NEMAŽTE úložiště/data!).
4. Některé telefony zde výjimečně potřebují restart. Můžete to zkusit i bez restartu.
5. Zapněte Link.
6. Spusťte **AAPS**.
7. Na obrazovce pumpy klepněte na **Spárovat RileyLink** a znovu vyberte svůj Link.

### Vzdálené ovládání

(FAQ-aapsclient)=

#### Nastavení a používání vzdálené aplikace AAPSClient

**AAPSClient** je samostatná aplikace, se kterou může pečovatel sledovat a vzdáleně ovládat **AAPS**. Od **AAPS** v4 je pro ovládání **AAPS** z AAPSClientu potřeba jednorázové spárování obou aplikací. Viz:

* [Aplikace AAPSClient](#aapsclient-app): instalace, první spuštění a párování,
* [Ovládání master ↔ klient](#client-master-control): co lze ovládat a jak funguje párování,
* [AAPSClient na chytrých hodinkách](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Ošetření, která zadám na webu Nightscoutu, se neprovedou

To je [zabezpečený režim](#client-master-control-hardened-mode). Když je zapnuté ovládání z klienta (ve Zjednodušeném režimu je zapnuté vždy), přijímá **AAPS** změny jen od spárovaných klientů, ne z webu Nightscoutu ani z jiných aplikací. Zadávejte je proto ve spárovaném **AAPSClientu**.

### Výstrahy a varování

#### Mám červený varovný odznak (červený trojúhelník) / AAPS nechce zapnout uzavřenou smyčku / Smyčka zůstává v LGS / Měl jsem žlutý trojúhelník

Červený varovný odznak u zkratky zdroje glykémie je bezpečnostní funkce AAPS. Úplné vysvětlení viz [Varovná značka glykémie](#aaps-screens-bg-warning-sign).

Červený varovný odznak u zkratky zdroje glykémie ve spodní liště (ve starších verzích červený trojúhelník) znamená, že máte zdvojené glykémie a AAPS nemůže přesně spočítat rozdíly (delty). Uzavřená smyčka se přepne do režimu **Ochrana před nízkou glykémií**: stále snižuje nebo pozastavuje bazál, aby vás chránila před nízkou glykémií, ale nepodává žádný korekční inzulín. Abyste varování odstranili, musíte u každé zdvojené hodnoty jednu glykémii smazat. Klepnutím na zkratku otevřete [obrazovku zdroje glykémie](#aaps-screens-bg-source): duplicita je zvýrazněná červeně. Dlouze stiskněte jeden řádek, který chcete smazat, označte po jednom řádku z každé zdvojené dvojice a klepněte na ikonu koše. Pokud je zdvojených glykémií příliš mnoho, možná budete muset resetovat databáze AAPS. V tom případě ale přijdete také o statistiky, IOB, COB a zvolený profil.

Když varování zmizí, AAPS se sám nevrátí do režimu **Uzavřená smyčka**. Stiskněte ikonu smyčky na hlavní obrazovce a znovu zvolte **Uzavřená smyčka**.

Možná příčina problému: xDrip a/nebo NS doplňují chybějící glykémie (backfilling).

Žlutý trojúhelník ve starších verzích znamenal nestabilní odstup mezi hodnotami glykémie (glykémie nepřicházejí pravidelně každých 5 min nebo chybí), což se často stává u Libre nebo po výměně vysílače G6. **AAPS** 4 ho už nezobrazuje: hodnoty přepočítá na pozadí a smyčka funguje správně.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Mohu přesunout aktivní pod DASH do jiného telefonu?

Stav podu je součástí exportovaného nastavení, takže aktivní pod lze přesunout do jiného telefonu: těsně před přesunem exportujte nastavení a importujte ho na druhém telefonu. Oficiálně to není podporováno a hrozí ztráta podu: pokud je to možné, zkuste to, až bude pod blízko konce platnosti.

Nejdřív si přečtěte tyto části:

* [Export a import nastavení](#omnipod-dash-export-import) na stránce Omnipod DASH a [Pumpy bez hadičky](#ExportImportSettings-tubeless-pumps): na novém telefonu zaškrtněte **Nahradit také nastavení pumpy** a použijte soubor exportovaný během podu, který máte právě nasazený,
* [Vyřazení podu](#omnipod-dash-discard-pod), abyste pak pod odstranili ze starého telefonu. Starý telefon nechte v režimu Letadlo, dokud pod nevyřadíte, aby s podem nikdy nekomunikovaly oba telefony.