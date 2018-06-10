# Sicherstellung eines reibungslosen Betriebs
* Trage das Smartphone immer bei Dir und lass es in der Nacht neben dir liegen.
* Stelle sicher, dass die Batterie in der Pumpe möglichst voll ist. 
Zu Tipps rund um die Batterie siehe auch das Kapitel-Batterie.
* **Benutze die App ruffy nicht mehr, während das System läuft!** Wird ruffy trotzdem aufgerufen, kann hierdurch die Verbindung zur Pumpe unterbrochen werden. Wenn die Pumpe einmal mit ruffy verbunden ist, muss kein erneutes Pairing mehr stattfinden. Selbst nach einem Neustart des Telefons wird die Verbindung automatisch wieder aufgebaut. Verschiebe die App ruffy daher am besten auf einen ungenutzten Screen oder in einen Ordner auf Deinem Smartphone, damit Du sie nicht versehentlich öffnest.
* Wenn Du ruffy, während des Looping-Betriebs versehentlich öffnest, schliesse ruffy und starte dein Smartphone neu.
* Bediene die Pumpe soweit möglich nur noch über AndroidAPS. Um dies zu erleichtern, aktiviere am besten die Tastensperre auf der Pumpe unter **PUMPEN-EINSTELLUNGEN / TASTENSPERRE / EIN**. Einzig zum Wechseln der Batterie oder der Ampulle ist dann noch die Bedienung direkt an der Pumpe nötig. ![Keylock](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

# Pumpe nicht erreichbar - was kann ich tun?
## Erreichbarkeit der Pumpe wieder herstellen
* Wenn AndroidAPS einen “**Pumpe ist nicht erreichbar**” Alarm meldet, hebe zunächst die Tastensperre auf und **drücke irgendeine Taste auf der Pumpe** (z.B. "Nach unten" Knopf). Sobald dann das Display der Pumpe wieder leer ist, drücke **AKTUALISIEREN** auf dem Combo Tab in AndroidAPS. Meistens klappt dann die Kommunikation wieder.
* Wenn das nichts hilft, starte Dein Smartphone neu. Nach dem Neustart wird AndroidAPS erneut eine Verbindung, über ruffy mit der Pumpe aufbauen.
* Die Tests mit unterschiedlichen Smartphones lassen vermuten, dass bestimmte Smartphones öfter den “Pumpe nicht erreichbar” Fehler auslösen als andere. Unter [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) sind erfolgreich getestete Smartphones aufgeführt. 

## Ursachen und Folgen häufiger Kommunikationsfehler 
* Bei Telefonen mit **wenig Speicher** (oder **aggressiven Energiespareinstellungen**) wird AndroidAPS häufig beendet. Du erkennst das daran, dass die Bolus- und Rechner-Schaltflächen auf dem Startbildschirm beim Öffnen von AAPS nicht angezeigt werden, weil sich das System gearde initialisiert. Dies kann beim Start falsche "Pumpe-nicht-erreichbar-Alarme" auslösen. Im Feld "Letzte Verbindung" der Combo-Registerkarte kannst Du überprüfen, wann AndroidAPS zuletzt mit der Pumpe kommuniziert hat.

![Pumpe nicht erreichbar](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Pumpe_nicht_errecihbar.png?raw=true)
![Pumpe nicht erreichbar](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Pumpe_nicht_errecihbar_ComboTab.png?raw=true)

* Außerdem kann durch diesen Fehler die **Batterie der Pumpe schneller entleert werden**, da das Basalprofil beim Neustart der App von der Pumpe ausgelesen wird. 
* Zudem erhöht es die Wahrscheinlichkeit, den Fehler hervorzurufen, der dazu führt, dass die Pumpe alle eingehenden Verbindungen zurückweist, bis eine Taste an der Pumpe gedrückt wird.

# Abbruch einer temporären Basalrate (TBR) scheitert
Gelegentlich kann AndroidAPS eine TBR CANCELED-Warnung nicht automatisch abbrechen. Dann muss entweder im AndroidAPS-Combo-Reiter auf Aktualisieren gedrückt werden oder der Alarm auf der Pumpe bestätigt werden.

# Rund um die Pumpen-Batterie
## Batterie wechseln
* Nach einem “**Batterie fast leer**” Alarm sollte möglichst schnell die **Batterie gewechselt** werden, um immer genügend Energie für eine zuverlässige Bluetooth-Kommunikation mit dem Smartphone zu haben.
* Auch nach dem **Batterie fast leer** Alarm kann die Pumpe -insbesondere mit hochwertigen Batterien- meist eine ganze Zeit weiter betrieben werden. Dabei sollte man allerdings immer schon eine volle Ersatzbatterie parat haben.
* Auf der **Startseite von AndroidAPS** länger auf **Closed Loop** drücken und dann **Loop unterbrechen für 1h** auswählen. Kurz abwarten, bis AndroidAPS den Befehl an die Pumpe weiter gegeben hat und das Bluetooth-Sysmbol auf der Pumpe wieder verschwunden ist.

![Bluetooth aktiv](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Nun kann die Tastensperre an der Pumpe aufgehoben, die Pumpe in den Stop-Modus versetzt, eine eventuell abgebrochene temporäre Basalrate bestätigt und die Batterie gewechselt werden.
* Anschließend die Pumpe wieder in den Run-Modus stellen.
* Nun auf der Startseite von AndroidAPS wieder lange auf **Unterbrochen** drücken und **Fortsetzen** wählen. Mit dem Eintreffen des nächsten Blutzucker-Werts stellt AndroidAPS dann eine ggf. erforderliche temporäre Basalrate wieder ein.

## Batterietyp und Ursachen kurzer Batterielebensdauer
* Da die intensive Bluetooth-Kommunikation viel Energie verbraucht, nutze nur hochwertige Batterien wie **Energizer Ultimate Lithium**, die **power one** aus dem “großen” Accu-Chek Service Pack oder **Eneloop-Akkus**, falls es aufladbare Akkus sein sollen.

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true)
![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Typische Lebensdauer verschiedener Batterietypen:
* **Energizer ULTIMATE LITHIUM**: 4 - 7 Wochen
* **power one alkaline** (Varta): 2 - 4 Wochen
* **Eneloop Akku** (BK-3MCCE): 1 - 3 Wochen

Sollte die Lebenszeit der Batterie deutlich kürzer, als die oben angegebenen Zeiten sein, prüfe bitte folgende mögliche Fehlerursachen:
* Die neueste Version (ca. März 2018) der [ruffy App](https://github.com/MilosKozak/ruffy) hat die Batterie-Laufzeit Pumpe deutlich verlängert. Stelle daher sicher, dass Du die neueste ruffy-Version einsetzt.
* Es gibt zwei Varianten bei den Batteriekappen der Accu-Chek Combo, die den Stromkreislauf teilweise kurzschließen und sich damit die Batterie schneller entleeren kann. Die Kappen ohne dieses Problem kann man an den goldenen Metall-Kontakten erkennen. 
* Wenn die Uhrzeit einen kurzen Batteriewechsel nicht “überlebt”, ist vermutlich der Kondensator defekt, der während einer kurzen Stromunterbrechung die Uhrzeit weiterlaufen lassen würde. In diesem Fall hilft nur ein Austausch der Pumpe durch Roche, was während der Garantiezeit kein Problem darstellt.
* Auf manchen Smartphones wird die AndroidAPS App häufig geschlossen, um Energie oder RAM zu sparen. Dann wird AndroidAPS bei jedem Aufruf neu initialisiert, baut eine Bluetooth-Verbindung zur Pumpe auf und liest die aktuelle Basalrate und die Bolus-Historie aus. Dies verbraucht sehr viel Strom und sorgt für eine kürzere Batterie-Lebensdauer. Um diesem Fehler auf die Sur zu kommen, aktiviere unter **Einstellungen** die Option **Logge App-Start in NS**. Dann wird in der Nightscout-Webseite jeder Neustart von AndroidAPS protokoliert.
* Die Hardware und das Betriebssystem oder der Bluetooth-Stack des Mobiltelefons scheinen auch großen Einfluss auf die Batterie-Lebenszeit der Pumpe zu haben. Falls Du die Möglichkeit hats, probiere eventuell ein anderes Mobiltelefon aus. 

# Zeitumstellung Sommer-/Winterzeit
* Aktuell unterstützt der Accu-Chek Combo-Treiber noch keine automatische Anpassung der Uhrzeit in der Pumpe.
* Während der Sommer-/Winterzeit-Umstellung wird die Uhrzeit im Smartphone aktualisiert, die Uhrzeit der Pumpe bleibt jedoch unverändert! Dadurch kommt es zur Umstellungszeit um 03:00 Uhr zu einem Alarm in AndroidAPS, wegen abweichenden Uhrzeiten zwischen Smartphone und Accu-Chek Combo.
* Möchtest Du in der Nacht nicht geweckt werden, deaktiviere am Abend zuvor die automatische Sommer-/Winterzeit-Umstellung auf dem Smartphone und gleiche diese dann am nächsten Morgen manuell ab.

# Verzögerter Bolus, MultiwaveBolus – wie mache ich das?
Der OpenAPS-Algorithmus unterstützt keinen parallel laufenden verzögerten Bolus oder Multiwave-Bolus. Über folgende Varianten kannst Du aber Dein Ziel erreichen:
* Stelle auf dem **Aktionen-Tab** in AndroidAPS vor dem Essen als **temporäres Ziel** “Bald essen” mit **Ziel 80** für mehrere Stunden ein. Die Dauer sollte sich an der Dauer orientieren, die auch ein verzögerter Bolus haben würde. 
Dann die **vollständigen Kohlenhydrate der Mahlzeit eingeben**, allerdings nicht die vom Bolusrechner vorgeschlagenen Werte direkt übernehmen. Sofern ein Multiwave-ähnlicher Bolus abgegeben werden soll, mit der Kohlenhydrat-Eingabe den sofort wirkenden Anteil als Bolus abgeben. Je nach Mahlzeit muss der Algorithmus nun eine **sehr hohe temporäre Basalrate** abgeben, um dem Blutzucker-Anstieg entgegen zu wirken. Hier sollte sehr vorsichtig mit den Sicherheits-Beschränkung der Basalrate (Max IE/h, Maximale Basal-IOB) experimentiert und diese ggf. temporär verändert werden.

![Temporäres Ziel](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Temporaeres_ziel.png?raw=true)

* Alternativ kann auf dem **Aktionen-Tab** im AndoidAPS ein **Profilwechsel** mit der Dauer des verzögerten Bolus und einem entsprechend **erhöhten Prozentsatz** erfolgen. Dazu muss kein weiteres Profil (z.B. in Nightscout) vorhanden sein. 
Den richtigen Prozentsatz kann man über die durchschnittliche Basalrate im gewählten Zeitraum und die benötigte Insulinmenge berechnen. Ein gewünschter verzögerter Bolus von 4 IE über 4 Stunden bei einer Basalrate von 0,5 IE/h würde also eine temporäre Basalrate von **TBR 300 %** erfordern.

![Temporäre Basalrate](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/300_prozent_Basalrate.png?raw=true)

# Alarme bei der Bolus-Abgabe
* Stellt AndroidAPS fest, dass in derselben Minute ein gleich hoher Bolus bereits erfolgreich abgegeben wurde, wird die **Bolusabgabe mit identischen Werten verhindert**. Daher einfach kurz warten und die Bolusabgabe **nach zwei Minuten nochmals ausführen**. Seit AAPS 2.0 kann man einen abgebrochenen oder aus anderen Gründen nicht abgegebenen Bous direkt wiederholen.
* Hintergrund ist ein **Sicherheitsmechanismus**, der vor jedem Bolus die Bolushistorie der Pumpe ausliest, um das Insulin on Board (IOB) korrekt berechnen zu können, selbst wenn ein Bolus direkt über die Pumpe abgegeben wurde. Hier müssen nicht unterscheidbare Einträge verhindert werden.

![Doppelbolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* Dieser Mechanismus ist auch für eine zweite Fehlerursache verantwortlich: Wenn während der Nutzung des Bolus-Rechners ein weiterer Bolus über die Pumpe abgegeben wird und sich dadurch die **Bolus-Historie verändert**, ist die Grundlage der Bolus-Berechnung falsch und der Bolus wird abgebrochen.

![Abgebrochener Bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)