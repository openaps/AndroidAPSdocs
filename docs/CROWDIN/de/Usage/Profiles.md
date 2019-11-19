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

### 'Invalid profile' / 'Basal Profile not aligned to hours'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* These error message will appear if you have any basal rates or I:C rates not on the hour. (DanaR and DanaRS pumps do not support changes on the half hour for example.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* Remember / note down date and time shown in the error message (26/07/2019 5:45 pm in screenshot above).

* Go to Treatments tab
* Select ProfileSwitch
* Scroll until you find date and time from error message.
* Use remove function.
* Sometimes there is not only one faulty profile switch. In this case remove also the others.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'Received profile switch from NS but profile does not exist locally'

* The requested profile was not synced correctly from Nightscout.
* Follow instructions from above to delte the profile switch

Alternatively you can delete the profile switch directly in mLab:

* Go to your mlab collection
* Search in the treatments for profile switch
* Delete the profile switch with date and time that was mentioned in the error message. ![mlab](../images/mLabDeletePS.png)

### 'DIA 3hr too short'

* Error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. 
* Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles#profile-switch) to continue.