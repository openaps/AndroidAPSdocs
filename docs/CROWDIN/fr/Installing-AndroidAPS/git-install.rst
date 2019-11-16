Installez Git
*****
Windows
=====
1. Download git
-----
* **You have to be online all of the time as Android Studio downloads several updates!**
* N’importe quelle version de git devrait fonctionner. For example `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Assurez-vous de noter le chemin d’installation. Vous en aurez besoin dans la prochaine étape.

.. image:: ../images/Update_GitPath.png
  :alt: Git installation path

2. Set git path in Android Studio
-----
* Renseignez dans Android tudio où le fichier git.exe est situé : File - Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* In the next window: Version Control - Git

* Choose correct path: ... **/Git/bin** (including /bin)

* Assurez-vous que la méthode de mise à jour "Fusion" (merge) est sélectionnée.

  .. image:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - GIT path
   
3. Reboot
-----
* Redémarrez votre PC pour mettre à jour l'environnement système.

4. Check git settings in Android Studio
-----
* Open Terminal window in Android Studio
* Enter "git --version" (without quotation marks!) and press Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git --version

* If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: result git-version

Mac
=====
* N’importe quelle version de git devrait fonctionner. For example `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the `official git documentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.
