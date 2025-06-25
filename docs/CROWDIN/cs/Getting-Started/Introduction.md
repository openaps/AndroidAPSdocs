# Úvod do APS a AAPS

## Co je "Systém umělé slinivky" (Artificial Pancreas System; APS)?

Lidská slinivka dělá mnoho věcí kromě regulace krevního cukru. Nicméně termín ** "Systém umělé slinivky" (APS)** obvykle odkazuje na systém, který pracuje na tom, aby automaticky udržoval krevní cukr na zdravé úrovni.

Nejzákladnější způsob, jak toho dosahuje, je pomocí zjišťování **glykémie**, využití těhto hodnot k provedení **výpočtů** a následné dodání správné (odhadované) dávky **inzulínu** do těla pacienta. Výpočet se opakuje vždy po několika minutách 24 hodin denně, 7 dní v týdnu. Využívá **alarmy** a **upozornění** k informování uživatele, pokud je třeba jeho zásahu nebo pozornosti. Systém se obvykle skládá ze **senzoru glykémie**, **inzulínové pumpy** a **aplikace** v telefonu.

Více informací o různých systémech umělé slinivky, které se v současné době používají, se můžete dočíst v této recenzi z roku 2022:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Trendy v technologii uzavřené smyčky](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses).

V blízké budoucnosti budou mít takzvané duální systémy možnost vydávat kromě inzulínu také glukagon, s cílem zabránit závažným hypoglykémiím a umožňovat tak ještě přesnější kontrolu krevního cukru.

