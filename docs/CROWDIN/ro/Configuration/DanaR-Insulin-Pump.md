# Pompa DanaR

*Aceste instrucțiuni sunt destinate configurării aplicației și pompei pentru modelul de pompă DanaR. Accesați [Pompa de insulină DanaRS](./DanaRS-Insulin-Pump) dacă aveți modelul de pompă DanaRS lansat în 2017.*

* În pompă mergeți la Main Menu > Setting > User Option
* Porniți "8. Bolus extins"

![Pompă DanaR](../images/danar1.png)

* Mergeți la Main Menu > Setting > Discovery
* În setările telefonului mergeți la Bluetooth, scanați pentru găsirea de dispozitive bluetooth în apropiere, selectați numărul seriei pompei DanaR și introduceți parola (parola de împerechere este 0000). Dacă DanaR nu apare în lista de dispozitive bluetooth găsite la scanare, restartați telefonul și scoateți bateria din pompa DanaR, înlocuiți-o și apoi porniți pașii de instalare de la început.

* În AndroidAPS mergeți la Config Builder și selectați tipul de pompă DanaR pe care îl aveți (DanaR, DanaR coreeană sau DanaRv2)

* Selectați Menu prin apăsarea celor 3 puncte aflate în partea dreaptă sus. Alegeți Menu prin apăsarea celor 3 puncte aflate în dreapta sus. Alegeți Preferences.
* Alegeți dispozitivul bluetooth DanaR și dați click pe numărul serial al pompei dumneavoastră DanaR.
* Selectați parola pompei și introduceți parola dumneavoastră. (Parola implicită este 1234)
* Dacă doriți ca AndroidAPS să permită rate bazale mai mari de 200%, activați Use extended bolus for >200%. Notă: aceasta înseamnă că nu veți putea folosi bucla cu RBT mărite în timp ce utilizați bolusuri extinse pentru mâncare.
* În Preferences, sub setările pompei DanaR, puteți schimba viteza implicită folosită pentru livrarea bolusurilor (12 secunde per unitate, 30 secunde per unitate sau 60 de secunde per unitate de insulină livrată).
* Stabiliți pasul ratei bazale din pompă la 0.01 U/o
* Set bolus step on pump to 0.1 U/h
* Activați bolusurile extinse în pompă

## Traversarea fusurilor orare cu pompa Dana R

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#danarv2-danars).