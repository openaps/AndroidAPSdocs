# Ejemplo de instalación: Samsung S7, DanaR, Dexcom G5 y el Smartwatch de Sony

![Configuración de ejemplo](../images/SampleSetup.png)

## Descripción

En esta configuración, se utiliza el Samsung Galaxy S7 como centro de control del lazo. La aplicación Dexcom, ligeramente modificada, lee los valores de glucosa del sensor MCG Dexcom G5. Se utiliza AndroidAPS para controlar la bomba de insulina Dana R del fabricante coreano SOOIL a través de bluetooth. No se requieren otros dispositivos.

Como la aplicación Dexcom sólo ofrece opciones de alarma limitadas, la aplicación de código abierto xDrip+ se utiliza para definir no sólo alarmas altas y bajas, sino también alarmas adicionales según las necesidades individuales.

Opcionalmente se puede usar un smartwatch Android (en este ejemplo de instalación: Sony Smartwatch 3 (SWR50)) para mostrar los valores de glucosa y AndroidAPS en la muñeca. El reloj también puede ser utilizado para controlar AndroidAPS (por ejemplo, poner discretamente un bolus de comida).

El sistema funciona sin conexión. Esto significa que no hay necesidad de una conexión de datos desde el móvil a Internet para funcionar.

Sin embargo, los datos se subirán automáticamente a Nightscout "en la nube" cuando se establece una conexión de datos. De esta manera, puedes disponer de informes completos para la visita al médico o compartir los valores actuales con los miembros de la familia en cualquier momento. También es posible enviar datos a Nightscout sólo cuando se utiliza una conexión Wi-Fi (predefinida) con el fin de beneficiarse de los diferentes informes de Nightscout.

## Componentes necesarios

1. Samsung Galaxy S7
    
    * Alternativas: véase [lista de teléfonos y relojes probados ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) para AndroidAPS

