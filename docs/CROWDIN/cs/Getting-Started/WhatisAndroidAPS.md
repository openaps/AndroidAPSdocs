# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Co je systém umělé slinivky? Jedná se o softwarový program, jehož účelem je simulovat chování zdravé slinivky: automaticky udržovat hladinu krevního cukru v optimálním rozmezí.

APS to sice nedokáže dělat tak dobře, jako skutečná slinivka, avšak dokáže lidem s diabetem 1 typu usnadnit zvládání nemoci, a to za použití zařízení, která jsou běžně dostupná a softwaru, který je jednoduchý a bezpečný. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Aplikace komunikuje s těmito zařízeními prostřednictvím technologie bluetooth. K výpočtu správného množství inzulínu využívá speciální algoritmus, neboli sadu pravidel, vyvinutý pro jiný systém umělé slinivky zvaný OpenAPS, který na celém světě používají tisíce lidí a eviduje miliony hodin používání.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Vytvoření tohoto systému vyžaduje odhodlání a technické znalosti. Pokud na začátku nemáte technické znalosti, na konci je mít budete. Veškeré potřebné informace naleznete v této dokumentaci, jinde na internetu nebo je získáte od ostatních uživatelů -- můžete se jich zeptat prostřednictvím skupin na Facebooku nebo v jiných diskuzních fórech. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Přečtěte licenci z této repozitoře pro další podrobnosti.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Jejich použití je pro informační účely a neznamená žádné spojení.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Jste-li připraveni přijmout tuto výzvu, čtěte dál.

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

## Jak začít

Veškerý tento obsah je samozřejmě velmi důležitý, ale může být na začátku docela matoucí. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
