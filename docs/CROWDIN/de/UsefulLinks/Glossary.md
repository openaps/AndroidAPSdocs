# Glossar

**AAPS** = AndroidAPS is the name of the Android app.

**AAPSClient** (oder **NSClient**) = Eine Möglichkeit **AAPS** über das Follower-Smartphone und über die Verbindung zur zugehörigen **Nightscout-Seite** remote zu folgen. Weitere Informationen → Wiki - 'NS Client'. Lernprogramm zu Zielen (Objectives) innerhalb von **AAPS** bietet eine Schritt für Schritt Anleitung. Weitere Informationen → Wiki - 'Ziele (Objectives)'.

**APS** = Artificial Pancreas System (dt.: künstliche Bauchspeicheldrüse).

**AMA** = Advanced Meal Assist (dt. fortgeschrittener Mahlzeitenassistent). Ein Algorithmus, der es **AAPS** ermöglicht, die Basalrate nach einem Mahlzeitenbolus zu erhöhen (aggressiver zu machen). Weitere Informationen → Wiki - 'Erweiterter Mahlzeit-Assistent (AMA)'.

**Anpassungsfaktor** = wird beim **dynamschen ISF** genutzt. Er ist ein Wert, der zwischen 1% und 300% liegen kann und in den **Einstellungen** gesetzt wird. Dies wirkt als Multiplikator auf den **TDD**-Wert.

- die Erhöhung des **Anpassungsfaktors** über 100% macht den **dynamischen ISF** aggressiver: die **ISF**-Werte werden kleiner (d. h. es wird mehr Insulin benötigt, um den **Glukosespiegel** zu senken)
- Das Absenken des **Anpassungsfaktors** Wert unter 100% macht den **dynamischen ISF** weniger aggressiv: die **ISF**-Werte werden größer (d. h. es wird weniger Insulin benötigt um den **Glukosespiegel** zu senken).

**Android Auto** = ein System, das bestimmte Funktionen eines Android-Smartphones, einschließlich **AAPS**, auf dem Display eines Autos zur Verfügung stellt. Weitere Informationen → Wiki - 'Android Auto'.

**APK** = Android Application Package. Eine Installationsdatei. Weitere Informationen → Wiki - 'App erstellen'.

**Autosens** = Berechnung der Insulinempfindlichkeit für Zeiträume von 24 bis 8 Stunden etc. Weitere Informationen → DIABETTECH - **Autosens**.

**Azure** Cloud Computing-Plattform zum Hosten der **Nightscout** Web-App Azure → siehe auch **Nightscout**.

**BAT** = Statusanzeige 'geringer Batteriestand' auf dem Startbildschirm von **AAPS** **KONFIGURATION**, AAPS Bildschirme → siehe auch **CAN** / **RES** / **SEN**.

**BG** = blood glucose.

**BGI** = Blood Glucose Impact (dt. Blutzuckerauswirkung). Der Grad, mit dem der **BG** (Glukosewert) allein auf Basis der Insulinaktivität steigen oder fallen sollte.

**BG Source** (dt. BZ-Quelle) = Das System, das den Glukosewert **BG** zur Verfügung stellt. Das können **CGM**- oder **FGM**-Werte sein, die über eine Systemintegrationssoftware wie **BYODA**, **xDrip+** etc. ankommen. Weitere Informationen → Wiki - 'BZ-Quelle'

**Bridge** (dt. Brücke) = ein Zusatzgerät, das aus einem **FGM** ein **CGM** macht.

**BR** = Basal Rate (dt. Basalrate). Das ist die Insulinmenge, die benötigt wird, um die Glukosewerte (**BG**) in einer bestimmten Zeitspanne stabil zu halten. → siehe auch **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. Eine Möglichkeit, um eine eigene Dexcom-App zum Auslesen der Sensordaten Dexcom G6 zu erstellen.

**CAGE** = Cannula AGE (dt. Kanülenalter). Wird auf der **AAPS**-Startseite und auf der Nightscout-Seite angezeigt, und zeigt die durch Dich im Register / Menü AKTIONEN eingegebenen Informationen → siehe auch **Nightscout**.

