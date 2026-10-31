(Sensitivity-detection-and-COB-sensitivity-detection)=

# Calcul de Sensibilité

## Algorithme de sensibilité

**AAPS** propose actuellement 3 modèles de calcul de la sensibilité :

* Sensibilité AAPS 
* Sensibilité avec moyenne pondérée
* Sensibilité Oref1

### Sensibilité AAPS 

La sensibilité est calculée de la même façon que dans Oref1, mais vous pouvez définir la période d'historique à prendre en compte. L'absorption minimale des glucides est calculée à partir de la durée maximale d'absorption des glucides définie dans les préférences.

### Sensibilité avec moyenne pondérée

La sensibilité est calculée comme une moyenne pondérée des écarts. Vous pouvez définir la période d'historique à prendre en compte. Les écarts les plus récents ont un poids plus élevé. L'absorption minimale des glucides est calculée à partir de la durée maximale d'absorption des glucides définie dans les préférences. Cet algorithme est le plus rapide pour suivre les changements de sensibilité.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilité Oref1

La sensibilité est calculée à partir des 8 dernières heures de données, ou depuis le dernier changement de site s'il date de moins de 8 heures. Les glucides (s'ils ne sont pas absorbés) sont coupés après la durée définie dans les préférences. Seul l'algorithme Oref1 prend en charge les repas non signalés (RNS ou UAM). Cela veut dire que les périodes où des RNS (repas non signalés) sont détectés sont exclues du calcul de la sensibilité. Donc si vous utilisez les SMB avec les RNS, vous devez choisir l'algorithme Oref1 pour que cela fonctionne correctement. Pour plus d'informations sur les RNS, voir la section [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 est l'option recommandée : c'est la seule qui peut détecter les RNS et fonctionner avec [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), l'algorithme le plus récent.

## Glucides simultanés

Il y a une différence importante entre les algorithmes Sensibilité AAPS et Sensibilité avec moyenne pondérée d'un côté, et Oref1 de l'autre, quand plusieurs repas se chevauchent.

* Oref1 ne compte qu'un seul repas absorbé à la fois : le deuxième repas commence à être absorbé quand le premier repas est complètement absorbé.
* Sensibilité AAPS et Sensibilité avec moyenne pondérée commencent l'absorption tout de suite quand vous saisissez les glucides. S'il y a plus d'un repas actif, l'absorption minimale des glucides s'ajuste selon la taille du repas et la durée maximale d'absorption. L'absorption minimale sera donc plus élevée qu'avec Oref1.