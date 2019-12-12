# Realización de su primera PR (petición de modificación)

**Esta descripción es sólo para editar la documentación en inglés. Si desea traducir a otros idiomas (gracias), por favor use [crowdin](https://wikitranslations.androidaps.org).**

Para obtener sugerencias sobre cómo formatear texto (titulares, audaces ...) y establecer enlaces, por favor vea la sección ["sintaxis de código"](./make-a-PR#code-syntax) de esta página.

## General

Para cualquier pregunta, respuesta o nuevas ideas, puede ponerse en contacto con el equipo de documentación vía correo electrónico (wiki@androidaps.org). Doing a PR isn't difficult, but we can help you editing the documentation.

At some point it will be suggested that you make a PR. PR is short for pull request, and it is a way of adding or editing information stored in GitHub. En realidad, no es muy difícil hacer una y es una gran forma de contribuir. This documentation is here because people like you made PRs. No te preocupes por cometer un error o de alguna manera editar los documentos equivocados. Siempre hay un proceso de revisión antes de que los cambios se fusionen en el repositorio de documentación "formal" AndroidAPS. You can't mess up the originals through any accidents in the PR process. El proceso general es:

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

     Or you can click on the "Edit in Github" link in the upper right corner, and then click the pencil icon that appears in the top bar of the page contents to be edited.
    

![RTD io](./images/PR2.png)

3. One or the other of the options in Step 2 will create a new branch in YOUR repository where your edits will be saved. Haga sus ediciones en el archivo.
  
  Be aware that we use different file extensions: .rst (ReStructuredText) and .md (Markdown) and the syntax varies a little bit between the two. Tenga cuidado de utilizar la sintaxis correcta como [descrita debajo](./make-a-PR#code-syntax).

![Editar rama](./images/PR3.png)

4. Ha estado trabajando en la pestaña "<>Edit file". Select the "Preview changes" tab for a fresh look to make sure everything you changed looks like you meant it to (typpos sic.). If you see a needed improvement, go back to the edit tab to make more improvements. 

![modo vista previa](./images/PR5.png)

5. Cuando haya terminado de realizar las ediciones, desplácese hasta la parte inferior de la página. En el recuadro situado en la parte inferior, proporcione sus comentarios en el campo de texto que lee, "Add an optional extended description...". El título predeterminado tiene el nombre de archivo. Intente incluir una frase que explique la **razón** para el cambio. Describir la razón ayuda a los revisores a entender lo que estás intentando hacer con la PR.

![enviar comentarios](./images/PR4.png)

6. Haga clic en el botón verde "Propose file changes" o "Commit changes". En la página que aparece, pulse "Create Pull Request" y otra vez en la página siguiente, pulse "Create Pull Request".

![crear petición de modificación](./images/PR6.png)

7. That completes the opening of a pull request, PR. GitHub assigns the PR a number, located after the title and a hash mark. Return to this page to check for feedback (or, if you have Github notifications emailed to you, you will get emails notifying you of any activity on the PR). The edit will now be in a list of PR's that the team will review and potentially give feedback on before committing to the main documentation for AndroidAPS! If you want to check on the progress of the PR, you can click on the bell logo in the upper right corner of your GitHub account and see all your PRs.

![PR tracking](./images/PR7.png)

PS: Your fork and branch will still be sitting on your own personal GitHub account. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 8's notification area will provide a link to delete the branch once it has been closed or merged). For future edits, if you follow this procedure the edits will always start with an updated version of the AndroidAPSdocs repositories. If you choose to use another method to start a PR request (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Since people tend to forget to update their repos, we recommend using the PR process outlined above until you get familiar with performing "compares".

## Sintaxis del código

En este momento hay dos idiomas utilizados para las páginas de wiki:

* Markdown (.md) - el lenguaje de marcado utilizado originalmente para las páginas de wiki
* texto reStructuredText (.rst) - el nuevo lenguaje de códigos

Cambiaremos todas las páginas de la wiki de Markdown a reStructuredText bit a bit. Mientras tanto, es importante que utilice la sintaxis correcta al formatear texto o enlazar. Si no está seguro de tener un vistazo a los códigos de formato/enlace en las páginas existentes.

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

Si desea establecer un enlace interno dentro de la documentación de AndroidAPS, utilice sólo **enlaces relativos**. Sólo esto hará que el enlace trabaje en los otros idiomas (checo, alemán...) también.

#### En archivos que terminan con **.md**:

* `[text](../Usage/Test.md)` will set an internal hyperlink one directory up from where you are and then into the subdirectory /Usage. El final del archivo de destino debe ser .md o .rst (no .html)
* `[text](./Usage/Test.md)` establecerá un hiperenlace interno desde donde estés en /Usage. El final del archivo de destino debe ser .md o .rst (no .html)
* Para establecer el enlace a un **ancla** (por ejemplo, un título) tiene que omitir la extensión del archivo 
  * `[text](../Usage/Test#anchor)` en lugar de `[text](../Usage/Test.md#anchor)`

#### En archivos que terminan con **.md**:

* `` `Text <../Usage/Test.hmtl>`_ `` establecerá un hiperenlace un directorio arriba desde donde estés y luego en el subdirectorio /Usage. Ending of the target file must be .html.
  
  Except you are in a toctree. Then you have to write it like this: `Text <../Usage/Test.md>` with .md or .rst (not .html).

* `Text <./Usage/Test.md>` will set a hyperlink from where you are into /Usage.

* To set the link to an **anchor** (i.e. a headline) you have to add the anchor to the link 
  * `[text](../Usage/Test.html#anchor)` instead of `[text](../Usage/Test#anchor)`

## Adding multiple images to documentation

If you are planning to make a lot of edits, including adding images to help illustrate parts of the documentation (thank you!), you may want to take the following approach:

* As you go and save screenshots, rename the screenshots to a descriptive name - but try not to use spaces as that confuses Github. Instead, use underscores. I.e. Example_batch_images_upload.png rather than "Example batch images upload.png".

* Puede subir imágenes en lotes fácilmente mediante:
  
  1. Navigate to the images folder (https://github.com/openaps/AndroidAPSdocs/tree/master/docs/EN/images - but make sure you are in your fork/copy of the docs Images folder to be able to do this (replace "openaps" in the URL with your github username)).
  
  2. Haga clic en la esquina superior derecha donde dice "Cargar archivos"
  
  3. Arrastre y suelte las imágenes en la pantalla
  
  4. Confírmelo a su rama
  
  5. Now, you can look for the URL/relative path of each file and use that to refer to when adding images into a page in the documentation.
  
  6. To see examples of how to add the images, you can look at the "raw" code of a page to see an example from a page that already has the images embedded successfully. Make sure you use the [correct code](./make-a-PR#code-syntax) for the page type you are on (.md or .rst). The main thing is to have a plain text description, followed by a link with a relative path to the image, like this:
    
    * Para páginas .md: `![ Ejemplo de carga de imágenes en lotes](../images/Example_batch_images_upload.png)` (Este código es exactamente la forma en que se incorpora la imagen siguiente)
    * Para páginas .rst: `.. imagen:: ../images/Example_batch_images_upload.png`  
      `:alt: Ejemplo de carga de imágenes en lotes`

![Ejemplo de carga de imágenes en lotes](./images/Example_batch_images_upload.png)

7. After adding images or making adjustments, you can submit a PR to the master branch of AndroidAPSdocs.