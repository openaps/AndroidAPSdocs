Bienvenue dans la documentation de AndroidAPS
***************************************

.. image:: images/modules-female.png
  :alt: Components

AndroidAPS est une application open source pour les personnes vivant avec un diabète insulino-dépendant et qui agit comme un pancréas artificiel (APS) sur les smartphones Google Android. Les principaux composants sont différents algorithmes logiciels de openAPS qui visent à reproduire ce que fait un pancréas vivant : maintenir la glycémie dans des limites de santé en utilisant un dosage automatisé d'insuline. De plus, il vous faut une pompe à insuline compatible approuvée FDA/CE et un capteur de Mesure de Glycémies en Continu (MGC). 

L'application n'utilise PAS d'auto-apprentissage par de l'intelligence artificielle. A la place, les calculs d'AndroidAPS sont basés sur un algorithme de dosage individuel et les apports en glucides que l'utilisateur renseigne manuellement dans son profil de traitement, mais ces informations sont vérifiés par le système pour des raisons de sécurité. 

L'application n'est pas fournie dans Google Play - vous devez la compiler vous même à partir du code source pour des raisons juridiques.

How to read the documentation?
==============================

We have provided this subsection of the documentation especially for those who are new to concept of Do-It-Yourself-APS (Artificial-Pancreas-Systems) in order to best show how to get acquainted with the information we consider to be the most important, especially in terms of understanding the reasons behind the "limits" set in place when you are first beginning your AAPS journey. These safety limits have been developed over many years by observations of the inadvertent mistakes that new users are most likely to make when first learning to set up, build, and then successfully loop with AndroidAPS - as most often those mistakes occur simply because the user was so excited to get started using the system that they may have forgotten to sit down and dedicate the time needed to understand the information within this documentation thoroughly. We have all been there!

Certainly the approach, "read everything" has merit and is certainly true. However, it is not uncommon for newcomers to quickly become overwhelmed by the sheer volume and variety of new information that they are expected to understand all at once! So these next few subsections are meant to lay out the most important foundations of the knowledge necessary to successfully run your own chosen setup with as few hiccups as is possible. New users can refer back to this guide when they run into aspects of the system they are not yet familiar with; and to remind themselves where to go within the Documentation in order to locate more in-depth information, as needed. It is also important to lay out the capabilities of AndroidAPS in an up-front manner, as sometimes it can be disappointing to discover in the middle of reading the documentation that certain necessary tools are currently not available for use (due to constraints on which types of insulin pumps or CGMs are available in some countries vs. other countries etc.) or simply offers less/different functionality than first assumed. Finally, it is important to acknowledge that many experience-related aspects inside this documentation only become pertinent as you begin to use AAPS in real-time. Just as it is nearly impossible to learn to play a sport perfectly just by reading about the rules, it takes a combination of first learning the foundations of the rules for safely operating AAPS and then committing the time learning how best to apply those rules as you navigate through the steps of looping with AndroidAPS.

The `Getting started <Getting-Started/Safety-first.html>`_ subsection is a must read to understand the general concept of what an artificial pancreas system is designed to do; and is especially pertinent for users of AndroidAPS.

The subsection `What do I need? <Module/module.html>`_ specifies the CGMs (Continuous Glucose Monitors) and insulin pumps which are are available for use with AndroidAPS. This subsection is important to understand so that your AndroidAPS system can be assembled and built correctly the first time around and will function well in real world situations.

The subsection `Where to go for help? <Where-To-Go-For-Help/Connect-with-other-users.html>`_ should help direct you to the best places to go to find help depending upon your levels of experience with AAPS. This is very important so that you don't feel left out, especially at the beginning, and so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls as quickly as possible. Experience shows that a lot of people are already using AndroidAPS successfully, but everyone has a question at some point that they couldn't solve on their own. The nice thing is, however, that due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about requesting help, as there is no such thing as a dumb question! We encourage users of any/all levels of experience to ask as many questions as they feel is necessary to help get them up and running safely. Just try it out please.

In the subsection `Glossary <Getting-Started/Glossary.html>`_ we have compiled a list of the acronyms (or short-term names) used throughout AAPS. For example, where to go to find out what the terms ISF or TT, stand for in in the more common (longer) terms.

