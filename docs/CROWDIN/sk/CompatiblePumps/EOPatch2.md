# EOPatch2

Pumpa potrebuje rýchlo pôsobiaci inzulín U-100, napríklad NovoRapid alebo Humalog. Používajte rýchlo pôsobiaci inzulín, ktorý vám predpísal lekár.

Najmenšia dávka, ktorú pumpa dokáže podať, je 0,05 U. Každú bazálnu dávku vo svojom **Profile** nastavte aspoň na 0,05 U/h, v krokoch po 0,05 U/h. Inak **AAPS** zaokrúhli každú dávku na najbližších 0,05 U/h (nikdy nie na 0) a použije dávky, ktoré pumpa skutočne podá. Celkové množstvo inzulínu za deň sa preto mierne líši od vášho **Profilu**. Rovnako musia byť bolusy aspoň 0,05 U.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funkcie pumpy s AAPS

* Komunikuje s **AAPS** priamo cez Bluetooth vášho telefónu, bez ďalšieho komunikačného zariadenia.
* Zmeny letného času a časového pásma musíte riešiť ručne.

## Nastavenie pumpy

1. Otvorte **ponuku** (☰) v ľavom hornom rohu hlavnej obrazovky **AAPS** a vyberte **Konfigurácia**.
1. V sekcii **Pumpa** vyberte **EOPatch2**.
1. Tlačidlom Späť sa vráťte na hlavnú obrazovku.

![Ponuka s položkou Konfigurácia](../images/v4/Configuration/configuration_menu.png) ![Konfigurácia > Pumpa s pluginom EOPatch2](../images/v4/Configuration/configuration_pump_list_3.png)

Po výbere sa na karte **EOPatch2** zobrazia dve tlačidlá, **Nastavenia** a **Otvoriť plugin**:

![Plugin EOPatch2 vybraný v Konfigurácia > Pumpa](../images/v4/Pumps/eopatch2_enabled.png)

## Nastavenia

Nastavenia EOPatch2 otvoríte jedným z dvoch spôsobov:

* stlačte **Nastavenia** na karte **EOPatch2** v **Konfigurácii**, alebo
* otvorte obrazovku pumpy (**Spravovať** → **Pumpa**) a stlačte ikonu ozubeného kolieska v pravom hornom rohu.

K dispozícii sú tri nastavenia:

![Nastavenia EOPatch2](../images/v4/Pumps/eopatch_settings.png)

### Výstraha nízkeho stavu zásobníka

Keď množstvo inzulínu, ktoré zostáva v pumpe, klesne na túto hodnotu alebo nižšie, zobrazí sa upozornenie. Nastaviť ho môžete od 10 do 50 U, v krokoch po 5 U. Predvolená hodnota je 10 U.

### Pripomenutie expirácie pumpy

Pripomenie vám, koľko času zostáva do konca platnosti aktuálnej pumpy. Nastaviť ho môžete od 1 do 24 hodín, v krokoch po 1 hodine. Predvolená hodnota je 4 hodiny.

### Zvukové pripomenutia pumpy

Keď je toto nastavenie zapnuté, pumpa pípne na začiatku a na konci bolusu, predĺženého bolusu alebo dočasného bazálu. Na váš bežný bazál nemá vplyv. Predvolene je vypnuté.

## Aktivácia novej pumpy

### Otvorte sprievodcu aktiváciou

Otvorte obrazovku pumpy cez **Spravovať** → **Pumpa** (alebo stlačte **Otvoriť plugin** na karte **EOPatch2** v **Konfigurácii**). Keď nie je aktívna žiadna pumpa, obrazovka ukazuje **Neaktivovaný** a dole tlačidlo **Aktivovať pumpu**.

Sprievodcu spustíte stlačením **Aktivovať pumpu**.

![Obrazovka pumpy EOPatch2 s tlačidlom Aktivovať pumpu](../images/v4/Pumps/eopatch_pump_screen.png)

Sprievodca vás prevedie každým krokom. Rad bodiek hore ukazuje, ako ďaleko ste.

