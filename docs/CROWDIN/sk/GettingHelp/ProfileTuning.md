# Ladenie profilu AAPS

```{admonition} This is NOT a medical advice
:class: warning
Pri liečbe diabetu spolupracujte so svojím lekárskym tímom, ktorý vám poskytne podporu a rady.</br>
Tento návod používajte až potom, čo ste [správne nastavili svoj **profil**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md) a splnili všetky ciele **AAPS**.
```

Tento návod vysvetľuje logiku výsledkov algoritmu OpenAPS pri danom __profile__ a uvádza, ktoré hodnoty v **AAPS** môžete upraviť, keď spozorujete určité situácie alebo vzory. Nasledujúce rady o testovaní bazálu sa môžu líšiť od toho, čo vám odporúča váš lekársky tím.

Používanie **uzavretého okruhu** môže testovanie bazálu uľahčiť a môže výrazne znížiť riziko hypoglykémie, ak je bazál vo vašom __profile__ príliš silný.

## Zmena nastavení profilu: ako postupovať

1. Uistite sa, že ste si prečítali odporúčané nastavenia a rady __AAPS__ uvedené nižšie a že im rozumiete. Ak sa týmito radami nebudete riadiť, úpravy môžu byť problematické a je menšia šanca, že získate dobre vyladený __profil__
2. Starostlivo sledujte a porovnávajte **počas niekoľkých dní**, čo sa deje s vašou __glykémiou__ a __IOB__.
3. Všímajte si vzory v **AAPS**, ktoré sa objavujú (takmer) každý deň v rovnakom čase.
4. Je dôležité robiť to počas niekoľkých dní. Keď sa rozhodnutia o úprave __profilu__ robia podľa údajov z jediného dňa, výsledky bývajú zlé.
5. Až keď spozorujete opakujúci sa vzor, napr. o 13:00 vidíte prudký nárast __glykémie__ alebo zápornú hodnotu __IOB__, začnite robiť malé zmeny vo svojom __profile__.
6. Je dôležité meniť naraz iba jednu vec. Napr. zvýšte bazál okolo 13:00 o 10 %.
7. Po každej zmene je dôležité sledovať jej vplyv na __glykémiu__ a __IOB__ počas niekoľkých ďalších dní.
8. Tento postup opakujte: sledujte, rozhodnite sa a v prípade potreby znova upravte

Neponáhľajte sa, postupujte pomaly!

## Odporúčané nastavenia a rady pri ladení bazálu

