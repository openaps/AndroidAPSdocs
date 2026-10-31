# Актуализиране с Android Studio

## Компилирайте сами, вместо да изтегляте

**AAPS** не може да се изтегли готово заради правилата за медицинските изделия. Законно е да компилирате приложението за собствена употреба, но НЕ БИВА да давате копие на други хора! Вижте [страницата с често задавани въпроси](../UsefulLinks/FAQ.md) за подробности.

```{note}
Ако искате да компилирате **AAPS** на нов компютър: копирайте резервното копие на файла на хранилището за ключове на новия компютър. След това следвайте [процедурата за първоначално компилиране на **AAPS**](../SettingUpAaps/BuildingAaps.md) вместо това ръководство. Единствената разлика е, че вместо да създавате ново хранилище за ключове, можете да изберете това, което сте копирали на новия компютър.
```

## Преглед на актуализирането до нова версия на AAPS с Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Ако имате проблеми, вижте отделната страница за [отстраняване на неизправности в Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Експортирайте настройките си

Експортирайте настройките от съществуващата версия на **AAPS** на телефона си. Може да не ви потрябват, но е по-добре да сте застраховани.

Вижте страницата [Експорт и импорт на настройките](ExportImportSettings.md), ако не помните как се прави това.

### Проверете версията на Android Studio

Минималната нужна версия е описана в [инструкциите за компилиране](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Ако вашата версия е по-стара, моля, [първо актуализирайте Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Актуализирайте локалното си копие

* Отворете съществуващия си проект AAPS в Android Studio. Може да се наложи да изберете проекта си. Натиснете (два пъти) върху проекта AAPS.

  ![Android Studio – избор на проект (Select Project)](../images/update/01_ProjectSelection.png)

* В лентата с менюта на Android Studio изберете Git -> Fetch

   ![Меню на Android Studio – Git – Fetch](../images/update/02_GitFetch.png)

* В долния десен ъгъл ще видите съобщение, че Fetch е успешен.

   ![Меню на Android Studio – Git – Fetch е успешен](../images/update/03_GitFetchSuccessful.png)

* Сега в лентата с менюта изберете Git -> Pull

   ![Меню на Android Studio – Git – Pull](../images/update/04_GitPull.png)

* Оставете всички опции както са (origin/master) и изберете Pull

   ![Android Studio – Git – диалог Pull](../images/update/05_GitPullOptions.png)

* Изчакайте, докато изтеглянето приключи. Ще виждате информация за това в долната лента. Когато приключи, ще видите съобщение за успех.

  ```{note}
  Обновените файлове може да са различни! This is not an indication of a problem.
  ```

   ![Android Studio – Pull е успешен](../images/update/06_GitPullSuccess.png)

* Ще се изпълни Gradle Sync, за да изтегли някои зависимости. Изчакайте, докато приключи.

  ![Android Studio – Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Проверете версията на JVM

Тази проверка е особено нужна, ако вече сте компилирали предишна версия на **AAPS** на същия компютър.

Проверете в [инструкциите за компилиране](#Building-APK-recommended-specification-of-computer-for-building-apk-file) нужната версия на JVM за версията на **AAPS**, която компилирате сега. След това следвайте стъпките, описани в [Incompatible Gradle JVM](#incompatible-gradle-jvm), за да сте сигурни, че използвате правилната версия.

(Update-to-new-version-build-the-signed-apk)=
### Компилирайте подписания APK файл

Изходният ви код вече е текущата издадена версия и всички предварителни условия са проверени. Време е да компилирате подписания apk, както е описано в [раздела за компилиране на подписан apk](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Прехвърлете и инсталирайте apk файла
Трябва да прехвърлите apk файла на телефона си, за да можете да го инсталирате.

```{note}
Ако сте компилирали със същото съществуващо хранилище за ключове в Android Studio, не е нужно да премахвате съществуващото приложение от телефона си. Когато инсталирате apk файла, следвайте указанията за инсталиране на актуализации.
В други случаи, например ако създадете ново хранилище за ключове в Android Studio за подписания apk, трябва да изтриете старото приложение, преди да инсталирате apk файла. **Не забравяйте да експортирате настройките си!**
```

Вижте инструкциите за [прехвърляне и инсталиране на AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Там, където се прилага [проверката на разработчиците за Android](#android-developer-verification) на Google (от септември 2026 г., в зависимост от държавата ви), инсталирайте с [ADB](#android-developer-verification-adb), вместо да докосвате APK файла.

Продължете [тук](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Отстраняване на неизправности

Ако нещо се обърка, не се паникьосвайте.

Поемете си дъх!

След това вижте отделната страница [Отстраняване на неизправности в Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md), за да проверите дали проблемът ви вече е описан!

Ако ви трябва още помощ, моля, обърнете се към други потребители на **AAPS** във [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) или [Discord](https://discord.gg/4fQUWHZ4Mw).