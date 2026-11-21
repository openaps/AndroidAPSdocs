# Compilar AAPS

## Compileu-la vosaltres mateixos en lloc de descarregar-la

**L'aplicació AAPS (un fitxer apk) no es pot descarregar, per les normes sobre dispositius mèdics. És legal compilar l'aplicació per al vostre ús propi, però no en podeu donar una còpia a altres persones!**

Vegeu la [pàgina de preguntes freqüents](../UsefulLinks/FAQ.md) per a més detalls.

---

Hi ha tres mètodes per compilar l'aplicació AAPS:

### Compilar amb un navegador (recomanat)

Podeu compilar l'aplicació en un navegador web amb GitHub Actions. Des d'un telèfon Android, la pàgina de configuració d'[AAPS Builder](#aaps-builder) us guia pas a pas, i vosaltres mateixos inicieu cada compilació. Des d'un ordinador o d'un iPhone, també podeu compilar amb un fork i desar l'aplicació al vostre Google Drive.

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
## Si la compilació falla

Cada mètode de compilació té la seva pròpia secció de resolució de problemes:

* **AAPS Builder**: [Resolució de problemes d'AAPS Builder](#aaps-builder-troubleshooting)
* **Compilació al navegador** des d'un ordinador o d'un iPhone: [Compilació al navegador: resolució de problemes](#aaps-ci-troubleshooting)
* **Android Studio**: [Resolució de problemes d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Heu perdut el vostre magatzem de claus o la seva contrasenya? Vegeu [Reinstal·lar AAPS amb un nou magatzem de claus](#reinstall-aaps).

Si l'aplicació s'ha compilat però no s'instal·la al vostre telèfon, vegeu [Transferir i instal·lar AAPS al vostre telèfon](TransferringAndInstallingAaps.md).

Si el vostre problema no és a la llista, vegeu [On puc trobar ajuda?](../GettingHelp/WhereCanIGetHelp.md).
