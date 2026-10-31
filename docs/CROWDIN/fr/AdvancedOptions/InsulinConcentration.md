(Insulin-Concentration)=
# Concentration de l'insuline

```{warning}
Toutes les pompes du commerce sont conçues pour être utilisées **UNIQUEMENT** avec de l'insuline U100. Utiliser une autre concentration d'insuline dans une pompe peut être dangereux. Même si de plus en plus d'utilisateurs font fonctionner AAPS avec d'autres concentrations, la conversion doit toujours être gérée et elle conduit souvent à des erreurs (même pour des utilisateurs très expérimentés !).
```

## Rappel des bases sur l'insuline

Ce chapitre présente les notions essentielles sur la mesure et l'administration de l'insuline.

### L'unité d'insuline : une mesure de l'action

L'insuline se mesure en **Unités Internationales (UI)**. Elles mesurent son activité biologique (sa capacité à faire baisser la glycémie), et pas seulement sa masse physique.

- **Définition :** 1 UI correspond à l'activité d'une quantité précise d'insuline, standardisée à **environ 0,04167 mg**.
- **Point clé :** Une « unité » a le même effet biologique pour tous les types d'insuline. Cela garantit un dosage cohérent.

### Concentrations d'insuline

L'insuline existe en différentes concentrations, définies par le nombre d'unités par millilitre (ml).

- **U100 :** Le standard mondial, qui contient **100 UI/ml**.
- **U200–U500 :** Des insulines plus concentrées (par ex. U200 contient 200 UI/ml) pour des volumes d'injection plus petits.
- **U40/U50 :** Des concentrations moins courantes et anciennes (40 UI/ml et 50 UI/ml). **L'U40 nécessite des seringues spéciales U40.**
- **Dilution manuelle :** Une pratique clinique pour obtenir une insuline très diluée (par ex. U50, U10) dans des cas rares, comme chez les nouveau-nés ou en cas de sensibilité extrême. Cela demande une préparation très soigneuse par une pharmacie.

```{admonition} Critical Warning
:class: danger
Utiliser une concentration avec un appareil qui ne lui correspond pas est extrêmement dangereux et peut causer un grave surdosage ou sous-dosage. **Vérifiez toujours trois fois que la concentration de l'insuline correspond aux caractéristiques de la seringue, du stylo ou de la pompe.**
```

## Quand utiliser une concentration non standard ?

Les pompes à insuline sont conçues pour de l'insuline U100, mais certaines situations médicales particulières demandent des concentrations non standard. Ces situations demandent une extrême prudence et une gestion très rigoureuse.

### Cas d'usage 1 : insuline diluée pour de très petites doses

- **Situation :** Prise en charge du diabète de type 1 chez les très jeunes bébés et les tout-petits.
- **Problème :** Leurs besoins en insuline sont si faibles que la plus petite dose que la pompe peut délivrer (par ex. 0,05 U) peut encore être trop grande. Il est alors difficile d'obtenir un contrôle glycémique précis, et le risque d'hypoglycémie est élevé.
- **Solution :** Utiliser une insuline très diluée (par ex. U10, soit 10 UI/ml).
- **Effet :** Cela augmente le volume de liquide délivré par unité d'insuline. Les « paquets » d'insuline ont un volume plus grand mais une concentration plus faible. Cela permet des réglages beaucoup plus fins et un dosage plus précis avec les réglages actuels de la pompe.

```{admonition} Critical Safety Note on Dilution
:class: danger
La dilution de l'insuline est une procédure à haut risque. Ne l'essayez jamais à la maison sans formation spécifique et sans suivi médical. Elle doit être faite par un professionnel de santé ou par un aidant formé, avec un diluant stérile prévu spécialement pour ce type d'insuline. **N'utilisez jamais d'eau du robinet, de sérum physiologique ou d'un autre liquide**, car cela peut désactiver l'insuline, modifier son action et introduire des contaminants dangereux.
```

### Cas d'usage 2 : insuline concentrée pour des besoins en insuline élevés ou une forte résistance à l'insuline

- **Situation :** Prise en charge d'adultes ou d'adolescents avec une forte résistance à l'insuline, ou de personnes qui ont des douleurs locales à cause des additifs de l'insuline standard.
- **Problème :**
  1. **Besoins élevés :** Des besoins quotidiens en insuline très élevés peuvent dépasser les limites de la pompe pour le bolus maximum ou pour la dose quotidienne.
  1. **Douleur :** Les conservateurs de l'insuline peuvent causer des picotements ou une irritation lors de la perfusion.
