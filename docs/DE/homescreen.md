# Home-Screen

![homescreen](https://img1.picload.org/image/dgdgcorw/aaps-overview-small.jpg.png)

* **Dev**: Deviation (= Abweichung). Zeigt an, um wie viele Einheiten sich der tatsächliche Anstieg/Senkung des BZ gegenüber des vorhergesagten Wertes (durch OpenAPS und eingegebener Daten) unterscheidet.
* **Profilwechsel**: AAPS kann immer noch nach der alten Funktion funktionieren, bis du ein "Profile switch" mit einer Dauer von null (später erklärt) einstellst. Wenn man das macht, beginnt AAPS die Historie der Profile zu verfolgen, und jede neue Profiländerung benötigt ein neues "Profile switch" Event, auch wenn du das Profil in Nightscout änderst. Das geupdatete Profil wird sofort an AAPS gesendet, aber du musst ein "Profile switch" Event eingeben um die Änderungen verwenden zu können.
Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch". Falls du einen "Profile switch" mit einer Dauer einstellst, wird nach Ablauf auf das letzte Profil zurück gegriffen.
* [Temporary Targets/temporäre Ziele (Eating Soon and Activity Mode)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#eating-soon-and-activity-mode-temporary-targets) temporäre Ziele (Temp Targets) sind ideal wenn du möchtest, dass der Loop auf einen anderen BZ Wert korrigiert, z.B. beim Sport (höheres Ziel), oder wenn du essen willst (niedrigeres Ziel -> BZ steigt nach dem Essen nicht so stark). Man kann die Temp Targets entweder über die Uhr, im Actions Reiter, oder indem man im Overview Reiter auf das aktuelle Ziel länger drückt. Im Overview Reiter wird das Standard Ziel blau dargestellt, und das temporäre grün.
* BZ-Vorhersage: 
    * Orange: COB
    * Dunkelblau: IOB
    * Hellblau: zero-temp
    * Dunkelgelb: UAM
