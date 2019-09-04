# Konfigurace

Konfigurace (Conf) je záložka, kde si zapínáte, nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První nastavení**: od AAPS v 2.0 Vám s úvodním nastavením aplikace pomůže Průvodce nastavením. Stiskněte 3 tečky v pravé horní části obrazovky (F), a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder.png)

## Profil

Vyberte bazální profil, který chcete použít. Další informace viz stránku [Profily](../Usage/Profiles.md).

### Místní profil (doporučeno)

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy – v profilu 1. Tento profile je doporučen, protože nevyžaduje připojení k internetu.

Advantage:

* no internet connection neccessary to change profile settings
* profile changes can be made directly on the phone

Disadvantage:

* only one profile

### NS profil

NS profil používá profily, které jste uložili na webu Nightscout (https://[yournightscoutsiteaddress]/profile). K přepnutí profilu, který bude aktivní, můžete použít tlačítko [Přepnout profil](../Usage/Profiles.md). Tato akce zapíše profil do pumpy, kde bude použit v případě selhání AndroidAPS. Takto si v Nightscoutu můžete vytvořit více profilů (např.. práce, doma, sport, prázdniny atd.). Je-li váš mobil online, budou profily po stisknutí tlačítka „Uložit“ odeslány do AAPS. Pokud nemáte připojení k internetu nebo k Nightscoutu, budou profily uloženy v AAPS, jakmile se synchronizují.

Vybráním tlačítka **Přepnout profil** se aktivuje vybraný profil z Nightscoutu. V horní části hlavní obrazovky AAPS stiskněte a podržte tlačítko s názvem aktuálního profilu (prostřední šedé pole mezi polem „Otevřená/Uzavřená smyčka“ a polem s hodnotami cíle) > Přepnutí profilu > Vybrat profil > OK. Po změně profilu zapíše AAPS vybraný profil do pumpy, aby bylo možné i v případě nouze pumpu nadále používat.

Advantage:

* multiple profiles
* easy to edit via PC or tablet

Disadvantage:

* no local changes to profile settings
* profile cannot be changed directly on the phone

### Jednoduchý profil

Jednoduchý profil s jediným časovým blokem pro DIA, IC, ISF, základní bazál a cílové rozmezí (tj. žádné změny základního bazálu během dne). Nejpravděpodobněji bude použit pro testovací účely, pokud nemáte v průběhu 24 hodin stejné parametry. Jakmile bude vybrán „Jednoduchý profil“, objeví se v AAPS nová záložka, kde budete moci zadat data profilu.

## Inzulín

Vyberte typ inzulínové křivky, kterou používáte. Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). Křivky se liší podle DIA a času max. účinnosti inzulínu. Hodnota DIA by vždy měla být nejméně 5. Další informace se můžete dočíst v části Výběr inzulínového profilu na [této](../Getting-Started/Screenshots.md) stránce. Pro „Rychle působící“ a „Ultra rychlý“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Čas maximální účinnosti je fixní. „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i čas maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. Graf inzulínových křivek vám pomůže porozumět různým křivkám. Zaškrtnutím políčka vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

### Rychle působící Oref

* recommended for Humalog, Novolog and Novorapid
* DIA = at least 5.0h
* Max. peak = 75 minutes after injection

### Ultra rychlý Oref

* recommended for FIASP
* DIA = at least 5.0h
* Max. peak = 55 minutes after injection

Pro velké množství lidí nemá po 3–4 hodinách FIASP prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotky. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.

![Konfigurace Ultra-rychlý Oref](../images/ConfBuild_UltraRapidOref.png)

### Volitelný vrchol Oref

V profilu „Volitelný vrchol 0ref“ můžete ručně zadat čas max. účinku inzulínu. Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastavena na 5 h.

Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

## Zdroj glykémií

