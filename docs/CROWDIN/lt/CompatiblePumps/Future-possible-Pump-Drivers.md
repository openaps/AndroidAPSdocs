# Ateities (galimos) pompų tvarkyklės

Tai sąrašas kai kurių rinkoje esančių pompų, jų palaikymo būsenos kitose ciklo sistemose ir jų būsenos AAPS. Pabaigoje rasite informaciją, ko reikia, kad pompą būtų galima naudoti cikle („Loop capable“).

    {contents} Turinys
    :depth: 1
    :local: true

## Pompos, kurių integracija į AAPS vykdoma

**Netrukus:** šių pompų tvarkyklės kuriamos ir jau veikia testinėse versijose.

Omnipod 5 ([svetainė](https://www.omnipod.com/))

![Kuriama Omnipod 5 tvarkyklė](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([svetainė](https://www.tandemdiabetes.com/))

![Kuriama Tandem t:Mobi tvarkyklė](../images/future-pumps/tandem-mobi-driver.png)

## Pompos, kurias galima naudoti cikle

### Kaleido ([svetainė](https://www.hellokaleido.com/))

**Tinkamumas ciklui:** pompa galėtų būti naudojama cikle, bet šiuo metu protokolas nežinomas. Gamintojas nesidomi atviruoju kodu.

**Aparatinės įrangos reikalavimai AAPS:** nėra. Atrodo, kad turi BT.

### Tandem: t:slim X3 ([svetainė](https://www.tandemdiabetes.com/about-us/pipeline))

**Tinkamumas ciklui:** ateityje galbūt tiks ciklui. Tikimasi, kad t:slim X3 leis pompą visiškai valdyti telefonu, o tai leistų ją palaikyti AAPS, tačiau terminai ir funkcijos dar nežinomi.

**Aparatinės įrangos reikalavimai AAPS:** nėra. Tikimasi, kad ji turės Bluetooth.

**Pastabos:** dar neišleista. Panašu, kad Tandem planuose t:slim X3 ne kartą buvo nustumta į antrą planą dėl t:Mobi (įskaitant versiją be vamzdelio) ir Sigi (jų pompos be vamzdelio).

### Twiist ([svetainė](https://www.twiist.com/))

**Tinkamumas ciklui:** tinka ciklui.

**Aparatinės įrangos reikalavimai AAPS:** nėra. Ji turi Bluetooth.

### Willcare insulino pompa ([svetainė](http://shinmyungmedi.com/en/))

**Tinkamumas ciklui:** šiuo metu ji netinka ciklui, tačiau su mumis susisiekė gamintojo darbuotojai, kurie nori pompą pritaikyti ciklui (atrodo, kad trūksta tik profilio gavimo ir nustatymo komandų).

**Aparatinės įrangos reikalavimai AAPS:** nėra. Atrodo, kad turi BT.

**Pastabos:** kadangi įmonė domisi integracija su AAPS, ji gali tai įgyvendinti pati.

### Ypsopump ([svetainė](https://www.ypsomed.com/))

**Tinkamumas ciklui:** tinka ciklui. Bendruomenė iššifravo pompos Bluetooth protokolą, todėl ryšys su ja iš principo yra įmanomas.

**Aparatinės įrangos reikalavimai AAPS:** nėra. Ji turi Bluetooth.

**Pastabos:** Ypsopump Bluetooth ryšį saugo stipriu trečiosios šalies šifravimu. Dirbti su juo techniškai sudėtinga, todėl sunku sukurti ir prižiūrėti patikimą tvarkyklę. Kol kas nėra kasdieniam naudojimui paruoštos AAPS tvarkyklės.

## Nebeparduodamos pompos (įmonės nebeveikia)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Pastabos:** palaikymas baigiasi 2025 m. kovo mėn.

## Pompos, kurių negalima naudoti cikle

### Medtronic Bluetooth

**Pastabos:** Medtronic [pasitraukė](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([svetainė](https://www.tandemdiabetes.com/))

**Pastabos:** Tandem Bluetooth protokolas iššifruotas, tačiau su t:slim X2 galima leisti tik bolusus, o valandinės bazės valdyti negalima, todėl jos negalima saugiai naudoti cikle. Mažai tikėtina, kad tai pasikeis, nebent Tandem leis visiškai valdyti X2 telefonu, o tai greičiau atsiras su t:slim X3.

### Accu-Chek Solo

**Pastabos:** bendruomenei nepavyko užmegzti ryšio su Solo pompa.

## Reikalavimai, kad pompą būtų galima naudoti cikle

**Būtinos sąlygos**

- Pompa turi palaikyti tam tikrą nuotolinį valdymą. (BT, radijo dažniai ir pan.)
- Protokolas yra iššifruotas, aprašytas ar pan.

**Minimal requirement**

- Nustatyti laikiną valandinę bazę
- Gauti būseną
- Atšaukti laikiną valandinę bazę

**oref1 (SMB) arba bolusams:**

- Set Bolus

**Pageidautina**

- Cancel Bolus
- Gauti valandinės bazės profilį (beveik būtina)
- Nustatyti valandinės bazės profilį (pageidautina)
- Nuskaityti istoriją 

**Kita (nebūtina, bet pageidautina)**

- Nustatyti ištęstą bolusą
- Cancel Extended Bolus
- Nuskaityti istoriją
- Nuskaityti BPD

### Kitų pompų palaikymas

Jei norite sužinoti kitų pompų būseną, susisiekite su mumis Discord serveryje.