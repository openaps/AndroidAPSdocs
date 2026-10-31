# Nastavenie AAPS na hodinkách s Wear OS

Pokyny nižšie platia pre apk **AAPS Wear**, ktorý si musíte zostaviť. Ak ste ho ešte nezostavili, pozrite návod [tu](../WearOS/BuildingAapsWearOS.md). Pri zostavovaní použite rovnaký súbor úložiska kľúčov, aký ste použili pre apk **AAPS** v telefóne.

Niektoré informácie môžete použiť aj pre apk **Wear** aplikácií **AAPSClient** a **PumpControl**. Each **Wear** app will communicate with its matching phone app. Napríklad: aplikáciu **AAPSClient Wear** môžete použiť na zobrazenie dát z **AAPSClient**, nie dát z **AAPS**. Ak je vedľa seba nainštalovaných viac variantov klienta (**AAPSClient**, **AAPSClient2**, **AAPSClient3**), dlaždice každého z nich majú malú hlavičku vo farbe daného variantu, aby ste ich pri prechádzaní rozlíšili.

## Verzie Wear OS a kompatibilita

(wearos-watchface-changes)=

### Zmeny ciferníkov vo Wear OS (vplyv na ciferníky AAPS)

```{admonition} Why newer Wear OS watches break AAPS watchfaces
:class: warning

V júni 2025 Google [oznámil zmeny](https://android-developers.googleblog.com/2025/06/upcoming-changes-to-wear-os-watch-faces.html), ktoré postupne ukončia starý engine ciferníkov (AndroidX / Wearable Support Library, skrátene „WSL“) v prospech novšieho deklaratívneho formátu **Watch Face Format**. Vlastné ciferníky **AAPS** sú postavené na starom engine, takže čím novšia verzia Wear OS, tým je pravdepodobnejšie, že ciferník AAPS bude fungovať zle alebo prestane fungovať.

Týka sa to konkrétne **ciferníkov** – **komplikácie** AAPS, dlaždice a funkcie vzdialeného ovládania nie sú ovplyvnené. Preto môže **aktualizácia firmvéru/systému v hodinkách s Wear OS pokaziť ciferníky AAPS**, a hodinky sa potom nedajú vrátiť na staršiu verziu Wear OS. Ak váš ciferník AAPS momentálne funguje, **vypnite automatické aktualizácie hodiniek**.
```

Tabuľka nižšie zhŕňa, ako zmena od Googlu ovplyvňuje ciferníky AAPS (na starom engine) podľa verzie Wear OS:

