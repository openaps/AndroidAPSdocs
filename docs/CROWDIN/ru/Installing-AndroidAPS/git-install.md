# Установите Git

## Windows

### 1. Загрузите git

- **Вы должны быть в сети когда Android Studio загружает обновления!**
- Любая версия git должна работать. Например [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Убедитесь, что знаете путь установки. Он понадобится на следующем шаге.

```{admonition} make git.exe available via Windows PATH
:class: заметка
Убедитесь, что сможете обратиться к git.exe без префикса, так как Android Studio нуждается в этом для поиска git.exe. It will then automatically sets the path to git.exe correct in the Android Studio settings.

```

```{image} ../images/Update_GitPath.png
Путь установки Git
```

### 2. Задайте путь к git в параметрах Android Studio

- Открыть файл > Параметры

  ```{image} ../images/Update_GitSettings1.png
  :alt: Android Studio - открыть настройки
  ```

- Нажмите на маленький треугольник рядом с Контролем Версий (1.) чтобы открыть подменю.

- Нажмите Git (2.).

- Убедитесь, что выбран метод обновления "Слияние" (merge) (3.).

- Проверьте, может ли Android Studio найти путь к файлу git.exe автоматически, нажав кнопку "Тест" (4.)

  ```{image} ../images/AndroidStudio361_09.png
  :alt: Android Studio - настройки
  ```

- Если автоматическая настройка будет успешной, то будет показана версия git.

- Нажмите кнопку "OK" в диалоговом окне (1.) и "OK" в окне параметров (2.).

  ```{image} ../images/AndroidStudio361_10.png
  :alt: автоматическая установка git прошла успешно
  ```

- В случае, если файл git.exe не найден, нажмите кнопку "OK" в диалоговом окне (1), а затем кнопку с тремя точками (2.).

- Используйте функцию [ поиск ](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) в проводнике Windows для поиска "git.exe", если вы не уверены в том, где его можно найти. Вы ищете файл git.exe, находящийся в папке \bin\.

- * Выберите путь к файлу git.exe, убедиdibcm, что выбрана папка ** \bin\ ** (3.) и нажмите кнопку "OK" (4).

- Закройте окно параметров, нажав кнопку "OK" (5.).

  ```{image} ../images/AndroidStudio361_11.png
  :alt: Автоматическая установка git не выполнена
  ```

### 3. Перезагрузитесь

- Перезагрузите компьютер, чтобы обновить среду системы.

(git-install-check-git-settings-in-android-studio)=
### 4. Проверьте параметры git в Android Studio

- Откройте окно терминала в Android Studio

- Enter `git --version` (without quotation marks and no spaces between the two - \[minus sign\]!) and press Return

  ```{image} ../images/AndroidStudio_gitversion1.png
  :alt: git-версия
  ```

- If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  ```{image} ../images/AndroidStudio_gitversion2.png
  :alt: результат git-версия
  ```

## Mac

- Любая версия git должна работать. For example [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Use homebrew to install git: `` `$ brew install git` ``.
- Подробности об установке git см. в [официальной git документации](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Если вы устанавливаете git через homebrew, то нет необходимости изменять какие-либо настройки. На всякий случай: Их можно найти здесь: Android Studio - Настройки.
