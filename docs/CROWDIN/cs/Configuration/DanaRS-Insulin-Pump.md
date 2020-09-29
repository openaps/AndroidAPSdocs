# Pumpa DanaRS

*Tyto pokyny jsou pro konfiguraci aplikace a Vaší pumpy, pokud máte pumpu DanaRS od roku 2017 a výše. Pokud máte původní DanaR, navštivte [Pumpa DanaR](./DanaR-Insulin-Pump).*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* V pumpě DANARS je aplikací používán "BAZÁL A". Existující data budou přepsána.

* V AndroidAPS vyberte "Konfigurace" a "DanaRS"

* Zvolte "Menu" ťuknutím na tři tečky v pravém horním rohu. Zvolte položku "Předvolby".

* Vyberte "DanaRS připojení nové pumpy" a zadejte sériové číslo pumpy DanaRS.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware 1 and 2 the default password is 1234.
  * For DanaRS with firmware 3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Ne. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Na pumpě povolte rozšířené bolusy

## Specifické chyby Dana RS

### Chyba během vydávání inzulinu

V případě, že dojde k přerušení spojení mezi AAPS a pumpou Dana RS v průběhu vydávání bolusu (např. odejdete mimo dosah telefonu, zatímco pumpa Dana RS vydává inzulin), zobrazí se následující zpráva a zazní akustická výstraha.

![Oznámení chyby podávání inzulínu](../images/DanaRS_Error_bolus.png)

* Ve většině případů se jedná pouze o problém s komunikací, který se netýká vydaného inzulinu (je vydáno správné množství).
* Podívejte se do historie pumpy (buď v pumpě, nebo na kartě Dana > Historie pumpy > Bolusy), zda byl vydán správný bolus.
* Případně odstraňte chybný záznam na kartě Ošetření.
* Skutečně vydaný bolus se načte a zaznamená při příštím připojení. Chcete-li vynutit připojení okamžitě, klikněte na ikonu BT na kartě Dana, nebo prostě počkejte na příští připojení.

## Zvláštní poznámka, pokud měníte telefon

Pokud přecházíte na nový telefon, je nezbytné, abyste provedli následující kroky:

* **Exportujte nastavení** na svém starém telefonu
  
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Exportovat nastavení
    
    ![Exportovat nastavení](../images/AAPS_ExportSettings.png)

* **Přeneste** nastavení ze starého telefonu do nového

* **Ručně spárujte** pumpu Dana RS s novým telefonem 
  * Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také importována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth. Proto je třeba nový telefon a pumpu spárovat ručně.
* **Nainstalujte AndroidAPS** na nový telefon.
* **Importujte nastavení** do nového telefonu 
  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Importujte nastavení

## Cestování mezi časovými pásmy s pumpou Dana RS

Chcete-li se dozvědět více informací o cestování mezi časovými pásmy, přejděte na část [Cestování s pumpou mezi časovými pásmy](../Usage/Timezone-traveling#danarv2-danars).