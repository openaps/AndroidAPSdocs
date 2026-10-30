# **Freestyle Libre 3** a 3+

Freestyle Libre 3 (FSL3) vyžaduje zvláštní nastavení, aby AAPS dostával hodnoty glykémie. Hodnoty z Freestyle Libre 3 (FSL3) lze do AAPS dostat dvěma způsoby.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Oba níže uvedené způsoby používají samostatnou aplikaci Juggluco. Používá Juggluco k příjmu surových dat ze senzoru v 1minutovém intervalu, která se pak předávají do xDrip nebo AAPS. Nové senzory lze spustit buď aplikací Libre 3, nebo přímo v Juggluco. Návod níže popisuje postup spuštění senzoru v aplikaci Juggluco. Pokud byl senzor spuštěn s přihlášeným účtem LibreView, lze také přepínat mezi Juggluco a aplikací Libre 3 jako přijímačem.

Pokud byl senzor spuštěn aplikací Libre 3, může Juggluco také předávat data do LibreView ke sdílení s lékaři.

V xDrip lze senzor kalibrovat v rozsahu -40 mg/dl až +20 mg/dl (-2,2 mmol/l až +1,1 mmol/l), aby se vyrovnaly rozdíly mezi měřením glukometrem a hodnotami senzoru.

## Způsob 1: přímé použití 1minutových hodnot
**AAPS** je přizpůsoben pro 5minutové hodnoty. Zpracování 1minutových hodnot proto občas má svá omezení.

