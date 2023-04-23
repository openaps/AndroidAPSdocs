# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes qui sont Bouclable

* * *

### EOPatch2 ([Page d'accueil](http://www.eoflow.com/eng/main/main.html))

**Etat de la boucle :** Candidat à la boucle. La télécommande qu'ils utilisent est en fait un périphérique Android modifié. (La pompe n'est actuellement disponible qu'en Corée). Without commitment look out for AAPS 3.2.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Etat de la boucle :** Version 1-1.5 (2ème trimestre 2018) ne sont pas candidates à la boucle. While they do have BT communication, communication is very limited and uni directional: Pump->App. In June 2022 (in Germany) company released, new version nicknamed DOSE (1.6), which allows setting bolus and TBR from their App. Plan to implement their own Loop was cancelled and they decided to partner up with CamAPS (support already implemented) and use their loop solution. More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. It's BT enabled.

**Comments:** Dose version of pump had very heavy encryption added, so there is big probababilty that this pump won't be supported by AAPS in near future (or ever). We had developer working with Ypsomed and helping with medical trials, so maybe his version of driver will be alowed to be released, but this is just small possibility of that. You can find more information on our discord in channel "ypsopump-talk".

* * *

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Configuration matérielle requise pour AAPS :** Probablement aucune. It's BT enabled.

* * *

### Medtrum A6/P6/C6 ([Page d'accueil](https://www.medtrum.com/product/nanopump.html))

**Etat de la boucle :** Candidat à la boucle. L'entreprise dispose de son propre système de demi-boucle limité (A6). Controlable via une application iPhone. Aucune application Android disponible pour le moment.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

**Comment:** Some investigation has started to see if this pump can be supported in AAPS very easily. You can find more information on our discord in channel "medtrum".

* * *

### Equil (pump from Aidex/GlucoRx/MicroTechMD) ([Homepage](https://www.glucorx.ie/glucorx-equil/))

**Etat de la boucle :** Candidat à la boucle.

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

**Comment:** Some people started looking into supporting pump in AAPS, but this is still in beginning phases. You can find more information on our discord in channel "equil".

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Etat de la boucle :** Candidat à la boucle.

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

* * *

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

They plan to release t:Mobi first (previously called t:sport) at end of 2022 or in 2023. Afterwards they will release t:slim X3 (2023 maybe) and after that t:Mobi Tubeless. t:mobi's will be controlable only over phone app, while X3 will look similar as X2, with some new nifty features (remote update of firmware, remote control over phone app, etc).

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Il semble qu'elle dispose du Bluetooth.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Configuration matérielle requise pour AAPS :** Probablement aucune. It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompes qui ne sont pas bouclable

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Exigences pour que les pompes soient bouclables

**Prerequisite**

- La pompe doit prendre en charge un contrôle à distance (Bluetooth, fréquence radio, etc.).
- Le protocole est piraté/documenté/etc.

**Minimal requirement**

- Définir le Débit de Basal Temporaire
- Obtenir l'état de la pompe
- Annuler le Débit de Basal Temporaire

**For oref1(SMB) or Bolusing:**

- Définir le Bolus

**Good to have**

- Annuler le Bolus en cours
- Obtenir le profil de basal (presque requis)
- Définir le profil de basal (souhaitable)
- Lire l'historique 

**Other (not required but good to have)**

- Définir un bolus étendu
- Annuler Bolus étendu
- Lire l'historique
- Lire la TDQ

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.