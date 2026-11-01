
# Примітки до випуску

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Щоб оновитися до нової версії, виконайте інструкції з [посібника з оновлення](UpdateToNewVersion.md). Розділ усунення проблем на сторінці посібника з оновлення також описує найчастіші труднощі під час оновлення **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Дивіться [Що змінилося в AAPS v4](V4Changes.md), щоб дізнатися про помітні зміни в поведінці — функції, які перемістили, перейменували або видалили.
```

Коли буде доступне нове оновлення, ви отримаєте ось таке сповіщення:

![Інформація про оновлення](../images/AAPS_LoopDisable90days.png)

Якщо ви не оновите до дати закінчення терміну дії, **AAPS** перейде у відкриту петлю.

Дати закінчення підтримки версій AAPS дивіться на сторінці [Кінець підтримки](EndOfLife.md).

**Не ігноруйте сповіщення.** Нові версії **AAPS** містять важливі виправлення безпеки. Тому кожен користувач **AAPS** має якнайшвидше оновитися до останньої версії. Це спроба покращити безпеку для кожного користувача **AAPS** і для спільноти DIY. Дякуємо за розуміння.

(maintenance-android-version-aaps-version)=

## Версія Android і версія AAPS

Якщо ваш смартфон має версію Android, старішу за Android 12, ви не зможете використовувати AAPS v3.4 і новіші, бо вони потребують щонайменше Android 12.

Щоб користувачі зі старішими версіями Android могли користуватися старішими версіями AAPS, були випущені нові версії, які змінюють лише перевірку версії. Інших покращень у них немає.

Знайдіть свою версію Android у таблиці нижче і використовуйте відповідну версію **AAPS**. Код завантажується з <https://github.com/nightscout/AndroidAPS> з указаної гілки.

| Ваша версія Android | Яку версію AAPS використовувати | Гілка для завантаження                                                |
| ------------------- | ------------------------------- | --------------------------------------------------------------------- |
| Android 12 і новіші | Остання версія                  | [master](https://github.com/nightscout/AndroidAPS) (за замовчуванням) |
| Android 11          | **3.3.2.1**                     | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1)      |
| Android 9, 10       | **3.2.0.4**                     | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4)      |
| Android 8           | **2.8.2.1**                     | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1)      |
| Android 7           | **2.6.2**                       | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)          |

## Версія для WearOS

- AAPS потребує WearOS 3.0, 3.2 або 3.5 (Android 11, API рівня 30) або новішої. Годинники з WearOS 2 не підтримуються.

```{tip}
WearOS 5, API рівня 34 (Android 14) має [обмеження](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Версія 4.0.0**

Дата випуску: 31-10-2026

**Нові функції**

- Новий інтерфейс користувача: застосунок для телефона перебудовано на Jetpack Compose @MilosKozak
- [Глобальний пошук](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Перехід на Kotlin Multiplatform, клієнт для Windows, Mac, Linux (настільні комп'ютери) та iOS @MilosKozak
- [Сцени](../DailyLifeWithAaps/Scenes.md): збережіть набір дій і запускайте їх разом @MilosKozak
- [Керування «основний телефон ↔ клієнт»](../RemoteFeatures/ClientMasterControl.md): надсилання команд з клієнтського телефона на основний телефон @MilosKozak
  - [Ролі клієнтів](#client-master-control-roles): «Лише читання», «Їжа», «Доглядач» або «Адмін» для кожного клієнта @MilosKozak
  - [Захищений режим](#client-master-control-hardened-mode): коли керування з клієнта увімкнено, основний телефон приймає зміни лише від спарених клієнтів @MilosKozak
  - Спарювання через QR-код, який також налаштовує Nightscout на клієнті, або через PIN-код; секрет спарювання замінюється одразу після спарювання @MilosKozak
  - [Власний токен Nightscout](#client-master-control-own-token) для кожного клієнта, лише з тими правами, які потрібні клієнту @MilosKozak
- Підтримка [концентрації інсуліну](../AdvancedOptions/InsulinConcentration.md) (U200, U500) у помпах, калькуляторі та профілях @Philoul @MilosKozak
- Керування інсуліном: каталог інсулінів, псевдоніми, вибір у профілі та калькуляторі @Philoul
- Плагін калібрування @MilosKozak
- [Згладжування](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Чергування місць введення](#Aapsscreens-site-rotation): відстеження і чергування місць інфузії @Philoul @MilosKozak
- Перероблено [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Нові [віджети](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Доступність: застосунок для телефона працює з екранним диктором — підписані елементи керування, озвучений стан, описи графіків і заголовки для швидкого перегляду @MilosKozak
- [Імпорт налаштувань](../Maintenance/ExportImportSettings.md): можна зберегти налаштування помпи @MilosKozak
- Постійне сповіщення використовує живі оновлення Android (live updates), з підтримкою Samsung Now bar і показом дельти @premnirmal
- Графік ГК: [натисніть і утримуйте](#aaps-screens-graph-press-and-hold), щоб побачити значення в момент вимірювання, на кожному графіку екрана «Огляд» @t1dude @olorinmaia
- Покращення продуктивності @MilosKozak
- Автоматичні eCarbs у калькуляторі болюса @MilosKozak

**Нові пристрої**

- **CareLevo**: новий [драйвер помпи](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: підтримка @MilosKozak
- **Instara**: нове джерело CGM @leohunt

**Покращення драйверів помп**

- Екрани огляду помп перебудовано для Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn і Equil @MilosKozak
- **Omnipod Dash**: коди Ref у стилі PDM і зрозумілі описи несправностей, компенсація дрейфу завжди увімкнена, краще звітування про тип болюсу @nl-ruud
- **Omnipod**: жорстка дата завершення для Dash і Eros @mcnelson
- **DanaR, RS**: емулятор помпи для тестування @MilosKozak
- **Equil**: емулятор помпи для тестування @MilosKozak
- Багато виправлень помп і петлі @MilosKozak та інші

**Wear OS**

- [Застосунок для годинника](../WearOS/WearOsSmartwatch.md) перебудовано на Compose, нові плитки та віджети (complications), автоматичне встановлення циферблата (Watch Face Push) на Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface доступний для WearOS 6.0 (GW7, GW8, GW9...) з окремим циферблатом WFF @Philoul @olorinmaia
- CustomWatchface тепер може містити 5 слотів віджетів (complications), які можна налаштувати (нова функція доступна лише для старіших годинників) @Philoul
- Новий [циферблат WFF на основі віджетів (complications) AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Виправлення в результатах калькулятора болюса і Швидкого майстра @olorinmaia
- Нові дії «Графік ГК» і «Робочий режим» у головному меню @olorinmaia
- Калькулятор болюса: сторінка [тип їжі](#WearOsSmartwatch-wizard-meal-type), яка розподіляє вуглеводи так само, як калькулятор на телефоні, і [час вуглеводів](#WearOsSmartwatch-wizard-carb-time) з нагадуванням *Час їсти* на годиннику @olorinmaia
- [Тривоги телефона на годиннику](#WearOsSmartwatch-phone-alarms): годинник показує тривогу і пропонує «Вимкнути звук» і «Без звуку 5 хв» @olorinmaia

**Збірка**

- Робочі процеси CI для збірок з тегів/гілок, відповідність версій JDK @Angus-repo

**Учасники**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Повний список змін: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Версія 3.4.2.6**

- Equil: покращено стабільність @MilosKozak

---

(version3321)=

**Версія 3.3.2.1**

Дата випуску: 13-08-2025

- Виправлено Bluetooth-підключення Omnipod на Android 16
- Процес CI (збірка в браузері)
- Виправлено перетворення ммоль/л – мг/дл
- Виправлено неправильний вибір часу в діалогах у деяких часових поясах
- Виправлено читання ключів у простому режимі
- Виправлено відсутні прогнози на годиннику
- Покращено Конфігурацію (ConfigBuilder)
- Покращено повну синхронізацію NSCv3

---

(version3300)=

**Версія 3.3.2.0**

Дата випуску: 27-03-2025

**Як оновити**

* Щоб зібрати цю версію, потрібна [версія Android Studio під назвою "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) або новіша. Якщо ви вже зібрали версію 3.3.x, вам потрібно знову оновити Android Studio.

(version-enforcement)=

**Починаючи з цієї версії, сповіщення і примусове оновлення версії спрощено і пом'якшено. Вони працюють так:**

*  Термін дії не закінчується, коли пристрій офлайн (немає підключення до інтернету). Це означає, що додаткових періодів 60 і 90 днів більше немає.
*  Після закінчення терміну дії примусово вмикається режим LGS
*  Попередження/сповіщення ви будете отримувати рідше:
   - залишилося 28+ днів: кожні 7 днів
   - залишилося 27–14 днів: кожні 3 дні
   - потім раз на день
   - Сповіщення зʼявляється після полудня, щоб не турбувати вас уночі
* Є лише 2 види сповіщень
   - Доступна нова версія (не впливає на AAPS)
   - Термін дії застосунку закінчується в певну дату в майбутньому (ще не впливає на AAPS) / закінчився (AAPS перейде в режим LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Версія 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Дата випуску: 27-02-2024

Це остання версія, яка підтримує Android 10. Якщо ви не можете оновитися до Android 11, [оновіть AAPS до 3.2.0.4](#update-aaps-3204).

**Зміни**

- Підтримка G7 через xDrip
- Виправлення Medtrum
- Виправлення значка автоматизації
- Виправлення проходження завдання 1

---

**Версія 2.8.2**

Дата випуску: 23-01-2021

[Примітки до випуску](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Версія 1.0**

```{admonition} First version of **AAPS**
:class: note

Перша тестова версія зʼявилася у 2015 році, а перший випуск — у 2016 році.

Точна хронологія цих випусків зараз недоступна, але це питання ставили кілька разів, тому ми записуємо це тут.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
