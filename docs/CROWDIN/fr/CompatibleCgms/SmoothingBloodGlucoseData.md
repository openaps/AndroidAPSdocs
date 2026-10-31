# Lissage des données de glycémie

Si les données de **glycémie** sautent ou sont bruitées, **AAPS** peut doser l'insuline de façon incorrecte et provoquer des hyperglycémies ou des hypoglycémies. Si vous voyez des erreurs ou si les données de votre MGC sautent, il est important de désactiver la boucle jusqu'à ce que le problème soit résolu. Selon votre MGC, ces problèmes peuvent venir de la configuration du MGC dans **AAPS** (voir plus bas) ou d'un problème au site du capteur MGC (il peut alors falloir remplacer le capteur MGC).

## Smoothing data within AAPS

**AAPS** offre la possibilité de lisser les données dans **AAPS** plutôt que dans l'application du MGC. Ouvrez le **menu** (☰), sélectionnez [**Configuration**](../SettingUpAaps/ConfigBuilder.md), puis **Lissage**. Il y a quatre options, et une seule peut être active à la fois : **Pas de lissage**, **Lissage Exponentiel**, **Lissage moyen** et **Filtre de Kalman Unscented**.

![Configuration > Lissage](../images/v4/Configuration/configuration_smoothing.png)

### Exponential smoothing

En général, c'est l'option conseillée pour commencer, car c'est elle qui corrige le bruit de la façon la plus forte et elle réécrit la valeur la plus récente. Cependant, consultez le tableau ci-dessous pour d'autres recommandations précises.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Utilisez cette option seulement si les données de votre MGC sont déjà bien lissées par votre application de collecte avant d'être transmises à **AAPS**.

### Filtre de Kalman Unscented (UKF)

Cette option utilise un modèle statistique pour estimer en continu votre vraie valeur de glycémie et sa vitesse de variation à partir des valeurs reçues (qui peuvent être bruitées). Elle s'adapte automatiquement au niveau de bruit actuel de votre capteur. Elle détecte aussi et rejette les valeurs soudaines et aberrantes. C'est une alternative plus avancée au lissage exponentiel et au lissage moyen. Elle est utile si vous voulez que le lissage s'adapte lui-même au niveau de bruit variable de votre capteur, au lieu d'utiliser une méthode fixe.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

Vous pouvez aussi changer la méthode de lissage automatiquement, par exemple selon l'âge du capteur, avec l'[action d'automatisation](#automations-automation-action) **Changer le lissage**.

|               | Exponential |  Average  | No Smoothing |
| ------------- |:-----------:|:---------:|:------------:|
| G5/G6/ONE     |  If noisy   |           | Recommended  |
| G7/ONE+/Stelo |  If noisy   | Si stable |              |

Les capteurs Libre sont bruités et peuvent avoir besoin d'un lissage. Avec la connexion directe xDrip, ou avec la source de données application patchée (qui reçoit les données d'une autre application, Juggluco compris), [le lissage est déjà fait dans l'application](#libre2-value-smoothing-raw-values).

| Capteur / Source de données | Juggluco | xDrip direct | xDrip bridge | xDrip application patchée |
| --------------------------- |:--------:|:------------:|:------------:|:-------------------------:|
| Libre 1/14 jours/Pro        |   N.A.   |     N.A.     |   Average    |           N.A.            |
| Libre 2/2+ (UE)             | Average  |     None     |   Average    |           None            |
| Libre 2/2+/3/3+             | Average  |     N.A.     |     N.A.     |           None            |
