(Insulin-Concentration)=
# Koncentrácia inzulínu

```{warning}
Všetky komerčné pumpy sú určené na použitie **IBA** s inzulínom U100. Použitie inej koncentrácie inzulínu v pumpe môže byť nebezpečné. Hoci čoraz viac používateľov používa AAPS s inými koncentráciami, prepočet treba vždy riadiť a často vedie k chybám (aj u veľmi skúsených používateľov!).
```

## Pripomenutie základov o inzulíne

Táto kapitola vysvetľuje základné pojmy merania a podávania inzulínu.

### Jednotka inzulínu: miera účinku

Inzulín sa meria v **medzinárodných jednotkách (IU)**, ktoré vyjadrujú jeho biologickú aktivitu (schopnosť znížiť glykémiu), nie iba jeho fyzickú hmotnosť.

- **Definícia:** 1 IU zodpovedá aktivite určitého množstva inzulínu, štandardizovaného na **približne 0,04167 mg**.
- **Hlavná myšlienka:** „Jednotka“ znamená rovnaký biologický účinok pri všetkých typoch inzulínu, čo zaručuje konzistentné dávkovanie.

### Koncentrácie inzulínu

Inzulín sa vyrába v rôznych silách, ktoré sú určené počtom jednotiek na mililiter (ml).

- **U100:** Celosvetový štandard, obsahuje **100 IU/ml**.
- **U200–U500:** Koncentrovanejšie inzulíny (napr. U200 má 200 IU/ml) pre menšie objemy pri podaní.
- **U40/U50:** Less common, historical concentrations (40 IU/ml and 50 IU/ml). **U40 vyžaduje striekačky určené pre U40.**
- **Ručné riedenie:** Klinický postup na prípravu veľmi zriedeného inzulínu (napr. U50, U10) pre zriedkavé prípady, ako je použitie u novorodencov alebo extrémna citlivosť. To si vyžaduje veľmi starostlivú prípravu v lekárni.

```{admonition} Critical Warning
:class: danger
Použitie koncentrácie so zariadením, ktoré pre ňu nie je určené, je mimoriadne nebezpečné a môže spôsobiť vážne predávkovanie alebo poddávkovanie. **Vždy trikrát skontrolujte, či koncentrácia inzulínu zodpovedá špecifikácii striekačky, pera alebo pumpy.**
```

## When is a non-standard concentration used?

Hoci sú inzulínové pumpy určené pre inzulín U100, niektoré špecifické zdravotné situácie vyžadujú neštandardné koncentrácie. Tieto prípady si vyžadujú mimoriadnu opatrnosť a veľmi starostlivé riadenie.

### Prípad 1: zriedený inzulín pre veľmi nízke dávky

- **Situácia:** Liečba diabetu 1. typu u veľmi malých bábätiek a batoliat.
- **Problém:** Ich potreba inzulínu je taká nízka, že najmenšia dávka, ktorú pumpa dokáže podať (napr. 0,05 U), môže byť stále príliš veľká. Preto je ťažké dosiahnuť presnú kontrolu glykémie a riziko hypoglykémie je vysoké.
- **Riešenie:** Použiť veľmi zriedený inzulín (napr. U10, čo je 10 IU/ml).
- **Účinok:** Zväčší sa objem tekutiny podanej na jednotku inzulínu. Keď sú „balíčky“ inzulínu väčšie objemom, ale slabšie koncentráciou, umožní to oveľa jemnejšie úpravy a väčšiu presnosť dávkovania s existujúcimi nastaveniami pumpy.

```{admonition} Critical Safety Note on Dilution
:class: danger
Riedenie inzulínu je vysoko rizikový postup, ktorý sa nikdy nesmie skúšať doma bez špeciálneho zaškolenia a lekárskeho dohľadu. Musí ho vykonať zdravotnícky pracovník alebo zaškolený opatrovateľ pomocou sterilného riedidla, ktoré je určené presne pre daný typ inzulínu. **Nikdy nepoužívajte vodu z vodovodu, fyziologický roztok ani inú tekutinu**, pretože môžu inzulín deaktivovať, zmeniť jeho účinok a priniesť nebezpečné nečistoty.
```

### Prípad 2: koncentrovaný inzulín pri vysokej potrebe inzulínu alebo výraznej inzulínovej rezistencii

- **Situácia:** Liečba dospelých alebo dospievajúcich s výraznou inzulínovou rezistenciou alebo ľudí, ktorí cítia lokálnu bolesť z prídavných látok v štandardnom inzulíne.
- **Problém:**
  1. **Vysoká potreba:** Veľmi vysoká denná potreba inzulínu môže prekročiť maximálny bolus pumpy alebo jej denné limity podávania.
  1. **Bolesť:** Konzervačné látky v inzulíne môžu pri infúzii spôsobiť pálenie alebo podráždenie.
