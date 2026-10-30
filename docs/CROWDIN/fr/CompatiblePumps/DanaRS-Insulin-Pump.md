# DanaRS, Dana-i and Dana-i2

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards, a Dana-i or a Dana-i2. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump.md) if you have the original DanaR instead.*

**Dana-i2 can be used from AAPS version 4.0 onwards.** It uses the same **Dana-i/RS** driver as the Dana-i.

* In DanaRS/i/i2 pump "BASAL A" is used by the app. Existing data gets overwritten.

    {contents} Table of contents
    :depth: 1
    :local: true

## Pump capabilities with AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually (see [Timezone traveling](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Appairage de la pompe

* Open the **menu** (☰) in the top-left corner of the **AAPS** main screen and select **Configuration**.
* Tap **Pump** and select **Dana-i/RS**.
    
    ![Configuration > Pump with the Dana-i/RS plugin](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Once it is selected, the **Dana-i/RS** card shows two buttons, **Settings** and **Open plugin**:
    
    ![The Dana-i/RS plugin selected in Configuration > Pump](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Settings** opens the settings of the Dana-i/RS driver:
    
    ![Dana-i/RS driver settings](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Open plugin** (or **Manage** > **Pump**) opens the Dana-i/RS pump screen. Before a pump is paired it looks like this:
    
    ![Dana-i/RS pump screen before pairing](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* On the pump screen, tap **Pairing**. **AAPS** scans for nearby pumps.

* Tap the entry for your pump in the list.
    
    ![The Pairing screen listing a Dana pump found by the scan](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** This works the same way as other Bluetooth pairings you may know (for example, smartphone and car audio).
    
    ![Confirmation d'appairage Dana RS](../images/DanaRS_Pairing.png)

* Suivez le processus d'appairage basé sur le type et le firmware de votre pompe :
    
    * For DanaRS v1, **AAPS** asks for the **Pump password (v1 only)**. Enter your pump password (see [Default password](#DanaRS-Insulin-Pump-default-password)).
    * For DanaRS v3, **AAPS** asks you to press OK on the pump and type the 2 sequences of numbers and letters shown on the pump. Keep the pump display on by pressing the minus button until you have finished. Then tap **Done**.
    * For Dana-i and Dana-i2, the standard Android pairing dialog appears. Enter the 6-digit number shown on the pump.

* When **Pairing successful!** is shown, tap **Done**.
    
    ![Pairing successful!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    You are back on the pump screen, which now shows your pump's status.
    
    ![Dana-i/RS pump screen after pairing](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* In **Settings**, select **Bolus speed** to change the default bolus speed (12 s/U, 30 s/U or 60 s/U).

* Régler l'incrément Basale sur pompe à 0,01 U/h en utilisant le menu Médecin (voir le guide de l’utilisateur de la pompe).
* Set bolus step on pump to 0.05 U using Doctors menu (see pump user guide). **AAPS** reads the basal and bolus steps from the pump and uses them for every bolus, so a bolus always matches the step set on the pump. The pump screen shows them in the **Basal/Bolus step** row.
* Activez les Bolus Étendus sur la pompe

### Options shown only for some models

* **Auto lock**: on a Dana-i2, the **User options** screen (on the pump screen, **Manage** > **Pump**) has an **Auto lock** switch for the pump's auto lock setting. Press **Save options to pump** after changing it.
* **Easy mode**: on pump models that have an easy menu mode, the pump screen shows an **Easy mode** row with **On** or **Off**.
* If a Dana-i2 refuses a bolus, **AAPS** shows the reason, for example *Pump is not primed*, *Not enough insulin in the reservoir* or *Easy sleep mode is on in the pump*.

(DanaRS-Insulin-Pump-default-password)=

### Mot de passe par défaut

* Pour les DanaRS avec le firmware v1 et v2, le mot de passe par défaut est 1234.
* Pour DanaRS avec firmware v3 ou Dana-i, le mot de passe par défaut est dérivé de la date de fabrication et calculé en tant que MMDD où MM est le mois et DD est le jour de production de la pompe (par exemple '0124' représentant le mois 01 et le jour 24).
    
    * À partir du MENU PRINCIPAL, sélectionnez REVISION puis ouvrez INFORMATIONS D'EXPÉDITION dans le sous-menu
    * Le numéro 3 est la date de fabrication. 
    * Pour v3/i, ce mot de passe est utilisé uniquement pour verrouiller le menu sur la pompe. Il n'est pas utilisé pour la communication et il n'est pas nécessaire de le saisir dans AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Changer de mot de passe sur la pompe

* Appuyez sur le bouton OK de la pompe
* Dans le menu principal, sélectionnez "OPTION" (déplacer à droite en appuyant sur le bouton flèche plusieurs fois)
    
    ![Menu principal DanaRS](../images/DanaRSPW_01_MainMenu.png)

* Dans le menu Options, sélectionnez "OPTION UTILISATEUR"
    
    ![Menu Option DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Utilisez le bouton flèche pour faire défiler vers le bas jusqu'à " 11. Mot de passe "
    
    ![DanaRS 11. Mot de passe](../images/DanaRSPW_03_11PW.png)

* Appuyez sur OK pour saisir l'ancien mot de passe.

* Enter **old password** (Default password see [above](#DanaRS-Insulin-Pump-default-password)) and press OK
    
    ![DanaRS Entrez l'ancien mot de passe](../images/DanaRSPW_04_11PWenter.png)

* Si un mauvais mot de passe est entré ici, il n'y aura pas de message indiquant l'échec !

* Définissez un **nouveau mot de passe** (Modifiez les numéros avec les boutons + & - / Déplacez vers la droite avec le bouton flèche).
    
    ![DanaRS Nouveau mot de passe](../images/DanaRSPW_05_PWnew.png)

* Confirmez avec le bouton OK.

* Appuyez sur OK pour enregistrer les paramètres.
    
    ![DanaRS Sauvegarder le nouveau mot de passe](../images/DanaRSPW_06_PWnewSave.png)

* Déplacer vers le bas jusqu'à "14. QUITTEZ" et appuyez sur le bouton OK pour fermer.
    
    ![DanaRS Quitter](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Erreurs spécifiques à DanaRS

### Erreur lors de la distribution de l'insuline

Dans le cas où la connexion entre AAPS et DanaRS est perdue pendant un bolus d'insuline (par ex. vous vous éloignez de votre téléphone alors que la DanaRS est en train de délivrer de l'insuline), vous verrez le message suivant et vous entendrez une alarme sonore.

![Alarme d'administration de l'insuline](../images/DanaRS_Error_bolus.png)

* Dans la plupart des cas c'est juste un problème de communication et la quantité d'insuline délivrée est correcte.
* Check in the pump history that the correct bolus was given. You can do this on the pump itself, or in **AAPS** on the pump screen (**Manage** > **Pump**) > **Pump history** > **Boluses**.
* Delete the error entry in [treatments](#screens-bolus-carbs) if you wish.
* The real amount is read and recorded at the next connection. To force this, tap **Refresh** on the pump screen, or just wait for the next connection.

## Remarque spéciale lors du changement de téléphone

Lors du passage à un nouveau téléphone, les étapes suivantes sont nécessaires :

* [Export settings](../Maintenance/ExportImportSettings.md) on your old phone
* Transférez les paramètres de l'ancien vers le nouveau téléphone

### DanaRS v1

* **Appairer manuellement** DanaRS avec le nouveau téléphone
* If you tick **Also replace pump settings** when importing, the pump connection settings are imported too and AAPS on your new phone will already "know" the pump and therefore not start a Bluetooth scan. Par conséquent, le nouveau téléphone et la pompe doivent être appairés manuellement.
* Installez AAPS sur le nouveau téléphone.
* [Import settings](../Maintenance/ExportImportSettings.md) on your new phone

### DanaRS v3, Dana-i, Dana-i2

* Start pairing procedure as described [above](#DanaRS-Insulin-Pump-pairing-pump).
* Sometimes you may need to clear the pairing information in **AAPS** first. On the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**. Then tap **Pairing** again.

## Timezone traveling with DanaRS, Dana-i and Dana-i2 pumps

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).

## Where to get help

Development of the DanaRS/Dana-i/Dana-i2 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).