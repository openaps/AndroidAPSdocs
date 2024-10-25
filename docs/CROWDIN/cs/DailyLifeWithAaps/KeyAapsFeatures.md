# Funkce OpenAPS

(Open-APS-features-autosens)=

## Autosens

* Autosens je algoritmus, který sleduje odchylky glykémie (pozitivní/negativní/neutrální).
* Pokusí se zjistit, jak citlivý(-á)/rezistentní jste na základě těchto odchylek.
* Realizace algoritmu oref v ** OpenAPS ** pracuje s kombinací dat za 24 a 8 hodin. Používá ta, která jsou více senzitivní.
* Ve verzích předcházejících AAPS 2.7 si uživatel musel vybrat mezi 8 nebo 24 hodinami ručně.
* Od AAPS 2.7 Autosens nyní pro výpočet citlivosti přepíná mezi 24 a 8 hodinovým úsekem. Vybere, která z nich je citlivější. 
* Pokud uživatelé pocházejí z Oref1, pravděpodobně si všimnou toho, že systém může být méně dynamický na změny, v závislosti na citlivosti za 24 nebo 8 hodin.
* Changing a cannula or changing a profile will reset Autosens ratio back to 100% (a percentual profile switch with duration won't reset autosens).
* Autosens adjusts your basal and ISF (i.e.: mimicking what a Profile shift does).
* Pokud budete nepřetržitě po delší dobu jíst sacharidy, Autosense bude během této doby méně efektivní, protože období se sacharidy jsou vyloučena z výpočtů odchylek glykémie.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

SMB je zkratka Super Micro Bolus a jde o nejnovější funkci OpenAPS (od r. 2018) pracující s algoritmem Oref1. V porovnání se starší funkcí označovanou jako AMA je hlavní rozdíl v tom, že při řízení hodnoty glykémie pomocí dávkování inzulínu nepoužívá změny bazálního inzulínu, ale především velmi malé bolusové dávky (mikrobolusy). V situaci, kdy by AMA přidala 1 U inzulínu jako dočasné zvýšení bazální dávky, SMB aplikuje jednotlivě několik mikrobolusů v **5minutových intervalech**, např. 0,4 U, 0,3 U, 0,2 U a 0,1 U. Z bezpečnostních důvodů pak ve stejném okamžiku SMB nastaví na určitou dobu dočasný bazál na 0 U/h jako prevenci proti nadměrné dávce inzulínu. Tento postup umožňuje ovlivnit hodnotu glykémie rychleji než při změně dávkování bazálního inzulínu, kterou používá AMA.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to AAPS. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let SMB provide the rest.

SMB zahrnuje určité bezpečnostní mechanismy:

1. Největší jednotlivý mikrobolus může být pouze nejmenší hodnota z:
    
    * hodnota aktuálního bazálního inzulínu (upravená pomocí automatické detekce citlivosti) pro dobu přednastavenou ve volbě „Maximální počet minut bazálu, ke kterým se limituje SMB“, např. bazální dávka inzulínu pro následujících 30 minut, nebo
    * polovina aktuálně požadované dávky inzulínu, nebo
    * zbývající část nastavené hodnoty maxIOB.

2. Pravděpodobně bude často docházet ze strany AAPS k dočasnému snížení hodnoty bazálního inzulínu nebo bude dávkování bazálního inzulín vypnuto úplně. This is by design for safety reasons and has no negative effects if the profile is set correctly. Křivka IOB je pro vyhodnocení očekávaného vývoje důležitější než nastavení bazálního profilu.

3. Dodatečné kalkulace zaměřené na odhad vývoje glykémie pomocí funkce UAM (detekce neoznámených jídel). I bez zadání hodnoty sacharidů do systému detekuje UAM automaticky výrazný vzestup glykémie způsobené jídlem, adrenalinem nebo jinými vlivy a pomocí SMB na ně reaguje. V zájmu zachování bezpečnosti to funguje i opačně a deaktivuje SMB dříve, pokud dojde k neočekávanému poklesu glykémie. To je důvod, proč by funkce UAM měla být při používání SMB vždy aktivní.

**You must have started [objective 9](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

Viz také: [Dokumentace k OpenAPS pro oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) a [Timovy informace o SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Pro množství dočasné bazální dávky inzulínu U/h lze nastavit maximální hodnotu (OpenAPS "max-basal")

Toto bezpečnostní omezení stanoví maximální výši dočasné bazální dávky inzulínu, která muže být pumpou aplikována. Hodnota by měla být nastavena shodně jak v pumpě, tak i v AAPS a měla by být minimálně třikrát vyšší než je nejvyšší hodnota ze standardního bazálního profilu.

Příklad:

Váše nejvyšší bazální dávka během dne je 1,00 U/h. Potom je doporučeno nastavit hodnotu "Maximální povolený bazál" na hodnotu 3 U/h.

AAPS stanovuje pevný limit vycházející z věku pacienta, který se stanovuje v nastavení.

AAPS limits the value as follows:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12
* Těhotná: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### Nastavenou maximální hodnotu IOB nelze překročit (OpenAPS "max-iob")

This value determines the maxIOB that AAPS will remain under while running in closed loop mode. Pokud je aktuální IOB (např. po bolusové dávce) nad nastavenou hodnotou, smyčka nenavýší dávky inzulínu, dokud se hodnota IOB pod tuto hodnotu nesníží.

Při použití OpenAPS SMB se maximální IOB počítá jinak než s OpenAPS AMA. AMA využívá jako bezpečnostní prvek maximálního IOB pouze bazální inzulín, zatímco SMB zohledňuje i inzulín z bolusových dávek. Pro začátek je vhodné vyzkoušet

    max IOB = průměrná hodnota bolusů podávaných před jídlem + 3násobek nejvyšší hodnoty v bazálním profilu
    

Při hledání ideálního nastavení buďte opatrní a trpěliví a hodnoty měňte postupně. It is different for everyone and can also depend on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age. The 'hard limit' for maxIOB is higher than in [AMA](#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal).

* Děti: 3
* Dospívající: 7
* Dospělí: 12
* Dospělí s vyšší rezistencí na inzulín: 25
* Těhotná: 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Viz také [Dokumentace k OpenAPS SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Povolit AMA Autosense

Here, you can choose if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) 'autosens' or not.

(Open-APS-features-enable-smb)=

### Povolit SMB

Enable this to use SMB functionality. If disabled, no SMBs will be given.

### Povolit SMB s vysokými dočasnými cíli

If this setting is enabled, SMB will be allowed, but not necessarily enabled, when there is a high temporary target active (defined as anything above 100mg/dl regardless of profile target). This option is intended to be used to disable SMBs when the setting is disabled. For example, if this option is disabled, SMBs can be disabled by setting a temp target above 100mg/dl. This option will also disable SMB regardless of what other condition is trying to enable SMB.

If this setting is enabled, SMB will only be enabled with a high temp target if Enable SMB with temp targets is also enabled.

(Open-APS-features-enable-smb-always)=

### Vždy povolit SMB

If this setting is enabled, SMB is enabled always (independent of COB, temp targets or boluses). If this setting is enabled, the rest of the enable settings below will have no effect. However, if “Enable SMB with high temp targets” is disabled and a high temp target is set SMBs will be disabled. For safety reasons, this option is only available for BG sources with a good filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6, if using the ['Build your own Dexcom App'](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

V případě ostatních CGM/FGM, jako je Freestyle Libre, je možnost ‘Vždy povolit SMB’ zakázána, dokud nebude mít xDrip+ lepší plugin pro vyhlazování zarušených glykémií. You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Povolit SMB se sacharidy

If this setting is enabled, SMB is enabled when the COB is greater than 0.

### Povolit SMB s dočasnými cíli

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but "Enable SMB with high temp targets" is disabled, SMB will be enabled when a low temp target is set (below 100mg/dl) but disabled when a high temp target is set.

### Povolit SMB po jídle

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0. For safety reasons, this option is only available for BG sources with a nice filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

Pro ostatní CGM/FGM, jako je Freestyle Libre, je možnost ‘Povolit SMB po jídle’ zakázána, dokud nebude mít xDrip+ lepší plugin pro vyhlazování zarušených glykémií. You can find [more information here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Jak často budou SMB podávány v minutách

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g if you want SMB to be given every loop run, set this to 3 minutes.

Výchozí hodnota: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Maximální počet minut bazálu, ke kterým se limituje SMB

Jedná se o důležité bezpečnostní nastavení. Tato hodnota určuje, kolik SMB může být vydáno na základě aktuálního bazálu, když nejsou pokryty sacharidy.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Výchozí hodnota: 30 min.

### Povolit UAM

Je-li tato možnost povolena, algoritmus SMB dokáže rozpoznat neoznámená jídla. This is helpful if you forget to tell AAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasements caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Proto by měla být při používání SMB funkce UAM vždy povolena.**

### Citlivost zvyšuje cíl

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

### Rezistence snižuje cíl

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

### Vysoký dočasný cíl zvýší senzitivitu

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target above 100 mg/dl or 5.6 mmol/l. To znamená, že ISF se zvýší, zatímco IC a bazál se sníží. This will effectively make AAPS less aggressive when you set a high temp target.

### Nízký dočasný cíl sníží senzitivitu

Je-li tato volba aktivní, citlivost na inzulin se při nastavení dočasného cíle pod 5.6 mmol/l (100 mg/dl) sníží. To znamená, že ISF se sníží, zatímco IC a bazál se zvýší. This will effectively make AAPS more aggressive when you set a low temp target.

### Rozšířená nastavení

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to be steadier with noisy data sources like xDrip+ and Libre.

**Max. násobitel denního nejvyššího bazálu** Toto je důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně nebude potřeba upravovat) je 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Max. násobitel současného bazálu** Toto je další důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně také nebude potřeba upravovat) je 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA je zkratka pro "advanced meal assist" (pokročilý pomocník s jídly), což je funkce OpenAPS od roku 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) umožňuje systému rychleji reagovat po bolusu na jídlo, pokud zadáte sacharidy správně.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max. povolený bazál U/h (OpenAPS "max-basal")

This safety setting helps AAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Doporučuje se nastavit toto na rozumnou hodnotu. Doporučuje se vzít z vašeho profilu nejvyšší hodnotu bazálu, a vynásobit ji 4 a alespoň 3. Například: máte-li ve svém profilu nejvyšší hodnotu bazálu 1,0 U/h, dostanete po vynásobení 4 hodnotu 4 U/h. Nastavte tedy 4 jako svůj bezpečnostní parametr.

Nemůžete si vybrat libovolnou hodnotu: Z bezpečnostních důvodů je tato hodnota omezena v závislosti na věku pacienta. 'Pevný limit' pro maxIOB jev algoritmu AMA nižší než v SMB. Pro děti je hodnota nejnižší, zatímco pro dospělé pacienty s rezistencí na inzulin je největší.

The hardcoded parameters in AAPS are:

* Děti: 2
* Dospívající: 5
* Dospělí: 10
* Dospělí s vyšší rezistencí na inzulín: 12
* Těhotná: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AAPS still works. Pokud je IOB vyšší, zastaví se výdej dalšího bazálního inzulínu, dokud je IOB z bazálu pod limitem.

Výchozí hodnota je 2, tento parametr byste však měli měnit postupně, abyste viděli, jak velký má efekt a která hodnota se hodí nejlépe. Nastavení je individuální a mj. vychází i z výše celkové denní dávky inzulínu. Z bezpečnostních důvodů jsou nastaveny limity vycházející z věku pacientů. 'Pevný limit' pro maxIOB jev algoritmu AMA nižší než v SMB.

* Děti: 3
* Dospívající: 5
* Dospělí: 7
* Dospělí s vyšší rezistencí na inzulín: 12
* Těhotná: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Povolit AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosense upravuje také cílovou glykémii

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AAPS work more 'aggressive' or not. Aktuálně nastaveného cíle lze s touto funkcí dosáhnout rychleji.

### Rozšířená nastavení

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max. násobitel denního nejvyššího bazálu** Toto je důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně nebude potřeba upravovat) je 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Výchozí hodnota: 3 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Max. násobitel současného bazálu** Toto je další důležité bezpečnostní omezení. Výchozí nastavení (které pravděpodobně také nebude potřeba upravovat) je 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Výchozí hodnota: 4 (neměňte, pokud si opravdu nejste jisti tím, co děláte)

**Dělitel bolus snooze** Funkce “bolus snooze” funguje po bolusu na jídlo. AAPS nenastaví nízký dočasný bazál po jídle během doby, která trvá DIA děleno parametrem “bolus snooze”. Výchozí hodnota je 2. To znamená, že s DIA 5 h by trvání parametru „bolus snooze“ bylo 5 h : 2 = 2,5 h.

Výchozí hodnota: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Přehled pevně naprogramovaných limitů

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Dítě</th>
    <th width="75">Dospívající</th>
    <th width="75">Dospělý</th>
    <th width="75">Dospělý s nízkou citlivostí</th>
    <th width="75">Těhotná</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MINDIA</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAXDIA</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MINIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAXIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAXIOB_AMA</td>
    <td>3,0</td>
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>