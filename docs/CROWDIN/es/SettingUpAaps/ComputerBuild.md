<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Compilación con Android Studio

Este es el método tradicional para compilar tu app AAPS.

Puedes compilar la app sin ordenador con el método [Compilación en el navegador](./BrowserBuild.md).

## Construyela tú mismo en lugar de descargarla

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Computer and software specifications for building AAPS

* A specific **[Android Studio](https://developer.android.com/studio/)** version may be required to build the apk. Mira la tabla de abajo:

| AAPS Version                | Preferred<br/>Android Studio<br/>Version | Alternative<br/>Android Studio<br/>Version | Gradle | JVM |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| 2.6.2                       | 3.6.1                                                |                                                        | 5.6.4  | 11  |
| 2.8.2.1                     | 4.1.1                                                |                                                        | 6.1.1  | 13  |
| [3.1.0.3](#version3100)     | 2020.3.1                                             | probado hasta Quail 4                                  | 7.3.3  | 17  |
| [3.2.0.4](#version3204)     | Hedgehog (2023.1.1)                                  | probado hasta Quail 4                                  | 8.2    | 17  |
| [3.3.1.3](#version3300)     | Ladybug Feature Drop (2024.2.2)                      | probado hasta Quail 4                                  | 8.10   | 21  |
| [3.3.2](#version3300)       | Meerkat (2024.3.1)                                   | probado hasta Quail 4                                  | 8.11.1 | 21  |
| [3.3.2.1](#version3321)     | Narwhal (2025.1.2)                                   | probado hasta Quail 4                                  | 8.13   | 21  |
| [3.4.2.6](#version3426)     | Panda 2 (2025.3.2)                                   | probado hasta Quail 4                                  | 9      | 21  |
| [4.0.0-beta1](#version4000) | Rabbit 1                                             | hasta la última Rabbit 1                               | 9.8    | 21  |

The "preferred version" is packaged with the appropriate JVM version. The preferred version is also the minimal version you can use to build **AAPS**. You will **NOT** be able to build on a version older than the "preferred" one. If using a different version, you may encounter issues related to JVM version. See the [Troubleshooting Android Studio](#troubleshooting_androidstudio-uncommitted-changes) page to help solve these issues. If your current Android Studio version is not listed in the table, you must update it first.

The Gradle version is linked to the source code, you will always get the correct Gradle version when downloading / updating the source code. It is mentioned here for reference only, you don't have to take action on it.

* [Windows 32-bit systems](#troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio. Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16 GB o más</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**It is strongly recommended (not mandatory) to use SSD (Solid State Disk) instead of HDD (Hard Disk Drive) because it will take less time when you are building the AAPS apk file.**  You can still use a HDD when you are building the **AAPS** apk file. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Help and support during the building process

Si tienes problemas al compilar la app **AAPS**, hay una sección específica de [**solución de problemas para Android Studio**](../GettingHelp/TroubleshootingAndroidStudio.md). Consúltala primero.

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). If you want to change something yourself (updating screenshots _etc_), please submit a [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

## Step-by-step guide to building the AAPS app

```{admonition} WARNING
:class: warning
Si ya has compilado AAPS antes, no necesitas hacer otra vez todos los pasos siguientes.
¡Ve directamente a la [guía de actualización](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

En esta guía encontrarás capturas de pantalla de _ejemplo_ de la compilación del archivo apk de **AAPS**. **Android Studio**, el programa que usamos para compilar el apk de **AAPS**, se actualiza con frecuencia. Por eso estas capturas pueden no ser idénticas a tu instalación, pero deberías poder seguirlas igualmente.

Since **Android Studio** runs on Windows, Mac OS X and Linux platforms, there might also be minor differences in the steps for the different  platforms.

(install-git-if-you-dont-have-it)=
### Instalar Git

```{admonition} Why Git? 
:class: dropdown

Git es un «_sistema de control de versiones_» (VCS, por sus siglas en inglés).\
Git es un programa que permite seguir los cambios en el código y colaborar con otras personas. Usarás Git para hacer una copia del código fuente de **AAPS** desde el sitio web de GitHub a tu ordenador. Then, you will use Android Studio on your computer to build the **AAPS** application (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Steps for Installing Git

1.  Comprueba que no tienes ya **Git** instalado. Para hacerlo, escribe «git» en la barra de búsqueda de Windows. Si ves **«Git bash»** u otra forma de Git, ya está instalado y puedes pasar directamente a [instalar Android Studio](#install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. Si no tienes Git instalado, descarga e instala la última versión para tu sistema desde la sección «Download» de [**esta página**](https://git-scm.com/downloads). Any recent Git version should work, select the correct version according to your system, either Mac, Windows and Linux.

**Nota para usuarios de Mac:** la página web de Git también te guiará para instalar un programa adicional llamado «homebrew» que ayuda en la instalación. If you install Git via homebrew, there is no need to change any preferences.

(Make_a_note_of_Git_path)=

* Durante la instalación, cuando se te pida «select destination location», anota _dónde_ se instala Git (la «**ruta de instalación**»). Tendrás que comprobarla en el siguiente paso. It will be something similar to "C:\Program Files\Git\cmd\git.exe"

*  As you proceed through several steps of the Git installation, just accept all the default options.

*  After the install, if you forgot to make a note of the where Git was installed, you can find it as follows: type "git" into the PC search bar, right click on "Git bash", select "open file location" hover over the "Git bash" icon with your mouse, which will then reveal where it is installed.

* Reboot your computer before the next step.

(Building-APK-install-android-studio)=
### Instalar Android Studio

- **Tienes que estar conectado a internet todo el tiempo durante los pasos siguientes, porque Android Studio descarga varias actualizaciones**

```{admonition} What is Android Studio?
:class: dropdown
Android Studio es un programa que funciona en tu ordenador. Permite descargar código fuente de internet (con Git) y compilar apps para teléfonos inteligentes (y relojes inteligentes). Si compilas una app nueva o actualizada en tu PC con Android Studio, no puedes «romper» la versión actual de **AAPS** que tengas funcionando en lazo en un teléfono: son procesos totalmente separados. 
```

Una de las cosas más importantes al instalar Android Studio es **¡tener paciencia!** Durante la instalación y la configuración, Android Studio descarga muchas cosas, y eso lleva tiempo.

```{admonition} Different UI
:class: warning
Important note: Android Studio changed its UI during the last releases. Esta guía muestra los pasos con la *nueva interfaz*. Las capturas de pantalla se hicieron con «Ladybug», así que las versiones más nuevas pueden verse un poco diferentes. Si todavía usas la interfaz antigua, puede que quieras cambiar primero Android Studio a la nueva interfaz siguiendo [estas instrucciones](#computerbuild-NewUI).
```

La versión de Android Studio es muy importante. Consulta las [instrucciones de arriba](#Building-APK-recommended-specification-of-computer-for-building-apk-file) para elegir la versión correcta de Android Studio.

Descarga la [versión actual de Android Studio](https://developer.android.com/studio) o una versión anterior desde el [**Archives**](https://developer.android.com/studio/archive) (archivo) y acepta los acuerdos de descarga.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer. You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. ¡**No** necesitas cambiar ningún ajuste!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

If you want to save hard disk space, you can uncheck Android Virtual Device: it is not used for building **AAPS**.

![Choose_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration_Settings](../images/Building-the-App/013_InstallLadybug.png)

Now click on "Install":

![Choose_start_Menu_Folder](../images/Building-the-App/014_InstallLadybug.png)

Once it's completed, press "Next"

![Installation_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finished" to start Android Studio for the first time.

![Completing_Android_Studio_Setup](../images/Building-the-App/016_InstallLadybug.png)

You will be asked if you want to help improve Android Studio. Choose the option to your liking, it won't make any difference for the following steps.

![Help_improve_Android_Studio](../images/Building-the-App/020_ImproveAS.png)

The welcome screen greets you to the installation of Android Studio. Press "Next".

![Bienvenido](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Select "Standard" as installation type.

![Install_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verify the settings by clicking "Next" again.

![Verify_Settings](../images/Building-the-App/024_DefaultInstallation.png)

Now you need to accept the license agreements. You have two sections (1 + 3) on the left side which you have to select one after the other and each select "Accept" (2 + 4) on the right side.

Then the "Finish" (5) button can be clicked.

![License_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Some Android packages will now be downloaded and installed. Be patient and wait.

When it's finished, you will find the following screen where you can select "Finish" again.

![Downloading_Components](../images/Building-the-App/026_DownloadFinished.png)

You will now see the Welcome screen of Android Studio.

![Welcome_to_Android_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)


(Building-APK-download-AAPS-code)=
### Download the AAPS code

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

La primera vez que se descarga **AAPS**, Android Studio se conecta por internet al sitio web de GitHub para descargar el código fuente de **AAPS**. Esto debería tardar más o menos 1 minuto. 

Después Android Studio usará **Gradle** (una herramienta de desarrollo para apps de Android) para encontrar los demás componentes necesarios para compilar en tu ordenador. 
```

En la pantalla de bienvenida de Android Studio, comprueba que «**Projects**» (1) está resaltado a la izquierda.

Luego haz clic en «**Clone Repository**» (2) a la derecha:

![Get_from_VCS](../images/Building-the-App/032_GetVCS.png)

We will now tell Android Studio where to get the code from:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

* "Repository URL" should be selected (by default) on the left (1).
* "Git" should be selected (by default) as version control (2).
* Now copy this URL:
    ```
    https://github.com/nightscout/AndroidAPS.git
    ```
    and paste it into the URL textbox (3).

* Comprueba que la carpeta (por defecto) donde se guardará el código clonado no existe ya en tu ordenador (4). You can change it to some directory, but please remember where you stored it!
* Now click the button "Clone" (5).

```{admonition} INFORMATION
:class: note
Anota la carpeta. ¡Es donde se guarda tu código fuente!
```

You will now see a screen telling you that the repository is being cloned:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Click on "Trust project":

  ![Trust project](../images/Building-the-App/035_TrustProject.png)


Only for Windows users: If your firewall asks for permission, grant access:

 ![Permiso del cortafuegos para java](../images/AndroidStudio361_18.png)

After the repository is cloned successfully, Android Studio will open the cloned project.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
Android Studio cambió su interfaz hace poco. ¡Las instalaciones nuevas de Android Studio usan la nueva interfaz por defecto!

Solo si tu Android Studio se ve diferente, puede que tengas que cambiar a la nueva interfaz:
Haz clic en el menú de hamburguesa arriba a la izquierda y selecciona **Settings** (o **Preferences** en ordenadores de Apple).
En **Appearance & Behavior**, ve a **New UI** y marca **Enable new UI**. Después reinicia Android Studio para empezar a usarla.

Si no encuentras la opción **New UI**, no te preocupes: ¡ya la estás usando!
```


Cuando Android Studio se abra, espera con paciencia (puede tardar unos minutos) y, sobre todo, **no** actualices el proyecto aunque te lo sugiera la ventana emergente.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Puede que Android Studio te recomiende actualizar el sistema gradle. **¡No actualices nunca gradle!** Te dará problemas.
```

Solo en ordenadores con Windows: puede que recibas una notificación de que Windows Defender está funcionando. Haz clic en **Automatically** y confirma: ¡la compilación será más rápida!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


You can leave the gradle sync running and follow the next steps already.

(Building-APK-set-git-path-in-preferences)=
### Set Git path in Android Studio preferences

Ahora vamos a decir a Android Studio dónde encontrar Git, que instalaste [antes](#install-git-if-you-dont-have-it).

* Solo para usuarios de Windows: asegúrate de haber reiniciado el ordenador después de [instalar Git](#install-git-if-you-dont-have-it). If not, restart now and re-open Android Studio

En la esquina superior izquierda de **Android Studio**, abre el menú de hamburguesa y ve a **File** > **Settings** (en Windows) o **Android Studio** > **Preferences** (en Mac). Se abre la siguiente ventana. Haz clic para desplegar la lista llamada **Version Control** (1) y selecciona **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Comprueba si **Android Studio** puede encontrar automáticamente la ruta correcta en **Path to Git executable** haciendo clic en el botón «Test» (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)


Si la configuración automática funciona, tu versión actual de **Git** aparecerá junto a la ruta.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Si **git.exe** no se encuentra automáticamente, o si al hacer clic en «Test» aparece un error, puedes
* escribir a mano la ruta que anotaste [antes](#BuildingAaps-steps-for-installing-git), o
* click on the folder icon (1) and manually navigate to the directory where **git.exe** was installed [earlier](#BuildingAaps-steps-for-installing-git)
* ¡Verifica tus ajustes con el botón **Test**!

  ![Git no encontrado](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Build the AAPS "signed" APK

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android exige que cada app esté _firmada_, para asegurar que más adelante solo se pueda actualizar desde la misma fuente de confianza que publicó la app original. Para más información sobre este tema, sigue [este enlace](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

Para lo que necesitamos, esto solo significa que generamos un archivo de firma o «almacén de claves» (keystore) y lo usamos cuando compilamos la app **AAPS**.
```


**Importante: ¡asegúrate de que la sincronización de gradle ha terminado con éxito antes de seguir!**


Click the hamburger menu on the top left to open the menu bar. Selecciona **Build** (1) y luego **Generate Signed App Bundle / APK** (2)

![Compilar apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Selecciona «APK» (1) en lugar de «Android App Bundle» y haz clic en «Next» (2):

![APK en lugar de bundle](../images/Building-the-App/041_APK.png)

En la siguiente pantalla, comprueba que «Module» está en «AndroidAPS.app» (1). La parte antes de «.app» es el nombre de la carpeta en la que clonaste el código.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Si quieres crear el apk para tu reloj, ¡ahora tienes que seleccionar AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Click "Create new..." (2) to start creating your key store.

```{admonition} INFORMATION!
:class: note
Solo tendrás que crear el almacén de claves una vez.
If you have built AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Nota:_** el almacén de claves (key store) es un archivo donde se guarda la información para firmar la app. It is encrypted, and the information is secured with passwords.

![Crear almacén de claves](../images/Building-the-App/043_Keystore.png)

* Click the "folder" symbol (1) to select a path on your computer for your key store.

  **No** uses la carpeta donde guardaste tu código fuente, sino una carpeta que también pasarías a un ordenador nuevo.

```{admonition} WARNING!
:class: warning
Anota dónde se guarda tu almacén de claves. ¡Lo necesitarás cuando compiles la próxima actualización de AndroidAPS!
```

* Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  The passwords for key store and key do not have to be sophisticated. Si en el futuro pierdes tu contraseña, consulta [Reinstalar AAPS con un nuevo almacén de claves](#reinstall-aaps).

```{warning}
**Evita los caracteres especiales en tus contraseñas.** Usa solo letras y números para las contraseñas del almacén de claves y de la clave. En concreto, no uses `$`, el acento grave (backtick), `"` ni `\`. Si más adelante cambias a la [Compilación en el navegador](#aaps-ci-option2) y vuelves a usar este almacén de claves, estos caracteres pueden hacer fallar el paso de firma; consulta [Compilación en el navegador: solución de problemas](#aaps-ci-password-special-characters).
```

* The default alias (3) for your key is "key0", leave this unchanged.

* You now need a password for your key. To keep it simple, if you want, you can use the same password you used for your keystore, above. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
¡Anota estas contraseñas! ¡Las necesitarás cuando compiles la próxima actualización de AAPS!
```

* The validity is 25 years by default, leave it as it is.

* Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

* Click "OK" (8) to continue:


En la página **Generate signed App Bundle or APK** ahora aparecerá la ruta a tu almacén de claves. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Click "Next" (4):

![Recordar contraseñas](../images/Building-the-App/044_RememberPwd.png)


En la siguiente pantalla, selecciona la variante de compilación «fullRelease» (1) y haz clic en «Create» (3). Recuerda la carpeta de destino que aparece en (2), porque después encontrarás allí el archivo apk compilado.

   ![Seleccionar la variante de compilación](../images/Building-the-App/045_BuildPath.png)

Ahora Android Studio compilará el apk de **AAPS**. It will show "Gradle Build running" (2) at the bottom right. El proceso lleva algo de tiempo, según tu ordenador y tu conexión a internet, así que **¡ten paciencia!** Si quieres ver cómo avanza la compilación, haz clic en el pequeño martillo «build» (1) en la parte de abajo de Android Studio:

![Gradle en ejecución](../images/Building-the-App/046_BuildRunning.png)

Now you can watch the building progress:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

Android Studio will display the information "BUILD SUCCESSFUL" after build is finished. You may see a popup notification which you can click to select "locate". Si no la viste, haz clic en el icono de notificaciones (1) para abrir las notificaciones (Notifications) y luego en **locate** (2):

![Compilación terminada](../images/Building-the-App/049_ReopenNotification.png)

**_Si la compilación no ha funcionado, consulta la sección [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)._**

In the Notifications box, click on the blue link "locate":

![Localizar la compilación](../images/Building-the-App/048_BuildFinished.png) Se abrirá tu gestor de archivos y te mostrará el archivo apk que acabas de compilar.

   ![Ubicación del archivo apk](../images/Building-the-App/050_LocateAPK.png)

Congratulations! Ya has compilado el archivo apk de **AAPS**. En la siguiente sección de la documentación pasarás este archivo a tu teléfono.

```{tip}
Si crees que en el futuro quizá quieras usar un reloj inteligente Android Wear, este es el mejor momento para compilar el apk de AAPS Wear, para que esté sincronizado con tu apk de AAPS.
```

Pasa a la siguiente etapa: [Transferir e instalar **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



