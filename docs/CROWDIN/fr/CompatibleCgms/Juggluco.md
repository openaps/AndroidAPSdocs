# Paramètres Juggluco

Si ce n'est pas déjà fait, téléchargez [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Suivez les [instructions](https://www.juggluco.nl/Jugglucohelp/introhelp.html) pour connecter votre capteur.

## Paramètres de base pour tous les systèmes MGC

### Désactiver l'envoi vers Nightscout

Ne laissez aucune autre application envoyer des données (glycémie et traitements) vers Nightscout.

Désactivez dans Juggluco tout envoi actif vers Nightscout.

![Désactiver l'envoi vers Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco vers AAPS

Juggluco peut envoyer la glycémie directement à AAPS. Les SMB sont alors toujours autorisés si vous utilisez un [capteur fiable](#GettingStarted-TrustedBGSource).

Avec un capteur Libre 2/2+/3/3+, des valeurs toutes les minutes sont envoyées à AAPS, mais elles ne déclenchent pas de calcul toutes les minutes dans AAPS.

Activez « xDrip broadcast » dans Juggluco (n'activez pas « Patched Libre »), confirmez et enregistrez les informations du paquet AAPS. Sélectionnez la source de glycémie xDrip dans AAPS.

Appliquez un [lissage](./SmoothingBloodGlucoseData.md) suffisant dans AAPS.

![Juggluco vers AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco vers xDrip

Juggluco peut envoyer la glycémie à xDrip, qui l'envoie ensuite à AAPS.

Activez « Patched Libre » dans Juggluco (n'activez pas « xDrip broadcast »), confirmez et enregistrez les informations du paquet dexdrip. Sélectionnez la source de glycémie xDrip dans AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco vers xDrip](../images/juggluco/Juggluco-xDrip+.png)
