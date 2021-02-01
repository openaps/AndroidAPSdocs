Nainstalujte git
**************************************************
Windows
==================================================
1. Stažení git
--------------------------------------------------
* **Musíte zůstat online po celou dobu, co bude Android Studio stahovat nějaké aktualizace!**
* Měly by fungovat všechny verze gitu. Například `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Poznačte si cestu instalace. Budete ji potřebovat v dalším kroku.

.. image:: ../images/Update_GitPath.png
  :alt: Git installation path

2. Nastavení git v Android Studiu
--------------------------------------------------
* Klikněte na File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* Klikněte na malý trojúhelníček před Version Control (1.), rozbalí se související menu.
* Klikněte na Git (2.).
* Ověřte, že v kolonce Update Method je zvolena volba Merge (3.).
* Kliknutím na tlačítko "Test" (4.) spustíte automatické ověření, že Android Studio má přístup k git.exe

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* Pokud byl automatický test úspěšný zobrazí se okno s informací o verzi Git.
Klikněte na "OK" v dialogovém okně (1.) a pak na "OK" v okně s nastavením (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatic git installation succeeded

* Pokud soubor git.exe nebyl automatickým testem nalezen, klikněte na "OK" v dialogovém okně (1.) a pak na tlačítko se třemi tečkami (2.).
* Použijte funkci <a href="https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html">vyhledávání</a> v programu Průzkumník souborů pro nalezení souboru "git.exe" pokud si nejste jisti, kde lze soubor najít. Hledáte soubor git.exe ve složce \bin\.
* Vyberte cestu k souboru git.exe a ujistěte se, že vybraný soubor je ve složce **\\bin\\** (3.) a klikněte na tlačítko "OK" (4.).
Zavřete okno nastavení kliknutím na tlačítko "OK" (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
3. Restart
--------------------------------------------------
* Restartujte počítač, aktualizuje se prostředí jeho systému.

4. Kontrola nastavení git v Android Studiu
--------------------------------------------------
* Otevřete terminálové okno v Android Studiu
* Napište "`git - -version`" (bez uvozovek a bez mezery mezi znamínky mínus) a stiskněte Enter

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* Pokud je git nainstalován a je správně nastaveno propojení, vypíše se informace o nainstalované verzi, bude vypadat obdobně:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: result git-version

Mac
==================================================
* Měly by fungovat všechny verze gitu. For example `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the `official git documentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby. Pokud by bylo třeba: Najdete je zde: Android Studio - Preferences.
