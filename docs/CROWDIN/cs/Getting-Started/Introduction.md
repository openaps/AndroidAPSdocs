# Úvod do APS a AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Co je "Systém umělé slinivky" (Artificial Pancreas System; APS)?

Lidská slinivka dělá mnoho věcí kromě regulace glykémie. Nicméně termín **„Systém umělé slinivky“ (APS)** obvykle odkazuje na systém, který pracuje na tom, aby automaticky udržoval glykémii na zdravé úrovni.

Nejzákladnější způsob, jak toho dosahuje, je pomocí zjišťování **glykémie**, využití těchto hodnot k provedení **výpočtů** a následné dodání správné (odhadované) dávky **inzulínu** do těla pacienta. Výpočet se opakuje vždy po několika minutách 24 hodin denně, 7 dní v týdnu. Využívá **alarmy** a **upozornění** k informování uživatele, pokud je třeba jeho zásahu nebo pozornosti. Takový systém se obvykle skládá ze **senzoru glykémie**, **inzulínové pumpy** a **řídicí jednotky**, která provádí výpočty. V **AAPS** a dalších open-source systémech je řídicí jednotkou aplikace v telefonu. Ve většině komerčních systémů je to software přímo v pumpě a aplikace v telefonu slouží hlavně k zobrazení a ovládání.

Pokud chcete vědět, jak se systémy uzavřené smyčky vyvíjely a jak fungují, je dobrým začátkem tento přehledový článek z roku 2022. Mějte na paměti, že vznikl dříve než většina dnes dostupných systémů, takže nepopisuje, co je nyní na trhu:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Takzvané „dvouhormonální“ systémy podávají spolu s inzulínem i glukagon. Cílem je předejít těžkým hypoglykémiím a umožnit ještě přesnější kontrolu glykémie. První systém tohoto typu byl schválen v Evropě, ale dodává se jen v rámci studií a projektů. Další jsou stále ve vývoji. Zatím se žádný z nich běžně neprodává.

