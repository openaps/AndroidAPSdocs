Cíle
**************************************************

AndroidAPS má sadu Cílů, které musíte dokončit a které vás provedou jeho funkcemi a nastaveními tak, aby pro vás smyčka nebyla nebezpečná.  Zajistí vám, že jste nastavili všechny detaily z dříve uvedených sekcí správně, že rozumíte tomu, co váš systém dělá a proč, a že mu můžete důvěřovat.

Pokud měníte telefon, můžete si `exportovat své nastavení <../Usage/ExportImportSettings.html>`_ a váš postup (již splněné cíle) bude zachován. Kromě vašeho postupu se exportem/importem uloží řada jiných nastavení, například vaše bezpečnostní nastavení jako maximální bolus apod.  Pokud neabsolvujete export/import svých nastavení, pak budete muset začít plnit cíle znovu od začátku.  Je dobrý nápad `zálohovat Vaše nastavení <../Usage/ExportImportSettings.html>`_ často jen tak pro jistotu.

Pokud se chcete v cílech vrátit zpět, podívejte se na vysvětlení pod <../Usage/Objectives.html#go-back-in-objectives>`_.
 
Cíl 1: Nastavit vizualizaci a monitoring, analyzovat bazály a poměry
====================================================================================================
* Zvolte správný zdroj glykémie pro svou kombinaci zařízení.  Více informací viz `Zdroj glykémií <../Configuration/BG-Source.html>`_.
* Vyberte správnou pumpu na kartě Konfigurace (zvolte Virtuální pumpu, pokud používáte model pumpy bez ovladače v AndroidAPS – pouze pro otevřenou smyčku) a na kartě pumpy ověřte, že váš model pumpy dokáže komunikovat s aplikací AndroidAPS a přenášet do ní svůj stav.  
* Pokud používáte pumpu DanaR, ujistěte se, že jste postupovali podle pokynů v části `Inzulinová pumpa DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ a že je propojená s AndroidAPS.
* Postupujte podle pokynů na stránce `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ a ověřte, že Nightscout může přijímat a zobrazovat tato data.
* Všimněte si, že adresa URL v NSClientu musí být ** BEZ /api/v1 /** na konci - viz `Nastavení NSClientu v předvolbách <../Configuration/Preferences.html#nsclient>`__.

*Možná bude nutné počkat na další odečet glykémie, než AndroidAPS změnu zaregistruje.*

Cíl 2: Naučte se ovládat AndroidAPS
==================================================
* Proveďte několik akcí v AndroidAPS, jak je popsáno v tomto cíli.
* Pro přístup k úkolům klikněte na oranžový text „Nedokončeno“.
* Odkazy budou poskytnuty jako vodítko pro případ, že dosud nejste obeznámeni se specifickou akcí.

  .. image:: ../images/Objective2_V2_5.png
    :alt: Screenshot cíl 2

Cíl 3: Prokázat své znalosti
==================================================
* Správně zodpovězte otázky s výběrem možných odpovědí a prokažte znalost AndroidAPS.
* Klikněte na oranžový text „Nedokončeno“ pro přístup na stránku s otázkou a možnými odpověďmi.

  .. image:: ../images/Objective3_V2_5.png
    :alt: Screenshot cíl 3

* Odkazy budou poskytnuty jako vodítko pro případ, že si nejste jisti odpovědí.
* Otázky pro cíl 3 byly od AAPS verze 2.8 kompletně přepsány rodilými mluvčími. Nové otázky pokrývají stejná témata a několik nových.
* Tyto nové otázky způsobí, že budete mít nezodpovězené otázky v cíli 3, přestože jste již dříve cíl 3 úspěšně dokončili.
* Nezodpovězené otázky budou mít na vás vliv pouze pokud budete startovat nový cíl. Jinými slovy: Pokud jste již dokončili všechny cíle, můžete počkat a odpovědět na nové otázky později bez ztráty funkcí AAPS.

Cíl 4: Začít s otevřenou smyčkou
==================================================
* Vyberte možnost Otevřená smyčka buď v Nastavení, nebo stisknutím a podržením tlačítka Smyčka v levém horním rohu hlavní obrazovky.
* Projděte si `Nastavení <../Configuration/Preferences.html>`_ a nastavte je tak, jak potřebujete.
* Ručně nařiďte alespoň 20 dočasných bazálních dávek, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v AndroidAPS, že jste návrhy přijali.  Ujistěte se, že se tyto údaje zobrazí v AndroidAPS a Nightscoutu.
* Povolte `dočasné cíle <../Usage/temptarget.html>`_ pokud je to nutné. Použijte dočasný cíl Hypoglykémie, abyste systému zabránili v příliš agresivních korekcích, pokud by glykémie po vyřešení hypoglykémie stoupala. 

Snížení počtu oznámení
--------------------------------------------------
Pro snížení počtu rozhodnutí, která mají být provedena v režimu otevřené smyčky, nastavte cílový rozsah na 90–150 mg/dl nebo 5,0–8,5 mmol/l.
* Možná budete chtít v noci zvýšit horní limit (nebo zakázat otevřenou smyčku). 
* V Předvolbách můžete nastavit minimální procento navrhované změny bazální dávky.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Minimální změna pro požadavek Open Loop
     
* Navíc, nemusíte reagovat každých 5 minut na všechna doporučení…

Cíl 5: Porozumění otevřené smyčce, včetně doporučení pro dočasné bazály
====================================================================================================
* Začněte chápat úvahy, které vedou k doporučení dočasných bazálních dávek, tím, že si projdete `logiku <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ a budete sledovat graf předpovědí na `domovské obrazovce AndroidAPS <../Getting-Started/Screenshots.html#prediction-lines>`_/ v Nightscoutu. Také si v aplikaci procházejte výstupy z výpočtů na záložce OpenAPS.
 
Cíl nastavte o něco výše než obvykle, dokud si nebudete jisti správností výpočtů a nastavení.  Systém umožňuje

* dolní cílová hodnota musí být minimálně 4 mmol (72 mg/dl) nebo nejvýše 10 mmol (180 mg/dl) 
* horní cílová hodnota musí být minimálně 5 mmol (90 mg/dl) nebo nejvýše 15 mmol (225 mg/dl)
* dočasný cíl jako jediná hodnota může být kdekoliv mezi 4 až 15 mmol (72 mg/dl až 225 mg/dl)

Cíl je hodnota, o kterou se opírá kalkulace, nikoliv hodnota, na které byste chtěli svou glykémii držet.  Pokud je váš cíl velmi široký (řekněme 3 nebo více mmol široký), často se objeví pouze málo AAPS akcí. To je proto, že predikovaná glykémie bude někde v tomto širokém rozmezí a proto není doporučováno mnoho dočasných bazálů. 

Můžete zkusit experimentovat a nastavit své cíle tak, aby nebyl rozptyl hodnot přílš velký (řekněme 1 mmol / 20 mg/l nebo méně) a přitom sledujte, jak se tím chování systému mění.  

Na grafu můžete zobrazit širší rozsah (zelené čáry) pro hodnoty, v nichž chcete udržet hladinu glukózy v krvi, zadáním různých hodnot do `Předvoleb <../Configuration/Preferences.html>`__ > Rozsah pro zobrazení.
 
.. image:: ../images/sign_stop.png
  :alt: Znaménko Stop

Zastavte se zde, pokud používáte otevřenou smyčku s virtuální pumpou – neklikejte na tlačítko Zkontrolovat na konci tohoto cíle.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. obrázek:: ../images/blank.png
  :alt: prázdný

Cíl 6: Začátek uzavřené smyčky - s pozastavením pumpy při nízké glykémii
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Varování
  
Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
* You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend, otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.** 
* If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.

.. image:: ../images/Objective6_negIOB.png
    :alt: Příklad negativního IOB

* Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
* Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon or selecting from `Preferences <../Configuration/Preferences.html>`__.
* Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Bez možnosti zvýšit bazál při srovnání křivky glykémie se vám dočasně může stávat, že po vyřešení hypoglykémie bude následovat přílišný vzestup glykémie.


Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets
====================================================================================================
* Select 'Closed Loop' either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Toto doporučení by mělo být považováno za výchozí bod. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: max denní bazál

* Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.



Cíl 8: Upravit bazály a poměry, když bude potřeba, a povolit automatickou detekci citlivosti na inzulín
====================================================================================================
* Pro kontrolu správnosti nastavení bazálu můžete použít `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_, nebo si udělejte klasický test bazálu.
* Povolte <a href="../Usage/Open-APS-features.md">automatickou detekci citlivosti</a> po dobu 7 dní a sledujte bílou křivku na grafu na hlavní stránce, jak se vaše citlivost na inzulín může snižovat a zvyšovat v důsledku cvičení nebo hormonů apod. Při tom sledujte na kartě OpenAPS výslednou zprávu, jak podle toho systém AndroidAPS upravil vaše bazály a/nebo cíle. a sledujte na záložce zpráv OpenAPS, jak AndroidAPS odpovídajícím způsobem upravuje bazály a/nebo cíle.

*Nezapomeňte zaznamenat své zkušenosti se smyčkou do* `tohoto formuláře <https://bit.ly/nowlooping>`_ *a označte tam AndroidAPS jako váš typ DIY softwaru uzavřené smyčky, pokud jste tak ještě neučinili.*


Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)
====================================================================================================
* Musíte si přečíst `Kapitolu o SMB zde na wiki<../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ a `Kapitolu oref1 v dokumentaci k openAPS <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_, abyste porozuměli tomu, jak SMB funguje, zejména na čem stojí princip nulových dočasných bazálů.
* Následně byste měli `zvýšit maxIOB <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ tak, aby SMB správně fungovaly. maxIOB nyní zahrnuje veškerý IOB, nejen ten z bazálů. To znamená, že pokud byl vydán bolus 8 U na jídlo a maxIOB je 7 U, nebudou vydány žádné SMB, dokud IOB neklesne pod 7 U. Pro začátek je dobré nastavit hodnotu maxIOB jako „průměrný bolus k jídlu + 3× maximální denní bazální dávka“ (maximální denní bazální dávka = maximální bazální dávka za hodinu během dne – např. viz `<../Usage/Objectives2019.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>Cíl 7`_)
* Výchozí hodnota absorpce „min_5m_carbimpact“ se při přechodu z AMA na SMB mění ze 3 na 8. Přecházíte-li z AMA na SMB, musíte to změnit ručně.


Objective 10: Automation
====================================================================================================
* You have to start objective 10 to be able to use `Automation <../Usage/Automation.html>`_.
* Ujistěte se, že jste splnili všechny zkoušky v cíli 3 `<../Usage/Objectives.html#cil-3-prokazat-sve-znalosti>`_.
* Dokončení předchozích cílů nebude mít vliv na další cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!


Návrat k předchozímu cíli
====================================================================================================
Chcete-li se z jakéhokoliv důvodu vrátit k předchozímu cíli, stačí tak učinit kliknutím na „vymazat dokončené“.

.. image:: ../images/Objective_ClearFinished.png
  :alt: Návrat zpět

Objectives in Android APS before version 3.0
====================================================================================================
One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found `here <../Usage/Objectives_old.html>`_.
