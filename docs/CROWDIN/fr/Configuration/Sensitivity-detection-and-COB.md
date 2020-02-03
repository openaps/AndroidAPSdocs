# Estimation de Sensibilité

## Algorithme de sensibilité

Actuellement, nous avons 4 modèles de détection de sensibilité:

* Sensibilité Oref0
* Sensibilité AAPS 
* Sensibilité avec moyenne pondérée
* Sensibilité Oref1

### Sensibilité Oref0

La sensibilité de base est calculée à partir des données des dernières 24h et les glucides (si non absorbés) sont coupés après le temps spécifié dans les préférences. L'algorithme est similiaire à celui de OpenAPS Oref0, décrit dans la documentation [OpenAPS Oref0](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Sensibilité AAPS 

La sensibilité est calculée de la même façon que Oref0, mais vous pouvez spécifier la durée prise en compte. L'absorption minimale des glucides est calculée à partir du temps d'absorption maximale des glucides renseigné dans les préférences

### Sensibilité avec moyenne pondérée

La sensibilité est calculée par une moyenne pondérée des écarts. Vous pouvez spécifier la durée prise en compte. Les écarts les plus récents ont un poids plus élevé. L'absorption minimale des glucides est calculée à partir du temps d'absorption maximale des glucides renseigné dans les préférences. Cet algorithme est le plus rapide à suivre les changements de sensibilité.

### Sensibilité Oref1

La sensibilité est calculée à partir des données des 8 dernières heures ou à partir du dernier changement de site, si celui-ci date de moins de 8 heures. Les glucides (si non absorbés) sont coupés après la durée spécifiée dans les préférences. Seul l'algorithme Oref1 prend en charge les repas non signalés (RNS ou UAM). Cela signifie que les périodes avec des RNS détectés sont exclus du calcul de sensibilité. Donc, si vous utilisez les SMB avec RNS, vous devez choisir l'algorithme Oref1 pour que cela fonctionne correctement. Pour plus d'informations, lisez la documentation [OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Simultaneous carbs

There is significant difference while using AAPS, WeightedAverage vs Oref0, Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparation to Oref plugins.