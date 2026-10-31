(aaps-builder)=

# Compilación en el navegador con AAPS Builder

```{note}
Esta es la forma recomendada de compilar AAPS desde un **teléfono Android**. También funciona desde el navegador de cualquier ordenador. Para las otras formas de compilar desde un ordenador o un iPhone, consulta el resumen de la [Compilación en el navegador](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** compila la app AAPS por ti en GitHub, el sitio web gratuito para alojar código. No tienes que instalar nada en tu teléfono, ni abrir ningún archivo de preparación.

Una página de configuración en este sitio te guía paso a paso. La primera vez se tarda unos 10 minutos:

1. Crea un repositorio **privado** vacío en tu cuenta de GitHub: la página de configuración abre GitHub con todo ya rellenado, tú solo confirmas.
2. Añade el **workflow de compilación**, el archivo que le dice a GitHub cómo compilar AAPS.
3. Crea o sube tu **clave de firma** (el almacén de claves).
4. Da la clave a tu repositorio como un **secreto** de GitHub.
5. **Compila** la app. Cada compilación tarda de 15 a 30 minutos.
6. **Descarga e instala** la app en tu teléfono.

**No** necesitas hacer un fork de AndroidAPS: el código fuente de AAPS se descarga del repositorio oficial de AndroidAPS en cada compilación. **Tampoco** necesitas Google Drive: descargas la app directamente desde GitHub.

```{admonition} Where the code comes from
:class: note

