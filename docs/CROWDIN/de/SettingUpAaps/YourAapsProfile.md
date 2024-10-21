## Einführung in Dein AAPS-Profil

### What is an AAPS profile?

Dein AAPS-Profil hat fünf wichtige Parametern, die definieren, wie AAPS Insulin als Reaktion auf Deine Sensorglukosewerte liefern soll. AAPS hat mehrere _zusätzliche_ anpassbare Parameter (wie z. B. SMB-Einstellungen), die aber nur gut funktionieren können, wenn Dein AAPS-Profil korrekt ist. Das AAPS-Profil beinhaltet die Insulin-Wirkdauer (DIA), Glukoseziele, Basalraten (BR), Insulinsensibilitätsfaktoren (ISF) und Insulin-Kohlenhydat-Verhätnisse (IC oder ICR). AAPS-Screenshots eines _Beispiel_-Profils sind unten zu sehen. Bitte beachte, dass dieses Profil eine Vielzahl von Zeitfenstern zeigt. Wenn Du mit AAPS startest, hast Du wahrscheinlich ein deutlich einfacheres Profil. Profile unterscheiden sich von Person zu Person erheblich. Einige Beispiele für AAPS-Profile von Kleinkindern, Teenagern und Erwachsenen sind weiter unten im Abschnitt Optimiere Dein [Profil](link) enthalten.

#### Duration of insulin action (DIA)

Da Deine Pumpe nur ein Insulinart abgibt, ist die Insulinwirkdauer in AAPS auch nur durch einen Wert festgelegt. Die übrigen vier Parameter können, wenn nötig pro Stunde, mit anderen Werten über den Zeitraum von 24 Stunden hinterlegt werden.

#### Glucose targets

Glukoseziele werden passend zu Deinen persönlichen Bedürfnissen gesetzt. Wenn Du beispielsweise Angst vor nächtlichen Hypos hast, kannst Du Dein Glukoseziel von 21.00 - 07.00 Uhr auf 117 mg/dl setzen (6,5 mmol/l) setzen. Wenn Du erreichen möchtest, dass Du vor dem Frühstücksbolus am Morgen bereits genügend aktives Insulin (IOB) im Körper hast, könntest Du für die Zeit von 07.00 - 08.00 Uhr ein niedrigeres Ziel von 81 mg/dl (4,5 mmol/dl) setzen. Ein Glukoseziel, insbesondere dann, wenn es nur kurz (weniger als 4 Stunden) gültig ist, muss nicht der _tatsächliche Wert_ sein, den Du erreichen möchtest, sondern kann ein guter Weg sein AAPS - während der Glukosewert im Zielbereich gehalten wird - aggressiver oder weniger aggressiv zu machen. Die **Abbildung unten** zeigt, wie die Insulinwirkdauer (DIA) und Glukoseziele in einem AAPS-Profil gespeichert werden können.

![24-07-23, profile basics - DIA and target](../images/f3904cc3-3d9e-497e-a3b6-3a49650053e6.png)

