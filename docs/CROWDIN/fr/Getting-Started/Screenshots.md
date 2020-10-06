# Ecrans AndroidAPS

## Écran d'accueil

![Écran d'accueil V2.7](../images/Home2020_Homescreen.png)

Ceci est le premier écran que vous verrez quand vous ouvrirez AndroidAPS et il contient la plupart des informations dont vous aurez besoin au jour le jour.

### Section A - Onglets

* Permet de naviguer entre les différents modules AndroidAPS.
* Vous pouvez également changer d'écrans en glissant vers la gauche ou la droite.
* Les onglets affichés peuvent être sélectionnés dans le [Générateur de configuration](../Configuration/Config-Builder#onglet-ou-menu-hamburger).

### Section B - Profil & cible

#### Profil actuel

![Changement de profil, durée restante](../images/Home2020_ProfileSwitch.png)

* Le profil actuel est affiché dans la barre de gauche.
* Un appui long sur la bar de profil permet de voir le détail du profil ou de [changer de profil](../Usage/Profiles#changement-de-profil).
* Si le changement de profil a été effectué avec une durée, le temps restant en minutes est indiqué entre parenthèses.

#### Cible

![Cible temporaire, durée restante](../images/Home2020_TT.png)

* La cible de glycémie actuelle est affichée dans la barre de droite.
* Un appui long sur la barre de cible permet de définir une [cible temporaire](../Usage/temptarget.md).
* Si une cible temporaire est définie, la barre devient jaune et le temps restant en minutes est affiché entre parenthèses.

#### Visualisation de l'ajustement dynamique de la cible

![Visualisation de l'ajustement dynamique de la cible](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS peut ajuster dynamiquement votre cible en fonction de la sensibilité si vous utilisez l'algorithme SMB.
* Activez soit une, soit les deux [options suivantes](../Configuration/Preferences#parametres-openaps-smb) 
   * "Sensibilité augmente la cible" et/ou 
   * "Résistance diminue la cible" 
* Si AAPS détecte une résistance ou une sensibilité, la cible change en fonction de ce qui est défini dans le profil. 
* Lorsqu'il modifie la cible glycémique, l'arrière-plan passe en vert.

### Section C - Gly & état de la boucle

#### Glycémie actuelle

* La dernière glycémie reçue de votre MGC est affichée sur le côté gauche.
* La couleur de la glycémie reflète sa position par rapport à la [fourchette](../Configuration/Preferences#fourchette-de-visualisation) définie. 
   * vert = dans la fourchette
   * rouge = en dessous de la fourchette
   * jaune = au-dessus de la fourchette
* Le bloc gris du milieu affiche les minutes depuis la dernière lecture et les variations depuis la dernière lecture ainsi que depuis les 15 et 40 dernières minutes.

#### État de la boucle

![État de la boucle](../images/Home2020_LoopStatus.png)

* Une nouvelle icône affiche l'état de la boucle:
   
   * cercle vert = boucle fermée en cours d'exécution
   * cercle vert avec des pointillés = [arrêt glycémie basse (AGB)](../Usage/Objectives#objectif-6-demarrage-de-la-boucle-fermee-avec-le-systeme-agb-arret-pour-glycemie-basse)
   * cercle rouge = boucle désactivée (ne fonctionne pas de façon permanente)
   * cercle jaune = boucle suspendue (temporairement en pause, mais l'insuline basale sera délivrée) - le temps restant est affiché sous l'icône
   * cercle gris = pompe déconnectée (temporairement aucune insuline n'est délivrée) - le temps restant est affiché sous l'icône
   * cercle orange = super bolus en cours - le temps restant est affiché sous l'icône
   * cercle bleu avec pointillés = boucle ouverte

* Faites un appui long sur l'icône pour ouvrir le menu permettant de désactiver, suspendre, réactiver la boucle ou déconnecter / reconnecter la pompe.
   
   ![Menu état de la boucle](../images/Home2020_LoopStatusMenu.png)

### Section D - IA, GA, Basal et AS

![Section D](../images/Home2020_TBR.png)

* Seringue : insuline active (IA) - quantité d'insuline active à l'intérieur de votre corps
   
   * Le chiffre de l’insuline active serait à 0 s’il n’y avait que votre basal standard en cours et qu’il ne restait plus d’insuline active d’un précédent bolus. 
   * L'IA peut être négative s’il y a eu récemment des périodes de basal réduit.
   * Appuyez sur l'icône pour voir la répartition entre l'IA bolus et l'IA basale

* Grain de blé : [glucides actifs (GA)](../Usage/COB-calculation.rst) - glucides précédemment mangés et non encore absorbés -> l'icône clignotte (orange/rouge) si des glucides sont requis

* Ligne violette : débits de basal - les changements d'icône reflétant les changements des débits de basal temporaires (plat à 100%) 
   * Appuyez sur l'icône pour voir le débit de basal du profil et les détails de n'importe quel basal temporaire (y compris la durée restante)
* Flèches haut & bas : indique le statut [autosens](../Usage/Open-APS-features#autosens) (activé ou désactivé) et la valeur est affichée sous l'icône

#### Glucides requis

![Glucides requis](../images/Home2020_CarbsRequired.png)

* Des suggestions de glucides sont données lorsque l'algorithme détecte que des glucides supplémentaires sont nécessaires.
* C'est quand l'algorithme oref pense que je ne peux pas vous sauver par un 0 (zéro) temp et que vous aurez besoin de manger des glucides pour corriger.
* Les notifications de glucides sont beaucoup plus sophistiquées que celles de l'Assistant bolus. Vous pouvez voir la suggestion des glucides alors que l'Assistant bolus ne montre pas les glucides manquants.
* Les notifications Glucides requis peuvent être envoyées sur Nightscout si vous le souhaitez, dans ce cas une annonce sera affichée et diffusée.

### Section E - Voyants d'état

![Section E](../images/Home2020_StatusLights.png)

* Les voyants d'état donnent une alerte visuelle pour 
   * Âge de la canule
   * Âge de l'insuline (jours d'utilisation du réservoir)
   * Niveau du réservoir (unités)
   * Âge du capteur
   * Âge et niveau de la pile (%)
* Si le seuil d'alerte est dépassé, les valeurs seront affichées en jaune.
* Si le seuil critique est dépassé, les valeurs seront affichées en rouge.
* Les paramètres peuvent être trouvés dans [les préférences](../Configuration/Preferences#voyants-d-etat).

### Section F - Graphique principal

![Section F](../images/Home2020_MainGraph.png)

* Le graphique montre votre glycémie (Gly) telle qu'elle est lue par votre capteur de glycémie (MGC). 
* Les notes saisies dans l'onglet de l'action telles que les calibrations capillaires, les entrées de glucides et les changements de profil sont affichés ici. 
* Une pression longue sur le graphique permet de changer l'échelle de temps. Vous pouvez choisir 6, 12, 18 ou 24 heures.
* La zone verte reflète votre fourchette cible. Elle peut être configurée dans les [préférences](../Configuration/Preferences#fourchette-de-visualisation).
* Les triangles bleus montrent les [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - s'ils sont activés dans les [préférences](../Configuration/Preferences#parametres-openaps-smb).
* Information optionnelle :
   
   * Prédictions
   * Basals
   * Activité - courbe d'activité de l'insuline

#### Activation des informations optionnelles

* Cliquez sur le triangle situé sur le côté droit du graphique principal pour sélectionner les informations qui seront affichées dans le graphique principal.
* Pour le graphique principal, juste les trois options au-dessus de la ligne "\---\---- Graph 1 \---\----" sont disponibles.
   
   ![Réglage du graphique principal](../images/Home2020_MainGraphSetting.png)

#### Lignes de prédiction

* Ligne **orange** : [Glucides Actifs (GA)](../Usage/COB-calculation.rst) (la couleur est généralement utilisée pour représenter les Glucides)
   
   Cette ligne de prédiction montre comment votre Glycémie (et pas les GA eux mêmes) devrait évoluer sur la base de vos réglages actuels de la pompe, en supposant que les déviations liées à l'absorption des glucides restent constantes. Cette ligne n'apparaît que s'il y a des GA connus.

* Ligne **bleu foncé** : Insuline Active (IA) (la couleur est généralement utilisée pour représenter l'insuline)
   
   Cette ligne de prédiciton montre ce qui pourrait arriver uniquement avec l'action de l'Insuline. Par exemple si vous avez injecté de l'insuline mais que vous n'avez pas mangé de glucides.

* Ligne **bleu clair** ligne : zéro-temp (glycémie prévisionnelle si un débit de base temporaire à 0% était défini)
   
   Cette ligne de prédiction montre comment la trajectoire de l'IA changerai si la pompe arrêtait toute injection d'insuline (DBT 0%).

* Ligne **jaune foncé**: [RNS](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (Repas Non Signalés)
   
   Les Repas Non Signalés signifient qu'une augmentation significative de la glycémie liée aux repas, à l'adrénaline ou à d'autres facteurs est détectée. Cette ligne de prédiction est similaire à la ligne ORANGE GA, mais elle suppose que les déviations diminueront de façon constante (en étendant le taux de réduction actuel).

Généralement votre courbe de glycémie réelle finira au milieu de ces lignes, ou proche de la ligne qui représente le mieux votre situation réelle.

#### Basals

* Une ligne **bleue continue** indique le débit de basal de votre pompe et reflète l'injection réelle au fil du temps.
* La ligne **bleue pointillée** est ce qu'aurait dû être le débit de basal s'il n'y avait pas d'ajustements de débit de basal temporaire (DBT).
* Quand le débit de basal standard est donné, la zone sous la courbe est affichée en bleu foncé.
* Quand le débit de basal est temporairement ajusté (augmenté ou diminué), la zone sous la courbe est affichée en bleu clair.

#### Activité

* La ligne **jaune fine** montre l'activité de l'insuline. 
* Elle indique la capacité de l'insuline présente dans votre corps à faire baisser la glycémie, si aucun autre facteur (comme les glucides) n'était présent.

### Section G - Graphiques additionnels

* Vous pouvez activer jusqu'à quatre graphiques supplémentaires en dessous du graphique principal.
* Pour ouvrir les paramètres pour des graphiques supplémentaires, cliquez sur le triangle sur le côté droit du [graphique principal](../Getting-Started/Screenshots#section-f-graphique-principal) et faites défiler vers le bas.

![Paramètres graphiques additionnels](../images/Home2020_AdditionalGraphSetting.png)

* Pour ajouter un graphique supplémentaire, cochez la case sur le côté gauche de son nom (par ex. \---\---- Graph 1 \---\----).

#### Insuline absolue

* Insuline Active incluant les bolus **et la basal**.

#### Insuline active

* Affiche la quantité d'insuline que vous avez à chaque instant (= insuline active dans votre corps). Il inclut l'insuline des bolus et des débits de basal temporaires, (**mais exclut les débits de basal intégrés dans votre profil**).
* S'il n'y avait pas de [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), ni de bolus et aucun DBT pendant une durée de DIA, l'Insuline Active serait à zéro.
* L'IA peut être négative si vous n'avez pas de bolus restants et et que vous avez eu une zéro/faible basal temp pendant longtemps.
* La décomposition de l'insuline dépend de votre [DAI et des paramètrages de l'insuline](../Configuration/Config-Builder#profil-local-recommande). 

#### Glucides actifs

* Affiche la quantité de glucides que vous avez à chaque instant (= glucides actifs dans votre corps, non encore assimilés). 
* La diminution dépend des écarts que l'algorithme détecte. 
* S'il détecte une absorption plus élevée de glucides que prévu, de l'insuline sera injectée, ce qui augmentera l'IA (plus ou moins, selon vos paramètres de sécurité). 

#### Déviations

* barres **GRISES** montrent un écart dû aux glucides. 
* barres **VERTES** montrent que la Gly est supérieure à l'attendu de l'algorithme Les barres vertes sont utilisées par [Autosens](../Usage/Open-APS-features#autosens) pour augmenter la résistance.
* barres **ROUGES** montrent que la Gly est inférieur à l'attendu de l'algorithme. Les barres rouges sont utilisées par [Autosens](../Usage/Open-APS-features#autosens) pour augmenter la sensibilité.
* **Les barres YELLOW** montrent une déviation due aux RNS.

#### Sensibilité

* Affiche la sensibilité que [Autosens](../Usage/Open-APS-features#autosens) a détectée. 
* C'est le résultat d'un calcul de la sensibilité à l'insuline suite à de l'exercice, aux hormones, etc.

#### Activité

* Affiche l'activité de l'insuline, calculée par votre profil d'insuline (elle n'est pas dérivée de l'IA). 
* La valeur est plus élevée quand l'insuline délivrée est proche de son pic d'activité.
* Elle n'est pas dérivée de l'IA, car si c'était le cas elle serait négative quand l'IA diminue. 

#### Pente de déviations

* Valeur interne utilisée dans l'algorithme.

### Section H - Boutons

![Boutons de l'écran d'accueil](../images/Home2020_Buttons.png)

* Les boutons pour l'Insuline, les Glucides et l'Assistant bolus sont "toujours affichés". 
* Les autres boutons doivent être configurés dans les [préférences](../Configuration/Preferences#boutons).

#### Insuline

![Bouton Insuline](../images/Home2020_ButtonInsulin.png)

* Permet d'entrer une certaine quantité d'insuline sans utiliser l'[Assistant rapide](../Getting-Started/Screenshots#assistant-rapide).
* En cochant la case, vous pouvez démarrer automatiquement votre [cible temporaire Repas imminent](../Configuration/Preferences#default-temp-targets).
* Si vous ne voulez pas injecter de bolus avec la pompe mais juste enregistrer la quantité d'insuline (par ex. pour de l'insuline injectée avec un stylo ou une seringue), cochez la case correspondante.

#### Glucides

![Bouton Glucides](../images/Home2020_ButtonCarbs.png)

* Permet d'enregistrer les glucides sans faire de bolus.
* Certaines [cibles temporaires par défaut](../Configuration/Preferences#cibles-temporaires-par-defaut) peuvent être définies directement en cochant la case.
* Décalage horaire : Quand vous avez / allez manger les glucides (en minutes).
* Durée : A utiliser pour les ["glucides étendus"](../Usage/Extended-Carbs.rst)
* Vous pouvez utiliser les boutons pour augmenter rapidement la quantité de glucides.
* Les notes seront envoyées sur Nightscout - selon vos paramètres [NSClient](../Configuration/Preferences#ns-client).

#### Assistant

* Voir [ci-dessous](../Configuration/Screenhots#assistant-rapide)

#### Étalonnages

* Envoie un étalonnage à xDrip+ ou ouvre la boîte de dialogue de calibration du Dexcom.
* Doit être activé dans les [préférences](../Configuration/Preferences#boutons).

#### MGC

* Ouvre xDrip+.
* Le bouton Retour permet de revenir à AAPS.
* Doit être activé dans les [préférences](../Configuration/Preferences#boutons).

#### Assistant rapide

* Entrez facilement la quantité de glucides et définissez les paramètres de calcul.
* Les détails sont configurés dans les [préférences](../Configuration/Preferences#assistant-rapide).

## Assistant bolus

![Assistant Bolus](../images/Home2020_BolusWizard.png)

Quand vous voulez faire un bolus de repas, c'est normalement d'ici que vous le ferez.

### Section I

* Le champ "Gly" est normalement déjà renseigné avec la dernière lecture de votre MGC. Si vous n'avez pas de MGC, il sera vide. 
* Dans le champ "Glucides", vous indiquez votre estimation de la quantité de glucides pour laquelle vous voulez faire le bolus. 
* Le champ "Corr" vous permet de modifier le dosage final pour une raison quelconque.
* Le champ "Décalage horaire" est destiné au pré-bolus pour que vous puissiez renseigner qu'il y aura un délai avant que les glucides ne soient mangés. Vous pouvez mettre un nombre négatif dans ce champ si vous faites un bolus pour des glucides déjà consommés.

### Section J

* SUPER BOLUS : permet d'ajouter l'insuline basale des 2 prochaines heures au bolus immédiat, et un débit basal temporaire (DBT) à 0 est défini pour les 2 prochaines heures afin de ne pas avoir d'insuline supplémentaire. 
* L'idée est de fournir l'insuline plus tôt et, espérons-le, de réduire les pointes.
* Pour plus de détails, voir [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Affiche le bolus calculé et permet de renseigner une note. 
* Si la quantité d'insuline active dépasse déjà le bolus calculé, elle affichera simplement la quantité de glucides encore nécessaire.
* Les notes seront envoyées sur Nightscout - selon vos paramètres [NSClient](../Configuration/Preferences#ns-client).

### Section L

* Détails du calcul de l'assistant bolus.
* Vous pouvez décocher tout ce que vous ne souhaitez pas inclure mais vous ne voudrez normalement pas faire cela.
* Pour des raisons de sécurité, la case **TT doit être cochée manuellement** si vous voulez que l'assistant de bolus soit calculé en fonction d'une cible temporaire existante.

#### Combinaisons de COB (Carb On Board = glucides actifs) et IOB (Insulin On Board = insuline active) et leur signification

* Pour des raisons de sécurité, les IA ne peuvent pas être décochés lorsque la case GA est cochée car vous risqueriez d'avoir trop d'insuline, AAPS ne tient pas compte de ce qui a déjà été donné.
* Si vous cochez COB et IOB, les glucides non absorbés qui ne sont pas couverts par de l'insuline + toute l'insuline qui a été délivrée en TBR (basal temporaire) ou SMB seront pris en compte.
* Si vous cochez l’IA sans GA, AAPS prendra en compte l’insuline déjà délivrée, mais pas les glucides absorbés. Cela conduit à un avis de « manque de glucides ».
* Si vous faites un bolus pour de la **nourriture supplémentaire** rapidement après un bolus de repas (par exemple pour un dessert supplémentaire) il peut être utile de **décocher toutes les cases**. De cette façon, les nouveaux glucides seront juste additionnés car le repas principal ne sera pas nécessairement absorbé et l'IOB ne correspondra pas avec le COB aussi prêt d'un bolus de repas.

#### Détection incorrecte des GA

![Absorption lente des glucides](../images/Calculator_SlowCarbAbsorbtion.png)

* Si vous voyez l'avertissement ci-dessus après avoir utilisé l'assistant bolus, AndroidAPS a détecté que la valeur de GA calculée est peut-être incorrecte. 
* Donc si vous voulez faire un nouveau bolus après un précédent repas avec des GA, vous devez être conscient du risque de surdose ! 
* Pour plus d'informations, voir les conseils sur la [page de calcul des GA](../Usage/COB-calculation.html#detection-de-ga-errones).

## Profil d'Insuline

![Profil d'Insuline](../images/Screenshot_insulin_profile.png)

* Ceci montre le profil d'activité de l'insuline que vous avez choisie dans le [Générateur de configuration](../Configuration/Config-Builder#insuline). 
* La ligne MAUVE indique la quantité d’insuline restante après son injection car elle décroît avec le temps, tandis que la ligne BLEUE indique son activité.
* Le point important à noter est que la décomposition a une longue queue. 
* Si vous êtes habitué à utiliser la pompe manuellement, vous estimez probablement que l'insuline se désintègre en environ 3,5 heures. 
* Toutefois, lorsque vous bouclez la longue queue est importante, car les calculs sont beaucoup plus précis et ces petites quantités s’additionnent lorsqu’elles sont soumises aux calculs récursifs de l’algorithme AndroidAPS.

Pour plus d'informations sur les différents types d'insuline, leurs profils d'activité et l'importance de tout cela, vous pouvez lire un article ici sur [ Comprendre les nouvelles courbes IA basées sur des courbes d'activité exponentielles ](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Et vous pouvez lire un excellent article de blog à ce sujet ici: [ Pourquoi nous avons régulièrement tort dans la durée d'action de l'insuline (DAI) que nous utilisons, et pourquoi c'est important… ](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Et plus encore: [ Courbes d’insuline exponentielle + Fiasp ](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Statut de la pompe

![Statut de la pompe](../images/Screenshot_PumpStatus.png)

* Contient différentes informations sur l'état de la pompe. Les informations affichées dépendent du modèle de votre pompe.
* Voir la page [Pompes](../Hardware/pumps.rst) pour plus de détails.

## Careportal

Careportal reproduisait les fonctions que vous pouvez trouver dans Nightscout sous le symbole “+” et qui vous permet d'ajouter des remarques à vos enregistrements.

### Revoir le calcul des glucides

![Revoir le calcul des glucides dans l'onglet Traitement](../images/Screenshots_TreatCalc.png)

* Si vous avez utilisé [l'Assistant Bolus](../Getting-Started/Screenshots#assistant-bolus) pour calculer la quantité d'insuline, vous pourrez revoir ce calcul plus tard dans l'onglet traitements.
* Appuyez simplement sur le lien vert Calc. (Selon la pompe utilisée, l'insuline et les glucides peuvent aussi être affichés sur une seule ligne dans les traitements.)

### Correction de Glucides

![Traitement en 1 ou 2 lignes](../images/Treatment_1or2_lines.png)

L'onglet Traitement peut être utilisé pour corriger les entrées de glucides erronées (par ex. si vous avez surestimé ou sous-estimé les glucides).

1. Vérifiez et mémorisez les GA et IA actuels sur l'écran d'accueil.
2. Selon la pompe, dans l'onglet Traitement, les glucides peuvent être affichés avec l'insuline sur une seule ligne ou dans deux lignes séparées (par ex. avec Dana RS).
3. Supprimez l'entrée qui a la mauvaise quantité de glucides.
4. Assurez-vous que les glucides ont bien été enlevés en vérifiant à nouveau les GA sur l'écran d'accueil.
5. Vérifiez également l'IA s'il n'y a qu'une seule ligne dans l'onglet de Traitement contenant les glucides et l'insuline.
   
   -> Si les glucides ne sont pas enlevés comme prévu et que vous ajoutez des glucides supplémentaires comme expliqué ci-dessous (6.), les GA seront trop élevés et cela pourrait conduire à un surdosage d'insuline.

6. Entrez la bonne quantité de glucides par le bouton Glucides sur l'écran d'accueil et définissez l'heure correcte de l'événement.

7. S'il n'y a qu'une seule ligne dans l'onglet Traitement, contenant les glucides et l'insuline, vous devez remettre la quantité d'insuline qui a été injectée. Assurez-vous de régler correctement l'heure de l'événement et vérifiez bien l'IA sur l'écran d'accueil après avoir confirmé la nouvelle entrée.

## Boucle / AMA / SMB

* Ces onglets montrent des détails sur les calculs de l'algorithme et pourquoi AAPS agit de cette façon.
* Les calculs sont fait à chaque fois que le système obtient une nouvelle lecture du MGC.
* Pour plus de détails, voir la section [APS sur la page du constructeur de configuration](../Configuration/Config-Builder#aps).

## Profil

![Profil](../images/Screenshots_Profile.png)

* Le profil contient des informations sur vos paramètres individuels du diabète :
   
   * DAI (durée d'action de l'insuline)
   * G/I : est le rapport quantité de glucides divisé par le nombre d'unité d'insuline
   * SI : Sensibilité à l'Insuline, appelée également facteur de correction
   * Débit de Basal
   * Cible : Niveau de glycémie que vous voulez que AAPS vise

* Vous pouvez soit utiliser un [profil local](../Configuration/Config-Builder#profil-local-recommande) qui peut être édité sur votre smartphone ou un [profil Nightscout](../Configuration/Config-Builder#profil-ns) qui doit être modifié sur votre page NS et ensuite transféré sur votre téléphone. Pour plus de détails, voir les sections correspondantes sur la page du [Générateur de configuration](../Configuration/Config-Builder.md).

## Traitement

Historique des traitements suivants :

* Bolus (& glucides) -> option permettant de [supprimer des entrées](../Getting-Started/Screenshots#correction-de-glucides) pour corriger l'historique
* [Bolus étendu](../Usage/Extended-Carbs#bolus-etendus)
* Basal temporaire
* [Cible temp.](../Usage/temptarget.md)
* [Changement de profil](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entrées dans l'onglet Action et notes dans les dialogues

## Source Gly - xDrip, Application Dexcom (patchée)...

![Onglet Source Gly - ici xDrip](../images/Screenshots_BGSource.png)

* Selon les votre source de glycémie, cet onglet est nommé différemment.
* Affiche l'historique des lectures MGC et propose l'option de supprimer la lecture en cas d'échec (par ex. sous la limite basse).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Affiche l'état de la connexion avec votre site Nightscout.
* Les paramètres sont effectués dans les [préférences](../Configuration/Preferences#nsclient). Vous pouvez ouvrir la section correspondante en cliquant sur la roue crantée en haut à droite de l'écran.
* Pour le dépannage, voir [cette page](../Usage/Troubleshooting-NSClient.md).