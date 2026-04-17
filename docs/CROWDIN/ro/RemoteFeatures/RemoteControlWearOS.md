# Operarea AAPS prin intermediul ceasului inteligent Wear OS

(Watchfaces-aaps-watchfaces)=

## Fețe de ceas AAPS

```{warning}
Fețele de ceas AAPS sunt disponibile pentru ceasul inteligent Wear OS cu API nivel 28 până la 33.
Odată cu Wear OS 5, nu mai este posibilă folosirea fețelor personalizate.
```

Există mai multe fețe de ceas din care să alegeți care sunt incluse în aplicația de baza a AAPS Wear APK. Aceste fețe de ceas includ diferența medie, IOB, rata bazalei temporare și profilurile bazale active în prezent și graficul citirilor CGM.

Unele acțiuni disponibile pe ceas sunt:

* Atingeți de două ori pe glicemie pentru a ajunge în meniul AAPS
* Atingeți de două ori graficul glicemic pentru a schimba scara temporală a graficului

## Configurare

Activați modulul Wear în [Configurator > Sincronizare](../SettingUpAaps/ConfigBuilder.md).

Utilizați preferințele Wear pentru a defini variabilele care ar trebui luate în considerare la calcularea bolusului de pe ceas (spre exemplu tendința din ultimele 15 minute, COB șamd).

Dacă doriți să bolusați șamd. de pe ceas, în "Setări Wear", trebuie să activați "Control de pe Ceas".

![Setări Wear](../images/ConfBuild_Wear.png)

Prin fila Ceas (Wear) sau prin meniul principal (sus stânga ecranului, dacă fila nu este afișată) puteți

* Retrimiteți toate datele. Ar putea fi de ajutor dacă ceasul nu a fost conectat de ceva timp, și doriți să transmiteți informația către ceas.
* Deschideți setările pe ceas direct de pe telefon.

Asigurați-vă că notificările de la AAPS nu sunt blocate pe ceas. Confirmarea unei acțiuni (spre exemplu bolus, țintă temporară) vine printr-o notificare pe care va trebui să o glisați și să o bifați.

## Accesarea meniului principal al AAPS

Pentru a accesa meniul principal al AAPS, puteți utiliza următoarele opțiuni:

* apăsați de două ori pe valoarea glicemiei
* selectați pictograma AAPS în meniul de aplicații al ceasului
* apăsați pe complicația AAPS (dacă este configurat pentru meniu)

## Setări (în ceas)

Pentru a accesa setările pentru fețele de ceas, intrați in meniul principal AAPS, glisați in sus și selectați "Setări".

Pictograma cu steaua umplută este pentru starea activată (**Pornit**), iar pictograma cu stea goală indică faptul că setarea este dezactivată (**Oprit**):

![Setări pornit/oprit](../images/Watchface_Settings_On_Off.png)

### Parametrii AAPS însoțitor

* **Vibrate on Bolus** (default `On`):
* **Units for Actions** (default `mg/dl`): if **On** units for actions is `mg/dl`, if **Off** unit is `mmol/l`. Used when setting a TT from watch.

(Watchfaces-watchface-settings)=

### Watchface settings

