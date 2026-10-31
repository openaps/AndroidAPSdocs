# Оновлення до AAPS 3.2.0.4

(update-aaps-3204)=

## Зберіть самі, а не завантажуйте

**Застосунок AAPS (файл apk) не можна завантажити готовим через правила для медичних виробів. Збирати застосунок для власного використання законно, але ви не повинні давати його копію іншим!**

Докладніше див. на [сторінці FAQ](../UsefulLinks/FAQ.md).

## Вимоги до комп’ютера і програм для збірки AAPS 3.2.0.4

* Для збірки apk може знадобитися певна версія **[Android Studio](https://developer.android.com/studio/)**.

| Версія AAPS             | Рекомендована<br/>версія<br/>Android Studio | Альтернативна<br/>версія<br/>Android Studio | Gradle | JVM |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------ |:--- |
| [3.2.0.4](#version3200) | Hedgehog (2023.1.1)                                     | до Meerkat                                              | 8.2    | 17  |

«Рекомендована версія» постачається з відповідною версією JVM. Рекомендована версія — це також мінімальна версія, якою можна зібрати **AAPS**. Ви **НЕ** зможете зібрати застосунок у версії, старішій за «рекомендовану». Якщо ви використовуєте іншу версію, можуть виникнути проблеми, пов’язані з версією JVM. Щоб вирішити ці проблеми, див. сторінку [Усунення проблем з Android Studio](#incompatible-gradle-jvm). Якщо вашої поточної версії Android Studio немає в таблиці, спочатку оновіть її.

Версія Gradle пов’язана з вихідним кодом: ви завжди отримаєте правильну версію Gradle, коли завантажуєте або оновлюєте вихідний код. Її вказано тут лише для довідки, нічого робити з нею не потрібно.

* [32-бітні системи Windows](#troubleshooting_androidstudio-unable-to-start-daemon-process) не підтримуються Android Studio. Пам’ятайте, що **64-бітний процесор і 64-бітна операційна система є обов’язковою умовою.** Якщо ваша система НЕ відповідає цій умові, вам потрібно замінити відповідне обладнання, програмне забезпечення або всю систему.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">Мінімум 1280 x 800<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**Наполегливо рекомендуємо (але це не обов’язково) використовувати SSD (твердотільний накопичувач) замість HDD (жорсткого диска), бо так збірка файлу apk AAPS займе менше часу.**  Ви все одно можете використовувати HDD для збірки файлу apk **AAPS**. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Допомога і підтримка під час збірки 3.2.0.4

Якщо у вас виникли труднощі під час збірки застосунку **AAPS**, є окремий розділ [**Усунення проблем з Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html); будь ласка, спочатку прочитайте його.

Якщо ви вважаєте, що в інструкціях зі збірки щось неправильно, чогось бракує або щось незрозуміло, або у вас досі не виходить, зверніться до групи інших користувачів **AAPS** у [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) або [Discord](https://discord.gg/4fQUWHZ4Mw). Якщо ви хочете щось змінити самі (оновити знімки екрана _тощо_), будь ласка, надішліть [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
На цій сторінці є приклади зображень і для **New** (нового), і для старого (**Classic**) інтерфейсу Android Studio.
```

## Огляд оновлення з 3.2.0.x до 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Експортуйте поточні налаштування

Експортуйте налаштування з наявної версії **AAPS** на вашому телефоні. Можливо, вони вам не знадобляться, але краще перестрахуватися.

Якщо ви не пам’ятаєте, як це зробити, див. сторінку [Експорт та імпорт налаштувань](ExportImportSettings.md).

### Оновіть вашу локальну копію AAPS

* Відкрийте ваш наявний проєкт AAPS в Android Studio. Можливо, вам потрібно буде вибрати ваш проєкт. Клацніть (двічі) на проєкт AAPS.

![Android Studio – вибір проєкту](../images/update/01_ProjectSelection.png)

<br>

![Android Studio – вибір проєкту](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* У рядку меню Android Studio виберіть Git -> Fetch

![Меню Android Studio – Git – Fetch](../images/update/02_GitFetch.png)

<br>

![Меню Android Studio – Git – Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* У правому нижньому куті ви побачите повідомлення, що Fetch виконано успішно.

![Меню Android Studio – Git – Fetch виконано успішно](../images/update/03_GitFetchSuccessful.png)

<br>

![Меню Android Studio – Git – Fetch виконано успішно](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Тепер у рядку меню виберіть Git -> Pull

![Меню Android Studio – Git – Pull](../images/update/04_GitPull.png)

<br>

![Меню Android Studio – Git – Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Залиште всі параметри як є (origin/master) і виберіть Pull

![Android Studio – Git – вікно Pull](../images/update/05_GitPullOptions.png)

<br>

![Android Studio – Git – вікно Pull](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Зачекайте, поки триває завантаження: це видно в нижньому рядку. Коли все завершиться, ви побачите повідомлення про успіх.

  ```{note}
  Список оновлених файлів може відрізнятися! Це не ознака проблеми.
  ```


![Android Studio – Pull виконано успішно](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio – Pull виконано успішно](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Запуститься Gradle Sync, щоб завантажити деякі залежності. Зачекайте, поки він завершиться.

![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio – Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Виберіть версію JVM 17

- Відкрийте подання Gradle, натиснувши на слона (1) праворуч в Android Studio, відкрийте налаштування (2) і виберіть **Gradle Settings** (3):

![Відкрийте Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Відкрийте Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- У полі **Gradle JDK** (1) перевірте, чи вибрано відповідну версію: **jbr-17**. Якщо ні, натисніть на поле і подивіться, чи вона вже є в списку. Якщо її немає в списку (на знімку екрана нижче показано комп’ютер, де доступна лише **jbr-21**), виберіть **Download JDK...** (2).

![Виберіть Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- У полі Version (1) виберіть **17**. У полі Vendor (2) виберіть JetBrains Runtime або будь-якого постачальника. Location (3): не змінюйте.

![Виберіть JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Закрийте діалог **Settings** кнопкою **OK**.

### Виберіть гілку AAPS 3.2.0.4

- Зліва внизу виберіть символ Git, клацніть правою кнопкою миші на 3.2.0.4 і виберіть Checkout.

![Виберіть Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Виберіть Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Синхронізуйте проєкт з Gradle

```{admonition} WARNING!
:class: warning
**Ніколи не оновлюйте Gradle.** Завжди лише синхронізуйте його з проєктом.
```

У новому інтерфейсі натисніть значок слона і Sync Project with Gradle Files (або виконайте [ці кроки](#gradle-resync)).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Або ([ці кроки](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) для класичного інтерфейсу.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Зберіть підписаний APK 3.2.0.4

Ваш вихідний код тепер відповідає поточній випущеній версії, і всі попередні вимоги перевірено. Час зібрати підписаний apk, як описано в [розділі про збірку підписаного apk](#Building-APK-generate-signed-apk).

### Передайте та встановіть APK 3.2.0.4

Вам потрібно передати apk на телефон, щоб його встановити.

```{note}
Якщо ви зібрали застосунок з тим самим наявним keystore в Android Studio, то видаляти наявний застосунок з телефона не потрібно. Під час встановлення apk виконуйте підказки, щоб встановити оновлення.
В інших випадках, наприклад якщо ви створили в Android Studio новий keystore для підписаного apk, вам потрібно видалити старий застосунок перед встановленням apk. **Обов’язково експортуйте налаштування!**
```

Див. інструкції з [перенесення та встановлення AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Перевірте версію AAPS 3.2.0.4 на телефоні

Після встановлення нового apk ви можете перевірити версію AAPS на телефоні: натисніть меню з трьома крапками справа вгорі, а потім «Про застосунок». Ви маєте побачити поточну версію.

