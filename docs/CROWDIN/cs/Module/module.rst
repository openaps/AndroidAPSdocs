Přehled komponent 
**************************************************
AndroidAPS není jen (uživatelem sestavená) aplikace, je to jeden z několika modulů vašeho systému uzavřené smyčky. Dříve než se rozhodnete pro konkrétní komponenty, bylo by dobré podívat se také na `nastavení komponent <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_,.
   
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
--------------------------------------------------
I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby.
I když vám stále chybí další moduly, již nyní můžete ve spolupráci se svým diabetologem ověřit a upravit svůj 'profil'. 
Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.

Součástí profilu je

* BR (bazální dávky)
* ISF (citlivost na inzulin) - hodnota, o kolik klesne glykémie po podání jedné jednotky inuzlinu
* CR (sacharidový poměr) - množství sacharidů v gamech na jednu jednotku inzulinu
* DIA (doba působnosti inzulinu).

Nepoužívat inhibitory SGLT-2
--------------------------------------------------
Inhibitory SGLT-2, též nazývané glifloziny, inhibují reabsorpci glukózy v ledvinách. Vzhledem k tomu, že nevyčíslitelně snižují hladinu cukru v krvi, NESMÍTE je užívat při používání uzavřené smyčky jako je AndroidAPS! Bylo by obrovské riziko ketoacidózy nebo hypoglykémií! Kombinace této léčby se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.

Telefon
--------------------------------------------------
Potřebujete telefon s Androidem s operačním systémem Google Android 6.0 a novějším. Další hlavní verze AndroidAPS 2.7 bude podporovat pouze Android 7 a vyšší. Takže pokud přemýšlíte o novém telefonu, doporučuje se Android 8.1, ale optimisticky Android 9 nebo 10.

Uživatelé průběžné doplňují `seznam otestovaných telefonů a hodinek <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Inzulinová pumpa
--------------------------------------------------
AndroidAPS **v současné době** funguje s 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (vyžaduje navíc: aplikaci Ruffy, LineageOS nebo Android 8.1 nainstalované v telefonu)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
-`DanaRS <../Configuration/DanaS-Insulin-Pump.html>`_ (s výjimkou čerpadel s novým firmwarem v3) 
- `některé staré pumpy Medtronic <../Configuration/MedtronicPump.html>`_ od připravované verze 2.4 (vyžaduje navíc: hardware RileyLink/Gnarl, telefon s Androidem s čipovou sadou s BLE)

**Ostatní pumpy**, které potenciálně mohou fungovat s AndroidAPS, jsou uvedeny na stránce `Pumpy potenciálně použitelné v budoucnu <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Pokud je nutné, abyste si pumpu zakoupili **na vlastní náklady**, seznam různých distributorů najdete v `této tabulce <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_. Prosím uveďte podrobnosti o svém distributorovi, není-li v tabulce uveden.

**Která pumpa je pro provozování uzavřené smyčky s AndroidAPS nejlepší?**

Combo, Insight a starší pumpy Medtronic jsou dobré pumpy, které lze používat se smyčkou. Combo má také výhodu v podobě mnohem většího počtu typů infuzních setů se standardním závitem luer lock. A baterie je obyčejná, kterou můžete koupit na každé benzínce, v obchodě který má otevřeno 24 hodin denně a pokud opravdu jednu potřebujete, můžete ji ukrást/půjčit si ji z ovládání v hotelovém pokoji ;-)

Výhody pump DanaR/RS oproti Combu:

- Dana*R/RS se připojí k téměř každému telefonu s operačním systémem Android >= 5.1 bez nutnosti flashovat lineage. Pokud se váš telefon rozbije, obvykle můžete jednoduše najít náhradní telefon spolupracující s Dana*R/RS jako rychlou náhradu... což není tak snadné v případě Comba. (To se může v budoucnu změnit, až bude Android 8.1 více rozšířený)
- Počáteční spárování je s Dana* RS jednodušší. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, kdy chcete testovat nové funkce s různými pumpami.
- Combo zatím pracuje s převodem obrazu do strojově čitelné podoby. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Stále strávíte ale mnohem více času, kdy musíte být spojeni, takže může dojít k přerušení spojení, což se může snadno stát, pokud odejde od telefonu mezitím, co posíláte bolus a vaříte. 
- Combo vibruje na konci dočasného bazálu, Dana* R vibruje (nebo pípne) při SMB. V noci pravděpodobně používáte více dočasné bazální dávky než SMB.  U Dany* RS je možné nastavit, aby ani nepípala, ani nevibrovala.
- Čtení historie na RS proběhne v několika sekundách včetně sacharidů, takže lze jednoduše vyměnit telefon, zatímco je pumpa offline, a pokračovat ve smyčce, jakmile budou dostupné nějaké hodnoty z CGM.
- Všechny pumpy, se kterými AndroidAPS komunikuje, jsou vodotěsné. Pouze pumpy Dana mají také „záruku na vodotěsnost“ díky uzavřenému prostoru pro baterii a prostoru pro plnicí zásobník. 

