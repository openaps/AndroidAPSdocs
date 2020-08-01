# Obrazovky AndroidAPS

## Hlavní stránka

![Hlavní obrazovka V2.5.](../images/Screenshot_Home_screen_V2_5_1.png)

Toto je první obrazovka, na kterou narazíte, když spustíte aplikaci AndroidAPS. Obsahuje většinu informací, které budete potřebovat každý den.

### Sekce A

* navigace mezi různými moduly AndroidAPS tažením prstu (swipe) doleva nebo doprava

### Sekce B

* změna stavu smyčky (otevřená smyčka, uzavřená smyčka, přerušení smyčky atd.)
* zobrazení aktuálního profilu a provedení [Přepnutí profilu](../Usage/Profiles.md)
* zobrazení aktuálního cíl a nastavení [dočasného cíl](../Usage/temptarget.md).

Podržte prst dlouze na některém z tlačítek pro změnu nastavení. Tj. dlouze stiskněte tlačítko cíle v pravém horním rohu ("100" na snímku výše) pro nastavení dočasného cíle.

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

* **Oranžová** linka: [COB](../Usage/COB-calculation.rst) (barva se obecně používá k vizualizaci COB a sacharidů)
   
   Linka předpovědi ukazuje, jak se bude vaše glykemie (ne samotné COB!) vyvíjet na základě aktuálního nastavení pumpy a za předpokladu, že odchylky způsobené absorpcí sacharidů zůstanou konstantní. Tato linka se zobrazí pouze v případě, že je známý COB.

* **Tmavě modrá** linka: IOB (barva se obecně používá k vizualizaci IOB a inzulínu)
   
   Linka předpovědi ukazuje, co by se stalo pouze pod vlivem inzulínu. Například, pokud jste aplikovali nějaký inzulín a pak nejedli žádné sacharidy.

* **Světle modrá** linka: nulový dočasný bazál (předpověď glykémie, pokud by byl dočasný bazál nastaven na 0 %)
   
   Linka předpovědi ukazuje, jak by se změnila trajektorie IOB, pokud pumpa zastaví všechny dodávky inzulínu. (0% dočasný bazál).

* **Tmavě žlutá** linka: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (neohlášená jídla)
   
   Neohlášená jídla znamenají, že je zjištěn výrazný nárůst glykemie v důsledku jídla, adrenalinu nebo jiných vlivů. Linka předpovědi je podobná ORANŽOVÉ COB lince, ale předpokládá, že se odchylky budou snižovat konstantní rychlostí (rozšířením současné rychlosti snížení).

Obvykle vaše skutečná křivka glykémie končí uprostřed těchto linek nebo blízko k té, jejíž předpoklady se nejvíce podobají vaší situaci.

**Modrá linka** ukazuje dávkování bazálního inzulínu pumpou. **Tečkovaná modrá** linka ukazuje úroveň bazální dávky, jaká by byla vydávána za normálních okolností, kdyby nebyla navýšená/snížená pomocí dočasné bazální dávky (TBR), a plná modrá linka je aktuální dávkování v průběhu času.

**Tenká žlutá** linka ukazuje aktivitu Inzulínu. Je založena na očekávaném poklesu glykémie odpovídajícímu množství inzulínu, pokud nebyly přítomny žádné jiné faktory (jako např. sacharidy).

### Sekce F

Tuto část lze konfigurovat pomocí voleb v sekci D.

* **IOB** (modrý graf): Zobrazuje inzulín, který máte v těle. Pokud není nastaven žádný TBR, SMB nebo zbývající bolusy, měla by tato hodnota být nulová. Vstřebávání závisí na nastavení hodnoty DIA a vybraném profilu inzulinu. 
* **COB** (oranžový graf): Zobrazuje sacharidy, které máte v těle. Vstřebávání závisí na odchylkách, které detekuje algoritmus. Pokud se zjistí vyšší absorpce, než se očekávalo, může dojít k vydání inzulinu. To bude mít za následek zvýšení IOB (zda více či méně závisí na vašich bezpečnostních nastaveních). 
* **Odchylky**: 
   * **ŠEDÉ** sloupce zobrazují odchylku způsobenou sacharidy. 
   * **ZELENÉ** sloupce ukazují, že je glykémie vyšší, než algoritmus očekával. 
   * **ČERVENÉ** sloupce ukazují, že je glykémie nižší, než algoritmus očekával.
