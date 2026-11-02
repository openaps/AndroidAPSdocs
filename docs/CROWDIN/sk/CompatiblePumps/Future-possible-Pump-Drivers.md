# Budúce (možné) ovládače púmp

This is a list of some pumps on the market, the status of their support in other looping systems, and their status in AAPS. At the end there is some information about what a pump needs to be "Loop capable".

    {contents} Obsah
    :depth: 1
    :local: true

## Pumpy vo fáze integrácie do AAPS

**Už čoskoro:** ovládače pre tieto pumpy sa vyvíjajú a už bežia v testovacích zostaveniach.

Omnipod 5 ([domovská stránka](https://www.omnipod.com/))

![Ovládač Omnipod 5 sa vyvíja](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([domovská stránka](https://www.tandemdiabetes.com/))

![Ovládač Tandem t:Mobi sa vyvíja](../images/future-pumps/tandem-mobi-driver.png)

## Pumpy, ktoré sa dajú používať s okruhom

### Kaleido ([domovská stránka](https://www.hellokaleido.com/))

**Stav okruhu:** Pumpa je kandidátom na okruh, ale protokol zatiaľ nie je známy. Výrobca nemá záujem o otvorený zdrojový kód.

**Hardvérové požiadavky pre AAPS:** Žiadne. Zdá sa, že má Bluetooth.

### Tandem: t:slim X3 ([domovská stránka](https://www.tandemdiabetes.com/about-us/pipeline))

**Stav okruhu:** Možný budúci kandidát na okruh. Dúfame, že t:slim X3 umožní úplné ovládanie z telefónu, čo by umožnilo podporu v AAPS, ale termín a funkcie zatiaľ nie sú známe.

**Hardvérové požiadavky pre AAPS:** Žiadne. Očakáva sa, že bude mať Bluetooth.

**Poznámky:** Zatiaľ nie je vydaná. Zdá sa, že t:slim X3 má v pláne firmy Tandem opakovane nižšiu prioritu ako t:Mobi (vrátane verzie bez hadičky) a Sigi (ich náplasťová pumpa).

### Twiist ([domovská stránka](https://www.twiist.com/))

**Stav okruhu:** Kandidát na okruh.

**Hardvérové požiadavky pre AAPS:** Žiadne. Má Bluetooth.

### Inzulínová pumpa Willcare ([domovská stránka](http://shinmyungmedi.com/en/))

**Loop status:** At the moment it is not a Loop candidate, but their staff contacted us and they are interested in making the pump loopable (it seems to be missing only the get/set profile commands).

**Hardvérové požiadavky pre AAPS:** Žiadne. Zdá sa, že má Bluetooth.

**Poznámky:** Keďže firma má záujem o integráciu s AAPS, implementáciu možno urobí sama.

### Ypsopump ([domovská stránka](https://www.ypsomed.com/))

**Stav okruhu:** Kandidát na okruh. Komunita spätne analyzovala (reverse engineering) Bluetooth protokol pumpy, takže komunikácia s ňou je v princípe možná.

**Hardvérové požiadavky pre AAPS:** Žiadne. Má Bluetooth.

**Poznámky:** Ypsopump chráni svoju komunikáciu cez Bluetooth silným šifrovaním od tretej strany. Práca s ním je technicky náročná, a preto je ťažké zostaviť a udržiavať spoľahlivý ovládač. Zatiaľ neexistuje ovládač AAPS pripravený na bežné používanie.

## Pumpy, ktoré sa už nepredávajú (firmy už nefungujú)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Poznámky:** Koniec podpory v marci 2025.

## Pumpy, ktoré sa nedajú používať s okruhom

### Medtronic Bluetooth

**Poznámky:** Medtronic [odstúpil](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([domovská stránka](https://www.tandemdiabetes.com/))

**Poznámky:** Bluetooth protokol Tandem bol spätne analyzovaný, ale na t:slim X2 sa dajú podávať iba bolusy – podávanie bazálu sa ovládať nedá –, preto ho nie je možné bezpečne používať s okruhom. Je nepravdepodobné, že sa to zmení, pokiaľ Tandem neumožní úplné ovládanie X2 z telefónu, čo skôr príde s t:slim X3.

### Accu-Chek Solo

**Poznámky:** Komunite sa nepodarilo nadviazať komunikáciu s pumpou Solo.

## Požiadavky na pumpy, aby sa dali používať s okruhom

**Predpoklad**

- Pumpa musí podporovať nejaký druh diaľkového ovládania. (BT, rádiová frekvencia atď.)
- Protokol je prelomený/zdokumentovaný atď.

**Minimálna požiadavka**

- Nastaviť dočasný bazál
- Načítať stav
- Zrušiť dočasný bazál

**Pre oref1 (SMB) alebo podávanie bolusov:**

- Nastaviť bolus

**Je dobré mať**

- Zrušiť bolus
- Načítať bazálny profil (takmer povinné)
- Nastaviť bazálny profil (je dobré mať)
- Načítať históriu 

**Ostatné (nie je povinné, ale je dobré mať)**

- Nastaviť predĺžený bolus
- Zrušiť predĺžený bolus
- Načítať históriu
- Načítať CDD (TDD)

### Podpora ďalších púmp

Ak chcete poznať stav ďalších púmp, kontaktujte nás na Discorde.