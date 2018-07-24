# Smartwatch-Integration

Nicht zwingend nötig, aber für den Alltag sehr hilfreich ist eine Smartwatch. Mit Uhren, die **Android WearOS** als Betriebssystem haben, ist es nämlich möglich, den Status des Loop zu überwachen und auch Bolus abzugeben. Für die Smartwatch gibt es verschiedene Ziffernblätter, die folgende Informationen anzeigen können:

* aktueller BZ-Wert mit 15' Trend und Delta
* Vorhersage des BZ-Verlaufs
* Bolus-IOB
* Basal-IOB
* COB
* BGl
* Aktive temporäre Basalrate
* Status von Loop und Pumpe

Außedem kannst Du über die Uhr folgende Aktionen auslösen:

* Temp. Target setzen
* Extended Carbs eingeben
* Bolus abgeben
* Bolus-Rechner verwenden
* Infusionset füllen 

Um diese Möglichkeit zu nutzen, musst du beim Kompilieren des Quellcodes in der PC-Software "Android Studio" die Build Variante "full" wählen. In AndroidAPS musst du dann im Konfigurations-Generator > Generell noch "Wear" aktivieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr sehen möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante "nsclient".

**Pebble** Nutzer können das [Urchin Watchface](https://github.com/mddub/urchin-cgm/) benutzen, um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um z.B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du [IFTTT](https://ifttt.com/) benutzen um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.
