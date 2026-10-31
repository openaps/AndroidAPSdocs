# Kontrola dat

## Prohlížeč historie AAPS

**AAPS** ukládá celou vaši historii (**glykémie**, ošetření, bazál, cíle, **Přepnutí profilu**, …) do místní databáze v telefonu. Tato databáze není součástí [exportu nastavení](../Maintenance/ExportImportSettings.md). Můžete ji prohlížet přímo v **AAPS** pomocí **Prohlížeče historie** a obrazovky **Statistiky**, které jsou popsány níže. Pro dlouhodobé přehledy a reporty nahrávejte svá data do [Nightscoutu](../SettingUpAaps/Nightscout.md) nebo [Tidepoolu](../SettingUpAaps/Tidepool.md).

Historii **AAPS** můžete prohlížet v **Prohlížeči historie**: otevřete **nabídku** (☰) a vyberte **Prohlížeč historie**.

![Prohlížeč historie](../images/v4/Screens/history_browser.png)

- Klepnutím na **kartu s datem** vyberte den, který chcete prohlížet.
- Grafy se otevřou oddálené, aby ukázaly **celý vybraný den**. Roztažením dvou prstů si část grafu přiblížíte.
- Šipkami **<** a **>** se posunete o jeden den zpět nebo dopředu, tlačítkem **Nyní** se vrátíte na aktuální den.
- Grafy ukazují stejná data jako grafy na hlavní obrazovce (glykémie, ošetření, bazál, IOB, COB, aktivita, odchylky...).

(reviewing-statistics)=
## Statistiky AAPS

**AAPS** poskytuje základní statistiky pro sledování.

Většina hodnot vychází z [doporučení](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) ADA 2023.

Statistiky otevřete tak, že otevřete **nabídku** (☰) a vyberete **Statistiky**.

![Nabídka s položkou Statistiky](../images/Maintenance/statistics.png)

Obrazovka **Statistiky** má čtyři karty: **Inzulín**, **Čas v cíli**, **Glykémie** a **Cyklus**. Mezi kartami se přesunete klepnutím na kartu nebo přejetím prstem doleva či doprava.

(reviewing-tdd)=
### Karta Inzulín: celková denní dávka

Karta **Celková denní dávka** ukazuje jeden řádek za každý předchozí den (až jeden týden), pro který má **AAPS** data o inzulínu, potom jejich **Průměr** a nakonec dosavadní hodnotu za **Dnes**. Hned po instalaci **AAPS** se zobrazuje jen **Dnes**. Sloupce jsou:

- **Bazál**: jen bazál.
- **Bolus**: součet bolusů a SMB.
- **CDD celkem**: celková denní dávka inzulínu (**CDD**), součet bolusového a bazálního inzulínu podaného během dne.
- **Sacharidy**: zadané sacharidy a eSacharidy.

Sekce **CDD** se počítá při otevření stránky a výpočet trvá několik sekund. Klepnutím na **Přepočítat** ji spočítáte znovu.

![Statistiky: karta Inzulín s celkovou denní dávkou](../images/Maintenance/statistics2.png)

**CDD** je váš bolusový plus bazální inzulín za den. Někteří lékaři používají – hlavně u nových uživatelů pumpy – poměr bazálu a bolusu 50:50: celková základní bazální dávka (**TBB**, součet vašich bazálních dávek za 24 hodin) by pak měla být zhruba polovina CDD. Jiní dávají přednost TBB ve výši 32 % až 37 % CDD.

Jako většina orientačních pravidel má i toto jen omezenou skutečnou platnost. Váš diabetes se může lišit!

### Karta Čas v cíli

Čas v cíli (**TIR**): 70–180 mg/dl nebo 3,9–10 mmol/l.

Informace o **TIR** jsou k dispozici za 7 a 30 dní, podle toho, kolik dat je v databázi **AAPS**.

Statistiky času v úzkém cíli (TITR) 70–140 mg/dl nebo 3,9–7,8 mmol/l jsou k dispozici níže (obrazovka ukazuje tento rozsah jako 70–141).

**Cíle proberte se svým diabetologem**

Váš diabetes se může lišit. Všechny navržené cíle je třeba probrat s vaším diabetologem nebo lékařským týmem. Při správném použití mohou být statistiky AAPS účinným nástrojem pro sledování trendů __glykémie__ a vašeho pokroku.

![Statistiky](../images/Maintenance/statistics3.png)

Níže karta **Dexcom TIR** ukazuje podrobné statistiky **TIR** za 14 dní.

**SD**: směrodatná odchylka, [ukazatel](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) kolísání glykémie (nejvyšší = nejhorší).

HbA1c: odhad výsledného glykovaného hemoglobinu, vypočtený z průměru měření CGM. Je to orientační hodnota, která nemusí odpovídat HbA1c z krevních testů.

