Nastavení
***********************************************************
* **Otevřete nastavení** klepnutím na tři tečky v pravém horním rohu hlavní obrazovky.

  .. image:: ../images/Pref2020_Open2.png
    :alt: Otevřít nastavení

* Do nastavení příslušného pluginu (např. záložka pumpa) se dostanete klepnutím na Nastavení plugginu.

  .. image:: ../images/Pref2020_OpenPlugin2.png
    :alt: Otevřít nastavení pluginu

* **Podmenu** může být otevřeno kliknutím na trojúhelník pod nadpisem menu.

  .. image:: ../images/Pref2020_Submenu2.png
    :alt: Otevřít submenu

* Pomocí **filtru** v horní části obrazovky se můžete rychle dostat k nastavení, které zrovna potřebujete. Stačí začít psát část textu, který hledáte.

  .. image:: ../images/Pref2021_Filter.png
    :alt: Předvolby > Filtry


Obecné
===========================================================

**Jednotky**

* V závislosti na vašich preferencích nastavte jednotky na mmol/l nebo mg/dl.

**Jazyk**

* Nová možnost je používat výchozí jazyk telefonu (doporučeno). 
* V případě, že chcete mít AAPS v jiném jazyce než je standardní jazyk telefonu si můžete vybrat z široké nabídky dalších jazyků.
* Pokud používáte různé jazyky, můžete se někdy setkat s jazykovým mixem. To je způsobeno chybou androida, kdy v některých případech nefunguje přepsání výchozího jazyka.

  .. image:: ../images/Pref2020_General.png
    :alt: Nastavení > Obecné

**Jméno pacienta**

* Hodí se v případě, že používáte víc nastavení (např. u rodin se 2 diabetickými dětmi).

Ochrana
-----------------------------------------------------------
Hlavní heslo
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Abyste mohli `exportovat nastavení <../Usage/ExportImportSettings.html>`_, je nutné nastavit hlavní heslo. Od verze 2.7 jsou totiž exporty šifrované.

   ** Biometrická ochrana nefunguje na telefonech OnePlus. Jde o známý problém OnePlus.**

* Klepnutím na tři tečky v pravém horním rohu hlavní obrazovky otevřete Nastavení
* Klepněte na trojúhelník pod "Obecné"
* Klepněte na položku "Hlavní heslo"
* Zadejte heslo, potvrďte ho, a klepněte na tlačítko Ok.

  .. image:: ../images/MasterPW.png
    :alt: Nastavení hlavního hesla
  
