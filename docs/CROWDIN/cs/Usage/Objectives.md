# Rozumíme cílům

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná. Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

Pokud se chystáte inovovat telefon, pak si můžete exportovat svá nastavení tak, aby se vám zachoval postup v plnění cílů. Ve třech tečkách v pravém horním rohu zvolte *Exportovat nastavení*, aplikace vám sdělí složku, do které soubor uložila. Zkopírujte soubor do vašeho nového telefonu na stejné umístění a pak zvolte *Importovat nastavení*. Kromě vašeho postupu se exportem/importem uloží řada jiných nastavení, například vaše bezpečnostní nastavení jako maximální bolus apod. Pokud neabsolvujete export/import svých nastavení, pak budete muset začít plnit cíle znovu od začátku. Je vhodné často si zálohovat svá nastavení, jen pro případ.  

* **Cíl 1:** Nastavení vizualizace a hlídání, příprava bazálů a poměrů 
  * Zvolte správný zdroj glykémie ve vaší situaci. Viz [Zdroj glykémií](../Configration/BG-Source.html) pro další informace.
  * Vyberte správnou pumpu na kartě Konfigurace (zvolte Virtuální pumpu, pokud používáte model pumpy bez ovladače v AndroidAPS - pouze pro otevřenou smyčku) a ujistěte se na kartě Pumpa, že váš model pumpy dokáže komunikovat a svůj stav přenášet do AndroidAPS. Jestliže používáte pumpu DanaR, tak se ujistěte, že jste si prošli instrukce pro [Inzulínovou pumpu DanaR](../Confguration/DanaR-Insulin-Pump.html), aby bylo ověřené spojení mezi pumpou a AndroidAPS.
  * Postupujte podle instrukcí na stránce [Nightscout](../Installin-AndroidAPS/Nightscout.html), abyste ověřili, že Nightscout může přijímat a zobrazovat data z AndroidAPS. <br />  
    _Možná budete muset čekat na další čtení glykémie, než to AndroidAPS pozná._
* **Cíl 2:** Začínáme na otevřené smyčce 
  * Vyberte Otevřenou smyčku z nastavení, nebo stisknutím a držením tlačítka Smyčka v levém horním rohu hlavní stránky.
  * Propracujte se [[Nastavením]], abyste vše připravili.
  * Ručně nařiďte alespoň 20 dočasných bazálních dávek, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v AndroidAPS, že jste návrhy přijali. Ujistěte se, že se tyto údaje zobrazí v AndroidAPS a Nightscoutu.  

* **Cíl 3:** Porozumění otevřené smyčce, včetně doporučení pro dočasné bazály
  
  * Začněte chápat úvahy, které se skrývají za doporučeními bazálních dávek, tím, že si projdete [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) a budete sledovat graf předpovědí na AndroidAPS základní stránce/v Nightscoutu. Také si v aplikaci procházejte výstupy z výpočtů na záložce OpenAPS.   
      
    _Pravděpodobně budete chtít nejdřív nastavit vyšší cíl, než je obvyklé, dokud nebudete důvěřovat výpočtům a nastavením (dokud nebudou dostatečně vyladěné). Systém umožňuje dolní cíl mezi hodnotami 4 až 10 a horní cíl musí být v rozpětí 5 až 15. Dočasný cíl jako jediná hodnota může být kdekoliv mezi 4 až 15. Cíl je hodnota, o kterou se opírá kalkulace, a nikoliv ta hodnota, na které byste chtěli svou glykémii držet. Jestliže je váš cíl velmi široký rozsah (řekněme 3 nebo více mmol široký), často se vám stane, že systém nebude navrhovat příliš úprav do dočasných bazálů, protože předpověď glykémie bude často spadat do daného širokého rozsahu. Asi si budete chtít zkoušením upravit svůj cíl tak, aby tvořil úzký rozsah (řekněme 1 nebo méně mmol široký), a přitom sledujte, jak se mění chování systému. Můžete sledovat širší rozsah (zelené křivky) na grafu pro hodnoty, na které chcete držet vaši glykémii, tím, že zadáte různé hodnoty v Nastavení > Rozsah pro zobrazení._   
      
    _Zastavte se zde, pokud provozujete otevřenou smyčku na virtuální pumpě - neklikejte na tlačítko Kontrola na konci tohoto cíle._

* **Cíl 4:** Začátek uzavřené smyčky - s pozastavením pumpy při nízké glykémii
  
  * Vyberte Uzavřená smyčka buď z Nastavení, nebo stisknutím a držením tlačítka Otevřená smyčka z levého horního rohu hlavní stránky.
  * Nastavte cílový rozsah mírně vyšší, než který je pro vás běžný, jen pro jistotu.
  * Sledujte, jak jsou aktivní dočasné bazální dávky buď prohlížením modrého textu bazálu na hlavní stránce anebo v modrém vykreslení bazálů na grafu.
  * Ujistěte se, že AndroidAPS je teď nastavený tak, že po dobu 5 dní nemusíte řešit nízké glykémie. Pokud stále řešíte časté nebo vážné výskyty nízkých glykémií, zvažte revizi vašeho DIA, bazálů, ISF a sacharidových poměrů. <br />  
    _Systém přebije vaše nastavení maximálního IOB na nulu, což znamená, že pokud vám glykémie klesá, tak se bazál snížit může. Ale když glykémie stoupá, pak je zvýšení bazálu povolené jedině pokud je IOB záporné (z předcházejícího sníženého bazálu). Pokud IOB není záporné, vaše bazální dávky zůstanou stejné, jak jsou zadané v aktivním profilu. Dočasně se vám může stávat, že hroty (ústřely) v grafu glykémií jsou řešené jako hypoglykémie bez možnosti zvýšit bazál při srovnání křivky._
* **Cíl 5:** Vylaďování uzavřené smyčky, zvýšení max IOB nad 0 a postupné snižování cílů glykémie 
  * Zvyšte své maxIOB nad 0 po dobu jednoho dne, výchozí doporučení jsou dva dny, ale měli byste se k tomu propracovat pomalu, až si budete jistí, které nastavení pro vás funguje.
  * Až si budete jistí množstvím IOB, které sedí vašemu vzoru smyčky, pak snižte své cílové glykémie na požadovanou úroveň.  
* **Cíl 6:** Adjust basals and ratios if needed, and then enable autosens 
  * Můžete použít [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) jako kontrolní nástroj, že vaše bazály zůstávají přesné, anebo si udělejte tradiční bazální test.
  * Enable [autosens](../Usage/Open-APS-features.html) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly. <br />  
    _Nezapomeňte zaznamenat vaše zkušenosti se smyčkou do [tohoto formuláře](http://bit.ly/nowlooping) a poznačte tam AndroidAPS jako váš typ DIY smyčkového software, pokud jste tak ještě neučinili._

* **Objective 7:** Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)
  
  * Nyní byste měli cítit jistotu, že znáte, jak AndroidAPS pracuje, a která nastavení nejlépe kompenzují váš diabetes, pak můžete po dobu 28 dní vyzkoušet doplňkové funkce, které za vás práci automatizují ještě víc.

* **Objective 8:** Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)
  
  * You must read this wiki and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
  * Then you ought to rise maxIOB to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal
  * výchozí hodnota min_5m_carbimpact se změnila z 3 na 8 při přechodu od AMA k SMB. Pokud přecházíte z AMA k SMB, musíte to změnit ručně