* **Show Date** (default `Off`): note, date is not available on all watchfaces
* **Show IOB** (default `On`): Display or not IOB value (setting for detailed value is in AAPS wear parameters)
* **Show COB** (default `On`): Display or not COB value
* **Show Delta** (default `On`): Display or not the BG variation of the last 5 minutes
* **Show AvgDelta** (default `On`): Display or not the average BG variation of the last 15 minutes
* **Show Phone Battery** (default `On`): Phone battery in %. Red if below 30% .
* **Show Rig Battery** (default `Off`): Rig battery is a synthesis of Phone battery, pump battery and sensor battery (generally the lowest of the 3 values)
* **Show Basal Rate** (default `On`): Display or not current basal rate (in U/h or in % if TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### User Interface setting

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Fața de ceas Steampunk

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Cadran FațaCeas

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discrete with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
  
  * `On`: you set a single value for TT
  * `Off`: ați setat ținta inferioară și superioară pentru ȚintaTemporară

* **Asistent Procentaj** (implicit `Oprit`): Permiteți corecții bolus din asistent (valoarea introdusă în procente înainte de notificarea de confirmare)

(Watchfaces-complications)=

## Complicații

*Complicația* este un termen de la producătorii tradiționali de ceasuri, care descrie adăugarea pe fața principală a ceasului - o altă fereastră sau cadran mai mic (cu data, ziua săptămânii, faza lunii, șamd). Wear OS 2.0 permite diverșilor furnizori de date, cum ar fi aplicația de vremea, notificările, contoarele de fitness și multe altele - să fie adăugate la orice față de ceas care acceptă complicații.

Aplicația AAPS Wear OS acceptă fețe personalizate de la construcția cu versiunea `2.6`și permite oricărei fețe de ceas terțe care suportă complicații să fie configurată pentru a afișa date legate de AAPS (BG cu tendința, IOB, COB șamd).

Complicațiile servesc de asemenea ca **scurtătură** spre funcții AAPS. Prin apăsarea pe ele puteți deschide meniurile și dialogurile legate de AAPS (în funcție de tipul de complicație și configurație).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Tipuri de complicații

Aplicația AAPS Wear OS furnizează numai date brute, conform formatelor predefinite. Depinde de dezvoltatorul terț al feței de ceas să decidă unde și cum să afișeze complicațiile, inclusiv modul de prezentare, margine, culoare și font. Din multele tipuri disponibile de complicații ale Wear OS, AAPS utilizează:

* `TEXT SCURT ` -Conține două linii de text, 7 caractere fiecare, denumite uneori valoare și etichetă. De obicei, redat în interiorul unui cadran sau a unei mici buline - unul sub altul, sau lateral unul de altul. Este o complicație foarte limitată ca spațiu. AAPS încearcă să înlăture caracterele care nu sunt necesare pentru a se încadra: prin rotunjirea valorilor, înlăturarea zerourilor de la începutul și sfârșitul valorilor, șamd.
* `TEXT LUNG` - Conține două linii de text, aproximativ 20 de caractere fiecare. De obicei, redat în interiorul unui dreptunghi sau al unui cadran lung - unul sub altul. Este folosit pentru mai multe detalii și stare textuală.
* `VALOARE INTERVAL` -Folosit pentru valori din intervalul predefinit, ca un procentaj. Conține pictogramă, etichetă și este de obicei redată ca un cadran de progres.
* `IMAGINE MARE` - Imagine de fundal personalizată care poate fi folosită (atunci când este acceptată de ceas) ca fundal.

### Configurare complicație

Pentru a adăuga complicații la fața de ceas, configurați-o printr-o apăsare lungă și prin apăsarea pe roata dințată de mai jos. În funcție de modul specific în care se configurează o față de ceas - fie apăsați pe înlocuitori fie intrați in meniul de configurare al fețelor de ceas pentru complicații. Complicațiile AAPS sunt grupate în meniul AAPS.

Când configurați complicații pe ceas, Wear OS va prezenta și va filtra lista de complicații care se pot potrivi în locul selectat pe ceas. Dacă anumite complicații nu pot fi găsite în listă, este probabil din cauza faptului că acel tip nu poate fi utilizat pentru locul respectiv.

### Complicații furnizate de către AAPS

AAPS furnizează următoarele complicații:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **RB, CoB & IoB** (`TEXT SCURT`, deschide *Meniu*): Afișați *Rata Bazală* pe prima linie și *Carbohidrați la Bord* și *Insulină la Bord* pe linia a doua.
* **Glicemia** (`TEXT SCURT`, deschide *Meniu*): Afișați valoarea *Glicemiei* și săgeata de *tendință* pe prima linie iar pe linia a doua *vechimea măsurătorii* și *Variația Glicemiei*.
* **CoB & IoB** (`TEXT SCURT`, deschide *Meniu*): Afișați *Carbohidrați la Bord* în prima linie și *Insulină la Bord* în a doua linie.
* **CoB Detaliat** (`TEXT SCURT`, deschide *Asistent*): Afișează în prima linie *Carbohidrații la Bord* activi și în a doua linie Carbohidrații planificați (viitori, carbohidrați extinși).
* **Icoană CoB** (`TEXT SCURT`, deschide *Asistent*): Afișează o iconiță statică cu valoarea *Carbohidrați la Bord*.
* **Stare Completă** (`TEXT LUNG`, deschide *Meniu*): Arată majoritatea datelor deodată: valoarea *glicemiei* și săgeata *tendinței*, *variația glicemiei* și *vechimea măsurătorii* pe prima linie. Pe linia a doua linie *Carbohidrați la Bord*, *Insulină la Bord* și *Rata bazală*.
* **Stare completă (inversat)** (`TEXT LUNG`, deschide *Meniu*): Aceleași date ca și la *Stare completă*, dar liniile sunt inversate între ele. Poate fi folosit în fețele de ceas care ignoră una din cele două linii în `TEXT LUNG`
* **IoB Detaliat** (`TEXT SCURT`, deschide *Bolus*): Afișează *Insulina la Bord* totală în prima linie și *IoB* defalcat pentru *Bolus* și *Bazală* în linia a doua.
* **Iconiță IoB** (`TEXT SCURT`, deschide *Bolus*): Afișează valoarea *Insulinei la Bord* printr-o iconiță statică.
* **Baterie Telefon/Încărcător** (`VALOARE INTERVAL`, deschide *Status*): Afișează în procente bateria telefonului cu AAPS (încărcătorului de date), așa cum este raportat de AAPS. Prezentat ca un indicator în procente cu o iconiță de baterie care afișează valoarea raportată. Este posibil să nu se actualizeze în timp real, doar atunci când apar alte modificări importante de date AAPS (de obicei: la fiecare ~ 5 minute cu noua valoare a *glicemiei*).

În plus, există trei complicații de tip `IMAGINE MARE`: **fundal întunecat**, **fundal gri** și **fundal deschis**, ce afișează imaginea de fundal statică AAPS.

### Setări legate de complicații

* **Acțiunea de atingere a complicațiilor** (implicit `Implicit`): Decideți ce dialog se deschide când utilizatorul apasă pe complicație: 
  * *Implicit*: acțiune specifică tipului de complicație*(vedeți lista de mai sus)*
  * *Meniu*: Meniu principal AAPS
  * *Asistent*: asistent bolusare - calculator pentru bolus
  * *Bolus*: introducere directă a valorii bolus
  * *eCarb*: eCarb configuration dialog
  * *Status*: status sub-menu
  * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

(WearOsSmartwatch-wear-os-tiles)=

## Wear OS Tiles

Wear OS Tiles provide easy access to users' information and actions to get things done. The tiles are only available on Android smartwatches running on Wear Os version 2.0 and higher.

Tiles allow you to quickly access actions on the AAPS application without going through the watch face menu. The tiles are optional and can be added and configured by the user.

The tiles are used "next to" any watch face. To access a tile, when enabled, swipe right to left on your watch face to show them.

Please note; that the tiles do not hold the actual state of the AAPS phone app and will only make a request, which has to be confirmed on the watch before it is applied.

## How to add Tiles

Before using the tiles, you have to switch on "Control from Watch" in the "Wear OS" settings of Android APS.

![Wear phone preferences enabled](../images/wear_phone_preferences.jpg)

Depending on your Wear OS version, brand and smartphone there are two ways of enabling the tiles:

1. On your watch, from your watch face; 
  * Swipe right to left till you reach the "+ Add tiles" 
  * Select one of the tiles.
2. On your phone open the companion app for your watch. 
  * For Samsung open "Galaxy Wearable", or for other brands "Wear OS"
  * In the click on the section "Tiles", followed by "+ Add" button
  * Find the AAPS tile you like to add by selecting it. ![Wear phone add tile](../images/wear_companion_app_add_tile.png)
  * The order of the tiles can be changed by dragging and dropping

The content of the tiles can be customized by long-pressing a tile and clicking the "Edit" or "gear icon" button.

### APS(Actions) Tile

The action tile can hold 1 to 4 user-defined action buttons. To configure, long-press the tile, which will show the configuration options. Similar actions are also available through the standard watch menu.

Actions supported in the Action tile can request the AAPS phone app for:

* **Calc**; do a bolus calculation, based on carb input and optional a percentage [1]
* **Insulin**; request insulin delivery by entering the unit of insulin
* **Treatment**; request both insulin delivery and add carbs
* **Carbs**; add (extended) carbs
* **TempT**; set a custom temporary target and duration

![Wear action tile, sample calculator](../images/wear_actions.png)

[1] Via, the Wear OS menu, set the "Calculator Percentage" option to "ON" to show the percentage input in the bolus calculator. The default percentage is based on the phone settings in the "Overview" section ["Deliver this part of the bolus wizard result %"](#Preferences-deliver-this-part-of-bolus-wizard-result) When the user does not provide a percentage, the default value from the phone is used. Configure the other parameters for the bolus calculator in the phone app via "Preferences" "Wizard Settings".

### AAPS(Temp Target) Tile

The Temp Target Tile can request a temporary target based on AAPS phone presets. Configurați ora și țintele prestabilite prin setarea aplicației telefonului prin accesarea "Preferințelor", "Prezentare", ["Ținte temporare implicite"](#Preferences-default-temp-targets) și setați durata și țintele pentru fiecare presetare. Configurați acțiunile vizibile pe panou prin setările de panou. Apăsați lung pe iconiță pentru a afișa opțiunile de configurare și selectați 1 până la 4 opțiuni:

* **Activitate**; pentru sport
* **Hipo**; pentru a crește ținta în timpul tratamentului hipoglicemiei
* **Mănâncă în curând**; pentru a scădea ținta și a crește insulina la bord
* **Manual**; setați o țintă temporară personalizată și o durată
* **Anulați**; pentru a opri ținta temporară curentă

![Editare panou acțiuni Wear](../images/wear_tile_tempt_edit.png)

### AAPS(Asistent)Panou

Panoul AsistentRapid poate ține 1 până la 4 butoane de acțiune rapide, definite cu aplicația pentru telefon[2]. Vedeți [AsistentRapid](#Preferences-quick-wizard). Puteți stabili mese standard (carbohidrați și metode de calcul pentru bolus) care să fie afișate pe panou, în funcție de ora zilei. Ideal pentru cele mai frecvente mese/gustări pe care le mâncați în timpul zilei. Puteți specifica dacă butonul de asistent rapid va fi afișat pe telefon, ceas sau ambele. Vă rugăm să rețineți că telefonul poate arăta doar un singur buton de asistent rapid. De asemenea, setarea rapidă a asistentului poate specifica un procentaj personalizat de insulină pentru bolus. Procentul personalizat vă permite să variați, de exemplu, gustare la 120%, micul dejun lent absorbit la 80% și o gustare pentru prevenire hipoglicemie la 0%

![Panouri acțiuni Wear și configurare telefon](../images/quickwizard_watch_phone.png)

[2] Wear OS limitează frecvența de actualizare a panourilor la doar o dată la 30 de secunde. Când observați că modificările de pe telefon nu sunt reflectate pe panouri, luați în considerare; o așteptare de 30 de secunde, prin folosirea butonului "Retrimite toate datele" din secțiunea Wear OS a AAPS, sau eliminarea panoului și adăugarea sa din nou. Pentru a schimba ordinea butoanelor Asistentului Rapid glisați un articol în sus sau în jos.

## Întotdeauna pornit

Durata lungă de viață a bateriei pentru ceasurile inteligente Android Wear OS reprezintă o provocare. Unele ceasuri inteligente pot ajunge până la 30 de ore înainte de reîncărcare. Afișajul ar trebui să fie oprit pentru o economisire optimă a energiei atunci când nu este utilizat. Cele mai multe ceasuri inteligente acceptă afișajul „Întotdeauna pornit”.

De la versiunea 3 AAPS, putem folosi o "Interfață Simplificată" în modul „Întotdeauna pornit”. Această interfață conține numai glicemia, direcția și timpul. Această interfață este optimizată din punctul de vedere al bateriei prin actualizări mai puțin frecvente, afișarea a mai puțină informație și iluminarea a mai puțini pixeli pentru a economisi energie pe ecranele OLED.

Modul de interfață simplificat este disponibil pentru fețele de ceas: AAPS, AAPS V2, Home Big, Digital Style, Steampunk și Cockpit. Interfața simplificată este opțională și este configurată prin intermediul setărilor feței ceasului. (apăsați prelung fața ceasului și apăsați pe butonul "editare" sau pe icoana roata dințată) Selectați configurația "Interfață simplificată" și setați la "Mereu pornit" sau "Întotdeauna pornit și la încărcare".

### Modul de noapte

În timpul încărcării, ar fi util ca afișajul să rămână „permanent pornit” și să arate glicemia în timpul nopții. Cu toate acestea, fețele standard de ceas sunt prea luminoase și au prea multe informații, iar detaliile sunt greu de citit cu ochii somnolenți. Prin urmare, am adăugat o opțiune pentru ca interfața de ceas să simplifice interfața doar în timpul încărcării atunci când este stabilită în configurație.

Modul de interfață simplificat este disponibil pentru fețele de ceas: AAPS, AAPS V2, Home Big, Digital Style, Steampunk și Cockpit. Interfața simplificată este opțională și este configurată prin intermediul setărilor feței ceasului. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see the [official documentation](https://developer.android.com/training/wearables/get-started/debugging). Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Watchface Nightstand](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

## Snooze Alert shortcut

It is possible to create a shortcut to snooze the alerts/alarm of AAPS. Muting the sound via your watch is convenient and faster without reaching for your phone. Note; you still have to check your alarm message on your phone and handle it accordingly, but you can check that later. When your watch has two buttons, you can assign a key to the `AAPS Snooze Alert` program.

To link the button on the Samsung Watch 4 go to `Settings > Advanced Features > Customize Buttons > Double press > AAPS Snooze Alert`

### Snooze xDrip

When you use xDrip and have xDrip installed on the watch, the 'AAPS Snooze Alert' shortcut will also Snooze any xDrip alarm.

## Sfaturi legate de performanța și durata de viață a bateriei

Ceasurile Wear OS sunt dispozitive cu constrângeri mari în ceea ce privește consumul de energie. Dimensiunea ceasului limitează capacitatea bateriei incluse. Chiar și cu progresele recente atât pe partea de hardware, cât și pe cea de software, ceasurile Wear OS necesită în continuare încărcare zilnică.

Dacă bateria ține mai puțin de o zi (de dimineața până seara), iată câteva sfaturi pentru a rezolva problemele.

Principalele arii cu consum ridicat de baterie sunt:

* Afișare activă cu iluminare de fundal (pentru LED) sau în modul intensitate completă (pentru OLED)
* Afișare pe ecran
* Comunicații radio prin Bluetooth

Deoarece nu putem face compromisuri în comunicare (avem nevoie de date actualizate) și dorim să avem cele mai recente date redate, majoritatea optimizărilor se pot face în zona *timp de afișare*:

* De obicei, fețele de ceas implicite sunt mai bine optimizate decât cele personalizate, descărcate din magazin.
* Este mai bine să utilizați fețe de ceas care limitează cantitatea de date afișate în modul inactiv/estompat.
* Fiți conștient când amestecați alte complicații, cum ar fi widgeturile meteorologice terțe, sau alte ce utilizează date din surse externe.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](#Phones-list-of-tested-phones) and [ask community](../GettingHelp/WhereCanIGetHelp.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

(Watchfaces-troubleshooting-the-wear-app)=

## Troubleshooting the wear app:

* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

## Additional AAPS custom watchfaces are also available

[Here](../ExchangeSiteCustomWatchfaces/index.md) you can download Zip-Files with custom watchfaces made by other users.

## Build your own watchface

If you want to build your own watchface, follow the [guide here](../ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md).

Once you have built a custom watchface, you can share your own **AAPS** custom watchface with others, the zip-file can be uploaded in the folder "ExchangeSiteCustomWatchfaces" via a Pull Request into Github. During merge of the pull request, the documentation team will extract the CustomWatchface.png file and prefix it with the filename of the Zip-file.