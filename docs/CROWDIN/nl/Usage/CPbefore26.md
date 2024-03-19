# Careportal (bestaat niet meer)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records. Maar careportal gaf geen commando's aan de pomp! Dus als je via de Care Portal een bolus invoerde, dan kreeg je alleen een notitie van de bolus te zien op je Nightscout grafiek. De pomp zelf gaf géén bolus. Dit was verwarrend voor veel beginnende loopers.

De code die ervoor zorgde dat de Careportal in AndroidAPS offline kon worden gebruikt, hield bepaalde ontwikkelingen in de AndroidAPS code tegen. **Therefore, decision was made to remove careportal in AAPS version 2.6.**

De meeste functies van Careportal zijn nog beschikbaar, ze zijn verhuisd naar Acties of naar het Overzichtscherm. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../Configuration/Config-Builder.md).

Hieronder staat een overzicht van waar je de verschillende functies kunt vinden die voorheen in de Careportal stonden.

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
  :alt: Achteraf insuline registreren via insuline knop
  ```

- For carbs correction use the carbs button on the homescreen.

- Temporary basal rates can be started and stopped through the button in actions tab / menu. NB: De knop verandert van "TIJD. BASAAL" naar "ANNULEER x%" wanneer een tijdelijke basaalstand is ingesteld.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Careportal CGM & OpenAPS
```

- CGM sensor insert can now be found in the actions tab / menu.
- All other functions from this section have been removed. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](CPbefore26-carbs-bolus) on this page).

## Pomp

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Careportal Pomp
```

- Pump site and insulin cartridge change can be reach by using the button "prime/fill" in actions tab / menu.
- Profile switch was moved to actions tab / menu.
- Pump battery change was moved to actions tab / menu.
