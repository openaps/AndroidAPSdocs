# Obrazovky AndroidAPS

## Hlavní stránka

![Hlavní obrazovka V2.5.](../images/Screenshot_Home_screen_V2_5_1.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

### Sekce A

* navigace mezi různými moduly AndroidAPS tažením prstu (swipe) doleva nebo doprava

### Sekce B

* změna stavu smyčky (otevřená smyčka, uzavřená smyčka, přerušení smyčky atd.)
* zobrazení aktuálního profilu a provedení [Přepnutí profilu](../Usage/Profiles.md)
* zobrazení aktuálního cíl a nastavení [dočasného cíl](../Usage/temptarget.md).

Podržte prst dlouze na některém z tlačítek pro změnu nastavení. I.e long press the target bar in the upper right ("100" in the screenshot above) to set a temp target.

### Sekce C

* posledního hodnota glykémie z Vašeho CGM
* jak stará je to hodnota
* změny v posledních 15 a 40 minutách
* Váš aktuální bazál - včetně dočasného bazálu (TBR) naprogramovaného systémem
* aktivní inzulín (IOB)
* Zbývající sacharidy (carbs on board)

Volitelné [stavové indikátory](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) poskytují vizuální upozornění na nízký stav zásobníku, vybitou baterie nebo nadměrné stáří kanyly.

Ukazatel aktivního inzulínu by měl být nula, pokud běží pouze váš standardní bazál a žádný z předchozích bolusů už nemá aktivní zůstatek. Čísla v závorkách ukazují, kolik z celku tvoří inzulín z předchozích bolusů a kolik tvoří navýšení/ponížení bazálu naprogramované aplikací AAPS. Tato druhá část může být i záporná, pokud předcházela období se sníženým bazálem.

### Sekce D

Klepnutím na šipku na pravé straně obrazovky v sekci D můžete vybrat, které informace se mají zobrazit v grafu níže.

### Sekce E

Graf, který zobrazuje stav glukózy ve vaší krvi, jak byla přečtena vaším senzorem (CGM). V grafu se také zobrazují oznámení Nightscoutu, např. kalibrace z prstu a vstupy sacharidů.

Dlouhým zmáčknutím na grafu, změníte časový rozsah grafu. Můžete si vybrat 6, 8, 12, 18 nebo 24 hodin.

"pokračující" linka ukazuje předpovídaný trend glukózy - pokud máte zvoleno.

* **Orange** line: [COB](../Usage/COB-calculation.rst) (colour is used generally to represent COB and carbs)
* **Dark blue** line: IOB (colour is used generally to represent IOB and insulin)
* **Light blue** line: zero-temp (predicted BG if temporary basal rate at 0% would be set)
* **Dark yellow** line: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (un-announced meals)

Tyto linky ukazují různé predikce založené na aktuální rychlosti absorpce sacharidů (COB); samotném inzulinu (IOB); ukazují, za jak dlouho se glykémie dostane do cílového rozsahu nebo nad něj, pokud by odchylky najednou zmizely a my jsme mezitím měli vypnutý bazál (zero-temp) a efekt/detekci neoznámeného jídla, u kterého byly detekovány sacharidy, ale nebyly uživatelem zaznamenány do systému (UAM).

The **solid blue** line shows the basal delivery of your pump. The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs) and the solid blue line is the actual delivery over time.

The **thin yellow** line shows the activity of Insulin. It is based on the expected drop in BG of the insulin in your system if no other factors (like carbs) were present.

### Sekce F

This section is also configurable using the options in section D.

* **Insulin On Board** (blue chart): It shows the insulin you have on board. If there were no TBRs, SMBs and no remaining boluses this would be zero. Decaying depends on your DIA and insulin profile settings. 
* **Carbs On Board** (orange chart): It shows the carbs you have on board. Decaying depends on the deviations the algorithm detects. If it detects a higher carb absorption than expected, insulin would be given and this will increase IOB (more or less, depending on your safety settings). 
* **Odchylky**: 
   * **GREY** bars show a deviation due to carbs. 
   * **GREEN** bars show that BG is higher than the algorithm expected it to be. 
   * **RED** bars show that BG is lower than the algorithm expected.
* **Sensitivity** (white line): It shows the sensitivity that Autosense has detected. Sensitivity is a calculation of sensitivity to insulin as a result of exercise, hormones etc.
* **Activity** (yellow line): It shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). The value is higher for insulin closer to peak time. It would mean to be negative when IOB is decreasing. 

### Sekce G

