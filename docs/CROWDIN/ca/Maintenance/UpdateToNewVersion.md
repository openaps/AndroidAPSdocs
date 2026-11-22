# Actualitzar a una nova versió o branca

## Compileu-la vosaltres mateixos en lloc de descarregar-la

**AAPS** no es pot descarregar, per la normativa sobre dispositius mèdics. És legal compilar l'aplicació per al vostre ús propi, però no en podeu donar una còpia a altres persones! Vegeu la [pàgina de preguntes freqüents](../UsefulLinks/FAQ.md) per a més detalls.

## Notes importants

- Actualitzeu a la nova versió d'**AAPS** com més aviat millor quan hi hagi una nova versió disponible.
- Quan hi hagi una nova versió disponible, rebreu un bàner informatiu sobre la nova versió a la mateixa aplicació **AAPS**.
- La nova versió també s'anunciarà a Facebook quan surti.
- Quan surti la versió, llegiu amb atenció les [Notes de la versió](ReleaseNotes.md) i aclariu els dubtes amb la comunitat a Facebook o Discord abans de fer l'actualització.
- Actualitzeu des d'**AAPS** 3.x? Primer llegiu [Què ha canviat a AAPS v4](V4Changes.md): hi trobareu les funcions que s'han mogut, que han canviat de nom o que s'han eliminat.
- No oblideu [exportar la vostra configuració](ExportImportSettings.md). Quan la torneu a importar després de l'actualització, podeu triar si també se substitueix la configuració de la bomba.

## Actualitzar AAPS amb la compilació al navegador

Ja vau compilar la vostra aplicació AAPS amb un navegador? Seguiu les instruccions del mètode que vau fer servir:

- **AAPS Builder**: compileu des de la pàgina **Build AAPS** del vostre repositori privat (normalment anomenat `my-aaps`) i descarregueu l'aplicació de GitHub. Seguiu [Actualitzar AAPS amb AAPS Builder](#aaps-builder-updates). No hi ha cap fork per sincronitzar.
- **Fork i fitxer de preparació**: executeu el workflow **AAPS-CI** a la vostra pròpia còpia (fork) d'AndroidAPS, un repositori anomenat `AndroidAPS` al vostre compte de GitHub, i l'aplicació arriba al vostre Google Drive. Seguiu [Actualitzar amb el navegador (fork)](./UpdateBrowserBuild.md).

## Actualitzar AAPS amb Android Studio

Seguiu [aquestes instruccions](./UpdateComputerBuild.md).

## Actualitzar AAPS amb la línia d'ordres

Feu servir les [mateixes instruccions](../SettingUpAaps/CLIBuild.md) que quan vau compilar AAPS abans, però descarregueu els canvis nous amb git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Després de l'actualització

Aquests passos són els mateixos per a tots els mètodes de compilació. Comproveu a les [Notes de la versió](../Maintenance/ReleaseNotes.md) si hi ha instruccions específiques després de l'actualització.

Després d'instal·lar el nou apk:

- podeu comprovar la versió d'**AAPS** al telèfon obrint el **menú** (☰) a la part superior esquerra i després **Quant a** (com a la captura de pantalla de sota). Es pot veure la versió actual d'**AAPS**;
- assegureu-vos que heu importat la vostra configuració; i
- comproveu la configuració d'**AAPS** a **Configuració** i assegureu-vos que continua sent correcta.

![Diàleg «Quant a» amb la versió d'AAPS instal·lada](../images/update/about_dialog_version.png)