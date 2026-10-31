# Transfert et installation de AAPS sur votre smartphone

Dans la section précédente, [Compilation d'**AAPS**](../SettingUpAaps/BuildingAaps.md), vous avez compilé l'application **AAPS** (un fichier .apk) sur un ordinateur.

Les étapes suivantes consistent à **transférer** le fichier APK d'**AAPS** (ainsi que les autres applications dont vous pouvez avoir besoin, comme BYODA, xDrip ou une autre application de réception MGC) vers votre smartphone Android, puis à **installer** la ou les applications. Une fois **AAPS** installé sur le smartphone, vous pourrez passer à la [**configuration de la boucle AAPS**](../SettingUpAaps/SetupWizard.md).

Cette page explique aussi la [vérification des développeurs Android](#android-developer-verification), un changement que Google déploie à partir de septembre 2026. Il concerne l'installation des applications que vous compilez vous-même. La page présente aussi les [méthodes d'installation gratuites](#android-developer-verification-free-methods) qui fonctionnent encore après ce changement.

```{contents} Table of contents
:depth: 1
:local: true
```

## Installer AAPS en appuyant sur le fichier APK

Aujourd'hui, vous installez **AAPS** en transférant le fichier APK sur votre téléphone, puis en l'ouvrant (en « appuyant » dessus). Il existe plusieurs façons de transférer le fichier APK d'**AAPS** de votre ordinateur vers le smartphone. Nous détaillons ici deux de ces possibilités :

* Option 1 - Utilisez votre Google drive (Gdrive)
* Option 2 - Utiliser un câble USB

Veuillez noter que le transfert par email peut être compliqué, nous vous déconseillons cette méthode.

```{admonition} Android developer verification
:class: warning
Google déploie la [vérification des développeurs Android](#android-developer-verification) à partir de septembre 2026 (d'abord au Brésil, en Indonésie, à Singapour et en Thaïlande ; dans le monde entier en 2027). Là où elle s'applique, l'installation d'un APK en appuyant sur le fichier – comme décrit dans les deux options ci-dessous – est bloquée. Dans ce cas, utilisez l'une des [méthodes d'installation gratuites](#android-developer-verification-free-methods) plus bas sur cette page.
```

### Option 1. Utiliser Google Drive pour transférer des fichiers

Ouvrez [Google.com](https://www.google.com/) dans votre navigateur web et connectez-vous à votre compte Google.

Sur le coin supérieur droit, sélectionnez l'application Drive dans le menu Google.

![Démarrer l'application Drive](../images/GoogleDriveInWebbrowser.png)

Cliquez sur **Nouveau** en haut à gauche (ou faites un clic droit sur une zone vide sous vos fichiers et dossiers) et choisissez **Importer un fichier**.

![Envoyer le fichier apk avec l'application Google Drive](../images/GoogleDriveUploadFile.png)

Vous devriez maintenant voir le fichier APK téléchargé sur Google Drive.

#### Utilisez l'application Google Drive pour ouvrir le fichier apk et lancer l'installation

Passez sur votre téléphone portable et lancez l'application Google Drive. Il s'agit d'une application installée par défaut, que vous retrouverez avec les autres applications Google ou en faisant une recherche sur le nom de l'application.

![démarrer l'application Google Drive](../images/GoogleDriveMobileAPPLaunch.png)

Lancez l'installation de l'apk en appuyant sur le nom du fichier dans l'application Google Drive sur le téléphone.

![lancer l'installation de l'apk](../images/GoogleDriveMobileUploadedAPK.png)

Si vous recevez un avertissement de sécurité indiquant que vous n'êtes pas autorisé à installer des applications depuis Google Drive pour le moment, appuyez sur « Paramètres » et autorisez-le juste pour ce court moment. Interdisez-le ensuite de nouveau, car le laisser activé en permanence est un risque de sécurité.

![Avertissement de sécurité Google Drive](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Avertissement de sécurité Google Drive](../images/GoogleDriveMobileSettingSecuritySetting.png)

Une fois l'installation terminée, cette étape est finie.

Vous devriez voir l'icône d'**AAPS** et pouvoir ouvrir l'application.

```{warning}
**AVERTISSEMENT DE SÉCURITÉ IMPORTANT**
Avez-vous pensé à interdire de nouveau l'installation depuis Google Drive ?
```

Continuez ensuite avec la [configuration de la boucle AAPS](../SettingUpAaps/SetupWizard.md).

### Option 2. Utiliser un câble USB pour transférer des fichiers

La deuxième façon de transférer le fichier apk d'AAPS est d'utiliser un [câble USB](https://support.google.com/android/answer/9064445?hl=en).

Transférez le fichier depuis son emplacement sur votre ordinateur vers le dossier "Downloads" sur le téléphone.

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Vous trouverez des explications sur Internet (_par ex._ [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)).

Une fois le fichier transféré par glisser-déposer, ouvrez le dossier « Téléchargements » sur le téléphone et appuyez sur le fichier apk d'AAPS :

![Le fichier apk dans le dossier Téléchargements](../images/install/install_01_downloads_apk.png)

La première fois, Android indique que le téléphone n'est pas autorisé à installer des applications inconnues provenant de cette source. Appuyez sur « **Paramètres** » :

![Avertissement de sécurité pour les applications inconnues](../images/install/install_02_unknown_apps_notice.png)

Activez « **Autoriser cette source** », puis revenez en arrière :

![Autoriser cette source activé](../images/install/install_04_unknown_apps_allowed.png)

Appuyez de nouveau sur le fichier apk et choisissez « **Installer** » :

![Demande d'installation](../images/install/install_05_install_prompt.png)

Quand l'installation est terminée, appuyez sur « **Ouvrir** » pour démarrer **AAPS**, ou sur « **Terminé** » pour l'ouvrir plus tard :

![Application installée](../images/install/install_07_app_installed.png)

```{warning}
**AVERTISSEMENT DE SÉCURITÉ IMPORTANT**
Pensez à désactiver de nouveau « Autoriser cette source » après l'installation, car le laisser activé en permanence est un risque de sécurité.
```

Continuez ensuite avec la [configuration de la boucle AAPS](../SettingUpAaps/SetupWizard.md).

(transferring-installing-play-protect-warning)=
## Avertissement de Google Play Protect

Quand vous installez **AAPS**, Google Play Protect peut vous avertir que l'application n'est pas sûre, qu'elle a été conçue pour une ancienne version d'Android et qu'elle n'inclut pas les dernières protections de la vie privée.

![Avertissement de Google Play Protect](../images/troubleshooting/InstallGPP.png)

C'est normal pour une application que vous avez compilée vous-même. Appuyez sur **Plus de détails**, puis sur **Installer quand même**.

Si l'installation est **bloquée** avec un message sur un développeur non vérifié (et pas seulement un avertissement), voir [Vérification des développeurs Android](#android-developer-verification) ci-dessous.

(android-developer-verification)=

## Vérification des développeurs Android

Google introduit la **vérification des développeurs Android** : sur la plupart des téléphones Android, les applications ne s'installeront que si elles ont été enregistrées auprès de Google par un développeur vérifié. Cela s'applique aussi aux applications installées à partir d'un fichier APK (« sideloading ») – c'est ainsi que vous installez l'application **AAPS** que vous avez compilée vous-même.

### Ce qui change

Quand vous installez **AAPS** sur un téléphone avec les services Google (un appareil Android « certifié » – presque tous les téléphones vendus avec le Play Store), Android vérifie si l'application provient d'un développeur enregistré auprès de Google. Sinon, l'installation normale en appuyant sur le fichier APK est bloquée.

**La vérification a lieu quand une application est installée ou mise à jour.** Elle ne supprime pas les applications déjà installées et en cours d'utilisation.

Google déploie ce changement progressivement :

| Quand             | Ce qui se passe                                                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Août 2026         | Les comptes développeur gratuits « à distribution limitée » sont ouverts dans le monde entier, et le « parcours avancé » (advanced flow) commence à arriver sur les téléphones      |
| 30 septembre 2026 | La vérification s'applique au **Brésil, en Indonésie, à Singapour et en Thaïlande**, pour les applications installées depuis Google Play et quelques autres magasins d'applications |
| 2027              | L'application s'étend au **reste du monde** et à **toutes les installations**, y compris les fichiers APK                                                                           |

Google publie les détails sur les pages [Android developer verification](https://developer.android.com/developer-verification), avec une [FAQ](https://developer.android.com/developer-verification/guides/faq). Google peut encore modifier les dates et les détails ; cette page sera mise à jour au fil du déploiement.

### Est-ce que cela me concerne ?

- **La compilation d'AAPS n'est pas du tout concernée.** La [compilation dans le navigateur](#browser-build), la [compilation avec Android Studio](ComputerBuild.md) et la [compilation en ligne de commande](CLIBuild.md) fonctionnent exactement comme avant, et votre keystore ne change pas.
- **Votre AAPS actuel continue de fonctionner.** La vérification n'a lieu que lors de l'installation ou de la mise à jour d'une application.
- **Si vous vivez au Brésil, en Indonésie, à Singapour ou en Thaïlande :** à partir du 30 septembre 2026, la vérification s'applique aux applications installées depuis Google Play et quelques autres magasins d'applications. Google indique que l'installation directe d'un fichier APK n'est pas concernée par cette première étape, donc **AAPS** devrait encore s'installer comme d'habitude. Préparez quand même dès maintenant l'une des [méthodes d'installation gratuites](#android-developer-verification-free-methods) ci-dessous, pour ne pas être pris au dépourvu si cela change.
- **Si vous vivez ailleurs :** rien ne change pour vous avant 2027, et ne rien faire pour l'instant est un choix tout à fait valable. Mais mettez en place l'une des [méthodes d'installation gratuites](#android-developer-verification-free-methods) ci-dessous tant que tout fonctionne : découvrir le blocage le jour où une mise à jour est refusée, avec l'attente de 24 heures du [parcours avancé](#android-developer-verification-advanced-flow) devant vous, est le mauvais moment.
- **Anciens téléphones :** la vérification s'applique aux téléphones sous Android 7 ou plus récent, c'est-à-dire à tous les téléphones capables de faire fonctionner **AAPS**.

(android-developer-verification-free-methods)=

## Méthodes gratuites pour installer AAPS

Vous n'avez **rien** à payer à Google pour continuer à utiliser **AAPS**. Il existe plusieurs méthodes gratuites ; choisissez celle qui correspond à votre situation.

```{admonition} Which method should I use?
:class: tip
- Vous avez un **ordinateur** (quelle que soit la façon dont vous avez compilé **AAPS**) : utilisez [ADB](#android-developer-verification-adb) ou, si vous préférez éviter la ligne de commande, l'[installateur web](#android-developer-verification-web). Les deux sont exemptés de la vérification, n'ont pas de limites et ne demandent pas de compte Google.
- Vous n'avez **pas d'ordinateur du tout** : utilisez le [parcours avancé](#android-developer-verification-advanced-flow) sur votre téléphone.
- Vous préférez vous enregistrer auprès de Google pour que l'installation normale (« appuyer sur l'APK ») continue de fonctionner : un [compte gratuit à distribution limitée](#android-developer-verification-limited-account) existe, mais il n'a pas été testé avec **AAPS**.
```

(android-developer-verification-adb)=

### Option 1 : Installer avec ADB (ordinateur nécessaire)

ADB (Android Debug Bridge) est l'outil officiel de Google pour installer des applications depuis un ordinateur sur un téléphone avec un câble USB. Google a confirmé que **les applications installées avec ADB ne demandent pas de vérification** – il n'y a pas de délai d'attente, pas de limite d'appareils et pas d'enregistrement.

Préparation unique :

1. Sur votre téléphone, activez les options pour les développeurs cachées : allez dans **Paramètres** > **À propos du téléphone** (sur certains téléphones **Informations sur le logiciel**) et appuyez sept fois sur **Numéro de build**, jusqu'à ce que le téléphone confirme que vous êtes développeur.
1. Revenez aux **Paramètres** principaux, ouvrez la nouvelle entrée **Options pour les développeurs** et activez le **Débogage USB**.
1. Sur votre ordinateur, vérifiez qu'ADB est disponible :
   - Si vous utilisez **Android Studio**, ADB est déjà installé avec lui.
   - Sinon, téléchargez les [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) gratuits de Google et décompressez le dossier. Aucune installation n'est nécessaire ; ADB est le programme `adb` dans ce dossier.

Installer (et plus tard mettre à jour) **AAPS** :

1. Connectez le téléphone à l'ordinateur avec un câble USB. Il n'est pas nécessaire de transférer d'abord le fichier APK sur le téléphone : ADB l'envoie directement depuis l'ordinateur.
1. Sur le téléphone, acceptez la demande **Autoriser le débogage USB ?** (la première fois seulement).
1. Sur l'ordinateur, ouvrez un terminal (invite de commandes) dans le dossier qui contient ADB et le fichier APK d'**AAPS**, et lancez :

   ```
   adb install -r app-full-release.apk
   ```

   Remplacez `app-full-release.apk` par le vrai nom de votre fichier APK. L'option `-r` met à jour un **AAPS** déjà installé en gardant toutes ses données et tous ses paramètres.

1. Attendez que `Success` s'affiche. **AAPS** est maintenant installé sur votre téléphone.

La même commande sert pour chaque mise à jour future. Les [pages Wear OS](../WearOS/WearOsSmartwatch.md) utilisent déjà ADB de la même façon pour installer l'application de la montre.

Si vous préférez ne pas utiliser de câble : sur Android 11 et plus récent, le **débogage sans fil** (aussi dans **Options pour les développeurs**) peut faire la même chose par Wi-Fi, après une association unique avec un code affiché sur le téléphone.

(android-developer-verification-web)=

### Option 2 : Installer depuis une page web (ordinateur, sans ligne de commande)

Si la ligne de commande n'est pas pour vous, une page web peut faire exactement ce que fait ADB, directement depuis votre navigateur. Comme elle communique avec le téléphone par le même mécanisme qu'ADB, elle bénéficie de la **même exemption de vérification** – mais il n'y a rien à télécharger, aucun dossier à décompresser et aucune commande à taper.

C'est la voie la plus simple si vous avez utilisé la [compilation dans le navigateur](#browser-build) et n'avez jamais ouvert de ligne de commande.

1. Activez le **Débogage USB** sur le téléphone (étapes 1 et 2 de la [méthode ADB](#android-developer-verification-adb) ci-dessus – réglage unique).
1. Ouvrez l'**[Installateur web AAPS](#web-installer)** dans votre navigateur.
1. Connectez le téléphone avec un câble USB et suivez les instructions de la page : connecter, choisir votre fichier APK, puis installer.

Trois choses à savoir :

- Cela fonctionne uniquement dans **Chrome, Edge ou Opera**. Firefox et Safari ne peuvent pas communiquer avec les appareils USB.
- Un seul programme à la fois peut utiliser la connexion ADB du téléphone, donc **fermez Android Studio** (ou tout autre programme qui utilise ADB) avant de vous connecter.
- Une page web connectée de cette façon obtient le contrôle total de votre téléphone. **Utilisez uniquement l'adresse ci-dessus**, venant de la documentation **AAPS** – jamais une page d'installation trouvée avec un moteur de recherche. L'installateur web **AAPS** fonctionne entièrement dans votre navigateur : votre fichier APK n'est envoyé nulle part.

```{admonition} No computer? A second phone works too
:class: tip
L'installateur web fonctionne aussi depuis **Chrome sur un autre téléphone Android** avec un câble USB-C vers USB-C – ainsi un parent peut installer **AAPS** sur le téléphone d'un enfant sans aucun ordinateur à la maison.
```

(android-developer-verification-advanced-flow)=

### Option 3 : Le « parcours avancé » sur votre téléphone (sans ordinateur)

Google propose une solution de secours pour les utilisateurs expérimentés qui comprennent les risques liés à l'installation d'applications non vérifiées, appelée **parcours avancé** (advanced flow). Google a commencé à la déployer sur les téléphones en août 2026, avant l'application de la vérification, vous pouvez donc la mettre en place dès maintenant. C'est un réglage unique sur le téléphone lui-même, qui **prend 24 heures** :

1. Activez les options pour les développeurs cachées (voir l'étape 1 de la méthode ADB ci-dessus), puis ouvrez **Paramètres** > **Options pour les développeurs** > **Apps from unverified developers** (applications de développeurs non vérifiés).
1. Activez **Allow apps from unverified developers** (autoriser les applications de développeurs non vérifiés). Le téléphone demande votre verrouillage d'écran pour confirmer que c'est bien vous.
1. Le téléphone vous demande si quelqu'un vous demande d'activer ce réglage, et explique que les banques, les administrations ou la police ne vous le demanderaient jamais. Lisez l'avertissement et confirmez que personne ne vous met la pression ou ne vous guide (c'est une protection contre les escrocs).
1. **Redémarrez votre téléphone.** Cela démarre une **période d'attente de 24 heures** unique.
1. Après 24 heures, revenez dans **Paramètres** > **Options pour les développeurs** > **Apps from unverified developers** pour terminer le réglage.
1. Choisissez d'autoriser les applications non vérifiées pendant **7 jours** ou **sans limite de durée**. Pour **AAPS**, choisissez **sans limite de durée**, sinon votre prochaine mise à jour sera bloquée une fois les 7 jours passés.

Après ce réglage, l'installation ou la mise à jour de l'APK d'**AAPS** fonctionne comme aujourd'hui, avec un avertissement en plus indiquant que l'application vient d'un développeur non vérifié – appuyez sur **Installer quand même**.

Bon à savoir :

- Vous pouvez ensuite désactiver de nouveau les **Options pour les développeurs** : le parcours avancé reste activé. Google ne donne pas non plus aux applications (comme les applications bancaires) de moyen de détecter que le parcours avancé est activé.
- Si vous désactivez le parcours avancé, l'installation **ou la mise à jour** d'**AAPS** est de nouveau bloquée (votre **AAPS** installé continue de fonctionner). Vous avez 10 minutes pour le réactiver ; après ce délai, la période d'attente de 24 heures recommence.
- Changer l'horloge du téléphone ne raccourcit pas la période d'attente, et ADB ne peut pas l'éviter.
- Google indique que votre choix suit votre compte Google sur vos autres appareils, donc un nouveau téléphone ne devrait pas demander une nouvelle attente de 24 heures.
- Si vous ne trouvez pas **Apps from unverified developers** dans les options pour les développeurs, votre téléphone n'a pas encore reçu la fonction. Elle est fournie par un composant du système appelé **Android Developer Verifier**, que Google déploie progressivement via le Play Store. Vous pouvez accélérer son arrivée en ouvrant **Android Developer Verifier** dans le Play Store.

```{note}
Google décrit ceci comme une première version et peut encore changer les écrans et les étapes ; cette section sera mise à jour avec des captures d'écran quand la version finale sera disponible.
```

(android-developer-verification-limited-account)=

### Option 4 : S'enregistrer auprès de Google (compte gratuit à distribution limitée)

Google propose un type de compte développeur **gratuit** pour les amateurs et l'usage personnel, appelé **compte à distribution limitée**, ouvert à tous depuis août 2026 :

- **Pas de pièce d'identité officielle** et **pas de frais** (contrairement au compte développeur payant, qui n'est pas nécessaire pour un usage personnel d'**AAPS**). Il vous faut un compte Google avec la validation en deux étapes, un profil de paiement Google avec votre nom légal et votre adresse, et une adresse e-mail de contact.
- Vous enregistrez le nom de package de votre application dans la console Android Developer de Google, et vous autorisez les téléphones sur lesquels elle peut être installée, jusqu'à **20 appareils**, par un échange (handshake) avec un code QR ou un lien entre le téléphone et la console.
- Une fois l'enregistrement fait, l'installation normale (en appuyant sur le fichier APK) fonctionne de nouveau sur les téléphones autorisés, sans ADB et sans le parcours avancé.
- Un compte à distribution limitée peut plus tard être transformé en compte complet, mais pas l'inverse.

```{warning}
Google n'a pas expliqué comment l'enregistrement fonctionne quand beaucoup de personnes compilent la même application open source : chaque **AAPS** compilé soi-même utilise le même nom de package (`info.nightscout.androidaps`) avec une clé de signature différente, et la FAQ de Google indique qu'un nom de package déjà utilisé par d'autres ne peut pas être réclamé directement et demande un examen supplémentaire. Le résultat d'un tel examen est inconnu, et le compte développeur payant (25 $ et une pièce d'identité officielle) n'aide pas ici : payer supprime seulement la limite de 20 appareils, pas l'examen du nom de package.

Pour cette raison, des instructions pas à pas ne peuvent pas encore être écrites. Cette section sera complétée quand l'enregistrement aura été testé avec **AAPS**. En attendant, ADB, l'installateur web et le parcours avancé ci-dessus sont des solutions fiables.
```

## Ce qui ne change pas

- La compilation d'**AAPS** par vous-même, avec l'une des trois [méthodes de compilation](BuildingAaps.md).
- Votre compte GitHub, votre dépôt de compilation (AAPS Builder) ou votre fork, et votre keystore.
- Votre application **AAPS** installée, vos paramètres et vos [objectifs](CompletingTheObjectives.md).
- Les téléphones sans services Google, et les [installations avec ADB](#android-developer-verification-adb) en général.

## Où obtenir de l'aide

1. **Lisez** la [FAQ de Google sur la vérification des développeurs](https://developer.android.com/developer-verification/guides/faq) pour les questions sur la vérification elle-même.
2. **Demandez** sur le canal *#AAPS* sur [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans l'un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md), si une installation est bloquée.
3. Quand vous demandez de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, votre pays et le message exact affiché quand l'installation échoue.

```{toctree}
:hidden:

Installateur web AAPS <WebInstaller.md>
```
