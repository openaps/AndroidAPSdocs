# Glossar

**AAPS** = AndroidAPS is the name of the Android app.

**AAPSClient** = die Follower-App für Betreuende. Auf einem Follower-Smartphone folgt sie dem **AAPS** eines Anwenders über dessen **Nightscout**-Seite und steuert es fern, sobald sie mit dem **AAPS**-Smartphone gekoppelt ist. Nicht zu verwechseln mit **NSClient**. Weitere Informationen → [Wiki - 'Die App AAPSClient'](../RemoteFeatures/AapsClient.md) und [Master ↔ Client-Steuerung](#client-master-control).

**Activity** (dt. Aktivität) = Insulinaktivität, gibt an, wie schnell das IOB abgebaut wird. Siehe [Wiki - 'DIA'](#Config-Builder-insulin-dia) und das verwandte **BGI**.

**AID** = Automated Insulin Delivery (dt. automatisierte Insulinabgabe). Der in Klinik und Forschung übliche Begriff für ein System, das die Insulinabgabe anhand von **CGM**-Daten automatisch anpasst. **APS** und **Closed Loop** bedeuten dasselbe → siehe auch **OS-AID**.

**APS** = Artificial Pancreas System (dt. künstliches Bauchspeicheldrüsen-System) → siehe auch **AID**.

**AMA** = Advanced Meal Assist (dt. fortgeschrittener Mahlzeitenassistent). Ein Algorithmus, der es **AAPS** ermöglicht, die Basalrate nach einem Mahlzeitenbolus zu erhöhen (aggressiver zu machen). Weitere Informationen → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (dt. Anpassungsfaktor) = wird beim **DynamicISF** verwendet und in den **Einstellungen** auf einen Wert zwischen 1 % und 300 % gesetzt. Dies wirkt als Multiplikator auf den **TDD**-Wert. Siehe [Wiki - Anpassungsfaktor bei DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = ein System, das bestimmte Funktionen eines Android-Smartphones, einschließlich **AAPS**, auf dem Display eines Autos zur Verfügung stellt. Weitere Informationen → [Wiki - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android Application Package. Eine Installationsdatei. Weitere Informationen → [Wiki - 'AAPS erstellen'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = Berechnung der Insulinempfindlichkeit über ein Zeitfenster von 24 und von 8 Stunden usw. Weitere Informationen → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = Cloud-Computing-Plattform, auf der die **Nightscout**-Web-App betrieben werden kann → siehe auch **Nightscout**.

**BAT** = Statusanzeige für eine schwache Pumpenbatterie, in der Statuszeile des **AAPS**-Startbildschirms → siehe auch **CAN** / **RES** / **SEN**.

**BG** = Blood Glucose (dt. Glukosewert).

**BGI** = Blood Glucose Impact (dt. Blutzuckerauswirkung). Der Grad, mit dem der **BG** (Glukosewert) allein auf Basis der Insulinaktivität steigen oder fallen sollte.

**BG source** (dt. BZ-Quelle) = eine AAPS-Einstellung, mit der die Quelle der Glukosewerte festgelegt wird. Siehe [Wiki - BZ-Quelle](#Config-Builder-bg-source)

**Bridge** (dt. Brücke) = ein Zusatzgerät, das aus einem **FGM** ein **CGM** macht.

**BR** = Basal Rate (dt. Basalrate). Das ist die Insulinmenge, die benötigt wird, um die Glukosewerte (**BG**) in einer bestimmten Zeitspanne stabil zu halten. → siehe auch **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. Eine Möglichkeit, um eine eigene Dexcom-App zum Auslesen der Sensordaten Dexcom G6 zu erstellen.

**CAGE** = Cannula AGE (dt. Kanülenalter). Wird auf dem **AAPS**-Startbildschirm und in Nightscout angezeigt und beruht auf den Careportal-Einträgen **Nadelwechsel/Füllen** → siehe auch **Nightscout**.

**CAN** = Statusanzeige für einen überfälligen Kanülenwechsel, in der Statuszeile des **AAPS**-Startbildschirms → siehe auch **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (dt. Kontinuierliche Glukosemessung) → siehe auch **FGM**.

**Closed Loop** = ein geschlossener Regelkreis, der die Basalabgabe des Nutzers automatisch anhand eines Algorithmus von **AAPS** und der Einstellungen im **Profil** des Nutzers anpasst, ohne dass der Nutzer zustimmen muss. Weitere Informationen → [Wiki - 'Closed Loop'](#KeyAapsFeatures-ClosedLoop), siehe auch **HCL** / **FCL**.

**COB** = Carbs On Board (dt. aktive Kohlenhydrate). Das ist die Kohlenhydratmenge, die derzeit zur Verdauung verfügbar ist → siehe auch IOB.

**CSF** = Carbs Sensitivity Factor (dt. Faktor der Kohlenhydrat-Empfindlichkeit). D.h. wie viel steigt der Glukosewert (**BG**) pro 1 Gramm aufgenommener Kohlenhydrate.

**DIA** = Duration of Insulin Action (dt. Insulinwirkdauer). Weitere Informationen → [Wiki - 'DIA'](#Config-Builder-insulin-dia) und siehe auch → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Sommerzeit (Daylight Saving Time). Siehe [Wiki - Zeitzonenwechsel und Sommerzeit](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (oder DynISF)** = eine Funktion in **AAPS**, die den Korrekturfaktor (**ISF**) abhängig von der **TDD** und dem **BZ** des Anwenders dynamisch anpasst.

**eCarbs** = extended Carbs (dt. verzögerte Kohlenhydrate). Kohlenhydrate, die über mehrere Stunden verteilt werden (z. B. für Fett und Eiweiß), damit **AAPS** das Insulin wie bei einem verzögerten Bolus verteilen kann. Weitere Informationen → [Wiki - 'Verzögerte Kohlenhydrate'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (dt. vollständig geschlossener Loop). Ein Loop, der zu den Mahlzeiten keine Eingaben des Anwenders braucht: kein Zählen von Kohlenhydraten und kein Mahlzeitenbolus. Weitere Informationen → [Wiki - 'Full Closed Loop'](../AdvancedOptions/FullClosedLoop.md), siehe auch **HCL**.

**FGM** = Flash Glucose Monitor wie das Freestyle Libre von Abbott. Weitere Informationen → [Wiki - 'BZ-Quelle'](#Config-Builder-bg-source), siehe auch 'CGM'.

**git** = ein Werkzeug, mit dem der Quellcode von **AAPS** gespeichert und heruntergeladen wird.

**GitHub** = ein webbasierter Dienst, der den Quellcode von **AAPS** und seine Versionsverwaltung bereitstellt (Änderungen an Dateien nachverfolgen und die Arbeit daran abstimmen, vor allem im Team) und die App auch erstellen kann. Auch für Updates der **APK** wird er gebraucht. Weitere Informationen → [Wiki - 'APK aktualisieren'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = eine App, die Werte vom Freestyle Libre ausliest.

**HCL (oder Hybrid Closed Loop)** = ein Loop, der die Insulinabgabe zwischen den Mahlzeiten automatisiert, bei dem der Anwender für Mahlzeiten aber weiterhin einen Bolus abgeben muss. Fast jedes System im Alltag, auch **AAPS**, ist ein Hybrid Closed Loop → siehe auch **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (dt. KH-Faktor). Üblicherweise wird er in g/IE angegeben, obwohl die Abkürzung das Umgekehrte nahelegt.

**IOB** = Insulin On Board (dt. Insulin im Körper). Aktives (wirkendes) Insulin im Körper. Siehe [Wiki - Insulin an Bord](#aaps-screens-iob)

**ISF** = Insulin Sensitivitäts-Faktor ("Korrektur-Faktor"). Die durch eine Insulineinheit zu erwartende Glukosewert-Senkung. Die Einheit ist entweder mg/dl/IE oder mmol/l/IE. Ohne Umrechnung sind diese nicht gleichwertig!

**Keystore (oder JKS)** = ein Java Key Store, also eine verschlüsselte Datei, in der Deine persönlichen Entwicklerzertifikate und Schlüssel gespeichert sind, die zum Erstellen (und erneuten Erstellen) von **AAPS** nötig sind.

**LGS** = Low Glucose Suspend (dt. Unterbrechung bei niedrigem BZ). Siehe [Wiki - Unterbrechung bei niedrigem BZ](#KeyAapsFeatures-LGS)

**LineageOS** = Freies Open-Source-Betriebssystem für Smartphones usw. Wenn Du eine Accu-Chek Combo nutzt, siehe [Wiki - Combo-Pumpe](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS**-Protokolldateien (Logdateien), die alle Benutzeraktionen enthalten (nützlich für Fehlerbehebung und Debugging). Weitere Informationen → [Wiki - 'Logdateien'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximum total IOB (dt. maximales Gesamt-IOB). Dies ist eine Sicherheitsfunktion und verhindert, dass **AAPS** Insulin über die Benutzereinstellungen hinaus abgibt. Weitere Informationen → [Wiki - 'Maximales Gesamt-IOB, das OpenAPS nicht überschreiten kann'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = Sicherheitsmerkmal, das eine Berechnung des Standardkohlenhydratabbaus (Verstoffwechselung) darstellt. Dieser Wert wird genutzt, wenn die Kohlenhydrat-Aufnahme nicht anhand der Reaktionen des Blutes bestimmt werden kann. Weitere Informationen → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = Open-Source-Projekt zur Anzeige und Auswertung der CGM-Daten. Die zentrale Datensammelstelle für die **AAPS**-Daten des Anwenders. Sie kann Berichte über die bisherigen **Nightscout**-Daten erstellen, zum Beispiel zum erwarteten HbA1c oder zur Zeit im Zielbereich, oder mit dem Perzentil-Diagramm nach Mustern in den Daten suchen.

**Nightscout** → siehe auch **Nightscout Reporter**. Dies ist besonders für Eltern, die das Diabetesmanagement ihres Kindes begleiten, hilfreich.

**Nightscout Reporter Tool** = ein Tool, das PDF-Berichte aus den Daten der Nightscout-Web-App generiert. Siehe 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = das **AAPS**-Modul, das Daten mit **Nightscout** synchronisiert (**Konfiguration** → **Kommunikation**). Es ist nicht dasselbe wie **AAPSClient**, die Follower-App. Weitere Informationen → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, das Vorgängerprojekt und die Grundlage von AAPS.

**Open Loop System** = eine **AAPS** Funktion, die Anpassungen empfiehlt, die durch Dich manuell in **AAPS** eingegeben werden muss. Weitere Informationen → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = Empfindlichkeitserkennung und "Referenzdesign Implementierungsversion 0/1". Es ist der zentrale Algorithmus von OpenAPS. Weitere Informationen → [Wiki - 'Erkennung der Insulinempfindlichkeit'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (dt. automatisierte Insulinabgabe mit Open-Source-Software). Ein **AID**-System aus Open-Source-Software wie **AAPS**, **OpenAPS**, Loop oder Trio. Diese Systeme sind von Behörden (FDA, NHS usw.) nicht offiziell zugelassen → siehe auch **AID**.

**Peak time** (dt. Wirkmaximum) = Zeitpunkt der maximalen Insulinwirkung. Weitere Informationen → [Wiki - 'Insulinwirkdauer (DIA) und Wirkmaximum'](#Config-Builder-insulin-dia).

**PH** = Pump History (dt. Pumpenhistorie). Sie ist im Behandlungsverlauf von **AAPS** zu finden: Öffne oben links auf dem Startbildschirm das **Menü** (☰) und wähle **Behandlungen**.

**Predictions** (dt. Vorhersage) = Vorhersage des zukünftigen Glukoseverlaufs (**BG**) auf Basis verschiedener Berechnungen. Weitere Informationen → [Wiki - 'Vorhersagelinien'](#aaps-screens-prediction-lines).

**Profile** (dt. Profil) = Alle grundlegenden Einstellungen zur Behandlung Deines Diabetes (Basalrate, **DIA**, **IC**, **ISF**, **BZ**-Ziel). **AAPS** verwendet nur Profile, die in **AAPS** angelegt wurden (**Bearbeiten** → **Profil**), **Nightscout**-**Profile** können aber nach **AAPS** kopiert (synchronisiert) werden. Weitere Informationen → [Wiki - 'Dein AAPS-Profil'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (dt. Profilwechsel) = (zeitlich begrenzter) Wechsel vom aktiven **Profil** auf ein anderes in **AAPS** gespeichertes **Profil**.

**Profile Percentage** (dt. Prozentsatz des Profils) = eine (zeitlich begrenzte) prozentuale Erhöhung oder Verringerung des **Profils** für einen gewählten Zeitraum.

**RES** = Statusanzeige für einen überfälligen Reservoirwechsel, in der Statuszeile des **AAPS**-Startbildschirms → siehe auch **BAT** / **CAN** / **SEN**.

**RileyLink** = Open-Source-Hardware, die Bluetooth Low Energy (BLE) in Funksignale mit 916 MHz (für ältere Medtronic-Pumpen) oder 433 MHz (für Omnipod Eros) umsetzt.

**SAGE** = sensor age (dt. Sensoralter). Wird auf dem Startbildschirm von **AAPS** und in **Nightscout** angezeigt und beruht auf den Careportal-Einträgen **Sensor gesetzt** → siehe auch **Nightscout**.

**SEN** = Statusanzeige für einen überfälligen Sensorwechsel, in der Statuszeile des **AAPS**-Startbildschirms → siehe auch **BAT** / **CAN** / **RES**.

**Sensitivity detection** (dt. Erkennung der Insulinempfindlichkeit) = Berechnung der Insulinempfindlichkeit als Folge von Bewegung, Hormonen usw. siehe auch → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (dt. Sensorrauschen) = ein Begriff, der verwendet wird, um die instabilen **CGM**-Werte zu beschreiben, die zu "springenden" **Glukosewerten** führen. Weitere Informationen → [Wiki - 'Glättung der Glukosewerte'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Eine **AAPS**-Funktion für eine schnellere Insulinlieferung, um **Glukosespiegel** anzupassen. Weitere Informationen → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) und siehe auch **UAM**.

**Super Bolus** = Verschiebung (vorziehen) von Basal- zu Bolusinsulin um den **Glukosewert** schneller senken zu können.

**TBB** Total Base Basal (dt.: Gesamtbasalmenge) = Summe aller Basalraten innerhalb von 24 Stunden → siehe auch **TBR** / **TDD**.

**TBR** = temporäre Basalrate → siehe auch **TBB** / **TDD**.

**TDD** = Total Daily Dose (dt. Tagesgesamtdosis: Gesamtbolus + Gesamtbasal pro Tag) → siehe auch **TBB** / **TBR**.

**TT** = temporäres Ziel: vorübergehende Erhöhung/Senkung des **BZ**-Zielwerts (bzw. -Zielbereichs) des Nutzers, z. B. zum Essen oder für Sport. Weitere Informationen → [Wiki - 'Temporäre Ziele'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = Unannounced Meals (dt. Unangekündigte Mahlzeiten). Erkennen signifikanter **Glukosewert**-Anstiege aufgrund von Mahlzeiten, Adrenalin oder anderen Einflüssen und der Versuch, diese auszugleichen. Weitere Informationen → [Wiki - 'UAM'](#enable-uam) und siehe auch **SMB**.

**Virtuelle Pumpe** = eine Funktion von **AAPS**, mit der Nutzer die Funktionen von **AAPS** ausprobieren können oder mit der Menschen mit Diabetes, für deren Pumpe es keinen **AAPS**-Treiber gibt, **AAPS** als Open Loop nutzen können → siehe auch **Open Loop**.

**Wallpaper** (dt. Hintergrundbild) = **AAPS**-Hintergrundbild (siehe Seite zu Smartphones).

**xDrip** = Open-Source-Software zum Auslesen von **CGM**-Systemen.

**Zero-temp** = temporäre Basalrate mit 0 % (keine Abgabe von Basalinsulin).

→ vgl. hierzu auch die [OpenAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)