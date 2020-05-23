Problemen met Android Studio oplossen
**************************************************
Keystore (digitale handtekening) kwijt
==================================================
Het is het makkelijkste om steeds hetzelfde keystore-bestand te gebruiken bij het updaten van AndroidAPS, omdat jouw telefoon dan de nieuwe versie van de app herkent als update van jouw bestaande app. Je laat de bestaande app gewoon op je telefoon staan, je installeert de nieuwe eroverheen en al jouw instellingen blijven behouden. Daarom moet je jouw keystore bestand (eindigt op *.jks) opslaan en bewaren op jouw computer.

Mocht je jouw oude keystore bestand toch niet meer kunnen vinden, dan heb je een paar extra stappen nodig bij het updaten van de app, om de instellingen in jouw AAPS app te behouden:

1. `Exporteer de instellingen <../Usage/ExportImportSettings.html#instellingen-exporteren>`_ op jouw telefoon.
2. Kopieer jouw instellingen bestand van jouw telefoon naar een externe locatie (zoals je computer, cloudopslag service...).
3. Zorg ervoor dat je het bestand met instellingen "AndroidAPS Preferences" opslaat op een veilige plek die je later kunt terugvinden.
4. Bouwen van de ondertekende apk zoals beschreven op de pagina `Bijwerken naar een nieuwe versie <../Installing-AndroidAPS/Update-to-new-version.html>`_.
5. Verwijder de vorige AAPS-versie van jouw telefoon.
6. Installeer de nieuwe AAPS-versie op jouw telefoon.
7. `Instellingen importeren <../Usage/ExportImportSettings.html#instellingen-exporteren>`_ - mocht je ze op je telefoon niet kunnen vinden, kopieer ze dan vanaf de externe plek (computer, cloudopslag) waar je ze eerder had opgeslagen.
8. En je kunt weer doorloopen!

Kotlin compiler warning
==================================================
Als je de app succesvol hebt gebouwd, maar je krijgt een Kotlin compiler waarschuwing dan kun je deze negeren. 

Je kunt verdergaan met het overzetten van de app (*.apk bestand) naar je telefoon.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: negeer Kotlin compiler waarschuwing

Key was created with errors (digitale handtekening bevat een fout)
==================================================
Bij het maken van een nieuw keystore-bestand (digitale handtekening) voor het bouwen van de ondertekende APK, kun je het volgende foutbericht krijgen (in Windows)

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: Key was created with errors (digitale handtekening bevat een fout)

Dit lijkt een bug te zijn in Android Studio 3.5.1 en de meegeleverde Java-omgeving in Windows. Het keystore bestand wordt gewoon correct aangemaakt, maar een aanbeveling wordt ten onrechte als een fout weergegeven. Dit kun je nu gewoon negeren.

Could not download… / Offline Work
==================================================
Als je een foutmelding krijgt over 'Kon niet downloaden/offline werken' zoals dit

.. image:: ../images/GIT_Offline1.jpg
  :alt: Waarschuwing kon niet worden gedownload

zorg ervoor dat “Offline work” uitgeschakeld is.

File -> Settings (Bestand -> Instellingen)

.. image:: ../images/GIT_Offline2.jpg
  :alt: Instellingen offline werken

Error: buildOutput.apkData must not be null
==================================================
Misschien krijg je de volgende foutmelding bij het bouwen van de apk:

  `Errors while building APK` (Fouten bij het bouwen van APK)
   
  `Cause: buildOutput.apkData must not be null` (Oorzaak: buildOutput.apkData mag niet leeg zijn)

Dit is een bekende bug in Android Studio 3.5 en zal waarschijnlijk niet worden opgelost voordat Android Studio 3.6 uitkomt. Je hebt drie opties:

1. Verwijder handmatig de drie 'build'-mappen (normale "build" map, build map in "app" en build map in "wear") en bouw vervolgens opnieuw de getekende apk.
2. Doel map (Destination folder) instellen op project map in plaats van de app map zoals beschreven in `deze video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Wijzig de doel map (destination folder) voor jouw apk-bestand (naar een andere map op jouw computer).

Unable to start daemon process (Kan daemon proces niet starten)
==================================================
Als je een foutmelding ziet zoals hieronder dan heb je waarschijnlijk een 32-bit versie van Windows 10. Deze versie werkt helaas niet met Android Studio 3.5.1 en hoger. Alleen de 64-bit versie van Windows 10 werkt. Je zult dus op jacht moeten naar een computer met de 64-bit versie, of op jouw eigen computer de 64-bit versie moeten installeren.

Er zijn veel handleidingen op internet te vinden hoe je kunt checken of jouw computer een 32-bit of 64-bit versie heeft, zoals `deze <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Screenshot Unable to start daemon process
  

Geen CGM gegevens
==================================================
* Wanneer je xDrip+ gebruikt: Ontvanger identificeren zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html##identificeer-ontvanger-identify-receiver>`_.
* Wanneer je de `aangepaste Dexcom G6 app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_: Zorg dat je de juiste versie uit de `2.4 map <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_ gebruikt.

