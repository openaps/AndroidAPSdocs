Einstellungen
***********************************************************
* Öffne die Einstellungen durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm.

  .. image:: ../images/Pref2020_Open.png
    :alt: Einstellungen öffnen

* Du kannst direkt zu den Einstellungen für einen bestimmten Tab (z.B. Pumpen-Tab) springen, indem Du diesen Tab öffnest und auf Plugin-Einstellungen klickst.

  .. image:: ../images/Pref2020_OpenPlugin.png
    :alt: Plugin-Einstellungen öffnen
    
* Untermenüs können geöffnet werden, indem Du auf das Dreieck unter dem Untermenü-Titel klicken.

  .. image:: ../images/Pref2020_Submenu.png
    :alt: Untermenü öffnen

Allgemein
===========================================================

**Einheiten**

* Stelle die Einheiten auf mmol/l oder mg/dl je nach deiner Vorliebe ein.

**Sprache**

* Neue Option, um die Standardsprache des Smartphones zu verwenden (empfohlen). 
* Falls Du AAPS in einer anderen Sprache als der Standardsprache deines Smartphones nutzen möchtest, kannst Du zwischen vielen verschiedenen Sprachen wählen.
* Falls sich die Systemsprache deines Smartphones und die ausgewählte Sprache für AAPS unterscheiden, kann dies manchmal zu einem Sprachmix führen. Dies ist auf ein Android-Problem zurückzuführen, sodass das Überschreiben der Standardsprache einer App manchmal nicht korrekt funktioniert.

  .. image:: ../images/Pref2020_General.png
    :alt: Einstellungen > Allgemein

**Name des Patienten**

Kann verwendet werden, wenn Du zwischen verschiedenen Installationen unterscheiden musst (z.B. zwei Kinder mit Typ 1 in Deiner Familie).

Schutz
-----------------------------------------------------------
Master-Passwort
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Die `exportierten Einstellungen <../Usage/ExportImportSettings.html>`_ sind ab Version 2.7 verschlüsselt.

   ** Biometrischer Schutz funktioniert nicht auf OnePlus-Smartphones. Dies ist ein bekanntes Problem von OnePlus.**

* Öffne die Einstellungen (Drei-Punkte-Menü oben rechts)
* Klicke das Dreieck neben "Allgemein".
* Klicke auf "Master-Passwort".
* Gib ein Passwort ein, bestätige es und klicke auf OK.

  .. image:: ../images/MasterPW.png
    :alt: Master-Password festlegen
  
Schutz der Einstellungen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Schütze deine Einstellungen mit einem Passwort oder einer biometrischen Authentifizierung (d. h. ` AAPS-Nutzung durch Kinder <../Children/Children.html> ` _).
* Das 'Benutzerdefinierte Passwort' sollte verwendet werden, wenn Du das Master-Passwort nur für die Sicherung der `exportierten Einstellungen <../Usage/ExportImportSettings.html>`_ verwenden möchtest.
* Wenn du ein 'Benutzerdefiniertes Kennwort' verwendest, klicke auf Zeile 'Passwort für Einstellungen', um das Kennwort wie oben beschrieben festzulegen <../Configuration/Preferences.html#master-passwort> ` _.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Schutz

Schutz der App
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Falls die App geschützt ist, musst du das Kennwort eingeben oder die biometrische Authentifizierung des Smartphones verwenden, um AAPS zu öffnen.
* Die App wird sofort geschlossen, wenn ein falsches Kennwort eingegeben wurde. AAPS wird aber trotzdem im Hintergrund weiter ausgeführt, wenn AAPS zuvor erfolgreich geöffnet worden war.

Bolus-Schutz
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus Schutz könnte nützlich sein, wenn AAPS von einem kleinen Kind verwendet wird und Du `SMS für Boli <../Children/SMS-Commands.html>`_ verwendest.
* Im Beispiel unten siehst du die Aufforderung zur biometrischen Freigabe. Falls die biometrische Authentifizierung nicht funktioniert, klicke in den Bereich oberhalb der weißen Eingabeaufforderung und gib das Master-Passwort ein.

  .. image:: ../images/Pref2020_PW.png
    :alt: Freigabe mit biometrischer Authentifizierung

