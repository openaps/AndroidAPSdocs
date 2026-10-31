# Instrucciones para compilar con la línea de comandos

```{admonition} For users familiar with the command-line and git
:class: note

La opción más sencilla para compilar AAPS es la alternativa de [Compilación en el navegador](./BrowserBuild.md).
```

Probado con Fedora y Debian Linux; otros sistemas deberían funcionar con pequeños ajustes.

## Requisitos

Consulta la versión mínima de Java necesaria en [esta tabla](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Instala el paquete OpenJDK adecuado con el gestor de paquetes del sistema. Por ejemplo, en Debian los paquetes tienen nombres como `openjdk-21-jdk`. Debe incluir los binarios `javac` y `keytool`.

Descarga el paquete *Android Command line tools* desde la [página de Android Studio](https://developer.android.com/studio#command-line-tools-only). No necesitas Android Studio. Hay más información sobre cómo instalar este paquete en la [documentación de sdkmanager](https://developer.android.com/tools/sdkmanager). Después de instalar el paquete, debes configurar a mano dos [variables de entorno](https://developer.android.com/tools/variables): `ANDROID_HOME` y `PATH`. Por último, ejecuta `sdkmanager --licenses` para terminar la instalación.

## Compilar AAPS con el Gradle wrapper

### 1. Generar un archivo de almacén de claves (keystore) de Java para firmar AAPS

Si ya tienes un archivo de almacén de claves para firmar AAPS, vuelve a usarlo.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Necesitarás el archivo de almacén de claves y su contraseña cada vez que actualices AAPS.

### 2. Compilar el archivo APK de AAPS

Clona el [repositorio git](https://github.com/nightscout/AndroidAPS) si todavía no lo has clonado. AAPS usa la rama master para la última versión estable; asegúrate de que estás en la rama/etiqueta (tag) que quieres compilar.

Ejecuta `./gradlew :app:assembleFullRelease` en el repositorio. Descarga automáticamente Gradle y las dependencias, y luego compila el código. Si la compilación termina bien, deberías tener un APK sin firmar en `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. También debería haber instalado un binario `apksigner` en `$ANDROID_HOME`. Actualiza de nuevo tu `PATH`.

### 3. Crear un archivo APK firmado a partir del no firmado

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Ve a tu directorio personal (home) y crea un archivo APK firmado:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Ahora tienes `app-full-release-signed.apk` listo para instalar o actualizar.
