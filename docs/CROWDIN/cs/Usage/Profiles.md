# Přepínání profilu

Po prvním spuštění AndroidAPS a výběru profilu budete potřebovat ještě provést "Přepnutí profilu" s nulovým trváním (viz dále). Tím začne AAPS sledovat historii profilů a každá nová změna profilu vyžaduje další "Přepnutí profilu", přestože změny na profilu provádíte v Nightscoutu. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again (in NS or AAPS) to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period. Nulové trvání znamená nekonečně (pořád). Takový profil je platný až do dalšího "Přepnutí profilu".

To do a profile switch long-press on the name of your profile ("Aktuell (Rad)" in the picture below) and select profile switch.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

If you use "Profile switch" with duration profile is switched back to previous valid "Profile switch"

If you use local AAPS profiles (Simple, Local, CPP) you have to press button there to apply these changes (it creates proper "Profile switch" event).

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## Procento

* Toto uplatní stejný procentní přepočet na všechny parametry. 
* Pokud toto pole nastavíte na 130% (což značí, že jste o 30 % více rezistentní na inzulín), navýší to váš bazál o 30 %. Dále se také adekvátně sníží citlivost (ISF) a sacharidový poměr (IC) (děleno 1,3 v našem příkladě). 
* Bazální dávka bude odeslaná do pumpy jako výchozí (údaje v pumpě se přepíší). 
* Algoritmus smyčky (otevřené nebo uzavřené) bude dále pracovat se zvoleným procentuálním profilem. So, for example separate percentage profiles can be set up for different stages of the hormone cycle.

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

## Time shift

* Tato volba vše posouvá o uvedený počet hodin. 
* So, for example, when working night shifts change the number of hours to how much later/earlier you go to bed or wake up.
* Často se ptáte, kterým směrem posouvat profil v čase. Čas je nutné posunout o x hodin. Myslete proto na směr posunu, jak je popsáno v následujícím příkladu: 
  * Aktuální čas: 12:00
  * **Dopředu** time shift 
    * 2:00 **+10 h** -> 12:00
    * Settings from 2:00 will be used instead of the settings normally used at 12:00 because of the positive time shift.
  * **Dozadu** time shift 
    * 22:00 **-10 h** -> 12:00
    * Settings from 22:00 (10 pm) will be used instead of the settings normally used at 12:00 because of the negative time shift.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Řešení chyb profilů

* Chyby typu „Chybný profil“ nebo „Bazální hodnoty nejsou zarovnané na celé hodiny“ se zobrazí, pokud nemáte bazální dávky nebo inzulíno-sacharidové poměry zarovnané na celé hodiny. Pumpy DanaR a DanaRS nepodporují změny po půlhodinách.
* 'Received profile switch from NS but profile does not exist locally' or Go either to Treatments tab in AndroidAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message. Zadruhé: běžte do své mlab databáze, hledejte v kolekci treatments přepnutí profilu a smažte datum a čas, které byly zmíněny v chybové hlášce. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* Chybová zpráva „DIA 3h je příliš krátké“ se zobrazí, pokud trvání aktivity inzulínu ve vašem profilu má hodnotu, jejíž přesnosti AndroidAPS nevěří. Přečtěte si o Zvolení správného [DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), upravte ho ve svém profilu a znovu proveďte „Přepnutí profilu“.