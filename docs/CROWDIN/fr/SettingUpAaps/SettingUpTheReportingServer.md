# Mise en place du serveur de reporting

Il existe actuellement deux serveurs de reporting compatibles avec l'utilisation d'**AAPS** :

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Nous recommandons l'utilisation de Nightscout.

## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. It is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Il permet également aux soignants d'envoyer des commandes à distance à **AAPS**.

Nightscout est un logiciel open-source. N'importe qui peut créer et maintenir un serveur Nightscout, en utilisant des services gratuits ou payants.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

La création de votre serveur de reporting Nightscout peut nécessiter une ou plusieurs applications en ligne qu'il faudra ensuite maintenir. Afin de bénéficier d'un service totalement gratuit, vous aurez peut-être à migrer votre site Nightscout et vos données, si ou quand le fournisseur supprimera l'option gratuite.

Les explications sur comment configurer Nightscout avec les avantages et les inconvénients des différentes options de fonctionnement, y compris une estimation des coûts, peuvent être trouvées [ici](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Payer pour un service Nightscout hébergé

Il existe également les propositions de différents fournisseurs de services qui hébergent Nightscout pour vous, moyennant des frais mensuels. Le coût est abordable, et l'avantage d'une option hébergée est que vous n'avez pas besoin d'être compétent en informatique, ou d'avoir une infrastructure opérationnelle.

Les personnes qui utilisent déjà Nightscout peuvent reconsidérer de temps en temps où et comment leur serveur Nightscout est hébergé, et changer pour une autre option si elle devient plus appropriée.

Certains des fournisseurs qui hébergent Nightscout pour vous sont répertoriés [ici](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

One you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

## Tidepool

Tidepool n'est disponible dans **AAPS** que depuis la version 3.2, publiée fin 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Étant donné qu'il y a un délai de 3h entre la réception et l'affichage des données lorsqu'on utilise **AAPS**, Tidepool n'est pas adapté pour le partage de données en temps réel avec des aidants.
D'un autre côté, Tidepool peut être un excellent outil pour partager des rapports avec votre équipe médicale si Nightscout n'est pas accepté.  
```

Tidepool est un projet [open source](https://github.com/tidepool-org). Vous pouvez ouvrir un compte gratuitement sur les serveurs Tidepool.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
Vous n'avez **pas** à utiliser l'application de téléchargement pour Tidepool : **AAPS** téléversera la glycémie, traitements et la basale pour vous. Vous n'avez besoin que de votre compte personnel Tidepool. Ne téléchargez pas vos données avec l'outil de téléchargement de Tidepool car cela créera les données en double.  
```

## Next step

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../SettingUpAaps/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md).
