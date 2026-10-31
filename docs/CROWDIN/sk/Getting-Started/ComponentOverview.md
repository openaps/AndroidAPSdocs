# Prehľad komponentov

**AAPS** nie je iba (vlastnoručne zostavená) aplikácia; je to jeden z niekoľkých modulov vášho systému s uzavretým okruhom. Skôr než sa rozhodnete pre komponenty, je dobré pozrieť si ich dokumentáciu.

![Prehľad komponentov](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Bezpečnostné funkcie **AAPS** opísané v tejto dokumentácii stoja na bezpečnostných funkciách hardvéru, z ktorého je váš systém zostavený. Na uzavretie okruhu automatického dávkovania inzulínu je mimoriadne dôležité, aby ste používali iba inzulínovú pumpu a CGM, ktoré sú testované, plne funkčné a schválené oficiálnymi orgánmi vašej krajiny. Úpravy hardvéru alebo softvéru týchto komponentov môžu spôsobiť neočakávané dávkovanie inzulínu, čo predstavuje značné riziko pre používateľa. Ak nájdete alebo vám ponúknu pokazené, upravené alebo svojpomocne vyrobené inzulínové pumpy alebo prijímače CGM, **nepoužívajte** ich na vytvorenie systému **AAPS**.

Okrem toho je rovnako dôležité používať iba originálne pomôcky, ako sú zavádzače, kanyly a zásobníky na inzulín schválené výrobcom na použitie s vašou pumpou alebo systémom CGM. Používanie netestovaných alebo upravených pomôcok môže spôsobiť nepresnosť CGM a chyby v dávkovaní inzulínu. Inzulín je pri nesprávnom dávkovaní veľmi nebezpečný – nezahrávajte si so životom manipuláciou s týmito zariadeniami.

V neposlednom rade nesmiete užívať SGLT-2 inhibítory (gliflozíny), pretože znižujú glykémiu nepredvídateľne. Kombinácia so systémom, ktorý znižuje bazálne dávky s cieľom zvýšiť glykémiu, je obzvlášť nebezpečná, pretože kvôli gliflozínu k tomuto zvýšeniu glykémie nemusí dôjsť a môže nastať nebezpečný stav nedostatku inzulínu. [Viac informácií tu](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Potrebné moduly

### Dobrý individuálny dávkovací algoritmus pre liečbu vašej cukrovky

Hoci to nie je nič, čo treba vytvoriť alebo kúpiť, je to asi najviac podceňovaný „modul“ – ale je nevyhnutný. Keď necháte algoritmus pomáhať s liečbou diabetu, musí poznať správne nastavenia, aby nerobil vážne chyby. Aj keď vám stále chýbajú ďalšie moduly, svoj **profil** si už teraz môžete overiť a upraviť v spolupráci s vaším diabetológom.

**Profil** obsahuje:

- BR (bazálne dávky): podávanie bazálneho inzulínu;
- ISF (faktor citlivosti na inzulín): o koľko sa zníži vaša glykémia po 1 jednotke inzulínu;
- CR (sacharidový pomer): koľko gramov sacharidov pokrýva 1 jednotka inzulínu.

Väčšina používateľov okruhu používa cirkadiánne BR, ISF a CR, ktoré počas dňa prispôsobujú citlivosť na inzulín podľa hormónov.

Okrem **profilu** musíte nastaviť aj svoj **inzulín** v **Spravovať → Nastavenia inzulínu** vrátane jeho DIA (doba pôsobenia inzulínu) – pozrite [Nastavenia inzulínu](#Config-Builder-insulin-dia).

Viac informácií o **profile** [na príslušnej stránke](../SettingUpAaps/YourAapsProfile.md).

### Telefón

Pozrite si samostatnú stránku [Telefóny](../Getting-Started/Phones.md).

### Inzulínová pumpa

Pozrite si samostatnú stránku [Kompatibilné pumpy](../Getting-Started/CompatiblePumps.md).

**Výhody a nevýhody niektorých modelov púmp**

Combo, Insight a staršie Medtronic sú solídne pumpy s možnosťou uzavretého okruhu. Combo má výhodu v podobe oveľa väčšieho počtu typov infúznych setov, z ktorých si môžete vybrať, pretože má štandardný Luer-Lock. A batéria je štandardná, kúpite ju na každej benzínovej pumpe, v obchode s potravinami otvorenom 24 hodín denne a ak ju naozaj potrebujete, môžete si ju ukradnúť/požičať z diaľkového ovládača v hotelovej izbe ;-).

Výhody DanaR/RS a Dana-i oproti Combo ako preferovanej pumpe sú však:

- Počiatočné párovanie je s Dana-i/RS jednoduchšie. Toto ale obvykle robíte len raz, takže to má vplyv, iba ak chcete testovať novú funkciu s rôznymi pumpami.
- Zatiaľ Combo pracuje s analýzou obrazovky. Vo všeobecnosti to funguje výborne, ale je to pomalé. Pre uzavretý okruh to nie je príliš dôležité, keďže všetko prebieha na pozadí. Pumpa však musí byť pripojená oveľa dlhšie, a preto je aj viac času, keď sa spojenie BT môže prerušiť. To nie je jednoduché, ak počas bolusu a varenia odídete od telefónu.
- Combo vibruje na konci TBR, DanaR vibruje (alebo pípa) na SMB. V noci budete pravdepodobne viac používať TBR ako SMB.  Dana-i/RS sa dá nastaviť tak, aby nepípala ani nevibrovala.
- Pumpy Dana-i/RS načítajú históriu vrátane sacharidov za pár sekúnd. Vďaka tomu môžete ľahko vymeniť telefón aj offline a pokračovať v okruhu, hneď ako prídu nejaké hodnoty z CGM.
- Všetky pumpy, s ktorými **AAPS** dokáže komunikovať, sú pri dodaní vodotesné. Iba pumpy Dana sú navyše „vodotesné so zárukou“ vďaka utesnenému priestoru pre batériu a systému plnenia zásobníka.

### Zdroj glykémie

Pozrite si samostatnú stránku [Kompatibilné CGM](../Getting-Started/CompatiblesCgms.md).

### Súbor .apk **AAPS**

Hlavná zložka systému. Ak chcete aplikáciu nainštalovať, musíte si najprv sami zostaviť súbor .apk. Pokyny sú [tu](../SettingUpAaps/BuildingAaps.md).

### Reportovací server

Reportovací server zobrazuje vaše údaje o glykémii a ošetreniach a vytvára správy na podrobnú analýzu. V súčasnosti sú na použitie s AAPS k dispozícii dva reportovacie servery: [Nightscout](#SettingUpTheReportingServer-nightscout) a [Tidepool](#SettingUpTheReportingServer-tidepool). Oba umožňujú zobraziť údaje o vašom diabete v čase a poskytujú štatistiky o **čase v rozsahu** (TIR) a ďalšie ukazovatele.

Reportovací server je nezávislý od ostatných modulov. Ak nechcete používať reportovací server, mali by ste vedieť, že na dlhodobé používanie **AAPS** nie je povinný. Jeden si však aj tak musíte nastaviť, pretože je potrebný na splnenie [**Cieľa 1**](#objectives-objective1).

Ďalšie informácie o nastavení reportovacieho servera nájdete [tu](../SettingUpAaps/SettingUpTheReportingServer.md).

## Voliteľné moduly

### Inteligentné hodinky

Môžete si vybrať akékoľvek inteligentné hodinky so systémom **Wear OS 3** alebo novším. Podrobnosti nájdete na stránke [Inteligentné hodinky a AAPS](../Getting-Started/Watches.md).

Používatelia vytvárajú [zoznam testovaných telefónov a hodiniek](#Phones-list-of-tested-phones). Existujú rôzne ciferníky na použitie s **AAPS**, ktoré nájdete [tu](../WearOS/WearOsSmartwatch.md).

### xDrip

Aj keď aplikáciu xDrip nepotrebujete ako **zdroj glykémie**, môžete ju aj tak používať, napríklad na alarmy alebo na iné zobrazenie glykémie. Môžete mať toľko alarmov, koľko chcete, nastaviť čas, kedy má byť alarm aktívny, zvoliť, či môže prekonať tichý režim, atď. Niektoré informácie o xDrip nájdete [tu](../CompatibleCgms/xDrip.md). Upozorňujeme, že dokumentácia k tejto aplikácii nie je vždy aktuálna, pretože sa aplikácia rýchlo mení.

## Čo robiť počas čakania na moduly

Niekedy chvíľu trvá, kým získate všetky moduly na uzavretie okruhu. Ale žiadny strach, počas čakania sa dá robiť veľa vecí. Je **nevyhnutné** skontrolovať a (v prípade potreby) upraviť bazálne dávky (BR), inzulínovo-sacharidový pomer (IC), faktory citlivosti na inzulín (ISF) atď. A možno je otvorený okruh dobrý spôsob, ako otestovať systém a zoznámiť sa s **AAPS**. V tomto režime systém **AAPS** poskytuje odporúčania, ktoré môžete vykonať manuálne.

Môžete pokračovať v čítaní dokumentácie tu, spojiť sa s inými používateľmi okruhu online alebo osobne, [čítať](../UsefulLinks/BackgroundReading.md) dokumentáciu alebo to, čo píšu iní používatelia okruhu (aj keď musíte byť opatrní: nie všetko je správne alebo vhodné, aby ste to po nich opakovali).

**Hotovo?** Ak máte všetky komponenty **AAPS** pokope (gratulujeme!) alebo aspoň dosť na to, aby ste mohli začať v režime otvoreného okruhu, mali by ste si pred každým novým cieľom najprv prečítať [popis cieľov](../SettingUpAaps/CompletingTheObjectives.md) a nastaviť svoj hardvér.
