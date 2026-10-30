# DanaR

*Tyto pokyny jsou určeny pro konfiguraci aplikace a vaší pumpy, pokud máte DanaR. Pokud místo toho máte DanaRS uvedenou na trh v roce 2017, přečtěte si stránku [Inzulínová pumpa DanaRS](./DanaRS-Insulin-Pump.md).*

## Možnosti pumpy s AAPS

* Komunikuje s **AAPS** přes vestavěný Bluetooth vašeho telefonu, bez dalšího komunikačního zařízení.
* Změny časového pásma a letního času nevyžadují žádný zvláštní krok, protože pumpa nepoužívá vlastní historii.

## Nastavení

* Na pumpě přejděte do Hlavního menu > Nastavení > Uživatelská volba
* Povolte "8. Prodloužený bolus"

![Pumpa DanaR](../images/danar1.png)

* Přejděte do Hlavního menu > Nastavení > Objevování
* V nastavení telefonu přejděte na Bluetooth, vyhledejte blízká zařízení, vyberte sériové číslo vašeho DanaR a zadejte své heslo (Párovací heslo je 0000). Pokud DanaR není zobrazen v prohledávání, restartujte telefon a vyjměte baterii DanaR, vložte ji zpět a začněte tyto dva kroky znovu.

* V **AAPS** otevřete **nabídku** (☰) v levém horním rohu, přejděte do **Konfigurace** > **Pumpa** a vyberte typ své pumpy DanaR (**DanaR**, **Korejská DanaR** nebo **DanaRv2**).
  
  ![Konfigurace > Pumpa s pluginy DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Otevřete obrazovku pumpy: na kartě DanaR klepněte na **Otevřít plugin** (nebo přejděte do **Spravovat** > **Pumpa**).

* Klepněte na **Párování**. Na obrazovce párování: 
  * Zadejte heslo své pumpy do pole **Heslo k pumpě** (výchozí heslo je 1234).
  * V části **Vyberte spárované zařízení** klepněte na sériové číslo své pumpy DanaR. Pokud je seznam prázdný, klepněte na **Otevřít nastavení Bluetooth** a nejprve spárujte pumpu s telefonem (viz krok výše). Když se vrátíte do **AAPS**, pumpa se objeví v seznamu. Pokud ne, klepněte na ikonu obnovení.
  * Klepněte na **Párování**. **AAPS** se připojí k pumpě a ověří heslo.
* Chcete-li změnit nastavení ovladače, klepněte na **Nastavení** na kartě DanaR v **Konfigurace** > **Pumpa**: 
  * **Rychlost bolusu** (DanaR a DanaRv2): změní výchozí rychlost bolusu (12 s/U, 30 s/U nebo 60 s/U).
  * **Použít prodloužené bolusy pro >200%** (DanaR a Korejská DanaR): zapněte, pokud chcete, aby **AAPS** povolil bazální dávku nad 200 %. Mějte na paměti, že pak nemůžete používat smyčku s vysokými dočasnými bazály, když zároveň používáte prodloužené bolusy na jídlo.
* Nastavte bazální krok na pumpě na 0,01 U/h
* Nastavte bolusový krok na pumpě na 0,1 U. **AAPS** načte bolusový krok z pumpy a použije ho pro každý bolus.
* Povolte prodloužené bolusy na pumpě

## Cestování přes časová pásma s pumpou Dana R

Informace o cestování přes časová pásma najdete v části [Cestování přes časová pásma s pumpami](#timezone-traveling-danarv2-danars).

## Kde získat pomoc

Vývoj ovladače DanaR dělá komunita na **dobrovolnické** bázi. Než požádáte o pomoc:

1. **Přečtěte si** příslušnou část této dokumentace a ověřte si, jak má funkce fungovat.
2. **Zeptejte se** na kanálu *#AAPS* na [Discordu](https://discord.gg/4fQUWHZ4Mw) nebo v jiném z [komunitních kanálů](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahlaste chybu**: prohledejte [existující issues](https://github.com/nightscout/AndroidAPS/issues); pokud tam vaše chyba není, založte [nové issue](https://github.com/nightscout/AndroidAPS/issues) a přiložte své [soubory záznamů](../GettingHelp/AccessingLogFiles.md).

Když žádáte o pomoc, uveďte značku a model telefonu, verzi Androidu, verzi **AAPS** a popis problému v angličtině jednoduchými slovy (co se změnilo, kdy to naposledy fungovalo).