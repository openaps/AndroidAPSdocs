# Objectives

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná. Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

Pokud **měníte telefon**, můžete si [exportovat své nastavení](../Usage/Objectives#export-import-settings) a váš postup (již splněné cíle) bude zachován. Kromě vašeho postupu se uloží také řada jiných nastavení, například vaše bezpečnostní nastavení jako maximální bolus apod. Pokud neprovedete export a následný import svých nastavení, pak budete muset začít plnit cíle znovu od začátku. Z preventivních důvodů je vhodné si často zálohovat svá nastavení. Podrobnosti naleznete níže.  

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

**Closed loop will not correct high bg values in objective 4 as it is limited to low glucose suspend.**

**High bg values have to be corrected manually by you!**

* Select Closed Loop either from Preferences, or by pressing and holding the Open Loop button in the top left of the home screen.
* Set your target range slightly higher than you usually aim for, just to be safe.
* Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days. If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.

*The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile. Bez možnosti zvýšit bazál při srovnání křivky glykémie se vám dočasně může stávat, že po vyřešení hypoglykémie bude následovat přílišný vzestup glykémie.*

### Objective 5: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets

* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).
  
  ![max daily basal](../images/MaxDailyBasal.png)

* Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

### Objective 6: Adjust basals and ratios if needed, and then enable autosens

* You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
* Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

### Objective 7: Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)

* Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
* Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [advanced meal assist](../Usage/Open-APS-features#advanced-meal-assist-ama)

### Objective 8: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

* You must read the [SMB chapter in this wiki](../Usage/Open-APS-features#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
* Then you ought to [rise maxIOB](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 5](../Usage/Objectives#objective-5-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
* min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně

## Export a import nastavení

* **Export settings** on your old phone
  
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Exportovat nastavení
  * File location will be shown
    
    ![AAPS export settings](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone using the file location shown during export

* **Install AndroidAPS** on the new phone.
* **Importujte nastavení** do nového telefonu 
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Importujte nastavení
* **Note for Dana RS users:** 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Please pair new phone and pump manually.