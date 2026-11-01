
# Poznámky k vydání

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Sekce řešení problémů na stránce návodu k aktualizaci se věnuje i nejčastějším potížím při aktualizaci **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Důležité změny chování – funkce, které se přesunuly, byly přejmenovány nebo odstraněny – najdete na stránce [Co se změnilo v AAPS v4](V4Changes.md).
```

Když bude k dispozici nová aktualizace, dostanete oznámení, jako je toto:

![Informace o aktualizaci](../images/AAPS_LoopDisable90days.png)

Pokud neaktualizujete do data vypršení platnosti, **AAPS** se přepne do otevřené smyčky.

Data konce podpory jednotlivých verzí AAPS najdete na stránce [Konec podpory](EndOfLife.md).

**Oznámení neignorujte.** Nové verze **AAPS** přinášejí důležité bezpečnostní opravy. Proto musí každý uživatel **AAPS** co nejdříve aktualizovat na nejnovější verzi. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Děkujeme za pochopení.

(maintenance-android-version-aaps-version)=

## Verze Androidu a verze AAPS

Pokud váš telefon používá Android starší než Android 12, nebudete moci používat AAPS v3.4 a novější, protože vyžaduje alespoň Android 12.

Aby bylo uživatelům se starším Androidem umožněno používat starší verzi AAPS, byla upravena pouze kontrola verzí. Jiné změny neobsahuje.

Najděte svou verzi Androidu v tabulce níže a použijte odpovídající verzi **AAPS**. Kód se stahuje z <https://github.com/nightscout/AndroidAPS> z uvedené větve (branch).

| Vaše verze Androidu  | Verze AAPS, kterou použít | Větev ke stažení                                                 |
| -------------------- | ------------------------- | ---------------------------------------------------------------- |
| Android 12 a novější | Nejnovější verze          | [master](https://github.com/nightscout/AndroidAPS) (výchozí)     |
| Android 11           | **3.3.2.1**               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Verze pro WearOS

- AAPS vyžaduje WearOS 3.0, 3.2 nebo 3.5 (Android 11, API level 30) nebo novější. Hodinky s WearOS 2 nejsou podporované.

```{tip}
WearOS 5, API level 34 (Android 14) má [omezení](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Verze 4.0.0**

Datum vydání: 31. 10. 2026

**Nové funkce**

- Nové uživatelské rozhraní: aplikace pro telefon přestavěna v Jetpack Compose @MilosKozak
- [Globální vyhledávání](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrace na Kotlin Multiplatform, klient pro Windows, Mac, Linux desktop a iOS @MilosKozak
- [Scény](../DailyLifeWithAaps/Scenes.md): uložte si sadu akcí a spusťte je najednou @MilosKozak
- [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md): posílání příkazů z telefonu klienta do hlavního zařízení @MilosKozak
  - [Role klientů](#client-master-control-roles): Pouze pro čtení, Jídlo, Pečovatel nebo Admin pro každého klienta @MilosKozak
  - [Zabezpečený režim](#client-master-control-hardened-mode): se zapnutým ovládáním z klienta přijímá hlavní zařízení změny jen od spárovaných klientů @MilosKozak
  - Párování pomocí QR kódu, který na klientovi zároveň nastaví Nightscout, nebo pomocí PINu; tajný klíč pro párování se hned po spárování vymění @MilosKozak
  - [Vlastní token Nightscoutu](#client-master-control-own-token) pro každého klienta, jen s právy, která klient potřebuje @MilosKozak
- Podpora [koncentrace inzulínu](../AdvancedOptions/InsulinConcentration.md) (U200, U500) v pumpách, kalkulačce a profilech @Philoul @MilosKozak
- Správa inzulínů: katalog inzulínů, přezdívky, výběr v profilu a v kalkulačce @Philoul
- Plugin kalibrace @MilosKozak
- [Vyhlazování](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalmanův filtr (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotace míst aplikace](#Aapsscreens-site-rotation): sledování a střídání míst infuze @Philoul @MilosKozak
- Přepracovaný [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nové [widgety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Přístupnost: aplikace pro telefon funguje se čtečkou obrazovky – pojmenované ovládací prvky, hlasový stav, popisy grafů a nadpisy pro rychlou orientaci @MilosKozak
- [Import nastavení](../Maintenance/ExportImportSettings.md): může zachovat nastavení pumpy @MilosKozak
- Trvalé oznámení používá živé aktualizace Androidu, s podporou Samsung Now bar a s deltou @premnirmal
- Graf glykémie: [stiskněte a podržte](#aaps-screens-graph-press-and-hold) a uvidíte hodnoty v daném čase, na každém grafu v přehledu @t1dude @olorinmaia
- Vylepšení výkonu @MilosKozak
- Automatické eSacharidy v bolusové kalkulačce @MilosKozak

**Nová zařízení**

- **CareLevo**: nový [ovladač pumpy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: podpora @MilosKozak
- **Instara**: nový zdroj CGM @leohunt

**Vylepšení ovladačů pump**

- Přestavěné obrazovky přehledu pump pro Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn a Equil @MilosKozak
- **Omnipod Dash**: Ref kódy jako v PDM a srozumitelné popisy poruch, kompenzace driftu vždy zapnutá, lepší hlášení typu bolusu @nl-ruud
- **Omnipod**: pevné datum konce pro Dash a Eros @mcnelson
- **DanaR, RS**: emulátor pumpy pro testování @MilosKozak
- **Equil**: emulátor pumpy pro testování @MilosKozak
- Mnoho oprav pump a smyčky @MilosKozak a další

**Wear OS**

- [Aplikace pro hodinky](../WearOS/WearOsSmartwatch.md) přestavěna v Compose, nové dlaždice a komplikace, automatická instalace ciferníku (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface je k dispozici pro WearOS 6.0 (GW7, GW8, GW9...) s vyhrazeným ciferníkem WFF @Philoul @olorinmaia
- CustomWatchface teď může obsahovat 5 pozic pro komplikace, které si můžete přizpůsobit (nová funkce dostupná jen pro starší hodinky) @Philoul
- Nový [ciferník WFF založený na komplikacích AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Opravy ve výsledku bolusové kalkulačky a Rychlého bolusu @olorinmaia
- Nová aktivita Graf glykémie a Režim smyčky v hlavní nabídce @olorinmaia
- Bolusová kalkulačka: stránka [typ jídla](#WearOsSmartwatch-wizard-meal-type), která rozdělí sacharidy jako kalkulačka v telefonu, a [čas sacharidů](#WearOsSmartwatch-wizard-carb-time) s připomínkou *čas jíst* na hodinkách @olorinmaia
- [Alarmy z telefonu na hodinkách](#WearOsSmartwatch-phone-alarms): hodinky zobrazí alarm a nabídnou Ztišit a Ztlumit na 5 minut @olorinmaia

**Sestavení**

- CI workflow pro sestavení z tagu/větve, mapování verzí JDK @Angus-repo

**Přispěvatelé**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Úplný seznam změn: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Verze 3.4.2.6**

- Equil: vyšší stabilita @MilosKozak

---

(version3321)=

**Verze 3.3.2.1**

Datum vydání: 13. 08. 2025

- Opraveno připojení Bluetooth k Omnipodu na Androidu 16
- Proces CI (sestavení v prohlížeči)
- Oprava převodu mmol–mg/dl
- Oprava špatného výběru času v dialozích v některých časových pásmech
- Oprava čtení klíčů ve zjednodušeném režimu
- Oprava chybějících predikcí na hodinkách
- Vylepšená Konfigurace
- Vylepšená plná synchronizace NSCv3

---

(version3300)=

**Verze 3.3.2.0**

Datum vydání: 27. 03. 2025

**Jak aktualizovat**

* K sestavení této verze je potřeba [Android Studio verze „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) nebo novější. Pokud jste už sestavili některou verzi 3.3.x, musíte Android Studio znovu aktualizovat.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

*  Když je zařízení offline (bez připojení k internetu), platnost nevyprší. To znamená, že už neexistují lhůty 60 a 90 dní.
*  Po vypršení platnosti se vynutí režim LGS
*  Varování/oznámení budete dostávat méně často:
   - zbývá 28 a více dní: každých 7 dní
   - zbývá 27–14 dní: každé 3 dny
   - pak jednou denně
   - Oznámení se zobrazí až po poledni, aby vás nerušilo v noci
* Existují jen 2 druhy oznámení
   - Je k dispozici nová verze (nemá žádný vliv na AAPS)
   - Platnost aplikace vyprší k určitému datu v budoucnu (stále bez vlivu na AAPS) / platnost vypršela (AAPS přejde do režimu LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Verze 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Datum vydání: 27. 02. 2024

Tato verze je poslední, která podporuje Android 10. Pokud nemůžete přejít na Android 11, [aktualizujte AAPS na verzi 3.2.0.4](#update-aaps-3204).

**Změny**

- Podpora xDrip G7
- Opravy Medtrum
- Oprava ikony automatizace
- Oprava plnění cíle 1

---

**Verze 2.8.2**

Datum vydání: 23. 01. 2021

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Verze 1.0**

```{admonition} First version of **AAPS**
:class: note

První testovací verze vznikla v roce 2015 a první vydání bylo v roce 2016.

Přesná chronologie těchto vydání zatím není k dispozici, ale protože se na to lidé ptali už několikrát, uvádíme to zde.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
