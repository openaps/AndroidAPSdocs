# Was ist ein Closed Loop System mit AndroidAPS?

AndroidAPS ist eine App, die als künstliche Bauchspeicheldrüse (artificial pancreas system - APS) auf einem Android-Smartphone arbeitet. Was ist eine künstliche Bauchspeicheldrüse? Es ist eine App, die darauf abzielt, das zu tun, was eine funktionierende Bauchspeicheldrüse tut: den Blutzuckerspiegel automatisch in gesunden Grenzen zu halten.

Ein APS kann die Aufgabe nicht so gut erfüllen wie eine biologische Bauchspeicheldrüse, aber es kann die Behandlung von Typ-1-Diabetes mit handelsüblichen Geräten und einer einfachen und sicheren Software erleichtern.  Diese Geräte beinhalten einen kontinuierlichen Glukosemonitor (CGM), um AndroidAPS über Deinen Blutzuckerspiegel zu informieren, und eine Insulinpumpe, die von AndroidAPS gesteuert wird, um die passenden Insulindosen zu liefern.  Die App kommuniziert mit diesen Geräten über Bluetooth. Es führt seine Dosisberechnungen unter Verwendung eines Algorithmus oder eines Regelsatzes durch, der für eine andere künstliches Bauchspeicheldrüse, OpenAPS genannt, entwickelt wurde. OpenAPS hat Tausende von Nutzern, die Millionen von Nutzungsstunden gesammelt haben.

Ein Hinweis zur Vorsicht: AndroidAPS wird nicht von einer medizinischen Aufsichtsbehörde reguliert. Die Verwendung von AndroidAPS ist im Wesentlichen die Durchführung eines medizinischen Experiments an sich selbst. Die Einrichtung des Systems erfordert Entschlossenheit und technisches Wissen. Wenn Dir zu Beginn das technische Know-how noch fehlt, wirst Du es am Ende haben. Alle Informationen, die Du benötigst, findest Du auf dieser und anderen Seiten im Internet. Oder Du kannst Deine Fragen in Facebook-Gruppen oder anderen Foren an erfahrene Nutzer stellen. Viele unterschiedliche Menschen mit Diabetes haben AndroidAPS erfolgreich erstellt und nutzen es nun ganz sicher. Es ist aber wichtig, dass jeder Benutzer

- das System selbst erstellt, damit Er/Sie vollständig versteht, wie es funktioniert.
- seine individuellen Diabetes-Einstellungen zusammen mit seinem Diabetes-Team anpasst, so dass diese bestmöglich funktionieren.
- das System pflegt, auf dem aktuellen Stand hält und es überwacht, um sicherzustellen, dass es ordnungsgemäß funktioniert.

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.
- Use of code from github.com is without warranty or formal support of any kind. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Wenn Du bereit bist, diese Herausforderung anzunehmen, lies bitte weiter.

## Die primären Ziele von AndroidAPS

- Eine App mit eingebauter Sicherheit. Um mehr über die Sicherheitsfunktionen der Algorithmen, die als oref0 und oref1 bekannt sind, zu lesen, klicke hier (<https://openaps.org/reference-design/>)
- Eine All-in-one-App für das Management Deines Typ1-Diabetes mit einer künstlichen Bauchspeicheldrüse und Nightscout.
- Eine App, zu der Benutzer bei Bedarf Module einfach hinzufügen oder entfernen können.
- Eine App mit Versionen für verschiedenen Standorte und Sprachen.
- Eine App, die im Open- und Closed-Loop-Modus verwendet werden kann.
- Eine App, die vollkommen transparent ist: Benutzer können Parameter eingeben, Ergebnisse sehen und die endgültige Entscheidung treffen.
- Eine App, die unabhängig von bestimmten Pumpen-Treibern ist und eine "virtuelle Pumpe" enthält, damit Benutzer sicher experimentieren können, bevor sie diese zusammen mit ihrer Insulinpumpe verwenden.
- Eine App, die eng mit Nightscout verbunden ist.
- Eine App, in der der Benutzer die Kontrolle über die Sicherheitseinschränkungen hat.

## Wie lege ich los?

Natürlich sind alle hier verfügbaren Informationen für Dein Closed Loop System sehr wichtig, es ist aber auch normal, dass die vielen neuen Dinge anfangs etwas verwirrend wirken. Gute Orientierung bieten die [Modul-Übersicht](../Module/module.md) und die [Objectives (Ziele)](../Usage/Objectives.html).
