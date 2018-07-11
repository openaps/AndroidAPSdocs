# Home-Screen

.. image:: https://img1.picload.org/image/dgdgcorw/aaps-overview-small.jpg.png

* **Dev**: Deviation (= Abweichung). Zeigt an, um wie viele Einheiten sich der tatsächliche Anstieg/Senkung des BZ gegenüber des vorhergesagten Wertes (durch OpenAPS und eingegebener Daten) unterscheidet.
* **Profilwechsel**: AAPS kann immer noch nach der alten Funktion funktionieren, bis du ein "Profile switch" mit einer Dauer von null (später erklärt) einstellst. Wenn man das macht, beginnt AAPS die Historie der Profile zu verfolgen, und jede neue Profiländerung benötigt ein neues "Profile switch" Event, auch wenn du das Profil in Nightscout änderst. Das geupdatete Profil wird sofort an AAPS gesendet, aber du musst ein "Profile switch" Event eingeben um die Änderungen verwenden zu können.
Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch". Falls du einen "Profile switch" mit einer Dauer einstellst, wird nach Ablauf auf das letzte Profil zurück gegriffen.