Umožňuje podávání bolusu (obvykle k tomu použijete tlačítko Kalkulačka) a ke vkládání kalibrace CGM měřením glykémie z prstu. Také se zde zobrazí tlačítko Rychlý bolus, pokud je nakonfigurováno v [Konfiguraci](../Configuration/Config-Builder#quickwizard-settings).

## Kalkulačka

![Kalkulačka](../images/Screenshot_Bolus_calculator.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulačka.

### Sekce A

zde se vyplňují údaje o bolusu, který se chystáte odeslat. Pole „Glykémie“ bývá automaticky předvyplněné poslední naměřenou hodnotou ze senzoru. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. Do pole „Sacharidy“ vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterému chcete poslat bolus. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k již dříve zkonzumovaným sacharidům.

SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je na pumpě nastavená dočasná bazální dávka 0% na dvě hodiny, aby se tak kompenzoval extra podaný inzulín. Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.

### Sekce B

zobrazuje vypočtený bolus. Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k jeho pokrytí.

### Sekce C

zobrazuje různé prvky, které byly použity k výpočtu bolusu. Můžete zrušit označení všech, které se vám nehodí, ale normálně by k tomu neměl být důvod.

### Kombinace COB a IOB a jejich význam

<ul>
    <li>Pokud vyberete COB a IOB, budou při výpočtu zohledněny nestrávané sacharidy, které již nejsou pokryty inzulinem + veškerý inzulin, který byl dodán jako TBR nebo SMB.</li>
    <li>Pokud vyberete COB bez IOB, riskujete vydání příliš velkého množství inzulinu, protože AAPS nebude brát v potaz inzulin, který již byl vydán. </li>
    <li>Pokud vyberete IOB bez COB, AAPS bude zohledňovat již vydaný inzulin, ale nezapočítá žádné zkonzumované sacharidy, které dosud nejsou stráveny. To vede k oznámení o 'chybějících sacharidech'.
</ul>

V případě, že chcete vydat další bolus krátce po podání bolusu k jídlu (např. když si přidáte zákusek), je užitečné zrušit označení všech těchto políček. Tak lze přidat pouze nově zkonzumované sacharidy, jelikož hlavní jídlo dosud nemusí být stráveno, takže IOB krátce po bolusu k jídlu nebude přesně odpovídat množství COB.

### Chybná detekce COB

![Pomalá absorpce sacharidů](../images/Calculator_SlowCarbAbsorbtion.png)

Pokud při použití kalkulačky uvidíte výše uvedené varování, systém AndroidAPS zjistil, že vypočtená hodnota COB může být chybná. Takže pokud dávate bolus znovu po předchozím jídle s COB, měli byste si dát pozor na předávkování! Podrobnosti viz pokyny na [stránce výpočtu COB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

Zde se zobrazuje profil aktivity pro inzulín, který jste vybrali. FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace po úplné rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.

Obvykle budete používat jeden z profilů Oref – a nezapomeňte na důležitou věc, a sice, že rozpad inzulínu má „dlouhý ocas“. Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na onom „ocasu“) záleží. Pokud s ním totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zvláště patrné je to v rekurzivním výpočtu algoritmu AndroidAPS, když se počítá řada malých zbytků inzulínu.

Podrobnější informace o různých typech inzulínu, o jejich profilech aktivity a o tom, proč je to vše důležité, najdete v článku [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

A také si o tom můžete přečíst výborný článek blogu zde: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

A ještě více na: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_pump_Combo.png)

Zde vidíme stav inzulínové pumpy – v tomto případě Accu-Chek Combo. Zobrazené informace nepotřebují další vysvětlení. Dlouhý stisk tlačítka HISTORIE spustí čtení dat z historie pumpy, včetně bazálního profilu. Ale pamatujte, že na pumpě Combo je podporován pouze jeden bazální profil.

## Péče

![Péče](../images/Screenshot_care_portal.png)

Zde jsou replikované funkce, které najdete na obrazovce Nightscoutu pod symbolem „+“ a které vám umožní přidávat poznámky k záznamům. Funkce jako např. poznačení, že jste vyměnili kanylu nebo zásobník s inzulinem, zřejmě nevyžadují další vysvětlení.

**BUT this section does not issue any commands to your pump!** So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

### Carb correction

Care portal can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB on homescreen.
2. Delete carbs in treatment tab.
3. Make sure carbs are deleted successfully by checking COB on homescreen again.
   
   -> If carbs are not deleted as intended and you add additional carbs as explained here (4.), COB will be too high and that might lead to too high inuslin delivery.

4. Enter correct carb amount through care portal and make sure to set the correct event time.

## Smyčka, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

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