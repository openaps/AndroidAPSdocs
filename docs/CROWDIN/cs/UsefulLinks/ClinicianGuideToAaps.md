# Pro lékaře – obecný úvod a průvodce k AAPS

```{note}
Tato stránka je základním úvodem pro lékaře. Naposledy byla zkontrolována v červnu 2026. AAPS se neustále vyvíjí, proto pro nejpřesnější a aktuální informace vždy použijte [hlavní dokumentaci AAPS](../index.md).
```

Tato stránka je určena lékařům, kteří se zajímají o open source technologii umělé slinivky, jako je AAPS, nebo pacientům, kteří chtějí tyto informace sdílet se svými lékaři.

Tento průvodce obsahuje základní informace o DIY uzavřené smyčce a hlavně o tom, jak funguje AAPS. Více podrobností ke všem těmto tématům najdete v [kompletní online dokumentaci AAPS](../index.md). Máte-li otázky, zeptejte se prosím svého pacienta na další podrobnosti nebo se s dotazem obraťte na komunitu. (Pokud nepoužíváte sociální sítě (např. [Twitter](https://twitter.com/kozakmilos) nebo Facebook), můžete napsat e-mail na developers@aaps.app). [Pod tímto odkazem rovněž najdete nejnovější studie a jejich výsledky a související data](https://openaps.org/outcomes/).

## Kroky nutné pro sestavení DIY uzavřené smyčky:

Pro začátek používání AAPS je třeba udělat tyto kroky:

* Najít [kompatibilní pumpu](../Getting-Started/CompatiblePumps.md), [kompatibilní zařízení s Androidem](../Getting-Started/Phones.md) a [kompatibilní zdroj CGM](../Getting-Started/CompatiblesCgms.md).
* [Stáhnout zdrojový kód AAPS a sestavit software](../SettingUpAaps/BuildingAaps.md).
* [Nakonfigurovat software, aby komunikoval s jejich diabetickými zařízeními, a zadat nastavení a bezpečnostní předvolby](../SettingUpAaps/SetupWizard.md).

## Jak DIY uzavřená smyčka funguje

Pacient bez systému uzavřené smyčky získává data ze své pumpy a CGM a podle toho se rozhoduje, co udělá a jaká opatření přijme.

S automatickým podáváním inzulínu systém provede totéž: shromažďuje data z pumpy, CGM a veškerých dalších zdrojů, kde mohou být informace zaznamenány (například Nightscout), na základě těchto informací provede výpočty a rozhodne, o kolik více či méně inzulínu je zapotřebí (vzhledem k aktuálně nastavenému bazálu) a použije dočasný bazál nezbytný k tomu, aby udržel glykémii v cílovém rozmezí nebo ji do tohoto rozmezí případně vrátil.

Pokud se zařízení s AAPS porouchá nebo se dostane mimo dosah pumpy, pak po skončení posledního dočasného bazálu pumpa pracuje dál jako standardní pumpa s předem naprogramovanými bazálními dávkami.

## Jak se získávají data:

U AAPS běží na zařízení s Androidem speciální aplikace, která provádí výpočty. Zařízení komunikuje přes Bluetooth s podporovanou pumpou. AAPS může komunikovat s dalšími zařízeními a s cloudem přes Wi-Fi nebo mobilní data. Tak získává další informace a informuje pacienta, pečovatele a blízké o tom, co dělá a proč.

Zařízení se systémem Android musí:

* komunikovat s pumpou a číst historii – kolik inzulínu bylo doručeno
* komunikovat s CGM (buď přímo, nebo prostřednictvím cloudu) – aby byl vidět průběh glykémie

Když zařízení získá tato data, spustí se algoritmus a rozhodne se podle nastavení (citlivost na inzulín (ISF), inzulínosacharidový poměr, doba působnosti inzulínu (DIA), cílová glykémie atd.). Podle potřeby pak vysílá příkazy pumpě a upravuje dávkování inzulínu.

Systém také bude shromažďovat veškeré informace o bolusech, zkonzumovaných sacharidech a nastavení dočasných cílů z pumpy nebo z Nightscoutu, aby je použil pro výpočet potřebného množství inzulínu.

## Jak aplikace ví, co má dělat?

Tento open source software je navržen tak, aby zařízení dokázalo dělat to, co pacienti musejí dělat ručně (v manuálním režimu), aby si spočítali potřebné množství inzulínu. V prvé řadě shromažďuje údaje ze všech pomocných zařízení a z cloudu, připravuje údaje a provádí výpočty, provádí predikce různých scénářů, jak se bude glykémie vyvíjet v následujících hodinách, a vypočte potřebné úpravy, aby se glykémie udržela v cílovém rozmezí nebo se do něho po určité době vrátila. Následně odešle nezbytná nastavení do pumpy. Poté znovu přečte a zpracuje veškerá dostupná data a celý proces se opakuje znovu a znovu.

Vzhledem k tomu, že nejdůležitějším vstupním parametrem je hodnota glykémie z CGM, je zásadní mít kvalitní a spolehlivá CGM data.

AAPS je navržen tak, aby průhledně zaznamenával všechna vstupní data, která shromažďuje, výsledné doporučení i každou provedenou akci. Kdykoli se proto lze podívat do protokolů a snadno odpovědět na otázku „proč to právě teď dělá to a to?“

## Příklady rozhodování algoritmu AAPS:

AAPS používá stejný základní algoritmus a stejnou sadu funkcí jako OpenAPS. Algoritmus vytváří několik predikcí (na základě nastavení a aktuální situace), které představují různé scénáře toho, co se může stát v budoucnosti. V Nightscoutu jsou tyto predikce zobrazeny jako „fialové křivky“. AAPS odlišuje tyto [predikční křivky](#aaps-screens-prediction-lines) různými barvami. V protokolech najdete informace o tom, která z těchto křivek predikce a kdy byla použita pro danou akci.

### Zde jsou příklady fialových křivek predikce a toho, jak se mohou lišit:

![Příklady fialové křivky predikce](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Zde jsou příklady různých časových úseků, které mají vliv na potřebné úpravy dávkování inzulínu:

### Scénář 1 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu glykémie v krátkodobém horizontu stoupá, avšak předpověď říká, že po delší době bude glykémie nízká. Ve skutečnosti je předpovídáno, že se dostane pod cílovou hodnotu *i* pod nastavený bezpečnostní limit. Kvůli bezpečnosti, aby zabránil nízké glykémii, nastaví AAPS nulový dočasný bazál (dočasný bazál 0 %), dokud konečná glykémie (eventualBG, v jakémkoli časovém úseku) nebude nad bezpečnostním limitem.

![Příklad dávkování 1](../images/Dosing_scenario_1.jpg)

### Scénář 2 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu je předpovídáno, že v krátkodobém horizontu bude glykemie nízká, ale nakonec se může dostat nad cílovou hodnotu. Protože je však krátkodobá nízká hodnota ve skutečnosti pod bezpečnostním limitem, nastaví AAPS nulový dočasný bazál, dokud už žádný bod predikční křivky nebude pod limitem.

![Příklad dávkování 2](../images/Dosing_scenario_2.jpg)

### Scénář 3 – Je třeba zvýšit množství inzulínu

V tomto případě ukazuje krátkodobá předpověď pokles pod cílovou hodnotu. Předpokládá se však, že nebude pod bezpečnostním limitem. Hodnota konečné glykémie je nad cílovou hodnotou. Proto AAPS nepřidá žádný inzulín, který by přispěl ke krátkodobé nízké glykémii (tedy inzulín, kvůli kterému by predikce klesla pod limit). Následně – až to bude bezpečné – podle nejnižší předpovídané hodnoty výsledné glykémie posoudí, zda bude nutné přidat inzulín, aby se výsledná předpovídaná glykémie dostala zpět na cílovou hodnotu. *(V závislosti na nastavení, potřebném množství inzulínu a jeho časování může být tento přídavek inzulínu dodán v podobě dočasných bazálů nebo SMB (super mikro bolusů)).*

![Příklad dávkování 3](../images/Dosing_scenario_3.jpg)

### Scénář 4 – Nízký dočasný bazál kvůli bezpečnosti

V tomto příkladu AAPS vidí, že glykémie prudce stoupá vysoko nad cílovou hodnotu. Avšak vzhledem k době působnosti inzulínu je již v těle dost inzulínu, aby se glykémie nakonec dostala do cílového rozsahu. Předpověď ve skutečnosti říká, že výsledná glykémie se nakonec může dostat pod cílovou hodnotu. Proto AAPS nepodá další inzulín, aby nepřispěl k nízké glykémii v delším časovém úseku. Přestože je glykémie vysoká/stoupá, bude v tomto případě dočasný bazál snížen.

![Příklad dávkování 4](../images/Dosing_scenario_4.jpg)

## Optimalizace nastavení a provádění změn

Jako lékař, který možná nemá zkušenosti s AAPS nebo s DIY uzavřenými smyčkami, můžete mít potíže pomoci pacientovi optimalizovat nastavení nebo udělat změny, které zlepší jeho výsledky. V komunitě máme řadu nástrojů a [příruček](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), které pomohou vašim pacientům provádět drobné, vyzkoušené změny, jež pomohou zlepšit jejich nastavení.

Pacienti musejí dbát na to, aby neprováděli více změn najednou, ale aby provedli pouze jednu změnu a po dobu 2–3 dní pozorovali, jaký bude mít efekt. Teprve potom by měli změnit nebo upravit jiné nastavení (pokud není zjevné, že změna byla špatná a situaci zhoršuje, v takovém případě by se měli okamžitě vrátit k předchozímu nastavení). Lidé mají tendenci použít všechny ovládací prvky a měnit všechno najednou; pokud to však někdo udělá, může to skončit ještě horším nastavením, které značně zkomplikuje návrat zpět k funkčnímu stavu.

Jedním z nejmocnějších nástrojů pro provádění změn nastavení je nástroj pro automatizovaný výpočet bazálních dávek, citlivosti a inzulínosacharidového poměru. Tomu se říká „[Autotune](#autotune-how-autotune-calculates-adjustments)“. Je navržen tak, aby se spouštěl nezávisle/ručně a umožňuje, abyste vy nebo pacient sám prováděli drobné postupné změny v nastavení. Komunita obvykle postupuje tak, že nejdříve spustí (nebo zkontroluje) výsledky nástroje Autotune předtím, než přistoupí k manuálním zásahům do nastavení. Autotune je v AAPS zabudován jako plugin (**Konfigurace** → **Obecné** → **Autotune**); viz [Autotune](../AdvancedOptions/Autotune.md). Lze ho spustit na vyžádání nebo automaticky. Tyto parametry jsou nutné jak pro podávání inzulínu standardní pumpou, tak pro podávání inzulínu v uzavřené smyčce. Proto je diskuse o výsledcích Autotune a úprava těchto parametrů přirozeným tématem pro spolupráci s lékařem.

Navíc návyky pacientů (získané při ruční kompenzaci diabetu) mají často vliv na výsledky, dokonce i s DIY uzavřenou smyčkou. Například pokud se předpovídá pokles glykémie a AAPS cestou dolů sníží inzulín, může k vzestupu glykémie ze 70 mg/dl (3,9 mmol/l) stačit jen malé množství sacharidů (např. 3–4 g sacharidů). V mnoha případech se však pacient rozhodne řešit nízkou glykémii větším množstvím sacharidů (např. dodržuje pravidlo 15), což v důsledku povede k výraznějšímu vzestupu glykémie jednak kvůli většímu množství přijaté glukózy, jednak kvůli již snížené dávce inzulínu s ohledem na předpovídaný pokles glykémie.

## OpenAPS

**Tato příručka byla převzata z [Příručky k OpenAPS pro lékaře](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS je systém vyvinutý tak, aby běžel na malém přenosném počítači (který se obecně označuje jako „rig“). AAPS používá mnoho technik zavedených v OpenAPS a sdílí s ním velkou část logiky a algoritmů. Proto je tento průvodce velmi podobný původnímu průvodci. Mnoho informací o OpenAPS lze snadno použít i pro AAPS. Hlavní rozdíl je v hardwarové platformě, na které daný software běží.

## Shrnutí

Jde o základní přehled toho, jak AAPS funguje. Více podrobností zjistíte od svého pacienta, od komunity nebo v kompletní online dokumentaci AAPS.

Další doporučená literatura:

* [Kompletní dokumentace AAPS](../index.md)
* Dokument [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), který vysvětluje, jak je systém OpenAPS navržen z hlediska bezpečnosti: https://openaps.org/reference-design/
* [Kompletní dokumentace k OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Viz [jak AAPS mění predikce v rozhodnutí o dávkování](#aaps-screens-how-predictions-become-a-dosing-decision) v této dokumentaci, nebo [dokumentaci OpenAPS k determine-basal](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic), kde je základní algoritmus popsán do všech technických podrobností