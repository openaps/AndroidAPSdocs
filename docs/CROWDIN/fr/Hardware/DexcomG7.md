# Dexcom G7


## Commençons par des fondamentaux

Au printemps 2022, le Dexcom G7 a reçu son certificat CE et a été vendu fin octobre 2022.

Il est à noter que le système G7, par rapport au G6, ne lisse pas les valeurs, ni dans l'application, ni dans le lecteur. Plus de détails disponibles [ici](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app). Par conséquent, les valeurs doivent être lissées pour pouvoir les utiliser de manière raisonnable dans AAPS.

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

## 1.  Patched Dexcom G7 App (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required!**

### Installez la nouvelle application G7 patchée et démarrez le capteur

A patched Dexcom G7 app (DiAKEM) gives acess to the Dexcom G7 data. Ce n'est pas l'application BYODA car cette application ne peut pas recevoir de données G7 pour le moment.

Désinstallez l'application Dexcom originale si vous l'avez utilisée avant (une session de capteur peut être poursuivie - notez le code du capteur avant de retirer l'application!)

Téléchargez et installez le fichier patched.apk [ici](https://github.com/authorgambel/g7/releases).

Entrez le code du capteur dans l'application patchée.

Suivez les recommandations générales pour l'hygiène des MGC et le placement des capteurs qu'on trouve [ici](../Hardware/GeneralCGMRecommendation.md).

Après la phase de préchauffage, les valeurs s'affichent comme d'habitude dans l'application G7.

### Configuration in AAPS

Pour la configuration dans AAPS
- Select 'BYODA' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source) - even if it is not the BYODA app!

- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

Le lissage des valeurs de glucose peut être activé en activant le plugin "lissage moyen" ou "lissage exponentiel" dans le Générateur de configuration. Pour désactiver cette option, sélectionnez l'option "Sans lissage". Le "lissage exponentiel" est plus agressif et réécrit la plus récente valeur de glucose, mais est avantageux dans la gestion des valeurs trop bruitées. Le "lissage moyen" ressemble beaucoup au lissage arrière qui était dans BYODA G6 et ne réécrit que les valeurs passées, mais pas la valeur actuelle et a donc un temps de réponse plus rapide.

**Lissage Exponentiel** **DOIT** être activé pour que les valeurs G7 soient pertinentes.

## 2. xDrip+ (direct connection to G7)

- Follow the instructions here: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md)

## 3. xDrip+ (companion mode)

-   Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md) 
