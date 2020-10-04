# Bomba DanaRS

*Estas instrucciones son para configurar la app y la bomba si tiene una DanaRS a partir de 2017. Visite [Bomba de insulina DanaR](./DanaR-Insulin-Pump) si en su lugar tiene una DanaR original.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* En la bomba DanaRS la app utiliza el perfil "BASAL A". Los datos existentes se sobrescriben.

* En AndroidAPS, vaya a Configuración y seleccione 'DanaRS'

* Seleccione Menú pulsando los 3 puntos en la parte superior derecha. Seleccione preferencias.

* Seleccione el dispositivo Bluetooth de DanaRS y haga clic en el número de serie de DanaRS.
  
  ![AAPS empareja con Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware v1 and v2 the default password is 1234.
  * For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. No. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Habilitar bolos extendidos en bomba

## Errores específicos de Dana RS

### Error durante la administración de insulina

En caso de que la conexión entre la AAPS y Dana RS se pierde durante la infusión del bolo de insulina (es decir, usted camina alejándose del teléfono, mientras que Dana RS esta bombeando la insulina), verá el siguiente mensaje y escuchar un sonido de alarma:

![Alarma de administración de insulina](../images/DanaRS_Error_bolus.png)

* En la mayoría de los casos, se trata sólo de un problema de comunicación y se inyecta la cantidad correcta de insulina.
* Compruebe el historial de la bomba (ya sea en la bomba o a través de la pestaña Dana > historial de bomba > bolos) para ver si es correcto bolo inyectado.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* La cantidad real es leída y grabada en la siguiente conexión. Para forzar esto pulse el icono BT en la pestaña de dana o simplemente espere a la siguiente conexión.

## Nota especial al cambiar de teléfono

Al cambiar a un teléfono nuevo, los siguientes pasos son necesarios:

* **Exportar valores** en el teléfono antiguo
  
  * Menú Hamburguesa (esquina superior izquierda de la pantalla)
  * Mantenimiento
  * Exportar ajustes
    
    ![* Exportar configuración](../images/AAPS_ExportSettings.png)

* **Transferir** ajustes del viejo al nuevo teléfono

* **Emparejamiento manual** Dana RS con el nuevo teléfono 
  * La configuración de conexión de la bomba y también se importa AAPS en su nuevo teléfono con esto ya "conoce" la bomba y por lo tanto no es necesario iniciar un escaneo bluetooth. Por tanto, el nuevo teléfono y la bomba deben estar emparejados manualmente.
* **Instalar AndroidAPS ** en el nuevo teléfono.
* **Importar ajustes** en tu nuevo teléfono 
  * Menú Hamburguesa (esquina superior izquierda de la pantalla)
  * Mantenimiento
  * Importar ajustes

## Cambio de zona horaria al viajar con la bomba Dana RS

Para obtener información sobre cómo actuar a través de zonas horarias consulte la sección [cambio de zona Horaria con bombas](../Usage/Timezone-traveling#danarv2-danars).