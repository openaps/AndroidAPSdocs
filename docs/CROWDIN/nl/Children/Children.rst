Bewaking op afstand
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Toezicht op kinderen
  
AndroidAPS biedt verschillende opties voor het vanaf afstand volgen van kinderen en kan ook behandelings opdrachten verzenden vanaf afstand. Deze functies kun je natuurlijk ook gebruiken om jouw partner of andere dierbare op afstand te volgen.

Functies
==================================================
* De pomp van het kind wordt aangestuurd door de AndroidAPS app op de telefoon van het kind.
* Ouders kunnen op afstand volgen en alle relevante gegevens bekijken, zoals bloedglucose, koolhydraten aan boord, insuline aan boord etc. door middel van de ** NSClient app** op hun telefoon. De instellingen in zowel AndroidAPS en in NSClient moeten exact hetzelfde zijn.
* Ouders kunnen glucose alarmen op hun telefoon ontvangen via de **xDrip+ app in 'follower' modus** op hun telefoon.
* AndroidAPS kan worden bediend op afstand door middel van `SMS Commando's<../Children/SMS-Commands.html>`_.
* Profiel wissels en tijdelijke streefdoelen kunnen op afstand worden ingesteld via de NSClient app.

Hulpmiddelen en apps voor controle op afstand
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ in webbrowser (voornamelijk data weergave)
*	NSClient app
* Dexcom follow als je de originele Dexcom app gebruikt (alleen BG waarden)
* `xDrip+ <../Configuration/xdrip.html>`_ in 'follow'modus (voornamelijk BG waarden en **alarmen**)
* `Spike <https://spike-app.com/>`_ op iPhone (voornamelijk BG waarden en **alarmen**)

Belangrijke keuzes vooraf
==================================================
* Het instellen van de juiste ` behandelingsfactoren <../Getting-Started/FAQ.html#how-begin> ` _ (basaal, DIA, ISF...) is moeilijk bij kinderen, vooral wanneer er groeihormonen in het spel zijn. 
* De instellingen in zowel AndroidAPS en in NSClient moeten exact hetzelfde zijn.
* Houd rekening met tijdsvertraging tussen master en volger. Dit vanwege de tijd die nodig is voor zowel up- als download, en het feit dat de hoofd AAPS telefoon even niet zal uploaden tijdens het uitvoeren van een loop-berekening.
* Neem dus de tijd om de loop correct in te stellen en in "real life" met jouw kind binnen handbereik te testen, voordat je begint met het op afstand monitoren en behandelen. Schoolvakanties kunnen daar een goed moment voor zijn.
* Wat is jullie noodplan wanneer bediening op afstand niet werkt (bijv. bij netwerk problemen)?
* Monitoren en behandeling op afstand kunnen zeer nuttig zijn bij de kinderopvang en de basisschool. Zorg er dan ook voor dat de docenten en begeleiders kennis hebben van het behandelplan voor je kind. Voorbeelden van dergelijke behandelplannen kunnen worden gevonden in de `gedeelde bestanden van de AndroidAPS-Users Facebook groep. <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ op Facebook.
