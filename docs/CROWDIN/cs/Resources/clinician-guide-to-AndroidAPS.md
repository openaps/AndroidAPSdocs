# Pro lékaře – Obecný úvod a příručka k AndroidAPS

Tato stránka je určena lékařům, kteří projevili zájem o open source technologie umělé slinivky, jako je AndroidAPS, nebo pro pacienty, kteří chtějí sdílet tyto informace se svým lékařem.

Tato příručka obsahuje souhrnné informace o DIY uzavřené smyčce a zejména o tom, jak systém AndroidAPS funguje. Další podrobnosti o všech těchto tématech získáte v [kompletní online dokumentaci k AndroidAPS](../index.md). Máte-li otázky, zeptejte se prosím svého pacienta na další podrobnosti nebo se s dotazem obraťte na komunitu. (Jestliže nepoužíváte sociální sítě (např. [Twitter](https://twitter.com/kozakmilos) nebo Facebook), obraťte se prostřednictvím e-mailu přímo na vývojáře (developers@AndroidAPS.org). [Pod tímto odkazem rovněž najdete nejnovější studie a jejich výsledky a související data](https://openaps.org/outcomes/).

## Kroky nutné pro sestavení DIY uzavřené smyčky:

Chcete-li začít používat systém AndroidAPS, je třeba provést následující kroky:

* Opatřete si [kompatibilní pumpu](../Hardware/pumps.md), [kompatibilní zařízení se systémem Android](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) a [kompatibilní senzor](../Configuration/BG-Source.md).
* [Stáhněte si zdrojový kód AndroidAPS a sestavte si software](../Installing-AndroidAPS/Building-APK.md).
* [Nakonfigurujte software tak, aby komunikoval s ostatními zařízeními a upravte nastavení a bezpečnostní opatření](index-configuration).

## Jak DIY uzavřená smyčka funguje

Pacient bez systému uzavřené smyčky získává data ze své pumpy a CGM a podle toho se rozhoduje, co udělá a jaká opatření přijme.

S automatickým podáváním inzulínu systém provede totéž: shromažďuje data z pumpy, CGM a veškerých dalších zdrojů, kde mohou být informace zaznamenány (například Nightscout), na základě těchto informací provede výpočty a rozhodne, o kolik více či méně inzulinu je zapotřebí (vzhledem k aktuálně nastavenému bazálu) a použije dočasný bazál nezbytný k tomu, aby udržel glykémii v cílovém rozmezí nebo ji do tohoto rozmezí případně vrátil.

Je-li zařízení se systémem AndroidAPS poškozeno nebo mimo dosah pumpy, pumpa přejde zpět k naprogramované bazální dávce (jako standardní běžná pumpa), jakmile skončí poslední dočasný bazál.

## Jak se získávají data:

Systém AndroidAPS vyžaduje zařízení se systémem Android, na kterém je spuštěna speciální aplikace, která provádí potřebné výpočty, toto zařízení pak prostřednictvím technologie bluetooth komunikuje s podporovanou pumpou. AndroidAPS může prostřednictvím Wi-Fi nebo mobilních dat komunikovat také s dalšími zařízeními nebo s cloudem, odkud může získávat další data nebo jejichž prostřednictvím může informovat pacienta, pečující osoby a rodinné příslušníky o tom, co právě provádí a proč tak činí.

Zařízení se systémem Android musí:

* komunikovat s pumpou a číst historii – kolik inzulínu bylo doručeno
* komunikovat s CGM (buď přímo, nebo prostřednictvím cloudu) – aby byl vidět průběh glykémie

Když zařízení získá tato data, spustí se algoritmus a provádí rozhodování založené na nastavení (inzulino-sacharidový poměr, citlivost na inzulin, doba aktivního inzulinu, cílová glykémie atd.). Podle potřeby pak vysílá příkazy pumpě a upravuje dávkování inzulínu.

Systém také bude shromažďovat veškeré informace o bolusech, zkonzumovaných sacharidech a nastavení dočasných cílů z pumpy nebo z Nightscoutu, aby je použil pro výpočet potřebného množství inzulinu.

## Jak aplikace ví, co má dělat?

Tento open source software je navržen tak, aby zařízení dokázalo dělat to, co pacienti musejí dělat ručně (v manuálním režimu), aby si spočítali potřebné množství inzulinu. V prvé řadě shromažďuje údaje ze všech pomocných zařízení a z cloudu, připravuje údaje a provádí výpočty, provádí predikce různých scénářů, jak se bude glykémie vyvíjet v následujících hodinách, a vypočte potřebné úpravy, aby se glykémie udržela v cílovém rozmezí nebo se do něho po určité době vrátila. Následně odešle nezbytná nastavení do pumpy. Poté znovu přečte a zpracuje veškerá dostupná data a celý proces se opakuje znovu a znovu.

Vzhledem k tomu, že nejdůležitějším vstupním parametrem je hodnota glykémie z CGM, je zásadní mít kvalitní a spolehlivá CGM data.

Systém AndroidAPS je navržen tak, aby transparentně sledoval všechny vstupní údaje, které shromažďuje, a zobrazoval výsledná doporučení i přijatá opatření. Kdykoli se proto lze podívat do protokolů a snadno odpovědět na otázku „proč to právě teď dělá to a to?“

## Příklady rozhodování algoritmu AndroidAPS:

AndroidAPS používá stejný základní algoritmus a funkce jako OpenAPS. Algoritmus vytváří několik predikcí (na základě nastavení a aktuální situace), které představují různé scénáře toho, co se může stát v budoucnosti. V Nightscoutu jsou tyto predikce zobrazeny jako „fialové křivky“. AndroidAPS používá k rozlišení těchto [křivek predikce](Releasenotes-overview-tab) různé barvy. V protokolech najdete informace o tom, která z těchto křivek predikce a kdy byla použita pro danou akci.

### Zde jsou příklady fialových křivek predikce a toho, jak se mohou lišit:

![Příklady fialové křivky predikce](../images/Prediction_lines.jpg)

### Zde jsou příklady různých časových úseků, které mají vliv na potřebné úpravy dávkování inzulinu:

### Scénář 1 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu glykémie v krátkodobém horizontu stoupá, avšak předpověď říká, že po delší době bude glykémie nízká. Ve skutečnosti je předpovídáno, že se dostane pod cílovou hodnotu *i* pod nastavený bezpečnostní limit. Aby se předešlo hypoglykémii, AndroidAPS nastaví nulový bazál (dočasný bazál na 0 %), dokud hodnota eventualBG (v kterémkoli okamžiku) nebude nad bezpečnostním limitem.

![Příklad dávkování 1](../images/Dosing_scenario_1.jpg)

### Scénář 2 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu je předpovídáno, že v krátkodobém horizontu bude glykemie nízká, ale nakonec se může dostat nad cílovou hodnotu. Vzhledem k tomu, že krátkodobá předpověď je pod bezpečnostním limitem, AndroidAPS spustí nulový bazál, dokud se všechny body na křivce predikce nedostanou nad bezpečnostní limit.

![Příklad dávkování 2](../images/Dosing_scenario_2.jpg)

### Scénář 3 – Je třeba zvýšit množství inzulinu

V tomto případě ukazuje krátkodobá předpověď pokles pod cílovou hodnotu. Předpokládá se však, že nebude pod bezpečnostním limitem. Hodnota konečné glykémie je nad cílovou hodnotou. Proto AndroidAPS nebude přidávat inzulin, který by přispěl k poklesu glykémie v krátkodobém horizontu (nepřidá inzulin tak, aby šla predikce pod bezpečnostní limit). Následně – až to bude bezpečné – podle nejnižší předpovídané hodnoty výsledné glykémie posoudí, zda bude nutné přidat inzulin, aby se výsledná předpovídaná glykémie dostala zpět na cílovou hodnotu. *(V závislosti na nastavení, potřebném množství inzulinu a jeho časování může být tento přídavek inzulinu dodán v podobě dočasných bazálů nebo SMB (super mikro bolusů)).*

![Příklad dávkování 3](../images/Dosing_scenario_3.jpg)

### Scénář 4 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu AndroidAPS vidí, že glykémie výrazně převyšuje cílovou hodnotu. Avšak vzhledem k době působnosti inzulínu je již v těle dost inzulínu, aby se glykémie nakonec dostala do cílového rozsahu. Předpověď ve skutečnosti říká, že výsledná glykémie se nakonec může dostat pod cílovou hodnotu. Proto systém AndroidAPS nevydá další inzulin, aby nepřispíval k nízké glykémii v delším časovém horizontu. Přestože je glykémie vysoká/stoupá, bude v tomto případě dočasný bazál snížen.

![Příklad dávkování 4](../images/Dosing_scenario_4.jpg)

## Optimalizace nastavení a provádění změn

Jakožto pro lékaře, kteří nemají zkušenosti s AndroidAPS nebo DIY uzavřenými smyčkami, pro vás může obtížné pomoci pacientovi optimalizovat jeho nastavení nebo provádět změny, které by zlepšily jeho výsledky. V komunitě máme řadu nástrojů a [příruček](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), které pomohou vašim pacientům provádět drobné, vyzkoušené změny, jež pomohou zlepšit jejich nastavení.

Pacienti musejí dbát na to, aby neprováděli více změn najednou, ale aby provedli pouze jednu změnu a po dobu 2–3 dní pozorovali, jaký bude mít efekt, Teprve potom by měli změnit nebo upravit jiné nastavení (pokud není zjevné, že změna byla špatná a situaci zhoršuje, v takovém případě by se měli okamžitě vrátit k předchozímu nastavení). Lidé mají tendenci použít všechny ovládací prvky a měnit všechno najednou; pokud to však někdo udělá, může to skončit ještě horším nastavením, které značně zkomplikuje návrat zpět k funkčnímu stavu.

Jedním z nejmocnějších nástrojů pro provádění změn nastavení je nástroj pro automatizovaný výpočet bazálních dávek, citlivosti a inzulino-sacharidového poměru. Jmenuje se „[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)“. Je navržen tak, aby se spouštěl nezávisle/ručně a umožňuje, abyste vy nebo pacient sám prováděli drobné postupné změny v nastavení. Komunita obvykle postupuje tak, že nejdříve spustí (nebo zkontroluje) výsledky nástroje Autotune předtím, než přistoupí k manuálním zásahům do nastavení. V rámci AndroidAPS je nástroj Autotune spouštěn „jednorázově“, avšak pracuje se na tom, aby byl přímo součástí AndroidAPS. Vzhledem k tomu, že oba tyto parametry jsou předpokladem jak pro standardní aplikaci inzulínu pumpou, tak pro aplikaci inzulínu v uzavřené smyčce, diskuse o výsledcích autotune a úprava těchto parametrů by měla být přirozenou součástí spolupráce s lékařem.

Navíc návyky pacientů (získané při ruční kompenzaci diabetu) mají často vliv na výsledky, dokonce i s DIY uzavřenou smyčkou. Například pokud existuje předpověď, že glykémie bude klesat a AndroidAPS včas sníží dávku inzulinu, pak stačí pouze velmi malé množství sacharidů (např. 3–4 g), aby se glykémie vrátila z 3,9 mmol do normálu. V mnoha případech se však pacient rozhodne řešit nízkou glykémii větším množstvím sacharidů (např. dodržuje pravidlo 15), což v důsledku povede k výraznějšímu vzestupu glykémie jednak kvůli většímu množství přijaté glukózy, jednak kvůli již snížené dávce inzulinu s ohledem na předpovídaný pokles glykémie.

## OpenAPS

**Tato příručka byla převzata z [Příručky k OpenAPS pro lékaře](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS je systém vyvinutý tak, aby běžel na malém přenosném počítači (který se obecně označuje jako „rig“). AndroidAPS používá mnoho funkcí implementovaných v systému OpenAPS a sdílí s ním velkou část logiky a algoritmů, což je důvod, proč je tato příručka velmi podobná původní příručce. Mnoho informací o OpenAPS lze snadno přizpůsobit AndroidAPS, přičemž hlavním rozdílem je hardwarová platforma, na které jsou jednotlivé části softwaru spuštěny.

## Shrnutí

Tento text je stručným přehledem toho, jak funguje AndroidAPS. Chcete-li se dozvědět více informací, zeptejte se svého pacienta, obraťte se na komunitu nebo si přečtěte kompletní dokumentaci k AndroidAPS, která je k dispozici online.

Další doporučená literatura:

* [Kompletní dokumentace k OpenAPS](../index)
* Dokument [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), který vysvětluje, jak je systém OpenAPS navržen z hlediska bezpečnosti: https://openaps.org/reference-design/
* [Kompletní dokumentace k OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Další [podrobnosti o výpočtech OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)