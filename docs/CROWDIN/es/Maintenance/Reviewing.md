# Revisar tus datos

## Explorador de historial de AAPS

**AAPS** guarda todo tu historial (**glucosa**, tratamientos, basal, objetivos, **Cambio de perfil**, …) en una base de datos local en el teléfono. Esta base de datos no forma parte de la [exportación de ajustes](../Maintenance/ExportImportSettings.md). Puedes revisarla en el propio **AAPS** con el **Explorador de historial** y la pantalla **Estadísticas** descrita más abajo. Para revisiones e informes a largo plazo, sube tus datos a [Nightscout](../SettingUpAaps/Nightscout.md) o [Tidepool](../SettingUpAaps/Tidepool.md).

Puedes revisar el historial de **AAPS** en el **Explorador de historial**: abre el **menú** (☰) y selecciona **Explorador de historial**.

![Explorador de historial](../images/v4/Screens/history_browser.png)

- Toca la **tarjeta de fecha** para elegir el día que quieres revisar.
- Los gráficos se abren alejados para mostrar **todo el día seleccionado**. Pellizca para acercar una parte.
- Usa las flechas **<** y **>** para ir un día atrás o adelante, y **Ahora** para volver al día actual.
- Los gráficos muestran los mismos datos que los gráficos de la pantalla principal (glucosa, tratamientos, basal, IOB, COB, actividad, desviaciones...).

(reviewing-statistics)=
## Estadísticas de AAPS

**AAPS** ofrece estadísticas básicas de seguimiento.

La mayoría de los valores siguen las [recomendaciones](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) de la ADA 2023.

Para abrirlas, abre el **menú** (☰) y selecciona **Estadísticas**.

![Menú con Estadísticas](../images/Maintenance/statistics.png)

La pantalla **Estadísticas** tiene cuatro pestañas: **Insulina**, **Tiempo en rango**, **Glucosa** y **Ciclo**. Toca una pestaña o desliza a la izquierda o a la derecha para cambiar entre ellas.

(reviewing-tdd)=
### Pestaña Insulina: Dosis Diaria Total

La tarjeta **Dosis Diaria Total** muestra una línea por día para los días anteriores (hasta una semana) de los que **AAPS** tiene datos de insulina, después su **Promedio** y después **Hoy** hasta ahora. Justo después de instalar **AAPS**, solo se muestra **Hoy**. Las columnas son:

- **Dosis Basal**: solo la basal.
- **Bolo**: la suma de los bolos y los SMB.
- **Total TDD**: la dosis diaria total de insulina (**TDD**), la suma de la insulina de bolo y basal administrada durante el día.
- **Carbohidratos**: los carbohidratos introducidos y los eCarbs.

La sección **TDD** se calcula cuando abres la página y tarda unos segundos. Toca **Recalcular** para calcularla de nuevo.

![Estadísticas: la pestaña Insulina con la Dosis Diaria Total](../images/Maintenance/statistics2.png)

La **TDD** es tu insulina de bolo más la basal por día. Algunos médicos usan, sobre todo con personas que empiezan con bomba, una relación basal-bolo de 50:50: la basal base total (**TBB**, la suma de tus dosis basales en 24 horas) debe ser entonces más o menos la mitad de la TDD. Otros prefieren una TBB del 32 % al 37 % de la TDD.

Como la mayoría de las reglas generales, su validez real es limitada. ¡Tu diabetes puede ser diferente!

### Pestaña Tiempo en rango

Tiempo en rango (**TIR**): 70–180 mg/dl o 3,9–10 mmol/l.

La información de **TIR** está disponible para 7 y 30 días, según la cantidad de datos que haya en la base de datos de **AAPS**.

Más abajo hay estadísticas de tiempo en rango estrecho (TITR) de 70–140 mg/dl o 3,9–7,8 mmol/l (la pantalla muestra este rango como 70–141).

**Habla de los objetivos con tu endocrinólogo**

Tu diabetes puede ser diferente. Debes hablar de cualquier objetivo propuesto con tu endocrinólogo o tu equipo médico. If used correctly, AAPS’ statistics can be an effective tool to follow __BG__ trends and monitor progress.

![Estadísticas](../images/Maintenance/statistics3.png)

Más abajo, la tarjeta **TIR de Dexcom** muestra estadísticas detalladas de **TIR** de 14 días.

**SD**: desviación estándar, un [indicador](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) de la variabilidad de la glucosa (cuanto más alta, peor).

HbA1c: estimación de la hemoglobina glicosilada resultante, basada en el promedio de las mediciones del MCG. Es un valor orientativo que puede no coincidir con los análisis de HbA1c en sangre.

