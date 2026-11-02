(aaps-ci-troubleshooting)=

# Отстраняване на неизправности при компилиране в браузъра

```{note}
Тази страница събира съвети за отстраняване на неизправности при [Компилиране в браузъра](../SettingUpAaps/BrowserBuild.md).

Използвате **AAPS Builder**? Започнете от неговия собствен [раздел за отстраняване на неизправности](#aaps-builder-troubleshooting). Разделите за Google Drive по-долу важат и за него.
```

## Отстраняване на неизправности с AAPS-CI

(aaps-ci-read-the-logs)=
### Първо: разберете какво се е объркало

Когато компилацията не успее, GitHub пази лог за всяка стъпка. Логът ви казва коя стъпка е неуспешна и защо. Прочетете го, преди да опитате каквото и да е друго: съобщението за грешка е това, което търсите на тази страница, и това, което ще поискат хората, които ви помагат.

1. Във вашето копие на AndroidAPS в GitHub отворете **Actions**. Неуспешната компилация има червено кръстче. Докоснете името ѝ.

   ![Неуспешно изпълнение в списъка Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. Обобщението на изпълнението показва **Failure**, а под него – задачата (job), която е неуспешна (**Build AAPS**, с червено кръстче).

   ![Обобщение на изпълнението](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Превъртете надолу до **Annotations** и докоснете червения ред **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Задачата (job) се отваря. Стъпките със сива отметка са минали успешно. Стъпката с червено кръстче е неуспешната: GitHub я отваря вместо вас. Стъпките след нея са пропуснати (сиво кръгче).

   ![Стъпки на задачата](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Прочетете редовете точно над `Error: Process completed with exit code 1.`: те обясняват проблема. В този пример стъпката **Retrieving Google Drive access token** е неуспешна с `invalid_grant` и `Token has been expired or revoked.`, вижте [Изтекъл токен за опресняване на Google](#aaps-ci-google-token-expired).

   ![Грешка в лога](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Търсите помощ? Споделете името на неуспешната стъпка и редовете с грешката (снимка на екрана като горната е достатъчна). Никога не споделяйте съдържанието на своите секрети.
```

(aaps-ci-update-secret)=
#### Обновяване на секрет

Много поправки изискват да смените стойността на секрет. Във вашето копие на AndroidAPS в GitHub отидете на **Settings** → **Secrets and variables** → **Actions** и докоснете молива до секрета.

![Списък със секрети](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Въведете или поставете новата стойност и докоснете **Update secret**. GitHub никога не показва старата стойност: полето винаги е празно.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Стартиране на компилацията отново след поправка

След като сте отстранили причината, не е нужно да започвате отначало: отворете неуспешното изпълнение, докоснете **...** (горе вдясно), след това **Re-run failed jobs**.

![Меню Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Докоснете **Re-run jobs**. Можете също да стартирате нова компилация от **Run workflow**, както обикновено.

![Диалог Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Уеб страницата aaps-ci-preparation
  - Подготвителната страница се показва от временен локален сървър (например Simple Web Server на компютър), който също получава токена за опресняване на Google.
  - Ако видите екрана по-долу, локалният сървър е спрял или не е достъпен.
  - Затворете подготвителната страница, проверете дали локалният сървър работи, след това отворете отново aaps-ci-preparation.html по същия начин както в Стъпка 2 и изпълнете останалите стъпки. Това е нужно особено при създаването на първоначалната връзка с Google по време на настройката.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Изтекъл токен за опресняване на Google
  - Токените за опресняване на Google OAuth2 изтичат, ако не се използват 6 месеца, и могат да станат невалидни и при други условия (напр. ако сте сменили паролата на профила си в Google или сте отнели достъпа ръчно). За повече подробности вижте [документацията за Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - В [лога на компилацията](#aaps-ci-read-the-logs) стъпката **Retrieving Google Drive access token** е неуспешна с `invalid_grant` и `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Ако компилацията ви е неуспешна заради изтекъл или отнет токен за опресняване на Google, трябва да повторите стъпките от [Google Drive Auth](#aaps-ci-google-drive-auth), за да получите нов токен `GDRIVE_OAUTH2`, да [обновите секрета](#aaps-ci-update-secret) във вашето хранилище в GitHub и след това да [стартирате компилацията отново](#aaps-ci-rerun).
  - Ако разрешаването отново не успее или Google вече не ви пита за съгласие, първо премахнете съществуващия достъп на AAPS от профила си в Google, вижте [по-долу](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Премахване на достъпа на AAPS от профила ви в Google и повторно разрешаване
  - Ако разрешаването за Google Drive продължава да не успява или искате да започнете отначало от чисто състояние, първо премахнете достъпа, който преди сте дали на AAPS, и след това направете разрешаването отново.
  - На телефона си отворете [https://myaccount.google.com](https://myaccount.google.com), докоснете **Security** (Сигурност), превъртете надолу до **Your connections to third-party apps & services** (Вашите връзки с приложения и услуги на трети страни) и отворете списъка със свързани приложения. Можете също да отидете направо на [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Докоснете **AAPS** в списъка.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - Страницата показва достъпа, който сте дали на AAPS (файловете в Google Drive, използвани с приложението). Докоснете **Delete all** (Изтриване на всички), за да премахнете връзката, или докоснете **See details** (Вижте подробностите), за да я прегледате първо.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - На страницата с подробности докоснете **Remove all access** (Премахване на целия достъп).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Докоснете **Confirm** (Потвърждаване).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google потвърждава, че AAPS вече няма достъп. AAPS вече не се показва в списъка със свързани приложения.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Сега започнете разрешаването отначало: затворете **и двете** – подготвителната страница и приложението за управление на файлове, отворете отново aaps-ci-preparation.html от приложението за управление на файлове и повторете стъпките от [Google Drive Auth](#aaps-ci-google-drive-auth). Google ще ви поиска отново да дадете достъп и страницата ще ви даде нов токен `GDRIVE_OAUTH2`.
  - [Обновете секрета `GDRIVE_OAUTH2`](#aaps-ci-update-secret) във вашето хранилище в GitHub с новия токен, след това [стартирайте компилацията отново](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### Проверка на настройките за разрешения на GitHub Actions
  - Уверете се, че правилата (policies) на GitHub Actions са зададени на „Allow all actions and reusable workflows“ (Settings → Actions → General). Ако го промените, натиснете **Save** под опциите.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Проверка на настройките за разрешения на работните процеси в GitHub
  - Ако компилацията спре веднага с грешка „Invalid workflow file“, подобна на тази по-долу, разрешенията по подразбиране за работните процеси във вашето хранилище са твърде ограничени:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Уверете се, че Workflow permissions е зададено на „Read and write permissions“ (Settings → Actions → General → Workflow permissions), след това запишете и стартирайте отново работния процес за компилиране.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Компилацията е неуспешна при проверката на паролата на хранилището за ключове
  - В [лога на компилацията](#aaps-ci-read-the-logs) стъпката **Validating keystore, alias and password** е неуспешна с `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, последвано от `Keystore was tampered with, or password was incorrect`. Компилацията спира там: хранилището за ключове и паролите се проверяват, преди AAPS да бъде компилиран.

  ![Грешна парола на хранилището за ключове в лога на компилацията](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - Работният процес за компилиране запазва всеки знак от паролите ви непроменен. Въведете `KEYSTORE_PASSWORD` и `KEY_PASSWORD` точно както са, без да добавяте обратна наклонена черта или друг знак за екраниране (escape). Ако сте добавили обратни наклонени черти, [обновете секретите](#aaps-ci-update-secret) с паролата точно както е. Примерът по-долу е грешен: паролата е `Example2026`, а обратната наклонена черта е добавена.

  ![Парола, въведена с добавена обратна наклонена черта](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Ако компилацията все още е неуспешна при подписването на APK, въпреки че паролата ви е правилна, и паролата съдържа `$`, обратен апостроф (backtick), `"` или `\`, файлът на работния процес във вашия fork е по-стар от септември 2026 г. и все още интерпретира тези знаци. [Синхронизирайте своя fork](#Update-to-new-version-update-your-repo) с най-новата версия на dev, след това стартирайте отново работния процес за компилиране.
  - Вертикалната черта `|` е специален случай. Подготвителната страница от [Вариант 1](#aaps-ci-option1) обединява хранилището за ключове, паролите и псевдонима (alias) в един секрет `KEYSTORE_SET`, разделени с `|`, а работният процес ги разделя по този знак. Паролата, създадена от подготвителната страница, съдържа само букви и цифри, затова това не може да се случи с Вариант 1. Това може да се случи само ако сами сте съставили секрет `KEYSTORE_SET` с парола, която съдържа `|`. В този случай изтрийте `KEYSTORE_SET` и вместо него въведете отделните секрети от [Вариант 2](#aaps-ci-option2).
