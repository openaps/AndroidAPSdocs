# Estimation de Sensibilité

## Algorithme de sensibilité

Actuellement, nous avons 3 modèles de détection de sensibilité:

* Sensibilité AAPS 
* Sensibilité avec moyenne pondérée
* Sensibilité Oref1

### Sensibilité AAPS 

La sensibilité est calculée de la même façon que Oref1, mais vous pouvez spécifier la durée prise en compte. L'absorption minimale des glucides est calculée à partir du temps d'absorption maximale des glucides renseigné dans les préférences

### Sensibilité avec moyenne pondérée

La sensibilité est calculée par une moyenne pondérée des écarts. Vous pouvez spécifier la durée prise en compte. Les écarts les plus récents ont un poids plus élevé. L'absorption minimale des glucides est calculée à partir du temps d'absorption maximale des glucides renseigné dans les préférences. Cet algorithme est le plus rapide à suivre les changements de sensibilité.

### Sensibilité Oref1

La sensibilité est calculée à partir des données des 8 dernières heures ou à partir du dernier changement de site, si celui-ci date de moins de 8 heures. Les glucides (si non absorbés) sont coupés après la durée spécifiée dans les préférences. Seul l'algorithme Oref1 prend en charge les repas non signalés (RNS ou UAM). Cela signifie que les périodes avec des RNS détectés sont exclus du calcul de sensibilité. Donc, si vous utilisez les SMB avec RNS, vous devez choisir l'algorithme Oref1 pour que cela fonctionne correctement. Pour plus d'informations, lisez la documentation [OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Glucides simultanés

Il y a une différence significative quand on utilise AAPS et moyenne pondérée versus Oref1. Les plugins Oref ne s'attendent qu'à un seul repas aborbé à la fois. Cela signifie que le 2e repas commence à être absorbé qu'après la décomposition complète du 1er repas. Avec la sensibilité AAPS et moyenne pondérée, la décomposition commence immédiatement après avoir entré les glucides. S'il y a plus d'un repas en cours d'absoption, la décomposition minimale des glucides s'ajuste en fonction de la taille du repas et du temps d'absorption maximum. En conséquence, l'absorption minimale sera plus élevée en comparaison avec les plugins Oref.