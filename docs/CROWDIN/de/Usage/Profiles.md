(Profiles-profile-switch)=

# Profilwechsel

Dokumentation zu Profilen im Allgemeinen finden sich unter [Konfiguration - Profil](Config-Builder-profile).

Wenn Du Dein AndroidAPS startest und Dein Profil auswählst, musst Du einen "Profilwechsel" mit einer Dauer von 0 durchführen (wird später erklärt). Wenn Du das machst, beginnt AAPS damit, die Historie der Profile zu verfolgen und jede Änderung am Profil erfordert einen erneuten Profilwechsel, auch dann, wenn Du den Inhalt eines Profils in NS änderst. Ein geändertes Profil wird sofort an AAPS übertragen, aber Du musst dieses Profil aktivieren, damit die Änderungen aktiv werden.

AAPS erzeugt intern eine Momentaufnahme des Profils mit dem Startdatum und der Dauer und verwendet es für den angegebenen Zeitraum.

* Eine Dauer von 0 bedeutet unendlich. Dadurch ist dieses Profil bis zu einem erneuten Profilwechsel aktiv.
* Dauer von x Minuten bedeutet x Minuten Verwendung dieses Profils. Nach Ablauf dieser Dauer wird das Profil wieder auf das zuvor aktive Profil zurückgestellt.

Wenn Du Dein Profil in der Registerkarte "lokales Profil" bearbeitet hast, kannst Du das Profil dort aktivieren, was gleichzeitig einen Profilwechsel bewirkt.

Drücke lange auf den Namen Deines Profils ("Tuned 03/11" im Bild unten), um einen Profilwechsel durchzuführen.

![Profilwechsel durchführen](../images/ProfileSwitch_HowTo.png)

Bei einem Profilwechsel kannst Du zwei zusätzliche Optionen wählen, die früher Teil des Zirkadianen Prozent-Profils waren:

## Prozentsatz

* Wendet den gleichen Prozentsatz auf alle Parameter des Profils an. 
* Wenn du ihn auf 130% setzt (was bedeutet, dass du eine 30% höhere Insulinresistenz hast), wird es die Basalrate um 30% erhöhen. Es senkt auch ISF und IC entsprechend (in diesem Beispiel werden sie durch 1,3 geteilt).
  
  ![Beispiel Profilwechsel mit Prozentsatz](../images/ProfileSwitchPercentage.png)

* Das wird an die Pumpe gesendet und ist dann die standardmäßig verwendete Basalrate.

* Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So können zum Beispiel unterschiedliche prozentuale Profile für die verschiedene Phasen des hormonellen Zyklus eingerichtet werden.

(Profiles-time-shift)=

## Zeitverschiebung

![Prozentsatz für Profilumschaltung und Zeitverschiebung](../images/ProfileSwitchTimeShift2.png)

* Verschiebt alles um die Anzahl der eingegebenen Stunden. 
* So kannst du zum Beispiel bei Nachtschichten angeben, wie viele Stunden später / früher du zu Bett gehst oder aufstehst.
* Es geht immer um die Frage, die Profileinstellungen welcher Uhrzeit die aktuellen ersetzen sollen. Diese Uhrzeit muss um x Stunden verschoben werden. Achte daher auf die Richtung der Zeitverschiebung wie im folgenden Beispiel beschrieben: 
  * Aktuelle Zeit: 12:00
  * **Positive** Zeitverschiebung 
    * 2:00 **+10 h** -> 12:00
    * Die Einstellungen von 2:00 Uhr werden anstelle der normalerweise um 12:00 Uhr programmierten Einstellungen verwendet.
  * **Negative** Zeitverschiebung 
    * 22:00 **-10 h** -> 12:00
    * Die Einstellungen von 22:00 Uhr werden anstelle der normalerweise um 12:00 Uhr programmierten Einstellungen verwendet.

![Richtung der Zeitverschiebung für Profile](../images/ProfileSwitch_PlusMinus2.png)

Der Mechanismus, dass eine Momentaufnahme des Profils gemacht wird, erlaubt eine sehr viel präzisere Berechnung der Vergangenheit und die Möglichkeit, Änderungen am Profil nachzuverfolgen.

(Profiles-troubleshooting-profile-errors)=

## Fehlerbehebung bei Profil Fehlern

### “Ungültiges Profil” / “Basal Profil nicht ausgerichtet auf Stunden”

![Basalprofil nicht auf Stunden ausgerichtet](../images/BasalNotAlignedToHours2.png)

* Diese Fehlermeldungen werden angezeigt, wenn Du eine Basalrate oder I:C Faktoren nicht nur zur vollen Stunde hast. (Die Pumpen Dana R und Dana RS beispielsweise lassen Änderungen zur halben Stunde nicht zu.)
  
  ![Beispiel Basalprofil nicht auf Stunden ausgerichtet](../images/ProfileNotAlignedToHours.png)

* Merke bzw. notiere Dir das in der Fehlermeldung angegebene Datum und die Uhrzeit (26/07/2019 5:45 pm im Bildschirmfoto oben).

* Gehe zum Behandlungs-Tab.
* Wähle Profilwechsel.
* Scrolle zum in der Fehlermeldung angegebenen Zeitpunkt.
* Klicke auf 'Löschen'.
* Manchmal gibt es nicht nur einen fehlerhaften Profilwechsel. In diesem Fall musst Du auch alle anderen entfernen.
  
  ![Profilwechsel löschen](../images/PSRemove.png)

Alternativ kannst Du den Profilwechsel auch direkt in mLab wie unten beschrieben löschen.

### “Profilwechsel von NS empfangen aber Profil existiert lokal nicht”

* Das Profil wurde nicht korrekt von Nightscout synchronisiert.
* Lösche den Profilwechsel wie oben beschrieben.

Alternativ kannst Du den Profilwechsel auch direkt in mLab löschen:

* Öffne Deine mLab Datensammlung.
* Suche in den Behandlungen nach “Profile switch”.
* Lösche dann dort den Eintrag, der dem Datum und der Zeit der Fehlermeldung entspricht. ![mlab](../images/mLabDeletePS.png)

### “DIA 3 h zu kurz”

* Die Fehlermeldung erscheint, wenn die Wirkdauer des Insulins in Deinem Profil mit einem Wert angegeben wird, von dem AndroidAPS annimmt, dass er nicht korrekt ist. 
* Lies den Abschnitt [Auswahl des richtigen DIA](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), überarbeite dein Profil und führe einen [Profilwechsel](../Usage/Profiles) aus, um es zu aktivieren.