- Všetky testy robte so [zapnutým uzavretým okruhom](#AapsScreens-loop-status).
- **Vypnite (<u>OFF</u>) všetky [automatizácie](../DailyLifeWithAaps/Automations.md)**
- **Vypnite (<u>OFF</u>) [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)**, aby sa nepokúšali prispôsobovať váš profil.
- Počas testovania nerobte žiadne ručné zásahy (ručný bolus, dočasné ciele atď.): nechajte systém používať iba nastavenia **profilu**.
- Pre [ďalšie grafy](#AapsScreens-section-g-additional-graphs): v grafe 1 použite Aktívny inzulín, Aktívne sacharidy (a Zmena citlivosti). V grafe 2 použite Odchýlky a Vplyv na glykémiu. Keď žiadate o radu, vždy ich majte na svojich snímkach obrazovky.
- COB=0[*](#profiletuning-cob-zero)

Ďalšie vplyvy, ktorým by ste sa mali pokiaľ možno vyhnúť, pretože ovplyvňujú údaje a môžu viesť k zlým záverom:
- Žiadne fyzické aktivity.
- Žiadny stres.
- Žiadna choroba.
- Žiadne extrémne počasie, napríklad vysoké alebo nízke teploty.
- Žiadne zlyhané relácie pumpy alebo CGM.
- Žiadne neohlásené sacharidy.

Všimnite si tiež:
- Ak je váš [profil bazálnych dávok](#your-aaps-profile-basal-rates) správny, potom keď ste na cieľovej glykémii s COB=0[*](#profiletuning-cob-zero) a IOB=0, zostanete stále na cieľovej glykémii bez ohľadu na váš **ISF** (**ISF** sa používa iba vtedy, keď ste nad cieľovou **glykémiou**).
- Musíte skontrolovať aktuálny **IOB**, ale aj graf **IOB**, aby ste videli, ako sa **IOB** vyvíjal počas niekoľkých posledných hodín.

(profiletuning-cob-zero)=

***COB = 0**

To znamená, že jedlo je strávené a v tele už nie sú žiadne sacharidy.

**AAPS** môže ukazovať [COB=0, aj keď ešte máte aktívne sacharidy](../DailyLifeWithAaps/CobCalculation.md).

## Definície [profilu](../SettingUpAaps/YourAapsProfile.md)

Príliš **silný profil** znamená určitú kombináciu nasledujúcich vecí:

- Hodnota [ISF](#your-aaps-profile-insulin-sensitivity-factor) je príliš malá.
- Hodnota [bazálu](#your-aaps-profile-basal-rates) je príliš veľká.
- Hodnota [I:C](#your-aaps-profile-insulin-to-carbs-ratio) je príliš malá.

## Pozorovanie IOB

*Poznámka: na zobrazenie IOB za niekoľko dní môžete použiť aj graf IOB v nástroji Loopalyzer v reportoch Nightscoutu.*

Ak po niekoľkých dňoch spozorujete nasledujúce vzory, zvážte tieto zmeny:

### Kladný IOB

- Bazál v **profile** možno nie je dosť silný (môže to byť aj kvôli veciam ako neohlásené jedlo, choroba, zlé vstrebávanie v mieste vpichu atď.)

![Kladný IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### Záporný IOB

- Predvolený bazál je príliš silný.
- Môže to byť účinok predchádzajúceho cvičenia/fyzickej aktivity.

![Záporný IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Predchádzajúce jedlo: príliš veľký bolus (čo viedlo k veľmi dlhému nulovému dočasnému bazálu)

![Záporný IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Pozorovanie cieľovej glykémie

### Glykémia zostáva vysoko

- Hodnota __ISF__ je vysoká a nie dosť silná (vypočítaný inzulín je príliš slabý)

![Glykémia zostáva vysoko](../images/troubleshooting/profiletuning/StuckHigh.png)

- Bazál v __profile__ možno nie je dosť silný (**SMB** nemajú dosť „zásoby bazálu“, ktorú by mohli použiť)
- Mohla zasiahnuť bezpečnostná poistka ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?), ktorá obmedzuje podávanie inzulínu. Overte to na obrazovke pluginu **APS** (**Konfigurácia → APS → Otvoriť plugin**); pozrite [SMB](#Open-APS-features-super-micro-bolus-smb).
- Technický problém: vstrebávanie v mieste vpichu, infúzny set, ...

### Glykémia zostáva nízko

- __ISF__ je príliš silný a jeho hodnotu treba zvýšiť
- Bazál v __profile__ je príliš silný (ak je aj IOB záporný)

### Horská dráha (výkyvy hore a dole)

- **ISF** je príliš silný? Pozrite si svoj [profil AAPS](#your-aaps-profile-insulin-sensitivity-factor)

![Horská dráha](../images/troubleshooting/profiletuning/StrongISF.png)

## Pozorovanie glykémie po jedle

### Rýchly nárast a glykémia stúpa vysoko

- Jedlo obsahuje rýchle sacharidy (napríklad ovocný džús).
- Zvážte bolus vopred (predbolus) alebo trochu skorší predbolus.
- Bolus (IC alebo podané %) nie je dosť silný.

![Nárast vysoko](../images/troubleshooting/profiletuning/FastRise.png)

### Rýchly nárast a potom glykémia klesá nízko

- Zvážte predbolus, váš **profil** môže byť príliš agresívny (nadmerná korekcia nárastu)
- Bolus je príliš silný.



## [Ako vypočítať I:C](#your-aaps-profile-insulin-to-carbs-ratio)

1. Najprv potrebujete mať v **profile** správne nastavený predvolený bazál.
2. Začnite na cieľovej glykémii, najlepšie bez záporného IOB.
3. Record the total insulin given in **Manage → Pump** (or pump history) and call it Start insulin. Veľmi presne odmerajte známe množstvo sacharidov a zapíšte si čas začiatku a počiatočný IOB. Then enter carbs and bolus information into **AAPS** using the wizard (with the current configured I:C). Nezabudnite sacharidy zjesť ;)
4. Po niekoľkých hodinách, keď je COB=0[*](#profiletuning-cob-zero) a ste znova na cieľovej glykémii, zapíšte si čas konca a konečný IOB. Rovnako ako predtým skontrolujte celkový podaný inzulín a nazvite ho konečný inzulín. *POZNÁMKA: Dĺžka časového úseku NIE je dôležitá, pokiaľ je dlhšia ako vaše trávenie*
5. K rozdielu medzi počiatočným a konečným množstvom inzulínu pripočítajte alebo od neho odpočítajte rozdiel konečný IOB - počiatočný IOB. Potom odpočítajte bazálny inzulín vypočítaný z nastavení vášho **profilu**.
6. Ak je __glykémia__ v cieli, dostanete celkový inzulín, ktorý sa spotreboval na „strávenie“ vašich sacharidov. Vypočítajte svoj **I:C**.

### Vysvetlenie výpočtov I:C

- S **profilom**, ktorý má správny predvolený bazál, by ste mali v akomkoľvek časovom úseku zostať na cieľovej glykémii a mať IOB blízko 0. Dostávate iba bazál z **profilu**.
- K tomu pridáte sacharidy a bolus. Počkajte, kým telo strávi všetky sacharidy a vy budete znova na cieľovej **glykémii**. Spotreba inzulínu bude súčet vášho bazálu + inzulínu potrebného na sacharidy. Vypočítate inzulín spotrebovaný na bazál (pomocou svojho **profilu**) a zvyšok bude inzulín spotrebovaný na strávenie sacharidov.
- Ak je časový úsek príliš krátky, zostanú nestrávené sacharidy, a preto bude váš „inzulín potrebný na sacharidy“ nesprávny.
- Ak je časový úsek príliš dlhý, nič zlé sa nestane. Spotrebujete všetky sacharidy a dostanete viac bazálu. Na konci od celkového spotrebovaného inzulínu odpočítate bazál, takže dlhší časový úsek (s väčšou spotrebou bazálu) výsledok neovplyvní.

Pôvodne to napísal @Robby (Discord) ako tipy a triky na vyladenie vášho **profilu AAPS**; komunita to skontrolovala a upravila (ďakujeme!).
