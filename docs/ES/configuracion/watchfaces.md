# Watchfaces 

AndroidAPS está diseñado para ser controlado por los relojes Android Wear. Para lograr esto, necesitas seleccionar la variante de compilación "fullRelease" cuando [construyes the APK](/docs/Installing-AndroidAPS/Building-APK) (o "pumpRelease" te permitirá simplemente controlar la bomba a distancia sin hacer lazos cerrados). Dentro de AndroidAPS, en ConfigBuilder debe habilitar Wear. Puede acceder a la configuración haciendo clic en el icono
de rueda dentada. Si deseas bolo, etc. desde el reloj, entonces dentro de la configuración de Wear debe habilitar "Controles desde reloj".


Hay varias esferas watchfaces para elegir que incluyen delta promedio, IOB, tasa basal de temporal activa y perfiles basales además del gráfico de lecturas de MCG. También puede usar la aplicación AAPS en el reloj para establecer un objetivo temporal, administrar un bolo, usar el asistente de bolo, cebar/rellenar y verificar el estado del lazo y la bomba. Asegúrate de que las notificaciones de AndroidAPS no estén bloqueadas en el reloj. La confirmación de la acción (por ejemplo, bolo, objetivo temporal) viene a través de una notificación que deberá deslizar y marcar. Para ir más rápido al menú de AAPS, haz doble toque en tu BG. Al hacer doble toque en la curva BG, se mostrarán BG más antiguas/más reciente BG.


Solución de problemas de la aplicación Wear:


* En Android Wear 2.0, la pantalla del reloj ya no se instala sola. Tienes que ir a la playstore en el reloj (no es lo mismo que la playstore del teléfono) y encontrarlo en la categoría de aplicaciones instaladas en tu teléfono, desde allí puedes activarlo. También habilite la actualización automática.

* A veces, ayuda a volver a sincronizar las aplicaciones con el reloj, ya que puede ser un poco lento hacerlo por sí mismo: Android Wear> Cog icon>Watch name> Resync apps.

* Habilite la depuración de ADB en Opciones de desarrollador (en teléfono), conecte el reloj a través de USB e inicie la aplicación Wear una vez en Android
Studio.


Si está utilizando otro sistema de lazo cerrado y desea ver sus detalles del mismo  en un reloj AndroidWear, o quiere ver el lazo
cerrado de su hijo, entonces puede compilar / descargar solo la APK de NSClient. Para ello, siga las instrucciones de creación de APK seleccionando la variante de compilación "NSClientRelease". Hay varias esferas watchfaces para elegir que incluyen delta promedio, IOB, tasa basal temporal  activa actual y perfiles basales + gráfico de lecturas de MCG.


Los usuarios de Pebble pueden usar la esfera de reloj de [Urchin watchface](https://github.com/mddub/urchin-cgm) para ver los datos de los lazos (si se cargan en Nightscout), pero no podrás interactuar con AndroidAPS a través del reloj. Puede elegir campos para visualizar tales como IOB y la tasa basal de temp en activo y las predicciones. Si es un lazo abierto, puede usar [IFTTT](https://ifttt.com/) para crear un applet que diga si la notificación recibida de AndroidAPS ha sido enviada o bien por notificación SMS o por notificación pushover.


