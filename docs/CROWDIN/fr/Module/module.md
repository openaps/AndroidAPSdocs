# Vue d'ensemble des composants

AAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](index-component-setup), too.

```{image} ../images/modules.png
:alt: Aperçu des composants
```

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
```

## Composants Nécessaires

### Un bon algorithme de dosage individuel pour votre diabète

Même si ce n'est pas quelque chose à créer ou à acheter, c'est le "composant" qui est probablement le plus sous-estimé, mais essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit en connaître les bons réglages pour ne pas faire de graves erreurs. Même si d'autres composants vous manquent, vous pouvez déjà vérifier et adapter votre « profil » en collaboration avec votre équipe médicale. La plupart des "boucleurs" utilisent le rythme circadien pour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.

Le profil inclut :

- DB (débits de basal)
- SI (sensibilité à l'insuline) est la baisse de glycémie que provoque une unité d'insuline
- G/I (ratio Glucides / Insuline) est la quantité de glucides en grammes par unité d'insuline
- DAI (durée d'action de l'insuline).

(module-no-use-of-sglt-2-inhibitors)=
### Ne pas utiliser d'inhibiteurs SGLT-2

Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. As they incalculably lower blood sugar levels, you MUST NOT take them while using a closed loop system like AAPS! Il y aurait un risque énorme d'une acidocétose ou d'une hypoglycémie ! La combinaison de ce médicament avec un système qui abaisse les débits de basal pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de Gly pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.

(module-phone)=
### Téléphone

The current version of AAPS requires an Android smartphone with Google Android 8.0 or above. Donc si vous pensez à un nouveau téléphone, un Android 8.1 minimum est recommandé mais choisissez de préférence une version Android 9 ou 10. Users are strongly encouraged to keep their build of AAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AAPS version 2.6.1.4, suitable for older Android versions, remains available from the [old repository.](https://github.com/miloskozak/AAPS)

Les utilisateurs ont créé une [liste de téléphones et montres testés](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le [formulaire](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à [hardware@androidaps.org](mailto:hardware@androidaps.org), pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à [donations@androidaps.org](mailto:hardware@androidaps.org).

### Pompe à insuline

AAPS **currently** works with

- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) (également nécessaire : application Ruffy, LineageOS ou Android 8.1 sur votre téléphone)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [DanaR](../Configuration/DanaR-Insulin-Pump.md)
- [Dana-i/RS](../Configuration/DanaRS-Insulin-Pump.md)
- [certaines anciennes pompes Medtronic](../Configuration/MedtronicPump.md) de la version 2.4 à venir ([dispositif de communication supplémentaire](module-additional-communication-device) nécessaires)
- [Omnipod Eros](../Configuration/OmnipodEros.md) ([dispositif de communication supplémentaire](module-additional-communication-device) nécessaire)
- [Omnipod Dash](../Configuration/OmnipodDASH.md)

If no additional communication device  is mentioned the communication betweeen insulin pump and AAPS is based on the integrated bluetooth stack of Android without the need of an additional communication device to translate the communnication protocol.

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../Getting-Started/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Périphérique de communication additionnel

Pour les anciennes pompes medtronic, un périphérique de communication supplémentaire (en plus de votre téléphone) est nécessaire pour "traduire" le signal radio de la pompe vers le Bluetooth. Make sure to choose the correct version depending on your pump.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested

**So what's the best pump for looping with AAPS?**

The Combo, the Insight and the older Medtronics are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### Source GLY

This is just a short overview of all compatible CGMs/FGM with AAPS. For further details, look [here](../Configuration/BG-Source.md). Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

- [Dexcom G6](../Hardware/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](Releasenotes-important-hints-3-0-0) for details). xDrip+ must be at least version 2022.01.14 or newer
- [Dexcom G5](../Hardware/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Dexcom G4](../Hardware/DexcomG4.md): These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
- [Libre 2](../Hardware/Libre2.md): It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
- [Libre 1](../Hardware/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../Hardware/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../Hardware/MM640g.md): quite complicated with a lot of extra stuff

### Nightscout

Nightscout is a open source web application that can log and display your CGM data and AAPS data and creates reports. You can find more information on the [website of the Nightscout project](http://nightscout.github.io/). You can create your own [Nightscout website](https://nightscout.github.io/nightscout/new_user/), use the semi-automated Nightscout setup on [zehn.be](https://ns.10be.de/en/index.html) or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../Installing-AndroidAPS/Nightscout.md).

### AAPS-.apk file

The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  [here](../Installing-AndroidAPS/Building-APK.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see [this documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) for more details).

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../Configuration/Watchfaces.md).

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le [formulaire](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à [hardware@androidaps.org](mailto:hardware@androidaps.org), pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip+

Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../Configuration/xdrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AAPS. Using this mode, AAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../Where-To-Go-For-Help/Background-reading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../Usage/Objectives.md) before each new Objective and setup up your [hardware](index-component-setup).
