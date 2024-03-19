# Careportal (eingestellt)

Careportal hat die Funktionen repliziert, die auf der Nightscout-Webseite unter dem "+"-Symbol zu finden sind, das es erlaubt, Notizen hinzuzufügen. Aber Careportal hat keine Befehle an die Pumpe abgegeben! Wenn also ein Bolus über diesen Bildschirm hinzugefügt wurde, wurde dieser einfach im Nightscout-Datensatz vermerkt, die Pumpe hat aber keinen Bolus abgegeben. Dies führte zu vielen Missverständnissen.

Der ursprünglich für die Offline-Unterstützung des Careportals verwendete Code harmonierte nicht mit der Entwicklung von AAPS und blockierte die weitere Programmierung. **Deshalb wurde beschlossen, Careportal in der AAPS-Version 2.6 zu entfernen.**

Die meisten Funktionen des Careportals sind weiter entweder in "Aktionen" oder auf dem Startbildschirm zu finden. Die "Aktionen" können entweder über den Tab "Aktionen" (AKT) oder das Hamburger-Menü erreicht werden - abhängig von den Einstellungen in der [Konfiguration](../Configuration/Config-Builder.md).

Auf dieser Seite zeigen wir, wo die bisher über das Careportal verfügbaren Funktionen nun zu finden sind.

## Aktivität & Feedback

```{image} ../images/Careportal_25_26_1_IIb.png
:alt: "Careportal - Aktivität\xE4t & Feedback"
```

- Alter-Informationen wurden in Aktionen-Tab / Menü verschoben.
- BZ Test wurde auf den Tab / in das Menü "Aktionen" verschoben.
- Temporäres Ziel wurde auf den Tab / in das Menü "Aktionen" verschoben.
- Übung ist nicht mehr verfügbar, aber Du kannst das Notizfeld im Dialogfeld verwenden, wenn Du eine Aktion wie Bolus usw. durchführst. (siehe Screenshot in Abschnitt [Carbs & bolus](CPbefore26-carbs-bolus) auf dieser Seite).

(CPbefore26-carbs-bolus)=

## Kohlenhydrate & Bolus

```{image} ../images/Careportal_25_26_2_IIa.png
:alt: Careportal Kohlenhydrate & Bolus
```

- Um einen Bolus - unabhängig ob für eine Mahlzeit, einen Snack oder zur Korrektur - als Notiz zu vermerken, nutze den Insulin-Button auf dem Startbildschirm **und achte darauf "Bolus nur erfassen" anzukreuzen.**

- Die Option, Insulineinträge in der Vergangenheit zu machen - z.B. wenn Du vergessen hast, per Spritze injiziertes Insulin zu vermerken - ist nur verfügbar, wenn die Checkbox "Bolus nur erfassen" angehakt ist.

  ```{image} ../images/Careportal_25_26_5.png
  :alt: Insulin in der Vergangenheit erfassen
  ```

- Für eine "Kohlenhydrat Korrektur" kannst Du den Button "Kohlenhydrate" auf dem Startbildschirm verwenden.

- Temporäre Basalraten können über die Schaltfläche im Tab / Menü "Aktionen" gestartet und gestoppt werden. Beachte, dass sich die Bezeichnung der Schaltfläche von "TBR" zu "Abbrechen X%" ändert, wenn eine temporäre Basalrate abgegeben wird.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Careportal CGM & OpenAPS
```

- Das Setzen des CGM-Sensors kannst Du jetzt im Tab / Menü "Aktionen" erfassen.
- Alle anderen Funktionen aus diesem Abschnitt wurden entfernt. Wenn Du eine Aktion wie z.B. Bolusabgabe dokumentieren möchtest, nutze das Notizfeld im Dialogfeld (siehe Screenshot im Bereich [Kohlenhydrate & Bolus](CPbefore26-carbs-bolus) auf dieser Seite).

## Pumpe

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Careportal Pumpe
```

- Katheter- und Reservoirwechsel können über die Schaltfläche "Katheterwechsel" im Tab / Menü "Aktionen" erfasst werden.
- Der Profilwechsel wurde auf den Tab / in das Menü "Aktionen" verschoben.
- Der Batteriewechsel wurde ebenfalls auf den Tab / in das Menü "Aktionen" verschoben.
