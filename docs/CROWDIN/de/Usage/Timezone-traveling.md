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

# Zeitumstellung (Sommer-/Winterzeit)

Je nach Pumpe und CGM können Zeitsprünge zu Problemen führen. Bei der Combo wird z.B. die Pumpenhistorie neu gelesen und doppelte Einträge werden erstellt. Nimm daher bitte die folgenden Anpassungen tagsüber vor.

1. Schalte den automatischen Wechsel der Zeitzone in deinem Smartphone aus. 2) Wähle eine Zeitzone mit der gewünschten Zeit aber ohne Zeitumstellung. Für die Mitteleuropäische Zeit (MEZ) könnte dies z.B. "Brazzaville" (Kongo) sein. Stelle die Zeitzone deines Smartphones manuell auf Kongo. 3. Aktuallisiere die Pumpe via AndroidAPS. (drücke im Dana Tab das Bluetooth Symbol bzw. "aktualisieren" im Combo Tab). 4. Prüfe den Behandlungs Tab (BEH)... Falls Du doppelte Einträge entdeckst:

* KEINESFALLS auf "Lösche Behandlungen in der Zukunft" klicken!
* Drücke "Löschen" bei allen künftigen und doppelten Behandlungen. Dadurch werden die Behandlungen außer Kraft gesetzt statt nur gelöscht und somit nicht mehr beim IOB berücksichtigt. 5. Falls der Status unklar sein sollte: Pausiere den Loop für mindestens eine DIA (Insulin-Wirkdauer) oder Max-Carb-Time - je nach dem welche Zeitdauer größer ist.

Ein guter Zeitpunkt für diese Umstellung ist bei niedrigem IOB (z.B. eine Stunde vor dem Essen).

Dies betrifft auf jeden Fall die Combo, vielleicht auch die Dana Rv2 und Dana RS. Und wahrscheinlich nicht die Dana R und Insight. Sei bitte vorsichtig, da es noch nicht getestet ist. Dies ist DIY!