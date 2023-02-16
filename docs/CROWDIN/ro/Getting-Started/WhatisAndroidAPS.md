# Ce este un sistem de buclă închisă cu AndroidAPS?

AndroidAPS este o aplicație care acționează ca un sistem de pancreas artificial (APS) pe un smartphone Android. Ce este un sistem de pancreas artificial? Este un program software care are ca scop să facă ce face un pancreas: să tina în mod automat valorile glicemiei în limite sănătoase.

Un APS nu poate face treaba la fel de bine ca un pancreas biologic dar poate face ca diabetul de tip 1 să fie mai uşor de gestionat folosind dispozitive disponibile pe piaţă şi programe software uşor de utilizat şi sigure. Dispozitivele includ un sistem de monitorizare continua a glicemiei (CGM) care informeaza AndroidAPS despre valorile glicemiei şi o pompă de insulină controlata de AndroidAPS pentru a elibera doze adecvate de insulină. Aplicaţia comunică cu aceste dispozitive prin bluetooth. Aceasta calculează doze folosind un algoritm, sau set de reguli, dezvoltat pentru un alt sistem de pancreas artificial, OpenAPS, cu mii de utilizatori și milioane de ore de funcționare.

Atenție: AndroidAPS nu este reglementat de vreo autoritate medicală din nicio țară. Utilizand AndroidAPS efectuezi, în principal, un experiment medical asupra propriei persoane. Setarea sistemului necesită determinare şi cunoştinţe tehnice. Dacă nu ai cunoștințele tehnice la început, până ajungi la sfârșit vei avea. Toate informațiile de care ai nevoie pot fi găsite în aceste documente, în altă parte online sau le poti afla de la alții care au făcut deja AAPS- poti întreba în grupuri Facebook sau alte forumuri. Multe persoane au construit cu succes AndroidAPS și îl folosesc acum în deplină siguranță, dar este esențial ca fiecare utilizator:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Dacă ești pregătit pentru provocare, citește mai departe.

## AndroidAPS Obiective principale

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Cum să începi

Desigur, tot acest conținut este foarte important, dar poate fi la început destul de confuz. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
