# Rama en desarrollo

**Atención** : la versión dev de AndroidAPS es solo para desarrolladores y evaluadores que manejan stacktraces, revisan los archivos de registro y quizás activan el depurador para producir informes de fallos que son útiles para los desarrolladores (en resumen: ¡personas que saben lo que están haciendo sin ser asistido!). Por lo tanto, muchas características sin finalizar están deshabilitadas. Para habilitar estas funciones, ingrese al modo de **“engineering mode”** creando un archivo llamado `engineering_mode` en el mismo directorio donde encontraría los archivos de registro. Habilitar el modo de ingeniería podría romper el lazo cerrado por completo.

***

La versión más estable de AndroidAPS para usar es la [rama Master](https://github.com/MilosKozak/AndroidAPS/tree/master). Se aconseja permanecer en la rama Master mientras completas los Objetivos y practicas el lazo cerrado.

Sin embargo, la [rama Dev](https://github.com/MilosKozak/AndroidAPS/tree/dev) es un buen lugar para ver qué características se están probando y para ayudar a resolver los errores y brindar comentarios sobre cómo funcionan las nuevas funciones en la práctica. A menudo las personas probarán la rama Dev en un teléfono antiguo y la bomba hasta que estén seguros de que es estable; cualquier uso de la misma es bajo su propio riesgo.

A continuación, se enumera un breve resumen de algunos de los cambios en las características anteriores o el desarrollo de nuevas funciones que se encuentran actualmente en la rama Dev, y enlaces a cuestiones principales a compartir (si aplica)

**Super Micro Bolus (SMB)**<br>

Se puede leer más en Super Micro Bolus (SMB) en los [documentos OpenAPS Super Micro Boluses (SMB)](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

Recuerde que está eligiendo probar una función que aún está en desarrollo. Hágalo bajo su propio riesgo y con la debida diligencia para mantenerse a salvo.

Deberías haber ejecutado el lazo cerrado básico durante más de cuatro semanas (habiendo completado el Objetivo 7), y estar muy atento a todos los tipos de situaciones en las que tu APS podría fallar.

Es posible que deba ajustar su configuración para permitir que SMB funcione de manera efectiva. Una buena manera de comenzar es aumentar su IOB máximo a un bolo de comida normal + 3 veces el máximo basal diaria. Pero permanezca vigilante y ajuste la configuración con cuidado.

<br><br><br>
Al igual que con todas las actualizaciones, el código anterior se ha limpiado, mejorado y depurado.
<br><br>

Si encuentra un error o cree que hay algún error al usar la rama Dev, entonces vea la pestaña de [problemas/barra issues](https://github.com/MilosKozak/AndroidAPS/issues) para verificar  si alguien más lo ha encontrado, o añádalo usted mismo de no ser así. Cuanta más información pueda compartir aquí, mejor (no olvide que puede necesitar compartir sus [logs](https://github.com/Lillycgm/AndroidAPSdocs/blob/master/docs/ES/Uso/Acceder%20a%20los%20logs.md) ). Las nuevas características también se pueden discutir en la sala de [gitter](https://gitter.im/MilosKozak/AndroidAPS).
<br><br>

Si desea estar actualizado en la sucursal de Dev, puede seguir los mismos pasos que se describen en la página [Actualizar a la nueva versión](https://github.com/Lillycgm/AndroidAPSdocs/blob/master/docs/ES/Instalando%20AndroidAPS/Actualizar%20a%20una%20nueva%20versi%C3%B3n.md). Solo tiene que cambiar al correspondiente "dev" -Branch en Android Studio. Ver Seleccionar rama para más detalles. 

 
