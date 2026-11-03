# Aktualizacja do nowej wersji lub innej gałęzi

## Zbuduj sam zamiast pobierać

**AAPS** nie jest dostępny do pobrania ze względu na przepisy dotyczące wyrobów medycznych. Zbudowanie aplikacji na własny użytek jest legalne, ale NIE WOLNO Ci przekazywać jej kopii innym osobom! Szczegóły znajdziesz na stronie [FAQ](../UsefulLinks/FAQ.md).

## Ważne uwagi

- Zaktualizuj **AAPS** do nowej wersji jak najszybciej po jej wydaniu.
- Gdy nowa wersja będzie dostępna, w samej aplikacji **AAPS** zobaczysz baner z informacją o nowej wersji.
- Nowa wersja zostanie też ogłoszona na Facebooku w dniu wydania.
- Po wydaniu nowej wersji dokładnie przeczytaj [Informacje o wersji](ReleaseNotes.md) i wyjaśnij wszystkie pytania ze społecznością na Facebooku lub Discordzie, zanim zaczniesz aktualizację.
- Aktualizujesz z **AAPS** 3.x? Najpierw przeczytaj [Co zmieniło się w AAPS v4](V4Changes.md): znajdziesz tam funkcje, które zostały przeniesione, mają nową nazwę lub zostały usunięte.
- Nie zapomnij [wyeksportować ustawień](ExportImportSettings.md). Gdy po aktualizacji zaimportujesz je ponownie, wybierasz, czy ustawienia pompy też mają zostać zastąpione.

## Aktualizacja AAPS przez budowanie w przeglądarce

Twoja aplikacja AAPS została już zbudowana w przeglądarce? Postępuj zgodnie z instrukcją dla metody, której użyto:

- **AAPS Builder**: budujesz na stronie **Build AAPS** swojego prywatnego repozytorium (zwykle o nazwie `my-aaps`) i pobierasz aplikację z GitHub. Postępuj zgodnie z [Aktualizacja AAPS za pomocą AAPS Builder](#aaps-builder-updates). Nie ma forka do synchronizacji.
- **Fork i plik przygotowania**: uruchamiasz workflow **AAPS-CI** we własnej kopii (forku) AndroidAPS, czyli w repozytorium o nazwie `AndroidAPS` na Twoim koncie GitHub, a aplikacja trafia na Twój Dysk Google. Postępuj zgodnie z [Aktualizacja w przeglądarce (fork)](./UpdateBrowserBuild.md).

## Aktualizacja AAPS w Android Studio

Postępuj zgodnie z [tą instrukcją](./UpdateComputerBuild.md).

## Aktualizacja AAPS z wiersza poleceń

Użyj [tej samej instrukcji](../SettingUpAaps/CLIBuild.md) co przy wcześniejszym budowaniu AAPS, ale pobierz nowe zmiany za pomocą git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Po aktualizacji

Te kroki są takie same dla każdej metody budowania. Sprawdź na stronie [Informacje o wersji](../Maintenance/ReleaseNotes.md), czy po aktualizacji trzeba wykonać jakieś dodatkowe kroki.

Po zainstalowaniu nowego pliku apk:

- możesz sprawdzić wersję **AAPS** w telefonie: otwórz **menu** (☰) w lewym górnym rogu, a następnie **O aplikacji** (jak na zrzucie ekranu poniżej). Możesz sprawdzić aktualną wersję **AAPS**;
- upewnij się, że zaimportowałeś ustawienia; oraz
- sprawdź ustawienia **AAPS** w **Ustawieniach** i upewnij się, że nadal są prawidłowe.

![Okno „O aplikacji” z zainstalowaną wersją AAPS](../images/about_dialog_version.png)