# Pumpa Accu-Chek Insight

**Tento software je součástí DIY řešení umělé slinivky, nejedná se o výrobek. Před jeho používáním je důležité, abyste prostudovali a pochopili celý systém, včetně toho jak ho používat. Není to něco, co za Vás udělá veškerý management diabetu. Pokud do toho investujete potřebný čas, pomůže Vám dojít k lepším výsledkům při léčbě Vaší cukrovky, a tím zlepšit i kvalitu Vašeho života. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za ovládání Vašeho systému.**

* * *

## ***UPOZORNĚNÍ:** Pokud jste v minulosti používali pumpu Insight s ovladačem **SightRemote**, prosím **odinstalujte SightRemote** a **aktualizujte na verzi 2.1**.*

## Hardwarové a softwarové požadavky

* Pumpa Roche Accu-Chek Insight (jákýkoliv firmware, fungují všechny) <br /> Poznámka: AAPS bude vždy zapisovat data do **prvního bazálního profilu v pumpě**
* Telefon s Androidem
* Aplikace AndroidAPS (minimálně v2.1) nainstalovaná ve vašem telefonu

## Nastavení

* V [Konfigurace](../Configuration/Config-Builder) aplikace AndroidAPS vyberte v sekci Pumpa Accu-Chek Insight
    
    ![Screenshot nastavení pumpy Insight](../images/Insight_ConfigBuilder.png)

* Chcete-li otevřít nabídku nastavení, klikněte na ozubené kolečko.

* V nastavení klikněte na tlačítko „Insight párování“ v horní části obrazovky. Měli byste vidět seznam bluetooth zařízení v dosahu (níže vlevo).
* V pumpě Insight jděte do Menu > Nastavení > Komunikace > Přidat zařízení. Pumpa zobrazí následující obrazovku (vpravo níže) zobrazující seriové číslo pumpy.
    
    ![Screenshot párování Insight 1](../images/Insight_Pairing1.png)

* Vezměte zpět telefon, klikněte na sériové číslo pumpy v seznamu bluetooth zařízení. Potvrďte kliknutím na Párování.
    
    ![Screenshot párování Insight 2](../images/Insight_Pairing2.png)

* Pumpa i telefon poté zobrazí na displeji kód. Zkontrolujte, jestli jsou na obou zařízení kódy stejné a potvrďte je jak v pumpě, tak v telefonu.
    
    ![Screenshot párování Insight 3](../images/Insight_Pairing3.png)

* Úspěch! Můžete si poblahopřát, úspěšně jste spárovali pumpu s AndroidAPS.
    
    ![Screenshot párování Insight 4](../images/Insight_Pairing4.png)

* Pro kontrolu, jestli je vše správně, jděte zpět do nabídky Konfigurace v AndroidAPS a klikněte na ozubené kolečko v nabídce Pumpa - Accu Chek Insight pro vstup do nastavení. Klikněte na Insight párování, kde uvidíte informace o pumpě:
    
    ![Screenshot informací o spárování Insight](../images/Insight_PairingInformation.png)

Poznámka: Spojení mezi pumpou a telefonem není permanentní. Spojení bude navázáno pouze tehdy, je-li to nezbytné (např. při nastavování dočasného bazálu, posílání bolusu, čtení historie z pumpy apod.). V opačném případě by se baterie v pumpě i mobilu velmi rychle vybila.

## Nastavení v AAPS

![Screenshot nastavení Insight](../images/Insight_pairing.png)

V Insight nastavení v AndroidAPS můžete upravit následující možnosti:

* „Zaznamenat výměnu kanyly“: To automaticky provede záznam výměny kanyly, když v pumpě provedete „Naplnit kanylu“   
    <font color="red">Poznámka: Výměna kanyly také způsobí reset automatické citlivosti</b></font>
* „Zaznamenat výměnu hadičky“: To automaticky provede záznam v databázi AndroidAPS, když v pumpě provedete „Naplnit hadičku“.
* „Zaznamenat výměnu baterie“: To automaticky provede záznam výměny baterie, pokud vložíte do pumpy novou baterii.
* „Zaznamenat změnu režimu provozu“: To automaticky provede záznam v databázi AndroidAPS, kdykoliv spustíte/zastavíte pumpu.
* „Zaznamenat výstrahy“: To automaticky provede záznam v databázi AndroidAPS, kdykoliv pumpa zahlásí alarm (s výjimkou upomínek, bolusů a konce dočasných bazálů (TBR) – ty zaznamenány nejsou).
* „Povolit emulaci dočasných bazálů“: pumpa Insight umožňuje hodnotu maximálního dočasného bazálu (TBR) do výše 250 %. Aby bylo možné toto omezení obejít, pumpa obdrží příkaz provést prodloužený bolus, aby bylo možné zvýšit TBR nad 250 %. <font color="red">Pozn.: Současné používání prodlouženého bolusu ve stejný čas jako další prodloužený bolus může způsobit chybu.</font>
* „Doba čekání na obnovení spojení“: To definuje, jak dlouho bude AndroidAPS čekat před opětovným pokusem po neúspěšném pokusu o připojení. Můžete vybrat 0 až 20 sekund. Pokud máte problémy s připojením, vyberte delší dobu čekání.   
      
    Příklad pro min. dobu trvání zotavení = 5 a max. dobu zotavení = 20   
      
    žádné spojení -> čekej **5** sec.   
    znovu -> žádné spojení -> čekej **6** sec.   
    znovu -> žádné spojení -> čekej **7** sec.   
    znovu -> žádné spojení -> čekej **8** sec.   
    ...   
    znovu -> žádné spojení -> čekej **20** sec.   
    znovu -> žádné spojení -> čekej **20** sec.   
    ...

* „Limit pro odpojení“: Definuje, jak dlouho (v sekundách) bude AndroidAPS čekat s odpojením od pumpy po dokončení úlohy. Výchozí hodnota je 5 sekund.

Po dobu, kdy byla pumpa zastavena, AAPS zobrazí záznam s dočasnou bazální hodnotou 0 %.

V AndroidAPS v záložce Accu-Chek Insight se zobrazuje aktuální stav pumpy a dvě tlačítka:

* „Obnovit“: Opětovné načtení statusu z pumpy
* "Enable/Disable TBR over notification": A standard Insight pump emits an alarm when a TBR is finished. This button lets you enable or disable this alarm without the need for configuration software.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Settings in the pump

Configure alarms in the pump as follows:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remove all bars)
* Menu > Modes > Signal mode > Quiet

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Battery replacement

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight specific errors

### Extended bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Crossing time zones with Insight pump

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).