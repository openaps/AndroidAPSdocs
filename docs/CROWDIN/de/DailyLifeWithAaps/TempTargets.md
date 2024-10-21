# Temporäre Ziele

## Was sind temporäre Ziele und wie nutzt und richtet man sie ein?

Mit der **AAPS**-Funktion **Temporäres Ziel** (oder **TT** - temp target) kannst Du Dein **Glukoseziel** vor geplanten Aktivitäten anpassen. **AAPS** verändert dadurch die Insulingaben.

In **AAPS** gibt es drei voreingestellte **Temporäre Ziele**: eines für Aktivität (**Temporäres Ziel für Aktivität**), eines für Mahlzeiten (**Temporäres Ziel für 'Bald essen'**) und eines für eine bevorstehende Hypoglykämie (**Temporäres Ziel für Hypo**). **Temporäres Ziel** findest Du im Reiter **AKTIONEN**.

Du musst verstehen, was Du mit der Funktion "**Temporäres Ziel**" in **AAPS** erreichen kannst. Das Erreichen eines gewünschten **Glukose**-Ziels hängt von verschiedenen Faktoren ab: der Zuverlässigkeit der **AAPS**-Einstellungen, der Qualität des gesamten **Glukose**-Managements, dem **IOB**, der Insulinempfindlichkeit, der Insulinresistenz, der Trainingsintensität und so weiter.

Es kann 30 Minuten oder länger dauern, um mit einem **Temporären Ziel** das angestrebte **Glukoseziel** zu erreichen. Dir muss bewusst sein, dass **AAPS** das **Glukoseziel** mit Hilfe eines **Temporären Ziels** nicht sofort erreichen kann.

Die folgende Tabelle beschreibt wie **Temporäres Ziel - Aktivität**, **Temporäres Ziel - Bald essen** und **Temporäres Ziel - Hypo** funktionieren.

