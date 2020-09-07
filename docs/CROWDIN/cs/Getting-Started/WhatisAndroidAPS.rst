Co je systém uzavřené smyčky AndroidAPS?
**************************************************

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Co je systém umělé slinivky? Jedná se o softwarový program, jehož účelem je simulovat chování zdravé slinivky: automaticky udržovat hladinu krevního cukru v optimálním rozmezí. 

APS to sice nedokáže dělat tak dobře, jako skutečná slinivka, avšak dokáže lidem s diabetem 1 typu usnadnit zvládání nemoci, a to za použití zařízení, která jsou běžně dostupná a softwaru, který je jednoduchý a bezpečný. Mezi tato zařízení patří systém pro kontinuální monitoring glykémie (CGM), který systému AndroidAPS předává informace o aktuální glykémii, a inzulinová pumpa, která je řízena pomocí AndroidAPS tak, aby vydávala správné množství inzulínu. Aplikace komunikuje s těmito zařízeními prostřednictvím technologie bluetooth. K výpočtu správného množství inzulínu využívá speciální algoritmus, neboli sadu pravidel, vyvinutý pro jiný systém umělé slinivky zvaný OpenAPS, který na celém světě používají tisíce lidí a eviduje miliony hodin používání. 

Upozornění: Systém AndroidAPS není v žádné zemi regulován žádným zdravotnickým orgánem. Používání AndroidAPS na vlastní osobě je čistě experimentální. Vytvoření tohoto systému vyžaduje odhodlání a technické znalosti. Pokud na začátku nemáte technické znalosti, na konci je mít budete. Veškeré potřebné informace naleznete v této dokumentaci, jinde na internetu nebo je získáte od ostatních uživatelů -- můžete se jich zeptat prostřednictvím skupin na Facebooku nebo v jiných diskuzních fórech. Spousta lidí si úspěšně sestavila aplikaci AndroidAPS a nyní ji zcela bezpečně používá, nicméně je zcela nezbytné, aby každý uživatel:

* Sestavil aplikaci sám, aby skutečně pochopil, jak funguje
* Nastavil svůj individuální algoritmus dávkování ve spolupráci s lékařem nebo pomocným personálem tak, aby fungoval téměř dokonale
* Správně obsluhoval systém a dohlížel na to, zda správně funguje

.. poznámka:: 
	**Disclaimer and Warning**

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí – tento projekt nemá žádnou spojitost s a není žádným způsobem schválený společnostmi: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ nebo `Medtronic <http://www.medtronic.com/>`_.
	
Jste-li připraveni přijmout tuto výzvu, čtěte dál. 

Primární cíle AndroidAPS
==================================================

* Aplikace obsahující řadu bezpečnostních opatření. Informace o bezpečnostních opatřeních algoritmů, známých jako oref0 a oref1, najdete zde (https://openaps.org/reference-design/)
* Jediná aplikace potřebná pro management diabetu 1. typu podporující umělou slinivku a Nightscout
* Aplikace, kterou lze v snadno rozšiřovat podle potřeb každého uživatele
* Aplikace dostupná v různých verzích pro konkrétní země a jazyky
* Aplikace, kterou lze používat v režimu otevřené i uzavřené smyčky
* Aplikace, jejíž fungování je zcela transparentní: uživatelé mohou zadat parametry, uvidí výsledek a mohou provést konečné rozhodnutí
* Aplikace, která není závislá na ovladači pro konkrétní pumpu a obsahuje možnost použít „virtuální pumpu“, takže s ní uživatelé mohou bezpečně experimentovat, než ji skutečně začnou používat 
* Aplikace podporující těsnou integraci s Nightscoutem
* Aplikace, u které řídí bezpečnostní omezení sám uživatel 

Jak začít
==================================================
Veškerý tento obsah je samozřejmě velmi důležitý, ale může být na začátku docela matoucí.
Dobrou představu vám poskytne část `Přehled modulů <./Module/module.html>`_ a `Cíle <./Usage/Objectives.html>`_. Můžete se také podívat na ukázkovou instalaci s pumpou Dana, senzorem Dexcom a hodinkami Sony Smartwatch <../Getting-Started/Sample-Setup.md>`_.
 
