# DanaRS, Dana-i y Dana-i2

*Estas instrucciones sirven para configurar la app y tu bomba si tienes una DanaRS de 2017 o posterior, una Dana-i o una Dana-i2. Si en cambio tienes la DanaR original, visita [Bomba de insulina DanaR](./DanaR-Insulin-Pump.md).*

**La Dana-i2 se puede usar a partir de la versión 4.0 de AAPS.** Usa el mismo controlador **Dana-i/RS** que la Dana-i.

* En la bomba DanaRS/i/i2, la app usa el perfil "BASAL A". Los datos que haya ahí se sobrescriben.

    {contents} Índice
    :depth: 1
    :local: true

## Funciones de la bomba con AAPS

* Se comunica con **AAPS** por el Bluetooth propio del teléfono, sin un dispositivo de comunicación adicional.
* Los cambios de horario de verano y de zona horaria se deben hacer a mano (consulta [Viajes entre zonas horarias](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Emparejar la bomba

* Abre el **Menú** (☰) en la esquina superior izquierda de la pantalla principal de **AAPS** y selecciona **Configuración**.
* Toca **Bomba** y selecciona **Dana-i/RS**.
    
    ![Configuración > Bomba con el complemento Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Cuando está seleccionado, la tarjeta **Dana-i/RS** muestra dos botones, **Ajustes** y **Abrir complemento**:
    
    ![El complemento Dana-i/RS seleccionado en Configuración > Bomba](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Ajustes** abre los ajustes del controlador Dana-i/RS:
    
    ![Ajustes del controlador Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Abrir complemento** (o **Administrar** > **Bomba**) abre la pantalla de la bomba Dana-i/RS. Antes de emparejar una bomba, se ve así:
    
    ![Pantalla de la bomba Dana-i/RS antes del emparejamiento](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* En la pantalla de la bomba, toca **Emparejando**. **AAPS** busca bombas cercanas.

* Toca la entrada de tu bomba en la lista.
    
    ![La pantalla de emparejamiento con una bomba Dana encontrada en la búsqueda](../images/DanaRS_i_Pairing.png)

* **¡Tienes que confirmar el emparejamiento en la bomba!** Funciona igual que otros emparejamientos Bluetooth que quizá conoces (por ejemplo, el teléfono con el equipo de audio del coche).
    
    ![Dana RS: confirmación del emparejamiento](../images/DanaRS_Pairing.png)

* Sigue el proceso de emparejamiento según el tipo y el firmware de tu bomba:
    
    * En la DanaRS v1, **AAPS** pide la **Contraseña de la bomba (solo v1)**. Introduce la contraseña de tu bomba (consulta [Contraseña por defecto](#DanaRS-Insulin-Pump-default-password)).
    * En la DanaRS v3, **AAPS** te pide que pulses OK en la bomba y escribas las 2 secuencias de números y letras que aparecen en la bomba. Mantén encendida la pantalla de la bomba pulsando el botón menos hasta que termines. Luego toca **Hecho**.
    * En la Dana-i y la Dana-i2 aparece el diálogo de emparejamiento estándar de Android. Introduce el número de 6 cifras que aparece en la bomba.

* Cuando aparezca **¡Enlazado con éxito!**, toca **Hecho**.
    
    ![¡Enlazado con éxito!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Vuelves a la pantalla de la bomba, que ahora muestra el estado de tu bomba.
    
    ![Pantalla de la bomba Dana-i/RS después del emparejamiento](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* En **Ajustes**, selecciona **Velocidad del bolo** para cambiar la velocidad del bolo por defecto (12 s/U, 30 s/U o 60 s/U).

* Ajusta el paso basal de la bomba a 0,01 U/h con el menú de médico (Doctors menu) de la bomba (consulta el manual de la bomba).
* Ajusta el paso de bolo de la bomba a 0,05 U con el menú de médico (Doctors menu) de la bomba (consulta el manual de la bomba). **AAPS** lee los pasos de basal y de bolo de la bomba y los usa para cada bolo, así que un bolo siempre coincide con el paso ajustado en la bomba. La pantalla de la bomba los muestra en la fila **Paso basal/bolo**.
* Habilitar bolos extendidos en bomba

### Opciones que solo aparecen en algunos modelos

* **Bloqueo automático**: en la Dana-i2, la pantalla **Opciones de usuario** (en la pantalla de la bomba, **Administrar** > **Bomba**) tiene un interruptor **Bloqueo automático** para el ajuste de bloqueo automático de la bomba. Pulsa **Guardar opciones en la bomba** después de cambiarlo.
* **Modo fácil**: en los modelos de bomba que tienen un modo de menú fácil, la pantalla de la bomba muestra una fila **Modo fácil** con **Activado** o **Desactivado**.
* Si una Dana-i2 rechaza un bolo, **AAPS** muestra el motivo, por ejemplo *La bomba no está purgada*, *No hay suficiente insulina en el reservorio* o *El modo de sueño fácil está activado en la bomba*.

(DanaRS-Insulin-Pump-default-password)=

### Contraseña por defecto

* Para DanaRS con el firmware v1 y v2 la contraseña predeterminada es 1234.
* En la DanaRS con firmware v3 o la Dana-i, la contraseña por defecto se basa en la fecha de fabricación y se calcula como MMDD, donde MM es el mes y DD es el día en que se fabricó la bomba (por ejemplo, '0124' significa mes 01 y día 24).
    
    * En MAIN MENU, selecciona REVIEW y luego abre SHIPPING INFORMATION en el submenú
    * El número 3 es la fecha de fabricación. 
    * En v3/i, esta contraseña solo se usa para bloquear el menú de la bomba. No se usa para la comunicación y no hace falta introducirla en AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Cambiar la contraseña en la bomba

* Pulsa el botón OK de la bomba
* En el menú principal, selecciona "OPTION" (muévete a la derecha pulsando varias veces el botón de flecha)
    
    ![DanaRS: Main Menu](../images/DanaRSPW_01_MainMenu.png)

* En el menú de opciones, selecciona "USER OPTION"
    
    ![DanaRS: Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Usa el botón de flecha para bajar hasta "11. password"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Pulsa OK para introducir la contraseña antigua.

* Introduce la **contraseña antigua** (para la contraseña por defecto, consulta [arriba](#DanaRS-Insulin-Pump-default-password)) y pulsa OK
    
    ![DanaRS: introducir la contraseña antigua](../images/DanaRSPW_04_11PWenter.png)

* Si aquí introduces una contraseña incorrecta, ¡no aparecerá ningún mensaje de error!

* Pon la **nueva contraseña** (cambia los números con los botones + y - / muévete a la derecha con el botón de flecha).
    
    ![DanaRS: nueva contraseña](../images/DanaRSPW_05_PWnew.png)

* Confirma con el botón OK.

* Pulsa OK para guardar el ajuste.
    
    ![DanaRS: guardar la nueva contraseña](../images/DanaRSPW_06_PWnewSave.png)

* Baja hasta "14. EXIT" y pulsa OK para salir.
    
    ![DanaRS: Exit](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Errores específicos de Dana RS

### Error durante la administración de insulina

Si se pierde la conexión entre AAPS y la Dana RS durante la administración de un bolo (por ejemplo, te alejas del teléfono mientras la Dana RS está administrando insulina), verás el siguiente mensaje y oirás una alarma.

![Alarma de administración de insulina](../images/DanaRS_Error_bolus.png)

* En la mayoría de los casos, se trata sólo de un problema de comunicación y se inyecta la cantidad correcta de insulina.
* Comprueba en el historial de la bomba que se administró el bolo correcto. Puedes hacerlo en la propia bomba o en **AAPS**, en la pantalla de la bomba (**Administrar** > **Bomba**) > **Historial de la bomba** > **Bolos**.
* Si quieres, borra la entrada del error en [tratamientos](#screens-bolus-carbs).
* La cantidad real se lee y se registra en la siguiente conexión. Para forzarlo, toca **Actualizar** en la pantalla de la bomba, o espera a la siguiente conexión.

## Nota especial al cambiar de teléfono

Cuando cambias a un nuevo teléfono, tienes que seguir estos pasos:

* [Exportar ajustes](../Maintenance/ExportImportSettings.md) en tu teléfono antiguo
* Pasar los ajustes del teléfono antiguo al nuevo

### DanaRS v1

* **Emparejar manualmente** la Dana RS con el nuevo teléfono
* Si marcas **También reemplazar la configuración de la bomba** al importar, también se importan los ajustes de conexión de la bomba, y AAPS en tu nuevo teléfono ya «conocerá» la bomba y por eso no empezará una búsqueda Bluetooth. Por eso tienes que emparejar manualmente el nuevo teléfono y la bomba.
* Instala AAPS en el nuevo teléfono.
* [Importar ajustes](../Maintenance/ExportImportSettings.md) en tu nuevo teléfono

### DanaRS v3, Dana-i, Dana-i2

* Empieza el proceso de emparejamiento como se describe [arriba](#DanaRS-Insulin-Pump-pairing-pump).
* A veces primero tienes que borrar la información de emparejamiento en **AAPS**. En la pantalla de la bomba (**Administrar** > **Bomba**), toca **Desemparejar** y confirma **¿Restablecer información de emparejamiento?**. Luego vuelve a tocar **Emparejando**.

## Viajes entre zonas horarias con las bombas DanaRS, Dana-i y Dana-i2

Para más información sobre viajes entre zonas horarias, consulta la sección [Viajes entre zonas horarias con bombas](#timezone-traveling-danarv2-danars).

## Dónde obtener ayuda

El desarrollo del controlador de DanaRS/Dana-i/Dana-i2 lo hace la comunidad de forma **voluntaria**. Antes de pedir ayuda:

1. **Lee** la sección de esta documentación sobre el tema para confirmar cómo debe funcionar la función.
2. **Pregunta** en el canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw) o en uno de los otros [canales de la comunidad](../GettingHelp/WhereCanIGetHelp.md).
3. **Informa de un error**: busca primero en las [issues existentes](https://github.com/nightscout/AndroidAPS/issues); si el tuyo no aparece, abre una [nueva issue](https://github.com/nightscout/AndroidAPS/issues) y adjunta tus [archivos de registro](../GettingHelp/AccessingLogFiles.md).

Cuando pidas ayuda, indica la marca y el modelo de tu teléfono, la versión de Android, la versión de **AAPS** y una descripción sencilla del problema (qué cambió, cuándo funcionó por última vez).