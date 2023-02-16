

<div id="front-matter"><ul><li><div class="yaml-key" translate="no" has_child_nodes="yes">substitutions: </div><ul><li><div class="yaml-key" translate="no" has_child_nodes="no">DiaLink: </div><div class="yaml-value">`{image} ../images/omnipod/DiaLink.png`</div></li>
- <div class="yaml-key" translate="no" has_child_nodes="no">EmaLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/EmaLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">LoopLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/LoopLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">OrangeLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/OrangeLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">RileyLink: </div><div class="yaml-value">
    ```{image} ../images/omnipod/RileyLink.png</p> 
    
    <pre><code class="&lt;/div&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;">

# Component Overview

AndroidAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](../index.md#component-setup), too.

```{image} ../images/modules.png
:alt: Components overview
</code></pre>
    
    <pre><code class="{note}">**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Es importante que sólo utilice una bomba de insulina y una bomba de insulina y MCG aprobados por la FDA o CE, para cerrar un lazo de dosificación de insulina automatizado. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Además, es igualmente importante utilizar los suministros originales, como los insertadores, las canulas y los recipientes de insulina aprobados por el fabricante para su uso con la bomba o MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. Insulina es muy peligrosa cuando se malinterpreta-por favor, no juegas con tu vida hackeando con tus suministros.

Por último pero no por ello menos importante, no hay que tomar inhibidores SGLT-2 (gliflozins) ya que reducen incalculablemente los niveles de azúcar en sangre.  La combinación con un sistema que reduce las tasas basales para aumentar la BG es especialmente peligrosa, ya que debido al gliflozin este aumento en BG podría no suceder y podría derivar en un peligroso estado de falta de insulina.
</code></pre>

<h2 spaces-before="0">
  Módulos necesarios
</h2>

<h3 spaces-before="0">
  Algoritmo de dosificación individual bueno para su tratamiento con diabetes
</h3>

<p spaces-before="0">
  A pesar de que esto no es algo para crear o comprar, este es el "módulo" que probablemente se subestime mas pero es esencial. Cuando dejas que un algoritmo ayude a manejar tu diabetes, necesita saber los ajustes correctos para no cometer errores severos. Incluso si aún le faltan otros módulos, ya puede verificar y adaptar su 'perfil' en colaboración con su equipo de diabetes. La mayoría de los loopers utilizan el BR circadiano, ISF y CR, que adaptan la sensibilidad de la insulina hormonal durante el día.
</p>

<p spaces-before="0">
  El perfil incluye
</p>

<ul>
  <li>
    BR (Basal rates)
  </li>
  <li>
    ISF (insulin sensitivity factor) is your blood glucose unit per one unit insulin
  </li>
  <li>
    CR (carb ratio) is grams carbohydrate per one unit insulin
  </li>
  <li>
    DIA (duration of insulin acting).
  </li>
</ul>

<p spaces-before="0">
  (no-use-of-sglt-2-inhibitors)=
</p>
<h3 spaces-before="0">
  Sin uso de inhibidores de SGLT-2
</h3>

<p spaces-before="0">
  Los inhibidores de la SGLT-2, también llamados gliflozinas, inhiben la reabsorción de la glucosa en el riñón. A medida que incalculablemente reducen los niveles de azúcar en la sangre, NO DEBE tomarlos mientras use un sistema de circuito cerrado como AndroidAPS! ¡ Habrá un riesgo enorme de cetoacidosis o de una hipoglucemia! La combinación de este medicamento con un sistema que reduce las tasas basales con el fin de aumentar el BG es especialmente peligroso ya que debido a la gliflozina este aumento en BG podría no suceder y puede ocurrir un estado peligroso de falta de insulina.
</p>

<p spaces-before="0">
  (phone)=
</p>
<h3 spaces-before="0">
  Teléfono
</h3>

<p spaces-before="0">
  The current version of AndroidAPS requires an Android smartphone with Google Android 8.0 or above. So if you are thinking about a new phone, Android 8.1 is recommended at a minimum but optimally choose Android 9 or 10. Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the <a href="https://github.com/miloskozak/androidaps">old repository.</a>
</p>

<p spaces-before="0">
  Users are creating a <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">list of tested phones and watches</a>
</p>

<p spaces-before="0">
  To record a phone or watch that isn't already listed in the spreadsheet then please fill in the <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">form</a>.
