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
8. Decide whether you want to hide your AndroidAPS Uploader membership in your public Open Humans profile.
9. Cliquez sur le bouton 'Authorize project'.

.. image:: ../images/OHUploader2.png
  :alt: Open Humans Terms of Use + Login

10. En retournant à AAPS, vous verrez un message de connexion réussie.
11. Garder le plugin Open Humans Uploader et le téléphone activés pour que l'installation se termine.
12. Après avoir cliqué sur fermer, vous verrez votre identifiant de membre (ID). La taille de la file d'attente > 0 montre qu'il y a encore des données à télécharger.
13. Cliquez sur 'DECONNEXION' si vous voulez arrêter de télécharger des données vers Open Humans.
14. La notification Android vous informera sur le téléversement en cours.

.. image:: ../images/OHUploader3.png
  :alt: Open Humans finish setup

15. Vous pouvez gérer vos données en vous connectant sur le `site web Open Humans <https://www.openhumans.org>`_.

.. image:: ../images/OHWeb.png
  :alt: Open Humans management des données
     
Opportunités de partage
========================================
`Le projet 'OPEN' <https://www.open-diabetes.eu/>`_
---------------------------------------------------------------------------------------  
The 'OPEN' project brings together an international and intersectoral consortium of patient innovators, clinicians, social scientists, computer scientists and patient advocacy organizations in order to investigate various aspects of Do-it-Yourself Artificial Pancreas Systems (DIY APS) that are used by an increasing number of people with diabetes. For more details see their `website <https://www.open-diabetes.eu/>`_.

En septembre 2020, le projet 'OPEN' a lancé une `enquête <https://survey.open-diabetes.eu/>`_ incluant l'option de donner des données que vous avez téléchargées sur Open Humans. Un `tutoriel <https://open-diabetes.eu/en/open-survey/survey-tutorials/>`_ comment faire don de vos données au projet 'OPEN' est disponible sur leur site et dans le cadre de l'enquête.


`OpenAPS Data Commons <https://www.openhumans.org/activity/openaps-data-commons/>`_
---------------------------------------------------------------------------------------  
The OpenAPS Data Commons was created to enable a simple way to share data sets from the DIYAPS community for research. The data is shared both with traditional researchers who will create traditional research studies, and with groups or individuals from the community who want to review data as part of their own research projects. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AndroidAPS, Loop, and OpenAPS. 

Vous pouvez envoyer vos données dans Open Humans par l'un des trois moyens suivants : 

1. utilisez l'option de téléversement AndroidAPS pour télécharger vos données dans Open Humans
2. utilisez le transfert de données Nightscout pour déverser vos données dans Open Humans
3. téléchargez manuellement des fichiers de données dans Open Humans. 

Une fois que vous avez créé un compte et remonté vos données dans Open Humans, assurez-vous également de rejoindre OpenAPS Data Commons afin de donner vos données pour la recherche si vous le souhaitez.

Conditions d’Utilisation
========================================
This is an open source tool that will copy your data to `Open Humans <https://www.openhumans.org>`_. We retain no rights to share your data with third parties without your explicit authorization. The data the project and app receive are identified via a random user ID and will only be securely transmitted to an Open Humans account with your authorization of that process.
You can stop uploading and delete your upload data at any time via `www.openhumans.org <https://www.openhumans.org>`_. Beware that some projects that receive data may not support this.

Also see `Open Humans Terms of Use <https://www.openhumans.org/terms/>`_.

Data Privacy
========================================
Open Humans takes care of protecting your privacy by assigning a numerical ID to you for each project. This allows projects to recognize but no identify you. The Application ID uploaded by AndroidAPS is similar and only helps administrate the data. More information can be found here:

* `Règles d'utilisation des données Open Humans <https://www.openhumans.org/data-use/>`_
* `Open Humans GDPR <https://www.openhumans.org/gdpr/>`_


