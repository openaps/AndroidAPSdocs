# Warum klappt das Koppeln mit der Pumpe in der App “ruffy” nicht?
Das kann mehrere Ursachen haben. Probiere folgende Schritte aus:
1. Lege eine **frische bzw. volle Batterie** in die Pumpe ein. Siehe Abschnitt zur Batterie unten.
Achte darauf, dass die Pumpe direkt neben dem Smartphone liegt.

![Combo sollte direkt neben dem Telefon liegen](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Combo_next_to_Phone.png)

1. Lösche bereits verbundene Geräte im Bluetooth-Menü der Pumpe:  **BLUETOOTH-EINSTELLUNGEN / VERBUND. GERÄT / ENTFERNEN**, bis dort **KEIN GERÄT** erscheint.
1. Lösche eine bereits per Bluetooth verbundene Pumpe im Handy: Unter Einstellungen / Bluetooth das gekoppelte Gerät “SpiritCombo” entfernen
1. Starte nun ruffy auf dem Handy und gehe ins Bluetooth-Menü der Pumpe zum Menüpunkt **GERÄT HINZUFÜGEN / VER. HERSTELLEN**. Drücke mit der einen Hand auf **CONNECT!** in ruffy und bestätige mit der anderen direkt danach den Verbindungsaufbau an der Pumpe: **STARTEN**. Hier ist das **Timing wichtig**, wenn es nicht klappt ggf. nochmal mit kürzerem oder längerem Abstand zwischen beiden Aktionen probieren.
1. Starte das Handy einmal komplett neu.
1. Falls die Pumpe das Handy überhaupt nicht als möglichen Kommunikationspartner anzeigt, ist der Bluetooth-Stack Deines Smartphones vermutlich nicht kompatibel mit der Pumpe. Stelle sicher, dass Du wirklich ein relativ neues LineageOS ≥ 14.1 oder Android ≥ 8.1 (Oreo) nutzt. Falls möglich, probiere eventuell ein anderes Smartphone aus.
Eine Liste der bereits erfolgreich eingesetzten Smartphones findest Du unter [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

# Pumpe nicht erreichbar. Was kann ich dagegen tun?
## Alarmierung zur Nicht-Erreichbarkeit der Pumpe aktivieren
* Stelle sicher, dass in AndroidAPS unter **Einstellungen / Lokale Alarme** der **Alarm, wenn Pumpe nicht erreichbar ist** eingeschaltet ist und setze **Pumpe ist nicht erreichbar Grenze [Min]** auf **31 Minuten**. 
* Diese Dauer ist lang genug, um das Handy mal versehentlich auf dem Tisch liegen zu lassen, wenn man den Raum verlässt. Auf der anderen Seite ist es gerade etwas länger als eine temporäre Basalrate und wart damit rechtzeitig, wenn die Therapie nicht planmäßig weitergeführt werden kann.