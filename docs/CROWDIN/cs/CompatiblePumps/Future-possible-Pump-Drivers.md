* * *

orphan: true

* * *

# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Pumpy, které lze provozovat se smyčkou

### Kaleido ([Domovská stránka](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

### Tandem: t:slim X2 ([Domovská stránka](https://www.tandemdiabetes.com/))

**Stav smyčky:** Prozatím bez smyčky.

Zatímco v minulosti se společnost rozhodla nepovolit, aby bylo možné jejich pumpy ovládat externími zařízeními, zdá se, že v posledních několika letech se jejich přístup změnil. Společnost se rozhodla aktualizovat svou pumpu t:slim X2, aby ji bylo možné dálkově ovládat (prostřednictvím aplikace t:connect), což znamená, že se otevřou cesty a můžeme se těšit na budoucí možnost ovládat pumpu prostřednictvím AAPS. Nový firmware pumpy má být brzy uvolněn (tento nebo příští rok, než se objeví jejich bezhadičková pumpa t:sport). Zatím nejsou známy žádné podrobnosti, které operace bude možné z aplikace t:connect provádět (bolus určitě, vše ostatní je zatím neznámé).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

Awaiting release of t:mobi in Europe (other two are not yet released anywhere). Development of AAPS t:mobi support has already started and should be available by end of 2025 (see more info on Discord).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

### Inzulínová pumpa Willcare ([Domovská stránka](http://shinmyungmedi.com/en/))

**Stav smyčky:** V tomto okamžiku to není kandidát na smyčku, ale byli jsme kontaktováni jejich zaměstnanci a mají zájem o rozšíření jejich pumpy tak, aby smyčku podporovala (v současné době tuším chybí pouze příkazy pro nastavení / načtení profilu).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

**Komentáře:** Vzhledem k tomu, že společnost má zájem o integraci AAPS, mohou udělat vlastní implementaci.

## Pumpy, které již nejsou v prodeji (společnosti již nefungují)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## Pumpy, které nelze provozovat se smyčkou

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

### Ypsomed Pump

**Comments:** Ypso added very heavy 3rd party encryption.

## Požadavky na pumpu, aby podporovala smyčku

**Předpoklady**

- Pumpa musí podporovat vzdálené ovládání (nějakou formou) (BT, Rádiovou frekvencí, atd.)
- Protokol komunikace je hacknutý/dokumentovaný/atd.

**Minimální požadavky**

- Nastavení dočasné bazální dávky
- Zjištění stavu
- Zrušení dočasné bazální dávky

**Pro oref1(SMB) nebo posílání bolusů:**

- Poslat bolus

**Hodilo by se**

- Zrušit bolus
- Načíst bazální profil (prakticky nutnost)
- Nastavit bazální profil (příjemný bonus)
- Číst historii 

**Ostatní (není vyžadováno, ale hodí se)**

- Nastavit rozšířený bolus
- Zrušit rozšířený bolus
- Číst historii
- Číst TDD

### Podpora ostatních pump

Jestliže máte jinou pumpu a chtěli byste k ní znát stav podpory, kontaktujte nás na Discordu.