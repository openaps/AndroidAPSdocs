Commandes SMS
**************************************************
La sécurité avant tout
==================================================
* AndroidAPS vous permet de controler le téléphone d’un enfant à distance via un SMS. Si vous activez le Communicateur SMS, rappelez-vous toujours que le téléphone configuré pour donner des commandes distantes pourrait être volé. Donc, toujours le protéger au minimum par un code PIN.
* AndroidAPS vous informera également par SMS si vos commandes distantes, comme un bolus ou un changement de profil, ont été effectuées. Il est conseillé de le configurer de sorte que les SMS de confirmation soient envoyés à au moins deux numéros de téléphone différents au cas où l'un des téléphones destinataires serait volé.
* **Si vous faites un bolus au moyen de commandes SMS, vous devez entrer les glucides par Nightscout (NSClient, site Web ...) !** Si vous ne le faites pas, l'IA serait correct mais le GA serait lui trop faible pouvant conduire à ne pas effectuer de bolus de correction car AAPS estimerait que vous avez trop d'insuline active.
* As of AndroidAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.

Setup SMS commands
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS Commands Setup
      
* La plupart des ajustements des cibles temporaires, suivi d'AAPS, etc. can be done on `NSClient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Les bolus ne peuvent pas être donnés à partir de Nightscout, mais vous pouvez utiliser des commandes SMS.
* If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.

* Dans les paramètres de votre téléphone android allez dans Applications > AndroidAPS > Autorisations et activez SMS

Authorized phone numbers
-------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) 
* Enable 'Allow remote commands via SMS'.
* Si vous voulez utiliser plus d'un numéro :

  * Entrez seulement un numéro.
  * Vérifiez le bon fonctionnement de ce numéro unique en envoyant et en confirmant une commande SMS.
  * Entrez le(s) numéro(s) supplémentaire(s) séparé(s) par un point-virgule, pas d'espace.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup multiple numbers

Minutes between bolus commands
-------------------------------------------------
* You can define the minimum delay between to boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
-------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* PIN rules:

   * 3 to 6 digits
   * not same digits (i.e. 1111)
   * not in a row (i.e. 1234)

Authenticator setup
-------------------------------------------------
* Two-factor authentication is used to improve safety.
* You can use any Authenticator app that supports RFC 6238 TOTP tokens. Popular free apps are:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Install the authenticator app of your choice on your follower phone and scan the QR code shown in AAPS.
* Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Exemple :

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020
   
* Red text "WRONG PIN" will change **automatically** to green "OK" if entry is correct. **There is no button you can press!**
* Use button "RESET AUTHENTICATORS" if you want to remove provisions.

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands </Children/SMS-Commands.html#commands>`_ below in **CAPITAL LETTERS**. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Exemple :

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020

**Astuce**: Il peut être utile d'avoir un forfait SMS pour les deux téléphones si beaucoup de SMS seront envoyés.

Commandes
==================================================
Commands must be send in English and in **CAPITAL LETTERS**, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: Example de commandes SMS

Boucle
--------------------------------------------------
* LOOP STOP/DISABLE
   * Réponse : La boucle a été désactivée
* LOOP START/ENABLE
   * Réponse : La boucle a été activée
* LOOP STATUS
   * La réponse dépend du statut réel
      * La Boucle est désactivée
      * La Boucle est activée
      * Suspendu (10 min)
* LOOP SUSPEND 20
   * Réponse : Suspendu (20 min)
* LOOP RESUME
   * Réponse : Boucle relancée

Données MGC
--------------------------------------------------
* Gly
   * Réponse: Dernière G: 5,6 il y a 4 min, Delta: 2 mmol, IA: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Réponse : Pour envoyer la calibration 5.6, renvoyez le code depuis l'application Authenticator pour l'utilisateur suivie du code PIN
   * Réponse après réception du code correct : Étalonnage envoyé. La réception doit être activée dans xDrip. (**Si xDrip est installé. L'acceptation des calibrations doit être activée dans xDrip+**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolus
--------------------------------------------------
Un bolus par SMS n'est pas possible dans les 15 minutes suivant le dernier envoi de bolus dans AAPS ou après la dernière commande SMS. Vous ne pouvez ajuster la durée que si au moins deux numéros de téléphone sont entrés. La réponse dépend donc du moment où le dernier bolus a été administré.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
   * Réponse B : Bolus à distance non disponible. Réessayez plus tard.
* BOLUS 0.60 MEAL
   * Si vous spécifiez le paramètre optionnel REPAS, cela définit la Cible Temporaire Repas Imminent (valeur par défaut : 90 mg/dL, 5,0 mmol/l pour 45 min).
   * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
   * Réponse B : Bolus à distance non disponible. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Profil
--------------------------------------------------
* PROFILE STATUS
   * Réponse: Profil1
* PROFILE LIST
   * Réponse : 1.`Profil1` 2.`Profil2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Autres
--------------------------------------------------
* TREATMENTS REFRESH
   * Réponse : Actualiser les données depuis NS
* NSCLIENT RESTART
   * Réponse : NSCLIENT RESTART 1 receivers
* POMPE
   * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
   * Response: Pump reconnected
* PUMP DISCONNECT *30*
   * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
   * Réponse : Pour désactiver les commandes à distance SMS renvoyer le code Any. Gardez à l'esprit que vous ne pourrez le réactiver que directement à partir de l'application AAPS du smartphone maitre.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
   * Réponse : BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Réponse : BOLUS 1.2 BOLUS 1.2 MEAL

Dépannage
==================================================
SMS multiples
--------------------------------------------------
Si vous recevez toujours le même message (par ex. changement de profil) vous avez probablement mis en place une boucle infinie avec d'autres applications. Cela peut être xDrip+, par exemple. Si c'est le cas, assurez-vous que xDrip + (ou toute autre application) ne télécharge pas les traitements dans NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

Les commandes SMS ne fonctionnent pas sur des téléphones Samsung
--------------------------------------------------
Il y a eu un signalement sur les commandes SMS s'arrêtant après une mise à jour sur le téléphone Galaxy S10. Peut être résolu en désactivant 'envoyer en tant que message chat'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
