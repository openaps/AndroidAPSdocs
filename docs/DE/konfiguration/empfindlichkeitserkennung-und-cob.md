# Empfindlichkeitserkennung und COB

## Autosens verstehen

Um zu verstehen, wie Autosens zu den Ergebnissen kommt, kannst du zum Reiter "OpenAPS" wechseln. Dort gibt es den Abschnitt "Autosens-Daten", der dir folgende Informationen liefert:

* **ratio**: Ergebnis der aktuell berechneten Empfindlichkeit im Vergleich zum aktuell eingestellten Profil. "ratio 1.2" bedeutet beispielsweise, dass du Faktor 1,2, also 20% mehr Insulin benötigst, "ratio 0.9", dass du Faktor 0,9, also 10% weniger Insulin benötigst als eingestellt.
* **ratioLimit**: Steht dort "Ratio limited from 1.5323325324 to 1.2", dann begrenzt AAPS die Korrekturen aus Sicherheitsgründen auf den (manuell eingestellten) Faktor von 1.2. Begrenzt Autosens nach oben (z.B. 1.5 zu 1.2), dann solltest du zuerst überlegen, ob du dich bei den eingegebenen Kohlenhydraten verschätzt hast und diese nachträglich eintragen. Andernfalls wäre ein Profilwechsel von Hand auf 150% erforderlich. Dazu auf dem Home-Screen lange auf das aktuelle Profil drücken und unter Profilwechsel 150% auswählen.
* **past Sensitivity**: Hier wird dir angezeigt, wie Autosens zu dem angezeigten Ergebnis gekommen ist. Die Historie geht stündlich so weit zurück, wie du zur Berechnung der Daten eingestellt hast.

    * `(1)` Uhrzeit (im Beispiel 1 Uhr)
    * `=` Die erkannte Sensitivität stimmt mit der eingestellten überein
    * `+` Du warst resistenter auf Insulin als eingestellt (brauchtest also mehr Insulin als gedacht)
    * `-` Du warst sensibler auf Insulin als eingestellt (brauchtest also weniger Insulin als gedacht)
    * `C` Du hattest Kohlenhydrate an Bord (COB), diese Zeit wird ausgespart
    * `u` Du hattest nicht eingegebene Kohlenhydrate an Bord (unattended meal - UAM), diese Zeit wird ausgespart
    
* **sensResult**:

    * `sensitivity normal`bedeutet, dass keine Änderungen nötig sind
    * `Excess insulin resistance detected`bedeutet, dass Autosens eine Anpassung am aktiven Profil vornimmt.
    
Daraus folgt: Wenn du fast ausschließlich `===` siehst, dann sind deine Faktoren im Profil perfekt eingestellt. Sind dagegen   viele `++++` oder `----` Abschnitte dabei, solltest du (gemeinsam mit dem Diabetologen oder der Diafee) an einer Verbesserung deiner Einstellung arbeiten. Ansonsten kann der Closed Loop auch nicht korrekt arbeiten.

Siehe auch 

