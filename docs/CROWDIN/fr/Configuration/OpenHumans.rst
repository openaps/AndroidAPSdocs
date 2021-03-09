Téléversement Open Humans
****************************************
Donner vos données pour la science
========================================
Vous pouvez aider la communauté en faisant don de vos données à des projets de recherche ! Cela aide les scientifiques à avancer, à développer de nouvelles idées scientifiques et à élargir les esprits concernant les systèmes de boucle fermée open source.
AndroidAPS est prêt à synchroniser vos données sur `Open Humans <https://www.openhumans.org>`_, une plateforme vous permettant de télécharger, connectez et stockez vos données personnelles – telles que la génétique, l'activité et la santé. 

Vous gardez le contrôle total sur l'utilisation de vos données et sur les projets que vous voulez soutenir en leur donnant accès à vos données. Selon les projets que vous avez rejoint, les données sont évaluées et utilisées par eux de différentes manières.

Les données suivantes seront envoyées sur votre compte Open Humans : 

* Valeurs de Glycémie
* Événements Careportal (sauf les notes)
* Bolus étendus
* Changements de profil
* Doses quotidiennes totales
* Basales temporaires
* Cibles temporaires
* Préférences
* Version de l'application
* Modèle d’appareil 
* Dimensions de l'écran

Les informations secrètes ou privées telles que votre URL Nightscout ou votre API secret ne seront pas téléchargées.

Paramètres
========================================
1. Create your account on `Open Humans <https://www.openhumans.org>`_ if not already done.

Créez votre compte sur `Open Humans <https://www.openhumans.org>`_ si ce n'est pas déjà fait. Vous pouvez réutiliser vos comptes Google ou Facebook existants si vous le souhaitez.
2. Activez le plugin “Open Humans” dans le `Générateur de configuration <../Configuration/Config-Builder.html>`_.
3. Ouvrez son réglage en utilisant le bouton roue crantée. Vous pouvez restreindre le téléversement au périodes où le téléphone utilise le Wi-Fi et/ou est en charge. 
4. Ouvrez le Plugin Open Humans (dans l'onglet OH ou via le menu hamburger) et cliquez sur 'CONNEXION'.

.. image:: ../images/OHUploader1.png
  :alt: Configuration Open Humans
    
5. Lisez attentivement les informations fournies à propos du téléversement Open Humans et les conditions d'utilisation. 
6. Confirmez en cochant la case et cliquez sur 'CONNEXION'.
7. Le site web Open Humans sera ouvert. Veuillez vous connecter avec vos identifiants.
8. Décidez si vous voulez cacher votre abonnement AndroidAPS dans votre profil public Open Humans.
9. Cliquez sur le bouton 'Authorize project'.

.. image:: ../images/OHUploader2.png
  :alt: Conditions d'utilisation d'Open Humans + Connexion

10. En retournant à AAPS, vous verrez un message de connexion réussie.
11. Garder le plugin Open Humans Uploader et le téléphone activés pour que l'installation se termine.
12. Après avoir cliqué sur fermer, vous verrez votre identifiant de membre (ID). La taille de la file d'attente > 0 montre qu'il y a encore des données à télécharger.
13. Cliquez sur 'DECONNEXION' si vous voulez arrêter de télécharger des données vers Open Humans.
14. La notification Android vous informera sur le téléversement en cours.

.. image:: ../images/OHUploader3.png
  :alt: Open Humans fin de la configuration

15. Vous pouvez gérer vos données en vous connectant sur le `site web Open Humans <https://www.openhumans.org>`_.

.. image:: ../images/OHWeb.png
  :alt: Open Humans management des données
     
Opportunités de partage
========================================
`Le projet 'OPEN' <https://www.open-diabetes.eu/>`_
---------------------------------------------------------------------------------------  
Le projet "OPEN" rassemble un consortium international et intersectoriel de patients innovateurs, de médecins, de spécialistes des sciences sociales, d'informaticiens et d'organisations de défense des patients afin d'étudier les divers aspects des systèmes de pancréas artificiels à faire soi-même (DIY APS) qui sont utilisés par un nombre croissant de personnes atteintes de diabète. Pour plus de détails, voir leur `site web <https://www.open-diabetes.eu/>`_.

En septembre 2020, le projet 'OPEN' a lancé une `enquête <https://survey.open-diabetes.eu/>`_ incluant l'option de donner des données que vous avez téléchargées sur Open Humans. Un `tutoriel <https://open-diabetes.eu/en/open-survey/survey-tutorials/>`_ comment faire don de vos données au projet 'OPEN' est disponible sur leur site et dans le cadre de l'enquête.


`OpenAPS Data Commons <https://www.openhumans.org/activity/openaps-data-commons/>`_
---------------------------------------------------------------------------------------  
OpenAPS Data Commons a été créé pour permettre facilement de partager les jeux de données de la communauté DIYAPS pour la recherche. Les données sont partagées à la fois avec des chercheurs traditionnels qui créeront des études de recherche traditionnelles et avec des groupes ou des individus de la communauté qui souhaitent examiner les données dans le cadre de leurs propres projets de recherche. OpenAPS Data Commons utilise la plateforme "Open Humans" pour permettre aux gens de télécharger et de partager facilement leurs données depuis les DIYAPS, y compris AndroidAPS, Loop et OpenAPS. 

Vous pouvez envoyer vos données dans Open Humans par l'un des trois moyens suivants : 

1. utilisez l'option de téléversement AndroidAPS pour télécharger vos données dans Open Humans
2. utilisez le transfert de données Nightscout pour déverser vos données dans Open Humans
3. téléchargez manuellement des fichiers de données dans Open Humans. 

Une fois que vous avez créé un compte et remonté vos données dans Open Humans, assurez-vous également de rejoindre OpenAPS Data Commons afin de donner vos données pour la recherche si vous le souhaitez.

Conditions d’Utilisation
========================================
Ceci est un outil open source qui copiera vos données dans `Open Humans <https://www.openhumans.org>`_. Nous ne nous réservons aucun droit de partager vos données avec des tiers sans votre autorisation explicite. Les données que le projet et l'application reçoivent sont identifiées via un identifiant utilisateur aléatoire et ne seront transmises de manière sécurisée à un compte Open Humans qu'avec votre autorisation.
Vous pouvez arrêter le téléchargement et supprimer vos données à tout moment via `www.openhumans.org <https://www.openhumans.org>`_. Ayez conscience que certains projets qui reçoivent les données ne le supportent pas.

Voir aussi les `Conditions d'utilisation Open Humans <https://www.openhumans.org/terms/>`_.

Protection des données
========================================
Open Humans s'occupe de la protection de votre vie privée en vous assignant un identifiant numérique pour chaque projet. Cela permet aux projets de vous reconnaître mais pas vous identifier. L'ID de l'application téléchargé par AndroidAPS est similaire et ne sert qu'à administrer les données. Plus d'informations peuvent être trouvées ici :

* `Règles d'utilisation des données Open Humans <https://www.openhumans.org/data-use/>`_
* `Open Humans GDPR <https://www.openhumans.org/gdpr/>`_


