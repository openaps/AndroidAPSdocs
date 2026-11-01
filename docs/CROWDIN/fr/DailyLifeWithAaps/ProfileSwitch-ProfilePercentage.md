# Changement de profil et pourcentage de profil

Cette section explique ce que sont un **Changement de profil** et un **Pourcentage de profil**. Pour savoir comment créer un **Profil**, voir [Votre profil AAPS](#your-aaps-profile-create-and-edit-profiles).

Au début de votre parcours avec **AAPS**, vous devrez créer un **Profil**, comprendre comment faire un **Changement de profil** et apprendre l'effet d'un **Pourcentage de profil** dans **AAPS**. Les fonctions **Changement de profil** et **Pourcentage de profil** peuvent être particulièrement utiles pour :

- le cycle menstruel – un ajustement en pourcentage du **Profil** peut être configuré dans **Automatisation** pour permettre à **AAPS** de s'adapter aux différentes phases du cycle hormonal et à une résistance à l'insuline prévue.

- l'activité physique – un ajustement en pourcentage du **Profil** peut être configuré dans **Automatisation** pour l'activité physique, afin de réduire l'apport basal.

- le travail de nuit ou en horaires décalés – un décalage horaire du **Profil** peut être configuré pour les personnes en horaires décalés : on règle dans le **Profil** le nombre d'heures dont l'utilisateur se couchera ou se lèvera plus tard ou plus tôt.

Why use a **Profile Percentage** rather than a temporary basal adjustment? To be more effective in its application a **Profile Percentage** applies a proportionate reduction or increase across: basal, ISF and I:C. Ainsi, **AAPS** calcule de façon équilibrée l'insuline délivrée à l'utilisateur. Baisser seulement le basal dans le **Profil** d'**AAPS** apporte peu si l'algorithme continue d'utiliser les mêmes valeurs de SI et de G/I.

(ProfileSwitch-change-percentage)=

## Changer le pourcentage du profil depuis l'écran principal

Vous avez besoin d'au moins un **Profil** enregistré. Un **Pourcentage de profil** est toujours appliqué par un **Changement de profil** : vous activez à nouveau un **Profil**, cette fois avec un pourcentage.

```{admonition} Vous venez d'AAPS 3 ? :class: note Un appui long sur le nom du profil n'ouvre plus la boîte de dialogue de changement de profil. **Appuyez** sur le nom du profil, puis sur le bouton rond **▶** en bas à droite : il ouvre les mêmes réglages (pourcentage, durée, cible temporaire Activité).

    <br />1. Sur l'écran principal, **appuyez sur le nom du profil** (à côté de l'icône étoile). L'[écran Profil](#ProfileSwitch-manage-v4) s'ouvre sur la carte du **Profil** en cours, marquée **ACTIF**.
    
       ![Appuyez sur le nom du profil sur l'écran principal pour ouvrir l'écran Profil](../images/ProfileSwitch2.png)
    
    2. Pour garder le même **Profil**, laissez la carte **ACTIF** sélectionnée. Pour changer de **Profil** en même temps, faites glisser vers une autre carte.
    3. Appuyez sur le bouton rond **▶** (**Activer**) en bas à droite. L'écran **Activer** s'ouvre.
    4. Réglez le **Pourcentage** avec **−** / **+** (par pas de 5 %), ou saisissez-le (de 30 à 250 %). Le champ commence toujours à **100 %** : il n'affiche pas le pourcentage en cours. Par exemple, saisissez **80** pour 20 % d'insuline en moins, ou **120** pour 20 % en plus.
    5. Réglez la **Durée** en minutes :
       * **0** garde le nouveau pourcentage jusqu'au prochain **Changement de profil** ;
       * toute autre valeur termine le changement après ce temps, et **AAPS** revient au **Profil** qui était actif avant.
    
       ![L'écran Activer réglé sur 80 % pendant 60 minutes](../images/v4/Profiles/profile_activate_percentage.png)
    
    6. Appuyez sur **▶ Activer** en bas de l'écran. Vérifiez le résumé dans la boîte de dialogue **Changement de profil** et appuyez sur **OK**.
    
       ![La boîte de dialogue de confirmation — profil, pourcentage et durée](../images/v4/Profiles/profile_activate_confirm.png)
    
    De retour sur l'écran principal, le nom du profil affiche le pourcentage et le temps restant, par exemple *Normal (80%) (59')*, et devient jaune tant qu'un changement avec une durée est en cours. Une étoile marque le changement sur le graphique de glycémie. Voir [l'écran principal](#aaps-screens-profile--target).
    
    ![L'écran principal pendant un changement de profil à 80 %](../images/v4/Profiles/profile_switch_running.png)
    
    Pour **revenir à 100 %** avant la fin, refaites les étapes en laissant **Pourcentage** à 100 et **Durée** à 0.
    
    ```{admonition} Pourcentages en un appui
    :class: tip
    Si vous utilisez souvent le même pourcentage (sport, maladie), ajoutez un [raccourci de profil](#profile-shortcuts) à la barre QuickLaunch, ou créez un [scénario](Scenes.md). Les deux appliquent un profil avec un pourcentage et une durée prédéfinis, en un seul appui.
    

(ProfileSwitch-manage-v4)=

## Gérer et activer les profils (Gestion → Profil)

Dans **AAPS** v4, les profils sont gérés et activés depuis l'écran **Gestion** (barre de navigation du bas) → **Profil** (*« Gérer et activer les profils »*).

L'écran Profil affiche vos profils sous forme de **carrousel de cartes à faire glisser**. La carte du profil en cours est marquée **ACTIF** et affiche son basal total par jour (par ex. *∑ 30,15 U*). Below the selected card you see that profile's details — the **Insulin** type, and the **IC**, **ISF**, **basal** and **target** schedules with graphs.

When a temporary switch is running, the **ACTIVE** card shows its percentage and time shift with the time left, for example *110% +2 h · 2 h 40 min*, above a progress bar. Both are refreshed every 30 seconds. The details below then have two columns: the values of the profile in blue, and the values in use with the percentage in red.

![L'écran Profil — carrousel de profils, détails et barre d'actions](../images/v4/Profiles/profile_manage.png)

Les boutons du bas agissent sur le profil **sélectionné** : **➕ Ajouter**, **✏️ Éditer**, **⧉ Dupliquer** et **‘️ Supprimer**, ainsi que le bouton rond **▶ Activer** à droite. Pour remplir les quatre programmes dans l'éditeur (G/I / SI / BAS / CIBLE), voir [Créer et modifier des profils](#your-aaps-profile-create-and-edit-profiles).

**⧉ Dupliquer** utilise l'icône à deux carrés, souvent utilisée pour *copier*, mais il n'y a rien à coller : le double est créé en une seule étape. Confirmez *Cloner le profil "Normal" ?* et un nouveau profil nommé *Normal copy* est ajouté à la fin du carrousel et sélectionné, prêt pour **✏️ Éditer** (où vous pouvez aussi le renommer). Ce n'est pas la même chose que dupliquer un ancien **Changement de profil** depuis l'historique des traitements, qui crée un nouveau profil *avec le pourcentage et le décalage horaire appliqués*. Voir [Garder un changement de profil pour plus tard](#ProfileSwitch-keep-for-later).

(ProfileSwitch-read-only-mode)= **Seulement le bouton ▶ Activer ?** Vos paramètres sont protégés, l'écran s'ouvre donc en lecture seule. Appuyez sur le **✏️ crayon** dans la barre du haut et saisissez votre mot de passe des paramètres. Voir [La protection des paramètres verrouille maintenant aussi les écrans de gestion](#v4changes-read-only-management).

### Réordonner les profils

Si vous avez plus d'un profil, vous pouvez choisir leur ordre dans le carrousel : appuyez sur l'icône **Réordonner** (⇅, deux flèches vers le haut et vers le bas) dans la barre du haut. L'indicateur de page est remplacé par des **boutons de déplacement ◀ / ▶** avec un affichage *position / total* — avancez ou reculez la carte du centre, puis confirmez avec **✓** (ou annulez avec **✕**). Le nouvel ordre est enregistré une seule fois, quand vous confirmez.

![Mode Réordonner — boutons de déplacement et position](../images/v4/Profiles/profile_reorder.png)

### Activer un profil

Sélectionnez un profil et appuyez sur **▶ Activer**. L'écran **Activer** vous permet de choisir comment le **Changement de profil** est appliqué :

![L'écran Activer — pourcentage, durée, décalage horaire, heure](../images/v4/Profiles/profile_activate.png)

- **Pourcentage** (30–250 %, commence à 100 % à chaque fois) — ajuste tout le profil. 100 % l'utilise tel quel ; par exemple, 70 % réduit de 30 % le basal et la dose d'insuline calculée (bolus de repas et corrections). Il ne change pas vos cibles de glycémie ni l'absorption des glucides. See [Profile Percentage](#ProfileSwitch-profile-percentage) for the full effect.
- **Durée** (0–10080 minutes, soit jusqu'à 7 jours) — combien de temps dure le changement. **0 = sans limite** (jusqu'au prochain changement) ; une valeur autre que zéro revient au profil précédent à la fin.
- **Cible Temp / Activité** — apparaît seulement si vous réglez une **Durée** et un **Pourcentage** inférieur à 100 %. Activez-la pour démarrer aussi une [cible temporaire Activité](#TempTargets-activity-temp-target) pour la même durée, comme avant une activité physique.
- **Décalage horaire** — affiche *0h* ; appuyez sur **Changer** pour avancer ou reculer le programme de 23 heures au maximum (utile pour le travail posté ou les voyages). Voir [Décalage horaire](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile).
- **Réutiliser** — apparaît quand le changement en cours a un pourcentage différent de 100 % ou un décalage horaire, par exemple **Réutiliser 80% 0h**. Appuyez dessus pour reprendre le même pourcentage et le même décalage horaire, par exemple pour prolonger un changement qui va bientôt se terminer.
    
    ![Le bouton Réutiliser pendant un changement à 80 %](../images/v4/Profiles/profile_activate_reuse.png)

- **Heure** — *Maintenant* par défaut. Vous pouvez choisir une autre heure, jusqu'à 24 heures avant ou après maintenant. Un changement réglé dans le futur commence à cette heure ; une cible temporaire Activité réglée avec lui commence alors aussi à cette heure.
    
    ![Choisir l'heure d'un changement de profil](../images/v4/Profiles/profile_activate_time_picker.png)

- **Notes** — affiché seulement si [Afficher les notes dans les boîtes de dialogue](#Preferences-show-notes-field-in-treatments-dialogs) est activé.

Si les débits basaux au pourcentage choisi ne sont pas compatibles avec votre pompe, un avertissement apparaît en haut et **▶ Activer** reste désactivé : choisissez un autre pourcentage.

Appuyez sur **▶ Activer**, puis sur **OK** dans la boîte de dialogue de confirmation. Le profil en cours porte alors le badge **ACTIF** sur sa carte.

```{admonition} Votre pompe peut arrondir les débits basaux :class: note Chaque pompe ne peut délivrer les débits basaux que par paliers qui lui sont propres (par exemple 0,05 U/h) : elle arrondit donc les débits de votre **Profil**. **AAPS** utilise alors le basal que la pompe délivre réellement, pour que l'IA et la DTQ restent justes. Si la pompe délivre un peu plus ou un peu moins d'insuline par jour que votre **Profil**, le message *« Profil basal dans la pompe mis à jour »* indique la différence, par exemple *« elle injecte 10,00 U par jour au lieu de 10,12 U »*.

Si la pompe indique un basal très différent de votre **Profil**, **AAPS** garde le basal du **Profil** et vous demande de vérifier les débits basaux dans la pompe.

    <br />```{admonition} Avec le pourcentage et le décalage horaire, un seul profil suffit souvent
    :class: note
    Au lieu de créer beaucoup de profils semblables, gardez un profil de base et appliquez-le avec un autre **pourcentage** ou **décalage horaire** pour les situations qui reviennent (maladie, activité physique, voyage). C'est exactement ce que les [scénarios](Scenes.md) automatisent.
    

Un changement de profil ne se limite pas à cet écran. Le même changement peut aussi être lancé depuis une **montre Wear OS**, un **client** associé (voir [Contrôle maître ↔ client](../RemoteFeatures/ClientMasterControl.md)), un **[scénario](Scenes.md)** ou une règle d'**Automatisation**.

(ProfileSwitch-profile-percentage)=

## Pourcentage de profil

Il est important de bien comprendre les fonctions essentielles d'un **Pourcentage de profil**. Si vous appliquez un pourcentage de hausse ou de baisse dans un **Changement de profil**, les paramètres définis dans le **Profil** sont augmentés ou diminués du même pourcentage.

Par exemple : un **Changement de profil** à 130 % (l'utilisateur est 30 % plus résistant à l'insuline) demande à **AAPS** de

- **augmenter** le débit basal de 30 % ; 
- **baisser** le **SI** : en le divisant par 1,3 ;
- **baisser** le **G/I** en le divisant par 1,3.

N'oubliez pas : baisser le **SI** ou le **G/I** donne un ratio plus fort, donc plus d'insuline délivrée. Les nouveaux utilisateurs d'**AAPS** oublient facilement ce point.

Une fois le pourcentage choisi, **AAPS** ajuste le débit basal par défaut, et **AAPS** (boucle ouverte ou fermée) continue de fonctionner sur la base du **Profil** avec ce pourcentage.

L'effet d'un pourcentage de **Profil** est résumé dans le tableau ci-dessous :

| Pourcentage du  
changement de profil |    Effet     |     G/I  
g/U     | Example  
15 g |          SI  
mmol/l/U  
mg/dl/U           | U pour baisser de  
2 mmol/l  
40 mg/dl |
|:-------------------------------------:|:------------:|:-----------------:|:--------------:|:------------------------------------------:|:---------------------------------------:|
|                 90 %                  | Plus faible  | 5/0,9  
=**5,55** |     2,7 U      | 2,2/0,9  
=**2,4**  
  
40/0,9  
=**44,4** |                  0,8 U                  |
|               **100 %**               | **Standard** |       **5**       |    **3 U**     |                **2,2  
40**                |                **0,9** U                |
|                 130 %                 |  Plus fort   | 5/1,3  
=**3,85** |     3,9 U      | 2,2/1,3  
=**1,7**  
  
40/1,3  
=**30,8** |                  1,2 U                  |

(ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)=

## Décalage horaire du profil circadien en pourcentage

Un « décalage horaire » du **Profil** déplace les paramètres du **Profil** sur l'horloge de la journée (« circadienne ») du nombre d'heures saisi. Cela peut être utile pour :

- **night shift or pattern workers**: work night shifts by altering the number of hours to how much later/earlier in the **Profile** the user will go to bed or wake up; 
- **les personnes qui changent de fuseau horaire en voyage** ; ou
- **les enfants avec un diabète de type 1** : qui ont une routine fixe au coucher et une résistance à l'insuline prise en compte dans leur **Profil**. Si, pour une raison quelconque, l'enfant doit se coucher plus tard, l'aidant peut appliquer un « décalage horaire » au **Profil** de l'enfant, pour qu'**AAPS** réagisse à la résistance à l'insuline au moment voulu.

La question est toujours : les paramètres de quelle heure du **Profil** doivent remplacer les paramètres de l'heure actuelle ? Cette heure doit être décalée de x heures. Faites donc attention au sens du décalage, comme dans l'exemple suivant :

- Heure actuelle : 12:00
- **Positif** décalage horaire 
    - 2:00 **+10 h** -> 12:00
    - Les paramètres à partir de 2:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire positif.
- **Négatif** décalage horaire 
    - 22:00 **-10 h** -> 12:00
    - Les paramètres à partir de 22:00 seront utilisés à la place des paramètres normalement utilisés à 12:00 en raison du décalage horaire négatif.

![Sens du décalage horaire dans un changement de profil](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the **Profile** allows a much more precise calculation of the past and the possibility to track **Profile** changes.

(ProfileSwitch-keep-for-later)=

## Garder un changement de profil pour plus tard

Après un changement de profil avec pourcentage et/ou décalage horaire, vous pouvez copier ce profil temporaire dans un nouveau profil.

Pour cela, ouvrez le menu (☰) → **Traitements** et allez dans l'onglet **Changement de profil**, voir [Dupliquer un changement de profil vers un nouveau profil](#your-aaps-profile-clone-profile-switch).