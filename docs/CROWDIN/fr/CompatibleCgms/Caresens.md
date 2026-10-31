# CareSens

Il existe plusieurs façons d'utiliser les données CareSens avec **AAPS** :

- xDrip
- Juggluco

**Remarque :** Vous n'avez pas besoin de l'application de suivi Sens365 pour vous connecter à AAPS.

## 1. xDrip

1. Installez et configurez l'application officielle CareSens.
2. Dans l'application CareSens, allez dans settings -> Manage Data and Connections -> activez l'interrupteur xDrip. Si vous le souhaitez, désactivez les connexions de données vers CareLevo, DIA:CONN, CloudLoop, etc. dans « others ».

![Connexions de données de l'application CareSens](../images/eversenseapp-dataconnections.png)


2. Installez xDrip : [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. Dans xDrip, allez dans settings -> hardware data source, sélectionnez `Companion App` comme source de données.
4. Dans **AAPS**, sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).


## 2. Juggluco

1. Installez l'application Juggluco.
2. Dans Juggluco, ouvrez le menu de gauche et sélectionnez `Photo`
3. Scannez le QR code sur l'emballage du capteur.
4. Dans le menu de gauche -> settings -> exchange data, vérifiez que xDrip broadcast est activé.
5. Dans **AAPS**, sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).
