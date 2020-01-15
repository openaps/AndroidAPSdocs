Installez Git
**************************************************
Windows
==================================================
1. Télécharger git
--------------------------------------------------
* **Vous devez rester connecter à internet pendant toute la durée où Android Studio télécharge les différentes mises à jour !**
* N’importe quelle version de git devrait fonctionner. Par exemple `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Assurez-vous de noter le chemin d’installation. Vous en aurez besoin dans la prochaine étape.

.. image:: ../images/Update_GitPath.png
  :alt: Chemin d'installation de Git

2. Définir le chemin d’accès git dans Android Studio
--------------------------------------------------
* Renseignez dans Android tudio où le fichier git.exe est situé : File - Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* Dans la fenêtre suivante : Version Control - Git

* Choisissez le chemin d'accès correct : ... **/Git/bin** (incluant /bin)

* Assurez-vous que la méthode de mise à jour "Merge" est sélectionnée.

  .. image:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - chemin GIT
   
3. Redémarrer
--------------------------------------------------
* Redémarrez votre PC pour mettre à jour l'environnement système.

4. Vérifier les paramètres de git dans Android Studio
--------------------------------------------------
* Ouvrez la fenêtre Terminal dans Android Studio
* Entrez "git --version" (sans les guillemets !) et appuyez sur Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git --version

* Si git est installé et connecté correctement, vous recevrez une information sur la version installée qui ressemble à ceci :

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: résultat git-version

Mac
==================================================
* N’importe quelle version de git devrait fonctionner. Par exemple `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Utilisez homebrew pour installer git: ```$ brew install git```.
* Pour plus de détails sur l'installation de git voir la `documentation officielle de git <https://git-scm.com/book/fr/v2/Démarrage-rapide-Installation-de-Git>`_.
* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.
