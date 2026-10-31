# Eversense

Hay cuatro métodos diferentes para acceder a las lecturas de Eversense:

- ESEL en modo complementario (companion mode)
- ESEL en modo parcheado (patched mode)
- App complementaria de xDrip (Companion App)
- Lector de notificaciones (integrado en **AAPS**)

## ESEL

Descarga e instala la [app ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) siguiendo estas [instrucciones](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- En ESEL, abre el menú de tres puntos (⋮) arriba a la derecha y selecciona **Settings** (también disponible desde el menú ☰). En los ajustes:
  - Activa «Send to AAPS and xDrip» (enviar a AAPS y xDrip)
  - **Desactiva** «Send to Nightscout» (enviar a Nightscout)
  - Como los datos de glucosa de Eversense pueden tener ruido, se recomienda activar «Smooth Data» (suavizar datos) en ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Modo complementario (Companion Mode)

Lee los datos de las notificaciones de la app de Eversense (funciona con la app estándar de Eversense, disponible desde la versión 3.0.1 de ESEL).

1. Usa la app oficial de Eversense de Google Play Store
   - Opcional, pero necesario para rellenar datos que faltan (backfilling): inicia sesión en tu cuenta de Eversense
   - En Sync, activa Auto synchronization (sincronización automática)
2. Configuración de ESEL:
   - Desactiva el ajuste «Get data from patched Eversense App» (obtener datos de la app de Eversense parcheada)
   - Para rellenar datos que faltan (backfilling): activa «Fill missing data from eversensedms.com»
   - Introduce como dirección de correo y contraseña tus datos de inicio de sesión de Eversense
3. Configura «MM640g» como fuente de glucosa en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).

### App de Eversense parcheada

 Necesita una versión parcheada de la app de Eversense (funciona totalmente sin conexión, incluido el relleno de datos que faltan).

1. Desinstala la app de Eversense (Advertencia: ¡se perderán tus datos históricos locales de más de 1 semana!)

2. Instala la [app de Eversense parcheada](https://cr4ck3d3v3r53n53.club) y úsala como describe el proveedor

   - Inicia la app de Eversense, inicia sesión, conéctate a tu transmisor y úsala igual que la app normal.

3. Configuración de ESEL:

   - Activa el ajuste «Get data from patched Eversense App»



![ESEL Broadcast](../images/ESELpatch.png)

Si usas ESEL por primera vez con una instalación nueva de Eversense, pueden pasar hasta 15 min hasta que aparezcan tus primeros valores en xDrip.

4. Configura «MM640g» como fuente de glucosa en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).

## xDrip

xDrip puede leer las notificaciones de la app del fabricante, igual que ESEL. No hay relleno de datos que faltan (backfilling).

- Descarga e instala xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Como fuente de datos en xDrip se debe seleccionar «Companion App».
- Selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).
- Ajusta la configuración de xDrip según las explicaciones de la página de ajustes de xDrip: [Ajustes de xDrip](../CompatibleCgms/xDrip.md).
- Activa el [suavizado exponencial](../CompatibleCgms/SmoothingBloodGlucoseData.md) en AAPS.

## Lector de notificaciones

**AAPS** puede leer los valores de glucosa directamente de las notificaciones de la app oficial de Eversense, sin ninguna otra app en medio. No hay relleno de datos que faltan (backfilling).

- Selecciona **Lector de notificaciones** en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source) y da a **AAPS** acceso a las notificaciones cuando lo pida.
- Asegúrate de que la app de Eversense muestre el valor de glucosa actual en su notificación.

```{warning}
Los valores de glucosa no siempre se leen cada 5 minutos y pueden aparecer duplicados.
```