* * *

orphan: true

* * *

# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Pumpy, které lze provozovat se smyčkou

### Pumpa Ypsomed ([Domovská stránka](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Stav smyčky:** Verze 1 - 1.5 (2. kvartál/2018) nejsou kandidáti pro smyčku. While they do have BT communication, communication is very limited and uni directional: Pump->App. In June 2022 (in Germany) company released, new version nicknamed DOSE (1.6), which allows setting bolus and TBR from their App. Plan to implement their own Loop was cancelled and they decided to partner up with CamAPS (support already implemented) and use their loop solution. Více informací najdete na této [stránce](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardwarové požadavky na AAPS:** Žádné. Podporuje bluetooth.

**Comments:** Dose version of pump had very heavy encryption added, so there is big probababilty that this pump won't be supported by AAPS in near future (or ever). We had developer working with Ypsomed and helping with medical trials, so maybe his version of driver will be alowed to be released, but this is just small possibility of that. You can find more information on our discord in channel "ypsopump-talk".

### Kaleido ([Domovská stránka](https://www.hellokaleido.com/))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem na smyčku, ale jelikož je zatím neznámý její komunikační protokol, nezdá se, že by tato pumpa byla brzy podporovaná.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

### Equil (pump from Aidex/GlucoRx/MicroTechMD) ([Homepage](https://www.glucorx.ie/glucorx-equil/))

**Stav smyčky:** Je kandidátem na smyčku.

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

**Comment:** Some people started looking into supporting pump in AAPS, but this is still in beginning phases. You can find more information on our discord in channel "equil".

### Accu-Chek Solo ([Domovská stránka](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Stav smyčky:** Je kandidátem na smyčku.

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

**Poznámky:** Existuje pár vývojářů, kteří se snaží dekódovat protokol, stále je to však v přípravné fázi.

### Tandem: t:slim X2 ([Domovská stránka](https://www.tandemdiabetes.com/))

**Stav smyčky:** Prozatím bez smyčky.

Zatímco v minulosti se společnost rozhodla nepovolit, aby bylo možné jejich pumpy ovládat externími zařízeními, zdá se, že v posledních několika letech se jejich přístup změnil. Společnost se rozhodla aktualizovat svou pumpu t:slim X2, aby ji bylo možné dálkově ovládat (prostřednictvím aplikace t:connect), což znamená, že se otevřou cesty a můžeme se těšit na budoucí možnost ovládat pumpu prostřednictvím AAPS. Nový firmware pumpy má být brzy uvolněn (tento nebo příští rok, než se objeví jejich bezhadičková pumpa t:sport). Zatím nejsou známy žádné podrobnosti, které operace bude možné z aplikace t:connect provádět (bolus určitě, vše ostatní je zatím neznámé).

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

They plan to release t:Mobi first (previously called t:sport) at end of 2022 or in 2023. Afterwards they will release t:slim X3 (2023 maybe) and after that t:Mobi Tubeless. t:mobi's will be controlable only over phone app, while X3 will look similar as X2, with some new nifty features (remote update of firmware, remote control over phone app, etc).

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

### Inzulínová pumpa Willcare ([Domovská stránka](http://shinmyungmedi.com/en/))

**Stav smyčky:** V tomto okamžiku to není kandidát na smyčku, ale byli jsme kontaktováni jejich zaměstnanci a mají zájem o rozšíření jejich pumpy tak, aby smyčku podporovala (v současné době tuším chybí pouze příkazy pro nastavení / načtení profilu).

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

**Komentáře:** Vzhledem k tomu, že společnost má zájem o integraci AAPS, mohou udělat vlastní implementaci.

## Pumpy, které již nejsou v prodeji (společnosti již nefungují)

### Pumpa Cellnovo ([viz businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem na smyčku, ale jelikož je zatím neznámý její komunikační protokol, nezdá se, že by tato pumpa byla brzy podporovaná.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

**Poznámka k produktu:** Zdá se, že společnost se rozhodla opustit trh s pumpami. Více informací viz tento [článek](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpy, které nelze provozovat se smyčkou

### Animas Vibe

**Stav smyčky:** Nelze použít pro smyčku. Není k dispozici (bezdrátový) ovladač. **Poznámka:** Pumpa se již neprodává. Společnost opustila trh s pumpami (J&J).

### Animas Ping

**Stav smyčky:** Nelze použít pro smyčku. Dokáže vydávat bolusy, ale ne dočasné bazály. **Poznámka** Přestala se prodávat s příchodem modelu Vibe.

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

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