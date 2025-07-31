# Eigene Zifferblätter - Referenzdokument

Diese Seite ist für Designer neuer Zifferblättern gedacht. Es listet alle verfügbaren Schlüsselbegriffe und Funktionen auf, die für das Erstellen oder Animieren von neuen Zifferblättern genutzt werden können.

- Die neuen Funktionalitäten und Keys des Custom Watchface V2 (Wear apk 3.3.0 oder neuer) sind [hier](#cwf-reference-new-v2-features) zu finden

## "Custom Watchface"-Format

"Custom Watchface" ist ein offenes Format, das für AAPS entwickelt wurde und mit dem neuen "AAPS (Custom)"-Zifferblatt verknüpft ist.

Die Zifferblatt-Datei ist eine einfache Zip-Datei. Damit sie auch als Zifferblatt erkannt werden kann, muss sie die folgenden Dateien enthalten:

- Eine Bilddatei mit dem Namen "CustomWatchface" (zulässige Bitmap-formate sind `CustomWatchface.jpg`, `CustomWatchface.png` oder ein Vektor `CustomWatchface.svg`). Diese Datei wird als Icon in der Zifferblatt-Auswahl angezeigt, wenn Du auf "Watchface laden" klickst. Das Bild wird auch auf den Buttons im WEAR-Tab angezeigt.
- Eine Datei mit dem Namen `CustomWatchface.json` (siehe [JSON-Struktur](#cwf-reference-json-structure) unten). Diese zweite Datei ist die Schlüsseldatei, die alle Informationen enthält, die für das Design des Zifferblattes bestimmt. Diese json-Datei muss gültig sein (das ist wahrscheinlich der schwierigste Punkt, wenn Du diese Datei von Hand in einem Texteditor bearbeitest, weil bereits ein fehlendes oder zusätzliches Komma ausreicht, um das json-Format zu zerstören). Diese JSON-Datei muss auch einen `"metadata"` Block mit einem `"name"` Schlüssel mit nicht leerem Wert enthalten. Dies wird später der Zifferblatt-Name sein (siehe [Metadaten Einstellungen](#cwf-reference-metadata-settings) unten)
- Die ZIP-Datei sollte so klein wie möglich (kleiner als 500 KB) sein. Eine zu große Datei wird geblockt und nicht an die Smartwatch übertragen.

Die ZIP-Datei kann auch einige zusätzliche Ressourcen-Dateien enthalten:

- Hardcodierte Dateinamen für Bilder, die in Standardansichten der Smartwatch verwendet werden (wie `Background`, `CoverChart` ...) findest Du in der [Liste der hartkodierten Ressourcen-Dateien](#cwf-reference-list-of-hardcoded-resource-files) unten. Gültige Dateiformate sind: `jpg`, `png` oder `svg`. Für die meisten wirst Du `png` oder `svg`, die mit Transparenz umgehen können, nutzen müssen. (jpg sind kleiner als png, können aber keine Transparenz darstellen). Hinweis: Das beste Verhältnis zwischen Qualität und Dateigröße bietet das Vektorformat (svg-Dateien).
- Zusätzliche Ressourcen-Dateien mit freien Namen. Diese zusätzlichen Dateien können entweder Bilddateien oder Schriftarten sein (`ttf` und `otf` Formate werden für Schriftarten akzeptiert). Beachte bitte, dass für diese zusätzlichen Dateien `Dateiname` (ohne die Erweiterung) als Schlüsselwert innerhalb der JSON-Datei verwendet wird, um festzulegen, wo oder wann diese Dateien verwendet werden sollen.
  - Bilddateien werden häufig als Hintergrund für Textansichten oder für dynamische Animationen (wie zum Beispiel den Akkustand zwischen 0% und 100%) eingesetzt
  - Schriftarten-Dateien ermöglichen Dir eigene Schriftarten innerhalb Deines Zifferblattes zu nutzen

(cwf-reference-json-structure)=

## JSON-Struktur

JSON-Dateien können im Texteditor Editor (oder Notepad++) bearbeitet werden (Notepad++ erkennt JSON und nutzt Farbformatierungen und ist daher zu bevorzugen)

- Es enthält String Keys `"string_key":` und Schlüsselwerte, die Strings wie `"key value"`, integer, boolean wie `true`oder `false` oder Datenblöcke sein können.
- Werte werden durch ein Komma `,` getrennt
- Ein Datenblock beginnt mit `{`  und endet mit `}`
- Die JSON Datei ist ein vollständiger Block. Er startet mit `{`  und endet mit `}`. Alle in der Datei eingebetteten Blöcke sind mit dem Schlüssel `"key"` verknüpft. Diese Schlüssel sollten innerhalb des Blocks "unique" sein
- Um die Lesbarkeit der JSON Datei zu verbessern, werden Einrückungen genutzt (jeder neue Schlüssel befindet sich in einer neuen Zeile, jeder neue Block wird rechts von 4 Leerzeichen verschoben)

(cwf-reference-metadata-settings)=

### Metadaten-Einstellungen

Dieser Block ist der erste und verpflichtende Block, der in der JSON-Datei enthalten ist. Er enthält alle für das Zifferblatt wichtige Informationen (Name, Autor, Ertstell-/Aktualisierungsdatum, Version oder Plugin-Version).

Ein Beispiel des Metadatenblocks:

```json
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template"
},
```

Beachte, dass `/` für das Datum ein Sonderzeichen ist. Damit es in der JSON Datei richtig erkannt wird, muss davor ein "escape"-Zeichen `\` gesetzt werden.

Einige JSON-Dateien enthälten den zusätzlichen Schlüssel `"filename"`. Dieser Schlüssel wird automatisch erzeugt und aktualisiert, wenn das Zifferblatt in AAPS geladen wird. Er wird für den Dateinamen der ZIP-Datei im "Exports"-Orndner benötigt. Du kannst diesen Schlüsselö also aus dem Metadatenblock löschen.

(cwf-reference-general-parameter-settings)=

### Allgemeine Parameter-Einstellungen

Nach dem ersten Block mit Metadaten, werden einige allgemeine Parameter gesetzt (siehe [ListederallgemeinenParameter](#cwf-reference-list-of-general-parameters) unten). Damit kannst Du die Farben der Graphen (Kohlenhydrate, Bolus, Glukosewerte ...), und auch die Standardfarben für Werte im Zielbereich, Hyper oder Hypo (Standardfarben für den Glukosewert und die Trendpfeile) setzen.

Ein Beispiel für allgemeine Parameter:

```json
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### ImageView-Einstellungen

Ein benutzerdefiniertes Bild kannmit dem richtigen Dateinamen, der jedem ImageView zugeordnet ist, und in das benutzerdefinierte Zifferblatt-Layout aufgenommen wurde, angepasst werden. Dann dient der JSON-Block nur dazu, die Position, die Größe, und die sichtbarkeit zu definieren und optional die Farbe anzupassen:

Hier ist ein Beispiel eines Image-Blocks für second_hand, (in diesem Fall ist keine Bilddatei in der ZIP-Datei enthalten, sodass das Default second hand Bild genutzt (jedoch farblich angepasst) wird.

```json
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
Um das "second_hand" Bild mit einer Standardfarbe einzufärben (lowRange, midRange oder highRange), muss die unterste Zeile mit dem Schlüsselwert `bgColor` geändert werden.

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### TextView-Einstellungen

TexView hat mehr Parameter ImageView: Du kannst die Rotation (ganze Zahl in Grad) verändern, Textgröße (textsize: ganze Zahl in Pixel), Gravity (um festzulegen, ob der Textwert zentriert wird (Standardwert) oder links oder rechts ausgerichtet ist), die Schriftart, FontStyle und FontColor, sowie die Hintergrundfarbe der Textansicht festlegen

```json
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Beachte bitte, dass wenn Du nicht möchtest, dass eine Ansicht innerhalb Deines Zifferblatts verwaltet wird, Du den Key `"visibility"` auf `"gone"` und auch die Größe und Position außerhalb des sichtbaren Bereichs setzt, so wie es hier gezeigt wird:

```json
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Wenn Größe und Position innerhalb des sichtbaren Bereichs liegen, kannst Du beim Aktualisieren des Zifferblatts einen kurzes "Blitzlicht" des versteckten Werts erhalten.

Wenn Du das Hintergrundbild eines Textfelds anpassen möchtest, kannst Du dazu den Key `"background":` verwenden und den Dateinamen des Bildes, das in der Zip-Datei enthalten ist, als Schlüsselwert angeben. Alternativ kannst Du auch einfach die Hintergrundfarbe mit dem Key `"color:"` ändern.

```json
"background": "fileName"
```

Du hast auch 4 spezifische textViews (freetext1 bis freetext4) zur Verfügung, die einen besonderen Parameter `"textvalue":` haben, der z.B. auch für ein Label verwendet werden kann.

(cwf-reference-chartview-settings)=

### ChartView-Einstellungen

ChartView ist eine sehr spezifische Ansicht, die sich einige Parameter mit ImageView oder mit TextView teilen kann...

Die Standardeinstellungen für diese Ansicht sind sehr einfach:

```json
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
Zwei zusätzliche Parameter, die Du für die Diagrammansicht (ChartView) hinzufügen kannst, sind die Hintergrundfarbe (Key `"color"`) und das Hintergrundbild (Key `"background"`). Die Standardhintergrundfarbe ist 'transparent'.

(cwf-reference-how-to-build-watchface)=

## Wie Du Dein erstes Zifferblatt entwirfst/erstellst

### Benötigte Werkzeuge

- Texteditor: Mein Rat ist, NotePad++ (oder etwas Gleichwertiges) zu verwenden. Das ist ein einfacher Texteditor, dessen Mehrwert darin liegt, formatierten Text mit Farbcodes sichtbar zu machen, und das Erkennen von Fehlern damit einfacher macht. Das kann mit jedem einfachen Texteditor gemacht werden. Da der Zweck ist es, die json Informationen anzupassen.
- Bildeditor (Bitmap und/oder Vektor)
  - Wenn Du Bitmaps verwendest
    - Der Bildeditor sollte in der Lage sein, mit Transparenz (erforderlich für alle Bilder über dem Hintergrund) und dem png-Format (wenn Du ein Bitmap-Bild verwendet hast) umzugehen
    - Das Hintergrundbild kann im jpg-Format sein (kleiner als png)
    - Der Bildeditor sollte grafische Objekte in Pixel messen können (das kann ein einfaches Quadrat sein) (oben, links, Breite, Höhe)
    - Der Bildeditor sollte Farben mit dem RRVVBB-Code in Hexadezimal anzeigen können
    - Der Bildeditor sollte Bilder auf 400px x 400px (eine der wichtigsten Auflösungen) verkleinern können
  - Wenn Du Vektoren verwendest
    - Die Vektorgrafik sollte im svg-Format exportiert werden

### Vorlagen nutzen, um nicht bei Null starten zu müssen

Wenn Du Dein erstes Zifferblatt entwerfen möchtest, startest Du am besten mit dem Standard-Zifferblatt, da Du damit automatisch die neueste Version mit allen verfügbaren und korrekt sortierten Ansichten zur Verfügung hast

- Du bekommst die Zip-Datei, indem Du im Wear-Plugin auf "Export Template" tippst. Die Zip-Datei wird damit erstellt und ist dann im AAPS/exports-Ordner verfügbar
- Die Schaltflächen für benutzerdefinierte Zifferblätter (custom watchfaces) sind nur dann verfügbar, wenn AAPS mit einer Smartwatch verbunden ist. Eine verbundene Smartwatch ist allerdings auch notwendig, um Deine selbst erstellten Zifferblätter zu prüfen, zu testen und zu verbessern

Das Standard-Zifferblatt ist sehr einfach gehalten und die Zip-Datei enthält nur die 2 Dateien:

- CustomWatchface.png (Das Bild des Standard-Zifferblatts, das in der Zifferblatt-Auswahl angezeigt wird)
- CustomWatchface.json

### Organisiere Deine Dateien auf Deinem Computer

Am einfachsten ist es das Smartphone mit dem Computer zu verbinden und mit bestimmten Ordnern zu arbeiten:

- In einem Datei-Explorer-Fenster, wird der Ordner angezeigt, der alle Dateien (JSON, Bitmap-Bilder, Vektorgrafiken, Schriftarten) und die Datei "CustomWatchface.zip" enthält
- In einem weiteren Datei-Explorer-Fenster wird der Ordner /AAPS/exports Deines verbundenen Smartphones angezeigt

Das vereinfacht das Arbeiten erheblich: Bei jeder Änderung mit dem Texteditor an der JSON-Datei und/oder der Änderung des Bildes mit einem Bildeditor (Bitmap oder Vektor) musst Du lediglich:

1. die Änderung in der jeweiligen App speichern
2. alle Dateien innerhalb der CustomWatchface.zip Datei herüberziehen (Drag & Drop)
3. die Datei CustomWatchface.zip in den Ordner AAPS/exports des Smartphones herüberziehen (Drag & Drop)
4. CustomWatchface an die Smartwatch übertragen, um das Ergebnis zu prüfen

### Die Zifferblatt-Anpassung beginnen

Im ersten Schritt musst Du einen Namen für das Zifferblatt festlegen (das ist notwendig, um es später zum Testen auswählen zu können) und beginne damit, die Metadaten (metadata keys) am Anfang der JSON-Datei anzupassen

Dann musst Du festlegen, welche Informationen angezeigt werden sollen, d. h. Du definierst welche Ansicht sichtbar sein soll und welche ausgeblendet werden soll.

- Soll ein Sekundenzeiger genutzt werden?
- Möchtest Du eine Digital-Uhr oder eine analoge Uhr (oder beides) entwerfen?

Nun kannst Du damit beginnen den `"visibility":` Key der einzelnen Ansichten festzulegen, indem Du ihnen entweder den Wert `"visible"` oder `"gone"` (je nachdem, ob Du die Ansicht behalten möchtest oder nicht) zuweist

Du kannst damit beginnen die ungefähren oberen und linken Ränder, sowie die Breite und Größe des Zifferblatts festzulegen (diese Werte werden später mit dem Bildeditor)

Hinweis: Alles innerhalb eines **400px x 400px Rechtecks** kann gestaltet werden. Alle Angaben sind absolute Koordinaten innerhalb dieses Bereichs.

Wenn Du Dein erstes Zifferblatt entwirfst ist es wichtig zu wissen, dass alles in Schichten (layer) beginnend von hinten nach vorne aufgebaut ist. Jede Ansicht (ImageView oder TextView) kann etwas Dahinterliegendes verdecken...



![CustomWatchface layers](../images/CustomWatchface_1.jpg)



Innerhalb der JSON-Datei werden dann alle Ansichten von hinten nach vorne sortiert (das hilft Dir zu erkennen, was hinter wem verborgen ist)

Wenn Du Dein erstes benutzerdefiniertes Zifferblatt entwirfst oder anpasst, beginne mit einfachen Dingen: ändere die Sichtbarkeit einiger Ansichten, füge ein dediziertes Hintergrundbild, ohne die JSON-Datei zu ändern, hinzu...

### Farben verwalten

Innerhalb der JSON-Datei hast Du mehrere Schlüssel (Keys), um die Farben festzulegen: `"color"`, `"fontColor"` für Ansichten, aber auch `"highColor"`, `"midColor"`, `"lowColor"`, ... (vgl. [Liste allgemeiner Parameter](#cwf-reference-list-of-general-parameters))

Farben werden mit einem Textfeld angegeben, das mit `#` beginnt, gefolgt von RRGGBB (Rot, Grün, Blau) Werten im hexadezimalen Format:

- `"#FFFFFF"` ist weiß, und `"#000000"` ist schwarz, `"#FF0000"` ist rot...

Du kannst auch 2 zusätzliche Werte für den Alphakanal und eine Transparenzstufe angeben (AARRGGBB):

- `"#00000000"` ist komplett transparent, und `"#FF000000"` ist komplett undurchsichtig (damit ist `"#FF000000"` identisch mit `"#000000"`)

Du kannst auch den spezifischen Schlüsselwert (keyvalue) `"bgColor"` verwenden, um damit automatisch die dem jeweiligen Glukosewert zugeordneten Farben für `"highColor"`, `"midColor"`, `"lowColor"`, die in in den allgemeinen Parametern festgelegt sind, zu nutzen:

- `"fontColor": "bgColor",` wird automatisch die Schriftfarbe der Ansicht (fontColor) auf die des zugeordneten Glukosewertes (bgColor) anpassen
- Beachte, dass `sgv` (für die Glukosewert-Ansicht) und `direction` (für die Trendpfei-Ansicht automatisch die Glukosewert-Farben verwenden, die in den allgemeinen Parametern festgelegt sind (für diese beiden Ansichten). Wenn Du unterschiedliche Farben haben möchtest, musst Du die erweiterte [dynData](#cwf-reference-dyndata-feature)-Funktion mit einer One-Step-Farbe verwenden...)

Um mehr über ImageViews und die `"color":`-Schlüssel zu erfahren, kannst Du unten das eigene Kapitel [Farbe des Bildes anpassen](#cwf-reference-tune-image-color) lesen.

### Hardcodierte Bilder einbinden

Der einfachste Weg Dein Zifferblatt anzupassen ist, einige Bilder mit spezifischen Namen in die Zip-Datei aufzunehmen (siehe [Liste der fest codierten Ressourcendateien](#cwf-reference-list-of-hardcoded-resource-files))

- Das Bild sollte das `.jpg`, `.png` oder `.svg`-Format haben. Aber Vorsicht, jpg unterstützt keine Transparenz, sollte also nur für den Hintergrund verwendet werden. Für alle dazwischen liegenden Schichten (cover_chart, cover_plate, Zeiger) verwende entweder Bilder im `.png`- oder `.svg`-Format

- Wenn einen Vektorbildeditor hast (wie zum Beispiel "Illustrator"), bevorzuge ein Format, das kleine Textdateien mit der `.svg`-Erweiterung und bester Qualität erzeugt.
- Du solltest darauf achten, den genauen Dateinamen zu verwenden (einschließlich Groß-/Kleinschreibung)

Wenn Du jetzt ein spezielles Hintergrundbild haben möchtest, musst Du nur eine Datei mit dem Namen `Background.jpg` in die Zip-Datei aufnehmen (ohne sonst etwas zu ändern). Sende die Zip-Datei an die Smartwatch und überprüfe das Ergebnis!.

Wenn Du den Stundenzeiger (hour_hand), Minutenzeiger (minute_hand) oder den Sekundenzeiger (second_hand) einer analogen Uhr anpassen möchtest, füge einfach `HourHand.png` (oder `HourHand.svg`), `MinuteHand.png` und `SecondHand.png` hinzu.

- Diese Bilder werden automatisch um das Zentrum des Bildes rotieren, daher sollten die Bilder auf 00:00:00 eingestellt werden (und für eine "Vollbild"-Analoguhr verwende eine Größe von 400 x 400 px, positioniert oben 0 links 0)

Innerhalb der [Liste der fest codierten Ressourcendateien](#cwf-reference-list-of-hardcoded-resource-files) gibt es für jede Bildansicht zwei zusätzliche fest codierte Dateinamen `High` und `Low` (zum Beispiel kannst Du andere Bilder mit den Dateinamen `BackgroundHigh.jpg` und `BackgroundLow.jpg` zum Zip-Ordner hinzufügen). Das Bild wird dann automatisch passend zu Deinem Glukosewert geändert (im Zielbereich, Hyper oder Hypo). Schau Dir das AIMICO-Zifferblatt als Beispiel an.

(cwf-reference-tune-image-color)=

### Bildfarbe anpassen

Der `"color"`-Schlüssel kann verwendet werden, um die Standardbildfarbe anzupassen:

- Angewendet auf die Hintergrundansicht wird damit die Hintergrundfarbe eingestellt (Standardmäßig schwarz)
- Angewendet auf die cover_plate (einfaches Zifferblatt) oder die Zeiger ändert es das Standardbild (weiß) durch die angegebene Farbe (einschließlich `"bgColor"`)

Wenn Du `"color"` auf ein Bitmap-Bild anwendest (`. pg` oder `.png`), wird die Farbe wird einen interessanten Effekt auf die Farbsättigung haben. Du wirst Dein Bitmap immer noch erkennen.

Der `color`-Schlüssel wird auf Bilddateien im `.svg`-Format keine Wirkung haben, nimm an die Farbe der Vektor-Dateien sei fest codiert. Wenn Du die Farben ändern möchtest, musst Du mehrere `svg`-Dateien einbinden und die [dynData](#cwf-reference-dyndata-feature)-Funktion verwenden, um sie zu ändern

### Zusätzliche Schriftarten für TextViews verwenden

Mehrere Standardschriftarten sind bereits in der Wear-App verfügbar (siehe font-Keys im Kapitel [Schlüsselwerte](#cwf-reference-key-values)). Wenn Du aber zusätzliche Schriftarten verwenden möchtest, die nicht standardmäßig verfügbar sind, kannst Du zusätzliche Schriftarten in die Zip-Datei aufnehmen:

- Die beiden zulässigen Font-Formate sind `.ttf` und `.otf`
- Wenn Du eine eigene Schriftart in der Zip-Datei aufnimmst, zum Beispiel eine Datei mit dem Namen `myCustomFont.ttf`, dann muß genau dieser Dateinamen genutzt werden, um sie in der JSON-Datei für einen TextView zu verwenden:

```
"font": "myCustomFont",
```

Habe im Hinterkopf, dass einige Schriftarten in große Dateien eingebunden sein können (und es eine Größenbeschränkung für die Zip-Datei gibt). Wenn Du also nur wenige Buchstaben nutzt (Zahlen, `.`, `,`), kannst Du auch frei verfügbare Tools (z. B. [hier](https://products.aspose.app/font/generator/ttf-to-ttf)) nutzen, um die überflüssigen Buchstaben zu löschen und so die Größe der Fonts zu reduzieren.

(cwf-reference-advanced-features)=

## Erweiterte Funktionen

(cwf-reference-preference-feature)=

### Voreinstellungen

CustomWatchface kann einige Voreinstellungen der Uhren automatisch anpassen, um die korrekte Darstellung des Zifferblatts zu ermöglichen (sofern vom Benutzer innerhalb der Wear-Einstellungen autorisiert).

Diese Funktion sollte aber mit Vorsicht verwendet werden. Voreinstellungen werden mit allen anderen Zifferblättern geteilt. Es gibt also einige Regeln bei dieser Funktion zu beachten:

- Lege niemals Einstellungen, die sich auf versteckte Ansichten (hidden views) beziehen, fest
- Versuche die sichtbaren Ansichten zu maximieren
- Stelle die Breite bestimmter Ansichten übergroß dar (oversize):
  - TBR kann als Prozentsatz angezeigt werden (geringe Breite, aber auch als absolute Werte: viel breiter)
  - delta oder avg delta mit detaillierten Informationen können sehr breit sein
  - Das Gleiche gilt für iob2: Diese Ansicht kann einen Gesamt-IOB haben, aber wenn ein detailliertes IOB ausgewählt ist, kann die Textgröße sehr lang sein

Wenn Du immer noch einige sehr spezifische Einstellungen für eine korrekte Anzeige zu erreichen benötigen solltest (im Beispiel unten, wenn nicht genügend Platz für detaillierte IOB vorhanden ist), kannst Du diesen Parameter auf Deiner Uhr auf `false` "zwingen". Einige Einstellungen kannst Du als Beschränkung in den Metadaten-Block wie folgt aufnehmen

```json

```

Wenn der Nutzer es zulässt, das das benutzerdefinierte Zifferblatt die Parameter der Smartwatch ändern darf (eine Einstellung im Wear-Plugin), dann wird "Show detailed iob" auf "disable" gesetzt, und für eine Deaktivierung gesperrt (keine Änderung des Paramters möglich, bis dass die Autorisierung im Wear-Plugin-Parameter deaktiviert wird oder ein anderes Zifferblatt ausgewäht wird)

- Beachte, dass wenn ein Benutzer ein Zifferblatt auswählt, er die Anzahl der "benötigten Parameter" während der Zifferblattauswahl sehen kann

Im untenstehenden Beispiel hat das Gota-Zifferblatt einen erforderlichen Parameter. Wenn keine Autorisierung vorliegt, wird es in weißer Farbe angezeigt. Wenn aber eine Autorisierung vorliegen sollte, wird dieser Parameter fest gesetzt und auf der Uhr gesperrt (in diesem Fall ist die Zahl in orangener Farbe)

![](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### TwinView-Funktion

Zwillingsansichten (Twin Views) bieten eine einfache Möglichkeit, die Ansichtsposition basierend auf den sichtbaren Ansichten anzupassen. Dies hat nicht die Kraft eines vollständig aus LinearLayout bestehenden Layouts, kann jedoch viele gängige Fälle verarbeiten.

Im Beispiel unten siehst Du das AAPS (Cockpit)-Zifferblatt mit allen Ansichten in den Einstellungen, und das gleiche Zifferblatt mit deaktiviertem "Show rig battery" und deaktiviertem "Show avg delta"

![](../images/CustomWatchface_3.jpg)

Du erkennst, dass wenn eine der beiden Ansichten versteckt ist, die andere Ansicht in die Mitte verschoben wird

Im Beispiel siehst Du innerhalb des `"uploader_battery"`-Blocks der `"twinView":`-Schlüssel hinzugefügt ist, um die `"rig_battery"`-Ansicht zu definieren. Im `"rig_battery"`-Block definiert der `"twinView":`-Schlüssel die Ansicht `"uploader_battery"` als Zwilling. Der zusätzliche Schlüssel `"leftOffsetTwinHidden":` definiert dann die Anzahl der Pixel, um die die Ansicht verschiebt, wenn der Zwilling verborgen wird.

Um diese Zahl zu ermitteln: Die Differenz zwischen der leftMargin jeder der beiden Ansichten beträgt 50 Pixel. Daher beträgt der Versatz, um zentriert zu bleiben, die Hälfte in die eine oder andere Richtung.

Wenn die Zwillings-Ansichten vertikal positioniert sind, musst Du den Schlüssel `"topOffsetTwinHidden":` verwenden.

```json
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### DynDaten-Funktion

DynData ist die leistungsstärkste Funktion, wenn Du Animationen, die von einigen internen Werten abhängen (z.B. Glukosewert, Glukosespiegel, Delta, % des Akkus ... siehe Liste der verfügbaren Daten [hier](#cwf-reference-dyndata-key-values)), in Dein Zifferblatt einbinden möchtest.

Um diese Funktion zu veranschaulichen, nehme ich das Beispiel des AAPS (SteamPunk) Zifferblatts:

![](../images/CustomWatchface_4.png)

In diesem Zifferblatt müssen wir die [Rotation des Glukosewerts](#cwf-reference-background-management) (von 30 Grad bis 330 Grad) auf der rechten Seite managen, den [Dynamikbereich von avg_delta](#cwf-reference-avg-delta-management) (Skala bis zu 5 mgdl, 10 mgdl oder 20 mgdl je nach Wert), die [Rotation des Zeigers](#cwf-reference-dynamic-rotation-management), die mit der Skala synchronisiert werden sollte, sowie die verschiedenen Ebenen der Ansichten...

Um dieses Zifferblatt managen zu können, schau Dir die Bilder unten, die in der ZIP-Datei enthalten sind, an:

Hinweis: Um Transparenz sehen zu können, sind alle diese Bilder auf einem gelben Hintergrund und von einem roten Quadrat umgeben

![](../images/CustomWatchface_5.jpg)

- In der ersten Zeile werden Background.jpg und CoverPlate.png automatisch mit der zugeordneten Ansicht (Dateiname der Standardansicht) verknüpft, und steampunk_pointer.png wird von dynData gesteuert
- In der zweiten Zeile siehst Du die drei Skalen des Dynamikbereichs für avg_delta, die ebenfalls von dynData gesteuert werden
- In der dritten Reihe wird chartBackground.jpg manuell mit der Diagrammansicht verknüpft, während die Dateien HourHand.png und MinuteHand.png automatisch mit den zugehörigen Ansichten verbunden werden

(cwf-reference-background-management)=

#### **Hintergrund-Management**

Zunächst, was das Glukosewert-Bild betrifft: Hier gibt es keine Wahl. Es kann nur in der Hintergrundebene sein (sonst wäre es vor der Diagrammansicht und das Diagramm wäre nicht sichtbar!). Also müssen wir den Glukosewert auf den Hintergrund abbilden und dann das Hintergrundbild entsprechend dem Glukosewert drehen.

Innerhalb des `"background"`-Blocks werden wir 2 dedizierte Schlüssel einfügen, um diese Rotation durchzuführen:

```json
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
Der `"dynData":`-Schlüssel wird definieren, welcher Block verwendet werden soll, um die Animation zu definieren (Wert, Bereich, Konvertierung...) hier wurde dieser Block "rotateSgv" genannt (wenn Du diese Funktion nutzt, wähle einen expliziten Namen),

`"rotationOffset": true,` wird festlegen, dass die Animation entsprechend dem Wert rotieren sollte. (andere verfügbare Schlüssel sind `"leftOffset"` und `"topOffset"`, wenn Du einen Schieberegler (Slider) erstellen möchtest)

Jetzt gehen wir ans Ende der Datei, unter die letzte Ansicht:

```json
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
Du siehst unter der letzten Ansicht (`"second_hand"`), einen neu hinzugefügten `"dynData" { ... }`-Block, der alle Animationen enthält:

Der Block, der innerhalb der Ansicht `"background"` definiert wurde, heißt `"rotateSgv"` und ist der erste Block, den Du in `"dynData"` findest!

Dieser Block ist einfach: Du hast einen ersten Schlüssel mit dem Namen `"valueKey":`, der festlegt, welcher Wert verwendet werden soll. In diesem Fall ist `"sgv"` ein "keyValue", der den Glukosewert definiert (beachte, dass der Schlüsselwert in den meisten Fällen den gleichen Namen hat wie die Ansicht, die diese Information anzeigt).

In Bezug auf den Glukosewert wird 39 mg/dl als Minimalwert (min data) und 400 mg/dl Maximalwert (max data) vorbelegt (siehe [DynData-Referenzschlüsselwerte](#cwf-reference-dyndata-key-values) unten allen verfügbaren Schlüsselwerten und den zugehörigen Min/Max-Datenwerten).

Innerhalb des `"rotateSgv"`-Blocks werden die beiden zusätzlichen Schlüssel (`"minData":` und `"maxData":`) verwendet, um die Mindest- und Höchstwerte auf 30 und 330 zu justieren. Mit diesen Min- und Max-Werten können wir den Datenwert direkt (ohne jegliche Konvertierung) verwenden, um den Hintergrund in Grad zu drehen. In dieser Situation werden alle Glukosewerte über 330 mg/dl auf 330 begrenzt, die obere Begrenzung des Bildes.

#### **Chart-Management**

Der Standardhintergrund des Diagramms ist transparent. Um die Glukosewert-Skala, die Teil des Hintergrundbildes ist, auszublenden, müssen wir ein dediziertes Hintergrundbild aufnehmen (dieses Bild wird die gesamten Schatten des Steampunk-Zifferblatts enthalten). Der Link zur Datei charBackground.jpg erfolgt mit dem Schlüssel `"background":`

Natürlich muss die Größenanpassung und Positionierung der Ansicht pixelgenau erfolgen!

```json
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### **Avg delta-Management**

Um mit den dynamischen Bereichen von avg delta umgehen zu können, werden wir die vier Freetext-Ansichten verwenden. freetext1 wird verwendet, um den Bildmaßstab zu verwalten, und freetext2 bis freetext4 werden verwendet, um die Zeigerrotation entsprechend dem Maßstab zu verwalten.

**freetext1**

Wie bereits erklärt, sind Freitextansichten vor dem Diagramm und vor dem Hintergrund platziert, deshalb haben wir einen transparenten Bereich hinzugefügt, um diese Bilder zu sehen (rechte Seite und untere Seite des Bildes)

Beachte, dass der entfernte untere Teil dieser Bilder als Hintergrunddiagramm verwendet wurde, um eine perfekte Integration zu erreichen.

```json
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
Für diese Ansicht fügen wir den Link zu einem anderen `"dynData"`-Block mit dem Namen `avgDeltaBackground` hinzu. Dieser Block wird die avgDelta-Skala entsprechend dem Durchschnitts-Delta-Wert (avgDelta) anpassen.

```json
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":` wird den Link zum Wert `"avg_delta"` herstellen
- min und maxData begrenzen auch den Bereich auf den maximal verfügbaren Wert innerhalb dieses Zifferblatts (von -20 mg/dl bis 20 mg/dl). Für mmol-Benutzer gilt es zu beachten, dass alle internen Werte innerhalb von AAPS immer in mg/dl sind.

Jetzt schauen wir uns an, wie man mit Hintergrundbildern auf Basis eines Wertes dynamisch umgehen kann.

`"invalidImage":` ist der Schlüssel der das Bild referenziert, das angezeigt werden wird, wenn wir ungültige (oder fehlende Daten) haben. Hier erstellen wir den Link zu einem zusätzlichen Ressourcenbild mit einer Skala von 5 mg/dl, das zur Zip-Datei hinzugefügt ist

Dann werden wir eine Reihe von Bildern verwenden, beginnend mit `"image1":` bis `"image8":`. Die Anzahl der bereitgestellten Bilder wird die Anzahl der Schritte zwischen `minData` und `maxData` definieren.

- `image1` definiert das Bild, das angezeigt wird, wenn avg_delta gleich oder nahe bei `minData` ist, und das Bild mit der höchsten Nummer (hier `image8`) wird verwendet, um das Bild zu definieren, das angezeigt werden soll, wenn avg_delta gleich oder nahe bei `maxData` ist
- Zwischen -20mg/dl und 20mg/dl liegen 40 mg/dl; geteilt durch 8 (Anzahl der bereitgestellten Bilder), ergibt 8 Schritte mit je 5 mg/dl
- Jetzt können wir Hintergrundbilder dem jeweiligen avg_delta Wert zuordnen, beginnend mit den niedrigsten Werten: zwischen -20 und -15, und auch zwischen -15 und -10 werden wir  `steampunk_gauge_mgdl_20` für die Skala verwenden, dann zwischen -10 und -5 `steampunk_gauge_mgdl_10`, und so weiter bis +15 und +20, wo wir wieder `steampunk_gauge_mgdl_20` als Hintergrundbild verwenden

(cwf-reference-dynamic-rotation-management)=

**freetext2 bis freetext4**

Für diese Ansichten werden wir dynamische Bilder und die zuvor erklärte Rotationsfunktion kombinieren:

```json
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
Hier ist jede Ansicht einer bestimmten Skala zugeordnet (sie ist mit einem dedizierten dynData-Block verknüpft); Du kannst erkennen, dass der Schlüssel `"rotationOffset":` für diese 3 Ansichten aktiv ist. Schau Dir jetzt den ersten dynData.Block an:

```json

```
Auch wenn der Dynamikbereich für Daten nur zwischen -5 und +5 avg_delta verwendet wird, ist es wichtig, den Gesamtbereich von -20, +20 mg/dl zu behalten, um sicherzustellen, dass der Zeiger während der Skalenumstellungen mit dem Hintergrund synchronisiert wird. Aus diesem Grund behalten wir den gleichen Gesamtbereich wie bei `avgDeltaBackground`  und die gleichen Zahlenschritte (8 Bilder) bei.

Du kannst erkennen, dass `"invalidImage"` oder mehrere `"imagexx"` den Schlüsselwert `"null"` haben (es könnte eine beliebige Zeichenkette sein, die nicht als Dateiname in der Zip-Datei existiert). Wenn ein Dateiname nicht gefunden wird, wird das Hintergrundbild transparent angezeigt. Daher wird sichergestellt, dass der Zeiger nur für Schritt 4 und Schritt 5 sichtbar ist (avg_delta zwischen -5 mg/dl und +5 mg/dl) und außerhalb dieses Bereichs nicht sichtbar ist.

Jetzt sehen wir einen neuen Block `"rotationOffset":`, der zwei Schlüssel `"minValue":` und `"maxValue":` hat. Diese Werte werden verwendet, um die Konvertierung zwischen internen Daten (in mg/dl) und der Winkeldrehung, die wir haben wollen, vorzunehmen.

- Das Steampunk-Zifferblatt ist so konzipiert, dass der Zeiger um maximal -30 Grad bis 30 Grad gedreht werden kann. Also gemäß der Skala (hier von -5 mg/dl bis 5 mg/dl) möchten wir für diese Werte 30 Grad haben. Weil `minData` und `maxData`4-mal größer sind, sind die entsprechenden minValues und maxValues 4 * 30 Grad, also -120 und +120 Grad. Aber für alle Rotationen über oder unter +-30 Grad wird der Zeiger ausgeblendet (kein Bild sichtbar). Der Zeiger wird nur für Werte zwischen -5 und +5 mg/dl sichtbar sein... Also genau das, was hier erwartet wird.

Die anderen dynData-Blöcke werden auf die gleiche Weise definiert, um `"avgDelt10"` und `"avgDelta20"` anzupassen

#### Loop-Ansicht (Loop-View)

Im Steampunk-Ziffernblatt sind grüne und rote Pfeile (für den Status) des Loops deaktiviert. Das wird auch mit einem dedizierten dynData-Block gesteuert, der mit der Loop-Ansicht verknüpft ist.

```json
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Weil dieser Block nur durch die Loop-View aufgerufen wird und die Standarddaten, die von dieser Ansicht verwaltet werden, Loop-Informationen sind, ist der Schlüssel `"valueKey":` optional.

Die Standardwerte `minData` und `maxData` für den Loop werden auf 0min und 28min festgelegt, sodass bei zwei Bildern alle Datenwerte unter 14 Minuten mit dem Hintergrund `image1` angezeigt werden und alle Datenwerte über 14 Minuten mit `image2` angezeigt werden. 14 Minuten ist genau die Schwelle, um vom grünen Pfeil auf den roten Pfeil umzuschalten.

In diesem Beispiel `greyArrows`, `greenArrows` und `redArrows` sind nicht in der Zip-Datei enthalten. Damit Du diesen Block "wie er ist" verwenden kannst, wenn Du Status-Pfeile mit benutzerdefinierten Hintergrundbildern einstellen möchtest, werden nur diese Pfeile entfernt (unsichtbar).

#### rig_battery und uploader_battery-Ansichten

Um den Überblick über das dynData-Feature abzuschließen, werfen wir einen Blick auf das Batteriemanagement. Die Idee hier ist, die Textfarbe entsprechend dem Batteriestand anzupassen (von 0 bis 100%)

```json

```
Beide Ansichten teilen sich den gleichen `Dyndaten`-Block mit dem Namen `batteryIcons`. Das ist möglich, da standardmäßig zugeordneten Daten die eine der Ansicht sind (ohne die Angabe eines `"valueKey":`-Schlüssels innerhalb des `batteryIcons`-Blocks wird sie mit den Daten von `uploader_battery` oder `rig_battery` gemäß der Ansicht befüllt).

Auch diese beiden Ansichten nutzen die TwinView-Funktion, die [hier](#cwf-reference-twinview-feature) erklärt wird.

Jetzt werfen wir einen Blick auf den dynData-Block:

```json
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
Hier verwenden wir genau die gleiche Logik wie für das dynamische Hintergrundbild, jedoch mit den dedizierten Schlüsseln (`"invalidFontColor"` und `"fontColor1"` bis `"fontColor5"`, um 5 Schritte von jeweils 20 % zu spezifizieren).

- `"fontColor1"` (dunkelrot) wird für alle Werte unter 20% verwendet, und weiß wird für alle Werte über diesem Schwellenwert verwendet.
- Wenn Du die Schwelle auf "unter 10%" senken möchtest, musst Du lediglich 5 zusätzliche Schlüssel von `"fontColor6"` bis `"fontColor10"` hinzufügen, aber Du kannst auch jede Farbe anpassen, wenn Du eine zusätzliche Variation von Grün über Gelb, Orange und Rot wünschst...

(cwf-reference-dynpref-feature)=

### DynPref-Funktion

Bevor Du dieses Kapitel liest, musst Du verstehen, wie [dynData](#cwf-reference-dyndata-feature) funktioniert, weil DynPref eine erweiterte Nutzung von DynData ist: Du kannst DynData-Block den benutzerspezifischen Wünschen entsprechend anpassen:

Um die DynPref-Funktion zu veranschaulichen, werden wir zwei Beispiele verwenden:

- Steampunk-Zifferblatt (einfache Nutzung, um es ins gleiche mgdl-Zifferblatt und mmol-Zifferblatt zu integrieren; das Zifferblatt wechselt automatisch je nach der in AAPS ausgewählten Einheit).
- Das AAPS V2-Ziffernblatt wird verschiedene Einstellungen kombinieren, um Textfarbe und Hintergrund entsprechend den Einstellungen der dunklen Trennlinie zu steuern.

#### Einfache Anwendung der dynPref innerhalb des Steampunk-Zifferblatts

Innerhalb von Steampunk müssen wir das passende Bild für die jeweiligen Einheiten setzen: Ein `background`-Bild, das eine Glukosewert-Skala hat uns sich entsprechend dem Glukosewert drehen wird. Und `freeText1`, das den dynamischen Maßstab passend zum avgDelta-Wert enthält. Um ein Zifferblatt zu haben, das automatisch die richtigen Einheiten anzeigt, sollten wir das Bild entsprechend der ausgewählten Einheit auswählen.

Um dies zu tun, ersetzen wir im View-Block den `dynData`-Schlüssel durch einen `DynPref`-Schlüssel:

```json
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
Die Verwendung des `dynPref`-Schlüssels wird sehr ähnlich dem des `dynData`-Schlüssels sein, die im vorherigen Kapitel erklärt wurden

Nun werden wir uns das Ende der JSON-Datei ansehen, nach dem `dynData`-Block:

```json
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
Du siehst, dass der dynpref-Schlüssel, der innerhalb des Blocks, der die `background`-Ansicht beschreibt, definiert ist (`"dynPref": "rotateSgv"`) und im `dynPref` JSON-Block am Ende der JSON-Datei enthalten ist:

Dieser Block sollte einen `"prefKey"`-Schlüssel enthalten, der definiert, welche Einstellung verwendet werden soll. In diesem Beispiel ist der Schlüssel `"key_units"` mit der auf dem Smartphone in AAPS ausgewählten Einheit verknüpft, und der Wert ist `"true"`, wenn die ausgewählte Einheit mg/dl ist, `"false"`, wenn die ausgewählte Einheit mmol ist.

Dann kommen zwei JSON-Blöcke, die das Format "dynData" verwenden und entsprechend der ausgewählten Einstellung verwendet werden.

Beachte, dass der "hartcodierte"-Dateiname für das Hintergrundbild jetzt durch ein dynamisches Bild, das unabhängig vom Glukosewert ist, ersetzt wird (`Background_mgdl.png`-Datei, wenn key_units "true" ist, `Background_mmol.png`, wenn key_units falsch ist), und wir fügen auch einen "invalidImage"-Schlüssel hinzu, um immer ein Hintergrundbild zu haben, selbst wenn keine Daten vom Smartphone empfangen wurden.

#### Kombiniere verschiedene Einstellungen innerhalb von dynPref mit AAPS V2

In den meisten Fällen, in denen Du Einstellungen definierst, geht es nicht darum, "dynamisches Verhalten" zu erzeugen, sondern nur um die Ergebnisse basierend auf einer bestimmten Auswahl anzuzeigen. Innerhalb von dynPref wird das allerdings als dynamisches Merkmal behandelt ...

- Wenn ein `dynData`-Block mit allen Parametern gefüllt ist (mit Bildern, Schriftfarbe, Farbe, ...), wirst Du mit `dynPref` jeden Parameter mit einer spezifischen Einstellung kombinieren können.
- Hier werden uns damit beschäftigen wie die Trennlinien-Eigenschaften mit einer "dunkel"-Einstellung belegt wird, um anzuzeigen wann sie aktiviert ist (true) weißer Text auf schwarzem Hintergrund auf dunklem Zifferblatt (dark-Parameter true) oder schwarzer Text auf weißem Hintergrund auf hellem Zifferblatt (dark false)...

Lass und zuerst auf den Anfang der JSON-Datei schauen:

```json
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"` wird den dynPref-Block für alle Standardfarben außerhalb der Ansichten (views) bestimmen. Diese Farben werden entsprechend dem dunklen Parameter innerhalb von `"prefColorDark"` angepasst:

Und am Ende, innerhalb des `dynPref`-Blocks, hast Du einen spezifischen dynPref-Block für Standardfarben:

```json
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
Der Unterschied zwischen diesem dynPref-Block und den anderen Standard-dynPref-Blöcken, die für Ansichten verwendet werden, besteht darin, dass es hier keinen dynData-Block für jeden Wert des `"key_dark"`-Parameters gibt, sondern nur die Liste der Hauptfarben (`highColor`, `midColor`, ...)

Lass uns nun einen Blick auf die in den "Trennstreifen" aufgenommenen Elemente werfen (im folgenden Beispiel ist die Ansicht `"basalRate"` mit der Ansicht `"matchDivider"` dynPref verknüpft:

```json
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
Innerhalb des dynPref-Blocks kannst Du erkennen, dass der Match-Divider-Parameter (`key_match_divider`-Schlüssel) die 2 Blöcke "true" und "false" enthält. Diese beiden Blöcke werden aber nur verwendet, um festzulegen, die Ansicht entweder den "dunklen" dyn-Block (also genau die gleiche Hintergrund- und Textfarbe wie die anderen Ansichten außerhalb des Banners) oder den "weißen" dyn-Block nutzt, der gegenteiligen Farben für den Hintergrund und den Text einstellt...

```json
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
Beachte, dass Du Dich hier innerhalb eines "dynData"-Blocks befindest. Um eine Farbe oder eine Schriftfarbe zu definieren, verwende ein dynData (hier nicht beschrieben) und einen einzigen Schritt (`"color1"` und `'fontColor1'` werden genutzt)

- Für alle Parameter mit Ausnahme von `image` wird standardmäßig für "ungültiger Wert" (wenn nicht speziell durch den `"invalidColor"`- oder den `"invalidFontColor"`-Schlüssel anders definiert) `"color1"` und `"fontColor1"` berücksichtigt.



Dann werden wir ein drittes Beispiel mit iob-Ansichten (`iob1` und `iob2`) ansehen, bei dem wir kleinen Text für detailliertes iob und größeren Text für Gesamt-iob verwenden werden:

```json
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
Innerhalb der Standardansichtseinstellungen und den zwei verschiedenen `dynPref`-Blöcken, die die Textgröße (gemäß des detaillierten iob-Parameters) und die Farben (gemäß des dunklen Parameters) anpassen sollen, ist die Textgröße (19 für `iob1` und 24 für `iob2`)

```json
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
Du erkennst, dass wenn der iob-Parameter (`"key_show_detailed_iob"` Schlüssel) "true" ist, die Textgröße auf einen festgelegten Wert größer als der Standard festgelegt wird (24 anstatt 19): Dies wird mit der textsize "step"-Funktion erreicht, innerhalb, der nur um eine Stufe (step) erhöht... (Anmerkung: für alle Parameter wird textsize1 für ungültige Daten verwendet (ausgenommen sind Bilder), sofern invalidTextSize nicht festgelegt ist)

Dann wird der "dark" dynPref-Block verwendet, um Farbe und Schriftfarbe festzulegen

In diesem Beispiel wird der dynData-Block dann für die Ansicht iob1 verwendet, wenn detailliertes IOB aktiviert ist und "dark" aktiviert ist:

```
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

Damit wird der Text weiß auf schwarzem Hintergrund sein und die 24er-Größe die Standardgröße (19), die in der Ansicht festgelegt wurde, ersetzen

Der dynData-Block, der für die gleiche iob1-Ansicht verwendet wird, wenn das detaillierte IOB deaktiviert ist und "dark" deaktiviert ist, sieht wird folgt aus:

```
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Der Text ist nun schwarz auf weißem Hintergrund mit einer Größe von 19

#### Tipps und Tricks für dynPref

- Du kannst so viele Einstellungen miteinander kombinieren, wie Du möchtest. Die Anzahl der beschreibenden Blöcke kann allerdings sehr schnell zunehmen (exponentiell): Wenn Du 3 Parameter verkettest, alle Situationen definieren möchtest und jeder Parameter nur 2 Werte hat, wirst Du 8 beschreibende Blöcke erhalten ...
- Achte darauf, keine "Endlosschleifen" zu erstellen (zum Beispiel, wenn der Block dynpref1 durch den Block dynpref2 abgeschlossen werden soll, der wiederum durch den Block dynpref1 abgeschließt...). In diesem Fall werden die dynpref-Blöcke als ungültig betrachtet...
- Vergiss nicht, den numerischen Index nach dem Schlüssel aufzunehmen (wenn Du zum Beispiel `"textsize"` innerhalb einer Ansicht verwendest muss `"textsize1"` innerhalb des Werteblocks des dynPref verwendet werden, da es sich um ein "dynData"-Format handelt, das in diesem Fall mit einem Einzelschritt verknüpft ist)
- Es sollte nur ein Schlüssel `"valueKey"` pro Ansicht festgelegt werden, daher sollten bei Zusammenstellung eines endgültigen `dynData`-Blocks aus mehreren `dynPref`-Blöcken nicht mehrere `"valueKey"` (und zugehörige `"minData"`, `"maxData"`, ...) enthalten sein

(cwf-reference-new-v2-features)=

### Neue Funktionen in CustomWatchface V2 (AAPS V3.3.0 oder höher)

Bitte berücksichtige, dass Zifferblätter, die diese neuen Funktionen oder Ansichten (engl. views) nutzen, zwingend eine aus der AAPS Version 3.3.0 erstellte Wear-APK benötigen.

Wenn Du ein Zip-Datei „v2“ mit einer Smartwatch nutzt, die CustomWachface V1 hat, werden entweder falsche Inhalte auf der Smartwatch angezeigt oder es fehlen möglicherweise Informationen in der Anzeige.

Das CustomWatchface V2 enthält folgende Funktionen:

- [Neue Status-View](cwf-reference-new-status-feature)
- [Neue View für temporäre Ziele](cwf-reference-new-temp-target-feature)
- [Neue Reservoir-Stand-View](cwf-reference-new-reservoir-level-feature)
- [Neue Formatierungs-Möglichkeiten](cwf-reference-new-formating-feature)
- [Anzeigen von externen Daten für Follower](cwf-reference-show-external-datas) (bis zu 3 Datensätze in einem Zifferblatt für AAPS, AAPSCLIENT und AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Neue Status-View

Der Key dieser Ansicht ist `„status“` und der zugeordnete Block wird automatisch in die Vorlage exportiert, die von Wear-APK „Custom Watchface V2“ (erstellt aus der AAPS-Version 3.3.0 oder neuer)

Diese Ansicht (view) war Bestandteil der bestehenden Zifferblätter AAPS (NoChart), AAPS (BigChart) und AAPS (Large) und enthalten einen in der Wear-APK erzeugten „string value“.

Diese bisherigen Watchfaces wurden mittlerweile entfernt und durch drei neue benutzerdefinierte Watchfaces in AAPS 3.3.0 ersetzt.

- die Minimal-Information ist der IOB-Wert (immer sichtbar, wie auch immer der IOB-Parameter ist)
- zusätzlich gibt es, wenn es in den Einstellungen aktiviert ist, detaillierte IOB-Werte (BolusIOB|BasalIOB)
- und den BGI-Wert (auch hier: wenn er in den Einstellungen aktiviert ist)

Diese `"status"`-Ansicht ist (innerhalb von dynPref) mit dem `"key_show_loop_status"`-Schlüssel verknüpft, um die Sichtbarkeit zu steuern.

Diese Ansicht konnte in V1 mit den bestehenden `"iob1"`, `"iob2"` und `"bgi"` Ansichten gesteuert werden. Dazu waren allerdings komplexe dynPref-Einstellungen notwendig, um den Abstand innerhalb jeder Information entsprechend den verschiedenen Einstellungen innerhalb der Smartwatchv zu steuern.

(cwf-reference-new-temp-target-feature)=

#### Neue View für temporäre Ziele

Der Key dieser Ansicht ist `„tempTarget“` und der zugeordnete Block wird automatisch in die Vorlage aus der Wear-APK „Custom Watchface V2“ (erstellt aus der AAPS-Version 3.3.0 oder neuer) exportiert.

Im Zifferblatt wird angezeigt:

- Profil-Ziel (Einzelwert oder min-max Zielwerte) (Standardfarbe in Weiß)
- Das durch den Loop angepasste Ziel (Standardfarbe in Grün)
- Das durch Dich definierte temporäre Ziel (Standardfarbe in Gelb)

Diese `"tempTarget"`-Ansicht ist (innerhalb von dynPref) mit dem `"key_show_temp_target"`-Schlüssel verknüpft, um die Sichtbarkeit zu steuern.

Der DynData-Schlüssel (verknüpft mit Farbinformation) ist in `"tempTarget"` (dem Standard DynData-Schlüssel in der TempTarget Ansicht)

Der DynData-Wert ist gleich:

- 0 (Profil-Ziel),
- 1 (Loop-Ziel) oder
- 2 (Benutzerdefiniertes temporäres Ziel)

Beachte, dass diese Ansicht auch für externe Daten verfügbar ist (siehe [unten](cwf-reference-show-external-datas)) mit `"tempTarget_Ext1"` und  `"tempTarget_Ext2"`-Schlüsseln (Ansicht und DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Neue Reservoir-Stand-View

Der Key dieser Ansicht ist `„reservoir“` und der zugeordnete Block wird automatisch in die Vorlage aus der Wear-APK „Custom Watchface V2“ (erstellt aus der AAPS-Version 3.3.0 oder neuer) exportiert.

Diese Ansicht zeigt den Reservoir-Stand (in `IE`) mit einer weißen Standardfarbe, Gelb bei Warnung, Rot, wenn dringender Stand

Diese `„Reservoir“`-Ansicht ist mit dem `„key_show_reservoir_level“`-Schlüssel (innerhalb von dynPref) verknüpft, um die Sichtbarkeit zu steuern.

Die DynData-Schlüssel, die mit dem Reservoir-Stand verknüpft sind:

-  `„reservoir“`  (Standard-DynData-Schlüssel, der mit der Reservoir-Stand-Ansicht verknüpft ist) verknüpft mit dem Insulin-Stand in `IE`
  - Min. Wert ist 0,0 IE
  - Max. Wert ist 500,0 IE
-  `„reservoirLevel“`
  - 0 (Standard, weiße Farbe voreingestellt)
  - 1 (Warnstufe, gelbe Farbe voreingestellt)
  - 2 (Dringend, rote Farbe voreingestellt)

Beachte, dass diese Ansicht auch für externe Daten verfügbar ist (siehe [unten](cwf-reference-show-external-datas)) mit `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` und  `"reservoirLevel_Ext2"`-Schlüsseln (Ansicht und DynData).

(cwf-reference-new-formating-feature)=

#### Neue Formatierungsfunktion für DynData oder DynPref

Du kannst jetzt die von der Smartwatch empfangenen und im unten dargestellten [DynData Key Value Table](#cwf-reference-dyndata-key-values) enthaltenen Rohdaten mit einer eigenen Formatierung versehen.

Um zu zeigen, wie diese Funktion funktioniert, nehmen wir das AAPS (Large) Zifferblatt und schauen uns die Ergebnisse „time ago value“ und den neuen„Status“Zeit-Vor-Wert" und der neuen "Status": Ansicht ist „visible“ oder nicht:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- Im ersten Screenshot auf der linken Seite ist die Statusansicht sichtbar (mit IOB, detailliertem IOB und BGI) also steht nur 1/3 der Zeile zur Anzeige des Zeitstempels zur Verfügung (sehr kompakte Informationen mit `1'`, und für die Uploader Akku-Informationen `U: 55%`)
- Im zweiten Screenshot wurde jetzt die `Status`-Ansicht im Smartwatch-Parameter versteckt, um mehr Platz für das das volle Label mit Zeitstempel-Informationen und Uploader-Batterie zu haben(`1 minute ago` und `Uploader: 55 %`)
- Im dritten Screenshot auf der rechten Seite hast Du die gleichen Smartwatch-Einstellungen, jetzt aber hat sich der Zeitstempel geändert und liegt über "1". Jetzt kann das benutzerdefinierte Zifferblatt, die Tabelle mit Mehrfachmanagement (engl. plural management) aktualisiert anzuzeigen (`2 minutes ago`)

Ich werde unten nicht weiter erläutern, wie die gesamten Ansichten innerhalb der Zip-Datei verwaltet werden (Positionierung jeder Ansicht auf Basis verschiedener Einstellungen). Ich werde mich auf die Art und Weise konzentrieren, wie wir die Formatierungsfunktion und den damit verbundenen dynamischen Wert innerhalb des AAPS (Large) Zifferblattes verwalten.



**Diese Funktion bracuht ienen „dynamischen Block“** (das kann entweder ein `dynData`-Block oder ein `dynPref`-Block sein)

- Für das AAPS (Large) Zifferblatt wollten wir das Format parametrisiert steuern (kurzes oder langes Format in Abhängigkeit von der Sichtbarkeit der `Status`-Ansicht). Dafür haben wir einen `dynPref`-Block genutzt.

Lass uns mit den Ansichten beginnen:

```json
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
Der wichtigste Schlüssel ist hier `"dynValue"`: Wenn diese Schlüsselinformation vorliegt, kann damit der Rohwert dynamisch gesteuert werden. Der boolesche Wert dahinter (true oder false) legt fest, ob der Wert „konvertiert“ werden soll oder nicht

- `false`: Der Rohwert wird ohne Einschränkung oder Konvertierung verwendet
- `true`: Der Rohwert wird konvertiert (mit den `minData` und `maxData`-Schlüsseln des dynData-Blocks und mit den in dynData definierten `minValue` und `maxValue`-Werten

Für dieses Zifferblatt werden die Rohwerte nicht konvertiert. Für beide Ansichten, wurde der `„dynValue“`-Schlüssel auf `false` gesetzt.



Jetzt schauen wir uns den `"uploader"`-Block an, der in `„dynPref“` definiert ist:

```json
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
Standardmäßig ist die `„uploader_battery“`-Ansicht mit `„uploader_battery“` verknüpft, so dass keiner separaten Zeile Bedarf

`"valueKey": "uploader_battery"` (min Wert 0, max Wert 100, und Rohwert ist Prozentwert des Smartphone-Akkus)

Der Formatierungsstring ist im `"textvalue1"`-Schlüssel (`"textvalue1"`, `"textvalue2"`, etc. Schlüssel sind mit `"textvalue"`-Schlüssel verknüpft, die im `View`-Block enthalten sein könnten)

- `"textvalue"`-Schlüssel kann mit den Formatierungsinformationen des View-Blocks genutzt werden (in dieser Situation ist das Format statisch, unabhängig davon, wie der Wert oder die Einstellung sind)
- Wenn Du Formatierungen anhand von Einstellungen und Werten anpassen möchtest, kannst Du die Funktion dynData nutzen, und die dedizierten Schlüssel sind `„invalidTextValue“`-Schlüssel (ohne "Formatierung von Informationen", da der Wert ungültig ist) und `"textvalue1"`, `"textvalue2"`.. (und ebenso viele Werte, die Du zwischen minData und maxData verwalten möchtest)
- Die zusätzlichen `„dynPref“`-Schlüssel werden dazu genutzt andere Blöcke für die Positionierung, und Farbvarianten in Abhängigkeit von den sichtbaren Ansichten, Dunkelheits- und matchDivider-Einstellungen zu definieren

Die Formatierungssyntax ist: `%[flags][width][.precision]f`

- `%` ist der Anfang einer Formatierung, `f` ist das Ende und sollte für die Double-Value-Konvertierung verwendet werden.
  - Beachte, dass, wenn Du das `%`-Zeichen in Deinem String verwenden möchtest, Du `%%` verwenden musst, um anzuzeigen, dass es keine Formatierung, sondern ein Prozentzeichen sein soll.
- `[flag]` ist optional, es kann häufig ein `+` sein, wenn Du vor den Zahlen ein Zeichen haben möchtest oder `(` wenn Du negative Werte in Klammern haben willst
- `[width]` ist optional, definiere die minimale Zeichenanzahl, die in die Ausgabe geschrieben werden soll
- `[.precision]` wird verwendet, um die Ziffernanzahl nach dem Radix-Punkt zu definieren.
  - Beachte, dass die Werte „Double“ sind, daher ist es ratsam, immer eine Genauigkeit zu setzen (um zu viele Zeichen nach dem Radix-Punkt aufgrund der Kotlin-Genauigkeit zu vermeiden)

Im obigen Beispiel wird `%.0f` den „Double“ Wert als Ganzzahl anzeigen



Lass uns jetzt einen Blick auf den Timestamp dynPref-Block werfen, um mehrere zu verwalten:

```json
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- wenn die `status`-Ansicht sichtbar ist (also der `"key_show_loop_satus"`-Schlüssel „`true`“ ist), wird ein einziges Format (`„textvalue1“`), mit `'`  als „Einheit“ verwendet
- wenn die `status`-Ansicht versteckt ist, hast Du 2 verschiedene Formate für 0 oder 1 mit Singular, und ein anderes Format für Werte über 2 mit Plural
  - `„minData“` und `„maxData“` werden verwendet, um den Bereich zu definieren und stellen sicher, dass der Wechsel von Singular zu Plural zwischen 1 und 2 Werten erfolgt
  - Beachte, dass `„maxData“` (Integer) auf 3 und nicht auf 2 gesetzt wurde nur weil „Double“-Daten, die im System verwaltet werden, keine ganze Zahl sind, so dass ein Wert etwas oberhalb oder etwas unterhalb 1 ein einzelnes oder plurales Format haben kann, auch wenn es nach dem Runden auf ganze Zahlen der Wert ist 1.

- Für die `timestamp`-Ansicht ist es wichtig, den `„dynValue“`-Schlüssel auf `false`zu setzen andernfalls werden wegen der Formatierung (Singular/Plural), alle Werte über 3 auf `3 minutes ago` mit `maxData` konvertiert ...



**Zusätzlicher Kommentar zur Formatierungsfunktion**

- Beachte, dass die einzigen verfügbaren dynamischen Werte die sind, die hier aufgelistete [sind:](#cwf-reference-dyndata-key-values)
- Alle `BG`-Werte liegen in mgdl als Einheit vor. Wenn Du die Formatierungsfunktion zur Umwandlung der Werte mmol nutzen möchtest, musst Du die mgdl zu mmol Umwandlung steuern. Innerhalb eines `dynData`- oder `dynPref`-Blocks, sollte der Schlüssel der den Block, der `„minValue“` und `„maxValue“` für dieUmwandlung der Werte enthält mit `„dynValue“: { ...  } bennant werden`. (siehe [Dyn Data Schlüssel](#cwf-reference-dyndata-keys))
- Wenn Du in einer Ansicht einen statischen Formatierungsstring verwenden möchtest, mit dem `"textvalue"`-Schlüssel zur Formatdefinition, und `„dynValue“`-Schlüssel für den Umgang mit dem dynamischen Wert dann musst Du auch einen `„dynData“`- oder einen `„dynPref“`Baustein nutzen (auch wenn er leer ist), um die Formatierungsfunktionen nutzen zu können.
- `"textvalue1"`, `"textvalue2"` bis textvalue *n* können ohne Formatierungsfunktion genutzt werden, um  den double value-Schrittdurch ein dediziertes Textlabel (zum Beispiel mit einem `„Wochentag“` als Schlüsselwert und sieben Schritten um einen eigenen Namen für den Wochentag zu definieren, ... )

- Für die vollständige Dokumentation siehe [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Externe Daten für Follower anzeigen

Das benutzerdefinierte Zifferblatt kann nun auf dem gleichen Zifferblatt bis zu 3 Datensätze anzeigen: AAPS, AAPSCLIENT und AAPSCLIENT2

Um dieses Feature nutzen zu können, muss Folgendes erfüllt sein:

- es müssen 2 der 3 folgenden Apps auf dem Smartphone installiert sein (AAPS, AAPSCLIENT, AAPSCLIENT2)
- Aktiviere Broadcast-Daten in AAPSCLIENT und/oder AAPSCLIENT2, um Daten an die Hauptanwendung zu übermitteln, die zur Synchronisierung mit CustomWatchface verwendet wird (AAPS oder AAPSCLIENT)
- Benutze ein CustomWatchface, das Ansichten mit einem Schlüssel implementiert, einschließlich `_Ext1` oder `_Ext2` (siehe [Schlüssel und KeyValue Referenz](cwf-reference-key-and-keyvalue-reference) unten)

Wenn die Hauptanwendung auf dem Smartphone der AAPSCLIENT ist und die sekundäre App zur Übertragung der Daten der AAPSCLIENT2 ist: Du musst den dedizierten „`Switch external datas in watchface`“-Parameter im Custom Watchface aktivieren, wenn Du ein Zifferblatt nutzt, das die Standardansichten und Ext1 Zusatzansichten nutzt (Ext1 ist mit AAPSCLIENT verknüpft und Ext2 mit AAPSCLIENT2)

Zusätzlich wurden drei neue Ansichten (`"patient_name"` , `"patient_name_Ext1"`  und `"patient_name_Ext2"` *) hinzugefügt, um den Patientennamen automatisch in das Ziffeerblatt einbinden zu können (siehe Beispiel unten)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Key und KeyValue Referenz

(cwf-reference-list-of-metadata-keys)=

### Liste der Metadaten-Schlüssel

(cwf-reference-list-of-standard-metadata-keys)=

#### Liste der Standard Metadaten-Schlüssel

| Key                | Kommentar                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Name des eigenen Zifferblattes                                                                                                                 |
| `"author"`         | Name oder Pseudo des Autor(en)                                                                                                                 |
| `"created_at"`     | Erstell- oder Aktualisieurungs-Datum, sei vorsichtig `/` ist ein Sonderzeichen. Wenn Du es für ein Datum nutzen möchtest, setze ein `\` davor |
| `"cwf_version"`    | Das Watchface-Plugin, das mit dem Deinem Zifferblatt kompatibel ist [cwf - custom watchface]                                                   |
| `"author_version"` | Hier kann der Autor die Zifferblatt-Version hinterlegen                                                                                        |
| `"comment"`        | Freitext, der dazu genutzt werden kann, Zusatzinformationen oder Beschränkungen des aktuellen Zifferblatts zu beschreiben                      |

(cwf-reference-preference-keys)=

#### Einstellungen-Schlüssel

| Key                           | Standardwert und Kommentar                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true sperrt detaillierte IOB-Daten auf der Ansicht `iob2`, dann wird `iob1` (falls sichtbar und nicht durch ein Symbol ersetzt) den gesamten IOB anzeigen.<br />false sperrt den Gesamt-IOB auf der Ansicht `iob2`. Kann verwendet werden, wenn die Breite von `iob2` zu klein ist, um iob detailliert richtig anzuzeigen |
| `"key_show_detailed_delta"`   | false (nur wenn das Design nicht mit der Breite des detaillierten Delta für die Ansichten `delta` und `avg_delta` kompatibel ist)                                                                                                                                                                                               |
| `"key_show_bgi"`              | true, wenn Dein Design `bgi`-Informationen benötigt                                                                                                                                                                                                                                                                             |
| `"key_show_iob"`              | true, wenn Dein Design `iob1` oder `iob2`-Ansichten benötigt                                                                                                                                                                                                                                                                    |
| `"key_show_cob"`              | true, wenn Dein Design `cob1` oder `cob2`-Ansichten (views) benötigen                                                                                                                                                                                                                                                           |
| `"key_show_delta"`            | true, wenn Dein Design `delta`-Informationen benötigt                                                                                                                                                                                                                                                                           |
| `"key_show_avg_delta"`        | true, wenn Dein Design `avg_delta`-Informationen benötigt                                                                                                                                                                                                                                                                       |
| `"key_show_temp_target"`      | true, wenn Dein Design `tempTarget`-Informationen benötigt                                                                                                                                                                                                                                                                      |
| `"key_show_reservoir_level"`  | true, wenn Dein Design `Reservoir`-Informationen benötigt                                                                                                                                                                                                                                                                       |
| `"key_show_uploader_battery"` | true, wenn Dein Design `uploader_battery` (Smartphone-Akku)-Informationen benötigt                                                                                                                                                                                                                                              |
| `"key_show_rig_battery"`      | true, wenn Dein Design `rig_battery`-Informationen benötigt                                                                                                                                                                                                                                                                     |
| `"key_show_temp_basal"`       | true, wenn Dein Design `basalRate`-Informationen benötigt                                                                                                                                                                                                                                                                       |
| `"key_show_direction"`        | true, wenn Dein Design `direction`-Informationen benötigt (Glukosewert-Trendpfeile)                                                                                                                                                                                                                                             |
| `"key_show_ago"`              | true, wenn Dein Design `timestamp` Informationen (Minuten seit dem letzten empfangenen Glukosewert) benötigt                                                                                                                                                                                                                    |
| `"key_show_bg"`               | true, wenn Dein Design `sgv`-Informationen benötigt (Glukosewert)                                                                                                                                                                                                                                                               |
| `"key_show_loop_status"`      | true, wenn Dein Design `loop`-Informationen benötigt (Loop-Status und vergangene Zeit)                                                                                                                                                                                                                                          |
| `"key_show_week_number"`      | true, wenn Dein Design `week_number`-Informationen benötigt (Loop-Status und vergangenen Zeit)                                                                                                                                                                                                                                  |
| `"key_show_date"`             | true, wenn Dein Design `Date`, `Month` oder `Day of the week`-Information benötigt                                                                                                                                                                                                                                              |

#### Interne Schlüssel (internal keys)

| Key                   | Kommentar und                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"filename"`          | Dieser Schlüssel wird automatisch erstellt (bzw. aktualisiert), wenn das Zifferblatt geladen wird und enthält den lokalen ZIP-Dateinamen im Export-Verzeichnis                                                                                               |
| `"cwf_authorization"` | Dieser Schlüssel wird erstellt (wenn das Zifferblatt geladen wird) und jedes Mal aktualisiert, wenn die Autorisierungseinstellung in den Wear-Einstellungen geändert wird, und er wird verwendet, um die Autorisierung mit der Smartwatch zu synchronisieren |

(cwf-reference-list-of-general-parameters)=

### Liste der allgemeinen Parameter

| Key                      | Kommentar                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"`(Standard-Gelb): Farbe des Glukosewertes, der Trendpfeile und des Glukosewertes im Diagramm, wenn der Glukosewert über dem oberen Grenzwert liegt (Hyper)                                                                                                                                                            |
| `"midColor"`             | `"#00FF00"`(Standard-Grün): Farbe des Glukosewertes, der Trendpfeile und des Glukosewertes im Diagramm, wenn der Glukosewert im Zielbereich liegt                                                                                                                                                                               |
| `"lowColor"`             | `"#FFFF00"`(Standard-Rot): Farbe des Glukosewertes, der Trendpfeile und des Glukosewertes im Diagramm, wenn der Glukosewert unter dem oberen Grenzwert liegt (Hypo)                                                                                                                                                             |
| `"lowBatColor"`          | `"#E53935"`(Standard-Dunkelrot): Farbe der `uploader_battery`, wenn der Akkustand niedrig ist (unter 20% tbc)                                                                                                                                                                                                                   |
| `"carbColor"`            | `"#FB8C00"`(Standard-Orange): Farbe der Kohlenhydrate-Punkte im Diagramm                                                                                                                                                                                                                                                        |
| `"basalBackgroundColor"` | `"#0000FF"`(Standard-Dunkelblau): Farbe der TBR-Kurven im Diagramm                                                                                                                                                                                                                                                              |
| `"basalCenterColor"`     | `"#64B5F6"`(Standard-Hellblau): Farbe der Bolus- oder SMB-Punkte im Diagramm                                                                                                                                                                                                                                                    |
| `"gridColor"`            | `"#FFFFFF"`(Standard-Weiß): Farbe der Linien und Textskala im Diagramm                                                                                                                                                                                                                                                          |
| `"pointSize"`            | 2 (Standard): Größe der Punkte im Diagramm (1 für kleinen Punkt, 2 für große Punkte)                                                                                                                                                                                                                                            |
| `"enableSecond"`         | false (Standard): Angeben, ob das Zifferblatt Sekunden innerhalb der Ansichten `time`, `second` oder `second_hand` verwaltet wird oder nicht. Es ist wichtig, konsistent zwischen der Sichtbarkeit der Ansichten und der übergreifenden Einstellung, die eine sekündliche Aktualisierung der Zeitinformationen zulässt, zu sein |
| `"dayNameFormat"`        | "E" (Standard): von "E" bis "EEEE" legt das Format des Tagesnamens fest (Nummer, Kurzname, vollständiger Name) tbc                                                                                                                                                                                                              |
| `"monthFormat"`          | "MMM" (Standard): von "M" bis "MMMM" legt das Monatsformat (Nummer, Kurzname, vollständiger Name) fest                                                                                                                                                                                                                          |

(cwf-reference-list-of-hardcoded-resource-files)=

### Liste der fest codierten Ressourcendateien

Für die meisten Bilder ist es möglich sie mit High- und Low-Suffixen an den Glukosespiegel anzupassen (im Zielbereich, Hyper oder Hypo)

| Dateinamen                                                      | Kommentar                                                                                                                                                                                                                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomWatchface                                                 | Bild, das für die Zifferblatt-Auswahl und innerhalb des Wear-Plugins angezeigt wird                                                                                                                                                          |
| Background,<br />BackgroundHigh,<br />BackgroundLow | none (standardmäßig schwarz): Hintergrundbild. Wenn kein Bild angegeben wird, ist der Hintergrund immer sichtbar und die Standardfarbe ist Schwarz. Die Farbe kann dem Zifferblatt-Design angepasst werden                                   |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | none (Standard): Bild vor dem Diagramm (Transparenz sollte angegeben sein, um das dahinter liegende Diagramm sehen zu können. Kann zur Begrenzung des Diagramm-Bereichs verwendet werden                                                     |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | Einfach Zifferblatt-Beschriftung (standardmäßig): Bild, das vor allen Textwerten angezeigt wird. Transparenz ist erforderlich, um alle dahinter liegenden Werte sehen zu können                                                              |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (default): Bild eines Stundenzeigers. Ein Standardbild wird "mitgeliefert" und kann, um es dem zum Analogdesign anzupassen, eingefärbt werden. Beachte, dass um den Mittelpunkt des Bildes rotiert werden wird (Rotationsachse)    |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (default): Bild eines Minutenzeigers. Ein Standardbild wird "mitgeliefert" und kann, um es dem zum Analogdesign anzupassen, eingefärbt werden. Beachte, dass um den Mittelpunkt des Bildes rotiert werden wird (Rotationsachse)  |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (default): Bild eines Sekundenzeigers. Ein Standardbild wird "mitgeliefert" und kann, um es dem zum Analogdesign anzupassen, eingefärbt werden. Beachte, dass um den Mittelpunkt des Bildes rotiert werden wird (Rotationsachse) |
| ArrowNone                                                       | ?? (default): Bild, das gezeigt wird, wenn es keinen gültigen Pfeil gibt.                                                                                                                                                                    |
| ArrowDoubleUp                                                   | ↑↑ (default): Bild eines doppelten Pfeils nach oben                                                                                                                                                                                          |
| ArrowSingleUp                                                   | ↑ (default): Bild eines einfachen Pfeils nach oben                                                                                                                                                                                           |
| Arrow45Up                                                       | ↗ (default): Bild eines Pfeils nach schräg oben                                                                                                                                                                                              |
| ArrowFlat                                                       | → (default): Bild eines gleichbleibenden Pfeils                                                                                                                                                                                              |
| Arrow45Down                                                     | ↘ (default): Bild eines Pfeils nach schräg unten                                                                                                                                                                                             |
| ArrowSingleDown                                                 | ↓ (default): Bild eines einfachen Pfeils nach unten                                                                                                                                                                                          |
| ArrowDoubleDown                                                 | ↓↓ (default): Bild eines doppelten Pfeils nach unten                                                                                                                                                                                         |

Als Dateitypen sind `.jpg`, `.png` und `.svg` möglich. Aber Vorsicht, `.jpg` hat keine Transparenz-Funktion (um hintereinanderliegende Ansichten nicht zu verdecken, sollten daher am Besten .png oder .svg Dateien genutzt werden)

(cwf-reference-list-of-view-keys)=

### Liste der Ansichtsschlüssel (View-Keys)

Diese Liste ist von hinten nach vorne (Hintergrund zum Vordergrund), da dies beim Umgang mit dem Zifferblatt sehr wichtig ist. Es ist wichtig, die Anordnung zu kennen, da Bilder oder Texte sich sonst gegenseitig verdecken können.

Hinweis: Alle Schlüssel, die `_Ext1` oder `_Ext2` am Ende enthalten sind neu und für Multi-User-Watchfaces gedacht.

| Key                                                                                    | Type of view        | Data attached                                                                                                                                                                | DynData Schlüssel                                                                                                                                |
| -------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Image View          |                                                                                                                                                                              |                                                                                                                                                  |
| `"chart"`                                                                              | Specific Chart View | Graphical curves                                                                                                                                                             |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Image View          |                                                                                                                                                                              |                                                                                                                                                  |
| `"freetext1"`                                                                          | Text View           |                                                                                                                                                                              |                                                                                                                                                  |
| `"freetext2"`                                                                          | Text View           |                                                                                                                                                                              |                                                                                                                                                  |
| `"freetext3"`                                                                          | Text View           |                                                                                                                                                                              |                                                                                                                                                  |
| `"freetext4"`                                                                          | Text View           |                                                                                                                                                                              |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Text View           | Patientenname                                                                                                                                                                |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Text View           | IOB-Label oder IOB Total                                                                                                                                                     |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Text View           | IOB Total or IOB Detailed                                                                                                                                                    |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Text View           | Kohlenhydrate-Bezeichnung                                                                                                                                                    |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Text View           | COB-Wert                                                                                                                                                                     |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Text View           | Short delta (5 min)                                                                                                                                                          | delta  
delta_Ext1<br/>delta_Ext2                                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Text View           | Avg delta (15 min)                                                                                                                                                           | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Text View           | BG Target (single value or min - max targets values)                                                                                                                         | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Text View           | Reservoirstand                                                                                                                                                               | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Text View           | Smartphone Akkustand (%)                                                                                                                                                     | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Text View           | Akkustand des Rigs (%)                                                                                                                                                       | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Text View           | % oder absoluter Wert                                                                                                                                                        |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi2_Ext2"` *                             | Text View           | mgdl/(5 min) oder mmol/(5 min)                                                                                                                                               |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Text View           | Zusammenstellung des IOB (unabhängig von der IOB-Einstellung in der Smartwatch), detailliertes IOB (je nach Smartwatch-Einstellung) und BGI (je nach Smartwatch-Einstellung) |                                                                                                                                                  |
| `"zeit"`                                                                               | Text View           | HH:MM oder HH:MM:SS                                                                                                                                                          |                                                                                                                                                  |
| `"Stunde"`                                                                             | Text View           | HH                                                                                                                                                                           |                                                                                                                                                  |
| `"Minute"`                                                                             | Text View           | MM                                                                                                                                                                           |                                                                                                                                                  |
| `"second"`                                                                             | Text View           | SS                                                                                                                                                                           |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Text View           | AM oder PM                                                                                                                                                                   |                                                                                                                                                  |
| `"day_name"`                                                                           | Text View           | Name des Tages (vgl. dayName-Format)                                                                                                                                         | day_name                                                                                                                                         |
| `"Tag"`                                                                                | Text View           | DD Datum                                                                                                                                                                     | day                                                                                                                                              |
| `"week_number"`                                                                        | Text View           | (WW) Kalenderwoche                                                                                                                                                           | week_number                                                                                                                                      |
| `"month"`                                                                              | Text View           | Monatsname (siehe monthFormat)                                                                                                                                               |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Text View           | Zeit (in Minuten) seit der letzten Aktualisierung und Status (Farbpfeile im Hintergrund), Farbpfeile können mit DynData angepasst werden                                     | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Image View          | Trendpfeile                                                                                                                                                                  | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Text View           | integer (min ago)                                                                                                                                                            | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Text View           | sgv-Wert (mgdl oder mmol)                                                                                                                                                    | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Image View          |                                                                                                                                                                              |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Image View          |                                                                                                                                                                              |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Image View          |                                                                                                                                                                              |                                                                                                                                                  |
| `"second_hand"`                                                                        | Image View          |                                                                                                                                                                              |                                                                                                                                                  |

**Ansicht seit Custom Watchface V2.0 hinzugefügt (verfügbar in AAPS 3.3.0 Wear-Apk oder höher)*

(cwf-reference-list-of-json-keys)=

### Liste der JSON-Schlüssel

(cwf-reference-common-keys)=

#### Gemeinsame Schlüssel

 die für alle Ansichtsarten verwendet werden kann (TextView, ImageView, GraphView)

| Key                      | Typ     | Kommentar / Wert                                                                                                                                                                                                                           |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"width"`                |         | Breite in Pixeln                                                                                                                                                                                                                           |
| `"height"`               |         | Höhe in Pixeln                                                                                                                                                                                                                             |
| `"topmargin"`            |         | Oberer Rand in Pixeln                                                                                                                                                                                                                      |
| `"leftmargin"`           |         | Linker Rand in Pixeln                                                                                                                                                                                                                      |
| `"rotation"`             |         | Drehwinkel in Grad                                                                                                                                                                                                                         |
| `"visibility"`           | string  | siehe Tabelle mit Schlüsselwerten                                                                                                                                                                                                          |
| `"dynData"`              | string  | Schlüsselblockname, der die dynamische Daten zur Verknüpfung mit der zugehörigen Animation (Farben, Bild, Verschiebung, Rotation) spezifiziert<br />`"dynData": "customName",` (siehe unten)                                         |
| `"leftOffset"`           | boolean | Nimm diesen Schlüssel mit dem Schlüsselwert true auf, um eine horizontale Verschiebung (positiver oder negativer Wert) aufgrund des dynData-Werts zu verwenden                                                                             |
| `"topOffset"`            | boolean | Nimm diesen Schlüssel mit dem Schlüsselwert true auf, um eine vertikale Verschiebung (positiver oder negativer Wert) aufgrund eines dynData-Werts zu verwenden                                                                             |
| `"rotationOffset"`       | boolean | Nimm diesen Schlüssel mit dem Schlüsselwert true auf, um eine Drehung (positiver oder negativer Wert) aufgrund eines dynData-Werts zu verwenden                                                                                            |
| `"twinView"`             | string  | Schlüssel der anderen Ansicht (in der Regel enthält die andere Ansicht auch den twinView-Parameter mit dem Schlüssel dieser Ansicht darin)                                                                                                 |
| `"topOffsetTwinHidden"`  |         | Anzahl der Pixel, um die die Ansicht vertikal verschoben werden soll, wenn die Zwillingsansicht (twinView) ausgeblendet ist (positiver oder negativer Wert)<br />topOffsetTwinHidden = (topOffset TwinView - topOffset thisView)/2   |
| `"leftOffsetTwinHidden"` |         | Anzahl der Pixel, um die die Ansicht horizontal verschoben werden soll, wenn die Zwillingsansicht (twinView) ausgeblendet ist (positiver oder negativer Wert)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2 |
| `"dynPref"`              | string  | Schlüsselblockname, der die dynamischen Einstellungen zur Verknüpfung mit der zugehörigen Animation (Farben, Bild, Verschiebung, Drehung) spezifiziert<br />`"dynPref": "customName",` (siehe unten)                                 |

#### TextView-Schlüssel

| Key            | Typ     | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   |         | Schriftgröße in Pixel (beachte, dass die Schriftart auch obere und untere Ränder enthalten kann, sodass die tatsächliche Textgröße im Allgemeinen kleiner ist als die festgelegte Anzahl von Pixeln). Beachte, dass die Größe kleiner als die Ansichtshöhe sein sollte, um diese nicht „abzuschneiden“                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"gravity"`    | string  | siehe Tabelle mit Schlüsselwerten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"font"`       | string  | siehe Schlüsselwert-Tabelle für verfügbare Schriftarten.<br />Kann auch der Schriftdateiname (ohne Erweiterung) für in die Zip-Datei aufgenommene Schriftarten sein                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `"fontStyle"`  | string  | siehe Tabelle mit Schlüsselwerten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"fontColor"`  | string  | Die Schriftfabe managen<br />`"#RRVVBB"`: Fabcode im RVB-Format, Hexadezimal-Werte #FF0000 entspricht rot<br />`"#AARRVVBB"`: AA zeigt die Alpha-Information (Tranparenz), 00 ist transparent, FF ist undurchsichtig<br />`"bgColor"`: keyValue bgColor ist eine einfache Art highColor, midColor oder lowColor in Abhängigkeit vom Glukosewert zu setzen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `"allCaps"`    | boolean | true, wenn der Text in Großbuchstaben dargestellt werden soll (hauptsächlich für Tages- oder Monatsnamen)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `"background"` | string  | `resource_filename` Du kannst ein Ressourcenbild als Hintergrund für die Textansicht einfügen (Die Ressourcendatei wird auf die Höhe und Breite der Textansicht skaliert, wobei das Bildverhältnis beibehalten wird). Der Textwert wird vor dem Hintergrundbild angezeigt.<br />- Beachte, dass dieser Schlüssel auch für die Ansicht `chart` verwendet werden kann, um ein benutzerdefiniertes Hintergrundbild für das Diagramm vor dem Hintergrundbild festzulegen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `"color"`      | string  | Manage die Farbe der Hintergrund-Ansicht oder passe die Bildfarbe an (nur für Bitmap)<br />`"#RRVVBB"`: Farbcode im RVB-Format, Hexadezimal-Wert #FF0000 entspricht rot<br />`"#AARRVVBB"`: AA hält die Alpha-Informationen (Transparenz), 00 steht für transparent, FF ist undurchsichtig <br />`"bgColor"`: Schlüsselwert bgColor ist eine einfache Art highColor, midColor oder lowColor abhängig vom Glukosewert zu nutzen<br />- Für das standardmäßig eingebundene Bild (Zeiger und Zifferblattl) wird die Farbe direkt genutzt, für Bitmaps (jpg oder png) wird es für den Sättigungsverlauf-Filter des Bildes genutzt<br /> - Für svg wird der Parameter wirkungslos sein (die Farbe von svg-Dateien können nicht verändert werden)<br />- Beachte, dass dieser Schlüssel auch in der `chart`-Ansicht dazu genutzt werden kann, einen eigenen Hintergrund für das Diagramm vor das Hintergrund-Bild zu setzen |
| `"textvalue"`  | string  | Schlüssel speziell für die 4 freien Textansichten, die im Layout enthalten sind (von freetext1 bis freetext4), damit kann der einzufügende Text festgelegt werden(kann ein Label sein, oder einfach nur `:`, wenn Du nur Trennzeichen zwischen Stunden- und Minutenansicht hinzufügen möchtest)   
Aus dem Custom Watchface plugin v2 (AAPS 3.3), kann der Textwert verwendet werden, um einen Format-String für die anderen TextViews einzufügen (Verwendung mit `dynValue`-Schlüssel und `dynData` oder `dynPref`). zum Beispiel                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `"dynValue"`*  | boolean | „true“, wenn Du den Rohwert als „double“ einfügen möchtest. Nützlich mit dem `texvalue`-Schlüssel, wenn ein dediziertes Format den Wert anzeigen soll                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

**Schlüssel seit Custom Watchface V2.0 hinzugefügt (verfügbar in AAPS 3.3.0 Wear-Apk oder höher)*

(cwf-reference-imageview-keys)=

#### ImageView-Schlüssel

| Key       | Typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Manage die Farbe der Hintergrund-Ansicht oder passe die Bildfarbe an (nur für Bitmap)<br />`"#RRVVBB"`: Farbcode im RVB-Format, Hexadezimal-Wert #FF0000 entspricht rot<br />`"#AARRVVBB"`: AA hält die Alpha-Informationen (Transparenz), 00 steht für transparent, FF ist undurchsichtig <br />`"bgColor"`: Schlüsselwert bgColor ist eine einfache Art highColor, midColor oder lowColor abhängig vom Glukosewert zu nutzen<br />- Für das standardmäßig eingebundene Bild (Zeiger und Zifferblattl) wird die Farbe direkt genutzt, für Bitmaps (jpg oder png) wird es für den Sättigungsverlauf-Filter des Bildes genutzt<br /> - Für svg wird der Parameter wirkungslos sein (die Farbe von svg-Dateien können nicht verändert werden)<br />- Beachte, dass dieser Schlüssel auch in der `chart`-Ansicht dazu genutzt werden kann, einen eigenen Hintergrund für das Diagramm vor das Hintergrund-Bild zu setzen |

(cwf-reference-chartview-keys)=

#### ChartView-Schlüssel

| Key            | Typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Manage die Farbe der Hintergrund-Ansicht oder passe die Bildfarbe an (nur für Bitmap)<br />`"#RRVVBB"`: Farbcode im RVB-Format, Hexadezimal-Wert #FF0000 entspricht rot<br />`"#AARRVVBB"`: AA hält die Alpha-Informationen (Transparenz), 00 steht für transparent, FF ist undurchsichtig <br />`"bgColor"`: Schlüsselwert bgColor ist eine einfache Art highColor, midColor oder lowColor abhängig vom Glukosewert zu nutzen<br />- Für das standardmäßig eingebundene Bild (Zeiger und Zifferblattl) wird die Farbe direkt genutzt, für Bitmaps (jpg oder png) wird es für den Sättigungsverlauf-Filter des Bildes genutzt<br /> - Für svg wird der Parameter wirkungslos sein (die Farbe von svg-Dateien können nicht verändert werden)<br />- Beachte, dass dieser Schlüssel auch in der `chart`-Ansicht dazu genutzt werden kann, einen eigenen Hintergrund für das Diagramm vor das Hintergrund-Bild zu setzen |
| `"background"` | string | `resource_filename` Du kannst ein Ressourcenbild als Hintergrund für die Textansicht einfügen (Die Ressourcendatei wird auf die Höhe und Breite der Textansicht skaliert, wobei das Bildverhältnis beibehalten wird). Der Textwert wird vor dem Hintergrundbild angezeigt.<br />- Beachte, dass dieser Schlüssel auch für die Ansicht `chart` verwendet werden kann, um ein benutzerdefiniertes Hintergrundbild für das Diagramm vor dem Hintergrundbild festzulegen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

(cwf-reference-key-values)=

### Key Werte

| Schlüsselwert                | Schlüssel [key] | comment                                                                                                      |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| `"gone"`                     | visibility      | Ansicht verborgen                                                                                            |
| `"visible"`                  | visibility      | Ansicht im Zifferblatt sichtbar (Sichtbarkeit kann aber in den Parametern aktiviert oder deaktiviert werden) |
| `"center"`                   | gravity         | Text ist vertikal und horizontal in der Ansicht zentriert                                                    |
| `"left"`                     | gravity         | Text ist in der Ansicht vertikal zentriert und linksbündig ausgerichtet                                      |
| `"right"`                    | gravity         | Text ist in der Ansicht vertikal zentriert und rechtsbündig ausgerichtet                                     |
| `"sans_serif"`               | font            |                                                                                                              |
| `"standard"`                 | font            |                                                                                                              |
| `"default_bold"`             | font            |                                                                                                              |
| `"monospace"`                | font            |                                                                                                              |
| `"serif"`                    | font            |                                                                                                              |
| `"roboto_condensed_bold"`    | font            |                                                                                                              |
| `"roboto_condensed_light"`   | font            |                                                                                                              |
| `"roboto_condensed_regular"` | font            |                                                                                                              |
| `"roboto_slab_light"`        | font            |                                                                                                              |
| `"normal"`                   | fontStyle       |                                                                                                              |
| `"bold"`                     | fontStyle       |                                                                                                              |
| `"bold_italic"`              | fontStyle       |                                                                                                              |
| `"italic"`                   | fontStyle       |                                                                                                              |

(cwf-reference-dyndata-keys)=

### DynData-Schlüssel

| Key                       | Typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | block  | Definiere den Block aller dynamischen Datenblöcke, die für die Ansichten verwendet werden. In der Regel nach der letzten Ansicht.<br />Alle in diesem Block definierten Schlüssel werden als Schlüsselwert innerhalb des View Blocks verwendet:<br />`"dynData": { dynData blocks }`</code><br />und jeder Block ist durch einen benutzerdefinierten Namen und mehrere Schlüssel definiert:<br />`"customName": { one dynData block }`                                                                                                                                                                                            |
| `"valueKey"`              | string | Name der dynamischen Daten, die verwendet werden sollen (in der Regel gleichbedeutend mit dem zugehörigen Ansichtenschlüssel).<br />Falls nicht vorhanden, werden standardmäßig die Werte verwendet, die für die Ansicht verwendet werden, die diesen Block nutzt. <br />Du kannst beispielsweise einen Block definieren, um den Akkustand ohne Angabe von valueKey anzupassen, und dann denselben Block verwenden, um uploader_battery und rig_battery anzupassen                                                                                                                                                                          |
| `"minData"`               |        | Gib den kleinsten Wert an, der für AAPS-Daten berücksichtigt werden soll: zum Beispiel, wenn der Wert sgv (interne Einheit mg/dl) ist und minData ist auf 50 gesetzt worden, werden alle Glukosewerte unter 50 mg/dl auf 50 gesetzt.<br />- Beachte, dass minData und maxData verwendet werden, um dynamische Werte zu berechnen (in Pixel oder Grad).                                                                                                                                                                                                                                                                                              |
| `"maxData"`               |        | Gibt den höchsten Wert an, der für AAPS-Daten berücksichtigt werden soll: zum Beispiel, wenn der Wert sgv (Einheit mg/dl intern) ist und maxData ist auf 330 gesetzt worden, werden alle Glukosewerte über 330 mg/dl auf 330 gesetzt.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"leftOffset"`            | block  | Gibt die horizontale Verschiebung der Ansicht gemäß den Minimal- und Maximalwerten in Pixel an.<br />- Es beinhaltet den Schlüssel für den minimalen Wert, den Schlüssel für den maximalen Wert und den Schlüssel für ungültige Werte (optional)<br />- Wenn die Daten unterhalb oder gleich dem minData sind, wird die Ansicht um minValue Pixel verschoben, und wenn die Daten oberhalb oder gleich dem maxData sind, wird die Ansicht um maxValue Pixel verschoben<br />Beachte, dass für die Anwendung dieser Verschiebung `leftOffset` innerhalb der Ansicht auf true gesetzt werden sollte                                        |
| `"topOffset"`             | block  | Gibt die vertikale Verschiebung der Ansicht gemäß den Minimal- und Maximalwerten in Pixel an.<br />- Es beinhaltet den Schlüssel für den minimalen Wert, den Schlüssel für den maximalen Wert und den Schlüssel für ungültige Werte (optional)<br />- Wenn die Daten unterhalb oder gleich dem minData sind, wird die Ansicht um minValue Pixel verschoben, und wenn die Daten oberhalb oder gleich dem maxData sind, wird die Ansicht um maxValue Pixel verschoben<br />Beachte, dass für die Anwendung dieser Verschiebung topOffset innerhalb der Ansicht auf true gesetzt werden sollte                                             |
| `"rotationOffset"`        | block  | Gibt den Drehwinkel in Grad der Ansicht gemäß den Minimal- und Maximalwerten in Pixel an.<br />- Er beinhaltet den Schlüssel für den minimalen Wert (`minValue`), den Schlüssel für den maximalen Wert (`maxValue`) und den optionalen Schlüssel für ungültige Werte (`invalidValue`)<br />- Wenn die Daten unterhalb oder gleich dem `minData` sind, wird die Ansicht um `minValue`-Grad gedreht, und wenn die Daten oberhalb oder gleich dem `maxData` sind, wird die Ansicht um `maxValue`-Grad gedreht <br />Beachte, dass für die Anwendung dieser Drehung `rotationOffset` innerhalb der Ansicht auf „true“ gesetzt werden sollte |
| `"dynValue"`*             | block  | Gib die Konvertierung des dynValue von min und max range auf min und max value in Pixeln an.<br />- Das sind der `minValue`-Schlüssel, der `maxValue`-Schlüssel und der optionale `invalidValue`-Schlüssel<br />- Wenn die Daten nierdriger oder gleich `minData` sind, dann wird der gesendete dynValue zu minValue (zu „double“ konvertiert), und wenn Daten höher oder gleich wie `maxData` sind, dann wird der berechnete dynValue zu maxValue (zu „double“ konvertiert)<br />Beachte, dass für die Konvertierung der `dynValue`-Schlüssel innerhalb der Ansicht auf „true“ gesetzt werden muss                                     |
| `"minValue"`              |        | Ergebniswert, der auf die Ansicht angewendet werden soll (Schlüssel nur innerhalb eines leftOffset-, topOffset- oder rotationOffset-Blocks anwendbar)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"maxValue"`              |        | Ergebniswert, der auf die Ansicht angewendet werden soll (Schlüssel nur innerhalb eines leftOffset-, topOffset- oder rotationOffset-Blocks anwendbar)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"invalidValue"`          |        | Ergebniswert, der auf die Ansicht angewendet werden soll, wenn Daten ungültig sind (Schlüssel nur innerhalb eines leftOffset-, topOffset- oder rotationOffset-Blocks anwendbar)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"invalidImage"`          | string | `resource_filename` wird für die ImageView oder die Hintergrund TextView genutzt, wenn Daten ungültig sind                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| image*1_to_n*           | string | `resource_filename` image to use for each step between minData (or close to minData) with `"image1"` and maxData (or close to maxData) with image*n*<br />If for example your put 5 images (from image1 to image5), the range between minData and maxData will be divided in 5 steps and according to data value, the corresponding image will be shown                                                                                                                                                                                                                                                                                             |
| `"invalidFontColor"`      | string | Manage die Schriftfarbschritte, wenn die Daten ungültig sind<br />`"#RRVVBB"` oder `"#AARRVVBB"`: Farbe, die verwendet werden soll, wenn ungültige Daten empfangen werden (kann transparent sein, wenn AA=00)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| fontColor*1_to_n*       | string | Manage fontColor steps<br />`"#RRVVBB"` or `"#AARRVVBB"`: color to use for each step between minData (or close to minData) with `"fontColor1"` and maxData (or close to maxData) with fontColor*n*                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"invalidColor"`          | string | Manage die Hintergrund- oder Bildfarbe, wenn die Daten ungültig sind<br />`"#RRVVBB"` oder `"#AARRVVBB"`: Farbe, die verwendet werden soll, wenn ungültige Daten empfangen werden (kann transparent sein, wenn AA=00)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| color*1_to_n*           | string | Manage background color or image Color steps<br />`"#RRVVBB"` or `"#AARRVVBB"`: color to use for each step between minData (or close to minData) with `"color1"` and maxData (or close to maxData) with color*n*                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"invalidTextSize"`       |        | Manage die Textgröße, wenn die Daten ungültig sind                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| textsize*1_to_n*        |        | Manage text size to use for each step between minData (or close to minData) with `"textsize1"` and maxData (or close to maxData) with textsize*n*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"invalidLeftOffset"`     |        | Manage leftOffset-Schritte, wenn die Daten ungültig sind                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| leftOffset*1_to_n*      |        | Manage leftOffset, der für jeden Schritt zwischen minData (oder nahe bei minData) mit `leftOffset1` und maxData (oder nahe bei maxData) mit leftOffset*n*<br /> Hinweis: Kann mit dynPref verwendet werden, um eine Ansicht zu verschieben, wenn eine andere Ansicht verborgen ist...                                                                                                                                                                                                                                                                                                                                                               |
| `"invalidTopOffset"`      |        | Manage topOffset-Schritte, wenn die Daten ungültig sind                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| topOffset*1_to_n*       |        | Manage topOffset, der für jeden Schritt zwischen minData (oder nahe bei minData) mit topOffset1 und maxData (oder nahe bei maxData) mit leftOffset*n*<br /> Hinweis: Kann mit dynPref verwendet werden, um eine Ansicht zu verschieben, wenn eine andere Ansicht verborgen ist...                                                                                                                                                                                                                                                                                                                                                                   |
| `"invalidRotationOffset"` |        | Manage rotationOffset-Schritte, wenn die Daten ungültig sind                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| rotationOffset*1_to_n*  |        | Manage rotationOffset für jeden Schritt zwischen minData (oder nahe an minData) mit rotationOffset1 und maxData (oder nahe an maxData) mit rotationOffset*n*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `"invalidTextvalue"`*     | string | Manage textvalue if the data in invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| textvalue*1_to_n* *     | string | Manage textvalue für jeden Schritt zwischen minData (oder nahe an minData) mit textvalue1 und maxData (oder nahe an maxData) mit textvalue*n*<br />Hinweis: das kann auch eine Formatierung beinhalten, wenn `"dynValue"` innerhalb einer View auf true gesetzt wird                                                                                                                                                                                                                                                                                                                                                                                |

**Schlüssel seit Custom Watchface V2.0 hinzugefügt (verfügbar in AAPS 3.3.0 Wear-Apk oder höher)*

(cwf-reference-dyndata-key-values)=

### DynDaten-Schlüsselwerte

| Schlüsselwert                                                                               | Schlüssel [key] | comment                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey        | default minData = 39 mg/dl<br />default maxData = 400 mg/dl<br />- Beachte, dass der tatsächliche MaxData mit Deinem Sensor verknüpft ist und die Einheiten für interne Werte immer mg/dl sind                                                                                                     |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey        | default minData = -1 (Hypo)<br />default maxData = 1 (Hyper)<br />if BG is within Range = 0                                                                                                                                                                                                        |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey        | default minData = 1 (double Down)<br />default maxValue = 7 (double Up)<br />flat arrow data = 4<br />Error or missing data = 0 (??)                                                                                                                                                         |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey        | default minData = -25 mgdl<br />default maxData = 25 mgdl<br />- Berücksichtige, dass die wahren min und maxData darüber liegen können und dass intern immer mgdl als Einheit verwendet wird                                                                                                       |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey        | default minData = -25 mgdl<br />default maxData = 25 mgdl<br />- Berücksichtige, dass die wahren min und maxData darüber liegen können und dass intern immer mgdl als Einheit verwendet wird                                                                                                       |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey        | Default minData = 0 (Profil-Ziel)<br />Default maxData = 2 (temporäres Ziel)<br />Ziel wurde durch Loop angepasst = 1<br/>Default oder fehlende Informationen = 0                                                                                                                            |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey        | default minData = 0 U<br />default maxData = 500 U                                                                                                                                                                                                                                                       |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey        | default minData = 0 (Standardfarbe)<br/>default maxData = 2 (Farbe für „Dringend“)<br/>Warnfarbe = 1                                                                                                                                                                                               |
| `"uploader_battery"`                                                                        | valueKey        | default minData = 0 %<br />default maxData = 100%                                                                                                                                                                                                                                                        |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey        | default minData = 0 %<br />default maxData = 100%                                                                                                                                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey        | default minData = 0 min<br />default maxData = 60 min                                                                                                                                                                                                                                                    |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey        | default minData = 0 min<br />default maxData = 28 min<br />- Beachte, dass Statuspfeile für Werte unter 14 min grün sind, und rot für Werte über 14 min sind. Wenn Du hier 2 Bilder hinterlegst, kannst Du den Status-Hintergrund mit Deinem eigenen Bild und mit default min and maxData ersetzen |
| `"Tag"`                                                                                     | valueKey        | default minData = 1<br />default maxData = 31                                                                                                                                                                                                                                                            |
| `"day_name"`                                                                                | valueKey        | default minData = 1<br />default maxData = 7                                                                                                                                                                                                                                                             |
| `"month"`                                                                                   | valueKey        |                                                                                                                                                                                                                                                                                                                |
| `"week_number"`                                                                             | valueKey        | default minData = 1<br />default maxData = 53                                                                                                                                                                                                                                                            |

**Schlüssel seit Custom Watchface V2.0 hinzugefügt (verfügbar in AAPS 3.3.0 Wear-Apk oder höher)*

(cwf-reference-dynpref-keys)=

### DynPref-Schlüssel

| Key              | Typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | block  | Definiere den Block aller dynamischen Einstellungs-Blöcke, die für die Ansichten verwendet werden. In der Regel nach der letzten Ansicht oder dem letzten dynData-Block. <br />Alle in diesem Block definierten Schlüssel werden als Schlüsselwert innerhalb des View Blocks verwendet:<br />`"dynPref": { dynPref blocks }`<br />und jeder Block ist durch einen benutzerdefinierten Namen und mehrere Schlüssel definiert:<br />`"customName": { one dynPref block }`                                                                                                                  |
| `"dynPref"`      | string | Name des dynamischen dynPref-Blocks, der *innerhalb eines View-Blocks*<br />genutzt wird (generell identisch mit dem, der für den View-Schlüssel oder der entsprechenden Eigenschaft (Preference) verwendet wird).                                                                                                                                                                                                                                                                                                                                                                                         |
| `"dynPref"`      | string | *In einem partiellen dynData-Block in einem DynPref-Block*<br />: Name des dynamischen DynPref-Blocks, um den dynData Block zu abzuschließen. Das ermöglicht Dir, einen dynData-Block auf Basis mehrerer Einstellungen (Preferences) einzustellen                                                                                                                                                                                                                                                                                                                                                          |
| `"dynPrefColor"` | string | Dieser Schlüssel gilt ausdrücklich für den Main-Block und dessen wesentlichen Farben (highColor, midColor, lowColor, graph colors...). Du kannst dies nutzen, um die Standardfarben auf Basis der Einstellungen (Preferences) zu verändern                                                                                                                                                                                                                                                                                                                                                                       |
| `"prefKey"`      | string | Gib hier den Schlüsselwert der Einstellung an, der genutzt werden soll, um die benutzerdefinierten Einstellungen zu erhalten (siehe [PrefKey-Werte](#cwf-reference-prefkey-values) unten). Dieser Schlüssel sollte innerhalb eines `dynPref` Blocks verwendet werden.<br />Dann sollte der `dynPref`-Block genau so viele Schlüssel wie prefKey Werte enthalten.<br />Beachte, dass die meisten Zeiteinstellungen "Boolean" sind, also solltest Du innerhalb des dynPref-Blocks diese beiden dynData-Blöcke finden: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | block  | Die meisten Einstellungen werden als boolean `"true"` oder `"false"` gesetzt. You will specify the dynData block to use if preference selected by user is true.<br />Note that if the block also contains a `"dynPref":`key, the dynData block will be merged with other block. Das ermöglicht Dir beispielsweise Farben mit einer Einstellung und die Textgröße auf Basis einer anderen Einstellung zu setzen                                                                                                                                                                                             |
| `"false"`        | block  | Die meisten Einstellungen werden als boolean `"true"` oder `"false"` gesetzt. Du wirst den dynData-Block, der genutzt werden soll, wenn die Einstellung durch den User "false" ist, angeben.<br />Beachte, dass wenn der Block auch einen `"dynPref":`-Schlüssel enthält, diese dynData-Blöcke miteinander verschmolzen werden. Das ermöglicht Dir beispielsweise Farben mit einer Einstellung und die Textgröße auf Basis einer anderen Einstellung zu setzen                                                                                                                                             |

(cwf-reference-prefkey-values)=

### PrefKey-Werte

Alle Schlüssel, die im obigen Kapitel [Einstellungen-Schlüssel](#cwf-reference-preference-keys) enthalten sind, können verwendet werden, um Ansichtsparameter anzupassen

Du kannst auch die zusätzlichen Schlüssel unten verwenden, die in die AAPS (benutzerdefiniert)-spezifischen-Parameter aufgenommen sind:

| Key                   | Typ     | comment                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: wenn in AAPS mg/dl als Einheiten ausgewählt ist <br />*false*: wenn die auf AAPS gewählten Einheiten mmol/dl sind                                                                                                                                                                                                                                                                                                         |
| `"key_dark"`          | boolean | *true*: Um einen dunklen Hintergrund zu setzen<br />false: Um einen hellen Hintergrund<br />zu verwenden: Dieser Parameter wird oft in älteren AAPS-Zifferblättern verwendet (AAPS, AAPS V2...)                                                                                                                                                                                                                             |
| `"key_match_divider"` | boolean | *true*: Trennstrich in AAPS, AAPS v2 Watchfaces werden nicht sichtbar sein<br />*false*: Trennstrich in AAPS, AAPS v2 Watchfaces werden sichtbar sein<br />Hinweis: Diese Einstellung wird oft mit dunklen Voreinstellungen kombiniert (Verwendung des `dynPref`-Schlüssels im `dynData`-Block), um Textfarbe (und Hintergrund) auf die gleiche oder die entgegengesetzte Farbe zu setzen als die des dunklen Parameters... |
