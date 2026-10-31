# Eversense

Il existe quatre méthodes différentes pour accéder aux valeurs de l'Eversense :

- ESEL en mode compagnon
- ESEL en mode patché
- xDrip en mode Companion App
- Lecteur de notifications (intégré à **AAPS**)

## ESEL

Téléchargez et installez l'[application ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) en suivant ces [instructions](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- Dans ESEL, ouvrez le menu à trois points (⋮) en haut à droite et sélectionnez **Settings** (aussi disponible depuis le menu ☰). Dans les paramètres :
  - Activez « Send to AAPS and xDrip »
  - **Désactivez** « Send to Nightscout »
  - Les données de glycémie de l'Eversense peuvent être bruitées. Il est donc recommandé d'activer « Smooth Data » dans ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Mode compagnon

Lit les données dans les notifications de l'application Eversense (fonctionne avec l'application Eversense standard, disponible depuis la version 3.0.1 d'ESEL).

1. Utilisez l'application Eversense officielle du Google Play Store
   - Facultatif, mais nécessaire pour compléter les données manquantes (backfill) : connectez-vous à votre compte Eversense
   - Dans « Sync », activez « Auto synchronization »
2. Configuration d'ESEL :
   - Désactivez le paramètre « Get data from patched Eversense App »
   - Pour compléter les données manquantes : activez « Fill missing data from eversensedms.com »
   - Saisissez comme adresse e-mail et mot de passe vos identifiants Eversense
3. Choisissez « Medtronic 640g » comme source de glycémie dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

### Application Eversense patchée

 Nécessite une version patchée de l'application Eversense (fonctionne entièrement hors ligne, y compris pour compléter les données manquantes).

1. Désinstallez l'application Eversense (Attention : vos données historiques locales (de plus d'une semaine) seront perdues !)

2. Installez l'[application Eversense patchée](https://cr4ck3d3v3r53n53.club) et utilisez-la comme décrit par le fournisseur

   - Démarrez l'application Eversense, connectez-vous, connectez-vous à votre transmetteur et utilisez-la comme l'application normale.

3. Configuration d'ESEL :

   - Activez le paramètre « Get data from patched Eversense App »



![ESEL Broadcast](../images/ESELpatch.png)

Si vous utilisez ESEL avec une nouvelle installation d'Eversense pour la première fois, les premières valeurs peuvent mettre jusqu'à 15 min à apparaître dans xDrip !

4. Choisissez « Medtronic 640g » comme source de glycémie dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

## xDrip

xDrip peut lire les notifications de l'application du fabricant, comme le fait ESEL. Pas de complément des données manquantes (backfill).

- Téléchargez et installez xDrip : [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Dans xDrip, il faut sélectionner « Companion App » comme source de données.
- Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).
- Réglez les paramètres de xDrip selon les explications de la page [Paramètres xDrip](../CompatibleCgms/xDrip.md).
- Activez le [Lissage Exponentiel](../CompatibleCgms/SmoothingBloodGlucoseData.md) dans AAPS.

## Lecteur de notifications

**AAPS** peut lire les valeurs de glycémie directement dans les notifications de l'application Eversense officielle, sans autre application entre les deux. Pas de complément des données manquantes (backfill).

- Sélectionnez **Lecteur de notifications** dans [**Configuration → Source GLY**](#Config-Builder-bg-source) et autorisez **AAPS** à accéder aux notifications quand il le demande.
- Vérifiez que l'application Eversense affiche la valeur de glycémie actuelle dans sa notification.

```{warning}
Les valeurs de glycémie n'arrivent pas toujours toutes les 5 minutes et des doublons peuvent apparaître.
```