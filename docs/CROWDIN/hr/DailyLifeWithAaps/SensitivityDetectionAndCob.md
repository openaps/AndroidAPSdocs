(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detekcija osjetljivosti

## Algoritam osjetljivosti

**AAPS** trenutačno nudi 3 modela detekcije osjetljivosti:

* Osjetljivost AAPS
* Osjetljivost ponderirani prosjek
* Osjetljivost Oref1

### Osjetljivost AAPS

Osjetljivost se izračunava na isti način kao u Oref1, ali možete odrediti vremenski raspon unatrag koji se uzima u obzir. Minimalna apsorpcija ugljikohidrata izračunava se iz maksimalnog vremena apsorpcije ugljikohidrata postavljenog u postavkama.

### Osjetljivost ponderirani prosjek

Osjetljivost se izračunava kao ponderirani prosjek odstupanja. Možete odrediti vremenski raspon unatrag koji se uzima u obzir. Novija odstupanja imaju veću težinu. Minimalna apsorpcija ugljikohidrata izračunava se iz maksimalnog vremena apsorpcije ugljikohidrata postavljenog u postavkama. Ovaj algoritam najbrže prati promjene osjetljivosti.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Osjetljivost Oref1

Osjetljivost se izračunava iz podataka za zadnjih 8 sati ili od zadnje promjene mjesta primjene ako je ona bila prije manje od 8 sati. Ugljikohidrati (ako nisu apsorbirani) odbacuju se nakon vremena određenog u postavkama. Samo algoritam Oref1 podržava nenajavljene obroke (UAM). To znači da se razdoblja s otkrivenim UAM-om ne uzimaju u obzir pri izračunu osjetljivosti. Dakle, ako koristite SMB s UAM-om, morate odabrati algoritam Oref1 da bi to ispravno radilo. Više informacija o UAM-u potražite u odjeljku [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 je preporučena opcija: jedino on može otkriti UAM i raditi s [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), novijim algoritmom.

## Istodobni ugljikohidrati

Kada se više obroka preklapa, postoji značajna razlika između algoritama Osjetljivost AAPS i ponderirani prosjek s jedne strane te Oref1 s druge strane.

* Oref1 očekuje da se u jednom trenutku apsorbira samo jedan obrok: drugi obrok počinje se apsorbirati tek kada se prvi obrok potpuno apsorbira.
* Osjetljivost AAPS i ponderirani prosjek počinju s apsorpcijom odmah kada unesete ugljikohidrate. Ako je aktivno više obroka, minimalna apsorpcija ugljikohidrata prilagodit će se veličini obroka i maksimalnom vremenu apsorpcije. Zbog toga će minimalna apsorpcija biti veća nego kod Oref1.