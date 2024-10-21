# Übersicht der Komponenten

AAPS ist nicht einfach eine (selbst erstellte) App, es ist eines von verschiedenen Modulen Deines Closed Loop Systems. Bevor Du Dich für die einzelnen Komponenten entscheidest, solltest Du einen Blick auf das [Komponenten-Setup](index-component-setup), werfen.

![Components overview](../images/modules.png)

```{note}
**WICHTIGER SICHERHEITSHINWEIS**

Die grundlegenden Sicherheitsfunktionen von AAPS, die in dieser Dokumentation beschrieben sind, bauen auf den Sicherheitsfunktionen der Hardware auf, mit der Du Dein System aufgesetzt hast. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. *Verwende keine* defekten, modifizierten oder selbsterstellten Insulinpumpen oder CGM-Empfänger, um ein AAPS-System zu erstellen oder zu betreiben.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
```

## Erforderliche Komponenten

### Gute individuelle Profileinstellungen für Deine Diabetes-Therapie

Obwohl Du es weder kaufen noch einfach erstellen kannst, ist dies wahrscheinlich das Modul, das am meisten unterschätzt wird, obwohl es für einen funktionieren Loop absolut wesentlich ist. Wenn Dich der Algorithmus bei Deinem Diabetes-Management unterstützen soll, benötigt dieser die korrekten Einstellungen um keine schwerwiegenden Fehlentscheidungen zu treffen. Auch wenn Dir andere Module noch fehlen, kannst Du Dein bestehendes 'Profil' zusammen mit Deinem Diabetes-Team überprüfen und anpassen. Die meisten Looper verwenden eine sogenannte zirkadiane Basalrate, Korrektur- und KH-Faktoren die sich an der hormonellen Insulinempfindlichkeit im Tagesverlauf orientieren.

Das Profil beinhaltet:

- BR (Basalraten)
- ISF (insulin sensitivity factor - Korrekturfaktor): Menge an mg bzw. mmol die eine Einheit Insulin Deinen Blutzucker senkt
- CR (carb ratio - KH-Faktor): Gramm Kohlenhydrate, die mit einer Einheit Insulin abgedeckt werden können
- DIA (duration of insulin acting): Insulin-Wirkdauer

(module-no-use-of-sglt-2-inhibitors)=
### Keine Verwendung von SGLT-2-Hemmern

SGLT-2 Hemmer, auch Gliflozins genannt, hemmen die Resorption (Aufnahme) von Glukose in der Niere. Da sie den Blutzuckerspiegel unberechenbar senken, dürfen sie KEINESFALLS mit einem Closed Loop System wie AAPS verwendet werden! Es bestünde ein enormes Risiko für eine Ketoazidose oder eine Hypoglykämie! Die Kombination dieser Medikamente mit einem Closed Loop System, das die Basalrate senkt, um den BZ zu erhöhen, ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.

(module-phone)=
### Smartphone

Die aktuelle Version von AAPS erfordert ein Android Smartphone mit Google Android 9.0 oder höher. Solltest Du also über ein neues Smartphone nachdenken, wird mindestens Android 9, idealerweise aber Android 10 oder 12 empfohlen. For older Android versions, older AAPS versions are available see: [Release notes](../Maintenance/ReleaseNotes.md#android-version-and-aaps-version)

Benutzer haben eine [Liste von getesteten Handys und Smartwatches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) erstellt.

Um ein Handy oder eine Smartwatch einzutragen welches noch nicht in der Liste ist, bitte das  [Formular](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) ausfüllen.

Probleme mit der Tabelle bitte per E-Mail an [hardware@androidaps.org](mailto:hardware@androidaps.org) melden. Wenn du Handys oder Smartwatches zum Testen zur Verfügung stellen möchtest, bitte eine E-Mail an [donations@androidaps.org](mailto:hardware@androidaps.org) schreiben.

### Insulinpumpe

AAPS funktioniert **derzeit** mit

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md)  (Old driver that uses the additional Ruffy app)
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (New driver, available starting with AndroidAPS v.3.2)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#additional-communication-device) needed)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#additional-communication-device) needed)

Wenn kein zusätzliches Kommunikationsgerät erwähnt wird, kommuniziert die Insulinpumpe mit AAPS direkt über Bluetooth (ohne das ein zwischengeschaltetes Gerät noch etwas umwandeln muss).

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../CompatiblePumps/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Zusätzliches Kommunikationsgerät

Für alte Medtronic-Pumpen ist ein zusätzliches Kommunikationsgerät (neben Deinem Smartphone) erforderlich, um das Funksignal von der Pumpe zu Bluetooth "zu übersetzen". Wähle die richtige Variante des Kommunikationsgeräts aus, je nach dem welche Pumpe Du nutzt.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Kontakt:](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt:](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Kontakt:](https://jameswedding.substack.com/) - nicht getestet

**Welche Pumpe ist mit AAPS am Besten für den Closed Loop geeignet?**

Die Combo, die Insight und die älteren Medtronic Pumpen sind solide und "loopfähig". Die Combo hat wegen des Standard Luer-Lock-Anschlusses auch den Vorteil, dass die Auswahl an Kathetern groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-).

Die Vorteile der DanaR/RS und Dana-i vs. der Combo sind aber:

