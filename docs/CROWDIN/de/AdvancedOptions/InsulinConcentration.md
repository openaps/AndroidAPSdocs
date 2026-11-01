(Insulin-Concentration)=
# Insulinkonzentration

```{warning}
Alle handelsüblichen Pumpen sind **NUR** für Insulin U100 ausgelegt. Eine andere Insulinkonzentration in einer Pumpe zu verwenden, kann gefährlich sein. Auch wenn immer mehr Anwender AAPS mit anderen Konzentrationen nutzen, muss die Umrechnung immer im Blick behalten werden und führt oft zu Fehlern (selbst bei sehr erfahrenen Anwendern!).
```

## Grundlagen zum Insulin

Dieses Kapitel erklärt die wichtigsten Begriffe rund um das Messen und Abgeben von Insulin.

### Die Insulineinheit: ein Maß für die Wirkung

Insulin wird in **Internationalen Einheiten (IE)** gemessen. Sie geben seine biologische Wirkung an (wie stark es den Blutzucker senkt) und nicht nur seine Masse.

- **Definition:** 1 IE entspricht der Wirkung einer bestimmten Menge Insulin, festgelegt auf **etwa 0,04167 mg**.
- **Wichtig:** Eine „Einheit“ hat bei allen Insulinarten dieselbe biologische Wirkung. So bleibt die Dosierung einheitlich.

### Insulinkonzentrationen

Insulin gibt es in verschiedenen Stärken. Sie werden in Einheiten pro Milliliter (ml) angegeben.

- **U100:** Der weltweite Standard mit **100 IE/ml**.
- **U200-U500:** Höher konzentrierte Insuline (z. B. hat U200 200 IE/ml) für kleinere Spritzmengen.
- **U40/U50:** Seltenere, ältere Konzentrationen (40 IE/ml und 50 IE/ml). **Für U40 werden eigene U40-Spritzen gebraucht.**
- **Manuelle Verdünnung:** Ein Verfahren aus der Klinik, um stark verdünntes Insulin herzustellen (z. B. U50, U10), für seltene Fälle wie Neugeborene oder eine extrem hohe Insulinempfindlichkeit. Das erfordert eine sehr sorgfältige Zubereitung durch die Apotheke.

```{admonition} Critical Warning
:class: danger
Eine Konzentration mit einem Gerät zu verwenden, das nicht dazu passt, ist äußerst gefährlich und kann zu einer schweren Über- oder Unterdosierung führen. **Prüfe immer dreifach, ob die Insulinkonzentration zur Spritze, zum Pen oder zur Pumpe passt.**
```

## When is a non-standard concentration used?

Insulinpumpen sind zwar für U100-Insulin ausgelegt, in bestimmten medizinischen Situationen sind aber andere Konzentrationen nötig. In diesen Fällen ist äußerste Vorsicht und eine sehr sorgfältige Handhabung nötig.

### Anwendungsfall 1: verdünntes Insulin für sehr kleine Dosen

- **Situation:** Behandlung von Typ-1-Diabetes bei Säuglingen und Kleinkindern.
- **Problem:** Ihr Insulinbedarf ist so gering, dass selbst die kleinste Dosis, die die Pumpe abgeben kann (z. B. 0,05 IE), zu groß sein kann. Das erschwert eine genaue Einstellung des Blutzuckers und führt zu einem hohen Risiko für Hypoglykämien.
- **Lösung:** Stark verdünntes Insulin verwenden (z. B. U10, also 10 IE/ml).
- **Wirkung:** Dadurch steigt die Flüssigkeitsmenge, die je Einheit Insulin abgegeben wird. Weil die „Portionen“ Insulin mehr Volumen haben, aber schwächer konzentriert sind, lässt sich mit den vorhandenen Einstellungen der Pumpe viel feiner und genauer dosieren.

