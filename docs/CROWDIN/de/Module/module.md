

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

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Es ist extrem wichtig, dass die Insulinpumpe und das CGM-System, die für ein Closed Loop System mit automatisierter Insulinabgabe verwendet werden, hinreichend getestet und voll funktionstüchtig sind sowie (in Europa) eine CE-Kennzeichnung haben und (in Deutschland) als Medizinprodukte zugelassen sind. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Außerdem ist es ebenso wichtig, nur Originalzubehör zu verwenden. Setzhilfen, Kanülen und Reservoire müssen vom Hersteller für den Einsatz mit deiner Pumpe bzw. deinem CGM zugelassen sein. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist sehr gefährlich, wenn es falsch dosiert wird. Spiele nicht mit deinem Leben, indem du ungeprüftes oder modifiziertes Zubehör verwendest.

Nicht zuletzt darfst Du keine SGLT-2-Hemmer (Gliflozins) einnehmen, da sie den Blutzuckerspiegel unberechenbar senken.  Die Kombination mit einem Closed Loop System, das die basalen Raten senkt, um den BZ zu erhöhen ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
</code></pre>

<h2 spaces-before="0">
  Erforderliche Komponenten
</h2>

<h3 spaces-before="0">
  Gute individuelle Profileinstellungen für Deine Diabetes-Therapie
</h3>

<p spaces-before="0">
  Obwohl Du es weder kaufen noch einfach erstellen kannst, ist dies wahrscheinlich das Modul, das am meisten unterschätzt wird, obwohl es für einen funktionieren Loop absolut wesentlich ist. Wenn Dich der Algorithmus bei Deinem Diabetes-Management unterstützen soll, benötigt dieser die korrekten Einstellungen um keine schwerwiegenden Fehlentscheidungen zu treffen. Auch wenn Dir andere Module noch fehlen, kannst Du Dein bestehendes 'Profil' zusammen mit Deinem Diabetes-Team überprüfen und anpassen. Die meisten Looper verwenden eine sogenannte zirkadiane Basalrate, Korrektur- und KH-Faktoren die sich an der hormonellen Insulinempfindlichkeit im Tagesverlauf orientieren.
</p>

<p spaces-before="0">
  Das Profil beinhaltet:
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
  Keine Verwendung von SGLT-2-Hemmern
</h3>

<p spaces-before="0">
  SGLT-2 Hemmer, auch Gliflozins genannt, hemmen die Resorption (Aufnahme) von Glukose in der Niere. Da sie den Blutzuckerspiegel unberechenbar senken, dürfen sie KEINESFALLS mit einem Closed Loop System wie AndroidAPS verwendet werden! Es bestünde ein enormes Risiko für eine Ketoazidose oder eine Hypoglykämie! Die Kombination dieser Medikamente mit einem Closed Loop System, das die Basalrate senkt, um den BZ zu erhöhen, ist besonders gefährlich, da durch die Gliflozin dieser BZ-Anstieg verhindert wird und ein gefährlicher Zustand durch Insulinmangel auftreten kann.
</p>

<p spaces-before="0">
  (phone)=
</p>
<h3 spaces-before="0">
  Smartphone
</h3>

<p spaces-before="0">
  Die aktuelle Version von AndroidAPS benötigt ein Smartphone mit Google Android 8.0 oder höher. Solltest Du also über ein neues Telefon nachdenken, wird mindestens Android 8.1, idealerweise aber Android 9 oder 10 empfohlen. Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the <a href="https://github.com/miloskozak/androidaps">old repository.</a>
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
  Insulinpumpe
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
    <a href="../Configuration/DanaR-Insulin-Pump.md">Dana R</a>
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
  Zusätzliches Kommunikationsgerät
</h4>

<p spaces-before="0">
  Für alte Medtronic-Pumpen ist ein zusätzliches Kommunikationsgerät (neben Deinem Smartphone) erforderlich, um das Funksignal von der Pumpe zu Bluetooth "zu übersetzen". Wähle die richtige Variante des Kommunikationsgeräts aus, je nach dem welche Pumpe Du nutzt.
