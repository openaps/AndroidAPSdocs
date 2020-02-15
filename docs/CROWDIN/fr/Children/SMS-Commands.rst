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

* Dans les paramètres de votre téléphone android allez dans Applications > AndroidAPS > Autorisations et activez SMS
* Dans AndroidAPS, allez dans Préférences > Communicateur SMS et entrez le(s) numéro(s) de téléphone que vous autoriserez pour les commandes SMS (séparés par des points-virgules, par ex. +4412345678;+4412345679) et activez également l'option "Autoriser les commandes à distance par SMS".
* Si vous voulez utiliser plus d'un numéro :

  * Entrez seulement un numéro.
  * Vérifiez le bon fonctionnement de ce numéro unique en envoyant et en confirmant une commande SMS.
  * Entrez le(s) numéro(s) supplémentaire(s) séparé(s) par un point-virgule, pas d'espace.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup


* Envoyez un SMS au téléphone avec AndroidAPS à partir de(s) numéro(s) de téléphone approuvé(s) à l'aide de l'une des commandes ci-dessous en **LETTRES CAPITALES**, le téléphone répondra pour confirmer le succès de la commande ou du statut demandé. Confirmer la commande en envoyant le code fourni dans le SMS de AndroidAPS de téléphone quand cela s'avère nécessaire.

**Astuce**: Il peut être utile d'avoir un forfait SMS pour les deux téléphones si beaucoup de SMS seront envoyés.

Commandes
==================================================

Mettre les lettres en majuscule ou en minuscule n'est pas nécessaire lors de l'envoi des commandes.

Les commandes doivent être envoyées en anglais, la réponse sera dans votre langue locale si la chaîne de réponse a déjà été `traduite <../translations.html#translate-strings-for-androidaps-app>` _.

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
Un bolus par SMS n'est pas possible dans les 15 minutes suivant le dernier envoi de bolus dans AAPS ou après la dernière commande SMS. Vous ne pouvez ajuster la durée que si au moins deux numéros de téléphone sont entrés. La réponse dépend donc du moment où le dernier bolus a été administré.

* BOLUS 1.2
   * Réponse A : Renvoyer le code Rrt pour injecter le bolus 1.2U
   * Réponse B : Bolus à distance non disponible. Réessayez plus tard.
* BOLUS 0.60 MEAL
   * Si vous spécifiez le paramètre optionnel REPAS, cela définit la Cible Temporaire Repas Imminent (valeur par défaut : 90 mg/dL, 5,0 mmol/l pour 45 min).
   * Réponse A : Pour injecter le bolus repas de 0,60U renvoyer le code Rrt
   * Réponse B : Bolus à distance non disponible. 
* CARBS 5
   * Réponse : Pour entrer 5g à 12:45 renvoyer le code EmF
* CARBS 5 17:35/5:35PM
   * Réponse : Pour entrer 5g à 17:35 renvoyer le code EmF
* EXTENDED STOP/CANCEL
   * Réponse : Pour arrêter le Bolus étendu, renvoyer le code EmF
* EXTENDED 2 120
   * Réponse : Pour démarrer le Bolus étendu 2U pendant 120 min, renvoyer le code EmF

Profil
--------------------------------------------------
* PROFILE STATUS
   * Réponse: Profil1
* PROFILE LIST
   * Réponse : 1.`Profil1` 2.`Profil2`
* PROFILE 1
   * Réponse : Pour changer le profil vers Profil1 100%, renvoyer le code Any
* PROFILE 2 30
   * Réponse : Pour changer le profil vers Profil2 30%, renvoyer le code Any

Autres
--------------------------------------------------
* TREATMENTS REFRESH
   * Réponse : Actualiser les données depuis NS
* NSCLIENT RESTART
   * Réponse : NSCLIENT RESTART 1 receivers
* POMPE
   * Réponse : Dernière conn : il y a 1 min Temp: 0.00U/h @11:38 5/30min IA: 0.5U Réserv: 34U Batt.: 100
* SMS DISABLE/STOP
   * Réponse : Pour désactiver les commandes à distance SMS renvoyer le code Any. Gardez à l'esprit que vous ne pourrez le réactiver que directement à partir de l'application AAPS du smartphone maitre.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: Pour définir la Cible Temp MEAL/ACTIVITY/HYPO renvoyer le code Any
* TARGET STOP/CANCEL   
   * Réponse : Pour annuler la Cible Temp renvoyer le code Any
* HELP
   * Réponse : BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Réponse : BOLUS 1.2 BOLUS 1.2 MEAL

Dépannage
==================================================
SMS multiples
--------------------------------------------------
Si vous recevez toujours le même message (par ex. changement de profil) vous avez probablement mis en place une boucle infinie avec d'autres applications. Cela peut être xDrip+, par exemple. Si c'est le cas, assurez-vous que xDrip + (ou toute autre application) ne télécharge pas les traitements dans NS. 

Si l'autre application est installée sur plusieurs téléphones assurez-vous de désactiver le téléchargement NS sur chacun d'eux.

Les commandes SMS ne fonctionnent pas sur des téléphones Samsung
--------------------------------------------------
Il y a eu un signalement sur les commandes SMS s'arrêtant après une mise à jour sur le téléphone Galaxy S10. Peut être résolu en désactivant 'envoyer en tant que message chat'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
