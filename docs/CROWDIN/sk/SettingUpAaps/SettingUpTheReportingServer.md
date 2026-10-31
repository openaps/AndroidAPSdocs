# Nastavenie reportovacieho servera

S **AAPS** môžete v súčasnosti používať dva reportovacie servery:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reportovacie servery](../images/Building-the-App/ReportingServer.png)

Odporúčame používať Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout je webová aplikácia, ktorá dokáže zaznamenávať a zobrazovať vaše údaje CGM a údaje **AAPS** a vytvárať prehľady. Je to výkonná platforma, ktorá je už mnoho rokov integrovaná do **AAPS**. Umožňuje používateľom a opatrovateľom sledovať údaje o diabete pacienta takmer v reálnom čase (ak je medzi všetkými zapojenými komponentmi dostatočné internetové pripojenie, medzi prijatím a sprístupnením dát môže uplynúť len niekoľko sekúnd). It also carries the remote commands that caregivers send to **AAPS** from **AAPSClient** (see [Master ↔ Client control](#client-master-control)).

Nightscout je softvér s otvoreným zdrojovým kódom. Server Nightscout si môže vytvoriť a prevádzkovať ktokoľvek, pomocou bezplatných alebo platených služieb.

Viac informácií nájdete na [webovej stránke projektu Nightscout](http://nightscout.github.io/).

### Možnosť 1 – nastaviť si server Nightscout sami

Vytvorenie vlastného reportovacieho servera Nightscout môže vyžadovať jednu alebo viac webových aplikácií, ktoré bude potrebné udržiavať. Ak chcete mať službu úplne zadarmo, možno budete musieť svoju stránku Nightscout aj s dátami presunúť, ak a keď poskytovatelia zrušia bezplatnú verziu (free tier).

Informácie k nastaveniu Nightscoutu s výhodami a nevýhodami rôznych možností prevádzky vrátane odhadu nákladov nájdete [tu](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Možnosť 2 – zaplatiť si hostovanú službu Nightscout

Existujú aj ponuky rôznych poskytovateľov služieb, ktorí za mesačný poplatok hostujú Nightscout za vás. Náklady sú zvládnuteľné a výhodou hostovanej možnosti je, že nemusíte rozumieť IT ani mať vlastnú prevádzkovú infraštruktúru.


Súčasní používatelia Nightscoutu môžu z času na čas prehodnotiť, kde a ako je ich server Nightscout hostovaný, a prejsť na inú možnosť, ak im bude viac vyhovovať.

Niektoré služby, ktoré hostujú Nightscout, nájdete [tu](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Ďalšia konfigurácia Nightscoutu

Keď máte Nightscout pripravený a spustený, ďalšie informácie nájdete na [konfiguračnej stránke Nightscout](../SettingUpAaps/Nightscout.md).

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool je v **AAPS** dostupný od verzie 3.2, ktorá vyšla koncom roka 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Pri používaní **AAPS** je medzi príjmom údajov a ich zobrazením v reporte oneskorenie tri hodiny, preto Tidepool nie je vhodný na zdieľanie informácií v reálnom čase s opatrovateľmi.  
Na druhej strane, Tidepool môže byť skvelé riešenie na zdieľanie reportov s diabetológom pacienta, ak Nightscout nie je prijateľné riešenie.  
```

Tidepool je [open source](https://github.com/tidepool-org) projekt. Ponúka bezplatný účet na serveroch Tidepool.

Viac informácií o nastavení Tidepoolu s AAPS nájdete [tu](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Aplikáciu na nahrávanie do Tidepoolu (uploader) **nemusíte** používať: **AAPS** za vás nahrá glykémie, ošetrenia a bazál. Potrebujete iba osobný účet v Tidepoole. Nenahrávajte svoje údaje samostatným nástrojom Tidepool uploader, pretože by vznikli duplicitné hodnoty.  
```

## Ďalší krok

Keď máte reportovací server nastavený, môžete **AAPS** v telefóne nakonfigurovať pomocou [Sprievodcu nastavením](./SetupWizard.md), ktorý **AAPS** prepojí aj s vaším reportovacím serverom.