# DanaRS and Dana-i Pump

*Tyto pokyny jsou pro konfiguraci aplikace a Vaší pumpy, pokud máte pumpu DanaRS od roku 2017 a výše. Pokud máte původní DanaR, navštivte [Pumpa DanaR](./DanaR-Insulin-Pump).*

**Novou pumpu Dana RS s firmwarem v3 lze použít pouze s AndroidAPS verze 2.7 a vyšší.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

## Párování pumpy

* V AndroidAPS vyberte "Konfigurace" a "DanaRS"

* Vyvolejte Menu ťuknutím na tři tečky v pravém horním rohu. Zvolte Nastavení.

* Click on "Selected pump".
  
  ![AAPS párování Dany RS](../images/AAPS_DanaRSPairing.png)

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* -> For DanaRS v1 select Pump password in preferences and set your password

* -> For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AndroidAPS pairing dialog
* -> For Dana-i standard Android pairing dialog appear and you have to enter 6-digit number displayed on pump

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)
* Set bolus step on pump to 0.1 U/h using Doctors menu (see pump user guide)
* Na pumpě povolte rozšířené bolusy

### Výchozí heslo

* DanaRS s firmwarem v1 a v2 má výchozí heslo 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24). Open main menu on pump > review > information. Number 3 is production date. For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

## Změna hesla pumpy

* Stiskněte tlačítko OK na pumpě
* V hlavní nabídce zvolte "Možnosti" (posuňte se vpravo několikrát stisknutím šipky)
  
  ![Hlavní menu DanaRS](../images/DanaRSPW_01_MainMenu.png)

* V nabídce možností vyberte "UŽIV. FUNKCE"
  
  ![Nastavení DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Pomocí tlačítka šipky přejdete dolů na "11. heslo"
  
  ![DanaRS 11. Heslo](../images/DanaRSPW_03_11PW.png)

* Stiskněte OK pro zadání starého hesla.

* Zadejte **staré heslo** (Výchozí heslo viz [nahoře](#default-password)) a stiskněte tlačítko OK
  
  ![DanaRS Zadejte staré heslo](../images/DanaRSPW_04_11PWenter.png)

* Je-li zde zadáno chybné heslo, nebude zde žádná zpráva indikující selhání!

* Nastavte **nové heslo** (Změňte čísla pomocí + & - tlačítka / Přesunout vpravo pomocí šipky).
  
  ![Nové heslo pro DanaRS](../images/DanaRSPW_05_PWnew.png)

* Potvrďte pomocí tlačítka OK.

* Uložte opětovným stisknutím tlačítka OK.
  
  ![DanaRS Uložení nového hesla](../images/DanaRSPW_06_PWnewSave.png)

* Přejděte dolů na "14. UKONČIT" a stiskněte tlačítko OK.
  
  ![Ukončit DanaRS](../images/DanaRSPW_07_Exit.png)

## Specifické chyby Dana RS

### Chyba během vydávání inzulinu

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Ve většině případů se jedná pouze o problém s komunikací, který se netýká vydaného inzulinu (je vydáno správné množství).
* Podívejte se do historie pumpy (buď v pumpě, nebo na kartě Dana > Historie pumpy > Bolusy), zda byl vydán správný bolus.
* Pokud chcete, odstraňte chybový záznam v záložce [ošetření](../Getting-Started/Screenshots#carb-correction).
* Skutečně vydaný bolus se načte a zaznamená při příštím připojení. Chcete-li vynutit připojení okamžitě, klikněte na ikonu BT na kartě Dana, nebo prostě počkejte na příští připojení.

## Zvláštní poznámka, pokud měníte telefon

When switching to a new phone the following steps are necessary:

* [Exportujte nastavení](../Usage/ExportImportSettings#export-settings) na svém starém telefonu
* Transfer settings from old to new phone

* DanaRS v1
  
  * **Manually pair** Dana RS with the new phone
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
  * Install AndroidAPS on the new phone.
  * [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone
* DanaRS v3, Dana-i 
  * start pairing procedure like decribed above
  * sometimes may be necessary to clear pairing information in AndroidAPS by long-click BT icon on DanaRS/i tab

## Cestování mezi časovými pásmy s pumpou Dana RS

Více informací o cestování přes více časových pásem najdete v části [Cestování s pumpou mezi časovými pásmy](../Usage/Timezone-traveling#danarv2-danars).