Systém umělé slinivky lze považovat za [“autopilota pro váš diabetes”](https://www.artificialpancreasbook.com/). Co to znamená?

V eltadle autopilot nevykonává všechnu lidskou práci, pilot nemůže celý let prospat. Autopilot pomáhá pilotovat při práci. Zbavuje to pilota břemene neustálého sledování letadla a tím mu umožňuje se soustředit na podrobnější monitorování jednou za čas. Autopilot dostává signály od množství senzorů, počítač je vyhodnocuje společně s pilotem zadanými parametry, provádí nezbytné úpravy a upozorňuje pilota na vše, co vyžaduje jeho pozornost. Pilot už není pod tlakem neustálého rozhodování.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Co znamená hybridní uzavřená smyčka?

Nejlepším řešením cukrovky I. typu by byla "léčba příčiny" (pravděpodobně transplantace slinivkových buněk chráněných před imunitním systémem). Zatímco na to čekáme, uzavřená smyčka v systému umělé slinivky je pravděpodobně druhé nejlepší řešení. Takový systém nevyžaduje žádné vstupy uživatele (např. bolus k jídlu nebo hlášení aktivity), s dobrými výsledky regulace hladiny krevního cukru. V současné době neexistují žádné systémy "plně" uzavřené smyčky, všechny vyžadují nějaké informace od uživatele. Současné systémy jsou tzv. "hybridní" uzavřené smyčky, protože využívají kombinaci automatizace a uživatelských vstupů.

## Jak a proč využívání smyčky začalo?

Vývoj komerční technologie pro pacienty s diabetem I. typu (T1D) je velmi pomalý. V roce 2013 bylo komunitou T1D pacientů založeno hnutí #WeAreNotWaiting. Aby dosáhli zlepšení kontroly krevního cukru, bezpečnosti a kvality života, vyvinuli sami systémy s využitím existujících schválených technologií (inzulínové pumpy a senzory). Ty jsou známé jako DIY (do-it-yourself; udělej-si-sám) systémy, protože nejsou formálně schváleny zdravotnickými autoritami (FDA, NHS atd.). Jsou k dispozici čtyři hlavní DIY systémy: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

Skvělým pomocníkem k pochopení základů využívání smyčky na DIY systémech je kniha "Automated Insulin Delivery" od Dany Lewis. Můžete si jí [zde](https://www.artificialpancreasbook.com/) zdarma stáhnout (nebo si můžete zakoupit tištěné vydání). Pokud chcete vědět více o [OpenAPS](https://openaps.org/what-is-openaps/), ze kterého se vyvinul **AAPS**, pak [webové stránky OpenAPS](https://openaps.org/what-is-openaps/) představují skvělý zdroj.

Vzniklo také několik komerčních systémů s hybridní uzavřenou smyčkou, poslední z nich jsou [CamAPS FX](https://camdiab.com/) (UK a EU) a [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA a EU). Oba se velmi liší od DIY systémů především proto, že využívají "učící se algorytmus", který upravuje dávky inzulínu na základě vaší spotřeby inzulínu v předchozích dnech. Mnoho členů DIY komunity už tyto komeční systémy vyzkoušelo a porovnalo je s jejich DIY systémy. Více informací a porovnání funkcí rozdílných systémů lze získat dotazem ve Facebookových skupinách zaměřených na tyto systémy, ať už v [AAPS Facebookové skupině](https://www.facebook.com/groups/AndroidAPSUsers/) nebo na [Discordu](https://discord.com/invite/4fQUWHZ4Mw).

## Co je Android APS (AAPS)?

![image](../images/basic-outline-of-AAPS.png)

**Obrázek 1**. Základní schéma Android APS, AAPS.

Android APS (**AAPS**) je systém hybridní uzavřené smyčky nebo také systém umělé slinivky (APS). Vypočítává dávkování inzulínu pomocí zavedených [OpenAPS](https://openaps.org/) algoritmů (souboru pravidel), vyvinutých komunitou pacientů s diabetem I. typu #WeAreNotWaiting.

Zatímco OpenAPS je kompatibilní pouze s určitými staršími inzulinovými pumpami, **AAPS** (který je možné využít s širší paletou inzulínových pump) byl vyvinut v roce 2016 Milošem Kozákem pro člena rodiny, který byl diagnostikován diabetem I. typu. Od těchto prvních dnů byl **AAPS** neustále vyvíjen a vylepšován týmem dobrovolných aplikačních vývojářů a dalšími nadšenci, kteří jsou ve spojení se světem diabetu I. typu. Dnes **AAPS** využívá přibližně 10 000 lidí. It is a highly customisable and versatile system, and because it is open-source, it is also readily compatible with many other open-source diabetes software and platforms. Základní komponenty současné verze **AAPS** systému jsou znázorněny na **obrázku 1** výše.



## Jaké jsou základní komponenty AAPS?

"Mozkem" AAPS je **aplikace**, kterou si sami sestavíte. Sestavením vás provede manuál, krok za krokem. You then install the **AAPS  app** on a [compatible](../Getting-Started/Phones.md) **Android smartphone** (**1**). Mnoho uživatelů upřednostňuje instalaci smyčky na vyhrazeném telefonu, místo na jejich hlavním. Takže nemusíte Android telefon používat na všechno ostatní, stačí pouze na AAPS smyčku.

Kromě **AAPS** budete do Vašeho **chytrého telefonu s Androidem** muset také nainstalovat další aplikaci. This [additional app](../Getting-Started/CompatiblesCgms.md) receives glucose data from a sensor (**2**) by bluetooth, and then sends the data internally on the phone to the **AAPS app**.

**AAPS aplikace** využívá rozhodovací proces (**algoritmus**) z OpenAPS. Nováčci začínají se základním **oref0**  algoritmem, ale jak postupují s AAPS, mohou přepnout na novější algoritmus  **oref1**. Jestli budete využívat algoritmus oref0 nebo oref1 závisí na tom, který bude nejlépe vyhovovat vaší situaci.  V obou případech vezme algoritmus do úvahy množství faktorů a provede rychlé kalkulace pokaždé, když přijdou nová měření ze senzoru. Algoritmus pak pošle inzulínové pumpě (**3**) přes bluetooth informaci kolik inzulínu má pacientovi podat. Všechny informace mohou být prostřednictvím mobilních dat nebo WiFi připojení odeslány na internet (**4**). Pokud je to třeba, mohou být tyto iniformace sdíleny se sledujícími uživateli a/nebo shromažďovány k analýze.

## Jaké má systém AAPS výhody?

OpenAPS algoritmus, který **AAPS** využívá, kontroluje bez nutnosti zásahů uživatele hladinu krevního cukru podle uživatelem zadaných parametrů (především bazálních dávek, citlivosti na inzulín, inzulíno-sacharidového poměru, délky aktivity inzulínu atd.) a každých 5 minut reaguje na nově načtené údaje ze senzoru. Mezi oceňované výhody využití AAPS patří jemně doladitelné nastavení, automatizace a vyšší transparentnost systému v režimu pacient / pečovatel. To může vést k lepší kontrole nad vaším diabetem (nebo diabetem vaší blízké osoby), což může vést ke zlepšení kvality života a menšímu stresu.

### **Konkrétní výhody zahrnují:**

#### 1) Zabudovaná bezpečnost
Informace o bezpečnostních vlastnostech algoritmů, známých jako oref0 a oref1, najdete [zde](https://openaps.org/reference-design/). Uživatel má kontrolu nad vlastními bezpečnostními omezeními.

#### 2) **Hardware flexibility**

**AAPS** umí pracovat se širokým výběrem inzulinových pump a senzorů. Například pokud se u vás rozvine alergie na lepidlo náplastí senzorů Dexcom, můžete místo nich začít používat senzory Libre. To vám umožňuje flexibilitu při životních změnách. Není nutné znovu sestavovat ani přeinstalovávat aplikaci **AAPS**, při přechodu na jiný hardware stačí zaškrtnout jiné políčko v aplikaci. Aplikace není závislá na ovladačích pro konkrétní pumpu a také obsahuje možnost použít „virtuální pumpu“, takže s ní uživatelé mohou bezpečně experimentovat, než ji skutečně začnou používat.

#### 3) **Highly customisable, with wide parameters**

Uživatelé mohou snadno přidat nebo odebrat moduly nebo funkce. **AAPS** může být použit v režimu otevřené i uzavřené smyčky. Zde jsou některé příklady možností systému **AAPS**:

 a) Možnost nastavit nižší cíl glykémie 30 minut před jídlem; cíl můžete nastavit na 4.0 mmol/L (72 mg/dL).

 b) Pokud vám resistence na inzulín způsobuje vysokou hladinu cukru v krvi, **AAPS** vám umožní nastavit **automatizační** pravidlo, které při překročení glykémie 8 mmol/L (144 mg/dL) přepne na (například) 120% profil (výsledkem je 20% nárůst bazálních dávek a posílení dalších faktorů oproti parametrům vašeho obvyklého **profilu**). Automatizační pravidlo se po nastaveném čase vypne. Pravidlo automatizace může být nastaveno ke spuštění pouze v některé dny v týdnu, v určitou denní dobu nebo dokonce na určitých místech.

 c) Pokud vaše dítě začne bez předchozího upozornění skákat na trampolíně, **AAPS** vám umožní zastavit dávkování inzulínu na určitou dobu přímo přes telefon.

 d) Po opětovném připojení inzulínové pumpy, která byla odpojena kvůli plavání, **AAPS** spočítá množství bazálního inzulínu vynechané v průběhu odpojení a opatrně ho s ohledem na vaši aktuální glykémii dopošle. Jakýkoliv nepotřebný inzulín může být přepsán pouhým zrušením zmeškaného bazálu.

 f) **AAPS** je vybaven možností nastavení odlišných profilů pro různé situace, se snadným přepínáním mezi jednotlivými profily. Například, funkcionality které umožnují algoritmu rychleji a důrazněji reagovat na zvýšenou glykémii (jako jsou supermikrobolusy ("**SMB**"), neohlášené sacharidy ("**UAM**"), mohou být nastavené tak aby fungovaly pouze přes den, pokud se obáváte nočních hypoglykémií.

To vše jsou příklady, celá škála funkcí poskytuje velkou flexibilitu pro každodenní život, včetně sportu, nemoci, hormonálních cyklů _atd._. Konečně, je to jen na uživateli aby se rozhodl, jak chce tuto volnost využít a proto neexistuje jediná automatizace pro všechny.

#### 4) **Remote monitoring**
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, xDrip+, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. In some apps (xDrip+) you can also turn alarms off totally, which is great if you have a new sensor “soaking” or settling down that you don’t want to loop with yet.

#### 5) **Remote control**
Významnou výhodou **AAPS** oproti komerčně dostupným systémům je to, že umožňuje followerům - použitím ověřených textových příkazů (SMS) nebo pomocí aplikace ([Nightscout](https://nightscout.github.io/) nebo AAPSClient) - posílat širokou škálu příkazů do **AAPS** systému. To ve velké míře využívají rodiče dětí s diabetem I. typu. Může to být velmi užitečné: například na hřišti, když chcete poslat pre-bolus ke svačině z vašeho vlastního telefonu, zatímco si dítě hraje. It is possible to monitor the system (_e.g._ Fitbit), send basic commands (_e.g._ Samsung Galaxy watch 4), or even run the entire AAPS system from a high-spec smartwatch (**5**) (_e.g._ LEMFO). V tomto posledním případě ani k provozu AAPS nepotřebujete telefon. Jak se postupně zlepšuje životnost baterií v hodinkách, bude tato varianta pravděpodobně čím dál víc atraktivní.

#### 6) **No commercial constraints, due to open application interfaces**
Kromě použití přístupu open-source, který umožňuje zdrojový kód **AAPS** kdykoli zobrazit, základní princip v poskytování otevřeného progamovacího prostředí je dát příležitost ostatním vývojářům přispět novými nápady a možnostmi. **AAPS** je úzce integrován s Nightscoutem. To urychluje vývoj a umožňuje uživatelům přidávat nové funkce, aby se život s diabetem stal ještě pohodlnější. Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [xDrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. Probíhá dialog mezi vývojáři s otevřeným zdrojovým kódem a těmi, kteří vyvíjejí komerčně dostupné systémy. Mnohé DIY inovace jsou postupně přebírány komerčními systémy, kde je vývoj pochopitelně pomalejší, částečně proto, že rozhraní mezi systémy různých společností (pumpy, aplikace, senzory _atd._) musí být pečlivě sjednána a licencována. To může také zpomalit inovace, které přináší výhody pro pacienta (nebo pro malou subpopulaci pacientů se specifickými potřebami), ale nevytvářejí žádný významný zisk.

#### 7) **Detailed app interface**
S **AAPS** je snadné sledovat věci jako: množství inzulínu v pumpě, stáří kanyly a senzoru, stáří baterie v pumpě, množství inzulínu na palubě _atd._. Mnoho akcí lze provést prostřednictvím aplikace **AAPS** (primování pumpy po plnění, odpojení pumpy _atd._), místo toho aby bylo nutné akce provádět přímo na pumpě. To znamená, že pumpa může zůstat v kapse (nebo v opasku) pacienta.

#### 8) **Accessibility and affordability**
**AAPS** umožňuje přístup k systému hybridní uzavřené smyčky světové úrovně lidem, kteří by si ho nemohli dovolit financovat sami nebo prostřednictvím zdravotního pojištění. Tento systém je přitom v oblasti vývoje koncepčně několik let napřed oproti komerčním systémům. Aktuálně potřebujete Nightscout účet, abyste mohli nastavit **AAPS**, ačkoliv účet Nightscout není vyžadován pro každodenní provoz smyčky **AAPS**. Mnoho lidí i nadále používá Nightscout ke sběru dat a ke vzdálené kontrole. Ačkoli je **AAPS** sám o sobě zdarma, založení Nightscoutu v některé z dostupných platforem může být zpoplatněné (0€ - 12€) v závislosti na vyžadované úrovni podpory (viz. srovnávací tabulka) a také zda-li a jak chcete Nightscout po nastavení dále využívat. **AAPS** works with a wide range of affordable (starting from approx €150) [Android phones](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Different versions are available for specific locations and languages, and AAPS can also be used by people who are [blind](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) **Support**
Žádný systém automatického dávkování inzulínu není dokonalý. Komerční i open-source systémy mají společných mnoho běžných problémů jak při komunikaci, tak dočasných poruchách hardwaru. There is support available from community of AAPS users on Facebook, Discord and GitHub who designed, developed and are currently using **AAPS**, all over the world. Také na Facebooku jsou dostupné podpůrné skupiny a pomoc od klinických/komerčních společností pro komerční APS systémy - stojí za to diskutovat s uživateli nebo bývalými uživateli těchto systémů a získat tak jejich zpětnou vazbu o běžných problémech, kvalitě výukových materiálů a úrovni poskytované podpory.

#### 10) **Predictability, transparency and safety**
**AAPS** je zcela transparentní, logický a předvídatelný algoritmus, což může usnadnit rozpoznání špatného nastavení a odpovídajícím způsobem jej upravit. Přesně vidíte, co systém dělá a proč to dělá. Natavením provozních limitů bude kontrola (a odpovědnost) ve vašich rukou. To může uživateli poskytnout důvěru a klidný spánek.

#### 11) **Access to advanced features through development (dev) modes including full closed loop**
Tato dokumentace **AAPS** se zaměřuje na hlavní - nejstandardnější - **„master“** větev **AAPS**. Výzkum a vývoj však stále pokračuje. Zkušenější uživatelé mohou zkoušet objevovat experimentální funkce v **vývojové větvi**. Inovace v oblasti rozvoje se zaměřují na strategie pro úplnou uzavřenou smyčku (zcela bez bolusování k jídlu _apod._) a obecně se snaží o co nejpohodlnější život s diabetem 1. typu.

#### 12) **Ability to contribute yourself to further improvements**
Diabetes typu 1 může být velmi frustrující a můžete mít pocit, že jste na to sami. Získání kontroly nad vlastní technikou pro zvládání diabetu s možností "splacení" formou pomoci ostatním, jak se postupně zlepšujete, může být velmi obohacující. Můžete se sami vzdělávat a rozvíjet, objevovat a vyhledávat překážky a dokonce přispívat k novému vývoji a dokumentaci. Cestou potkáte další lidi se stejným cílem, se kterými můžete sdílet nápady a pracovat na nich společně. Tohle je podstata #WeAreNotWaiting.

## Jaké je AAPS ve srovnání s MDI a otevřenou smyčkou?

Vícenásobné denní dávky neboli intenzifikovaný inzulinový režim (Multiple daily injections, MDI; (a) na **Obr. 2** níže) obvykle zahrnuje podávání pomalého inzulínu (_např._ Tresiba) jednou denně v kombinaci s podáváním rychlého inzulínu (_např._ Novorapid, Fiasp) v čase jídla nebo za účelem korekcí. Otevřená smyčka (b) zahrnuje využití inzulínové pumpy k podávání bazálu v nastavených dávkách rychlého inzulínu a k podávání bolusů v době jídla a ke korekcím. Základním principem smyčky je to, že aplikace využívá data o glykémii získaná ze sensoru k tomu, aby zastavila podávaní inzulínu pumpou, když predikuje nízkou glykémii, a naopak podala více inzulínu, když predikuje vysokou glykémii (c). Ačkoliv je tento princip v porovnání s reálným životem příliš zjednodušený, jeho cílem je ukázat klíčové rozdíly v přístupu ke kompenzaci. Pomocí všech těchto tří přístupů je možné dosáhnout výjimečně dobré kompenzace diabetu.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Obrázek 2** Základní přehled (a) MDI, (b) otevřená smyčka a (c) hybridní uzavřená smyčka.

## Jaké je AAPS ve srovnání s ostatními systémy smyčky?

K 25. červnu 2023 jsou k dispozici čtyři hlavní open source systémy uzavřené systémy smyčky: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (dříve FreeAPS X). Vlastnosti jednotlivých systémů jsou uvedeny v následující tabulce:


| Typy zařízení | Název                                                                      | [AAPS](https://wiki.aaps.app)             | [Smyčka](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ------------- | -------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Telefon       | Android                                                                    | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| Telefon       | iPhone                                                                     | ![unavailable](../images/unavailable.png) | ![available](../images/available.png)         | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| Rig           | miniaturní počítač                                                         | ![unavailable](../images/unavailable.png) | ![unavailable](../images/unavailable.png)     | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                        | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                       | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                         | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md) (2)                    | ![available](../images/available.png)     | ![available](../images/available.png)         | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| PUMPA         | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                        | ![available](../images/available.png)     | ![available](../images/available.png)         | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| PUMPA         | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                              | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Medtrum TouchCare Nano](../CompatiblePumps/MedtrumNano.md)                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)              | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA         | [Starší Medtronic](../CompatiblePumps/MedtronicPump.md)                    | ![available](../images/available.png)     | ![available](../images/available.png)         | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| PUMPA         | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM           | [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                 | ![available](../images/available.png)     | ![available](../images/available.png)         | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                | ![available](../images/available.png)     | ![available](../images/available.png)         | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                 | ![available](../images/available.png)     | ![available](../images/available.png)         | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| CGM           | [Dexcom G5](../CompatibleCgms/DexcomG5.md)                                 | ![available](../images/available.png)     | ![available](../images/available.png)         | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| CGM           | [Libre 3](../CompatibleCgms/Libre3.md)                                     | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM           | [Libre 2](../CompatibleCgms/Libre2.md)                                     | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Libre 1](../CompatibleCgms/Libre1.md)                                     | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Eversense](../CompatibleCgms/Eversense.md)                                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Poctech](../CompatibleCgms/PocTech.md)                                    | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM           | [Ottai](../CompatibleCgms/OttaiM8.md)                                      | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM           | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                 | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM           | [Nightscout jako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md) | ![available](../images/available.png)     | ![available](../images/available.png)         | ![available](../images/available.png)                 | ![available](../images/available.png)          |

_Poznámky k tabulce:_
1. **rig** je malý počítač bez monitoru, který je snadno přenosný. Jedním z podporovaných zařízení je Intel Edison + Explorer Board a druhý Raspberry Pi + Explorer HAT nebo Adafruit RFM69HCW Bonnet. První APS byl založen na tomto nastavení, protože mobilní telefony nebyly schopny spouštět požadované algoritmy. Používání těchto systémů se snížilo v souvislosti s tím, jak se rozšiřovaly možnosti nastavení mobilních telefonů a telefony začaly být vybaveny velkým displejem. Intel také přestal prodávat Intel Edison. Vynikající OpenAPS algoritmy **oref0** a **oref1** jsou nyní začleněny do AAPS a iAPS.
2. Omnipod Dash je nástupcem Omnipod Eros. Podporuje komunikaci přes bluetooth a nepotřebuje rig bránu pro komunikaci mezi Omnipodem a mobilním telefonem. Pokud máte na výběr, doporučujeme použít Dash místo Eros.


Mezinárodně recenzované prohlášení o shodě, včetně praktických pokynů k otevřené smyčce, bylo sepsáno zdravotnickými profesionály a publikováno v předním lékařském časopise v roce 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Zpráva shrnuje hlavní technické rozdíly mezi jednotlivými open source systémy hybridní uzavřené smyčky a stojí za přečtení (včetně vaší diabetické ambulance).

Je těžké získat „pocit“ z jakéhokoli systému aniž byste ho používali nebo mluvili s ostatními uživateli, tak se obráťte na ostatní na Facebooku/Discordu a ptejte se. Většina lidí zjistí, že **AAPS** je neuvěřitelně sofistikovaný ve srovnání s ostatními systémy hybridní uzavřené smyčky (zejména s komerčními systémy), s velkým počtem přizpůsobitelných nastavení a funkcí, zmíněných výše. Někomu to ze začátku bude připadat nezvládnutelné, ale nemusíte prozkoumat všechny možnosti najednou. Můžete postupovat takovou rychlostí, jaká vám bude vyhovovat a při každém kroku vám bude k dispozici pomoc.


## Používá AAPS umělou inteligenci nebo nějaký samoučící algoritmus?

The current master version of **AAPS** (3.3.1.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. Systém je jako takový otevřený a transparentní v tom, jak funguje, a má může být srozumitelný nejen odborníkům, ale i lékařům a pacientům. To také znamená, že pokud máte výrazně se měnící rozvrh (například změna ze stresujícího pracovního týdne na odpočinkovou dovolenou) a budete pravděpodobně potřebovat výrazně odlišné dávky inzulínu, můžete okamžitě přepnout **AAPS** na využívání slabšího nebo silnějšího přizpůsobeného profilu. "Učící se systém" pro vás tuto změnu udělá sám, ale bude mu pravděpodobně trvat déle, než se mu podaří dávky inzulínu přizpůsobit.

## Který systém je ten pravý pro mě nebo pro osobu, o kterou pečuji?

Prakticky je váš výběr systému často omezen tím, jakou pumpu už máte nebo můžete získat od vašeho poskytovatele zdravotní péče, a jaký jste si vybrli telefon (Apple nebo Android). Pokud ještě nemáte inzulínovou pumpu máte více možností výběru systému. Technologie se neustále vyvíjí, pumpy a senzory se přestávají vyrábět a objevují se nové. Většina otevřených systémů pracuje s nejdůležitějšími senzory (Libre a Dexcom) nebo přidává podporu pro nové senzory zhruba do roka od jejich uvolnění (s drobnou časovou prodlevou pro testování bezpečnosti a stability).

Většina **AAPS ** uživatelů hlásí delší čas v rozsahu, snížení HbA1c, stejně jako zlepšení kvality života díky využívání systému, který automaticky upravuje bazální dávky v průběhu spánku. A to platí pro většinu APS systémů s hybridní uzavřenou smyčkou. Někteří lidé raději využívají velmi jednoduché systémy, které není možné příliš přizpůsobovat (což znamená že mohou upřednostňovat komerční systémy) a pro jiné je tento nedostatek kontroly velkým zklamáním (mohou preferovat open source systémy). Pokud vy (nebo osoba o kterou pečujete) jste nově diagnostikováni, většinou začnete používat léčbu inzulínovými pery (MDI) a senzorem, potom pokračujete s pumpou, která umožňuje práci ve smyčce, potom pokročíte k **AAPS**, ale někteří (především malé děti) mohou začínat rovnou s inzulínovou pumpou.

Je důležité poznamenat, že uživatel **AAPS** musí aktivně zkoumat a řešit problémy sám, s pomocí komunity. To je zcela odlišný způsob myšlení než při používání komerčního systému. S **AAPS** má uživatel větší kontrolu, ale také odpovědnost a musí být s tímto přístupem spokojen.

## Je bezpečné používat open source systémy jako AAPS?

### Bezpečnost AAPS systému
Jelikož žádná metoda dávkování inzulínu není bez rizika, přesněji by otázka měla znít: "Je to bezpečné ve **srovnání** s mým současným systémem dávkování inzulínu?". V **AAPS** je množství kontrol a vyvažování. Nedávný [článek](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) zkoumal použití **AAPS** v počítačem simulovaném prostředí, což byl účinný způsob jak vyzkoušet bezpečnost a efektivitu systému. Obecně se odhaduje, že celosvětově je více než 10 000 jedinců, kteří používají open source systémy pro automatizované dávkování inzulínu, a jejich počet dále stoupá.

Jakékoliv zařízení, které používá rádiovou komunikaci, může být hacknuto, a to platí i pro nesmyčkové inzulínové pumpy. Momentálně se neví o nikom, kdo by se pokoušel poškodit někoho tím, že by se pokoušel o útok na zařízení pro léčbu diabetu. Nicméně je několik způsobů, jak se chránit před takovými riziky:

1.  V nastavení pumpy omezte jak maximální povolený bolus, tak maximální dočasný bazál na množství, o kterém se domníváte, že je bezpečné. Jedná se o tvrdé limity, o nichž věříme, že je nemůže žádný hacker obejít.

2.  Nastavte si CGM alarmy pro vysoké i nízké hodnoty.

3.  Sledujte vaše dávkování inzulínu online. Uživatelé Nightscoutu mohou nastavit další výstrahy pro širokou škálu podmínek, včetně podmínek, které nastanou mnohem pravděpodobněji než zlovolný útok. Kromě vysokých a nízkých hodnot může Nightscout zobrazovat diagnostické údaje užitečné pro ověření, že pumpa pracuje podle potřeby, včetně aktuální hodnoty aktivního inzulínu, dočasnou historii bazálních dávek, historii bolusů pumpy. Také může být nakonfigurován tak, aby aktivně upozorňoval na nežádoucí podmínky, jako předpokládané vysoké či nízké glykémie, nízký stav inzulínu nebo vybitou baterii pumpy.

Pokud by došlo k útoku hackera na vaši inzulínovou pumpu, tato strategie může býrazně zmírnit rizika. Každý potenciální uživatel **AAPS** musí zvážit rizika spojená s používáním **AAPS**versus rizika používání jiného systému.

#### Bezpečnostní hlediska týkající se příliš rychlého zlepšení kontroly glykémie

Rychlé snížení HbA1c a zlepšení kontroly glukózy v krvi zní přitažlivě. Nicméně _příliš rychlé_ snížení průměrné úrovně glykémie nastartiváním uzavřené smyčky může způsobit trvalá poškození, včetně poškození očí nebo bolestivé neuropatie, které se nikdy nezbavíte. Těmto rizikům je možné snadno předejít pomalejším snižováním úrovní. Pokud v současné době máte zvýšenou hodnotu HbA1c a začínáte se systémem AAPS (nebo jiným systémem uzavřené smyčky), prodiskutujte prosím toto riziko s Vaším lékařem před zahájením, a dohodněte se na časovém horizontu s postupným bezpečným snižováním cílů glykémie. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](#preparing-safety-first).

#### Zdravotní bezpečnost zařízení, spotřebního materiálu a jiných léků

V systému umělé slinivky používejte otestované a plně funkční inzulínové pumpy a senzory, schválené FDA nebo CE. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. Pokud najdete nebo získáte rozbité, upravené nebo doma vyrobené inzulínové pumpy nebo CGM, NEPOUŽÍVEJTE JE pro vytvoření systému AndroidAPS.

Používejte originálnípříslušenství, jako zásobníky, kanyly a inzulíny schválené výrobcem vaší pumpy a CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.

Při používání **AAPS** neberte SGLT-2 inhibitory (glifloziny), protože nepředvídatelně snižují hladinu cukru v krvi. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Jak přistupovat k diskusi o AAPS s mojí diabetologickou ambulancí?

Uživatelé jsou vyzýváni, aby se svými lékaři hovořili o jejich záměru používat **AAPS**. Pokud hodláte použít **AAPS** (nebo jakoukoliv jinou DIY smyčku), nebojte se vést upřímnou konverzaci s vaším diabetickým týmem. Prvořadá je transparentnost a důvěra mezi pacientem a lékařem.

### Navrhovaný přístup:
Zahajte konverzaci s vašimi lékaři, abyste mohli určit jejich znalosti a postoj k technologiím jako CGM, pumpy, hybridní a komerční smyčky. Váš lékař / endokrinolog by si měl být vědom základní technologie a měl by být ochoten s vámi diskutovat o nejnovějších pokrocích s komerčními smyčkami a produkty dostupnými ve vašem regionu.

#### Místní předpoklady

Zjistěte názor vašeho lékaře / endokrinologa na DIY smyčku _vs_ komerční smyčky a vyhodnoďte jejich znalosti v této oblasti. Jsou obeznámeni s **AAPS** a mohou s vámi sdílet nějaké užitečné zkušenosti s prací s pacienty s DIY smyčkou?

Zeptejte se, jestli váš lékař má pod svou péčí nějaké pacienty, kteří již používají DIY smyčku. Z důvodu důvěrnosti vám lékaři nemohou předat údaje jiného pacienta, aniž by získali jeho souhlas. Pokud však chcete a rozumíte si s některým z lékařů, **můžete** je požádat, aby předaly **vaše** kontaktní údaje stávajícímu pacientovi s DIY smyčkou a požádat ho, aby vás kontaktoval k diskutuzi o DIY smyčce. Kliničtí lékaři nejsou povinni to udělat, ale někteří z nich rádi vyhoví, protože si uvědomují význam vzájemné podpory při řízení diabetu I. typu. Také může být užitečné se setkat s místními uživateli DIY smyčky. To je samozřejmě na vás, není to zcela nezbytné.

#### Národní a mezinárodní předpoklady

Pokud váš lékařský tým nepodporuje smyčku s **AAPS**, mohou pomoci následující body k diskuzi:

a) Systém **AAPS** byl navržen pacienty a jejich pečovateli. Byl koneckonců navržen s ohledem na bezpečnost, ale také na základě důkladných zkušeností pacientů. V současné době je kolem **10,000** uživatelů AAPS po celém světě. Je proto pravděpodobné, že mezi pacienty vašeho lékažského zařízení jsou uživatelé DIY smyčky (ať už o tom lékaři vědí nebo ne).

b) Nedávno zveřejněné pokyny v předním mezinárodním lékařském periodiku [Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ potvrdily, že DIY symčky jsou **bezpečné** a **účinné při zlepšování kontroly diabetu** včetně času v rozsahu. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping community.

c) Rozběh používání **AAPS** vyžaduje _zvolna postupovat_ od "otevřené" smyčky, přes vypnutí při nízké glykémii až po hybridní "uzavřenou" smyčku, a to postupným plněním množství cílů. Existuje tedy strukturovaný postup vyžadující, aby uživatel prokázal úroveň své odborné způsobilosti v každém stadiu a doladil své základní nastavení (bazály, ISF a ICR) dříve, než může smyčku "uzavřít".

d) Technical support is available to you from the DIY community through GitHub, Discord and Facebook closed groups.

e) Na schůzkách s lékaři budete moci poskytnout **jak informace o glykémiích, tak informace o smyčce/pumpě** formou kombinovaných výkazů (prostřednictvím Nightscoutu nebo Tidepoolu), buď vytištěných nebo online na obrazovce notebooku/tabletu. Urychlení procesu poskytování dat o glykémii a inzulínu umožní efektivnější využití času vašeho lékaře k přezkoumání reportů a pomůže při diskuzi o vašich pokrocích.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Podpora pro smyčku DIY ze strany ostatních lékařů

Článek zveřejněný v [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (autor Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, a spoluautor Dr. Sufyan Hussain, konzultant diabetologie a čestný starší přednášející na King’s v Londýně) poskytuje:

a) **Ujištění** pro profesionály, že DIY / open source systémy umělé slinivky jsou "bezpečnou a spolehlivou možností léčby" cukrovky I. typu a poskytuje pokyny k doporučením, diskusím, podpoře a dokumentaci;

b) **Uznání**, že open-source systémy automatického dávkování inzulínu (Automated Insunil Delivery, "AID") mohou zvýšit hodnotu času v rozsahu (TIR) a současně snížit variabilitu koncentrace glukózy v krvi a počet hypo a hyperglykemických událostí v různých skupinách z hlediska věku, pohlaví i komunity;

c) **Doporučení**, aby zdravotničtí pracovníci **podporovali** pacienty s cukrovkou typu 1 nebo jejich pečovatele, kteří se rozhodli řídit dávkování inzulínu open-source systémem typu AID;

d) doporučení, aby se zdravotničtí pracovníci pokusili dozvědět se o všech možnostech léčby, které by mohly být ku prospěchu pacientů, včetně dostupných otevřených systémů AID.  Nemají-li zdravotničtí pracovníci zdroje na vzdělávání nebo mají obavy z právní či regulační problematiky, měli by zvážit **spolupráci nebo propojení s ostatními zdravotnickými pracovníky**, kteří tak činí;

