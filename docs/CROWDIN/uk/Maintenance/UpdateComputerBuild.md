# Оновлення з Android Studio

## Зберіть самі, а не завантажуйте

**AAPS** не можна завантажити через правила для медичних виробів. Збирати застосунок для власного використання законно, але ви не повинні давати його копію іншим! Докладніше див. на [сторінці FAQ](../UsefulLinks/FAQ.md).

```{note}
In case you want to build **AAPS** on a new computer: copy your back-up keystore file to the new computer. Потім виконайте [процедуру першої збірки **AAPS**](../SettingUpAaps/BuildingAaps.md), а не цю інструкцію. Єдина різниця: замість того щоб створювати новий keystore, ви можете вибрати той, який скопіювали на новий комп’ютер.
```

## Огляд оновлення до нової версії AAPS з Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Якщо виникли проблеми, див. окрему сторінку [Усунення проблем з Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Експортуйте налаштування

Експортуйте налаштування з наявної версії **AAPS** на вашому телефоні. Можливо, вони вам не знадобляться, але краще перестрахуватися.

Якщо ви не пам’ятаєте, як це зробити, див. сторінку [Експорт та імпорт налаштувань](ExportImportSettings.md).

### Перевірте версію Android Studio

Мінімальну потрібну версію описано в [інструкціях зі збірки](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Якщо ваша версія старіша, будь ласка, [спочатку оновіть Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Оновіть вашу локальну копію

* Відкрийте ваш наявний проєкт AAPS в Android Studio. Можливо, вам потрібно буде вибрати ваш проєкт. Клацніть (двічі) на проєкт AAPS.

  ![Android Studio – вибір проєкту](../images/update/01_ProjectSelection.png)

* У рядку меню Android Studio виберіть Git -> Fetch

   ![Меню Android Studio – Git – Fetch](../images/update/02_GitFetch.png)

* У правому нижньому куті ви побачите повідомлення, що Fetch виконано успішно.

   ![Меню Android Studio – Git – Fetch виконано успішно](../images/update/03_GitFetchSuccessful.png)

* Тепер у рядку меню виберіть Git -> Pull

   ![Меню Android Studio – Git – Pull](../images/update/04_GitPull.png)

* Залиште всі параметри як є (origin/master) і виберіть Pull

   ![Android Studio – Git – вікно Pull](../images/update/05_GitPullOptions.png)

* Зачекайте, поки триває завантаження: це видно в нижньому рядку. Коли все завершиться, ви побачите повідомлення про успіх.

  ```{note}
  Список оновлених файлів може відрізнятися! Це не ознака проблеми.
  ```

   ![Android Studio – Pull виконано успішно](../images/update/06_GitPullSuccess.png)

* Запуститься Gradle Sync, щоб завантажити деякі залежності. Зачекайте, поки він завершиться.

  ![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Перевірте версію JVM

Ця перевірка особливо потрібна, якщо ви вже збирали попередню версію **AAPS** на цьому самому комп’ютері.

Перевірте в [інструкціях зі збірки](#Building-APK-recommended-specification-of-computer-for-building-apk-file), яка версія JVM потрібна для версії **AAPS**, яку ви зараз збираєте. Потім виконайте кроки з розділу [Несумісна Gradle JVM (Incompatible Gradle JVM)](#incompatible-gradle-jvm), щоб переконатися, що ви зараз використовуєте правильну версію.

(Update-to-new-version-build-the-signed-apk)=
### Зберіть підписаний APK

Ваш вихідний код тепер відповідає поточній випущеній версії, і всі попередні вимоги перевірено. Час зібрати підписаний apk, як описано в [розділі про збірку підписаного apk](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Передайте та встановіть apk
Вам потрібно передати apk на телефон, щоб його встановити.

```{note}
Якщо ви зібрали застосунок з тим самим наявним keystore в Android Studio, то видаляти наявний застосунок з телефона не потрібно. Під час встановлення apk виконуйте підказки, щоб встановити оновлення.
В інших випадках, наприклад якщо ви створили в Android Studio новий keystore для підписаного apk, вам потрібно видалити старий застосунок перед встановленням apk. **Обов’язково експортуйте налаштування!**
```

Див. інструкції з [перенесення та встановлення AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Там, де Google вже вимагає [перевірку розробників Android](#android-developer-verification) (з вересня 2026 року, залежно від вашої країни), встановлюйте застосунок через [ADB](#android-developer-verification-adb), а не натисканням на файл APK.

Продовжуйте [тут](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Усунення несправностей

Якщо щось пішло не так, не панікуйте.

Зробіть вдих!

Then check if your problem is already documented on the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

Якщо вам потрібна додаткова допомога, зверніться до інших користувачів **AAPS** у [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) або [Discord](https://discord.gg/4fQUWHZ4Mw).