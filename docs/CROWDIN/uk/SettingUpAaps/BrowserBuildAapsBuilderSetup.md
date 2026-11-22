(aaps-builder-setup)=

# Сторінка налаштування AAPS Builder

Зберіть власний застосунок **AAPS** у GitHub. Не треба встановлювати програми чи працювати з терміналом. Першого разу це займає близько 10 хвилин, далі кожну збірку ви запускаєте самі.

Кожен крок докладніше, зі знімками екрана, описано на сторінці [Збірка в браузері з AAPS Builder](#aaps-builder). Тримайте ту сторінку відкритою в іншій вкладці.

Кнопки нижче відкривають GitHub у новій вкладці Chrome. Щоб повернутися на цю сторінку, натисніть кнопку вкладок поруч з адресним рядком Chrome (квадрат із числом) і виберіть цю сторінку.

(aaps-builder-setup-step1)=

## Крок 1 – Створіть свій приватний репозиторій для збірки

Це створює вашу власну приватну копію AAPS Builder у вашому обліковому записі GitHub: репозиторій, у якому вже є робочий процес збірки. Лише ви бачите його і застосунки, які він збирає. Вам **не** потрібно робити fork AndroidAPS: вихідний код AAPS завантажується з офіційного репозиторію AndroidAPS під час кожної збірки.

<label class="aapsb-label" for="aapsb-user">Ваше ім'я користувача GitHub</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Спочатку увійдіть на github.com у цьому браузері (немає облікового запису? створіть його безкоштовно). Потім поверніться сюди. Вкажіть ім'я користувача (його видно у вашому профілі GitHub), а не адресу електронної пошти: сторінка запитує в GitHub, чи існує таке ім'я користувача.

<label class="aapsb-label" for="aapsb-repo">Назва вашого репозиторію</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Залиште запропоновану назву. Ви вже створили репозиторій з іншою назвою? Введіть тут саме цю назву.

```{note}
**У вас уже є репозиторій AAPS Builder** (створений попередньою версією цієї сторінки)? Не створюйте новий: введіть тут його точну назву, пропустіть кнопку нижче й один раз оновіть його робочий процес: дивіться **Updating your copy** (Оновлення вашої копії) в кінці цього кроку. Ваші секрети залишаються такими, як є.

Якщо ви все ж хочете новий репозиторій, виберіть назву, якої у вас ще немає, наприклад `my-aaps-2`, і використайте той самий keystore на кроці 2.

Не вводьте назву свого fork AndroidAPS: fork є публічним, і він уже збирається власним робочим процесом **AAPS CI**.
```

Ваш репозиторій:<code class="aapsb-repoUrl"></code>

Перевірте цю назву, перш ніж користуватися кнопками нижче: сторінка пам’ятає назву з вашого останнього відвідування.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Створити мій приватний репозиторій</a>

На сторінці GitHub, яка відкриється, усе вже заповнено: шаблон `nightscout/aaps-builder`, ваш обліковий запис як власник, назва вашого репозиторію і **Private**. Нічого не змінюйте і залиште **Include all branches** без позначки.

1. Натисніть зелену кнопку **Create repository** (створити репозиторій).
2. GitHub показує ваш новий репозиторій з папкою `.github` і файлом `README.md`: у ньому є робочий процес збірки. Поверніться на цю сторінку для кроку 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Його створено не з шаблону. Видаліть його (**Settings** → унизу сторінки → **Delete this repository**), а потім знову натисніть **Створити мій приватний репозиторій**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

У вас уже є репозиторій: закрийте вкладку GitHub і продовжуйте на цій сторінці. Якщо ваш ключ уже в ньому, продовжуйте з [кроку 4](#aaps-builder-setup-step4). See [troubleshooting](#aaps-builder-ts-repo-exists).
```

<div class="admonition dropdown">
<p class="admonition-title">Updating your copy (existing AAPS Builder repository)</p>

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. Ваш секрет `KEYSTORE_SET` залишається без змін.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Натисніть меню **⋯** угорі праворуч від файлу, потім **Edit file… In place** (на комп’ютері натисніть олівець).
3. Замініть увесь текст скопійованим робочим процесом (на телефоні: натисніть і утримуйте → **Select all** → **Paste**), потім двічі натисніть **Commit changes…**. Перший рядок файлу показує його версію.

</div>

(aaps-builder-setup-step2)=

## Крок 2 – Ваш ключ для підпису

Застосунок має бути підписаний вашим власним ключем. Завжди використовуйте той самий ключ, інакше для оновлення доведеться видалити AAPS (і втратити його налаштування). Виберіть одну з двох вкладок.

`````{tab-set}

````{tab-item} У мене вже є keystore
Наприклад, з Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Файл keystore</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Пароль keystore</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Псевдонім ключа (alias)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Пароль ключа такий самий, як пароль keystore</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Пароль ключа</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Перевірити і продовжити</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Створити новий ключ
Вперше збираєте AAPS? Новий ключ створюється тут, у вашому браузері. Нікуди нічого не надсилається.

<label class="aapsb-label" for="aapsb-newPass">Виберіть пароль (щонайменше 8 символів, лише латинські літери без діакритики, без кирилиці)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Повторіть пароль</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Створити ключ</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Збережіть резервну копію ключа!**

Завантажте файл. Зберігайте ці три речі разом, у безпечному місці поза телефоном (наприклад, у власному хмарному сховищі):

- файл `aaps-keystore.jks`
- ваш пароль
- псевдонім (alias) ключа: **`key0`**

Усі три знадобляться, якщо ви колись збиратимете AAPS іншим способом, наприклад в Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Завантажити резервну копію (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Крок 3 – Передайте ключ своєму репозиторію
<span id="aapsb-s3wait">Спочатку завершіть крок 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Відкрити сторінку секретів</a> Відкриє: <code class="aapsb-repoUrl"></code> Бачите "Page not found" (404, сторінку не знайдено)? Спочатку перевірте, що ви увійшли на github.com у цьому браузері: для приватних репозиторіїв GitHub показує 404, якщо ви не увійшли. Інакше ім'я користувача або назва репозиторію з кроку 1 не збігаються з вашим репозиторієм: перевірте їх на github.com і введіть у кроці 1. 2. Натисніть «Копіювати назву», потім вставте її в маленьке поле «Name»: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Копіювати назву</button> 3. Натисніть «Копіювати секрет», потім вставте довгий код у велике поле «Secret»: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Копіювати секрет</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Секрет – це дуже довгий код (тисячі символів), а НЕ слово KEYSTORE_SET. Спочатку скопіюйте і вставте назву, потім довгий код. 4. Натисніть «Add secret» (додати секрет). Готово, більше вам ніколи не треба цього робити.
</div>
(aaps-builder-setup-step4)=
## Крок 4 – Зберіть застосунок

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Відкрити сторінку збірки</a>

   Відкриє: <code class="aapsb-repoUrl"></code>

   Бачите "Page not found" (404, сторінку не знайдено)? Спочатку перевірте, що ви увійшли на github.com у цьому браузері: для приватних репозиторіїв GitHub показує 404, якщо ви не увійшли. Інакше ім'я користувача або назва репозиторію з кроку 1 не збігаються з вашим репозиторієм: перевірте їх на github.com і введіть у кроці 1. Натомість відкрився застосунок GitHub? Натисніть «RUN WORKFLOW», перевірте версію та варіант і знову натисніть «RUN WORKFLOW». Якщо застосунок і далі показує «Nothing to see here», потягніть список униз, щоб побачити свою збірку.
2. Якщо з’явиться запит, натисніть зелену кнопку, щоб увімкнути робочі процеси.
У списку робочих процесів є два записи: використовуйте «Build AAPS». Не звертайте уваги на «AAPS Builder»: він містить кроки збірки і не має кнопки «Run workflow».
3. Натисніть «Run workflow», а потім зелену кнопку «Run workflow». «latest» збирає найновішу версію AAPS. ***порада:*** *ви можете зібрати іншу версію, ввівши назву її [тегу](https://github.com/nightscout/AndroidAPS/tags) замість «latest»*
4. Зачекайте приблизно 15–30 хвилин. Зелена галочка означає, що збірку завершено.
Хочете отримати e-mail, коли збірка завершиться? GitHub надсилає e-mail лише тоді, коли збірка не вдалася. Щоб отримувати його й після успішної збірки: на github.com відкрийте своє фото профілю → Settings → Notifications → System → Actions і зніміть позначку «Only notify for failed workflows» (повідомляти лише про невдалі робочі процеси).

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Відкрийте свій репозиторій і перевірте, що в ньому є папка `.github` з файлом `workflows/build.yml`. Якщо репозиторій порожній, його створено не з шаблону: видаліть його (**Settings** → унизу сторінки → **Delete this repository**) і знову виконайте [крок 1](#aaps-builder-setup-step1) за допомогою кнопки.
2. Файл є, але GitHub показує «This workflow does not exist»: дивіться [усунення проблем](#aaps-builder-ts-workflow-not-found).
3. Відкрийте вкладку Actions. Якщо там написано, що робочі процеси вимкнено, натисніть зелену кнопку, щоб їх увімкнути. Потім натисніть «Build AAPS» у списку.
```

(aaps-builder-setup-step5)=

## Крок 5 – Встановіть на телефон

```{admonition} Before every update: back up your settings!
:class: warning

1. В AAPS: Обслуговування → Експорт налаштувань. (Усе одно робіть це регулярно, наприклад після зміни профілю або раз на місяць.)
2. Скопіюйте експортований файл З телефону, наприклад у Google Drive або Dropbox. Резервна копія, яка є лише на телефоні, буде втрачена разом із телефоном.
3. Зберігайте там також APK-файли та кілька старіших експортів. Тоді ви завжди зможете повернутися назад.

[Як експортувати налаштування](#ExportImportSettings-Settings-Export) · [AAPS FAQ: як упорядкувати резервні копії](#FAQ-organize-backups)
```

1. Відкрийте цю сторінку на телефоні, у веббраузері (Chrome). Увійдіть на github.com, якщо буде запит.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Відкрити мої збірки</a>

   Натомість відкрився застосунок GitHub? Він не може завантажувати збірки. У застосунку відкрийте найновішу збірку і натисніть «Artifacts ↗» або натисніть значок «Поділитися» і виберіть Chrome (або «Copy link», а потім вставте посилання в адресний рядок Chrome). Продовжуйте в Chrome.

   Бачите "Page not found" (404, сторінку не знайдено)? Спочатку перевірте, що ви увійшли на github.com у цьому браузері: для приватних репозиторіїв GitHub показує 404, якщо ви не увійшли. Інакше ім'я користувача або назва репозиторію з кроку 1 не збігаються з вашим репозиторієм: перевірте їх на github.com і введіть у кроці 1.

   Щоб посилання GitHub не відкривалися в застосунку: налаштування Android → Apps (Застосунки) → GitHub → Open by default (Відкривати за умовчанням) → вимкніть «Open supported links» (Відкривати підтримувані посилання).
3. Натисніть найновішу збірку із зеленою галочкою ✅.
4. Прокрутіть униз до підсумку збірки і натисніть велике посилання «📱 Download AAPS …» (або прокрутіть ще нижче до «Artifacts» і натисніть aaps-….apk). Прокручуйте, тримаючи палець на тексті, а не на схемі кроків збірки.
5. Коли завантаження завершиться, натисніть на файл і виберіть «Install» (Встановити). Якщо буде запит, дозвольте встановлення застосунків із цього джерела.
6. aaps-wear-….apk – для розумного годинника. Якщо у вас його немає, пропустіть цей файл.

APK не видно в розділі «Code» вашого репозиторію, лише на сторінці збірки. Він зберігається 14 днів.

Нова версія AAPS? Створіть резервну копію налаштувань, потім зберіть нову версію в [кроці 4](#aaps-builder-setup-step4). Ваш репозиторій ніколи нічого не збирає сам.

(aaps-builder-setup-step6)=

## Крок 6 – Необов’язково: отримуйте застосунок у Google Drive

Хочете, щоб APK з'являвся у вашому Google Drive (і зберігався назавжди)? Додайте ще один секрет, GDRIVE_OAUTH2. Ця сторінка отримає його від Google для вас. Після цього AAPS зможе бачити та змінювати у вашому Google Drive лише файли, які він сам створює, і нічого іншого.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Підключити Google Drive</a>

   Google відкривається в новій вкладці. Виберіть свій обліковий запис Google і дозвольте AAPS бачити та змінювати його власні файли. Якщо Google повідомляє, що застосунок не перевірено, натисніть «Advanced» (Додатково), потім «Go to …» (Перейти до …).
2. Потім нова вкладка покаже помилку на зразок **"This site can't be reached"** або **"127.0.0.1 refused to connect"**. **Так і має бути.** Відповідь Google міститься в адресі цієї вкладки.

   Натисніть адресний рядок цієї вкладки, потім значок копіювання поруч з адресою (на комп’ютері виділіть усю адресу та скопіюйте її). Вона починається з `http://127.0.0.1:47913/`. Поверніться на цю сторінку протягом кількох хвилин: відповідь дійсна лише короткий час.
3. <label class="aapsb-label" for="aapsb-googleUrl">Вставте сюди скопійовану адресу</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Отримати GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Відкрити сторінку секретів</a>

   Відкриє: <code class="aapsb-repoUrl"></code>

   Бачите "Page not found" (404, сторінку не знайдено)? Спочатку перевірте, що ви увійшли на github.com у цьому браузері: для приватних репозиторіїв GitHub показує 404, якщо ви не увійшли. Інакше ім'я користувача або назва репозиторію з кроку 1 не збігаються з вашим репозиторієм: перевірте їх на github.com і введіть у кроці 1.
5. Натисніть «Копіювати назву», потім вставте її в маленьке поле «Name»: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Копіювати назву</button>
6. Натисніть «Копіювати секрет», потім вставте код у велике поле «Secret»: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Копіювати секрет</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Натисніть «Add secret» (додати секрет).

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Значення зі сторінки підготовки AAPS іншого способу збірки в браузері теж підходить: відкрийте сторінку секретів, додайте назву `GDRIVE_OAUTH2` і вставте своє значення. Дивіться [Зберігання збірок у Google Drive](#aaps-builder-google-drive).
```

Під час наступної збірки APK-файли також буде збережено в Google Drive у папці AAPS/&lt;version&gt;.

Якщо ви не збираєте 6 місяців або змінюєте пароль Google, Google припиняє доступ. Тоді збірка про це повідомить: повторіть цей крок.

----

Усе на цій сторінці працює у вашому браузері. Ваш ключ і паролі нікуди не надсилаються, крім місць, куди ви самі їх вставляєте. У GitHub надсилається лише ваше ім'я користувача GitHub, щоб перевірити, чи воно існує. На кроці 6 відповідь Google надсилається лише в Google, щоб отримати GDRIVE_OAUTH2. Робочий процес збірки підтримують розробники AAPS у [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). Він базується на AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Довгий код скопійовано: вставте його у велике поле «Secret», потім натисніть «Add secret».</span>
- <span data-aapsb-msg="copiedName">Назву скопійовано: вставте її в маленьке поле «Name».</span>
- <span data-aapsb-msg="userOk">✓ Користувача GitHub знайдено.</span>
- <span data-aapsb-msg="userBad">✗ Користувача GitHub з таким ім'ям немає. Вкажіть ім’я користувача (його видно у вашому профілі GitHub), а не адресу електронної пошти.</span>
- <span data-aapsb-msg="copiedShort">Скопійовано ✓</span>
- <span data-aapsb-msg="needUser">Спочатку введіть своє ім’я користувача GitHub у кроці 1.</span>
- <span data-aapsb-msg="errPipe">Паролі та псевдонім не можуть містити символ |</span>
- <span data-aapsb-msg="errNoFile">Виберіть файл keystore.</span>
- <span data-aapsb-msg="errEmpty">Заповніть пароль і псевдонім.</span>
- <span data-aapsb-msg="errPass">Неправильний пароль keystore.</span>
- <span data-aapsb-msg="errKeyPass">Неправильний пароль ключа.</span>
- <span data-aapsb-msg="errAlias">Псевдонім не знайдено в keystore. Доступні: {aliases}</span>
- <span data-aapsb-msg="errFormat">Це не схоже на файл keystore.</span>
- <span data-aapsb-msg="okHave">Keystore у порядку! Продовжуйте з кроку 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore прочитано. Пароль буде перевірено під час збірки. Продовжуйте з кроку 3.</span>
- <span data-aapsb-msg="errShort">Пароль має містити щонайменше 8 символів.</span>
- <span data-aapsb-msg="errAscii">Використовуйте лише a–z, A–Z, 0–9 і символи, як-от ! ? # – без пробілів, без кирилиці, без літер з діакритикою і без |</span>
- <span data-aapsb-msg="errMatch">Паролі не збігаються.</span>
- <span data-aapsb-msg="working">Створення ключа…</span>
- <span data-aapsb-msg="okNew">Ключ створено. Завантажте резервну копію нижче, потім продовжуйте з кроку 3.</span>
- <span data-aapsb-msg="gNoUrl">Спочатку вставте повну адресу вкладки Google.</span>
- <span data-aapsb-msg="gNoCode">У цій адресі немає відповіді від Google. Скопіюйте повну адресу вкладки, яка показує помилку. Вона починається з http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Доступ до Google не дозволено. Знову натисніть «Підключити Google Drive» і дозвольте доступ.</span>
- <span data-aapsb-msg="gOldUrl">Ця адреса належить до попередньої спроби. Знову натисніть «Підключити Google Drive» і використайте нову адресу.</span>
- <span data-aapsb-msg="gWorking">Запит до Google…</span>
- <span data-aapsb-msg="gFailed">Google не прийняв відповідь ({error}). Відповідь дійсна лише кілька хвилин і лише один раз: знову натисніть «Підключити Google Drive».</span>
- <span data-aapsb-msg="gNoRefresh">Google не надав довготривалого доступу. Знову натисніть «Підключити Google Drive».</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 готовий. Додайте його як секрет нижче.</span>
- <span data-aapsb-msg="gCopied">Код скопійовано: вставте його у велике поле «Secret», потім натисніть «Add secret».</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
