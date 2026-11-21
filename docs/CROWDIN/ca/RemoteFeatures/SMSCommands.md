# Ordres SMS

```{contents} Table of contents
:depth: 2
```

La majoria d'ajustos remots (objectius temporals, carbohidrats, canvis de perfil i, un cop el client està emparellat, bolus) es poden fer amb l'[aplicació **AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) en un telèfon Android amb connexió a internet; vegeu [Control principal ↔ client (control remot signat)](#client-master-control) (s'està desenvolupant una versió d'**AAPSClient** per a iPhone; vegeu [L'aplicació AAPSClient](AapsClient.md)). Les ordres SMS continuen sent una alternativa que funciona sense internet, i l'única opció remota si feu servir un iPhone com a seguidor i encara no teniu **AAPSClient**.

**Les ordres SMS són molt útils:**
1. Per al control remot habitual

2. Si voleu fer un bolus d'insulina remot sense un **AAPSClient** emparellat

3. En una zona amb mala cobertura d'internet, on els missatges de text arriben però la connexió de dades/internet del telèfon és limitada. Això és molt útil quan aneu a zones aïllades (p. ex. càmping, esquí).

4. Si el vostre altre mètode de control remot (**AAPSClient**) temporalment no funciona

## Primer, la seguretat

Si activeu el **Comunicador SMS** a **AAPS**, tingueu en compte que el telèfon configurat per donar ordres remotes el podrien robar o el podria fer servir una altra persona. Bloquegeu sempre el telèfon, com a mínim amb un PIN. Es recomana molt una contrasenya forta i/o un bloqueig biomètric, i assegureu-vos que sigui diferent de la clau mestra de l'APK (la contrasenya que cal per exportar la configuració d'**AAPS**).

