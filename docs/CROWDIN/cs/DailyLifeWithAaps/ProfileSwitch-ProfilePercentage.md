# Přepnutí profilu a procento profilu

Tato část vysvětluje, co je **přepnutí profilu** a **procento profilu**. Jak vytvořit **profil**, se dozvíte v části [Váš profil AAPS](#your-aaps-profile-create-and-edit-profiles).

Na začátku cesty s **AAPS** si musíte vytvořit **profil**, pochopit, jak provést **přepnutí profilu**, a naučit se, jaký vliv má **procento profilu** v **AAPS**. Funkce **přepnutí profilu** a **procento profilu** mohou být zvláště užitečné pro:

- menstruační cyklus – v **automatizacích** lze nastavit procentní úpravu **profilu**, aby se **AAPS** přizpůsobil různým fázím hormonálního cyklu a předpokládané inzulínové rezistenci.

- cvičení – v **automatizacích** lze pro cvičení nastavit procentní úpravu **profilu**, aby se snížil bazál.

- lidi pracující v noci nebo na směny – v **profilu** lze nastavit posun času. Počet hodin posunu v **profilu** odpovídá tomu, o kolik později nebo dříve půjde uživatel spát nebo vstane.

Proč použít **procento profilu** místo dočasné úpravy bazálu? **Procento profilu** je účinnější, protože ve stejném poměru sníží nebo zvýší: bazál, ISF i I:C. Díky tomu **AAPS** počítá dávky inzulínu pro uživatele vyváženě. Snížení bazálu v **profilu** uživatele v **AAPS** přinese jen malý užitek, pokud algoritmus dál používá stejné hodnoty ISF a I:C.

(ProfileSwitch-change-percentage)=

## Změna procenta profilu z hlavní obrazovky

Potřebujete alespoň jeden uložený **profil**. **Procento profilu** se vždy použije pomocí **přepnutí profilu**: znovu aktivujete **profil**, tentokrát s procentem.

```{admonition} Přecházíte z AAPS 3? :class: note Dlouhé stisknutí názvu profilu už neotevírá dialog přepnutí profilu. **Klepněte** na název profilu a pak na kulaté tlačítko **▶** vpravo dole: otevře stejná nastavení (procento, trvání, dočasný cíl Aktivita).

    <br />1. Na hlavní obrazovce **klepněte na název profilu** (vedle ikony hvězdičky). Otevře se [obrazovka Profil](#ProfileSwitch-manage-v4) na kartě běžícího **profilu**, která je označena **AKTIVNÍ**.
    
       ![Klepnutím na název profilu na hlavní obrazovce otevřete obrazovku Profil](../images/ProfileSwitch2.png)
    
    2. Pokud chcete ponechat stejný **profil**, nechte vybranou kartu **AKTIVNÍ**. Pokud chcete zároveň změnit **profil**, přejeďte na jinou kartu.
    3. Klepněte na kulaté tlačítko **▶** (**Aktivovat**) vpravo dole. Otevře se obrazovka **Aktivovat**.
    4. Nastavte **Procento** pomocí **−** / **+** (po 5 %) nebo ho napište (30 až 250 %). Pole vždy začíná na **100 %**: neukazuje procento, které právě běží. Zadejte například **80** pro o 20 % méně inzulínu nebo **120** pro o 20 % více.
    5. Nastavte **Trvání** v minutách:
       * **0** ponechá nové procento, dokud neprovedete další **přepnutí profilu**;
       * jakákoli jiná hodnota ukončí přepnutí po této době a **AAPS** se vrátí k **profilu**, který běžel předtím.
    
       ![Obrazovka Aktivovat nastavená na 80 % na 60 minut](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Klepněte na **▶ Aktivovat** dole na obrazovce. Zkontrolujte souhrn v dialogu **Přepnutí profilu** a klepněte na **OK**.
    
       ![Potvrzovací dialog – profil, procento a trvání](../images/v4/Profiles/profile_activate_confirm.png)
    
    Na hlavní obrazovce pak název profilu ukazuje procento a zbývající čas, například *Normal (80%) (59')*, a dokud běží přepnutí s nastaveným trváním, je zobrazen žlutě. Hvězdička označuje přepnutí v grafu glykémie. Viz [hlavní obrazovka](#aaps-screens-profile--target).
    
    ![Hlavní obrazovka, když běží přepnutí profilu na 80 %](../images/v4/Profiles/profile_switch_running.png)
    
    Chcete-li se před koncem **vrátit na 100 %**, zopakujte postup a nechte **Procento** na 100 a **Trvání** na 0.
    
    ```{admonition} Procenta na jedno klepnutí
    :class: tip
    Pokud často používáte stejné procento (sport, nemoc), přidejte [zkratku profilu](#profile-shortcuts) na panel Rychlé spuštění nebo vytvořte [scénu](Scenes.md). Obojí použije profil s přednastaveným procentem a trváním na jedno klepnutí.
    

(ProfileSwitch-manage-v4)=

## Správa a aktivace profilů (Spravovat → Profil)

V **AAPS** v4 se profily spravují a aktivují na obrazovce **Spravovat** (spodní navigace) → **Profil** (*„Spravovat a aktivovat profily“*).

Obrazovka Profil ukazuje vaše profily jako **karusel karet, kterými lze přejíždět**. Karta běžícího profilu je označena **AKTIVNÍ** a ukazuje jeho celkový denní bazál (např. *∑ 30,15 U*). Pod vybranou kartou vidíte podrobnosti tohoto profilu – **Jednotky**, typ **inzulínu** a rozpisy **I:C**, **ISF**, **bazálu** a **cíle** s grafy.

![Obrazovka Profil – karusel profilů, podrobnosti a panel akcí](../images/v4/Profiles/profile_manage.png)

Tlačítka dole pracují s **vybraným** profilem: **➕ Přidat**, **✏️ Upravit**, **⧉ Klonovat** a **‘️ Smazat**, a vpravo kulaté tlačítko **▶ Aktivovat**. Jak vyplnit čtyři rozpisy v editoru (I:C / ISF / BAS / CÍL), najdete v části [Vytvoření a úprava profilů](#your-aaps-profile-create-and-edit-profiles).

**⧉ Klonovat** používá ikonu dvou čtverečků, která často znamená *kopírovat*, ale nic se nevkládá: kopie vznikne v jednom kroku. Potvrďte *Klonovat profil "Normal"?* a na konec karuselu se přidá nový profil s názvem *Normal copy*. Je vybraný a připravený k **✏️ úpravě** (kde ho můžete také přejmenovat). Není to totéž jako klonování dřívějšího **přepnutí profilu** z historie ošetření, které vytvoří nový profil *s použitým procentem a posunem času*. Viz [Uložení přepnutí profilu pro pozdější použití](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Jen tlačítko ▶ Aktivovat?** Vaše nastavení jsou chráněná, takže se obrazovka otevře jen pro čtení. Klepněte na **✏️ tužku** na horní liště a zadejte heslo k nastavení. Viz [Ochrana nastavení nyní zamyká i obrazovky pro správu](#v4changes-read-only-management).

### Přeřazení profilů

Pokud máte více než jeden profil, můžete zvolit jejich pořadí v karuselu: klepněte na ikonu **Přeřadit** (⇅, dvě šipky nahoru a dolů) na horní liště. Místo ukazatele stránek se objeví **tlačítka pro posun ◀ / ▶** s údajem *pozice / celkem* – posuňte kartu uprostřed dříve nebo později a pak potvrďte tlačítkem **✓** (nebo zahoďte tlačítkem **✕**). Nové pořadí se uloží jednou, když potvrdíte.

![Režim přeřazení – tlačítka pro posun a údaj o pozici](../images/v4/Profiles/profile_reorder.png)

### Aktivace profilu

Vyberte profil a klepněte na **▶ Aktivovat**. Na obrazovce **Aktivovat** můžete upravit, jak se **přepnutí profilu** použije:

![Obrazovka Aktivovat – procento, trvání, posun času, čas](../images/v4/Profiles/profile_activate.png)

- **Procento** (30–250 %, pokaždé začíná na 100 %) – změní celý profil v daném poměru. 100 % použije profil beze změny; například 70 % sníží bazál a vypočtenou dávku inzulínu (bolusy na jídlo i korekce) o 30 %. Nemění vaše cílové glykémie ani vstřebávání sacharidů. Celý účinek popisuje část [Procento profilu](#profile-percentage).
- **Trvání** (0–10080 minut, tj. až 7 dní) – jak dlouho přepnutí trvá. **0 = bez omezení** (dokud znovu nepřepnete); jiná hodnota než 0 po skončení vrátí předchozí profil.
- **Dočasný cíl / Aktivita** – objeví se jen tehdy, když nastavíte **Trvání** a **Procento** pod 100 %. Zapněte ho, pokud chcete na stejnou dobu spustit také [dočasný cíl Aktivita](#TempTargets-activity-temp-target), jako byste to udělali před cvičením.
- **Posun času** – ukazuje *0h*; klepnutím na **Změnit** posunete rozpis dopředu nebo dozadu až o 23 hodin (užitečné při práci na směny nebo na cestách). Viz [Posun času](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Znovu použít** – objeví se, když běžící přepnutí má jiné procento než 100 % nebo posun času, například **Znovu použít 80% 0h**. Klepnutím na něj vyplníte stejné procento a posun času, například když chcete prodloužit přepnutí, které brzy skončí.
    
    ![Tlačítko Znovu použít, když běží přepnutí na 80 %](../images/v4/Profiles/profile_activate_reuse.png)

- **Čas** – výchozí je *Nyní*. Můžete zvolit jiný čas, až 24 hodin před nebo po aktuálním čase. Přepnutí nastavené do budoucnosti začne v tomto čase; dočasný cíl Aktivita nastavený spolu s ním pak začne také v tomto čase.
    
    ![Volba času přepnutí profilu](../images/v4/Profiles/profile_activate_time_picker.png)

- **Poznámky** – zobrazí se jen tehdy, když je zapnuto [Zobrazit poznámky v dialogových oknech](#Preferences-show-notes-field-in-treatments-dialogs).

Pokud bazální dávky při zvoleném procentu nejsou kompatibilní s vaší pumpou, objeví se nahoře varování a tlačítko **▶ Aktivovat** zůstane neaktivní: zvolte jiné procento.

Klepněte na **▶ Aktivovat** a pak na **OK** v potvrzovacím dialogu. Běžící profil pak má na své kartě štítek **AKTIVNÍ**.

```{admonition} Vaše pumpa může bazální dávky zaokrouhlit :class: note Každá pumpa umí podávat bazální dávky jen ve vlastních krocích (například 0,05 U/h), proto zaokrouhlí dávky ve vašem **profilu**. **AAPS** pak používá bazál, který pumpa opravdu podává, takže IOB i CDD zůstávají správné. Pokud pumpa podá za den o trochu více nebo méně inzulínu než váš **profil**, oznámení *„Bazální profil aktualizován“* vám řekne o kolik, například *„podává 10,00 U denně místo 10,12 U“*.

Pokud pumpa hlásí bazál, který se od vašeho **profilu** hodně liší, **AAPS** ponechá bazál z **profilu** a požádá vás, abyste zkontrolovali bazální dávky v pumpě.

    <br />```{admonition} Procento a posun času – jeden profil pro mnoho situací
    :class: note
    Místo vytváření mnoha podobných profilů si ponechte jeden základní profil a pro opakované situace (nemoc, cvičení, cestování) ho použijte s jiným **procentem** nebo **posunem času**. Přesně to automatizují [scény](Scenes.md).
    

Přepnutí profilu není omezeno jen na tuto obrazovku. Stejné přepnutí lze spustit také z **hodinek Wear OS**, ze spárovaného **klienta** (viz [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md)), ze **[scény](Scenes.md)** nebo pravidlem **Automatizace**.

## Procento profilu

Je důležité, aby uživatel rozuměl základním vlastnostem **procenta profilu**. Když u **přepnutí profilu** nastavíte procentní zvýšení nebo snížení, nastavení uložená v **profilu** uživatele se zvýší nebo sníží o stejné procento.

Například: **přepnutí profilu** na 130 % (znamená, že uživatel je o 30 % více rezistentní na inzulín) řekne **AAPS**, aby

- **zvýšil** bazální dávku o 30 %; 
- **snížil** **ISF**: vydělením číslem 1,3;
- **snížil** **I:C** vydělením číslem 1,3.

Pamatujte, že nižší **ISF** nebo **I:C** znamená silnější poměr a podání více inzulínu. Noví uživatelé **AAPS** na to snadno zapomenou.

Po výběru **AAPS** upraví výchozí bazální dávku a **AAPS** (otevřená i uzavřená smyčka) pak dál pracuje na základě zvoleného procenta **profilu**.

Vliv **procenta profilu** shrnuje tato tabulka:

| Přepnutí profilu  
procento |     Účinek     |     I:C  
g/U     | příklad  
15 g |          ISF  
mmol/l/U  
mg/dl/U          | U na snížení o  
2 mmol/l  
40 mg/dl |
|:---------------------------:|:--------------:|:-----------------:|:--------------:|:------------------------------------------:|:------------------------------------:|
|            90 %             |     Slabší     | 5/0,9  
=**5,55** |     2,7 U      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |                0,8 U                 |
|          **100 %**          | **Standardní** |       **5**       |    **3 U**     |                **2,2  
40**                |              **0,9** U               |
|            130 %            |    Silnější    | 5/1,3  
=**3,85** |     3,9 U      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |                1,2 U                 |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Posun času cirkadiánního procentního profilu

„Posun času“ v **profilu** uživatele posune nastavení **profilu** v rámci denního (cirkadiánního) cyklu o zadaný počet hodin. To může pomoci:

- **lidem pracujícím v noci nebo na směny**: při noční směně nastavíte v **profilu** počet hodin podle toho, o kolik později nebo dříve půjde uživatel spát nebo vstane; 
- **uživatelům, kteří při cestování mění časová pásma**; nebo
- **dětem s diabetem 1. typu**, které mají pevný večerní režim a inzulínovou rezistenci zohledněnou ve svém **profilu**. Pokud dítě z jakéhokoli důvodu půjde spát později, může pečovatel použít na **profil** dítěte „posun času“, aby **AAPS** reagoval na inzulínovou rezistenci v době, kterou uživatel zvolí.

Jde vždy o to, nastavení **profilu** z které hodiny má nahradit nastavení pro aktuální čas. Čas je nutné posunout o x hodin. Dejte proto pozor na směr posunu, jak ukazuje následující příklad:

- Aktuální čas: 12:00
- **Kladný** posun času 
    - 2:00 **+10 h** -> 12:00
    - Nastavení platná od 2:00 budou použita namísto těch, která normálně platí ve 12:00, protože posouváme profil dopředu.
- **Záporný** posun času 
    - 22:00 **-10 h** -> 12:00
    - Nastavení platná od 22:00 budou použita namísto těch, která normálně platí ve 12:00, protože posouváme profil dozadu.

![Směry posunu profilu v čase](../images/ProfileSwitch_PlusMinus2.png)

Tento způsob ukládání snímků **profilu** umožňuje mnohem přesnější výpočty v minulosti a možnost sledovat změny **profilu**.

(ProfileSwitch-keep-for-later)=

## Uložení přepnutí profilu pro pozdější použití

Když provedete přepnutí profilu s procentem a/nebo posunem času, můžete tento dočasný profil zkopírovat do nového profilu.

Otevřete nabídku (☰) → **Ošetření** a přejděte na kartu **Přepnutí profilu**, viz [Klonování přepnutí profilu do nového profilu](#your-aaps-profile-clone-profile-switch).