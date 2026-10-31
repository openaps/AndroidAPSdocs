(aaps-builder)=

# Compilation dans le navigateur avec AAPS Builder

```{note}
C'est la méthode conseillée pour compiler AAPS depuis un **téléphone Android**. Elle fonctionne aussi depuis le navigateur de n'importe quel ordinateur. Pour les autres façons de compiler depuis un ordinateur ou un iPhone, voir la présentation [Compilation dans le navigateur](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** compile l'application AAPS pour vous dans GitHub, le site web gratuit d'hébergement de code. Il n'y a rien à installer sur votre téléphone, et aucun fichier de préparation à ouvrir.

A setup page walks you through it. La première fois, cela prend environ 10 minutes :

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

Vous n'avez **pas** besoin de faire un fork d'AndroidAPS : le code source d'AAPS est téléchargé depuis le dépôt officiel AndroidAPS à chaque compilation. Vous n'avez **pas** besoin non plus de Google Drive : vous téléchargez l'application directement depuis GitHub.

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. Pendant la compilation, le workflow télécharge seulement le code source officiel d'AAPS et les outils de compilation de GitHub. Votre keystore ne quitte jamais votre navigateur et votre dépôt privé.
```

(aaps-builder-before-you-start)=

## Avant de commencer

Vous aurez besoin de :

