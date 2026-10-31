# Mise en place du serveur de rapports

Il existe actuellement deux serveurs de rapports utilisables avec **AAPS** :

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Serveurs de rapports](../images/Building-the-App/ReportingServer.png)

Nous recommandons l'utilisation de Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout est une application web. Elle peut enregistrer et afficher les données de votre MGC et les données d'**AAPS**, et elle crée des rapports. C'est une plateforme puissante, intégrée à **AAPS** depuis de nombreuses années. Il permet aux utilisateurs et aux aidants de suivre les données de diabète du patient presque en temps réel (quelques secondes seulement peuvent séparer la réception des données et leur mise à disposition, si la connexion Internet est suffisante entre tous les éléments concernés). Il transmet aussi les commandes à distance que les aidants envoient à **AAPS** depuis **AAPSClient** (voir [Contrôle maître ↔ client](#client-master-control)).

Nightscout est un logiciel open-source. N'importe qui peut créer et maintenir un serveur Nightscout, en utilisant des services gratuits ou payants.

Vous trouverez plus d'informations sur le [site web du projet Nightscout](http://nightscout.github.io/).

### Option 1 - Mettre en place vous-même votre serveur Nightscout

La création de votre serveur de rapports Nightscout peut nécessiter une ou plusieurs applications en ligne qu'il faudra ensuite maintenir. Afin de bénéficier d'un service totalement gratuit, vous aurez peut-être à migrer votre site Nightscout et vos données, si ou quand le fournisseur supprimera l'option gratuite.

Une description de la mise en place de Nightscout, avec les avantages et les inconvénients des différentes options d'hébergement et une estimation des coûts, se trouve [ici](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Payer pour un service Nightscout hébergé

Il existe également les propositions de différents fournisseurs de services qui hébergent Nightscout pour vous, moyennant des frais mensuels. Le coût est abordable, et l'avantage d'une option hébergée est que vous n'avez pas besoin d'être compétent en informatique, ou d'avoir une infrastructure opérationnelle.


Les personnes qui utilisent déjà Nightscout peuvent reconsidérer de temps en temps où et comment leur serveur Nightscout est hébergé, et changer pour une autre option si elle devient plus appropriée.

Quelques services d'hébergement Nightscout sont listés [ici](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Suite de la configuration de Nightscout

Quand votre instance Nightscout est en place et fonctionne, consultez la [page de configuration de Nightscout](../SettingUpAaps/Nightscout.md) pour d'autres points à prendre en compte.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool est disponible dans **AAPS** depuis la version 3.2, sortie fin 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Avec **AAPS**, il y a un délai de trois heures entre la réception des données et leur affichage dans les rapports. Tidepool ne convient donc pas pour partager des informations en temps réel avec les aidants.  
D'autre part, Tidepool peut être une très bonne solution pour partager des rapports avec l'endocrinologue d'un patient si Nightscout n'est pas une solution acceptée.  
```

Tidepool est un projet [open source](https://github.com/tidepool-org). Vous pouvez ouvrir un compte gratuitement sur les serveurs Tidepool.

Plus d'informations sur la configuration de Tidepool avec AAPS [ici](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Vous n'avez **pas** besoin d'utiliser l'application d'envoi (uploader) vers Tidepool : **AAPS** envoie pour vous la glycémie, les traitements et le débit basal. Vous avez seulement besoin d'un compte personnel Tidepool. N'envoyez pas vos données avec l'outil d'envoi Tidepool séparé (uploader), car cela crée des valeurs en double.  
```

## Étape suivante

Une fois votre serveur de rapports en place, vous pouvez configurer **AAPS** sur votre téléphone avec l'[Assistant de configuration](./SetupWizard.md), qui reliera aussi **AAPS** à votre serveur de rapports.