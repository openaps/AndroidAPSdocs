# Filteren van bloed glucose waardes

AAPS werkt het beste wanneer de bloedglucose-gegevens vloeiend en consistent zijn. Afhankelijk van de BG bron die je gebruikt, wordt 'ruis' uit de ruwe waardes gefilterd. Met 'ruis' wordt bedoeld dat jouw glucosegrafiek eruit ziet als een schot hagel. Jouw glucosewaardes zijn dan niet betrouwbaar genoeg om bepaalde AAPS functies te gebruiken. Deze functies, zoals 'Activeer SMB altijd' en 'Gebruik SMB met koolhydraten' kunnen alleen worden gebruikt wanneer je een goed gefilterde BG bron hebt.

## Aangepaste Dexcom G5/G6 app

De Aangepaste Dexcom G5 of G6 app levert vloeiende en consistente BG gegevens. Er zijn geen beperkingen in het gebruik van SMB.

## xDrip+ app met Dexcom G5/G6

Wanneer je in xDrip+ de optie 'OB1 collector in native mode' hebt aangevinkt dan zijn jouw gegevens vloeiend en consistent genoeg. Met deze optie zijn er geen beperkingen in het gebruik van SMB. De reden hierachter is dat in de 'Native mode' xDrip+ het algoritme van de Dexcom zender gebruikt. Hierbij stuurt de zender ook informatie over 'ruis' mee, en heb je dus dezelfde waardes als wanneer je de Aangepaste Dexcom app zou gebruiken. Wanneer je de optie 'OB1 collector in native mode' niet hebt aangevinkt, dan gebruikt xDrip+ een eigen xDrip algoritme, waarbij je beperkt bent in het gebruik van SMB.

## xDrip+ app met Freestyle Libre

Wanneer je de xDrip+ app met de Freestyle Libre gebruikt dan kun je 'Activeer SMB altijd' en 'Gebruik SMB na koolhydraten' niet gebruiken, omdat hiermee je BG-waarden niet vloeiend en consistent genoeg zijn. Afgezien daarvan kun je een paar dingen doen om ruis in je gegevens te verminderen.

**Smooth Sensor Noise (ruisonderdrukking).** In xDrip+ kun je deze optie aanzetten via Instellingen > xDrip+ Display Settings > Smooth sensor noise. Hiermee worden gegevens met veel ruis, wat vloeiender gemaakt.

**Smooth Sensor Noise (Ultrasensitive) (ultragevoelige ruisonderdrukking).** Als je na het inschakelen van bovenstaande optie nog steeds veel ruis in jouw gegevens ziet, dan kun je de ruisonderdrukking wat agressiever zetten met behulp van de Smooth Sensor Noise (Ultrasensitive) optie. Hiermee zullen gegevens vloeiender worden gemaakt wanneer zeer lage niveaus van ruis worden gedetecteerd. To do this, first [enable engineering mode in xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Daarna kun je de ultragevoelige ruisonderdrukking inschakelen via Instellingen > xDrip+ Display Settings > Smooth Sensor Noise (Ultrasensitive).