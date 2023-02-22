# Téléversement Open Humans

## Donner vos données pour la science

Vous pouvez aider la communauté en faisant don de vos données à des projets de recherche ! Cela aide les scientifiques à avancer, à développer de nouvelles idées scientifiques et à élargir les esprits concernant les systèmes de boucle fermée open source. AndroidAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Vous gardez le contrôle total sur l'utilisation de vos données et sur les projets que vous voulez soutenir en leur donnant accès à vos données. Selon les projets que vous avez rejoint, les données sont évaluées et utilisées par eux de différentes manières.

Les données suivantes seront envoyées sur votre compte Open Humans :

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Profile switches
- Total daily doses
- Temporary basals
- Temp targets
- Préférences
- Application version
- Device model
- Screen dimensions

Les informations secrètes ou privées telles que votre URL Nightscout ou votre API secret ne seront pas téléchargées.

## Paramètres

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Vous pouvez réutiliser vos comptes Google ou Facebook existants si vous le souhaitez.
2. Enable the “Open Humans” plugin in [Config Builder](../Configuration/Config-Builder.md).
3. Ouvrez son réglage en utilisant le bouton roue crantée. Vous pouvez restreindre le téléversement au périodes où le téléphone utilise le Wi-Fi et/ou est en charge.
4. Ouvrez le Plugin Open Humans (dans l'onglet OH ou via le menu hamburger) et cliquez sur 'CONNEXION'.

```{image} ../images/OHUploader1.png
:alt: Configuration Open Humans
```

5. Lisez attentivement les informations fournies à propos du téléversement Open Humans et les conditions d'utilisation.
6. Confirmez en cochant la case et cliquez sur 'CONNEXION'.
7. Le site web Open Humans sera ouvert. Veuillez vous connecter avec vos identifiants.
8. Décidez si vous voulez cacher votre abonnement AndroidAPS dans votre profil public Open Humans.
9. Cliquez sur le bouton 'Authorize project'.

```{image} ../images/OHUploader2.png
:alt: Conditions d'utilisation d'Open Humans + Connexion
```

10. En retournant à AAPS, vous verrez un message de connexion réussie.
11. Garder le plugin Open Humans Uploader et le téléphone activés pour que l'installation se termine.
12. Après avoir cliqué sur fermer, vous verrez votre identifiant de membre (ID). Queue sizes > 0 shows that there is still data to be uploaded.
13. Cliquez sur 'DECONNEXION' si vous voulez arrêter de télécharger des données vers Open Humans.
14. La notification Android vous informera sur le téléversement en cours.

```{image} ../images/OHUploader3.png
:alt: Open Humans fin de la configuration
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Open Humans management des données
```

## Opportunités de partage

### [The 'OPEN' project](https://www.open-diabetes.eu/)

Le projet "OPEN" rassemble un consortium international et intersectoriel de patients innovateurs, de médecins, de spécialistes des sciences sociales, d'informaticiens et d'organisations de défense des patients afin d'étudier les divers aspects des systèmes de pancréas artificiels à faire soi-même (DIY APS) qui sont utilisés par un nombre croissant de personnes atteintes de diabète. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons a été créé pour permettre facilement de partager les jeux de données de la communauté DIYAPS pour la recherche. Les données sont partagées à la fois avec des chercheurs traditionnels qui créeront des études de recherche traditionnelles et avec des groupes ou des individus de la communauté qui souhaitent examiner les données dans le cadre de leurs propres projets de recherche. OpenAPS Data Commons utilise la plateforme "Open Humans" pour permettre aux gens de télécharger et de partager facilement leurs données depuis les DIYAPS, y compris AndroidAPS, Loop et OpenAPS.

Vous pouvez envoyer vos données dans Open Humans par l'un des trois moyens suivants :

1. utilisez l'option de téléversement AndroidAPS pour télécharger vos données dans Open Humans
2. utilisez le transfert de données Nightscout pour déverser vos données dans Open Humans
3. téléchargez manuellement des fichiers de données dans Open Humans.

Une fois que vous avez créé un compte et remonté vos données dans Open Humans, assurez-vous également de rejoindre OpenAPS Data Commons afin de donner vos données pour la recherche si vous le souhaitez.

## Conditions d’Utilisation

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). Nous ne nous réservons aucun droit de partager vos données avec des tiers sans votre autorisation explicite. Les données que le projet et l'application reçoivent sont identifiées via un identifiant utilisateur aléatoire et ne seront transmises de manière sécurisée à un compte Open Humans qu'avec votre autorisation. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Ayez conscience que certains projets qui reçoivent les données ne le supportent pas.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Protection des données

Open Humans s'occupe de la protection de votre vie privée en vous assignant un identifiant numérique pour chaque projet. Cela permet aux projets de vous reconnaître mais pas vous identifier. L'ID de l'application téléchargé par AndroidAPS est similaire et ne sert qu'à administrer les données. Plus d'informations peuvent être trouvées ici :

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
