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

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. Nimm daher bitte die folgenden Anpassungen tagsüber vor.

1) Schalte den automatischen Wechsel der Zeitzone in deinem Smartphone aus. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Stelle die Zeitzone deines Smartphones manuell auf Kongo. 3) In AndroidAPS refresh you pump. (hit BT symbol for Dana pumps; "refresh" for the Combo). 4) Check the Treatments tab... If you see duplicate treatments:

* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore. 5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

This definitely affects the Combo, maybe the Dana Rv2 and RS - and most likely not the Dana R and Insight. But as it is not tested, please be cautions. This is DIY!