**CAN** = Statusanzeige 'überfälliger Kanülenwechsel' auf dem **AAPS**-Startbildschirm **KONFIGURATION** → siehe auch **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (dt. Kontinuierliche Glukosemessung) → siehe auch **FGM**.

**Closed Loop** = Ein Closed-Loop-System ist ein Diabetesmanagementsystem, das die Basalinsulinabgabe basierend auf einem **AAPS**-Algorithmus und Deinen **Profil**einstellungen automatisch (d. h. ohne dass Du eingreifen musst) an Deinen Glukosewert anpasst. Weitere Informationen → Wiki - 'Closed Loop'.

**COB** = Carbs On Board (dt. aktive Kohlenhydrate). Das ist die Kohlenhydratmenge, die derzeit zur Verdauung verfügbar ist → siehe auch IOB.

**CSF** = Carbs Sensitivity Factor (dt. Faktor der Kohlenhydrat-Empfindlichkeit). D.h. wie viel steigt der Glukosewert (**BG**) pro 1 Gramm aufgenommener Kohlenhydrate.

**DIA** = Duration of Insulin Action (dt. Insulinwirkdauer). Further info → Wiki - 'insulin types' and see also → DIABETTECH - 'DIA'.

**DST** = Daylight Savings Time (dt. Sommerzeit (MESZ)) → Wiki DST.

**Dynamic ISF (oder DynISF)** = eine Funktion innerhalb von **AAPS**, die den Insulinempfindlichkeits-Faktor (bzw. Korrekturfaktor) (**ISF**) dynamisch anpasst und dabei berücksichtigt:

- Den Tages-Gesamtinsulinbedarf (**TDD**); und
- aktuelle und prognostizierte **Glukosewerte**.

**eCarbs** = extended Carbs (dt. verzögerte Kohlenhydrate). Kohlenhydrate werden über mehrere Stunden aufgeteilt, um Protein zu berücksichtigen und **AAPS** zu ermöglichen verlängerte Bolusdosen abzugeben. Weitere Informationen → Wiki - 'Verzögerte Kohlenhydrate / eCarbs', 'eCarbs nutzen'.

**FGM** = Flash Glucose Monitor von Freestyle Libre hergestellt. Weitere Informationen → Wiki - 'BZ-Quelle' und vgl. auch 'CGM'.

**git** = ein Werkzeug, das verwendet wird, um den **AAPS**-Quellcode zu speichern und herunterzuladen.

**GitHub** = ein webbasierter Hosting-Service und Build-Prozess für die **AAPS'**-Software. Ein Versionierungssystem, um Änderungen an Computerdateien nachhalten zu können und die Arbeit an diesen Dateien - insbesondere für Teams - koordinieren zu können. Es ist auch für **APK**-Updates erforderlich. Weitere Informationen → Wiki - 'Update auf eine neue Version'.

**Glimp** = Eine App mit der Werte vom Freestyle Libre empfangen werden können Glimp.

**IC (oder I:C)** = Insulin to Carb Ratio (dt. Mahlzeitenfaktor). (d. h. wie viele Gramm Kohlenhydrate können mit einer Einheit Insulin abgedeckt werden?).

**IOB** = Insulin On Board (dt. Insulin im Körper). Aktives (wirkendes) Insulin im Körper.

**ISF** = Insulin Sensitivitäts-Faktor ("Korrektur-Faktor"). Die durch eine Insulineinheit zu erwartende Glukosewert-Senkung.

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuid).

**LGS** = Low Glucose Suspend (dt. "Abschaltung vor Niedrig"). Bei fallendenden Glukosewerten (**BG**) wird **AAPS** die Basalrate reduzieren. Falls die Glukosewerte (**BG**) steigen, wird die Basalrate nur dann erhöht, wenn das **IOB** negativ ist (resultierend aus einem vorangegangenen **LGS**). In allen anderen Fällen bleibt die Basalraten so wie sie im ausgewählten **Profil** hinterlegt ist und bleibt damit unverändert. Wenn Du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die Du nicht durch Erhöhung der Basalrate korrigieren kannst. → siehe auch Ziel 6.

