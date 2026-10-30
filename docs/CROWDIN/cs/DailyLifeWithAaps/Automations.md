# Automatizace

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Co je automatizace?

„**Automatizace**“ je funkce, která umí automatizovat úlohy v AAPS.

Automatizace provádí určité akce na základě jedné nebo více podmínek neboli spouštěčů. Spouštěčem mohou být i nepravidelné události, jako je nízká nebo vysoká glykémie, nebo určité množství záporného aktivního inzulínu (IOB). Automatizace zvládnou i opakující se události, jako jsou jídla nebo cvičení v určitou denní dobu, nebo situace, kdy je uživatel v určité vzdálenosti od místa GPS nebo v dosahu Wi-Fi sítě (SSID). Automatizace může podle rozvrhu nebo při každé výměně Podu zálohovat nastavení AAPS.

Pravidla automatizace se vytvářejí a upravují na obrazovce **Automatizace** (**Spravovat → Automatizace**). Každé pravidlo má dvě části:

- Jednu nebo více podmínek neboli „spouštěčů“, které spustí akci.

    Může to být určitý časový rozvrh, událost nebo hodnota nějaké vlastnosti v AAPS

- Jednu nebo více akcí, které se mají provést.

    Například alarm, nastavení procenta profilu nebo export nastavení AAPS při výměně Podu.


