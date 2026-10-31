# DanaRS, Dana-i et Dana-i2

*Ces instructions décrivent la configuration de l'application et de votre pompe si vous avez une DanaRS de 2017 ou plus récente, une Dana-i ou une Dana-i2. Consultez [DanaR](./DanaR-Insulin-Pump.md) si vous avez plutôt la DanaR d'origine.*

**La Dana-i2 peut être utilisée à partir de la version 4.0 d'AAPS.** Elle utilise le même pilote **Dana-i/RS** que la Dana-i.

* Dans les pompes DanaRS/i/i2, l'application utilise "BASAL A". Les données existantes sont écrasées.

    {contents} Table des matières
    :depth: 1
    :local: true

## Fonctionnalités de la pompe avec AAPS

* Communique avec **AAPS** par le Bluetooth intégré de votre téléphone, sans appareil de communication supplémentaire.
* Les changements d'heure d'été et de fuseau horaire doivent être faits à la main (voir [Voyager avec changement de fuseau horaire](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Appairage de la pompe

* Ouvrez le **menu** (☰) en haut à gauche de l'écran principal d'**AAPS** et choisissez **Configuration**.
* Touchez **Pompe** et choisissez **Dana-i/RS**.
    
    ![Configuration > Pompe avec le plugin Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Une fois le plugin choisi, la carte **Dana-i/RS** affiche deux boutons, **Paramètres** et **Ouvrir le plugin** :
    
    ![Le plugin Dana-i/RS choisi dans Configuration > Pompe](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Paramètres** ouvre les paramètres du pilote Dana-i/RS :
    
    ![Paramètres du pilote Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Ouvrir le plugin** (ou **Gestion** > **Pompe**) ouvre l'écran de la pompe Dana-i/RS. Avant l'appairage d'une pompe, il ressemble à ceci :
    
    ![Écran de la pompe Dana-i/RS avant l'appairage](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* Sur l'écran de la pompe, touchez **Appairage**. **AAPS** recherche les pompes à proximité.

* Touchez votre pompe dans la liste.
    
    ![L'écran Appairage avec une pompe Dana trouvée par la recherche](../images/DanaRS_i_Pairing.png)

* **Vous devez confirmer l'appairage sur la pompe !** Cela fonctionne comme les autres appairages Bluetooth que vous connaissez peut-être (par exemple entre un smartphone et l'autoradio d'une voiture).
    
    ![Confirmation d'appairage Dana RS](../images/DanaRS_Pairing.png)

* Suivez le processus d'appairage basé sur le type et le firmware de votre pompe :
    
    * Pour la DanaRS v1, **AAPS** demande le **Mot de passe pompe (v1 uniquement)**. Saisissez le mot de passe de votre pompe (voir [Mot de passe par défaut](#DanaRS-Insulin-Pump-default-password)).
    * Pour la DanaRS v3, **AAPS** vous demande d'appuyer sur OK sur la pompe et de saisir les 2 suites de chiffres et de lettres affichées sur la pompe. Gardez l'écran de la pompe allumé en appuyant sur le bouton moins jusqu'à la fin. Touchez ensuite **Terminé**.
    * Pour la Dana-i et la Dana-i2, la fenêtre d'appairage Android standard s'affiche. Saisissez le nombre à 6 chiffres affiché sur la pompe.

* Quand **Appairage réussi !** s'affiche, touchez **Terminé**.
    
    ![Appairage réussi !](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Vous revenez sur l'écran de la pompe, qui affiche maintenant l'état de votre pompe.
    
    ![Écran de la pompe Dana-i/RS après l'appairage](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* Dans **Paramètres**, choisissez **Vitesse du bolus** pour modifier la vitesse de bolus par défaut (12 s/U, 30 s/U ou 60 s/U).

* Réglez le pas basal de la pompe sur 0,01 U/h dans le menu Doctors (voir le manuel de la pompe).
* Réglez le pas de bolus de la pompe sur 0,05 U dans le menu Doctors (voir le manuel de la pompe). **AAPS** lit les pas basal et bolus dans la pompe et les utilise pour chaque bolus. Ainsi, un bolus correspond toujours au pas réglé sur la pompe. L'écran de la pompe les affiche dans la ligne **Pas basal/bolus**.
* Activer les bolus étendus dans la pompe

### Options affichées seulement pour certains modèles

* **Verrouillage automatique** : sur une Dana-i2, l'écran **Options utilisateur** (sur l'écran de la pompe, **Gestion** > **Pompe**) a un interrupteur **Verrouillage automatique** pour le réglage de verrouillage automatique de la pompe. Appuyez sur **Enregistrer les options sur la pompe** après l'avoir modifié.
* **Mode simple** : sur les modèles de pompe qui ont un mode menu simple, l'écran de la pompe affiche une ligne **Mode simple** avec **Activé** ou **Désactivé**.
* Si une Dana-i2 refuse un bolus, **AAPS** affiche la raison, par exemple *La pompe n'est pas amorcée*, *Pas assez d'insuline restante dans le réservoir* ou *Mode de sommeil facile est activé dans la pompe*.

(DanaRS-Insulin-Pump-default-password)=

### Mot de passe par défaut

* Pour les DanaRS avec le firmware v1 et v2, le mot de passe par défaut est 1234.
* Pour DanaRS avec firmware v3 ou Dana-i, le mot de passe par défaut est dérivé de la date de fabrication et calculé en tant que MMDD où MM est le mois et DD est le jour de production de la pompe (par exemple '0124' représentant le mois 01 et le jour 24).
    
    * Dans MAIN MENU, choisissez REVIEW puis ouvrez SHIPPING INFORMATION dans le sous-menu
    * Le numéro 3 est la date de fabrication. 
    * Pour v3/i, ce mot de passe est utilisé uniquement pour verrouiller le menu sur la pompe. Il n'est pas utilisé pour la communication et il n'est pas nécessaire de le saisir dans AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Changer de mot de passe sur la pompe

* Appuyez sur le bouton OK de la pompe
* Dans le menu principal, sélectionnez "OPTION" (déplacer à droite en appuyant sur le bouton flèche plusieurs fois)
    
    ![Menu principal DanaRS](../images/DanaRSPW_01_MainMenu.png)

* Dans le menu Options, choisissez "USER OPTION"
    
    ![Menu Option DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Utilisez le bouton flèche pour descendre jusqu'à "11. password"
    
    ![DanaRS 11. Mot de passe](../images/DanaRSPW_03_11PW.png)

* Appuyez sur OK pour saisir l'ancien mot de passe.

* Saisissez l'**ancien mot de passe** (pour le mot de passe par défaut, voir [plus haut](#DanaRS-Insulin-Pump-default-password)) et appuyez sur OK
    
    ![DanaRS Entrez l'ancien mot de passe](../images/DanaRSPW_04_11PWenter.png)

* Si un mauvais mot de passe est entré ici, il n'y aura pas de message indiquant l'échec !

* Définissez un **nouveau mot de passe** (Modifiez les numéros avec les boutons + & - / Déplacez vers la droite avec le bouton flèche).
    
    ![DanaRS Nouveau mot de passe](../images/DanaRSPW_05_PWnew.png)

* Confirmez avec le bouton OK.

* Appuyez sur OK pour enregistrer les paramètres.
    
    ![DanaRS Sauvegarder le nouveau mot de passe](../images/DanaRSPW_06_PWnewSave.png)

* Déplacer vers le bas jusqu'à "14. EXIT" et appuyez sur OK pour quitter.
    
    ![DanaRS Quitter](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Erreurs spécifiques à DanaRS

### Erreur lors de la distribution de l'insuline

Dans le cas où la connexion entre AAPS et DanaRS est perdue pendant un bolus d'insuline (par ex. vous vous éloignez de votre téléphone alors que la DanaRS est en train de délivrer de l'insuline), vous verrez le message suivant et vous entendrez une alarme sonore.

![Alarme d'administration de l'insuline](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Vérifiez dans l'historique de la pompe que le bon bolus a été injecté. Vous pouvez le faire sur la pompe elle-même, ou dans **AAPS** sur l'écran de la pompe (**Gestion** > **Pompe**) > **Historique pompe** > **Bolus**.
* Si vous le souhaitez, supprimez l'entrée en erreur dans les [traitements](#screens-bolus-carbs).
* La quantité réelle est lue et enregistrée à la connexion suivante. Pour la forcer, touchez **Actualiser** sur l'écran de la pompe, ou attendez simplement la connexion suivante.

## Remarque spéciale lors du changement de téléphone

Lors du passage à un nouveau téléphone, les étapes suivantes sont nécessaires :

* [Exportez les paramètres](../Maintenance/ExportImportSettings.md) sur votre ancien téléphone
* Transférez les paramètres de l'ancien vers le nouveau téléphone

### DanaRS v1

* **Appairer manuellement** DanaRS avec le nouveau téléphone
* Si vous cochez **Remplacer aussi les paramètres de pompe** lors de l'importation, les paramètres de connexion de la pompe sont aussi importés. AAPS sur votre nouveau téléphone « connaît » alors déjà la pompe et ne lance pas de recherche Bluetooth. Par conséquent, le nouveau téléphone et la pompe doivent être appairés manuellement.
* Installez AAPS sur le nouveau téléphone.
* [Importez les paramètres](../Maintenance/ExportImportSettings.md) sur votre nouveau téléphone

### DanaRS v3, Dana-i, Dana-i2

* Lancez l'appairage comme décrit [plus haut](#DanaRS-Insulin-Pump-pairing-pump).
* Parfois, vous devez d'abord effacer les informations d'appairage dans **AAPS**. Sur l'écran de la pompe (**Gestion** > **Pompe**), touchez **Dissocier** et confirmez **Réinitialiser les informations d'appairage ?**. Touchez ensuite à nouveau **Appairage**.

## Voyager avec changement de fuseau horaire avec les pompes DanaRS, Dana-i et Dana-i2

Pour les voyages avec changement de fuseau horaire, voir la section [Voyager avec changement de fuseau horaire avec les pompes](#timezone-traveling-danarv2-danars).

## Où obtenir de l'aide

Le pilote DanaRS/Dana-i/Dana-i2 est développé par la communauté, de manière **bénévole**. Avant de demander de l'aide, merci de :

1. **Lire** la section de cette documentation qui concerne votre problème, pour vérifier comment la fonction doit marcher.
2. **Demander** sur le canal *#AAPS* sur [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md).
3. **Signaler un bug** en cherchant dans les [tickets existants](https://github.com/nightscout/AndroidAPS/issues) ; si le vôtre n'y est pas, ouvrez un [nouveau ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez vos [fichiers log](../GettingHelp/AccessingLogFiles.md).

Pour demander de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, la version d'**AAPS** et une description simple du problème (ce qui a changé, quand cela a fonctionné pour la dernière fois).