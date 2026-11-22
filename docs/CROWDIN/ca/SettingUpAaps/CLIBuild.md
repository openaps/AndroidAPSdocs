# Instruccions de compilació des de la línia d'ordres

```{admonition} For users familiar with the command-line and git
:class: note

L'opció més senzilla per compilar AAPS és l'alternativa de la [Compilació al navegador](./BrowserBuild.md).
```

Provat amb Fedora i Debian Linux. Altres sistemes haurien de funcionar amb pocs canvis.

## Requisits

Consulteu la versió mínima de Java necessària a [aquesta taula](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Instal·leu el paquet OpenJDK adequat amb el gestor de paquets del sistema. Per exemple, a Debian els paquets tenen noms com `openjdk-21-jdk`. Ha d'incloure els binaris `javac` i `keytool`.

Descarregueu el paquet *Android Command line tools* de la [pàgina d'Android Studio](https://developer.android.com/studio#command-line-tools-only). No cal instal·lar Android Studio. Trobareu més informació sobre la instal·lació d'aquest paquet a la [documentació de sdkmanager](https://developer.android.com/tools/sdkmanager). Després d'instal·lar el paquet, heu de definir a mà dues [variables d'entorn](https://developer.android.com/tools/variables): `ANDROID_HOME` i `PATH`. Finalment, executeu `sdkmanager --licenses` per acabar la instal·lació.

## Compilar AAPS amb el Gradle wrapper

### 1. Generar un fitxer de magatzem de claus (keystore) de Java per signar AAPS

Si ja teniu un fitxer de magatzem de claus per signar AAPS, feu-lo servir de nou.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Necessitareu el fitxer del magatzem de claus i la contrasenya cada vegada que actualitzeu AAPS.

### 2. Compilar el fitxer APK d'AAPS

Cloneu el [repositori git](https://github.com/nightscout/AndroidAPS) si encara no l'heu clonat. AAPS fa servir la branca master per a l'última versió estable. Assegureu-vos que esteu a la branca o etiqueta (tag) que voleu compilar.

Executeu `./gradlew :app:assembleFullRelease` dins del repositori. Descarrega automàticament Gradle i les dependències, i després compila el codi. Quan la compilació acabi bé, tindreu un APK sense signar a `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. També hauria d'haver instal·lat un binari `apksigner` a `$ANDROID_HOME`. Actualitzeu de nou el vostre `PATH`.

### 3. Crear un fitxer APK signat a partir del no signat

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Aneu al vostre directori personal i creeu un fitxer APK signat:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Ara teniu `app-full-release-signed.apk` a punt per instal·lar o actualitzar.
