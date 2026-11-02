# Cómo traducir textos de la app AAPS o de la documentación

* Para los textos de la app, ve a <https://crowdin.com/project/androidaps> e inicia sesión con tu cuenta de GitHub
* Para la documentación, visita <https://crowdin.com/project/androidapsdocs> e inicia sesión con tu cuenta de GitHub

* Envía una solicitud para unirte al equipo de la documentación. Para ello, haz clic en la bandera del idioma que quieres y después en el botón «Join» en la esquina superior derecha de la página siguiente. Indica el idioma, da algo de información sobre ti y tu experiencia con AAPS, y si quieres ser traductor o revisor (solo personas con experiencia en traducción y usuarios avanzados de AAPS).

```{admonition} Tiempo para la aprobación :class: note

La aprobación es un paso manual. Como organización sin ánimo de lucro no damos plazos garantizados (SLA), pero en general la aprobación se hace en menos de 1 día. Si no es así, contacta con el equipo de la documentación por Facebook o Discord.

    <br />* Cuando te aprobemos, haz clic en la bandera
       ![Cuando te aprobemos, haz clic en la bandera](../images/translation_flags.png)
    
    ## Traducción de la app
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traducir textos de la app AAPS
    
    * Si no tienes preferencia por los textos que traduces, simplemente pulsa el botón «Translate All» para empezar. Te muestra los textos que necesitan traducción.
    
       ![Haz clic en Translate All](../images/translations-click-translate-all.png)
    
    * Si quieres traducir un archivo concreto, búscalo con el cuadro de búsqueda o en la estructura de árbol y haz clic en el nombre del archivo para empezar a traducir los textos de ese archivo.
    
       ![Haz clic en strings.xml](../images/translations-click-strings.png)
    
    * Traduce las frases del lado izquierdo: añade un texto traducido nuevo o usa y edita una sugerencia
    
       ![Traducción de la app](../images/translations-translate.png)
    
    
    ### Revisar textos de la app AAPS
    
    * Los revisores empiezan pulsando «Proofread» en la pantalla de inicio del idioma.
    
       ![Modo de revisión de la app](../images/translations-proofreading-mode.png)
    
    
      y aprueban los textos traducidos
    
       ![aprobar texto](../images/translations-proofreading.png)
    
    Cuando un revisor aprueba una traducción, esta se añade a la siguiente versión de AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Traducción de la documentación
    
    * Haz clic en el nombre de la página de la documentación que quieres traducir
    
    ![Haz clic en la página de la documentación](../images/translation_WikiPage.png)
    
    
    * Traduce frase por frase
    
        1. El texto amarillo es el texto en el que estás trabajando ahora.
    
        1. El texto verde ya está traducido. No tienes que hacerlo otra vez.
    
        1. El texto rojo es el texto que todavía hay que traducir.
    
        1. Este es el texto original en el que estás trabajando ahora
    
        1. Esta es la traducción que estás preparando. Puedes copiar el texto de arriba o elegir una de las sugerencias de abajo.
    
        1. Estas son las sugerencias de traducción. En especial, puedes ver cuánto encaja según Crowdin, o si ya se tradujo antes y solo volvió porque el texto se movió, no porque cambió.
        1. Pulsa el botón «save» para guardar una propuesta de traducción. Después pasará a un revisor para la comprobación final.
    
    ![Traducción de la documentación](../images/translation_WikiTranslate.png)
    
    * Una página traducida no se publica en la documentación hasta que
    
        1. la traducción está revisada
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. el PR en GitHub fue aprobado.
    
    En general esto tarda de 1 a 3 días, pero en vacaciones puede tardar un poco más.
    
    ### Traducir enlaces
    
    ```{admonition} Los enlaces ya no se traducen
    :class: note
    
    Los enlaces ya no se traducen. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Traduces el texto que representa el enlace. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

¡Los revisores deben prestar una atención especial a esto!

### Revisión

* Los revisores tienen que cambiar al modo de revisión (Proofreading)
    
    ![Modo de revisión de la documentación](../images/translation_WikiProofreadingmode.png)
    
    y aprobar los textos traducidos
    
    ![aprobar texto](../images/translations-proofreading.png)

* Cuando un revisor aprueba una traducción, esta se añade a la siguiente compilación de la documentación. Esta no tiene un calendario fijo, se hace cuando hace falta, pero más o menos una vez por semana, excepto en vacaciones. Para acelerar el proceso, puedes avisar al equipo de la documentación sobre las nuevas traducciones.