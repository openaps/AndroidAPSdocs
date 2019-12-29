Nainstalujte git
**************************************************
Windows
==================================================
1. Download git
--------------------------------------------------
* **You have to be online all of the time as Android Studio downloads several updates!**
* Měly by fungovat všechny verze gitu. For example `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Poznačte si cestu instalace. Budete ji potřebovat v dalším kroku.

.. image:: ../images/Update_GitPath.png
  :alt: Git installation path

2. Set git path in Android Studio
--------------------------------------------------
* Zadejte do Studia umístění souboru git.exe: File - Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* V dalším okně: Version Control - Git

* Choose correct path: ... **/Git/bin** (including /bin)

* Make sure update method "Merge" is selected.

  .. image:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - GIT path
   
3. Reboot
--------------------------------------------------
* Reboot your PC to update System Environment.

4. Check git settings in Android Studio
--------------------------------------------------
* Open Terminal window in Android Studio
* Enter "git --version" (without quotation marks!) and press Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git --version

* If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: result git-version

Mac
==================================================
* Měly by fungovat všechny verze gitu. For example `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the `official git documentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby. Pokud by bylo třeba: Najdete je zde: Android Studio - Preferences.
