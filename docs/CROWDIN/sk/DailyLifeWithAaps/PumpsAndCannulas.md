# Pumpy a kanyly

## Výmena infúznych setov: zásobníky inzulínu a kanyly

Postup opísaný nižšie platí iba pre pumpy s hadičkou a netýka sa náplasťových púmp, ako sú Omnipod, Medtrum Nano, Accu-Chek Solo a pod. Tento postup sa niekedy nazýva „výmena setu“. „Úplná“ výmena setu zahŕňa zásobník inzulínu aj kanylu, „čiastočná“ výmena setu znamená výmenu iba kanyly.

Náplasťové pumpy sa plnia samy vo vlastnom sprievodcovi aktiváciou a ich kanyla je už v tele. **AAPS** pre ne neponúka plnenie: **Plnenie/doplňovanie** sa nezobrazuje v paneli **Spravovať** ani v Rýchlom spustení. Pozrite si stránku svojej pumpy v časti [Kompatibilné pumpy](../Getting-Started/CompatiblePumps.md).

Fyzickú výmenu náplne/zásobníka nie je možné urobiť cez **AAPS**, musí sa urobiť priamo na pumpe. Po dokončení je potrebné ich manuálne zaznamenať do **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Návod na výmenu zásobníka pumpy aj kanyly

