# Configurarea serverului de raportare

Momentan există două servere de raportare disponibile pentru a fi utilizate cu **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Vă recomandăm să folosiți Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout este o aplicație web care vă poate înregistra și afișa datele CGM și **AAPS** și creează rapoarte. Este o platformă puternică care este integrată în **AAPS** de mulți ani. Acesta permite utilizatorilor și persoanelor care îi îngrijesc să urmărească datele referitoare la diabet în timp aproape real (numai câteva secunde pot trece între primirea datelor și furnizarea de date în cazul în care există o conexiune suficientă la internet între toate componentele implicate). De asemenea, permite aparținătorilor să trimită comenzi de la distanță la **AAPS**.

Nightscout este pus la dispoziție ca software cu sursă liberă. Oricine poate crea și opera un server Nightscout, folosind servicii gratuite sau plătite.

Mai multe informații sunt disponibile pe site-ul [proiectului Nightscout](http://nightscout.github.io/).

### Opțiunea 1 - Configurați chiar dumneavoastră serverul Nightscout

Crearea serverului dumneavoastră de raportare Nightscout poate necesita una sau mai multe aplicații web, care vor necesita întreținere. Pentru a avea un serviciu complet gratuit, poate fi necesar să migrați siteul Nightscout și datele, dacă și când furnizorii elimină nivelul gratuit.

O descriere a modului în care puteți configura Nightscout cu avantajele și dezavantajele diferitelor opțiuni de operare, inclusiv o estimare a costurilor, se poate găsi [aici](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Opțiunea 2 – Plătește pentru un serviciu găzduit de Nightscout

Există, de asemenea, opțiuni de la diferiți furnizori de servicii care găzduiesc Nightscout, cu o taxă lunară. Costurile sunt ușor de gestionat și avantajul unei opțiuni găzduite este că nu este necesar să fiți instruiți în domeniul informatic sau să aveți vreo infrastructură de operare.


Utilizatorii de Nightscout existenți pot reconsidera unde și cum este găzduit serverul lor Nightscout din când în când, și să se treacă la o altă opțiune în cazul în care aceasta devine mai adecvată.

Unele servicii de găzduire de Nightscout sunt prezentate [aici](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Configurația ulterioară a Nightscout

Once you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool has been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. Oferă un cont gratuit pe serverele Tidepool.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Următorul pas

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../UsefulLinks/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md). 