e) Důraz na to, aby všichni uživatelé CGM měli vždy v reálném čase otevřený přístup ke **svým zdravotním údajům**;

f) Zdůrazňuje, že tyto systémy s otevřeným zdrojovým kódem neprošly stejnými regulačními hodnoceními jako komerčně dostupné lékařské technologie, a neexistuje žádná komerční technická podpora. Nicméně je k dispozici **rozsáhlá komunitní podpora**;

g) Doporučení k aktualizaci **regulačních a právních rámců** takovým způsobem, aby byly jasné podmínky ohledně etiky a účinného zacházení s těmito open-source systémy.

Další dokument v [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) také upozorňuje na „pokyny k souhlasu“ General Medical Council Spojeného království, kladou velký důraz na společné rozhodování lékaře a pacienta. Lékař by měl vysvětlit potenciální přínosy, rizika, zátěž a vedlejší účinky na DIY APS a může doporučit konkrétní možnosti bez tlaku na pacienta.

V konečném důsledku je na pacientovi, aby tyto faktory zvážil, spolu s případnými neklinickými otázkami, které se jich týkají, a rozhodnout, kterou z možností léčby, pokud nějakou, přijmout.

Pokud lékař v nemocnici zjistí, že jejich pacient pracuje se systémem DIY, není osvobozen od povinnosti sledovat pacienta pouze proto, že nepředepisal konkrétní technologii, kterou pacient používá; kliničtí lékaři musí i nadále sledovat pacienty.

