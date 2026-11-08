# Feinjustierung des AAPS-Profils

```{admonition} This is NOT a medical advice
:class: warning
Bitte arbeite gemeinsam mit Deinem Diabetes-Team an Deinem Diabetes-Management und nutze dazu deren Empfehlungen und Hilfestellungen.</br>
Nutze erst dann diese Anleitung, wenn Du [Dein **Profil** richtig erstellt hast](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), und die **AAPS**-Ziele (Objectives) erfolgreich abgeschlossen hast.
```

Diese Anleitung erklärt die Logik der Ergebnisse des OpenAPS-Algorithmus bei einem gegebenen __Profil__ und gibt Hinweise, welche Werte in **AAPS** angepasst werden können, wenn bestimmte Situationen oder Muster auftreten. Die folgenden Hinweise zum Basaltest können von den Empfehlungen Deines Diabetes-Teams abweichen.

Ein **Closed Loop** kann den Basaltest erleichtern und das Hypo-Risiko deutlich senken, wenn die Basalrate in Deinem __Profil__ zu stark ist.

## Profileinstellungen ändern - wie gehe ich vor?

1. Stell sicher, dass Du die für __AAPS__ empfohlenen Einstellungen und Tipps gelesen und verstanden hast. Wenn Du diesen Rat nicht befolgst, kann das Anpassen schwierig werden, und ein gut abgestimmtes __Profil__ wird weniger wahrscheinlich
2. Beobachte und vergleiche **über mehrere Tage**, wie sich Deine __Glukosewerte__ und das __IOB__ verhalten.
3. Achte bei **AAPS** auf Muster, die (fast) jeden Tag um dieselbe Zeit auftreten.
4. Die Beobachtung über mehrere Tage ist wichtig. Schlechte Ergebnisse kommen tendenziell deswegen zustande, weil Daten eines einzigen Tages genutzt werden, um das __Profil__ anzupassen.
5. Beginne mit kleinen __Profil__-Anpassungen erst dann, wenn Du ein sich wiederholendes Verlaufsmuster erkennst. Beispiel: Du beobachtest regelmäßig um 13.00h eine __Glukosewert-Spitze__ oder einen negativen __IOB__-Wert.
6. Es ist wichtig, die Änderungen einzeln nacheinander vorzunehmen und nicht alle gleichzeitig. z.B. Dein Basal um 13.00h herum um 10% zu erhöhen.
7. Es ist wichtig, nach jeder Änderung die Auswirkungen auf den __Glukosewert__ und __IOB__ für die folgenden Tage zu beobachten.
8. Wiederhole das Vorgehen, wenn erforderlich: beobachten, entscheiden und anpassen

Überstürze nichts, sondern gehe langsam vor!

## Tipps und empfohlene Einstellungen während der Basaloptimierung

