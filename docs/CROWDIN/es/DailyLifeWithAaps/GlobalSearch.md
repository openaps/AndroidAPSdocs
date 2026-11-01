(global-search)=
# Búsqueda global

**AAPS** v4 tiene un cuadro de **búsqueda global** en la parte superior de la pantalla principal. Escribe una palabra y busca en toda la app a la vez (complementos, diálogos, pantallas de ajustes, preferencias individuales) y, si estás en línea, también en la **documentación de AndroidAPS**. Es la forma más rápida de llegar a un ajuste o a una pantalla sin recordar dónde está.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir la búsqueda

Toca el campo **🔍 Buscar** en la parte superior de **Inicio** (junto al menú ☰). Empieza a escribir y los resultados aparecen mientras escribes (tras una breve pausa), agrupados por categoría:

![Resultados de la búsqueda global, agrupados por categoría](../images/v4/Search/search_results.png)

Borra el cuadro con la **✕**, o cierra la búsqueda con el botón **Atrás** del dispositivo.

---

## Buscar en inglés *o* en tu propio idioma

Esto es lo importante: la búsqueda compara con **ambos** textos, el de tu **idioma seleccionado** **y** el texto original en **inglés**.

- Si tu app está, por ejemplo, en alemán o en checo, puedes escribir la palabra **traducida** **o** la palabra en **inglés**: las dos encuentran el ajuste.
- Una coincidencia en el título **traducido** tiene la máxima prioridad, después el título en **inglés** y después las **descripciones** traducidas y en inglés.
- La búsqueda ignora los **acentos y signos diacríticos** (así *ů* coincide con *u*, *é* coincide con *e*) y **no distingue mayúsculas y minúsculas**.

Así, una guía o un mensaje de foro escrito en inglés te sigue llevando al ajuste correcto aunque tu teléfono lo muestre todo traducido.

---

## Qué abarca la búsqueda

Los resultados se agrupan en estas categorías:

- **Complementos**: todos los complementos visibles en tu compilación (los mismos que aparecen en [Configuración](../SettingUpAaps/ConfigBuilder.md)). Cada fila de complemento tiene su **interruptor de activación**, así que puedes activar o desactivar un complemento directamente desde los resultados; al tocar la fila de un complemento desactivado (que se puede activar), este se activa.
- **Diálogos**: las pantallas de tratamientos/acciones y de administración (Asistente de bolo, Insulina, Bolo extendido, Calibración, Objetivo temporal, Perfil, …). Las pantallas que no se aplican a tu compilación no aparecen (por ejemplo *Emparejar con el máster* en un máster, *Clientes autorizados* en un cliente).
- **Categorías de preferencias**: las **pantallas** de ajustes y sus subpantallas, tanto las integradas (General, Apariencia, Protección, Alertas, Mantenimiento, …) como las de los complementos, y además los pequeños grupos de ajustes a los que se llega desde los diálogos (botones de Rellenar, pasos de los botones de Insulina/Carbohidratos, umbrales de las luces de estado, ajustes del asistente, …).
- **Preferencias**: cada **ajuste individual** que tiene un título. Se filtran según tu compilación/modo, así que solo ves los ajustes que realmente se aplican (APS / NSClient / control de la bomba).
- **Documentación**: páginas de la **documentación de AndroidAPS** en línea (ver más abajo).

```{admonition} Settings that belong to a disabled plugin
:class: note
Una preferencia cuyo complemento está **desactivado** sigue apareciendo, **en gris** y sin poder tocarla, con la nota *«Complemento … desactivado»*. Así sabes que el ajuste existe y qué complemento debes activar para llegar a él.

![Un ajuste en gris de un complemento desactivado](../images/v4/Search/search_disabled_plugin.png)
```

---

## Resultados de la documentación (en línea)

Mientras se hace la búsqueda local, **AAPS** también consulta al mismo tiempo la **documentación oficial de AndroidAPS** (alojada en ReadTheDocs). Las páginas que coinciden aparecen en un grupo **Documentación** al final, cada una con un icono 📖, el título de la sección y un fragmento corto:

![Resultados de la documentación (wiki) con fragmentos](../images/v4/Search/search_documentation.png)

- Si la documentación está traducida al idioma de tu app, **AAPS** busca a la vez en las páginas traducidas y en las páginas en inglés. Primero aparecen las páginas en tu idioma y después las páginas en inglés que aún no se habían encontrado.
- Al tocar un resultado de la documentación, esa página se abre en tu **navegador**.
- La búsqueda en la documentación necesita **internet**: sin conexión aparece en su lugar la nota *«La búsqueda en la documentación requiere conexión a internet»*, y los resultados locales (dentro de la app) siguen funcionando con normalidad.

---

## Abrir un resultado

Toca un resultado para ir directamente a él:

- **Complemento** → abre ese complemento.
- **Diálogo** → abre esa pantalla o diálogo.
- **Categoría de preferencias** → abre esa pantalla de ajustes.
- **Preferencia** → abre el ajuste **en su sitio** (salta a él dentro de su pantalla).
- **Documentación** → abre la página en tu navegador.

Opening settings and protected actions still respects your **[protection](#Preferences-protection)** (PIN/password), exactly as it would if you had navigated there by hand. Después de usar un resultado, puedes pulsar **Atrás** para volver a los resultados de la búsqueda.

---

## Atajos para usuarios avanzados

Dos búsquedas especiales muestran una categoría entera de una vez:

- `%PLUGINS%`: muestra **todos** los complementos.
- `%DIALOGS%`: muestra **todos** los diálogos/pantallas de acción.

---

```{admonition} The index stays current
:class: note
El índice de búsqueda se crea la primera vez que buscas y después se mantiene listo. Se vuelve a crear automáticamente cuando **activas/desactivas un complemento** o **cambias el idioma de la app**, así que los resultados siempre reflejan tu configuración actual.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
