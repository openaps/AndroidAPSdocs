# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Was ist eine künstliche Bauchspeicheldrüse? Es ist eine App, die darauf abzielt, das zu tun, was eine funktionierende Bauchspeicheldrüse tut: den Blutzuckerspiegel automatisch in gesunden Grenzen zu halten.

Ein APS kann die Aufgabe nicht so gut erfüllen wie eine biologische Bauchspeicheldrüse, aber es kann die Behandlung von Typ-1-Diabetes mit handelsüblichen Geräten und einer einfachen und sicheren Software erleichtern.  Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Die App kommuniziert mit diesen Geräten über Bluetooth. Es führt seine Dosisberechnungen unter Verwendung eines Algorithmus oder eines Regelsatzes durch, der für eine andere künstliches Bauchspeicheldrüse, OpenAPS genannt, entwickelt wurde. OpenAPS hat Tausende von Nutzern, die Millionen von Nutzungsstunden gesammelt haben.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Die Einrichtung des Systems erfordert Entschlossenheit und technisches Wissen. Wenn Dir zu Beginn das technische Know-how noch fehlt, wirst Du es am Ende haben. Alle Informationen, die Du benötigst, findest Du auf dieser und anderen Seiten im Internet. Oder Du kannst Deine Fragen in Facebook-Gruppen oder anderen Foren an erfahrene Nutzer stellen. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- das System selbst erstellt, damit Er/Sie vollständig versteht, wie es funktioniert.
- seine individuellen Diabetes-Einstellungen zusammen mit seinem Diabetes-Team anpasst, so dass diese bestmöglich funktionieren.
- das System pflegt, auf dem aktuellen Stand hält und es überwacht, um sicherzustellen, dass es ordnungsgemäß funktioniert.

```{note}
**Haftungsausschluss und Warnung**

- Alle Informationen, Gedanken und Code, die hier beschrieben werden, sind ausschließlich zu Informations- und Bildungszwecken bestimmt. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Du verwendest Nightscout und AAPS auf eigenes Risiko. Setze es nicht ein, um Behandlungsentscheidungen zu treffen.
- Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

Bitte beachten - Dieses Projekt steht in keinerlei Verbindung zu: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) oder [Medtronic](https://www.medtronic.com/).
```

Wenn Du bereit bist, diese Herausforderung anzunehmen, lies bitte weiter.

## Primary goals behind AAPS

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
