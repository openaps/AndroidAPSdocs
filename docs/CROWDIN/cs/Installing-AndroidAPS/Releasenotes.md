# Poznámky k vydání

Prosím, postupujte podle [pokynů k autualizaci](../Installing-AndroidAPS/Update-to-new-version.md). Na stránce popisující aktualizaci také můžete najít sekci řešení problémů, která řeší nejčastější problémy při aktualizaci.

Počínaje verzí 2.3 a je zaveden nový postup aktualizace. Jakmile bude k dispozici nová aktualizace, obdržíte následující informace:

![Informace o aktualizaci](../images/AAPS_LoopDisable90days.png)

Pak máte 60 dnů na aktualizaci. Pokud do těchto 60 dnů neaktualizujete AAPS, přepne se do LGS (low glucose suspend - viz [slovník](../Getting-Started/Glossary.md)) jako v [cíly 4](../Usage/Objectives.md).

Pokud neaktualizujete do dalších 30 dní (90 dní od nového vydání) přejde AAPS na otevřenou smyčku.

Prosím pochopte, že tato změna není určena, aby vás otravovala, ale je to kvůli bezpečnostním důvodům. Nové verze AndroidAPS neposkytují pouze nové funkce, ale také důležité bezpečnostní opravy. Proto je důležité, aby každý uživatel aktualizoval co nejdříve.. Bohužel stále existují hlášení o chybách z velmi starých verzí, takže se jedná o pokus zlepšit bezpečnost pro každého uživatele a celou komunitu DIY. Děkujeme za pochopení.

## Verze 2.3

Datum vydání: 25. 04. 2019

### Hlavní nové funkce

* Důležitá bezpečnostní oprava pro Insight (opravdu důležité, pokud používáte Insight!)
* Oprava prohlížeče historie
* Oprava výpočtů delta
* Aktualizace překladů
* Kontrola verze a varování při updatu gradle
* Lepší automatické testování
* Oprava potenciálního pádu v AlarmSound Service (díky @lee-b !)
* Oprava vysílání dat glykémií (nyní funguje nezávisle na SMS oprávnění!)
* Nový nástroj pro kontrolu nové verze

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

Datum vydání: 03. 03. 2019

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

* Podpora Oref1/SMB ([Oref1 dokumentace](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Nezapomeňte si přečíst dokumentaci, abyste věděli, co můžete od SMB očekávat, jak se bude chovat, čeho může dosáhnout a jak se má používat, aby fungovalo bez problémů.
* Podpora pumpy Accu-Chek Combo ([pokyny k instalaci](../Configuration/Accu-Chek-Combo-Pump.md))
* Konfigurační průvodce: provede vás procesem úvodního nastavení AndroidAPS

### Nastavení k přizpůsobení při přechodu od AMA k SMB

* Cíl 8 musí být zahájeny, aby bylo SMB povolené (SMB záložka obecně ukazuje, která omezení jsou aktivní)
* maxIOB nyní zahrnuje *všechny* IOB, ne jenom zvýšený bazál. To znamená, že pokud je k jídlu poslaný bolus 8 U a maxIOB je 7 U, tak nebudou vydány žádné SMB, dokud IOB neklesne pod 7 U.
* výchozí hodnota min_5m_carbimpact se změnila z 3 na 8 při přechodu od AMA k SMB. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně
* Chyba při vytváření AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:
  
  * Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
  * V levé části pak na Build, Execution, Deployment > Compiler.
  * Zrušte označení možnosti Configure on demand.
  * Klepněte na tlačítko použít nebo OK.

### Hlavní stránka

* Horní pruh dává přístup k pozastavení/zakázání smyčky, zobrazení/úpravě profilu a k zahájení/ukončení dočasných cílů (DC). DC používají výchozí nastavení nastavené v předvolbách. Nový DC Hypoglykémie je vysoký dočasný cíl, který má smyčce zabránit v příliš agresivních korekcích dokrmových sacharidů.
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
* Wizard se nyní ptá pouze na sacharidy (a procenta, pokud je to povoleno v nastavení hodinek). V nastavení na telefonu lze nyní konfigurovat, které parametry jsou zahrnuty do výpočtu
* potvrzení a informační zprávy nyní fungují také na wear 2.0
* Přidána volba eCarbs v nabídce

### Nové pluginy

* Aplikace PocTech jako zdroj glykémie
* Upravená aplikace Dexcom jako zdroj glykémie
* Plugin citlivosti Oref1

### Různé

* Nové výsuvné okno k zobrazení všech pluginů. Pluginy označené jako viditelné jsou nadále ve vrchním pruhu (oblíbené)
* Přepracovaná Konfigurace a Cíle, přídány popisky
* Nová ikona aplikace
* Spousty vylepšení a oprav chyb
* Na Nightscoutu nezávislé výstrahy při dlouhodobé nedostupnosti pumpy (např. při vybité baterii v pumpě) a výstrahy při výpadku hodnot ze senzoru (více informací viz *Místní výstrahy* v nastavení)
* Možnost ponechat obrazovku trvale zapnutou
* Možnost zobrazovat upozornění jako Android notifikace
* Pokročilé filtrování (dovolující mít povolené SMB i více než 6 h po jídle) je podporováno upravenou aplikací Dexcom a xDripem s nativním režimem G5.