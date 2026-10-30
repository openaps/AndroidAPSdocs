# Plně uzavřená smyčka

```{contents} In this page
:backlinks: entry
:depth: 2
```

Hlavní výhodou plně uzavřené smyčky **FCL** je, že může napodobit umělou slinivku a usnadnit každodenní léčbu diabetu bez nutnosti dávat bolusy na jídlo.

Zatímco **hybridní uzavřená smyčka** („HCL“) je založená na algoritmu, stále vyžaduje, aby uživatel před jídlem ručně podal bolus. V důsledku toho může smyčka dočasně vypnout podávání inzulínu (dočasný nulový bazál), aby zabránila předávkování inzulínem.

Ve **FCL** už nejsou potřeba bolusy podle velikosti jídla: nechte to na algoritmu!  **AAPS** to může umožnit bez toho, aby uživatel podal jakýkoli bolus nebo zadal sacharidy, v režimu zvaném „neoznámená jídla“ **(„UAM“)**. **UAM** umožňuje **AAPS** lépe snášet nesprávně zadané sacharidy tím, že je agresivnější.

## Co očekávat?

Existuje mnoho publikovaných studií o dobrých výsledcích, kterých **FCL** může dosáhnout. Další informace najdete zde:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Úspěch **FCL** vyžaduje, aby uživatelé:

- ověřili, zda splňují požadavky **FCL**;
- nastavili **automatizace** přizpůsobené potřebám své každodenní léčby; a
- jemně doladili nastavení **AAPS** (zejména **automatizace**).


## Obecné úvahy, proč (ne)přecházet z HCL na FCL

**FCL** není pro každého:

- Někteří uživatelé **FCL** dosahují TIR (70–180) kolem 90 % a HbA1c pod 6 %, jiní uživatelé však dávají přednost těsnější kontrole. Zejména minimalizace hodnot nad 140 mg/dl při stravě s rychlými sacharidy pravděpodobně vyžaduje předstihový bolus.
- Ladění **AAPS** může být náročné. Není pro uživatele, které AAPS zahlcuje.  Budete muset věnovat několik týdnů úpravám a jemnému ladění své **FCL**. Investovaný čas může přinést lepší výsledky a lepší kontrolu **glykémie**.
- Zvládání jídel může být snazší, ale sport může být ve **FCL** stále náročný. Většina z nás ráda omezuje sportovní svačinky ve snaze kontrolovat tělesnou hmotnost.
- Nasadit **FCL** u dětí je stále obtížné (viz níže).


## Dobře vyladěná hybridní uzavřená smyčka

Než začnete uvažovat o přechodu na **FCL**, je vhodné nejdřív mít dobře vyladěnou **HC**L.  Úspěch s **FCL** vyžaduje velmi individuální vyladění nastavení uživatele, aby **AAPS** mohl podávat inzulín tak, že věrně napodobí VAŠI úspěšnou hybridní uzavřenou smyčku.

**FCL** vyžaduje, aby si uživatel nastavil a vyladil **automatizace**. Uživatel však musí dobře rozumět svým potřebám inzulínu dříve, než s **FCL** začne. Chyby mohou být zakryty jinými chybami, které je vyrovnávají. To může vést k nestabilnímu systému **FCL**, který se později těžko opravuje. S FCL byste měli očekávat podobné %TIR, jaké dnes vidíte ve své **HCL**.

**FCL je svépomocné (DIY) nastavení automatizací, které si uživatel určí analýzou svých dat z úspěšné HCL i z prvních zkušeností s FCL při ladění nastavení.**

## Rychlý inzulín (Lyumjev, Fiasp)

**FCL** vyžaduje rychlý inzulín.  Díky tomu dokáže **FCL** na začátku vzestupu **glykémie** po jídle udržet **glykémii** v rozsahu (podle běžné definice pod 180 mg/dl (10 mmol/l)).

Modelová studie (podrobnosti viz LINK FullLoop V2/March2023; tam oddíl 2.2) dokáže kvantitativně ukázat, že *rychlejší inzulíny*

Zdroj:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- povedou k výrazně nižším vrcholům *glykémie** než pomalejší inzulíny;
- snesou první bolus na jídlo opožděný o několik minut, aniž by vznikly nepřijatelně vysoké vrcholy; a
- minimalizují vliv různého množství sacharidů (velikosti jídel) na vrchol **glykémie**.

Je nepravděpodobné, že by **FCL** byla účinná s jiným inzulínem než Lyumjev nebo Fiasp, pokud uživatel nedrží velmi umírněnou až nízkosacharidovou stravu.

