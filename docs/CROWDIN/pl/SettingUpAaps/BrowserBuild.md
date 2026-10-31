(browser-build)=

# Budowanie w przeglądarce

Budowanie AAPS za pomocą GitHub Actions.

**Najniższa obsługiwana wersja AAPS to 3.3.2.1.**

## Zbuduj sam zamiast pobierać

**Aplikacji AAPS (pliku apk) nie można pobrać gotowej z powodu przepisów dotyczących wyrobów medycznych. Zbudowanie aplikacji na własny użytek jest legalne, ale NIE WOLNO Ci przekazywać jej kopii innym osobom!**

Szczegóły znajdziesz na stronie [FAQ](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Wybierz sposób budowania

Wybierz metodę, która pasuje do urządzenia, na którym budujesz:

### Na telefonie z Androidem: AAPS Builder (zalecane)

Strona konfiguracji prowadzi Cię krok po kroku przez utworzenie własnego, prywatnego repozytorium do budowania na GitHub. Nic nie trzeba instalować, nie ma pliku przygotowawczego, a każde budowanie uruchamiasz samodzielnie. Aplikację pobierasz bezpośrednio z GitHub. Dysk Google jest opcjonalny.

To działa też w przeglądarce na komputerze.

**→ [Budowanie w przeglądarce z AAPS Builder](BrowserBuildAapsBuilder.md)**

### Na komputerze albo na iPhonie / iPadzie: fork i plik przygotowawczy

Tworzysz kopię (fork) kodu źródłowego AAPS na GitHub, tworzysz magazyn kluczy (keystore) za pomocą pliku przygotowawczego, a zbudowana aplikacja jest zapisywana na Twoim Dysku Google. Wykonaj cztery kroki poniżej.

```{note}
**Już budujesz z forka?** Aktualizuj go dalej tak, jak opisano w [Aktualizacja w przeglądarce (fork)](../Maintenance/UpdateBrowserBuild.md), albo przejdź na AAPS Builder. Aby przejść, najpierw pobierz kopię magazynu kluczy ze swojego forka: zobacz [Przejście z poprzedniego budowania w przeglądarce](#aaps-builder-from-fork).
```

Będziesz używać kilku kart w przeglądarce i przełączać się między nimi. Przykład w Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Będziesz przechodzić z karty na kartę: zacznij z zamkniętymi wszystkimi kartami, aby się nie pogubić przy przełączaniu.
```

#### Czego potrzebujesz

- **Konto Google**, aby zbudowana aplikacja mogła zostać zapisana na Twoim Dysku Google.
- **Konto GitHub** (darmowe) – utworzysz je w kroku 1.
- **Przeglądarka internetowa**, która może mieć otwartych kilka kart jednocześnie (poniżej zakładamy Chrome).
- Małe **narzędzie do uruchomienia pliku przygotowawczego**. To, którego potrzebujesz, zależy od urządzenia, na którym budujesz – teraz nic nie trzeba instalować, krok 2 przeprowadzi Cię przez to dla Twojego urządzenia:
  - **Komputer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** bez dodatkowej aplikacji – używasz wbudowanej aplikacji Pliki i przeglądarki.

#### Kroki

Budowanie w przeglądarce to seria wyborów. Wykonaj te kroki po kolei:

1. **[Utwórz swój fork na GitHub](BrowserBuildFork.md)** – zrób własną kopię kodu źródłowego AAPS.
2. **[Utwórz magazyn kluczy do podpisu](BrowserBuildKeystore.md)** – najważniejsza decyzja: wygeneruj nowy magazyn kluczy (opcja 1) albo prześlij istniejący (opcja 2), a potem postępuj według strony dla Twojego urządzenia.
3. **[Autoryzuj Dysk Google](BrowserBuildGoogleDrive.md)** – pozwól GitHub zapisać zbudowaną aplikację na Twoim Dysku Google.
4. **[Zbuduj plik APK](BrowserBuildAPK.md)** – uruchom workflow GitHub Actions i wybierz wersję oraz wariant.

Jeśli masz problemy, zobacz **[Budowanie w przeglądarce: rozwiązywanie problemów](../GettingHelp/BrowserBuildTroubleshooting.md)**. Opcjonalne operacje z forkiem: zobacz [eksport magazynu kluczy](#ci-keystore-export) lub [przeniesienie commita (cherry-pick)](#github-cherry-pick).

----

**Zacznij od [Kroku 1 – Utwórz swój fork na GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Krok 1: Utwórz fork <BrowserBuildFork.md>
Krok 2: Utwórz magazyn kluczy <BrowserBuildKeystore.md>
Krok 3: Autoryzuj Dysk Google <BrowserBuildGoogleDrive.md>
Krok 4: Zbuduj APK <BrowserBuildAPK.md>
```
