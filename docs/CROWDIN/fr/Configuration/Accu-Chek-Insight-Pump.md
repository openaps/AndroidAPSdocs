# Pompe Accu-Chek Insight

**Ce logiciel fait partie d'une solution de pancréas artificiel DIY (Faire soi même) et n'est pas un produit, mais exige que VOUS oblige à lire, apprendre et comprendre le système, y compris comment l'utiliser. Ce n'est pas quelque chose qui gère tout votre gestion du diabète à votre place, mais il vous permet d'améliorer votre diabète et votre qualité de vie, si vous êtes prêt à y mettre le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

* * *

## ***AVERTISSEMENT :** Si vous avez utilisé l'Insight avec **SightRemote** par le passé, veuillez **mettre à jour vers la version de AAPS la plus récente** et **désinstaller SightRemote**.*

## Configuration matérielle et logicielle requise

* Une pompe Roche Accu-Chek Insight (n'importe quel firmware, ils marchent tous)

Remarque : AAPS écrira toujours les données dans le **premier profil débit de base de la pompe**.

* Un téléphone Android (en pratique n'importe quelle version d'Android devrait marcher avec l'Insight, mais vérifiez sur la page [Composants](../Module/module.html#telephone) quelle version d'Android est nécessaire pour exécuter AndroidAPS.)
* L'application AndroidAPS installée sur votre téléphone

## Paramètres

* La pompe Insight ne doit être connectée qu'à un seul appareil à la fois. Si vous avez précédemment utilisé la télécommande Insight (lecteur), vous devez supprimer le lecteur de la liste des appareils appairés de votre pompe : Menu > Réglages > Communication > Retirer un dispositif
    
    ![Copie d'écran de suppression du lecteur Insight](../images/Insight_RemoveMeter.png)

* Dans le [Générateur de configuration](../Configuration/Config-Builder) de l'application AndroidAPS, sélectionnez Accu-Chek Insight dans la section de la pompe.
    
    ![Copie d'écran de Génération de configuration Insight](../images/Insight_ConfigBuilder.png)

* Appuyez sur la roue crantée pour ouvrir les paramètres Insight.

* Dans paramètres, appuyez sur le bouton "Appairage de Insight", en haut de l'écran. Vous devriez voir la liste de tous les appareils bluetooth à proximité (en bas à gauche).
* Dans la pompe Insight, sélectionnez Menu > Réglages > Communication > Ajouter un dispositif. La pompe affichera l'écran suivant (en bas à droite) indiquant le numéro de série de la pompe.
    
    ![Copie d'écran appairage Insight 1](../images/Insight_Pairing1.png)

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

**Note : il est maintenant possible (uniquement avec AAPS v2.7.0 et ultérieures) d'utiliser « Utiliser toulours les valeurs absolues du basal » si vous voulez utiliser Autotune avec la pompe Insight, même si la 'syncro est activée' avec Nightscout.** (Dans AAPS, allez dans Préférences > NSClient > Paramètres avancés).

![Screenshot of Insight Settings](../images/Insight_settings.png)

Dans les paramètres Insight d'AndroidAPS, vous pouvez activer les options suivantes :

* "Enreg. changement de réservoir": ajoute automatiquement le changement de réservoire quand vous effectuez "Remplir tubulure" sur la pompe.

* "Enreg. changement de tubulure": ajoute une note dans la base de données AndroidAPS quand vous exécutez "Remplir tubulure" sur la pompe.

* "Enreg. changement de site": ajoute une note dans la base de données AndroidAPS lorsque vous exécutez "Remplir canule" sur la pompe. Remarque: Une modification de canule réinitialise également Autosens. **Remarque : un changement de site réinitialise également Autosens.**

* "Enreg. changements de batterie" : Ceci enregistre un changement de pile quand vous en mettez une nouvelle dans la pompe.

* "Enreg. changement mode de fonctionnement" : ajoute une note dans la base de données AndroidAPS quand vous démarrez, arrêtez ou mettez en pause la pompe.

* "Enreg. alertes" : ajoute une note dans la base de données AndroidAPS chaque fois que la pompe émet une alerte (sauf les rappels, annulations de bolus et annulations de DBT - ceux-ci ne sont pas enregistrés).

* "Activer l'émulation de DBT": La pompe Insight ne faire des débits de base temporaires (DBT) que jusqu'à 250%. Pour contourner cette restriction, l'émulation DBT demandera à la pompe de fournir un bolus étendu pour l'insuline supplémentaire si vous demandez un DBT supérieur à 250%.
    
    **Remarque : n'utilisez qu'un seul bolus étendu à la fois car plusieurs bolus étendus en même temps peuvent provoquer des erreurs.**

* "Désactiver les vibrations des bolus manuels": cela désactive les vibrations de la pompe Insight quand un bolus manuel (ou un bolus étendu) est délivré. Ce paramètre est disponible uniquement avec la dernière version du firmware Insight (3.x).

* "Désactiver les vibrations des bolus automatiques": cela désactive les vibrations de la pompe Insight quand un bolus automatique (SMB ou basal temp avec émulation DBT) est délivré. Ce paramètre est disponible uniquement avec la dernière version du firmware Insight (3.x).

* "Durée min./max. de récupération [s]": définit les durées d'attente d'AndroidAPS avant d'essayer à nouveau après une tentative de connexion échouée. Vous pouvez choisir entre 0 et 20 secondes. Si vous rencontrez des problèmes de connexion, choisissez un temps d'attente plus long.   
      
    Exemple pour durée min. de récupération = 5 et durée max. de récupération = 20   
      
    aucune connexion -> attendre **5** sec.   
    réessayer -> aucune connexion -> attendre **6** sec.   
    réessayer -> aucune connexion -> attendre **7** sec.   
    réessayer -> aucune connexion -> attendre **8** sec.   
    ...   
    réessayer -> aucune connexion -> attendre **20** sec.   
    réessayer -> aucune connexion -> attendre **20** sec.   
    ...

* "Délai de déconnexion": indique combien de temps (en secondes) AndroidAPS attendra avant de se déconnecter de la pompe une fois l'opération terminée. La valeur par défaut est de 5 secondes.

Pendant les périodes où la pompe est débranchée, AAPS va enregistrer un débit de basal temporaire avec 0%.

Dans AndroidAPS, l'onglet Accu-Chek Insight affiche le statut actuel de la pompe et comporte deux boutons :

* Actualiser : Actualise l'état de la pompe
* "Activer/Désactiver la notification de la fin DBT" : Une pompe Insight émet par défaut une alarme lorsqu'un DBT est terminé. Ce bouton vous permet d'activer ou de désactiver cette alarme sans avoir besoin du logiciel de configuration.
    
    ![Copie d'écran statuts Insight](../images/Insight_Status2.png)

## Paramètres de la pompe

Configure alarms in the pump as follows:

* Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Signal > Sonore
* Menu > Réglages > Réglages pompe > Réglages Mode > Silencieux > Volume > 0 (suppimez toutes les barres)
* Menu > Modes > Type de signal > Silencieux

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

### Vibration

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x : Aucune vibration par conception.
* Firmware 2.x : Les vibrations ne peuvent pas être désactivées.
* Firmware 3.x : Il n'y a pas de vibration quand AndroidAPS injecte un bolus. (Au minimum avec la [version 2.6.1.4](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Firmware version can be found in the menu.

## Remplacement de pile

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Erreurs spécifiques à Insight

### Bolus étendu

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Délai expiré

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Voyager avec différents fuseaux horaires avec une pompe Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).