(Extended-Carbs-extended-carbs-ecarbs)=
# Predĺžené sacharidy / „eSacharidy“

## Čo sú eSacharidy a kedy sú užitočné?

Pri bežnej liečbe pumpou sú predĺžené bolusy dobrým spôsobom, ako zvládnuť mastné alebo inak pomaly vstrebávané jedlá, ktoré zvyšujú glykémiu dlhšie, než pôsobí inzulín. Pri okruhu však predĺžené bolusy nedávajú až taký zmysel (a prinášajú technické problémy), pretože sú v podstate pevný vysoký dočasný bazál. To je v rozpore s tým, ako okruh funguje: bazálnu dávku upravuje dynamicky. Podrobnosti nájdete nižšie v časti [predĺžený bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment).

Takéto jedlá však treba stále nejako zvládnuť. Preto AAPS podporuje tzv. predĺžené sacharidy alebo eSacharidy.

eSacharidy sú sacharidy rozdelené na niekoľko hodín. Pri bežných jedlách, ktoré majú viac sacharidov ako tukov a bielkovín, zvyčajne stačí zadať sacharidy vopred (a v prípade potreby znížiť úvodný bolus), aby sa inzulín nepodal príliš skoro.  Pri pomalšie vstrebávaných jedlách, pri ktorých by zadanie všetkých sacharidov vopred viedlo k príliš vysokému IOB zo SMB, však môžete použiť eSacharidy. Tie presnejšie napodobnia, ako sa sacharidy (a všetky sacharidové ekvivalenty, ktoré zadáte za iné živiny) vstrebávajú a ovplyvňujú glykémiu. Vďaka týmto informáciám môže okruh podávať SMB postupnejšie, aby tieto sacharidy pokryl. Dá sa to chápať ako dynamický predĺžený bolus (malo by to fungovať aj bez SMB, ale pravdepodobne menej účinne).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Ako sa eSacharidy používajú

Ak chcete zadať eSacharidy, otvorte dialóg **Sacharidy** (**Ošetrenia** → **Sacharidy**), zadajte celkové množstvo sacharidov, nastavte **Trvanie** a prípadne posuňte začiatok pomocou **Čas sacharidov** (*čísla nižšie sú len príklady, vlastné hodnoty si budete musieť vyskúšať, aby ste pre svoje situácie dosiahli uspokojivý priebeh glykémie*):

![Zadanie sacharidov](../images/eCarbs_Dialog.png)

eSacharidy na hlavnej obrazovke: číslo v zátvorke v poli **COB** ukazuje sacharidy, ktoré ešte len prídu, a graf **COB** ukazuje každý budúci záznam eSacharidov ako oranžovú značku. Ak graf **COB** nevidíte, pridajte ho pomocou **Pridať graf** pod grafmi (pozrite [Obrazovky AAPS](../DailyLifeWithAaps/AapsScreens.md)).