Možností automatizace je velmi mnoho. Doporučujeme je prostudovat přímo v aplikaci AAPS, v části Automatizace. Příklady automatizací od jiných uživatelů můžete hledat také ve skupinách uživatelů AAPS na [**Facebooku**](https://www.facebook.com/groups/AndroidAPSUsers) a [**Discordu**](https://discord.gg/4fQUWHZ4Mw).

## Jak může automatizace pomoci

1. **Automatizace opakujících se úloh:** naprogramované akce se provádějí automaticky, bez zásahu uživatele.

1. **Méně únavy z rozhodování:** Hlavní výhodou **automatizací** je, že uživatele zbaví nutnosti zasahovat do **AAPS** ručně. [Výzkum](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) odhaduje, že lidé s diabetem 1. typu musí denně udělat v průměru 180 rozhodnutí navíc. **Automatizace** mohou snížit psychickou zátěž, a uvolnit tak uživateli energii pro jiné oblasti života.

1. **Možná lepší kontrola glykémie:** **automatizace** mohou například zajistit, že **dočasné cíle** budou vždy nastaveny, když jsou potřeba, i v rušných dnech nebo když na něco zapomenete. Příklad: dítě s diabetem má ve škole sport v úterý v 10:00 a ve čtvrtek ve 14:00 a 30 minut před sportem potřebuje vysoký dočasný cíl („TT“). Tento **dočasný cíl** lze zapnout pomocí **automatizace**.

1. **AAPS lze velmi přizpůsobit**, aby byl v určitých situacích více nebo méně agresivní, podle přání uživatele. Příklad: dočasné snížení procenta **profilu** na určitou dobu, pokud se uprostřed noci objeví záporný **IOB**. To ukazuje, že stávající **profil** může být příliš silný.

Následující příklad ukazuje, jak může **automatizace** ušetřit některé kroky.

Uživatel cvičí každé ráno v 6:00: musí si pamatovat, že v 5:00, před cvičením, v AAPS ručně nastaví „Dočasný cíl – Aktivita“.

![Alternativní text](../images/Automations/automation_concept_manual.png)

Uživatel si nastavil **automatizaci**, která v 5:00 spustí „Dočasný cíl – Aktivita“, aby jeho **glykémie** a **IOB** byly optimální pro cvičení v 6:00:

![Alternativní text](../images/Automations/automation_concept_automated.png)

## Co zvážit, než začnete s automatizacemi

1. Před nastavením některých automatizací byste měli mít s **AAPS** rozumně kontrolovanou **glykémii**. Automatizace nepoužívejte k vyrovnání nevhodně nastaveného bazálu, **ISF** nebo **CR** (podrobněji níže). Nenastavujte automatické **přepnutí profilu** jako náhradu za vzestup **glykémie** způsobený _např._ jídlem. Na to jsou lepší jiné postupy (SMB atd.).

1. Jako každá technologie mohou i **CGM**, **pumpy** a telefony selhat: technické problémy nebo chyby senzoru mohou narušit akce **automatizace** a může být potřeba ruční zásah.

1. **Požadavky na **automatizace** se pravděpodobně změní, když se změní váš denní režim**. Když přecházíte mezi obdobím práce, školy a prázdnin, nastavte si v kalendáři připomínku, abyste zkontrolovali, které **automatizace** jsou právě aktivní (dají se snadno zapnout i vypnout). Například když jedete na dovolenou a už nepotřebujete automatizaci pro školní sport nebo denní cvičení, nebo potřebujete upravit časy.

1. **Automatizace** mohou být ve vzájemném konfliktu. Je dobré každé nové nastavení **automatizace** pečlivě zkontrolovat v bezpečném prostředí a pochopit, proč se **automatizace** spustila nebo nespustila tak, jak čekáte.

1. Pokud používáte Autosens, snažte se místo **přepnutí profilu** používat **dočasné cíle**. **Dočasné cíle** nenastavují Autosens zpět na 0. **Přepnutí profilu** Autosens resetuje.

1. Většinu **automatizací** nastavte jen na **omezenou dobu**. Potom může **AAPS** situaci znovu vyhodnotit a **automatizaci** v případě potřeby zopakovat, pokud podmínka stále platí. Například „start dočasného cíle 7,0 mmol/l na 30 min“ nebo „start **profilu** 110 % na 10 min“ _a_ „start dočasného cíle 5,0 mmol/l na 10 min“. Použití **automatizací** k trvalým změnám (např. na silnější % profilu) přináší riziko hypoglykémie.

## Kdy mohu začít používat automatizaci?

**Automatizace** můžete začít používat v **cíli 10**.

## Kde najdu automatizace v AAPS?

Ve spodní navigaci hlavní obrazovky otevřete **Spravovat** a vyberte **Automatizace**.

## Jak nastavit automatizaci?

**Automatizaci** nastavíte tak, že na obrazovce Automatizace stisknete tlačítko **+** a vytvoříte „pravidlo“:

![Vytvoření automatizace](../images/Automations/automation_create.png)

* pojmenujte své „pravidlo“ (Název úkolu);
* v části **Podmínka** stiskněte „**EDIT**“. Na obrazovce **Podmínka** zvolte, jak se spouštěče spojí (**A**, **Nebo**, **Exkluzivní nebo**), a stiskněte „**Přidat spouštěč**“:

![Podmínka automatizace](../images/Automations/automation_trigger_editor.png)

* přidejte alespoň jeden spouštěč:

![Spouštěče automatizace](../images/Automations/automation_triggers.png)

* v části **Akce** stiskněte „**PŘIDAT**“ a vyberte jednu akci:

![Akce automatizace](../images/Automations/automation_actions.png)

* uložte pravidlo tlačítkem **Uložit** a ujistěte se, že políčko vlevo od názvu pravidla je „zaškrtnuté“, aby byla **automatizace** aktivní:

![Aktivovaná automatizace](../images/Automations/automation_rule_activated.png)

Pravidlo **automatizace** deaktivujete tak, že zrušíte zaškrtnutí políčka vlevo od názvu **automatizace**. Příklad níže ukazuje **automatizaci** aktivovanou („zaškrtnutou“) a deaktivovanou („nezaškrtnutou“):

![Alternativní text](../images/Automations/automation_rule_activated_deactivated.png)


Při nastavování **automatizace** ji můžete nejprve vyzkoušet tak, že v části „Akce“ zvolíte možnost „Oznámení“. **AAPS** tak nejprve zobrazí oznámení, místo aby akci opravdu provedl. Když si budete jistí, že se oznámení zobrazilo ve správný čas a za správných podmínek, můžete v pravidle **automatizace** nahradit „Oznámení“ skutečnou „Akcí“.

![Alternativní text](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

**Automatizace** jsou aktivní i tehdy, když je smyčka zakázána!
```


## Kdy se pravidla kontrolují

**AAPS** kontroluje všechna pravidla **automatizace** pokaždé, když zpracuje novou hodnotu glykémie. Pravidla se tedy vyhodnocují v rytmu vašeho CGM, i když je obrazovka telefonu vypnutá. Pravidla se kontrolují také tehdy, když se telefon začne nabíjet, když se změní síť nebo poloha a když se připojí zařízení Bluetooth. Najednou běží vždy jen jedna kontrola, takže pravidlo, jehož akce trvají déle (například příkaz pro pumpu), se nemůže provést dvakrát.

## Bezpečnostní limity

Pro **automatizace** platí tyto bezpečnostní limity:

* **Dočasný cíl** nastavený **automatizací** musí být mezi 72 a 180 mg/dl (nebo 4 a 10 mmol/l).
* **Procento profilu** musí být mezi 50 % a 130 %.
* Mezi dvěma spuštěními **automatizace** (a před prvním spuštěním) je časový limit 5 minut.

## Správné použití záporných hodnot

```{admonition} Warning
:class: warning

Při výběru záporné hodnoty v **automatizaci** buďte opatrní
```

Při výběru „záporné hodnoty“ v „Podmínce“, např. „je menší než“, buďte v **automatizacích** opatrní. Například:

![Alternativní text](../images/Automations/automation_comparison_operators.png)

**Příklad 1:** Vytvoření podmínky **„je menší než“** „-0,1 mmol/l“ (nebo „-2 mg/dl“):

Spustí **automatizaci** pro každé číslo, které je **ostře menší než** -0,1 (-2). To zahrnuje čísla jako -0,2, -0,3, -0,4 (-4, -6, -8) a tak dále. Pamatujte, že samotná hodnota -0,1 (-2) v této podmínce **není** zahrnuta. (Podmínka „je rovno nebo menší než -0,1 mmol/l (-2 mg/dl)“ _by_ hodnotu -0,1 mmol/l nebo -2 mg/dl zahrnovala.)

**Příklad 2:** Vytvoření podmínky „je větší než“ -0,1 mmol/l (-2 mg/dl):

Spustí **automatizaci** pro každé číslo, které je **větší než** -0,1 mmol/l (-2 mg/dl). To zahrnuje čísla jako 0, 0,2, 0,4 mmol/l (0, 4, 8 mg/dl) a jakékoli jiné kladné číslo.

Při výběru těchto podmínek a hodnot je důležité dobře promyslet, čeho přesně má vaše **automatizace** dosáhnout.

(automations-automation-triggers)=
## Spouštěče automatizace

![Spouštěče automatizace](../images/Automations/automation_triggers.png)

Zbytek seznamu uvidíte, když posunete obrazovku dolů:

![Spouštěče automatizace, pokračování](../images/Automations/automation_trigger_picker_2.png)

Uživatel si může vybrat z různých „spouštěčů“. Spouštěče jsou podmínky, které musí být splněny, aby se automatizace provedla. Seznam níže není úplný:

**Spouštěč:** spojení podmínek

**Možnosti:**

Více podmínek lze spojit pomocí
* „A“
* „Nebo“
* „Exkluzivní nebo“ (to znamená, že akce proběhne, pokud platí jedna – a pouze jedna – z podmínek)

**Spouštěč:** čas vs. opakující se čas

**Možnosti:**

* čas = jednorázová událost v určitý čas
* opakující se čas = něco, co se děje pravidelně (např. jednou týdně, každý pracovní den atd.)

**Spouštěč:** poloha

**Možnosti:**

* v [Nastavení > Automatizace](#preferences-maintenance-settings) si uživatel může vybrat požadovanou službu určování polohy.

**Spouštěč:** služba určování polohy

**Možnosti:**

* Použít pasivní polohu: **AAPS** zjišťuje polohu jen tehdy, když o ni žádají jiné aplikace.
* Použít polohu sítě: poloha podle vaší Wi-Fi sítě.
* Použít GPS polohu (Pozor! To může způsobit nadměrné vybíjení baterie!)

**Spouštěče**: data z pumpy a senzoru

* Spouštěč stáří kanyly: k dispozici pro všechny pumpy
* Spouštěč stáří inzulínu: k dispozici pro podporované pumpy
* Spouštěč stáří baterie: k dispozici pro podporované pumpy
* Spouštěč stáří senzoru: k dispozici vždy
* Spouštěč aktivace Podu: k dispozici pro patch pumpy

U všech spouštěčů podle stáří je nepravděpodobné, že by se porovnání „je rovno“ někdy splnilo. Proto v tom případě vytvořte rozmezí pomocí dvou spouštěčů

* Spouštěč stavu zásobníku: k dispozici pro všechny pumpy. Porovnání „NOT\_AVAILABLE“ (v aplikaci „není k dispozici“) u tohoto spouštěče nefunguje, protože hodnota je v **AAPS** vždy vyplněná
* Spouštěč úrovně nabití baterie pumpy: k dispozici pro podporované pumpy. Porovnání „NOT\_AVAILABLE“ (v aplikaci „není k dispozici“) u tohoto spouštěče nefunguje, protože hodnota je v **AAPS** vždy vyplněná

(automations-automation-action)=
## Akce

![Akce automatizace](../images/Automations/automation_actions.png)

Zbytek seznamu uvidíte, když posunete obrazovku dolů:

![Akce automatizace, pokračování](../images/Automations/automation_action_picker_2.png)

**Akce:** start **dočasného cíle**

**Možnosti:**

* **Glykémie** musí být mezi 72 mg/dl a 180 mg/dl (4 mmol/l a 10 mmol/l)
* **TT** funguje jen tehdy, když neběží žádný předchozí dočasný cíl – **AAPS** to do pravidla přidá automaticky jako řádek „**Nutné podmínky: Dočasný cíl neexistuje**“

**Akce:** zastavení **dočasného cíle**

**Možnosti:**

nic

**Akce:** **Procento profilu**

**Možnosti:**

* **Profil** musí být mezi 50 % a 130 %
* funguje jen tehdy, když předchozí procento je 100 %

**Akce:** **Změnit vyhlazování**

**Možnosti:**

* vyberte [metodu vyhlazování](../CompatibleCgms/SmoothingBloodGlucoseData.md), na kterou se má přepnout
* provede se jen tehdy, když tato metoda vyhlazování ještě není aktivní – **AAPS** to do pravidla přidá automaticky jako řádek „**Nutné podmínky: Vyhlazování … není aktivní**“. Když je zvolené vyhlazování už aktivní, pravidlo se tiše přeskočí.
* Příklad: v kombinaci se spouštěčem **Stáří senzoru** přepněte během prvního dne nového senzoru na **Průměrovací vyhlazování** a potom zpět na **Žádné vyhlazování**.

**Akce:** **Poznámka** (ve skupině **Výstrahy** v seznamu)

**Možnosti:**

* vyberte událost, která se má zaznamenat: **Poznámka**, **Cvičení**, **Otázka**, **Oznámení** nebo **Výměna setu**, a případně poznámku. Název akce se změní na vybranou událost.
* **Trvání**: používá se pro **Poznámku**, **Cvičení** a **Výměnu setu**. **Otázka** a **Oznámení** nemají trvání: místo toho zaznamenají vaši aktuální glykémii.
* **Výměna setu** vynuluje stáří kanyly, jako byste výměnu setu zaznamenali ručně. Příklad: některé pumpy (např. Combo) zaznamenají výměnu zásobníku samy, ale výměnu setu ne. Pokud vždy měníte obojí najednou, může výměnu setu zaznamenat za vás pravidlo se **Stářím inzulínu** menším než 1 hodina a **Stářím kanyly** větším než 24 hodin.

![Události akce Poznámka](../images/Automations/automation_action_careportal_events.png) ![Akce Poznámka nastavená na Výměnu setu](../images/Automations/automation_action_careportal_site_change.png)

**Akce:** **Poslat SMS** (ve skupině **Výstrahy**)

**Možnosti:**

* zadejte text zprávy. Zpráva se pošle na všechna telefonní čísla povolená v nastavení [SMS komunikátoru](../RemoteFeatures/SMSCommands.md). Plugin SMS komunikátor musí být povolený.

**Akce:** **Změna profilu na** (ve skupině **Profil**)

**Možnosti:**

* vyberte **profil**, který se má aktivovat. Aktivuje se na 100 %, bez časového posunu. Pokud je tento profil už aktivní, akce nic neudělá.

**Akce:** **Povolit/zakázat SMB** (ve skupině **Smyčka a inzulín**)

**Možnosti:**

* zvolte **ZAP** nebo **VYP**. Tím se změní nastavení **Povolit SMB** pluginu OpenAPS SMB, přesně jako byste ho změnili v **Nastavení**, a tak zůstane, dokud ho vy nebo jiné pravidlo nezměníte zpět.

**Akce:** **Profil Autotune** (ve skupině **Smyčka a inzulín**)

**Možnosti:**

* vyberte profil, který se má vyladit, a počet dní: viz [Spuštění Autotune pomocí pravidla automatizace](#autotune-run-autotune-with-an-automation-rule).

**Akce:** **Zastavit zpracovávání** (ve skupině **Smyčka a inzulín**)

**Možnosti:**

* žádné. Když se provede pravidlo s touto akcí, **AAPS** při tomto běhu už nekontroluje pravidla pod ním v seznamu. Přidejte ji do pravidla, které musí mít přednost před pravidly pod ním (viz [pořadí automatizací](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Akce:** **Spustit scénu**, **Povolit scénu**, **Zakázat scénu** (ve skupině **Scény**)

**Možnosti:**

* vyberte [scénu](Scenes.md), kterou chcete spustit, povolit nebo zakázat.

Po přidání „Akce“ musíte výchozí hodnoty změnit na požadované číslo: klepněte na ně a upravte je.

![Alternativní text](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## Na pořadí **automatizací** v seznamu záleží
 **AAPS** provádí vytvořená pravidla v pořadí podle priority, od začátku seznamu **automatizací**. Pokud je například **automatizace** „Nízká“ nejdůležitější **automatizací** ze všech pravidel, měla by tato **automatizace** být na začátku seznamu **automatizací** uživatele, jak je ukázáno níže:


![Alternativní text](../images/Automations/automation_rule_list.png)

Pořadí pravidel **automatizace** změníte tak, že podržíte úchyt **=** na pravé straně pravidla. Pořadí **automatizací** změníte posunutím pravidel nahoru nebo dolů.

![Alternativní text](../images/Automations/automation_rule_reorder.png)

## Jak smazat pravidla automatizace

Pravidlo **automatizace** smažete klepnutím na ikonu koše.

![Alternativní text](../images/Automations/automation_rule_delete.png)

## Příklady automatizací

Níže jsou příklady **automatizací**. Další diskuse o **automatizacích** a o tom, jak si uživatelé svou **automatizaci** přizpůsobili, najdete ve skupinách na Facebooku nebo na Discordu. Příklady níže nekopírujte, pokud dobře nerozumíte tomu, jak bude **automatizace** fungovat.

(automations-low-glucose-temp-target)=
### Dočasný cíl při nízké glykémii

Tato **automatizace** automaticky spustí **dočasný cíl**, když **glykémie** klesne pod určitou mez – zde při glykémii nižší než 70 mg/dl se na 30 minut spustí cíl 110 mg/dl:

![Alternativní text](../images/Automations/automation_example_low_glucose_rule.png)

### Dočasný cíl na oběd (s „Polohou“)

![Alternativní text](../images/Automations/automation_example_lunch_rule.png)

Tato **automatizace** byla vytvořena pro uživatele, který každý pracovní den obědvá v práci přibližně ve stejnou dobu. Spustí se ale jen tehdy, když je uživatel na zvoleném místě („Poloha“).  Pokud tedy uživatel jednoho dne není v práci, tato **automatizace** se nespustí.

Tato **automatizace** nastaví ve 13:00 nízký **dočasný cíl** (Před jídlem), který před obědem sníží glykémii na 90 mg/dl (nebo 5 mmol/l).

„Spouštěč“ poloha má název, místo (klepněte na **Vybrat z mapy** nebo použijte svou současnou polohu) a poloměr v metrech. Spustí se, když jste uvnitř (nebo mimo) této oblasti:

![Alternativní text](../images/Automations/automation_example_lunch_location_condition.png)

Díky spojení „A“ proběhne **automatizace** jen ve „zvoleném čase“ a jen tehdy, když je uživatel na zvoleném místě.

**Automatizace** se nespustí v žádný jiný čas na tomto místě ani v tento čas mimo okruh 50 metrů kolem zvoleného místa.

### Automatizace podle polohy Wi-Fi SSID

Wi-Fi SSID je dobrá možnost, jak spustit **automatizaci**, když jste v dosahu určité Wi-Fi sítě (ve srovnání s GPS): je docela přesná, méně vybíjí baterii a funguje i v uzavřených prostorách, kde GPS a jiné služby určování polohy nemusí být dostupné.

Zde je další příklad nastavení **dočasného cíle** jen pro pracovní dny před snídaní (1).


**Automatizace** se spustí v 5:30 jen od pondělí do pátku (2)  
a jen při připojení k domácí Wi-Fi síti (3).


Potom nastaví **dočasný cíl** 75 mg/dl na 30 minut (4). Jednou z výhod zahrnutí polohy je, že se automatizace nespustí například tehdy, když je uživatel na dovolené.

![Pravidlo pro Wi-Fi: název úkolu (1), podmínka času ve všední dny (2) a podmínka Wi-Fi SSID (3)](../images/Automations/automation_example_wifi_rule.png)

Posuňte se dolů a uvidíte akci: **dočasný cíl** 75 mg/dl na 30 minut (4).

![Akce pravidla pro Wi-Fi: Start dočasného cíle 75 mg/dl na 30 minut (4)](../images/Automations/automation_example_wifi_action.png)

Zde je snímek obrazovky se spouštěči **automatizace**:

1) Pod hlavní podmínkou „A“ (aby se pravidlo spustilo, musí platit obě podmínky) 1) Opakující se čas = Po,Út,St,Čt,Pá v 5:30  
1) WiFi SSID = My_Home_WiFi_Name

![Alternativní text](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## Automatizace exportu nastavení

### Automatické exporty: podle rozvrhu (denně)

Snímky obrazovky se spouštěči automatizace:

1) Podmínka: Opakující se čas = Po,Út,St,Čt,Pá v 8:00 1) Akce: Export nastavení (do „Text v ošetřeních“ zadejte „Denně“)

![Exporty podle rozvrhu](../images/Automations/automation_settings_export_daily.png)

Poznámka: Provedení exportu se zaznamená v Péči (Careportal)

### Automatické exporty: aktivace Podu (jen patch pumpy)

Snímky obrazovky se spouštěči automatizace:

1) Podmínka: Aktivace Podu 1) Akce: Export nastavení (do „Text v ošetřeních“ zadejte „Aktivace Podu: export nastavení“)

![Export při aktivaci Podu](../images/Automations/automation_settings_export_pod_activation.png)

Poznámka: Provedení exportu se zaznamená v Péči (Careportal). Poznámka: Pokud jste předtím neprovedli ruční export nastavení, automatizace se **vůbec** nespustí. Pro správné zapnutí automatického exportu nastavení viz [Nastavení → Údržba](#preferences-maintenance-settings).


## Záznamy automatizace

**AAPS** zobrazuje záznam posledních událostí **automatizace** dole na obrazovce **Automatizace**, pod pravidly. Pomocí něj ověříte, že se vaše pravidla spustila, kdy jste čekali.

V příkladu níže je povolené pravidlo **Low glucose temp target** (1) (viz [Dočasný cíl při nízké glykémii](#automations-low-glucose-temp-target) výše). Záznam (2) ukazuje, že v 15:09 klesla glykémie pod 70 mg/dl a pravidlo se spustilo:
* akce byla „Start dočasného cíle: 110mg/dL@30 min“: **dočasný cíl** 110 mg/dl na 30 minut;
* **OK** na konci znamená, že akce proběhla úspěšně.

![Obrazovka Automatizace: povolené pravidlo (1) a jeho záznam (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## Řešení problémů

* Problém: __AAPS nespouští moje automatizace?__

Zkontrolujte, že políčko vlevo od názvu **automatizace** je „zaškrtnuté“, aby bylo pravidlo aktivní:

![Alternativní text](../images/Automations/automation_rule_activated_deactivated.png)

* Problém: __Moje automatizace se spouštějí ve špatném pořadí.__

Zkontrolujte pořadí priorit svých pravidel, jak je popsáno výše.

* Problém: __Podmínka ukazuje „Neznámý spouštěč … - nikdy neplatí“.__

Pravidlo obsahuje spouštěč, který tato verze **AAPS** neumí přečíst, například když jste se vrátili ke starší verzi nebo importovali nastavení z novější verze. Takový spouštěč nikdy neplatí, takže se pravidlo neprovede. Zůstane beze změny, aby ho novější verze mohla dál používat. Upravte pravidlo a spouštěč nahraďte, nebo aktualizujte **AAPS**.

## Alternativy k automatizacím

Pokročilí uživatelé mohou úlohy automatizovat i jinak, pomocí IFTTT nebo aplikace pro Android od jiného výrobce s názvem Automate. 
