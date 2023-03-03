# Installation manuelle du service Google Play pour Sony Smartwatch 3

La montre Sony Smartwatch 3 est l'une des plus populaires utilisée avec AAPS. Malheureusement, Google a abandonné la prise en charge des appareils sous Wear OS 1.5 à l'automne 2020. Cela entraîne des problèmes lors de l'utilisation de Sony SW3 avec AndroidAPS 2.7 et plus.

La solution de contournement suivante devrait prolonger la durée d'utilisation de la Smartwatch 3, mais gardez à l'esprit que le besoin de passer à une nouvelle montre connectée viendra tôt ou tard.

## 1. Téléchargez la dernière version de Google Services pour Wear OS

- En utilisant le [site web apkmirror](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) vous pouvez trouver la dernière apk pour "Google Play Services (Wear OS)".

  Architecture : armeabi-v7a, version minimale : Android 6.0+, Écran DPI : nodpi

- Vous devez vérifer 2 choses :

  - Est-ce la dernière version ?
  - Est-elle compatible avec Android 6.0+ (comme c'est la version Wear OS d'Android, 7.0+ et plus ne fonctionnera pas) ?

- Tôt ou tard, Google va définitivement abandonner Android 6.0. Quand cela arrivera, la dernière version ne sera plus disponible pour Android 6.0+, donc ce sera la fin.

## 2. Téléchargez / Installez les outils de débogage adb sur votre ordinateur

- Il y a plusieurs façons d'installer l'outil de débogage adb.
- Il est recommandé d'utiliser [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools) : téléchargez juste le fichier zip et décompressez le vers le répertoire de votre choix.

## 3. Activez les options de débogage ADB sur votre montre

- Activez le mode développeur en allant dans Paramètres --> À propos --> Numéro de build
- Cliquez dessus 7 fois.
- Maintenant, allez dans Paramètres --> Options développeur --> Débogage ADB (activer)

## 4. Connectez votre montre à votre ordinateur

- Ensuite, branchez votre smartwatch au PC.
- Renommez le dernier APK téléchargé des Services Google en utilisant un nom court et simple (par ex. SW3fix.apk).
- Placez cet APK dans le répertoire de votre outil adb (dans notre cas : le répertoire où ont été décompressés les outils de plate-forme SDK).
- Open Windows terminal using command „cmd“ in Windows start menu.
- Dans la fenêtre "terminal", allez dans le répertoire qui contient l'outil adb et le fichier apk des Services Google (tapez la commande "cd \[votre chemin\]", par ex. "cd C:UsersSWR50loopersdktools").
- Tapez ensuite "adb devices".
- Au bout d'un moment, vous devriez obtenir une demande d'autorisation de débogage sur votre montre : accepter.
- Dans le terminal, vous devriez maintenant voir quelque chose qui ressemble à "14452D11F536B52 device" lorsque vous tapez à nouveau "adb devices".
- Si vous voyez "non autorisé" ou autre, vous n'êtes pas prêt pour l'étape suivante, revenez en arrière et réessayez.
- Si vous avez du mal à cette étape, vous aurez peut-être besoin de drivers spécifiques pour votre montre. Google sera votre meilleur ami à ce stade.
- Puis attendez, l'installation peut prendre plusieurs minutes.

## 5. Envoyer l'application à votre montre

- Dans le terminal, entrez cette commande "adb install -r -g aplicationname.apk" (donc dans notre cas "adb install -r -g SW3fix.apk").

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Commande Terminal
  ```

- Attendez environ 4–5 minutes pour que l'installation se termine.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Installation réussie du terminal
  ```

- Une fois terminé, redémarrez votre montre et vous devriez voir que les applications commencent à se synchroniser rapidement.
