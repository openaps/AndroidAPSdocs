# Konfigurace

Konfigurace (Conf) je záložka, kde si zapínáte, nebo vypínáte jednotlivé moduly. Boxy (čtverečky) po levé straně vybíráte, které chcete použít, boxy po pravé straně vybírate, které z nich budou v záložkách v AndroidAPS. Tam kde je dostupné podrobnější nastavení modulu, můžete ťuknout na ozubené kolečko abyste se dostali do podrobnějšího nastavení bez vstupu do Nastavení.

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky a vyberte "Průvodce nastavením".

## Profil

Vyberte variantu bazálního profilu, který chcete použít:

* **NS profil** používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). Můžete použít Přepnout profil pro změnu profilu, který je aktivní. Ten bude zapsán do pumpy v případě výpadku AndroidAPS.
* **Jednoduchý profil** profil s jedním časovým blokem (to znamená žádné změny bazálu během dne)
* **Místní profil** používá bazální profil zapsaný přímo do telefonu. See [Profiles](../Usage/Profiles.md) page for more setup information.

## Inzulín

Vyberte typ inzulínové křivky, kterou používáte. Základní možnosti AndroidAPS jsou bilineární "rychle působící inzulin" pro inzulín s DIA méně než 5 hodin, nebo "Rychle působící inzulín s prodlouženým účinkem" pro inzulín s DIA větší než 5 hodin. Tyto křivky se budou lišit pouze na základě trvání DIA. Oref možnosti "Rapid-Acting Oref', Ultra-Rapid Oref" a 'Free-Peak Oref' jsou exponenciální a další informace jsou uvedeny v [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), křivky se budou lišit na základě DIA a času k dosažení špičky. Budete pro ně muset zadat další nastavení. Křivky grafů inzulínu můžete zobrazit na kartě inzulin (Ins) a pomohou vám porozumět, která křivka vám bude vyhovovat.

## Zdroj glykémií

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

## Pumpy

Vyberte kterou pumpu používáte. Ti, kteří chtějí používat otevřenou smyčku, musí vybrat "Virtuální pumpa". See [DanaR Insulin Pump](DanaR-Insulin-Pump.md), [DanaRS Insulin Pump](DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) pages for more setup information.

## Detekce citlivosti

Vyberte variantu detekce citlivosti. Budou analyzována starší data a provedeny úpravy, pokud se zjistí že reagujete s vyšší citlivostí (nebo naopak, s nižší citlivostí) na inzulín než je obvyklé. Podrobnosti o algoritmu citlivosti Oref0 jsou k přečtení v [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). Svou citlivost můžete vidět na hlavní obrazovce po vybrání SEN jakožto bílou linku. Mějte na vědomí, že pokud chcete používat detekci citlivosti/autocitlivosti, musíte mít [cíl 6](../Usage/Objectives).

## APS

Vyberte buď možnost OpenAPS MA (meal assist - pomoc při jídle) nebo OpenAPS AMA (advanced meal assist - pokročilá pomoc při jídle). Více podrobností o OpenAPS AMA naleznete v [ OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama); jednoduše řečeno, pokud si dávate k jídlu bolus, systém může rychleji kompenzovat rychle rostoucí glykemii POKUD správně zadáte sacharidy. Detaily vybraného algoritmu můžete zobrazit na kartě OpenAPS (OAPS). Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.

## Smyčka

Tuto položku musíte povolit, pokud chcete používat otevřenou nebo uzavřenou smyčku. V záložce Smyčka můžete vidět požadavky a jejich zpracování.

## Omezení

Pokud se podíváte na záložku Cíle, můžete vidět informace o tom, jak jste daleko a co ještě musíte splnit. See [Objectives](../Usage/Objectives.md) page for more information.

## Ošetření

Pokud se podíváte na záložku Ošetření, můžete vidět ošetření které byly nahrány na Nightscout. Chcete-li upravit nebo odstranit záznam (například jste jedli méně sacharidů než jste očekávali), vyberte "Odstranit" a zadejte novou hodnotu (případně změňte čas) prostřednictvím karty Péče.

## Obecné

* **Actions** allows you to make Profiles Switches (see [Profiles page](../Usage/Profiles.md) for more setup information), Temporary Targets, and for those using DanaR/RS or Combo pump to set a manual TBR or prime the canula.
* **Péče** umožňuje zaznamenávat všechny konkrétní položky týkající se péče a zobrazit stáří senzoru, zásobníku inzulínu, kanyly a baterie v pumpě v záložce Péče.
* **SMS Communicator** allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.
* **Jídlo** umožňuje prohlížet a používat databázi potravin uloženou na Nightscoutu, viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pro další informace o nastavení nebo http://[adresavašehoprofilu]/food pro přístup k databázi.
* **Wear** allows you to view and control AndroidAPS from the Android Wear watch, see [watchfaces](Watchfaces.md) for more setup information.
* **Statusový řádek xDripu (hodinky)** Zobrazování informací o smyčce v xDrip+ watchface
* **Průběžné oznámení** zobrazí souhrnné informace o aktuální BG, delta, aktivní TBR %, aktivní bazálu u/hr, profil, IOB a rozdělený na bolusové IOB a bazální IOB - v telefonu po stažení lišty nebo zamykací obrazovce.
* **NS Client** Nastavení synchronizace dat AndroidAPS s Nightscout