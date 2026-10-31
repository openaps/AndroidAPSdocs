# Android Auto

**AAPS** puede enviarte información sobre tu estado actual como un mensaje, directamente a Android Auto en tu coche.

## Requisitos

**AAPS** usa una función de Android Auto que permite enviar los mensajes de las apps del móvil a la pantalla del sistema de audio del coche.

Eso significa que:

* Android debe permitir que **AAPS** muestre notificaciones y
* Como **AAPS** no es una app oficial, permite el uso de «fuentes desconocidas» en Android Auto.

![Datos de MCG de AAPS en Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Comprueba que AAPS puede mostrar notificaciones

**AAPS** siempre muestra una notificación de estado con tu glucosa actual, IOB y COB. Esta es la notificación que Android Auto muestra en el coche. No hay nada que activar en **AAPS**, pero Android debe permitir que **AAPS** muestre notificaciones.

En tu teléfono, abre **Ajustes** > **Aplicaciones** > **AAPS** > **Notificaciones** y asegúrate de que **Todas las notificaciones de AAPS** está activado.

![Todas las notificaciones de AAPS activadas](../images/android_auto_notifications_all.png)

Desplázate hacia abajo y asegúrate de que **Estado continuo** está activado: es el canal de la notificación de estado.

![Canal de notificación Estado continuo activado](../images/android_auto_ongoing_channel.png)

¡Comprueba ahora que ves la notificación de estado de **AAPS** en el teléfono antes de ir a tu coche!

![Notificación de AAPS en el teléfono](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Permitir el uso de «fuentes desconocidas» en Android Auto.

Como **AAPS** no es una app oficial de Android Auto, hay que activar las notificaciones para «fuentes desconocidas» en Android Auto. Esto se hace con el modo desarrollador, que te mostramos aquí.

Ve a tu coche y conecta tu móvil al sistema de audio del coche.

Ahora deberías ver una pantalla parecida a esta.

![Activar modo desarrollador](../images/android_auto_05.png)

Pulsa el icono de **ajustes** para empezar la configuración.

Desplázate hasta el final de la página y selecciona **ver más en el teléfono**.

![Activar modo desarrollador](../images/android_auto_06.png)

Ahora activaremos el modo desarrollador en el móvil.

La primera pantalla se ve así. Desplázate hasta el final de la página.

![Activar modo desarrollador](../images/android_auto_07.png)

Allí ves la versión de Android Auto. Toca 10 veces (en letra: diez) la versión de Android Auto. Con esta combinación oculta ya has activado el modo desarrollador.

![Activar modo desarrollador](../images/android_auto_08.png)

Confirma que quieres activar el modo desarrollador en el diálogo «¿Permitir ajustes de desarrollo?» («Allow development settings?»).

![Activar modo desarrollador](../images/android_auto_09.png)

En los **ajustes de desarrollador**, activa «Fuentes desconocidas» («Unknown sources»).

![Activar modo desarrollador](../images/android_auto_10.png)

Ahora puedes salir del modo desarrollador si quieres. Para ello, toca el menú de tres puntos arriba a la derecha.

## Mostrar notificaciones en el coche

Toca el **icono del número** en la parte inferior derecha de Android Auto en tu coche.

![icono del número - Android Auto en el coche](../images/android_auto_11.png)

Tus datos de MCG se mostrarán así:

![Datos de MCG de AAPS en Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Solución de problemas:

* Si no ves la notificación, comprueba si [permitiste que AAPS muestre notificaciones](#androidauto-check-that-aaps-can-show-notifications) en Android y si [Android Auto tiene permiso de acceso a las notificaciones](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).