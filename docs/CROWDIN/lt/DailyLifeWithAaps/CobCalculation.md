# AAO apskaičiavimas

## How does AAPS calculate the COB value?

Kai naudotojas įveda angliavandenius kaip valgio įrašą arba angliavandenių korekciją, **AAPS** prideda šį kiekį prie dabartinių aktyvių angliavandenių (**AAO**). Tada **AAPS** apskaičiuoja angliavandenių įsisavinimą pagal stebimus naudotojo **KG** reikšmių nuokrypius. Įsisavinimo greitis priklauso nuo jautrumo angliavandeniams faktoriaus (**CSF**). Tai nėra naudotojo **profilio** nustatymas. Jį apskaičiuoja **AAPS** pagal **JIF/IA** nustatymus. Jis parodo, keliais mg/dL 1 g angliavandenių pakelia naudotojo **KG**.

## Carb Sensitivity Factor

The formula adopted by **AAPS** is:

- absorbed_carbs = deviation * ic / isf.

Poveikis naudotojo **profiliui**:

- _padidinus_ **IA**, kas 5 minutes įsisavinama daugiau angliavandenių, todėl bendras įsisavinimo laikas sutrumpėja;

- _padidinus_ **JIF**, kas 5 minutes įsisavinama mažiau angliavandenių, todėl bendras įsisavinimo laikas pailgėja; ir

- _Pakeitus_ **profilio procentą**, abi reikšmės padidinamos arba sumažinamos, todėl angliavandenių įsisavinimo laikas nepasikeičia.

Pavyzdžiui, jei naudotojo **profilio** **JIF** yra 100, o **IA** yra 5, naudotojo jautrumo angliavandeniams faktorius bus 20. Kiekvieną kartą, kai naudotojo **KG** pakyla 20 mg/dL, **AAPS** laiko, kad įsisavintas 1 g angliavandenių. Positive **IOB** also affects the **COB** calculation. Taigi, jei **AAPS** prognozuoja, kad dėl **AIO** naudotojo **KG** nukris 20 mg/dL, o ji nepasikeitė, **AAPS** taip pat laikys, kad įsisavintas 1 g angliavandenių.

Carbs will also be absorbed via the methods described below based on which sensitivity algorithm has been selected within the user's **AAPS**.

## Carbs Sensitivity - Oref1

Unabsorbed carbs are cut off after specified time:

![Oref1](../images/cob_oref0_orange_II.png)

![AAO grafikas su Oref1 ribiniu laiku](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
Aukščiau pateikta ekrano kopija yra iš ankstesnės **AAPS** versijos. **AAPS** 4 versijoje grafikai atrodo šiek tiek kitaip, bet **AAO** grafikas rodo tą pačią informaciją.
```


## Carbs Sensitivity - WeightedAverage

Įsisavinimas apskaičiuojamas taip, kad praėjus nustatytam laikui AAO = 0:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Jei vietoj reikšmės, apskaičiuotos pagal **KG** nuokrypius, naudojamas minimalus angliavandenių įsisavinimas (min_5m_carbimpact), **AAO** grafike atsiranda oranžinis taškas.

(CobCalculation-detection-of-wrong-cob-values)=
## Neteisingų AAO reikšmių aptikimas

**AAPS** įspės naudotoją, jei jis ruošiasi suleisti bolusą atsižvelgdamas į ankstesnio valgymo **AAO**, o algoritmas nustato, kad dabartinis **AAO** skaičiavimas neteisingas. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### How does AAPS detect wrong COB values?

Paprastai __AAPS__ nustato angliavandenių įsisavinimą pagal **KG** nuokrypius. Jei naudotojas įvedė angliavandenius, bet **AAPS** negali nustatyti numatomo jų įsisavinimo pagal **KG** nuokrypius, įsisavinimui apskaičiuoti bus naudojamas [min_5m_carbimpact](#Preferences-min_5m_carbimpact) metodas (vadinamasis atsarginis metodas, angl. fallback). Kadangi šiuo metodu apskaičiuojamas tik minimalus angliavandenių įsisavinimas, neatsižvelgiant į **KG** nuokrypius, AAO reikšmės gali būti neteisingos.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

Pirmiau pateiktoje ekrano kopijoje 66 % laiko angliavandenių įsisavinimas buvo apskaičiuojamas pagal min_5m_carbimpact, o ne pagal nuokrypius nustatytą reikšmę. This indicates that the user may have had less **COB** than calculated by the algorithm.

### Kaip elgtis su tokiu įspėjimu?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- Būkite atsargūs: venkite insulino perdozavimo ir dozių poveikio susidėjimo!


### Kodėl algoritmas nenustato AAO teisingai?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- Reikia pakoreguoti IA.
- Klaidinga min_5m_carbimpact reikšmė (rekomenduojama 8 su SMB, 3 su AMA).


## Įvestų angliavandenių koregavimas rankiniu būdu

Jei angliavandenių kiekis buvo įvestas per didelis arba per mažas, jį galima pataisyti ekrane **Terapijos istorija**, kaip aprašyta [čia](#screens-bolus-carbs).


## Angliavandenių korekcija: kaip ištrinti angliavandenių įrašą iš terapijos istorijos


Ekrane **Terapijos istorija** klaidingą angliavandenių įrašą galima pataisyti jį ištrinant. This may be because the user over or underestimated the carb entry:

![Angliavandenių įrašo ištrynimas iš terapijos istorijos](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Patikrinkite ir įsiminkite dabartinius **AAO** ir **AIO** pagrindiniame **AAPS** ekrane.
2. Atidarykite **Terapijos istorija** (šoninis meniu → *Terapijos istorija*), skirtuką **AV ir bolusai**. Priklausomai nuo pompos, angliavandeniai gali būti rodomi vienoje eilutėje kartu su insulinu arba kaip atskiras įrašas (pvz., su Dana RS).
3. **Ilgai palaikykite** klaidingą angliavandenių įrašą. Sąrašas persijungia į **pasirinkimo režimą**: prie kiekvienos eilutės atsiranda žymimasis langelis, o įrašas pažymimas (aukščiau pažymėta **1**). Pažymėkite ir kitus įrašus, kuriuos taip pat norite pašalinti.
4. Viršutinėje juostoje bakstelėkite piktogramą **🗑 Ištrinti** (pažymėta **2**) ir patvirtinkite. Patvirtinimo lange tiksliai nurodyta, kas bus pašalinta.
5. Įsitikinkite, kad angliavandeniai sėkmingai pašalinti: dar kartą patikrinkite **AAO** pagrindiniame **AAPS** ekrane.
6. Jei angliavandeniai ir insulinas buvo vienoje eilutėje, taip pat patikrinkite **AIO**.
7. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
8. Įveskite teisingą angliavandenių kiekį lange **Angliavandeniai** (**Terapija** → **Angliavandeniai**) ir nustatykite teisingą įvykio laiką.
9. Jei angliavandeniai ir insulinas buvo vienoje eilutėje, naudotojas turi iš naujo įvesti ir insulino kiekį. Būtinai nustatykite teisingą įvykio laiką ir, patvirtinę naują įrašą, patikrinkite **AIO** pagrindiniame ekrane.

