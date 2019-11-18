# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul, který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder.png)

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak otevřít odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH.png)

## Profil

Vyberte bazální profil, který chcete použít. Další informace viz stránka [Profily](../Usage/Profiles.md).

### Místní profil (doporučeno)

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy – v profilu 1. Tento profil je doporučen, protože nevyžaduje připojení k internetu.

Výhody:

* ke změně nastavení profilu nepotřebujete připojení k internetu
* změny profilu lze provést přímo na telefonu

Nevýhody:

* pouze jeden profil

### NS profil

NS profil používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). K přepnutí profilu, který bude aktivní, můžete použít tlačítko [Přepnout profil](../Usage/Profiles.md). Akce zapíše profil do pumpy, kde bude použit v případě selhání AndroidAPS. Takto si v Nightscoutu můžete vytvořit více profilů (např.. práce, doma, sport, prázdniny atd.). Je-li Váš mobil online, budou profily po stisknutí tlačítka „Uložit“ odeslány do AAPS. Pokud nemáte připojení k internetu nebo k Nightscoutu, budou profily uloženy pouze v AAPS, a to do té doby, dokud nebudou synchronizované.

Vybráním tlačítka **Přepnout profil** se aktivuje vybraný profil z Nightscoutu. V horní části hlavní obrazovky AAPS stiskněte a podržte tlačítko s názvem aktuálního profilu (prostřední šedé pole mezi polem „Otevřená/Uzavřená smyčka“ a polem s hodnotami cíle) > Přepnutí profilu > Vybrat profil > OK. Po změně profilu zapíše AAPS vybraný profil do pumpy, aby bylo možné i v případě nouze pumpu nadále používat.

Výhody:

* více profilů
* snadná úprava pomocí PC nebo tabletu

Nevýhody:

* nelze provádět místní změny v nastavení profilu
* změny profilu nelze provést přímo na telefonu

### Jednoduchý profil

Jednoduchý profil s jediným časovým blokem pro DIA, IC, ISF, základní bazál a cílové rozmezí (tj. žádné změny základního bazálu během dne). Nejpravděpodobněji bude použit pro testovací účely, pokud nemáte v průběhu 24 hodin stejné parametry. Jakmile bude vybrán „Jednoduchý profil“, objeví se v AAPS nová záložka, kde budete moci zadat data profilu.

## Inzulín

Vyberte typ inzulínové křivky, kterou používáte. Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). Křivky se liší podle DIA a času max. účinnosti inzulínu.

The DIA is not the same for each person. That's why you have to test it for yourself. But it must always be at least 5 hours. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

Pro „Rychle působící“ a „Ultra rychlý“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Doba maximální účinnosti je fixní. „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. Po zaškrtnutí čtverečku vedle dané položky se tato položka zobrazí jako záložka. Další možnost jejich zobrazení je přes hamburgerové menu.

### Rychle působící Oref

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. peak = 75 minutes after injection (fixed, not adjustable)

### Ultra rychlý Oref

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. peak = 55 minutes after injection (fixed, not adjustable)

Pro velké množství lidí nemá po 3–4 hodinách FIASP prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotek. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.

![Konfigurace Ultra-rychlý Oref](../images/ConfBuild_UltraRapidOref.png)

### Volitelný vrchol Oref

V profilu „Volitelný vrchol 0ref“ můžete ručně zadat dobu max. účinku inzulínu. Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastavena na 5 h.

Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

## Zdroj glykémií