Ochrana nastavení
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Chraňte své nastavení pomocí hesla nebo biometrického ověření telefonu (t.j. `AndroidAPS pro děti <../Children/Children.html>`_).
* Pokud chcete použít hlavní heslo pouze pro zabezpečení `exportovaného nastavení <../Usage/ExportImportSettings.html>`_, můžete si vytvořit Vlastní heslo.
* Pokud používáte vlastní heslo, klepněte na řádek "Nastavení hesla", a nastavte heslo tak, jak je popsáno výše, `nad <../Configuration/Preferences.html#master-password>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Ochrana

Ochrana aplikace
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Je-li aplikace chráněna, musíte k otevření AAPS zadat heslo nebo použít biometrické ověření telefonu.
* Je-li zadáno chybné heslo, aplikace se okamžitě vypne. Pokud byla předtím úspěšně spuštěna, zůstává stále běžet na pozadí.

Ochrana bolusu
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Ochrana bolusu je užitečná, pokud AAPS používá malé dítě, a vy podáváte `bolus prostřednictvím SMS <../Children/SMS-Commands.html>`_.
* V níže uvedeném příkladu vidíte výzvu k biometrické ochraně. Pokud biometrické ověření nefunguje, klepněte na místo nad bílou výzvou k zadání, a zadejte hlavní heslo.

  .. image:: ../images/Pref2020_PW.png
    :alt: Výzva pro biometrickou ochranu

Vzhled
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Můžete si vybrat ze čtyř typů vzhledů:

  .. image:: ../images/Pref2021_SkinWExample.png
    :alt: Výběr vzhledu + příklady

* "Vzhled pro nízké rozlišení" má kratší popisky a nezobrazuje stáří/úroveň, aby zbylo dost místa na obrazovkách s velmi malým rozlišením.
* Rozdíly mezi ostatními vzhledy závisí na orientaci telefonu.

Na výšku
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* ** Původní vzhled** a **Tlačítka jsou vždy zobrazena na spodní části obrazovky** jsou stejné
* **Velký displej** v porovnání s ostatními vzhledy má větší velikost grafů

Na šířku
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Při použití **Původní vzhled** a **Velký displej**, musíte posouvat dolů, abyste zobrazili tlačítka v dolní části obrazovky
* **Velký displej** v porovnání s ostatními vzhledy má větší velikost grafů

  .. image:: ../images/Screenshots_Skins.png
    :alt: Vzhledy v závislosti na orientaci telefonu

Přehled
===========================================================

* V sekci Přehled můžete nastavit preference pro domácí obrazovku.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Předvolby > Přehled

Nechat obrazovku zapnutou
-----------------------------------------------------------
* Užitečné při předvádění. 
* Tento režim spotřebovává velké množství energie, takže je nutné připojit mobil do nabíječky.

Tlačítka
-----------------------------------------------------------
* Určete, která tlačítka se zobrazí ve spodní části domovské obrazovky.
* Podle vyznačených souvislostí na obrázcích můžete nadefinovat hodnoty trlačítek sacharidů a inzulínu pro snadnější zadávání v dialogových oknech.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Nastavení > Tlačítka

Quick Wizard
-----------------------------------------------------------
* Pokud máte často svačinu nebo jídlo, můžete použít Rychlý bolus pro snadnější vkládání hodnot sacharidů a nastavení základních výpočtů.
* V nastavení si určíte, v jakém časovém období se má tlačítko zobrazit na domácí obrazovce - právě jedno tlačítko na jedno období.
* Když kliknete na tlačítko Rychlý bolus, AAPS provede výpočty a navrhne bolus pro zadané množství sacharidů s ohledem na aktuální hodnoty (glykémie nebo aktivního inzulínu, pokud je nastaven). 
* Navržený bolus musí být potvrzen, aby byl následně vydán.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Předvolby > Tlačítko průvodce
  
Výchozí nastavení dočasných cílů
-----------------------------------------------------------
* `Dočasné cíle (DC) <../Usage/temptarget.html#temp-targets>`_ vám umožní nastavit na určitou dobu změněnou cílovou hodnotu glykémie.
* S nastavením základních hodnot DC můžete jednodušeji měnit své cílové hodnoty glykémie pro aktivity, blížící se jídlo atd.
* Dlouze stiskněte cíl v pravém horním rohu domácí obrazovky nebo použijte zaškrtávací políčka v dialogu Sacharidy po kliknutí na oranžové tlačítko Sacharidy na domovské obrazovce.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Nastavení > Výchozí dočasné cíle
  
Standardní množství inzulinu pro Plnění/Doplňování
-----------------------------------------------------------
* Pokud chcete plnit hadičku nebo kanylu prostřednictvím AAPS, můžete to udělat prostřednictvím `obrazovky Akce <../Getting-Started/Screenshots.html#action-tab>`_.
* Přednastavené hodnoty se dají měnit v tomto dialogu.

Rozsah zobrazování
-----------------------------------------------------------
* Určuje, jaká část grafu na domácí obrazovce bude bude vaším cílovým rozsahem a bude podbarvena zeleně.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Předvolby > Rozsah vizualizace

Krátké názvy modulů
-----------------------------------------------------------
* Umožňuje vidět víc názvů obrazovek na obrazovce najednou. 
* Například název "OpenAPS AMA" bude zobrazen jako "OAPS" a "NS CLIENT" jako "NSCL" atd.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Předvolby > Karty

