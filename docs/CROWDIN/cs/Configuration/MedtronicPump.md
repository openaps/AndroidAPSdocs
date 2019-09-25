# Pumpy Medtronic

**> > > > Ovladač pump Medtronic prozatím není součástí hlavní verze AndroidAPS. Bude k dispozici v další hlavní verzi. <<<<**

* * *

Pracuje pouze se staršími pumpami Medtronic (podrobnosti viz níže). Nefunguje s Medtronic 640G nebo 670G.

* * *

Prozatím byl Medtronic ovladač testován s malou testovací skupinou a je stále považován za beta software, což znamená, že až do většího otestování budete muset povolit inženýrský režim, aby bylo možné vybrat ovladač v AndroidAPS.

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

![Nastavení MDT](../images/Medronic01.png)

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

## Záložka MEDTRONIC (MDT)

![Záložka MDT](../images/Medtronic02.png)

Na kartě pumpy můžete vidět několik řádků, které zobrazují aktuální stav pumpy (a připojení).

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

### Logování

Vzhledem k tomu, že ovladač Medtronic je velmi nový, musíte povolit protokolování, abychom mohli ladit a opravit problémy, pokud nastanou. Klepněte na ikonu v levém horním rohu, vyberte volbu Údržba a Nastavení logování. Volby Pump, PumpComm, PumpBTComm musí být zašktnuté.

### RileyLink/GNARL

Když restartujete RileyLink nebo GNARL, musíte buď provést nové ladění (akce „Probudit a naladit“), nebo znovu odeslat komunikační parametry (akce „Reset RieyLink konfigurace“), jinak komunikace selže.

### CGM

Medtronic CGM v současné době NENÍ podporován.

### Ruční použití pumpy

Měli byste se vyhnout manuálním zásahům ve vaší pumpě. Všechny příkazy (bolus, TBR) by měly projít přes AndroidAPS, ale pokud se stane, že provedete ruční příkazy, NEspouštějte příkazy s frekvencí méně než 3 minuty (takže pokud provedete 2× bolus (z jakéhokoli důvodu), druhý by měl být spuštěn nejméně 3 minuty po prvním).

## Změna časového pásma a letní čas (Letní čas) nebo Cestování s Medtronic pumpou a AndroidAPS

Důležité je, abyste nezapomínali, že byste nikdy neměli zakazovat smyčku, když cestujete (kromě případu, že vaše CGM nemůže pracovat v offline režimu). AAPS automaticky zjistí změny v časovém pásmu a jakmile se čas v telefonu změní, odešle příkaz do pumpy, aby se změnil čas v pumpě.

Nyní, pokud cestujete na východ a časové pásmo se mění do plusu (např. z GMT+0 na GMT+2), nebude problém s historíí pumpy a nemusíte se obávat…, ale pokud cestujete na západ a vaše časové pásmo se mění do mínusu (GMT+2 na GMT+0), pak může být synchronizace trochu ošemetná. Konkrétně to znamená, že na dalších x hodin budete muset být opatrní, protože vaše hodnota IOB by nemusela tak úplně souhlasit.

Jsme si vědomi tohoto problému a již hledáme možné řešení (viz https://github.com/andyrozman/RileyLinkAAPS/issues/145), ale prozatím je nutné při cestování vést tento problém v patrnosti.

## Nejčastější dotazy

### Můžu se podívat na stav baterie RileyLink/GNARL?

Ne. V současné době žádné z těchto zařízení toto nepodporuje a pravděpodobně nebude ani v budoucnu.

### Je GNARL úplná náhrada za RileyLink?

Ano. Autor GNARL přidal všechny funkce používané ovladačem Medtronic. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")