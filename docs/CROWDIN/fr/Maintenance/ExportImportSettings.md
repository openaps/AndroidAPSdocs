# Créer et restaurer des sauvegardes

Une fois installé sur votre téléphone, AAPS devient un « dispositif médical » dont vous dépendez chaque jour. Il est fortement recommandé d'avoir un plan de secours pour le cas où votre téléphone tombe en panne, est volé ou perdu. Il est donc essentiel de se préparer en se demandant : « Et si ? »

Pour restaurer votre configuration AAPS sur un téléphone existant ou nouveau, il est important de garder les éléments suivants dans un endroit sûr (c'est-à-dire : pas sur votre téléphone). La bonne pratique est de garder au moins deux sauvegardes séparées : sur un disque dur local, une clé USB et (de préférence) sur un stockage cloud comme Google Drive ou Microsoft 365 OneDrive. Si vos sauvegardes sont dans le cloud, vous aurez toujours accès depuis votre téléphone à tout ce qu'il faut pour restaurer votre configuration, partout et à tout moment.

Pensez à acheter un deuxième téléphone de secours et à vous entraîner à y restaurer AAPS, pour vérifier que ce téléphone fonctionne comme prévu. Cette étape vous donnera la certitude que votre plan de secours fonctionne et que vous pouvez continuer à utiliser AAPS sans interruption si votre téléphone principal n'est plus disponible.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

Pour pouvoir restaurer, il est important d'avoir sous la main les éléments suivants :

- Votre **fichier keystore d'Android Studio** et le **mot de passe** associé : nécessaires pour (re)compiler le fichier d'installation .APK d'AAPS.
- Une copie récente du **fichier d'installation .APK d'AAPS**
- Un fichier récent d'**export des paramètres** : pour restaurer les paramètres importants (y compris vos objectifs !).
- Votre **mot de passe principal AAPS**
- Sauvegardes des autres applications : comme BYODA et/ou xDrip.
- Des notes personnelles sur votre configuration.

Voici les éléments dont il est recommandé de garder des sauvegardes.

## Créer des sauvegardes

### Fichier keystore de l'ordinateur utilisé pour compiler l'APK
Quand vous compilez votre fichier d'installation .APK avec Android Studio, celui-ci utilise le **fichier keystore et son mot de passe pour signer le fichier d'installation .APK**. Pour mettre à jour votre installation AAPS actuelle, le fichier d'installation .APK de la mise à jour doit être signé avec le même keystore que celui de la première installation. Lors d'une mise à jour, tous les paramètres et la base de données d'AAPS sont conservés. Sans cela, vous devez d'abord désinstaller l'application actuelle, puis [réinstaller](#reinstall-aaps) et reconfigurer AAPS.

Garder le keystore et son mot de passe rendra les futures mises à jour de l'APK beaucoup plus simples, surtout si vous devez compiler l'application sur un nouvel ordinateur. Voir la section [Mise à jour d'AAPS](../Maintenance/UpdateToNewVersion.md) pour savoir comment utiliser le keystore lors de la compilation d'un nouvel APK.

**Quand sauvegarder :** le keystore doit être sauvegardé après la première compilation du fichier d'installation .APK d'**AAPS**.

**Comment sauvegarder :** trouvez le chemin de votre keystore. Si vous ne vous en souvenez pas, vous pouvez le trouver dans Android Studio en choisissant **Build > APK > Next**. Le chemin sera indiqué dans « Key store path ». Avec votre explorateur de fichiers, allez à ce chemin et faites une copie de votre fichier keystore (avec l'extension `.jks`). Enregistrez-le dans un espace cloud sûr, au cas où votre ordinateur ne serait plus disponible. Notez aussi le mot de passe du keystore, l'alias de la clé et le mot de passe de la clé.

### Copies de l'APK le plus récent
Si votre téléphone **AAPS** principal est perdu ou abîmé, une copie de l'APK vous permettra de reprendre rapidement **AAPS** sur un nouveau téléphone. Remarque : vous aurez aussi besoin d'une sauvegarde de vos préférences, comme indiqué ci-dessous.

**Quand sauvegarder :** gardez une sauvegarde du dernier APK installé sur votre téléphone **AAPS** principal. Vous pouvez aussi garder une version plus ancienne, au cas où vous auriez besoin d'y revenir pour une raison quelconque.

**Comment sauvegarder :** gardez une copie sur l'ordinateur qui a servi à compiler l'APK avec Android Studio. Il est aussi recommandé d'utiliser une plateforme cloud pour garder une copie de l'APK d'installation. Assurez-vous de savoir où trouver ces deux sauvegardes en cas de besoin. Pensez à créer des dossiers dédiés pour ranger ces sauvegardes.

### Fichier des paramètres AAPS (aussi appelé « Préférences »)

```{admonition} Where are preferences stored on my phone?
:class: tip
Vous trouverez vos paramètres dans le **Répertoire AAPS** que vous avez choisi lors de la [configuration d'AAPS](#SetupWizard-StoragePermission).</br>
Vous pouvez aussi changer le **Répertoire AAPS** sur l'écran **Maintenance** (**menu** (☰) > **Maintenance**), voir [Définir le répertoire AAPS local](#preferences-maintenance-logdirectory).
```

Avec une copie du fichier d'installation APK (voir ci-dessus) et votre fichier **Paramètres**, vous pouvez rapidement être opérationnel sur un téléphone existant ou nouveau.

Le fichier **Paramètres** sert à adapter l'application AAPS à votre configuration. Ils comprennent par exemple vos paramètres de **Configuration**, l'état des objectifs, les paramètres de communication avec des services tiers (par ex. Nightscout, Tidepool), les automatisations et les profils.

Exporter les paramètres d'AAPS dans un fichier vous permet de restaurer sa configuration telle qu'elle était à un moment précis. Comme indiqué, en plus de tous les paramètres de configuration, le fichier d'export contient aussi l'état de vos objectifs, que vous devez restaurer lors d'une **(ré)installation** d'AAPS. Sans cela, vous devrez refaire tous les objectifs depuis le début pour activer la boucle fermée. Les fichiers de paramètres vous permettent aussi de restaurer les « derniers paramètres qui fonctionnaient bien » pour annuler des changements de configuration.

**Quand sauvegarder les paramètres d'AAPS :**
* Chaque fois que vous terminez un objectif, pour ne pas perdre votre progression. _Sans copie de vos **Paramètres**, vous devrez refaire tous les objectifs si vous devez réinstaller AAPS ou remplacer votre téléphone._

* Chaque fois que vous prévoyez des changements importants de votre configuration (changer les réglages SMB, changer de type d'insuline, changer de pompe, modifier des automatisations), sauvegardez vos **Paramètres** avant et après les changements. Ainsi, vous avez vos paramètres les plus récents et une copie des paramètres d'avant les changements, au cas où vous devriez revenir en arrière.

* Tubeless pumps (Such as Omnipod and Medtrum) users only: the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. Si vous n'avez pas de copie de vos préférences exportée après le démarrage de votre pod actuel, vous devrez démarrer un nouveau pod si vous devez remplacer votre téléphone actuel.

**Comment sauvegarder manuellement :**

1. If this is your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). Choisissez un mot de passe et notez-le dans un endroit sûr. _Sans ce mot de passe, vous ne pourrez pas accéder à vos sauvegardes de **Paramètres**._

2. Depuis l'écran principal d'**AAPS**, ouvrez le **menu** (☰) > **Maintenance**. Choisissez où enregistrer le fichier avec les puces **Local** et **Cloud** à côté de **Exporter les paramètres** (voir **Exporter ou importer les paramètres** ci-dessous), puis appuyez sur **Exporter les paramètres**. **AAPS** indique où ira le fichier : le nom du fichier pour **Local**, **Google Drive** pour **Cloud**. Appuyez sur **OK**.

   ![Exporter les paramètres vers un fichier local](../images/Maintenance/export_settings_confirm_local.png)

   ![Exporter les paramètres vers Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Saisissez le mot de passe principal défini ci-dessus et appuyez sur **OK**.

   ![Mot de passe principal pour l'export](../images/Maintenance/export_settings_password.png)

   **Paramètres exportés** (local) ou **Exportation Cloud réussie** (cloud) confirme l'export.

   ![Message Paramètres exportés](../images/Maintenance/export_settings_done_local.png)

   ![Message Exportation Cloud réussie](../images/Maintenance/export_settings_done_cloud.png)

3. Avec l'explorateur de fichiers de votre téléphone (souvent appelé « Fichiers » ou « Mes fichiers »), allez dans Stockage interne > AAPS > preferences. Vous y verrez une copie de tous les fichiers de préférences exportés. Le nom du fichier doit être `YYYY-MM-DD_Time_appname.json`. Envoyez ce fichier sur la plateforme cloud de votre choix. Ensuite, depuis la plateforme cloud, téléchargez aussi une copie sur votre ordinateur.

(ExportImportSettings-Settings-Export)=

## Export des paramètres

```{admonition} Where are preferences stored on my phone?
:class: tip
Vous trouverez vos paramètres dans le **Répertoire AAPS** que vous avez choisi lors de la [configuration d'AAPS](#SetupWizard-StoragePermission).</br>
Vous pouvez aussi changer le **Répertoire AAPS** sur l'écran **Maintenance** (**menu** (☰) > **Maintenance**), voir [Définir le répertoire AAPS local](#preferences-maintenance-logdirectory).
```

Il est recommandé d'exporter régulièrement les paramètres, surtout avant et après des changements de configuration. Vous pouvez faire les exports **manuellement ou (de préférence) par une automatisation**. Notez bien votre mot de passe principal AAPS et sauvegardez vos fichiers de paramètres en les copiant hors de votre téléphone, par exemple vers un stockage cloud.

**Remarque** : _Les paramètres exportés seront chiffrés avec votre mot de passe principal AAPS : sans le mot de passe principal utilisé pour l'export, vous ne pourrez pas importer le fichier de paramètres !_

### Exporter ou importer les paramètres
Pour exporter ou importer les paramètres, ouvrez le **menu** (☰) et choisissez **Maintenance**. Sous **Gestion de fichiers**, les puces **Local** et **Cloud** à côté de **Exporter les paramètres** et **Importer les paramètres** choisissent où le fichier de paramètres est enregistré ou lu : **Local** est le répertoire AAPS sur votre téléphone, **Cloud** est disponible dès qu'un [Répertoire Cloud](#preferences-maintenance-cloud) est configuré. Appuyer sur une puce l'active ou la désactive ; au moins une reste toujours choisie, et les deux lignes partagent le même choix. Appuyez ensuite sur **Exporter les paramètres** ou **Importer les paramètres** pour commencer.

![Menu Maintenance avec les lignes Exporter les paramètres et Importer les paramètres](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatiser l'export des paramètres

To automate settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

Vous pouvez maintenant configurer l'[Automatisation](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) pour exporter les paramètres, soit régulièrement (_par ex._ chaque semaine), soit après un changement de pod.

_**Remarque :** lors de l'import des paramètres, l'utilisateur doit toujours saisir le mot de passe principal AAPS !_

![Paramètres > Maintenance > Export des paramètres sans surveillance avec l'interrupteur Activer l'export automatique des paramètres](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Restaurer vos sauvegardes sur un nouveau téléphone ou une nouvelle installation d'AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
Vous trouverez vos paramètres dans le **Répertoire AAPS** que vous avez choisi lors de la [configuration d'AAPS](#SetupWizard-StoragePermission).</br>
Vous pouvez aussi changer le **Répertoire AAPS** sur l'écran **Maintenance** (**menu** (☰) > **Maintenance**), voir [Définir le répertoire AAPS local](#preferences-maintenance-logdirectory).</br>
Si **AAPS** perd l'accès à ce répertoire (cela peut arriver après une réinstallation ou après avoir vidé le stockage de l'application), il affiche une notification **L'accès au répertoire AAPS a été perdu** et n'enregistre plus les paramètres sur le téléphone tant que vous n'avez pas [choisi à nouveau le répertoire](#preferences-maintenance-logdirectory).
```

Suivez ces instructions si vous avez une sauvegarde de votre APK et de vos **Paramètres** à charger sur un nouveau téléphone, ou si vous avez dû supprimer et réinstaller l'APK sur votre téléphone actuel pour une raison quelconque.

_Si vous mettez à jour **AAPS** avec un APK compilé avec le même keystore, vous ne devriez pas avoir besoin de suivre cette procédure. Il est quand même conseillé de faire une sauvegarde avant d'appliquer la mise à jour._

Si vous mettez à jour **AAPS** après avoir perdu ou remplacé votre keystore d'origine (par ex. avec un nouvel ordinateur de compilation, sans transférer le keystore), sauvegardez d'abord tous les paramètres comme indiqué ci-dessus, puis désinstallez la version actuelle d'**AAPS** sur votre téléphone. Voir [Réinstaller AAPS avec un nouveau keystore](#reinstall-aaps) pour la procédure complète.

Si nécessaire, [configurez votre récepteur MGC / source de glycémie](../Getting-Started/CompatiblesCgms.md) avant les étapes ci-dessous

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Le fichier **Préférences** contient la session du pod ou du patch qui était actif au moment de l'export.
- **Exportez juste après chaque activation de pod ou de patch** et copiez le fichier hors de votre téléphone.
- **Même téléphone, pod toujours en marche :** laissez **Remplacer aussi les paramètres de pompe** décoché. Votre pod actuel est conservé et seuls les autres paramètres sont importés.
- **Nouveau téléphone qui reprend le pod :** cochez **Remplacer aussi les paramètres de pompe**, et utilisez uniquement un fichier exporté pendant le pod que vous portez maintenant. Un fichier d'un pod précédent remplace la session de votre pod actuel, et vous devrez démarrer un nouveau pod.
- **Une ancienne session de pod a été importée par erreur :** **AAPS** continue d'essayer de joindre ce pod et vous ne pouvez pas en activer un nouveau. Désactivez-le ; si cela échoue, abandonnez-le (voir par exemple [Abandonner un pod](#omnipod-dash-discard-pod) pour Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Par défaut, un import ne touche pas aux paramètres de votre pompe : la pompe choisie dans **Configuration**, son appairage et tous ses autres paramètres restent tels qu'ils sont sur ce téléphone. Cochez **Remplacer aussi les paramètres de pompe** sur l'écran d'import uniquement si vous restaurez sur un nouveau téléphone qui doit reprendre la même pompe. Un import ne supprime jamais les paramètres qui ne sont pas dans le fichier.
```

1. Avec la copie de sauvegarde de votre APK (voir ci-dessus), suivez les instructions pour une [nouvelle installation](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Lancez **AAPS** et accordez toutes les autorisations demandées

3. Quittez l'Assistant de configuration. Nous allons importer tous les paramètres nécessaires depuis la copie de sauvegarde des **Paramètres**

4. Depuis l'écran principal d'**AAPS**, appuyez sur **Autoriser** et accordez toutes les autorisations listées dans le panneau **Autorisations requises** en haut

5. Depuis l'écran principal d'**AAPS**, définissez le mot de passe principal dans [Paramètres > Protection](#Preferences-master-password) avec le même mot de passe que celui utilisé pour vos sauvegardes.

6. Si ce n'est pas encore fait, [définissez le **Répertoire AAPS**](#preferences-maintenance-logdirectory) : depuis l'écran principal d'**AAPS**, ouvrez le **menu** (☰) > **Maintenance** > **Répertoire AAPS**.

7. Depuis l'écran principal d'**AAPS**, ouvrez le **menu** (☰) > **Maintenance** > **Exporter les paramètres** > saisissez le mot de passe principal défini ci-dessus > **OK**. Cela crée le dossier preferences s'il n'existe pas encore sur votre téléphone.

8. Téléchargez la sauvegarde de votre fichier **Préférences** depuis votre plateforme cloud.

9. Avec votre explorateur de fichiers (souvent appelé « Fichiers » ou « Mes fichiers »), déplacez le fichier de vos téléchargements vers `/internal storage/AAPS/preferences` si votre **Répertoire AAPS** est réglé sur `/internal storage/AAPS`

10. Depuis l'écran principal d'**AAPS**, ouvrez le **menu** (☰) > **Maintenance** et appuyez sur **Importer les paramètres**. Choisissez le fichier de préférences à restaurer (le plus récent est en haut). Assurez-vous de choisir le bon fichier de préférences : tous les fichiers .json du dossier preferences (ou du répertoire cloud, avec **Cloud**) seront affichés.

    ![Liste des fichiers de paramètres à importer](../images/Maintenance/import_settings_files.png)

    **AAPS** affiche les détails du fichier. Saisissez le mot de passe principal défini ci-dessus et appuyez sur **Déchiffrer et vérifier**.

11. Une fois le fichier décrypté, décidez quoi faire des paramètres de la pompe. Sur un nouveau téléphone qui reprend la même pompe, cochez **Remplacer aussi les paramètres de pompe** pour que l'appairage et les paramètres de la pompe viennent du fichier. Laissez la case décochée pour garder la pompe avec laquelle ce téléphone est déjà appairé. Appuyez ensuite sur **Import**.

    ![Fichier de paramètres décrypté avec la case Remplacer aussi les paramètres de pompe et le bouton Import](../images/Maintenance/import_settings_review.png)

12. **AAPS** demande **Appliquer les paramètres importés ?** et indique combien de paramètres vont changer et, si vous avez laissé la case décochée, combien de paramètres de la pompe sont conservés. Rien n'a encore été écrit, donc **Annuler** laisse votre téléphone exactement comme il était. Appuyez sur **OK** pour appliquer.

    ![Apply imported settings dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** applique les paramètres importés tout de suite, sans redémarrer. Seuls les plugins dont les paramètres ont changé sont redémarrés. Pendant ce temps, **AAPS** affiche **Application des paramètres…** ; si la pompe est occupée, il affiche **En attente de la pompe…** et applique les paramètres dès que la pompe est libre. Si la pompe est toujours occupée après une minute, **AAPS** propose de réessayer. Un message **Paramètres appliqués** confirme que les paramètres importés sont utilisés. Tout traitement mis en file d'attente pendant l'import est abandonné et **AAPS** vous indique qu'il a été annulé, afin que rien ne soit envoyé deux fois à la pompe.

    ![Message Paramètres appliqués](../images/Maintenance/import_settings_applied.png)

Si le fichier a choisi une pompe que cette version d'**AAPS** ne possède pas, **AAPS** passe à la **Pompe virtuelle** et vous le signale. Choisissez à nouveau votre pompe dans **Configuration** et vérifiez ses paramètres.

14. Utilisateurs de pompes sans tubulure (Omnipod et Medtrum) uniquement : si vous avez coché **Remplacer aussi les paramètres de pompe** et que vos **Préférences** n'ont pas été sauvegardées avec le pod que vous utilisez actuellement, vous devrez démarrer un nouveau pod pour commencer l'administration d'insuline.

**Dépannage :** si vous n'arrivez pas à activer un profil depuis l'écran principal d'**AAPS**, ouvrez le **menu** (☰) en haut à gauche > **Configuration** > **Pompe** > passez à **Pompe virtuelle** > puis revenez à votre type de pompe

### Remarque pour les utilisateurs de Dana RS

- Si vous avez coché **Remplacer aussi les paramètres de pompe**, les paramètres de connexion de la pompe sont aussi importés : **AAPS** sur votre nouveau téléphone « connaîtra » déjà la pompe et ne lancera donc pas de recherche Bluetooth.
- Veuillez associer manuellement le nouveau téléphone et la pompe.