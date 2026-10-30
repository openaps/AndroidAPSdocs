# Ladění profilu AAPS

```{admonition} This is NOT a medical advice
:class: warning
Při léčbě diabetu spolupracujte se svým lékařským týmem a řiďte se jeho radami.</br>
Tento návod použijte až poté, co jste [správně nastavili svůj **profil**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md) a splnili všechny cíle **AAPS**.
```

Tento návod vysvětluje logiku výsledků algoritmu OpenAPS s daným __profilem__ a říká, které hodnoty v **AAPS** můžete upravit, když pozorujete určité situace nebo vzorce. Níže uvedené rady k testování bazálu se mohou lišit od toho, co vám doporučuje váš lékařský tým.

Použití **uzavřené smyčky** může testování bazálu usnadnit a výrazně snížit riziko hypoglykémie, pokud je bazál ve vašem __profilu__ příliš silný.

## Změny nastavení profilu: jak postupovat

1. Ujistěte se, že jste si přečetli doporučená nastavení a rady __AAPS__ níže a že jim rozumíte. Pokud se těmito radami nebudete řídit, může být ladění obtížné a bude méně pravděpodobné, že získáte dobře vyladěný __profil__
2. Pečlivě **po několik dní** sledujte a porovnávejte, co se děje s vaší __glykémií__ a __IOB__.
3. Všímejte si vzorců v **AAPS**, které se objevují (téměř) každý den kolem stejného času.
4. Je důležité to dělat po několik dní. Rozhodování o úpravách __profilu__ podle dat z jediného dne obvykle vede ke špatným výsledkům.
5. Teprve když uvidíte opakující se vzorec, např. ve 13:00 prudký vzestup __glykémie__ nebo zápornou hodnotu __IOB__, začněte dělat malé změny ve svém __profilu__.
6. Je důležité měnit vždy jen jednu věc. Např. zvyšte bazál kolem 13:00 o 10 %.
7. Po každé změně je důležité několik dalších dní sledovat, jak ovlivnila vaši __glykémii__ a __IOB__.
8. Tento postup opakujte: sledujte, rozhodněte se a v případě potřeby znovu upravte

Nespěchejte, postupujte pomalu!

## Doporučená nastavení a rady při ladění bazálu

