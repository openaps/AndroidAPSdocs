Přehled komponent 
**************************************************
AndroidAPS není jen (vlastnoručně sestavená) aplikace, je to jeden z několika modulů vašeho systému uzavřené smyčky. Dříve než se rozhodnete pro konkrétní komponenty, bylo by dobré podívat se také na `nastavení komponent <../index.html#component-setup>`_.
   
.. obrázek:: ../images/modules.png
  :alt: Přehled komponent

.. poznámka:: 
   **DŮLEŽITÉ BEZPEČNOSTNÍ UPOZORNĚNÍ**

   Základy bezpečnosti AndroidAPS zmíněné v této dokumentaci jsou postaveny na bezpečnostních vlastnostech hardwaru používaného k vybudování vašeho systému. Je zásadně důležité, abyste používali pouze testované, plně funkční a pro uzavřenou smyčku schválené inzulinové pumpy a CGM. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. Pokud najdete nebo získáte rozbité, upravené nebo doma vyrobené inzulínové pumpy nebo CGM, NEPOUŽÍVEJTE JE pro vytvoření systému AndroidAPS.

   Kromě toho je stejně důležité používat pouze originální spotřební materiál, jako jsou sety a zásobníky, schválené výrobcem pro použití s vaší pumpou nebo CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.
   
   V neposlední řadě nesmíte užívat SGLT-2 inhibitory (glifloziny), které snižují hadinu cukru v krvi.  Kombinace se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.

Nezbytné moduly
==================================================
Správný individuální algoritmus dávkování pro léčbu vašeho diabetu
----------------------------------------------------------
I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby.
I když vám stále chybí další moduly, již nyní můžete ve spolupráci se svým diabetologem ověřit a upravit svůj 'profil'. 
Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.

Součástí profilu je

* BR (bazální dávky)
* ISF (citlivost na inzulin) - hodnota, o kolik klesne glykémie po podání jedné jednotky inuzlinu
* CR (sacharidový poměr) je množství sacharidů v gramech na jednu jednotku inzulinu
* DIA (doba působnosti inzulinu).

Nepoužívat inhibitory SGLT-2
--------------------------------------------------
Inhibitory SGLT-2, též nazývané glifloziny, inhibují reabsorpci glukózy v ledvinách. Vzhledem k tomu, že nevyčíslitelně snižují hladinu cukru v krvi, NESMÍTE je užívat při používání uzavřené smyčky jako je AndroidAPS! Bylo by obrovské riziko ketoacidózy nebo hypoglykémií! Kombinace této léčby se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.

Telefon
--------------------------------------------------
Aktuální verze AndroidAPS vyžaduje u telefonů s Androidem minimálně verzi Google Android 8.0 nebo vyšší. Takže pokud přemýšlíte o novém telefonu, je sice doporučená minimállní verze Android 8.1, ale optimální volba je Android 9 nebo 10.
Uživatelům je důrazně doporučováno, aby z bezpečnostních důvodů udržovali používanou aplikaci AndroidAPS na aktuální verzi. Pro uživatele, kteří ale nemohou používat zařízení s verzí Android minimálně 8, je vhodná verze AndroidAPS 2.6.1.4, která zůstává dostupná ze `starého úložiště kódů <https://github.com/miloskozak/androidaps>`_.

Uživatelé průběžné doplňují `seznam otestovaných telefonů a hodinek <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Inzulinová pumpa
--------------------------------------------------
AndroidAPS **v současné době** funguje s 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (vyžaduje navíc: aplikaci Ruffy, LineageOS nebo Android 8.1 nainstalované v telefonu)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `Dana-i/RS <../Configuration/DanaRS-Insulin-Pump.html>`_
- `některé staré pumpy Medtronic <../Configuration/MedtronicPump.html>`_ s nadcházející verzí 2.4 (`s přídavným komunikačním zařízením <../Module/module.html#pridavna-komunikacni-zarizeni>`_)
- `Omnipod Eros <../Configuration/OmnipodEros.html>`_ s nadcházející verzí (`s přídavným komunikačním zařízením <../Module/module.html#pridavna-komunikacni-zarizeni>`_)