- Un **compte GitHub** (gratuit). Si vous n'en avez pas, créez-le d'abord sur [github.com](https://github.com/signup).
- Un **navigateur web** : Chrome sur votre téléphone, ou n'importe quel navigateur sur un ordinateur. Connectez-vous à github.com dans ce navigateur avant de commencer.
- **Vous avez l'application GitHub sur votre téléphone ?** Vous pouvez la garder. Certains boutons de la page de configuration ouvrent alors l'application au lieu de Chrome. Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- Votre **keystore existant** (fichier `.jks`), son mot de passe et son alias, si vous avez déjà compilé AAPS et voulez le mettre à jour sans le réinstaller.

```{warning}
**Votre dépôt de compilation doit rester privé.** Tout ce qu'une compilation produit est visible par toute personne qui peut voir le dépôt. La page de configuration crée un dépôt privé pour vous. Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

Un dépôt privé reçoit 2000 minutes GitHub Actions gratuites par mois, ce qui suffit pour plusieurs compilations.
```

```{warning}
**Nouvelle clé ou clé existante : ce choix décide si vous pouvez mettre à jour AAPS.**

- **Vous avez déjà AAPS sur votre téléphone, compilé avec un keystore que vous avez toujours** : choisissez **I already have a keystore** (j'ai déjà un keystore) sur la page de configuration et envoyez-le. Votre prochaine compilation mettra à jour AAPS sur place. Vous avez compilé AAPS avec l'ancienne compilation dans le navigateur (votre propre fork) ? Votre keystore est dans votre fork : [récupérez-en d'abord une copie](#aaps-builder-from-fork).
- **Vous compilez AAPS pour la première fois, ou vous avez perdu votre keystore ou son mot de passe** : choisissez **Create a new key** (créer une nouvelle clé). Une application signée avec une nouvelle clé **ne peut pas mettre à jour** un AAPS signé avec une autre clé. Vous devez exporter vos paramètres, copier le fichier hors de votre téléphone, désinstaller l'ancien AAPS, installer le nouveau, puis importer vos paramètres : voir [Réinstaller AAPS avec un nouveau keystore](#reinstall-aaps).

Utilisez ensuite toujours la même clé. Quand vous créez une nouvelle clé, téléchargez la sauvegarde proposée par la page et gardez-la avec son mot de passe et son alias (`key0`) dans un endroit sûr, hors de votre téléphone.
```

(aaps-builder-from-fork)=

## Si vous venez de l'ancienne compilation dans le navigateur (fork)

Ignorez cette section si vous n'avez jamais compilé AAPS avec l'ancienne méthode de compilation dans le navigateur (votre propre copie, ou fork, d'AndroidAPS dans GitHub, avec le fichier de préparation et Google Drive).

Votre keystore est enregistré sous forme de secrets dans votre fork. GitHub n'affiche jamais un secret une deuxième fois, vous ne pouvez donc pas le copier dans votre nouveau dépôt. Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
Ne choisissez pas **Create a new key**. Un AAPS compilé avec une nouvelle clé ne peut pas mettre à jour l'AAPS de votre téléphone.
```

Quel est votre cas ?

- **Vous avez utilisé l'Option 2** (vous avez envoyé votre propre keystore créé avec Android Studio), et vous avez toujours le fichier `.jks`, ses mots de passe et son alias : rien à faire ici. Use that file in step 2.
- **Vous avez utilisé l'Option 1** (le fichier de préparation a créé votre clé), ou vous n'avez plus votre fichier keystore : exportez-le depuis votre fork comme ci-dessous.

Pour exporter votre keystore depuis votre fork :

1. Dans votre fork, ouvrez **Settings** → **Secrets and variables** → **Actions** et ajoutez un secret nommé `ZIP_PASSWORD`. Choisissez un mot de passe avec uniquement des lettres anglaises (sans accents) et des chiffres. Il protège le fichier que vous allez créer.
2. Ouvrez l'onglet **Actions** de votre fork, appuyez sur **CI Keystore Export**, puis sur **Run workflow**. Plus de détails : [Exporter votre keystore](#ci-keystore-export).
3. Quand l'exécution a une coche verte, ouvrez votre Google Drive : le fichier `keystore.zip` est dans le dossier **AAPS** → **KeyStore**. Si l'exécution échoue à l'étape Google Drive, l'accès Google Drive de votre fork a expiré : voir [Jeton d'actualisation Google expiré](#aaps-ci-google-token-expired).
4. Téléchargez `keystore.zip` et ouvrez-le avec votre `ZIP_PASSWORD` : sur un ordinateur, ou sur votre téléphone avec une application de gestion de fichiers qui sait ouvrir les fichiers ZIP protégés par mot de passe. Il contient :
   - `keystore.jks` : votre keystore,
   - `keyStoreInfo.txt` : votre `KEYSTORE_PASSWORD`, votre `KEY_PASSWORD` et votre `ALIAS` (en général `key0`).
5. Copiez `keystore.jks` sur votre téléphone (ou dans Google Drive, pour pouvoir le choisir depuis là).

In [step 2](#aaps-builder-step2) of the setup page:

1. Appuyez sur **I already have a keystore**.
2. Dans **Keystore file**, choisissez `keystore.jks`.
3. Dans **Keystore password**, tapez le `KEYSTORE_PASSWORD` de `keyStoreInfo.txt`.
4. Dans **Key alias**, choisissez ou tapez l'`ALIAS` de `keyStoreInfo.txt`.
5. Si `KEY_PASSWORD` est différent de `KEYSTORE_PASSWORD`, décochez **Key password is the same as the keystore password** et tapez le `KEY_PASSWORD`.

Gardez `keystore.zip` et son `ZIP_PASSWORD` dans un endroit sûr, hors de votre téléphone : c'est la sauvegarde de votre clé.

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. Vous pouvez garder votre fork jusqu'à ce que l'AAPS compilé avec AAPS Builder soit installé sur votre téléphone.

## Ouvrir la page de configuration

**→ [Ouvrir la page de configuration AAPS Builder](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

La page de configuration ouvre chaque page GitHub dans un nouvel onglet Chrome. Pour revenir à la page de configuration, appuyez sur le bouton des onglets à côté de la barre d'adresse de Chrome (le carré avec un nombre) et choisissez la page de configuration AAPS Builder.

La page de configuration fonctionne entièrement dans votre navigateur : votre clé et vos mots de passe ne sont jamais envoyés nulle part, sauf dans le secret GitHub où vous les collez vous-même. Seul votre nom d'utilisateur GitHub est envoyé à GitHub, pour vérifier qu'il existe. Elle retient votre nom d'utilisateur GitHub et le nom de votre dépôt, vous pouvez donc y revenir à tout moment pour rouvrir votre page des secrets ou vos compilations.

![La page de configuration AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Étape 1 – Créer votre dépôt de compilation privé

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. Vous seul pouvez le voir, ainsi que les applications qu'il compile.

1. Vérifiez que vous êtes connecté à github.com dans ce navigateur.

2. Dans **Your GitHub username**, tapez votre nom d'utilisateur GitHub, pas votre adresse e-mail. La page le vérifie auprès de GitHub : **✓ GitHub user found** signifie qu'il est correct.

3. Dans **Name of your repository**, gardez la suggestion `my-aaps`. Si vous avez déjà créé votre dépôt avec un autre nom, tapez exactement ce nom.

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![Étape 1 de la page de configuration remplie](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. Vérifiez la ligne **Your repository:** elle affiche `github.com/<your username>/my-aaps`. The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. Appuyez sur **Create my private repository**.

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![Page GitHub Create a new repository](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **Revenez à l'onglet de la page de configuration** pour l'étape 2 : appuyez sur le bouton des onglets à côté de la barre d'adresse de Chrome et choisissez la page de configuration.

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

L'application doit être signée avec votre propre clé. Choisissez l'un des deux onglets. Lisez d'abord l'[avertissement nouvelle clé ou clé existante](#aaps-builder-before-you-start).

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore

1. Appuyez sur **I already have a keystore**.
2. Dans **Keystore file**, choisissez votre fichier `.jks` (ou `.keystore`, `.p12`, `.pfx`). Sur un téléphone, copiez d'abord le fichier sur votre téléphone ou dans Google Drive.
3. Dans **Keystore password**, tapez le mot de passe du keystore.
4. Dans **Key alias**, choisissez votre alias dans la liste, ou tapez-le s'il n'y a pas de liste. Pour les keystores créés avec Android Studio, c'est en général `key0`.
5. Si le mot de passe de votre clé est différent du mot de passe du keystore, décochez **Key password is the same as the keystore password** et tapez le mot de passe de la clé.
6. Appuyez sur **Check and continue**.

La page vérifie le mot de passe et l'alias sur votre appareil. **Keystore OK! Continue with step 3.** means everything is right. Si la page indique que le mot de passe sera vérifié lors de la compilation, continuez quand même : la compilation vous dira si quelque chose ne va pas.

### Create a new key

1. Appuyez sur **Create a new key**.

2. Choisissez un mot de passe et tapez-le deux fois. Règles : au moins 8 caractères, uniquement les lettres a–z et A–Z, les chiffres 0–9 et des symboles comme `! ? #`. Pas d'espaces, pas de lettres accentuées, et pas le caractère `|`.

3. Appuyez sur **Create key**. Il faut quelques secondes avant que **Key created** apparaisse.

   ![Formulaire de nouvelle clé avec le mot de passe tapé deux fois](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Appuyez sur **Download backup (aaps-keystore.jks)**. Si Chrome demande **Download file again?** (télécharger à nouveau le fichier ?), une ancienne sauvegarde avec le même nom est déjà sur votre téléphone : appuyez sur **Download again** (télécharger à nouveau). Chrome enregistre alors la nouvelle clé sous le nom `aaps-keystore (1).jks` : c'est le fichier qui va avec cette clé, gardez-le et ne le confondez pas avec l'ancien.

   Gardez ces trois éléments ensemble, dans un endroit sûr hors de votre téléphone (par exemple votre propre stockage en ligne) :

   - le fichier `aaps-keystore.jks`,
   - votre mot de passe,
   - l'alias de la clé : **`key0`**.

   Vous avez besoin des trois si vous compilez un jour AAPS d'une autre façon, par exemple avec Android Studio. Les clés créées avec une version plus ancienne de la page de configuration ont l'alias `aaps`.

   ![Clé créée et la zone de sauvegarde](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. Votre clé, ses mots de passe et son alias sont regroupés en une seule valeur, le secret `KEYSTORE_SET`.

1. Appuyez sur **Open the secrets page**.

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub ouvre la page **New secret** de votre dépôt. Sur un téléphone, elle est sous le menu des paramètres : faites défiler vers le bas.

![Formulaire GitHub New secret](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Passez à l'onglet de la page de configuration et appuyez sur **Copy name**. Revenez à l'onglet GitHub et collez-le dans le petit champ **Name**. Le nom est `KEYSTORE_SET`.

4. Passez à l'onglet de la page de configuration et appuyez sur **Copy secret**. Revenez à l'onglet GitHub et collez-le dans la grande zone **Secret** (appui long sur un téléphone). Le secret est un code très long, de plusieurs milliers de caractères : la page de configuration affiche ses premiers caractères à côté du bouton. N'y collez pas le mot `KEYSTORE_SET`.

5. Appuyez sur **Add secret**. `KEYSTORE_SET` apparaît maintenant sous **Repository secrets**.

![Liste Repository secrets avec KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Vous ne devez le faire qu'une seule fois.

```{tip}
GitHub affiche **Page not found** (404) ? Vérifiez d'abord que vous êtes connecté à github.com dans ce navigateur : GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté. Sinon, le nom d'utilisateur ou le nom du dépôt de l'étape 1 ne correspond pas à votre dépôt. Vérifiez le nom sur github.com, corrigez-le à l'étape 1, puis appuyez de nouveau sur le bouton.
```

(aaps-builder-step4)=

## Step 4 – Build the app

1. Sur la page de configuration, appuyez sur **Open the build page**. GitHub ouvre la page **Build AAPS** de votre dépôt.

   ![Page GitHub Build AAPS avec le bouton Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Si c'est l'**application GitHub** qui s'ouvre : appuyez sur **RUN WORKFLOW**, vérifiez la version et la variante, puis appuyez de nouveau sur **RUN WORKFLOW**. L'application peut encore afficher **Nothing to see here** : tirez la liste vers le bas pour l'actualiser et voir votre compilation. Continuez ensuite avec l'étape 4 ci-dessous.

2. Si GitHub le demande, appuyez sur le bouton vert pour activer les workflows.
3. Appuyez sur **Run workflow**. Un petit formulaire s'ouvre :
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
   - **Variant** : gardez `fullRelease` pour une utilisation normale avec une pompe. Les autres variantes sont expliquées dans [variantes de compilation](#browserbuild-variant). `aapsclient3Release` compile **AAPSClient3**, disponible à partir de la version 4.0 d'**AAPS** (voir [À propos d'AAPSClient, AAPSClient2 et AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Appuyez sur le bouton vert **Run workflow**.

   ![Formulaire Run workflow avec latest et fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. La compilation démarre et affiche **In progress** (en cours), en deux parties : **AAPS / Check**, puis **AAPS / Build AAPS**.

   ![Compilation en cours](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Attendez 15 à 30 minutes. Une coche verte signifie que la compilation est terminée. Une croix rouge signifie qu'elle a échoué : ouvrez la compilation pour lire le message, puis consultez le [dépannage](#aaps-builder-troubleshooting).

   ![Compilation terminée avec une coche verte](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **E-mail quand une compilation est terminée :** GitHub ne vous envoie un e-mail que quand une compilation échoue. Pour recevoir aussi un e-mail quand elle réussit : sur github.com, ouvrez votre photo de profil → **Settings** → **Notifications** → **System** → **Actions**, et décochez **Only notify for failed workflows**.
   ```

S'il n'y a pas de bouton **Build AAPS** ou **Run workflow** :

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- Ouvrez l'onglet **Actions**. S'il indique que les workflows sont désactivés, appuyez sur le bouton vert pour les activer, puis appuyez sur **Build AAPS** dans la liste.

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

```{warning}
**Avant chaque mise à jour**, [exportez vos paramètres](#ExportImportSettings-Automating-Settings-Export) dans AAPS et copiez le fichier **hors du téléphone** (Google Drive, Dropbox…). Gardez-y aussi plusieurs exports plus anciens et les fichiers APK, pour pouvoir toujours revenir en arrière.
```

1. Sur votre téléphone, ouvrez la page de configuration dans **Chrome**. Connectez-vous à github.com si c'est demandé.
2. Appuyez sur **Open my builds**, puis sur la compilation la plus récente avec une coche verte.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   L'application GitHub ne peut pas télécharger les compilations. Dans l'application, ouvrez la compilation la plus récente, puis appuyez sur **Artifacts ↗**, ou appuyez sur l'icône de partage en haut et choisissez **Chrome** (ou **Copy link**, puis collez le lien dans la barre d'adresse de Chrome). La compilation s'ouvre dans Chrome : continuez là-bas avec l'étape suivante.

   Pour que les liens GitHub ne s'ouvrent plus dans l'application : **Paramètres** Android (Settings) → **Applications** (Apps) → **GitHub** → **Ouvrir par défaut** (Open by default) → désactivez **Ouvrir les liens compatibles** (Open supported links).
   ```

   ![Compilation terminée : statut Success et 2 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Faites défiler vers le bas jusqu'au résumé de la compilation et appuyez sur le lien **Download AAPS**.

   ![Résumé de la compilation avec le lien Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Faites défiler avec le doigt sur le texte, pas sur le schéma des étapes de compilation : c'est le schéma qui bouge au lieu de la page.
   ```

   Vous pouvez aussi faire défiler plus bas jusqu'à **Artifacts** et appuyer sur l'icône de téléchargement à côté de `aaps-….apk`.

   ![Artifacts avec les applications pour le téléphone et la montre](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Quand le téléchargement est terminé, ouvrez le menu de Chrome **⋮** → **Téléchargements** (Downloads), appuyez sur `aaps-….apk` et choisissez **Installer** (Install). Si c'est demandé, autorisez l'installation d'applications depuis cette source.

   ![Téléchargements de Chrome avec l'APK AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` est l'application pour la montre connectée. Ignorez-la si vous n'en utilisez pas.

L'application reste sur la page de compilation pendant **14 jours**. Elle n'apparaît pas sous **Code** dans votre dépôt. Copiez-la dans un endroit sûr, hors de votre téléphone, avec vos exports de paramètres.

Pour d'autres façons d'installer l'application, voir [Transfert et installation de AAPS sur votre smartphone](TransferringAndInstallingAaps.md).

```{note}
À partir de septembre 2026, la [vérification des développeurs Android](#android-developer-verification) de Google peut bloquer l'installation de l'APK en appuyant sur le fichier, selon votre pays. Des solutions gratuites sont expliquées sur cette page.
```

(aaps-builder-google-drive)=

## Step 6 (optional) – Also save the app in Google Drive

Vous pouvez aussi faire enregistrer chaque compilation dans votre Google Drive, dans le dossier `AAPS/<version>`. C'est facultatif : l'application est toujours disponible sur la page de compilation.

Il faut pour cela un secret de plus, `GDRIVE_OAUTH2`. Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. Appuyez sur **Open the secrets page**. Appuyez sur **Copy name**, puis collez-le dans le petit champ **Name** (le nom est `GDRIVE_OAUTH2`). Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

À partir de la compilation suivante, les APK sont aussi enregistrés dans Google Drive.

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

Google arrête l'accès si vous ne compilez pas pendant 6 mois, ou si vous changez votre mot de passe Google. La compilation vous le signale alors : refaites ces étapes. Voir [Jeton d'actualisation Google expiré](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Mise à jour d'AAPS

Votre dépôt ne compile jamais rien tout seul : c'est vous qui décidez quand compiler, quelle version et quelle variante. Quand une nouvelle version d'AAPS est publiée :

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). Gardez `latest`, ou tapez le numéro de version.
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## Dépannage

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **La compilation s'arrête avec "This repository is PUBLIC"** : dans votre dépôt, ouvrez **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**, puis compilez de nouveau.
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **"The secret is too short"**, **"The secret is not a valid code"** ou **"The secret does not contain a keystore"** : un mauvais texte a été collé dans le secret, souvent le mot `KEYSTORE_SET` lui-même, ou seulement une partie du code. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Version … does not exist"** : la version que vous avez tapée n'est pas une version publiée d'AAPS. Utilisez `latest`, ou vérifiez le numéro de version.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **"Page not found" (404) quand la page de configuration ouvre GitHub** : connectez-vous à github.com dans le même navigateur (GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté). Si vous êtes connecté, le nom d'utilisateur ou le nom du dépôt à l'étape 1 de la page de configuration ne correspond pas à votre dépôt. Tapez les noms exacts.
- **"No GitHub user with this name"** à l'étape 1 : tapez votre nom d'utilisateur GitHub, tel qu'il apparaît dans votre profil GitHub, pas votre adresse e-mail.
- **Pas de lien Download, ou l'application GitHub s'est ouverte** : l'application GitHub ne peut pas télécharger les compilations. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Pour que les liens GitHub ne s'ouvrent plus dans l'application : **Paramètres** Android (Settings) → **Applications** (Apps) → **GitHub** → **Ouvrir par défaut** (Open by default) → désactivez **Ouvrir les liens compatibles** (Open supported links).
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
