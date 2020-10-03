# Pompe DanaRS

*Ces instructions décrivent la configuration de l’application et de votre pompe si vous avez une DanaRS commercialisée depuis 2017. Visitez la [pompe à insuline Dana R](./DanaR-Insulin-Pump) si vous avez plutôt la pompe initiale DanaR.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* Sur la pompe DanaRS, pompe « BASAL A » est utilisé par l'application. Les données existantes se font écrasé.

* Dans AndroidAPS, allez dans Générateur de configuration et sélectionnez « DanaRS »

* Sélectionnez le Menu en appuyant sur les 3 points en haut à droite. Sélectionnez le menu Préférences.

* Sélectionnez Appairage sur la nouvelle pompe DanaRS, puis cliquez sur le numéro de série de votre DanaRS.
  
  ![Appairage Dana RS avec AAPS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware v1 and v2 the default password is 1234.
  * For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Non. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Activez les Bolus Étendus sur la pompe

## Erreurs spécifiques à DanaRS

### Erreur lors de la distribution de l'insuline

Dans le cas où la connexion entre AAPS et DanaRS est perdue pendant un bolus d'insuline (par ex. vous vous éloignez de votre téléphone alors que la DanaRS est en train de délivrer de l'insuline), vous verrez le message suivant et vous entendrez une alarme sonore.

![Alarme d'administration de l'insuline](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Vérifiez dans l'historique de la pompe (à la pompe ou à l'aide de l'onglet Dana > historique de la pompe > bolus) si le bolus est correct.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* Le montant réel est lu et enregistré lors de la prochaine connexion. Pour forcer cette mise à jour, appuyez sur l'icône BT dans l'onglet dana ou attendez juste la prochaine connexion.

## Remarque spéciale lors du changement de téléphone

Lors du passage à un nouveau téléphone, les étapes suivantes sont nécessaires :

* **Exportez les paramètres** sur votre ancien téléphone
  
  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Exporter les paramètres
    
    ![Export des paramètres AAPS](../images/AAPS_ExportSettings.png)

* **Transférez** les paramètres de l'ancien au nouveau téléphone

* **Appairez manuellement** DanaRS avec le nouveau téléphone 
  * Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. Par conséquent, le nouveau téléphone et la pompe doivent être appairés manuellement.
* **Installez AndroidAPS** sur le nouveau téléphone.
* **Importez les paramètres** Sur votre nouveau téléphone 
  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Importer les paramètres

## Voyager avec différents fuseaux horaires avec la pompe DanaR

Pour plus d'informations sur les voyages dans différents fuseaux horaires, voir la section [Voyager avec différents fuseaux horaires avec une pompe](../Usage/Timezone-traveling#danarv2-danars).