![Estadísticas](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Pestaña Glucosa: Perfil de Glucosa Ambulatoria (AGP)

El **Perfil de Glucosa Ambulatoria** (**AGP**) muestra cómo cambia normalmente tu glucosa a lo largo del día. Elige el periodo con los botones de arriba: **Hoy**, **24h**, **7d**, **30d** o **90d**.

- **El gráfico**: un día de medianoche a medianoche. La línea es la **Mediana** (a esa hora, la mitad de tus lecturas fueron más bajas y la otra mitad más altas). Alrededor hay una banda con la mitad central de tus lecturas (**25–75%**) y una banda más ancha con la mayoría de ellas (**10–90%**). Una banda estrecha significa que tu glucosa es parecida de un día a otro a esa hora. Unas líneas discontinuas marcan tu **Valor de hipoglucemia**, 140 mg/dl (7,8 mmol/l) y tu **Valor de hiperglucemia**.
- **Resumen glucémico**: el tiempo pasado en tu rango, en el rango estrecho (70–140 mg/dl o 3,9–7,8 mmol/l), por encima de tu rango y por debajo, después tu glucosa **Promedio** y **Mediana**. Tu rango es el **Valor de hipoglucemia** y el **Valor de hiperglucemia** definidos en [Rango de visualización](#Preferences-range-for-visualization).
- **eA1c** y **GMI**: dos estimaciones de la HbA1c calculadas a partir de las lecturas de tu MCG. Como la HbA1c de arriba, pueden no coincidir con tus análisis de HbA1c en sangre.
- **SD** (desviación estándar) y **CV** (coeficiente de variación): cuánto varía tu glucosa. Un valor más bajo significa una glucosa más estable.
- **Días**: cuántos días de datos del MCG se usaron.

![Estadísticas: la pestaña Glucosa con el gráfico AGP](../images/Maintenance/statistics_agp.png) ![Estadísticas: resumen glucémico y métricas de glucosa](../images/Maintenance/statistics_agp2.png)

Debajo del AGP, la tarjeta **Pentágono de glucosa (CGP)** dibuja como un pentágono cinco medidas de la glucosa de tus últimos 14 días. Un pentágono más pequeño significa un mejor control de la glucosa.

![Estadísticas: el Pentágono de glucosa](../images/Maintenance/statistics_cgp.png)

### Pestaña Ciclo: Patrón de ciclo de insulina total diaria

**Patrón de ciclo de insulina total diaria** superpone tus totales diarios de insulina en ciclos de 28 días, para ayudarte a ver patrones que se repiten. Cada ciclo se dibuja como una línea (**Ciclos individuales**), junto con su promedio.

- **TDD Bruta** / **TDD Limpia**: elige la dosis diaria total tal como se administró, o la TDD menos la insulina para carbohidratos.
- **Desfase de ciclo**: mueve el inicio del ciclo (de 0 a 27 días).

Se necesitan al menos 56 días de datos (2 ciclos). Con menos datos, la tarjeta muestra **No hay datos suficientes (se necesitan al menos 56 días para 2 ciclos)**. El patrón solo se calcula cuando abres la pestaña **Ciclo**, porque lee 168 días de datos.

(aaps-screens-treatments)=
## Historial de tratamientos

Abre el **menú** (☰) en la esquina superior izquierda de la pantalla principal y selecciona **Historial de tratamientos**. En esta vista puedes ver y cambiar el historial de los siguientes tratamientos, cada uno en su propia pestaña (desliza la fila de pestañas para verlas todas):

* Carbohidratos y bolos
* [Bolo extendido](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Basal temporal
* [Objetivo temporal](../DailyLifeWithAaps/TempTargets.md)
* [Cambio de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Portal de cuidados: notas y entradas del portal de cuidados
* Modo de funcionamiento: historial del estado del lazo
* Entrada de usuario: otras notas que no se envían a Nightscout

Al final de cada línea, unos iconos pequeños muestran de dónde vienen los datos o a dónde se han enviado:
* Icono de **Nightscout** (el logotipo de Nightscout): los datos vienen de Nightscout o se han guardado en Nightscout
* Icono de **Bomba**: los datos vienen del historial de la bomba (la bomba los ha procesado)
* Icono de **papelera**: la entrada se ha borrado (solo se muestra cuando ves las entradas borradas con el icono del **ojo** arriba a la derecha)

(screens-bolus-carbs)=
### Carbohidratos y bolos

![Carbohidratos y bolos](../images/TreatmentsView1.png)

En esta pestaña puedes ver el registro de bolos y carbohidratos. Cada bolo (línea **1**) muestra la IOB restante asociada junto a la cantidad de insulina. El origen del bolo puede ser:
* Meal (manually entered through the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, cuando se usa la función SMB

Las entradas de carbohidratos (línea **2**) se muestran con su cantidad en gramos.

Si has usado el [Asistente de bolo](#aaps-screens-bolus-wizard) para calcular la dosis de insulina, puedes pulsar el texto “Calc” en la línea del bolo para ver los detalles de cómo se calculó el bolo.

Según la bomba que uses, la insulina y los carbohidratos pueden aparecer en una sola línea o en varias líneas: una para el detalle del cálculo, una para los carbohidratos y una para el propio bolo.

El historial de tratamientos se puede usar para corregir entradas de carbohidratos erróneas (_p. ej._ si sobrestimaste o subestimaste los carbohidratos). Ten en cuenta que no se puede editar una entrada existente; tienes que seguir este proceso:

1. Comprueba y recuerda la COB y la IOB actuales en la pantalla principal.
2. Según la bomba, los carbohidratos pueden aparecer junto con la insulina en una línea o como una entrada aparte (p. ej. con la Dana RS).
3. Elimina la entrada con la cantidad de carbohidratos errónea: pulsa el icono de la papelera, selecciona las líneas que quieres eliminar y pulsa otra vez el icono de la papelera para terminar.
4. Asegúrate de que los carbohidratos se han eliminado bien comprobando de nuevo la COB en la pantalla principal.
5. Haz lo mismo con la IOB si solo hay una línea con carbohidratos e insulina.

   → Si los carbohidratos no se eliminan como querías y añades más carbohidratos como se explica aquí (6.), la COB será demasiado alta y eso puede hacer que se administre demasiada insulina.

6. Introduce de nuevo la cantidad correcta de carbohidratos (**Tratamientos → Carbohidratos** en la barra de navegación inferior, o un botón **Carbohidratos** de [Lanzamiento rápido](#quicklaunch)) y asegúrate de poner la hora correcta del evento.
7. Si solo hay una línea con carbohidratos e insulina, también tienes que añadir la cantidad de insulina. Asegúrate de poner la hora correcta del evento y comprueba la IOB en la pantalla principal después de confirmar la nueva entrada.

### Basal temporal

![Basal temporal](../images/TreatmentsView2.png)

Aquí se muestran las **basales temporales** aplicadas por el lazo. Cuando una entrada todavía tiene efecto sobre la IOB, la información se muestra junto a la tasa (línea **1**). Puede ser:
* IOB positiva si la basal temporal fue más alta que la del perfil
* IOB negativa con una basal temporal a cero (como en la línea **1**) o si la basal temporal fue más baja que la del perfil

Deleting the entries only affects your reports in Nightscout and will probably distort your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend”: it happens when basal is not currently delivered. Es una situación normal, por ejemplo, mientras cambias un pod.

### Objetivo temporal

![Objetivo temporal](../images/TreatmentsView3.png)

Aquí puedes ver el historial de objetivos temporales.

### Cambio de perfil

![Cambio de perfil](../images/TreatmentsView4.png)

Aquí puedes ver el historial de cambios de perfil. Es posible que veas varias entradas cada vez que cambias de perfil: la línea **1**, guardada en NS y en el historial de la bomba, corresponde al cambio real. La línea **2**, guardada en Nightscout pero no en el historial de la bomba, corresponde a la solicitud de cambio de perfil hecha por el usuario.

Borrar las entradas solo afecta a tus informes en Nightscout y nunca cambia de verdad el perfil actual.

Puedes usar el botón **Duplicar** que aparece en la línea **2** para hacer una copia de un **Cambio de perfil**. Consulta [Tu perfil de AAPS > Administrar tus perfiles](#your-aaps-profile-clone-profile-switch) para más información.

### Portal de cuidados

![Portal de cuidados](../images/TreatmentsView5.png)

Esta pestaña muestra todas las notas y entradas del portal de cuidados guardadas en Nightscout.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Modo de funcionamiento

![Modo de funcionamiento](../images/TreatmentsView6.png)

This tab shows the history of [loop status](#AapsScreens-loop-status) changes: open, closed, LGS, suspend, disconnect.

### Entrada de usuario

![Entrada de usuario](../images/screens/treatments_user_entry.png)

Esta pestaña muestra las acciones hechas en **AAPS** por el usuario o por una **Automatización** (cambios del modo del lazo, cambios de perfil, tratamientos, exportaciones de ajustes...). Estas entradas no se envían a Nightscout.

------

## ¿Cuál es la diferencia entre Nightscout y Tidepool?

Nightscout puede guardar los datos de **AAPS** del usuario y ofrece muchas [herramientas de informes](https://nightscout.github.io/nightscout/reports/).

En cambio, Tidepool permite al usuario [revisar sus datos](https://www.tidepool.org/viewing-your-data) y ofrece una [forma sencilla de compartirlos con tu equipo de endocrinología](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).