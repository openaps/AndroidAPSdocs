# Mit der Pumpe über Zeitzonen hinweg reisen

## DanaR, koreanische DanaR

Es gibt keine Probleme beim Zeitzonenwechsel im Smartphone, da die Pumpe keine Historie verwendet

## DanaRv2, DanaRS

Diese Pumpen benötigen besondere Aufmerksamkeit, weil AndroidAPS die Historie der Pumpe verwendet, die Einträge in der Pumpe aber keine Zeitangaben beinhalten. Das bedeutet, dass ein einfacher Zeitzonenwechsel im Smartphone dazu führt, dass Einträge mit verschiedenen Zeitzonen ausgelesen und doppelt angezeigt werden. Um dies zu vermeiden, führe folgende Schritte bei jedem Zeitzonenwechsel aus:

* setze das Smartphone vor der Reise auf manuellen Zeitzonenwechsel

Wenn du aus dem Flugzeug steigst:

* schalte die Pumpe aus
* ändere die Zeitzone auf dem Smartphone
* schalte das Smartphone aus, schalte die Pumpe an
* lösche die Historie der Pumpe
* ändere die Zeit in der Pumpe
* schalte das Smartphone an
* lasse das Smartphone mit der Pumpe verbinden und verfeinere die Zeiteinstellung

## Combo

## Insight

Der Treiber passt die Uhrzeit in der Pumpe automatisch an die Zeit im Smartphone an.

Die Insight dokumentiert auch die historischen Einträge, in denen die Zeit geändert wurde und von welcher (alten) Zeit zu welcher (neuen) Zeit. So kann die richtige Zeit in AAPS trotz der Zeitänderung bestimmt werden.

Es kann zu Ungenauigkeiten in den TDDs führen. Aber es sollte kein Problem sein.

Der Insight-Nutzer muss sich also nicht um Zeitumstellung oder den Wechsel von Zeitzonen kümmern. Es gibt eine Ausnahme zu dieser Regel: Die Insight Pumpe hat eine kleine interne Batterie, um die Zeit immer aktuell zu halten etc. während Du die "normale" Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. In diesem Fall werden alle Einträge vor dem Batteriewechsel in der Berechnung in AAPS übersprungen, da die richtige Zeit nicht korrekt erkannt werden kann.

# Zeitumstellung (Sommer-/Winterzeit)

Je nach Pumpe und CGM können Zeitsprünge zu Problemen führen. Bei der Combo wird z.B. die Pumpenhistorie neu gelesen und doppelte Einträge werden erstellt. Nimm daher bitte die folgenden Anpassungen tagsüber vor.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. (hit BT symbol for Dana pumps; "refresh" for the Combo). 4) Check the Treatments tab... If you see duplicate treatments:

* KEINESFALLS auf "Lösche Behandlungen in der Zukunft" klicken!
* Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt. 5. Falls der Status unklar sein sollte: Pausiere den Loop für mindestens eine DIA (Insulin-Wirkdauer) oder Max-Carb-Time - je nach dem welche Zeitdauer größer ist.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action needed.

### Other pumps - new as of AAPS version 2.2

<b><font color="#FF0000">You have to update AAPS to use this feature!</font></b>

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a noticfication on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.