Fiasp nebo Lyumjev však mohou vést k častým okluzím pumpy, i po optimalizaci věcí jako délka jehly. Je důležité sledovat stáří kanyly nebo podu. Mnoho uživatelů zjistilo, že limit účinnosti inzulínu je 48 hodin; potom dochází k selhání kanyly/podu.

## Požadavky

Hodnoty **glykémie** a stabilní připojení Bluetooth jsou nutné, aby **AAPS** mohl optimálně fungovat bez ztráty cenného času. **FCL** vyžaduje technicky stabilní systém 24 hodin denně, 7 dní v týdnu:

- výkon vašeho **CGM. Váš CGM by neměl vytvářet skákající hodnoty **glykémie**, které by **FCL** mohla chybně vyhodnotit jako začínající jídlo. Podobně mohou skákající hodnoty způsobit i kalibrace **CGM**.
- jak a kde probíhá vyhlazování dat **CGM** a co to může znamenat pro vaše ladění. Zejména jak je definována delta a že ji AAPS rozpozná jako známku začínajícího jídla.
- Stabilita Bluetooth pro pumpu a CGM;
- zamezení (nebo alespoň včasné rozpoznání) okluze pumpy;
- tok dat, aplikace použité ve vašem telefonu a rozdíly mezi dny nošení senzoru;
- udržování všech komponent **AAPS** dobře nabitých a náhradních dílů po ruce; a
- výměnu kanyly (nebo podu) vždy dostatečně brzy, aby se snížilo riziko okluze;

Výše uvedené se bude lišit v závislosti na komponentách vašeho systému **AAPS** a životním stylu.

## Omezení související s jídlem

- Nastavit **FCL** může být snazší pro lidi, jejichž strava neobsahuje potraviny s rychlým a silným vlivem na **glykémii** a jejichž stravovací zvyklosti se den ode dne příliš nemění. To nemusí nutně znamenat nízkosacharidové stravování.

- Strava bohatá na tuky nebo bílkoviny nebo pomalé trávení/gastroparéza **FCL** práci spíše usnadňují, protože pozdní sacharidy pěkně pokryjí nevyhnutelné „ocasy“ pozdního působení bolusu, který byl potřeba kolem vrcholu.

### Glykemický index a vliv na glykémii

Náročnost pro režim **UAM** roste s rostoucím „vlivem na glykémii“ (Effect on Blood Glucose, „EBG“)

- Začněte se středním/nízkým EBG a vylaďte nastavení svého **profilu**. Teprve potom „testujte“ jídla s vysokým **EBG**.
- Pokud jíte jídla s velmi vysokým **EBG**, zvažte úvodní bolus < 50 %.

1) **Bez EBG**: např. čerstvé maso, ryby, vejce, slanina, oleje, sýry. 2) **Nízký EBG**: např. čerstvá zelenina a bobule, houby, ořechy, mléko, jogurt, sýr cottage. 3) **Střední EBG**: např. celozrnný chléb/nudle, brambory, divoká rýže, oves, sušené ovoce. 4) **Vysoký EBG**: např. pšeničný chléb, bageta, toast, vafle, sušenky, bramborová kaše, nudle, rýže. 5) **Velmi vysoký EBG**: např. cukr, sladké nápoje, ovocné šťávy, kukuřičné lupínky, cukrovinky, brambůrky, slané tyčinky.

![Glykemický index a vliv na glykémii](../images/fullClosedLoop01.png)

Pro **FCL** jsou nejobtížnější jídla složená jen ze složek s velmi vysokým a vysokým **EBG** (na obrázku červeně): **Glykémie** nejen prudce stoupá, ale jídlo také obsahuje málo tuku/bílkovin/vlákniny, které by vyvážily nevyhnutelný „ocas“ působení inzulínu, který přijde po snaze dostat vysokou glykémii včas pod kontrolu.

Nepravidelné jedení svačin a pití sladkých nápojů s rychle vstřebatelnými sacharidy je pro **FCL** problematické.


## Příprava na aktivitu/sport

Při sportu nebo pohybu se u pumpy nebo hybridní uzavřené smyčky doporučuje, aby uživatel před cvičením snížil **IOB**.

Ve **FCL** je algoritmus vyladěn tak, aby rozpoznal **UAM** a automaticky podal inzulín proti vzestupu **glykémie**.  Vysoký **dočasný cíl** a nižší **procento profilu** (účinné už kolem začátku jídla) je třeba nastavit s dostatečným předstihem před každou aktivitou.

