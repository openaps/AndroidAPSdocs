# Objectives

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná. Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

If you are **upgrading phones** then you can export your settings to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc. If you do not export and import your settings then you will need to start the objectives from the beginning again. It is a good idea to back up your settings frequently just in case. See below for details.  

* **Cíl 1:** Nastavení vizualizace a hlídání, příprava bazálů a poměrů 
  * Zvolte správný zdroj glykémie ve vaší situaci. See [BG Source](../Configuration/BG-Source.md) for more information.
  * Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS. If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
  * Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data. <br />  
    _Možná budete muset čekat na další čtení glykémie, než to AndroidAPS pozná._
* **Cíl 2:** Začínáme na otevřené smyčce 
  * Vyberte Otevřenou smyčku z nastavení, nebo stisknutím a držením tlačítka Smyčka v levém horním rohu hlavní stránky.
  * Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
  * Ručně nařiďte alespoň 20 dočasných bazálních dávek, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v AndroidAPS, že jste návrhy přijali. Ujistěte se, že se tyto údaje zobrazí v AndroidAPS a Nightscoutu.
  * Enable [temp targets](../Usage/temptarget.html) if necessary. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo.  

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
  * Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default is recommended to be 2 but you should slowly work up to this until you know your settings work for you.
  * Až si budete jistí množstvím IOB, které sedí vašemu vzoru smyčky, pak snižte své cílové glykémie na požadovanou úroveň.  
* **Cíl 6:** Adjust basals and ratios if needed, and then enable autosens 
  * Můžete použít [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) jako kontrolní nástroj, že vaše bazály zůstávají přesné, anebo si udělejte tradiční bazální test.
  * Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly. <br />  
    _Nezapomeňte zaznamenat vaše zkušenosti se smyčkou do [tohoto](http://bit.ly/nowlooping) formuláře a poznačte tam AndroidAPS jako váš typ DIY smyčkového software, pokud jste tak ještě neučinili._

* **Objective 7:** Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)
  
  * Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
  * Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [SMB chapter in this wiki](../Usage/Open-APS-features.html#advanced-meal-assist-ama>advanced meal assist</a></li>
</ul></li>
<li><p><strong>Objective 8:</strong> Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)</p>

<ul>
<li>You must read the <a href=) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
  * Then you ought to  </ul></li> </ul>