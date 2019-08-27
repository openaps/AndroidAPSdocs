# Cíle

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná. Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings) to keep your progress through the objectives. Kromě vašeho postupu se uloží také řada jiných nastavení, například vaše bezpečnostní nastavení jako maximální bolus apod. Pokud neprovedete export a následný import svých nastavení, pak budete muset začít plnit cíle znovu od začátku. Z preventivních důvodů je vhodné si často zálohovat svá nastavení. Podrobnosti naleznete níže.  

### Cíl 1: Nastavit vizualizaci a monitoring, analyzovat bazály a poměry

* Zvolte správný zdroj glykémie pro svou kombinaci zařízení. Další informace viz [Zdroj glykémií](../Configuration/BG-Source.md).
* Vyberte správnou pumpu na kartě Konfigurace (zvolte Virtuální pumpu, pokud používáte model pumpy bez ovladače v AndroidAPS – pouze pro otevřenou smyčku) a na kartě pumpy ověřte, že váš model pumpy dokáže komunikovat s aplikací AndroidAPS a přenášet do ní svůj stav. Pokud používáte pumpu DanaR, ujistěte se, že jste postupovali podle pokynů v části [Inzulínová pumpa DanaR](../Configuration/DanaR-Insulin-Pump.md) a že je správně propojená s AndroidAPS.
* Postupujte podle pokynů na stránce [Nightscout](../Installing-AndroidAPS/Nightscout.md) a ujistěte se, že Nightscout může přijímat a zobrazovat tato data.

*Možná bude nutné počkat na další odečet glykémie, než AndroidAPS změnu zaregistruje.*

### Cíl 2: Začít s otevřenou smyčkou

* Vyberte možnost Otevřená smyčka buď v Nastavení, nebo stisknutím a podržením tlačítka Smyčka v levém horním rohu hlavní obrazovky.
* Projděte [Předvolby](../Configuration/Preferences.md) a upravte svá nastavení.
* Ručně nastavte alespoň 20 dočasných bazálních dávek, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v AndroidAPS, že jste návrhy přijali. Ujistěte se, že se tyto údaje zobrazí v AndroidAPS a Nightscoutu.
* Je-li to nutné, povolte [dočasné cíle](../Usage/temptarget.md). Použijte dočasný cíl Hypoglykémie, abyste systému zabránili v příliš agresivních korekcích, pokud by glykémie po vyřešení hypoglykémie stoupala. 

### Cíl 3: Porozumět otevřené smyčce, včetně doporučení pro dočasné bazály

* Začněte chápat úvahy, které se skrývají za doporučeními dočasných bazálních dávek, tím, že si projdete část [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) a budete sledovat křivky predikce na domovské obrazovce AndroidAPS / v Nightscoutu. Také si v aplikaci procházejte výstupy z výpočtů na kartě OpenAPS.

*Cíl nastavte o něco výše než obvykle, dokud si nebudete jisti správností výpočtů a nastavení. Systém umožňuje nastavit dolní cíl mezi 4 až 10 a horní cíl musí být v rozpětí 5 až 15. Dočasný cíl jako jediná hodnota může být kdekoliv mezi 4 až 15. Cíl je hodnota, o kterou se opírá kalkulace, nikoliv hodnota, na které byste chtěli svou glykémii držet. Jestliže má váš cíl velmi široký rozsah (řekněme rozdíl 3 mmol nebo více), často se vám stane, že systém nebude navrhovat příliš mnoho úprav dočasných bazálů, protože předpověď glykémie bude často spadat do daného velmi širokého rozsahu. Snažte se tedy experimentováním upravit svůj cíl tak, aby nebyl rozptyl hodnot příliš velký (řekněme 1 mmol nebo méně) a přitom sledujte, jak se mění chování systému. Cílový rozsah hodnot v grafu na hlavní obrazovce (zelené linky), ve kterých chcete udržovat svou glykémii, můžete změnit změnou hodnot v části Nastavení > Rozsah pro zobrazení.*

**Zastavte se zde, pokud používáte otevřenou smyčku s virtuální pumpou – neklikejte na tlačítko Zkontrolovat na konci tohoto cíle.**

### Cíl 4: Začít s uzavřenou smyčkou s hlídáním nízké glykémie

**U 4. cíle nebude uzavřená smyčka korigovat vysokou glykémii, bude pouze zastavovat před nízkou.**

**Na vysoké glykémie musíte ručně dopíchnout vy sami!**

* Vyberte možnost Uzavřená smyčka buď z Nastavení, nebo stisknutím a držením tlačítka Otevřená smyčka v levém horním rohu hlavní stránky.
* Nastavte cílový rozsah mírně vyšší, než jaký je pro vás běžný, jen pro jistotu.
* Sledujte, jak jsou aktivní dočasné bazální dávky – buď kontrolujte modrý text bazálu na hlavní stránce, nebo modré vykreslení bazálů ve spodní části grafu.
* Ujistěte se, že systém AndroidAPS je nastavený tak, aby po dobu 5 dní nemusel řešit nízké glykémie. Pokud stále řešíte časté nebo vážné výskyty nízkých glykémií, zvažte úpravu svého DIA, bazálů, citlivosti a sacharidových poměrů.

