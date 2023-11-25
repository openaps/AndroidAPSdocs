# setting up the reporting server

There are currently two reporting servers available for use with AAPS:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

## Nightscout

Nightscout has been integrated into AndroidAPS for many years and also enables caregivers to track the diabetes data of the patient in near real time. Near real-time means that, as a rule, only minutes must pass between data reception and data provision if there is a sufficient Internet connection between all components involved.

Nightscout is provided as open source software and users are encouraged to run their own server by following the appropriate documentation. Everybody can create a Nightscout reporting server using free or paid services and operate it. Creating your Nightscout reporting server can require one or more web based applications that will require maintenance. In order to have a free service, you might need to migrate your Nightscout site and data when providers remove the free tier.

There are also hosting options from different service providers who operates Nightscout for you and others with a monthly fee. The costs are manageable, and you do not need to acquire any know-how or have any operating infrastructure. It is also possible to reconsider this decision from time to time and take a new path.

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

## Tidepool

Tidepool has only been available in AAPS since version 3.2 in late 2023.

:::{admonition} Tidepool with AAPS is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using AAPS, Tidepool it is not suitable for sharing real-time information with caregivers.  
Tidepool on the other hand is a great solution for sharing reports with the patient endocrinologist when Nightscout is not an accepted solution.  
:::

Tidepool is an [open source](https://github.com/tidepool-org) project. It offers to run an account free of charge on the Tidepool servers.

You can create a Tidepool account [here](https://app.tidepool.org/signup).

:::{admonition} AAPS has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: AAPS will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the uploader tool as it will lead to duplicate values.  
:::