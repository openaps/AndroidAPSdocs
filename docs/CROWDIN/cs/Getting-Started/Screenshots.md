# Snímky obrazovky

## Hlavní stránka

![Homescreen V2.1](../images/Screenshot_Home_screen_V2_1.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

**Sekce A:** umožňuje vám navigaci mezi různými moduly AndroidAPS tažením prstu (swipe) doleva nebo doprava.

**Sekce B:** umožňuje přepínat stav smyčky (otevřená smyčka, uzavřené smyčka, pozastavená smyčka atd.), zjistit si váš aktuální profil, zjistit si aktuální cíl glykemie a nastavit dočasný cíl. Podržte prst dlouze na některém z tlačítek pro změnu nastavení. Tj. dlouze držte prst na cílovém modrém poli v horní pravé části ("5,5" na snímku), abyste nastavili dočasný cíl.

**Sekce C:** poslední glykemie z vašeho senzoru CGM, kolik času uplynulo od posledního čtení, změna za posledních 15 a 40 minut, vaše aktuální bazální dávka - včetně jakékoliv dočasné bazální dávky (DBD) naprogramované systémem, množství aktivního inzulínu (IOB) a množství aktivních sacharidů (COB).

Volitelné [stavové indikátory](../Configuration/Preferences.md) (CAN | INS | RES | SEN | BAT) poskytují vizuální upozornění na nízký stav zásobníku, vybitou baterie nebo nadměrné stáří kanyly.

Ukazatel aktivního inzulínu by měl být nula, pokud běží pouze váš standardní bazál a žádný z předchozích bolusů už nemá aktivní zůstatek. Čísla v závorkách ukazují, kolik z celku tvoří inzulín z předchozích bolusů a kolik tvoří navýšení/ponížení bazálu naprogramované aplikací AAPS. Tato druhá část může být i záporná, pokud předcházela období se sníženým bazálem.

**Sekce D:** Klepnutím na šipku na pravé straně obrazovky v sekci D můžete vybrat, které informace se mají zobrazit v grafu níže.

**Sekce E:** Graf, který ukazuje vaši glykémii načtenou z vašeho senzoru (CGM). V grafu se zobrazují rovněž oznámení Nightscoutu jako kalibrace z prstu nebo zaznamenané sacharidy. Dlouhým přidržením prstu na grafu změníte časové měřítko. Můžete si vybrat 6, 8, 12, 18 nebo 24 hodin.

Prodloužené linky ukazují predikce glykémie a trendy, pokud jste je zvolili.

    * Oranžová linka: COB (barva se používá obecně k zobrazení COB a sacharidů)
    * Tmavě modrá linka: IOB (barva se používá k zobrazení IOB a inzulinu)
    * světle modrá linka: bazály
    * tmavě žlutá čára: UAM
    

Tyto linky ukazují různé predikce založené na aktuální rychlosti absorpce sacharidů (COB); samotném inzulinu (IOB); ukazují, za jak dlouho se glykémie dostane do cílového rozsahu nebo nad něj, pokud by odchylky najednou zmizely a my jsme mezitím měli vypnutý bazál (zero-temp) a efekt/detekci neoznámeného jídla, u kterého byly detekovány sacharidy, ale nebyly uživatelem zaznamenány do systému (UAM).

Modrá linka ukazuje dávkování bazálního inzulínu vaší pumpou. Tečkovaná modrá linka je úroveň bazální dávky, jaká by byla vydávána za normálních okolností, kdyby nebyla navýšená/ponížená pomocí dočasné bazální dávky (DBD) a plná modrá linka je aktuální dávkování v průběhu času.

**Sekce F:** Tato sekce je také konfigurovatelná volbami ze sekce D. Na tomto snímku ukazujeme IOB (aktivní inzulín v těle) – kdyby zde nebyly žádné DBD a žádný zbývající inzulín z bolusů, pak by IOB byl nula. Na snímku se také zobrazuje citlivost a odchylka. ŠEDÉ pruhy zobrazují odchylky kvůli sacharidům, ZELENÉ pruhy ukazují, že glykémie je vyšší, než algoritmus očekával, a ČERVENÉ pruhy signalizují, že je glykémie nižší, než bylo očekáváno.

**Sekce G:** Tato sekce umožňuje podávat bolusy (obvykle byste k tomu použili tlačítko Kalkulačka) a ke vkládání kalibrace CGM pomocí měření z prstu.

## Kalkulačka

![Calculator](../images/Screenshot_Bolus_calculator.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulačka.

**Sekce A:** Zde se vyplňují údaje o bolusu, který se chystáte odeslat. Pole „Glykémie“ bývá automaticky předvyplněné poslední naměřenou hodnotou ze senzoru. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. Do pole „Sacharidy“ vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterému chcete poslat bolus. Pole „Korekce“ slouží k navýšení/snížení výsledné dávky inzulínu z jakéhokoliv důvodu a „Čas jídla“ slouží k předsazení bolusu tak, abyste systému řekli, že mezi bolusem a konzumací jídla bude udaná prodleva. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k již dříve zkonzumovaným sacharidům.

SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je na pumpě nastavená dočasná bazální dávka 0 % na dvě hodiny, aby se tak vyrovnalo celkové množství inzulinu, který již byl vydán při superbolusu. Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.

**Sekce B:** Zobrazuje vypočtený bolus. Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k jeho pokrytí.

**Sekce C:** Zobrazuje různé hodnoty, které byly použity k výpočtu bolusu. Můžete zrušit označení všech, které se vám nehodí, ale normálně by k tomu neměl být důvod.

<b>Kombinace COB a IOB a jejich význam</b>

<ul>
    <li>Pokud vyberete COB a IOB, budou při výpočtu zohledněny nestrávané sacharidy, které již nejsou pokryty inzulinem + veškerý inzulin, který byl dodán jako DBD nebo SMB.</li>
    <li>Pokud vyberete COB bez IOB, riskujete vydání příliš velkého množství inzulinu, protože AAPS nebude brát v potaz inzulin, který již byl vydán. </li>
    <li>Pokud vyberete IOB bez COB, AAPS bude zohledňovat již vydaný inzulin, ale nezapočítá žádné zkonzumované sacharidy, které dosud nejsou stráveny. To vede k oznámení o 'chybějících sacharidech'.
</ul>

V případě, že chcete vydat další bolus krátce po podání bolusu k jídlu (např. když si přidáte zákusek), je užitečné zrušit označení všech těchto políček. Tak lze přidat pouze nově zkonzumované sacharidy, jelikož hlavní jídlo dosud nemusí být stráveno, takže IOB krátce po bolusu k jídlu nebude přesně odpovídat množství COB.

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

Zde se zobrazuje profil aktivity pro inzulín, který jste vybrali. FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace po úplné rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.

Obvykle budete používat jeden z profilů Oref – a nezapomeňte na důležitou věc, a sice, že rozpad inzulínu má „dlouhý ocas“. Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na onom „ocasu“) záleží. Pokud s ním totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zvláště patrné je to v rekurzivním výpočtu algoritmu AndroidAPS, když se počítá řada malých zbytků inzulínu.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Péče

![Péče](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a "Switch Profile" on your AndroidAPS rig to refresh the download. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Ošetření, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Konfigurace

![Konfigurace](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Nastavení a předvolby

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.