- **Solution :** Utiliser une insuline plus concentrée, comme l'U200 (200 UI/ml).
- **Effet :** La dose d'insuline nécessaire est délivrée dans un volume deux fois plus petit. Pour l'utilisateur, les réglages internes de la pompe doivent être adaptés (par ex. débits de basal et bolus divisés par deux) pour tenir compte de la concentration doublée, afin que le bon nombre d'unités soit délivré. Cela réduit aussi le volume de liquide potentiellement irritant délivré sous la peau.

## Comment gérer la concentration de l'insuline avec AAPS (AAPS 3 et versions antérieures) ?

Utiliser une insuline autre que U100 dans une boucle AAPS demande une configuration très rigoureuse, pour que les calculs du logiciel correspondent à l'insuline réellement délivrée. Une méthode courante est « Utiliser un profil modifié ».

### Utiliser un profil modifié

Cette méthode consiste à faire croire à AAPS que les besoins en insuline du patient sont plus faibles qu'ils ne le sont réellement. Cela compense le fait que la pompe délivre une insuline plus concentrée que celle pour laquelle elle est conçue. L'exemple ci-dessous concerne une insuline U200 mise dans une pompe conçue pour l'U100.

- **Le problème de base :** Une pompe conçue pour l'U100 est calibrée pour délivrer **10 µl** pour **1 unité**. Si vous la remplissez avec de l'U200 (1 unité d'U200 correspond à **5 µl** d'insuline), quand vous choisissez **1 unité** sur la pompe, elle délivre **10 µl** d'insuline, mais ce volume contient maintenant **2 unités d'insuline U200**. Cela conduit à un surdosage de 100 %.
- **La solution du « Changement de profil 50 % » :** Pour corriger cela, tout le profil de traitement du patient est rendu « deux fois plus faible » dans AAPS.
  1. L'utilisateur crée un nouveau profil à partir de son profil U100 standard, avec la fonction « Changement de profil **50 %** ».
  1. Cela crée un nouveau profil dans lequel :
     - Les **débits de basal** sont divisés par deux.
     - Le **ratio insuline/glucides (G/I)** est doublé (par ex. 1:10 g devient 1:20 g).
     - Le **Facteur de sensibilité à l'insuline (SI)** est doublé (par ex. « 1 unité fait baisser la glycémie de 50 mg/dl (2,8 mmol/l) » devient « 1 unité la fait baisser de 100 mg/dl (5,6 mmol/l) »).
- **Le résultat corrigé :** AAPS croit maintenant que le patient n'a besoin que de la moitié de l'insuline. Quand il calcule et commande un bolus de **1 unité**, la pompe (conçue pour l'U100 mais remplie d'U200) délivre les **10 µl**, qui contiennent **2 unités réelles d'insuline U200**. Comme AAPS a calculé cette dose à partir d'un profil « à moitié de force », cette administration de **2 unités réelles** est bien la dose correcte prévue. Le calcul « à moitié de force » de la boucle correspond à l'administration « à double force » de la pompe.