Zdroj glykémií
--------------------------------------------------
Toto je jen krátký přehled všech CGM/FGM kompatibilních s AndroidAPS. Další podrobnosti naleznete `zde <../Configuration/BG-Source.html>`_. Rychlý tip: Pokud dokážete zobrazit údaje o glykémii v aplikaci xDrip+ nebo na webu Nightscout, můžete v AAPS jako zdroj glykémie vybrat xDrip+ (nebo Nightscout, máte-li připojení k internetu).

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: Funguje s aplikací xDrip+ nebo s upravenou aplikací Dexcom
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: Funguje s aplikací xDrip+ nebo upravenou aplikací Dexcom
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Tyto senzoru jsou poměrně staré, ale můžete si vyhledat pokyny, jak je používat s aplikací xDrip+
* `Libre 2 <../Hardware/Libre2.html>`_: Funguje s aplikací xDrip+ (nevyžaduje žádný adaptér), ale musíte se sestavit vlastní upravenou aplikaci.
* `Libre 1 <../Hardware/Libre1.html>`_: Potřebujete adaptér, jako např. Bluecon nebo MiaoMiao (sestavit nebo koupit) a aplikaci xDrip+
* `Eversense <../Hardware/Eversense.html>`_: Funguje zatím pouze v kombinaci s aplikací ESEL a upravenou aplikací Eversense (nefunguje s pumpou Dana RS a LineageOS, ale funguje dobře s pumpou DanaRS a Android nebo pumpou Combo a Lineage OS)
* `Enlite <../Hardware/MM640g.html>`_: poměrně komplikované a vyžaduje spoustu věcí dalších věcí navíc


Nightscout
--------------------------------------------------
Nightscout je open source webová aplikace, která může zaznamenávat a zobrazovat vaše údaje z CGM a údaje z AndroidAPS a vytvářet zprávy. Další informace najdete na webové stránce Nightscout project <http://www.nightscout.info/>`_. S využitím Heroku si můžete vytvořit vlastní webovou stránku Nightscout <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, nebo můžete použít poloautomatizované nastavení Nightscoutu na `zehn.be <https://ns.10be.de/en/index.html>`_ nebo aplikaci hostovat na vlastním severu (pro IT experty).

Nightscout je nezávislý na ostatních modulech. Budete jej potřebovat ke splnění Cíle 1.

Další informace o konfiguraci Nightscoutu pro použití s AndroidAPS najdete `zde <../Installing-AndroidAPS/Nightscout.html>`_.

Soubor AAPS-.apk
--------------------------------------------------
Základní součást systému. Před samotnou instalací aplikace si nejprve budete muset sestavit soubor apk (což je přípona souboru aplikace pro Android). Pokyny najdete `zde <../Installing-AndroidAPS/Building-APK.html>`_.  

Volitelné moduly
==================================================
Chytré hodinky
--------------------------------------------------
Můžete si vybrat chytré hodinky s Android Wear 1.x a novějším. Většina uživatelů uzavřené smyčky používá Sony Smartwatch 3 (SWR50), protože je to jediný model, který dokáže číst data z Dexcomu G5, i když je telefon mimo dosah. Některé další hodinky lze také upravit tak, aby fungovaly jako samostatný přijímač (další informace viz `tato dokumentace <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_).

Uživatelé průběžné doplňují `seznam otestovaných telefonů a hodinek <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Existují různé ciferníky, které můžete s AndroidAPS použít. Najdete je `zde <../Configuration/Watchfaces.html>`_.

Pro zápis telefonu nebo hodinek, které ještě nejsou uvedeny v tabulce, vyplňte prosím `formulář <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

V případě jakýchkoli problémů s tabulkou napište prosím na e-mail `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pokud chcete darovat telefon/hodinky potřebné pro testování, napište na e-mail `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
I když aplikaci xDrip+ nepotřebujete jako zdroj glykémie, stále ji můžete používat např. pro výstrahy a zobrazování glykémie. Můžete tak mít libovolný počet výstrah, specifikovat časy, kdy budou aktivní, zda mají přebít tichý režim telefonu apod. Některé informace o aplikaci xDrip+ najdete `zde <../Configuration/xdrip.html>`_. Uvědomte si prosím, že dokumentace k této aplikaci není vždy aktuální, protože vývoj aplikace je poměrně rychlý.

Ukázková instalace
==================================================
Pokud chcete příklad krok za krokem, můžete se podívat na ukázkovou instalaci. První příklad je poměrně starý, ale stále je aktuální.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Ukázková instalace <../Getting-Started/Sample-Setup.rst>
 
  
Co dělat při čekání na moduly
==================================================
Někdy to zabere nějaký čas, než budete mít všechny moduly potřebné pro uzavření smyčky. Ale žádné obavy, je mnoho věcí, které můžete při čekání udělat. Je NEZBYTNÉ ověřit a případně upravit bazální dávky (BR), sacharidový poměr (IC), citlivost na inzulin (ISF) atd. Otevřená smyčka možná bude dobrým způsobem, jak systém otestovat a seznámit se s AndroidAPS. AndroidAPS v tomto režimu poskytuje rady ohledně léčby, které musíte provádět manuálně.

Můžete si pročítat tuto dokumentaci, komunikovat s ostatními uživateli uzavřené smyčky online nebo offline, `přečíst si dokumentaci <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ nebo zkušenosti ostatních uživatelů (buďte však opatrní, ne vše musí být správně nebo pro vás daný postup nemusí být vhodný).

**Hotovo?**
Jestliže máte všechny komponenty systému AAPS pohromadě (gratulujeme!) nebo aspoň máte vše potřebné pro spuštění otevřené smyčky, měli byste si nejprve před každým novým Cílem přečíst `Popis cílů <../Usage/Objectives.html>`_ a nastavit svůj `hardware <../index.html#component-setup>`_.