Viz [zde](#juggluco-to-aaps).


## Způsob 2: převod 1minutových hodnot na 5minutové pomocí xDrip
Tento způsob používá Juggluco k příjmu surových dat ze senzoru v 1minutovém intervalu. Ta se předávají do xDrip, který je vyhladí na data v 5minutovém intervalu a předá je do AAPS.

### Krok 1: Nastavení Juggluco
Aplikaci Juggluco si stáhněte a nainstalujte [zde](https://www.juggluco.nl/Juggluco/download.html). Postupujte podle návodu [zde](https://www.juggluco.nl/Juggluco/libre3/)

Ujistěte se, že posíláte hodnoty glykémie do xDrip: V nastavení Juggluco můžete nastavit, aby Juggluco posílal hodnotu glykémie do jiných aplikací. Juggluco umí posílat tři typy takových vysílání: Vysílání **Patched Libre broadcast** původně používala upravená aplikace Librelink a lze ho použít k posílání hodnot glykémie do xDrip

### Krok 2: Nastavení xDrip

Hodnoty glykémie přijímá aplikace xDrip v telefonu.

- Pokud ještě nemáte nastaveno, stáhněte si [xDrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle návodu na [stránce nastavení xDrip](../CompatibleCgms/xDrip.md).
- V xDrip vyberte jako zdroj dat „Libre2 (patched app)“.
- V případě potřeby zadejte „BgReading:d,xdrip libre_receiver:v“ v Less Common Settings → Extra Logging Settings → Extra tags for logging. Tím se budou zaznamenávat další chybová hlášení pro řešení problémů.

![Záznamy LibreLink v xDrip](../images/Libre2_Tags.png)

- Technicky se aktuální hodnota glykémie posílá do xDrip každou minutu. Filtr váženého průměru ve výchozím nastavení počítá vyhlazenou hodnotu za posledních 25 minut. Toto období můžete změnit v nabídce NFC Scan features.

  → Nabídka (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![Rozšířená nastavení xDrip pro Libre 2 a surové hodnoty](../images/xDrip_Libre3_Smooth.png)



### Krok 3: Spuštění senzoru v xDrip

V xDrip spusťte senzor pomocí „Start Sensor“ a „not today“. Telefon není nutné přikládat k senzoru. „Start Sensor“ ve skutečnosti žádný senzor Libre 3 fyzicky nespustí a nijak s ním nekomunikuje. Tím se xDrip jen sděluje, že nový senzor posílá hodnoty glykémie. Pokud je to možné, zadejte pro úvodní kalibraci dvě hodnoty naměřené z krve. Nyní by se hodnoty glykémie měly v xDrip zobrazovat každých 5 minut. Vynechané hodnoty, např. protože jste byli příliš daleko od telefonu, se zpětně nedoplní.

Pokud stále nejsou žádná data, počkejte alespoň 15–20 minut.

Po výměně senzoru xDrip nový senzor automaticky rozpozná a smaže všechna kalibrační data. Po aktivaci si můžete zkontrolovat glykémii z krve a provést novou úvodní kalibraci.

### Krok 4: Konfigurace AAPS

- Viz [zde](#juggluco-to-xdrip) a pak se vraťte.

- Pokud **AAPS** nedostává hodnoty glykémie, když je telefon v režimu Letadlo, použijte „Identify receiver“
- Vypněte vyhlazování (už se provádí v xDrip)

## Další výměny senzoru

1. Otevřete Juggluco a poznamenejte si sériové číslo stávajícího senzoru

![Sériové číslo Libre](../images/libre3/step_13.jpg)

2. Nyní jednoduše naskenujte nový senzor čtečkou NFC v telefonu. Juggluco zobrazí oznámení, pokud byl proces úspěšně zahájen.
3. Až budete chtít starý senzor deaktivovat, otevřete nabídku Juggluco klepnutím kamkoli do prázdného místa v levém horním rohu obrazovky.
4. Vyberte senzor s ukončenou platností a klepněte na „Terminate“

![Ukončení senzoru](../images/libre3/step_14.jpg)

Poznámka: Když jsou aktivní dva senzory, Juggluco posílá do xDrip nejnovější hodnotu z kteréhokoli z nich. Pokud senzory nejsou kalibrované a neukazují podobnou glykémii, může to vést ke skákajícím hodnotám glykémie v xDrip. Pokud ukončíte nesprávný senzor, můžete ho znovu aktivovat jednoduše tím, že ho naskenujete.

## Přepnutí senzoru mezi aplikací Libre 3 a Juggluco

Pokud byl senzor spuštěn s přihlášeným účtem LibreView, lze také přepínat mezi Juggluco a aplikací Libre 3 jako přijímačem. K tomu jsou potřeba tyto kroky:

1. Nainstalujte aplikaci Libre 3 z Obchodu Play
2. Nastavte aplikaci Libre 3 s účtem LibreView, se kterým byl senzor aktivován.
3. V nastavení Androidu vynuceně ukončete aplikaci Juggluco.
4. V nabídce Libre 3 klepněte na „Start Sensor“, zvolte „Yes“, „Next“ a naskenujte senzor.
5. Po několika minutách by měly být hodnoty glykémie vidět v aplikaci Libre 3.

Pro přepnutí z aplikace Libre 3 na Juggluco musíte aplikaci Libre 3 vynuceně ukončit v nastavení Androidu a pokračovat kroky 1 a 2.

(libre3-experiences-and-troubleshooting)=
## Zkušenosti a řešení problémů

### Řešení problémů se spojením Libre3 -> Juggluco

- Ujistěte se, že používáte aktuální verzi aplikace Juggluco
- Zkontrolujte svá nastavení podle tohoto návodu
- Někdy může být nutné aplikaci Libre 3 a Juggluco vynuceně ukončit a znovu spustit.
- Vypněte Bluetooth a znovu ho zapněte
- Chvíli počkejte nebo zkuste Juggluco zavřít
- Starší verze Juggluco (pod 2.9.6) neposílají další data ze senzoru Libre3 do připojených zařízení (např. Juggluco na WearOS). Možná budete muset v upravené aplikaci Libre3 (nabídka Juggluco) klepnout na „Resend data“.

### Další pomoc

Původní návod: [web jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Další repozitář na GitHubu: [odkaz na GitHub](https://github.com/maheini/FreeStyle-Libre-3-patch)
