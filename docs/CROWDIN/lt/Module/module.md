

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

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Labai svarbu, kad insulino pompa ir CGM sistema, naudojama uždaro ciklo sistemai su automatiniu insulino tiekimu, būtų tinkamai išbandytos ir visiškai veikiančios, pažymėtos CE ženklu (Europoje) kaip medicinos prietaisai. Šių komponentų aparatinės ar programinės įrangos pakeitimai gali sukelti netikėtą insulino tiekimą ir taip sukelti didelę riziką vartotojui. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Be to, ne mažiau svarbu naudoti tik originalius priedus, tokius kaip įšovikliai, kateteriai ir insulino rezervuarai, patvirtinti jūsų pompos ar CGM gamintojo. Nepatikrintų ar modifikuotų priedų naudojimas gali sukelti CGM sistemos netikslumus ir insulino tiekimo klaidas. Insulinas yra labai pavojingas, jei jis neteisingai dozuotas. Nežaisk su savo gyvenimu naudodamas neišbandytus ar modifikuotus priedus.

Galiausiai, jūs neturėtumėte vartoti SGLT-2 inhibitorių (glifozinų), nes jie nenuspėjamai sumažina cukraus kiekį kraujyje.  Ypač pavojingas derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino.
</code></pre>

<h2 spaces-before="0">
  Būtinieji Moduliai
</h2>

<h3 spaces-before="0">
  Geri individualūs insulino dozavimo algoritmai
</h3>

<p spaces-before="0">
  Nors jūs negalite nei nusipirkti, nei lengvai sukurti, greičiausiai tai yra modulis, kuris labiausiai nuvertinamas, nors jis yra būtinas uždaram ciklui. Jei algoritmas padės palaikyti diabeto valdymą, jam reikia teisingų nustatymų, kad nepriimtumėte rimtų klaidingų sprendimų. Net jei dar trūksta kitų modulių, kartu su diabeto komanda galite patikrinti ir pakoreguoti esamą „profilį“. Dauguma uždaro ciklo naudotojų naudoja vadinamąją cirkadinę valandinę bazę, insulino jautrimo faktorių bei insulino ir angliavandenių santykio faktorius, kurie yra pagrįsti hormoniniu jautrumu insulinui dienos metu.
</p>

<p spaces-before="0">
  Profilį sudaro
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
  Negalima naudoti SGLT-2 inhibitorių
</h3>

<p spaces-before="0">
  SGLT-2 inhibitoriai, dar vadinami gliflozinais, slopina gliukozės absorbciją (pasisavinimą) inkstuose. Kadangi jie nenuspėjamai sumažina gliukozės kiekį kraujyje, jų NEGALIMA naudoti su uždaro ciklo sistema, pavyzdžiui, AndroidAPS! Yra didžiulė ketoacidozės ar hipoglikemijos rizika! Ypač pavojingas šių medikamentų derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino.
</p>

<p spaces-before="0">
  (module-phone)=
</p>
<h3 spaces-before="0">
  Telefonas
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
  Insulino pompa
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
  Combo, Insight ir senesnės Medtronic pompos yra patikimos ir tinkamos uždaram ciklui. Dėl infuzinės sistemos standartinės Luer užrakto jungties, Combo turi didelį pranašumą. Ir tam naudojama įprasta baterija, kurią galite nusipirkti bet kurioje degalinėje ar jums patogioje parduotuvėje. Ir jei jums to tikrai reikia, galite pavogti / pasiskolinti iš nuotolinio valdymo pultelio iš viešbučio kambario ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. bent jau tol, kol Android 8.1 diegiama tik keliuose telefonų modeliuose
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Tačiau paprastai šio žingsnio reikia tik pradinio sąrankos metu.
  </li>
  <li>
    So far the Combo works with screen parsing. Iš esmės tai veikia gerai, bet, deja, lėtai. Tai nėra taip blogai, ko reikia ciklui, nes visa tai veikia fone. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. Naktį greičiausiai naudositės TBR, o ne SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Tik Dana pompos taip pat turi „garantiją dėl vandens atsparumo“ dėl uždaro akumuliatoriaus ir rezervuaro užpildymo skyriaus.
  </li>
</ul>

<h3 spaces-before="0">
  Glikemijos šaltinis
</h3>

<p spaces-before="0">
  Tai tik trumpa su AndroidAPS suderinamų NGJ monitoringo sistemų apžvalga. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Tiesiog trumpa pastaba: jei galite pateikti gliukozės duomenis xDrip+ programoje ar Nightscout svetainėje, galite pasirinkti xDrip+ (arba Nightscout su interneto ryšiu) kaip AAPS KG šaltinį.
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
  Nightscout yra atvirojo kodo žiniatinklio programa, galinti registruoti ir rodyti jūsų NGJ ir AndroidAPS duomenis bei generuoti ataskaitas. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout yra nepriklausomas nuo kitų modulių. Jums jo reikės, kad galėtumėte įvykdyti 1-ą Tikslą.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  AAPS-.apk failas
</h3>

<p spaces-before="0">
  Pagrindiniai sistemos komponentai. Prieš diegdami programą, pirmiausia turite sukurti apk failą (kuris yra Android programos failo pavadinimo plėtinys). Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Pasirenkamieji Moduliai
</h2>

<h3 spaces-before="0">
  Išmanieji laikrodžiai
</h3>

<p spaces-before="0">
  Bet koks išmanusis laikrodis su Android Wear 1.x ar naujesne versija veikia. Daugelis uždaro ciklo vartotojai naudoja Sony Smartwatch 3 (SWR50), nes taip pat galima priimti reikšmes iš Dexcom G5/G6, kai išmaniojo telefono nėra diapazone. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
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
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. xDrip+ galite nustatyti norimus įspėjimo signalų, apibrėžti laiką, kada jie turėtų būti aktyvūs, ar jie gali nepaisyti išmaniojo telefono nutildymo ir pan. Some xDrip+ information can be found <a href="../Configuration/xdrip.md">here</a>. Atminkite, kad xDrip+ tobulinimas yra labai aktyvus ir dokumentacija kartais negali jo sekti, todėl ne visada gali būti atnaujinta.
</p>

<h2 spaces-before="0">
  Ką daryti laukiant modulių
</h2>

<p spaces-before="0">
  Kartais užtrunka šiek tiek laiko, kol bus gauti visi uždaro ciklo moduliai. Nesijaudinkite, laukdami galite padaryti daug. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. Ir galbūt atviras ciklas gali būti geras būdas išbandyti sistemą ir susipažinti su AndroidAPS. Šiame režime AndroidAPS teikia rekomendacijas, kurių galite laikytis rankiniu būdu.
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
