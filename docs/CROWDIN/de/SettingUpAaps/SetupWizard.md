# AAPS Einrichtungsassistent

Wenn Du **AAPS** das erste Mal startest, wird Dich der **Einrichtungsassistent** vollständig durch die Basis-Konfiguration der App leiten. Der **Einrichtungsassistent** führt Dich durch den Prozess, damit nichts Wesentliches vergessen bzw. übersehen wird. Die **Berechtigungseinstellungen** beispielsweise sind für die korrekte **AAPS**-Einrichtung von fundamentaler Bedeutung.

Allerdings muss im ersten Durchlauf mit dem **Einrichtungsassistenten** nicht alles vollständig konfiguriert werden. Du kannst den Assistenten einfach zwischendurch verlassen und die Konfiguration später fortsetzen. Nach dem **Einrichtungsassistent**en gibt es drei Wege die Konfiguration zu optimieren/ändern. Diese werden im nächsten Abschnitt erläutert. Deswegen ist es auch OK einige Punkte im Einrichtungsassistenten zu überspringen. Du kannst diese Punkte später (nach-)konfigurieren.

Während und direkt nach dem Du den **Einrichtungsassistenten** genutzt hast, wirst möglicherweise keine signifikanten sichtbaren Veränderungen in **AAPS** bemerken. Um Deinen **AAPS**-Loop zu aktivieren, musst Du **Ziele** (Objectives) bearbeiten und abschließen, damit Funktionalität um Funktionalität freigeschaltet wird. Du startest mit dem **Ziel 1** am Ende des Einrichtungsassistenten. Du bist der „Herr“ über **AAPS**, nicht umgekehrt.

```{admonition} Preview Objectives
:class: note
Wenn Du wissen willst, wie Ziele aufgebaut sind, lies gerne den Abschnitt [Abschließen der Ziele (Objectives)](../SettingUpAaps/CompletingTheObjectives.md) und komme danach hierhin zurück, um den Einrichtungsassistenten als Erstes zu durchlaufen.

```

Aus den Erfahrungen wissen wir, dass neu Beginnende sich oft unter Druck setzen **AAPS** so schnell wie möglich einzurichten. Da aber dabei eine steile Lernkurve durchlaufen werden muss, führt das unter Umständen zu Frustration.

Nimm Dir bitte Zeit, um Deinen Loop zu konfigurieren, die Vorteile eines gut funktionierenden **AAPS**-Loops sind immens.

```{admonition} Ask for Help
:class: note
If there is an error in the documentation or you have a better idea for how something can be explained, you can ask for help from the community as explained at [Connect with other users](../GettingHelp/WhereCanIGetHelp.md).
```
## Begrüßungstext

Dies ist nur die Begrüßungsnachricht, die Du mit "WEITER" überspringen kannst:

![grafik](../images/setup-wizard/Screenshot_20231202_125636.png)

## Lizenzvereinbarung

In der Endbenutzer-Lizenzvereinbarung gibt es wichtige Informationen über die rechtlichen Aspekte zur **AAPS**-Nutzung. Bitte lies diese sorgfältig.

Wenn Du die Endnutzer-Lizenzvereinbarung nicht verstehst oder sie nicht akzeptierst, nutze **AAPS** bitte überhaupt nicht!

Wenn Du sie verstehst und zustimmst, klicke auf die "ICH VESTEHE UND STIMME ZU"-Schaltfläche und folge dem Einrichtungsassistenten:

![grafik](../images/setup-wizard/Screenshot_20231202_125650.png)

## Erforderliche Berechtigungen

**AAPS** benötigt einige Berechtigungen, um richtig zu funktionieren.

In den folgenden Bildschirmen werden Dir mehrere Fragen gestellt, denen Du zustimmen musst, um **AAPS** zum Laufen zu bringen. Der Assistent selbst erklärt, warum er nach der entsprechenden Einstellung fragt.

In diesem Bildschirm geben wir zusätzliche Hintergrundinformationen, übersetzen technischere Ausdrücke in allgemein verständliche Sprache oder erklären den Grund.

