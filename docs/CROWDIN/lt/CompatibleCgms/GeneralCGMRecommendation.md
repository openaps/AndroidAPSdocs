# Pagrindinės NGJ rekomendacijos

## NGJ higiena

Kad ir kokią NGJ sistemą naudojate, jei kalibruojate pagal kraujo mėginį, laikykitės kelių labai aiškių taisyklių, nesvarbu, ar naudojate „pasidaryk pats“ (DIY) NGJ programinę įrangą, ar oficialias programėles.

-   Make sure hands and kit are clean.
-   Kalibruokite, kai ekrane matote kelis taškus iš eilės su horizontalia rodykle (paprastai užtenka 15–30 minučių)
-   Nekalibruokite, kai gliukozės kiekis kyla arba krenta.
-   Kalibruokite „pakankamai“ – oficialios programėlės paprašys patikrinti vieną ar du kartus per dieną. „Pasidaryk pats“ sistemos to gali neprašyti, todėl būkite atsargūs, jei toliau naudojate jas be kalibravimo.
-   Jei jutikliui kalibravimas nereikalingas arba jo kalibruoti negalima, bent kartą per dieną išmatuokite gliukozės kiekį kraujyje. AAPS bus saugi tik tiek, kiek patikimi jūsų jutiklio rodmenys.
-   Jei tik įmanoma, kalibruokite kartais esant žemesnėms reikšmėms (4–5 mmol/l arba 72–90 mg/dL), o kartais esant šiek tiek aukštesnėms (7–9 mmol/l arba 126–160 mg/dL), nes taip gaunamas geresnis intervalas taško/nuolydžio (point/slope) kalibravimui.

## Jutiklio nustatymas (G6)

Įvedant jutiklį, nerekomenduojama per daug spausti įšoviklio, kad būtų išvengta kraujavimo. Jutiklio kontaktai neturi liestis su krauju.

Įvedę jutiklį, siųstuvą galite įspausti į jutiklio laikiklį. Įspėjimas! Pirmiausia įspauskite kvadratinę pusę, tada paspauskite apvalią pusę.

(general-cgm-troubleshooting)=
## Troubleshooting

### Ryšio problemos

Bluetooth ryšį gali trikdyti kiti netoliese esantys Bluetooth įrenginiai, pavyzdžiui, gliukozės matuokliai, ausinės, planšetiniai kompiuteriai arba virtuvės prietaisai, tokie kaip mikrobangų krosnelės ar keraminės kaitlentės. Tokiu atveju xDrip nerodo jokių KG reikšmių. When Bluetooth connection is re-established the data is backfilled.

### Jutiklio klaidos

Jei pasikartoja jutiklio klaidos, pabandykite pasirinkti kitą kūno vietą jutiklio įvedimui. Jutiklio kontaktai neturi liestis su krauju.

Dažnai „Jutiklio klaidą“ galima ištaisyti iš karto atsigėrus ir pamasažavus aplink jutiklį!

### Šokinėjantys duomenys

Galite pabandyti pakeisti triukšmo blokavimo nustatymus xDrip programėlėje (Settings - Inter-App Settings - Noise Blocking), pvz., „Block Very High noise and worse“. Taip pat žr. [Gliukozės duomenų glodinimas](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Neigiamas jutiklio amžius

![Jutiklio amžius išskleisto būsenos skydelio eilutėje „Jutiklis“](../images/main/main_status_row_expanded.png)

Jutiklio amžius rodomas pagrindinio ekrano būsenos skydelio eilutėje **Jutiklis** (spauskite rodyklę, kad skydelį išskleistumėte). Neigiamas amžius atsiranda, jei yra du „Jutiklio įvedimas“ [Terapijos įrašai](#aaps-screens-careportal) arba jutiklio įvedimas su neteisinga data. Atverkite **Terapijos istorija** (meniu ☰), pasirinkite skirtuką **Terapija** ir ištrinkite neteisingą įrašą.
