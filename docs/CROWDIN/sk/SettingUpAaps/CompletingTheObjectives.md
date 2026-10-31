# Plnenie cieľov

**AAPS** má sériu **Cieľov**, ktoré musíte splniť. Pomôžu vám postupne prejsť od základného otvoreného okruhu k hybridnému uzavretému okruhu a k plnej funkčnosti **AAPS**. Plnenie **Cieľov** má zaistiť, že ste:

* všetko v nastavení **AAPS** nakonfigurovali správne;
* spoznali základné funkcie **AAPS**; a
* získali základné pochopenie toho, čo váš systém dokáže, aby ste pri používaní **AAPS** získali istotu.

Keď je **AAPS** nainštalovaný prvýkrát, musíte splniť každý cieľ, až potom môžete prejsť na ďalší. S postupom cez jednotlivé **Ciele** sa postupne odomykajú nové funkcie.

**Ciele 1 až 8** vás prevedú od nastavenia **AAPS** v smartfóne až po „základný“ hybridný uzavretý okruh. Ich splnenie trvá približne 6 týždňov. Až po **Cieľ 5** môžete postupovať s virtuálnou pumpou (a medzitým podávať inzulín iným spôsobom). **Ciele 9 a 10** sú určené na vyskúšanie pokročilejších funkcií **AAPS**, ktoré majú zlepšiť kontrolu vášho diabetu. Ich splnenie bude trvať až 3 mesiace, možno aj dlhšie. Podrobnejší odhad potrebného času nájdete tu: [Ako dlho to bude trvať?](#preparing-how-long-will-it-take)

Okrem postupu cez **Ciele** môžete v prípade potreby svoj postup aj vymazať a [vrátiť sa k skoršiemu cieľu](#go-back-in-objectives).

## Zálohujte si nastavenia

```{admonition} Note
:class: note

Po splnení každého **Cieľa** odporúčame exportovať nastavenia **AAPS**!
```

Dôrazne odporúčame po splnení každého cieľa [exportovať nastavenia](../Maintenance/ExportImportSettings.md), aby ste nestratili žiadny postup v **AAPS**. Pri exporte vznikne **súbor s nastaveniami** (.json), ktorý by ste mali zálohovať na jedno alebo viac bezpečných miest (napr. Disk Google, pevný disk, príloha e-mailu _atď._). Tak bude každý postup v **AAPS** uložený. Ak stratíte telefón alebo omylom vymažete svoj postup, môžete súbor json znova načítať do **AAPS** importom nedávneho súboru s nastaveniami. Záložný **súbor s nastaveniami** potrebujete aj vtedy, keď z akéhokoľvek dôvodu potrebujete nový smartfón pre **AAPS** (nový model, stratený alebo pokazený telefón _atď._)

Súbor s **nastaveniami** uloží nielen váš postup v **Cieľoch**, ale aj všetky nastavenia **AAPS**, napríklad **maximálny bolus** _atď._

Ak nemáte zálohu nastavení a so smartfónom s **AAPS** sa niečo stane, budete musieť **Ciele** plniť znova od začiatku. Postup cez **Ciele** trvá dlho. Plniť ich znova, napríklad preto, že ste stratili smartfón, je situácia, ktorej sa treba radšej vyhnúť.

(objectives-objective1)=
## Cieľ 1: Nastaviť vizualizáciu a monitoring, analyzovať bazály a pomery

**Cieľ 1** vyžaduje, aby ste v **AAPS** urobili základné technické nastavenie. Kým tento krok nedokončíte, nemôžete pokračovať.

- Vyberte správny CGM/FGM v časti [Konfigurácia → Zdroj glykémie](#Config-Builder-bg-source). Viac informácií nájdete v časti [Zdroj glykémie](../Getting-Started/CompatiblesCgms.md).
- Vyberte správnu pumpu v časti [Konfigurácia → Pumpa](#Config-Builder-pump), aby vaša pumpa mohla komunikovať s **AAPS**. Vyberte **virtuálnu pumpu**, ak používate model pumpy, pre ktorý **AAPS** nemá ovládač pre okruh, alebo ak chcete prejsť prvé **Ciele** a inzulín zatiaľ podávať iným systémom. Viac informácií nájdete v časti [inzulínová pumpa](../Getting-Started/CompatiblePumps.md).
- Ak používate Nightscout:
  - Postupujte podľa pokynov na stránke [Nightscout](../SettingUpAaps/Nightscout.md), aby **Nightscout** mohol prijímať a zobrazovať údaje z **AAPS**.
  - Pozor: URL v **NSClientV3** musí byť **_bez_ „/api/v1/“** na konci – pozrite [Nastavenia → NSClientV3](#Preferences-nsclient).
- Ak používate Tidepool:
  - Postupujte podľa pokynov na stránke [Tidepool](../SettingUpAaps/Tidepool.md), aby **Tidepool** mohol prijímať a zobrazovať údaje z **AAPS**.

Poznámka – *Možno budete musieť počkať na ďalšiu hodnotu glykémie zo senzora, kým ju **AAPS** rozpozná.*

(objectives-objective2)=
## Cieľ 2: Naučte sa, ako ovládať AAPS

**Cieľ 2** vyžaduje vykonať niekoľko „úloh“, ako vidíte na snímke obrazovky nižšie. Každá úloha ukazuje svoj stav (**1**): oranžové „**Nedokončené**“ sa zmení na „**Hotovo, gratulujeme!**“, hneď ako **AAPS** zaznamená akciu. Ťuknite na **Nápoveda** (**2**) pod úlohou a otvorí sa príslušná dokumentácia, ak určitú akciu ešte nepoznáte.

![Snímka obrazovky cieľa 2](../images/Objective2_V2_5.png)

Úlohy na splnenie **Cieľa 2** sú:
- Nastavte **Profil** na 90 % na dobu 10 minút.
  - _Nápoveda_: Ťuknite na názov profilu na hlavnej obrazovke, otvorí sa obrazovka **Profil**. Potom použite tlačidlo **Aktivovať** (▶) a nastavte percento a trvanie. Viac informácií nájdete v časti [Prepnutie profilu a percento profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Poznámka_: **AAPS** neprijíma bazálne dávky nižšie ako 0,05 U/h. Ak váš **Profil** obsahuje dávky 0,06 U/h alebo nižšie, musíte si pred splnením tejto úlohy vytvoriť dočasný **Profil** s vyššími bazálnymi dávkami. Po splnení tejto úlohy sa prepnite späť na svoj bežný **Profil**.
- Simulujte „sprchovanie“ tak, že v **AAPS** na 1 hodinu [odpojíte pumpu](#AapsScreens-loop-status).
  - _Nápoveda_: stlačte ikonu okruhu na hlavnej obrazovke, otvorí sa dialóg okruhu. Potom vyberte trvanie v časti **Odpojiť pumpu**.
- „Sprchovanie“ ukončite opätovným pripojením pumpy.
  - _Nápoveda_: stlačte ikonu „odpojené“, znova sa otvorí dialóg okruhu, a vyberte **Znovu pripojiť pumpu**.
- Nastavte vlastný [**Dočasný cieľ**](../DailyLifeWithAaps/TempTargets.md) na dobu 10 minút.
  - _Nápoveda_: stlačte cieľový rozsah na hlavnej obrazovke, otvorí sa obrazovka dočasného cieľa.
- Zobrazte obsah pluginu **Okruh**.
  - _Nápoveda_: otvorte **Konfigurácia → Okruh** a ťuknite na „**Otvoriť plugin**“.
- Na grafe glykémie použite posúvanie alebo priblíženie, aby ste videli dlhšie alebo kratšie časové úseky.


(objectives-objective3)=
## Cieľ 3: Preukážte svoje znalosti

**Cieľ 3** vyžaduje, aby ste zložili test s výberom odpovedí, ktorý overuje vaše znalosti **AAPS**.

Pre niektorých používateľov je **Cieľ 3** najťažší zo všetkých cieľov. K otázkam si prosím čítajte dokumentáciu **AAPS**. Ak po hľadaní v dokumentácii **AAPS** naozaj neviete ďalej, vyhľadajte v skupine na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) alebo na [Discorde](https://discord.gg/4fQUWHZ4Mw) výraz „Objective 3“ (pretože vašu otázku už pravdepodobne niekto položil – a skupina na ňu odpovedala). Tieto skupiny vám môžu dať priateľskú radu alebo vás nasmerovať na správnu časť dokumentácie **AAPS**.

Medzitým:
- Aby ste v otvorenom okruhu znížili počet notifikácií a rozhodnutí (dočasných bazálnych dávok), ktoré musíte robiť, nastavte vo svojom **Profile** široký cieľový rozsah, _napr._ 90–150 mg/dl alebo 5,0–8,5 mmol/l.
- V noci môžete nastaviť širšiu hornú hranicu alebo dokonca otvorený okruh vypnúť.

Ak chcete pokračovať v **Cieli 3**, ťuknite na riadok otázky, otvorí sa. Pozorne si prečítajte každú otázku a vyberte odpoveď (odpovede).

Pri každej otázke môže byť správnych aj viac odpovedí! Ak vyberiete nesprávnu odpoveď, otázka sa na 1 hodinu zamkne a až potom sa k nej môžete vrátiť a odpovedať znova. Pri ďalšom pokuse sa poradie odpovedí môže zmeniť. Je to preto, aby ste ich čítali pozorne a naozaj pochopili, či je každá odpoveď správna, alebo nie.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
Do **AAPS** sa z času na čas pridávajú nové funkcie, pre ktoré môže byť potrebné pridať do **Cieľov** novú otázku, najmä do **Cieľa 3**. Preto bude každá nová otázka pridaná do **Cieľa 3** označená ako „nesplnená“, pretože **AAPS** bude vyžadovať, aby ste ju vyriešili. Nebojte sa: každý **Cieľ** je samostatný, takže **nestratíte existujúce funkcie AAPS**, pokiaľ ostatné **Ciele** zostanú splnené.
```

## Cieľ 4: Začať s otvoreným okruhom

Účelom **Cieľa 4** je spoznať, ako často **AAPS** porovnáva bazálnu dávku používateľa s glykémiou a odporúča úpravy dočasného bazálu. V rámci tohto **Cieľa** prvýkrát zapnete otvorený okruh, prijmete 20 navrhnutých zmien dočasného bazálu a v prípade potreby ich ručne nastavíte v pumpe. Pozorovať budete aj vplyv [**Dočasných cieľov**](../DailyLifeWithAaps/TempTargets.md). Ak ešte neviete, ako v **AAPS** nastaviť dočasný bazál, pozrite si akcie pumpy v paneli **Spravovať** ([Kam zmizla karta Akcie?](#screens-action-tab)).

Minimálny čas na splnenie tohto cieľa: **7 dní**. Je to povinná čakacia doba. Na ďalší **Cieľ** nemôžete prejsť skôr, ani keď už boli všetky zmeny bazálnej dávky vykonané.

- Otvorený okruh vyberiete tak, že stlačíte [ikonu okruhu](#AapsScreens-loop-status) na hlavnej obrazovke a ako režim prevádzky zvolíte **Otvorený okruh**.
- Počas 7 dní ručne vykonajte aspoň 20 návrhov dočasného bazálu: zadajte ich do svojej (fyzickej) pumpy a v AAPS potvrďte, že ste ich prijali. Skontrolujte, že sa tieto úpravy bazálnej dávky zobrazujú v **AAPS** aj v **Nightscoute**.
- Keď je to potrebné, používajte [**Dočasné ciele**](../DailyLifeWithAaps/TempTargets.md). Po liečbe hypoglykémie použite preddefinovaný „dočasný cieľ Hypo“, aby systém pri opätovnom vzostupe glykémie nekorigoval príliš.
- Ak ste v tejto chvíli ešte v [Jednoduchom móde](#preferences-simple-mode), teraz je asi vhodný čas ho vypnúť.

Aby ste v otvorenom okruhu znížili počet navrhovaných zmien bazálnej dávky, môžete stále použiť tipy opísané v [**Cieli 3**](#objective-3-prove-your-knowledge). Okrem toho môžete zmeniť minimálne percento odporúčaných zmien bazálnej dávky pomocou nastavenia „**Minimálna zmena v otvorenom okruhu**“ v **Nastavenia → Okruh**. Čím vyššia hodnota, tým menej upozornení na zmenu dostanete.

![Minimálna zmena požiadavky v otvorenom okruhu](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Nemusíte vykonať každé jedno odporúčanie systému!
```
(objectives-objective5)=
## Cieľ 5: Porozumieť otvorenému okruhu vrátane jeho odporúčaní dočasných bazálov

V rámci **Cieľa 5** začnete chápať, ako vznikajú odporúčania dočasného bazálu. Patrí sem [logika určovania bazálu](#aaps-screens-how-predictions-become-a-dosing-decision), sledovanie vplyvu pomocou [predikčných čiar na obrazovke **Prehľad** v AAPS](#aaps-screens-prediction-lines) (alebo v Nightscoute) a podrobné výpočty na obrazovke pluginu **OpenAPS SMB** (**Konfigurácia → APS → Otvoriť plugin**).

Odhadovaný čas na splnenie tohto cieľa: **7 dní**.

This **Objective** requires you to determine and set your “Maximum basal rate” (max-basal) value as described in [OpenAPS-features](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Túto hodnotu môžete nastaviť v [Nastavenia → OpenAPS SMB](#Preferences-openaps-smb-settings). V [Jednoduchom móde](#preferences-simple-mode) nastaví **AAPS** túto hodnotu automaticky a nemusíte ju meniť. Ak ešte používate virtuálnu pumpu, uistite sa, že toto bezpečnostné nastavenie je nastavené v **AAPS** aj vo vašej inzulínovej pumpe.

Možno budete chcieť nastaviť [cieľovú glykémiu v **Profile**](#profile-glucose-targets) vyššie ako zvyčajne, kým si nezvyknete na výpočty a nastavenia **AAPS**. Môžete skúsiť nastaviť **cieľovú glykémiu** vo svojom **Profile** v užšom rozsahu (napríklad široký 1 mmol/l alebo menej [20 mg/dl alebo menej]) a sledovať, ako sa systém správa.

![Značka stop](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Ak používate otvorený okruh s virtuálnou pumpou, **tu sa zastavte**. Na konci tohto **Cieľa** kliknite na overenie až vtedy, keď prejdete na „skutočnú“ pumpu, ktorá podáva inzulín.

```

![prázdna](../images/blank.png)

(objectives-objective6)=
## Cieľ 6: Spustiť uzavretý okruh s ochranou pred nízkou glykémiou (LGS)

![Výstražná značka](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Vysoké glykémie budete stále musieť korigovať sami (ručne korekciami pumpou alebo perom)!
```

V rámci **Cieľa 6** uzavriete okruh a zapnete jeho režim **Ochrana pred nízkou glykémiou** (LGS), pričom [max IOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) je nastavené na nulu. Na splnenie tohto **cieľa** musíte zostať v režime LGS 5 dní. Tento čas využite na kontrolu, či sú nastavenia vášho **Profilu** presné a či sa udalosti LGS nespúšťajú príliš často.

Minimálny čas na splnenie tohto cieľa: **5 dní**. Je to povinná čakacia doba. Na ďalší **Cieľ** nemôžete prejsť, kým tento čas neuplynie.

Je veľmi dôležité, aby bol váš aktuálny **Profil** (bazál, ISF, IC) dobre otestovaný skôr, ako uzavriete okruh v režime **LGS**. Nesprávne nastavenia **Profilu** môžu viesť k hypoglykémiám, ktoré budete musieť riešiť ručne. Presný **Profil** pomôže počas týchto 5 dní znížiť potrebu liečiť nízku glykémiu.

**Ak stále pozorujete časté alebo závažné epizódy nízkej glykémie, zvážte úpravu [DIA vášho typu inzulínu](#Config-Builder-insulin-dia), bazálu, ISF a sacharidových pomerov.** Pozrite si skupinu na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) alebo na [Discorde](https://discord.gg/4fQUWHZ4Mw), kde sa o tom veľa diskutuje.


Počas **Cieľa 6** **AAPS** prepíše nastavenie maxIOB na nulu. **Toto prepísanie skončí pri prechode na Cieľ 7.**

To znamená, že keď ste v **Cieli 6** a glykémia zo senzora klesá, **AAPS** vám zníži podávanie bazálneho inzulínu. Ale ak glykémia zo senzora stúpa, **AAPS** zvýši bazálnu dávku nad hodnotu vo vašom **Profile** iba vtedy, keď je **bazálne IOB** záporné v dôsledku predchádzajúceho **LGS**. Inak **AAPS** nezvýši bazál nad hodnotu vo vašom aktuálnom profile, ani keď glykémia stúpa. Táto opatrnosť má zabrániť hypoglykémiám, kým sa učíte používať **AAPS**.

**Preto musíte vysoké glykémie riešiť ručnými korekčnými bolusmi inzulínu.**

- Ak je vaše IOB záporné (pozrite snímku obrazovky nižšie), v **Cieli 6** sa môže spustiť dočasný bazál (TBR) > 100 %.

![Príklad záporného IOB](../images/Objective6_negIOB.png)

- Nastavte si cieľový rozsah o niečo vyššie, než by ste bežne chceli, len pre istotu a ako bezpečnostnú rezervu.
- Režim „Ochrana pred nízkou glykémiou“ zapnete tak, že stlačíte ikonu okruhu na hlavnej obrazovke a ako režim prevádzky zvolíte **Ochrana pred nízkou glykémiou**.
- Aktívne dočasné bazály sledujte podľa tyrkysového textu bazálu na obrazovke PREHĽAD alebo podľa tyrkysového zobrazenia bazálu v grafe na obrazovke PREHĽAD.
- Po liečbe hypoglykémie môžete dočasne zažiť prudké vzostupy glykémie, pretože pri opätovnom vzostupe nie je možné zvýšiť bazály.

(objectives-objective7)=
## Cieľ 7: Ladenie uzavretého okruhu, zvýšenie maxIOB nad 0 a postupné znižovanie cieľovej glykémie

Na splnenie **Cieľa 7** musíte uzavrieť okruh a zvýšiť [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). V **Cieli 6** bolo **maxIOB** automaticky nastavené na nulu kvôli režimu Ochrana pred nízkou glykémiou. Teraz to už neplatí. **AAPS** začne na korekciu vysokých glykémií používať vami nastavenú hodnotu maxIOB. V [Jednoduchom móde](#preferences-simple-mode) nastaví **AAPS** maxIOB automaticky a nemusíte ho meniť.

Minimálny čas na splnenie tohto cieľa: **1 deň**. Je to povinná čakacia doba. Na ďalší **Cieľ** nemôžete prejsť, kým tento čas neuplynie.

- **Uzavretý okruh** vyberiete tak, že stlačíte [ikonu okruhu](#AapsScreens-loop-status) na hlavnej obrazovke a ako režim prevádzky zvolíte **Uzavretý okruh**. Zostaňte v režime **Uzavretý okruh** počas 1 dňa.

- Pomaly zvyšujte hodnotu „Maximálny celkový IOB, ktorý OpenAPS nemôže prekročiť“ (v OpenAPS sa volá 'max-iob') nad 0, kým nenájdete nastavenia, ktoré vám najlepšie vyhovujú.

Predvolené odporúčanie pre toto nastavenie je „**priemerný bolus k jedlu + 3x maximálny denný bazál**“, kde „maximálny denný bazál“ je najvyššia hodinová hodnota v ktoromkoľvek časovom úseku dňa.

![maximálny denný bazál](../images/MaxDailyBasal2.png)

Toto odporúčanie berte ako východiskový bod. Ak toto pravidlo používate, ale pri stúpajúcej glykémii vám AAPS podáva príliš veľa inzulínu, možno budete musieť:
* znížiť hodnotu „Maximálny celkový IOB, ktorý OpenAPS nemôže prekročiť“;
* skontrolujte nastavenia svojho **Profilu** a robte vždy len jednu zmenu naraz.

Ak ste veľmi rezistentní na inzulín, môžete prípadne veľmi opatrne zvýšiť hodnotu **maxIOB**.

Keď si budete istí, aká hodnota **maxIOB** zodpovedá vášmu používaniu okruhu, znížte svoje **cieľové glykémie** na požadovanú úroveň.

(objectives-objective8)=
## Cieľ 8: Upraviť bazály a pomery, ak je to potrebné, a potom povoliť Autosens

V rámci tohto **cieľa** znova skontrolujete, ako funguje váš **Profil**, a funkciu [Autosens](#Open-APS-features-autosens) využijete ako ukazovateľ nesprávnych nastavení.

Minimálny čas na splnenie tohto cieľa: **7 dní**. Je to povinná čakacia doba. Na ďalší **Cieľ** nemôžete prejsť, kým tento čas neuplynie.

Na 7 dní povoľte [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) (v [Jednoduchom móde](#preferences-simple-mode) je povolený predvolene) a sledujte [bielu čiaru v grafe na obrazovke **Prehľad**](#AapsScreens-section-g-additional-graphs), ktorá ukazuje, ako vaša citlivosť na inzulín stúpa alebo klesá vplyvom pohybu, hormónov atď. Sledujte obrazovku pluginu **OpenAPS SMB** (**Konfigurácia → APS → Otvoriť plugin**), kde vidíte, ako **AAPS** podľa toho upravuje citlivosť, bazály a ciele.

Teraz je vhodný čas skontrolovať nastavenia [Detekcie citlivosti](#Config-Builder-sensitivity-detection). Svoju citlivosť môžete sledovať na hlavnej obrazovke v [doplnkovom grafe](#AapsScreens-section-g-additional-graphs).

Okrem toho môžete jednorazovo použiť [Autotune](#autotune-how-autotune-calculates-adjustments) a skontrolovať, či sú vaše bazály stále presné, alebo urobiť klasický bazálny test.

(objectives-objective9)=
## Cieľ 9: Povoliť ďalšie funkcie oref1 pre denné používanie, ako napríklad Super Micro Bolus (SMB)

V **Cieli 9** sa naučíte používať **„Super Micro Bolus (SMB)“** ako jednu zo základných funkcií. Po preštudovaní povinných materiálov budete dobre rozumieť tomu, čo sú SMB, ako fungujú a prečo sa po podaní SMB bazál dočasne nastaví na nulu (nulový dočasný bazál).

Minimálny čas na splnenie tohto cieľa: **28 dní**. Je to povinná čakacia doba. Na ďalší Cieľ nemôžete prejsť, kým tento čas neuplynie.

- [Časť o SMB v tejto dokumentácii](#Open-APS-features-super-micro-bolus-smb) a [popis oref1 v dokumentácii openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) si musíte prečítať, aby ste porozumeli **SMB** a princípu **nulového dočasného bazálu (zero-temping)**.
- Potom môžete [zvýšiť maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over), aby **SMB** fungovali účinnejšie. maxIOB teraz zahŕňa celé **IOB**, nielen nahromadený bazál. Tento limit pozastaví **SMB**, kým IOB neklesne pod túto hodnotu (_napr._ **maxIOB** je nastavené na 7 U a na pokrytie jedla podáte bolus 8 U: SMB sa pozastavia a nebudú sa podávať, kým **IOB** neklesne pod 7 U). Dobrý začiatok je nastaviť **maxIOB** = **priemerný bolus k jedlu + 3x maximálny denný bazál**, kde „maximálny denný bazál“ je najvyššia hodinová hodnota v ktoromkoľvek časovom úseku dňa. Pozrite si [cieľ 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets).
- Vyhodnoťte rýchlosť vstrebávania sacharidov a ak je podľa vás príliš pomalá alebo príliš rýchla, zvážte zmenu parametra „min_5m_carbimpact“ v [Nastavenia → Nastavenie vstrebávania sacharidov → min_5m_carbimpact](#Preferences-min_5m_carbimpact).

(objectives-objective10)=
## Cieľ 10: Automatizácia

**Automatizácie** sú dostupné, keď začnete **Cieľ 10**.

Minimálny čas na splnenie tohto cieľa: **28 dní**. Je to povinná čakacia doba. Na ďalší Cieľ nemôžete prejsť, kým tento čas neuplynie.

Najprv si prečítajte stránku dokumentácie [Automatizácia](../DailyLifeWithAaps/Automations.md).

Nastavte najjednoduchšie pravidlo automatizácie, napríklad spustenie notifikácie Androidu o niekoľko minút:
- Otvorte **Spravovať → Automatizácia** a ťuknite na tlačidlo **+** (**Pridať pravidlo**).
- Zadajte **Názov úlohy**, napríklad „Moja prvá notifikácia z automatizácie“.
- V časti **Podmienka** ťuknite na „**UPRAVIŤ**“.
  - Ťuknite na „**Pridať spúšťač**“ a vyberte „**Čas**“. **AAPS** vytvorí záznam na dnešok s aktuálnym časom.
  - Zmeňte čas tak, aby sa pravidlo spustilo o niekoľko minút.
  - Ťuknite na ikonu **Uložiť** (vpravo hore), vrátite sa k pravidlu.
- V časti **Akcia** ťuknite na „**PRIDAŤ**“ a vyberte „**Notifikácia**“.
  - Na karte akcie zadajte správu, napríklad „Moja prvá automatizácia“.
- Ťuknite na ikonu **Uložiť** (vpravo hore) a skontrolujte, že je pravidlo **Povolené**.
- Počkajte, kým čas spustí notifikáciu (podľa telefónu môže prísť o niekoľko minút neskôr)

Potom môžete skúsiť nastaviť užitočnejšiu **Automatizáciu**. Stránka dokumentácie uvádza niekoľko príkladov a snímky obrazovky „Automation“ môžete hľadať aj v skupine na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers). Samostatný kanál je aj v komunite na [Discorde](https://discord.gg/4fQUWHZ4Mw).

Ak napríklad jete každé ráno v rovnakom čase pred školou alebo prácou rovnaké raňajky, môžete vytvoriť **Automatizáciu**, napríklad „cieľ-pred-raňajkami“, ktorá 30 minút pred raňajkami nastaví o niečo nižší **Dočasný cieľ**. V takom prípade bude vaša podmienka pravdepodobne obsahovať „opakovaný čas“, ktorý sa skladá z výberu konkrétnych dní v týždni (pondelok, utorok, streda, štvrtok, piatok) a konkrétneho času (06:30). Akcia bude „Spustiť dočasný cieľ“ s nižšou cieľovou hodnotou než zvyčajne a s trvaním 30 minút.

## Keď sú všetky ciele splnené

Keď splníte všetky **Ciele**, zoznam ukáže každý z nich so zaškrtnutím a dátumom splnenia. Položka **Ciele** zmizne zo spodnej navigácie. Zoznam však môžete stále otvoriť cez **Konfigurácia → Obmedzenia → Ciele → Otvoriť plugin**.

![Všetky ciele splnené](../images/objectives/objectives_completed.png)

Stlačte „**Viac**“ pod cieľom a znova uvidíte jeho úlohy:

![Podrobnosti splneného cieľa](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Návrat v cieľoch

Ak sa z akéhokoľvek dôvodu chcete v **Cieľoch** vrátiť späť, otvorte splnený **Cieľ** cez „**Viac**“ a ťuknite na „**Vynulovať stav dokončenia**“:

![Návrat v cieľoch](../images/Objective_ClearFinished.png)

Rovnako môžete **Cieľ**, na ktorom práve pracujete, začať znova pomocou „**Vynulovať stav spustenia**“.