Erscheinungsbild
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Du kannst zwischen drei Darstellungsarten wählen:

  .. image:: ../images/Pref2020_Skin.png
    :alt: Darstellungsart wählen

* Der Unterschied hängt von der Ausrichtung des Smartphones ab.

Hochformat
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* **Ursprüngliches Erscheinungsbild** und **Schaltflächen werden immer am unteren Rand des Bildschirms angezeigt** sind identisch.
* ** Großer Bildschirm * * zeigt alle Diagramme größer an.

Querformat
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Bei Verwendung von **Ursprüngliches Erscheinungsbild** und **Großer Bildschirm**, musst Du nach unten scrollen, um Schaltflächen am unteren Rand des Bildschirms zu sehen
* ** Großer Bildschirm * * zeigt alle Diagramme größer an.

  .. image:: ../images/Screenshots_Skins.png
    :alt: Darstellungsart abhängig von der Ausrichtung des Smartphones

Übersicht
===========================================================

* In Übersicht kannst du Einstellungen für den Homescreen festlegen.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Einstellungen > Überblick

Bildschirm aktiv lassen
-----------------------------------------------------------
* Nützlich, wenn du eine Präsentation gibst. 
* Dies wird ziemlich viel Energie verbrauchen, daher ist es ratsam, Dein Telefon an ein Ladekabel anzuschließen.

Schaltflächen
-----------------------------------------------------------
* Lege fest welche Schaltflächen am unteren Rand des Homescreens sichtbar sind.
* Mit den Erhöhungszahlen kannst du die Schrittweiten definieren, die in den KH- und Insulin-Dialogen benutzt werden und so die dortigen Eingaben vereinfachen.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Einstellungen > Buttons

Quick Wizard
-----------------------------------------------------------
* Bei häufigen Snacks oder Mahlzeiten kannst du über QuickWizard-Schaltflächen einfach die Menge der Kohlenhydrate eingeben und die Berechnungsgrundlagen festlegen.
* In der Konfiguration legst du fest, in welchem Zeitraum die Schaltfläche auf dem Homescreen zu sehen sein soll. Es ist nur eine Schaltfläche pro Zeitraum möglich.
* Wenn du auf den QuickWizardf-Button klickst, berechnet AAPS für diese Kohlenhydrate einen Bolus basierend auf Deinen aktuellen Faktoren (unter Berücksichtigung des Blutzuckerwertes oder des Insulins an Bord, wenn eingerichtet) und schlägt diesen vor. 
* Der Vorschlag muss bestätigt werden, bevor Insulin abgegeben wird.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Einstellungen > Quick Wizard Button
  
Vordefinierte temporäre Ziele
-----------------------------------------------------------
* `Temp Targets (TT) <../Usage/temptarget.html#temp-targets>`_ erlauben es dir, dein Blutzuckerziel für einen bestimmten Zeitraum zu ändern.
* Mit dem Setzen von Standard-TT kannst Du Dein Ziel für Aktivität, Bald essen, usw. einfach verändern.
* Drücke lange auf deinen Zielwert in der oberen rechten Ecke auf dem Home-Bildschirm oder verwende die Shortcuts im orange "Kohlenhydrate" (Carbs)-Button am unteren Rand.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Einstellungen > Vordefinierte temporäre Ziele
  
Füll-/Vorfüll-Standardmengen
-----------------------------------------------------------
* Wenn Du Katheter oder Kanüle über AAPS füllen möchtest, kannst Du dies über den Tab `Aktionen <../Usage/CPbefore26.html#pumpe>` _ tun.
* Voreinstellungen für Füllmengen können in diesem Dialog definiert werden.

Zielbereich für die Grafikanzeige
-----------------------------------------------------------
* Lege fest, welcher Bereich der Grafik auf dem Startbildschirm der Zielbereich sein und grün hinterlegt werden soll.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Einstellungen > Zielbereich für die Grafikanzeige

Kurze Tab-Überschriften
-----------------------------------------------------------
* Gleichzeitige Anzeige von mehr Tabs auf dem Bildschirm. 
* Zum Beispiel wird die 'OpenAPS AMA' -Registerkarte zu 'OAPS', 'Objectives (Ziele)' wird zu 'ZIEL' usw.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Einstellungen > Tabs

Möglichkeit zur Erfassung von Notizen in Behandlungsdialogen
-----------------------------------------------------------
* Gibt dir die Möglichkeit, kurze Textnotizen zu Deinen Behandlungen hinzuzufügen (z.B. im Bolus-Rechner, den Buttons für Insulin und Kohlenhydrate etc.) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Einstellungen > Notizen im Behandlungsdialog
  
Statusanzeige
-----------------------------------------------------------
* Status Anzeigen geben eine optische Warnung für 
      
   * Kanülenalter
   * Insulinalter (Tage Reservoirverwendung)
   * Reservoirstand (Einheiten)
   * Sensoralter
   * Batteriealter
   Batterieladezustand (%)

* Bei Überschreiten der Warnschwelle werden die Werte gelb angezeigt.
* Bei Überschreiten der kritischen Warnschwelle werden die Werte rot angezeigt.
* In Versionen vor AAPS 2.7 mussten Einstellungen für Statusanzeigen in Nightscout-Einstellungen vorgenommen werden.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Einstellungen > Status Lights

Erweiterte Einstellungen (Übersicht)
-----------------------------------------------------------
Abgabe nur eines Teils der vom Bolus-Rechner ermittelten Insulinmenge
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Systemweite Einstellung, dass nur ein Teil des im Bolus Kalkulator berechneten Insulins abgegeben wird. 
* Nur der eingestellte prozentuale Anteil (muss zwischen 10 und 100 liegen) wird abgegeben. 
* Der Prozentsatz wird auch im Bolus Kalkulator angezeigt.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Option zur Aktivierung des Superbolus im Bolus-Rechner.
* ` Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>` _ ist ein Konzept, um in den nächsten zwei Stunden etwas Insulin aus der Basalrate "vorzuziehen", um Spitzen zu verhindern.

Sicherheitseinstellungen der Behandlungen
===========================================================
Alter des Patienten
-----------------------------------------------------------
* Sicherheitsgrenzwerte werden auf der Grundlage des Alters festgelegt, das Du in dieser Einstellung auswählst. 
* Wenn du an diese festen Grenzen (z.B. Maximal-Bolus) kommst, ist es an der Zeit, einen Schritt weiter zu gehen. 
* Es ist keine gute Idee, ein höheres Alter anzugeben als das tatsächliche, weil es zu einer Überdosierung führen kann, wenn ein falscher Wert im Insulin-Dialog eingegeben wird (z. B. beim Weglassen des Kommas). 
* Wenn du die Werte für diese fest codierten Sicherheitsgrenzen wissen möchtest, scrolle auf der Seite <a href="../Usage/Open-APS-features.md"</a> zu der Algorithmenfunktion, die Du verwendest.

Maximal erlaubter Bolus [U]
-----------------------------------------------------------
* Definiert die maximale Menge an Bolusinsulin, die AAPS auf einmal liefern darf. 
* Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. 
* Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst. 
* Diese Einschränkung gilt auch für die Ergebnisse des Bolus-Rechners.

Maximal erlaubte Kohlenhydrate [g]
-----------------------------------------------------------
* Dies ist die maximale Menge an Kohlenhydraten, für die der AAPS Bolus-Rechner eine Dosis berechnen darf.
* Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. 
* Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

Loop
===========================================================
APS-Modus
-----------------------------------------------------------
* Umschalten zwischen Closed Loop, Open Loop sowie Unterbrechung der Insulinzufuhr bei niedrigem Blutzucker (LGS - low glucose suspend).
* **Open Loop** bedeutet, dass Empfehlungen für temporäre Änderungen der Basalrate als Benachrichtigung auf dem Smartphone gegeben werden. Nach der manuellen Bestätigung wird das Kommando an die Pumpe übertragen und Insulin abgegeben. Nur wenn Du eine virtuelle Pumpe verwendest, musst Du die Änderungen selbst manuell an der Pumpe eingeben.
* **Closed Loop** bedeutet, dass die TBR Vorschläge automatisch zur Pumpe gesendet werden, ohne dass Du benachrichtigt wirst oder sie bestätigen musst.  
* **Low glucose suspend** gibt Dir die Möglichkeit, in den LGS-Modus (Reduzierung der Basalrate bei niedrigen Glukosewerten) zu wechseln ohne dafür eines der Ziele (objectives) zurücksetzen zu müssen.

Minimaler Wert zur Anfrage einer Änderung [%]
-----------------------------------------------------------
* Im Open Loop erhältst Du jedes Mal eine Benachrichtigung, wenn AAPS empfiehlt, die Basalrate anzupassen. 
* Um die Anzahl der Benachrichtigungen zu reduzieren, kannst du entweder einen größeren BZ-Zielbereich verwenden oder den minimalen Wert zur Anfrage einer Änderung erhöhen.
* Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

Advanced Meal Assist (AMA) oder Super Micro Bolus (SMB)
===========================================================
Abhängig von Deinen Einstellungen im `Konfigurations-Generator <../Configuration/Config-Builder.html>` _ kannst Du zwischen zwei Algorithmen wählen:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#erweiterter-mahlzeit-assistent-ama>`_ - Stand des Algorithmus in 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - Der aktuellste Algorithmus für erfahrene Nutzer

OpenAPS AMA-Einstellungen
-----------------------------------------------------------
* Erlaubt AAPS nach einem Essen schneller mit einer Erhöhung der Basalrate zu reagieren - WENN Du die Kohlenhydrate zuverlässig eingibst. 
* Mehr Details zu den Einstellungen und Autosens findest Du in den `OpenAPS Docs <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Maximale IE/h, die als TBR gesetzt werden können
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Diese Einstellung existiert als Sicherheitsgrenze, um zu verhindern, dass AAPS jemals eine gefährlich hohe Basalrate setzt. 
* Der Wert wird in IE pro Stunde angegeben (IE/h). 
* Es wird empfohlen, hier etwas Vernünftiges einzugeben. Eine gute Empfehlung ist, die **höchste Basalrate** in Deinem Profil zu verwenden und diese **mit 4 zu multiplizieren**. 
* Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.
* Siehe dazu auch die `detaillierte Beschreibung <../Usage/Open-APS-features.html#max-ie-h-die-als-tbr-gesetzt-werden-konnen-openaps-max-basal>`_.

Maximales Basal-IOB, das OpenAPS abgeben darf [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Menge an zusätzlichem Basalinsulin (in Einheiten), das deinem Körper zusätzlich zu deiner normalen Basalrate zugeführt werden darf. 
* Wenn dieser Wert erreicht wird, wird AAPS aufhören, zusätzliches Basalinsulin abzugeben, bis dein Basalinsulin On Board (IOB) wieder unterhalb dieses Wertes liegt. 
* Dieser Wert **berücksichtigt kein Bolus-IOB**, nur Basal.
* Dieser Wert wird unabhängig von deiner normalen Basalrate berechnet und überwacht. Es wird lediglich das zusätzliche Basalinsulin zu der normalen Basalrate berücksichtigt.

Wenn Du anfängst den Loop zu benutzen, wird empfohlen das **maximale Basal-IOB für eine bestimmte Zeit auf 0** zu setzen, während Du Dich mit dem System vertraut machst. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhindern. Das ist ein wichtiger Schritt, um:

* Zeit zu haben, sich auf sichere Art mit der Verwendung des AAPS Systems vertraut zu machen und zu überwachen, wie es funktioniert.
* die Gelegenheit zu nutzen, dein Basalratenprofil und die Insulinsensibilitäts-Faktoren (ISF) anzupassen.
* zu sehen, wie AAPS die Basalrate einschränkt, um Hypoglykämien zu verhindern.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. Die empfohlene Richtlinie für diesen Wert ist, die **höchste Basalrate** in Deinem Profil zu verwenden und diese **mit 3 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 3 multiplizieren, um einen Wert von 1.5IE/h zu erhalten.

* Du kannst konservativ mit diesem Wert starten und ihn im Laufe der Zeit langsam erhöhen. 
* Das sind aber nur Richtlinien; jeder Körper ist anders. Es kann durchaus sein, dass du mehr oder weniger benötigst als hier empfohlen wurde, aber beginne dennoch konservativ und passe es langsam an.

**Hinweis: Aus Sicherheitsgründen ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ analysiert Deine BZ-Abweichungen (positiv/negativ/neutral).
* Dabei wird anhand dieser Abweichungen ermittelt, wie empfindlich / resistent Du auf Insulin reagierst und Deine Basalrate und den ISF entsprechend angepasst.
* Wenn Du "Autosens passt Zielwerte ebenfalls an" auswählst, wird der Algorithmus auch Dein BZ-Ziel entsprechend anpassen.

Erweiterte Einstellungen (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normalerweise musst Du die Einstellungen in diesem Dialog nicht ändern!
* Falls Du sie doch ändern willst, lies in jedem Fall vorher die Details dazu in den `OpenAPS Docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ und stelle sicher, dass Du weißt, was Du tust.

OpenAPS SMB-Einstellungen
-----------------------------------------------------------
* Im Gegensatz zu AMA verwendet `SMB < ../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ keine temporären Basalraten, um den Blutzuckerspiegel zu steuern, sondern hauptsächlich kleine Supermicroboli.
* Du musst `Ziel (objective) 10 <../Usage/Objectives.html#ziel-10-aktiviere-zusatzliche-oref1-funktionen-zum-taglichen-gebrauch-wie-z-b-den-super-micro-bolus-smb>`_ gestartet haben, um SMB nutzen zu können.
* Die ersten drei Einstellungen sind `oben beschrieben. <./Configuration/Preferences.html#maximales-basal-iob-das-openaps-abgeben-darf-u>`_
* Details zu den verschiedenen Optionen sind auf der Seite `OpenAPS-Funktionen <../Usage/Open-APS-features.html#aktiviere-smb>`_ beschrieben.
* *Wie häufig SMB abgegeben werden (in Min.)* ist eine Einschränkung für SMB, die standardmäßig nur alle vier Minuten abgegeben werden. Dieser Wert verhindert, dass das System SMB zu häufig abgibt (z. B. wenn Du ein temporäres Ziel setzt). Sie sollten diese Einstellung nicht ändern, außer Du weißt genau über die Folgen Bescheid. 
* Wenn 'Empfindlichkeit erhöht den Zielwert' oder 'Resistenz senkt den Zielwert' aktiviert ist, passt `Autosens <../Usage/Open-APS-features.html#autosens>`_ Deinen BZ-Zielwert entsprechend der BZ-Abweichungen an.
* Wenn der Zielwert angepasst wird, wird dies durch einen grünen Hintergrund des Zielwerts angezeigt.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Von Autosens angepasster Zielwert
  
Kohlenhydrat-Vorschlag
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Diese Funktion steht nur zur Verfügung, wenn Du SMB ausgewählt hast.
* Der Algorithmus empfiehlt Dir, etwas zu essen, wenn er feststellt, dass zusätzliche Kohlenhydrate benötigt werden.
* In diesem Fall erhältst Du eine Benachrichtigung, die Du für 5, 15 oder 30 Minuten stummschalten kannst.
* Zusätzlich werden die vorgeschlagenen Kohlenhydrate auf dem Startbildschirm im Bereich COB angezeigt.
* Ein Schwellenwert lässt sich definieren, damit erst eine Mindest-KH-Menge erreicht werden muss, bevor eine Benachrichtigung erscheint. 
* Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und hochgeladen.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Kohlenhydrat-Vorschlag auf dem Startbildschirm
  
Erweiterte Einstellungen (OpenAPS SMB)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normalerweise musst Du die Einstellungen in diesem Dialog nicht ändern!
* Falls Du sie doch ändern willst, lies in jedem Fall vorher die Details dazu in den `OpenAPS Docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ und stelle sicher, dass Du weißt, was Du tust.

Resorptions-Einstellungen
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Resoprtions-Einstellungen

min_5m_carbimpact
-----------------------------------------------------------
* Der Algorithmus verwendet die Auswirkungen auf den Blutzuckerspiegel (BGI - blood glucose impact), um zu bestimmen, wann Kohlenhydrate absorbiert werden. 
* Dieser Wert wird nur dann verwendet, wenn keine CGM-Werte empfangen werden oder körperliche Aktivitäten den Blutzuckeranstieg "kompensieren", den AAPS normalerweise zur Berechnung des Kohlenhydratabbaus verwendet. 
* So lange der Kohlenhydratabbau nicht dynamisch aus den Veränderungen des BZ ermittelt werden kann, wird ein Standardwert für den Abbau angesetzt. Im Prinzip ist es eine Notlauffunktion.
* Einfach gesagt: Der Algorithmus "weiß", wie sich Deine BZ-Werte unter Berücksichtigung der aktuellen Insulindosis etc. **entwickeln sollten**. 
* Wenn eine positive Abweichung vom erwarteten Verhalten registriert wird, werden einige Kohlenhydrate absorbiert/aufgenommen. Große Abweichung = viele Kohlenhydrate etc. 
* Das min_5m_carbimpact definiert die Standard-Kohlenhydrat-Resorptionswirkung pro 5 Minuten. Für weitere Details siehe `OpenAPS Docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Der Standardwert für AMA ist 5, für SMB ist es 8.
* Im COB-Diagramm auf dem Startbildschirm werden Zeiten, in denen min_5m_impact verwendet wird, mit einem orangenen Punkt auf der Diagrammlinie markiert.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: COB-Diagramm
  
Maximale Dauer des Essens-Resorption
-----------------------------------------------------------
* Wenn du oft Mahlzeiten mit viel Fett oder Eiweiß zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

Erweiterte Einstellungen - Autosens-Faktoren
-----------------------------------------------------------
* Definiere einen minimalen und maximalen `Autosens <../Usage/Open-APS-features.html#autosens>`_-Faktor.
* Die Standardwerte (max. 1.2 und min. 0.7) sollten nicht verändert werden.

Pumpen-Einstellungen
===========================================================
Die Einstellungen hier sind je nach Pumpenmodell, das Du im `Konfigurations-Generator <../Configuration/Config-Builder.html#pump>`_ gewählt hast, unterschiedlich.  Verbinde Deine Pumpe und richte sie entsprechend der pumpenspezifischen Beschreibung ein:

* `DanaR Insulinpumpe <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS Insulinpumpe <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo Pumpe <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight Pumpe <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic Pumpe <../Configuration/MedtronicPump.html>`_

Stelle sicher, dass du die virtuelle Pumpe im Konfigurations-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

Nightscout-Client
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Gib Deine *Nightscout URL* (z.B. https://yourwebsitename.herokuapp.com) und das *API secret* (ein 12-stelliges Passwort, dass Du in den Variablen bei Heroku definiert hast) ein.
* Das versetzt AndroidAPS in die Lage, Daten von Nightscout zu lesen und zu schreiben.  
* Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.
* **Stelle sicher, dass die URL NICHT mit /api/v1/ endet.**
* *Logge App-Start in Nightscout* schreibt jedes Mal, wenn AAPS startet, eine Notiz in Dein Nightscout Careportal.  Die App sollte maximal einmal am Tag neu gestartet werden. Mehrere Einträge am Tag könnten ein Hinweis auf ein Problem sein (z.B.  Akkuoptimierung für AAPS nicht deaktiviert). 
* Falls aktiviert, werden Änderungen Deiner `lokalen Profile <../Configuration/Config-Builder.html#lokales-profil-empfohlen>`_ zu Nightscout hochgeladen.

Verbindungseinstellungen
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: NSClient Verbindungseinstellungen  
  
* Beschränken den Nightscout-Upload auf WLAN-Verbindungen oder sogar auf bestimmte WLAN-SSIDs.
* Wenn Du nur ein bestimmtes WLAN-Netzwerk verwenden möchtest, kannst du dessen WiFi SSID eingeben. 
* Mehrere SSIDs können durch Semikolon (Strichpunkt) getrennt werden. 
* Gib zum Löschen aller SSIDs ein Leerzeichen in das Feld ein.

Alarm-Optionen
-----------------------------------------------------------
* In den Alarm-Optionen legst Du fest, welche Standard-Nightscout-Alarme in AAPS angezeigt werden sollen.  
* Damit die Alarme ausgelöst werden können, musst Du in den `Heroku Variablen <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_ Werte für Urgent High, High, Low und Urgent Low Alarme setzen. 
* Diese funktionieren nur, wenn Du eine Online-Verbindung mit Nightscout hast und sind vor allem für Eltern und Betreuer gedacht. 
* Wenn Du Deine CGM-Quelle direkt auf dem Smartphone hast (z.B. xDrip+ oder gepatchte Dexcom App) nutze stattdessen deren Alarme.

Erweiterte Einstellungen (Nightscout-Client)
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS-Client - erweiterte Einstellungen

* Die meisten Optionen in den erweiterten Einstellungen sind selbsterklärend.
* *Aktiviere lokale Broadcasts* teilt deine Daten mit anderen Apps auf dem Smartphone (z. B. xDrip+). 

  * Die gepatchte Dexcom App übergibt Werte nicht direkt an xDrip+. 
  * Du musst `über AAPS gehen <../Configuration/Config-Builder.html#bz-quelle>`_ und lokale Broadcast in AAPS aktivieren, um xDrip+ Alarme nutzen zu können.
  
* *Verwende absolute statt prozentuale Basalwerte beim Upload zu Nightscout.* muss aktiviert werden, wenn Du Autotune einsetzen willst. In der `OpenAPS Dokumentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ findest Du Details zu Autotune.

SMS Kommunikator
===========================================================
* Einstellmöglichkeiten werden nur angezeigt, wenn Du zuvor den SMS Kommunikator im `Konfigurations-Generator <../Configuration/Config-Builder.html#sms-kommunikator>`_ aktiviert hast.
* Diese Einstellung erlaubt eine Fernsteuerung der App, indem Anweisungen an das Smartphone des Patienten gesendet werden, die die App ausführt (z.B. Loop oder Bolus anhalten).  
* Weitere Information findest Du auf der Seite `SMS-Befehle <../Children/SMS-Commands.html>`_.
* Zusätzliche Sicherheit wird durch die Verwendung einer Authentifikator-App und einer zusätzlichen PIN am Tokenende erreicht.

Automatisierung
===========================================================
Wähle aus, welcher Standortservice verwendet werden soll:

* Passiver Standort: AAPS nutzt nur die Standort, die von andere Apps angefordert werden.
* Netzwerkstandort: Bestimmung des Standorts mithilfe der Infrastruktur Deines Mobilfunkanbieters (teilweise recht ungenau)
* GPS-Standort (Achtung! Kann zu übermäßigen Akkuverbrauch führen!)

Lokale Alarme
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Lokale Alarme

* Einstellungen sollten selbsterklärend sein.

Datenübermittlung
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Datenübermittlung

* Du kannst bei der Weiterentwicklung von AAPS unterstützen, indem Du Absturzberichte an die Entwickler sendest.

Wartungseinstellungen
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Wartungseinstellungen

* Standardempfänger von Protokollen ist logs@androidaps.org.
* Wenn Du *Exportierte Daten verschlüsseln* auswählst, werden diese mit Deinem `master password <../Configuration/Preferences.html#master-passwort>`_ verschlüsselt. In diesem Fall muss das Master-Passwort jedesmal eingegeben werden, wenn die Einstellungen ex- oder importiert werden.

Open Humans
===========================================================
* Du kannst die Community unterstützen, indem Du Deine Daten für Forschungsprojekte zur Verfügung stellst. Weitere Informationen dazu findest Du auf der `Open Humans Seite <../Configuration/OpenHumans.html>`_.
* In den Einstellungen kannst Du festlegen, wann Daten hochgeladen werden sollen

   * nur über WLAN-Verbindungen
   * nur während des Ladens
