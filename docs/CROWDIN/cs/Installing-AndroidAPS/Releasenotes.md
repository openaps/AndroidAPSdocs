# Poznámky k vydání

## Verze 2.2.2

Datum vydání: 07. 04. 2019

### Hlavní nové funkce

* Oprava Autosens: deaktivace dočasného cíle zvýší/sníží cíl
* Nové překlady
* Opravy ovladače pro Insight
* Oprava SMS pluginu

## Verze 2.2

Datum vydání: 29. 03. 2019

### Hlavní nové funkce

* [Oprava letního času](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
* Aktualizace Wear
* Aktualizace [SMS pluginu](../Usage/SMS-Commands.md)
* Možnost vrátit se k cílům
* Zastavení smyčky, je-li úložiště telefonu plné

## Verze 2.1

Podpora Accu-Chek <0>Insight</0> (od Tebbe Ubben a JamOrHam)

### Hlavní nové funkce

* Podpora Accu-Chek [Insight](../Configuration/Accu-Chek-Insight-Pump.md) (od Tebbe Ubben a JamOrHam)
* Stavové indikátory na obrazovce přehledu (Nico Schmitz)
* Pomoc při přechodu na letní čas (Roumen Georgiev)
* Oprava zpracování názvů profilů z NS (Johannes Mockenhaupt)
* Oprava blokování UI (Johannes Mockenhaupt)
* Podpora aktualizované upravené aplikace pro G5 (Tebbe Ubben a Milos Kozak)
* Podpora zdrojů glykémie G6, Poctech, Tomato, Eversense (Tebbe Ubben a Milos Kozak)
* Oprava zakázání SMB z nastavení (Johannes Mockenhaupt)

### Různé

* Pokud nepoužíváte výchozí hodnotu `smbmaxminutes`, musíte ji nastavit znovu

## Verze 2.0

Datum vydání: 03. 11. 2018

### Hlavní nové funkce

* Podpora Oref1/SMB ([Dokumentace k Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Nezapomeňte si přečíst dokumentaci, abyste věděli, co můžete od SMB očekávat, jak se bude chovat, čeho může dosáhnout a jak funkci používat, aby fungovala bez problémů.
* Podpora pumpy Accu-check Combo ([pokyny k instalaci](../Configuration/Accu-Chek-Combo-Pump.md))
* Průvodce nastavením: provede vás úvodním nastavením AndroidAPS

### Nutná úprava nastavení při přechodu z AMA na SMB

* Aby bylo možné povolit SMB (karta SMB obecně zobrazuje, že jsou uplatněna omezení), je třeba zahájit plnění 8. cíle
* maxIOB nyní zahrnuje *veškerý* IOB, nejen ten z bazálů. To znamená, že pokud je k jídlu poslaný bolus 8 U a maxIOB je 7 U, tak nebudou vydány žádné SMB, dokud IOB neklesne pod 7 U.
* výchozí hodnota min_5m_carbimpact se při přechodu z AMA na SMB změnila z 3 na 8. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně
* Při vytváření AndroidAPS 2.0 apk mějte na paměti: Konfigurace na vyžádání není aktuální verzí pluginu Android Gradle podporována! Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:
  
  * Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
  * V levém panelu klepněte na Build, Execution, Deployment > Compiler.
  * Zrušte označení možnosti Configure on demand.
  * Klepněte na Apply nebo OK.

### Hlavní obrazovka

* Horní pruh umožňuje pozastavit/zakázat smyčku, zobrazit/upravit profile a spustit/ukončit dočasné cíle (DC). DC používají výchozí nastavení nastavené v předvolbách. Nový DC Hypoglykémie je vysoký dočasný cíl, který má smyčce zabránit v příliš agresivních korekcích dokrmových sacharidů.
* Tlačítka ošetření: staré tlačítko ošetření je stále dostupné, ale ve výchozím nastavení je skryté. Viditelnost tlačítek lze nově nastavit. Nové tlačítko inzulín, nové tlačítko sacharidy (včetně [rozložených sacharidů](../Usage/Extended-Carbs.md))
* Barevné křivky predikcí: 
  * Oranžová: COB (oranžová se používá obecně k vizualizaci COB a sacharidů)
  * Tmavě modrá: IOB (tmavě modrá se používá obecně k vizualizaci IOB a inzulínu)
  * Světle modrá: nulový dočasný bazál
  * Tmavě žlutá: UAM
* Možnost zobrazit pole poznámky v dialogových oknech inzulínu/sacharidů/kalkulátoru/plnění, poznámka se pak nahrává do NS
* Aktualizované dialogové okno plnění/doplňování a vložení záznamů ošetření pro výměnu kanyly a výměnu zásobníku

### Hodinky

* Oddělená varianta sestavení byla zrušena, nyní se používá pouze varianta full, která obsahuje vše. Abyste mohli používat ovládání bolusů z hodinek, povolte nejdřív toto nastavení na telefonu
* Wizard se nyní ptá jenom na sacharidy (a procenta, pokud je to povoleno v nastavení hodinek). V nastavení na telefonu lze nyní konfigurovat, které parametry jsou zahrnuty do výpočtu
* potvrzení a informační zprávy nyní fungují také na wear 2.0
* Přidána volba eCarbs v nabídce

### Nové pluginy

* Aplikace PocTech jako zdroj glykémie
* Upravená Dexcom aplikace jako zdroj glykémie
* Plugin citlivosti Oref1

### Různé

* Nové výsuvné okno k zobrazení všech pluginů. Pluginy označené jako viditelné jsou nadále ve vrchním pruhu (oblíbené)
* Přepracovaná Konfigurace a Cíle, přidány popisky
* Nová ikona aplikace
* Spousty vylepšení a oprav chyb
* Na Nightscoutu nezávislé výstrahy při dlouhodobé nedostupnosti pumpy (např. při vybité baterii v pumpě) a výstrahy při výpadku hodnot ze senzoru (více informací viz *Místní výstrahy* v nastavení)
* Možnost ponechat obrazovku trvale zapnutou
* Možnost zobrazovat upozornění jako Android notifikace
* Pokročilé filtrování (dovolující mít povolené SMB i více než 6h po jídle) je podporováno Dexcom upravenou aplikací a xDripem s nativním režimem G5.