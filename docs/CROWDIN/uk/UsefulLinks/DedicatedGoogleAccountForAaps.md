# A dedicated Google account for AAPS (optional)

Деякі користувачі **AAPS** воліють використовувати для **AAPS** свою основну поштову скриньку. Інші користувачі **AAPS** (або їхні доглядачі) створюють окрему поштову скриньку для **AAPS** - це необов'язково; нижче ми показуємо приклад, як це зробити.

Якщо ви не хочете створювати окремий акаунт Gmail для **AAPS**, можете відразу перейти до наступного розділу, [Збірка AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Окреме місце на Google Drive означає, що ви не ризикуєте заповнити ліміт свого особистого Google Drive файлами з **Експорт налаштувань**.
- Кожна версія **AAPS** (і допоміжних застосунків, як-от xDrip, BYODA тощо) зберігатиметься в одному місці, яке не залежить від вашого комп'ютера. Якщо ваш ПК або телефон вкрадуть, ви його загубите чи він зламається, ви все одно матимете доступ.
- Однакове налаштування зі схожою структурою папок спрощує онлайн-підтримку для різних користувачів.
- Залежно від налаштування (див. нижче), у вас буде окрема особа-псевдонім для спілкування в спільноті, що може захистити вашу приватність. 
- Діти з цукровим діабетом 1 типу можуть зберегти свою «повсякденну» поштову скриньку як неповнолітні, а для **AAPS** і пов'язаних функцій, які потребують акаунта дорослого, використовувати окремий акаунт.
- Gmail дозволяє зареєструвати до 4 акаунтів на один номер телефону.
```

## How to set up a dedicated Google account for AAPS

(⌛About 10 minutes)

![](../images/Building-the-App/building_0001.png)

Requirements:

* У вас є ПК з Windows (Windows 10 або новіша) і телефон Android (Android 12 або новіший), на якому працюватиме застосунок **AAPS**. These both have all the latest security updates, internet access and admin privileges, since some steps require downloading and installing programs.
* На телефоні Android уже налаштовано вашу особисту «повсякденну» адресу пошти, наприклад акаунт Gmail.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- З міркувань приватності ви можете використати ім'я, яке відрізняється від вашого власного і пов'язане з акаунтом (наприклад, t1dsuperstar). Тоді ви можете використовувати його на публічних форумах **AAPS** і зберігати свою особу в таємниці. Оскільки Google вимагає резервну адресу пошти та номер телефону, вас усе одно можна відстежити.
- Новий акаунт **AAPS** використовуватиме для перевірки той самий номер телефону, що й ваш «_повсякденний_» акаунт. Для перевірки він використовуватиме «повсякденну» адресу пошти;
- Ми налаштуємо пересилання пошти так, щоб усі листи, надіслані на новий окремий акаунт AAPS, пересилалися на основний (тож не потрібно перевіряти дві різні скриньки);
- Використовуйте різні паролі для вашого _повсякденного_ акаунта Gmail і для окремого акаунта Gmail для AAPS
- Якщо ви використовуєте в Google «двоетапну перевірку» (багатофакторну автентифікацію) для одного акаунта Gmail, варто увімкнути її для обох акаунтів Gmail.
- Якщо ви плануєте використовувати Google «Passkeys» (ключі доступу), зареєструйте кілька пристроїв. Так ви не заблокуєте собі доступ. Робіть це лише на пристроях, до яких більше ніхто не має доступу (_тобто_ не на ПК зі спільним обліковим записом, який можуть розблокувати інші люди).
```


```{admonition} Video Walkthrough!
:class: note
Натисніть [тут](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>), щоб переглянути відео про те, як створити окремий акаунт Google.
```

 These are the steps outlined in the video:

У цьому прикладі: 
- Ваш наявний «_повсякденний_» акаунт Google - <donald.muck42@gmail.com> ; ![](../images/Building-the-App/building_0002.png)
- Ваш новий акаунт Gmail для «_AAPS_» буде: <donald.muck42.aaps@gmail.com>; ![](../images/Building-the-App/building_0003.png)


### Перейдіть на <https://account.google.com> 

 Якщо ви вже ввійшли в Google, вас буде перенаправлено на вашу «повсякденну» сторінку **My Account** (мій акаунт). (1) Клацніть у правому верхньому куті сторінки на фото профілю (у цьому випадку проста ![](../images/Building-the-App/building_0002.png) (2) виберіть «_add another account_» (додати інший акаунт).

![](../images/Building-the-App/building_0005.png)


### Введіть дані вашого НОВОГО окремого акаунта: 

- Введіть новий акаунт: 
- Create Account
- for my personal use (для особистого використання). 


### Enter your persona:
 - Enter firstname
 - lastname
 - birthdate (needs to be an Adult age)

### Виберіть НОВУ адресу пошти та пароль

У цьому прикладі до наявної адреси Donald Muck додано «.AAPS»…\
Задайте пароль

### Введіть номер телефону, на який можна отримати SMS для перевірки

Gmail will now send you a unique code to enter for validation.

### Введіть резервну адресу пошти

У цьому випадку це буде ваша наявна «_повсякденна_» адреса пошти…

### Finish setting up the account

Gmail will display the account name. Вас попросять прийняти умови використання Gmail і підтвердити налаштування персоналізації.

### Customize the new profile display

Тепер ви маєте бути на сторінці MyAccount у Gmail, де показано ваш новий окремий акаунт пошти для **AAPS**. The profile picture will be set by default to the first letter of your name. Змініть його на щось унікальне, щоб не плутати… у цьому прикладі Donald.Muck.AAPS замінив ![](../images/Building-the-App/building_0002.png) на ![](../images/Building-the-App/building_0003.png)

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

### Open the Gmail website on both windows to configure the new account

Щоб не стежити за окремою поштовою скринькою, пересилайте всі листи з нового окремого акаунта **AAPS** на ваш повсякденний акаунт\
Ця частина може трохи заплутати, бо вам доведеться перемикатися між обома акаунтами. To make it easier, open 2 separate browser windows on top of each other:

1. Перемістіть наявне вікно браузера у верхню частину екрана і змініть його розмір, щоб воно займало лише приблизно верхню половину екрана…
2. Клацніть правою кнопкою миші на значку браузера на панелі завдань
3. У меню виберіть «New Window» (нове вікно)... і розташуйте його так, щоб воно займало лише нижню половину екрана.

Відкрийте <https://gmail.com> у кожному вікні браузера. Переконайтеся, що ваш особистий акаунт угорі, а новий окремий акаунт **AAPS** унизу, і його легко впізнати за фото профілю в правому верхньому куті. (if needed you can always switch accounts by clicking on the profile picture and selecting the correct one.

![](../images/Building-the-App/building_0009.png)

Ваші головні сторінки Gmail мають виглядати так:\
![](../images/Building-the-App/building_0010.png)

 ### У новому акаунті Gmail (нижнє вікно) відкрийте налаштування Gmail…

- Клацніть на шестірню ліворуч від фото профілю
- потім виберіть «**See all Settings**» (переглянути всі налаштування)

![](../images/Building-the-App/building_0011.png)

### Setup forwarding…

- Click on the “Forwarding and POP/IMAP” Setting tab
- Click on “add a forwarding address”
- Add your “everyday” email address
- Gmail надішле код перевірки на вашу «повсякденну» адресу пошти.
- You will switch back to your everyday profile and click on the link to verify that you accept the forwarding (or get the code from Gmail’s verification email in your “everyday” Gmail window and cut and paste it in your “new AAPS dedicated” Gmail window).

There is quite a bit of back and forth between the windows but this will ensure that when you check your “everyday” account emails you will also see the emails forwarded from your AAPS dedicated account such as Gmail alerts.

![](../images/Building-the-App/building_0012.png)

### Verify the forwarded email address

- У «повсякденному» Gmail (верхнє вікно) ви отримаєте лист «Gmail forwarding Confirmation» (підтвердження пересилання Gmail).
- Open it and “click the link to confirm the request”

### Archive forwarded emails in the new dedicated Gmail account (bottom window)

<!---->

1. Refresh the bottom window
2. Check “forward incoming email”
3. And archive Gmail’s copy (to keep your new dedicated mailbox clean)
4. Прокрутіть сторінку до самого низу, щоб зберегти зміни\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Вітаємо! Now you have created an AAPS-dedicated Google account. Наступний крок - [зібрати застосунок AAPS](../SettingUpAaps/BuildingAaps.md).