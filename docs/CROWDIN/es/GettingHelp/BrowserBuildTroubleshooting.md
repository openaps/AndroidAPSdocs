(aaps-ci-troubleshooting)=

# Compilación en el navegador: solución de problemas

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

- **«No GitHub user with this name»** en el paso 1: escribe tu nombre de usuario de GitHub, tal como aparece en tu perfil de GitHub, no tu correo electrónico.
- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.

### Step 3: the secret

(aaps-builder-ts-404)=

#### "Page not found" (404)

![GitHub 404](../images/Building-the-App/CI/AapsBuilder79_404.png)

- **«Page not found» (404) cuando la página de configuración abre GitHub**: inicia sesión en github.com en el mismo navegador (GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión). Si has iniciado sesión, el nombre de usuario o el nombre del repositorio del paso 1 de la página de configuración no coincide con tu repositorio. Escribe los nombres exactos.

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
- **La compilación se detiene con «This repository is PUBLIC»**: en tu repositorio, abre **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** y luego compila otra vez.
- **"Version … does not exist"**: only released versions of **AAPS** can be built, the ones on the [tags page](https://github.com/nightscout/AndroidAPS/tags) of nightscout/AndroidAPS, such as `3.3.2.0`. A branch name such as `dev` doesn't work. Use `latest`, or type a tag exactly as listed.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **«The secret is too short»**, **«The secret is not a valid code»** o **«The secret does not contain a keystore»**: se pegó un texto equivocado en el secreto, a menudo la propia palabra `KEYSTORE_SET`, o solo una parte del código. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.
- **"Process completed with exit code 1" and a red line with only a link to `services.gradle.org`**, after less than a minute: the build could not download Gradle, a tool it needs to build the app. The Gradle website was not responding. Your repository and your settings are fine. Wait half an hour, then [run the build again](#aaps-ci-rerun).
- **Another error**: [read the build log](#aaps-ci-read-the-logs), then [run the build again](#aaps-ci-rerun). If it fails again the same way, ask for help with the name of the failed step and the error lines. Nunca compartas el contenido de tus secretos.

### Step 5: the app

- **No hay enlace Download, o se abrió la app de GitHub**: la app de GitHub no puede descargar compilaciones. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Para que los enlaces de GitHub no se abran en la app: **Ajustes** de Android → **Aplicaciones** → **GitHub** → **Abrir de forma predeterminada** → desactiva **Abrir enlaces compatibles**.

## Solución de problemas de AAPS-CI

(aaps-ci-read-the-logs)=
### Primero: averigua qué ha fallado

Cuando una compilación falla, GitHub guarda un log de cada paso. El log te dice qué paso ha fallado y por qué. Léelo antes de probar otra cosa: el mensaje de error es lo que tienes que buscar en esta página, y lo que te pedirán quienes te ayuden.

1. En tu copia de AndroidAPS en GitHub, abre **Actions**. Una compilación fallida tiene una cruz roja. Toca su nombre.

   ![Ejecución fallida en la lista de Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. El resumen de la ejecución muestra **Failure** y, debajo, el job que ha fallado (**Build AAPS**, con una cruz roja).

   ![Resumen de la ejecución](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Desplázate hacia abajo hasta **Annotations** y toca la línea roja **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. Se abre el job. Los pasos con una marca gris han funcionado. El paso con la cruz roja es el que ha fallado: GitHub lo abre por ti. Los pasos siguientes se han saltado (círculo gris).

   ![Pasos del job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Lee las líneas justo encima de `Error: Process completed with exit code 1.`: explican el problema. En este ejemplo, el paso **Retrieving Google Drive access token** ha fallado con `invalid_grant` y `Token has been expired or revoked.`, ver [El token de actualización de Google ha caducado](#aaps-ci-google-token-expired).

   ![Error en el log](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
¿Vas a pedir ayuda? Comparte el nombre del paso que ha fallado y las líneas del error (una captura de pantalla como la de arriba está bien). Nunca compartas el contenido de tus secretos.
```

(aaps-ci-update-secret)=
#### Actualizar un secreto

Muchas soluciones consisten en cambiar el valor de un secreto. En tu copia de AndroidAPS en GitHub, ve a **Settings** → **Secrets and variables** → **Actions** y toca el lápiz junto al secreto.

![Lista de secretos](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Introduce o pega el nuevo valor y toca **Update secret**. GitHub nunca muestra el valor antiguo: el campo siempre está vacío.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Ejecutar de nuevo la compilación después de una corrección

Cuando hayas corregido la causa, no tienes que empezar desde cero: abre la ejecución fallida, toca **...** (arriba a la derecha) y luego **Re-run failed jobs**.

![Menú Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Toca **Re-run jobs**. También puedes iniciar una nueva compilación desde **Run workflow**, como siempre.

![Diálogo Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Página web aaps-ci-preparation
  - La página de preparación la muestra un servidor local temporal (por ejemplo, Simple Web Server en un ordenador), que también recibe el token de actualización de Google.
  - Si ves la pantalla de abajo, el servidor local se ha detenido o no se puede alcanzar.
  - Cierra la página de preparación, comprueba que el servidor local está funcionando y luego vuelve a abrir aaps-ci-preparation.html de la misma forma que en el paso 2 y completa los pasos que faltan. Esto hace falta sobre todo al crear la primera conexión con Google durante la configuración.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### El token de actualización de Google ha caducado
  - Los tokens de actualización de Google OAuth2 caducan si no se usan durante 6 meses, y también pueden dejar de ser válidos en otros casos (por ejemplo, si has cambiado la contraseña de tu cuenta de Google o has quitado el acceso manualmente). Para más detalles, consulta la [documentación de Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - En el [log de compilación](#aaps-ci-read-the-logs), el paso **Retrieving Google Drive access token** falla con `invalid_grant` y `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Si tu compilación falla porque el token de actualización de Google ha caducado o se ha revocado, tienes que repetir los pasos de [autorización de Google Drive](#aaps-ci-google-drive-auth) para obtener un nuevo token `GDRIVE_OAUTH2`, [actualizar el secreto](#aaps-ci-update-secret) en tu repositorio de GitHub y luego [volver a ejecutar la compilación](#aaps-ci-rerun).
  - Si la autorización vuelve a fallar, o Google ya no te pide tu consentimiento, primero quita el acceso de AAPS de tu cuenta de Google, ver [abajo](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Quitar el acceso de AAPS de tu cuenta de Google y empezar de nuevo la autorización
  - Si la autorización de Google Drive sigue fallando, o quieres empezar de nuevo desde cero, primero quita el acceso que diste a AAPS y luego vuelve a hacer la autorización.
  - En tu teléfono, abre [https://myaccount.google.com](https://myaccount.google.com), toca **Security** (Seguridad), desplázate hacia abajo hasta **Your connections to third-party apps & services** (tus conexiones con aplicaciones y servicios de terceros) y abre la lista de apps vinculadas. También puedes ir directamente a [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Toca **AAPS** en la lista.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - La página muestra el acceso que diste a AAPS (los archivos de Google Drive que usa la app). Toca **Delete all** (eliminar todo) para quitar la conexión, o toca **See details** (ver detalles) para revisarla antes.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - En la página de detalles, toca **Remove all access** (quitar todo el acceso).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Toca **Confirm** (confirmar).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google confirma que AAPS ya no tiene acceso. AAPS ya no aparece en la lista de apps vinculadas.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Ahora empieza de nuevo la autorización desde cero: cierra **tanto** la página de preparación como la app de gestión de archivos, vuelve a abrir aaps-ci-preparation.html desde el gestor de archivos y repite los pasos de [autorización de Google Drive](#aaps-ci-google-drive-auth). Google te pedirá que vuelvas a dar acceso y la página te dará un nuevo token `GDRIVE_OAUTH2`.
  - [Actualiza el secreto `GDRIVE_OAUTH2`](#aaps-ci-update-secret) en tu repositorio de GitHub con el nuevo token y luego [vuelve a ejecutar la compilación](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### Comprobar los ajustes de permisos de GitHub Actions
  - Asegúrate de que las políticas de GitHub Actions están en «Allow all actions and reusable workflows» (Settings → Actions → General). Si lo cambias, pulsa **Save** debajo de las opciones.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Comprobar los ajustes de permisos de workflow de GitHub
  - Si la compilación falla enseguida con un error «Invalid workflow file» parecido al de abajo, los permisos de workflow por defecto de tu repositorio son demasiado restrictivos:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Asegúrate de que Workflow permissions está en «Read and write permissions» (Settings → Actions → General → Workflow permissions), luego guarda y vuelve a ejecutar el workflow de compilación.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### La compilación falla al comprobar la contraseña del almacén de claves
  - En el [log de compilación](#aaps-ci-read-the-logs), el paso **Validating keystore, alias and password** falla con `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, seguido de `Keystore was tampered with, or password was incorrect`. La compilación se detiene ahí: el almacén de claves y las contraseñas se comprueban antes de compilar AAPS.

  ![Contraseña del almacén de claves incorrecta en el log de compilación](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - El workflow de compilación conserva todos los caracteres de tus contraseñas sin cambios. Introduce `KEYSTORE_PASSWORD` y `KEY_PASSWORD` exactamente como son, sin añadir una barra invertida ni ningún otro carácter de escape. Si añadiste barras invertidas, [actualiza los secretos](#aaps-ci-update-secret) con la contraseña exactamente como es. El ejemplo de abajo está mal: la contraseña es `Example2026`, y se ha añadido la barra invertida.

  ![Contraseña introducida con una barra invertida añadida](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Si la compilación sigue fallando al firmar el APK aunque tu contraseña es correcta, y la contraseña contiene `$`, un acento grave (backtick), `"` o `\`, el archivo de workflow de tu fork es anterior a septiembre de 2026 y todavía interpreta estos caracteres. [Sincroniza tu fork](#Update-to-new-version-update-your-repo) con la última versión de dev y luego vuelve a ejecutar el workflow de compilación.
  - La barra vertical `|` es un caso especial. La página de preparación de la [Opción 1](#aaps-ci-option1) junta el almacén de claves, las contraseñas y el alias en un único secreto `KEYSTORE_SET` separado por `|`, y el workflow lo divide por ese carácter. La contraseña que genera la página de preparación solo tiene letras y números, así que esto no puede pasar con la Opción 1. Solo puede pasar si creaste tú mismo un secreto `KEYSTORE_SET` con una contraseña que contiene `|`. En ese caso, borra `KEYSTORE_SET` y, en su lugar, introduce los secretos separados de la [Opción 2](#aaps-ci-option2).
