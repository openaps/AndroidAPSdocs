# Übersicht der Komponenten

**AAPS ist** nicht einfach eine (selbst erstellte) App, es ist aber eine von mehreren Modulen Deines Closed Loop Systems. Bevor Du Dich für die einzelnen Komponenten entscheidest, solltest Du einen Blick auf die Dokumention zu den Komponenten, werfen.

![Übersicht der Komponenten](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Die Grundlage der **AAPS** Sicherheitsfunktionen, die in dieser Dokumentation diskutiert werden, basiert auf den Sicherheitsmerkmalen der Hardware, die zum Erstellen Deines Systems verwendet wird. Um einen Loop zur automatisierten Insulinabgabe schließen zu können, ist es extrem wichtig nur getestete, voll funktionsfähige und von den offiziellen Behörden Deines Landes freigegebene Insulinpumpen und Sensoren (CGM) zu nutzen. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. **Verwende keine** defekten, modifizierten oder selbstgebauten Insulinpumpen oder CGM-Empfänger, zum Erestellen eines **AAPS**-Systems.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken. Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann. [Weitere Informationen gibt es hier](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Erforderliche Komponenten

### Gute individuelle Profileinstellungen für Deine Diabetes-Therapie

Obwohl Du es weder kaufen noch einfach erstellen kannst, ist dies wahrscheinlich das Modul, das am meisten unterschätzt wird, obwohl es für einen funktionieren Loop absolut wesentlich ist. Wenn Dich der Algorithmus bei Deinem Diabetes-Management unterstützen soll, benötigt dieser die korrekten Einstellungen um keine schwerwiegenden Fehlentscheidungen zu treffen. Auch wenn Dir andere Module noch fehlen, kannst Du Dein bestehendes **Profil** gemeinsam mit Deinem Diabetes-Team prüfen und anpassen.

Das **Profil** enthält:

- BR (Basalrate); liefert das Basalinsulin;
- ISF (Insulin Sensitivity Factor; dt. Korrekturfaktor): Um wie viel Einheiten sinkt Dein Glukosewert durch eine Einheit Insulin;
- CR (Carb Ratio; dt. Mahlzeitfaktor): Wie viele Gramm Kohlenhydrate werden von einer Insulineinheit abgedeckt;
- DIA (Duration of Insulin Action; dt. Insulinwirkdauer).

Die meisten Looper verwenden eine sogenannte zirkadiane Basalrate, Korrektur- und KH-Faktoren die sich an der hormonellen Insulinempfindlichkeit im Tagesverlauf orientieren.

Weitere Informationen zu Deinem **Profil** findest Du [auf der gesonderten Seite](../SettingUpAaps/YourAapsProfile.md).

### Smartphone

Siehe die eigene Seite zu [Smartphones](../Getting-Started/Phones.md).

### Insulinpumpe

Siehe die dedizierte Seite zu [Kompatiblen Pumpen](../Getting-Started/CompatiblePumps.md).

**Vorteile und Nachteile einiger Pumpenmodelle**

Die Combo, die Insight und die älteren Medtronic Pumpen sind solide und „loopfähig“. Die Combo hat wegen des Standard Luer-Lock-Anschlusses auch den Vorteil, dass die Auswahl an Kathetern groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst Du sie sogar aus der Fernbedienung in Deinem Hotelzimmer „ausleihen“ ;-).

Die Vorteile der DanaR/RS und Dana-i vs. der Combo sind aber:

- Das erste Einrichten der Verbindung zwischen der Dana-i/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
- Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann zu Problemen führen, wenn Du Dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z. B. beim Kochen).
- Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB.  Die Dana-i/RS kann so konfiguriert werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
- Die History kann auf der Dana-i/RS in wenigen Sekunden mit COB ausgelesen werden. Deshalb können die Smartphones offline leicht getauscht werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
- Alle Pumpen, die **AAPS** unterstützt, sind (zumindest bei Auslieferung) wasserdicht. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

### BZ-Quelle

Siehe die eigene Seite über [Kompatiblen Pumpen](../Getting-Started/CompatiblesCgms.md).