```{admonition} Critical Safety Note on Dilution
:class: danger
Das Verdünnen von Insulin ist ein riskantes Verfahren, das niemals ohne spezielle Schulung und ärztliche Aufsicht zu Hause versucht werden darf. Es muss von medizinischem Fachpersonal oder einer geschulten Betreuungsperson durchgeführt werden, mit einer sterilen Verdünnungslösung, die speziell für diese Insulinart bestimmt ist. **Verwende niemals Leitungswasser, Kochsalzlösung oder eine andere Flüssigkeit**, denn das kann das Insulin unwirksam machen, seine Wirkung verändern und gefährliche Verunreinigungen einbringen.
```

### Anwendungsfall 2: konzentriertes Insulin bei hohem Insulinbedarf oder ausgeprägter Insulinresistenz

- **Situation:** Behandlung von Erwachsenen oder Jugendlichen mit ausgeprägter Insulinresistenz oder von Menschen, die durch die Zusatzstoffe im Standardinsulin örtliche Schmerzen haben.
- **Problem:**
  1. **Hoher Bedarf:** Ein sehr hoher täglicher Insulinbedarf kann den maximalen Bolus oder die maximale Tagesabgabe der Pumpe überschreiten.
  1. **Schmerzen:** Die Konservierungsstoffe im Insulin können bei der Abgabe brennen oder reizen.
- **Lösung:** Ein höher konzentriertes Insulin verwenden, zum Beispiel U200 (200 IE/ml).
- **Wirkung:** Die nötige Insulindosis wird mit dem halben Volumen abgegeben. Dafür müssen die internen Einstellungen der Pumpe an die doppelte Konzentration angepasst werden (z. B. Basalraten und Boli halbiert), damit die richtige Anzahl Einheiten abgegeben wird. Außerdem gelangt so weniger möglicherweise reizende Flüssigkeit unter die Haut.

## Wie wird die Insulinkonzentration mit AAPS gehandhabt (AAPS 3 und früher)?

Wer in einem AAPS-Loop ein anderes Insulin als U100 verwendet, muss sehr sorgfältig einstellen, damit die Berechnungen der Software zu dem Insulin passen, das tatsächlich abgegeben wird. Eine verbreitete Methode ist die „Verwendung eines angepassten Profils“.

### Ein angepasstes Profil verwenden

Bei dieser Methode wird AAPS vorgetäuscht, dass der Insulinbedarf des Patienten geringer ist, als er wirklich ist. Damit wird ausgeglichen, dass die Pumpe höher konzentriertes Insulin abgibt, als wofür sie ausgelegt ist. Das folgende Beispiel gilt für Insulin U200 in einer Pumpe, die für U100 ausgelegt ist.

- **Das eigentliche Problem:** Eine Pumpe für U100 ist so eingestellt, dass sie für **1 Einheit** **10 µl** abgibt. Füllst Du sie mit U200 (1 Einheit U200 entspricht **5 µl** Insulin) und wählst an der Pumpe **1 Einheit**, gibt sie **10 µl** Insulin ab. Dieses Volumen enthält jetzt aber **2 Einheiten U200-Insulin**. Das führt zu einer Überdosierung um 100 %.
- **Die Lösung „Profilwechsel 50 %“:** Um das auszugleichen, wird das gesamte Therapieprofil des Patienten in AAPS so umgerechnet, dass es „halb so stark“ ist.
  1. Der Anwender erstellt auf Basis seines normalen U100-Profils ein neues Profil mit der Funktion „Profilwechsel **50 %**“.
  1. So entsteht ein neues Profil, in dem:
     - die **Basalraten** halbiert sind.
     - der **Insulin-Kohlenhydrat-Faktor (IC)** verdoppelt ist (z. B. wird aus 1:10 g 1:20 g).
     - der **Korrekturfaktor (ISF)** verdoppelt ist (z. B. wird aus „1 Einheit senkt den BZ um 50 mg/dl (2,8 mmol/l)“ „1 Einheit senkt ihn um 100 mg/dl (5,6 mmol/l)“).
