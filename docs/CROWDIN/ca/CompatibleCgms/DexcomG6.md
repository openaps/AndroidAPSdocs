# Dexcom G6 i ONE

## Primer, el més bàsic

-   Seguiu les recomanacions generals d'higiene del CGM i de col·locació del sensor [aquí](../CompatibleCgms/GeneralCGMRecommendation.md).

## Consells generals per fer el llaç amb el G6 i el ONE

- Els transmissors recents es diuen Firefly. Els sensors no es poden reiniciar sense treure el transmissor, i el transmissor no es pot restablir. A més, no generen dades en brut (raw).

- Si reinicieu sensors, assegureu-vos que esteu preparats per calibrar i vigileu les variacions.

- Una inserció prèvia (pre-soak) del G6/ONE amb el calibratge de fàbrica probablement donarà variacions en els resultats. Si feu una inserció prèvia (pre-soak), per tenir els millors resultats probablement haureu de calibrar el sensor.

Llegiu-ne més a l'[article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicat per Tim Street a [www.diabettech.com](https://www.diabettech.com).

## Si feu servir el G6 o el ONE amb xDrip

- Si encara no el teniu configurat, descarregueu [xDrip](https://github.com/NightscoutFoundation/xDrip) i ajusteu-ne la configuració seguint la pàgina [Configuració de xDrip](../CompatibleCgms/xDrip.md).
- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).
- Els transmissors Dexcom G6 i ONE es poden connectar alhora al receptor Dexcom (o bé a la bomba t:slim) i a una aplicació del telèfon.
- Si feu servir xDrip com a receptor, primer desinstal·leu l'aplicació de Dexcom. **No podeu connectar xDrip i l'aplicació de Dexcom al transmissor alhora!**
- Si necessiteu Clarity i voleu aprofitar les alarmes de xDrip, feu servir [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (només G6) amb difusió local (local broadcast) a xDrip.
- També podeu fer servir xDrip com a aplicació complementària de l'aplicació oficial de Dexcom, però pot ser que les lectures de glucèmia arribin amb retard. Per llegir les notificacions de l'aplicació de Dexcom sense xDrip, com a font de dades de confiança, feu servir el [Lector de notificacions](#DexcomG6-notification-reader).
- Amb els transmissors actuals, xDrip sempre fa servir l'[algoritme natiu](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) del transmissor; no hi ha cap motiu per desactivar-lo. Els [reinicis preventius](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) només funcionen amb transmissors antics (firmware 1.6.5.25 o anterior), on calen per evitar que el sensor s'aturi després de 10 dies; els transmissors recents (Firefly) no en fan cas. Vegeu [Reiniciar un sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) abans d'intentar cap reinici.
- Tot el que té a veure amb el sensor i el transmissor està documentat a la [pàgina de Dexcom de xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si feu servir el G6 amb Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA ara és una versió molt antiga de l'aplicació i no es pot actualitzar.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) admet la difusió local (local broadcast) a AAPS i/o a xDrip

-   Aquesta aplicació us permet fer servir el Dexcom G6 amb qualsevol telèfon intel·ligent Android.
-   Desinstal·leu l'aplicació original de Dexcom o l'aplicació de Dexcom modificada si abans en fèieu servir alguna (**no atureu** el sensor que està en marxa)
-   Instal·leu l'apk descarregat
-   Introduïu el codi del sensor i el número de sèrie del transmissor a l'aplicació modificada.
-   A la configuració del telèfon, aneu a aplicacions > Dexcom G6 > permisos > permisos addicionals i premeu 'Accés a l'aplicació Dexcom' (Access Dexcom app).
-   Al cap de poc temps, BYODA hauria de captar el senyal del transmissor.

### Configuració per a AAPS

-   Seleccioneu **BYODA** a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).

-   Si no rebeu cap valor, seleccioneu qualsevol altre origen de dades i després torneu a seleccionar **BYODA** perquè es demanin els permisos per establir la connexió entre AAPS i la difusió de BYODA.

### Configuració de xDrip

-   Seleccioneu '640G/Eversense' com a origen de dades.
-   Cal executar l'ordre 'start sensor' a xDrip per rebre valors. Això no afecta el sensor actual controlat per Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## Si feu servir el G6 o el ONE amb el Lector de notificacions

L'aplicació oficial de Dexcom G6 o ONE continua connectada al transmissor. **AAPS** llegeix el valor de glucèmia directament de la notificació de l'aplicació de Dexcom, sense cap altra aplicació entremig.

```{admonition} Trusted data source
:class: note
Les lectures de les aplicacions Dexcom G6 i ONE són una [font de glucèmia de confiança](#GettingStarted-TrustedBGSource): els SMB es poden permetre sempre.
```

Comparat amb BYODA o xDrip, el Lector de notificacions té limitacions:

- **No hi ha fletxa de tendència** ni **recuperació de dades (backfill)**: les lectures perdudes mentre el telèfon estava apagat o fora d'abast es perden.
- Cada lectura rep l'hora en què va aparèixer la notificació, no l'hora exacta de la lectura del sensor.
- Només es llegeixen valors entre 40 i 405 mg/dl (2,2 i 22,5 mmol/l). "LOW" i "HIGH" no es llegeixen.

### Configureu l'aplicació de Dexcom

-   Mantingueu l'aplicació de Dexcom instal·lada i connectada al transmissor.
-   Assegureu-vos que l'aplicació de Dexcom mostra el valor actual de glucèmia a la seva notificació. Les seves notificacions han de continuar visibles: no les silencieu ni les amagueu.
-   Feu servir les mateixes unitats de glucèmia (mg/dl o mmol/l) a l'aplicació de Dexcom que a **AAPS**. Si no, **AAPS** no pot llegir el valor.

### Configuració a AAPS

-   Seleccioneu **Lector de notificacions** a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source) i confirmeu el canvi.

    ![Origen glucèmia: Lector de notificacions seleccionat](../images/NotificationReader_BgSource.png)

-   De tornada a la pantalla principal, **AAPS** mostra **Permisos necessaris**. Al costat d'**Accés a les notificacions**, premeu **Concedir**.

    ![Permisos necessaris: Accés a les notificacions](../images/NotificationReader_Permissions.png)

-   Android obre la seva llista d'accés a les notificacions (el nom depèn de la versió d'Android, per exemple *Lectura, resposta i control de notificacions*). Seleccioneu **AAPS**, activeu **Permet l'accés a les notificacions** i confirmeu amb **Permet**.

    ![Android demana permetre l'accés a les notificacions per a AAPS](../images/NotificationReader_AllowDialog.png)

    Android avisa que **AAPS** podria llegir totes les vostres notificacions. **AAPS** només llegeix les notificacions de les aplicacions de CGM compatibles i no fa cas de totes les altres.

    ![Accés a les notificacions permès per a AAPS](../images/NotificationReader_AccessOn.png)

-   Si **Permet l'accés a les notificacions** està en gris (*Controlat per una opció de configuració restringida*), Android ho bloqueja perquè **AAPS** no s'ha instal·lat des de Play Store. Obriu la informació de l'aplicació **AAPS** (manteniu premuda la icona d'**AAPS** > **Informació de l'aplicació**), premeu el menú de tres punts a dalt a la dreta i seleccioneu **Permet la configuració restringida**. Després torneu a la pantalla d'accés a les notificacions i permeteu-lo.
-   Les lectures apareixen a **AAPS** quan l'aplicació de Dexcom mostra un valor nou.

```{warning}
Si la notificació de l'aplicació de Dexcom mostra més d'un valor de glucèmia, o cap, **AAPS** no fa cas d'aquesta notificació.
```


(DexcomG6-troubleshooting-g6)=
## Resolució de problemes del G6 i el ONE

### Resolució de problemes específica del Dexcom G6/ONE

-   Desplaceu-vos fins a **Troubleshooting** [aquí](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Resolució de problemes general

Trobareu la resolució de problemes general dels CGM [aquí](#general-cgm-troubleshooting).

### Transmissor nou amb un sensor en marxa

Si heu de canviar el transmissor durant una sessió de sensor en marxa, podeu provar de treure el transmissor sense fer malbé el suport del sensor. Trobareu un vídeo [aquí](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si en canvi trieu [aquesta solució](https://youtu.be/tx-kTsrkNUM), aneu amb compte de no [fer malbé els contactes del sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) amb la tira.