```{note}
Ak ste v **AAPS** ešte nikdy neaktivovali **Profil**, sprievodca najprv zobrazí stránku **Vyžaduje sa profil**. Vyberte profil, ktorý chcete použiť, a stlačte **Aktivovať profil**.
```

### Plnenie inzulínu

Ihlu striekačky zasuňte do plniaceho portu inzulínu na pumpe. Pomaly tlačte piest, aby sa pumpa naplnila. Keď je v pumpe viac ako 80 U, raz pípne a spustí sa (nabootuje).

Keď začujete pípnutie, stlačte **Spustiť párovanie**.

![Krok Plnenie inzulínu s tlačidlom Spustiť párovanie](../images/v4/Pumps/eopatch_activate_filling.png)

```{warning}
- Neotáčajte pákou ihly, kým vám to sprievodca nepovie. Ak ňou otočíte príliš skoro, môže to počas plnenia alebo kontroly bezpečnosti spôsobiť vážne problémy.
- Do pumpy sa zmestí 80 až 200 U. Ak do nej dáte menej ako 80 U, pumpa nefunguje.
- Inzulín vyberte z chladničky 15 až 30 minút pred plnením, aby dosiahol izbovú teplotu. Inzulín musí mať aspoň 10 °C.
```

### Párovanie pumpy

**AAPS** sa teraz pokúsi automaticky spárovať s pumpou. Počas párovania sa zobrazia dve žiadosti Androidu o spárovanie cez Bluetooth. Pri prvej stlačte **OK**. Pri druhej, ktorá ukazuje prístupový kľúč, stlačte znova **OK**.

```{warning}
- Počas párovania majte pumpu a telefón od seba najviac 30 cm.
- Keď pumpa nabootuje, pípa každé 3 minúty, kým sa párovanie nedokončí.
- Aktiváciu pumpy musíte dokončiť do 60 minút od jej spustenia. Ak to nestihnete, pumpu zahoďte.
```

![Krok Párovanie pumpy](../images/EOPatch/Bild6.png) ![Prvá žiadosť o spárovanie cez Bluetooth](../images/EOPatch/Bild7.png) ![Druhá žiadosť o spárovanie cez Bluetooth s prístupovým kľúčom](../images/EOPatch/Bild8.png)

```{admonition} Older screenshot
:class: note
Dve snímky obrazovky párovania cez Bluetooth sú zo staršej verzie **AAPS**: obrazovka **AAPS** za žiadosťou Androidu o spárovanie vyzerá v **AAPS** 4 inak.
```

### Výber inzulínu

Vyberte inzulín, ktorým ste pumpu naplnili, a stlačte **Ďalej**. **AAPS** po aktivácii použije prepnutie profilu s týmto inzulínom.

### Pripravte sa na pripojenie pumpy

Z pumpy odstráňte lepiacu pásku a potom stlačte **Ďalej**.

Ak ihla trčí von alebo ak je pumpa mokrá, špinavá alebo má prehnutú lepiacu pásku, stlačte namiesto toho **Zahodiť** a použite novú pumpu.

![Krok Pripravte sa na pripojenie pumpy](../images/EOPatch/Bild9.png)

### Miesto aplikácie

Tento krok sa zobrazí, len ak je v nastaveniach striedania miest zapnuté **Spravovať rotáciu umiestnenia pumpy**. Ťuknite na miesto na obrázku tela, kam pumpu prilepíte, a stlačte **Ďalej**, alebo stlačte **Preskočiť**.

### Pripojenie pumpy

Inzulín by mal ísť do miesta s tukovým tkanivom pod kožou, kde je málo nervov a ciev. Vhodnou voľbou je brucho, rameno alebo stehno. Miesto očistite a osušte a potom pumpu prilepte na kožu.

Skontrolujte miesto vpichu a potom stlačte **Spustiť kontrolu bezpečnosti**.

