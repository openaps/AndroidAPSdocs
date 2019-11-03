# Pumpa Accu-Chek Insight

**Tento software je súčasťou DIY riešenia umelého pankreasu, nie je to výrobok. Vyžaduje si od Vás aby ste si prečítali, naučili sa a pochopili ako systém funguje a ako ho správne používať. Nie je to niečo, čo za Vás bude robiť celý management diabetu ale pomôže Vám zlepšiť Vaše výsledky a tým aj kvalitu života, ak ste ochotní tomu venovať potrebný čas. Neponáhľajte sa, urobte si čas, aby ste sa to naučili. Iba vy ste zodpovední za ovládanie Vašeho systému.**

* * *

## ***UPOZORNENIE:** Ak ste v minulosti používali Insight spolu so **SightRemote** prosím **aktualizujte si AAPS na najnovšiu verziu** a **odinštalujte SightRemote**.*

## Hardwarové a softwarové požiadavky

* Pumpa Accu-Chek Insight od firmy Roche (ktorýkoľvek firmware, fungujú všetky)
<br> Poznámka: AAPS bude vždy zapisovať údaje do <b>prvého bazálneho profilu v pumpe</b>* Telefón s Androidom (bude to fungovať v podstate so všetkými verziami, ale samotný AndroidAPS vyžaduje aspoň Android 5 (Lollipop)).
* Aplikácia AndroidAPS nainštalovaná vo vašom telefóne

## Nastavenia

* Pumpa Insight by mala byť súčasne pripojená iba k jednému zariadeniu. Ak ste v minulosti používali diaľkový ovládač pre Insight (glukomer), je potrebné aby ste ho odstránili zo zoznamu spárovaných zariadení vo svojej pumpe: Menu > Nastavenia > Komunikácia > Odstrániť zariadenie
    
    ![Screenshot odstránenia zariadenia v pumpe Insight](../images/Insight_RemoveMeter.png)

* V menu [Konfigurácia](../Configuration/Config-Builder) aplikácie AndroidAPS zvoľte v sekcii Pumpa možnosť Accu-Chek Insight
    
    ![Screenshot Konfigurácie pre Insight](../images/Insight_ConfigBuilder.png)

* Pre nastavenia týkajúce sa pumpy Insight, kliknite na ozubené koliesko.

* V nastaveniach kliknite na tlačidlo "Párovanie Insight" v hornej časti obrazovky. Mali by ste vidieť zoznam všetkých bluetooth zariadení v dosahu (nižšie vľavo).
* Na pumpe Insight, zvoľte Menu > Nastavenia > Komunikácia > Pridať zariadenie. Pumpa zobrazí nasledujúcu obrazovku (nižšie vpravo) zobrazujúcu sériové číslo pumpy.
    
    ![Screenshot Párovania Insight 1](../images/Insight_Pairing1.png)

* Zoberte telefón, kliknite na sériové číslo pumpy v zozname bluetooth zariadení. Potvrďte kliknutím na Párovanie.
    
    ![Screenshot Párovania Insight 2](../images/Insight_Pairing2.png)

* Na pumpe aj telefóne sa zobrazí kód. Skontrolujte či je kód rovnaký na oboch zariadeniach a potvrďte na pumpe aj telefóne.
    
    ![Screenshot Párovania Insight 3](../images/Insight_Pairing3.png)

* Hotovo! Môžete si zagratulovať, podarilo sa Vám úspešne spárovať pumpu s aplikáciou AndroidAPS.
    
    ![Screenshot Párovania Insight 4](../images/Insight_Pairing4.png)

* Pre kontrolu toho či je všetko správne nastavené, choďte v aplikácii AndroidAPS do menu Konfigurácia a kliknite na ozubené koliesko vedľa Accu-Chek Insight. Kliknite na Párovanie Insight, kde uvidíte informácie o pumpe:
    
    ![Screenshot Informácií Párovania Insight](../images/Insight_PairingInformation.png)

Poznámka: Spojenie medzi pumpou a telefónom nebude permanentné. Spojenie bude nadviazané iba keď to bude potrebné (napríklad pri nastavovaní dočasného bazálu, podávaní bolusu, čítaní histórie pumpy, ...). V opačnom prípade by sa batéria v telefóne a pumpe vybila príliš rýchlo.

## Nastavenia v AAPS

![Screenshot Nastavení Insight](../images/Insight_pairing_V2_5.png)

V nastaveniach pre Insight môžete upraviť nasledujúce možnosti:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Zaznamenať výmenu zásobníka": Pridá poznámku do databázy AndroidAPS ak na pumpe zadáte "Výmena zásobníka".
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A cannula change also resets Autosens.**
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

Po dobu, kým bola pumpa zastavená, AAPS zobrazí záznam s dočasnou bazálnou hodnotou 0%.

V AndroidAPS v záložke Accu-Check Insight sa zobrazuje aktuálny stav pumpy a 2 tlačidlá:

* "Aktualizovať": Opätovné načítanie stavu pumpy
* "Aktivovať/Deaktivovať dočasný bazál prostredníctvom notifikácie": Štandardne pumpa Insight spúšťa zvukový signál, keď je TBR dokončený. This button lets you enable or disable this alarm without the need for configuration software.
    
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