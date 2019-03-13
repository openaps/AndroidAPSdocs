# Přepínání profilu

Po prvním spuštění AndroidAPS a výběru profilu budete potřebovat ještě provést "Přepnutí profilu" s nulovým trváním (viz dále). Tím začne AAPS sledovat historii profilů a každá nová změna profilu vyžaduje další "Přepnutí profilu", přestože změny na profilu provádíte v Nightscoutu. Aktualizovaný profil je do AAPS načtený okamžitě, ale potřebujete ještě přepnutí stejného profilu (v NS nebo AAPS), abyste tyto změny začali reálně používat.

AAPS si vnitřně dělá snímek profilu s datumem zahájení a s trváním a používá ho v rámci stanovené doby. Nulové trvání znamená nekonečně (pořád). Takový profil je platný až do dalšího "Přepnutí profilu".

Pokud použijete "Přepnutí profilu" s určením doby, profil se automaticky po uplynutí času přepne zpět do posledního platného "Přepnutí profilu"

Pokud používáte lokální AAPS profily (jednoduchý, místní, CPP), musíte stisknout tlačítko, abyste změny použili (vytvoří to správnou událost "Přepnutí profilu").

V rámci "Přepnutí profilu" můžete ještě upravit následující údaje (což bývalo součástí Cirkadiánního procentuálního profilu):

* % změna - toto uplatní stejná procenta na všechny parametry. Pokud toto pole nastavíte na 130% (což značí, že jste o 30% víc odolní na inzulín), navýší to váš bazál o 30%. Dále se také adekvátně sníží ISF - citlivost a IC - sacharidový poměr (děleno 1.3 v našem příkladě). Bazální dávka bude odeslaná do pumpy jako výchozí (údaje v pumpě se přepíší). Algoritmus smyčky (otevřené nebo uzavřené) bude dále pracovat nad zvoleným procentuálním profilem. Tak například mohou být samostatné procentuální profily nastavené pro různé fáze hormonálního cyklu.
* Posun času - toto vše okamžitě posouvá o uvedený počet hodin. Například, pokud pracujete na noční směny, upravte počet hodin o kolik později/dříve jdete spát nebo se probouzíte.

Tento mechanismus snímkování profilu umožňuje mnohem přesnější výpočty z minulosti a také umožňuje sledovat změny profilu.

<b>Troubleshooting Profile Errors</b>  


* Chyby typu "Chybný profil" nebo "Bazální hodnoty nejsou zarovnané na celé hodiny" se zobrazí, pokud nemáte bazální dávky nebo inzulíno-sacharidové poměry zarovnané na celé hodiny. Pumpy DanaR a DanaRS nepodporují změny po půlhodinách.
* Při chybě "Zjištěno přepnutí profilu z NS ale místní profil neexistuje" jako první možnost běžte do záložky Ošetření v AndroidAPS a zadejte "Přepnutí profilu", odstraňte datum a čas, který byl zmíněný v chybové hlášce. Jako druhá možnost běžte do vaší mlab databáze, hledejte v kolekci treatments přepnutí profilu a smažte datum a čas, který byl zmíněný v chybové hlášce. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* Chybová zpráva "DIA 3h je příliš krátké" se zobrazí, pokud trvání aktivity inzulínu ve vašem profilu má hodnotu, jejíž přesnosti AndroidAPS nevěří. Přečtěte si o Zvolení správného [DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) a upravte ho ve svém profilu a zase udělejte "Přepnutí profilu".