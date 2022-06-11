Sicherheitshinweise
**************************************************

**Wenn Du Dich entscheidest, Deine eigene künstliche Bauchspeicheldrüse zu bauen, ist es immer wichtig, über Sicherheit und Schutz nachzudenken und die Auswirkungen all Deiner Handlungen zu verstehen.**

Allgemein
==================================================

* AndroidAPS ist nur ein Hilfsmittel, mit dem du deinen Diabetes managen kannst und nichts, was du installieren und dann vergessen kannst!
* Nimm nicht an, dass AndroidAPS nie Fehler machen wird. AndroidAPS übernimmt die Kontrolle Deiner Insulinabgabe: Habe es immer im Auge, verstehe wie es arbeitet und lerne, seine Handlungen zu interpretieren.
* Bedenke das ein Smartphone, das einmal mit Deiner Pumpe gekoppelt ist, jegliche Anweisungen an die Pumpe geben kann. Verwende das Smartphone ausschließlich für AndroidAPS und - falls es von einem Kind genutzt wird - für die unentbehrliche Kommunikation. Installiere keine unnötigen Anwendungen oder Spiele (!!!!!), die Malware wie Trojaner, Viren oder Bots einschleppen könnten, die Dein System stören könnten.
* Installiere alle Sicherheits-Updates, die der Smartphone-Hersteller und Google zur Verfügung stellen.
* Du musst auch Deine Diabetes-Gewohnheiten anpassen, da Du Deine Therapie durch den Closed Loop wesentlich veränderst. Zum Beispiel viele Anwender deutlich weniger Hypo-BE, da AndroidAPS die Insulinzufuhr bereits im Vorfeld reduziert hat.  
   
SMS Kommunikator
==================================================

* AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
* AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

AndroidAPS can also be used by blind people
===========================================

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:  

* Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items". 
* Press the letter C to get to "Center for Ease of Use", open with Enter.  
* Then open "Use computer without a screen" with Enter. 
* There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it. 
* Done, just close the window! The screen reader should work now.

.. note:: 
   **WICHTIGER SICHERHEITSHINWEIS**

   Die grundlegenden Sicherheitsfunktionen von AndroidAPS, die in dieser Dokumentation beschrieben sind, bauen auf den Sicherheitsfunktionen der Hardware auf, mit der du dein System aufgesetzt hast. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. *Verwende keine* defekten, modifizierten oder selbsterstellten Insulinpumpen oder CGM-Empfänger, um ein AndroidAPS-System zu erstellen oder zu betreiben.

   Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

   Nicht zuletzt darfst Du keine SGLT-2-Inhibitoren (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
