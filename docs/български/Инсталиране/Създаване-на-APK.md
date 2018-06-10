* Изтеглете [AndroidAPS архив](https://github.com/MilosKozak/AndroidAPS) и разархивирайте файловете.

* Стартирайте Android Studio и изберете 'Open an existing Android Studio project', като изберете местоположението на разархивираните файлове.

* Щракнете върху бутона BuildVariants в долния ляв ъгъл на Android Studio и ще видите, че имате няколко различни варианта.


[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/fullwearcontrolrelease.png]] 

* Изберете типа на приложението, който искате да създадете. Има различни модулни опции,  като различните части на името са описани по-долу. За да ви помогнем да изберете препоръчваме означените с **bold** щрифт за AndroidAPS по подразбиране (**fullRelease**), а за родители за дистанционно следене на програмата вариантите означени с _italic_ шрифт (_nsclientWearRelease_).
    * **full - цялото приложение**
    * _nsclient - за изтегляне на събития от NS и вписвания на лечения в Careportal (без APS, просто за отдалечено наблюдение)_
    * openloop - само частта OpenAPS на приложението (без драйвер на помпата)
    * pumpcontrol - само  контрол на помпа DanaR дистанционното от приложението (без loop функция, но с възможност за болус) <br> <br>

    * Debug - само за хора, които биха работили върху кода на приложението

* От Build Menu кликнете върху Generate Signed APK

* Задайте keystore и парола, ако това ви е за пръв път изберете Create new и попълнете детайлите. За повече информация относно използването на keystore вижте [https://developer.android.com/studio/publish/app-signing.html#generate-key](https://developer.android.com/studio/publish/app-signing.html#generate-key)

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png]]

* Изберете същия тип за създаване, както преди, изберете V1 (Jar Signature) и кликнете върху Finish.

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK%20select%20buildtype%20v1.png]]

* Моля, изчакайте известно време, докато се създаде APK. Ще се появи изскачащ прозорец, когато процесът е приключил.

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png]]

* Кликнете върху "Show in Explorer". Ще видите генерираният APK файл. Понякога показването му може да отнеме известно време.

* Копирайте APK файла със същото име като типа buildtype, който сте избрали на вашия Android телефон и го инсталирайте. Ако apk не инсталира и имате по-стара версия на AndroidAPS на телефона си, който е бил подписан с друг ключ, първо ще трябва да го деинсталирате, не забравяйте да експортирате настройките си, ако това се налага.