# setting up the reporting server

There are currently two reporting servers available for use with AAPS.

These are
- Nightscout and
- Tidepool.

We currently recommend using Nightscout.

Nightscout has been integrated into AndroidAPS for many years and also enables caregivers to track the diabetes data of their protégés in near real time. Near real-time means that, as a rule, only minutes must pass between data reception and data provision if there is a sufficient Internet connection between all components involved.

Tidepool has only been available in AAPS since version 3.2 in late 2023.

:::{admonition} Tidepool with AAPS is not for caregivers at the moment
:class: danger

Due to a time delay of three hours betwwen data income and data reporting when using AAPS, Tidepool it is not suitable for caregivers and their protégés at the moment!
:::

Another difference is that Nightscout is provided as open source software and users are encouraged to run their own server by providing appropriate documentation.

Einen Nightscout Reporting-Server kann sich jeder kostenfrei herunterladen und für sich betreiben. Für das Betreiben benötigt er aber zum einen Know-How so etwas and also a cloud server (virtual computer that is available on the Internet) where the Nightscout server runs.

There is also the option of renting from differnet service providers who operates Nightscout for you and others for a fee. The costs are manageable, but you do not need to acquire any know-how or have any operating infrastructure. It is also possible to reconsider this decision from time to time and take a new path.

A description of how you can set up Nightscout and the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found here [https://nightscout.github.io/](https://nightscout.github.io/).

We have not yet found a way to operate a Tideppol server ourselves. However, Tidepool itself offers to run an account on their server free of charge.

You can find a description of Tidepool at [https://www.tidepool.org/](https://www.tidepool.org/).

:::{admonition} AAPS has a the uploader for Tidepool integrated
:class: note
You do not need an sepearet uploader to Tidepool, as AAPS is the uploader for you. You only need a personal account with Tidepool. We ant to clearify this here as it might be a bit confusing explained on the Tidepool web site.

:::