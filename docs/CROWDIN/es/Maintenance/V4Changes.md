(v4-changes)=
# Qué cambió en AAPS v4

Esta página reúne los **cambios de funcionamiento** importantes entre **AAPS** v3 y v4 (cosas que funcionan de otra forma, que se han movido o que se han eliminado), para que los usuarios actuales sepan qué esperar al actualizar. Consulta también las [Notas de la versión](ReleaseNotes.md) y el [manual de actualización](UpdateToNewVersion.md).

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 se ha eliminado

**AAPS** v3 incluía **dos** complementos de sincronización con Nightscout:

- **NSClient**: el cliente antiguo (la antigua API REST / socket.io de Nightscout, también llamada *«v1»*), y
- **NSClientV3**: el cliente para la nueva **API v3** de Nightscout.

En **AAPS** v4 el antiguo complemento **NSClient (v1)** se ha **eliminado**. Solo queda **NSClientV3** para sincronizar con Nightscout.

```{admonition} What you need to do
:class: important
Si tú (o tu seguidor **AAPSClient**) aún sincronizabas con el antiguo complemento **NSClient (v1)**, cambia a **NSClientV3** antes o después de actualizar:

- Abre **[Configuración](../SettingUpAaps/ConfigBuilder.md) → Comunicación → NSClientV3**.
- Introduce tu **URL de Nightscout** y un **token de acceso** (NSClientV3 usa un token de acceso, *no* el antiguo API secret; consulta [crear un token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Tu sitio de Nightscout debe admitir la **API v3** (Nightscout 15 o posterior).
- Si usas **websockets**, actívalos o desactívalos en **ambos**, el máster y el seguidor; nunca solo en uno.
```

Esto solo afecta a cómo la app se comunica con Nightscout; tus datos en Nightscout no cambian.

---

## La navegación inferior: Tratamientos, Escenas y Administrar

En **AAPS** v3 te movías por la app con una fila de **pestañas** (Inicio, Acciones, Tratamientos, …), y varias funciones eran **complementos** que activabas en la Tabla de configuraciones (**Acciones**, **Automatización**, **Comida**, …).

En **AAPS** v4 ya no hay pestañas, y tampoco la casilla del ojo de la Tabla de configuraciones que mostraba un complemento como pestaña. La pantalla principal es **Inicio**, y una **navegación inferior** te da tres paneles. **Acciones, Automatización y Comida ya no son complementos**: no hay nada que activar en [Configuración](../SettingUpAaps/ConfigBuilder.md) (la antigua Tabla de configuraciones, con nuevo nombre); sus funciones están ahora en estos paneles.

(v4changes-treatments)=
### Tratamientos: introducir y administrar

En el panel **Tratamientos** registras o administras un tratamiento: **Asistente de bolo**, **Insulina** (bolo manual), **Carbohidratos**, **Tratamiento** (insulina y carbohidratos juntos), **Calibración**, **MCG** (abre tu app de MCG, si hay una configurada) y tus **[Asistentes rápidos](../DailyLifeWithAaps/QuickWizards.md)**.

![El panel inferior Tratamientos](../images/v4/BehavioralChanges/treatments_sheet.png)

En un **reloj Wear OS** los mismos tratamientos se introducen desde el **menú AAPS** del reloj (Asistente de bolo / Calculadora, eCarbs, Tratamiento, …):

![Las acciones de tratamiento en el menú AAPS del reloj](../images/v4/BehavioralChanges/treatments_watch.png)

### Escenas