- **Riešenie:** Použiť koncentrovanejší inzulín, napríklad U200 (200 IU/ml).
- **Účinok:** Potrebná dávka inzulínu sa podá v polovičnom objeme. Pre používateľa sa musia upraviť vnútorné nastavenia pumpy (napr. bazálne dávky a bolusy na polovicu), aby sa zohľadnila dvojnásobná koncentrácia a podal sa správny počet jednotiek. Zníži sa tým aj objem tekutiny, ktorá môže dráždiť a podáva sa pod kožu.

## Ako riadiť koncentráciu inzulínu v AAPS (AAPS 3 a staršie)?

Použitie iného inzulínu ako U100 v okruhu AAPS vyžaduje veľmi starostlivé nastavenie, aby výpočty softvéru zodpovedali skutočne podávanému inzulínu. Jedným bežným spôsobom je „použitie upraveného profilu“.

### Použitie upraveného profilu

Pri tomto spôsobe sa AAPS „oklame“, aby si myslel, že pacient potrebuje menej inzulínu, než v skutočnosti potrebuje. Tým sa vyrovná to, že pumpa podáva koncentrovanejší inzulín, než pre aký je určená. Nasledujúci prípad platí pre inzulín s koncentráciou U200 v pumpe, ktorá je určená pre U100.

- **Hlavný problém:** Pumpa určená pre U100 je kalibrovaná tak, aby na **1 jednotku** podala **10 µl**. Ak ju naplníte inzulínom U200 (1 jednotka U200 zodpovedá **5 µl** inzulínu), keď na pumpe zvolíte **1 jednotku**, podá **10 µl** inzulínu, ale tento objem teraz obsahuje **2 jednotky inzulínu U200**. To vedie k predávkovaniu o 100 %.
- **Riešenie „Prepnutie profilu na 50 %“:** Aby sa to napravilo, celý liečebný profil pacienta sa v AAPS zmení tak, aby bol „dvakrát slabší“.
  1. Používateľ vytvorí nový profil zo svojho štandardného profilu pre U100 pomocou funkcie „Prepnutie profilu na **50 %**“.
  1. Tým vznikne nový profil, v ktorom:
     - **Bazálne dávky** sú na polovicu.
     - **Inzulínovo-sacharidový pomer (IC)** je dvojnásobný (napr. 1:10 g sa zmení na 1:20 g).
     - **Citlivosť na inzulín (ISF)** je dvojnásobná (napr. 1 jednotka znižuje glykémiu o 50 mg/dl (2,8 mmol/l) sa zmení na 1 jednotka ju znižuje o 100 mg/dl (5,6 mmol/l)).
- **Opravený výsledok:** AAPS si teraz myslí, že pacient potrebuje iba polovicu inzulínu. Keď vypočíta a zadá bolus **1 jednotky**, pumpa (určená pre U100, ale naplnená inzulínom U200) podá **10 µl**, ktoré obsahujú **2 skutočné jednotky inzulínu U200**. Keďže AAPS vypočítal túto dávku z profilu s „polovičnou silou“, toto podanie **2 skutočných jednotiek** je správna, zamýšľaná dávka. Výpočty okruhu s „polovičnou silou“ zodpovedajú podávaniu pumpy s „dvojnásobnou silou“.

