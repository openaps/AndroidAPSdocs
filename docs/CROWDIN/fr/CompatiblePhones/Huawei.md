# Comment configurer un téléphone Huawei

**Téléphones concernés par cette page :** les téléphones Huawei avec **EMUI 12 à EMUI 15**. Toutes ces versions sont basées sur Android 12, le minimum pour la version actuelle d'**AAPS**. Sur un téléphone avec une version d'EMUI plus ancienne, vous pouvez seulement utiliser une [version plus ancienne d'AAPS](#maintenance-android-version-aaps-version).

```{admonition} Téléphones HarmonyOS NEXT / HarmonyOS 5 :class: warning

Les téléphones Huawei récents vendus en Chine fonctionnent sous HarmonyOS NEXT (HarmonyOS 5 et plus). Ce système n'est plus Android et ne peut pas faire fonctionner **AAPS**. ```

Les téléphones Huawei ferment de façon très agressive les applications qui tournent en arrière-plan. Appliquez tous les réglages ci-dessous à **AAPS** et à votre application MGC (par exemple xDrip+ ou Juggluco). Sinon, la boucle et les valeurs de glycémie peuvent s'arrêter quand l'écran est éteint.

Les noms des menus peuvent être un peu différents selon les modèles. Si vous ne trouvez pas un réglage, tapez son nom dans la barre de recherche en haut des **Paramètres**.

Les captures d'écran ci-dessous viennent d'une version plus ancienne d'EMUI. Les réglages sont les mêmes sur EMUI 12 à 15.

## Ignorer l'optimisation de la batterie

1. Ouvrez **Paramètres > Applications > Applications**.
2. Appuyez sur le menu **⋮** en haut à droite et choisissez **Accès spécial > Optimisation de la batterie**.
3. Appuyez sur la flèche en haut de la liste et choisissez **Toutes les applications**.
4. Choisissez **AAPS**, puis **Ne pas autoriser**. Huawei n'optimisera plus les applications de cette liste.
5. Faites la même chose pour votre application MGC.

![Huawei - ignorer l'optimisation de la batterie](../images/Huawei_BatteryOptimization.png)

## Lancement d'applications : autoriser l'exécution en arrière-plan

1. Ouvrez **Paramètres > Batterie > Lancement d'applications** (ou **Paramètres > Applications > Applications >** choisissez l'application **> Batterie > Lancement d'applications**).
2. Trouvez **AAPS** et désactivez **Gérer automatiquement**.
3. Dans la fenêtre **Gérer manuellement**, activez les trois options : 
    - **Lancement automatique**
    - **Lancement secondaire** (peut être lancée par d'autres applications)
    - **Exécution en arrière-plan**
4. Faites la même chose pour votre application MGC.

![Huawei - options de batterie](../images/Huawei_BatteryOptions.png)

## Verrouiller AAPS dans les applications récentes

Les applications verrouillées ne sont pas fermées quand vous videz la liste des applications récentes.

1. Ouvrez la liste des applications récentes.
2. Faites glisser la carte **AAPS** vers le bas. Un symbole de cadenas apparaît sur la carte.
3. Faites la même chose pour votre application MGC.

![Huawei - verrouiller l'application](../images/Huawei_LockApp.png)

## Mode économie d'énergie

Laissez **Mode économie d'énergie** et **Économie d'énergie ultra** désactivés (**Paramètres > Batterie**). Ils ferment les applications en arrière-plan, quels que soient les réglages ci-dessus.

## Si AAPS s'arrête encore en arrière-plan

Voir [Don't kill my app](https://dontkillmyapp.com/huawei) pour d'autres solutions propres à Huawei.

## Téléphones Honor

Honor est maintenant une marque séparée et ses téléphones fonctionnent sous MagicOS au lieu d'EMUI. Les réglages d'arrière-plan sont très proches : cherchez **Lancement d'applications** dans les paramètres de batterie de l'application, désactivez **Gérer automatiquement** et autorisez les trois options, puis retirez l'application de l'optimisation de la batterie.