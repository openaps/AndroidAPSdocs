# Trikčių Diagnostika NSClient

NSClient priklauso nuo stabilaus bendravimo su Nightscout. Nestabilus ryšys lemia sinchronizacijos klaidas ir didelį duomenų išnaudojimą.

Jei niekas neseka jūsų Nightscout, galite sustabdyti NSClient - tuo (labai) prailginsite baterijos gyvavimo laiką - arba nustatyti ryšį tik esant bevieliui ryšiui ir tik krovimo metu.

* Kaip aptikti nestabilų ryšį?

Eikite į AAPS NSClient skirtuką ir žiūrėkite žurnalą. Paprastai PING'as yra gaunamas kas ~30 sek. ir beveik jokių susijungimo iš naujo pranešimų. Jei matote daug susijungimų iš naujo, vadinasi yra problema. Nuo AndroidAPS 2.0, kai toks elgesys yra aptinkamas, NSClient yra pristabdomas 15 minučių ir rodomas pranešimas "NSClient gedimas" Apžvalgoje.

* Paleisti iš naujo

Ką turėtumėte pirmu žingsniu pabandyti, tai perkrauti abu: Nightscout ir telefoną, tada žiūrėti ar problema pasikartoja

* Telefono dalykai

Android gali įjungti miego režimą telefone. Patikrinkite ar įtraukėte AndroidAPS į energijos taupymo išimtis, leidžiančias veikti programai fono režimu visą laiką. Dar kartą patikrinkite esant stipriam tinklo signalui. Pabandykite kitą telefoną.

* Nightscout

Jei naudojate Azure, daugeliui žmonių padėjo perėjimas į Heroku. Neseniai buvo pranešta apie Azure problemos apėjimą, programos nustatymuose nustatant HTTP protokolą į 2.0 ir Websockets į "Įjungti"

* Jei jūs vis dar gaunate klaidą...

Patikrinkite jūsų duomenų bazės dydį mLab. 496MB reiškia, ji yra pilna ir turi būti suspausta. [Atlikite šias OpenAPS tikrinimo instrukcijas duomenų bazės dydžiui nustatyti](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Jei suspaudimas neveikia, galite apsvartyti padovanoti savo AndroidAPS duomenis Data Commons (tyrimui), prieš ištrinant bet kokius duomenis. Čia yra [nurodymai į OpenAPS dokumentaciją](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) kaip tai padaryti.