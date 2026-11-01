# Nastavení AAPS na hodinkách s Wear OS

Níže uvedený návod platí pro apk **AAPS Wear**, které si musíte sestavit. Pokud jste ho ještě nesestavili, podívejte se na návod [zde](../WearOS/BuildingAapsWearOS.md). Při sestavení použijte stejný soubor úložiště klíčů, jaký jste použili pro apk **AAPS** do telefonu.

Některé informace můžete použít i pro apk **Wear** pro **AAPSClient** a **PumpControl**. Each **Wear** app will communicate with its matching phone app. Například: aplikace **AAPSClient Wear** slouží k zobrazení dat z **AAPSClient**, ne dat z **AAPS**. Když je vedle sebe nainstalováno několik variant klienta (**AAPSClient**, **AAPSClient2**, **AAPSClient3**), mají dlaždice každé z nich malé záhlaví v barvě dané varianty, takže je při přejíždění snadno rozlišíte.

## Verze Wear OS a kompatibilita

(wearos-watchface-changes)=

### Změny ciferníků ve Wear OS (dopad na ciferníky AAPS)

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

V červnu 2025 Google [oznámil změny](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html), které postupně ukončují starý engine ciferníků (AndroidX / Wearable Support Library, neboli „WSL“) a nahrazují ho novějším deklarativním formátem **Watch Face Format**. Vlastní ciferníky **AAPS** jsou postavené na starém enginu, takže čím novější verze Wear OS, tím je pravděpodobnější, že ciferník AAPS bude fungovat špatně nebo přestane fungovat úplně.

