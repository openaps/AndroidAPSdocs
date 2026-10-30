# Slovníček

**AAPS** = AndroidAPS je název aplikace pro Android.

**AAPSClient** = aplikace pro sledující, určená pro pečovatele. Na telefonu sledujícího sleduje **AAPS** uživatele přes jeho stránku **Nightscout** a po spárování s telefonem s **AAPS** ho může vzdáleně ovládat. Nezaměňujte s **NSClientem**. Další informace → [Wiki - „Aplikace AAPSClient“](../RemoteFeatures/AapsClient.md) a [Ovládání master ↔ klient](#client-master-control).

**Activity** (aktivita) = aktivita inzulínu, tedy rychlost, jakou ubývá IOB. Viz [Wiki - „DIA“](#Config-Builder-insulin-dia) a související **BGI**.

**AID** = Automated Insulin Delivery, automatizované podávání inzulínu. Termín, který se běžně používá v klinické praxi a ve výzkumu pro systém, jenž automaticky upravuje podávání inzulínu podle dat z **CGM**. **APS** a **uzavřená smyčka** znamenají totéž → viz také **OS-AID**.

**APS** = Artificial Pancreas System, systém umělé slinivky → viz také **AID**.

**AMA** = Advanced Meal Assist (pokročilá pomoc s jídlem). Algoritmus, který umožňuje **AAPS** po bolusu na jídlo zvýšit bazál uživatele agresivněji. Další informace → [Wiki - „Advanced Meal Assist (AMA)“](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (faktor úpravy) = používá se v **DynamicISF**. Je to hodnota v **Nastavení** uživatele od 1 % do 300 %. Funguje jako násobitel hodnoty **TDD**. Viz [Wiki - Faktor úpravy DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = systém, který zobrazuje některé funkce chytrého telefonu s Androidem, včetně **AAPS**, na displeji v autě. Další informace → [Wiki - „Android Auto“](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (balíček aplikace pro Android). Instalační soubor softwaru. Další informace → [Wiki - „Sestavení AAPS“](../SettingUpAaps/BuildingAaps.md).

**Autosens** = výpočet citlivosti na inzulín za období 24 a 8 hodin atd. Další informace → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloudová platforma pro hostování webové aplikace **Nightscout** → viz také **Nightscout**.

**BAT** = kontrolka slabé baterie pumpy ve stavovém řádku hlavní obrazovky **AAPS** → viz také **CAN** / **RES** / **SEN**.

**BG** = blood glucose, glykémie.

**BGI** = blood glucose impact, vliv na glykémii. Míra, o kterou by **BG** „měla“ stoupnout nebo klesnout jen podle aktivity inzulínu.

**BG source** (zdroj glykémie) = nastavení AAPS, kterým se volí zdroj dat glykémie. Viz [Wiki - Zdroj glykémie](#Config-Builder-bg-source)

**Bridge** (můstek) = další zařízení, které z **FGM** udělá **CGM**.

**BR** = Basal Rate, bazální dávka. Množství inzulínu v daném časovém bloku, které udržuje **BG** na stabilní úrovni. → viz také **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (sestavte si vlastní aplikaci Dexcom). Způsob, jak si vytvořit vlastní aplikaci Dexcom pro čtení dat ze senzoru Dexcom G6.

**CAGE** = Cannula AGE, stáří kanyly. Zobrazuje se na hlavní obrazovce **AAPS** a v Nightscoutu podle záznamů péče **Plnění/doplňování** uživatele → viz také **Nightscout**.

**CAN** = kontrolka zpožděné výměny kanyly ve stavovém řádku hlavní obrazovky **AAPS** → viz také **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor, systém pro kontinuální monitorování glukózy → viz také **FGM**.

**Closed Loop** (uzavřená smyčka) = systém, který automaticky upravuje výdej bazálu podle algoritmu **AAPS** a nastavení **profilu** uživatele, bez nutnosti souhlasu uživatele. Další informace → Wiki - „uzavřená smyčka“ a viz také **HCL** / **FCL**.

**COB** = Carbs On Board, zbývající (ještě nevstřebané) sacharidy. Je to množství sacharidů, které tělo uživatele ještě musí strávit → viz také IOB.

**CSF** = Carbs Sensitivity Factor, faktor citlivosti na sacharidy. Tedy o kolik stoupne **BG** uživatele po vstřebání 1 g sacharidů.

**DIA** = Duration of Insulin Action, doba působnosti inzulínu. Další informace → [Wiki - „DIA“](#Config-Builder-insulin-dia) a viz také → [DIABETTECH - „DIA“](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time, letní čas. Viz [Wiki - Změna časového pásma a letní čas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (nebo DynISF)** (dynamická ISF) = funkce **AAPS**, která dynamicky upravuje citlivost na inzulín (**ISF**) podle **TDD** a **BG** uživatele.

**eCarbs** = extended Carbs, rozložené sacharidy (v aplikaci „eSacharidy“). Sacharidy rozložené do několika hodin (např. kvůli bílkovinám), díky kterým může **AAPS** podávat inzulín postupně, podobně jako prodloužený bolus. Další informace → [Wiki - „Rozložené sacharidy“](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop, plně uzavřená smyčka. Smyčka, která od uživatele nepotřebuje žádné zadání k jídlu: žádné počítání sacharidů a žádný bolus na jídlo. Další informace → Wiki - „plně uzavřená smyčka“ a viz také **HCL**.

**FGM** = Flash Glucose Monitor (okamžité monitorování glukózy), systém Freestyle Libre. Další informace → Wiki - „Zdroj glykémie“ a viz také „CGM“.

**git** = nástroj pro ukládání a stahování zdrojového kódu **AAPS**.

**GitHub** = webová služba pro hostování a sestavování softwaru **AAPS** se systémem správy verzí, který sleduje změny v souborech a koordinuje práci na nich, hlavně v týmech. Je také potřeba pro aktualizace **APK**. Další informace → Wiki - „aktualizace APK“.

**Glimp** = aplikace Glimp pro načítání hodnot z Freestyle Libre.

**HCL (nebo Hybrid Closed Loop)** (hybridní uzavřená smyčka) = smyčka, která automatizuje podávání inzulínu mezi jídly, ale bolus na jídlo musí uživatel stále podat sám. Téměř každý systém v každodenním použití, včetně **AAPS**, je hybridní uzavřená smyčka → viz také **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio, inzulínosacharidový poměr. Pozor: obvykle se udává v g/U, i když zkratka naznačuje opak.

**IOB** = Insulin On Board, aktivní inzulín (v aplikaci „Zbývající inzulín“). Inzulín, který v těle uživatele ještě působí. Viz [Wiki - Aktivní inzulín (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor, citlivost na inzulín. Očekávaný pokles glykémie po podání jedné jednotky inzulínu. Jednotka je buď mg/dl/U, nebo mmol/l/U. Bez přepočtu tyto hodnoty nejsou stejné!

**Keystore (nebo JKS)** (úložiště klíčů) = úložiště klíčů Java (Java KeyStore), tedy šifrovaný soubor, ve kterém jsou uložené vaše osobní vývojářské certifikáty a klíče potřebné pro sestavení **AAPS** (i pro každé další sestavení).

**LGS** = Low Glucose Suspend, ochrana před nízkou glykémií. Viz [Wiki - Ochrana před nízkou glykémií](#KeyAapsFeatures-LGS)

**LineageOS** = svobodný operační systém s otevřeným zdrojovým kódem pro chytré telefony atd. Pokud používáte Accu-Chek Combo, viz [Wiki - Pumpa Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** (soubory záznamů) = záznamy **AAPS** o akcích uživatele (užitečné pro řešení problémů a ladění). Další informace → [Wiki - „Zpřístupnění log souborů“](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximální celkové IOB. Je to bezpečnostní funkce, která brání tomu, aby **AAPS** podal více inzulínu, než dovolují nastavení uživatele. Další informace → [Wiki - „Maximální celkové IOB, které OpenAPS nemůže překročit“](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = bezpečnostní funkce: výchozí rychlost vstřebávání sacharidů, která se použije, když se vstřebávání nedá určit z reakce glykémie uživatele. Další informace → [Wiki - „Předvolby“](#Preferences-min_5m_carbimpact).

**Nightscout** = open source projekt pro přístup k datům z **CGM** a pro reporty z nich. Centrální úložiště dat z **AAPS** uživatele. Umí vytvářet reporty z historických dat uživatele v **Nightscoutu**: odhadované HbA1c, čas v cíli nebo hledání vzorců v datech pomocí percentilového grafu atd.

**Nightscout** → viz také **Nightscout Reporter**. To je užitečné hlavně pro rodiče, kteří sledují léčbu diabetu svého dítěte.

**Nightscout Reporter Tool** = nástroj, který z dat webové aplikace Nightscout vytváří reporty ve formátu PDF. Viz „Nightscout Reporter“, „NS Reporter“ na Facebooku.

**NSClient** (**NSClientV3**) = plugin **AAPS**, který synchronizuje data s **Nightscoutem** (**Konfigurace** → **Komunikace**). Není to totéž jako **AAPSClient**, aplikace pro sledující. Další informace → [Wiki - „NSClient“](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, předchozí projekt, na kterém AAPS stojí.

**Open Loop system** (otevřená smyčka) = funkce **AAPS**, která doporučuje úpravy, ale uživatel je musí v **AAPS** provést ručně. Další informace → [Wiki - „Otevřená smyčka“](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detekce citlivosti a „referenční implementace návrhu, verze 0/1“. Je to klíčový algoritmus, na kterém stojí OpenAPS (Wiki - detekce citlivosti).

**OS-AID** = Open-Source Automated Insulin Delivery, automatizované podávání inzulínu s otevřeným zdrojovým kódem. Systém **AID** postavený na softwaru s otevřeným zdrojovým kódem, například **AAPS**, **OpenAPS**, Loop nebo Trio. Tyto systémy nejsou oficiálně schválené zdravotnickými úřady (FDA, NHS atd.) → viz také **AID**.

**Peak time** (vrchol) = čas, kdy podaný inzulín působí nejvíce. Další informace → [Wiki - „Doba působnosti inzulínu (DIA) a vrchol“](#Config-Builder-insulin-dia).

**PH** = Pump History, historie pumpy. Najdete ji v historii ošetření v **AAPS**: otevřete **nabídku** (☰) vlevo nahoře na hlavní obrazovce a zvolte **Ošetření**.

**Predictions** (předpovědi) = předpovědi budoucí **BG** podle různých výpočtů. Další informace → [Wiki - „Predikční křivky“](#aaps-screens-prediction-lines).

**Profile** (profil) = základní nastavení léčby uživatele (bazální dávka, **DIA**, **IC**, **ISF**, cílová **BG**). **AAPS** používá jen profily vytvořené v **AAPS** (**Spravovat** → **Profil**), ale **profily** z **Nightscoutu** lze do **AAPS** zkopírovat (synchronizovat). Další informace → [Wiki - „Váš profil AAPS“](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (přepnutí profilu) = (dočasné) přepnutí **profilu** uživatele na jiný **profil** uložený v **AAPS**.

**Profile Percentage** (procento profilu) = (dočasné) procentuální zvýšení nebo snížení **profilu** uživatele na zvolenou dobu.

**RES** = kontrolka zpožděné výměny zásobníku ve stavovém řádku hlavní obrazovky **AAPS** → viz také **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardwarové zařízení, které propojuje Bluetooth Low Energy (BLE) s bezdrátovou komunikací na 916 MHz (pro staré pumpy Medtronic) nebo 433 MHz (pro pumpy Omnipod Eros).

**SAGE** = sensor age, stáří senzoru. Zobrazuje se na hlavní obrazovce **AAPS** a v **Nightscoutu** podle záznamů péče **Výměna senzoru** uživatele → viz také **Nightscout**.

**SEN** = kontrolka zpožděné výměny senzoru ve stavovém řádku hlavní obrazovky **AAPS** → viz také **BAT** / **CAN** / **RES**.

**Sensitivity detection** (detekce citlivosti) = výpočet citlivosti na inzulín, která se mění kvůli pohybu, hormonům atd. viz také → [DIABETTECH - „Autosens“](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (šum senzoru) = nestabilní hodnoty z **CGM**, které vedou ke „skákajícím“ hodnotám **BG**. Další informace → [Wiki - „Vyhlazování dat glykémie“](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Funkce **AAPS**, která podává inzulín rychleji, aby upravila **BG**. Další informace → [Wiki - „**SMB**“](#Open-APS-features-super-micro-bolus-smb) a viz také **UAM**.

**Super bolus** = přesun bazálního inzulínu do bolusu pro rychlejší úpravu **BG**.

**TBB** = total base basal, celkový základní bazál (součet bazální dávky za 24 hodin) → viz také **TBR** / **TDD**.

**TBR** = temporary basal rate, dočasný bazál → viz také **TBB** / **TDD**.

**TDD** = total daily dose, celková denní dávka (bolus + bazál za den, v aplikaci CDD) → viz také **TBB** / **TBR**.

**TT** = temporary target, dočasný cíl (v aplikaci DC): dočasné zvýšení nebo snížení cílové **BG** (rozsahu) uživatele, např. kvůli jídlu nebo sportu. Další informace → [Wiki - „Dočasné cíle“](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals, neoznámená jídla. Detekce výrazného zvýšení **BG** kvůli jídlu, adrenalinu nebo jiným vlivům a pokus o jeho korekci. Další informace → [Wiki - „UAM“](#enable-uam) a viz také **SMB**.

**Virtual pump** (virtuální pumpa) = funkce **AAPS**, se kterou si uživatel může vyzkoušet funkce **AAPS**. Hodí se také pro lidi s diabetem, jejichž pumpa nemá v **AAPS** ovladač pro smyčku → viz také **Open Loop**.

**Wallpaper** (tapeta) = obrázek na pozadí **AAPS**, viz stránka o telefonech.

**xDrip** = software s otevřeným zdrojovým kódem pro čtení dat ze systémů **CGM**.

**Zero-temp** (nulový dočasný bazál) = dočasný bazál 0 % (žádný bazální inzulín).

→ viz také [dokumentace OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)