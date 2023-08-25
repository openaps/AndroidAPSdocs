# Pumpa DanaRS a Dana-i

*Tyto pokyny slouží k nastavení aplikace a pumpy DanaRS od roku 2017 nebo nejnovější Dana-i. Pokud máte původní DanaR, navštivte [Pumpa DanaR](./DanaR-Insulin-Pump).*

**New Dana RS firmware v3 can be used from AAPS version 2.7 onwards.**

**New Dana-i can be used from AAPS version 3.0 onwards.**

* V pumpě DanaRS/i je aplikací používán "BAZÁL A". Stávající data budou přepsána.

(DanaRS-Insulin-Pump-pairing-pump)=

## Párování pumpy

* On AAPS homescreen click hamburger menu on the top left corner and go to Config Builder.
* V sekci pumpy vyberte 'Dana-i/RS'.
* Kliknutím na ozubené kolo se dostanete přímo do nastavení pumpy nebo se vrátíte na hlavní obrazovku.
    
    ![Konfigurace AAPS Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Přejít na záložku 'DANA-i/RS'.

* Vyberte nabídku nastavení klepnutím na 3 tečky v pravém horním rohu. 
* Zvolte 'Rozšířená nastavení Dana-i/RS'.
* Klikněte na "Vybranou pumpu".
* V okně párování vyberte vaší pumpu.
    
    ![AAPS párování Dana-i/RS](../images/DanaRS_i_Pairing.png)

* **Je třeba potvrdit párování na pumpě!** Stejný způsob, na který jste zvyklí z párování ostatních BT zařízení (např. telefonů a auta).
    
    ![Potvrzování Dana RS párování](../images/DanaRS_Pairing.png)

* Postupujte podle procesu párování na základě typu a firmwaru vaší pumpy:
    
    * Pro DanaRS v1 vyberte v nastavení heslo pumpy a nastavte si ho.
    * For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AAPS pairing dialog.
    * Pro Dana-i se zobrazí standardní dialogové okno párování Android a musíte zadat 6-místné číslo zobrazené na pumpě.

* Vyberte rychlost bolusu, abyste změnili výchozí rychlost bolusu (12sec na 1U, 30sec na 1U nebo 60sec na 1U).

* Nastavte bazální dávkování na 0,01 U/h pomocí lékařského menu (viz uživatelská příručka pumpy).
* Nastavte krok bolusu na 0.05 U/h pomocí lékařského menu (viz uživatelská příručka pumpy).
* Na pumpě povolte rozšířené bolusy

(DanaRS-Insulin-Pump-default-password)=

### Výchozí heslo

* DanaRS s firmwarem v1 a v2 má výchozí heslo 1234.
* For DanaRS with firmware v3 or Dana-i the default password is derived from the manufacturing date and calculates as MMDD where MM is the month and DD is the day, the pump was produced (i.e. '0124' representing month 01 and day 24).
    
    * From MAIN MENU select REVIEW then open SHIPPING INFORMATION from the sub menu
    * Number 3 is manifacturing date. 
    * Pro v3/i se toto heslo používá pouze pro uzamčení nabídky na pumpě. It's not used for communication and it's not necessary to enter it in AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Změna hesla pumpy

* Stiskněte tlačítko OK na pumpě
* V hlavní nabídce zvolte "Možnosti" (posuňte se vpravo několikrát stisknutím šipky)
    
    ![Hlavní menu DanaRS](../images/DanaRSPW_01_MainMenu.png)

* V nabídce možností vyberte "UŽIV. FUNKCE"
    
    ![Nastavení DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* Pomocí tlačítka šipky přejdete dolů na "11. heslo"
    
    ![DanaRS 11. Heslo](../images/DanaRSPW_03_11PW.png)

* Stiskněte OK pro zadání starého hesla.

* Enter **old password** (Default password see [above](DanaRS-Insulin-Pump-default-password)) and press OK
    
    ![DanaRS Zadejte staré heslo](../images/DanaRSPW_04_11PWenter.png)

* Je-li zde zadáno chybné heslo, nebude zde žádná zpráva indikující selhání!

* Nastavte **nové heslo** (Změňte čísla pomocí + & - tlačítka / Přesunout vpravo pomocí šipky).
    
    ![Nové heslo pro DanaRS](../images/DanaRSPW_05_PWnew.png)

* Potvrďte pomocí tlačítka OK.

* Press OK to save setting.
    
    ![DanaRS Uložení nového hesla](../images/DanaRSPW_06_PWnewSave.png)

* Přejděte dolů na "14. EXIT" and press OK to exit.
    
    ![Ukončit DanaRS](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Specifické chyby Dana RS

### Chyba během vydávání inzulinu

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Ve většině případů se jedná pouze o problém s komunikací, který se netýká vydaného inzulinu (je vydáno správné množství).
* Podívejte se do historie pumpy (buď v pumpě, nebo na kartě Dana > Historie pumpy > Bolusy), zda byl vydán správný bolus.
* Delete error entry in [treatments tab](Screenshots-carb-correction) if you wish.
* Skutečně vydaný bolus se načte a zaznamená při příštím připojení. Chcete-li vynutit připojení okamžitě, klikněte na ikonu BT na kartě Dana, nebo prostě počkejte na příští připojení.

## Zvláštní poznámka, pokud měníte telefon

When switching to a new phone the following steps are necessary:

* [Export settings](ExportImportSettings-export-settings) on your old phone
* Přesuňte nastavení ze starého do nového telefonu

### DanaRS v1

* **Ručně spárujte** Danu RS s novým telefonem
* Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také importována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth. Proto je třeba nový telefon a pumpu spárovat ručně.
* Install AAPS on the new phone.
* [Import settings](ExportImportSettings-import-settings) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure like decribed [above](DanaRS-Insulin-Pump-pairing-pump).
* Sometimes it may be necessary to clear pairing information in AAPS by long-click BT icon on Dana-i/RS tab.

## Cestování mezi časovými pásmy s pumpou Dana RS

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-danarv2-danars).