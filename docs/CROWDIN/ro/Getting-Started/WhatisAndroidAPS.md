# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Ce este un sistem de pancreas artificial? Este un program software care are ca scop să facă ce face un pancreas: să tina în mod automat valorile glicemiei în limite sănătoase.

Un APS nu poate face treaba la fel de bine ca un pancreas biologic dar poate face ca diabetul de tip 1 să fie mai uşor de gestionat folosind dispozitive disponibile pe piaţă şi programe software uşor de utilizat şi sigure. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Aplicaţia comunică cu aceste dispozitive prin bluetooth. Aceasta calculează doze folosind un algoritm, sau set de reguli, dezvoltat pentru un alt sistem de pancreas artificial, OpenAPS, cu mii de utilizatori și milioane de ore de funcționare.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Setarea sistemului necesită determinare şi cunoştinţe tehnice. Dacă nu ai cunoștințele tehnice la început, până ajungi la sfârșit vei avea. Toate informațiile de care ai nevoie pot fi găsite în aceste documente, în altă parte online sau le poti afla de la alții care au făcut deja AAPS- poti întreba în grupuri Facebook sau alte forumuri. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Dacă ești pregătit pentru provocare, citește mai departe.

## Primary goals behind AAPS

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
