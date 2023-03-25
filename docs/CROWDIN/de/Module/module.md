# Übersicht der Komponenten

AAPS ist nicht einfach eine (selbst erstellte) App, es ist eines von verschiedenen Modulen Deines Closed Loop Systems. Bevor Du Dich für die einzelnen Komponenten entscheidest, solltest Du einen Blick auf das [Komponenten-Setup](index-component-setup), werfen.

```{image} ../images/modules.png
:alt: Übersicht der Komponenten
```

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

Die aktuelle Version von AAPS erfordert ein Android Smartphone mit Google Android 8.0 oder höher. Solltest Du also über ein neues Telefon nachdenken, wird mindestens Android 8.1, idealerweise aber Android 9 oder 10 empfohlen. Aus Sicherhheitsgründen wird Dir dringend empfohlen Deine AAPS-Version immer auf dem letzten Stand zu halten bzw. zu bringen. Wenn Dein Smartphone kein Android 8.0 oder höher haben sollte, steht Dir die AAPS-Version 2.6.1.4 im [alten Repository](https://github.com/miloskozak/AAPS) zur Verfügung. AAPS-Version 2.6.1.4 kann mit älteren Android-Versionen genutzt werden.

Benutzer haben eine [Liste von getesteten Handys und Smartwatches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) erstellt.

Um ein Handy oder eine Smartwatch einzutragen welches noch nicht in der Liste ist, bitte das  [Formular](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) ausfüllen.

Probleme mit der Tabelle bitte per E-Mail an [hardware@androidaps.org](mailto:hardware@androidaps.org) melden. Wenn du Handys oder Smartwatches zum Testen zur Verfügung stellen möchtest, bitte eine E-Mail an [donations@androidaps.org](mailto:hardware@androidaps.org) schreiben.

### Insulinpumpe

AAPS funktioniert **derzeit** mit

- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) (zusätzlich werden Ruffy App, LineageOS oder Android 8.1 auf Deinem Smartphone benötigt)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [DanaR](../Configuration/DanaR-Insulin-Pump.md)
- [Dana-i/RS](../Configuration/DanaRS-Insulin-Pump.md)
- [Einige alte Medtronic Pumpen](../Configuration/MedtronicPump.md) ab AAPS Version 2.4 ([zusätzliches Kommunikationsgerät](module-additional-communication-device) erforderlich)
- [Omnipod Eros](../Configuration/OmnipodEros.md) ([zusätzliches Kommunikationsgerät](module-additional-communication-device) erforderlich)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)

Wenn kein zusätzliches Kommunikationsgerät erwähnt wird, kommuniziert die Insulinpumpe mit AAPS direkt über Bluetooth (ohne das ein zwischengeschaltetes Gerät noch etwas umwandeln muss).

Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen findest Du [hier](../Getting-Started/Future-possible-Pump-Drivers.md).

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

- Die Dana Pumpen können sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z. B. durch das Lineage Betriebssystem) ist nicht nötig. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### BZ-Quelle

This is just a short overview of all compatible CGMs/FGM with AAPS. For further details, look [here](../Configuration/BG-Source.md). Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

- [Dexcom G6](../Hardware/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](Releasenotes-important-hints-3-0-0) for details). xDrip+ must be at least version 2022.01.14 or newer
- [Dexcom G5](../Hardware/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Dexcom G4](../Hardware/DexcomG4.md): These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
- [Libre 2](../Hardware/Libre2.md): It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
- [Libre 1](../Hardware/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../Hardware/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../Hardware/MM640g.md): quite complicated with a lot of extra stuff

### Nightscout

Nightscout is a open source web application that can log and display your CGM data and AAPS data and creates reports. You can find more information on the [website of the Nightscout project](http://nightscout.github.io/). You can create your own [Nightscout website](https://nightscout.github.io/nightscout/new_user/), use the semi-automated Nightscout setup on [zehn.be](https://ns.10be.de/en/index.html) or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../Installing-AndroidAPS/Nightscout.md).

### AAPS-.apk file

The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  [here](../Installing-AndroidAPS/Building-APK.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see [this documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) for more details).

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../Configuration/Watchfaces.md).

Um ein Handy oder eine Smartwatch einzutragen welches noch nicht in der Liste ist, bitte das  [Formular](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) ausfüllen.

Probleme mit der Tabelle bitte per E-Mail an [hardware@androidaps.org](mailto:hardware@androidaps.org) melden. Wenn du Handys oder Smartwatches zum Testen zur Verfügung stellen möchtest, bitte eine E-Mail an [donations@androidaps.org](mailto:hardware@androidaps.org) schreiben.

### xDrip+

Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../Configuration/xdrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. Der Open Loop ist zudem eine sehr gute Möglichkeit, das System kennenzulernen und mit AAPS vertraut zu werden. Im Open Loop gibt AAPS Behandlungsempfehlungen, die Du manuell ausführen kannst.

Du kannst Dich weiter durch das Wiki arbeiten, online und offline mit anderen Loopern in Kontakt treten, weitere [Hintergrundinfos](../Where-To-Go-For-Help/Background-reading.md) oder Berichte von anderen Loopern lesen. Sei aber vorsichtig, nicht alle Anwenderberichte müssen richtig oder für Deinen Fall zutreffend sein.

**Fertig?** Wenn Du alle Komponenten für AAPS zusammen hast - oder zumindest genug, um mit dem Open Loop zu beginnen - solltest Du zuerst die Beschreibung der [Objectives (Ziele)](../Usage/Objectives.md) lesen und Deine [Hardware](index-component-setup) einrichten.