For parents who want to build AndroidAPS for their children, we recommend the subsection `AndroidAPS for children <Children/Children.html>`_ , as there you will find more advanced information specifically tailored for learning the extra steps necessary in order to remotely control your child's AndroidAPS app as well as a more comprehensive safety profile as compared to adults. You need to be able to support your children and understand the all the advanced concepts that AndroidAPS offers to help you succeed.

Now that you have a solid understanding of the concepts that AndroidAPS uses, know where to go for the the necessary tools to build your APS and are familiar with where to get help in case of an emergency, it is the right time to start building the app! The subsection `How to install AndroidAPS? <Installing-AndroidAPS/Building-APK.html>`_ shows you this in detail. Since the requirements are very different from anything you might have set up in the past, we recommend that you really follow the instructions, step-by-step the first few times you build the app, so that you have a stronger sense of how the app building process is supposed to behave when all directions are followed exactly. Please remember to take your time. Later this will go very quickly when you build the app again for a new version. That way you will have a greater chance of noticing when something doesn't going as planned before too many steps are out of line. It is important to save the your keystore file (.jks file used to sign your app) in a safe place, so that you can always use that exact same keystore file and password each and every time you are asked to create a new updated version of AndroidAPS, as this file is what makes sure that each new version of the app "remembers" all the information that you have provided to it in previous versions of the app and thus ensure that the updates will go as smoothly as possible. On average, you can assume that there will be one new version and 2-3 required updates per year. This number is based on experience and may change in the future. But we do want to at least give you a general guideline on what to expect. When you are more experienced at building updated AndroidAPS app versions all the steps that are required in building an updated app will only take 15-30 minutes, on average. However, in the beginning there can be a rather steep learning curve as these steps are not always considered intuitive by new users! So do not get frustrated if you find that it takes half a day or a whole day with some help from the community before you are finally finished with the update process. If you find that you are getting very frustrated just take a short break, and oftentimes; after a stroll around the block or two...you'll find that you are better able to approach the problem again. We have also compiled a list of questions and answers to most of the typical errors that are likely to occur the first few updates located within the FAQs section; as well as within "How to install AndroidAPS?" that provides additional information in the subsection "Troubleshooting".

The subsection `Component Setup <Configuration/BG-Source.html>`_ explains how to properly integrate each of the various different separate component parts into AndroidAPS, as well as how to set them up to work as seamlessly as possible together. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. The subsection `Configuration <Configuration/BG-Source.html>`_ describes the best pump configurations to use in AndroidAPS.

This is followed by a particularly important subsection `AndroidAPS Usage <Getting-Started/Screenshots.html>`_, in which you are slowly introduced to the full usage of what AndroidAPS has to offer via a safe and carefully calibrated step-by-step gradual process designed to make sure that you/your child are thoroughly familiar and comfortable navigating all the different levels and menu configurations before graduating on the next phase, each commonly referred to as the next Objective, until you are have enough experience to begin using the more advanced options available within the app. These Objectives are specially designed in such a way that will gradually unlock more possibilities of AndroidAPS and switch from Open Loop to Closed Loop.

After that there is a subsection `General Hints <Usage/Timezone-traveling.html>`_ with e.g. information on how to deal with the crossing of time zones as well as knowing what to do during the Spring Forward - Fall Back daylight saving time changes which will occur twice a year while using AndroidAPS.

There is a subsection for the `clinicians <Resources/clinician-guide-to-AndroidAPS.html>`_ who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

Finally, in the subsection `How to help? <make-a-PR.html>`_ we would like to provide you with information so that you are able to suggest small or larger changes to the documentation yourself and work together with us on the documentation. We further need support for `translation of the documentation <translations.html>`_ By the way, it also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. That way the correct information can easily be located again should other users also be trying to find answers to the same types of questions in the future.


.. note::
   Please don't be shy, we need support in creating the documentation. A pull request is relatively simple to create. You can't break anything. There are release procedures. If you just want to talk in the beginning to see how you can help, give us a shout on Discord or Facebook. In this day and age, a telco is quickly arranged and we can discuss how you can best get involved and how we can show you the first steps.

