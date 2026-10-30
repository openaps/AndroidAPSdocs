# Chytré hodinky a AAPS

Různé chytré hodinky mohou zobrazovat některé informace z **AAPS** nebo provádět akce na dálku.

Přímé ovládání **AAPS** (pumpy a senzoru) z chytrých hodinek je možné s plnohodnotnými hodinkami s Androidem (berou se jako malé [chytré telefony](./Phones.md)).

Některé chytré hodinky umožňují zadávat ošetření i další věci, ale **AAPS** stále řídí samotný telefon.

Chytré hodinky se s **AAPS** používají stále častěji, _jak_ u dospělých s diabetem, tak u pečovatelů/rodičů dětí s diabetem.

## Obecné výhody používání chytrých hodinek s **AAPS**


Chytré hodinky, v závislosti na modelu, mohou být s **AAPS** využity mnoha různými způsoby. Mohou být využity k úplnému nebo částečnému ovládání **AAPS** nebo jednoduše ke vzdálené kontrole glykémií, aktivního inzulínu a dalších parametrů.

Integrace chytrých hodinek s **AAPS** může být užitečná v mnoha situacích, včetně řízení auta, motocyklu, kola nebo během cvičení. Někteří lidé mají pocit, že pohled na hodinky (na poradě, večírku, u jídla apod.) je nenápadnější než pohled do telefonu. Z hlediska bezpečnosti mohou být chytré hodinky užitečné i na cestách: telefon s **AAPS** můžete mít schovaný (například v tašce) a hodinky přitom používat ke vzdálenému ovládání.

## Specifické výhody pro rodiče/pečovatele používající **AAPS**

Pro dítě - pokud je jejich **AAPS** telefon poblíž - může pečovatel využít chytré hodinky k dohledu a úpravám bez nutnosti použít přímo **AAPS** telefon. To může být užitečné, například pokud je **AAPS** telefon uložený v páse pumpy.

Chytré hodinky lze použít _navíc_ k možnostem založeným na TELEFONU pro vzdálené ovládání nebo [pouze sledování](../RemoteFeatures/FollowingOnly.md), nebo jako jejich _alternativu_.

Navíc na rozdíl od telefonů rodičů/pečovatelů ve funkci sledujícího (které potřebují mobilní síť nebo Wi-Fi) mohou být hodinky připojené přes Bluetooth užitečné na odlehlých místech, například v jeskyni, na lodi nebo v půli cesty na horu. Pokud jsou obě zařízení (telefon s **AAPS** a chytré hodinky) ve stejné síti Wi-Fi, mohou používat také Wi-Fi.

## Různé druhy interakcí chytrých hodinek a AAPS

Aktuálně existuje pět základních způsobů, jak využít chytré hodinky ve spojení s **AAPS**. Ty jsou uvedeny v následující tabulce: 

