# Necessary checks after update to AAPS 3.0

* **Ahora, la versión mínima requerida de Android es la 9.0**
* **Los datos no son migrados a la nueva base de datos**

  No te quejes. Es un cambio tan grande, que simplemente no es posible. Debido a esto, después de aplicar la actualización, el IOB, los COB, los tratamientos, etc. serán elimiandos. Tienes que crear un nuevo[cambio de perfil](../Usage/Profiles) y empezar con los valores de IOB y COB a 0.

  Planifica la actualización con cuidado. La mejor situación para realizar la actualización es cuando no tengamos insulina activa ni carbohidratos.

* Por favor, revisa las [Notas de revisión](../Installing-AndroidAPS/Releasenotes) para obtener más detalles de las nuevas características y cambios.


## Comprobar automatizaciones

* Se han añadido nuevas restricciones. Comprueba tus automatizaciones, especialmente si tus condiciones siguen siendo válidas.
* Si se ha perdido alguna de las condiciones, es necesario que la añadas de nuevo.
* Las automatizaciones que aparecen en rojo contienen acciones inválidas. Edítalas y establece valores válidos.

  Ejemplo: Un cambio de perfil al 140% antes se permitía, pero ahora está restringido al 130%.

## Revisa la configuración de NSClient y configura las complicaciones de sincronización

* La implementación del plugin de NSClient ha cambiado completamente.
* Dirígete a la pestaña NSClient y abre la configuración en el menú de la derecha. Una nueva preferencia "Sincronización" está ahora disponible.
* Ahora puedes realizar una selección detallada sobre qué elementos se sincronizarán con tu página de Nightscout.

## El perfil de Nightscout no puede ser enviado
* El perfil de Nightscout ha sido eliminado, descanse en paz.
* Para copiar tu perfil actual de Nightscout a un perfil local, dirígete a la página de tratamientos (se abrirá en el menú de la derecha).
* Busca el selector de perfil con un 100% y pulsa sobre la opción clonar.
* Se añade un nuevo perfil local, válido desde la fecha actual.
* Para actualizar el perfil desde Nightscout usa la opción "Clonar" (registro, no perfil) y guarda los cambios. Deberías ver "Perfil válido desde:" con la fecha actual.

(update3_0-reset-master-password)=

## Restablecer contraseña maestra
* Ahora es posible restablecer la contraseña maestra, en caso de que se nos haya olvidado.
* Es necesario añadir un fichero llamado `PasswordReset` en el directorio `/AAPS/extra` de tu teléfono.
* Restart AAPS.
* La nueva contraseña será el número de serie de la bomba de insulina que esté activa.
* For Dash: The serial number is always 4241.
* Para Eros, aparece en la pestaña del Pod, como "Número de sequencia".

## Señal de advertencia debajo de la lectura de glucosa

Beginning with Android 3.0, you might get a warning signal beneath your BG number on the main screen.

  ![Red BG warning](../images/bg_warn_red.png)

  ![Yellow BG warning](../images/bg_warn_yellow.png)

For details see [AAPS screens page](Screenshots-bg-warning-sign)


## Mensaje de error: Los datos son de bombas diferentes

   ![Mensaje de error: Los datos son de bombas diferentes](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](Config-Builder-pump). Change pump to virtual pump and back to your actual pump. This will reset the pump state.
