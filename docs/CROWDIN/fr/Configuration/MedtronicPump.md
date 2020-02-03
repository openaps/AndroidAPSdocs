# Pompes Medtronic

**>>>> Le pilote de la pompe Medtronic est supporté à partir de la version 2.5 (master) d'AndroidAPS. Bien que ce soit le cas, le pilote Medtronic doit toujours être considéré comme une version bêta. Veuillez ne l'installer que si vous êtes un utilisateur expérimenté. Pour le moment, nous nous battons encore avec le problème du double bolus (nous recevons 2 bolus dans les traitements, ce qui lance le calcul de l'IA (si vous rencontrez ce bug, veuillez activer Double Bolus Logging dans le paramétrage du Medtronic et fournir vos logs)), ceci devrait être corrigé avec la prochaine version. <<<<**

* * *

Le pilote ne fonctionne qu'avec les anciennes pompes Medtronic (voir les détails ci-dessous). Ne fonctionne pas avec Medtronic 640G ou 670G.

* * *

Si vous avez commencé à utiliser le pilote Medtronic, merci de vous ajouter à cette [liste](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). C'est juste pour que nous puissions voir quels téléphones sont marchent bien et ceux qui sont moins bons (ou mauvais) pour ce pilote. Il y a une colonne appelée "BT restart". Il s'agit de vérifier si votre téléphone prend en charge l'activation/désactivation du BT, qui peut être utilisé lorsque la pompe n'est plus en mesure de se connecter, cela se produit de temps à autre. Si vous remarquez tout autre problème, veuillez le saisir dans la colonne "Comments".

* * *

## Configuration matérielle et logicielle requise

- **Téléphone :** le pilote Medtronic fonctionne avec n'importe quel téléphone qui supporte le BLE. **IMPORTANT : bien que le pilote fonctionne correctement sur tous les téléphones, ce n'est pas le cas pour l'activation/désactivation du Bluetooth (c'est obligatoire si vous perdez la connexion au RileyLink et le système ne peut pas se récupérer automatiquement ce qui arrive de temps en temps). Vous devez donc obtenir un appareil avec Android 6.0 - 8.1, dans le pire des cas, vous pouvez installer LineageOS 15.1 (requis 15.1 ou inférieur) sur votre téléphone. Nous sommes sur le problème avec Android 9, mais jusqu'à présent, nous n'avons pas trouvé de résolution (cela semble fonctionner sur certains modèles et pas sur d'autres, et parfois seulement de temps en temps).**
- **RileyLink/Gnarl :** Pour la communication avec la Pompe dont vous avez besoin dispositif qui convertit les commandes BT du Téléphone en commandes RF que la Pompe comprend. L'appareil qui fait cela s'appelle un RileyLink (vous pouvez l'obtenir ici [getrileylink.org](https://getrileylink.org/)). Vous avez besoin de la version stable de l'appareil, pour les plus anciens modèles c'est avec le firmware 0.9 (les versions plus anciennes peuvent ne pas fonctionner correctement) ou pour les modèles plus récents avec le firmware 2.2 (il y a des options de mise à jour disponible sur site RL). Si vous avez l'âme d'un aventurier, vous pouvez également essayer GNARL ([ici](https://github.com/ecc1/gnarl)), qui est une sorte de clone du RileyLink. 
- **Pompe :** Le pilote fonctionne uniquement avec les modèles et versions de firmware suivants : 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ou inférieur)
    - 554/754 version EU (firmware 2.6A ou inférieur)
    - 554/754 version canadienne (firmware 2.7A ou inférieure)

## Configuration de la pompe

- **Enable remote mode on Pump** (Utilities -> Remote Options, Select Yes, and on next screen do Add ID and add dummy id (111111 or something). Vous devez avoir au moins un ID dans cette liste d'identifiants distants. Ces options peuvent varier selon les différents modèles de pompe. Cette étape est importante, car une fois définie, la pompe écoutera plus souvent la communication à distance.
- **Définir Basale Max** sur votre Pompe à votre "niveau de basale max entré dans votre profil STD" * 4 (si vous voulez avoir 400% DBT comme max). Ce nombre doit être inférieur à 35 (comme vous pouvez le voir dans la pompe).
- **Définir Bolus Max** sur votre pompe (25 max)
- **Définir profil sur STD**. Ce sera le seul profil que nous allons utiliser. Vous pouvez également désactiver.
- **Définir type DBT** sur Absolu (pas pourcentage)

## Configuration du téléphone / AndroidAPS

- **Ne pas associer RileyLink à votre téléphone.** Si vous avez appairé votre RileyLink, AndroidAPS ne pourra pas le trouver dans la configuration.
- Désactiver la rotation automatique sur votre téléphone (sur certains appareils, la rotation automatique redémarre le BT, ce que nous ne voulons pas).
- Vous pouvez configurer la pompe avec AndroidAPS de deux façons : 

1. Utilisation de l'assistant (sur une nouvelle installation)
2. Directement dans l'onglet de configuration (roue crantée sur le pilote Medtronic)

Si vous faites une nouvelle installation, vous serez directement dans l'assistant. Parfois, si votre connexion BT ne fonctionne pas parfaitement (impossible de se connecter à la pompe), vous ne pourrez pas terminer la configuration. Dans ce cas, sélectionnez la pompe virtuelle et une fois l'assistant terminé, vous pouvez utiliser l'option 2, qui permet de contourner la détection de la pompe.

![Paramètres MDT](../images/Medtronic01.png)

Vous devez définir les éléments suivants : (voir photo ci-dessus)

- **Numéro de série de la pompe** : Vous pouvez trouver cela sur le côté arrière, entrée SN. Vous ne devez prendre que les chiffres, votre numéro de série est composé de 6 chiffres.
- **Type de pompe** : quel type de pompe vous avez (i.e. 522). 
- **Fréquence de la pompe** : Il y a deux versions de la pompe Medtronic utilisant des fréquences différentes (si vous n'êtes pas certain de quelle fréquence la pompe utilise, regardez [FAQ](../Configuration/MedtronicPump#faq)) : 
    - pour les US & le Canada, la fréquence utilisée est 916 Mhz
    - pour le reste du monde, la fréquence utilisée est de 868 Mhz
- **Bolus Max sur la Pompe (U)** (en une heure) : doit avoir la même valeur que sur la pompe. Cela limite la quantité d'insuline que vous pouvez avoir en Bolus. Si vous allez au delà, le Bolus ne sera pas défini et une erreur sera retournée. Le Max qui peut être utilisé est 25, mais surtout veuillez définir une valeur correcte pour vous-même afin de ne pas avoir de surdose d'insuline.
- **Max Basal on Pump (U/h)**: This needs to be set to same as on the pump. It limits how much basal you can get in an hour. So for example, if you want to have max TBR set to 500% and highest of your Basal patterns is 1.5 U, then you would need to set Max Basal to at least 7.5. If this setting is wrong (for example, if one of your basal pattern would go over this value, pump would return error).
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. Canceling bolus when bolus is running is not supported by pump (if you want to stop bolus when running, you have to suspend pump and then resume).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.

## Onglet MEDTRONIC (MDT)

![Onglet MDT](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. Phone should be connected to RileyLink all the time.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historique pompe

![Boîte de dialogue Historique pompe](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## État RL (RileyLink État)

![État RileyLink - Paramètres](../images/Medtronic04.png) ![État RileyLink - Historique](../images/Medtronic05.png)

La boîte de dialogue a deux onglets :

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Actions

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Remarques importantes

### Utilisateurs OpenAPS

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arrise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### MGC

La MGC Medtronic n'est actuellement PAS prise en charge.

### Utilisation manuelle de la pompe

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Modifications de fuseau horaire, changements d'heure ou Voyage avec la pompe Medtronic et AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Questions fréquentes

### Puis-je voir le niveau de batterie du RileyLink / GNARL ?

Non. Pour le moment, aucun de ces appareils ne prend en charge cela et ce ne sera probablement pas le cas à l'avenir.

### GNARL remplace-t-il complètement RileyLink ?

Oui. L'auteur de GNARL a ajouté toutes les fonctions utilisées par le pilote Medtronic. Toutes les communications de Medtronic sont supportées à ce jour (juin/2019). GNARL ne peut pas être utilisé pour la communication avec Omnipod. L'inconvénient de GNARL est que vous devez le compiler vous-même, et que vous devez avoir une version compatible du hardware.

**Note de l'auteur :** Veuillez noter que le logiciel GNARL est encore expérimental et légèrement testé, il ne devrait pas être considéré comme aussi sûr à utiliser qu'un RileyLink.

### Où puis-je obtenir RileyLink ou GNARL ?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### Que faire si je perds la connexion à RileyLink et/ou à la pompe ?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### Comment déterminer la fréquence utilisée par ma pompe

![Modèle de Pompe](../images/Medtronic06.png)

Si vous tournez votre pompe, à droite de la première ligne, vous verrez un code spécial à 3 lettres. Les deux premières lettres déterminent le type de fréquence et la dernière détermine la couleur. Voici les valeurs possibles pour la fréquence :

- NA - Amérique du Nord (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- CA - Canada (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- WW - Worldwide (pour la fréquence, vous devez sélectionner "Worldwide (868 Mhz)")