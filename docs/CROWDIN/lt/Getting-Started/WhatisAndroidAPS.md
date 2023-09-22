# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Kas yra dirbtinės kasos sistema? Tai programa, kuria siekiama padaryti tai, ką daro funkcionuojanti kasa: automatiškai siekia išlaikyti sveiką gliukozės kiekį kraujyje.

APS negali atlikti tokio pat darbo kaip biologinė kasa, tačiau tai gali palengvinti I tipo cukrinio diabeto gydymą standartine įranga ir paprasta bei saugia programine įranga. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Programa susisiekia su šiais įrenginiais Bluetooth ryšiu. Dozė apskaičiuojama naudojant algoritmą ar taisyklių rinkinį, sukurtą kitai dirbtinei kasai, vadinamai OpenAPS. OpenAPS turi tūkstančius vartotojų, kurie sukaupė milijonus valandų naudojimo.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Sistemai sukurti reikia ryžto ir techninių žinių. Jei pradžioje vis dar trūksta techninių žinių, pabaigoje jas turėsite. Visą jums reikalingą informaciją galite rasti šiame ir kituose interneto puslapiuose. Arba galite užduoti savo klausimus Facebook grupėse ar kituose forumuose patyrusiems vartotojams. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout neatitinka jokių privatumo reikalavimų sveikatos priežiūros srityje. Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Norėdami gauti daugiau informacijos, perskaitykite šios saugyklos LICENCIJĄ.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Jie naudojami tik informaciniais tikslais ir nereiškia, kad AAPS priklauso jiems ir kad jie yra palaikomi.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Jei esate pasirengęs priimti šį iššūkį, skaitykite toliau.

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

## Kaip pradėti

Žinoma, visa čia pateikiama informacija yra labai svarbi jūsų uždarojo ciklo sistemai, tačiau taip pat normalu, kad daugelis naujų dalykų iš pradžių atrodo painūs. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
