# Aktualizacja do nowej wersji lub innej gałęzi

## Zbuduj sam zamiast pobierać

**AAPS** nie jest dostępny do pobrania ze względu na przepisy dotyczące wyrobów medycznych. Zbudowanie aplikacji na własny użytek jest legalne, ale NIE WOLNO Ci przekazywać jej kopii innym osobom! Szczegóły znajdziesz na stronie [FAQ](../UsefulLinks/FAQ.md).

## Ważne uwagi

- Zaktualizuj **AAPS** do nowej wersji jak najszybciej po jej wydaniu.
- Gdy nowa wersja będzie dostępna, w samej aplikacji **AAPS** zobaczysz baner z informacją o nowej wersji.
- Nowa wersja zostanie też ogłoszona na Facebooku w dniu wydania.
- Po wydaniu nowej wersji dokładnie przeczytaj [Informacje o wersji](ReleaseNotes.md) i wyjaśnij wszystkie pytania ze społecznością na Facebooku lub Discordzie, zanim zaczniesz aktualizację.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Aktualizacja AAPS przez budowanie w przeglądarce

Twoja aplikacja AAPS została już zbudowana w przeglądarce? Postępuj zgodnie z instrukcją dla metody, której użyto:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Nie ma forka do synchronizacji.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Aktualizacja AAPS w Android Studio

Follow [these instructions](./UpdateComputerBuild.md).

## Aktualizacja AAPS z wiersza poleceń

Użyj [tej samej instrukcji](../SettingUpAaps/CLIBuild.md) co przy wcześniejszym budowaniu AAPS, ale pobierz nowe zmiany za pomocą git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Sprawdź na stronie [Informacje o wersji](../Maintenance/ReleaseNotes.md), czy po aktualizacji trzeba wykonać jakieś dodatkowe kroki.

Po zainstalowaniu nowego pliku apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Okno „O aplikacji” z zainstalowaną wersją AAPS](../images/about_dialog_version.png)