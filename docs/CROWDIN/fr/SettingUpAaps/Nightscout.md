# Nightscout

(Nightscout-security-considerations)=

## Remarques sur la sécurité

Nightscout est le serveur de rapports et de surveillance d'**AAPS** : **AAPS** y envoie vos données, et vous ou vos aidants les consultez sur le site web Nightscout ou dans des applications de suivi. Il contient vos données médicales, vos profils et vos traitements. Il est donc important de bien sécuriser votre site Nightscout.

Dans **AAPS** 4, le contrôle à distance ne passe pas par le site web Nightscout. Quand le contrôle par le client est activé ([mode renforcé](#client-master-control-hardened-mode)), les traitements ou les cibles saisis directement dans Nightscout ne sont **pas appliqués** par **AAPS**. Les commandes à distance viennent à la place d'un **AAPSClient** associé. Voir [Contrôle maître ↔ client](#client-master-control).

Soyez extrêmement prudent si vous utilisez Nightscout comme source de données de glycémie dans AAPS.

### Paramètres Nightscout

Vous pouvez bloquer l'accès public à votre site Nightscout avec les [rôles d'authentification](https://nightscout.github.io/nightscout/security) : ne partagez votre URL qu'avec un jeton `readable`, jamais avec un jeton `admin`.

L'`API_SECRET` de Nightscout est le mot de passe principal de votre site : ne le partagez pas publiquement.

(Nightscout-aaps-settings)=

### Paramètres AAPS

Accepter des données venant de Nightscout (changements de profil, traitements, ...) est facultatif et désactivé par défaut. Les interrupteurs décrits ci-dessous sont masqués quand le contrôle par le client est activé (mode renforcé) et en [mode simple](#preferences-simple-mode).

* Accédez aux paramètres **Synchronisation** du plugin NSClientV3 de l'une de ces façons : 1) **Paramètres** (icône en forme d'engrenage sur l'écran principal) -> **NSClientV3** -> **Synchronisation**, ou 2) **Configuration** (menu ☰) -> **Communication** -> « **Paramètres** » sous NSClientV3.
* Activez « Envoyer des données vers NS ».
* « Envoyer des Gly vers NS » se trouve dans les paramètres de votre source de glycémie (**Configuration → Source GLY → Paramètres**). Activez-le, sauf si votre source de données de glycémie dans AAPS est Nightscout : dans ce cas, **ne l'activez pas**.
* N'activez pas « Recevoir les données MGC depuis NS », sauf si Nightscout est votre source de données de glycémie.

#### Ne pas synchroniser depuis Nightscout

Garder toutes les options « Recevoir ... depuis NS » désactivées garantit qu'AAPS n'utilisera aucune modification venant de Nightscout :

![Envoi vers Nightscout uniquement](../images/preferences/settings_nsclient_sync.png)

#### Accepter les modifications venant de Nightscout

Activer ces options vous permet de modifier des réglages d'AAPS depuis Nightscout, par exemple modifier et changer de profil, définir des cibles temporaires ou ajouter des glucides, qui seront pris en compte par AAPS. Elles ne s'affichent que quand le contrôle par le client et le mode simple sont désactivés.  
Notez que les traitements d'insuline ne seront utilisés que pour les calculs, comme « Ne pas injecter de bolus, enregistrer seulement ».

![Options de réception Nightscout activées](../images/NSsafety3.png)

### Autres paramètres de sécurité

Gardez votre téléphone à jour comme décrit dans [La sécurité avant tout](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Configuration manuelle de Nightscout

Nous supposons que vous avez déjà un site Nightscout. Sinon, consultez la page [Nightscout](http://nightscout.github.io/nightscout/new_user/) pour les instructions complètes d'installation. Les instructions ci-dessous sont les paramètres que vous devrez aussi ajouter à votre site Nightscout. Votre site Nightscout doit être au moins en version 15. Vérifiez donc que vous utilisez la [dernière version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), sinon vous aurez un message d'erreur dans votre application AAPS.

* [Modifiez vos variables](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Ajouter ou modifier les variables comme suit :
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Diverses alarmes peuvent être définies pour [surveiller la pompe](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), en particulier une alarme sur le pourcentage de pile : 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Enregistrez les modifications. Votre site Nightscout devrait maintenant pouvoir afficher les pilules. Vous pouvez forcer leur affichage par défaut en les ajoutant dans `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Pilules Nightscout](../images/nightscout1.png)

## Nightscout en tant que SaaS payant (Software as a Service, logiciel en tant que service)

Utilisez l'interface web du fournisseur pour définir les variables. Contactez le service d'assistance du fournisseur si nécessaire.