Neobvyklá nebo nepravidelná míra pohybové aktivity představuje pro **FCL** obtíže. Cvičení je nutné plánovat dopředu (zvlášť pokud chcete snížit potřebu záchranných sacharidů/svačin při nízké glykémii během sportu). Po aktivním dni se doporučuje nastavit na noc, po úplném strávení večeře, nižší **procento profilu**: v **automatizacích** nastavte zvýšený (>100 mg/dl) cíl **glykémie** a v **Nastavení** **AAPS** zvolte „žádné **SMB** při zvýšeném cíli“ (volba Povolit SMB při vysokém dočasném cíli vypnutá).

## Překážky u dětí

**FCL** může u dětí přinášet další obtíže, mezi které patří:

- Lyumjev nebo Fiasp nemusí být dostupné nebo dobře snášené.
- Hodinová bazální dávka může být velmi nízká, což je špatný základ pro velké **SMB**.
- Strava může být bohatá na sladké složky. Kvůli typicky malému objemu krve v malém těle je silný sklon k velmi vysokým špičkám **glykémie**.
- Růstové hormony a výrazné změny citlivosti na inzulín ztěžují udržet **FCL** přesně vyladěnou.


## Povolení zesílených SMB: bezpečnost

V **HCL** jsou nastavena bezpečnostní omezení velikosti bolusů, které smyčka může podat automaticky.

Uživatelé **FCL** už nemusí kolem začátku jídla podávat velký bolus. To znamená, že limity velikosti **SMB** je nutné rozšířit, aby smyčka mohla podat dostatečně velké **SMB**.

Pokud používáte **AAPS** ve verzi Master, doporučuje se v **Nastavení** **AAPS** nastavit maximální povolenou velikost **SMB**, kterou může **FCL** podat (maxUAMSMBBasalMinutes=120, tj. bazál za 2 hodiny v danou denní dobu).

