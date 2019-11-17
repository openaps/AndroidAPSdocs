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
* If you set it to 130% (meaning you are 30% more insulin resistant), it will raise the basal rate by 30%. It will also lower the ISF and IC accordingly (divide by 1.3 in this example).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* It will be sent to the pump and then be the default basal rate.

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

* Chyby typu „Chybný profil“ nebo „Bazální hodnoty nejsou zarovnané na celé hodiny“ se zobrazí, pokud nemáte bazální dávky nebo inzulíno-sacharidové poměry zarovnané na celé hodiny. Pumpy DanaR a DanaRS nepodporují změny po půlhodinách.
* Při chybě "Zjištěno přepnutí profilu z NS ale místní profil neexistuje" jako první možnost běžte do záložky Ošetření v AndroidAPS a zadejte "Přepnutí profilu", odstraňte datum a čas, který byl zmíněný v chybové hlášce. Zadruhé: běžte do své mlab databáze, hledejte v kolekci treatments přepnutí profilu a smažte datum a čas, které byly zmíněny v chybové hlášce. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* Chybová zpráva „DIA 3h je příliš krátké“ se zobrazí, pokud trvání aktivity inzulínu ve vašem profilu má hodnotu, jejíž přesnosti AndroidAPS nevěří. Přečtěte si o Zvolení správného [DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), upravte ho ve svém profilu a znovu proveďte „Přepnutí profilu“.