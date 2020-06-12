# Pompe DanaRS

*Ces instructions décrivent la configuration de l’application et de votre pompe si vous avez une DanaRS commercialisée depuis 2017. Visitez la [pompe à insuline Dana R](./DanaR-Insulin-Pump) si vous avez plutôt la pompe initiale DanaR.*

**La DanaRS avec le nouveau firmware v3 ne peut actuellement pas être utilisée avec AndroidAPS !**

* Sur la pompe DanaRS, pompe « BASAL A » est utilisé par l'application. Les données existantes se font écrasé.

* Dans AndroidAPS, allez dans Générateur de configuration et sélectionnez « DanaRS »

* Sélectionnez le Menu en appuyant sur les 3 points en haut à droite. Sélectionnez le menu Préférences.

* Sélectionnez Appairage sur la nouvelle pompe DanaRS, puis cliquez sur le numéro de série de votre DanaRS.
  
  ![Appairage Dana RS avec AAPS](../images/AAPS_DanaRSPairing.png)

* Sélectionnez Mot de passe de la pompe et saisissez votre mot de passe. (Le mot de passe par défaut est 1234)   
  ** Vous devez confirmer l'appairage sur la pompe ! ** C'est juste la façon dont vous êtes habitués à faire d'autres appairages bluetooth (par ex. le smartphone et l'audio de la voiture).
  
  ![Confirmation d'appairage Dana RS](../images/DanaRS_Pairing.png)

* Sélectionner la vitesse de Bolus pour changer la vitesse de Bolus par défaut souhaitée (12 sec par 1 U, 30 sec par 1 U ou 60 sec par 1 U).

* Redémarrez votre téléphone.

* Régler l'incrément Basale sur pompe à 0,01 U/h en utilisant le menu de Médecins (voir le guide de l’utilisateur de la pompe)

* Activez les Bolus Étendus sur la pompe

## Erreurs spécifiques à DanaRS

### Erreur lors de la distribution de l'insuline

Dans le cas où la connexion entre AAPS et DanaRS est perdue pendant un bolus d'insuline (par ex. vous vous éloignez de votre téléphone alors que la DanaRS est en train de délivrer de l'insuline), vous verrez le message suivant et vous entendrez une alarme sonore.

![Alarme d'administration de l'insuline](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Vérifiez dans l'historique de la pompe (à la pompe ou à l'aide de l'onglet Dana > historique de la pompe > bolus) si le bolus est correct.
* Supprimez l'entrée erreur dans l'onglet CP si vous le souhaitez.
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