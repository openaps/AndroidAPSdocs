# Nuotolinis stebėjimas

```{image} ../images/KidsMonitoring.png
:alt: "Vaik\u0173 steb\u0117jimas"
```

AndroidAPS siūlo kelis variantus vaikų nuotoliniam stebėjimui, taip pat leidžia siųsti nuotolinio valdymo komandas. Žinoma, jūs galite taip pat naudoti nuotolinį stebėjimą jūsų partneriui arba draugui.

## Funkcijos

- Vaiko pompa yra kontroliuojama per vaiko telefoną naudojant AndroidAPS.
- Tėvai gali nuotoliniu būdu sekti, matyti visus svarbius duomenis, tokius, kaip gliukozės kiekis, aktyvūs angliavandeniai, aktyvus insulinas, ir pan. naudojant **NSClient app** jų telefone. AndroidAPS ir NSClient programėlės parametrai turi būti vienodi.
- Tėvai gali gauti savo telefone perspėjimus, naudodami **xDrip+ programa sekėjo režime**.
- AndroidAPS nuotolinis valdymas naudojant [SMS Komandas](../Children/SMS-Commands.md) apsaugotas dviem autentifikavimo žingsniais.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](../Installing-AndroidAPS/Releasenotes#important-hints) for further details.

## Įrankiai ir programos, skirtos nuotoliniam stebėjimui

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
- Dexcom Follow, jei naudojate originalią Dexcom programėlę (tik glikemijos duomenys)
- [xDrip+](../Configuration/xdrip.md) sekėjo režime (glikemijos reikšmės ir **aliarmai**)
- [Sugarmate](https://sugarmate.io/) ar [Spike](https://spike-app.com/) iOS (daugiausia KG reikšmės ir **įspėjimai**)

## Būtina atsižvelgti

- Nustatyti vaikams teisingus [terapijos faktorius](../Getting-Started/FAQ#how-to-begin) (bazės, IVT, JIF...) yra sudėtinga, ypač veikiant augimo hormonams.
- AndroidAPS ir NSClient programėlės parametrai turi būti vienodi.
- Atsižvelkite į laiko tarpą tarp pagrindinio telefono ir jūsų naudojamo išmaniojo telefono komunikacijos. Tai lemia įkėlimui ir atsisiuntimui reikalingo laiko trukmė. Taip pat, pagrindinis AAPS telefonas įkelia duomenis tik tuo atveju, jei išmaniajame telefone buvo įvykdyta uždaro ciklo veikla.
- Todėl skirkite laiko, kad nustatytumėte juos teisingai ir išbandykite juos, kai vaikas yra šalia jūsų, ypač prieš pradėdami nuotolinį stebėjimą ir nuotolines terapijas. Mokyklinės atostogos gali būti labai geras laikas tam.
- Koks yra jūsų veiksmų planas, kai nuotolinis valdymas neveikia (t. y. kyla ryšio problemos)?
- Nuotolinis stebėjimas ir terapija gali būti tikrai naudingi vaikui esant darželyje ar pradinėje mokykloje. Tačiau įsitikinkite, kad mokytojai ir auklėtojai žino jūsų vaiko diabeto priežiūros planą. Tokių sveikatos priežiūros planų galima rasti [Facebook "AndroidAPS users" dokumentų skyriuje](https://www.facebook.com/groups/AndroidAPSUsers/files/).
