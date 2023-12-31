# Специальная учетная запись Google для AAPS (необязательно)

Некоторые пользователи **AAPS** предпочитают использовать свою главную учетную запись электронной почты для **AAPS**. Напротив, другие заводят специальную учетную запись электронной почты именно для **AAPS** - но это необязательно, мы приводим пример того, как это сделать ниже.

Если вы не намерены создавать выделенную учетную запись Gmail для **AAPS**, просто перейдите к следующему разделу, [построения AAPS](building-AAPS.md).

:::{admonition} Преимущества специальной учетной записи Google для AAPS

- Выделенное место на Google диске снимает риск превышения лимита персонального дискового пространства **экспортированными настройками**.
- Каждая версия **AAPS** (и поддерживающие приложения, такие как xdrip+, BYODA и т. д.) будет храниться в одном месте, которое не зависит от вашего оборудования. Если ПК или телефон украден/утерял/поврежден, вы все равно будете иметь доступ.
- Благодаря гармонизации настроек пользователям проще осуществлять взаимную поддержку при сходной структуре папок.
- Depending on the setup (see below), you will have a separate identity as an alias to communicate within the community which can protect your privacy. 
- Дети с T1D могут сохранить свою "повседневную" почтовую учетную запись для несовершеннолетних при пользовании **AAPS** и связанных с ним функций, требующих учетной записи для взрослых.
- Gmail позволяет регистрировать до 4 учетных записей под одним и тем же номером телефона.
  :::

## Как создать специальную учетную запись Google для AAPS

(⌛Примерно 10 минут)

![](../images/Building-the-App/building_0001.png)

Требования:

- Компьютер с Windows (Windows 10 или новее) и телефон Android (Android 9 или новее), на котором будет размещено приложение **AAPS**. Оба компонента должны иметь все последние обновления безопасности, доступ в интернет и права администратора, так как некоторые шаги требуют загрузки и установки программ.
- Телефон Android с уже настроенным личным "ежедневным" адресом электронной почты, например учетной записью Gmail.

:::{admonition} что следует продумать при создании новой учетной записи
:class: dropdown

- По соображениям конфиденциальности, в специальной учетной записи вы имеете возможность указать не свое настоящее имя, а псевдоним (например, t1dsuperstar). Вы можете использовать его на публичных форумах **AAPS**, не раскрывая свое настоящее имя. Поскольку Google требует указать запасную электронную почту и номер телефона для восстановления учетной записи, он все равно отслеживается.
- Новая учетная запись **AAPS** будет использовать для верификации тот же номер телефона, что и ваш повседневный. Для верификации будет использоваться ваш повседневный адрес электронной почты;
- Мы настроим переадресацию электронной почты, чтобы все письма, отправленные на новую специальную учетную запись AAPS, пересылались на основной (так что не будет необходимости проверять два различных почтовых ящика);
- Используйте отдельные пароли для повседневной учетной записи Gmail и учетной записи Gmail, выделенной под AAPS
- Если вы используете «двухфакторную верификацию» для одной учетной записи Gmail, это же можно сделать для обоих аккаунтов Gmail.
- Если вы планируете использовать Google «Passkeys», зарегистрируйте несколько устройств. Это чтобы не блокировать себя. Делайте это только на устройствах, к которым никто кроме вас не может получить доступ (_напр. _ не на ПК с общей учетной записью, которую могут разблокировать другие люди).
  :::

:::{admonition}  Видео Инструкция!
:class: Примечание
Нажмите [здесь](https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link) для просмотра видео о том, как настроить выделенную учетную запись Google.
:::

В этом видео показаны шаги:

На таком примере

- Ваша существующая повседневная учетная запись donald.muck42\@gmail.com; ![](../images/Building-the-App/building_0002.png)
- Ваша новая учетная запись Gmail “_AAPS_” будет: donald.muck42.aaps\@gmail.com; ![](../images/Building-the-App/building_0003.png)

#### Перейдите на https\://account.google.com

Если вы уже вошли в Google, то будете перенаправлены на свою повседневную страницу **Моя учетная запись**.
(1) Click on the top right of the page on your profile picture (in this case, a simple ![](../images/Building-the-App/building_0002.png)
(2) select “_add another account_”.

![](../images/Building-the-App/building_0005.png)

#### Enter your NEW dedicated account details: 

- Enter the new account: 
- Create Account
- for my personal use. 

#### Enter your persona:

- Enter firstname
- lastname
- birthdate (needs to be an Adult age)

#### Choose your NEW email address & password

This example appends “.AAPS” to Donald Muck’s existing one…\
Set a password

####  Enter a phone number which can receive the SMS verification

Gmail will now send you a unique code to enter for validation.

#### Enter the recovery email address 

In this case it will be your existing “_everyday_” email…

#### Finish setting up the account

Gmail will display the account name. It will ask you to accept Gmail’s terms and conditions & confirm your personalization settings.

#### Customize the new profile display

At this point you should be on Gmail’s MyAccount page showing your new **AAPS**-dedicated email account. The profile picture will be set by default to the first letter of your name. Change it to something unique to avoid confusion… in this example, Donald.Muck.AAPS has replaced ![](../images/Building-the-App/building_0002.png) with ![](../images/Building-the-App/building_0003.png)

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

#### Open the Gmail website on both windows to configure the new account

So that you don’t need to monitor a separate email account, forward all the emails from the new **AAPS**-dedicated account to your everyday account \
This part can be a bit confusing, since you will have to switch back and forth between both accounts. To make it easier, open 2 separate browser windows on top of each other:

1. Move your existing browser to the top of your screen and resize it such that it only takes about half of the top of the screen… 
2. Right click on your Browser logo in your taskbar 
3. From the menu select “New Window”... and adjust it so it only takes the bottom half of the screen.

Open https\://gmail.com  in each browser window. Make sure your personal account is on top and the new dedicated **AAPS** account is on the bottom, and is easily identifiable by the profile picture in the top right corner. (if needed you can always switch accounts by clicking on the profile picture and selecting the correct one.

![](../images/Building-the-App/building_0009.png)

Your Gmail homepages screen should look like this:\
![](../images/Building-the-App/building_0010.png)

#### In the new Gmail account (bottom window), open Gmail settings… 

- Click on the gear on the left of the profile picture 
- then select “**See all Settings**”

![](../images/Building-the-App/building_0011.png)

#### Setup forwarding…

- Click on the “Forwarding and POP/IMAP” Setting tab
- Click on “add a forwarding address”
- Add your “everyday” email address
- Gmail will send a verification code to your “everyday” email address. 
- You will switch back to your everyday profile and click on the link to verify that you accept the forwarding (or get the code from Gmail’s verification email in your “everyday” Gmail window and cut and paste it in your “new AAPS dedicated” Gmail window).

There is quite a bit of back and forth between the windows but this will ensure that when you check your “everyday” account emails you will also see the emails forwarded from your AAPS dedicated account such as Gmail alerts.

![](../images/Building-the-App/building_0012.png)

#### Verify the forwarded email address

- In the “Everyday” gmail (top window), you will get the “Gmail forwarding Confirmation” email. 
- Open it and “click the link to confirm the request”

#### Archive forwarded emails in the new dedicated Gmail account (bottom window)

<!---->

1. Refresh the bottom window
2. Check “forward incoming email”
3. And archive Gmail’s copy (to keep your new dedicated mailbox clean)
4. Scroll all the way to the bottom to save your changes\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Поздравляем! Now you have created an AAPS-dedicated Google account. The next step is to [build the AAPS app](building-AAPS.md).