Týká se to jen **ciferníků** – **komplikace** AAPS, dlaždice a funkce vzdáleného ovládání to neovlivňuje. Proto také **aktualizace firmwaru/systému hodinek s Wear OS může ciferníky AAPS rozbít** a hodinky pak nelze vrátit na starší verzi Wear OS. Pokud vám ciferník AAPS teď funguje, **vypněte automatické aktualizace hodinek**.
```

Tabulka níže shrnuje, jak změna od Googlu ovlivňuje ciferníky AAPS (se starým enginem) podle verze Wear OS:

| Verze Wear OS           | Základní Android | Úroveň API | Dopad na ciferníky AAPS (starý engine)                                                                                                                                                             |
| ----------------------- | ---------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16       | 36         | **Staré ciferníky už nejsou k dispozici** – AAPS místo nich nainstaluje [ciferník ve formátu Watch Face Format](#wearos-aaps-v4-watchface): váš vlastní ciferník, nebo ciferník komplikací AAPS V4 |
| Wear OS 5               | Android 14       | 34         | **Závažný** – aktivní (interaktivní) režim často selhává, komplikace zamrzají, animace se zastaví                                                                                                  |
| Wear OS 4               | Android 13       | 33         | **Střední** – omezování, vynechané aktualizace, částečná selhání                                                                                                                                   |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11       | 30         | **Nízký** – starý engine je stále podporován                                                                                                                                                       |

Pokud vaše hodinky mají verzi, na které ciferníky AAPS nefungují spolehlivě, můžete data AAPS místo toho zobrazit pomocí **komplikací** na kompatibilním ciferníku, nebo použít [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) s komplikací, který dostává data z pluginu [Externí aplikace](#external-companion-apps) v **AAPS**. Na **Wear OS 6 a novějších** AAPS nainstaluje náhradní ciferník v novém formátu – viz níže.

(wearos-aaps-v4-watchface)=

### Wear OS 6 a novější – ciferník, který AAPS nainstaluje

Hodinky s **Wear OS 6 nebo novějším** nemohou klasické ciferníky AAPS používat jako ciferníky. Pro tyto hodinky přináší aplikace AAPS pro hodinky dva ciferníky v novém formátu Googlu **Watch Face Format**. Wear OS dovolí aplikaci nainstalovat jen **jeden** ciferník, proto si vyberete, který z obou bude na hodinkách:

- **Vlastní ciferník** (výchozí): zobrazuje vlastní ciferník, který jste z telefonu nahráli tlačítkem **Nahrát ciferník** (viz [Přepnutí na ciferník AAPS](#WearOS_changing-to-AAPS-watchface)). Hodinky vykreslí váš návrh jako obrázek, takže funguje každý existující vlastní ciferník. Pozice komplikací, které vlastní ciferník může definovat, v tomto obrázku **nejsou k dispozici**, protože Wear OS posílá data komplikací jen skutečnému ciferníku. Dlouhým stisknutím ciferníku se dostanete k jeho jedinému nastavení: zda trvale zapnutý displej ukazuje obyčejné hodiny, nebo váš vlastní ztlumený návrh.
- **Ciferník komplikací** (ciferník **AAPS V4**): jeho **sedm pozic pro komplikace** je **předem nastaveno s daty AAPS**: hodnota glykémie, IOB, COB, [komplikace Graf glykémie](#Watchfaces-complications), bazální dávka / dočasný cíl a ikona **Režim smyčky** v pozici vlevo nahoře (klepnutím na ni změníte režim smyčky z hodinek). Klepnutím na čas nahoře otevřete aplikaci budíku v hodinkách. Co jednotlivé pozice zobrazují, můžete změnit v editoru ciferníku.

Výběr provedete v telefonu: otevřete plugin **Wear** a v části **Ciferník nainstalován na hodinkách** vyberte jeden z obou. Tato karta se zobrazuje jen tehdy, když jsou připojené hodinky s Wear OS 6 nebo novějším. **AAPS** vás požádá o potvrzení, protože hodinky ciferník okamžitě vymění. Přepnutím z **Ciferníku komplikací** na jiný ciferník se také komplikace, které jste změnili v editoru ciferníku, vrátí na výchozí hodnoty; potvrzení vás na to upozorní. Když je vybraný **Ciferník komplikací**, tlačítka pro vlastní ciferník jsou skrytá a místo nich se zobrazí náhled ciferníku. Pokud nahrajete vlastní ciferník, když je vybraný **Ciferník komplikací**, **AAPS** vám připomene, že ho na hodinkách uvidíte, až přepnete na **Vlastní ciferník**.

- Vybraný ciferník se **nainstaluje a aktivuje automaticky** při prvním spuštění aplikace AAPS na takových hodinkách a **aktualizuje se automaticky** spolu s aplikací pro hodinky.
- Pokud jste ciferník odstranili, objeví se dole v **hlavní nabídce** aplikace AAPS na hodinkách položka **Nainstalovat ciferník** – klepnutím na ni ho znovu nainstalujete.

Když jsou připojené hodinky s Wear OS 5 nebo starším, karta **Ciferník nainstalován na hodinkách** se vůbec nezobrazuje (mechanismus, na kterém závisí, vyžaduje Wear OS 6); klasické ciferníky tam fungují jako dřív.

(wearos-complications-watchface-setup)=

### Ciferník komplikací – doporučené nastavení

**Ciferník komplikací** má sedm pozic pro komplikace. Dlouze stiskněte ciferník, klepněte na **Přizpůsobit** a pro každou pozici vyberte zdroj dat. Pozice jsou očíslované stejně jako v editoru ciferníku: **1** vlevo, **2** uprostřed, **3** vpravo, **4** graf, **5** dole, **6** vlevo nahoře a **7** vpravo nahoře.

| Výchozí nastavení                                                                               | Alternativní nastavení                                                                                   |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Ciferník komplikací, výchozí nastavení](../images/wearos/complications_watchface_default.png) | ![Ciferník komplikací, alternativní nastavení](../images/wearos/complications_watchface_alternative.png) |

| Pozice | Pozice        | Výchozí                                                                       | Alternativa                                  |
| ------ | ------------- | ----------------------------------------------------------------------------- | -------------------------------------------- |
| 1      | Vlevo         | Ikona IOB                                                                     | COB & IOB                                    |
| 2      | Uprostřed     | Glykémie                                                                      | Glykémie                                     |
| 3      | Vpravo        | Ikona COB                                                                     | Bazál a cíl                                  |
| 4      | Graf          | Graf glykémie                                                                 | Graf glykémie                                |
| 5      | Dole          | Bazál a cíl                                                                   | Baterie telefonu/uploaderu                   |
| 6      | Vlevo nahoře  | Režim smyčky                                                                  | Režim smyčky                                 |
| 7      | Vpravo nahoře | Baterie telefonu/uploaderu, nebo zkratka aplikace **AAPS Potvrzení výstrahy** | Zkratka aplikace **AAPS Potvrzení výstrahy** |

Zkratka **AAPS Potvrzení výstrahy** se vybírá z vestavěných komplikací hodinek typu **Zkratka aplikace**. Klepnutím na ni odložíte alarm, který právě zní v telefonu.

```{tip}
Na hodinkách zapněte **Vždy zapnutý displej** (**Nastavení** > **Displej**). Ciferník pak ukazuje vaši glykémii i se svěšenou rukou, místo prázdné obrazovky nebo obyčejných hodin.
```

```{admonition} No complication data while the watch is locked
:class: note
Pokud je v **Nastavení** > **Zabezpečení a ochrana soukromí** nastaven **Typ zámku**, hodinky při zamčení skryjí data komplikací a ciferník ukazuje prázdné pozice, dokud hodinky neodemknete. Aby data zůstala viditelná, vypněte ve stejné nabídce **Skrýt informace**.
```

### Wear OS 3

Apk **AAPS Wear** nainstalujte pomocí [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (popsáno níže) nebo ADB.  
Funkce **AAPS Wear** nejsou nijak omezené.

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 a Wear OS 5

Příklad: Galaxy Watch 4, 5, 6, 7 a Ultra nebo Pixel Watch, které **ještě nebyly** aktualizovány na Wear OS 6. Verzi zjistíte v **Nastavení** > **O hodinkách** > **Software**.

Apk **AAPS Wear** nainstalujte pomocí [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) (pro Wear OS 5 postupujte podle [tohoto videa](https://www.youtube.com/watch?v=yef_qGvcCnk)). Všechny funkce **AAPS Wear** fungují, ale klasické ciferníky **AAPS** jsou omezené, jak popisuje tabulka výše: na Wear OS 4 jsou zpomalené, na Wear OS 5 často selhávají.

```{admonition} Wear OS 5
:class: warning
Na Wear OS 5 se musí ciferník AAPS vybrat pomocí Wear Installer 2 hned po instalaci aplikace Wear: instalátor na konci instalace nabídne ciferník **AAPS (vlastní)**. Pokud omylem přepnete na jiný ciferník, zopakujte instalaci. Changing the watchface settings (Dark, Matching divider, etc.) may not be possible.