Bitte klicke auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_125709.png)

### Benachrichtigungen und Akku-Optimierung

Wenn Apps Benachrichtigungen senden möchten, benötigt Android hierfür eine besondere Berechtigung.

Obwohl es grundsätzlich gut ist. Benachrichtigungen _z.B._ von Social Media-Apps zu deaktivieren, ist es zwingend notwendig, dass Du **AAPS** erlaubst, Dir Benachrichtigungen zu senden.

Bitte klicke auf das erste "NACH BERECHTIGUNG FRAGEN":

![grafik](../images/setup-wizard/Screenshot_20231202_125721.png)

Wähle die "AAPS"-App aus:

![grafik](../images/setup-wizard/Screenshot_20231202_125833.png)

Aktiviere "Am Anfang anzeigen" indem Du den Schieberegler nach rechts schiebst:

![grafik](../images/setup-wizard/Screenshot_20231202_125843.png)

Der Schieberegler sollte, wenn er aktiviert ist, so aussehen:

![grafik](../images/setup-wizard/Screenshot_20231202_125851.png)

Der Akkuverbrauch ist bei Smartphones immer noch ein Thema, da die Akku-Kapazität noch immer ziemlich begrenzt ist. Daher ist das Android-Betriebssystem auf Ihrem Smartphone ziemlich restriktiv, was die Ausführung von Anwendungen und den Verbrauch von CPU-Zeit und damit des Akkus betrifft.

**AAPS** muss regelmäßig ausgeführt werden, _z.B._ um die Glukosewerte alle paar Minuten zu empfangen und dann den Algorithmus anzuwenden, der basierend auf Deinen Spezifikationen entscheidet, wie mit Deinen Glukosewerten umzugehen ist. Deshalb muss es Android erlaubt werden, dies zu tun.

Das tust Du, indem Du die Einstellung bestätigst.

Bitte klicke auf die zweite "NACH BERECHTIGUNG FRAGEN"-Schaltfläche. Bitte tippe auf "Zulassen":

![grafik](../images/setup-wizard/Screenshot_20231202_125750.png)

Klicke auf "WEITER":

![Screenshot_20241207-161454.png](../images/setup-wizard/Screenshot_20241207-161454.png)

### Standort

Android verknüpft die Nutzung der Bluetooth-Kommunikation mit der Möglichkeit, Standortdienste zu nutzen. Vielleicht hast Du das bei anderen Apps auch schon bemerkt. Es ist üblich, Standortberechtigung zu benötigen, wenn Du auf Bluetooth zugreifen willst.

**AAPS** nutzt für die direkte Kommunikation mit Deinem CGM und der Steuerung der Insulinpumpe Bluetooth (alternativ kann **AAPS** auch mit anderen Apps kommunizieren). Die Details können je nach Setup variieren.

Bitte klicke auf die erste "NACH BERECHTIGUNG FRAGEN"-Schaltfläche:

![grafik](../images/setup-wizard/Screenshot_20231202_125924.png)

Das ist wichtig. Ansonsten kann **AAPS** überhaupt nicht funktionieren.

Klicke auf "Bei Nutzung der App":

![grafik](../images/setup-wizard/Screenshot_20231202_125939.png)

Bitte klicke auf die zweite "NACH BERECHTIGUNG FRAGEN"-Schaltfläche:

![Screenshot_20241207-154117.png](../images/setup-wizard/Screenshot_20241207-154117.png)

Wähle "Immer zulassen".

Klicke auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_130002.png)

### Speicherberechtigung

Um Log-Dateien zu sichern und Einstellungen exportieren zu können, benötigt **AAPS** Zugriff auf den permanenten Speicher Deines Smartphones. Permanenter Speicher bedeutet, dass es auch nach dem Neustarten Deines Smartphones verfügbar sein wird. Andere Informationen gehen einfach verloren, da sie nicht im permanenten Speicher abgelegt sind.

