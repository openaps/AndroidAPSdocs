# Automatizácia

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Čo je automatizácia?

„**Automatizácia**“ je funkcia, ktorá dokáže automatizovať úlohy v AAPS.

Automatizácia vykonáva určité akcie na základe jednej alebo viacerých podmienok, teda spúšťačov. Spúšťačmi môžu byť aj nepravidelné udalosti, napríklad nízka alebo vysoká glykémia alebo určité množstvo záporného aktívneho inzulínu (IOB). Automatizácie zvládnu aj opakované udalosti, napríklad jedlá alebo cvičenie v určitých časoch dňa, alebo situáciu, keď je používateľ v určitej vzdialenosti od polohy GPS alebo v dosahu siete Wi-Fi s daným SSID. Automatizácia môže zálohovať nastavenia AAPS podľa časového plánu alebo pri každej výmene Podu.

Pravidlá automatizácie sa vytvárajú a upravujú na obrazovke **Automatizácia** (**Spravovať → Automatizácia**). Každé pravidlo má dve časti:

- Jednu alebo viac podmienok, teda „spúšťačov“, ktoré spustia akciu.

    Napríklad určitý časový plán, udalosť alebo hodnota v AAPS

- Jednu alebo viac akcií, ktoré sa vykonajú.

    Napríklad alarm, nastavenie percenta profilu alebo export nastavení AAPS pri výmene Podu.


