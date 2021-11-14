# DanaRS and Dana-i Pump

*Ces instructions décrivent la configuration de l’application et de votre pompe si vous avez une DanaRS commercialisée depuis 2017. Visitez la [pompe à insuline Dana R](./DanaR-Insulin-Pump) si vous avez plutôt la pompe initiale DanaR.*

**Le nouveau firmware Dana RS v3 peut être utilisé depuis la version 2.7 d'AndroidAPS.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

## Appairage de la pompe

* Dans AndroidAPS, allez dans Générateur de configuration et sélectionnez « DanaRS »

* Sélectionnez le Menu en appuyant sur les 3 points en haut à droite. Sélectionnez le menu Préférences.

* Click on "Selected pump".
  
  ![Appairage DanaRS avec AAPS](../images/AAPS_DanaRSPairing.png)

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* -> For DanaRS v1 select Pump password in preferences and set your password

* -> For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AndroidAPS pairing dialog
* -> For Dana-i standard Android pairing dialog appear and you have to enter 6-digit number displayed on pump

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)
* Set bolus step on pump to 0.1 U/h using Doctors menu (see pump user guide)
* Activez les Bolus Étendus sur la pompe

### Mot de passe par défaut

* Pour les DanaRS avec le firmware v1 et v2, le mot de passe par défaut est 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24). Open main menu on pump > review > information. Number 3 is production date. For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

## Changer de mot de passe sur la pompe

* Appuyez sur le bouton OK de la pompe
* Dans le menu principal, sélectionnez "OPTION" (déplacer à droite en appuyant sur le bouton flèche plusieurs fois)
  
  ![Menu principal DanaRS](../images/DanaRSPW_01_MainMenu.png)

* Dans le menu Options, sélectionnez "OPTION UTILISATEUR"
  
  ![Menu Option DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Utilisez le bouton flèche pour faire défiler vers le bas jusqu'à " 11. Mot de passe "
  
  ![DanaRS 11. Mot de passe](../images/DanaRSPW_03_11PW.png)

* Appuyez sur OK pour saisir l'ancien mot de passe.

* Entrez **l'ancien mot de passe** (mot de passe par défaut voir [au-dessus](#mot-de-passe-par-defaut)) et appuyez sur OK
  
  ![DanaRS Entrez l'ancien mot de passe](../images/DanaRSPW_04_11PWenter.png)

* Si un mauvais mot de passe est entré ici, il n'y aura pas de message indiquant l'échec !

* Définissez un **nouveau mot de passe** (Modifiez les numéros avec les boutons + & - / Déplacez vers la droite avec le bouton flèche).
  
  ![DanaRS Nouveau mot de passe](../images/DanaRSPW_05_PWnew.png)

* Confirmez avec le bouton OK.

* Sauvegardez en appuyant à nouveau sur le bouton OK.
  
  ![DanaRS Sauvegarder le nouveau mot de passe](../images/DanaRSPW_06_PWnewSave.png)

* Déplacer vers le bas jusqu'à " 14. QUITTEZ " et appuyez sur le bouton OK.
  
  ![DanaRS Quitter](../images/DanaRSPW_07_Exit.png)

## Erreurs spécifiques à DanaRS

### Erreur lors de la distribution de l'insuline

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Vérifiez dans l'historique de la pompe (à la pompe ou à l'aide de l'onglet Dana > historique de la pompe > bolus) si le bolus est correct.
* Supprimer l'entrée en erreur dans l'onglet [Traitements](../Getting-Started/Screenshots#correction-de-glucides) si vous le souhaitez.
* Le montant réel est lu et enregistré lors de la prochaine connexion. Pour forcer cette mise à jour, appuyez sur l'icône BT dans l'onglet dana ou attendez juste la prochaine connexion.

## Remarque spéciale lors du changement de téléphone

When switching to a new phone the following steps are necessary:

* [Exportez les paramètres](../Usage/ExportImportSettings#export-settings) sur votre ancien téléphone
* Transfer settings from old to new phone

* DanaRS v1
  
  * **Manually pair** Dana RS with the new phone
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
  * Install AndroidAPS on the new phone.
  * [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone
* DanaRS v3, Dana-i 
  * start pairing procedure like decribed above
  * sometimes may be necessary to clear pairing information in AndroidAPS by long-click BT icon on DanaRS/i tab

## Voyager avec différents fuseaux horaires avec la pompe DanaR

Pour plus d'informations sur les voyages avec différents fuseaux horaires, voir la section [Voyager avec différents fuseaux horaires avec une pompe](../Usage/Timezone-traveling#danarv2-danars).