Pokud vám klasický ciferník teď funguje, **vypněte automatické aktualizace hodinek**: příští aktualizace firmwaru ho pravděpodobně rozbije. Pokud přesto aktualizujete na Wear OS 6, přečtěte si část výše: **AAPS** pak nainstaluje vlastní ciferník v novém formátu.
```

Pokud je ciferník příliš nespolehlivý, zvažte místo něj [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) s komplikací. Vyžaduje v **AAPS** povolený plugin [Externí aplikace](#external-companion-apps).

### Wear OS 6 a novější

Příklad: Galaxy Watch 4 a novější s One UI 8 Watch, Pixel Watch po aktualizaci z roku 2025. Většina hodinek Galaxy a Pixel tuto aktualizaci již dostala.

Apk **AAPS Wear** nainstalujte pomocí [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV). Klasické ciferníky nejsou k dispozici; **AAPS** automaticky nainstaluje ciferník vybraný v telefonu, viz [ciferník, který AAPS nainstaluje](#wearos-aaps-v4-watchface). Funkce **AAPS Wear** nejsou nijak omezené.

## How to set up a Samsung Galaxy Watch 4 smartwatch with **AAPS**

Tato část předpokládá, že s chytrými hodinkami nemáte žádné zkušenosti. Nejprve vás seznámí se základy oblíbených hodinek **Galaxy Watch 4** a pak vás krok za krokem provede nastavením **AAPS** na hodinkách.

_Tento návod byl napsán pro hodinky Galaxy Watch s Wear OS 3._ Na Wear OS 4 a novějších hodinky při připojení telefonu nebo počítače přes ADB požadují **párovací kód**. Wear Installer 2 i postup v terminálu [níže](#BuildingAapsWearOs-WearOS5-TShoot) to podporují.

Zde jsou základní návody pro nastavení [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) a [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Základní obeznámení s chytrými hodinkami

After basic setup of your watch according to the video above, go to the playstore on the phone and download the following apps: "Galaxy Wearable", “Samsung” and either “Easy Fire tools” or "Wear Installer 2".

Existuje spousta YouTube videí třetích stran, které vám pomohou seznámit se s vašimi novými chytrými hodinkami, například:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

Aplikace „Galaxy Wearable“ obsahuje také část s návodem k použití. Otevřete aplikaci Galaxy wearable na telefonu, vyhledejte hodinky a pokuste se spárovat hodinky s telefonem. Depending on your version, this may prompt you to install one more app, “galaxy watch 4 plugin”, from the playstore (takes a while to download). Nainstalujte aplikaci do telefonu a pak se pokuste znovu spárovat hodinky a telefon v aplikaci Galaxy wearable. Přejděte přes řadu nabídek a zaškrtněte potřebné předvolby.

## Nastavení účtu Samsung

Musíte se ujistit, že e-mailový účet, který používáte pro nastavení účtu Samsung, má nastavené takové datum narození, že uživatel je ve věku 13+, jinak bude problém se schválením oprávnění Samsung. Pokud jste dítěti mladšímu 13 let založili účet Gmail a používáte tuto e-mailovou adresu, nemůžete účet jednoduše změnit na účet dospělého. One way around this is to modify the current date-of-birth to make the current age 12 years and 364 days old. Následující den bude účet převeden na účet pro dospělé a můžete pokračovat v nastavení účtu Samsung.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Přenos aplikace **AAPS** Wear do telefonu s **AAPS**

Soubor Wear.apk z Android Studia dostanete do telefonu buď:

a) pomocí USB kabelu nahrajte soubor apk **AAPS** Wear do telefonu a pak ho ručně nainstalujte („side-load“) do hodinek. Přeneste Wear.apk přes USB do telefonu do složky Stažené soubory; nebo

b) vyjměte a vložte Wear.apk z Android Studia na svůj Disk Google.


K ruční instalaci AAPS do hodinek můžete použít: 1) Wear Installer 2 2) Easy Fire tools 3) Android Debug Bridge (ADB) Doporučujeme Wear Installer 2, protože návod a postup ve videu jsou velmi jasné a dobře vysvětlené. Pokud vám Wear Installer 2 nefunguje, zkuste Easy Fire Tools nebo ADB, oba postupy jsou popsány níže.

### Použití Wear Installer 2 k nahrání **AAPS** Wear z telefonu do hodinek

 ![Ikona aplikace Wear Installer 2](../images/wearos/wear_installer2_icon.png)

Aplikaci Wear Installer 2, kterou vyvinul [Malcolm Bryant](https://www.youtube.com/@Freepoc), si můžete stáhnout z Google Play do telefonu a použít ji k ruční instalaci (side-load) aplikace AAPS Wear do hodinek. Aplikace obsahuje praktické [video](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) „how to sideload“ (jak aplikaci nainstalovat).

```{tip}
Pro hodinky s Wear OS 5 postupujte podle [tohoto videa](https://www.youtube.com/watch?v=yef_qGvcCnk).
Tipy pro řešení problémů najdete [níže](#BuildingAapsWearOs-WearOS5-TShoot).
```

Video obsahuje všechny potřebné podrobnosti (nejlépe ho pusťte na jiném zařízení, abyste ho mohli sledovat během nastavování telefonu).

Jak se uvádí ve videu, po dokončení vypněte na hodinkách ladění ADB, aby se zbytečně nevybíjela baterie hodinek.

Případně, ale ne pro Wear OS 5, můžete:

### Ruční instalace **AAPS** Wear do hodinek pomocí Easy Fire tools

1) Stáhněte do telefonu _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_ z Obchodu Play

![obrázek](../images/wearos/easyfire01.png)

2) Nastavte se v hodinkách jako vývojář (jakmile skončíte s nastavením a připojíte se k telefonu):

Přejděte do **Nastavení** > **Systém** > **Informace** > **Verze** (názvy nabídek se u různých značek hodinek liší – u některých hodinek je to **O hodinkách** > **Informace o softwaru** > **Verze softwaru**).

![obrázek](../images/wearos/easyfire02.png)

Rychle několikrát klepněte na **Číslo sestavení** (nebo **Verze softwaru**), dokud se nezobrazí zpráva, že jste nyní vývojář.

![obrázek](../images/wearos/easyfire03.png)

Vraťte se do **Nastavení** > **Systém**: nyní se zobrazí nová nabídka **Možnosti vývojáře**.

V **Možnostech vývojáře** zapněte **Ladění ADB** a **Bezdrátové ladění** a potvrďte dotazy. Bezdrátové ladění pak zobrazí **IP adresu a port** hodinek, například: **192.168.1.214** : 5555. Potřebujete jen IP adresu (zde **192.168.1.214**), ne číslo portu za dvojtečkou. IP adresa se může změnit, například pokaždé, když přejdete na nový telefon pro AAPS.

![obrázek](../images/wearos/easyfire04.png)

KROK 3) Zadejte IP adresu, _např._ **192.168.1.214**, do aplikace Easy Fire tools v telefonu (otevřete nabídku vlevo (☰), nastavení a zadejte IP adresu).

![obrázek](../images/wearos/easyfire05.png)

Pak klepněte na ikonu zásuvky vpravo nahoře. Po připojení se zbarví zeleně.

![obrázek](../images/wearos/easyfire06.png)


KROK 4) Podle návodu [zde](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) ručně nainstalujte (tj. přeneste) aaps-wear.apk do chytrých hodinek pomocí Easy Fire tools


![obrázek](../images/wearos/easyfire07.png)


(BuildingAapsWearOs-WearOS5-TShoot)=

### Použití terminálu
Připojte chytré hodinky a počítač ke stejné síti Wi-Fi.

- ADB si stáhněte zde: https://developer.android.com/tools/releases/platform-tools
- Otevřete terminál.
- Ve Windows vytvořte na disku `C:` novou složku s názvem `adb`. Otevřete soubor `platform-tools-latest-windows.zip`, který jste stáhli výše. Zkopírujte všechny soubory ze složky `platform-tools` do `C:\adb` a otevřete tuto složku v příkazovém řádku (klikněte pravým tlačítkem a zvolte Open in Terminal / Otevřít v terminálu). Zadejte níže uvedený příkaz, kterým nastavíte cestu ke složce s ADB: `setx PATH "%PATH%;C:\adb"`
- Na Macu můžete místo ruční instalace použít homebrew: `brew install android-platform-tools`

Na hodinkách:
- Přejděte do Nastavení → O hodinkách → **Informace o softwaru**
- Klepněte 7krát na Verze softwaru, dokud se nezobrazí, že je zapnutý režim vývojáře.
- Přejděte do Nastavení → Možnosti vývojáře. Zapněte **Ladění ADB**
- Přejděte do Nastavení → Možnosti vývojáře → Bezdrátové ladění → **Spárovat nové zařízení**

Zobrazí se párovací kód Wi-Fi a IP adresa s portem:

![Obrazovka hodinek s párovacím kódem Wi-Fi, IP adresou a portem](../images/wearos/ADB03.png)

- V terminálu: `adb pair ipaddress:port` Např. `adb pair 10.10.1.125:36299`
- Budete požádáni o párovací kód. Zadejte ho.
- Uvidíte odpověď:<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- V terminálu napište: <br>`adb devices`.<br> Měli byste vidět něco jako:<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- Now go to the folder on your computer where the Wear apk is and type<br> `adb install wear-full.apk` <br>with wear-full.apk replaced by the name of your apk file.
- Uvidíte:<br> `Performing Streamed Install`<br> `Success`


(wear-os-5-troubleshooting)=

### Obecná doporučení pro řešení problémů s Wear OS 5

- Nepoužívejte sdílení připojení přes Wi-Fi (tethering). To nebude fungovat.
- Ladění ADB nemusíte zapínat v telefonu (jen v hodinkách). Vypněte ladění ADB v telefonu.
- Ujistěte se, že se připojujete k místní síti, ve které se telefon a hodinky navzájem vidí (nepřipojujte se k síti Wi-Fi pro hosty).
- Ujistěte se, že hodinky i telefon jsou ve stejné síti a připojené ke stejnému zařízení Wi-Fi. Problémy mohou způsobovat hlavně opakovače Wi-Fi nebo přístupové body.
- Buďte blízko hlavního routeru a pak restartujte telefon i hodinky.

**Párování:**

- Hodinky: Bezdrátové ladění: poznamenejte si IP adresu.
- Wear Installer: Enter the IP in the Wear Installer app.
- Vyberte Spárovat nové zařízení a poznamenejte si zobrazený párovací kód a číslo portu.
- Wear Installer: zadejte párovací kód + mezeru + číslo portu.
- Wear Installer by měl oznámit, že párování proběhlo úspěšně. Pokud ne, ukončete Wear Installer a zkuste to znovu.

Po spárování byste měli být schopni nainstalovat apk AAPS Wear:

- Ukončete/zavřete Wear Installer a znovu ho spusťte.
- V bezdrátovém ladění si poznamenejte IP adresu a číslo portu a zkontrolujte/zadejte je ve Wear Installer.
- Poznámka: číslo portu je jiné než to, které se použilo pro párování!

## Nastavení propojení mezi hodinkami a telefonem z **AAPS**

Posledním krokem je nastavit **AAPS** v telefonu tak, aby spolupracoval s **Wear.apk** v hodinkách. K tomu povolte plugin Wear:

* Otevřete aplikaci **AAPS** v telefonu

* Otevřete **nabídku** (☰) v levém horním rohu a přejděte do **Konfigurace** > **Komunikace**

* Zaškrtněte políčko **Wear**

![Konfigurace > Komunikace s povoleným Wear](../images/v4/Configuration/configuration_communication_wear.png)

Chcete-li z hodinek dávat bolus nebo provádět jiné akce, zapněte také **Ovládání přes Wear** v [Nastavení > Wear](#preferences-wear).

To change to a different **AAPS**  watchface, long-press the watchface on the home screen of the watch and tap **Customize**. Přejetím vpravo si postupně zobrazíte všechny ciferníky **AAPS**.

Pokud byl soubor **AAPS** Wear.apk úspěšně nainstalován do chytrých hodinek, bude to vypadat takto:


![Plugin Wear s připojenými hodinkami Galaxy Watch a aplikace AAPS na hodinkách](../images/wearos/wear_apk_installed.png)


U některých chytrých hodinek, například Samsung Galaxy, musí být v Pokročilých funkcích Samsung Galaxy **zapnuté** „Vzdálené připojení“, abyste mohli **Wear.apk** a **AAPS** používat na dálku přes Wi-Fi.

![Galaxy Wearable, Pokročilé funkce, Vzdálené připojení zapnuté](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### Řešení problémů s komunikací mezi **AAPS** na hodinkách a **AAPS** v telefonu

1.  Pokud se Easy Fire Tools nepřipojí nebo se zobrazí „authorisation failed“ (autorizace selhala) > zkontrolujte, zda je IP adresa zadaná správně.
2.  Zkontrolujte, že jsou chytré hodinky připojené k internetu a ne pouze k telefonu prostřednictvím Bluetooth.
3.  Zkontrolujte, že jsou telefon s **AAPS** a chytré hodinky spárované nebo propojené v aplikaci Samsung.
4.  Může také pomoci tvrdý restart telefonu a chytrých hodinek (tedy telefon vypnout a znovu zapnout)
5.  Pokud se vám podařilo stáhnout Wear.apk do telefonu, ale nedostáváte žádná data glykémie, _zkontrolujte_, zda jste do hodinek nainstalovali správný apk **AAPS** Wear: aplikace pro hodinky ze sestavení v prohlížeči je soubor `aaps-wear-….apk`, viz [Sestavení aplikace AAPS pro hodinky Wear OS](../WearOS/BuildingAapsWearOS.md). Pokud je soubor, který jste nainstalovali, některý z těchto: a) apk Wear pro **AAPSClient** (zatímco v telefonu běží **AAPS**); b) soubor `.aab`; nebo c) soubor se slovem ‚debug‘ v názvu, nevybrali jste při sestavení správný apk pro Wear OS.
6.  Zkontrolujte, že váš router od sebe neizoluje jednotlivá zařízení.

Další tipy pro řešení problémů naleznete [zde](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Přepnutí na ciferník AAPS na hodinkách s Wear OS

Ve standardním sestavení AAPS Wear OS APK je k dispozici několik ciferníků. Budou dostupné, jakmile do hodinek nainstalujete AAPS Wear APK. Jeden z nich vyberete takto:

1. Na hodinkách (předpokládáme Wear OS) dlouze stiskněte aktuální ciferník, tím otevřete výběr ciferníků. Posuňte se úplně doprava, až uvidíte tlačítko „Přidat ciferník“ (Add Watch Face), a vyberte ho

![Výběr ciferníků s tlačítkem Přidat ciferník](../images/wearos/watchface_add.png)

2. Projděte seznam, až najdete „AAPS (vlastní)“ (podle hodinek jsou ciferníky nainstalovaných aplikací uvedené v části „Staženo“ nebo seskupené podle aplikace), a klepnutím doprostřed obrázku ho přidejte do seznamu svých aktuálních ciferníků. Nevadí, jak ciferník „AAPS (vlastní)“ teď vypadá, vzhled si vyberete v dalším kroku.

![Seznam ciferníků AAPS s AAPS (vlastní)](../images/wearos/watchface_list_aaps.png)

3. Nyní v telefonu otevřete AAPS a otevřete plugin Wear: **Konfigurace** > **Komunikace** > **Wear** > **Otevřít plugin** (pokud plugin **Wear** není povolený, nejprve ho zaškrtněte).

![Plugin Wear s kartou Vlastní ciferník](../images/wearos/wear_plugin_custom_watchface.png)

4. Klepněte na tlačítko „Nahrát ciferník“ a vyberte ciferník, který se vám líbí

![Seznam Vyberte vlastní ciferník](../images/wearos/select_custom_watchface.png)

5. Podívejte se na hodinky: ciferník „AAPS (vlastní)“ by teď měl zobrazovat vzhled, který jste vybrali. Obnovení může trvat několik sekund. Obrazovka **Wear** v telefonu teď ukazuje název nahraného ciferníku a jeho náhled. **Informace o ciferníku** zobrazí jeho podrobnosti a pole, která obsahuje, a **Další ciferníky** otevře [stránku pro vlastní ciferníky](../ExchangeSiteCustomWatchfaces/index.md), kde si můžete stáhnout další vlastní ciferníky. Nyní můžete upravit komplikace a další prvky: dlouze stiskněte ciferník a pak na obrázku ciferníku stiskněte tlačítko „Přizpůsobit“.

```{admonition} Complications on a custom watchface
:class: note
Vlastní ciferníky vytvořené ve verzi 3.0 nebo novější formátu vlastních ciferníků mohou obsahovat až pět pozic pro komplikace, jejichž umístění a velikost určuje ciferník (**Rozvržení komplikace**). Na hodinkách dlouze stiskněte ciferník, klepněte na **Přizpůsobit** a klepnutím na **Komplikace 1** až **Komplikace 5** vyberte zdroj dat zobrazený v jednotlivých pozicích. Stejné řádky najdete v aplikaci AAPS na hodinkách v **Nastavení** > **AAPS (vlastní)**; klepnutím na některý z nich se otevře stejný výběr. **Priorita typu komplikace** určuje, zda pozice dává přednost hodnotě nebo ukazateli, textu, nebo ikoně, když zdroj dat nabízí více možností. Změněná priorita platí až při dalším výběru zdroje dat pro danou pozici.

Tyto pozice fungují jen na hodinkách s **Wear OS 5 nebo starším**, kde vlastní ciferník běží jako skutečný ciferník. Na **Wear OS 6 a novějších** se vlastní ciferník zobrazuje jako obrázek bez pozic pro komplikace a kroky 1 a 2 výše nejsou potřeba: ujistěte se, že je v pluginu **Wear** v telefonu v části **Ciferník nainstalován na hodinkách** vybraný **Vlastní ciferník** (viz [ciferník, který AAPS nainstaluje](#wearos-aaps-v4-watchface)).
```

## Ciferník AAPSv2 – Popis

![Popis ciferníku AAPSv2](../images/Watchface_Legend.png)

A - čas od posledního spuštění smyčky

B - hodnota glykémie

C - minuty od posledního čtení hodnoty glykémie

D - změna oproti poslední hodnotě glykémie (v mmol nebo mg/dl)

E - průměrná změna hodnoty glykémie za posledních 15 minut

F - stav baterie telefonu

G - hodnota bazální dávky (zobrazená v U/h, pokud je zvolena standardní hodnota, nebo v %, pokud je aktivní dočasný bazál)

H - BGI (blood glucose impact) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - sacharidy (aktivní sacharidy | eSacharidy v budoucnosti)

J - aktivní inzulín (z bolusu | z bazálu)
