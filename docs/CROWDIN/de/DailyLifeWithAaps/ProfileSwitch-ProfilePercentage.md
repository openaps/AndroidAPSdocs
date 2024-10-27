(Profiles-profile-switch)=

# Profilwechsel & Prozentuale Profilanpassung

This section will explain what is a **Profile Switch** and **Profile Percentage**. You can learn about how to create a **Profile** at [Config Builder - profile](../SettingUpAaps/SetupWizard.md#profile).

When first embarking on your **AAPS** journey, you will need to create a **Profile**, understand how to action a **Profile Switch** and learn the impact of a **Profile Percentage** within **AAPS**. Die Funktionen **Profilwechsel** oder **Prozentsatz des Profils** (anteiliges Profil) können Dir in den folgenden Situationen das Leben einfacher machen:

- Der Menstruationszyklus - eine prozentuale Anpassung innerhalb eines **Profils** kann im Reiter **Automatisierung** eingerichtet werden. Damit erhält **AAPS** die Möglichkeit sich an die verschiedene Phasen des Hormonzyklus und an die vorhergesagte Insulinresistenz anpassen.

- Bewegung/Sport - eine prozentuale Anpassung innerhalb eines **Profils** kann im Reiter **Automatisierung** eingerichtet werden, um so für sportliche Aktivität die Abgabe des Basalinsulins zu reduzieren.

- Schichtarbeitende - Du kannst Dein Profil im Reiter **Profil** zeitlich verschieben. Im Feld 'Zeitverschiebung', kannst Du die Anzahl der Stunden angeben, die später/früher ins Bett gegangen oder aufgestanden wird.

Why use a **Profile Percentage** rather than a temporary basal adjustment? To be more effective in its application a **Profile Percentage** applies a proportionate reduction or increase across: basal, ISF and I:C. Damit erreicht man, dass **AAPS** bei der Berechnung der benötigten Insulinmenge berechnet wird, ausgewogen und gut balanciert vorgeht. Eine Reduktion lediglich des Basalinsulin im **AAPS-Profil** führt dazu, dass der Algorithmus weiterhin die bestehenden Faktoren für Korrekturen und Mahlzeiten berücksichtigt.

## Wie aktiviert man einen Profilwechsel?

Jedes **Profil** - einmal ausgewählt - wird einen „Profilwechsel“ erfordern. Um dies zu tun, sollte der Benutzende sein **Profil** bearbeiten oder ein neues **Profil** im Tab "Lokales Profil" einrichten. Sobald die gewünschten Einstellungen eingegeben wurden, sollten die Änderungen gespeichert werden und das **Profil** aktiviert werden. Die Aktivierung erfolgt, wie unten dargestellt, durch das Tippen auf 'Aktiviere Profil':

![BB1_Screenshot 2024-06-22 234905](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ecf5cc03-1e72-4521-92de-532fb3f0b287)

Sobald ein neues **Profil** erstellt und gespeichert wurde, wird **AAPS** die erstellten **Profile** in einer Bibliothek sichern.

## Wie aktiviert man einen Profilwechsel?

A. Um diese Funktion nutzen zu können, musst Du mehr als ein **Profil** in **AAPS** gespeichert haben. Um einen **Profilwechsel** durchzuführen bzw. zu aktivieren:

- **Drücke lange** auf den **Profilnamen** (im Beispiel unten wird auf dem **AAPS**-Startbildschirm das Profil '(LYUM) low' auf das gewünschte (auszuwählende) **Profil** aus dem Dropdown geändert:

1. Drücke lange auf das **Profil**;
2. Wähle das gewünschte **Profil** aus und
3. Tippe dann auf ‘OK’.

![BB2_Screenshot 2024-06-22 235345](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ddf74092-fd33-4ac2-9aff-636eca676d33)

![BB3_Screenshot 2024-06-22 235456](https://github.com/openaps/AndroidAPSdocs/assets/137224335/3e973822-f51e-4af0-b64c-5f4873fd6800)

## Um eine prozentuale Profilanpassung mit dem Profilwechsels zu aktivieren:

B. Um eine **prozentuale Profilanpassung** durchzuführen bzw. zu aktivieren:

- Befolge die oben bei A beschrieben Schritte.
- Passe die Felder für 'Dauer' und 'Prozentsatz' nach Bedarf an. Beachte dabei allerdings Folgendes: Wenn das Feld 'Dauer' (ín der Grafik mit '2' markiert): 
    - leer gelassen wird: Das **Profil** wird ohne Zeitbegrenzung (unbegrenzt) aktiviert bleiben. Das **Profil** bleibt so lange aktiv, bis ein neuer „Profilwechsel“ durch den Nutzenden durchgeführt wird.
    - mit einer Zahl (in Minuten) gefüllt wird, ist das die Zeitdauer für die das ausgewählte **Profil** aktiv sein soll. Nach Ablauf des ausgewählten Zeitraums wird auf das **AAPS-Standardprofil** zurückgeschaltet.

![BB4_Screenshot 2024-06-23 000029](https://github.com/openaps/AndroidAPSdocs/assets/137224335/2db86111-1a48-4f98-b501-53d6eb692595)

Wie man eine **prozentuale Profilanpassung** durchführt:

2. Gib die „Dauer“ ein.

3. Gib den „Prozentsatz“ ein.

4. Gib die „Zeitverschiebung“ ein.

## Um eine prozentuale Profilanpassung mit dem Profilwechsels zu aktivieren:

Es ist wichtig, dass Du die grundlegende Funktionsweise der **prozentuale(n) Profilanpassung** verstehst. Durch die prozentuale Erhöhung oder Verringerung innerhalb eines **Profilwechsels** werden alle Parameter die in Deinem **Profil** hinterlegt sind, im gleichen Maße angehoben oder reduziert.

Zum Beispiel: ein **Profilwechsel** auf 130% (bedeutet, dass Du 30% insulinresistenter bist), wird in **AAPS** dazu führen, dass

- die Basalrate wir um 30% **angehoben**; 
- der **ISF** wird **abgeschwächt**: der Wert wird durch 1,3 geteilt;
- der **IC**-Wert wird durch 1,3 geteilt und damit **abgeschwächt**.

Hab' im Hinterkopf, das eine Abschwächung des **ISF** oder des **IC** heißt, dass mehr Insulin abgegeben wird, da die Verhältniswerte größer werden. Dies wird insbesondere dann, wenn Du noch neu in der **AAPS**-Welt bist, leicht übersehen bzw. verwechselt.

Nach der Auswahl passt **AAPS** die Basalrate entsprechend an, und wird von da an sowohl im Closed Loop als auch im Open Loop mit der neu berechneten Basalrate des prozentual erhöhten **Profils** arbeiten.

Die Wirkung einer prozentualen **Profil**anpassung wird in der unten stehenden Tabelle zusammengefasst:

![BB6_Screenshot 2024-06-23 001542](https://github.com/openaps/AndroidAPSdocs/assets/137224335/db48f504-2249-4b94-b406-57524fe69322)

## Zeitliche Verschiebung des prozentual angepassten zirkadianen Profils

Die Funktion 'Zeitverschiebung' verschiebt das gesamte, der inneren Uhr angepasste (zirkadiane), **Profil** um die angegebene Stundenanzahl. Dies kann in folgenden Situationen oder für Personengruppen hilfreich sein:

- **Schichtarbeitende**: Passe Dein **Profil** Deiner Schicht an, indem Du die Anzahl der Stunden angibst, die Du schichtbedingt später ins Bett gehst oder früher aufstehen wirst; 
- **Reisen über und durch Zeitzonen**; oder
- **Kinder mit Typ1 Diabetes**, deren Abendroutinen und auftretende Insulinresistenzen in deren **Profil** eingearbeitet sind. Wenn vorher bekannt ist, dass sich die Zubettgeh-Zeit des Kindes verschieben wird, kann dies über die Funktion 'Zeitverschiebung' im **Profil** berücksichtigt werden. **AAPS** kann dann zum vorher festgelegten Zeitraum auf die Insulinresistenzen reagieren.

Es geht immer um die Frage, die **Profil**einstellungen welcher Uhrzeit sollen die aktuell gültigen ersetzen. Diese Uhrzeit muss um x Stunden verschoben werden. Achte daher darauf, in welche Richtung die Zeitverschiebung (wie im folgenden Beispiel beschrieben) erfolgen soll:

- Aktuelle Zeit: 12:00
- **Positive** Zeitverschiebung 
    - 2:00 **+10 h** -> 12:00
    - Die Einstellungen von 2:00 Uhr werden anstelle der normalerweise um 12:00 Uhr programmierten Einstellungen verwendet.
- **Negative** Zeitverschiebung 
    - 22:00 **-10 h** -> 12:00
    - Die Einstellungen von 22:00 Uhr werden anstelle der normalerweise um 12:00 Uhr programmierten Einstellungen verwendet.

![Richtung der Zeitverschiebung für Profile](../images/ProfileSwitch_PlusMinus2.png)

Dadurch, dass eine Momentaufnahme des **Profil**s gemacht wird, kann eine sehr viel präzisere Berechnung der Vergangenheit gemacht werden und es können die Änderungen am **Profil** nachverfolgt werden.