- **Das korrigierte Ergebnis:** AAPS geht jetzt davon aus, dass der Patient nur die Hälfte des Insulins braucht. Wenn AAPS einen Bolus von **1 Einheit** berechnet und auslöst, gibt die Pumpe (für U100 ausgelegt, aber mit U200 gefüllt) **10 µl** ab. Diese enthalten **2 echte Einheiten U200-Insulin**. Weil AAPS diese Dosis mit einem „halb so starken“ Profil berechnet hat, ist die Abgabe von **2 echten Einheiten** die richtige, gewollte Dosis. Die „halbe“ Rechnung des Loops passt zur „doppelten“ Abgabe der Pumpe.

```{admonition} Critical Risks and Common Errors
:class: caution

Diese Methode bringt erhebliche Risiken mit sich, weil die Daten in der App dauerhaft nicht mehr zur Wirklichkeit passen.

**Der häufigste Fehler: der falsche „externe Bolus“**

Der häufigste Fehler passiert, wenn Insulin **außerhalb** des Systems aus AAPS und Pumpe abgegeben und eingetragen wird.

- **Die Situation:** AAPS berechnet mit dem angepassten Profil einen Bolus von **5 Einheiten** für eine Mahlzeit. Der Anwender spritzt diesen mit einem U200-Pen.
- **Der doppelte Fehler:**
  1. **Falsche Dosis gewählt:** Der Anwender denkt „AAPS berechnet 5 Einheiten“ und will wegen des U200-Pens ohne Umrechnung **5 echte Einheiten U200** abgeben. Weil das Profil aber halbiert ist, braucht der Körper tatsächlich **10 echte Einheiten**. Das ist eine **Unterdosierung um 50 %**, die zu einer Hyperglykämie führen kann.
  1. **Falsch berechnetes aktives Insulin (IOB zu hoch):** Trägt der Anwender diesen externen Bolus in AAPS ein, gibt er **5 Einheiten** ein. Das ist falsch. Weil das AAPS-Profil für U200 gilt, entspricht **1 Einheit in AAPS 2 echten Einheiten**. Die 5 echten Einheiten aus dem Pen müssten in der App also als **2,5 Einheiten** eingetragen werden. Wer 5 Einheiten einträgt, überschätzt das IOB um 100 %. AAPS geht dann von 5 „konzentrierten Einheiten“ aktivem Insulin aus (das entspricht 10 echten Einheiten), obwohl nur 5 echte Einheiten wirken. Das kann dazu führen, dass der Loop Basalinsulin zurückhält oder spätere Boli verringert. Das verschärft das Risiko einer Hyperglykämie durch die anfängliche Unterdosierung noch.

**Weitere Risiken:**

- **Irreführende Daten und Berichte:** Alle Daten in AAPS oder Nightscout - einschließlich IOB, Tagesgesamtdosis (TDD) und Berichte über die Vergangenheit - sind in „konzentrierten Einheiten“. Der Anwender und sein Behandlungsteam bekommen so ein verzerrtes Bild. Ein Arzt, der einen Bericht ansieht, sieht vielleicht eine TDD von 30 Einheiten und merkt nicht, dass der Patient tatsächlich 60 echte Einheiten bekommen hat. Das führt zu einer falschen Beurteilung der Therapie.
- **Verändertes Denken:** Nach längerer Zeit beginnt der Anwender, in den halbierten Werten der App zu „denken“. Er verinnerlicht, dass sein ISF 100 mg/dl (5,6 mmol/l) oder seine Basalrate 0,5 IE/h beträgt, und vergisst, dass diese Werte „konzentriert“ sind. Dadurch entsteht eine gefährliche Abhängigkeit vom System, und das Gefühl für den tatsächlichen Insulinbedarf geht verloren. Das ist für die Sicherheit entscheidend, wenn die Pumpe ausfällt oder die App Probleme hat.

**Fazit:** Diese Methode verlangt höchste Aufmerksamkeit. Der Anwender muss ständig zwischen einer „konzentrierten Welt“ in der App und der wirklichen Welt umrechnen. Jede Insulingabe von außen und jeder Blick auf die Daten bricht mit diesem Denkmodell und ist ein ernstes Risiko. Die Bedeutung jeder Zahl im System ändert sich grundlegend.
```