Tus ajustes preparados para cada situación: consulta [Escenas](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Administrar: gestionar y activar

En el panel **Administrar** gestionas y activas todo lo demás: **[Perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **Configuración de insulina** (tus configuraciones de insulina), **[Objetivo temporal](../DailyLifeWithAaps/TempTargets.md)**, preajustes de **[Asistente rápido](../DailyLifeWithAaps/QuickWizards.md)**, **[Escenas](../DailyLifeWithAaps/Scenes.md)**, **Automatización**, **Comida**, **Rotación del sitio**, **Bomba**, **[Clientes autorizados](../RemoteFeatures/ClientMasterControl.md)**, y además las acciones de la bomba que antes estaban en la pestaña *Acciones* (**Bolo extendido**, **cancelar basal temporal**, **Cebar/Llenar**, **Inserción de sensor**, **Cambio de batería de la bomba**).

![El panel inferior Administrar](../images/v4/BehavioralChanges/manage_sheet.png)

Se conservan todas tus reglas de automatización y tus alimentos; solo ha cambiado la forma de llegar a estas funciones.

(screens-action-tab)=
#### ¿Dónde está la pestaña Acciones?

**AAPS** 3.x tenía una pestaña «Acciones». En **AAPS** 4 sus funciones están en otros lugares:

* **Cambio de perfil** y **Porcentaje** del perfil: toca el [nombre del perfil](#aaps-screens-profile--target) en la pantalla principal, o **Administrar → Perfil**. Consulta [Cambiar el porcentaje del perfil](#ProfileSwitch-change-percentage).
* **Objetivo temporal**: pulsa el [objetivo](#aaps-screens-profile--target) en la pantalla principal, o **Administrar → Objetivo temporal**.
* **Cebar/Llenar**, **Inserción de sensor**, **Medir glucosa** y las otras entradas del careportal: en el [panel de estado](#aaps-screens-careportal) ampliado, en **Administrar** o como botones de [Lanzamiento rápido](../DailyLifeWithAaps/QuickLaunch.md).
* **Explorador de historial**, **Estadísticas** (TDD): en el **menú** (☰).

```{admonition} Profile switch and profile percentage
:class: note
En **AAPS** v3, una pulsación larga en el nombre del perfil abría el diálogo de cambio de perfil (porcentaje, duración, objetivo temporal de Actividad). En **AAPS** v4, **toca** el nombre del perfil (o **Administrar → Perfil**) y después toca el botón redondo **▶** abajo a la derecha para abrir los mismos ajustes. Consulta [Cambiar el porcentaje del perfil](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## La protección de ajustes ahora también bloquea las pantallas de gestión

En **AAPS** v3, la [Protección de ajustes](#Preferences-settings-protection) pedía tu contraseña solo al abrir los ajustes. Sin ella, aún podías añadir o editar perfiles en la pestaña **Local Profile**.

En **AAPS** v4, la Protección de ajustes también cubre la edición en las pantallas de gestión: **Perfil**, **Configuración de insulina**, **Objetivo temporal** y **Asistente rápido**. Si tus ajustes están bloqueados, estas pantallas se abren en modo de **solo lectura**:

- Puedes ver las entradas y usarlas o pulsar **▶ Activar**.
- Los botones **Añadir / Editar / Duplicar / Borrar** están **ocultos**. Solo el **✏️ lápiz** de la barra superior muestra que puedes desbloquear la edición.

![La pantalla Perfil en modo de solo lectura: solo Activar abajo y el lápiz en la barra superior](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Para añadir, editar, duplicar o borrar una entrada, toca el **✏️ lápiz** de la barra superior e introduce la contraseña de tus ajustes (o usa la biometría). Aparecen los botones.

Si no necesitas proteger tus ajustes, puedes desactivar la Protección de ajustes en **Ajustes → Protección**.
```

---

(v4changes-active-insulin)=
## La insulina en uso no se puede editar

En **AAPS** v3 podías cambiar en cualquier momento la DIA de la insulina que usabas.

En **AAPS** v4, la insulina marcada como **ACTIVO** en **Administrar → Configuración de insulina** aparece en gris: no puedes editarla ni borrarla.

Al actualizar, **AAPS** conserva la insulina y la DIA que ya guardaron tus cambios de perfil de v3. Si encuentra registros antiguos con una insulina conocida pero sin DIA, usa una DIA predeterminada para ellos y muestra un mensaje una sola vez, por ejemplo *Los registros antiguos no tenían duración de la insulina, por lo que se utilizaron 9,0 horas para Lyumjev. Comprueba tus ajustes de insulina: los registros ya migrados no se actualizan a posteriori* Cuando lo veas, revisa tus ajustes de insulina.

```{admonition} What you need to do
:class: important
Para cambiar la DIA o el pico, añade una nueva insulina con **+**, ajústala, guárdala y pulsa **▶ Activar**. Consulta [Cambiar la insulina en uso](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## El control remoto con AAPSClient necesita emparejamiento

En **AAPS** v3, **AAPSClient** controlaba **AAPS** escribiendo tratamientos del careportal en Nightscout, y no podía administrar un bolo.

En **AAPS** v4, el cliente y el teléfono principal se **emparejan** una vez, y cada comando va firmado. El teléfono principal comprueba y confirma cada comando, y ahora un cliente también puede administrar un bolo.

- Cada cliente tiene un **[rol](#client-master-control-roles)** que limita lo que puede hacer.
- Mientras el control de clientes está activado, el teléfono principal está en **[Modo reforzado](#client-master-control-hardened-mode)**: los tratamientos y cambios escritos directamente en Nightscout (la web u otras apps) ya no se aplican.
- Cada cliente recibe un **[token de Nightscout propio](#client-master-control-own-token)** con solo los permisos que necesita.

```{admonition} What you need to do
:class: important
Empareja cada **AAPSClient** con el teléfono principal: consulta [Control máster ↔ cliente](#client-master-control). Con un token de administrador en el teléfono principal, este muestra un código QR que configura y empareja el cliente con un solo escaneo. Si antes introducías tratamientos en la web de Nightscout, ahora introdúcelos en un cliente emparejado.
```

---

## Los datos de glucosa duplicados ahora cambian el lazo a Suspensión por glucosa baja

Cuando **AAPS** recibe dos veces la misma lectura de glucosa (una insignia roja de aviso en el acceso directo a la fuente de glucosa de la barra inferior), no puede calcular tu tendencia de forma fiable, así que deja de dar insulina de corrección.

En **AAPS** v3 esto pasaba sin avisar: tu lazo seguía mostrándose como **Lazo cerrado**, aunque ya no podía corregir.

En **AAPS** v4 el cambio es visible. Un lazo cerrado cambia al modo **Suspensión por glucosa baja (LGS)**, y el diálogo del lazo te dice el motivo: *«Modo LGS debido a valores duplicados en la fuente de glucosa»*. **AAPS** aún puede reducir o suspender tu basal para protegerte de las hipoglucemias.

```{admonition} What you need to do
:class: important
Busca y elimina las lecturas duplicadas: consulta [Señal de aviso de glucosa](#aaps-screens-bg-warning-sign).

Cuando ya no estén, **AAPS** se queda en **Suspensión por glucosa baja (LGS)**. No vuelve solo a **Lazo cerrado**: mantén pulsado el icono del lazo y selecciona de nuevo **Lazo cerrado**.
```

---

(v4changes-tidepool)=
## Tidepool: los datos ahora aparecen con el nombre de dispositivo AAPS

En **AAPS** v3, los datos subidos a [Tidepool](../SettingUpAaps/Tidepool.md) aparecían en Tidepool con otro nombre de dispositivo.

En **AAPS** v4, los datos aparecen con el nombre de dispositivo **AAPS**. Después de actualizar, **AAPS** empieza un nuevo conjunto de datos en Tidepool. Tus datos antiguos se quedan en Tidepool con el nombre de dispositivo antiguo.

```{admonition} What you need to do
:class: important
Normalmente no hace falta hacer nada: los datos nuevos aparecen sin más con **AAPS**.

**No** ejecutes «**Sincronización completa**» mientras los datos antiguos sigan en Tidepool: los mismos datos estarían entonces dos veces. Si quieres todos tus datos con el nuevo nombre, usa primero el botón «**Eliminar todos los datos**» de la [pantalla de Tidepool](#tidepool-menu) (también borra los datos antiguos subidos por **AAPS**) y después ejecuta «**Sincronización completa**». Solo se pueden volver a subir los datos que aún están guardados en **AAPS** en tu teléfono.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
