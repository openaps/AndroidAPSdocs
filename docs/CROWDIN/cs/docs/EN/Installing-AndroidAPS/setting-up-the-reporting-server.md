# Nastavení reportovacího serveru

V současné době jsou k dispozici dva reportovací servery pro **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Doporučujeme používat Nightscout.

## Nightscout

Nightscout je výkonná platforma, která je po mnoho let integrována do **AAPS**. Umožňuje uživatelům a pečovatelům sledovat údaje o cukrovce pacienta téměř v reálném čase (mezi příjmem dat a poskytováním dat může uplynout jen několik minut, pokud je k dispozici vyhovující internetové připojení mezi všemi součástmi). Také umožňuje pečovatelům posílat vzdálené příkazy na **AAPS**.

Nightscout je poskytován jako open source software. Kdokoli může vytvořit a provozovat Nightscout server, a to buď zdarma, nebojako placenou službu.

### Možnost 1 - Nastavte si Nightscout server sami

Vytváření Nightscout reporting serveru může vyžadovat jednu nebo více webových aplikací, které budou vyžadovat údržbu. Aby byla služba zcela zdarma, možná budete muset migrovat vaše stránky Nightscout a data, pokud poskytovatelé přestanou poskytovat servis zdarma.

Popis toho, jak můžete založit Nightscout s výhodami a nevýhodami různých řešení, včetně odhadu nákladů lze nalézt [zde]https://nightscout. ithub.io/nightscout/new_user/#free-diy.

### Možnost 2 - Zaplaťe si hostovanou službu Nightscout

Existují také možnosti od různých poskytovatelů služeb, kteří pro vás hostují Nightscout za měsíční poplatek. Náklady jsou zvládnutelné a výhodou hostovaného řešení je, že nemusíte IT znalosti ani ani mít provozní infrastrukturu.

Stávající uživatelé Nightscoutu mohou čas od času přehodnotit, kde a jak je jejich Nightscout server hostován, a přejít na jiné řešení, pokud se stane vhodnější.

Některé hostované služby Nightscoutu jsou uvedeny [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison on-table).

## Tidepool

Tidepool je k dispozici pouze od **AAPS** verze 3.2, která byla vydána koncem roku 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool je [open source](https://github.com/tidepool-org) projekt. Nabízí bezplatné provozování účtu na serverech Tidepool.

Můžete si vytvořit Tidepool účet [zde](https://app.tidepool.org/signup).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

Po nastavení svého reportovacího serveru můžete nyní buď nastavit [Vyhrazený účet Google pro použití v AAPS](Dedicated-Google-account-for-AAPS.md) nebo přejděte přímo k [Sestavení aplikace AAPS](building-AAPS.md).
