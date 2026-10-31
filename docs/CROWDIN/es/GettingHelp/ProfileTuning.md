# Ajustar el perfil de AAPS

```{admonition} This is NOT a medical advice
:class: warning
Trabaja con tu equipo médico para recibir apoyo y consejos sobre el manejo de tu diabetes.</br>
Usa esta guía solo cuando ya hayas [configurado tu **Perfil** correctamente](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), siguiendo todos los objetivos de **AAPS**.
```

Esta guía explica la lógica de los resultados del algoritmo OpenAPS con un __Perfil__ dado, e informa sobre qué valores de **AAPS** se pueden ajustar cuando ves ciertas situaciones o patrones. Las sugerencias sobre las pruebas de basal de abajo pueden ser distintas de lo que te aconseja tu equipo médico.

Usar el **lazo cerrado** puede hacer más fáciles las pruebas de basal y puede reducir mucho el riesgo de hipoglucemia si la basal de tu __Perfil__ es demasiado fuerte.

## Cambiar los ajustes del perfil: cómo hacerlo

1. Asegúrate de haber leído y entendido los ajustes y consejos recomendados de __AAPS__ que están abajo. Si no sigues estos consejos, el proceso de ajuste puede ser difícil y es menos probable que consigas un __Perfil__ bien ajustado
2. Observa y compara con atención, **durante varios días**, qué pasa con tu __glucosa (BG)__ y tu __IOB__.
3. Busca patrones en **AAPS** que pasan a la misma hora (casi) todos los días.
4. Es importante hacerlo durante varios días. Si usas datos de un solo día para decidir los ajustes del __Perfil__, los resultados suelen ser malos.
5. Solo cuando veas un patrón que se repite, por ejemplo, a las 13:00 ves una subida de __glucosa__ o un valor de __IOB__ negativo, empieza a hacer pequeños cambios en tu __Perfil__.
6. Es importante cambiar solo una cosa cada vez. P. ej. aumenta tu basal un 10 % hacia las 13:00.
7. Después de cada cambio, es importante vigilar su efecto en tu __glucosa__ y tu __IOB__ durante los días siguientes.
8. Repite este proceso: observa, decide y vuelve a ajustar si hace falta

No tengas prisa, ¡ve despacio!

## Ajustes y consejos recomendados mientras ajustas la basal

