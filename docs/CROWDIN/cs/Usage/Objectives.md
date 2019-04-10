# Objectives

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná. Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

If you are **upgrading phones** then you can [export your settings](../Usage/Objectives#export-import-settings) to keep your progress through the objectives. Kromě vašeho postupu se uloží také řada jiných nastavení, například vaše bezpečnostní nastavení jako maximální bolus apod. Pokud neprovedete export a následný import svých nastavení, pak budete muset začít plnit cíle znovu od začátku. Z preventivních důvodů je vhodné si často zálohovat svá nastavení. Podrobnosti naleznete níže.  

* **Cíl 1:** Nastavení vizualizace a hlídání, příprava bazálů a poměrů 
  * Zvolte správný zdroj glykémie pro svou kombinaci zařízení. Další informace viz [Zdroj glykémií](../Configuration/BG-Source.md).
  * Vyberte správnou pumpu na kartě Konfigurace (zvolte Virtuální pumpu, pokud používáte model pumpy bez ovladače v AndroidAPS – pouze pro otevřenou smyčku) a na kartě Pumpa ověřte, že váš model pumpy dokáže komunikovat s aplikací AndroidAPS a přenášet do ní svůj stav. Pokud používáte pumpu DanaR, ujistěte se, že jste postupovali podle pokynů v části [Inzulínová pumpa DanaR](../Configuration/DanaR-Insulin-Pump.md) a že je správně propojená s AndroidAPS.
  * Postupujte podle pokynů na stránce [Nightscout](../Installing-AndroidAPS/Nightscout.md) a ujistěte se, že Nightscout může přijímat a zobrazovat tato data. <br />&nbsp;  
    _Možná bude nutné vyčkat na příští odečet glykémie, než ho AndroidAPS rozpozná._ <br />&nbsp;  
     
* **Cíl 2:** Spuštění otevřené smyčky 
  * Vyberte možnost Otevřená smyčka buď v Nastavení, nebo stisknutím a podržením tlačítka Smyčka v levém horním rohu hlavní obrazovky.
  * Projděte [Předvolby](../Configuration/Preferences.md), které provedou úpravy nastavení.
  * Ručně nařiďte alespoň 20 dočasných bazálních dávek, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v AndroidAPS, že jste návrhy přijali. Ujistěte se, že se tyto údaje zobrazí v AndroidAPS a Nightscoutu.
  * Je-li to nutné, povolte [dočasné cíle](../Usage/temptarget.md). Použijte dočasný cíl Hypoglykémie, abyste systému zabránili v příliš agresivních korekcích, pokud by glykémie po vyřešení hypoglykémie stoupala. <br />&nbsp;  
     
* **Cíl 3:** Porozumět otevřené smyčce, včetně jejích doporučení ohledně dočasných bazálů 
  * Začněte chápat úvahy, které se skrývají za doporučeními dočasných bazálních dávek, tím, že si projdete [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) a budete sledovat graf předpovědí na domovské obrazovce AndroidAPS / v Nightscoutu. Také si v aplikaci procházejte výstupy z výpočtů na záložce OpenAPS.   
    &nbsp;  
    _Cíl nastavte o něco výše než obvykle, dokud si nebudete jisti správností výpočtů a nastavení. Systém umožňuje nastavit dolní cíl mezi 4 až 10 a horní cíl musí být v rozpětí 5 až 15. Dočasný cíl jako jediná hodnota může být kdekoliv mezi 4 až 15. Cíl je hodnota, o kterou se opírá kalkulace, nikoliv hodnota, na které byste chtěli svou glykémii držet. Jestliže je váš cíl velmi široký rozsah (řekněme 3 nebo více mmol široký), často se vám stane, že systém nebude navrhovat příliš úprav do dočasných bazálů, protože předpověď glykémie bude často spadat do daného širokého rozsahu. Asi si budete chtít zkoušením upravit svůj cíl tak, aby tvořil úzký rozsah (řekněme 1 nebo méně mmol široký), a přitom sledujte, jak se mění chování systému. Rozsah pro zobrazení (zelené křivky) na grafu pro hodnoty, na kterých chcete držet svou glykémii, můžete zvětšit tím, že zadáte různé hodnoty v Nastavení > Rozsah pro zobrazení._   
      
    _Zastavte se zde, pokud provozujete otevřenou smyčku na virtuální pumpě – neklikejte na tlačítko Kontrola na konci tohoto cíle._ <br />&nbsp;  
    
* **Cíl 4:** Spustit uzavřenou smyčku pouze se zastavováním při nízké glykémii 
  * Vyberte Uzavřená smyčka buď z Nastavení, nebo stisknutím a držením tlačítka Otevřená smyčka z levého horního rohu hlavní stránky.
  * Nastavte cílový rozsah mírně vyšší, než který je pro vás běžný, jen pro jistotu.
  * Sledujte, jak jsou aktivní dočasné bazální dávky buď prohlížením modrého textu bazálu na hlavní stránce anebo v modrém vykreslení bazálů na grafu.
  * Ujistěte se, že AndroidAPS je teď nastavený tak, že po dobu 5 dní nemusíte řešit nízké glykémie. Pokud stále řešíte časté nebo vážné výskyty nízkých glykémií, zvažte revizi vašeho DIA, bazálů, ISF a sacharidových poměrů. <br />&nbsp;  
    _Systém přepíše vaše nastavení maxIOB na nulu, což znamená, že pokud glykémie klesá, může snížit bazál, ale pokud glykémie stoupá, pak zvýší bazál pouze v případě, že IOB je záporný (z předchozího sníženého bazálu nebo zastavené pumpy). Pokud IOB není záporný, vaše bazální dávky zůstanou stejné jako ve vámi zvoleném aktivním profilu. Bez možnosti zvýšit bazál při srovnání křivky glykémie se vám dočasně může stávat, že po vyřešení hypoglykémie bude následovat přílišný vzestup glykémie._ <br />&nbsp;  
    
* **Cíl 5:** Vylaďování uzavřené smyčky, zvýšení max IOB nad 0 a postupné snižování cílů glykémie 
  * Zvyšte svůj 'Maximální celkový IOB, přes který OpenAPS nemůže jít' (v kontextu OpenAPS se tato hodnota nazývá 'max-iob') nad 0 na více než 1 den. Doporučené výchozí nastavení je 2, ale k této hodnotě byste se měli pomalu dopracovat, dokud si nebudete jisti, že vaše nastavení je správné.
  * Až si budete jistí množstvím IOB, které sedí vašemu vzoru smyčky, pak snižte své cílové glykémie na požadovanou úroveň. <br />&nbsp;  
     
* **Cíl 6:** Upravit bazály a koeficienty, když bude potřeba, a povolit automatickou detekci citlivosti na inzulín 
  * Můžete použít [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) jako kontrolní nástroj, že vaše bazály zůstávají přesné, anebo si udělejte tradiční bazální test.
  * Povolte [automatickou detekci citlivosti](../Usage/Open-APS-features.md) po dobu 7 dní a sledujte bílou křivku na grafu na hlavní stránce, jak se vaše citlivost na inzulín může snižovat a zvyšovat v důsledku cvičení nebo hormonů apod., při tom sledujte na kartě OpenAPS výslednou zprávu, jak podle toho systém AndroidAPS upravil vaše bazály a/nebo cíle. <br />&nbsp;  
    _Nezapomeňte zaznamenat své zkušenosti se smyčkou do [tohoto formuláře](http://bit.ly/nowlooping) a poznačte tam AndroidAPS jako váš typ DIY softwarové smyčky, pokud jste tak dosud neučinili._ <br />&nbsp;  
     
* **Cíl 7:** Povolit další funkce oref0 pro běžné používání, jako je AMA (advanced meal assist) 
  * Nyní byste si již měli být jisti tím, jak AndroidAPS funguje a která nastavení jsou pro váš konkrétní diabetes nejlepší
  * Následně můžete po dobu 28 snů vyzkoušet další funkce, které nabízejí ještě větší úroveň automatizace, jako je například [advanced meal assist](../Usage/Open-APS-features.html#advanced-meal-assist-ama) <br />&nbsp;  
    
* **Cíl 8:** Povolit další funkce oref1 pro běžné používání, jako je SMB (super micro bolus) 
  * You must read the [SMB chapter in this wiki](../Usage/Open-APS-features.html#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
  * Následně byste měli [zvýšit maxIOB](../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) tak, aby SMB správně fungovaly. maxIOB nyní zahrnuje veškerý IOB, nejen ten z bazálů. To znamená, že pokud podáme bolus 8 U na jídlo a maxIOB je nastaven na 7 U, nebudou vydány žádné SMB, dokud IOB neklesne pod 7 U. Dobrým začátkem je nastavit maxIOB jako „průměrný bolus na jídlo + 3× maximální denní bazální dávka“
  * Výchozí hodnota absorpce „min_5m_carbimpact“ se při přechodu z AMA na SMB mění ze 3 na 8. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně

## Export a import nastavení

* **Exportujte nastavení** na svém starém telefonu
  
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Exportovat nastavení
  * Zobrazí se umístění souboru exportu
    
    ![Nastavení exportu AAPS](../images/AAPS_ExportSettings.png)

* **Přeneste** nastavení ze starého telefonu – použijte stejné umístění souboru, jaké se zobrazilo při exportu

* **Nainstalujte AndroidAPS** na nový telefon.
* **Importujte nastavení** do nového telefonu 
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Importujte nastavení
* **Poznámka pro uživatele Dana RS:** 
  * Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také importována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth. Nový telefon a pumpu prosím spárujte ručně.