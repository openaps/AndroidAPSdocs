Careportal (arrêté)
*******************************
Careportal reproduisait les fonctions que vous pouvez trouver dans Nightscout sous le symbole “+” et qui vous permet d'ajouter des remarques à vos enregistrements. Mais Careportal n'envoyait aucune commande vers la pompe ! Donc, si vous ajoutiez un bolus à l'aide de cet écran, cela ajoutait simplement une information dans Nightscout, la pompe ne recevait pas de demande de bolus. Cela a provoqué de nombreuses incompréhensions.

Le code utilisé à l'origine pour ajouter le support hors ligne de Careportal n'a pas été harmonisé avec le développement de AAPS et était vraiment bloquant pour les développements supplémentaires. **Par conséquent, la décision a été prise de supprimer Careportal dans la version 2.6 de AAPS.**

La plupart des fonctions de Careportal sont encore disponibles dans les Actions ou dans l'écran d'accueil. Ces actions peuvent être effectuées soit via l'onglet Actions soit via le menu hamburger, selon vos paramètres dans le `générateur de configuration <../Configuration/Config-Builder.html>`_.

Cette page indique où retrouver les fonctions précédemment disponibles dans Careportal.

Activité & Feedback
==============================
.. image:: ../images/Careportal_25_26_1_IIb.png
  :alt: Careportal activité & feedback
  
* Les information d'âge ont été déplacées dans l'onglet/menu Actions.
* La vérification de glycémie a été déplacée dans l'onglet/menu Actions.
* Cible temporaire a été déplacée dans l'onglet/menu Actions.
* Exercice n'est plus disponible, mais vous pouvez utiliser le champ Notes dans les boîtes de dialogue lorsque vous entrez des bolus, insuline etc. (voir la copie d'écran dans la section `Glucides et bolus <#glucides-et-bolus>`_ de cette page).

Glucides et bolus
==============================
.. image:: ../images/Careportal_25_26_2_IIa.png
  :alt: Careportal Glucides et bolus
  
* Pour renseigner un bolus - peu importe si c'est pour une collation, un repas ou une correction - utilisez le bouton Insuline sur l'écran d'accueil **et assurez vous de cocher "Ne pas administrer de bolus, enregistrer uniquement"!**
* L'option permettant d'antidater l'insulin - par ex. si vous avez oublié d'enregistrer une injection d'insuline par seringue - ne sera disponible que si la case "Ne pas administrer de bolus, enregistrer uniquement" est cochée.

   .. image:: ../images/Careportal_25_26_5.png
     :alt: Antidater l'insulin via le bouton Insulin

* Pour la correction des glucides, utilisez le bouton "Glucides" sur l'écran d'accueil.
* Les débits de base temporaire peuvent être démarrés et arrêtés via le bouton de l'onglet/menu Actions. Veuillez noter que le bouton passe de "BASAL TEMPORAIRE" à "ANNULER x%" lorsqu'un débit de base temporaire est défini.

MGC et OpenAPS
==============================
.. image:: ../images/Careportal_25_26_3_IIa.png
  :alt: Careportal MGC et OpenAPS
  
* L'insertion d'un capteur MGC est maintenant dans l'onglet/menu Actions.
* Toutes les autres fonctions de cette section ont été supprimées. Vous pouvez utiliser le champ Notes dans les boîtes de dialogue lorsque vous entrez des bolus, insuline etc. (voir la copie d'écran dans la section `Glucides et bolus <#glucides-et-bolus>`_ de cette page).

Pompe
==============================
.. image:: ../images/Careportal_25_26_4_IIb.png
  :alt: Careportal Pompe

* Le changement de Canule et de la cartouche de la pompe est possible en utilisant le bouton Amorcer/Remplir dans l'onglet/menu Actions.
* Le changement de Profil a été déplacé vers l'onglet/menu Actions.
* Le changement de la pile de pompe a été déplacé vers l'onglet/menu Actions.
