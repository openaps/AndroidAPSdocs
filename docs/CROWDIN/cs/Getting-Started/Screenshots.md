# Obrazovky AndroidAPS

## Hlavní stránka

![Hlavní obrazovka V2.1.](../images/Screenshot_Home_screen_V2_1.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

### Sekce A

* navigace mezi různými moduly AndroidAPS tažením prstu (swipe) doleva nebo doprava

### Sekce B

* změna stavu smyčky (otevřená smyčka, uzavřená smyčka, přerušení smyčky atd.)
* zobrazení aktuálního profilu a provedení [Přepnutí profilu](../Usage/Profiles.md)
* zobrazení aktuálního cíl a nastavení [dočasného cíl](../Usage/temptarget.md).

Podržte prst dlouze na některém z tlačítek pro změnu nastavení. Tj. dlouze držte prst na cílovém modrém poli v horní pravé části ("5,5" na snímku), abyste nastavili dočasný cíl.

### Sekce C

* posledního hodnota glykémie z Vašeho CGM
* jak stará je to hodnota
* změny v posledních 15 a 40 minutách
* Váš aktuální bazál - včetně dočasného bazálu (TBR) naprogramovaného systémem
* aktivní inzulín (IOB)
* Zbývající sacharidy (carbs on board)

Volitelné [stavové indikátory](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) poskytují vizuální upozornění na nízký stav zásobníku, vybitou baterie nebo nadměrné stáří kanyly.

Ukazatel aktivního inzulínu by měl být nula, pokud běží pouze váš standardní bazál a žádný z předchozích bolusů už nemá aktivní zůstatek. Čísla v závorkách ukazují, kolik z celku tvoří inzulín z předchozích bolusů a kolik tvoří navýšení/ponížení bazálu naprogramované aplikací AAPS. Tato druhá část může být i záporná, pokud předcházela období se sníženým bazálem.

### Sekce D

Klepnutím na šipku na pravé straně obrazovky v sekci D můžete vybrat, které informace se mají zobrazit v grafu níže.

### Sekce E

Graf, který zobrazuje stav glukózy ve vaší krvi, jak byla přečtena vaším senzorem (CGM). V grafu se také zobrazují oznámení Nightscoutu, např. kalibrace z prstu a vstupy sacharidů.

Dlouhým zmáčknutím na grafu, změníte časový rozsah grafu. Můžete si vybrat 6, 8, 12, 18 nebo 24 hodin.

"pokračující" linka ukazuje předpovídaný trend glukózy - pokud máte zvoleno.

* Oranžová linka: COB (oranžová se používá obecně k vizualizaci COB a sacharidů)
* Tmavě modrá linka: IOB (tmavě modrá se používá obecně k vizualizaci IOB a inzulínu)
* Světle modrá linka: nulový dočasný bazál
* Tmavě žlutá linka: UAM

Tyto linky ukazují různé predikce založené na aktuální rychlosti absorpce sacharidů (COB); samotném inzulinu (IOB); ukazují, za jak dlouho se glykémie dostane do cílového rozsahu nebo nad něj, pokud by odchylky najednou zmizely a my jsme mezitím měli vypnutý bazál (zero-temp) a efekt/detekci neoznámeného jídla, u kterého byly detekovány sacharidy, ale nebyly uživatelem zaznamenány do systému (UAM).

Modrá linka ukazuje dávkování bazálního inzulínu vaší pumpou. Tečkovaná modrá linka je úroveň bazální dávky, jaká by byla vydávána za normálních okolností, kdyby nebyla navýšená/ponížená pomocí dočasné bazální dávky (TBR) a plná modrá linka je aktuální dávkování v průběhu času.

### Sekce F

Je také konfigurovatelná volbami ze sekce D. Na tomto snímku ukazujeme IOB (aktivní inzulín v těle) - kdyby zde nebyly žádné DBD a žádné zůstatky inzulínu z bolusů, pak by IOB bylo nula. Dále se na snímku ukazuje citlivost a odchylka. ŠEDÉ pruhy zobrazují odchylky kvůli sacharidům, ZELENÉ pruhy ukazují, že glykémie je vyšší, než očekával algoritmus, a ČERVENÉ pruhy signalizují, že je glykémie nižší, než bylo očekáváno.

### Sekce G

Umožňuje podávání bolusu (obvykle k tomu použijete tlačítko Kalkulačka) a ke vkládání kalibrace CGM měřením glykémie z prstu. Také se zde zobrazí tlačítko Rychlý bolus, pokud je nakonfigurováno v [Konfiguraci](.../Configuration/Config-Builder#quickwizard-settings).

## Kalkulačka

![Kalkulačka](../images/Screenshot_Bolus_calculator.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulátor.

### Sekce A

zde se vyplňují údaje o bolusu, který se chystáte odeslat. Políčko "Glykémie" bývá automaticky předvyplněné poslední naměřenou hodnotou ze senzoru. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. Do pole „Sacharidy“ vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterému chcete poslat bolus. Pole "Korekce" slouží k navýšení/snížení výsledné dávky inzulín z jakéhokoliv důvodu a "Čas jídla" slouží k předsazení bolusu tak, abyste systému řekli, že mezi bolusem a konzumací jídla bude udaná prodleva. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k dříve zkonzumovaným sacharidům.

SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je na pumpě nastavená dočasná bazální dávka 0 % na dvě hodiny, aby se tak vyrovnalo celkové množství inzulinu, který již byl vydán při superbolusu. Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.

### Sekce B

zobrazuje vypočtený bolus. Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k jeho pokrytí.

### Sekce C

zobrazuje různé prvky, které byly použity k výpočtu bolusu. Můžete odznačit všechny, které se vám nehodí, ale normálně by k tomu neměl být důvod.

### Kombinace COB a IOB a jejich význam

<ul>
    <li>Pokud vyberete COB a IOB, budou při výpočtu zohledněny nestrávané sacharidy, které již nejsou pokryty inzulinem + veškerý inzulin, který byl dodán jako DBD nebo SMB</li>
    <li>Pokud vyberete COB bez IOB, riskujete vydání příliš velkého množství inzulinu, protože AAPS nebude brát v potaz inzulin, který již byl vydán. </li>
    <li>Pokud vyberete IOB bez COB, AAPS bude zohledňovat již vydaný inzulin, ale nezapočítá žádné zkonzumované sacharidy, které dosud nejsou stráveny. To vede k oznámení o 'chybějících sacharidech'.
</ul>

V případě, že chcete vydat další bolus krátce po podání bolusu k jídlu (např. když si přidáte zákusek), je užitečné zrušit označení všech těchto políček. Tak lze přidat pouze nově zkonzumované sacharidy, jelikož hlavní jídlo dosud nemusí být stráveno, takže IOB krátce po bolusu k jídlu nebude přesně odpovídat množství COB.

### Pomalá absorpce sacharidů

Pokud jde o verzi 2.4, AAPS varuje, že je detekována pomalá absorpce sacharidů. Po použití kalkulačky bude zobrazen další text na obrazovce potvrzení. Riziko je, že COB může být nadhodnocené a může být podáno mnohem více inzulínu.

![Pomalá absorpce sacharidů](../images/Calculator_SlowCarbAbsorbtion.png)

V tomto příkladu byla použita hodnota 41 % času [min_5m_carbimpact](..//Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings) místo hodnoty vypočítané z odchylek.

V tomto případě byste měli přemýšlet o tom, že stisknete tlačítko „Zrušit“ a provedete výpočet znovu se zrušeným označením položky COB. Pokud z vašeho ručního výpočtu vidíte, že je třeba korekční bolus, zadejte jej ručně. Ale buďte opatrní, aby nedošlo k předávkování!

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

Zde se ukazuje profil aktivity pro inzulín, který jste vybrali. FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace k úplnému rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.

Obvykle budete používat jeden z Oref profilů - a nezapomeňte na důležitou věc, a sice, že rozpad inzulínu má dlouhý ocas. Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na "ocasu") záleží. Pokud s ocasem totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zejména je to v rekurzivním výpočtu AndroidAPS patrné, když se posčítá řada malých zbytků inzulínu.

Podrobnější informace o různých typech inzulínu, o jejich profilech aktivity a o tom, proč je to vše důležité, najdete v článku [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

A také si o tom můžete přečíst výborný článek blogu zde: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

A ještě více na: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_pump_Combo.png)

Zde vidíme stav inzulínové pumpy - v tomto případě Accu-Chek Combo. Zobrazené informace jsou samovysvětlující. Dlouhý stisk na tlačítko HISTORIE spustí čtení dat z historie pumpy, včetně bazálního profilu. Ale pamatujte, že na pumpě Combo je podporován pouze jeden bazální profil.

## Péče

![Péče](../images/Screenshot_care_portal.png)

Zde jsou replikované funkce, které najdete na obrazovce Nightscoutu pod symbolem "+" a které vám umožní přidávat poznámky k záznamům. Funkce jako např. poznačení, že jste vyměnili kanylu nebo zásobník inzulínu, by měly být samovysvětlující. Ale důležité je si zapamatovat, že tato sekce neodesílá žádné příkazy na pumpu. Takže pokud zadáte bolus na této obrazovce, tak se o tom prostě jenom zapíše záznam do Nightscoutu, ale pumpa žádný bolus nepošle.

## Smyčka, MA, AMA, SMB

Obvykle se těmito stránkami nemusíte zatěžovat, zobrazují podrobné výsledky OpenAPS algoritmu, který se spouští pokaždé, kdy systém obdrží čerstvá data ze senzoru CGM. Detaily naleznete v jiné dokumentaci.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS umí fungovat s různými konfiguracemi profilů. Obvykle - jak je zde znázorněno - je do aplikace stažený Nightscoutový profil přes vestavěného Nightscout klienta a profil je pak zde zobrazený pouze pro čtení. Pokud jste chtěli provést nějaké změny, provedli byste to z uživatelského rozhraní Nightscoutu a pak v AndroidAPS proveďte [Přepnutí profilu](../Usage/Profiles.md), abyste aktivovali změny. Údaje jako bazální profil pak budou automaticky zkopírované přímo do vaší pumpy.

**DIA:** znamená trvání účinku inzulinu a je popsané výše v části o inzulínových profilech.

**IC:** je inzulino-sacharidový poměr. Tento profil má řadu různých hodnot v průběhu dne.

**ISF:** je citlivost na inzulin – hodnota, o kterou jedna jednotka inzulínu sníží glykémii, a to za předpokladu, že se nic jiného nemění.

**Bazál:** je bazální profil naprogramovaný do vaší pumpy.

**Cíl:** je hodnota glykémie, ke které má aplikace po celou dobu směřovat. Pokud chcete, můžete nastavit různé hodnoty pro různé části dne, a dokonce můžete stanovit horní a dolní hranici, takže aplikace začne provádět opatření jenom tehdy, pokud se odhadovaný průběh glykémie dostane mimo stanovený rozsah. V případě, že zvolíte rozsah hodnot, však bude systém reagovat pomaleji a glykémie se vám bude srovnávat hůř.

## Ošetření, xDrip, NSClient

Toto jsou jednoduše záznamy ošetření (bolusy a sacharidy), zprávy xDripu a zprávy odesílané Nightscoutu přes zabudovaného interního Nightscout klienta. Dokud nemáte nějaký problém, obvykle nebývá nutné starat se o žádnou z těchto stránek.

## Konfigurace

![Konfigurace](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. Uvedený snímek ukazuje docela typické nastavení: pumpa Combo, senzor Dexcom G5 spravovaný přes xDrip+, inzulin NovoRapid, profil Oref a připojení k Nightscout serveru v cloudu.

Zaškrtnutí políčka vpravo určuje, že daný modul se bude zobrazovat v horní menu liště (viz sekce A na Hlavní stránce) a ikona s ozubeným kolečkem zpřístupňuje nastavení daného modulu, pokud jsou nějaká k dispozici.

## Nastavení a předvolby

V horní pravé části navigační lišty můžete najít tři malé tečky pod sebou. Jejich stisknutím otevřete nastavení, prohlížeč historie, průvodce nastavením, informace o aplikaci a tlačítko Konec pro ukončení aplikace.