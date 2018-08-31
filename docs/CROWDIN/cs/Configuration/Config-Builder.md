# Konfigurace

Konfigurace (Conf) je záložka, kde si zapínáte, nebo vypínáte jednotlivé moduly. Boxy (čtverečky) po levé straně vybíráte, které chcete použít, boxy po pravé straně vybírate, které z nich budou v záložkách v AndroidAPS. Tam kde je dostupné podrobnější nastavení modulu, můžete ťuknout na ozubené kolečko abyste se dostali do podrobnějšího nastavení bez vstupu do Nastavení.

## Profil

Vyberte variantu bazálního profilu, který chcete použít:

* **NS profil** používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). Můžete použít Přepnout profil pro změnu profilu, který je aktivní. Ten bude zapsán do pumpy v případě výpadku AndroidAPS.
* **Jednoduchý profil** profil s jedním časovým blokem (to znamená žádné změny bazálu během dne)
* **Local Profile** uses the basal profile manually entered in phone. See [[Profiles]] page for more setup information.

## Inzulín

Vyberte typ inzulínové křivky, kterou používáte. Základní možnosti AndroidAPS jsou bilineární "rychle působící inzulin" pro inzulín s DIA méně než 5 hodin, nebo "Rychle působící inzulín s prodlouženým účinkem" pro inzulín s DIA větší než 5 hodin. Tyto křivky se budou lišit pouze na základě trvání DIA. Oref možnosti "Rapid-Acting Oref', Ultra-Rapid Oref" a 'Free-Peak Oref' jsou exponenciální a další informace jsou uvedeny v [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), křivky se budou lišit na základě DIA a času k dosažení špičky. Budete pro ně muset zadat další nastavení. Křivky grafů inzulínu můžete zobrazit na kartě inzulin (Ins) a pomohou vám porozumět, která křivka vám bude vyhovovat.

## Zdroj glykémií

Vyberte jaký zdroj glykémií používáte. Viz stránka [[BG Source]] pro další informace o nastavení.

## Pumpy

Vyberte kterou pumpu používáte. Ti, kteří chtějí používat otevřenou smyčku musí vybrat "Virtuální pumpa". Viz stránka [[DanaR Insulin Pump]], [[DanaRS Insulin Pump]] nebo [[Accu Chek Combo Pump]] pro další informace o nastavení.

## Detekce citlivosti

Vyberte variantu detekce citlivosti. Budou analyzována starší data a provedeny úpravy, pokud se zjistí že reagujete s vyšší citlivostí (nebo naopak, s nižší citlivostí) na inzulín než je obvyklé. Podrobnosti o algoritmu citlivosti Oref0 jsou k přečtení v [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). Svou citlivost můžete vidět na hlavní obrazovce po vybrání SEN jakožto bílou linku. Mějte na vědomí, že pokud chcete používat detekci citlivosti/autocitlivosti, musíte mít [cíl 6](../Usage/Objectives).

## APS

Vyberte buď možnost OpenAPS MA (meal assist - pomoc při jídle) nebo OpenAPS AMA (advanced meal assist - pokročilá pomoc při jídle). Více podrobností o OpenAPS AMA naleznete v [ OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama); jednoduše řečeno, pokud si dávate k jídlu bolus, systém může rychleji kompenzovat rychle rostoucí glykemii POKUD správně zadáte sacharidy. Detaily vybraného algoritmu můžete zobrazit na kartě OpenAPS (OAPS). Mějte na vědomí, že pokud chcete používat OpenAPS AMA, musíte mít [cíl 7](../Usage/Objectives).

## Smyčka

Tuto položku musíte povolit, pokud chcete používat otevřenou nebo uzavřenou smyčku. V záložce Smyčka můžete vidět požadavky a jejich zpracování.

## Omezení

Pokud se podíváte na záložku Cíle, můžete vidět informace o tom, jak jste daleko a co ještě musíte splnit. Viz stránka [[Objectives]] pro další informace.

## Ošetření

Pokud se podíváte na záložku Ošetření, můžete vidět ošetření které byly nahrány na Nightscout. Chcete-li upravit nebo odstranit záznam (například jste jedli méně sacharidů než jste očekávali), vyberte "Odstranit" a zadejte novou hodnotu (případně změňte čas) prostřednictvím karty Péče.

## Obecné

* **Akce** umožňuje přepnutí profilu (Viz stránka [[Profiles]] pro další informace o nastavení), změnu dočasného cíle, a pro ty kteří využívají pumpu DanaR/RS nebo Combo nastavení TBR nebo plnění kanyly.
* **Péče** umožňuje zaznamenávat všechny konkrétní položky týkající se péče a zobrazit stáří senzoru, zásobníku inzulínu, kanyly a baterie v pumpě v záložce Péče.
* **SMS komunikátor** umožňuje vzdálené ovládání některých funkcí AndroidAPS prostřednictvím SMS, viz [[SMS Commands]] pro další informace o nastavení.
* **Jídlo** umožňuje prohlížet a používat databázi potravin uloženou na Nightscoutu, viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pro další informace o nastavení nebo http://[adresavašehoprofilu]/food pro přístup k databázi.
* **Wear** allows you to view and control AndroidAPS from the Android Wear watch, see [[watchfaces]] for more setup information.
* **xDrip Statusline (watch)** Display loop information on your xDrip+ watchface
* **Ongoing Notification** displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.
* **NS Client** Setup sync of your AndroidAPS data with Nightscout