Systém umělé slinivky lze považovat za [“autopilota pro váš diabetes”](https://www.artificialpancreasbook.com/). Co to znamená?

V letadle autopilot nevykonává všechnu práci lidského pilota, pilot nemůže celý let prospat. Autopilot pomáhá pilotovi při práci. Zbaví ho nutnosti neustále řídit letadlo, takže se pilot může soustředit na celkový dohled. Autopilot přijímá signály z různých senzorů, počítač vyhodnotí data spolu s pokyny pilota a pak provede potřebné úpravy. Pokud je něco v nepořádku, upozorní pilota. Pilot se už nemusí neustále starat o rozhodování. Toto přirovnání lze použít i na **AAPS**.

![obrázek](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Co znamená hybridní uzavřená smyčka?

Nejlepším řešením cukrovky I. typu by byla "léčba příčiny" (pravděpodobně transplantace slinivkových buněk chráněných před imunitním systémem). Než se komunita lidí s diabetem 1. typu (T1D) dočká, je „plně uzavřená smyčka“ umělé slinivky pravděpodobně to nejlepší, co je k dispozici. Takový systém nevyžaduje žádné vstupy uživatele (např. bolus k jídlu nebo hlášení aktivity), s dobrými výsledky regulace glykémie. Téměř každý systém v běžném použití je „hybridní“ uzavřená smyčka, protože kombinuje automatickou technologii a zásahy uživatele. První systémy s plně uzavřenou smyčkou byly v Evropě schváleny v roce 2026, ale zatím žádný není široce dostupný.

## Jak a proč využívání smyčky začalo?

Vývoj komerční technologie pro pacienty s diabetem I. typu (T1D) je velmi pomalý. V roce 2013 bylo komunitou T1D pacientů založeno hnutí #WeAreNotWaiting. Aby dosáhli zlepšení kontroly glykémie, bezpečnosti a kvality života, vyvinuli sami systémy s využitím existujících schválených technologií (inzulínové pumpy a senzory). Říká se jim systémy OS-AID (Open-Source Automated Insulin Delivery, open-source automatické dávkování inzulínu, dříve systémy DIY), protože nejsou oficiálně schválené zdravotnickými úřady (FDA, NHS atd.). Existují čtyři hlavní systémy OS-AID: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [Trio](https://triodocs.org).

Skvělý způsob, jak pochopit základy smyčky OS-AID, je přečíst si knihu Dany Lewis „Automated Insulin Delivery“. Můžete si jí [zde](https://www.artificialpancreasbook.com/) zdarma stáhnout (nebo si můžete zakoupit tištěné vydání). Pokud chcete vědět více o [OpenAPS](https://openaps.org/what-is-openaps/), ze kterého se vyvinul **AAPS**, pak [webové stránky OpenAPS](https://openaps.org/what-is-openaps/) představují skvělý zdroj.

Na trh bylo uvedeno také několik komerčních systémů hybridní uzavřené smyčky. Ty se od systémů OS-AID velmi liší, hlavně proto, že mnohé z nich obsahují „samoučící algoritmus“, který upravuje množství podaného inzulínu podle vaší potřeby inzulínu v předchozích dnech. Mnoho lidí z komunity OS-AID už komerční systémy vyzkoušelo a porovnalo je se svým systémem OS-AID. Více o tom, jak se jednotlivé systémy liší, zjistíte, když se zeptáte ve facebookových skupinách těchto systémů, ve [facebookové skupině AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) nebo na [Discordu](https://discord.com/invite/4fQUWHZ4Mw).

## Co je Android APS (AAPS)?

![obrázek](../images/basic-outline-of-AAPS.png)

**Obrázek 1**. Základní schéma Android APS, AAPS.

Android APS (**AAPS**) je systém hybridní uzavřené smyčky nebo také systém umělé slinivky (APS). Výpočty dávek inzulínu provádí pomocí ověřených algoritmů [OpenAPS](https://openaps.org/) (souboru pravidel), které vyvinula komunita T1D #WeAreNotWaiting.

Protože OpenAPS funguje jen s některými staršími inzulínovými pumpami, vznikl v roce 2016 **AAPS** (který lze použít s více typy inzulínových pump) pro člena rodiny s diabetem 1. typu. Od těchto prvních dnů byl **AAPS** neustále vyvíjen a vylepšován týmem dobrovolných aplikačních vývojářů a dalšími nadšenci, kteří jsou ve spojení se světem diabetu I. typu. Dnes **AAPS** používá mnoho tisíc lidí po celém světě. Je to velmi přizpůsobitelný a všestranný systém. Protože je open-source, snadno spolupracuje i s mnoha dalšími open-source programy a platformami pro diabetes. Základní komponenty současné verze **AAPS** systému jsou znázorněny na **obrázku 1** výše.



## Jaké jsou základní komponenty AAPS?

"Mozkem" AAPS je **aplikace**, kterou si sami sestavíte. Sestavením vás provede manuál, krok za krokem. Potom **aplikaci AAPS** nainstalujete do [kompatibilního](../Getting-Started/Phones.md) **chytrého telefonu s Androidem** (**1**). Mnoho uživatelů upřednostňuje instalaci smyčky na vyhrazeném telefonu, místo na jejich hlavním. Takže nemusíte Android telefon používat na všechno ostatní, stačí pouze na AAPS smyčku.

Kromě **AAPS** budete do vašeho **chytrého telefonu s Androidem** muset také nainstalovat další aplikaci. Tato [další aplikace](../Getting-Started/CompatiblesCgms.md) přijímá data o glykémii ze senzoru (**2**) přes Bluetooth a pak je v telefonu předává **aplikaci AAPS**.

**AAPS aplikace** využívá rozhodovací proces (**algoritmus**) z OpenAPS. Nováčci začínají se základním **oref0**  algoritmem, ale jak postupují s AAPS, mohou přepnout na novější algoritmus  **oref1**. Jestli budete využívat algoritmus oref0 nebo oref1 závisí na tom, který bude nejlépe vyhovovat vaší situaci.  V obou případech vezme algoritmus do úvahy množství faktorů a provede rychlé kalkulace pokaždé, když přijdou nová měření ze senzoru. Algoritmus pak přes Bluetooth posílá inzulínové pumpě (**3**) pokyny, kolik inzulínu má podat. Všechny informace lze posílat přes mobilní data nebo Wi-Fi na internet (**4**). Pokud je to třeba, mohou být tyto informace sdíleny se sledujícími uživateli a/nebo shromažďovány k analýze. Volitelně můžete s telefonem spárovat také [chytré hodinky](../Getting-Started/Watches.md) (**5**). Na nich rychle uvidíte svá data a s některými hodinkami můžete do **AAPS** posílat i základní příkazy.

## Jaké má systém AAPS výhody?

OpenAPS algoritmus, který **AAPS** využívá, kontroluje bez nutnosti zásahů uživatele glykémii podle uživatelem zadaných parametrů (především bazálních dávek, citlivosti na inzulín, inzulínosacharidového poměru, délky aktivity inzulínu atd.) a každých 5 minut reaguje na nově načtené údaje ze senzoru.

Mezi uváděné výhody **AAPS** patří mnoho možností jemného nastavení, **Automatizace** a větší průhlednost systému pro pacienta nebo pečovatele. To může vést k lepší kontrole vašeho diabetu (nebo diabetu člověka, o kterého pečujete), a tím i k lepší kvalitě života a většímu klidu.

Pokud investujete potřebný čas, **AAPS** může vést k:

- zmírnění stresu a zátěže spojené se zvládáním diabetu I. typu;

- snížení počtu všedních rozhodnutí, která jsou potřebná u cukrovky I. typu;

- snížení potřeby zvládání hypoglykémií a omezení případů hyperglykémií díky individuálnímu a dynamickému dávkování inzulínu založenému na aktuálních datech;

- rozšiřování znalostí o řízení dávkování inzulínu a sebedůvěra pro lepší vyladění nastavení;

- schopnost vytvářet automatická nastavení (**automatizace**) šitá na míru vašemu životnímu stylu;

- zlepšení kvality spánku a celkové snížení četnosti zásahů v nočních hodinách;

- vzdálený dohled a dávkování inzulínu pro pečovatele o pacienty s cukrovkou I. typu;

- zefektivnění fungování vašeho přenosného vybavení pro zvládání diabetu (CGM senzor a inzulínová pumpa) jejich doplněním o Android telefon řízený **AAPS**.


**AAPS** může nakonec umožnit jednotlivcům, aby lépe spravovali svou cukrovku, což povede ke stabilní glykémii a lepším dlouhodobým zdravotním výsledkům.

### Konkrétní výhody zahrnují:

#### 1) Zabudovaná bezpečnost
Informace o bezpečnostních vlastnostech algoritmů, známých jako oref0 a oref1, najdete [zde](https://openaps.org/reference-design/). Uživatel má kontrolu nad vlastními bezpečnostními omezeními.

#### 2) Flexibilita hardwaru

**AAPS** funguje s mnoha inzulínovými pumpami a senzory a nabízí flexibilitu, když se váš život mění. Například pokud se u vás rozvine alergie na lepidlo náplastí senzorů Dexcom, můžete místo nich začít používat senzory Libre. Uživatelé nemusí aplikaci **AAPS** znovu sestavovat ani přeinstalovat. Při změně hardwaru stačí v nabídce **Konfigurace** vybrat jinou pumpu nebo zdroj glykémie. **AAPS** nezávisí na konkrétních ovladačích pump a obsahuje také „virtuální pumpu“, takže uživatelé mohou bezpečně zkoušet, než systém použijí na sobě.

#### 3) Široké možnosti přizpůsobení s velkým rozsahem parametrů

Uživatelé mohou snadno přidat nebo odebrat moduly nebo funkce. **AAPS** může být použit v režimu otevřené i uzavřené smyčky. Zde jsou některé příklady možností systému **AAPS**:

 a) Můžete nastavit nižší cílovou **glykémii** 30 minut před jídlem; cíl lze nastavit až na 4,0 mmol/l (72 mg/dl).

 b) Pokud vám resistence na inzulín způsobuje vysokou hladinu cukru v krvi, **AAPS** vám umožní nastavit **automatizační** pravidlo, které při překročení glykémie 8 mmol/L (144 mg/dL) přepne na (například) 120% profil (výsledkem je 20% nárůst bazálních dávek a posílení dalších faktorů oproti parametrům vašeho obvyklého **profilu**). Automatizační pravidlo se po nastaveném čase vypne. Pravidlo automatizace může být nastaveno ke spuštění pouze v některé dny v týdnu, v určitou denní dobu nebo dokonce na určitých místech.

 c) Pokud vaše dítě začne bez předchozího upozornění skákat na trampolíně, **AAPS** vám umožní zastavit dávkování inzulínu na určitou dobu přímo přes telefon.

 d) Po opětovném připojení inzulínové pumpy, která byla odpojena kvůli plavání, **AAPS** spočítá množství bazálního inzulínu vynechané v průběhu odpojení a opatrně ho s ohledem na vaši aktuální glykémii dopošle. Jakýkoliv nepotřebný inzulín může být přepsán pouhým zrušením zmeškaného bazálu.

 e) **AAPS** je vybaven možností nastavení odlišných profilů pro různé situace, se snadným přepínáním mezi jednotlivými profily. Například funkce, které umožňují algoritmu rychleji snížit zvýšenou glykémii (jako jsou super mikro bolusy („**SMB**“), neoznámená jídla („**UAM**“)), mohou být nastavené tak, aby fungovaly pouze přes den, pokud se obáváte nočních hypoglykémií.

To vše jsou příklady, celá škála funkcí poskytuje velkou flexibilitu pro každodenní život, včetně sportu, nemoci, hormonálních cyklů _atd._. Konečně, je to jen na uživateli aby se rozhodl, jak chce tuto volnost využít a proto neexistuje jediná automatizace pro všechny.

#### 4) Vzdálený dohled
Je několik možných kanálů pro dohled (Sugarmate, Dexcom Follow, xDrip, Android Auto _atd._). Hodí se pro rodiče/pečovatele a pro dospělé v určitých situacích (spánek/řízení auta), kteří potřebují nastavitelné výstrahy. V některých aplikacích (xDrip) můžete také alarmy úplně vypnout. To se hodí, když nový senzor „nabíhá“ nebo se ustaluje a zatím s ním nechcete smyčku používat.

#### 5) Vzdálené ovládání
Velkou výhodou **AAPS** oproti komerčním systémům je, že sledující mohou do systému **AAPS** posílat mnoho různých příkazů, a to pomocí ověřených textových zpráv (SMS) nebo spárované aplikace **AAPSClient**. Tuto funkci hodně používají rodiče dětí s diabetem 1. typu, které používají **AAPS**.

Funkce vzdáleného ovládání mohou být velmi užitečné: například na hřišti, když chcete ze svého telefonu podat předstihový bolus na svačinu a vaše dítě si zrovna hraje. Systém lze také sledovat z chytrých hodinek (_např._ Garmin) nebo z nich posílat základní příkazy (_např._ z hodinek s Wear OS, jako jsou Samsung Galaxy Watch).

#### 6) Žádná komerční omezení díky otevřeným aplikačním rozhraním
Kromě použití přístupu open-source, který umožňuje zdrojový kód **AAPS** kdykoli zobrazit, základní princip v poskytování otevřeného progamovacího prostředí je dát příležitost ostatním vývojářům přispět novými nápady a možnostmi. **AAPS** je úzce integrován s Nightscoutem. To urychluje vývoj a umožňuje uživatelům přidávat nové funkce, aby se život s diabetem stal ještě pohodlnější. Dobrými příklady takového propojení jsou [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) atd. Probíhá dialog mezi vývojáři s otevřeným zdrojovým kódem a těmi, kteří vyvíjejí komerčně dostupné systémy. Mnoho inovací OS-AID postupně přebírají komerční systémy. Tam je vývoj pochopitelně pomalejší, mimo jiné proto, že rozhraní mezi systémy různých firem (pumpy, aplikace, senzory _atd._) se musí pečlivě vyjednat a licencovat. To může také zpomalit inovace, které přináší výhody pro pacienta (nebo pro malou subpopulaci pacientů se specifickými potřebami), ale nevytvářejí žádný významný zisk.

#### 7) Podrobné rozhraní aplikace
S **AAPS** je snadné sledovat věci jako: množství inzulínu v pumpě, stáří kanyly a senzoru, stáří baterie v pumpě, množství inzulínu na palubě _atd._. Mnoho úkonů lze udělat v aplikaci **AAPS** (plnění pumpy, odpojení pumpy _atd._) místo přímo na pumpě. Pumpa tak může zůstat v kapse nebo na opasku (vašem nebo člověka, o kterého pečujete).

#### 8) Dostupnost a cena
**AAPS** dává lidem, kteří si nemohou dovolit platit léčbu sami nebo nemají úhradu či pojištění, přístup k systému hybridní uzavřené smyčky, který je svou koncepcí o roky napřed před komerčními systémy. K nastavení **AAPS** nyní potřebujete reportovací server (Nightscout nebo Tidepool), i když pro každodenní chod smyčky **AAPS** není nutný. Mnoho lidí dál používá Nightscout ke sběru dat a ke vzdálenému dohledu. Ačkoli je **AAPS** sám o sobě zdarma, založení Nightscoutu v některé z dostupných platforem může být zpoplatněné (0€ - 12€) v závislosti na vyžadované úrovni podpory (viz. srovnávací tabulka) a také zda-li a jak chcete Nightscout po nastavení dále využívat. **AAPS** funguje s velkým množstvím cenově dostupných (přibližně od 150 €) [telefonů s Androidem](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Pro různé země a jazyky jsou k dispozici různé verze a AAPS mohou používat i lidé, kteří jsou [nevidomí](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Podpora
Žádný systém automatického dávkování inzulínu není dokonalý. Komerční i open-source systémy mají společných mnoho běžných problémů jak při komunikaci, tak dočasných poruchách hardwaru. Podporu najdete v komunitě uživatelů AAPS na Facebooku, Discordu a GitHubu, kteří **AAPS** navrhli, vyvinuli a nyní ho používají po celém světě. Také na Facebooku jsou dostupné podpůrné skupiny a pomoc od klinických/komerčních společností pro komerční APS systémy - stojí za to diskutovat s uživateli nebo bývalými uživateli těchto systémů a získat tak jejich zpětnou vazbu o běžných problémech, kvalitě výukových materiálů a úrovni poskytované podpory.

#### 10) Předvídatelnost, průhlednost a bezpečnost
**AAPS** je průhledný, logický a předvídatelný. Díky tomu může být snazší poznat, kdy je nějaké nastavení špatně, a podle toho ho upravit. Přesně vidíte, co systém dělá a proč to dělá. Nastavením provozních limitů bude kontrola (a odpovědnost) ve vašich rukou. To může uživateli poskytnout důvěru a klidný spánek.

#### 11) Přístup k pokročilým funkcím ve vývojových (dev) verzích, včetně plně uzavřené smyčky
Tato dokumentace **AAPS** se zaměřuje na hlavní - nejstandardnější - **„master“** větev **AAPS**. Výzkum a vývoj však stále pokračuje. Zkušenější uživatelé mohou zkoušet objevovat experimentální funkce v **vývojové větvi**. Inovace v oblasti rozvoje se zaměřují na strategie pro úplnou uzavřenou smyčku (zcela bez bolusování k jídlu _apod._) a obecně se snaží o co nejpohodlnější život s diabetem 1. typu.

#### 12) Možnost sami přispět k dalším vylepšením
Diabetes typu 1 může být velmi frustrující a můžete mít pocit, že jste na to sami. Získání kontroly nad vlastní technikou pro zvládání diabetu s možností "splacení" formou pomoci ostatním, jak se postupně zlepšujete, může být velmi obohacující. Můžete se sami vzdělávat a rozvíjet, objevovat a vyhledávat překážky a dokonce přispívat k novému vývoji a dokumentaci. Cestou potkáte další lidi se stejným cílem, se kterými můžete sdílet nápady a pracovat na nich společně. Tohle je podstata #WeAreNotWaiting.

## Jaké je AAPS ve srovnání s MDI a otevřenou smyčkou?

Vícenásobné denní dávky neboli intenzifikovaný inzulínový režim (Multiple daily injections, MDI; (a) na **Obr. 2** níže) obvykle zahrnuje podávání pomalého inzulínu (_např._ Tresiba) jednou denně v kombinaci s podáváním rychlého inzulínu (_např._ Novorapid, Fiasp) v čase jídla nebo za účelem korekcí. Otevřená smyčka (b) zahrnuje využití inzulínové pumpy k podávání bazálu v nastavených dávkách rychlého inzulínu a k podávání bolusů v době jídla a ke korekcím. Základním principem smyčky je to, že aplikace využívá data o glykémii získaná ze sensoru k tomu, aby zastavila podávaní inzulínu pumpou, když predikuje nízkou glykémii, a naopak podala více inzulínu, když predikuje vysokou glykémii (c). Ačkoliv je tento princip v porovnání s reálným životem příliš zjednodušený, jeho cílem je ukázat klíčové rozdíly v přístupu ke kompenzaci. Pomocí všech těchto tří přístupů je možné dosáhnout výjimečně dobré kompenzace diabetu.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Obrázek 2** Základní přehled (a) MDI, (b) otevřená smyčka a (c) hybridní uzavřená smyčka.

## Jaké je AAPS ve srovnání s ostatními systémy smyčky?

K 25. červnu 2023 existují čtyři hlavní open-source systémy uzavřené smyčky: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [Trio](https://triodocs.org) (dříve FreeAPS X). Vlastnosti jednotlivých systémů jsou uvedeny v následující tabulce:


| Typ zařízení | Název                                                                      | [AAPS](https://wiki.aaps.app)            | [Smyčka](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)             |
| ------------ | -------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| Telefon      | Android                                                                    | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| Telefon      | iPhone                                                                     | ![nedostupné](../images/unavailable.png) | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| Rig          | miniaturní počítač (1)                                                     | ![nedostupné](../images/unavailable.png) | ![nedostupné](../images/unavailable.png)      | ![dostupné](../images/available.png)                  | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                        | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                       | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                         | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                        | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                        | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                              | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)           | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| PUMPA        | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)               | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)              | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [Starší Medtronic](../CompatiblePumps/MedtronicPump.md)                    | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![dostupné](../images/available.png)                  | ![dostupné](../images/available.png)     |
| PUMPA        | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| PUMPA        | [CareLevo](../CompatiblePumps/CareLevo.md)                                 | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| CGM          | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                      | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                 | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![dostupné](../images/available.png)                  | ![dostupné](../images/available.png)     |
| CGM          | [Libre 3/3+](../CompatibleCgms/Libre3.md)                                  | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [Libre 2/2+](../CompatibleCgms/Libre2.md)                                  | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [Libre 1](../CompatibleCgms/Libre1.md)                                     | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [Eversense](../CompatibleCgms/Eversense.md)                                | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![nedostupné](../images/unavailable.png)              | ![dostupné](../images/available.png)     |
| CGM          | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                               | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| CGM          | [Poctech](../CompatibleCgms/PocTech.md)                                    | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| CGM          | [Ottai](../CompatibleCgms/OttaiM8.md)                                      | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| CGM          | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                 | ![dostupné](../images/available.png)     | ![nedostupné](../images/unavailable.png)      | ![nedostupné](../images/unavailable.png)              | ![nedostupné](../images/unavailable.png) |
| CGM          | [Nightscout jako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md) | ![dostupné](../images/available.png)     | ![dostupné](../images/available.png)          | ![dostupné](../images/available.png)                  | ![dostupné](../images/available.png)     |

_Poznámky k tabulce:_
1. **rig** je malý počítač bez monitoru, který je snadno přenosný. Jedním z podporovaných zařízení je Intel Edison + Explorer Board a druhý Raspberry Pi + Explorer HAT nebo Adafruit RFM69HCW Bonnet. První systémy APS byly založené na tomto řešení, protože mobilní telefony nedokázaly potřebné algoritmy spouštět. Používání těchto systémů se snížilo v souvislosti s tím, jak se rozšiřovaly možnosti nastavení mobilních telefonů a telefony začaly být vybaveny velkým displejem. Intel také přestal prodávat Intel Edison. Vynikající algoritmy OpenAPS **oref0** a **oref1** jsou nyní součástí AAPS a Trio.


Mezinárodně recenzované prohlášení o shodě, včetně praktických pokynů k otevřené smyčce, bylo sepsáno zdravotnickými profesionály a publikováno v předním lékařském časopise v roce 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Určitě stojí za přečtení (také pro vaši diabetologickou ambulanci) a shrnuje hlavní technické rozdíly mezi jednotlivými open-source systémy hybridní uzavřené smyčky.

Je těžké získat „pocit“ z jakéhokoli systému aniž byste ho používali nebo mluvili s ostatními uživateli, tak se obráťte na ostatní na Facebooku/Discordu a ptejte se. Většina lidí zjistí, že **AAPS** je ve srovnání s jinými systémy hybridní uzavřené smyčky (hlavně s komerčními) velmi propracovaný a má obrovské množství nastavitelných možností a funkcí, popsaných výše. Pro některé lidi to může být na začátku trochu moc, ale není potřeba zkoumat všechny možnosti najednou. Můžete postupovat tak pomalu nebo tak rychle, jak chcete, a pomoc je k dispozici na každém kroku.


## Používá AAPS umělou inteligenci nebo nějaký samoučící algoritmus?

Současná verze **AAPS** (4.0) nemá žádné algoritmy strojového učení, víceparametrové modely odezvy na inzulín ani umělou inteligenci. Systém je jako takový otevřený a transparentní v tom, jak funguje, a může být srozumitelný nejen odborníkům, ale i lékařům a pacientům. Znamená to také, že pokud máte velmi proměnlivý rozvrh (třeba přechod ze stresujícího týdne v práci na klidnou dovolenou) a pravděpodobně budete potřebovat výrazně jiné množství inzulínu, můžete **AAPS** ihned přepnout na slabší nebo silnější upravený profil. "Učící se systém" pro vás tuto změnu udělá sám, ale bude mu pravděpodobně trvat déle, než se mu podaří dávky inzulínu přizpůsobit.

(which-system-is-right-for-me-or-my-dependent)=
## Který systém je vhodný pro mě nebo pro člověka, o kterého pečuji?

Prakticky je váš výběr systému často omezen tím, jakou pumpu už máte nebo můžete získat od vašeho poskytovatele zdravotní péče, a jaký jste si vybrali telefon (Apple nebo Android). Pokud ještě nemáte inzulínovou pumpu máte více možností výběru systému. Technologie se neustále vyvíjí, pumpy a senzory se přestávají vyrábět a objevují se nové. Většina otevřených systémů pracuje s nejdůležitějšími senzory (Libre a Dexcom) nebo přidává podporu pro nové senzory zhruba do roka od jejich uvolnění (s drobnou časovou prodlevou pro testování bezpečnosti a stability).

Většina **AAPS ** uživatelů hlásí delší čas v rozsahu, snížení HbA1c, stejně jako zlepšení kvality života díky využívání systému, který automaticky upravuje bazální dávky v průběhu spánku. A to platí pro většinu APS systémů s hybridní uzavřenou smyčkou. Někdo dává přednost velmi jednoduchému systému s malými možnostmi nastavení (pak vám může víc vyhovovat komerční systém). Jiné lidi tento nedostatek kontroly velmi frustruje (pak vám může víc vyhovovat open-source systém). Pokud máte vy (nebo člověk, o kterého pečujete) diabetes nově zjištěný, běžná cesta je nejprve si zvyknout na MDI se senzorem glykémie, pak přejít na pumpu, kterou lze použít se smyčkou, a pak přejít na **AAPS**. Někteří lidé (hlavně malé děti) ale mohou přejít rovnou na pumpu.

Je důležité poznamenat, že uživatel **AAPS** musí aktivně zkoumat a řešit problémy sám, s pomocí komunity. To je zcela odlišný způsob myšlení než při používání komerčního systému. S **AAPS** má uživatel větší kontrolu, ale také odpovědnost a musí být s tímto přístupem spokojen.

## Je bezpečné používat open source systémy jako AAPS?

### Bezpečnost AAPS systému
Jelikož žádná metoda dávkování inzulínu není bez rizika, přesněji by otázka měla znít: "Je to bezpečné ve **srovnání** s mým současným systémem dávkování inzulínu?". V **AAPS** je množství kontrol a vyvažování. Nedávný [článek](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) zkoumal použití **AAPS** v počítačové simulaci. Byl to účinný způsob, jak objektivně otestovat, jak bezpečný a účinný systém je. Obecně platí, že open-source systémy automatického dávkování inzulínu používá mnoho tisíc lidí po celém světě a jejich počet stále roste.

Jakékoliv zařízení, které používá rádiovou komunikaci, může být hacknuto, a to platí i pro nesmyčkové inzulínové pumpy. Momentálně se neví o nikom, kdo by se pokoušel poškodit někoho tím, že by se pokoušel o útok na zařízení pro léčbu diabetu. Nicméně je několik způsobů, jak se chránit před takovými riziky:

1.  V nastavení pumpy omezte jak maximální povolený bolus, tak maximální dočasný bazál na množství, o kterém se domníváte, že je bezpečné. Jedná se o tvrdé limity, o nichž věříme, že je nemůže žádný hacker obejít.

2.  Nastavte si CGM alarmy pro vysoké i nízké hodnoty.

3.  Sledujte vaše dávkování inzulínu online. Uživatelé Nightscoutu mohou nastavit další výstrahy pro širokou škálu podmínek, včetně podmínek, které nastanou mnohem pravděpodobněji než zlovolný útok. Kromě vysokých a nízkých hodnot může Nightscout zobrazovat diagnostické údaje užitečné pro ověření, že pumpa pracuje podle potřeby, včetně aktuální hodnoty aktivního inzulínu, dočasnou historii bazálních dávek, historii bolusů pumpy. Také může být nakonfigurován tak, aby aktivně upozorňoval na nežádoucí podmínky, jako předpokládané vysoké či nízké glykémie, nízký stav inzulínu nebo vybitou baterii pumpy.

Pokud by došlo k útoku hackera na vaši inzulínovou pumpu, tyto strategie by rizika výrazně zmírnily. Každý potenciální uživatel **AAPS** musí zvážit rizika spojená s používáním **AAPS** oproti rizikům používání jiného systému.

#### Bezpečnostní hlediska týkající se příliš rychlého zlepšení kontroly glykémie

Rychlé snížení HbA1c a zlepšení kontroly glukózy v krvi zní přitažlivě. Nicméně _příliš rychlé_ snížení průměrné úrovně glykémie nastartováním uzavřené smyčky může způsobit trvalá poškození, včetně poškození očí nebo bolestivé neuropatie, které se nikdy nezbavíte. Těmto rizikům je možné snadno předejít pomalejším snižováním úrovní. Pokud máte nyní zvýšené HbA1c a přecházíte na AAPS (nebo na jakýkoli jiný systém uzavřené smyčky), proberte prosím toto možné riziko před začátkem se svým lékařským týmem a domluvte se s ním na časovém plánu. Více obecných informací o tom, jak bezpečně snížit glykémii, včetně odkazů na lékařskou literaturu, najdete v části o bezpečnosti [zde](#preparing-safety-first).

#### Zdravotní bezpečnost zařízení, spotřebního materiálu a jiných léků

V systému umělé slinivky používejte otestované a plně funkční inzulínové pumpy a senzory, schválené FDA nebo CE. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. Pokud najdete nebo získáte rozbité, upravené nebo doma vyrobené inzulínové pumpy nebo přijímače CGM, NEPOUŽÍVEJTE JE pro vytvoření systému AAPS.

Používejte originální příslušenství, jako zavaděče, kanyly a zásobníky inzulínu, schválené výrobcem vaší pumpy a CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesné hodnoty CGM a chyby v dávkování inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.

Při používání **AAPS** neberte SGLT-2 inhibitory (glifloziny), protože nepředvídatelně snižují hladinu cukru v krvi. Kombinace tohoto účinku se systémem, který snižuje bazální dávky, aby zvýšil glykémii, je nebezpečná. Více podrobností najdete v hlavní [části o bezpečnosti](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Jak přistupovat k diskusi o AAPS s mojí diabetologickou ambulancí?

Uživatelé jsou vyzýváni, aby se svými lékaři hovořili o jejich záměru používat **AAPS**. Nebojte se prosím otevřeně promluvit se svým diabetologickým týmem, pokud chcete používat **AAPS** (nebo jakoukoli jinou smyčku OS-AID). Prvořadá je transparentnost a důvěra mezi pacientem a lékařem.

### Navrhovaný přístup:
Zahajte konverzaci s vašimi lékaři, abyste mohli určit jejich znalosti a postoj k technologiím jako CGM, pumpy, hybridní a komerční smyčky. Váš lékař / endokrinolog by si měl být vědom základní technologie a měl by být ochoten s vámi diskutovat o nejnovějších pokrocích s komerčními smyčkami a produkty dostupnými ve vašem regionu.

#### Místní předpoklady

Zjistěte názor svých lékařů/endokrinologů na smyčku OS-AID _ve srovnání s_ komerční smyčkou a zjistěte, kolik o této oblasti vědí. Znají **AAPS** a mohou vám sdělit nějaké užitečné zkušenosti s pacienty, kteří používají smyčku OS-AID?

Zeptejte se, zda váš tým má v péči pacienty, kteří už smyčku OS-AID používají. Z důvodu důvěrnosti vám lékaři nemohou předat údaje jiného pacienta, aniž by získali jeho souhlas. Pokud ale chcete, **můžete** je požádat, aby předali **vaše** kontaktní údaje pacientovi, který už smyčku OS-AID používá a se kterým byste si podle lékaře mohli „sednout“. Řekněte, že budete rádi, když vás tento pacient kontaktuje kvůli smyčce OS-AID. Kliničtí lékaři nejsou povinni to udělat, ale někteří z nich rádi vyhoví, protože si uvědomují význam vzájemné podpory při řízení diabetu I. typu. Může být užitečné také setkat se s přátelskými uživateli smyčky OS-AID ve vašem okolí. To je samozřejmě na vás, není to zcela nezbytné.

#### Národní a mezinárodní předpoklady

Pokud váš lékařský tým nepodporuje smyčku s **AAPS**, mohou pomoci následující body k diskuzi:

a) Systém **AAPS** byl navržen pacienty a jejich pečovateli. Byl koneckonců navržen s ohledem na bezpečnost, ale také na základě důkladných zkušeností pacientů. Po celém světě je mnoho tisíc uživatelů **AAPS**. Je tedy pravděpodobné, že mezi pacienty vaší ambulance jsou i další, kteří používají smyčku OS-AID (ať už o tom ambulance ví, nebo ne).

b) Nedávné recenzované doporučení zveřejněné v předním mezinárodním lékařském časopise [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ potvrdilo, že smyčky OS-AID jsou **bezpečné** a **účinně zlepšují kontrolu diabetu**, včetně času v rozsahu. V předních časopisech, jako je [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_, pravidelně vycházejí články o pokroku komunity smyček OS-AID.

c) Rozběh používání **AAPS** vyžaduje _zvolna postupovat_ od "otevřené" smyčky, přes vypnutí při nízké glykémii až po hybridní "uzavřenou" smyčku, a to postupným plněním množství cílů. Existuje tedy strukturovaný postup vyžadující, aby uživatel prokázal úroveň své odborné způsobilosti v každém stadiu a doladil své základní nastavení (bazály, ISF a ICR) dříve, než může smyčku "uzavřít".

d) Technickou podporu vám poskytne komunita OS-AID přes GitHub, Discord a uzavřené skupiny na Facebooku.

e) Na schůzkách s lékaři budete moci poskytnout **jak informace o glykémiích, tak informace o smyčce/pumpě** formou kombinovaných výkazů (prostřednictvím Nightscoutu nebo Tidepoolu), buď vytištěných nebo online na obrazovce notebooku/tabletu. Urychlení procesu poskytování dat o glykémii a inzulínu umožní efektivnější využití času vašeho lékaře k přezkoumání reportů a pomůže při diskuzi o vašich pokrocích.

f) Pokud váš tým stále silně nesouhlasí, dejte svému lékaři vytištěné odborné články, na které zde v textu odkazujeme, a dejte mu odkaz na část **AAPS** pro lékaře: [Pro lékaře – obecný úvod a průvodce k **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Podpora smyček OS-AID ze strany dalších lékařů

Článek zveřejněný v [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (autor Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, a spoluautor Dr. Sufyan Hussain, konzultant diabetologie a čestný starší přednášející na King’s v Londýně) poskytuje:

a) **Ujištění** pro odborníky, že systémy umělé slinivky OS-AID / open source jsou „bezpečnou a účinnou léčbou“ diabetu 1. typu, s pokyny k doporučením, rozhovorům, podpoře a dokumentaci;

b) **Uznání**, že open-source systémy automatického dávkování inzulínu (Automated Insulin Delivery, „AID“) mohou zvýšit hodnotu času v rozsahu (TIR) a současně snížit variabilitu koncentrace glukózy v krvi a počet hypo a hyperglykemických událostí v různých skupinách z hlediska věku, pohlaví i komunity;