| Verzia Wear OS          | Základná verzia Androidu | Úroveň API | Vplyv na (staré) ciferníky AAPS                                                                                                                                                                         |
| ----------------------- | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wear OS 6               | Android 16               | 36         | **Staré ciferníky už nie sú dostupné** – AAPS namiesto nich nainštaluje [ciferník vo formáte Watch Face Format](#wearos-aaps-v4-watchface): váš vlastný ciferník alebo ciferník s komplikáciami AAPS V4 |
| Wear OS 5               | Android 14               | 34         | **Vážny** – aktívny (interaktívny) režim často zlyháva, komplikácie zamŕzajú, animácie sa zastavia                                                                                                      |
| Wear OS 4               | Android 13               | 33         | **Stredný** – obmedzovanie výkonu, vynechané aktualizácie, čiastočné zlyhania                                                                                                                           |
| Wear OS 3.0 / 3.2 / 3.5 | Android 11               | 30         | **Nízky** – starý engine je stále podporovaný                                                                                                                                                           |

Ak vaše hodinky používajú verziu, v ktorej ciferníky AAPS nie sú spoľahlivé, môžete namiesto toho zobrazovať dáta AAPS cez **komplikácie** na kompatibilnom ciferníku alebo použiť [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) s komplikáciou, do ktorého posiela dáta plugin [Externé sprievodné (Companion) aplikácie](#external-companion-apps) v **AAPS**. Na **Wear OS 6 a novších** AAPS nainštaluje náhradný ciferník vytvorený v novom formáte – pozrite nižšie.

(wearos-aaps-v4-watchface)=

### Wear OS 6 a novšie – ciferník, ktorý AAPS nainštaluje

Hodinky s **Wear OS 6 alebo novším** nedokážu spustiť klasické ciferníky AAPS ako ciferníky. Pre tieto hodinky prináša aplikácia AAPS v hodinkách dva ciferníky vytvorené v novom formáte **Watch Face Format** od Googlu. Wear OS dovolí aplikácii nainštalovať iba **jeden** ciferník, preto si vyberiete, ktorý z nich bude v hodinkách:

- **Vlastný ciferník** (predvolený): zobrazuje vlastný ciferník, ktorý ste z telefónu načítali pomocou **Načítať ciferník** (pozrite [Prechod na ciferník AAPS](#WearOS_changing-to-AAPS-watchface)). Hodinky vykreslia váš dizajn ako obrázok, takže funguje každý existujúci vlastný ciferník. Miesta pre komplikácie, ktoré vlastný ciferník môže definovať, na tomto obrázku **nie sú dostupné**, pretože Wear OS posiela dáta komplikácií iba skutočnému ciferníku. Dlhým podržaním ciferníka sa dostanete k jeho jedinému nastaveniu: či vždy zapnutý displej zobrazuje obyčajné hodiny alebo váš vlastný dizajn, stlmený.
- **Ciferník s komplikáciami** (ciferník **AAPS V4**): jeho **sedem miest pre komplikácie** je **vopred nastavených s dátami AAPS**: hodnota glykémie, IOB, COB, [komplikácia Graf glykémie](#Watchfaces-complications), bazálna dávka / dočasný cieľ a ikona **Režim prevádzky** na ľavom hornom mieste (ťuknutím na ňu zmeníte režim okruhu z hodiniek). Ťuknutím na čas hore otvoríte aplikáciu budíka v hodinkách. V editore ciferníka môžete zmeniť, čo ktoré miesto zobrazuje.

Vyberáte v telefóne: otvorte plugin **Wear** a v časti **Ciferník nainštalovaný v hodinkách** vyberte jeden z dvoch. Táto karta sa zobrazuje, iba kým sú pripojené hodinky s Wear OS 6 alebo novším. **AAPS** vás požiada o potvrdenie, pretože hodinky ciferník okamžite vymenia. Pri prechode z **Ciferníka s komplikáciami** na iný sa komplikácie, ktoré ste zmenili v editore ciferníka, vrátia na predvolené a potvrdenie vás na to upozorní. Kým je vybraný **Ciferník s komplikáciami**, tlačidlá vlastného ciferníka sú skryté a namiesto nich sa zobrazuje náhľad ciferníka. Ak načítate vlastný ciferník, kým je vybraný **Ciferník s komplikáciami**, **AAPS** vám pripomenie, aby ste prepli na **Vlastný ciferník**, ak ho chcete vidieť v hodinkách.

- Vybraný ciferník sa pri prvom spustení aplikácie AAPS v takých hodinkách **automaticky nainštaluje a aktivuje** a **automaticky sa aktualizuje** spolu s aplikáciou v hodinkách.
- Ak ste ciferník odstránili, v dolnej časti **hlavnej ponuky** AAPS v hodinkách sa zobrazí položka **Nainštalovať ciferník** – ťuknutím naň ho nainštalujete znova.

Kým sú pripojené hodinky s Wear OS 5 alebo starším, karta **Ciferník nainštalovaný v hodinkách** sa vôbec nezobrazuje (mechanizmus, na ktorom stojí, vyžaduje Wear OS 6); klasické ciferníky tam fungujú ako predtým.

(wearos-complications-watchface-setup)=

### Ciferník s komplikáciami – odporúčané nastavenie

**Ciferník s komplikáciami** má sedem miest pre komplikácie. Dlho podržte ciferník, ťuknite na **Prispôsobiť** (Customize) a pre každé miesto vyberte zdroj údajov. Miesta sú očíslované ako v editore ciferníka: **1** vľavo, **2** v strede, **3** vpravo, **4** graf, **5** dole, **6** vľavo hore a **7** vpravo hore.

| Predvolené nastavenie                                                                                    | Alternatívne nastavenie                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![Ciferník s komplikáciami, predvolené nastavenie](../images/wearos/complications_watchface_default.png) | ![Ciferník s komplikáciami, alternatívne nastavenie](../images/wearos/complications_watchface_alternative.png) |

| Miesto | Poloha      | Štandardný                                                                         | Alternatívne                                      |
| ------ | ----------- | ---------------------------------------------------------------------------------- | ------------------------------------------------- |
| 1      | Vľavo       | Ikona IOB                                                                          | COB & IOB                                         |
| 2      | V strede    | Glykémia                                                                           | Glykémia                                          |
| 3      | Vpravo      | Ikona COB                                                                          | Bazál & Cieľ                                      |
| 4      | Graf        | Graf glykémie                                                                      | Graf glykémie                                     |
| 5      | Dole        | Bazál & Cieľ                                                                       | Batéria telefónu/uploadera                        |
| 6      | Vľavo hore  | Režim prevádzky                                                                    | Režim prevádzky                                   |
| 7      | Vpravo hore | Batéria telefónu/uploadera alebo skratka aplikácie na **AAPS Potvrdenie výstrahy** | Skratka aplikácie na **AAPS Potvrdenie výstrahy** |

Skratku **AAPS Potvrdenie výstrahy** vyberiete z vlastných komplikácií hodiniek **Skratka aplikácie** (App shortcut). Ťuknutím na ňu potvrdíte (odložíte) alarm, ktorý práve zvoní v telefóne.

```{tip}
Zapnite v hodinkách **Vždy zapnutý displej** (Always-on display) (**Nastavenia** > **Displej**). Ciferník potom zobrazuje vašu glykémiu aj vtedy, keď máte ruku dole, namiesto prázdnej obrazovky alebo obyčajných hodín.
```

```{admonition} No complication data while the watch is locked
:class: note
Ak je v **Nastavenia** > **Zabezpečenie a ochrana súkromia** (Security and privacy) nastavený **Typ zámky** (Lock type), hodinky skrývajú dáta komplikácií, kým sú zamknuté, a ciferník zobrazuje prázdne miesta, kým ich neodomknete. Ak chcete, aby dáta zostali viditeľné, vypnite v tej istej ponuke **Skryť informácie** (Hide information).
```

### Wear OS 3

Nainštalujte apk **AAPS Wear** pomocou [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (opísané nižšie) alebo ADB.  
Funkcie **AAPS Wear** nie sú nijako obmedzené.

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 a Wear OS 5

Príklad: Galaxy Watch 4, 5, 6, 7 a Ultra alebo Pixel Watch, ktoré ešte **neboli** aktualizované na Wear OS 6. Verziu skontrolujete v **Nastavenia** > **Informácie o hodinkách** > **Softvér**.

Nainštalujte apk **AAPS Wear** pomocou [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) (pri Wear OS 5 postupujte podľa [tohto videa](https://www.youtube.com/watch?v=yef_qGvcCnk)). Všetky funkcie **AAPS Wear** fungujú, ale klasické ciferníky **AAPS** sú obmedzené, ako je opísané v tabuľke vyššie: na Wear OS 4 so zníženým výkonom, na Wear OS 5 často zlyhávajú.

```{admonition} Wear OS 5
:class: warning
Na Wear OS 5 sa ciferník AAPS musí vybrať pomocou Wear Installer 2 hneď po inštalácii aplikácie Wear: inštalátor na konci inštalácie ponúkne ciferník **AAPS (vlastný)**. Ak omylom prepnete na iný ciferník, zopakujte inštaláciu. Zmena nastavení ciferníka (Tmavý, oddeľovač atď.) nemusí byť možná.

Ak vám klasický ciferník momentálne funguje, **vypnite automatické aktualizácie hodiniek**: najbližšia aktualizácia firmvéru ho pravdepodobne pokazí. Ak napriek tomu aktualizujete na Wear OS 6, prečítajte si časť vyššie: **AAPS** potom nainštaluje vlastný ciferník v novom formáte.
```

Ak je ciferník príliš nespoľahlivý, zvážte namiesto neho [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) s komplikáciou. Vyžaduje, aby bol v **AAPS** zapnutý plugin [Externé sprievodné (Companion) aplikácie](#external-companion-apps).

### Wear OS 6 a novšie

Príklad: Galaxy Watch 4 a novšie s One UI 8 Watch, Pixel Watch po aktualizácii z roku 2025. Väčšina hodiniek Galaxy a Pixel už túto aktualizáciu dostala.

Nainštalujte apk **AAPS Wear** pomocou [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV). Klasické ciferníky nie sú dostupné; **AAPS** automaticky nainštaluje ciferník vybraný v telefóne, pozrite [ciferník, ktorý AAPS nainštaluje](#wearos-aaps-v4-watchface). Funkcie **AAPS Wear** nie sú nijako obmedzené.

## How to set up a Samsung Galaxy Watch 4 smartwatch with **AAPS**

Táto časť predpokladá, že s inteligentnými hodinkami začínate úplne od začiatku. Dáva vám základný prehľad o obľúbených hodinkách **Galaxy Watch 4** a potom podrobný návod, ako nastaviť **AAPS** na hodinkách.

_Tento návod bol napísaný pre hodinky Galaxy Watch s Wear OS 3._ Na Wear OS 4 a novších hodinky pri pripájaní telefónu alebo počítača cez ADB vyžadujú **párovací kód**. Wear Installer 2 aj postup v termináli [nižšie](#BuildingAapsWearOs-WearOS5-TShoot) ho podporujú.

Tu sú návody na základné nastavenie hodiniek [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) a [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Základné zoznámenie s inteligentnými hodinkami

Po základnom nastavení hodiniek podľa videa vyššie otvorte v telefóne Obchod Play a stiahnite si tieto aplikácie: „Galaxy Wearable“, „Samsung“ a buď „Easy Fire tools“, alebo „Wear Installer 2“.

Na YouTube je veľa videí od tretích strán, ktoré vám pomôžu zoznámiť sa s novými inteligentnými hodinkami, napríklad:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

Aplikácia „Galaxy Wearable“ obsahuje aj časť s návodom na použitie. V telefóne otvorte Galaxy Wearable, vyhľadajte hodinky a skúste ich spárovať s telefónom. Podľa vašej verzie vás to môže vyzvať, aby ste si z Obchodu Play nainštalovali ďalšiu aplikáciu „galaxy watch 4 plugin“ (sťahovanie chvíľu trvá). Nainštalujte ju do telefónu a potom v aplikácii Wearable skúste hodinky a telefón spárovať znova. Prejdite sériou ponúk a zaškrtnite rôzne nastavenia.

## Nastavenie účtu Samsung

E-mailový účet, ktorý použijete na nastavenie účtu Samsung, musí mať dátum narodenia, podľa ktorého má používateľ aspoň 13 rokov. Inak sa povolenia Samsung schvaľujú veľmi ťažko. Ak ste dieťaťu mladšiemu ako 13 rokov vytvorili účet Gmail a používate túto e-mailovú adresu, nemôžete ho jednoducho zmeniť na účet dospelého. One way around this is to modify the current date-of-birth to make the current age 12 years and 364 days old. Na druhý deň sa účet zmení na účet dospelého a môžete pokračovať v nastavení účtu Samsung.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Prenos aplikácie **AAPS** Wear do telefónu s **AAPS**

Súbor Wear.apk z Android Studia môžete do telefónu preniesť buď:

a) pomocou kábla USB: súbor apk aplikácie **AAPS** Wear skopírujte do telefónu a potom ho „sideloadingom“ nainštalujte do hodiniek. Wear.apk preneste cez USB do priečinka Stiahnuté súbory (Downloads) v telefóne; alebo

b) vystrihnite Wear.apk z Android Studia a vložte ho na svoj Disk Google.


Na inštaláciu AAPS do hodiniek („sideloading“) môžete použiť: 1) Wear Installer 2 2) Easy Fire tools 3) Android Debug Bridge (ADB) Odporúčame Wear Installer 2, pretože pokyny a postup vo videu sú veľmi jasné a dobre vysvetlené. Ak vám Wear Installer 2 nefunguje, skúste Easy Fire Tools alebo ADB, oboje je opísané nižšie.

### Inštalácia **AAPS** Wear z telefónu do hodiniek pomocou Wear Installer 2

 ![Ikona aplikácie Wear Installer 2](../images/wearos/wear_installer2_icon.png)

Aplikáciu Wear Installer 2, ktorú vyvinul [Malcolm Bryant](https://www.youtube.com/@Freepoc), si môžete stiahnuť z Google Play do telefónu a použiť ju na inštaláciu aplikácie AAPS Wear do hodiniek („sideloading“). Aplikácia obsahuje praktické [video.](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) o tom, ako na sideloading.

```{tip}
Pri hodinkách s Wear OS 5 postupujte podľa [tohto videa](https://www.youtube.com/watch?v=yef_qGvcCnk).
Tipy na riešenie problémov nájdete [nižšie](#BuildingAapsWearOs-WearOS5-TShoot).
```

Video obsahuje všetky potrebné podrobnosti (najlepšie je otvoriť ho na inom zariadení, aby ste ho mohli sledovať počas nastavovania telefónu).

Ako sa spomína vo videu, po dokončení vypnite v hodinkách ladenie ADB, aby sa batéria hodiniek zbytočne nevybíjala.

Prípadne môžete (ale nie pre Wear OS 5):

### Inštalácia **AAPS** Wear do hodiniek pomocou Easy Fire tools

1) Stiahnite si do telefónu _[Easy Fire Tools](https://play.google.com/store/apps/details?id=de.agondev.easyfiretools&hl=en)_ z Obchodu Play

![obrázok](../images/wearos/easyfire01.png)

2) Zapnite si v hodinkách režim vývojára (keď sú nastavené a pripojené k telefónu):

Prejdite do **Nastavenia** > **Systém** > **Informácie** > **Verzie** (názvy ponúk sa líšia podľa značky hodiniek – na niektorých hodinkách je to **Informácie o hodinkách** > **Informácie o softvéri** > **Verzia softvéru**).

![obrázok](../images/wearos/easyfire02.png)

Rýchlo niekoľkokrát ťuknite na **Číslo zostavy** (alebo **Verzia softvéru**), kým sa nezobrazí správa, že ste teraz vývojár.

![obrázok](../images/wearos/easyfire03.png)

Vráťte sa do **Nastavenia** > **Systém**: teraz sa zobrazí nová ponuka **Možnosti vývojára**.

V **Možnosti vývojára** zapnite **Ladenie ADB** a **Bezdrôtové ladenie** a potvrďte výzvy. Bezdrôtové ladenie potom zobrazí **IP adresu a port** hodiniek, napríklad: **192.168.1.214** : 5555. Potrebujete iba IP adresu (tu **192.168.1.214**), nie číslo portu za dvojbodkou. IP adresa sa môže zmeniť, napríklad zakaždým, keď pre AAPS prejdete na nový telefón.

![obrázok](../images/wearos/easyfire04.png)

KROK 3) Zadajte IP adresu, _napr._ **192.168.1.214**, do Easy Fire tools v telefóne (otvorte ponuku vľavo, nastavenia a zadajte IP adresu).

![obrázok](../images/wearos/easyfire05.png)

Potom kliknite na ikonu zásuvky vpravo hore. Po pripojení sa sfarbí na zeleno.

![obrázok](../images/wearos/easyfire06.png)


KROK 4) Postupujte podľa pokynov [tu](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) a nainštalujte (teda preneste) aaps-wear.apk do inteligentných hodiniek pomocou Easy Fire tools


![obrázok](../images/wearos/easyfire07.png)


(BuildingAapsWearOs-WearOS5-TShoot)=

### Použitie terminálu
Pripojte inteligentné hodinky a počítač k rovnakej sieti Wi-Fi.

- ADB na inštaláciu stiahnete z: https://developer.android.com/tools/releases/platform-tools
- Otvorte terminál.
- Vo Windows vytvorte na disku `C:` nový priečinok s názvom `adb`. Otvorte súbor `platform-tools-latest-windows.zip`, ktorý ste stiahli vyššie. Skopírujte všetky súbory z `platform-tools` do `C:\adb` a otvorte tento priečinok v príkazovom riadku (pravé tlačidlo myši a Open in Terminal). Zadajte príkaz nižšie, ktorý nastaví cestu k priečinku s ADB: `setx PATH "%PATH%;C:\adb"`
- Na Macu môžete namiesto ručnej inštalácie použiť homebrew: `brew install android-platform-tools`

Na hodinkách:
- Prejdite do Nastavenia → Informácie o hodinkách → **Informácie o softvéri**
- Ťuknite 7-krát na Verzia softvéru, kým sa nezobrazí, že režim vývojára je zapnutý.
- Prejdite do Nastavenia → Možnosti vývojára. Zapnite **Ladenie ADB**
- Prejdite do Nastavenia → Možnosti vývojára → Bezdrôtové ladenie → **Spárovať nové zariadenie**

Zobrazí sa párovací kód Wi-Fi, IP adresa a port:

![Obrazovka hodiniek s párovacím kódom Wi-Fi, IP adresou a portom](../images/wearos/ADB03.png)

- V termináli: `adb pair ipaddress:port` Napr. `adb pair 10.10.1.125:36299`
- Budete vyzvaní na zadanie párovacieho kódu. Zadajte ho.
- Uvidíte odpoveď:<br> `Successfully paired to 10.10.1.125:36299 [guid=adb-RXXXW20LMKJY-eh5zBj]`<br>
- V termináli napíšte: <br>`adb devices`.<br> Mali by ste vidieť niečo takéto:<br> `List of devices attached`<br> `10.10.1.125:36299  offline`<br> `adb-RFAW20LMKJY-eh5zBj._adb-tls-connect._tcp   device`<br>

- Now go to the folder on your computer where the Wear apk is and type<br> `adb install wear-full.apk` <br>with wear-full.apk replaced by the name of your apk file.
- Uvidíte:<br> `Performing Streamed Install`<br> `Success`


(wear-os-5-troubleshooting)=

### Všeobecné odporúčania na riešenie problémov s Wear OS 5

- Nepoužívajte zdieľanie pripojenia cez Wi-Fi (tethering). To nebude fungovať.
- Ladenie adb nemusíte zapínať v telefóne (iba v hodinkách). Vypnite ladenie adb v telefóne.
- Uistite sa, že sa pripájate k svojej lokálnej sieti, v ktorej sa telefón a hodinky navzájom vidia (na pripojenie nepoužívajte sieť Wi-Fi pre hostí).
- Uistite sa, že hodinky aj telefón sú v rovnakej sieti a na rovnakom zariadení Wi-Fi. Problémy môžu spôsobovať najmä opakovače Wi-Fi alebo prístupové body.
- Buďte blízko hlavného routera a potom reštartujte telefón aj hodinky.

**Párovanie:**

- Hodinky: Bezdrôtové ladenie: poznačte si IP adresu.
- Wear Installer: Enter the IP in the Wear Installer app.
- Vyberte Pair new (spárovať nové zariadenie), poznačte si zobrazený párovací kód a číslo portu.
- Wear Installer: zadajte párovací kód + medzeru + číslo portu.
- Wear Installer by mal oznámiť, že párovanie bolo úspešné. Ak nie, ukončite Wear Installer a skúste to znova.

Po spárovaní by ste mali vedieť nainštalovať apk AAPS Wear:

- Ukončite/zatvorte Wear Installer a potom ho znova spustite.
- V bezdrôtovom ladení si poznačte IP adresu a číslo portu a skontrolujte/zadajte IP adresu a číslo portu vo Wear Installer.
- Poznámka: číslo portu je iné ako to, ktoré sa použilo pri párovaní!

## Nastavenie spojenia medzi hodinkami a telefónom v **AAPS**

Posledný krok je nastaviť **AAPS** v telefóne tak, aby komunikoval so súborom **Wear.apk** v hodinkách. Na to zapnite plugin Wear:

* V telefóne otvorte aplikáciu **AAPS**

* Otvorte **ponuku** (☰) v ľavom hornom rohu a prejdite do **Konfigurácia** > **Komunikácia**

* Zaškrtnite políčko **Wear**

![Konfigurácia > Komunikácia so zapnutým Wear](../images/v4/Configuration/configuration_communication_wear.png)

Ak chcete z hodiniek podávať bolus alebo vykonávať iné akcie, zapnite aj **Ovládanie cez Wear** v [Nastavenia > Wear](#preferences-wear).

Ak chcete prejsť na iný ciferník **AAPS**, stlačte a podržte domovskú obrazovku hodiniek a zobrazí sa „prispôsobiť“. Potom potiahnite doprava, kým sa nedostanete ku všetkým ciferníkom **AAPS**.

Ak sa súbor **AAPS** Wear.apk podarilo do inteligentných hodiniek úspešne nainštalovať, bude to vyzerať takto:


![Plugin Wear zobrazuje pripojené hodinky Galaxy Watch a aplikáciu AAPS v hodinkách](../images/wearos/wear_apk_installed.png)


Pri niektorých inteligentných hodinkách, napríklad Samsung Galaxy, musí byť v rozšírených funkciách Samsung Galaxy **zapnuté** „Vzdialené pripojenie“ (Remote Connection), aby ste mohli **Wear.apk** & **AAPS** používať na diaľku cez Wi-Fi.

![Galaxy Wearable, Rozšírené funkcie, Vzdialené pripojenie zapnuté](../images/wearos/galaxy_wearable_remote_connection.png)

(wear-os-watch-phone-communication)=

### Riešenie problémov s komunikáciou medzi hodinkami **AAPS** a telefónom **AAPS**

1.  Ak sa Easy Fire tools nepripojí alebo dostávate hlásenie „authorisation failed“ (autorizácia zlyhala) > skontrolujte, či je IP adresa zadaná správne.
2.  Skontrolujte, či sú inteligentné hodinky pripojené na internet (nie iba k telefónu cez Bluetooth).
3.  Skontrolujte, či sú telefón s **AAPS** a inteligentné hodinky v aplikácii Samsung spárované alebo prepojené.
4.  Pomôcť môže aj úplný reštart telefónu a inteligentných hodiniek (teda telefón vypnúť a znova zapnúť)
5.  Ak sa vám podarilo stiahnuť Wear.apk do telefónu, ale nedostávate žiadne dáta glykémie, _skontrolujte_, či ste do hodiniek nainštalovali správny apk **AAPS** Wear: aplikácia pre hodinky zo zostavenia v prehliadači je súbor `aaps-wear-….apk`, pozrite [Zostavenie aplikácie AAPS pre Wear OS](../WearOS/BuildingAapsWearOS.md). Ak je súbor, ktorý ste nainštalovali, niektorý z týchto: a) apk **AAPSClient** Wear (kým telefón používa **AAPS**); b) súbor `.aab`; alebo c) súbor so slovom „debug“ v názve, pri zostavení ste nevybrali správny apk pre Wear OS.
6.  Skontrolujte, či váš router zariadenia od seba neizoluje.

Ďalšie tipy na riešenie problémov nájdete [tu](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Prechod na ciferník AAPS v hodinkách s Wear OS

V štandardnom zostavení APK aplikácie AAPS pre Wear OS je k dispozícii niekoľko ciferníkov. Budú dostupné, keď si do hodiniek nainštalujete APK aplikácie AAPS Wear. Ciferník vyberiete takto:

1. Na hodinkách (s Wear OS) dlho podržte aktuálny ciferník, aby sa otvorila obrazovka výberu ciferníkov, posuňte sa úplne doprava, kým neuvidíte tlačidlo „Pridať ciferník“ (Add Watch Face), a vyberte ho

![Výber ciferníkov s tlačidlom Pridať ciferník](../images/wearos/watchface_add.png)

2. Posúvajte zoznam, kým nenájdete „AAPS (vlastný)“ (podľa hodiniek sú ciferníky nainštalovaných aplikácií v časti „Stiahnuté“ (Downloaded) alebo zoskupené podľa aplikácie), a kliknite na stred obrázka, aby ste ho pridali do zoznamu svojich aktuálnych ciferníkov. Nevšímajte si, ako ciferník „AAPS (vlastný)“ vyzerá teraz, svoj obľúbený vzhľad vyberiete v ďalšom kroku.

![Zoznam ciferníkov AAPS s AAPS (vlastný)](../images/wearos/watchface_list_aaps.png)

3. Teraz otvorte AAPS v telefóne a otvorte plugin Wear: **Konfigurácia** > **Komunikácia** > **Wear** > **Otvoriť plugin** (ak Wear nie je zapnutý, najprv zaškrtnite **Wear**).

![Plugin Wear s kartou Vlastný ciferník](../images/wearos/wear_plugin_custom_watchface.png)

4. Kliknite na tlačidlo „Načítať ciferník“ a vyberte ciferník, ktorý sa vám páči

![Zoznam Vyberte vlastný ciferník](../images/wearos/select_custom_watchface.png)

5. Skontrolujte hodinky: ciferník „AAPS (vlastný)“ by mal teraz zobrazovať vzhľad, ktorý ste vybrali. Na obnovenie počkajte niekoľko sekúnd. Obrazovka **Wear** v telefóne teraz zobrazuje názov načítaného ciferníka a jeho náhľad. **Informácie o ciferníku** zobrazí jeho podrobnosti a polia, ktoré obsahuje, a **Ďalšie ciferníky** otvorí [stránku na výmenu ciferníkov](../ExchangeSiteCustomWatchfaces/index.md), kde si môžete stiahnuť ďalšie vlastné ciferníky. Teraz môžete prispôsobiť komplikácie atď.: dlho podržte ciferník a potom na jeho obrázku stlačte tlačidlo „Prispôsobiť“ (Customize).

```{admonition} Complications on a custom watchface
:class: note
Vlastné ciferníky vytvorené vo verzii 3.0 alebo novšej formátu vlastných ciferníkov môžu obsahovať až päť miest pre komplikácie, ktorých polohu a veľkosť určuje ciferník (**Rozloženie komplikácií**). Na hodinkách dlho podržte ciferník, ťuknite na **Prispôsobiť** (Customize) a ťuknutím na **Komplikácia 1** až **Komplikácia 5** vyberte zdroj údajov, ktorý sa zobrazí na každom mieste. Rovnaké riadky sú v aplikácii AAPS v hodinkách aj v **Nastavenia** > **AAPS (vlastný)**; ťuknutie na niektorý z nich otvorí rovnaký výber. **Priorita typu komplikácie** určuje, či miesto uprednostní hodnotu alebo mierku, text alebo ikonu, ak zdroj údajov ponúka viac možností. Zmenená priorita sa uplatní až pri najbližšom výbere zdroja údajov pre dané miesto.

Tieto miesta fungujú iba na hodinkách s **Wear OS 5 alebo starším**, kde vlastný ciferník beží ako skutočný ciferník. Na **Wear OS 6 a novších** sa vlastný ciferník zobrazuje ako obrázok bez miest pre komplikácie a kroky 1 a 2 vyššie nie sú potrebné: uistite sa, že v plugine **Wear** v telefóne je v časti **Ciferník nainštalovaný v hodinkách** vybraný **Vlastný ciferník** (pozrite [ciferník, ktorý AAPS nainštaluje](#wearos-aaps-v4-watchface)).
```

## Ciferník AAPSv2 – legenda

![Legenda ciferníka AAPSv2](../images/Watchface_Legend.png)

A – čas od posledného behu okruhu

B – hodnota z CGM

C – minúty od poslednej hodnoty z CGM

D – zmena oproti poslednej hodnote z CGM (v mmol alebo mg/dl)

E – priemerná zmena hodnoty z CGM za posledných 15 minút

F – batéria telefónu

G – bazálna dávka (v U/h pri štandardnej dávke a v % počas dočasného bazálu)

H – BGI (blood glucose interaction, vplyv inzulínu na glykémiu) -> o koľko by glykémia „mala“ stúpať alebo klesať iba na základe aktivity inzulínu.

I – sacharidy (aktívne sacharidy | eSacharidy v budúcnosti)

J – aktívny inzulín (z bolusu | z bazálu)