</p>

<p spaces-before="0">
  Any problems with the spreadsheet please send an email to <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, any donations of phone/watch models that still need testing please send an email to <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  Bomba de insulina
</h3>

<p spaces-before="0">
  AndroidAPS <strong x-id="1">currently</strong> works with
</p>

<ul>
  <li>
    <a href="../Configuration/Accu-Chek-Combo-Pump.md">Accu-Chek Combo</a> (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
  </li>
  <li>
    <a href="../Configuration/Accu-Chek-Insight-Pump.md">Accu-Chek Insight</a>
  </li>
  <li>
    <a href="../Configuration/DanaR-Insulin-Pump.md">DanaR</a>
  </li>
  <li>
    <a href="../Configuration/DanaRS-Insulin-Pump.md">Dana-i/RS</a>
  </li>
  <li>
    <a href="../Configuration/MedtronicPump.md">some old Medtronic pumps</a> from upcoming version 2.4 (<a href="../Module/module.md#additional-communication-device">additional communication device</a> needed)
  </li>
  <li>
    <a href="../Configuration/OmnipodEros.md">Omnipod Eros</a> (<a href="../Module/module.md#additional-communication-device">additional communication device</a> needed)
  </li>
  <li>
    <a href="../Configuration/OmnipodDASH.md">Omnipod DASH</a>
  </li>
</ul>

<p spaces-before="0">
  If no additional communication device  is mentioned the communication betweeen insulin pump and AndroidAPS is based on the integrated bluetooth stack of Android without the need of an additional communication device to translate the communnication protocol.
</p>

<p spaces-before="0">
  <strong x-id="1">Other pumps</strong> that may have the potential to work with AndroidAPS are listed on the <a href="../Getting-Started/Future-possible-Pump-Drivers.md">Future (possible) Pumps</a> page.
</p>

<p spaces-before="0">
  (additional-communication-device)=
</p>
<h4 spaces-before="0">
  Additional communication device
</h4>

<p spaces-before="0">
  For old medtronic pumps an additional communication device (besides your phone) is needed to "translate" the radio signal from pump to bluetooth. Make sure to choose the correct version depending on your pump.
</p>

<ul>
  <li>
    {{ OrangeLink }}  <a href="https://getrileylink.org/product/orangelink">OrangeLink Website</a>
  </li>
  <li>
    {{ RileyLink }} <a href="https://getrileylink.org/product/rileylink433">433MHz RileyLink</a>
  </li>
  <li>
    {{ EmaLink }}  <a href="https://github.com/sks01/EmaLink">Emalink Website</a> - <a href="mailto:getemalink@gmail.com">Contact Info</a>
  </li>
  <li>
    {{ DiaLink }}  DiaLink - <a href="mailto:Boshetyn@ukr.net">Contact Info</a>
  </li>
  <li>
    {{ LoopLink }}  <a href="https://www.getlooplink.org/">LoopLink Website</a> - <a href="https://jameswedding.substack.com/">Contact Info</a> - Untested
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">So what's the best pump for looping with AndroidAPS?</strong>
</p>

<p spaces-before="0">
  El Combo, el Insight y los Medtronics más antiguos son bombas sólidas y loopeables. Además el Combo tiene la ventaja de más tipos de equipos de infusión entre los que escoger teniendo el estándar luer lock. Y la batería es una común que puedes comprar en cualquier gasolinera, tienda de conveniencia 24 horas y si realmente necesitas una, Usted puede robar/tomarlo prestado del mando a distancia en la habitación del hotel ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (esto puede cambiar en el futuro cuando Android 8.1 sea más popular)
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Pero esto se realiza normalmente solo una vez, por lo que solo impacta si quieres probar nuevas características con bombas diferentes.
  </li>
  <li>
    So far the Combo works with screen parsing. En general funciona bien pero es lento. Para lazo cerrado eso no es crucial puesto que trabaja en segundo plano, sin embargo, usa más tiempo la conexión bluetooth aumentando la probabilidad de fallo de conexión, lo cual no es fácil si te lejas del móvil mientras pones un bolo y cocinas. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. Por la noche, preferirás usar TBR sobre SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Aunque solo la Dana es tiene garantizado waterproof debido a su sellado en el compartimento de la batería y el reservorio.
  </li>
</ul>

<h3 spaces-before="0">
  Fuentes de BG (datos de glucemia)
</h3>

<p spaces-before="0">
  Esta es sólo una breve descripción general de todos los MCGs/FGM compatibles con AndroidAPS. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Solo una breve sugerencia: si puedes visualizar tus datos de glucosa en la aplicación xDrip+ o en el sitio web de Nightscout, puedes elegir xDrip+ (o Nightscout con la conexión web) como fuente BG en AAPS.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA is recommended as of version 3.0 (see <a href="../Installing-AndroidAPS/Releasenotes.md#important-hints-3-0-0">release notes</a> for details). xDrip+ must be at least version 2022.01.14 or newer
  </li>
  <li>
    <a href="../Hardware/DexcomG5.md">Dexcom G5</a>: It works with xDrip+ app or patched Dexcom app
  </li>
  <li>
    <a href="../Hardware/DexcomG4.md">Dexcom G4</a>: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
  </li>
  <li>
    <a href="../Hardware/Libre2.md">Libre 2</a>: It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
  </li>
  <li>
    <a href="../Hardware/Libre1.md">Libre 1</a>: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
  </li>
  <li>
    <a href="../Hardware/Eversense.md">Eversense</a>: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
  </li>
  <li>
    <a href="../Hardware/MM640g.md">Enlite (MM640G/MM630G)</a>: quite complicated with a lot of extra stuff
  </li>
</ul>

<h3 spaces-before="0">
  Nightscout
</h3>

<p spaces-before="0">
  Nightscout es una aplicación web de código abierto que puede registrar y visualizar los datos de MCG y los datos de AndroidAPS y crea informes. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout es independiente de los otros módulos. Lo necesitará para cumplir el Objetivo 1.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  Archivo AAPS-.apk
</h3>

<p spaces-before="0">
  El componente básico del sistema. Antes de instalar la aplicación, tienes que construir el archivo apk (que es la extensión de nombre de archivo para una aplicación Android) primero. Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Módulos opcionales
</h2>

<h3 spaces-before="0">
  Smartwatches (Relojes inteligentes)
</h3>

<p spaces-before="0">
  Puede elegir cualquier smartwatch con Android Wear 1.x y superior. La mayoría de los loopers llevan un Sony Smartwatch 3 (SWR50), ya que es el único reloj que puede obtener lecturas de Dexcom G5/G5 cuando el teléfono está fuera de rango. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
</p>

<p spaces-before="0">
  Users are creating a <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">list of tested phones and watches</a>. There are different watchfaces for use with AndroidAPS, which you can find <a href="../Configuration/Watchfaces.md">here</a>.
</p>

<p spaces-before="0">
  To record a phone or watch that isn't already listed in the spreadsheet then please fill in the <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">form</a>.
</p>

<p spaces-before="0">
  Any problems with the spreadsheet please send an email to <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, any donations of phone/watch models that still need testing please send an email to <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  xDrip+
</h3>

<p spaces-before="0">
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. Puede tener el número de alarmas que desee, especificar la hora en la que la alarma debe estar activa, se puede alterar temporalmente la modalidad silenciosa, etc. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. Por favor, tenga en cuenta que las documentaciones de esta aplicación no siempre están al día, ya que su progreso es bastante rápido.
</p>

<h2 spaces-before="0">
  Qué hacer mientras se espera a los módulos
</h2>

<p spaces-before="0">
  A veces se tarda un tiempo en obtener todos los módulos para cerrar el lazo. Pero no te preocupes, hay un montón de cosas que puedes hacer mientras esperas. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. Y tal vez un lazo abierto puede ser una buena forma de probar el sistema y familiarizarse con AndroidAPS. Usando este modo, AndroidAPS le da consejos de tratamiento que puede ejecutar manualmente.
</p>

<p spaces-before="0">
  You can keep on reading through the docs here, get in touch with other loopers online or offline, <a href="../Where-To-Go-For-Help/Background-reading.md">read</a> documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).
</p>

<p spaces-before="0">
  <strong x-id="1">Done?</strong> If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the <a href="../Usage/Objectives.md">Objective description</a> before each new Objective and setup up your <a href="../index.md#component-setup">hardware</a>.
</p>

<p spaces-before="0">
  % Image aliases resource for referencing images by name with more positioning flexibility
</p>

<p spaces-before="0">
  % Hardware and Software Requirements
</p>