Možností automatizácie je veľa a používateľom odporúčame, aby si ich preštudovali priamo v aplikácii AAPS v časti Automatizácia. Príklady automatizácií od iných používateľov môžete hľadať aj v skupinách používateľov AAPS na [**Facebooku**](https://www.facebook.com/groups/AndroidAPSUsers) a [**Discorde**](https://discord.gg/4fQUWHZ4Mw).

## Ako môže automatizácia pomôcť

1. **Automatizácia opakovaných úloh:** Naprogramované akcie sa vykonajú automaticky, bez zásahu používateľa.

1. **Menej únavy z rozhodovania:** Hlavnou výhodou **Automatizácií** je, že používateľ nemusí v **AAPS** stále zasahovať ručne. [Výskum](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) odhaduje, že ľudia s diabetom 1. typu musia urobiť v priemere 180 rozhodnutí denne navyše. **Automatizácie** môžu znížiť psychickú záťaž, takže používateľovi zostane viac duševnej energie na iné oblasti života.

1. **Možno lepšia kontrola glykémie:** **Automatizácie** napríklad pomôžu zaistiť, že **Dočasné ciele** sú nastavené vždy, keď sú potrebné, aj v rušných dňoch alebo keď na niečo zabudnete. Príklad: dieťa s diabetom má v škole šport v utorok o 10:00 a vo štvrtok o 14:00 a 30 minút pred športom potrebuje vysoký dočasný cieľ („TT“). Tento **Dočasný cieľ** sa môže zapnúť pomocou **Automatizácie**.

1. **AAPS sa dá veľmi prispôsobiť**, aby bol v určitých situáciách viac alebo menej agresívny, podľa toho, čo používateľ chce. Napríklad spustenie dočasne zníženého % **Profilu** na určitý čas, ak sa uprostred noci objaví záporný **IOB**. To ukazuje, že súčasný **Profil** môže byť príliš silný.

Príklad nižšie ukazuje, ako môže **Automatizácia** ušetriť niektoré kroky.

Používateľ cvičí každé ráno o 6:00: musí pamätať na to, aby v AAPS o 5:00, pred cvičením, ručne nastavil „Dočasný cieľ – Aktivita“.

![Alternatívny text](../images/Automations/automation_concept_manual.png)

Používateľ nastavil **Automatizáciu**, ktorá o 5:00 spustí „Dočasný cieľ – Aktivita“, aby boli jeho **glykémia** a **IOB** optimálne pred cvičením o 6:00:

![Alternatívny text](../images/Automations/automation_concept_automated.png)

## Na čo myslieť pred začatím používania automatizácií

1. Skôr než nastavíte niektoré automatizácie, mali by ste mať s **AAPS** primerane dobrú kontrolu **glykémie**. Automatizácie by sa nemali používať na vyrovnanie nesprávne nastavených bazálov, **ISF** alebo **CR** (viac nižšie). Nenastavujte automatické **Prepnutie profilu** na vyrovnanie vzostupu **glykémie** spôsobeného _napr._ jedlom. Na to sú vhodnejšie iné postupy (SMB atď.).

1. Ako každá technika, aj **CGM**, **pumpy** a telefóny môžu zlyhať: technické problémy alebo chyby senzora môžu narušiť akcie **Automatizácie** a môže byť potrebný ručný zásah.

1. **Requirements for Automations are likely to change as routines change**. Pri prechode medzi obdobím práce, školy a dovolenky si v kalendári nastavte pripomienku, aby ste skontrolovali, ktoré **Automatizácie** sú práve aktívne (dajú sa ľahko zapnúť aj vypnúť). Napríklad keď idete na dovolenku a už nepotrebujete automatizáciu pre školský šport alebo denné cvičenie, alebo keď treba upraviť časy.

1. **Automatizácie** môžu byť navzájom v rozpore. Preto je dobré každé nové nastavenie **Automatizácie** starostlivo skontrolovať v bezpečnom prostredí a pochopiť, prečo sa **Automatizácia** spustila alebo nespustila tak, ako ste očakávali.

1. Ak používate Autosens, skúste namiesto **Prepnutí profilu** používať **Dočasné ciele**. **Dočasné ciele** nenastavujú Autosens späť na 0. **Prepnutia profilu** Autosens vynulujú.

1. Väčšina **Automatizácií** by mala byť nastavená iba na **obmedzený čas**. Potom môže **AAPS** situáciu znova vyhodnotiť a v prípade potreby **Automatizáciu** zopakovať, ak podmienka stále platí. Napríklad „spustiť dočasný cieľ 7,0 mmol/l na 30 min“ alebo „spustiť **Profil** 110 % na 10 min“ _a_ „spustiť dočasný cieľ 5,0 mmol/l na 10 min“. Ak **Automatizácie** použijete na trvalé zmeny (napr. silnejší % profilu), hrozí hypoglykémia.

## Kedy môžem začať používať automatizáciu?

**Automatizácie** môžete začať používať v **cieli 10**.

## Kde sa v AAPS nachádzajú automatizácie?

Na spodnej navigačnej lište hlavnej obrazovky otvorte **Spravovať** a zvoľte **Automatizácia**.

## Ako nastaviť automatizáciu?

Ak chcete nastaviť **Automatizáciu**, stlačte na obrazovke Automatizácia tlačidlo **+** a vytvorte „pravidlo“:

![Vytvorenie automatizácie](../images/Automations/automation_create.png)

* zadajte názov „pravidla“ (Názov úlohy);
* stlačte „**UPRAVIŤ**“ pod položkou **Podmienka**. Na obrazovke **Podmienka** zvoľte, ako sa majú spúšťače spojiť (**A**, **Alebo**, **Exkluzívny alebo**), a stlačte „**Pridať spúšťač**“:

![Podmienka automatizácie](../images/Automations/automation_trigger_editor.png)

* pridajte aspoň jeden spúšťač:

![Spúšťače automatizácie](../images/Automations/automation_triggers.png)

* stlačte „**PRIDAŤ**“ pod položkou **Akcia** a zvoľte jednu akciu:

![Akcie automatizácie](../images/Automations/automation_actions.png)

* uložte pravidlo tlačidlom **Uložiť** a skontrolujte, že políčko vľavo od názvu pravidla je „zaškrtnuté“, aby sa **Automatizácia** aktivovala:

![Aktivovaná automatizácia](../images/Automations/automation_rule_activated.png)

Ak chcete pravidlo **Automatizácie** vypnúť, zrušte zaškrtnutie políčka vľavo od názvu **Automatizácie**. Príklad nižšie ukazuje **Automatizáciu**, ktorá je buď aktivovaná („zaškrtnutá“), alebo deaktivovaná („nezaškrtnutá“):

![Alternatívny text](../images/Automations/automation_rule_activated_deactivated.png)


Keď nastavujete **Automatizáciu**, môžete ju najprv vyskúšať tak, že v časti „Akcie“ zvolíte možnosť „Notifikácia“. **AAPS** potom najprv iba zobrazí notifikáciu a akciu skutočne nevykoná. Keď si budete istí, že sa notifikácia zobrazuje v správnom čase a za správnych podmienok, môžete v pravidle **Automatizácie** nahradiť „Notifikáciu“ skutočnou „Akciou“.

![Alternatívny text](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

**Automatizácie** sú aktívne aj vtedy, keď je okruh zakázaný!
```


## Kedy sa pravidlá kontrolujú

**AAPS** kontroluje všetky pravidlá **Automatizácie** vždy po spracovaní novej hodnoty glykémie. Pravidlá sa teda vyhodnocujú v rytme vášho CGM, aj keď je obrazovka telefónu vypnutá. Pravidlá sa kontrolujú aj vtedy, keď sa telefón začne nabíjať, keď sa zmení sieť alebo poloha a keď sa pripojí zariadenie Bluetooth. Naraz beží iba jedna kontrola, takže pravidlo, ktorého akcie trvajú dlhšie (napríklad príkaz pre pumpu), sa nemôže vykonať dvakrát.

## Bezpečnostné limity

Pre **Automatizácie** platia tieto bezpečnostné limity:

* **Dočasný cieľ** nastavený **Automatizáciou** musí byť medzi 72 a 180 mg/dl (alebo 4 a 10 mmol/l).
* **Percentuálny profil** musí byť medzi 50 % a 130 %.
* Medzi dvoma spusteniami **Automatizácie** (aj pred prvým spustením) je časový limit 5 minút.

## Správne použitie záporných hodnôt

```{admonition} Warning
:class: warning

Pri výbere zápornej hodnoty v **Automatizácii** buďte opatrní
```

Pri výbere „zápornej hodnoty“ v „Podmienke“, napríklad „menšia ako“, buďte v **Automatizáciách** opatrní. Napríklad:

![Alternatívny text](../images/Automations/automation_comparison_operators.png)

**Príklad 1:** Vytvorenie podmienky **„je menšia ako“** „-0,1 mmol/l“ (alebo „-2 mg/dl“):

Spustí **Automatizáciu** pri každom čísle, ktoré je **ostro menšie ako** -0,1 (-2). To zahŕňa čísla ako -0,2, -0,3, -0,4 (-4, -6, -8) atď. Pamätajte, že samotná hodnota -0,1 (-2) v tejto podmienke **nie je** zahrnutá. (Podmienka „je rovnaká alebo menšia ako -0,1 mmol/l (-2 mg/dl)“ _by_ hodnotu -0,1 mmol/l alebo -2 mg/dl zahŕňala.)

**Príklad 2:** Vytvorenie podmienky „je väčšia ako“ -0,1 mmol/l (-2 mg/dl):

Spustí **Automatizáciu** pri každom čísle, ktoré je **väčšie ako** -0,1 mmol/l (-2 mg/dl). To zahŕňa čísla ako 0; 0,2; 0,4 mmol/l (0, 4, 8 mg/dl) a každé iné kladné číslo.

Pri výbere týchto podmienok a hodnôt je dôležité dobre premyslieť, čo presne má vaša **Automatizácia** robiť.

(automations-automation-triggers)=
## Spúšťače automatizácie

![Spúšťače automatizácie](../images/Automations/automation_triggers.png)

Zvyšok zoznamu uvidíte, keď posuniete obrazovku nadol:

![Spúšťače automatizácie, pokračovanie](../images/Automations/automation_trigger_picker_2.png)

Používateľ si môže vybrať z rôznych „spúšťačov“. Spúšťače sú podmienky, ktoré musia byť splnené, aby sa automatizácia vykonala. Zoznam nižšie nie je úplný:

**Spúšťač:** spojenie podmienok

**Možnosti:**

Viac podmienok je možné spojiť pomocou
* „A“
* „Alebo“
* „Exkluzívny alebo“ (to znamená, že akcie sa vykonajú, ak platí jedna – a iba jedna – z podmienok)

**Spúšťač:** čas vs. opakovaný čas

**Možnosti:**

* čas = jednorazová udalosť v danom čase
* opakovaný čas = niečo, čo sa deje pravidelne (napr. raz týždenne, každý pracovný deň atď.)

**Spúšťač:** poloha

**Možnosti:**

* v [Nastavenia > Automatizácia](#preferences-maintenance-settings) si používateľ môže zvoliť požadovanú službu určovania polohy.

**Spúšťač:** služba určovania polohy

**Možnosti:**

* Použiť pasívnu polohu: **AAPS** zisťuje polohu, iba keď o ňu žiadajú iné aplikácie.
* Použiť polohu zo siete: poloha vašej siete Wi-Fi.
* Použiť polohu z GPS (Pozor! Môže to výrazne vybíjať batériu!)

**Spúšťače**: údaje z pumpy a senzora

* Spúšťač Vek kanyly: dostupný pre všetky pumpy
* Spúšťač Vek inzulínu: dostupný pre podporované pumpy
* Spúšťač Vek batérie v pumpe: dostupný pre podporované pumpy
* Spúšťač Vek senzora: dostupný vždy
* Spúšťač Aktivácia Podu: dostupný pre náplasťové pumpy

Pri všetkých spúšťačoch veku sa porovnanie „je rovnaká“ pravdepodobne nikdy nespustí. Preto v tomto prípade vytvorte rozsah pomocou dvoch spúšťačov

* Spúšťač Stav zásobníka: dostupný pre všetky pumpy. Porovnanie "NOT\_AVAILABLE" pri tomto spúšťači nefunguje, pretože **AAPS** má hodnotu vždy vyplnenú
* Spúšťač Úroveň nabitia batérie v pumpe: dostupný pre podporované pumpy. Porovnanie "NOT\_AVAILABLE" pri tomto spúšťači nefunguje, pretože **AAPS** má hodnotu vždy vyplnenú

(automations-automation-action)=
## Akcia

![Akcie automatizácie](../images/Automations/automation_actions.png)

Zvyšok zoznamu uvidíte, keď posuniete obrazovku nadol:

![Akcie automatizácie, pokračovanie](../images/Automations/automation_action_picker_2.png)

**Akcie:** spustiť **Dočasný cieľ**

**Možnosti:**

* **Glykémia** musí byť medzi 72 mg/dl a 180 mg/dl (4 mmol/l a 10 mmol/l)
* **TT** funguje, iba ak neexistuje predchádzajúci dočasný cieľ – **AAPS** to do pravidla automaticky pridá ako riadok „**Predpoklady: Dočasný cieľ neexistuje**“

**Akcie:** ukončiť **Dočasný cieľ**

**Možnosti:**

žiadne

**Akcie:** **Percentuálny profil**

**Možnosti:**

* **Profil** musí byť medzi 50 % a 130 %
* funguje, iba ak je predchádzajúce percento 100 %

**Actions:** **Change smoothing** (in the **Loop & insulin** group)

**Možnosti:**

* select the [smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) to switch to. The list is the same as under **Configuration** > **Smoothing**, and the action does exactly what a change there does: the new method is saved, synced to paired clients, and the BG data is smoothed again right away.
* vykoná sa, iba ak táto metóda vyhladzovania ešte nie je aktívna – **AAPS** to do pravidla automaticky pridá ako riadok „**Predpoklady: Vyhladzovanie … nie je aktívne**“. Keď je zvolené vyhladzovanie aktívne, pravidlo sa potichu preskočí.
* Example: a new sensor is often noisy during its first day. Two rules with the **Sensor age** trigger give stronger filtering while the sensor settles, and lag-free smoothing after that:
  * **Sensor age** less than 24 h: **Change smoothing** to **Unscented Kalman Filter**
  * **Sensor age** more than 24 h: **Change smoothing** to **Average smoothing**

**Akcie:** **Poznámka** (v skupine **Výstrahy** v zozname)

**Možnosti:**

* zvoľte udalosť, ktorá sa má zaznamenať: **Poznámka**, **Pohyb**, **Otázka**, **Oznámenie** alebo **Výmena setu**, a voliteľne poznámku. Názov akcie sa zmení na zvolenú udalosť.
* **Trvanie**: používa sa pri udalostiach **Poznámka**, **Pohyb** a **Výmena setu**. **Otázka** a **Oznámenie** nemajú trvanie: namiesto neho zaznamenajú vašu aktuálnu glykémiu.
* **Výmena setu** vynuluje vek kanyly, ako keby ste výmenu setu zaznamenali ručne. Príklad: niektoré pumpy (napríklad Combo) zaznamenajú výmenu zásobníka samy, ale výmenu setu nie. Ak vždy meníte oboje naraz, pravidlo s podmienkami **Vek inzulínu** menej ako 1 hodina a **Vek kanyly** viac ako 24 hodín môže výmenu setu zaznamenať za vás.

![Udalosti akcie Poznámka](../images/Automations/automation_action_careportal_events.png) ![Akcia Poznámka nastavená na Výmenu setu](../images/Automations/automation_action_careportal_site_change.png)

**Akcie:** **Poslať SMS** (v skupine **Výstrahy**)

**Možnosti:**

* zadajte text správy. Správa sa pošle na všetky telefónne čísla povolené v nastaveniach [SMS komunikátora](../RemoteFeatures/SMSCommands.md). Plugin SMS komunikátor musí byť zapnutý.

**Akcie:** **Zmeniť profil na** (v skupine **Profil**)

**Možnosti:**

* zvoľte **Profil**, ktorý sa má aktivovať. Aktivuje sa na 100 %, bez časového posunu. Ak je tento profil už aktívny, akcia nič neurobí.

**Akcie:** **Povoliť/zakázať SMB** (v skupine **Uzavretý okruh & inzulín**)

**Možnosti:**

* zvoľte **ZAP** alebo **VYP**. Tým sa zmení nastavenie **Povoliť SMB** v OpenAPS SMB, presne ako keby ste ho zmenili v **Nastaveniach**. Zmena platí, kým ju vy alebo iné pravidlo nezmeníte späť.

**Akcie:** **Profil Autotune** (v skupine **Uzavretý okruh & inzulín**)

**Možnosti:**

* zvoľte profil, ktorý sa má ladiť, a počet dní: pozrite [Spustenie Autotune pomocou pravidla automatizácie](#autotune-run-autotune-with-an-automation-rule).

**Akcie:** **Zastaviť spracovanie** (v skupine **Uzavretý okruh & inzulín**)

**Možnosti:**

* žiadne. While the conditions of a rule with this action are true, **AAPS** does not check the rules below it in the list. As soon as its conditions are false again, the rules below are checked as usual. Pridajte ju do pravidla, ktoré musí mať prednosť pred pravidlami pod ním (pozrite [poradie automatizácií](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Akcie:** **Spustiť scénu**, **Povoliť scénu**, **Zakázať scénu** (v skupine **Scény**)

**Možnosti:**

* zvoľte [scénu](Scenes.md), ktorú chcete spustiť, povoliť alebo zakázať.

Po pridaní „Akcie“ musíte predvolené hodnoty zmeniť na požadované čísla: kliknite na ne a upravte ich.

![Alternatívny text](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## Na poradí **Automatizácií** v zozname záleží
 **AAPS** vykonáva vytvorené pravidlá v poradí podľa priority, od začiatku zoznamu **Automatizácie**. Ak je napríklad **Automatizácia** „Nízka“ najdôležitejšou **Automatizáciou** nad všetkými ostatnými pravidlami, mala by táto **Automatizácia** byť na začiatku zoznamu **Automatizácie** používateľa, ako je ukázané nižšie:


![Alternatívny text](../images/Automations/automation_rule_list.png)

Ak chcete zmeniť poradie pravidiel **Automatizácie**, podržte prst na úchytke **=** na pravej strane pravidla. Poradie **Automatizácií** zmeníte posunutím pravidiel nahor alebo nadol.

![Alternatívny text](../images/Automations/automation_rule_reorder.png)

## Ako vymazať pravidlá automatizácie

Ak chcete pravidlo **Automatizácie** vymazať, kliknite na ikonu koša.

![Alternatívny text](../images/Automations/automation_rule_delete.png)

## Príklady automatizácií

Nižšie sú príklady **Automatizácií**. Ďalšie diskusie o **Automatizáciách** a o tom, ako si používatelia svoju **Automatizáciu** prispôsobili, nájdete v diskusných skupinách na Facebooku alebo na Discorde. Príklady nižšie by ste nemali kopírovať, ak dobre nerozumiete tomu, ako bude **Automatizácia** fungovať.

(automations-low-glucose-temp-target)=
### Dočasný cieľ pri nízkej glykémii

Táto **Automatizácia** automaticky spustí **Dočasný cieľ**, keď **glykémia** klesne pod určitú hranicu – tu sa pri glykémii nižšej ako 70 mg/dl spustí cieľ 110 mg/dl na 30 minút:

![Alternatívny text](../images/Automations/automation_example_low_glucose_rule.png)

### Dočasný cieľ na obed (s podmienkou „Poloha“)

![Alternatívny text](../images/Automations/automation_example_lunch_rule.png)

Táto **Automatizácia** bola vytvorená pre používateľa, ktorý každý pracovný deň obeduje v práci približne v rovnakom čase. Spustí sa však iba vtedy, keď sa používateľ nachádza na nastavenom mieste („Poloha“).  Ak teda používateľ niektorý deň nie je v práci, táto **Automatizácia** sa neaktivuje.

Táto **Automatizácia** nastaví o 13:00 nízky **Dočasný cieľ** (Pred jedlom), aby sa glykémia pred obedom dostala na 90 mg/dl (alebo 5 mmol/l).

Spúšťač „Poloha“ má názov, polohu (ťuknite na **Vybrať z mapy** alebo použite svoju súčasnú polohu) a polomer v metroch. Spustí sa, keď ste vo vnútri oblasti (alebo mimo nej):

![Alternatívny text](../images/Automations/automation_example_lunch_location_condition.png)

Kvôli spojeniu „A“ sa **Automatizácia** vykoná iba v „zvolenom čase“ a zároveň iba vtedy, keď je používateľ na zvolenom mieste.

**Automatizácia** sa nespustí v žiadnom inom čase na tomto mieste ani v tomto čase mimo okruhu 50 metrov okolo zvolenej polohy.

### Automatizácia podľa polohy Wi-Fi SSID

Použitie Wi-Fi SSID je dobrá možnosť, ako spustiť **Automatizáciu**, keď ste v dosahu určitej siete Wi-Fi (v porovnaní s GPS): je pomerne presné, menej vybíja batériu a funguje aj v uzavretých priestoroch, kde GPS a iné služby určovania polohy nemusia byť dostupné.

Tu je ďalší príklad nastavenia **Dočasného cieľa** iba v pracovné dni pred raňajkami (1).


**Automatizácia** sa spustí o 5:30 iba v pondelok až piatok (2)  
a iba keď je telefón pripojený k domácej sieti Wi-Fi (3).


Potom nastaví **Dočasný cieľ** 75 mg/dl na 30 minút (4). Jednou z výhod podmienky polohy je, že sa pravidlo nespustí, napríklad keď je používateľ na dovolenke.

![Pravidlo Wi-Fi: názov úlohy (1), podmienka času v pracovné dni (2) a podmienka Wi-Fi SSID (3)](../images/Automations/automation_example_wifi_rule.png)

Posuňte sa nižšie a uvidíte akciu: **Dočasný cieľ** 75 mg/dl na 30 minút (4).

![Akcia pravidla Wi-Fi: Spustiť dočasný cieľ 75 mg/dl na 30 minút (4)](../images/Automations/automation_example_wifi_action.png)

Tu je snímka obrazovky so spúšťačmi **Automatizácie**:

1) Pod hlavným spojením „A“ (na spustenie musia platiť obe podmienky) 1) Opakovaný čas = Po, Ut, St, Št, Pi o 5:30  
1) Wi-Fi SSID = My_Home_WiFi_Name

![Alternatívny text](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## Automatizácia exportu nastavení

### Automatické exporty: plánované (denne)

Snímky obrazovky so spúšťačmi automatizácie:

1) Podmienka: Opakovaný čas = Po, Ut, St, Št, Pi o 8:00 1) Akcia: Export nastavení (do poľa „Text v ošetreniach“ zadajte „Daily“)

![Plánované exporty](../images/Automations/automation_settings_export_daily.png)

Poznámka: Vykonanie exportu sa zaznamená v Starostlivosti

### Automatické exporty: Aktivácia Podu (iba náplasťové pumpy)

Snímky obrazovky so spúšťačmi automatizácie:

1) Podmienka: Aktivácia Podu 1) Akcia: Export nastavení (do poľa „Text v ošetreniach“ zadajte „Pod Activation: settings export“)

![Export pri aktivácii Podu](../images/Automations/automation_settings_export_pod_activation.png)

Poznámka: Vykonanie exportu sa zaznamená v Starostlivosti. Poznámka: Ak ste predtým ešte neurobili ručný export nastavení, automatizácia sa **vôbec** nespustí. Pre správne nastavenie automatického exportu nastavení pozrite [Nastavenia → Údržba](#preferences-maintenance-settings).


## Log automatizácie

**AAPS** zobrazuje log posledných udalostí **Automatizácie** v dolnej časti obrazovky **Automatizácia**, pod pravidlami. Pomocou neho overíte, či sa vaše pravidlá spustili vtedy, keď ste očakávali.

V príklade nižšie je zapnuté pravidlo **Low glucose temp target** (1) (pozrite [Dočasný cieľ pri nízkej glykémii](#automations-low-glucose-temp-target) vyššie). Log (2) ukazuje, že o 15:09 (03:09 PM) glykémia klesla pod 70 mg/dl a pravidlo sa spustilo:
* akcia bola „Spustiť dočasný cieľ: 110mg/dL@30 min“: **Dočasný cieľ** 110 mg/dl na 30 minút;
* **OK** na konci znamená, že akcia sa úspešne vykonala.

![Obrazovka Automatizácia: zapnuté pravidlo (1) a jeho záznam v logu (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## Riešenie problémov

* Problém: __AAPS nespúšťa moje automatizácie?__

Skontrolujte, že políčko vľavo od názvu **Automatizácie** je „zaškrtnuté“, aby bolo pravidlo aktivované:

![Alternatívny text](../images/Automations/automation_rule_activated_deactivated.png)

* Problém: __Moje automatizácie sa spúšťajú v nesprávnom poradí.__

Skontrolujte poradie priorít pravidiel, ako je popísané vyššie.

* Problém: __Podmienka zobrazuje „Neznámy spúšťač … – nikdy nie je pravdivý“.__

Pravidlo obsahuje spúšťač, ktorý táto verzia **AAPS** nevie prečítať, napríklad po návrate na staršiu verziu alebo po importe nastavení z novšej verzie. Takýto spúšťač nikdy nie je pravdivý, takže sa pravidlo nevykoná. Zostane nezmenený, aby ho novšia verzia mohla stále použiť. Upravte pravidlo a spúšťač nahraďte, alebo aktualizujte **AAPS**.

## Alternatívy k automatizáciám

Pokročilí používatelia môžu úlohy automatizovať aj inými spôsobmi, napríklad pomocou IFTTT alebo aplikácie tretej strany pre Android s názvom Automate. 
