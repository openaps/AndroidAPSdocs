# Tidepool

Tidepool je nástroj tretej strany, ktorý zbiera údaje o glykémii, inzulíne a sacharidoch (aj poznámky, ktoré pridáte k ošetreniam). Môžete ho použiť na analýzu týchto údajov a na ich zdieľanie s vaším lekárskym tímom. Od verzie AAPS 3.2 ho môžete použiť namiesto Nightscoutu na splnenie časti Cieľa 1. Môžete ho používať aj spolu s Nightscoutom ako alternatívnu reportovaciu platformu, ktorá sa dobre hodí do prostredia lekárskej starostlivosti. To môže byť vhodná možnosť pre deti používajúce AAPS, ktoré chcú mať možnosti vzdialeného sledovania a ovládania z Nightscoutu, ale chcú reportovaciu platformu, s ktorou sa ich lekársky tím cíti pohodlnejšie.

Je dôležité vedieť, že Tidepool slúži iba na reportovanie. NIE JE to aplikácia na sledovanie v reálnom čase. Ak potrebujete sledujúcich okrem hlavného telefónu s AAPS, musíte nastaviť aj Nightscout.

Poznámka: organizácia Tidepool uviedla na trh produkt iOS Loop so schválením FDA. Toto úsilie nemá nič spoločné s ich platformou na reportovanie dát ani s AAPS.


## Krok 1 – Vytvorte si účet Tidepool

- Prejdite na [tidepool.org](https://www.tidepool.org/)

- Vyberte „Personal Sign Up“ alebo „Sign Up“ (registrácia)

- Vytvorte si e-mail a heslo a poznačte si ich

- Vyberte „Personal Account“ (osobný účet) a kliknite na „Continue“ (pokračovať)

- Vyplňte časť s údajmi o pacientovi a prijmite podmienky používania

- Overte svoju e-mailovú adresu podľa pokynov, ktoré dostanete e-mailom


## Krok 2 – Pripojte AAPS k Tidepoolu

- Otvorte **menu** (☰) v ľavom hornom rohu hlavnej obrazovky a vyberte „**Konfigurácia**“

- Otvorte kategóriu „**Komunikácia**“ a zapnite „**Tidepool**“:

![Zapnutie Tidepoolu](../images/v4/Tidepool/tidepool_enable.png)

- Ťuknite na „**Otvoriť plugin**“ pod Tidepoolom a potom ťuknite na ikonu **Prihlásenie** (šípka smerujúca do dverí) v pravom hornom rohu

- Otvorí sa okno prehliadača s prihlasovacou stránkou Tidepoolu. Prihláste sa e-mailovou adresou a heslom, ktoré ste si vytvorili v kroku 1 vyššie:

![Prihlasovacia stránka Tidepoolu](../images/v4/Tidepool/tidepool_login.png)

- Po úspešnom prihlásení sa prehliadač zatvorí a obrazovka Tidepool ukáže stav „**Pripojené**“; log nižšie zaznamenáva nahrávanie údajov. Ak sa prihlásenie nepodarí, skontrolujte, či sú vaše prihlasovacie údaje správne a či ste v Tidepoole overili svoju e-mailovú adresu.

![Tidepool je pripojený](../images/v4/Tidepool/tidepool_status.png)

- V „**Nastaveniach**“ pluginu Tidepool otvorte „**Nastavenie pripojenia**“. Predvolene je „**Použiť nastavenia pripojenia Nightscout**“ zapnuté, takže Tidepool nahráva za rovnakých podmienok, aké ste nastavili pre Nightscout. Vypnite to, ak chcete pre Tidepool samostatné podmienky, napríklad nahrávať do Tidepoolu iba cez Wi-Fi a počas nabíjania, kým Nightscout používa aj mobilné dáta.

![Nastavenie pripojenia so zapnutou voľbou Použiť nastavenia pripojenia Nightscout](../images/v4/Tidepool/tidepool_connection_settings.png) ![Samostatné nastavenie pripojenia pre Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Viac pomoci s tým, ako používať svoje údaje po ich nahraní do Tidepoolu, nájdete na stránke: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Tlačidlá Tidepoolu

V pravom hornom rohu obrazovky Tidepool:

- Ikona **Prihlásenie** alebo **Odhlásiť sa** – pripojí sa k vášmu účtu Tidepool alebo sa od neho odpojí. Zobrazuje sa vždy len jedna z nich: **Prihlásenie**, keď ste odhlásení, a **Odhlásiť sa**, keď ste prihlásení. Pred odhlásením vás **AAPS** požiada o potvrdenie.
- Ikona ozubeného kolieska – nastavenia Tidepoolu.

Tlačidlá v dolnej časti obrazovky Tidepool:

- „**Nahrať teraz**“ – nahrá nové údaje hneď, bez čakania na ďalšie automatické nahrávanie.
- „**Úplná synchronizácia**“ – znova nahrá všetky údaje uložené v **AAPS**.
- „**Zmazať všetky dáta**“ – vymaže **všetky** údaje, ktoré **AAPS** nahral do vášho účtu Tidepool. Toto sa nedá vrátiť späť. Použite to iba na odstránenie nesprávnych alebo duplicitných údajov a potom spustite „**Úplná synchronizácia**“, aby sa vaše údaje znova nahrali.
- „**Vymazať log**“ – vyprázdni log zobrazený na obrazovke Tidepool.

![Obrazovka Tidepool a jej tlačidlá](../images/v4/Tidepool/tidepool_menu.png)

V Tidepoole sa údaje nahrané z **AAPS** 4 zobrazujú pod názvom zariadenia **AAPS**. Ak ste Tidepool používali so staršou verziou, pozrite si [Čo sa zmenilo v AAPS v4](#v4changes-tidepool). 
