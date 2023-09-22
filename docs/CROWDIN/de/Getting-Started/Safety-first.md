# Sicherheitshinweise

**Wenn Du Dich entscheidest, Deine eigene künstliche Bauchspeicheldrüse zu bauen, ist es immer wichtig, über Sicherheit und Schutz nachzudenken und die Auswirkungen all Deiner Handlungen zu verstehen.**

## Allgemein

- AAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AAPS will never make mistakes. AndroidAPS übernimmt die Kontrolle Deiner Insulinabgabe: Habe es immer im Auge, verstehe wie es arbeitet und lerne, seine Handlungen zu interpretieren.
- Bedenke, dass ein Smartphone, welches einmal mit Deiner Pumpe gekoppelt ist, jegliche Anweisungen an die Pumpe geben kann. Only use this phone for AAPS and, if being used by a child, essential communications. Installiere keine unnötigen Anwendungen oder Spiele (!!!!!), die Malware wie Trojaner, Viren oder Bots einschleppen könnten, die Dein System stören könnten.
- Installiere alle Sicherheits-Updates, die der Smartphone-Hersteller und Google zur Verfügung stellen.
- Du musst auch Deine Diabetes-Gewohnheiten anpassen, da Du Deine Therapie durch den Closed Loop wesentlich veränderst. Zum Beispiel some people report, they need less hypo treatments as AAPS has already reduced insulin.

## SMS Kommunikator

- AAPS allows you to control a child's phone remotely via text message. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
- AAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

(Safety-first-aaps-can-also-be-used-by-blind-people)=
## AAPS can also be used by blind people

Auf Android Geräten ist TalkBack Teil des Betriebssystems. Es handelt sich um ein Programm zur Bildschirmorientierung über die Sprachausgabe. With TalkBack you can operate your smartphone as well as AAPS blind.

We users create the AAPS app ourselves with Android Studio. Viele verwenden Microsoft Windows zu diesem Zweck, wo es den Screenreader analog zu TalkBack gibt. Da Android Studio eine Java-Anwendung ist, muss die Komponente "Java Access Bridge" in der Systemsteuerung aktiviert sein. Andernfalls wird der Screenreader des PCs nicht in Android Studio sprechen.

Bitte gehen Sie dazu wie folgt vor:

- Drücken Sie WINDOWSTASTE und geben Sie in das Suchfeld "Systemsteuerung" ein, öffnen Sie mit Enter. Es öffnt: "Alle Systemsteuerungselemente".
- Drücken Sie den Buchstaben C, um zu "Center für erleichterte Bedienung" zu gelangen, öffnen Sie mit Enter.
- Dann öffnen Sie "Computer ohne Bildschirm verwenden" mit Enter.
- Dort unten finden Sie das Kontrollkästchen "Java Access Bridge aktivieren".
- Fertig, einfach das Fenster schließen! Der Screenreader sollte jetzt funktionieren.

```{note}
**WICHTIGER SICHERHEITSHINWEIS**

Die grundlegenden Sicherheitsfunktionen von AAPS, die in dieser Dokumentation beschrieben sind, bauen auf den Sicherheitsfunktionen der Hardware auf, mit der Du Dein System aufgesetzt hast. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. *Verwende keine* defekten, modifizierten oder selbsterstellten Insulinpumpen oder CGM-Empfänger, um ein AAPS-System zu erstellen oder zu betreiben.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
```