2. Bomba de insulina [DanaR](http://www.sooil.com/eng/product/) o Dana RS
    
    * Alternativas: 
    * [Accu-Check Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * Puede que otras bombas estén disponibles en el futuro, vea [futuros drivers de bomba ](Future-possible-Pump-Drivers.md) para obtener detalles.

3. [Dexcom G5](https://dexcom.com)
    
    * Alternativas: ver lista de posibles [fuentes BG](../Configuration/BG-Source.rst)

4. Opcional: Sony Smartwatch 3 (SWR50)
    
    * Alternativas: véase [lista de teléfonos y relojes probados ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) para AndroidAPS (el sistema operativo deber ser Android Wear)

## Nightscout

Consulta el detallado apartado [Nightscout setup ](../Installing-AndroidAPS/Nightscout.md)

## Configuración del ordenador

Para poder crear una aplicación Android desde el código abierto AAPS, disponible libremente, necesitas Android Studio en tu ordenador o portátil (Windows, Mac, Linux). Se pueden encontrar instrucciones detalladas en [construyendo la APK ](../Installing-AndroidAPS/Building-APK.md).

Por favor, ten paciencia al instalar Android Studio, ya que el software descarga muchos datos adicionales una vez instalado en tu ordenador.

## Configuración del Smartphone

![Teléfono inteligente](../images/SampleSetupSmartphone.png)

### Comprobar firmware del smartphone

* Menú > Valores > Teléfono info > Información de software: Al menos "Android-Versión 7.0" (se ha probado con éxito en Android versión 8.0.0 Oreo-Samsung Experience Versión 9.0) 
* Para actualizar el firmware: menú > Preferencias > actualización de software

### Permitir la instalación de aplicaciones de fuentes desconocidas

Menú > Ajustes > Ajustes de seguridad > fuentes Desconocidas > deslizar hacia la derecha (= activo)

Por razones de seguridad, esta configuración debería estar inactiva una vez que la instalación de todas las aplicaciones descritas aquí se haya completado.

### Habilitar Bluetooth

1. Menú > Configuración > Conexiones > Bluetooth > control deslizante hacia la derecha (= activo)
2. Menú > Ajustes > Conexiones > Ubicación > control deslizante a la derecha (= activo)

Servicios de ubicación ("GPS") se debe activar para que Bluetooth funcione correctamente.

### Instalar la aplicación Dexcom (versión modificada)

![Aplicación Dexcom parcheada](../images/SampleSetupDexApp.png)

La aplicación de Dexcom original de Google Play Store no funcionará porque no difunde los valores a otras aplicaciones. Por lo tanto, se requiere una versión ligeramente modificada por la comunidad. Sólo esta aplicación de Dexcom modificada se puede comunicar con AAPS. Además, la aplicación Dexcom modificada se puede utilizar con todos los smartphones de Android y no sólo con los que están en la lista de compatibilidad de [Dexcom](https://www.dexcom.com/dexcom-international-compatibility). Una versión mmol/l y una versión mg/dl de la aplicación modificada de Dexcom están disponibles en https://github.com/dexcomapp/dexcomapp?files=1.

Para ello, realice los pasos siguientes en el smartphone:

1. Si la aplicación Dexcom original ya está instalada: 
    * Detener Sensor
    * Desinstalar la aplicación a través de Menú > Ajustes > Aplicaciones > Dexcom G5 Móvil > Desinstalar
2. Descargar la aplicación de Dexcom modificada (compruebe la unidad mg/dl o mmol/l de acuerdo con sus necesidades): <https://github.com/dexcomapp/dexcomapp?files=1>
3. Instale la aplicación Dexcom modificada en el smartphone (= seleccione el archivo APK descargado)
4. Inicie la aplicación Dexcom modificada, activar/calibrar el sensor según las instrucciones dadas y espere hasta que la fase de inicialización esté terminada.
5. Once the first two calibrations have been entered successfully and the modified Dexcom app shows actual glucose value setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgente baja `55mg/dl` / `3.1mmol/l` (no se puede inhabilitar)
    * Baja `OFF`
    * Alta `OFF`
    * Tasa de subida `OFF`
    * Tasa de bajada `OFF`
    * Pérdida de señal `OFF`

## Instalar AndroidAPS

1. Siga las instrucciones para [construir la APK](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Transferir](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) el APK generado a su teléfono
3. [Configurar AndroidAPS](../Configuration/Config-Builder.md) de acuerdo a sus necesidades utilizando el asistente de configuración o de forma manual
4. En esta configuración de ejemplo hemos utilizado (entre otros)

* Origen BG: `Dexcom G5 App (parcheado)` -- haga clic en el engranaje y active `Subir datos BG a NS` y `Enviar datos BG a xDrip+` (consulte [BG origen](../Configuration/BG-Source.rst))

![Ajustes de G5](../images/SampleSetupG5Settings.png)

* Cliente de NS activado (consulte [NS Client](../Configuration/Config-Builder#ns-profile) y [Configuración de Nightscout](../Installing-AndroidAPS/Nightscout.md))

## Instalar xDrip+

xDrip+ es otra aplicación de código abierto madura que ofrece innumerables posibilidades. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G5, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. Con xDrip+ las alarmas se pueden ajustar mucho más individualmente que con el software Dexcom AAPS o Nightscout (sin limitación en la selección de sonidos, diferentes alarmas dependiendo de la hora del día/noche, etc.).

1. Descarga la última versión estable de xDrip+ con tu smartphone <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - ¡no la versión de Google Play Store!
2. Instala xDrip+ seleccionando el archivo APK descargado.
3. Inicia xDrip+ y haz los siguientes ajustes (menú hamburguesa en la parte superior izquierda) 
    * Configuración > Alarmas y Alertas > Lista de nivel de Glucosa de Alertas > Crear Alertas (alta y baja) de acuerdo a sus necesidades. 
    * Las alarmas existentes pueden ser cambiadas con una pulsación larga en la alarma.
    * Configuración > Alarmas y Alertas > Calibración de Alertas: deshabilitado (recordado a través de la modificación de Dexcom app)
    * Ajustes > Hardware de Origen de Datos > 640G/EverSense
    * Ajustes > Configuración Inter-app > Aceptar Calibraciones> `ON`
    * Menú > Inicio Sensor (sólo es "formal" y no tiene función que ver con el sensor G5 que está en operaciones. Esto es necesario, de lo contrario, aparecerá un mensaje de error con regularidad.) 

Para obtener más información acerca de xDrip+, consulte aquí [BG fuente de la página](../Configuration/BG-Source.rst).

### Ejemplo de una configuración de alarma

La "Urgente alarma baja" (por debajo de los 55 mg/dl respectivamente. 3,1 mmol) es una alarma estándar de la aplicación de Dexcom modificada que no se puede inhabilitar.

![alarmas xDrip](../images/SampleSetupxDripWarning.png)

Consejo para reuniones / visitas de iglesias / cine, etc..:

Si el modo "No molestar" está activado en el Samsung Galaxy S7 (Menú > Ajustes > Sonidos y vibración > No molestar: deslizador a la derecha (= activo)), el teléfono sólo vibra durante la baja alarma urgente y no emite una advertencia acústica. Para las otras alarmas configuradas vía xDrip+ puede seleccionar si el modo silencioso debe ser ignorado (sonido acústico reproducido) o no.

## Inhabilitar opción de ahorro de energía

En tu Samsung Galaxy S7 ve al menú > Ajustes > Mantenimiento del dispositivo > Batería > Aplicaciones no supervisadas > + Añadir aplicaciones: Selecciona las aplicaciones AndroidAPS, Dexcom G5 Mobile, xDrip+ y Android Wear (si se utiliza smartwatch) uno tras otro

## Opcional: Configuración de Sony Smartwatch 3 (SWR50)

Con un Android Wear smartwatch la vida con diabetes se puede hacer aún más discreta. El reloj se puede utilizar para mostrar el nivel actual de glucosa, el estado del lazo etc. en la muñeca. El reloj también puede ser utilizado para controlar AndroidAPS (por ejemplo, poner discretamente un bolus de comida). Para hacer esto, toque dos veces el valor MCG del reloj AAPSv2. El SWR50 normalmente funciona durante un día entero hasta que la batería necesita ser recargada (mismo cargador que el Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Detalles sobre la información mostrada en el watchface se pueden encontrar [aquí](../Configuration/Watchfaces.md).

* Instale la aplicación "Android Wear" en su smartphone a través de Google Play Store y conecte el smartwatch de acuerdo con las instrucciones allí.
* En AAPS elija el menú de hamburguesa (esquina superior izquierda) > Configurar Builder > General (al final de la lista) > Usar > activar en el lado izquierdo, haga clic en el engranaje > Usar ajustes y activar `Controles desde el reloj`
* En tu reloj inteligente: Pulsación larga para cambiar el watchface y selecciona `AAPSv2`
* Si es necesario reiniciar ambos dispositivos una vez.

## Ajustes de la bomba

ver [Bomba DanaR](../Configuration/DanaR-Insulin-Pump.md)