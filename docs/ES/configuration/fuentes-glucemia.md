# Fuentes de datos de glucemia

**Para los usuarios de Dexcom**<Br>

_Si usa xdrip ..._<br>

*	Si aún no está configurado, descargue [xdrip](https://github.com/NightscoutFoundation/xDrip) y siga las instrucciones en nightscout ([G4 sin share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 con share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
*	En xdrip, vaya a Configuración> Compatibilidad de Interapp> Transmitir datos localmente y seleccione ON.
*	En xdrip, vaya a Configuración> Compatibilidad de Interapp> Aceptar tratamientos y seleccione OFF.
*	Si desea poder usar AndroidAPS para calibrar, en xdrip vaya a Configuración> Compatibilidad de Interapp> Aceptar calibraciones y seleccione ON. También es posible que desee revisar las opciones en Configuración> Configuración menos común> Configuración de calibración avanzada.
*	Seleccione xdrip en ConfigBuilder (configuración en AndroidAPS).

_Si usa la aplicación Dexcom G5 ..._<br>

*	Sólo dev.
*	Descarga el apk de [aquí](https://github.com/dexcomapp/dexcomapp), solo esta versión funciona ya sea mg/dl o mmol/l.
*	Desinstale la aplicación original de Dexcom, si todavía no lo ha hecho.
*	Seleccione la aplicación Dexcom G5 en ConfigBuilder

_Si usa un cable OTG ('tradicional' Nightscout) ..._<br>

*	Si aún no está configurado, descargue la aplicación Nightscout Uploader de Play Store y siga las instrucciones en [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
*	En las preferencias de AndroidAPS, ingrese su sitio web nightscout y el APIsecret.
*	Seleccione NSClient en ConfigBuilder (configuración en AndroidAPS).

**Para usuarios de Libre**<Br>

_Si usa xdrip ..._<br>

*	Si aún no está configurado, descargue xdrip y siga las instrucciones en [LimiTTEer](https://github.com/JoernL/LimiTTer),  [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) o [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
*	En xdrip, vaya a Configuración> Compatibilidad de Interapp> Transmitir datos localmente y seleccione ON.
*	En xdrip, vaya a Configuración> Compatibilidad de Interapp> Aceptar tratamientos y seleccione OFF.
*	Si desea poder usar AndroidAPS para calibrar, en xdrip vaya a Configuración> Compatibilidad de Interapp> Aceptar calibraciones y seleccione ON. También es posible que desee revisar las opciones en Configuración> Configuración menos común> Configuración de calibración avanzada.
*	Seleccione xdrip en ConfigBuilder (configuración en AndroidAPS).

_Si usa Glimp ..._<br>

*	Si aún no está configurado, descargue Glimp y siga las instrucciones en [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
*	Seleccione Glimp en ConfigBuilder (configuración en AndroidAPS).

**Para usuarios de MM640g o MM630g**<Br>

*	Si aún no está configurado, descargue [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) y siga las instrucciones en [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
*	En el cargador de la serie 600, vaya a Configuración> Enviar a Xdrip + y seleccione ON (marque).
*	Seleccione MM640g en ConfigBuilder (configuración en AndroidAPS).

**Para usuarios de otros CGM cargados en nightscout**<Br>
Si tiene alguna otra configuración de CGM que envíe sus datos a [Nightscout](http://www.nightscout.info) entonces

*	En las preferencias de AndroidAPS, ingrese su sitio web nightscout y el APIsecret.
*	Seleccione NSClient en ConfigBuilder (configuración en AndroidAPS)
