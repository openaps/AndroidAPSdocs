# Izrada AAPS-a

## Izradite sami umjesto preuzimanja

**Aplikacija AAPS (APK datoteka) nije dostupna za preuzimanje zbog propisa o medicinskim uređajima. Zakonito je izraditi aplikaciju za vlastitu upotrebu, ali kopiju ne smijete dati drugima!**

Pojedinosti pogledajte na stranici [Česta pitanja korisnika petlje](../UsefulLinks/FAQ.md).

---

Postoje tri načina izrade aplikacije AAPS:

### Izrada u pregledniku (preporučeno)

You can build the app in a web browser using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Slijedite ove upute.](./BrowserBuild.md)**

----

### Izrada s Android Studiom

Aplikaciju možete izraditi na svom računalu pomoću Android Studija. Nekada je to bila jedina mogućnost izrade, danas Android Studio uglavnom koriste razvojni programeri koji žele mijenjati kod.

**[Slijedite ove upute.](./ComputerBuild.md)**

----

### Izrada iz naredbenog retka

Ova je mogućnost namijenjena onima koji AAPS radije izrađuju lokalno iz naredbenog retka, bez instaliranja Android Studija.

**[Slijedite ove upute.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Lost your keystore or its password? Pogledajte [Ponovna instalacija AAPS-a s novim spremištem ključeva](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
