# Actualizar a una nueva versión o rama

## Construyela tú mismo en lugar de descargarla

**AndroidAPS no está disponible como descarga debido a la regulación de los dispositivos mediales. ¡Es legal construir la aplicación para su propio uso, pero no debe dar una copia a los demás! Consulte la página [FAQ](../Getting-Started/FAQ.md) para obtener detalles.**

## Notas importantes

* As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.
* Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.
* [Windows 10 sistemas de 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) no son compatibles con Android Studio 3.5.1.
* If you are using xDrip make sure to [identify the receiver](../Configuration/xdrip#identify-receiver).
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Quick walk-through for experienced users

Please skip this paragraph if you update for the first time. The quick walk-through is for experienced users. Your next step would be to [install git](../Installing-AndroidAPS/git-install.rst) if you do not have it already.

If you already updated AAPS in previous versions and use a Windows PC you can update in four simple steps:

1. [Export your settings](../Usage/ExportImportSettings#how-to-export-settings) from the existing AAPS version on your phone to be on the save side
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)
4. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the patched Dexcom app from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Install git (if you don't have it)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Update your local copy

* Click: VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Click Pull (no changes in dialog field)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Generate signed APK

<!--- Text is maintained in page building-apk.md ---> In the menu select "Build" and then "Generate Signed Bundle / APK...". (The menu in Android Studio changed as of September 2018. En las versiones anteriores, seleccione en el menú "Build" y luego "Generar APK Firmado...".)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Esto es necesario porque Android tiene una regla que sólo acepta el código firmado para ejecutarse por razones de seguridad. Para obtener más información acerca de este tema, siga el enlace [aquí](https://developer.android.com/studio/publish/app-signing.html#generate-key) Seguridad es un tema profundo y complejo y no lo necesita ahora.

![Captura pantalla 39a](../images/Installation_Screenshot_39a.PNG)

En el recuadro de diálogo siguiente, seleccione "APK" en lugar de "Android App Bundle" y haga clic en el botón "Next".

![Captura pantalla 39b](../images/Installation_Screenshot_39b.PNG)

Seleccione "app" y haga clic en "Siguiente".

![Captura pantalla 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Seleccione "full" (o "fullRelease") como sabor para la aplicación generada. Select V1 "Jar Signature" (V2 es opcional) y haga clic en "Finish". La siguiente información puede ser importante para su uso posterior.

* 'Release' should be your default choice for "Build Type", 'Debug' is just for people coding.
* Select the build type you want to build. 
  * full / fullRelease (i.e. recommendations automatically enacted in closed looping)
  * openloop (i.e. recommendations given to user to manually enact)
  * pumpcontrol (i.e. remote control for pump, no looping)
  * nsclient (i.e. looping data of another user is displayed and careportal entries can be added)

![Captura pantalla 44](../images/Installation_Screenshot_44.png)

En el registro de sucesos, verá que el APK firmado se ha generado satisfactoriamente.

![Captura pantalla 45](../images/Installation_Screenshot_45.png)

Pulse el enlace "locate" en el registro de sucesos.

![Captura pantalla 46](../images/Installation_Screenshot_46.png)

## Transfer APK to smartphone

**[Export your settings](../Usage/ExportImportSettings#how-to-export-settings) from the existing AAPS version on your phone to be on the save side.**

<!--- Text is maintained in page building-apk.md ---> Se abrirá una ventana del gestor de archivos. Puede parecer un poco diferente en su sistema, ya que estoy usando Linux. En Windows estará el Explorador de archivos y en Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. You can do it on your preferred way:

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Select "Allow from this source". After the installation, you can disable it again.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Solución de problemas

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).