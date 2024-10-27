# Специальная учетная запись Google для AAPS (необязательно)

Некоторые пользователи **AAPS** предпочитают использовать свою главную учетную запись электронной почты для **AAPS**. Напротив, другие заводят специальную учетную запись электронной почты именно для **AAPS** - но это необязательно, мы приводим пример того, как это сделать ниже.

If you don't want to set up an **AAPS**-dedicated Gmail account, you can just go straight to the next section, [building AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Dedicated Google drive space means you will not risk filling up your personal Google drive limit with **Export Preferences**.
- Each version of **AAPS** (and supporting apps like xdrip+, BYODA, etc) will be stored in one single place which is independent of your computer hardware. If your PC or phone is stolen/lost/broken you will still have access.
- By harmonizing the setup, it will make online support simpler across users with similar folder structure.
- Depending on the setup (see below), you will have a separate identity as an alias to communicate within the community which can protect your privacy. 
- Children with T1D can preserve their own “everyday” email account as minors while using **AAPS** and associated features which require an adult account.
- Gmail allows you to register up to 4 accounts under the same phone number.
```

## Как создать специальную учетную запись Google для AAPS

(⌛Примерно 10 минут)

![](../images/Создание приложения/building_0001.png)

Требования:

- Компьютер с Windows (Windows 10 или новее) и телефон Android (Android 9 или новее), на котором будет размещено приложение **AAPS**. Оба компонента должны иметь все последние обновления безопасности, доступ в интернет и права администратора, так как некоторые шаги требуют загрузки и установки программ.
- Телефон Android с уже настроенным личным "ежедневным" адресом электронной почты, например учетной записью Gmail.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- You could use a name different to your own, which has relevance to the account (like t1dsuperstar) for privacy reasons. You can then use it in **AAPS** public forums while keeping your own identity private. Since Google requires a recovery email and phone number, it is still traceable.
- The new **AAPS** account will use the same phone number for verification as your “_everyday_” one. It will use the “everyday” email address for verification;
- We will setup email forwarding such that any email sent to the new dedicated AAPS account will be forwarded to the primary one (so there is no need to check two different mailboxes);
- Use separate passwords for your _everyday_ Gmail account and the AAPS-dedicated Gmail account
- If you use google “2-step verification” (aka multifactor) authentication for one Gmail account, you might as well do it for both Gmail accounts.
- If you plan to use Google “Passkeys”, make sure you register multiple devices. This is so you don’t lock yourself out. Only do it on devices that nobody else can access (_i.e._ not on a PC with a shared account that other people can unlock).
```



```{admonition} Video Walkthrough! 
:class: Примечание
Нажмите [здесь](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>) для просмотра видео о том, как настроить выделенную учетную запись Google.
```

В этом видео показаны шаги:

На таком примере

- Ваша существующая повседневная учетная запись <donald.muck42@gmail.com>; ![](../images/Building-the-App/building_0002.png)
- Ваша новая учетная запись Gmail “_AAPS_” будет: <donald.muck42.aaps@gmail.com>; ![](../images/Building-the-App/building_0003.png)

#### Перейдите на <https://account.google.com>

