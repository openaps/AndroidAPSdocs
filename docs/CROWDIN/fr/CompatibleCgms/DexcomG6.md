# Dexcom G6 et ONE

## Les bases en premier

-   Suivez les recommandations générales d'hygiène MGC et de pose du capteur [ici](../CompatibleCgms/GeneralCGMRecommendation.md).

## Conseils généraux pour boucler avec G6 et ONE

- Les transmetteurs récents s'appellent Firefly. Les capteurs ne peuvent pas être redémarrés sans retirer le transmetteur, qui lui-même ne peut pas être réinitialisé. Ils ne génèrent pas non plus de données brutes.

- Si vous redémarrez des capteurs, soyez prêt à calibrer et surveillez les variations.

- Une pré-installation du G6/ONE avec la calibration d'usine donnera probablement des résultats variables. Si vous faites une pré-installation, alors pour obtenir les meilleurs résultats, vous devrez probablement calibrer le capteur.

Pour en savoir plus, lisez l'[article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publié par Tim Street sur [www.diabettech.com](https://www.diabettech.com).

## Si vous utilisez G6 ou ONE avec xDrip

- Si ce n'est pas déjà fait, téléchargez [xDrip](https://github.com/NightscoutFoundation/xDrip) et réglez ses paramètres en suivant la [page des paramètres xDrip](../CompatibleCgms/xDrip.md).
- Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).
- Les transmetteurs Dexcom G6 et ONE peuvent être connectés en même temps au récepteur Dexcom (ou à la pompe t:slim) et à une application sur votre téléphone.
- Si vous utilisez xDrip comme récepteur, désinstallez d'abord l'application Dexcom. **Vous ne pouvez pas connecter xDrip et l'application Dexcom au transmetteur en même temps !**
- Si vous avez besoin de Clarity et voulez profiter des alarmes xDrip, utilisez [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (G6 uniquement) avec la diffusion locale vers xDrip.
- Vous pouvez aussi utiliser xDrip comme application compagnon de l'application Dexcom officielle, mais les glycémies peuvent arriver avec du retard.
- Avec les transmetteurs actuels, xDrip utilise toujours l'[algorithme natif](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) du transmetteur ; il n'y a aucune raison de le désactiver. Les [redémarrages préventifs](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) ne fonctionnent qu'avec les anciens transmetteurs (firmware 1.6.5.25 ou antérieur), où ils sont nécessaires pour éviter que le capteur s'arrête après 10 jours ; les transmetteurs récents (Firefly) les ignorent. Lisez [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) (redémarrer un capteur) avant tout redémarrage.
- Tout ce qui concerne le capteur et le transmetteur eux-mêmes est documenté sur la [page Dexcom de xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si vous utilisez G6 avec votre propre application Dexcom

```{admonition} Old app version
:class: warning
Dexcom BYODA est maintenant une très ancienne version de l'application et ne peut pas être mis à jour.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permet la diffusion locale vers AAPS et/ou xDrip

-   Cette application vous permet d'utiliser votre Dexcom G6 avec n'importe quel smartphone Android.
-   Désinstallez l'application Dexcom d'origine ou l'application Dexcom patchée si vous en utilisiez une auparavant (**n'arrêtez pas** le capteur en cours)
-   Installez l'apk téléchargé
-   Entrez le code du capteur et le numéro de série du transmetteur dans l'application patchée.
-   Dans les paramètres du téléphone, allez dans applications > Dexcom G6 > autorisations > autorisations supplémentaires et appuyez sur 'Access Dexcom app'.
-   Après une courte période BYODA devrait recevoir le signal du transmetteur.

### Paramètres pour AAPS

-   Sélectionnez **BYODA** dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

-   Si vous ne recevez aucune valeur, sélectionnez une autre source de données, puis sélectionnez à nouveau **BYODA** pour déclencher la demande d'autorisations qui établit la connexion entre AAPS et la diffusion BYODA.

### Paramètres pour xDrip

-   Sélectionnez '640G/Eversense' comme source de données.
-   La commande 'start sensor' doit être exécutée dans xDrip pour recevoir des valeurs. Cela n'affectera pas votre capteur actuel contrôlé par Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Dépannage G6 et ONE

### Dépannage spécifique au Dexcom G6/ONE

-   Faites défiler jusqu'à **Troubleshooting** [ici](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Dépannage général

Le dépannage général des MGC se trouve [ici](#general-cgm-troubleshooting).

### Nouveau transmetteur avec capteur en cours

Si vous changez de transmetteur pendant une session de capteur en cours, vous pouvez essayer de retirer le transmetteur sans endommager le support du capteur. Une vidéo est disponible [ici](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si vous choisissez plutôt [cette solution](https://youtu.be/tx-kTsrkNUM), vous devez faire attention à ne pas [endommager les contacts du capteur](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) avec la bande.
