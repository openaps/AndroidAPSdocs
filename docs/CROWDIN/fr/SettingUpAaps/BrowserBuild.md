(browser-build)=

# Compilation dans le navigateur

Compiler AAPS avec GitHub Actions.

**La version minimale d'AAPS prise en charge est la 3.3.2.1.**

## Compiler vous-même au lieu de télécharger

**L'application AAPS (le fichier apk) n'est pas disponible en téléchargement, en raison de la réglementation concernant les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à d'autres personnes !**

Consultez la [Foire Aux Questions (FAQ)](../UsefulLinks/FAQ.md) pour plus de détails.

(Building-APK-without-a-computer)=

## Choisir comment compiler

Choisissez la méthode qui correspond à l'appareil depuis lequel vous compilez :

### Sur un téléphone Android : AAPS Builder (recommandé)

Une page de configuration vous guide pour créer votre propre dépôt privé de compilation dans GitHub. Rien à installer, pas de fichier de préparation, et vous lancez vous-même chaque compilation. Vous téléchargez l'application directement depuis GitHub. Google Drive est facultatif.

Cela fonctionne aussi depuis le navigateur d'un ordinateur.

**→ [Compiler avec AAPS Builder](BrowserBuildAapsBuilder.md)**

### Sur un ordinateur ou un iPhone / iPad : fork et fichier de préparation

Vous faites une copie (fork) du code source d'AAPS dans GitHub, vous créez votre keystore avec un fichier de préparation, et l'application compilée est enregistrée dans votre Google Drive. Suivez les quatre étapes ci-dessous.

```{note}
**Vous compilez déjà avec un fork ?** Continuez à le mettre à jour comme décrit dans [Mise à jour avec un navigateur (fork)](../Maintenance/UpdateBrowserBuild.md), ou passez à AAPS Builder. Pour changer, récupérez d'abord une copie de votre keystore depuis votre fork : voir [Venir de l'ancienne compilation dans le navigateur](#aaps-builder-from-fork).
```

Vous devrez utiliser plusieurs onglets dans votre navigateur et passer de l'un à l'autre. Exemple avec Chrome :

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Vous devrez passer d'un onglet à l'autre : commencez avec tous les onglets fermés, pour ne pas vous perdre en passant de l'un à l'autre.
```

#### Ce dont vous avez besoin

- Un **compte Google**, pour que l'application compilée puisse être enregistrée dans votre Google Drive.
- Un **compte GitHub** (gratuit) – vous le créez à l'étape 1.
- Un **navigateur web** qui peut garder plusieurs onglets ouverts en même temps (Chrome est utilisé ci-dessous).
- Un petit **outil pour exécuter le fichier de préparation**. L'outil dépend de l'appareil depuis lequel vous compilez – il n'y a rien à installer maintenant, l'étape 2 vous guide pour votre appareil :
  - **Ordinateur (Windows / Mac / Linux) :** Simple Web Server.
  - **iPhone / iPad :** pas d'application en plus – vous utilisez l'application Fichiers intégrée et le navigateur.

#### Les étapes

La compilation dans le navigateur est une suite de choix. Suivez ces étapes dans l'ordre :

1. **[Créer votre fork GitHub](BrowserBuildFork.md)** – faites votre copie personnelle du code source d'AAPS.
2. **[Créer votre keystore de signature](BrowserBuildKeystore.md)** – le choix principal : générer un nouveau keystore (option 1) ou envoyer votre keystore existant (option 2), puis suivre la page pour votre appareil.
3. **[Autoriser Google Drive](BrowserBuildGoogleDrive.md)** – permettez à GitHub d'enregistrer l'application compilée dans votre Google Drive.
4. **[Compiler l'APK](BrowserBuildAPK.md)** – lancez le workflow GitHub Actions et choisissez votre version et votre variante.

En cas de problème, voir **[Dépannage de la compilation dans le navigateur](../GettingHelp/BrowserBuildTroubleshooting.md)**. Pour les opérations facultatives avec un fork, voir [exporter votre keystore](#ci-keystore-export) ou [faire un cherry-pick d'un commit](#github-cherry-pick).

----

**Commencez par [l'étape 1 – Créer votre fork GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Étape 1 : Créer votre fork <BrowserBuildFork.md>
Étape 2 : Créer votre keystore <BrowserBuildKeystore.md>
Étape 3 : Autoriser Google Drive <BrowserBuildGoogleDrive.md>
Étape 4 : Compiler l'APK <BrowserBuildAPK.md>
```
