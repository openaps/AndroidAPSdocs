# Laikini tikslai

## Kokie yra laikini tikslai ir kaip juos naudoti bei nustatyti?

Naudodami laikinus taikinius (LT), galite patys pakeisti glikemijos tikslinę reikšmę nustatytam laikotarpiui. Kadangi tai dažniausiai aktualu aktyvumui, hipoglikemijos atvejui (gydymui angliavandeniais) ar prieš valgį, patys galite laikinus tikslus konfigūruoti. Norėdami juos konfigūruoti, eikite į meniu dešiniajame kampe viršuje > Nustatymai > Kiti > Numatyti laikini tikslai.

![Nustatyti numatytus laikinus tikslus](../images/TempTarget_Default.png)

To use one of the set “Default-Temp-Targets”, you can short click on your target in the right corner on the top in the overview-tab to show Temp Target dialog and click on Eating Soon, Activity or Hypo button, or use the shortcuts in the orange “Carbs” button. To manually set a [“Custom Temp-Target”](../Usage/temptarget#custom-temp-target) (BG value and/or duration), short click on your target in the top right corner or use the “Temporary Target“ button in the [actions tab / menu](../Configuration/Config-Builder#actions).

![Nustatyti laikiną tikslą](../images/TempTarget_Set2.png)

- If you want to slightly adjust the values of a default temp target, you can long press the Eating Soon, Activity or Hypo button and then edit the values in the Target or Duration fields.
- If a Temp target is running, an additional "Cancel" button is shown in dialog to cancel it

## Hipo Laikinas tikslas

Tai gali būti laikoma svarbiausiu laikinu tikslu. Tam keletas priežasčių:

1. Suprantate, kad artėja hipoglikemija: paprastai ciklas su ja susitvarko, tačiau kartais galite numatyti geriau nei programa, tokiu atveju ciklas reaguos greičiau, kai bus nustatyta aukštesnė tikslinė glikemija.
2. Kai valgote angliavandenius, siekiant išvengti hipoglikemijos, cukraus kiekis kraujyje padidės labai greitai. Ciklas koreguos šį padidėjimą ir, jei įjungta, suleis SMB. Hipo Laikinas ciklas padeda šio veiksmo išvengti. 
3. (advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Pastaba: jei įvesite angliavandenius su mygtuku „Angliavandeniai“ ir cukraus kiekis kraujyje bus mažesnis nei 72 mg/dl arba 4 mmol/l, Hipo Laikinas tikslas bus automatiškai įjungtas.

## Aktyvumo laikinas tikslas

Prieš aktyvų užsiėmimą ir jo metu galbūt norėsite turėti aukštesnį tikslą, kad išvengtumėte hipoglikemijos. Norėdami supaprastinti Laikino tikslo nustatymą, galite sukonfigūruoti savo numatytąjį „Aktyvumo laikiną tikslą“. Remdamiesi IVT, AIO ir savo patirtimi, prieš sportinį užsiėmimą galite nustatyti laikiną tikslą. Taip pat žr. [DUK Sporto skiltį](../Getting-Started/FAQ#sports).

Advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Tada AndroidAPS yra jautresnis. Kai kurie žmonės sportinio užsiėmimo metu keičia profilį, o ne LT, tačiau visi yra skirtingi. Jei funkcija "SMB su intensyviu laikinu tikslu" yra išjungta, AndroidAPS nesuleis SMB, net jei ir AAO > 0, o funkcijos "SMB su laikinu tikslu" arba "SMB visada" įjungtos ir OpenAPS SMB aktyvus.

## Netrukus valgysiu Laikinas tikslas

Jei žinote, kad jūs netrukus eisite valgyti, galite įjungti šį laikiną tikslą, tam, kad prieš valgant jūsų organizme būtų daugiau aktyvaus insulino. Ypač tiems, kurie nesusileidžia insulino prieš valgant, tai gali būti gera alternatyva išlaikyti kraujo glikemiją kuo arčiau tikslinės reikšmės. Daugiau apie "Netrukus valgysiu" režimą galite perskaityti straipsnyje ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) arba [čia](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Reikalaujama, kad šiuo atveju laikinas tikslas būtų mažesnis nei 100 mg/dl arba 5.5mmol/l.

## Pasirinktinis Laikinas tikslas

Kartais, jūs tiesiog norite nustatyti kitokį laikiną tikslą, nei numatytieji. You can set one by short pressing on the target (range) on the right corner in overview or in the “Action”-Tab.

![Nustatyti laikiną tikslą per Veiksmų skirtuką](../images/TempTarget_ActionTab.png)