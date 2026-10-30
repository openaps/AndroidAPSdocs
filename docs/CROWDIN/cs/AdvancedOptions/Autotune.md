# Jak používat plugin Autotune

Plugin Autotune je implementace algoritmu OpenAPS autotune v AAPS. Analyzuje vaši nedávnou historii AAPS a navrhuje úpravy vašich bazálních dávek, ISF a sacharidového poměru.

Plugin Autotune je v AAPS dostupný od verze [3.4](#version3400), ale ve výchozím stavu je skrytý.

(autotune-how-autotune-calculates-adjustments)=
## Jak Autotune počítá úpravy

Autotune prochází vaši nedávnou historii AAPS – hodnoty z CGM, bolusy, sacharidy a dočasné bazály – a zjišťuje, kde váš **profil** (bazální dávky, ISF, sacharidový poměr) přesně neodpovídá tomu, co se ve skutečnosti dělo s vaší glykémií.

Pro každý 5minutový datový bod porovná **skutečnou změnu glykémie** se změnou, kterou předpověděl váš profil, a výslednou odchylku zařadí do jedné ze tří skupin:

* odchylky, ke kterým došlo bez aktivních sacharidů a bez aktivity inzulínu (slouží k ladění **bazálních dávek**, hodinu po hodině),
* odchylky, ke kterým došlo po bolusu/korekci bez sacharidů (slouží k ladění **ISF**), nebo
* odchylky, ke kterým došlo během vstřebávání sacharidů (slouží k ladění **sacharidového poměru**).

Pak se podívá na rozložení odchylek v každé skupině (pomocí percentilů místo prostého průměru, aby několik zašuměných datových bodů nezkreslilo výsledek) a navrhne novou hodnotu pro danou hodinu/parametr.

Aby jeden výpočet hodnotu příliš nepřekorigoval, každý běh Autotune posune hodnotu jen o část cesty k tomu, co ukazují data: nejvýše o 10 % u ISF a sacharidového poměru a nejvýše o 20 % u každého bazálního úseku. Celkový posun je dále omezen nastaveními **Max autosens ratio** / **Min autosens ratio** (viz [Další nastavení](#autotune-other-settings) níže) – jsou to stejné meze, které omezují Autosens. Proto je Autotune určený k opakovanému spouštění (den za dnem nebo každou noc) a nemá se mu věřit po jediném spuštění: výsledky by se měly postupně ustálit. Velký skok při jednom spuštění je znamení, že máte znovu zkontrolovat svá data (chybějící sacharidy, den se špatným senzorem _apod._), a ne mu slepě věřit.

Autotune lze spustit třemi způsoby: ručně jednorázově v pluginu (jak je popsáno níže), automaticky každou noc pomocí [pravidla automatizace](#autotune-run-autotune-with-an-automation-rule), nebo – úplně mimo AAPS – jako samostatný nástroj příkazové řádky nad exportovanými daty. Tak jeho použití popisují některé komunitní návody, bez telefonu, na kterém AAPS právě běží.

*Podrobný matematický popis algoritmu oref0, na kterém Autotune stojí, najdete v [dokumentaci Autotune od OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Zobrazení pluginu Autotune

Vytvořte prázdný soubor s názvem `enable_autotune` v podsložce `extra` v [adresáři AAPS](#preferences-maintenance-settings) ve vašem telefonu.

***POZNÁMKA: Ověřte si v nastavení **AAPS**, kde je váš adresář AAPS, a že jste soubor vložili do správné složky. Už několik uživatelů soubor omylem vložilo do špatné složky.***

![Povolení Autotune](../images/Autotune/Autotune_0.png)

Restartujte **AAPS**. Potom otevřete **nabídku** (☰), vyberte **Konfigurace**, pak kategorii **Obecné** a zaškrtněte **Autotune**. Karta pak zobrazí **Nastavení** a **Otevřít plugin**:

![Autotune zaškrtnutý v Konfigurace > Obecné](../images/v4/Configuration/configuration_general_autotune.png)

## Uživatelské rozhraní Autotune

Klepnutím na **Otevřít plugin** na kartě **Autotune** otevřete obrazovku Autotune:

![Obrazovka Autotune s profilem, počtem dní s daty a varováním k vybranému profilu](../images/Autotune/Autotune_1b.png)

- V rozbalovacím menu profilu můžete vybrat vstupní profil, který chcete doladit (automaticky je vybrán váš aktivní profil).
  - Poznámka: Při každém výběru nového profilu se předchozí výsledky smažou a **Počet dní s daty** se nastaví na výchozí hodnotu.
- Pak pomocí **Počet dní s daty** (ve starších verzích **Ladit dní**) vyberete počet dní, které se použijí ve výpočtu pro ladění vašeho profilu. Minimální hodnota je 1 den a maximální 30 dní. Toto číslo by nemělo být příliš malé, abyste dostali správné a vyrovnané výsledky (více než 7 dní pro každý výpočet).
  - Poznámka: Při každé změně **Počet dní s daty** se předchozí výsledky smažou.
- Poslední spuštění je odkaz, který obnoví váš poslední platný výpočet. Pokud jste Autotune v aktuální den nespustili, nebo pokud se předchozí výsledky smazaly kvůli změně parametru výpočtu výše, můžete obnovit parametry a výsledky posledního úspěšného výpočtu.
- Varování vám ukáže například některé informace o vybraném profilu (pokud máte několik hodnot IC nebo několik hodnot ISF).
  - Poznámka: Výpočet Autotune pracuje jen s jednou hodnotou IC a jednou hodnotou ISF. Zatím neexistuje žádný algoritmus Autotune, který by ladil cirkadiánní IC nebo cirkadiánní ISF. Pokud má váš vstupní profil několik hodnot, v sekci varování uvidíte průměrnou hodnotu, která se použije pro ladění vašeho profilu.
- Tlačítko Zkontrolovat vstupní profil otevře prohlížeč profilu, abyste mohli rychle ověřit svůj profil (jednotky, IC, ISF, bazál a cíl).
  - Poznámka: Autotune ladí jen váš IC (jedna hodnota), ISF (jedna hodnota) a bazál (s cirkadiánní variací). Jednotky a cíl zůstanou ve výstupním profilu beze změny.

- „Spustit Autotune“ spustí výpočet Autotune s vybraným profilem a vybraným počtem dní s daty.
  - Poznámka: Výpočet Autotune může trvat dlouho. Po spuštění můžete přejít na jinou obrazovku (hlavní obrazovka, ...) a později se vrátit do pluginu Autotune a podívat se na výsledky.

  ![Spuštění Autotune](../images/Autotune/Autotune_2b.png)

- Během výpočtu pak níže uvidíte průběžné výsledky.

  - Poznámka: Během výpočtu jsou nastavení uzamčena, takže už nemůžete změnit vybraný vstupní profil ani počet dní. Pokud chcete spustit další výpočet s jinými parametry, musíte počkat na konec aktuálního výpočtu.

  ![Autotune během výpočtu](../images/Autotune/Autotune_3b.png)

- Když výpočet Autotune skončí, uvidíte výsledek (vyladěný profil) a pod ním čtyři tlačítka.

  ![Výsledek Autotune](../images/Autotune/Autotune_4b.png)

- Vždy je důležité porovnat vstupní profil (sloupec „Profil“), výstupní profil (sloupec „Vyladěno“) a procento změny u každé hodnoty (sloupec „%“).

- U bazálních dávek máte také počet „chybějících dní“. Chybějící dny máte, když Autotune nemá pro dané období dost dat zařazených jako „Bazál“, aby mohl vyladit bazální dávku (například po každém jídle, kdy se vstřebávají sacharidy). Toto číslo by mělo být co nejnižší, hlavně tam, kde je bazál důležitý (například v noci nebo na konci odpoledne).

- Tlačítko „Porovnat profily“ otevře zobrazení pro porovnání profilů. Vstupní profil je modře a výstupní profil (s názvem „Vyladěno“) je červeně.

  - Poznámka: V příkladu níže má vstupní profil cirkadiánní variaci IC a ISF, ale vypočítaný výstupní profil má jen jednu hodnotu. Pokud je pro vás důležité mít cirkadiánní výstupní profil, podívejte se níže na [Cirkadiánní profil IC nebo ISF](#autotune-circadian-ic-or-isf-profile).

  ![Autotune – Porovnat profily](../images/Autotune/Autotune_5.png)

- Pokud výsledkům věříte (malé procento změny mezi vstupním a výstupním profilem), můžete klepnout na tlačítko „Aktivovat profil“ a potvrdit tlačítkem OK.

  - Aktivace vyladěného profilu automaticky vytvoří nový profil „Vyladěno“ ve vašem seznamu profilů (**Spravovat → Profil**).
  - Pokud už v **Spravovat → Profil** máte profil s názvem „Vyladěno“, tento profil se před aktivací aktualizuje vypočítaným profilem Autotune.

  ![Autotune – Aktivovat profil](../images/Autotune/Autotune_6.png)

- Pokud si myslíte, že je vyladěný profil potřeba upravit (například pokud vám některé změny připadají příliš velké), můžete klepnout na tlačítko „Kopírovat do místního profilu“.

  - V **Spravovat → Profil** se vytvoří nový profil s předponou „Vyladěno“ a s datem a časem výpočtu.

  ![Autotune – Kopírovat do místního profilu](../images/Autotune/Autotune_7.png)

- Vyladěný profil pak můžete upravit: otevřete **Spravovat** > **Profil**, přejeďte na kartu s názvem „Vyladěno“ s datem a časem výpočtu a klepněte na tlačítko **Upravit** (tužka).

  - hodnoty v profilu se v uživatelském rozhraní zaokrouhlí podle možností vaší pumpy.

  ![Autotune – aktualizace místního profilu](../images/Autotune/Autotune_8.png)

- Pokud chcete nahradit svůj vstupní profil výsledkem Autotune, klepněte na tlačítko „Aktualizovat vstupní profil“ a potvrďte vyskakovací okno tlačítkem OK.

  - Poznámka: Pokud klepnete na „Aktivovat profil“ po „Aktualizovat vstupní profil“, aktivujete svůj aktualizovaný profil, a ne výchozí profil „Vyladěno“.

  ![Autotune – Aktualizovat vstupní profil](../images/Autotune/Autotune_9.png)

- Pokud jste aktualizovali svůj vstupní profil, tlačítko „Aktualizovat vstupní profil“ se nahradí tlačítkem „Vrátit vstupní profil“ (viz snímek obrazovky níže). Tak hned uvidíte, zda váš aktuální vstupní profil v **Spravovat → Profil** už obsahuje výsledek posledního výpočtu, nebo ne. Tímto tlačítkem můžete také obnovit svůj vstupní profil bez výsledku Autotune.

  ![Autotune – Aktualizovat vstupní profil](../images/Autotune/Autotune_10.png)



## Nastavení Autotune

(autotune-plugin-settings)=

### Nastavení pluginu Autotune

  ![Nastavení Autotune v AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
Funkce **Automatické přepnutí profilu** je dostupná jen v režimu Dev/Engineering (vývojové sestavení nebo inženýrský režim).
```

- **Automatické přepnutí profilu** (výchozí: vypnuto): viz [Spuštění Autotune pravidlem automatizace](#autotune-run-autotune-with-an-automation-rule) níže. Pokud toto nastavení zapnete, vstupní profil se automaticky aktualizuje vyladěným profilem a ten se aktivuje.
  - **Buďte opatrní: několik následujících dní musíte ověřovat, že aktualizace a aktivace vyladěného profilu bez úprav opravdu zlepšuje vaši smyčku.**

- **Kategorizovat UAM jako bazál** (výchozí: vypnuto): Toto nastavení je pro uživatele, kteří používají AndroidAPS bez zadávání sacharidů (plně UAM). Když je vypnuté, zabrání zařazení UAM jako bazálu.
  - Poznámka: Pokud máte během dne alespoň jednu hodinu zjištěného vstřebávání sacharidů, všechna data zařazená jako „UAM“ se zařadí jako bazál bez ohledu na toto nastavení (zapnuto nebo vypnuto).
- **Výchozí dny pro ladění** (výchozí: 5): Tímto nastavením určíte výchozí hodnotu. Při každém výběru nového profilu v pluginu Autotune se **Počet dní s daty** nahradí touto výchozí hodnotou.
- **Použít cirkadiánní IC/ISF** (výchozí: vypnuto): viz [Cirkadiánní profil IC nebo ISF](#autotune-circadian-ic-or-isf-profile) níže.

(autotune-other-settings)=
### Další nastavení

- Autotune také používá Max autosens ratio a Min autosens ratio k omezení změn. Tyto hodnoty můžete zobrazit a upravit v [**Nastavení** > **Nastavení absorpce sacharidů** > **Rozšířená nastavení**](../SettingUpAaps/Preferences.md) (**Autosens max** a **Autosens min**).

  ![Autosens max a Autosens min v rozšířeném nastavení absorpce sacharidů](../images/preferences/settings_absorption_advanced.png)



## Pokročilá funkce

(autotune-circadian-ic-or-isf-profile)=

### Cirkadiánní profil IC nebo ISF

- Pokud máte ve svém profilu velké rozdíly IC a/nebo ISF a plně věříte svému cirkadiánnímu rozložení a variaci, můžete zapnout **Použít cirkadiánní IC/ISF** (ve starších verzích „Apply average result in circadian IC/ISF“).

  - Výpočet Autotune se vždy provádí s jednou hodnotou a Autotune cirkadiánní variaci neladí. Toto nastavení jen použije průměrnou vypočítanou změnu IC a/nebo ISF na vaše cirkadiánní hodnoty.

- Na snímku obrazovky níže vidíte vyladěný profil s vypnutým (vlevo) a zapnutým (vpravo) použitím průměrné změny.

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_13.png)



### Ladění jen vybraných dní v týdnu

- Když klepnete na ikonu **oka** vpravo od pole **Počet dní s daty**, uvidíte výběr dní. Můžete určit, které dny v týdnu se zahrnou do výpočtu Autotune (na snímku obrazovky níže vidíte příklad pro „pracovní dny“, kde jsou sobota a neděle z výpočtu Autotune vyřazené).
  - Pokud je počet dní zahrnutých do výpočtu Autotune nižší než **Počet dní s daty**, uvidíte vpravo od výběru dní, kolik dní se zahrne (v příkladu níže 10 dní).
  - Toto nastavení dává dobré výsledky, jen pokud počet zbývajících dní není příliš malý (například pokud ladíte zvláštní profil pro víkend a vyberete jen sobotu a neděli, nastavte **Počet dní s daty** alespoň na 21 nebo 28, aby se do výpočtu Autotune zahrnulo 6 nebo 8 dní).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_14b.png)

- Během výpočtu Autotune vidíte průběh výpočtu („Částečný výsledek - vyladěn den 1 / 4“ v příkladu níže, kde jsou sobota a neděle vyřazené).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Spuštění Autotune pravidlem automatizace

```{admonition} Only DEV
:class: note
Funkce **Automatické přepnutí profilu** je dostupná jen v režimu Dev/Engineering (vývojové sestavení nebo inženýrský režim).
```

Prvním krokem je nastavit správný spouštěč pro pravidlo automatizace s Autotune:

Poznámka: Více informací o nastavení pravidla automatizace najdete [zde](../DailyLifeWithAaps/Automations.md).

- Vyberte spouštěč Opakující se čas: Autotune spouštějte jen jednou denně. Autotune je navržený tak, aby se spouštěl každý den (při každém novém spuštění se posunete o den dál a změny profilu by měly být rychle velmi malé).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_16.png)

- Na začátku je lepší spouštět Autotune během dne, abyste mohli zkontrolovat výsledky. Pokud chcete Autotune spouštět v noci, musíte ve spouštěči nastavit 4:00 nebo později, aby se aktuální den zahrnul do dalšího výpočtu Autotune.

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_17.png)

- Pak můžete vybrat akci **Profil Autotune** (ve skupině **Smyčka a inzulín**).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_18.png)

- Pak můžete upravit parametry akce pro váš výpočet. V nové akci ukazuje **Vyberte profil pro ladění** první profil z vašeho seznamu místních profilů, pole **Ladit dní** je prázdné a všechny dny jsou vybrané. Vyberte profil, který chcete ladit, a zadejte počet dní v poli **Ladit dní** (1 až 30).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_19b.png)

- Pokud po několika dnech plně věříte výsledkům Autotune a procento změny je malé, můžete v [nastavení Autotune](#autotune-plugin-settings) zapnout „**Automatické přepnutí profilu**“, aby se vyladěný profil po výpočtu automaticky aktualizoval a aktivoval.

Poznámka: Pokud chcete automaticky ladit profily pro určité dny v týdnu (například jeden profil pro „víkendové dny“ a druhý pro „pracovní dny“), vytvořte pro každý profil jedno pravidlo, vyberte stejné dny ve spouštěči i v akci Autotune, počet dní pro ladění nastavte dost vysoko, aby se ladění jistě provedlo alespoň se 6 nebo 8 dny, a nezapomeňte ve spouštěči nastavit čas po 4:00...

- Níže je příklad pravidla, které se spouští každý pracovní den (pondělí až pátek) ve 4:00 a ladí profil „Normal“ s hodnotou 14 v poli **Ladit dní**, jen pracovní dny (do výpočtu Autotune se tedy zahrne jen 10 dní).

  ![Výchozí obrazovka Autotune](../images/Autotune/Autotune_20b.png)



## Tipy a triky

Autotune pracuje s informacemi, které jsou ve vaší databázi. Pokud jste tedy AAPS právě nainstalovali na nový telefon, musíte několik dní počkat, než budete moci Autotune spustit s dostatečným počtem dní pro smysluplné výsledky.

Autotune je jen pomůcka. Je důležité pravidelně kontrolovat, zda s vypočítaným profilem souhlasíte. Pokud máte jakékoli pochybnosti, změňte nastavení Autotune (například počet dní) nebo zkopírujte výsledky do místního profilu a profil před použitím upravte.

Než výsledky použijete, vždy spouštějte Autotune několik dní ručně a výsledky kontrolujte. Automatizaci začněte používat teprve tehdy, když výsledkům Autotune plně věříte a rozdíl mezi předchozím a vypočítaným profilem je už velmi malý (nikdy dříve).

- Autotune může u některých uživatelů fungovat velmi dobře a u jiných ne, proto: **Pokud výsledkům Autotune nevěříte, nepoužívejte ho**

Je také důležité výsledky Autotune analyzovat, abyste pochopili (nebo se pokusili pochopit), proč Autotune navrhuje právě tyto změny.

- může dojít k celkovému zvýšení nebo snížení síly vašeho profilu (například zvýšení celkového bazálu spolu se snížením hodnot ISF a IC). může to souviset s několika následujícími dny s korekcí autosens nad 100 % (je potřeba větší agresivita) nebo pod 100 % (jste citlivější).
- Autotune někdy navrhne jiný poměr mezi bazálními dávkami a IC/ISF (například nižší bazál a agresivnější IC/ISF).

Autotune nedoporučujeme používat v těchto případech:

- Nezadáváte všechny své sacharidy.
  - Pokud nezadáte sacharidy na korekci hypoglykémie, Autotune uvidí neočekávaný vzestup vaší glykémie a zvýší vaše bazální dávky o 4 hodiny dříve. To může být opak toho, co potřebujete, abyste se vyhnuli hypoglykémii, hlavně uprostřed noci. Proto je důležité zadávat všechny sacharidy, hlavně ty na korekci hypoglykémie.
- Během dne máte hodně období se zjištěným UAM.
  - Zadali jste všechny své sacharidy a odhadli jste je správně?
  - Všechna období UAM (kromě případu, kdy během dne nezadáte žádné sacharidy a kategorizace UAM jako bazál je vypnutá) se zařadí jako bazál. To může váš bazál hodně zvýšit (mnohem víc, než je potřeba).

- Vaše vstřebávání sacharidů je velmi pomalé: pokud se většina vstřebávání sacharidů počítá s parametrem min_5m_carbimpact (tato období poznáte podle malé oranžové tečky v horní části křivky COB), výpočet COB může být chybný a vést ke špatným výsledkům.
  - Při sportu jste obvykle citlivější a vaše glykémie tolik nestoupá, takže během cvičení nebo po něm je běžné vidět období s pomalým vstřebáváním sacharidů. Pokud ale máte neočekávaně pomalé vstřebávání sacharidů příliš často, možná potřebujete upravit profil (vyšší hodnota IC) nebo máte min_5m_carbimpact trochu příliš vysoký.
- Máte „velmi špatné dny“, například jste uvízli několik hodin v hyperglykémii a potřebovali obrovské množství inzulínu, abyste se dostali zpět do cílového rozmezí, nebo máte po výměně senzoru dlouhá období s chybnými hodnotami glykémie. Pokud máte za poslední týdny jen jeden nebo 2 „špatné dny“, můžete tyto dny ve výpočtu Autotune ručně vypnout, aby se z výpočtu vyřadily. A znovu **pečlivě zkontrolujte, zda můžete výsledkům věřit**.
- Pokud je procento změny příliš velké
  - Můžete zkusit zvýšit počet dní, abyste dostali vyrovnanější výsledky.
