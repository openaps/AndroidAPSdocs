
# Notas de la versión

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Sigue las instrucciones del [manual de actualización](UpdateToNewVersion.md) para actualizar a una nueva versión. La sección de solución de problemas de la página del manual de actualización también trata las dificultades más comunes al actualizar **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Consulta [Qué cambió en AAPS v4](V4Changes.md) para ver los cambios de comportamiento importantes: funciones que se han movido, se han renombrado o se han eliminado.
```

Cuando haya una nueva actualización disponible, recibirás una notificación como esta:

![Información de actualización](../images/AAPS_LoopDisable90days.png)

Si no actualizas antes de la fecha de caducidad, **AAPS** pasará a Lazo abierto.

Consulta [Fin de vida útil](EndOfLife.md) para ver las fechas de fin de las versiones de AAPS.

**No ignores la notificación.** Las nuevas versiones de **AAPS** traen correcciones de seguridad importantes. Por eso, todos los usuarios de **AAPS** deben actualizar a la última versión lo antes posible. Es un esfuerzo para mejorar la seguridad de cada usuario de **AAPS** y de la comunidad DIY. Gracias por tu comprensión.

(maintenance-android-version-aaps-version)=

## Versión de Android y versión de AAPS

Si tu teléfono usa una versión de Android anterior a Android 12, no podrás usar AAPS v3.4 o posterior, porque necesita al menos Android 12.

Se han lanzado nuevas versiones de AAPS que sólo comprueban la versión de Android del teléfono, para permitir a los usuarios instalar versiones anteriores de AAPS en teléfonos con versiones de Android inferiores a Android 9. No se incluyen otras mejoras.

Busca tu versión de Android en la tabla de abajo y usa la versión de **AAPS** correspondiente. El código se descarga de <https://github.com/nightscout/AndroidAPS> usando la rama indicada.

| Tu versión de Android   | Versión de AAPS que debes usar | Rama que debes descargar                                            |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------- |
| Android 12 y superiores | Última versión                 | [master](https://github.com/nightscout/AndroidAPS) (predeterminada) |
| Android 11              | **3.3.2.1**                    | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1)    |
| Android 9, 10           | **3.2.0.4**                    | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4)    |
| Android 8               | **2.8.2.1**                    | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1)    |
| Android 7               | **2.6.2**                      | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)        |

## Versión de WearOS

- AAPS necesita WearOS 3.0, 3.2 o 3.5 (Android 11, nivel de API 30) o posterior. Los relojes con WearOS 2 no son compatibles.

```{tip}
WearOS 5, nivel de API 34 (Android 14), tiene [limitaciones](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Versión 4.0.0**

Fecha de lanzamiento: 31-10-2026

**Nuevas funciones**

- Nueva interfaz de usuario: la app del teléfono se ha rehecho con Jetpack Compose @MilosKozak
- [Búsqueda global](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migración a Kotlin Multiplatform, cliente para escritorio Windows, Mac y Linux, y para iOS @MilosKozak
- [Escenas](../DailyLifeWithAaps/Scenes.md): guarda un conjunto de acciones y ejecútalas juntas @MilosKozak
- [Control máster ↔ cliente](../RemoteFeatures/ClientMasterControl.md): envía órdenes desde un teléfono cliente al máster @MilosKozak
  - [Roles de cliente](#client-master-control-roles): Solo lectura, Comidas, Cuidador o Administrador para cada cliente @MilosKozak
  - [Modo reforzado](#client-master-control-hardened-mode): con el control de clientes activado, el máster solo acepta cambios de clientes emparejados @MilosKozak
  - Emparejamiento con un código QR que también configura Nightscout en el cliente, o con un PIN; el secreto de emparejamiento se cambia justo después de emparejar @MilosKozak
  - [Token de Nightscout propio](#client-master-control-own-token) para cada cliente, solo con los derechos que el cliente necesita @MilosKozak
- Soporte de [concentración de insulina](../AdvancedOptions/InsulinConcentration.md) (U200, U500) en bombas, asistente y perfiles @Philoul @MilosKozak
- Gestión de la insulina: catálogo de insulinas, apodos, selección en el perfil y en el asistente @Philoul
- Complemento de calibración @MilosKozak
- [Suavizado](../CompatibleCgms/SmoothingBloodGlucoseData.md): Filtro de Kalman no lineal (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotación del sitio](#Aapsscreens-site-rotation): registrar y rotar los sitios de infusión @Philoul @MilosKozak
- Nueva versión de [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nuevos [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accesibilidad: la app del teléfono funciona con un lector de pantalla: controles con nombre, estado leído en voz alta, descripciones de los gráficos y encabezados para recorrer la pantalla @MilosKozak
- [Importación de ajustes](../Maintenance/ExportImportSettings.md): puede mantener los ajustes de la bomba @MilosKozak
- La notificación permanente usa las actualizaciones en directo (live updates) de Android, con soporte para la Now bar de Samsung y el delta @premnirmal
- Gráfico de glucosa: [mantén pulsado](#aaps-screens-graph-press-and-hold) para ver los valores en una lectura, en todos los gráficos de la pantalla principal @t1dude @olorinmaia
- Mejoras de rendimiento @MilosKozak
- eCarbs automáticos en el Asistente de bolo @MilosKozak

**Nuevos dispositivos**

- **CareLevo**: nuevo [controlador de bomba](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: soporte @MilosKozak
- **Instara**: nueva fuente de MCG @leohunt

**Mejoras de los controladores de bombas**

- Pantallas de resumen de la bomba rehechas para Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn y Equil @MilosKozak
- **Omnipod Dash**: códigos Ref al estilo del PDM y descripciones de fallos fáciles de leer, compensación de la deriva siempre activa, mejor información del tipo de bolo @nl-ruud
- **Omnipod**: fecha de fin obligatoria para Dash y Eros @mcnelson
- **DanaR, RS**: emulador de bomba para pruebas @MilosKozak
- **Equil**: emulador de bomba para pruebas @MilosKozak
- Muchas correcciones de bombas y del lazo @MilosKozak y otros

**Wear OS**

- [App del reloj](../WearOS/WearOsSmartwatch.md) rehecha con Compose, nuevos mosaicos (tiles) y complicaciones, instalación automática de la esfera (Watch Face Push) en Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponible para WearOS 6.0 (GW7, GW8, GW9...) con una esfera WFF propia @Philoul @olorinmaia
- CustomWatchface ahora puede incluir 5 huecos de complicaciones que puedes personalizar (función nueva, solo disponible para relojes más antiguos) @Philoul
- Nueva [esfera WFF basada en las complicaciones de AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Correcciones en el resultado del Asistente de bolo y del Asistente rápido @olorinmaia
- Nuevo gráfico de glucosa y actividad de Modo de funcionamiento en el menú principal @olorinmaia
- Asistente de bolo: página de [tipo de comida](#WearOsSmartwatch-wizard-meal-type) que divide los carbohidratos como el asistente del teléfono, y [hora de los carbohidratos](#WearOsSmartwatch-wizard-carb-time) con el recordatorio *hora de comer* en el reloj @olorinmaia
- [Alarmas del teléfono en el reloj](#WearOsSmartwatch-phone-alarms): el reloj muestra la alarma y ofrece Silencio y Silenciar 5 min @olorinmaia

**Compilación**

- Workflows de CI para compilar por tag o rama, correspondencia de versiones de JDK @Angus-repo

**Colaboradores**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Registro completo de cambios: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Versión 3.4.2.6**

- Equil: mejor estabilidad @MilosKozak

---

(version3321)=

**Versión 3.3.2.1**

Fecha de lanzamiento: 13-08-2025

- Corregida la conexión Bluetooth de Omnipod en Android 16
- Proceso de CI (compilación en el navegador)
- Corregida la conversión mmol-mgdl
- Corregida la elección de una hora errónea en los diálogos en algunas zonas horarias
- Corregida la lectura de claves en modo sencillo
- Corregidas las predicciones que faltaban en el reloj
- Tabla de configuraciones mejorada
- Sincronización completa de NSCv3 mejorada

---

(version3300)=

**Versión 3.3.2.0**

Fecha de lanzamiento: 27-03-2025

**Cómo actualizar**

* Para compilar esta versión se necesita la [versión de Android Studio llamada "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superior. Si ya compilaste una versión 3.3.x, tienes que actualizar Android Studio otra vez.

(version-enforcement)=

**A partir de esta versión, las notificaciones y la obligación de actualizar se han simplificado y suavizado, y funcionan así:**

*  No caduca cuando el dispositivo está sin conexión (si no hay conexión a internet). Esto significa que ya no hay periodos de gracia de 60 y 90 días.
*  Después de la caducidad se fuerza el modo LGS
*  Recibirás avisos y notificaciones con menos frecuencia:
   - quedan 28 días o más: cada 7 días
   - quedan 27–14 días: cada 3 días
   - después, una vez al día
   - La notificación se genera después del mediodía para no molestarte por la noche
* Solo hay 2 tipos de notificación
   - Nueva versión disponible (no tiene efecto en AAPS)
   - La aplicación caduca en una fecha futura (todavía sin efecto en AAPS) / ha caducado (AAPS pasará a modo LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Versión 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Fecha de lanzamiento: 27-02-2024

Esta versión es la última que es compatible con Android 10. Si no puedes actualizar a Android 11, [actualiza AAPS a 3.2.0.4](#update-aaps-3204).

**Cambios**

- Soporte de G7 con xDrip
- Correcciones de Medtrum
- Corrección del icono de Automatización
- Corrección al superar el objetivo 1

---

**Versión 2.8.2**

Fecha de lanzamiento: 23-01-2021

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Versión 1.0**

```{admonition} First version of **AAPS**
:class: note

La primera versión de prueba empezó en 2015 y la primera versión pública salió en 2016.

La cronología exacta de estas versiones no está disponible por ahora, pero como esta pregunta se ha hecho varias veces, la documentamos aquí.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
