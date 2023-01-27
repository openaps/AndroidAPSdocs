# Vérifications nécessaires après la mise à jour vers AndroidAPS 3.0

* **La version minimale d'Android est maintenant 9.0.**
* **Les données ne sont pas migrées vers la nouvelle base de données.**

  Ne vous plaignez pas, c'est un changement si énorme qu'il n'était tout simplement pas possible de le faire. Ainsi après la mise à jour de l'IA, GA, traitements, etc seront effacés. Vous devez créer un nouveau [changement de profil](../Usage/Profiles) et commencer avec zéro IA et zéro GA.

  Planifiez la mise à jour avec soin !!! C'est mieux si vous le faites sans insuline et glucides actifs

* Veuillez consulter les [Notes de Version](../Installing-AndroidAPS/Releasenotes) pour plus de détails sur les nouvelles fonctions et les améliorations.


## Vérification des automatisations

* De nouvelles restrictions ont été introduites. Vérifiez vos automatisations, en particulier si les conditions d'activation sont toujours valides.
* Si l'une des conditions est manquante, vous devez l'ajouter à nouveau.
* Les automatisations en rouge contiennent des actions invalides, modifiez les et réinitialisez avec des valeurs valides

  Exemple : Un changement de profil à 140% était autorisé avant, mais il est maintenant restreint à 130%.

## Vérification de vos paramètres NSClient et des options de synchronisation

* L'implémentation du plugin NSClient a complètement changé.
* Allez dans l'onglet NSClient et ouvrez les paramètres dans le menu de droite. Une nouvelle option "Synchronisation" est maintenant disponible.
* Vous pouvez maintenant choisir en détail quels éléments seront synchronisés avec votre site Nightscout.

## Profil Nightscout ne peut plus être sélectionné
* Le profil Nightscout est mort, repose en paix!
* Pour copier votre profil Nightscout actuel dans un profil local, allez sur la page Traitements (maintenant accessible dans le menu de droite).
* Recherchez un changement de profil avec 100% et appuyez sur "dupliquer".
* Un nouveau profil local est ajouté, valable à partir de la date actuelle.
* Pour mettre à jour le profil du côté NS, utilisez "Clone" (enregistrement!!, pas profil) et enregistrez les modifications. Vous devriez voir "Profil valide à partir de :" et la date actuelle.

## Réinitialiser le mot de passe principal
* Vous pouvez maintenant réinitialiser votre mot de passe principal au cas où vous l'auriez oublié.
* Vous devez ajouter un fichier nommé `PasswordReset` dans le répertoire `/AAPS/extra` du système de fichiers de votre téléphone.
* Redémarrez AndroidAPS.
* Le nouveau mot de passe sera le numéro de série de votre pompe active.
* Pour Dash: Le numéro de série est toujours 4241.
* Pour EROS, il est également listé dans l'onglet POD dans "Numéro de série"

## Signal d'avertissement à côté de la glycémie

À partir d'Android 3.0, vous pouvez avoir un signal d'avertissement à côté de votre glycémie sur l'écran principal.

  ![Avertissement de glycémie rouge](../images/bg_warn_red.png)

  ![Avertissement de glycémie jaune](../images/bg_warn_yellow.png)

For details see [AAPS screens page](../Getting-Started/Screenshots.md#bg-warning-sign)


## Message d'erreur : Données provenant de pompes différentes

   ![Message d'erreur : Données provenant de pompes différentes](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](../Configuration/Config-Builder.md#pump). Sélectionnez la pompe virtuelle puis resélectionnez votre pompe réelle. Cela réinitialisera l'état de la pompe.
