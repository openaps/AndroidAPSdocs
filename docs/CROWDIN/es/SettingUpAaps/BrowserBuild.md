(browser-build)=

# Compilación en el navegador

Compilar AAPS con GitHub Actions.

**La versión mínima de AAPS compatible es la 3.3.2.1.**

## Compílala tú en lugar de descargarla

**La app AAPS (un archivo apk) no está disponible para descargar, debido a las normas sobre dispositivos médicos. Es legal compilar la app para tu propio uso, ¡pero no debes dar una copia a otras personas!**

Consulta la página de [preguntas frecuentes](../UsefulLinks/FAQ.md) para más detalles.

(Building-APK-without-a-computer)=

## Elige cómo compilar

Elige el método que corresponde al dispositivo desde el que compilas:

### En un teléfono Android: AAPS Builder (recomendado)

Una página de configuración te guía para crear tu propio repositorio privado de compilación en GitHub. No hay nada que instalar, no hay archivo de preparación y tú mismo inicias cada compilación. Descargas la app directamente desde GitHub. Google Drive es opcional.

Esto también funciona desde el navegador de un ordenador.

**→ [Compilar con AAPS Builder](BrowserBuildAapsBuilder.md)**

### En un ordenador o un iPhone / iPad: fork y archivo de preparación

Haces una copia (fork) del código fuente de AAPS en GitHub, creas tu almacén de claves (keystore) con un archivo de preparación, y la app compilada se guarda en tu Google Drive. Sigue los cuatro pasos de abajo.

```{note}
**¿Ya compilas con un fork?** Sigue actualizándolo como se describe en [Actualizar con un navegador (fork)](../Maintenance/UpdateBrowserBuild.md), o cambia a AAPS Builder. Para cambiar, primero saca una copia de tu almacén de claves de tu fork: consulta [Si vienes de la compilación en el navegador anterior](#aaps-builder-from-fork).
```

Tendrás que usar varias pestañas en tu navegador y pasar de una a otra. Ejemplo con Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Tendrás que pasar de una pestaña a otra: empieza con todas las pestañas cerradas para no perderte al cambiar de una a otra.
```

#### Qué necesitas

- Una **cuenta de Google**, para que la app compilada se pueda guardar en tu Google Drive.
- Una **cuenta de GitHub** (gratis): la creas en el paso 1.
- Un **navegador web** que pueda tener varias pestañas abiertas a la vez (abajo se usa Chrome).
- Una pequeña **herramienta para ejecutar el archivo de preparación**. La que necesitas depende del dispositivo desde el que compilas. Ahora no hay que instalar nada: el paso 2 te guía para tu dispositivo:
  - **Ordenador (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** ninguna app extra; usas la app Archivos y el navegador que ya vienen instalados.

#### Los pasos

La compilación en el navegador es una serie de decisiones. Sigue estos pasos en orden:

1. **[Crear tu fork de GitHub](BrowserBuildFork.md)**: haz tu copia personal del código fuente de AAPS.
2. **[Crear tu almacén de claves de firma](BrowserBuildKeystore.md)**: la decisión clave es generar un nuevo almacén de claves (opción 1) o subir el que ya tienes (opción 2); después sigue la página para tu dispositivo.
3. **[Autorizar Google Drive](BrowserBuildGoogleDrive.md)**: permite que GitHub guarde la app compilada en tu Google Drive.
4. **[Compilar el APK](BrowserBuildAPK.md)**: ejecuta el workflow de GitHub Actions y elige tu versión y variante.

Si tienes problemas, consulta **[Compilación en el navegador: solución de problemas](../GettingHelp/BrowserBuildTroubleshooting.md)**. Para operaciones opcionales con un fork, consulta [exportar tu almacén de claves](#ci-keystore-export) o [aplicar un commit con cherry-pick](#github-cherry-pick).

----

**Empieza con el [Paso 1 – Crear tu fork de GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Paso 1: Crear tu fork <BrowserBuildFork.md>
Paso 2: Crear tu almacén de claves <BrowserBuildKeystore.md>
Paso 3: Autorizar Google Drive <BrowserBuildGoogleDrive.md>
Paso 4: Compilar el APK <BrowserBuildAPK.md>
```
