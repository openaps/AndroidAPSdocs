# AndroidAPS Bildschirme

## Die Startseite

![Startbildschirm v2.5](../images/Screenshot_Home_screen_V2_5_1.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

### Abschnitt A

* Navigation zwischen den verschiedenen AndroidAPS Modulen, indem du nach links oder rechts blätterst (wischst)

### Abschnitt B

* Ändern des Loop Status (open loop, closed loop, Loop unterbrechen etc.)
* Anzeige des aktuellen Profils und Möglichkeit zum [Profil-Wechsel](../Usage/Profiles.md)
* Anzeige des aktuellen Zielwertes/-bereichs und Möglichkeit zum Setzen eines [Temporary Target](../Usage/temptarget.md).

Um eines davon zu verändern, drücke länger auf das entsprechende Feld. Drücke z.B. lange auf das dunkelblaue Feld im oberen rechten Bereich ("100" im Screenshot oben), um ein temporäres Ziel zu setzen.

### Abschnitt C

* letzter Glukosewert von Deinem CGM
* Zeitraum seit letztem CGM-Wert
* durchschnittliche Änderung der letzten 15 und 40 Minuten
* aktuelle Basalrate - inkl. eventuell aktiver, vom System gestarteten temporären Basalraten
* Aktives Insulin (IOB)
* Aktive Kohlenhydrate (COB)

Die optionale [Status Lights](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) geben eine optische Warnung bei niedrigem Reservoirstand und Akkustand sowie einem überfälligen Kanülenwechsel.

Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. Die Zahlen in Klammern zeigen, wie viel Insulin aus früheren Boli noch wirkt bzw. wie viel Insulin noch aus von AndroidAPS programmierten TBR vorhanden ist oder fehlt. Die zweite Komponente kann negativ werden, wenn kürzlich Basalraten reduziert wurden.

### Abschnitt D

Klicke auf den Pfeil auf der rechten Seite des Bildschirms im Abschnitt D, um auszuwählen, welche Informationen auf den folgenden Diagrammen angezeigt werden sollen.

### Abschnitt E

Dies ist die Grafik, die den Glukosewert (BG) anzeigt, wie er von deinem Messsystem (CGM) ausgelesen wird. Sie zeigt auch Nightscout-Benachrichtigungen wie Kalibrierungen mit einem Blutzuckermessgerät (Finger) und Kohlenhydrateingaben an.

Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 8, 12, 18 oder 24 Stunden wählen.

Die verlängerten Linien zeigen die vorhergesagten BZ Berechnungen und Trends - wenn du das entsprechend ausgewählt hast.

* **Orange** Linie: [COB](../Usage/COB-calculation.rst) (Farbe wird im Allgemeinen verwendet, um COB und Kohlenhydrate darzustellen)
* **Dunkelblau**: IOB (insulin on board - aktives Insulin) [Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.]
* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
* **Dunkelgelbe** Zeile: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (nicht ankündigte Mahlzeiten)

Diese Linien zeigen dir die verschiedenen Vorhersagen basierend auf der Kohlenhydrat Absorption (COB) und dem vorhandenen Insulin (IOB). Sie zeigen an, wie lange es dauern wird, den Glukoselevel in den Zielbereich zu bringen, wenn die Abweichungen unmittelbar aufhören und die temporäre Basalrate auf 0 gesetzt wird und die Erkennung unangekündigter Mahlzeiten oder Effekte, wenn Kohlenhydrate erkannt werden, aber nicht vom Benutzer erfasst wurden (UAM).

Die **durchgezogene** Linie zeigt das von der Pumpe abgegebene Basalinsulin an. Die **gepunktete blaue** Linie ist die Basalrate ohne temporäre Basalanpassungen (ohne TBR) und die durchgezogene blaue Linie ist die tatsächliche Basalabgabe über den angezeigten Zeitraum (mit TBR).

Die **dünne gelbe** Linie zeigt die Insulinaktivität. Sie basiert auf dem erwarteten Rückgang des BZ gemäß aktivem Insulin. Weitere Faktoren (wie z.B. Kohlenhydrate) werden NICHT berücksichtigt.

### Abschnitt F

Dieser Abschnitt kann mit den Optionen in Abschnitt D konfiguriert werden.

* **Insulin On Board** (blaue Balken): Zeigt das aktive Insulin in Deinem Körper an. Wenn das aus temporären Basalraten, SMB und vorherigen Bolusgaben stammende Insulin komplett abgebaut ist, ist dieser Wert Null. Der errechnete Insulinabbau hängt davon ab, welchen DIA Du eingestellt hast und welches Insulinprofil Du verwendest. 
* **Carbs On Board** (Orange Balken): Zeigt die noch im Körper vorhandenen Kohlenhydrate. Der Abbau hängt davon ab, was der Algorithmus anhand der BZ-Abweichungen erkennt. Falls der Kohlenhydratabbau höhrer ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger). 
* **Abweichungen**: 
   * **GRAUE** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten. 
   * **GRÜNE** Balken zeigen, dass der BZ höher ist als der Algorithmus es erwartet. 
   * **ROTE** Balken zeigen, dass der BZ niedriger ist als der Algorithmus erwartet.
* **Sensitivität** (weiße Linie): Von Autosense ermittelte Sensitivität. Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.
* **Aktivität** (gelbe Linie): Sie zeigt die Insulinaktivität. Berechnet wird sie auf Basis Deiner Einstellungen zum Insulinprofil, sie ist keine Ableitung des IOB. Der Wert ist umso höher, je näher Du Dich am Zeitpunkt des Insulin-Wirkmaximums befindest. Das bedeutet, er wird negativ, wenn das IOB abnimmt. 

### Abschnitt G

Ermöglicht es dir, einen Bolus zu verabreichen (normalerweise würdest du dazu die Schaltfläche “Calculator” verwenden) und eine CGM-Kalibrierung mit einer Blutzuckermessung (Finger) hinzuzufügen. Zudem wird hier der Quick Wizzard Button angezeigt, wenn Du ihn im [Konfigurationsgenerator](../Configuration/Config-Builder#quickwizard-einstellungen) eingestellt hast.

## Der Bolus-Rechner

![Bolus-Rechner](../images/Screenshot_Bolus_calculator.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

### Abschnitt A

Hier gibst Du die Informationen ein, die für die Berechnung des Bolus notwendig sind. Das Feld BG (Blutzucker) ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. Unter CARBS (Kohlenhydrate) trägst Du Deine Schätzung der Kohlenhydrate - oder deren Äquivalent - ein. Im CORR Feld können Änderungen eingetragen werden, wenn Du die Enddosis aus welchen Gründen auch immer anpassen willst. Über das Feld CARB TIME kannst du einen SEA ("Spritz-Ess-Abstand") einstellen, d. h. das Insulin wird sofort abgegeben, die Kohlenhydrate werden aber erst später erwartet. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohlenhydrate also schon zu Dir genommen hast.

Beim SUPER BOLUS wird das Basalinsulin der kommenden zwei Stunden zum berechneten Bolus addiert und die Basalrate für die kommenden zwei Stunden auf Null gesetzt, um das extra Insulin wieder heraus zu nehmen. Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.

### Abschnitt B

zeigt den errechneten Bolus. Falls IOB (Insulin on board) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.

### Abschnitt C

zeigt die verschiedenen Einflussfaktoren der Bolusberechnung. Du kannst einzelne davon abwählen, wenn du sie nicht berücksichtigen willst, dies wird aber die Ausnahme sein.

### Kombinationen von COB und IOB und deren Bedeutung

<ul>
    <li>COB und IOB ausgewählt: Berücksichtigung aller Kohlenhydrate, die noch nicht vom Körper aufgenommen wurden und für die kein Insulin gespritzt wurde SOWIE aller Insulingaben (egal ob als temporäre Basalrate oder SMB).</li>
    <li>Falls Du COB ohne IOB auswählst besteht die Gefahr, dass zu viel Insulin abgegeben wird da in diesem Fall das bereits verabreichte, noch aktive Insulin nicht berücksichtigt wird. </li>
    <li>Falls Du IOB ohne COB auswählst besteht das Risiko, dass zu wenig Insulin abgegeben wird, da der Anteil des IOB, der eigentlich für noch nicht komplett vom Körper aufgenommene Kohlenhydrate vorgesehen ist, von der neuen Insulinmenge abgezogen wird. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
</ul>

Wenn Du einen zusätzlichen Bolus kurz nach einem Mahlzeitenbolus abgeben willst (z.B. zusätzlicher Nachtisch), so kann es hilfreich sein, alle Häkchen rauszunehmen. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.

### Fehlerhafte Erkennung der aktiven Kohlenhydrate (COB)

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorbtion.png)

Wenn Du nach Verwendung des Bolus-Assistenten die obige Warnung siehst, hat AAPS erkannt, dass aktiven Kohlenhydrate (COB) eventuell nicht korrekt berechnet werden konnten. Wenn Du kurz nach einer vorangegangenen Mahlzeit erneut einen Bolus abgeben willst, solltest Du Dir der Gefahr einer Überdosierung bewusst sein! Weitere Hinweise findest Du auf der Seite zur [Berechnung der aktiven Kohlenhydrate (COB)](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulin Profil

![Insulin Profil](../images/Screenshot_insulin_profile.png)

Hier wird das Aktivitätsprofil des von Dir gewählten Insulins angezeigt. Die LILA Linie zeigt an, wie viel Insulin nach der Injektion verbleibt und wie es im Zeitverlauf abnimmt. Die BLAUE Linie veranschaulicht die Aktivität des Insulins.

Normalerweise wirst du eines der Oref Profile verwenden. Wichtig dabei ist, dass der Abbau über einen deutlich längeren Zeitraum erfolgt. Von der klassischen Pumpentherapie bist du es wahrscheinlich gewohnt anzunehmen, dass das Insulin nach ca. 3 1/2 Stunden vollständig abgebaut ist. Allerdings spielt der langsamere Abbau beim Loopen eine wichtige Rolle da die Berechnungen deutlich präziser sind und sich diese geringen Mengen unter den rekursiven Berechnungen des AndroidAPS Algorithmus summieren.

Weitere Informationen zu den verschiedenen Insulintypen, ihren Aktivitätsprofilen und warum dies alles eine Rolle spielt findest du in diesem Artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Du solltest auch einen Blick in diesen exzellenten Blog-Artikel werfen: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Noch mehr hier: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_pump_Combo.png)

Hier sehen wir den Status des Insulin-Pumpe - in diesem Fall eine Accu-Chek Combo. The information displayed is self-explanatory. Ein langer Druck auf die Schaltfläche HISTORY ("Verlauf") liest die Daten aus deiner Pumpe einschließlich des basalen Profils. Berücksichtige bitte, dass die Combo nur ein Basalprofil unterstützt.

## Care Portal (Behandlungen)

![Care Portal (Behandlungen)](../images/Screenshot_care_portal.png)

Dies entspricht den Funktionen, die du bei Nightscout unter dem "+" Symbol findest. Diese erlauben dir, zusätzliche Notizen in deine Aufzeichnungen zu übernehmen. Functions such as recording when you change a pump site, or insulin cartridge should be self-explanatory.

**BUT this section does not issue any commands to your pump!** So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

### Carb correction

Care portal can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Delete the entry with the faulty carb amount.
4. Make sure carbs are deleted successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not deleted as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through care portal and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profile

![Profile](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configurations. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nightscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for different times of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Behandlungen, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Konfiguration

![Konfigurations-Generator](../images/Screenshot_config_builder.png)

This is where you will set up the configuration of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Einstellungen und Vorgaben

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.