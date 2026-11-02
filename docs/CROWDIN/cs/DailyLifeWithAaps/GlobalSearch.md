(global-search)=
# Globální vyhledávání

**AAPS** v4 má v horní části hlavní obrazovky pole pro **globální vyhledávání**. Napíšete slovo a hledá se najednou v celé aplikaci – v pluginech, dialozích, obrazovkách nastavení, jednotlivých předvolbách – a pokud jste online, také v **dokumentaci AndroidAPS**. Je to nejrychlejší způsob, jak se dostat k nastavení nebo obrazovce, aniž byste si museli pamatovat, kde je.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otevření vyhledávání

Klepněte na pole **🔍 Hledat** v horní části **Přehledu** (vedle nabídky ☰). Začněte psát a výsledky se objevují už během psaní (po krátké pauze), seskupené podle kategorií:

![Výsledky globálního vyhledávání seskupené podle kategorií](../images/v4/Search/search_results.png)

Pole vymažete tlačítkem **✕**, vyhledávání zavřete tlačítkem **Zpět** na zařízení.

---

## Hledejte anglicky *nebo* ve svém jazyce

Tohle je dobré vědět: vyhledávání porovnává **jak** text ve vašem **zvoleném jazyce**, **tak** původní **anglický** text.

- Pokud máte aplikaci například v němčině nebo češtině, můžete napsat **přeložené** slovo **nebo** **anglické** slovo – nastavení najde obojí.
- Nejvýše se řadí shoda v **přeloženém** názvu, pak v **anglickém** názvu, pak v přeložených a anglických **popisech**.
- Porovnávání ignoruje **čárky, háčky a jiná diakritická znaménka** (takže *ů* odpovídá *u*, *é* odpovídá *e*) a **nerozlišuje velká a malá písmena**.

Díky tomu vás návod nebo příspěvek na fóru napsaný anglicky stále dovede ke správnému nastavení, i když telefon zobrazuje vše přeložené.

---

## Co vyhledávání pokrývá

Výsledky jsou seskupené do těchto kategorií:

- **Pluginy** – všechny pluginy viditelné ve vašem sestavení (stejné, jaké jsou uvedené v [Konfiguraci](../SettingUpAaps/ConfigBuilder.md)). Každý řádek pluginu má svůj **přepínač zapnutí**, takže plugin můžete zapnout nebo vypnout přímo z výsledků – klepnutím na řádek vypnutého (přepínatelného) pluginu ho zapnete.
- **Dialogy** – obrazovky ošetření/akcí a správy (Bolusová kalkulačka, Inzulín, Prodloužený bolus, Kalibrace, Dočasný cíl, Profil, …). Obrazovky, které se vašeho sestavení netýkají, jsou vynechány (například *Párovat s hlavním zařízením* na hlavním zařízení, *Autorizovaní klienti* na klientovi).
- **Kategorie předvoleb** – **obrazovky** a podobrazovky nastavení, vestavěné (Obecné, Vzhled, Ochrana, Výstrahy, Údržba, …) i z pluginů, a také malé skupiny nastavení dostupné z dialogů (tlačítka plnění, kroky tlačítek Inzulín/Sacharidy, meze stavových kontrolek, nastavení kalkulačky, …).
- **Předvolby** – každé **jednotlivé nastavení**, které má název. Ty jsou filtrované podle vašeho sestavení/režimu, takže vidíte jen nastavení, která opravdu platí (APS / NSClient / ovládání pumpy).
- **Dokumentace** – stránky z online **dokumentace AndroidAPS** (viz níže).

```{admonition} Settings that belong to a disabled plugin
:class: note
Předvolba, jejíž plugin je právě **vypnutý**, se stále zobrazí – **šedě** a nedá se na ni klepnout – s poznámkou *„Plugin … zakázán“*, takže víte, že nastavení existuje a který plugin musíte zapnout, abyste se k němu dostali.

![Zašedlé nastavení z vypnutého pluginu](../images/v4/Search/search_disabled_plugin.png)
```

---

## Výsledky z dokumentace (online)

Zatímco běží místní vyhledávání, **AAPS** souběžně prohledává i oficiální **dokumentaci AndroidAPS** (hostovanou na ReadTheDocs). Nalezené stránky se zobrazí ve skupině **Dokumentace** dole, každá s ikonou 📖, názvem oddílu a krátkou ukázkou textu:

![Výsledky z dokumentace (wiki) s ukázkami textu](../images/v4/Search/search_documentation.png)

- Pokud je dokumentace přeložená do jazyka vaší aplikace, **AAPS** prohledává přeložené i anglické stránky současně. Nejdřív se zobrazí stránky ve vašem jazyce, pak anglické stránky, které ještě nebyly nalezeny.
- Klepnutím na výsledek z dokumentace otevřete stránku ve svém **prohlížeči**.
- Vyhledávání v dokumentaci potřebuje **internet** – když jste offline, zobrazí se místo toho poznámka *„Hledání v dokumentaci vyžaduje připojení k internetu“* a místní výsledky (v aplikaci) fungují normálně dál.

---

## Otevření výsledku

Klepnutím na výsledek přejdete přímo na něj:

- **Plugin** → otevře daný plugin.
- **Dialog** → otevře danou obrazovku nebo dialog.
- **Kategorie předvoleb** → otevře danou obrazovku nastavení.
- **Předvolba** → otevře nastavení **přímo na místě** (přeskočí na něj v jeho obrazovce).
- **Dokumentace** → otevře stránku ve vašem prohlížeči.

Opening settings and protected actions still respects your **[protection](#Preferences-protection)** (PIN/password), exactly as it would if you had navigated there by hand. Když s výsledkem něco uděláte, můžete stisknout **Zpět** a vrátit se k výsledkům hledání.

---

## Zkratky pro pokročilé uživatele

Dva speciální dotazy vypíší celou kategorii najednou:

- `%PLUGINS%` – vypíše **všechny** pluginy.
- `%DIALOGS%` – vypíše **všechny** dialogy/obrazovky akcí.

---

```{admonition} The index stays current
:class: note
Index vyhledávání se vytvoří při prvním hledání a pak je stále připravený. Automaticky se znovu vytvoří, když **zapnete/vypnete plugin** nebo **změníte jazyk aplikace**, takže výsledky vždy odpovídají vašemu aktuálnímu nastavení.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
