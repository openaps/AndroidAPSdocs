# Careportal (eingestellt)

Careportal hat die Funktionen repliziert, die auf der Nightscout-Webseite unter dem "+"-Symbol zu finden sind, das es erlaubt, Notizen hinzuzufügen. Aber Careportal hat keine Befehle an die Pumpe abgegeben! Wenn also ein Bolus über diesen Bildschirm hinzugefügt wurde, wurde dieser einfach im Nightscout-Datensatz vermerkt, die Pumpe hat aber keinen Bolus abgegeben. Dies führte zu vielen Missverständnissen.

Der ursprünglich für die Offline-Unterstützung des Careportals verwendete Code harmonierte nicht mit der Entwicklung von AAPS und blockierte die weitere Programmierung. **Therefore, decision was made to remove careportal in AAPS version 2.6.**

Die meisten Funktionen des Careportals sind weiter entweder in "Aktionen" oder auf dem Startbildschirm zu finden. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../Configuration/Config-Builder.md).

Auf dieser Seite zeigen wir, wo die bisher über das Careportal verfügbaren Funktionen nun zu finden sind.

## Activity & feedback

```{image} ../images/Careportal_25_26_1_IIb.png
:alt: Careportal activity & feedback
```

- Age information was moved to actions tab / menu.
- BG check was moved to actions tab / menu.
- Temporary target was moved to actions tab / menu.
- Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](CPbefore26-carbs-bolus) on this page).

(CPbefore26-carbs-bolus)=

## Carbs & bolus

```{image} ../images/Careportal_25_26_2_IIa.png
:alt: Careportal carbs & bolus
```

- To note a bolus - no matter if for snack, meal or correction - use the insulin button on the homescreen **and make sure to tick "Do not bolus, record only"!**

- Option to backdate insulin - i.e. if you forgot to register insulin given by syringe - will only be available if checkbox "Do not bolus, record only" is ticked.

  ```{image} ../images/Careportal_25_26_5.png
  :alt: Insulin in der Vergangenheit erfassen
  ```

- For carbs correction use the carbs button on the homescreen.

- Temporary basal rates can be started and stopped through the button in actions tab / menu. Beachte, dass sich die Bezeichnung der Schaltfläche von "TBR" zu "Abbrechen X%" ändert, wenn eine temporäre Basalrate abgegeben wird.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Careportal CGM & OpenAPS
```

- CGM sensor insert can now be found in the actions tab / menu.
- All other functions from this section have been removed. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](CPbefore26-carbs-bolus) on this page).

## Pumpe

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Careportal Pumpe
```

- Pump site and insulin cartridge change can be reach by using the button "prime/fill" in actions tab / menu.
- Profile switch was moved to actions tab / menu.
- Pump battery change was moved to actions tab / menu.
