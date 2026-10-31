(food)=
# Comida (tu base de datos de alimentos)

La base de datos **Comida** es tu lista personal de alimentos guardados. Cada entrada guarda los **carbohidratos** de un alimento (y, si quieres, sus grasas, proteínas, energía y una categoría). Así puedes tener en un solo lugar lo que comes a menudo y empezar un bolo desde un alimento guardado con sus carbohidratos ya rellenados.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir la base de datos de alimentos

Abre la pantalla **Administrar** (navegación inferior) y elige **Comida** (*«Gestionar entradas de la base de datos de alimentos»*). En **AAPS** v4, Comida **ya no es un complemento**: no hay nada que activar; es una pantalla independiente a la que se llega desde el [panel Administrar](#v4changes-manage).

---

## La lista de alimentos

Tus alimentos se muestran en una lista que se puede desplazar. Cada fila muestra el **nombre** del alimento, su **porción / unidad / categoría** y sus **carbohidratos**:

![La lista de la base de datos de alimentos, con la búsqueda y el botón de añadir](../images/v4/Food/food_list.png)

- **🔍 Buscar** (arriba): filtra la lista por **nombre** (sin distinguir mayúsculas y minúsculas).
- **Filtro de categoría**: unas fichas (chips) te permiten limitar la lista a una **categoría**; cuando eliges una categoría, aparecen las fichas de **subcategoría** de esa categoría. (Toca otra vez una ficha seleccionada para quitarla).
- **➕** (abajo a la derecha): añade un alimento nuevo (ver más abajo).
- Toca una fila para **editar** ese alimento.

Si la lista (o el filtro actual) no tiene entradas, la pantalla muestra **Sin datos**.

---

## Añadir y editar un alimento

Toca **➕** para añadir, o toca una fila existente para editarla. Se abre un editor como panel inferior (**Añadir comida** / **Editar comida**):

![El editor de alimentos: nombre, categoría, porción, carbohidratos y macronutrientes](../images/v4/Food/food_editor.png)

Los campos son:

- **Nombre**: obligatorio (no puedes guardar sin él).
- **Categoría** y **Subcategoría**: opcionales, sirven para agrupar o filtrar alimentos.
- **Porción** y **Unidad**: el tamaño típico de una ración; **Unidad** es **g** por defecto.
- **Carbohidratos (g)**: la cantidad de carbohidratos del alimento.
- **Grasas (g)**, **Proteínas (g)**, **Energía (kJ)**: valores nutricionales opcionales.

Toca **Guardar** para guardarlo, o **Cancelar** para descartarlo. Al editar un alimento existente, el editor también tiene un botón **Borrar**.

```{admonition} Deleting is undoable
:class: note
Al borrar un alimento aparece el mensaje **«Comida eliminada»** con la acción **Deshacer**, así que es fácil recuperar un borrado por error.
```

---

## Usar un alimento para un bolo

Cada fila de alimento tiene un botón de **calculadora**. Al tocarlo se abre el **Asistente de bolo** con los **carbohidratos** de ese alimento ya rellenados y el **nombre** del alimento añadido como nota del tratamiento; así confirmas y administras sin volver a escribir los carbohidratos.

```{admonition} The carbs value is used as-is
:class: note
El número de **carbohidratos** guardado del alimento pasa directamente al asistente: **AAPS** no lo multiplica por la porción ni por la cantidad que has comido. Si la cantidad es otra, ajusta los carbohidratos en el asistente antes de confirmar. (No hay selector de alimentos *dentro* del Asistente de bolo ni del diálogo de carbohidratos; empiezas desde la fila del alimento aquí).
```

---

## De dónde vienen los alimentos (sincronización con Nightscout)

La base de datos de alimentos se comparte a través de **Nightscout**, pero **solo en una dirección**:

- **Descarga:** **AAPS** **lee** los alimentos de la **base de datos de alimentos** de tu sitio Nightscout y mantiene la lista local sincronizada con ella. Esto forma parte de la sincronización de NSClient, así que un **cliente/seguidor** emparejado también acaba con los mismos alimentos.
- **Subida:** **AAPS** **no** envía alimentos **a** Nightscout: NSClient no permite subir entradas de alimentos. Por eso, los alimentos que creas o editas **dentro de AAPS** se quedan **en ese dispositivo** y no se pasan a Nightscout ni a tus otros dispositivos.

```{admonition} Maintain your shared list in Nightscout
:class: important
Como la comida es **solo de descarga**, la forma de compartir una misma lista de alimentos entre tu teléfono, tu seguidor/[cliente](../RemoteFeatures/ClientMasterControl.md) y el resto de tu sistema es mantenerla en **Nightscout** (con su editor de alimentos integrado). **AAPS** descargará esas entradas. Un alimento añadido solo en **AAPS** es local de ese dispositivo y se queda ahí: una descarga relaciona las entradas de Nightscout por su ID de Nightscout, así que añade y actualiza esas, pero nunca sobrescribe ni elimina un alimento que hayas creado localmente (un alimento solo se elimina cuando se borra su copia en Nightscout).

Ten en cuenta que la base de datos de alimentos **tampoco** forma parte del canal de control firmado máster ↔ cliente: viaja solo como datos de Nightscout.
```

---

## No está en el reloj

La base de datos de alimentos es una función del **teléfono**: no hay navegador de alimentos, tile ni menú en un **reloj Wear OS**.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