La página de configuración y el workflow de compilación forman parte de esta documentación: se mantienen y se revisan junto con ella. El <a href="../_static/aaps-builder/aaps-builder-build.yml">workflow</a> que añades a tu repositorio es corto: ejecuta los [pasos de compilación](https://github.com/openaps/AndroidAPSdocs/blob/dev/.github/workflows/aaps-builder.yml) guardados en el repositorio de la documentación, fijados a una versión revisada. Puedes leer los dos antes de usarlos. Al compilar, el workflow solo descarga el código fuente oficial de AAPS y las herramientas de compilación de GitHub. Tu almacén de claves nunca sale de tu navegador ni de tu repositorio privado.
```

(aaps-builder-before-you-start)=

## Antes de empezar

Necesitarás:

- Una **cuenta de GitHub** (gratuita). Si no tienes una, créala primero en [github.com](https://github.com/signup).
- Un **navegador web**: Chrome en tu teléfono o cualquier navegador en un ordenador. Inicia sesión en github.com en ese navegador antes de empezar.
- **¿Tienes la app de GitHub en tu teléfono?** Puedes conservarla. Entonces algunos botones de la página de configuración abren la app en lugar de Chrome. La compilación funciona en la app, pero la app **no puede descargar** el AAPS terminado: el [paso 6](#aaps-builder-step6) muestra cómo pasar a Chrome para la descarga.
- Tu **almacén de claves actual** (archivo `.jks`), su contraseña y su alias, si ya compilaste AAPS antes y quieres actualizarlo sin reinstalar.

```{warning}
**Tu repositorio de compilación debe seguir siendo privado.** Todo lo que produce una compilación es visible para cualquiera que pueda ver el repositorio. La página de configuración crea un repositorio privado para ti. Nunca lo cambies a público.

Un repositorio privado recibe 2000 minutos gratuitos de GitHub Actions al mes, lo que basta para varias compilaciones.
```

```{warning}
**Clave nueva o clave existente: esto decide si puedes actualizar AAPS.**

- **Ya tienes AAPS en tu teléfono, compilado con un almacén de claves que todavía tienes**: elige **I already have a keystore** en la página de configuración y súbelo. Tu próxima compilación actualizará AAPS sin reinstalarlo. ¿Compilaste AAPS con la compilación en el navegador anterior (tu propio fork)? Tu almacén de claves está en tu fork: [primero obtén una copia](#aaps-builder-from-fork).
- **Compilas AAPS por primera vez, o perdiste tu almacén de claves o su contraseña**: elige **Create a new key**. Una app firmada con una clave nueva **no puede actualizar** un AAPS firmado con otra clave. Debes exportar tus ajustes, copiar el archivo fuera de tu teléfono, desinstalar el AAPS antiguo, instalar el nuevo y luego importar tus ajustes: consulta [Reinstalar AAPS con un nuevo almacén de claves](#reinstall-aaps).

Después, usa siempre la misma clave. Cuando crees una clave nueva, descarga la copia de seguridad que ofrece la página y guárdala con su contraseña y su alias (`key0`) en un lugar seguro, fuera de tu teléfono.
```

(aaps-builder-from-fork)=

## Si vienes de la compilación en el navegador anterior (fork)

Sáltate esta sección si nunca compilaste AAPS con el método anterior de compilación en el navegador (tu propia copia, o fork, de AndroidAPS en GitHub, con el archivo de preparación y Google Drive).

Tu almacén de claves está guardado como secretos en tu fork. GitHub nunca vuelve a mostrar un secreto, así que no puedes copiarlo a tu nuevo repositorio. Primero obtén una copia de tu almacén de claves y luego úsala en el [paso 3](#aaps-builder-step3) con **I already have a keystore**.

```{warning}
No elijas **Create a new key**. Un AAPS compilado con una clave nueva no puede actualizar el AAPS de tu teléfono.
```

¿Cuál es tu caso?

- **Usaste la Opción 2** (subiste tu propio almacén de claves de Android Studio) y todavía tienes el archivo `.jks`, sus contraseñas y su alias: no tienes que hacer nada aquí. Usa ese archivo en el paso 3.
- **Usaste la Opción 1** (el archivo de preparación creó tu clave), o ya no tienes el archivo de tu almacén de claves: expórtalo desde tu fork como se explica abajo.

Para exportar tu almacén de claves desde tu fork:

1. En tu fork, abre **Settings** → **Secrets and variables** → **Actions** y añade un secreto llamado `ZIP_PASSWORD`. Elige una contraseña solo con letras inglesas (sin acentos ni ñ) y números. Protege el archivo que vas a crear.
2. Abre la pestaña **Actions** de tu fork, toca **CI Keystore Export** y luego **Run workflow**. Más detalles: [Exportar tu almacén de claves](#ci-keystore-export).
3. Cuando la ejecución tenga una marca verde, abre tu Google Drive: el archivo `keystore.zip` está en la carpeta **AAPS** → **KeyStore**. Si la ejecución falla en el paso de Google Drive, el acceso de tu fork a Google Drive ha caducado: consulta [El token de actualización de Google ha caducado](#aaps-ci-google-token-expired).
4. Descarga `keystore.zip` y ábrelo con tu `ZIP_PASSWORD`: en un ordenador, o en tu teléfono con una app de archivos que pueda abrir archivos ZIP protegidos con contraseña. Contiene:
   - `keystore.jks`: tu almacén de claves,
   - `keyStoreInfo.txt`: tu `KEYSTORE_PASSWORD`, `KEY_PASSWORD` y `ALIAS` (normalmente `key0`).
5. Copia `keystore.jks` a tu teléfono (o a Google Drive, para elegirlo desde allí).

En el [paso 3](#aaps-builder-step3) de la página de configuración:

1. Toca **I already have a keystore**.
2. En **Keystore file**, elige `keystore.jks`.
3. En **Keystore password**, escribe la `KEYSTORE_PASSWORD` de `keyStoreInfo.txt`.
4. En **Key alias**, elige o escribe el `ALIAS` de `keyStoreInfo.txt`.
5. Si `KEY_PASSWORD` es distinta de `KEYSTORE_PASSWORD`, desmarca **Key password is the same as the keystore password** y escribe la `KEY_PASSWORD`.

Guarda `keystore.zip` y su `ZIP_PASSWORD` en un lugar seguro, fuera de tu teléfono: es la copia de seguridad de tu clave.

El acceso de tu fork a Google Drive tampoco se puede copiar. Para guardar también en Google Drive las compilaciones de AAPS Builder, haz el [paso 7](#aaps-builder-google-drive). Puedes conservar tu fork hasta que el AAPS compilado con AAPS Builder esté instalado en tu teléfono.

## Abre la página de configuración

**→ [Abre la página de configuración de AAPS Builder](#aaps-builder-setup)**

Deja abierta esta página de la documentación: mantén pulsado el enlace de arriba y elige **Abrir en una pestaña nueva**. Los pasos de abajo explican con más detalle cada parte de la página de configuración.

La página de configuración abre cada página de GitHub en una pestaña nueva de Chrome. Para volver a la página de configuración, toca el botón de pestañas junto a la barra de direcciones de Chrome (el cuadrado con un número) y elige la página de configuración de AAPS Builder.

La página de configuración funciona completamente en tu navegador: tu clave y tus contraseñas nunca se envían a ningún sitio, excepto al secreto de GitHub en el que tú mismo las pegas. Solo tu nombre de usuario de GitHub se envía a GitHub, para comprobar que existe. Recuerda tu nombre de usuario de GitHub y el nombre del repositorio, así que puedes volver a ella en cualquier momento para abrir otra vez tu página de secretos o tus compilaciones.

![La página de configuración de AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Paso 1 – Crea tu repositorio privado de compilación

Este paso crea un repositorio privado vacío en tu cuenta de GitHub. Solo tú puedes verlo, y también las apps que compila.

1. Asegúrate de que has iniciado sesión en github.com en este navegador.

2. En **Your GitHub username**, escribe tu nombre de usuario de GitHub, no tu correo electrónico. La página lo comprueba con GitHub: **✓ GitHub user found** significa que es correcto.

3. En **Name of your repository**, deja la sugerencia `my-aaps`. Si ya creaste tu repositorio con otro nombre, escribe exactamente ese nombre.

   ```{tip}
   **¿Ya creaste tú mismo un repositorio privado vacío?** Escribe aquí su nombre exacto, no toques **Create my private repository** y ve al [paso 2](#aaps-builder-step2).
   ```

4. Comprueba la línea **Your repository:** muestra `github.com/<your username>/my-aaps`.

5. Toca **Create my private repository**.

   ![Paso 1 de la página de configuración, ya rellenado](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

6. GitHub se abre en una pestaña nueva, con tu cuenta como **Owner** y el nombre que elegiste.

   ![Página Create a new repository de GitHub](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Desplázate hacia abajo: **Private**, **No template** y **Add README: Off** ya están seleccionados. No cambies nada y no añadas un README ni otros archivos.

7. Desplázate hacia abajo y toca el botón verde **Create repository**.

   ![Botón Create repository](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub muestra tu repositorio nuevo y vacío. **Vuelve a la pestaña de la página de configuración** para el paso 2: toca el botón de pestañas junto a la barra de direcciones de Chrome y elige la página de configuración.

(aaps-builder-step2)=

## Paso 2 – Añade el workflow de compilación

El workflow de compilación es un archivo de texto corto que le dice a GitHub cómo compilar AAPS. La página de configuración lo añade a tu repositorio una sola vez: tú solo lo confirmas.

1. Comprueba que la página muestra **Workflow version … is ready** y luego toca **Add the workflow to my repository**.

   ![Paso 2 de la página de configuración](../images/Building-the-App/CI/AapsBuilder35_Step2.png)

2. GitHub abre un archivo nuevo en tu repositorio, ya llamado `.github/workflows/build.yml` y ya rellenado. Comprueba el nombre del archivo arriba: debe ser exactamente `.github/workflows/build.yml`. No cambies el texto.

3. Toca **Commit changes…**

   ![El workflow, rellenado por la página de configuración](../images/Building-the-App/CI/AapsBuilder37_NewFilePasted.png)

4. y luego otra vez **Commit changes** en la ventana que se abre.

   ![Ventana Commit changes](../images/Building-the-App/CI/AapsBuilder38_CommitDialog.png)

   GitHub muestra el archivo nuevo `build.yml` en la carpeta `.github/workflows` de tu repositorio.

   ![El archivo del workflow en tu repositorio](../images/Building-the-App/CI/AapsBuilder39_WorkflowAdded.png)

```{warning}
No pulses el botón **Atrás** de tu teléfono ni deslices la página hacia abajo mientras el editor de archivos está abierto: GitHub vuelve a cargar la página y el texto desaparece. Si pasa, toca **Restore** en el aviso azul, o vuelve a la página de configuración y toca el botón otra vez.
```

Si el área de texto está vacía, toca **Updating the workflow, or the text area is empty?** abajo en el paso 2 de la página de configuración: toca **Copy workflow** y pégalo en el área de texto (en un teléfono, mantén pulsado).

```{warning}
Usa solo el workflow de esta página de configuración. No copies un workflow de compilación de otro sitio web o repositorio: el workflow se ejecuta junto a tu clave de firma.
```

(aaps-builder-step3)=

## Paso 3 – Tu clave de firma

La app debe estar firmada con tu propia clave. Elige una de las dos pestañas. Lee primero el [aviso sobre clave nueva o clave existente](#aaps-builder-before-you-start).

![Paso 3 de la página de configuración: las dos opciones de clave](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore (ya tengo un almacén de claves)

1. Toca **I already have a keystore**.
2. En **Keystore file**, elige tu archivo `.jks` (o `.keystore`, `.p12`, `.pfx`). En un teléfono, copia primero el archivo a tu teléfono o a Google Drive.
3. En **Keystore password**, escribe la contraseña del almacén de claves.
4. En **Key alias**, elige tu alias de la lista, o escríbelo si no hay lista. En los almacenes de claves creados con Android Studio suele ser `key0`.
5. Si la contraseña de tu clave es distinta de la contraseña del almacén de claves, desmarca **Key password is the same as the keystore password** y escribe la contraseña de la clave.
6. Toca **Check and continue**.

La página comprueba la contraseña y el alias en tu dispositivo. **Keystore OK! Continue with step 4.** significa que todo está bien. Si dice que la contraseña se comprobará al compilar, continúa de todos modos: la compilación te dirá si algo está mal.

### Create a new key (crear una clave nueva)

1. Toca **Create a new key**.

2. Elige una contraseña y escríbela dos veces. Reglas: al menos 8 caracteres, solo las letras a–z y A–Z, los dígitos 0–9 y símbolos como `! ? #`. Sin espacios, sin letras con acento y sin el carácter `|`.

3. Toca **Create key**. Pasan unos segundos hasta que aparece **Key created**.

   ![Formulario de clave nueva con la contraseña escrita dos veces](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Toca **Download backup (aaps-keystore.jks)**. Si Chrome pregunta **¿Volver a descargar el archivo?**, en tu teléfono ya hay una copia de seguridad anterior con el mismo nombre: toca **Volver a descargar**. Entonces Chrome guarda la clave nueva como `aaps-keystore (1).jks`: ese es el archivo de esta clave; consérvalo y no lo confundas con el anterior.

   Guarda estas tres cosas juntas, en un lugar seguro fuera de tu teléfono (por ejemplo, tu propio almacenamiento en la nube):

   - el archivo `aaps-keystore.jks`,
   - tu contraseña,
   - el alias de la clave: **`key0`**.

   Necesitas las tres cosas si alguna vez compilas AAPS de otra forma, por ejemplo con Android Studio. Las claves creadas con una versión anterior de la página de configuración tienen el alias `aaps`.

   ![Clave creada y el cuadro de copia de seguridad](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step4)=

## Paso 4 – Da la clave a tu repositorio

El paso 4 se desbloquea cuando el paso 3 está hecho. Tu clave, sus contraseñas y su alias se guardan juntos en un solo valor, el secreto `KEYSTORE_SET`.

1. Toca **Open the secrets page**.

![Paso 4 de la página de configuración](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub abre la página **New secret** de tu repositorio. En un teléfono está debajo del menú de ajustes: desplázate hacia abajo.

![Formulario New secret de GitHub](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Cambia a la pestaña de la página de configuración y toca **Copy name**. Vuelve a la pestaña de GitHub y pégalo en el campo pequeño **Name**. El nombre es `KEYSTORE_SET`.

4. Cambia a la pestaña de la página de configuración y toca **Copy secret**. Vuelve a la pestaña de GitHub y pégalo en el cuadro grande **Secret** (en un teléfono, mantén pulsado). El secreto es un código muy largo, de miles de caracteres: la página de configuración muestra sus primeros caracteres junto al botón. No pegues ahí la palabra `KEYSTORE_SET`.

5. Toca **Add secret**. `KEYSTORE_SET` aparece ahora en **Repository secrets**.

![Lista Repository secrets con KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Solo tienes que hacer esto una vez.

```{tip}
¿GitHub muestra **Page not found** (404)? Primero comprueba que has iniciado sesión en github.com en este navegador: GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión. Si no, el nombre de usuario o el nombre del repositorio del paso 1 no coincide con tu repositorio. Comprueba el nombre en github.com, corrígelo en el paso 1 y toca el botón otra vez.
```

(aaps-builder-step5)=

## Paso 5 – Compila la app

1. En la página de configuración, toca **Open the build page**. GitHub abre la página **Build AAPS** de tu repositorio.

   ![Página Build AAPS de GitHub con el botón Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Si en su lugar se abre la **app de GitHub**: toca **RUN WORKFLOW**, comprueba la versión y la variante, y toca **RUN WORKFLOW** otra vez. La app puede seguir mostrando **Nothing to see here**: desliza la lista hacia abajo para actualizarla y ver tu compilación. Luego continúa con el paso 4 de abajo.

2. Si GitHub lo pide, toca el botón verde para activar los workflows.
3. Toca **Run workflow**. Se abre un pequeño formulario:
   - **Version**: deja `latest` para compilar la versión más reciente de AAPS, o escribe un número de versión como `3.3.2.1`.
   - **Variant**: deja `fullRelease` para el uso normal con una bomba. Las otras variantes se explican en [variantes de compilación](#browserbuild-variant). `aapsclient3Release` compila **AAPSClient3**, disponible desde la versión 4.0 de **AAPS** (consulta [Acerca de AAPSClient, AAPSClient2 y AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Toca el botón verde **Run workflow**.

   ![Formulario Run workflow con latest y fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. La compilación empieza y muestra **In progress**, con dos partes: primero **AAPS / Check** y luego **AAPS / Build AAPS**.

   ![Compilación en curso](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Espera de 15 a 30 minutos. Una marca verde significa que la compilación ha terminado. Una cruz roja significa que ha fallado: abre la compilación para leer el mensaje y luego consulta [solución de problemas](#aaps-builder-troubleshooting).

   ![Compilación terminada con una marca verde](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **Correo electrónico cuando termina una compilación:** GitHub solo te envía un correo cuando una compilación falla. Para recibir también un correo cuando termina con éxito: en github.com, abre tu foto de perfil → **Settings** → **Notifications** → **System** → **Actions** y desmarca **Only notify for failed workflows**.
   ```

Si no hay un botón **Build AAPS** o **Run workflow**:

- Abre tu repositorio y comprueba que el archivo `.github/workflows/build.yml` está ahí. Si falta o tiene otro nombre, repite el [paso 2](#aaps-builder-step2).
- Abre la pestaña **Actions**. Si dice que los workflows están desactivados, toca el botón verde para activarlos y luego toca **Build AAPS** en la lista.

(aaps-builder-step6)=

## Paso 6 – Instala la app en tu teléfono

```{warning}
**Antes de cada actualización**, [exporta tus ajustes](#ExportImportSettings-Automating-Settings-Export) en AAPS y copia el archivo **fuera del teléfono** (Google Drive, Dropbox…). Guarda allí también varias exportaciones anteriores y los archivos APK, para poder volver atrás siempre.
```

1. En tu teléfono, abre la página de configuración en **Chrome**. Inicia sesión en github.com si te lo pide.
2. Toca **Open my builds** y luego la compilación más reciente con una marca verde.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   La app de GitHub no puede descargar compilaciones. En la app, abre la compilación más reciente y luego toca **Artifacts ↗**, o toca el icono de compartir arriba y elige **Chrome** (o **Copiar enlace**, y luego pega el enlace en la barra de direcciones de Chrome). La compilación se abre en Chrome: continúa allí con el siguiente paso.

   Para que los enlaces de GitHub no se abran en la app: **Ajustes** de Android → **Aplicaciones** → **GitHub** → **Abrir de forma predeterminada** → desactiva **Abrir enlaces compatibles**.
   ```

   ![Compilación terminada: estado Success y 2 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Desplázate hacia abajo hasta el resumen de la compilación y toca el enlace **Download AAPS**.

   ![Resumen de la compilación con el enlace Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Desplázate con el dedo sobre el texto, no sobre el diagrama de los pasos de la compilación: si no, se mueve el diagrama en lugar de la página.
   ```

   También puedes bajar más hasta **Artifacts** y tocar el icono de descarga junto a `aaps-….apk`.

   ![Artifacts con las apps del teléfono y del reloj](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Cuando termine la descarga, abre el menú de Chrome **⋮** → **Descargas**, toca `aaps-….apk` y elige **Instalar**. Si te lo pide, permite instalar apps de esta fuente.

   ![Descargas de Chrome con el APK de AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` es la app para el reloj inteligente. Sáltala si no usas uno.

La app se guarda en la página de la compilación durante **14 días**. No aparece en **Code** de tu repositorio. Cópiala a un lugar seguro, fuera de tu teléfono, junto con tus exportaciones de ajustes.

Para más formas de instalar la app, consulta [Transferir e instalar AAPS](TransferringAndInstallingAaps.md).

```{note}
Desde septiembre de 2026, la [verificación de desarrolladores de Android](#android-developer-verification) de Google puede bloquear la instalación del APK al tocar el archivo, según tu país. En esa página se explican soluciones gratuitas.
```

(aaps-builder-google-drive)=

## Paso 7 (opcional) – Guarda también la app en Google Drive

También puedes hacer que cada compilación se guarde en tu Google Drive, en la carpeta `AAPS/<version>`. Esto es opcional: la app siempre está disponible en la página de la compilación.

Necesita un secreto más, `GDRIVE_OAUTH2`. Obtienes su valor con el archivo de preparación que usan los otros métodos de compilación en el navegador:

1. En un **ordenador**, descarga el archivo de preparación y ábrelo como se explica en [Opción 1 – Ordenador](BrowserBuildO1Computer.md). Sáltate la parte del almacén de claves: ya tienes tu clave.
2. Sigue el [Paso 3 – Autorizar Google Drive](#aaps-ci-google-drive-auth) para obtener el valor de `GDRIVE_OAUTH2`.
3. En la página de configuración, el paso 7 abre tu página de secretos.

   ![Paso 7 de la página de configuración](../images/Building-the-App/CI/AapsBuilder48_Step7.png)

   Toca **Copy name** y luego pégalo en el campo pequeño **Name** (el nombre es `GDRIVE_OAUTH2`). Pega tu valor de `GDRIVE_OAUTH2` en el cuadro grande **Secret** y toca **Add secret**.

Desde la siguiente compilación, los APK también se guardan en Google Drive.

Google quita el acceso si no compilas durante 6 meses o si cambias tu contraseña de Google. Entonces la compilación te lo indica: repite estos pasos. Consulta [El token de actualización de Google ha caducado](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Actualizar AAPS

Tu repositorio nunca compila nada por sí solo: tú decides cuándo compilar, qué versión y qué variante. Cuando sale una nueva versión de AAPS:

1. [Haz una copia de seguridad de tus ajustes](#aaps-builder-step6) como se explica en el paso 6.
2. Compila la nueva versión como en el [paso 5](#aaps-builder-step5). Deja `latest` o escribe el número de versión.
3. Descárgala e instálala como en el [paso 6](#aaps-builder-step6).

**Actualizaciones del workflow de compilación:** tu repositorio nunca descarga un workflow nuevo por sí solo, y los pasos de compilación que ejecuta están fijados a una versión revisada. Cuando el workflow cambia, la página [Actualizaciones y cambios de la documentación](../Maintenance/DocumentationUpdate.md) lo indica. Para actualizarlo, abre el paso 2 de la página de configuración y luego toca **Updating the workflow, or the text area is empty?**:

1. Toca **Copy workflow** y luego **Open my workflow file**.
2. Sustituye todo el texto por el workflow copiado (en un teléfono, mantén pulsado: **Seleccionar todo** y luego **Pegar**).
3. Toca **Commit changes…** y luego **Commit changes**.

La primera línea del archivo muestra su versión.

(aaps-builder-troubleshooting)=

## Solucionando problemas

Para ver por qué falló una compilación, [lee el log de compilación](#aaps-ci-read-the-logs): los nombres de los pasos son distintos, pero encuentras el error de la misma forma. También puedes [actualizar un secreto](#aaps-ci-update-secret) y [volver a ejecutar la compilación](#aaps-ci-rerun) de la misma forma.

- **La compilación se detiene con «This repository is PUBLIC»**: en tu repositorio, abre **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** y luego compila otra vez.
- **«Secret KEYSTORE_SET is missing»**: haz el paso 4 de la página de configuración.
- **«The secret is too short»**, **«The secret is not a valid code»** o **«The secret does not contain a keystore»**: se pegó un texto equivocado en el secreto, a menudo la propia palabra `KEYSTORE_SET`, o solo una parte del código. En tu repositorio, abre **Settings** → **Secrets and variables** → **Actions**, edita `KEYSTORE_SET` y pega otra vez el código largo de **Copy secret** (si cerraste la página de configuración, repite antes su paso 3).
- **«Keystore, password or alias is wrong»**: comprueba la contraseña y el alias de tu almacén de claves y luego repite los pasos 3 y 4 de la página de configuración.
- **«Version … does not exist»**: la versión que escribiste no es una versión publicada de AAPS. Usa `latest` o comprueba el número de versión.
- **«Page not found» (404) cuando la página de configuración abre GitHub**: inicia sesión en github.com en el mismo navegador (GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión). Si has iniciado sesión, el nombre de usuario o el nombre del repositorio del paso 1 de la página de configuración no coincide con tu repositorio. Escribe los nombres exactos.
- **«No GitHub user with this name»** en el paso 1: escribe tu nombre de usuario de GitHub, tal como aparece en tu perfil de GitHub, no tu correo electrónico.
- **No hay enlace Download, o se abrió la app de GitHub**: la app de GitHub no puede descargar compilaciones. Abre la compilación en Chrome como se explica en el [paso 6](#aaps-builder-step6). Para que los enlaces de GitHub no se abran en la app: **Ajustes** de Android → **Aplicaciones** → **GitHub** → **Abrir de forma predeterminada** → desactiva **Abrir enlaces compatibles**.
- **«Could not read the workflow file»** en la página de configuración: vuelve a cargar la página y toca el botón otra vez. La página de configuración debe abrirse desde este sitio de documentación.
- **GitHub dice que el archivo ya existe** cuando haces commit del workflow: tu repositorio ya tiene un workflow. En ese caso actualízalo, como se explica en [Actualizar AAPS](#aaps-builder-updates).
- **«Google Drive access has expired or was revoked»**: repite el [paso 7](#aaps-builder-google-drive) y actualiza el secreto `GDRIVE_OAUTH2`.

Para otros problemas con GitHub y Google Drive, consulta [Compilación en el navegador: solución de problemas](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

Página de configuración de AAPS Builder <BrowserBuildAapsBuilderSetup.md>
```