![eSacharidy v poli COB a na grafe COB](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Typ sacharidov v Bolusovej kalkulačke: chlieb, koláč alebo pizza

V [Bolusovej kalkulačke](#aaps-screens-bolus-wizard) môžete tromi tlačidlami pod poľom **Sacharidy** vybrať, ako rýchlo sa vaše jedlo vstrebáva. Pred potvrdením jedno vyberte. Podľa typu **AAPS** berie časť zadaných sacharidov ako bežné sacharidy a pri pomalých, výdatných jedlách neskôr pridá [predĺžené sacharidy („eSacharidy“)](#Extended-Carbs-extended-carbs-ecarbs). Ťuknite na ikonu **(i)** vedľa tlačidiel. Uvidíte typické jedlá pre vybraný typ a to, ako mení vaše sacharidy.

| Typ                     | Typické jedlá (ako sú uvedené v aplikácii)                                                                 | Sacharidy teraz, použité pre bolus | Pridané eSacharidy                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------- |
| **Chlieb** (predvolený) | Chlieb, slané pečivo, jogurt, ovocie, zemiaky, ryža, ovsené vločky, zelenina                               | 100 %                              | Žiadne                                                  |
| **Koláč**               | Halušky, cestoviny, ázijské jedlá bohaté na sacharidy a tuky, sladké a kysnuté pečivo, cereálie, med, džem | 90 %                               | 20 %, začiatok o 60 minút neskôr, rozložené na 2 hodiny |
| **Pizza**               | Lasagne, pizza, hamburgery, hranolky, pečené zemiaky, chipsy                                               | 80 %                               | 35 %, začiatok o 60 minút neskôr, rozložené na 3 hodiny |

**Príklad**: zadáte 100 g a vyberiete **Pizza**. Bolus sa vypočíta pre 80 g, ktoré sa zaznamenajú teraz. 35 g eSacharidov začne o 1 hodinu neskôr a rozloží sa na 3 hodiny.

Dobré vedieť:
* Nie je to obyčajné rozdelenie: pri type **Koláč** a **Pizza** je súčet zaznamenaných sacharidov **vyšší, ako ste zadali** (110 % a 115 %). Navyše pridané sacharidy sú iba v eSacharidoch.
* Bolus pokrýva iba sacharidy zaznamenané teraz. **AAPS** na eSacharidy nepodáva bolus vopred: okruh ich zohľadní, keď začnú, ako akékoľvek iné [eSacharidy](#Extended-Carbs-extended-carbs-ecarbs).
* Ak nastavíte **Čas sacharidov**, eSacharidy začnú 60 minút po tomto čase.
* Potvrdzovací dialóg zobrazí eSacharidy na samostatnom riadku, _napr._ „eSacharidy 35 g / 3 h (+60 min)“.
* Gramy sa zaokrúhľujú nadol na celé čísla.
* Percentá, oneskorenia a trvania sú pevné; v nastaveniach sa nedajú zmeniť.
* Voľba sa nepamätá: kalkulačka sa vždy otvorí s typom **Chlieb**.

______________________________________________________________________

Jeden zo spôsobov, ako pomocou tejto funkcie zvládnuť tuky a bielkoviny, je opísaný tu: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Odporúčané nastavenie, príklad a dôležité poznámky

Odporúčame používať APS plugin OpenAPS SMB so zapnutými SMB a zapnutým nastavením *Povoliť SMB s COB*.

Napríklad pri pizze môžete podať (čiastočný) bolus vopred cez *Bolusovú kalkulačku* a potom v dialógu *Sacharidy* zadať zvyšné sacharidy s trvaním 4–6 hodín a začiatkom po 1 alebo 2 hodinách.

Rýchlejšie to ide, ak eSacharidy pridá za vás *Bolusová kalkulačka*: pod poľom **Sacharidy** vyberte [typ sacharidov](#AapsScreens-carbs-type) **Koláč** alebo **Pizza** (pozrite vyššie). Množstvá a časovanie sú pevné, preto ak chcete iné hodnoty, použite radšej dialóg *Sacharidy*.

**Dôležité poznámky:** Samozrejme si budete musieť vyskúšať, aké konkrétne hodnoty vám vyhovujú. Na to, aby bol algoritmus viac alebo menej agresívny, môžete tiež opatrne upraviť nastavenie *Maximálny počet minút bazálu, ktorými sa limituje SMB*. Pri jedlách s malým množstvom sacharidov a veľa tukmi a bielkovinami môže stačiť použiť iba eSacharidy bez ručných bolusov (pozrite vyššie uvedený blog). Pri vytvorení eSacharidov sa vytvorí aj poznámka v Starostlivosti so všetkými zadanými údajmi, aby ste mohli zadávanie ľahšie skúšať a zlepšovať.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Predĺžený bolus a prečo nefunguje v uzavretom okruhu?

Ako bolo spomenuté vyššie, predĺžené ani viacvlnové (multiwave) bolusy v uzavretom okruhu naozaj nefungujú. [See below](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Predĺžený bolus a prepnutie na otvorený okruh – iba pumpy Dana a Insight

Niektorí ľudia sa pýtali na možnosť používať predĺžený bolus v AAPS aj tak, pretože chceli niektoré jedlá riešiť tak, ako sú zvyknutí.

Preto **AAPS** ponúka používateľom púmp Dana a Insight predĺžený bolus: otvorte **Spravovať** a vyberte **Predĺžený bolus**.

**AAPS** vás najprv upozorní, že uzavretý okruh sa počas predĺženého bolusu zastaví. Ťuknutím na **OK** pokračujte:

![Upozornenie: predĺžený bolus zastaví režim uzavretého okruhu](../images/extended_bolus_stops_loop.png)

Zadajte množstvo **Inzulín** a **Trvanie**, potom ťuknite na potvrdzovacie tlačidlo dole a na **OK**:

![Dialóg predĺženého bolusu s 2 U na 60 minút](../images/extended_bolus_dialog.png)

Pri pumpe Insight predĺžený bolus *nie je k dispozícii*, ak sa používa [emulácia TBR](#Accu-Chek-Insight-Pump-settings-in-aaps).

Kým predĺžený bolus beží, okruh pracuje v režime **Otvorený okruh** (ikona okruhu na hlavnej obrazovke sa zmení) a po skončení predĺženého bolusu sa uzavretý okruh automaticky znova zapne:

![Ikona otvoreného okruhu na hlavnej obrazovke počas predĺženého bolusu](../images/extended_bolus_main_screen.png)

Menu **Spravovať** zobrazí tlačidlo **Zrušiť** s rýchlosťou a uplynulým / celkovým časom (napríklad **Zrušiť 2,00 U/h 1/60'**). Ťuknutím naň predĺžený bolus predčasne zastavíte:

![Tlačidlo Zrušiť pre bežiaci predĺžený bolus v menu Spravovať](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Prečo predĺžené bolusy nefungujú v uzavretom okruhu

1. Okruh určí, že teraz sa má podávať 1,55 U/h. Pre algoritmus nie je dôležité, či sa to podá ako predĺžený bolus alebo ako dočasný bazál (TBR). Niektoré pumpy v skutočnosti predĺžený bolus používajú. Čo sa má potom stať? Väčšina ovládačov púmp potom predĺžený bolus zastaví -> Nemuseli ste ho ani spúšťať.

2. Ak by ste mali predĺžený bolus ako vstup, čo by sa malo stať v modeli?

   1. Mal by sa považovať za neutrálny spolu s bazálnou dávkou (BR) a okruh by na ňom pracoval? Potom by okruh mal byť schopný aj znížiť bolus, ak napríklad klesnete príliš nízko a všetok „neutrálny“ inzulín sa odoberie?
   2. Mal by sa predĺžený bolus jednoducho pripočítať? Mal by teda okruh jednoducho pokračovať? Aj pri tej najhoršej hypoglykémii? Nemyslím si, že je to dobré: hypoglykémia sa predpovedá, ale nesmie sa jej zabrániť?

3. IOB, ktorý predĺžený bolus vytvorí, sa prejaví po 5 minútach pri ďalšom behu. Okruh by preto podal menej bazálu. Veľa sa teda nezmení... až na to, že sa stratí možnosť zabrániť hypoglykémii.
