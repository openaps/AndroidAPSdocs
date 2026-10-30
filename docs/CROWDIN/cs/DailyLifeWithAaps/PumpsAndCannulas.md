# Pumpy a kanyly

## Výměny infuzních sad: zásobníky inzulínu a kanyly

Uvedený postup platí pouze pro pumpy připojené kanylou a neplatí pro náplasťové pumpy jako Omnipod, Medtrum Nano, Accu-Check Solo apod. Tento postup se někdy nazývá „výměna setu“. „Úplná“ výměna setu zahrnuje zásobník inzulínu i kanylu, „částečná“ výměna setu znamená výměnu jen kanyly.

Patch pumpy se plní a doplňují samy ve svém vlastním průvodci aktivací a jejich kanyla už je v těle. **AAPS** pro ně plnění nenabízí: **Plnění/doplňování** se nezobrazuje v panelu **Spravovat** ani v Rychlém spuštění. Podívejte se na stránku své pumpy v části [Kompatibilní pumpy](../Getting-Started/CompatiblePumps.md).

Fyzickou výměnu zásobníku nelze provést přes **AAPS**, musí se udělat přímo na pumpě. Po dokončení je nutné ji v **AAPS** ručně zaznamenat.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Návod pro výměnu zásobníku pumpy a kanyly

