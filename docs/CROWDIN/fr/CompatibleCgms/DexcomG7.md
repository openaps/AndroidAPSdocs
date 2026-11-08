# Dexcom G7, ONE+ et Stelo


## Commençons par des fondamentaux

À noter : contrairement au G6, les systèmes G7, ONE+ et Stelo ne lissent pas les valeurs, ni dans l'application, ni dans le lecteur. Plus de détails disponibles [ici](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Lisez les suggestions de [méthode de lissage](../CompatibleCgms/SmoothingBloodGlucoseData.md) à utiliser avec Dexcom G7/ONE+/Stelo
```

## 1. xDrip (connexion directe au G7, ONE+ ou Stelo)

- xDrip se connecte lui-même au capteur : désinstallez l'application Dexcom, car une seule application peut se connecter au capteur. Pour garder l'application Dexcom, utilisez plutôt [xDrip en mode Companion App](#DexcomG7-xdrip-companion-app).
- Suivez les instructions ici : [xDrip G7, ONE+ and Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Une version récente de xDrip est nécessaire. La version minimale est indiquée sur la page en lien.
- Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).

- Réglez les paramètres de xDrip selon les explications de la page [Paramètres xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (G7 uniquement)

```{admonition} Old app version
:class: warning
Dexcom BYODA est maintenant une très ancienne version de l'application et ne peut pas être mis à jour. Non disponible pour ONE+ ou Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permet la diffusion locale vers AAPS

-   Cette application vous permet d'utiliser votre Dexcom G7 avec n'importe quel smartphone Android.
-   Désinstallez l'application Dexcom d'origine
-   Installez l'apk téléchargé
-   Saisissez le code du capteur dans l'application patchée
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip en mode Companion App (G7, ONE+ et Stelo)

L'application Dexcom officielle reste connectée au capteur. xDrip lit les valeurs de glycémie dans les notifications de l'application Dexcom et les envoie à **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Lire les notifications de l'application Dexcom

- Gardez l'application Dexcom installée et connectée au capteur. Ses notifications doivent rester visibles : ne les rendez pas silencieuses et ne les masquez pas.
- Téléchargez et installez [xDrip](https://github.com/NightscoutFoundation/xDrip). Utilisez les mêmes unités de glycémie dans xDrip que dans l'application Dexcom.
- Dans xDrip, allez dans **Settings** > **Hardware Data Source** et sélectionnez **Companion App**.

  ![xDrip Hardware Data Source : Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip demande l'autorisation de lire les notifications. Appuyez sur **OK**, puis sélectionnez **xDrip** dans la liste et activez **Autoriser l'accès aux notifications**.

  ![Liste d'accès aux notifications](../images/xDrip_Companion_NotificationAccess1.png)

- Si **Autoriser l'accès aux notifications** est grisé (*Contrôlé par un paramètre restreint*), Android le bloque parce que xDrip n'a pas été installé depuis le Play Store :

  ![Accès aux notifications contrôlé par un paramètre restreint](../images/xDrip_Companion_Restricted.png)

  Ouvrez les infos de l'application xDrip (appui long sur l'icône xDrip > **Infos sur l'appli**), appuyez sur le menu à trois points en haut à droite et sélectionnez **Autoriser les paramètres restreints**. Revenez ensuite à l'écran d'accès aux notifications et autorisez-le.

  ![Infos sur l'appli : Autoriser les paramètres restreints](../images/xDrip_Companion_AllowRestricted.png)

  ![Accès aux notifications autorisé pour xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Les valeurs apparaissent dans xDrip quand l'application Dexcom affiche une nouvelle valeur. Si rien n'apparaît, vous devrez peut-être démarrer un capteur dans xDrip : cela n'a aucun effet sur le vrai capteur. Dans ce mode, Stelo donne une valeur toutes les 15 minutes.

### Companion Bluetooth (G7)

Quand l'application Dexcom est connectée à un capteur G7, xDrip peut aussi écouter les valeurs que le capteur envoie à l'application Dexcom par Bluetooth. xDrip ne s'appaire pas avec le capteur et vous n'avez pas besoin de saisir le code du capteur : l'application Dexcom garde le contrôle.

Avec **Companion Bluetooth**, xDrip reçoit du capteur l'heure exacte et la tendance de chaque valeur, au lieu de l'heure d'apparition de la notification. Il comble aussi les trous quand le téléphone était hors de portée (backfill).

- Dans xDrip, allez dans **Settings** > **Less common settings** > **Bluetooth Settings** et activez **Companion Bluetooth**.

  ![xDrip Bluetooth Settings : Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Cela ne fonctionne pas sur tous les téléphones et toutes les versions d'Android. Désactivez-le si vous voyez des problèmes.
- Si un ancien capteur Dexcom est encore dans la liste Bluetooth du téléphone, xDrip risque d'écouter le mauvais : dans Android **Paramètres** > **Appareils connectés**, oubliez les capteurs que vous n'utilisez plus.
- Companion Bluetooth est conçu pour le G7. Avec ONE+ et Stelo, utilisez les notifications.

### Configuration dans AAPS

- Sélectionnez xDrip dans [**Configuration → Source GLY**](#Config-Builder-bg-source).
- Réglez les paramètres de xDrip selon les explications de la page [Paramètres xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 et ONE+)

Version 9.0 ou plus récente nécessaire

- Désactivez l'application connectée auparavant au capteur : désinstallez l'application ou utilisez « Forcer l'arrêt ». Désactivez l'autorisation « Appareils à proximité » dans les paramètres de l'application. Limitez l'utilisation de la batterie par l'application.

- Supprimez le capteur dans les paramètres Bluetooth : dans les paramètres Android, trouvez le capteur dans les appareils associés et choisissez « Oublier ». Le nom des capteurs Dexcom G7 commence par DXCM.

- Évitez les interférences avec d'autres capteurs : gardez les anciens capteurs Dexcom hors de portée Bluetooth.

- Connectez le capteur G7 à Juggluco : ouvrez Juggluco → menu de gauche → Photo. Scannez le code Data Matrix sur l'applicateur du capteur G7. Attendez jusqu'à 5 minutes que Juggluco trouve le capteur.

- Conditions pour l'appairage : acceptez d'appairer le capteur avec Juggluco. Vérifiez que l'écran n'est pas verrouillé pendant l'appairage. Si l'appairage échoue, attendez 5 minutes avant de réessayer.

- Exception : les montres Wear OS peuvent s'associer sans appuyer sur un bouton d'acceptation.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

L'application Dexcom officielle reste connectée au capteur. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G7, ONE+ and Stelo apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to the other methods on this page, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.
- Stelo gives a reading every 15 minutes.

### Set up the Dexcom app

- Gardez l'application Dexcom installée et connectée au capteur.
- Make sure the Dexcom app shows the current glucose value in its notification. Ses notifications doivent rester visibles : ne les rendez pas silencieuses et ne les masquez pas.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuration dans AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Revenez ensuite à l'écran d'accès aux notifications et autorisez-le.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
