(aaps-builder-setup)=

# Strona konfiguracji AAPS Builder

Zbuduj własną aplikację **AAPS** w GitHub. Bez instalowania programów, bez terminala. Za pierwszym razem trwa to około 10 minut, potem każde budowanie uruchamiasz sam.

Każdy krok jest dokładniej opisany, ze zrzutami ekranu, na stronie [Budowanie w przeglądarce z AAPS Builder](#aaps-builder). Miej tę stronę otwartą w innej karcie.

Przyciski poniżej otwierają GitHub w nowej karcie Chrome. Aby wrócić na tę stronę, dotknij przycisku kart obok paska adresu Chrome (kwadrat z liczbą) i wybierz tę stronę.

(aaps-builder-setup-step1)=

## Krok 1 – Utwórz prywatne repozytorium do budowania

To tworzy Twoją własną prywatną kopię AAPS Builder na Twoim koncie GitHub: repozytorium, w którym jest już workflow budowania. Tylko ty widzisz je i zbudowane w nim aplikacje. **Nie** musisz robić forka AndroidAPS: kod źródłowy AAPS jest pobierany z oficjalnego repozytorium AndroidAPS przy każdym budowaniu.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Najpierw zaloguj się do github.com w tej przeglądarce (nie masz konta? utwórz je za darmo). Potem wróć tutaj. Wpisz swoją nazwę użytkownika (widać ją w Twoim profilu GitHub), a nie adres e-mail: strona pyta GitHub, czy taki użytkownik istnieje.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Zostaw proponowaną nazwę. Masz już repozytorium utworzone pod inną nazwą? Wpisz tutaj dokładnie tę nazwę.

```{note}
**Masz już repozytorium AAPS Builder** (utworzone we wcześniejszej wersji tej strony)? Nie twórz nowego: wpisz tutaj dokładnie jego nazwę, pomiń przycisk poniżej i raz zaktualizuj jego workflow: zobacz **Updating your copy** (aktualizacja Twojej kopii) na końcu tego kroku. Twoje sekrety zostają bez zmian.

Jeśli mimo to chcesz nowe repozytorium, wybierz nazwę, której jeszcze nie masz, na przykład `my-aaps-2`, i w kroku 2 użyj tego samego magazynu kluczy.

Nie wpisuj nazwy swojego forka AndroidAPS: fork jest publiczny i już buduje się własnym workflow **AAPS CI**.
```

Twoje repozytorium:<code class="aapsb-repoUrl"></code>

Sprawdź tę nazwę, zanim użyjesz przycisków poniżej: strona zapamiętuje nazwę z Twojej ostatniej wizyty.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Na stronie GitHub, która się otworzy, wszystko jest już wypełnione: szablon `nightscout/aaps-builder`, Twoje konto jako właściciel, nazwa Twojego repozytorium i **Private**. Niczego nie zmieniaj i zostaw **Include all branches** odznaczone.

1. Kliknij zielony przycisk **Create repository**.
2. GitHub pokazuje Twoje nowe repozytorium z folderem `.github` i plikiem `README.md`: w nim jest workflow budowania. Wróć na tę stronę, aby wykonać krok 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Nie zostało utworzone z szablonu. Usuń je (**Settings** → dół strony → **Delete this repository**), a potem jeszcze raz dotknij **Create my private repository**.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Kroki budowania są aktualizowane za Ciebie: przy każdym budowaniu Twoje repozytorium uruchamia wersję wydaną przez deweloperów AAPS w nightscout/aaps-builder, a w Twoim repozytorium nic się nie zmienia. Plik workflow wymieniasz tylko wtedy, gdy ogłosi to strona [Aktualizacje i zmiany w dokumentacji](../Maintenance/DocumentationUpdate.md) (na przykład dla nowego wariantu budowania), albo jeden raz, jeśli Twoje repozytorium zostało utworzone we wcześniejszej wersji tej strony lub ze starego szablonu. Twój sekret `KEYSTORE_SET` zostaje bez zmian.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   Na komputerze kliknij **ikonę kopiowania** („Copy raw file”) w prawym górnym rogu pliku. Na telefonie otwórz zamiast tego <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">wersję tekstową</a>, przytrzymaj palec na tekście → **Zaznacz wszystko** → **Kopiuj**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Otwiera do edycji `.github/workflows/build.yml` w <code class="aapsb-repoUrl"></code>.
3. Zastąp cały tekst skopiowanym workflow (na telefonie: przytrzymaj palec → **Zaznacz wszystko** → **Wklej**), potem dwa razy kliknij **Commit changes…**. W pierwszym wierszu pliku jest jego wersja.
```

(aaps-builder-setup-step2)=

## Krok 2 – Twój klucz podpisu

Aplikacja musi być podpisana twoim własnym kluczem. Zawsze używaj tego samego klucza. Inaczej przy aktualizacji musisz odinstalować AAPS (i stracisz jego ustawienia). Wybierz jedną z dwóch kart.

`````{tab-set}

````{tab-item} I already have a keystore
Na przykład z Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Pierwszy raz budujesz AAPS? Nowy klucz zostanie utworzony tutaj, w Twojej przeglądarce. Nic nie jest nigdzie wysyłane.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Zapisz kopię zapasową swojego klucza!**

Pobierz plik. Przechowuj te trzy rzeczy razem, w bezpiecznym miejscu poza telefonem (np. w swojej chmurze):

- plik `aaps-keystore.jks`
- swoje hasło
- alias klucza: **`key0`**

Wszystkie trzy będą Ci potrzebne, jeśli kiedyś zbudujesz AAPS w inny sposób, np. w Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Krok 3 – Przekaż klucz do repozytorium
<span id="aapsb-s3wait">Najpierw ukończ krok 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Otwiera: <code class="aapsb-repoUrl"></code> Widzisz „Page not found” (404)? Najpierw sprawdź, czy jesteś zalogowany do github.com w tej przeglądarce: GitHub pokazuje 404 dla prywatnych repozytoriów, gdy nie jesteś zalogowany. W przeciwnym razie Twoja nazwa użytkownika lub nazwa repozytorium w kroku 1 nie pasuje do Twojego repozytorium: sprawdź je na github.com i wpisz je w kroku 1. 2. Dotknij „Copy name”, potem wklej to do małego pola „Name”: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Dotknij „Copy secret”, potem wklej długi kod do dużego pola „Secret”: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Sekret to bardzo długi kod (tysiące znaków), a NIE słowo KEYSTORE_SET. Najpierw skopiuj i wklej nazwę, potem długi kod. 4. Dotknij „Add secret”. Gotowe, nigdy więcej nie musisz tego robić.
</div>
(aaps-builder-setup-step4)=
## Krok 4 – Zbuduj aplikację

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Otwiera: <code class="aapsb-repoUrl"></code>

   Widzisz „Page not found” (404)? Najpierw sprawdź, czy jesteś zalogowany do github.com w tej przeglądarce: GitHub pokazuje 404 dla prywatnych repozytoriów, gdy nie jesteś zalogowany. W przeciwnym razie Twoja nazwa użytkownika lub nazwa repozytorium w kroku 1 nie pasuje do Twojego repozytorium: sprawdź je na github.com i wpisz je w kroku 1. Zamiast tego otworzyła się aplikacja GitHub? Dotknij „RUN WORKFLOW”, sprawdź wersję i wariant, a potem znowu dotknij „RUN WORKFLOW”. Jeśli aplikacja dalej pokazuje „Nothing to see here”, przeciągnij listę w dół, aby zobaczyć swoje budowanie.
2. Jeśli pojawi się pytanie, kliknij zielony przycisk, aby włączyć workflow.
Lista workflow pokazuje dwie pozycje: użyj „Build AAPS”. Pomiń „AAPS Builder”: zawiera kroki budowania i nie ma przycisku „Run workflow”.
3. Kliknij „Run workflow”, a potem zielony przycisk „Run workflow”. „latest” buduje najnowszą wersję AAPS. ***wskazówka:*** *możesz zbudować inną wersję, wpisując nazwę jej [tagu](https://github.com/nightscout/AndroidAPS/tags) zamiast „latest”*
4. Poczekaj około 15–30 minut. Zielony znaczek oznacza, że budowanie jest gotowe.
Chcesz dostać e-mail, gdy budowanie się skończy? GitHub wysyła e-mail tylko wtedy, gdy budowanie się nie uda. Aby dostać e-mail także po udanym budowaniu: na github.com otwórz swoje zdjęcie profilowe → Settings → Notifications → System → Actions i odznacz „Only notify for failed workflows”.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Otwórz swoje repozytorium i sprawdź, czy jest w nim folder `.github` z plikiem `workflows/build.yml`. Jeśli repozytorium jest puste, nie zostało utworzone z szablonu: usuń je (**Settings** → dół strony → **Delete this repository**) i wykonaj jeszcze raz [krok 1](#aaps-builder-setup-step1) za pomocą przycisku.
2. Otwórz kartę Actions. Jeśli jest tam napisane, że workflow są wyłączone, kliknij zielony przycisk, aby je włączyć. Potem kliknij „Build AAPS” na liście.
```

(aaps-builder-setup-step5)=

## Krok 5 – Zainstaluj na telefonie

```{admonition} Before every update: back up your settings!
:class: warning

1. W AAPS: Konserwacja → Eksport ustawień. (I tak rób to regularnie, np. po zmianie profilu albo raz w miesiącu).
2. Skopiuj wyeksportowany plik POZA telefon, np. na Dysk Google albo do Dropbox. Kopia zapasowa, która jest tylko na telefonie, przepadnie razem z telefonem.
3. Trzymaj tam też pliki APK i kilka starszych eksportów. Wtedy zawsze możesz wrócić do poprzedniej wersji.

[Jak wyeksportować ustawienia](#ExportImportSettings-Settings-Export) · [FAQ AAPS: jak uporządkować kopie zapasowe](#FAQ-organize-backups)
```

1. Otwórz tę stronę na telefonie, w przeglądarce (Chrome). Zaloguj się na github.com, jeśli strona o to poprosi.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Zamiast tego otworzyła się aplikacja GitHub? Aplikacja nie umie pobierać zbudowanych plików. W aplikacji otwórz najnowsze budowanie i dotknij „Artifacts ↗” albo dotknij ikony udostępniania i wybierz Chrome (albo „Copy link”, a potem wklej link do paska adresu Chrome). Kontynuuj w Chrome.

   Widzisz „Page not found” (404)? Najpierw sprawdź, czy jesteś zalogowany do github.com w tej przeglądarce: GitHub pokazuje 404 dla prywatnych repozytoriów, gdy nie jesteś zalogowany. W przeciwnym razie Twoja nazwa użytkownika lub nazwa repozytorium w kroku 1 nie pasuje do Twojego repozytorium: sprawdź je na github.com i wpisz je w kroku 1.

   Aby linki GitHub nie otwierały się w aplikacji: Ustawienia Androida → Aplikacje → GitHub → Otwieraj domyślnie → wyłącz „Otwieraj obsługiwane linki”.
3. Dotknij najnowszego budowania z zielonym znaczkiem ✅.
4. Przewiń w dół do podsumowania budowania i dotknij dużego linku „📱 Download AAPS …” (albo przewiń dalej w dół do „Artifacts” i dotknij aaps-….apk). Przewijaj palcem po tekście, a nie po diagramie kroków budowania.
5. Gdy pobieranie się skończy, dotknij pliku i wybierz Zainstaluj. Jeśli telefon zapyta, zezwól na instalowanie aplikacji z tego źródła.
6. aaps-wear-….apk jest dla smartwatcha. Pomiń go, jeśli nie używasz smartwatcha.

Pliku APK nie widać w zakładce „Code” Twojego repozytorium, tylko na stronie budowania. Jest przechowywany przez 14 dni.

Nowa wersja AAPS? Zrób kopię zapasową ustawień, a potem zbuduj ją według [kroku 4](#aaps-builder-setup-step4). Twoje repozytorium nigdy niczego nie buduje samo.

(aaps-builder-setup-step6)=

## Krok 6 – Opcjonalnie: aplikacja na Dysku Google

Chcesz, aby plik APK pojawiał się na Twoim Dysku Google (przechowywany na zawsze)? Dodaj jeszcze jeden sekret: GDRIVE_OAUTH2. Ta strona uzyska go dla Ciebie od Google. AAPS będzie wtedy widział i zmieniał na Twoim Dysku Google tylko pliki, które sam utworzy, nic więcej.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google otworzy się w nowej karcie. Wybierz swoje konto Google i zezwól AAPS na widzenie i zmienianie jego własnych plików. Jeśli Google napisze, że aplikacja nie jest zweryfikowana, dotknij „Advanced” (Zaawansowane), a potem „Go to …” (Przejdź do …).
2. Potem nowa karta pokaże błąd, np. **„This site can't be reached”** albo **„127.0.0.1 refused to connect”**. **Tak ma być.** Odpowiedź Google jest w adresie tej karty.

   Dotknij paska adresu tej karty, zaznacz cały adres i skopiuj go. Zaczyna się od `http://127.0.0.1:47913/`. Wróć na tę stronę w ciągu kilku minut: odpowiedź jest ważna tylko przez krótki czas.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Otwiera: <code class="aapsb-repoUrl"></code>

   Widzisz „Page not found” (404)? Najpierw sprawdź, czy jesteś zalogowany do github.com w tej przeglądarce: GitHub pokazuje 404 dla prywatnych repozytoriów, gdy nie jesteś zalogowany. W przeciwnym razie Twoja nazwa użytkownika lub nazwa repozytorium w kroku 1 nie pasuje do Twojego repozytorium: sprawdź je na github.com i wpisz je w kroku 1.
5. Dotknij „Copy name”, potem wklej to do małego pola „Name”: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Dotknij „Copy secret”, potem wklej kod do dużego pola „Secret”: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Dotknij „Add secret”.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Działa też wartość ze strony przygotowawczej AAPS innego sposobu budowania w przeglądarce: otwórz stronę sekretów, dodaj nazwę `GDRIVE_OAUTH2` i wklej swoją wartość. Zobacz [Zapisywanie zbudowanych aplikacji na Dysku Google](#aaps-builder-google-drive).
```

Przy następnym budowaniu pliki APK zostaną też zapisane na Dysku Google w folderze AAPS/&lt;version&gt;.

Jeśli nie budujesz przez 6 miesięcy albo zmienisz hasło Google, Google zablokuje dostęp. Budowanie wtedy o tym poinformuje: wykonaj ten krok jeszcze raz.

----

Wszystko na tej stronie działa w Twojej przeglądarce. Twój klucz i hasła nigdy nie są nigdzie wysyłane, poza miejscami, w które sam je wklejasz. Do GitHub wysyłana jest tylko Twoja nazwa użytkownika GitHub, aby sprawdzić, czy istnieje. W kroku 6 odpowiedź Google jest wysyłana tylko do Google, aby uzyskać GDRIVE_OAUTH2. Workflow budowania jest utrzymywany przez deweloperów AAPS w [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) i opiera się na AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Długi kod skopiowany: wklej go do dużego pola „Secret”, a potem dotknij „Add secret”.</span>
- <span data-aapsb-msg="copiedName">Nazwa skopiowana: wklej ją do małego pola „Name”.</span>
- <span data-aapsb-msg="userOk">✓ Znaleziono użytkownika GitHub.</span>
- <span data-aapsb-msg="userBad">✗ Nie ma użytkownika GitHub o tej nazwie. Wpisz swoją nazwę użytkownika (widać ją w Twoim profilu GitHub), a nie adres e-mail.</span>
- <span data-aapsb-msg="copiedShort">Skopiowano ✓</span>
- <span data-aapsb-msg="needUser">Najpierw wpisz w kroku 1 swoją nazwę użytkownika GitHub.</span>
- <span data-aapsb-msg="errPipe">Hasła i alias nie mogą zawierać znaku |</span>
- <span data-aapsb-msg="errNoFile">Wybierz plik magazynu kluczy (keystore).</span>
- <span data-aapsb-msg="errEmpty">Wpisz hasło i alias.</span>
- <span data-aapsb-msg="errPass">Błędne hasło magazynu kluczy.</span>
- <span data-aapsb-msg="errKeyPass">Błędne hasło klucza.</span>
- <span data-aapsb-msg="errAlias">Nie znaleziono aliasu w magazynie kluczy. Dostępne: {aliases}</span>
- <span data-aapsb-msg="errFormat">To nie wygląda na plik magazynu kluczy.</span>
- <span data-aapsb-msg="okHave">Magazyn kluczy OK! Przejdź do kroku 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Magazyn kluczy odczytany. Hasło zostanie sprawdzone podczas budowania. Przejdź do kroku 3.</span>
- <span data-aapsb-msg="errShort">Hasło musi mieć co najmniej 8 znaków.</span>
- <span data-aapsb-msg="errAscii">Używaj tylko a–z, A–Z, 0–9 i symboli takich jak ! ? # – bez spacji, bez polskich znaków (ą, ę, ł…) i bez |</span>
- <span data-aapsb-msg="errMatch">Hasła nie są takie same.</span>
- <span data-aapsb-msg="working">Tworzenie klucza…</span>
- <span data-aapsb-msg="okNew">Klucz utworzony. Pobierz kopię zapasową poniżej, a potem przejdź do kroku 3.</span>
- <span data-aapsb-msg="gNoUrl">Najpierw wklej cały adres karty Google.</span>
- <span data-aapsb-msg="gNoCode">Ten adres nie zawiera odpowiedzi od Google. Skopiuj cały adres karty, która pokazuje błąd. Zaczyna się od http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Nie zezwolono na dostęp Google. Dotknij jeszcze raz „Connect Google Drive” i zezwól na dostęp.</span>
- <span data-aapsb-msg="gOldUrl">Ten adres pochodzi z wcześniejszej próby. Dotknij jeszcze raz „Connect Google Drive” i użyj nowego adresu.</span>
- <span data-aapsb-msg="gWorking">Wysyłanie zapytania do Google…</span>
- <span data-aapsb-msg="gFailed">Google tego nie przyjął ({error}). Odpowiedź jest ważna tylko przez kilka minut i tylko raz: dotknij jeszcze raz „Connect Google Drive”.</span>
- <span data-aapsb-msg="gNoRefresh">Google nie przyznał długoterminowego dostępu. Dotknij jeszcze raz „Connect Google Drive”.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 jest gotowy. Dodaj go poniżej jako sekret.</span>
- <span data-aapsb-msg="gCopied">Kod skopiowany: wklej go do dużego pola „Secret”, a potem dotknij „Add secret”.</span>

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
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
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