**Ostatní pumpy**, které potenciálně mohou fungovat s AndroidAPS, jsou uvedeny na stránce `Pumpy potenciálně použitelné v budoucnu <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Pokud je nutné, abyste si pumpu zakoupili **na vlastní náklady**, seznam různých distributorů najdete v `této tabulce <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_. Prosím uveďte podrobnosti o svém distributorovi, není-li v tabulce uveden.

Přídavná komunikační zařízení
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Pro staré pumpy Medtronic je potřeba přídavné komunikační zařízení (spojené s telefonem), aby dělalo "tlumočníka" překládajícího rádiový signál z pumpy na bluetooth pro komunikaci s telefonem. Nezapomeňte vybrat správné zařízení, které odpovídá vaší pumpě.

   -  |OrangeLink|  `Domovská stránka OrangeLink <https://getrileylink.org/product/orangelink>`_    
   -  |RileyLink| `433MHz RileyLink <https://getrileylink.org/product/rileylink433>`__
   -  |EmaLink|  `Domovská stránka Emalink <https://github.com/sks01/EmaLink>`__ - `Kontakt  <mailto:getemalink@gmail.com>`__  
   -  |DiaLink|  DiaLink - `Contact Info <mailto:Boshetyn@ukr.net>`__     
   -  |LoopLink|  `Domovská stránka LoopLink <https://www.getlooplink.org/>`__ - `Kontakt <https://jameswedding.substack.com/>`__ - Netestováno

**Která pumpa je pro provozování uzavřené smyčky s AndroidAPS nejlepší?**

Combo, Insight a starší pumpy Medtronic jsou dobré pumpy, které lze používat se smyčkou. Combo má také výhodu v podobě mnohem většího počtu typů infuzních setů se standardním závitem luer lock. A baterie je obyčejná, kterou můžete koupit na každé benzínce, v obchodě který má otevřeno 24 hodin denně a pokud opravdu jednu potřebujete, můžete ji ukrást/půjčit si ji z ovládání v hotelovém pokoji ;-)

The advantages of the DanaR/RS and Dana-i vs. Combu:

- The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... což není tak snadné v případě Comba. (To se může v budoucnu změnit, až bude Android 8.1 více rozšířený)
- Initial pairing is simpler with the Dana-i/RS. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, kdy chcete testovat nové funkce s různými pumpami.
- Combo zatím pracuje s převodem obrazu do strojově čitelné podoby. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Stále strávíte ale mnohem více času, kdy musíte být spojeni, takže může dojít k přerušení spojení, což se může snadno stát, pokud odejde od telefonu mezitím, co posíláte bolus a vaříte. 
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. V noci pravděpodobně používáte více dočasné bazální dávky než SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- Všechny pumpy, se kterými AndroidAPS komunikuje, jsou vodotěsné. Pouze pumpy Dana mají také „záruku na vodotěsnost“ díky uzavřenému prostoru pro baterii a prostoru pro plnicí zásobník. 

