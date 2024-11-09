# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Máte-li otázky, zeptejte se prosím svého pacienta na další podrobnosti nebo se s dotazem obraťte na komunitu. (Jestliže nepoužíváte sociální sítě (např. [Twitter](https://twitter.com/kozakmilos) nebo Facebook), obraťte se prostřednictvím e-mailu přímo na vývojáře (developers@AndroidAPS.org). [Pod tímto odkazem rovněž najdete nejnovější studie a jejich výsledky a související data](https://openaps.org/outcomes/).

## Kroky nutné pro sestavení DIY uzavřené smyčky:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## Jak DIY uzavřená smyčka funguje

Pacient bez systému uzavřené smyčky získává data ze své pumpy a CGM a podle toho se rozhoduje, co udělá a jaká opatření přijme.

S automatickým podáváním inzulínu systém provede totéž: shromažďuje data z pumpy, CGM a veškerých dalších zdrojů, kde mohou být informace zaznamenány (například Nightscout), na základě těchto informací provede výpočty a rozhodne, o kolik více či méně inzulinu je zapotřebí (vzhledem k aktuálně nastavenému bazálu) a použije dočasný bazál nezbytný k tomu, aby udržel glykémii v cílovém rozmezí nebo ji do tohoto rozmezí případně vrátil.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## Jak se získávají data:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Zařízení se systémem Android musí:

* komunikovat s pumpou a číst historii – kolik inzulínu bylo doručeno
* komunikovat s CGM (buď přímo, nebo prostřednictvím cloudu) – aby byl vidět průběh glykémie

Když zařízení získá tato data, spustí se algoritmus a provádí rozhodování založené na nastavení (inzulino-sacharidový poměr, citlivost na inzulin, doba aktivního inzulinu, cílová glykémie atd.). Podle potřeby pak vysílá příkazy pumpě a upravuje dávkování inzulínu.

Systém také bude shromažďovat veškeré informace o bolusech, zkonzumovaných sacharidech a nastavení dočasných cílů z pumpy nebo z Nightscoutu, aby je použil pro výpočet potřebného množství inzulinu.

## Jak aplikace ví, co má dělat?

Tento open source software je navržen tak, aby zařízení dokázalo dělat to, co pacienti musejí dělat ručně (v manuálním režimu), aby si spočítali potřebné množství inzulinu. V prvé řadě shromažďuje údaje ze všech pomocných zařízení a z cloudu, připravuje údaje a provádí výpočty, provádí predikce různých scénářů, jak se bude glykémie vyvíjet v následujících hodinách, a vypočte potřebné úpravy, aby se glykémie udržela v cílovém rozmezí nebo se do něho po určité době vrátila. Následně odešle nezbytná nastavení do pumpy. Poté znovu přečte a zpracuje veškerá dostupná data a celý proces se opakuje znovu a znovu.

Vzhledem k tomu, že nejdůležitějším vstupním parametrem je hodnota glykémie z CGM, je zásadní mít kvalitní a spolehlivá CGM data.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Kdykoli se proto lze podívat do protokolů a snadno odpovědět na otázku „proč to právě teď dělá to a to?“

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Algoritmus vytváří několik predikcí (na základě nastavení a aktuální situace), které představují různé scénáře toho, co se může stát v budoucnosti. V Nightscoutu jsou tyto predikce zobrazeny jako „fialové křivky“. AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). V protokolech najdete informace o tom, která z těchto křivek predikce a kdy byla použita pro danou akci.

### Zde jsou příklady fialových křivek predikce a toho, jak se mohou lišit:

![Příklady fialové křivky predikce](../images/Prediction_lines.jpg)

### Zde jsou příklady různých časových úseků, které mají vliv na potřebné úpravy dávkování inzulinu:

### Scénář 1 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu glykémie v krátkodobém horizontu stoupá, avšak předpověď říká, že po delší době bude glykémie nízká. Ve skutečnosti je předpovídáno, že se dostane pod cílovou hodnotu *i* pod nastavený bezpečnostní limit. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Příklad dávkování 1](../images/Dosing_scenario_1.jpg)

### Scénář 2 – Nulový dočasný bazál kvůli bezpečnosti