Lékaři (alespoň ve Spojeném království) nemají zakázáno předepisovat nelicencované léčivé přípravky a mohou postupovat podle svého uvážení. Proto by měli využít svého lékařského úsudku k rozhodnutí, zda je DIY APS vhodná pro konkrétního pacienta, a diskutovat s pacientem o možných výhodách a nevýhodách.

#### Výše uvedené články, další užitečné odkazy a prohlášení:

1. Open-source automatizované dávkování inzulinu: mezinárodní prohlášení o shodě a praktické pokyny pro zdravotnické odborníky [_Lancet Diabetes Endocrinol_(2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico výzkum Open-Source systému umělé slinivky na Android platformě: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. DIY „bionická slinivka“ mění léčbu diabetu - co bude dál? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Předepisování neschválených zdravotnických prostředků? Případ DIY systému umělé slinivky [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Prohlášení Berlínského institutu pro zdravotnictví, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself automatické dávkování inzulínu: Uživatelský manuál pro zdravotníky (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Nizozemsko (EN/NL) - pro lékaře - [jak pomáhat lidem na open source systémech automatizovaného dávkování inzulínu](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. První použití Open-source automatizovaného dávkování inzulínu AndroidAPS ve scénáři Plně uzavřené smyčky: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Děti předškolního a školního věku využívají přechod z pumpy propojené se senzorem na hybridní uzavřenou smyčku AndroidAPS: retrospektivní analýza [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Výsledky projektu OPEN financovaného Evropskou unií Výstupy dlkazů o pacientech s novátorskou DIY technologií umělé slinivky (https://www.open-diabetes.eu/publications)



## Proč nemohu prostě stáhnout AAPS a začít ho rovnou používat?

**AAPS** není možné stáhnout z Google Play - z legislativních důvodů si ho musíte sami sestavit ze zdrojového kódu. **AAPS** není licencované, což znamená, že nemá souhlas žádného regulačního orgánu v žádné zemi. Má se za to, že využitím **AAPS** uživatel sám na sobě provádí lékařský experiment na své vlastní riziko.

Vytvoření systému vyžaduje trpělivost, odhodlání a postupný rozvoj technických znalostí. Veškeré informace a podporu lze nalézt v těchto dokumentech, jinde na internetu nebo od ostatních, kteří tím již prošli. Odhaduje se, že přes 10 000 uživatelů celosvětově úspěšně dokončilo sestavení aplikace a v současné době **AAPS** používá.

Vývojáři **AAPS** berou bezpečnost velmi vážně a chtějí, aby ostatní měli s používáním **AAPS** jen ty nejlepší zkušenosti. Proto je nezbytné, aby každý uživatel (nebo pečovatel, je-li uživatelem dítě):

- sestavil **AAPS** osobně a propracoval se **cíli**, aby měl přiměřeně dobré individuální nastavení a rozumněl základům fungování AAPS ve chvíli, kdy "uzavře smyčku";

- zálohoval svá systémová nastavení prostřednictvím exportu a uložil si důležité soubory (např. keystore a konfigurační soubor .json) na bezpečném místě, aby mohl v případě potřeby rychle provést novou instalaci;

- aktualizoval na novou master verzi, jakmile je k dispozici;

- a obsluhoval a dohlížel na systém, aby měl jistotu, že správně funguje.

## Jaké jsou možnosti propojení AAPS systému?

**Obrázek 3 (níže)** ukazuje příklad **AAPS** systému uživatele, s jehož systémem nemusí pracovat žádní pečovatelé. Lze integrovat i další open-source software a platformy, které nejsou zobrazeny.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Obrázek 4 (níže)** ukazuje všechny možnosti **AAPS** systému pro uživatele se zapojením pečovatelů, kteří potřebují vzdálený dohled a úpravy systému (jako v případě dětského pacienta s diabetem I. typu). Lze integrovat i další open-source software a platformy, které nejsou zobrazeny.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Jak se AAPS neustále vyvýjí a zlepšuje?

Většina uživatelů **AAPS** využívá plně otestovanou **master** verzi aplikace, která byla před zveřejněním prověřena za účelem odstranění chyb a problémů. V zákulisí mezitím vývojáři pracují na nových vylepšeních, která testují na vývojových (**dev**) verzích **AAPS** s komunitou uživatelů, kteří co nejrychleji hlásí nalezené chyby. Pokud vylepšení fungují dobře, jsou uvolněny v nové "master" verzi **AAPS**. Každá nová verze je oznámena ve Facebook skupině, aby se o ní běžní uživatelé **AAPS** dozvěděli a mohli na ní přejít.

Někteří zkušení a sebevědomí uživatelé systému **AAPS** zkoušejí nově se objevující technologie s vývojovými verzemi **AAPS** aplikace, což pro méně dobrodružné uživatele může být zajímavé čtení bez nutnosti provádět takové pokusy sami! Lidé mají sklon sdílet informace o těchto experimentech i na Facebookové skupině.

Více o těchto pokusech a diskuze o nových technologiích najdete zde:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Kdo může mít užitek z AAPS?

| Typy uživatelů                           |
| ---------------------------------------- |
| ✔️diabetik I. typu                       |
| ✔️pečovatel nebo rodič diabetika I. typu |
| ✔️slepec s diabetem I. typu              |
| ✔️lékaři a zdravotnický personál         |

Výše uvedená tabulka předpokládá, že uživatel má přístup k nepřetržitým hodnotám glykémie (senzor) a k inzulínové pumpě.

Veškerá data z **AAPS** mohou být k dispozici zdravotnickým pracovníkům prostřednictvím platforem pro jejich sdílení, včetně NightScout, který umožňuje zaznamenávat a v reálném čase sledovat CGM data, dávkování inzulínu, záznamenané sacharidy, předpovědi a nastavení. Záznamy z Nightscoutu obsahují také denní a týdenní reporty, které mohou zdravotnickým pracovníkům pomoci při diskusích s diabetiky I. typu přesnějšími údaji o tom, jak mají glykémii pod kontrolou a o jejich návycích.

### Dostupnost pro uživatele AAPS, kteří jsou částečně nebo zcela nevidomí

#### Každodenní použití AAPS:
AAPS mohou používat nevidomí lidé. Na zařízeních s Androidem je v operačním systému program TalkBack. Umožňuje orientovat se na obrazovce pomocí hlasového výstupu, který je součastí operačního systému. Pomocí TalkBack můžete ovládat váš mobilní telefon i AAPS, aniž byste potřebovali vidět.

#### Sestavení aplikace AAPS:
Jako uživatel budete vytvářet aplikaci AAPS v Android Studio. Mnoho lidí používá k tomuto účelu Microsoft Windows, kde je aplikace Screenreader, podobná jako TalkBack na Android. Vzhledem k tomu, že Android Studio je Java aplikace, musí být v Ovládacím panelu povolena komponenta „Java Access Bridge“. V opačném případě nebude v Androidu Studiu mluvit čtečka obrazovky.

Jak to uděláte, záleží na vašem operačním systému, jsou popsány dvě následující metody:

1) V nabídce Start Windows zadejte do vyhledávacího pole "Ovládací panel", otevřete stisknutím Enter. Otevře se okno "Všechny položky ovládacího panelu".

Otevřete "Centrum usnadnění přístupu".

Pak otevřete „Použít počítač bez obrazovky“.

Pod "Nechat si text číst nahlas" vyberte "Zapnout program předčítání" a "Zapnout audio obrazovku", a klikněte na OK.

nebo:

2) V nabídce Start Windows zadejte do vyhledávacího pole "Ovládací panel", otevřete stisknutím Enter. Otevře se okno "Všechny položky ovládacího panelu".

Stisknutím písmene C se dostanete do "Centra usnadnění přístupu", otevřete stisknutím Enter.

Pak otevřete „Použít počítač bez obrazovky“.

V dolní části najdete zaškrtávací políčko „Povolit Java Access Bridge“, vyberte jej.

Hotovo, zavřete okno! Čtečka obrazovky by nyní měla fungovat.



## Jaké výhody získám použitím AAPS?

Pokud investujete potřebný čas, **AAPS** může vést k:

- zmírnění stresu a zátěže spojené se zvládáním diabetu I. typu;

- snížení počtu všedních rozhodnutí, která jsou potřebná u cukrovky I. typu;

- snížení potřeby zvládání hypoglykémií a omezení případů hyperglykémií díky individuálnímu a dynamickému dávkování inzulínu založenému na aktuálních datech;

- rozšiřování znalostí o řízení dávkování inzulínu a sebedůvěra pro lepší vyladění nastavení;

- schopnost vytvářet automatická nastavení (**automatizace**) šitá na míru vašemu životnímu stylu;

- zlepšení kvality spánku a celkové snížení četnosti zásahů v nočních hodinách;

- vzdálený dohled a dávkování inzulínu pro pečovatele o pacienty s cukrovkou I. typu;

- zefektivnění fungování vašeho přenosného vybavení pro zvládání diabetu (CGM senzor a inzulínová pumpa) jejich doplněním o Android telefon řízený **AAPS**.


**AAPS** může nakonec umožnit jednotlivcům, aby lépe spravovali svou cukrovku, což povede ke stabilním hladinám krevního cukru a lepším dlouhodobým zdravotním výsledkům.

Chcete se dozvědět, jak začít používat AAPS? Take a look at the [preparing](../Getting-Started/PreparingForAaps.md) section.