* [Tipps und Tricks > Diabetes-Therapie fürs Loopen tunen](http://androidaps.readthedocs.io/en/latest/DE/tippstricks.html#diabetes-therapie-furs-loopen-tunen)
* [Autosens](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode)
* [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)

## Sensitivität Oref0
Der Oref0-Algorythmus berechnet die Insulinempflindlichkeit **auf Basis der vorangegangenen 24 Stunden**. Kohlenhydrate (falls noch nicht absorbiert) werden nach einer bestimmten Zeit, die man einstellen kann, einfach abgeschnitten.

Details in der [OpenAPS-Dokumentation](https://openaps.readthedocs.io/en/2017-05-21/docs/walkthrough/phase-4/advanced-features.html)

Oref0 - nicht absorbierte Kohlenhydrate werden nach der eingestellten Zeit abgeschnitten

![COB from oref0](../images/cob_oref0.png)

### min_5m_carbimpact
Diese Einstellung legt fest, wie schnell die eingegebenen Kohlenhydrate standardmäßig in 5 Minuten absorbiert werden. Dies beeinflusst auch, wie schnell der errechnete COB-Wert vfällt, wenn sich eine Kohlenhydrat-Absporption nicht an den BZ-Abweichungen zeigt.

Standardwert: 3mg/dL/5min (nur beim AMA! SMB-Standardwert: 8). 

### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

## Sensitivität AAPS
Der AAPS-Algorythmus basiert auf Oref0. Du kannst jedoch **selbst festlegen, auf Basis wie vieler Stunden** in der Vergangenheit die Insulinempfindlichkeit berechnet werden soll. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet.

![COB from AAPS](../images/cob_aaps.png)

Die grünen Punkte in der COB-Graphik bedeuten: Die minimale Kohlenhydrat-Resorption wurde verwendet anstatt der Berechnung anhand der Abweichungen (diviations) zwischen berechneten und erkannten Werten

### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

### Intervall für Autosens [h]
Hier kannst du angeben, wie viele vergangene Stunden für die Autosens-Berechnungen einbezogen werden sollen. Je kürzer der Zeitraum (z.B. 4 Std.), desto schneller passt AAPS die Insulinempfindlichkeit an. 

### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

## Durchschnittliche Sensitivität
Der Algorythmus "Durchschnittliche Sensitivität" berechnet die Insulinempfindlichkeit aus einem **gewichteten Durchschnitt der Abweichungen (deviations)**. Aktuellere Abweichungen haben ein höheres Gewicht. Die minimale Kohlenhydrat-Resporptionszeit wird ausgehend von der eingestellten maximalen Kohlenhydrat-Resorptionszeit (max carbs absorption) berechnet. Dieser Algorythmus kann am schnellsten auf Veränderungen in der Insulinempfindlichkeit reagieren.

Der Algorythmus rechnet so, dass nach der eingestellten Zeit `COB == 0` gesetzt wird.

### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

### Intervall für Autosens [h]
Hier kannst du angeben, wie viele vergangene Stunden für die Autosens-Berechnungen einbezogen werden sollen. Je kürzer der Zeitraum (z.B. 4 Std.), desto schneller passt AAPS die Insulinempfindlichkeit an. 

### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

### Sensitivität Oref1
Der Algorythmus "Oref1" ist die neueste Version der OpenAPS-Empfindlichkeitserkennung. Sie rechnet immer anhand der Daten der vergangenen 8 Stunden. Dieser Algorythmus erkennt nicht eingegebene Kohlenhydrate ("unattended meals" = UAM) und fängt sie ab. 

Eine Einführung zu Oref1 findest du hier: https://diyps.org/2017/04/30/introducing-oref1-and-super-microboluses-smb-and-what-it-means-compared-to-oref0-the-original-openaps-algorithm/ (englisch)

**Der neue Algorythmus Oref1 ist nur für erfahrene Nutzer geeignet!** Zu Beginn des Loopens sollten mit Oref0 / AMA Erfahrungen gesammelt werden.

### min_5m_carbimpact
Diese Einstellung legt fest, wie schnell die eingegebenen Kohlenhydrate standardmäßig in 5 Minuten absorbiert werden. Dies beeinflusst auch, wie schnell der errechnete COB-Wert vfällt, wenn sich eine Kohlenhydrat-Absporption nicht an den BZ-Abweichungen zeigt. Der Standardwert von 8 mg/dL/5min korrespondiert mit einer minimalen Kohlenhydrat-Absorptionsrate von 24g/Std bei einem CSF von 4 mg/dL/g.

Standardwert: 8mg/dL/5min (nur beim SMB! AMA-Standardwert: 3). 

### Maximale Essens-Resorptionszeit [h]
Die Einstellung legt fest, nach wie vielen Stunden die Kohlenhydrate spätestens absorbiert sein müssen. Ggf. verbliebene Kohlenhydrate werden abgeschnitten.

Standardwert: 6 Std.

### Erweiterte Einstellungen

**Max autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil erhöhen darf. Faktor 1.2 bedeutet 20% höher. Stellt Autosens eine noch niedrigere Insulinempfindlichkeit fest, werden die Anpassungen bei +20% gedeckelt. 

Standardwert: 1.2

**Min autosens ratio**

Hier stellst du ein, bis zu welchem Faktor Autosens dein aktuelles Profil absenken darf. Faktor 0.7 bedeutet 30% weniger. Stellt Autosens eine noch höhere Insulinempfindlichkeit fest, werden die Anpassungen bei -30% gedeckelt.

Standardwert: 0.7