Zdroj glykémií
--------------------------------------------------
Toto je jen krátký přehled všech CGM/FGM kompatibilních s AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Rychlý tip: Pokud dokážete zobrazit údaje o glykémii v aplikaci xDrip+ nebo na webu Nightscout, můžete v AAPS jako zdroj glykémie vybrat xDrip+ (nebo Nightscout, máte-li připojení k internetu).

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: BOYDA is mandatory as of version 3.0 (see `release notes <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for details)
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: Funguje s aplikací xDrip+ nebo upravenou aplikací Dexcom
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Tyto senzoru jsou poměrně staré, ale můžete si vyhledat pokyny, jak je používat s aplikací xDrip+
* `Libre 2 <../Hardware/Libre2.html>`_: Funguje s aplikací xDrip+ (nevyžaduje žádný adaptér), ale musíte se sestavit vlastní upravenou aplikaci.
* `Libre 1 <../Hardware/Libre1.html>`_: Potřebujete adaptér, jako např. Bluecon nebo MiaoMiao (sestavit nebo koupit) a aplikaci xDrip+
* `Eversense <../Hardware/Eversense.html>`_: Funguje zatím pouze v kombinaci s aplikací ESEL a upravenou aplikací Eversense (nefunguje s pumpou Dana RS a LineageOS, ale funguje dobře s pumpou DanaRS a Android nebo pumpou Combo a Lineage OS)
* `Enlite (MM640G/MM630G) <../Hardware/MM640g.html>`_: poměrně komplikované a vyžaduje spoustu věcí dalších věcí navíc


Nightscout
--------------------------------------------------
Nightscout je open source webová aplikace, která může zaznamenávat a zobrazovat vaše údaje z CGM a údaje z AndroidAPS a vytvářet zprávy. Další informace najdete na webové stránce Nightscout project <http://nightscout.github.io/>`_. Vlastní `Nightscout <https://nightscout.github.io/nightscout/new_user/>`_ můžete vytvořit za pomoci poloautomatizovaného nastavení na `zehn.be <https://ns.10be.de/en/index.html>`_, nebo ho můžete hostovat na vlastním severu (pro IT experty).

Nightscout je nezávislý na ostatních modulech. Budete jej potřebovat ke splnění Cíle 1.

Další informace o konfiguraci Nightscoutu pro použití s AndroidAPS najdete `zde <../Installing-AndroidAPS/Nightscout.html>`__.

Soubor AAPS-.apk
--------------------------------------------------
Základní součást systému. Před samotnou instalací aplikace si nejprve budete muset sestavit soubor apk (což je přípona souboru aplikace pro Android). Pokyny najdete `zde <../Installing-AndroidAPS/Building-APK.html>`__.  

Volitelné moduly
==================================================
Chytré hodinky
--------------------------------------------------
Můžete si vybrat chytré hodinky s Android Wear 1.x a novějším. Většina uživatelů uzavřené smyčky používá Sony Smartwatch 3 (SWR50), protože je to jediný model, který dokáže číst data z Dexcomu G5, i když je telefon mimo dosah. Některé další hodinky lze také upravit tak, aby fungovaly jako samostatný přijímač (další informace viz `tato dokumentace <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_).

Uživatelé průběžné doplňují `seznam otestovaných telefonů a hodinek <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Existují různé ciferníky, které můžete s AndroidAPS použít. Najdete je `zde <../Configuration/Watchfaces.html>`__.

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
I když aplikaci xDrip+ nepotřebujete jako zdroj glykémie, stále ji můžete používat např. pro výstrahy a zobrazování glykémie. Můžete tak mít libovolný počet výstrah, specifikovat časy, kdy budou aktivní, zda mají přebít tichý režim telefonu apod. Některé informace o aplikaci xDrip+ najdete `zde <../Configuration/xdrip.html>`__. Uvědomte si prosím, že dokumentace k této aplikaci není vždy aktuální, protože vývoj aplikace je poměrně rychlý.
  
Co dělat při čekání na moduly
==================================================
Někdy to zabere nějaký čas, než budete mít všechny moduly potřebné pro uzavření smyčky. Ale žádné obavy, je mnoho věcí, které můžete při čekání udělat. Je NEZBYTNÉ ověřit (a případně upravit) bazální dávky (BR), sacharidový poměr (ICR), citlivost na inzulin (ISF) atd. Otevřená smyčka možná bude dobrým způsobem, jak systém otestovat a seznámit se s AndroidAPS. AndroidAPS v tomto režimu poskytuje rady ohledně léčby, které musíte provádět manuálně.

Můžete si pročítat tuto dokumentaci, být v kontaktu s ostatními uživateli uzavřené smyčky online nebo offline, `přečíst si dokumentaci <../Where-To-Go-For-Help/Background-reading.html>`_ nebo zkušenosti ostatních uživatelů (buďte však opatrní, ne vše musí být správně nebo pro vás daný postup nemusí být vhodný).

**Hotovo?**
Jestliže máte všechny komponenty systému AAPS pohromadě (gratulujeme!) nebo aspoň máte vše potřebné pro spuštění otevřené smyčky, měli byste si nejprve před každým novým Cílem přečíst `Popis cílů <../Usage/Objectives.html>`_ a nastavit svůj `hardware <../index.html#component-setup>`_.

..
	Zdroj aliasů obrázku pro odkazování obrázků jménem s větší flexibilitou polohy


..
	Hardwarové a softwarové požadavky
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|			image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |DiaLink|		      image:: ../images/omnipod/DiaLink.png
