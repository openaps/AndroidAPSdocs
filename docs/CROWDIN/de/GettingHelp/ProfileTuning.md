# Tweaking the AAPS' Profile

```{admonition} This is NOT a medical advice
:class: warning
Bitte arbeite gemeinsam mit Deinem Diabetes-Team an Deinem Diabetes-Management und nutze dazu deren Empfehlungen und Hilfestellungen.</br>
Nutze erst dann diese Anleitung, wenn Du [Dein **Profil** richtig erstellt hast](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), und die **AAPS**-Ziele (Objectives) erfolgreich abgeschlossen hast.
```

This guide explains the logic of the OpenAPS algorithm results with a given __Profile__, and provides information about which values in **AAPS** may be adjusted when certain situations or patterns are observed. The suggestions about basal testing below may diverge from what your care team advises.

Using **closed loop** may make basal testing easier and may significantly reduce the hypo risk if your __Profile__ basal is too strong.

## Changing profile's settings, how to proceed

1. Stell sicher, dass Du die für __AAPS__ empfohlenen Einstellungen und Tipps gelesen und verstanden hast. Not following this advice may make the adjusting process problematic and less likely to get a well tuned __Profile__
2. Beobachte und vergleiche **über mehrere Tage**, wie sich Deine __Glukosewerte__ und das __IOB__ verhalten.
3. Keep an eye out for patterns with **AAPS** that happen around the same time (almost) everyday.
4. Die Beobachtung über mehrere Tage ist wichtig. Schlechte Ergebnisse kommen tendenziell deswegen zustande, weil Daten eines einzigen Tages genutzt werden, um das __Profil__ anzupassen.
5. Beginne mit kleinen __Profil__-Anpassungen erst dann, wenn Du ein sich wiederholendes Verlaufsmuster erkennst. Beispiel: Du beobachtest regelmäßig um 13.00h eine __Glukosewert-Spitze__ oder einen negativen __IOB__-Wert.
6. Es ist wichtig, die Änderungen einzeln nacheinander vorzunehmen und nicht alle gleichzeitig. z.B. Dein Basal um 13.00h herum um 10% zu erhöhen.
7. Es ist wichtig, nach jeder Änderung die Auswirkungen auf den __Glukosewert__ und __IOB__ für die folgenden Tage zu beobachten.
8. Wiederhole das Vorgehen, wenn erforderlich: beobachten, entscheiden und anpassen

Überstürze nichts, sondern gehe langsam vor!

## Recommended settings and advice while tweaking basal

