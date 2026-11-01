(generaltroubleshooting)=

# Solucionando problemas

**Empieza aquí cuando algo no funciona.** La información para solucionar problemas está en muchas páginas de la documentación. Esta página la reúne: es una sola colección de enlaces, ordenados por tema, que te ayuda a resolver los problemas más comunes.

Si no encuentras tu respuesta abajo, mira también:

* las [Preguntas frecuentes](../UsefulLinks/FAQ.md) para respuestas a preguntas comunes, y
* la guía [Ajustar el perfil de AAPS](ProfileTuning.md) si tu lazo funciona pero tu control de la glucosa debe mejorar.

```{admonition} Still stuck?
:class: tip
Si ninguno de los enlaces resuelve tu problema, mira [¿Dónde puedo obtener ayuda?](WhereCanIGetHelp.md) para preguntar a la comunidad (Facebook, Discord), o envía tus [archivos de log](AccessingLogFiles.md) a los desarrolladores.
```

---

(generaltroubleshooting-aaps-app)=

## App AAPS

### Compilar y actualizar

* Si la compilación falla, mira [Si la compilación falla](#building-aaps-troubleshooting): allí está la sección de solución de problemas de cada método de compilación:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Compilación en el navegador](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Almacén de claves perdido o nuevo: [Reinstalar AAPS](#reinstall-aaps)
* Actualizar **AAPS**: [con AAPS Builder](#aaps-builder-updates), [con una compilación en el navegador (fork)](#update-browser-build-troubleshooting), [con Android Studio](#update-computer-build-troubleshooting)

### Instalación

* [Aviso de Google Play Protect](#transferring-installing-play-protect-warning): la app se marca como no segura.
* Instalación **bloqueada** con un mensaje sobre un desarrollador no verificado: mira [Verificación de desarrolladores de Android](#android-developer-verification) para ver los métodos de instalación gratuitos.

### Ajustes

* [Perfil: «La tasa basal no es compatible con la bomba actual»](#your-aaps-profile-basal-not-compatible)
* [Bomba: «Los datos proceden de una bomba diferente»](#config-builder-wrong-pump-data)
* [Nightscout Client](TroubleshootingNsClient.md)
* **"AAPS settings cannot be read"** at start: the settings are encrypted with a key that Android keeps for **AAPS**, and that key does not open them any more, for example after the key store of the phone was reset. While this screen is shown, **AAPS** is not running and does not control the pump. Tap **Retry**: it closes and restarts **AAPS**. If that does not help, restart the phone. Use **Start fresh** only when nothing else helps: it sets the unreadable settings file aside (it is renamed and kept) and starts **AAPS** with empty settings. Then import your last [settings export](../Maintenance/ExportImportSettings.md).

### Uso

* [Valores de carbohidratos erróneos (absorción lenta de carbohidratos)](#CobCalculation-detection-of-wrong-cob-values)
* [Automatizaciones](#automations-troubleshooting)
* [Lazo cerrado completo](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Problemas relacionados con Bluetooth

Para problemas conocidos con conexiones Bluetooth, cortes de conexión de la bomba o del pod, o problemas de activación y conexión, consulta [Solución de problemas de Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Problemas relacionados con Android

### Optimización de batería

**AAPS** puede ayudarte a encontrar los ajustes correctos para tu teléfono: abre el **menú** (☰) > **Acerca de** y toca **¿No matar mi aplicación?**. Abre las instrucciones para la marca de tu teléfono en [Don't kill my app](https://dontkillmyapp.com/). El [asistente de configuración](#setup-wizard-bluetooth-battery-optimisation) también te pide desactivar la optimización de batería para **AAPS** y Bluetooth.

Android tiene ajustes de ahorro de batería que están activados por defecto. Estos ajustes suspenden o pausan automáticamente las aplicaciones que el sistema no necesita para funcionar. Así ahorran la energía que gastan las apps que no tienen que estar siempre en marcha.

Si está activada, es muy probable que cause problemas en **AAPS** y en otras apps de apoyo como **xDrip**.

Es importante desactivar la optimización de batería para que **AAPS** y las otras apps de apoyo estén activas todo el tiempo.

Según la marca y el modelo de tu teléfono, puede haber más de un lugar y más de un ajuste donde hay que desactivarla.

***NOTA:** Sigue los pasos de abajo para desactivar la optimización de batería del servicio Bluetooth, si tu teléfono tiene esta opción. Puedes usar los mismos pasos para desactivarla en **AAPS** y en otras apps, pero las capturas de pantalla solo muestran cómo hacerlo para el servicio Bluetooth.*

#### Teléfonos Pixel (Android original)

* Ve a los ajustes de Android y selecciona «Aplicaciones».

  ![Ajustes de Android¦Aplicaciones](../images/troubleshooting/pixel/01_androidsettings.png)

* Selecciona «Ver todas las aplicaciones»

  ![Ver todas las aplicaciones](../images/troubleshooting/pixel/02_apps.png)

* En el menú de la derecha, selecciona «Mostrar sistema».

  ![Mostrar aplicaciones del sistema](../images/troubleshooting/pixel/03_allapps.png)

* Ahora busca y selecciona la app «Bluetooth».

  ![App Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Toca «Uso de batería de la aplicación» y selecciona «Sin restricciones» (en algunas versiones antiguas de Android se llama «No optimizada»).

  ![Optimización de batería de Bluetooth](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Teléfonos Samsung

* Ve a los ajustes de Android y selecciona «Aplicaciones»

* En el icono que cambia el orden de la lista (1), selecciona «Mostrar aplicaciones del sistema» (2).

  ![Filtro de aplicaciones](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Mostrar aplicaciones del sistema](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Ahora busca la app Bluetooth y selecciónala para ver sus ajustes.

  ![App Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Selecciona «Batería».

  ![Batería](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Ponla en «Sin restricciones» (en algunas versiones antiguas de Android se llama «No optimizada»).

  ![Sin restricciones](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Teléfonos Huawei

Mira esta guía sobre [Bluetooth y optimización de batería en Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Monitor continuo de glucosa (MCG)

Enlaces útiles sobre problemas conocidos de los MCG y los pasos para resolverlos.

* [General](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 con Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip: no hay datos de MCG](#xdrip-identify-receiver)
* [xDrip: solución de problemas con Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Bombas

Enlaces útiles sobre problemas conocidos de las bombas y los pasos para resolverlos

* [Accu-Chek Combo](#combov2-tips-for-basic-usage)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [CareLevo](#carelevo-alarms-and-notifications)
* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Diaconn G8](#diaconn-g8-bluetooth-troubleshooting)
* [EOPatch2](#eopatch2-alarms-and-warnings)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)
* [Medtrum Nano](#medtrum-nano-troubleshooting)
* [Omnipod DASH](#omnipod-dash-troubleshooting)
* [Omnipod Eros](#OmnipodEros-troubleshooting)

---

(generaltroubleshooting-phones)=

## Teléfonos

Enlaces útiles sobre problemas conocidos de los teléfonos y los pasos para resolverlos

* [Lista de teléfonos y configuraciones de dispositivos probados](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Bluetooth y optimización de batería en Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Control remoto

* [AAPSClient y control remoto (emparejamiento, órdenes no recibidas)](#client-master-control-troubleshooting)
* [Problemas con el «Token de acceso de Nightscout»](#remotecontrol-nightscout-access-token)
* [Comandos SMS](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Relojes inteligentes

Enlaces útiles sobre problemas conocidos de los relojes inteligentes y los pasos para resolverlos

* [Solución de problemas de la app Wear](#Watchfaces-troubleshooting-the-wear-app)
* [El reloj y el teléfono no se comunican](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Compilar la app Wear](#building-aaps-wear-os-troubleshooting)
