# Rozumíme obrazovkám AndroidAPS

## Hlavní stránka

![Hlavní stránka](../images/Screenshot_Home_screen.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

Sekce A: umožňuje vám navigaci mezi různými moduly AndroidAPS tažením prstu (swipe) doleva nebo doprava.

Sekce B: umožňuje přepínat stav smyčky (otevřená smyčka, uzavřené smyčka, pozastavená smyčka atd.), zjistit si váš aktuální profil, zjistit si aktuální cíl glykemie a nastavit dočasný cíl. Podržte prst dlouze na některém z tlačítek pro změnu nastavení. Tj. dlouze držte prst na cílovém modrém poli v horní pravé části ("5,5" na snímku), abyste nastavili dočasný cíl.

Sekce C: poslední glykemie z vašeho senzoru CGM, kolik času uplynulo od posledního čtení, změna za posledních 15 a 40 minut, vaše aktuální bazální dávka - včetně jakékoliv dočasné bazální dávky (DBD) naprogramované systémem, množství aktivního inzulínu (IOB) a množství aktivních sacharidů (COB).

Ukazatel aktivního inzulínu by měl být nula, pokud běží pouze váš standardní bazál a žádný z předchozích bolusů už nemá aktivní zůstatek. Čísla v závorkách ukazují, kolik z celku tvoří inzulín z předchozích bolusů a kolik tvoří navýšení/ponížení bazálu vzhledem k DBD naprogramované aplikací AAPS. Tato druhá část může být i záporná, pokud předcházela období se sníženým bazálem.

Sekce D: zde si můžete vybrat, které informace se mají zobrazovat v grafu níže.

Sekce E: graf, který zobrazuje stav glukózy ve vaší krvi, jak byla přečtena vaším senzorem (CGM). V grafu se také zobrazují oznámení Nightscoutu, např. kalibrace z prstu a vstupy sacharidů. Fialová linka ukazuje předpovídaný trend glukózy - pokud se má zobrazovat.

Modrá linka ukazuje dávkování bazálního inzulínu vaší pumpy. Tečkovaná modrá linka je úroveň bazální dávky, jaká by byla za normálních okolností, kdyby nebyla navýšená/ponížená pomocí dočasné bazální dávky (DBD) a plná modrá linka je aktuální dávkování v průběhu času. Dlouze držte prst na grafu, abyste na něm změnili časové měřítko. Můžete si vybrat 6, 8, 12, 18 nebo 24 hodin.

Sekce F: je také konfigurovatelná volbami ze sekce D. Na tomto snímku ukazujeme IOB (aktivní inzulín v těle) - kdyby zde nebyly žádné DBD a žádné zůstatky inzulínu z bolusů, pak by IOB bylo nula. Dále se na snímku ukazuje citlivost a odchylka. ŠEDÉ pruhy zobrazují odchylky kvůli sacharidům, ZELENÉ pruhy ukazují, že glykémie je vyšší, než očekával algoritmus, a ČERVENÉ pruhy signalizují, že je glykémie nižší, než bylo očekáváno.

Sekce F: umožňuje podávání bolusu (obvykle k tomu použijete tlačítko Kalkulačka) a ke vkládání kalibrace CGM měřením glykémie z prstu.

## Kalkulátor

![Kalkulátor](../images/Screenshot_Bolus_calculator.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulátor.

Sekce A: zde se vyplňují údaje o bolusu, který se chystáte odeslat. Políčko "Glykémie" bývá automaticky předvyplněné poslední naměřenou hodnotou ze senzoru. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. Do políčka "Sacharidy" vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterým chcete poslat bolus. Pole "Korekce" slouží k navýšení/snížení výsledné dávky inzulín z jakéhokoliv důvodu a "Čas jídla" slouží k předsazení bolusu tak, abyste systému řekli, že mezi bolusem a konzumací jídla bude udaná prodleva. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k dříve zkonzumovaným sacharidům.

SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je pumpě nastavená dočasná bazální dávka 0% na dvě hodiny, aby se tak vybalancoval zpět extra podaný inzulín. Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.

Sekce B: zobrazuje vypočtený bolus. Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k vyrovnání.

Sekce C: zobrazuje různé prvky, které byly použity k výpočtu bolusu. Můžete odznačit všechny, které se vám nehodí, ale normálně by k tomu neměl být důvod.

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

Zde se ukazuje profil aktivity pro inzulín, který jste vybrali. FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace k úplnému rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.

Obvykle budete používat jeden z Oref profilů - a nezapomeňte na důležitou věc, a sice, že rozpad inzulínu má dlouhý ocas. Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na "ocasu") záleží. Pokud s ocasem totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zejména je to v rekurzivním výpočtu AndroidAPS patrné, když se posčítá řada malých zbytků inzulínu.

Pro podrobnější informace o různých typech inzulínu, o jejich profilech aktivity a proč je to vše důležité, si můžete přečíst článek [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

A také si o tom můžete přečíst výborný článek blogu zde: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

A ještě více na: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_pump_Combo.png)

Zde vidíme stav inzulínové pumpy - v tomto případě Accu-Chek Combo. Zobrazené informace jsou samovysvětlující. Dlouhý stisk na tlačítko HISTORIE spustí čtení dat z historie pumpy, včetně bazálního profilu. Ale pamatujte si, že na pumpě Combo je podporován pouze jeden bazální profil.

## Péče

![Péče](../images/Screenshot_care_portal.png)

Zde jsou replikované funkce, které najdete na obrazovce Nightscoutu pod symbolem "+" a které vám umožní přidávat poznámky k záznamům. Funkce jako např. poznačení, že jste vyměnili kanylu nebo zásobník inzulínu, by měly být samovysvětlující. Ale důležité je si zapamatovat, že tato sekce neodesílá žádné příkazy na pumpu. Takže pokud zadáte bolus na této stránce, tak se o tom prostě jenom zapíše záznam do Nightscoutu, ale pumpa žádný bolus nepošle.

## Smyčka, OpenAPS MA

Obvykle se těmito stránkami nemusíte zatěžovat, zobrazují podrobné výsledky OpenAPS algoritmu, který se spouští pokaždé, kdy systém obdrží čerstvá data ze senzoru CGM. Detaily naleznete v jiné dokumentaci.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS umí fungovat s různými konfiguracemi profilů. Obvykle - jak je zde znázorněno - je do aplikace stažený Nightscoutový profil přes vestavěného Nightscout klienta a profil je pak zde zobrazený pouze pro čtení. Pokud chcete do profilu provést jakékoliv změny, musíte to nejdřív udělat na internetových stránkách Nightscoutu a pak je třeba zadat "Změnu profilu" ve vaší AndroidAPS aplikaci, aby se vynutilo opětovné stažení profilu. Údaje jako bazální profil pak budou automaticky zkopírované přímo do vaší pumpy.

DIA: znamená trvání účinku inzulinu a je popsané výše v části o inzulínových profilech.

IC: je inzulíno sacharidový poměr. Tento profil má řadu různých hodnot v průběhu dne.

ISF: je faktor citlivosti inzulínu - hodnota (mg/dL nebo mmol/L), o kterou jedna jednotka inzulínu sníží hladinu glukózy v krvi, a to za předpokladu, že se nic jiného nemění.

Bazál: je bazální profil naprogramovaný do vaší pumpy.

Cíl: je hladina glukózy v krvi, ke které má po celou dobu aplikace směřovat. Pokud chcete, můžete nastavit různé úrovně pro různá období během dne, a dokonce můžete stanovit horní a dolní hranici, takže aplikace začne provádět opatření jenom tehdy, pokud se odhadovaný průběh glykémie dostane mimo stanovený rozsah. V tom případě ale bude systém reagovat pomaleji a glykémie se vám bude srovnávat hůř.

## Ošetření, xDrip, NSClient

Toto jsou jednoduše záznamy ošetření (bolusy a sacharidy), zprávy xDripu a zprávy odesílané Nightscoutu přes zabudovaného interního Nightscout klienta. Dokud nemáte nějaký problém, obvykle nebývá nutné starat se o žádnou z těchto stránek.

## Konfigurace

![Konfigurace](../images/Screenshot_config_builder.png)

Toto je místo, kde se provádí základní nastavení vašeho AndroidAPS. Uvedený snímek ukazuje docela typické nastavení pro pumpu Combo, Dexcom G5 senzor CGM spravovaný přes xDrip+, používající inzulín NovoRapid na Oref profilu a připojený k Nightscout serveru v cloudu.

Zaškrtnutí políčka vpravo určuje, že daný modul se bude zobrazovat v horní menu liště (viz sekce A na Hlavní stránce) a ikona s ozubeným kolečkem zpřístupňuje nastavení daného modulu, pokud jsou nějaká k dispozici.

## Nastavení a předvolby

V horní pravé části navigační lišty můžete najít tři malé tečky pod sebou. Klik na tyto tečky vás zavede do nastavení a předvoleb aplikace a umožní vám exportovat vaše veškerá nastavení pro případ, že byste se potřebovali přestěhovat na jiný přístroj. Konkrétní nastavení jsou probraná v jiné dokumentaci.