```{admonition} Critical Risks and Common Errors
:class: caution

Tento spôsob prináša výrazné riziká, pretože vytvára trvalý nesúlad medzi údajmi v aplikácii a fyzickou realitou.

**Hlavná chyba: Nesúlad pri „externom boluse“**

Najčastejšia chyba nastane, keď sa inzulín podáva a zaznamenáva **mimo** systému AAPS a pumpy.

- **Situácia:** AAPS s upraveným profilom vypočíta na jedlo bolus **5 jednotiek**. Používateľ si ho podá perom s inzulínom U200.
- **Dvojitá chyba:**
  1. **Nesprávne zvolená dávka:** Používateľ si myslí „AAPS vypočítal 5 jednotiek“ a kvôli peru s U200 chce podať **5 skutočných jednotiek U200** bez akéhokoľvek prepočtu. Keďže je však profil na polovicu, telo v skutočnosti potrebuje **10 skutočných jednotiek**. Ide o **poddávkovanie o 50 %**, ktoré môže viesť k hyperglykémii.
  1. **Nesprávny výpočet aktívneho inzulínu (IOB) (nadhodnotené IOB):** Keď používateľ zaznamená tento externý bolus v AAPS, zapíše **5 jednotiek**. To je nesprávne. Keďže profil v AAPS je pre U200, **1 jednotka v AAPS sa rovná 2 skutočným jednotkám**. Preto by sa 5 skutočných jednotiek podaných perom malo v aplikácii zaznamenať ako **2,5 jednotky**. Keď používateľ zaznamená 5 jednotiek, nadhodnotí IOB o 100 %. AAPS si teraz myslí, že v tele je 5 „koncentrovaných jednotiek“ (zodpovedá 10 skutočným jednotkám), hoci aktívnych je iba 5 skutočných jednotiek. To môže spôsobiť, že okruh potlačí bazálny inzulín alebo zníži budúce bolusy, čím sa ešte zvýši riziko hyperglykémie z pôvodného poddávkovania.

**Ďalšie riziká:**

- **Zavádzajúce údaje a reporty:** Všetky údaje v AAPS alebo Nightscoute – vrátane IOB, celkovej dennej dávky (TDD) a historických reportov – sú v „koncentrovaných jednotkách“. Používateľ a jeho lekársky tím tak dostávajú skreslený obraz. Lekár, ktorý si prezerá report, môže vidieť TDD 30 jednotiek a neuvedomiť si, že pacient v skutočnosti dostal 60 skutočných jednotiek. To vedie k nesprávnemu hodnoteniu liečby.
- **Zmenené myslenie:** Po dlhšom používaní začne používateľ „myslieť“ v hodnotách aplikácie, ktoré sú na polovicu. Zvykne si, že jeho ISF je 100 mg/dl (5,6 mmol/l) alebo jeho bazál je 0,5 U/h, a zabudne, že tieto hodnoty sú „koncentrované“. Tým vzniká nebezpečná závislosť od systému a stráca sa prehľad o skutočnej potrebe inzulínu, ktorý je pre bezpečnosť kľúčový pri poruche pumpy alebo problémoch s aplikáciou.

**Záver:** Tento spôsob vyžaduje absolútnu ostražitosť, pretože používateľ musí neustále prepočítavať medzi „koncentrovaným svetom“ v aplikácii a fyzickým svetom. Akékoľvek externé podanie inzulínu alebo kontrola údajov tento spôsob myslenia narúša a predstavuje vážne riziko. Zásadne mení význam každého čísla v systéme.
```

## Použitie parametra koncentrácie (nová funkcia v AAPS 4.0)

Na zníženie rizík upraveného profilu riadi nová funkcia koncentráciu inzulínu priamo v AAPS. Táto funkcia robí prepočty automaticky, takže hlavná aplikácia môže vždy pracovať v **skutočných medzinárodných jednotkách (IU)**.

### Ako to funguje: automatický prepočet

Základným princípom je jasné oddelenie logiky aplikácie od komunikácie s pumpou:

- **AAPS používa medzinárodné jednotky:** Hlavná databáza AAPS, algoritmy, reporty a logy **vždy používajú skutočné IU**. To znamená, že vaše IOB, TDD a nastavenia liečby (bazál, ISF, IC) zodpovedajú skutočným biologickým jednotkám inzulínu.
- **Ovládač pumpy používa koncentrované jednotky:** Všetky hodnoty odoslané do ovládača pumpy alebo prijaté z neho sa automaticky prepočítajú na „koncentrované jednotky“ v ovládači pumpy podľa zvolenej koncentrácie.
  - **Príklad s U200:** Keď používateľ zadá **bolus 1 jednotky**, ovládač pumpy dostane **0,5 CU (koncentrovaných jednotiek)** a až potom to odošle do pumpy. Pumpa (nastavená pre U100) potom podá **5 µl**, ktoré obsahujú **1 IU inzulínu U200**.

### Výhody a zostávajúce riziká

**Výhody:**

- Odpadá potreba upraveného profilu a s ním spojené chyby pri prepočítavaní v hlave.
- Používatelia môžu vždy „myslieť“ v skutočných IU.
- Pri externom boluse perom stačí na pere zvoliť požadované množstvo inzulínu (bez ohľadu na použité pero a koncentráciu inzulínu). Nie je potrebný žiadny prepočet, pretože perá U100 aj U200 vždy používajú IU na voľbu jednotiek.
- Všetky reporty a údaje AAPS (TDD, IOB) sú v skutočných IU, takže sú jasné pre používateľa aj jeho lekársky tím.
- Odpadá riziko nesprávneho výpočtu externých bolusov, pretože sa zaznamenávajú v skutočných IU.

**Zostávajúce riziká:**

