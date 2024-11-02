(Sensitivity-detection-and-COB-sensitivity-detection)=

# Ανίχνευση ευαισθησίας

## Αλγόριθμος ευαισθησίας

Αυτή τη στιγμή έχουμε 3 μοντέλα ανίχνευσης ευαισθησίας:

* Ευαισθησία AAPS
* Ευαισθησία WeightedAverage
* Ευαισθησία Oref1

### Ευαισθησία AAPS

Η ευαισθησία υπολογίζεται με τον ίδιο τρόπο όπως το Oref1 αλλά μπορείτε να ορίσετε χρόνο στο παρελθόν. Minimal carbs absorption is calculated from max carbs absorption time from preferences

### Ευαισθησία WeightedAverage

Sensitivity is calculated as a weighted average from deviations. Μπορείτε να καθορίσετε την ώρα στο παρελθόν. Οι νεότερες αποκλίσεις έχουν μεγαλύτερο βάρος στον υπολογισμό. Minimal carbs absorption is calculated from max carbs absorption time from preferences. Αυτός ο αλγόριθμος είναι ταχύτερος στο να ακολουθεί τις αλλαγές ευαισθησίας.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Ευαισθησία Oref1

Sensitivity is calculated from 8h data in the past or from last site change, if it is less than 8h ago. Οι υδατάνθρακες (αν δεν απορροφούνται) κόβονται μετά το χρόνο που καθορίζεται στις προτιμήσεις. Only the Oref1 algorithm supports un-announced meals (UAM). This means that times with detected UAM are excluded from sensitivity calculation. So if you are using SMB with UAM, you have to choose Oref1 algorithm to work properly. For more information read [OpenAPS Oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html).

## Ταυτόχρονοι υδατάνθρακες

There is significant difference while using AAPS, WeightedAverage vs Oref1. Oref plugins expects only one meal decaying at time. It means 2nd meal starts decaying after 1st meal is completely decayed. AAPS+Weighted average starts decaying immediately when you enter the carbs. If there is more than one meal on board, the minimum carb decay will adjust according to meal size and max absorption time. The minimum absorption accordingly will be higher in comparison to Oref plugins.