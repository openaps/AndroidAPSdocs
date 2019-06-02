# Vertraagde koolhydraten / "eCarbs"

Bij reguliere pomptherapie zijn vertraagde bolussen / multiwave bolussen handig voor vette maaltijden (pizza, pasta, pannenkoeken etc) die je bloedglucose lange tijd laten stijgen, langer dan de insuline bij een normale bolus werkzaam zou zijn. In een closed loop is dat echter niet zo zinvol (en geeft het technische problemen) omdat vertraagde/multiwave bolussen door de pomp worden uitgevoerd als een langdurige en vooraf gedefinieerde hoge basaal. Dat conflicteert met de loop, die de basaalstanden juist dynamisch aanpast. En dus moet de loop op een andere manier omgaan met dit soort maaltijden. Daarom is in AndroidAPS vanaf versie 2.0 een optie ingebouwd die "eCarbs" heet. Dat staat voor extended Carbs (vertraagde koolhydraten).

eCarbs zijn koolhydraten die over meerdere uren worden uitgespreid. Voor standaard maaltijden met meer koolhydraten dan vet/eiwit, is het gebruik van eCarbs niet persé nodig. Daarbij is het voldoende om een deel van de koolhydraten in te voeren via de bolus calculator (daarvoor wordt dan meteen gebolust), en het resterende deel van de koolhydraten in te voeren via de Koolhydraten knop (daarvoor geeft de loop gedurende een langere periode SMB's af, gebaseerd op de BG stijging die hij ziet). Dit voorkomt een al te snelle insulineafgifte en dus een hypo na de maaltijd.   
Maar voor langzamer absorberende maaltijden kunnen beter wel eCarbs worden gebruikt. Anders zou (zeker bij gebruik van SMB) de IOB veel te snel oplopen terwijl de maaltijd je BG slechts langzaam laat stijgen, met een hypo als resultaat. Dankzij eCarbs wordt veel beter gesimuleerd hoe de koolhydraten (en evt. ook alle koolhydraat-equivalenten die je invoert voor vetten/eiwitten) worden geabsorbeerd en hoe die invloed hebben op je BG. Met deze informatie kan de loop geleidelijk aan SMB's afgeven om die koolhydraten aan te pakken. Deze methode zou je als een dynamische vorm van een vertraagde/multiwave bolus kunnen zien. (Opmerking: we gaan er hierbij vanuit dat je SMB's gebruikt, dit zou ook moeten werken zonder SMB's, maar is waarschijnlijk minder effectief).

Het nut van eCarbs is niet beperkt tot vette / eiwitrijke maaltijden. Ze zijn ook handig als door andere invloeden de bloedglucose gedurende meerdere uren flink stijgt, bijvoorbeeld bij medicijnen zoals corticosteroïden.

Voor het invoeren van eCarbs gebruik je de knop *Koolhydraten* op het Overzicht-scherm. Vul de duur in, het aantal koolhydraten en desgewenst een timeshift. In dit voorbeeld zie je dat iemand 25 gram koolhydraten wil 'uitsmeren' tussen 15:43 en 17:43 (het screenshot is om 14:43 gemaakt):

<img src="https://1.bp.blogspot.com/-gnWKSBIBO2g/WuTPV0Rya3I/AAAAAAAAAEg/BvqiZYrsuKcgbny5t1sHWlPS6feWq-xEwCLcBGAs/s1600/Screenshot_20180427-144305.png" width=400>

Je ziet de eCarbs in de grafiek terug als kleine beetjes van 3 gram in de toekomst. En je ziet de 25 gram koolhydraten bij COB staan, tussen haakjes omdat het toekomstige koolhydraten zijn:

<img src="https://4.bp.blogspot.com/-sgc9XdUeaoQ/WuTPXxfaIuI/AAAAAAAAAEk/p7toa_aq_oIWWTnzoQFUPHt4JdPkaXrwwCLcBGAs/s1600/Screenshot_20180427-144324.png" width=400>

Op de Behandelingen tab zie je koolhydraten staan, ze zijn donker oranje omdat ze in de toekomst zijn:

<img src="https://user-images.githubusercontent.com/1732305/38613978-e6d1748e-3d8b-11e8-9d62-154fe73443da.png" width=400>

* * *

Hier kun je lezen (in het Engels) hoe Adrian eCarbs gebruikt bij een maaltijd met vooral eiwit en vet: https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html

* * *

Voor onderstaand voorbeeld wordt aangeraden om OpenAPS SMB APS te gebruiken, met SMB ingeschakeld en de instelling *SMB met koolhydraten* ingeschakeld te hebben.

Een scenario voor bijvoorbeeld een pizza zou zijn om een gedeeltelijke bolus voor de maaltijd via de *bolus calculator* te geven en via de knop *koolhydraten* de resterende koolhydraten gedurende 4 a 6 uur, te laten beginnen na 1 of 2 uur. Je zult natuurlijk moeten uitproberen welke precieze waarden voor jou werken. Hierbij kun je ook (in kleine, verstandige stapjes) variëren met de instelling *max aantal minuten basaal om de SMB te limiteren tot* om het algoritme agressiever/minder agressief te laten zijn. Voor maaltijden met nauwelijks koolhydraten en een hoog vet/eiwitgehalte kan het genoeg zijn om alleen eCarbs te gebruiken en geen bolus (zie de blogpost hierboven).

Iedere keer dat je eCarbs invoert, wordt er in jouw Careportal automatisch een opmerking toegevoegd. Hierdoor kun je de eerdere keren gemakkelijk terugvinden, zodat je jouw aanpak kunt evalueren en verbeteren voor de volgende keer. Of gewoon herhalen wat je eerder deed, als dat voor jou goed werkte.