(global-search)=
# Globálne vyhľadávanie

**AAPS** v4 má v hornej časti hlavnej obrazovky pole **globálneho vyhľadávania**. Napíšte slovo a vyhľadávanie naraz prehľadá celú aplikáciu – pluginy, dialógy, obrazovky nastavení, jednotlivé nastavenia – a ak ste online, aj **dokumentáciu AndroidAPS**. Je to najrýchlejší spôsob, ako sa dostať k nastaveniu alebo obrazovke bez toho, aby ste si museli pamätať, kde sa nachádza.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otvorenie vyhľadávania

Ťuknite na pole **🔍 Hľadať** v hornej časti **prehľadu** (vedľa menu ☰). Začnite písať a výsledky sa zobrazujú už počas písania (po krátkej pauze), zoskupené podľa kategórií:

![Výsledky globálneho vyhľadávania zoskupené podľa kategórií](../images/v4/Search/search_results.png)

Pole vymažete pomocou **✕**, vyhľadávanie zavriete tlačidlom **Späť** na zariadení.

---

## Vyhľadávajte po anglicky *alebo* vo vlastnom jazyku

Toto je dôležité vedieť: vyhľadávanie porovnáva **aj** text vo vašom **zvolenom jazyku**, **aj** pôvodný **anglický** text.

- Ak máte aplikáciu napríklad v nemčine alebo češtine, môžete napísať **preložené** slovo **alebo** **anglické** slovo – nastavenie nájdete v oboch prípadoch.
- Najvyššie sa radí zhoda v **preloženom** názve, potom v **anglickom** názve a potom v preložených a anglických **popisoch**.
- Pri porovnávaní sa ignorujú **dĺžne, mäkčene a iná diakritika** (takže *ô* sa zhoduje s *o*, *é* sa zhoduje s *e*) a **nezáleží na veľkosti písmen**.

Vďaka tomu vás návod alebo príspevok vo fóre napísaný po anglicky dovedie k správnemu nastaveniu, aj keď váš telefón zobrazuje všetko preložené.

---

## Čo vyhľadávanie pokrýva

Výsledky sú zoskupené do týchto kategórií:

- **Pluginy** – každý plugin viditeľný vo vašom zostavení (tie isté, ktoré sú uvedené v časti [Konfigurácia](../SettingUpAaps/ConfigBuilder.md)). Každý riadok pluginu má svoj **prepínač zapnutia**, takže plugin môžete zapnúť alebo vypnúť priamo z výsledkov – ťuknutím na riadok vypnutého (prepínateľného) pluginu ho zapnete.
- **Dialógy** – obrazovky ošetrení/akcií a obrazovky správy (Bolusová kalkulačka, Inzulín, Predĺžený bolus, Kalibrácia, Dočasný cieľ, Profil, …). Obrazovky, ktoré sa na vaše zostavenie nevzťahujú, sa vynechajú (napríklad *Spárovanie s hlavným zariadením* na hlavnom zariadení, *Autorizovaní klienti* na klientovi).
- **Kategórie nastavení** – **obrazovky** nastavení a ich podobrazovky, vstavané (Všeobecné, Vzhľad, Ochrana, Výstrahy, Údržba, …) aj z pluginov, a tiež malé skupiny nastavení, ku ktorým sa dostanete z dialógov (tlačidlá plnenia, prírastky tlačidiel inzulínu/sacharidov, prahy stavových kontroliek, nastavenia kalkulačky, …).
- **Nastavenia** – každé **jednotlivé nastavenie**, ktoré má názov. Sú filtrované podľa vášho zostavenia/režimu, takže vidíte iba nastavenia, ktoré sa naozaj uplatňujú (APS / NSClient / ovládanie pumpy).
- **Dokumentácia** – stránky z online **dokumentácie AndroidAPS** (pozrite nižšie).

```{admonition} Settings that belong to a disabled plugin
:class: note
Nastavenie, ktorého plugin je práve **vypnutý**, sa aj tak zobrazí – **sivé** a nedá sa naň ťuknúť – s poznámkou *„Plugin … je deaktivovaný“*, takže viete, že nastavenie existuje a ktorý plugin musíte zapnúť, aby ste sa k nemu dostali.

![Sivé nastavenie z vypnutého pluginu](../images/v4/Search/search_disabled_plugin.png)
```

---

## Výsledky z dokumentácie (online)

Kým beží lokálne vyhľadávanie, **AAPS** súčasne prehľadáva aj oficiálnu **dokumentáciu AndroidAPS** (na ReadTheDocs). Nájdené stránky sa zobrazia v skupine **Dokumentácia** na konci, každá s ikonou 📖, názvom sekcie a krátkou ukážkou textu:

![Výsledky z dokumentácie (wiki) s ukážkami textu](../images/v4/Search/search_documentation.png)

- Ak je dokumentácia preložená do jazyka vašej aplikácie, **AAPS** prehľadáva súčasne preložené aj anglické stránky. Najprv sa zobrazia stránky vo vašom jazyku, potom anglické stránky, ktoré ešte neboli nájdené.
- Ťuknutím na výsledok z dokumentácie sa stránka otvorí vo vašom **prehliadači**.
- Vyhľadávanie v dokumentácii potrebuje **internet** – keď ste offline, namiesto toho dostanete poznámku *„Vyhľadávanie v dokumentácii vyžaduje internetové pripojenie“* a lokálne výsledky (v aplikácii) normálne fungujú ďalej.

---

## Otvorenie výsledku

Ťuknutím na výsledok prejdete priamo naň:

- **Plugin** → otvorí daný plugin.
- **Dialóg** → otvorí danú obrazovku alebo dialóg.
- **Kategória nastavení** → otvorí danú obrazovku nastavení.
- **Nastavenie** → otvorí nastavenie **priamo na jeho mieste** (preskočí naň na jeho obrazovke).
- **Dokumentácia** → otvorí stránku vo vašom prehliadači.

Otváranie nastavení a chránených akcií stále rešpektuje vašu **[ochranu](../SettingUpAaps/ConfigBuilder.md)** (PIN/heslo), presne ako keby ste sa tam dostali ručne. Keď s výsledkom niečo urobíte, tlačidlom **Späť** sa vrátite k výsledkom vyhľadávania.

---

## Skratky pre pokročilých

Dva špeciálne dotazy zobrazia celú kategóriu naraz:

- `%PLUGINS%` – zobrazí **všetky** pluginy.
- `%DIALOGS%` – zobrazí **všetky** dialógy/obrazovky akcií.

---

```{admonition} The index stays current
:class: note
Index vyhľadávania sa vytvorí pri prvom vyhľadávaní a potom zostáva pripravený. Automaticky sa znova vytvorí, keď **zapnete/vypnete plugin** alebo **zmeníte jazyk aplikácie**, takže výsledky vždy zodpovedajú vášmu aktuálnemu nastaveniu.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