Pokud je vaše bazální dávka velmi nízká, výsledné limity **SMB** mohou být příliš nízké na to, aby dostatečně zvládly vzestupy **glykémie** po jídle. Jedním z možných řešení je vyhnout se stravě, která způsobuje prudké vzestupy **glykémie**. Algoritmus [Auto ISF](#Open-APS-features-auto-isf) (dostupný jen ve vývojovém sestavení s inženýrským režimem) má nastavení **SMB max rozšíření rozsahu**, které rozšiřuje standardní maximum (bazál za 2 hodiny) faktorem >1, a umožňuje zvýšit výchozí **Poměr podávání SMB** 50 %.

**Postupujte podle pokynů, aby AAPS mohl napodobit vaše bolusy pomocí několika SMB**.

Pravidelně kontrolujte obrazovku pluginu **APS** (**Konfigurace → APS → Otevřít plugin**), abyste viděli, zda vaše **SMB** mohou být dost velké, aby kolem začátku jídla podaly inzulín, který smyčka potřebuje.

Pokud ne, vaše snahy o ladění občas přijdou vniveč!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Pečlivě sledujte a analyzujte velikosti **SMB** krátce po začátku jídla. Laďte po krocích a neměňte více než 1 nebo 2 parametry najednou.

Nastavení vašeho **AAPS** musí být dostatečně připravené na vaši (!) rozmanitost jídel.
```

## Rozpoznání jídla / vaše automatizace pro zesílení

Pro úspěšnou **FCL** je **ISF** klíčovým parametrem ladění. Při použití **AAPS** Master + **automatizací** se musí **změna profilu na > 100 % automaticky spustit při rozpoznání jídla** (podle delt glykémie) a zajistit zesílenou **ISF**.

**AAPS** Master povoluje v režimu **HCL** dočasný **profil** až 130 %. Zesílení **ISF** se provádí ve třech krocích:

- Krok 1 – zkontrolujte v **profilu** hodnotu **ISF** platnou pro danou denní dobu a ověřte, zda například funkce Autosens nenavrhuje úpravu, která zohledňuje aktuální stav citlivosti těla na inzulín (na základě posledních několika hodin).
- Krok 2 – použijte faktor (1/procento profilu, jak je nastaveno v **automatizaci**) pro zesílení **ISF**.
- Krok 3 – zkontrolujte, zda navržená **ISF** spadá do nastavených bezpečnostních limitů.

### Šablony automatizací pro FCL

Políčka k zaškrtnutí nahoře. Můžete zvolit:

- V seznamu **automatizací** můžete zrušit zaškrtnutí (vlevo od každého pole) => Tím danou **automatizaci** deaktivujete. Můžete to například udělat u všech **FCL** **automatizací** pro snídani a na snídaně se vrátit k **HCL**.

- U každého pravidla **automatizace** můžete zaškrtnout políčko Uživatelská akce => pak se definované akce nespustí automaticky, když platí podmínky. Místo toho vás hlavní obrazovka **AAPS** upozorní pokaždé, když by vaše **FCL** automaticky podala **SMB**. Pak máte možnost říci „ano“ nebo „ne“. To je velmi užitečné ve fázi ladění.

Tato funkce může být užitečná v některých situacích, např. při syndromu „nohy na podlahu“ („foot to floor“), kdy **glykémie** po ranním vstání náhle stoupne, ale uživatel nechce plně automatickou reakci „začala snídaně“.

Níže uvedená část popisuje, jak skládat podmínky **automatizací** a jak řešit situace, ve kterých by **AAPS** měl zvýšit (nebo snížit) podávání inzulínu. Vzhledem k tomu, že **ISF** nelze ladit přímo, lze pro tyto účely stejně dobře využít zvýšení **procenta profilu** nad 100 %.

### Automatické velké SMB při vzestupu glykémie

Klíčem k úspěšné **FCL** je, že **na začátku vzestupu glykémie po jídle musí smyčka co nejrychleji podat velmi velké automatické SMB**, aby „dohnala“ potřebné **IOB** (porovnejte s bolusem, který obvykle podáváte na podobné jídlo v **HCL**!)

K tomu je třeba analyzovat data z **HCL** a určit, které **delty** asi nesouvisí s jídlem a které delty s jídlem souviset mohou.

- Protože **automatizaci** můžete definovat v předem určeném časovém okně, stačí analyzovat jen toto okno.
- Pokud jíte velmi rozdílná jídla (např. snídani s poměrně vysokým obsahem sacharidů, ale nízkosacharidový oběd), můžete pro každý časový úsek vytvořit dvě různé (sady) **automatizací**.
- Pokud zaznamenáte občasné skoky hodnot způsobených zalehnutím senzoru, noci vynechte.
- Obvykle stačí použít jen deltu za posledních 5 minut.
- Ale můžete také využít jednu z průměrných delt. Porovnáním delt v podmínkách svých **automatizací** můžete dokonce definovat akce s různou agresivitou podle toho, zda **glykémie** stoupá zrychleně, nebo ne.

> ( delta – krátká průměrná delta )>n   je výraz, který lze použít k rozpoznání zrychlení, aby se první **SMB** spustil při prvním náznaku vzestupu **glykémie**. -                                                                             
> Upozornění: nelze použít se špatnými nebo silně vyhlazenými hodnotami **CGM!

**CGM** s mezerami v datech staví uživatele do špatné situace, protože pro jistotu musíte svou definici, která delta už jistě znamená začátek jídla, nastavit záměrně „s rezervou“ (výše). To znamená:

- **FCL** ztrácí další čas, což vede k vyšším vrcholům **glykémie** a nižšímu %**TIR**;
- nemůžete použít dřívější nebo menší deltu, která by i bez jídla mohla spustit **SMB**, jež mají ve **FCL** nahradit bolus uživatele.

Navíc je pro první vzestupy po jídle typické **nízké IOB**. S ohledem na to může automatizace (#1) pro večeři vypadat takto:

![Automatizace #1: delta 8 nebo více a IOB pod 4 večer spustí profil 130 % na 12 min](../images/fullClosedLoop02.png)

Automatizace #1

Pokud platí podmínky, **AAPS** podá během následujících 12 minut 1 nebo 2 **SMB** se zesílenou **ISF** podle nastaveného zvýšeného **procenta profilu** (v příkladu zesílení insulinReq o 30 %). Dokud tyto podmínky platí, pravidlo **automatizace** se prodlužuje o dalších 12 minut. Nízkosacharidové jídlo může mít pomalejší vzestup **glykémie**. Hodí se k ní další automatizace (#2), která se spustí při nižší deltě a dá slabší posílení inzulínu.

![Automatizace #2: delta 5 nebo více a IOB pod 5,5 spustí profil 115 % na 12 min](../images/fullClosedLoop03.png)

Stejná **automatizace** se pravděpodobně spustí i u jídel s více sacharidy, jakmile skončí prudký vzestup definovaný v automatizaci #1.

Tyto dvě (a možná i třetí) **automatizace** musíte „odstupňovat“ tak, aby odpovídaly tomu, co vidíte u svých jídel (rozmanitost) => Nastavení vhodných velikostí skoků, kritérií **IOB** a zesílení bude postupný proces ladění.  Pokud do podmínek přidáte vhodné časové úseky, můžete snadno vytvořit různé automatizace pro různé denní časy jídel (snídaně, oběd, večeře).

Pamatujte, že ještě ve fázi vzestupu (!) je třeba zablokovat „přetečení“ **IOB**, aby pozdní účinky **inzulínu** („**ocas**“ po 3–5 hodinách) nepřekročily brzdnou kapacitu smyčky pomocí nulového dočasného bazálu („odebrání“ bazálu ke snížení rizika hypoglykémie).

U vydatných jídel dochází **někdy k druhému vzestupu**. V té době už obvykle i IOB o něco kleslo a opět se začínají projevovat agresivnější automatizace. (Zkontrolujte, zda podmínka IOB v Automatizaci #2 není nastavena příliš nízko na to, aby k tomu mohlo dojít).

Brzy po podání několika úvodních **SMB** přichází **vyrovnaná fáze**, kdy by mírné podávání inzulínu mělo pokrýt další vstřebané sacharidy. (Kromě nízkosacharidových jídel, kde smyčka může vidět příliš slabý vzestup **glykémie** a přejít na nulový dočasný bazál hned teď).

Hlavní obrazovka **AAPS** (kde v plné smyčce s **UAM** vidíte cob=0) může v této fázi hlásit potřebu dalších sacharidů. V režimu **UAM** to jednoduše znamená, že můžete udělat velmi hrubou kontrolu věrohodnosti: Je pravděpodobné, že máte v těle tolik nevstřebaných sacharidů z jídla, které jste snědli asi před hodinou (a o kterém jste smyčce nic neřekli)?


### Práh IOB

Často **automatizace** #1 a/nebo #2 zvýší IOB na hodnoty, které obvykle stačí pro **vaše** jídla. Pro individuální vyladění se podívejte do svých dat z **HCL** na maximální hodnoty IOB u dobře zvládnutých jídel (často: váš bolus na jídlo) a nad jakou hodnotou na konci došlo k hypoglykémii (nebo k potřebě dalších sacharidů).

Rozumné **prahové hodnoty IOB**, při kterých byste měli snížit agresivitu své smyčky, nemusí být pro každé jídlo stejné. Ale obzvláště v první hodině po začátku jídla, což je v režimu **UAM** velmi důležité. Pro každého uživatele se to bude lišit. U některých uživatelů se vstřebá jen asi 30 g za hodinu a pak může být možné stanovit vhodné **IOB** nezávisle na konkrétním jídle.

V případě výjimečných jídel – nebo naopak pro snížení hodnoty, pokud následuje sportovní aktivita – lze v rámci **Automatizace** rychle upravit nastavení prahové hodnoty **IOB**.

Automatizace (#3) „iobTH dosaženo => **SMB** vypnuto“ slouží k ukončení (nebo pozastavení, dokud nepřijde další vlna vzestupu ze sacharidů) agresivního zesilování **SMB**.

![Automatizace #3: IOB 5,5 nebo více bez běžícího dočasného cíle spustí dočasný cíl 111 mg/dl](../images/fullClosedLoop04.png)

Automatizace #3

Říká smyčce, že nad nastavenou **prahovou hodnotou IOB** je lepší už nepoužívat žádné další **SMB**

- Uvedený příklad to dělá nastavením DC=111 (což je dost libovolné; zvolte číslo >100, které snadno poznáte jako své automatické vypnutí **SMB**)
- V **AAPS** [Nastavení → OpenAPS SMB](#Preferences-openaps-smb-settings) obecně nepovolujte **SMB** při zvýšeném cíli.                                                                                                                   
  Potřebný inzulín pak bude muset být podán mnohem opatrněji přes úzké hrdlo **dočasných bazálů (TBR)**

**Upozornění: Automatizace #3 funguje jen tehdy, když není aktivní žádný dočasný cíl.** Pokud jste tedy použili dočasný cíl „Před jídlem“, musí být do té doby ukončen, což by obvykle mělo být 30–40 minut po začátku jídla.

Jednou z možností je nastavit podmínku **automatizace**, která ukončí případně běžící dočasný cíl „Před jídlem“ při podmínce **IOB**>65 % * iobTH.
> Jak pracovat s dočasným cílem „Před jídlem“ Někteří uživatelé smyčky nastavují (stisknutím tlačítka DC, nebo automaticky snížením cílové **glykémie** v **profilu**, pokud mají časy jídel docela pevné) dočasný cíl „Před jídlem“ zhruba hodinu nebo více před začátkem jídla, jen aby zajistili nízkou počáteční **glykémii** a mírně zvýšené **IOB**. Pokud ale předpokládáme, že **FCL** stále směřuje k cíli, nemusí to moc přinést a možná raději definujete **automatizaci**, která nastaví dočasný cíl „Před jídlem“ při rozpoznání začátku jídla (delta glykémie nebo zrychlení = delta > průměrná delta). Nízký **DC** je v této fázi důležitý, protože smyčka počítá každý **SMB** pomocí (predikovaná glykémie mínus DC)/sens, takže nízký DC zvětší výsledný insulinReq.

Po podání prvních zesílených **SMB** by vaše nastavené iobTH a **automatizace** #3 měly najít dobrou rovnováhu: omezit vrchol glykémie, ale také nevést k hypoglykémii po jídle.

Pokud se vaše snídaně výrazně liší obsahem sacharidů od vaší průměrné večeře, může se vám hodit definovat **automatizace**, které platí v příslušné denní době a mají jiné **iobTH** (případně i jiné delty a jiné nastavené **procento profilu**). Jak vy při definování spektra svých jídel a nastavení (zejména **iobTH**), tak smyčka při řízení vyvíjející se křivky **glykémie** musíte přijmout určitou výšku vrcholů, aby se snížilo nebezpečí hypoglykémie ke konci **DIA** ze **SMB**.

### Stagnace při vysoké glykémii

Pokud po „vydatném“ jídle vidíte dlouhou stagnaci s **vysokou glykémií**, pomůže **automatizace** #4 (níže) „post-meal High“ zvládnout rezistenci způsobenou mastnými kyselinami: Po jídlech o více chodech, velké mastné pizze nebo raclette večeru může křivka glykémie vytvořit dva hrby, nebo velmi často protáhlé vysoké plató.

![Automatizace #4: glykémie nad 160 mg/dl a Autosens pod 120 % spustí profil 120 % na 15 min](../images/fullClosedLoop05.png)

Automatizace #4

![Automatizace #5: profil na 120 % a glykémie pod 150 mg/dl přepne zpět na normální profil](../images/fullClosedLoop06.png)

Automatizace #5

Automatizace #4 „post-meal High“ (vysoká glykémie po jídle) je vhodná i v hybridní uzavřené smyčce.

Navíc je potřeba ukončovací automatizace #5 „Stop pmH“, která sníží agresivitu podávání inzulínu, jakmile glykémie začne klesat. (Často však smyčka stejně omezí další inzulín kvůli prevenci hypoglykémie, protože predikovaná glykémie už je nízko).

## Prevence hypoglykémie

Hlavní problém je, že **UAM** **FCL** (bez zadaných sacharidů) **nemá žádnou představu, kolik gramů sacharidů je ještě k dispozici** ke vstřebání, které by mohly spotřebovat „ocas“ inzulínu, aniž byste se kvůli němu dostali do hypoglykémie.

Pomocí zesílených **SMB** „dohnala“ **FCL** to, co jsme dříve dělali bolusem na jídlo. Ale **na „konci“ působení inzulínu se prevence hypoglykémie může stát vážným tématem**.

Při přípravě na **FCL** se uživatel musí podrobněji podívat na **časový průběh IOB** u typických jídel a posoudit, **kdy už je ho příliš a jak to můžete zachytit vyladěním svých automatizací**. To je možné, protože máme několik „šroubů“, kterými můžeme ladit. Nastavit to správně může být náročné

Obecně nemá smysl stále optimalizovat nastavení pro jeden druh jídla. Jakmile máte dost dobré nastavení např. pro jeden druh oběda, který jíte často, vyzkoušejte, jak funguje s jinými druhy jídel a jaký „kompromis“ zvolit.

Abyste zabránili hypoglykémii 3–5 hodin po jídle, snižte agresivitu dříve, než se nahromadí příliš mnoho IOB. Konkrétní postupy:

- Buďte s **ISF** stále mírnější už během vzestupu glykémie, jak je uvedeno v příkladech automatizací #1 a #2.
- Definujte práh IOB, od kterého bude **AAPS** výrazně opatrnější (automatizace #3 výše). Pamatujte, že toto **IOB** může být překročeno posledním **SMB** předtím, než začalo platit; a pak dále dočasnými bazály (TBR), pokud smyčka vidí insulinReq. Vstřebávané sacharidy pak budou působit opačně, směrem k nižšímu IOB.
- Práh IOB lze rozlišit podle jídel: Klonováním automatizací můžete snadno rozlišit časové úseky snídaně, oběda a večeře (nebo i místa, jako je firemní jídelna, návštěva u tchyně atd.)
> V rámci těchto časových úseků můžete rozlišovat ještě dál nastavením různých DC pro nízkosacharidová jídla vs. rychlé sacharidy atd., a tak „zakódovat“ různé třídy jídel, které se v tuto denní dobu mohou vyskytnout, a vyvolat je **automatizacemi** vyladěnými speciálně pro ně. To asi není nutné, pokud se vaše stravovací návyky příliš nemění.

Před zvláštním jídlem můžete zvýšit práh **IOB** nebo provést jinou změnu v kterékoli automatizaci za méně než 5 sekund, přímo ve svém telefonu s AAPS (**Spravovat → Automatizace**).

Nebezpečí hypoglykémie několik hodin po jídle je v podstatě otázka toho, zda bylo vaše jídlo složené tak, že **„ocasy“ inzulínu z boje s hlavní částí sacharidů** budou **spotřebovány „rozloženými sacharidy“** (nadměrné/opožděné vstřebávání sacharidů/bílkoviny/tuky/vláknina).

Časem poznáte vzorce a vyladíte své automatizace – možná i trochu upravíte své stravovací návyky, např. si dopřejete občasnou pozdní malou(!) svačinku, která může pomoci udržet dobrou **rovnováhu mezi působením inzulínu a vstřebáváním sacharidů** po **celou** dobu jídla (trávení, vstřebávání), a tím usnadní život vaší smyčce (i vám).

### Pořadí naprogramovaných automatizací

Problémy mohou vzniknout s překrývajícími se definicemi v **automatizacích**. Příklad: Problém je, že delta >8 je zároveň delta >5, tj. mohou existovat dvě konkurující si **automatizace**. Co pak smyčka udělá? Smyčka se vždy rozhoduje podle pořadí, v jakém jsou vaše **automatizace** uvedeny v **Spravovat → Automatizace**.  Příklad: Pravidlo delta > +8 musí být první (a spustit nejsilnější posílení, pokud platí všechny podmínky); potom následuje kontrola delta >5 (a mírnější reakce). Kdyby to bylo naopak, pravidlo delta>8 by se nikdy neuplatnilo, protože už platí delta>5 a je hotovo.
> Tip pro automatizace: Pořadí se dá změnit velmi snadno. V **Spravovat → Automatizace** podržte prst na úchytu **=** vpravo od pravidla a přetáhněte ho na jiné místo.

Navíc je velmi snadné a rychlé kdykoli upravit podmínky nebo akce, během několika sekund, přímo ve vašem telefonu s AAPS; například když se chystáte na velmi zvláštní příležitost s jídlem. (Ale nezapomeňte to pro další den vrátit zpět na normál).

(full-closed-loop-troubleshooting)=

## Řešení problémů

### Jak se vrátit k hybridní uzavřené smyčce

Můžete zrušit zaškrtnutí **automatizací** souvisejících s **FCL**, vrátit se k bolusům na jídlo a znovu zadávat sacharidy. Pokud jste z hlavní obrazovky odebrali tlačítka **Inzulín** nebo **Kalkulačka**, přidejte je zpět v konfiguraci [panelu Rychlé spuštění](#quicklaunch) (vždy zůstávají dostupná v **Ošetření** ve spodní navigaci). Pamatujte, že teď je opět na vás, abyste dávali bolusy na jídlo.

Může být rozumné používat **FCL** jen pro jídla (časové úseky), pro která máte **automatizace** plně definované a zapnuté, a vypnout jen ty pro ostatní časy jídel, kdy chcete používat **HCL** (nebo pro ně v přechodném období zatím nic definované nemáte).

Je například zcela možné, bez dalších kroků po definování **automatizací** pro večeři, používat **FCL** jen na večeře, zatímco snídaně a oběd řešíte v **HCL** jako dosud.



### Jsou podmínky pro FCL stále splněny?

- Je základní **profil** stále správný?
- Nezhoršila se kvalita **CGM**?
- Viz požadavky (výše).

### Glykémie je příliš vysoká

- Jídla nejsou rozpoznána dostatečně rychle
    - Zkontrolujte (ne)stabilitu Bluetooth
    - Zkontrolujte, zda byste mohli nastavit menší delty pro spuštění prvního **SMB**
    - Vyzkoušejte aperitiv nebo polévku pár minut před začátkem jídla
- SMB jsou příliš slabé
    - Zkontrolujte pořadí **automatizací** (např.: velká delta před malou deltou)
    - Zkontrolujte (v reálném čase) na obrazovce pluginu **APS**, zda hodinový bazál z profilu a nastavené minuty (max 120) neomezují povolenou velikost SMB
    - Zkontrolujte (v reálném čase) na obrazovce pluginu **APS**, zda je třeba nastavit vyšší procento profilu
- Pokud jsou všechna vaše nastavení na limitu, možná budete muset přijmout dočasně vysokou glykémii, nebo upravit stravu.
> Pokud jste připraveni vyzkoušet vývojové sestavení, [Auto ISF](#Open-APS-features-auto-isf) umožňuje i další zvětšení velikosti SMB. Někteří uživatelé ve své „FCL“ používají i malý předstihový bolus. To však ovlivňuje chování křivky glykémie, a tím i rozpoznávání vzestupů a spouštěných **SMB**, a proto to není snadné zavést tak, aby to mělo přesvědčivý celkový přínos.
- Důležité zjištění pilotních uživatelů bylo, že to, jak se vaše křivky glykémie a IOB blíží k začátku jídla, hodně ovlivňuje, jak vysoký bude vrchol ze sacharidů: Klesající glykémie (např. k nastavenému dočasnému cíli „Před jídlem“), mírné navýšení IOB a křivka, která se už stáčí k silnému kladnému zrychlení, velmi pomáhají udržet vrcholy nízko.

### Glykémie je příliš nízká

- Jídla jsou rozpoznána chybně
    - Zkontrolujte, zda byste mohli nastavit větší delty pro spuštění prvního **SMB**
    - Klikněte na „Uživatelská akce“ v příslušné automatizaci, abyste mohli v budoucnu na místě rozhodnout, že spuštění automatizace zablokujete, pokud nesouvisí s jídlem
    - Abyste zabránili tomu, že svačina spustí **SMB** jako jídlo, nastavte při svačině DC>100 (stejně jako to děláte při sportu a u svačin proti hypoglykémii)
- SMB podávají celkově příliš mnoho inzulínu
    - Zkontrolujte (v reálném čase) na obrazovce pluginu **APS**, zda je třeba nastavit menší **SMB max rozšíření rozsahu**
    - Zkontrolujte (v reálném čase) na obrazovce pluginu **APS**, zda je třeba nastavit menší **procento profilu**
    - Poměr podávání SMB lze pravděpodobně nastavit na menší hodnotu. Pamatujte, že v tomto případě to platí plošně pro všechny **SMB** (všechny časové úseky),
- Problémy s „ocasem“ inzulínu po jídle
    - Možná budete muset sníst svačinu (když vidíte predikci hypoglykémie) nebo glukózové tablety (pokud už jste v hypoglykémii). Pamatujte ale, že potřebné sacharidy, které vám smyčka může v určitém okamžiku hlásit, jsou velmi pravděpodobně přehnané, protože smyčka nemá absolutně žádné informace o tom, kolik sacharidů jste snědli a kolik jich (včetně tuků a bílkovin) ještě čeká na vstřebání (vy to možná odhadnout dokážete).
    - Cennou informací by bylo, zda problém vzniká většinou už ve fázi vzestupu glykémie. Pak může být snadným řešením nastavit nižší iobTH.
    - Pokud potřebujete další sacharidy často, zapište si, kolik gramů bylo potřeba (nepočítejte to, co jste nakonec snědli navíc a co znovu vyžadovalo další inzulín).  Pak pomocí hodnoty I:C z profilu odhadněte, o kolik méně inzulínu měl **SMB** podat, a tuto informaci použijte při ladění (týká se **procenta profilu** v **automatizacích**, nebo možná i nastaveného iobTH). To se může týkat **SMB** podaných při vysoké glykémii, nebo i **SMB** během vzestupu **glykémie**.
    - Je dost možné, že prostě budete muset přijmout vyšší vrcholy **glykémie**, abyste se nedostali do hypoglykémie. Nebo změňte stravu na takovou, která má méně sacharidů a více bílkovin a tuků.


### Další informace

Zůstaňte v kontaktu s dalšími uživateli **FCL**.

Diskuze o plně uzavřené smyčce s automatizacemi:

- Anglicky:   [Kanál na Discordu](https://discord.gg/ChXj8BaKwA)

- Německy:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