Bitte klicke auf die erste "NACH BERECHTIGUNG FRAGEN"-Schaltfläche:

![grafik](../images/setup-wizard/Screenshot_20231202_130012.png)

Klicke auf "Zulassen":

![grafik](../images/setup-wizard/Screenshot_20231202_130022.png)

Klicke auf "AAPS Verzeichnis". Dadurch wird das Dateisystem auf Deinem Smartphone geöffnet und Du kannst wählen, wo AAPS seine Informationen speichern soll. Das Standardverzeichnis ist **AAPS**, aber Du kannst jedes beliebige Verzeichnis nutzen. Erstelle das Verzeichnis, falls erforderlich, rufe es auf und wähle "Diesen Ordner verwenden":

![Screenshot_20241207-155358.png](../images/setup-wizard/Screenshot_20241207-155358.png)

Bestätige, dass Du **AAPS** den Zugriff auf das ausgewählte Verzeichnis gewähren willst:

![Screenshot_20241207-155833.png](../images/setup-wizard/Screenshot_20241207-155833.png)

Klicke auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_130031.png)

## Master-Passwort

Da die **AAPS**-Konfiguration einige sensible Daten enthält (_z.B._ den API_KEY zum Zugriff auf Deinen Nightscout-Server), wird sie durch ein Passwort, das Du selbst festlegen kannst, verschlüsselt.

Der zweite Satz ist sehr wichtig, bitte **VERLIERE DEIN MASTER-PASSWORT NICHT**. Bitte notiere es Dir _z.B._ in Google Drive. Google Drive ist eine gute Stelle, da es von Google für Dich gesichert wird. Dein Smartphone oder Dein PC kann abstürzen und Du hast dann möglicherweise keine aktuelle Kopie zur Hand. Wenn Du Dein Master-Passwort vergessen hast, wird es schwierig, Deine Profilkonfiguration wiederherzustellen und den Fortschritt bei der Bearbeitung der **Ziele** (Objectives) später zu rekonstruieren.

Nachdem Du das Passwort zweimal eingegeben hast, klicke bitte auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_130122.png)


## Fabric-Upload

Hier kannst Du einen Service einrichten, der automatisiert einen Absturz- und Nutzungsbericht verschickt.

Dieser Service ist nicht verpflichtend, hat sich aber in der Praxis bewährt.

Es hilft den Entwickelnden Deine App-Nutzung besser zu verstehen und informiert sie über die aufgetretenen Abstürze.

Sie bekommen:

1. Die Informationen, die sie sonst nicht bekommen hätten, da ihre eigene App einwandfrei funktioniert, dass die App abgestürzt ist.
1. In den gesendeten Daten (den Absturzinformationen) gibt es Informationen über die Umstände, unter denen der Absturz stattgefunden hat und wie die Konfiguration ausgesehen hat.

Es hilft den Entwickelnden, die App zu verbessern.

Bitte aktiviere den "Fabric-Upload", in dem Du den Schieberegler nach rechts schiebst:


![grafik](../images/setup-wizard/Screenshot_20231202_130136.png)

Nur für den Fall, dass die Entwickelnden Rückfragen an Dich haben oder Dich auf dringende Probleme aufmerksam machen möchten, kannst Du Dich damit identifizieren:

![grafik](../images/setup-wizard/Screenshot_20231202_130147.png)

Nachdem Du Deine "Kontaktdaten" ausgefüllt hast, klicke auf "OK". Die Kontaktdaten können Dein Nickname auf Facebook, auf Discord etc. sein Es sind die Informationen, mit denen Du am Besten und Einfachsten erreicht werden kannst:

![grafik](../images/setup-wizard/Screenshot_20231202_135748.png)

Klicke auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_135807.png)

## Einheiten (mg/dl <-> mmol/l)

Bitte lege fest, ob Deine Glukosewerte in mg/dl oder mmol/dl vorliegen, und klicke dann auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_135830.png)

