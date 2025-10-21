# Pompe Accu-Chek Insight

**Ce logiciel fait partie d'une solution de pancréas artificiel DIY (Faire soi même) et n'est pas un produit, mais exige que VOUS oblige à lire, apprendre et comprendre le système, y compris comment l'utiliser. Ce n'est pas quelque chose qui gère tout votre gestion du diabète à votre place, mais il vous permet d'améliorer votre diabète et votre qualité de vie, si vous êtes prêt à y mettre le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

* * *

## ***AVERTISSEMENT :** Si vous avez utilisé l'Insight avec **SightRemote** par le passé, veuillez **mettre à jour vers la version de AAPS la plus récente** et **désinstaller SightRemote**.*

## Configuration matérielle et logicielle requise

* Une pompe Roche Accu-Chek Insight (n'importe quel firmware, ils marchent tous)

Remarque : AAPS écrira toujours les données dans le **premier profil débit de base de la pompe**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Getting-Started/ComponentOverview) page which Android version is required to run AAPS.)
* The AAPS app installed on your phone

## Paramètres

* La pompe Insight ne doit être connectée qu'à un seul appareil à la fois. Si vous avez précédemment utilisé la télécommande Insight (lecteur), vous devez supprimer le lecteur de la liste des appareils appairés de votre pompe : Menu > Réglages > Communication > Retirer un dispositif
    
    ![Copie d'écran de suppression du lecteur Insight](../images/Insight_RemoveMeter.png)

* In [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md), select Accu-Chek Insight.
    
    ![Copie d'écran de Génération de configuration Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Appuyez sur la roue crantée pour ouvrir les paramètres Insight.

* Dans paramètres, appuyez sur le bouton "Appairage de Insight", en haut de l'écran. Vous devriez voir la liste de tous les appareils bluetooth à proximité (en bas à gauche).
* Dans la pompe Insight, sélectionnez Menu > Réglages > Communication > Ajouter un dispositif. La pompe affichera l'écran suivant (en bas à droite) indiquant le numéro de série de la pompe.
    
    ![Copie d'écran appairage Insight 1](../images/Insight_Pairing1.png)

* Revenez à votre téléphone, appuyez sur le numéro de série de la pompe dans la liste des appareils bluetooth. Ensuite, appuyez sur Pair pour confirmer.
    
    ![Copie d'écran appairage Insight 2](../images/Insight_Pairing2.png)

* La pompe et le téléphone afficheront ensuite un code. Vérifiez que les codes sont les mêmes sur les deux appareils et confirmez sur la pompe et sur le téléphone.
    
    ![Copie d'écran appairage Insight 3](../images/Insight_Pairing3.png)

* Succès ! Pat yourself on the back for successfully pairing your pump with AAPS.
    
    ![Copie d'écran appairage Insight 4](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Copie d'écran informations appairage Insight](../images/Insight_PairingInformation.png)

Remarque : Il n'y aura pas de connexion permanente entre la pompe et le téléphone. Une connexion ne sera établie que si c'est nécessaire (par ex. pour fixer un débit de basal temporaire, un bolus, ou lire l'historique de la pompe...). Sinon, la batterie du téléphone et de la pompe se videraient beaucoup trop rapidement.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Paramètres dans AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](#Preferences-advanced-settings-nsclient)).

![Copie d'écran paramètres Insight](../images/Insight_settings.png)

In the Insight settings in AAPS you can enable the following options:

* "Enreg. changement de réservoir": ajoute automatiquement le changement de réservoire quand vous effectuez "Remplir tubulure" sur la pompe.

* "Log tube changes": This adds a note to the AAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AAPS database when you run the "cannula filling" program on the pump. **Remarque : un changement de site réinitialise également Autosens.**

* "Enreg. changements de batterie" : Ceci enregistre un changement de pile quand vous en mettez une nouvelle dans la pompe.

* "Log operating mode changes": This inserts a note in the AAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* "Activer l'émulation de DBT": La pompe Insight ne faire des débits de base temporaires (DBT) que jusqu'à 250%. Pour contourner cette restriction, l'émulation DBT demandera à la pompe de fournir un bolus étendu pour l'insuline supplémentaire si vous demandez un DBT supérieur à 250%.
    
    **Remarque : n'utilisez qu'un seul bolus étendu à la fois car plusieurs bolus étendus en même temps peuvent provoquer des erreurs.**

* "Désactiver les vibrations des bolus manuels": cela désactive les vibrations de la pompe Insight quand un bolus manuel (ou un bolus étendu) est délivré. Ce paramètre est disponible uniquement avec la dernière version du firmware Insight (3.x).

* "Désactiver les vibrations des bolus automatiques": cela désactive les vibrations de la pompe Insight quand un bolus automatique (SMB ou basal temp avec émulation DBT) est délivré. Ce paramètre est disponible uniquement avec la dernière version du firmware Insight (3.x).

* "Recovery duration": This defines how long AAPS will wait before trying again after a failed connection attempt. Vous pouvez choisir entre 0 et 20 secondes. Si vous rencontrez des problèmes de connexion, choisissez un temps d'attente plus long.   
      
    Exemple pour durée min. de récupération = 5 et durée max. de récupération = 20   
      
    aucune connexion -> attendre **5** sec.   
    réessayer -> aucune connexion -> attendre **6** sec.   
    réessayer -> aucune connexion -> attendre **7** sec.   
    réessayer -> aucune connexion -> attendre **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AAPS will wait to disconnect from the pump after an operation is finished. La valeur par défaut est de 5 secondes.

Pendant les périodes où la pompe est débranchée, AAPS va enregistrer un débit de basal temporaire avec 0%.

In AAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* Actualiser : Actualise l'état de la pompe
* "Activer/Désactiver la notification de la fin DBT" : Une pompe Insight émet par défaut une alarme lorsqu'un DBT est terminé. Ce bouton vous permet d'activer ou de désactiver cette alarme sans avoir besoin du logiciel de configuration.
    
    ![Copie d'écran statuts Insight](../images/Insight_Status2.png)

## Paramètres de la pompe

Configurez les alarmes dans la pompe comme suit :

* Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Signal > Sonore
* Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Volume > 0 (suppimez toutes les barres)
* Menu > Modes > Type de signal > Silencieux

This will silence all alarms from the pump, allowing AAPS to decide if an alarm is relevant to you. If AAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibration

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x : Aucune vibration par conception.
* Firmware 2.x : Les vibrations ne peuvent pas être désactivées.
* Firmware 3.x: AAPS delivers bolus silently. (minimum [version 2.6.1.4](#Releasenotes-version-2-6-1-4))

La version du firmware se trouve dans le menu Appairage de Insight / Version du logiciel.

## Remplacement de pile

La durée de vie de la pile de l'Insight, lorsque vous bouclez, est comprise entre 10 et 14 jours, et au maximum 20 jours. L'utilisateur qui a déclaré cela utilise des piles Energizer ultimate lithium.

La pompe Insight dispose d'une petite batterie interne pour garder les fonctions essentielles comme l'horloge en cours d'exécution pendant que vous changez la pile. Si le changement de la pile prend trop de temps, cette batterie interne peut manquer d'énergie, l'heure sera remise à zéro, et il vous sera demandé d'entrer à nouveau la date et l'heure après avoir mis la nouvelle pile. If this happens, all entries in AAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Erreurs spécifiques à Insight

### Bolus étendu

Il ne faut utiliser qu'un seul bolus étendu à la fois car plusieurs bolus étendus en même temps peuvent provoquer des erreurs.

### Délai expiré

Il arrive parfois que la pompe Insight ne réponde pas pendant la configuration de la connexion. Dans ce cas, AAPS affichera le message suivant : "Expiration pendant l'appairage - réinitialiser le Bluetooth".

![Réinitialisation Bluetooth Insight](../images/Insight_ResetBT.png)

Dans ce cas, désactivez le bluetooth sur la pompe ET sur le smartphone pendant environ 10 secondes, puis rallumez-le.

## Voyager avec différents fuseaux horaires avec une pompe Insight

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-insight).