# Cómo editar la documentación

**Esta descripción es sólo para editar la documentación en inglés. Toda la información nueva se debe añadir primero en inglés. Si quieres traducir a otros idiomas (¡gracias!), usa [crowdin](https://crowdin.com/project/androidapsdocs).**

Para ver consejos sobre cómo dar formato al texto (títulos, negrita...) y poner enlaces, consulta la sección [«Sintaxis del código»](#code-syntax) de esta página.

## General

Para cualquier pregunta, comentario o idea nueva, puedes contactar con el equipo de la documentación por [discord](https://discord.gg/4fQUWHZ4Mw).

En algún momento te sugerirán que hagas un pull request (PR). Así es como tus cambios en la documentación llegan de verdad a las páginas web de AAPS, que se guardan en GitHub. En realidad, hacer un PR no es muy difícil y es una forma estupenda de colaborar. Estás leyendo esta documentación ahora mismo porque personas como tú hicieron PR. No te preocupes por cometer un error o de alguna manera editar los documentos equivocados. Tus cambios se revisan antes de fusionarlos en el repositorio «oficial» de la documentación de AAPS. No puedes estropear los originales por ningún accidente durante el proceso. El proceso general es:

- Haz cambios y mejoras en el código o en la documentación editando el contenido existente.
- Comprueba otra vez que tus cambios te parecen bien.
- Escribe unas notas sobre lo que has cambiado para que otras personas entiendan los cambios.
- Crea un pull request (solicitud de cambios), que pide a los administradores que usen tus cambios.
- Ellos lo revisarán y (1) fusionarán tus cambios, (2) te harán comentarios sobre tus cambios o (3) empezarán un documento nuevo con tus cambios.

(Nota complementaria: Si eres un alumno visual, hay un video de YouTube [aquí](https://youtu.be/4b6tsL0_kzg) mostrando el flujo de trabajo de PR.)

Para nuestro ejemplo, vamos a hacer un cambio en AndroidAPSdocs. Esto se puede hacer en cualquier PC con Windows, Mac, etc. (cualquier ordenador con acceso a Internet).

1. Ve a <https://github.com/openaps/AndroidAPSdocs> y pulsa Fork arriba a la derecha para hacer tu propia copia del repositorio.

![Hacer fork del repositorio](../images/PR0.png)

2. Ve a cualquier página y navega hasta la página que quieres editar. Puedes hacer clic en el enlace «Edit in GitHub» en la esquina superior derecha. Esto solo es posible en las páginas en inglés. 

![editar doc](../images/PR1.png)

O haz clic en el icono del lápiz que aparece en la barra superior del contenido de la página que quieres editar. Para hacer esto, debes haber iniciado sesión en tu cuenta de GitHub (si no tienes una, es fácil crearla).

![RTD io](../images/PR2.png)

3. Cualquiera de las dos opciones del paso 2 creará una rama nueva en TU repositorio, donde se guardarán tus cambios. Haz tus cambios en el archivo.

Usamos markdown para las páginas de la documentación. Los archivos tienen la extensión «.md». La especificación de Markdown no es fija y por ahora usamos myst_parser para nuestros archivos markdown. Ten cuidado de usar la sintaxis correcta, como se [describe más abajo](#code-syntax).

![Editar rama](../images/PR3.png)

4. Has estado trabajando en la pestaña «<>Edit file». Elige la pestaña «Preview changes» para ver todo con ojos nuevos y asegurarte de que todo lo que cambiaste se ve como querías (incluidas las erratas). Si ves que hace falta una mejora, vuelve a la pestaña de edición para hacer más mejoras. 

![modo vista previa](../images/PR5.png)

5. Cuando hayas terminado tus cambios, desplázate hasta el final de la página. En el recuadro de abajo, escribe tus comentarios en el campo de texto que dice «Add an optional extended description...». El título predeterminado tiene el nombre de archivo. Intenta incluir una frase que explique el **motivo** del cambio. Describir la razón ayuda a los revisores a entender lo que estás intentando hacer con la PR.

![comentarios del commit](../images/PR4.png)

6. Haz clic en el botón verde «Propose file changes» o «Commit changes». En la página que aparece, haz clic en «Create Pull Request» y otra vez en la página siguiente haz clic en «Create Pull Request».

![crear pull request](../images/PR6.png)

7. Eso completa la apertura de una solicitud de PR. GitHub asigna al PR un número, ubicado después del título y una marca de hash. Vuelve a esta página para ver si hay comentarios (o, si recibes las notificaciones de GitHub por correo electrónico, recibirás correos sobre cualquier actividad en el PR). ¡Ahora tu cambio estará en una lista de PR que el equipo revisará y quizá comentará antes de añadirlo a la documentación principal de AAPS! Si quieres ver el progreso de la PR, puedes hacer clic en el logo de la campana en la esquina superior derecha de tu cuenta de GitHub y ver todos tus PRs.

![Seguimiento de PR](../images/PR7.png)

PD: Tu fork y tu rama seguirán en tu propia cuenta personal de GitHub. Cuando recibas una notificación de que tu PR se ha fusionado, puedes borrar tu rama si ya no la necesitas (el área de notificaciones del paso 8 te dará un enlace para borrar la rama cuando se haya cerrado o fusionado). Para cambios futuros, si sigues este procedimiento, tus cambios siempre empezarán con una versión actualizada de los repositorios de AndroidAPSdocs. Si eliges otro método para empezar un PR (por ejemplo, editar empezando desde la rama master de tu repositorio con fork), primero tendrás que asegurarte de que tu repositorio está actualizado: haz un «compare» y fusiona todas las actualizaciones que haya habido desde la última vez que actualizaste tu fork. Como la gente suele olvidar actualizar sus repositorios, te recomendamos usar el proceso de PR descrito arriba hasta que sepas hacer bien los «compares».

(edit-the-docs-code-syntax)=

## Sintaxis del código

Usamos markdown para las páginas de la documentación. Los archivos tienen la extensión «.md».

Markdown es un lenguaje muy sencillo para dar formato al texto, que separa el contenido del texto de su formato.

Quien escribe solo marca, por ejemplo, un título como título de nivel 1, y el procesador de markdown genera el código HTML necesario para mostrar ese título en HTML.

La idea detrás de esto es que

- quien escribe debe pensar primero en el texto y no en el formato,
- el texto markdown se puede usar con diferentes herramientas de markdown, en lugar de herramientas propietarias como, por ejemplo, Microsoft Windows, y
- puedes generar varios formatos de salida a partir de un solo archivo markdown.

Markdown no es un estándar 100 % fijo e intentamos mantenernos lo más cerca posible del estándar para

- seguir siendo flexibles para cambiar de herramientas de markdown cuando haga falta o cuando lo exija la evolución de las herramientas de markdown y de los servicios SaaS de markdown, y
- poder usar servicios de traducción para traducir el inglés a otro idioma, como francés o alemán. Estos servicios pueden trabajar con markdown, pero no con códigos de formato complejos, porque no pueden separar el contenido del diseño, y esto podría ser fatal.

### Títulos

- Título 1: `# título`
- Título 2: `## título`
- Título 3: `### título`
- Título 4: `#### título`

Intentamos evitar más niveles de títulos.

### Formato de texto

- **negrita**: `**text**`
- *cursiva*: `*text*`
- ***negrita cursiva***: `***text***`

### Lista ordenada

    1. primero
    1. segundo
    1. tercero
    

1. primero
2. segundo
3. tercero

### Lista sin orden

    - un elemento
    - otro elemento
    - y otro elemento más
    

- un elemento
- otro elemento
- y otro elemento más

### Lista de varios niveles

Puedes poner listas dentro de listas: sangra el siguiente nivel con 4 espacios más a la derecha que el nivel anterior.

    1. primero
    1. segundo
    1. tercero
      1. un elemento
      1. otro elemento
      1. y otro elemento más
    1. cuatro
    1. cinco
    1. seis
    

1. primero
2. segundo
3. tercero 
    1. un elemento
    2. otro elemento
    3. y otro elemento más
4. cuatro
5. cinco
6. seis

### Imágenes

Para incluir imágenes, usa esta sintaxis de markdown.

- imágenes: `![alt text](../images/file.png)`

El tipo de imagen debe ser PNG o JPEG.

Los nombres de las imágenes deben seguir una de estas reglas. En el ejemplo uso png como extensión. Si usas JPEG, usa jpeg como extensión.

- `filename-image-xx.png`, donde xx es un número único de dos cifras para las imágenes de este archivo.
- `filename-image-xx.png`, donde xx es un nombre con sentido que elige el autor del archivo md.

Las imágenes están en la carpeta images del idioma inglés y Crowdin las pasa a los otros idiomas de forma automática. ¡No tienes que hacer nada para esto!

Por ahora no traducimos las imágenes: las imágenes deben tener el **mínimo texto posible** para que sean accesibles a los lectores que no saben inglés.

(make-a-PR-image-size)= Usa un tamaño razonable para las imágenes: deben poder leerse en PC, tableta y móvil.

- Las capturas de pantalla de páginas web deben tener como máximo **1050 píxeles de ancho**.
- Los diagramas de flujos de procesos deben tener como máximo **1050 píxeles de ancho**.
- Las capturas de pantalla de la app deben tener como máximo **500 píxeles de ancho**. No las pongas una al lado de otra si no hace falta.
- Las capturas de pantalla del reloj (**Wear OS**) deben tener como máximo **360 píxeles de ancho**. Nunca amplíes una captura de pantalla más pequeña.

### Enlaces

#### Enlaces externos

Los enlaces externos son enlaces a sitios web externos.

- enlace externo: `[alt text](www.url.tld)`

#### Enlaces internos al principio de un archivo md

Los enlaces internos a páginas son enlaces al principio de un archivo md que está en nuestro propio servidor.

- enlace interno a una página .md: `[alt text](../folder/file.md)`

#### Enlaces internos a referencias con nombre dentro del texto

Los enlaces internos a referencias con nombre son enlaces a cualquier punto de un archivo md que está en nuestro propio servidor y donde se puso una referencia a la que enlazar.

Añade una referencia con nombre en el lugar del archivo md de destino al que quieres saltar.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

¡La referencia con nombre debe ser única en todos los archivos md de AndroidAPSDocs, no solo en el archivo md donde está!

Por eso es buena práctica empezar con el nombre del archivo y después el nombre de referencia que elijas.

Usa solo letras minúsculas y separa las palabras con guiones.

Después enlaza esta referencia en el texto que escribes con este tipo de enlace.

- Enlaces internos a referencias con nombre: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Notas, advertencias, notas desplegables

Puedes añadir cuadros de nota y de advertencia a la documentación.

Además, puedes añadir notas desplegables con información detallada, para que los usuarios a los que no les interesan los detalles no dejen de leer el texto. Úsalos con cuidado, porque la documentación debe ser lo más fácil de leer posible.

#### Notas

    ```{admonition} Título de la nota
    :class: note
    Esto es una nota.
    ```
    

```{admonition} Título de la nota :class: note Esto es una nota.

    <br />#### Advertencias
    
    ````
    ```{admonition} Advertencia
    :class: warning
    Esto es una advertencia.
    

    ```{admonition} Título de la advertencia
    :class: warning
    Esto es una advertencia.
    ```
    
    #### Notas desplegables
    
    

    {admonition} lecturas más detalladas para los lectores interesados
    :class: dropdown
    
    Esta nota está plegada,
    lo que significa que aquí puedes añadir contenido más largo
    sin que ocupe demasiado espacio en la página.
    

````

```{admonition} lecturas más detalladas para los lectores interesados :class: dropdown Esta nota está plegada, lo que significa que aquí puedes añadir contenido más largo sin que ocupe demasiado espacio en la página.

```

## Tablas

Evita usar tablas con textos largos: su contenido es difícil de escribir en Markdown, normalmente no caben en el ancho de la pantalla de un teléfono y probablemente no se verán igual después de traducirlas.

## Guía de estilo

### Contenido

1. Consejos para escribir en inglés

2. Notas de redacción específicas de AAPS

3. Referencias útiles

### ![Imagen](../images/styleguide01.png) 1\. Consejos para escribir en inglés

#### Usa un lenguaje adecuado para el lector

Usa inglés sencillo siempre que sea posible. Esto ayuda a los lectores que no son nativos y también facilita la traducción de los documentos de AAPS a otros idiomas. Escribe como si conversaras con el usuario: imagina que estás sentado al otro lado de la mesa, frente a la persona para la que escribes. Recuerda: la mayoría de los usuarios de AAPS no tienen conocimientos de programación. La diabetes también tiene mucha jerga y muchas abreviaturas. Ten en cuenta que algunas personas pueden tener un diagnóstico reciente, tener menos experiencia que tú con la diabetes o haber recibido una formación diferente sobre la diabetes. Si usas una forma corta o una abreviatura, escríbela completa la primera vez que la uses, con la abreviatura justo detrás entre paréntesis, como “super micro bolus (SMB)”. Además, enlaza al glosario. Los términos técnicos que el lector quizá no conozca también se pueden añadir entre paréntesis.

En lugar de: *“What causes high postprandial BG peaks in closed loop?"*

Usa: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?"*

##### Usa palabras sencillas que todos puedan entender

Aquí tienes una lista de la A a la Z de palabras alternativas para que tu texto sea más fácil de entender:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Privacidad y licencias:

Sobre todo si grabas vídeos o haces capturas de pantalla, asegúrate de no mostrar tus datos privados (clave API, contraseñas). Asegúrate de que el contenido de YouTube no sea público (que no aparezca en listas) y que haga falta un enlace desde la documentación para verlo. No llames la atención sobre materiales que infringen derechos de autor (BYODA, etc.).

#### Escribe frases cortas, ve al grano

- Un texto claro debe tener una longitud media de 15 a 20 palabras por frase.

- Esto no significa que todas las frases deban tener la misma longitud. Sé directo. Da variedad a tu texto mezclando frases cortas (como la anterior) con frases más largas (como esta).

- Limítate a una idea principal por frase, y quizá a otro punto relacionado.

- Puede que aún escribas alguna frase larga, sobre todo cuando intentas explicar algo complicado. Pero la mayoría de las frases largas se pueden dividir de alguna forma.

- Quita las palabras débiles: “you can”, “there is/are/were”, “in order to”.

- Pon las palabras clave cerca del principio de los títulos, las frases y los párrafos.

- ¡Sé visual! Siempre que sea posible, añade un diagrama breve, una captura de pantalla o un vídeo.

#### No tengas miedo de dar instrucciones

Las órdenes son la forma más rápida de dar instrucciones, pero a veces a quien escribe le da miedo dar órdenes y escribe “you should do this” en lugar de simplemente “do this”. Quizá a la gente le preocupa que las órdenes suenen demasiado duras. A menudo puedes resolverlo poniendo la palabra 'please' delante. Sin embargo, si algo se debe hacer sí o sí, es mejor no decir ‘please’, porque eso le da al lector la opción de negarse.

En lugar de: *“You should just think of it as a complete statement."*

Usa: *“Think of it as a complete statement.”*

#### Usa sobre todo verbos en voz activa en lugar de voz pasiva

Ejemplo de un **verbo en voz activa**:

- *“The pump (subject) delivers (verb) the insulin (object).”*

Aquí “delivers” es un verbo en voz activa. La frase dice quién administra antes de decir qué se administra.

Ejemplo de un **verbo en voz pasiva**:

- *“The insulin (subject) is delivered (verb) by the pump (object)”*

Aquí *“delivered”* es un verbo en voz pasiva. El sujeto y el objeto cambian de lugar si los comparas con la frase en voz activa. Hemos tenido que alargar la frase al añadir “is” y “by the”. Piensa también en empezar con el verbo en voz activa.

En lugar de: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Usa: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Los verbos en voz pasiva pueden causar problemas:

- Pueden confundir.

- A menudo hacen el texto más largo de lo necesario.

- Hacen el texto menos vivo.

##### Buenos usos de la voz pasiva

A veces puede ser adecuado usar la voz pasiva.

- Para que algo suene menos hostil: 'this bill has not been paid' (pasiva) es más suave que 'you have not paid this bill' (activa).

- Para no echar la culpa a nadie: 'a mistake was made' (pasiva) en lugar de 'You made a mistake' (activa).

- Cuando no sabes quién o qué hace la acción: 'the England team has been picked'.

- Si simplemente suena mejor.

#### Evita las nominalizaciones

Una nominalización es el nombre de algo que no es un objeto físico, como un proceso, una técnica o una emoción. Las nominalizaciones se forman a partir de verbos.

Por ejemplo:

| Verbo     | Nominalización |
| --------- | -------------- |
| complete  | completion     |
| introduce | introduction   |
| provide   | provision      |
| fail      | failure        |

A menudo se usan **en lugar** de los verbos de los que vienen, pero pueden dar la impresión de que en realidad no pasa nada. Si hay demasiadas, el texto puede volverse muy aburrido y pesado.

En lugar de: *“The implementation of the method has been done by a team.”*

Usa: *“A team has implemented the method.”*

#### Usa listas cuando sea adecuado

Las listas son excelentes para dividir la información. Hay dos tipos principales de listas:

- Una frase continua con varios puntos de la lista destacados al principio, en medio o al final.

- Viñetas separadas con una frase de introducción.

En la lista de viñetas de arriba, cada punto es una frase completa, así que cada uno empieza con mayúscula y termina con punto. Usa viñetas en lugar de números o letras, porque llaman la atención sobre cada punto sin darte información extra que procesar.

#### Falsos mitos

- Puedes empezar una frase con **and, but, because, so o however**.

- Puedes separar los infinitivos (split infinitives). Así que puedes decir **“to boldly go”**.

- Puedes terminar una frase con una preposición. De hecho, es algo **we should stand up for** (que debemos defender).

- Y **tú** puedes usar la misma **palabra** dos veces en una frase si **tú** no encuentras una **palabra** mejor.

#### Optimizar el estilo de escritura según el objetivo

Para que la documentación sea clara y corta, escribimos sus distintas secciones con estilos diferentes.

El estilo de «explicación» se usa en las secciones de introducción, contexto y desarrollo de conocimientos.

El estilo de «guía práctica» (How-to-guide, con muy poca explicación) se usa para compilar y configurar AAPS y en algunas secciones de solución de problemas.

Un tutorial ayuda al alumno a conseguir una competencia básica. El usuario **aprende haciendo**.

![Imagen](../images/styleguide02.png)

##### ![Imagen](../images/styleguide03.png) Tutoriales (por ejemplo, enseñar a un niño a batir claras de huevo)

- el narrador habla directamente al lector: In this tutorial **you** will en algunos casos raros se puede usar (we) para transmitir la idea de «estamos juntos en esto»

- Futuro -> para mostrar el objetivo final

- Imperativo -> para hacer las tareas -> pasos concretos; evita conceptos abstractos

- Pasado -> para mostrar las tareas terminadas -> resultados visibles rápidos e inmediatos

- Explicaciones mínimas -> solo lo necesario para completar la tarea: **qué y por qué**

- No menciones opciones, alternativas, etc. Sin ambigüedad

- Transiciones entre pasos: termina cada paso con una frase que lleve al siguiente paso, como un flujo lógico. Ejemplo: *You have now installed the Let’s Encrypt client, but before obtaining certificates, you need to make sure that all required ports are open. To do this, you will update your firewall settings in the next step.*

- Título del **tutorial** (título de nivel 1)

- Introducción (sin título)

- Requisitos previos (título de nivel 2)

- Pasos:

- Paso 1 — Hacer lo primero (título de nivel 2)

- Paso 2 — Hacer lo siguiente (título de nivel 2)

- Paso n — Hacer lo último (título de nivel 2)

- Conclusión (título de nivel 2)
    
    - **El lenguaje de los tutoriales**
        
        *In this tutorial, you will…*
        
        Describe lo que el alumno va a conseguir (nota: no “you will learn…”).
        
        *First, do x. Now, do y. Now that you have done y, do z.*
        
        Sin espacio para la ambigüedad o la duda.
        
        *We must always do x before we do y because… (see Explanation for more details).*
        
        Da una explicación mínima de las acciones, con el lenguaje más básico posible. Enlaza a una explicación más detallada.
        
        *The output should look something like this…*
        
        Da al alumno expectativas claras.
        
        *Notice that… Remember that…*
        
        Da al alumno muchas pistas para que pueda confirmar que va por buen camino y orientarse.
        
        *You have built a secure, three-layer hylomorphic stasis engine…*
        
        Describe (y admira, con moderación) lo que el alumno ha conseguido (nota: no “you have learned…”)

##### ![Imagen](../images/styleguide05.png) Guías prácticas (How-To, por ejemplo una receta)

El objetivo de una guía práctica es ayudar a un usuario que ya tiene experiencia a hacer bien una tarea concreta.

- CÓMO hacerlo

- el narrador habla directamente al lector: In this tutorial **you** will

- Futuro -> para mostrar el objetivo final

- Imperativo condicional -> para conseguir X, haz Y -> pasos concretos; evita conceptos abstractos

- Explicaciones mínimas -> solo lo necesario para completar la tarea -> **qué y por qué**

- No menciones opciones, alternativas, etc. Sin ambigüedad, pero puedes enlazar a la entrada de referencia o de explicación

- **Guía práctica**: título (título de nivel 1)

- Párrafo de introducción

- Requisitos previos opcionales (párrafo, o título de nivel 2 si hay más de 1)

- Pasos:

- Paso 1 — Hacer lo primero (título de nivel 2)

- Paso 2 — Hacer lo siguiente (título de nivel 2)

- Paso n — Hacer lo último (título de nivel 2)

- Párrafo de conclusión
    
    - **El lenguaje de las guías prácticas**
        
        *This guide shows you how to…*
        
        Describe claramente el problema o la tarea que la guía enseña a resolver al usuario.
        
        *If you want x, do y. To achieve w, do z.*
        
        Usa imperativos condicionales.
        
        *Refer to the x reference guide for a full list of options.*
        
        No llenes tu guía práctica con todo lo que el usuario podría hacer en relación con x.

##### ![Imagen](../images/styleguide07.png) Explicación (por ejemplo, la ciencia que explica por qué las claras de huevo se ponen firmes al batirlas)

Una explicación aclara, profundiza y amplía lo que el lector entiende sobre un tema.

- POR QUÉ

- Empieza con **Acerca de**

- Da contexto, enlaza TODAS las referencias importantes

- Habla de las opciones y alternativas

- No des instrucciones ni información de referencia (enlaza a ellas)

- Indica lo que no se sabe, los objetivos que cambian, etc.

- Título **Acerca de** (título de nivel 1)

- Introducción (sin título)

- Requisitos previos opcionales (título de nivel 2)

- Subtema 1 (título de nivel 2)

- Conclusión (título de nivel 2)
    
    - **El lenguaje de las explicaciones**
    
    *The reason for x is because historically, y…*
    
    Explica.
    
    *W is better than z, because…*
    
    Da valoraciones e incluso opiniones cuando sea adecuado.
    
    *An x in system y is analogous to a w in system z. However…*
    
    Da contexto que ayude al lector.
    
    *Some users prefer w (because z). This can be a good approach, but…*
    
    Compara las alternativas.
    
    *An x interacts with a y as follows:…*
    
    Muestra los secretos internos del mecanismo para ayudar a entender por qué algo hace lo que hace.

### 2\. Notas de redacción y actualización específicas de AAPS

#### Autor y editor

Al escribir o actualizar la documentación de AAPS, piensa que el proceso tiene dos etapas. Las puede hacer la misma persona en momentos diferentes, o más de una persona.

Un **autor (¡por ejemplo, tú!)** escribe o edita una sección de la documentación con un tono breve y cercano, y después la pasa al editor.

El **editor (por ejemplo, otro usuario de AAPS o la persona que recibe el pull request)** revisa que se siga la guía de estilo y edita la sección para que sea clara y accesible, quitando todas las palabras posibles (sobre todo en las secciones de tutorial y de guía práctica). Leer el texto en voz alta puede ayudar.

#### Puntos generales sobre AAPS

- Para los valores de glucosa, indica tanto mg/dl como mmol/l cada vez (piensa también en hacerlo en las capturas de pantalla, si es posible).

- Para ser coherentes, usa «AAPS» en lugar de «Android APS».

- Indica claramente la versión de Android Studio/AAPS para la que escribes o de la que son las capturas de pantalla.

### 3\. Referencias útiles

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>