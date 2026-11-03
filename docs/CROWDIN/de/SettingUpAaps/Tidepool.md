# Tidepool

Tidepool ist ein Werkzeug eines Drittanbieters, das Daten zu Glukosewerten, Insulin und Kohlenhydraten (sowie die Notizen zu Deinen Behandlungen) sammelt und mit dem Du diese Daten auswerten und mit Deinem Diabetes-Team teilen kannst. Seit der AAPS-Version 3.2 kann Tidepool als Alternative zu Nightscout genutzt werden, um das Ziel (Objective) 1 zu erfüllen. Er kann auch in Kombination mit Nightscout als alternative Berichtsplattform eingesetzt werden, die sich gut in klinische Umgebungen integriert. Dies kann die gewünschte Option für Kinder, die AAPS verwenden, sein, die eine Remoteüberwachung und -steuerung von Nightscout einsetzen wollen, aber auch eine Berichtsplattform haben wollen, mit der ihr klinisches Team besser vertraut ist.

Wichtig ist zu wissen, dass Tidepool nur für Berichte gedacht ist. Es ist KEINE Echtzeit-Follower-App. Wenn Du neben dem eigentlichen AAPS-Smartphone weitere Follower benötigst, musst Du zusätzlich Nightscout einrichten.

Hinweis: Die Tidepool-Organisation hat das Produkt iOS Loop mit FDA-Genehmigung auf den Markt gebracht. Diese Anstrengungen sind unabhängig von deren Reportingplattform und AAPS.


## Schritt 1 - Ein Tidepool-Konto erstellen

- Navigiere zu [tidepool.org](https://www.tidepool.org/)

- Wähle „Personal Sign Up“ oder „Sign Up“

- Lege eine E-Mail-Adresse und ein Passwort fest und notiere sie Dir

- Wähle „Personal Account“ und klicke auf „Continue“

- Fülle den Abschnitt mit den Patienteninformationen aus und akzeptiere die Nutzungsbedingungen

- Bestätige Deine E-Mail-Adresse, wie in der E-Mail beschrieben, die Du erhältst


## Schritt 2 - AAPS mit Tidepool verbinden

- Öffne oben links auf dem Startbildschirm das **Menü** (☰) und wähle „**Konfiguration**“

- Öffne die Kategorie „**Kommunikation**“ und aktiviere „**Tidepool**“:

![Enable Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Tippe unter Tidepool auf „**Modul öffnen**“ und dann oben rechts auf das Symbol **Login** (ein Pfeil, der in eine Tür zeigt)

- Ein Browserfenster öffnet sich mit der Anmeldeseite von Tidepool. Melde Dich mit der E-Mail-Adresse und dem Passwort an, die Du oben in Schritt 1 angelegt hast:

![Tidepool login page](../images/v4/Tidepool/tidepool_login.png)

- Nach erfolgreicher Anmeldung schließt sich der Browser, und der Tidepool-Bildschirm zeigt den Status „**Verbunden**“; das Log darunter dokumentiert die hochgeladenen Daten. Schlägt die Anmeldung fehl, prüfe, ob Deine Zugangsdaten stimmen und ob Du Deine E-Mail-Adresse bei Tidepool bestätigt hast.

![Tidepool connected](../images/v4/Tidepool/tidepool_status.png)

- Öffne in den „**Einstellungen**“ des Moduls Tidepool die „**Verbindungs-Einstellungen**“. Standardmäßig ist „**Nightscout Verbindungseinstellungen verwenden**“ eingeschaltet, sodass Tidepool unter denselben Bedingungen hochlädt, die Du für Nightscout festgelegt hast. Schalte die Option aus, wenn Du für Tidepool eigene Bedingungen möchtest, zum Beispiel um nur über WLAN und beim Laden zu Tidepool hochzuladen, während Nightscout auch mobile Daten nutzt.

![Connection settings with Use Nightscout connection settings on](../images/v4/Tidepool/tidepool_connection_settings.png) ![Separate connection settings for Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Für weitere Hilfe dazu, wie Du Deine Daten, sobald sie nach Tidepool hochgeladen wurden, nutzen kannst, gehe bitte auf [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Die Tidepool-Knöpfe

Oben rechts im Tidepool-Bildschirm:

- Das Symbol **Login** bzw. **Ausloggen** – verbindet mit Deinem Tidepool-Konto oder trennt die Verbindung. Es wird immer nur eines davon angezeigt: **Login**, solange Du abgemeldet bist, **Ausloggen**, solange Du angemeldet bist. **AAPS** bittet Dich um eine Bestätigung, bevor es Dich abmeldet.
- Das Zahnrad-Symbol – die Tidepool-Einstellungen.

Die Knöpfe unten im Tidepool-Bildschirm:

- „**Jetzt hochladen**“ – lädt neue Daten sofort hoch, statt auf den nächsten automatischen Upload zu warten.
- „**Vollständige Synchronisierung**“ – lädt alle in **AAPS** gespeicherten Daten erneut hoch.
- „**Alle Daten löschen**“ – löscht **alle** Daten, die **AAPS** zu Deinem Tidepool-Konto hochgeladen hat. Das kann nicht rückgängig gemacht werden. Verwende es nur, um falsche oder doppelte Daten zu entfernen, und führe danach „**Vollständige Synchronisierung**“ aus, um Deine Daten erneut hochzuladen.
- „**Logs leeren**“ – leert das Log im Tidepool-Bildschirm.

![The Tidepool screen and its buttons](../images/v4/Tidepool/tidepool_menu.png)

In Tidepool werden die von **AAPS** 4 hochgeladenen Daten unter dem Gerätenamen **AAPS** angezeigt. Siehe [Änderungen mit AAPS Version 4](#v4changes-tidepool), wenn Du Tidepool mit einer älteren Version verwendet hast. 
