# Envoi vers Open Humans

## Donner vos données pour la science

Vous pouvez aider la communauté en faisant don de vos données à des projets de recherche ! This helps scientists to pay it forward, develop new scientific ideas and make open source closed loop systems better known. AAPS est prêt à synchroniser vos données avec [Open Humans](https://www.openhumans.org), une plateforme qui vous permet d'envoyer, de connecter et de stocker vos données personnelles – comme des données génétiques, d'activité et de santé.

Vous gardez le contrôle total sur l'utilisation de vos données et sur les projets que vous voulez soutenir en leur donnant accès à vos données. Selon les projets que vous avez rejoints, les données sont évaluées et utilisées par eux de différentes manières et dans une mesure différente.

Les données suivantes seront envoyées sur votre compte Open Humans :

- Valeurs de glycémie
- Événements Careportal (sauf les notes)
- Bolus étendus
- Changements de profil
- Doses journalières totales
- Débits de basal temporaires
- Cibles temporaires
- Préférences
- Version de l'application
- Modèle d’appareil
- Dimensions de l'écran

Les informations secrètes ou privées, comme votre URL Nightscout ou votre API secret, ne seront pas envoyées.

## Configuration

1. Créez votre compte sur [Open Humans](https://www.openhumans.org) si ce n'est pas déjà fait. Vous pouvez réutiliser vos comptes Google ou Facebook existants si vous le souhaitez.
2. Activez le plugin **Open Humans** dans [**Configuration** > **Communication**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans activé dans Configuration > Communication](../images/OHUploader1.png)

3. Appuyez sur **Paramètres** sur la carte **Open Humans**. Vous pouvez limiter les envois aux moments où le téléphone utilise le Wi-Fi (**WiFi uniquement**) et/ou est en charge (**Charge uniquement**).

![Paramètres Open Humans avec WiFi uniquement et Charge uniquement](../images/OHUploader_settings.png)

4. Appuyez sur **Ouvrir le plugin** sur la carte **Open Humans**, puis appuyez sur **Configuration**.

![Écran du plugin Open Humans avec le bouton Configuration](../images/OHUploader_setup.png)

5. Sur l'écran **Bienvenue à Open Humans**, appuyez sur **Suivant**. Lisez attentivement l'écran **Consentement** : il montre les conditions d'utilisation et les données qui sont envoyées et celles qui ne le sont pas.
6. Activez **Je comprends et je suis d'accord.** (1) et appuyez sur **Se connecter à Open Humans** (2).

![Écrans Bienvenue et Consentement d'Open Humans dans AAPS](../images/OHUploader2.png)

7. Le site web Open Humans sera ouvert. Veuillez vous connecter avec vos identifiants.
8. Choisissez si vous voulez cacher votre participation à AAPS Uploader dans votre profil public Open Humans (1).
9. Cliquez sur **Authorize project** (autoriser le projet) (2).

![Connexion et autorisation du projet sur le site web Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Les captures d'écran ci-dessus montrent une ancienne version du site web Open Humans et utilisent encore l'ancien nom du projet **AndroidAPS Uploader**. Les étapes sont les mêmes.
```

10. De retour dans **AAPS**, l'écran **Touche finale** vous demande si vous voulez continuer. Appuyez sur **Procéder**.
11. Attendez que **Nous avons terminé !** s'affiche, puis appuyez sur **Fermer**. À partir de maintenant, votre téléphone envoie des données en arrière-plan de temps en temps.
12. L'écran du plugin **Open Humans** affiche maintenant votre **ID utilisateur**. Appuyez sur **Envoyer maintenant** si vous voulez démarrer un envoi tout de suite.
13. Appuyez sur **Déconnexion** si vous voulez arrêter l'envoi de données vers Open Humans.
14. La notification Android vous informera sur l'envoi en cours.

![Open Humans : fin de la configuration](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, les écrans de confirmation sont **Touche finale** et **Nous avons terminé !**, il n'y a pas de taille de file d'attente, et les boutons sont **Envoyer maintenant** et **Déconnexion**.
```

15. Vous pouvez gérer vos données en vous connectant sur le [site web Open Humans](https://www.openhumans.org).

![Open Humans : gestion des données](../images/OHWeb.png)

## Opportunités de partage

### [Le projet 'OPEN'](https://www.open-diabetes.eu/)

Le projet "OPEN" rassemble un consortium international et intersectoriel de patients innovateurs, de médecins, de spécialistes des sciences sociales, d'informaticiens et d'organisations de défense des patients afin d'étudier les divers aspects des systèmes de pancréas artificiels à faire soi-même (DIY APS) qui sont utilisés par un nombre croissant de personnes atteintes de diabète. Pour plus de détails, voir leur [site web](https://www.open-diabetes.eu/).

In September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. Un [tutoriel](https://open-diabetes.eu/en/open-survey/survey-tutorials/) sur comment faire don de vos données au projet 'OPEN' est disponible sur leur site et dans le cadre de l'enquête.

### [Données communes OpenAPS](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons a été créé pour permettre facilement de partager les jeux de données de la communauté DIYAPS pour la recherche. Les données sont partagées à la fois avec des chercheurs traditionnels qui créeront des études de recherche traditionnelles et avec des groupes ou des individus de la communauté qui souhaitent examiner les données dans le cadre de leurs propres projets de recherche. OpenAPS Data Commons utilise la plateforme 'Open Humans' pour permettre aux personnes d'envoyer et de partager facilement leurs données des systèmes DIYAPS, dont AAPS, Loop et OpenAPS.

Vous pouvez envoyer vos données dans Open Humans par l'un des trois moyens suivants :

1. utiliser l'option d'envoi d'AAPS pour envoyer vos données dans Open Humans
2. utilisez le transfert de données Nightscout pour envoyer vos données dans Open Humans
3. envoyer manuellement des fichiers de données dans Open Humans.

Une fois que vous avez créé un compte et remonté vos données dans Open Humans, assurez-vous également de rejoindre OpenAPS Data Commons afin de donner vos données pour la recherche si vous le souhaitez.

## Conditions d’Utilisation

Ceci est un outil open source qui copiera vos données dans [Open Humans](https://www.openhumans.org). Nous ne nous réservons aucun droit de partager vos données avec des tiers sans votre autorisation explicite. Les données que le projet et l'application reçoivent sont identifiées via un identifiant utilisateur aléatoire et ne seront transmises de manière sécurisée à un compte Open Humans qu'avec votre autorisation. Vous pouvez arrêter l'envoi et supprimer vos données envoyées à tout moment via [www.openhumans.org](https://www.openhumans.org). Attention : certains projets qui reçoivent les données ne le permettent peut-être pas.

Voir aussi les [Conditions d'utilisation Open Humans](https://www.openhumans.org/terms/).

## Protection des données

Open Humans s'occupe de la protection de votre vie privée en vous assignant un identifiant numérique pour chaque projet. Cela permet aux projets de vous reconnaître, mais pas de vous identifier. L'ID d'application envoyé par AAPS fonctionne de la même façon et sert seulement à gérer les données. Plus d'informations peuvent être trouvées ici :

- [Règles d'utilisation des données Open Humans](https://www.openhumans.org/data-use/)
- [Open Humans et RGPD](https://www.openhumans.org/gdpr/)
