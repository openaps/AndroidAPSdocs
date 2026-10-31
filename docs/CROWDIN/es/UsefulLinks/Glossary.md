# Glosario

**AAPS** = AndroidAPS es el nombre de la app de Android.

**AAPSClient** = la app de seguimiento para cuidadores. En un teléfono de seguimiento, sigue el **AAPS** del usuario a través de su sitio de **Nightscout** y, una vez emparejado con el teléfono de **AAPS**, lo controla a distancia. No confundir con **NSClient**. Más información → [Wiki - «La app AAPSClient»](../RemoteFeatures/AapsClient.md) y [Control máster ↔ cliente](#client-master-control).

**Actividad** = actividad de la insulina; muestra la velocidad a la que baja la IOB. Consulta [Wiki - «DIA»](#Config-Builder-insulin-dia) y el término relacionado **BGI**.

**AID** = Automated Insulin Delivery (administración automática de insulina). El término que se usa en la práctica clínica y en la investigación para un sistema que ajusta la administración de insulina de forma automática con datos del **CGM**. **APS** y **lazo cerrado** significan lo mismo → consulta también **OS-AID**.

**APS** = Artificial Pancreas System (sistema de páncreas artificial) → consulta también **AID**.

**AMA** = Advanced Meal Assist (asistencia avanzada para comidas). Un algoritmo que permite a **AAPS** aumentar la basal del usuario de forma más agresiva después de un bolo de comida. Más información → [Wiki - «Advanced Meal Assist (AMA)»](#Open-APS-features-advanced-meal-assist-ama).

**Factor de ajuste** = se usa en **DynamicISF**; es un valor entre 1 % y 300 % que el usuario configura en sus **Ajustes**. Funciona como un multiplicador del valor de **TDD**. Consulta [Wiki - Factor de ajuste de ISF dinámico](#dyn-isf-adjustment-factor)

**Android Auto** = un sistema que muestra algunas funciones de un teléfono Android, también **AAPS**, en la pantalla de un coche. Más información → [Wiki - «Android Auto»](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (paquete de aplicación de Android). Un archivo para instalar software. Más información → [Wiki - «Compilar AAPS»](../SettingUpAaps/BuildingAaps.md).

**Autosens** = cálculo de la sensibilidad a la insulina en una ventana de 24 y 8 horas, etc. Más información → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = plataforma de computación en la nube para alojar la web de **Nightscout** → consulta también **Nightscout**.

**BAT** = indicador de estado de batería baja de la bomba, en la fila de estado de la pantalla principal de **AAPS** → consulta también **CAN** / **RES** / **SEN**.

**BG** = glucosa en sangre.

**BGI** = blood glucose impact (efecto sobre la glucosa). Cuánto «debería» subir o bajar la **BG** solo por la actividad de la insulina.

**Fuente de glucosa** = un ajuste de AAPS para configurar de dónde vienen los datos de glucosa. Consulta [Wiki - Fuente de glucosa](#Config-Builder-bg-source)

**Bridge** = un dispositivo adicional que convierte un **FGM** en un **CGM**.

**BR** = Basal Rate (tasa basal). La cantidad de insulina en un bloque de tiempo dado para mantener la **BG** en un nivel estable. → consulta también **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (compila tu propia app de Dexcom). Una forma de generar tu propia app de Dexcom para leer los datos del sensor Dexcom G6.

**CAGE** = Cannula AGE (edad de la cánula). Se muestra en la pantalla principal de **AAPS** y en Nightscout, según las entradas **Cebar/Llenar** del Portal de cuidados del usuario → consulta también **Nightscout**.

**CAN** = indicador de estado de cambio de cánula pendiente, en la fila de estado de la pantalla principal de **AAPS** → consulta también **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (monitor continuo de glucosa, MCG) → consulta también **FGM**.

**Lazo cerrado** = un sistema de lazo cerrado que ajusta de forma automática la basal del usuario según un algoritmo de **AAPS** y los ajustes del **Perfil** del usuario, sin pedir la aprobación del usuario. Más información → Wiki - «lazo cerrado» y consulta también **HCL** / **FCL**.

**COB** = Carbs On Board (carbohidratos activos). Es la cantidad de carbohidratos que el usuario aún tiene que digerir → consulta también IOB.

**CSF** = Carbs Sensitivity Factor (factor de sensibilidad a los carbohidratos). Es decir, cuánto sube la **BG** del usuario por cada 1 g de carbohidratos absorbidos.

**DIA** = Duration of Insulin Action (duración de la acción de la insulina). Más información → [Wiki - «DIA»](#Config-Builder-insulin-dia) y consulta también → [DIABETTECH - «DIA»](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (horario de verano). Consulta [Wiki - Cambio de zona horaria y horario de verano](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**ISF Dinámico (o DynISF)** = una función de **AAPS** que adapta el factor de sensibilidad a la insulina (**ISF**) de forma dinámica según la **TDD** y la **BG** del usuario.

**eCarbs** = carbohidratos extendidos. Carbohidratos repartidos a lo largo de varias horas (p. ej. para cubrir grasas/proteínas), así **AAPS** puede repartir la insulina como un bolo extendido. Más información → [Wiki - «Carbohidratos extendidos»](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (lazo cerrado completo). Un lazo que no necesita datos del usuario en las comidas: no hay que contar carbohidratos ni poner un bolo de comida. Más información → Wiki - «lazo cerrado completo» y consulta también **HCL**.

**FGM** = Flash Glucose Monitor (monitor flash de glucosa), como el Freestyle Libre de Abbott. Más información → Wiki - «Fuente de glucosa» y consulta también «CGM».

**git** = una herramienta para guardar y descargar el código fuente de **AAPS**.

**GitHub** = un servicio web que aloja el código fuente de **AAPS** y su control de versiones (registra los cambios en los archivos y coordina el trabajo en ellos, sobre todo en equipos); también puede compilar la app. También es necesario para las actualizaciones del **APK**. Más información → Wiki - «actualizar el APK».

**Glimp** = una app que recoge los valores del Freestyle Libre.

**HCL (o Hybrid Closed Loop, lazo cerrado híbrido)** = un lazo que automatiza la administración de insulina entre comidas, pero el usuario aún tiene que poner un bolo para las comidas. Casi todos los sistemas de uso diario, también **AAPS**, son un lazo cerrado híbrido → consulta también **FCL** / **Lazo cerrado**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (ratio de insulina/carbohidratos). Ten en cuenta que, por convención, se expresa en g/U, aunque el acrónimo sugiere lo contrario.

**IOB** = Insulin On Board (insulina activa). Insulina activa en el cuerpo del usuario. Consulta [Wiki - Insulina activa (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (factor de sensibilidad a la insulina). La bajada esperada de la BG por una unidad de insulina. La unidad es mg/dl/U o mmol/l/U. ¡No son equivalentes sin una conversión!

**Keystore (o JKS)** = un Java Key Store (almacén de claves de Java): un archivo cifrado donde se guardan tus certificados y claves personales de desarrollador, necesarios para compilar (y volver a compilar) **AAPS**.

**LGS** = Low Glucose Suspend (suspensión por glucosa baja). Consulta [Wiki - Suspensión por glucosa baja (LGS)](#KeyAapsFeatures-LGS)

**LineageOS** = sistema operativo libre y de código abierto para teléfonos, etc. Si usas Accu-Chek Combo, consulta [Wiki - bomba Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Archivos de registro** = registros de **AAPS** con las acciones del usuario (útiles para resolver problemas y depurar). Más información → [Wiki - «archivos de registro»](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total máxima. Es una función de seguridad que evita que **AAPS** administre más insulina de la que permiten los ajustes del usuario. Más información → [Wiki - «IOB total máxima que OpenAPS no puede superar»](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = función de seguridad: calcula una absorción de carbohidratos por defecto cuando no se puede determinar la absorción a partir de la reacción de la glucosa del usuario. Más información → [Wiki - «Preferencias»](#Preferences-min_5m_carbimpact).

**Nightscout** = proyecto de código abierto para acceder a los datos del **CGM** y crear informes. El centro de datos principal para los datos de **AAPS** del usuario; puede crear informes para ver los datos históricos de **Nightscout** del usuario, como la HbA1c esperada, el tiempo en rango, o buscar patrones en los datos con el gráfico de percentiles, etc.

**Nightscout** → consulta también **Nightscout Reporter**. Es muy útil para padres que siguen el control de la diabetes de su hijo o hija.

**Nightscout Reporter Tool** = una herramienta que crea informes en PDF con los datos de la web de Nightscout. Busca «Nightscout Reporter», «NS Reporter» en Facebook.

**NSClient** (**NSClientV3**) = el complemento de **AAPS** que sincroniza los datos con **Nightscout** (**Configuración** → **Comunicación**). No es lo mismo que **AAPSClient**, la app de seguimiento. Más información → [Wiki - «NSClient»](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (sistema de páncreas artificial abierto), el proyecto anterior y la base de AAPS.

**Lazo abierto** = una función de **AAPS** que recomienda ajustes; el usuario tiene que hacerlos a mano en **AAPS**. Más información → [Wiki - «Lazo abierto»](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detección de sensibilidad y «reference design implementation version 0/1» (versión 0/1 de la implementación del diseño de referencia). Es el algoritmo principal de OpenAPS (Wiki de OpenAPS - detección de sensibilidad).

**OS-AID** = Open-Source Automated Insulin Delivery (administración automática de insulina de código abierto). Un sistema **AID** hecho con software de código abierto, como **AAPS**, **OpenAPS**, Loop o Trio. Estos sistemas no están aprobados oficialmente por las autoridades sanitarias (FDA, NHS, etc.) → consulta también **AID**.

**Pico de acción** = momento en que la insulina administrada tiene su efecto máximo. Más información → [Wiki - «Duración de la acción de la insulina (DIA) y pico»](#Config-Builder-insulin-dia).

**PH** = Pump History (historial de la bomba). Puedes verlo en el historial de tratamientos de **AAPS**: abre el **menú** (☰) arriba a la izquierda de la pantalla principal y selecciona **Tratamientos**.

**Predicciones** = predicciones de la **BG** futura basadas en distintos cálculos. Más información → [Wiki - «líneas de predicción»](#aaps-screens-prediction-lines).

**Perfil** = los ajustes básicos de tratamiento del usuario (tasa basal, **DIA**, **IC**, **ISF**, objetivo de **BG**). **AAPS** solo usa perfiles creados en **AAPS** (**Administrar** → **Perfil**), pero los **Perfiles** de **Nightscout** se pueden copiar (sincronizar) a **AAPS**. Más información → [Wiki - «Tu perfil de AAPS»](../SettingUpAaps/YourAapsProfile.md).

**Cambio de perfil** = cambio (temporal) del **Perfil** del usuario a otro **Perfil** guardado en **AAPS**.

**Porcentaje de perfil** = un aumento o una disminución (temporal) en porcentaje que se aplica al **Perfil** del usuario durante un tiempo elegido.

**RES** = indicador de estado de cambio de depósito pendiente, en la fila de estado de la pantalla principal de **AAPS** → consulta también **BAT** / **CAN** / **SEN**.

**RileyLink** = dispositivo de hardware de código abierto que hace de puente entre Bluetooth Low Energy (BLE) y la comunicación inalámbrica a 916 MHz (usada por bombas Medtronic antiguas) o a 433 MHz (usada por las bombas Omnipod Eros).

**SAGE** = sensor age (edad del sensor). Se muestra en la pantalla principal de **AAPS** y en **Nightscout**, según las entradas **Inserción de sensor** del Portal de cuidados del usuario → consulta también **Nightscout**.

**SEN** = indicador de estado de cambio de sensor pendiente, en la fila de estado de la pantalla principal de **AAPS** → consulta también **BAT** / **CAN** / **RES**.

**Detección de sensibilidad** = cálculo de la sensibilidad a la insulina por el ejercicio, las hormonas, etc. consulta también → [DIABETTECH - «Autosens»](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Ruido del sensor** = lecturas inestables del **CGM** que hacen que los valores de **BG** «salten». Más información → [Wiki - «Suavizado de los datos de glucosa en la sangre»](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (supermicrobolo). Una función de **AAPS** para administrar insulina más rápido y así ajustar la **BG**. Más información → [Wiki - «**SMB**»](#Open-APS-features-super-micro-bolus-smb) y consulta también **UAM**.

**Superbolo** = se pasa insulina basal a un bolo para ajustar la **BG** más rápido.

**TBB** = total base basal (basal total: suma de la tasa basal en 24 horas) → consulta también **TBR** / **TDD**.

**TBR** = temporary basal rate (basal temporal) → consulta también **TBB** / **TDD**.

**TDD** = total daily dose (dosis diaria total: bolo + basal por día) → consulta también **TBB** / **TBR**.

**TT** = temporary target (objetivo temporal): subida o bajada temporal del objetivo (rango) de **BG** del usuario, p. ej. para comer o hacer deporte. Más información → [Wiki - «Objetivos temporales»](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (comidas no anunciadas). Detecta subidas importantes de la **BG** por comidas, adrenalina u otras causas e intenta corregirlas. Más información → [Wiki - «UAM»](#enable-uam) y consulta también **SMB**.

**Bomba virtual** = una función de **AAPS** que permite probar las funciones de **AAPS**, o usar el lazo con un modelo de bomba que no tiene driver en **AAPS** → consulta también **Lazo abierto**.

**Fondo de pantalla** = imagen de fondo de **AAPS**, consulta la página de teléfonos.

**xDrip** = software de código abierto para leer sistemas de **CGM**.

**Basal temporal a cero (zero-temp)** = basal temporal al 0 % (no se administra insulina basal).

→ consulta también [la documentación de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)