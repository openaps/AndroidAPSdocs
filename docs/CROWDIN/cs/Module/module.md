

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
    
    <p spaces-before="0">
      :::{note}<br x-id="2" /> <strong x-id="1">IMPORTANT SAFETY NOTICE</strong>
    </p>
    
    <p spaces-before="0">
      Základy bezpečnosti AndroidAPS zmíněné v této dokumentaci jsou postaveny na bezpečnostních vlastnostech hardwaru používaného k vybudování vašeho systému. Je zásadně důležité, abyste používali pouze testované, plně funkční a pro uzavřenou smyčku schválené inzulinové pumpy a CGM. Hardwarové nebo softwarové úpravy těchto komponent mohou způsobit neočekávané dávkování inzulínu, což může znamenat pro uživatele významné riziko. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, <em x-id="3">do not use</em> these for creating an AndroidAPS system.
    </p>
    
    <p spaces-before="0">
      Kromě toho je stejně důležité používat pouze originální spotřební materiál, jako jsou sety a zásobníky, schválené výrobcem pro použití s vaší pumpou nebo CGM. Použití nevyzkoušeného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby při dodávce inzulínu. Inzulín je velmi nebezpečný, když není dávkovaný správně – prosím, nehazardujte se svým životem tím, že budete upravovat spotřební materiál.
    </p>
    
    <p spaces-before="0">
      V neposlední řadě nesmíte užívat SGLT-2 inhibitory (glifloziny), které snižují hadinu cukru v krvi.  Kombinace se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.
:::
    </p>

<h2 spaces-before="0">
  Nezbytné moduly
</h2>

<h3 spaces-before="0">
  Správný individuální algoritmus dávkování pro léčbu vašeho diabetu
</h3>

<p spaces-before="0">
  I když to není něco, co by bylo možné vytvořit nebo koupit, je to "modul", který je pravděpodobně nejvíce podceňován, je však nejdůležitější. Když necháte algoritmus zasahovat do léčby vašeho diabetu, musí znát správná nastavení, aby nedělal vážné chyby. I když vám stále chybí další moduly, již nyní můžete ve spolupráci se svým diabetologem ověřit a upravit svůj 'profil'. Většina uživatelů uzavřené smyčky používá cirkadiánní bazální dávkování, citlivost a sacharidový poměr, které se přizpůsobují hormonální aktivitě inzulinu v průběhu dne.
</p>

<p spaces-before="0">
  Součástí profilu je
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
  Nepoužívat inhibitory SGLT-2
</h3>

<p spaces-before="0">
  Inhibitory SGLT-2, též nazývané glifloziny, inhibují reabsorpci glukózy v ledvinách. Vzhledem k tomu, že nevyčíslitelně snižují hladinu cukru v krvi, NESMÍTE je užívat při používání uzavřené smyčky jako je AndroidAPS! Bylo by obrovské riziko ketoacidózy nebo hypoglykémií! Kombinace této léčby se systémem, která snižuje bazální hodnoty ke zvýšení glykémie je zvláště nebezpečná, protože v důsledku gliflozinu tento nárůst glykémie nemusí nastat a může dojít k nebezpečnému stavu nedostatku inzulínu.
</p>

<p spaces-before="0">
  (phone)=
</p>
<h3 spaces-before="0">
  Telefon
</h3>

<p spaces-before="0">
  Aktuální verze AndroidAPS vyžaduje u telefonů s Androidem minimálně verzi Google Android 8.0 nebo vyšší. Takže pokud přemýšlíte o novém telefonu, je sice doporučená minimállní verze Android 8.1, ale optimální volba je Android 9 nebo 10. Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the <a href="https://github.com/miloskozak/androidaps">old repository.</a>
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
  Inzulinová pumpa
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
  If you need to <strong x-id="1">privately buy</strong> a pump then you can find various distributors is in <a href="https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0">this spreadsheet</a>, please share the details of yours if not already listed.
</p>

<p spaces-before="0">
  (additional-communication-device)=
