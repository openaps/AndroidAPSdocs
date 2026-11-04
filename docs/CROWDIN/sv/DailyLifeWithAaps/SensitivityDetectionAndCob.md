(Sensitivity-detection-and-COB-sensitivity-detection)=

# Känslighetsdetektering

## Algoritm för känslighet

**AAPS** har just nu 3 modeller för känslighetsdetektering:

* Sensitivity AAPS
* Sensitivity WeightedAverage
* Sensitivity Oref1

### Sensitivity AAPS

Känsligheten beräknas på samma sätt som i Oref1, men du kan ange hur långt bakåt i tiden som ska användas. Den minsta kolhydratupptagningen beräknas från den maximala tiden för kolhydratupptagning som är inställd i inställningarna.

### Sensitivity WeightedAverage

Känsligheten beräknas som ett viktat medelvärde av avvikelserna. Du kan ange hur långt bakåt i tiden som ska användas. Nyare avvikelser väger tyngre. Den minsta kolhydratupptagningen beräknas från den maximala tiden för kolhydratupptagning som är inställd i inställningarna. Denna algoritm är snabbast på att följa ändringar i känsligheten.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivity Oref1

Känsligheten beräknas från data för de senaste 8 timmarna, eller från det senaste kanylbytet om det var mindre än 8 timmar sedan. Kolhydrater (som inte har tagits upp) tas bort efter den tid som är inställd i inställningarna. Bara algoritmen Oref1 stöder oannonserade måltider (UAM). Det betyder att tider med upptäckt UAM inte räknas med i beräkningen av känsligheten. Om du använder SMB med UAM måste du därför välja algoritmen Oref1 för att det ska fungera rätt. Mer information om UAM finns i avsnittet [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 är det rekommenderade valet: det är den enda algoritmen som kan upptäcka UAM och fungera med [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), den nyare algoritmen.

## Kolhydrater från flera måltider samtidigt

Det finns en stor skillnad mellan algoritmerna Sensitivity AAPS och WeightedAverage å ena sidan och Oref1 å andra sidan när flera måltider överlappar.

* Oref1 räknar med att bara en måltid tas upp åt gången: den andra måltiden börjar tas upp först när den första måltiden är helt upptagen.
* Sensitivity AAPS och WeightedAverage börjar räkna med upptagning direkt när du anger kolhydraterna. Om det finns mer än en måltid ombord anpassas den minsta kolhydratupptagningen efter måltidens storlek och den maximala tiden för upptagning. Den minsta upptagningen blir därför högre jämfört med Oref1.