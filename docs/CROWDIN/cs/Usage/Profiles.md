# Přepínání profilu

Po prvním spuštění AndroidAPS a výběru profilu budete potřebovat ještě provést "Přepnutí profilu" s nulovým trváním (viz dále). Tím začne AAPS sledovat historii profilů a každá nová změna profilu vyžaduje další "Přepnutí profilu", přestože změny na profilu provádíte v Nightscoutu. Aktualizovaný profil je do AAPS načtený okamžitě, ale potřebujete ještě přepnutí stejného profilu (v NS nebo AAPS), abyste tyto změny začali reálně používat.

AAPS si vnitřně dělá snímek profilu s datumem zahájení a s trváním a používá ho v rámci stanovené doby. Nulové trvání znamená nekonečně (pořád). Takový profil je platný až do dalšího "Přepnutí profilu".

Pokud použijete "Přepnutí profilu" s určením doby, profil se automaticky po uplynutí času přepne zpět do posledního platného "Přepnutí profilu"

Pokud používáte lokální AAPS profily (jednoduchý, místní, CPP), musíte stisknout tlačítko, abyste změny použili (vytvoří to správnou událost "Přepnutí profilu").

V rámci "Přepnutí profilu" můžete ještě upravit následující údaje (což bývalo součástí Cirkadiánního procentuálního profilu):

* % změna - toto uplatní stejná procenta na všechny parametry. Pokud toto pole nastavíte na 130% (což značí, že jste o 30% víc odolní na inzulín), navýší to váš bazál o 30%. Dále se také adekvátně sníží ISF - citlivost a IC - sacharidový poměr (děleno 1.3 v našem příkladě). Bazální dávka bude odeslaná do pumpy jako výchozí (údaje v pumpě se přepíší). Algoritmus smyčky (otevřené nebo uzavřené) bude dále pracovat nad zvoleným procentuálním profilem. Tak například mohou být samostatné procentuální profily nastavené pro různé fáze hormonálního cyklu.
* Posun času - toto vše okamžitě posouvá o uvedený počet hodin. Například, pokud pracujete na noční směny, upravte počet hodin o kolik později/dříve jdete spát nebo se probouzíte.

When using timeshift be aware of the directions:

* Timeshift +10 h: 12:00 -> 2:00
* Timeshift -10 h: 12:00 -> 22:00

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Troubleshooting Profile Errors

* 'Invalid profile' or 'Basal Profile not aligned to hours' error message will appear if you have any basal rates or I:C rates not on the hour. The DanaR and DanaRS pumps do not support changes on the half hour.
* 'Received profile switch from NS but profile does not exist locally' or Go either to Treatments tab in AndoridAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message. Or go to your mlab collection, search in the treatments for profile switch and delete the date and time that was mentioned in the error message. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* 'DIA 3hr too short' error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a Profile Switch to continue.