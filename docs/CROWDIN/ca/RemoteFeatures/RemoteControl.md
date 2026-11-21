# Control remot d'AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

Hi ha quatre eines molt eficaces per gestionar **AAPS** a distància:

1) [SMS commands](#RemoteControl_SMS-Commands) (follower phone can be either Android or iOS), 2) [AAPSClient](#RemoteControl_aapsclient) (follower device is an Android phone or tablet, or a Windows, Mac or Linux computer; on an iPhone you [build the app yourself](#aapsclient-iphone)) 3) [Nightscout](#RemoteControl_nightscout) (Android, iOS or other computer/device), mainly for following: see the note on [client control](#client-master-control) in that section.  
4) [Smartwatches](#RemoteControl_smartwatches) (Android)

Les tres primeres són sobretot adequades per a cuidadors i pares, però els rellotges intel·ligents són molt útils per a cuidadors i pares **i** també per a adults amb diabetis.

![imatge](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) Ordres SMS

Vegeu la pàgina dedicada [Ordres SMS](../RemoteFeatures/SMSCommands.md).

(RemoteControl_aapsclient)=
## 2) AAPSClient

**AAPSClient** looks very similar in appearance to **AAPS** itself, offering the caregiver the same screens and buttons to send commands remotely to **AAPS**:

![AAPSClient home screen](../images/v4/AapsClient/aapsclient_home.png)

(remotecontrol-aapsclient-versions)=
### About AAPSClient, AAPSClient2 and AAPSClient3

There are 3 versions of the client app: **AAPSClient**, **AAPSClient2** and **AAPSClient3**. They work the same way. The only difference is that they can be installed side by side on the same follower phone.

A caregiver who follows one person needs only **AAPSClient**. To follow and remote control a second person (with their own **Nightscout** site and their own **AAPS** phone), install **AAPSClient2** as well, and **AAPSClient3** for a third person. Each app is set up and [paired](#aapsclient-pairing-with-the-master) on its own, with the **Nightscout** site and the **AAPS** phone of the person it follows.

To tell the apps apart, some elements have a different color: yellow for **AAPSClient**, blue for **AAPSClient2** and green for **AAPSClient3**. Those elements are the app icon, the widget background, and the **AAPS** status section on the home screen of the app. <br/> Note: the opacity of the widget background can be set in the widget configuration. At a low opacity the color is hard to see.

![Widget and status section colors of AAPSClient, AAPSClient2 and AAPSClient3](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### Descàrrega i instal·lació

**AAPSClient** es pot instal·lar en un sol telèfon o en diversos telèfons seguidors (p. ex. el telèfon seguidor del pare 1 i el del pare 2), perquè tots dos cuidadors tinguin accés i puguin controlar a distància el telèfon **AAPS** del pacient.

To download **AAPSClient**, navigate to the [GitHub repository](https://github.com/nightscout/AndroidAPS/releases/) and click on the asset **“app-AAPSClient-release_x.x.x.x”** (it may be a newer version to that shown in the screenshot below):

![imatge](../images/remote_control_and_following/AAPSClient_download_02.png)

Després aneu a les _baixades_ de l'ordinador. On Windows, _downloads_ will show in the right hand ribbon:

![imatge](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Un cop descarregat, feu clic a _mostra a la carpeta_ per trobar el fitxer.

Ara l'apk d'**AAPSClient** es pot:

Transferir-lo al telèfon seguidor amb un cable USB; o Arrossegar-lo a una carpeta de Google Drive i després afegir-lo al telèfon seguidor fent clic al fitxer "app-AAPSClient-release".

Should you be needing **AAPS** for yourself, and **AAPSClient** for monitoring someone else, you will need to build **AAPSClient** yourself instead of downloading it from the GitHub repository as described above. El motiu és que no podeu instal·lar **AAPS** i **AAPSClient** al mateix telèfon si estan signats amb claus diferents. <br/> Per compilar **AAPSClient** vosaltres mateixos, seguiu el mateix procés que per a la [compilació normal d'AAPS](../SettingUpAaps/BuildingAaps.md). A la pàgina **Generate signed App Bundle or APK**, seleccioneu **aapsclientRelease** en lloc de **fullRelease**.

The same rule applies when you install several client apps (**AAPSClient**, **AAPSClient2**, **AAPSClient3**) on one follower phone: they must all be signed with the **same key**. Otherwise Android refuses to install the second one (error `INSTALL_FAILED_DUPLICATE_PERMISSION`).

### Synchronization: AAPSClient and AAPS set up

Once the __AAPSClient__ apk is installed on the follower phone, make sure **NSClientV3** is set up the same way on both phones for Nightscout 15 (see the [update notes](../Maintenance/UpdateToNewVersion.md)). The example below shows the synchronization set-up with NSClientV3 and Nightscout 15; other data sources are available in __AAPS__ (e.g. xDrip).

In **Configuration** > **Communication**, the user synchronizes their data with Nightscout through __NSClientV3__ (using the v3 API), set up the same way for both __AAPS__ and the follower phone.

![Configuration > Communication with NSClientV3 selected](../images/v4/Configuration/configuration_communication.png)

The user must ensure that __both__ the AAPS and AAPS Client phones are synched together by setting up NSClientV3 on each. On the follower phone this can be done by scanning a QR code shown by **AAPS** instead, see [Pairing AAPSClient with AAPS](#remotecontrol-pairing) below:

- Enter your **Nightscout URL** in the NSClientV3 **Settings**

- Enter your **Nightscout access token** in the same settings. Please follow the notes [here](https://nightscout.github.io/nightscout/security/#create-a-token). On the **AAPS** phone use an **admin token**: with it **AAPS** makes a token of its own for each follower phone.

- Enable **Use websockets** on **both** phones. Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. Without them, **AAPSClient** can follow **AAPS** but cannot control it. On both phones they also make synchronization faster, at the cost of slightly higher battery use.

  Your Nightscout host must support websockets. If the websocket connection keeps dropping, remote control does not work. See [Troubleshooting NSClient](../GettingHelp/TroubleshootingNsClient.md).

![Settings > NSClientV3 with Nightscout URL, Nightscout access token and Use websockets](../images/preferences/settings_nsclient.png)


The user should ensure that both __AAPSClient__ and __AAPS__ are showing  ‘connected’ in the **NSClientV3** screen of each phone. At this point **AAPSClient** follows **AAPS** (BG, treatments, profile), but it cannot control it yet: pair the two phones as described below.

(remotecontrol-pairing)=
### Pairing AAPSClient with AAPS (remote control)

From **AAPS** version 4, **AAPSClient** controls **AAPS** through a secure, **paired** connection. Synchronization alone is not enough: until the phones are paired, **AAPSClient** only shows **Manage** with a view-only **Profile** and **Pair with master**.

1. On the **AAPS** phone, open **Manage → Authorized clients** and turn on **Allow client control** (it is off by default, and always on in Simple Mode).
2. Tap **+**, enter a name for the follower phone, choose how it is set up and choose its **role**:
   - **QR code: Nightscout and pairing** — **AAPS** shows a QR code that sets up Nightscout on the follower phone and pairs it, in one scan. This needs an admin token in the **AAPS** phone's NSClientV3 settings.
   - **PIN** — for a follower phone without a camera, already connected to Nightscout: note the one-time **PIN** (valid for about two minutes).
3. On the **AAPSClient** phone, scan the code (in the Setup Wizard, or **Manage → Pair with master → Scan QR code**), or open **Manage → Pair with master** and enter the PIN. Confirm.

The follower phone then appears as **Active** in the **Authorized clients** list, and **AAPSClient** shows **Treatments**, **Scenes** and **Manage**. The follower phone gets a Nightscout token of its own, with only the rights it needs. The full procedure, with screenshots and troubleshooting, is on [Master ↔ Client control](#client_master_master_setup).

Check that the set-up works: enter carbs on **AAPSClient**, confirm the amount shown, and check that the entry appears in **Treatments** on both phones.

(remotecontrol-nightscout-access-token)=

### Troubleshooting 'Nightscout access token' configuration issues

The precise 'Nightscout access token' configuration may differ depending upon whether your Nightscout provider is a paid for hosted site or not.

If you are struggling with **AAPS** to accept the 'Nightscout access token' and using a paid for hosted Nightscout site, you may wish to first liaise with your Nightscout provider on how to resolve the 'Nightscout access token' difficulties. Si no, contacteu amb el grup d'**AAPS**, però abans comproveu bé que heu seguit correctament les notes [d'aquí](https://nightscout.github.io/nightscout/security/#create-a-token).

### What AAPSClient offers

Once paired, **AAPSClient** offers the caregiver almost the same screens as **AAPS** itself:

- **Treatments**: insulin bolus, carbs and the bolus wizard.
- **Scenes**: start and stop [scenes](../DailyLifeWithAaps/Scenes.md).
- **Manage**: profiles, insulin settings, temporary targets, QuickWizard, automation, food, site rotation, pairing and the running temp basal.
- **Main menu**: treatments history, history browser, statistics, maintenance, configuration.

There is no pump and no objectives on **AAPSClient**. See [The AAPSClient app](AapsClient.md) for a detailed description.

**AAPSClient** lets the caregiver make most of the adjustments allowed directly in **AAPS**, **including insulin boluses**, remotely over the mobile or internet network. Every command is signed and sent through Nightscout to the **AAPS** phone, which checks it against its own data, caps it, shows you its own confirmation, and only then executes it. **AAPSClient** _can_ be much faster than [SMS Commands](../RemoteFeatures/SMSCommands.md), especially for commands that would need authentication.

Treatments entered in Nightscout by other means (for example the Nightscout website) are not applied while client control is on: **AAPS** is then in [hardened mode](#client-master-control-hardened-mode) and takes changes only from paired clients. With client control off, they are applied only if the matching **Receive** options are enabled in the [Synchronization section of NSClient preferences](#Preferences-nsclient-synchronization).

Remote control through **AAPSClient** is only recommended if your synchronization is working well (_i.e._ you don’t see unwanted data changes like self-modification of TT, TBR etc).

### AAPSClient amb opcions de rellotge intel·ligent

Un rellotge intel·ligent pot ser una eina molt útil per ajudar a gestionar **AAPS** amb nens. Es poden fer servir diverses configuracions. Si **AAPSClient** està instal·lat al telèfon del cuidador, l'[aplicació **AAPSClient WearOS**](https://github.com/nightscout/AndroidAPS/releases/) es pot descarregar i instal·lar en un rellotge intel·ligent compatible connectat al telèfon del pare o la mare. This will show current BG and loop status. Once **AAPSClient** is paired with **AAPS**, the watch actions (including boluses, carbs, temp targets and profile changes) are relayed through **AAPSClient** to **AAPS**, which confirms and executes them: see [Wear OS on a client](#clientmastercontrol-wear-os-on-a-client). You can read more about Smartwatches [here](#remotecontrol-smartwatches).

(RemoteControl_nightscout)=
## 3) Nightscout

A més de ser un servidor «al núvol», Nightscout també té una aplicació **Nightscout** pròpia, que podeu descarregar directament de l'App Store al vostre iPhone. If you have an Android follower phone, there is not a dedicated Nightscout app and it is better to use [**AAPSClient**](#RemoteControl_aapsclient), or, if you only want to follow, and not send treatments you can download and install the [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) app from the Playstore.

Un cop instal·lada l'aplicació **Nightscout** a l'iPhone, obriu-la i seguiu els passos de configuració: introduïu l'adreça del vostre Nightscout (vegeu a sota, a l'esquerra). El format de l'adreça pot variar segons on estigui allotjat el vostre Nightscout. (_p. ex._ http://youraddresshere.herokuapp.com). Després introduïu l'API secret del vostre Nightscout (vegeu a sota, a la dreta). Si l'aplicació no us demana la contrasenya de l'API, l'heu d'introduir fent clic al cadenat de la part de dalt de l'aplicació:

![imatge](../images/remote_control_and_following/remote-control-24.png)

Trobareu més informació sobre la configuració directament a [Nightscout](https://nightscout.github.io/nightscout/discover/)

Quan inicieu la sessió per primera vegada, la pantalla serà molt senzilla. Personalitzeu les opcions de visualització: seleccioneu el menú «hamburguesa» (a dalt a la dreta) i desplaceu-vos cap avall:

![imatge](../images/remote_control_and_following/remote-control-25.png)

Desplaceu-vos cap avall fins a «Settings». Potser voleu canviar «scale» a «linear», perquè la visualització de la glucèmia és logarítmica per defecte. A «render basal», seleccioneu «default» perquè es mostri la basal de la bomba.

![imatge](../images/remote_control_and_following/remote-control-25b.png)

Seleccioneu les opcions que vulgueu. Desmarqueu les alarmes si feu servir una altra aplicació per a les alarmes.

![imatge](../images/remote_control_and_following/remote-control-26.png)

Continueu baixant fins a «show plugins».

Assegureu-vos que «careportal» estigui marcat. També podeu seleccionar altres dades (les més útils són: IOB, care portal, pump, cannula age, insulin age, basal profile i OpenAPS).

Important: ara heu de fer clic a «save», a la part de baix, perquè els canvis tinguin efecte.

![imatge](../images/remote_control_and_following/remote-control-27.png)

Després de prémer «save», l'aplicació torna a la pantalla principal de Nightscout, que serà semblant a aquesta:

1. Valor actual de glucèmia
2. Informació sobre l'estat del sistema AAPS: toqueu cada pestanya de la pantalla per veure'n més detalls. Afegiu o traieu aquestes opcions de visualització amb el menú hamburguesa.
3. Corba recent de glucèmia amb els tractaments (carbohidrats, bolus)
4. Corba de glucèmia a més llarg termini
5. Menú «hamburguesa» per a les opcions de visualització, crear informes, editar perfils i les eines d'administració de Nightscout
6. "**+**" menu for entering treatments (see [below](#RemoteControl_nightscout-treatments) for when **AAPS** applies them).
7. Seleccionar un altre període de temps per mostrar
8. Perfil d'insulina basal
9. Línia verda = glucèmia passada Línies blaves = glucèmia prevista

![imatge](../images/remote_control_and_following/remote-control-28.png)

Vegem amb més detall el menú de dalt a l'esquerra de l'aplicació Nightscout:

1. Edició retrospectiva del Careportal
2. Activar/desactivar les alarmes
3. Hamburguesa: per a la configuració
4. Careportal - Log treatment (see [below](#RemoteControl_nightscout-treatments) for when **AAPS** applies these)

![Nightscout top bar](../images/remote_control_and_following/remote-control-29.png)

En aquesta pantalla hi ha moltíssima informació sobre l'estat del sistema **AAPS** a les pestanyes grises (i encara més si toqueu la pestanya):

1. Tendència de glucèmia de 5 min
2. Previsualització de la calculadora de bolus (BWP)
3. Premeu Basal per veure el vostre perfil actual i la informació de la basal
4. Temps des de l'última lectura del CGM a AAPS
5. **Bomba**: insulina, % de pila i quan AAPS s'hi va connectar per última vegada
6. Última actualització d'AAPS: si fa més de 5 min, pot indicar un problema de connexió entre el telèfon AAPS i la bomba o el CGM
7. Premeu IOB per veure la insulina basal i la de bolus per separat
8. Edat de la insulina al reservori
9. Edat de la cànula
10. Estat de la bateria del telèfon AAPS
11. Mida de la vostra base de dades. Si s'omple massa (només Nightscout autoallotjat (DIY); els serveis allotjats no en fan cas), podeu començar a tenir problemes de connexió. Podeu eliminar dades per reduir aquest número al menú Admin tools (des del menú hamburguesa).

![imatge](../images/remote_control_and_following/remote-control-30.png)

![imatge](../images/remote_control_and_following/remote-control-31.png)

Premeu «refresh» a la part de baix de la pàgina per tancar la finestra emergent.

(RemoteControl_nightscout-treatments)=
### Enviar tractaments a AAPS amb l'aplicació Nightscout

In **AAPS** 4 the supported way to control **AAPS** remotely is a **paired AAPSClient**, see [Master ↔ Client control](#client-master-control): each client has a [role](#client-master-control-roles) that limits what it may do, and every command is signed by the client, then checked and confirmed by the **AAPS** phone. While client control is on, the **AAPS** phone is in [hardened mode](#client-master-control-hardened-mode): treatments, temporary targets and profile switches entered on the Nightscout website or in the Nightscout app are **not** applied. The Nightscout app is then a tool for following only.

```{admonition} Only when client control is off
:class: warning
If **Allow client control** is off in **Manage → Authorized clients** (and Simple Mode is off), **AAPS** applies careportal entries from Nightscout only for the data types you turned on under **Receive** in the [Synchronization section of the NSClientV3 settings](#Preferences-nsclient-synchronization): carbs, temporary targets, profile switches and the other careportal entries. Insulin is never delivered this way: a "Correction bolus" entered in Nightscout is only *announced*, and **AAPS** counts it as insulin on board without delivering it. This set-up is not recommended for remote control; use a paired **AAPSClient** instead.
```

Llegiu més sobre les opcions de **Nightscout** [aquí](https://nightscout.github.io/)

### Consells per treure el màxim profit de l'aplicació Nightscout

1). Si us «quedeu encallats» en una pàgina i voleu tornar a veure la pantalla principal, feu clic a «refresh» (a baix al mig) i tornareu a la pàgina d'inici de **Nightscout** amb el gràfic de glucèmia.

Per veure el perfil actual que funciona al telèfon, premeu les diverses icones de la pantalla, a sobre del gràfic. Podeu veure més informació (ràtio de carbohidrats actual, sensibilitat, fus horari, etc.) prement «basal». «OpenAPS» dona informació sobre el perfil, l'objectiu actual, etc. També podeu controlar el % de bateria del telèfon i el % de pila de la bomba. BWP dona informació sobre el que l'algoritme creu que passarà en el futur, segons l'IOB i el COB.

#### Altres icones del menú: què vol dir el llapis (editar)?

(Tècnicament) podeu fer servir el llapis d'edició per moure o eliminar tractaments de bolus o de correcció de les últimes 48 h.

Més informació [aquí](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Això podria ser útil per eliminar carbohidrats anotats (però sense bolus), però a la pràctica ara mateix no funciona bé amb **AAPS**. Us recomanem fer aquests canvis directament a l'aplicació **AAPS**.

(RemoteControl_smartwatches)= (remotecontrol-smartwatches)=

## 4) Rellotges intel·ligents

### Opció 1) Controlar AAPS des d'un rellotge Wear OS

![Wear remot 1](../images/remote_control_and_following/Wear_Remote1.png)

Un cop hàgiu [configurat **AAPS** al vostre rellotge](../WearOS/BuildingAapsWearOS.md), trobareu molts detalls sobre les esferes del rellotge i les seves funcions a [Configurar AAPS al vostre rellotge Wear OS](../WearOS/WearOsSmartwatch.md).

En resum, des del rellotge intel·ligent es poden fer aquestes funcions:

* establir un objectiu temporal

* fer servir la calculadora de bolus (les variables del càlcul es poden definir a la configuració del telèfon)

* administrar e-carbs

* administrar un bolus (insulina + carbohidrats)

* configuració del rellotge

* estat

* comprovar l'estat de la bomba

* comprovar l'estat del llaç

* comprovar i canviar el perfil, CPP (Circadian Percentage Profile = desplaçament horari + percentatge)

* mostrar la TDD (dosi diària total = bolus + basal per dia)

* Bolus remot quan el cuidador i el nen amb DT1 són en llocs diferents (és possible amb el rellotge **AAPS** i el telèfon **AAPS** si tots dos dispositius estan connectats a la xarxa)

#### Comunicació dels cuidadors amb el rellotge mitjançant altres aplicacions (com WhatsApp)

Es poden afegir altres aplicacions al rellotge, com WhatsApp, per enviar missatges (per exemple) entre cuidadors i nens. És important tenir només UN compte de Google associat al telèfon; si no, el rellotge no rebrà aquestes dades. Cal tenir 13 anys o més per tenir un compte de Samsung, i s'ha de crear amb la mateixa adreça de correu que es fa servir al telèfon Android.

Hi ha un vídeo que explica com configurar WhatsApp per a missatges al rellotge Galaxy 4 (no hi teniu totes les funcions de WhatsApp) [aquí](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Si feu ajustos tant a l'aplicació **Galaxy wearable** del telèfon **AAPS** com al rellotge, els missatges de WhatsApp poden avisar amb una vibració suau, i el missatge de WhatsApp es pot mostrar per sobre del watchface.

### Opció 2) **AAPS** al rellotge, per controlar a distància **AAPS** en un telèfon

Similarly to using a follower phone with **AAPSClient** or SMS commands (see the sections above), a smartwatch can be used to remotely control **AAPS** and provide full profile data. A key difference to using a follower phone is that the smartwatch to **AAPS** phone link is via Bluetooth and needs neither Nightscout nor an authentication code. As a side-note, if both smartwatch and **AAPS** phone linked by Bluetooth are also on a Wi-Fi/Cellular data network, the watch will also interact with the **AAPS** phone, giving a longer range of communication. This includes remote delivery of a bolus where the caregiver with the **AAPS** watch and T1D child (with **AAPS** phone) are in different locations, which can be useful in circumstances where the T1D child is in school.

Per tant, un rellotge intel·ligent per al control remot sovint és útil en qualsevol situació en què:

a)  **AAPSClient** or **SMS** commands cannot work; or

b)  The user wishes to avoid typing an authentication code (as required for SMS commands).

A smartwatch needs **Wear OS 3 or newer** to be able to control **AAPS**. Please check the technical specifications of the watch, and see the [Smartwatches page](../Getting-Started/Watches.md). Search, or ask in the **AAPS** Facebook/Discord groups if unsure.

Specific How-to guides for setting up **AAPS** on the popular Samsung Galaxy Watch 4 (40mm) are given below. El rellotge [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) també és una opció popular. Si teniu experiència configurant un altre rellotge intel·ligent i creieu que pot ser útil per a altres persones, afegiu-ho a aquestes pàgines ([editeu la documentació](../SupportingAaps/HowToEditTheDocs.md)) per compartir-ho amb tota la comunitat d'**AAPS**.

### Opció 3) AAPSClient en un rellotge, per controlar a distància **AAPS** en un telèfon

![Wear remot 2](../images/remote_control_and_following/Wear_Remote2.png)

The software for the watch, **AAPSClient** Wear apk, can be downloaded directly from [GitHub](https://github.com/nightscout/AndroidAPS/releases/).

To download the software, click on the watch app that matches the client app on the phone: **wear-aapsclient-release_**_version_ goes with **AAPSClient**, **wear-aapsclient2-release_**_version_ goes with **AAPSClient2** (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)):

![imatge](../images/remote_control_and_following/github_release_wear_aapsclient_apk.png)


Després feu «Desa com» i deseu el fitxer en un lloc còmode de l'ordinador:


![imatge](../images/remote_control_and_following/save_as_wear_aapsclient_apk.png)






L'apk de Wear d'**AAPSClient** es pot transferir al telèfon i instal·lar manualment al rellotge de la mateixa manera que l'aplicació Wear d'**AAPS**, com s'explica a [Transferir l'aplicació Wear al vostre telèfon AAPS](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)  









