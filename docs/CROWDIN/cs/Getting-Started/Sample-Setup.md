# Ukázková instalace: Samsung S7, DanaRS, Dexcom G6 a Sony Smartwatch

![Ukázková instalace](../images/SampleSetup.png)

## Popis

V tomto případě je k ovládání smyčky použit telefon Samsung Galaxy S7. Upravená aplikace Dexcom přijímá data ze senzoru Dexcom G6. AndroidAPS slouží k ovládání inzulínové pumpy Dana R od korejského výrobce SOOIL přes bluetooth. Další zařízení nejsou vyžadována.

Protože Dexcom aplikace nabízí pouze omezené možnosti alarmů, použijeme open source aplikaci xDrip+, která umí nastavit kromě alarmů vysoké a nízké glykémie také další alarmy přizpůsobené individuálním požadavkům.

Hodinky s WearOS lze použít (v tomto příkladu Sony Smartwatch 3 (SWR50)), volitelně k zobrazení glykémie a hodnot AndroidAPS na vašem zápěstí. Hodinky lze dokonce použít k ovládání AndroidAPS (např. diskrétní poslání bolusu k jídlu).

Systém pracuje offline. To znamená, že pro ovládání není třeba datové připojení telefonu k internetu.

Nicméně, data se automaticky nahrají do Nightscoutu, jakmile je navázáno datové připojení. Nahráním dat do Nightscoutu získáte kompletní výkazy, které využijete například při návštěvě lékaře nebo můžete sdílet aktuální hodnoty s členy rodiny. Data do Nightscoutu (abyste mohli využívat různé Výkazy) lze také pouze prostřednictvím (předdefinovaného) Wi-Fi připojení.

## Požadované součásti