Zobrazovat kolonku poznámky v dialozích ošetření
-----------------------------------------------------------
* Přidává možnost doplňovat k záznamům o ošetření krátkou textovou poznámku v dialozích, kde se zadávají (Bolusová kalkulačka, Sacharidy, Inzulín...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Předvolby > Poznámky v dialogových oknech ošetření
  
Stavové indikátory
-----------------------------------------------------------
Stavové indikátory zobrazují vizuální varování pro 
      
   * Stáří senzoru
   * Úroveň baterie pro některé chytré čtečky (další podrobnosti naleznete na stránce `screenshoty <../Getting-Started/Screenshots.html#sensor-level-battery>`_).
   * Stáří inzulínu (doba použití aktuálního zásobníku)
   * Stav zásobníku (jednotky)
   * Stáří kanyly
   * Stáří baterie v pumpě
   * Úroveň nabití baterie pumpy (%)

* Pokud dojde k dosažení prahové hodnoty, zobrazí se hodnoty žlutě.
* Pokud dojde k dosažení kritické prahové hodnoty, hodnoty se zobrazí červeně.
* Ve verzích předcházejících AAPS 2.7 muselo být nastavení stavových indikátorů provedeno v nastavení Nightscoutu.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Předvolby > Stavové indikátory

Rozšířená nastavení (přehled)
-----------------------------------------------------------

  .. image:: ../images/Pref2021_OV_Adv.png
    :alt: Předvolby > Stavové indikátory

Podat tuto část z výsledku kalkulace [%]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Obecné nastavení umožňující zvolit, že bude vydána jen určitá část z vypočteného bolusu. 
* Použijete-li bolusovou kalkulačku, bude vydána pouze procentuální část (musí být mezi 10 a 100) z vypočítaného bolusu. 
* Procentuální hodnota je zobrazena v kalkulačce.

Poradce pro bolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Pokud spustíte `Poradce pro bolus <../Getting-Started/Screenshots.html#bolus-wizard>`_ a vaše glykémie je nad 10 mmol (180 mg/dl), bude nabídnut korekční bolus.
* Pokud odsouhlasíte korekční bolus, zaznamená se **žádné sacharidy**.
* Alarm se spustí v okamžiku, kdy hodnota glykémie bude na úrovni, kdy bude vhodné začít s jídlem.
* Musíte znovu otevřít `Poradce pro bolus <../Getting-Started/Screenshots.html#bolus-wizard>`_ a zadat množství sacharidů, které chcete sníst.

  .. image:: ../images/Home2021_BolusWizard_CorrectionOffer.png
    :alt: Zpráva poradce pro bolus

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Volba pro povolení superbolusu v bolusové kalkulačce.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ se používá jako prevence proti prudkému růstu glykémie po jídle, a spočívá ve "vypůjčení" bazálního inzulínu z následujících 2 hodin.

Bezpečnostní omezení ošetření
===========================================================
Věk pacienta
-----------------------------------------------------------
* Bezpečnostní limity jsou nastaveny na základě věku, který jste zvolili v tomto nastavení. 
* Pokud začnete narážet na pevně nastavené limity (jako například na maximální bolus), je čas posunout se o stupeň výš. 
* Nastavení vyššího věku než je ve skutečnosti může vést k předávkování inzulínem při chybném nastavení množství inzulínu (například vynecháním desetinné čárky v dialogu). 
* Chcete-li zjistit, jaké máte pevně nastavené bezpečnostní limity, podívejte se na popis Vámi používaného algoritmu `na této stránce <../Usage/Open-APS-features.html>`_.

Maximální povolený bolus [U]
-----------------------------------------------------------
* Určuje maximální velikost bolusu, jakou může AAPS poslat najednou. 
* Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele. 
* Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo. 
* Toto omezení se vztahuje i na výsledky bolusové kalkulačky.

Maximální povolené sacharidy [g]
-----------------------------------------------------------
* Určuje maximální množství sacharidů, se kterým může bolusový kalkulátor AAPS počítat.
* Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele. 
* Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

Smyčka
===========================================================
Typ smyčky
-----------------------------------------------------------
* Přepíná mezi uzavřenou, otevřenou smyčkou i pozastavením při nízké glykémii (LGS)
* **Otevřená smyčka** znamená, že návrhy dočasného bazálu jsou provedeny na základě vašich dat, a zobrazí se jako oznámení. Po manuálním potvrzení bude příkaz pro podání inzulinu odeslán do pumpy. Pouze v případě že máte nastavenou virtuální pumpu je nutné inzulín aplikovat ručně.
* **Uzavřená smyčka** znamená, že dočasné bazály jsou automaticky, bez jakéhokoliv potvrzení z vaší strany, posílány přímo do pumpy.  
* **Pozastavení při nízké glykémii** dává možnost vstoupit do režimu Pozastavení při nízké glykémii bez nutnosti měnit aktuální cíl.

Minimální změna pro výzvu [%]
-----------------------------------------------------------
* Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky. 
* Ke snížení počtu oznámení můžete zadat buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu.
* Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

Vylepšený asistent pro jídlo (AMA) nebo Super Micro bolus (SMB)
===========================================================
V závislosti na nastavení v ' konfiguraci <../Configuration/Config-Builder.html>`_ si můžete vybrat mezi dvěma algoritmy:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ - stav algoritmu v roce 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - nejnovější algoritmul pro pokročilé uživatele

Nastavení OpenAPS AMA
-----------------------------------------------------------
* Jsou-li sacharidy zadány správně, reaguje systém po bolusu na jídlo rychleji, a to díky aplikování vysoké dočasné bazální dávky. 
* Více podrobností o nastavení a Autosens můžete najít v `Dokumentaci OpenAPS <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Max. U/h, které lze nastavit pro dočas. bazál
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Toto nastavení funguje jako bezpečnostní limit, aby se zabránilo AndroidAPS v nastavení nebezpečně vysokého bazálu. 
* Hodnota se udává v jednotkách za hodinu (U/h). 
* Doporučuje se nastavit toto na rozumnou hodnotu. Je doporučeno vzít si ze svého profilu **nejvyšší hodnotu bazálu** a **vynásobit jí 4**. 
* Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 0.5U/h, dostanete po vynásobení 4 hodnotu 2U/h.
* Viz také `podrobný popis funkce <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>`_.

Maximální bazální IOB [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Maximální hodnota dodatečného bazálního inzulínu (v jednotkách), o který může smyčka navýšit Váš normální bazál. 
* Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu. 
* Tato hodnota **nebere v potaz bolusový IOB**, pouze IOB bazálu.
* Tato hodnota je počítána a monitorována nezávisle na vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.

Když začínáte se smyčkou, **je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal dodatečný bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii. To je důležitý krok pro:

* získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
* perfektní vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
* zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby začal přidávat bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu** ve Vašem profilu a vynásobit ji 3**. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 0.5U/h, dostanete po vynásobení 3 hodnotu 1.5U/h.

* Začněte tedy s touto hodnotou, a postupem času ji opatrně navyšujte. 
* Toto jsou samozřejmě pouze návrhy; u každého člověka to je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně, a přidávejte pomalu.

**Poznámka: Jako bezpečnostní prvek je u dospělého pacienta natvrdo nastaveno maximální bazální IOB na 7U.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ sleduje odchylky glukózy v krvi (pozitivní/negativní/neutrální).
* Na základě těchto odchylek se pokusí zjistit jak citlivý/odolný jste na inzulín, a následně upraví velikost bazální dávky a hodnotu ISF.
* Pokud vyberete "Autosens také nastavuje cíl", bude algoritmus upravovat i vaši cílovou hodnotu glykémie.

Pokročilé nastavení (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Obvykle v tomto dialogu není potřeba měnit žádná nastavení!
* Pokud zde chcete, i přes varování, provádět změny, ujistěte se, že jste si prostudovali detaily v `dokumentaci OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ abyste pochopili co děláte.

Nastavení OpenAPS SMB
-----------------------------------------------------------
* Na rozdíl od AMA `SMB <../Usage/Open-APS-features.html#super-microbolus-smb>`_ nepoužívá SMB pro kontrolu hladiny glukózy dočasné bazály, ale převážně malých super mikrobolusů.
* Abyste mohli začít používat SMB, musíte mít dokončen `cíl 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_.
* První tři nastavení jsou vysvětleny `výše <../Configuration/Preferences.html#max-u-h-a-temp-basal-can-be-set-to>`_.
* Podrobnosti o různých volbách jsou popsány v sekci `Funkce OpenAPS <../Usage/Open-APS-features.html#enable-smb>`_.
* *Jak často budou SMB podávány v minutách** je omezení které určuje, že SMB budou vydávané pouze každé 4 minuty (defaultní hodnota). Tato hodnota brání systému vydávat SMB příliš často (např. v případě nastavení dočasného cíle). Toto nastavení byste neměli změnit, pokud přesně nevíte, jaké mohou být následky. 
* Je-li nastaveno 'Citlivost zvyšuje cíl' nebo 'Rezistence snižuje cíl', bude `Autosens <../Usage/Open-APS-features.html#autosens>`_ v závislosti na odchylkách glykémie měnit cílovou hodnotu glylémie.
* Je-li cíl upraven, bude na domovské obrazovce zobrazen se zeleným pozadím.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Cíl upraven Autosens
  
Oznámení vyžadovaných sacharidů
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Tato funkce je k dispozici pouze v případě, je-i vybrán algoritmus SMB.
* V případě že referenční design detekuje potřebu sacharidů, navrhe konzumaci dalších sacharidů.
* V tomto případě obdržíte oznámení, které může být odloženo na 5, 15 nebo 30 minut.
* Kromě toho se na domovské obrazovce v sekci COB zobrazí požadované sacharidy.
* Prahovou hodnotu lze nastavit - minimální množství sacharidů potřebných ke spuštění oznámení. 
*V případě potřeby může být notifikace vyžadovaných sacharidů odeslána do Nightscoutu. Notifikace se pak zobrazí v Nightscoutu a bude vysílána.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Zobrazení požadovaných sacharidů na domovské obrazovce
  
Pokročilé nastavení (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Obvykle v tomto dialogu není potřeba měnit žádná nastavení!
* Pokud zde chcete, i přes varování, provádět změny, ujistěte se, že jste si prostudovali detaily v `dokumentaci OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ abyste pochopili co děláte.

Nastavení absorpce sacharidů
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Nastavení absorpce sacharidů

min_5m_carbimpact
-----------------------------------------------------------
* Algoritmus používá BGI (vliv na glukózu v krvi) k určení, kdy jsou absorbovány sacharidy. 
* Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. 
* V situacích, kdy absorpci sacharidů nelze počítat dynamicky na základě reakcí vaší glykémie, je použita tato výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.
* Zjednodušeně řečeno: algoritnuls ví jak by se měla chovat vaše glykémie, je-li ovlivněna podaným inzulínem apod. 
* Kdykoli dojde k pozitivní odchylce od očekávaného chování, je rozloženo/absorbováno určité množství sacharidů. Velká změna = více sacharidů atp. 
* Hodnota min_5m_carbimpact definuje výchozí vliv absorpce sacharidů za 5 minut. Více informací najdete v `dokumentaci OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standardní hodnota pro AMA je 5, pro SMB 8.
* Graf COB na domovské obrazovce označuje kdy se používá min_5m_impact tím, že se na vrcholu zobrazí oranžový kroužek.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB graf
  
Max. doba absorpce sacharidů
-----------------------------------------------------------
* Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

Pokročilé nastavení - autosens ratio
-----------------------------------------------------------
* Nastavte min. a max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Běžné standardní hodnoty (max. 1.2 a min. 0.7) by se neměly měnit.

Nastavení pumpy
===========================================================
Tyto volby se budou lišit v závislosti na tom, který ovladač inzulínové pumpy jste vybrali v konfiguračním programu ' Konfigurace <../Configuration/Config-Buil-Builder.html#pump>`_.  Spárujte a nastavte svou pumpu podle pokynů pro jednotlivé pumpy:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic <../Configuration/MedtronicPump.html>`_

Používáte-li AndroidAPS pouze jako otevřenou smyčku, vyberte v nastavení Virtuální pumpu.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Nastavte si *URL Nightscoutu* (např. https://vasejmeno.herokuapp.com) a *API heslo* (12 znakové heslo uložené v proměnných Heroku).
* Toto umožní komunikaci (zápis i čtení) mezi Nightscoutem a AndroidAPS.  
* Pokud jste uvízli v cíli 1, prověřte možné překlepy.
* **Ujistěte se, že adresa URL na konci NEOBSAHUJE /api/v1/.**
* *Zaznamenávat spuštění aplikace do NS* vloží do záznamů portálu ošetření v Nightscoutu poznámku pokaždé, když je aplikace spuštěna.  Aplikace by se neměla restartovat více než jednou denně. Pokud k tomu odchází častěji, jde obvykle o problém (např. když pro AAPS není zakázána optimalizace baterie). 
* Jsou-li aktivovány změny v `lokálním profilu <../Configuration/Config-Builder.html#local-profile-recommended>`_, jsou nahrány do Nightscoutu.

Nastavení připojení
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: Nastavení připojení NSClient  
  
* Omezit nahrávání do Nightscoutu pouze na Wi-Fi nebo dokonce na některé Wi-Fi SSID.
* Chcete-li používat pouze konkrétní síť Wi-Fi, můžete zadat její WiFi SSID. 
* Větší množství SSID lze oddělit středníkem. 
* Chcete-li smazat všechny SSID, nechte políčko prázdné.

Nastavení alarmů
-----------------------------------------------------------
* Volby alarmu umožňují vybrat, jaké výchozí alarmy Nightscoutu se mají v aplikaci používat.  
* Aby alarmy fungovaly, je třeba nastavit v proměnných Nightscoutu (Heroku...) hodnoty glykémie pro Urgentní, Vysokou, Nízkou a Urgentní `nízkou glykémii <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* Budou fungovat pouze v případě že budete mít připojení k Nightscoutu, a jsou určeny pro rodiče/pečovatele. 
* Pokud máte v telefonu zdroj CGM (např. xDrip + nebo upravenou Dexcomalikaci), pak místo nich použijte tyto alarmy.

Rozšířená nastavení (NSClient)
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: Rozšířené nastavení NSClient

* Většina možností v pokročilém nastavení je samovysvětlující.
* *Povolení lokálního odesílání* zajistí odesílání dat i do jiných aplikací v mobilu, např. xDrip+. 

  * Upravená aplikace Dexcom nevysílá přímo do xDrip+. 
  * Pro použití xDrip+ alarmů musíte `přejít do AAPS <../Configuration/Config-Builder.html#bg-source>`_ a povolit lokální odesílání.
  
* Chcete-li používat autotune, musíte mít vybráno *Vždy používat absolutní hodnoty bazálu*. Další informace o Autotune naleznete v `Dokumentaci OpenAPS <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_.

SMS komunikátor
===========================================================
* Volba se zobrazí pouze v případě, je-li v konfiguraci povolen SMS komunikátor `Config Builder <../Configuration/Config-Buil-Builder.html#sms-communicator>`_.
* Toto nastavení umožňuje vzdálené ovládání telefonu s AAPS posláním SMS s textem jako je zastavení smyčky, nebo poslání bolusu.  
* Další informace jsou popsány v `SMS příkazech <../Children/SMS-Commands.html>`_.
* Dodatečná bezpečnost je zajištěna použitím autentizační aplikace a dodatečného PIN na konci tokenu.

Automatizace
===========================================================
Vyberte, jaká služba určování polohy se použije:

* Používat pasivní polohu: AAPS zjistí polohu pouze v případě, že ji budou požadovat ostatní aplikace
* Používat zjištění polohy podle sítě: Poloha podle vaší Wi-Fi sítě
* Use GPS location (Attention! May cause excessive battery drain!)

Místní výstrahy
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Místní upozornění

* Nastavení by mělo být samovysvětlující.

Možnosti dat
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Možnosti dat

* Můžete pomáhat s vývojem AAPS zasláním hlášení o pádu vývojářům.

Nastavení údržby
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Nastavení údržby

* Standardní příjemce logů je logs@androidaps.org.
* Pokud vyberete *Šifrovat exportovaná nastavení*, jsou zašifrována pomocí vašeho `hlavního hesla <../Configuration/Preferences.html#master-password>`_. V tomto případě je nutné při každém exportu nebo importu nastavení zadat hlavní heslo.

Open Humans
===========================================================
* Můžete pomoci komunitě tím, že daruje vaše data do výzkumných projektů! Podrobnosti jsou popsány na stránce `Open Humans <../Configuration/OpenHumans.html>`_.
* V předvolbách můžete definovat, kdy budou data odeslána

   * pouze v případě připojení k WiFi
   * pouze při nabíjení
