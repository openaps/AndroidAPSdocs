# Pompe DanaRS

*Ces instructions décrivent la configuration de l’application et de votre pompe si vous avez une DanaRS commercialisée depuis 2017. Visitez la [pompe à insuline Dana R](./DanaR-Insulin-Pump) si vous avez plutôt la pompe initiale DanaR.*

**Le nouveau firmware Dana RS v3 peut être utilisé depuis la version 2.7 d'AndroidAPS.**

* Sur la pompe DanaRS, « BASAL A » est utilisé par l'application. Les données existantes sont écrasé.

## Appairage de la pompe

* Dans AndroidAPS, allez dans Générateur de configuration et sélectionnez « DanaRS »

* Sélectionnez le Menu en appuyant sur les 3 points en haut à droite. Sélectionnez le menu Préférences.

* Sélectionnez Appairer une nouvelle pompe DanaRS, puis cliquez sur le numéro de série de votre DanaRS.
    
    ![Appairage DanaRS avec AAPS](../images/AAPS_DanaRSPairing.png)

* Sélectionnez Mot de passe de la pompe et saisissez votre mot de passe.

### Mot de passe par défaut

* Pour les DanaRS avec le firmware v1 et v2, le mot de passe par défaut est 1234.
* Pour les DanaRS avec le firmware v3, le mot de passe par défaut est une combinaison du mois de production et de la date de production (par ex. mois 01 et jour 24). Sur votre pompe ouvrez le menu principal -> Rapport -> Info produit. Le numéro 3 est la date de production.

* **Vous devez confirmer l'appairage sur la pompe !** C'est juste la façon dont vous êtes habitués à faire d'autres appairages bluetooth (par ex. le smartphone et l'audio de la voiture).
    
    ![Confirmation d'appairage DanaRS](../images/DanaRS_Pairing.png)

* Sélectionner la vitesse de Bolus pour changer la vitesse de Bolus par défaut souhaitée (12 sec par 1 U, 30 sec par 1 U ou 60 sec par 1 U).

* Redémarrez votre téléphone.
* Régler l'incrément Basale sur pompe à 0,01 U/h en utilisant le menu de Médecins (voir le guide de l’utilisateur de la pompe)
* Activez les Bolus Étendus sur la pompe

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
    
    ![DanaRS Entrez l"ancien mot de passe](../images/DanaRSPW_04_11PWenter.png)

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

Dans le cas où la connexion entre AAPS et DanaRS est perdue pendant un bolus d'insuline (par ex. vous vous éloignez de votre téléphone alors que la DanaRS est en train de délivrer de l'insuline), vous verrez le message suivant et vous entendrez une alarme sonore.

![Alarme d'administration de l'insuline](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Vérifiez dans l'historique de la pompe (à la pompe ou à l'aide de l'onglet Dana > historique de la pompe > bolus) si le bolus est correct.
* Supprimer l'entrée en erreur dans l'onglet [Traitements](../Getting-Started/Screenshots#correction-de-glucides) si vous le souhaitez.
* Le montant réel est lu et enregistré lors de la prochaine connexion. Pour forcer cette mise à jour, appuyez sur l'icône BT dans l'onglet dana ou attendez juste la prochaine connexion.

## Remarque spéciale lors du changement de téléphone

Lors du passage à un nouveau téléphone, les étapes suivantes sont nécessaires :

* [Exportez les paramètres](../Usage/ExportImportSettings#export-settings) sur votre ancien téléphone
* Transférez les paramètres de l'ancien au nouveau téléphone
* **Appairer manuellement** DanaRS avec le nouveau téléphone
    
    * Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. Par conséquent, le nouveau téléphone et la pompe doivent être appairés manuellement.
* Installez AndroidAPS sur le nouveau téléphone.
* [Importer les paramètres](../Usage/ExportImportSettings#importer-les-parametres) sur votre nouveau téléphone

## Voyager avec différents fuseaux horaires avec la pompe DanaR

Pour plus d'informations sur les voyages dans différents fuseaux horaires, voir la section [Voyager avec différents fuseaux horaires avec une pompe](../Usage/Timezone-traveling#danarv2-danars).