# Nastavení

- **Nastavení** otevřete kliknutím na tři tečky v pravém horním rohu domovské obrazovky.

  ![Otevřít nastavení](../images/Pref2020_Open2.png)

- Můžete přejít přímo na konkrétní záložky nastavení (např. záložka pumpy) jejím otevřením a kliknutím na Nastavení pluginu.

  ![Otevřít nastavení pluginu](../images/Pref2020_OpenPlugin2.png)

- **Podmenu** může být otevřeno kliknutím na trojúhelník pod nadpisem menu.

  ![Otevřít submenu](../images/Pref2020_Submenu2.png)

- Pomocí **filtru** v horní části obrazovky se můžete rychle dostat k nastavení, které zrovna potřebujete. Stačí začít psát část textu, který hledáte.

  ![Filtr předvoleb](../images/Pref2021_Filter.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## General

![Nastavení > Obecné](../images/Pref2020_General.png)

**Jednotky**

- V závislosti na vašich preferencích nastavte jednotky na mmol/l nebo mg/dl.

**Jazyk**

- Nová možnost je používat výchozí jazyk telefonu (doporučeno).

- V případě, že chcete mít AAPS v jiném jazyce než je standardní jazyk vašeho telefonu, si můžete vybrat z široké nabídky dalších jazyků aplikace.

- Pokud používáte různé jazyky, můžete se někdy setkat s jazykovým mixem. To je způsobeno problémem systému Android, kvůli které někdy přepnutí systémového jazyka nefuguje správně.


**Jméno pacienta**

- Může být použito, pokud musíte rozlišovat mezi více nastaveními (např. dvěma dětmi T1D ve vaší rodině).

(Preferences-protection)=
### Ochrana

(Preferences-master-password)=

![Nastavení > Obecné - Ochrana](../images/Pref2020_General2.png)

#### Hlavní heslo

- Necessary to be able to [export settings](../Maintenance/ExportImportSettings.md) as they are encrypted from version 2.7. **Na OnePlus telefonech nemusí fungovat biometrická ochrana. Jedná se o známou chybu OnePlus telefonů.**

- Otevřete nastaní (tříbodové menu v právém horním rohu domovské obrazovky)

- Klepněte na trojúhelník pod "Obecné"

- Klepněte na položku "Hlavní heslo"

- Zadejte heslo, potvrďte ho, a klepněte na tlačítko Ok.

  ![Nastavit hlavní heslo](../images/MasterPW.png)

#### Ochrana nastavení

- Protect your settings with a password or phone's biometric authentication (i.e. [child is using AAPS](../RemoteFeatures/RemoteMonitoring.md)).

- Custom password should be used if you want to use master password just for securing [exported settings](../Maintenance/ExportImportSettings.md).

- If you are using a custom password click on line "Settings password" to set password as described [above](#master-password).

  ![Ochrana](../images/Pref2020_Protection.png)

#### Ochrana aplikace

- Je-li aplikace chráněna, musíte k otevření AAPS zadat heslo nebo použít biometrické ověření telefonu.
- Je-li zadáno chybné heslo, aplikace se okamžitě vypne. Pokud byla předtím úspěšně spuštěna, zůstává stále běžet na pozadí.

#### Ochrana bolusu

- Bolus protection might be useful if AAPS is used by a small child and you [bolus via SMS](../RemoteFeatures/SMSCommands.md).

- V níže uvedeném příkladu vidíte výzvu k biometrické ochraně. Pokud biometrické ověření nefunguje, klepněte na místo nad bílou výzvou k zadání, a zadejte hlavní heslo.

  ![Výzva pro biometrickou ochranu](../images/Pref2020_PW.png)

(Preferences-skin)=
#### Vzhled

- Můžete si vybrat ze čtyř typů vzhledů:

  ![Vybrat vzhled](../images/Pref2021_SkinWExample.png)

- "Vzhled pro nízké rozlišení" má kratší popisky a nezobrazuje stáří/úroveň, aby zbylo dost místa na obrazovkách s velmi malým rozlišením.

- Rozdíly mezi ostatními vzhledy závisí na orientaci telefonu.

##### Na výšku

- \*\* Původní vzhled\*\* a **Tlačítka jsou vždy zobrazena na spodní části obrazovky** jsou stejné
- **Velký displej** má v porovnání s ostatními skiny větší velikost grafů

##### Na šířku

- Při použití **Původní vzhled** a **Velký displej**, musíte posouvat dolů, abyste zobrazili tlačítka v dolní části obrazovky

- **Velký displej** má v porovnání s ostatními skiny větší velikost grafů

  ![Vzhledy v závislosti na orientaci telefonu](../images/Screenshots_Skins.png)

(Preferences-overview)=
## Přehled

- V sekci Přehled můžete nastavit preference pro domácí obrazovku.

  ![Předvolby > Přehled](../images/Pref2020_OverviewII.png)

### Nechat obrazovku zapnutou

- Užitečné při předvádění.
- Tento režim spotřebovává velké množství energie, takže je nutné připojit mobil do nabíječky.

(Preferences-buttons)=
### Tlačítka

- Určete, která tlačítka se zobrazí ve spodní části domovské obrazovky.

  ![Nastavení > Tlačítka](../images/Pref2020_OV_Buttons.png)

- Podle vyznačených souvislostí na obrázcích můžete nadefinovat hodnoty trlačítek sacharidů a inzulínu pro snadnější zadávání v dialogových oknech.

  ![Nastavení > Tlačítka > Inzulín](../images/Pref2020_OV_Buttons2.png)

  ![Nastavení > Tlačítka > Sacharidy](../images/Pref2020_OV_Buttons3.png)

(Preferences-quick-wizard)=
### Průvodce rychlým bolusem

- Pokud máte často svačinu nebo jídlo, můžete použít Rychlý bolus pro snadnější vkládání hodnot sacharidů a nastavení základních výpočtů.

- V nastavení si určíte, v jakém časovém období se má tlačítko zobrazit na domácí obrazovce - právě jedno tlačítko na jedno období.

  ![Nastavení > Tlačítko rychlého průvodce](../images/Pref2020_OV_QuickWizard.png)

- Když kliknete na tlačítko Rychlý bolus, AAPS provede výpočty a navrhne bolus pro zadané množství sacharidů s ohledem na aktuální hodnoty (glykémie nebo aktivního inzulínu, pokud je nastaven).

- Navržený bolus musí být potvrzen, aby byl následně vydán.

  ![Předvolby > Tlačítko průvodce](../images/Pref2020_OV_QuickWizard2.png)

(Preferences-default-temp-targets)=
### Výchozí nastavení dočasných cílů

- [Temp targets (TT)](../DailyLifeWithAaps/TempTargets.md) allow you to define change your blood glucose target for a certain time period.

- S nastavením základních hodnot DC můžete jednodušeji měnit své cílové hodnoty glykémie pro aktivity, blížící se jídlo atd.

  ![Nastavení > Výchozí dočasné cíle](../images/Pref2020_OV_DefaultTT.png)

- Dlouze stiskněte cíl v pravém horním rohu domácí obrazovky nebo použijte zaškrtávací políčka v dialogu Sacharidy po kliknutí na oranžové tlačítko Sacharidy na domovské obrazovce.

  ![Předvolby > Použít výchozí dočasné cíle](../images/Pref2020_OV_DefaultTT2.png)

###

### Standardní množství inzulinu pro Plnění/Doplňování

- If you want to fill tube or prime cannula through AAPS you can do this through [actions tab](../DailyLifeWithAaps/AapsScreens.md#action-tab).
- Přednastavené hodnoty se dají měnit v tomto dialogu.

(Preferences-range-for-visualization)=
### Rozsah zobrazování

- Určuje, jaká část grafu na domácí obrazovce bude bude vaším cílovým rozsahem a bude podbarvena zeleně.

  ![Předvolby > Rozsah vizualizace](../images/Pref2020_OV_Range2.png)

### Krátké názvy modulů

- Umožňuje vidět víc názvů obrazovek na obrazovce najednou.

- Například název "OpenAPS AMA" bude zobrazen jako "OAPS" a "NS CLIENT" jako "NSCL" atd.

  ![Předvolby > Záložky](../images/Pref2020_OV_Tabs.png)

### Zobrazovat kolonku poznámky v dialozích ošetření

- Přidává možnost doplňovat k záznamům o ošetření krátkou textovou poznámku v dialozích, kde se zadávají (Bolusová kalkulačka, Sacharidy, Inzulín...)

  ![Předvolby > Poznámky v dialogových oknech ošetření](../images/Pref2020_OV_Notes.png)

(Preferences-status-lights)=
### Stavové indikátory

- Stavové indikátory zobrazují vizuální varování pro

  - Stáří senzoru
  - Sensor battery level for certain smart readers (see [screenshots page](../DailyLifeWithAaps/AapsScreens.md#sensor-level-battery) for details).
  - Stáří inzulínu (doba použití aktuálního zásobníku)
  - Stav zásobníku (jednotky)
  - Stáří kanyly
  - Stáří baterie v pumpě
  - Úroveň nabití baterie pumpy (%)

- Pokud dojde k dosažení prahové hodnoty, zobrazí se hodnoty žlutě.

- Pokud dojde k dosažení kritické prahové hodnoty, hodnoty se zobrazí červeně.

- Ve verzích předcházejících AAPS 2.7 muselo být nastavení stavových indikátorů provedeno v nastavení Nightscoutu.

  ![Předvolby > Stavové indikátory](../images/Pref2020_OV_StatusLights2.png)

### Deliver this part of bolus wizard result

Set the [default percentage](../DailyLifeWithAaps/AapsScreens.md#section-j) of the bolus calculated when using the bolus wizard.

Default is 100%: no correction. Even when setting a different value here, you can still change each time you use the bolus wizard.

When using [SMB](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb), using a value lower than 100% here can be useful:
* for people with slow digestion: sending all the bolus upfront can cause hypo because the insulin action is faster than the digestion.
* to leave more room to *AAPS** to deal by itself with **BG rise**. In both cases, **AAPS** will compensate the missing part of the bolus with SMBs, if/when deemed adequate.

### Rozšířená nastavení (přehled)

![Nastavení > Pokročilé nastavení](../images/Pref2021_OV_Adv.png)

(Preferences-superbolus)=
#### Superbolus

- Volba pro povolení superbolusu v bolusové kalkulačce.
- [Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) se používá jako prevence proti prudkému růstu glykémie po jídle, a spočívá ve "vypůjčení" bazálního inzulínu z následujících 2 hodin.

## Bezpečnostní omezení ošetření

### Typ pacienta

- Bezpečnostní limity jsou nastaveny na základě věku, který jste zvolili v tomto nastavení.
- Pokud začnete narážet na pevně nastavené limity (jako například na maximální bolus), je čas posunout se o stupeň výš.
- Nastavení vyššího než skutečného věku není dobrý nápad, protože může vést k předávkování inzulínem při chybném nastavení množství inzulínu (například vynecháním desetinné čárky v dialogu).
- If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on [this page](../DailyLifeWithAaps/KeyAapsFeatures.md).

### Maximální povolený bolus \[U\]

- Určuje maximální velikost bolusu, jakou může AAPS poslat najednou.
- Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele.
- Doporučuje se nastavit ho na rozumnou hodnotu zhruba odpovídající maximálnímu bolusu, který jste kdy poslali na jídlo.
- Toto omezení se vztahuje i na výsledky bolusové kalkulačky.

### Maximální povolené sacharidy \[g\]

- Určuje maximální množství sacharidů, se kterým může bolusový kalkulátor AAPS počítat.
- Nastavení slouží jako bezpečnostní limit pro zabránění odeslání příliš velkého bolusu vzhledem k množství zadaných sacharidů, nebo k ohlídání chyby uživatele.
- Je doporučeno nastavit limit na nějakou rozumnou hodnotu, která odpovídá maximálnímu množství sacharidů, které jste kdy v jídle snědli.

## Smyčka

(Preferences-aps-mode)=
### Typ smyčky

- Přepíná mezi uzavřenou, otevřenou smyčkou i pozastavením při nízké glykémii (LGS)
- **Otevřená smyčka** znamená, že a základě vašich dat dostanete návrhy nastavení dočasného bazálu. Po manuálním potvrzení bude příkaz pro odeslání inzulinu poslán do pumpy. Pouze v případě že máte nastavenou virtuální pumpu je nutné inzulín aplikovat ručně.
- **Uzavřená smyčka** znamená, že dočasné bazály jsou automaticky, bez jakéhokoliv potvrzení z vaší strany, posílány přímo do pumpy.
- **Ochrana před nízkou glykémií** funguje obdobně jako uzavřená smyčka, ale přepíše nastavení maxIOB na nulu. To znamená, že pokud glykémie klesá, může dojít ke snížení úrovně bazálu, ale pokud se hodnota glykémie zvyšuje, zvýší se bazál pouze v případě, pokud je IOB záporný (např. z důvodu předchozího snížení bazálu).

(Preferences-minimal-request-change)=
### Minimální změna pro výzvu \[%\]

- Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky.
- Ke snížení počtu oznámení můžete zadat buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu.
- Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

(Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)=
## Vylepšený asistent pro jídlo (AMA) nebo Super Micro bolus (SMB)

Depending on your settings in [config builder](../SettingUpAaps/ConfigBuilder.md) you can choose between two algorithms:

- [Advanced meal assist (OpenAPS AMA)](../DailyLifeWithAaps/KeyAapsFeatures.md#advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) - most recent algorithm recommended for beginners

### Nastavení OpenAPS AMA

- Jsou-li sacharidy zadány správně, reaguje systém po bolusu na jídlo rychleji, a to díky aplikování vysoké dočasné bazální dávky.
- Více podrobností o nastavení a Autosens můžete najít v .

(Preferences-max-u-h-a-temp-basal-can-be-set-to)=
#### Max. U/h, které lze nastavit pro dočas. bazál

- Maximální hodnota dodatečného bazálního inzulínu (v jednotkách), o který může smyčka navýšit Váš normální bazál.
- Jakmile je tato hodnota dosažena, AAPS zastaví přidávání dodatečného bazálu, dokud hodnota inzulínu v těle (IOB) opět neklesne pod tuto hodnotu.
- Doporučuje se nastavit toto na rozumnou hodnotu. Je doporučeno vzít **nejvyšší hodnotu bazálu** v profilu a **vynásobit ji 4**.
- Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 0.5U/h, dostanete po vynásobení 4 hodnotu 2U/h.
- See also [detailed feature description](../DailyLifeWithAaps/KeyAapsFeatures.md#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal).

#### Maximální bazální IOB \[U\]

- získání dostatečného času na to, abyste naučili AndroidAPS ovládat a vysledovat, jak funguje.
- perfektní vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
- zjištění, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.
- Tato hodnota je počítána a monitorována nezávisle na vašem normálním bazálu. V úvahu je brán pouze dodatečný bazální inzulín převyšující normální bazál.

Když začínáte se smyčkou, ** je doporučováno nastavit si na nějaký čas maximální bazální IOB na 0**, než si na systém zvyknete. Toto zabrání AndroidAPS v tom, aby přidal dodatečný bazální inzulín. Během této doby bude AndoidAPS pořád schopná omezit či vypnout Váš bazální inzulín, aby se pomohlo předejít hypoglykémii. To je důležitý krok pro:

- Začněte tedy s touto hodnotou, a postupem času ji opatrně navyšujte.
- Využijte této příležitosti k perfektnímu vyladění nastavení Vašeho bazálního profilu a faktoru citlivosti na inzulín (ISF).
- Všimněte si, jak AndroidAPS omezuje Váš bazální inzulín, aby se předešlo hypoglykémii.

Když se na to už budete cítit, můžete dovolit systému, aby začal přidávat bazální inzulín, a to navýšením hodnoty maximálního množství bazálního inzulínu v těle. Doporučuje se vzít **nejvyšší hodnotu bazálu **ve Vašem profilu a ** vynásobit ji třemi**. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 0.5U/h, dostanete po vynásobení 3 hodnotu 1.5U/h.

- [Autosens](../Usage/Open-APS-features#autosens) sleduje odchylky glukózy v krvi (pozitivní/negativní/neutrální).
- Toto jsou pouze návrhy; tělo každého člověka je jiné. Možná zjistíte, že potřebujete méně nebo více, než je zde doporučeno. Vždy ale začněte opatrně, a přidávejte pomalu.

**Poznámka: Jako bezpečnostní prvek je maximální bazální IOB natvrdo nastaveno na maximálně 7 jednotek.**

#### Autosens

- [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md#autosens) looks at blood glucose deviations (positive/negative/neutral).
- Pokud je chcete i přesto změnit, prostudujte si podrobnosti v , abyste pochopili, co děláte.
- Pokud vyberete "Autosens také nastavuje cíl", bude algoritmus upravovat i vaši cílovou hodnotu glykémie.

#### Pokročilé nastavení (OpenAPS AMA)

- Obvykle v tomto dialogu není potřeba měnit žádná nastavení!
- Pokud je chcete přesto změnit, ujistěte se, že jste si přečetli podrobnosti v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) a rozmíte tomu, co děláte.

(Preferences-openaps-smb-settings)=
### Nastavení OpenAPS SMB

- In contrast to AMA, [SMB](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.

- You must have started [objective 9](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.

- The first three settings are explained [above](#max-uh-a-temp-basal-can-be-set-to).

- Details on the different enable options are described in [OpenAPS feature section](../DailyLifeWithAaps/KeyAapsFeatures.md#enable-smb).

- *Jak často budou SMB podávány v min.* je omezení SMB, které je standardně nastaveno na každé 4 minuty. Tato hodnota brání systému vydávat SMB příliš často (např. v případě nastavení dočasného cíle). Toto nastavení byste neměli změnit, pokud přesně nevíte, jaké mohou být následky.

- If 'Sensitivity raises target' or 'Resistance lowers target' is enabled [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md#autosens) will modify your glucose target according to your blood glucose deviations.

- Je-li cíl upraven, bude na domovské obrazovce zobrazen se zeleným pozadím.

  ![Cíl upraven Autosens](../images/Home2020_DynamicTargetAdjustment.png)

(Preferences-carb-required-notification)=
#### Oznámení vyžadovaných sacharidů

- Tato funkce je k dispozici pouze v případě, je-i vybrán algoritmus SMB.

- V případě že referenční design detekuje potřebu sacharidů, navrhe konzumaci dalších sacharidů.

- V tomto případě obdržíte oznámení, které může být odloženo na 5, 15 nebo 30 minut.

- Kromě toho se na domovské obrazovce v sekci COB zobrazí požadované sacharidy.

- Je možné nastavit prahovou hodnotu - minimální počet sacharidů potřebný ke spuštění oznámení.

- V případě potřeby může být notifikace vyžadovaných sacharidů odeslána do Nightscoutu. Notifikace se pak zobrazí v Nightscoutu a bude vysílána.

  ![Zobrazení požadovaných sacharidů na domovské obrazovce](../images/Pref2020_CarbsRequired.png)

#### Pokročilé nastavení (OpenAPS AMA)

- Obvykle v tomto dialogu není potřeba měnit žádná nastavení!
- Pokud je chcete přesto změnit, ujistěte se, že jste si přečetli podrobnosti v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) a rozmíte tomu, co děláte.

## Nastavení absorpce sacharidů

![Nastavení absorpce sacharidů](../images/Pref2020_Absorption.png)

### min_5m_carbimpact

- Algoritmus používá BGI (vliv na glukózu v krvi) k určení, kdy jsou absorbovány sacharidy.

- Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB.

- V situacích, kdy absorpci sacharidů nelze počítat dynamicky na základě reakcí vaší glykémie, je použita výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.

- Zjednodušeně řečeno: algoritnuls ví jak by se *měla* vaše glykémie chovat, je-li ovlivněna podaným inzulínem apod.

- Kdykoli dojde k pozitivní odchylce od očekávaného chování, je rozloženo/absorbováno určité množství sacharidů. Velká změna = více sacharidů atp.

- Hodnota min_5m_carbimpact definuje výchozí vliv absorpce sacharidů za 5 minut. Více informací naleznete v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

- Standardní hodnota pro AMA je 5, pro SMB 8.

- Graf COB na domovské obrazovce označuje kdy se používá min_5m_impact tím, že se na vrcholu zobrazí oranžový kroužek.

  ![COB graf](../images/Pref2020_min_5m_carbimpact.png)

### Max. doba absorpce sacharidů

- Pokud často jíte jídla s vysokým obsahem tuků nebo bílkovin, budete si muset nastavit delší čas absorpce jídla.

### Pokročilé nastavení - autosens ratio

- Define min. and max. [autosens](../DailyLifeWithAaps/KeyAapsFeatures.md#autosens) ratio.
- Normálně by se neměly měnit standardní hodnoty (max. 1.2 a min. 0.7).

## Nastavení pumpy

The options here will vary depending on which pump driver you have selected in [Config Builder](../SettingUpAaps/ConfigBuilder.md#pump).  Spárujte a nastavte svou pumpu podle pokynů pro jednotlivé pumpy:

- [Inzulinová pumpa DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [Inzulinová pumpa DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Pumpa Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md)
- [Pumpa Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [Pumpa Medtronic](../CompatiblePumps/MedtronicPump.md)

Pokud používáte AAPS pro otevřenou smyčku, ujistěte se, že jste v konfiguraci zvolili virtuální pumpu.

(Preferences-nsclient)=
## NSClient

![NSClient](../images/Pref2020_NSClient.png)

Původní komunikační protokol, lze použít se staršími verzemi Nightscoutu.

- Nastavte svou *Nightscout URL* (tj. <https://yoursitename.yourplaform.dom>).
  - **Ujistěte se, že adresa URL na konci NEOBSAHUJE /api/v1/.**
- *[API secret](https://nightscout.github.io/nightscout/setup_variables/#api-secret-nightscout-password)* (12 znakové heslo zaznamenané v proměnných Nightscoutu).
- Toto umožní zápis i čtení dat mezi Nightscoutem a AAPS.
- Větší množství SSID lze oddělit středníkem.

## NSClientV3

![NSClientV3](../images/Pref2024_NSClientV3.png)

[New protocol introduced with AAPS 3.2.](../Maintenance/ReleaseNotes.md#important-comments-on-using-v3-versus-v1-api-for-nightscout-with-aaps) Safer and more efficient.

```{admonition} V3 data uploaders
:class: warning

When using NSClientV3, all uploaders must be using the API V3. Since most are not compatible yet, this means **you must let AAPS upload all data** (BG, treatments, ...) to Nightscout and disable all other uploaders if they're not V3 compliant.
```

- Nastavte svou *Nightscout URL* (tj. <https://yoursitename.yourplaform.dom>).
  - **Ujistěte se, že adresa URL na konci NEOBSAHUJE /api/v1/.**
- V Nightscoutu vytvořte *[Admin token](https://nightscout.github.io/nightscout/security/#create-a-token)* (vyžaduje [Nightscout v. 15](https://nightscout.github.io/update/update/) pro použití V3 API) a zadejte jej do **NS přístupový token** (nikoli vaše API Secret!).
- Toto umožní zápis i čtení dat mezi Nightscoutem a AAPS.
- Větší množství SSID lze oddělit středníkem.
- Ponechte připojení k websocketům povolené (doporučeno).

### Synchronizace

Synchronization choices will depend on the way you will want to use AAPS.

You can select which data you want to [upload and download to or from Nightscout](../SettingUpAaps/Nightscout.md#aaps-settings).

### Nastavení alarmů

![Nastavení alarmů](../images/Pref2024_NSClient_Alarms.png)

- Nastavení alarmů umožňují vybrat, jaké alarmy Nightscoutu se mají v aplikaci používat. AAPS spustí alarm, když se zapne alarm na Nightscout.
  - Aby alarmy fungovaly, je třeba nastavit v [Nightscoutu variables](https://nightscout.github.io/nightscout/setup_variables/#alarms) hodnoty glykémie pro Urgentní, Vysokou, Nízkou a Urgentní nízkou glykémii.
  - Budou fungovat pouze v případě že budete mít připojení k Nightscoutu, a jsou určeny pro rodiče/pečovatele.
  - Pokud máte zdroj CGM na svém telefonu (tj. xDrip+ nebo BYODA), použijte tyto alarmy místo alarmů Nightscout.
- Vytvářejte oznámení z [Nightscout oznámení](https://nightscout.github.io/nightscout/discover/#announcement), aby se ukázaly v oznamovacím panelu AAPS.
- Můžete nastavit Mezní hodnotu pro zastaralá data a Urgentní mezní hodnotu pro zastaralá data. Tato nastavení spustí alarm pokud po určenou dobu nejsou přijata žádná data z Nightscoutu.

### Nastavení připojení

![NSClient connection settings](../images/ConfBuild_ConnectionSettings.png)

- Nastavení připojení definují, kdy bude povoleno připojení k Nightscoutu.
- Volby alarmu umožňují vybrat, jaké výchozí alarmy Nightscoutu se mají v aplikaci používat.
- Chcete-li používat pouze konkrétní síť Wi-Fi, můžete zadat její WiFi SSID.
- Budou fungovat pouze v případě že budete mít připojení k Nightscoutu, a jsou určeny pro rodiče/pečovatele.
- Chcete-li smazat všechna SSID, nechejte pole prázdné.

(Preferences-advanced-settings-nsclient)=
### Rozšířená nastavení (NSClient)

![NS Client advanced settings](../images/Pref2024_NSClientAdv.png)

Options in advanced settings are self-explanatory.

## SMS komunikátor

- Options will only be displayed if SMS communicator is selected in [Config Builder](../SettingUpAaps/ConfigBuilder.md#sms-communicator).
- Používat zjištění polohy podle sítě: Poloha podle vaší Wi-Fi sítě
- Further information is described in [SMS Commands](../RemoteFeatures/SMSCommands.md).
- Dodatečná bezpečnost je zajištěna použitím autentizační aplikace a dodatečného PIN na konci tokenu.

## Automatizace

Select which location service shall be used:

- Používat pasivní polohu: AAPS zjistí polohu pouze v případě, že ji budou požadovat ostatní aplikace
- Používat zjištění polohy podle sítě: Poloha podle vaší Wi-Fi sítě
- Používat GPS polohu (Pozor! Může způsobovat nadměrné vybíjení baterie!)

## Místní výstrahy

![Místní výstrahy](../images/Pref2020_LocalAlerts.png)

- Můžete pomáhat s vývojem AAPS zasláním hlášení o pádu vývojářům.

## Možnosti dat

![Možnosti dat](../images/Pref2020_DataChoice.png)

- Můžete pomáhat s vývojem AAPS zasláním hlášení o pádu vývojářům.

## Nastavení údržby

![Nastavení údržby](../images/Pref2020_Maintenance.png)

- Standard recipient of logs is <logs@aaps.app>.

## Open Humans

- Můžete pomoci komunitě tím, že daruje vaše data do výzkumných projektů! Details are described on the [Open Humans page](../SupportingAaps/OpenHumans.md).

- V předvolbách můžete definovat, kdy budou data odeslána

  - pouze v případě připojení k WiFi
  - pouze při nabíjení
