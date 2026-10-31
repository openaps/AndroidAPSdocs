(quickwizards)=
# Asistentes rápidos (bolos con un toque)

Un **Asistente rápido** es un botón guardado para una comida o situación que se repite. Lleva una cantidad fija de **carbohidratos** (y cómo dosificar para ellos). Así puedes administrar un bolo — o solo registrar carbohidratos — con un solo toque y una confirmación, sin abrir cada vez la calculadora de bolo completa.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir los Asistentes rápidos

Abre la pantalla **Administrar** (navegación inferior) y elige **Asistente rápido** (*«Gestionar ajustes preestablecidos del asistente rápido»*).

---

## Administrar los Asistentes rápidos

Tus Asistentes rápidos se muestran como un **carrusel de tarjetas que se deslizan** (cada tarjeta muestra el texto del botón, los carbohidratos y el rango de tiempo válido). El editor de abajo configura el asistente **seleccionado**. La barra de acciones inferior tiene **➕ añadir**, **⧉ duplicar**, **🗑️ borrar** y un botón **▶** para ejecutar el Asistente rápido seleccionado.

![El editor del Asistente rápido — modo, carbohidratos, hora de la ingesta y rango de tiempo válido](../images/v4/QuickWizard/quickwizard_editor.png)

Los campos principales del editor son:

- **Botón texto** — el texto que se muestra en el botón.
- **Carbohidratos** y **Hora de la ingesta** — la cantidad de carbohidratos y su desfase de tiempo.
- **Rango de tiempo válido** — consulta [Validez](#quickwizard_validity).
- **Opciones de la calculadora** y **Selección de dispositivo** — ver más abajo.

---

## Los tres modos

El selector de la parte superior del editor — **Asistente / Insulina / Carbohidratos** — decide **qué hace el botón** al tocarlo:

- **Asistente** — ejecuta la **calculadora de bolo** completa para los carbohidratos configurados, con tu **glucosa, IOB, COB y tendencia** actuales (según las *Opciones de la calculadora* de abajo). Administra el bolo *calculado* y registra los carbohidratos. Este es el asistente rápido clásico.
- **Insulina** — administra una **cantidad fija de insulina** que tú defines — sin cálculo.
- **Carbohidratos** — registra **solo los carbohidratos** configurados, **sin bolo**.

---

## Opciones de la calculadora (modo Asistente)

Para un botón en modo **Asistente** eliges qué datos usa el cálculo:

- **Usar glucemia**, **Usar COB**, **Usar IOB** (con *Sólo IOB positiva*), **Usar tendencia** (*Todo / Solo valores positivos / Solo valores negativos*), **Usar objetivo temporal**, **Usar alarma**.
- **Porcentaje de bolo** — ajusta el bolo calculado.
- **Añadir eCarbs** — también programa carbohidratos extendidos.

![Opciones de la calculadora, Porcentaje de bolo y Selección de dispositivo](../images/v4/QuickWizard/quickwizard_options.png)

---

## Validez — cuándo aparece el botón

(quickwizard_validity)= El **Rango de tiempo válido** (*Desde / Hasta*) controla **cuándo** se muestra y se puede usar un Asistente rápido. Un botón configurado, por ejemplo, para **06:00–10:00** solo aparece por la mañana. Así un Asistente rápido de *Desayuno* no llena tu pantalla (ni se toca por error) a la hora de la cena. Fuera de su horario, el botón no se muestra en el panel **Tratamientos** ni en la [barra de Lanzamiento rápido](QuickLaunch.md). Un botón de la barra no se borra: vuelve cuando su horario empieza otra vez.

Cuando el rango de tiempo válido es menor de 4 horas, el botón también se oculta durante 30 minutos después de usarlo, para no introducir la misma comida dos veces por error.

---

## Puntos de uso — dónde lo usas

Los interruptores de **Selección de dispositivo** deciden dónde aparece cada Asistente rápido:

- **Mostrar en el teléfono** — aparece en el **panel [Tratamientos](../Maintenance/V4Changes.md)** (con la dosis calculada en el mismo botón). Un Asistente rápido que se muestra en el teléfono también se puede **fijar como botón de acción rápida en la pantalla principal**: abre *Configurar Lanzamiento Rápido* (el ⚙ de la barra de [Lanzamiento rápido](QuickLaunch.md)) y añádelo desde la categoría **Asistente rápido**.
- **Mostrar en el reloj** — aparece en el **mosaico Asistente rápido de Wear OS** (desliza hasta él en el carrusel de mosaicos del reloj y toca un botón para ejecutarlo — igual que el [mosaico de Escenas](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
La sección **Selección de dispositivo** solo aparece en el editor cuando el complemento **Reloj** está activado y su preferencia **Control desde el reloj** está encendida. Sin ella, cada Asistente rápido se muestra simplemente en el teléfono.
```

En el teléfono, los Asistentes rápidos aparecen en la parte superior del panel inferior **Tratamientos**:

![Asistentes rápidos (arriba) en el panel inferior Tratamientos abierto](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…y como botón de acción rápida en la pantalla principal:

![Un botón de acción rápida de Asistente rápido en la pantalla principal](../images/v4/QuickWizard/quickwizard_overview.png)

![El mosaico Asistente rápido en un reloj Wear OS](../images/v4/QuickWizard/quickwizard_watch_tile.png)

Un **cliente** emparejado (**AAPSClient**) también puede iniciar un Asistente rápido — el **máster** lo calcula y lo administra (consulta [Control máster ↔ cliente](../RemoteFeatures/ClientMasterControl.md)).

Desde donde se inicie, tocar un Asistente rápido siempre muestra una **confirmación** (la confirmación creada por el máster, si se inicia desde un cliente o un reloj) antes de administrar nada.

Un Asistente rápido se rechaza cuando su dosis supera tu bolo máximo, o cuando sus carbohidratos o eCarbs superan tu máximo de carbohidratos (por ejemplo, después de bajar el límite). Cuando los carbohidratos superan el límite, el botón del panel **Tratamientos** está desactivado. Edita el Asistente rápido o el límite.

---

## Añadir y eliminar

- **➕ Añadir** — crea un nuevo Asistente rápido.
- **⧉ Duplicar** — copia uno como punto de partida.
- **🗑️ Borrar** — elimina uno.

Con dos o más Asistentes rápidos también puedes cambiar su orden en el carrusel: toca el icono **Reordenar** (⇅) en la barra superior, mueve la tarjeta central con los **botones de mover ◀ / ▶** y confirma con **✓**. (Los controles son iguales que al [reordenar perfiles](ProfileSwitch-ProfilePercentage.md).)

Los Asistentes rápidos forman parte de la configuración sincronizada, así que se comparten entre tu máster y los clientes emparejados.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