Pour plus de détails, lisez la suite ici.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Changer de langue

   Changer de langue <./changelanguage.rst>

.. _getting-started:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Pour commencer

   Sécurité avant tout <./Getting-Started/Safety-first.rst>
   Qu'est-ce qu'un système en boucle fermée <./Getting-Started/ClosedLoop.rst>
   Qu'est-ce qu'une boucle fermée avec AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Choix de pompes <./Getting-Started/Pump-Choices.md>
   Wiki mises à jour et modifications <./Getting-Started/WikiUpdate.rst>

.. _what-do-i-need:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: De quoi ai-je besoin 

   Composants <./Module/module.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Comment installer AndroidAPS

   Construire l'APK <./Installing-AndroidAPS/Building-APK.md>
   Télécharger la nouvelle version ou branche <./Installing-AndroidAPS/Update-to-new-version.md>
   Vérifications à faire après la mise à jour vers AAPS 3.0 <./Installing-AndroidAPS/update3_0.md>
   Vérifications à faire après la mise à jour vers AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Installer git <./Installing-AndroidAPS/git-install.rst>
   Dépannage d'Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>
   Notes de versions <./Installing-AndroidAPS/Releasenotes.rst>
   Branches de développement <./Installing-AndroidAPS/Dev_branch.md>

.. _component-setup:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuration des composants

   MGC/MGF <./Configuration/BG-Source.rst>
   Paramètres xDrip <./Configuration/xdrip.md>
   Pompes à insuline <./Hardware/pumps.rst>
   Smartphones <./Hardware/Phoneconfig.rst>
   Paramètres Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Montres connectées  <./Hardware/Smartwatch.rst>

.. _configuration:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Générateur de configuration

   Générateur de configuration <./Configuration/Config-Builder.md>
   Préférences <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Utilisation d'AndroidAPS

   Les écrans d'AndroidAPS <./Getting-Started/Screenshots.md>
   Objectifs <./Usage/Objectives.rst>
   Fonctionnalités d'OpenAPS <./Usage/Open-APS-features.md>   
   Calcul des GA <./Usage/COB-calculation.rst>
   Estimation de la Sensibilité <./Configuration/Sensitivity-detection-and-COB.md>
   Changement de profil <./Usage/Profiles.md>
   Cibles Temporaires <./Usage/temptarget.md>   
   Glucides étendus <./Usage/Extended-Carbs.rst>
   Automatisation <./Usage/Automation.rst>
   Careportal (supprimé) <./Usage/CPbefore26.rst>
   Téléversement Open Humans <../Configuration/OpenHumans.rst>
   Automatisation avec des applications tierces <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Conseils généraux 

   Fuseaux horaires <./Usage/Timezone-traveling.md>
   Acces aux fichiers journaux <./Usage/Accessing-logfiles.md>
   Conseils d'utilisation de l'Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import des paramètres <./Usage/ExportImportSettings.rst>
   Mode ingénierie xDrip <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS pour les enfants

   Surveillance à distance <./Children/Children.rst>
   Commandes SMS <./Children/SMS-Commands.rst>
   Assistant Profil <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Dépannage

   Dépannage <./Usage/troubleshooting.rst>
   Client Nightscout <../Usage/Troubleshooting-NSClient.html>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Questions fréquentes

   Questions fréquentes <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossaire

   Glossaire <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Où chercher de l'aide 

   Ressources utiles à lire avant de commencer <./Where-To-Go-For-Help/Background-reading.md>
   Où chercher de l'aide <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Wiki mises à jour et modifications <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Pour les professionnels de santé

   Pour les professionnels de santé <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Comment aider

   Comment aider <./Getting-Started/How-can-I-help.md>
   Comment traduire l'application et la documentation wiki <./translations.md>
   Comment éditer le wiki <./make-a-PR>


.. note:: 
	**Avertissement**

	* Toutes les informations, pensées et codes décrits ici sont destinés à des fins d'information et d'éducation uniquement. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.

	* L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.

	* Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées,  sont la propriété de leurs détenteurs respectifs. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

	A noter - ce projet n'a aucun lien avec, et n'est pas approuvé par : `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ ou `Medtronic <https://www.medtronic.com/>`_
