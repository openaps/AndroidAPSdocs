# Laikini tikslai

## Kokie yra laikini tikslai ir kaip juos naudoti bei nustatyti?

Naudodami laikinus taikinius (LT), galite patys pakeisti glikemijos tikslinę reikšmę nustatytam laikotarpiui. Kadangi tai dažniausiai aktualu aktyvumui, hipoglikemijos atvejui (gydymui angliavandeniais) ar prieš valgį, patys galite laikinus tikslus konfigūruoti. Norėdami juos konfigūruoti, eikite į meniu dešiniajame kampe viršuje > Nustatymai > Kiti > Numatyti laikini tikslai.

![Nustatyti numatytus laikinus tikslus](../images/TempTarget_Default.png)

Norėdami naudoti vieną iš šių "Numatytųjų laikinų tikslų“, galite ilgai paspausti tikslą viršutiniame dešiniajame pagrindinio ekrano kampe arba naudoti oranžinio mygtuko „Angliavandeniai“ sparčiąsias nuorodas. Norėdami rankiniu būdu nustatyti ["Pasirinktinį laikiną tikslą"](../Usage/temptarget#custom-temp-target) (kraujo glikemiją reikšmę ir/ar trukmę), ilgai paspauskite ant savo tikslo viršutiniame dešiniajame pagrindinio ekrano kampe ir pasirinkite "Pasirinktinis" arba naudokite "Laikinas Tikslas" mygtuką [Veiksmų skirtuke/meniu](../Configuration/Config-Builder#actions).

![Nustatyti laikiną tikslą](../images/TempTarget_Set2.png)

## Hipo Laikinas tikslas

Tai gali būti laikoma svarbiausiu laikinu tikslu. Tam keletas priežasčių:

1. Suprantate, kad artėja hipoglikemija: paprastai ciklas su ja susitvarko, tačiau kartais galite numatyti geriau nei programa, tokiu atveju ciklas reaguos greičiau, kai bus nustatyta aukštesnė tikslinė glikemija.
2. Kai valgote angliavandenius, siekiant išvengti hipoglikemijos, cukraus kiekis kraujyje padidės labai greitai. Ciklas koreguos šį padidėjimą ir, jei įjungta, suleis SMB. Hipo Laikinas ciklas padeda šio veiksmo išvengti. 
3. (Pažangus, [10 tikslas](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): galite įjungti „Intensyvus laikinas tikslas didina jautrumą" funkciją laikiniems tikslams, lygiems ar didesniems nei 100 mg/dl arba 5,5 mmol/l OpenAPS SMB skirtuke, todėl AndroidAPS yra jautresnis.
4. (Pažangus, [10 tikslas](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): galite išjungti „SMB esant intensyviems laikiniems tikslams". Tada, net jei turite AAO > 0, įjungtos "SMB su laikinais tikslais" ar "SMB visada" funkcijos ir OpenAPS SMB aktyvus, AndroidAPS nesuleis SMB, kol intensyvūs laikini tikslai yra aktyvūs. 

Pastaba: jei įvesite angliavandenius su mygtuku „Angliavandeniai“ ir cukraus kiekis kraujyje bus mažesnis nei 72 mg/dl arba 4 mmol/l, Hipo Laikinas tikslas bus automatiškai įjungtas.

## Aktyvumo laikinas tikslas

Prieš aktyvų užsiėmimą ir jo metu galbūt norėsite turėti aukštesnį tikslą, kad išvengtumėte hipoglikemijos. Norėdami supaprastinti Laikino tikslo nustatymą, galite sukonfigūruoti savo numatytąjį „Aktyvumo laikiną tikslą“. Remdamiesi IVT, AIO ir savo patirtimi, prieš sportinį užsiėmimą galite nustatyti laikiną tikslą. Taip pat žr. [DUK Sporto skiltį](../Getting-Started/FAQ#sports).

Pažangus, [10 tikslas](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): Aktyvumo laikino tikslo privalumas yra tas, kad galite įjungti „Intensyvus laikinas tikslas didina jautrumą" funkciją laikiniems tikslams lygiems ar didesniems nei 100 mg/dl arba 5,5 mmol/l OpenAPS SMB skirtuke. Tada AndroidAPS yra jautresnis. Kai kurie žmonės sportinio užsiėmimo metu keičia profilį, o ne LT, tačiau visi yra skirtingi. Jei funkcija "SMB su intensyviu laikinu tikslu" yra išjungta, AndroidAPS nesuleis SMB, net jei ir AAO > 0, o funkcijos "SMB su laikinu tikslu" arba "SMB visada" įjungtos ir OpenAPS SMB aktyvus.

## Netrukus valgysiu Laikinas tikslas

Jei žinote, kad jūs netrukus eisite valgyti, galite įjungti šį laikiną tikslą, tam, kad prieš valgant jūsų organizme būtų daugiau aktyvaus insulino. Ypač tiems, kurie nesusileidžia insulino prieš valgant, tai gali būti gera alternatyva išlaikyti kraujo glikemiją kuo arčiau tikslinės reikšmės. Daugiau apie "Netrukus valgysiu" režimą galite perskaityti straipsnyje ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) arba [čia](https://diyps.org/tag/eating-soon-mode/).

Pažangus, [10 tikslas](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): Jei OpenAPS SMB ir "Žemas laikinas tikslas mažina jautrumą" funkcijos įjungtos, AndroidAPS veiks šiek tiek agresyviau. Reikalaujama, kad šiuo atveju laikinas tikslas būtų mažesnis nei 100 mg/dl arba 5.5mmol/l.

## Pasirinktinis Laikinas tikslas

Kartais, jūs tiesiog norite nustatyti kitokį laikiną tikslą, nei numatytieji. Tai nustatysite ilgai nuspaudę tikslinę reikšmę viršutiniame dešiniajame pagrindinio ekrano kampe, arba skirtuke „Veiksmai“.

![Nustatyti laikiną tikslą per Veiksmų skirtuką](../images/TempTarget_ActionTab.png)