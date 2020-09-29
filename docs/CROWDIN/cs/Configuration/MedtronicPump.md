# Pumpy Medtronic

**>>>> Ovladač pump Medtronic je od verze 2.5 součástí AndroidAPS (master). Přesto byste však měli ovladač Medtronic stále považovat za beta software. K instalaci přistupujte pouze v případě, že jste zkušený uživatel. V současné době se stále potýkáme s problémem dvojitých bolusů (V ošetřeních se objeví 2 bolusy, které vedou k chybnému výpočtu IOB (jestliže se s tímto problémem setkáte, povolte prosím možnost Logování dvojitých bolusů v konfiguraci Medtronic a pošlete nám své logy)), v následující verzi aplikace by již tento problém měl být odstraněn. <<<<**

* * *

Pracuje pouze se staršími pumpami Medtronic (podrobnosti viz níže). Nefunguje s Medtronic 640G nebo 670G.

* * *

Jestliže jste začali používat ovladač Medtronic, zapište se prosím na tento [seznam](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). Slouží jen k tomu, abychom viděli, které telefony s tímto ovladačem pracují správně a které hůře (chybně). Je v něm jeden sloupec s názvem „BT restart“. Slouží ke kontrole, zda váš telefon podporuje možnost zapnutí/vypnutí BT, kterou lze použít, jestliže se pumpa nedokáže připojit, což se občas stane. Pokud si všimnete jakýchkoli jiných problémů, napište to prosím ve sloupci Komentáře.

* * *

## Hardwarové a softwarové požadavky

