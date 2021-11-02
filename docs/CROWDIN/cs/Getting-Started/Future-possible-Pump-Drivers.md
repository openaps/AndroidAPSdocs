# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Pumpy, které lze provozovat se smyčkou

### Omnipod DASH ([Domovská stránka](https://www.myomnipod.com/DASH))

**Stav smyčky:** Očekává se, že podpora Omnipod DASH bude dostupná v [AndroidAPS 3.0.0.](../Installing-AndroidAPS/Releasenotes#version-300)

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

### Pumpa Ypsomed ([Domovská stránka](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Stav smyčky:** Verze 1 - 1.5 (2. kvartál/2018) nejsou kandidáti pro smyčku. I když mají BT komunikaci, komunikace je velmi omezená a pouze jednosměrná: z pumpy -> do aplikace. Do konce roku 2021 se plánuje, že společnost uvolní novou verzi přezdívanou DOSE (1.6), která umožní nastavovat bolus a dočasný bazál z jejich aplikace. V roce 2022 plánují uvedení vlastní smyčky s vlastní aplikací. Více informací najdete na této [stránce](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardwarové požadavky na AAPS:** Žádné. Podporuje bluetooth.

**Poznámky:** Na ovladači aktuálně pracují 2 skupiny vývojářů, po uvedení nové verze proto očekáváme, že bude podpora AAPS dostupná. Jednu skupinu podporuje společnost YpsoMed a pomáhá při lékařských zkouškách, které probíhají v Austrálii, druhá skupina pracuje nezávisle na reverzním inženýrství původní aplikace.

* * *

### Kaleido ([Domovská stránka](https://www.hellokaleido.com/))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem na smyčku, ale jelikož je zatím neznámý její komunikační protokol, nezdá se, že by tato pumpa byla brzy podporovaná.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

### Medtrum A6/P6/C6 ([Domovská stránka](https://www.medtrum.com/product/nanopump.html))

**Stav smyčky:** Je kandidátem na smyčku. Společnost má svůj vlastní omezený systém polosmyčky (A6). Ovládání prostřednictvím aplikace pro iPhone. Žádná aplikaci pro Android aktuálně není k dispozici.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### EOFLOW ([Domovská stránka](http://www.eoflow.com/eng/main/main.html))

**Stav smyčky:** Je kandidátem na smyčku. Dálkové ovládání, které používá, je ve skutečnosti upraveným zařízením se systémem Android. (Pumpa je v současnosti dostupná pouze v Koreji).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### Accu-Chek Solo ([Domovská stránka](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Stav smyčky:** Je kandidátem na smyčku.

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

**Poznámky:** Existuje pár vývojářů, kteří se snaží dekódovat protokol, stále je to však v přípravné fázi.

* * *

### Tandem: t:slim X2 ([Domovská stránka](https://www.tandemdiabetes.com/))

**Stav smyčky:** Prozatím bez smyčky.

Zatímco v minulosti se společnost rozhodla nepovolit, aby bylo možné jejich pumpy ovládat externími zařízeními, zdá se, že v posledních několika letech se jejich přístup změnil. Společnost se rozhodla aktualizovat svou pumpu t:slim X2, aby ji bylo možné dálkově ovládat (prostřednictvím aplikace t:connect), což znamená, že se otevřou cesty a můžeme se těšit na budoucí možnost ovládat pumpu prostřednictvím AAPS. Nový firmware pumpy má být brzy uvolněn (tento nebo příští rok, než se objeví jejich bezhadičková pumpa t:sport). Zatím nejsou známy žádné podrobnosti, které operace bude možné z aplikace t:connect provádět (bolus určitě, vše ostatní je zatím neznámé).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

* * *

### Tandem: t:sport ([Domovská stránka](https://www.tandemdiabetes.com/about-us/pipeline))

**Stav smyčky:** Je kandidátem na smyčku. Pumpa ještě nebyla uvedena, ale proces FDA již běží, takže by měla být venku spíše brzy než později (v USA).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

* * *

### Medtronic Bluetooth

**Komentáře:** Tato pumpa má přijít během několika příštích let a plánuje se, že bude podporovat software Tidepool Loop ([viz tento článek](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Inzulínová pumpa Willcare ([Domovská stránka](http://en.shinmyungmedi.com))

**Stav smyčky:** V tomto okamžiku to není kandidát na smyčku, ale byli jsme kontaktováni jejich zaměstnanci a mají zájem o rozšíření jejich pumpy tak, aby smyčku podporovala (v současné době tuším chybí pouze příkazy pro nastavení / načtení profilu).

**Hardwarové požadavky na AAPS:** Žádné. It seems to be BT enabled.

**Komentáře:** Vzhledem k tomu, že společnost má zájem o integraci AAPS, mohou udělat vlastní implementaci.

* * *

## Pumpy, které již nejsou v prodeji (společnosti již nefungují)

### Pumpa Cellnovo ([viz businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem na smyčku, ale jelikož je zatím neznámý její komunikační protokol, nezdá se, že by tato pumpa byla brzy podporovaná.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

**Poznámka k produktu:** Zdá se, že společnost se rozhodla opustit trh s pumpami. Více informací viz tento [článek](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpy, které nelze provozovat se smyčkou

### Animas Vibe

**Stav smyčky:** Nelze použít pro smyčku. Není k dispozici (bezdrátový) ovladač. **Poznámka:** Pumpa se již neprodává. Společnost opustila trh s pumpami (J&J).

* * *

### Animas Ping

**Stav smyčky:** Nelze použít pro smyčku. Dokáže vydávat bolusy, ale ne dočasné bazály. **Poznámka** Přestala se prodávat s příchodem modelu Vibe.

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

* * *

### Podpora ostatních pump

Jestliže máte jinou pumpu a chtěli byste k ní znát stav podpory, kontaktujte nás na Discordu.