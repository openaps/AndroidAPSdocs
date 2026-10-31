# Cómo configurar un teléfono Huawei

**Teléfonos que cubre esta página:** teléfonos Huawei con **EMUI 12 a EMUI 15**. Todas estas versiones se basan en Android 12, el mínimo para la versión actual de **AAPS**. En un teléfono con una versión de EMUI más antigua, solo puedes usar una [versión de AAPS más antigua](#maintenance-android-version-aaps-version).

```{admonition} Teléfonos con HarmonyOS NEXT / HarmonyOS 5 :class: warning

Los teléfonos Huawei recientes que se venden en China usan HarmonyOS NEXT (HarmonyOS 5 y superior). Este sistema ya no es Android y no puede ejecutar **AAPS**. ```

Los teléfonos Huawei cierran de forma muy agresiva las apps que funcionan en segundo plano. Aplica todos los ajustes de abajo a **AAPS** y a tu app de MCG (por ejemplo xDrip+ o Juggluco). Si no, el lazo y las lecturas de glucosa pueden detenerse cuando la pantalla está apagada.

Los nombres de los menús pueden variar un poco según el modelo. Si no encuentras un ajuste, escribe su nombre en la barra de búsqueda de la parte de arriba de **Ajustes**.

Las capturas de pantalla de abajo son de una versión de EMUI más antigua. Los ajustes son los mismos en EMUI 12 a 15.

## Ignorar la optimización de batería

1. Abre **Ajustes > Aplicaciones > Aplicaciones**.
2. Toca el menú **⋮** en la esquina de arriba a la derecha y elige **Acceso especial > Optimización de batería**.
3. Toca la flecha de la parte de arriba de la lista y elige **Todas las aplicaciones**.
4. Elige **AAPS** y selecciona **No permitir**. Huawei ya no optimizará las apps de esta lista.
5. Repite lo mismo para tu app de MCG.

![Huawei - ignorar la optimización de la batería](../images/Huawei_BatteryOptimization.png)

## Inicio de aplicaciones: permitir que funcione en segundo plano

1. Abre **Ajustes > Batería > Inicio de aplicaciones** (o **Ajustes > Aplicaciones > Aplicaciones >** elige la app **> Batería > Inicio de aplicaciones**).
2. Busca **AAPS** y desactiva **Gestionar automáticamente**.
3. En la ventana **Gestionar manualmente**, activa las tres opciones: 
    - **Inicio automático**
    - **Inicio secundario** (otras apps pueden iniciarla)
    - **Ejecutar en segundo plano**
4. Repite lo mismo para tu app de MCG.

![Huawei - opciones de batería](../images/Huawei_BatteryOptions.png)

## Bloquear AAPS en las apps recientes

Las apps bloqueadas no se cierran cuando borras la lista de apps recientes.

1. Abre la lista de apps recientes.
2. Desliza hacia abajo la tarjeta de **AAPS**. Aparece un símbolo de candado en la tarjeta.
3. Haz lo mismo con tu app de MCG.

![Huawei - bloqueo de la aplicación](../images/Huawei_LockApp.png)

## Modo de ahorro de energía

Mantén desactivados el **Modo de ahorro de energía** y el **Ahorro de energía ultra** (**Ajustes > Batería**). Estos modos cierran las apps en segundo plano sin importar los ajustes de arriba.

## Si AAPS sigue deteniéndose en segundo plano

Mira [Don't kill my app](https://dontkillmyapp.com/huawei) para más soluciones específicas para Huawei.

## Teléfonos Honor

Honor ahora es una marca aparte y sus teléfonos usan MagicOS en lugar de EMUI. Los ajustes de segundo plano son muy parecidos: busca **Inicio de aplicaciones** en los ajustes de batería de la app, desactiva **Gestionar automáticamente** y permite las tres opciones. Después quita la app de la optimización de batería.