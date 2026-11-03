(aaps-ci-troubleshooting)=

# Browser build: troubleshooting

```{note}
This page collects troubleshooting tips for the [Browser build](../SettingUpAaps/BrowserBuild.md).

Usi **AAPS Builder**? Start with its own [troubleshooting section](#aaps-builder-troubleshooting). The Google Drive sections below also apply to it.
```

## AAPS-CI Troubleshooting

(aaps-ci-read-the-logs)=
### First: find out what went wrong

Quando una build fallisce, GitHub conserva un log di ogni passo. Il log ti dice quale passo è fallito e perché. Read it before you try anything else: the error message is what you look for on this page, and what helpers will ask for.

1. In your GitHub copy of AndroidAPS, open **Actions**. Una build fallita ha una croce rossa. Tocca il suo nome.

   ![Failed run in the Actions list](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. The run summary shows **Failure** and, below, the job that failed (**Build AAPS**, with a red cross).

   ![Riepilogo dell'esecuzione](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Scroll down to **Annotations** and tap the red **Build AAPS** line.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Si apre il job. Steps with a grey tick worked. Il passo con la croce rossa è quello fallito: GitHub lo apre per te. The steps after it were skipped (grey circle).

   ![Passi del job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Leggi le righe subito sopra `Error: Process completed with exit code 1.`: spiegano il problema. In this example, the step **Retrieving Google Drive access token** failed with `invalid_grant` and `Token has been expired or revoked.`, see [Google Refresh Token Expired](#aaps-ci-google-token-expired).

   ![Errore nel log](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Chiedi aiuto? Share the name of the failed step and the error lines (a screenshot like the one above is fine). Non condividere mai il contenuto dei tuoi secret.
```

(aaps-ci-update-secret)=
#### Aggiornare un secret

Many fixes mean replacing the value of a secret. In your GitHub copy of AndroidAPS, go to **Settings** → **Secrets and variables** → **Actions** and tap the pencil next to the secret.

![Secrets list](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Inserisci o incolla il nuovo valore e tocca **Update secret**. GitHub non mostra mai il vecchio valore: il campo è sempre vuoto.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Run the build again after a fix

Once you have fixed the cause, you do not need to start from scratch: open the failed run, tap **...** (top right), then **Re-run failed jobs**.

![Menu Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Tocca **Re-run jobs**. Puoi anche avviare una nuova build da **Run workflow**, come al solito.

![Finestra Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Pagina web aaps-ci-preparation
  - The preparation page is displayed by a temporary local server (for example Simple Web Server on a computer), which also receives the Google refresh token.
  - Se vedi la schermata qui sotto, il server locale si è fermato o non è raggiungibile.
  - Close the preparation page, check that the local server is running, then reopen aaps-ci-preparation.html the same way as in Step 2 and complete the remaining steps. This is needed in particular when creating the initial Google connection during setup.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google Refresh Token Expired
  - Google OAuth2 refresh tokens will expire if not used for 6 months, and may also become invalid under other conditions (e.g., you have changed your Google account password, or manually revoked access). For more details, see the [Google OAuth2 documentation](https://developers.google.com/identity/protocols/oauth2).
  - In the [build log](#aaps-ci-read-the-logs), the step **Retrieving Google Drive access token** fails with `invalid_grant` and `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - If your build fails due to an expired or revoked Google refresh token, you will need to redo the [Google Drive Auth](#aaps-ci-google-drive-auth) steps to obtain a new `GDRIVE_OAUTH2` token, [update the secret](#aaps-ci-update-secret) in your GitHub repository, then [re-run the build](#aaps-ci-rerun).
  - If the authorization fails again, or Google does not ask for your consent anymore, remove the existing AAPS access from your Google Account first, see [below](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Remove AAPS Access From Your Google Account And Restart The Authorization
  - If the Google Drive authorization keeps failing, or you want to start again from a clean state, first remove the access you previously gave to AAPS, then redo the authorization.
  - On your phone, open [https://myaccount.google.com](https://myaccount.google.com), tap **Security**, scroll down to **Your connections to third-party apps & services** and open the list of linked apps. You can also go directly to [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Tap **AAPS** in the list.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - La pagina mostra l'accesso che hai dato ad AAPS (i file di Google Drive usati con l'app). Tap **Delete all** to remove the connection, or tap **See details** to review it first.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - On the details page, tap **Remove all access**.

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Tap **Confirm**.

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google conferma che AAPS non ha più accesso. AAPS no longer appears in the list of linked apps.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Now restart the authorization cleanly: close **both** the preparation page and the file manager app, reopen aaps-ci-preparation.html from the file manager and redo the [Google Drive Auth](#aaps-ci-google-drive-auth) steps. Google will ask you to grant access again and the page will provide a new `GDRIVE_OAUTH2` token.
  - [Update the `GDRIVE_OAUTH2` secret](#aaps-ci-update-secret) in your GitHub repository with the new token, then [re-run the build](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disattivare i software che possono disturbare la verifica OAuth
  - Prima di provare a ottenere la chiave OAuth, disattiva sul telefono ogni VPN o app di sicurezza (firewall, antimalware, ...).

(aaps-ci-actions-permission)=
### Check GitHub Actions Permission Settings
  - Make sure GitHub Actions policies are set to “Allow all actions and reusable workflows” (Settings → Actions → General). Se lo cambi, premi **Save** sotto le opzioni.

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
  - In the [build log](#aaps-ci-read-the-logs), the step **Validating keystore, alias and password** fails with `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, followed by `Keystore was tampered with, or password was incorrect`. The build stops there: the keystore and passwords are checked before AAPS is built.

  ![Wrong keystore password in the build log](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - The build workflow keeps every character of your passwords intact. Enter `KEYSTORE_PASSWORD` and `KEY_PASSWORD` exactly as they are, without adding a backslash or any other escape character. If you added backslashes, [update the secrets](#aaps-ci-update-secret) with the password exactly as it is. The example below is wrong: the password is `Example2026`, the backslash was added.

  ![Password entered with an added backslash](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - If the build still fails when signing the APK although your password is correct, and the password contains `$`, a backtick, `"` or `\`, the workflow file in your fork is older than September 2026 and still parses these characters. [Sync your fork](#Update-to-new-version-update-your-repo) with the latest dev, then re-run the build workflow.
  - The vertical bar `|` is a special case. The preparation page of [Option 1](#aaps-ci-option1) combines the keystore, passwords and alias into one `KEYSTORE_SET` secret separated by `|`, and the workflow splits it on that character. La password generata dalla pagina di preparazione contiene solo lettere e cifre, quindi con l'Opzione 1 questo non può succedere. Può succedere solo se hai creato tu un secret `KEYSTORE_SET` con una password che contiene `|`. In that case, delete `KEYSTORE_SET` and enter the separate secrets of [Option 2](#aaps-ci-option2) instead.