```{admonition} Critical Risks and Common Errors
:class: caution

Cette méthode présente des risques importants, car elle crée un décalage permanent entre les données de l'application et la réalité physique.

**L'erreur principale : le décalage du « bolus externe »**

L'erreur la plus fréquente se produit quand de l'insuline est administrée et enregistrée **en dehors** du système AAPS-pompe.

- **La situation :** AAPS, avec le profil modifié, calcule un bolus de **5 unités** pour un repas. L'utilisateur injecte cette dose avec un stylo U200.
- **La double erreur :**
  1. **Mauvais choix de dose :** L'utilisateur pense « AAPS calcule 5 unités » et, à cause du stylo U200, s'attend à délivrer **5 unités réelles d'U200** sans aucune conversion. Mais comme le profil est divisé par deux, le corps a en réalité besoin de **10 unités réelles**. C'est un **sous-dosage de 50 %**, qui peut conduire à une hyperglycémie.
  1. **Mauvais calcul de l'insuline active (IA surestimée) :** Quand l'utilisateur enregistre ce bolus externe dans AAPS, il saisit **5 unités**. C'est faux. Comme le profil AAPS est prévu pour l'U200, **1 unité dans AAPS correspond à 2 unités réelles**. Les 5 unités réelles délivrées par le stylo devraient donc être enregistrées comme **2,5 unités** dans l'application. En enregistrant 5 unités, l'utilisateur surestime l'IA de 100 %. AAPS pense maintenant qu'il y a 5 « unités concentrées » actives (soit 10 unités réelles), alors que seules 5 unités réelles sont actives. Cela peut amener la boucle à réduire l'insuline basale ou les futurs bolus, ce qui aggrave le risque d'hyperglycémie dû au sous-dosage initial.

**Autres risques :**

- **Données et rapports trompeurs :** Toutes les données dans AAPS ou Nightscout, y compris l'IA, la dose totale quotidienne (DTQ) et les rapports historiques, sont en « unités concentrées ». Cela donne une image faussée à l'utilisateur et à son équipe médicale. Un médecin qui lit un rapport peut voir une DTQ de 30 unités sans comprendre que le patient a en réalité reçu 60 unités réelles. Cela conduit à une mauvaise évaluation du traitement.
- **Modèle mental modifié :** Après une longue utilisation, l'utilisateur commence à « penser » avec les valeurs divisées par deux de l'application. Il retient que son SI est de 100 mg/dl (5,6 mmol/l) ou que son basal est de 0,5 U/h, en oubliant que ces valeurs sont « concentrées ». Cela crée une dépendance dangereuse au système et une perte de contact avec ses vrais besoins en insuline. C'est critique pour la sécurité en cas de panne de la pompe ou de problème avec l'application.

**Conclusion :** Cette méthode demande une vigilance absolue. L'utilisateur doit sans cesse convertir entre un « monde concentré » dans l'application et le monde physique. Toute administration externe d'insuline ou toute relecture des données casse ce modèle mental et présente un risque grave. Elle change profondément le sens de chaque nombre dans le système.
```

## Utiliser le paramètre de concentration (nouvelle fonction d'AAPS 4.0)

Pour réduire les risques d'un profil modifié, une nouvelle fonction gère la concentration de l'insuline directement dans AAPS. Cette fonction fait les conversions automatiquement. Ainsi, l'application principale travaille toujours en **Unités Internationales réelles (UI)**.

### Fonctionnement : conversion automatique

Le principe de base est une séparation claire entre la logique de l'application et la communication avec la pompe :

- **AAPS utilise les Unités Internationales :** La base de données principale d'AAPS, les algorithmes, les rapports et les journaux **utilisent toujours des UI réelles**. Cela signifie que votre IA, votre DTQ et vos réglages de traitement (basal, SI, G/I) correspondent aux vraies unités biologiques d'insuline.
- **Le pilote de pompe utilise des unités concentrées :** Toutes les valeurs envoyées au pilote de pompe ou reçues de lui sont converties automatiquement en « unités concentrées » dans le pilote de pompe, selon la concentration choisie.
  - **Exemple avec l'U200 :** Quand l'utilisateur demande un **bolus de 1 unité**, le pilote de pompe reçoit **0,5 UC (unités concentrées)** avant de l'envoyer à la pompe. La pompe (réglée pour l'U100) délivre alors **5 µl**, qui contiennent **1 UI d'insuline U200**.

### Avantages et risques restants

**Avantages :**

- Plus besoin d'un profil modifié, ni des erreurs de conversion mentale qui vont avec.
- Les utilisateurs peuvent toujours « penser » en UI réelles.
- Pour un bolus externe avec un stylo, choisissez simplement la quantité d'insuline prévue sur le stylo (quels que soient le stylo et la concentration d'insuline utilisés). Aucune conversion n'est nécessaire, car les stylos U100 et U200 utilisent toujours des UI pour choisir les unités.
- Tous les rapports et données d'AAPS (DTQ, IA) sont en UI réelles, ce qui est clair pour l'utilisateur et son équipe médicale.
- Supprime le risque de mal calculer les bolus externes, car ils sont enregistrés en UI réelles.

**Risques restants :**