- **Telefon:** Ovladač Medtronic by měl pracovat s jakýmkoli telefonem s podporou BLE. **DŮLEŽITÉ: Ačkoli ovladač pracuje správně na všech telefonech, zapnutí/vypnutí Bluetooth všude nefunguje (to je požadováno, když ztratíte připojení k RileyLink a systém se nemůže zotavit automaticky – čas od času se to stává). Takže budete potřebovat získat zařízení s Android 6.0-8.1, v nejhorším případě můžete na svůj telefon nainstalovat LineeaeOS 15.1 (povinné 15.1 nebo nižší). Zabýváme se problémem se systémem Android 9, ale dosud jsme nenalezli řešení (zdá se, že funguje na některých modelech a ne na jiných, a také někdy pracuje jen na některých modelech).**
- **RileyLink/Gnarl:** Pro komunikaci s pumpou je třeba zařízení, které převádí příkazy BT z telefonu na příkazy RF, kterým pumpa rozumí. Zařízení, které to dělá, se nazývá RileyLink (můžete jej získat zde [getrileylink.org](https://getrileylink.org/)). Potřebujete stabilní verzi zařízení, což je pro starší modely firmware 0.9 (starší verze nemusí fungovat správně) nebo pro novější modely 2.2 (existují možnosti upgradu dostupné na serveru RL). Pokud máte dobrodružnou povahu, můžete také zkusit Gnarl ([zde](https://github.com/ecc1/gnarl)), který je něco jako RileyLink klon. 
- **Pumpa:** Ovladač funguje pouze s následujícími modely a verzemi firmwaru: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A nebo nižší)
    - 554/754 EU verze (firmware 2.6A nebo nižší)
    - 554/754 verze pro Kanadu (firmware 2.7A nebo nižší)
- Zkontrolujte, zda je firmware popsán v souboru [ OpenAPS docs ](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) a [ LoopDocs ](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Nastavení pumpy

- **Povolit vzdálený režim na pumpě** (Utilities -> Remote Options, vybrat Ano a na další obrazovce Přidat ID a přidat fiktivní ID (111111 nebo něco podobného). Musíte mít alespoň jedno ID na tomto seznamu vzdálených ID. Tyto volby mohou na jiném modelu pumpy vypadat jinak. Tento krok je důležitý, protože při nastavení bude pumpa naslouchat častěji kvůli vzdálené komunikaci.
- **Nastavte maximální hodnotu bazálu** na své pumpě na „maximální bazál ve vašem profilu STD“ * 4 (pokud chcete mít 400% TBR jako max). Toto číslo musí být pod 35 (jak můžete vidět na pumpě).
- **Nastavte maximální hodnotu bolusu** na své pumpě (maximum je 25)
- **Nastavte profil na STD**. To bude jediný profil, který budeme používat. Můžete to také zakázat.
- **Nastavit typ TBR** na absolutní hodnotu (nikoli v procentech)

## Konfigurace telefonu/AndroidAPS

- **Nepárujte RileyLink se svým telefonem.** Pokud jste spárovali RileyLink, pak ho AndroidAPS nedokáže najít v konfiguraci.
- Zakažte funkci Auto-rotate na telefonu (některé zařízení automaticky restartují BT spojení, což není něco, co bychom chtěli).
- Pumpu v AndroidAPS můžete nastavit dvěma způsoby: 

1. Použití průvodce (při nové instalaci)
2. Přímo na kartě Konfigurace (ikona ozubeného kola u ovladače Medtronic)

Pokud děláte novou instalaci, skočíte přímo do průvodce. Někdy, když vaše připojení BT není plně funkční (nelze se připojit k pumpě), nebudete možná moci úplně dokončit konfiguraci. V takovém případě vyberte virtuální pumpu a po dokončení průvodce můžete použít možnost 2, která obejde detekci pumpy.

![Nastavení MDT](../images/Medtronic01a.png)

Je třeba nastavit následující položky: (viz obrázek výše)

- ** Sériové číslo pumpy**: Můžete ho najít na zadní straně, SN. Použijte pouze číslice, vaše sériové číslo je 6 čísel.
- **Typ pumpy**: Typ pumpy, který máte (tj. 522). 
- **Frekvence pumpy**: Podle frekvence pumpy existují dvě verze pumpy Medtronic (pokud si nejste jisti, jakou frekvenci využívá vaše pumpa, podívejte se na [FAQ](../Configuration/MedtronicPump#faq)): 
    - pro USA & Kanadu je frekvence 916 MHz
    - pro zbytek světa je frekvence 868 MHz
- **Maximální bolus na pumpě(U)** (za hodinu): Toto musí být nastaveno stejně jako na pumpě. Jde o nastavení omezující možnou velikost bolusu. Pokud zadáte větší hodnotu, bolus nebude proveden a bude vrácena chyba. Maximální hodnota, kterou lze použít, je 25. Prosím, nastavte správnou hodnotu pro sebe tak, aby nemohlo dojít k předávkování.
- **Maximální bazál na pumpě(U/h)**: Toto musí být nastaveno stejně jako na pumpě. Jde o nastavení omezující maximální hodinový bazál. Například, pokud chcete mít nastaveno maximální množství TBR na 500 % a nejvyšší bazál je 1,5 U, pak byste měli nastavit maximální bazál na alespoň 7,5. Pokud je toto nastavení chybné (například pokud by nějaký z vašich bazálů byl vyšší, pumpa by vrátila chybu).
- **Prodleva před spuštěním bolusu (s)**: Toto je prodleva před odesláním bolusu do pumpy, takže pokud změníte názor, můžete bolus zrušit. Zrušení bolusu po spuštění není pumpou podporováno (pokud chcete zastavit bolus během vydávání, musíte pozastavit pumpu a pak pokračovat).
- **Kódování Medtronic**: Toto nastavení určuje, zda se kódování 4b6b provádí v AndroidAPS nebo na RileyLink. Máte-li produkt RileyLink s firmwarem verze 2.x, výchozí hodnota bude používat kódování hardwarové (v RileyLinku), pokud máte firmware verze 0.x, toto nastavení bude ignorováno.
- **Typ baterie (Power View)**: Pokud chcete vidět stav baterie v pumpě, musíte vybrat typ baterie, kterou používáte (momentálně jsou podporované lithiové nebo alkalické), což změní zobrazení vypočítané z procent a voltů.
- **Konfigurace RieyLink**: Toto vyhledá vaše zařízení RileyLink/GNARL.
- **Set neutral temp basals** is an option which can help prevent Medtronic pumps from beeping on the hour. If enabled if will cancel a temp basal before the hour end to prevent this from happening.

## Záložka MEDTRONIC (MDT)

![Záložka MDT](../images/Medtronic02.png)

Na záložce pumpy můžete vidět několik řádků, které zobrazují aktuální stav pumpy (a připojení).

- **RileyLink Status**: Zobrazuje stav připojení RileyLink. Telefon by měl být připojen k RileyLink celou dobu.
- **Stav pumpy**: Stav připojení pumpy může mít několik hodnot, ale většinou se zobrazí ikona spánku (když není aktivní připojení k pumpě). Když je příkaz spuštěn, možná uvidíte „Waking Up“, což znamená, že se AAPS snaží navázat spojení s pumpou, nebo popis jiného příkazu, který může být na pumpě spuštěn (např.: Get Time, Set TBR atd.).
- **Baterie**: Ukazuje stav baterie v závislosti na konfiguraci. To může být jednoduchá ikona zobrazující, zda je baterie prázdná nebo plná (červená, pokud je baterie kritická, pod 20 %), nebo procenta a napětí.
- **Poslední připojení**: Čas posledního úspěšného připojení k pumpě.
- **Poslední bolus**: Kdy byl vydán poslední bolus.
- **Základní bazál**: Toto je základní bazální dávka, která právě beží.
- **Dočasný bazál**: Dočasný bazál, který je právě spuštěn nebo je nulový.
- **Zásobník**: Kolik inzulínu je v zásobníku (aktualizováno nejméně každou hodinu).
- **Chyby**: Chyba, pokud existuje (většinou ukazuje, zda došlo k chybě v konfiguraci).

Ve spodní části máme 3 tlačítka:

- **Obnovit** pro obnovení stavu pumpy. To by mělo být použito až po dlouhé době bez připojení, protože tato akce resetuje data o pumpě (načtení historie, času, profilu, stavu baterie atd.).
- **Historie**: Zobrazí historii z pumpy (viz [níže](../Configuration/MedtronicPump#pump-history))
- **Statistiky RL**: Zobrazí statistiku RL (viz [níže](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historie pumpy

![Dialog Historie pumpy](../images/Medtronic03.png)

Historie pumpy se načítá každých 5 minut a ukládá se místně. Uchovává se pouze historie za posledních 24 hodin, takže při přidání nových položek jsou ty starší odstraněny. To je jednoduchý způsob, jak vidět historii pumpy (některé položky z pumpy se nemusí zobrazit, protože nejsou relevantní – například konfigurace funkcí, které nejsou používány programem AndroidAPS).

## Stav RL (Stav RileyLink)

![RileyLink Stav – Nastavení](../images/Medtronic04.png) ![Stav RileyLink – Historie](../images/Medtronic05.png)

Dialogové okno má dvě záložky:

- **Nastavení**: Zobrazí nastavení RileyLinku: Konfigurovaná adresa, Připojené zařízení, Stav připojení, Chyba připojení a verze firmwaru RileyLink. „Typ zařízení“ je vždy Medtronic, „model“ bude váš model, „sériové číslo“ je konfigurované sériové číslo, „frekvence“ udává, jakou frekvenci používáte, „poslední frekvence“ je poslední použitá frekvence.
- **Historie**: Zobrazuje historii komunikace, položky u RileyLink ukazují změny stavu pro RileyLink a položky Medtronic ukazují, které příkazy byly odeslány do pumpy.

## Akce

Je-li vybrán ovladač Medtronic, lze na kartu Akce přidat 3 možné akce:

- **Probudit a Naladit** - Pokud zjistíte, že AndroidAPS nekontaktoval vaší pumpu po nějakou dobu (měl by to dělat každých 5 minut), můžete vynutit Ladění. V tom případě se bude AndroidAPS snažit kontaktovat pumpu prohledáním všech dílčích frekvencí, na kterých lze pumpu kontaktovat. Pokud ji nalezne, nastaví ji jako výchozí frekvenci. 
- **Obnovit konfiguraci RileyLinku** - Pokud resetujete RileyLink/GNARL, musíte tuto akci použít, aby bylo možné překonfigurovat zařízení (sada frekvencí, sada typů frekvencí, kódování).
- **Vymazat blokování bolusu** - Když spustíte bolus, nastavíme blokování bolusu, které brání dalším příkazům, které by mohly být odeslány do pumpy. Pokud pumpu pozastavíte a znovu spustíte (chcete-li zrušit bolus), můžete toto blokování odstranit. Volba je tam jen tehdy, když je vydáván bolus... 

## Důležité poznámky

### Uživatelé OpenAPS

Když začnete používat AndroidAPS, primárním ovladačem je AndroidAPS a všechny příkazy by měly projít přes něj. Bolusy by měly být odeslány prostřednictvím AAPS a nikoli z pumpy. Aplikace sice využívá kód, který detekuje jakékoli příkazy zadané na pumpě, ale pokud můžete, snažte se to nedělat (mám za to, že jsme odstranili veškeré problémy se synchronizací historie pumpy a historie AAPS, ale stále může docházet k drobným problémům, zejména v případě, pokud „svou konfiguraci“ používáte tak, jak původně nebylo zamýšleno). Od té doby, co používám AndroidAPS, jsem s výjimkou výměny zásobníku na pumpu nesáhl. A tak by se měl systém AndroidAPS používat.

### Logování

Vzhledem k tomu, že ovladač Medtronic je velmi nový, musíte povolit protokolování, abychom mohli ladit a opravit problémy, pokud nastanou. Klepněte na ikonu v levém horním rohu, vyberte volbu Údržba a Nastavení logování. Volby Pump, PumpComm, PumpBTComm musí být zašktnuté.

### RileyLink/GNARL

Když restartujete RileyLink nebo GNARL, musíte buď provést nové ladění (akce „Probudit a naladit“), nebo znovu odeslat komunikační parametry (akce „Reset RieyLink konfigurace“), jinak komunikace selže.

### CGM

Medtronic CGM v současné době NENÍ podporován.

### Ruční použití pumpy

Měli byste se vyhnout manuálním zásahům ve své pumpě. Všechny příkazy (bolus, TBR) by měly projít přes AndroidAPS, ale pokud se stane, že provedete ruční příkazy, NEspouštějte příkazy s frekvencí méně než 3 minuty (takže pokud provedete 2× bolus (z jakéhokoli důvodu), druhý by měl být spuštěn nejméně 3 minuty po prvním).

## Změna časového pásma a letní čas (Letní čas) nebo Cestování s Medtronic pumpou a AndroidAPS

Důležité je, abyste nezapomínali, že byste nikdy neměli zakazovat smyčku, když cestujete (kromě případu, že vaše CGM nemůže pracovat v offline režimu). AAPS automaticky zjistí změny v časovém pásmu a jakmile se čas v telefonu změní, odešle příkaz do pumpy, aby se změnil čas v pumpě.

Nyní, pokud cestujete na východ a časové pásmo se mění do plusu (např. z GMT+0 na GMT+2), nebude problém s historíí pumpy a nemusíte se obávat…, ale pokud cestujete na západ a vaše časové pásmo se mění do mínusu (GMT+2 na GMT+0), pak může být synchronizace trochu ošemetná. Konkrétně to znamená, že na dalších x hodin budete muset být opatrní, protože vaše hodnota IOB by nemusela tak úplně souhlasit.

Jsme si vědomi tohoto problému a již hledáme možné řešení (viz https://github.com/andyrozman/RileyLinkAAPS/issues/145), ale prozatím je nutné při cestování vést tento problém v patrnosti.

## Nejčastější dotazy

### Můžu se podívat na stav baterie RileyLink/GNARL?

Ne. V současné době žádné z těchto zařízení toto nepodporuje a pravděpodobně nebude ani v budoucnu.

### Je GNARL úplná náhrada za RileyLink?

Ano. Autor GNARL přidal všechny funkce používané ovladačem Medtronic. Veškerá komunikace je podporována (v době vzniku tohoto textu – červen 2019). GNARL nemůže být použit pro komunikaci s Omnipodem. Nevýhodou GNARL je, že si jej musíte postavit sami a musíte mít kompatibilní verzi hardwaru.

**Poznámka od autora:** Všimněte si prosím, že software GNARL je stále experimentální, není dostatečně otestovaný a neměl by být považován za bezpečný pro použití jako RileyLink.

### Kde získám RileyLink nebo GNARL?

Jak je uvedeno výše, zařízení můžete získat zde:

- RileyLink - Je možné získat zde - [getrileylink.org](https://getrileylink.org/).
- GNARL - Zde můžete získat informace, ale zařízení je třeba objednat jinde ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### Co mám dělat, když ztratím spojení s RileyLink a/nebo pumpou?

1. Spusťte akci „Probouzení a ladění“. AAPS se pokusí najít správnou frekvenci pro komunikaci s pumpou.
2. Vypněte Bluetooth, počkejte 10 s a znovu zapněte. To vynutí opětovné připojení k RileyLinku.
3. Resetujte RileyLink. Poté, co to uděláte, nezapomeňte spustit akci „Reset RileyLink konfigurace“.
4. Zkuste body 3 a 2 dohromady.
5. Resetujte RileyLink a resetujte telefon.

### Jak určit, jakou frekvenci má moje pumpa používat

![Model pumpy](../images/Medtronic06.png)

Pokud zapnete pumpu, vpravo na prvním řádku uvidíte speciální 3písmenný kód. První dvě písmena určují typ frekvence a poslední z nich určuje barvu. Zde jsou možné hodnoty pro frekvence:

- NA - Severní Amerika (ve výběru frekvencí je třeba vybrat „US & Kanada (916 MHz)“)
- CA - Kanada (ve výběru frekvence je třeba vybrat „US & Kanada (916 MHz)“)
- WW - Worldwide (ve výběru frekvence je třeba vybrat „Worldwide (868 MHz)“)