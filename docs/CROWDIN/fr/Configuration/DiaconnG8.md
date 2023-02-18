# Pompe à insuline Diaconn G8

## Appairage Bluetooth de la pompe à insuline

- Click on the hamburger menu in the top left corner.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Menu hamburger
  > ```

- Click on Config Builder.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Générateur de configuration
  > ```

- After selecting the Diaconn G8 Pump click on the Settings icon (cog wheel).

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Paramètres
  > ```

- Choose Selected pump.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Sélection de la pompe
  > ```

- Select your insulin pump’s model number once it appears in the list.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Appariage de la pompe
  > ```

- There are two options to check your model number:

  > 1. Les 5 derniers chiffres du numéro SN au dos de la pompe.
  > 2. Click on O button > Information > BLE > Last 5 digits.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: check model no.`

- Once you select your pump, a window appears asking for a pin code. Entrez le code PIN affiché sur votre pompe pour terminer la connexion.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: Code PIN
  > ```

## Contrôle de l'état de la pompe et synchronisation des journaux

- Once your pump is connected, click on the Bluetooth symbol to check the status and to synchronize logs.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: État du Bluetooth
  > ```

## Dépannage Bluetooth

**What to do in the case of an unstable Bluetooth connection with the pump.**

### Méthode 1) Vérifiez à nouveau la pompe une fois la connexion à AAPS terminée.

- Click on the 3 dots button on the top right.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Menu préferences
  > ```

- Click on Exit.

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Quitter
  > ```

### Méthode 2) Si la première méthode ne fonctionne pas, déconnectez Bluetooth puis reconnectez-vous.

- Press and hold the Bluetooth button at the top for about 3 seconds.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bouton Bluetooth
  > ```

- Click on the Setting button on the paired Diaconn G8 Insulin pump.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Bouton paramètres
  > ```

- Unpair.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Désappairage
  > ```

- Repeat the Bluetooth pairing process for the pump (see above).

## Informations complémentaires

### Réglage des options de pompe Diaconn G8

- Config manager > pump > Diaconn G8 > Settings
- DIACONN G8 at the top> 3 dots button on the top right > Diaconn G8 Preferences

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Options de la pompe Diaconn G8
```

- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Note: Pour changer la pile, veuillez arrêter toutes les fonctions d'injection en cours avant de continuer.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Menu d'actions du Diaconn G8
```

### Fonction Bolus Étendu

- If you use extended bolus it will disable closed loop.
- See [this page](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.