Für die restlichen drei Parameter Basalrate (BR), Insulinempfindlichkeitsfaktoren (ISF) und Insulin-Kohlenhydrat-Verhätnisse bzw. Mahlzeitenfaktoren (IC oder ICR), variieren die absoluten Werte und Trends Deines Insulinbedarfs in Abhängigkeit von Deiner Biologie, Geschlecht, Alter, Fitnessgrad usw., aber auch von vorübergehenden Einflüssen wie Krankheit und sportlicher Aktivitität mitunter erheblich. Für tiefere Einblicke in das Thema wird das englischsprachige Buch [“Brights Spots and Landmines”](https://brightspotsandlandmines.org/Bright_Spots_and_Landmines_by_Adam_Brown.pdf) von Adam Brown empfohlen.

#### Basal rates

Deine Basalrate ist die Insulinmenge (Einheiten pro Stunde), die abgegeben wird, um Deinen Glukosewert ohne Nahrung und Sport stabil zu halten

Saubere Basalraten ermöglichen Dir Morgens mit Werten im Zielbereich wachzuwerden, Mahlzeiten auszulassen, früher oder später essen zu können ohne hohe oder niedrige Werte zu bekommen. Die Insulinpumpe liefert alle paar Minuten kleine Mengen schnell wirkendes Insulins, um die durch die Leber abgegebene Glukose entsprechend in die Körperzellen zu bringen. Basalinsulin macht typischerweise 40 - 50% Deines täglichen Gesamtinsulinbedarfs (TDD) aus und ist abhängig von Deinen Ernährungsgewohnheiten. Es folgt üblicherweise Deinem Biorhythmus (cirkadianes Muster) mit einer Spitze und einem Tal im täglichen Insulinbedarf. Für weitere Informationen ist das Kapitel 23 des englischsprachigen Buches [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) von Gary Scheiner lesenswert.

Die meisten Diabetesberatenden (und Menschen mit einem Typ 1 Diabetes!) empfehlen zunächst die richtige Basalrate zu finden, bevor es an die Optimierung des ISF und des ICR geht.

#### Insulin sensitivity factor (ISF)

Der Insulinempfindlichkeitsfaktor (manchmal auch Korrekturfaktor genannt) ist ein Maß dafür, wie viel der Glukosewert durch eine Insulineinheit gesenkt wird.

**In mg/dl Einheiten:**
Wenn Dein ISF 40 ist, senkt jede Insulineinheit Deinen Glukosewert um ca. 40 mg/dl (z. B. 140 mg/dl auf 100 mg/dl).

**In mmol/l Einheiten:**
Wenn Dein ISF 1,5 ist, senkt jede Insulineinheit Deinen Glukosewert um 1,5 mmol/l (z. B. von 8 mmol/l auf 6,5 mmol/l).

An diesen Beispielen kannst Du erkennen, dass _kleinere_ ISF-Werte geringere Insulinempfindlichkeit bedeuten. Wenn Du also Deinen ISF von 40 auf 35 (mg/dl) oder 1,5 auf 1,3 (mmol/l) senkst, wird dies oft als Verstärkung des ISF bezeichnet. Umgekehrt schwächt die Erhöhung des ISF-Wertes von 40 auf 45 (mg/dl) oder 1,5 auf 1,8 mmol/l) Deinen ISF.

Wenn deine ISF zu stark ist (kleiner Wert) führt dies zu Hypos und wenn er zu schwach ist (großer Wert) wird er zu Hyperglykämie führen.

Eine Möglichkeit einen ersten Wert für den ISF am Tage zu ermitteln, nutzt Deinen tägliches Gesamtinsulinbedarf (TDD) und die 1700- bzw. 94-Regel. Für weitere Informationen ist das Kapitel 7 des englischsprachigen Buches [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) von Gary Scheiner lesenswert.

1700 (wenn Du in in mg/dl misst) oder 94 (mmol/l) / TDD = ca.

Beispiel: TDD = 40 IE
Ungefährer ISF (mg/dl) = 1700/40 = 43
Ungefährer ISF (mmol/l) = 94/40 = 2,4

Die **Abbildung unten** zeigt beispielhaft, wie die Basalraten und ISF-Werte in einem AAPS-Profil gespeichert werden können.

