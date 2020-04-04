Установите Git
**************************************************
Windows
==================================================
1. Download git
--------------------------------------------------
* ** Вы должны быть в сети когда Android Studio загружает обновления! **
* Любая версия git должна работать. Например <https://git-scm.com/download/win>https://git-scm.com/download/win`_.
* Убедитесь, что знаете путь установки. Он понадобится на следующем шаге.

.. изображение: ../images/Update_GitPath.png
  Путь установки Git

2. Задайте путь к git в параметрах Android Studio
--------------------------------------------------
* Открыть файл > Параметры 

  .. изображение:: ../images/Update_GitSettings1.png
    :alt: Android Studio - открыть настройки

* Щелкните по небольшому треугольнику рядом с пунктом Version Control (1.), чтобы открыть подменю.
* Нажмите Git (2.).
Убедитесь, что выбран метод обновления "Слияние" (merge) (3.).
* Проверьте, может ли Android Studio найти путь к файлу git.exe автоматически, нажав кнопку "Тест" (4.)

  .. изображение:: ../images/AndroidStudio361_09.png
    :alt: Android Studio - настройки

* Если автоматическая настройка прошла успешно, отобразится версия git.
* Нажмите кнопку "OK" в диалоговом окне (1.) и "OK" в окне параметров (2.).

  .. изображение:: ../images/AndroidStudio361_10.png
    :alt: автоматическая установка git прошла успешно

* В случае, если файл git.exe не найден, нажмите кнопку "OK" в диалоговом окне (1), а затем кнопку с тремя точками (2.).
* Используйте функцию поиск <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html> в проводнике Windows для поиска "git.exe", если не уверены в том, где его можно найти. Вы ищете файл git.exe, находящийся в папке \bin\.
* Выберите путь к файлу git.exe и убедитесь, что вы выбрали папку ** \bin\ ** (3.) и нажмите кнопку "OK" (4).
* Закройте окно настроек, нажав кнопку "ОК" (5.).

  .. изображение:: ../images/AndroidStudio361_11.png
    :alt: Автоматическая установка git не выполнена
 
3. Перезагрузитесь
--------------------------------------------------
* Перезагрузите компьютер, чтобы обновить среду системы.

4. Проверьте параметры git в Android Studio
--------------------------------------------------
* Откройте окно терминала в Android Studio
* Enter "`git - -version`" (without quotation marks and no spaces between the two - [minus sign]!) and press Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: result git-version

Mac
==================================================
* Любая версия git должна работать. For example `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the `official git documentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* If you install git via homebrew there is no need to change any preferences. На всякий случай: Их можно найти здесь: Android Studio - Настройки.
