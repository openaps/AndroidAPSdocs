# Trikčių Diagnostika NSClient

NSClient priklauso nuo stabilaus bendravimo su Nightscout. Nestabilus ryšys lemia sinchronizacijos klaidas ir didelį duomenų išnaudojimą.

Jei niekas neseka jūsų Nightscout, galite sustabdyti NSClient - tuo (labai) prailginsite baterijos gyvavimo laiką - arba nustatyti ryšį tik esant bevieliui ryšiui ir tik krovimo metu.

* Kaip aptikti nestabilų ryšį?

Eikite į AAPS NSClient skirtuką ir žiūrėkite žurnalą. Paprastai PING'as yra gaunamas kas ~30 sek. ir beveik jokių susijungimo iš naujo pranešimų. Jei matote daug susijungimų iš naujo, vadinasi yra problema. Nuo AndroidAPS 2.0, kai toks elgesys yra aptinkamas, NSClient yra pristabdomas 15 minučių ir rodomas pranešimas "NSClient gedimas" Apžvalgoje.

* Paleisti iš naujo

Ką turėtumėte pirmu žingsniu pabandyti, tai perkrauti abu: Nightscout ir telefoną, tada žiūrėti ar problema pasikartoja

* Telefono dalykai

Android gali įjungti miego režimą telefone. Check you have exception for AndroidAPS in power options to allow run it on background all the time. Check it again on strong network signal. Try another phone.

* Nightscout

If you are on Azure for many people helped to move to Heroku. Recently was reported Azure workaround to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* If you still get an error...

Check the size of your database in mLab. 496MB means it is full and needs to be compacted. [Follow these OpenAPS instructions for checking the size of your database](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). If compacting does not work, you should consider donating your AndroidAPS data to the Data Commons (for research) before deleting any data collections. There are [instructions in the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) for how to accomplish this.