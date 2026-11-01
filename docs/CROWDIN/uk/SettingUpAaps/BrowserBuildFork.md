(github-fork)=

# Збірка в браузері – Крок 1: Створіть свій fork на GitHub

```{note}
Це **Крок 1** [Збірки в браузері](BrowserBuild.md).
```

Вам потрібно буде таємно зберегти у GitHub свій особистий ключ Android Java Key і дані Google Drive (як це зробити, ми пояснимо пізніше).

Оскільки в публічному репозиторії AndroidAPS цього зробити не можна, вам потрібна власна копія вихідного коду (вона називається fork).

## Обліковий запис GitHub

Якщо у вас ще немає облікового запису GitHub, [створіть його](https://github.com/signup).  
Зареєструватися можна за допомогою електронної пошти або облікового запису Google. Пройдіть реєстрацію та перевірку.

Коли обліковий запис буде готовий, [увійдіть у GitHub](https://github.com/login).

## Створіть fork AndroidAPS

Відкрийте офіційний репозиторій AndroidAPS за [цим посиланням](https://github.com/nightscout/AndroidAPS).

Натисніть значок fork. Так у вашому обліковому записі буде створено копію.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Прокрутіть наступний екран униз і натисніть **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Примітка: якщо ви захочете збирати версії для розробників або власні зміни, ви можете **зняти позначку** "Copy the master branch only" (Копіювати лише гілку master).*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Не вдається створити fork, і ви бачите це?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Це означає, що у вас уже є fork AndroidAPS.</br>
Переконайтеся, що він оновлений, і переходьте до кроків підготовки.
```

```{warning}
**Ніколи не видаляйте свій fork, не зробивши резервну копію своїх секретів!**
```

Тепер GitHub показує вашу особисту копію AndroidAPS. Не закривайте цю вкладку браузера.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Далі: [Крок 2 – Створіть свій keystore для підпису](BrowserBuildKeystore.md) →**
