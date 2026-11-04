(aaps-ci-troubleshooting)=

# Construirea în browser: depanare

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

- **"No GitHub user with this name"** in step 1: type your GitHub username, as shown in your GitHub profile, not your e-mail.
- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.

### Step 3: the secret

(aaps-builder-ts-404)=

#### "Page not found" (404)

![GitHub 404](../images/Building-the-App/CI/AapsBuilder79_404.png)

- **"Page not found" (404) when the setup page opens GitHub**: log in to github.com in the same browser (GitHub shows 404 for private repositories when you are not logged in). If you are logged in, the username or repository name in step 1 of the setup page does not match your repository. Type the exact names.

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

- **„Secret KEYSTORE_SET is missing”** (lipsește secretul KEYSTORE_SET): faceți pasul 3 al paginii de configurare.
- **The build stops with "This repository is PUBLIC"**: in your repository, open **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**, then build again.
- **"Version … does not exist"**: only released versions of **AAPS** can be built, the ones on the [tags page](https://github.com/nightscout/AndroidAPS/tags) of nightscout/AndroidAPS, such as `3.3.2.0`. A branch name such as `dev` doesn't work. Use `latest`, or type a tag exactly as listed.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **"The secret is too short"**, **"The secret is not a valid code"** or **"The secret does not contain a keystore"**: the wrong text was pasted into the secret, often the word `KEYSTORE_SET` itself, or only part of the code. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **„Keystore, password or alias is wrong”** (keystore-ul, parola sau aliasul sunt greșite): verificați parola și aliasul keystore-ului, apoi refaceți pașii 2 și 3 ai paginii de configurare.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.
- **Another error**: [read the build log](#aaps-ci-read-the-logs), then [run the build again](#aaps-ci-rerun). If it fails again the same way, ask for help with the name of the failed step and the error lines. Never share the content of your secrets.

### Step 5: the app

- **No Download link, or the GitHub app opened**: the GitHub app cannot download builds. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). To stop GitHub links opening in the app: Android **Settings** → **Apps** → **GitHub** → **Open by default** → turn off **Open supported links**.

## Depanare AAPS-CI

(aaps-ci-read-the-logs)=
### First: find out what went wrong

When a build fails, GitHub keeps a log of every step. Jurnalul vă arată ce pas a eșuat și de ce. Read it before you try anything else: the error message is what you look for on this page, and what helpers will ask for.

1. In your GitHub copy of AndroidAPS, open **Actions**. O construire eșuată are o cruce roșie. Tap its name.

   ![Failed run in the Actions list](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. The run summary shows **Failure** and, below, the job that failed (**Build AAPS**, with a red cross).

   ![Run summary](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Scroll down to **Annotations** and tap the red **Build AAPS** line.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Jobul se deschide. Pașii cu o bifă gri au reușit. The step with the red cross is the one that failed: GitHub opens it for you. The steps after it were skipped (grey circle).

   ![Pașii jobului](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Read the lines just above `Error: Process completed with exit code 1.`: they explain the problem. In this example, the step **Retrieving Google Drive access token** failed with `invalid_grant` and `Token has been expired or revoked.`, see [Google Refresh Token Expired](#aaps-ci-google-token-expired).

   ![Eroarea din jurnal](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Cereți ajutor? Share the name of the failed step and the error lines (a screenshot like the one above is fine). Never share the content of your secrets.
```

(aaps-ci-update-secret)=
#### Update a secret

Many fixes mean replacing the value of a secret. In your GitHub copy of AndroidAPS, go to **Settings** → **Secrets and variables** → **Actions** and tap the pencil next to the secret.

![Lista de secrete](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Enter or paste the new value and tap **Update secret**. GitHub nu arată niciodată valoarea veche: câmpul este întotdeauna gol.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Run the build again after a fix

Once you have fixed the cause, you do not need to start from scratch: open the failed run, tap **...** (top right), then **Re-run failed jobs**.

![Meniul Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Tap **Re-run jobs**. Puteți porni și o construire nouă din **Run workflow**, ca de obicei.

![Re-run dialog](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Pagina web aaps-ci-preparation
  - Pagina de pregătire este afișată de un server local temporar (de exemplu Simple Web Server pe un computer), care primește și tokenul de reîmprospătare Google.
  - Dacă vedeți ecranul de mai jos, serverul local s-a oprit sau nu poate fi accesat.
  - Close the preparation page, check that the local server is running, then reopen aaps-ci-preparation.html the same way as in Step 2 and complete the remaining steps. This is needed in particular when creating the initial Google connection during setup.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Tokenul de reîmprospătare Google a expirat
  - Google OAuth2 refresh tokens will expire if not used for 6 months, and may also become invalid under other conditions (e.g., you have changed your Google account password, or manually revoked access). For more details, see the [Google OAuth2 documentation](https://developers.google.com/identity/protocols/oauth2).
  - În [jurnalul de construire](#aaps-ci-read-the-logs), pasul **Retrieving Google Drive access token** eșuează cu `invalid_grant` și `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - If your build fails due to an expired or revoked Google refresh token, you will need to redo the [Google Drive Auth](#aaps-ci-google-drive-auth) steps to obtain a new `GDRIVE_OAUTH2` token, [update the secret](#aaps-ci-update-secret) in your GitHub repository, then [re-run the build](#aaps-ci-rerun).
  - If the authorization fails again, or Google does not ask for your consent anymore, remove the existing AAPS access from your Google Account first, see [below](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Remove AAPS Access From Your Google Account And Restart The Authorization
  - If the Google Drive authorization keeps failing, or you want to start again from a clean state, first remove the access you previously gave to AAPS, then redo the authorization.
  - On your phone, open [https://myaccount.google.com](https://myaccount.google.com), tap **Security**, scroll down to **Your connections to third-party apps & services** and open the list of linked apps. Puteți merge și direct la [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Tap **AAPS** in the list.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - The page shows the access you gave to AAPS (the Google Drive files used with the app). Tap **Delete all** to remove the connection, or tap **See details** to review it first.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - On the details page, tap **Remove all access**.

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Tap **Confirm**.

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google confirmă că AAPS nu mai are acces. AAPS nu mai apare în lista aplicațiilor conectate.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Now restart the authorization cleanly: close **both** the preparation page and the file manager app, reopen aaps-ci-preparation.html from the file manager and redo the [Google Drive Auth](#aaps-ci-google-drive-auth) steps. Google will ask you to grant access again and the page will provide a new `GDRIVE_OAUTH2` token.
  - [Update the `GDRIVE_OAUTH2` secret](#aaps-ci-update-secret) in your GitHub repository with the new token, then [re-run the build](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Dezactivați programele care pot afecta verificarea OAuth
  - Dezactivați orice VPN sau aplicație de securitate (firewall, antimalware,...) de pe telefon înainte de a încerca să obțineți cheia OAuth.

(aaps-ci-actions-permission)=
### Verificați setările de permisiuni GitHub Actions
  - Make sure GitHub Actions policies are set to “Allow all actions and reusable workflows” (Settings → Actions → General). If you change it, press **Save** below the options.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Check GitHub Workflow Permissions Settings
  - If the build fails immediately with an "Invalid workflow file" error similar to the one below, the default workflow permissions of your repository are too restrictive:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Make sure Workflow permissions are set to “Read and write permissions” (Settings → Actions → General → Workflow permissions), then save and re-run the build workflow.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Build Fails Checking The Keystore Password
  - În [jurnalul de construire](#aaps-ci-read-the-logs), pasul **Validating keystore, alias and password** eșuează cu `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, urmat de `Keystore was tampered with, or password was incorrect`. Construirea se oprește aici: keystore-ul și parolele sunt verificate înainte de construirea AAPS.

  ![Wrong keystore password in the build log](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - The build workflow keeps every character of your passwords intact. Enter `KEYSTORE_PASSWORD` and `KEY_PASSWORD` exactly as they are, without adding a backslash or any other escape character. If you added backslashes, [update the secrets](#aaps-ci-update-secret) with the password exactly as it is. The example below is wrong: the password is `Example2026`, the backslash was added.

  ![Parolă introdusă cu o bară oblică inversă adăugată](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - If the build still fails when signing the APK although your password is correct, and the password contains `$`, a backtick, `"` or `\`, the workflow file in your fork is older than September 2026 and still parses these characters. [Sync your fork](#Update-to-new-version-update-your-repo) with the latest dev, then re-run the build workflow.
  - Bara verticală `|` este un caz special. The preparation page of [Option 1](#aaps-ci-option1) combines the keystore, passwords and alias into one `KEYSTORE_SET` secret separated by `|`, and the workflow splits it on that character. Parola generată de pagina de pregătire conține doar litere și cifre, deci acest lucru nu se poate întâmpla cu Opțiunea 1. It can only happen if you assembled a `KEYSTORE_SET` secret yourself from a password containing `|`. În acest caz, ștergeți `KEYSTORE_SET` și introduceți în schimb secretele separate de la [Opțiunea 2](#aaps-ci-option2).
