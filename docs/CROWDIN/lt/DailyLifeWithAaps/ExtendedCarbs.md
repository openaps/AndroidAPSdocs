(Extended-Carbs-extended-carbs-ecarbs)=
# Ištęsti angliavandeniai / "iAV"

## What are eCarbs and when are they useful?

Vykdant įprastą pompos terapiją, ištęstos dozės yra tinkamas būdas susitvarkyti su riebiu ar kitokiu lėtai įsisavinamu maistu, kuris padidina gliukozės kiekį kraujyje ilgiau nei daro insulinas. Tačiau ištęsti bolusai neturi prasmės (ir sukelia techninių sunkumų), nes jie iš esmės reiškia fiksuotą aukštą laikiną valandinę bazę, o tai prieštarauja normaliam uždaro ciklo veikimui - jis dinamiškai sureguliuoja bazinius dažnius. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Tačiau vis tiek reikia susitvarkyti su tokiais patiekalais. Which is why AAPS as of version 2.0 supports so called extended carbs or eCarbs.

iAV yra angliavandeniai, kurie pasiskirsto per kelias valandas. Įprastam maistui, kuriame yra daugiau angliavandenių nei riebalų / baltymų, paprastai pakanka iš anksto įvesti angliavandenis (ir, jei reikia, sumažinti pradinį boliusą), kad insulinas nebūtų suleistas per anksti.  Tačiau lėčiau įsisavinamiems patiekalams, kai visų angliavandenių įvedimas reikš per daug aktyvaus insulino, iAV gali būti naudojamas kaip šios situacijos išsprendimas. iAV tiksliau imituoja, kaip angliavandeniai (arba angliavandenių ekvivalentai iš riebalų ir baltymų) yra įsisavinami organizme ir kaip įtakoja glikemijos pokyčius. Turėdamas šią informaciją, uždaras ciklas gali geriau panaudoti SMB šiems angliavandeniams valdyti, o tai gali būti vertinama kaip savotiškas dinamiškas atidėtasis boliusas (tai turėtų veikti be SMB, bet nėra toks pat efektyvus).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Mechanics of using eCarbs

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![Enter carbs](../images/eCarbs_Dialog.png)

Pagrindiniame ekrane atkreipkite dėmesį į angliavandenius skliausteliuose AAO lauke - tai rodomi angliavandeniai, likę ateičiai:

![eCarbs in graph](../images/eCarbs_Graph.png)

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Recommended setup, example scenario, and important notes

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Laikantis mitybos, kuriojee mažai angliavandenių, ir daugiau riebalų bei baltymų, gali pakakti įvesti tik iAV be įprasto boluso maistui (plačiau apie tai aukščiau tinklaraščio įraše). Įvedus iAV, Priežiūros portale automatiškai sukuriamas užrašas, kad būtų lengviau patikrinti ir pakoreguoti įrašus.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

Kaip jau minėta aukščiau, ištęstas arba vadinamasis daugiabangis bolusas neveikia su uždaru ciklu. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Ištęstinis bolusas ir perjungimas į atvirą ciklą - tik Dana ir Insight pompoms

Kai kurie žmonės vis dar prašė parinkties AAPS naudoti ištęstinius bolusus, nes jie norėjo su specialiu maistu elgtis taip, kaip įpratę.

Štai kodėl 2.6 versijoje yra galimybė nustatyti ištęstą bolusą Danos ir Insight pompose.

- Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

![Extended bolus in AAPS 2.6](../images/ExtendedBolus2_6.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Kodėl ištęstas bolusas neveiks uždaro ciklo aplinkoje

1. Ciklas nustato, kad turi būti suleista 1.55 vv/h. Algoritmui nesvarbu, ar suleidžiama kaip ištęstas boliusas, ar kaip TBR (laikina valandinė bazė). Tiesą sakant, kai kurios pompos naudoja ištęstus bolusus. Kas tada atsitinka? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Jeigu įvedėte ištęstą bolusą, kas turėtų atsitikti modelyje?

   1. Ar jis turėtų būti laikomas neutraliu dydžiu kartu su nustatyta valandine baze ir ciklas turėtų remtis juo kaip pagrindu? Tada ciklas taip pat turėtų galimybę sumažinti bolusą, pvz., jei glikemija nukrenta per žemai ir visas "neutralus" insulinas įsisavintas?
   2. Ar reikia tiesiog pridėti ištęstą bolusą? Taigi turėtų būti leidžiama toliau uždaram ciklui veikti? Net blogiausios hipoglikemijos atveju? Nemanau, kad tai geras dalykas: kai yra numatoma hipoglikemija, tačiau nėra imamasi jokių priemonių jos išvengti?

3. Į aktyvaus insulino kiekį, kurį kaupia ištęstas bolusas, yra atsižvelgiama po 5 minučių atliekant kitą skaičiavimą. Atitinkamai ciklas sumažintų valandinę bazę. So not much changes... except that the possibility of hypo avoidance is taken.
