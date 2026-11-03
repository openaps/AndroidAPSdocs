# Dexcom G6 ir ONE

## Pirmiausia pagrindai

-   Laikykitės bendrųjų NGJ higienos ir jutiklio įvedimo rekomendacijų, pateiktų [čia](../CompatibleCgms/GeneralCGMRecommendation.md).

## Bendri patarimai, kaip naudoti ciklą su G6 ir ONE

- Naujesni siųstuvai vadinami Firefly. Jutiklių negalima paleisti iš naujo nenuėmus siųstuvo, o paties siųstuvo negalima atstatyti. Be to, jie neteikia neapdorotų (raw) duomenų.

- Jei jutiklius paleidžiate iš naujo, būkite pasiruošę kalibruoti ir stebėkite reikšmių svyravimus.

- Jei G6/ONE su gamykline kalibracija įvedate iš anksto (pre-soak), reikšmės greičiausiai svyruos. Jei jutiklį įvedate anksčiau, nei jį startuojate, gali reikėti jį kalibruoti, kad gautumėte geriausius rezultatus.

Daugiau skaitykite [straipsnyje](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), kurį Tim Street paskelbė svetainėje [www.diabettech.com](https://www.diabettech.com).

## Jei naudojate G6 arba ONE su xDrip

- Jei dar nenustatėte, atsisiųskite [xDrip](https://github.com/NightscoutFoundation/xDrip) ir pakeiskite jo nustatymus pagal [xDrip nustatymų puslapį](../CompatibleCgms/xDrip.md).
- Pasirinkite xDrip skiltyje [**Konfigūracija → Glikemijos šaltinis**](#Config-Builder-bg-source).
- Dexcom G6 ir ONE siųstuvai vienu metu gali būti prijungti prie Dexcom imtuvo (arba t:slim pompos) ir prie vienos programėlės jūsų telefone.
- Kai xDrip naudojate kaip imtuvą, pirmiausia pašalinkite Dexcom programėlę. **Negalite vienu metu prijungti prie siųstuvo ir xDrip, ir Dexcom programėlės!**
- Jei jums reikia Clarity ir norite naudotis xDrip aliarmais, naudokite [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (tik G6) su vietiniu transliavimu (local broadcast) į xDrip.
- xDrip taip pat galite naudoti kaip oficialios Dexcom programėlės pagalbinę programėlę (companion app), tačiau KG reikšmės gali vėluoti.
- Su dabartiniais siųstuvais xDrip visada naudoja siųstuvo [vidinį algoritmą](https://navid200.github.io/xDrip/docs/Native-Algorithm.html); jo išjungti nėra jokios priežasties. [Prevenciniai paleidimai iš naujo](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) veikia tik su senais siųstuvais (programinė įranga 1.6.5.25 ar senesnė), kur jie reikalingi, kad jutiklis nesustotų po 10 dienų; naujesni (Firefly) siųstuvai jų nepaiso. Prieš bandydami paleisti jutiklį iš naujo, perskaitykite [Jutiklio paleidimas iš naujo](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Viskas, kas susiję su pačiu jutikliu ir siųstuvu, aprašyta [xDrip Dexcom puslapyje](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Jei naudojate G6 su Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA yra labai sena programėlės versija, jos atnaujinti negalima.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) palaiko vietinį duomenų transliavimą į AAPS ir (arba) xDrip

-   Ši programėlė leidžia naudoti Dexcom G6 su bet kuriuo Android išmaniuoju telefonu.
-   Pašalinkite originalią arba pakeistą Dexcom programėlę, jei anksčiau naudojote vieną iš jų (**nestabdykite** šiuo metu veikiančio jutiklio)
-   Įdiekite atsisiųstą apk
-   Pakeistoje programėlėje įveskite jutiklio kodą ir siųstuvo serijos numerį.
-   Telefono nustatymuose atverkite apps > Dexcom G6 > permissions > additional permissions ir paspauskite 'Access Dexcom app'.
-   Netrukus BYODA turėtų pagauti siųstuvo signalą.

### AAPS nustatymai

-   Skiltyje [**Konfigūracija → Glikemijos šaltinis**](#Config-Builder-bg-source) pasirinkite **BYODA**.

-   Jei negaunate jokių reikšmių, pasirinkite bet kurį kitą duomenų šaltinį, tada vėl pasirinkite **BYODA**, kad būtų paprašyta leidimų, reikalingų ryšiui tarp AAPS ir BYODA transliacijos sukurti.

### xDrip nustatymai

-   Kaip duomenų šaltinį pasirinkite '640G/Eversense'.
-   Kad gautumėte reikšmes, xDrip programėlėje reikia įvykdyti komandą 'start sensor'. Tai nepaveiks dabartinio jutiklio, kurį valdo Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## G6 ir ONE trikčių šalinimas

### Dexcom G6/ONE trikčių šalinimas

-   Slinkite žemyn iki **Troubleshooting** [čia](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Bendrasis trikčių šalinimas

Bendrąjį NGJ trikčių šalinimą rasite [čia](#general-cgm-troubleshooting).

### Naujas siųstuvas su veikiančiu jutikliu

Jei keisite siųstuvą, kai jutiklis veikia, galite pabandyti jį nuimti nepažeisdami paties jutiklio platformos. Vaizdo įrašą rasite [čia](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Jei vietoj to pasirinksite [šį sprendimą](https://youtu.be/tx-kTsrkNUM), būkite atsargūs, kad juostele nepažeistumėte [jutiklio kontaktų](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
