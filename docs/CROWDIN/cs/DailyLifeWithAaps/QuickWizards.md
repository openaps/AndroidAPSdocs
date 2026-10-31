(quickwizards)=
# Rychlé bolusy (bolusy jedním klepnutím)

**Rychlý bolus** (QuickWizard) je uložené tlačítko na jedno klepnutí pro opakované jídlo nebo situaci. Nese pevné množství **sacharidů** (a způsob, jak na ně dávkovat), takže můžete vydat bolus – nebo jen zaznamenat sacharidy – jedním klepnutím a potvrzením, místo abyste pokaždé otevírali celou bolusovou kalkulačku.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otevření rychlých bolusů

Otevřete obrazovku **Spravovat** (spodní navigace) a zvolte **Rychlý bolus** (*„Spravovat přednastavení rychlého bolusu“*).

---

## Správa rychlých bolusů

Vaše rychlé bolusy se zobrazují jako **karusel karet, kterými lze listovat** (každá karta ukazuje text tlačítka, sacharidy a platné časové rozmezí). Editor pod ním nastavuje **vybraný** rychlý bolus; spodní lišta akcí má tlačítka **➕ přidat**, **⧉ klonovat**, **🗑️ smazat** a tlačítko **▶** pro spuštění vybraného rychlého bolusu.

![Editor rychlého bolusu – režim, sacharidy, čas sacharidů a platné časové rozmezí](../images/v4/QuickWizard/quickwizard_editor.png)

Hlavní pole editoru jsou:

- **Text tlačítka** – popisek zobrazený na tlačítku.
- **Sacharidy** a **Čas sacharidů** – množství sacharidů a jeho časový posun.
- **Platné časové rozmezí** – viz [Platnost](#quickwizard_validity).
- **Možnosti kalkulačky** a **Výběr zařízení** – viz níže.

---

## Tři režimy

Přepínač v horní části editoru – **Průvodce / Inzulín / Sacharidy** – určuje, **co tlačítko udělá** po klepnutí:

- **Průvodce** – spustí celou **bolusovou kalkulačku** pro nastavené sacharidy s použitím vaší aktuální **glykémie, IOB, COB a trendu** (podle *Možností kalkulačky* níže). Vydá *vypočítaný* bolus a zaznamená sacharidy. Toto je klasický rychlý bolus.
- **Inzulín** – vydá **pevné, předem nastavené množství inzulínu**, které si určíte – bez výpočtu.
- **Sacharidy** – zaznamená nastavené **sacharidy jen**, **bez bolusu**.

---

## Možnosti kalkulačky (režim Průvodce)

U tlačítka v režimu **Průvodce** volíte, které vstupy výpočet použije:

- **Použít gly**, **Použít COB**, **Použít IOB** (s volbou *Pouze kladný IOB*), **Použít trend** (*Vše / Pouze pozitivní / Pouze negativní*), **Použít dočasný cíl**, **Použít alarm**.
- **Procento bolusu** – upraví vypočítaný bolus v daném poměru.
- **Přidat eSacharidy** – naplánuje navíc rozložené sacharidy.

![Možnosti kalkulačky, Procento bolusu a Výběr zařízení](../images/v4/QuickWizard/quickwizard_options.png)

---

## Platnost – kdy se tlačítko zobrazí

(quickwizard_validity)= **Platné časové rozmezí** (*Od / Do*) určuje, **kdy** se rychlý bolus zobrazí a dá se použít. Tlačítko nastavené například na **06:00–10:00** se zobrazí jen ráno – rychlý bolus *Snídaně* vám tak nebude u večeře zbytečně zabírat obrazovku (ani se na něj omylem neklepne). Mimo své okno je tlačítko skryté v panelu **Ošetření** i na [panelu Rychlé spuštění](QuickLaunch.md). Tlačítko na panelu se nesmaže: znovu se objeví, když se okno opět otevře.

Když je platné časové rozmezí kratší než 4 hodiny, tlačítko se po použití skryje také na 30 minut, aby se stejné jídlo omylem nezadalo dvakrát.

---

## Místa spuštění – kde ho použijete

Přepínače **Výběr zařízení** určují, kde se každý rychlý bolus zobrazí:

- **Zobrazit na telefonu** – zobrazí se v **panelu [Ošetření](../Maintenance/V4Changes.md)** (s vypočítanou dávkou přímo na tlačítku). Rychlý bolus zobrazený na telefonu můžete také **připnout jako tlačítko rychlé akce na přehled**: otevřete *Konfigurace Rychlého spuštění* (⚙ na panelu [Rychlé spuštění](QuickLaunch.md)) a přidejte ho z kategorie **Rychlé bolusy**.
- **Zobrazit na hodinkách** – zobrazí se na **dlaždici rychlých bolusů ve Wear OS** (přejeďte na ni v karuselu dlaždic na hodinkách a klepnutím na tlačítko ho spusťte – stejně jako u [dlaždice Scény](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
Část **Výběr zařízení** se v editoru zobrazí jen tehdy, když je zapnutý plugin **Wear** a jeho předvolba **Ovládání přes Wear** je zapnutá. Bez toho se každý rychlý bolus jednoduše zobrazí na telefonu.
```

Na telefonu se rychlé bolusy zobrazují nahoře ve spodním panelu **Ošetření**:

![Rychlé bolusy (nahoře) v otevřeném spodním panelu Ošetření](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…a jako tlačítko rychlé akce na přehledu:

![Tlačítko rychlé akce s rychlým bolusem na přehledu](../images/v4/QuickWizard/quickwizard_overview.png)

![Dlaždice rychlých bolusů na hodinkách s Wear OS](../images/v4/QuickWizard/quickwizard_watch_tile.png)

Spárovaný **klient** (**AAPSClient**) může rychlý bolus také spustit – **hlavní zařízení** ho vypočítá a vydá (viz [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md)).

Ať je spuštěn odkudkoli, klepnutí na rychlý bolus vždy zobrazí **potvrzení** (při spuštění z klienta nebo hodinek potvrzení vystavené hlavním zařízením) dřív, než se cokoli vydá.

Rychlý bolus bude odmítnut, pokud je jeho dávka vyšší než váš maximální bolus, nebo pokud jsou jeho sacharidy či eSacharidy vyšší než vaše maximální sacharidy (například poté, co jste limit snížili). Když jsou sacharidy nad limitem, tlačítko v panelu **Ošetření** je neaktivní. Upravte rychlý bolus nebo limit.

---

## Přidávání a odebírání

- **➕ Přidat** – vytvoří nový rychlý bolus.
- **⧉ Klonovat** – zkopíruje existující jako výchozí bod.
- **🗑️ Smazat** – odstraní ho.

Pokud máte dva nebo více rychlých bolusů, můžete také změnit jejich pořadí v karuselu: klepněte na ikonu **Přeřadit** (⇅) v horní liště, posouvejte kartu uprostřed **tlačítky pro posun ◀ / ▶** a pak potvrďte **✓**. (Ovládání vypadá stejně jako při [přeřazení profilů](ProfileSwitch-ProfilePercentage.md).)

Rychlé bolusy jsou součástí synchronizované konfigurace, takže je sdílí hlavní zařízení i spárovaní klienti.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
