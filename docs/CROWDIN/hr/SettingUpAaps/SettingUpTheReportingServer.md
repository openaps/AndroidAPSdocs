# Postavljanje poslužitelja za izvješća

Trenutno su s **AAPS-om** dostupna dva poslužitelja za izvješća:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Poslužitelji za izvješća](../images/Building-the-App/ReportingServer.png)

Preporučujemo korištenje Nightscouta.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout je web aplikacija koja može bilježiti i prikazivati vaše CGM podatke i podatke **AAPS-a** te izrađuje izvješća. To je moćna platforma koja je već mnogo godina integrirana u **AAPS**. Korisnicima i njegovateljima omogućuje praćenje podataka o dijabetesu pacijenta gotovo u stvarnom vremenu (između primanja i prikaza podataka može proći samo nekoliko sekundi, ako sve uključene komponente imaju dovoljno dobru internetsku vezu). Preko njega idu i daljinske naredbe koje njegovatelji šalju **AAPS-u** iz **AAPSClienta** (pogledajte [Upravljanje glavni uređaj ↔ klijent](#client-master-control)).

Nightscout je softver otvorenog koda. Svatko može izraditi i voditi Nightscout poslužitelj, koristeći besplatne ili plaćene usluge.

Više informacija možete naći na [web stranici projekta Nightscout](http://nightscout.github.io/).

### Opcija 1 – Sami postavite svoj Nightscout poslužitelj

Za izradu vašeg Nightscout poslužitelja za izvješća može biti potrebna jedna ili više web aplikacija koje treba održavati. Da bi usluga bila potpuno besplatna, možda ćete morati premjestiti svoju Nightscout stranicu i podatke ako i kada pružatelji usluga ukinu besplatnu razinu.

Opis kako postaviti Nightscout, s prednostima i nedostacima različitih načina rada i procjenom troškova, možete naći [ovdje](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Opcija 2 – Platite uslugu na kojoj se Nightscout vodi za vas

Postoje i ponude različitih pružatelja usluga koji za mjesečnu naknadu vode Nightscout za vas. Troškovi su prihvatljivi, a prednost takve usluge je da ne morate znati puno o informatici niti imati vlastitu infrastrukturu.


Postojeći korisnici Nightscouta mogu s vremena na vrijeme ponovno razmisliti gdje i kako se vodi njihov Nightscout poslužitelj i prijeći na drugu opciju ako im više odgovara.

Neke usluge na kojima se vodi Nightscout navedene su [ovdje](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Daljnja konfiguracija Nightscouta

Kada vaša Nightscout instanca radi, pogledajte [stranicu o konfiguraciji Nightscouta](../SettingUpAaps/Nightscout.md) za dodatne napomene.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool je dostupan u **AAPS-u** od verzije 3.2, koja je izašla krajem 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Budući da kod korištenja **AAPS-a** između primanja i prikaza podataka prolaze tri sata, Tidepool nije prikladan za dijeljenje podataka s njegovateljima u stvarnom vremenu.  
S druge strane, Tidepool može biti odlično rješenje za dijeljenje izvješća s endokrinologom pacijenta ako Nightscout nije prihvaćeno rješenje.  
```

Tidepool je projekt [otvorenog koda](https://github.com/tidepool-org). Nudi besplatan račun na poslužiteljima Tidepoola.

Više informacija o postavljanju Tidepoola s AAPS-om [ovdje](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Ne** trebate koristiti aplikaciju za prijenos u Tidepool: **AAPS** će za vas prenijeti glukozu u krvi, tretmane i bazal. Trebate samo osobni račun na Tidepoolu. Ne prenosite svoje podatke zasebnim alatom Tidepool uploader jer će to dovesti do dvostrukih vrijednosti.  
```

## Sljedeći korak

Kada postavite svoj poslužitelj za izvješća, možete konfigurirati **AAPS** na svom telefonu pomoću [čarobnjaka za postavljanje AAPS-a](./SetupWizard.md), koji će također povezati **AAPS** s vašim poslužiteljem za izvješća.