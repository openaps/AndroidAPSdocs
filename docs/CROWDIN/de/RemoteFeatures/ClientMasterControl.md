(client-master-control)=
# Master ↔ Client-Steuerung (signierte Fernsteuerung)

Ab **AAPS** Version 4 kann ein Follower-Smartphone mit **AAPSClient** viel mehr, als Behandlungen nur über Nightscout *anzukündigen*: Sobald es mit dem Haupt-Smartphone **gekoppelt** ist, kann es **signierte Befehle** senden, die das Haupt-Smartphone (der **Master**) prüft, bestätigt und ausführt. Dazu gehört auch die Abgabe eines **Insulinbolus** über die Pumpe des Masters.

Diese Seite erklärt, wie das funktioniert und wie Du es einrichtest und nutzt.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Master** = das Haupt-Smartphone mit **AAPS**, das mit der Pumpe verbunden ist und den Loop ausführt (die `full`-App).
- **Client** = ein Smartphone mit **AAPSClient** ohne Pumpe, das dem Master folgt und ihn jetzt auch *steuert*.
- Beide Smartphones müssen mit **derselben Nightscout**-Seite verbunden sein. Die gesamte Kommunikation läuft weiterhin über Nightscout. Eine direkte Verbindung zwischen den Smartphones ist nicht nötig.
```

---

## So funktioniert es

```{admonition} Coming from AAPS v3?
:class: note
In **AAPS** v3 konnte **AAPSClient** nur unsignierte Careportal-Behandlungen in Nightscout schreiben und keinen Bolus abgeben. Für die Fernsteuerung ist jetzt eine einmalige [Kopplung](#client_master_master_setup) nötig. Siehe auch [Änderungen mit AAPS Version 4](#v4changes-remote-control).
```

**AAPS** v4 verwendet dafür einen eigenen Kanal **Client-Control**. Er läuft weiterhin über Deine Nightscout-Seite (in der Collection `settings`), aber jede Nachricht ist mit einem Secret **kryptografisch signiert**, das nur die beiden Smartphones kennen. Das Secret wird einmal bei der **Kopplung** übergeben und gleich danach durch ein neues ersetzt. So wird es nie im Klartext übertragen.

Der Grundsatz lautet: **Der Master hat das Sagen**:

1. Der Client sendet eine *Absicht* („Bolus 2 IE“, „Szene Sport starten“, „dieses temporäre Ziel setzen“ …).
2. Der **Master** berechnet die Aktion neu und **begrenzt** sie anhand seiner **eigenen** aktuellen Daten (Profil, IOB, COB, aktuelles temporäres Ziel, Pumpe). Er **formuliert die genaue Bestätigung**, die der Nutzer sieht.
3. Der Client (oder die Smartwatch) zeigt den Bestätigungstext des **Masters** an und erstellt nie einen eigenen.
4. Nach der Bestätigung **führt der Master die Aktion einmal aus** und meldet das Ergebnis an den Client zurück.

Was das für Dich bedeutet:

- **Signierte Befehle**: Nur Clients, die Du gekoppelt hast, können Befehle senden (eigenes Kopplungs-Secret und eigene Signatur je Client). Alte oder wiederholt gesendete Befehle werden abgelehnt.
- **Eine Rolle für jeden Client**: Du legst fest, was jeder Client darf, von *Schreibgeschützt* bis *Administrator*. Siehe [Client-Rollen](#client-master-control-roles).
- **Insulinbolus vom Client**: Der Master gibt ihn über seine Pumpe ab, und der Client zeigt den Fortschritt der Abgabe an.
- **Der Master entscheidet**: Er begrenzt jede Aktion anhand seiner eigenen Grenzwerte und formuliert die Bestätigung, die der Client anzeigt.
- **Nur gekoppelte Clients ändern die Therapie**: Solange die Client-Steuerung eingeschaltet ist, übernimmt der Master keine Behandlungen oder Änderungen mehr, die direkt in Nightscout eingegeben werden. Siehe [Geschützter Modus](#client-master-control-hardened-mode).
- **Jeder Client bekommt ein eigenes Nightscout-Token** mit genau den Rechten, die ein Client braucht. Siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token).
- **Master offline**: Aktionen werden mit einer klaren Meldung blockiert.
- **Einen Client sperren** geht mit einem Tippen (je Client). Alternativ stoppst Du mit dem Schalter am Master alle Clients.

Diese Aktionen kann ein Client auslösen: **Bolus**, **Kohlenhydrate / eCarbs**, **temporäres Ziel** (setzen und abbrechen), **Profilwechsel**, Wechsel von **Loop / AAPS-Modus**, **temporäre Basalrate** (setzen und abbrechen), **verzögerter Bolus** (setzen und abbrechen), **Insulinauswahl** und **[Szenen](../DailyLifeWithAaps/Scenes.md)**. Außerdem wird ein Teil der **Einstellungen** in beide Richtungen zwischen Master und Clients abgeglichen.

---

## Rollen und Voraussetzungen

```{admonition} Before you start
:class: important
- Auf dem **Master** läuft die normale `full`-Version von **AAPS**, und er ist mit Deiner Pumpe verbunden.
- Der **Master** nutzt **NSClientV3** mit Deinem Nightscout und zeigt *verbunden* an. Gib ihm ein **Admin-Token** Deines Nightscout: Damit kann der Master für jeden Client ein eigenes Token erstellen und es dem Client als QR-Code zeigen.
- Auf dem **Client** läuft **[AAPSClient](AapsClient.md)** (oder **AAPSClient2** / **AAPSClient3** für weitere Patienten, siehe [Über AAPSClient, AAPSClient2 und AAPSClient3](#remotecontrol-aapsclient-versions)). Er muss **dasselbe** Nightscout verwenden. Wenn Du ihn mit dem QR-Code des Masters einrichtest, bekommt der Client Nightscout-Adresse und Token vom Master. Andernfalls richte zuerst selbst **NSClientV3** auf ihm ein.
- Auf beiden Smartphones werden **Websockets** gebraucht: Befehle erreichen den Master nur über die Websocket-Verbindung. Solange die Client-Steuerung eingeschaltet ist, lässt **AAPS** die Websockets auf dem Master und auf gekoppelten Clients eingeschaltet.
```

Kopplung und Synchronisation sind zwei verschiedene Dinge:

- Die **Synchronisation** (Daten: BZ, Behandlungen, Profil) richtest Du wie bisher ein, siehe [Synchronisation](#RemoteControl_aapsclient). Das kann der QR-Code des Masters auf dem Client für Dich erledigen.
- Die **Kopplung** (Steuerung: der hier beschriebene signierte Befehlskanal) ist der neue Schritt weiter unten.

---

## Einrichtung

(client_master_master_setup)=
### 1. Auf dem Master: Steuerung einschalten und Client hinzufügen

Öffne auf dem Master das Fenster **Bearbeiten** und wähle **Autorisierte Clients**.

Schalte **Client-Steuerung erlauben** ein (standardmäßig ist das **aus**). Das ist der Hauptschalter des Masters: Ist er aus, kann kein Client Befehle senden. Deine gekoppelten Clients bleiben aber erhalten, sodass Du ihn später wieder einschalten kannst. Beim Einschalten wird auch der [Geschützte Modus](#client-master-control-hardened-mode) aktiviert. Er wird als „*Geschützter Modus aktiviert*“ angezeigt, mit einem **(i)**, das ihn erklärt. Im [Einfachen Modus](#preferences-simple-mode) ist die Client-Steuerung immer eingeschaltet, deshalb wird der Schalter dort nicht angezeigt.

![Authorized clients screen on the master](../images/v4/ClientMaster/authorized_clients_master.png)

Tippe auf den Knopf **+** (unten rechts), um einen Client hinzuzufügen. Im Dialog **Client hinzufügen**:

1. Gib einen **Gerätenamen** ein, damit Du den Client in der Liste wiedererkennst.
2. Wähle, **wie das Smartphone eingerichtet wird** (siehe Tabelle unten).
3. Wähle seine **[Rolle](#client-master-control-roles)**. Es ist nichts vorausgewählt: Welche Rolle passt, hängt davon ab, wer das Smartphone benutzt.

![New client dialog on the master: device name, how the phone is set up, and its role](../images/v4/ClientMaster/new_client_master.png)

| Weg                                  | Was das neue Smartphone bekommt                                                              | Verwenden, wenn                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **QR-Code: Nightscout und Kopplung** | die Nightscout-Adresse, sein eigenes Nightscout-Token und die Kopplung, alles mit einem Scan | das neue Smartphone eine Kamera hat: der schnellste Weg, nichts muss eingetippt werden                                      |
| **QR-Code: nur Nightscout**          | die Nightscout-Adresse und sein eigenes Nightscout-Token, keine Kopplung                     | das Smartphone Daten nur **anzeigen** und nie Befehle senden soll                                                           |
| **PIN**                              | nur die Kopplung; die vorhandenen Nightscout-Einstellungen bleiben                           | das Smartphone keine Kamera hat (oder der Master keine Token erstellen kann); es muss bereits mit Nightscout verbunden sein |

Für die beiden QR-Code-Wege braucht der Master ein **Admin-Token** in seinen **NSClientV3**-Einstellungen, weil er das Token des Clients in Nightscout erstellt. Ohne Admin-Token werden die QR-Code-Optionen zwar angezeigt, lassen sich aber nicht auswählen, und der Dialog nennt den Grund. Die **PIN** funktioniert immer.

#### Mit einem QR-Code

Tippe auf **OK**: Der Master erstellt das Nightscout-Token des Clients und zeigt einen **QR-Code** an. Ein Code, der auch koppelt, gilt etwa **zwei Minuten**. Der Bildschirm zählt herunter und schließt sich von selbst, sobald der Client gekoppelt ist. Scanne ihn auf dem neuen Smartphone, wie unter [Auf dem Client](#client_master_client_setup) beschrieben.

```{admonition} The QR code is a secret
:class: warning
Wer den QR-Code sieht, kann Dein Nightscout lesen. Ein Code, der koppelt, enthält außerdem die Kopplung. Zeige ihn nur dem neuen Smartphone. **AAPS** verhindert Screenshots, solange der Code angezeigt wird.
```

![The master's QR code screen with its countdown (code blurred)](../images/v4/ClientMaster/qr_code_master.png)

#### Mit einer PIN

Tippe auf **OK**: Der Master zeigt eine 8-stellige **Kopplungs-PIN** an, in zwei Vierergruppen (zum Beispiel `1234 5678`). Diese PIN gilt **nur einmal** und **läuft nach etwa zwei Minuten ab**. Wie beim QR-Code lehnt der Master einen Client-Namen ab, der schon in seiner Liste steht: Jeder Client bekommt unter seinem Namen sein eigenes Nightscout-Token.

![Master pairing screen showing the one-time PIN (the PIN shown here is expired)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
Die PIN schützt das Kopplungs-Secret, das über Nightscout ausgetauscht wird. Gib sie nur an das Gerät weiter, das Du koppelst, veröffentliche sie nicht und lass sie ablaufen, wenn Du sie nicht verwendest. Eine neue PIN bekommst Du jederzeit, indem Du noch einmal auf **+** tippst.
```

(client_master_client_setup)=
### 2. Auf dem Client: mit dem Master koppeln

#### Den QR-Code scannen

Du kannst den QR-Code des Masters an zwei Stellen scannen:

- im **Einrichtungsassistenten** des Clients, im Schritt „**Vom Master aus einrichten**“, der vor dem Nightscout-Schritt kommt. Ein Scan richtet dann Nightscout ein und bei einem Code, der koppelt, auch die Kopplung. Damit ist die Einrichtung fertig: Der Assistent schließt sich und der Startbildschirm öffnet sich;
- jederzeit später über **Bearbeiten → Mit Master koppeln → QR-Code scannen**.

Beim ersten Mal fragt **AAPSClient** nach der Berechtigung für die **Kamera**. Lehnst Du sie ab, weist der Bildschirm darauf hin, dass die Kamera gebraucht wird. Du kannst sie dann mit **Erneut versuchen** erlauben oder stattdessen mit der PIN koppeln.

Richte die Kamera auf den Code. Der Client zeigt an, was der Code bewirkt (die Nightscout-Adresse und bei einem Code, der koppelt, den Master, mit dem gekoppelt wird) und fragt „**Diesen Code verwenden?**“. Tippe auf **Verwenden**: Der Client schaltet **NSClientV3** ein, ersetzt seine Nightscout-Adresse und sein Token durch die aus dem Code und schaltet die Websockets ein. Ein Code, der koppelt, koppelt das Smartphone auch gleich. Es meldet sich beim Master, sobald es mit Nightscout verbunden ist.

![The client's Set up from the master wizard step](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
Unter iOS gibt es den Scanner noch nicht, und ein Desktop-Rechner hat keine Kamera: Verwende dort die PIN.
```

#### Die PIN eingeben

Öffne auf dem Client **Bearbeiten → Mit Master koppeln** (oder den Assistentenschritt **Mit Master koppeln** nach dem Nightscout-Schritt), **gib die 8-stellige PIN ein**, die der Master anzeigt, und tippe auf **Koppeln**. Der Client holt mit der PIN das Kopplungsangebot sicher über Nightscout ab, fragt dann „**Mit diesem Master koppeln?**“ und zeigt die Kennung des Masters an. Tippe zur Bestätigung auf **Koppeln** (einen Screenshot findest Du unter [Mit dem Master koppeln](#aapsclient-pairing-with-the-master)).

![Pair-with-master screen on the client before pairing — enter the PIN here](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Nach der Kopplung

Sobald ein Client gekoppelt ist, sendet er ein **Hello** an den Master und erscheint in dessen Liste **Autorisierte Clients** als **Aktiv**, mit dem Zeitpunkt *„zuletzt gesehen“*. Der Client kennt seine [Rolle](#client-master-control-roles) aus der Kopplung und zeigt deshalb sofort die passenden Knöpfe an. Eine Kopplung im Einrichtungsassistenten schließt den Assistenten ab. Im selben Schritt ersetzen die beiden Smartphones das Kopplungs-Secret durch ein neues, das nie übertragen wurde (siehe [Hinweise zur Sicherheit](#client-master-control-security)). Ein Client, der mit der PIN eingerichtet wurde, bekommt dabei sein eigenes Nightscout-Token (siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token)). Ein Client kann immer nur mit **einem** Master gekoppelt sein. Um ihn mit einem anderen Master zu koppeln, wähle zuerst **Entkoppeln**.

![Pair-with-master screen on the client (already-paired state)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Clients verwalten

Auf dem Bildschirm **Autorisierte Clients** des Masters kannst Du jederzeit:

- die **Rolle eines Clients ändern**, mit der Reihe aus vier Knöpfen unter seinem Namen. Die neue Rolle gilt sofort, ohne erneute Kopplung.
- **sehen, mit welchem Nightscout-Token** ein Client schreibt: „*Eigenes Nightscout-Token*“ ist das, was Du willst. Eine rote Zeile „*Verwendet das Nightscout-Token …, das mehr Rechte hat, als ein Client braucht*“ bedeutet, dass der Client noch ein Token mit mehr Rechten verwendet, meist Dein Admin-Token. Siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token).
- einen einzelnen Client **sperren**: Tippe auf das **Papierkorb**-Symbol daneben. Der Client kann dann keine Befehle mehr senden, bis er erneut gekoppelt wird. Auch sein eigenes Nightscout-Token wird gelöscht, sodass er Dein Nightscout nicht mehr lesen kann.
- **die gesamte Steuerung stoppen**, ohne die Kopplungen zu verlieren: Schalte **Client-Steuerung erlauben** aus.

Smartphones, die mit **QR-Code: nur Nightscout** eingerichtet wurden, stehen unter den Clients im Bereich „**Nur Nightscout lesen**“. Für jedes davon kannst Du den QR-Code noch einmal anzeigen (um dasselbe Smartphone erneut einzurichten) oder sein Token löschen. Damit endet sein Zugriff auf Dein Nightscout.

![Authorized clients with a paired client (role buttons, own Nightscout token) and a phone under Read Nightscout only](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Client-Rollen

Jeder gekoppelte Client hat eine **Rolle**. Der Master prüft sie bei jedem Befehl, und der Client zeigt nur an, was seine Rolle erlaubt. Eine neue Rolle gilt sofort, ohne erneute Kopplung. Die Rollen bauen aufeinander auf: Jede kann alles, was die vorherige kann.

| Rolle                | Der Client darf                                                                                                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schreibgeschützt** | nur Daten anzeigen. Er bleibt gekoppelt und ist damit bereit, wenn Du ihm eine höhere Rolle gibst.                                                                                                                                                                          |
| **Mahlzeiten**       | einen Bolus abgeben, den Bolus-Rechner und QuickWizard nutzen, Kohlenhydrate eingeben und einen laufenden Bolus stoppen. Hier eingegebene Kohlenhydrate können dazu führen, dass der Loop mehr Insulin abgibt.                                                              |
| **Betreuer**         | alles tun, was ein Nutzer in **AAPS** tut: temporäre Ziele, Profil- und Insulinwechsel, Loop-Modus, temporäre Basalrate, verzögerter Bolus, Szenen, Careportal-Ereignisse, Kalibrierungen und das Entfernen von Einträgen. Einstellungen und Vorlagen kann er nicht ändern. |
| **Administrator**    | alles tun, einschließlich Einstellungen und Vorlagen (QuickWizard, Vorlagen für temporäre Ziele, Szenen, Profile, Automatisierung, Insulin).                                                                                                                                |

Das **(i)** oben auf dem Bildschirm **Autorisierte Clients** zeigt dieselbe Erklärung. Auf dem Client zeigt **Bearbeiten → Mit Master koppeln** die eigene Rolle des Smartphones an.

---

(client-master-control-hardened-mode)=
## Geschützter Modus

Wenn **Client-Steuerung erlauben** eingeschaltet ist, läuft der Master im **geschützten Modus**: Er übernimmt Änderungen nur von gekoppelten Clients. Er übernimmt **keine** Behandlungen, temporären Ziele, Profilwechsel, Wechsel des AAPS-Modus oder Löschungen, die direkt in Nightscout vorgenommen werden, zum Beispiel auf der Nightscout-Website oder in anderen Apps.

- Die Einstellungen zum Übernehmen von Daten aus Nightscout (**NSClientV3 → Synchronisierung**) sind im geschützten Modus ausgeblendet. **AAPS** behandelt sie so, als wären sie ausgeschaltet.
- Der Master **lädt** weiterhin alle seine Daten zu Nightscout hoch, BZ eingeschlossen, und lässt die **Websockets** eingeschaltet.
- Bezieht der Master seine **BZ-Werte aus Nightscout**, übernimmt er sie weiterhin von dort.
- Um die Historie auf einen **neuen** Master zu laden, nutze **Vollständige Synchronisierung** in **NSClientV3**: Sie übernimmt alles, was in Nightscout liegt, auch die Profile.
- [SMS-Befehle](SMSCommands.md) sind davon nicht betroffen.

Ein gekoppelter Client folgt dem geschützten Modus des Masters: Er lässt die Websockets eingeschaltet, und dieselben Nightscout-Einstellungen sind auf ihm ausgeblendet. Ein nicht gekoppelter Client behält seine eigenen Einstellungen.

Der [Einfache Modus](#preferences-simple-mode) schaltet den geschützten Modus immer ein. Um ihn auszuschalten, verlasse den Einfachen Modus und schalte auf dem Master **Client-Steuerung erlauben** aus.

```{admonition} Why hardened mode
:class: note
Alles, was ein gekoppelter Client sendet, ist signiert und wird vom Master geprüft und bestätigt. Bei einer Behandlung, die auf der Nightscout-Website eingegeben wird, ist das nicht so: Jeder mit Schreibrechten auf Dein Nightscout könnte sie anlegen. Im geschützten Modus können nur signierte Befehle ändern, was der Master tut.
```

---

(client-master-control-own-token)=
## Das eigene Nightscout-Token des Clients

Ein Client braucht kein Admin-Token. Er liest Dein Nightscout nur und sendet darüber seine Befehle an den Master. Selbst lädt er nichts hoch. Deshalb gibt der Master jedem Client ein eigenes Nightscout-Token mit genau diesen Rechten:

- alles lesen,
- in die Collection `settings` schreiben, den Kanal zum Master,
- Nightscout-Alarme stummschalten.

Das Token gehört zu einer Nightscout-Rolle namens **`aaps-client`**, die der Master anlegt, wenn er sie zum ersten Mal braucht. Die Rolle und die Token (benannt mit `aaps-` und dem Namen des Clients) findest Du in den **Admin-Werkzeugen** Deiner Nightscout-Seite. Wird die Rolle dort geändert, setzt der Master sie zurück, sobald er das nächste Token erstellt oder Du **Autorisierte Clients** öffnest.

So bekommt ein Client sein Token:

- **Mit einem QR-Code eingerichtet**: Das Token steckt im Code.
- **Mit der PIN gekoppelt** (oder gekoppelt, bevor es diese Funktion gab): Nach der Kopplung schickt der Master dem Client sein eigenes Token verschlüsselt über den gekoppelten Kanal. Der Client prüft zuerst, ob eine Anmeldung damit funktioniert, und verwendet es dann statt seines bisherigen Tokens. Dafür braucht der Master ein Admin-Token. Ohne dieses behält der Client sein Token, und seine Karte auf dem Master zeigt die rote Zeile.

**Ein Client bleibt bei seinem eigenen Token.** Sobald der Master gesehen hat, dass ein Client mit seinem eigenen Token schreibt, nimmt er dessen Befehle nur noch mit diesem Token an. Ein Befehl, der mit einem anderen Token geschrieben wird (zum Beispiel einem Admin-Token, das später im Client eingetragen wurde, oder dem Token eines anderen Clients), wird abgelehnt, obwohl der Client gekoppelt ist. Der Client meldet dann „*Der Master hat den Befehl abgelehnt: Dieses Smartphone schreibt mit einem anderen als dem ihm zugeordneten Token in Nightscout*“. Seine Karte auf dem Master zeigt das in Rot an. Der Client wird weiterhin als online angezeigt, damit Du sehen kannst, was nicht stimmt. Zur Behebung entferne den Client auf dem Master und füge ihn erneut hinzu.

Der Master löscht oder ändert nie ein Nightscout-Token, das er nicht selbst erstellt hat (eines mit anderen Rollen als `aaps-client`): Diese Token gehören Dir. Das eigene Token eines Clients löscht er, wenn Du den Client entfernst.

---

## Fernsteuerung nutzen

### Eine Aktion vom Client auslösen

Bediene den Client genau so wie das Haupt-Smartphone selbst: Öffne **Kohlenhydrate**, **Insulin**, **Temporäres Ziel**, **Profil**, **Szenen**, das Fenster **Bearbeiten** usw. und trage die Werte ein.

Wenn Du bestätigst, zeigt der Client kurz **„Master wird kontaktiert …“** an. Der **Master** berechnet und begrenzt die Aktion, und der Client zeigt dann die **eigene Bestätigung des Masters** an, mit genau den Zeilen, Werten und Farben, die der Master auf seinem eigenen Bildschirm zeigen würde. Prüfe sie und tippe auf **OK**, um fortzufahren.

![A scene confirmation authored by the master and shown on the client](../images/v4/ClientMaster/confirmation_master_authored.png)

Das gilt auch für eine einfache Eingabe von Kohlenhydraten. Die zur Bestätigung angezeigte Menge hat der Master berechnet:

![Carbs confirmation authored by the master](../images/v4/ClientMaster/carbs_confirmation_client.png)

Nach Deiner Bestätigung führt der Master die Aktion einmal aus, und das Ergebnis erscheint wieder auf dem Client.

### Insulinbolus vom Client

Das ist die wichtigste neue Funktion in v4. Ein Bolus, der auf einem Client gestartet wird, wird **vom Master über seine Pumpe abgegeben**. Der Master begrenzt ihn anhand seiner eigenen Grenzwerte, und der Client zeigt währenddessen den **Fortschritt der Abgabe live** an (und einen Alarm, wenn die Pumpe einen Fehler meldet).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Ein Client legt die abgegebene Menge nie selbst fest. Der Master berechnet sie neu und begrenzt sie, Du bestätigst die vom Master formulierte Menge, und erst dann wird sie abgegeben.
```

(clientmastercontrol-when-the-master-is-offline)=
### Wenn der Master offline ist

Ist der Master nicht erreichbar (sein Smartphone ist aus oder im Ruhezustand, nicht mit Nightscout verbunden, oder die Websockets laufen nicht), werden Steueraktionen auf dem Client **blockiert, bevor etwas gesendet wird**, und Du bekommst eine klare Meldung. Nichts wird nur halb ausgeführt.

![Client message when the master is offline](../images/v4/ClientMaster/master_offline_error.png)

Der Client prüft die Erreichbarkeit automatisch erneut und gibt die Steuerung wieder frei, sobald der Master wieder online ist.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (Smartwatch) an einem Client

Eine Smartwatch, die mit einem **Client**-Smartphone gekoppelt ist, leitet ihre Aktionen über den Client an den Master weiter (Smartwatch → Client → Master). Die Smartwatch zeigt die Bestätigungszeilen des **Masters** und das tatsächliche Ergebnis an, genau wie das Smartphone. Die Einrichtung der Smartwatch ändert sich nicht, siehe [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Konfiguration und Einstellungen ändern

Die Kopplung leitet nicht nur einzelne Aktionen weiter. Sie hält auch die **Konfiguration** und viele **Einstellungen** zwischen dem Master und seinen Clients gleich.

### Konfiguration (welche Module aktiv sind)

Die aktiven **Module** (APS-Algorithmus, Empfindlichkeit, Glättung, …) werden auf dem **Master** ausgewählt und auf jeden gekoppelten Client **gespiegelt**. Auf einem Client sind diese Auswahlen im Bildschirm [Konfiguration](#configuration_sync_icon) mit einem kleinen **Smartphone-Symbol** markiert. Änderst Du sie auf dem Master, folgen die Clients automatisch, und umgekehrt.

Auf einem Client erscheint das Smartphone-Symbol bei *Glättung*, *Kalibrierung*, *Erkennung der Insulinempfindlichkeit* und *APS* (vom Master abgeglichen), aber nicht bei *Kommunikation*:

![Configuration list on a client — the mobile icon marks the categories synced with the master](../images/v4/ClientMaster/configuration_client.png)

Verbindungsdaten, die für jedes Gerät eigen sind, werden *nicht* abgeglichen. Das betrifft vor allem die **Nightscout-URL / das Zugriffstoken von NSClient**. Jedes Smartphone hat seine eigenen. Auf einem Client kommen sie aus dem QR-Code des Masters, oder Du trägst sie selbst ein.

### Profile

Auch Deine **Profilliste** wird zwischen dem Master und seinen gekoppelten Clients abgeglichen. Auf einem gekoppelten Client zeigt **Bearbeiten → Profil** dieselben Profile wie der Master. Du kannst ein Profil **bearbeiten** oder **aktivieren**. Wie jeder andere Befehl wird die Änderung an den **Master** gesendet, dort angewendet und zurück abgeglichen.

Wenn Du auf einem neu installierten Client zum ersten Mal ein Profil aktivierst, zeigt er möglicherweise „*Noch kein Insulin in Verwendung*“ an und fordert Dich auf, **das Insulin auszuwählen**. Wähle das Insulin, das auf dem Master aktiv ist (auf dem Master siehst Du es unter **Bearbeiten → Insulineinstellungen**).

Auf einem **nicht gekoppelten** Client gibt es den Profil-Bildschirm weiterhin, aber er ist **nur zum Ansehen**: Der Client zeigt die Profile, die er über Nightscout bekommt (er braucht sie für seine eigenen Berechnungen), aber es gibt keinen Knopf zum Bearbeiten oder Aktivieren. Es gibt ja keinen Master, an den die Änderung gehen könnte.

### Einstellungen

Ein Teil der **Einstellungen** wird **in beide Richtungen** abgeglichen: Du kannst sie **auf dem Master oder auf einem gekoppelten Client** ändern, und die Änderung wird auf die andere Seite übertragen. Änderst Du eine solche Einstellung auf einem Client, wird sie über den signierten Kanal an den Master gesendet, dort angewendet, und der maßgebliche Wert wird zurückgeschickt. Was Du auf dem Client siehst, ist also immer das, was der Master gespeichert hat. Wird dieselbe Einstellung fast gleichzeitig auf zwei Geräten geändert, **gilt die letzte Änderung**. Bei einer Einstellung mit Schieberegler wird der neue Wert gesendet, wenn Du den Finger loslässt.

In den Einstellungen markiert dasselbe kleine **Smartphone-Symbol** die einzelnen Einstellungen, die abgeglichen werden. Im Beispiel unten wird *Maximale Dauer der Essens-Resorption* abgeglichen (Smartphone-Symbol). Einstellungen ohne das Symbol gelten nur auf dem jeweiligen Gerät:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Da der Master über den gespeicherten Wert bestimmt, muss er **erreichbar** sein, wenn Du auf einem Client einen vom Master gesteuerten Konfigurationspunkt oder eine in beide Richtungen abgeglichene Einstellung änderst. Ist der Master offline, sind diese Bedienelemente auf dem Client gesperrt (siehe [Wenn der Master offline ist](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Hinweise zur Sicherheit

```{admonition} How the channel is protected
:class: tip
- **Kopplungs-Secret**: Der Master übergibt es einmal an den Client, entweder durch die PIN geschützt in einem Nightscout-Dokument oder im QR-Code. Beide speichern es verschlüsselt.
- **Ein neues Secret direkt nach der Kopplung**: Die erste Nachricht des Clients nach der Kopplung startet einen Schlüsselaustausch. Ab dann verwenden beide Smartphones ein Secret, das nie übertragen wurde. Ein Secret, das jemand gesehen haben könnte (ein fotografierter QR-Code, ein aus Nightscout gelesenes PIN-Angebot), ist danach nutzlos. Smartphones, die schon vor dieser Funktion gekoppelt waren, machen das nach dem Update einmal.
- **Jeder Befehl ist signiert** (HMAC). Der Master lehnt alles ab, dessen Signatur zu keinem gekoppelten Client passt.
- **Wiederholte Befehle werden verhindert** durch einen fortlaufenden Zähler je Client, und jeder Befehl **verfällt** nach kurzer Zeit.
- **Möglichst wenige Rechte in Nightscout**: Jeder Client hat sein [eigenes Nightscout-Token](#client-master-control-own-token), das nur lesen und in den Kanal für die Client-Steuerung schreiben darf. Sobald der Client es verwendet hat, nimmt der Master seine Befehle nur noch mit diesem Token an. Wird der Client entfernt, wird das Token gelöscht.
- **Nur signierte Änderungen**: Im [geschützten Modus](#client-master-control-hardened-mode) ignoriert der Master Therapieänderungen, die direkt in Nightscout eingegeben werden.
- **Der Master signiert, was er teilt**: Die Einstellungen, die Client-Liste und das Lebenszeichen „Master ist aktiv“, die der Master für seine Clients in Nightscout ablegt, tragen seine Signatur. Ein Client übernimmt sie nur, wenn die Signatur vom Master stammt. Das Token eines anderen Clients kann sie also nicht ändern. Den Schlüssel des Masters lernt der Client bei der Kopplung, bzw. aus dem QR-Code, wenn das Smartphone Nightscout nur liest. Ein abgelehntes Dokument erscheint im NSClient-Protokoll als „*✕ SETTINGS … refused*“.
- **Du behältst die Kontrolle**: Gib jedem Client die [Rolle](#client-master-control-roles), die er braucht, sperre einen Client mit einem Tippen oder schalte mit **Client-Steuerung erlauben** alles ab.
```

```{admonition} After restoring a backup
:class: warning
Wird ein Client aus einer Sicherung wiederhergestellt, die seinen Befehlszähler zurücksetzt, lehnt der Master seine nächsten Befehle als Wiederholungen ab. **Entkoppele ihn und kopple ihn erneut**, dann funktioniert es wieder.
```

---

(client-master-control-troubleshooting)=

## Problembehandlung

| Symptom                                                                                                                                              | Was Du prüfen solltest                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Der Client meldet, dass der **Master offline ist**                                                                                                   | Das Smartphone des Masters ist wach und **AAPS** läuft; beide Smartphones sind in **NSClientV3** verbunden; **Websockets** sind auf beiden eingeschaltet; dieselbe Nightscout-Seite.                                                                                                                                                                                                                                               |
| Der Client meldet, dass er **nicht gekoppelt** ist                                                                                                   | Kopple ihn erneut über **Bearbeiten → Mit Master koppeln**. Prüfe, ob der Client in der Liste **Autorisierte Clients** des Masters als **Aktiv** angezeigt wird.                                                                                                                                                                                                                                                                   |
| Befehl wird vom Master **abgelehnt**                                                                                                                 | Der Master prüft den Befehl erneut gegen seinen aktuellen Zustand, z. B. existiert das gewählte Profil nicht mehr oder der Pumpentyp passt nicht. Prüfe das auf dem Master.                                                                                                                                                                                                                                                        |
| Befehle funktionieren, sind aber **langsam**                                                                                                         | Schalte auf beiden Smartphones die **Websockets** ein (sonst greifen die Apps auf eine langsamere, regelmäßige Abfrage zurück).                                                                                                                                                                                                                                                                                                    |
| Die Kopplung wird abgebrochen mit *„Das Kopplungs-Secret konnte nicht gespeichert werden“*                                                           | Es wurde nichts geändert. Starte die Kopplung erneut. Schlägt sie weiter fehl, starte **AAPSClient** neu und versuche es noch einmal.                                                                                                                                                                                                                                                                                              |
| Nach der Kopplung passiert nichts                                                                                                                    | Stelle sicher, dass **Client-Steuerung erlauben** auf dem Master EINGESCHALTET ist und der Master mit Nightscout verbunden ist.                                                                                                                                                                                                                                                                                                    |
| Die QR-Code-Optionen lassen sich im Dialog **Client hinzufügen** nicht auswählen                                                                     | Der Dialog nennt den Grund. *Kein Admin-Token*: Gib dem Master ein Admin-Token Deines Nightscout oder füge den Client mit der **PIN** hinzu. *Nicht verbunden*: Warte, bis der Master in **NSClientV3** *verbunden* anzeigt.                                                                                                                                                                                                       |
| *„Nightscout hat bereits ein Token mit diesem Namen und anderen Rechten“*                                                                            | Eines Deiner eigenen Nightscout-Token heißt `aaps-` plus diesem Namen. Wähle einen anderen Namen für den Client.                                                                                                                                                                                                                                                                                                                   |
| *„Ein Client mit diesem Namen ist bereits in der Liste“*                                                                                             | Wähle einen anderen Namen oder entferne zuerst diesen Client.                                                                                                                                                                                                                                                                                                                                                                      |
| Der Client meldet *„Dieser Code stammt von einer anderen AAPS-Version“*                                                                              | Master und Client müssen **dieselbe** Version von **AAPS** verwenden. Aktualisiere das ältere Gerät.                                                                                                                                                                                                                                                                                                                               |
| Der Client meldet *„Dieser Code ist abgelaufen“*                                                                                                     | Ein Code, der koppelt, gilt etwa zwei Minuten. Füge den Client auf dem Master erneut hinzu, um einen neuen Code zu bekommen.                                                                                                                                                                                                                                                                                                       |
| Der Client meldet *„Dieses Smartphone ist bereits gekoppelt“*                                                                                        | Entkoppele es zuerst (**Bearbeiten → Mit Master koppeln → Entkoppeln**) und scanne dann erneut. Ein Code **nur Nightscout** funktioniert auch auf einem gekoppelten Smartphone.                                                                                                                                                                                                                                                    |
| Der Client meldet *„Der Master hat den Befehl abgelehnt: Dieses Smartphone schreibt mit einem anderen als dem ihm zugeordneten Token in Nightscout“* | Der Client hat vorher sein eigenes Nightscout-Token verwendet und schreibt jetzt mit einem anderen, zum Beispiel nachdem ein Token in seine Nightscout-Einstellungen eingetragen wurde. Entferne den Client auf dem Master und füge ihn erneut hinzu (siehe [Das eigene Nightscout-Token des Clients](#client-master-control-own-token)).                                                                                          |
| Das NSClient-Protokoll auf dem Client zeigt *„✕ SETTINGS … refused“*, und seine Einstellungen folgen dem Master nicht mehr                           | Jemand anderes hat das Einstellungsdokument des Masters geschrieben, oder der Master hat einen neuen Schlüssel (zum Beispiel, nachdem seine Daten gelöscht wurden). Ein gekoppelter Client übernimmt einen neuen Schlüssel von selbst, wenn er sich das nächste Mal mit Nightscout verbindet. Ein Smartphone, das Nightscout nur liest, braucht noch einmal den QR-Code des Masters (**Nur Nightscout lesen → QR-Code anzeigen**). |
| Die Karte des Clients zeigt *„Verwendet das Nightscout-Token …“* in Rot                                                                              | Der Client schreibt noch mit einem Token, das mehr Rechte hat, als er braucht. Der Master schickt ihm nach der Kopplung sein eigenes Token, aber nur, wenn der Master ein Admin-Token hat. Prüfe das Token des Masters oder richte den Client noch einmal mit einem QR-Code ein.                                                                                                                                                   |
| Ein Client kann Nightscout nicht mehr lesen                                                                                                          | Sein Token wurde gelöscht, zum Beispiel weil der Client auf dem Master entfernt wurde. Füge ihn erneut hinzu.                                                                                                                                                                                                                                                                                                                      |
| Auf der Nightscout-Website eingegebene Behandlungen werden nicht übernommen                                                                          | Im [geschützten Modus](#client-master-control-hardened-mode) ist das so gewollt: Gib sie stattdessen auf einem gekoppelten Client ein.                                                                                                                                                                                                                                                                                             |

Bei Problemen mit Nightscout oder der Synchronisation lies zuerst [Fehlerbehebung für NSClient](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
