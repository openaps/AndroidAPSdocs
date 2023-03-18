# Manual de instrucciones de EOPatch2 (Glucomen Day Pump)

**Previsto, pero no confirmado para AndroidAPS 3.2 (próxima versión)**

El parche requiere de insulina de acción rápida del tipo U-100, como NovoRapid o Humalog. Utiliza una insulina de acción rápida adecuada para tí, según la prescripción de tu médico e inyéctate la dosis prescrita.

La dosis más pequeña de insulina que puede ponerse cuando usamos es parche es de 0.05U. Por lo tanto, el perfil basal debe ajustarse a un valor mínimo de 0.05U o más, con un intervalo de 0.05U/h, ya que de lo contrario, puede haber un error entre la cantidad total de infusión estimada en el perfil y la cantidad real de infusión en el parche. Del mismo modo, el bolo también debe fijarse con un volumen de infusión mínimo de 0.05U.

## Configuración de la bomba
1. En la pantalla de inicio de AndroidAPS, haga clic en el menú de hamburguesa de la esquina superior izquierda y vaya a Tabla de configuraciones.
1. Selecciona "EOPatch2" en la seción de las bombas.
1. Pulsa el botón de Atrás para volver a la pantalla de inicio.


![Bild1](../images/EOPatch/Bild1.png) ![Bild2](../images/EOPatch/Bild2.png)

## Configuración
Selecciona EOPATCH2 en la parte superior de la pantalla de inicio para ir a la pestaña EOPATCH2.

Selecciona el menú Preferencias de EOPatch2, pulsando sobre los tres puntos de la esquina superior derecha.

El menú Preferencias de EOPatch2 ofrece un menú para configurar tres tipos de notificaciones.

### Alertas de reservorio bajo
Aparece una advertencia cuando la cantidad de insulina restante en el reservorio alcanza el valor establecido o menos, durante el uso del parche. Se puede ajustar entre 10-50U, con incrementos de 5U.

### Recordatorio de expiración del parche
Se trata de un recordatorio para informarte del tiempo que falta para que caduque el parche actual. Puede ajustarse entre 1-24 horas, con incrementos de 1 hora. Por defecto, viene configurado en 4 horas.

### Recordatorio de zumbidos del parche
Se trata de una función de recordatorio para inyecciones distintas de la inyección basal. Si estás usando una inyección en bolo (prolongada) o una inyección basal temporal, el parche emitirá un zumbido cuando comience la inyección y otro cuando finalice. La configuración predeterminada es Desactivado.

![Bild3](../images/EOPatch/Bild3.png)

## Conexión del parche

### Ir a la pantalla de conexión del parche

Selecciona EOPATCH2 en la parte superior de la pantalla de inicio y pulsa el botón ACTIVAR PARCHE en la parte inferior izquierda.

![Bild4](../images/EOPatch/Bild4.png)

### Conexión del parche
Inserta la aguja de la jeringa en la entrada de insulina del parche y, a continuación, empujea lentamente el émbolo para inyectar la insulina. Cuando se introducen mas de 80U, el parche emite un sonido de arranque (1 zumbido) y arranca. Después de confirmar el sonido del zumbido, haz clic en el botón INICIAR EMPAREJAMIENTO de la pantalla.

[Advertencia]

- No gires la palanca de acción de la aguja hasta que se indique. De lo contrario, puedes causar graves problemas durante la inyección o con los controles de seguridad.
- La cantidad de insulina que puede inyectarse en el parche es de 80~200U. Si inyectas menos de 80U en el parche inicialmente, el parche no funcionará.
- Saque del frigorífico la insulina que vas a poner en el parche y déjala a temperatura ambiente entre 15 y 30 minutos antes. La temperatura de la insulina a inyectar debe ser de al menos 10°C.

![Bild5](../images/EOPatch/Bild5.png)

### Emparejamiento del parche
The Patch pairing screen will be displayed, and pairing will be attempted automatically. If communication is successful, the Bluetooth pairing request notification appears. Click OK and when the Bluetooth pairing request notification appears a second time with the authentication code, select OK again.

[Advertencia]

- For pairing, the patch and the smartphone must be located within 30 cm of each other.
- After the patch booting is completed, the patch will beep every 3 minutes until the pairing is complete.
- After booting the patch, the patch application must be completed via the app within 60 minutes. If the application cannot be completed within 60 minutes, the patch should be discarded.

![Bild6](../images/EOPatch/Bild6.png) ![Bild7](../images/EOPatch/Bild7.png) ![Bild8](../images/EOPatch/Bild8.png)


### patch preparation
After removing the adhesive tape of the patch, check if the needle is sticking out. If there are no problems with the patch, click NEXT.

![Bild9](../images/EOPatch/Bild9.png)

### Patch attachment
Insulin should be injected in a spot with subcutaneous fat but few nerves or blood vessels, so it is recommended to use the abdomen, arm, or thigh for the patch attachment site. Choose a patch attachment site and apply the patch after disinfecting the location.

[Advertencia]