## Anzeigeeinstellungen

 Hier legst Du den anzuzeigenden Zielbereich für Deine Sensorwerte fest. Zwischen diesen Markierungen wird der Wert als "im Zielbereich" angezeigt. Du kannst die Standarwerte zunächst übernehmen und später ändern.

Die gewählten Werte wirken sich nur auf die Darstellung in Grafik aus. Weitere Auswirkungen haben sie nicht.

Dein eigentliches Glukoseziel (Zielbereich) ist _beispielsweise_ separat in Deinem Profil festgelegt.

Der für die Analyse der TIR (Time In Range) relevante Bereich wird separat in Deinem Auswertungsserver festgelegt.

Bitte klicke auf "WEITER":

![grafik](../images/setup-wizard/Screenshot_20231202_135853.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
## Synchronisierung (u.a. mit dem Auswertungs- bzw. Berichtsserver)

Hier konfigurierst Du den Daten-Upload zu Deinem Auswertungsserver.

Du kannst hier viele weitere Dinge konfigurieren, aber als Erstes konzentrieren wir uns auf den Auswertungsserver.

Wenn Du die Einrichtung jetzt nicht machen, kannst überspringe sie für den Moment. Du kannst ihn später konfigurieren.

Wenn Du ein Element hier links auswählst, kannst Du mit dem rechten Kästchen dessen Sichtbarkeit (Auge) aktivieren, sodass dieses Modul im oberen Menü als Reiter auf der **AAPS**-Übersicht platziert wird. Wenn Du an diesem Punkt Deinen Auswertungsserver (z.B. Nightscout) konfigurierst, sorge auch dafür das Modul oben sichtbar zu machen.

In diesem Beispiel wählen wir Nightscout als Auswertungsserver aus und konfigurieren diesen entsprechend.

```{admonition}  Make sure to choose the correct **NSClient** version for your needs! 
:class: Note
Klicke [hier](#version3200), um zu den **AAPS** 3.2.0.0 Release Notes zu gelangen, die die Unterschiede zwischen der obersten Option **NSClient** (das ist die „v1“, auch wenn es nicht daneben steht) und der zweiten Option **NSClient v3** erläutern.

Nightscout-Nutzende sollten **NSClientV3** wählen, es sei denn, Du willst über Nightscout die Werte überwachen und remote über die Webseite Behandlungen eingeben (_z.B._ als Elternteil oder Betreuer, das **AAPS** für ein Kind verwendet). In diesem Fall Fall wähle (bis auf weiteres) die erste Option "**Nightscout-Client**". 
```
Für Tidepool ist es sogar noch einfacher, da Du nur Deine persönlichen Login-Daten benötigst.

Nachdem Du ausgewählt hast, tippe auf das Zahnrad-Symbol neben dem ausgewählten Element:

![grafik](../images/setup-wizard/Screenshot_20231202_140916.png)

Hier konfigurierst Du den Daten-Upload zu Deinem Auswertungsserver.

Bitte tippe auf "Nightscout-URL":

![grafik](../images/setup-wizard/Screenshot_20231202_140952.png)

Gib die Nightscout-URL Deines Nightscout-Servers ein. Es ist die URL, die Du selbst erstellt hast oder, die Dir von Deinem Nightscout-Anbieter mitgeteilt wurde.

Bitte tippe auf "OK":

![grafik](../images/setup-wizard/Screenshot_20231202_141051.png)

Gib nun Deinen Nightscout Zugangstoken (Zugriffsschlüssel) ein. Das ist der Zugriffsschlüssel, den Du für Deinen Nightscout-Server angelegt hast. Ohne dieses Token, wird der Zugriff nicht funktionieren.

Wenn Du bis jetzt keinen hast, findest Du in der **AAPS**-Dokumentation beschrieben, wie der Auswertungsserver aufgesetzt werden kann.

Nachdem Du das „**NS-Zugriffstoken**“ eingegeben hast und mit „OK“ weiter gegangen bist, tippe auf „Synchronisierung“:

![grafik](../images/setup-wizard/Screenshot_20231202_141131.png)

Wenn Du Nightscout in den vorangegangenen Schritten des Einrichtungsassistenten bereits konfiguriert hast, wähle "Daten zu NS hochladen" aus.

Wenn Du in Nightscout Profile hinterlegt hast und diese nach **AAPS** herunterladen möchtest, aktiviere „Gespeicherte Profile abrufen“:

![grafik](../images/setup-wizard/Screenshot_20231202_141219.png)


Gehe auf den vorherigen Bildschirm zurück und tippe auf "Alarm-Optionen":

![grafik](../images/setup-wizard/Screenshot_20231202_141310.png)

Lasse die Schalter vorerst alle deaktiviert. Wir sind nur zu diesem Bildschirm gegangen, um Dich mit den möglichen Optionen vertraut zu machen, die Du zukünftig vielleicht konfigurieren möchtest. Im Moment besteht hierzu noch kein Grund.

Gehe auf den vorherigen Bildschirm zurück und wähle "Verbindungs-Einstellungen" aus.

Hier kannst Du konfigurieren, wie Du Deine Daten auf den Auswertungsserver übertragen möchtest.

Betreuende müssen die Option „Mobilfunkverbindung verwenden“ aktivieren, da das Smartphone das dem Kind oder der betreuten Person helfen soll, sonst keine Daten außerhalb der WLAN-Reichweite (_z.B._ auf dem Weg zur Schule) hochladen kann.

Andere **AAPS**-Nutzende können die Übertragung über die Mobilfunkverbindung deaktivieren, um so Daten oder Akku zu sparen.

Im Zweifel lass einfach alles aktiviert.

Gehe auf den vorherigen Bildschirm zurück und wähle "Erweiterte Einstellungen" aus.

![grafik](../images/setup-wizard/Screenshot_20231202_141326.png)

Aktiviere "Logge App-Start in Nightscout", wenn Du diese Informationen auf dem Auswertungsserver erhalten und sehen möchtest. Insbesondere als remote betreuende Person kann es wichtig sein, zu wissen ob und wann die App neu gestartet wurde.

Es könnte interessant sein zu sehen, ob **AAPS** jetzt korrekt konfiguriert ist. Später ist es aber normalerweise nicht mehr so wichtig zu sehen wann **AAPS** gestartet oder beendet wurde.

Aktiviere "Ankündigungen aus Fehlern generieren" und "Benachrichtigungen aus KH-Vorschlags-Alarmen erzeugen".

Lass "Hochladen verlangsamen" weiterhin deaktiviert. Du würdest es nur in ganz besonderen Situationen (wenn z.B. viele Informationen zum Nightscout-Server übertragen werden müssen und der Nightscout-Server diese Daten nur sehr verzögert verarbeiten kann) aktivieren.

Gehe zweimal zurück zur Liste der Plugins und wähle "WEITER", um zum nächsten Bildschirm zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_141351.png)

