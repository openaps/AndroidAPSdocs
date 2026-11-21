# Compilar AAPS

## Compileu-la vosaltres mateixos en lloc de descarregar-la

**L'aplicació AAPS (un fitxer apk) no es pot descarregar, per les normes sobre dispositius mèdics. És legal compilar l'aplicació per al vostre ús propi, però no en podeu donar una còpia a altres persones!**

Vegeu la [pàgina de preguntes freqüents](../UsefulLinks/FAQ.md) per a més detalls.

---

Hi ha tres mètodes per compilar l'aplicació AAPS:

### Compilar amb un navegador (recomanat)

You can build the app in a web browser using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Seguiu aquestes instruccions.](./BrowserBuild.md)**

----

### Compilar amb Android Studio

Podeu compilar l'aplicació al vostre ordinador amb Android Studio. Abans era l'única opció de compilació; ara Android Studio el fan servir sobretot els desenvolupadors que volen fer canvis al codi.

**[Seguiu aquestes instruccions.](./ComputerBuild.md)**

----

### Compilar des de la línia d'ordres

Aquesta opció és per a qui prefereix compilar AAPS a la línia d'ordres local, sense instal·lar Android Studio.

**[Seguiu aquestes instruccions.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Lost your keystore or its password? Vegeu [Reinstal·lar AAPS amb un nou magatzem de claus](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
