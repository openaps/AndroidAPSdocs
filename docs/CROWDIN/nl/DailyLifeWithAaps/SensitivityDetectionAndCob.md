(Sensitivity-detection-and-COB-sensitivity-detection)=

# Gevoeligheidsdetectie (Autosens)

## Gevoeligheidsalgoritme

**AAPS** heeft op dit moment 3 modellen voor gevoeligheidsdetectie:

* Gevoeligheid AAPS
* Gemiddelde gevoeligheid
* Gevoeligheid Oref1

### Gevoeligheid AAPS

De gevoeligheid wordt op dezelfde manier berekend als bij Oref1, maar je kunt instellen over welke periode terug wordt gekeken. De minimale koolhydraatopname wordt berekend uit de maximale opnametijd van koolhydraten die je in de instellingen hebt ingesteld.

### Gemiddelde gevoeligheid

De gevoeligheid wordt berekend als een gewogen gemiddelde van de afwijkingen. Je kunt instellen over welke periode terug wordt gekeken. Nieuwere afwijkingen tellen zwaarder mee. De minimale koolhydraatopname wordt berekend uit de maximale opnametijd van koolhydraten die je in de instellingen hebt ingesteld. Dit algoritme volgt veranderingen in gevoeligheid het snelst.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Gevoeligheid Oref1

De gevoeligheid wordt berekend uit de gegevens van de laatste 8 uur, of vanaf de laatste canulewissel als die minder dan 8 uur geleden was. Koolhydraten die nog niet zijn opgenomen, worden afgekapt na de tijd die in de instellingen staat. Het Oref1 algoritme ondersteunt als enige UAM (onaangekondigde maaltijden, unannounced meals). Dit betekent dat periodes met gedetecteerde UAM niet worden meegeteld in de gevoeligheidsberekening. Als je SMB met UAM gebruikt, moet je dus het Oref1-algoritme kiezen om het goed te laten werken. Zie voor meer informatie over UAM het onderdeel [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 is de aanbevolen keuze: het is het enige model dat UAM kan detecteren en kan werken met [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), het nieuwere algoritme.

## Gelijktijdige koolhydraten

Als meerdere maaltijden overlappen, is er een groot verschil tussen de algoritmes Gevoeligheid AAPS en Gemiddelde gevoeligheid (WeightedAverage) aan de ene kant, en Oref1 aan de andere kant.

* Oref1 verwacht dat er maar één maaltijd tegelijk wordt opgenomen: de tweede maaltijd begint pas met opnemen als de eerste maaltijd volledig is opgenomen.
* Gevoeligheid AAPS en Gemiddelde gevoeligheid (WeightedAverage) beginnen direct met opnemen als je de koolhydraten invoert. Als er meer dan één maaltijd actief is, past de minimale koolhydraatopname zich aan aan de grootte van de maaltijd en de maximale opnametijd. De minimale opname is daardoor hoger dan bij Oref1.