*Systém přepíše vaše nastavení maxIOB na nulu, což znamená, že pokud glykémie klesá, může snížit bazál, ale pokud glykémie stoupá, pak zvýší bazál pouze v případě, že IOB je záporný (z předchozího sníženého bazálu nebo zastavené pumpy). Pokud IOB není záporný, vaše bazální dávky zůstanou stejné jako ve vámi zvoleném aktivním profilu. Bez možnosti zvýšit bazál při srovnání křivky glykémie se vám dočasně může stávat, že po vyřešení hypoglykémie bude následovat přílišný vzestup glykémie.*

### Cíl 5: Vyladit uzavřenou smyčku, zvyšovat max IOB nad 0 a postupně snižovat cílovou glykémii

* Zvyšte hodnotu 'Maximální celkový IOB, který OpenAPS nemůže překročit' (v OpenAPS se tento parametr označuje jako 'max-iob') nad 0 po dobu 1 dne. Výchozím doporučením je použít "průměrnou hodnotu bolusu k jídlu + 3× maximální denní bazální dávku" (pro algoritmus SMB) nebo "3× maximální denní bazální dávku" (pro starší algoritmus AMA). Tyto hodnoty byste však měli zvyšovat postupně, dokud neověříte, že jsou nastaveny správně (maximální denní bazální dávka = maximální bazální dávka za hodinu během dne).
    
    Toto doporučení by mělo být považováno za výchozí bod. Pokud ho nastavíte na 3x a uvidíte kroky, které vás rychle stahují dolů, pak snižte toto číslo. Pokud jste velmi rezistentní na inzulín, pomalu ho zvyšujte.
    
    ![maximální denní bazální dávka](../images/MaxDailyBasal.png)

* Až si budete jistí hodnotou IOB, která vyhovuje vašemu způsobu používání smyčky, pak snižte své cílové glykémie na požadovanou úroveň.

### Cíl 6: Upravit bazály a poměry, když bude potřeba, a povolit automatickou detekci citlivosti na inzulín

* Funkci [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) můžete použít jako jednorázový kontrolní nástroj, zda vaše bazály zůstávají přesné, anebo si udělejte klasický test bazálu.
* Povolte [automatickou detekci citlivosti](../Usage/Open-APS-features.md) po dobu 7 dní a sledujte bílou křivku na grafu na hlavní stránce, jak se vaše citlivost na inzulín může snižovat a zvyšovat v důsledku cvičení nebo hormonů apod., zároveň na kartě OpenAPS sledujte, jak podle toho systém AndroidAPS upravil vaše bazály a/nebo cíle.

*Pokud jste tak dosud neučinili, nezapomeňte zaznamenat své zkušenosti se smyčkou do [tohoto formuláře](http://bit.ly/nowlooping) a označte AndroidAPS jako typ své DIY smyčky.*

### Cíl 7: Povolit další funkce oref0 pro běžné používání, jako je AMA (advanced meal assist)

* Nyní byste si již měli být jisti tím, jak AndroidAPS funguje a která nastavení jsou pro váš konkrétní diabetes nejlepší
* Následně můžete po dobu 28 dnů vyzkoušet další funkce, které nabízejí ještě větší úroveň automatizace, jako je například [advanced meal assist](../Usage/Open-APS-features#advanced-meal-assist-ama)

### Cíl 8: Povolit další funkce oref1 pro běžné používání, jako je SMB (super micro bolus)

* Musíte si přečíst [Kapitolu o SMB zde na wiki](../Usage/Open-APS-features#super-micro-bolus-smb) a [Kapitolu o oref1 v dokumentaci k openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html), abyste porozuměli tomu, jak SMB funguje, zejména na čem je založen princip nulových dočasných bazálů.
* Následně byste měli [zvýšit maxIOB](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) tak, aby SMB správně fungovaly. maxIOB nyní zahrnuje veškerý IOB, nejen ten z bazálů. To znamená, že pokud byl vydán bolus 8 U na jídlo a maxIOB je 7 U, nebudou vydány žádné SMB, dokud IOB neklesne pod 7 U. Pro začátek je dobré nastavit hodnotu maxIOB jako „průměrný bolus k jídlu + 3× maximální denní bazální dávka“ (maximální denní bazální dávka = maximální bazální dávka za hodinu během dne – viz [Cíl 5](../Usage/Objectives#objective-5-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) pro příklad)
* Výchozí hodnota absorpce „min_5m_carbimpact“ se při přechodu z AMA na SMB mění ze 3 na 8. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně