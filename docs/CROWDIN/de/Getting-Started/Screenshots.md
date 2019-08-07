# Screenshots

## Die Startseite

![Startbildschirm v2.1](../images/Screenshot_Home_screen_V2_1.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

**Abschnitt A:** Ermöglicht dir die Navigation zwischen den verschiedenen AndroidAPS Modulen, indem du nach links oder rechts blätterst (wischst).

**Abschnitt B:** Hier siehst du den Status des Loops (Open Loop, Closed Loop, Unterbrechung des Loops usw.), dein aktuelles Profil und deinen Zielbereich. Um eines davon zu verändern, drücke länger auf das entsprechende Feld. Drücke z.B. lange auf das dunkelblaue Feld im oberen rechten Bereich ("5.5" im Screenshot), um ein temporäres Ziel zu setzen.

**Abschnitt C:** Hier wird die letzte Glukosemessung deines CGMs angezeigt und wie lange diese her ist, außerdem die Veränderung der Werte in den vergangenen 15 und 40 Minuten, deine aktuelle Basalrate - einschließlich der vom System gesetzten temporären Basalrate (TBR), das noch wirkende Insulin (IOB, Insulin on board) und noch wirkende Kohlenhydrate (COB, carbs on board).

Die optionale [Status Lights](../Configuration/Preferences.md) (CAN | INS | RES | SEN | BAT) geben eine optische Warnung bei niedrigem Reservoirstand und Akkustand sowie einem überfälligen Kanülenwechsel.

Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. Die Zahlen in Klammern zeigen, wie viel Insulin aus früheren Boli noch wirkt bzw. wie viel Insulin noch aus von AndroidAPS programmierten TBR vorhanden ist oder fehlt. Die zweite Komponente kann negativ werden, wenn kürzlich Basalraten reduziert wurden.

**Abschnitt D:** Klicke auf den Pfeil auf der rechten Seite des Bildschirms im Abschnitt D, um auszuwählen, welche Informationen auf den folgenden Diagrammen angezeigt werden sollen.

**Abschnitt E:** Dies ist die Grafik, die den Glukosewert (BG) anzeigt, wie er von deinem Messsystem (CGM) ausgelesen wird. Sie zeigt auch Nightscout-Benachrichtigungen wie Kalibrierungen mit einem Blutzuckermessgerät (Finger) und Kohlenhydrateingaben an. Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 8, 12, 18 oder 24 Stunden wählen.

Die verlängerten Linien zeigen die vorhergesagten BZ Berechnungen und Trends - wenn du das entsprechend ausgewählt hast.

    * Orange Linie: COB (Farbe wird generell verwendet um COB und Kohlenhydrate anzuzeigen) 
    * Dunkelblaue Linie: IOB (Farbe wird generell verwendet um IOB und Insulin anzuzeigen) 
    * Hellblaue Linie: zero-temp 
    * Dunkelgelbe Linie: UAM
    

Diese Linien zeigen dir die verschiedenen Vorhersagen basierend auf der Kohlenhydrat Absorption (COB) und dem vorhandenen Insulin (IOB). Sie zeigen an, wie lange es dauern wird, den Glukoselevel in den Zielbereich zu bringen, wenn die Abweichungen unmittelbar aufhören und die temporäre Basalrate auf 0 gesetzt wird und die Erkennung unangekündigter Mahlzeiten oder Effekte wenn Kohlenhydrate erkannt werden aber nicht vom Benutzer erfasst wurden (UAM).

Die blaue Linie zeigt das von der Pumpe abgegebene Basalinsulin an. Die gestrichelte blaue Linie ist die Basalrate ohne temporäre Basalanpassungen (ohne TBR) und die durchgezogene blaue Linie ist die tatsächliche Basalabgabe über den angezeigten Zeitraum (mit TBR).

**Abschnitt F:** Die Anzeige ist ebenfalls über die Optionen in Abschnitt D konfigurierbar. In diesem Beispiel zeigen wir das IOB (Insulin on board) - wenn es keine TBR und keinen noch wirkenden Bolus gäbe, wäre dies Null. Ausserdem zeigen wir hier die Insulinempfindlichkeit und die Abweichung der Werte. GRAUE Balken zeigen eine Abweichung aufgrund von Kohlenhydraten, GRÜN, dass der Glukosewert höher ist als vom Algorithmus erwartet und ROT, dass er niedriger ist als vom Algorithmus erwartet.

**Abschnitt G:** Ermöglicht es dir, einen Bolus zu verabreichen (normalerweise würdest du dazu die Schaltfläche “Rechner” verwenden) und eine CGM-Kalibrierung mit einer Blutzuckermessung (Finger) hinzuzufügen.

## Der Bolus-Rechner

![Bolus-Rechner](../images/Screenshot_Bolus_calculator.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

**Abschnitt A:** Hier gibst du die Informationen ein, die für die Berechnung des Bolus notwendig sind. Das Feld BG (Blutzucker) ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. Unter CARBS (Kohlenhydrate) trägst Du Deine Schätzung der Kohlenhydrate - oder deren Äquivalent - ein. Im CORR Feld können Änderungen eingetragen werden, wenn Du die Enddosis aus welchen Gründen auch immer anpassen willst. Über das Feld CARB Time kannst du einen SEA ("Spritz-Ess-Abstand") einstellen, d. h. das Insulin wird sofort abgegeben, die Kohlenhydrate werden aber erst später erwartet. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohelnhydrate also schon zu Dir genommen hast.

Beim SUPER BOLUS wird das Basalinsulin der kommenden zwei Stunden zum berechneten Bolus addiert und die Basalrate für die kommenden zwei Stunden auf Null gesetzt, um das extra Insulin wieder heraus zu nehmen. Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.

**Abschnitt B** zeigt den berechneten Bolus. Falls IOB (Insulin on bord) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.

**Abschnitt C** zeigt die verschiedenen Variablen und deren Einfluss auf das Ergebnis der Bolusberechnung. Du kannst einzelne davon abwählen, wenn du sie ncht berücksichtigen willst, dies wird aber die Ausnahme sein.

<b>Kombinationen von COB und IOB und deren Bedeutung</b>

<ul>
    <li>COB und IOB ausgewählt: Berücksichtigung aller Kohlenhydrate, die noch nicht vom Körper aufgenommen wurden und für die kein Insulin gespritzt wurde SOWIE aller Insulingaben (egal ob als temporäre Basalrate oder SMB).</li>
    <li>Falls Du COB ohne IOB auswählst besteht die Gefahr, dass zu viel Insulin abgegeben wird da in diesem Fall das bereits verabreichte, noch aktive Insulin nicht berücksichtigt wird. </li>
    <li>Falls Du IOB ohne COB auswählst besteht das Risiko, dass zu wenig Insulin abgegeben wird, da der Anteil des IOB, der eigentlich für noch nicht komplett vom Körper aufgenommene Kohlenhydrate vorgesehen ist, von der neuen Insulinmenge abgezogen wird. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
</ul>

Wenn Du einen zusätzlichen Bolus kurz nach einem Mahlzeitenbolus abgeben willst (z.B. zusätzlicher Nachtisch), so kann es hilfreich sein, alle Häkchen rauszunehmen. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.

## Insulin Profil

![Insulin Profil](../images/Screenshot_insulin_profile.png)

Hier wird das Aktivitätsprofil des von Dir gewählten Insulins angezeigt. Die LILA Linie zeigt an, wie viel Insulin nach der Injektion verbleibt und wie es im Zeitverlauf abnimmt. Die BLAUE Linie veranschaulicht die Aktivität des Insulins.

Normalerweise wirst du eines der Oref Profile verwenden. Wichtig dabei ist, dass der Abbau über einen deutlich längeren Zeitraum erfolgt. Von der klassischen umpentherapie bist du es wahrscheinlich gewohnt anzunehmen, dass das Insulin nach ca. 3 1/2 Stunden vollständig abgebaut ist. Allerdings spielt der langsamere Abbau beim Loopen eine wichtige Rolle da die Berechnungen deutlich präziser sind und sich diese geringen Mengen unter den rekursiven Berechnungen des AndroidAPS Algorithmus summieren.

Weitere Informationen zu den verschiedenen Insulintypen, ihren Aktivitätsprofilen und warum dies alles eine Rolle spielt lies bitte diesen Artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).

Du solltest auch einen Blick in diesen exzellenten Blog-Artikel werfen: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Noch mehr hier: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_pump_Combo.png)

Hier sehen wir den Status des Insulin-Pumpe - in diesem Fall eine Accu-Chek Combo. Die angezeigten Informationen sind selbsterklärend. Ein langer Druck auf die Schaltfläche HISTORY ("Verlauf") liest die Daten aus deiner Pumpe einschließlich des basalen Profils. Berücksichtige bitte, dass die Combo nur ein Basalprofil unterstützt.

## Care Portal (Behandlungen)

![Care Portal (Behandlungen)](../images/Screenshot_care_portal.png)

Dies entspricht den Funktionen, die du bei Nightscout unter dem "+" Symbol findest. Diese erlauben dir, zusätzliche Notizen in deine Aufzeichnungen zu übernehmen. Funktionen wie Katheter- und Reservoirwechsel sollten selbsterklärend sein. ACHTUNG! Vom Care Portal können keine Kommandos an Deine Pumpe gesandt werden! Wenn du also über das Care Portal einen Bolus hinzufügst, so wird nur eine entsprechende Notiz in Nightscout eingetragen. Die Pumpe selbst wird keinen Bolus abgeben.

## Loop, MA, AMA, SMB

Normalerweise musst du dich um diese Punkte nicht kümmern. Sie zeigen die Ergebnisse des OpenAPS Algorithmus der jedes mal berechnet wird, wenn das System einen neuen Wert vom CGM erhält. Diese werden an anderer Stelle beschrieben.

## Profile

![Profil](../images/Screenshot_profile.png)

AndroidAPS kann mit verschiedenen Profileinstellungen betrieben werden. In der Regel wird - wie abgebildet - das Nightscout-Profil über dien eingebaute Nighscout Client heruntergeladen und hier in Nur-Lesen-Form dargestellt. Änderungen musst du im Nightscout User Interface durchführen und anschließend in AndroidAPS einen "Switch Profile" durchführen, damit die geänderten Daten heruntergeladen werden. Daten wie z.B. das Basalprofil werden dann automatisch auf die Pumpe geschrieben.

**DIA** (Duration of Insulin Action) steht für die Wirkdauer des Insulins und wurde oben bei den Insulinprofilen erläutert.

**IC:** Insulin zu Kohlenhydrat-Verhältnis ("BE-Faktor"). In diesem Beispielprofil sind unterschiedliche Werte für verschiedene Tageszeiten hinterlegt.

**ISF** Insulin Sensitivitäts-Faktor: Der Korrekturfaktor beschreibt, wie stark eine Einheit Insulin deinen Blutzucker senkt - vorausgesetzt die anderen Einflussfaktoren bleiben unverändert.

**Basal:** Das in der Pumpe programmierte Basalprofil.

**Target:** ist der Zielbereich, den AndroidAPS immer anstreben soll. Du kannst verschiedene Zielbereiche für unterschiedliche Tageszeiten setzen, wenn Du willst. Dies muss kein Zielpunkt sein, Du kannst einen oberen und unteren Zielwert definieren so dass AndroidAPS nur Änderungen vornimmt, wenn der Blutzucker den Zielbereich verlässt. Wenn Du das tust wird das System aber langsamerer reagieren.

## Behandlungen, xDrip, NSClient

Diese sind einfach Aufzeichnungen der Behandlungen (Bolus und Kohlenhydrate), xDrip Nachrichten und Notizen, die über den integrierten Client an Nightscout gesandt wurden. Du musst Dich normalerweise nicht darum kümmern, es sei denn, es liegt ein Problem vor.

## Konfiguration

![Konfigurations-Generator](../images/Screenshot_config_builder.png)

An dieser Stelle wird dein AndroidAPS System eingerichtet. Das Bild zeigt ein typisches System, das mit einer Accu-Chek Combo Insulinpumpe und einem Dexcom G5 CGM betrieben wird. Der Dexcom Sensor wird über xDrip+ gesteuert. Als Insulin wird NovoRapid mit einem Oref Profil verwendet und die Daten auf einen Nightscout Cloudserver hochgeladen.

Wenn die Box rechts angehakt ist, wird das entsprechende Modul in der oberen Menüliste angezeigt. Über das kleine Zahnradsymbol können weitere Einstellungen für dieses Modul vorgenommen werden - sofern verfügbar.

## Einstellungen und Vorgaben

Oben rechts in der Navigationsleiste findest du drei übereinander angeodnete kleine Punkte. Ein Klick darauf führt Dich zu den Einstellungen, der Historie, dem Einrichtungsassistenten, den Informationen über die App und den Schließen-Button, mit dem Du AAPS verlassen kannst.