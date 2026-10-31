# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

    {contents} Obsah
    :depth: 1
    :local: true

## Pumpy ve fázi integrace do AAPS

**Již brzy:** ovladače pro tyto pumpy se vyvíjejí a už běží v testovacích sestaveních.

Omnipod 5 ([Domovská stránka](https://www.omnipod.com/))

![Ovladač pro Omnipod 5 ve vývoji](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Domovská stránka](https://www.tandemdiabetes.com/))

![Ovladač pro Tandem t:Mobi ve vývoji](../images/future-pumps/tandem-mobi-driver.png)

## Pumpy, které lze provozovat se smyčkou

### Kaleido ([Domovská stránka](https://www.hellokaleido.com/))

**Stav smyčky:** Pumpa je kandidátem na smyčku, ale protokol zatím není znám. Výrobce nemá zájem o open source.

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

### Tandem: t:slim X3 ([Domovská stránka](https://www.tandemdiabetes.com/about-us/pipeline))

**Stav smyčky:** Možný budoucí kandidát na smyčku. Doufáme, že t:slim X3 umožní plné ovládání z telefonu, což by umožnilo podporu v AAPS, ale termín ani funkce zatím nejsou známé.

**Hardwarové požadavky na AAPS:** Žádné. Očekává se, že bude podporovat Bluetooth.

**Komentáře:** Zatím nebyla vydána. Zdá se, že Tandem ve svém plánu opakovaně odsouvá t:slim X3 a dává přednost t:Mobi (včetně verze bez hadičky) a Sigi (jejich náplasťové pumpě).

### Twiist ([Domovská stránka](https://www.twiist.com/))

**Stav smyčky:** Kandidát na smyčku.

**Hardwarové požadavky na AAPS:** Žádné. Podporuje Bluetooth.

### Inzulínová pumpa Willcare ([Domovská stránka](http://shinmyungmedi.com/en/))

**Stav smyčky:** V tomto okamžiku to není kandidát na smyčku, ale byli jsme kontaktováni jejich zaměstnanci a mají zájem o rozšíření jejich pumpy tak, aby smyčku podporovala (v současné době tuším chybí pouze příkazy pro nastavení / načtení profilu).

**Hardwarové požadavky na AAPS:** Žádné. Zdá se, že podporuje BT.

**Komentáře:** Vzhledem k tomu, že společnost má zájem o integraci AAPS, mohou udělat vlastní implementaci.

### Ypsopump ([Domovská stránka](https://www.ypsomed.com/))

**Stav smyčky:** Kandidát na smyčku. Komunita provedla zpětnou analýzu (reverse engineering) Bluetooth protokolu pumpy, takže komunikace s ní je v principu možná.

**Hardwarové požadavky na AAPS:** Žádné. Podporuje Bluetooth.

**Komentáře:** Ypsopump chrání svou komunikaci přes Bluetooth silným šifrováním od třetí strany. Práce s ním je technicky náročná, a proto je těžké vytvořit a udržovat spolehlivý ovladač. Zatím neexistuje ovladač pro AAPS připravený pro běžné používání.

## Pumpy, které již nejsou v prodeji (společnosti již nefungují)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Komentáře:** Konec podpory v březnu 2025.

## Pumpy, které nelze provozovat se smyčkou

### Medtronic Bluetooth

**Komentáře:** Medtronic [odstoupil](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Domovská stránka](https://www.tandemdiabetes.com/))

**Komentáře:** Bluetooth protokol Tandem byl zpětně analyzován, ale na t:slim X2 lze podávat pouze bolusy – bazál ovládat nelze – takže ji nelze bezpečně používat pro smyčku. To se pravděpodobně nezmění, dokud Tandem neumožní plné ovládání X2 z telefonu, což spíše přijde až s t:slim X3.

### Accu-Chek Solo

**Komentáře:** Komunitě se zatím nepodařilo s pumpou Solo komunikovat.

## Požadavky na pumpu, aby podporovala smyčku

**Předpoklady**

- Pumpa musí podporovat vzdálené ovládání (nějakou formou) (BT, Rádiovou frekvencí, atd.)
- Protokol komunikace je hacknutý/dokumentovaný/atd.

**Minimální požadavky**

- Nastavení dočasného bazálu
- Zjištění stavu
- Zrušení dočasného bazálu

**Pro oref1(SMB) nebo posílání bolusů:**

- Poslat bolus

**Hodilo by se**

- Zrušit bolus
- Načíst bazální profil (prakticky nutnost)
- Nastavit bazální profil (příjemný bonus)
- Číst historii 

**Ostatní (není vyžadováno, ale hodí se)**

- Nastavit prodloužený bolus
- Zrušit prodloužený bolus
- Číst historii
- Číst TDD

### Podpora ostatních pump

Jestliže máte jinou pumpu a chtěli byste k ní znát stav podpory, kontaktujte nás na Discordu.