![Statistiky](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Karta Glykémie: ambulantní profil glukózy (AGP)

**Ambulantní profil glukózy** (**AGP**) ukazuje, jak se vaše glykémie obvykle mění během dne. Období zvolte tlačítky nahoře: **Dnes**, **24h**, **7d**, **30d** nebo **90d**.

- **Graf**: jeden den od půlnoci do půlnoci. Čára je **Medián** (polovina vašich hodnot v tu hodinu byla nižší, polovina vyšší). Kolem ní jeden pás obsahuje prostřední polovinu vašich hodnot (**25–75%**) a širší pás většinu z nich (**10–90%**). Úzký pás znamená, že je vaše glykémie v tu hodinu den ode dne podobná. Čárkované čáry označují vaši **Dolní značku**, 140 mg/dl (7,8 mmol/l) a vaši **Horní značku**.
- **Glykémický přehled**: čas strávený ve vašem rozsahu, v úzkém rozsahu (70–140 mg/dl nebo 3,9–7,8 mmol/l), nad vaším rozsahem a pod ním, potom **Průměr** a **Medián** vaší glykémie. Váš rozsah tvoří **Dolní značka** a **Horní značka** nastavené v [Rozsahu pro zobrazení](#Preferences-range-for-visualization).
- **eA1c** a **GMI**: dva odhady HbA1c vypočtené z vašich hodnot z CGM. Stejně jako HbA1c výše nemusí odpovídat vašim krevním testům HbA1c.
- **SD** (směrodatná odchylka) a **CV** (variační koeficient): jak moc vaše glykémie kolísá. Nižší hodnota znamená stabilnější glykémii.
- **Dnů**: kolik dní dat z CGM bylo použito.

![Statistiky: karta Glykémie s grafem AGP](../images/Maintenance/statistics_agp.png) ![Statistiky: Glykémický přehled a ukazatele glykémie](../images/Maintenance/statistics_agp2.png)

Pod AGP karta **Glukózový pentagon (CGP)** vykresluje pět ukazatelů vaší glykémie za posledních 14 dní jako pětiúhelník. Menší pětiúhelník znamená lepší kontrolu glykémie.

![Statistiky: Glukózový pentagon](../images/Maintenance/statistics_cgp.png)

### Karta Cyklus: Vzory CDD podle periody

**Vzory CDD podle periody** překrývají vaše denní součty inzulínu v 28denních cyklech, aby vám pomohly najít opakující se vzory. Každý cyklus je vykreslen jako čára (**Jednotlivé cykly**), spolu s jejich průměrem.

- **Surová CDD** / **Očištěná CDD**: zvolte celkovou denní dávku tak, jak byla podána, nebo CDD bez inzulínu na sacharidy.
- **Posun cyklu**: posune začátek cyklu (0 až 27 dní).

Jsou potřeba data alespoň za 56 dní (2 cykly). Při menším množství dat karta ukazuje **Nedostatek dat (potřeba alespoň 56 dní pro 2 cykly)**. Vzor se počítá, jen když otevřete kartu **Cyklus**, protože načítá data za 168 dní.

(aaps-screens-treatments)=
## Historie ošetření

Otevřete **nabídku** (☰) v levém horním rohu hlavní obrazovky a vyberte **Historie ošetření**. V tomto zobrazení můžete prohlížet a měnit historii následujících ošetření, každé na vlastní kartě (přejetím po řádku karet uvidíte všechny):

* Sacharidy a bolusy
* [Prodloužený bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Dočasný bazál
* [Dočasný cíl](../DailyLifeWithAaps/TempTargets.md)
* [Přepnutí profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Péče: poznámky a záznamy péče
* Režim smyčky: historie stavu smyčky
* Uživatelský záznam: další poznámky, které se neposílají do Nightscoutu

Na konci každého řádku malé ikony ukazují, odkud data pocházejí nebo kam byla odeslána:
* Ikona **Nightscout** (logo Nightscoutu): data pocházejí z Nightscoutu nebo do něj byla zaznamenána
* Ikona **Pumpa**: data pocházejí z historie pumpy (pumpa je zpracovala)
* Ikona **Koš**: záznam byl smazán (zobrazuje se jen tehdy, když zobrazíte smazané záznamy ikonou **oka** vpravo nahoře)

(screens-bolus-carbs)=
### Sacharidy a bolusy

![Sacharidy a bolusy](../images/TreatmentsView1.png)

Na této kartě můžete prohlížet záznamy bolusů a sacharidů. U každého bolusu (řádek **1**) je vedle množství inzulínu zobrazen zbývající IOB, který k němu patří. Původ bolusu může být:
* Jídlo (zadané ručně tlačítky Inzulín, Rychlý bolus nebo Bolusová kalkulačka)
* SMB, když používáte funkci SMB

Záznamy sacharidů (řádek **2**) jsou zobrazeny s množstvím v gramech.

Pokud jste pro výpočet dávky inzulínu použili [bolusovou kalkulačku](#aaps-screens-bolus-wizard), můžete stisknout text „Kalk“ na řádku bolusu a zobrazit podrobnosti, jak byl bolus vypočten.

Podle použité pumpy mohou být inzulín a sacharidy zobrazeny na jednom řádku, nebo na více řádcích: jeden pro podrobnosti výpočtu, jeden pro sacharidy, jeden pro samotný bolus.

Historii ošetření můžete použít k opravě chybně zadaných sacharidů (_tj._ když jste sacharidy nadhodnotili nebo podhodnotili). Existující záznam nelze upravit, musíte postupovat takto:

1. Zkontrolujte si a zapamatujte aktuální COB a IOB na hlavní obrazovce.
2. Podle pumpy mohou být sacharidy zobrazeny spolu s inzulínem na jednom řádku, nebo jako samostatný záznam (např. u Dana RS).
3. Odstraňte záznam s chybným množstvím sacharidů: stiskněte ikonu koše, vyberte řádky k odstranění a pak znovu stiskněte ikonu koše pro dokončení.
4. Znovu zkontrolujte COB na hlavní obrazovce a ujistěte se, že sacharidy byly opravdu odstraněny.
5. Totéž udělejte pro IOB, pokud je jen jeden řádek se sacharidy i inzulínem.

   → Pokud sacharidy nebyly odstraněny podle očekávání a přidáte další sacharidy, jak je zde popsáno (6.), bude COB příliš vysoký a to může vést k podání příliš velkého množství inzulínu.

6. Zadejte znovu správné množství sacharidů (**Ošetření → Sacharidy** ve spodní navigaci nebo tlačítko **Sacharidy** v [Rychlém spuštění](#quicklaunch)) a nezapomeňte nastavit správný čas události.
7. Pokud je jen jeden řádek se sacharidy i inzulínem, musíte zadat také množství inzulínu. Nezapomeňte nastavit správný čas události a po potvrzení nového záznamu zkontrolujte IOB na hlavní obrazovce.

### Dočasný bazál

![Dočasný bazál](../images/TreatmentsView2.png)

Zde se zobrazují **dočasné bazály** nastavené smyčkou. Pokud má záznam stále vliv na IOB, zobrazí se tato informace vedle dávky (řádek **1**). Může to být:
* Kladný IOB, pokud byl dočasný bazál vyšší než bazál nastavený v profilu
* Záporný IOB u nulového dočasného bazálu (jako na řádku **1**) nebo pokud byl dočasný bazál nižší než bazál nastavený v profilu

Smazání záznamů ovlivní jen vaše reporty v Nightscoutu a pravděpodobně zkreslí váš skutečný IOB – nedoporučuje se to.

Červené S na levé straně řádku znamená „Pozastavení“ (Suspend): nastane, když se bazál právě nepodává. To je normální situace například při výměně podu.

### Dočasný cíl

![Dočasný cíl](../images/TreatmentsView3.png)

Zde je vidět historie dočasných cílů.

### Přepnutí profilu

![Přepnutí profilu](../images/TreatmentsView4.png)

Zde je vidět historie přepnutí profilu. Při každém přepnutí profilu můžete vidět více záznamů: řádek **1**, uložený v NS i v historii pumpy, odpovídá skutečnému přepnutí. Řádek **2**, uložený v Nightscoutu, ale ne v historii pumpy, odpovídá žádosti uživatele o přepnutí profilu.

Smazání záznamů ovlivní jen vaše reporty v Nightscoutu a nikdy ve skutečnosti nezmění aktuální profil.

Tlačítkem **Klonovat** na řádku **2** můžete vytvořit kopii **Přepnutí profilu**. Více informací najdete v části [Váš profil AAPS > Správa profilů](#your-aaps-profile-clone-profile-switch).

### Péče

![Péče](../images/TreatmentsView5.png)

Tato karta ukazuje všechny poznámky a záznamy péče zaznamenané v Nightscoutu.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Režim smyčky

![Režim smyčky](../images/TreatmentsView6.png)

Tato karta ukazuje historii změn [stavu smyčky](#AapsScreens-loop-status): otevřená, uzavřená, LGS, pozastavení, odpojení.

### Uživatelský záznam

![Uživatelský záznam](../images/screens/treatments_user_entry.png)

Tato karta uvádí akce, které v **AAPS** provedl uživatel nebo **Automatizace** (změny režimu smyčky, přepnutí profilu, ošetření, exporty nastavení...). Tyto záznamy se neposílají do Nightscoutu.

------

## Jaký je rozdíl mezi Nightscoutem a Tidepoolem?

Nightscout umožňuje uživateli ukládat data **AAPS** a nabízí širokou škálu [nástrojů pro reporty](https://nightscout.github.io/nightscout/reports/).

Tidepool naproti tomu umožňuje uživateli [prohlížet svá data](https://www.tidepool.org/viewing-your-data) a nabízí [snadné sdílení s vaším lékařským týmem](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).