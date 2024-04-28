# Установите Git

## Windows

### 1. Загрузите git

- **Вы должны быть в сети когда Android Studio загружает обновления!**
- Любая версия git должна работать. Например [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Убедитесь, что знаете путь установки. Он понадобится на следующем шаге.

```{admonition} make git.exe available via Windows PATH
:class: note

Make sure that you can call git.exe without the prefing path as Android Studio needs this to find git.exe. It will then automatically sets the path to git.exe correct in the Android Studio settings.

```

![Git installation path](../images/Update_GitPath.png)

### 2. Задайте путь к git в параметрах Android Studio

- Открыть файл > Параметры

  ![Android Studio - open settings](../images/Update_GitSettings1.png)

- Нажмите на маленький треугольник рядом с Контролем Версий (1.) чтобы открыть подменю.

- Нажмите Git (2.).

- Убедитесь, что выбран метод обновления "Слияние" (merge) (3.).

- Проверьте, может ли Android Studio найти путь к файлу git.exe автоматически, нажав кнопку "Тест" (4.)

  ![Android Studio settings](../images/AndroidStudio361_09.png)

- Если автоматическая настройка будет успешной, то будет показана версия git.

- Нажмите кнопку "OK" в диалоговом окне (1.) и "OK" в окне параметров (2.).

  ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

- В случае, если файл git.exe не найден, нажмите кнопку "OK" в диалоговом окне (1), а затем кнопку с тремя точками (2.).

- Используйте функцию [ поиск ](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) в проводнике Windows для поиска "git.exe", если вы не уверены в том, где его можно найти. Вы ищете файл git.exe, находящийся в папке \bin\.

- * Выберите путь к файлу git.exe, убедиdibcm, что выбрана папка ** \bin\ ** (3.) и нажмите кнопку "OK" (4).

- Закройте окно параметров, нажав кнопку "OK" (5.).

  ![Automatic git installation failed](../images/AndroidStudio361_11.png)

### 3. Перезагрузитесь

- Перезагрузите компьютер, чтобы обновить среду системы.

(git-install-check-git-settings-in-android-studio)=
### 4. Проверьте параметры git в Android Studio

- Откройте окно терминала в Android Studio

- Введите `git --version` (версия-- git) (без кавычек и без пробелов между знаками минус!) и нажмите Ввод

  ![git - -version](../images/AndroidStudio_gitversion1.png)

- Если git установлен и подключен правильно, вы получите информацию об установленной версии, которая выглядит следующим образом:

  ![result git-version](../images/AndroidStudio_gitversion2.png)

## Mac

- Любая версия git должна работать. Например [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Используйте homebrew для установки git: `$ brew install git.`.
- Подробности об установке git см. в [официальной git документации](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Если вы устанавливаете git через homebrew, то нет необходимости изменять какие-либо настройки. На всякий случай: Их можно найти здесь: Android Studio - Настройки.