**LineageOS** = Freies Open-Source-Betriebssystem für Smartphones usw. (wenn Du eine Accu-Chek Combo nutzt, siehe Wiki - Combo Pumpe).

**Log files** = **AAPS**-Protokolldateien (Logdateien), die alle Benutzeraktionen enthalten (nützlich für Fehlerbehebung und Debugging). Weitere Informationen → Wiki - 'Logdateien'.

**maxIOB** = maximum total IOB (dt. maximales Gesamt-IOB). Dies ist eine Sicherheitsfunktion und verhindert, dass **AAPS** Insulin über die Benutzereinstellungen hinaus abgibt. Weitere Informationen → Wiki - 'Super Micro Bolus (SMB)'.

**min_5m_carbimpact** = Sicherheitsmerkmal, das eine Berechnung des Standardkohlenhydratabbaus (Verstoffwechselung) darstellt. Dieser Wert wird genutzt, wenn die Kohlenhydrat-Aufnahme nicht anhand der Reaktionen des Blutes bestimmt werden kann. Dies ist eine Sicherheitsfunktion. Further info → Wiki - 'config builder'.

**Nightscout** Open Source Projekt zur Anzeige und Auswertung der CGM-Daten. Der zentrale Datenhub für die **AAPS**-Benutzerdaten. Es kann mit Hilfe Deiner historischen **NIghtscout**-Daten Berichte (erwartete HbA1c, Zeit im Zielbereich) erstellen und anzuzeigen oder nach Mustern in den Daten (z. B. durch das Perzentil-Diagramm usw.) suchen.

**Nightscout** → siehe auch **Nightscout Reporter**. Dies ist besonders für Eltern, die das Diabetesmanagement ihres Kindes begleiten, hilfreich.

**Nightscout Reporter Tool** = ein Tool, das PDF-Berichte aus den Daten der Nightscout-Web-App generiert. Siehe 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** ( oder **‘AAPSClient’)** = siehe **AAPSClient**.

**OpenAPS** = Open Artificial Pancreas System (dt. offenes System einer künstlichen Bauchspeicheldrüse).

**Open Loop System** = eine **AAPS** Funktion, die Anpassungen empfiehlt, die durch Dich manuell in **AAPS** eingegeben werden muss. Further info → Wiki - 'config builder'.

**Oref0 / Oref1** = Empfindlichkeitserkennung und "Referenzdesign Implementierungsversion 0/1". Es ist der Schlüsselalgorithmus hinter OpenAPS Wiki - Empfindlichkeitserkennung.

**Peak time** (dt. Wirkmaximum) = Zeitpunkt der maximalen Insulinwirkung. Weitere Informationen → Wiki - 'Konfigurations-Generator'.

**PH** = Pump History (dt. Pumpenhistorie). Diese kann in **AAPS** unter 'Behandlungen' aufgerufen werden. Du findest es im 3-Punkt-Menü rechts oben auf dem **AAPS**-Startbildschirm.

**Predictions** (dt. Vorhersage) = Vorhersage des zukünftigen Glukoseverlaufs (**BG**) auf Basis verschiedener Berechnungen. Weitere Informationen → Wiki - 'Vorhersage-Kurven' bzw. 'Prognoselinien'.

**Profile** (dt. Profil) = Alle grundlegenden Einstellungen zur Behandlung Deines Diabetes (Basalrate, **DIA**, **IC**, **ISF**, **BZ**-Ziel). AAPSv3 unterstützt nur lokale Profile, die innerhalb von **AAPS** erstellt wurden, aber **Nightscout**-**Profile** können nach **AAPS** kopiert (synchronisiert) werden. Weitere Informationen → Wiki - 'Profile'.