## Den Parameter Konzentration verwenden (neu in AAPS 4.0)

Um die Risiken eines angepassten Profils zu verringern, gibt es eine neue Funktion, die die Insulinkonzentration direkt in AAPS berücksichtigt. Sie rechnet automatisch um, sodass die Haupt-App immer mit **echten Internationalen Einheiten (IE)** arbeitet.

### So funktioniert es: automatische Umrechnung

Der Grundgedanke ist eine klare Trennung zwischen der Logik der App und der Kommunikation mit der Pumpe:

- **AAPS verwendet Internationale Einheiten:** Datenbank, Algorithmen, Berichte und Protokolle von AAPS **verwenden immer echte IE**. Das heißt: IOB, TDD und Therapieeinstellungen (Basal, ISF, IC) geben die tatsächlichen biologischen Insulineinheiten wieder.
- **Der Pumpentreiber verwendet konzentrierte Einheiten:** Alle Werte, die an den Pumpentreiber gesendet oder von ihm empfangen werden, werden anhand der gewählten Konzentration automatisch in „konzentrierte Einheiten“ (CU) umgerechnet.
  - **Beispiel mit U200:** Fordert der Anwender einen **Bolus von 1 Einheit** an, bekommt der Pumpentreiber **0,5 CU (konzentrierte Einheiten)**, bevor er sie an die Pumpe sendet. Die Pumpe (für U100 eingestellt) gibt dann **5 µl** ab. Diese enthalten **1 IE U200-Insulin**.

### Vorteile und verbleibende Risiken

**Vorteile:**

- Ein angepasstes Profil ist nicht mehr nötig, und damit entfallen auch die Fehler beim Umrechnen im Kopf.
- Du kannst immer in echten IE „denken“.
- Für einen externen Bolus mit einem Pen stellst Du am Pen einfach die gewünschte Insulinmenge ein (egal, welcher Pen und welche Insulinkonzentration verwendet wird). Eine Umrechnung ist nicht nötig, weil sowohl U100- als auch U200-Pens die Menge immer in IE einstellen.
- Alle Berichte und Daten in AAPS (TDD, IOB) sind in echten IE. Das schafft Klarheit für Dich und Dein Behandlungsteam.
- Externe Boli werden nicht mehr falsch berechnet, weil sie in echten IE eingetragen werden.

**Verbleibende Risiken:**

