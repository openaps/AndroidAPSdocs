(aapsclient-app)=
# Die AAPSClient-App

**AAPSClient** ist die Begleit-App zu **AAPS**: eine App für ein zweites Smartphone – meist das eines Betreuers –, das der Person, die **AAPS** nutzt, **folgt**. Ab **AAPS** Version 4 kann der Betreuer den Loop über signierte Befehle auch **fernsteuern**. Beide Smartphones kommunizieren über Deine **Nightscout**-Seite. Eine direkte Verbindung zwischen den Smartphones ist nicht nötig.

```{admonition} Wording used on this page
:class: note
- **Client** = ein Smartphone mit **AAPSClient**.
- **Master** = das Haupt-Smartphone mit **AAPS**, das mit der Pumpe verbunden ist und den Loop ausführt.
```

```{admonition} Which devices can run AAPSClient?
:class: note
Ab **AAPS**-Version 4 läuft **AAPSClient** auf Android-Smartphones und -Tablets, auf Wear OS-Smartwatches und auf Computern (Windows, Mac und Linux). Für ein iPhone gibt es keinen fertigen Download: Du erstellst die App selbst. Siehe die [Tabelle der Downloads nach Gerät](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Was AAPSClient ist (und was nicht)

**AAPSClient** sieht aus wie **AAPS** und bedient sich auch so, hat aber **keinen eigenen Loop**:

- Die App enthält **keinen APS-Algorithmus**, keine **Ziele** und **keine Pumpentreiber** – sie gibt nie selbst Insulin ab.
- Die Module, die nur die Haupt-App verwendet (**SMS-Kommunikator**, **Tidepool**, **Open Humans**), sind ebenfalls nicht enthalten.
- Was sie *enthält*: die Synchronisation über **NSClientV3**, die BZ-Quellen-Module, das Senden an **xDrip+** und die Anbindung von **Wear OS** / **Garmin** – also alles, was nötig ist, um zu folgen und Befehle weiterzuleiten. Eine **Garmin**-Smartwatch an einem Client kann die Daten anzeigen. Von ihr gesendete Kohlenhydrate werden aber nicht eingetragen, und sie kann die Pumpe nicht verbinden oder trennen: Der Client zeigt eine Meldung an, und Du gibst sie stattdessen in **AAPS** ein.

Alles, was Du in **AAPSClient** auslöst, wird vom Master (dem Smartphone mit der Pumpe) geprüft, begrenzt, bestätigt und **ausgeführt**. Wie das funktioniert, erklärt die eigene Seite [Master ↔ Client-Steuerung](ClientMasterControl.md): wie Du die beiden Smartphones koppelst, wie der Master den Bestätigungstext schreibt, den Du siehst, wie ein auf dem Client gestarteter Bolus abgegeben wird und was passiert, wenn der Master offline ist.

## Versionen: AAPSClient, AAPSClient2 und AAPSClient3

Auf demselben Follower-Smartphone können bis zu drei Client-Apps nebeneinander installiert werden, die jeweils einer **anderen** Person folgen: **AAPSClient** (gelbe Eule), **AAPSClient2** (blaue Eule) und – neu in **AAPS** Version 4 – **AAPSClient3** (grüne Eule). Sie können alle dasselbe. Nur Name und Farbe unterscheiden sich (App-Symbol, Hintergrund des Widgets und Statusbereich auf dem Startbildschirm), damit Du sie auseinanderhalten kannst. Jede App wird mit ihrem eigenen Master gekoppelt. Details findest Du unter [Über AAPSClient, AAPSClient2 und AAPSClient3](#remotecontrol-aapsclient-versions).

(aapsclient-platforms)=
## Die App bekommen

Alle fertigen Dateien findest Du in der Liste *Assets* des neuesten Releases auf [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (klicke unten im Release auf *Assets*, um die Liste aufzuklappen). In der Tabelle steht *x.y.z* für die Versionsnummer. Wähle die Datei, die zu Deinem Gerät passt:

| Gerät                           | Herunterzuladende Datei             | Notiz                                                                                                                                                                                                 |
| ------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android-Smartphone oder -Tablet | `app-aapsclient-release_x.y.z.apk`  | Installiere sie wie die Haupt-App: siehe [AAPSClient herunterladen und installieren](#RemoteControl_aapsclient) und [Übertragen und Installieren](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS-Smartwatch              | `wear-aapsclient-release_x.y.z.apk` | Gehört zur AAPSClient-App auf dem Smartphone. Siehe [Wear OS-Smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                              |
| Windows-Computer                | `AAPSClient-x.y.z.msi`              | Öffne die Datei, um sie zu installieren.                                                                                                                                                              |
| Mac                             | `AAPSClient-x.y.z.dmg`              | Siehe den Hinweis zu macOS unter der Tabelle.                                                                                                                                                         |
| Linux (Debian, Ubuntu)          | `aapsclient_x.y.z_amd64.deb`        | Installiere sie mit Deinem Paketmanager.                                                                                                                                                              |
| iPhone                          | kein(e)                             | Es gibt keine Version im App Store und keinen Download. Du erstellst die App selbst, siehe [AAPSClient auf einem iPhone](#aapsclient-iphone).                                                         |

**Du folgst zwei Personen?** Jede Datei oben gibt es auch als *aapsclient2* / *AAPSClient2*. Das ist eine zweite Client-App, die neben der ersten installiert wird, sodass ein Gerät zwei Personen folgen kann (siehe [Über AAPSClient, AAPSClient2 und AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** ist nicht in den Release-Assets enthalten: Erstelle es selbst ([Build-Varianten](#browserbuild-variant)).

**Dateien, die Du ignorieren kannst:** Die *pumpcontrol*-Dateien (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) sind kein Client. Lass sie weg.

**Mac: der erste Start.** Die App ist nicht von Apple notarisiert, deshalb blockiert macOS sie beim ersten Öffnen. Klicke auf *Fertig*, öffne dann *Systemeinstellungen → Datenschutz & Sicherheit*, scrolle nach unten und klicke auf *Dennoch öffnen*.

**Computer: so verbindest Du ihn.** Ein Computer hat keine Kamera, deshalb kann der QR-Code nicht gescannt werden. Richte im Client **Nightscout** ein, füge dann auf dem Master den Client mit einer **PIN** hinzu und gib die 8-stellige PIN im Client ein (**Mit Master koppeln**). Siehe [Mit dem Master koppeln](#aapsclient-pairing-with-the-master).

**Überall dieselbe Version.** Der Master und alle seine Clients müssen dieselbe **AAPS**-Version nutzen. Aktualisierst Du den Master, aktualisiere auch die Clients.

(aapsclient-iphone)=
### AAPSClient auf einem iPhone

Im App Store gibt es kein **AAPSClient** und keine fertige Datei zum Herunterladen, deshalb erstellst Du die App selbst:

- Du brauchst einen Mac mit **Xcode** und ein Apple-Entwicklerkonto.
- Das Projekt ist der Ordner `ios` im [AndroidAPS-Repository auf GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- Ein Build für ein echtes iPhone wird mit Deinem eigenen Apple-Entwicklerteam signiert. Ein Build für den iPhone-Simulator braucht das nicht.
- Eine Schritt-für-Schritt-Anleitung gibt es noch nicht. Diese Seite wird aktualisiert, sobald es eine gibt.

Die iPhone-Version koppelt sich wie die anderen mit dem Master. Anders als die Computer-Versionen kann das iPhone den QR-Code des Masters mit seiner Kamera scannen.

## Erster Start: ein kürzerer Einrichtungsassistent

Beim ersten Start führt **AAPSClient** denselben **Einrichtungsassistenten** aus, den Du von **AAPS** kennst, aber mit viel weniger Schritten. Auf einem Follower werden kein Profil, kein Insulin, keine Pumpe, kein APS und keine Ziele eingerichtet:

1. **Willkommen**, **Lizenzvereinbarung**, **Berechtigungen** und **Master-Passwort** – genau wie in der Haupt-App, siehe [AAPS Einrichtungsassistent](../SettingUpAaps/SetupWizard.md).
2. Der Client fragt **nicht** nach den **Einheiten** oder den **unteren/oberen Grenzen**: Er übernimmt sie vom Haupt-Smartphone, sobald er mit Nightscout verbunden ist. Du siehst sie später in den **Einstellungen**. Dort zeigt ein kleines **Smartphone-Symbol**, dass sie [mit dem Haupt-Smartphone abgeglichen](#client-master-config-prefs) werden. Ändern kannst Du sie nur, wenn der Master erreichbar ist.
3. **Vom Master aus einrichten** – öffne auf dem Master **Verwalten → Autorisierte Clients**, füge dieses Smartphone mit einem **QR-Code** hinzu und tippe hier auf **QR-Code scannen**. Ein einziger Scan richtet Nightscout mit einem eigenen Token für dieses Smartphone ein und koppelt es auch gleich, wenn es ein Code zum Koppeln ist. Das Smartphone übernimmt außerdem den Namen, mit dem es auf dem Master hinzugefügt wurde, als Namen dieser Instanz (Buchstaben mit Akzent werden zu einfachen Buchstaben, aus „Miloš“ wird „Milos“). **Nach dem Scan ist die Einrichtung abgeschlossen**: Der Assistent schließt sich, weil die nächsten Schritte nur noch zeigen würden, was der Code schon erledigt hat. Ohne QR-Code überspringst Du diesen Schritt. (Nicht auf einem Computer: Er hat keine Kamera, siehe [Die App bekommen](#aapsclient-platforms).)

   ![The Set up from the master step with the Scan the QR code button](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Kommunikation** – die Liste bietet nur die Module an, die ein Follower braucht (NSClientV3, xDrip+, Wear, External Companion Apps, Garmin). Wenn Du keinen QR-Code gescannt hast, aktiviere **NSClientV3** und trage **dieselbe Nightscout-URL** wie auf dem Haupt-Smartphone sowie ein Zugriffstoken ein, mit eingeschalteten **Websockets** – genau wie unter [Synchronisation](#RemoteControl_aapsclient) beschrieben.

   ![Communication step on the client](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Mit Master koppeln** – diesen Schritt gibt es **nur** auf dem Client. Er verbindet dieses Gerät mit der PIN über den sicheren Befehlskanal mit dem Master und übernimmt, wie der QR-Code, den Namen, mit dem das Smartphone auf dem Master hinzugefügt wurde. **Nach der Kopplung ist die Einrichtung abgeschlossen.** Du kannst den Schritt auch überspringen und jederzeit später über **Verwalten → Mit Master koppeln** koppeln.

   ![Pair with master step in the client wizard](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Wer nutzt dieses Smartphone?** – nur, wenn Du im Assistenten nicht gekoppelt hast: der Name der Person, die dieses Smartphone nutzt. Daran wird diese Instanz in Berichten und bei der Synchronisation erkannt.

(aapsclient-pairing-with-the-master)=

## Mit dem Master koppeln

Öffne auf dem **Master** **Verwalten → Autorisierte Clients** und füge einen Client hinzu. Es gibt zwei Wege zu koppeln:

- **Mit einem QR-Code** (am schnellsten, wenn das Smartphone eine Kamera hat): Scanne den Code im Schritt „**Vom Master aus einrichten**“ des Assistenten oder über **Verwalten → Mit Master koppeln → QR-Code scannen** und bestätige mit „**Verwenden**“. Damit wird auch Nightscout eingerichtet.
- **Mit der PIN**: Öffne auf dem **Client** den oben beschriebenen Schritt des Assistenten (oder **Verwalten → Mit Master koppeln**), gib die Einmal-PIN ein, die der Master anzeigt, und tippe auf „**Koppeln**“. Der Client zeigt dann an, wem er vertrauen wird. Bestätige mit „**Koppeln**“:

![Confirmation on the client before completing the pairing](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Im Assistenten schließt eine erfolgreiche Kopplung die Einrichtung ab und öffnet den Startbildschirm. Auf dem Master erscheint der Client in der Liste [Autorisierte Clients](#client_master_master_setup) als **Aktiv**. Danach zeigt **Verwalten → Mit Master koppeln** „*Bereits gekoppelt*“, die Rolle des Smartphones und ob der geschützte Modus eingeschaltet ist:

![Manage → Pair with master on a paired client: Already paired, Role: Caregiver, Hardened mode on](../images/v4/ClientMaster/pair_with_master_client.png) Den vollständigen Ablauf der Kopplung, Hinweise zur Sicherheit und die Fehlerbehebung findest Du unter [Master ↔ Client-Steuerung](#client_master_client_setup).

Nach der Kopplung bekommt der Client vom Master ein eigenes Nightscout-Token (wenn der Master ein Admin-Token hat), das nur die Rechte hat, die ein Client braucht. Ein Token, das Du vielleicht eingetragen hast, verwendet er dann nicht mehr. **AAPSClient** schreibt selbst nie Behandlungen oder BZ-Werte in Nightscout: Alles, was die App tut, wird an den Master gesendet, und der schreibt es. Siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token).

Was dieses Smartphone tun darf, legt der Master über seine **[Rolle](#client-master-control-roles)** fest (Schreibgeschützt, Mahlzeiten, Betreuer oder Administrator). **Verwalten → Mit Master koppeln** zeigt die Rolle des Smartphones an.

## Der Startbildschirm

Der Startbildschirm des Clients spiegelt den Loop, dem er folgt:

![AAPSClient home screen](../images/v4/AapsClient/aapsclient_home.png)

- **BZ, Diagramme, IOB/COB und Profil** kommen aus Nightscout, so wie der Master sie hochgeladen hat.
- Der angezeigte **Loop-Status** ist der des **Masters** (ein Client hat keinen eigenen Loop). Bis der Client den AAPS-Modus des Masters aus Nightscout bekommen hat, zeigt die Anzeige des AAPS-Modus ein **Fragezeichen** (unbekannt).
- Die **Statuskarte** zeigt Reservoir und Batterie der **Pumpe, der gefolgt wird**, sowie die Batterie des Uploaders aus dem Gerätestatus in Nightscout. Ein Client hat keine Pumpe, deshalb gibt es in der App keinen lokalen Pumpenstatus und nirgends eine Pumpenverwaltung.
- Die untere Navigationsleiste bietet **Behandlungen**, **Szenen** und **Verwalten**, sobald der Client gekoppelt ist (vor der Kopplung nur **Verwalten**). Reiter für Pumpe oder Ziele gibt es nicht.

## Behandlungen und Aktionen

Alles unter **Verwalten** funktioniert wie in der Haupt-App, mit einem wichtigen Unterschied: Auf einem Client sind Aktionen, die die Therapie ändern würden (Bolus, Kohlenhydrate, temporäre Ziele, Szenen …), **ausgeblendet, bis das Gerät gekoppelt ist**. Danach werden sie zur Bestätigung und Ausführung **an den Master weitergeleitet**, siehe [Remote-Steuerung nutzen](#client-master-control).

Eine Ausnahme ist der Eintrag **Profil**: Er wird auch auf einem **nicht gekoppelten** Client angezeigt, öffnet sich aber **nur zum Ansehen**. Der Client zeigt die Profile, die er über Nightscout bekommt (er braucht sie für seine eigenen Berechnungen), ohne Knöpfe zum Bearbeiten oder Aktivieren. Sobald der Client **gekoppelt** ist, wird die Profilliste mit dem Master abgeglichen, und Du kannst Profile vom Client aus bearbeiten und aktivieren, wie jede andere Remote-Aktion.

Auf einem **nicht gekoppelten** Client bietet **Verwalten** nur **Profil** und **Mit Master koppeln** an:

![The Manage screen on an unpaired client: only Profile and Pair with master](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Der rote Hinweis „*Master-Gerät nicht erreichbar. Bearbeiten ist deaktiviert, bis die Verbindung wiederhergestellt ist.*“ erscheint auch auf einem nicht gekoppelten Client. Das ist so gewollt: Es gibt noch keinen Master, der erreichbar sein könnte. Der Hinweis verschwindet, sobald der Client gekoppelt und der Master online ist.

Sobald der Client gekoppelt ist, erscheinen die Aktionen für die Therapie:

![The Manage screen on a paired client, including the Pair with master entry](../images/v4/AapsClient/aapsclient_manage.png)

Es gibt **keinen Eintrag Pumpe**, denn ein Client hat keine Pumpe.

Ist der Master nicht erreichbar, erscheint derselbe Hinweis auch auf einem gekoppelten Client: Die Aktionen für die Therapie sind ausgegraut, und alles, was Du versuchst, wird blockiert, bevor es gesendet wird. Der Client bemerkt, dass der Master offline ist, wenn Du eine Aktion versuchst, und gibt die Aktionen wieder frei, sobald der Master wieder online ist.

![The Manage screen on a paired client while the master is offline: actions greyed out under the banner](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Mit dem Master abgeglichene Einstellungen

Die aktive **Konfiguration** der Module und viele **Einstellungen** werden zwischen dem Master und seinen gekoppelten Clients abgeglichen. Abgeglichene Einträge sind mit einem kleinen **Smartphone-Symbol** markiert und gesperrt (mit dem Hinweis „*Master-Gerät nicht erreichbar*“), solange der Master nicht erreichbar ist. Das wird unter [Konfiguration und Einstellungen ändern](#client-master-config-prefs) beschrieben.

## AAPSClient auf einer Smartwatch

Eine Wear OS-Smartwatch kann mit dem **Client**-Smartphone gekoppelt werden. Ihre Aktionen werden über den Client an den Master weitergeleitet. Siehe [Wear OS](../WearOS/WearOsSmartwatch.md) und die [Smartwatch-Optionen unter AAPS remote steuern](#RemoteControl_smartwatches).
