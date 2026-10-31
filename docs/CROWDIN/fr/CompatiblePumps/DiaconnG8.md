# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Fonctionnalités de la pompe avec AAPS

* Communique avec **AAPS** par le Bluetooth natif de votre téléphone, sans appareil de communication supplémentaire.
* Les changements d'heure d'été et de fuseau horaire doivent être faits à la main.

## Appairage Bluetooth de la pompe à insuline

- Appuyez sur le **menu** (☰) en haut à gauche.

![Le menu avec l'entrée Configuration](../images/v4/Configuration/configuration_menu.png)

- Appuyez sur **Configuration** > **Pompe** et sélectionnez **Diaconn G8**.

![Configuration > Pompe avec le plugin Diaconn G8](../images/v4/Configuration/configuration_pump_list_3.png)

Une fois le plugin sélectionné, la carte **Diaconn G8** affiche deux boutons, **Paramètres** et **Ouvrir le plugin** :

![Le plugin Diaconn G8 sélectionné dans Configuration > Pompe](../images/v4/Pumps/diaconn_g8_enabled.png)

**Paramètres** ouvre les paramètres du pilote Diaconn G8 (voir [Réglage des options de pompe Diaconn G8](#diaconn-g8-insulin-pump-option-setting) ci-dessous).

**Ouvrir le plugin** (ou **Gestion** > **Pompe**) ouvre l'écran de la pompe Diaconn G8. Avant l'appairage d'une pompe, il ressemble à ceci :

![Écran de la pompe Diaconn G8 avant l'appairage](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, l'appairage démarre avec le bouton **Appairer** de l'écran de la pompe ; il n'y a pas de paramètre **Pompe sélectionnée**.
```

- Sur l'écran de la pompe, appuyez sur **Appairer**. L'écran **Appairage pompe Diaconn** s'ouvre et **AAPS** recherche les pompes à proximité.
- Appuyez sur le numéro de modèle de votre pompe à insuline quand il apparaît dans la liste (par exemple **DIACONN-65010**).

![Écran Appairage pompe Diaconn pendant la recherche des pompes](../images/DiaconnG8/DiaconnG8_05.png)

- Il y a deux options pour vérifier votre numéro de modèle :

1. Les 5 derniers chiffres du numéro SN au dos de la pompe.
2. Cliquez sur le bouton O > Information > BLE > Derniers 5 chiffres.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Quand vous sélectionnez votre pompe, une fenêtre s'ouvre et demande un code PIN. Saisissez le code PIN affiché sur votre pompe pour terminer la connexion.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

- Quand **Appairage réussi !** s'affiche, appuyez sur **OK** pour revenir à l'écran de la pompe.

## Contrôle de l'état de la pompe et synchronisation des journaux

- Une fois la pompe connectée, ouvrez l'écran de la pompe (**Gestion** > **Pompe**). Il affiche l'état de la pompe (pile, réservoir, dernière connexion, dernier bolus, débit basal et plus encore).
- Appuyez sur **Actualiser** pour vous connecter à la pompe, mettre à jour l'état et synchroniser les journaux.
- Appuyez sur **Historique pompe** pour voir l'historique lu dans la pompe.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, l'état de la pompe s'affiche sur l'écran de la pompe (**Gestion** > **Pompe**) et se synchronise avec le bouton **Actualiser**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Dépannage Bluetooth

**Que faire dans le cas d'une connexion Bluetooth instable avec la pompe.**

### Méthode 1) Redémarrez AAPS, puis vérifiez à nouveau la pompe

- Appuyez sur le **menu** (☰) en haut à gauche.
- Appuyez sur **Quitter** en bas du menu.

![Le menu avec l'entrée Quitter en bas](../images/v4/Configuration/configuration_menu.png)

- Redémarrez **AAPS** et vérifiez la connexion à la pompe.

### Méthode 2) Si la première méthode ne fonctionne pas, déconnectez le Bluetooth puis reconnectez-le.

- Appuyez et maintenez le bouton Bluetooth en haut pendant environ 3 secondes.

![image](../images/DiaconnG8/DiaconnG8_11.jpg)

- Cliquez sur le bouton Réglage de la pompe Diaconn G8 appairée.

![image](../images/DiaconnG8/DiaconnG8_12.jpg)

- Désappairage.

![image](../images/DiaconnG8/DiaconnG8_13.jpg)

- Dans **AAPS**, ouvrez l'écran de la pompe (**Gestion** > **Pompe**), appuyez sur **Dissocier** et confirmez **Réinitialiser les informations d'appairage ?**.
- Répétez le processus d'appairage Bluetooth pour la pompe (voir ci-dessus).

## Informations complémentaires

(diaconn-g8-insulin-pump-option-setting)=

### Réglage des options de pompe Diaconn G8

- **Configuration** > **Pompe** > **Diaconn G8** > **Paramètres**
- Ou, sur l'écran de la pompe (**Gestion** > **Pompe**), appuyez sur l'icône des paramètres (roue dentée) en haut à droite.

![Paramètres du pilote Diaconn G8](../images/v4/Pumps/diaconn_g8_settings.png)

- **Vitesse bolus** règle la vitesse à laquelle la pompe délivre un bolus.
- Si l'option **Enreg. changement de réservoir** est activée, les détails sont automatiquement envoyés au careportal lors d'un événement « Changement d'insuline ».
- Si l'option **Enreg. le changement d'aiguille** est activée, les détails sont automatiquement envoyés au careportal lors d'un événement « Changement de site ».
- Si l'option **Enreg. changement de tubulure** est activée, les détails sont automatiquement ajoutés comme note lors d'un événement « Changement de tubulure ».
- Si l'option **Enreg. changement pile** est activée, les détails sont automatiquement envoyés au careportal lors d'un événement « Changement de pile ». Vous pouvez aussi enregistrer vous-même un changement de pile avec **Gestion** > **Changement pile pompe**. (Remarque : pour changer la pile, veuillez arrêter toutes les fonctions d'injection en cours avant de continuer.)
- **Synchro Diaconn Cloud** envoie les journaux de la pompe vers le Diaconn Cloud.

![Menu d'actions du Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, un changement de pile s'enregistre avec **Gestion** > **Changement pile pompe** ; il n'y a pas d'onglet **Actions**.
```

### Fonction Bolus Étendu

- Si vous utilisez un bolus étendu, cela désactivera la boucle fermée.
- Voir [cette page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) pour savoir pourquoi le bolus étendu ne fonctionne pas en boucle fermée.

## Où obtenir de l'aide

Le pilote Diaconn G8 est développé par la communauté, de manière **bénévole**. Avant de demander de l'aide, merci de :

1. **Lisez** la section correspondante de cette documentation pour vérifier comment la fonction doit marcher.
2. **Demandez** sur le canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md).
3. **Signalez un bug** : cherchez d'abord dans les [tickets existants](https://github.com/nightscout/AndroidAPS/issues) ; si le vôtre n'y est pas, ouvrez un [nouveau ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez vos [fichiers log](../GettingHelp/AccessingLogFiles.md).

Quand vous demandez de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, la version d'**AAPS** et une description simple du problème (ce qui a changé, quand cela a fonctionné pour la dernière fois).
