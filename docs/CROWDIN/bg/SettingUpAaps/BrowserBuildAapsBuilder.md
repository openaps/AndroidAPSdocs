(aaps-builder)=

# Компилиране в браузъра с AAPS Builder

```{note}
Това е препоръчителният начин за компилиране на AAPS от **телефон с Android**. Работи и от браузър на всеки компютър. За другите начини за компилиране от компютър или iPhone вижте прегледа [Компилиране в браузъра](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** компилира приложението AAPS вместо вас в GitHub – безплатния уебсайт за хостване на код. Не е нужно да инсталирате нищо на телефона си и няма подготвителен файл, който да отваряте.

A setup page walks you through it. Първия път отнема около 10 мин:

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

**Не** е нужно да правите fork на AndroidAPS: изходният код на AAPS се изтегля от официалното хранилище на AndroidAPS при всяка компилация. Също така **не** ви е нужен Google Drive: изтегляте приложението директно от GitHub.

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. При компилиране работният процес изтегля само официалния изходен код на AAPS и собствените инструменти за компилиране на GitHub. Вашето хранилище за ключове никога не напуска вашия браузър и вашето частно хранилище.
```

(aaps-builder-before-you-start)=

## Преди да започнете

Ще ви трябват:

- **Профил в GitHub** (безплатен). Ако нямате, първо го създайте на [github.com](https://github.com/signup).
- **Уеб браузър**: Chrome на телефона или който и да е браузър на компютър. Влезте в github.com в този браузър, преди да започнете.
- **Имате приложението GitHub на телефона си?** Можете да го запазите. Тогава някои бутони на страницата за настройка отварят приложението вместо Chrome. Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- Вашето **съществуващо хранилище за ключове** (файл `.jks`), неговата парола и неговият псевдоним (alias), ако вече сте компилирали AAPS и искате да го актуализирате без преинсталиране.

```{warning}
**Вашето хранилище за компилиране трябва да остане частно.** Всичко, което една компилация създава, се вижда от всеки, който може да вижда хранилището. Страницата за настройка създава частно хранилище за вас. Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

Частното хранилище получава 2000 безплатни минути за GitHub Actions на месец, което стига за няколко компилации.
```

```{warning}
**Нов ключ или съществуващ ключ: това решава дали ще можете да актуализирате AAPS.**

- **Вече имате AAPS на телефона си, компилиран с хранилище за ключове, което все още имате**: изберете **I already have a keystore** (вече имам хранилище за ключове) на страницата за настройка и го качете. Следващата ви компилация ще актуализира вече инсталирания AAPS. Компилирали сте AAPS с предишния метод за компилиране в браузъра (собствен fork)? Вашето хранилище за ключове е във вашия fork: [първо вземете копие от него](#aaps-builder-from-fork).
- **Компилирате AAPS за първи път или сте загубили хранилището за ключове или паролата му**: изберете **Create a new key** (създаване на нов ключ). Приложение, подписано с нов ключ, **не може да актуализира** AAPS, подписан с друг ключ. Трябва да експортирате настройките си, да копирате файла извън телефона, да деинсталирате стария AAPS, да инсталирате новия и след това да импортирате настройките си: вижте [Преинсталиране на AAPS с ново хранилище за ключове](#reinstall-aaps).

След това винаги използвайте същия ключ. Когато създавате нов ключ, изтеглете резервното копие, което страницата предлага, и го пазете заедно с паролата и псевдонима му (`key0`) на сигурно място извън телефона.
```

(aaps-builder-from-fork)=

## Преминаване от предишния метод за компилиране в браузъра (fork)

Пропуснете този раздел, ако никога не сте компилирали AAPS с предишния метод за компилиране в браузъра (собствено копие, или fork, на AndroidAPS в GitHub, с подготвителния файл и Google Drive).

Вашето хранилище за ключове е запазено като секрети във вашия fork. GitHub никога не показва секрет отново, затова не можете да го копирате в новото си хранилище. Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
Не избирайте **Create a new key**. AAPS, компилиран с нов ключ, не може да актуализира AAPS на вашия телефон.
```

Кой е вашият случай?

- **Използвали сте Вариант 2** (качили сте собственото си хранилище за ключове от Android Studio) и все още имате файла `.jks`, паролите и псевдонима му: тук няма какво да правите. Use that file in step 2.
- **Използвали сте Вариант 1** (подготвителният файл е създал ключа ви) или вече нямате файла на хранилището за ключове: експортирайте го от вашия fork, както е описано по-долу.

За да експортирате хранилището за ключове от вашия fork:

1. Във вашия fork отворете **Settings** → **Secrets and variables** → **Actions** и добавете секрет с име `ZIP_PASSWORD`. Изберете парола само с английски букви и цифри. Тя защитава файла, който ще създадете.
2. Отворете раздела **Actions** на вашия fork, докоснете **CI Keystore Export**, след това **Run workflow**. Повече подробности: [Експортиране на хранилището за ключове](#ci-keystore-export).
3. Когато изпълнението има зелена отметка, отворете своя Google Drive: файлът `keystore.zip` е в папката **AAPS** → **KeyStore**. Ако изпълнението е неуспешно на стъпката за Google Drive, достъпът на вашия fork до Google Drive е изтекъл: вижте [Изтекъл токен за опресняване на Google](#aaps-ci-google-token-expired).
4. Изтеглете `keystore.zip` и го отворете с вашата `ZIP_PASSWORD`: на компютър или на телефона с приложение за файлове, което може да отваря ZIP файлове, защитени с парола. Той съдържа:
   - `keystore.jks`: вашето хранилище за ключове,
   - `keyStoreInfo.txt`: вашите `KEYSTORE_PASSWORD`, `KEY_PASSWORD` и `ALIAS` (обикновено `key0`).
5. Копирайте `keystore.jks` на телефона си (или в Google Drive, за да можете да го изберете оттам).

In [step 2](#aaps-builder-step2) of the setup page:

1. Докоснете **I already have a keystore**.
2. В **Keystore file** изберете `keystore.jks`.
3. В **Keystore password** въведете `KEYSTORE_PASSWORD` от `keyStoreInfo.txt`.
4. В **Key alias** изберете или въведете `ALIAS` от `keyStoreInfo.txt`.
5. Ако `KEY_PASSWORD` е различна от `KEYSTORE_PASSWORD`, махнете отметката от **Key password is the same as the keystore password** и въведете `KEY_PASSWORD`.

Пазете `keystore.zip` и неговата `ZIP_PASSWORD` на сигурно място извън телефона: това е резервното копие на вашия ключ.

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. Можете да запазите своя fork, докато AAPS, компилиран с AAPS Builder, не бъде инсталиран на телефона ви.

## Отворете страницата за настройка

**→ [Отворете страницата за настройка на AAPS Builder](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

Страницата за настройка отваря всяка страница на GitHub в нов раздел на Chrome. За да се върнете към страницата за настройка, докоснете бутона за раздели до адресната лента на Chrome (квадратът с число) и изберете страницата за настройка на AAPS Builder.

Страницата за настройка работи изцяло във вашия браузър: вашият ключ и паролите никога не се изпращат никъде, освен в секрета в GitHub, в който сами ги поставяте. Към GitHub се изпраща само вашето потребителско име в GitHub, за да се провери дали съществува. Тя запомня вашето потребителско име в GitHub и името на хранилището, така че можете да се върнете към нея по всяко време, за да отворите отново страницата със секретите или компилациите си.

![Страницата за настройка на AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Стъпка 1 – Създайте своето частно хранилище за компилиране

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. Само вие можете да виждате него и приложенията, които то компилира.

1. Уверете се, че сте влезли в github.com в този браузър.

2. В **Your GitHub username** въведете вашето потребителско име в GitHub, а не вашия имейл. Страницата го проверява в GitHub: **✓ GitHub user found** означава, че е правилно.

3. В **Name of your repository** оставете предложението `my-aaps`. Ако вече сте създали хранилището си с друго име, въведете точно това име.

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![Попълнена стъпка 1 на страницата за настройка](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. Проверете реда **Your repository:** – той показва `github.com/<your username>/my-aaps`. The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. Докоснете **Create my private repository**.

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![Страницата Create a new repository в GitHub](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **Върнете се в раздела със страницата за настройка** за стъпка 2: докоснете бутона за раздели до адресната лента на Chrome и изберете страницата за настройка.

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

Приложението трябва да бъде подписано с ваш собствен ключ. Изберете един от двата раздела. Първо прочетете [предупреждението за нов или съществуващ ключ](#aaps-builder-before-you-start).

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore (вече имам хранилище за ключове)

1. Докоснете **I already have a keystore**.
2. В **Keystore file** изберете вашия файл `.jks` (или `.keystore`, `.p12`, `.pfx`). На телефон първо копирайте файла на телефона или в Google Drive.
3. В **Keystore password** въведете паролата на хранилището за ключове.
4. В **Key alias** изберете псевдонима си от списъка или го въведете, ако няма списък. За хранилища за ключове, създадени с Android Studio, той обикновено е `key0`.
5. Ако паролата на ключа е различна от паролата на хранилището за ключове, махнете отметката от **Key password is the same as the keystore password** и въведете паролата на ключа.
6. Докоснете **Check and continue**.

Страницата проверява паролата и псевдонима на вашето устройство. **Keystore OK! Continue with step 3.** means everything is right. Ако пише, че паролата ще бъде проверена при компилирането, продължете въпреки това: компилацията ще ви каже, ако нещо не е наред.

### Create a new key (създаване на нов ключ)

1. Докоснете **Create a new key**.

2. Изберете парола и я въведете два пъти. Правила: поне 8 знака, само буквите a–z и A–Z, цифрите 0–9 и символи като `! ? #`. Без интервали, без букви с диакритични знаци и без знака `|`.

3. Докоснете **Create key**. Минават няколко секунди, докато се появи **Key created**.

   ![Формуляр за нов ключ с паролата, въведена два пъти](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Докоснете **Download backup (aaps-keystore.jks)**. Ако Chrome попита **Download file again?** (да се изтегли ли файлът отново?), на телефона ви вече има по-старо резервно копие със същото име: докоснете **Download again** (изтегляне отново). След това Chrome запазва новия ключ като `aaps-keystore (1).jks`: това е файлът за този ключ – пазете го и не го бъркайте с по-стария.

   Пазете тези три неща заедно, на сигурно място извън телефона (например във вашето собствено облачно пространство):

   - файла `aaps-keystore.jks`,
   - вашата парола,
   - псевдонима на ключа: **`key0`**.

   И трите ще ви трябват, ако някога компилирате AAPS по друг начин, например с Android Studio. Ключовете, създадени с по-стара версия на страницата за настройка, имат псевдоним `aaps`.

   ![Създаденият ключ и полето за резервно копие](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. Вашият ключ, неговите пароли и неговият псевдоним се събират в една стойност – секрета `KEYSTORE_SET`.

1. Докоснете **Open the secrets page**.

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub отваря страницата **New secret** на вашето хранилище. На телефон тя е под менюто с настройки: превъртете надолу.

![Формулярът New secret в GitHub](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Превключете към раздела със страницата за настройка и докоснете **Copy name**. Превключете обратно към раздела на GitHub и поставете името в малкото поле **Name**. Името е `KEYSTORE_SET`.

4. Превключете към раздела със страницата за настройка и докоснете **Copy secret**. Превключете обратно към раздела на GitHub и поставете секрета в голямото поле **Secret** (с продължително натискане на телефон). Секретът е много дълъг код от хиляди знаци: страницата за настройка показва първите му знаци до бутона. Не поставяйте там думата `KEYSTORE_SET`.

5. Докоснете **Add secret**. `KEYSTORE_SET` вече се показва под **Repository secrets**.

![Списъкът Repository secrets с KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Това трябва да направите само веднъж.

```{tip}
GitHub показва **Page not found** (404)? Първо проверете дали сте влезли в github.com в този браузър: GitHub показва 404 за частни хранилища, когато не сте влезли. В противен случай потребителското име или името на хранилището в стъпка 1 не съвпада с вашето хранилище. Проверете името в github.com, коригирайте го в стъпка 1 и докоснете бутона отново.
```

(aaps-builder-step4)=

## Step 4 – Build the app

1. На страницата за настройка докоснете **Open the build page**. GitHub отваря страницата **Build AAPS** на вашето хранилище.

   ![Страницата Build AAPS в GitHub с бутона Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Ако вместо това се отвори **приложението GitHub**: докоснете **RUN WORKFLOW**, проверете версията и варианта и докоснете отново **RUN WORKFLOW**. Приложението може все още да показва **Nothing to see here**: дръпнете списъка надолу, за да го опресните и да видите компилацията си. След това продължете със стъпка 4 по-долу.

2. Ако GitHub попита, докоснете зеления бутон, за да разрешите работните процеси (workflows).
3. Докоснете **Run workflow**. Отваря се малък формуляр:
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
   - **Variant** (вариант): оставете `fullRelease` за нормална употреба с помпа. Другите варианти са обяснени във [варианти на компилацията](#browserbuild-variant). `aapsclient3Release` компилира **AAPSClient3**, който е наличен от версия 4.0 на **AAPS** (вижте [За AAPSClient, AAPSClient2 и AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Докоснете зеления бутон **Run workflow**.

   ![Формулярът Run workflow с latest и fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. Компилацията започва и показва **In progress**, с две части: **AAPS / Check**, след това **AAPS / Build AAPS**.

   ![Компилация в процес](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Изчакайте 15–30 мин. Зелена отметка означава, че компилацията е завършена. Червен хикс означава, че компилацията е неуспешна: отворете я, за да прочетете съобщението, след това вижте [отстраняване на неизправности](#aaps-builder-troubleshooting).

   ![Завършена компилация със зелена отметка](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **Имейл, когато компилацията е готова:** GitHub ви изпраща имейл само когато компилацията е неуспешна. За да получавате имейл и при успех: в github.com отворете профилната си снимка → **Settings** → **Notifications** → **System** → **Actions** и махнете отметката от **Only notify for failed workflows**.
   ```

Ако няма бутон **Build AAPS** или **Run workflow**:

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- Отворете раздела **Actions**. Ако пише, че работните процеси са изключени, докоснете зеления бутон, за да ги разрешите, след това докоснете **Build AAPS** в списъка.

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

```{warning}
**Преди всяка актуализация** [експортирайте настройките си](#ExportImportSettings-Automating-Settings-Export) в AAPS и копирайте файла **извън телефона** (Google Drive, Dropbox…). Пазете там и няколко по-стари експорта и APK файловете, за да можете винаги да се върнете назад.
```

1. На телефона отворете страницата за настройка в **Chrome**. Влезте в github.com, ако бъдете помолени.
2. Докоснете **Open my builds**, след това най-новата компилация със зелена отметка.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   Приложението GitHub не може да изтегля компилации. В приложението отворете най-новата компилация, след това докоснете **Artifacts ↗** или докоснете иконата за споделяне горе и изберете **Chrome** (или **Copy link**, след това поставете връзката в адресната лента на Chrome). Компилацията се отваря в Chrome: продължете там със следващата стъпка.

   За да спрете отварянето на връзки към GitHub в приложението: Android **Настройки** (Settings) → **Приложения** (Apps) → **GitHub** → **Отваряне по подразбиране** (Open by default) → изключете **Отваряне на поддържаните връзки** (Open supported links).
   ```

   ![Завършена компилация: статус Success и 2 артефакта](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Превъртете надолу до обобщението на компилацията и докоснете връзката **Download AAPS**.

   ![Обобщение на компилацията с връзката Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Превъртайте с пръст върху текста, а не върху диаграмата със стъпките на компилацията: иначе се движи диаграмата, а не страницата.
   ```

   Можете също да превъртите по-надолу до **Artifacts** и да докоснете иконата за изтегляне до `aaps-….apk`.

   ![Artifacts с приложенията за телефона и за часовника](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Когато изтеглянето приключи, отворете менюто на Chrome **⋮** → **Изтегляния** (Downloads), докоснете `aaps-….apk` и изберете **Инсталиране** (Install). Ако бъдете попитани, разрешете инсталирането на приложения от този източник.

   ![Изтегляния в Chrome с APK файла на AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` е приложението за смарт часовник. Пропуснете го, ако не използвате смарт часовник.

Приложението се пази на страницата на компилацията **14 дни**. То не се показва под **Code** във вашето хранилище. Копирайте го на сигурно място извън телефона, заедно с експортите на настройките си.

За още начини за инсталиране на приложението вижте [Прехвърляне и инсталиране на AAPS](TransferringAndInstallingAaps.md).

```{note}
От септември 2026 г. [проверката на разработчиците на Android](#android-developer-verification) от Google може да блокира инсталирането на APK файла с докосване на файла, в зависимост от вашата държава. Безплатните заобиколни решения са обяснени на тази страница.
```

(aaps-builder-google-drive)=

## Step 6 (optional) – Also save the app in Google Drive

Можете също всяка компилация да се запазва във вашия Google Drive, в папката `AAPS/<version>`. Това не е задължително: приложението винаги е достъпно на страницата на компилацията.

За това е нужен още един секрет – `GDRIVE_OAUTH2`. Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. Докоснете **Open the secrets page**. Докоснете **Copy name**, след това поставете името в малкото поле **Name** (името е `GDRIVE_OAUTH2`). Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

От следващата компилация APK файловете се запазват и в Google Drive.

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

Google спира достъпа, ако не компилирате 6 месеца или ако смените паролата си за Google. Тогава компилацията ще ви каже това: направете тези стъпки отново. Вижте [Изтекъл токен за опресняване на Google](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Актуализиране на AAPS

Вашето хранилище никога не компилира нищо само: вие решавате кога да компилирате, коя версия и кой вариант. Когато излезе нова версия на AAPS:

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). Оставете `latest` или въведете номера на версията.
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## Отстраняване на неизправности

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **Компилацията спира със съобщението „This repository is PUBLIC“**: във вашето хранилище отворете **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**, след това компилирайте отново.
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **„The secret is too short“**, **„The secret is not a valid code“** или **„The secret does not contain a keystore“**: в секрета е поставен грешен текст – често самата дума `KEYSTORE_SET` или само част от кода. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **„Version … does not exist“**: версията, която сте въвели, не е издадена версия на AAPS. Използвайте `latest` или проверете номера на версията.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **„Page not found“ (404), когато страницата за настройка отваря GitHub**: влезте в github.com в същия браузър (GitHub показва 404 за частни хранилища, когато не сте влезли). Ако сте влезли, потребителското име или името на хранилището в стъпка 1 на страницата за настройка не съвпада с вашето хранилище. Въведете точните имена.
- **„No GitHub user with this name“** в стъпка 1: въведете потребителското си име в GitHub, както е показано във вашия профил в GitHub, а не вашия имейл.
- **Няма връзка Download или се отвори приложението GitHub**: приложението GitHub не може да изтегля компилации. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). За да спрете отварянето на връзки към GitHub в приложението: Android **Настройки** (Settings) → **Приложения** (Apps) → **GitHub** → **Отваряне по подразбиране** (Open by default) → изключете **Отваряне на поддържаните връзки** (Open supported links).
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