- **Umstellung im Kopf:** Wer von der Methode mit dem angepassten Profil umsteigt, muss sein Profil auf das richtige, echte Profil zurückstellen (also doppelt so stark, wenn er von U200 kommt) und braucht Zeit, um sein **Denken umzustellen**. Nachdem man sich an „konzentrierte“ Werte in der App gewöhnt hat, muss man wieder lernen, den **echten, unverfälschten IE-Werten** zu vertrauen, die überall angezeigt werden. In dieser Übergangszeit besteht die Gefahr, Werte falsch zu deuten.
- **Bolus direkt an der Pumpe:** Wer die Bolusfunktion der Pumpe selbst nutzt (also an AAPS vorbei), gibt 100 % zu viel ab, weil die Pumpe U200-Insulin mit dem Volumen für U100 abgibt.
- **Allgemeine Warnung:** Andere Konzentrationen als U100 zu verwenden, bleibt ein Verfahren für Fortgeschrittene mit Risiken und wird nicht offiziell empfohlen.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Klebe zur Erinnerung dauerhaft einen Hinweis **„U200-Insulin“** auf Deine Pumpe, damit Du es nie vergisst!
```

### Anzeige in der Benutzeroberfläche

Damit alles klar bleibt, zeigt die Benutzeroberfläche dort, wo es wichtig ist, sowohl echte als auch konzentrierte Einheiten an. Ist das aktuelle Insulin U100, bleibt die Benutzeroberfläche unverändert.

**Beispiele für die Anzeige:**

- **Fenster Bolusabgabe:**
  - Das Fenster der Bolusabgabe gehört zur eigentlichen AAPS-App, deshalb werden nur Werte in IE angezeigt (passend zu dem, was Du gewählt hast): **`2,50 IE / 10,00 IE abgegeben`**
- **Oberfläche des Pumpentreibers (aktueller Status):**
  - In der Übersicht der Pumpe wird die abgegebene Menge in beiden Einheiten angezeigt, zum Beispiel bei `U200`: **`Letzter Bolus: 10 IE (5 CU) (10')`**

**Bitte beachten:** Beide Einheiten (IE und CU) sind nur in der Hauptübersicht der Pumpe zu sehen. Je nach Pumpe gibt es weitere Bildschirme, auf denen nur die konzentrierten Einheiten angezeigt werden. Ältere Daten im Pumpentreiber bleiben in der Regel in „konzentrierten Einheiten“.

### Die Funktion einschalten

Wegen der damit verbundenen Sicherheitsrisiken ist dieser Parameter standardmäßig nicht eingeschaltet. Um ihn zu aktivieren, schließe Ziel 3 ab und schalte in den allgemeinen Einstellungen **Unterstützung verschiedener Insulinkonzentrationen** ein.

### Ein neues Insulin mit einer anderen Konzentration anlegen

Um ein Insulin mit einer anderen Konzentration anzulegen, öffne zuerst **Bearbeiten → Insulineinstellungen**.

- Tippe unten auf dem Bildschirm auf das Symbol „+“.
- Wähle die gewünschte Konzentration aus dem Auswahlmenü (es gibt U10, U20, U50, U100 und U200).
  - Verdünnte Konzentrationen wie U10, U20 oder U50 sind für Kinder mit sehr niedrigen Basalraten gedacht.
  - U200 ist eher für Erwachsene mit hohem Insulinbedarf gedacht.

  ![The concentration dropdown in Insulin settings](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Passe Wirkmaximum und Insulinwirkdauer (DIA) an und vergib bei Bedarf eine eigene Insulin-Kurzbezeichnung.
- Tippe oben rechts auf den Knopf zum Speichern.

Damit ist das Insulin angelegt, lässt sich aber nicht direkt in den **Insulineinstellungen** auswählen.

### Konzentration von U100 auf Uxxx wechseln (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Aus Sicherheitsgründen übernimmt AAPS einen Wechsel der Konzentration nur bei einem Reservoirwechsel oder einem Patch-/Pod-Wechsel.
```

Wenn Du von U100-Insulin kommst, passen Dein Profil, Deine bisherigen Daten und Berichte schon zu den Internationalen Einheiten. Der Wechsel ist deshalb sehr „einfach“:

- Bei einer Patch-/Pod-Pumpe gibt es beim Wechsel der Pumpe einen eigenen Schritt, in dem Du das eingefüllte Insulin auswählst.
- Bei einer Schlauchpumpe tippe in der Übersicht (erweiterte Ansicht der Statusleiste) auf den Knopf Nadelwechsel/Füllen (für den Insulinwechsel) und dann auf „Wechseln“.

1. Wähle im Auswahlmenü die gewünschte Konzentration (z. B. `U200`).
1. Wähle darunter dann das richtige Insulin. Bis Du bestätigst, steht über seinem Namen **Wird aktiviert** (statt **Derzeit aktiviert**).

   ![An insulin picked but not confirmed yet: Will be activated](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Wichtig:** AAPS übernimmt den Wechsel der Konzentration erst, wenn der Profilwechsel an die Pumpe übertragen wurde.
   - Dieser Schritt ist bei allen Patch-/Pod-Pumpen Pflicht.
   - Bei Schlauchpumpen warte, bis der Profilwechsel an die Pumpe übertragen wurde, oder führe ihn über **Bearbeiten → Profil** oder die **Insulineinstellungen** aus.

Das war's!

Läuft beim Insulinwechsel ein zeitlich begrenzter **Profilwechsel**, bekommt auch das Profil, das nach dem Ende des Profilwechsels wieder gilt, das neue Insulin. Das alte Insulin kommt nicht zurück.

### Konzentration wechseln, wenn Du U200-Insulin mit einem 50-%-Profil verwendest (AAPS 4)

Wenn Du U200 schon in Deiner Pumpe verwendest, zusammen mit einem 50-%-Profil, sind im Vergleich zum normalen Wechsel von U100-Insulin zusätzliche Schritte nötig.

Das Schwierigste wird wahrscheinlich nicht der richtige Wechsel in AAPS sein, sondern Dein Kopf: Du musst wieder lernen, in „IE“ statt in „CU“ zu denken. Alle gewohnten Werte für Boli (Frühstück, Mittagessen, Abendessen …) werden doppelt so hoch sein, ebenso Deine TDD, Basalraten usw. Sei in den ersten Wochen sehr vorsichtig, damit Dir keine Fehler passieren, bis Du wieder in Internationalen Einheiten „denkst“.

- Lege zuerst ein neues Profil an, dessen Werte alle zu den Internationalen Einheiten passen:
  - Führe einen zeitlich begrenzten Profilwechsel auf 200 % Deines normalen, laufenden Profils aus.
  - Öffne das Menü (☰) → **Behandlungen**, gehe zum Reiter **Profilwechsel** und klone das neue 200-%-Profil (siehe [Einen Profilwechsel in ein neues Profil klonen](#your-aaps-profile-clone-profile-switch)).
  - Wechsle bis zum nächsten Reservoir- oder Patch-Wechsel zurück zu Deinem normalen Profil.
  - Gehe zu **Bearbeiten → Profil** und gib dem neuen Profil einen eindeutigen Namen (das wird Dein künftiges Profil für U200-Insulin in AAPS 4).
- Wenn Du Dynamischen ISF (DynISF) verwendest, musst Du ihn für mindestens eine Woche ausschalten:
  - Deine gesamte Historie in AAPS oder Nightscout ist in den falschen Einheiten (CU), also halb so hoch wie der echte Wert in Internationalen Einheiten. Warte nach dem Wechsel auf U200-Insulin mindestens eine Woche, bevor Du ihn wieder einschaltest.
- Jetzt kannst Du beim nächsten Insulin- oder Pod-Wechsel das Insulin wechseln (auf ein neues U200, das Du in den **Insulineinstellungen** angelegt hast).
- Sobald das neue U200-Insulin richtig übernommen ist, vergiss nicht, das neue normale Profil aus dem ersten Schritt zu aktivieren.

## Wie werden externe Boli mit verschiedenen Pens gehandhabt?

### Mit U200-Insulin und einem 50-%-Profil (AAPS 3)

Denke daran, dass alle Pens in Internationalen Einheiten eingeteilt sind. Egal welchen Pen Du verwendest (U100, U200): Wenn Du einen externen Bolus mit dem Pen gibst, musst Du in beide Richtungen umrechnen:

- Von AAPS zum Pen: Wenn der Bolus-Rechner einen Bolus vorschlägt oder Du eine bestimmte Menge im Kopf hast, nimm sie beim Einstellen am Pen mal 2, verglichen mit demselben Bolus aus AAPS.
- Vom Pen zu AAPS: Wenn Du am Pen eine Menge für einen externen Bolus eingestellt hast, teile sie durch 2, bevor Du sie in AAPS einträgst (Knopf Insulin, externer Bolus). So wird das IOB in CU (konzentrierten Einheiten) richtig berechnet.

### Mit U200-Insulin und der Konzentrationsverwaltung von AAPS 4

Mit der eingebauten Konzentrationsverwaltung in AAPS ist alles viel einfacher: Stelle am Pen einfach die gewünschte Menge ein (egal welcher Pen und welches Insulin) und trage sie in AAPS ein.

- Wenn Du beim Knopf Insulin einen externen Bolus wählst, kannst Du jedes Insulin auswählen, das in den **Insulineinstellungen** angelegt ist (bei Pens meist U100 oder U200). So wird das IOB sehr genau berechnet, auch wenn Wirkmaximum und DIA des Insulins im Pen ganz anders sind als die des Insulins in der Pumpe.
