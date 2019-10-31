# Pompe Accu-Chek Insight

**Ce logiciel fait partie d'une solution de pancréas artificiel DIY (Faire soi même) et n'est pas un produit, mais exige que VOUS oblige à lire, apprendre et comprendre le système, y compris comment l'utiliser. Ce n'est pas quelque chose qui gère tout votre gestion du diabète à votre place, mais il vous permet d'améliorer votre diabète et votre qualité de vie, si vous êtes prêt à y mettre le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

* * *

## *** AVERTISSEMENT: ** Si vous avez utilisé l'Insight avec ** SightRemote ** par le passé, veuillez ** mettre à jour vers la version de AAPS la plus récente ** et ** désinstaller SightRemote **.*

## Configuration matérielle et logicielle requise

* A Roche Accu-Chek Insight pump (n'importe quel firmware, ils marchent tous)
<br>   Note: AAPS va toujours écrire des données dans le <b>premier profil de débits de base dans la pompe</b>* Un téléphone Android (en gros, toutes les versions d'Android pourrait fonctionner, mais AndroidAPS nécessite au moins Android 5 (Lollipop).)
* L'application AndroidAPS installée sur votre téléphone

## Paramètres

* La pompe Insight ne doit être connectée qu'à un seul appareil à la fois. Si vous avez précédemment utilisé la télécommande Insight (lecteur), vous devez supprimer le lecteur de la liste des appareils appairés de votre pompe : Menu > Réglages > Communication > Retirer un dispositif
    
    ![Copie d'écran de suppression du lecteur Insight](../images/Insight_RemoveMeter.png)

* Dans le [Générateur de configuration](../Configuration/Config-Builder) de l'application AndroidAPS, sélectionnez Accu-Chek Insight dans la section de la pompe.
    
    ![Copie d'écran de Génération de configuration Insight](../images/Insight_ConfigBuilder.png)

* Appuyez sur la roue crantée pour ouvrir les paramètres Insight.

* Dans paramètres, appuyez sur le bouton "Appairage de Insight", en haut de l'écran. Vous devriez voir la liste de tous les appareils bluetooth à proximité (en bas à gauche).
* Dans la pompe Insight, sélectionnez Menu > Réglages > Communication > Ajouter un dispositif. La pompe affichera l'écran suivant (en bas à droite) indiquant le numéro de série de la pompe.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Revenez à votre téléphone, appuyez sur le numéro de série de la pompe dans la liste des appareils bluetooth. Ensuite, appuyez sur Pair pour confirmer.
    
    ![Copie d'écran appairage Insight 2](../images/Insight_Pairing2.png)

* La pompe et le téléphone afficheront ensuite un code. Vérifiez que les codes sont les mêmes sur les deux appareils et confirmez sur la pompe et sur le téléphone.
    
    ![Copie d'écran appairage Insight 3](../images/Insight_Pairing3.png)

* Succès ! Tapez vous dans le dos pour avoir réussi à appairer votre pompe avec AndroidAPS
    
    ![Copie d'écran appairage Insight 4](../images/Insight_Pairing4.png)

* Pour vérifier que tout va bien, revenez au Générateur de configuration dans AndroidAPS et appuyez sur la roue crantée à coté de Accu-Chek Insight pour voir les paramètres, puis appuyez sur Appairage de Insight et vous verrez quelques informations concernant la pompe :
    
    ![Copie d'écran informations appairage Insight](../images/Insight_PairingInformation.png)

Remarque : Il n'y aura pas de connexion permanente entre la pompe et le téléphone. Une connexion ne sera établie que si c'est nécessaire (par ex. pour fixer un débit de basal temporaire, un bolus, ou lire l'historique de la pompe...). Sinon, la batterie du téléphone et de la pompe se videraient beaucoup trop rapidement.

## Paramètres dans AAPS

![Copie d'écran paramètres Insight](../images/Insight_pairing_V2_5.png)

Dans les paramètres Insight d'AndroidAPS, vous pouvez activer les options suivantes :

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.  
    <font color="red">Note: A cannula change also resets Autosens</b></font>
* "Enreg. changement de tubulure": ajoute une note dans la base de données AndroidAPS quand vous exécutez "Remplir tubulure" sur la pompe.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump.
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

Pendant les périodes où la pompe est débranchée, AAPS va enregistrer un débit de basal temporaire avec 0%.

Dans AndroidAPS, l'onglet Accu-Chek Insight affiche le statut actuel de la pompe et comporte deux boutons :

* Actualiser : Actualise l'état de la pompe
* "Activer/Désactiver la notification de la fin DBT" : Une pompe Insight émet par défaut une alarme lorsqu'un DBT est terminé. Ce bouton vous permet d'activer ou de désactiver cette alarme sans avoir besoin du logiciel de configuration.
    
    ![Copie d'écran statuts Insight](../images/Insight_Status2.png)

## Paramètres de la pompe

Configurez les alarmes dans la pompe comme suit :

* Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Signal > Sonore puis Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Volume > 0 (supprimer toutes les barres)
* Menu > Modes > Type de signal > Silencieux

Ceci supprimera toutes les alarmes de la pompe, permettant à AndroidAPS de décider si une alarme est pertinente pour vous. Si AndroidAPS ne reconnaît pas une alarme, son volume augmentera (d'abord bip, puis vibration).

Les pompes Insight avec un firmware plus récent vibreront brièvement chaque fois qu'un bolus est livré (par exemple, lorsque AndroidAPS émet un SMB ou une émulation DBT avec un bolus étendu). La vibration ne peut pas être désactivée. Les pompes plus anciennes ne vibrent pas dans ces circonstances.

## Remplacement de pile

La pompe Insight dispose d'une petite batterie interne pour garder les fonctions essentielles comme l'horloge en cours d'exécution pendant que vous changez la pile. Si le changement de la pile prend trop de temps, cette batterie interne peut manquer d'énergie, l'heure sera remise à zéro, et il vous sera demandé d'entrer un nouveau la date et l'heure après avoir mis la nouvelle pile. Si cela se produit, toutes les entrées mémorisées dans AndroidAPS avant le changement de pile ne seront plus intégrées dans les calculs car le temps réel ne peut pas être identifié correctement.

## Erreurs spécifiques à Insight

### Bolus étendu

Il ne faut utiliser qu'un seul bolus étendu à la fois car plusieurs bolus étendus en même temps peuvent provoquer des erreurs.

### Délai expiré

Il arrive parfois que la pompe Insight ne réponde pas pendant la configuration de la connexion. Dans ce cas, AAPS affichera le message suivant : "Expiration pendant l'appairage - réinitialiser le Bluetooth".

![Réinitialisation Bluetooth Insight](../images/Insight_ResetBT.png)

Dans ce cas, désactivez le bluetooth sur la pompe ET sur le smartphone pendant environ 10 secondes, puis rallumez-le.

## Voyager avec différents fuseaux horaires avec une pompe Insight

Pour plus d'informations sur les voyages dans différents fuseaux horaires, voir la section [Voyager avec différents fuseaux horaires avec une pompe](../Usage/Timezone-traveling#insight).