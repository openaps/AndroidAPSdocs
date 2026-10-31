# Referenční příručka vlastního ciferníku

Tato stránka je pro tvůrce nových ciferníků. Uvádí všechna klíčová slova a funkce, které jsou k dispozici, když chcete vytvořit nebo animovat nový ciferník.

- Nové funkce a klíče dostupné ve vlastním ciferníku V2 (Wear apk 3.3.0 nebo novější) najdete [zde](#cwf-reference-new-v2-features)

## Formát vlastního ciferníku

Vlastní ciferník (Custom Watchface) je otevřený formát navržený pro AAPS a spojený s novým ciferníkem „AAPS (Custom)“, který je k dispozici v hodinkách.

Soubor ciferníku je obyčejný soubor zip. Aby ho ale aplikace poznala jako soubor ciferníku, musí soubor zip obsahovat tyto soubory:

- Jeden obrázek s názvem CustomWatchface (může to být bitmapový soubor `CustomWatchface.jpg`, `CustomWatchface.png` nebo vektorový `CustomWatchface.svg`). Tento soubor je malá ikona, která slouží k výběru ciferníku po kliknutí na tlačítko „Nahrát ciferník“, a také obrázek, který vidíte v pluginu Wear v AAPS.
- Jeden soubor s názvem `CustomWatchface.json` (viz [Struktura JSON](#cwf-reference-json-structure) níže). Tento druhý soubor je hlavní soubor, který obsahuje všechny informace potřebné k návrhu ciferníku. Tento soubor json musí být platný (to je asi nejsložitější bod, když soubor upravujete ručně v textovém editoru, protože k porušení formátu json stačí jedna chybějící nebo přebývající čárka). Tento soubor JSON musí také obsahovat blok `"metadata"` s klíčem `"name"`, jehož hodnota není prázdná. To bude název vašeho vlastního ciferníku (viz [Nastavení metadat](#cwf-reference-metadata-settings) níže)
- velikost tohoto souboru zip by měla být co nejmenší (méně než asi 500 kb). Pokud je tento soubor příliš velký, bude jednoduše zablokován a do hodinek se nepřenese.

Soubor zip může obsahovat také další soubory zdrojů:

- Pevně dané názvy souborů pro obrázky, které se použijí ve standardních prvcích ciferníku (například `Background`, `CoverChart`... viz [Seznam pevně daných souborů zdrojů](#cwf-reference-list-of-hardcoded-resource-files) níže). Všechny tyto soubory mohou být ve formátu `jpg`, `png` nebo `svg`. U většiny z nich ale budete muset použít `png` nebo `svg`, které podporují průhlednost (jpg soubory jsou menší než png, ale nemají průhlednost). Nejlepší kvalitu při nejmenší velikosti mají obvykle soubory svg (vektorový formát).
- Další soubory zdrojů s volnými názvy. Tyto další soubory mohou být obrázky nebo soubory písem (pro písma jsou podporovány formáty `ttf` a `otf`). U těchto dalších souborů se `filename` (bez přípony) použije v souboru JSON jako keyValue, který určuje, kde nebo kdy se tyto soubory mají použít.
  - obrázky se často používají jako pozadí textových prvků nebo pro dynamickou animaci (například stav baterie od 0 % do 100 %)
  - soubory písem umožňují použít ve vašem ciferníku vlastní písma

(cwf-reference-json-structure)=

## Struktura JSON

Soubory JSON lze upravovat v textovém editoru Notepad (nebo notepad++) (dejte přednost notepad++, který JSON rozpozná a barevně ho zvýrazní)

- obsahuje textové klíče `"string_key":` a hodnoty klíčů, které mohou být texty jako `"key value"`, celá čísla, logické hodnoty jako `true` nebo `false` nebo blok dat.
- každá hodnota je oddělena čárkou `,`
- Blok dat začíná znakem `{` a končí znakem `}`
- soubor json je jeden celý blok, takže začíná znakem `{` a končí znakem `}`. Uvnitř souboru jsou všechny vnořené bloky přiřazené ke klíči `"key"`, který musí být v rámci bloku jedinečný
- Aby byl soubor json čitelnější, bývá odsazený (každý nový klíč je na novém řádku, každý nový blok je posunutý doprava o 4 mezery)

(cwf-reference-metadata-settings)=

### Nastavení metadat

Tento blok je v souboru json první a je povinný. Obsahuje všechny informace o tomto ciferníku, například název, autora, datum vytvoření nebo aktualizace, verzi od autora nebo verzi pluginu.

Níže je příklad bloku metadata:

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template"
},
```

Znak `/` použitý v datu je speciální znak. Aby ho soubor json správně rozpoznal, musíte před něj dát „escape“ znak `\`

V některých souborech json můžete vidět další klíč `"filename"`. Tento klíč se vytvoří nebo aktualizuje automaticky, když se vlastní ciferník nahraje do AAPS (slouží k tomu, aby uživatel viděl název souboru zip ve složce exports). Z bloku metadata ho tedy můžete odstranit.

(cwf-reference-general-parameter-settings)=

### Nastavení obecných parametrů

Po prvním bloku s metadaty nastavíte některé obecné parametry (viz [Seznam obecných parametrů](#cwf-reference-list-of-general-parameters) níže). Ty umožňují nastavit barvy grafu (sacharidy, bolus, hodnoty glykémie...) a také výchozí barvy pro hodnoty v rozsahu, hyperglykémii nebo hypoglykémii (výchozí barvy hodnoty glykémie a šipek)

Níže je příklad obecných parametrů

```text
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### Nastavení ImageView

Vlastní obrázek můžete nastavit pomocí správného názvu souboru, který patří ke každému ImageView v rozvržení vlastního ciferníku. Blok json pak slouží jen k určení polohy, velikosti, viditelnosti prvku a volitelně k úpravě barvy:

Níže je příklad bloku obrázku pro second_hand (v tomto případě soubor zip neobsahuje žádný obrázek, takže se použije výchozí obrázek vteřinové ručičky, ale s vlastní barvou).

```text
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
Aby měla second_hand výchozí barvu glykémie (lowRange, midRange nebo highRange), stačí upravit poslední řádek s hodnotou klíče `bgColor`

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### Nastavení TextView

TextView má oproti ImageView více parametrů: můžete nastavit otočení (celé číslo ve stupních), textsize (celé číslo v pixelech), gravity (určuje, zda bude text vycentrovaný (výchozí hodnota), nebo zarovnaný vlevo či vpravo), písmo, fontStyle a fontColor a také barvu pozadí TextView

```text
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Pokud na svém ciferníku nechcete použít nějaký prvek, nastavte klíč `"visibility"` na `"gone"`, ale také nastavte velikost a polohu mimo viditelnou oblast, například takto:

```text
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Pokud jsou velikost a poloha ve viditelné oblasti, může se při obnovení ciferníku krátce „bliknout“ skrytá hodnota.

Pokud chcete upravit obrázek pozadí textového prvku, můžete použít klíč `"background":` a jako keyValue zadat název souboru obrázku v souboru zip. Můžete také jen změnit barvu pozadí pomocí klíče `"color:"`.

```json
"background": "fileName"
```

Máte také 4 speciální textView (s názvy freetext1 až freetext4), které mají zvláštní parametr `"textvalue":`. Ten můžete použít například k zobrazení popisku

(cwf-reference-chartview-settings)=

### Nastavení ChartView

ChartView je velmi zvláštní prvek, který může sdílet některé parametry s ImageView nebo s TextView...

Standardní nastavení tohoto prvku je velmi jednoduché:

```text
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
Dva další parametry, které můžete pro ChartView použít, jsou barva pozadí (výchozí je průhledné) pomocí klíče `"color"` nebo obrázek pozadí pomocí klíče `"background"`.

(cwf-reference-how-to-build-watchface)=

## Jak sestavit a navrhnout svůj první ciferník

### Potřebné nástroje

- Textový editor: doporučuji NotePad++ (nebo podobný). Je to jednoduchý textový editor, ale jeho výhodou je, že text zobrazuje barevně, takže se chyby snadněji najdou. poslouží jakýkoli jednoduchý textový editor. Cílem je totiž upravit informace v json.
- Editor obrázků (bitmapový a/nebo vektorový)
  - Pokud používáte bitmapy
    - Editor obrázků musí umět pracovat s průhledností (nutné pro všechny obrázky nad pozadím) a s formátem png (pokud používáte bitmapové obrázky)
    - Obrázek pozadí může být ve formátu jpg (je menší než png)
    - Editor obrázků by vám měl umožnit měřit grafické objekty v pixelech (může to být jednoduchý čtverec) (nahoře, vlevo, šířka, výška)
    - Image editor should be able to show you colors with RRGGBB code in hexadecimal
    - Editor obrázků by měl umět změnit velikost obrázku na 400px x 400px (je velmi důležité pracovat s tímto rozlišením)
  - Pokud používáte vektory
    - Vektorový obrázek je třeba exportovat ve formátu svg

### Vezměte si šablonu, ať nezačínáte od nuly

Když chcete navrhnout svůj první ciferník, je nejlepší začít od výchozího ciferníku (tak budete mít nejnovější verzi se všemi dostupnými prvky ve správném pořadí)

- Soubor zip získáte kliknutím na tlačítko „Export Template“ v pluginu Wear. Soubor zip pak najdete ve složce AAPS/exports
- Abyste viděli tlačítka pro vlastní ciferník, musíte mít k AAPS připojené hodinky (hodinky ale stejně potřebujete ke kontrole, testování a ladění vlastního ciferníku)

Výchozí ciferník je velmi jednoduchý a soubor zip bude obsahovat jen 2 soubory:

- CustomWatchface.png (obrázek výchozího ciferníku pro výběr ciferníku)
- CustomWatchface.json

### Uspořádejte si soubory v počítači

Nejsnazší je mít telefon připojený k počítači a pracovat se dvěma složkami:

- jeden průzkumník otevřený ve složce, kde jsou všechny soubory (json, bitmapové obrázky, vektorové obrázky, písma) a v ní soubor CustomWatchface.zip
- druhý průzkumník (nebo upravený strom složek) otevřený tak, abyste měli k dispozici složku Telefon/AAPS/exports

Práce je pak velmi snadná: pokaždé, když upravíte soubor json v textovém editoru nebo obrázek v editoru obrázků (bitmapovém nebo vektorovém), stačí:

1. uložit změny v každé aplikaci
2. přetáhnout všechny soubory do souboru CustomWatchface.zip
3. přetáhnout CustomWatchface.zip do složky AAPS/exports v telefonu
4. poslat CustomWatchface do hodinek a zkontrolovat výsledek

### Začátek úprav ciferníku

Nejdřív musíte určit název ciferníku (je potřeba, abyste ho snadno vybrali při testování) a začít upravovat klíče metadat na začátku souboru json

Potom musíte určit, jaké informace chcete zobrazit, tedy které prvky mají být viditelné a které skryté.

- budete zobrazovat vteřiny, nebo ne?
- chcete navrhnout analogové hodinky, nebo digitální hodinky (nebo obojí...)

Teď můžete začít upravovat soubor json: u každého prvku nastavte klíč `"visibility":` na `"visible"` nebo `"gone"` (podle toho, zda prvek chcete ponechat, nebo ne)

Můžete také začít přibližně nastavovat hodnoty horního a levého okraje a šířky a výšky, abyste ciferník začali uspořádávat (tyto hodnoty později doladíte pomocí editoru obrázků)

Poznámka: vše se navrhuje v **obdélníku 400px x 400px**. Vše se tedy umisťuje v absolutních souřadnicích v rámci této velikosti.

Při návrhu prvního ciferníku musíte vědět, že vše je uspořádáno ve vrstvách odzadu dopředu. Každý prvek (ImageView nebo TextView) tak může zakrýt něco, co je za ním...



![Vrstvy CustomWatchface](../images/CustomWatchface_1.jpg)



V souboru json jsou pak všechny prvky seřazené odzadu dopředu (pomůže vám to pamatovat si, co je za čím...)

Pokud navrhujete nebo upravujete svůj první vlastní ciferník, začněte jednoduchými věcmi: změňte viditelnost některých prvků, přidejte vlastní obrázek pozadí bez změny souboru json...

### Barvy

V souboru json je několik klíčů pro zadání barev: `"color"`, `"fontColor"` pro prvky, ale také `"highColor"`, `"midColor"`, `"lowColor"`, ... (viz [Seznam obecných parametrů](#cwf-reference-list-of-general-parameters))

Barvy se zadávají textovým polem, které začíná znakem `#` a pokračuje hodnotami RRGGBB (červená, zelená, modrá) v šestnáctkovém formátu:

- `"#FFFFFF"` je bílá, `"#000000"` je černá, `"#FF0000"` je červená...

Můžete také přidat 2 další znaky pro alfa kanál a určit tak úroveň průhlednosti (AARRGGBB):

- `"#00000000"` je zcela průhledná a `"#FF000000"` je zcela neprůhledná (takže `"#FF000000"` je totéž jako `"#000000"`)

Můžete také použít speciální hodnotu klíče `"bgColor"`, která automaticky použije `"highColor"`, `"midColor"` nebo `"lowColor"` zadané v obecných parametrech podle hodnoty glykémie:

- `"fontColor": "bgColor",` automaticky nastaví barvu písma prvku podle hodnoty glykémie
- Prvky `sgv` (hodnota glykémie) a `direction` (šipka trendu) automaticky používají barvy glykémie nastavené v obecných parametrech (pokud chcete pro tyto 2 prvky jiné barvy, musíte použít pokročilou funkci [dynData](#cwf-reference-dyndata-feature) s barvou v jednom kroku...)

Více informací o ImageView a klíči `"color":` najdete v kapitole [Úprava barvy obrázku](#cwf-reference-tune-image-color) níže.

### Vložení pevně daných obrázků

nejjednodušší způsob, jak začít upravovat ciferník, je vložit do souboru zip obrázky se speciálními názvy (viz [Seznam pevně daných souborů zdrojů](#cwf-reference-list-of-hardcoded-resource-files))

- Obrázek musí být ve formátu `.jpg`, `.png` nebo `.svg`. ale pozor, jpg nepodporuje průhlednost, takže se má používat jen pro vrstvu pozadí. Pro všechny mezivrstvy (cover_chart, cover_plate, ručičky) použijte obrázek `.png` nebo `.svg`

- Pokud máte editor vektorových obrázků (například Illustrator), dejte přednost tomuto formátu. Vytvoří malé textové soubory s příponou `.svg` v nejlepší kvalitě.
- Dbejte na přesný název souboru (včetně velkých a malých písmen)

Now if you want a dedicated background image, you only have to include within the zip file a file named `Background.jpg` (without changing anything else). Send the zip file to the watch and check the result!

Pokud chcete upravit hour_hand, minute_hand nebo second_hand pro analogové hodinky, stačí vložit `HourHand.png` (nebo `HourHand.svg`), `MinuteHand.png` a `SecondHand.png`.

- tyto obrázky se automaticky otáčejí kolem středu obrázku, takže obrázky musí ukazovat čas 00:00:00 (a pro analogové hodinky „přes celý displej“ použijte velikost 400 x 400 px umístěnou nahoře na 0 a vlevo na 0)

V [Seznamu pevně daných souborů zdrojů](#cwf-reference-list-of-hardcoded-resource-files) si také můžete všimnout, že pro každý obrázkový prvek existují dva další pevně dané názvy souborů s `High` a `Low` (například můžete do souboru zip vložit další obrázky s názvy `BackgroundHigh.jpg` a `BackgroundLow.jpg`). pak se obrázek automaticky změní podle vaší glykémie (v rozsahu, hyperglykémie nebo hypoglykémie). Jako příklad se podívejte na ciferník AIMICO.

(cwf-reference-tune-image-color)=

### Úprava barvy obrázku

Klíčem `"color"` můžete upravit výchozí barvu obrázku:

- na prvku background nastaví barvu pozadí (výchozí černá)
- na cover_plate (jednoduchý ciferník) nebo ručičkách změní výchozí obrázek (bílý) na zadanou barvu (včetně `"bgColor"`)

Když použijete klíč `"color"` na bitmapový obrázek (`.jpg` nebo `.png`), barva vytvoří zajímavý efekt na sytosti barev. Svůj bitmapový obrázek tak stále poznáte.

U obrázků `.svg` nemá klíč `"color"` žádný vliv. Barvy vektorových souborů berte jako pevně dané v obrázku. Pokud chcete barvy měnit, musíte vložit několik souborů `svg` a k jejich změně použít pokročilou funkci [dynData](#cwf-reference-dyndata-feature)

### Další písma pro TextView

Několik výchozích písem je už k dispozici ve wear apk (viz klíče písem v kapitole [Hodnoty klíčů](#cwf-reference-key-values)). Pokud ale chcete použít další písma, která ve výchozím stavu nejsou k dispozici, můžete je vložit do souboru zip:

- podporované formáty písem jsou 2: soubory `.ttf` a `.otf`
- pokud do souboru zip vložíte vlastní písmo, například soubor s názvem `myCustomFont.ttf`, musíte ho v souboru json pro TextView použít pomocí názvu souboru:

```
"font": "myCustomFont",
```

Pamatujte, že některá písma mají velké soubory (a velikost souboru zip je omezená). Pokud tedy používáte jen velmi málo znaků (čísla, `.`, `,`), můžete pomocí bezplatných nástrojů odstranit nepoužité znaky (například [zde](https://products.aspose.app/font/generator/ttf-to-ttf)) a zmenšit tak velikost písma.

(cwf-reference-advanced-features)=

## Pokročilé funkce

(cwf-reference-preference-feature)=

### Funkce předvoleb

CustomWatchface může automaticky upravit některé předvolby hodinek, aby se ciferník zobrazoval správně (pokud to uživatel povolí v předvolbách Wear).

Tuto funkci ale používejte opatrně. Předvolby jsou společné pro všechny ostatní ciferníky. Proto u této funkce dodržujte několik pravidel:

- nikdy nenastavujte předvolby týkající se skrytých prvků
- snažte se co nejvíce zvětšit viditelné prvky
- klidně některé prvky udělejte širší, než je potřeba:
  - TBR lze zobrazit v procentech (malá šířka), ale také jako absolutní hodnoty (mnohem širší)
  - rozdíl nebo průměrný rozdíl s podrobnými informacemi může být široký
  - totéž platí pro iob2: tento prvek může ukazovat celkové IOB, ale pokud je vybráno podrobné IOB, může být text velmi dlouhý

Pokud přesto potřebujete nějaké velmi specifické nastavení pro správné zobrazení (v příkladu níže, pokud není dost místa pro podrobné IOB, můžete tento parametr hodinek „vynutit“ na `false`), můžete do bloku metadata vložit omezení nastavení, například takto

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template",
    "key_show_detailed_iob": false
},
```

Pokud uživatel povolí vlastnímu ciferníku měnit parametry hodinek (nastavení v pluginu Wear), pak se volba Zobrazit podrobné IOB nastaví na „vypnuto“ a zamkne se (tento parametr nelze změnit, dokud se povolení v nastavení pluginu Wear nevypne nebo dokud se nevybere jiný ciferník)

- Když uživatel vybírá ciferník, vidí při výběru počet „požadovaných parametrů“

V příkladu níže má ciferník Gota jeden požadovaný parametr. Pokud povolení není dáno, zobrazí se toto číslo bílou barvou. Pokud povolení dáno je, parametr se na hodinkách nastaví a zamkne (v tomto případě je číslo oranžové)

![Požadované parametry](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### Funkce TwinView

Dvojité prvky (twin views) umožňují snadno upravit polohu prvku podle toho, které prvky jsou viditelné. Nemá to takové možnosti jako rozvržení vytvořené celé z LinearLayout, ale zvládne mnoho běžných případů.

V příkladu níže vidíte ciferník AAPS (Cockpit) se všemi prvky zapnutými v nastavení a stejný ciferník s vypnutými volbami „Show rig battery“ a „Show avg delta“

![Dvojité prvky](../images/CustomWatchface_3.jpg)

Vidíte, že když je jeden z dvojice prvků skrytý, druhý se posune na střed

V tomto příkladu vidíte, že v bloku `"uploader_battery"` je přidán klíč `"twinView":`, který určuje prvek `"rig_battery"`, a v bloku `"rig_battery"` klíč `"twinView":` určuje jako dvojče `"uploader_battery"`. Další klíč `"leftOffsetTwinHidden":` pak určuje počet pixelů, o které se prvek posune, když je jeho dvojče skryté.

Jak toto číslo spočítat: rozdíl mezi leftMargin obou prvků je 50 pixelů, takže posun, aby prvek zůstal na středu, je polovina, jedním nebo druhým směrem.

Pokud jsou dvojité prvky umístěné svisle, musíte použít klíč `"topOffsetTwinHidden":`

```text
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### Funkce DynData

DynData je nejsilnější funkce, pokud chcete na ciferník přidat nějakou animaci podle vnitřních hodnot (například hodnota glykémie, úroveň glykémie, rozdíl, % baterie... seznam dostupných dat najdete [zde](#cwf-reference-dyndata-key-values))

Tuto funkci ukážu na příkladu ciferníku AAPS (SteamPunk):

![CustomWatchface_4](../images/CustomWatchface_4.png)

U tohoto ciferníku budeme muset řídit [otáčení hodnoty glykémie](#cwf-reference-background-management) (od 30 stupňů do 330 stupňů) vpravo, [dynamický rozsah avg_delta](#cwf-reference-avg-delta-management) (stupnice do 5 mg/dl, 10 mg/dl nebo 20 mg/dl podle hodnoty), [otáčení ručičky](#cwf-reference-dynamic-rotation-management), které musí odpovídat stupnici, a také různé vrstvy prvků...

Abyste mohli tento ciferník spravovat, podívejte se níže na všechny obrázky v souboru zip:

Poznámka: aby byla vidět průhlednost, jsou všechny tyto obrázky na žlutém pozadí a ohraničené červeným čtvercem

![Obrázky Steampunk](../images/CustomWatchface_5.jpg)

- V prvním řádku se Background.jpg a CoverPlate.png automaticky přiřadí k příslušnému prvku (výchozí názvy souborů prvků) a steampunk_pointer.png bude řídit dynData
- Ve druhém řádku vidíte 3 stupnice dynamického rozsahu pro avg_delta, které také bude řídit dynData
- Ve třetím řádku se chartBackground.jpg propojí ručně s prvkem chart a soubory HourHand.png a MinuteHand.png se automaticky přiřadí k příslušným prvkům

(cwf-reference-background-management)=

#### Řízení pozadí

Za prvé, obrázek hodnoty glykémie tu nemá jinou možnost: může být jen ve vrstvě pozadí (jinak by byl před grafem a graf by nebyl vidět!). Musíme tedy přiřadit hodnotu glykémie k pozadí a pak obrázek pozadí otáčet podle hodnoty glykémie.

Do bloku `"background"` vložíme 2 speciální klíče pro toto otáčení:

```text
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
Klíč `"dynData":` určuje, který blok se použije pro definici animace (hodnota, rozsah, převod...). Zde se tento blok jmenuje „rotateSgv“ (když tuto funkci používáte, zvolte jasný název),

`"rotationOffset": true,` určuje, že animace podle hodnoty má být otáčení. (další dostupné klíče jsou `"leftOffset"` a `"topOffset"`, pokud chcete vytvořit posuvník)

Teď přejdeme na konec souboru, za poslední prvek:

```text
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
Vidíte, že za poslední prvek (`"second_hand"`) jsme přidali nový blok `"dynData": { ... }`, který bude obsahovat všechny animace:

Blok uvedený v prvku `"background"` se jmenuje `"rotateSgv"`. Je to první blok, který najdete v `"dynData"`!

Tento blok je jednoduchý: první klíč `"valueKey":` určuje, která hodnota se má použít. v tomto případě je `"sgv"` „keyValue“, která určuje hodnotu glykémie (ve většině případů má keyValue stejný název jako prvek, který tuto informaci zobrazuje).

Pro hodnotu glykémie je výchozí min data nastaveno na 39 mg/dl a max data na 400 mg/dl (všechny dostupné keyValues a příslušné hodnoty min/max data najdete níže v [Hodnotách klíčů DynData](#cwf-reference-dyndata-key-values)).

V bloku `"rotateSgv"` slouží dva další klíče (`"minData":` a `"maxData":`) k nastavení minimální a maximální hodnoty na 30 a 330. S těmito minimálními a maximálními hodnotami můžeme přímo použít hodnotu dat (bez převodu) k otočení pozadí ve stupních. V této situaci budou všechny hodnoty glykémie nad 330 mg/dl omezeny na 330, což je horní hranice obrázku.

#### Řízení grafu

Výchozí pozadí grafu je průhledné. Abychom skryli stupnici glykémie, která je součástí obrázku pozadí, musíme vložit speciální obrázek pozadí (tento obrázek bude obsahovat celkové stíny ciferníku Steampunk). The link to chartBackground.jpg file is done with `"background":` key

Velikost a poloha prvku musí být samozřejmě nastavené přesně na pixel!

```text
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### Řízení průměrného rozdílu

Ke zobrazení dynamického rozsahu průměrného rozdílu použijeme čtyři prvky freetext. freetext1 bude řídit obrázek stupnice a freetext2 až freetext4 budou řídit otáčení ručičky podle stupnice.

**freetext1**

Jak bylo vysvětleno dříve, prvky freetext jsou před grafem a před pozadím. Proto jsme do obrázků přidali průhlednou oblast, aby byly vidět (pravá a spodní část obrázku)

Odstraněná spodní část těchto obrázků byla použita jako pozadí grafu, aby vše dokonale navazovalo.

```text
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
Pro tento prvek vložíme odkaz na další blok `"dynData"` s názvem `avgDeltaBackground`. Tento blok bude řídit stupnici avgDelta podle hodnoty avgDelta.

```text
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":` vytvoří propojení s hodnotou `"avg_delta"`
- min a max Data také omezí rozsah na nejvyšší hodnotu, kterou tento ciferník umí zobrazit (od -20 mg/dl do 20 mg/dl). Uživatelé mmol by měli pamatovat, že všechny vnitřní hodnoty jsou v AAPS vždy v mg/dl.

Teď si ukážeme, jak měnit obrázek pozadí podle hodnoty.

`"invalidImage":` je klíč pro obrázek, který se zobrazí, když jsou data neplatná (nebo chybí). Zde vytvoříme odkaz na další obrázek v souboru zip se stupnicí 5 mg/dl

Pak použijeme řadu obrázků od `"image1":` do `"image8":`. Počet zadaných obrázků určuje počet kroků mezi `minData` a `maxData`.

- `image1` určuje obrázek, který se zobrazí, když je avg_delta rovna nebo blízko `minData`, a obrázek s nejvyšším číslem (zde `image8`) určuje obrázek, který se zobrazí, když je avg_delta rovna nebo blízko `maxData`
- mezi -20 mg/dl a 20 mg/dl je celkový rozsah 40 mg/dl. Po vydělení 8 (počet zadaných obrázků) dostaneme 8 kroků po 5 mg/dl
- Teď můžeme přiřadit obrázky pozadí podle hodnoty avg_delta, od nejnižších hodnot: mezi -20 a -15 a také mezi -15 a -10 použijeme pro stupnici `steampunk_gauge_mgdl_20`, pak mezi -10 a -5 `steampunk_gauge_mgdl_10` a tak dále až po +15 a +20, kde opět použijeme obrázek pozadí `steampunk_gauge_mgdl_20`

(cwf-reference-dynamic-rotation-management)=

**freetext2 až freetext4**

U těchto prvků zkombinujeme dynamické obrázky a otáčení, které bylo vysvětleno výše:

```text
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
Zde je každý prvek určený pro jednu stupnici (je tedy propojený s vlastním blokem dynData). Všimněte si také, že u těchto 3 prvků je zapnutý klíč `"rotationOffset":`. Teď se podívejte na první blok dynData:

```text
"avgDelta5": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "rotationOffset": {
        "minValue": -120,
        "maxValue": 120
    },
    "invalidImage": "null",
    "image1": "null",
    "image2": "null",
    "image3": "null",
    "image4": "steampunk_pointer",
    "image5": "steampunk_pointer",
    "image6": "null",
    "image7": "null",
    "image8": "null"
},
```
I když se dynamický rozsah použije jen pro data avg_delta mezi -5 a +5, je důležité ponechat celkový rozsah -20, +20 mg/dl, aby ručička zůstala synchronizovaná s pozadím při přepínání stupnic. Proto ponecháme stejný celkový rozsah jako u `avgDeltaBackground` a stejný počet kroků (8 obrázků).

Všimněte si, že `"invalidImage"` i několik `"imagexx"` má hodnotu klíče `"null"` (může to být jakýkoli text, který neexistuje jako název souboru v souboru zip). Když se soubor nenajde, bude obrázek pozadí prvku průhledný. Toto nastavení tedy zajistí, že ručička bude viditelná jen pro krok 4 a krok 5 (průměrný rozdíl mezi -5 mg/dl a +5 mg/dl) a mimo tento rozsah viditelná nebude.

Teď vidíte nový blok `"rotationOffset":`, který obsahuje dva klíče `"minValue":` a `"maxValue":`. Tyto hodnoty slouží k převodu mezi vnitřními daty (v mg/dl) a úhlem otočení, který chceme mít.

- Ciferník Steampunk je navržený tak, že ručička se otáčí nejvýše od -30 stupňů do 30 stupňů. Podle stupnice (zde od -5 mg/dl do 5 mg/dl) tedy chceme pro tyto hodnoty mít 30 stupňů. Protože `minData` a `maxData` jsou 4krát větší, odpovídající minValues a maxValues jsou 4 * 30 stupňů, tedy -120 a +120 stupňů. Při každém otočení nad nebo pod +-30 stupňů ale bude ručička skrytá (žádný obrázek není vidět) a ručička bude viditelná jen pro hodnoty mezi -5 a +5 mg/dl... A to je přesně to, co tu chceme.

The other dynData blocks are defined the same way to tune `"avgDelta10"`and `"avgDelta20"`

#### prvek loop

v ciferníku Steampunk jsou zelené a červené šipky smyčky (pro stav) vypnuté. I to řídí speciální blok dynData přiřazený k prvku loop.

```text
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Protože tento blok volá jen prvek loop a výchozí data tohoto prvku jsou informace o smyčce, klíč `"valueKey":` je nepovinný.

Výchozí `minData` a `maxData` pro smyčku jsou 0 min a 28 min. Se dvěma obrázky se tedy všechny hodnoty pod 14 min zobrazí s pozadím `image1` a všechny hodnoty nad 14 min s `image2`. 14 min je přesně mez pro přepnutí ze zelené šipky na červenou.

V tomto příkladu nejsou soubory `greyArrows`, `greenArrows` a `redArrows` v souboru zip, takže se tyto šipky jen odstraní (nejsou vidět). Pokud ale chcete upravit šipky stavu vlastními obrázky pozadí, můžete tento blok použít tak, jak je.

#### prvky rig_battery a uploader_battery

Na závěr přehledu funkce dynData se podíváme na řízení baterie. Cílem je měnit barvu textu podle stavu baterie (od 0 do 100 %)

```text
"uploader_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 100,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "rig_battery",
    "topOffsetTwinHidden": -13
},
"rig_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 74,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "uploader_battery",
    "topOffsetTwinHidden": 13
},
```
Vidíte, že oba tyto prvky sdílejí stejný blok `dynData` s názvem `batteryIcons`. Je to možné, protože výchozí připojená data jsou data daného prvku (takže bez zadání klíče `"valueKey":` v bloku `batteryIcons` se blok použije na data `uploader_battery` nebo `rig_battery` podle prvku).

Tyto dva prvky také používají funkci TwinView, která je vysvětlena [zde](#cwf-reference-twinview-feature).

Teď se podívejme na blok dynData:

```text
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
Zde používáme přesně stejnou logiku jako u dynamického obrázku pozadí, ale se speciálními klíči (`"invalidFontColor"` a `"fontColor1"` až `"fontColor5"` pro 5 kroků po 20 %).

- `"fontColor1"` (tmavě červená) se použije pro všechny hodnoty pod 20 % a bílá pro všechny hodnoty nad touto mezí.
- Pokud chcete mez snížit na „pod 10 %“, stačí přidat 5 dalších klíčů od `"fontColor6"` do `"fontColor10"`. Můžete ale také upravit každou barvu, pokud chcete postupný přechod od zelené přes žlutou a oranžovou k červené...

(cwf-reference-dynpref-feature)=

### Funkce DynPref

Než začnete číst tuto kapitolu, musíte rozumět, jak funguje [dynData](#cwf-reference-dyndata-feature), protože DynPref je pokročilé použití DynData: každý blok DynData teď budete moci upravit podle předvoleb nastavených uživatelem:

Funkci DynPref si ukážeme na dvou příkladech:

- Ciferník Steampunk (jednoduché použití: stejný ciferník obsahuje verzi pro mgdl i mmol a automaticky se přepne podle jednotek vybraných v AAPS).
- Ciferník AAPS V2 kombinuje různé předvolby, aby mohl měnit barvu textu a pozadí podle předvoleb pro tmavé pozadí a dělicí čáry.

#### Jednoduché použití dynPref v ciferníku Steampunk

Ve Steampunku máme dvě sady obrázků podle jednotek: obrázek `background`, který obsahuje stupnici glykémie a otáčí se podle hodnoty glykémie, a `freeText1`, který obsahuje dynamickou stupnici podle hodnoty avgDelta. Abychom měli jeden ciferník, který automaticky ukáže správné jednotky, musíme vybrat obrázek podle zvolených jednotek.

Uděláme to tak, že v bloku prvku nahradíme klíč `dynData` klíčem `dynPref`:

```text
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
Klíče `dynPref` se používají velmi podobně jako klíče `dynData` vysvětlené v předchozí kapitole

Teď se podíváme na konec souboru json, za blok `dynData`:

```text
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
Vidíte, že klíč dynpref zadaný v bloku prvku `background` (`"dynPref": "rotateSgv"`) existuje v bloku json `dynPref` na konci souboru json:

Tento blok musí obsahovat klíč `"prefKey"`, který určuje, která předvolba se má použít. V tomto příkladu je klíč `"key_units"` propojený s jednotkami vybranými v AAPS v telefonu. Hodnota je `"true"`, pokud jsou vybrané jednotky mgdl, a `"false"`, pokud jsou vybrané jednotky mmol.

Pak najdete dva bloky json ve formátu „dynData“, které se použijí podle vybrané předvolby

Note that the "HardCoded" file name for Background image is now replaced by a dynamic image that will be the same whatever the BG value (`Background_mgdl.png`file if key_units is "true", `Background_mmol.png` if key_units is false), and we also include an `"invalidImage"` key to always have a background image even if no data has been received from the phone.

#### Kombinace různých předvoleb v dynPref u AAPS V2

Většinou, když nastavíte předvolbu, nejde o „dynamické chování“, ale jen o výsledek podle toho, co vyberete. V dynPref se to ale považuje za dynamickou funkci...

- zatímco v `dynData` zadáváte jeden úplný blok parametrů (s obrázky, fontColor, Color, ...), s `dynPref` můžete každý parametr kombinovat podle jedné konkrétní předvolby.
- Zde uvidíte, jak se předvolba dělicí čáry (match divider) kombinuje s předvolbou tmavého pozadí: když je zapnutá (true), zobrazí se bílý text na černém pozadí u tmavého ciferníku (parametr dark true) nebo černý text na bílém pozadí u světlého ciferníku (dark false)...

Nejdřív se podívejme na začátek souboru json:

```text
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"` určuje blok dynPref pro všechny výchozí barvy mimo prvky. Tyto barvy se upraví podle parametru tmavého pozadí v `"prefColorDark"`:

A na konci, v bloku `dynPref`, bude zvláštní blok dynPref pro výchozí barvy:

```text
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
Rozdíl mezi tímto blokem dynPref a ostatními standardními bloky dynPref pro prvky je v tom, že zde není blok dynData pro každou hodnotu parametru `"key_dark"`, ale jen seznam hlavních barev (`highColor`, `midColor`, ...)

Lets now take a look on items included into the "divider banner" (in example below `"basalRate"` view linked to `"matchDivider"` dynPref view):

```text
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
Pak v bloku dynPref vidíte, že parametr Match divider (klíč `key_match_divider`) obsahuje 2 bloky „true“ a „false“. Tyto dva bloky ale jen určují, zda prvek použije dynBlock „dark“ (tedy přesně stejnou barvu pozadí a textu jako ostatní prvky mimo pruh), nebo dynBlock „white“, který nastaví opačné barvy pozadí a textu...

```text
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
Zde jste uvnitř bloku „dynData“. Pro určení color nebo fontColor tedy použijete dynData (zde neuvedeno) s jediným krokem (použijí se `"color1"` a `'fontColor1'`)

- u všech parametrů kromě `image` bude výchozí „neplatná hodnota“ (pokud ji výslovně nenastaví klíč `"invalidColor"` nebo `"invalidFontColor"`) `"color1"` a `"fontColor1"`.



Pak uvidíte třetí příklad s prvky iob (`iob1` a `iob2`), kde použijeme menší text pro podrobné IOB a větší text pro celkové IOB:

```text
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
Ve výchozím nastavení prvků uvidíte velikost textu (19 u `iob1` a 24 u `iob2`) a dva různé bloky `dynPref`, které mají upravit textsize (podle parametru podrobného IOB) a barvy (podle parametru tmavého pozadí)

```text
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
Vidíte, že podle parametru podrobného IOB (klíč `"key_show_detailed_iob"`) je při hodnotě „true“ nastavena textsize na pevnou hodnotu větší než výchozí (24 místo 19). Dělá se to pomocí funkce „kroků“ textsize, jen s jednou hodnotou, tedy jedním krokem... (u všech parametrů kromě obrázků platí, že pokud není nastaven invalidTextSize, použije se pro neplatná data textsize1)

Pak se blok dynPref „dark“ použije k nastavení color a fontColor

V tomto příkladu bude pro prvek iob1 při zapnutém podrobném IOB a zapnutém tmavém pozadí použit tento blok dynData:

```text
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

Text tedy bude bílý na černém pozadí a velikost 24 nahradí výchozí velikost 19 nastavenou v prvku

Blok dynData, který se použije pro stejný prvek iob1 při vypnutém podrobném IOB a vypnutém tmavém pozadí, bude:

```text
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Teď bude text černý na bílém pozadí s velikostí 19

#### Tipy a triky pro dynPref

- Můžete kombinovat libovolný počet předvoleb, ale pozor: počet bloků, které musíte popsat, roste velmi rychle (exponenciálně). Pokud zřetězíte 3 parametry a chcete popsat všechny situace, budete muset popsat 8 bloků, i když má každý parametr jen 2 hodnoty...
- Dejte pozor, abyste nevytvořili „nekonečnou smyčku“ (například když blok dynpref1 doplňuje blok dynpref2, který zase doplňuje blok dynpref1...). V tomto případě budou bloky dynpref považovány za neplatné...
- Nezapomeňte za klíč přidat číselný index (když například v prvku použijete klíč `"textsize"`, musíte v bloku hodnot dynPref použít `"textsize1"`, protože jde o formát „dynData“, tedy v tomto případě propojený s hodnotou jedním krokem)
- Pro jeden prvek se smí nastavit jen jeden klíč `"valueKey"`. Pokud se tedy výsledný blok `dynData` skládá z několika bloků `dynPref`, nevkládejte několik klíčů `"valueKey"` (ani příslušné `"minData"`, `"maxData"`, ...)

(cwf-reference-new-v2-features)=

### Nové funkce v CustomWatchface V2 (AAPS V3.3.0 nebo novější)

Ciferníky, které používají tyto nové funkce nebo prvky, vyžadují nejnovější wear apk sestavenou z verze AAPS 3.3.0.

Pokud použijete zip „v2“ s hodinkami, které mají CustomWachface V1, budou na ciferníku chybět informace nebo bude zobrazovat špatný obsah.

CustomWatchface V2 obsahuje tyto nové funkce:

- [Nový prvek Status](#cwf-reference-new-status-feature)
- [Nový prvek TempTarget](#cwf-reference-new-temp-target-feature)
- [Nový prvek stavu zásobníku](#cwf-reference-new-reservoir-level-feature)
- [Nová funkce formátování](#cwf-reference-new-formating-feature)
- [Zobrazení externích dat pro sledující](#cwf-reference-show-external-datas) (až 3 sady dat na jednom ciferníku, pro AAPS, AAPSCLIENT a AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Nový prvek Status

Klíč tohoto prvku je `"status"` a příslušný blok je automaticky součástí šablony exportované z wear apk „Custom Watchface V2“ (sestavené z AAPS verze 3.3.0 nebo novější)

Tento prvek byl součástí starších ciferníků AAPS (NoChart), AAPS (BigChart) a AAPS (Large) a obsahoval textovou hodnotu (vytvořenou ve wear apk).

Tyto starší ciferníky byly v AAPS 3.3.0 odstraněny a nahrazeny 3 novými vlastními ciferníky.

- minimální informace je hodnota IOB (vždy viditelná, bez ohledu na parametr IOB v hodinkách)
- pak následují podrobné hodnoty IOB (BolusIOB|BasalIOB), pokud jsou zapnuté v předvolbách
- a hodnota BGI (opět pokud je zapnutá v předvolbách)

Prvek `"status"` je spojený s klíčem `"key_show_loop_status"` (v dynPref), který řídí jeho viditelnost.

Ve V1 bylo možné tento prvek řešit pomocí existujících prvků `"iob1"`, `"iob2"` a `"bgi"`, ale bylo potřeba složité nastavení dynPref pro mezery mezi jednotlivými informacemi podle různých nastavení vybraných v hodinkách.

(cwf-reference-new-temp-target-feature)=

#### Nový prvek TempTarget

Klíč tohoto prvku je `"tempTarget"` a příslušný blok je automaticky součástí šablony exportované z wear apk „Custom Watchface V2“ (sestavené z AAPS verze 3.3.0 nebo novější).

Na ciferníku zobrazuje:

- Cíl z profilu (jedna hodnota nebo cíl min–max) (výchozí barva bílá)
- Cíl upravený smyčkou (výchozí barva zelená)
- Dočasný cíl nastavený uživatelem (výchozí barva žlutá)

Prvek `"tempTarget"` je spojený s klíčem `"key_show_temp_target"` (v dynPref), který řídí jeho viditelnost.

Klíč DynData (spojený s informací o barvě) je `"tempTarget"` (výchozí klíč DynData spojený s prvkem TempTarget)

Hodnota DynData je:

- 0 (cíl z profilu),
- 1 (cíl smyčky) nebo
- 2 (dočasný cíl uživatele)

Tento prvek je k dispozici také pro externí data (viz [níže](#cwf-reference-show-external-datas)) s klíči `"tempTarget_Ext1"` a `"tempTarget_Ext2"` (prvek a DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Nový prvek stavu zásobníku

Klíč tohoto prvku je `"reservoir"` a příslušný blok je automaticky součástí šablony exportované z wear apk „Custom Watchface V2“ (sestavené z AAPS verze 3.3.0 nebo novější).

Tento prvek zobrazuje stav zásobníku (v `U`) ve výchozí bílé barvě, žluté při úrovni varování a červené při naléhavé úrovni

Prvek `"reservoir"` je spojený s klíčem `"key_show_reservoir_level"` (v dynPref), který řídí jeho viditelnost.

Klíče DynData spojené se stavem zásobníku jsou:

-  `"reservoir"` (výchozí klíč DynData spojený s prvkem stavu zásobníku) spojený s množstvím inzulínu v `U`
  - Minimální hodnota je 0,0 U
  - Maximální hodnota je 500,0 U
-  `"reservoirLevel"`
  - 0 (standardní úroveň, ve výchozím stavu bílá barva)
  - 1 (úroveň varování, ve výchozím stavu žlutá barva)
  - 2 (naléhavá úroveň, ve výchozím stavu červená barva)

Tento prvek je k dispozici také pro externí data (viz [níže](#cwf-reference-show-external-datas)) s klíči `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` a `"reservoirLevel_Ext2"` (prvek a DynData).

(cwf-reference-new-formating-feature)=

#### Nová funkce formátování pro DynData nebo DynPref

Teď můžete nastavit vlastní formátování surových hodnot, které hodinky přijímají a které jsou uvedené v [tabulce hodnot klíčů dyndata](#cwf-reference-dyndata-key-values) níže.

Jak tato funkce funguje, si ukážeme na příkladu ciferníku AAPS (Large). Podíváme se na výsledky podle hodnoty „před kolika minutami“ a podle toho, zda je nový prvek „status“ viditelný, nebo ne:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- Na prvním snímku vlevo je prvek status viditelný (s IOB, podrobným IOB a BGI), takže pro zobrazení timestamp je k dispozici jen 1/3 řádku (velmi stručná informace `1'` a pro baterii telefonu `U: 55%`)
- Na druhém snímku je prvek `status` v parametrech hodinek skrytý, takže je dost místa na zobrazení celého popisku pro timestamp a baterii telefonu (`1 minute ago` a `Uploader : 55%`)
- Na třetím snímku vpravo je v hodinkách přesně stejné nastavení, ale timestamp se změnil a je vyšší než „1“. vlastní ciferník teď umí zobrazit aktualizovaný popisek i s množným číslem (`2 minutes ago`)

Nebudu níže vysvětlovat, jak jsou v souboru zip řešené všechny prvky (umístění každého prvku podle různých nastavení). Zaměřím se jen na to, jak v ciferníku AAPS (Large) funguje formátování a příslušná dynamická hodnota.



**Tato funkce vyžaduje „dynamický blok“** (může to být blok `dynData` nebo blok `dynPref`)

- U ciferníku AAPS (Large) jsme chtěli formát upravit podle parametrů (krátký nebo dlouhý formát podle viditelnosti prvku `status`), proto jsme k tomu použili blok `dynPref`.

Nejdřív začněme prvky:

```text
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
nejdůležitější klíč je zde `"dynValue"`: tento klíč zapne dynamické zpracování surové hodnoty. logická hodnota za ním (true nebo false) určuje, zda se hodnota má „převést, nebo ne“

- `false`: surová hodnota se použije tak, jak je, bez omezení nebo převodu
- `true`: surová hodnota se převede (pomocí klíčů `minData` a `maxData` v bloku dynData a pomocí `minValue` a `maxValue` definovaných v dynData)

U tohoto ciferníku se surové hodnoty používají bez převodu, proto je u obou prvků klíč `"dynValue"` nastaven na `false`.



Teď se podíváme na blok `"uploader"` definovaný v `"dynPref"`:

```text
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
Ve výchozím stavu je prvek `"uploader_battery"` propojený s `"uploader_battery"`, takže není třeba přidávat řádek

`"valueKey": "uploader_battery"` (minimální hodnota 0, maximální hodnota 100, surová hodnota je procento baterie telefonu)

Formátovací řetězec je v klíči `"textvalue1"` (klíče `"textvalue1"`, `"textvalue2"` atd. jsou propojené s klíčem `"textvalue"`, který může být v bloku `view`)

- Klíč `"textvalue"` lze použít s formátovací informací v bloku prvku (v tomto případě bude formát statický, bez ohledu na hodnotu nebo nastavení)
- Pokud chcete měnit formátování podle nastavení nebo hodnot, můžete použít celou funkci dynData. Speciální klíče jsou `"invalidTextValue"` (bez „formátovací informace“, protože hodnota není platná) a `"textvalue1"`, `"textvalue2"`... (a tolik hodnot, kolik kroků chcete mezi minData a maxData)
- další klíče `"dynPref"` slouží k určení dalších bloků pro změnu polohy a barvy podle viditelných prvků a nastavení dark a matchDivider

Formátovací řetězec má tuto syntaxi: `%[flags][width][.precision]f`

- `%` je začátek formátování, `f` je konec a používá se pro převod hodnoty Double.
  - Pokud chcete v řetězci použít znak `%`, musíte napsat `%%`, aby bylo jasné, že nejde o formátovací řetězec, ale o znak procenta.
- `[flag]` je nepovinný, obvykle to může být `+`, pokud chcete před číslem vždy znaménko, nebo `(`, pokud chcete záporné hodnoty v závorkách
- `[width]` je nepovinný, určuje minimální počet znaků na výstupu
- `[.precision]` určuje počet číslic za desetinnou tečkou.
  - Hodnoty jsou typu Double, takže je rozumné vždy nastavit přesnost (aby se kvůli přesnosti v kotlinu nezobrazovalo mnoho znaků za desetinnou tečkou)

Ve výše uvedeném příkladu tedy `%.0f` zobrazí hodnotu Double jako celé číslo



Teď se podívejme na blok dynPref timestamp, který řeší jednotné a množné číslo:

```text
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- here if `status` view is visible (so  `"key_show_loop_status"` key is `true`), a single format is used (`"textvalue1"`), with `'`  as "unit"
- pokud je prvek `status` skrytý, použijí se 2 různé formáty: jeden pro 0 nebo 1 v jednotném čísle a druhý pro hodnoty od 2 v množném čísle
  - `"minData"` a `"maxData"` slouží k určení rozsahu, aby se přepnutí z jednotného na množné číslo stalo mezi hodnotami 1 a 2
  - `"maxData"` (celé číslo) je nastaveno na 3, a ne na 2, protože data typu Double v systému nejsou celá čísla. Hodnota trochu nad nebo trochu pod 1 by tak mohla mít jednotné nebo množné číslo, i když po zaokrouhlení na celé číslo je hodnota rovna 1.

- U prvku `timestamp` je důležité nastavit klíč `"dynValue"` na `false`, jinak by kvůli formátování (jednotné/množné číslo) byly všechny hodnoty nad 3 omezené na `3 minutes ago` převodem pomocí `maxData`...



**Další poznámky k funkci formátování**

- pamatujte, že jediné dostupné dynamické hodnoty jsou ty, které jsou uvedené [zde](#cwf-reference-dyndata-key-values)
- Všechny hodnoty `BG` jsou v jednotkách mg/dl. Pokud chcete pomocí formátování zobrazit hodnoty v mmol, musíte převod z mg/dl na mmol vyřešit sami. V bloku `dynData` nebo `dynPref` se klíč pro blok, který obsahuje `"minValue"` a `"maxValue"` pro převod hodnoty, musí jmenovat `"dynValue": { ...  }`. (viz [Klíče DynData](#cwf-reference-dyndata-keys))
- Pokud chcete v prvku použít statický formátovací řetězec, s klíčem `"textvalue"` pro formát a klíčem `"dynValue"` pro použití dynamické hodnoty, musíte také použít blok `"dynData"` nebo `"dynPref"` (i prázdný), aby formátování fungovalo.
- `"textvalue1"`, `"textvalue2"` až textvalue*n* lze použít i bez formátování, aby se krok hodnoty double nahradil vlastním textovým popiskem (například s hodnotou klíče `"day_name"` a sedmi kroky pro vlastní názvy dnů v týdnu, ...)

- Úplnou dokumentaci najdete v [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Zobrazení externích dat pro sledující

Vlastní ciferník teď umí na jednom ciferníku zobrazit až 3 sady dat: AAPS, AAPSCLIENT a AAPSCLIENT2

Pro použití této funkce musíte:

- mít v telefonu nainstalované alespoň 2 z těchto 3 aplikací (AAPS, AAPSCLIENT, AAPSCLIENT2)
- v AAPSCLIENT a/nebo AAPSCLIENT2 zapnout vysílání dat (Broadcast data), aby se data posílala do hlavní aplikace, která se synchronizuje s CustomWatchface (AAPS nebo AAPSCLIENT)
- Použít CustomWatchface, který obsahuje prvky s klíči s `_Ext1` nebo `_Ext2` (viz [Přehled klíčů a hodnot klíčů](#cwf-reference-key-and-keyvalue-reference) níže)

Pokud je hlavní aplikace v telefonu AAPSCLIENT a druhá aplikace, která vysílá data, je AAPSCLIENT2, musíte v parametrech vlastního ciferníku zapnout parametr `Switch external data in watchface`, pokud používáte ciferník se standardními prvky a s dalšími prvky Ext1 (Ext1 je propojený s AAPSCLIENT a Ext2 s AAPSCLIENT2)

Navíc byly přidány tři nové prvky (`"patient_name"`, `"patient_name_Ext1"` a `"patient_name_Ext2"` *), které na ciferníku automaticky zobrazí jméno pacienta (nastavené v předvolbách AAPS) (viz příklad níže)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Přehled klíčů a hodnot klíčů

(cwf-reference-list-of-metadata-keys)=

### Seznam klíčů metadat

(cwf-reference-list-of-standard-metadata-keys)=

#### Seznam standardních informačních klíčů metadat

| Klíč               | Komentář                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Název vlastního ciferníku                                                                                              |
| `"author"`         | Jméno nebo přezdívka autora (autorů)                                                                                   |
| `"created_at"`     | Datum vytvoření (nebo aktualizace). Pozor, `/` je speciální znak, takže pokud ho v datu použijete, dejte před něj `\` |
| `"cwf_version"`    | Plugin ciferníku, který je kompatibilní s návrhem vašeho ciferníku                                                     |
| `"author_version"` | Autor zde může uvést verzi svého ciferníku                                                                             |
| `"comment"`        | Volný text, kterým lze uvést informace nebo omezení tohoto ciferníku                                                   |

(cwf-reference-preference-keys)=

#### Klíče předvoleb

| Klíč                          | Výchozí hodnota a komentář                                                                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true zamkne na prvku `iob2` podrobné údaje IOB, pak `iob1` (pokud je viditelný a není nahrazený ikonou) ukáže celkové IOB.<br />false zamkne na prvku `iob2` celkové IOB. lze použít, pokud je `iob2` příliš úzký na správné zobrazení podrobného IOB |
| `"key_show_detailed_delta"`   | false (jen pokud návrh není kompatibilní se šířkou podrobného rozdílu pro prvky `delta` a `avg_delta`)                                                                                                                                                      |
| `"key_show_bgi"`              | true, pokud váš návrh potřebuje informaci `bgi`                                                                                                                                                                                                             |
| `"key_show_iob"`              | true, pokud váš návrh potřebuje prvky `iob1` nebo `iob2`                                                                                                                                                                                                    |
| `"key_show_cob"`              | true, pokud váš návrh potřebuje prvky `cob1` nebo `cob2`                                                                                                                                                                                                    |
| `"key_show_delta"`            | true, pokud váš návrh potřebuje informaci `delta`                                                                                                                                                                                                           |
| `"key_show_avg_delta"`        | true, pokud váš návrh potřebuje informaci `avg_delta`                                                                                                                                                                                                       |
| `"key_show_temp_target"`      | true, pokud váš návrh potřebuje informaci `tempTarget`                                                                                                                                                                                                      |
| `"key_show_reservoir_level"`  | true, pokud váš návrh potřebuje informaci `reservoir`                                                                                                                                                                                                       |
| `"key_show_uploader_battery"` | true, pokud váš návrh potřebuje informaci `uploader_battery` (baterie telefonu)                                                                                                                                                                             |
| `"key_show_rig_battery"`      | true, pokud váš návrh potřebuje informaci `rig_battery`                                                                                                                                                                                                     |
| `"key_show_temp_basal"`       | true, pokud váš návrh potřebuje informaci `basalRate`                                                                                                                                                                                                       |
| `"key_show_direction"`        | true, pokud váš návrh potřebuje informaci `direction` (šipky změny glykémie)                                                                                                                                                                                |
| `"key_show_ago"`              | true, pokud váš návrh potřebuje informaci `timestamp` (před kolika minutami přišla poslední glykémie)                                                                                                                                                       |
| `"key_show_bg"`               | true, pokud váš návrh potřebuje informaci `sgv` (hodnota glykémie)                                                                                                                                                                                          |
| `"key_show_loop_status"`      | true, pokud váš návrh potřebuje informaci `loop` (stav smyčky a doba od posledního běhu)                                                                                                                                                                    |
| `"key_show_week_number"`      | true if your design requires `week_number` information                                                                                                                                                                                                      |
| `"key_show_date"`             | true, pokud váš návrh potřebuje informaci `Date`, `Month` nebo `Day of the week`                                                                                                                                                                            |

#### Interní klíče

| Klíč                  | Komentář                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"filename"`          | Tento klíč se vytvoří (nebo aktualizuje) automaticky při nahrání ciferníku a bude obsahovat název místního souboru zip ve složce exports                           |
| `"cwf_authorization"` | tento klíč se vytvoří (při nahrání ciferníku) a aktualizuje pokaždé, když se v nastavení Wear změní předvolba povolení. Slouží k synchronizaci povolení do hodinek |

(cwf-reference-list-of-general-parameters)=

### Seznam obecných parametrů

| Klíč                     | Komentář                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"` (výchozí žlutá): barva hodnoty glykémie, šipek trendu a hodnot glykémie v grafu, pokud je glykémie nad horní hranicí (hyperglykémie)                                                                                      |
| `"midColor"`             | `"#00FF00"` (výchozí zelená): barva hodnoty glykémie, šipek trendu a hodnot glykémie v grafu, pokud je glykémie v rozsahu                                                                                                             |
| `"lowColor"`             | `"#FF0000"` (výchozí červená): barva hodnoty glykémie, šipek trendu a hodnot glykémie v grafu, pokud je glykémie pod dolní hranicí (hypoglykémie)                                                                                     |
| `"lowBatColor"`          | `"#E53935"` (výchozí tmavě červená): barva `uploader_battery`, když je hodnota nízká (pod 20 %, bude upřesněno)                                                                                                                       |
| `"carbColor"`            | `"#FB8C00"` (výchozí oranžová): barva bodů sacharidů v grafu                                                                                                                                                                          |
| `"basalBackgroundColor"` | `"#0000FF"` (výchozí tmavě modrá): barva křivky TBR v grafu                                                                                                                                                                           |
| `"basalCenterColor"`     | `"#64B5F6"` (výchozí světle modrá): barva bodů bolusů nebo SMB v grafu                                                                                                                                                                |
| `"gridColor"`            | `"#FFFFFF"` (výchozí bílá): barva čar a textu stupnice v grafu                                                                                                                                                                        |
| `"pointSize"`            | 2 (výchozí): velikost bodů v grafu (1 pro malé body, 2 pro velké body)                                                                                                                                                                |
| `"enableSecond"`         | false (výchozí): určuje, zda ciferník bude zobrazovat vteřiny v prvcích `time`, `second` nebo `second_hand`. je důležité, aby viditelnost prvků odpovídala tomuto celkovému nastavení, které umožňuje aktualizovat čas každou vteřinu |
| `"dayNameFormat"`        | "E" (výchozí): od "E" do "EEEE" určuje formát názvu dne (číslo, krátký název, celý název) – bude upřesněno                                                                                                                            |
| `"monthFormat"`          | "MMM" (výchozí): od "M" do "MMMM" určuje formát měsíce (číslo, krátký název, celý název)                                                                                                                                              |

(cwf-reference-list-of-hardcoded-resource-files)=

### Seznam pevně daných souborů zdrojů

U většiny obrázků umožňují přípony High a Low upravit obrázek podle úrovně glykémie (v rozsahu, hyperglykémie nebo hypoglykémie)

| Názvy souborů                                                   | Komentář                                                                                                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CustomWatchface                                                 | Obrázek zobrazený při výběru ciferníku a v pluginu Wear                                                                                                                  |
| Background,<br />BackgroundHigh,<br />BackgroundLow | žádný (výchozí černá): obrázek pozadí. pozadí je vždy viditelné a pokud není zadán žádný obrázek, výchozí barva je černá. Barvu lze změnit podle návrhu ciferníku        |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | žádný (výchozí): obrázek před grafem (musí mít průhlednost, aby byl graf za ním vidět). Lze ho použít k ohraničení grafu                                                 |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | jednoduchý ciferník (výchozí): obrázek před všemi textovými hodnotami. průhlednost je nutná, aby byly vidět všechny hodnoty za ním                                       |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (výchozí): obrázek hodinové ručičky. výchozí obrázek je k dispozici a lze ho obarvit podle analogového návrhu. Poznámka: osa otáčení bude ve středu obrázku    |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (výchozí): obrázek minutové ručičky. výchozí obrázek je k dispozici a lze ho obarvit podle analogového návrhu. Poznámka: osa otáčení bude ve středu obrázku  |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (výchozí): obrázek vteřinové ručičky. výchozí obrázek je k dispozici a lze ho obarvit podle analogového návrhu. Poznámka: osa otáčení bude ve středu obrázku |
| ArrowNone                                                       | ?? (výchozí): obrázek zobrazený, když není k dispozici platná šipka.                                                                                                     |
| ArrowDoubleUp                                                   | ↑↑ (výchozí): obrázek dvojité šipky nahoru                                                                                                                               |
| ArrowSingleUp                                                   | ↑ (výchozí): obrázek jednoduché šipky nahoru                                                                                                                             |
| Arrow45Up                                                       | ↗ (výchozí): obrázek šipky šikmo nahoru (45°)                                                                                                                            |
| ArrowFlat                                                       | → (výchozí): obrázek vodorovné šipky                                                                                                                                     |
| Arrow45Down                                                     | ↘ (výchozí): obrázek šipky šikmo dolů (45°)                                                                                                                              |
| ArrowSingleDown                                                 | ↓ (výchozí): obrázek jednoduché šipky dolů                                                                                                                               |
| ArrowDoubleDown                                                 | ↓↓ (výchozí): obrázek dvojité šipky dolů                                                                                                                                 |

U každého z výše uvedených názvů souborů může být přípona `.jpg`, `.png` nebo `.svg`. Ale pozor, `.jpg` nepodporuje průhlednost (většina souborů by tedy měla být .png nebo .svg, aby nezakryly prvky za nimi...)

(cwf-reference-list-of-view-keys)=

### Seznam klíčů prvků

Tento seznam je seřazený od pozadí k popředí. Při uspořádání ciferníku je velmi důležité toto pořadí znát, protože některé obrázky nebo texty mohou být zakryté jinými obrázky.

Poznámka: všechny klíče s `_Ext1` nebo `_Ext2` na konci jsou nové a určené pro ciferníky s více uživateli.

| Klíč                                                                                   | Typ prvku            | Připojená data                                                                                                                       | Klíč DynData                                                                                                                                     |
| -------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Image View           |                                                                                                                                      |                                                                                                                                                  |
| `"chart"`                                                                              | Speciální Chart View | Grafické křivky                                                                                                                      |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Image View           |                                                                                                                                      |                                                                                                                                                  |
| `"freetext1"`                                                                          | Text View            |                                                                                                                                      |                                                                                                                                                  |
| `"freetext2"`                                                                          | Text View            |                                                                                                                                      |                                                                                                                                                  |
| `"freetext3"`                                                                          | Text View            |                                                                                                                                      |                                                                                                                                                  |
| `"freetext4"`                                                                          | Text View            |                                                                                                                                      |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Text View            | Jméno pacienta                                                                                                                       |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Text View            | Popisek IOB nebo celkové IOB                                                                                                         |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Text View            | Celkové IOB nebo podrobné IOB                                                                                                        |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Text View            | Popisek sacharidů                                                                                                                    |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Text View            | Hodnota COB                                                                                                                          |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Text View            | Krátký rozdíl (5 min)                                                                                                                | delta  
delta_Ext1<br/>delta_Ext2                                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Text View            | Průměrný rozdíl (15 min)                                                                                                             | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Text View            | Cílová glykémie (jedna hodnota nebo cíle min – max)                                                                                  | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Text View            | Stav zásobníku                                                                                                                       | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Text View            | stav baterie telefonu (%)                                                                                                            | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Text View            | stav baterie rigu (%)                                                                                                                | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Text View            | % nebo absolutní hodnota                                                                                                             |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi_Ext2"` *                              | Text View            | mgdl/(5 min) nebo mmol/(5 min)                                                                                                       |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Text View            | Souhrn IOB (bez ohledu na nastavení IOB v hodinkách), podrobné IOB (podle nastavení v hodinkách) a BGI (podle nastavení v hodinkách) |                                                                                                                                                  |
| `"time"`                                                                               | Text View            | HH:MM nebo HH:MM:SS                                                                                                                  |                                                                                                                                                  |
| `"hour"`                                                                               | Text View            | HH                                                                                                                                   |                                                                                                                                                  |
| `"minute"`                                                                             | Text View            | MM                                                                                                                                   |                                                                                                                                                  |
| `"second"`                                                                             | Text View            | SS                                                                                                                                   |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Text View            | AM nebo PM                                                                                                                           |                                                                                                                                                  |
| `"day_name"`                                                                           | Text View            | název dne (viz dayNameFormat)                                                                                                        | day_name                                                                                                                                         |
| `"day"`                                                                                | Text View            | DD datum                                                                                                                             | day                                                                                                                                              |
| `"week_number"`                                                                        | Text View            | (WW) číslo týdne                                                                                                                     | week_number                                                                                                                                      |
| `"month"`                                                                              | Text View            | název měsíce (viz monthFormat)                                                                                                       |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Text View            | minuty od posledního běhu a stav (barevné šipky na pozadí), barevné šipky lze upravit pomocí DynData                                 | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Image View           | TrendArrows                                                                                                                          | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Text View            | celé číslo (před kolika minutami)                                                                                                    | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Text View            | hodnota sgv (mgdl nebo mmol)                                                                                                         | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Image View           |                                                                                                                                      |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Image View           |                                                                                                                                      |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Image View           |                                                                                                                                      |                                                                                                                                                  |
| `"second_hand"`                                                                        | Image View           |                                                                                                                                      |                                                                                                                                                  |

**Prvek přidaný v Custom Watchface V2.0 nebo novějším (k dispozici ve wear apk AAPS 3.3.0 nebo novější)*

(cwf-reference-list-of-json-keys)=

### Seznam klíčů json

(cwf-reference-common-keys)=

#### Společné klíče

 které lze použít u všech typů prvků (Text View, Image View, graf)

| Klíč                     | typ     | komentář / hodnota                                                                                                                                                                                 |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"width"`                | int     | šířka prvku v pixelech                                                                                                                                                                             |
| `"height"`               | int     | výška prvku v pixelech                                                                                                                                                                             |
| `"topmargin"`            | int     | horní okraj v pixelech                                                                                                                                                                             |
| `"leftmargin"`           | int     | levý okraj v pixelech                                                                                                                                                                              |
| `"rotation"`             | int     | úhel otočení ve stupních                                                                                                                                                                           |
| `"visibility"`           | string  | viz tabulka hodnot klíčů                                                                                                                                                                           |
| `"dynData"`              | string  | název bloku klíčů, který určuje dynamická data k propojení a příslušnou animaci (barvy, obrázek, posun, otočení)<br />`"dynData": "customName",` (viz níže)                                  |
| `"leftOffset"`           | boolean | přidejte tento klíč s hodnotou true, abyste zapnuli vodorovný posun (kladná nebo záporná hodnota) podle hodnoty dynData                                                                            |
| `"topOffset"`            | boolean | přidejte tento klíč s hodnotou true, abyste zapnuli svislý posun (kladná nebo záporná hodnota) podle hodnoty dynData                                                                               |
| `"rotationOffset"`       | boolean | přidejte tento klíč s hodnotou true, abyste zapnuli otáčení (kladná nebo záporná hodnota) podle hodnoty dynData                                                                                    |
| `"twinView"`             | string  | klíč druhého prvku (druhý prvek obvykle také obsahuje parametr twinView s klíčem tohoto prvku)                                                                                                     |
| `"topOffsetTwinHidden"`  | int     | počet pixelů, o které se poloha prvku posune svisle, pokud je dvojitý prvek skrytý (kladná nebo záporná hodnota)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2      |
| `"leftOffsetTwinHidden"` | int     | počet pixelů, o které se poloha prvku posune vodorovně, pokud je dvojitý prvek skrytý (kladná nebo záporná hodnota)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2 |
| `"dynPref"`              | string  | název bloku klíčů, který určuje dynamickou předvolbu k propojení a příslušnou animaci (barvy, obrázek, posun, otočení)<br />`"dynPref": "customName",` (viz níže)                            |

(cwf-reference-textview-keys)=

#### Klíče TextView

| Klíč           | typ     | komentář                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"textsize"`   | int     | velikost písma v pixelech (pamatujte, že písmo může mít horní a dolní okraj, takže skutečná velikost textu bude obvykle menší než nastavený počet pixelů). Velikost musí být menší než výška prvku, aby se text neořízl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"gravity"`    | string  | viz tabulka hodnot klíčů                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"font"`       | string  | dostupná písma najdete v tabulce hodnot klíčů.<br />Může to být také název souboru písma (bez přípony) pro písma vložená do souboru zip                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `"fontStyle"`  | string  | viz tabulka hodnot klíčů                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"fontColor"`  | string  | Manage color of the font<br />`"#RRGGBB"`: color code in RGB format, hexadecimal values #FF0000 is red<br />`"#AARRGGBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"allCaps"`    | boolean | true, pokud chcete text velkými písmeny (hlavně název dne nebo měsíce)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `"background"` | string  | `resource_filename` můžete vložit obrázek ze zdrojů jako pozadí textového prvku (soubor se zmenší nebo zvětší na výšku a šířku textového prvku, ale zachová poměr stran). textová hodnota bude před obrázkem pozadí.<br />- Tento klíč lze použít také u prvku `chart` k nastavení vlastního pozadí grafu před obrázkem pozadí                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"color"`      | string  | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRGGBB"`: color code in RGB format, hexadecimal values #FF0000 is red<br />`"#AARRGGBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on image<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |
| `"textvalue"`  | string  | Klíč určený pro 4 volné textové prvky v rozvržení (od freetext1 do freetext4). Umožňuje nastavit text, který se má zobrazit (může to být popisek nebo jen `:`, pokud chcete přidat oddělovač mezi prvek hodin a prvek minut...)  
Od pluginu Custom Watchface v2 (AAPS 3.3) lze textvalue použít i pro formátovací řetězec u ostatních textView (použijte s klíčem `dynValue` a s `dynData` nebo `dynPref`). například                                                                                                                                                                                                                                                                                                                                                                                       |
| `"dynValue"`*  | boolean | true, pokud chcete vložit surovou hodnotu (double). Useful with `textvalue` key if you want a dedicated format to show value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

**Klíč přidaný v Custom Watchface V2.0 nebo novějším (k dispozici ve wear apk AAPS 3.3.0 nebo novější)*

(cwf-reference-imageview-keys)=

#### Klíče ImageView

| Klíč      | typ    | komentář                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"color"` | string | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRGGBB"`: color code in RGB format, hexadecimal values #FF0000 is red<br />`"#AARRGGBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on image<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |

(cwf-reference-chartview-keys)=

#### Klíče ChartView

| Klíč           | typ    | komentář                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"color"`      | string | Manage the color of view Background or tune color of image (if bitmap only)<br />`"#RRGGBB"`: color code in RGB format, hexadecimal values #FF0000 is red<br />`"#AARRGGBB"`: AA include Alpha information (transparency), 00 is transparent, FF is opaque<br />`"bgColor"`: keyValue bgColor is an easy way to use highColor, midColor or lowColor according to BG value<br />- For default embedded image (hand, dial) color will be applied directly, for bitmap image (jpg or png) this will apply a saturation gradient filter on image<br />- For svg this parameter will have no effect (color of svg files cannot be modified)<br />- Note that this key can also be used for `chart` view to set a custom background to the chart, in front of background image |
| `"background"` | string | `resource_filename` můžete vložit obrázek ze zdrojů jako pozadí textového prvku (soubor se zmenší nebo zvětší na výšku a šířku textového prvku, ale zachová poměr stran). textová hodnota bude před obrázkem pozadí.<br />- Tento klíč lze použít také u prvku `chart` k nastavení vlastního pozadí grafu před obrázkem pozadí                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

(cwf-reference-key-values)=

### Hodnoty klíčů

| Hodnota klíče                | klíč       | komentář                                                                                 |
| ---------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `"gone"`                     | visibility | prvek je skrytý                                                                          |
| `"visible"`                  | visibility | prvek je viditelný na ciferníku (viditelnost ale lze zapnout nebo vypnout v parametrech) |
| `"center"`                   | gravity    | text je v prvku vycentrovaný svisle i vodorovně                                          |
| `"left"`                     | gravity    | text je v prvku vycentrovaný svisle, ale zarovnaný vlevo                                 |
| `"right"`                    | gravity    | text je v prvku vycentrovaný svisle, ale zarovnaný vpravo                                |
| `"sans_serif"`               | font       |                                                                                          |
| `"default"`                  | font       |                                                                                          |
| `"default_bold"`             | font       |                                                                                          |
| `"monospace"`                | font       |                                                                                          |
| `"serif"`                    | font       |                                                                                          |
| `"roboto_condensed_bold"`    | font       |                                                                                          |
| `"roboto_condensed_light"`   | font       |                                                                                          |
| `"roboto_condensed_regular"` | font       |                                                                                          |
| `"roboto_slab_light"`        | font       |                                                                                          |
| `"normal"`                   | fontStyle  |                                                                                          |
| `"bold"`                     | fontStyle  |                                                                                          |
| `"bold_italic"`              | fontStyle  |                                                                                          |
| `"italic"`                   | fontStyle  |                                                                                          |

(cwf-reference-dyndata-keys)=

### Klíče DynData

| Klíč                      | typ    | komentář                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | block  | určuje blok všech bloků dynamických dat, které se použijí pro prvky. obvykle za posledním prvkem.<br />Všechny klíče definované v tomto bloku se použijí jako hodnota klíče v bloku prvku:<br />`"dynData": { dynData blocks }`<br />a každý blok je definován vlastním názvem a několika klíči uvnitř:<br />`"customName": { one dynData block }`                                                                                                         |
| `"valueKey"`              | string | název dynamických dat, která se mají použít (obvykle stejný jako klíč příslušného prvku).<br />Pokud není uveden, použijí se jako výchozí hodnoty prvku, který tento blok používá. <br />například můžete definovat jeden blok pro úpravu procent stavu baterie bez zadání valueKey a pak stejný blok použít pro úpravu uploader_battery i rig_battery                                                                                                               |
| `"minData"`               | int    | určuje minimální hodnotu dat AAPS, která se bere v úvahu: například pokud je hodnota sgv (interně v jednotkách mgdl) a minData je nastaveno na 50, všechny glykémie pod 50 mg/dl se nastaví na 50.<br />- minData a maxData se použijí k výpočtu dynamických hodnot (v pixelech nebo ve stupních).                                                                                                                                                                           |
| `"maxData"`               | int    | určuje maximální hodnotu dat AAPS, která se bere v úvahu: například pokud je hodnota sgv (interně v jednotkách mgdl) a maxData je nastaveno na 330, všechny glykémie nad 330 mg/dl se nastaví na 330.                                                                                                                                                                                                                                                                              |
| `"leftOffset"`            | block  | Určuje vodorovný posun prvku v pixelech podle minimální a maximální hodnoty.<br />- Obsahuje klíč minValue, klíč maxValue a klíč invalidValue (nepovinný)<br />- Pokud jsou data nižší nebo rovna minData, prvek se posune o minValue pixelů, a pokud jsou data vyšší nebo rovna maxData, prvek se posune o maxValue pixelů<br />Aby se tento posun použil, musí být v prvku `leftOffset` nastaven na true                                                       |
| `"topOffset"`             | block  | Určuje svislý posun prvku v pixelech podle minimální a maximální hodnoty.<br />- Obsahuje klíč minValue, klíč maxValue a klíč invalidValue (nepovinný)<br />- Pokud jsou data nižší nebo rovna minData, prvek se posune o minValue pixelů, a pokud jsou data vyšší nebo rovna maxData, prvek se posune o maxValue pixelů<br />Aby se tento posun použil, musí být v prvku topOffset nastaven na true                                                             |
| `"rotationOffset"`        | block  | Určuje úhel otočení prvku ve stupních podle minimální a maximální hodnoty.<br />- Obsahuje klíč `minValue`, klíč `maxValue` a klíč `invalidValue` (nepovinný)<br />- Pokud jsou data nižší nebo rovna `minData`, prvek se otočí o `minValue` stupňů, a pokud jsou data vyšší nebo rovna `maxData`, prvek se otočí o `maxValue` stupňů<br />Aby se toto otočení použilo, musí být v prvku `rotationOffset` nastaven na true                                       |
| `"dynValue"`*             | block  | Určuje převod dynValue z rozsahu min a max na hodnoty min a max v pixelech.<br />- Obsahuje klíč `minValue`, klíč `maxValue` a klíč `invalidValue` (nepovinný)<br />- Pokud jsou data nižší nebo rovna `minData`, odeslaná dynValue bude minValue (převedená na double), a pokud jsou data vyšší nebo rovna `maxData`, vypočtená dynValue bude maxValue (převedená na double)<br />Aby se tento převod použil, musí být v prvku klíč `dynValue` nastaven na true |
| `"minValue"`              | int    | výsledná hodnota, která se použije na prvek (klíč platí jen v bloku leftOffset, topOffset nebo rotationOffset)                                                                                                                                                                                                                                                                                                                                                                     |
| `"maxValue"`              | int    | výsledná hodnota, která se použije na prvek (klíč platí jen v bloku leftOffset, topOffset nebo rotationOffset)                                                                                                                                                                                                                                                                                                                                                                     |
| `"invalidValue"`          | int    | výsledná hodnota, která se použije na prvek, pokud jsou data neplatná (klíč platí jen v bloku leftOffset, topOffset nebo rotationOffset)                                                                                                                                                                                                                                                                                                                                           |
| `"invalidImage"`          | string | `resource_filename`, který se použije pro ImageView nebo pozadí TextView, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                 |
| image*1_to_n*           | string | `resource_filename` obrázek pro každý krok mezi minData (nebo blízko minData) s `"image1"` a maxData (nebo blízko maxData) s image*n*<br />Pokud například vložíte 5 obrázků (od image1 do image5), rozsah mezi minData a maxData se rozdělí na 5 kroků a podle hodnoty dat se zobrazí příslušný obrázek                                                                                                                                                                     |
| `"invalidFontColor"`      | string | Manage fontColor steps if the data is invalid<br />`"#RRGGBB"` or `"#AARRGGBB"`: Color to use if an invalid data is received (can be transparent if AA=00)                                                                                                                                                                                                                                                                                                                   |
| fontColor*1_to_n*       | string | Manage fontColor steps<br />`"#RRGGBB"` or `"#AARRGGBB"`: color to use for each step between minData (or close to minData) with `"fontColor1"` and maxData (or close to maxData) with fontColor*n*                                                                                                                                                                                                                                                                           |
| `"invalidColor"`          | string | Manage background color or image color steps if the data is invalid<br />`"#RRGGBB"` or `"#AARRGGBB"`: Color to use if an invalid data is received (can be transparent if AA=00)                                                                                                                                                                                                                                                                                             |
| color*1_to_n*           | string | Manage background color or image Color steps<br />`"#RRGGBB"` or `"#AARRGGBB"`: color to use for each step between minData (or close to minData) with `"color1"` and maxData (or close to maxData) with color*n*                                                                                                                                                                                                                                                             |
| `"invalidTextSize"`       | int    | Řídí kroky velikosti textu, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                                                               |
| textsize*1_to_n*        | int    | Řídí velikost textu pro každý krok mezi minData (nebo blízko minData) s `"textsize1"` a maxData (nebo blízko maxData) s textsize*n*                                                                                                                                                                                                                                                                                                                                                |
| `"invalidLeftOffset"`     | int    | Řídí kroky leftOffset, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| leftOffset*1_to_n*      | int    | Řídí leftOffset pro každý krok mezi minData (nebo blízko minData) s `"leftOffset1"` a maxData (nebo blízko maxData) s leftOffset*n*<br />Lze použít s dynPref k posunu prvku, když je jiný skrytý...                                                                                                                                                                                                                                                                         |
| `"invalidTopOffset"`      | int    | Řídí kroky topOffset, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| topOffset*1_to_n*       | int    | Řídí topOffset pro každý krok mezi minData (nebo blízko minData) s topOffset1 a maxData (nebo blízko maxData) s topOffset*n*<br />Lze použít s dynPref k posunu prvku, když je jiný skrytý...                                                                                                                                                                                                                                                                                |
| `"invalidRotationOffset"` | int    | Řídí kroky rotationOffset, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                                                                |
| rotationOffset*1_to_n*  | int    | Řídí rotationOffset pro každý krok mezi minData (nebo blízko minData) s rotationOffset1 a maxData (nebo blízko maxData) s rotationOffset*n*                                                                                                                                                                                                                                                                                                                                        |
| `"invalidTextvalue"`*     | string | Řídí textvalue, pokud jsou data neplatná                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| textvalue*1_to_n* *     | string | Manage textvalue to use for each step between minData (or close to minData) with textvalue1 and maxData (or close to maxData) with textvalue*n*<br />Note, can include formatting string if `"dynValue"` is set to true within view                                                                                                                                                                                                                                          |

**Klíč přidaný v Custom Watchface V2.0 nebo novějším (k dispozici ve wear apk AAPS 3.3.0 nebo novější)*

(cwf-reference-dyndata-key-values)=

### Hodnoty klíčů DynData

| Hodnota klíče                                                                               | klíč     | komentář                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | výchozí minData = 39 mgdl<br />výchozí maxData = 400 mgdl<br />- Skutečná maxData závisí na vašem senzoru a vnitřní hodnoty jsou vždy v mgdl                                                                                   |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | výchozí minData = -1 (hypoglykémie)<br />výchozí maxData = 1 (hyperglykémie)<br />pokud je glykémie v rozsahu = 0                                                                                                              |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | výchozí minData = 1 (dvojitá šipka dolů)<br />výchozí maxValue = 7 (dvojitá šipka nahoru)<br />vodorovná šipka = 4<br />Chyba nebo chybějící data = 0 (??)                                                               |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | výchozí minData = -25 mgdl<br />výchozí maxData = 25 mgdl<br />- Skutečné min a maxData mohou být i vyšší a vnitřní hodnoty jsou vždy v mgdl                                                                                   |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | výchozí minData = -25 mgdl<br />výchozí maxData = 25 mgdl<br />- Skutečné min a maxData mohou být i vyšší a vnitřní hodnoty jsou vždy v mgdl                                                                                   |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | výchozí minData = 0 (cíl z profilu)<br />výchozí maxData = 2 (dočasný cíl)<br />Cíl upravený smyčkou = 1<br/>Výchozí nebo chybějící informace = 0                                                                        |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | výchozí minData = 0 U<br />výchozí maxData = 500 U                                                                                                                                                                                   |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | výchozí minData = 0 (standardní barva)<br/>výchozí maxData = 2 (naléhavá barva)<br/>Barva varování = 1                                                                                                                         |
| `"uploader_battery"`                                                                        | valueKey | výchozí minData = 0 %<br />výchozí maxData = 100 %                                                                                                                                                                                   |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | výchozí minData = 0 %<br />výchozí maxData = 100 %                                                                                                                                                                                   |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | výchozí minData = 0 min<br />výchozí maxData = 60 min                                                                                                                                                                                |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | výchozí minData = 0 min<br />výchozí maxData = 28 min<br />- Šipky stavu jsou zelené pod 14 min a červené nad 14 min. Pokud tedy vložíte 2 obrázky, můžete při výchozích min a maxData nahradit pozadí stavu vlastními obrázky |
| `"day"`                                                                                     | valueKey | výchozí minData = 1<br />výchozí maxData = 31                                                                                                                                                                                        |
| `"day_name"`                                                                                | valueKey | výchozí minData = 1<br />výchozí maxData = 7                                                                                                                                                                                         |
| `"month"`                                                                                   | valueKey | výchozí minData = 1<br />výchozí maxData = 12                                                                                                                                                                                        |
| `"week_number"`                                                                             | valueKey | výchozí minData = 1<br />výchozí maxData = 53                                                                                                                                                                                        |

**Klíč přidaný v Custom Watchface V2.0 nebo novějším (k dispozici ve wear apk AAPS 3.3.0 nebo novější)*

(cwf-reference-dynpref-keys)=

### Klíče DynPref

| Klíč             | typ    | komentář                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | block  | určuje blok všech bloků dynamických předvoleb, které se použijí pro prvky. Obvykle za posledním prvkem nebo za blokem dynData.<br />Všechny klíče definované v tomto bloku se použijí jako hodnota klíče v bloku prvku:<br />`"dynPref": { dynPref blocks }`<br />a každý blok je definován vlastním názvem a několika klíči uvnitř:<br />`"customName": { one dynPref block }`                                                                                |
| `"dynPref"`      | string | *V bloku prvku*<br />název bloku dynPref, který se má použít (obvykle stejný jako klíč příslušného prvku nebo příslušné předvolby).                                                                                                                                                                                                                                                                                                                                              |
| `"dynPref"`      | string | *V částečném bloku dynData uvnitř bloku dynPref*<br />název bloku dynPref, který se použije k doplnění bloku dynData. To vám umožní upravit blok dynData podle několika předvoleb                                                                                                                                                                                                                                                                                                |
| `"dynPrefColor"` | string | tento klíč patří jen do hlavního bloku se všemi hlavními barvami (highColor, midColor, lowColor, barvy grafu...). použijete ho, pokud chcete upravit hlavní barvy podle předvoleb                                                                                                                                                                                                                                                                                                      |
| `"prefKey"`      | string | určuje hodnotu klíče předvolby, která se použije pro načtení předvoleb uživatele (viz [Hodnoty PrefKey](#cwf-reference-prefkey-values) níže). Tento klíč se používá v bloku `dynPref`.<br />Podle klíče předvolby pak musí blok `dynPref` obsahovat tolik klíčů, kolik hodnot má prefKey.<br />Většina předvoleb je typu „Boolean“, takže v bloku dynPref najdete tyto dva bloky dynData: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | block  | většina předvoleb nastavuje logickou hodnotu `"true"` nebo `"false"`. Zadáte blok dynData, který se použije, pokud je předvolba vybraná uživatelem true.<br />Pokud blok obsahuje také klíč `"dynPref":`, blok dynData se sloučí s dalším blokem. To vám umožní upravit například barvu podle jedné předvolby a textsize podle jiné předvolby                                                                                                                                    |
| `"false"`        | block  | většina předvoleb nastavuje logickou hodnotu `"true"` nebo `"false"`. Zadáte blok dynData, který se použije, pokud je předvolba vybraná uživatelem false.<br />Pokud blok obsahuje také klíč `"dynPref":`, blok dynData se sloučí s dalším blokem. To vám umožní upravit například barvu podle jedné předvolby a textsize podle jiné předvolby                                                                                                                                   |

(cwf-reference-prefkey-values)=

### Hodnoty PrefKey

Všechny klíče uvedené výše v kapitole [Klíče předvoleb](#cwf-reference-preference-keys) lze použít k úpravě parametrů prvků

You can also use these additional keys below included into AAPS (Custom) specific parameters:

| Klíč                  | typ     | komentář                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: pokud jsou v AAPS vybrané jednotky mgdl<br />*false*: pokud jsou v AAPS vybrané jednotky mmol                                                                                                                                                                                                                                                               |
| `"key_dark"`          | boolean | *true*: to use a dark background<br />*false*: to use a light background<br />Note: this parameter is often used in previous AAPS watchfaces (AAPS, AAPS V2...)                                                                                                                                                                                               |
| `"key_match_divider"` | boolean | *true*: dělicí čára v cifernících AAPS a AAPS v2 nebude vidět<br />*false*: dělicí čára v cifernících AAPS a AAPS v2 bude vidět<br />Poznámka: toto nastavení se často kombinuje s předvolbou tmavého pozadí (pomocí klíče `dynPref` v bloku `dynData`), aby se barva textu (a pozadí) nastavila na stejnou nebo opačnou barvu než parametr tmavého pozadí... |
