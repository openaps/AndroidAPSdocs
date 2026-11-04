# AAPS dažnai užduodami klausimai

Kaip pridėti klausimų į DUK: vadovaukitės šiomis [instrukcijomis](../SupportingAaps/HowToEditTheDocs.md)

## Bendra informacija

### Can I just download the AAPS installation file?

Ne. AAPS neturi atsisiunčiamo apk failo. Ją turite [susikurti](../SettingUpAaps/BuildingAaps.md) patys. Štai priežastis, kodėl:

AAPS valdo jūsų pompą ir leidžia insuliną. Pagal dabartinius Europos teisės aktus visos IIa arba IIb klasės sistemos yra medicinos prietaisai, kuriems reikia oficialaus leidimo (CE ženklo), o jam gauti reikia įvairių tyrimų ir patvirtinimų. Nesertifikuotų prietaisų platinimas yra neteisėtas. Panašios taisyklės yra kitose pasaulio šalyse.

Šis reglamentas taikomas ne tik pardavimui (kai už ką nors gaunami pinigai), bet ir bet kokiam platinimui (net jei dalijama nemokamai). Vienintelis būdas naudoti programėlę laikantis šių taisyklių – pasidaryti medicinos prietaisą sau patiems.

Štai kodėl negalima platinti paruoštų programų apk pavidalu.

(FAQ-how-to-begin)=

### How to begin?

Pradėkite nuo puslapio [Pasirengimas pradėti naudoti AAPS](../Getting-Started/PreparingForAaps.md): jame išsamiau aprašyta viskas, kas nurodyta toliau.

Pirmiausia turite **įsigyti ciklui tinkamus įrenginius**:

