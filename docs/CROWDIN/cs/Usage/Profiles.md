# Přepínání profilu

Po prvním spuštění AndroidAPS a výběru profilu budete potřebovat ještě provést "Přepnutí profilu" s nulovým trváním (viz dále). Tím začne AAPS sledovat historii profilů a každá nová změna profilu vyžaduje další "Přepnutí profilu", přestože změny na profilu provádíte v Nightscoutu. Aktualizovaný profil je do AAPS načtený okamžitě, ale potřebujete ještě přepnutí stejného profilu (v NS nebo AAPS), abyste tyto změny začali reálně používat.

AAPS si vnitřně dělá snímek profilu s datumem zahájení a s trváním a používá ho v rámci stanovené doby. Nulové trvání znamená nekonečně (pořád). Takový profil je platný až do dalšího "Přepnutí profilu".

Chcete-li provést přepnutí profilu, dlouze stiskněte tlačítko ("Aktuell (Rad)" na níže uvedeném obrázku) a vyberte Přepnutí profilu.

![Přepínání profilu](../images/ProfileSwitch_HowTo.png)

Pokud použijete "Přepnutí profilu" s určením doby, profil se automaticky po uplynutí času přepne zpět do posledního platného "Přepnutí profilu"

Pokud používáte lokální AAPS profily (jednoduchý, místní, CPP), musíte stisknout tlačítko, abyste změny použili (vytvoří to správnou událost "Přepnutí profilu").

V rámci „Přepnutí profilu“ můžete ještě upravit následující dva parametry (což bývalo součástí Cirkadiánního procentuálního profilu):

## Procento

* Toto uplatní stejný procentní přepočet na všechny parametry. 
* Pokud toto pole nastavíte na 130 % (což značí, že jste o 30 % více rezistentní na inzulín), navýší to váš bazál o 30 %. Dále se také adekvátně sníží ISF - citlivost a IC - sacharidový poměr (děleno 1,3 v našem příkladě).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* Bazální dávka bude odeslaná do pumpy jako výchozí (údaje v pumpě se přepíší).

* Algoritmus smyčky (otevřené nebo uzavřené) bude dále pracovat se zvoleným procentuálním profilem. Tak například mohou být samostatné procentuální profily nastavené pro různé fáze hormonálního cyklu.

## Posun času

![Profilový procentní podíl a časový posun](../images/ProfileSwitchTimeShift2.png)

* Tato volba vše posouvá o uvedený počet hodin. 
* Například, pokud pracujete na noční směny, upravte počet hodin o kolik později/dříve jdete spát nebo se probouzíte.
* Často se ptáte, kterým směrem posouvat profil v čase. Čas je nutné posunout o x hodin. Myslete proto na směr posunu, jak je popsáno v následujícím příkladu: 
  * Aktuální čas: 12:00
  * **Posun času dopředu** 
    * 2:00 **+10 h** -> 12:00
    * Nastavení platná od 2:00 budou použita namísto těch, která normálně platí ve 12:00, protože posouváme profil dopředu.
  * **Dozadu** 
    * 22:00 **-10 h** -> 12:00
    * Nastavení platná od 22:00 budou použita namísto těch, která normálně platí ve 12:00, protože posouváme profil dozadu.

![Směry posunu profilu v čase](../images/ProfileSwitch_PlusMinus2.png)

Tento mechanismus snímkování profilu umožňuje mnohem přesnější výpočty z minulosti a také umožňuje sledovat změny profilu.

## Řešení chyb profilů

### 'Invalid profile' / 'Basal Profile not aligned to hours'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* These error messages will appear if you have any basal rates or I:C rates not on the hour. (DanaR and DanaRS pumps do not support changes on the half hour for example.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* Remember / note down date and time shown in the error message (26/07/2019 5:45 pm in screenshot above).

* Go to Treatments tab
* Select ProfileSwitch
* Scroll until you find date and time from error message.
* Use remove function.
* Sometimes there is not only one faulty profile switch. In this case remove also the others.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'Received profile switch from NS but profile does not exist locally'

* The requested profile was not synced correctly from Nightscout.
* Follow instructions from above to delte the profile switch

Alternatively you can delete the profile switch directly in mLab:

* Go to your mlab collection
* Search in the treatments for profile switch
* Delete the profile switch with date and time that was mentioned in the error message. ![mlab](../images/mLabDeletePS.png)

### 'DIA 3hr too short'

* Error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. 
* Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles) to continue.