Если вы уже вошли в Google, то будете перенаправлены на свою повседневную страницу **Моя учетная запись**.
(1) Щелкните в верхнем правом углу страницы на вашем профиле картинку (в данном случае просто ![](../images/Building-the-App/building_0002.png)
(2) выберите “_добавить новую учетную запись_”.

![](../images/Создание приложения/building_0005.png)

#### Введите данные вашей новой учетной записи

- Введите название новой учетной записи
- Создайте учётную запись
- для личного пользования

#### Введите личные данные:

- Введите имя
- фамилия
- дату рождения (должна быть для взрослого)

#### Выберите НОВЫЙ адрес электронной почты и пароль

В этом примере учетная запись “.AAPS” добавляется к существующей записи Donald Muck…\
задайте пароль

#### введите номер телефона, который может получить SMS-подтверждение

Теперь Gmail отправит вам уникальный код для проверки.

#### Введите email для восстановления

В этом случае он будет вашим существующим повседневным электронным адресом…

#### Завершите регистрацию учетной записи

Gmail покажет имя аккаунта. Он попросит вас принять условия Gmail и подтвердить настройки персонализации.

#### Настройте отображение нового профиля

На этот момент вы должны быть на странице MyAccount Gmail, где отображается ваша новая учетная запись **AAPS**. По умолчанию изображение профиля будет установлено на первую букву вашего имени. Измените его на что-то уникальное, чтобы избежать путаницы… в этом примере Donald Muck AAPSзаменил ![](../images/Building-the-App/building_0002.png) на ![](../images/Building-the-App/building_0003.png)

![](../images/Создание приложения/building_0007.png)\
![](../images/Создание приложения/building_0008.png)

#### Откройте веб-сайт Gmail в обоих окнах для настройки новой учетной записи

Чтобы не отслеживать отдельную учетную запись электронной почты, перенаправьте все письма из новой учетной записи **AAPS** в ваш повседневный почтовый ящик. Здесь возможна небольшая путаница, так как вам придется переключаться между обеими учетными записями,. Чтобы упростить задачу, откройте два отдельных окна браузера поверх друг друга:

1. Переместите ваш существующий браузер в верхнюю часть экрана и измените его размер до половины верхней части экрана
2. Щелкните правой кнопкой мыши по логотипу браузера в панели задач
3. В меню выберите “Новое окно”... и настройте его так, чтобы он занимал только нижнюю половину экрана.

Откройте <https://gmail.com> в каждом окне браузера. Убедитесь, что ваша персональная учетная запись вверху и новая специальная учетная запись **AAPS** внизу, и что ее легко распознать по картинке профиля в правом верхнем углу. (в случае необходимости, всегда можно переключать учетные записи, нажав на изображение профиля и выбрав правильное изображение.

![](../images/Создание приложения/building_0009.png)

Ваш экран Gmail должен выглядеть так:\
![](../images/Building-the-App/building_0010.png)

#### В новом аккаунте Gmail (нижнем окне) откройте настройки Gmail

- Нажмите на шестеренку слева от изображения профиля
- затем выберите "**Просмотреть все настройки**"

![](../images/Создание приложения/building_0011.png)

#### Настройка переадресации…

- Нажмите на вкладку «Переадресация и POP/IMAP»
- Нажмите «добавить адрес переадресации»
- Добавьте свой повседневный адрес электронной почты
- Gmail отправит код подтверждения на ваш "повседневный" электронный адрес
- Вернитесь к своему повседневному профилю и щелкните ссылку, чтобы подтвердить, что вы принимаете переадресацию (или получите код из письма с подтверждением Gmail в своем «повседневном» окне Gmail, а затем вырежете и вставите его в свое «новое выделенное для AAPS» окно Gmail).

Между окнами придется немного попереключаться, но это будет гарантировать, что при проверке писем вашей повседневной учетной записи, вы также увидите письма, переадресованные с вашей учетной записи AAPS, такие, как оповещения Gmail.

![](../images/Создание приложения/building_0012.png)

#### Подтверждение адреса переадресации электронной почты

- В окне повседневной почты gmail (верхнее окно) вы получите письмо «Подтвердить переадресацию Gmail»
- Откройте его и нажмите на ссылку для подтверждения запроса"

#### Архивируйте переадресованные письма в новом специально выделенном аккаунте Gmail (в нижнем окне)

<!---->

1. Обновите нижнее окно
2. Выделите «переслать входящие письма»
3. И архивируйте копию Gmail (чтобы сохранить ваш новый специально выделенный почтовый ящик чистым)
4. Прокрутите в самый низ, чтобы сохранить изменения\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Создание приложения/building_0014.png)

Поздравляем! Итак, вы создали учетную запись Google, специально выделенную для AAPS. The next step is to [build the AAPS app](../SettingUpAaps/BuildingAaps.md).