| Nastavení hodinek      | Funkce                                         | Požadavky                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Samostatné             | AAPS bez telefonu                              | Plnohodnotné chytré hodinky s Androidem (zkontrolujte minimální verzi Androidu)</br> se spuštěnou **app-fullRelease**                                                                                                                                                                                                        |
| Plné vzdálené ovládání | Většina funkcí AAPS                            | Hodinky s Androidem **Wear OS** (zkontrolujte Android/API)</br>se spuštěnou **wear-fullRelease**                                                                                                                                                                                                                             |
| Vzdálené ovládání      | Funkce AAPSClient                              | Hodinky s Androidem **Wear OS** (zkontrolujte Android/API)</br>se spuštěnou **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                  |
| Vzdálené ovládání      | Některé funkce AAPSClient                      | Hodinky Garmin</br>(jen starší nastavení se Samsung Tizen a Fitbit, nedoporučuje se)</br>Viz níže.                                                                                                                                                                                                                           |
| Zobrazení              | Glykémie, trend, IOB, COB, stav smyčky a pumpy | Mnoho chytrých hodinek přes doprovodnou aplikaci na telefonu s **AAPS**, která dostává data z vysílání [Externí aplikace](#watches-external-companion-apps): [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>Viz níže. |

## Než si koupíte chytré hodinky…

Přesný model chytrých hodinek, který kupujete, závisí na požadovaných funkcích. Užitečné informace můžete najít na [stránce Telefony](#Phones-list-of-tested-phones), včetně seznamu testovaných telefonů, který obsahuje i některé chytré hodinky.

Mezi oblíbené značky hodinek patří Samsung Galaxy, Garmin, Fossil a Mi Band. Jednotlivé možnosti shrnuté ve výše uvedené tabulce jsou podrobněji vysvětleny níže. Pomohou vám rozhodnout, které chytré hodinky se hodí pro vaši situaci.

Pokud chcete integrovat chytré hodinky s **AAPS** na telefonu s úmyslem vzdáleně **AAPS** ovládat, musíte také vzít do úvahy jestli jsou spolu obě zařízení kompatibilní, zejména pokud máte starší nebo neobvyklý telefon.

Obecně platí, že pokud chcete pouze sledovat hodnoty glykémie a nepotřebujete **AAPS** z hodinek ovládat, existuje široká škála jednodušších dostupných hodinek, které můžete použít.

Nejlepší způsob, jak vybrat chytré hodinky, je hledat v příspěvcích "hodinky" buď na Discordu nebo na Facebookových **AAPS** skupinách. Přečtěte si zkušenosti ostatních a pokud ve starších příspěvcích nenajdete odpověď, položte svůj konkrétní dotaz.

## Plnohodnotné hodinky s Androidem

Zní to jako atraktivní možnost, že? V současné době však pouze několik nadšenců experimentuje s **AAPS** na hodinkách samostatně. Chytrých hodinek s rozumným rozhraním, které dobře fungují i pro samostatné použití **AAPS** a vaší aplikace pro CGM, je jen omezený počet. Mezi oblíbené modely patří LEMFO LEM 15 Pro a 16. Do hodinek budete muset nahrát „full“ apk **AAPS** (apk, která se obvykle instaluje do chytrého telefonu), a ne „wear“ apk **AAPS**.

Protože neexistuje specifikace, podle které by šlo určit, které hodinky jsou vhodné pro samostatný provoz **AAPS**, tyto parametry mohou pomoct:

1) Android 12 nebo novější. 2) Možnost přepnout ciferník z režimu „čtverec“, aby byl text větší a snadněji čitelný. 3) Velmi dobrá životnost baterie. 4) Dobrý dosah Bluetooth.

Většina frustrace ze samostatného provozu **AAPS** na hodinkách pramení z práce s maličkou obrazovkou a z faktu, že plná AAPS aplikace nebyla navržena pro zobrazení na hodinkách. Práce s nastavením **AAPS** na hodinkách může být kvůli malé obrazovce pohodlnější se stylusem. Některá tlačítka AAPS také nemusí být na obrazovce hodinek vidět.

Další výzvy spočívají v tom, že je těžké mít dostatečnou kapacitu baterie, a hodinky s dostatečnou baterií jsou často objemné a tlusté. Uživatelé hlásí boj s operačním systémem a nastavením úspory energie, potíže se spuštěním senzorů na hodinkách, slabý dosah Bluetooth (pro udržení spojení se senzorem i pumpou) a sporou voděodolnost. Příklady jsou na fotografiích níže.

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Pokud máte zájem o nastavení samostatných hodinek, přečtěte si příspěvky ve Facebookové **AAPS** skupině (je dobré vyhledat výrazy "standalone" a "Lemfo") a na Discordu.

## Wear OS