Vyberte, který zdroj glykémií používáte – další informace k nastavení viz [Zdroj glykémií](BG-Source.rst).

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glykémie z NSClient
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Aplikace Dexcom G (upravená)](https://github.com/dexcomapp/dexcomapp/) – chcete-li používat alarmy xDrip+, vyberte v nastavení „Odesílat glykémie do xDrip+“.
    
    ![Konfigurace zdroje glykémie](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pumpa

Vyberte pumpu, kterou používáte.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* DanaR v2 (DanaR s upgradovaným firmwarem)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Check Combo](Accu-Chek-Combo-Pump.md) (vyžaduje nainstalovanou aplikaci Ruffy)
* MDI (AAPS poskytuje návrhy pro aplikaci inzulínu pomocí inzulínových per)
* Virtuální pumpa (otevřená smyčka pro pumpu, pro kterou zatím neexistuje ovladač – AAPS nabízí pouze návrhy)

Pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.

## Detekce citlivosti

Vyberte variantu detekce citlivosti. Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Podrobnosti o algoritmu citlivosti Oref0 jsou k dispozici v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to use Sensitivity Detection/autosens.

### Nastavení absorpce sacharidů

Pokud používáte Oref1 s SMB, musíte změnit **min_5m_carbimpact** na 8. Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. V situacích, kdy absorpci sacharidů nelze počítat dynamicky na základě reakcí vaší glykémie, je použita tato výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu lze prohlížet na kartě OpenAPS (OAPS).

* OpenAPS MA (meal assist, stav algoritmu v roce 2016)
* OpenAPS AMA (advanced meal assist, stav algoritmu v roce 2016)  
    Další podrobnosti o OpenAPS AMA najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Smyčka

Rozhodněte se, zda chcete AAPS povolit automatické nastavování nebo pouze vydávat doporučení.

### Otevřená smyčka

AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a předkládá návrhy, jak v případě potřeby upravit vaši léčbu. Návrhy nebudou provedeny automaticky (tak jako v uzavřené smyčce), ale mohou být zadány ručně přímo do pumpy nebo tlačítkem z aplikace – pokud používáte podporovanou pumpu (DanaR/RS nebo Accu-check Combo). Tato možnost slouží k tomu, abyste poznali, jak vlastně AndroidAPS funguje, nebo pro případ, že používáte nepodporovanou pumpu.

### Uzavřená smyčka

AAPS průběžně vyhodnocuje všechny dostupné údaje (IOB, COB, glykémie…) a podle potřeby automaticky upravuje léčbu (tj. bez dalšího Vašeho zásahu) s cílem dosáhnout nastaveného cílového pásma nebo hodnoty (podání bolusu, dočasné bazální dávky, vypnutí podávání inzulínu, aby se předešlo hypoglykémii atd.). Uzavřená smyčka je zabezpečena velkým množstvím bezpečnostních limitů, které lze nastavit individuálně. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Cíle (výukový program)

AndroidAPS má řadu cílů, které musíte splnit krok za krokem. Měly by vás bezpečně provést nastavením uzavřené smyčky. Postupným splněním cílů je zajištěno, že přesně porozumíte tomu, jak systém pracuje. Jedině touto cestou můžete svému systému plně důvěřovat.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. V případě, že v budoucnosti budete muset svůj smartphone nahradit (nové zařízení, poškození displeje atd.), můžete tato nastavení jednoduše importovat.

Více informací naleznete na stránce [Cíle](../Usage/Objectives.rst).

## Ošetření

Na záložce Ošetření můžete vidět ošetření, která byla nahrána do Nightscoutu. Chcete-li upravit nebo odstranit záznam (například když jste snědli méně sacharidů, než jste očekávali), vyberte „Odstranit“ a zadejte novou hodnotu (případně změňte čas) prostřednictvím karty Péče.

## Obecné

### Přehled

Zobrazí aktuální stav smyčky a tlačítko pro přístup k běžným akcím (další podrobnosti viz část [Domácí obrazovka](../Getting-Started/Screenshots.md)). Kliknutím na ozubené kolo se dostanete do nastavení.

#### Nechat obrazovku zapnutou

Tato volba zabrání Androidu vypnout obrazovku. To je velmi vhodné například pro prezentace. Při tomto nastavení ale dochází k velmi rychlému vybíjení baterie. Proto je doporučeno připojit smartphone k napájecímu kabelu.

#### Tlačítka

Určuje, která tlačítka budou zobrazena na domácí obrazovce.

* Ošetření
* Kalkulačka
* Inzulín
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Kromě toho můžete nastavit zkratky pro inzulín a sacharidy a rozhodnout se, zda bude v dialogu pro přidání ošetření i poznámka.

#### Nastavení Rychlého bolusu

Vytvořte si tlačítko pro určité standardní jídlo (sacharidy a parametry pro výpočet bolusu), které se zobrazí na domácí obrazovce. Můžete ho použít pro standardní jídlo, které konzumujete pravidelně. U každého jídla (tlačítka) lze definovat i čas, a tak budete mít na domácí obrazovce k dispozici vhodné tlačítko pro dané jídlo odpovídající denní době.

Poznámka: tlačítko nebude viditelné, pokud je aktuální čas mimo interval definovaný v nastavení nebo pokud máte dostatečný IOB k pokrytí sacharidů definovaných kalkulačkou.

![Tlačítko průvodce nastavení](../images/ConfBuild_QuickWizard.png)

#### Pokročilá nastavení

Povolit v kalkulačce funkci superbolus. Používejte se zvýšenou opatrností a nenastavujte, dokud jste si nenastudovali, co to vlastně dělá. V podstatě je bazál za následující 2 hodiny přidán do bolusu a po dobu těchto 2 h je nastaven nulový dočasný bazál. **Funkce smyčky AAPS budou deaktivovány – používat opatrně! Pokud používáte funkci SMB, funkce smyčky AAPS budou deaktivovány dle vašeho nastavení v části [„Maximální počet minut bazálu, ke kterým se limituje SMB“](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), pokud funkci SMB nevyužíváte, funkce smyčky budou vypnuty na dvě hodiny.** Podorbnosti o superbolusu najdete [zde](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

Tlačítka k běžně používaným úkonům:

* Přepnutí profilu (více informací viz [Stránka profily](../Usage/Profiles.md))
* Dočasné cíle
* Nastavit / zrušit dočasný bazál
* Prodloužený bolus (pouze DanaR/RS nebo Combo)
* Plnění/Doplňování (Pouze DanaR/RS nebo Combo)
* Prohlížeč historie
* CDD (Celková denní dávka = bolusy + bazály za celý den)

Někteří lékaři doporučují – hlavně pro nové uživatele pumpy – poměr bazál-bolus 50:50. Poměr se proto vypočítá jako TDD / 2 * TBB (celková bazální dávka = součet hodnot bazálních dávek za 24 hodin). Jiní dávají přednost hodnotám, kdy TBB tvoří 32 % až 37 % z TDD. Stejně jako podobná pravidla má i toto v reálném životě omezenou platnost. Poznámka: Váš diabetes může být jiný!

![Záložka akce](../images/ConfBuild_ConfBuild_Actions.png)

### Portál nastavení péče

V části Péče je možné přidávat položky ošetření a zobrazit podrobnosti týkající se senzoru, inzulínu, kanyly nebo baterie pumpy.

Poznámka: při přidání položky do části Péče (např. jídlo, bolus, korekční bolus apod.) nebude podán **žádný inzulín**

Sacharidy zadané v části Péče (např. přídavek sacharidů) budou započítány do COB.

![Záložka Ošetření](../images/ConfBuild_CarePortal.png)

### SMS komunikátor

**SMS komunikátor** umožňuje vzdálené ovládání některých funkcí AndroidAPS prostřednictvím SMS, viz [SMS příkazy](../Children/SMS-Commands.rst), kde najdete další informace o nastavení.

### Jídlo

Zobrazuje jídla přidaná do databáze Nightscoutu. Více informací viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Poznámka: Tyto záznamy nelze použít v Kalkulačce v AndroidAPS. (Pouze je zobrazit)

### Wear

Sledování a ovládání AAPS prostřednictvím hodinek s Wear OS (viz [stránka Watchfaces](../Configuration/Watchfaces.md)). Chcete-li nastavit parametry pro výpočet bolusu na hodinkách (tj. 15min trend, COB…), klikněte na nastavení (ozubené kolo).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Záložka Wear](../images/ConfBuild_Wear.png)

Prostřednictvím záložky Wear nebo hamburger menu (levý horní roh obrazovky, když není záložka zobrazena) můžete

* Znovu odeslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Stavová řádka xDrip (hodinky)

Zobrazit na displeji hodinek (xDrip+ watchface) stav smyčky (pokud nepoužíváte AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md))

