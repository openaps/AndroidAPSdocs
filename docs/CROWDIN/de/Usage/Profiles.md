# Profilwechsel

Wenn du dein AndroidAPS startest und dein Profil auswählst, wirst du einen "Profilwechsel" mit einer Dauer von 0 duchführen müssen (wird später erklärt). Wenn du das machst, beginnt AAPS damit, die Historie der Profile zu verfolgen und jede Änderung am Profil erfordert einen erneuten Profilwechsel, auch dann, wenn du den Inhalt eines Profils in NS änderst. Ein geändertes Profil wird sofort auf AAPS übertragen, aber du musst zu dem gleichen Profil wechseln (in NS oder AAPS), damit diese Änderungen aktiv werden.

AAPS erzeugt intern eine Momentaufnahme des Profils mit dem Startdatum und der Dauer und verwendet es für den angegebenen Zeitraum. Eine Dauer von 0 bedeutet unendlich. Dadurch ist dieses Profil bis zu einem erneuten Profilwechsel aktiv.

Wenn du einen Profilwechsel mit einer bestimmten Dauer verwendest, dann wird das Profil nach Zeitablauf auf den letzten gültigen Profilwechsel zurückgesetzt

Wenn du lokale AAPS Profile verwendest (Einfach, Lokal, CPP), musst du den Button dort drücken, um diese Änderungen zu aktivieren (das erzeugt ein korrektes Profilwechsel-Ereignis).

Bei einem Profilwechsel kannst du zwei Optionen wählen, die früher Teil des Zirkadianen Prozent-Profils waren:

* Prozentsatz - dies wendet den gleichen Prozentsatz auf alle Parameter an. Wenn du ihn auf 130% setzt (was bedeutet, dass du eine 30% höhere Insulinresistenz hast), wird es die Basalrate um 30% erhöhen. Es senkt auch ISF und IC entsprechend (in diesem Beispiel werden sie durch 1,3 geteilt). Das wird an die Pumpe gesendet und ist dann die standardmässig verwendete Basalrate. Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So können zum Beispiel unterschiedliche prozentuale Profile für die verschiedene Phasen des hormonellen Zyklus eingerichtet werden.
* Zeitverschiebung - dies verschiebt alles um die Anzahl an den eingegebenen Stunden. So kannst du zum Beispiel bei Nachtschichten angeben, wie viele Stunden später / früher du zu Bett gehst oder aufstehst.

When using timeshift be aware of the directions:

* Timeshift +10 h: 12:00 -> 2:00
* Timeshift -10 h: 12:00 -> 22:00

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Troubleshooting Profile Errors

* 'Invalid profile' or 'Basal Profile not aligned to hours' error message will appear if you have any basal rates or I:C rates not on the hour. The DanaR and DanaRS pumps do not support changes on the half hour.
* 'Received profile switch from NS but profile does not exist locally' or Go either to Treatments tab in AndoridAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message. Or go to your mlab collection, search in the treatments for profile switch and delete the date and time that was mentioned in the error message. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* 'DIA 3hr too short' error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a Profile Switch to continue.