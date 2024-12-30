# AAPS auf Deiner Wear OS-Smartwatch einrichten

Die untenstehende Anleitung gilt für die **AAPS Wear**-apk, die Du auf die gleiche Art wie die **AAPS**-Smartphone-apk erstellst. (Wenn Du das noch nicht getan hast, dann findest Du [hier](../WearOS/BuildingAapsWearOS.md) eine Anleitung dazu wie Du das machen kannst.)

Du kannst auch einige der Informationen für die direkt in [GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4) verfügbaren **AAPSClient** und **PumpControl** **Wear** APKs verwenden. Jede **Wear**-App kommuniziert mit der zugehörigen Smartphone-App. Beispiel: Die **AAPSClient Wear**-App kann **AAPSClient**-Daten anzeigen, aber keine **AAPS**-Daten.

(BuildingAapsWearOs-WearOS5)=

```{admonition} Android Wear OS 5
:class: warning
Die Installation des AAPS Zifferblatts muss mit dem [Wear Installer 2](https://www.youtube.com/watch?v=yef_qGvcCnk) nach der Installation der Wear App erfolgen.<br>
Ein versehnentliches Ändern des Zifferblattes auf eins anderes Zifferblatt, hat zur Folge, dass die oben beschriebene Prozedur wiederholt werden muss<br>
Ändern spezieller Zifferblatt-Parameter wie: Dark, Watchdivider, etc. ist nicht möglich.
```

## Wie man eine Samsung Galaxy 4 Smartwatch mit **AAPS** einrichtet

Dieser Abschnitt ist für Neulinge im Umgang mit Smartwatches und gibt zunächst einen ersten Überblick über die beliebte **Galaxy Watch 4** und danach eine Schritt-für-Schritt Anleitung, um **AAPS** auf der Smartwatch einzurichten.

_Diese Anleitung geht von einer Samsung Galaxy Watch mit Wear OS Version 3 oder niedriger aus._ Solltest Du eine Smartwatch mit Wear OS 4/OneUI 5 oder neuer einrichten wollen, wirst Du den neuen ADB pairing Process nutzen müssen, der in der Samsung Software Deines Smartphones erklärt wird (und hier demnächst beschrieben wird).

Hier sind die Anleitungen zur Einrichtung der [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) und der [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Mit der Smartwatch vertraut machen

Nach den im Video gezeigten Grundeinstellungen Deiner Smartwatch, gehe in den Play Store Deines Smartphones und lade "Galaxy Wearable", “Samsung” und entweder “Easy Fire Tools” oder "Wear Installer 2" herunter.

Es gibt eine Reihe von YouTube-Videos von Drittanbietern, die Dir helfen werden, Dich mit Deiner neuen Smartwatch vertraut zu machen, zum Beispiel:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

Die App „Galaxy Wearable“ enthält auch ein Benutzerhandbuch. Öffne die Galaxy Wearable App auf Deinem Smartphone, suche unter dem Punkt "Neues Gerät hinzufügen" nach Deiner Smartwatch und versuche diese mir dem Smartphone zu koppeln. In Abhängigkeit von der Version, kann es sein, dass Du dazu aufgefordert wirst eine weitere Drittanbieter App "Galaxy Watch 4 Plugin" aus dem Play Store zu installieren. Der Download ein wenig. Installiere diese auf Deinem Smartphone und versuche danach die beiden Geräte in der Galaxy Wearable App zu koppeln. Gehe durch die verschiedenen Menüs und wähle Deine persönlichen Voreinstellungen aus.

## Samsung-Konto einrichten

Stelle sicher, dass in dem eMail-Konto, das Du zur Einrichtung des Samsung-Kontos verwendest, ein Geburtsdatum älter als 13 Jahre hinterlegt ist, da die notwendigen Samsung Berechtigungen sonst nur schwer genehmigt werden können. Du kannst ein Gmail Konto eines Kindes (unter 13 Jahren) nicht problemlos in das eines Erwachsenen ändern. Ein möglicher Weg, das zu umgehen ist, das Geburtsdatum auf ein Alter von 12 Jahren und 363 Tagen zu ändern. Am folgenden Tag wird das Konto in ein Erwachsenen-Konto umgewandelt, und Du kannst mit der Einrichtung des Samsung-Kontos weiter machen.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Übertragen der **AAPS** Wear-App auf Dein **AAPS**-Smartphone

Die wear.apk kann über mehrere Wege aus dem Android Studio auf Dein Smartphone übertragen werden:

a) Mit einem USB-Kabel, um die **AAPS** wear apk Datei auf das Smartphone zu bringen und sie dann über "Sideloading" auf die Smartwatch zu laden. Übertrage die Wear.apk auf das Smartphone über USB in den "Downloads"-Ordner oder

