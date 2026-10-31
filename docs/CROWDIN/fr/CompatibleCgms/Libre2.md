# Freestyle Libre 2 et 2+

Le capteur Freestyle Libre 2 est maintenant un vrai MGC, même avec l'application officielle. Mais LibreLink ne peut toujours pas envoyer de données à AAPS. Il existe plusieurs solutions pour l'utiliser avec AAPS.

## 1. Utiliser un pont Bluetooth et OOP

Les transmetteurs Bluetooth peuvent être utilisés avec le Libre 2 (EU) ou 2+ (EU) et une application avec un algorithme externe (OOP, out of process). Vous pouvez recevoir une glycémie toutes les 5 minutes, comme avec le [Libre 1](./Libre1.md).

Vérifiez que le pont et l'application que vous voulez utiliser sont compatibles avec votre capteur et avec xDrip.

Le Libre2 OOP (à trouver [ici](#Libre2_OOP2)) crée les mêmes glycémies que le lecteur d'origine. AAPS avec le Libre 2 fait un lissage sur 10 à 25 minutes pour éviter certains sauts. Voir plus bas [Lissage de valeur & valeurs brutes](#libre2-value-smoothing-raw-values). OOP génère des relevés toutes les 5 minutes avec la moyenne des 5 dernières minutes. Par conséquent, les glycémies ne sont pas aussi lisses, mais elles correspondent au lecteur d'origine et suivent plus vite les glycémies « réelles ». Si vous voulez utiliser la boucle avec OOP, activez tous les paramètres de lissage dans xDrip.

Il y a de bonnes raisons d'utiliser un transmetteur Bluetooth :

-   Vous pouvez choisir plusieurs stratégies d'étalonnage OOP2 (1) : garder les valeurs du lecteur avec « no calibration », étalonner le capteur comme un Libre 1 avec « calibrate based on raw », ou enfin étalonner les valeurs de type lecteur avec « calibrate based on glucose ».  
  Veillez à laisser OOP1 désactivé (2).

    → Menu hamburger → Settings → Less common settings → Other misc. options

![Étalonnage OOP2](../images/Libre2_OOP2Calibration.png)

-   Le capteur Libre 2 peut être utilisé 14,5 jours, comme le Libre 1
-   Le remplissage des 8 dernières heures (backfilling) est entièrement pris en charge

Remarque : le transmetteur peut être utilisé en même temps que l'application LibreLink, sans la gêner.

### Démarrer le capteur

- → Menu hamburger (1) → Start sensor (2) → Start sensor (3) → Répondez « Not Today » (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Cela ne démarre physiquement aucun capteur Libre2 et n'interagit en aucun cas avec eux. Cela sert simplement à indiquer à xDrip qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs mesurées au doigt pour l'étalonnage initial. Maintenant, les glycémies devraient s'afficher dans xDrip toutes les 5 minutes. Les valeurs manquées, par ex. parce que vous étiez trop loin de votre téléphone, ne seront pas complétées après coup.

Après un changement de capteur, xDrip détecte automatiquement le nouveau capteur et supprime toutes les données d'étalonnage. Vous pouvez vérifier votre glycémie après l'activation et faire un nouvel étalonnage initial.

### Configurer AAPS (seulement pour la boucle)

-   Dans **AAPS**, ouvrez le **menu** (☰) en haut à gauche, allez dans **Configuration** > **Source GLY** et choisissez **xDrip+**

![Configuration > Source GLY avec xDrip+ Glycémie sélectionné](../images/v4/Configuration/configuration_bg_source.png)

-   Si AAPS ne reçoit pas de glycémies quand le téléphone est en mode avion, utilisez 'Identify receiver' comme décrit sur la [page des paramètres xDrip](#xdrip-identify-receiver).

## 2. Utiliser la connexion directe de xDrip

```{admonition} Libre 2 EU only
:class: warning
xDrip ne prend pas en charge la connexion directe au Libre 2 US et AUS.
Seulement les modèles Libre 2 et 2+ **EU**.
```

- Suivez [ces instructions](./Libre2MinimalL00per.md) pour configurer xDrip, car la documentation d'origine renvoie à une version obsolète de OOP2.
- Suivez les instructions de configuration sur la [page des paramètres xDrip](../CompatibleCgms/xDrip.md).

-   Choisissez xDrip+ dans [Configuration > Source GLY](#Config-Builder-bg-source).

(libre2-value-smoothing-raw-values)=

### Lissage de valeur & valeurs brutes

Techniquement, la glycémie actuelle est envoyée à xDrip chaque minute. Un filtre de moyenne pondérée calcule par défaut une valeur lissée sur les 25 dernières minutes. Vous pouvez changer la période dans le menu NFC Scan features.

→ Menu hamburger → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![Paramètres avancés xDrip pour Libre 2 & valeurs brutes](../images/xDrip_Libre3_Smooth.png)

Ceci est obligatoire pour la boucle. Les courbes sont lisses et les résultats avec la boucle sont excellents. Les valeurs brutes sur lesquelles les alarmes sont basées sont un peu plus instables, mais correspondent aux valeurs que le lecteur affiche aussi. De plus, les valeurs brutes peuvent être affichées dans le graphique xDrip afin de pouvoir réagir à temps aux changements rapides. Veuillez activer Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" et "show Sensors Infos". Ainsi, les valeurs brutes sont aussi affichées sous forme de petits points blancs, et des informations supplémentaires sur le capteur sont disponibles dans le menu Système.

Les valeurs brutes sont très utiles lorsque les glycémies changent rapidement. Même si les points sautent davantage, vous verrez beaucoup mieux la tendance qu'avec la ligne lissée, pour prendre les bonnes décisions de traitement.

→ Menu hamburger → Settings → Less common settings → Advanced settings for Libre 2

![Paramètres avancés xDrip pour Libre 2 & valeurs brutes](../images/Libre2_RawValues.png)



#### Étalonnage

Vous pouvez étalonner le Libre2 **avec un décalage de -40 mg/dl à +20 mg/dl \[-2,2 mmol/l à +1,1 mmol/l\]** (intercept). La pente ne peut pas être modifiée. Veuillez vérifier par une mesure au doigt après la pose d'un nouveau capteur, en gardant à l'esprit qu'il peut être imprécis pendant les 12 premières heures après l'insertion. Comme il peut y avoir de grandes différences avec les mesures au doigt, vérifiez toutes les 24 heures et étalonnez si nécessaire. Si le capteur est complètement faux après quelques jours, il doit alors être remplacé.

## 3. Utiliser Diabox

- Installez [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf). Dans Diabox, allez dans Settings, Integration (Paramètres, Intégration) et activez Share data with other apps (partager les données avec d'autres applications).

![Diabox](../images/Diabox.png)

- Choisissez xDrip+ dans [Configuration > Source GLY](#Config-Builder-bg-source).

## 4. Utiliser Juggluco

Voir [ici](./Juggluco.md).