## Name des Patienten

Hier kannst Du in **AAPS** Deinen Namen hinterlegen.

Das kann alles sein. Es dient nur zur Unterscheidung von Nutzenden.

Um es einfach zu halten, gib einfach den Vor- und Nachnamen ein.

Drücke auf "WEITER", um zur nächsten Seite zu kommen.

![grafik](../images/setup-wizard/Screenshot_20231202_141445.png)

## Patiententyp

Hier legst Du den „Patiententyp“ fest, der dazu führt, dass die **AAPS**-Software je nach Alter des Patienten unterschiedliche Grenzwerte berücksichtigt. Dies ist aus Sicherheits- und Schutzgründen wichtig.

An dieser Stelle wird auch die **maximal erlaubte Bolusgröße** für eine Mahlzeit festgelegt. Das ist der größte Bolus, der üblicherweise zum Abdecken einer Mahlzeit benötigt wird. Diese Sicherheitsfunktion hilft, eine versehentliche Überdosierung beim Bolen einer Mahlzeit zu vermeiden.

Das zweite Limit ist ähnlich konzipiert und bezieht sich auf die maximale zu erwartende Kohlenhydrataufnahme.

Nachdem Du die Werte festgelegt hast, kommst Du mit "WEITER" auf die nächste Seite:

![grafik](../images/setup-wizard/Screenshot_20231202_141817.png)

## Verwendetes Insulin

Wähle das Insulin, das Du in der Pumpe nutzt, aus.

Die Insulinnamen sollte selbsterklärend sein.

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
Für erfahrene Looper oder für medizinische Studien gibt es die Möglichkeit mit "Free-Peak Oref" ein eigenes Insulin-Wirkprofil zu erstellen. Nutze es wirklich nur dann, wenn Du ein ausgesprochener Experte bist. Normalerweise funktionieren die vor-definierten Wirkprofile für jedes der angegebenen Markeninsuline sehr gut.
```

Tippe auf "WEITER", um zur nächsten Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_141840.png)


## Blutzucker-Quelle

Wähle die von Dir genutzte BZ-Quelle aus. Zum Thema [BZ-Quelle](../Getting-Started/CompatiblesCgms.md) lies bitte die Dokumentation.

Da es mehrere Optionen gibt, erklären wir hier nicht alle der möglichen Konfigurationen. In unserem Beispiel nutzen wir den Dexcom G6 mit der BYODA-App:


![grafik](../images/setup-wizard/Screenshot_20231202_141912.png)


Wenn Du den Dexcom G6 mit BYODA nutzt, hake das Kästchen auf der rechten Seite an, um den zugehörigen Reiter im oberen Menüband sichtbar zu machen.

Nachdem Du Deine Auswahl getroffen hast, tippe auf "WEITER", um auf die nächste Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_141925.png)


Wenn Du den Dexcom G6 mit BYODA nutzt, tippe auf das "Zahnradsymbol", um die BYODA-Einstellungen zu öffnen.

Aktiviere "Speichere BZ-Werte in Nightscout" und "Speichere Sensorwechsel in Nightscout".

Gehe zurück und tippe auf "WEITER", um zum nächsten Bildschirm zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_141958.png)

(setup-wizard-profile)=
## Profil

Wir kommen jetzt zu einem sehr wichtigen Bereich des Einrichtungsassistenten.

Bitte lies die Dokumentation zu den [Profilen](../SettingUpAaps/YourAapsProfile.md), bevor Du versuchst Deine Profildetails auf der folgenden Seite einzugeben.

```{admonition} Working profile required - no exceptions here !
:class: danger
Ein genau passendes Profil ist notwendig, damit **AAPS** sicher arbeiten kann.

Es ist erforderlich, dass Du Dein Profil mit Deiner Ärztin oder Deinem Arzt bestimmt und besprochen hast. Basalrate, Korrekturfaktoren (ISF) und Essensfaktoren (IC) müssen ausgetestet sein und sich bewiesen haben!

Wenn ein Roboter eine falsche Eingabe bekommt, wird er versagen - immer wieder. **AAPS** kann nur mit den zur Verfügung gestellten Informationen arbeiten. Wenn Dein Profil zu stark ist, riskierst Du Hypoglykämien, und wenn es zu schwach ist, riskierst Du Hyperglykämien. 
```

Drücke auf "WEITER", um zur nächsten Seite zu kommen. Gib einen "Profilnamen" ein:

![grafik](../images/setup-wizard/Screenshot_20231202_142027.png)


Auf lange Sicht kannst Du - wenn nötig - mehrere Profile haben. Wir erstellen hier nur eines.

```{admonition} Profile only for tutorial - not for your usage
:class: information
Das Beispiel-Profil hier ist lediglich dazu da zu veranschaulichen, wie die Daten eingegeben werden.

Der Bedarf ist für jede Person unterschiedlich, daher soll und kann dies kein akkurates Profil oder etwas sein das wirklich gut optimiert wurde.