**Profile switch** (dt. Profilwechsel) = (temporärer) Wechsel von Deinem aktiven **Profil** auf ein anderes in **AAPS** gespeichertes **Profil**.

**Profile Percentage** (dt. prozentuale Profilanpassung) = Eine (vorübergehende) prozentuale Änderung (Erhöhung oder Verringerung) des Profils für einen bestimmten Zeitraum.

**RES** = Statusanzeige 'überfälliger Reservoirwechsel' auf dem **AAPS**-Startbildschirm **KONFIGURATION** → siehe auch **BAT** / **CAN** / <0>SEN</0>.

**RileyLink** = Open-Source-Hardware zur Umwandlung von Bluetooth Low Energy (BLE) in 916 MHz Funksignale (wird für ältere Medtronic-Pumpen verwendet) RileyLink.

**SAGE** = sensor age (dt. Sensoralter). Dies wird auf dem **AAPS**-Startbildschirm und in **Nightscout** angezeigt, wenn die Informationen im Register Aktionen/Menu eingetragen wurden → siehe auch **Nightscout**.

**SEN** = Statusanzeige 'Sensorwechsel' auf dem Startbildschirm KONFIGURATION, AAPS Bildschirme → siehe auch **BAT** / **CAN** / **RES**.

**Sensivity detection** (dt.: Sensitivitätserkennung) = Berechnung der geänderten Insulinempfindlichkeit als Folge von Bewegung, Hormonen etc. siehe auch → DIABETTECH - 'Autosens'.

**Sensor noise** (dt. Sensorrauschen) = ein Begriff, der verwendet wird, um die instabilen **CGM**-Werte zu beschreiben, die zu "springenden" **Glukosewerten** führen. Weitere Informationen → Wiki - 'Sensorrauschen'.

**SMB** = Super Micro Bolus. Eine **AAPS**-Funktion für eine schnellere Insulinlieferung, um **Glukosespiegel** anzupassen. Further info → Wiki - '**SMB**' and see also **UAM**.

**Super Bolus** = Verschiebung (vorziehen) von Basal- zu Bolusinsulin um den **Glukosewert** schneller senken zu können.

**TBB** Total Base Basal (dt.: Gesamtbasalmenge) = Summe aller Basalraten innerhalb von 24 Stunden → siehe auch **TBR** / **TDD**.

**TBR** = Temporary Basal Rate (dt.: temporäre Basalrate) → siehe auch **TBB** / **TDD**.

**TDD** = Total Daily Dose (dt.: tägliche Gesamtinsulinmenge) - Gesamtbolus + Gesamtbasal pro Tag) → siehe auch **TBB** / **TBR**.

**TT** = Temporary Target (dt. temporäres Ziel): Vorübergehendes Anheben oder Absenken des **Glukosezielwertes** bzw. -bereichs z.B. vor Mahlzeiten oder sportlichen Aktivitäten. Weitere Informationen → Wiki - 'Temporäre Ziele'.

**UAM** = Unannounced Meals (dt. Unangekündigte Mahlzeiten). Erkennen signifikanter **Glukosewert**-Anstiege aufgrund von Mahlzeiten, Adrenalin oder anderen Einflüssen und der Versuch, diese auszugleichen. Weitere Informationen → Wiki - 'UAM' und auch **SMB**.

**Virtual pump** (dt. virtuelle Pumpe) = Eine **AAPS**-Funktion, die es ermöglicht, **AAPS**-Funktionen auszuprobieren oder den Menschen mit Diabetes, die für das Loopen kein durch **AAPS** unterstütztes Pumpenmodell nutzen, die Funktionen zu nutzen → siehe auch **Open Loop**.

**Wallpaper** (dt. Hintergundbild) = **AAPS** Hintergrundbild (siehe 'Handy Hintergrundbild').

**xDrip+** = Open-Source-Software zum Auslesen von **CGM**-Systemen xDrip+.

**Zero-temp** temporäre Basalrate mit 0 % (keine Basalinsulin-Lieferung).

→ vgl. hierzu auch die [OpenAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)