(aaps-ci-google-drive-auth)=

# Компилиране в браузъра – Стъпка 3: Разрешаване на достъп до Google Drive

```{note}
Това е **Стъпка 3** от [Компилиране в браузъра](BrowserBuild.md). Първо изпълнете [Стъпка 2 – Създаване на хранилище за ключове за подписване](BrowserBuildKeystore.md).
```

```{warning}
Без значение кои от предишните инструкции сте следвали (Вариант 1 или Вариант 2), ТРЯБВА да добавите разрешението за Google Drive, за да може компилирането в браузъра да работи.
```

Бележка: Ако вече сте изпълнили тази част от видеото, сега можете да преминете направо към [Стъпка 4 – Компилиране на APK](BrowserBuildAPK.md).

```{warning}
Ако разрешаването в Google не започне или подготвителната страница даде грешка, затворете подготвителната страница, отворете отново `aaps-ci-preparation.html` по същия начин както в Стъпка 2 и започнете тази стъпка отначало. Вижте [отстраняване на неизправности](#aaps-ci-preparation-web).
```

Върнете се в раздела с подготвителната страница.

Превъртете надолу до раздела Google Drive Auth и докоснете Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Изберете своя профил в Google.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Превъртете надолу и разрешете достъпа. Уеб страницата има нужда от него, за да получи ключа за удостоверяване в Google Drive.

Докоснете Continue.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Полето `GDRIVE_OAUTH2` ще се попълни; докоснете горния бутон Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Върнете се в раздела с GitHub.

Превъртете надолу до Repository secrets и докоснете New repository secret.

Ако сте следвали Вариант 1, трябва да виждате това:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Ако сте следвали Вариант 2, ще има повече ключове:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

В полето Name поставете текста, който току-що копирахте. Задръжте пръста си върху текстовото поле, за да се покаже менюто за поставяне.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Превключете към раздела с подготвителната страница.

Докоснете втория бутон Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Върнете се в раздела с GitHub.

1. В полето Secret поставете текста, който току-що копирахте. Задръжте пръста си върху текстовото поле, за да се покаже менюто за поставяне.

2. Докоснете Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Сега трябва да имате два (Вариант 1) или пет (Вариант 2) секрета (secrets).

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

След като компилира приложението, GitHub вече ще може да записва apk файла на AAPS във вашия Google Drive.

----

**Следваща стъпка: [Стъпка 4 – Компилиране на APK](BrowserBuildAPK.md) →**
