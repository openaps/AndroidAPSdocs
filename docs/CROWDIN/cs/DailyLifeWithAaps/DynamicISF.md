(Open-APS-features-DynamicISF)=
# Dynamická ISF (DynISF)

Až dosud byla u **AMA** a **SMB** citlivost **ISF** nastavena v **profilu** a pro každé nastavené období dne byla statická. Ve skutečnosti ale **ISF** člověka není tak statická a mění se podle úrovně **glykémie**: při vysoké glykémii bude uživatel potřebovat více inzulínu, aby snížil **glykémii** o 50 mg/dl / 3 mmol/l, než při nižší **glykémii**. [Autosens](#Open-APS-features-autosens) byl první algoritmus, který se snažil tento problém řešit úpravou **ISF** mimo dobu jídla.

**Dynamická ISF** (také nazývaná **DynISF**) má stejný účel, ale je pokročilejší, protože ji lze používat po celou dobu. Doporučuje se jen pokročilým uživatelům, kteří dobře zvládají ovládání a sledování **AAPS**. Než ji vyzkoušíte, přečtěte si níže část [Na co myslet při zapnutí Dynamické ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automatizace** by se měly vždy používat opatrně. To platí zvlášť u **Dynamické ISF**.

Při použití **Dynamické ISF** vypněte každou dočasnou změnu **profilu** nastavenou jako pravidlo **Automatizace**, protože by **Dynamická ISF** byla při korekčních bolusech příliš agresivní a vedlo by to k hypoglykémii. Přesně k tomu **Dynamická ISF** slouží, a proto není potřeba **AAPS** pomocí Automatizace říkat, aby při vysoké **glykémii** podal více inzulínu.

```

Aby bylo možné **Dynamickou ISF** používat, musí databáze **AAPS** obsahovat alespoň 7 dní dat uživatele z **AAPS**.

## Co dělá Dynamická ISF?

**Dynamická ISF** dynamicky upravuje citlivost na inzulín (**ISF**) na základě uživatelovy:

- celkové denní dávky inzulínu (**TDD**) a
- aktuálních a predikovaných hodnot glykémie.

Při použití **Dynamické ISF** se hodnoty **ISF** zadané v **profilu** už vůbec nepoužívají, jen jako záloha, když v databázi **AAPS** není dost dat o TDD (*např.* po nové instalaci aplikace).

**SMB/AMA** – příklad uživatelova **profilu** se statickou **ISF**, kterou nastavil uživatel a kterou používají **SMB** a **AMA**.

![Statická ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamická ISF** – příklad uživatelovy **ISF**, která se mění podle výpočtu **Dynamické ISF**.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Část zakroužkovaná červeně ukazuje: `profile ISF` -> `ISF as calculated by DynISF` (ISF z profilu a ISF vypočtená pomocí DynISF). <br/> Klepnutím na tuto část se otevře dialog s dalšími informacemi, například s **ISF** použitou pro kalkulačku a absorpci sacharidů (viz [Další použití ISF](#dynisf-other-usages-of-isf) níže).

Hodnotu **DynISF** lze zobrazit také v grafu: klepněte na **Přidat graf** pod grafy na hlavní obrazovce a vyberte **VSEN** (proměnlivá citlivost). Zobrazuje se jako bílá čára (dole na obrázku výše).

## Jak se Dynamická ISF počítá?

**Dynamická ISF** k určení **ISF** používá model Chrise Wilsona místo statické hodnoty **ISF**, kterou si uživatel nastavil v **profilu**. Podrobné vysvětlení najdete zde: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c) (anglicky).

Použitá rovnice **Dynamické ISF** je: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Proměnné použité v této rovnici jsou popsány níže.<br/> Poznámka: `Ln` znamená přirozený logaritmus, matematickou funkci.

Implementace používá výše uvedenou rovnici k výpočtu aktuální **ISF** a v predikcích oref1 [pro **IOB**, **ZT** (nulový dočasný bazál) a **UAM**](#aaps-screens-prediction-lines). Používá se také pro **COB** a v bolusové kalkulačce (viz [Další použití ISF](#dynisf-other-usages-of-isf) níže).

### TDD (celková denní dávka)
TDD používá kombinaci těchto hodnot:
1.  průměrná **TDD** za 7 dní;
2.  **TDD** z předchozího dne a
3.  vážený průměr spotřeby inzulínu za posledních osm (8) hodin, přepočtený na 24 hodin.

**TDD** použitá ve výše uvedené rovnici se skládá z každé z výše uvedených hodnot vahou jedné třetiny.

### Faktor úpravy Dynamické ISF

Nastavuje se v uživatelových **Nastaveních** a slouží k tomu, aby byla **Dynamická ISF** více nebo méně agresivní. Viz část [Předvolby](#dyn-isf-preferences) níže.

### Dělitel inzulínu
Dělitel inzulínu závisí na vrcholu použitého inzulínu a je nepřímo úměrný času vrcholu. Pro Lyumjev je tato hodnota 75, pro Fiasp 65 a pro běžný rychle působící inzulín 55.

### ISF podle predikované glykémie pro rozhodování o dávkách

Dynamická citlivost se počítá z hodnoty **aktuální glykémie** a v **AAPS** se zobrazuje jako vaše aktuální ISF. Při výpočtu dávek ale algoritmus oref1 počítá a používá **budoucí ISF**.

Je to proto, aby se nepodalo příliš mnoho inzulínu, když je **glykémie** nízká nebo se očekává, že klesne.

**Budoucí ISF** používá stejný vzorec, jak je popsán výše, jen místo **aktuální glykémie** může použít **minimální predikovanou glykémii**. **Minimální predikovaná glykémie**, [jak ji počítá oref1](#aaps-screens-how-predictions-become-a-dosing-decision), je nejnižší hodnota, na kterou by podle predikcí měla glykémie během celého průběhu predikcí klesnout.

* Pokud je aktuální **glykémie** nad cílem <br/> **a** pokud je **glykémie** stabilní, v rozmezí +/- 3 mg/dl:<br/>ve vzorci se jako glykémie použije: `average(minimum predicted BG, current BG)`.
* Pokud je konečná **glykémie** nad cílem a glykémie roste,<br/>  
  **nebo** je konečná **glykémie** vyšší než aktuální **glykémie**:<br/>ve vzorci se jako glykémie použije: `current BG`.
* Jinak:<br/>ve vzorci se jako glykémie použije: `minimum predicted BG`.

Pro zjednodušené vysvětlení se podívejte na snímek obrazovky níže, který tuto situaci ukazuje. Oranžové tečky používají **predikovanou glykémii**, fialové tečky **průměr (predikovaná glykémie, aktuální glykémie)** a modré tečky **aktuální glykémii**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Další použití ISF

### ISF a absorpce COB

Jak je popsáno na stránce [Kalkulace COB](../DailyLifeWithAaps/CobCalculation.md), absorpce COB se obvykle počítá tímto vzorcem:   
`absorbed_carbs = deviation * ic / isf`  
Při použití **Dynamické ISF** je zde použitá **ISF** průměrem hodnot Dynamické ISF za posledních 24 h.

### ISF v bolusové kalkulačce

Při použití [bolusové kalkulačky](#aaps-screens-bolus-wizard) se **ISF** používá k přidání korekce, pokud je **glykémie** nad cílem.

Při použití **Dynamické ISF** je zde použitá **ISF** průměrem hodnot Dynamické ISF za posledních 24 h.

(dyn-isf-preferences)=
## Nastavení

Pro aktivaci zaškrtněte **Použít dynamickou citlivost** v [Nastavení > OpenAPS SMB](#Preferences-openaps-smb-settings). Po zapnutí se zpřístupní nová nastavení.

![Nastavení Dynamické ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Faktor úpravy DynamicISF
**Dynamická ISF** funguje podle jednoho pravidla, které má platit pro všechny. To znamená, že lidé se stejnou **TDD** by měli mít stejnou citlivost. Protože každý uživatel má svou vlastní citlivost, **faktor úpravy** umožňuje nastavit, zda je uživatel na inzulín citlivější, nebo méně citlivý než „standardní“ člověk.

**Faktor úpravy** je hodnota mezi 1 % a 300 %. Funguje jako násobitel hodnoty **TDD**.

* Zvýšení této hodnoty nad 100 % dělá **DynISF** agresivnější: hodnoty **ISF** se *zmenší* (_tj._ ke snížení **glykémie** o malou hodnotu je potřeba více inzulínu)
* Snížení této hodnoty pod 100 % dělá **DynISF** méně agresivní: hodnoty **ISF** se zvětší (_tj._ ke snížení **glykémie** o malou hodnotu je potřeba méně inzulínu).

**Faktor úpravy** se mění také při aktivaci [**přepnutí profilu** s procentem](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Nižší **procento profilu** sníží **faktor úpravy** a vyšší **procento profilu** ho naopak zvýší.

Například pokud je váš **faktor úpravy** 80 % a provedete **přepnutí profilu** na 80 %, výsledný **faktor úpravy** bude `0.8*0.8=0.64`.

To znamená, že při použití **DynISF** můžete pomocí **procenta profilu** dočasně ručně doladit svou citlivost. To se hodí například při fyzické aktivitě (nižší procento), nemoci (vyšší procento) apod.

### Práh LGS

Hodnota **glykémie**, pod kterou se podávání inzulínu pozastaví (pozastavení při nízké glykémii). Výchozí hodnota používá standardní model cíle. Uživatel může tuto hodnotu nastavit mezi 60 mg/dl (3,3 mmol/l) a 100 mg/dl (5,5 mmol/l). Hodnoty pod 65/3,6 vedou k použití výchozího modelu.

### DynamicISF upravuje citlivost

Toto nastavení (*„Upravit výpočty citlivosti při použití DynamicISF“*) nahrazuje Autosens a jako základ pro zvyšování a snižování bazální dávky používá poměr **TDD** za posledních 24 h / **TDD** za 7 dní, stejně jako standardní Autosens. Tato vypočtená hodnota se také používá k úpravě cíle, pokud jsou zapnuté volby pro úpravu cíle podle citlivosti. Na rozdíl od Autosens tato volba neupravuje hodnoty **ISF**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Na co myslet při zapnutí Dynamické ISF

* **Dynamická ISF** se doporučuje jen pokročilým uživatelům, kteří dobře zvládají ovládání a sledování **AAPS**. Uživatelé by ideálně měli mít dobrou kontrolu se **SMB**, než přejdou na **Dynamickou ISF**.
* Jak bylo uvedeno výše, vypněte všechny [**Automatizace**](../DailyLifeWithAaps/Automations.md), které podle **glykémie** aktivují **procento profilu**, protože by to bylo příliš agresivní a mohlo by se podat příliš mnoho inzulínu! To už je součástí algoritmu **Dynamické ISF**.
* [Procento profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) se při výpočtu Dynamické ISF bere v úvahu (viz [Faktor úpravy Dynamické ISF](#dyn-isf-adjustment-factor) výše). Používat **procento profilu** jiné než 100 % po dlouhou dobu není dobrá praxe. Pokud zjistíte, že se váš **profil** změnil, vytvořte nový **profil** s upravenými hodnotami, který nahradí **profil** s určitým procentem.
* **Dynamická ISF** nemusí fungovat u každého. Neočekávané výsledky můžete vidět hlavně tehdy, pokud se vás týká některá z těchto situací:
  * Proměnlivý životní styl (nepravidelné jídlo nebo fyzická aktivita)
  * TDD nebo citlivost se den ode dne výrazně liší.
* Neexistuje přesný návod, jak nastavit počáteční hodnotu **faktoru úpravy**. Jako výchozí bod ale platí: pokud jsou hodnoty ve vašem **profilu** správné, když jste v cílovém rozmezí a **glykémie** je stabilní, hodnota **DynISF** by měla být přibližně stejná jako hodnota, kterou jste předtím měli v **profilu**.<br/>Pokud vidíte, že je **Dynamická ISF** příliš agresivní, snižte **faktor úpravy**, a naopak.
* I když **DynISF** vůbec nepoužívá **ISF z profilu**, pokud si všimnete, že se vaše citlivost velmi liší od hodnoty uložené v **profilu**, měli byste ji tam průběžně aktualizovat. To se může hodit, pokud přijdete o data **AAPS** (_např._ nový telefon, nová verze **AAPS**…), protože se pak dalších 7 dní bude jako záloha používat vaše **ISF z profilu**.