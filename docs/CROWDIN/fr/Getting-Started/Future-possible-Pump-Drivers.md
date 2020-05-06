# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes dont le support est en développement

### Medtronic

**Loop status:** Medtronic is part of AAPS, since version 2.4

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

### Insulet Omnipod (avec les "aniens" Pods Eros) ([Page d'accueil](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy pour AndroidAPS (stable lors des tests, nécessite un Raspberry Pi ainsi qu'un RileyLink, et une version spécialement modifiées d'AndroidAPS) 
- OmniCore pour AndroidAPS (pas encore publié, le code C# fonctionne "nativement" sur Android, ne nécessite que le RileyLink et une version spécialement modifiées d'AndroidAPS - prochaine version du projet Omnipy).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stable, validée, nécessite un RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version was released in January 2020, and work is beeing done towards stabilization. Current version 0.3 (March)

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Pompes qui sont Bouclable

### Omnipod DASH ([Page d'accueil](https://www.myomnipod.com/DASH))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions. It seems that we will get loopable version in begining of 2021, see this [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Page d'accueil](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### EOFLOW ([Page d'accueil](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Accu-Chek Solo ([Page d'accueil](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](https://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Remarque sur le produit :** Il semble que l'entreprise ait décidé d'abandonner le business des pompes. Vous pouvez en voir plus dans cet [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompes qui ne sont pas bouclable

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Etat de la boucle :** Non bouclable.

Il y quelque temps, il y avait un firmware appelé T:AP (mentionné dans cet [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)), qui pouvait être utilisé en boucle (il n'est plus disponible car la pompe a été mise à niveau vers x2), mais il n'était pas destiné à un usage commercial, uniquement à titre expérimental (projets de recherche). J'ai parlé avec un des directeurs de l'entreprise et il m'a assuré que la pompe Tandem ne sera jamais ouverte, mais qu'ils ont créé leur propre système de boucle fermée, qu'ils appellent Contrôle-IQ (je pense qu'elle est déjà disponible aux USA, et devrait être disponible en 2020 en Europe).

* * *

### Animas Vibe

**Etat de la boucle :** Non bouclable. Aucune possibilité de contrôle à distance. **Remarque :** La pompe n'est plus vendue. L'entreprise a abandonné le business de la pompe (J&J).

* * *

### Animas Ping

**Etat de la boucle :** Non bouclable. Il a une possibilité de bolus, mais pas de DBT. **Remarque** N'est plus vendues depuis la sortie de la Vibe.

## Exigences pour que les pompes soient bouclables

**Pré-requis**

- La pompe doit prendre en charge un contrôle à distance (Bluetooth, fréquence radio, etc.).
- Le protocole est piraté/documenté/etc.

**Exigences minimales**

- Définir le Débit de Basal Temporaire
- Obtenir l'état de la pompe
- Annuler le Débit de Basal Temporaire

**Pour oref1 (SMB) :**

- Définir le Bolus

**Préférable d'avoir**

- Annuler le Bolus en cours
- Obtenir le profil de basal (presque requis)
- Définir le profil de basal (souhaitable)
- Lire l'historique 

**Autres (pas nécessaire, mais souhaitable)**

- Définir un bolus étendu
- Annuler un bolus étendu
- Lire l'historique
- Lire le TDI

* * *

### Other pumps support

Si vous avez d'autres pompes dont vous aimeriez voir l'état de bouclage, veuillez me contacter (@andyrozman sur gitter). Dans les versions à venir, de nombreuses configurations de pompe seront ajoutées afin de permettre une boucle ouverte (vous pourrez sélectionner un type de pompe virtuel dans la configuration et vos paramètres seront chargés - [Demande de fonctionnalité #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).