</p>

<ul>
  <li>
    {{ OrangeLink }}  <a href="https://getrileylink.org/product/orangelink">OrangeLink Website</a>
  </li>
  <li>
    {{ RileyLink }} <a href="https://getrileylink.org/product/rileylink433">433MHz RileyLink</a>
  </li>
  <li>
    {{ EmaLink }}  <a href="https://github.com/sks01/EmaLink">Emalink Website</a> - <a href="mailto:getemalink@gmail.com">Kontakt:</a>
  </li>
  <li>
    {{ DiaLink }}  DiaLink - <a href="mailto:Boshetyn@ukr.net">Kontakt:</a>
  </li>
  <li>
    {{ LoopLink }}  <a href="https://www.getlooplink.org/">LoopLink Website</a> - <a href="https://jameswedding.substack.com/">Kontakt:</a> - nicht getestet
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">So what's the best pump for looping with AndroidAPS?</strong>
</p>

<p spaces-before="0">
  Die Combo, die Insight und die älteren Medtronic Pumpen sind solide und "loopfähig". Die Combo hat wegen des Standard Luer-Lock-Anschlusses auch den Vorteil, dass die Auswahl an Kathetern groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo.  jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
  </li>
  <li>
    So far the Combo works with screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB.  Die Dana-i/RS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.
  </li>
</ul>

<h3 spaces-before="0">
  BZ-Quelle
</h3>

<p spaces-before="0">
  Dies ist nur eine knappe Übersicht über alle kompatiblen CGM/FGM mit AndroidAPS. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Nur ein kurzer Hinweis: Wenn Du Deine Glukose-Daten in der xDrip+ App oder Deiner Nightscout-Website anzeigen kannst, kannst Du xDrip+ (oder Nightscout mit Webverbindung) als BZ-Quelle in AAPS wählen.
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
  Nightscout ist eine Open Source Web-Anwendung, die Deine CGM-Daten und AndroidAPS-Daten protokollieren und anzeigen kann und Berichte erstellt. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout ist unabhängig von den anderen Modulen. Du brauchst aber auf jeden Fall eine Nightscout-Seite, um das Objetive (Ziel) 1 abzuschließen.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  AAPS-.apk Datei
</h3>

<p spaces-before="0">
  Die grundlegende Komponente des Systems. Bevor Du die App installierst, musst Du zuerst die apk-Datei (das ist Dateinamenerweiterung für eine Android-App) erstellen. Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Optionale Komponenten
</h2>

<h3 spaces-before="0">
  Smartwatch
</h3>

<p spaces-before="0">
  Jede Smartwatch mit Android 1.x oder höher funktioniert. Viele Looper verwenden eine Sony Smartwatch 3 (SWR50), da diese auch Werte vom Dexcom G5/G6 empfangen kann, wenn sich das Smartphone nicht in Reichweite befindet. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
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
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. Du kannst in xDrip+ beliebig viele Alarme einreichten, festlegen zu welchen Zeiten diese aktiv sein sollen, ob sie die Stummschaltung des Smartphones überschreiben können etc. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. Beachte bitte, dass die Entwicklung von xDrip+ sehr agil ist und die Dokumentation damit teilweise nicht Schritt halten und entsprechend nicht immer aktuell sein kann.
</p>

<h2 spaces-before="0">
  Wartezeit überbrücken
</h2>

<p spaces-before="0">
  Manchmal dauert es eine Weile, um alle Module für den Closed Loop zusammen zu bekommen. Aber keine Sorge, es gibt viele Dinge, die Du in der Zwischenzeit machen kannst. Es ist ABSOLUT WICHTIG, Deine Basalrate (BR), die KH-Faktoren (IC), Korrekturfaktoren (ISF) etc. intensiv zu prüfen und ggf. anzupassen. Der Open Loop ist zudem eine sehr gute Möglichkeit, das System kennenzulernen und mit AndroidAPS vertraut zu werden. Im Open Loop gibt AndroidAPS Behandlungsempfehlungen, die Du manuell umsetzen musst.
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
  % Hardware- und Software-Anforderungen
</p>