1. Samsung Galaxy S7
    
    * Alternativy: viz [seznam testovaných telefonů a hodinek](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) pro AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternativy: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Některé starší pumpy od Medtronic (je potřeba RileyLink/Gnarl hardware, mobilní telefon s Androidem a bluetooth s nízkou spotřebou / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Další pumpy mohou být k dispozici v budoucnu, podrobnosti viz [budoucí možné ovladače pumpy ](Future-possible-Pump-Drivers.md).

3. [Dexcom G6](https://dexcom.com)
    
    * Alternativy: viz seznam možných [zdrojů glykémie](../Configuration/BG-Source.rst)

4. Volitelné: Sony Smartwatch 3 (SWR50)
    
    * Alternativy: Pro AndroidAPS (OS musí být Android Wear) by měly všechny [ hodinky s Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) fungovat bez problémů. Další info najdete v [seznam testovaných telefonů a hodinek](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

## Příprava Nightscoutu

Podrobné [Nastavení Nightscoutu](../Installing-AndroidAPS/Nightscout.md)

## Nastavení počítače

Abyste byli schopni vytvořit aplikaci pro Android z volně dostupných otevřených zdrojových kódu AAPS, potřebujete Android Studio nainstalované na svém počítači nebo notebooku (Windows, Mac, Linux). Podrobné instrukce naleznete v části [Vytvoření APK](../Installing-AndroidAPS/Building-APK.md).

Při instalaci Android Studia buďte trpěliví, software potřebuje stáhnout spoustu dodatečných dat (balíčků) po nainstalovaní do počítače.

## Nastavení telefonu

![Chytrý telefon](../images/SampleSetupSmartphone.png)

### Zkontrolujte firmware telefonu

* Nabídka > Nastavení> Info o telefonu > Info o softwaru: Je potřeba alespoň „Android-verze 8.0“ (úspěšně testované do Android verze 8.0.0 Oreo - Samsung Experience verze 9.0) 
* Chcete-li aktualizovat firmware: Nabídka > Nastavení > Aktualizace softwaru

### Povolit instalaci aplikací z neznámých zdrojů

Nabídka > Nastavení> Zabezpečení > Neznámé zdroje > přepněte doprava (= aktivní)

Z bezpečnostních důvodů by toto nastavení mělo být nastaveno zpět na neaktivní po dokončení instalace všech aplikací, které jsou popsané zde.

### Zapněte Bluetooth

1. Nabídka > Nastavení > Připojení > Bluetooth > přepnout doprava (= aktivní)
2. Nabídka > Nastavení > Připojení > Umístění > přepnout doprava (= aktivní)

Služby určování polohy (dále jen „GPS“) musí být aktivovány, aby Bluetooth správně fungovalo.

### Nainstalujte aplikaci Dexcom (upravená verze)

![Upravená aplikace Dexcom](../images/SampleSetupDexApp.png)

Původní aplikace Dexcom z obchodu Google Play nebude fungovat, protože nevysílá hodnoty do jiné aplikace. Proto je vyžadována verze mírně upravená komunitou. Pouze tato upravená Dexcom aplikace může komunikovat s AAPS. Navíc lze použít upravenou Dexcom aplikaci se všemi Android telefony a ne jen s těmi v [seznamu kompatibilních zařízení s Dexcom](https://www.dexcom.com/dexcom-international-compatibility).

Na [ https://github.com/dexcomapp/dexcomapp/tree/master/2.4 ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) jsou k dispozici mmol/l a mg/gl verze upravené Dexcom G6 aplikace. Je nutné vybrat si G6 aplikaci určenou [pro váš region](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app).

Chcete-li to provést, proveďte na svém smartphonu následující kroky:

1. Je-li původní Dexcom aplikace již nainstalována: 
    * Zastavte senzor
    * Odinstalujte aplikaci přes Nabídka > Nastavení > Aplikace > Dexcom G6 Mobile > odinstalovat
2. Podle toho co potřebujete (zkontrolujte si jednotky mg/dl, mmol/l a [region](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app)) si z <https://github.com/dexcomapp/dexcomapp/tree/master/2.4> stáhněte upravenou Dexcom aplikaci
3. Na svůj mobilní telefon nainstalujte upravenou Dexcom G6 (= vyberte stažený APK soubor)
4. Spusťte upravenou aplikaci Dexcom, podle pokynů na obrazovce spusťte/zkalibrujte senzor, a počkejte na dokončení fáze „zahřívání“.
5. Jakmile upravená Dexcom aplikace zobrazuje aktuální hodnoty glykémie, nastavte si varování (hamburger menu na horní levé straně obrazovky) takto: 
    * Urgentně nízká `55 mg/dl` / `3,1 mmol / l` (nelze vypnout)
    * Nízká `VYP`
    * Vysoká `VYP`
    * Tempo stoupání `VYP`
    * Tempo klesání `VYP`
    * Ztráta signálu `VYP`

## Nainstalujte AndroidAPS

1. Postupujte podle pokynů k [Vytvoření APK](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Nahrajte](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) vygenerované APK do telefonu
3. [Nakonfigurujte AndroidAPS ](../Configuration/Config-Builder.md) podle svých potřeb pomocí průvodce nastavením nebo ručně
4. V tomto vzorovém nastavení jsme (mimo jiné) použili

* Zdroj glykémie: `Dexcom G6 App (upravená)` -- zapněte `Nahrávat glykémie do NS` a `Posílat glykémie do xDrip+` (Více [Zdroj glykémií ](../Configuration/BG-Source.rst))

![Nastavení G5](../images/SampleSetupG5Settings.png)

* NS Client activated (see [NS Client](../Configuration/Config-Builder#ns-profile) and [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## Nainstalujte xDrip+

xDrip+ je další vyspělá open source aplikace, která nabízí bezpočet možností. V tomto nastavení se Xdrip+ nepoužívá jako zdroj glykémie z Dexcom G6 (což je v rozporu s tím, proč vývojáři vytvořili Xdrip+), ale pouze kvůli výstrahám a zobrazovaní aktuální hodnoty glykémie včetně její křivky ve widgetu na domovské obrazovce zařízení s Androidem. V aplikaci xDrip + lze výstrahy nastavit mnohem podrobněji než v aplikaci Dexcom, AAPS nebo Nightscout (žádné omezení ve výběru zvuků, různé alarmy podle denní doby atd.).

1. Stáhněte si nejnovější stabilní verzi aplikace xDrip+ (APK) do svého telefonu <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - ne verze z Google Play!
2. Nainstalujte xDrip+ ze staženého souboru APK.
3. Spusťte xDrip + a proveďte následující nastavení (hamburger menu vlevo nahoře) 
    * Nastavení > Výstrahy a Upozornění > Seznam výstrah glykémií > Vytvořte výstrahy (vysoké a nízké) podle svých potřeb. 
    * Vytvořenou výstrahu lze změnit tak, že ji stisknete a dlouze přidržíte.
    * Nastavení > Výstrahy a Upozornění > Výstrahy kalibrace: vypnout (Připomínáno prostřednictvím upravené Dexcom aplikace)
    * Nastavení > Zdroj dat > 640G/EverSense
    * Nastavení > Komunikace mezi aplikacemi > Přijímat kalibrace > `ZAP`
    * Menu > Spustit senzor (je pouze „pro forma“ a nemá nic společného s běžícím senzorem G6. (To je nezbytné, jinak se bude pravidelně objevovat chybová zpráva.) 

Další informace o aplikaci xDrip+ viz zde [stránka Zdroj glykémií](../Configuration/BG-Source.rst).

### Příklad nastavení výstrahy

„Urgentní nízká výstraha“ (pod 55 mg/dl resp. 3,1 mmol) je standardní výstraha z upravené aplikace Dexcom, kterou nelze zakázat.

![xDrip výstrahy](../images/SampleSetupxDripWarning.png)

Tip pro schůzky / návštěvy kostela / kino atd.:

Je-li na Samsungu Galaxy S7 (Nastavení > Zvuky a vibrace > Nerušit: posuvník na pravé straně (= aktivní)) aktivován režim „Nerušit“, telefon jen vibruje při urgentní nízké výstraze a nevydává zvukové upozornění. Pro ostatní výstrahy vytvořené přes xDrip+ můžete vybrat, zda má výstraha ignorovat tichý režim telefonu (aby zazněl zvuk) nebo ne.

## Zakažte možnost pro úsporu energie

Na Samsungu Galaxy S7 přejděte do Menu > Nastavení > Údržba zařízení > Baterie > Nemonitorované aplikace > + Přidat aplikace: Vyberte postupně aplikace AndroidAPS, Dexcom G6 Mobile, xDrip + a Android Wear (pokud používáte hodinky)

## Volitelné: Sony Smartwatch 3 (SWR50)

S hodinkami s Wear OS může být život s diabetem ještě nenápadnější. Hodinky lze použít k zobrazení aktuální glykémie, stavu smyčky atd. na zápěstí. Hodinky lze dokonce použít k ovládání AndroidAPS (např. diskrétní poslání bolusu k jídlu). Chcete-li vydat bolus, dvakrát klepněte na hodnotu glykémie na ciferníku AAPSv2. Hodinky SWR50 obvykle vydrží na jedno nabití fungovat celý den (používají stejnou nabíječku jako Samsung Galaxy S7: microUSB).

![Chytré hodinky](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Install the app "Android Wear" on your smartphone via the Google Play Store and connect the smartwatch according to the instructions there.
* V AAPS zvolte hamburger menu (levý horní roh) > Konfigurace > Obecné (v dolní části seznamu) > Wear > Aktivovat na levé straně, klepněte na ozubené kolečko > Nastavení hodinek a aktivujte možnost `Řízení z hodinek Wear`
* Na hodinkách: chcete-li změnit ciferník, dlouze podržte displej hodinek a vyberte `AAPSv2`
* V případě potřeby restartujte obě zařízení.

## Nastavení pumpy

viz [pumpa Dana RS ](../Configuration/DanaRS-Insulin-Pump.md)