1. V **AAPS** odpojte pumpu: na hlavní obrazovce stiskněte [ikonu smyčky](#AapsScreens-loop-status) a vyberte **Odpojit pumpu** na 1 hodinu. Ikona se změní na šedou ikonu zástrčky, která ukazuje, že je pumpa odpojená.

2. Fyzicky vyměňte zásobník inzulinu: fyzicky odpojte pumpu od těla a podle pokynů výrobce vyměňte zásobník/nádržku na inzulín a kanylu.

3. Naplňte hadičky a kanylu: to lze provést přímo na pumpě. Ujistěte se, že odstraníte všechny bublinky v hadičkách.

4. Připojte k tělu novou kanylu. Jakmile je kanyla nastřelena a jehla odstraněna, připojená kanyla má obsahuje malou vzduchovou mezeru, kterou je třeba také naplnit. Abyste to oznámili v **AAPS** a naplnili kanylu: otevřete **Plnění/doplňování** (v rozbaleném stavovém panelu na hlavní obrazovce, v panelu **Spravovat** nebo jako tlačítko [Rychlého spuštění](QuickLaunch.md)) a podle potřeby zaškrtněte **Výměna setu** a/nebo **Výměna inzulínu**, aby se výměna zaznamenala. Nyní stiskněte výchozí množství pro naplnění kanyly (obvykle kolem 0,3 U, ale ověřte, že tato hodnota odpovídá vaší kanyle) a vyberte **OK**. Přečtěte si souhrnnou zprávu a plnění potvrďte klepnutím na **OK**.

   ![Plnění/doplňování v panelu Spravovat u pumpy s hadičkou](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Znovu připojte pumpu v **AAPS**: stiskněte šedou ikonu zástrčky a vyberte **Znovu připojit pumpu**, aby smyčka pokračovala.

### Užitečné informace týkající se výměny inzulínu/kanyly

* Zaznamenání výměny setu resetuje Autosens na 100 %. Resetuje také příslušné stavové kontrolky a stáří kanyly/inzulínu na hlavní obrazovce **AAPS**.

* Výchozí množství pro plnění můžete nastavit/upravit v nastavení **Plnění/doplňování** – napište „prime“ do vyhledávacího pole na hlavní obrazovce a nastavení se otevře (viz [Předvolby](../SettingUpAaps/Preferences.md)). Podívejte se do příbalového letáku vaší kanyly a ověřte, kolika jednotkamy inzulinu (v závislosti na délce jehly a hadičky) je třeba pro doplnění vaší kanyly.

* Inzulín vydaný funkcí plnění **AAPS** nezapočítává do aktivního inzulínu (IOB) a v [Historii ošetření](#aaps-screens-treatments) je označen jako „Prime“.

* Ani inzulín nabolusovaný z pumpy během odpojení pumpy nebude **AAPS** brát v úvahu. Pokud náhodou dáte bolus přímo z pumpy, zatímco je **AAPS** odpojený, můžete po opětovném připojení pumpy tento inzulín oznámit (bez vydání bolusu) v dialogu **Inzulín** (viz [Oznámení vydaného inzulínu bez skutečného bolusu](#pumps-cannulas-announce-insulin) níže).

### Problémy s kanylou, místem infuze a/nebo pumpou

Pokud jste si jistí, že jste po určitou dobu nedostali žádný inzulín, i když **AAPS** zaznamenal, že ano, a přesně víte, kdy problém začal (_např._ vyndáte kanylu a vidíte, že se při zavádění zalomila), můžete to v **AAPS** opravit. Myslete ale na to, že inzulín mohl být ve skutečnosti vydán a jen z nějakého důvodu působí pomalu.

```{admonition} Caution - Risk of Hypoglycemia
:class: nebezpečí
Záznam o podání inzulínu smažte z **AAPS** pouze s **EXTRÉMNÍ** opatrností a pro případ, že by inzulín byl skutečně podán, pečlivě sledujte hladinu cukru v krvi v příštích 24 hodinách.
```

Chcete-li odstranit bolusy a SMB, o kterých víte, že nebyly vydány, otevřete **nabídku** (☰), vyberte [Historii ošetření](#aaps-screens-treatments) a na kartě **Sacharidy a bolusy** opatrně smažte zaznamenané bolusy od okamžiku, kdy problém nastal. Tím se opraví hodnota „aktivního inzulínu“ (IOB), která je pro výpočty **AAPS** klíčová. Když se teď vrátíte na hlavní obrazovku, uvidíte, že IOB kleslo. Upozornění: bazální inzulín, o kterém **AAPS** počítá, že byl vydán, nelze smazat. **AAPS** ho tedy bude dál brát v úvahu.

U méně zřejmých problémů s vydáváním inzulínu, _např._ únik, ucpání nebo tunelování, kdy si nejste jistí, kdy problém začal, nebo si myslíte, že část inzulínu vydána byla, musíte být opatrní. Tyto problémy můžete odhalit tak, že inzulín „ucítíte“, uvidíte mokrou náplast, máte vysoké hodnoty glykémie nebo dostanete alarm. Protože nikdy nezjistíte, kolik inzulínu se dostalo do kůže (a ten může po chvíli začít působit), bude těžké určit správné množství inzulínu, které je nutné odečíst od aktuální hodnoty „aktivního inzulínu“ (IOB). Jednou strategií je pozastavení smyčky na dobu 5 hodin (nebo vaši hodnotu doby působnosti inzulínu) poté, co jste vyřešili problém s dodávkou inzulínu a následně můžete smyčku znovu spustit. Tímto zajistíte, že IOB bude správné, až smyčku znovu spustíte.

(pumps-cannulas-disconnecting)=
## Odpojení pumpy při sprchování nebo aktivitě

Pokud si pumpu sundáváte na sprchování, koupání, plavání, kontaktní sporty nebo jiné aktivity, musíte **AAPS** oznámit, že se nevydává žádný inzulín. Jen tak zůstane IOB správné. Pumpu můžete odpojit pomocí [ikony smyčky](#AapsScreens-loop-status) na hlavní obrazovce: stiskněte ji a vyberte **Odpojit pumpu** s potřebnou dobou. Pokud aktivita trvá déle, než jste plánovali, otevřete znovu stejný dialog a v části **Odpojit pumpu** zvolte novou dobu: odpojení se prodlouží a nová doba začíná od teď. Předtím pumpu nemusíte znovu připojit.

Protože během odpojení pumpy nedostáváte žádný inzulín, měli byste se znovu připojit každé dvě hodiny, abyste dohnali chybějící bazál. Můžete to udělat tak, že pumpu připojíte, nabolusujete chybějící bazální dávky (_např._ za poslední dvě hodiny) a pak ji znovu odpojíte. Tak můžete předejít závažnému nedostatku inzulínu, který by mohl vést k diabetické ketoacidóze (DKA). Pokud je nepohodlné pumpu během aktivity znovu připojit (místo kanyly je zakryté neoprenem _apod._), zvažte místo toho injekci perem. Tuto ruční injekci můžete zaznamenat v **AAPS**. Nemusíte ji zaznamenat hned v okamžiku injekce (jen si poznamenejte čas), protože při opětovném připojení pumpy můžete inzulín oznámit a nastavit zpětně čas, kdy byl skutečně podán.

(pumps-cannulas-announce-insulin)=
## Zadání dodaného inzulínu bez skutečného podání dávky

Oznámení inzulínu vydaného z pumpy, když byl **AAPS** odpojený, nebo z injekcí perem: otevřete [dialog Inzulín](#aaps-screens-buttons-insulin) (**Ošetření** ve spodní navigaci nebo tlačítko Rychlého spuštění), zadejte množství v jednotkách a zapněte **Bolus nebude pumpou vydán, pouze zaznamenán**. Pak se objeví řádek **Čas** (nastavený na **Nyní**), kde můžete zadat skutečný čas injekce. Pokud byla injekce podána nedávno, můžete ho ignorovat. Pokud byl bolus podán před nějakou dobou, posuňte čas zpět pomocí **-** (_např._ -30 min), nebo řádek rozbalte šipkou a vyberte přesné datum a čas. **AAPS** pak vezme v úvahu dobu působení inzulínu a podle toho vypočítá zbývající aktivní inzulín.

Pokud používáte **AAPS** jako pečovatel, můžete pumpu na dálku velmi snadno odpojit (a znovu připojit) pomocí [SMS příkazu](../RemoteFeatures/SMSCommands.md), například příkazy „pump disconnect 120“ a „pump connect 120“. Doba trvání vzdáleného odpojení je od 1 do 120 minut (v tomto příkladu je 120 minut). To je velmi užitečné, pokud je pro vás telefon s **AAPS** špatně dostupný, například je schovaný v pásu na pumpu u dítěte, které utíká k bazénu, nebo ho pečlivě hlídá (či používá) teenager.

## Znovupřipojení pumpy po ukončení aktivity

Po delším odpojení (1–2 hodiny) je docela běžné, že **AAPS** vypočítá záporné IOB. Při opětovném připojení pumpy, v závislosti na preferenci/aktuální hladině glukózy/plánovaném jídle nebo následné činnosti, můžete buď:

a) Jednoduše pumpu v **AAPS** znovu připojte (z šedé na zelenou, pro uzavřenou smyčku) a nechte na **AAPS**, aby znovu začal vydávat inzulín

_nebo_

b) Pokud chcete být agresivnější (například míříte k hyperglykémii), můžete otevřít [Bolusovou kalkulačku](#aaps-screens-bolus-wizard) a dát bolus na nula sacharidů, abyste vypočítaný chybějící inzulín ihned vydali jako bolus.

Kterou strategii upřednostníte je na vašem osobním rozhodnutí a nejlépe se určuje pokusem a omylem.


(Aapsscreens-site-rotation)=
## Rotace míst aplikace

**Spravovat → Rotace míst aplikace** otevře dialog Rotace míst aplikace v režimu zobrazení:

- Dvěma tlačítky nahoře (ikona kanyly a ikona senzoru) můžete zobrazit jen místa kanyly, jen místa senzoru, nebo obojí
- K dispozici jsou všechny výměny kanyly a senzoru za posledních 45 dní.
- Klepněte na oblast místa nebo na jeden záznam v seznamu níže a seznam se vyfiltruje jen na záznamy ve vybrané oblasti. Vybraná oblast bude zvýrazněna světle zelenou barvou.
- Klepnutím na ikonu **tužky** vedle záznamu otevřete zobrazení úprav a změníte jeho umístění, šipku nebo poznámku

![Režim zobrazení](../images/SiteRotation/ViewMode.png)

- Ikona **ozubeného kola** (vpravo nahoře) otevře nastavení: **Uživatelský profil pro střídání míst** otevře dialog, kde zvolíte **Muž**, **Žena** nebo **Dítě**, a přepínače **Spravovat střídání míst pumpy** a **Spravovat střídání míst CGM** určují, která místa spravujete.

![Nastavení](../images/SiteRotation/Settings.png)

![Dialog Uživatelský profil pro střídání míst](../images/SiteRotation/Type.png)

*Poznámka: toto nastavení určuje, zda se dialog Rotace míst aplikace (režim úprav) automaticky otevře, když se vytvoří nový záznam tlačítkem „Plnění/doplňování“ nebo „Výměna senzoru“*

- U výměny setu provedené přímo na pumpě musíte otevřít režim zobrazení a upravit nový záznam, abyste vybrali umístění a šipku

Režim úprav vám umožní vybrat umístění, šipku a poznámku k vybranému záznamu:

- Upravovaný záznam se zobrazuje pod obrázky těla, s ikonou svého typu (kanyla nebo senzor)
- Přední a zadní pohled jsou zobrazeny vedle sebe: klepněte na oblast, kam jste ho umístili
- Jakmile vyberete místo (zvýrazněné zeleně), uvidíte v seznamu níže všechny záznamy za posledních 45 dní na tomto místě

![Režim úprav](../images/SiteRotation/EditMode.png)

- Klepnutím na ikonu šipky vpravo od záznamu můžete přidat volitelnou šipku: dialog **Vybrat šipku** vám umožní určit přesnější místo nebo orientaci podu

![Pozice](../images/SiteRotation/EditModeSub.png)

- Můžete také přidat **Poznámku** k vybranému místu
- Klepnutím na ikonu **uložení** (vpravo nahoře) místo zaznamenáte

Filtrovat můžete graficky na obrázku, nebo klepnutím na událost v seznamu Filtr zrušíte klepnutím na obrázek mimo všechna místa

![Filtrování](../images/SiteRotation/Filtering.png)
