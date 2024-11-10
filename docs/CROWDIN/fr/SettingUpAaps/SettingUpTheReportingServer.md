# Mise en place du serveur de reporting

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Nous recommandons l'utilisation de Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. It is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). It also allows caregivers to send remote commands to **AAPS**.

Nightscout est un logiciel open-source. N'importe qui peut créer et maintenir un serveur Nightscout, en utilisant des services gratuits ou payants.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

La création de votre serveur de reporting Nightscout peut nécessiter une ou plusieurs applications en ligne qu'il faudra ensuite maintenir. Afin de bénéficier d'un service totalement gratuit, vous aurez peut-être à migrer votre site Nightscout et vos données, si ou quand le fournisseur supprimera l'option gratuite.

A description of how you can set up Nightscout with the advantages and disadvantages of the various operating options, including an estimate of the costs, can be found [here](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Payer pour un service Nightscout hébergé

Il existe également les propositions de différents fournisseurs de services qui hébergent Nightscout pour vous, moyennant des frais mensuels. Le coût est abordable, et l'avantage d'une option hébergée est que vous n'avez pas besoin d'être compétent en informatique, ou d'avoir une infrastructure opérationnelle.


Les personnes qui utilisent déjà Nightscout peuvent reconsidérer de temps en temps où et comment leur serveur Nightscout est hébergé, et changer pour une autre option si elle devient plus appropriée.

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Once you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool has only been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. Vous pouvez ouvrir un compte gratuitement sur les serveurs Tidepool.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Next step

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../UsefulLinks/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md). 