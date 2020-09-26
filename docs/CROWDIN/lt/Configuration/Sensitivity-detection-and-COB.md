# Jautrumo nustatymas

## Jautrumo algoritmas

Šiuo metu yra 3 jautrumo nustatymo modeliai:

* Jautrumo nustatymo algoritmas AAPS
* Jautrumas pagal svertinį vidurkį
* Jautrumo nustatymo algoritmas Oref1

### Jautrumo nustatymo algoritmas AAPS

Jautrumas apskaičiuojamas taip pat, kaip ir Oref1, tačiau jūs galite nurodyti skaičiavimams laiką praeityje. Mažiausia angliavandenių absorbcija apskaičiuojama pagal maksimalų angliavandenių absorbcijos laiką nustatymuose

### Jautrumas pagal svertinį vidurkį

Jautrumas apskaičiuojamas kaip svertinis nuokrypių vidurkis. Jūs galite nurodyti laiką praeityje. Nauji nukrypimai yra svarbesni. Mažiausia angliavandenių absorbcija apskaičiuojama pagal maksimalų angliavandenių absorbcijos laiką nustatymuose. Šis algoritmas greičiausiai atsižvelgia į jautrumo pokyčius.

### Jautrumo nustatymo algoritmas Oref1

Jautrumas apskaičiuojamas remiantis praėjusių 8 valandų arba paskutinio kateterio pakeitimo duomenimis, jei jis keistas mažiau nei prieš 8 valandas. Į angliavandenius (jei neįsisavinti) neatsižvelgiama po nustatymuose nustatyto laiko. Tik Oref1 algoritmas palaiko nedeklaruoto maisto NDM aptikimą. Tai reiškia, kad nedeklaruotas maistas neįtraukiamas į jautrumo skaičiavimus. Taigi, jei su NDM aptikimo metodu naudojate SMB, turite pasirinkti Oref1 algoritmą, kad SMB tinkamai veiktų. Norėdami gauti daugiau informacijos, skaitykite [OpenAPS Oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) dokumentaciją.

## Vienu metu gaunami angliavandeniai

Reikia pabrėžti, kad yra esminių skirtumų tarp jautrumo aptikimo modelių - AAPS, Svertinis vidurkio ir Oref1. Oref įskiepiai daro prielaidą, kad įsisavinami tik vieno valgymo angliavandeniai. Tai reiškia, kad įvedus antrą valgymą, jo įsisavinimas prasideda tik tada, kai pirmasis valgymas yra visiškai įsisavintas. AAPS + Svertinis vidurkis angliavandenių mažėjimo skaičiavimą pradeda iškart po angliavandenių įvedimo. Jei yra daugiau nei vienas valgymas, tada minimalus angliavandenių suvartojimas apskaičiuojamas atsižvelgiant į maisto kiekį ir maksimalų absorbcijos laiką. Atitinkamai, minimali absorbcija bus didesnė, palyginti su Oref įskiepiais.