b) Schneide die Wear.apk aus Android Studio aus und füge sie in Dein Google Drive Laufwerk ein.


Um AAPS per "sideloading" auf die Smartwatch zu bringen, kannst Du entweder Wear Installer 2 oder Easy Fire Tools nutzen. Wir empfehlen den Wear Installer 2 zu nutzen, da die Anleitung und der Prozess im Video klar und verständlich erklärt wird.

## Wear Installer 2 zum "Sideloading" von AAPS Wear vom Smartphone auf die Smartwatch nutzen

 ![grafik](../images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Wear Installer 2, das von [Malcolm Bryant](https://www.youtube.com/@Freepoc) entwickelt wurde, kann aus dem Play Store auf Dein Smartphone heruntergeladen und zum Sideloading der AAPS Wear App auf die Smartwatch genutzt werden. Die App hat auch ein praktisches „Wie mache ich ein Sideloading“ [Video](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV).

```{tip}
Für Wear OS 5 Smartwatches gibt es eine [Videoanleitung](https://www.youtube.com/watch?v=yef_qGvcCnk).
```

Es zeigt alle notwendigen Einzelschritte. Am besten schaust Du das Video auf einem separaten Gerät an, sodass Du es während der Smartphone-Einrichtung ansehen kannst.

Um die Akkulaufzeit zu verlängern, schalte - wie auch Video gezeigt - auf der Smartwatch das ADB Debugging aus.

Alternativ kannst Du:

```{admonition} Use Easy Fire tools to side-load the **AAPS** wear on the watch
:class: dropdown

1)   Lade _Easy Fire Tools_ aus dem Playstore auf Dein Smartphone 

![image](../images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2)  Aktiviere die Entwickleroptionen auf Deiner Smartwatch (sobald sie fertig eingerichtet ist und mit Deinem Smartphone verbunden ist): 

Gehe in die Einstellungen > Info zur Uhr (unterste Option) > Software-Informationen > Softwareversion. 

Tippe schnell so lange auf "Softwareversion", bis eine Benachrichtigung erscheint, die besagt, dass die Smartwatch nun im "Entwicklermodus" ist. Kehre zum oberen Teil des Einstellungsmenüs zurück, scrolle nach unten
 zum Punkt „Entwickleroptionen“ unter „Info zur Uhr“. 

In den „Entwickleroptionen“ aktiviere das „ADB Debugging“ und „Über Bluetooth debuggen“. Die letzte Option zeigt dann die IP-Adresse der Smartwatch. Die letzten beiden Ziffern ändern sich jedesmal mit dem Koppelungsvorgang zu einem neuen Smartphone. Es wird in etwa so aussehen: 167.177.0.20. 5555 (ignoriere die letzten 4 Ziffern). Beachte, dass sich die letzten beiden Ziffern (hier, „20“) dieser Adresse mit jedem neuen AAPS Smartphone ändern.  

![24-10-23, watch ADB debug pic](../images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

3)     Gib die IP-Adresse _z.B._ **167.177.0.20** ins Easy Fire Tool auf Deinem Smartphone ein (gehe in das linke Hamburger-Menü, Einstellungen und gib die IP-Adresse ein). Klicke dann auf das plug socket Icon oben rechts.  

![image](../images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![image](../images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


4) Befolge die einzelnen Schritte der Anleitung [hier](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true), um die Wear.apk mit dem Easy Fire Tools auf Deine Smartwatch zu "side-loaden" (z.B. übertragen)

Tippe side "plug-in" socket in der App, um die WearOS.apk auf Dein Smartwatch hochzuladen: 

![image](../images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 Nächster Schritt > Akzeptiere die Authorisierungs-Anfrage auf Deiner Smartwatch


![image](../images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

```


## Die Verbindung zwischen der Smartwatch und Smartphone aus **AAPS** heraus einrichten

Der letzte Schritt ist es, **AAPS** auf dem Smartphone so einzurichten, so dass es mit „**AAPS** Wear“ auf der Smartwatch interagiert. Aktiviere dazu das Wear-Plugin in der KONFIGURATION:

* Gehe zur **AAPS**-App auf dem Smartphone

* Wähle > „Konfiguration“ im linken Hamburger-Menü

* Markiere unter dem Punkt „Allgemein“, Wear zur Auswahl der Wear-Optionen

![Wear OS](../images/WearOS.png)

Um zu einem anderen **AAPS**-Zifferblatt zu wechseln, drücke lange auf den Startbildschirm der Smartwatch und es wird die Option Anpassen“ erscheinen. Wische dann nach rechts, bis Du die **AAPS**-Zifferblätter erreicht hast.

Wenn das Sideloading der **AAPS** Wear.apk auf die Smartwatch erfolgreich war, sieht es ungefähr so aus:


![24-10-23, successful galaxy watch photo](../images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

### Verbindungsprobleme zwischen **AAPS** Smartwatch und **AAPS** Smartphone beheben

1.  Wenn Easy Fire Tools sich nicht verbindet oder Du die Meldung "authorisation failed" erhälst > Überprüfe, ob die IP-Adresse korrekt eingegeben wurde.
2.  Überprüfe, ob die Smartwatch mit dem Internet (und nicht nur über Bluetooth mit dem Smartphone) verbunden ist.
3.  Überprüfe, ob das **AAPS** Smartphone und die Smartwatch in der Samsung App miteinander gekoppelt bzw. verbunden sind.
4.  Es kann auch helfen, einen harten Neustart von Smartphone und Smartwatch durchzuführen (d.h. Samartphone aus- und wieder einschalten)
5.  Angenommen Du hast die Wear.apk auf Dein Smartphone herunterladen können, bekommst allerdings keine Glukosewerte angezeigt, _überprüfe_, ob Du die richtige **AAPS** apk Version per Sideloading auf die Smartwatch übertragen hast. Wenn Deine AAPS Wear.apk Version in der folgenden Liste enthalten ist a) „wear-AAPSClient-release“; b) „wear-full-release.aab“; oder c) das Wort „debug“ im Namen hat, dann hast Du im Erstellprozess (build) die falsche Wear OS apk Version ausgewählt.
6.  Überprüfe, dass Dein Router die Geräte nicht voneinander isoliert (IP Isolation).

