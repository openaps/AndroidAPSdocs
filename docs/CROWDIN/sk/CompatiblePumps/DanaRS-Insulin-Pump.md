# DanaRS, Dana-i a Dana-i2

*Tento návod slúži na nastavenie aplikácie a pumpy, ak máte DanaRS z roku 2017 alebo novšiu, Dana-i alebo Dana-i2. Ak máte pôvodnú pumpu DanaR, pozrite si stránku [DanaR](./DanaR-Insulin-Pump.md).*

**Dana-i2 je možné používať od verzie AAPS 4.0.** Používa rovnaký ovládač **Dana-i/RS** ako Dana-i.

* V pumpe DanaRS/i/i2 aplikácia používa „BASAL A“. Existujúce údaje sa prepíšu.

    {contents} Obsah
    :depth: 1
    :local: true

## Funkcie pumpy s AAPS

* Komunikuje s **AAPS** cez vlastný Bluetooth telefónu, bez ďalšieho komunikačného zariadenia.
* Zmeny letného času (DST) a časového pásma treba riešiť ručne (pozrite [Cestovanie cez časové pásma](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Párovanie pumpy

* Otvorte **ponuku** (☰) v ľavom hornom rohu hlavnej obrazovky **AAPS** a vyberte **Konfigurácia**.
* Ťuknite na **Pumpa** a vyberte **Dana-i/RS**.
    
    ![Konfigurácia > Pumpa s pluginom Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Keď je vybraná, karta **Dana-i/RS** zobrazuje dve tlačidlá, **Nastavenia** a **Otvoriť plugin**:
    
    ![Plugin Dana-i/RS vybraný v Konfigurácia > Pumpa](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Nastavenia** otvoria nastavenia ovládača Dana-i/RS:
    
    ![Nastavenia ovládača Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Otvoriť plugin** (alebo **Spravovať** > **Pumpa**) otvorí obrazovku pumpy Dana-i/RS. Kým nie je pumpa spárovaná, vyzerá takto:
    
    ![Obrazovka pumpy Dana-i/RS pred spárovaním](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* Na obrazovke pumpy ťuknite na **Párovanie**. **AAPS** vyhľadá pumpy v okolí.

* V zozname ťuknite na položku svojej pumpy.
    
    ![Obrazovka Párovanie so zoznamom, v ktorom je pumpa Dana nájdená vyhľadávaním](../images/DanaRS_i_Pairing.png)

* **Párovanie musíte potvrdiť na pumpe!** Funguje to rovnako ako iné párovania cez Bluetooth, ktoré možno poznáte (napríklad smartfón a autorádio).
    
    ![Dana RS – potvrdenie párovania](../images/DanaRS_Pairing.png)

* Postupujte pri párovaní podľa typu a firmvéru svojej pumpy:
    
    * Pri DanaRS v1 si **AAPS** vypýta **Heslo pumpy (iba v1)**. Zadajte heslo pumpy (pozrite [Predvolené heslo](#DanaRS-Insulin-Pump-default-password)).
    * Pri DanaRS v3 vás **AAPS** požiada, aby ste stlačili OK na pumpe a zadali 2 postupnosti čísel a písmen, ktoré zobrazí pumpa. Kým nie ste hotoví, udržujte displej pumpy zapnutý stláčaním tlačidla mínus. Potom ťuknite na **Hotovo**.
    * Pri Dana-i a Dana-i2 sa zobrazí štandardný dialóg Androidu na párovanie. Zadajte 6-miestne číslo, ktoré zobrazuje pumpa.

* Keď sa zobrazí **Spárovanie úspešné!**, ťuknite na **Hotovo**.
    
    ![Spárovanie úspešné!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Ste späť na obrazovke pumpy, ktorá teraz zobrazuje stav vašej pumpy.
    
    ![Obrazovka pumpy Dana-i/RS po spárovaní](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* V **Nastaveniach** vyberte **Rýchlosť bolusu**, ak chcete zmeniť predvolenú rýchlosť bolusu (12 s/U, 30 s/U alebo 60 s/U).

* V lekárskej ponuke (Doctors menu) nastavte na pumpe krok bazálu na 0,01 U/h (pozrite návod na použitie pumpy).
* V lekárskej ponuke (Doctors menu) nastavte na pumpe krok bolusu na 0,05 U (pozrite návod na použitie pumpy). **AAPS** načíta z pumpy krok bazálu a bolusu a používa ich pri každom boluse, takže bolus vždy zodpovedá kroku nastavenému na pumpe. Obrazovka pumpy ich zobrazuje v riadku **Krok bazálu/bolusu**.
* Aktivovať v pumpe predĺžené bolusy

### Možnosti zobrazené iba pri niektorých modeloch

* **Automatické uzamknutie**: pri Dana-i2 má obrazovka **Používateľské nastavenia** (na obrazovke pumpy, **Spravovať** > **Pumpa**) prepínač **Automatické uzamknutie** pre nastavenie automatického uzamknutia pumpy. Po jeho zmene stlačte **Uložiť nastavenia do pumpy**.
* **Jednoduchý režim**: pri modeloch púmp, ktoré majú jednoduchý režim ponuky, zobrazuje obrazovka pumpy riadok **Jednoduchý režim** s hodnotou **ZAP** alebo **VYP**.
* Ak Dana-i2 odmietne bolus, **AAPS** zobrazí dôvod, napríklad *Pumpa nie je naplnená*, *V zásobníku inzulínu nie je dostatočné množstvo inzulínu* alebo *V pumpe je zapnutý režim spánku*.

(DanaRS-Insulin-Pump-default-password)=

### Štandardné heslo

* DanaRS s firmvérom v1 a v2 má štandardne heslo 1234.
* Pri DanaRS s firmvérom v3 alebo Dana-i sa predvolené heslo odvodzuje od dátumu výroby a počíta sa ako MMDD, kde MM je mesiac a DD deň, keď bola pumpa vyrobená (napr. „0124“ znamená mesiac 01 a deň 24).
    
    * V ponuke MAIN MENU vyberte REVIEW a potom v podponuke otvorte SHIPPING INFORMATION
    * Number 3 is manufacturing date. 
    * Pri v3/i sa toto heslo používa iba na uzamknutie ponuky na pumpe. Nepoužíva sa na komunikáciu a nie je potrebné ho zadávať v AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Zmena hesla na pumpe

* Stlačte tlačidlo OK na pumpe
* V hlavnej ponuke vyberte „OPTION“ (posuňte sa doprava niekoľkonásobným stlačením tlačidla so šípkou)
    
    ![DanaRS – hlavná ponuka (Main Menu)](../images/DanaRSPW_01_MainMenu.png)

* V ponuke možností vyberte „USER OPTION“
    
    ![DanaRS – ponuka možností (Option Menu)](../images/DanaRSPW_02_OptionMenu.png)

* Tlačidlom so šípkou prejdite nadol na „11. password“
    
    ![DanaRS 11. Heslo](../images/DanaRSPW_03_11PW.png)

* Stlačte OK pre zadanie starého hesla.

* Zadajte **staré heslo** (predvolené heslo pozrite [vyššie](#DanaRS-Insulin-Pump-default-password)) a stlačte OK
    
    ![DanaRS – zadanie starého hesla](../images/DanaRSPW_04_11PWenter.png)

* Ak tu zadáte nesprávne heslo, nezobrazí sa žiadna správa o chybe!

* Nastavte **nové heslo** (čísla meníte tlačidlami + a - / doprava sa posuniete tlačidlom so šípkou).
    
    ![DanaRS – nové heslo](../images/DanaRSPW_05_PWnew.png)

* Potvrďte tlačidlom OK.

* Nastavenie uložte stlačením OK.
    
    ![DanaRS – uloženie nového hesla](../images/DanaRSPW_06_PWnewSave.png)

* Prejdite nadol na „14. EXIT“ a stlačením OK ponuku opustite.
    
    ![DanaRS – ukončenie (Exit)](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Chyby špecifické pre Dana RS

### Chyba pri podávaní inzulínu

Ak sa počas podávania bolusu preruší spojenie medzi AAPS a Dana RS (napr. sa vzdialite od telefónu, kým Dana RS podáva inzulín), uvidíte nasledujúcu správu a budete počuť zvuk alarmu.

![Alarm pri podávaní inzulínu](../images/DanaRS_Error_bolus.png)

* Vo väčšine prípadov ide len o problém s komunikáciou a podá sa správne množstvo inzulínu.
* V histórii pumpy skontrolujte, či bol podaný správny bolus. Môžete to urobiť priamo na pumpe alebo v **AAPS** na obrazovke pumpy (**Spravovať** > **Pumpa**) > **História pumpy** > **Bolusy**.
* Ak chcete, chybový záznam vymažte v [ošetreniach](#screens-bolus-carbs).
* Skutočné množstvo sa načíta a zaznamená pri ďalšom pripojení. Ak to chcete vynútiť, ťuknite na obrazovke pumpy na **Obnoviť**, alebo jednoducho počkajte na ďalšie pripojenie.

## Zvláštna poznámka pri výmene telefónu

Pri prechode na nový telefón sú potrebné tieto kroky:

* [Exportujte nastavenia](../Maintenance/ExportImportSettings.md) v starom telefóne
* Prenos nastavení zo starého telefónu do nového

### DanaRS v1

* **Ručne spárujte** Dana RS s novým telefónom
* Ak pri importe zaškrtnete **Nahradiť aj nastavenia pumpy**, importujú sa aj nastavenia pripojenia k pumpe a AAPS v novom telefóne bude pumpu už „poznať“, takže nespustí vyhľadávanie cez Bluetooth. Preto treba nový telefón a pumpu spárovať ručne.
* Nainštalujte AAPS do nového telefónu.
* [Importujte nastavenia](../Maintenance/ExportImportSettings.md) v novom telefóne

### DanaRS v3, Dana-i, Dana-i2

* Spustite párovanie, ako je opísané [vyššie](#DanaRS-Insulin-Pump-pairing-pump).
* Niekedy môže byť potrebné najprv vymazať informácie o párovaní v **AAPS**. Na obrazovke pumpy (**Spravovať** > **Pumpa**) ťuknite na **Zrušiť párovanie** a potvrďte **Reset informácií o párovaní?**. Potom znova ťuknite na **Párovanie**.

## Cestovanie cez časové pásma s pumpami DanaRS, Dana-i a Dana-i2

Informácie o cestovaní cez časové pásma nájdete v časti [Cestovanie cez časové pásma s pumpami](#timezone-traveling-danarv2-danars).

## Kde získať pomoc

Vývoj ovládača DanaRS/Dana-i/Dana-i2 robí komunita **dobrovoľne**. Skôr než požiadate o pomoc:

1. **Prečítajte si** príslušnú časť tejto dokumentácie, aby ste si overili, ako má funkcia fungovať.
2. **Opýtajte sa** na kanáli *#AAPS* na [Discorde](https://discord.gg/4fQUWHZ4Mw) alebo na niektorom z ďalších [kanálov komunity](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahláste chybu**: prehľadajte [existujúce hlásenia (issues)](https://github.com/nightscout/AndroidAPS/issues); ak tam vaša chyba nie je, otvorte [nové hlásenie](https://github.com/nightscout/AndroidAPS/issues) a priložte svoje [log súbory](../GettingHelp/AccessingLogFiles.md).

Keď žiadate o pomoc, uveďte značku a model telefónu, verziu Androidu, verziu **AAPS** a jednoduchý popis problému (čo sa zmenilo, kedy to naposledy fungovalo).