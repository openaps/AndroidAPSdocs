* * *

orphan: true

* * *

# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes qui sont Bouclable

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

Awaiting release of t:mobi in Europe (other two are not yet released anywhere). Development of AAPS t:mobi support has already started and should be available by end of 2025 (see more info on Discord).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## Pompes qui ne sont pas bouclable

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

### Ypsomed Pump

**Comments:** Ypso added very heavy 3rd party encryption.

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

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.