![TT1_Screenshot 2024-01-26 231223](https://github.com/openaps/AndroidAPSdocs/assets/137224335/73eeadf1-c17e-4955-afd8-f49c281331e3)

## Wo kann ich ein Temporäres Ziel auswählen und setzen?

1. Gehe in **AAPS** zum Reiter **AKTIONEN**;
2. Tippe auf die Schaltfläche **Temporäres Ziel** und
3. Wähle das gewünschte **Temporäre Ziel** aus

![TT2_Screenshot 2024-01-26 194028](https://github.com/openaps/AndroidAPSdocs/assets/137224335/9b53d358-dc97-4dc5-9ffc-3d24bceea203)

Alternativ kannst Du ein **Temporäres Ziel** auch über die "Kohlenhydrate"-Schaltfläche (Schritt 1) aktivieren, in dem Du das gewünschte **Temporäre Ziel** in den Shortcuts (Schritt 2) wie unten gezeigt auswählst:

![TT3_Screenshot 2024-01-26 194318](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a0627667-fb73-4791-8a1a-328eaaf1af2a)

## Wo kann ich die vorgegebenen temporären Ziele ändern und mit meinen eigenen Einstellungen überschreiben?

Um das vordefinierte ‘Glukoseziel’ und die ‘Dauer’ auf Deine eigenen **Temporären Ziele** anzupassen, gehe im **AAPS**-Menü in die rechte obere Ecke und

1. klicke auf **Einstellungen** 
2. scrolle nach unten zu 'Übersicht' 
3. wähle 'Vordefinierte temporäre Ziele’ aus
4. Schritt 4 (unten) zeigt wo man die Dauer für **Temporäres Ziel - Bald essen** ändert
5. Schritt 5 (unten) zeigt wo man das **Glukoseziel** für **Temporäres Ziel - Bald essen** ändert. Für **Temporäres Ziel - Aktivität** und **Temporäres Ziel - Hypo** gehst Du genau so vor.

![TT7_Screenshot 2024-01-26 213136](https://github.com/openaps/AndroidAPSdocs/assets/137224335/82cc08af-82bf-49e2-9a66-178fc9f6aa56)

## Wie kann ich ein temporäres Ziel abbrechen?

Um ein aktives **Temporäre Ziel** abzubrechen, tippe im Reiter **AKTIONEN** auf die Schaltfläche**Temporäres Ziel** und dann wie unten gezeigt auf "Abbrechen".

![TT5_Screenshot 2024-01-26 195309](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a9299ec6-34ef-43da-a36c-4c06340878dc)

Alternativ kannst Du auch kurz auf das "Glukoseziel" im gelb/grünen Kasten oben rechts in **AAPS** drücken und dann "Abbrechen" wie oben gezeigt auswählen.

![Temporäres Ziel (TT) setzen](../images/TempTarget_Set2.png)

## Wie wähle ich ein "vordefiniertes temporäres Ziel" aus

Drücke kurz auf die Schaltfläche mit Deinem Zielwert/-bereich, um eines der **vordefinierten temporären Ziele** zu verwenden. Im TT Dialog kannst Du 'Bald essen', 'Aktivität' oder 'Hypo' auswählen. Alternativ kannst Du die entsprechenden Ziele auch bei der Eingabe von Kohlenhydraten (orangener Kohlenhydrate-Button unten auf dem Startbildschirm) aktivieren.

- Wenn Du die **vordefinierten Werte** anpassen willst, kannst Du *lange* auf den 'Bald essen'-, 'Aktivität'- oder 'Hypo'-Button drücken und dann Zielwert und Dauer verändern.
- Wenn gerade ein **temporäres Ziel** aktiv ist, wird zusätzlich ein Button 'Abbrechen' angezeigt.

## Hypo Temp-Target

Das **temporäre Hypo-Ziel** soll **AAPS** helfen durch reduzieren der Indulinzufuhr niedrige Glukosewerte zu vermeiden. Wenn Du erwartest, dass Dein **Glukosewert** bald niedrig sein wird: Normalerweise sollte **AAPS** das lösen können. Die richtigen und getesteten (stabile) **AAPS**-Einstellungen sind dabei allerdings entscheidend. Ein **Temp-Target Hypo** kann frühzeitig einer erwarteten Hypo entgegenwirken und damit **AAPS** durch das geänderte erhöhte Ziel, Insulin reduzieren lassen.

Manchmal, wenn bei einer Hypo-Behandlung Kohlenhydrate gegessen werden, kann der **Blutzucker** des schnell ansteigen, und **AAPS** wird gegen den schnell steigenden **Blutzucker** korrigieren, indem es **SMBs** abgibt.

Manchmal will man die Abgabe von **SMBs** während eines gesetzten erhöhten temporären Ziels (**Temp-Target Hypo**) aussetzen, um so eine Hypo zu vermeiden. Deaktiviere dazu in den **Einstellungen** die Option *'Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels'* (wie unten dargestellt):

- Für Fortgeschrittene, Ziel (Objective) 9): Du kannst für **temporäre Ziele** über 100 mg/dl bzw. 5.5 mmol/l *“Hohe temporäre Ziele erhöhen die Sensitivität"* einstellen, um </strong>AAPS</1> empfindlicher zu machen.

- Für Fortgeschrittene, Ziel (Objective) 9): Du kannst *"SMB bei temporären Zielen oberhalb des regulären Ziels"* deaktivieren. In diesem Fall wird **AAPS** auch bei COB > 0, "SMB bei aktiven temporären Zielen", "SMB immer aktivieren" und aktivem OpenAPS SMB keine SMB abgeben.

Hinweis: Wenn Du Kohlenhydrate über den Kohenhydrate-Button eingibst und Dein Glukosewert unter 72 mg/dl bzw. 4 mmol/l liegt, wird in **AAPS** **"Hypo Temp-Target"** (temporäres Hypo-Ziel) automatisch aktiviert.

## Aktivitäten Temp-Target

Vor und während des Trainings benötigst Du möglicherweise ein höheres Ziel, um eine Hypoglykämie während der Aktivität zu verhindern.

Um den Umgang mit dem **temporäres Ziel für Aktivitäten** zu vereinfachen, kannst Du ein für Dich passendes **temporäres Ziel für Aktivitäten** konfigurieren. Indem die Insulinmengen reduziert werden kannst Du Deinen **Glukosewert** anheben, und so das Fallen des **Glukosewertes** verlangsamen und damit eine Hypoglykämie vermeiden.

Menschen, die neu im Umgang mit **AAPS** sind, müssen, um diese Funktion für sich optimal nutzen zu können, möglicherweise experimentieren und ihre persönlichen Standardeinstellungen für ein **temporäre Ziel für Aktivität** finden. Wenn es darum geht, eine stabile Blutzuckerkontrolle während des Trainings zu erreichen, ist jeder ein wenig anders. See also the [sports section in FAQ](../UsefulLinks/FAQ.md#sports). 

Manche machen einen **Profilwechsel** (ein Profil unter 100% zur reduzierten Insulinabgabe durch **AAPS**) vor und während das **temporäre Ziel für Aktivität** läuft.

Für Fortgeschrittene, Ziel (Objective) 9): Du kannst für **temporäre Ziele** über 100 mg/dl bzw. 5.5 mmol/l *“Hohe temporäre Ziele erhöhen die Sensitivität"* in OpenAPS **SMB** einstellen. **AAPS** reagiert dann empfindlicher (sensibler).

Zusätzlich wird *'Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels'* deaktiviert, **AAPS** gibt keine **SMBs** ab, auch wenn COB > 0 ist, *'Aktiviere SMB bei aktiven temporären Zielen'-* oder *'SMB immer aktivieren'* aktiviert ist und OpenAPS **SMB** aktiv ist.

## Bald essen Temp-Target

**Temporäres Ziel für 'Bald essen'** kann ein langsames Abfallen des **Glukosewerts** und eine ausreichendes **IOB** bis zum Beginn der Mahlzeit erreichen.

Das ist eine gute Möglichkeit für diejenigen, die nicht 'vorbolen' (und damit einen SEA einhalten). Die Effektivität des **temporären Ziels für 'Bald essen'** hängt allerdings von verschiedenen Faktoren ab. Um auf einen Vorab-Bolus verzichten zu können spielen u.a. die persönlichen Einstellungen, die Art sich zu ernähren (Low Carb) und ob schnell wirkendes Insulin (wie Fiasp or Lyjumjev) genutzt wird, eine Rolle. Anfangs (bis Du erfahren im Umgang mit **AAPS** bist), solltest Du davon ausgehen auch mit einem **temporären Ziel für 'Bald essen'** weiterhin einen Vorab-Bolus abzugeben. Dies gilt insbesondere, wenn Du Dich kohlenhydratreich ernährst.

Im Artikel ['How to do "eating soon" mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) oder [hier](https://diyps.org/tag/eating-soon-mode/) erfährst Du mehr zum „Bald essen“-Modus.

Advanced, [objective 9](../SettingUpAaps/CompletingTheObjectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have *'Low temp target lowers sensitivity'*, **AAPS** works a little bit more aggressively. Für diese Option muss das **Temporäre Ziel** kleiner als 100mg/dl oder 5,5mmol/l sein.

## Wie kann ich SMB während eines Temp-Targets deaktivieren?

Um das zu erreichen, gehe in die **Einstellungen** und deaktiviere *'Aktiviere SMB bei aktiven temporären Zielen'*.

![TT8_Screenshot 2024-01-26 230757](https://github.com/openaps/AndroidAPSdocs/assets/137224335/4471540e-fe2a-4ade-8f99-18ca0372da52)

Damit wird erreicht, dass **AAPS** keine **SMBs** abgibt, auch wenn es aktive Kohlenhydrate (COB > 0) gibt oder *'SMB mit Temp-Target'* oder *'SMB immer'* aktiviert und OpenAPS SMB aktiv ist.

## Benutzerdefiniertes Temp-Target

Wenn Du eine manuelle Anpassung des **temporären Ziel** benötigst, drücke * lange * auf den 'Bald essen', 'Aktivität' oder 'Hypo' Button und passe dann die Werte für **Ziel** oder 'Dauer' wie gewünscht an.

![Temporäres Ziel durch Registerkarte 'Aktion' festlegen](../images/TempTarget_ActionTab.png)