![24-07-23, profile basics - basal and ISF](../images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

#### Insulin to Carb ratio (ICR)

Der ICR ist ein Maß dafür, wie viele Gramm Kohlenhydrate von einer Insulineinheit abgedeckt werden. Ergänzung: Im Deutschen werden diese manchmal auch Mahlzeitenfaktoren genannt.

Teilweise wird auch I:C statt IC als Abkürzung verwendet oder vom Kohlenhydratverhältnis (carb ratio - CR) gesprochen.

Aufgrund von Hormonen und sportlichen Aktivitäten ist es normal, über den Tag verteilt unterschiedliche ICR-Werte zu haben. Viele Leute haben rund um die Frühstückszeit den niedrigsten ICR. So könnte zum Beispiel Dein ICR 1:8 zum Frühstück, 1:10 zum Mittagessen und 1:10 zum Abendessen sein. Doch dieses Muster lässt sich nicht verallgemeinern. Einige Menschen sind zum Abendessen Insulinresistenter und benötigen dann ein stärkeres/kleineren ICR.

Zum Beispiel bedeutet ein Insulin-Kohlenhydrat-Verhältnis von 1 zu 10 (1:10), dass Du eine Einheit Insulin pro 10g Kohlenhydrate benötigst. Ein Essen mit 25 g Kohlenhydraten würde 2,5 Einheiten Insulin benötigen.

Wenn Du einen schwächeren ICR-Wert hast, z. B. 1:20, würdest Du nur 0,5 IE Insulin zum Abdecken von 10 g Kohlenhydraten benötigen. Ein Essen mit 25g Kohlenhydraten würde 25/20 = 1,25 IE Insulin benötigen.

Wie in der **Abbildung unten** gezeigt, wird nur der berechnete Wert in das AAPS-Profil eingetragen. Ein Insulin-Kohlenhydrat-Verhältnis von 1:3,5 wird als "3.5" eingegeben. (Hinweis: Bitte verwende den Punkt als Dezimaltrennzeichen, d.h. "3.5" und nicht "3,5").

![24-07-23, profile basics - ICR](../images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)

#### Why should I try to get my profile settings right? Can’t the loop just take care of it?

Ein Hybrid Closed Loop _kann_ versuchen, die Insulinzufuhr anzupassen, um eine schlechte glykämische Kontrolle, die die Folge aus falschen Profilwerten ist, zu verbessern. Das kann er beispielsweise, in dem die Insulinzufuhr bei niedrigen Werten ausgesetzt wird. Du kannst eine deutlich bessere glykämische Kontrolle erreichen, wenn Deine Profilwerte so nah wie möglich am Bedarf Deines Körpers sind. Dies ist einer der Gründe, warum AAPS künstlich Ziele für den Übergang vom Open Loop zum Hybrid Closed Loop setzt. Zusätzlich gibt es Situationen (Sensor-Aufwärmphase, Sensorfehler _etc._), in denen der Loop geöffnet bzw. unterbrochen werden muss. Manchmal passiert das mitten in der Nacht und Du wirst dann für die richtigen Einstellungen dankbar sein.

Wenn Du von einem anderen Open oder Closed Loop Pumpensystem auf AAPS umsteigst, kennst hast Du vermutlich eine schon rechte Vorstellung von Deiner Basalrate (BR), Deinem Insulinempfindlichkeitsfaktoren (ISF) und Deinen Insulin-Kohlenhydratfaktoren bzw. Mahlzeitenfaktoren (IC oder ICR).

Wenn Du von der Pen-Therapie (z. B. ICT) zu AAPS wechselst, solltest Du Dich zunächst mit dem Umstieg vom Pen auf die Insulinpumpe beschäftigen, bevor Du den Wechsel auf AAPS gemeinsam mit Deinem Diabetes-Team planst und tatsächlich machst. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) von John Walsh & Ruth Roberts und [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) von Gary Scheiner sind in diesem Zusammenhang lesenswert.

In [Dein Profil nutzen und optimieren](operating - optimising - your profile link) zeigen wir Musterprofile, besprechen wie diese aufgesetzt werden, wie die Parameter, die Deine AAPS-Profil(e) ausmachen, optimiert werden und zeigen den Weg zu zusätzlichen Funktionen wie **Autotune**, das die Profiloptimierung automatisch vornehmen soll.

### Profile Helper

The [Profile Helper](../SettingUpAaps/ProfileHelper.md) can help you:

- build a profile from scratch for a kid
- compare two profiles
- clone a profile
