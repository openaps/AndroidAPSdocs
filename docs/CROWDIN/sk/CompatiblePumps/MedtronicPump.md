# Pumpy Medtronic

Ovládač nefunguje so žiadnymi novšími modelmi vrátane všetkých modelov, ktoré končia na G (530G, séria 600 [630G, 640G, 670G], séria 700 [770G, 780G] atď.).

Kompatibilné sú tieto kombinácie modelu a firmvéru:

- 512/712 (akákoľvek verzia firmvéru)
- 515/715 (akákoľvek verzia firmvéru)
- 522/722 (akákoľvek verzia firmvéru)
- 523/723 (firmvér 2.4A alebo nižší)
- 554/754 európska verzia (firmvér 2.6A alebo nižší)
- 554/754 kanadská verzia (firmvér 2.7A alebo nižší)

Ako zistiť verziu firmvéru na pumpe, nájdete v [dokumentácii OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) alebo v [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Obsah
    :depth: 1
    :local: true

## Funkcie pumpy s AAPS

* Na komunikáciu s **AAPS** vyžaduje zariadenie kompatibilné s RileyLinkom.
* Automatická zmena letného času a časového pásma.

## Hardvérové a softvérové požiadavky

- **Telefón:** Ovládač Medtronic by mal fungovať s akýmkoľvek telefónom s Androidom, ktorý podporuje pripojenie cez Bluetooth. **DÔLEŽITÉ: Výrobcovia telefónov implementujú Bluetooth rôzne, preto sa každý model telefónu môže správať inak. Niektoré telefóny napríklad zapínanie a vypínanie Bluetooth riešia inak. To môže ovplyvniť používanie, keď sa AAPS potrebuje znovu pripojiť k vášmu zariadeniu typu Rileylink.**
- **Zariadenie kompatibilné s RileyLinkom:** Telefóny s Androidom nevedia komunikovať s pumpami Medtronic bez samostatného zariadenia, ktoré zabezpečuje komunikáciu. Toto zariadenie sa spojí s vaším telefónom cez Bluetooth a s vašou pumpou cez kompatibilné rádiové spojenie. Prvé takéto zariadenie sa volalo Rileylink, ale dnes je k dispozícii viac možností, ktoré môžu ponúkať ďalšie funkcie.
    
    - Rileylink je dostupný na [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink je dostupný na [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (viac variantov modelu) je dostupný na [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (vyžaduje trochu ďalšej vlastnej práce – DIY) – podrobnosti nájdete na [github.com](https://github.com/ecc1/gnarl)

Porovnávaciu tabuľku rôznych zariadení kompatibilných s Rileylinkom nájdete na [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Konfigurácia pumpy

Aby mohol AAPS na diaľku posielať príkazy, nastavte na pumpe tieto nastavenia. Kroky potrebné na každú zmenu na pumpe Medtronic 715 sú pri každom nastavení uvedené v zátvorkách. Presné kroky sa môžu líšiť podľa typu pumpy a/alebo verzie firmvéru.

- **Zapnite na pumpe vzdialený režim** (na pumpe stlačte Act a prejdite do Utilities -> Remote Options, vyberte On a na ďalšej obrazovke zvoľte Add ID a pridajte ľubovoľné ID, napríklad 111111). Aby pumpa očakávala vzdialenú komunikáciu, v zozname Remote ID musí byť aspoň jedno ID.
- **Set Max Basal** (On the pump press Act and go to Basal and then select Max Basal Rate) As an example setting this value to four times your maximum standard basal rate would allow a 400% Temporary Basal Rate. Najvyššia hodnota, ktorú pumpa povolí, je 34,9 jednotky za hodinu.
- **Set Max Bolus** (On the pump press Act and go to Bolus and then select Max Bolus) This is the largest bolus that the pump will accept. Najvyššia hodnota, ktorú pumpa povolí, je 25.
- **Nastavte profil na Standard**. (Na pumpe stlačte Act, prejdite do Basal a potom vyberte Patterns.) Pumpa potrebuje iba jeden profil, pretože rôzne profily bude spravovať AAPS vo vašom telefóne. Ďalšie vzory (Patterns) nie sú potrebné.
- **Nastavte typ dočasnej bazálnej dávky** (na pumpe stlačte Act, prejdite do Basal a potom do Temp Basal Type). Vyberte Absolute (nie Percent).

## Konfigurácia Medtronic v telefóne/AAPS

- **Zariadenie kompatibilné s RileyLinkom nepárujte cez ponuku Bluetooth v telefóne.** Ak ho spárujete cez ponuku Bluetooth v telefóne, AAPS potom pri postupe nižšie vaše zariadenie kompatibilné s Rileylinkom neuvidí.
- Vypnite na telefóne automatické otáčanie obrazovky. Na niektorých zariadeniach automatické otáčanie obrazovky spôsobuje reštart relácií Bluetooth, čo by spôsobovalo problémy s vašou pumpou Medtronic. 
- Pumpu Medtronic môžete v AAPS nakonfigurovať dvoma spôsobmi:

1. Použitie sprievodcu nastavením pri novej inštalácii
2. V časti **Konfigurácia** > **Pumpa** výberom **Medtronic**
    
    ![Konfigurácia > Pumpa s pluginom Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Po výbere sa na karte **Medtronic** zobrazia dve tlačidlá, **Nastavenia** a **Otvoriť plugin**:
    
    ![Plugin Medtronic vybraný v Konfigurácia > Pumpa](../images/v4/Pumps/medtronic_enabled.png)
    
    **Nastavenia** otvorí nastavenia ovládača Medtronic:
    
    ![Nastavenia ovládača Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Otvoriť plugin** (alebo **Spravovať** > **Pumpa**) otvorí obrazovku pumpy Medtronic. Kým nie je pumpa spárovaná, vyzerá takto:
    
    ![Obrazovka pumpy Medtronic pred párovaním](../images/v4/Pumps/medtronic_pump_screen.png)

Pri konfigurácii pumpy Medtronic pomocou sprievodcu nastavením sa môže stať, že nastavenie nebudete môcť dokončiť kvôli problémom s Bluetooth (napr. sa nedá úspešne pripojiť k pumpe). Ak sa to stane, vyberte možnosť virtuálnej pumpy, aby ste mohli dokončiť konfiguráciu, a ďalšie riešenie problémov urobte pomocou možnosti 2.

Pri nastavovaní AAPS na prácu s pumpou Medtronic musíte v časti **Nastavenia** nastaviť tieto položky (pozrite obrázok nastavení vyššie):

- **Sériové číslo pumpy**: Je uvedené na zadnej strane pumpy a začína na SN. Zadajte iba 6 zobrazených číslic bez písmen (napr. 123456).
- **Typ pumpy**: Model pumpy, ktorý používate (napr. 522). 
- **Frekvencia pumpy**: Sú dve možnosti podľa toho, kde bola vaša pumpa pôvodne distribuovaná. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select: 
    - for US & Canada, frequency used is 916 MHz
    - for Worldwide, frequency used is 868 MHz
- **Max. bazál v pumpe (U/h)**: Musí sa zhodovať s nastavením vo vašej pumpe (pozrite Konfigurácia pumpy vyššie). Aj toto nastavenie musíte zvoliť starostlivo, pretože určuje, koľko inzulínu môže AAPS podať cez bazálnu dávku. Tým sa v skutočnosti nastaví maximálny dočasný bazál. Ak túto hodnotu nastavíte napríklad na štvornásobok vašej najvyššej bežnej bazálnej dávky, umožní to dočasný bazál 400 %. Najvyššia hodnota, ktorú pumpa povolí, je 34,9 jednotky za hodinu.
- **Max. bolus v pumpe (U)** (za hodinu): Musí sa zhodovať s nastavením vo vašej pumpe (pozrite Konfigurácia pumpy vyššie). Toto nastavenie dobre zvážte, pretože určuje, aký veľký bolus môže AAPS vôbec nastaviť.
- **Oneskorenie pred podaním bolusu (s)**: Počet sekúnd od zadania bolusu do chvíle, keď sa príkaz naozaj odošle do pumpy. Počas tohto času môže používateľ bolus zrušiť, ak bol príkaz na bolus odoslaný omylom. Bolus, ktorý sa začal podávať cez AAPS, nie je možné zrušiť. Bolus, ktorý sa už začal podávať, sa dá zrušiť jedine tak, že pumpu ručne pozastavíte a potom ju znovu spustíte.
- **Medtronic Encoding**: Determines where the Medtronic encoding is carried out (hardware or software). Odporúča sa vybrať hardvérové kódovanie (t. j. vykonáva ho zariadenie kompatibilné s Rileylinkom), pretože sa tak posiela menej dát. Ak sa často prerušuje spojenie, môže pomôcť softvérové kódovanie (t. j. vykonáva ho AAPS). Ak máte na zariadení Rileylink firmvér verzie 0.x, toto nastavenie sa ignoruje.
- **Typ batérie (Zobrazenie napájania)**: Aby sa správne určila zostávajúca úroveň batérie, vyberte typ používanej batérie AAA. Ak vyberiete inú možnosť ako jednoduché zobrazenie, AAPS zobrazí vypočítanú zostávajúcu úroveň batérie v percentách a napätie vo voltoch. K dispozícii sú tieto možnosti:
    
    - Nevybrané (jednoduché zobrazenie)
    - Alkalické (rozšírené zobrazenie)
    - Líthiové (rozšírené zobrazenie)
    - NiZn (rozšírené zobrazenie)
    - NiMH (rozšírené zobrazenie)
- **Použiť skenovanie**: Pred pripojením k zariadeniam kompatibilným s Rileylinkom zapne vyhľadávanie Bluetooth. To by malo zlepšiť spoľahlivosť pripojenia k zariadeniu.

- **Zobraziť úroveň batérie reportovanú prostredníctvom OrangeLink/EmaLink/DiaLink**: Táto funkcia je podporovaná iba na novších zariadeniach, ako je EmaLink alebo OrangeLink. Hodnota sa zobrazuje ako **Batéria RileyLinku** na obrazovke pumpy Medtronic.
- **Nastaviť neutrálny dočasný bazál**: Pumpy Medtronic predvolene pípajú každú celú hodinu, keď je aktívny dočasný bazál. Zapnutie tejto možnosti môže znížiť počet pípnutí: dočasný bazál sa pri zmene hodiny preruší, aby sa pípnutie potlačilo.

(pairing-your-rileylink-compatible-device)=

### Párovanie zariadenia kompatibilného s RileyLinkom

Zariadenie kompatibilné s RileyLinkom sa páruje z obrazovky pumpy Medtronic, nie z ponuky Bluetooth v telefóne:

- Otvorte obrazovku pumpy (**Spravovať** > **Pumpa** alebo **Otvoriť plugin** na karte Medtronic v časti **Konfigurácia** > **Pumpa**).
- Ťuknite na **Spárovať RileyLink**. **AAPS** vyhľadá zariadenia kompatibilné s RileyLinkom v okolí.
- V zozname ťuknite na svoje zariadenie. Keď sa zobrazí **RileyLink spárovaný úspešne**, ťuknite na **OK**.

## Obrazovka pumpy Medtronic

Obrazovku pumpy Medtronic otvoríte cez **Spravovať** > **Pumpa**. Obrazovka pumpy zobrazuje aktuálne informácie o stave pumpy a niektoré akcie špecifické pre Medtronic (pozrite obrázok obrazovky pumpy vyššie).

- **Stav RileyLinku**: Aktuálny stav spojenia medzi telefónom a zariadením kompatibilným s Rileylinkom. Stále by tu mal byť stav Pripojené. Akýkoľvek iný stav môže vyžadovať zásah používateľa. 
- **Batéria RileyLinku**: Aktuálna úroveň batérie vášho zariadenia EmaLink alebo OrangeLink. Zobrazí sa iba vtedy, ak je v nastaveniach Medtronic zapnuté **Zobraziť úroveň batérie reportovanú prostredníctvom OrangeLink/EmaLink/DiaLink**.
- **Stav pumpy**: Aktuálny stav spojenia s pumpou. Keďže pumpa nie je pripojená stále, väčšinou sa tu zobrazí ikona spánku. Môžu sa zobraziť aj ďalšie stavy, napríklad „Prebúdzanie“, keď sa AAPS pokúša odoslať príkaz, alebo iné možné príkazy pumpy, ako „Načítanie času pumpy“, „Nastavovanie dočasného bazálu“ atď.
- **Batéria**: Zobrazuje stav batérie podľa hodnoty, ktorú ste v nastaveniach Medtronic zvolili pre **Typ batérie (Zobrazenie napájania)**.
- **Posledné spojenie**: Ako dávno prebehlo posledné úspešné spojenie s pumpou.
- **Posledný bolus**: Ako dávno bol podaný posledný úspešný bolus.
- **Základná hodnota bazálu**: Základná bazálna dávka, ktorá v túto hodinu beží na pumpe podľa vášho aktívneho profilu.
- **Dočasný bazál**: Dočasný bazál, ktorý sa práve podáva; môže byť aj 0 jednotiek za hodinu.
- **Zásobník**: Koľko inzulínu je v zásobníku (aktualizuje sa aspoň raz za hodinu).
- **Chyby**: Text chyby, ak nastal problém (zobrazí sa najmä pri chybe v konfigurácii).

V dolnej časti obrazovky sú tieto tlačidlá:

- **Obnoviť** slúži na obnovenie aktuálneho stavu pumpy. Použite ho iba vtedy, ak bolo spojenie dlhší čas prerušené, pretože si to vyžaduje úplné obnovenie dát (načítanie histórie, načítanie/nastavenie času, načítanie profilu, stavu batérie atď.).
- **Spárovať RileyLink**: Vyhľadá a spáruje vaše zariadenie kompatibilné s RileyLinkom (pozrite [vyššie](#pairing-your-rileylink-compatible-device)).
- **História pumpy**: Zobrazí históriu pumpy (pozrite [nižšie](#MedtronicPump-pump-history)).
- **Štatistiky RL**: Zobrazí štatistiky RL (pozrite [nižšie](#MedtronicPump-rl-status-rileylink-status)).
- **Prebudenie a prispôsobenie** a **Resetovať RileyLink**: Pozrite [Akcie](#medtronic-actions) nižšie.
- **Odstránenie blokovania bolusu**: Zobrazí sa iba na krátky čas po boluse, kým **AAPS** čaká, kým pumpa dokončí jeho podanie. Ťuknutím na toto tlačidlo sa čakanie ukončí.

(MedtronicPump-pump-history)=

## História pumpy

![Obrazovka histórie pumpy s tlačidlami filtra](../images/Medtronic03.png)

História pumpy sa načítava každých 5 minút a ukladá sa lokálne. Ukladá sa iba história za posledných 24 hodín. Je to pohodlný spôsob, ako si v prípade potreby pozrieť správanie pumpy. Ukladajú sa iba položky dôležité pre AAPS, nie konfiguračné funkcie, ktoré pre AAPS nemajú význam.

Otvoríte ju ťuknutím na **História pumpy** na obrazovke pumpy. Predvolene je vybrané **Všetko**. Ťuknutím na jedno z tlačidiel filtra hore (napríklad **Bolusy**, **Bazály** alebo **Alarmy**) zobrazíte iba jeden typ záznamov.

(MedtronicPump-rl-status-rileylink-status)=

## Stav RL (Stav RileyLinku)

![Stav RileyLinku – Nastavenia](../images/Medtronic04.png) ![Stav RileyLinku – História](../images/Medtronic05.png)

Dialóg Stav RL má dve karty:

- **Nastavenia**: Zobrazuje nastavenia zariadenia kompatibilného s RileyLinkom: nakonfigurovanú adresu, pripojené zariadenie, stav pripojenia, chybu pripojenia a verzie firmvéru RileyLinku. Typ zariadenia je vždy Pumpa Medtronic, Model je model vašej pumpy, Sériové číslo je nastavené sériové číslo, Frekvencia pumpy ukazuje, akú frekvenciu používate, a Posledná použitá frekvencia je naposledy použitá frekvencia.
- **História**: Zobrazuje históriu komunikácie. Položky RileyLink ukazujú zmeny stavu RileyLinku a položky Medtronic ukazujú, ktoré príkazy boli odoslané do pumpy.

(medtronic-actions)=

## Akcie

Keď používate ovládač Medtronic, na obrazovke pumpy (**Spravovať** > **Pumpa**) sú k dispozícii dve ďalšie akcie:

- **Prebudenie a prispôsobenie** – Ak sa AAPS dlhší čas nepripojil k pumpe (mal by sa pripájať každých 5 minút), môžete vynútiť ladenie (Tune Up). Pokúsi sa nadviazať spojenie s pumpou tak, že prehľadá všetky možné rádiové frekvencie, ktoré vaša pumpa používa. Ak sa spojenie podarí, úspešná frekvencia sa nastaví ako predvolená. Kým ladenie prebieha, ukazuje ho stav RileyLinku na obrazovke pumpy. Ak ladenie zlyhá (napríklad preto, že pumpa bola mimo dosahu), **AAPS** to sám skúsi znovu približne každých 10 minút.
- **Resetovať RileyLink** – Ak resetujete svoje zariadenie kompatibilné s RileyLinkom, možno budete musieť použiť túto akciu, aby sa zariadenie mohlo znovu nakonfigurovať (nastavenie frekvencie, typu frekvencie a kódovania).

## Dôležité poznámky

### Pri konfigurácii NS je potrebná zvláštna pozornosť

AAPS používa na synchronizáciu sériové číslo a sériové číslo je viditeľné v NS. Keďže sériové číslo starej pumpy Medtronic sa dá zneužiť na vzdialené ovládanie pumpy, dôkladne zabezpečte svoju stránku NS, aby sériové číslo vašej pumpy neuniklo. Pozrite https://nightscout.github.io/nightscout/security/

### Používatelia OpenAPS

Používatelia OpenAPS by mali vedieť, že AAPS s pumpou Medtronic používa úplne iný prístup ako OpenAPS. Pri používaní AAPS komunikujete s pumpou hlavne cez telefón. In normal use cases it is likely that the only time it is required to use the pump menu is when changing reservoirs. Pri OpenAPS je to veľmi odlišné, tam sa aspoň časť bolusu zvyčajne podáva tlačidlami rýchleho bolusu. Ak pumpou ručne podávate bolus, môžu nastať problémy, keď sa AAPS v rovnakom čase pokúsi podať bolus. Existujú kontroly, ktoré sa snažia takýmto problémom predísť, ale aj tak by ste sa tomu mali, ak je to možné, vyhnúť.

### Logovanie

Ak potrebujete riešiť problémy s fungovaním pumpy Medtronic, vyberte ikonu ponuky v ľavom hornom rohu obrazovky a zvoľte Údržba a nastavenia logov (Log Settings). Pri riešení akýchkoľvek problémov s pumpou Medtronic skontrolujte Pump, PumpComm a PumpBTComm.

### CGM Medtronic

CGM Medtronic momentálne NIE JE podporované.

### Ručné používanie pumpy

Na pumpe by ste nemali ručne podávať bolusy ani nastavovať dočasné bazály. Všetky takéto príkazy by sa mali posielať cez AAPS. Ak ručné príkazy predsa použijete, musí medzi nimi byť odstup aspoň 3 minúty, aby sa znížilo riziko problémov.

### Zmeny časového pásma a letný čas (DST) alebo cestovanie s pumpou Medtronic a AAPS

AAPS automaticky rozpozná zmenu časového pásma a aktualizuje čas v pumpe, keď sa váš telefón prepne na nový čas.

Cestovanie na východ znamená, že k aktuálnemu času pridávate hodiny (napr. z GMT+0 na GMT+2), čo nespôsobí žiadne problémy, pretože nedôjde k prekrytiu (napr. nemôže sa stať, že by rovnaká hodina nastala dvakrát). Cestovanie na západ však môže spôsobiť problémy, pretože sa v skutočnosti vraciate v čase, čo môže viesť k nesprávnym dátam IOB.

Vývojári o problémoch pri cestovaní na západ vedia a na možnom riešení sa pracuje. Podrobnosti nájdete tu: https://github.com/andyrozman/RileyLinkAAPS/issues/145 Zatiaľ majte na pamäti, že tento problém môže nastať, a pri zmene časového pásma všetko dôkladne sledujte.

### Je GNARL plne kompatibilné zariadenie typu Rileylink?

Kód GNARL plne podporuje všetky funkcie, ktoré ovládač Medtronic v AAPS používa, takže je plne kompatibilný. Treba upozorniť, že to vyžaduje ďalšiu prácu, pretože si musíte zohnať kompatibilný hardvér a potom do zariadenia nahrať kód GNARL.

**Poznámka autora:** Upozorňujeme, že softvér GNARL je stále experimentálny a málo otestovaný a nemal by sa považovať za taký bezpečný ako RileyLink.

(MedtronicPump-faq)=

## Časté otázky

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### What to do if I lose connection to RileyLink and/or pump?

Na vyriešenie problémov so spojením môžete skúsiť viacero možností.

- Ťuknite na **Prebudenie a prispôsobenie** na obrazovke pumpy (**Spravovať** > **Pumpa**), ako je popísané vyššie.
- Vypnite Bluetooth na telefóne, počkajte 10 sekúnd a potom ho znovu zapnite. Zariadenie Rileylink sa tak bude musieť znovu pripojiť k telefónu.
- Resetujte zariadenie Rileylink. Potom musíte ťuknúť na **Resetovať RileyLink** na obrazovke pumpy (**Spravovať** > **Pumpa**).
- Iným používateľom pomohli obnoviť spojenie tieto kroky, keď iné postupy nezabrali: 
    1. Reštartujte telefón
    2. *Počas* reštartu telefónu reštartujte zariadenie Rileylink
    3. Otvorte AAPS a nechajte spojenie obnoviť

### Ako zistiť, akú frekvenciu používa moja pumpa

![Model pumpy](../images/Medtronic06.png)

Na zadnej strane pumpy nájdete riadok s číslom modelu a so špeciálnym trojpísmenovým kódom. Prvé dve písmená určujú typ frekvencie a posledné písmeno určuje farbu. Možné hodnoty pre frekvenciu:

- NA – Severná Amerika (vo výbere frekvencie musíte zvoliť „US & Canada (916 MHz)“)
- CA – Kanada (vo výbere frekvencie musíte zvoliť „US & Canada (916 MHz)“)
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 MHz)")

(MedtronicPump-pump-unreachable)=

### Ako opraviť chybu „pump unreachable“ (pumpa nedostupná)

Niektoré pumpy Medtronic po aktualizácii **AAPS** hlásia chybu „pump unreachable“ (pumpa nedostupná). Opravíte ju zmenou typu kódovania:

1. Prejdite do **Konfigurácia** > **Pumpa** a na karte **Medtronic** ťuknite na **Nastavenia**.
2. Set **Medtronic Encoding** to **Hardware 4b6b Encoding**.

## Kde získať pomoc

Vývoj ovládača Medtronic robí komunita na **dobrovoľníckom** základe. Skôr než požiadate o pomoc:

1. **Prečítajte si** príslušnú časť tejto dokumentácie, aby ste si overili, ako má funkcia fungovať.
2. **Opýtajte sa** na kanáli *#AAPS* na [Discorde](https://discord.gg/4fQUWHZ4Mw) alebo na niektorom z ďalších [kanálov komunity](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahláste chybu**: prehľadajte [existujúce hlásenia (issues)](https://github.com/nightscout/AndroidAPS/issues); ak tam vaša chyba nie je, otvorte [nové hlásenie](https://github.com/nightscout/AndroidAPS/issues) a priložte svoje [log súbory](../GettingHelp/AccessingLogFiles.md).

Keď žiadate o pomoc, uveďte značku a model telefónu, verziu Androidu, verziu **AAPS** a jednoduchý popis problému (čo sa zmenilo, kedy to naposledy fungovalo).