- Teste alles im [Closed Loop](#AapsScreens-loop-status)-Modus.
- **Schalte alle [Automationen](../DailyLifeWithAaps/Automations.md) <u>AUS</u>**
- **<u>Deaktiviere</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf) und [AutoSens](#Open-APS-features-autosens)**, damit diese nicht versuchen Dein Profil anzupassen.
- Greife während des Tests nicht händisch ein (manueller Bolus, temporäre Ziele etc…): Lass das System nur die **Profil**-Einstellungen nutzen.
- Als [zusätzlichen Diagramme](#AapsScreens-section-g-additional-graphs): auf Diagramm 1 nimm „Aktives Insulin“ (IOB) und Basal. Auf Diagramm 2 aktiviere „Aktivie Kohlenhydrate“ (COB) (und Empfindlichkeitsänderung). Im dritten Diagramm: „Abweichungen“ (DEV) und „Blutzuckerwirkung“ (BGI). Wenn Du Hilfestellung benötigst, füge Deiner Anfrage Screenshots dieser beiden Diagramme hinzu.
- COB=0[*](#profiletuning-cob-zero)

Weitere Dinge, die möglichst vermieden werden sollten, weil sie die Daten beeinflussen und zu falschen Schlüssen führen können:
- Keine körperlichen Aktivitäten/Sport.
- Kein Stress.
- Keine Erkrankung.
- Kein extremes Wetter wie besonders hohe oder niedrige Temperaturen.
- Keine fehlerhaften Pumpen- oder CGM-Sitzungen.
- Keine unangekündigten Kohlenhydrate.

Beachte außerdem:
- Wenn Dein [Basalratenprofil](#your-aaps-profile-basal-rates) stimmt, bleibst Du bei COB=0[*](#profiletuning-cob-zero) und IOB=0 konstant im Zielbereich, egal wie Dein **ISF** eingestellt ist (der **ISF** wird nur verwendet, wenn Du über Deinem **BZ**-Zielwert liegst).
- Du musst das aktuelle **IOB** prüfen, aber auch das **IOB**-Diagramm, um zu sehen, wie sich das **IOB** in den letzten Stunden entwickelt hat.

(profiletuning-cob-zero)=

***COB = 0**

Das bedeutet, dass das Essen vollständig verdaut ist, und es keine aktiven Kohlenhydrate mehr in Deinem Körper gibt.

**AAPS** zeigt eventuell [COB=0 an, obwohl noch Kohlenhydrate aktiv sind](../DailyLifeWithAaps/CobCalculation.md).

## [Profil](../SettingUpAaps/YourAapsProfile.md)-Definitionen

Ein zu **starkes Profil** kann eine Kombination der folgenden Faktoren sein:

- Der [ISF](#your-aaps-profile-insulin-sensitivity-factor)-Wert ist zu klein.
- Die [Basalrate](#your-aaps-profile-basal-rates) ist zu hoch.
- Der [I:C](#your-aaps-profile-insulin-to-carbs-ratio)-Wert ist zu klein.

## IOB-Beobachtungen

*Hinweis: Du kannst auch das IOB-Diagramm des „Loopalyzer“ in den Nightscout-Berichten verwenden, um IOB für mehrere Tagen anzuzeigen.*

Wenn Du nach einigen Tagen die folgenden Muster beobachtest, ziehe diese Änderungen in Betracht:

### IOB positiv

- Das Basal-**Profil** könnte nicht stark genug sein. (Das kann auch durch unangekündigte Mahlzeiten, Krankheit, Probleme mit der Setzstelle etc. auftreten).

![Positive IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IOB negativ

- Das hinterlegte Basal ist zu stark.
- Möglicherweise die Folge von Sport/Bewegung oder körperlicher Aktivität.

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Vorangegangen Mahlzeit: Zu großer Bolus (mit der Folge einer langen temporären Null-Basalrate „zero temp basal“)

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Beobachtungen des Glukose-Zielbereichs

### Hoch bleibend

- Der Wert des __ISF__ ist hoch und nicht stark genug (berechnetes Insulin ist zu schwach)

![Hoch bleibend](../images/troubleshooting/profiletuning/StuckHigh.png)

- Die Basalrate im __Profil__ ist möglicherweise nicht stark genug (die **SMBs** haben nicht genug „Basalvorrat“ zur Verfügung)
- Ein Sicherheitsmechanismus ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) könnte eingegriffen haben und die abgegebene Bolusmenge reduziert haben. Prüfe das im Bildschirm des **APS**-Moduls (**Konfiguration → APS → Plugin öffnen**); siehe [SMB](#Open-APS-features-super-micro-bolus-smb).
- Technische Probleme: Setzstelle, Infusions-Set ...

### Niedrig bleibend

- __ISF__ zu stark; der Wert muss erhöht werden
- Basal-__Profil__ zu stark (wenn gleichzeitig auch negatives IOB beobachtet wird)

### Achterbahn (Hoch und Niedrig)

- **ISF** zu stark? Schau Dir Dein [AAPS Profil](#your-aaps-profile-insulin-sensitivity-factor) genauer an

![Rollercoaster](../images/troubleshooting/profiletuning/StrongISF.png)

## Beobachtungen zu Glukosewerten nach Mahlzeiten

### Schneller Anstieg mit hohen Glukosewerten

- Das Essen enthält schnelle Kohlenhydrate (wie Fruchtsaft).
- Ziehe einen Spritz-Ess-Abstand in Betracht bzw. einen etwas früheren.
- Bolus (IC oder injiziert %) nicht kräftig genug.

![Rise High](../images/troubleshooting/profiletuning/FastRise.png)

### Schneller Anstieg gefolgt von niedrigen Glukosewerten

- Ziehe einen Spritz-Ess-Abstand in Betracht, Dein **Profil** ist eventuell zu aggressiv (Überkorrektur des Anstiegs)
- Bolus zu kräftig.



## [Wie Du den I:C berechnest](#your-aaps-profile-insulin-to-carbs-ratio)

1. Als Erstes brauchst Du eine gut eingestellte (funktionierende) Basalrate Deinem **Profil**.
2. Starte im Zielbereich/Zielwert (am besten ohne negatives IOB).
3. Notiere die unter **Verwalten → Pumpe** (oder in der Pumpenhistorie) angezeigte gesamte abgegebene Insulinmenge und nenne sie Start-Insulin. Wiege eine Dir gut bekannte Kohlenhydratmenge ab und notiere die Start-Zeit und das Start-IOB. Gib dann Kohlenhydrate und Bolus über den Rechner (mit dem aktuell eingestellten I:C) in **AAPS** ein. Vergiss nicht, die Kohlenhydrate zu essen ;)
4. Wenn nach einigen Stunden COB=0[*](#profiletuning-cob-zero) ist und Du wieder bei Deinem Zielwert bist, notiere Dir die End-Zeit und das End-IOB. Schau - wie schon vorher - nach der Gesamtinsulinmenge und nenne es End-Insulin. *HINWEIS: Der Zeitraum ist NICHT wichtig, solange er länger ist als der Zeitraum, der für die Verdauung der KH benötigt wurde*
5. Subtrahiere/addiere von der Differenz aus Start- und End-Insulin die Differenz aus End-IOB und Start- IOB. Ziehe dann das Basalinsulin ab, das sich aus den Einstellungen Deines **Profils** ergibt.
6. Wenn der __Glukosewert__ im Ziel(bereich) ist, kennst Du dann die Insulinmenge, die genutzt wurde, um Deine Kohlenhydrate zu verdauen. Berechne Deinen **I:C** (Mahlzeitenfaktor).

### Erklärungen zur Berechnung des I:C

- Ein **Profil** mit funktionierender Standard-Basalrate, hält Dich während eines beliebigen Zeitraums des Tages mit einem IOB nahe Null im Zielbereich. Du bekommst lediglich das Basal aus Deinem **Profil** (Anm.: keine Korrekturen etc.).
- Du ergänzt Kohlenhydrate und Boli zu diesem Mix. Warte bis Dein Körper die Kohlenhydrate vollständig verdaut hat und der **Glukosewert** wieder im Ziel ist. Dein Insulinverbrauch ist dann die Summe Deines Basals + das Mahlzeiteninsulin. Du berechnest das Insulin, das für Basal genutzt wurde (aus Deinem **Profil**) und das überschüssige Insulin ist dann die Insulinmenge, das für die verdauten Kohlenhydrate eingesetzt wurde.
- Sollte die Zeitspanne zu klein sein, sind noch nicht alle Kohlenhydrate verdaut und der Wert für „Insulinmenge, die für Kohlenhydrate eingesetzt wurde“ wird somit falsch sein.
- Ist die Zeitspanne zu groß, hat das keine Auswirkungen und ist nicht schlimm. Du wirst alle Deine Kohlenhydrate verbrauchen und wirst weiterhin das Basal bekommen. Zum Schluss subtrahierst Du das Basal von der genutzten Gesamt-Insulinmenge, und die längere Zeitspanne (mit längerer Basalnutzung) wird das Ergebnis nicht beeinflussen.

Ursprünglich verfasst von @Robby (Discord) mit Tipps und Tricks zum Abstimmen Deines **AAPS-Profils**, von der Community durchgesehen und bearbeitet (danke!).
