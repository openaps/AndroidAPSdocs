# Careportal (arrêté)

Careportal reproduit les fonctions que vous pouvez trouver dans Nightscout sous le symbole “+” et vous permet d'ajouter des remarques à vos enregistrements. Mais Careportal n'envoyait aucune commande vers la pompe ! Donc, si vous ajoutiez un bolus à l'aide de cet écran, cela ajoutait simplement une information dans Nightscout, la pompe ne recevait pas de demande de bolus. Cela a provoqué de nombreuses incompréhensions.

Le code utilisé à l'origine pour ajouter le support hors ligne de Careportal n'a pas été harmonisé avec le développement de AAPS et était vraiment bloquant pour les développements supplémentaires. **Par conséquent, la décision a été prise de supprimer Careportal dans la version 2.6 de AAPS.**

La plupart des fonctions de Careportal sont encore disponibles dans les Actions ou dans l'écran d'accueil. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../SettingUpAaps/ConfigBuilder.md).

Cette page indique où retrouver les fonctions précédemment disponibles dans Careportal.

## Activité & Feedback

![Careportal activity & feedback](../images/Careportal_25_26_1_IIb.png)

- Les informations d'âge ont été déplacées dans l'onglet/menu Actions.
- La vérification de glycémie a été déplacée dans l'onglet/menu Actions.
- Cible temporaire a été déplacée dans l'onglet/menu Actions.
- Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs--bolus) on this page).

(CPbefore26-carbs-bolus)=

## Glucides et bolus

![Careportal carbs & bolus](../images/Careportal_25_26_2_IIa.png)

- Pour renseigner un bolus - peu importe si c'est pour une collation, un repas ou une correction - utilisez le bouton Insuline sur l'écran d'accueil **et assurez vous de cocher "Ne pas administrer de bolus, enregistrer uniquement"!**

- L'option permettant d'antidater l'insulin - par ex. si vous avez oublié d'enregistrer une injection d'insuline par seringue - ne sera disponible que si la case "Ne pas administrer de bolus, enregistrer uniquement" est cochée.

  ![Backdate insulin via insulin button](../images/Careportal_25_26_5.png)

- Pour la correction des glucides, utilisez le bouton "Glucides" sur l'écran d'accueil.

- Les débits de base temporaire peuvent être démarrés et arrêtés via le bouton de l'onglet/menu Actions. Veuillez noter que le bouton passe de "BASAL TEMPORAIRE" à "ANNULER x%" lorsqu'un débit de base temporaire est défini.

## MGC et OpenAPS

![Careportal CGM & OpenAPS](../images/Careportal_25_26_3_IIa.png)

- L'insertion d'un capteur MGC est maintenant dans l'onglet/menu Actions.
- Toutes les autres fonctions de cette section ont été supprimées. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs--bolus) on this page).

## Pump

![Careportal Pump](../images/Careportal_25_26_4_IIb.png)

- Le changement de Canule et de la cartouche de la pompe est possible en utilisant le bouton Amorcer/Remplir dans l'onglet/menu Actions.
- Le changement de Profil a été déplacé vers l'onglet/menu Actions.
- Le changement de la pile de pompe a été déplacé vers l'onglet/menu Actions.
