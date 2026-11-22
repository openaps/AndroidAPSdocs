(aaps-builder-setup)=

# Страница настройки AAPS Builder

Соберите свое собственное приложение **AAPS** на GitHub. Не нужно устанавливать программы, не нужен терминал. В первый раз это занимает около 10 минут, потом вы сами запускаете каждую сборку.

Каждый шаг подробнее, со снимками экрана, описан на странице [Сборка через браузер с AAPS Builder](#aaps-builder). Держите ту страницу открытой в другой вкладке.

Кнопки ниже открывают GitHub в новой вкладке Chrome. Чтобы вернуться на эту страницу, нажмите кнопку вкладок рядом с адресной строкой Chrome (квадрат с числом) и выберите эту страницу.

(aaps-builder-setup-step1)=

## Шаг 1 – Создайте свой приватный репозиторий сборки

Так в вашей учетной записи GitHub создается ваша собственная приватная копия AAPS Builder: репозиторий, в котором уже есть workflow сборки. Только вы видите его и приложения, которые он собирает. Делать fork AndroidAPS **не** нужно: исходный код AAPS скачивается из официального репозитория AndroidAPS при каждой сборке.

<label class="aapsb-label" for="aapsb-user">Ваше имя пользователя GitHub</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Сначала войдите на github.com в этом браузере (нет учетной записи? создайте ее бесплатно). Затем вернитесь сюда. Используйте имя пользователя (оно показано в вашем профиле GitHub), а не адрес e-mail: страница спрашивает у GitHub, существует ли такое имя пользователя.

<label class="aapsb-label" for="aapsb-repo">Название вашего репозитория</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Оставьте предложенное название. Вы уже создали репозиторий с другим названием? Введите здесь точно это название.

```{note}
**У вас уже есть репозиторий AAPS Builder** (созданный с прежней версией этой страницы)? Не создавайте новый: введите здесь точно его название, пропустите кнопку ниже и один раз обновите его workflow: см. **Обновление вашей копии** в конце этого шага. Ваши секреты остаются как есть.

Если вы все же хотите новый репозиторий, выберите название, которого у вас еще нет, например `my-aaps-2`, и используйте то же хранилище ключей в шаге 2.

Не вводите название своего fork AndroidAPS: fork публичный, и он уже собирает приложение своим workflow **AAPS CI**.
```

Ваш репозиторий:<code class="aapsb-repoUrl"></code>

Проверьте это название, прежде чем нажимать кнопки ниже: страница запоминает название с вашего прошлого посещения.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Создать мой приватный репозиторий</a>

На открывшейся странице GitHub все уже заполнено: шаблон `nightscout/aaps-builder`, ваша учетная запись как владелец, название вашего репозитория и **Private**. Ничего не меняйте и оставьте **Include all branches** без флажка.

1. Нажмите зеленую кнопку **Create repository**.
2. GitHub показывает ваш новый репозиторий с папкой `.github` и файлом `README.md`: в нем находится workflow сборки. Вернитесь на эту страницу для шага 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Он создан не из шаблона. Удалите его (**Settings** → внизу страницы → **Delete this repository**), затем снова нажмите **Создать мой приватный репозиторий**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

У вас уже есть репозиторий: закройте вкладку GitHub и продолжайте на этой странице. Если ваш ключ уже в нем, перейдите к [шагу 4](#aaps-builder-setup-step4). См. [устранение неполадок](#aaps-builder-ts-repo-exists).
```

<div class="admonition dropdown">
<p class="admonition-title">Updating your copy (existing AAPS Builder repository)</p>

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. Ваш секрет `KEYSTORE_SET` остается как есть.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Нажмите меню **⋯** вверху справа над файлом, затем **Edit file… In place** (на компьютере нажмите на карандаш).
3. Замените весь текст скопированным workflow (на телефоне: нажмите и удерживайте → **Выбрать все** → **Вставить**), затем дважды нажмите **Commit changes…**. Первая строка файла показывает его версию.

</div>

(aaps-builder-setup-step2)=

## Шаг 2 – Ваш ключ подписи

Приложение должно быть подписано вашим собственным ключом. Всегда используйте один и тот же ключ, иначе для обновления придется удалить AAPS (и потерять его настройки). Выберите одну из двух вкладок.

`````{tab-set}

````{tab-item} У меня уже есть хранилище ключей
Например, из Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Файл хранилища ключей</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Пароль хранилища ключей</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Псевдоним ключа</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Пароль ключа совпадает с паролем хранилища ключей</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Пароль ключа</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Проверить и продолжить</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Создать новый ключ
Собираете AAPS впервые? Здесь, в вашем браузере, создается новый ключ. Никуда ничего не отправляется.

<label class="aapsb-label" for="aapsb-newPass">Придумайте пароль (не менее 8 символов, без букв с диакритикой)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Повторите пароль</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Создать ключ</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Сохраните резервную копию ключа!**

Скачайте файл. Храните эти три вещи вместе, в надежном месте вне телефона (например, в своем облачном хранилище):

- файл `aaps-keystore.jks`
- ваш пароль
- псевдоним ключа: **`key0`**

Все три понадобятся, если вы когда-нибудь будете собирать AAPS другим способом, например в Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Скачать резервную копию (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Шаг 3 – Передайте ключ в репозиторий
<span id="aapsb-s3wait">Сначала выполните шаг 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Открыть страницу секретов</a> Откроется: <code class="aapsb-repoUrl"></code> Видите «Page not found» (404)? Сначала проверьте, что вы вошли на github.com в этом браузере: если вы не вошли, GitHub показывает 404 для приватных репозиториев. Иначе имя пользователя или название репозитория в шаге 1 не совпадает с вашим репозиторием: проверьте их на github.com и введите в шаге 1. 2. Нажмите «Копировать имя», затем вставьте его в маленькое поле «Name»: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Копировать имя</button> 3. Нажмите «Копировать секрет», затем вставьте длинный код в большое поле «Secret»: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Копировать секрет</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Секрет — это очень длинный код (тысячи символов), а НЕ слово KEYSTORE_SET. Сначала скопируйте и вставьте имя, потом длинный код. 4. Нажмите «Add secret». Готово, больше это делать не нужно.
</div>
(aaps-builder-setup-step4)=
## Шаг 4 – Соберите приложение

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Открыть страницу сборки</a>

   Откроется: <code class="aapsb-repoUrl"></code>

   Видите «Page not found» (404)? Сначала проверьте, что вы вошли на github.com в этом браузере: если вы не вошли, GitHub показывает 404 для приватных репозиториев. Иначе имя пользователя или название репозитория в шаге 1 не совпадает с вашим репозиторием: проверьте их на github.com и введите в шаге 1. Вместо этого открылось приложение GitHub? Нажмите «RUN WORKFLOW», проверьте версию и вариант и снова нажмите «RUN WORKFLOW». Если приложение все еще показывает «Nothing to see here», потяните список вниз, чтобы увидеть свою сборку.
2. Если появится запрос, нажмите зеленую кнопку, чтобы включить workflow.
В списке workflow есть две записи: используйте «Build AAPS». Не обращайте внимания на «AAPS Builder»: в нем хранятся шаги сборки, и у него нет кнопки «Run workflow».
3. Нажмите «Run workflow», затем зеленую кнопку «Run workflow». «latest» собирает самую новую версию AAPS. ***совет:*** *можно собрать другую версию, если ввести название ее [тега](https://github.com/nightscout/AndroidAPS/tags) вместо «latest»*
4. Подождите около 15–30 минут. Зеленая галочка означает, что сборка готова.
Хотите получать письмо, когда сборка готова? GitHub присылает письмо, только если сборка не удалась. Чтобы получать письмо и при успешной сборке: на github.com откройте свое фото профиля → Settings → Notifications → System → Actions и снимите флажок «Only notify for failed workflows».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Откройте свой репозиторий и проверьте, что в нем есть папка `.github` с файлом `workflows/build.yml`. Если репозиторий пустой, он создан не из шаблона: удалите его (**Settings** → внизу страницы → **Delete this repository**) и снова выполните [шаг 1](#aaps-builder-setup-step1) с помощью кнопки.
2. Файл есть, но GitHub показывает «This workflow does not exist»: см. [устранение неполадок](#aaps-builder-ts-workflow-not-found).
3. Откройте вкладку Actions. Если там написано, что workflow отключены, нажмите зеленую кнопку, чтобы включить их. Затем нажмите в списке «Build AAPS».
```

(aaps-builder-setup-step5)=

## Шаг 5 – Установите приложение на телефон

```{admonition} Before every update: back up your settings!
:class: warning

1. В AAPS: «Обслуживание» → «Экспорт настроек». (Делайте это и так регулярно, например после изменения профиля или раз в месяц.)
2. Скопируйте экспортированный файл С телефона в другое место, например в Google Диск или Dropbox. Резервная копия, которая хранится только на телефоне, пропадет вместе с телефоном.
3. Храните там же файлы APK и несколько старых экспортов. Тогда вы всегда сможете вернуться назад.

[Как экспортировать настройки](#ExportImportSettings-Settings-Export) · [Часто задаваемые вопросы AAPS: как организовать резервные копии](#FAQ-organize-backups)
```

1. Откройте эту страницу на телефоне в веб-браузере (Chrome). Если потребуется, войдите на github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Открыть мои сборки</a>

   Вместо этого открылось приложение GitHub? Оно не может скачивать сборки. В приложении откройте самую новую сборку и нажмите «Artifacts ↗» или нажмите значок «Поделиться» и выберите Chrome (или «Copy link», затем вставьте ссылку в адресную строку Chrome). Продолжайте в Chrome.

   Видите «Page not found» (404)? Сначала проверьте, что вы вошли на github.com в этом браузере: если вы не вошли, GitHub показывает 404 для приватных репозиториев. Иначе имя пользователя или название репозитория в шаге 1 не совпадает с вашим репозиторием: проверьте их на github.com и введите в шаге 1.

   Чтобы ссылки GitHub не открывались в приложении: «Настройки» Android → «Приложения» → GitHub → «Открывать по умолчанию» → выключите «Открывать поддерживаемые ссылки».
3. Нажмите самую новую сборку с зеленой галочкой ✅.
4. Прокрутите вниз до сводки сборки и нажмите большую ссылку «📱 Download AAPS …» (или прокрутите еще ниже до «Artifacts» и нажмите aaps-….apk). Прокручивайте пальцем по тексту, а не по схеме шагов сборки.
5. Когда скачивание завершится, нажмите на файл и выберите «Установить». Если потребуется, разрешите установку приложений из этого источника.
6. aaps-wear-….apk — для смарт-часов. Пропустите его, если у вас их нет.

APK не показывается в разделе «Code» вашего репозитория, только на странице сборки. Он хранится 14 дней.

Новая версия AAPS? Сделайте резервную копию настроек, затем соберите приложение в [шаге 4](#aaps-builder-setup-step4). Ваш репозиторий никогда ничего не собирает сам.

(aaps-builder-setup-step6)=

## Шаг 6 – Необязательно: приложение в Google Диске

Хотите, чтобы APK появлялся в вашем Google Диске (и хранился всегда)? Добавьте еще один секрет, GDRIVE_OAUTH2. Эта страница получит его у Google за вас. После этого AAPS может видеть и менять в вашем Google Диске только созданные им файлы, больше ничего.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Подключить Google Диск</a>

   Google откроется в новой вкладке. Выберите свою учетную запись Google и разрешите AAPS видеть и менять свои собственные файлы. Если Google пишет, что приложение не проверено, нажмите «Advanced», затем «Go to …».
2. Затем новая вкладка показывает ошибку, например **«This site can't be reached»** или **«127.0.0.1 refused to connect»**. **Так и должно быть.** Ответ Google находится в адресе этой вкладки.

   Нажмите на адресную строку этой вкладки, затем на значок копирования рядом с адресом (на компьютере: выделите весь адрес и скопируйте его). Он начинается с `http://127.0.0.1:47913/`. Вернитесь на эту страницу в течение нескольких минут: ответ действителен только недолго.
3. <label class="aapsb-label" for="aapsb-googleUrl">Вставьте сюда скопированный адрес</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Получить GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Открыть страницу секретов</a>

   Откроется: <code class="aapsb-repoUrl"></code>

   Видите «Page not found» (404)? Сначала проверьте, что вы вошли на github.com в этом браузере: если вы не вошли, GitHub показывает 404 для приватных репозиториев. Иначе имя пользователя или название репозитория в шаге 1 не совпадает с вашим репозиторием: проверьте их на github.com и введите в шаге 1.
5. Нажмите «Копировать имя», затем вставьте его в маленькое поле «Name»: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Копировать имя</button>
6. Нажмите «Копировать секрет», затем вставьте код в большое поле «Secret»: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Копировать секрет</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Нажмите «Add secret».

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Подойдет и значение со страницы подготовки AAPS для другого способа сборки через браузер: откройте страницу секретов, добавьте имя `GDRIVE_OAUTH2` и вставьте свое значение. См. [Сохранение сборок в Google Диск](#aaps-builder-google-drive).
```

При следующей сборке файлы APK также сохранятся в Google Диск, в папку AAPS/&lt;version&gt;.

Если вы не собираете 6 месяцев или меняете пароль Google, Google прекращает доступ. Тогда сборка сообщит об этом: повторите этот шаг.

----

Все на этой странице работает в вашем браузере. Ваш ключ и пароли никуда не отправляются, кроме мест, куда вы сами их вставляете. В GitHub отправляется только ваше имя пользователя GitHub, чтобы проверить, что оно существует. В шаге 6 ответ Google отправляется только в Google, чтобы получить GDRIVE_OAUTH2. Workflow сборки поддерживают разработчики AAPS в [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), на основе AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Длинный код скопирован: вставьте его в большое поле «Secret», затем нажмите «Add secret».</span>
- <span data-aapsb-msg="copiedName">Имя скопировано: вставьте его в маленькое поле «Name».</span>
- <span data-aapsb-msg="userOk">✓ Пользователь GitHub найден.</span>
- <span data-aapsb-msg="userBad">✗ Пользователя GitHub с таким именем нет. Используйте имя пользователя (оно показано в вашем профиле GitHub), а не адрес e-mail.</span>
- <span data-aapsb-msg="copiedShort">Скопировано ✓</span>
- <span data-aapsb-msg="needUser">Сначала введите свое имя пользователя GitHub в шаге 1.</span>
- <span data-aapsb-msg="errPipe">Пароли и псевдоним не могут содержать символ |</span>
- <span data-aapsb-msg="errNoFile">Выберите файл хранилища ключей.</span>
- <span data-aapsb-msg="errEmpty">Введите пароль и псевдоним.</span>
- <span data-aapsb-msg="errPass">Неверный пароль хранилища ключей.</span>
- <span data-aapsb-msg="errKeyPass">Неверный пароль ключа.</span>
- <span data-aapsb-msg="errAlias">Псевдоним не найден в хранилище ключей. Доступны: {aliases}</span>
- <span data-aapsb-msg="errFormat">Это не похоже на файл хранилища ключей.</span>
- <span data-aapsb-msg="okHave">Хранилище ключей в порядке! Перейдите к шагу 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Хранилище ключей прочитано. Пароль будет проверен при сборке. Перейдите к шагу 3.</span>
- <span data-aapsb-msg="errShort">Пароль должен содержать не менее 8 символов.</span>
- <span data-aapsb-msg="errAscii">Используйте только a–z, A–Z, 0–9 и символы, например ! ? # – без пробелов, без букв с диакритикой и без |</span>
- <span data-aapsb-msg="errMatch">Пароли не совпадают.</span>
- <span data-aapsb-msg="working">Создание ключа…</span>
- <span data-aapsb-msg="okNew">Ключ создан. Скачайте резервную копию ниже, затем перейдите к шагу 3.</span>
- <span data-aapsb-msg="gNoUrl">Сначала вставьте полный адрес вкладки Google.</span>
- <span data-aapsb-msg="gNoCode">В этом адресе нет ответа от Google. Скопируйте полный адрес вкладки, которая показывает ошибку, начиная с http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Доступ к Google не был разрешен. Снова нажмите «Подключить Google Диск» и разрешите доступ.</span>
- <span data-aapsb-msg="gOldUrl">Этот адрес относится к предыдущей попытке. Снова нажмите «Подключить Google Диск» и используйте новый адрес.</span>
- <span data-aapsb-msg="gWorking">Запрос к Google…</span>
- <span data-aapsb-msg="gFailed">Google не принял ответ ({error}). Ответ действителен только несколько минут и только один раз: снова нажмите «Подключить Google Диск».</span>
- <span data-aapsb-msg="gNoRefresh">Google не выдал долгосрочный доступ. Снова нажмите «Подключить Google Диск».</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 готов. Добавьте его как секрет ниже.</span>
- <span data-aapsb-msg="gCopied">Код скопирован: вставьте его в большое поле «Secret», затем нажмите «Add secret».</span>

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
