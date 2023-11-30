# Setting up the Reporting Server

There are currently two reporting servers available for use with AAPS:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

## Nightscout

Nightscout has been integrated into **AAPS** for many years. It enables caregivers to track the patient's diabetes data in near real-time and also to send changes to **AAPS** remotely. Near real-time means that only a few minutes can pass between data reception and data provision if there is a sufficient internet connection between all components involved.

Nightscout is provided as open-source software and users are encouraged to run their own server by following the appropriate documentation. Everybody can create and operate a Nightscout reporting server, either using a free or paid service. Which option you choose typically depends on how much work you are happy to do yourself. 

### Creating and maintaining your own Nightscout server 

Creating your Nightscout reporting server yourself can require one or more web-based applications that will require maintenance. In order to maintain a free service, you may need to migrate your Nightscout site and data, if providers remove the free tier.

### Paying someone to manage your Nightscout server for you 
There are hosting options from different service providers who operates Nightscout for you, with a monthly fee. The costs are manageable, and you do not need to acquire any know-how or have any operating infrastructure. 

Nightscout managment options change reguarly, and existing Nightscout users may want to reconsider how their server is hosted from time to time.

A description of how you can set-up Nightscout with the advantages and disadvantages of the various options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

## Tidepool

Tidepool has only been available in **AAPS** since version 3.2 in late 2023.

:::{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
Tidepool on the other hand is a great solution for sharing reports with the patient's endocrinologist when Nightscout is not an accepted solution.  
:::

Tidepool is an [open source](https://github.com/tidepool-org) project. It offers to run an account free of charge on the Tidepool servers.

You can create a Tidepool account [here](https://app.tidepool.org/signup).

:::{admonition} **AAPS** has an uploader for Tidepool integrated
:class: note
You do **not** need to use the separate Tidepool uploader app to send data to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the Tidepool uploader tool as it will lead to duplicate values.  
:::