Weitere Tipps zur Fehlerbehebung findest Du [hier](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Wechsel zu einem AAPS-Zifferblatt auf Deiner WearOS-Smartwatch

In der Basisversion der AAPS Wear OS APK sind schon eine Vielzahl von Zifferblättern enthalten. Nach der Installation der AAPS Wear APK, kannst Du diese nutzen. Die einzelnen Schritte zur Auswahl eines Zifferblattes sind:

1. Durch langes Drücken auf das aktuelle Zifferblatt öffnest Du die Zifferblatt-Auswahl auf Deiner Smartwatch (sofern es eine WearOS-Uhr ist).

![Screenshot_20231123_124657_sysui](../images/efd4268f-0536-4a31-9ba1-f98108f32483.png)

2. Wische an das Ende der Liste, bis Du die heruntergeladen Zifferblätter "AAPS (Custom)" siehst. Klicke in die Mitte des Bildes, um es in Deine Zifferblatt-Auswahl zu übernehmen. Keine Angst, das Aussehen des "AAPS (Custom)" Zifferblattes kannst Du im nächsten Schritt noch anpassen.

![Screenshot_20231123_124619_sysui](../images/036dc7c4-6672-46c8-b604-8810a16a2eb3.png)

3. Öffne jetzt AAPS auf Deinem Smartphone und gehe auf den WEAR-Reiter. Wird er dort noch nicht angezeigt, kannst Du das unter KONFIGURATION > Synchronisierung nachholen.

![Screenshot_20231123_090941_AAPS](../images/5df23fa3-791b-4c9a-999a-251391a82835.png)

4. Klicke auf "Watchface laden" und wähle das gewünschte Zifferblatt aus.

![Screenshot_20231123_130410_AAPS](../images/adde2eca-1df7-4382-b9ab-346819c35d9d.png)

5. Das ""AAPS (Custom)"-Zifferblatt sollte im ausgewählten Design auf Deiner Smartwatch angezeigt werden. Das Laden kann einige Sekunden dauern. Du kannst jetzt die „Complications“ anpassen, in dem Du lange auf das Zifferblatt drückst und dann auf „Anpassen“ tippst.

## AAPSv2 Watchface - Legende

![Legende AAPSv2 Watchface](../images/Watchface_Legend.png)

A - Zeit seit der letzten Loop-Aktion

B - CGM Wert

C - Minuten seit dem letzten CGM-Wert

D - Veränderung zwischen letztem und vorletztem CGM-Wert (in mmol oder mg/dl)

E - Durchschnittliche Änderung der CGM-Werte in den letzten 15 Minuten

F - Batteriestatus des Smartphones

G - Basalrate (Anzeige in IE/Std. bei Standard-BR und in % während einer TBR)

H - BGI (blood glucose interaction; dt. Blutzuckerwirkung) -> erwartete Glukosewert-Änderung nur auf Basis des aktiven Insulins.

I - Kohlenhydrate (carbs on board | e-carbs in der Zukunft)

J - Insulin on board (aus Boli | aus Basal)