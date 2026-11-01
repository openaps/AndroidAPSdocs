
# Poznámky k vydaniu

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Najčastejšie ťažkosti pri aktualizácii **AAPS** rieši aj časť o riešení problémov na stránke s návodom na aktualizáciu.

```{admonition} Upgrading from AAPS v3?
:class: tip
Pozrite si [Čo sa zmenilo v AAPS v4](V4Changes.md), kde nájdete dôležité zmeny v správaní – funkcie, ktoré sa presunuli, boli premenované alebo odstránené.
```

Keď bude dostupná nová aktualizácia, dostanete takúto notifikáciu:

![Informácie o aktualizácii](../images/AAPS_LoopDisable90days.png)

Ak neaktualizujete do dátumu vypršania platnosti, **AAPS** sa prepne na otvorený okruh.

Dátumy konca podpory jednotlivých verzií AAPS nájdete na stránke [Koniec podpory](EndOfLife.md).

**Notifikáciu neignorujte.** Nové verzie **AAPS** prinášajú dôležité bezpečnostné opravy. Preto musí každý používateľ **AAPS** čo najskôr aktualizovať na najnovšiu verziu. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Ďakujeme za pochopenie.

(maintenance-android-version-aaps-version)=

## Verzia Androidu a verzia AAPS

Ak váš smartfón používa verziu Androidu staršiu ako Android 12, nebudete môcť používať AAPS v3.4 a novšie, pretože vyžaduje aspoň Android 12.

Aby mohli používatelia so starším Androidom používať staršiu verziu AAPS, boli vydané nové verzie, ktoré menia iba kontrolu verzie. Žiadne iné vylepšenia nie sú zahrnuté.

V tabuľke nižšie nájdite svoju verziu Androidu a použite zodpovedajúcu verziu **AAPS**. Kód sa sťahuje z <https://github.com/nightscout/AndroidAPS> z uvedenej vetvy.

