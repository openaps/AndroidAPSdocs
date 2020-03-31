Git diegimas
**************************************************
Windows
==================================================
1. Atsisiųsti git
--------------------------------------------------
* **Jūs turite būti prisijungę prie interneto visą laiką, nes Android Studio turi parsisiųsti keletą atnaujinimų!**
* Bet kuri git versija turėtų veikti. Pvz., `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Įsitikinkite, kad žinote įdiegimo kelią. Jums jo reikės kitame žingsnyje.

.. image:: ../images/Update_GitPath.png
  :alt: Git diegimo kelias

2. Nustatykite git kelią Android Studio programoje
--------------------------------------------------
* Spustelėkite File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - atidaryti parametrus

* Spustelėkite mažą trikampį šalia "Version Control" (1.) norėdami atidaryti sub-meniu.
* Spustelėkite Git (2.).
* Įsitikinkite, kad atnaujinimo metodas "Merge" (3.) yra pasirinktas.
* Patikrinkite, ar Android Studio randa kelią į git.exe automatiškai paspaudus mygtuką "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio parametrai

* Jei automatinis nustatymas sėkmingas, git versija bus rodoma.
* Spauskite "OK" dialogo lange (1.) ir "OK" nustatymų lange (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatinis git instaliavimas pavyko

* Jei failas git.exe negali būti rastas, spustelėkite "GERAI" dialogo lange (1.) ir tada mygtuką su trimis taškais (2.).
* Naudokite paieškos funkcija <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html> Windows explorer rasti "git.exe", jei jūs nežinote, kur jį galima rasti. Jūs ieškote git.exe, esančiame \bin\ aplanke.
* Pasirinkite kelią į git.exe ir įsitikinkite, kad jūs pasirinkote vieną iš ** \bin\ ** aplankų (3.) ir spustelėkite "OK" (4.).
* Uždarykite nustatymų langą, paspausdami "OK" mygtuką (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatinis git instaliavimas nepavyko
 
3. Perkraukite
--------------------------------------------------
* Perkraukite kompiuterį, kad atsinaujintų sistemos aplinka.

4. Patikrinkite git parametrus Android Studio programoje
--------------------------------------------------
* Atidarykite Terminal langą Android Studio programoje
* Įveskite "git - -version" (be kabučių ir be tarpų tarp dviejų [minuso ženklų]!) ir paspauskite Return (Grįžti)

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* Jei git įdiegta ir prijungta tinkamai, gausite informaciją apie įdiegtą versiją, kuri atrodo taip:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: rezultatas git-versija

Mac
==================================================
* Bet kuri git versija turėtų veikti. Pvz., `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Naudotis homebrew įdiegti git: ```$ brew install git```.
* Daugiau informacijos, kaip įdiegti git žr. `oficiali git dokumentacija <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Jei įdiegiate git per homebrew nereikia keisti jokių nuostatų. Jei prireiks: Jos gali būti randamos čia: Android Studio - Preferences.
