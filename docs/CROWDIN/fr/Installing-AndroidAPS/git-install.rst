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
* Open File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* If automatic setting is successful git version will be displayed.
* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatic git installation succeeded

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).
* Use `search function <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ in windows explorer to find "git.exe" if you are unsure where it can be found. Vous chercher un fichier git.exe situé dans un dossier \bin\.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
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
