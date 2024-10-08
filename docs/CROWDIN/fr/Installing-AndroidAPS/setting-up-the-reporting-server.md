# Mise en place du serveur de reporting

Il existe actuellement deux serveurs de reporting compatibles avec l'utilisation d'**AAPS** :

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

Nous recommandons l'utilisation de Nightscout.

## Nightscout

Nightscout est une plateforme puissante intégrée à **AAPS** depuis de nombreuses années. Il permet aux utilisateurs et aux aidants de suivre les données sur le diabète du patient en quasi temps réel (il y aura au maximum quelques minutes entre la réception des données et leur visibilité si la connexion Internet est suffisante entre tous les composants impliqués). Il permet également aux soignants d'envoyer des commandes à distance à **AAPS**.

Nightscout est un logiciel open-source. N'importe qui peut créer et maintenir un serveur Nightscout, en utilisant des services gratuits ou payants.

### Option 1 - Configurez votre serveur Nightscout vous-même

La création de votre serveur de reporting Nightscout peut nécessiter une ou plusieurs applications en ligne qu'il faudra ensuite maintenir. Afin de bénéficier d'un service totalement gratuit, vous aurez peut-être à migrer votre site Nightscout et vos données, si ou quand le fournisseur supprimera l'option gratuite.

Les explications sur comment configurer Nightscout avec les avantages et les inconvénients des différentes options de fonctionnement, y compris une estimation des coûts, peuvent être trouvées [ici](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Payer pour un service Nightscout hébergé

Il existe également les propositions de différents fournisseurs de services qui hébergent Nightscout pour vous, moyennant des frais mensuels. Le coût est abordable, et l'avantage d'une option hébergée est que vous n'avez pas besoin d'être compétent en informatique, ou d'avoir une infrastructure opérationnelle.

Les personnes qui utilisent déjà Nightscout peuvent reconsidérer de temps en temps où et comment leur serveur Nightscout est hébergé, et changer pour une autre option si elle devient plus appropriée.

Certains des fournisseurs qui hébergent Nightscout pour vous sont répertoriés [ici](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

## Tidepool

Tidepool n'est disponible dans **AAPS** que depuis la version 3.2, publiée fin 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool est un projet [open source](https://github.com/tidepool-org). Vous pouvez ouvrir un compte gratuitement sur les serveurs Tidepool.

Vous pouvez créer un compte Tidepool [ici](https://app.tidepool.org/signup).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

Une fois que vous avez configuré votre serveur de reporting, vous pouvez maintenant soit configurer un [compte Google dédié à l'utilisation de AAPS](Dedicated-Google-account-for-AAPS.md), soit passer directement à [la compilation de l'application AAPS](building-AAPS.md).
