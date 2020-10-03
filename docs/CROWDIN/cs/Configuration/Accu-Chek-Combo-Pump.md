# Pumpa Accu-Chek Combo

**Tento software je součástí DIY řešení a není to produkt, vyžaduje, abyste si přečetli dokumentaci, pochopili celý systém a naučili se ho používat. Není to něco, co za Vás udělá veškerý management diabetu, ale pomůže Vám k lepším výsledkům a kvalitě života, pokud investujete čas k tomu potřebný. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za ovládání Vašeho systému.**

## Hardwarové požadavky

- Roche Accu-Chek Combo (jakýkoliv firmware, funguje se všemi)
- Čtečka Smartpix, nebo jiné zařízení pro komunikaci. 360 Configuration Software pro úpravu parametrů pumpy. Roche posílá Smartpix zařízení a konfigurační software zdarma svým zákazníkům na vyžádání.
- Kompatibilní telefon: Android telefon s ROM LineageOS 14.1 (dříve CyanogenMod) nebo Android 8.1 (Oreo). LineageOS 14.1 musí být nejnovější verze od června 2017, protože potřebné změny pro párování s Combo pumpou jsou až od této doby. Seznam telefonů lze nalézt v dokumentu [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Prosím uvědomte si, že to není úplný seznam a odráží osobní uživatelské zkušenosti. Máte možnost doplnit své vlastní zkušenosti a tím pomoci dalším uživatelům.

- Vezměte na vědomí, že pokud Android 8.1 povoluje komunikaci s Combo, zůstávají nedořešené záležitosti mezi AAPS a Androidem 8.1. Zkušenější uživatelé mohou provést párování pomocí "rootnutého" telefonu a následně jej přenést na jiný "rootnutý" telefon, ve kterém jsou nainstalovány aplikace ruffy/AAPS. To umožňuje používat telefony s Android < 8.1, ale nebylo to široce testováno: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Omezení

- Rozložené bolusy a kombinované bolusy nejsou podporovány (podívejte se na [Extended Carbs](../Usage/Extended-Carbs.rst))
- Je podporován pouze jeden bazální profil.
- Nastavení více než jednoho bazálního profilu na pumpě nebo rozloženého či kombinovaného bolusu z pumpy naruší dočasný bazál a uvede smyčku do režimu zastavení při nízké glykémii na dobu 6 hodin. Za těchto podmínek nemůže smyčka správně pracovat.
- Aktuálně není možné nastavit čas a datum na pumpě, stejně jako změny času, které musí být zadány ručně (můžete deaktivovat automatickou aktualizaci času, abyste předešli alarmům v průběhu noci).
- Aktuální rozsah bazálních dávek je od 0,05 do 10 U/h. To platí i při úpravách profilu, například při zvýšení na 200 % nesmí nejvyšší bazál přesáhnout 5 U/h, protože tato hodnota bude zdvojnásobena. Obdobně platí, že při snížení na 50% musí být nejnižší bazální dávka 0,10 U/h.
- Pokud smyčka požaduje zrušení spuštěného dočasného bazálu, Combo nastaví dočasný bazál na 90 % nebo 110 % na dobu 15 minut. Důvodem je, že zrušení dočasného bazálu vyvolá alarm na pumpě, což způsobuje četné vibrace.
- Občas (jednou za pár dní) se může stát, že AAPS automaticky zruší alarm TBR CANCELLED. Funkci obnovíte stisknutím tlačítka pro obnovení v AAPS pro přenesení varování do AAPS nebo potvrzením alarmu na pumpě.
- Stabilita připojení Bluetooth se u různých telefonů liší a může způsobovat výstrahu „pumpa nedostupná“, pokud spojení není opětovně obnoveno. Pokud se tato chyba objeví, ujistěte se, že Bluetooth je aktivní a stiskněte tlačítko pro obnovení na kartě Combo, abyste zjistili, jestli to bylo příčinou problému. Pokud chyba přetrvává, restartujte telefon, což většinou pomůže. Jestliže restart nepomůže, existuje ještě další možnost. Stiskněte tlačítko na pumpě (což resetuje Bluetooth na pumpě), pumpa by měla znovu navázat spojení. Pro odstranění některého z těchto problémů se toho v tomto okamžiku příliš mnoho udělat nedá. Pokud se tyto chyby budou často opakovat, jedinou možností je vybrat jiný doporučený telefon, který bude správně fungovat s AndroidAPS a Combem (viz výše).
- Vydání bolusu z pumpy nebude vždy detekováno okamžitě (zaznamenává se při každém spojení s pumpou), v nejhorším případě to může trvat 20 minut. Bolusy na pumpě jsou kontrolovány před každým nastavením vyššího dočasného bazálu nebo bolusu pomocí AAPS, ale z důvodu omezení AAPS odmítne zapsat dočasný bazál / bolus, protože byl vypočítán podle falešných předpokladů. (-> nepodávejte bolus z pumpy! Viz kapitola *Používání*)
- Vyhněte se tomu, abyste nastavovali dočasný bazál na pumpě, smyčka předpokládá, že dočasné bazály řídí ona. Zaznamenání nového dočasného bazálu na pumpě může trvat až 20 minut a délka dočasného bazálu bude vypočítána pouze od momentu, kdy je načtena. Což v nejhorším případě může být 20 minut, které nebudou započítány do IOB. 

## Nastavení

- Nastavte pumpu pomocí 360 Config Software. Pokud tento software nemáte, kontaktujte svého obchodního zástupce Roche nebo zákaznickou linku. Registrovaným uživatelům poskytují software a také hardwarovou čtečku SmartPix pro komunikaci s pumpou. 
  - Požadované nastavení: 
    - Nastavte/nechte nastaven typ menu na "Standard", v tomto nastavení jsou zobrazeny jen ty položky, které jsou podporované, a jsou skryty zbytečné položky, které nejsou podporovány (jako je rozložený/kombinovaný bolus nebo volby více bazálních režimů). Pokud by tyto rozšířené volby byly zobrazeny, způsobí to omezení funkčnosti smyčky, protože použití smyčky v kombinaci s rozšířenými funkcemi není bezpečné.
    - Ověřte, že *Quick Info Text* je nastaven přesně na "QUICK INFO" (bez uvozovek, nastavení najdete pod *Insulin Pump Options*).
    - Nastavte maximální velikost dočasného bazálu (TBR) *Maximum Adjustment* na 500%
    - Vypněte *Signal End of Temporary Basal Rate* - alarm na konci dočasného bazálu
    - Nastavte časový krok dočasného bazálu na 15 min
    - Povolte Bluetooh
  - Doporučené (označeno modře na snímcích obrazovky): 
    - Nastavte si upozornění na nízký stav zásobníku.
    - Nastavte si maximální bolus s ohledem na svou léčbu jako ochranu před chybami softwaru.
    - Podobně si nastavte maximální hodnotu dočasného bazálu jako pojistku. Nastavte maximální dobu trvání dočasného bazálu na minimálně 3 hodiny. (Funkce odpojení pumpy nastaví dočasný bazál na 0 % na 3 hodiny).
    - Aktivujte zámek tlačítek na pumpě, abyste předešli nechtěnému vydání bolusů z pumpy, zvláště pokud jste byli zvyklí používat rychlé bolusy.
    - Nastavte čas zhasnutí displeje na 5,5 s a čas opuštění menu na 5 s. Toto pomůže AAPS k rychlejšímu obnovení v případě chyb a předejde četným vibracím, které se mohou objevit během těchto chyb.

![Screenshot z nastavení uživatelského menu](../images/combo/combo-menu-settings.png)

![Screenshot nastavení dočasného bazálu](../images/combo/combo-tbr-settings.png)

![Screenshot nastavení bolusu](../images/combo/combo-bolus-settings.png)

![Screenshot nastavení zásobníku](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.html).
- Přečtěte si dokumentaci, abyste pochopili, jak nastavit AndroidAPS.
- Zvolte v konfigurátoru AndroidAPS pera jako plugin pro pumpu. V tuto chvíli nenastavujte plugin Combo, aby nedocházelo k narušování procesu párovaní.
- Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
- Pomocí Android Studia zkompilujte a následně nainstalujte ruffy. Spusťte ruffy a spárujte v něm pumpu. Pokud se nepodaří párovaní po několika pokusech, použijte branch `pairing`, spárujte pumpu a následně se vraťte k původnímu branchi. Párovaní je v některých případech náročný proces (naštěstí se dělá pouze jednou). Může vyžadovat několik pokusů. Je potřeba rychle odpovídat na potvrzovací výzvy a často začít znovu. Když začínáte znovu, nezapomeňte odstranit párovaní z nastavení bluetooh. Jiný postup, který je možné vyzkoušet, je přejít do nastavení bluetooth ihned po začátku párovaní (to zajistí, že telefon je stále viditelný po celou dobu, co je nastavení otevřené), jakmile pumpa najde telefon, vrátit se ihned do ruffy a potvrdit párování i tam (ve chvíli, kdy pumpa zobrazí autorizační kód). Pokud se párovaní nepodaří ani po desátém pokusu, zkuste počkat 5–10 sekund, než potvrdíte na pumpě párování potom, co je zobrazen název telefonu. Pokud jste v předchozím kroku výše nastavili timeout menu na 5 s, je potřeba tuto hodnotu zvýšit. Tento postup byl u některých uživatelů úspěšný. Jedna z posledních možností při neúspěchu párovaní je možné rušení, zkuste párování v jiné místnosti, ideálně tam, kde není příliš WiFi a bluetooth zařízení. Minimálně jednomu člověku velmi pomohlo párovat mimo radiově zarušený prostor.
- Pokud použiváte AAPS s ruffy, nikdy nespouštějte a nepoužívejte ruffy přímo. Po úspěšném párovaní restartujte telefon, aby si AAPS mohl spustit ruffy na pozadí a sami už ruffy nespouštějte.
- U nikdy nepoužité pumpy je nutné před zahájením párovaní vydat aspoň jeden bolus, aby se vytvořil záznam v historii. Bez aspoň jednoho záznamu v historii je AAPS nefunkční.
- Před spuštěním Combo pluginu v AAPS ověřte, že máte správně nastavený a aktivovaný (!) profil. Ověřte dvakrát, že profil v AAPS odpovídá vašemu bazálnímu profilu. AAPS po spojení s pumpou zapíše bazální profil z AAPS do pumpy do profilu 1. Potom aktivujte Combo plugin. Stiskněte tlačítko *Obnovit* na záložce Combo, abyste zahájili komunikaci s pumpou Combo.
- Ověřte správné nastavení pumpy. Ve chvíli, kdy je pumpa ve stavu **Odpojeno**, použijte AAPS k nastavení dočasného bazálu (TBR) na 500 % po dobu 15 min a následně zkuste vydat malý bolus. Ověřte na pumpě, že dočasný bazál se nastavil na 500 % a bolus je zaznamenán v historii. AAPS také zobrazí, že obě akce (dočasný bazál a bolus) byly provedeny.

## Proč nefunguje párování pumpy pomocí aplikace „ruffy“ (tipy na řešení)?

Existuje několik možných důvodů. Vyzkoušejte tyto kroky:

1. Vložte ** novou nebo nabitou baterii ** do pumpy. Podívejte se na podrobnosti do návodu do části Baterie. Ujistěte se, že pumpa je velmi blízko telefonu.

![Combo by mělo být vedle telefonu](../images/Combo_next_to_Phone.png)

2. Vypněte nebo odstraňte jakékoliv jiné Bluetooth zařízení, abyste eliminovali možné rušení při párování. Jakákoliv paralelní komunikace s rozhraním Bluetooth nebo výzva k vytvoření připojení může narušit proces párování.

3.     Odstraňte všechna současná připojená zařízení v Bluetooth menu pumpy. 
      ** Bluetooth nastavení / připojení / odebrat **, dokud nebude zobrazeno **No Device**.
      

4. Vymažte již spárovaný telefon z pumpy. Settings / Bluetooth, remove the paired device
5. Ujistěte se, že na pozadí není spuštěna smyčka aplikace AAPS. Deaktivuje smyčku v AAPS.
6. Nyní spusťte aplikaci Ruffy v telefonu. Stiskněte tlačítko Reset a vymažte staré párování. Poté stiskněte tlačítko Connect.
7. V Bluetooth menu pumpy přejděte na ** ADD DEVICE / ADD CONNECTION**. Stiskněte *CONNECT!** *Kroky 5 a 6 musí následovat za sebou v krátkém časovém intervalu.
8. Nyní se na pumpě ukáže BT název telefonu a nabídne možnost párování. S potvrzením a stisknutím na pumpě je nutné počkat aspoň 5 s. Jinak pumpa neodešle požadavek pro párování korektně.

* Jestliže je nastaveno zhasnutí displeje na 5 s, můžete zkusit nastavit na 40 s (původní nastavení). Ze zkušenosti je potřeba cca 5–10 s počkat, než je pumpa v telefonu vidět a je vybrána. Často se stane, že párovaní vyprší bez úspěšného výsledku. Později můžete vrátit zhasnuti LCD na 5 s, jak je doporučeno pro AAPS. * Pokud váš telefon pumpu vůbec nikdy nevidí, je dost možné, že Bluetooth vašeho telefonu není kompatibilní s pumpou. Ujistěte se, že používáte novou verzi systému **LineageOS ≥ 14.1** nebo **Android ≥ 8.1 (Oreo)**. Pokud máte možnost, zkuste jiný telefon. Pod níže uvedeným odkazem najdete seznam telefonů, které již byly s AAPS vyzkoušeny \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

9. Na pumpě se zobrazí desetimístný bezpečnostní kód. Ruffy zobrazí obrazovku pro zadání. Po zadání kódu do aplikace Ruffy byste měli být připraveni.
10. Restartujte telefon.
11. Nyní můžete restartovat AAPS smyčku.

## Používání

- Mějte na pamětí, že toto není produkt, zvláště na začátku potřebuje uživatel pochopit a monitorovat systém, jeho limity a jak může dojít k chybě. Je důrazně doporučováno nepoužívat tento systém, pokud ho uživatel není schopen plně pochopit.
- Přečtěte si dokumentaci k OpenAPS na https://openaps.org, abyste pochopili algoritmus smyčky, na které je systém AndroidAPS založen.
- Přečtěte si Wiki, abyste se seznámili se systémem AndroidAPS a pochopili, jak funguje: http://wiki.AndroidAPS.org
- Propojení combo s ruffy/aaps používá stejné rozhraní jako originální glukometr. Glukometr zrcadlí obrazovku pumpy a simuluje stisk tlačítek na pumpě. Přenos obrazovky a zpětný přenos tlačítek je to, co dělá aplikace ruffy. Komponenta `scripter` dekóduje obrazovku a automaticky zadává bolusy, dočasné bazály a další operace, které jsou s pumpou potřeba. Také se stará o to, aby vše proběhlo korektně. AAPS komunikuje s komponentou scripter a pomocí ní zadává příkazy vycházející z algoritmu smyčky. Tento způsob komunikace má pár omezení: Je relativně pomalý (ale stále dostatečně rychlý pro běžné použití), nastavení dočasného bazálu (TBR) nebo podání bolusu způsobuje vibrace pumpy.
- Integrace pumpy Combo do AAPS počítá s tím, že všechny příkazy pro pumpu jsou zadávány výhradně prostřednictvím AAPS. Bolus zadaný přímo na pumpě je sice detekován a načten do AAPS, ale může dojít ke zpoždění až 20 minut, než to AAPS zjistí. Zpětné načítání bolusů zadaných přímo na pumpě je JEN bezpečnostní opatření a nemělo by být nikdy používáno. (Smyčka stejně potřebuje znát i sacharidy, které nelze na pumpě zadat. Toto je další důvod, proč by veškeré operace měly být prováděny výhradně prostřednictvím AAPS). 
- Nenastavujte a nerušte dočasný bazál (TBR) na pumpě. Smyčka předpokládá, že řídí dočasné bazály, bez tohoto předpokladu nemůže spolehlivě fungovat. Důvod je ten, že nelze určit čas spuštění dočasného bazálu zadaného uživatelem přímo na pumpě.
- AAPS používá první bazální profil, ten je při startu aplikace načten a následně nastaven dle bazálního profilu v AAPS. Bazální profil neměňte ručně na pumpě. Tato změna je jako bezpečnostní opatření detekována a opět přepsána na nastavení platné v AAPS (nespoléhejte však na bezpečností opatření a detekci nežádoucích změn – toto je pouze bezpečnostní opatření).
- V zájmu snížení rizika náhodného vydání bolusu doporučujeme používat zámek klávesnice pumpy. Zejména pokud jste dříve používali pumpu s možností rychlého bolusu. Výhodou zámku je rovněž skutečnost, že náhodný stisk klávesy nepřeruší právě probíhající komunikaci mezi AAPS a pumpou.
- Občas se stane, že je vyvolán alarm „zrušený bolus“ nebo „zrušená dočasná bazální dávka“. Toto se čas od času stane a je to způsobeno přerušením komunikace mezi telefonem a pumpou v průběhu zadávaní příkazu. AAPS se snaží znovu připojit a zrušit alarm. Také se snaží znovu poslat neúspěšný příkaz (toto neplatí pro bolus, který se z bezpečnostních důvodů znovu neposílá). Proto alarm ani zrušení příkazu jako takové nejsou problém. Ale obvykle trvá až 30 sekund, než se AAPS podaří alarm zrušit a zaslat příkaz znova. Je to z toho důvodu, že dokud nezhasne obrazovka pumpy, není možné znovu navázat komunikaci s pumpou. Pokud alarm pumpy přetrvává, je možné, že automatické zrušení alarmu selhalo. V tomto případě je nutné, aby alarm zrušil uživatel ručně.
- Pokud je vyvolán alarm kvůli vybité baterii nebo docházejícímu inzulínu v průběhu bolusu, AAPS tento alarm automaticky zruší a zobrazí notifikaci. V případě, že k této situaci dojde ve chvíli, kde není aktivní spojení s pumpou, je možné jít na záložku Combo v AAPS a stisknout tlačítko Obnovit. Alarm je zrušen a notifikace o důvodu alarmu uložena do AAPS.
- Pokud se AAPS nepodaří zrušit alarm o zrušení dočasné bazální dávky nebo jiný alarm, stisknutí tlačítka Obnovit na záložce Combo naváže spojení AAPS s pumpou, které zruší alarm a zobrazí notifikaci o důvodu alarmu. Je bezpečné tak učinit, protože hned v další operaci smyčky je nastavení provedeno znovu.
- Pro všechny ostatní alarmy vycházející z pumpy je zobrazena varovná hláška v záložce Combo. Pro některé, jako je například E4 – Ucpání systému, je zobrazena notifikace i na hlavní obrazovce. Chyby (E1–10) vždy zobrazí urgentní notifikaci. Systém AAPS nikdy neruší závažné chyby na pumpě, nechá pumpu vydávat zvukový alarm a vibrovat, aby uživatele upozornil na kritickou situaci, která potřebuje řešení.
- Po párovaní nikdy nepoužívejte aplikaci ruffy (AAPS spustí ruffy pro svoje použití na pozadí). Použití ruffy paralelně s AAPS není možné.
- Pokud dojde k chybě AAPS (nebo zastavení z debugger) při vzájemné komunikaci AAPS a pumpy, je nutné ukončit RUFFY v systémových prostředcích. Po restartování AAPS se RUFFY znovu spustí. Restartování telefonu je většinou nejjednodušší cesta, pokud nejde aplikace ukončit prostřednictvím systému.
- Jestliže probíhá komunikace AAPS s pumpou (na pumpě je zobrazeno logo Bluetooth), nemačkejte žádná tlačítka na pumpě.