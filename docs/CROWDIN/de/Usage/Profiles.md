(Profiles-profile-switch)=

# Profilwechsel

Documentation about profiles in general can be found at [Config Builder - profile](Config-Builder-profile).

On starting your AAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period.

* Eine Dauer von 0 bedeutet unendlich. Dadurch ist dieses Profil bis zu einem erneuten Profilwechsel aktiv.
* Dauer von x Minuten bedeutet x Minuten Verwendung dieses Profils. Nach Ablauf dieser Dauer wird das Profil wieder auf das zuvor aktive Profil zurückgestellt.

If you edited your profile inside the "local profile" tab you can activate the profile there which makes an implicit profile switch too.

To do a profile switch long-press on the name of your profile ("Tuned 03/11" in the picture below) on the homescreen of AndroidAPS.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## Prozentsatz

* Wendet den gleichen Prozentsatz auf alle Parameter des Profils an. 
* Wenn du ihn auf 130% setzt (was bedeutet, dass du eine 30% höhere Insulinresistenz hast), wird es die Basalrate um 30% erhöhen. Es senkt auch ISF und IC entsprechend (in diesem Beispiel werden sie durch 1,3 geteilt).
  
  ![Beispiel Profilwechsel mit Prozentsatz](../images/ProfileSwitchPercentage.png)

* Das wird an die Pumpe gesendet und ist dann die standardmäßig verwendete Basalrate.

* Der Loop Algorithmus (Open Loop oder Closed Loop) wird von da an mit dem ausgewählten prozentualen Profil arbeiten. So können zum Beispiel unterschiedliche prozentuale Profile für die verschiedene Phasen des hormonellen Zyklus eingerichtet werden.

(Profiles-time-shift)=

## Zeitverschiebung

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

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

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

(Profiles-troubleshooting-profile-errors)=

## Fehlerbehebung bei Profil Fehlern

### “Ungültiges Profil” / “Basal Profil nicht ausgerichtet auf Stunden”

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* Diese Fehlermeldungen werden angezeigt, wenn Du eine Basalrate oder I:C Faktoren nicht nur zur vollen Stunde hast. (Die Pumpen Dana R und Dana RS beispielsweise lassen Änderungen zur halben Stunde nicht zu.)
  
  ![Beispiel Basalprofil nicht auf Stunden ausgerichtet](../images/ProfileNotAlignedToHours.png)

* Merke bzw. notiere Dir das in der Fehlermeldung angegebene Datum und die Uhrzeit (26/07/2019 5:45 pm im Bildschirmfoto oben).

* Gehe zum Behandlungs-Tab.
* Wähle Profilwechsel.
* Scrolle zum in der Fehlermeldung angegebenen Zeitpunkt.
* Klicke auf 'Löschen'.
* Manchmal gibt es nicht nur einen fehlerhaften Profilwechsel. In diesem Fall musst Du auch alle anderen entfernen.
  
  ![Profilwechsel löschen](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### “Profilwechsel von NS empfangen aber Profil existiert lokal nicht”

* Das Profil wurde nicht korrekt von Nightscout synchronisiert.
* Lösche den Profilwechsel wie oben beschrieben.

Alternatively you can delete the profile switch directly in mLab:

* Öffne Deine mLab Datensammlung.
* Suche in den Behandlungen nach “Profile switch”.
* Lösche dann dort den Eintrag, der dem Datum und der Zeit der Fehlermeldung entspricht. ![mlab](../images/mLabDeletePS.png)

### “DIA 3 h zu kurz”

* Die Fehlermeldung erscheint, wenn die Wirkdauer des Insulins in Deinem Profil mit einem Wert angegeben wird, von dem AndroidAPS annimmt, dass er nicht korrekt ist. 
* Lies den Abschnitt [Auswahl des richtigen DIA](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), überarbeite dein Profil und führe einen [Profilwechsel](../Usage/Profiles) aus, um es zu aktivieren.