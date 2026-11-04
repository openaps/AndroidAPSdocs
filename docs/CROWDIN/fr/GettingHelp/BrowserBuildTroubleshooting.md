(aaps-ci-troubleshooting)=

# Dépannage de la compilation dans le navigateur

```{note}
This page collects troubleshooting tips for the [Browser build](../SettingUpAaps/BrowserBuild.md).
```

(aaps-builder-troubleshooting)=

## AAPS Builder

### Step 1: the repository

(aaps-builder-ts-repo-exists)=

#### "my-aaps already exists in this account"

![Repository already exists](../images/Building-the-App/CI/AapsBuilder70_RepoExists.png)

You already have this repository, for example from an earlier attempt. Close the GitHub tab, keep that name in step 1 of the setup page and go on. If you already did steps 2 and 3 for it, your key is still in it: continue with [step 4](#aaps-builder-step4). If it was made with an earlier version of the setup page, update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). You prefer a fresh start? Type another name, for example `my-aaps-2`, and use the same keystore in step 2.

(aaps-builder-ts-user-not-found)=

#### "No GitHub user with this name"

![No GitHub user](../images/Building-the-App/CI/AapsBuilder80_UserNotFound.png)

- **"No GitHub user with this name"** à l'étape 1 : tapez votre nom d'utilisateur GitHub, tel qu'il apparaît dans votre profil GitHub, pas votre adresse e-mail.
- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.

### Step 3: the secret

(aaps-builder-ts-404)=

#### "Page not found" (404)

![GitHub 404](../images/Building-the-App/CI/AapsBuilder79_404.png)

- **"Page not found" (404) quand la page de configuration ouvre GitHub** : connectez-vous à github.com dans le même navigateur (GitHub affiche 404 pour les dépôts privés quand vous n'êtes pas connecté). Si vous êtes connecté, le nom d'utilisateur ou le nom du dépôt à l'étape 1 de la page de configuration ne correspond pas à votre dépôt. Tapez les noms exacts.

### Step 4: the build

(aaps-builder-ts-workflow-not-found)=

#### "This workflow does not exist"

![This workflow does not exist](../images/Building-the-App/CI/AapsBuilder71_WorkflowNotFound.png)

Right after the repository is created, GitHub may not have read its workflow file yet: **Build AAPS** is missing from the **Actions** tab, and there is no **Run workflow** button. Any small change to the file makes GitHub read it:

1. In your repository, open **Code**, then the folder `.github`, then `workflows`, then the file `build.yml`.
2. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).

   ![File menu](../images/Building-the-App/CI/AapsBuilder72_FileMenu.png)

3. Tap at the very end of the text and add an empty line (Enter). Tap **Commit changes…** at the top.

   ![Editor](../images/Building-the-App/CI/AapsBuilder73_Editor.png)

4. Tap **Commit changes** again.

   ![Commit changes](../images/Building-the-App/CI/AapsBuilder74_CommitDialog.png)

5. Open the **Actions** tab again: **Build AAPS** is now in the list of workflows (on a phone, the list opens with the icon at the left of **All workflows**). Tap it, then **Run workflow**.

   ![List of workflows](../images/Building-the-App/CI/AapsBuilder75_WorkflowsSidebar.png)

(aaps-builder-ts-build-failed)=

#### The build failed (red cross)

1. On the setup page, tap **Open my builds** and tap the build with the red cross.

   ![Failed build](../images/Building-the-App/CI/AapsBuilder76_RunsList.png)

2. The page of the build shows **Failure**, and which part failed: **AAPS / Check** (the repository, the secret, the version or the variant: nothing was built) or **AAPS / Build AAPS**.

   ![Build page: Failure](../images/Building-the-App/CI/AapsBuilder77_RunFailed.png)

3. Scroll down to **Annotations**, with your finger on the text, not on the diagram. The red lines explain the problem: tap **Show more** to read the whole message, then find it below.

   ![Annotations](../images/Building-the-App/CI/AapsBuilder78_Annotations.png)

- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **La compilation s'arrête avec "This repository is PUBLIC"** : dans votre dépôt, ouvrez **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**, puis compilez de nouveau.
- **"Version … does not exist"**: only released versions of **AAPS** can be built, the ones on the [tags page](https://github.com/nightscout/AndroidAPS/tags) of nightscout/AndroidAPS, such as `3.3.2.0`. A branch name such as `dev` doesn't work. Use `latest`, or type a tag exactly as listed.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **"The secret is too short"**, **"The secret is not a valid code"** ou **"The secret does not contain a keystore"** : un mauvais texte a été collé dans le secret, souvent le mot `KEYSTORE_SET` lui-même, ou seulement une partie du code. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.
- **Another error**: [read the build log](#aaps-ci-read-the-logs), then [run the build again](#aaps-ci-rerun). If it fails again the same way, ask for help with the name of the failed step and the error lines. Ne partagez jamais le contenu de vos secrets.

### Step 5: the app

- **Pas de lien Download, ou l'application GitHub s'est ouverte** : l'application GitHub ne peut pas télécharger les compilations. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Pour que les liens GitHub ne s'ouvrent plus dans l'application : **Paramètres** Android (Settings) → **Applications** (Apps) → **GitHub** → **Ouvrir par défaut** (Open by default) → désactivez **Ouvrir les liens compatibles** (Open supported links).

## Dépannage d'AAPS-CI

(aaps-ci-read-the-logs)=
### D'abord : trouver ce qui ne va pas

Quand une compilation échoue, GitHub garde un log de chaque étape. Le log vous indique quelle étape a échoué et pourquoi. Lisez-le avant d'essayer autre chose : le message d'erreur est ce que vous cherchez sur cette page, et ce que les personnes qui vous aident vous demanderont.

1. Dans votre copie GitHub d'AndroidAPS, ouvrez **Actions**. Une compilation échouée a une croix rouge. Appuyez sur son nom.

   ![Exécution échouée dans la liste Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. Le résumé de l'exécution affiche **Failure** et, en dessous, le job qui a échoué (**Build AAPS**, avec une croix rouge).

   ![Résumé de l'exécution](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Faites défiler jusqu'à **Annotations** et appuyez sur la ligne rouge **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Le job s'ouvre. Les étapes avec une coche grise ont fonctionné. L'étape avec la croix rouge est celle qui a échoué : GitHub l'ouvre pour vous. Les étapes suivantes ont été ignorées (cercle gris).

   ![Étapes du job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Lisez les lignes juste au-dessus de `Error: Process completed with exit code 1.` : elles expliquent le problème. Dans cet exemple, l'étape **Retrieving Google Drive access token** a échoué avec `invalid_grant` et `Token has been expired or revoked.`, voir [Jeton d'actualisation Google expiré](#aaps-ci-google-token-expired).

   ![Erreur dans le log](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Vous demandez de l'aide ? Partagez le nom de l'étape échouée et les lignes d'erreur (une capture d'écran comme celle ci-dessus convient). Ne partagez jamais le contenu de vos secrets.
```

(aaps-ci-update-secret)=
#### Mettre à jour un secret

Beaucoup de corrections consistent à remplacer la valeur d'un secret. Dans votre copie GitHub d'AndroidAPS, allez dans **Settings** → **Secrets and variables** → **Actions** et appuyez sur le crayon à côté du secret.

![Liste des secrets](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Saisissez ou collez la nouvelle valeur et appuyez sur **Update secret**. GitHub n'affiche jamais l'ancienne valeur : le champ est toujours vide.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Relancer la compilation après une correction

Une fois la cause corrigée, vous n'avez pas besoin de tout recommencer : ouvrez l'exécution échouée, appuyez sur **...** (en haut à droite), puis sur **Re-run failed jobs**.

![Menu Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Appuyez sur **Re-run jobs**. Vous pouvez aussi lancer une nouvelle compilation avec **Run workflow**, comme d'habitude.

![Fenêtre Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Page web aaps-ci-preparation
  - La page de préparation est affichée par un serveur local temporaire (par exemple Simple Web Server sur un ordinateur), qui reçoit aussi le jeton d'actualisation Google.
  - Si vous voyez l'écran ci-dessous, le serveur local s'est arrêté ou n'est pas joignable.
  - Fermez la page de préparation, vérifiez que le serveur local fonctionne, puis rouvrez aaps-ci-preparation.html de la même façon qu'à l'étape 2 et terminez les étapes restantes. C'est nécessaire en particulier lors de la création de la première connexion Google pendant la configuration.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Jeton d'actualisation Google expiré
  - Les jetons d'actualisation Google OAuth2 expirent s'ils ne sont pas utilisés pendant 6 mois, et peuvent aussi devenir invalides dans d'autres cas (par ex. si vous avez changé le mot de passe de votre compte Google, ou retiré l'accès manuellement). Pour plus de détails, consultez la [documentation Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - Dans le [log de compilation](#aaps-ci-read-the-logs), l'étape **Retrieving Google Drive access token** échoue avec `invalid_grant` et `Token has been expired or revoked.` :

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Si votre compilation échoue à cause d'un jeton d'actualisation Google expiré ou retiré, vous devez refaire les étapes [Google Drive Auth](#aaps-ci-google-drive-auth) pour obtenir un nouveau jeton `GDRIVE_OAUTH2`, [mettre à jour le secret](#aaps-ci-update-secret) dans votre dépôt GitHub, puis [relancer la compilation](#aaps-ci-rerun).
  - Si l'autorisation échoue encore, ou si Google ne vous demande plus votre accord, retirez d'abord l'accès AAPS existant de votre compte Google, voir [ci-dessous](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Retirer l'accès d'AAPS à votre compte Google et recommencer l'autorisation
  - Si l'autorisation Google Drive échoue toujours, ou si vous voulez repartir de zéro, retirez d'abord l'accès que vous avez donné à AAPS, puis refaites l'autorisation.
  - Sur votre téléphone, ouvrez [https://myaccount.google.com](https://myaccount.google.com), appuyez sur **Sécurité** (Security), faites défiler jusqu'à **Vos connexions à des applications et services tiers** (Your connections to third-party apps & services) et ouvrez la liste des applications associées. Vous pouvez aussi aller directement sur [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Appuyez sur **AAPS** dans la liste.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - La page affiche l'accès que vous avez donné à AAPS (les fichiers Google Drive utilisés avec l'application). Appuyez sur **Tout supprimer** (Delete all) pour supprimer la connexion, ou sur **Voir les détails** (See details) pour la vérifier d'abord.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Sur la page des détails, appuyez sur **Supprimer tous les accès** (Remove all access).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Appuyez sur **Confirmer** (Confirm).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google confirme qu'AAPS n'a plus accès. AAPS n'apparaît plus dans la liste des applications associées.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Recommencez maintenant l'autorisation proprement : fermez **à la fois** la page de préparation et l'application de gestion de fichiers, rouvrez aaps-ci-preparation.html depuis le gestionnaire de fichiers et refaites les étapes [Google Drive Auth](#aaps-ci-google-drive-auth). Google vous demandera de nouveau d'accorder l'accès et la page fournira un nouveau jeton `GDRIVE_OAUTH2`.
  - [Mettez à jour le secret `GDRIVE_OAUTH2`](#aaps-ci-update-secret) dans votre dépôt GitHub avec le nouveau jeton, puis [relancez la compilation](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### Vérifier les paramètres d'autorisation de GitHub Actions
  - Vérifiez que les règles de GitHub Actions sont réglées sur “Allow all actions and reusable workflows” (Settings → Actions → General). Si vous le modifiez, appuyez sur **Save** sous les options.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Vérifier les paramètres Workflow permissions de GitHub
  - Si la compilation échoue tout de suite avec une erreur "Invalid workflow file" semblable à celle ci-dessous, les autorisations par défaut des workflows de votre dépôt sont trop restrictives :

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Vérifiez que Workflow permissions est réglé sur “Read and write permissions” (Settings → Actions → General → Workflow permissions), puis enregistrez et relancez le workflow de compilation.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### La compilation échoue à la vérification du mot de passe du keystore
  - Dans le [log de compilation](#aaps-ci-read-the-logs), l'étape **Validating keystore, alias and password** échoue avec `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, suivi de `Keystore was tampered with, or password was incorrect`. La compilation s'arrête là : le keystore et les mots de passe sont vérifiés avant la compilation d'AAPS.

  ![Mauvais mot de passe du keystore dans le log de compilation](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - Le workflow de compilation garde chaque caractère de vos mots de passe intact. Saisissez `KEYSTORE_PASSWORD` et `KEY_PASSWORD` exactement tels quels, sans ajouter de barre oblique inverse (backslash) ni aucun autre caractère d'échappement. Si vous avez ajouté des barres obliques inverses, [mettez à jour les secrets](#aaps-ci-update-secret) avec le mot de passe exactement tel quel. L'exemple ci-dessous est faux : le mot de passe est `Example2026`, la barre oblique inverse a été ajoutée.

  ![Mot de passe saisi avec une barre oblique inverse en trop](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Si la compilation échoue encore à la signature de l'APK alors que votre mot de passe est correct, et que le mot de passe contient `$`, un accent grave (backtick), `"` ou `\`, le fichier workflow de votre fork date d'avant septembre 2026 et interprète encore ces caractères. [Synchronisez votre fork](#Update-to-new-version-update-your-repo) avec la dernière version dev, puis relancez le workflow de compilation.
  - La barre verticale `|` est un cas particulier. La page de préparation de l'[Option 1](#aaps-ci-option1) regroupe le keystore, les mots de passe et l'alias dans un seul secret `KEYSTORE_SET`, séparés par `|`, et le workflow les sépare sur ce caractère. Le mot de passe créé par la page de préparation ne contient que des lettres et des chiffres, donc cela ne peut pas arriver avec l'Option 1. Cela ne peut arriver que si vous avez assemblé vous-même un secret `KEYSTORE_SET` avec un mot de passe contenant `|`. Dans ce cas, supprimez `KEYSTORE_SET` et saisissez plutôt les secrets séparés de l'[Option 2](#aaps-ci-option2).
