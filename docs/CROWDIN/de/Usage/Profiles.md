# Profilwechsel

Documentation about profiles in general can be found at [Config Builder - profile](../Configuration/Config-Builder#profile).

On starting your AAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period.

* Duration of zero means infinite. Such profile is valid until new "Profile switch".
* Duration of x minutes means x minutes use of this profile. After that duration the profile is switched back to the previous valid "Profile switch".

If you edited your profile inside the "local profile" tab you can activate the profile there which makes an implicit profile switch too.

Drücke lange auf den Namen Deines Profils ("Tuned 03/11" im Bild unten), um einen Profilwechsel durchzuführen.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Bei einem Profilwechsel kannst Du zwei zusätzliche Optionen wählen, die früher Teil des Zirkadianen Prozent-Profils waren:

## Prozentsatz

* This applies the same percentage to all parameters. 
* If you set it to 130% (meaning you are 30% more insulin resistant), it will raise the basal rate by 30%. It will also lower the ISF and IC accordingly (divide by 1.3 in this example).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* Das wird an die Pumpe gesendet und ist dann die standardmäßig verwendete Basalrate.

* Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So, for example separate percentage profiles can be set up for different stages of the hormone cycle.

## Zeitverschiebung

![Prozentsatz der Profilumschaltung und Zeitschaltupft](../images/ProfileSwitchTimeShift2.png)

* This moves everything round the clock by the number of hours entered. 
* So, for example, when working night shifts change the number of hours to how much later/earlier you go to bed or wake up.
* It is always a question of which hour's profile settings should replace the settings of the current time. This time must be shifted by x hours. So be aware of the directions as described in the following example: 
  * Current time: 12:00
  * **Positive** Zeitverschiebung 
    * 2:00 **+10 h** -> 12:00
    * Settings from 2:00 will be used instead of the settings normally used at 12:00 because of the positive time shift.
  * **Negative** Zeitverschiebung 
    * 22:00 **-10 h** -> 12:00
    * Die Einstellungen von 22:00 Uhr werden anstelle der normalerweise um 12:00 Uhr programmierten Einstellungen verwendet.

![Richtung der Zeitverschiebung für Profile](../images/ProfileSwitch_PlusMinus2.png)

Der Mechanismus, dass eine Momentaufnahme des Profils gemacht wird, erlaubt eine sehr viel präzisere Berechnung der Vergangenheit und die Möglichkeit, Änderungen am Profil nachzuverfolgen.

## Fehlerbehebung bei Profil Fehlern

### “Ungültiges Profil” / “Basal Profil nicht ausgerichtet auf Stunden”

![Basalprofil nicht auf Stunden ausgerichtet](../images/BasalNotAlignedToHours2.png)

* These error messages will appear if you have any basal rates or I:C rates not on the hour. (Die Pumpen Dana R und Dana RS beispielsweise lassen Änderungen zur halben Stunde nicht zu.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* Merke bzw. notiere Dir das in der Fehlermeldung angegebene Datum und die Uhrzeit (26/07/2019 5:45 pm im Bildschirmfoto oben).

* Gehe zum Behandlungs-Tab.
* Wähle Profilwechsel.
* Scroll until you find date and time from error message.
* Use remove function.
* Sometimes there is not only one faulty profile switch. In this case remove also the others.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternativ kannst Du den Profilwechsel auch direkt in mLab wie unten beschrieben löschen.

### “Profilwechsel von NS empfangen aber Profil existiert lokal nicht”

* The requested profile was not synced correctly from Nightscout.
* Lösche den Profilwechsel wie oben beschrieben.

Alternativ kannst Du den Profilwechsel auch direkt in mLab löschen:

* Öffne Deine mLab Datensammlung.
* Suche in den Behandlungen nach “Profile switch”.
* Lösche dann dort den Eintrag, der dem Datum und der Zeit der Fehlermeldung entspricht. ![mlab](../images/mLabDeletePS.png)

### “DIA 3 h zu kurz”

* Die Fehlermeldung erscheint, wenn die Wirkdauer des Insulins in Deinem Profil mit einem Wert angegeben wird, von dem AndroidAPS annimmt, dass er nicht korrekt ist. 
* Read about [selecting the right DIA](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles) to continue.