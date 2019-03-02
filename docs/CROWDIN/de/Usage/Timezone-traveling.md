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

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.

# Zeitumstellung (Sommer-/Winterzeit)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. (hit BT symbol for Dana pumps; "refresh" for the Combo). 4) Check the Treatments tab... If you see duplicate treatments:

* KEINESFALLS auf "Lösche Behandlungen in der Zukunft" klicken!
* Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt. 5. Falls der Status unklar sein sollte: Pausiere den Loop für mindestens eine DIA (Insulin-Wirkdauer) oder Max-Carb-Time - je nach dem welche Zeitdauer größer ist.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

This definitely affects the Combo, maybe the Dana Rv2 and RS - and most likely not the Dana R and Insight. But as it is not tested, please be cautions. This is DIY!