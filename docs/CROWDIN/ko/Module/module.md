

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

AndroidAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](index-component-setup), too.

```{image} ../images/modules.png
:alt: Components overview
</code></pre>
    
    <pre><code class="{note}">**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. 인슐린 자동 주입 시스템을 사용할 시에는 완벽하게 작동한다고 증명하는 테스트와 FDA 또는 CE 승인을 받은 인슐린 펌프과 CGM만을 사용하는 것이 매우 중요합니다. 이러한 구성요소에 대한 하드웨어 또는 소프트웨어의 변형은 예기치 않은 인슐린 투약을 야기하여 사용자에게 상당한 위험을 초래할 수 있습니다. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

또한, 펌프 또는 CGM을 사용할 때에는 원래 공급되는 물품 즉 제조업자에 의해 승인된 삽입기, 캐뉼러 및 인슐린 용기만을 사용하는 것이 매우 중요합니다. 검증이 되지 않고 변형된 물품을 사용하는 경우에는 CGM의 부정확성과 인슐린의 투약 오류가 발생할 수 있습니다. 인슐린은 남용되면 매우 위험하니 물품들을 해킹하여 사용하는 것과 같이 본인의 목숨을 가지고 노는 행위와 같은 행동들은 삼가해주시기 바랍니다.

마지막으로는  계산할 수 없을 정도로 혈당을 낮추기 때문에 SGLT-2 억제제 (글 리플로 진)을 절대 사용하면 안된다.  혈당을 올리기 위해 기저양(basal rate)을 낮추는 시스템과 병행하는 것은 글 리폴로 진으로 인해 매우 위헙합니다. 오히려 혈당이 오르지 않을 수 있으며 인슐린 부족의 위험한 상태까지 올 수 있습니다.
</code></pre>

<h2 spaces-before="0">
  필요한 모듈
</h2>

<h3 spaces-before="0">
  당뇨병 관리에 적합하게 개발된 개별 복용량 알고리즘
</h3>

<p spaces-before="0">
  이 모듈은 만들거나 구입되는 것이 아니지만 아마도 과소 평과되고 있는 가장 중요하지만 '모듈'일 것 입니다. 알고리즘이 당뇨병을 관리하는데 심각한 실수를 하지 않고 도움이 되기 위해서는 올바른 설정을 알아야 합니다. 다른 모듈이 없는 경우에도 '프로파일'을 직접 확인하고 조정할 수 있습니다. 대부분의 loop 사용자들은 하루 동안의 호로몬 인슐린 감도 조정에 있어 24 시간 주기의 BR, ISF 및 CR을 사용합니다.
</p>

<p spaces-before="0">
  이 프로파일이 포함하는 부분은
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
  (module-no-use-of-sglt-2-inhibitors)=
</p>
<h3 spaces-before="0">
  SGLT-2 억제제의 미사용
</h3>

<p spaces-before="0">
  글 리플로 진이라고도하는 SGLT2 억제제는 신장에서 포도당의 재 흡수를 억제하여 혈당을 낮추는 약물입니다. 이 억제제는 혈당을 계산할 수 없을 정도로 낮출 수 있기 때문에 절대로 AndroidAPS와 같은 closed loop 시스템과 병행하시면 안됩니다. 케톤산증이나 저혈당의 위험이 아주 큽니다. 혈당을 올리기 위해 기저양(basal rate) 을 낮추는 시스템과 병행하는 것은 글 리폴로 진으로 인해 매우 위헙합니다. 오히려 혈당이 오르지 않을 수 있으며 인슐린 부족의 위험한 상태까지 올 수 있습니다.
</p>

<p spaces-before="0">
  (module-phone)=
</p>
<h3 spaces-before="0">
  핸드폰
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
  인슐린 펌프
</h3>

<p spaces-before="0">
  AndroidAPS <strong x-id="1">currently</strong> works with
</p>

<ul>
  <li>
    <a href="../Configuration/Accu-Chek-Combo-Pump.md">Accu-Chek Combo</a> (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
  </li>
  <li>
    <a href="../Configuration/Accu-Chek-Insight-Pump.md">Accu-Chek Insight (아큐첵 인사이트)</a>
  </li>
  <li>
    <a href="../Configuration/DanaR-Insulin-Pump.md">DanaR (다나알)</a>
  </li>
  <li>
    <a href="../Configuration/DanaRS-Insulin-Pump.md">Dana-i/RS</a>
  </li>
  <li>
    <a href="../Configuration/MedtronicPump.md">some old Medtronic pumps</a> from upcoming version 2.4 (<a href="module-additional-communication-device">additional communication device</a> needed)
  </li>
  <li>
    <a href="../Configuration/OmnipodEros.md">Omnipod Eros</a> (<a href="module-additional-communication-device">additional communication device</a> needed)
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
  (module-additional-communication-device)=
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
  콤보, 인사이트와 오래된 메드트로닉 펌프가 견고한 펌프이며 Loop사용이 가능합니다. 콤보는 표준 루어 잠금을 가지고 있기 때문에 많은 주입 세트 유형들을 선택할 수 있는 장점이 있습니다. 그리고 표준 배터리를 사용하기 때문에 편리하게 주요소, 24시간 편의점에서 구매가 가능하며 정말 급한 경우에 호텔 리모컨에서 잠깐 빌리는 것도 가능합니다 ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (Android 8.1 이상의 폰이 좀 더 대중화되면 바뀔 수도 있습니다)
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. 그러나 일반적으로 이 작업은 한 번만 수행되므로 다른 펌프로 새 기능을 테스트하려는 경우에만 영향을줍니다.
  </li>
  <li>
    So far the Combo works with screen parsing. 일반적으로 잘 동작하지만 아주 느립니다. Loop를 실행하기 위해서는 백그라운드에서 작업이 수행되는 것이 훨씬 많으므로 이것은 문제가 되지 않습니다. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. 야간에는 SMB보다는 TBRs를 더 많이 사용할 것입니다.  The Dana-i/RS is configurable that it does neither beep or vibrate.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Dana 펌프가 배터리와 주사기 주입 시스템이 모두 봉인되어 "방수 보증"이 되는 유일한 펌프입니다.
  </li>
</ul>

<h3 spaces-before="0">
  혈당 출처
</h3>

<p spaces-before="0">
  다음은 AndroidAPS와 호환이 가능한 CGM/ FGM의 짧은 개요입니다. For further details, look <a href="../Configuration/BG-Source.md">here</a>. 짧은 힌트: 만약 혈당 정보가 xdrip 앱 혹은 나이트스카운트 웹에서 보여지고 있는 경우에는 AAPS에서 xdrip (혹은 인터넷이 연결된 상태에서 나이트스카웃) 을 혈당 소스로 선택할수 있습니다.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA is recommended as of version 3.0 (see <a href="Releasenotes-important-hints-3-0-0">release notes</a> for details). xDrip+ must be at least version 2022.01.14 or newer
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
  나이트스카웃은 CGM 데이터 및 안드로이드APS 데이터를 저장하고 표시하며 보고서를 작성할 수 있는 오픈 소스 웹 애플리케이션이다. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  나이트스카웃은 독립적인 다른 모듈입니다. 목표 1을 이행해주시기 바랍니다.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  AAPS -.apk 파일
</h3>

<p spaces-before="0">
  기본 구성 요소의 시스템입니다. 앱을 설치하시기 전에는 apk-파일을 직접 빌드하셔야 합니다.(Android앱을 위한 확장파일명) Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  선택적 모듈
</h2>

<h3 spaces-before="0">
  스마트 워치
</h3>

<p spaces-before="0">
  안드로이드 웨어 1.x이상의 스마트워치를 선택할 수 있습니다. 대부분의 loop사용자들은 소니 스마트 워치 3 (SWR50) 을 착용합니다. 그 이유는 폰이 범위 밖에 있을 때 덱스컴 G5/G5에서 혈당을 읽어올수 있기 때문입니다. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
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
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. 원하는 만큼의 알림을 설정할 수 있고, 알림의 활성 시간을 구체적으로 설정할 수 있으며 무음모드 또한 무시할 수 있는 기능이 있습니다. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. 이 앱에 대한 진행상태가 상당히 빠르기 때문에 문서가 항상 최신으로 업데이트가 되어 있지 않을 수 있음을 유의해주시기 바랍니다.
</p>

<h2 spaces-before="0">
  모듈을 대기하는 동안 수행할 작업들
</h2>

<p spaces-before="0">
  Loop를 close하기 위해 모든 모듈을 가져오는데 가끔은 시간이 걸릴 수 있습니다. 하지만 기다리는 동안 이행해야 하는 작업들이 많기 때문에 걱정하지 마시기 바랍니다. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. AdroidAPS에 익숙해지기 위해 시스템을 테스트 해보기 위해서는 open loop를 사용해보시는 것이 좋습니다. 이 모드를 사용하면 안드로이드APS가 제공하는 조언들을 수동으로 실행할 수 있습니다.
</p>

<p spaces-before="0">
  You can keep on reading through the docs here, get in touch with other loopers online or offline, <a href="../Where-To-Go-For-Help/Background-reading.md">read</a> documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).
</p>

<p spaces-before="0">
  <strong x-id="1">Done?</strong> If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the <a href="../Usage/Objectives.md">Objective description</a> before each new Objective and setup up your <a href="index-component-setup">hardware</a>.
</p>

<p spaces-before="0">
  % Image aliases resource for referencing images by name with more positioning flexibility
</p>

<p spaces-before="0">
  % Hardware and Software Requirements
</p>