- Veškeré testování provádějte se [zapnutou uzavřenou smyčkou](#AapsScreens-loop-status).
- **<u>Vypněte</u> všechny [automatizace](../DailyLifeWithAaps/Automations.md)**
- **<u>Vypněte</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)**, aby se nesnažily upravovat váš profil.
- Během testování nedělejte žádné ruční zásahy (ruční bolus, dočasné cíle atd.): nechte systém používat pouze nastavení **profilu**.
- Pro [doplňkové grafy](#AapsScreens-section-g-additional-graphs): v grafu 1 zobrazte Zbývající inzulín, Zbývající sacharidy (a Změnu citlivosti). V grafu 2 zobrazte Odchylky a Vliv na hladinu glukózy. Když žádáte o radu, vždy je mějte na svých snímcích obrazovky.
- COB=0[*](#profiletuning-cob-zero)

Dalším okolnostem je ideálně dobré se vyhnout, protože ovlivňují data a mohou vést ke špatným závěrům:
- Žádná fyzická aktivita.
- Žádný stres.
- Žádná nemoc.
- Žádné extrémní počasí, například vysoké nebo nízké teploty.
- Žádné selhání pumpy nebo CGM.
- Žádné neoznámené sacharidy.

Dále si všimněte:
- Pokud je váš [bazální profil](#your-aaps-profile-basal-rates) správný, pak když jste na cílové glykémii s COB=0[*](#profiletuning-cob-zero) a IOB=0, zůstanete stále na cílové glykémii bez ohledu na **ISF** (**ISF** se používá pouze tehdy, když jste nad cílovou **glykémií**).
- Musíte kontrolovat aktuální **IOB**, ale také graf **IOB**, abyste viděli, jak se **IOB** vyvíjelo během posledních několika hodin.

(profiletuning-cob-zero)=

***COB = 0**

To znamená, že jídlo je strávené a v těle už nejsou žádné sacharidy.

**AAPS** může ukazovat [COB=0, i když ještě máte v těle sacharidy](../DailyLifeWithAaps/CobCalculation.md).

## Definice [profilu](../SettingUpAaps/YourAapsProfile.md)

Příliš **silný profil** znamená nějakou kombinaci těchto možností:

- Číslo [ISF](#your-aaps-profile-insulin-sensitivity-factor) je příliš malé.
- Číslo [bazálu](#your-aaps-profile-basal-rates) je příliš velké.
- Číslo [I:C](#your-aaps-profile-insulin-to-carbs-ratio) je příliš malé.

## Pozorování IOB

*Poznámka: IOB za několik dní můžete zobrazit také v grafu IOB v Loopalyzeru v reportech Nightscoutu.*

Pokud po několika dnech pozorujete tyto vzorce, zvažte následující změny:

### Kladné IOB

- Bazál v **profilu** nemusí být dost silný (může to být také kvůli věcem jako neoznámené jídlo, nemoc, špatné vstřebávání v místě vpichu atd.)

![Kladné IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### Záporné IOB

- Výchozí bazál je příliš silný.
- Může jít o vliv dřívějšího cvičení nebo fyzické aktivity.

![Záporné IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Předchozí jídlo: příliš velký bolus (který vedl k velmi dlouhému nulovému dočasnému bazálu)

![Záporné IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Pozorování cílové glykémie

### Glykémie drží vysoko

- Číslo __ISF__ je vysoké a ISF není dost silná (vypočtený inzulín je příliš slabý)

![Glykémie drží vysoko](../images/troubleshooting/profiletuning/StuckHigh.png)

- Bazál v __profilu__ nemusí být dost silný (**SMB** nemají dost „bazální zásoby“, kterou by mohly použít)
- Možná zasáhla bezpečnostní pojistka ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) a omezuje podávání inzulínu. Zkontrolujte to na obrazovce pluginu **APS** (**Konfigurace → APS → Otevřít plugin**); viz [SMB](#Open-APS-features-super-micro-bolus-smb).
- Technický problém: vstřebávání v místě vpichu, infuzní set, ...

### Glykémie drží nízko

- __ISF__ je příliš silná a její číslo je potřeba zvýšit
- Bazál v __profilu__ je příliš silný (pokud je zároveň IOB záporné)

### Horská dráha (vzestupy a poklesy)

- **ISF** je příliš silná? Viz [Váš profil AAPS](#your-aaps-profile-insulin-sensitivity-factor)

![Horská dráha](../images/troubleshooting/profiletuning/StrongISF.png)

## Pozorování glykémie po jídle

### Rychlý vzestup a glykémie jde vysoko

- Jídlo obsahuje rychlé sacharidy (například ovocný džus).
- Zvažte předstihový bolus nebo o něco dřívější předstihový bolus.
- Bolus (I:C nebo podané %) není dost silný.

![Vzestup vysoko](../images/troubleshooting/profiletuning/FastRise.png)

### Rychlý vzestup a pak glykémie klesá nízko

- Zvažte předstihový bolus, váš **profil** může být příliš agresivní (nadměrná korekce vzestupu)
- Bolus je příliš silný.



## [Jak vypočítat I:C](#your-aaps-profile-insulin-to-carbs-ratio)

1. Nejprve musíte mít ve svém **profilu** správně nastavený výchozí bazál.
2. Začněte na cílové glykémii, nejlépe bez záporného IOB.
3. Zapište si celkové podané množství inzulínu ze **Spravovat → Pumpa** (nebo z historie pumpy) a nazvěte ho počáteční inzulín C4. Velmi přesně odměřte známé množství sacharidů a zapište si čas začátku a počáteční IOB. Pak zadejte sacharidy a bolus do **AAPS** pomocí bolusové kalkulačky (s aktuálně nastaveným I:C). Nezapomeňte sacharidy sníst ;)
4. Po několika hodinách, když je COB=0[*](#profiletuning-cob-zero) a jste zpět na cílové glykémii, zapište si čas konce a konečné IOB, zkontrolujte stejně jako předtím celkové podané množství inzulínu a nazvěte ho konečný inzulín. *POZNÁMKA: Na délce časového úseku NEZÁLEŽÍ, pokud je delší než vaše trávení*
5. K rozdílu mezi počátečním a konečným množstvím inzulínu přičtěte/odečtěte rozdíl konečné IOB - počáteční IOB. Pak odečtěte bazální inzulín vypočtený z nastavení vašeho **profilu**.
6. Pokud je __glykémie__ v cíli, získáte celkové množství inzulínu použité na „strávení“ vašich sacharidů. Vypočítejte svůj **I:C**.

### Vysvětlení k výpočtu I:C

- S **profilem**, který má správně nastavenou výchozí bazální dávku, byste v jakémkoli časovém úseku měli zůstat na cílové glykémii a mít IOB blízko 0. Dostáváte pouze bazál z **profilu**.
- K tomu přidáte sacharidy a bolus. Počkejte, až tělo stráví všechny sacharidy a vy budete zpět na cílové **glykémii**. Spotřeba inzulínu bude součtem vašeho bazálu + inzulínu potřebného na sacharidy. Vypočítáte inzulín použitý na bazál (podle svého **profilu**) a zbytek bude inzulín použitý na strávení sacharidů.
- Pokud je časový úsek příliš krátký, zůstanou nestrávené sacharidy, a proto bude váš „inzulín potřebný na sacharidy“ špatně.
- Pokud je časový úsek příliš dlouhý, nic špatného se nestane. Využijete všechny sacharidy a dostanete více bazálu. Na konci odečtete bazál od celkového použitého inzulínu, takže delší časový úsek (s větší spotřebou bazálu) výsledek neovlivní.

Původně sepsal @Robby (Discord) jako tipy a triky, které pomáhají vyladit váš **profil AAPS**; zkontrolovala a upravila komunita (děkujeme!).
