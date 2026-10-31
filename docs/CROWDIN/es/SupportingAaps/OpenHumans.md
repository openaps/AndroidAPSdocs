# Open Humans Uploader

## Dona tus datos a la ciencia

¡Puedes ayudar a la comunidad donando tus datos a proyectos de investigación científicos! Esto ayuda a los científicos a devolver lo recibido, a desarrollar nuevas ideas científicas y a ampliar la mente abierta de los sistemas de lazo cerrado de código abierto. AAPS está listo para sincronizar tus datos con [Open Humans](https://www.openhumans.org), una plataforma que te permite subir, conectar y guardar tus datos personales, como datos genéticos, de actividad y de salud.

Mantienes el control total sobre lo que pasa con tus datos y sobre los proyectos que quieres apoyar dándoles acceso a tus datos. Según el proyecto al que te unas, este evalúa y usa los datos de formas y en medidas diferentes.

Se subirán los siguientes datos a tu cuenta de Open Humans:

- Valores de glucosa
- Eventos del portal de cuidados (excepto notas)
- Bolos extendidos
- Cambios de perfil
- Total de dosis diaria
- Tasas basales temporales
- Objetivos temporales
- Preferencias
- Versión de la aplicación
- Modelo de dispositivo
- Dimensiones de la pantalla

No se suben datos secretos o privados, como tu URL de Nightscout o tu API secret.

## Configuración

1. Crea tu cuenta en [Open Humans](https://www.openhumans.org) si todavía no la tienes. Si quieres, puedes usar tu cuenta de Google o de Facebook que ya tienes.
2. Activa el complemento **Open Humans** en [**Configuración** > **Comunicación**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans activado en Configuración > Comunicación](../images/OHUploader1.png)

3. Toca **Ajustes** en la tarjeta **Open Humans**. Puedes limitar las subidas a los momentos en que el teléfono usa wifi (**Sólo WiFi**) y/o se está cargando (**Sólo durante la carga**).

![Ajustes de Open Humans con Sólo WiFi y Sólo durante la carga](../images/OHUploader_settings.png)

4. Toca **Abrir complemento** en la tarjeta **Open Humans** y después toca **Configuración**.

![Pantalla del complemento Open Humans con el botón Configuración](../images/OHUploader_setup.png)

5. En la pantalla **Bienvenido a Open Humans**, toca **Siguiente**. Lee con atención la pantalla **Consentimiento**: muestra los términos de uso y qué datos se suben y cuáles no.
6. Activa **Entiendo y acepto.** (1) y toca **Iniciar sesión en Open Humans** (2).

![Pantallas Bienvenido y Consentimiento de Open Humans en AAPS](../images/OHUploader2.png)

7. Se abrirá el sitio web de Open Humans. Inicia sesión con tus datos de acceso.
8. Decide si quieres ocultar tu participación en AAPS Uploader en tu perfil público de Open Humans (1).
9. Haz clic en **Authorize project** (2) (autorizar el proyecto).

![Inicio de sesión y autorización del proyecto en el sitio web de Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Las capturas de pantalla de arriba muestran una versión anterior del sitio web de Open Humans y todavía usan el nombre antiguo del proyecto **AndroidAPS Uploader**. Los pasos son los mismos.
```

10. De vuelta en **AAPS**, la pantalla **Toques finales** te pregunta si quieres continuar. Toca **Continuar**.
11. Espera hasta que aparezca **¡Terminamos!** y después toca **Cerrar**. A partir de ahora, tu teléfono sube datos en segundo plano de vez en cuando.
12. La pantalla del complemento **Open Humans** muestra ahora tu **ID de miembro del proyecto**. Toca **Subir ahora** si quieres empezar una subida enseguida.
13. Toca **Cerrar sesión** si quieres dejar de subir datos a Open Humans.
14. Una notificación de Android te informa cuando se está haciendo una subida.

![Open Humans: terminar la configuración](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
La captura de pantalla de arriba es de una versión anterior de **AAPS**. En **AAPS** 4 las pantallas de confirmación son **Toques finales** y **¡Terminamos!**, no hay tamaño de cola, y los botones son **Subir ahora** y **Cerrar sesión**.
```

15. Puedes gestionar tus datos iniciando sesión en el [sitio web de Open Humans](https://www.openhumans.org).

![Open Humans: gestionar los datos](../images/OHWeb.png)

## Oportunidades para compartir

### [El proyecto «OPEN»](https://www.open-diabetes.eu/)

El proyecto «OPEN» reúne a un consorcio internacional e intersectorial de pacientes innovadores, médicos, científicos sociales, informáticos y organizaciones de defensa de pacientes para investigar varios aspectos de los sistemas de páncreas artificial «hazlo tú mismo» (DIY APS), que usa un número cada vez mayor de personas con diabetes. Para más detalles, consulta su [sitio web](https://www.open-diabetes.eu/).

En septiembre de 2020, el proyecto «OPEN» lanzó una [encuesta](https://survey.open-diabetes.eu/) que incluye la opción de donar los datos que subiste a Open Humans. En su sitio web y en la propia encuesta hay un [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) sobre cómo donar tus datos al proyecto «OPEN».

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons se creó para ofrecer una forma sencilla de compartir conjuntos de datos de la comunidad DIYAPS para la investigación. Los datos se comparten tanto con investigadores tradicionales, que harán estudios de investigación tradicionales, como con grupos o personas de la comunidad que quieren revisar datos para sus propios proyectos de investigación. OpenAPS Data Commons usa la plataforma «Open Humans» para que las personas puedan subir y compartir fácilmente sus datos de DIYAPS, incluidos AAPS, Loop y OpenAPS.

Puedes llevar tus datos a Open Humans de una de estas tres formas:

1. usar la opción de subida de AAPS (Uploader) para llevar tus datos a Open Humans
2. usar Nightscout Data Transfer para llevar tus datos a Open Humans
3. subir archivos de datos a Open Humans de forma manual.

Cuando hayas creado una cuenta y tus datos ya lleguen a Open Humans, únete también a OpenAPS Data Commons si quieres donar tus datos para la investigación.

## Términos de uso

Esta es una herramienta de código abierto que copia tus datos a [Open Humans](https://www.openhumans.org). No tenemos ningún derecho a compartir tus datos con terceros sin tu autorización explícita. Los datos que reciben el proyecto y la app se identifican con un ID de usuario aleatorio y solo se envían de forma segura a una cuenta de Open Humans si autorizas ese proceso. Puedes dejar de subir datos y borrar los datos subidos en cualquier momento en [www.openhumans.org](https://www.openhumans.org). Ten en cuenta que algunos proyectos que reciben datos quizá no lo permitan.

Consulta también los [Términos de uso de Open Humans](https://www.openhumans.org/terms/).

## Privacidad de los datos

Open Humans protege tu privacidad asignándote un ID numérico para cada proyecto. Esto permite que los proyectos te reconozcan, pero no que te identifiquen. El ID de aplicación que sube AAPS es parecido y solo ayuda a administrar los datos. Puedes encontrar más información aquí:

- [Política de uso de datos de Open Humans](https://www.openhumans.org/data-use/)
- [Open Humans y el RGPD](https://www.openhumans.org/gdpr/)
