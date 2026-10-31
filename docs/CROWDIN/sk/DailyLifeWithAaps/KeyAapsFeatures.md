# Kľúčové funkcie AAPS

## Režim okruhu

Stav okruhu sa zobrazuje na hlavnej obrazovke jednou z ikon nižšie.

**AAPS** ponúka niekoľko režimov okruhu, napríklad Uzavretý okruh (1), Ochrana pred nízkou glykémiou (LGS – 2) a Otvorený okruh (3).

Ako zvoliť režim okruhu a čo znamenajú ďalšie ikony na obrázku (4 až 6), nájdete v časti [Obrazovky AAPS > Hlavná obrazovka > Stav okruhu](#AapsScreens-loop-status).

![Stav okruhu](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Otvorený okruh

**AAPS** priebežne vyhodnocuje všetky dostupné údaje (IOB, COB, BG...) a v prípade potreby navrhuje ošetrenia (dočasné bazály), ako upraviť vašu liečbu.

Návrhy sa nevykonajú automaticky (ako pri uzavretom okruhu). Návrhy musí používateľ zadať manuálne do pumpy (ak sa používa virtuálna pumpa) alebo pomocou tlačidla, ak je **AAPS** pripojený k reálnej pumpe.

Keď má **AAPS** návrh, v spodnej navigácii hlavnej obrazovky sa zobrazí položka **Okruh** s odznakom. Ťuknite na ňu, prečítajte si návrh („Prijať nový dočasný bazál“) s dávkou, trvaním a dôvodom a potom stlačte **Vykonať**, aby sa vykonal:

![Návrh otvoreného okruhu s tlačidlom Vykonať](../images/screens/loop_tab.png)

Návrh je platný len niekoľko minút. Ak je starší ako približne 9 minút, alebo ak bol medzitým okruh pozastavený alebo pumpa odpojená, **AAPS** ho odmietne a do pumpy sa nič neodošle (*„Tento návrh je príliš starý. Do pumpy nebolo nič odoslané. Počkajte na ďalší.“*). Počkajte na ďalší návrh.

Táto možnosť slúži na oboznámenie sa s fungovaním systému **AAPS** alebo v prípade, že používate nepodporovanú pumpu. Bez ohľadu na to, čo tu zvolíte, budete v otvorenom okruhu až do konca **[Cieľa 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Ochrana pred nízkou glykémiou (LGS)

V tomto režime je [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) nastavený na nulu.

To znamená, že ak glykémia klesá, **AAPS** vám môže znížiť bazálnu dávku. Ak však glykémia stúpa, automatická korekcia sa nevykoná. Vaše bazálne dávky zostanú rovnaké, ako sú definované vo vašom aktuálnom **profile**. Iba ak je IOB záporný (z predchádzajúcej ochrany pred nízkou glykémiou), podá sa ďalší inzulín na zníženie **glykémie**.

Tento režim je dostupný od **[Cieľa 6](#objectives-objective6)**.

Okrem toho, že tento režim zvolíte sami, **AAPS** sa doň môže prepnúť aj sám: počas plnenia **[Cieľa 6](#objectives-objective6)** a vždy, keď zistí duplicitné hodnoty glykémie (pozrite [výstražný znak glykémie](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Uzavretý okruh

Systém **AAPS** priebežne vyhodnocuje všetky dostupné údaje (IOB, COB, BG...) a v prípade potreby automaticky upravuje dávkovanie (*t. j.* bez ďalšieho zásahu z vašej strany), aby sa dosiahol nastavený [cieľový rozsah alebo hodnota](#profile-glucose-targets) (podávanie bolusu, dočasný bazál, vypnutie inzulínu, aby sa predišlo hypoglykémii atď.).

Uzavretý okruh pracuje v rámci mnohých bezpečnostných limitov, ktoré si môžete individuálne nastaviť.

Uzavretý okruh je možný iba vtedy, ak ste v **[Cieli 7](#objectives-objective7)** alebo vyššom a používate podporovanú pumpu.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens je algoritmus, ktorý sleduje odchýlky glykémie (pozitívne/negatívne/neutrálne).
- Na základe týchto odchýlok sa pokúsi zistiť, nakoľko ste citliví/rezistentní.
- Implementácia oref v **OpenAPS** pracuje s kombináciou údajov za 24 a 8 hodín. Použije vždy tú z nich, ktorá ukazuje vyššiu citlivosť.
- Používatelia, ktorí prešli z oref1, si pravdepodobne všimnú, že systém reaguje na zmeny menej dynamicky, pretože citlivosť sa vyhodnocuje buď za 24, alebo za 8 hodín.
- Výmena kanyly alebo zmena profilu vráti pomer Autosens späť na 100 % (percentuálne prepnutie profilu s trvaním Autosens nevynuluje).
- Funkcia Autosens upravuje vašu bazálnu dávku a ISF (t. j. napodobňuje to, čo robí zmena profilu).
- Ak dlhší čas nepretržite jete sacharidy, Autosens bude v tomto období menej účinný, pretože sacharidy sú vylúčené z výpočtov delty **glykémie**.
- The deviations are converted into a **sensitivity ratio** (a percentage): a ratio below 100% means AAPS thinks you're more sensitive to insulin than your **Profile** assumes (so it lowers effective basal and raises the ISF value), while a ratio above 100% means you're more resistant (so it raises basal and lowers the ISF value).
- Predvolene sa tento pomer drží medzi 0,7 (70 %, citlivejší) a 1,2 (120 %, rezistentnejší), takže séria nezvyčajných údajov nemôže posunúť vaše dávkovanie príliš ďaleko od vášho **profilu**. Tieto hranice sa dajú upraviť v rozšírených nastaveniach detekcie citlivosti.
- Autosens a [Autotune](../AdvancedOptions/Autotune.md) riešia ten istý základný problém v rôznom časovom rozsahu: Autosens priebežne jemne upravuje vaše *aktuálne* dávkovanie podľa posledných 8–24 h, zatiaľ čo Autotune pomaly upravuje samotný váš *profil* podľa histórie za niekoľko týždňov. Používať oba naraz je normálne a očakávané – navzájom sa dopĺňajú, nezdvojujú sa.

*Úplný technický popis algoritmu autosens nájdete v [dokumentácii Autosens od OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, skratka pre **Super micro bolus**, je funkcia OpenAPS zavedená od roku 2018 v rámci algoritmu Oref1. Na rozdiel od **AMA** **SMB** nepoužíva na úpravu glykémie dočasné bazály, ale hlavne **malé Super Micro Bolusy**. V situáciách, keď by **AMA** pridal 1,0 IU inzulínu pomocou dočasného bazálu, **SMB** podá niekoľko Super Micro Bolusov v malých krokoch v **5-minútových intervaloch**, napr. 0,4 IU, 0,3 IU, 0,2 IU a 0,1 IU. Zároveň (z bezpečnostných dôvodov) sa skutočná bazálna dávka na určitý čas nastaví na 0 IU/h, aby sa predišlo predávkovaniu (**nulový dočasný bazál, „zero-temping“**). Vďaka tomu systém dokáže upraviť glykémiu rýchlejšie ako pri zvýšení dočasného bazálu v režime **AMA**.

Vďaka SMB môže pri jedlách, ktoré obsahujú iba „pomalé“ sacharidy, stačiť, ak systému oznámite plánované množstvo sacharidov a zvyšok necháte na **AAPS**. To však môže viesť k vyšším postprandiálnym (po jedle) vrcholom, pretože predbolusovanie nie je možné. Alebo môžete podať (ak je to potrebné, aj s predstihom) **úvodný bolus**, ktorý **len čiastočne** pokryje sacharidy (napr. 2/3 odhadovaného množstva), a zvyšok inzulínu nechať podať **SMB**.

![SMB na hlavnom grafe](../images/SMBs.png)

SMB sa zobrazujú na [grafe IOB](#aaps-screens-iob) ako modré trojuholníky. Ak chcete vidieť, koľko inzulínu sa podalo, [stlačte a podržte](#aaps-screens-graph-press-and-hold) graf na trojuholníku, alebo použite [Históriu ošetrení](#aaps-screens-treatments).

Funkcie **SMB** obsahujú niektoré bezpečnostné mechanizmy:

1. **Najväčšia jednotlivá dávka SMB**  
  Najväčšia jednotlivá dávka SMB môže byť len najmenšia z týchto hodnôt:
  
        * hodnota zodpovedajúca aktuálnej bazálnej dávke (upravenej pomocou autosens) za dobu nastavenú v „Maximálny počet minút bazálu, ktorými sa limituje SMB“, napr. množstvo bazálu na ďalších 30 minút, alebo
        * polovica aktuálne potrebného množstva inzulínu, alebo
        * zvyšná časť vašej hodnoty maxIOB v nastaveniach.
      

2. **Nízke dočasné bazály**  
  Pri **SMB** sa častejšie používajú nízke dočasné bazály (nazývané „low temps“) alebo dočasné bazály 0 U/h (nazývané „zero-temps“). Toto je zámerne navrhnuté z bezpečnostných dôvodov a nemá to žiadne negatívne účinky, ak je **Profil** nastavený správne. Na hlavnom grafe má krivka IOB (tenká žltá čiara) väčší význam ako priebeh dočasných bazálov.

3. **Neohlásené jedlá**  
  Ďalšie výpočty na predpoveď priebehu glykémie, napr. pomocou **UAM** (neohlásené jedlá). Aj bez manuálneho zadania sacharidov používateľom dokáže **UAM** automaticky zistiť významný nárast glykémie v dôsledku jedla, adrenalínu alebo iných vplyvov a pokúsiť sa ho upraviť pomocou **SMB**. Pre istotu to funguje aj naopak a môže zastaviť SMB skôr, ak dôjde k neočakávane rýchlemu poklesu glykémie. Preto by mal byť UAM pri SMB vždy aktívny.

SMB sám nerozhoduje o tom, že je potrebný inzulín – vychádza z tých istých kombinovaných predpovedí glykémie (výsledná glykémia, nulový dočasný bazál, COB, UAM), ktoré sú opísané v časti [ako AAPS mení predpovede na rozhodnutie o dávkovaní](#aaps-screens-how-predictions-become-a-dosing-decision). SMB a nulový dočasný bazál (zero-temping) sú jednoducho dva nástroje, ktorými AAPS toto rozhodnutie uskutočňuje.

**Na používanie SMB musíte mať spustený [cieľ 9](#objectives-objective9).**

Pozrite si aj [dokumentáciu oref1/SMB od OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) s úplným technickým popisom alebo [Timove informácie o SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/), ktoré napísal člen komunity.

Nastavenia pre OpenAPS SMB sú opísané nižšie.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximum basal rate

Toto bezpečnostné nastavenie určuje maximálny dočasný bazál, ktorý môže inzulínová pumpa podať. Je známe aj ako **max-basal**.

Hodnota sa meria v jednotkách za hodinu (U/h). Odporúča sa ho nastaviť na rozumnú hodnotu. Odporúčané nastavenie tohto parametra je:

**MAX-BASAL = NAJVYŠŠIA BAZÁLNA DÁVKA x 4**

Napríklad, ak bola najvyššia bazálna dávka vo vašom profile 0,5 U/h, môžete to vynásobiť štyrmi, aby ste získali hodnotu 2 U/h.

**AAPS** obmedzuje túto hodnotu „pevným limitom“ podľa [Nastavenia > Bezpečnosť > Vek pacienta](#preferences-patient-type). Pevné limity sú nasledovné:

- Dieťa: 2
- Dospievajúci: 5
- Dospelý: 10
- Dospelý s nízkou citlivosťou: 12
- Tehotná: 25

*Pozrite si tiež [prehľad pevne nastavených limitov](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximálny celkový IOB, ktorý OpenAPS nemôže prekročiť

Táto hodnota určuje maximálny **aktívny inzulín** (bazálny a bolusový IOB), pod ktorým **AAPS** zostane, keď beží v režime uzavretého okruhu. Je známa aj ako **maxIOB**.

Ak je aktuálny IOB (napr. po boluse k jedlu) vyšší ako nastavená hodnota, okruh prestane podávať inzulín, kým IOB neklesne pod túto hodnotu.

Dobrý začiatok pre nastavenie tohto parametra je:

      maxIOB = priemerný bolus k jedlu + 3x maximálny denný bazál
    

Pri nastavovaní **max-IOB** buďte opatrní a trpezliví. Pre každého je to iné a môže to závisieť aj od priemernej celkovej dennej dávky (TDD).

**AAPS** obmedzuje túto hodnotu „pevným limitom“ podľa [Nastavenia > Bezpečnosť > Vek pacienta](#preferences-patient-type). Pevné limity sú nasledovné:

- Dieťa: 7
- Dospievajúci: 13
- Dospelý: 22
- Dospelý s nízkou citlivosťou: 30
- Tehotná: 70

*Pozrite si tiež [prehľad pevne nastavených limitov](#Open-APS-features-overview-of-hard-coded-limits).*

Poznámka: Pri použití **SMB** sa **max-IOB** vypočítava inak ako v AMA. V **AMA** je maxIOB bezpečnostný parameter pre bazálny **IOB**, zatiaľ čo v režime SMB zahŕňa aj bolusový IOB.

### Použiť dynamickú citlivosť

Toto je funkcia [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). Po povolení sa sprístupnia nové nastavenia. Nastavenia sú vysvetlené na stránke [DynamicISF](#dyn-isf-preferences).

### Použiť Autosens

Toto je funkcia [Autosens](#Open-APS-features-autosens). Pri používaní DynamicISF nemožno používať Autosens, pretože ide o dva rôzne algoritmy, ktoré menia tú istú premennú (citlivosť).

Autosens sleduje odchýlky glykémie (pozitívne/negatívne/neutrálne). Na základe týchto odchýlok sa pokúsi zistiť, nakoľko ste citliví/rezistentní, a podľa nich upraví bazálnu dávku a ISF.

Po povolení sa sprístupnia nové nastavenia.

#### Citlivosť zvyšuje cieľ

Ak je táto možnosť zapnutá, detekcia citlivosti (autosens) môže zvýšiť cieľ, keď zistí citlivosť (pod 100 %). V tomto prípade sa váš cieľ zvýši o percento zistenej citlivosti.

Ak je cieľ upravený detekciou citlivosti, zobrazí sa na hlavnej obrazovke so zeleným pozadím.

![Cieľ upravený pomocou autosens](../images/Home2020_DynamicTargetAdjustment.png)

Toto nastavenie je dostupné, keď je zapnutá jedna z možností „Použiť dynamickú citlivosť“ alebo „Použiť Autosens“.

#### Rezistencia znižuje cieľ

Ak je táto možnosť zapnutá, detekcia citlivosti (autosens) môže znížiť cieľ, keď zistí rezistenciu (nad 100 %). V tomto prípade sa váš cieľ zníži o percento zistenej rezistencie.

Toto nastavenie je dostupné, keď je zapnutá jedna z možností „Použiť dynamickú citlivosť“ alebo „Použiť Autosens“.

### Povoliť SMB

Povoľte túto možnosť, ak chcete používať funkcie SMB. Ak je vypnutá, nebudú sa podávať žiadne **SMB**.

Po povolení sa sprístupnia nové nastavenia.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Povoliť SMB s vysokými dočasnými cieľmi

Ak je toto nastavenie zapnuté, **SMB** sa budú podávať aj vtedy, keď používateľ zvolil vysoký **dočasný cieľ** (definovaný ako 100 mg/dl alebo 5,6 mmol/l a vyššie, bez ohľadu na cieľ v **profile**). Pri zapínaní buďte opatrní: **SMB** môžu byť príliš agresívne, ak vaše nastavenia nie sú dobre vyladené alebo ak sa váš **profil** často mení (napríklad u detí).

When this setting is disabled, a high **Temp Target** turns **SMBs** off. Napríklad, ak je táto možnosť vypnutá, **SMB** sa dajú vypnúť nastavením **dočasného cieľa** 100 mg/dl alebo 5,6 mmol/l a vyššie. Táto možnosť tiež vypne **SMB** bez ohľadu na to, ktorá iná podmienka sa snaží SMB zapnúť – okrem nízkeho **dočasného cieľa**, ako je **Pred jedlom** (alebo akýkoľvek **dočasný cieľ** 98 mg/dl alebo 5,4 mmol/l a nižšie), pri ktorom sa **SMB** môžu stále podávať, aby priviedli **glykémiu** k cieľu.

This setting does not turn **SMB** on by itself. With a high temp target, **SMB** is only given if one of the other settings below (for example **Enable SMB always** or **Enable SMB with COB**) also allows it.

(Open-APS-features-enable-smb-always)=

#### Vždy povoliť SMB

Ak je toto nastavenie zapnuté, SMB je zapnutý vždy (nezávisle od COB, dočasných cieľov alebo bolusov). Ak je toto nastavenie zapnuté, ostatné nastavenia „Povoliť…“ uvedené nižšie nemajú žiadny vplyv. Ak je však možnosť **Povoliť SMB s vysokými dočasnými cieľmi** vypnutá a je nastavený vysoký dočasný cieľ, SMB budú vypnuté.

Toto nastavenie je dostupné iba vtedy, ak **AAPS** zistí, že používate [spoľahlivý zdroj glykémie](#GettingStarted-TrustedBGSource) s pokročilým filtrovaním. FreeStyle Libre 1 sa nepovažuje za spoľahlivý zdroj, pretože pri poruche senzora hrozí, že sa budú donekonečna opakovať staré údaje glykémie.

Zašumené údaje môžu spôsobiť, že **AAPS** bude považovať glykémiu za veľmi rýchlo stúpajúcu, a podá zbytočné SMB. Viac informácií o vyhladzovaní dát a zašumení nájdete [tu](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Povoliť SMB s COB

Ak je toto nastavenie povolené, SMB sa aktivuje, keď je COB väčší ako 0.

Toto nastavenie nie je viditeľné, ak je zapnutá možnosť „Vždy povoliť SMB“.

#### Povoliť SMB s nízkymi dočasnými cieľmi

Ak je toto nastavenie zapnuté, SMB je zapnutý, keď je nastavený dočasný cieľ (pred jedlom, aktivita, hypo, vlastný). Ak je toto nastavenie zapnuté, ale **Povoliť SMB s vysokými dočasnými cieľmi** je vypnuté, SMB sa zapne pri nízkom dočasnom cieli (98 mg/dl alebo 5,4 mmol/l a nižšie), ale vypne sa pri vysokom dočasnom cieli.

Toto nastavenie nie je viditeľné, ak je zapnutá možnosť „Vždy povoliť SMB“.

#### Povoliť SMB po jedle

Ak je povolené, SMB zostane zapnuté 6 hodín po oznámení sacharidov, aj keď COB dosiahne 0.

Z bezpečnostných dôvodov je toto nastavenie dostupné iba vtedy, ak **AAPS** zistí, že používate spoľahlivý zdroj glykémie. Nie je viditeľné, ak je zapnutá možnosť „Vždy povoliť SMB“.

Toto nastavenie je dostupné iba vtedy, ak **AAPS** zistí, že používate [spoľahlivý zdroj glykémie](#GettingStarted-TrustedBGSource) s pokročilým filtrovaním. FreeStyle Libre 1 sa nepovažuje za spoľahlivý zdroj, pretože pri poruche senzora hrozí, že sa budú donekonečna opakovať staré údaje glykémie.

Zašumené údaje môžu spôsobiť, že **AAPS** bude považovať glykémiu za veľmi rýchlo stúpajúcu, a podá zbytočné SMB. Viac informácií o šume a vyhladzovaní údajov nájdete [tu](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Toto nastavenie nie je viditeľné, ak je zapnutá možnosť „Vždy povoliť SMB“.

#### Interval SMB

Táto funkcia obmedzuje frekvenciu podávania SMB. Táto hodnota určuje minimálny čas medzi dvoma SMB. Pamätajte, že okruh sa spúšťa vždy, keď príde nová hodnota glykémie (zvyčajne každých 5 minút). Odpočítajte 2 minúty, aby mal okruh viac času na dokončenie. Napr. ak chcete, aby sa SMB podával pri každom behu okruhu, nastavte túto hodnotu na 3 minúty.

Predvolená hodnota: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Maximálny počet minút bazálu, ktorými sa limituje SMB

Toto je dôležité bezpečnostné nastavenie. Táto hodnota určuje, koľko SMB sa môže podať na základe množstva bazálneho inzulínu za daný čas, keď je toto množstvo pokryté COB.

Vyššia hodnota umožňuje, aby bol SMB agresívnejší. Mali by ste začať s predvolenou hodnotou 30 minút. Po získaní skúseností zvyšujte hodnotu po 15 minútach a sledujte účinok pri viacerých jedlách.

Neodporúča sa nastaviť hodnotu vyššiu ako 90 minút, pretože algoritmus by potom nemusel zvládnuť klesajúcu glykémiu ani s bazálom 0 U/h („zero-temp“). Nastavte si tiež alarmy, ktoré vás varujú dostatočne skoro pred hypoglykémiou, najmä ak ešte testujete nové nastavenia.

Predvolená hodnota: 30 min.

#### Maximálny počet minút bazálu, ktorými sa limituje SMB pre UAM

Toto nastavenie umožňuje upraviť silu SMB počas UAM, keď už nie sú žiadne sacharidy.

Predvolená hodnota: rovnaká ako **Maximálny počet minút bazálu, ktorými sa limituje SMB**.

Toto nastavenie je viditeľné iba vtedy, ak sú zapnuté možnosti „Povoliť SMB“ a „Povoliť UAM“.

(enable-uam)=

### Povoliť UAM

Ak je táto možnosť povolená, algoritmus SMB dokáže rozpoznať neohlásené jedlá. Pomáha to, ak zabudnete **AAPS** oznámiť sacharidy, alebo ich zle odhadnete a zadané množstvo je nesprávne, alebo ak jedlo s veľkým obsahom tuku a bielkovín trvá dlhšie, ako sa čakalo. Aj bez zadania sacharidov dokáže UAM rozpoznať rýchly nárast glykémie spôsobený sacharidmi, adrenalínom atď. a snaží sa ho upraviť pomocou SMB. Funguje to aj opačne: ak dôjde k rýchlemu poklesu glykémie, môže to zastaviť SMB skôr.

**Preto by mal byť UAM pri používaní SMB vždy zapnutý.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Prah požadovaných sacharidov

Minimálny počet gramov sacharidov pre zobrazenie upozornenia na návrh sacharidov. Keď referenčný návrh (algoritmus) zistí, že potrebujete sacharidy, navrhne vám zjesť ďalšie sacharidy. V tomto prípade dostanete upozornenie, ktoré je možné odložiť o 5, 15 alebo 30 minút.

Upozornenia na potrebu sacharidov je možné v prípade potreby odoslať do Nightscoutu, v takom prípade sa upozornenie zobrazí a pošle ďalej.

V každom prípade sa požadované sacharidy zobrazia v časti COB na hlavnej obrazovke.

![Požadované sacharidy zobrazené na hlavnej obrazovke](../images/main/main_screen_carbs_required.png)

### Rozšírené nastavenia

Úplný prehľad parametrov (vrátane nastavení, ktoré tu nie sú opísané) nájdete v [dokumentácii OpenAPS o predvoľbách a bezpečnostných nastaveniach](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Vždy používať krátku priemernú deltu namiesto jednoduchých údajov** Ak túto funkciu povolíte, **AAPS** použije krátku priemernú deltu/glykémiu za posledných 15 minút, čo je zvyčajne priemer posledných troch hodnôt. Vďaka tomu je **AAPS** stabilnejší pri zašumených zdrojoch údajov, ako sú xDrip a Libre.

**Maximálny bezpečnostný násobiteľ najvyššieho denného bazálu** Toto je dôležitý bezpečnostný limit. Predvolené nastavenie (ktoré pravdepodobne nebude potrebné upravovať) je 3. To znamená, že systém **AAPS** nikdy nebude môcť nastaviť dočasný bazál, ktorý je viac ako 3-násobok najvyššej hodinovej bazálnej dávky nastavenej v pumpe a/alebo profile používateľa. Príklad: ak je vaša najvyššia bazálna dávka 1,0 U/h a maximálny bezpečnostný násobiteľ najvyššieho denného bazálu je 3, potom **AAPS** môže nastaviť dočasný bazál najviac 3,0 U/h (= 3 x 1,0 U/h).

Predvolená hodnota: 3 (nemali by ste ju meniť, pokiaľ to naozaj nepotrebujete a neviete, čo robíte)

**Bezpečnostný násobiteľ aktuálneho bazálu** Toto je ďalší dôležitý bezpečnostný limit. Predvolené nastavenie (ktoré tiež pravdepodobne nebude potrebné upravovať) je 4. To znamená, že systém **AAPS** nikdy nebude môcť nastaviť dočasný bazál, ktorý je viac ako 4-násobok aktuálnej hodinovej bazálnej dávky nastavenej v pumpe a/alebo profile používateľa.

Predvolená hodnota: 4 (nemali by ste ju meniť, pokiaľ to naozaj nepotrebujete a neviete, čo robíte)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** je **experimentálny** algoritmus pre pokročilých používateľov. Je postavený na OpenAPS SMB a pridáva pravidlá, ktoré robia faktor citlivosti na inzulín (ISF) silnejším alebo slabším podľa toho, ako sa správa vaša glykémia.

Je to vývojová funkcia: dá sa zapnúť iba vo [vývojárskom zostavení (dev)](../AdvancedOptions/DevBranch.md) so zapnutým **Engineering Mode** (vývojársky režim). V bežnom zostavení pre vydanie zostáva natrvalo vypnutý, a preto sa nezobrazuje v **Konfigurácia → APS**. Splnenie [cieľov](../SettingUpAaps/CompletingTheObjectives.md) ho neodomkne.

Po jeho výbere obsahujú jeho **Nastavenia** nastavenia OpenAPS SMB a navyše skupinu **Nastavenia AutoISF**:

- **Povoliť AutoISF**: zapne úpravy ISF. Bez neho sa algoritmus správa ako OpenAPS SMB.
- **AutoISF min** a **AutoISF max**: ako slabá a ako silná môže byť ISF, podobne ako pri limitoch Autosens. S predvolenou hodnotou 1,0 je účinok vypnutý.
- **Váhy**: každá z nich riadi jedno pravidlo a predvolená hodnota 0,0 toto pravidlo vypína. 
  - keď sa zmena glykémie **zrýchľuje**, ISF sa posilní (viac inzulínu);
  - keď sa zmena glykémie **spomaľuje**, ISF sa oslabí (menej inzulínu);
  - keď je glykémia **pod cieľom**, ISF sa oslabí;
  - keď je glykémia **nad cieľom**, ISF sa posilní;
  - váha **po jedle** (post-prandial) a váha **trvania** pôsobia po jedlách a vtedy, keď glykémia zostáva dlho vysoká.
- **Pomer podávania SMB** (s minimom, maximom a rozsahom glykémie): aká časť potrebného inzulínu sa môže podať ako SMB.
- **SMB max rozšírenie rozsahu**: koľkokrát sa môže prekročiť bežný limit veľkosti SMB ([maximálny počet minút bazálu](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), zvyčajne 120 minút). Predvolená hodnota 1 nič nemení; možné je až 5. Túto experimentálnu hodnotu zvyšujte pomaly a opatrne.
- **Percento prahu IOB**: percento max IOB, nad ktorým sa SMB vypnú.

    {admonition} Iba pre skúsených používateľov
    :class: danger
    S predvolenými hodnotami Auto ISF nič nemení. Každá hodnota, ktorú zvýšite, robí **AAPS** agresívnejším. Meňte vždy len jednu hodnotu, po malých krokoch, a výsledok sledujte niekoľko dní. S hodnotou **AutoISF max** nad 2,5 buďte mimoriadne opatrní.

(Open-APS-features-advanced-meal-assist-ama)=

## Pokročilý asistent pri jedle (AMA)

AMA, skrátená forma „advanced meal assist“ (pokročilý asistent pri jedle), je funkcia OpenAPS z roku 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) umožňuje systému po boluse k jedlu rýchlejšie nastaviť vysoký dočasný bazál, ak spoľahlivo zadávate sacharidy.

Viac informácií nájdete v [dokumentácii OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximum basal rate (OpenAPS "max-basal")

Toto bezpečnostné nastavenie zabraňuje tomu, aby **AAPS** niekedy podal nebezpečne vysokú bazálnu dávku, a obmedzuje dočasný bazál na x U/h. Odporúča sa ho nastaviť na rozumnú hodnotu. Dobré odporúčanie je vziať najvyššiu bazálnu dávku vo vašom profile a vynásobiť ju 4, najmenej však 3. Napríklad, ak je najvyššia bazálna dávka vo vašom profile 1,0 U/h, môžete ju vynásobiť štyrmi, aby ste získali hodnotu 4 U/h, a nastaviť 4 ako bezpečnostný parameter.

Nemôžete si zadať hodnotu akú chcete. Z bezpečnostných dôvodov existuje „pevný limit“, ktorý závisí od veku pacienta. „Pevný limit“ pre maxIOB je v AMA nižší ako v SMB. Pre deti je hodnota najnižšia, pre dospelých s nízkou citlivosťou na inzulín je najvyššia.

Pevne nastavené parametre v **AAPS** sú:

- Dieťa: 2
- Dospievajúci: 5
- Dospelý: 10
- Dospelý s nízkou citlivosťou: 12
- Tehotná: 25

*Pozrite si tiež [prehľad pevne nastavených limitov](#Open-APS-features-overview-of-hard-coded-limits).*

### Maximálny bazálny IOB, ktorý OpenAPS môže podať \[U\] (OpenAPS „max-iob“)

Tento parameter obmedzuje maximálny bazálny IOB, pri ktorom **AAPS** ešte pracuje. Ak je IOB vyšší, prestane podávať ďalší bazálny inzulín, kým bazálny IOB neklesne pod limit.

Predvolená hodnota je 2, ale mali by ste tento parameter pomaly zvyšovať, aby ste zistili, ako veľmi má na vás vplyv a ktorá hodnota vám najlepšie vyhovuje. Pre každého je to iné a závisí to aj od priemernej celkovej dennej dávky (TDD). Z bezpečnostných dôvodov je stanovený limit, ktorý závisí od veku pacienta. „Pevný limit“ pre maxIOB je v AMA nižší ako v SMB.

- Dieťa: 3
- Dospievajúci: 5
- Dospelý: 7
- Dospelý s nízkou citlivosťou: 12
- Tehotná: 25

*Pozrite si tiež [prehľad pevne nastavených limitov](#Open-APS-features-overview-of-hard-coded-limits).*

### Použiť Autosens (AMA)

Tu si môžete vybrať, či chcete používať [detekciu citlivosti](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens, alebo nie.

### Úprava cieľovej glykémie pomocou automatickej detekcie citlivosti

Ak je táto možnosť zapnutá, autosens môže okrem bazálu a ISF upravovať aj ciele. Vďaka tomu môže **AAPS** pracovať „agresívnejšie“, alebo nie. Skutočný cieľ sa tak môže dosiahnuť rýchlejšie.

### Rozšírené nastavenia

- Normálne nemusíte nastavenia v tomto dialógu meniť!
- Ak ich chcete aj tak zmeniť, uistite sa, že rozumiete, čo robíte – pozrite si úplný prehľad parametrov v [dokumentácii OpenAPS o predvoľbách a bezpečnostných nastaveniach](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Vždy používať krátku priemernú deltu namiesto jednoduchých údajov** Ak túto funkciu povolíte, **AAPS** použije krátku priemernú deltu/glykémiu za posledných 15 minút, čo je zvyčajne priemer posledných troch hodnôt. Vďaka tomu pracuje **AAPS** stabilnejšie pri zašumených zdrojoch údajov, ako sú xDrip a Libre.

**Maximálny bezpečnostný násobiteľ najvyššieho denného bazálu** Toto je dôležitý bezpečnostný limit. Predvolené nastavenie (ktoré pravdepodobne nebude potrebné upravovať) je 3. To znamená, že systém **AAPS** nikdy nebude môcť nastaviť dočasný bazál, ktorý je viac ako 3-násobok najvyššej hodinovej bazálnej dávky nastavenej vo vašej pumpe. Príklad: ak je vaša najvyššia bazálna dávka 1,0 U/h a maximálny bezpečnostný násobiteľ najvyššieho denného bazálu je 3, potom **AAPS** môže nastaviť dočasný bazál najviac 3,0 U/h (= 3 x 1,0 U/h).

Predvolená hodnota: 3 (nemali by ste ju meniť, pokiaľ to naozaj nepotrebujete a neviete, čo robíte)

**Bezpečnostný násobiteľ aktuálneho bazálu** Toto je ďalší dôležitý bezpečnostný limit. Predvolené nastavenie (ktoré tiež pravdepodobne nebude potrebné upravovať) je 4. To znamená, že systém **AAPS** nikdy nebude môcť nastaviť dočasný bazál, ktorý je viac ako 4-násobok aktuálnej hodinovej bazálnej dávky nastavenej vo vašej pumpe.

Predvolená hodnota: 4 (nemali by ste ju meniť, pokiaľ to naozaj nepotrebujete a neviete, čo robíte)

**Deliteľ bolus snooze DIA** Funkcia „bolus snooze“ pôsobí po boluse k jedlu. **AAPS** po jedle nenastavuje nízke dočasné bazály počas doby DIA vydelenej parametrom „bolus snooze“. Predvolená hodnota je 2. To znamená, že pri DIA 5 h bude „bolus snooze“ trvať 5 h : 2 = 2,5 h.

Predvolená hodnota: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Prehľad pevne nastavených limitov

|            | Dieťa | Dospievajúci | Dospelý | Dospelý s nízkou citlivosťou | Tehotná |
| ---------- | ----- | ------------ | ------- | ---------------------------- | ------- |
| MAXBOLUS   | 5     | 10           | 17      | 25                           | 60      |
| MINDIA     | 5     | 5            | 5       | 5                            | 5       |
| MAXDIA     | 9     | 9            | 9       | 9                            | 10      |
| MINIC      | 2     | 2            | 2       | 2                            | 0,3     |
| MAXIC      | 100   | 100          | 100     | 100                          | 100     |
| MAXIOB_AMA | 3     | 5            | 7       | 12                           | 25      |
| MAXIOB_SMB | 7     | 13           | 22      | 30                           | 70      |
| MAXBASAL   | 2     | 5            | 10      | 12                           | 25      |