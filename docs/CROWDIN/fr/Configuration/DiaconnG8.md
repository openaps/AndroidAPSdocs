# Pompe à insuline Diaconn G8

## Appairage Bluetooth de la pompe à insuline

- Cliquez sur le menu hamburger dans le coin supérieur gauche.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Menu hamburger
  > ```

- Cliquez sur Configuration.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Générateur de configuration
  > ```

- Après avoir sélectionné la pompe Diaconn G8, cliquez sur l'icône Paramètres (roue crantée).

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Paramètres
  > ```

- Choisissez la pompe sélectionnée.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Sélection de la pompe
  > ```

- Sélectionnez le numéro de modèle de votre pompe à insuline une fois qu'elle apparaît dans la liste.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Appariage de la pompe
  > ```

- Il y a deux options pour vérifier votre numéro de modèle :

  > 1. Les 5 derniers chiffres du numéro SN au dos de la pompe.
  > 2. Cliquez sur le bouton O > Information > BLE > Derniers 5 chiffres.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: vérifier le n° de modèle`

- Une fois que vous avez sélectionné votre pompe, une fenêtre apparaît pour demander un code PIN. Entrez le code PIN affiché sur votre pompe pour terminer la connexion.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: Code PIN
  > ```

## Contrôle de l'état de la pompe et synchronisation des journaux

- Une fois que votre pompe est connectée, cliquez sur le symbole Bluetooth pour vérifier l'état et synchroniser les journaux.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: État du Bluetooth
  > ```

## Dépannage Bluetooth

**Que faire dans le cas d'une connexion Bluetooth instable avec la pompe.**

### Méthode 1) Vérifiez à nouveau la pompe une fois la connexion à AAPS terminée.

- Cliquez sur le menu 3 points en haut à droite.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Menu préferences
  > ```

- Cliquez sur Quitter.

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Quitter
  > ```

### Méthode 2) Si la première méthode ne fonctionne pas, déconnectez Bluetooth puis reconnectez-vous.

- Appuyez et maintenez le bouton Bluetooth en haut pendant environ 3 secondes.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bouton Bluetooth
  > ```

- Cliquez sur le bouton Réglage de la pompe Diaconn G8 appairée.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Bouton paramètres
  > ```

- Désappairage.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Désappairage
  > ```

- Répétez le processus d'appairage Bluetooth pour la pompe (voir ci-dessus).

## Informations complémentaires

### Réglage des options de pompe Diaconn G8

- Configuration > Pompe > Diaconn G8 > Paramètres
- DIACONN G8 en haut à droite> Menu 3 points en haut à droite > Préférences Diaconn G8

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Options de la pompe Diaconn G8
```

- Si l'option **Enreg. changement de réservoir** est activée, les informations sont automatiquement téléchargées sur Careportal quand un événement « Changement d'insuline » se produit.
- Si l'option **Enreg. changement de site** est activée, les informations sont automatiquement téléchargées sur Careportal lorsqu'un événement "Changement de site" se produit.
- Si l'option **Enreg. changement de tubulure** est activée, les informations sont automatiquement téléchargées sur Careportal lorsqu'un événement « Changement de tubulure » se produit.
- Si l'option **Enreg. changement de pile** est activée, les informations sont automatiquement téléchargées sur Careportal lorsqu'un événement "Changement de pile" se produit, et le bouton CHANGEMENT PILE POMPE dans l'onglet ACTION est désactivé. (Note: Pour changer la pile, veuillez arrêter toutes les fonctions d'injection en cours avant de continuer.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Menu d'actions du Diaconn G8
```

### Fonction Bolus Étendu

- Si vous utilisez un bolus étendu, cela désactivera la boucle fermée.
- Voir [cette page](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) pour plus de détails pourquoi le bolus étendu ne fonctionne pas dans un environnement de boucle fermée.