Kód **AAPS** obsahuje rozšíření aplikace, které lze nainstalovat do [chytrých hodinek s **Wear OS**](https://wearos.google.com/#oem-carousel).

![Konfigurace > Komunikace s povoleným Wear](../images/v4/Configuration/configuration_communication_wear.png)

Ověřte, že vaše chytré hodinky splňují [požadavky](#maintenance-android-version-aaps-version) **AAPS**.

### Co _je_ Wear OS?

První tři možnosti chytrých hodinek vyžadují, aby měly instalovaný **Wear OS**.

**Wear OS** je operační systém, který běží na některých moderních chytrých hodinkách s Androidem. Pokud je v popisu chytrých hodinek informace pouze o _kompatibilitě_ s Androidem a iOS, neznamená to, že běží na Wear OS. Může se jednat o jiný druh operačního systému konkrétního výrobce, který není kompatibilní s **AAPS**. Aby šlo nainstalovat a používat jakoukoli verzi **AAPS** nebo **AAPSClient**, musí chytré hodinky běžet na **Wear OS 3.0, 3.2 nebo 3.5** (Android 11, úroveň API 30) **nebo novějším**. Každá verze Wear OS odpovídá verzi Androidu, na které je založena: **Wear OS 3** je Android 11 (úroveň API 30), **Wear OS 4** je Android 13 (úroveň API 33), **Wear OS 5** je Android 14 (úroveň API 34) a **Wear OS 6** je Android 16 (úroveň API 36). Na hodinkách s Wear OS 2 **AAPS** spustit nelze.

Pokud nainstalujete **AAPS** wear.apk do hodinek s **Wear OS**, můžete si vybrat z řady různých vlastních ciferníků **AAPS**. Alternativně můžete využít standardní ciferník, kde budou informace z **AAPS** zobrazeny na malých polích známých jako "complications". Komplikace je jakýkoli prvek, který je na ciferníku zobrazen kromě času.

```{note}
Nedávné změny ve **Wear OS** postupně narušují vlastní ciferníky **AAPS** (čím vyšší verze Wear OS, tím vážněji), **komplikace** ale fungují dál. Před koupí nebo aktualizací hodinek si přečtěte [Změny ciferníků ve Wear OS](#wearos-watchface-changes).
```


### Jak mohou vypadat moje chytré hodinky?

Po [instalaci **AAPS** do hodinek](../WearOS/WearOsSmartwatch.md) si budete moci automaticky vybrat preferovaný ciferník z těchto ciferníků určených pro **AAPS**. Na většině hodinek stačí dlouze podržet prst na domovské obrazovce, dokud se obrazovka nezmenší, a přejetím doprava vybrat jinou obrazovku:

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Toto jsou základní obrazovky zabudované v **AAPS**. Existují i [další ciferníky](#WearOS_changing-to-AAPS-watchface) a můžete také použít [komplikace](#Watchfaces-complications).

### Jak provozovat hodinky Wear OS v každodenním životě?

Další podrobnosti o cifernících a každodenním používání, včetně toho, jak vytvořit (a sdílet) vlastní ciferník, najdete v části [Používání Wear AAPS na chytrých hodinkách](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## Externí aplikace

**AAPS** může vysílat svůj stav jiným aplikacím nainstalovaným ve stejném telefonu: glykémii a trend, IOB, COB, bazál a dočasný bazál, název profilu, stav smyčky, baterii telefonu a pumpy, stav zásobníku a průběh bolusu. Několik doprovodných aplikací pro hodinky toto vysílání čte a zobrazuje data na hodinkách, které **AAPS** přímo nepodporuje. Pro odesílání dat povolte **Externí aplikace** v **Konfigurace** > **Komunikace** (viz [Externí aplikace](#external-companion-apps) na stránce Konfigurace). Vysílání se odesílá s každou novou hodnotou a nelze si ho vyžádat: tlačítko obnovení v doprovodné aplikaci nemá na **AAPS** žádný vliv.

![Konfigurace > Komunikace: karta Externí aplikace](../images/v4/Configuration/configuration_external_companion_apps.png)

Doprovodné aplikace, o kterých víme, že toto vysílání používají:

- [WatchDrip+](https://bigdigital.home.blog/) pro hodinky Xiaomi a Amazfit, viz [Hodinky Xiaomi a Amazfit](#watches-xiaomi-amazfit) níže.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) pro hodinky s Wear OS, jako komplikace nebo widget. Je to užitečná záloha na verzích Wear OS, kde ciferníky **AAPS** nefungují spolehlivě, viz [Nastavení AAPS na hodinkách s Wear OS](../WearOS/WearOsSmartwatch.md). Jeho doprovodná aplikace GlucoDataAuto zobrazuje stejná data v autě s Android Auto.
- [Aplikace G-Watch](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) pro hodinky Samsung Tizen a její pozdější verze pro Wear OS. Ve starších verzích **AAPS** se plugin podle této aplikace jmenoval **Samsung Tizen**.

```{warning}
**Aplikace G-Watch** ani její verze pro **Wear OS** se už neudržují a Samsung převedl své chytré hodinky z Tizenu na Wear OS. G-Watch má smysl jen pro stávající starší nastavení a pro novou instalaci se nedoporučuje. Nejnovější zprávy najdete ve specializované [skupině na Facebooku](https://www.facebook.com/groups/gwatchapp).
```

(Watchfaces-garmin)=

## Garmin

V obchodě Garmin ConnectIQ jsou ciferníky pro Garmin, které se propojují s [AAPS](https://apps.garmin.com/search?keywords=androidaps).

![Konfigurace > Komunikace: karta Garmin](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) se propojuje přímo s **AAPS**. Kromě hodnot glykémie zobrazuje údaje o stavu smyčky (aktivní inzulín, dočasný bazál) a posílá do **AAPS** hodnoty tepové frekvence. Je k dispozici v obchodě ConnectIQ; povolte plugin **Garmin** v **Konfigurace → Komunikace**. ![Ciferník AAPS Glucose Watch s očíslovanými poli](../images/Garmin_WF-annotated.png)

1. Nejvyšší a nejnižší hodnota glykémie v grafu
2. Změna glykémie za minutu
3. Aktivní inzulín (IOB)
4. Čas od poslední hodnoty glykémie (minuty:sekundy)
5. Dočasná bazální dávka v procentech bazální dávky z profilu
6. Graf glykémie za poslední 2 hodiny
7. Current glucose value



## Fitbit

```{warning}
Google převádí Fitbit do Google Health a v EU odstraňuje z hodinek Fitbit aplikace a ciferníky třetích stran. Ciferníky Fitbit proto **už nejsou doporučenou možností** a koupi hodinek Fitbit pro použití s **AAPS** nedoporučujeme.
```

Pro stávající hodinky Fitbit uvádějí [stránky Nightscoutu](https://nightscout.github.io/nightscout/wearable/#fitbit) některé možnosti pouze pro sledování, například [Glance](https://glancewatchface.com/). I to jsou ciferníky třetích stran, takže pro ně platí stejné omezení v EU.

## Pouze sledování

Tyto chytré hodinky zobrazují některé informace z **AAPS**, některé z nich potřebují další aplikace.

Existuje široká nabídka cenově dostupných chytrých hodinek, které umí pouze zobrazovat. Pokud používáte Nightscout, dobrý přehled všech možností najdete [zde](https://nightscout.github.io/nightscout/wearable/#)

Níže je několik možností hodinek pouze pro sledování, které jsou oblíbené mezi uživateli **AAPS**:

(watches-xiaomi-amazfit)=
### Hodinky Xiaomi a Amazfit

**WatchDrip+** je doprovodná aplikace vyvíjená komunitou, která zobrazuje glykémii a data smyčky na různých modelech chytrých hodinek, hlavně značek Xiaomi (_např._ Mi Band) a Amazfit:

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Od verze 0.5 čte **WatchDrip+** data přímo z **AAPS**, bez xDrip+ jako prostředníka. V telefonu s **AAPS**:

1. Povolte **Externí aplikace** v **Konfigurace** > **Komunikace**, viz [výše](#watches-external-companion-apps). Poskytuje aktuální glykémii, deltu, šipku trendu, IOB a stav pumpy.
2. Povolte plugin **xDrip** v **Konfigurace** > **Komunikace** a v jeho nastavení zapněte **Odesílat stav do xDrip+**. Poskytuje řádek se stavem IOB/COB a graf glykémie na hodinkách se po několika hodnotách zaplní.
3. Pokud je v telefonu nainstalován xDrip+, vypněte v něm **Broadcast Service API** (xDrip+ > Settings > Inter-app settings), aby hodinky nedostávaly data dvakrát. Pokud xDrip+ jen předával data do hodinek, můžete ho odinstalovat.

Tlačítko obnovení ve WatchDrip+ nemá s **AAPS** žádný účinek: data přicházejí s každou novou hodnotou.


Více o nich, včetně jejich nastavení, se dočtete na [webu WatchDrip+](https://bigdigital.home.blog/). Výhodou těchto hodinek je, že jsou malé a relativně cenově dostupné. Jsou oblíbenou volbou hlavně pro děti a pro lidi s menším zápěstím.

### Hodinky Pebble

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Hodinky Pebble ([dnes už se nevyrábí](https://en.wikipedia.org/wiki/Pebble_(watch))) se běžně prodávaly v letech 2013 až 2016 a stále mohou být k dostání z druhé ruky. Majetek firmy Pebble převzal Fitbit. Uživatelé Pebble mohou k zobrazení dat z Nightscoutu použít ciferník Urchin. Zobrazit lze například IOB, právě aktivní dočasnou bazální dávku a predikce. Při otevřené smyčce můžete pomocí IFTTT vytvořit applet, který při přijetí oznámení z **AAPS** pošle SMS nebo oznámení přes Pushover.

### [Hodinky Bluejay](https://bluejay.website/)


![Hodinky BlueJay U3](../images/watches/bluejay_u3.png)


Jde o jedinečná zařízení, která umí přijímat data glykémie **přímo** z vysílače Dexcom. Málo se ví, že vysílače Dexcom G6/G7 ve skutečnosti vysílají aktuální data glykémie na _dvou_ samostatných kanálech: kanálu pro telefon a lékařském kanálu. Hodinky Bluejay lze nastavit tak, aby přijímaly data glykémie na kterémkoli z kanálů. Pokud tedy **AAPS** používá kanál pro telefon, hodinky Bluejay mohou použít lékařský kanál.

Hlavní výhodou je, že hodinky jsou nezávislé na telefonu i na systému smyčky. Pokud tedy například odpojíte pumpu i telefon s **AAPS** na pláži nebo v zábavním parku a jste mimo dosah telefonu s **AAPS**, stále můžete dostávat hodnoty z Dexcomu přímo do hodinek Bluejay.

Původní **Bluejay GTS** se už nevyrábí a neumí číst Dexcom G7. Pozdější modely (U1, pak současný **U3**, v době psaní prodávaný v předběžném přístupu) jsou plnohodnotné hodinky s Androidem se spuštěným xDrip, které sbírají data z Dexcomu G6 a G7 přímo. Výrobce hodinky popisuje jako výzkumný nástroj, ne pro lékařské použití. Uváděné nevýhody jsou, že ne vždy zachytí hodnotu každých 5 minut a že baterii je nutné často nabíjet. Aktuální model a dostupnost najdete na [webu Bluejay](https://bluejay.website/).

### Apple Watch

Podívejte se na [Nightscout na vašich hodinkách](https://nightscout.github.io/nightscout/wearable/#).

Apple Watch nyní podporují přímé připojení G7 a lze je používat současně s **AAPS**.