Verwende es nicht zum echten Loopen!
```

Gib die Insulinwirkdauer [(DIA)](#your-aaps-profile-duration-of-insulin-action) in Stunden ein. Tippe dann auf "IC":

![grafik](../images/setup-wizard/Screenshot_20231202_142143.png)

Gib Deine [IC](#your-aaps-profile-insulin-to-carbs-ratio)-Werte ein:

![grafik](../images/setup-wizard/Screenshot_20231202_142903.png)

Tippe auf "ISF". Gib Deine [ISF-Werte](#your-aaps-profile-insulin-sensitivity-factor) (Korrekturfaktoren) ein:

![grafik](../images/setup-wizard/Screenshot_20231202_143009.png)


Tippe auf "BAS". Gib Deine [Basalwerte](#your-aaps-profile-basal-rates) ein:

![grafik](../images/setup-wizard/Screenshot_20231202_143623.png)


Tippe auf "ZIEL". Gib Deine Glukosezielwerte ein.

Für offenes Looping kann dieser Zielbereich breiter sein, da **AAPS** Dich sonst ständig darauf hinweisen wird, die temporäre Basalrate oder eine andere Einstellung zu ändern. Das kann sehr anstrengend werden.

Im Cloosed Loop hast Du später in der Regel nur einen einzigen Wert (keinen Bereich) für oben und unten. Das erleichtert es **AAPS**, das Ziel zu erreichen und bietet und erlaubt eine insgesamt bessere Steuerung des Diabetes.

Gib die Zielwerte ein und bestätige sie:

![grafik](../images/setup-wizard/Screenshot_20231202_143709.png)

Speichere das Profil, indem Du auf "SPEICHERN" tippst:

![grafik](../images/setup-wizard/Screenshot_20231202_143724.png)


Nach dem Speichern erscheint eine neue Schaltfläche „Aktiviere Profil“.

```{admonition} Several defined but only one active profile
:class: information
Du kannst mehrere Profile definiert haben, aber es kann nur eines davon aktiv sein.
```

Tippe auf "AKTIVIERE PROFIL":

![grafik](../images/setup-wizard/Screenshot_20231202_143741.png)





Der Dialog zum Profilwechsel wird angezeigt. In diesem Fall lass alles wie es voreingestellt ist.

```{admonition} Several defined but only one active profile
:class: Information
Später wird erklärt wie Du diesen Dialog nutzt, um das Profil an besondere Situationen wie Krankheit oder Sport anzupassen.
```


Tippe auf "OK":


![grafik](../images/setup-wizard/Screenshot_20231202_143808.png)



Es erscheint ein Bestätigungsdialog für den Profilwechsel.

Mit "OK" kannst Du ihn bestätigen. Tippe auf "WEITER", um zur nächsten Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_143822.png)

Dein Profil wurde jetzt hinterlegt und aktiviert:

![grafik](../images/setup-wizard/Screenshot_20231202_143833.png)


## Insulinpumpe



Jetzt wählst Du Deine Insulinpumpe aus.

Du erhälst einen wichtigen Warnhinweis. Bitte lies ihn und drücke dann auf "OK".

Wenn Du Dein Profil bereits in den vorherigen Schritten eingerichtet hast und weißt, wie Du die Pumpe verbinden kannst, lass Dich nicht aufhalten und verbinde sie jetzt.

Falls nicht, verlasse jetzt den Einrichtungsassistenten über den Pfeil oben links und warte darauf, dass **AAPS** Dir einige Glukosewerte anzeigt. Du kannst jederzeit hierhin zurückkommen oder direkt eines der jeweiligen Konfigurationsmenüs (ohne den Einrichtungsassistenten zu nutzen) aufrufen.

Bitte lies die Dokumentation zu Deiner [Insulinpumpe](../Getting-Started/CompatiblePumps.md).

Drücke auf "WEITER", um zur nächsten Seite zu kommen.

![grafik](../images/setup-wizard/Screenshot_20231202_143909.png)


In diesem Fall wählen wir die "Virtuelle Pumpe" aus.

Tippe auf "WEITER", um zur nächsten Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_143935.png)

## Der APS Algorithmus

Nutze den OpenAPS SMB-Algorithmus als Deinen APS-Algorithmus. Trotz des Namens ist das SMB-Feature des Algorithmus deaktiviert, bis Du mit AAPS vertraut bist und die ersten Ziele abgeschlossen hast. OpenAPS SMB ist im Vergleich zu OpenAPS AMA neuer und im Allgemeinen auch besser.

Der Grund dafür, dass SMB zu Beginn deaktiviert sind, ist, dass die SMB-Funktion durch einen sogenannten Super Micro Bolus (SMB) eine schnellere Reaktion auf den Anstieg des Glukosewerts ermöglicht und das nicht durch eine prozentuale Erhöhung des Basalwerts erreicht. Am Anfang ist Dein Profil in der Regel noch nicht so gut abgestimmt, wie es später mit etwas mehr Erfahrung sein wird. Daher wird diese Funktion zu Beginn zunächst deaktiviert.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA ist der einfachste Algorithmus, der zur Korrektur hoher Werte keine SMB einsetzt. Es könnte Situationen geben, in denen es besser ist, diesen Algorithmus zu verwenden, aber das ist nicht die Empfehlung.
```

