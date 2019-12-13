Commandes SMS
**************************************************
La sécurité avant tout
==================================================
* AndroidAPS vous permet de controler le téléphone d’un enfant à distance via un SMS. Si vous activez le Communicateur SMS, rappelez-vous toujours que le téléphone configuré pour donner des commandes distantes pourrait être volé. Donc, toujours le protéger au minimum par un code PIN.
* AndroidAPS vous informera également par SMS si vos commandes distantes, comme un bolus ou un changement de profil, ont été effectuées. Il est conseillé de le configurer de sorte que les SMS de confirmation soient envoyés à au moins deux numéros de téléphone différents au cas où l'un des téléphones destinataires serait volé.
* **Si vous faites un bolus au moyen de commandes SMS, vous devez entrer des glucides par Nightscout (NSClient, site Web ...) !** Si vous ne le faites pas, l'IA serait correct mais le GA serait lui trop faible pouvant conduire à ne pas effectuer de bolus de correction car AAPS estimerait que vous avez trop d'insuline active.

Comment ça marche
==================================================
* La plupart des ajustements des cibles temporaires, suivi d'AAPS, etc. peuvent être fait avec l'application `NSclient <../Children/Children.html>`_ sur un téléphone Android avec une connexion Internet.
* Les bolus ne peuvent pas être donnés à partir de Nightscout, mais vous pouvez utiliser des commandes SMS.
* Si vous utilisez un iPhone comme follower et ne pouvez donc pas utiliser NSclient, il y a des commandes SMS supplémentaires disponibles.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.
* Si vous voulez utiliser plus d'un numéro :

  * Entrez seulement un numéro.
  * Vérifiez le bon fonctionnement de ce numéro unique en envoyant et en confirmant une commande SMS.
  * Enter additional number(s) separated by semicolon, no space.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup


* Envoyez un SMS au téléphone avec AndroidAPS à partir de(s) numéro(s) de téléphone approuvé(s) à l'aide de l'une des commandes ci-dessous en **LETTRES CAPITALES**, le téléphone répondra pour confirmer le succès de la commande ou du statut demandé. Confirmer la commande en envoyant le code fourni dans le SMS de AndroidAPS de téléphone quand cela s'avère nécessaire.

**Astuce**: Il peut être utile d'avoir un forfait SMS pour les deux téléphones si beaucoup de SMS seront envoyés.

Commandes
==================================================

Upper and lower case is irrelevant when sending commands.

Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

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
   * Renvoyer le code Rrt pour envoyer la calibration 5.6
   * Réponse après réception du code correct : Étalonnage envoyé. La réception doit être activée dans xDrip. (**Si xDrip est installé. L'acceptation des calibrations doit être activée dans xDrip+**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Réponse: Envoyer le code EmF pour arrêter la Basal temporaire [Note: le Code de la EmF est juste un exemple]
* BASAL 0.3
   * Réponse : Pour démarrer la Basal 0.3U/h pendant 30 min, renvoyer le code Swe
* BASAL 0.3 20
   * Réponse : Pour démarrer la Basal 0.3U/h pendant 20 min, renvoyer le code Swe
* BASAL 30%
   * Réponse : Pour démarrer la Basal 30% pendant 30 min, renvoyer le code Swe
* BASAL 30% 50
   * Réponse : Pour démarrer la Basal 30% pendant 50 min, renvoyer le code Swe

Bolus
--------------------------------------------------
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Réessayez plus tard.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Réponse : Pour arrêter le Bolus étendu, renvoyer le code EmF
* EXTENDED 2 120
   * Réponse : Pour démarrer le Bolus étendu 2U pendant 120 min, renvoyer le code EmF

Profil
--------------------------------------------------
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Autres
--------------------------------------------------
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* POMPE
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Dépannage
==================================================
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
