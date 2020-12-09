# Bomba DanaRS

*Estas instrucciones son para configurar la app y la bomba si tiene una DanaRS a partir de 2017. Visite [Bomba de insulina DanaR](./DanaR-Insulin-Pump) si en su lugar tiene una DanaR original.*

**El nuevo firmware de Dana RS v3 se puede utilizar desde AndroidAPS versión 2.7 en adelante.**

* En la bomba DanaRS la app utiliza el perfil "BASAL A". Los datos existentes se sobrescriben.

## Pairing pump

* En AndroidAPS, vaya a Configuración y seleccione 'DanaRS'

* Seleccione Menú pulsando los 3 puntos en la parte superior derecha. Seleccione preferencias.

* Seleccione el dispositivo Bluetooth de DanaRS y haga clic en el número de serie de DanaRS.
    
    ![AAPS empareja con Dana RS](../images/AAPS_DanaRSPairing.png)

* Seleccione la contraseña de la bomba e introduzca su contraseña.

### Default password

* Para DanaRS con el firmware v1 y v2 la contraseña predeterminada es 1234.
* Para DanaRS con firmware v3 la contraseña predeterminada es una combinación de mes de producción y fecha de producción (por ejemplo, mes 01 y día 24). Open main menu on pump > review > information. Number 3 is production date.

* **¡Debe confirmar el emparejamiento en la bomba! ** Esa es la forma en que está acostumbrado a otros emparejamientos de bluetooth (es decir, móvil y audio del coche).
    
    ![Emparejamiento de confirmación Dana RS](../images/DanaRS_Pairing.png)

* Seleccione velocidad de bolo, para cambiar la velocidad predeterminada utilizada (12seg por 1u, 30seg por 1u o 60seg por 1u).

* Reinicia tu dispositivo.
* Establezca la tasa basal en la bomba en 0,01 U/h mediante el menú de Doctores (consulte la guía del usuario de la bomba)
* Habilitar bolos extendidos en bomba

## Change password on pump

* Press OK button on pump
* In main menu select "OPTION" (move right by pressing arrow button several times)
    
    ![DanaRS Main Menu](../images/DanaRSPW_01_MainMenu.png)

* In options menu select "USER OPTION"
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Use arrow button to scroll down to "11. password"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Press OK to enter old password.

* Enter **old password** (Default password see [above](#default-password)) and press OK
    
    ![DanaRS Enter old password](../images/DanaRSPW_04_11PWenter.png)

* If wrong password is entered here there will be no message indicating failure!

* Set **new password** (Change numbers with + & - buttons / Move right with arrow button).
    
    ![DanaRS New password](../images/DanaRSPW_05_PWnew.png)

* Confirm with OK button.

* Save by pressing OK button again.
    
    ![DanaRS Save new password](../images/DanaRSPW_06_PWnewSave.png)

* Move down to "14. EXIT" and press OK button.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

## Errores específicos de Dana RS

### Error durante la administración de insulina

En caso de que la conexión entre la AAPS y Dana RS se pierde durante la infusión del bolo de insulina (es decir, usted camina alejándose del teléfono, mientras que Dana RS esta bombeando la insulina), verá el siguiente mensaje y escuchar un sonido de alarma:

![Alarma de administración de insulina](../images/DanaRS_Error_bolus.png)

* En la mayoría de los casos, se trata sólo de un problema de comunicación y se inyecta la cantidad correcta de insulina.
* Compruebe el historial de la bomba (ya sea en la bomba o a través de la pestaña Dana > historial de bomba > bolos) para ver si se ha administrado el bolo correctamente.
* Eliminar entrada de error en la pestaña de [tratamientos](../Getting-Started/Screenshots#carb-correction) si lo desea.
* La cantidad real será leída y grabada en la siguiente conexión. Para forzar esto pulse el icono BT en la pestaña de dana o simplemente espere a la siguiente conexión.

## Nota especial al cambiar de teléfono

Al cambiar a un teléfono nuevo, los siguientes pasos son necesarios:

* [Exportar valores](../Usage/ExportImportSettings#export-settings) en el teléfono antiguo
* Transfer settings from old to new phone
* **Manually pair** Dana RS with the new phone
    
    * Como también se importa la configuración de conexión de la bomba, AAPS ya "conoce" la bomba en su nuevo dispositivo y por lo tanto no es necesario iniciar un escaneo bluetooth. Por tanto, el nuevo teléfono y la bomba deben ser emparejados manualmente.
* Install AndroidAPS on the new phone.
* [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone

## Cambio de zona horaria al viajar con la bomba Dana RS

Para obtener información sobre cómo actuar a través de zonas horarias consulte la sección [cambio de zona Horaria con bombas](../Usage/Timezone-traveling#danarv2-danars).