- Make sure to straighten the side of the patch tape attached to the body evenly, so that the patch adheres completely to the skin.
- If the patch does not stick completely, air may enter between the patch and the skin, which can weaken the adhesive strength and waterproof effect of the patch.

![Bild10](../images/EOPatch/Bild10.png)

### Safety Check
When patching is complete, touch Start Safety Check. When the safety check is completed, the patch will beep once.

[Advertencia]

- For safe use, do not turn the needle action lever until the safety check has been completed.

![Bild11](../images/EOPatch/Bild11.png) ![Bild12](../images/EOPatch/Bild12.png)


### Inserting the needle
The needle is inserted by holding around the patch and turning the needle action lever more than 100° in the upward direction of the lever. There is a buzzer sound when the needle is inserted correctly. Turn the needle action lever further clockwise to release the lever. Click NEXT.

[Caution]

- If you go to the next step without the buzzer sounding, a needle insertion error warning will appear.

## Discarding the patch
Patches must be replaced in the case of low insulin levels, usage expiration, and defects. The recommended usage period for each patch is 84 hours after booting the patch.

### Discarding the patch
Select EOPATCH2 at the top of the home screen and click the DISCARD/CHANGE PATCH button at the bottom. On the next screen, click the DISCARD PATCH button. A dialog box appears to confirm once more and if you select the DISCARD PATCH button, the disposal is completed.

![Bild13](../images/EOPatch/Bild13.png) ![Bild14](../images/EOPatch/Bild14.png) ![Bild15](../images/EOPatch/Bild15.png) ![Bild16](../images/EOPatch/Bild16.png)

## Suspending and Resuming Insulin Delivery
Suspending insulin delivery also cancels both extended bolus and temporary basal. When resuming insulin delivery, the canceled extended bolus and temporary basal will not be resumed. And when insulin delivery is suspended, the patch will give a sound every 15 minutes.

### Suspending insulin delivery
Select EOPATCH2 at the top of the home screen and click the SUSPEND button at the bottom right. When you select CONFIRM in the confirmation box, a time selection box appears. If you select the CONFIRM button after selecting the time, the insulin delivery will be suspended for the set amount of time.

![Bild17](../images/EOPatch/Bild17.png) ![Bild18](../images/EOPatch/Bild18.png) ![Bild19](../images/EOPatch/Bild19.png)


### Resuming insulin delivery
Select EOPATCH2 at the top of the home screen and click the RESUME button at the bottom right. Insulin delivery will resume by selecting CONFIRM in the confirmation dialog box.

![Bild20](../images/EOPatch/Bild20.png) ![Bild21](../images/EOPatch/Bild21.png)

## Alarms/Warnings

### Alarm

Alarms are issued for emergency situations of the highest priority and require immediate action. The alarm signal does not disappear or time out until it is acknowledged. An alarm occurs when there is a problem with the patch being used, so there may be cases where the patch in use needs to be discarded and replaced with a new patch. The warning is displayed as a dialog box and switching to another screen is not possible until processing is completed.

![Bild22](../images/EOPatch/Bild22.png) ![Bild23](../images/EOPatch/Bild23.png)

The different types of alarms are explained below.

| Alarms                     | Explanation                                                                                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty reservoir            | Occurs when the patch’s reservoir runs out of insulin.                                                                                                                                                              |
| Patch expired              | Occurs when the patch usage time has expired, and no further insulin injections are possible.                                                                                                                       |
| Occlusion                  | Occurs when it appears that the patch's insulin inlet is clogged.                                                                                                                                                   |
| Power on self-test failure | Occurs when the patch finds an unexpected error during the post-boot self-test process.                                                                                                                             |
| Inappropriate temperature  | Occurs when the patch is outside the normal operating temperature range during patch application and use. To deal with this alarm, move the patch to an  appropriate operating temperature (4.4 to 37°C) condition. |
| Needle insertion Error     | Occurs when needle insertion is not normal during the patch application process. Check that the needle insertion edge of the patch and the needle activation button are in a straight line.                         |
| Patch battery Error        | Occurs just before the patch’s internal battery runs out and powers off.                                                                                                                                            |
| Patch activation Error     | Occurs when the app fails to complete the patching process within 60 minutes after the patch is booted.                                                                                                             |
| Patch Error                | Occurs when the patch encounters an unexpected error while applying and using the patch.                                                                                                                            |

### Warning

A warning occurs in a medium or low-priority situation. When a warning occurs, it is displayed as a notification in the Overview screen.

![Bild24](../images/EOPatch/Bild24.png)

The different types of warnings are explained below.

| Warnings                     | Explanation                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| End of insulin suspend       | Occurs when the time set by the user has elapsed after the insulin infusion suspension has been completed.                            |
| Low reservoir                | Occurs when the remaining amount of insulin in the patch is below the set amount.                                                     |
| Patch operating life expired | Occurs when the patch usage period is over.                                                                                           |
| Patch will expire soon       | Occurs 1 hour before the patch must be discarded.                                                                                     |
| Incomplete Patch activation  | Occurs when more than 3 minutes have elapsed due to an interruption during patch application in the stage after pairing is completed. |
| Patch battery low            | Occurs when the patch's battery is low.                                                                                               |

