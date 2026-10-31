
# Бележки към версиите

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Разделът за отстраняване на неизправности на страницата с ръководството за актуализиране също разглежда най-честите трудности при актуализиране на **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Вижте [Какво се промени в AAPS v4](V4Changes.md) за важните промени в поведението – функции, които са преместени, преименувани или премахнати.
```

Когато има нова актуализация, ще получите известие като това:

![Информация за актуализацията](../images/AAPS_LoopDisable90days.png)

Ако не актуализирате до датата на изтичане, **AAPS** ще премине в режим Отворен кръг.

Вижте [Край на поддръжката](EndOfLife.md) за крайните дати на версиите на AAPS.

**Не пренебрегвайте известието.** Новите версии на **AAPS** съдържат важни поправки за безопасността. Затова всеки потребител на **AAPS** трябва да актуализира до последната версия възможно най-скоро. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Благодарим ви за разбирането.

(maintenance-android-version-aaps-version)=

## Версия на Android и версия на AAPS

Ако вашият смартфон използва версия на Android, по-стара от Android 12, няма да можете да използвате AAPS v3.4 и по-нови, защото те изискват поне Android 12.

За да могат потребителите с по-стар Android да използват по-стара версия на AAPS, бяха публикувани нови версии, които променят само проверката на версията. Други подобрения не са включени.

Намерете вашата версия на Android в таблицата по-долу и използвайте съответната версия на **AAPS**. Кодът се изтегля от <https://github.com/nightscout/AndroidAPS> от показания клон.

| Вашата версия на Android | Версия на AAPS, която да използвате | Клон за изтегляне                                                    |
| ------------------------ | ----------------------------------- | -------------------------------------------------------------------- |
| Android 12 и по-нова     | Последна версия                     | [master](https://github.com/nightscout/AndroidAPS) (по подразбиране) |
| Android 11               | **3.3.2.1**                         | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1)     |
| Android 9, 10            | **3.2.0.4**                         | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4)     |
| Android 8                | **2.8.2.1**                         | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1)     |
| Android 7                | **2.6.2**                           | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)         |

## Версия за WearOS

- AAPS изисква WearOS 3.0, 3.2 или 3.5 (Android 11, API ниво 30) или по-нова. Часовници с WearOS 2 не се поддържат.

```{tip}
WearOS 5, API ниво 34 (Android 14) има [ограничения](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Версия 4.0.0**

Дата на издаване: 31-10-2026

**Нови функции**

- Нов потребителски интерфейс: приложението за телефона е изградено наново с Jetpack Compose @MilosKozak
- [Глобално търсене](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Миграция към Kotlin Multiplatform, клиент за Windows, Mac, Linux (настолен компютър) и iOS @MilosKozak
- [Сценарии](../DailyLifeWithAaps/Scenes.md): запазете набор от действия и ги изпълнявайте заедно @MilosKozak
- [Контрол главен ↔ клиент](../RemoteFeatures/ClientMasterControl.md): изпращане на команди от клиентски телефон към главния телефон @MilosKozak
  - [Роли на клиента](#client-master-control-roles): Само за четене, Хранения, Болногледач или Администратор за всеки клиент @MilosKozak
  - [Режим на засилена защита](#client-master-control-hardened-mode): когато контролът от клиентско приложение е включен, главният телефон приема промени само от свързани клиенти @MilosKozak
  - Свързване чрез QR код, който настройва и Nightscout на клиента, или чрез PIN; тайният ключ за свързване се сменя веднага след свързването @MilosKozak
  - [Собствен токен за Nightscout](#client-master-control-own-token) за всеки клиент, само с правата, които клиентът има нужда @MilosKozak
- Поддръжка на [концентрация на инсулина](../AdvancedOptions/InsulinConcentration.md) (U200, U500) в помпите, калкулатора и профилите @Philoul @MilosKozak
- Управление на инсулините: каталог на инсулините, кратки имена, избор в профила и в калкулатора @Philoul
- Плъгин за калибрация @MilosKozak
- [Изглаждане](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Смяна на мястото](#Aapsscreens-site-rotation): проследяване и редуване на местата за поставяне на инфузионния сет @Philoul @MilosKozak
- Преработка на [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Нови [уиджети](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Достъпност: приложението за телефона работи с екранен четец – именувани контроли, изговаряне на статуса, описания на графиките и заглавия за бърз преглед @MilosKozak
- [Импорт на настройките](../Maintenance/ExportImportSettings.md): може да запази настройките на помпата @MilosKozak
- Постоянното известие използва Android live updates, с поддръжка на Samsung Now bar и делтата @premnirmal
- Графика на КЗ: [натиснете и задръжте](#aaps-screens-graph-press-and-hold), за да видите стойностите в момента на измерване, на всяка графика на главния екран @t1dude @olorinmaia
- Подобрения в производителността @MilosKozak
- Автоматични удължени въглехидрати (e-carbs) в болус калкулатора @MilosKozak

**Нови устройства**

- **CareLevo**: нов [драйвер за помпа](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: поддръжка @MilosKozak
- **Instara**: нов източник на CGM данни @leohunt

**Подобрения в драйверите за помпи**

- Екраните за преглед на помпата са изградени наново за Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn и Equil @MilosKozak
- **Omnipod Dash**: Ref кодове като на PDM и разбираеми описания на грешките, компенсацията на отклонението (drift) е винаги включена, по-добро отчитане на вида болус @nl-ruud
- **Omnipod**: краен срок за Dash и Eros @mcnelson
- **DanaR, RS**: емулатор на помпа за тестване @MilosKozak
- **Equil**: емулатор на помпа за тестване @MilosKozak
- Много поправки за помпите и кръга @MilosKozak и други

**Wear OS**

- [Приложението за часовника](../WearOS/WearOsSmartwatch.md) е изградено наново с Compose, нови плочки (tiles) и усложнения (complications), автоматично инсталиране на циферблат (Watch Face Push) на Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface е наличен за WearOS 6.0 (GW7, GW8, GW9...) със специален WFF циферблат @Philoul @olorinmaia
- CustomWatchface вече може да съдържа 5 места за усложнения (complications), които можете да настроите (новата функция е налична само за по-стари часовници) @Philoul
- Нов [WFF циферблат, базиран на усложненията (complications) на AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Поправки в резултата на болус калкулатора и на бързите действия (Quick wizard) @olorinmaia
- Нови екрани за графика на КЗ и текущ режим в главното меню @olorinmaia
- Болус калкулатор: страница [вид хранене](#WearOsSmartwatch-wizard-meal-type), която разделя въглехидратите като калкулатора на телефона, и [време на въглехидратите](#WearOsSmartwatch-wizard-carb-time) с напомнянето *време е за ядене* на часовника @olorinmaia
- [Алармите на телефона на часовника](#WearOsSmartwatch-phone-alarms): часовникът показва алармата и предлага „Заглушаване“ (Silence) и „Без звук 5 мин“ (Mute 5 min) @olorinmaia

**Компилиране**

- CI работни процеси за компилации от tag/клон, съответствие на версиите на JDK @Angus-repo

**Сътрудници**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Пълен списък с промените: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Версия 3.4.2.6**

- Equil: подобрена стабилност @MilosKozak

---

(version3321)=

**Версия 3.3.2.1**

Дата на издаване: 13-08-2025

- Поправена Bluetooth връзката с Omnipod на Android 16
- CI процес (компилиране в браузъра)
- Поправено преобразуване между mmol и mg/dl
- Поправен грешен избор на час в диалозите в някои часови зони
- Поправено четене на ключове в опростен режим
- Поправени липсващи прогнози на часовника
- Подобрен ConfigBuilder
- Подобрена пълна синхронизация с NSCv3

---

(version3300)=

**Версия 3.3.2.0**

Дата на издаване: 27-03-2025

**Как да актуализирате**

* За компилиране на тази версия е нужна [версията на Android Studio с име „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) или по-нова. Ако вече сте компилирали версия 3.3.x, трябва отново да актуализирате Android Studio.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

*  Няма изтичане, когато устройството е офлайн (ако няма връзка с интернет). Това означава, че вече няма гратисни периоди от 60 и 90 дни.
*  След изтичане се включва принудително режим LGS
*  Ще получавате предупреждения/известия по-рядко:
   - остават 28+ дни: на всеки 7 дни
   - остават 27–14 дни: на всеки 3 дни
   - след това веднъж дневно
   - Известието се създава след обяд, за да не ви безпокои през нощта
* Има само 2 вида известия
   - Налична е нова версия (няма ефект върху AAPS)
   - Приложението изтича на определена бъдеща дата (все още няма ефект върху AAPS) / е изтекло (AAPS ще премине в режим LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Версия 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Дата на издаване: 27-02-2024

Тази версия е последната, която поддържа Android 10. Ако не можете да актуализирате до Android 11, [актуализирайте AAPS до 3.2.0.4](#update-aaps-3204).

**Промени**

- Поддръжка на G7 чрез xDrip
- Поправки за Medtrum
- Поправка на иконата на автоматизацията
- Поправка при изпълнение на цел 1

---

**Версия 2.8.2**

Дата на издаване: 23-01-2021

[Бележки към версиите](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Версия 1.0**

```{admonition} First version of **AAPS**
:class: note

Първата тестова версия започна през 2015 г., а първото издание беше през 2016 г.

Точната хронология на тези издания в момента не е налична, но тъй като този въпрос е задаван няколко пъти, го документираме тук.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