A més, es recomana permetre un [segon número de telèfon](#SMSCommands-authorized-phone-numbers) per a les ordres SMS. Així podeu fer servir el segon número per [desactivar](#SMSCommands-other) el comunicador SMS si el vostre telèfon remot principal queda compromès.

The default minimum time delay between bolus commands is 15 minutes, counted from the moment the pump accepts a bolus. Per motius de seguretat, heu d'afegir com a mínim dos números de telèfon autoritzats per canviar-ho a un temps d'espera més curt. Si intenteu fer un altre bolus remot abans de 15 minuts després de l'anterior, rebreu la resposta «Bolus remot no disponible. Torneu-ho a intentar més tard.»

AAPS també us informarà per missatge de text si les vostres ordres remotes, com un bolus o un canvi de perfil, s'han executat. És recomanable configurar-ho perquè els textos de confirmació s'enviïn com a mínim a dos números de telèfon diferents, per si roben un dels telèfons que els reben.

**If you bolus through SMS Commands, you must enter carbs separately (second SMS, AAPSClient...)!** If you fail to do so, the IOB would be correct with too low COB, potentially leading to not performed correction bolus as **AAPS** assumes that you have too much active insulin.

Per a les ordres sensibles, s'ha de fer servir una app d'autenticació amb una contrasenya d'un sol ús basada en el temps, per augmentar la seguretat.

Si voleu treure a un telèfon de cuidador la possibilitat d'enviar ordres SMS, feu servir el botó d'emergència «[Restablir autenticadors](#sms-commands-authenticator-setup)» a **AAPS** o envieu l'ordre SMS «[SMS stop](#SMSCommands-other)». En restablir els autenticadors, TOTS els telèfons dels cuidadors deixen de ser vàlids. Els haureu de tornar a configurar.

## Configurar les ordres SMS

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Configuració de l'Autenticador

Es fa servir l'autenticació en dos factors per millorar la seguretat.

Al telèfon del cuidador, descarregueu (de l'App Store o de Google Play) i instal·leu una app d'autenticació. Apps gratuïtes populars:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Aquestes apps d'autenticació generen una contrasenya de 6 xifres d'un sol ús i amb temps limitat, semblant a la banca mòbil o a les compres en línia. Podeu fer servir una altra app d'autenticació, sempre que sigui compatible amb tokens RFC 6238 TOTP. Microsoft Authenticator no funciona.

### Comproveu la configuració del telèfon

Al vostre telèfon, aneu a **Aplicacions > AAPS > Permisos**. Assegureu-vos que **SMS** i **Telèfon** estan permesos.

![imatge](../images/remote_control_and_following/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android pot bloquejar el permís d'**SMS** per a les apps que no s'han instal·lat des d'una botiga d'aplicacions, com **AAPS**. Si veieu aquest missatge quan concediu el permís d'**SMS**, obriu **Configuració > Aplicacions > AAPS** al telèfon, toqueu el menú **⋮** (a dalt a la dreta) i seleccioneu **Permet la configuració restringida**. Després torneu a concedir el permís d'**SMS**.
```

![S'ha denegat a l'app l'accés als SMS](../images/remote_control_and_following/sms_permission_restricted.png)

### Sincronització de la data i l'hora

L'hora dels dos telèfons ha d'estar sincronitzada. El millor és que s'ajusti automàticament des de la xarxa. Les diferències d'hora poden causar problemes d'autenticació.

Tant al telèfon d'**AAPS** com al telèfon del cuidador, comproveu que la data i l'hora estan sincronitzades. Com fer-ho exactament depèn del vostre dispositiu; potser haureu de provar diferents opcions.

Exemple (per a Samsung S23): **Configuració > Administració general > Data i hora**: assegureu-vos que **Data i hora automàtiques** està marcat.

Algunes opcions poden aparèixer en gris, perquè necessiten un administrador d'un compte familiar si el telèfon s'ha configurat com a compte infantil. En un iPhone de cuidador/pare o mare, aquesta opció de data i hora s'anomena «Ajusta automàticament». Si no esteu segurs d'haver sincronitzat els telèfons, no us preocupeu: podeu configurar les ordres SMS i resoldre els problemes després, si sembla que en causa (demaneu ajuda si cal).

### Configuració d'AAPS

Ara que heu comprovat la configuració del telèfon, a la mateixa app **AAPS** aneu a [**Configurador** → **Comunicació**](../SettingUpAaps/ConfigBuilder.md) i activeu el plugin **Comunicador SMS**.

Obriu la configuració del **Comunicador SMS**.

Activeu **Permetre ordres remotes per SMS**. Les opcions **PIN obligatori addicional al final del token** i **Configuració de l'Autenticador** només apareixen quan això està activat:

![Configuració del Comunicador SMS](../images/remote_control_and_following/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Números de telèfon permesos

Introduïu el número o els números de telèfon dels cuidadors. Incloeu el prefix del país i traieu el primer «0» del número de telèfon, com en aquests exemples:
* Número de telèfon del Regne Unit: +447976304596
* Número de telèfon dels EUA: +11234567890
* Número de telèfon de França:  +33612344567
* _etc._

Tingueu en compte que el «+» davant del número pot ser necessari o no, segons on sigueu. Per saber-ho, envieu un text de prova, que mostrarà el format rebut a la pantalla del plugin **Comunicador SMS** (**Configurador** → **Comunicació** → **Comunicador SMS** → **Obrir plugin**).

Si heu d'afegir més d'un número de telèfon, separeu-los amb punts i coma, **SENSE espai entre els números** (això és molt important!). Seleccioneu **OK**:

![Números de telèfon permesos](../images/remote_control_and_following/sms_allowed_numbers.png)

#### Distància mínima entre bolus remots

- Podeu definir el temps mínim (en minuts) entre dos bolus donats per SMS.
- Per motius de seguretat, heu d'afegir com a mínim dos números de telèfon autoritzats per editar aquest valor.

#### PIN obligatori addicional al final del token

Per motius de seguretat, el codi de resposta ha d'anar seguit d'un PIN. Trieu un PIN que vosaltres (i els altres cuidadors) fareu servir al final del codi de l'autenticador quan envieu l'ordre SMS.

Requisits del PIN:

* at least 6 digits
* digits only

For a safer PIN, do not use the same digit many times (_e.g._ 111111) or a sequence (_e.g._ 123456).

![PIN obligatori addicional al final del token](../images/remote_control_and_following/sms_pin.png)

#### Configuració de l'Autenticador

* Toqueu **Configuració de l'Autenticador** i seguiu les instruccions pas a pas de la pantalla.
* Obriu l'app d'autenticació instal·lada al _telèfon del cuidador_, configureu una connexió nova i
* Feu servir el telèfon del cuidador per escanejar el codi QR que es mostra a **Escanejar el codi per configurar els codis OTP d'AAPS**.

![Authenticator setup with QR code](../images/remote_control_and_following/sms_authenticator_setup.png)

* A **Provar clau d'un sol ús**, introduïu a **Codi per comprovar** la contrasenya d'un sol ús de l'app d'autenticació del telèfon del cuidador, seguida del vostre PIN:

Example:
* El token de l'app d'autenticació és 457051
* El vostre PIN obligatori és 2401
* Codi per comprovar: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. **There is no button you can press!** The process is now complete, there is no “OK” button you need to press after entering the code:

![Test One-Time-Password and Reset Authenticators](../images/remote_control_and_following/sms_authenticator_test.png)

You should now be set up with SMS commands.

Use the **Reset Authenticators** button at the bottom of the **Authenticator setup** screen if you want to remove provisioned authenticators. (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again.)

## Ús de les ordres SMS

### Primers passos amb les ordres SMS

1)  To check you have set everything up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the **AAPS** phone. You should get a response similar to that shown here:

![imatge](../images/remote_control_and_following/remote-control-06.png)

If you don't receive any response, check the [Troubleshooting](#SMSCommands-troubleshooting) section below.

2)  Now try an SMS command that requires the authenticator, _e.g._ “target hypo”. The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by the additional secret **PIN** known only by caregivers/followers (a string of twelve digits in total, assuming your PIN has 6 digits).

When you try sending an SMS command for the first time, try it in the presence of the **AAPS** phone, to see how it works:

![imatge](../images/remote_control_and_following/remote-control-16.png)

The caregiver’s phone will receive an SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully.

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message. See [Troubleshooting](#SMSCommands-troubleshooting) below for common errors.

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

### Lliurar bolus d'àpat amb ordres SMS

Remote bolusing of insulin can be done via **SMS Commands** or through a paired **AAPSClient** (see [Master ↔ Client control](#client-master-control)); it cannot be done through the Nightscout website. Carbs can be announced through SMS or **AAPSClient** as well. With SMS, it is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to **Treatments** → **Insulin** in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to **Treatments** → **Carbs** in **AAPS**.

To avoid hypos, it is a good idea to start conservatively, by bolusing **less insulin** than would be needed according to your carb ratio, because you are not taking into account the current glucose level or glucose trend.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can combine **AAPSClient** with SMS commands: carbs entered on a paired **AAPSClient** need no authentication code and are therefore quicker than SMS commands. Carbs or other treatments entered on the Nightscout website are **not** applied while client control is on; **AAPS** is then in [hardened mode](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Ordres

```{contents} List of command groups
:depth: 1
:local: true
```

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app). The commands are not case-sensitive, you can use lower or upper case.

![SMS Commands Example](../images/remote_control_and_following/SMSCommands.png)

The **SMS Commands Tables** below show all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the **AAPS** app itself.

(authentication-or-not)=
### Amb autenticació o sense?

Some SMS commands give an immediate response, and some SMS commands require strong **authentication** through the Authenticator app. A simple enquiry like “**BG**” (which requests an update on current glucose) is quick to type, doesn't need authenticating, and returns the **AAPS** status information shown below:

![imatge](../images/remote_control_and_following/remote-control-06.png)

Commands which need more security require a code to be entered, for example:

![SMS authenticated](../images/remote_control_and_following/remote-control-07.png)

The *Auth* column in the tables below, indicates whether such a strong authentication is required for each command.

### Dades del CGM

| Ordre      | Autenticació | Funció & *Resposta*                                                                                                                                                                                                               |
| ---------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | No           | Retorna: darrera glucèmia, delta, IOB (bolus i basal), COB<br/>*Darrera glucèmia: 5,6 fa 4min, Delta: -0,2 mmol, IOB: 0,20U (Bolus: 0,10U Basal: 0,10U)*                                                                    |
| CAL 5.6/90 | Sí           | Will calibrate the CGM with a value of 5.6/90<br/>(use the value appropriate to your glucose units)<br/>Works only if properly set-up in **AAPS**.<br/>*Calibration sent. Receiving must be enabled in xDrip+.* |

### Bomba

| Ordre                | Autenticació | Funció & *Resposta*                                                                                  |
| -------------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| PUMP                 | No           | LastConn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Sí           | Per desconnectar la bomba durant *30* minuts                                                         |
| PUMP CONNECT         | Sí           | Bomba reconnectada                                                                                   |

### Basal

| Ordre             | Autenticació | Funció & *Resposta*                            |
| ----------------- | ------------ | ---------------------------------------------- |
| BASAL 0.3         | Sí           | Per iniciar una basal de 0,3 U/h durant 30 min |
| BASAL 0.3 20      | Sí           | Per iniciar una basal de 0,3 U/h durant 20 min |
| BASAL 30%         | Sí           | Per iniciar una basal del 30% durant 30 min    |
| BASAL 30% 50      | Sí           | Per iniciar una basal del 30% durant 50 min    |
| BASAL STOP/CANCEL | Sí           | Per aturar la basal temporal                   |

Some pumps take a temp basal only in percent, others only in U/h. If you use the other form, **AAPS** answers *"This pump takes a temp basal only in percent, not in U/h."* (or the reverse) and sets nothing. The duration must be a multiple of your pump's temp basal duration step.


### Llaç

| Ordre             | Autenticació | Funció & *Resposta*                                                                                                                                                                                                                                                                |
| ----------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ESTAT DEL LLAÇ    | No           | Response depends on actual status:<br/> - *Loop is disabled* if the loop is disabled<br/> - *Loop is enabled* if the loop is closed, open or LGS<br/> - *Pump disconnected* if the pump is disconnected<br/> - *Suspended (10 m)* if the loop is suspended |
| LOOP STOP/DISABLE | Sí           | La bomba torna a la taxa basal programada.<br/>*El llaç s'ha desactivat*                                                                                                                                                                                                     |
| LOOP SUSPEND 20   | Sí           | *Loop suspended*                                                                                                                                                                                                                                                                   |
| LOOP RESUME       | Sí           | *Llaç reprès*                                                                                                                                                                                                                                                                      |
| LOOP CLOSED       | Sí           | *Current running mode: Closed Loop*                                                                                                                                                                                                                                                |
| LOOP LGS          | Sí           | *Current running mode: Low Glucose Suspend*                                                                                                                                                                                                                                        |

### Bolus

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! In this case, the response would be *Remote bolus not available. Try again later.* This response is also sent when the pump is currently delivering a bolus.

| Ordre                | Autenticació | Funció & *Resposta*                                                                                                                                                              |
| -------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Sí           |                                                                                                                                                                                  |
| BOLUS 0.60 MEAL      | Sí           | Lliura el bolus indicat de 0,60 U<br/>**i** estableix l'[objectiu temporal Menjar aviat](#TempTargets-eating-soon-temp-target)                                             |
| CARBS 5              | Sí           | Per introduir 5 g, sense bolus                                                                                                                                                   |
| CARBS 5 17:35/5:35PM | Sí           | Per introduir 5 g a les 17:35.<br/>El format d'hora acceptat depèn<br/> de l'opció d'hora (12h/24h) del telèfon.                                                     |
| EXTENDED 2 120       | Sí           | Per iniciar un bolus estès de 2 U durant 120 min.<br/>Només per a [bombes compatibles](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Sí           | Per aturar el bolus estès                                                                                                                                                        |

### Perfil

| Ordre          | Autenticació | Funció & *Resposta*                                                                                                                                           |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | No           | Perfil actual i percentatge                                                                                                                                   |
| PROFILE LIST   | No           | La llista actual de perfils a **AAPS**, p. ex.:<br/>1. Profile1<br/> 2. Profile2                                                                  |
| PROFILE 1      | Sí           | Per canviar al perfil 1 de la llista.<br/>Feu servir els números que retorna **PROFILE LIST**,<br/>no els noms dels perfils tal com els vau desar |
| PROFILE 2 30   | Sí           | Per canviar al perfil Profile2 al 30%                                                                                                                         |

The percentage must be between 30 and 250 %, as in the app. A value outside this range is refused before you are asked for the authentication code.

### Objectius temporals

| Ordre                     | Autenticació | Funció & *Resposta*                                 |
| ------------------------- | ------------ | --------------------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Sí           | Per establir l'objectiu temporal MEAL/ACTIVITY/HYPO |
| TARGET STOP/CANCEL        | Sí           | Per cancel·lar l'objectiu temporal                  |


(SMSCommands-other)=
### Altres

| Ordre            | Autenticació | Funció & *Resposta*                                                                                                                                                                                                                                                               |
| ---------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESTART          | Sí           | Reinicia AAPS. Útil si teniu problemes que normalment es resolen amb un reinici.                                                                                                                                                                                                  |
| SMS DISABLE/STOP | Sí           | To disable the SMS Remote Service, reply with the code.<br/>Keep in mind that you'll be able to reactivate it directly<br/>from the **AAPS** master smartphone only.                                                                                                  |
| HELP             | No           | Retorna totes les funcions que es poden consultar:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Envieu després l'ordre ***HELP ***FUNCIÓ****** per veure<br/>totes les opcions disponibles d'aquesta secció. |
| HELP BOLUS       |              | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                                              |

(SMSCommands-troubleshooting)=
## Resolució de problemes i preguntes freqüents

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Què _no_ podem fer amb les ordres SMS?

1)  **You cannot set a _temporary_ profile switch** (so for example, setting "profile exercise" for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profile switches can instead be set through **AAPSClient**.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the **AAPS** phone. If the high temporary target of 7.0 is started by the automation, and you cancel it (on the **AAPS** phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min by pressing on the target on the main screen, or via **Manage** → **Temp Target**. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use **AAPSClient** to do this.

### Què passa si canvio d'opinió sobre una ordre que acabo d'enviar?

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. **AAPS** will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

### Per què no he rebut cap resposta a una ordre SMS?

It could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The **AAPS** phone does not have a good Bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the **AAPS** phone).

### Cap resposta a les ordres SMS

On the caregiver phone and/or **AAPS** phone, try disabling the following options :
* **Envia com a missatge de xat** (Send as chat message) ![Desactivar l'SMS com a missatge de xat](../images/remote_control_and_following/SMSdisableChat.png)
* Si feu servir l'app Missatges d'Android o Google Missatges, desactiveu els missatges RCS:
  - obriu la conversa d'SMS concreta a Missatges
  - Seleccioneu el menú d'opcions (tres punts) a la cantonada de dalt a la dreta
  - seleccioneu «Detalls»
  - Activeu «Envia només missatges SMS i MMS» (Only send SMS and MMS messages) ![Desactivar RCS com a missatge de xat](../images/remote_control_and_following/SMSdisableRCS.png)

### Errors en executar les ordres

There are several possible reasons the command may not be successful:

* La configuració de les ordres SMS no és completa o correcta
* Heu enviat una ordre amb un format incorrecte (com «disconnect pump 45» en lloc de «pump disconnect 45»)
* Heu fet servir un codi d'autenticador incorrecte o caducat (normalment és bo esperar uns segons a tenir un codi nou si l'actual està a punt de caducar)
* El codi+PIN era correcte, però l'SMS va trigar a sortir o a arribar, i per això **AAPS** va calcular que el codi de l'autenticador havia caducat
* El telèfon d'**AAPS** està fora d'abast o sense contacte amb la bomba
* El sistema ja està ocupat lliurant un bolus

Common errors are shown in the examples below:

![imatge](../images/remote_control_and_following/remote-control-17.png)

### Com puc aturar una ordre un cop s'ha autenticat?

You can't. However, you can cancel a bolus sent by SMS on the **AAPS** phone itself, by simply cancelling it on the bolusing popup, if you are quick. Many SMS commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate unintended effects if a mistake is made.

For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

### Diversos SMS

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. This could be xDrip, for example. If so, please ensure that xDrip (or any other app) does not upload treatments to NightScout.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

(sms-commands-too-many-messages)=
### Rebo massa missatges de text de les ordres SMS. Puc reduir-ne la freqüència o fer que s'aturin?

Using SMS commands may generate a lot of automated messages from the **AAPS** phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your **AAPS** phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include WhatsApp, LINE, Telegram, and Facebook Messenger.

It is possible to disable the "Basal profile in pump updated" SMS, when the Profile change originated from Nightscout. To do this, create a file named **exactly** `do_not_send_sms_on_profile_change` in the `extra` dir of your AAPS directory.
