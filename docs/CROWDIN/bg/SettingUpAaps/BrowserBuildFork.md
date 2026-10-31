(github-fork)=

# Компилиране в браузъра – Стъпка 1: Създаване на ваш fork в GitHub

```{note}
Това е **Стъпка 1** от [Компилиране в браузъра](BrowserBuild.md).
```

Ще трябва да запишете тайно в GitHub своя личен ключ Android Java Key и данните за Google Drive (по-нататък ще обясним как).

Тъй като това не може да стане в публичното хранилище (repository) на AndroidAPS, трябва да направите свое лично копие на изходния код (нарича се fork).

## Профил в GitHub

Ако все още нямате профил в GitHub, трябва да [създадете профил в GitHub](https://github.com/signup).  
Можете да се регистрирате с имейла си или с Google. Следвайте процеса на регистрация и потвърждаване.

Когато имате профил, [влезте в GitHub](https://github.com/login).

## Направете fork на AndroidAPS

Отворете официалното хранилище (repository) на AndroidAPS чрез [тази връзка](https://github.com/nightscout/AndroidAPS).

Докоснете иконата за fork. Така ще се създаде копие във вашия собствен профил.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Превъртете надолу на следващия екран и докоснете **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Бележка: можете да **махнете отметката** от „Copy the master branch only“ (копиране само на клона master), ако искате да компилирате версии за разработчици или свои промени.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Не можете да направите fork и виждате това?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Вече има fork](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Това означава, че вече имате fork на AndroidAPS.</br>
Уверете се, че е актуален, и продължете към подготвителните стъпки.
```

```{warning}
**Никога не изтривайте своя fork, без да сте направили резервно копие на секретите си (secrets)!**
```

Сега GitHub показва вашето лично копие на AndroidAPS. Оставете този раздел на браузъра отворен.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Следваща стъпка: [Стъпка 2 – Създаване на хранилище за ключове за подписване](BrowserBuildKeystore.md) →**
