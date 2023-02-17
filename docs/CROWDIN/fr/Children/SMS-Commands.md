# Commandes SMS

## La sécurité avant tout

- AAPS vous permet de controler le téléphone d’un enfant à distance via un SMS. Si vous activez le Communicateur SMS, rappelez-vous toujours que le téléphone configuré pour donner des commandes distantes pourrait être volé. Donc, toujours le protéger au minimum par un code PIN. Un mot de passe robuste ou une identification biométrique sont recommandés.
- Additionally it is recommended to allow a [second phone number](#authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](#other) SMS communicator in case your main remote phone gets lost or stolen.
- AAPS vous informera également par SMS si vos commandes distantes, comme un bolus ou un changement de profil, ont été effectuées. Il est conseillé de le configurer de sorte que les SMS de confirmation soient envoyés à au moins deux numéros de téléphone différents au cas où l'un des téléphones destinataires serait volé.
- **Si vous faites un bolus au moyen de commandes SMS, vous devez entrer les glucides par Nightscout (NSClient, site Web ...) !** Si vous ne le faites pas, l'IA serait correct mais le GA serait lui trop faible pouvant conduire à ne pas effectuer de bolus de correction car AAPS estimerait que vous avez trop d'insuline active.
- Depuis AndroidAPS version 2.7, une application d'authentification avec un mot de passe à usage unique basé sur l'heure doit être utilisé pour augmenter la sécurité lors de l'utilisation de commandes SMS.

## Paramétrer les commandes SMS

```{image} ../images/SMSCommandsSetup.png
:alt: Paramétrage des commandes SMS
```

- La plupart des ajustements des cibles temporaires, suivi d'AAPS, etc. peuvent être fait avec l'application [NSClient](../Children/Children.md) sur un téléphone Android avec une connexion Internet.
- Les bolus ne peuvent pas être donnés à partir de Nightscout, mais vous pouvez utiliser des commandes SMS.
- Si vous utilisez un iPhone comme follower et ne pouvez donc pas utiliser NSClient, il y a des commandes SMS supplémentaires disponibles.
- Dans les paramètres de votre téléphone android allez dans Applications > AndroidAPS > Autorisations et activez SMS

### Numéros de tél autorisés

- Dans AndroidAPS, allez dans **Préférences > Communicateur SMS** et entrez le(s) numéro(s) de téléphone que vous autoriserez pour les commandes SMS (séparés par des points-virgules, par ex. +33123456789;+33123456798)

- Activez 'Autoriser les commandes distantes par SMS'.

- Si vous voulez utiliser plus d'un numéro :

  - Entrez seulement un numéro.

  - Vérifiez le bon fonctionnement de ce numéro unique en envoyant et en confirmant une commande SMS.

  - Entrez le(s) numéro(s) supplémentaire(s) séparé(s) par un point-virgule, pas d'espace.

    ```{image} ../images/SMSCommandsSetupSpace2.png
    :alt: Commandes SMS Configurer plusieurs numéros
    ```

### Délai entre les commandes bolus

- Vous pouvez définir un délai minimum entre deux bolus envoyés par SMS.
- Pour des raisons de sécurité, vous devez ajouter au moins deux numéros de téléphone autorisés pour modifier cette valeur.

### Code PIN obligatoire à la fin de l'OTP

- Pour des raisons de sécurité, le code de réponse doit être suivi d'un code PIN.

- Règles du code PIN :

  - 3 à 6 chiffres
  - ne pas utiliser les mêmes chiffres (par ex. 1111)
  - ne pas utiliser des chiffres qui se suivent (par ex. 1234)

### Configuration de l'Authentificateur

- L'authentification à deux facteurs est utilisée pour améliorer la sécurité.

- Vous pouvez utiliser n'importe quelle application d'authentification qui prend en charge les jetons TOTP RFC 6238. Les applications gratuites populaires sont :

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Installez l'application d'authentification de votre choix sur votre téléphone follower et scannez le QR code affiché dans AAPS.

- Testez le mot de passe à usage unique en entrant le jeton affiché dans votre application d'authentification et le code PIN que vous venez de configurer dans AAPS. Par exemple :

  - Votre code PIN obligatoire est 2020
  - Le jeton TOTP de l'application d'authentification est 457051
  - Entrez 4570512020

- Le texte rouge "WRONG PIN" changera **automatiquement** en vert "OK" si l'entrée est correcte. **Il n'y a aucun bouton à appuyer !**

- L'heure des deux téléphones doit être synchronisée. Les mieux est de définir l'heure automatiquement à partir du réseau. Les différences d'heures peuvent entraîner des problèmes d'authentification.

- Utilisez le bouton "RESET AUTHENTICATORS" si vous voulez supprimer les autorisations effectuées.  (En réinitialisant l'authentificateur, vous rendez TOUS les authentificateurs déjà configurés non valides. Vous devrez les configurer à nouveau)

## Utiliser les commandes SMS

- Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the [commands](SMS-Commands-commands) below.

- Le téléphone AAPS répondra pour confirmer le succès de la commande ou du statut demandé.

- Confirmez la commande en envoyant le code si nécessaire. Par exemple :

  - Votre code PIN obligatoire est 2020
  - Le jeton TOTP de l'application d'authentification est 457051
  - Entrez 4570512020

**Astuce** : Il peut être utile d'avoir un forfait SMS illimité (pour chaque téléphone utilisé) si beaucoup de SMS sont envoyés.

(SMS-Commands-commands)=
## Commandes

Commands must be sent in English, the response will be in your local language if the response string is already [translated](translations-translate-strings-for-androidaps-app).

```{image} ../images/SMSCommands.png
:alt: Example de commandes SMS
```

### Boucle

- LOOP STOP/DISABLE \* Réponse : La boucle a été désactivée

- LOOP START/ENABLE \* Réponse : La boucle a été activée

- LOOP STATUS

  - La réponse dépend du statut réel

    - La Boucle est désactivée
    - La Boucle est activée
    - Suspendu (10 min)

- LOOP SUSPEND 20 \* Réponse : Suspendu (20 min)

- LOOP RESUME \* Response: Loop resumed

### CGM data

- BG \* Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
- CAL 5.6 \* Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN \* Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

### Basal

- BASAL STOP/CANCEL \* Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
- BASAL 0.3 \* Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
- BASAL 0.3 20 \* Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
- BASAL 30% \* Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
- BASAL 30% 50 \* Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

### Bolus

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

- BOLUS 1.2 \* Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available. Try again later.
- BOLUS 0.60 MEAL \* If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins). \* Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available.
- CARBS 5 \* Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
- CARBS 5 17:35/5:35PM \* Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
- EXTENDED STOP/CANCEL \* Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
- EXTENDED 2 120 \* Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

### Profil

- PROFILE STATUS \* Response: Profile1
- PROFILE LIST \* Response: 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1 \* Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
- PROFILE 2 30 \* Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

### Autres

- TREATMENTS REFRESH \* Response: Refresh treatments from NS
- NSCLIENT RESTART \* Response: NSCLIENT RESTART 1 receivers
- PUMP \* Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
- PUMP CONNECT \* Response: Pump reconnected
- PUMP DISCONNECT *30* \* Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
- SMS DISABLE/STOP \* Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
- TARGET MEAL/ACTIVITY/HYPO \* Réponse : Pour définir la cible temp MEAL/ACTIVITY/HYPO, renvoyez le code depuis l'application Authenticator pour l'utilisateur suivie du code PIN
- TARGET STOP/CANCEL \* Réponse : Pour annuler la cible temp, renvoyez le code depuis l'application Authenticator pour l'utilisateur suivie du code PIN
- HELP \* Réponse : BG, LOOP, TREATMENTS, .....
- HELP BOLUS \* Réponse : BOLUS 1.2 BOLUS 1.2 MEAL

(SMS-Commands-troubleshooting)=
## Résolution de problèmes

### SMS multiples

Si vous recevez toujours le même message (par ex. changement de profil) vous avez probablement mis en place une boucle infinie avec d'autres applications. Cela peut être xDrip+, par exemple. Si c'est le cas, assurez-vous que xDrip+ (ou toute autre application) ne télécharge pas les traitements dans NS.

Si l'autre application est installée sur plusieurs téléphones assurez-vous de désactiver le téléchargement NS sur chacun d'eux.

### Les commandes SMS ne fonctionnent pas sur les téléphones Samsung

Il y a eu un signalement sur les commandes SMS s'arrêtant après une mise à jour sur le téléphone Galaxy S10. Peut être résolu en désactivant 'envoyer en tant que message chat'.

```{image} ../images/SMSdisableChat.png
:alt: Désactiver SMS en tant que message chat
```
