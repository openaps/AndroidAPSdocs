# Detectare sensibilitate

## Algoritmul pentru sensibilitate

În acest moment există 3 modele de detectare a sensibilității:

* Sensibilitate AAPS
* Sensibilitate estimată prin mediere
* Sensibilitate Oref1

### Sensibilitate AAPS

Sensitivity is calculated the same way like Oref1 but you can specify time to the past. Minimul absorbției de carbohidrați este calculată pe baza timpului maxim al absorbției de carbohidrați din preferințe

### Sensibilitate estimată prin mediere

Sensibilitatea este calculată ca o medie ponderată pe baza variațiilor. You can specify time to the past. Variațiile mai recente valorează mai mult în calcule. Absorbția minimă de carbohidrați este calculată pe baza timpului maxim al absorbției de carbohidrați din preferințe. Acest algoritm este cel mai rapid în detectarea schimbărilor de sensibilitate.

### Sensibilitate Oref1

Sensibilitate este calculată pe baza datelor din ultimile 8 ore sau de la ultima schimbare de loc de montare a pompei, dacă aceasta a avut loc acum mai puțin de 8 ore. Carbohidrații (dacă nu au fost absorbiți) sunt ignorați după perioada de timp specificată în setări. Only the Oref1 algorithm supports un-announced meals (UAM). Aceasta înseamnă că perioadele de timp în care se consideră că acționează o masă neanunțată (UAM) este exclusă din calculul sensibilității. Deci, dacă folosiți SMB cu UAM, va trebui să alegeți algoritmul Oref1 pentru o funcționare corectă. Pentru mai multe informații puteți citi [documentația OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Simultaneous carbs

There is significant difference while using AAPS, WeightedAverage vs Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparison to Oref plugins.