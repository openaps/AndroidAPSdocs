# Assistant Profil

Profile helper offers two functions:

1. Trouver un profil pour les enfants
2. Comparer deux profils ou changements de profil pour cloner un nouveau profil

## Profil pour les enfants (jusqu'à 18 ans)

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

L'assistant de profil propose un ensemble de données d'enfants provenant de deux hôpitaux différents pour vous permettre de trouver un profil initial pour votre enfant jusqu'à 18 ans.

```{image} ../images/ProfileHelperKids1.png
:alt: Assistant Profil Enfant 1
```

1. Sélectionnez 'Assistant profil' dans le menu trois points en haut à droite de l'écran.
2. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
3. Changez l'écran en cliquant sur la barre grise « 2 » à droite.
4. Appuyez sur 'Profil actuel' et sélectionnez 'Profil par défaut DPV'.

```{image} ../images/ProfileHelperKids2.png
:alt: Assistant Profil Enfant 2
```

5. Adjust DPV Default profile (based on another hospital data set) by entering kids age, percentage of basal and either TDD Total **or** weight.
6. Appuyez sur le bouton 'COMPARER LES PROFILS' en haut de l'écran.
7. La comparaison des deux profils sélectionnés sera affichée.

Once you are fine with the profile adjustments you can [clone the profile](../Configuration/profilehelper.md#clone-profile) as described below.

## Comparer deux profils

You can use profile helper also to compare to different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../Usage/Profiles.md) before).

```{image} ../images/ProfileHelper1.png
:alt: Assistant Profil 1
```

1. Sélectionnez 'Assistant profil' dans le menu trois points en haut à droite de l'écran.
2. Appuyez sur « Profil par défaut » et sélectionnez « Profils disponibles » pour la liste de vos profils existants ou « Changement de profil » pour avoir la liste des derniers changements de profil effectués.
3. Appuyez sur le nom du profil ('Aktuell_LP' dans la capture d'écran ci-dessus) et sélectionnez un Profil /Changement de profil dans la liste.
4. Changez l'écran en cliquant sur la barre grise « 2 » à droite.

```{image} ../images/ProfileHelper2.png
:alt: Assistant Profil 2
```

5. Par défaut, le « Profil actuel » est proposé pour faire la comparaison.
6. Si vous voulez sélectionner un autre, appuyez sur « Profil actuel » et sélectionnez « Profils disponibles » ou « Changement de profil ».
7. Appuyez sur le nom du profil ('Aktuell_LP' dans la capture d'écran ci-dessus) et sélectionnez un Profil /Changement de profil dans la liste.
8. Appuyez sur le bouton 'COMPARER LES PROFILS' en haut de l'écran.
9. La comparaison des deux profils sélectionnés sera affichée.

(clone-profile)=
## Dupliquer le profil

If you use [local profiles](../Configuration/Config-Builder.md#local-profile) you can clone a profile / profile switch directly from profile helper.

```{image} ../images/ProfileHelperClone.png
:alt: Assistant profile Dupliquer le Profil / Changement de profil
```

1. Sélectionnez le Profil / Changement de profil désiré comme décrit ci-dessus.
2. Si vous utilisez « Profil par défaut » ou « Profil par défaut DPV » (basé sur un ensemble de données d'hôpitaux pour enfants) assurez-vous que vous entrez les paramètres corrects pour l'âge, le pourcentage de basal et DTQ / poids.
3. Appuyez sur le bouton 'DUPLIQUER' en bas de l'écran.
4. Confirmez avec 'OK'.
5. Activez le nouveau profil dans l'onglet Profil Local.
