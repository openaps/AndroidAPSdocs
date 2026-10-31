# Lissage des données de glycémie

Si les données de **glycémie** sautent ou sont bruitées, **AAPS** peut doser l'insuline de façon incorrecte et provoquer des hyperglycémies ou des hypoglycémies. Si vous voyez des erreurs ou si les données de votre MGC sautent, il est important de désactiver la boucle jusqu'à ce que le problème soit résolu. Selon votre MGC, ces problèmes peuvent venir de la configuration du MGC dans **AAPS** (voir plus bas) ou d'un problème au site du capteur MGC (il peut alors falloir remplacer le capteur MGC).

## Lissage des données dans AAPS

**AAPS** offre la possibilité de lisser les données dans **AAPS** plutôt que dans l'application du MGC. Ouvrez le **menu** (☰), sélectionnez [**Configuration**](../SettingUpAaps/ConfigBuilder.md), puis **Lissage**. Il y a quatre options, et une seule peut être active à la fois : **Pas de lissage**, **Lissage Exponentiel**, **Lissage moyen** et **Filtre de Kalman Unscented**.

![Configuration > Lissage](../images/v4/Configuration/configuration_smoothing.png)

### Lissage Exponentiel

En général, c'est l'option conseillée pour commencer, car c'est elle qui corrige le bruit de la façon la plus forte et elle réécrit la valeur la plus récente. Cependant, consultez le tableau ci-dessous pour d'autres recommandations précises.

### Lissage moyen

Cette option fonctionne de façon semblable au lissage arrière (back smoothing) qui existait déjà sur certaines plateformes de MGC. Elle réagit plus vite aux changements récents de la glycémie, et elle risque donc plus de mal réagir aux données bruitées du MGC.

### Pas de lissage

Utilisez cette option seulement si les données de votre MGC sont déjà bien lissées par votre application de collecte avant d'être transmises à **AAPS**.

### Filtre de Kalman Unscented (UKF)

Cette option utilise un modèle statistique pour estimer en continu votre vraie valeur de glycémie et sa vitesse de variation à partir des valeurs reçues (qui peuvent être bruitées). Elle s'adapte automatiquement au niveau de bruit actuel de votre capteur. Elle détecte aussi et rejette les valeurs soudaines et aberrantes. C'est une alternative plus avancée au lissage exponentiel et au lissage moyen. Elle est utile si vous voulez que le lissage s'adapte lui-même au niveau de bruit variable de votre capteur, au lieu d'utiliser une méthode fixe.

(smoothing-xdrip-dexcom-g6)=

## Suggestions pour utiliser le lissage

Vous pouvez aussi changer la méthode de lissage automatiquement, par exemple selon l'âge du capteur, avec l'[action d'automatisation](#automations-automation-action) **Changer le lissage**.

|               | Exponentiel |  Moyenne  | Pas de lissage |
| ------------- |:-----------:|:---------:|:--------------:|
| G5/G6/ONE     |  Si bruité  |           |   Recommandé   |
| G7/ONE+/Stelo |  Si bruité  | Si stable |                |

Les capteurs Libre sont bruités et peuvent avoir besoin d'un lissage. Avec la connexion directe xDrip, ou avec la source de données application patchée (qui reçoit les données d'une autre application, Juggluco compris), [le lissage est déjà fait dans l'application](#libre2-value-smoothing-raw-values).

| Capteur / Source de données | Juggluco | xDrip direct | xDrip bridge | xDrip application patchée |
| --------------------------- |:--------:|:------------:|:------------:|:-------------------------:|
| Libre 1/14 jours/Pro        |   N.A.   |     N.A.     |   Moyenne    |           N.A.            |
| Libre 2/2+ (UE)             | Moyenne  |    Aucun     |   Moyenne    |           Aucun           |
| Libre 2/2+/3/3+             | Moyenne  |     N.A.     |     N.A.     |           Aucun           |
