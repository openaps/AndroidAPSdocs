# Poznámky k vydání

## Verze 2.0

Datum vydání: xx.xx.xxxx

### Hlavní nové funkce

* Podpora Oref1/SMB ([Oref1 dokumentace](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Nezapomeňte si přečíst dokumentaci, abyste věděli, co můžete od SMB očekávat, jak se bude chovat, čeho může dosáhnout a jak se má používat, aby fungovalo bez problémů.
* Accu-check Combo pump support ([setup instructions](../Configuration/Accu-Chek-Combo-Pump.md))
* Konfigurační průvodce: provede vás procesem úvodního nastavení AndroidAPS

### Nastavení k přizpůsobení při přechodu od AMA k SMB

* Cíl 8 musí být zahájeny, aby bylo SMB povolené (SMB záložka obecně ukazuje, která omezení jsou aktivní)
* maxIOB nyní zahrnuje *všechny* IOB, ne jenom zvýšený bazál. To znamená, že pokud je k jídlu poslaný bolus 8U a maxIOB je 7U, tak SMB nic nepošle, dokud IOB neklesne pod 7U.
* výchozí hodnota min_5m_carbimpact se změnila z 3 na 8 při přechodu od AMA k SMB. Pokud přecházíte z AMA k SMB, musíte to změnit ručně

### Hlavní stránka

* Horní pruh dává přístup k pozastavení/zakázání smyčky, zobrazení/úpravě profilu a k zahájení/ukončení dočasných cílů (DC). DC používají výchozí nastavení. Nová možnost Hypo DC je vysoký dočasný cíl, který má smyčce zabránit, aby příliš agresivně překorigovala dokrmové záchranné sacharidy.
* Tlačítka ošetření: staré tlačítko ošetření je stále dostupné, ale ve výchozím nastavení je skryté. Viditelnost tlačítek může být nově nastavitelná. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Zbarvené křivky předpovědí: 
  * Oranžová: COB (oranžová se používá obecně k vizualizaci COB a sacharidů)
  * Tmavě modrá: IOB (tmavě modrá se používá obecně k vizualizaci IOB a inzulínu)
  * Světle modrá: nulový dočasný bazál
  * Tmavě žlutá: UAM
* Možnost zobrazit pole poznámky v dialogových oknech inzulínu/sacharidů/kalkulátoru/plnění, poznámka se pak nahrává do NS
* Aktualizované dialogové okno plnění umožňuje plnění samotné a navíc vložení ošetřujících vstupů pro výměnu kanyly a výměnu zásobníku

### Hodinky

* Oddělená varianta sestavení byla zrušena, nyní se pro sestavení používá varianta full. Abyste mohli používat ovládání bolusů z hodinek, povolte nejdřív toto nastavení na telefonu
* Průvodce se nyní ptá jenom na sacharidy (a procenta, pokud je to povoleno v nastavení hodinek). Nyní lze konfigurovat v nastavení na telefonu, které parametry jsou zahrnuty do výpočtu
* potvrzení a informační zprávy nyní fungují také na wear 2.0
* Přidána volba eSacharidy v nabídce

### Nové pluginy

* PocTech aplikace jako zdroj glykémie
* Upravená Dexcom aplikace jako zdroj glykémie
* Oref1 plugin citlivosti

### Různé

* Nové výsuvné okno k zobrazení všech pluginů. Pluginy označené jako viditelné jsou nadále ve vrchním pruhu
* Přepracovaná Konfigurace a Cíle, přídány popisky
* Nová ikona aplikace
* Spousty vylepšení a oprav chyb
* Od Nightscoutu nezávislé výstrahy při dlouhodobé nedostupnosti pumpy (např. při vybité baterii v pumpě) a výstrahy při výpadku hodnot ze senzoru (více viz *Místní výstrahy* v nastavení)
* Možnost ponechat obrazovku trvale zapnutou
* Možnost zobrazovat upozornění jako Android notifikace
* Rozšířené filtrování (dovolující mít povolené SMB i více než 6h po jídle) je podporováno Dexcom upravenou aplikací a xDripem v nativním módu.