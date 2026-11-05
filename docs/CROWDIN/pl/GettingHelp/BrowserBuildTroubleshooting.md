(aaps-ci-troubleshooting)=

# Budowanie w przeglądarce: rozwiązywanie problemów

```{note}
This page collects troubleshooting tips for the [Browser build](../SettingUpAaps/BrowserBuild.md).
```

(aaps-builder-troubleshooting)=

## AAPS Builder

### Step 1: the repository

(aaps-builder-ts-repo-exists)=

#### "my-aaps already exists in this account"

![Repository already exists](../images/Building-the-App/CI/AapsBuilder70_RepoExists.png)

You already have this repository, for example from an earlier attempt. Close the GitHub tab, keep that name in step 1 of the setup page and go on. If you already did steps 2 and 3 for it, your key is still in it: continue with [step 4](#aaps-builder-step4). If it was made with an earlier version of the setup page, update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). You prefer a fresh start? Type another name, for example `my-aaps-2`, and use the same keystore in step 2.

(aaps-builder-ts-user-not-found)=

#### "No GitHub user with this name"

![No GitHub user](../images/Building-the-App/CI/AapsBuilder80_UserNotFound.png)

- **„No GitHub user with this name”** w kroku 1: wpisz swoją nazwę użytkownika GitHub, taką jak w profilu GitHub, a nie adres e-mail.
- **Brak przycisku „Build AAPS” lub „Run workflow” albo repozytorium jest puste**: repozytorium nie zostało utworzone z szablonu. Usuń je (**Settings** → dół strony → **Delete this repository**) i wykonaj jeszcze raz [krok 1](#aaps-builder-step1) za pomocą przycisku **Create my private repository**.

### Step 3: the secret

(aaps-builder-ts-404)=

#### "Page not found" (404)

![GitHub 404](../images/Building-the-App/CI/AapsBuilder79_404.png)

- **„Page not found” (404), gdy strona konfiguracji otwiera GitHub**: zaloguj się na github.com w tej samej przeglądarce (GitHub pokazuje 404 dla prywatnych repozytoriów, gdy nie jesteś zalogowany). Jeśli jesteś zalogowany, nazwa użytkownika lub nazwa repozytorium w kroku 1 na stronie konfiguracji nie pasuje do twojego repozytorium. Wpisz dokładne nazwy.

### Step 4: the build

(aaps-builder-ts-workflow-not-found)=

#### "This workflow does not exist"

![This workflow does not exist](../images/Building-the-App/CI/AapsBuilder71_WorkflowNotFound.png)

Right after the repository is created, GitHub may not have read its workflow file yet: **Build AAPS** is missing from the **Actions** tab, and there is no **Run workflow** button. Any small change to the file makes GitHub read it:

1. In your repository, open **Code**, then the folder `.github`, then `workflows`, then the file `build.yml`.
2. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).

   ![File menu](../images/Building-the-App/CI/AapsBuilder72_FileMenu.png)

3. Tap at the very end of the text and add an empty line (Enter). Tap **Commit changes…** at the top.

   ![Editor](../images/Building-the-App/CI/AapsBuilder73_Editor.png)

4. Tap **Commit changes** again.

   ![Commit changes](../images/Building-the-App/CI/AapsBuilder74_CommitDialog.png)

5. Open the **Actions** tab again: **Build AAPS** is now in the list of workflows (on a phone, the list opens with the icon at the left of **All workflows**). Tap it, then **Run workflow**.

   ![List of workflows](../images/Building-the-App/CI/AapsBuilder75_WorkflowsSidebar.png)

(aaps-builder-ts-build-failed)=

#### The build failed (red cross)

1. On the setup page, tap **Open my builds** and tap the build with the red cross.

   ![Failed build](../images/Building-the-App/CI/AapsBuilder76_RunsList.png)

2. The page of the build shows **Failure**, and which part failed: **AAPS / Check** (the repository, the secret, the version or the variant: nothing was built) or **AAPS / Build AAPS**.

   ![Build page: Failure](../images/Building-the-App/CI/AapsBuilder77_RunFailed.png)

3. Scroll down to **Annotations**, with your finger on the text, not on the diagram. The red lines explain the problem: tap **Show more** to read the whole message, then find it below.

   ![Adnotacje (Annotations)](../images/Building-the-App/CI/AapsBuilder78_Annotations.png)

- **„Secret KEYSTORE_SET is missing”**: wykonaj krok 3 na stronie konfiguracji.
- **Budowanie zatrzymuje się z komunikatem „This repository is PUBLIC”**: w swoim repozytorium otwórz **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**, a potem zbuduj jeszcze raz.
- **"Version … does not exist"**: only released versions of **AAPS** can be built, the ones on the [tags page](https://github.com/nightscout/AndroidAPS/tags) of nightscout/AndroidAPS, such as `3.3.2.0`. A branch name such as `dev` doesn't work. Use `latest`, or type a tag exactly as listed.
- **„Variant … is not supported”**: twój plik workflow jest w starszej wersji. Zastąp go, jak opisano w [Aktualizowanie AAPS](#aaps-builder-updates).
- **„The secret is too short”**, **„The secret is not a valid code”** lub **„The secret does not contain a keystore”**: do sekretu wklejono zły tekst, często samo słowo `KEYSTORE_SET` albo tylko część kodu. W swoim repozytorium otwórz **Settings** → **Secrets and variables** → **Actions**, edytuj `KEYSTORE_SET` i jeszcze raz wklej długi kod z **Copy secret** (jeśli zamknąłeś stronę konfiguracji, najpierw wykonaj jeszcze raz krok 2).
- **„Keystore, password or alias is wrong”**: sprawdź hasło i alias swojego magazynu kluczy, a potem wykonaj jeszcze raz kroki 2 i 3 na stronie konfiguracji.
- **„Google Drive access has expired or was revoked”**: wykonaj jeszcze raz [krok 6](#aaps-builder-google-drive) i zaktualizuj sekret `GDRIVE_OAUTH2`.
- **Another error**: [read the build log](#aaps-ci-read-the-logs), then [run the build again](#aaps-ci-rerun). If it fails again the same way, ask for help with the name of the failed step and the error lines. Nigdy nie udostępniaj zawartości swoich sekretów.

### Step 5: the app

- **Brak linku Download albo otworzyła się aplikacja GitHub**: aplikacja GitHub nie potrafi pobierać zbudowanych aplikacji. Otwórz budowanie w Chrome, jak opisano w [kroku 5](#aaps-builder-step5). Aby linki GitHub nie otwierały się w aplikacji: Android **Ustawienia** → **Aplikacje** → **GitHub** → **Otwieraj domyślnie** (Open by default) → wyłącz **Otwieraj obsługiwane linki** (Open supported links).

## Rozwiązywanie problemów z AAPS-CI

(aaps-ci-read-the-logs)=
### Najpierw: sprawdź, co poszło nie tak

Gdy budowanie się nie uda, GitHub zapisuje log każdego kroku. Log mówi, który krok się nie udał i dlaczego. Przeczytaj go, zanim spróbujesz czegokolwiek innego: komunikatu błędu szukasz na tej stronie i o niego zapytają Cię osoby, które pomagają.

1. W swojej kopii AndroidAPS na GitHub otwórz **Actions**. Nieudane budowanie ma czerwony krzyżyk. Dotknij jego nazwy.

   ![Nieudane uruchomienie na liście Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. Podsumowanie uruchomienia pokazuje **Failure**, a niżej zadanie, które się nie udało (**Build AAPS**, z czerwonym krzyżykiem).

   ![Podsumowanie uruchomienia](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Przewiń w dół do **Annotations** i dotknij czerwonej linii **Build AAPS**.

   ![Adnotacje (Annotations)](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Zadanie się otworzy. Kroki z szarym znaczkiem ✓ się udały. Krok z czerwonym krzyżykiem to ten, który się nie udał: GitHub otwiera go dla Ciebie. Kroki po nim zostały pominięte (szare kółko).

   ![Kroki zadania](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Przeczytaj linie tuż nad `Error: Process completed with exit code 1.`: wyjaśniają one problem. W tym przykładzie krok **Retrieving Google Drive access token** nie udał się z błędem `invalid_grant` i `Token has been expired or revoked.`, zobacz [Token odświeżania Google wygasł](#aaps-ci-google-token-expired).

   ![Błąd w logu](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Prosisz o pomoc? Podaj nazwę kroku, który się nie udał, i linie z błędem (wystarczy zrzut ekranu jak powyżej). Nigdy nie udostępniaj zawartości swoich sekretów.
```

(aaps-ci-update-secret)=
#### Zaktualizuj sekret

Wiele poprawek polega na zmianie wartości sekretu. W swojej kopii AndroidAPS na GitHub przejdź do **Settings** → **Secrets and variables** → **Actions** i dotknij ołówka obok sekretu.

![Lista sekretów](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Wpisz lub wklej nową wartość i dotknij **Update secret**. GitHub nigdy nie pokazuje starej wartości: pole jest zawsze puste.

![Aktualizacja sekretu (Update secret)](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Uruchom budowanie ponownie po poprawce

Gdy usuniesz przyczynę, nie musisz zaczynać od początku: otwórz nieudane uruchomienie, dotknij **...** (w prawym górnym rogu), a potem **Re-run failed jobs**.

![Menu ponownego uruchomienia (Re-run)](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Dotknij **Re-run jobs**. Możesz też jak zwykle uruchomić nowe budowanie przez **Run workflow**.

![Okno ponownego uruchomienia (Re-run)](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Strona aaps-ci-preparation
  - Stronę przygotowania wyświetla tymczasowy lokalny serwer (na przykład Simple Web Server na komputerze), który odbiera też token odświeżania Google.
  - Jeśli widzisz poniższy ekran, lokalny serwer został zatrzymany lub jest niedostępny.
  - Zamknij stronę przygotowania, sprawdź, czy lokalny serwer działa, potem otwórz ponownie aaps-ci-preparation.html tak samo jak w Kroku 2 i wykonaj pozostałe kroki. Jest to potrzebne zwłaszcza przy tworzeniu pierwszego połączenia z Google podczas konfiguracji.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Token odświeżania Google wygasł
  - Tokeny odświeżania Google OAuth2 wygasają, jeśli nie są używane przez 6 miesięcy. Mogą też stać się nieważne w innych sytuacjach (np. gdy zmienisz hasło do konta Google albo ręcznie odbierzesz dostęp). Więcej szczegółów znajdziesz w [dokumentacji Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - W [logu budowania](#aaps-ci-read-the-logs) krok **Retrieving Google Drive access token** kończy się błędem `invalid_grant` i `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Jeśli budowanie nie udaje się z powodu wygasłego lub odebranego tokenu odświeżania Google, musisz ponownie wykonać kroki [Autoryzacji Dysku Google](#aaps-ci-google-drive-auth), aby dostać nowy token `GDRIVE_OAUTH2`, [zaktualizować sekret](#aaps-ci-update-secret) w swoim repozytorium GitHub, a potem [uruchomić budowanie ponownie](#aaps-ci-rerun).
  - Jeśli autoryzacja znowu się nie uda albo Google nie prosi już o Twoją zgodę, najpierw usuń istniejący dostęp AAPS ze swojego konta Google, zobacz [poniżej](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Usuń dostęp AAPS ze swojego konta Google i zacznij autoryzację od nowa
  - Jeśli autoryzacja Dysku Google ciągle się nie udaje albo chcesz zacząć od nowa od czystego stanu, najpierw usuń dostęp, który wcześniej dałeś AAPS, a potem wykonaj autoryzację ponownie.
  - W telefonie otwórz [https://myaccount.google.com](https://myaccount.google.com), dotknij **Bezpieczeństwo** (Security), przewiń w dół do **Twoje połączenia z aplikacjami i usługami innych firm** (Your connections to third-party apps & services) i otwórz listę połączonych aplikacji. Możesz też przejść bezpośrednio do [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Dotknij **AAPS** na liście.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - Strona pokazuje dostęp, który dałeś AAPS (pliki na Dysku Google używane przez aplikację). Dotknij **Usuń wszystko** (Delete all), aby usunąć połączenie, albo **Zobacz szczegóły** (See details), aby najpierw je sprawdzić.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Na stronie szczegółów dotknij **Usuń cały dostęp** (Remove all access).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Dotknij **Potwierdź** (Confirm).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google potwierdza, że AAPS nie ma już dostępu. AAPS nie jest już widoczny na liście połączonych aplikacji.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Teraz zacznij autoryzację od nowa: zamknij **obie** aplikacje, czyli stronę przygotowania i menedżer plików, otwórz ponownie aaps-ci-preparation.html z menedżera plików i wykonaj jeszcze raz kroki [Autoryzacji Dysku Google](#aaps-ci-google-drive-auth). Google znowu poprosi Cię o przyznanie dostępu, a strona poda nowy token `GDRIVE_OAUTH2`.
  - [Zaktualizuj sekret `GDRIVE_OAUTH2`](#aaps-ci-update-secret) w swoim repozytorium GitHub, wpisując nowy token, a potem [uruchom budowanie ponownie](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Wyłącz oprogramowanie, które może zakłócać weryfikację OAuth
  - Zanim spróbujesz uzyskać klucz OAuth, wyłącz w telefonie każdą aplikację VPN lub zabezpieczającą (firewall, antywirus itp.).

(aaps-ci-actions-permission)=
### Sprawdź ustawienia uprawnień GitHub Actions
  - Upewnij się, że zasady GitHub Actions są ustawione na „Allow all actions and reusable workflows” (Settings → Actions → General). Jeśli to zmienisz, naciśnij **Save** pod opcjami.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Sprawdź ustawienia uprawnień workflow w GitHub
  - Jeśli budowanie od razu kończy się błędem „Invalid workflow file”, podobnym do tego poniżej, domyślne uprawnienia workflow w Twoim repozytorium są zbyt ograniczone:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Upewnij się, że uprawnienia workflow są ustawione na „Read and write permissions” (Settings → Actions → General → Workflow permissions), potem zapisz i uruchom ponownie workflow budowania.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Budowanie nie udaje się przy sprawdzaniu hasła magazynu kluczy
  - W [logu budowania](#aaps-ci-read-the-logs) krok **Validating keystore, alias and password** kończy się błędem `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, a po nim `Keystore was tampered with, or password was incorrect`. Budowanie zatrzymuje się w tym miejscu: magazyn kluczy i hasła są sprawdzane, zanim AAPS zostanie zbudowany.

  ![Błędne hasło magazynu kluczy w logu budowania](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - Workflow budowania zachowuje każdy znak Twoich haseł bez zmian. Wpisz `KEYSTORE_PASSWORD` i `KEY_PASSWORD` dokładnie tak, jak brzmią, bez dodawania ukośnika wstecznego (backslash) ani innego znaku ucieczki. Jeśli dodałeś ukośniki wsteczne, [zaktualizuj sekrety](#aaps-ci-update-secret), wpisując hasło dokładnie takie, jakie jest. Poniższy przykład jest błędny: hasło to `Example2026`, a ukośnik wsteczny został dodany.

  ![Hasło wpisane z dodanym ukośnikiem wstecznym](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Jeśli budowanie nadal nie udaje się przy podpisywaniu APK, chociaż hasło jest poprawne, a hasło zawiera `$`, grawis (backtick), `"` lub `\`, to plik workflow w Twoim forku jest starszy niż wrzesień 2026 i nadal interpretuje te znaki. [Zsynchronizuj swój fork](#Update-to-new-version-update-your-repo) z najnowszą gałęzią dev, a potem uruchom ponownie workflow budowania.
  - Pionowa kreska `|` to szczególny przypadek. Strona przygotowania z [Opcji 1](#aaps-ci-option1) łączy magazyn kluczy, hasła i alias w jeden sekret `KEYSTORE_SET`, rozdzielony znakiem `|`, a workflow dzieli go według tego znaku. Hasło wygenerowane przez stronę przygotowania zawiera tylko litery i cyfry, więc w Opcji 1 ten problem nie może wystąpić. Może się zdarzyć tylko wtedy, gdy sam złożyłeś sekret `KEYSTORE_SET` z hasłem zawierającym `|`. W takim przypadku usuń `KEYSTORE_SET` i zamiast niego wpisz osobne sekrety z [Opcji 2](#aaps-ci-option2).
