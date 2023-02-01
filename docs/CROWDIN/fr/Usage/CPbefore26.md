# Careportal (arrêté)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records. Mais Careportal n'envoyait aucune commande vers la pompe ! Donc, si vous ajoutiez un bolus à l'aide de cet écran, cela ajoutait simplement une information dans Nightscout, la pompe ne recevait pas de demande de bolus. Cela a provoqué de nombreuses incompréhensions.

Le code utilisé à l'origine pour ajouter le support hors ligne de Careportal n'a pas été harmonisé avec le développement de AAPS et était vraiment bloquant pour les développements supplémentaires. **Therefore, decision was made to remove careportal in AAPS version 2.6.**

La plupart des fonctions de Careportal sont encore disponibles dans les Actions ou dans l'écran d'accueil. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../Configuration/Config-Builder.md).

Cette page indique où retrouver les fonctions précédemment disponibles dans Careportal.

## Activity & feedback

```{image} ../images/Careportal_25_26_1_IIb.png
:alt: Careportal activity & feedback
```

- Age information was moved to actions tab / menu.
- BG check was moved to actions tab / menu.
- Temporary target was moved to actions tab / menu.
- Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs-bolus) on this page).

## Carbs & bolus

```{image} ../images/Careportal_25_26_2_IIa.png
:alt: Careportal carbs & bolus
```

- To note a bolus - no matter if for snack, meal or correction - use the insulin button on the homescreen **and make sure to tick "Do not bolus, record only"!**

- Option to backdate insulin - i.e. if you forgot to register insulin given by syringe - will only be available if checkbox "Do not bolus, record only" is ticked.

  ```{image} ../images/Careportal_25_26_5.png
  :alt: Antidater l'insulin via le bouton Insulin
  ```

- For carbs correction use the carbs button on the homescreen.

- Temporary basal rates can be started and stopped through the button in actions tab / menu. Veuillez noter que le bouton passe de "BASAL TEMPORAIRE" à "ANNULER x%" lorsqu'un débit de base temporaire est défini.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Careportal CGM & OpenAPS
```

- CGM sensor insert can now be found in the actions tab / menu.
- All other functions from this section have been removed. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs-bolus) on this page).

## Pompe

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Careportal Pompe
```

- Pump site and insulin cartridge change can be reach by using the button "prime/fill" in actions tab / menu.
- Profile switch was moved to actions tab / menu.
- Pump battery change was moved to actions tab / menu.
