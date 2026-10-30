# Dočasné cíle

## Dočasné cíle a jejich nastavení

**Dočasný cíl** (zkráceně **DC**) je funkce **AAPS**, která uživateli umožňuje změnit [cílový rozsah **glykémie**](#profile-glucose-targets) pro plánované činnosti. Toho **AAPS** dosahuje tím, že upravuje množství inzulínu, které uživatel dostává.

Cílová glykémie, zvláště když je jen krátkodobá (trvá méně než 4 hodiny), nemusí být *skutečná hodnota*, které chcete nebo očekáváte, že vaše glykémie dosáhne. Je to spíše dobrý způsob, jak říct **AAPS**, aby byl více nebo méně agresivní, a přitom udržel vaši glykémii v rozsahu.

Dočasné cíle lze nastavit v těchto mezích:

|         | Dočasný cíl              |
| ------- | ------------------------ |
| Minimum | 4 mmol/l nebo 72 mg/dl   |
| Maximum | 10 mmol/l nebo 180 mg/dl |

**AAPS** má tři vestavěné předvolby **dočasného cíle**: pro cvičení (**Aktivita**), pro jídlo (**Před jídlem**) a pro předpovídanou hypoglykémii (**Hypoglykémie**). Najdete je na obrazovce **Dočasný cíl** (**Spravovat** → **Dočasný cíl**). Tuto obrazovku otevřete také jednoduše klepnutím na **štítek cíle** na hlavní obrazovce.

Uživatelé by měli mít realistická očekávání, čeho lze dosáhnout, když v **AAPS** zvolí **dočasný cíl**. Zda se podaří dosáhnout požadované cílové **glykémie**, závisí na mnoha faktorech, například: na spolehlivosti nastavení **AAPS** uživatele, celkové kontrole **glykémie**, **IOB**, citlivosti na inzulín, inzulínové rezistenci, intenzitě zátěže při cvičení a podobně.

Dosažení požadované cílové **glykémie** pomocí **dočasného cíle** může trvat přibližně 30 minut nebo déle. **AAPS** nemůže dosáhnout cílové **glykémie** okamžitě a uživatelé by na to měli myslet, když volí **dočasný cíl**.

Následující části shrnují vlastnosti **dočasného cíle – Aktivita**, **dočasného cíle – Před jídlem** a **dočasného cíle – Hypoglykémie**. Uvedené hodnoty jsou výchozí hodnoty z instalace – každou předvolbu si můžete [upravit](#TempTargets-change-preset-defaults) podle svých potřeb.

### DC - Aktivita

![DC Aktivita](../images/TempTarget2.png)

**Cílová glykémie (výchozí předvolba, lze upravit)**

AAPS se bude snažit dosáhnout 140 mg/dl nebo 7,8 mmol/l po dobu 1 h 30 min

**Další věci, které mohou uživatelé při volbě zvážit**:

Podle hodnoty **glykémie** **AAPS** „sníží“ dávkování inzulínu, aby dosáhl cílové **glykémie**. Pokud cílová **glykémie** není v rozsahu (tj. je nad cílovou **glykémií** zvolenou v **profilu** uživatele), **AAPS** může bazál ponechat zapnutý.

V režimu uzavřené smyčky **SMB**:

- *mohou být* vypnuty (více níže); a/nebo
- bazál může být zapnut, pokud je **AAPS** v záporném **IOB**, nebo <0.

Uživatelé mohou také zvážit:

- *zvolení* tohoto **DC** 1–2 hodiny před plánovaným cvičením, aby bylo IOB nižší (správné načasování tohoto DC se u každého liší); a
- *zvolení* dočasného profilu (snížení) po dobu plánované aktivity, aby bylo **IOB** nižší;
- *načasování* **DC** tak, aby se *vypnul* krátce před cvičením kvůli nižšímu **IOB**, protože u některých uživatelů po cvičení **glykémie** rychle stoupá.

### DC - Před jídlem

![DC Před jídlem](../images/TempTarget1.png)

**Cílová glykémie (výchozí předvolba, lze upravit)**

AAPS se bude snažit dosáhnout 90 mg/dl nebo 5,0 mmol/l po dobu 45 minut

**Další věci, které mohou uživatelé při volbě zvážit**:

V režimu uzavřené smyčky **SMB**:

- zůstanou aktivní; a/nebo
- bazál může být také zapnut, podle nastavení **profilu** uživatele.

Podle hodnoty **glykémie** **AAPS** „zvýší“ dávkování inzulínu v rámci parametrů nastavení **AAPS** uživatele, aby dosáhl požadované cílové **glykémie**.

### DC - Hypoglykémie

![DC Hypoglykémie](../images/TempTarget3.png)

**Cílová glykémie (výchozí předvolba, lze upravit)**

AAPS se bude snažit dosáhnout 160 mg/dl nebo 8,9 mmol/l po dobu 1 hodiny

**Další věci, které mohou uživatelé při volbě zvážit**:

V režimu uzavřené smyčky **SMB**:

- *mohou být* vypnuty (více níže); a/nebo
- bazál může být zapnut, pokud je **AAPS** v záporném **IOB**, nebo <0.

(TempTargets-manage-v4)=

## Nastavení a správa dočasných cílů (Spravovat → Dočasný cíl)

V **AAPS** v4 spravujete **předvolby** DC a spouštíte dočasný cíl na obrazovce **Spravovat** (spodní navigace) → **Dočasný cíl** (*„Spravovat a nastavit dočasné cíle“*).

![Obrazovka Dočasný cíl – karusel předvoleb, editor a panel akcí](../images/v4/TempTarget/tt_management.png)

Obrazovka má tři části:

1. **Karusel předvoleb** (nahoře) – přejížděním procházíte své předvolby DC. Každá karta ukazuje **název**, **cíl** a **trvání** předvolby; právě běžící DC je zvýrazněný.
2. **Editor** (uprostřed) – **Dočasný cíl** a **Trvání**, které se opravdu použijí, a navíc datum/čas **Aktivace**.
3. **Panel akcí** (dole) – tlačítka **➕ přidat**, **‘️ smazat** a **▶ aktivovat**.

Výběrem karty předvolby se její **cíl** a **trvání** načtou do editoru.

```{admonition} Vestavěné a vlastní předvolby :class: note Vestavěné předvolby – **Před jídlem**, **Aktivita** a **Hypoglykémie** – existují vždy a **nelze je smazat** (jejich hodnoty ale můžete změnit a uložit). Všechny předvolby, které si vytvoříte sami, jsou **vlastní** a můžete je libovolně upravovat nebo mazat.

    <br />### Aktivace dočasného cíle
    
    Přejeďte na požadovanou předvolbu (její hodnoty se načtou do editoru), případně v editoru upravte **cíl**/**trvání** a pak klepněte na **▶ Aktivovat**. Než se cokoli spustí, zobrazí se potvrzení s přesným cílem, trváním a důvodem:
    
    ![Potvrzení aktivace](../images/TempTarget8.png)
    
    Po potvrzení se dočasný cíl spustí ihned (nebo ve zvoleném čase **Aktivace**) a běží po nastavenou **dobu trvání**.
    
    ```{admonition} Úprava čísel je jednorázová – předvolbu nemění
    :class: important
    **Cíl** a **trvání** v editoru jsou hodnoty, které tlačítko **Aktivovat** použije *právě teď*. Pokud je změníte, je tato změna **dočasná**: platí jen pro tuto aktivaci a **nemění uloženou předvolbu**. Díky tomu můžete DC „upravit a aktivovat“ jen jednorázově (například dnes aktivovat *Aktivitu* s trochu jiným cílem), aniž byste předvolbu trvale změnili.
    

### Uložení změn do předvolby

Pokud upravenou hodnotu *chcete* zachovat, **uložte** ji: když se hodnoty v editoru liší od vybrané předvolby, objeví se na horní liště ikona **Uložit**. Klepnutím na ni se aktuální **cíl** a **trvání** (a u vlastních předvoleb i název) uloží zpět do vybrané předvolby. U vestavěných předvoleb se na panelu akcí objeví také tlačítko **Vrátit na výchozí** (↺): vrátí výchozí hodnoty předvolby.

![Obrazovka Dočasný cíl s ikonou Uložit a tlačítkem Vrátit na výchozí](../images/v4/TempTarget/tt_preset_save_revert.png)

Jednoduché pravidlo tedy zní:

- **Aktivovat** → čísla se použijí **jednou** (předvolba se nezmění).
- **Uložit** → čísla se stanou **novými výchozími hodnotami** předvolby.

Chcete-li vrátit vestavěnou předvolbu do původního stavu, vyberte ji a klepněte na tlačítko **↺ Vrátit**. Na panelu akcí se objeví jen u **vestavěné** předvolby, jejíž hodnoty se právě liší od továrních výchozích hodnot, a obnoví původní **cíl** a **trvání** této předvolby.

### Přidání a odebrání předvoleb

- **➕ Přidat** – vytvoří **novou vlastní předvolbu** z aktuálních hodnot v editoru. Nová karta se objeví v karuselu.
- **‘️ Smazat** – odstraní vybranou **vlastní** předvolbu. Vestavěné předvolby (*Před jídlem*, *Aktivita*, *Hypoglykémie*) nelze smazat.

Jakmile máte alespoň dvě **vlastní** předvolby, můžete také změnit jejich pořadí v karuselu: klepněte na ikonu **Přeřadit** (⇅) na horní liště, posouvejte kartu uprostřed **tlačítky pro posun ◀ / ▶** a pak potvrďte tlačítkem **✓**. Vestavěné předvolby zůstávají na svých místech – posouvat lze jen vlastní předvolby. (Ovládání vypadá stejně jako při [přeřazení profilů](ProfileSwitch-ProfilePercentage.md).)

Vaše předvolby jsou součástí synchronizované konfigurace, takže je sdílí hlavní zařízení i spárovaní klienti.

### Další způsoby, jak nastavit dočasný cíl

Dočasný cíl lze nastavit i bez otevření této obrazovky:

- pomocí **přepínačů DC v dialogu Sacharidy** – viz [níže](#TempTargets-carbs-dialog),
- pomocí **tlačítka předvolby na [panelu Rychlé spuštění](QuickLaunch.md)** – kategorie *Přednastavení dočasných cílů* v *Konfigurace Rychlého spuštění* nabízí pro každou vaši předvolbu tlačítko na jedno klepnutí,
- z **hodinek Wear OS** (položka nabídky / dlaždice **Dočasný cíl**),
- ze spárovaného **klienta** – viz [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md),
- jako součást **[scény](Scenes.md)** (akce *Dočasný cíl*), nebo
- pravidlem **Automatizace** (*Start dočasného cíle* / *Stop dočasného cíle*).

* * *

(TempTargets-where-can-i-select-a-temp-target)=

## Kde mohu zvolit dočasný cíl?

Nejrychlejší způsob je klepnout na **štítek cíle** na hlavní obrazovce (ukazuje váš aktuální cílový rozsah):

![Štítek cíle na hlavní obrazovce](../images/TempTarget6.png)

Tím se otevře výše popsaná obrazovka **Dočasný cíl** – přejeďte na předvolbu a klepněte na **▶ Aktivovat**. Stejná obrazovka je dostupná také přes **Spravovat** → **Dočasný cíl**.

(TempTargets-carbs-dialog)= Při zadávání sacharidů nemusíte obrazovku **Dočasný cíl** vůbec otevírat: **dialog Sacharidy** (**Ošetření** → **Sacharidy**) má nahoře přepínače **Spustit dočasný cíl Hypoglykémie**, **Spustit dočasný cíl Před jídlem** a **Spustit dočasný cíl Aktivita**. Když jeden zapnete, aktivuje se odpovídající předvolba spolu se zadáním sacharidů:

![Přepínače DC v dialogu Sacharidy](../images/TempTarget5.png)

    {admonition} Automatický DC Hypoglykémie
    :class: note
    Pokud otevřete **dialog Sacharidy**, když je vaše glykémie pod 72 mg/dl (4 mmol/l), **AAPS** za vás předem zapne přepínač **Spustit dočasný cíl Hypoglykémie** (pokud už neběží vyšší dočasný cíl s delší zbývající dobou trvání).

(TempTargets-change-preset-defaults)=

## Kde mohu změnit výchozí dočasný cíl a nahradit ho vlastním nastavením?

**Cíl** a **trvání** každé předvolby se upravují přímo na obrazovce **Dočasný cíl** – samostatná položka v předvolbách pro to už není:

1. Otevřete obrazovku **Dočasný cíl** (klepněte na štítek cíle nebo **Spravovat** → **Dočasný cíl**).
2. Přejeďte na předvolbu, kterou chcete změnit.
3. V editoru upravte **Dočasný cíl** a/nebo **Trvání**.
4. Klepněte na ikonu **Uložit**, která se objeví na horní liště.

![Úprava předvolby – ikona Uložit na horní liště, Vrátit na panelu akcí](../images/TempTarget7.png)

Dokud se hodnoty v editoru liší od továrních hodnot vestavěné předvolby, objeví se na panelu akcí také tlačítko **↺ Vrátit** – klepnutím na něj obnovíte původní cíl a trvání předvolby.

## Jak zruším dočasný cíl?

Když běží dočasný cíl, štítek cíle na hlavní obrazovce ukazuje cíl a zbývající čas. Klepněte na něj – na obrazovce **Dočasný cíl** je běžící předvolba zvýrazněna jako **AKTIVNÍ** a na konci spodní lišty, hned vlevo od tlačítka **▶ Aktivovat**, se objeví červené tlačítko **✗ Zrušit**. Klepněte na něj a potvrďte:

![Zrušení běžícího dočasného cíle](../images/TempTarget9.png)

Běžící dočasný cíl lze zastavit také z **hodinek Wear OS**, ze spárovaného **klienta** nebo pravidlem **Automatizace** (*Stop dočasného cíle*).

(TempTargets-hypo-temp-target)=

## Dočasný cíl při hypoglykémii

**Dočasný cíl Hypoglykémie** umožňuje **AAPS** chránit uživatele před nízkou glykémií tím, že sníží dávkování inzulínu. Pokud uživatel předpokládá, že jeho **glykémie** klesne: obvykle by to **AAPS** mělo zvládnout, ale hodně záleží na stabilitě nastavení **AAPS** uživatele. **Dočasný cíl Hypoglykémie** umožňuje uživateli předejít předpovídané hypoglykémii a nastavit **AAPS** tak, aby snížil dávkování inzulínu.

Když uživatel sní sacharidy na léčbu hypoglykémie, jeho **glykémie** může někdy rychle stoupat a **AAPS** bude tento rychlý vzestup **glykémie** korigovat pomocí **SMB**.

Někteří uživatelé chtějí zabránit podávání **SMB** během **dočasného cíle Hypoglykémie**. Toho dosáhnete vypnutím *„Povolit SMB při vysokém dočasném cíli“* v **Nastavení** → **OpenAPS SMB** (viz dále):

- V (Pokročilé, cíl 9): uživatel může pro **dočasné cíle** 100 mg/dl (5,6 mmol/l) nebo vyšší zapnout v OpenAPS SMB *„Vysoký dočasný cíl zvyšuje citlivost“*, **AAPS** pak bude citlivější.

- V (Pokročilé, cíl 9): uživatel může vypnout *„Povolit SMB při vysokém dočasném cíli“*. Pak **AAPS** nebude podávat SMB, dokud jsou aktivní vysoké dočasné cíle, a to ani když má **AAPS** COB > 0, je zapnuto „Povolit SMB při nízkém dočasném cíli“ nebo „Povolit SMB vždy“ a OpenAPS SMB je aktivní.

Poznámka: pokud otevřete **dialog Sacharidy**, když je vaše glykémie nižší než 72 mg/dl nebo 4 mmol/l, **AAPS** automaticky předem zapne přepínač **Spustit dočasný cíl Hypoglykémie**.

(TempTargets-activity-temp-target)=

## Dočasný cíl při pohybové aktivitě

Před cvičením a během něj může uživatel potřebovat vyšší cíl, aby předešel hypoglykémii během aktivity.

Pro zjednodušení **dočasného cíle Aktivita** si uživatel může nastavit výchozí **dočasný cíl – Aktivita**, který zvýší **glykémii** snížením dávkování inzulínu, aby se zpomalil pokles **glykémie** a předešlo se hypoglykémii.

Noví uživatelé **AAPS** možná budou muset zkoušet a přizpůsobit si výchozí nastavení **dočasného cíle Aktivita**, aby jim tato funkce fungovala co nejlépe. Každý člověk je jiný, pokud jde o udržení stabilní glykémie během cvičení. Viz také [sekci o sportu v Nejčastějších otázkách uživatelů APS](#FAQ-sports).

Někteří uživatelé také raději aktivují **přepnutí profilu** (snížení profilu pod 100 %, aby **AAPS** podával méně inzulínu) před zapnutím **dočasného cíle Aktivita** a po dobu, kdy je zapnutý. Obojí můžete spustit najednou: klepněte na název profilu na hlavní obrazovce, klepněte na kulaté tlačítko **▶**, nastavte **Procento** pod 100 % a **Trvání** a pak zapněte **Dočasný cíl / Aktivita**. Viz [Změna procenta profilu](#ProfileSwitch-change-percentage).

Pokročilé, cíl 9: uživatelé mohou pro **dočasné cíle** 100 mg/dl (5,6 mmol/l) nebo vyšší zapnout v OpenAPS **SMB** *„Vysoký dočasný cíl zvyšuje citlivost“*. Cíl 99 mg/dl (5,5 mmol/l) je normální cíl, ani vysoký, ani nízký. **AAPS** je pak citlivější.

Pokud je navíc vypnuto *„Povolit SMB při vysokém dočasném cíli“*, **AAPS** nebude podávat **SMB**, a to ani při COB > 0, při zapnutém *„Povolit SMB při nízkém dočasném cíli“* nebo *„Povolit SMB vždy“* a aktivním OpenAPS **SMB**.

(TempTargets-eating-soon-temp-target)=

## Dočasný cíl Před jídlem

**Dočasný cíl – Před jídlem** pomáhá mírně snížit **glykémii** a zajistit dostatek **IOB** před jídlem.

Může to být důležitý nástroj pro uživatele, kteří nepodávají předstihový bolus. Účinnost **dočasného cíle – Před jídlem** ale závisí na řadě faktorů, například: na nastavení uživatele, zda jí stravu s nízkým obsahem sacharidů a zda používá rychle působící inzulín (např. Fiasp nebo Lyumjev), aby nemusel předstihový bolus podávat. Dokud uživatelé nemají s **AAPS** zkušenosti, měli by při použití **dočasného cíle – Před jídlem** obvykle počítat s předstihovým bolusem, a to zvláště při stravě s vysokým obsahem sacharidů.

Více o „režimu Před jídlem“ („Eating soon mode“) si můžete přečíst v článku ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) (v angličtině) nebo [zde](https://diyps.org/tag/eating-soon-mode/).

Pokročilé, [cíl 9](#objectives-objective9): Pokud používáte OpenAPS SMB a máte zapnuto *„Nízký dočasný cíl snižuje citlivost“*, **AAPS** pracuje o něco agresivněji. Pro tuto možnost musí být **dočasný cíl** 98 mg/dl (5,4 mmol/l) nebo nižší.

## Jak vypnout SMB během dočasných cílů?

Pro nastavení otevřete **Nastavení** → **OpenAPS SMB** a vypněte *„Povolit SMB při vysokém dočasném cíli“*.

![Předvolba Povolit SMB při vysokém dočasném cíli](../images/TempTargetSMB.png)

Tím zajistíte, že **AAPS** nebude podávat **SMB**, a to ani při COB > 0, při zapnutém *„Povolit SMB při nízkém dočasném cíli“* nebo *„Povolit SMB vždy“* a aktivním OpenAPS SMB.