V tomto příkladu je předpovídáno, že v krátkodobém horizontu bude glykemie nízká, ale nakonec se může dostat nad cílovou hodnotu. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Příklad dávkování 2](../images/Dosing_scenario_2.jpg)

### Scénář 3 – Je třeba zvýšit množství inzulinu

V tomto případě ukazuje krátkodobá předpověď pokles pod cílovou hodnotu. Předpokládá se však, že nebude pod bezpečnostním limitem. Hodnota konečné glykémie je nad cílovou hodnotou. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Následně – až to bude bezpečné – podle nejnižší předpovídané hodnoty výsledné glykémie posoudí, zda bude nutné přidat inzulin, aby se výsledná předpovídaná glykémie dostala zpět na cílovou hodnotu. *(V závislosti na nastavení, potřebném množství inzulinu a jeho časování může být tento přídavek inzulinu dodán v podobě dočasných bazálů nebo SMB (super mikro bolusů)).*

![Příklad dávkování 3](../images/Dosing_scenario_3.jpg)

### Scénář 4 – Nulový dočasný bazál kvůli bezpečnosti

In this example, AAPS sees that BG is spiking well above target. Avšak vzhledem k době působnosti inzulínu je již v těle dost inzulínu, aby se glykémie nakonec dostala do cílového rozsahu. Předpověď ve skutečnosti říká, že výsledná glykémie se nakonec může dostat pod cílovou hodnotu. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Přestože je glykémie vysoká/stoupá, bude v tomto případě dočasný bazál snížen.

![Příklad dávkování 4](../images/Dosing_scenario_4.jpg)

## Optimalizace nastavení a provádění změn

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. V komunitě máme řadu nástrojů a [příruček](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html), které pomohou vašim pacientům provádět drobné, vyzkoušené změny, jež pomohou zlepšit jejich nastavení.

Pacienti musejí dbát na to, aby neprováděli více změn najednou, ale aby provedli pouze jednu změnu a po dobu 2–3 dní pozorovali, jaký bude mít efekt, Teprve potom by měli změnit nebo upravit jiné nastavení (pokud není zjevné, že změna byla špatná a situaci zhoršuje, v takovém případě by se měli okamžitě vrátit k předchozímu nastavení). Lidé mají tendenci použít všechny ovládací prvky a měnit všechno najednou; pokud to však někdo udělá, může to skončit ještě horším nastavením, které značně zkomplikuje návrat zpět k funkčnímu stavu.

Jedním z nejmocnějších nástrojů pro provádění změn nastavení je nástroj pro automatizovaný výpočet bazálních dávek, citlivosti a inzulino-sacharidového poměru. Jmenuje se „[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)“. Je navržen tak, aby se spouštěl nezávisle/ručně a umožňuje, abyste vy nebo pacient sám prováděli drobné postupné změny v nastavení. Komunita obvykle postupuje tak, že nejdříve spustí (nebo zkontroluje) výsledky nástroje Autotune předtím, než přistoupí k manuálním zásahům do nastavení. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. Vzhledem k tomu, že oba tyto parametry jsou předpokladem jak pro standardní aplikaci inzulínu pumpou, tak pro aplikaci inzulínu v uzavřené smyčce, diskuse o výsledcích autotune a úprava těchto parametrů by měla být přirozenou součástí spolupráce s lékařem.

Navíc návyky pacientů (získané při ruční kompenzaci diabetu) mají často vliv na výsledky, dokonce i s DIY uzavřenou smyčkou. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). V mnoha případech se však pacient rozhodne řešit nízkou glykémii větším množstvím sacharidů (např. dodržuje pravidlo 15), což v důsledku povede k výraznějšímu vzestupu glykémie jednak kvůli většímu množství přijaté glukózy, jednak kvůli již snížené dávce inzulinu s ohledem na předpovídaný pokles glykémie.

## OpenAPS

**Tato příručka byla převzata z [Příručky k OpenAPS pro lékaře](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS je systém vyvinutý tak, aby běžel na malém přenosném počítači (který se obecně označuje jako „rig“). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Shrnutí

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Další doporučená literatura:

* The [full AAPS documentation](../index.md)
* Dokument [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), který vysvětluje, jak je systém OpenAPS navržen z hlediska bezpečnosti: https://openaps.org/reference-design/
* [Kompletní dokumentace k OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Další [podrobnosti o výpočtech OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)