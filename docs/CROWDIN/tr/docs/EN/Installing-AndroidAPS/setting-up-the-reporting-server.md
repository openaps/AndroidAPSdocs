# Setting up the Reporting Server

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

## Nightscout

Nightscout is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few minutes may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). It also allows caregivers to send remote commands to **AAPS**.

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

### Option 1 - Setup your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.

Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

## Tidepool

Tidepool has only been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. It offers to run an account free of charge on the Tidepool servers.

You can create a Tidepool account [here](https://app.tidepool.org/signup).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](Dedicated-Google-account-for-AAPS.md), or go straight to [building the AAPS app](building-AAPS.md).