Uncommitted changes (Niet-opgenomen wijzigingen)
==================================================
Als je een foutmelding ziet zoals

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Failure uncommitted changes

Optie 1 - Controleer of git correct geinstalleerd is
--------------------------------------------------
* git is wellicht niet correct geïnstalleerd (moet geïnstalleerd zijn op een locatie waar Android Studio bij kan)
* wanneer je Windows gebruikt en je hebt git zonet geïnstalleerd, dan moet je je computer opnieuw opstarten of in ieder geval afmelden en opnieuw aanmelden, om git voor andere programma's beschikbaar te maken na de installatie
* `Controleer git instellingen <../Installing-AndroidAPS/git-install.html#controleer-de-git-instellingen-in-android-studio>`_
* Als je jouw git instellingen gecontroleerd hebt en je ziet geen git versie maar git is wel geïstalleerd op jouw computer, zorg dan dat Android Studio weet `waar git zich bevindt <../Installing-AndroidAPS/git-install.html#stel-git-path-in-android-studio-in>`_ op jouw computer.

Optie 2 - Broncode opnieuw laden
--------------------------------------------------
* In Android Studio klik op VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Optie 3 - Controleren op updates
--------------------------------------------------
* Kopieer 'git checkout --' naar klembord (zonder aanhalingstekens)
* Schakel over naar Terminal in Android Studio (linkerbenedenhoek van Android Studio venster)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Plak gekopieerde tekst en druk op return

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout succes

App niet geïnstalleerd
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app not installed

* Zorg ervoor dat je het bestand "app-full-release.apk" naar jouw telefoon hebt overgebracht.
* Als "App niet geïnstalleerd" wordt weergegeven op jouw telefoon volg dan deze stappen:
  
1. `Instellingen exporteren <../Usage/ExportImportSettings.html>`_ (in AAPS-app die al op jouw telefoon is geïnstalleerd)
2. Verwijder de AndroidAPS app van jouw telefoon.
3. Schakel vliegtuigmodus in & schakel bluetooth uit.
4. Installeer nieuwe versie ("app-full-release.apk”)
5. `Instellingen importeren <./Usage/ExportImportSettings.html>`_
6. Zet bluetooth weer aan en schakel de vliegtuigmodus uit

App geïnstalleerd maar oude versie
==================================================
Wanneer je de app succesvol hebt gebouwd, hem naar jouw telefoon hebt overgebracht en geïnstalleerd, maar het versienummer blijft hetzelfde, dan heb je waarschijnlijk de `bijwerken van jouw lokale kopie <../Update-to-new-version.html#bijwerken-van-jouw-lokale-kopie>`_ stap gemist. Bouw de app opnieuw en vergeet deze stap niet;)

Geen van de bovengenoemde
==================================================
Als geen van de bovenstaande tips je geholpen heeft, dan zou je de de app helemaal vanaf nul kunnen bouwen:

1. `Instellingen exporteren <../Usage/ExportImportSettings.html>`_ (in AAPS-app die al op jouw telefoon is geïnstalleerd)
2. Houd jouw keystore file (digitale handtekening) en keystore wachtwoord bij de hand.
    In het geval dat je het bestand kwijt bent en/of het wachtwoord bent vergeten dan kun je proberen om ze te vinden in de projectbestanden zoals `hier <https://youtu.be/nS3wxnLgZOo>`_beschreven. Of je maakt gewoon van een nieuw keystore bestand en wachtwoord aan. 
3. Bouw app vanaf het begin zoals `hier <../Installing-AndroidAPS/Update-to-new-version.html#bijwerken-van-jouw-lokale-kopie>`_ beschreven.
4.	Als je de APK hebt gebouwd, verwijder eerst de bestaande app van jouw telefoon. Verplaats daarna de nieuwe apk naar je telefoon en installeer.
5. `Instellingen importeren <./Usage/ExportImportSettings.html>`_

In het ergste geval
==================================================
Mocht zelfs het weer vanaf het begin bouwen van de app niet de oplossing zijn voor jouw probleem, dan zou je kunnen overwegen om Android Studio volledig van je computer te verwijderen en helemaal overnieuw te beginnen. Sommige gebruikers hebben gemeld dat dit hun probleem heeft opgelost.

**Zorg ervoor dat echt alle bestanden die zijn gekoppeld aan Android Studio worden verwijderd.** Als je Android Studio en alle verborgen bestanden niet volledig verwijdert, dan kan dit leiden tot nieuwe problemen in plaats van jouw bestaande problemen op te lossen. Handleidingen voor volledige de-installatie kun je online vinden, bijv. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Installeer Android Studio zoals `hier <../Installing-AndroidAPS/Building-APK.html##installeer-git-android-studio>`_ beschreven en **update gradle niet**.
