# Bomba DanaRS

*Estas instrucciones son para configurar la app y la bomba si tiene una DanaRS a partir de 2017. Visite [Bomba de insulina DanaR](./DanaR-Insulin-Pump) si en su lugar tiene una DanaR original.*

**DanaRS with new firmware v3 cannot currently be used with AndroidAPS!**

* En la bomba DanaRS la app utiliza el perfil "BASAL A". Los datos existentes se sobrescriben.

* En AndroidAPS, vaya a Configuración y seleccione 'DanaRS'

* Seleccione Menú pulsando los 3 puntos en la parte superior derecha. Seleccione preferencias.

* Seleccione el dispositivo Bluetooth de DanaRS y haga clic en el número de serie de DanaRS.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Seleccione la contraseña de la bomba e introduzca su contraseña. (La contraseña predeterminada es 1234)   
  **Hay que confirmar el emparejamiento en la bomba! ** Es la forma que se utiliza para otros emparejamientos bluetooth (es decir, smartphone y audio de autos).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Seleccione velocidad de bolo, para cambiar la velocidad predeterminada utilizada (12seg por 1u, 30seg por 1u o 60seg por 1u).

* Reinicia tu dispositivo.

* Establezca la tasa basal en la bomba en 0,01 U/h mediante el menú de Doctores (consulte la guía del usuario de la bomba)

* Habilitar bolos extendidos en bomba

## Errores específicos de Dana RS

### Error durante la administración de insulina

En caso de que la conexión entre la AAPS y Dana RS se pierde durante la infusión del bolo de insulina (es decir, usted camina alejándose del teléfono, mientras que Dana RS esta bombeando la insulina), verá el siguiente mensaje y escuchar un sonido de alarma:

![Alarma de administración de insulina](../images/DanaRS_Error_bolus.png)

* En la mayoría de los casos, se trata sólo de un problema de comunicación y se inyecta la cantidad correcta de insulina.
* Compruebe el historial de la bomba (ya sea en la bomba o a través de la pestaña Dana > historial de bomba > bolos) para ver si es correcto bolo inyectado.
* Suprima la entrada de error en la pestaña CP si lo desea.
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