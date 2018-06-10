Seit der Version 1.5 hat sich die Funktion der Profile geändert.

Bis Version 1.46 waren die Profiländerungen sofort übernommen.

AAPS kann immer noch nach der alten Funktion funktionieren, bis du ein "Profile switch" mit einer Dauer von null (später erklärt) einstellst. Wenn man das macht, beginnt AAPS die Historie der Profile zu verfolgen, und jede neue Profiländerung benötigt ein neues "Profile switch" Event, auch wenn du das Profil in Nightscout änderst. Das geupdatete Profil wird sofort an AAPS gesendet, aber du musst ein "Profile switch" Event eingeben um die Änderungen verwenden zu können.
Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch".

Falls du einen "Profile switch" mit einer Dauer einstellst, wird nach Ablauf auf das letzte Profil zurück gegriffen.

Falls du ein lokales Profil in AAPS verwendest (CPP, Simple, Local), musst du nur die Taste im Plugin drücken, diese stellt den "Profile switch" automatisch richtig ein.

Diese Funktion ermöglicht genauere Kalkulationen über die Vergangenheit, indem die gewechselten Profile berücksichtigt werden.

Im closed Loop Modus wird empfohlen "Sync Profile in Pump" zu aktivieren.