1. V **AAPS** odpojte pumpu: na hlavnej obrazovke stlačte [ikonu okruhu](#AapsScreens-loop-status) a vyberte **Odpojiť pumpu** na 1 hodinu. Ikona sa zmení na sivú ikonu zástrčky, čo znamená, že pumpa je odpojená.

2. Fyzicky vymeňte zásobník inzulínu: fyzicky odpojte pumpu od tela a vymeňte zásobník/náplň a kanylu podľa pokynov výrobcu.

3. Naplňte hadičku a kanylu: môžete to urobiť priamo na pumpe. Uistite sa, že v hadičke nezostali žiadne bubliny.

4. Pripevnite novú kanylu na telo. Keď je kanyla zavedená a ihla vytiahnutá, v pripevnenej kanyle je malá vzduchová medzera, ktorú treba tiež naplniť. To announce this in **AAPS** and prime the site: open **Prime/Fill** (in the expanded status panel on the main screen, in the **Manage** sheet, or as a [QuickLaunch](QuickLaunch.md) button) and tick **Record pump site change** and/or **Record insulin cartridge change** as appropriate to record the change. Teraz stlačte predvolené množstvo na plnenie kanyly (zvyčajne okolo 0,3 U, ale overte, či je táto hodnota správna pre vašu kanylu) a vyberte **OK**. Prečítajte si súhrnnú správu a plnenie potvrďte ťuknutím na **OK**.

   ![Plnenie/doplňovanie v paneli Spravovať pri pumpe s hadičkou](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Znovu pripojte pumpu v **AAPS**: stlačte sivú ikonu zástrčky a vyberte **Znovu pripojiť pumpu**, aby okruh pokračoval.

### Užitočné informácie o výmene inzulínu/kanyly

* Zaznamenanie výmeny setu nastaví Autosens späť na 100 %. Vynuluje tiež príslušné stavové kontrolky a vek kanyly/inzulínu na hlavnej obrazovke **AAPS**.

* Predvolené množstvá na plnenie môžete nastaviť/upraviť v nastaveniach **Plnenie/doplňovanie** – otvoríte ich tak, že do vyhľadávacieho riadka na hlavnej obrazovke napíšete „plnenie“ (pozrite [Nastavenia](../SettingUpAaps/Preferences.md)). Koľko jednotiek treba na naplnenie vašej kanyly (podľa dĺžky ihly a dĺžky hadičky), nájdete v návode v balení kanýl.

* Inzulín podaný funkciou plnenia **AAPS** nezapočítava do výpočtu aktívneho inzulínu (IOB) a v [Histórii ošetrení](#aaps-screens-treatments) je označený ako „Plnenie“.

* Ani inzulín podaný bolusom z pumpy počas odpojenia pumpy **AAPS** nezapočíta. Ak náhodou podáte bolus priamo z pumpy, kým je **AAPS** odpojený, po opätovnom pripojení pumpy môžete tento inzulín oznámiť (bez jeho podania) v dialógu **Inzulín** (pozrite [Oznámenie podaného inzulínu bez skutočného podania bolusu](#pumps-cannulas-announce-insulin) nižšie).

### Problémy s kanylou, miestom vpichu, hadičkou a/alebo pumpou

Ak ste si istí, že ste istý čas nedostávali žiadny inzulín, hoci ho **AAPS** zaznamenal ako podaný, a presne viete, kedy problém začal (_napr._ vyberiete kanylu a vidíte, že sa pri zavádzaní zalomila), môžete to v **AAPS** opraviť. Majte však na pamäti, že inzulín mohol byť v skutočnosti podaný, len z nejakého dôvodu pôsobí pomaly.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Podávanie inzulínu z **AAPS** odstraňujte len s MIMORIADNOU opatrnosťou pre prípad, že inzulín _bol_ v skutočnosti podaný, a ďalších 24 h pozorne sledujte glykémiu.
```

Ak chcete odstrániť bolusy a SMB, o ktorých viete, že neboli podané, otvorte **menu** (☰), vyberte [Históriu ošetrení](#aaps-screens-treatments) a na karte **Sacharidy a bolusy** opatrne vymažte zaznamenané bolusy od chvíle, keď problém nastal. Tým sa opraví hodnota „aktívneho inzulínu“ (IOB), ktorá je pre výpočty **AAPS** kľúčová. Keď sa teraz vrátite na hlavnú obrazovku, uvidíte, že sa IOB znížil. Upozorňujeme, že bazálny inzulín, ktorý systém **AAPS** vypočíta ako podaný, nemôžete vymazať, takže systém **AAPS** ho stále zohľadní.

V menej zjavných prípadoch problémov s podávaním inzulínu, _napr._ pri úniku, upchatí alebo tunelovaní, keď si nie ste istí, kedy problém začal, alebo si myslíte, že časť inzulínu bola podaná, musíte byť opatrní. Tieto problémy môžete zistiť tak, že „cítite“ inzulín, vidíte mokrú náplasť, máte vysoké hodnoty glykémie alebo dostanete alarm. Keďže nikdy nebudete vedieť, koľko inzulínu sa dostalo do kože (a môže začať pôsobiť až po čase), bude ťažké určiť správne množstvo inzulínu, ktoré treba odpočítať od aktuálnej hodnoty „aktívneho inzulínu“ (IOB). Jednou z možností je po vyriešení problému s podávaním inzulínu pozastaviť okruh na 5 hodín (alebo na vašu dobu pôsobenia inzulínu) a potom okruh znova obnoviť. Tým zaistíte, že IOB bude po opätovnom spustení okruhu správny.

(pumps-cannulas-disconnecting)=
## Odpojenie pumpy pri sprchovaní alebo aktivite

Ak si pumpu zložíte kvôli sprchovaniu, kúpaniu, plávaniu, kontaktným športom alebo iným aktivitám, musíte informovať **AAPS**, že sa nepodáva žiadny inzulín, aby sa zachovala správna hodnota IOB. Pumpu môžete odpojiť pomocou [ikony okruhu](#AapsScreens-loop-status) na hlavnej obrazovke: stlačte ju a vyberte **Odpojiť pumpu** s potrebnou dobou. Ak aktivita trvá dlhšie, ako ste plánovali, otvorte znova ten istý dialóg a v časti **Odpojiť pumpu** vyberte novú dobu: odpojenie sa predĺži a nová doba začína plynúť od tejto chvíle. Pumpu nemusíte najprv znova pripojiť.

Keďže počas odpojenia pumpy nedostávate žiadny inzulín, mali by ste sa pripojiť každé dve hodiny a doplniť chýbajúci bazál. Môžete to urobiť tak, že pumpu pripojíte, bolusom podáte chýbajúce množstvo bazálu (_napr._ za posledné dve hodiny) a potom ju znova odpojíte. Pomôže to predísť závažnému nedostatku inzulínu, ktorý by mohol viesť k diabetickej ketoacidóze (DKA). Ak je nepohodlné pripojiť pumpu počas aktivity (miesto kanyly je zakryté neoprénom _a pod._), zvážte namiesto toho injekciu inzulínovým perom. Túto ručnú injekciu môžete zaznamenať v **AAPS** a nemusíte ju zaznamenať hneď pri podaní (len si poznačte čas injekcie). Inzulín totiž môžete oznámiť po opätovnom pripojení pumpy a spätne nastaviť čas, kedy bol skutočne podaný.

(pumps-cannulas-announce-insulin)=
## Oznámenie podaného inzulínu bez skutočného podania bolusu

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections: open the [Insulin dialog](#aaps-screens-buttons-insulin) (**Treatments** in the bottom navigation, or a QuickLaunch button), enter the amount in units and enable **Bolus will be recorded only (not delivered by pump)**. Potom sa zobrazí riadok **Čas** (nastavený na **Teraz**), v ktorom môžete zaznamenať skutočný čas injekcie: ak bola injekcia podaná nedávno, môžete ho ignorovať. Ak bol bolus podaný pred nejakým časom, posuňte čas späť pomocou **-** (_napr._ -30 min) alebo riadok otvorte šípkou a vyberte presný dátum a čas. **AAPS** potom zohľadní dobu pôsobenia inzulínu a podľa toho vypočíta zostávajúci inzulín v tele.

Ak používate **AAPS** ako opatrovateľ, môžete pumpu na diaľku veľmi jednoducho odpojiť (a znova pripojiť) pomocou [SMS príkazu](../RemoteFeatures/SMSCommands.md), napríklad príkazmi „pump disconnect 120“ a „pump connect 120“. Doba vzdialeného odpojenia môže byť od 1 do 120 min (v tomto príklade je to 120 minút). Je to veľmi užitočné, ak sa k telefónu s **AAPS** neviete ľahko dostať – napríklad je schovaný v páse na pumpu u dieťaťa, ktoré uteká k bazénu, alebo ho starostlivo stráži (či používa) tínedžer.

## Opätovné pripojenie pumpy po aktivite

Po dlhom odpojení (1–2 hodiny) je pomerne bežné, že **AAPS** vypočíta, že teraz máte záporný IOB. Keď pumpu znova pripojíte, podľa svojich preferencií, aktuálnej glykémie, plánovaného jedla alebo ďalšej aktivity môžete buď:

a) Jednoducho znovu pripojte pumpu v **AAPS** (zo sivej na zelenú, pri uzavretom okruhu) a nechajte na **AAPS**, aby znova začal podávať inzulín

_alebo_

b) Ak chcete postupovať agresívnejšie (napríklad ak smerujete k hyperglykémii), môžete otvoriť [Bolusovú kalkulačku](#aaps-screens-bolus-wizard) a podať bolus na nula sacharidov, aby sa vypočítaný chýbajúci inzulín ihneď podal ako bolus.

Ktorý postup uprednostníte, je veľmi individuálne a najlepšie to zistíte skúšaním.


(Aapsscreens-site-rotation)=
## Striedanie miest

**Spravovať → Striedanie miest** otvorí dialóg Striedanie miest v režime zobrazenia:

- Dvoma tlačidlami hore (ikona kanyly a ikona senzora) môžete zobraziť iba miesta kanyly, iba miesta senzora alebo oboje
- All Cannula change and Sensor change events from the past 45 days are available.
- Kliknite na oblasť miesta alebo na jeden záznam v zozname nižšie a zoznam sa vyfiltruje len na záznamy vo vybranej oblasti. Vybraná oblasť bude zvýraznená svetlo zelenou farbou.
- Ťuknite na ikonu **ceruzky** vedľa záznamu, otvorí sa režim úprav, kde môžete zmeniť miesto aplikácie, šípku alebo poznámku

![Režim zobrazenia](../images/SiteRotation/ViewMode.png)

- Ikona **ozubeného kolieska** (vpravo hore) otvorí nastavenia: **Používateľský profil pre rotáciu miest** otvorí dialóg, v ktorom vyberiete **Muž**, **Žena** alebo **Dieťa**, a prepínače **Spravovať rotáciu umiestnenia pumpy** a **Spravovať rotáciu umiestnení CGM** určujú, ktoré miesta spravujete.

![Nastavenia](../images/SiteRotation/Settings.png)

![Dialóg Používateľský profil pre rotáciu miest](../images/SiteRotation/Type.png)

*Note: this setting decides whether the Site Rotation dialog (Edit mode) opens automatically when a new entry is made with the "Prime/Fill" button or the "Sensor Insert" button.*

- Pri výmene setu urobenej priamo na pumpe musíte otvoriť režim zobrazenia a nový záznam upraviť, aby ste vybrali miesto a šípku

Režim úprav vám umožňuje vybrať miesto, šípku a poznámku k vybranému záznamu:

- Upravovaný záznam sa zobrazuje pod obrázkami tela spolu s ikonou svojho typu (kanyla alebo senzor)
- Pohľad spredu a zozadu sa zobrazujú vedľa seba: ťuknite na oblasť, kde ste ho umiestnili
- Once a site is selected (highlighted in green), the list below shows all entries made in this site in the past 45 days.

![Režim úprav](../images/SiteRotation/EditMode.png)

- Ťuknutím na ikonu šípky vpravo od záznamu môžete pridať voliteľnú šípku: dialóg **Zvoliť šípku** vám umožní určiť presnejšie miesto alebo orientáciu podu

![Poloha](../images/SiteRotation/EditModeSub.png)

- Môžete tiež pridať **Poznámku** k vybranému miestu
- Ťuknutím na ikonu **uloženia** (vpravo hore) miesto zaznamenáte

Filtrovať môžete graficky na obrázku alebo kliknutím na udalosť ošetrenia v zozname Filtrovanie zrušíte jednoducho kliknutím na obrázok mimo akýchkoľvek miest

![Filtrovanie](../images/SiteRotation/Filtering.png)