### **AAPS**.apk-Datei

Die Haupt-Komponente des Systems. Bevor Du die App installieren kannst, musst Du die apk-Datei vorher selbst erstellen. Die Anleitung ist [hier](../SettingUpAaps/BuildingAaps.md).

### Server für Berichte und Auswertungen

Ein Berichts-Server zeigt Deine Glukose- und Behandlungsdaten an und erstellt Berichte zur detaillierten Analyse. Derzeit gibt es zwei Berichts-Server, die mit AAPS genutzt werden können: [Nightscout](#SettingUpTheReportingServer-nightscout) und [Tidepool](#SettingUpTheReportingServer-tidepool). Beide bieten Möglichkeiten Deine Diabetes-Daten im Zeitverlauf zu visualisieren, liefern Statistiken über die **Zeit im Zielbereich** (TIR) und andere Messgrößen.

Der Berichts-Server ist von den anderen Modulen unabhängig. Wenn Du keinen Berichts-Server nutzen möchtest, sollten Du wissen, dass er für den langfristigen Betrieb von **AAPS** nicht zwingend ist. Zum Abschließen des [**Ziel 1**](#objectives-objective1) ist es aber dennoch notwendig ihn einzurichten.

Zusätzliche Informationen zum Einrichten Deines Berichts-Servers findest Du [hier](../SettingUpAaps/SettingUpTheReportingServer.md).

## Optionale Komponenten

### Smartwatch

Du kannst jede Smartwatch mit Android WearOS 2.x bis 4.x nutzen. **Achtung, WearOS 5.x ist nicht immer kompatibel!**

Die Community hat eine [Liste mit getesteten Samrtphones und Smartwatches](#Phones-list-of-tested-phones) zusammengetragen. Es gibt verschiedene Zifferblätter, die Du mit **AAPS** nutzen kannst. Weitere Informationen findest Du [hier](../WearOS/WearOsSmartwatch.md).

### xDrip+

Even if you don't need to have the xDrip+ App as **BG Source**, you can still use it for _i.e._ alarms or a different blood glucose display. Du kannst in xDrip+ beliebig viele Alarme einrichten, festlegen zu welchen Zeiten diese aktiv sein sollen, ob sie die Stummschaltung des Smartphones überschreiben können etc. Einige xDrip+ Informationen können [hier](../CompatibleCgms/xDrip.md) gefunden werden. Beachte bitte, dass die Entwicklung von xDrip+ sehr agil ist und die Dokumentation damit teilweise nicht Schritt halten und entsprechend nicht immer aktuell sein kann.

## Wartezeit überbrücken

Manchmal dauert es eine Weile, alle Module für den Closed Loop zusammenzubekommen. Aber keine Sorge, es gibt viele Dinge, die Du in der Zwischenzeit machen kannst. Es ist **absolut wichtig**, Deine Basalrate (BR), die KH-Faktoren (IC), Korrekturfaktoren (ISF) etc. intensiv zu prüfen und ggf. anzupassen. Der Open Loop ist zudem eine sehr gute Möglichkeit, das System kennenzulernen und mit **AAPS** vertraut zu werden. In diesem Modus gibt **AAPS** Behandlungsempfehlungen, die Du manuell ausführen kannst.

Du kannst Dich weiter durch das Wiki arbeiten, online und offline mit anderen Loopern in Kontakt treten, weitere [Hintergrundinfos](../UsefulLinks/BackgroundReading.md) oder Berichte von anderen Loopern lesen. Sei aber vorsichtig, nicht alle Anwenderberichte müssen richtig oder für Deinen Fall zutreffend sein.

**Fertig?** Wenn Du alle Komponenten für **AAPS** zusammen hast (Glückwunsch!) - oder zumindest genug, um mit dem Open Loop zu beginnen - solltest Du zuerst die [Beschreibung der Objectives (Ziele)](../SettingUpAaps/CompletingTheObjectives.md) vor dem jedem neuen Ziel lesen und Deine Hardware entsprechend vorbereiten.