</p>
<h4 spaces-before="0">
  Přídavná komunikační zařízení
</h4>

<p spaces-before="0">
  Pro staré pumpy Medtronic je potřeba přídavné komunikační zařízení (spojené s telefonem), aby dělalo "tlumočníka" překládajícího rádiový signál z pumpy na bluetooth pro komunikaci s telefonem. Nezapomeňte vybrat správné zařízení, které odpovídá vaší pumpě.
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
  Combo, Insight a starší pumpy Medtronic jsou dobré pumpy, které lze používat se smyčkou. Combo má také výhodu v podobě mnohem většího počtu typů infuzních setů se standardním závitem luer lock. A baterie je obyčejná, kterou můžete koupit na každé benzínce, v obchodě který má otevřeno 24 hodin denně a pokud opravdu jednu potřebujete, můžete ji ukrást/půjčit si ji z ovládání v hotelovém pokoji ;-)
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (To se může v budoucnu změnit, až bude Android 8.1 více rozšířený)
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Ale to obvykle děláte pouze jednou, takže to ovlivňuje pouze situace, kdy chcete testovat nové funkce s různými pumpami.
  </li>
  <li>
    So far the Combo works with screen parsing. Obecně to funguje skvěle, ale je to pomalé. Pro smyčku to tolik nevadí, vše pracuje na pozadí. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. V noci pravděpodobně používáte více dočasné bazální dávky než SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Pouze pumpy Dana mají také „záruku na vodotěsnost“ díky uzavřenému prostoru pro baterii a prostoru pro plnicí zásobník.
  </li>
</ul>

<h3 spaces-before="0">
  Zdroj glykémií
</h3>

<p spaces-before="0">
  Toto je jen krátký přehled všech CGM/FGM kompatibilních s AndroidAPS. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Rychlý tip: Pokud dokážete zobrazit údaje o glykémii v aplikaci xDrip+ nebo na webu Nightscout, můžete v AAPS jako zdroj glykémie vybrat xDrip+ (nebo Nightscout, máte-li připojení k internetu).
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
  Nightscout je open source webová aplikace, která může zaznamenávat a zobrazovat vaše údaje z CGM a údaje z AndroidAPS a vytvářet zprávy. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout je nezávislý na ostatních modulech. Budete jej potřebovat ke splnění Cíle 1.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  Soubor AAPS-.apk
</h3>

<p spaces-before="0">
  Základní součást systému. Před samotnou instalací aplikace si nejprve budete muset sestavit soubor apk (což je přípona souboru aplikace pro Android). Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Volitelné moduly
</h2>

<h3 spaces-before="0">
  Chytré hodinky
</h3>

<p spaces-before="0">
  Můžete si vybrat chytré hodinky s Android Wear 1.x a novějším. Většina uživatelů uzavřené smyčky používá Sony Smartwatch 3 (SWR50), protože je to jediný model, který dokáže číst data z Dexcomu G5, i když je telefon mimo dosah. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
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
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. Můžete tak mít libovolný počet výstrah, specifikovat časy, kdy budou aktivní, zda mají přebít tichý režim telefonu apod. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. Uvědomte si prosím, že dokumentace k této aplikaci není vždy aktuální, protože vývoj aplikace je poměrně rychlý.
</p>

<h2 spaces-before="0">
  Co dělat při čekání na moduly
</h2>

<p spaces-before="0">
  Někdy to zabere nějaký čas, než budete mít všechny moduly potřebné pro uzavření smyčky. Ale žádné obavy, je mnoho věcí, které můžete při čekání udělat. Je NEZBYTNÉ ověřit (a případně upravit) bazální dávky (BR), sacharidový poměr (ICR), citlivost na inzulin (ISF) atd. Otevřená smyčka možná bude dobrým způsobem, jak systém otestovat a seznámit se s AndroidAPS. AndroidAPS v tomto režimu poskytuje rady ohledně léčby, které musíte provádět manuálně.
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
