# Sicherheitshinweise

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Allgemein

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. AndroidAPS übernimmt die Kontrolle Deiner Insulinabgabe: Habe es immer im Auge, verstehe wie es arbeitet und lerne, seine Handlungen zu interpretieren.
- Remember that, once paired, the phone can instruct the pump to do anything. Verwende das Smartphone ausschließlich für AndroidAPS und - falls es von einem Kind genutzt wird - für die unentbehrliche Kommunikation. Installiere keine unnötigen Anwendungen oder Spiele (!!!!!), die Malware wie Trojaner, Viren oder Bots einschleppen könnten, die Dein System stören könnten.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Zum Beispiel viele Anwender deutlich weniger Hypo-BE, da AndroidAPS die Insulinzufuhr bereits im Vorfeld reduziert hat.

## SMS Kommunikator

- AndroidAPS allows you to control a child's phone remotely via text message. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

## AndroidAPS kann auch von Blinden genutzt werden

Auf Android Geräten ist TalkBack Teil des Betriebssystems. Es handelt sich um ein Programm zur Bildschirmorientierung über die Sprachausgabe. Mit TalkBack können Sie sowohl Ihr Smartphone als auch AndroidAPS blind betreiben.

Wir Benutzer erstellen die AndroidAPS-App selbst mit Android Studio. Viele verwenden Microsoft Windows zu diesem Zweck, wo es den Screenreader analog zu TalkBack gibt. Da Android Studio eine Java-Anwendung ist, muss die Komponente "Java Access Bridge" in der Systemsteuerung aktiviert sein. Andernfalls wird der Screenreader des PCs nicht in Android Studio sprechen.

Bitte gehen Sie dazu wie folgt vor:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. Es öffnt: "Alle Systemsteuerungselemente".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! Der Screenreader sollte jetzt funktionieren.

:::{note}
**IMPORTANT SAFETY NOTICE**

Die grundlegenden Sicherheitsfunktionen von AndroidAPS, die in dieser Dokumentation beschrieben sind, bauen auf den Sicherheitsfunktionen der Hardware auf, mit der du dein System aufgesetzt hast. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
:::
