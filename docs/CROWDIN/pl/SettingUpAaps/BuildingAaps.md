# Budowanie AAPS

## Zbuduj sam zamiast pobierać

**Aplikacji AAPS (pliku apk) nie można pobrać gotowej z powodu przepisów dotyczących wyrobów medycznych. Zbudowanie aplikacji na własny użytek jest legalne, ale NIE WOLNO Ci przekazywać jej kopii innym osobom!**

Szczegóły znajdziesz na stronie [FAQ](../UsefulLinks/FAQ.md).

---

Aplikację AAPS możesz zbudować na trzy sposoby:

### Budowanie w przeglądarce (zalecane)

Możesz zbudować aplikację na smartfonie za pomocą GitHub Actions. Na telefonie z Androidem przeprowadzi Cię przez to strona konfiguracji [AAPS Builder](#aaps-builder), a każde budowanie uruchamiasz sam. Na komputerze albo iPhonie możesz też budować z forkiem i zapisać aplikację na swoim Dysku Google.

**[Postępuj zgodnie z tymi instrukcjami.](./BrowserBuild.md)**

----

### Budowanie w Android Studio

Możesz zbudować aplikację na komputerze za pomocą Android Studio. Kiedyś była to jedyna możliwość budowania, dziś z Android Studio korzystają głównie programiści, którzy chcą zmieniać kod.

**[Postępuj zgodnie z tymi instrukcjami.](./ComputerBuild.md)**

----

### Budowanie z wiersza poleceń

Ta opcja jest dla osób, które wolą budować AAPS lokalnie w wierszu poleceń, bez instalowania Android Studio.

**[Postępuj zgodnie z tymi instrukcjami.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Jeśli budowanie się nie uda

Każda metoda budowania ma własną sekcję rozwiązywania problemów:

* **AAPS Builder**: [Rozwiązywanie problemów z AAPS Builder](#aaps-builder-troubleshooting)
* **Budowanie w przeglądarce** na komputerze albo iPhonie: [Budowanie w przeglądarce: rozwiązywanie problemów](#aaps-ci-troubleshooting)
* **Android Studio**: [Rozwiązywanie problemów z Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Zgubiłeś magazyn kluczy albo jego hasło? Zobacz [Ponowna instalacja AAPS z nowym magazynem kluczy](#reinstall-aaps).

Jeśli aplikacja jest zbudowana, ale nie instaluje się na telefonie, zobacz [Przenoszenie i instalacja AAPS na smartfonie](TransferringAndInstallingAaps.md).

Jeśli Twojego problemu nie ma na liście, zobacz [Gdzie mogę uzyskać pomoc?](../GettingHelp/WhereCanIGetHelp.md).