- Teste alles im [Closed Loop](#AapsScreens-loop-status)-Modus.
- **Schalte alle [Automationen](../DailyLifeWithAaps/Automations.md) <u>AUS</u>**
- **Turn <u>OFF</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)** so that they will not try to adapt your profile.
- Greife während des Tests nicht händisch ein (manueller Bolus, temporäre Ziele etc…): Lass das System nur die **Profil**-Einstellungen nutzen.
- Für die [zusätzlichen Diagramme](#AapsScreens-section-g-additional-graphs): auf dem ersten Diagramm, lass Dir „Aktives Insulin“, „Aktive Kohlenhydrate“ (und Empfindlichkeitsänderung) anzeigen. Im zweiten Diagramm: „Abweichungen“ und „Blutzuckerwirkung“. Wenn Du Hilfestellung benötigst, füge Deiner Anfrage Screenshots dieser beiden Diagramme hinzu.
- COB=0[*](#profiletuning-cob-zero)

Other considerations that should ideally be avoided, as they influence the data and can lead to poor conclusions:
- Keine körperlichen Aktivitäten/Sport.
- Kein Stress.
- Keine Erkrankung.
- Kein extremes Wetter wie besonders hohe oder niedrige Temperaturen.
- No failed pump or CGM sessions.
- No unannounced carbs.

Also note:
- If your [basal rate profile](#your-aaps-profile-basal-rates) is correct, when you are on target with COB=0[*](#profiletuning-cob-zero) and IOB=0, you will remain constantly on target whatever your **ISF** (**ISF** is only used when you are higher than your **BG** target).
- You need to check the actual **IOB** but also the **IOB** chart, to observe how the **IOB** evolved during the past few hours.

(profiletuning-cob-zero)=

***COB = 0**

Das bedeutet, dass das Essen vollständig verdaut ist, und es keine aktiven Kohlenhydrate mehr in Deinem Körper gibt.

**AAPS** might indicate [COB=0 while you still have carbs on board](../DailyLifeWithAaps/CobCalculation.md).

## [Profil](../SettingUpAaps/YourAapsProfile.md)-Definitionen

Ein zu **starkes Profil** kann eine Kombination der folgenden Faktoren sein:

- [ISF](#your-aaps-profile-insulin-sensitivity-factor) number is too small.
- The [basal](#your-aaps-profile-basal-rates) number is too big.
- [I:C](#your-aaps-profile-insulin-to-carbs-ratio) number is too small.

## IOB-Beobachtungen

*Hinweis: Du kannst auch das IOB-Diagramm des „Loopalyzer“ in den Nightscout-Berichten verwenden, um IOB für mehrere Tagen anzuzeigen.*

If you observe the following patterns after a few days, consider the following changes:

### IOB positiv

- Das Basal-**Profil** könnte nicht stark genug sein. (Das kann auch durch unangekündigte Mahlzeiten, Krankheit, Probleme mit der Setzstelle etc. auftreten).

![Positive IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IOB negativ

- Default basal too strong.
- May be the effect from past exercise/physical activity.

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Vorangegangen Mahlzeit: Zu großer Bolus (mit der Folge einer langen temporären Null-Basalrate „zero temp basal“)

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Beobachtungen des Glukose-Zielbereichs

### Hoch bleibend

- __ISF's__ number is high and not strong enough (calculated insulin is too weak)

![Hoch bleibend](../images/troubleshooting/profiletuning/StuckHigh.png)

- __Profile__ basal might not be strong enough (**SMBs** do not have enough "basal stock" to use)
- Ein Sicherheitsmechanismus ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) könnte eingegriffen haben und die abgegebene Bolusmenge reduziert haben. Verify in the **APS** plugin screen (**Configuration → APS → Open plugin**); see [SMB](#Open-APS-features-super-micro-bolus-smb).
- Technische Probleme: Setzstelle, Infusions-Set ...

### Niedrig bleibend

- __ISF__ zu stark; der Wert muss erhöht werden
- Basal-__Profil__ zu stark (wenn gleichzeitig auch negatives IOB beobachtet wird)

### Achterbahn (Hoch und Niedrig)

- **ISF** zu stark? Schau Dir Dein [AAPS Profil](#your-aaps-profile-insulin-sensitivity-factor) genauer an

![Rollercoaster](../images/troubleshooting/profiletuning/StrongISF.png)

## Beobachtungen zu Glukosewerten nach Mahlzeiten

### Schneller Anstieg mit hohen Glukosewerten

- Food contains fast carbs (like fruit juice).
- Consider doing a pre-bolus or a slightly earlier pre-bolus.
- Bolus (IC or injected %) not strong enough.

![Rise High](../images/troubleshooting/profiletuning/FastRise.png)

### Schneller Anstieg gefolgt von niedrigen Glukosewerten

- Consider doing a pre-bolus, your **Profile** might be too aggressive (over correction of the raise)
- Bolus too strong.



## [Wie Du den I:C berechnest](#your-aaps-profile-insulin-to-carbs-ratio)

1. Als Erstes brauchst Du eine gut eingestellte (funktionierende) Basalrate Deinem **Profil**.
2. Starte im Zielbereich/Zielwert (am besten ohne negatives IOB).
3. Record the total insulin given in **Manage → Pump** (or pump history) and call it Start insulin C4. Wiege eine Dir gut bekannte Kohlenhydratmenge ab und notiere die Start-Zeit und das Start-IOB. Then enter carbs and bolus information into **AAPS** using the wizard (with the current configured CI). Vergiss nicht, die Kohlenhydrate zu essen ;)
4. Wenn nach einigen Stunden COB=0[*](#profiletuning-cob-zero) ist und Du wieder bei Deinem Zielwert bist, notiere Dir die End-Zeit und das End-IOB. Schau - wie schon vorher - nach der Gesamtinsulinmenge und nenne es End-Insulin. *HINWEIS: Der Zeitraum ist NICHT wichtig, solange er länger ist als der Zeitraum, der für die Verdauung der KH benötigt wurde*
5. Subtrahiere/addiere von der Differenz aus Start- und End-Insulin die Differenz aus End-IOB und Start- IOB. Then subtract the basal insulin calculated from your **Profile's** settings.
6. Wenn der __Glukosewert__ im Ziel(bereich) ist, kennst Du dann die Insulinmenge, die genutzt wurde, um Deine Kohlenhydrate zu verdauen. Berechne Deinen **I:C** (Mahlzeitenfaktor).

### Erklärungen zur Berechnung des I:C

- Ein **Profil** mit funktionierender Standard-Basalrate, hält Dich während eines beliebigen Zeitraums des Tages mit einem IOB nahe Null im Zielbereich. Du bekommst lediglich das Basal aus Deinem **Profil** (Anm.: keine Korrekturen etc.).
- Du ergänzt Kohlenhydrate und Boli zu diesem Mix. Warte bis Dein Körper die Kohlenhydrate vollständig verdaut hat und der **Glukosewert** wieder im Ziel ist. Dein Insulinverbrauch ist dann die Summe Deines Basals + das Mahlzeiteninsulin. Du berechnest das Insulin, das für Basal genutzt wurde (aus Deinem **Profil**) und das überschüssige Insulin ist dann die Insulinmenge, das für die verdauten Kohlenhydrate eingesetzt wurde.
- Sollte die Zeitspanne zu klein sein, sind noch nicht alle Kohlenhydrate verdaut und der Wert für „Insulinmenge, die für Kohlenhydrate eingesetzt wurde“ wird somit falsch sein.
- Ist die Zeitspanne zu groß, hat das keine Auswirkungen und ist nicht schlimm. Du wirst alle Deine Kohlenhydrate verbrauchen und wirst weiterhin das Basal bekommen. Zum Schluss subtrahierst Du das Basal von der genutzten Gesamt-Insulinmenge, und die längere Zeitspanne (mit längerer Basalnutzung) wird das Ergebnis nicht beeinflussen.

Originally written up by @Robby (Discord) on tips and tricks to help tune your **AAPS Profile**, reviewed and edited by the community (thank you!).
