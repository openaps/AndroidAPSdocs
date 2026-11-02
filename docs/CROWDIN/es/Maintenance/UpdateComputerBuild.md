# Actualizar con Android Studio

## Compílala tú en lugar de descargarla

**AAPS** no está disponible para descargar, debido a la normativa sobre productos sanitarios. Es legal compilar la app para tu propio uso, ¡pero no debes dar una copia a otras personas! Consulta la página de [preguntas frecuentes](../UsefulLinks/FAQ.md) para más detalles.

```{note}
In case you want to build **AAPS** on a new computer: copy your back-up keystore file to the new computer. Luego sigue el [procedimiento de la primera compilación de **AAPS**](../SettingUpAaps/BuildingAaps.md) en lugar de esta guía. La única diferencia es que, en lugar de crear un almacén de claves nuevo, puedes seleccionar el que has copiado en el ordenador nuevo.
```

## Resumen de la actualización a una nueva versión de AAPS con Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Si tienes problemas, consulta la página aparte [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Exporta tus ajustes

Exporta tus ajustes desde la versión de **AAPS** que tienes en el teléfono. Puede que no lo necesites, pero más vale prevenir.

Consulta la página [Crear y restaurar copias de seguridad](ExportImportSettings.md) si no recuerdas cómo hacerlo.

### Comprueba tu versión de Android Studio

La versión mínima necesaria se describe en las [instrucciones de compilación](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Si tu versión es más antigua, ¡[actualiza primero Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Actualiza tu copia local

* Abre tu proyecto AAPS existente con Android Studio. Puede que tengas que seleccionar tu proyecto. Haz (doble) clic en el proyecto AAPS.

  ![Android Studio - Seleccionar proyecto](../images/update/01_ProjectSelection.png)

* En la barra de menú de Android Studio, selecciona Git -> Fetch

   ![Menú de Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* Verás un mensaje en la esquina inferior derecha que indica que Fetch se ha realizado con éxito.

   ![Menú de Android Studio - Git - Fetch con éxito](../images/update/03_GitFetchSuccessful.png)

* Ahora, en la barra de menú, selecciona Git -> Pull

   ![Menú de Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Deja todas las opciones como están (origin/master) y selecciona Pull

   ![Android Studio - Git - diálogo Pull](../images/update/05_GitPullOptions.png)

* Espera mientras se descarga; lo verás como información en la barra inferior. Cuando termine, verás un mensaje de éxito.

  ```{note}
  ¡Los archivos actualizados pueden ser distintos! Esto no indica ningún problema.
  ```

   ![Android Studio - Pull con éxito](../images/update/06_GitPullSuccess.png)

* Gradle Sync se ejecutará para descargar algunas dependencias. Espera hasta que termine.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Comprueba la versión de JVM

Esta comprobación es especialmente recomendable si ya has compilado una versión anterior de **AAPS** en el mismo ordenador.

Consulta en las [instrucciones de compilación](#Building-APK-recommended-specification-of-computer-for-building-apk-file) la versión de JVM necesaria para la versión de **AAPS** que vas a compilar ahora. Luego sigue los pasos descritos en [Incompatible Gradle JVM](#incompatible-gradle-jvm) para asegurarte de que usas la versión correcta.

(Update-to-new-version-build-the-signed-apk)=
### Compila el APK firmado

Tu código fuente es ahora la versión publicada actual, y se han comprobado todos los requisitos previos. Es el momento de compilar el APK firmado como se describe en la [sección sobre compilar el APK firmado](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfiere e instala el APK
Tienes que transferir el APK a tu teléfono para poder instalarlo.

```{note}
Si has compilado con el mismo almacén de claves existente en Android Studio, no tienes que eliminar la app que ya tienes en el teléfono. Al instalar el APK, sigue las indicaciones para instalar la actualización.
En otros casos, como crear un almacén de claves nuevo en Android Studio para tu APK firmado, tienes que eliminar la app antigua antes de instalar el APK. **¡Asegúrate de exportar tus ajustes!**
```

Consulta las instrucciones para [transferir e instalar AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Donde Google aplica la [verificación de desarrolladores de Android](#android-developer-verification) (desde septiembre de 2026, según tu país), instala con [ADB](#android-developer-verification-adb) en lugar de tocar el archivo APK.

Continúa [aquí](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Solucionando problemas

Si algo sale mal, no te asustes.

¡Respira hondo!

Then check if your problem is already documented on the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

Si necesitas más ayuda, contacta con otros usuarios de **AAPS** en [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) o [Discord](https://discord.gg/4fQUWHZ4Mw).