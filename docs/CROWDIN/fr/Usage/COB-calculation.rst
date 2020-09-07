Calcul GA
**************************************************

Comment AndroidAPS calcul-il la valeur de GA?
==================================================

Oref0 / Oref1
--------------------------------------------------

Les glucides non absorbés sont coupés après un certain temps

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref0 / Oref1

AAPS, Moyenne pondérée
--------------------------------------------------

l'absorption est calculée pour avoir `GA == 0` après la durée spécifiée

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, Moyenne pondérée

Si l'absorption minimale de glucides (min_5m_carbimpact) est utilisée à la place de la valeur calculée à partir des écarts de GLY, un point orange apparaît sur le graphique GA.

Détection de GA erronés
==================================================

A partir de la version 2.4, AAPS vous avertit si vous êtes sur le point de faire un bolus avec GA d'un précédent repas et que l'algorithme pense que le calcul actuel des GA pourrait être erroné. Dans ce cas, il vous donnera une indication supplémentaire sur l'écran de confirmation après l'utilisation de l'assistant bolus. 

Comment AndroidAPS détecte-t-il les mauvaises valeurs de GA ? 
--------------------------------------------------

Normalement, AAPS détecte l'absorption des glucides par des écarts de glycémie. Si vous avez entré des glucides, mais que AAPS ne peut pas voir leur absorption estimée via les variations de GLY, il utilisera la méthode `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#parametres-d-absorption>`_ pour calculer l'absorption à la place (appelée 'fallback'). Comme cette méthode ne calcule que l'absorption minimale de glucides sans tenir compte des écarts de GLY, elle peut conduire à des valeurs de GA incorrectes.

.. image:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: soupçon de GA erronés

Dans la capture d'écran ci-dessus, 41% du temps l'absorption de glucides a été mathématiquement calculée par le min_5m_carbimpact au lieu de la valeur détectée par les variations de GLY.  Cela signifie que vous avez peut-être moins de glucides actifs que calculé par l'algorithme. 

Comment gérer cet avertissement ? 
--------------------------------------------------

- Envisager d'annuler le traitement, appuyez sur Annuler au lieu de OK.
- Calculez à nouveau votre prochain repas avec l'assistant de bolus laissant GA non coché.
- Si vous êtes sûr que vous avez besoin d'un bolus de correction, renseignez le manuellement.
- Dans tous les cas, faites attention à ne pas surdoser !

Pourquoi l'algorithme ne détecte-on pas correctement les GA ? 
--------------------------------------------------

- Peut-être que vous avez surestimé glucides lorsque vous les avez saisis.  
- Vous avez fait de l'exercice après votre repas précédent
- le ratio G/I doit être ajusté
- La valeur de min_5m_carbimpact est incorrecte (8 est recommandée avec SMB, 3 avec AMA)

Correction manuelle des glucides
==================================================
If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described `here <../Getting-Started/Screenshots.html#carb-correction>`_.