- Die Dana Pumpen können sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z. B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn Dein Smartphone kaputt geht oder gestohlen wird, kannst Du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern... Mit der Combo ist das nicht so einfach.  jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
- Das erste Einrichten der Verbindung zwischen der Dana-i/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
- Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn Du Dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z. B. beim Kochen).
- Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB.  Die Dana-i/RS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
- Die History kann auf der Dana-i/RS in wenigen Sekunden mit COB ausgelesen werden. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
- Alle Pumpen, die AAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

### BZ-Quelle

Dies ist nur eine kurze Übersicht über alle mit AAPS kompatiblen CGM/FGM. For further details, look [here](CompatiblesCgms.md). Nur ein kurzer Hinweis: Wenn Du Deine Glukose-Daten in der xDrip+ App oder Deiner Nightscout-Website anzeigen kannst, kannst Du xDrip+ (oder Nightscout mit Webverbindung) als BZ-Quelle in AAPS wählen.

- [Dexcom G7](../CompatibleCgms/DexcomG7.md): Works with xDrip+ or patched app
- [Dexcom G6](../CompatibleCgms/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](../Maintenance/ReleaseNotes.md#version-300) for details). xDrip+ muss mindestens Version 2022.01.14 oder neuer sein
- [Dexcom G5](../CompatibleCgms/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Libre 3](../CompatibleCgms/Libre3.md): It works with xDrip+ (no transmitter needed)
- [Libre 2](../CompatibleCgms/Libre2.md): It works with xDrip+ (no transmitter needed)
- [Libre 1](../CompatibleCgms/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../CompatibleCgms/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md): quite complicated with a lot of extra stuff
- [PocTech](../CompatibleCgms/PocTech.md)

### Nightscout

Nightscout ist eine Open Source Web-Anwendung, die Deine CGM-Daten und AAPS-Daten protokollieren und anzeigen kann und Berichte erstellt. Mehr Informationen findest Du auf der [Website des Nightscout-Projekts](http://nightscout.github.io/). Du kannst Deine eigene [Nightscout-Website](https://nightscout.github.io/nightscout/new_user/) erstellen, die halbautomatische Nightscout-Einrichtung auf [zehn.be](https://ns.10be.de/en/index.html) oder auf Deinem eigenen Server hosten (dies ist für IT-Experten).

Nightscout ist unabhängig von den anderen Modulen. Du brauchst aber auf jeden Fall eine Nightscout-Seite, um das Objetive (Ziel) 1 abzuschließen.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../SettingUpAaps/Nightscout.md).

### AAPS-.apk Datei

Die grundlegende Komponente des Systems. Bevor Du die App installierst, musst Du zuerst die apk-Datei (das ist Dateinamenerweiterung für eine Android-App) erstellen. Instructions are  [here](../SettingUpAaps/BuildingAaps.md).

## Optionale Komponenten

### Smartwatch

Jede Smartwatch mit Android 1.x oder höher funktioniert. Viele Looper verwenden eine Sony Smartwatch 3 (SWR50), da diese auch Werte vom Dexcom G5/G6 empfangen kann, wenn sich das Smartphone nicht in Reichweite befindet. Einige andere Smartwatches können so gepatched werden, dass sie als 'Standalone receiver' verwendet werden können (siehe [diese Dokumentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) für weitere Details).

Es gibt eine von AAPS Anwendern erstellte [Liste mit getesteten Smartphones und Smartwatches:](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../UsefulLinks/WearOsSmartwatch.md).

Um ein Handy oder eine Smartwatch einzutragen welches noch nicht in der Liste ist, bitte das  [Formular](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) ausfüllen.

Probleme mit der Tabelle bitte per E-Mail an [hardware@androidaps.org](mailto:hardware@androidaps.org) melden. Wenn du Handys oder Smartwatches zum Testen zur Verfügung stellen möchtest, bitte eine E-Mail an [donations@androidaps.org](mailto:hardware@androidaps.org) schreiben.

### xDrip+

Auch wenn Du die xDrip+ App nicht als BZ-Datenquelle benötigst, kannst Du sie dennoch für  Alarme oder eine gute Anzeige der Glukosewerte verwenden. Du kannst in xDrip+ beliebig viele Alarme einreichten, festlegen zu welchen Zeiten diese aktiv sein sollen, ob sie die Stummschaltung des Smartphones überschreiben können etc. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Beachte bitte, dass die Entwicklung von xDrip+ sehr agil ist und die Dokumentation damit teilweise nicht Schritt halten und entsprechend nicht immer aktuell sein kann.

## Wartezeit überbrücken

Manchmal dauert es eine Weile, um alle Module für den Closed Loop zusammen zu bekommen. Aber keine Sorge, es gibt viele Dinge, die Du in der Zwischenzeit machen kannst. Es ist ABSOLUT WICHTIG, Deine Basalrate (BR), die KH-Faktoren (IC), Korrekturfaktoren (ISF) etc. intensiv zu prüfen und ggf. anzupassen. Der Open Loop ist zudem eine sehr gute Möglichkeit, das System kennenzulernen und mit AAPS vertraut zu werden. Im Open Loop gibt AAPS Behandlungsempfehlungen, die Du manuell ausführen kannst.

Du kannst Dich weiter durch das Wiki arbeiten, online und offline mit anderen Loopern in Kontakt treten, weitere [Hintergrundinfos](../Where-To-Go-For-Help/Background-reading.md) oder Berichte von anderen Loopern lesen. Sei aber vorsichtig, nicht alle Anwenderberichte müssen richtig oder für Deinen Fall zutreffend sein.

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your [hardware](index-component-setup).
