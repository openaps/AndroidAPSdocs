# Profilwechsel

Wenn du dein AndroidAPS startest und dein Profil auswählst, wirst du einen "Profilwechsel" mit einer Dauer von 0 duchführen müssen (wird später erklärt). Wenn du das machst, beginnt AAPS damit, die Historie der Profile zu verfolgen und jede Änderung am Profil erfordert einen erneuten Profilwechsel, auch dann, wenn du den Inhalt eines Profils in NS änderst. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again (in NS or AAPS) to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period. Eine Dauer von 0 bedeutet unendlich. Dadurch ist dieses Profil bis zu einem erneuten Profilwechsel aktiv.

To do a profile switch long-press on the name of your profile ("Aktuell (Rad)" in the picture below) and select profile switch.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

If you use "Profile switch" with duration profile is switched back to previous valid "Profile switch"

If you use local AAPS profiles (Simple, Local, CPP) you have to press button there to apply these changes (it creates proper "Profile switch" event).

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## Prozentsatz

* Wendet den gleichen Prozentsatz auf alle Parameter des Profils an. 
* Wenn du ihn auf 130% setzt (was bedeutet, dass du eine 30% höhere Insulinresistenz hast), wird es die Basalrate um 30% erhöhen. Es senkt auch ISF und IC entsprechend (in diesem Beispiel werden sie durch 1,3 geteilt). 
* Das wird an die Pumpe gesendet und ist dann die standardmässig verwendete Basalrate. 
* Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So, for example separate percentage profiles can be set up for different stages of the hormone cycle.

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

## Time shift

* Verschiebt alles um die Anzahl an den eingegebenen Stunden. 
* So, for example, when working night shifts change the number of hours to how much later/earlier you go to bed or wake up.
* Es geht immer um die Frage, die Profileinstellungen welcher Uhrzeit die aktuellen ersetzen sollen. Diese Uhrzeit muss um x Stunden verschoben werden. Achte daher auf die Richtung der Zeitverschiebung wie im folgenden Beispiel beschrieben: 
  * Aktuelle Zeit: 12:00
  * **Positive** time shift 
    * 2:00 **+10 h** -> 12:00
    * Settings from 2:00 will be used instead of the settings normally used at 12:00 because of the positive time shift.
  * **Negative** time shift 
    * 22:00 **-10 h** -> 12:00
    * Settings from 22:00 (10 pm) will be used instead of the settings normally used at 12:00 because of the negative time shift.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Fehlerbehebung bei Profil Fehlern

* Die Fehlermeldung "Ungültiges Profil" oder "Basal Profil nicht ausgerichtet auf Stunden" wird angezeigt, wenn du eine Basalrate oder I:K Faktoren abseits der vollen Stunden hast. Die Pumpen DanaR und DanaRS lassen Änderungen zur halben Stunde nicht zu.
* 'Received profile switch from NS but profile does not exist locally' or Go either to Treatments tab in AndroidAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message. Oder öffne die mlab Sammlung und suche in den Behandlungen nach "Profilwechsel". Lösche dann dort den Eintrag, der dem Datum und der Zeit der Fehlermeldung entspricht. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* Die Fehlermeldung "DIA 3 h zu kurz" erscheint, wenn die Wirkdauer des Insulins in deinem Profil mit einem Wert angegeben wird, von dem AndroidAPS annimmt, dass er nicht korrekt ist. Lies den Abschnitt [Auswahl des richtigen DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), überarbeite dein Profil und führe einen Profilwechsel aus, um es zu aktivieren.