```{warning}
- Okraje lepiacej pásky pumpy rovnomerne pritlačte, aby celá pumpa pevne držala na koži.
- Ak pumpa celkom nepriľne, medzi pumpu a kožu sa môže dostať vzduch. To oslabuje lepidlo a vodotesnosť pumpy.
```

![Krok Pripojenie pumpy](../images/EOPatch/Bild10.png)

### Kontrola bezpečnosti

Kontrola bezpečnosti trvá asi 30 sekúnd. Po jej skončení pumpa raz pípne. Ak zlyhá, stlačte **Opakovať**.

```{warning}
Kvôli bezpečnému používaniu neotáčajte pákou ihly, kým sa kontrola bezpečnosti nedokončí.
```

![Krok Pripojenie pumpy s tlačidlom Spustiť kontrolu bezpečnosti](../images/EOPatch/Bild11.png) ![Prebieha bezpečnostná kontrola](../images/EOPatch/Bild12.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky od **Pripravte sa na pripojenie pumpy** po **Kontrola bezpečnosti** sú zo staršej verzie **AAPS** a v **AAPS** 4 môžu vyzerať inak.
```

### Vkladanie ihly

Pumpu pevne držte. Otočte páku ihly nahor o viac ako 100°, aby sa ihla zaviedla. Keď je ihla správne zavedená, pumpa raz pípne. Potom páku otáčajte ďalej až na doraz, aby ste ju odstránili. Stlačte **Ďalej**.

```{caution}
Ak prejdete na ďalší krok bez pípnutia, zobrazí sa **Chyba vloženia ihly**. Overte pípnutie a stlačte **Opakovať**. Ak chyba pretrváva, stlačte **Zahodiť** a pumpu deaktivujte.
```

### Aktivácia pumpy dokončená

Posledná stránka potvrdí, že pumpa je aktívna a že vás upozorní, keď sa bude blížiť koniec jej platnosti. Stlačením **Dokončiť** sa vrátite na obrazovku pumpy.

## Zahodenie pumpy

Pumpu vymeňte, keď v nej dochádza inzulín, keď jej skončí platnosť alebo ak je chybná. Odporúčame používať každú pumpu najviac 84 hodín od jej spustenia.

1. Otvorte obrazovku pumpy (**Spravovať** → **Pumpa**). Kým je pumpa aktívna, stlačte **Zahodiť pumpu**.
1. Stránka **Zahodiť pumpu** ukazuje zostávajúci čas a zostávajúci inzulín v pumpe. Stlačte **Zahodiť pumpu**.
1. Dialóg vás požiada o potvrdenie. Znova stlačte **Zahodiť pumpu**.
1. Keď je pumpa deaktivovaná, sprievodca zobrazí **Zahodenie pumpy je dokončené.** Odstráňte pumpu z tela a stlačte **Potvrdiť**.

Potom sprievodca pokračuje priamo aktiváciou novej pumpy (pozrite vyššie). Ak chcete skončiť tu, stlačte šípku späť.

Kým nie je aktívna žiadna pumpa, **AAPS** zobrazuje pumpu ako pozastavenú a zaznamená dočasný bazál 0 U/h. Do IOB sa tak nezapočíta žiadny bazálny inzulín, kým sa neaktivuje ďalšia pumpa.

![Obrazovka pumpy EOPatch2 s tlačidlom DISCARD/CHANGE PATCH](../images/EOPatch/Bild13.png) ![Stránka Zahodiť pumpu](../images/EOPatch/Bild14.png) ![Dialóg na potvrdenie zahodenia pumpy](../images/EOPatch/Bild15.png) ![Zahodenie pumpy je dokončené](../images/EOPatch/Bild16.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky vyššie pochádzajú zo staršej verzie **AAPS**. V **AAPS** 4 otvoríte obrazovku pumpy cez **Spravovať** → **Pumpa** a tlačidlo na nej sa volá **Zahodiť pumpu**.
```

```{admonition} If the patch does not respond
:class: warning
Ak sa **AAPS** nedokáže s pumpou spojiť, môže zobraziť stránku o ručnom vypnutí alarmu pumpy: odstráňte pumpu z tela, odlepte lepiacu pásku a sponkou pevne zatlačte do otvoru vedľa plniaceho portu inzulínu.

Stránka **Zahodiť pumpu** má aj tlačidlo **Vynútiť Reset**. Iba odstráni pumpu z **AAPS**, bez odoslania akéhokoľvek príkazu do pumpy. Pumpa podáva inzulín ďalej, kým sa jej nevybije batéria alebo kým ju ručne nevypnete. Použite ho, len ak bežné zahodenie zlyhá, a pumpu odstráňte z tela.
```

## Pozastavenie a obnovenie podávania inzulínu

Pozastavenie podávania inzulínu zruší aj prebiehajúci predĺžený bolus a dočasný bazál. Po obnovení sa **znova nespustia**. Kým je podávanie inzulínu pozastavené, pumpa pípa každých 15 minút.

### Pozastavenie podávania inzulínu

1. Otvorte obrazovku pumpy (**Spravovať** → **Pumpa**) a stlačte **Pozastaviť pumpu**.
1. Dialóg vysvetlí, čo sa pozastaví. Stlačte **Potvrdiť**.
1. V dialógu **Čas pozastavenia bazálu** zvoľte, na ako dlho chcete podávanie pozastaviť: 30 min, 1 h, 1 h 30 min alebo 2 h. Stlačte **Potvrdiť**.

Podávanie inzulínu sa pozastaví na zvolený čas.

![Obrazovka pumpy EOPatch2 s tlačidlom SUSPEND](../images/EOPatch/Bild17.png) ![Dialóg na potvrdenie pozastavenia](../images/EOPatch/Bild18.png) ![Dialóg Čas pozastavenia bazálu](../images/EOPatch/Bild19.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky vyššie pochádzajú zo staršej verzie **AAPS**. V **AAPS** 4 otvoríte obrazovku pumpy cez **Spravovať** → **Pumpa** a tlačidlo na nej sa volá **Pozastaviť pumpu**.
```

### Obnovenie podávania inzulínu

1. Otvorte obrazovku pumpy (**Spravovať** → **Pumpa**) a stlačte **Obnoviť pumpu**.
1. V dialógu **Obnoviť podávanie inzulínu** stlačte **Potvrdiť**.

![Obrazovka pumpy EOPatch2 s tlačidlom RESUME](../images/EOPatch/Bild20.png) ![Dialóg Obnoviť podávanie inzulínu](../images/EOPatch/Bild21.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky vyššie pochádzajú zo staršej verzie **AAPS**. V **AAPS** 4 otvoríte obrazovku pumpy cez **Spravovať** → **Pumpa** a tlačidlo na nej sa volá **Obnoviť pumpu**.
```

```{warning}
Keď čas pozastavenia skončí, **AAPS** zobrazí upozornenie **Koniec pozastavenia inzulínu**. Podávanie inzulínu sa **neobnoví**, kým ho nepotvrdíte. Ak ho nepotvrdíte, môže sa u vás rozvinúť hyperglykémia.
```

(eopatch2-alarms-and-warnings)=

## Alarmy a upozornenia

### Alarmy

Alarmy sú určené pre naliehavé situácie s najvyššou prioritou a vyžadujú si váš okamžitý zásah. **AAPS** spustí alarm, ktorý znie, kým ho nepotvrdíte, a správu zobrazí ako notifikáciu na obrazovke **Prehľad**. Alarm znamená, že s používanou pumpou je problém. V mnohých prípadoch treba pumpu zahodiť a nahradiť novou.

Keď na notifikácii stlačíte **Potvrdiť**, **AAPS** alarm spracuje. Pri väčšine alarmov sa tým pumpa deaktivuje. Pri alarme **Nevhodná teplota** je tlačidlo **Opakovať**.

![Alarm EOPatch2](../images/EOPatch/Bild22.png) ![Alarm EOPatch2 po deaktivácii pumpy](../images/EOPatch/Bild23.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky alarmov sú zo staršej verzie **AAPS** a v **AAPS** 4 môžu vyzerať inak.
```

Jednotlivé alarmy sú vysvetlené nižšie.

| Alarm                         | Vysvetlenie                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Prázdny zásobník              | V pumpe došiel inzulín.                                                                                                                     |
| Platnosť pumpy vypršala       | Doba používania pumpy skončila a pumpa už nemôže podávať inzulín.                                                                           |
| Oklúzia                       | Cesta inzulínu v pumpe je pravdepodobne upchatá.                                                                                            |
| Zlyhanie autotestu po zapnutí | Pumpa pri autoteste po spustení zistila neočakávanú chybu.                                                                                  |
| Nevhodná teplota              | Pumpa je pri aktivácii alebo používaní mimo svojej bežnej prevádzkovej teploty. Presuňte pumpu na miesto s vhodnou teplotou (4,4 až 37 °C). |
| Chyba vloženia ihly           | Ihla sa pri aktivácii nezaviedla správne. Skontrolujte, či sú okraj pumpy, kde sa zavádza ihla, a páka ihly v jednej priamke.               |
| Chyba batérie pumpy           | Vnútorná batéria pumpy sa čoskoro vybije a pumpa sa vypne.                                                                                  |
| Chyba aktivácie pumpy         | Pumpa nebola úplne aktivovaná do 60 minút od spustenia.                                                                                     |
| Chyba pumpy                   | Pumpa pri aktivácii alebo používaní zistila neočakávanú chybu.                                                                              |

### Upozornenia

Upozornenia sú určené pre situácie so strednou alebo nízkou prioritou. Upozornenie sa zobrazí ako notifikácia na obrazovke **Prehľad**.

![Upozornenie EOPatch2 zobrazené na obrazovke Prehľad](../images/EOPatch/Bild24.png)

```{admonition} Older screenshot
:class: note
Táto snímka obrazovky je zo staršej verzie **AAPS**: v **AAPS** 4 sa upozornenie zobrazuje na hlavnej obrazovke, ktorá vyzerá inak.
```

Jednotlivé upozornenia sú vysvetlené nižšie.

| Upozornenie                   | Vysvetlenie                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Koniec pozastavenia inzulínu  | Zvolený čas pozastavenia uplynul. Podávanie inzulínu obnovíte stlačením **Obnoviť pumpu** na notifikácii.              |
| Nízky stav zásobníka          | Inzulín zostávajúci v pumpe je pod hodnotou z nastavenia **Výstraha nízkeho stavu zásobníka**.                         |
| Uplynula doba prevádzky pumpy | Doba používania pumpy skončila.                                                                                        |
| Platnosť pumpy čoskoro vyprší | Pumpu treba zahodiť do 1 hodiny.                                                                                       |
| Nedokončená aktivácia pumpy   | Aktivácia pumpy bola po spárovaní prerušená na viac ako 3 minúty. Otvorte obrazovku pumpy a dokončite aktiváciu pumpy. |
| Slabá batéria pumpy           | Batéria pumpy je slabá.                                                                                                |

## Kde získať pomoc

Ovládač EOPatch2 vyvíja komunita na **dobrovoľníckom** základe. Skôr než požiadate o pomoc:

1. **Prečítajte si** príslušnú časť tejto dokumentácie a overte si, ako má funkcia fungovať.
2. **Opýtajte sa** na kanáli *#AAPS* na [Discorde](https://discord.gg/4fQUWHZ4Mw) alebo v niektorom z ďalších [komunitných kanálov](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahláste chybu**: prehľadajte [existujúce hlásenia (issues)](https://github.com/nightscout/AndroidAPS/issues); ak tam vaša chyba nie je, otvorte [nové hlásenie](https://github.com/nightscout/AndroidAPS/issues) a priložte svoje [log súbory](../GettingHelp/AccessingLogFiles.md).

Keď žiadate o pomoc, uveďte značku a model telefónu, verziu Androidu, verziu **AAPS** a jednoduchý opis problému (čo sa zmenilo a kedy to naposledy fungovalo).
