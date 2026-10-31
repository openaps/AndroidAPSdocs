# DanaR

*Tento návod slúži na nastavenie aplikácie a pumpy, ak máte pumpu DanaR. Ak máte namiesto toho DanaRS uvedenú na trh v roku 2017, pozrite si stránku [DanaRS](./DanaRS-Insulin-Pump.md).*

## Funkcie pumpy s AAPS

* Komunikuje s **AAPS** cez vlastný Bluetooth telefónu, bez ďalšieho komunikačného zariadenia.
* Zmeny časového pásma a letného času (DST) nevyžadujú žiadny zvláštny krok, pretože pumpa nepoužíva vlastnú históriu.

## Nastavenie

* V pumpe prejdite do Main Menu > Setting > User Option
* Zapnite „8. Extended Bolus“

![Pumpa DanaR](../images/danar1.png)

* Prejdite do Main Menu > Setting > Discovery
* V Bluetooth nastaveniach telefónu dajte Vyhľadať blízke zariadenia, vyberte sériové číslo vašej pumpy DanaR a zadajte heslo (heslo pre spárovanie je 0000). Ak sa DanaR pri vyhľadávaní nezobrazí, reštartujte telefón, vyberte z pumpy DanaR batériu, vložte ju späť a tieto dva kroky zopakujte.

* V **AAPS** otvorte **ponuku** (☰) v ľavom hornom rohu, prejdite do **Konfigurácia** > **Pumpa** a vyberte typ svojej pumpy DanaR (**DanaR**, **Kórejská DanaR** alebo **DanaRv2**).
  
  ![Konfigurácia > Pumpa s pluginmi DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Otvorte obrazovku pumpy: na karte DanaR ťuknite na **Otvoriť plugin** (alebo prejdite do **Spravovať** > **Pumpa**).

* Ťuknite na **Párovanie**. Na obrazovke párovania: 
  * Zadajte heslo pumpy do poľa **Heslo do pumpy** (predvolené heslo je 1234).
  * V časti **Zvoľte spárované zariadenie** ťuknite na sériové číslo svojej pumpy DanaR. Ak je zoznam prázdny, ťuknite na **Otvoriť nastavenia Bluetooth** a najprv spárujte pumpu s telefónom (pozrite krok vyššie). Keď sa vrátite do **AAPS**, pumpa sa zobrazí v zozname. Ak sa nezobrazí, ťuknite na ikonu obnovenia.
  * Ťuknite na **Párovanie**. **AAPS** sa pripojí k pumpe a overí heslo.
* Ak chcete zmeniť nastavenia ovládača, ťuknite na **Nastavenia** na karte DanaR v **Konfigurácia** > **Pumpa**: 
  * **Rýchlosť bolusu** (DanaR a DanaRv2): zmení predvolenú rýchlosť bolusu (12 s/U, 30 s/U alebo 60 s/U).
  * **Použiť predĺžené bolusy pre >200%** (DanaR a Kórejská DanaR): zapnite, ak chcete, aby **AAPS** povolilo bazálnu dávku vyššiu ako 200 %. Znamená to, že pri používaní predĺžených bolusov na jedlo nemôžete používať okruh s vysokými dočasnými bazálmi.
* Nastavte na pumpe krok bazálu na 0,01 U/h
* Nastavte na pumpe krok bolusu na 0,1 U. **AAPS** načíta krok bolusu z pumpy a používa ho pri každom boluse.
* Aktivovať v pumpe predĺžené bolusy

## Cestovanie medzi časovými pásmami s pumpou Dana R

Informácie o cestovaní cez časové pásma nájdete v časti [Cestovanie cez časové pásma s pumpami](#timezone-traveling-danarv2-danars).

## Kde získať pomoc

Vývoj ovládača DanaR robí komunita **dobrovoľne**. Skôr než požiadate o pomoc:

1. **Prečítajte si** príslušnú časť tejto dokumentácie, aby ste si overili, ako má funkcia fungovať.
2. **Opýtajte sa** na kanáli *#AAPS* na [Discorde](https://discord.gg/4fQUWHZ4Mw) alebo na niektorom z ďalších [kanálov komunity](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahláste chybu**: prehľadajte [existujúce hlásenia (issues)](https://github.com/nightscout/AndroidAPS/issues); ak tam vaša chyba nie je, otvorte [nové hlásenie](https://github.com/nightscout/AndroidAPS/issues) a priložte svoje [log súbory](../GettingHelp/AccessingLogFiles.md).

Keď žiadate o pomoc, uveďte značku a model telefónu, verziu Androidu, verziu **AAPS** a jednoduchý popis problému (čo sa zmenilo, kedy to naposledy fungovalo).