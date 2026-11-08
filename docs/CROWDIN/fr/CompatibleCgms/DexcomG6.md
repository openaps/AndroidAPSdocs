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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
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
-   After a short time BYODA should pick up the transmitter signal.

### Paramètres pour AAPS

-   Sélectionnez **BYODA** dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

-   Si vous ne recevez aucune valeur, sélectionnez une autre source de données, puis sélectionnez à nouveau **BYODA** pour déclencher la demande d'autorisations qui établit la connexion entre AAPS et la diffusion BYODA.

### Paramètres pour xDrip

-   Sélectionnez '640G/Eversense' comme source de données.
-   La commande 'start sensor' doit être exécutée dans xDrip pour recevoir des valeurs. Cela n'affectera pas votre capteur actuel contrôlé par Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Ses notifications doivent rester visibles : ne les rendez pas silencieuses et ne les masquez pas.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuration dans AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Revenez ensuite à l'écran d'accès aux notifications et autorisez-le.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Dépannage G6 et ONE

### Dépannage spécifique au Dexcom G6/ONE

-   Faites défiler jusqu'à **Troubleshooting** [ici](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Dépannage général

Le dépannage général des MGC se trouve [ici](#general-cgm-troubleshooting).

### Nouveau transmetteur avec capteur en cours

Si vous changez de transmetteur pendant une session de capteur en cours, vous pouvez essayer de retirer le transmetteur sans endommager le support du capteur. Une vidéo est disponible [ici](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si vous choisissez plutôt [cette solution](https://youtu.be/tx-kTsrkNUM), vous devez faire attention à ne pas [endommager les contacts du capteur](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) avec la bande.