* **Citlivost** (bílá linka): Ukazuje citlivost, kterou [Autosens](../Usage/Open-APS-features#autosens) detekovala. Citlivost je výpočet citlivosti na inzulín v důsledku pohybu, hormonů atd.
* **Aktivita** (žlutá linka): Zobrazuje aktivitu inzulínu, vypočtenou podle profilu inzulínu (není derivací IOB). Hodnota je vyšší pro inzulín blíže době špičky. Derivace by znamenala, že aktivita bude záporná, pokud IOB klesá. 

### Sekce G

Umožňuje podávání bolusu (obvykle k tomu použijete tlačítko Kalkulačka) a ke vkládání kalibrace CGM měřením glykémie z prstu. Také se zde zobrazí tlačítko Rychlý bolus, pokud je nakonfigurováno v [Konfiguraci](../Configuration/Config-Builder#quickwizard-settings).

## Kalkulačka

![Kalkulačka](../images/Screenshot_Bolus_calculator.png)

Když se chystáte odesílat bolus k jídlu, dobře se k tomu hodí funkce kalkulačka.

### Sekce A

zde se vyplňují údaje o bolusu, který se chystáte odeslat. Pole „Glykémie“ bývá automaticky předvyplněné poslední naměřenou hodnotou ze senzoru. Pokud právě nemáte senzor v provozu, pak bude pole prázdné. Do pole „Sacharidy“ vkládáte odhadované množství sacharidů (nebo ekvivalentní hodnotu), ke kterému chcete poslat bolus. Pole „Korekce“ slouží k navýšení/snížení výsledné dávky inzulínu z jakéhokoliv důvodu a „Čas jídla“ slouží k předsazení bolusu tak, abyste systému řekli, že mezi bolusem a konzumací jídla bude udaná prodleva. Můžete zde zadat i záporné číslo, pokud později dopichujete bolus k již dříve zkonzumovaným sacharidům.

SUPERBOLUS je funkce, kdy je k dávce okamžitého bolusu přičtený bazální inzulín za následující dvě hodiny a zároveň je na pumpě nastavená dočasná bazální dávka 0% na dvě hodiny, aby se tak kompenzoval extra podaný inzulín. Cílem je dodat inzulín dřív, aby se snížil kopec, který na grafu glykémie obvykle následuje.

### Sekce B

zobrazuje vypočtený bolus. Pokud množství již aktivního inzulínu v krvi převyšuje vypočtený bolus, pak se jen zobrazí doporučené množství sacharidů k jeho pokrytí.

### Sekce C

zobrazuje různé prvky, které byly použity k výpočtu bolusu. Můžete zrušit označení všech, které se vám nehodí, ale normálně by k tomu neměl být důvod.

### Kombinace COB a IOB a jejich význam

<ul>
    <li>Pokud vyberete COB a IOB, budou při výpočtu zohledněny nestrávané sacharidy, které již nejsou pokryty inzulinem + veškerý inzulin, který byl dodán jako TBR nebo SMB.</li>
    <li>Pokud vyberete COB bez IOB, riskujete vydání příliš velkého množství inzulinu, protože AAPS nebude brát v potaz inzulin, který již byl vydán. </li>
    <li>Pokud vyberete IOB bez COB, AAPS bude zohledňovat již vydaný inzulin, ale nezapočítá žádné zkonzumované sacharidy, které dosud nejsou stráveny. To vede k oznámení o 'chybějících sacharidech'.
</ul>

V případě, že chcete vydat další bolus krátce po podání bolusu k jídlu (např. když si přidáte zákusek), je užitečné zrušit označení všech těchto políček. Tak lze přidat pouze nově zkonzumované sacharidy, jelikož hlavní jídlo dosud nemusí být stráveno, takže IOB krátce po bolusu k jídlu nebude přesně odpovídat množství COB.

### Chybná detekce COB

![Pomalá absorpce sacharidů](../images/Calculator_SlowCarbAbsorbtion.png)

Pokud při použití kalkulačky uvidíte výše uvedené varování, systém AndroidAPS zjistil, že vypočtená hodnota COB může být chybná. Takže chcete-li si dát bolus znovu po předchozím jídle s COB, měli byste si dát pozor na možné předávkování inzulinem! Podrobnosti viz pokyny na [stránce výpočtu COB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Inzulínový profil

![Inzulínový profil](../images/Screenshot_insulin_profile.png)

Zde se zobrazuje profil aktivity pro inzulín, který jste vybrali. FIALOVÁ linka ukazuje, jaké množství inzulínu průběžně v čase zůstává od aplikace po úplné rozložení, a MODRÁ linka ukazuje, nakolik je v čase aktivní.

Obvykle budete používat jeden z profilů Oref – a nezapomeňte na důležitou věc, a sice, že rozpad inzulínu má „dlouhý ocas“. Pokud jste byli zvyklí na ruční podávání inzulínu, pravděpodobně jste předpokládali, že inzulín se bude postupně spotřebovávat asi 3,5 hodiny. Avšak pokud používáte smyčku, tak na zbytkovém inzulínu (na onom „ocasu“) záleží. Pokud s ním totiž počítáte, výsledné výpočty jsou mnohem přesnější. Zvláště patrné je to v rekurzivním výpočtu algoritmu AndroidAPS, když se počítá řada malých zbytků inzulínu.

Podrobnější informace o různých typech inzulínu, o jejich profilech aktivity a o tom, proč je to vše důležité, najdete v článku [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

A také si o tom můžete přečíst výborný článek blogu zde: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

A ještě více na: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Stav pumpy

![Stav pumpy](../images/Screenshot_pump_Combo.png)

Zde vidíme stav inzulínové pumpy – v tomto případě Accu-Chek Combo. Zobrazené informace nepotřebují další vysvětlení. Dlouhý stisk tlačítka HISTORIE spustí čtení dat z historie pumpy, včetně bazálního profilu. Ale pamatujte, že na pumpě Combo je podporován pouze jeden bazální profil.

## Péče

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Korekce sacharidy

Záložka ošetření může být použita k opravě chybných záznamů sacharidů (např. jste sacharidy přecenili nebo podcenili).

1. Zkontrolujte a zapamatujte si aktuální COB a IOB na domovské obrazovce.
2. V závislosti na pumpě se mohou sacharidy v záložce ošetření zobrazovat společně s inzulínem v jednom řádku nebo jako samostatný záznam (např. s Danou RS).
   
   ![Ošetření na 1 nebo 2 řádky](../images/Treatment_1or2_lines.png)

3. Odstraňte záznam s chybným množstvím sacharidů.

4. Ujistěte se, že sacharidy byly úspěšně odstraněny kontrolou COB na domovské obrazovce.
5. Kontrolu proveďte také pro IOB, pokud v záložce ošetření jeden řádek obsahuje sacharidy i inzulín.
   
   -> Nejsou-li sacharidy odstraněny tak, jak bylo zamýšleno, a přidáte další sacharidy, jak je zde vysvětleno (6.), COB budou příliš vysoké a to může vést k podání příliš vysokého množství inzulínu.

6. Zadejte správné množství sacharidů pomocí tlačítka na domovské obrazovce a ujistěte se, že jste nastavili správný čas události.

7. Pokud je v záložce ošetření pouze jedna řádka obsahující sacharidy i inzulín, musíte také přidat množství inzulínu. Nezapomeňte nastavit správný čas události a po potvrzení nového záznamu zkontrolujte IOB na domovské obrazovce.

## Smyčka, MA, AMA, SMB

Obvykle se těmito kartami nemusíte zatěžovat, zobrazují podrobné výsledky algoritmu OpenAPS, který se spouští pokaždé, kdy systém obdrží nová data ze senzoru CGM. Detaily naleznete v jiné dokumentaci.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS umí fungovat s různými konfiguracemi profilů. Obvykle – jak je znázorněno zde – je do aplikace stažený Nightscoutový profil přes vestavěný Nightscout klient a zde zobrazený profil je pak pouze pro čtení. Chcete-li provést nějaké změny, proveďte je v uživatelském rozhraní Nightscoutu a pak v AndroidAPS proveďte [Přepnutí profilu](../Usage/Profiles.md), aby se změny projevily (aktivovaly). Údaje jako bazální profil pak budou automaticky zkopírované přímo do vaší pumpy.

**DIA:** znamená trvání účinku inzulinu a je popsané výše v části o inzulínových profilech.

**IC:** je inzulino-sacharidový poměr. Tento poměr se může v průběhu dne různě měnit.

**ISF:** je citlivost na inzulin – hodnota, o kterou jedna jednotka inzulínu sníží glykémii, a to za předpokladu, že se nic jiného nemění.

**Bazál:** je bazální profil naprogramovaný do vaší pumpy.

**Cíl:** je hodnota glykémie, ke které má aplikace po celou dobu směřovat. Pokud chcete, můžete nastavit různé hodnoty pro různé části dne, a dokonce můžete stanovit horní a dolní hranici, takže aplikace začne provádět opatření jenom tehdy, pokud se odhadovaný průběh glykémie dostane mimo stanovený rozsah. V případě, že zvolíte rozsah hodnot, však bude systém reagovat pomaleji a glykémie se vám bude srovnávat hůř.

## Ošetření, xDrip, NSClient

Toto jsou jednoduše záznamy ošetření (bolusy a sacharidy), zprávy xDripu a zprávy odesílané do Nightscoutu prostřednictvím zabudovaného interního Nightscout klientu. Dokud nemáte nějaký problém, obvykle nebývá nutné se o žádnou z těchto karet starat.

## Konfigurace

![Konfigurace](../images/Screenshot_config_builder.png)

Toto je místo, kde se provádí základní nastavení vašeho systému AndroidAPS. Uvedený snímek ukazuje docela typické nastavení: pumpa Combo, senzor Dexcom G5 spravovaný přes xDrip+, inzulin NovoRapid, profil Oref a připojení k Nightscout serveru v cloudu.

Zaškrtnutí políčka vpravo určuje, že daný modul se bude zobrazovat v horní liště s nabídkami (viz sekce A na Hlavní obrazovce) a ikona s ozubeným kolečkem zpřístupňuje nastavení daného modulu, pokud jsou nějaká k dispozici.

## Nastavení a předvolby

Vpravo nahoře na navigační liště se nacházejí tři malé tečky pod sebou. Jejich stisknutím otevřete nastavení, prohlížeč historie, průvodce nastavením, informace o aplikaci a tlačítko Konec pro ukončení aplikace.