- **Changement de modèle mental :** Les utilisateurs qui quittent la méthode du « profil modifié » doivent remettre leur vrai profil (c'est-à-dire deux fois plus fort s'ils viennent de l'U200) et ont besoin de temps pour adapter leur **modèle mental**. Habitués aux valeurs « concentrées » dans l'application, ils doivent réapprendre à faire confiance aux **vraies valeurs en UI, non cachées**, affichées partout. Cette période d'adaptation comporte un risque de mauvaise interprétation.
- **Bolus manuel sur la pompe :** Utiliser la fonction bolus de la pompe elle-même (sans passer par AAPS) donne un surdosage de 100 %, car la pompe délivre de l'insuline U200 avec des calculs de volume prévus pour l'U100.
- **Avertissement général :** Utiliser des concentrations non standard reste une procédure avancée, avec des risques, et n'est pas officiellement recommandé.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Collez une étiquette permanente **« Insuline U200 »** sur votre pompe pour ne jamais l'oublier !
```

### Affichage dans l'interface utilisateur

Pour plus de clarté, l'interface utilisateur affiche à la fois les unités réelles et les unités concentrées là où c'est utile. Remarque : l'interface utilisateur ne change pas si l'insuline actuelle est de l'U100.

**Exemples d'affichage :**

- **Fenêtre de progression du bolus :**
  - La fenêtre de progression du bolus fait partie de l'application AAPS principale. Seules les informations en UI y sont donc affichées (comme le choix de l'utilisateur) : **`2.50 U / 10.00 U delivered`**
- **Interface du pilote de pompe (état actuel) :**
  - Dans la vue d'ensemble de la pompe, la quantité délivrée est affichée dans les deux unités ; par exemple, si `U200` est choisi : **`Last Bolus: 10 U (5 CU) (10')`**

**Remarque :** Les deux unités (U et UC) ne sont visibles que dans la vue d'ensemble principale de la pompe. Selon votre pompe, d'autres écrans peuvent n'afficher que les unités concentrées. Les données historiques dans les pilotes de pompe restent en général en « unités concentrées ».

### Activer la fonction

À cause des risques de sécurité qu'il présente, ce paramètre n'est pas activé par défaut. Pour l'activer, terminez l'Objectif 3 et activez **Support de concentration d'insuline** dans les Paramètres généraux.

### Créer une nouvelle insuline avec une autre concentration

Pour créer une insuline avec une autre concentration, ouvrez d'abord **Gestion → Paramètres Insuline**.

- Cliquez sur l'icône « + » en bas de l'écran.
- Choisissez la nouvelle concentration voulue dans le menu déroulant (U10, U20, U50, U100 et U200 sont disponibles).
  - Les concentrations diluées comme U10, U20 ou U50 sont destinées aux enfants avec des débits de basal très faibles.
  - L'U200 est plutôt destinée aux adultes qui ont des besoins en insuline élevés.

  ![Le menu déroulant de concentration dans Paramètres Insuline](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Réglez le temps de pic, la Durée d'Action de l'Insuline (DAI) et personnalisez le nom de l'insuline (facultatif).
- Utilisez le bouton d'enregistrement en haut à droite de l'écran.

À cette étape, l'insuline est créée, mais elle ne peut pas être choisie directement depuis **Paramètres Insuline**.

### Changer la concentration de U100 vers Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Pour des raisons de sécurité, AAPS n'enregistre un changement de concentration que lors d'un changement de réservoir ou d'un changement de patch/pod.
```

Si vous partez d'une insuline U100, tous vos profils, données historiques et rapports sont cohérents avec le standard des Unités Internationales. Le changement est donc très « facile » :

- Pour une pompe patch/pod, une étape dédiée lors du changement de pompe vous permet de choisir l'insuline que vous y mettez.
- Pour une pompe à tubulure, cliquez sur le bouton Amorcer/Remplir (pour le changement d'insuline) dans la vue d'ensemble (barre d'état développée), puis cliquez sur le bouton « Changer ».

1. Choisissez la concentration voulue dans le menu déroulant (par ex. `U200`).
1. Choisissez ensuite la bonne insuline en dessous. Tant que vous n'avez pas confirmé, la légende au-dessus de son nom indique **Sera activée** (au lieu de **Active actuellement**).

   ![Une insuline choisie mais pas encore confirmée : Sera activée](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Important :** le changement de concentration n'est enregistré dans AAPS qu'après l'application du changement de profil sur la pompe.
   - Cette étape est obligatoire pour toutes les pompes patch/pod.
   - Pour les pompes à tubulure, attendez que le changement de profil soit appliqué sur la pompe, ou faites-le dans **Gestion → Profil** ou **Paramètres Insuline**.

C'est tout !

Si un **Changement de profil** temporaire (avec une durée) est en cours quand vous changez l'insuline, la nouvelle insuline est aussi donnée au profil qui revient à la fin du changement temporaire. L'ancienne insuline ne revient pas.

### Changer la concentration pour les utilisateurs d'insuline U200 avec un profil à 50 % (AAPS 4)

Si vous utilisez déjà de l'U200 dans votre pompe, mais avec un profil à 50 %, vous devez faire des étapes en plus par rapport au changement standard depuis une insuline U100.

Gardez à l'esprit que le plus difficile ne sera probablement pas de bien gérer le changement dans AAPS, mais de réhabituer votre cerveau à penser en « UI » au lieu de « UC ». Toutes les valeurs habituelles de bolus (petit-déjeuner, déjeuner, dîner...) seront deux fois plus élevées, de même que vos DTQ, débits de basal, etc. Vous devez être très prudent pour ne pas faire d'erreurs pendant les premières semaines, jusqu'à ce que vous « pensiez à nouveau » en Unités Internationales.

- D'abord, préparez un nouveau profil avec toutes les valeurs cohérentes avec les Unités Internationales :
  - Faites un changement de profil temporaire à 200 % de votre profil standard en cours.
  - Ouvrez le menu (☰) → **Traitements**, allez dans l'onglet **Changement de profil** et dupliquez le nouveau profil à 200 % (voir [Dupliquer un changement de profil](#your-aaps-profile-clone-profile-switch)).
  - Revenez à votre profil standard jusqu'au prochain changement de réservoir ou de patch.
  - Allez dans **Gestion → Profil** et renommez ce nouveau profil avec un nom clair (ce sera votre futur profil associé à l'insuline U200 réglée dans AAPS 4).
- Si vous utilisez la fonction SI dynamique (DynISF), vous devez la désactiver pendant au moins une semaine :
  - Tout votre historique enregistré dans AAPS ou Nightscout est dans les mauvaises unités (UC), soit la moitié de la valeur réelle en Unités Internationales. Attendez au moins une semaine avec l'insuline U200 en service avant de la réactiver.
- Vous êtes maintenant prêt à changer d'insuline (avec une nouvelle U200 définie dans **Paramètres Insuline**) lors du prochain changement d'insuline ou de pod.
- Une fois la nouvelle insuline U200 correctement appliquée, n'oubliez pas d'appliquer le nouveau profil standard défini à la première étape.

## Comment gérer les bolus externes avec différents stylos ?

### Avec une insuline U200 associée à un profil à 50 % (AAPS 3)

Gardez à l'esprit que toutes les graduations des stylos sont en Unités Internationales. Quel que soit le stylo utilisé (U100, U200), si vous utilisez un stylo pour un bolus externe, vous devez faire la conversion dans les deux sens :

- D'AAPS vers le stylo : si l'Assistant propose un bolus, ou si vous avez une quantité précise en tête, multipliez par 2 quand vous choisissez la quantité sur le stylo, par rapport au même bolus fait depuis AAPS.
- Du stylo vers AAPS : si vous avez choisi une quantité sur le stylo pour un bolus externe, divisez cette quantité par 2 pour enregistrer la bonne quantité dans AAPS (bouton Insuline, bolus externe), afin que l'IA soit bien calculée en UC (unités concentrées).

### Avec une insuline U200 et la gestion de la concentration incluse dans AAPS 4

Tout est beaucoup plus simple avec la gestion interne de la concentration dans AAPS : choisissez simplement la quantité voulue sur le stylo (quels que soient le stylo et l'insuline utilisés), puis enregistrez-la dans AAPS.

- Dans le bouton Insuline, si vous choisissez un bolus externe, vous pouvez choisir n'importe quel type d'insuline défini dans **Paramètres Insuline** (surtout U100 et U200 pour les stylos). Vous obtenez ainsi un calcul de l'IA très précis, même si le pic/la DAI de l'insuline du stylo est très différent du pic/de la DAI de l'insuline de la pompe.
