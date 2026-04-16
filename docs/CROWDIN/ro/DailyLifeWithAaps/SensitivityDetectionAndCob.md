(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detectare sensibilitate

## Algoritmul de sensibilitate

În acest moment există 3 modele de detectare a sensibilității:

* Sensibilitate AAPS
* Sensibilitate estimată prin mediere
* Sensibilitate Oref1

### Sensibilitate AAPS

Sensibilitatea este calculată în același mod ca și Oref1, dar puteți specifica timpul în trecut. Absorbția minimă de carbohidrați este calculată din timpul maxim de absorbție al carbohidraților, specificat în setări

### Sensibilitate estimată prin mediere

Sensibilitatea este calculată pe baza mediei ponderate a variațiilor. Puteți specifica timpul în trecut. Variațiile mai noi au o importanță mai mare. Absorbția minimă de carbohidrați este calculată din timpul maxim pentru absorbția carbohidraților, specificat în setări. Acest algoritm este cel mai rapid în urmărirea schimbărilor de sensibilitate.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilitate Oref1

Sensibilitate este calculată pe baza datelor din ultimele 8 ore sau de la ultima schimbare de loc de montare a pompei, dacă aceasta a avut loc acum mai puțin de 8 ore. Carbohidrații (dacă nu au fost absorbiți) sunt ignorați după perioada de timp specificată în setări. Doar algoritmul Oref1 acceptă mesele neanunțate (UAM). Aceasta înseamnă că perioadele de timp în care se consideră că acționează o masă neanunțată (UAM) sunt excluse din calculul sensibilității. Deci, dacă folosiți SMB cu UAM, va trebui să alegeți algoritmul Oref1 pentru o funcționare corectă. Pentru mai multe informații puteți citi [documentația OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

Oref1 este opțiunea recomandată: este singura care poate detecta UAM și lucra cu <0>OpenAps SMB</0>, cel mai recent algoritm.

## Carbohidrați concomitenți

Există o diferență semnificativă la utilizarea AAPS, Medie Ponderată versus Oref1. Modulurile Oref se așteaptă la o singură masă care se descompune în timp. Aceasta înseamnă că a doua masă începe să se descompună după ce prima masă este complet descompusă. AAPS+Media ponderată începe să se descompună imediat după introducerea carbohidraților. Dacă la bord există mai mult de o masă, degradarea minimă a carbohidraților se va ajusta în funcție de dimensiunea mesei și de timpul maxim de absorbție. Absorbția minimă în consecință va fi mai mare în comparație cu modulurile Oref.