Vyberte, který zdroj glykémií používáte – další informace k nastavení viz [Zdroj glykémií](BG-Source.rst).

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom G5 app (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want tu use xDrip+ alarms. ![Config Builder BG source](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pumpy

Vyberte pumpu, kterou používáte.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Korean (for domestic DanaR pump)
* DanaRv2 (DanaR pump with firmware upgrade)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* MDI (receive AAPS suggestions for your multiple daily injections thereapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

Pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.

## Detekce citlivosti

Vyberte typ detekce citlivosti. Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Podrobnosti o citlivosti Oref0 algoritmu se lze dočíst v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Berte na vědomí, že pokud chcete používat detekci citlivosti/autosens, musíte být v [cíli 6](../Usage/Objectives).

### Nastavení absorpce sacharidů

Pokud používáte Oref1 s funkcí SMB, musíte změnit **min_5m_carbimpact** na 8. Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. V situacích, kdy absorpci sacharidů nelze počítat dynamicky na základě reakcí vaší glykémie, je použita tato výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu lze prohlížet na kartě OpenAPS (OAPS).

* OpenAPS MA (meal assist, state of the algorithm in 2016)
* OpenAPS AMA (advanced meal assist, state of the algorithm in 2016)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 8](../Usage/Objectives.md) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Smyčka

Rozhodněte se, zda chcete systému AAPS povolit, aby automaticky upravoval nastavení, nebo pouze vydával doporučení.

### Otevřená smyčka

AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a předkládá návrhy, jak v případě potřeby upravit vaši léčbu. Návrhy nebudou provedeny automaticky (tak jako v uzavřené smyčce), ale mohou být zadány ručně přímo do pumpy nebo tlačítkem z aplikace – pokud používáte podporovanou pumpu (DanaR/RS nebo Accu-check Combo). Tato volba slouží k tomu, abyste poznali, jak vlastně AndroidAPS funguje, nebo používáte-li nepodporovanou pumpu.

### Uzavřená smyčka

AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a podle potřeby automaticky upravuje léčbu (tj. bez vašeho dalšího zásahu) s cílem dosáhnout nastaveného cílového pásma nebo hodnoty (podání bolusu, dočasné bazální dávky, vypnutí podávání inzulínu, aby se předešlo hypoglykémii atd.). Uzavřená smyčka je zabezpečena velkým množstvím bezpečnostních limitů, které lze nastavit individuálně. Uzavřená smyčka je k dispozici pouze v případě, že máte splněn [4. cíl](../Usage/Objectives.md) nebo vyšší a používáte podporovanou pumpu.

## Cíle (výukový program)

AndroidAPS má řadu cílů, které musíte splnit krok za krokem. Měly by vás bezpečně provést nastavením uzavřené smyčky. Postupným splněním cílů je zajištěno, že přesně porozumíte tomu, jak systém pracuje. Jedině tak můžete svému systému plně důvěřovat.

Doporučujeme vám pravidelně exportovat veškerá nastavení (včetně pokroku při plnění cílů). V případě, že v budoucnosti budete muset svůj smartphone nahradit (nové zařízení, poškození displeje atd.), můžete tato nastavení jednoduše importovat.

Více informací naleznete na stránce [Cíle](../Usage/Objectives.md).

## Ošetření

Na záložce Ošetření můžete vidět ošetření, která byla nahrána do Nightscoutu. Chcete-li upravit nebo odstranit záznam (například když jste snědli méně sacharidů, než jste očekávali), vyberte „Odstranit“ a zadejte novou hodnotu (případně změňte čas) prostřednictvím karty Péče.

## Obecné

### Přehled

Zobrazuje aktuální stav smyčky a tlačítka pro přístup k běžným akcím (další podrobnosti viz část [Domácí obrazovka](../Getting-Started/Screenshots.md)). Kliknutím na ozubené kolo se dostanete do nastavení.

#### Nechat obrazovku zapnutou

Tato volba zabrání tomu, aby systém Android vypnul obrazovku. To je vhodné například pro prezentace. Při tomto nastavení ale dochází k velmi rychlému vybíjení baterie. Proto je doporučeno připojit smartphone k napájecímu kabelu.

#### Tlačítka

Určuje, která tlačítka budou zobrazena na domácí obrazovce.

* Ošetření
* Kalkulačka
* Inzulín
* Carbs
* CGM (opens xDrip+)
* Calibration

Kromě toho můžete nastavit zkratky pro inzulín a sacharidy a rozhodnout se, zda bude v dialogu pro přidání ošetření i poznámka.

#### Nastavení Rychlého bolusu

Vytvořte si tlačítko pro určité standardní jídlo (sacharidy a parametry pro výpočet bolusu), které se zobrazí na domácí obrazovce. Můžete ho použít pro standardní jídlo, které konzumujete pravidelně. U každého jídla (tlačítka) lze definovat i čas, a tak budete mít na domácí obrazovce k dispozici vhodné tlačítko pro dané jídlo odpovídající denní době.

Poznámka: Tlačítko nebude viditelné, pokud je aktuální čas mimo časový interval definovaný v nastavení nebo máte-li dostatek IOB k pokrytí sacharidů definovaných kalkulačkou.

![Tlačítko průvodce nastavením](../images/ConfBuild_QuickWizard.png)

#### Pokročilá nastavení

Povolit v kalkulačce funkci superbolus. Používejte se zvýšenou opatrností a nenastavujte, dokud jste si nenastudovali, co to vlastně dělá. V podstatě jde o to, že bazál za následující 2 hodiny je přidán do bolusu a současně je aktivován nulový dočasný bazál po dobu 2 h. **Funkce smyčky AAPS budou deaktivovány – používat opatrně! Pokud používáte funkci SMB, funkce smyčky AAPS budou deaktivovány dle vašeho nastavení v části [„Maximální počet minut bazálu, ke kterým se limituje SMB“](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), pokud funkci SMB nevyužíváte, funkce smyčky budou vypnuty na dvě hodiny.** Podorbnosti o superbolusu najdete [zde](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

Tlačítka pro rychlý přístup k běžně používaným funkcím:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. bazál (basal rate)
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (DanaR/RS or Combo pump only)
* History browser
* TDD (Total daily dose = bolus + basal per day)

Někteří lékaři doporučují – hlavně pro nové uživatele pumpy – poměr bazál-bolus 50:50. Poměr se proto vypočítá jako TDD / 2 * TBB (celková denní dávka = součet hodnot bazálních dávek za 24 hodin). Jiní dávají přednost hodnotám, kdy TBB tvoří 32 % až 37 % z TDD. Stejně jako podobná pravidla má i toto v reálném životě omezenou platnost. Poznámka: Váš diabetes může být jiný!

![Záložka Akce](../images/ConfBuild_ConfBuild_Actions.png)

### Portál nastavení péče

V části Péče je možné přidávat položky ošetření a zobrazit podrobnosti týkající se senzoru, inzulínu, kanyly nebo baterie pumpy.

Poznámka: Při přidání položky do části Péče (např. jídlo, bolus, korekční bolus apod.) nebude podán **žádný inzulín**

Sacharidy zadané v části Péče (např. přídavek sacharidů) budou započítány do COB.

![Záložka Ošetření](../images/ConfBuild_CarePortal.png)

### SMS komunikátor

Umožňuje vzdálené ovládání některých funkcí AndroidAPS prostřednictvím SMS, viz [SMS příkazy](../Usage/SMS-Commands.md), kde najdete další informace o nastavení.

### Jídlo

Zobrazuje jídla přidaná do databáze Nightscoutu. Více informací viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Poznámka: Tyto záznamy nelze použít v Kalkulačce v AndroidAPS. (Pouze je zobrazit)

### Wear

Sledování a ovládání AAPS prostřednictvím hodinek s Wear OS (viz [stránka Watchfaces](../Configuration/Watchfaces.md)). Chcete-li nastavit parametry pro výpočet bolusu na hodinkách (tj. 15min trend, COB…), klikněte na nastavení (ozubené kolo).

Pokud chcete poslat například bolus z hodinek, potřebujete v „Nastavení hodinek“ aktivovat volbu „Ovládání z hodinek“.

![Nastavení hodinek](../images/ConfBuild_Wear.png)

Prostřednictvím záložky Wear nebo hamburger menu (levý horní roh obrazovky, když není záložka zobrazena) můžete

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### Stavová řádka xDrip (hodinky)

Zobrazí na displeji hodinek (xDrip+ watchface) stav smyčky (pokud nepoužíváte AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md))

### Oznámení v notifikační liště

V telefonu přidá do notifikační lišty nebo na zamykací obrazovku informace o aktuální glykémii, trendu, aktivním dočasném bazálu v %, bazálu v U/h, bazálním profilu, IOB a rozdělení bolusu a bazálu v IOB.

![Widget AAPS](../images/ConfBuild_Widget.png)

### NS Client

Nastavení synchronizace dat AndroidAPS s Nightscoutem.

Je-li aktivována možnost **Zaznamenat spuštění aplikace do NS**, bude každý restart AndroidAPS zobrazen v Nightscoutu. Může to být praktické v případě problémů s aplikací (např. když není aplikace vyjmuta z optimalizace baterie telefonu). Na druhou stranu to může zahltit graf Nightscoutu spoustou položek.

#### Nastavení alarmů

Aktivace/deaktivace alarmů v AndroidAPS

![Nastavení alarmů](../images/ConfBuild_NSClient_Alarms.png)

#### Nastavení připojení

Offline smyčka, zakázat roaming…

Chcete-li používat pouze konkrétní síť Wi-Fi, můžete zadat její **WiFi SSID**. Můžete vložit více SSID oddělených středníkem. Chcete-li smazat všechna SSID, nechejte pole prázdné.

![Nastavení připojení k Nightscoutu](../images/ConfBuild_ConnectionSettings.png)

#### Pokročilá nastavení

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement fro error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Rozšířená nastavení Nightscoutu](../images/ConfBuild_NSClient_Advanced.png)

### Údržba

E-mail a počet logů, které budou odeslány. Obvykle není třeba tyto hodnoty měnit.

### Konfigurátor

Místo hamburger menu použijte záložku Konfigurace.