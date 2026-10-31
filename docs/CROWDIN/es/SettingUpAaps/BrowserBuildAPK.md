(github-build-apk)=

# Compilación en el navegador – Paso 4: compilar el APK

```{note}
Este es el **Paso 4** de la [Compilación en el navegador](BrowserBuild.md). Primero completa el [Paso 3 – Autorizar Google Drive](BrowserBuildGoogleDrive.md).
```

## GitHub Actions AAPS-CI para compilar el APK de AAPS
 - Adecuado para usuarios en general.

```{tab-set}

:::{tab-item} Wiki
### Ejecuta el workflow para compilar el APK firmado

1. En tu copia de AndroidAPS en GitHub, selecciona Actions.
2. Despliega All Workflows.
3. Selecciona AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Desplázate hacia abajo y toca Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Deja **Use workflow from** en la rama master. En **Select AAPS Version**, selecciona la versión de **AAPS** que quieres compilar (normalmente la más reciente). Selecciona la [variante](#browserbuild-variant) (fullRelease) y toca Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Verás el mensaje Workflow run was successfully requested. Actualiza la página del navegador y podrás seguir el progreso de la compilación. Cuando la acción termine, la acción AAPS CI mostrará una marca verde. Has compilado con éxito la versión actualizada de Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Instala el APK de AAPS

1. Abre tu Google Drive
2. Entra en AAPS, selecciona la carpeta de la nueva versión y encontrarás la versión para el teléfono y la versión para Android Wear.

![Google Drive Location](../images/update/CI/GitHubActions5.png)
:::

:::{tab-item} Vídeo
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## Selección de la versión a compilar

**Solo las versiones de AAPS 3.3.2.1 y superiores se pueden compilar con el método del navegador.**

Toca **Select AAPS Version** y elige la versión que quieres compilar. La versión más reciente está arriba de la lista.

![Lista Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Selección de la variante de compilación

*Nota: se compilan automáticamente las dos apps, la de Android y la de Android Wear.*

  - Selecciona la variante que necesitas:
    - fullRelease: para el uso normal con bomba, con todas las funciones.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): para cuidadores (requiere [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` compila **AAPSClient3**, disponible desde la versión 4.0 de **AAPS** (consulta [Acerca de AAPSClient, AAPSClient2 y AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: para sustituir la app o el controlador de tu bomba

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Las variantes que terminan en «Debug» indican que el APK se compilará en modo de depuración, lo que sirve a los desarrolladores para buscar errores.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Cuando la compilación termina con éxito, el APK se guarda en tu Google Drive. Continúa con [Transferir e instalar AAPS](TransferringAndInstallingAaps.md).

```{note}
Desde septiembre de 2026, la [verificación de desarrolladores de Android](#android-developer-verification) de Google puede bloquear la instalación del APK al tocar el archivo, según tu país. En esa página se explican soluciones gratuitas.
```

Si la compilación falla, primero [averigua qué salió mal en el log de compilación](#aaps-ci-read-the-logs) y luego consulta [Compilación en el navegador: solución de problemas](../GettingHelp/BrowserBuildTroubleshooting.md). Para incluir un commit concreto en tu compilación, consulta [aplicar un commit con cherry-pick](#github-cherry-pick).