Tippe auf das Zahnrad-Symbol, um die Details anzuzeigen:

![grafik](../images/setup-wizard/Screenshot_20231202_144014.png)


Lies nur den Text und ändere hier nichts.

Aufgrund der Einschränkungen, die durch die**Ziele** eingeführt werden, kannst Du im Moment sowieso weder „Closed Loop“ noch „SMB-Funktionalitäten“ verwenden.

Gehe zurück und tippe auf "WEITER", um zum nächsten Bildschirm zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_144025.png)

## APS-Modus

Lass "Open Loop" ausgewählt.

Tippe auf "WEITER", um zur nächsten Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_144049.png)

## Empfindlichkeitserkennung

Lass „Sensitivität Oref1“ als Standard für das Modul "Sensitivitätserkennung" ausgewählt.

Tippe auf "WEITER", um zur nächsten Seite zu kommen:

![grafik](../images/setup-wizard/Screenshot_20231202_144101.png)

## Starte das erste Ziel (Objective 1)

Du kommst nun zu den Zielen (Objectives). Die Qualifikation, um auf weitere **AAPS**-Funktionen zugreifen zu können.

Hier beginnen wir jetzt mit dem ersten Ziel (Objective 1), auch wenn unser Setup im Moment noch nicht vollständig ist, um dieses Ziel erfolgreich abzuschließen.

Aber das ist der Beginn.

Tippe auf das grüne "START", um Ziel 1 zu starten:

![grafik](../images/setup-wizard/Screenshot_20231202_144113.png)

Du erkennst, dass Du schon Fortschritt gemacht hast, aber auch, dass es in anderen Bereichen noch etwas zu tun gibt.

Tippe auf "ABSCHLIESSEN", um zur nächsten Seite zu gelangen.

![grafik](../images/setup-wizard/Screenshot_20231202_144135.png)

Du kommst nun zur **AAPS**-Übersicht (Startbildschirm).

Hier findest Du in **AAPS** die Benachrichtigung, dass Du Dein Profil aktiviert hast.

Dies ist beim Wechsel zu unserem neuen Profil erfolgt.

Du kannst auf "SCHLUMMERN" tippen und sie wird veschwinden.

![grafik](../images/setup-wizard/Screenshot_20231202_144156.png)

Solltest Du versehentlich den Einrichtungsassistenten verlassen haben, kannst Du ihn entweder einfach neu starten oder die [Konfiguration des AAPS Loop](../SettingUpAaps/ChangeAapsConfiguration.md) manuell vornehmen.

Wenn Dein **AAPS**-Loop nun fertig eingerichtet ist, gehe zum nächsten Abschnitt [„Abschließen der Ziele (Objectives)“](../SettingUpAaps/CompletingTheObjectives.md).