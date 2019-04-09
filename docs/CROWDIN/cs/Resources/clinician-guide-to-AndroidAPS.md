# Pro lékaře – Obecný úvod a příručka k AndroidAPS

Tato stránka je určena lékařům, kteří projevili zájem o open source technologie umělé slinivky, jako je AndroidAPS, nebo pro pacienty, kteří chtějí sdílet tyto informace se svým lékařem.

Tato příručka obsahuje souhrnné informace o DIY uzavřené smyčce a zejména o tom, jak systém AndroidAPS funguje. Další podrobnosti o všech těchto tématech získáte v [kompletní online dokumentaci k AndroidAPS](http://androidaps.readthedocs.io/en/latest/index.html). Máte-li otázky, zeptejte se prosím svého pacienta na další podrobnosti nebo se s dotazem obraťte na komunitu. (Jestliže nepoužíváte sociální sítě (např. [Twitter](https://twitter.com/kozakmilos) nebo Facebook), obraťte se prostřednictvím e-mailu přímo na vývojáře (developers@AndroidAPS.org). [Pod tímto odkazem rovněž najdete nejnovější studie a jejich výsledky a související data](https://openaps.org/outcomes/).

### Kroky nutné pro sestavení DIY uzavřené smyčky:

Chcete-li začít používat systém AndroidAPS, je třeba provést následující kroky:

* Opatřete si [kompatibilní pumpu](https://androidaps.readthedocs.io/en/latest/EN/Getting-Started/Pump-Choices.html), [kompatibilní zařízení se systémem Android](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) a [kompatibilní senzor](https://androidaps.readthedocs.io/en/latest/EN/index.html#getting-started-with-androidaps).
* [Stáhněte si zdrojový kód AndroidAPS a sestavte si software](https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html).
* [Nakonfigurujte software tak, aby komunikoval s ostatními zařízeními a upravte nastavení a bezpečnostní opatření](https://androidaps.readthedocs.io/en/latest/EN/index.html#configuration).

### Jak DIY uzavřená smyčka funguje

Pacient bez systému uzavřené smyčky získává data ze své pumpy a CGM a podle toho se rozhoduje, co udělá a jaká opatření přijme.

S automatickým podáváním inzulínu systém provede totéž: shromažďuje data z pumpy, CGM a veškerých dalších zdrojů, kde mohou být informace zaznamenány (například Nightscout), na základě těchto informací provede výpočty a rozhodne, o kolik více či méně inzulinu je zapotřebí (vzhledem k aktuálně nastavenému bazálu) a použije dočasný bazál nezbytný k tomu, aby udržel glykémii v cílovém rozmezí nebo ji do tohoto rozmezí případně vrátil.

Je-li zařízení se systémem AndroidAPS poškozeno nebo mimo dosah pumpy, pumpa přejde zpět k naprogramované bazální dávce (jako standardní běžná pumpa), jakmile skončí poslední dočasný bazál.

### Jak se získávají data:

Systém AndroidAPS vyžaduje zařízení se systémem Android, na kterém je spuštěna speciální aplikace, která provádí potřebné výpočty, toto zařízení pak prostřednictvím technologie bluetooth komunikuje s podporovanou pumpou. AndroidAPS může prostřednictvím Wi-Fi nebo mobilních dat komunikovat také s dalšími zařízeními nebo s cloudem, odkud může získávat další data nebo jejichž prostřednictvím může informovat pacienta, pečující osoby a rodinné příslušníky o tom, co právě provádí a proč tak činí.

Zařízení se systémem Android musí:

* komunikovat s pumpou a číst historii – kolik inzulínu bylo doručeno
* komunikovat s CGM (buď přímo, nebo prostřednictvím cloudu) – aby byl vidět průběh glykémie

Když zařízení získá tato data, spustí se algoritmus a provádí rozhodování založené na nastavení (inzulino-sacharidový poměr, citlivost na inzulin, doba aktivního inzulinu, cílová glykémie atd.). Podle potřeby pak vysílá příkazy pumpě a upravuje dávkování inzulínu.

Systém také bude shromažďovat veškeré informace o bolusech, zkonzumovaných sacharidech a nastavení dočasných cílů z pumpy nebo z Nightscoutu, aby je použil pro výpočet potřebného množství inzulinu.

### Jak aplikace ví, co má dělat?

Tento open source software je navržen tak, aby zařízení dokázalo dělat to, co pacienti musejí dělat ručně (v manuálním režimu), aby si spočítali potřebné množství inzulinu. V prvé řadě shromažďuje údaje ze všech pomocných zařízení a z cloudu, připravuje údaje a provádí výpočty, provádí predikce různých scénářů, jak se bude glykémie vyvíjet v následujících hodinách, a vypočte potřebné úpravy, aby se glykémie udržela v cílovém rozmezí nebo se do něho po určité době vrátila. Následně odešle nezbytná nastavení do pumpy. Poté znovu přečte a zpracuje veškerá dostupná data a celý proces se opakuje znovu a znovu.

Vzhledem k tomu, že nejdůležitějším vstupním parametrem je hodnota glykémie z CGM, je zásadní mít kvalitní a spolehlivá CGM data.

Systém AndroidAPS je navržen tak, aby transparentně sledoval všechny vstupní údaje, které shromažďuje, a zobrazoval výsledná doporučení i přijatá opatření. Kdykoli se proto lze podívat do protokolů a snadno odpovědět na otázku „proč to právě teď dělá to a to?“

### Příklady rozhodování algoritmu AndroidAPS:

AndroidAPS používá stejný základní algoritmus a funkce jako OpenAPS. Algoritmus vytváří několik predikcí (na základě nastavení a aktuální situace), které představují různé scénáře toho, co se může stát v budoucnosti. V Nightscoutu jsou tyto predikce zobrazeny jako „fialové křivky“. AndroidAPS používá pro rozlišení těchto [křivek predikce] různé barvy (../Installing-AndroidAPS/Releasenotes.md?highlight=Colored prediction lines#overview-tab). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

#### Here are examples of the purple prediction lines, and how they might differ:

![Purple prediction line examples](../images/Prediction_lines.jpg)

#### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

#### Scenario 1 - Zero Temp for safety

In this example, BG is rising in the near-term time frame; however, it is predicted to be low over a longer time frame. In fact, it is predicted to go below target *and* the safety threshold. For safety to prevent the low, AndroidAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

#### Scenario 2 - Zero temp for safety

In this example, BG is predicted to go low in the near-term, but is predicted to eventually be above target. However, because the near-term low is actually below the safety threshold, AndroidAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Scenario 3 - More insulin needed

In this example, a near-term prediction shows a dip below target. However, it is not predicted to be below the safety threshold. The eventual BG is above target. Therefore, AndroidAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). It will then assess adding insulin to bring the lowest level of the eventual predicted BG down to target, once it is safe to do so. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMB's (super micro boluses) ).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Scenario 4 - Low temping for safety

In this example, AndroidAPS sees that BG is spiking well above target. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. In fact, BG is predicted to eventually be below target. Therefore, AndroidAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Although BG is high/rising, a low temporary basal rate is likely here.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Optimizing settings and making changes

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequesite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](http://androidaps.readthedocs.io/en/latest/EN/index.html)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](http://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)