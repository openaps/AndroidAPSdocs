# Instructions de compilation en ligne de commande

```{admonition} For users familiar with the command-line and git
:class: note

L'option la plus simple pour compiler AAPS est la [Compilation dans le navigateur](./BrowserBuild.md).
```

Testé avec Fedora et Debian Linux ; les autres systèmes devraient fonctionner avec très peu d'ajustements.

## Prérequis

Consultez la version minimale de Java requise dans [ce tableau](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Installez le paquet OpenJDK adapté avec le gestionnaire de paquets du système. Par exemple, sous Debian, les paquets s'appellent `openjdk-21-jdk`. Il doit contenir les programmes `javac` et `keytool`.

Téléchargez le paquet *Android Command line tools* depuis la [page Android Studio](https://developer.android.com/studio#command-line-tools-only). Android Studio lui-même n'est pas nécessaire. Vous trouverez plus d'informations sur l'installation de ce paquet dans la [documentation de sdkmanager](https://developer.android.com/tools/sdkmanager). Une fois le paquet installé, vous devez définir manuellement deux [variables d'environnement](https://developer.android.com/tools/variables) : `ANDROID_HOME` et `PATH`. Enfin, exécutez `sdkmanager --licenses` pour terminer l'installation.

## Compiler AAPS avec le Gradle wrapper

### 1. Générer un fichier keystore Java pour signer AAPS

Si vous avez déjà un fichier keystore pour signer AAPS, réutilisez-le.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Vous aurez besoin du fichier keystore et de sa phrase de passe à chaque mise à jour d'AAPS.

### 2. Compiler le fichier APK d'AAPS

Clonez le [dépôt git](https://github.com/nightscout/AndroidAPS) s'il n'est pas encore cloné. AAPS utilise la branche master pour la dernière version stable ; vérifiez que vous êtes sur la branche ou le tag que vous voulez compiler.

Exécutez `./gradlew :app:assembleFullRelease` dans le dépôt. Il télécharge automatiquement Gradle et les dépendances, puis compile le code. Si la compilation réussit, vous devez avoir un APK non signé dans `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Il doit aussi avoir installé le programme `apksigner` dans `$ANDROID_HOME`. Mettez à nouveau à jour votre `PATH`.

### 3. Créer un fichier APK signé à partir du fichier non signé

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Allez dans votre répertoire personnel et créez un fichier APK signé :

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Vous avez maintenant `app-full-release-signed.apk`, prêt pour l'installation ou la mise à jour.
