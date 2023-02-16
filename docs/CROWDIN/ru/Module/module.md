

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

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
</code></pre>

<h2 spaces-before="0">
  Необходимые модули
</h2>

<h3 spaces-before="0">
  Хороший индивидуальный алгоритм дозировки для вашей терапии диабета
</h3>

<p spaces-before="0">
  Хотя его нельзя сконструировать или купить, это, вероятно, самый недооцениваемый "модуль", существенно важный для системы. Когда алгоритму доверяется управлять диабетом, следует знать правильные настройки, чтобы не допустить серьезных ошибок. Даже если у вас еще нет других модулей, вы можете в сотрудничестве с вашим эндокринологом проверить и адаптировать свой профиль. Большинство пользователей систем ИПЖ используют циркулярные суточные величины скорости базала (BR), гормональную чувствительность к инсулину ISF и соотношение инсулин-углеводы CR.
</p>

<p spaces-before="0">
  Профиль включает
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
  Не использовать SGLT-2 ингибиторы
</h3>

<p spaces-before="0">
  SGLT-2 ингибиторы, которые также называются глифлозины, блокируют реабсорбцию глюкозы в почках. Поскольку они непредсказуемо снижают уровень сахара в крови, их принимать НЕЛЬЗЯ при использовании таких систем как AAPS! Существует огромный риск возникновения кетоацидоза или гипогликемии! Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
</p>

<p spaces-before="0">
  (phone)=
</p>
<h3 spaces-before="0">
  Телефон
</h3>

<p spaces-before="0">
  Текущая версия AndroidAPS требует Android-смартфона с Google Android 8.0 или выше. Так что если вы думаете о новом телефоне, рекомендуем хотя бы Android 8., но оптимально Android 9 или 10. Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the <a href="https://github.com/miloskozak/androidaps">old repository.</a>
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
  Инулиновая помпа
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
  Если не упомянуто дополнительное коммуникационное устройство, то связь между помпой и AndroidAPS происходит за счет встроенного модуля bluetooth без необходимости дополнительного протокола коммуникации.
</p>

<p spaces-before="0">
  <strong x-id="1">Other pumps</strong> that may have the potential to work with AndroidAPS are listed on the <a href="../Getting-Started/Future-possible-Pump-Drivers.md">Future (possible) Pumps</a> page.
</p>

<p spaces-before="0">
  (additional-communication-device)=
</p>
<h4 spaces-before="0">
  Дополнительное устройство коммуникации
</h4>

<p spaces-before="0">
  Для старых помп Medtronic требуется дополнительное устройство коммуникации (кроме вашего телефона) для "перевода" радиосигнала от помпы на Bluetooth. Убедитесь, что выбрана правильная версия для вашей помпы.
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
  Combo, Insight и старые Medtronic – это надежные помпы, которые можно использовать в системах замкнутого цикла. У Combo преимущество выбора инфузионной системы, так как в ней применен стандартный разъем типа luer. А батарею вы можете купить на любой заправочной станции или в круглосуточно работающем магазине, а при необходимости ее можно добыть из пульта дистанционного управления в номере отеля ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (Ситуация может измениться, когда Android 8.1 станет более популярным)
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Но обычно это делается только один раз, так что это свойство важно, если хотите проверить новую функцию на других помпах.
  </li>
  <li>
    So far the Combo works with screen parsing. В целом, это неплохо, но такая работа идет медленно. Для цикла ИПЖ это не имеет значения, так как он работает в фоновом режиме. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. В ночное время вы, скорее всего, будете использовать TBR а не SMB.  Dana-i/RS может быть сконфигурирована так, что не будет ни вибрировать ни пищать.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Но только помпы Dana также "гарантированно водонепроницаемы" благодаря изолированным отсекам батареи и системы наполнения резервуара.
  </li>
</ul>

<h3 spaces-before="0">
  Источник данных гликемии
</h3>

<p spaces-before="0">
  Это всего лишь краткий обзор совместимых с AndroidAPS систем мониторинга ГК. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Или если проще: если данные ГК могут приниматься приложением xDrip+ или на веб-сайте Nightscout, вы можете выбрать xDrip+ (или Nightscout с интернет-соединением) как источник ГК в AAPS.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA is recommended as of version 3.0 (see <a href="../Installing-AndroidAPS/Releasenotes.md#important-hints-3-0-0">release notes</a> for details). xDrip+ должен быть по крайней мере версии 2022.01.14 или новее
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
  Nightscout - веб-приложение с открытым исходным кодом, которое может регистрировать/отображать данные мониторинга и AndroidAPS и создавать отчеты. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout не зависит от других модулей. Он понадобится для выполнения цели 1.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  Файл AAPS-.apk
</h3>

<p spaces-before="0">
  Основной компонент системы. Перед установкой приложения необходимо создать apk-файл ( расширение имен файлов для приложений Android). Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Дополнительные модули
</h2>

<h3 spaces-before="0">
  Смарт часы
</h3>

<p spaces-before="0">
  Вы можете выбрать смарт-часы с Android Wear 1.x и выше. Большинство пользователей носят Sony Smartwatch 3 (SWR50), поскольку это единственные смарт-часы, которые могут получать данные от Dexcom G5/G5, когда телефон вне доступа. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
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
  xDrip +
</h3>

<p spaces-before="0">
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. Вы можете иметь столько оповещений сколько хотите, указать время, когда оповещениям разрешено работать, должны ли они иметь приоритет в режиме тишины и т. п. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. Пожалуйста, имейте в виду, что документация к этому приложению не всегда актуальна, так как проект развивается довольно быстро.
</p>

<h2 spaces-before="0">
  Что делать во время ожидания модулей
</h2>

<p spaces-before="0">
  Иногда требуется некоторое время, чтобы получить все модули для закрытого цикла ИПЖ. Но не беспокойтесь, можно многое сделать во время ожидания. НЕОБХОДИМО проверить и (где требуется) адаптировать базальную скорость (BR), соотношение инсулин-углеводы (IC), фактор чувствительности к инсулину (ISF) и т. д. И, возможно, незамкнутый цикл может быть хорошим способом проверить систему и познакомиться с AndroidAPS. В этом режиме AndroidAPS дает рекомендации, которые можно выполнить вручную.
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
