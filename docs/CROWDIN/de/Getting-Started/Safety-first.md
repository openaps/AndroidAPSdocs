# Sicherheitshinweise

**Wenn Du Dich entscheidest, Deine eigene künstliche Bauchspeicheldrüse zu bauen, ist es immer wichtig, über Sicherheit und Schutz nachzudenken und die Auswirkungen all Deiner Handlungen zu verstehen.**

## Allgemein

- AndroidAPS ist nur ein Hilfsmittel, mit dem du deinen Diabetes managen kannst und nichts, was du installieren und dann vergessen kannst!
- Nimm nicht an, dass AndroidAPS nie Fehler machen wird. AndroidAPS übernimmt die Kontrolle Deiner Insulinabgabe: Habe es immer im Auge, verstehe wie es arbeitet und lerne, seine Handlungen zu interpretieren.
- Bedenke, dass ein Smartphone, welches einmal mit Deiner Pumpe gekoppelt ist, jegliche Anweisungen an die Pumpe geben kann. Verwende das Smartphone ausschließlich für AndroidAPS und - falls es von einem Kind genutzt wird - für die unentbehrliche Kommunikation. Installiere keine unnötigen Anwendungen oder Spiele (!!!!!), die Malware wie Trojaner, Viren oder Bots einschleppen könnten, die Dein System stören könnten.
- Installiere alle Sicherheits-Updates, die der Smartphone-Hersteller und Google zur Verfügung stellen.
- Du musst auch Deine Diabetes-Gewohnheiten anpassen, da Du Deine Therapie durch den Closed Loop wesentlich veränderst. Zum Beispiel viele Anwender deutlich weniger Hypo-BE, da AndroidAPS die Insulinzufuhr bereits im Vorfeld reduziert hat.

## SMS Kommunikator

- AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
- AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Kommandos, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

## AndroidAPS kann auch von Blinden genutzt werden

Auf Android Geräten ist TalkBack Teil des Betriebssystems. Es handelt sich um ein Programm zur Bildschirmorientierung über die Sprachausgabe. Mit TalkBack können Sie sowohl Ihr Smartphone als auch AndroidAPS blind betreiben.

Wir Benutzer erstellen die AndroidAPS-App selbst mit Android Studio. Viele verwenden Microsoft Windows zu diesem Zweck, wo es den Screenreader analog zu TalkBack gibt. Da Android Studio eine Java-Anwendung ist, muss die Komponente "Java Access Bridge" in der Systemsteuerung aktiviert sein. Andernfalls wird der Screenreader des PCs nicht in Android Studio sprechen.

Bitte gehen Sie dazu wie folgt vor:

- Drücken Sie WINDOWSTASTE und geben Sie in das Suchfeld "Systemsteuerung" ein, öffnen Sie mit Enter. Es öffnt: "Alle Systemsteuerungselemente".
- Drücken Sie den Buchstaben C, um zu "Center für erleichterte Bedienung" zu gelangen, öffnen Sie mit Enter.
- Dann öffnen Sie "Computer ohne Bildschirm verwenden" mit Enter.
- Dort unten finden Sie das Kontrollkästchen "Java Access Bridge aktivieren".
- Fertig, einfach das Fenster schließen! Der Screenreader sollte jetzt funktionieren.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
```
