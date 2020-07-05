# Realización de su primera PR (petición de modificación)

**Esta descripción es sólo para editar la documentación en inglés. All new information must be added in English first. Si desea traducir a otros idiomas (gracias), por favor use [crowdin](https://wikitranslations.androidaps.org).**

Para obtener sugerencias sobre cómo formatear texto (titulares, audaces ...) y establecer enlaces, por favor vea la sección ["sintaxis de código"](./make-a-PR#code-syntax) de esta página.

## General

Para cualquier pregunta, respuesta o nuevas ideas, puede ponerse en contacto con el equipo de documentación vía correo electrónico (wiki@androidaps.org). Hacer una PR no es difícil, pero podemos ayudarle a editar la documentación.

En algún momento se le sugerirá que haga un PR. PR es la abreviatura de solicitud de modificación, y es una manera de agregar o editar la información almacenada en GitHub. En realidad, no es muy difícil hacer una y es una gran forma de contribuir. Esta documentación está aquí porque la gente como tú hizo PRs. No te preocupes por cometer un error o de alguna manera editar los documentos equivocados. Siempre hay un proceso de revisión antes de que los cambios se fusionen en el repositorio de documentación "formal" AndroidAPS. No se pueden estropear los originales a través de cualquier accidente en el proceso de PR. El proceso general es:

* Realice ediciones y mejoras en el código o la documentación editando el contenido existente.
* Vuelva a comprobar que sus ediciones se vean bien para usted.
* Hagan algunas notas de lo que ha cambiado para que la gente entienda las modificaciones.
* Cree una solicitud de modificación, que solicite a los administradores que utilicen los cambios.
* Van a realizar una revisión y (1) fusionar los cambios, (2) volver a comentar acerca de los cambios, o (3) iniciar un nuevo documento con los cambios.

(Nota complementaria: Si eres un alumno visual, hay un video de YouTube [aquí](https://youtu.be/4b6tsL0_kzg) mostrando el flujo de trabajo de PR.)

Por nuestro ejemplo, vamos a hacer una edición a AndroidAPSdocs. Esto NO es necesario que se haga en el entorno linux de la plataforma. Esto se puede hacer en cualquier PC con Windows, Mac, etc. (cualquier computadora con acceso a Internet).

1. Vaya a https://github.com/openaps/AndroidAPSdocs y presiones en Fork en la parte superior derecha para hacer su propia copia del repositorio.

![Repositorio Fork](./images/PR0.png)

2. Vaya a http://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html o similar y vaya a la página que desea editar. Haz clic en la caja negra en la parte inferior izquierda de la página con la palabra verde "v: latest" o similar. En la ventana emergente que aparece, haga clic en la palabra "edit" para editarla en GitHub. 

![editar doc](./images/PR1.png)

     O puede hacer clic en el enlace "Edit in Github" en la esquina superior derecha y, a continuación, haga clic en el icono de lápiz que aparece en la barra superior del contenido de la página que desea editar.
    

![RTD io](./images/PR2.png)

3. Una o la otra de las opciones del paso 2 creará una nueva rama en el SU repositorio donde se guardarán las ediciones. Haga sus ediciones en el archivo.
  
  Tenga en cuenta que utilizamos diferentes extensiones de archivo: .rst (ReStructuredText) y .md (Markdown) y la sintaxis varía un poco entre los dos. Tenga cuidado de utilizar la sintaxis correcta como [descrita debajo](./make-a-PR#code-syntax).

![Editar rama](./images/PR3.png)

4. Ha estado trabajando en la pestaña "<>Edit file". Seleccione la pestaña "Preview changes" para refrescar la vista asegúrese de que todo lo que ha cambiado se parece a lo que ha significado (typpos sic). Si ve una mejora necesaria, vuelva a la pestaña de edición para realizar más mejoras. 

![modo vista previa](./images/PR5.png)

5. Cuando haya terminado de realizar las ediciones, desplácese hasta la parte inferior de la página. En el recuadro situado en la parte inferior, proporcione sus comentarios en el campo de texto que lee, "Add an optional extended description...". El título predeterminado tiene el nombre de archivo. Intente incluir una frase que explique la **razón** para el cambio. Describir la razón ayuda a los revisores a entender lo que estás intentando hacer con la PR.

![enviar comentarios](./images/PR4.png)

6. Haga clic en el botón verde "Propose file changes" o "Commit changes". En la página que aparece, pulse "Create Pull Request" y otra vez en la página siguiente, pulse "Create Pull Request".

![crear petición de modificación](./images/PR6.png)

7. Eso completa la apertura de una solicitud de PR. GitHub asigna al PR un número, ubicado después del título y una marca de hash. Vuelva a esta página para comprobar los comentarios (o, si tiene notificaciones de Github enviadas por correo electrónico, obtendrá correos electrónicos que le notificarán de cualquier actividad en la SC). La edición ahora estará en una lista de relaciones públicas que el equipo revisará y potencialmente dará retroalimentación antes de comprometerse con la documentación principal de AndroidAPS! Si quieres ver el progreso de la PR, puedes hacer clic en el logo de la campana en la esquina superior derecha de tu cuenta de GitHub y ver todos tus PRs.

![Seguimiento de PR](./images/PR7.png)

PD: su fork y rama va a estar asentados en su propia cuenta de GitHub. Después de recibir una notificación de que su PR se ha fusionado, puede suprimir su rama si ha terminado con ella (el área de notificación del paso 8 proporcionará un enlace para suprimir la rama una vez que se ha cerrado o fusionado). Para las ediciones futuras, si sigue este procedimiento, las ediciones siempre empezarán con una versión actualizada de los repositorios AndroidAPSdocs. Si decide utilizar otro método para iniciar una PR (p.ej. editando a partir de la rama maestra del repositorio bifurcado como punto de inicio), necesitará asegurarse de que su repositorio está actualizado realizando una "comparación" primero y fusionando cualquier actualización que haya ocurrido desde la última vez que actualizó su fork. Dado que la gente tiende a olvidarse de actualizar sus repos, recomendamos usar el proceso de PR descrito más arriba hasta que se familiarice con la realización de "comparaciones".

## Sintaxis del código

En este momento se utilizan dos idiomas para las páginas de los documentos:

* Markdown (.md) - el lenguaje de marcado utilizado originalmente para las páginas de wiki
* texto reStructuredText (.rst) - el nuevo lenguaje de códigos

Cambiaremos todas las páginas de documentos de Markdown a reStructuredText bit a bit. Mientras tanto, es importante que utilice la sintaxis correcta al formatear texto o enlazar. Si no está seguro de tener un vistazo a los códigos de formato/enlace en las páginas existentes.

### Tamaño de la imagen

Si usa imágenes por favor use tamaños razonables. Las imágenes de captura de pantalla deben ser **de 250 píxeles de ancho**.

### Archivos .md

#### Formato de texto

* negrita: `**text**`
* cursiva: `*texto*`
* Título 1: `# título`
* Título 2: `## título`
* Título 3: `### título`

#### Imagenes

* imágenes: `![alt text](../images/file.png)`

#### Enlaces

* enlace externo: `[alt text](www.url.tld)`
* enlace interno a archivo .md: `[alt text](.../folder/file.md)`
* enlace interno a archivo .rst: `[alt text](.../folder/file.rst)`
* enlace interno a tíyulo: `[alt text](.../folder/file#headline)`

### Archivos .rst

#### Formato de texto

* negrita: `**text**`
* cursiva: `*texto*`
* Título 1:
  
  `título`  
  `*****`

* Título 2:
  
  `título`  
  `=====`

* Título 3:
  
  `título`  
  `-----`

#### Imagenes

* imagenes:
  
  `.. imagen:: ../images/modules.png`  
  `:alt: alt text`

#### Enlaces

* enlace externo: `` `alt text <www.url.tld>_` ``
* enlace interno a archivo .md: `` `alt text <../folder/file.html>_` ``
* enlace interno al archivo .rst: `` `alt text <../folder/file.html>_` ``
* enlace interno a título: `` `alt text <../folder/file.html#headline>_` ``

### Enlaces internos

Si desea establecer un enlace interno dentro de la documentación de AndroidAPS, utilice sólo **enlaces relativos**. Only this will make the link work in the other languages (Czech, German...) as well.

#### En archivos que terminan con **.md**:

* `[text](../Usage/Test.md)` establecerá un hiperenlace interno a un directorio mas arriba desde donde se está y, a continuación, en el subdirectorio /Usage. El final del archivo de destino debe ser .md o .rst (no .html)
* `[text](./Usage/Test.md)` establecerá un hiperenlace interno desde donde estés en /Usage. El final del archivo de destino debe ser .md o .rst (no .html)
* Para establecer el enlace a un **ancla** (por ejemplo, un título) tiene que omitir la extensión del archivo 
  * `[text](../Usage/Test#anchor)` en lugar de `[text](../Usage/Test.md#anchor)`

#### En archivos que terminan con **.md**:

* `` `Text <../Usage/Test.hmtl>`_ `` establecerá un hiperenlace un directorio arriba desde donde estés y luego en el subdirectorio /Usage. El final del archivo de destino debe ser .html.
  
  Excepto que están en toctree. Entonces usted tiene que escribir algo como esto: `Text <../Usage/Test.md>` with .md or .rst (not .html).

* `Text <./Usage/Test.md>` establecerá un hiperenlace desde el lugar en el que estas a /Usage.

* Para establecer el enlace a un **ancla** (por ejemplo, un título) usted tiene que agregar el ancla al enlace 
  * `[text](../Usage/Test.html#anchor)` en lugar de `[text](../Usage/Test#anchor)`

## Adición de varias imágenes a la documentación

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses Github. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png". 
* Por favor use tamaños razonables. Las imágenes de captura de pantalla deben ser **de 250 píxeles de ancho**.
* Puede subir imágenes en lotes fácilmente mediante:
  
  1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your github username)).
  
  2. Haga clic en la esquina superior derecha donde dice "Cargar archivos"
  
  3. Arrastre y suelte las imágenes en la pantalla
  
  4. Commit these to your branch
  
  5. Now, you can look for the URL/relative path of each file and use that to refer to when adding images into a page in the documentation.
  
  6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. Make sure you use the [correct code](./make-a-PR#code-syntax) for the page type you are on (.md or .rst). The main thing is to have a plain text description, followed by a link with a relative path to the image, like this:
    
    * For .md pages: `![Example of uploading images in batches](../images/Example_batch_images_upload.png)` (That code is exactly how the image below is embedded to be displayed.)
    * For .rst pages: `.. image:: ../images/Example_batch_images_upload.png`  
      `:alt: Example of uploading images in batches`

![Example of uploading images in batches](./images/Example_batch_images_upload.png)

7. Después de añadir imágenes o realizar ajustes, puede enviar un PR a la rama maestra de AndroidAPSdocs.