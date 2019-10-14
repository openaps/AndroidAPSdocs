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

![Screenshot Nastavení Insight](../images/Insight_pairing.png)

V nastaveniach pre Insight môžete upraviť nasledujúce možnosti:

* "Zaznamenať výmenu kanyly": Automaticky zaznamená výmenu kanyly, keď na pumpe zadáte "Naplniť kanylu".  
    <font color="red">Poznámka: Výmena kanyly automaticky zresetuje Autosens</b></font>
* "Zaznamenať výmenu zásobníka": Pridá poznámku do databázy AndroidAPS ak na pumpe zadáte "Výmena zásobníka".
* "Zaznamenať výmenu batérie": Automaticky zaznamená výmenu batérie keď vložíte do pumpy novú batériu.
* "Zaznamenať zmenu režimu prevádzky": Automaticky zaznamená do databázy AndroidAPS, vždy keď spustíte, zastavíte alebo pozastavíte pumpu.
* "Zaznamenať výstrahy": Automaticky zaznamená do databázy AndroidAPS, vždy keď pumpa zahlási alarm (okrem pripomienok, podania bolusu a zrušenia dočasnej bazálnej dávky - tieto zaznamenané nie sú).
* "Povoliť emuláciu dočasných bazálov": Pumpa Insight dokáže nastaviť maximálnu dočasnú bazálnu dávku na 250%. Aby bolo možné toto obmedzenie obísť, emulácia dočasnej bazálnej dávky pošle do pumpy príkaz na podanie predĺženého bolusu a tým umožní nastaviť dočasnú bazálnu dávku vyššiu ako 250%.  
    <font color="red">Poznámka: Súčasné používanie viacerých predĺžených bolusov môže spôsobiť chybu.</font>
* "Doba trvania obnovenia spojenia": Definuje, ako dlho bude AndroidAPS čakať kým sa znovu pokúsi nadviazať spojenie s pumpou po neúspešnom pokuse o pripojenie. Môžete nastaviť od 0 do 20 sekúnd. Ak máte problémy s pripojením, nastavte si dlhšiu dobu čakania.   
      
    Príklad pre min. dobu trvania obnovenia = 5 a max. dobu trvania obnovenia = 20   
      
    žiadne spojenie -> čakaj **5** sec.   
    skúsiť znovu -> žiadne spojenie -> čakaj **6** sekúnd   
    skúsiť znovu -> žiadne spojenie -> čakaj **7** sekúnd   
    skúsiť znovu -> žiadne spojenie -> čakaj **8** sekúnd   
    ...   
    skúsiť znovu -> žiadne spojenie -> čakaj **20** sekúnd   
    skúsiť znovu -> žiadne spojenie -> čakaj **20** sekúnd   
    ...

* "Oneskorenie odpojenia": Definuje, ako dlho (v sekundách) bude AndroidAPS čakať na odpojenie od pumpy, po vykonaní zadaného príkazu v pumpe. Predvolená hodnota je 5 sekúnd.

Po dobu, kým bola pumpa zastavená, AAPS zobrazí záznam s dočasnou bazálnou hodnotou 0%.

V AndroidAPS v záložke Accu-Check Insight sa zobrazuje aktuálny stav pumpy a 2 tlačidlá:

* "Refresh": Refreshes pump status
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