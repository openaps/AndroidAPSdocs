# Construire AAPS

## Construiți aplicația, nu o descărcați

**Aplicația AAPS (un fișier apk) nu este disponibilă pentru descărcare, din cauza reglementărilor privind dispozitivele medicale. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

Three methods are available to build the AAPS app:

### Build with a browser (recommended)

Puteți construi aplicația într-un browser web, folosind GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Urmați aceste instrucțiuni.](./BrowserBuild.md)**

----

### Build with Android Studio

Puteți construi aplicația cu calculatorul dumneavoastră folosind Android Studio. This used to be the only build option, nowadays Android Studio is mostly used by developers who consider making code changes.

**[Urmați aceste instrucțiuni.](./ComputerBuild.md)**

----

### Build using the command-line

This option is intended for those who prefer to build AAPS in local command-line, without installing Android Studio.

**[Urmați aceste instrucțiuni.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Dacă construirea eșuează

Fiecare metodă de construire are propria secțiune de depanare:

* **AAPS Builder**: [Depanare AAPS Builder](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Depanare Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Ați pierdut keystore-ul sau parola acestuia? See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
