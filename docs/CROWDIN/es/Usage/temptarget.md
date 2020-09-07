# Objetivos temporales

## ¿Qué son los objetivos temporales y como puedo ajustarlos y configurarlos?

Con "Objetivo-Temporal" (o TT corto), puede cambiar su objetivo de glucosa en sangre durante un cierto periodo de tiempo. Estos son principalmente necesarios cuando hay actividad, hipoglucemia (carbohidratos de tratamiento) o comer pronto, se pueden configurar los valores por defecto. Para configurar uno, usted puede ir al menú en la esquina derecha en la parte superior y vaya a Preferencias-> Otros-> por Defecto Objetivos-Temporales.

![Establecer objetivos temporales por defecto](../images/TempTarget_Default.png)

Para utilizar uno de los conjuntos "Por defecto-Objetivos-Temporales", puede presionar mucho tiempo en su objetivo en la esquina derecha de la parte superior de la pestaña de visión general o utilizar los accesos directos en el botón "Carbs" de color naranja. To manually set a [“Custom Temp-Target”](../Usage/temptarget#custom-temp-target) (BG value and/or duration) use “Custom“ after long-pressing your target in the top right corner or use the “Temporary Target“ button in the [actions tab / menu](../Configuration/Config-Builder#actions).

![Establecer el objetivo temporal](../images/TempTarget_Set2.png)

## Objetivo temporal ante Hipoglucemia

Esto se puede considerar como el Objetivo-Temporal más importante. Hay varias razones para ello:

1. Al darse cuenta de que va a ser baja: Generalmente, el Lazo debe manejarlo, pero a veces se puede ver mejor en avance que el lazo, por lo que el lazo puede reaccionar más rápido cuando se dirige a un valor de glucosa en sangre más alto.
2. Cuando usted come carbohidratos para una hipoglucemia, su glucosa en sangre se elevará muy rápido. El lazo corregirá el aumento o incluso dara SMB si está habilitado. Un "Objetivo-Temporal-Hipo-Hipo" puede evitar eso. 
3. (Avanzado, [objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): Puede activar "Alto Objetivos-Temporales subir sensibilidad" para Objetivos-Temporales de 100mg/dl o 5.5mmol/l o superior en OpenAPS SMB, por lo que AndroidAPS es más sensible.
4. (avanzado, [Objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): Puede desactivar “SMB con un objetivo temporal alto”, de modo que incluso si tiene COB > 0, "SMB con Objetivo-Temporal" o "SMB siempre" habilitado y OpenAPS SMB activo, AndroidAPS no dará SMB mientras estén activos los altos objetivos temporales. 

Nota: si especifica carbohidratos con el botón de carbohidratos y su glucosa en sangre es inferior a 72mg/dl o 4mmol/l, Hypo TT se habilita automáticamente.

## Actividad con Objetivo-Temporal

Antes y durante la actividad, es posible que desee tener un objetivo más alto para prevenir bajas de glucosa. Para simplificar la configuración de Objetivo-Temporal, puede configurar un valor predeterminado "Actividad Objetivo-Temporal". Basándose en DIA, IOB y su experiencia, es posible que desee establecer el TT antes de la actividad. Véase también [sección de deportes en el FAQ](../Getting-Started/FAQ#sports).

Avanzado, [objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): Las ventajas acerca de "Actividad Objetivo-Temporal", es que puede habilitar "Alto Objetivo-Temporal subir sensibilidad" para Objetivos-Temporales superiores o iguales 100mg/dl o 5.5mmol/L en OpenAPS SMB. Entonces AndroidAPS es más sensible. Algunas personas, en cambio, hacen un cambio de perfil antes/mientras que la actividad TT, pero todo el mundo es diferente. Si se desactiva "SMB con alto Objetivo-Temporal", AndroidAPS no utilizará SMB, incluso con COB > 0, "SMB con Objetivo-Temporal" o "SMB siempre" habilitado y OpenAPS SMB activo.

## Comer pronto objetivo-temporal

Si sabes, que quieres comer pronto, puedes activar este Objetivo-Temporal, así que ya hay más IOB antes de comer. Especialmente para aquellos que no hacen el pre-bolo, podría ser una buena alternativa para conseguir que la glucosa en sangre llegue a un objetivo más bajo. Puedes leer más sobre el "modo de comer pronto" en el artículo ['Cómo hacer "comiendo pronto" modo'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) o [aquí](https://diyps.org/tag/eating-soon-mode/).

Avanzado, [objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): Si utiliza OpenAPS SMB y tiene "Bajo Objetivo-Temporal bajando Sensibilidad", AndroidAPS funciona un poco más agresivo. El requisito es una Objetivo-Temporal de menos de 100 mg/dl o 5.5 mmol/l para esta opción.

## Objetivo-Temporal personalizado

A veces, sólo quieres tener un objetivo temporal que no sea el de los valores por defecto. Puede establecer una pulsando una vez sobre el objetivo (rango) en la esquina derecha en la visión general o en la Pestaña Acción.

![Establecer el objetivo temporal a través de la pestaña Acción](../images/TempTarget_ActionTab.png)