- Haz todas las pruebas con el [lazo cerrado activado](#AapsScreens-loop-status).
- **<u>DESACTIVA</u> todas las [automatizaciones](../DailyLifeWithAaps/Automations.md)**
- **<u>DESACTIVA</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)** para que no intenten adaptar tu perfil.
- No hagas acciones manuales (bolo manual, objetivos temporales, etc.) durante las pruebas: deja que el sistema use solo los ajustes del **Perfil**.
- Para los [gráficos adicionales](#AapsScreens-section-g-additional-graphs): en el gráfico 1, usa Insulina en cuerpo (IOB), Carbohidratos en cuerpo (COB) (y Cambio de sensibilidad). En el gráfico 2, usa Desviaciones e Impacto de la glucosa en sangre. Cuando pidas consejo, incluye siempre estos gráficos en tus capturas de pantalla.
- COB=0[*](#profiletuning-cob-zero)

Otras cosas que lo ideal es evitar, porque influyen en los datos y pueden llevar a malas conclusiones:
- Sin actividad física.
- Sin estrés.
- Sin enfermedad.
- Sin clima extremo, como temperaturas muy altas o muy bajas.
- Sin fallos de sesión de la bomba o del MCG.
- Sin carbohidratos no anunciados.

Ten en cuenta también:
- Si tu [perfil de tasa basal](#your-aaps-profile-basal-rates) es correcto, cuando estás en el objetivo con COB=0[*](#profiletuning-cob-zero) e IOB=0, te quedarás siempre en el objetivo, sea cual sea tu **ISF** (el **ISF** solo se usa cuando estás por encima de tu objetivo de **glucosa**).
- Tienes que mirar la **IOB** actual, pero también el gráfico de **IOB**, para ver cómo ha cambiado la **IOB** en las últimas horas.

(profiletuning-cob-zero)=

***COB = 0**

Significa que la comida está digerida y ya no quedan carbohidratos en tu cuerpo.

**AAPS** puede mostrar [COB=0 aunque todavía tengas carbohidratos activos](../DailyLifeWithAaps/CobCalculation.md).

## Definiciones del [perfil](../SettingUpAaps/YourAapsProfile.md)

Un **perfil demasiado fuerte** significa alguna combinación de lo siguiente:

- El número del [ISF](#your-aaps-profile-insulin-sensitivity-factor) es demasiado pequeño.
- El número de la [basal](#your-aaps-profile-basal-rates) es demasiado grande.
- El número del [I:C](#your-aaps-profile-insulin-to-carbs-ratio) es demasiado pequeño.

## Observaciones de la IOB

*Nota: también puedes usar el gráfico de IOB de Loopalyzer en los informes de Nightscout para ver la IOB de varios días.*

Si ves los siguientes patrones después de unos días, piensa en hacer estos cambios:

### IOB positiva

- La basal del **Perfil** puede no ser suficientemente fuerte (también puede deberse a cosas como comida no anunciada, enfermedad, mala absorción en el lugar de inserción, etc.)

![IOB positiva](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IOB negativa

- Basal por defecto demasiado fuerte.
- Puede ser el efecto de ejercicio o actividad física anterior.

![IOB negativa](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Comida anterior: demasiado bolo (lo que causó una basal temporal a cero muy larga)

![IOB negativa](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Observaciones del objetivo de glucosa

### Atascada alta

- El número del __ISF__ es alto y no es suficientemente fuerte (la insulina calculada es demasiado débil)

![Atascada alta](../images/troubleshooting/profiletuning/StuckHigh.png)

- La basal del __Perfil__ puede no ser suficientemente fuerte (los **SMB** no tienen suficiente «reserva de basal» para usar)
- Puede que un límite de seguridad (¿[MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) se haya activado y esté limitando la insulina. Compruébalo en la pantalla del complemento **APS** (**Configuración → APS → Abrir complemento**); mira [SMB](#Open-APS-features-super-micro-bolus-smb).
- Problema técnico: absorción en el lugar de inserción, set de infusión, ...

### Atascada baja

- El __ISF__ es demasiado fuerte y hay que subir el número
- La basal del __Perfil__ es demasiado fuerte (si además la IOB es negativa)

### Montaña rusa (subidas y bajadas)

- ¿**ISF** demasiado fuerte? Mira tu [perfil de AAPS](#your-aaps-profile-insulin-sensitivity-factor)

![Montaña rusa](../images/troubleshooting/profiletuning/StrongISF.png)

## Observaciones de la glucosa después de las comidas

### Subida rápida y la glucosa se queda alta

- La comida tiene carbohidratos rápidos (como zumo de fruta).
- Piensa en hacer un prebolo, o un prebolo un poco antes.
- El bolo (IC o % inyectado) no es suficientemente fuerte.

![Sube alto](../images/troubleshooting/profiletuning/FastRise.png)

### Subida rápida y después la glucosa baja demasiado

- Piensa en hacer un prebolo; tu **Perfil** puede ser demasiado agresivo (corrige demasiado la subida)
- Bolo demasiado fuerte.



## [Cómo calcular tu I:C](#your-aaps-profile-insulin-to-carbs-ratio)

1. Primero, necesitas los ajustes correctos de la basal por defecto en tu **Perfil**.
2. Empieza en el objetivo, mejor sin IOB negativa.
3. Anota la insulina total administrada en **Administrar → Bomba** (o en el historial de la bomba) y llámala insulina inicial. Mide con mucha exactitud una porción conocida de carbohidratos y anota la hora de inicio y la IOB inicial. Después introduce la información de carbohidratos y bolo en **AAPS** con el asistente (con el I:C configurado ahora). No olvides comerte los carbohidratos ;)
4. Después de unas horas, cuando COB=0[*](#profiletuning-cob-zero) y vuelvas a estar en el objetivo, anota la hora final y la IOB final. Mira la insulina total administrada como antes y llámala insulina final. *NOTA: La duración NO es importante, siempre que sea más larga que tu digestión*
5. A la diferencia entre la insulina inicial y la final, réstale o súmale la diferencia IOB final - IOB inicial. Después resta la insulina basal calculada con los ajustes de tu **Perfil**.
6. Si la __glucosa__ está en el objetivo, tendrás la insulina total usada para «digerir» tus carbohidratos. Calcula tu **I:C**.

### Explicación de los cálculos de I:C

- Con un **Perfil** que tiene la tasa basal por defecto correcta, en cualquier periodo debes quedarte en el objetivo y tener una IOB cercana a 0. Recibes solo la basal de tu **Perfil**.
- A esto le añades carbohidratos y bolo. Espera hasta que tu cuerpo digiera todos los carbohidratos y vuelvas al objetivo de **glucosa**. La insulina que usas será la suma de tu basal + la insulina necesaria para los carbohidratos. Calculas la insulina usada para tu basal (con tu **Perfil**) y el resto será la insulina usada para digerir los carbohidratos.
- Si el periodo es demasiado corto, quedarán carbohidratos sin digerir, y tu «insulina necesaria para los carbohidratos» será errónea.
- Si el periodo es demasiado largo, no pasa nada malo. Usarás todos tus carbohidratos y recibirás más basal. Al final, restarás la basal de la insulina total usada, así que el periodo más largo (con más basal) no cambia el resultado.

Escrito originalmente por @Robby (Discord) como trucos y consejos para ajustar tu **perfil de AAPS**, revisado y editado por la comunidad (¡gracias!).
