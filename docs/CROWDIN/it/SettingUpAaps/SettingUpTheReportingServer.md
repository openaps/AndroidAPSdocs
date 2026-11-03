# Configurare il server di report

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Server di report](../images/Building-the-App/ReportingServer.png)

Ti consigliamo di usare Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. È una piattaforma potente, integrata in **AAPS** da molti anni. Permette agli utenti e a chi si prende cura di loro di seguire i dati del diabete del paziente quasi in tempo reale (tra la ricezione dei dati e la loro disponibilità possono passare solo pochi secondi, se tutti i componenti hanno una buona connessione Internet). It also carries the remote commands that caregivers send to **AAPS** from **AAPSClient** (see [Master ↔ Client control](#client-master-control)).

Nightscout è un software open source. Chiunque può creare e gestire un server Nightscout, usando servizi gratuiti o a pagamento.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Opzione 1 - Configurare da solo il tuo server Nightscout

Per creare il tuo server di report Nightscout possono servire una o più applicazioni web che richiedono manutenzione. Per avere un servizio del tutto gratuito, potresti dover spostare il tuo sito Nightscout e i tuoi dati se i fornitori tolgono l'offerta gratuita.

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Opzione 2 - Pagare un servizio Nightscout in hosting

Ci sono anche fornitori che ospitano Nightscout per te, con un costo mensile. I costi sono contenuti, e il vantaggio di un servizio in hosting è che non ti servono competenze informatiche né un'infrastruttura da gestire.


Chi usa già Nightscout può ripensare ogni tanto a dove e come è ospitato il suo server Nightscout, e passare a un'altra opzione se diventa più adatta.

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Altre impostazioni di Nightscout

Once you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool è disponibile in **AAPS** dalla versione 3.2, uscita alla fine del 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Con **AAPS** c'è un ritardo di tre ore tra l'arrivo dei dati e il loro report, quindi Tidepool non è adatto per condividere informazioni in tempo reale con chi si prende cura del paziente.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool è un progetto [open source](https://github.com/tidepool-org). Offre un account gratuito sui server di Tidepool.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. Ti serve solo un account personale su Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Passo successivo

Once you have set up your reporting server, you can configure **AAPS** on your phone with the [Setup Wizard](./SetupWizard.md), which will also link **AAPS** to your reporting server.