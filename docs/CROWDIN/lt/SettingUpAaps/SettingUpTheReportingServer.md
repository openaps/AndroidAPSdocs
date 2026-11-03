# Ataskaitų serverio nustatymas

Šiuo metu su **AAPS** galima naudoti du ataskaitų serverius:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Ataskaitų serveriai](../images/Building-the-App/ReportingServer.png)

Rekomenduojame naudoti Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout yra žiniatinklio programa, kuri gali įrašyti ir rodyti jūsų NGJ ir **AAPS** duomenis bei kurti ataskaitas. Tai galinga platforma, kuri jau daug metų yra integruota į **AAPS**. Jis leidžia naudotojams ir globėjams beveik realiuoju laiku sekti paciento diabeto duomenis (jei visų susijusių komponentų interneto ryšys pakankamas, nuo duomenų gavimo iki jų pateikimo gali praeiti vos kelios sekundės). Juo taip pat perduodamos nuotolinės komandos, kurias prižiūrintys asmenys siunčia į **AAPS** iš **AAPSClient** (žr. [Pagrindinio įrenginio ↔ kliento valdymas](#client-master-control)).

Nightscout yra atvirojo kodo programinė įranga. Nightscout serverį gali susikurti ir valdyti bet kas, naudodamas nemokamas arba mokamas paslaugas.

Daugiau informacijos rasite [Nightscout projekto svetainėje](http://nightscout.github.io/).

### 1 variantas – Nightscout serverį nustatykite patys

Kuriant Nightscout ataskaitų serverį, gali prireikti vienos ar kelių žiniatinklio programų, kurias reikės prižiūrėti. Jei norite, kad paslauga būtų visiškai nemokama, gali tekti perkelti savo Nightscout svetainę ir duomenis, jei ir kai paslaugų teikėjai panaikins nemokamą planą.

Kaip nustatyti Nightscout, kokie yra įvairių veikimo variantų privalumai ir trūkumai, taip pat apytikslės išlaidos, aprašyta [čia](https://nightscout.github.io/nightscout/new_user/#free-diy).

### 2 variantas – mokėkite už Nightscout talpinimo paslaugą

Taip pat yra įvairių paslaugų teikėjų, kurie už mėnesinį mokestį talpina Nightscout už jus. Kaina nedidelė, o talpinimo paslaugos privalumas – jums nereikia IT žinių ar savos veikiančios infrastruktūros.


Esami Nightscout naudotojai kartais gali peržiūrėti, kur ir kaip talpinamas jų Nightscout serveris, ir pereiti prie kito varianto, jei jis tinka geriau.

Kai kurie paslaugos teikėjai, siūlantys Nightscout, išvardyti [čia](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Tolesnis Nightscout konfigūravimas

Kai jūsų Nightscout egzempliorius jau veiks, papildomų patarimų rasite [Nightscout konfigūravimo puslapyje](../SettingUpAaps/Nightscout.md).

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool galima naudoti **AAPS** nuo 3.2 versijos, kuri buvo išleista 2023 m. pabaigoje.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Kai naudojate **AAPS**, tarp duomenų gavimo ir jų rodymo ataskaitose praeina trys valandos, todėl Tidepool netinka dalytis realaus laiko informacija su prižiūrinčiais asmenimis.  
Kita vertus, jei Nightscout netinka, Tidepool gali būti puikus sprendimas dalytis ataskaitomis su paciento endokrinologu.  
```

Tidepool yra [atvirojo kodo](https://github.com/tidepool-org) projektas. Ji leidžia nemokamai naudoti paskyrą Tidepool serveriuose.

Daugiau informacijos apie Tidepool nustatymą su AAPS rasite [čia](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Jums **nereikia** naudoti Tidepool įkėlimo programėlės: **AAPS** pats įkels gliukozės kraujyje duomenis, terapiją ir valandinę bazę. Jums reikia tik asmeninės Tidepool paskyros. Neįkelkite duomenų atskiru Tidepool įkėlimo įrankiu, nes atsiras pasikartojančių reikšmių.  
```

## Kitas žingsnis

Kai ataskaitų serveris bus nustatytas, galėsite sukonfigūruoti **AAPS** savo telefone su [Sąrankos vedliu](./SetupWizard.md), kuris taip pat susies **AAPS** su jūsų ataskaitų serveriu.