# Pumpa DanaRS

*Tyto pokyny jsou pro konfiguraci aplikace a Vaší pumpy, pokud máte pumpu DanaRS od roku 2017 a výše. Pokud máte původní DanaR, navštivte [Pumpa DanaR](./DanaR-Insulin-Pump).*

**Novou pumpu Dana RS s firmwarem v3 lze použít pouze s AndroidAPS verze 2.7 a vyšší.**

* V pumpě DANARS je aplikací používán "BAZÁL A". Existující data budou přepsána.

## Párování pumpy

* V AndroidAPS vyberte "Konfigurace" a "DanaRS"

* Vyvolejte Menu ťuknutím na tři tečky v pravém horním rohu. Zvolte Nastavení.

* Vyberte DanaRS Párovou novou pumpu a klikněte na sériové číslo DanaRS.
    
    ![AAPS párování Dany RS](../images/AAPS_DanaRSPairing.png)

* Zvolte Heslo k pumpě a vložte své heslo.

### Výchozí heslo

* DanaRS s firmwarem v1 a v2 má výchozí heslo 1234.
* Pro DanaRS s firmware v3 je výchozí heslo kombinací měsíce výroby a data výroby (tj. měsíc 01 a den 24). Otevřete hlavní menu na pumpě > Přehled > Přepravní informace. Číslo 3 je datum výroby.

* **Je třeba potvrdit párování na pumpě!** Stejný způsob, na který jste zvyklí z párování ostatních BT zařízení (např. telefonů a auta).
    
    ![Potvrzování Dana RS párování](../images/DanaRS_Pairing.png)

* Vyberte rychlost bolusu, abyste změnili výchozí rychlost bolusu (12sec na 1U, 30sec na 1U nebo 60sec na 1U).

* Restartujte telefon.
* Nastavte bazální dávkování na 0,01 U/h pomocí lékařského menu (viz uživatelská příručka pumpy)
* Na pumpě povolte rozšířené bolusy

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

V případě, že dojde k přerušení spojení mezi AAPS a pumpou Dana RS v průběhu vydávání bolusu (např. odejdete mimo dosah telefonu, zatímco pumpa Dana RS vydává inzulin), zobrazí se následující zpráva a zazní akustická výstraha.

![Oznámení chyby podávání inzulínu](../images/DanaRS_Error_bolus.png)

* Ve většině případů se jedná pouze o problém s komunikací, který se netýká vydaného inzulinu (je vydáno správné množství).
* Podívejte se do historie pumpy (buď v pumpě, nebo na kartě Dana > Historie pumpy > Bolusy), zda byl vydán správný bolus.
* Pokud chcete, odstraňte chybový záznam v záložce [ošetření](../Getting-Started/Screenshots#carb-correction).
* Skutečně vydaný bolus se načte a zaznamená při příštím připojení. Chcete-li vynutit připojení okamžitě, klikněte na ikonu BT na kartě Dana, nebo prostě počkejte na příští připojení.

## Zvláštní poznámka, pokud měníte telefon

Pokud přecházíte na nový telefon, je nezbytné, abyste provedli následující kroky:

* [Exportujte nastavení](../Usage/ExportImportSettings#export-settings) na svém starém telefonu
* Přesuňte nastavení ze starého do nového telefonu
* **Ručně spárujte** Danu RS s novým telefonem
    
    * Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také importována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth. Proto je třeba nový telefon a pumpu spárovat ručně.
* Nainstalujte AndroidAPS na nový telefon.
* [Import nastavení](../Usage/ExportImportSettings#import-settings) v novém telefonu

## Cestování mezi časovými pásmy s pumpou Dana RS

Chcete-li se dozvědět více informací o cestování mezi časovými pásmy, přejděte na část [Cestování s pumpou mezi časovými pásmy](../Usage/Timezone-traveling#danarv2-danars).