* [palaikoma insulino pompa](../Getting-Started/CompatiblePumps.md), 
* [Android išmanusis telefonas](../Getting-Started/Phones.md) (Apple iOS AAPS nepalaiko – galite pažiūrėti [iOS Loop](https://loopkit.github.io/loopdocs/)) ir
* [nuolatinės gliukozės stebėjimo sistema](../Getting-Started/CompatiblesCgms.md). 

Antra, turite **nustatyti programinės įrangos komponentus**: [AAPS](../SettingUpAaps/BuildingAaps.md), [NGJ/FGM šaltinį](../Getting-Started/CompatiblesCgms.md) ir [ataskaitų serverį](../SettingUpAaps/SettingUpTheReportingServer.md).

Trečia, turite išmokti ir **suprasti OpenAPS etaloninį modelį (reference design), kad galėtumėte patikrinti savo gydymo parametrus**. Pagrindinis uždaro ciklo principas – jūsų [valandinė bazė ir IA](../SettingUpAaps/YourAapsProfile.md) turi būti tikslūs. Visose rekomendacijose daroma prielaida, kad jūsų valandinė bazė yra tinkama, o matomi pakilimai ar kritimai atsiranda dėl kitų veiksnių, kuriems reikia vienkartinių pakeitimų (sportas, stresas ir t. t.). Saugumo sumetimais pakeitimai, kuriuos gali atlikti uždaras ciklas, yra riboti (žr. didžiausią leistiną laikiną valandinę bazę [OpenAPS Reference Design](https://openaps.org/reference-design/)), todėl nereikėtų leistinos dozės eikvoti klaidingai pagrindinei valandinei bazei taisyti. Pavyzdžiui, jei prieš valgį ciklas dažnai nustato mažą laikiną bazę, tikriausiai reikia pakoreguoti valandinę bazę. Galite naudoti [Autotune](#autotune-how-autotune-calculates-adjustments): jis įvertina daug duomenų ir pasiūlo, ar ir kaip reikia pakoreguoti valandinę bazę ir (arba) JIF, taip pat ar reikia pakeisti IA. Arba valandinę bazę galite patikrinti ir nustatyti [senuoju būdu](https://integrateddiabetes.com/basal-testing/).

### Kokie yra praktiniai ciklo naudojimo aspektai?

#### Password protection

Jei nenorite, kad jūsų nustatymus būtų lengva pakeisti, galite juos apsaugoti slaptažodžiu, PIN kodu arba telefono biometriniu autentifikavimu (pirštų atspaudu, veidu). Atidarykite **Nustatymai** > **Apsauga** > **Nustatymų apsauga** ir pasirinkite apsaugos tipą. Toje pačioje vietoje taip pat galite apsaugoti visą programėlę arba tik bolusus. Daugiau informacijos rasite skyriuje [Nustatymų apsauga](#Preferences-settings-protection).

#### Android Wear Smartwatches

Jei AAPS laikrodžio programėle leidžiate bolusą arba keičiate nustatymus, kiekvieną užklausą reikia patvirtinti laikrodyje: ją išsiuntus, laikrodis parodo santrauką su mygtuku **PATVIRTINTI**. Žr. [AAPS valdymas Wear OS išmaniuoju laikrodžiu](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Disconnect pump

Jei nusiimate pompą prausdamiesi po dušu, maudydamiesi vonioje, plaukdami, sportuodami ar per kitą veiklą, turite pranešti AAPS, kad insulinas netiekiamas, kad AIO būtų teisingas.

Pompą galima atjungti naudojant [ciklo piktogramą](#AapsScreens-loop-status) AAPS pagrindiniame ekrane: paspauskite ją ir pasirinkite **Atjungti pompą** su reikiama trukme. Jei veikla užtrunka ilgiau nei planuota, vėl paspauskite piktogramą ir pasirinkite naują trukmę: iš pradžių pompos vėl prijungti nereikia. Kaip išvengti insulino trūkumo ilgai atjungus pompą, rasite skyriuje [Pompos atjungimas prausiantis ar sportuojant](#pumps-cannulas-disconnecting).

#### Rekomendacijos pagrįstos ne vienu NGJ rodmeniu

Saugumo sumetimais rekomendacijos pagrįstos ne vienu NGJ rodmeniu, o vidutiniu pokyčiu. Todėl, jei praleidžiate keletą rodmenų, vėl gavus duomenis gali praeiti šiek tiek laiko, kol AAPS vėl pradės veikti ciklu.

#### Further readings

Yra keli tinklaraščiai su naudingais patarimais, kurie padės suprasti praktinius ciklo naudojimo aspektus. Kai kurių jų jau nebėra internete: toliau pažymėtos nuorodos „archyvinė kopija“ atidaro išsaugotą kopiją Internet Archive svetainėje.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archyvinė kopija)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archyvinė kopija)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archyvinė kopija)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Kokias pagalbos priemones rekomenduojama turėti su savimi?

Su savimi turite turėti tas pačias pagalbos priemones kaip ir kiekvienas 1 tipo diabetu sergantis žmogus, kuris naudoja insulino pompą. Naudojant AAPS ciklą primygtinai rekomenduojama turėti su savimi arba šalia šias papildomas priemones:

* Išorinė baterija (power bank) ir laidai telefonui, laikrodžiui ir (jei reikia) BT skaitytuvui arba Link įrenginiui įkrauti
* Pompos baterijos
* Prieiga prie atsarginių kopijų telefone ir debesyje (pvz., Google Drive, Dropbox), kad galėtumėte iš naujo nustatyti AAPS kitame telefone (žr. [Atsarginių kopijų kūrimas ir atkūrimas](../Maintenance/ExportImportSettings.md)): 
  * dabartinis AAPS ir kitų jūsų naudojamų programėlių (pvz., xDrip, Juggluco, BYODA) [apk](../SettingUpAaps/BuildingAaps.md),
  * jūsų raktų saugyklos failas (sukurtas kuriant apk) ir jo slaptažodis,
  * naujausi AAPS ir kitų programėlių nustatymų eksporto failai,
  * jūsų **AAPS** pagrindinis slaptažodis: be jo negalėsite importuoti nustatymų failo.

(FAQ-organize-backups)=

#### How to organize my backups?

Eksportuokite nustatymus labai reguliariai: po kiekvieno Pod ar rezervuaro keitimo, pakeitę profilį, atlikę mokymo etapą, pakeitę pompą… Net jei niekas nesikeičia, eksportuokite kartą per mėnesį. Keep several old export files.

**AAPS** gali tai padaryti už jus: ji gali automatiškai eksportuoti nustatymus (pvz., [automatizacija](#ExportImportSettings-Automating-Settings-Export) po kiekvieno Pod keitimo) ir išsaugoti eksporto failą tiesiai debesies aplanke (Google Drive). Žr. [Atsarginių kopijų kūrimas ir atkūrimas](../Maintenance/ExportImportSettings.md).

### Kaip saugiai ir patikimai pritvirtinti NGJ/FGM?

Galite jį priklijuoti. Populiarioms NGJ sistemoms parduodami iš anksto perforuoti pleistrai („overpatch“) (ieškokite Google, eBay arba Amazon). Kai kurie ciklo naudotojai naudoja pigesnę standartinę kineziologinę juostą arba rocktape.

Galite jį pritvirtinti. Taip pat galite įsigyti žasto apyrankių, kurios juostele pritvirtina NGJ/FGM (ieškokite Google, eBay arba Amazon).

## DKS algoritmas

### Kodėl OpenAPS AMA rodo "dia: 3", nors mano profilyje nustatyta kita IVT?

Kai skiltyje **Konfigūracija** > **DKS** pasirinkta **OpenAPS AMA**, mygtukas **Atidaryti įskiepį** parodo algoritmui siunčiamus duomenis. Jo skiltyje **Profilis** `dia` visada yra 3.0 arba mažiau:

![OpenAPS AMA įskiepio ekranas, kai profilio duomenyse dia 3.0](../images/screens/openaps_ama_plugin.png)

AMA algoritme DIA iš tikrųjų nereiškia „insulino veikimo trukmės“ (IVT). Tai parametras, kuris anksčiau buvo susijęs su IVT. Dabar jis reiškia, „per kiek laiko korekcija turi būti baigta“. Jis neturi nieko bendro su AIO skaičiavimu. OpenAPS SMB šio parametro nebereikia.

## Other settings

### Nightscout nustatymai

(FAQ-nsclient-blocked)=

#### AAPSClient (arba AAPS) neįkelia duomenų: "Užblokuota dėl…". What can I do?

NSClient būsena rodo, kodėl duomenys nesiunčiami:

* **Užblokuota dėl ryšio parinkčių**: ryšio nustatymai neleidžia naudoti dabartinio ryšio. Pavyzdžiui, naudojate mobiliuosius duomenis, bet leidžiamas tik Wi-Fi, arba nesate prisijungę prie vieno iš leidžiamų Wi-Fi tinklų (SSID).
* **Užblokuota dėl įkrovimo parinkčių**: ryšio nustatymai leidžia sinchronizuoti tik tada, kai telefonas kraunamas (arba tik kai nekraunamas), o dabar taip nėra.
* **Nėra ryšio**: telefonas neprisijungęs prie interneto.

Patikrinkite [NSClient ryšio nustatymus](#Preferences-nsclient): **Naudoti mobiliuosius duomenis**, **Naudoti tarptinklinį ryšį**, **Naudoti Wi‑Fi**, **WiFi SSID**, **Sinchronizuoti neįkraunant** ir **Sinchronizuoti įkraunant**.

### NGJ nustatymai

(FAQ-advanced-filtering)=

#### Kodėl AAPS rašo 'Funkcijos „SMB visada“ ir „SMB po angliavandenių“ išjungtos, nes glikemijos duomenų šaltinis neturi reikalingo filtravimo'?

**Naudoti SMB visada** ir **Naudoti SMB po angliavandenių** galima naudoti tik su [patikimu glikemijos duomenų šaltiniu](#GettingStarted-TrustedBGSource): jutikliu ir NGJ programėle, kurie gali pranešti **AAPS**, iš kurio jutiklio gaunami rodmenys. Su bet kuriuo kitu glikemijos šaltiniu **AAPS** šias dvi parinktis išjungia ir rodo šį pranešimą. Peržiūrėkite patikimų šaltinių sąrašą ir, jei jūsų jutiklis jame yra, įsitikinkite, kad naudojate vieną iš jam nurodytų NGJ programėlių. Taip pat žr. [Gliukozės duomenų glodinimas](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pump

#### Batteries

Naudojant ciklą pompos baterija gali išsikrauti greičiau nei įprastai, nes sistema per Bluetooth bendrauja su pompa daug dažniau nei pompą rankiniu būdu valdantis žmogus. Bateriją geriausia pakeisti, kai liko 25 %, nes tada ryšys tampa nestabilus. Pompos baterijos įspėjimus galite nustatyti savo Nightscout svetainėje kintamuoju PUMP_WARN_BATT_P. Tricks to increase battery life include:

* sutrumpinkite laiką, kiek pompos ekranas lieka įjungtas (pompos nustatymų meniu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* pompos mygtukus spauskite tik keisdami rezervuarą (reload), o visą istoriją, baterijos lygį ir rezervuaro tūrį žiūrėkite AAPS.
* Kai kuriuose telefonuose AAPS programėlė gali būti dažnai uždaroma, kad būtų taupoma energija arba atlaisvinta RAM. Kai AAPS iš naujo paleidžiama, ji kiekvieną kartą užmezga Bluetooth ryšį su pompa ir iš naujo nuskaito dabartinę valandinę bazę ir bolusų istoriją. Tai eikvoja bateriją. Norėdami tai patikrinti, NSClient skiltyje **Papildomi nustatymai** įjunkite **Įrašyti programos paleidimą**: Nightscout gaus įvykį kaskart, kai AAPS paleidžiama iš naujo, todėl problemą bus lengva sekti. Kad tai nutiktų rečiau, išjunkite AAPS baterijos optimizavimą, kad telefonas jos neuždarinėtų: žr. [baterijos taupymas](#FAQ-battery-savings) toliau.
* nuvalykite baterijos kontaktus spiritu suvilgyta servetėle, kad neliktų gamyklinio vaško ar tepalo.
* [Dana R/RS pompose](../CompatiblePumps/DanaRS-Insulin-Pump.md) paleidimo metu per bateriją sąmoningai leidžiama didelė srovė, kad būtų pramušta pasyvacijos plėvelė (ji apsaugo nuo energijos praradimo sandėliuojant), tačiau ją ne visada pavyksta pramušti 100 %. Išimkite ir vėl įdėkite bateriją 2–3 kartus, kol ekrane bus rodoma 100 %, arba prieš įdėdami bateriją baterijos raktu sekundės daliai sujunkite abu jos kontaktus (trumpasis jungimas).
* taip pat žr. daugiau patarimų apie [tam tikrų tipų baterijas](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Rezervuarų ir kaniulių keitimas

Rezervuarą reikia keisti tiesiai pompoje, tada keitimas įrašomas **AAPS**. Vadovaukitės [pompos rezervuaro ir kaniulės keitimo instrukcija](#pumps-cannulas-changing-reservoir-and-cannula) žingsnis po žingsnio.

### Ekrano užsklanda

AAPS ekrano užsklandą telefonui rasite [telefonų puslapyje](#Phones-phone-wallpaper).

### Daily usage

Daugelį toliau aprašytų situacijų galima vieną kartą paruošti kaip [scenarijų](#scenes): ruošinį, kuris vienu paspaudimu pakeičia profilį, laikiną tikslą ir kitus nustatymus. **AAPS** siūlo paruoštus ruošinius, pavyzdžiui, *Sportas*, *Miegas*, *Alkoholis* arba *Maudymasis*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### Ką daryti prausiantis po dušu ar maudantis vonioje?

Prausdamiesi po dušu ar maudydamiesi vonioje galite nusiimti pompą. Tokiam trumpam laikui jos gali ir nereikėti, bet turite pranešti AAPS, kad pompą atjungėte, kad AIO skaičiavimai būtų teisingi. Žr. [aprašymą aukščiau](#FAQ-disconnect-pump). [Scenarijaus](#scenes) ruošinys *Maudymasis* tai padaro už jus.

#### Work

Priklausomai nuo darbo, darbo dienomis galite naudoti kitus gydymo parametrus. Jei naudojate ciklą, verta apsvarstyti [profilio keitimą](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) įprastai darbo dienai. Pavyzdžiui, galite perjungti profilį į didesnį nei 100 %, jei jūsų darbas mažiau aktyvus (pvz., sėdite prie stalo), arba į mažesnį nei 100 %, jei visą dieną esate aktyvūs ir ant kojų. Taip pat galite apsvarstyti aukštą arba žemą laikiną tikslą arba [profilio laiko perstūmimą](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile), kai dirbate daug anksčiau ar vėliau nei įprastai arba dirbate pamainomis. Taip pat galite susikurti antrą profilį (pvz., 'namai' ir 'darbo diena') ir kasdien perjungti profilį į tą, kurio iš tikrųjų reikia, arba išsaugoti darbo dienos nustatymus kaip [scenarijų](#scenes).

### Leisure activities

(FAQ-sports)=

#### Sports

Turite pakeisti senus sporto įpročius, kuriuos turėjote prieš naudodami ciklą. Jei, kaip anksčiau, tiesiog suvalgysite vieną ar daugiau angliavandenių porcijų sportui, uždaro ciklo sistema juos atpažins ir atitinkamai koreguos.

Taigi organizme turėtumėte daugiau angliavandenių, bet tuo pačiu metu ciklas tam priešintųsi ir leistų insuliną.

Kai naudojate ciklą, išbandykite šiuos žingsnius:

* Atlikite [profilio keitimą](#ProfileSwitch-change-percentage) mažiau nei 100%: pagrindiniame ekrane bakstelėkite profilio pavadinimą, bakstelėkite apvalų mygtuką **▶**, tada nustatykite **Procentais** ir **Trukmė**.
* Nustatykite [laikiną tikslą „Sportas“](#TempTargets-activity-temp-target), aukštesnį už įprastą tikslą. Kai procentas mažesnis nei 100 % ir nustatyta trukmė, tame pačiame ekrane **Aktyvuoti** rodomas jungiklis **Laikinas tikslas / Sportas**, kuris įjungia abu iš karto.
* Jei naudojate SMB, įsitikinkite, kad [„Naudoti SMB esant aukštesniam laikinam gliukozės tikslui“](#Open-APS-features-enable-smb-with-high-temp-targets) ir [„Naudoti SMB visada“](#Open-APS-features-enable-smb-always) yra išjungti.

Svarbu šiuos nustatymus pakeisti iš anksto ir atkurti po sporto. Pakeitimus atlikite laiku prieš sportą ir atsižvelkite į raumenų glikogeno atsargų papildymo poveikį.

[Scenarijų](#scenes) ruošiniai *Sportas* ir *Naktis po sporto* sujungia šiuos nustatymus, todėl juos galite paleisti vienu paspaudimu. Jei sportuojate reguliariai tuo pačiu metu (pvz., treniruotė sporto salėje), galite naudoti [automatizaciją](../DailyLifeWithAaps/Automations.md), kuri paleistų profilio keitimą ir LT arba scenarijų. Taip pat galima naudoti automatizaciją pagal vietą, tačiau tada sunkiau viską paruošti iš anksto.

Profilio keitimo procentas, sporto laikino tikslo reikšmė ir geriausias laikas pakeitimams yra individualūs. Ieškodami sau tinkamos reikšmės, pradėkite nuo saugesnių nustatymų (mažesnis procentas ir aukštesnis LT).

#### Sex

Galite nusiimti pompą, kad būtumėte „laisvi“, bet turite apie tai pranešti AAPS, kad AIO skaičiavimai būtų teisingi. Žr. [aprašymą aukščiau](#FAQ-disconnect-pump).

#### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. Turite rasti savo būdą, kaip tai valdyti, naudodami šias AAPS funkcijas:

* Išjungti uždaro ciklo režimą ir valdyti diabetą rankiniu būdu arba
* nustatyti aukštus laikinus tikslus ir išjungti NDM, kad ciklas nedidintų AIO dėl nedeklaruoto maisto, arba
* atlikti [profilio keitimą](#ProfileSwitch-change-percentage) į gerokai mažesnį nei 100 % 

[Scenarijaus](#scenes) ruošinys *Alkoholis* – atspirties taškas, kurį galite pritaikyti savo būdui.

Vartodami alkoholį, visada turite stebėti NGJ, kad laiku suvalgytumėte angliavandenių ir išvengtumėte hipoglikemijos.

#### Miegas

##### Kaip naudoti ciklą naktį be mobiliojo ryšio ir Wi-Fi spinduliuotės?

Daugelis naudotojų naktį įjungia telefone lėktuvo režimą. Jei norite, kad ciklas jums padėtų miegant, darykite taip (tai veiks tik tada, jei jūsų NGJ programėlė veikia tame pačiame telefone kaip AAPS, pvz., xDrip, Juggluco ar BYODA; tai NEVEIKS, jei KG rodmenis gaunate per Nightscout):

1. Įjunkite lėktuvo režimą mobiliajame telefone.
2. Palaukite, kol lėktuvo režimas bus įjungtas.
3. Įjunkite Bluetooth.

Tada negausite skambučių ir nebūsite prisijungę prie interneto. Tačiau ciklas vis tiek veikia.

Kai kurie žmonės pastebėjo problemų su vietiniu transliavimu (AAPS negauna KG reikšmių iš xDrip), kai telefonas veikia lėktuvo režimu. xDrip programėlėje eikite į Settings > Inter-app settings > Identify receiver ir įveskite `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Jei naktį norite kitokių nustatymų (pvz., aukštesnio tikslo), gera pradžia – [scenarijaus](#scenes) ruošinys *Miegas*.

#### Traveling

##### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. Kitoms pompoms daugiau informacijos rasite puslapyje [Laiko juostos keitimas ir vasaros laikas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

### Medical topics

#### Hospitalization

Jei norite pasidalyti informacija apie AAPS ir DIY ciklą su gydytojais, galite atsispausdinti [AAPS vadovą gydytojams](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Frequent questions on Discord and their answers...

### My problem is not listed here.

Žr. puslapį [Kur gauti pagalbos?](../GettingHelp/WhereCanIGetHelp.md) If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### I have problems, errors building the app.

Peržiūrėkite trikčių šalinimo puslapį pagal tai, kaip kuriate **AAPS** (žr. [AAPS kūrimas](../SettingUpAaps/BuildingAaps.md)):

* kuriant naršyklėje: [Kūrimas naršyklėje: trikčių šalinimas](#aaps-ci-troubleshooting),
* kuriant su Android Studio: [Android Studio trikčių šalinimas](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Build error: file name too long

Ši klaida gali atsirasti kuriant su Android Studio: kūrimas sustoja su klaida, kad failo pavadinimas per ilgas. Galimi sprendimai: Perkelkite šaltinio failus į aplanką, kuris yra arčiau disko šakninio aplanko (pvz., "C:\src\AndroidAPS").

Android Studio: Atidarę projektą ir atsisiuntę pakeitimus iš GitHub įsitikinkite, kad "Gradle" baigė sinchronizavimą ir indeksavimą. Prieš vykdydami Rebuild Project, įvykdykite Build->Clean Project. Įvykdykite File->Invalidate Caches ir paleiskite Android Studio iš naujo.

(FAQ-running-dev-version)=

#### Perspėjimas: Naudojama neužbaigta versija. Uždaras ciklas neaktyvus

**AAPS** rodo šį pranešimą, kai naudojate kūrimo (dev) versiją be inžinerinio režimo: dev versijoje uždaras ciklas veikia tik inžineriniu režimu.

Dev versija skirta testuoti, o ne tikram ciklo naudojimui: prieš tęsdami perskaitykite [Kūrimo atšaka (dev)](../AdvancedOptions/DevBranch.md).

Kaip įjungti inžinerinį režimą:

1. Įdėkite failą, pavadintą `engineering_mode`, į AAPS aplanko poaplankį `extra` (tai aplankas, kurį pasirinkote sąrankos vedlyje, dažniausiai `AAPS/extra`). Any file will do as long as it is properly named.
2. Paleiskite **AAPS** iš naujo, kad ji rastų failą.

Patarimas: padarykite esamo žurnalo failo kopiją ir pervadinkite ją į "engineering_mode" (pastaba: be failo plėtinio!).

### Mokymo etapai

#### Įstrigau ties mokymo etapu ir man reikia pagalbos.

Pirmiausia perskaitykite [Mokymo etapų atlikimas](../SettingUpAaps/CompletingTheObjectives.md). Jei vis tiek nepavyksta, padarykite klausimo ir atsakymų ekrano kopiją ir paskelbkite ją AAPS kanale Discord. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

### Nustatymai, slaptažodžiai ir atsarginės kopijos

(FAQ-reset-master-password)=

#### Kaip iš naujo nustatyti pagrindinį slaptažodį?

Jei pamiršote pagrindinį slaptažodį, galite jį pakeisti į pompos serijos numerį:

1. Sukurkite tuščią failą, pavadintą `PasswordReset` (be plėtinio), AAPS aplanko poaplankyje `extra` (dažniausiai `AAPS/extra`).
2. Paleiskite **AAPS** iš naujo. Pompa turi būti prijungta: **AAPS** rodo "Laukiama pompos…" ir per 30 sekundžių turi nuskaityti pompos serijos numerį.
3. **AAPS** rodo "Slaptažodis nustatytas!": jūsų pagrindinis slaptažodis dabar yra **pompos serijos numeris**. Failas `PasswordReset` ištrinamas automatiškai.
4. Atidarykite **Nustatymai** > **Apsauga** > **Pagrindinis slaptažodis** ir nustatykite naują slaptažodį.

Jei pompa laiku nepasiekiama, niekas nepasikeičia: patikrinkite ryšį su pompa ir bandykite dar kartą.

Taip iš naujo nustatomas tik pagrindinis slaptažodis. Nustatymų, programėlės ar boluso slaptažodis arba PIN kodas iš naujo nenustatomas, bet vietoj jų visada galite naudoti pagrindinį slaptažodį.

    {admonition} Seni nustatymų failai
    :class: warning
    Nustatymų failus, eksportuotus su senu pagrindiniu slaptažodžiu, galima importuoti tik su tuo senu slaptažodžiu.

(FAQ-where-are-settings-files)=

#### Where can I find settings files?

Nustatymų failai saugomi AAPS aplanko, kurį pasirinkote [sąrankos vedlyje](#SetupWizard-StoragePermission), poaplankyje `preferences` (pvz., `/internal storage/AAPS/preferences`). Jei nustatėte debesies aplanką (Google Drive), eksportuoti failai gali būti išsaugoti ir ten. Žr. [Atsarginių kopijų kūrimas ir atkūrimas](../Maintenance/ExportImportSettings.md).

ĮSPĖJIMAS: nepameskite slaptažodžio, nes be jo negalėsite importuoti užšifruoto nustatymų failo!

(FAQ-import-settings-earlier-versions)=

#### Kaip importuoti nustatymus iš ankstesnių AAPS versijų į AAPS v3 arba v4?

(AAPS v3 arba v4) galite importuoti tik tuos nustatymus, kurie buvo eksportuoti su AAPS v2.8x ar naujesne versija. Jei naudojote senesnę nei v2.8x AAPS versiją arba turite naudoti senesnius nei v2.8x nustatymų eksporto failus, pirmiausia turite įdiegti AAPS v2.8. Importuokite senesnius v2.x nustatymus į v2.8. Patikrinę, kad viskas gerai, eksportuokite nustatymus iš v2.8. Įdiekite dabartinę AAPS versiją ir importuokite į ją v2.8 nustatymus.

Jei senai ir naujai versijai kurti naudojate tą patį raktą, nustatymų importuoti net nereikės. Naują versiją galite įdiegti ant senosios.

Buvo pridėta naujų mokymo etapų. Turėsite juos atlikti.

(FAQ-delete-treatments)=

#### Kur galiu ištrinti terapijos įrašus?

Atidarykite **meniu** (☰) ir pasirinkite **Terapijos istorija**. Ilgai palaikykite įrašą, kad jį pažymėtumėte, jei reikia, bakstelėkite daugiau įrašų, tada bakstelėkite **šiukšliadėžės** piktogramą ir patvirtinkite. Žr. [Terapijos istorija](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS stops everyday around the same time.

* Kai kuriuose telefonuose Google Play Protect gali kiekvieną rytą išjungti **AAPS**. Jei taip nutinka, eikite į Google Play parinktis ir išjunkite **Google Play Protect**.
* Patikrinkite, ar nėra „valymo“ programėlių (pvz., CCleaner ir pan.), ir jas pašalinkite.
* Išjunkite visus **AAPS** baterijos optimizavimus (žr. [baterijos taupymas](#FAQ-battery-savings) toliau).

(FAQ-battery-savings)=

#### How to configure battery savings?

Kai telefono nenaudojate, jis gali sustabdyti **AAPS** ir susijusias programėles (NGJ programėlę, Bluetooth). Tada **AAPS** negali atlikti savo darbo, o Bluetooth ryšys su jutikliu ir pompa (arba RileyLink) gali būti nutrauktas – dėl to atsiranda perspėjimai "Pompa nepasiekiama" ir ryšio klaidos.

Išjunkite **AAPS**, NGJ programėlės (pvz., xDrip) ir Bluetooth sistemos programėlės baterijos optimizavimą. Kaip tai padaryti, priklauso nuo telefono gamintojo, modelio ir Android versijos:

* Pixel, Samsung ir Huawei telefonams žr. [Baterijos optimizavimas](#generaltroubleshooting-android-related-issues),
* **AAPS** atidarykite **meniu** (☰) > **Apie** ir bakstelėkite **Don't kill my app?** arba kitų gamintojų telefonams apsilankykite [Don't kill my app](https://dontkillmyapp.com/).

Jei nesate tikri, kad problemą sukelia baterijos taupymas, galite laikinai išjungti visą baterijos taupymą telefone: baterija išsikraus greičiau, bet greitai pamatysite, ar problema dingo.

(FAQ-pump-unreachable-alerts)=

#### Perspėjimai „Pompa nepasiekiama“ kelis kartus per dieną arba naktį.

Telefonas gali stabdyti **AAPS** ar net Bluetooth, todėl prarandamas ryšys su pompa arba RileyLink (žr. [baterijos taupymas](#FAQ-battery-savings) aukščiau).

Taip pat galite pakeisti, kada rodomas perspėjimas: pagrindinio ekrano viršuje dešinėje paspauskite piktogramą **Nustatymai** (krumpliaratis), tada pasirinkite **Lokalūs įspėjimai** > **Perspėjimo apie nepasiekiamą pompą riba** (nuo 30 iki 300 minučių). Peržiūrėkite savo pompos puslapį: kai kuriuose rekomenduojama reikšmė, pvz., 120 minučių [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mano Link / pompa / Pod nereaguoja (RL/OL/EmaLink…)

Kai kuriuose telefonuose nutrūksta Bluetooth ryšys su Link įrenginiais (RL/OL/EmaLink).

Kartais Link įrenginiai nereaguoja (AAPS rodo, kad jie prisijungę, bet Link įrenginiai negali pasiekti pompos ar perduoti jai komandų).

Pirmiausia pompos ekrane pabandykite mygtuką **Nustatyti RileyLink iš naujo** (žr. savo pompos puslapį: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Jei tai nepadeda, paprasčiausias būdas priversti visas šias dalis vėl veikti kartu:

1. Išjunkite Link įrenginį.
2. Uždarykite **AAPS** (**meniu** (☰) > **Išeiti**).
3. Ilgai palaikykite **AAPS** piktogramą, atidarykite Android **App info** (programos informacija), bakstelėkite **Force stop** (priverstinai sustabdyti), tada **Storage** > **Clear cache** (išvalyti talpyklą) (NEVALYKITE saugyklos / duomenų!).
4. Retkarčiais kai kuriuos telefonus šiame žingsnyje reikia perkrauti. Galite pabandyti be perkrovimo.
5. Įjunkite Link įrenginį.
6. Paleiskite **AAPS**.
7. Pompos ekrane bakstelėkite **Susieti RileyLink** ir vėl pasirinkite savo Link įrenginį.

### Nuotolinis valdymas

(FAQ-aapsclient)=

#### Configuring and Using the AAPSClient remote app

**AAPSClient** – atskira programėlė, kuria prižiūrintis asmuo gali nuotoliniu būdu sekti ir valdyti **AAPS**. Nuo **AAPS** v4, norint valdyti **AAPS** iš AAPSClient, abi programėles reikia vieną kartą susieti. Žr.:

* [Programėlė AAPSClient](#aapsclient-app): įdiegimas, pirmasis paleidimas ir susiejimas,
* [Pagrindinio įrenginio ↔ kliento valdymas](#client-master-control): ką galima valdyti ir kaip veikia susiejimas,
* [AAPSClient išmaniajame laikrodyje](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Terapijos įrašai, kuriuos įvedu Nightscout svetainėje, nepritaikomi

Tai [sustiprintos apsaugos režimas](#client-master-control-hardened-mode). Kol įjungtas kliento valdymas — Paprastajame režime visada — **AAPS** priima pakeitimus tik iš susietų klientų, o ne iš Nightscout svetainės ar kitų programėlių. Vietoj to įveskite juos susietoje **AAPSClient** programėlėje.

### Perspėjimai ir įspėjimai

#### Turiu raudoną įspėjamąjį ženklelį (raudoną trikampį) / AAPS neįjungia uždaro ciklo / Ciklas lieka LGS režime / Turėjau geltoną trikampį

Raudonas įspėjamasis ženklelis ant glikemijos šaltinio sparčiojo mygtuko yra AAPS saugos funkcija. Išsamų paaiškinimą rasite skyriuje [KG įspėjamasis ženklas](#aaps-screens-bg-warning-sign).

Raudonas įspėjamasis ženklelis ant glikemijos šaltinio sparčiojo mygtuko apatinėje juostoje (senesnių versijų raudonas trikampis) reiškia, kad turite pasikartojančių KG reikšmių ir AAPS negali tiksliai apskaičiuoti pokyčių. Uždaras ciklas perjungiamas į režimą **Stabdymas esant žemai glikemijai**: jis vis dar mažina arba sustabdo valandinę bazę, kad apsaugotų jus nuo hipoglikemijos, bet korekcinio insulino neleidžia. Kad įspėjimas dingtų, turite ištrinti po vieną kiekvienos pasikartojančios KG reikšmę. Bakstelėkite spartųjį mygtuką ir atidarykite [glikemijos šaltinio ekraną](#aaps-screens-bg-source): pasikartojanti reikšmė pažymėta raudonai. Ilgai palaikykite vieną eilutę, kurią norite ištrinti, pažymėkite po vieną kiekvienos pasikartojančios eilutės ir bakstelėkite šiukšliadėžės piktogramą. Jei pasikartojančių KG yra per daug, gali tekti iš naujo nustatyti AAPS duomenų bazes. Tokiu atveju taip pat prarasite statistiką, AIO, AAO ir pasirinktą profilį.

Kai įspėjimas dingsta, AAPS pati negrįžta į režimą **Uždaras ciklas**. Paspauskite ciklo piktogramą pagrindiniame ekrane ir vėl pasirinkite **Uždaras ciklas**.

Galima problemos priežastis: xDrip ir (arba) NS užpildo trūkstamus KG duomenis (backfill).

Senesnių versijų geltonas trikampis reiškė nestabilų laiko tarpą tarp KG rodmenų (KG gaunamos ne reguliariai kas 5 min. arba trūksta KG), kas dažnai nutinka su Libre arba pakeitus G6 siųstuvą. **AAPS** 4 jo neberodo: reikšmės perskaičiuojamos fone, ir ciklas veikia teisingai.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Ar galiu perkelti aktyvų DASH Pod į kitą telefoną?

Pod būsena įtraukta į eksportuojamus nustatymus, todėl aktyvų Pod galima perkelti į kitą telefoną: prieš pat perkėlimą eksportuokite nustatymus ir importuokite juos kitame telefone. Tai oficialiai nepalaikoma, ir yra rizika prarasti Pod: jei įmanoma, bandykite tada, kai Pod naudojimo laikas tuoj baigsis.

Read these sections first:

* [Nustatymų eksportavimas ir importavimas](#omnipod-dash-export-import) Omnipod DASH puslapyje ir [Pompos be vamzdelio](#ExportImportSettings-tubeless-pumps): naujame telefone pažymėkite **Taip pat pakeisti pompos nustatymus** ir naudokite failą, eksportuotą tuo metu, kai dėvėjote dabartinį Pod,
* [Pod pašalinimas](#omnipod-dash-discard-pod) – kad vėliau pašalintumėte Pod iš senojo telefono. Laikykite senąjį telefoną lėktuvo režimu, kol Pod bus pašalintas, kad abu telefonai niekada vienu metu nebendrautų su Pod.