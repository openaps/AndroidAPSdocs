# Profil-Helfer

Profile helper offers two functions:

1. Finden eines Profils für Kinder
2. Vergleichen von zwei Profilen oder von Profilwechseln, um ein neues Profil zu klonen.

## Profil für Kinder (bis 18 Jahre)

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

Profil-Helfer bietet Datensätze von zwei verschiedenen Kinderkrankenhäusern an, um ein anfängliches Profil für Dein Kind (bis 18 Jahre) zu finden.

```{image} ../images/ProfileHelperKids1.png
:alt: Profile Helper Kids 1
```

1. Wähle 'Profil-Helfer' aus dem Drei-Punkte-Menü oben rechts auf dem Bildschirm.
2. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
3. Wechsele den Bildschirm, indem du auf die rechte, graue Schaltfläche mit der Bezeichnung '2' klickst.
4. Drücke lange auf 'Aktuelles Profil' und wähle das DPV Standardprofil aus.

```{image} ../images/ProfileHelperKids2.png
:alt: Profile Helper Kids 2
```

5. Adjust DPV Default profile (based on another hospital data set) by entering kids age, percentage of basal and either TDD Total **or** weight.
6. Drücke die Schaltfläche 'PROFILE VERGLEICHEN' oben auf dem Bildschirm.
7. Es wird der Vergleich der beiden angepassten Profile angezeigt.

Once you are fine with the profile adjustments you can [clone the profile](../Configuration/profilehelper.md#clone-profile) as described below.

## Vergleiche zwei Profile

You can use profile helper also to compare to different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../Usage/Profiles.md) before).

```{image} ../images/ProfileHelper1.png
:alt: Profile Helper 1
```

1. Wähle 'Profil-Helfer' aus dem Drei-Punkte-Menü oben rechts auf dem Bildschirm.
2. Drücke lange auf 'Standard-Profil' und wähle 'Verfügbares Profil' für eine Liste Deiner vorhandenen Profile oder 'Profilwechsel' für eine Liste der zuletzt verwendeten Profilwechsel.
3. Drücke lange auf den Namen des Profils / Profilwechsels ('Aktuell_LP' im obigen Screenshot) und wähle ein Profil / einen Profilwechsel aus der Liste.
4. Wechsele den Bildschirm, indem du auf die rechte, graue Schaltfläche mit der Bezeichnung '2' klickst.

```{image} ../images/ProfileHelper2.png
:alt: Profile Helper 2
```

5. Standardmäßig wird 'Aktuelles Profil' als Vergleichskandidat angeboten.
6. Wenn Du ein anderes Profil / einen anderen Profilwechsel verwenden möchtest, drücke lange auf 'Aktuelles Profil' und wähle entweder 'Verfügbares Profil' oder 'Profilwechsel'.
7. Drücke lange auf den Namen des Profils / Profilwechsels ('Aktuell_LP' im obigen Screenshot) und wähle ein Profil / einen Profilwechsel aus der Liste.
8. Drücke die Schaltfläche 'PROFILE VERGLEICHEN' oben auf dem Bildschirm.
9. Es wird der Vergleich der beiden angepassten Profile angezeigt.

(clone-profile)=
## Profil klonen

If you use [local profiles](../Configuration/Config-Builder.md#local-profile) you can clone a profile / profile switch directly from profile helper.

```{image} ../images/ProfileHelperClone.png
:alt: Profile Helper Clone Profil / Profilwechsel
```

1. Wähle das gewünschte Profil / den Profilwechsel aus wie oben beschrieben.
2. Falls Du 'Standard-Profil' oder 'DPV-Standardprofil' verwendest (basierend auf Datensätzen aus Kinderkrankenhäusern), musst Du sicherstellen, dass Du die richtigen Einstellungen für das Alter, den Prozentsatz der Basalrate und TDD/Gewicht eingibst.
3. Drücke die Taste 'KLONEN' am unteren Bildschirmrand.
4. Bestätige mit 'OK'.
5. Neues Profil auf der Registerkarte 'Lokales Profil' aktivieren.