- **Zmena myslenia:** Používatelia, ktorí prechádzajú zo spôsobu s „upraveným profilom“, musia prepnúť svoj profil späť na správny skutočný profil (t. j. dvakrát silnejší, ak prechádzajú z U200), a potrebujú čas, aby si zmenili **spôsob myslenia**. Keď si zvykli na „koncentrované“ hodnoty v aplikácii, musia sa znovu naučiť dôverovať **skutočným, neskrytým hodnotám v IU**, ktoré sa zobrazujú všade. Toto obdobie zvykania si prináša riziko nesprávneho výkladu.
- **Ručný bolus na pumpe:** Použitie vlastnej funkcie bolusu na pumpe (mimo AAPS) vedie k predávkovaniu o 100 %, pretože pumpa podáva inzulín U200 s výpočtom objemu pre U100.
- **Všeobecné upozornenie:** Použitie neštandardných koncentrácií zostáva pokročilým postupom s rizikami a oficiálne sa neodporúča.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Nalepte si na pumpu trvalú poznámku **„Inzulín U200“** ako pripomienku, aby ste na to nikdy nezabudli!
```

### Zobrazenie v používateľskom rozhraní

Pre prehľadnosť používateľské rozhranie zobrazuje skutočné aj koncentrované jednotky tam, kde je to dôležité. Ak je aktuálny inzulín U100, používateľské rozhranie zostáva bez zmeny.

**Príklady zobrazenia:**

- **Dialóg Priebeh podávania bolusu:**
  - Dialóg Priebeh podávania bolusu je súčasťou hlavnej aplikácie AAPS, preto sa zobrazujú iba informácie v IU (v súlade s voľbou používateľa): **`2,50 U / 10,00 U podaných`**
- **Rozhranie ovládača pumpy (aktuálny stav):**
  - V prehľade pumpy sa podané množstvo zobrazuje v oboch jednotkách; napríklad ak je zvolený `U200`: **`Posledný bolus: 10 U (5 CU) (10')`**

**Poznámka:** Obe jednotky (U a CU) sú viditeľné iba v hlavnom prehľade pumpy. Podľa konkrétnej pumpy môžete mať aj iné obrazovky, kde sa zobrazujú iba koncentrované jednotky. Historické údaje v ovládačoch pumpy zvyčajne zostanú v „koncentrovaných jednotkách“.

### Zapnutie funkcie

Kvôli bezpečnostným rizikám nie je tento parameter predvolene zapnutý. Ak ho chcete zapnúť, dokončite Cieľ 3 a vo Všeobecných nastaveniach zapnite **Podpora koncentrácie inzulínu**.

### Vytvorenie nového inzulínu s inou koncentráciou

Ak chcete vytvoriť inzulín s inou koncentráciou, najprv otvorte **Spravovať → Nastavenia inzulínu**.

- Kliknite na ikonu „+“ v dolnej časti obrazovky.
- V rozbaľovacej ponuke zvoľte novú požadovanú koncentráciu (dostupné sú U10, U20, U50, U100, U200).
  - Diluted concentrations like U10, U20 or U50 are for children with very low basal rates.
  - U200 je skôr pre dospelých s vysokou potrebou inzulínu.

  ![Rozbaľovacia ponuka koncentrácie v Nastaveniach inzulínu](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Upravte čas vrcholu, dobu pôsobenia inzulínu (DIA) a prípadne prezývku inzulínu (voliteľné).
- Použite tlačidlo uloženia vpravo hore na obrazovke.

V tomto kroku je inzulín vytvorený, ale nedá sa zvoliť priamo v **Nastaveniach inzulínu**.

### Zmena koncentrácie z U100 na Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Z bezpečnostných dôvodov AAPS zaznamená zmenu koncentrácie iba pri výmene zásobníka alebo výmene náplasťovej pumpy/podu.
```

Keď začínate s inzulínom U100, celý váš profil, historické údaje a reporty sú v súlade so štandardom medzinárodných jednotiek, takže zmena je veľmi „jednoduchá“:

- Pri náplasťovej pumpe/pode máte pri výmene pumpy samostatný krok, v ktorom zvolíte inzulín, ktorý do nej dávate.
- Pri pumpe s hadičkou kliknite v Prehľade (rozbalený riadok stavu) na tlačidlo Plnenie/doplňovanie (pre výmenu inzulínu) a potom kliknite na tlačidlo „Zmeniť“.

1. V rozbaľovacej ponuke zvoľte cieľovú koncentráciu (napr. `U200`).
1. Potom nižšie zvoľte správny inzulín. Kým nepotvrdíte, nad jeho názvom je popis **Bude aktivovaný** (namiesto **Práve aktívny**).

   ![Inzulín vybraný, ale ešte nepotvrdený: Bude aktivovaný](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Dôležité:** zmena koncentrácie sa v AAPS zaznamená až potom, ako sa prepnutie profilu použije v pumpe.
   - Tento krok je povinný pre všetky náplasťové pumpy/pody.
   - Pri pumpách s hadičkou počkajte, kým sa prepnutie profilu použije v pumpe, alebo ho použite v **Spravovať → Profil** alebo v **Nastaveniach inzulínu**.

To je všetko!

Ak pri výmene inzulínu beží dočasné **Prepnutie profilu** (s nastaveným trvaním), nový inzulín dostane aj profil, ktorý sa vráti po skončení dočasného prepnutia. Starý inzulín sa nevráti.

### Zmena koncentrácie pre používateľov s inzulínom U200 a profilom na 50 % (AAPS 4)

Keď už v pumpe používate inzulín U200, ale s profilom na 50 %, musíte v porovnaní so štandardnou zmenou z inzulínu U100 urobiť ďalšie kroky.

Pamätajte, že najťažšie pravdepodobne nebude správne zvládnuť zmenu v AAPS, ale skôr znovu naučiť svoj mozog myslieť v „IU“ namiesto „CU“. Všetky bežné hodnoty bolusov (raňajky, obed, večera...) budú dvakrát vyššie, rovnako aj vaše TDD, bazálne dávky atď. Prvých niekoľko týždňov musíte byť veľmi opatrní, aby ste nerobili chyby, kým znovu nebudete „myslieť“ v medzinárodných jednotkách.

- Najprv si pripravte nový profil so všetkými hodnotami v medzinárodných jednotkách:
  - Urobte dočasné prepnutie profilu na 200 % vášho bežne používaného štandardného profilu.
  - Otvorte ponuku (☰) → **Ošetrenia**, prejdite na kartu **Prepnutie profilu** a naklonujte nový profil 200 % (pozrite [Klonovanie prepnutia profilu](#your-aaps-profile-clone-profile-switch)).
  - Prepnite späť na svoj štandardný profil až do ďalšej výmeny zásobníka alebo náplasťovej pumpy.
  - Prejdite do **Spravovať → Profil** a premenujte tento nový profil na jasný názov (bude to váš budúci profil pre inzulín U200 nastavený v AAPS 4).
- Ak používate funkciu Dynamická ISF (DynISF), musíte ju vypnúť aspoň na jeden týždeň:
  - Celá vaša história zaznamenaná v AAPS alebo Nightscoute je v nesprávnych jednotkách (CU), teda polovica skutočnej hodnoty v medzinárodných jednotkách. Pred jej opätovným zapnutím počkajte aspoň jeden týždeň s používaním inzulínu U200.
- Teraz ste pripravení zmeniť inzulín (s novým U200 definovaným v **Nastaveniach inzulínu**) pri nasledujúcej výmene inzulínu alebo výmene podu.
- Keď je nový inzulín U200 správne použitý, nezabudnite aktivovať nový štandardný profil pripravený v prvom kroku.

## Ako riešiť externé bolusy s rôznymi perami?

### S inzulínom U200 a profilom na 50 % (AAPS 3)

Pamätajte, že všetky stupnice pier sú v medzinárodných jednotkách, takže bez ohľadu na použité pero (U100, U200), ak perom podávate externý bolus, musíte prepočítavať oboma smermi:

- Z AAPS do pera: ak Kalkulačka navrhne bolus alebo máte na mysli konkrétne množstvo, pri voľbe množstva na pere ho vynásobte 2 v porovnaní s rovnakým bolusom podaným z AAPS.
- Z pera do AAPS: ak ste na pere zvolili množstvo pre externý bolus, vydeľte ho 2, aby ste v AAPS zaznamenali správne množstvo (tlačidlo Inzulín, externý bolus) a dostali správny výpočet IOB v CU (koncentrovaných jednotkách).

### S inzulínom U200 a riadením koncentrácie, ktoré je súčasťou AAPS 4

S vnútorným riadením koncentrácie v AAPS je všetko oveľa jednoduchšie: stačí na pere zvoliť požadované množstvo (bez ohľadu na použité pero a príslušný inzulín) a zaznamenať ho v AAPS.

- Ak v tlačidle Inzulín zvolíte externý bolus, môžete vybrať ľubovoľný typ inzulínu definovaný v **Nastaveniach inzulínu** (hlavne U100, U200 pre perá). Takto dostanete veľmi presne vypočítané IOB, aj keď sa vrchol/DIA inzulínu použitého v pere veľmi líši od vrcholu/DIA inzulínu v pumpe.
