# Profilwechsel

Wenn du dein AndroidAPS startest und dein Profil auswählst, wirst du einen "Profilwechsel" mit einer Dauer von 0 durchführen müssen (wird später erklärt). Wenn du das machst, beginnt AAPS damit, die Historie der Profile zu verfolgen und jede Änderung am Profil erfordert einen erneuten Profilwechsel, auch dann, wenn du den Inhalt eines Profils in NS änderst. Ein geändertes Profil wird sofort auf AAPS übertragen, aber du musst zu dem gleichen Profil wechseln (in NS oder AAPS), damit diese Änderungen aktiv werden.

AAPS erzeugt intern eine Momentaufnahme des Profils mit dem Startdatum und der Dauer und verwendet es für den angegebenen Zeitraum. Eine Dauer von 0 bedeutet unendlich. Dadurch ist dieses Profil bis zu einem erneuten Profilwechsel aktiv.

Profilwechsel durchführen: Drücke lange auf den Namen des Profils ("Aktuell (Rad)" im Bild unten) und wähle Profilwechsel.

![Profilwechsel durchführen](../images/ProfileSwitch_HowTo.png)

Wenn du einen Profilwechsel mit einer bestimmten Dauer verwendest, dann wird das Profil nach Zeitablauf auf den letzten gültigen Profilwechsel zurückgesetzt

Wenn du lokale AAPS Profile verwendest (Einfach, Lokal, CPP), musst du den Button dort drücken, um diese Änderungen zu aktivieren (das erzeugt ein korrektes Profilwechsel-Ereignis).

Bei einem Profilwechsel kannst Du zwei zusätzliche Optionen wählen, die früher Teil des Zirkadianen Prozent-Profils waren:

## Prozentsatz

* Wendet den gleichen Prozentsatz auf alle Parameter des Profils an. 
* Wenn du ihn auf 130% setzt (was bedeutet, dass du eine 30% höhere Insulinresistenz hast), wird es die Basalrate um 30% erhöhen. Es senkt auch ISF und IC entsprechend (in diesem Beispiel werden sie durch 1,3 geteilt).
  
  ![Beispiel Profilwechsel mit Prozentsatz](../images/ProfileSwitchPercentageD.png)

* Das wird an die Pumpe gesendet und ist dann die standardmässig verwendete Basalrate.

* Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So können zum Beispiel unterschiedliche prozentuale Profile für die verschiedene Phasen des hormonellen Zyklus eingerichtet werden.

## Zeitverschiebung

![Prozentsatz der Profilumschaltung und Zeitschaltupft](../images/ProfileSwitchTimeShift2.png)

* Verschiebt alles um die Anzahl an den eingegebenen Stunden. 
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

## Fehlerbehebung bei Profil Fehlern

### “Ungültiges Profil” / “Basal Profil nicht ausgerichtet auf Stunden”

![Basalprofil nicht auf Stunden ausgerichtet](../images/BasalNotAlignedToHours2.png)

* These error messages will appear if you have any basal rates or I:C rates not on the hour. (Die Pumpen DanaR und DanaRS beispielsweise lassen Änderungen zur halben Stunde nicht zu.)
  
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
* Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles) to continue.