### Oznámení v notifikační liště

V telefonu přidá do notifikační lišty nebo na zamykací obrazovku informace o aktuální glykémii, trendu, aktivním dočasném bazálu v %, bazálu v U/h, bazálním profilu, IOB a rozdělení bolusu a bazálu v IOB.

![Widget AAPS](../images/ConfBuild_Widget.png)

### NS Client

Nastavení synchronizace dat AndroidAPS s Nightscoutem.

Je-li aktivována možnost **Zaznamenat start aplikace do NS**, bude každý restart AndroidAPS v Nightscoutu zobrazen. Může to být praktické v případě problémů s aplikací (např. když není aplikace vyjmuta z optimalizace baterie telefonu). Na druhou stranu to může zahltit graf Nightscoutu spoustou položek.

#### Nastavení alarmů

Aktivovat nebo deaktivovat alarmy v AndroidAPS

![Nastavení alarmů](../images/ConfBuild_NSClient_Alarms.png)

#### Nastavení připojení

Offline smyčka, zakázat roaming…

Chcete-li používat pouze konkrétní síť Wi-Fi, můžete zadat její **WiFi SSID**. Můžete vložit více SSID oddělených středníkem. Chcete-li smazat všechny SSID, nechte políčko prázdné.

![Nastavení připojení k Nightscoutu](../images/ConfBuild_ConnectionSettings.png)

#### Pokročilá nastavení

* Automaticky doplňovat chybějící glykémie z NS
* Vytvářet oznámení z chyb Nightscout vytváří oznámení pro zobrazení chybových dialogů a místní varování (jsou dostupná v Ošetření v sekci Péče)
* Povolit lokální odesílání do ostatních aplikací jako xDrip+
* Pouze nahrávání do NS (zakázaná synchronizace)
* Zakázat nahrávání do NS
* Vždy pracovat s absolutními hodnotami bazálu -> pokud chcete používat [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html), musíte mít tuto volbu aktivovanou.

![Rozšířená nastavení Nightscoutu](../images/ConfBuild_NSClient_Advanced.png)

### Údržba

E-mail a počet logů, které budou odeslány. Obvykle není nutné tyto hodnoty měnit.

### Konfigurátor

Místo hamburger menu použijte záložku Konfigurace.