c) **Doporučení**, aby zdravotničtí pracovníci **podporovali** pacienty s cukrovkou typu 1 nebo jejich pečovatele, kteří se rozhodli řídit dávkování inzulínu open-source systémem typu AID;

d) doporučení, aby se zdravotničtí pracovníci pokusili dozvědět se o všech možnostech léčby, které by mohly být ku prospěchu pacientů, včetně dostupných otevřených systémů AID.  Nemají-li zdravotničtí pracovníci zdroje na vzdělávání nebo mají obavy z právní či regulační problematiky, měli by zvážit **spolupráci nebo propojení s ostatními zdravotnickými pracovníky**, kteří tak činí;

e) Důraz na to, aby všichni uživatelé CGM měli vždy v reálném čase otevřený přístup ke **svým zdravotním údajům**;

f) Zdůrazňuje, že tyto systémy s otevřeným zdrojovým kódem neprošly stejnými regulačními hodnoceními jako komerčně dostupné lékařské technologie, a neexistuje žádná komerční technická podpora. Nicméně je k dispozici **rozsáhlá komunitní podpora**;

g) Doporučení k aktualizaci **regulačních a právních rámců** takovým způsobem, aby byly jasné podmínky ohledně etiky a účinného zacházení s těmito open-source systémy.

Další dokument v [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) také upozorňuje na „pokyny k souhlasu“ General Medical Council Spojeného království, kladou velký důraz na společné rozhodování lékaře a pacienta. Lékař by měl vysvětlit možné přínosy, rizika, zátěž a vedlejší účinky systému APS OS-AID a může doporučit určitou možnost, aniž by na pacienta tlačil.

