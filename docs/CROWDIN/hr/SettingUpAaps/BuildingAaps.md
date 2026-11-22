# Izrada AAPS-a

## Izradite sami umjesto preuzimanja

**Aplikacija AAPS (APK datoteka) nije dostupna za preuzimanje zbog propisa o medicinskim uređajima. Zakonito je izraditi aplikaciju za vlastitu upotrebu, ali kopiju ne smijete dati drugima!**

Pojedinosti pogledajte na stranici [Česta pitanja korisnika petlje](../UsefulLinks/FAQ.md).

---

Postoje tri načina izrade aplikacije AAPS:

### Izrada u pregledniku (preporučeno)

Aplikaciju možete izraditi u web pregledniku pomoću GitHub Actions. Na Android telefonu kroz postupak vas vodi stranica postavki [AAPS Buildera](#aaps-builder), a svaku izradu pokrećete sami. S računala ili iPhonea možete izraditi aplikaciju i pomoću forka te je spremiti na svoj Google Drive.

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
## Ako izrada ne uspije

Svaki način izrade ima svoj odjeljak za rješavanje problema:

* **AAPS Builder**: [Rješavanje problema s AAPS Builderom](#aaps-builder-troubleshooting)
* **Izrada u pregledniku** s računala ili iPhonea: [Izrada u pregledniku: rješavanje problema](#aaps-ci-troubleshooting)
* **Android Studio**: [Rješavanje problema s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)

Izgubili ste spremište ključeva ili njegovu lozinku? Pogledajte [Ponovna instalacija AAPS-a s novim spremištem ključeva](#reinstall-aaps).

Ako je aplikacija izrađena, ali se ne instalira na vaš telefon, pogledajte [Prijenos i instalacija AAPS-a na vaš pametni telefon](TransferringAndInstallingAaps.md).

Ako vaš problem nije naveden, pogledajte [Gdje mogu dobiti pomoć?](../GettingHelp/WhereCanIGetHelp.md).
