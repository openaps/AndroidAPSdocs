# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Medtronic

**Stav smyčky:** Některé starší verze pump jsou použitelné k uzavřené smyčce, ale nikoliv jejich novější modely (viz níže)

**Jiné implementace:** OpenAPS, Loop

**Java implementace:** Částečná implementace dostupná [Roundrtrip2](https://github.com/TC2013/Roundtrip2) a [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) - rozšíření RT2 je téměř hotové

**Stav implementace AAPS:** Začíná. Více viz [Andyho AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (výchozí branch). Stav: Základní integrace hotová (Medtronic Tab), nyní máme Medtronic virtuální pumpu. Aktuálně se většina práce odehrává v [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS), aby začal fungovat framework a příkazy. V daném repository je projekt (Medtronic) a otevřené tikety pro budoucí vývoj, vývoj je prováděný na branchi dev_medtronic (což je zde výchozí branch). K dispozici je také místnost na gitteru: RileyLinkAAPS/Lobby. Už se provádí pokusná integrace s AAPS, ale ještě není zralá k testování.

**Hardwarové požadavky pro AAPS:** RileyLink

** Verze s podporou uzavřené smyčky:** 512-522, 523 (firmware 2.4A nebo nižší), 554 (EU firmware 2.6A nebo nižší, CA firmware 2.7A nebo nižší). Totéž platí pro 7xx verze. Všechna ostatní zařízení nejsou podporovaná a pravděpodobně ani nebudou.

* * *

## Insulet Omnipod

**Stav smyčky:** Aktuálně nepodporováno, ale na dekódování Omnipod protokolu se usilovně pracuje - [OpenOmni](http://www.openomni.org/).

**Jiné implementace:** Loop (implementace je na začátku, pokud vím, podařilo se jim inicializovat pod a poslat mu první dočasný bazál). Více viz [Openomni on github](https://github.com/openaps/openomni)

**Java implementace:** Žádné.

**Stav implementace AAPS** Práce byla zahájena v [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) pro Omnipod (dev_omnipod branch), ale od prototypu je ještě daleko (vývojář začal pracovat na změnách potřebných pro RL firmware 2.0). Můžete sledovat postup na https://omniaps.slack.com/ kanál android-driver. Vývojář zde zveřejňuje postup práce.

**Hardwarové požadavky pro AAPS:** RileyLink s Omnipod firmware (2.0)

**Poznámka:** Omnipod DASH se zatím neplánuje. Jakmile bude připravená java implementace pro standardní Omnipod, bude se na ní navazovat. Pokud se (omnipod) protokol neliší, můžeme implementaci očekávat o několik měsíců později, pokud se protokol změnil, tak to bude trvat o něco déle.

* * *

## Pumpa Ypsomed

**Stav smyčky:** Verze 1 - 1.5 (2. kvartál/2018) nejsou kandidáti pro smyčku. Přestože mají bluetooth komunikaci, zdá se, že je rozsah komunikace velmi limitovaný (jednosměrný: pumpa -> aplikace). Možná se to v budoucích verzích změní.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

## Pumpa Cellnovo

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem na smyčku, ale jelikož je zatím neznámý její komunikační protokol, nezdá se, že by tato pumpa byla brzy podporovaná.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

## Animas Vibe

**Stav smyčky:** Nelze použít pro smyčku. Není k dispozici (bezdrátový) ovladač.

* * *

## Animas Ping

**Stav smyčky:** Aktuálně není podporovaná žádným systémem smyčky, ale mohla by být kandidátem, protože nabízí jistý druh vzdáleného ovládání. Vzhledem k tomu, že se jedná o hodně starou pumpu, asi nebude podporovaná nikde.

* * *

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
- Načíst bazální profil
- Nastavit bazální profil
- Číst historii 

**Jiné**

- Nastavit rozšířený bolus
- Zrušit rozšířený bolus

* * *

## Podpora ostatních pump

Jestliže máte jinou pumpu a chtěli byste k ní znát stav podpory, kontaktujte mě, prosím (@andyrozman na gitteru). Řada pump (a jejich konfigurací) bude v budoucím vydání přidána jako s Open smyčkou (budete moci vybrat typ virtuální pumpy v konfiguraci a vaše nastavení bude načteno - [Požadavek #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).