| Vaša verzia Androidu | Verzia AAPS, ktorú treba použiť | Vetva na stiahnutie                                              |
| -------------------- | ------------------------------- | ---------------------------------------------------------------- |
| Android 12 a novší   | Najnovšia verzia                | [master](https://github.com/nightscout/AndroidAPS) (predvolená)  |
| Android 11           | **3.3.2.1**                     | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**                     | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**                     | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**                       | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Verzia pre WearOS

- AAPS vyžaduje WearOS 3.0, 3.2 alebo 3.5 (Android 11, úroveň API 30) alebo novší. Hodinky s WearOS 2 nie sú podporované.

```{tip}
WearOS 5, úroveň API 34 (Android 14) má [obmedzenia](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Verzia 4.0.0**

Dátum vydania: 31.10.2026

**Nové funkcie**

- Nové používateľské rozhranie: aplikácia v telefóne prestavaná v Jetpack Compose @MilosKozak
- [Globálne vyhľadávanie](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrácia na Kotlin Multiplatform, klient pre Windows, Mac, Linux (desktop) a iOS @MilosKozak
- [Scény](../DailyLifeWithAaps/Scenes.md): uložte si súbor akcií a spúšťajte ich naraz @MilosKozak
- [Ovládanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md): posielanie príkazov z telefónu klienta do hlavného zariadenia (master) @MilosKozak
  - [Roly klientov](#client-master-control-roles): Iba na čítanie, Jedlá, Opatrovateľ alebo Správca pre každého klienta @MilosKozak
  - [Režim zvýšeného zabezpečenia](#client-master-control-hardened-mode): keď je zapnuté ovládanie z klienta, hlavné zariadenie prijíma zmeny iba zo spárovaných klientov @MilosKozak
  - Párovanie pomocou QR kódu, ktorý v klientovi nastaví aj Nightscout, alebo pomocou PIN; tajný kľúč párovania sa hneď po spárovaní vymení @MilosKozak
  - [Vlastný Nightscout token](#client-master-control-own-token) pre každého klienta, iba s právami, ktoré klient potrebuje @MilosKozak
- Podpora [koncentrácie inzulínu](../AdvancedOptions/InsulinConcentration.md) (U200, U500) v pumpách, kalkulačke a profiloch @Philoul @MilosKozak
- Správa inzulínov: katalóg inzulínov, prezývky, výber v profile a v kalkulačke @Philoul
- Plugin kalibrácie @MilosKozak
- [Vyhladzovanie](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalmanov filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Striedanie miest](#Aapsscreens-site-rotation): sledovanie a striedanie miest vpichu @Philoul @MilosKozak
- Prepracovaný [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nové [widgety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Prístupnosť: aplikácia v telefóne funguje s čítačkou obrazovky – pomenované ovládacie prvky, hlasový stav, popisy grafov a nadpisy na rýchlu orientáciu @MilosKozak
- [Import nastavení](../Maintenance/ExportImportSettings.md): môže zachovať nastavenia pumpy @MilosKozak
- Trvalá notifikácia používa živé aktualizácie Androidu (live updates), s podporou Samsung Now bar a s deltou @premnirmal
- Graf glykémie: [stlačte a podržte](#aaps-screens-graph-press-and-hold) a uvidíte hodnoty v danom bode merania, na každom grafe v prehľade @t1dude @olorinmaia
- Vylepšenia výkonu @MilosKozak
- Automatické eSacharidy v bolusovej kalkulačke @MilosKozak

**Nové zariadenia**

- **CareLevo**: nový [ovládač pumpy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: podpora @MilosKozak
- **Instara**: nový zdroj CGM @leohunt

**Vylepšenia ovládačov púmp**

- Prestavané obrazovky prehľadu púmp pre Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn a Equil @MilosKozak
- **Omnipod Dash**: kódy Ref ako v PDM a čitateľné popisy porúch, kompenzácia posunu času (drift) vždy zapnutá, lepšie hlásenie typu bolusu @nl-ruud
- **Omnipod**: pevný dátum ukončenia pre Dash a Eros @mcnelson
- **DanaR, RS**: emulátor pumpy na testovanie @MilosKozak
- **Equil**: emulátor pumpy na testovanie @MilosKozak
- Veľa opráv púmp a okruhu @MilosKozak a ďalší

**Wear OS**

- [Aplikácia pre hodinky](../WearOS/WearOsSmartwatch.md) prestavaná v Compose, nové dlaždice a komplikácie, automatická inštalácia ciferníka (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface dostupný pre WearOS 6.0 (GW7, GW8, GW9...) s vlastným ciferníkom WFF @Philoul @olorinmaia
- CustomWatchface teraz môže obsahovať 5 pozícií pre komplikácie, ktoré si môžete prispôsobiť (nová funkcia dostupná iba pre staršie hodinky) @Philoul
- Nový [ciferník WFF založený na komplikáciách AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Opravy vo výsledku bolusovej kalkulačky a Rýchleho sprievodcu @olorinmaia
- Nový graf glykémie a aktivita Režim prevádzky v hlavnej ponuke @olorinmaia
- Bolusová kalkulačka: stránka [typ jedla](#WearOsSmartwatch-wizard-meal-type), ktorá rozdelí sacharidy ako kalkulačka v telefóne, a [čas sacharidov](#WearOsSmartwatch-wizard-carb-time) s pripomienkou *čas jesť* na hodinkách @olorinmaia
- [Alarmy telefónu na hodinkách](#WearOsSmartwatch-phone-alarms): hodinky zobrazia alarm a ponúknu Stíšiť a Stlmiť na 5 min @olorinmaia

**Zostavenie**

- CI workflowy pre zostavenia z tagov/vetiev, mapovanie verzií JDK @Angus-repo

**Prispievatelia**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Úplný zoznam zmien: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Verzia 3.4.2.6**

- Equil: vylepšená stabilita @MilosKozak

---

(version3321)=

**Verzia 3.3.2.1**

Dátum vydania: 13.08.2025

- Opravené pripojenie Bluetooth k Omnipodu na Androide 16
- Proces CI (zostavenie v prehliadači)
- Oprava prevodu mmol-mgdl
- Oprava nesprávneho výberu času v dialógoch v niektorých časových pásmach
- Oprava načítania kľúčov v jednoduchom móde
- Oprava chýbajúcich predikcií na hodinkách
- Vylepšená Konfigurácia (ConfigBuilder)
- Vylepšená úplná synchronizácia NSCv3

---

(version3300)=

**Verzia 3.3.2.0**

Dátum vydania: 27.03.2025

**Ako aktualizovať**

* Na zostavenie tejto verzie je potrebné [Android Studio vo verzii „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) alebo novšej. Ak ste už zostavili verziu 3.3.x, musíte Android Studio aktualizovať znova.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

*  Žiadne vypršanie platnosti, keď je zariadenie offline (ak nie je pripojené na internet). To znamená, že už neexistujú lehoty 60 a 90 dní.
*  Po vypršaní platnosti sa vynúti režim LGS
*  Upozornenia/notifikácie budete dostávať menej často:
   - zostáva 28+ dní: každých 7 dní
   - zostáva 27–14 dní: každé 3 dni
   - potom raz denne
   - Notifikácia sa zobrazí až po poludní, aby vás nerušila v noci
* Existujú iba 2 druhy notifikácií
   - Je dostupná nová verzia (nemá vplyv na AAPS)
   - Platnosť aplikácie vyprší k určitému dátumu v budúcnosti (stále bez vplyvu na AAPS) / vypršala (AAPS sa prepne do režimu LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Verzia 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Dátum vydania: 27.02.2024

Táto verzia je posledná, ktorá podporuje Android 10. Ak nemôžete aktualizovať na Android 11, [aktualizujte AAPS na 3.2.0.4](#update-aaps-3204).

**Zmeny**

- Podpora xDrip G7
- Opravy Medtrum
- Oprava ikony automatizácie
- Oprava plnenia cieľa 1

---

**Verzia 2.8.2**

Dátum vydania: 23.01.2021

[Poznámky k vydaniu](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Verzia 1.0**

```{admonition} First version of **AAPS**
:class: note

Prvá testovacia verzia vznikla v roku 2015 a prvé vydanie bolo v roku 2016.

Presná chronológia týchto vydaní momentálne nie je k dispozícii, ale keďže táto otázka zaznela už viackrát, uvádzame ju tu.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
