# Rozložené sacharidy / "eSacharidy"

S běžnou léčbou pomocí inzulínové pumpy je rozložený bolus dobrý způsob, jak řešit tučná nebo jinak pomalu stravovaná jídla, která zvyšují hladinu glukózy v krvi déle, než je působnost inzulínu. Nicméně v rámci smyčky nedávají rozložené bolusy moc smysl (a způsobují technické potíže), protože to jsou v podstatě fixní vysoké DBD, což je proti hlavnímu principu smyčky, která bazální dávky přizpůsobuje dynamicky. Potřeba řešit taková jídla však stále zůstává. To je důvod, proč AndroidAPS od verze 2.0 podporuje takzvané rozložené sacharidy nebo eSacharidy.

eSacharady jsou sacharidy, jejichž působení se rozlévá do několika hodin. Pro standardní jídla s více sacharidy než tuky/bílkovinami je zadávání sacharidů dopředu (a snížení počátečního bolusu v případě podle potřeby) obvykle dostatečné řešení, aby se tak zabránilo příliš brzkému podání inzulínu. Ale pro pomaleji vstřebávaná jídla, kde zadání všech sacharidů předem způsobí příliš velké IOB z SMB, mohou být použity eSacharidy, aby se přesněji simulovalo vstřebávání sacharidů (a jakýchkoliv ekvivalentů, které zadáte pro ostatní makroživiny). Výsledkem je přesnější simulace průběhu glykémie v krvi. Pomocí těchto informací může smyčka podávat SMB k těmto sacharidům po částech, což lze považovat za dynamický rozložený bolus (mělo by to fungovat také bez SMB, ale bude to pravděpodobně méně účinné).

eSacharidy nejsou omezené jenom na tučná/bílkovinná těžká jídla, mohou také vypomoci v každé situaci, kde existují vlivy zvedající hladinu cukru v krvi, např. jiné léky jako kortikosteroidy.

Abyste eSacharidy zadali, nastavte dobu trvání v dialogovém okně *Sacharidů* na hlavní stránce, celkové množství sacharidů a eventuálně časový posun:

<img src="https://1.bp.blogspot.com/-gnWKSBIBO2g/WuTPV0Rya3I/AAAAAAAAAEg/BvqiZYrsuKcgbny5t1sHWlPS6feWq-xEwCLcBGAs/s1600/Screenshot_20180427-144305.png" width=400>

eSacharidy na hlavní stránce. Všimněte si sacharidů v závorkách v poli COB, které představují sacharidy v budoucnosti:

<img src="https://4.bp.blogspot.com/-sgc9XdUeaoQ/WuTPXxfaIuI/AAAAAAAAAEk/p7toa_aq_oIWWTnzoQFUPHt4JdPkaXrwwCLcBGAs/s1600/Screenshot_20180427-144324.png" width=400>

Sacharidové vstupy, které jsou plánované v budoucnosti, jsou zbarvené tmavě oranžovou barvou na záložce ošetření:

<img src="https://user-images.githubusercontent.com/1732305/38613978-e6d1748e-3d8b-11e8-9d62-154fe73443da.png" width=400>

* * *

Způsob zpracování tuků a bílkovin s touto funkcí je popsaný zde: https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html

* * *

Doporučené nastavení je použít OpenAPS SMB APS plugin a také s povoleným SMB - aktivní volba *Povolit SMB s COB* v nastavení.

Řešení např. pro pizzu může být (částečný) bolus předem přes *kalkulátor* a potom použití tlačítka *Sacharidy* k zadání zbývajících sacharidů, a to v trvání po 4-6 hodin se začátkem za 1 nebo 2 hodiny. Budete to muset samozřejmě vyzkoušet, jaké hodnoty sedí právě vám. Možná také opatrně upravit nastavení *Maximální počet minut bazálu, ke kterým se limituje SMB*, aby byl algoritmus více či méně agresivní. Pro jídla s nízkým obsahem sacharidů a s vysokým obsahem tuků/bílkovin může být dostačující použít jenom eSacharidy bez ručních bolusů (viz blogový příspěvek výše).

Když jsou eSacharidy generovány, je také založena poznámka do ošetření, aby byly všechny uživatelské zásahy zdokumentované, aby bylo snazší opakovat a vylepšovat své postupy.