V konečném důsledku je na pacientovi, aby tyto faktory zvážil, spolu s případnými neklinickými otázkami, které se ho týkají, a rozhodl, kterou z možností léčby, pokud nějakou, přijme.

Pokud lékař v ambulanci zjistí, že jeho pacient používá smyčku OS-AID, není zbaven povinnosti pacienta sledovat jen proto, že danou technologii nepředepsal; lékaři musí pacienty dál sledovat.

Lékaři (alespoň ve Spojeném království) nemají zakázáno předepisovat nelicencované léčivé přípravky a mohou postupovat podle svého uvážení. Měli by proto podle svého klinického úsudku rozhodnout, zda je systém APS OS-AID pro konkrétního pacienta vhodný, a probrat s pacientem, co považují za výhody a nevýhody.

#### Výše uvedené články, další užitečné odkazy a prohlášení:

1. Open-source automatizované dávkování inzulínu: mezinárodní prohlášení o shodě a praktické pokyny pro zdravotnické odborníky [_Lancet Diabetes Endocrinol_(2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico výzkum Open-Source systému umělé slinivky na Android platformě: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. DIY „bionická slinivka“ mění léčbu diabetu - co bude dál? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Předepisování neschválených zdravotnických prostředků? Případ DIY systému umělé slinivky [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Prohlášení Berlínského institutu pro zdravotnictví, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself automatické dávkování inzulínu: Uživatelský manuál pro zdravotníky (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Nizozemsko (EN/NL) - pro lékaře - [jak pomáhat lidem na open source systémech automatizovaného dávkování inzulínu](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. První použití Open-source automatizovaného dávkování inzulínu AndroidAPS ve scénáři Plně uzavřené smyčky: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Děti předškolního a školního věku využívají přechod z pumpy propojené se senzorem na hybridní uzavřenou smyčku AndroidAPS: retrospektivní analýza [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Výsledky projektu OPEN financovaného Evropskou unií – Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Proč nemohu prostě stáhnout AAPS a začít ho rovnou používat?

**AAPS** není možné stáhnout z Google Play - z legislativních důvodů si ho musíte sami sestavit ze zdrojového kódu. **AAPS** není licencované, což znamená, že nemá souhlas žádného regulačního orgánu v žádné zemi. Má se za to, že využitím **AAPS** uživatel sám na sobě provádí lékařský experiment na své vlastní riziko.

Vytvoření systému vyžaduje trpělivost, odhodlání a postupný rozvoj technických znalostí. Veškeré informace a podporu lze nalézt v těchto dokumentech, jinde na internetu nebo od ostatních, kteří tím již prošli. Mnoho tisíc lidí po celém světě **AAPS** úspěšně sestavilo a nyní ho používá.

Vývojáři **AAPS** berou bezpečnost velmi vážně a chtějí, aby ostatní měli s používáním **AAPS** jen ty nejlepší zkušenosti. Proto je nezbytné, aby každý uživatel (nebo pečovatel, je-li uživatelem dítě):

- sestavil **AAPS** osobně a propracoval se **cíli**, aby měl přiměřeně dobré individuální nastavení a rozuměl základům fungování AAPS ve chvíli, kdy „uzavře smyčku“;

- zálohoval svůj systém exportem a uložením důležitých souborů (jako je úložiště klíčů a soubor nastavení .json) na bezpečné místo, aby mohl v případě potřeby vše rychle znovu nastavit;

- aktualizoval na novou master verzi, jakmile je k dispozici;

- a obsluhoval a dohlížel na systém, aby měl jistotu, že správně funguje.

## Jaké jsou možnosti propojení AAPS systému?

**Obrázek 3 (níže)** ukazuje jeden příklad systému **AAPS** pro uživatele, který nepotřebuje, aby se systémem pracovali sledující. Lze integrovat i další open-source software a platformy, které nejsou zobrazeny.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Obrázek 4 (níže)** ukazuje všechny možnosti systému **AAPS** pro uživatele, který má sledující a potřebuje systém sledovat a upravovat na dálku (například dítě s diabetem 1. typu). Lze integrovat i další open-source software a platformy, které nejsou zobrazeny.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Jak se AAPS neustále vyvíjí a zlepšuje?

Většina uživatelů **AAPS** využívá plně otestovanou **master** verzi aplikace, která byla před zveřejněním prověřena za účelem odstranění chyb a problémů. V zákulisí mezitím vývojáři pracují na nových vylepšeních, která testují na vývojových (**dev**) verzích **AAPS** s komunitou uživatelů, kteří co nejrychleji hlásí nalezené chyby. Pokud vylepšení fungují dobře, jsou uvolněny v nové "master" verzi **AAPS**. Každá nová verze master je oznámena ve facebookové skupině, aby se o ní běžní uživatelé **AAPS** dozvěděli a mohli na ni přejít.

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
| ✔️ *lékaři a zdravotničtí pracovníci     |

Tabulka výše předpokládá, že uživatel má k dispozici kontinuální monitor glykémie i inzulínovou pumpu.

*Veškerá data z **AAPS** mohou být k dispozici zdravotnickým pracovníkům prostřednictvím platforem pro jejich sdílení, včetně Nightscoutu, který umožňuje zaznamenávat a v reálném čase sledovat CGM data, dávkování inzulínu, zadané sacharidy, předpovědi a nastavení. Záznamy v Nightscoutu obsahují denní a týdenní reporty. Ty mohou zdravotníkům pomoci v rozhovoru s pacienty s diabetem 1. typu, protože dávají přesnější data o kompenzaci glykémie a o chování pacienta.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Přístupnost pro uživatele AAPS, kteří jsou slabozrací nebo nevidomí

#### Každodenní použití AAPS:
AAPS mohou používat nevidomí lidé. Na zařízeních s Androidem je v operačním systému program TalkBack. Umožňuje orientovat se na obrazovce pomocí hlasového výstupu, který je součástí operačního systému. Pomocí TalkBack můžete ovládat váš mobilní telefon i AAPS, aniž byste potřebovali vidět.

#### Sestavení aplikace AAPS:
Jako uživatel budete vytvářet aplikaci AAPS v Android Studio. Mnoho lidí k tomu používá Microsoft Windows, kde je čtečka obrazovky podobná programu TalkBack. Vzhledem k tomu, že Android Studio je Java aplikace, musí být v Ovládacím panelu povolena komponenta „Java Access Bridge“. V opačném případě nebude v Android Studiu mluvit čtečka obrazovky.

Jak to uděláte, záleží na vašem operačním systému, jsou popsány dvě následující metody:

1) V nabídce Start Windows zadejte do vyhledávacího pole "Ovládací panel", otevřete stisknutím Enter. Otevře se okno "Všechny položky ovládacího panelu".

Otevřete "Centrum usnadnění přístupu".

Pak otevřete „Použít počítač bez obrazovky“.

V části **Poslech předčítaného textu** vyberte **Zapnout Předčítání** a **Zapnout zvukový popis** a pak klikněte na **Použít**.

nebo:

2) Stiskněte klávesu Windows a do vyhledávacího pole zadejte „Ovládací panel“, otevřete stisknutím Enter. Otevře se okno "Všechny položky ovládacího panelu".

Stisknutím písmene C se dostanete do "Centra usnadnění přístupu", otevřete stisknutím Enter.

Pak otevřete „Použít počítač bez obrazovky“.

V dolní části najdete zaškrtávací políčko „Povolit Java Access Bridge“, vyberte jej.

Hotovo, zavřete okno! Čtečka obrazovky by nyní měla fungovat.



Chcete se dozvědět, jak začít používat AAPS? Podívejte se do části [Příprava](../Getting-Started/PreparingForAaps.md).
