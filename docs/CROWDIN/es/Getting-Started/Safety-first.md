# La seguridad es lo primero

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## General

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Este dispositivo está tomando el control del suministro de tu insulina: supervísalo siempre, entiende cómo funciona y aprende a interpretar sus acciones.
- Remember that, once paired, the phone can instruct the pump to do anything. Utiliza este teléfono sólo para AndroidAPS y, si es para un niño, comunicaciones básicas. No instales aplicaciones o juegos innecesarios (!!!!) que podrían introducir software malicioso como troyanos, virus o bots que podrían interferir con tu sistema.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. P.e. según indican algunas personas, se necesitan respuestas más suaves para hipos ya que AndroidAPS ya ha ido reduciendo el suminsitro de insulina.

## Comunicaciones SMS

- AndroidAPS allows you to control a child's phone remotely via text message. Si activas esta función "SMS Communicator", recuerda siempre que el teléfono configurado para dar comandos remotos podría ser robado. Por lo que protege siempre el móvil con código PIN.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Es aconsejable, por seguridad, configurar esta función para que los textos de confirmación se envíen al menos a dos números de teléfono diferentes, así si falla (o ha sido robado) uno, quedará el otro.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

:::{note}
**IMPORTANT SAFETY NOTICE**

La base de las características de seguridad de AndroidAPS discutidas en esta documentación se basan en las características de seguridad del hardware utilizado para construir su sistema. Es importante que sólo utilice una bomba de insulina y una bomba de insulina y MCG aprobados por la FDA o CE, para cerrar un lazo de dosificación de insulina automatizado. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Además, es igualmente importante utilizar los suministros originales, como los insertadores, las canulas y los recipientes de insulina aprobados por el fabricante para su uso con la bomba o MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. Insulina es muy peligrosa cuando se malinterpreta-por favor, no juegas con tu vida hackeando con tus suministros.

Por último pero no por ello menos importante, no hay que tomar inhibidores SGLT-2 (gliflozins) ya que reducen incalculablemente los niveles de azúcar en sangre.  La combinación con un sistema que reduce las tasas basales para aumentar la BG es especialmente peligrosa, ya que debido al gliflozin este aumento en BG podría no suceder y podría derivar en un peligroso estado de falta de insulina.
:::
